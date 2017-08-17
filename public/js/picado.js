var drops = [];

function Drop (rgb, loc){ // prototype for droplets
    this.core = new Path.Circle({
      center: loc,
      radius: 10,
      fillColor: {hue: rgb, saturation: 1, brightness: 1},
      strokeColor: {hue: rgb, saturation: 1, brightness: 1}
    })
    this.core.applyMatrix = false;
}

Drop.prototype = {

    grow: function(factor, limit, peers) { // ripples out drop

       if (this.core.scaling.x < limit){
          var speedup = 1 + peers / 100;
          //console.log(speedup);
          this.core.scale(factor * speedup);
       }

       if (this.core.opacity > 0.001){
           this.core.opacity *= .99;
       } else {
           this.core.opacity = 0;
       }
    }
}

function onMouseUp(event){
    var colorHue = Math.random() * 360; 
    drops.push(new Drop(colorHue, event.point));
}

function onFrame(event){
    for (var i = 0; i < drops.length; i++){

       single = drops[i];
       single.grow(1.04,25, drops.length);

       if(single.core.opacity == 0){
         drops.splice(i, 1); // remove old drops
       }
    }
}
