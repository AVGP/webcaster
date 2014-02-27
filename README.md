# Webcaster
## A screen cast recording experiment

I am not entirely sure how I ended up writing this, but hey!  
It's kinda cool, I think.

## What it is
This is a web application that uses [getUserMedia](http://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia) 
and an [experimental screen capture feature for it](https://html5-demos.appspot.com/static/getusermedia/screenshare.html).

I take two inputs (webcam and screen capture) and draw them together in a canvas so you get a stream of frames with you and your screen.

To get a video to use elsewhere, I use [Whammy.js]() to record the frames into WebM.  
When you're done recording, you can encode and download that video file.

## So when is that experimental feature going to be widely available?
Well, at least [Firefox seems to have landed it](https://bugzilla.mozilla.org/show_bug.cgi?id=742832) and Chrome hides it behind a feature flag yet.
Let's see...