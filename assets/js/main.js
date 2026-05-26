$(document).ready(function() {
    console.log("test");

    $('.menu-icon').click(function (){
        $(this).parent().toggleClass('active');
    });
});