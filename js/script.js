/**
 * scripts.js
 * Contains Script for basic static website named "White Graphics"
 */



/********************************************************************************
							PRELOADER
********************************************************************************/
$(window).on('load', function () {
	$("#preloader").delay(5000).fadeOut('slow');
});

/********************************************************************************
							owl carousel
********************************************************************************/

$(document).ready(function () {
	$("#team-right").owlCarousel({
		items: 2,
		autoplay: true,
		margin: 20,
		loop: true,
		nav: true,
		smartSpeed: 600,
		autoplayHoverPause: true,
		dots: false,
		navText: ['<i class="lni-chevron-left-circle"</i>', '<i class="lni-chevron-right-circle"</i>']
	});
});


/********************************************************************************
                                WAYPOINT SECTION 
********************************************************************************/
$(document).ready(function () {
	$("#progress-elements").waypoint(function () {
		$(".progress-bar").each(function () {
			$(this).animate({
				width: $(this).attr("aria-valuenow") + "%"
			}, 700);
		});
		this.destroy();
	}, {
		offset: 'bottom-in-view'
	});
});

/********************************************************************************
						RESPONSIVE TABS
********************************************************************************/

$(document).ready(function () {
	$('#services-tabs').responsiveTabs({
		//    startCollapsed: 'accordion'
		animation: 'slide'
	});
});

/********************************************************************************
							PORTFOLO
********************************************************************************/

$(document).ready(function () {
	$("#isotope-container").isotope({});

	$("#isotope-filters").on("click", "button", function () {
		let filterValue = $(this).attr("data-filter");

		$("#isotope-container").isotope({
			filter: filterValue
		});

		//find active button

		$("#isotope-filters").find('.active').removeClass('active');
		$(this).addClass('active');
	});
});

$(document).ready(function () {
	$("#portfolio-wrapper").magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	})
});

/********************************************************************************
                     TESTIMONIAL SLIDER OWL CAROUSEL SECTION
********************************************************************************/

$(document).ready(function () {
	$(".testimonials").owlCarousel({
		items: 1,
		autoplay: true,
		margin: 10,
		loop: true,
		nav: true,
		smartSpeed: 600,
		autoplayHoverPause: true,
		dots: false,
		navText: ['<i class="lni-chevron-left-circle"</i>', '<i class="lni-chevron-right-circle"</i>']
	});
});
/********************************************************************************
                                CLIENTS SECTION
********************************************************************************/


//$(document).ready(function () {
//	$(".client-list").owlCarousel({
//		items: 6,
//		autoplay: true,
//		margin: 20,
//		loop: true,
//		nav: true,
//		smartSpeed: 600,
//		autoplayHoverPause: true,
//		dots: false,
//		navText: ['<i class="lni-chevron-left-circle"</i>', '<i class="lni-chevron-right-circle"</i>']
//	});
//});
$(function () {
    $('.client-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="lni-chevron-left-circle"></i>', '<i class="lni-chevron-right-circle"></i>'],
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});

/********************************************************************************
                                STATS SECTION
********************************************************************************/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/********************************************************************************
                                MAPS SECTION
********************************************************************************/


function initialize() {
  
    var coordLat = 19.1737173;
    var coordLng = 72.9535994;
    var marker;
    var point = new google.maps.LatLng(coordLat, coordLng);
    var center = new google.maps.LatLng(coordLat, coordLng);
    var mapOptions = {
        zoom: 18, 
		center: center
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = 'images/gmap_default.png';
   
    
    var marker = new google.maps.Marker({
        map: map,
        position: point,
        icon: 'img/marker.png',
        animation: google.maps.Animation.BOUNCE
    , });
}
if (document.getElementById('map')) {
    google.maps.event.addDomListener(window, 'load', initialize);
};







  
    
   

