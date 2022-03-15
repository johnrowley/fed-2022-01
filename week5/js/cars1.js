const APP_SETTINGS = {

    "LS_MF": "mf",
    "LS_MODEL": "model",
    "LS_COLOUR": "colour",


}

function init() {
    retrieve();
}

function retrieve() {
    const mf = localStorage.getItem(APP_SETTINGS.LS_MF);
    const model = localStorage.getItem(APP_SETTINGS.LS_MODEL);
    const colour = localStorage.getItem(APP_SETTINGS.LS_COLOUR);

    renderList(mf, model, colour) 

}


function btnSave() {

    let mf = document.getElementById("tbMf").value;
    let model = document.getElementById("tbModel").value;
    let colour = document.getElementById("tbColour").value;

   

    localStorage.setItem(APP_SETTINGS.LS_MF, mf);
    localStorage.setItem(APP_SETTINGS.LS_MODEL, model);
    localStorage.setItem(APP_SETTINGS.LS_COLOUR, colour);

    renderList(mf, model, colour);

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
