# Webcaster
## A screen cast recording experiment

I am not entirely sure how I ended up writing this, but hey!  
It's kinda cool, I think.

[Try it here](https://googledrive.com/host/0B9MEoZDi5-peZVdwT3lDT09iaEE/index.html)

## Remark
Screen capture is currently only allowed on websites served via **HTTPS**, so if you want to try it out yourself, you need to host it with SSL (Google Drive is an option).

## What it is
This is a web application that uses [getUserMedia](http://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia) 
and an [experimental screen capture feature for it](https://html5-demos.appspot.com/static/getusermedia/screenshare.html).

I take two inputs (webcam and screen capture) and draw them together in a canvas so you get a stream of frames with you and your screen.

To get a video to use elsewhere, I use [Whammy.js]() to record the frames into WebM.  
When you're done recording, you can encode and download that video file.

## So when is that experimental feature going to be widely available?
Well, at least [Firefox seems to work on it](https://bugzilla.mozilla.org/show_bug.cgi?id=742832) (see [this issue too](https://bugzilla.mozilla.org/show_bug.cgi?id=906956) and Chrome hides it behind a feature flag at the moment.

I guess this will stay experimental for a while.  
Let's see...
