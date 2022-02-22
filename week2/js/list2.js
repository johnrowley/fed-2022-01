

let dwarves = ["Sleepy", "Dopey", "Sneezy"] // zero indexed array - starts at 0 so last item is 1 less than length



dwarves[3] = "Grumpy"; // adds grumpy to the end of list


dwarves.push("Happy");
dwarves.push("Bashful");
console.log(`Before pop: ${dwarves.join()}`)
dwarves.pop();
console.log(`After pop: ${dwarves.join()}`)


dwarves.shift();// removes from start
console.log(`After shift: ${dwarves.join()}`)
dwarves.unshift("Doc")
console.log(`After unshift: ${dwarves.join()}`)

dwarves.splice(1, 0, 'Sleepy')
console.log(`After splice: ${dwarves.join()}`)

for (let i = 0; i < dwarves.length; i++) {
    console.log(`The first dwarf is ${dwarves[i]}`);
}


// Small code challenge : can you write a sequences of statements that empties the dwarves array
// Imagione they are queueing for a bus, one bus per dwarve, how would you represent this as they go 
// on their merry way
console.log(`Before popping: ${dwarves.join()}`)

while ( dwarves.length > 0 ) {

    let dwarf = dwarves.pop();
    GetBus(dwarf)

    console.log(`After popping ${dwarf}: ${dwarves.join()}`)

}

function GetBus(dwarf) {
    console.log(`${dwarf} has just caught a bus`)

}




