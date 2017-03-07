// main js

function myFunction (){

    $('#projects').hide();
    $('#fb').hide();
    $('#linkedin').hide();
    $('#res').hide();
    $('#email').hide();
    $('#arrow').hide();

    setTimeout(function(){
        $('#arrow').fadeIn(3000);
    },13500);
    setTimeout(function(){
        $('#linkedin').fadeIn(3000);
    },19000);
    setTimeout(function(){
        $('#email').fadeIn(3000);
    },19500);
    setTimeout(function(){
        $('#res').fadeIn(3000);
    },20000);
    setTimeout(function(){
        $('#fb').fadeIn(3000);
    },20500);
    setTimeout(function(){
        $('#projects').fadeIn(3000);
    },20500);



}
