let bodyelem = document.querySelector("#body")
setColor()
function setColor(){
    setInterval(() => {
       let appay = bodyelem.style.background =`rgb(
       ${Math.ceil(Math.random()*1000%255)},
       ${Math.ceil(Math.random()*1000%255)},
       ${Math.ceil(Math.random()*1000%255)})`
    },600);
}