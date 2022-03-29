$(function () {

    setup();

})

function setup() {

    applyStriped();

    $('#btnToggle').on('click', toggle);

    $('#btnStyle').on('click', function () {

        $('p:last').css('font-style', 'italic')

    })


    $('#btnHideFirst').on('click', function () {

        $('p:first').hide();
    })

    $('#btnShowFirst').on('click', function () {

        $('p:first').show();
    })

    $('#btnShowDate').on('click', function(){

        const currentDate = new Date();
        const shortDate = currentDate.toDateString();
        
        $('p')[0].innerHTML = `<em>Hello there! ${shortDate}</em>`

    })

    $('#btnAppend').on('click', function() {

        console.log(`Append button is clicked`);

        $('<p>This is new item 1</p>').insertAfter('p:last');
        $('<p>This is new item 2</p>').insertAfter('p:last');
        $('<p>This is new item 3</p>').insertAfter('p:last');


    })

// Todo next week: Append Text, show Date.....










}

function applyStriped() {

    $('p.second').addClass('striped')
}

function toggle() {

    $('body div p').toggleClass('striped')

}