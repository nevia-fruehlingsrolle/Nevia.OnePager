$(document).ready(function() {
    console.log("");

    $('.menu-icon').click(function (){
        $(this).parent().toggleClass('active');
    });
});