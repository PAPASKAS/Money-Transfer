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


//footer
function footer_menu(x){
    let h_open = 0
    let h_close = 150

    if(document.querySelectorAll(".footer span:not(:first-of-type) ul")[x].style.display === ""){
        document.querySelectorAll(".footer_mob_arrow")[x].src = "../../Source/Img/footer close.svg" 
        document.querySelectorAll(".footer span:not(:first-of-type) ul")[x].style.display = "block" 
        let open = setInterval(function(){
            if(h_open < 150){
                h_open+=10
                document.querySelectorAll(".footer span:not(:first-of-type) ul")[x].style.height = h_open + "px"
            }else{
                setTimeout(()=>clearInterval(open))
            }
        },1)
    }else{
        document.querySelectorAll(".footer_mob_arrow")[x].src = "../../Source/Img/footer open.svg" 
        
        let open = setInterval(function(){
            if(h_open > 0){
                h_open-=10
                document.querySelectorAll(".footer span:not(:first-of-type) ul")[x].style.height = h_open + "px"
            }else{
                setTimeout(()=>clearInterval(open))
                document.querySelectorAll(".footer span:not(:first-of-type) ul")[x].style.display = ""
            }
        },1)
    }
    
}