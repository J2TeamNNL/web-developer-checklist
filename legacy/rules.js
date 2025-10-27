function GetBrowser() {
  try {
    if (browser.runtime) return browser;
  } catch (e) {
    return chrome;
  }
}

(function () {
  const OPEN_GRAPH_CHECK = ["title", "type", "image", "url"];
  const stylesheets = document.styleSheets.length;
  let count = 0;

  function load() {
    const domElements = document.getElementsByTagName("*").length,
      result = {
        url: location.protocol + "//" + location.host,
        currentPage: window.location.href,
        SEO: {
          microdata: {
            text: "Structured Data for Google Search",
            result:
              document.querySelector("[itemscope]") !== null ||
              document.querySelector("script[type='application/ld+json']") !==
                null,
            description: "Schema.org referrence",
            url: "http://schema.org/",
          },
          description: {
            text: "Meta description",
            result:
              document.querySelector("head>meta[name=description]") !== null,
            description: "Meta description",
            url: "https://moz.com/learn/seo/meta-description",
          },
          robotstxt: {
            text: "Website has a robots.txt file",
            result: "n/a",
            description: "Robots.txt tutorial",
            url: "http://tools.seobook.com/robots-txt/",
          },
        },
        Mobile: {
          mediaqueries: {
            text: "CSS Media Queries",
            result: mediaQueryLocal(),
            description: "Media queries explained",
            url: "http://cssmediaqueries.com/what-are-css-media-queries.html",
          },
          viewport: {
            text: "Viewport meta tag",
            result:
              document.querySelector("head>meta[name='viewport']") !== null,
            description: "Using the viewport",
            url:
              "https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag",
          },
        },
        Usability: {
          favicon: {
            text: "Favicon",
            result:
              document.querySelector("head>link[rel='icon']") !== null ||
              document.querySelector("head>link[rel='shortcut icon']") !==
                null ||
              document.querySelector("meta[itemprop='image']") !== null,
            description: "Online generator",
            url: "http://www.xiconeditor.com/",
          },
          friendlyurls: {
            text: "Use friendly URLs",
            result: location.href.indexOf("?") === -1,
            description: "Explanation and guide",
            url: "http://www.techterms.com/definition/friendly_url",
          },
          validator: {
            text: "HTML validation",
            result: "n/a",
            description: "Online validator",
            url:
              "http://validator.nu/?doc=" + encodeURIComponent(window.location),
          },
        },
        Accessibility: {
          landmarks: {
            text: "WAI-ARIA Landmarks",
            result:
              document.querySelector(
                "[role], main, footer, header, aside, section, article, nav"
              ) !== null,
            description: "Using Landmarks",
            url:
              "http://accessibility.oit.ncsu.edu/blog/2011/06/30/using-aria-landmarks-a-demonstration/",
          },
          alt: {
            text: "Use 'alt' attributes on images",
            result: document.querySelector("img:not([alt])") === null,
            description: "Image 'alt' attribute tips",
            url: "http://accessibility.psu.edu/images",
          },
        },
        "Social Media": {
          opengraph: {
            text: "OpenGraph",
            result: getOpenGraphResult(OPEN_GRAPH_CHECK),
            html: getOpenGraphResultHtml(OPEN_GRAPH_CHECK),
            description: "OpenGraph protocol reference",
            url: "http://ogp.me/",
          },
          ios: {
            text: "Apple iOS",
            result: document.querySelector("link[rel^='apple-']") !== null,
            description: "iOS integration",
            url:
              "http://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html",
          },
        },
        Performance: {
          elements: {
            text: "Number of DOM elements (" + domElements + ")",
            result: domElements < 2000,
            description: "Reduce the # of DOM elements",
            url: "https://web.dev/dom-size/",
          },
        },
      };

    if (!result.Mobile.mediaqueries.result) {
      mediaQueryRemote(function (state) {
        result.Mobile.mediaqueries.result = state;
      });
    }
    GetBrowser().runtime.sendMessage(
      { type: "result", data: result },
      function (response) {}
    );
  }

  function getOpenGraphResult(toCheck) {
    for (let i = 0, l = toCheck.length; i < l; i++) {
      if (
        document.querySelector(`meta[property^='og:${toCheck[i]}']`) === null
      ) {
        return false;
      }
    }

    return true;
  }

  function getOpenGraphResultHtml(toCheck) {
    let result = "";

    toCheck.forEach((item) => {
      result += `<div class="${
        document.querySelector("meta[property^='og:" + item + "']") !== null
          ? "graph-pass"
          : "graph-error"
      }"><span>${item}</span></div>`;
    });

    return `<div class="graph-info">${result}</div>`;
  }

  function mediaQueryLocal() {
    const styles = document.querySelectorAll("style");

    for (let s = 0; s < styles.length; s++) {
      const style = styles[s];
      if (style.textContent.indexOf("@media") > -1) return true;
    }

    var links = document.querySelectorAll("link[media]");

    for (let i = 0; i < links.length; i++) {
      const attr = links[i].getAttribute("media");
      if (
        attr !== "print" &&
        attr !== "screen" &&
        attr !== "handheld" &&
        attr !== "aural" &&
        attr !== "projection" &&
        attr !== "tv" &&
        attr !== "braille"
      )
        return true;
    }

    try {
      for (let s = 0; s < document.styleSheets.length; s++) {
        const css = document.styleSheets[s];

        if (css.cssRules === null) continue;

        for (let r = 0; r < css.cssRules.length; r++) {
          if (css.rules[r] && css.rules[r].type === window.CSSRule.MEDIA_RULE) {
            return true;
          }
        }
      }
    } catch (ex) {
      return false;
    }

    return false;
  }

  function mediaQueryRemote(callback) {
    if (stylesheets === 0) {
      callback(false);
    }

    for (let s = 0; s < stylesheets; s++) {
      const css = document.styleSheets[s];

      if (
        css.href &&
        (css.href.indexOf("http://") === 0 ||
          css.href.indexOf("https://") === 0)
      ) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", css.href, true);
        xhr.onload = function () {
          if (xhr.readyState === 4) confirm(xhr, callback);
        };
        xhr.send();
      } else {
        confirm(null, callback);
      }
    }
  }

  function confirm(xhr, callback) {
    count += 1;

    if (xhr && xhr.status === 200 && xhr.responseText.indexOf("@media")) {
      callback(true);
    } else if (stylesheets === count) {
      callback(false);
    }
  }

  load();
})();
