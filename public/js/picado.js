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
            var speedup = 1 + peers / 100;
            console.log(speedup);
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

function onFrame(event){
    for (var i = 0; i < drops.length; i++){

        single = drops[i];
        single.grow(1.04,25, drops.length);
        if(single.core.opacity < 0.001){
            single.core.opacity = 0;
            drops.splice(i, 1);
        }
    }
}

var AudioContext = window.AudioContext || window.webkitAudioContext;

if(AudioContext){
     ac = new AudioContext();
     origin = ac.createBufferSource();
     analyser = ac.createAnalyser();

     frequencyData = new Uint8array(analyser.frequencyBinCount);
     origin.connect(analyser, 0 ,0);
     origin.connect(ac.destination);

} else {
  alert('Error playing audio');
}
