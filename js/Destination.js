class Destination{
  constructor(ville,petitdej,prix,animaux,continent,villeA,temperature){
        this._ville = ville;
        this._petitdej = petitdej;
        this._prix = prix;
        this._animaux = animaux;
        this._continent = continent;
        this._villeA = villeA
        this._temperature = temperature;
    }
}

tabDest = [
  new Destination("Marseille",true,100,false,"Europe","Marseille"),
  new Destination("Paris",true,150,false,"Europe","Paris"),
  new Destination("Barcelone",true,150,false,"Europe","Barcelone"),
  new Destination("Madrid",true,150,false,"Europe","Madrid"),
  new Destination("Los-Angeles",true,300,false,"Amerique","Los Angeles"),
  new Destination("Cancun",true,350,false,"Amerique","Cancun"),
  new Destination("Lima",true,350,false,"Amerique","Lima"),
  new Destination("Rio-de-Janeiro",true,350,false,"Amerique","Rio de Janeiro"),
  new Destination("Londres",true,200,false,"Europe","Londres"),
  new Destination("Shanghai",true,400,false,"Asie","Shanghai"),
  new Destination("Phuket",true,250,false,"Asie","Phuket"),
  new Destination("Johannesburg",true,400,false,"Afrique","Johannesburg"),
  new Destination("Rome",true,150,false,"Europe","Rome"),
  new Destination("Kuta",true,400,false,"Asie","Kuta"),
  new Destination("Bora-bora",true,500,false,"Asie","French polynesia")
]

tabDestpromesse=tabDest.map(destination=>Temperature(destination))
Promise.all(tabDestpromesse).then(tabDesttemp=>{

let template = document.querySelector("#listeDestination");
for ( const v of tabDesttemp){
    let clone = document.importNode(template.content,true);

    newContent = clone.firstElementChild.innerHTML
    .replace(/{{ville}}/g, v._ville)
    .replace(/{{prix}}/g, v._prix)
    .replace(/{{id}}/g, tabDest.indexOf(v))
    .replace(/{{temperature}}/g, v._temperature);

clone.firstElementChild.innerHTML = newContent

document.querySelector(".tableau").appendChild(clone);
}
})
  
  function Temperature(destination){
  let appid = "931f79e58856d6da0aadd4909cc15594"
  return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + destination._villeA + "&appid=" + appid + "&units=metric")
  .then(function(response) {
      return response.json()
  })
  .then(function(json){
      return new Destination(destination._ville,destination._petitdej,destination._prix,destination._animaux,destination._continent,destination._villeA,json.main.temp);
  }).catch(function(){return destination})
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