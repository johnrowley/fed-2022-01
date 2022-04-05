// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

function canDrink(person) {

    if (person?.age != null) {  //optional chaining operator 
        if (person.age < 18) {
            console.log(`Nope 👶`)
        } else if (person.age < 21) {
            console.log(`Not in the US 😆`)
        } else {
            console.log(`Yes 🍺`)
        }

    } else {
        console.log(`YOu are not a person`)
    }

}

function canDrinkBetter(person) {

    if(person?.age == null) return; // guard clause - stops func going further

    const result = canDrinkResponse(person.age)

    console.log(result);

}

function canDrinkResponse(age) {
    if(age <18 ) return  `Nope 👶`
    if(age <21) return `Not in the US 😆`
    return `Yes 🍺`
}

const p = {
    age: 22
}

canDrink(p)

