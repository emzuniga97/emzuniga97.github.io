var protoDrop = new Path.Circle({
  center: [0,0],
  radius: 10,
  fillColor: 'black',
  strokeColor: 'black'
});

var drop = new Symbol(protoDrop);

function onMouseUp(event){
  var single = drop.place(event.point);
  console.log(event.point.x);
  console.log(event.point.y);
}

var children = project.activeLayer.children;

function onFrame(event){
  for (var i = 0; i < children.length; i++){
    child = children[i];

    if (child.scaling.x < 15){
      child.scale(1.005);
      child.opacity *= 0.999999;
    }
  }
}
