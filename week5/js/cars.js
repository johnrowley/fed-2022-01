const APP_SETTINGS = {

    "LS_MF": "mf",
    "LS_MODEL": "model",
    "LS_COLOUR": "colour",
    "LS_CAR_OBJECT": "CarDetails",
    "LS_FLEET": "CarFleet",


}

let fleet = [];

function init() {
  renderFleet()
}   

function renderFleet() {

    fleet = JSON.parse(localStorage.getItem(APP_SETTINGS.LS_FLEET))

    renderListFromObject(fleet);
}



function btnSave() {

    let mf = document.getElementById("tbMf").value;
    let model = document.getElementById("tbModel").value;
    let colour = document.getElementById("tbColour").value;

    const CarObject = {
        "mf" : mf,
        "model" : model,
        "colour" : colour
    }

    fleet.push(CarObject)

   const fleetAsString = JSON.stringify(fleet);

//    console.log(carObjectAsString)

    localStorage.setItem(APP_SETTINGS.LS_FLEET, fleetAsString);
  

    renderListFromObject(fleet);

}

function renderListFromObject(CarFleet) {

console.log()
   
    let TableContainer = document.getElementById("tbbodyCardata")

    let htmlString = [];
   
    for(const [index, currentCar] of CarFleet.entries()) {

        const removeButton = `<button class="btn btn-danger" onclick="removeCar(${index})">Remove</button>`;

        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.colour}</td><td>${removeButton}</td></tr`;

        htmlString.push(rowItem)
    }

   

    TableContainer.innerHTML = htmlString.join(' ');

}

function removeCar(indexOfCar) {

    fleet.splice(indexOfCar,1);
    localStorage.setItem(APP_SETTINGS.LS_FLEET, JSON.stringify(fleet));

    renderListFromObject(fleet);


}

function retrieve() {
    const CarObjectAsString = localStorage.getItem(APP_SETTINGS.LS_CAR_OBJECT);
   
   const CarObject = JSON.parse(CarObjectAsString); // reversing the process of stringify
   
   renderListFromObject(CarObject) 

}

