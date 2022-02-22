// Declare a variable to contain the colours of the rainbow
// Then set up a function that takes a list of 3 colours and initialises the variable with the colours

let rainbow = [] // global variable

function SetUpRainbow1() {

    rainbow.push("Red")
    
    console.log(`${rainbow.join()}`)
}

function SetUpRainbow2(colour1, colour2, colour3) {

    rainbow.push(colour1)
    rainbow.push(colour2)
    rainbow.push(colour3)
    
    console.log(`${rainbow.join()}`)
}

function SetUpRainbow3(ListOfColours) {

   rainbow = ListOfColours
    
    console.log(`${rainbow.join()}`)
}

function ListColours(ListOfColours) {

    console.log("List of Colours here")
    for(let i = 0; i < ListOfColours.length; i++) {

        console.log(`The colour at position ${i} is ${ListOfColours[i]}`);
    }

}


SetUpRainbow1();
rainbow=[];
SetUpRainbow2("red","green","yellow")

rainbow=[];
SetUpRainbow3(["Blue","Indigo","Violet"])

rainbow=[];
const colours = ["Green","Blue","Orange"]
SetUpRainbow3(colours)

ListColours(colours)


function WashLaundry(laundry) {

    while ( laundry.length > 0 ) {

        let itemToWash = laundry.pop();
       
    
        console.log(`I am washing ${itemToWash}`)
    
    }
}

const laundry = ["Shirt", "Trousers", "Socks", "Sweaters"]
WashLaundry(laundry)

const planets = ["Mercury","Venus","Earth"]

function DestroyPlanets(planets) {

    while ( planets.length > 0 ) {

        let destroyedPlanet = planets.pop();
        console.log(`I am Thanos and I have destroyed ${destroyedPlanet}`)
    
    }
}

DestroyPlanets(planets)

