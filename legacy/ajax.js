const Ajax = (function () {
  function load(page, updateItem) {
    // Robots.txt and XML Sitemap
    getUrl(page.url + "/robots.txt", function (xhr) {
      page.SEO.robotstxt.result = xhr.status === 200;
      updateItem("robotstxt", page.SEO.robotstxt);
    });

    // Favicon
    if (!page.Usability.favicon.result) {
      getUrl(page.url + "/favicon.ico", function (xhr) {
        if (xhr.status === 200) {
          page.Usability.favicon.result = true;
          updateItem("favicon", page.Usability.favicon);
        }
      });
    }

    // W3C validation
    if (page.Usability.validator.result === "n/a") {
      const xhr = new XMLHttpRequest();

      xhr.open(
        "GET",
        "https://validator.nu?out=json&level=error&laxtype=yes&doc=" +
          encodeURIComponent(page.currentPage),
        true
      );
      xhr.setRequestHeader("Content-type", "text/html");

      xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const json = JSON.parse(xhr.responseText);
          const errors = json.messages.length;

          page.Usability.validator.result = errors === 0;

          if (errors > 0) {
            let errorsText = errors === 1 ? "error" : "errors";
            page.Usability.validator.text +=
              "<span class='error'>" + errors + " " + errorsText;
          }

          updateItem("validator", page.Usability.validator);
        }
      };

      xhr.send(page.Usability.validator.html);
    }
  }

  function getUrl(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      url + (/\?/.test(url) ? "&" : "?") + new Date().getTime(),
      true
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr);
      }
    };
    xhr.send();
  }

  return {
    load: load,
  };
})();
