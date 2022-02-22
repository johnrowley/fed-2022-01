// console.log("Site js file has been loaded");

// Write this out 365 times to simulate going up the kukulkan-pyramid-steps
// let step = 1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;
// console.log(`I am going up a step ${step}`); step = step +1;

// console.log(`==========================`); 
// step = 1;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;
// console.log(`I am going up a step ${step}`); step++;


let startStep = 1; // initialising statement
const topstep = 365; // terminating condition
// ( conditional test )
// while ( startStep < topstep) {

//     console.log(`I am going up a step ${startStep}`); 
//     startStep++; // remember to increment or your program will never end
// }

// startStep =1; // no need to alter topStep
// do {

//     console.log(`I am going up a step ${startStep}`); 

//     startStep++; 

// } while (startStep < topstep)


// for(let counter =1; counter < 10; counter++) {

//     console.log(`For loop : I am going up a step ${counter}`); 
// }



function GoUpSteps(topStep) {

    console.log(`Starting out to reach the top step which is ${topStep}`);

    const midPoint = parseInt(topStep / 2);

    for (let i = 1; i < topStep; i++) {

        if (i == midPoint) {

            console.log(`I am at the MidPoint which is  ${midPoint}`);
        }

        // let stepType = "";

        // if (i % 2 == 1) {
        //     stepType = "Odd"
        // } else {
        //     stepType = "Even"

        // }

        let stepType = i % 2 == 0 ? 'Even' : 'Odd'; // ternary operator

        console.log(`\tFor loop inside function: I am going up a step ${i} which is ${stepType}`);
    }
    console.log(`==========================`);

}

GoUpSteps(10)
GoUpSteps(5)
GoUpSteps(100)