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