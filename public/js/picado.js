var drops = [];

function Drop (rgb, loc){
  this.core = new Path.Circle({
    center: loc,
    radius: 10,
    fillColor: {hue: rgb, saturation: 1, brightness: 1},
    strokeColor: {hue: rgb, saturation: 1, brightness: 1}
  })
  this.core.applyMatrix = false;
}

Drop.prototype = {

    grow: function(factor, limit, peers) {
       // console.log(this.core.scaling.x);
        //console.log(limit);

        if (this.core.scaling.x < limit){
            var speedup = 1 + peers / 500;
          //  console.log(speedup);
            this.core.scale(factor * speedup);
        }

        if (this.core.opacity > 0.001){
           this.core.opacity -= 0.01;
        }
    }
}

function onMouseUp(event){
    var colorHue = Math.random() * 360;
    //console.log(colorHue);
    drops.push(new Drop(colorHue, event.point));
}

var ac, origin, analyser, frequencyData;

var count = 0;
var previousVol = 0;

function onFrame(event){

    for (var i = 0; i < drops.length; i++){

        single = drops[i];
        single.grow(1.04, 25, drops.length);
        if(single.core.opacity < 0.001){
            single.core.opacity = 0;
            drops.splice(i, 1);
        }
    }
    analyser.getByteFrequencyData(frequencyData);
    count++;
    console.log(frequencyData);
    console.log(count);
    var volume = 0;
    for (var j = 0; j < frequencyData.length; j++){
      volume += frequencyData[j];
    }
    console.log(volume);

    if (volume > (previousVol + 8000)){
      console.log("delta sound");
      var colorHue = Math.random() * 360; // generate random color
      var target = Point.random() * view.size; // generate random point
      drops.push(new Drop(colorHue, target));
    }
    previousVol = volume;
/*
    for(var i = 0; i<analyser.frequencyBinCount; i++){
        console.log(frequencyData);
    }
*/
}


var AudioContext = window.AudioContext || window.webkitAudioContext;

if(AudioContext){
     ac = new AudioContext();
     origin = ac.createBufferSource();
     analyser = ac.createAnalyser();
     analyser.smoothingTimeConstant = 0.25;
     analyser.fftSize = 2048;
     frequencyData = new Uint8Array(analyser.frequencyBinCount);
     origin.connect(analyser, 0 ,0);
     origin.connect(ac.destination);

     var soundUrl = 'https://emzuniga97.github.io/public/assets/fromEden.mp3';
     var req = new XMLHttpRequest();
     req.open("GET", soundUrl, true);
     req.responseType = "arraybuffer";

     req.onload = function () {
       ac.decodeAudioData(
         req.response,
         function(buffer) {
           origin.buffer = buffer;
           origin.loop = false;
           origin.start(0);
           view.play();
         },

         function(buffer){
           alert("Error loading sound file.");
         }
       );
     };
     req.send();

} else {
     alert('Error playing audio');
}
