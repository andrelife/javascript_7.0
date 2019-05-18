$(document).ready(function(){
    $('.main_btna').on('click', function(){
        $('.overlay').fadeTo('slow');
        $('.modal').slideDown(1000);
    });
    $('.main_btn').on('click', function(){
        $('.overlay').fadeTo('slow');
        $('.modal').slideDown(1000);
    });
    $('ul:eq(2) li:eq(1)').on('click', function(){
        $('.overlay').fadeTo('slow');
        $('.modal').slideDown(1000);
    });
    $('.close').on('click', function(){
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut('slow');
    });
    
});