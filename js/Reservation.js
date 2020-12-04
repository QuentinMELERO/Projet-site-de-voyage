class Destination{
    constructor(ville,petitdej,prix,animaux){
        this._ville = ville;
        this._petitdej = petitdej;
        this._prix = prix;
        this._animaux = animaux;
    }
}

tabDest = [
    new Destination("Marseille",true,700,false),
    new Destination("Paris",true,500,false),
    new Destination("Barcelone",true,500,false),
    new Destination("Madrid",true,500,false),
    new Destination("Los-Angeles",true,500,false),
    new Destination("Cancun",true,500,false),
    new Destination("Lima",true,500,false),
    new Destination("Rio-de-Janeiro",true,500,false),
    new Destination("Londres",true,500,false),
    new Destination("Shanghai",true,500,false),
    new Destination("Phuket",true,500,false),
    new Destination("Johannesburg",true,500,false),
    new Destination("Rome",true,500,false),
    new Destination("Kuta",true,500,false),
    new Destination("Bora-bora",true,500,false)
]


let sejour_id = new URLSearchParams(window.location.search).get("id");
document.getElementById("titre").textContent="Votre réservation pour " + tabDest[sejour_id]._ville;
document.getElementById("photo").setAttribute("src","../image/" + tabDest[sejour_id]._ville + ".jpg")


function duree() {
    let Datedepart = new Date(document.getElementById("Datedep").value);
    let Dateretour = new Date(document.getElementById("Dateret").value);
    if (Datedepart <= Dateretour) {
        A =(Dateretour - Datedepart)
        C = A/1000/60/60/24 
    }
    else {
      alert("Veuillez mettre une date anterieur à celle de départ")
    }
}

function Calculer(){
    A=document.getElementById("Nombre d'adultes").value * tabDest[sejour_id]._prix;
    A1=document.getElementById("Nombre d'adultes").value;
    B=document.getElementById("Nombre d'enfants").value * tabDest[sejour_id]._prix * 0.4;
    B1=document.getElementById("Nombre d'enfants").value;
    if(document.querySelector('#odej').checked){
        document.formulaireresa.Ptot.value=(parseFloat(A)+parseFloat(B)+10*parseFloat(A1)+10*parseFloat(B1))*C
    }
    else{
        document.formulaireresa.Ptot.value=(parseFloat(A)+parseFloat(B))*C
    }
}


// Fonction pour afficher le lien de retour vers le haut de page

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
	{
		document.getElementById("haut").style.display = "block";
	} 
	else 
	{
		document.getElementById("haut").style.display = "none";
	}
}

function retourHaut() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
} 