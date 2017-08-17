var protoDrop = new Path.Circle({
  center: [0,0],
  radius: 10,
  fillColor: 'black',
  strokeColor: 'black'
});

var drop = new Symbol(protoDrop);

function onMouseUp(event){
  var single = drop.place(event.point);
  single.fillColor.hue = Math.random() * 360;
  console.log(event.point.x);
  console.log(event.point.y);
}

var children = project.activeLayer.children;

function onFrame(event){
  for (var i = 0; i < children.length; i++){
    child = children[i];

    if (child.scaling.x < 30){
      child.scale(1.04);
    }

    if (child.opacity > 0.001){
      child.opacity *= 0.99;
    } else {
      child.opacity = 0;
    }

  }
}
