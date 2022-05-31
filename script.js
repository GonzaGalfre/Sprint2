let cont = 0;
let suma = 0;
let cut = 0;


function add() {
    let name = $("#userName").val();
    let money = $("#userMoney").val();
    cont += 1;
    distribute(name, money, cont);

    let nameToShow = `<h3> ${name} </h3>`
    let moneyToShow = `<h3> ${money} </h3>`
    $("#history").append(nameToShow, moneyToShow);
    
}

function distribute(person, spent, c) {
    suma += parseInt(spent); 
    $("#result").text("$" + suma);

    cut = suma / c;
    $("#cut").text("$" + (parseFloat(cut)));
}

