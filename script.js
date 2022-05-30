let cont = 0;
let suma = 0;
let cut = 0;


function add() {
    let name = prompt("Ingrese el nombre");
    let money = prompt("Ingrese lo que gastó");
    cont += 1;
    distribute(name, money, cont);
    
}

function distribute(person, spent, c) {
    suma += parseInt(spent); 
    $("#result").text(suma);

    cut = suma / c;
    $("#cut").text(parseFloat(cut));
}

