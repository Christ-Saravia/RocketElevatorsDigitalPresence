$(document).ready(function(){

        // Drowdown options

        $('.dropdown-toggle').dropdown({
            "offset": -100,
            "flip": false
        });

        // Tooltip
        $('[data-toggle="tooltip"]').tooltip({
            delay: {show: 1000, hide: 1000},
            html: true
        });

    const newLocal = 10000;
        // Carousel

        $('.owl-carousel').carousel({
            interval: newLocal,
        });

        
        
});
















