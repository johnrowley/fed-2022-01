const APP_SETTINGS = {

    "FAVOURITE_FLAVOUR_KEY": "favFlavour",
    "FAVOURITE_FLAVOUR_ID": "FavouriteFlavour",
    "FAVOURITE_FLAVOUR_LOADED": "FavouriteFlavourLoaded",
    "OTHER_SETTING_KEY": "some value here",

}


// const FAVOURITE_FLAVOUR_KEY = "favFlavour";

function init() {
    console.log(`Javascript is loaded`)
    loadFromLocalStorage();
}

function loadFromLocalStorage() {

    const favouriteFlavour = localStorage.getItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY)

    if (favouriteFlavour !== null) {
        const message = `Favourite Flavour: ${favouriteFlavour}`;
        document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = message;
    }

}

function btnSave() {
    // console.log(`Save button is loaded`)

    // localStorage.setItem("today", "Tuesday")
    // localStorage.setItem("age", "59")

    let favouriteFlavour = document.getElementById("tbFlavour").value;
    console.log({ favouriteFlavour })

    localStorage.setItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY, favouriteFlavour);

}

function btnRetrieveFlavour() {

    const favouriteFlavour = localStorage.getItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY)
    console.log({ favouriteFlavour })

    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_ID).innerHTML = favouriteFlavour;
}

function btnDeleteFlavour() {

    localStorage.removeItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY);
    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = "";

}