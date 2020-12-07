class Destination{
    constructor(ville,petitdej,prix,animaux,continent){
        this._ville = ville;
        this._petitdej = petitdej;
        this._prix = prix;
        this._animaux = animaux;
        this._continent = continent;
    }
}

tabDest = [
    new Destination("Marseille",true,100,false,"Europe"),
    new Destination("Paris",true,150,false,"Europe"),
    new Destination("Barcelone",true,150,false,"Europe"),
    new Destination("Madrid",true,150,false,"Europe"),
    new Destination("Los-Angeles",true,300,false,"Amerique"),
    new Destination("Cancun",true,350,false,"Amerique"),
    new Destination("Lima",true,350,false,"Amerique"),
    new Destination("Rio-de-Janeiro",true,350,false,"Amerique"),
    new Destination("Londres",true,200,false,"Europe"),
    new Destination("Shanghai",true,400,false,"Asie"),
    new Destination("Phuket",true,250,false,"Asie"),
    new Destination("Johannesburg",true,400,false,"Afrique"),
    new Destination("Rome",true,150,false,"Europe"),
    new Destination("Kuta",true,400,false,"Asie"),
    new Destination("Bora-bora",true,500,false,"Asie")
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
      document.getElementById("Dateret").value="false"
      alert("Veuillez mettre une date anterieur à celle de départ")
    }
}

function Calculer(){
    A=document.getElementById("Nbdadultes").value * tabDest[sejour_id]._prix;
    A1=document.getElementById("Nbdadultes").value;
    B=document.getElementById("Nbdenfants").value * tabDest[sejour_id]._prix * 0.4;
    B1=document.getElementById("Nbdenfants").value;
    if(document.querySelector('#odej').checked){
        document.formulaireresa.Ptot.value=(parseFloat(A)+parseFloat(B)+12*parseFloat(A1)+12*parseFloat(B1))*C
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

