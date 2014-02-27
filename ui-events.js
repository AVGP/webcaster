document.getElementById("start").addEventListener("click", function() {
  document.getElementById("encode").style.display = "inline";
  startRecord();
});

document.getElementById("encode").addEventListener("click", function() {
  record = false;
  var video = encoder.compile();
  var url = (window.webkitURL || window.URL).createObjectURL(video);
  document.body.innerHTML += "<a href=\"" + url + "\" download=\"screencast.webm\">Download</a>"
});
