
// represent a car



// let carMf1 = 'Nissan'
// let carModel1 = 'Navara'
// let carEngine1 = '2.5'
// let carColour1 = 'Grey'
// let carType1 = 'Pickup'

// let carMf2 = 'Ford'
// let carModel2 = 'Fiesta'
// let carEngine2 = '1.2'
// let carColour2 = 'Pink'
// let carType2 = 'Sedan'

// let car1 = ["Volkswagen","1.6 l", "Golf Hatchback"];
// let car2 = ["Volkswagen","1.6 l", "Golf Hatchback"];
// let car3 = ["Volkswagen","Red", "Golf Hatchback"];
// let fleet = [car1, car2, car3]

// const  Volkswagon = {Size: "1.6", Type: "Golf_Hatchback"};

// Create an object to represent the car
let car0 = {

    mf: 'Ford',
    model: 'Fiesta',
    engine: '1.2',
    colour: 'Pink',
    type: 'Sedan'
}

let car1 = {

    mf: 'Volkswagen',
    model: 'Golf',
    engine: '1.6',
    colour: 'Red',
    type: 'Hatchback'
}

console.log(`${car1.mf}, ${car1.model}, ${car1.engine}`)
console.log({ car1 })

let fleet = [
    {

        mf: 'Ford',
        model: 'Fiesta',
        engine: '1.2',
        colour: 'Pink',
        type: 'Sedan'
    },

    {

        mf: 'Volkswagen',
        model: 'Golf',
        engine: '1.6',
        colour: 'Red',
        type: 'Hatchback'
    },

    {

        mf: 'Ford',
        model: 'Kuga',
        engine: '1.3',
        colour: 'Blue',
        type: 'Hatchback'
    },

    {

        mf: 'Ford',
        model: 'Mustang Mach-E',
        engine: 'Electric',
        colour: 'Steely Blue',
        type: 'Sedan'
    },


]

let alternativeFleet = [ car0, car1]
//Method 1
for (let i = 0; i < fleet.length; i++) {
    console.log(`Details: ${fleet[i].mf}, ${fleet[i].model}`);
}

//Method 2
for (let i = 0; i < fleet.length; i++) {
    const currentCar = fleet[i];
    const message = `Details: ${currentCar.mf}, ${currentCar.model}`
    console.log(message);
}

//Method : For / Of : Preferred approach - neater

for(const currentCar of fleet) {

    const message = `ForOf : ${currentCar.mf} : ${currentCar.colour} :  ${currentCar.engine}`
    console.log(message)
}

// Object destructuring
for (let i = 0; i < fleet.length; i++) {
    ({mf, model, engine} = fleet[i]);
    // const message = `Details: ${mf}, ${model} ${colour}, ${type}`
    const message = `Details: ${mf}, ${model}`
    console.log(message);
}


let dwarves = ["Sleepy", "Dopey", "Sneezy"] 

function DoesDwarfExistInList(dwarfToFind) {
    let found = false;

    for(let i = 0; i< dwarves.length; i++) {

        if(dwarves[i].toLowerCase()==dwarfToFind.toLowerCase()) {

            found=true;
            break;
        }
    }

    return found;
}

let found = DoesDwarfExistInList("sneezy")

console.log(`Dwarf is ${found}`)

//CAn you apply what you have learned to find if Ford exists in the fleet

function findCarByMf(mf) {
    let found = false;

    for(let i = 0; i< fleet.length; i++) {
        let currentCar = fleet[i];
        if(currentCar.mf.toLowerCase()==mf.toLowerCase()) {

            found=true;
            break;
        }
    }

    return found;
}

let foundMf = findCarByMf("FoRd")

console.log(`Car is ${foundMf}`)

function GetAllCarsByMf(fleet, nameOfManufacturerfToFind) {

    let carsByManufacturer = fleet.filter(currentCar => currentCar.mf.toLowerCase() == nameOfManufacturerfToFind.toLowerCase() )

    return carsByManufacturer;

}

let findCars = GetAllCarsByMf(fleet, "Ford");

for(const currentCar of findCars) {
    const message = `Found ${currentCar.mf} : ${currentCar.colour} :  ${currentCar.engine}`
    console.log(message)
}


// Challenge: Can you extract all the manufacturers from the fleet

function GetAllManufacturers(fleet) {

    let foundManufacturers = []

    //Method 1
    fleet.forEach(function (car) {
        foundManufacturers.push(car.mf);
    })

    //Method 2 : Map : Extract properties into a new object - in this case a single variable - and generate a list
    //foundManufacturers = fleet.map(currentCar => currentCar.mf)

    foundManufacturers = fleet.map(currentCar => currentCar.mf )




    return foundManufacturers;
}

let foundManufacturers = GetAllManufacturers(fleet)
console.log(foundManufacturers.join())

