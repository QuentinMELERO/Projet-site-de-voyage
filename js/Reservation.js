class Destination{
    constructor(ville,petitdej,prix,animaux){
        this._ville = ville;
        this._petitdej = petitdej;
        this._prix = prix;
        this._animaux = animaux;
    }
}

tabDest = [
    new Destination("Marseille",true,500,false),
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



let sejour_id = new URLSearchParams(window.location.search).get("id")

const tabDest

const found = tabDest.find(element => element == sejour_id);

console.log(found);




let template = document.querySelector("#Destination");

newContent = clone.firstElementChild.innerHTML
.replace(/{{ville}}/g, v._ville)

clone.firstElementChild.innerHTML = newContent 