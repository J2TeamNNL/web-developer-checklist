let hasRun = false;
const parser = new DOMParser();

const safeInnerHTML = (parent, string) => {
  const children = parser.parseFromString(string, "text/html").body.childNodes;
  for (let node of children) {
    parent.appendChild(node.cloneNode(true));
  }
};

(function () {
  const currentBrowser = chrome.tabs ? chrome : browser;
  currentBrowser.tabs.query({ active: true, currentWindow: true }, function (
    tabs
  ) {
    currentBrowser.tabs.executeScript(tabs[0].id, {
      file: "/rules.js",
      runAt: "document_end",
    });
  });

  currentBrowser.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (!hasRun && request.type === "done") {
      hasRun = true;
      const result = request.data;

      Ajax.load(result, updateItem);
      createResults(result);
    }
    return true;
  });

  document.body.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      e.preventDefault();
      window.open(e.target.href);
    }
  });

  function createResults(page) {
    document.getElementById("results").innerText = "";

    for (const cat in page) {
      if (cat === "url" || cat === "currentPage") continue;

      var ul =
        document.querySelector("ul[data-cat='" + cat + "']") ||
        createHeader(cat);

      for (const item in page[cat]) {
        const li = document.createElement("li");
        li.classList.add(
          page[cat][item].result === "n/a" ? "question" : page[cat][item].result
        );
        li.setAttribute("data-item", item);

        const elementWrapper = document.createElement("div");
        elementWrapper.className = "elementWrapper";

        elementWrapper.addEventListener(
          "click",
          (function (el) {
            return () => {
              el.parentNode.classList.toggle("open");
            };
          })(elementWrapper)
        );

        const check = document.createElement("img");
        check.src = "./assets/check.svg";
        check.className = "check-icon";
        elementWrapper.appendChild(check);

        const cross = document.createElement("img");
        cross.src = "./assets/cross.svg";
        cross.className = "cross-icon";
        elementWrapper.appendChild(cross);

        const question = document.createElement("img");
        question.src = "./assets/question.svg";
        question.className = "question-icon";
        elementWrapper.appendChild(question);

        const text = document.createElement("p");
        text.innerText = page[cat][item].text;
        elementWrapper.appendChild(text);

        const rightArrow = document.createElement("span");
        rightArrow.className = "right-arrow";

        const arrow =
          '<svg height="10" viewBox="0 0 6 10" width="6" xmlns="http://www.w3.org/2000/svg"><path d="m72 6 3.9988407 4 4.0011593-4" fill="none" stroke="#25a9ef" stroke-linecap="square" stroke-width="1.499565" transform="matrix(0 -1 1 0 -5 81)"/></svg>';

        safeInnerHTML(rightArrow, arrow);
        elementWrapper.appendChild(rightArrow);
        li.appendChild(elementWrapper);

        const details = document.createElement("div");
        details.className = "details";

        if (page[cat][item].html) {
          const detailsInfo = document.createElement("div");
          detailsInfo.className = "detailsInfo";
          detailsInfo.appendChild(
            parser.parseFromString(page[cat][item].html, "text/html")
              .body
          );
          details.appendChild(detailsInfo);
        }

        const a = document.createElement("a");
        a.innerText = page[cat][item].description;
        a.href = page[cat][item].url;
        details.appendChild(a);

        li.appendChild(details);

        ul.appendChild(li);
      }
    }

    reportProgress();
  }

  function createHeader(cat) {
    const ul = document.createElement("ul");
    ul.setAttribute("data-cat", cat);

    const header = document.createElement("li");
    header.innerText = cat;
    ul.appendChild(header);

    document.getElementById("results").appendChild(ul);

    return ul;
  }

  function updateItem(key, item) {
    const li = document.querySelector("li[data-item='" + key + "']");

    if (li) {
      li.classList.remove("false", "true", "question");
      li.classList.add(li.className === "n/a" ? "question" : item.result);

      const p = li.querySelector("p");
      p.innerText = "";
      safeInnerHTML(p, item.text);
      const span = li.querySelector(".details");

      if (span) {
        if (item.url) {
          const a = document.createElement("a");
          a.innerText = item.description;
          a.href = item.url;
          span.replaceChild(a, span.firstChild);
        } else {
          span.innerText = item.description;
        }
      }

      reportProgress();
    }
  }

  function reportProgress() {
    const fail = document.querySelectorAll(".false").length;
    const success = document.querySelectorAll(".true").length;
    const question = document.querySelectorAll(".question").length;
    const all = fail + success + question;

    const percent = (success / all) * 100;

    const progress = document.getElementById("progress");
    progress.querySelector(".ok").innerText = success;
    progress.querySelector(".all").innerText = all;
    progress.querySelector(".fill").style.width = percent + "%";
  }
})();
