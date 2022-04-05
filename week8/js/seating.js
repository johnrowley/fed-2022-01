$(function () {
    const maxSeats = 3
    InitSeating(maxSeats);
});


function InitSeating(maxSeats) {


    $(`.seat`).on('click', function () {

        if($(this).hasClass(`reserved`)) return;

        if ($(this).hasClass(`selected`)) {
            $(this).removeClass('selected');
            ShowSeatCount();
            return;
        }

        if ($(`.selected`).length >= maxSeats) {

            return;
        }


        $(this).addClass(`selected`);

        
        if (!isValidSeatChoice()) {
            $(this).removeClass(`selected`);
            return;

        };

        ShowSeatCount();
       
      



    })


}

function ShowSeatCount() {

    let seatsChosen = [];


    $(`.selected`).each( function (index) {
        const rowSeat = $(this).data('row')
        const colSeat = $(this).data('col')

        seatsChosen.push({row: rowSeat, col: colSeat});

        // const msg = `You chose ${rowSeat} : ${colSeat}`
        // console.log(msg);

    })

    console.log(seatsChosen)

    let chosenSeatStrings = seatsChosen.map(x=> { return `${x.row}:${x.col}` })

    $('#seatsChosen').html(`Selected Seats: ${chosenSeatStrings.join(', ')}`);

}

function isValidSeatChoice() {


    let rowsChosen = [];


    $(`.selected`).each( function (index) {
        const row = $(this).data('row')
        console.log(`row is ${row}`)

        if (!rowsChosen.includes(row)) {
            rowsChosen.push(row);
        }

    })

    console.log({rowsChosen});

    return  rowsChosen.length <=1 ? true : false;
}
