
let vermelha = "vermelha"
let laranja = "laranja"
let amarela = "amarela"
let verde = "verde"
let azulClaro = "azul claro"
let azulMarinho = "azul Marinho"
let rosa = "Rosa"
function corRgb(cor){
    if(cor === vermelha){
        console.log("rgb(255,0,0)")
    }
    else if(cor === laranja){
        console.log("rgb(255,128,0)")
    }
    else if(cor === amarela){
        console.log("rgb(255,255,0)")
    }
    else if(cor === verde){
        console.log("rgb(,255,)")
    }
    else if(cor === azulClaro){
        console.log("rgb(0,255,255)")
    }
    else if(cor === azulMarinho){
        console.log("rgb(0,0,255)")
    }
    else if(cor === rosa){
        console.log("rgb(255,0,255)")
    }
    else{
        console.log("rgb(255,255,255)")
    }
}
corRgb(rosa)
