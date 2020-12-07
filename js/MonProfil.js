// Fonction qui valide l'authentification
function checkuser() {
    var Adriencorsetti=['adriencorsetti', 'azerty'];
    var Quentinmelero=['quentinmelero','qsdfg'];
    var GrégoryMorel=['gregorymorel','csdev'];
    listeuser=[Adriencorsetti,Quentinmelero,GrégoryMorel];
    var login = document.getElementById("usrname").value;
    var mdp = document.getElementById("psw").value;
    if ((login == listeuser[0][0] && mdp == listeuser[0][1])){
        window.location.replace("../html/Moncompte.html?id=" + listeuser[0][0]);
    }
    else if (login == listeuser[1][0] && mdp == listeuser[1][1]){
        window.location.replace("../html/Moncompte.html?id=" + listeuser[1][0]);
     
    }
    else if (login == listeuser[2][0] && mdp == listeuser[2][1]){
        window.location.href = "../html/Moncompte.html?id=listeuser[2][0]";
     
    }
    else {
        document.getElementById("formulaire").reset();
        alert("Tromper de mot de passe")
     
    }
            
}


