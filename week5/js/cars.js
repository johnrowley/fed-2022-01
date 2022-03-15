const APP_SETTINGS = {

    "LS_MF": "mf",
    "LS_MODEL": "model",
    "LS_COLOUR": "colour",
    "LS_CAR_OBJECT": "CarDetails",


}

function init() {
    retrieve();
}

function retrieve() {
     const CarObjectAsString = localStorage.getItem(APP_SETTINGS.LS_CAR_OBJECT);
    
    const CarObject = JSON.parse(CarObjectAsString); // reversing the process of stringify
    
    renderListFromObject(CarObject) 

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

//    console.log({CarObject})

   const carObjectAsString = JSON.stringify(CarObject);

//    console.log(carObjectAsString)

    localStorage.setItem(APP_SETTINGS.LS_CAR_OBJECT, carObjectAsString);
  

    renderListFromObject(CarObject);

}

function renderList(mf, model, colour) {


    if (mf === undefined  || mf === null) {
        mf = "n/a"
    }

    if (model === undefined || model === null) {
        model = "n/a"
    }


    if (colour === undefined || colour === null) {
        colour = "n/a"
    }


    document.getElementById("liCarMf").innerHTML = mf
    document.getElementById("liCarModel").innerHTML = model
    document.getElementById("liCarColour").innerHTML = colour




}

function renderListFromObject(CarDetails) {


    if (CarDetails.mf === undefined  || CarDetails.mf === null) {
        mf = "n/a"
    }

    if (CarDetails.model === undefined || CarDetails.model === null) {
        model = "n/a"
    }


    if (CarDetails.colour === undefined || CarDetails.colour === null) {
        colour = "n/a"
    }


    document.getElementById("liCarMf").innerHTML = CarDetails.mf
    document.getElementById("liCarModel").innerHTML = CarDetails.model
    document.getElementById("liCarColour").innerHTML = CarDetails.colour




}
