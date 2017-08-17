// var protoDrop = new Path.Circle({
//   center: [0,0],
//   radius: 10,
//   fillColor: 'black',
//   strokeColor: 'black'
// });

// var drop = new Symbol(protoDrop);
var drops = [];

function Drop (rgb, loc){
  this.core = new Path.Circle({
    center: loc,
    radius: 10,
    fillColor.hue: rgb,
    strokeColor.hue: rgb
  })
}

function onMouseUp(event){
//  drop.definition.fillColor.hue = Math.random() * 360;
//  var single = drop.place(event.point);
  var color = Math.random() * 360;
  droplets.push(new Drop(color, event.point));
  console.log(event.point.x);
  console.log(event.point.y);
}

function onFrame(event){
  for (var i = 0; i < drops.length; i++){
    single = drops[i];

    if (single.core.radius < 30){
      single.core.radius *= 1.04;
    }

    // if (child.opacity > 0.001){
    //   child.opacity *= 0.99;
    // } else {
    //   child.opacity = 0;
    // }

  }
}
