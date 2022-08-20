const pt = "pt"
const es = "es"
const en = "en"


function olaMundo(idioma){
    
    if (idioma === "en"){
    console.log("Hello World")}
     else if( idioma === "pt" ){
    console.log("Olá Mundo!")}
    else if (idioma === "es"){
        console.log("Hola Mundo")
    }
    else{
        console.log("boa tarde mundao")
    }
}
olaMundo(es)

