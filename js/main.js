// Globala variablar
let body = document.querySelector("body");
let main = document.querySelector("#main");
let secOne = document.querySelector("#section-1");
let randomBtn = document.querySelector(".randomLink");


randomBtn.addEventListener('click', random_3)

window.onscroll = function(e) {
    // print "false" if direction is down and "true" if up
    // console.log(this.oldScroll > this.scrollY);


    if (this.oldScroll > this.scrollY) {
        console.log("upppppp");
        // toggla fram menyn
        
    } else {
        console.log("neeer");
        // toggla bort menyn
    }

    // måste vara sist, sätter nya scrollvärdet till oldScroll
    this.oldScroll = this.scrollY;
  }

  function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    var link2="https://www.youtube.com/watch?v=ksJ1G_oHdBw"
    var link3="https://i.pinimg.com/originals/a7/80/d8/a780d8f211dfdae66dacf9547e45fbbc.jpg"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}

