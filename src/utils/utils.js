export const convertHTMLToPlainText = (html) => {
  var tempDivElement = document.createElement("div");
  tempDivElement.innerHTML = html; // Set the HTML content with the given value
  return tempDivElement.textContent || tempDivElement.innerText || ""; // Retrieve the text property of the element
};
