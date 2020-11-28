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


let template = document.querySelector("#listeDestination");
for ( const v of tabDest){
    let clone = document.importNode(template.content,true);

    newContent = clone.firstElementChild.innerHTML
    .replace(/{{ville}}/g, v._ville)
    .replace(/{{prix}}/g, v._prix);

clone.firstElementChild.innerHTML = newContent

document.querySelector(".tableau").appendChild(clone);
}



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}