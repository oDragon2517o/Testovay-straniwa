



 X1= window.innerWidth
 Y1 = window.innerHeight


let x = 100;
let y = 2000;





window.onresize = doALoadOfStuff;


function doALoadOfStuff() {
var root = document.documentElement;

 X1= window.innerWidth
 Y1 = window.innerHeight


   if (X1 > Y1 * 1.78) {
    x = X1;
    y = x / 1.78;
}
    else {
    y = Y1;
    x = y * 1.78;   
};

root.style.backgroundSize = x  + "px"+" " + y  +"px";


}
var root = document.documentElement;

root.style.backgroundSize = x + "px"+" " + y +"px";


