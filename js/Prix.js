function Calculer(){
    A=document.getElementById("Quantite1").value * document.bdc.Prix1.value;
    B=document.getElementById("Quantite2").value * document.bdc.Prix2.value;
    document.bdc.Total.value=parseFloat(A)+parseFloat(B);

}