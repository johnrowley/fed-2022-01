
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

// This is a different way to do onload - without have to explicity set onload on the body
document.addEventListener("DOMContentLoaded", (e) => {

RenderCarData()

})

function RenderCarData() {


    let htmlContent = [];

    htmlContent.push(`<table class="table">`)


    for(const car of fleet) {

        htmlContent.push(`<tr>`)
        htmlContent.push(`<td>${car.mf}</td>`)
        htmlContent.push(`<td>${car.model}</td>`)
        htmlContent.push(`<td>${car.colour}</td>`)
        htmlContent.push(`<td>${car.engine}</td>`)
        htmlContent.push(`<td>${car.type}</td>`)
       
        htmlContent.push(`</tr>`)

    }

    htmlContent.push(`</table>`)

    const container = document.getElementById("tableContainer");

    container.innerHTML =htmlContent.join(" ")

    



}