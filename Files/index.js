function myFunction() {
    var element = document.getElementById("myDIV");
  
    if (element.classList) { 
      element.classList.toggle("dark");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("dark");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("dark");
        element.className = classes.join(" "); 
    }
}
function DownloadFile(fileName) {
  var url = "../Files/" + fileName;
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
      var blob = new Blob([req.response], { type: "application/octetstream" });
      var isIE = false || !!document.documentMode;
      if (isIE) {
          window.navigator.msSaveBlob(blob, fileName);
      } else {
          var url = window.URL || window.webkitURL;
          link = url.createObjectURL(blob);
          var a = document.createElement("a");
          a.setAttribute("download", fileName);
          a.setAttribute("href", link);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      }
  };
  req.send();
};
