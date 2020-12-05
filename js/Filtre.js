function filtre() {
    let a = document.getElementById("amerique");
    let as = document.getElementById("asie");
    let e = document.getElementById("europe");
    let textea = document.getElementById("textea")
    let texteas = document.getElementById("texteas")
    let texte = document.getElementById("textee")
   var choixeurope = document.getElementById("choixeurope");
   var choixasie   = document.getElementById("choixasie");
   var choixamerique = document.getElementById("choixamerique");

    if(choixeurope.checked) {
        a.remove();
        textea.remove();
        texteas.remove();
        as.remove();
    };
    if(choixasie.checked) {
        e.remove();
        textee.remove();
        as.remove();
        texteas.remove();
    };
    if(choixamerique.checked) {
        e.remove();
        textee.remove();
        a.remove();
        textea.remove();
    };

}

function filtreeurope() {
    let a = document.getElementById("amerique");
    let as = document.getElementById("asie");
    let textea = document.getElementById("textea");
    let texteas = document.getElementById("texteas");       
    let choixeurope = document.getElementById("choixeurope") ;
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


function filtreamerique() {
    let as = document.getElementById("asie");
    let e = document.getElementById("europe");   
    let texteas = document.getElementById("texteas");
    let textee = document.getElementById("textee");   
    let choixamerique = document.getElementById("choixamerique") ;   
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

function filtreasie() {
    let a = document.getElementById("amerique");       
    let e = document.getElementById("europe");
    let textea = document.getElementById("textea");       
    let textee = document.getElementById("textee");       
    let choixasie = document.getElementById("choixasie");       
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
    }}