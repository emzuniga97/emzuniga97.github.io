function colorSwap () {
  var r = Math.floor(Math.random()*255);
  console.log(r);
  var g = Math.floor(Math.random()*255);
  console.log(g);
  var b = Math.floor(Math.random()*255);
  console.log(b);

  document.getElementById("home").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

/* rgb(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)); */
