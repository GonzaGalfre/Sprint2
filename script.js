// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

let cont = 0;
let suma = 0;
let cut = 0;

function add() {
    let name = $("#userName").val();
    let money = $("#userMoney").val();
    cont += 1;

    distribute(name, money, cont);

    let nameToShow = `<h5> ${name}: </h5>`
    let moneyToShow = `<h5> ${formatter.format(money)} </h5>` // formato dinero formatter.format(string)
    
    $("#historyName").append(nameToShow);
    $("#historyMoney").append(moneyToShow);
}

function distribute(person, spent, c) {
    suma += parseInt(spent); 
    $("#result").text(formatter.format(suma));

    cut = suma / c;
    $("#cut").text(formatter.format(cut));
}

$("#userMoney").keypress(function(event){
    if(event.which==13){
        add();
    }
})
