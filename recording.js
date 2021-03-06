navigator.getMedia = (  navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);

var startRecord = function() {
  record = true;
  
  navigator.getMedia({audio: true, video: true}, function(localMediaStream) {
    cam.src = getObjectURL(localMediaStream);
  }, function() { alert("Boom"); });

  navigator.getMedia({
      video: {
        mandatory: {
          chromeMediaSource: 'screen'
        }
      }
    },
    function(localMediaStream) {
      screen.src = getObjectURL(localMediaStream);
    },
    function() {
      alert("Boom");
  });
  
  requestAnimationFrame(function captureFrame() {
    if(record) requestAnimationFrame(captureFrame);
    
    ctx.drawImage(screen, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(cam, CANVAS_WIDTH - 161, CANVAS_HEIGHT - 121, 160, 120);
    
    encoder.add(ctx);
  });
};

function getObjectURL(stream) {
  if(window.webkitURL) {
    return window.webkitURL.createObjectURL(stream);
  }
  else if(window.URL) {
    return window.URL.createObjectURL(stream);
  }
}
