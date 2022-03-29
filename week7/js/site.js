$(function () {
    console.log(`jquery goodness is loaded`)

    setup()
});

function setup() {


    SetupNumericInputs()

    WriteWelcomeMessage();
    WriteAge();
    WriteSumCalculation();
    SetupPizzaOptions() ;



}

function SetupPizzaOptions() {

    $('#selectMeatOptions').on('click', function() {

            $('input:checkbox').not(this).prop('checked', this.checked);

            
            const numberOfCheckedItems = $('input:checkbox:checked').not(this).length;

            WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    })

    $('.meatOption').on('change', function() {

        console.log('changing....')
        
        const numberOfCheckedItems = $('input:checkbox:checked').not('#selectMeatOptions').length;

        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)

    })




}

function SetupNumericInputs() {



    // $('.tb').on('focus', function () {


    //     $(this).val('');

    // })


    $('#tbNum1, #tbNum2').on('focus', function () {


        $(this).val('');

    })


    $('#tbNum1, #tbNum2').on('blur', function () {


        isNaN($(this).val()) ? $(this).val(0) : $(this).val()

    })



}


function WriteWelcomeMessage() {

    $('#btnDemo').on('click', function () {

        WriteToMessagePanel('hello world');
    })
}
function WriteSumCalculation() {

    $('#btnAdd').on('click', function () {

        // capture the value of inputs 1 and 2 and add them and place result in messagepanel


        const number1 = isNaN(parseInt($('#tbNum1').val())) ? 0 : $('#tbNum1').val();
        const number2 = isNaN(parseInt($('#tbNum2').val())) ? 0 : $('#tbNum2').val();

        const total = parseInt(number1) + parseInt(number2);
        WriteToMessagePanel(`The total is ${total}`)
        console.log(`btnAdd is called`)
    })

}



function WriteAge() {
    $('#btnAge').on('click', function () {

        const age = $('#tbAge').val();
        const msg = `Your age is ${age}`
        WriteToMessagePanel(msg)
        console.log(`btnAge is called`)
    })

}

function WriteToMessagePanel(msg) {

    $('#messagePanel').html(msg)
}