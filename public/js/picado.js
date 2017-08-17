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

function onFrame(event){
  for (var i = 0; i < children.length; i++){
    child = children[i];

    if (child.definition.radius < 200){
      child.definition.radius += 1;
    //  child.definition.opacity *= 0.75;
    }
  }
}
