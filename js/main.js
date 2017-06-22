$(document).ready(function(){

    function resize(){
        $('#row-banner').css('margin-top', $('#home').css('height'));
    }

    resize();

    $(window).on('resize', function(){
        resize();
    });
});