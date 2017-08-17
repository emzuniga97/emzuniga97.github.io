var protoDrop = new Path.Circle({
  center: [0,0],
  radius: 10,
  fillColor: 'black',
  strokeColor: 'black'
});

var drop = new Symbol(protoDrop);
drop.applyMatrix = false;

function onMouseUp(event){
  var single = drop.place(event.point);
  console.log(event.point.x);
  console.log(event.point.y);
}

var children = project.activeLayer.children;

function onFrame(event){
  for (var i = 0; i < children.length; i++){
    child = children[i];

    console.log(child.scaling);
    if (child.scaling < 5.0){
      child.scale(1.05);
    //  child.definition.opacity *= 0.75;
    }
  }
}
