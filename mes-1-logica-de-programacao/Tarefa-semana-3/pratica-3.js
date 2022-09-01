function ehPrimo(n){
    if(n = 1 ){
    console.log("true")
    }
    else if( n = 2){
        console.log("true")
    
    }
    else if (n != 1 && n != 2){
     for(let i = 2; i < n; i++){
        if(n%i == 0 ){
            console.log ("False")
            break
        }
        else{
            console.log("True")
            break
            
        }
    }
    
}
}

ehPrimo(10)





