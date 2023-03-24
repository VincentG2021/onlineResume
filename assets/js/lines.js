var v = window.innerWidth;
var u = window.innerHeight;
var n = document.createElement("canvas");
n.width = v;
n.height = u;
n.style.position = "fixed";
n.style.top = 0;
n.style.left = 0;
n.style.zIndex = -1;
var c = n.getContext("2d");
c.canvas.width = v;
c.canvas.height = u;

function a() {
    v = window.innerWidth;
    u = window.innerHeight;
    n.width = v;
    n.height = u;
    c.canvas.width = v;
    c.canvas.height = u
}

function o(n, a) {
    var o = 5;
    var r = u / 2;
    c.beginPath();
    var t = w(a);
    for (var e = 0; e <= v; e = e + 10) {
        var i = 2 * Math.PI * (1 / o);
        var d = t * Math.sin((e + n) / 360 * i) + r;
        if (e == 0) {
            c.moveTo(0, d)
        }
        c.lineTo(e + 1, d)
    }
    c.lineWidth = 2;
    //c.strokeStyle = "#888888";
    //c.strokeStyle = "#40E0D0";
    c.strokeStyle = "#EA0";
    c.stroke()
}

function w(n) {
    return 100 + 30 * Math.sin(n / 360 * 2 * Math.PI)
}
var r = 0;
var t = .5;
var e = 2;
var i = 0;

function d() {
    r = (r + e) % 3600;
    i = (i + t) % 3600;
    c.clearRect(0, 0, v, u);
    o(r, i);
    o(r + 214, i + 89);
    o(r + 410, i + 243);
    requestAnimationFrame(d)
}
document.addEventListener("DOMContentLoaded", function() {
    if (document.body.firstChild) {
        document.body.insertBefore(n, document.body.firstChild)
    } else {
        document.body.appendChild(n)
    }
    d();
    window.addEventListener("resize", a)
});
