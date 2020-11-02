function Calculer(){
    document.bdc.Total1.value=document.getElementById("Quantite1").value * document.bdc.Prix1.value;
    document.bdc.Total2.value=document.getElementById("Quantite2").value * document.bdc.Prix2.value;
    document.bdc.Total.value=parseFloat(document.bdc.Total1.value)+parseFloat(document.bdc.Total2.value);

}