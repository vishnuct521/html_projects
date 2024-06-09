let position = document.getElementsByClassName('.position')
let nav_content = document.getElementsByClassName('nav_a')
let body = document.getElementById("full_body")
let button = document.getElementById("dark_mode")
let isdark =false;
button.addEventListener('click', ()=>{
  if(isdark){
  body.style.backgroundColor = " rgb(190, 221, 248)"
  body.style.color="black"
  for (let i = 0; i < nav_content.length; i++) {
    nav_content[i].style.color = 'black';
  }
    isdark = false;
  }else{ 
    body.style.backgroundColor ="black"
    body.style.color = "white"
    for (let i = 0; i < nav_content.length; i++) {
      nav_content[i].style.color = 'white';
    }
    isdark = true;
  }
})

window.scroll ({ top: 0, behavior: "smooth" }); 



function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "folio735686",
        Password : "folio521",
        To : 'folio735686@gmail.com',
        From : document.getElementById('email').value,
        Subject : "new contact from enquiry",
        Body : "Name: " + document.getElementById('name').value 
        + "<br> Email: " + document.getElementById('email').value 
        + "<br> phone no: " + document.getElementById('phone').value 
        + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert('message send succesfully')
    );

    console.log("success")
}

