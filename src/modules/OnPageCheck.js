function checkHTML(html) {
  const document = renderHTML(html);
  const results = runChecks(document);

  return results;
}

function renderHTML(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  return document;
}

function runChecks(document) {
  return {
    meta: {
      description: checkMetaDescription(document)
    },
    title: checkTitle(document)
  };
}

function checkMetaDescription(document) {
  const meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    return {
      passed: false,
      message: "No meta description element found."
    };
  }

  const content = meta.getAttribute("content");

  if (!content) {
    return {
      passed: false,
      message: "The meta description is empty."
    };
  }

  if (content.length < 160) {
    return {
      passed: false,
      message: `The meta description is too short (${
        content.length
      } of 160 characters used).`
    };
  }

  return {
    passed: true,
    message: "Your meta description is in good shape."
  };
}

function checkTitle(document) {
  const titleElement = document.querySelector("title");

  if (!titleElement) {
    return {
      passed: false,
      message: "No title element found."
    };
  }

  const title = titleElement.innerHTML;

  if (title.length < 50) {
    return {
      passed: false,
      message: `Your title is too short (${
        title.length
      } of suggested 50 characters).`
    };
  }

  return {
    passed: true,
    message: "Your title is in good shape."
  };
}

export default checkHTML;
