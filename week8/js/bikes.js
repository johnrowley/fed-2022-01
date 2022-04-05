$(function () {
    LoadBikes()
});


function LoadBikes() {

    const key = ``;
    const url = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${key}`;

    $.getJSON(url, function (jsondata) {

        RenderData(jsondata)
    })
}

function RenderData(stations) {

    let htmlString = [];
    for (const station of stations) {
        const button = `<button  onclick="GetStationDetail(${station.number})">Details</button>`
        htmlString.push(`<p>${station.number} : ${station.name} ${button}</p>`)
    }

    $('#messagePanel').html(htmlString.join(""))

}

function GetStationDetail(number) {
    const key = ``;
    const url = `https://api.jcdecaux.com/vls/v1/stations/${number}?contract=dublin&apiKey=${key}`;

    $.getJSON(url, function (jsondata) {

        RenderStationDetail(jsondata)
    })

}

function RenderStationDetail(station) {
    console.log(station)


    let htmlString = [];

    htmlString.push(`<p>${station.number} : ${station.name}  : ${station.available_bike_stands}`)
    htmlString.push(`${station.position.lat} : ${station.position.lng}</p>`)


    $('#messagePanel2').html(htmlString.join(""))





}
