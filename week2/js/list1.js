let dwarf1 = "Sleepy"
let dwarf2 = "Dopey"
let dwarf3 = "Sneezy"
let dwarf4 = "Grumpy"
let dwarf5 = "Happy"
let dwarf6 = "Bashful"
let dwarf7 = "Doc"

let dwarves = ["Sleepy", "Dopey", "Sneezy", "Bashful", "Doc"] // zero indexed array - starts at 0 so last item is 1 less than length


console.log(`The first dwarf is ${dwarves[0]}`);
console.log(`The first dwarf is ${dwarves[1]}`);
console.log(`The first dwarf is ${dwarves[2]}`);

for (let i = 0; i < dwarves.length; i++) {
    console.log(`The first dwarf is ${dwarves[i]}`);
}