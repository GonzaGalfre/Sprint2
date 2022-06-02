let cont = 0;
let suma = 0;
let cut = 0;


function add() {
    let name = $("#userName").val();
    let money = $("#userMoney").val();
    cont += 1;

    distribute(name, money, cont);

    let nameToShow = `<h5> ${name}: </h5>`
    let moneyToShow = `<h5> $ ${money} </h5>`
    
    $("#historyName").append(nameToShow);
    $("#historyMoney").append(moneyToShow);
}

function distribute(person, spent, c) {
    suma += parseInt(spent); 
    $("#result").text("$" + suma);

    cut = suma / c;
    $("#cut").text("$" + (Math.round(parseFloat(cut))));
}

