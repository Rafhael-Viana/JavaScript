let body = document.body

document.addEventListener("keydown", (key) => {
    console.log(key.key)
    if(key.key == "r"){
        body.style.backgroundColor = "pink"
    }
    if(key.key == "b"){
        body.style.backgroundColor = "lightblue"
    }
    if(key.key == "y"){
        body.style.backgroundColor = "goldenrod"
    }
    setTimeout(()=> {
        body.style.backgroundColor = "white"
    },200)
})