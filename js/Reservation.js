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

function random(){
  let random = Math.round(Math.random() * 10000)
}



// Js du formulaire //

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Précédent";
  } else {
    document.getElementById("nextBtn").innerHTML = "Suivant";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}