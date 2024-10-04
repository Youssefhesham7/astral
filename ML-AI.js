// 0 ------------> 10 is rate of H.R.H.D.P.F.M

var h      /*heat*/
var r      /*rain*/
var hum    /*humidity*/
var d      /*drought*/
var p      /*pest*/
var f      /*flood*/
var m      /*metal*/

var heat 
var rain

if (h <= 51 && r == 3) {
    document.getElementById("demo").innerHTML = "Test 1 is Good!";
} else {
    document.getElementById("demo").innerHTML = "Test 1 is Not!";
}



function deductFromTotal() {
  var h = document.getElementById("heat").value;
  if (h == 5 ) {
    document.getElementById("demo1").innerHTML = `is ${h}`;
  } else {
    document.getElementById("demo1").innerHTML = "Test 10 is Not!";
  }
}