$(document).ready(function() {
    $('#azerty').css('display','none');
    $('#search').click(function() {
        $('#azerty').css('display','block')
    });
    $('#azerty').focusout(function() {
        $(this).css('display','none')
    });
});
