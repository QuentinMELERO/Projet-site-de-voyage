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


let template = document.querySelector("#listeDestination");
for ( const v of tabDest){
    let clone = document.importNode(template.content,true);

    newContent = clone.firstElementChild.innerHTML
    .replace(/{{ville}}/g, v._ville)
    .replace(/{{prix}}/g, v._prix)
    .replace(/{{id}}/g, tabDest.indexOf(v));
    Temperature(v._ville)

clone.firstElementChild.innerHTML = newContent

document.querySelector(".tableau").appendChild(clone);
}

function Temperature(){
  let appid = "931f79e58856d6da0aadd4909cc15594"
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + "{{ville}}" + "&appid=" + appid + "&units=metric")
  .then(function(response) {
      return response.json();
  })
  .then(function(json) {
      document.querySelector("#{{ville}}").innerHTML="La température de " + json["name"] + " est de " + json["main"]["temp"] + "°C"
  })
}



// Quand l'utilisateur scroll la page, execute myFunction 
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