/*
*****************************************************
*	CUSTOM JS DOCUMENT                              *
*	Single window load event                        *
*   "use strict" mode on                            *
*****************************************************
*/
$(window).on("load", function() {
	
	"use strict";
		   
	var preLoader = $('.preloader');
	var countNumber= $(".count-number");
    var contactMapFunction = $('#contactMap');
	var scrollTop = $('#scroll-top');
	var scrolls = $('a[href*="#"]');
	var bodyScroll = $('html, body');	
	var headerSticky = $( "#header" );
		 
	scrolls.on('click', function (e) {
			e.preventDefault();

			bodyScroll.animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 1500, 'linear');
		});
// ============================================
// Header Sticky
// =============================================	
		if ( headerSticky.length ) {	
			$(window).on('scroll',function() {

			if ($(this).scrollTop()>10){
				headerSticky.addClass('sticky-header');
			 }else{
			  headerSticky.removeClass('sticky-header');
			 }
		 });
		}
		
		
	countNumber.appear(function() {
		$(this).each(function() {
			var datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 8000,
				refreshInterval: 50,
			});
		});
	});	
// ============================================
// PreLoader On window Load
// =============================================
		if(preLoader.length) {	 
		 preLoader.addClass('loaderout');
	    }

//========================================
// Owl Carousel functions Calling
//======================================== 	
 
	owlCarouselInit();  	

//========================================
// Scroll top
//======================================== 	
	
	if (scrollTop.length) {
		scrollTop.on('click',function(){
			  $('body').animate({
						scrollTop: 0
				},2000);
		});
		
		$(window).scroll(function() {
			if ($(this).scrollTop()>500)
			 {
				scrollTop.addClass('showScrollTop');
			 }
			else
			 {
			  scrollTop.removeClass('showScrollTop');
			 }
		 });
	}
	
	$('#scroll-top').click(function(){
		$('html,body').animate({scrollTop : 0},2000);
	});
	
	//========================================
// Contact Map functions Calling
//======================================== 	
 	initMap();
});



//========================================
// Owl Carousel functions
//======================================== 	

function owlCarouselInit() {
	
	"use strict";	
	
//========================================
// owl carousels settings
//======================================== 		
	var mainSlider = $('#main-slider');
	var partnerSlider = $('#partner-slider');	
	var gallerySlider = $('#gallery-slider');	
	var testimonialSlider = $('#testimonial-slider');	
	var teamStyleSlider = $('#team-style-slider');	
	var nextNav = '<i class="fa fa-angle-right" aria-hidden="true"></i>';
	var prevNav = '<i class="fa fa-angle-left" aria-hidden="true"></i>';
	
		if(mainSlider.length) {	
		 mainSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
		}
		if(partnerSlider.length) {	
		 partnerSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				autoplay:true,
				responsive:{
					0:{
						items:2
					},
					600:{
						items:3
					},
					1000:{
						items:6
					}
				}
			});
		}		
		if(teamStyleSlider.length) {	
		 teamStyleSlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:false,
				mouseDrag:false,
				lazyLoad:true,
				touchDrag:false,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
				}
			});			
				
				$(window).resize(function(){
					setMySlider();
				});				
			}
			
		if(gallerySlider.length) {	
		 gallerySlider.owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				navText:[prevNav,nextNav],
				dots:true,
				autoplay:true,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			
			// 1) ASSIGN EACH 'DOT' A NUMBER
		 	var dotcount = 1;
	 
			jQuery('#gallery-slider .owl-dot').each(function() {
			  jQuery( this ).addClass( 'dotnumber' + dotcount);
			  jQuery( this ).attr('data-info', dotcount);
			  dotcount=dotcount+1;
			});
			
			 // 2) ASSIGN EACH 'SLIDE' A NUMBER
			 var slidecount = 1;
	 
			jQuery('#gallery-slider .owl-item').not('.cloned').each(function() {
			  jQuery( this ).addClass( 'slidenumber' + slidecount);
			  slidecount=slidecount+1;
			});
			
			// SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
			jQuery('#gallery-slider .owl-dot').each(function() {
			
				  var grab = jQuery(this).data('info');

				  var slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
				  console.log(slidegrab);

				  jQuery(this).css("background-image", "url("+slidegrab+")");  

			  });
			
			// THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
			// TO MAKE IT ALL NEAT 
				var amount = jQuery('#gallery-slider .owl-dot').length;
				var gotowidth = 70/amount;
				
				jQuery('#gallery-slider .owl-dot').css("width", gotowidth+"%");
				jQuery('#gallery-slider .owl-dot').css("padding", "6%");
			}
			
		if(testimonialSlider.length) {	
			 testimonialSlider.owlCarousel({
					loop:true,
					margin:0,
					nav:false,
					navText:[prevNav,nextNav],
					dots:true,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});
			}
        
			
		
		

}


			


//***************************************
// Contact Page Map
//****************************************  


/*
*****************************************************
*	END OF THE JS 									*
*	DOCUMENT                       					*
*****************************************************
*/