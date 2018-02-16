// Written at BinaryBlood
$(window).scroll(function() {
    if ($("nav").offset().top > 50) {
        $("nav").removeClass('no-bg navbar-dark').addClass("navbar-light bg-light");
    } else {
    	$("nav").removeClass("navbar-light bg-light").addClass('no-bg navbar-dark');    
    }   
});