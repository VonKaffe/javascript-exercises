var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div");
element.appendChild(para);


var target = document.getElementById('div');

var element = document.createElement('h1');
element.appendChild(document.createTextNode('text'));

target.appendChild(element);

function myFunction() {
    var x = document.getElementById("myImg").src;
    document.getElementById("demo").innerHTML = x;
}