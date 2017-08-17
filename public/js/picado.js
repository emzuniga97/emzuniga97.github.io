var square = new Path.Rectangle({
  point: [75,75],
  size: [75, 75],
  strokeColor: 'red'
});

var protoDrop = new Path.Circle({
  center: [0,0],
  radius: 10,
  fillColor: 'black',
  strokeColor: 'black'
});

var drop = new Symbol(protoDrop);

function onMouseClick(event){
  drop.place(event.point);
}

function onFrame(event){

}
