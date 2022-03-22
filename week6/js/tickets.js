const adultPrice = 10;
const childPrice = 5;
const familyPrice = 30
let totalTicketPrice = 0;
let adultTicketCount = 0;
let childTicketCount = 0;
const maxAdultTickets = 4;
const maxChildTickets = 5

function init() {
    WriteTotal(0)
    WriteAdultCount(0)
    WriteChildCount(0)
}

function WriteTotal(total) { document.getElementById("totalTicketPrice").innerHTML = total }
function WriteAdultCount(count) { document.getElementById("adultTicketCount").innerHTML = count }
function WriteChildCount(count) { document.getElementById("childTicketCount").innerHTML = count }

function addTicket(item) {

    if (item == 'adult') {

        adultTicketCount = ++adultTicketCount <= maxAdultTickets ? adultTicketCount : maxAdultTickets
        WriteAdultCount(adultTicketCount)

    } else {
        if (adultTicketCount > 0) {
            childTicketCount = ++childTicketCount <= maxChildTickets ? childTicketCount : maxChildTickets;
             WriteChildCount(childTicketCount)
        }
    }

    WriteTotal(CalculatePrice());
}

function removeTicket(item) {

    if (item == 'adult') {

        adultTicketCount = --adultTicketCount >= 0 ? adultTicketCount : 0
        WriteAdultCount(adultTicketCount)

        if (adultTicketCount == 0 ) {
            childTicketCount = 0;
            WriteChildCount(0);
        }

    } else {
       
            childTicketCount = --childTicketCount >0 ? childTicketCount : 0;
             WriteChildCount(childTicketCount)
       
    }
    WriteTotal(CalculatePrice());
}
















function CalculatePrice() {

    const isFamilyTicket = adultTicketCount == 2 && childTicketCount == 3 ? true : false;

    if (isFamilyTicket) {
        return familyPrice
    } else {

        return (adultTicketCount * adultPrice) + (childTicketCount * childPrice);

    }
    
    
}
