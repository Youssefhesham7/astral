// 0 ------------> 10 is rate of H.R.H.D.P.F.M

var h      /*heat*/
var r      /*rain*/
var hum    /*humidity*/
var d      /*drought*/
var p      /*pest*/
var f      /*flood*/
var m      /*metal*/
var rain

function deductFromTotal() {
  h = document.getElementById("heatinp").value;
  var hint = h / 10
  if (h == 100) {
    document.getElementById("HEAT").innerHTML = "You can't plant becuse is SOOOOO HOT!!";
  } else if (h == 90) {
    document.getElementById("HEAT").innerHTML = "You can't plant becuse is SOOOOO HOT!!";

  } else if (h == 80) {
    document.getElementById("HEAT").innerHTML = "You can't plant becuse is SOOOOO HOT!!";

  } else if (h == 70) {
    document.getElementById("HEAT").innerHTML = "The variety of farming will now have a success rate 70%";

  } else if (h == 60) {
    document.getElementById("HEAT").innerHTML = "The variety of farming will now have a success rate 70%";

  } else if (h == 50) {
    document.getElementById("HEAT").innerHTML = "You can plant :)";

  } else if (h == 40) {
    document.getElementById("HEAT").innerHTML = "You can plant :)";

  } else if (h == 30) {
    document.getElementById("HEAT").innerHTML = "The variety of farming will now have a success rate 70%";

  } else if (h == 20) {
    document.getElementById("HEAT").innerHTML = "You can't plant becuse is cold";

  } else if (h == 10) {
    document.getElementById("HEAT").innerHTML = "You can't plant becuse is cold";

  } else {
    document.getElementById("HEAT").innerHTML = "it's NaN";
  }
}
function deductFromTotal1() {
  r = document.getElementById("r").value;
  if (r ==10) {
    document.getElementById("rain").innerHTML = "You can't plant!!!";
  } else if (r == 9 ){
    document.getElementById("rain").innerHTML = "You can't plant!!!";

  } else if (r == 8 ){
    document.getElementById("rain").innerHTML = "You can't plant!!!";

  } else if (r == 7 ){
    document.getElementById("rain").innerHTML = "You can't plant!!!";

  } else if (r == 6 ){
    document.getElementById("rain").innerHTML = "The variety of farming will now have a success rate 40%";

  } else if (r == 5 ){
    document.getElementById("rain").innerHTML = "The variety of farming will now have a success rate 50%";

  } else if (r == 4 ){
    document.getElementById("rain").innerHTML = "The variety of farming will now have a success rate 60%";

  } else if (r == 3 ){
    document.getElementById("rain").innerHTML = "You can plant :)";

  } else if (r == 2 ){
    document.getElementById("rain").innerHTML = "You can plant :)";

  } else if (r == 1 ){
    document.getElementById("rain").innerHTML = "You can plant :)";

  } else {
    document.getElementById("rain").innerHTML = "sorry is Not!";
  }
}
function deductFromTotal2() {
  hum = document.getElementById("humm").value;
  if (hum ==10) {
    document.getElementById("hum").innerHTML = "You can't plant!!!";
  } else if (hum == 9 ){
    document.getElementById("hum").innerHTML = "You can't plant!!!";

  } else if (hum == 8 ){
    document.getElementById("hum").innerHTML = "You can't plant!!!";

  } else if (hum == 7 ){
    document.getElementById("hum").innerHTML = "You can't plant!!!";

  } else if (hum == 6 ){
    document.getElementById("hum").innerHTML = "The variety of farming will now have a success rate 40%";

  } else if (hum == 5 ){
    document.getElementById("hum").innerHTML = "The variety of farming will now have a success rate 50%";

  } else if (hum == 4 ){
    document.getElementById("hum").innerHTML = "The variety of farming will now have a success rate 60%";

  } else if (hum == 3 ){
    document.getElementById("hum").innerHTML = "You can plant :)";

  } else if (hum == 2 ){
    document.getElementById("hum").innerHTML = "You can plant :)";

  } else if (hum == 1 ){
    document.getElementById("hum").innerHTML = "You can plant :)";

  } else {
    document.getElementById("hum").innerHTML = "sorry is Not!";
  }
}
function deductFromTotal3() {
  d = document.getElementById("dd").value;
  if (d ==10) {
    document.getElementById("d").innerHTML = "You can't plant!!!";
  } else if (d == 9 ){
    document.getElementById("d").innerHTML = "You can't plant!!!";

  } else if (d == 8 ){
    document.getElementById("d").innerHTML = "You can't plant!!!";

  } else if (d == 7 ){
    document.getElementById("d").innerHTML = "You can't plant!!!";

  } else if (d == 6 ){
    document.getElementById("d").innerHTML = "The variety of farming will now have a success rate 40%";

  } else if (d == 5 ){
    document.getElementById("d").innerHTML = "The variety of farming will now have a success rate 50%";

  } else if (d == 4 ){
    document.getElementById("d").innerHTML = "The variety of farming will now have a success rate 60%";

  } else if (d == 3 ){
    document.getElementById("d").innerHTML = "You can plant :)";

  } else if (d == 2 ){
    document.getElementById("d").innerHTML = "You can plant :)";

  } else if (d == 1 ){
    document.getElementById("d").innerHTML = "You can plant :)";

  } else {
    document.getElementById("d").innerHTML = "sorry is Not!";
  }
}
function deductFromTotal4() {
  p = document.getElementById("pp").value;
  if (p ==10) {
    document.getElementById("p").innerHTML = "You can't plant!!!";
  } else if (p == 9 ){
    document.getElementById("p").innerHTML = "You can't plant!!!";

  } else if (p == 8 ){
    document.getElementById("p").innerHTML = "You can't plant!!!";

  } else if (p == 7 ){
    document.getElementById("p").innerHTML = "You can't plant!!!";

  } else if (p == 6 ){
    document.getElementById("p").innerHTML = "The variety of farming will now have a success rate 40%";

  } else if (p == 5 ){
    document.getElementById("p").innerHTML = "The variety of farming will now have a success rate 50%";

  } else if (p == 4 ){
    document.getElementById("p").innerHTML = "The variety of farming will now have a success rate 60%";

  } else if (p == 3 ){
    document.getElementById("p").innerHTML = "You can plant :)";

  } else if (p == 2 ){
    document.getElementById("p").innerHTML = "You can plant :)";

  } else if (p == 1 ){
    document.getElementById("p").innerHTML = "You can plant :)";

  } else {
    document.getElementById("p").innerHTML = "sorry is Not!";
  }
}
function deductFromTotal5() {
  f = document.getElementById("ff").value;
  if (f ==10) {
    document.getElementById("f").innerHTML = "You can't plant!!!";
  } else if (f == 9 ){
    document.getElementById("f").innerHTML = "You can't plant!!!";

  } else if (f == 8 ){
    document.getElementById("f").innerHTML = "You can't plant!!!";

  } else if (f == 7 ){
    document.getElementById("f").innerHTML = "You can't plant!!!";

  } else if (f == 6 ){
    document.getElementById("f").innerHTML = "The variety of farming will now have a success rate 40%";

  } else if (f == 5 ){
    document.getElementById("f").innerHTML = "The variety of farming will now have a success rate 50%";

  } else if (f == 4 ){
    document.getElementById("f").innerHTML = "The variety of farming will now have a success rate 60%";

  } else if (f == 3 ){
    document.getElementById("f").innerHTML = "You can plant :)";

  } else if (f == 2 ){
    document.getElementById("f").innerHTML = "You can plant :)";

  } else if (f == 1 ){
    document.getElementById("f").innerHTML = "You can plant :)";

  } else {
    document.getElementById("f").innerHTML = "sorry is Not!";
  }
}
function deductFromTotal6() {
  m = document.getElementById("mm").value;
  if (m ==10) {
    document.getElementById("m").innerHTML = "You can't plant!!!";
  } else if (m == 9 ){
    document.getElementById("m").innerHTML = "You can't plant!!!";

  } else if (m == 8 ){
    document.getElementById("m").innerHTML = "You can't plant!!!";

  } else if (m == 7 ){
    document.getElementById("m").innerHTML = "You can't plant!!!";

  } else if (m == 6 ){
    document.getElementById("m").innerHTML = "The variety of farming will now have a success rate 40%";

  } else if (m == 5 ){
    document.getElementById("m").innerHTML = "The variety of farming will now have a success rate 50%";

  } else if (m == 4 ){
    document.getElementById("m").innerHTML = "The variety of farming will now have a success rate 60%";

  } else if (m == 3 ){
    document.getElementById("m").innerHTML = "You can plant :)";

  } else if (m == 2 ){
    document.getElementById("m").innerHTML = "You can plant :)";

  } else if (m == 1 ){
    document.getElementById("m").innerHTML = "You can plant :)";

  } else {
    document.getElementById("m").innerHTML = "sorry is Not!";
  }


}
