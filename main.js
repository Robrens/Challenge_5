$(document).ready(function() {
    $('#azerty').css('display','none');
    $('#search').click(function() {
        $('#azerty').css('display','block')
        $('#azerty').focus()
    });
    $('#azerty').focusout(function() {
        $(this).css('display','none')
    });

    // $('li').css('background', 'value');

});
