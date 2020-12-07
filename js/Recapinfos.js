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