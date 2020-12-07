let usrn = new URLSearchParams(window.location.search).get("id");

document.getElementById("message").textContent= usrn + "est connecté à son compte";