var dezena = new Array(7);
var aux = 0;

for (i=0; i < dezena.length; i++) {
    dezena[i] = Math.floor(Math.random()*61);
}

for (var i=0; i<dezena.length-1; i++) {
    for (var j=i+1; j<dezena.length; j++) {
        if (dezena[i] > dezena[j]) {
            aux = dezena[i];
            dezena[i] = dezena[j];
            dezena[j] = aux;                  
        }                
    }
}

for (var i = 0; i < dezena.length; i++) {
    document.write(dezena[i] + "   ");
}