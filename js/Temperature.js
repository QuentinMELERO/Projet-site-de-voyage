function Temperature() {​​​​
    let appid = "931f79e58856d6da0aadd4909cc15594"
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + "Paris" + "&appid=" + appid + "&units=metric")
    .then(function(response) {​​​​
        return response.json();
    }​​​​)
    .then(function(json) {​​​​
        document.querySelector("#​​​​Paris").innerHTML="La température de " + json["name"] + " est de " + json["main"]["temp"] + "°C"
    }​​​​)
  }
