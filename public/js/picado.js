var protoDrop = new Path.Circle({
  center: [0,0],
  radius: 10,
  fillColor: 'black',
  strokeColor: 'black'
});

var drop = new Symbol(protoDrop);

function onClick(event){
  var single = drop.place(event.point);
}

function onFrame(event){

}
