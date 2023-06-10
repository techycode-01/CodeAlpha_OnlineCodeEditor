function runCode() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = document.getElementById("cssCode").value;
  var jsCode = document.getElementById("jsCode").value;
  var previewFrame = document.getElementById("preview").contentWindow.document;

  previewFrame.open();
  previewFrame.write(htmlCode);
  previewFrame.write("<style>" + cssCode + "</style>");
  previewFrame.write("<script>" + jsCode + "</script>");
  previewFrame.close();
}
