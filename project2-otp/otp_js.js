let input = document.querySelector("#inputbox");
let display = document.querySelector("#display");
let checkdisplay = document.querySelector("#check");
let button = document.querySelector("#btn");
button.addEventListener("click",main);

let numbers =[1,2,3,4,5,6,7,8,9,0]
let currentotp = "";

function main(){
    console.log(currentotp)
    let userInput = input.value;
    if(currentotp == userInput){
       checkdisplay.innerHTML = "Correct"
       checkdisplay.style.color = "green"
       
        
    }else{
        checkdisplay.innerHTML = "Incorrect !"
        checkdisplay.style.color = "red"
       

    }
} 
create()
function create(){
    let otp = ""
    for(let i=0; i<4;i++){
        otp += numbers[Math.floor(Math.random()*10)]
    }
    display.innerHTML = "your OTP is here : " +" "+ otp
    currentotp = otp
}
setInterval(create,10000)
