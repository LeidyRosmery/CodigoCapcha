var codigoCapcha=document.getElementById("codigo");
var abecedario=("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789").split("");
var colores=("0123456789ABCDEF").split("");
var capcha=document.getElementById('ingresa');
;
generarCapcha();
document.getElementById("compare").addEventListener('click',function(){
  if(capcha.value==codigoCapcha.innerHTML){
    alert("You're a human");

  }else {
    alert("Try again")

  }
  generarCapcha();
  capcha.value="";
});
document.getElementById('refresh').addEventListener('click',function(){
capcha.value="";
  generarCapcha();
});
function generarCapcha(){
  codigoCapcha.innerHTML="";
  for(var i =0 ; i<7 ; i++){
    codigoCapcha.innerHTML+=abecedario[randomEntero(0,62)];
    codigoCapcha.style.color=randomColores();
  }
}
function randomEntero(min, max) {
  return  valor=Math.floor(Math.random() * (max - min)) + min;
}

function randomColores(){
  var codigoColores="#";
  for (var i = 0; i < 6; i++) {
     codigoColores+=colores[randomEntero(0,16)];
    }
    return codigoColores;

}
