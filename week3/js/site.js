function init() {
    console.log('Page has loaded')
    WriteParagraph();
    WriteDate();



}

function WriteParagraph() {
    let paragraph = document.getElementById("ExampleParagraph");

    paragraph.innerHTML = "Hello World from Javascript"

}

function WriteDate() {

    let currentDate = new Date();
    const longDate = currentDate.toString();
    const shortDate = currentDate.toDateString();
    let paragraph = document.getElementById("CurrentDate");

    paragraph.innerHTML = `${longDate} : ${shortDate}`

}