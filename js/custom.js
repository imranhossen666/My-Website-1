const menuIcon = document.querySelector(".menuIcon")
const menuBox = document.querySelector(".menu ul")
const tringle = document.querySelector(".tringle")

menuIcon.addEventListener("click", ()=> {
    menuBox.classList.add("visible-menuBox")
    setTimeout(function(){
        tringle.classList.add("btn-anim")
    }, 1000)
})
tringle.addEventListener("click", ()=> {
    menuBox.classList.remove("visible-menuBox")
    tringle.classList.remove("btn-anim")
})

