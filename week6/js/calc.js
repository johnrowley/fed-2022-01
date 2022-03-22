function init() {

}

function add() {

    const num1 = document.getElementById("tbNum1").value;
    const num2 = document.getElementById("tbNum2").value;

    const total = parseInt(num1) + parseInt(num2);

    document.getElementById("messagePanel").innerHTML = total;

}

function clearField(element) {
    element.value="";
    console.log(`Clearing field`);
}