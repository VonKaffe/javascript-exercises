
let bt = document.getElementById("bt");

bt.addEventListener("click", function (){

    document.getElementById("pp").style.fontFamily="Impact";


});

let text = document.getElementById("text");
let text2 = document.getElementById("text2");
let submit = document.getElementById("submit");

submit.addEventListener("click", function (){

    console.log(text.value);
    console.log(text2.value);



});

let anchor = document.getElementByID("anchor");

anchor.addEventListener("click", function (){
document.getElementById("anchor")
    console.log(anchor.value);



});



