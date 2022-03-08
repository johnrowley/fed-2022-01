// https://pastebin.com/EShAy8gd (javascript so far)
// https://pastebin.com/nsA4VAQA  (html code so far)

let listOfCities = ['Dublin', 'Cork', 'Limerick', 'Killarney'];


function init() {

   
    //  RenderCities(listOfCities);
    let generatedHTML = RenderCitiesAsHTML(listOfCities);
    RenderCityListingFromHTML(generatedHTML);
    RenderCitySelectList(listOfCities)

}
// e is shorthand for 'element' - but it can be anything you want to call it
function onCityChange(e) {

    const currentIndex = e.selectedIndex;
    const currentValue = e.value;
    const currentText = e.options[currentIndex].text;
    console.log(`City Select has changed index to ${currentIndex}`)
    console.log(`City Select has changed value to ${currentValue}`)
    console.log(`City Select has changed text to ${currentText}`)

}


function btnAddCity() {
    console.log("I am adding a city")

    

    const cityToAddObject = document.querySelector('#tbAddCity');
    const cityToAddText = cityToAddObject.value;

    listOfCities.push(cityToAddText);

    cityToAddObject.value="";

    RenderCitySelectList(listOfCities)
    let generatedHTML = RenderCitiesAsHTML(listOfCities);
    RenderCityListingFromHTML(generatedHTML);





}

function RenderCitySelectList(listOfCities) {

    const selectedObject = document.querySelector('#selectListOfCities');

    selectedObject.length = 0; // empty the list 

    listOfCities.forEach((city, index) => {

      let option = document.createElement("option");
      option.value = index;
      option.text = city;

      selectedObject.add(option,null);

    })


}

// This version is useful when you weant to know the index position of the item as you iterate through the array
function RenderCitiesAsHTML(listOfCities) {

    let htmlContent = [];


    htmlContent.push(`<ul class="list-group">`);
    listOfCities.forEach((city, index) => {

        htmlContent.push(`<li>${index} : ${city}</li>`);

    })

    htmlContent.push(`</ul>`);

    return htmlContent.join(" ");
}

function RenderCitiesAsHTMLV1(listOfCities) {

    let htmlContent = [];
    // htmlContent.push("<p>")
    // htmlContent.push("This is code returned from array")
    // htmlContent.push("</p>")


    htmlContent.push(`<ul class="list-group">`);
    for (const city of listOfCities) {
        htmlContent.push(`<li>${city}</li>`);
    }

    htmlContent.push(`</ul>`);



    return htmlContent.join(" ");
}

function RenderCityListingFromHTML(htmlContent) {

    const selectedHMTLObject = document.querySelector('#listGroup');
    selectedHMTLObject.innerHTML = htmlContent;
}


function RenderCities(listOfCities) {

    document.getElementById("p1").innerHTML = listOfCities[0];
    document.getElementById("p2").innerHTML = listOfCities[1];
    document.getElementById("p3").innerHTML = listOfCities[2];
    document.getElementById("p4").innerHTML = listOfCities[3];

}