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


function recap(){

    let nom = new URLSearchParams(window.location.search).get("Nom");
    document.getElementById("nomrecap").value=nom

    let prenom = new URLSearchParams(window.location.search).get("Prenom");
    document.getElementById("prenomrecap").value=prenom

    let mail = new URLSearchParams(window.location.search).get("Mail");
    document.getElementById("mailrecap").value=mail

    let numtel = new URLSearchParams(window.location.search).get("Numtel");
    document.getElementById("numtelrecap").value=numtel

    let datedep = new URLSearchParams(window.location.search).get("Datedep");
    document.getElementById("datedeprecap").value=datedep

    let dateret = new URLSearchParams(window.location.search).get("Daterep");
    document.getElementById("dateretrecap").value=dateret

    let nbad = new URLSearchParams(window.location.search).get("Nbad");
    document.getElementById("nbadrecap").value=nbad

    let nbenf = new URLSearchParams(window.location.search).get("Nbenf");
    document.getElementById("nbenfrecap").value=nbenf

    let ptot = new URLSearchParams(window.location.search).get("Ptot");
    document.getElementById("ptotrecap").value=ptot

    let ptitdej = new URLSearchParams(window.location.search).get("Ptitdej");
    document.getElementById("ptitdejrecap").value=ptitdej

    let animaux = new URLSearchParams(window.location.search).get("Animaux");
    document.getElementById("animauxrecap").value=animaux

    let renseign = new URLSearchParams(window.location.search).get("Renseign");
    document.getElementById("renseignrecap").value=renseign
}

function random(){
    let num = Math.floor(10000*Math.random());
    document.getElementById("numresa").textContent="Réservation n°" + num;
}

let prenomfin = new URLSearchParams(window.location.search).get("prenomrecap");
let nomfin = new URLSearchParams(window.location.search).get("nomrecap");
document.getElementById("finresa").textContent="Bonjour," + prenomfin + nomfin;
