var protoDrop = new Path.Circle({
  center: [0,0],
  radius: 10,
  fillColor: 'black',
  strokeColor: 'black'
});

var drop = new Symbol(protoDrop);

function onClick(event){
  var single = drop.place(event.point);
  console.log(event.point.x);
  console.log(event.point.y);
}

function onFrame(event){

}
