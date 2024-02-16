
let box1 = document.getElementById("input1")
let box2 = document.getElementById("input2")

let display1 = document.getElementById("display1")
let button1 = document.getElementById("button1")

let display2 = document.getElementById("display2")
let button2 = document.getElementById("button2")

button1.addEventListener("click", ()=>{btnClick(1);});
button2.addEventListener("click", ()=>{btnClick(2);});
function btnClick(type){
    if(type == 1){
            displaybox(box1,display1);
    }
        else{
            displaybox(box2,display2);
    }
}

function displaybox(inputboxes, displayboxes){
    let number = inputboxes.value;
    if(number == ''){
        displayboxes.innerHTML = "Please Enter a Number";
    }else if(number == 0){
        displayboxes.innerHTML = "number should be graterthan(>) 0 ";
    }else{
        template = ""
        for(let i=1;i<11;i++){
            template += (number+" x "+i+" = " + (number*i) + "<br><br>");
        }
        displayboxes.innerHTML = template;
    }
}
