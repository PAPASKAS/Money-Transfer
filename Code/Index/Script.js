//hamburger
document.querySelector(".hamburger nav").style.height = "0px"

function hamburger(){ 
    let hamb = document.querySelector(".hamburger nav").style.display

    if(hamb === ""){
        let coord_open_hamb = 0
        document.querySelector(".hamburger img").src = "../../Source/Img/open hamb.svg"
        document.querySelector(".hamburger nav").style.display = "block"

        let open_hamb = setInterval(function(){
            if(coord_open_hamb < 201){
                coord_open_hamb+=10
                document.querySelector(".hamburger nav").style.height = coord_open_hamb + "px"
            }
            else{
                setTimeout(() => clearInterval(open_hamb))
            }
        },1)
        
    }else{
        let coord_closed_hamb = 200
        document.querySelector(".hamburger img").src = "../../Source/Img/closed hamb.svg"

        let closed_hamb = setInterval(function(){
            if(coord_closed_hamb > -1){
                coord_closed_hamb-=10
                document.querySelector(".hamburger nav").style.height = coord_closed_hamb + "px"
            }else{
                document.querySelector(".hamburger nav").style.display = ""
                setTimeout(() => clearInterval(closed_hamb))
            }
        },1)
    }
} 

document.onclick = function(){
     //закрытия гамбургера нажатием в любое место
     if(event.target.className != "hamburger_icon"){
        let coord_closed_hamb = 200
        document.querySelector(".hamburger img").src = "../../Source/Img/closed hamb.svg"

        let closed_hamb = setInterval(function(){
            if(coord_closed_hamb > -1){
                coord_closed_hamb-=10
                document.querySelector(".hamburger nav").style.height = coord_closed_hamb + "px"
            }else{
                document.querySelector(".hamburger nav").style.display = ""
                setTimeout(() => clearInterval(closed_hamb))
            }
        },1)
    }
}