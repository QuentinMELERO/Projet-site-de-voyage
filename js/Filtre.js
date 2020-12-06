function filtreasie() {
    let a = document.getElementById("amerique");       
    let e = document.getElementById("europe");
    let textea = document.getElementById("textea");       
    let textee = document.getElementById("textee");       
    let choixasie = document.getElementById("choixasie"); 
    if(choixamerique.checked & choixasie.checked){
        document.getElementById("choixasie").checked=false;
        alert("Veuillez décocher Amerique avant de choisir un autre continent")
        return false
    }      
    if(choixeurope.checked & choixasie.checked){
        document.getElementById("choixasie").checked=false;
        alert("Veuillez décocher Europe avant de choisir un autre continent")
        return false

    }   
    if(choixasie.checked) {
        a.style.visibility = "hidden";
        a.style.height = "0";
        e.style.visibility = "hidden";
        e.style.height = "0";
        textea.style.visibility = "hidden";
        textea.style.height = "0";
        textee.style.visibility = "hidden";
        textee.style.height = "0";
    }
    else {
        a.style.visibility = "visible";
        a.style.height = "auto";
        e.style.visibility = "visible";
        e.style.height = "auto";
        textea.style.visibility = "visible";
        textea.style.height = "auto";
        textee.style.visibility = "visible";
        textee.style.height = "auto";
    }
}

function filtreamerique() {
    let as = document.getElementById("asie");
    let e = document.getElementById("europe");   
    let texteas = document.getElementById("texteas");
    let textee = document.getElementById("textee");   
    let choixamerique = document.getElementById("choixamerique") ;
    if(choixamerique.checked & choixasie.checked){
        document.getElementById("choixamerique").checked=false;
        alert("Veuillez décocher Asie avant de choisir un autre continent")
        return false
    }   
    if (choixeurope.checked & choixamerique.checked) {
        document.getElementById("choixamerique").checked=false;
        alert("Veuillez décocher Europe avant de choisir un autre continent")
        return false
    }
    if(choixamerique.checked) {
        e.style.visibility = "hidden";
        e.style.height = "0";
        as.style.visibility = "hidden";
        as.style.height = "0";
        texteas.style.visibility = "hidden";
        texteas.style.height = "0";
        textee.style.visibility = "hidden";
        textee.style.height = "0";
    }
    else {
        e.style.visibility = "visible";
            e.style.height = "auto";
            as.style.visibility = "visible";
            as.style.height = "auto";
            texteas.style.visibility = "visible";
            texteas.style.height = "auto";
            textee.style.visibility = "visible";
            textee.style.height = "auto";
    }
}
    
function filtreeurope() {
    let a = document.getElementById("amerique");
    let as = document.getElementById("asie");
    let textea = document.getElementById("textea");
    let texteas = document.getElementById("texteas");       
    let choixeurope = document.getElementById("choixeurope") ;
    if (choixeurope.checked & choixamerique.checked) {
        document.getElementById("choixeurope").checked=false;             
        alert("Veuillez décocher Amerique avant de choisir un autre continent")
        return false        
    }
    if(choixeurope.checked & choixasie.checked){
        document.getElementById("choixeurope").checked=false;    
        alert("Veuillez décocher Asie avant de choisir un autre continent")
        return false
    }  
    if(choixeurope.checked) {
        as.style.visibility = "hidden";
        as.style.height = "0";
        a.style.visibility = "hidden";
        a.style.height = "0";
        texteas.style.visibility = "hidden";
        texteas.style.height = "0";
        textea.style.visibility = "hidden";
        textea.style.height = "0";
    }
    else {
            as.style.visibility = "visible";
            as.style.height = "auto";
            a.style.visibility = "visible";
            a.style.height = "auto";
            texteas.style.visibility = "visible";
            texteas.style.height = "auto";
            textea.style.visibility = "visible";
            textea.style.height = "auto";
    }
}