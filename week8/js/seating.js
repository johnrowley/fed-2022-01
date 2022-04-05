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
