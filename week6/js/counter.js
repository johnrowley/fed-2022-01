let counter = 0;
let counterMaxLimit = 5;
let counterMinLimit = 0;

function init() {

    console.log("starting up after load")
    WriteCounter(0)

}

function WriteCounter(e) {
    document.getElementById("counterResult").innerHTML = e;
}

function btnReset() {
    counter = 0;
    WriteCounter(counter)
}

function btnAdd() {
    console.log("Adding a counter")
    counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit;
    WriteCounter(counter)

}

function btnMinus() {
    
    counter = --counter;
    counter = --counter >= counterMinLimit ? counter : counterMinLimit;
    WriteCounter(counter)

}