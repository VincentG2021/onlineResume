const base = "../../assets/images/";

const logos1 = [
    "csharp-logo.png",
    "javascript-html-css3.png",
    "logo-php.png",
    "html-logo.png", 
    "css3-logo.png", 
    "logo-javascript.png",
    "logo-python.png",
];

const logos2 = [
    "NET_Core_Logo.svg.png",
    "logo-node-js.png",
    "logo-react.png",
    "logo-angular.png",
    "logo-vsc.png",
    "logo-visual-studio.png",
];

const logos3 = [
    "logo-mssm.png",
    "logo-mongodb.png", 
    "logo-mysql.png",
    "logo-db.png",
    "logo-github.png",
    "logo-ubuntu.png",
];

var num1 = 0;
var num2 = 0;
var num3 = 0;

function slide1($sliderSpot) {
    let sliderNext = document.getElementById($sliderSpot);
    num1++;
    if(num1 >= logos1.length) {
        num1 = 0;
    }
    sliderNext.src = base + logos1[num1];
}
  
function slide2($sliderSpot) {
    let sliderPrev = document.getElementById($sliderSpot);
    num2--;
    if(num2 < 0) {
        num2 = logos2.length-1;
    }
    sliderPrev.src = base + logos2[num2];
}

function slide3($sliderSpot) {
    let slider = document.getElementById($sliderSpot);
    num3--;
    if(num3 < 0) {
        num3 = logos3.length-1;
    }
    slider.src = base + logos3[num3];
}

setInterval("slide1('img-slider-1')", 2000);
setInterval("slide2('img-slider-2')", 2000);
setInterval("slide3('img-slider-3')", 2000);