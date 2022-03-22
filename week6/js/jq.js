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


// Todo next week: Append TExt, show Date.....








}

function applyStriped() {

    $('p.second').addClass('striped')
}

function toggle() {

    $('body div p').toggleClass('striped')

}