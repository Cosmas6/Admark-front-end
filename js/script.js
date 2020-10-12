$(document).ready( function(){
	$('.serch-mble').click( function(){
		 $('.search_panel').slideToggle(500);
	});

	$('.menu').click( function(){
		 $('.navigation').slideToggle(800);
	 
	});
	
	$('.mobile-shw').click( function(){
		 $('.auto-motive ul').slideToggle(800);
	 
	});
	
	$('.menu2').click( function(){
	   $('.mobile-nav').slideToggle(500);
	 
	});
	
	$('.cm1').click( function(){
	   $('.opt1').slideToggle(100);
	 
	});
	
	
	$('.cm2').click( function(){
	   $('.opt2').slideToggle(100);
	 
	});
	
	$('.cm3').click( function(){
	   $('.opt3').slideToggle(100);
	 
	});
	
	$('.ss').click( function(){
	   $('.mobile-menu .search_panel').animate({'width' : '450px'});
		$('.ss').hide();
		 $('.cc').show();
	});
	$('.cc').click( function(){
	   $('.mobile-menu .search_panel').animate({'width' : '0px'});
		$('.ss').show();
		 $('.cc').hide();
	});

	$('.idea-btn').click( function(){
	   $('.sticky-content').animate({width:'280px'}, 500); 
	   $('.idea-btn').css({'display': 'none' });
	   $('.idea-btn-close').css({'display': 'block' });
	});
	
	 
	 $('.idea-btn-close').click(function(){
	   $('.sticky-content').animate({width:'0'}, 500);
	   $('.idea-btn').css({'display': 'block'});
	   $('.idea-btn-close').css({'display': 'none'});		
	
	 });


	$("#back-to-top").hide();
	$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$("#back-to-top").fadeIn(1500);
			} else {
				$("#back-to-top").fadeOut(1500);
			}
		});
		
		//back to top
		$("#back-to-top").click(function(){
			$('body,html').animate({scrollTop:0},1000);
			return false;
		});
	});
	
	$(document).on('click', '.plyv', function(){ 
		$('#Modal1 iframe').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('data-url'));
	});
	$('#Modal1').on('hidden.bs.modal', function () {
		$('#Modal1 iframe').attr('src', '');
	});
	
	$('.quote_popup').click( function(){
		var prod = $(this).attr('data-prod');
		$('#quote_prod').find('input[name="products_id"]').val(prod);
		$('#quote_prod').find('input[name="p_source"]').val($(this).attr('data-type'));
		$('#quote_prod').find('h3').html( $(this).attr('data-name'));
		$("#enquiry_product_form").show();
		$("#message_alert").html('');
	});
	
});

function li_step1(id){
	"use strict";
	 $('#step1').css({'display':'block' });
	 $(".tabs ul li").addClass("active");
 
}


/*-------------------------owl carousel-------------------------*/


$(document).ready(function() {
	var owl = $(".owl-carousel_1");
	owl.owlCarousel({
	    itemsCustom : [
		  [0, 1],[480, 2], [600, 2], [768, 3], [1024, 4], [1200, 5], [1400, 5], [1600, 5]
		],
		navigation : true,
		scrollPerPage: true
	});
	
	 var owl = $("#catgry-item");
	 owl.owlCarousel({
        itemsCustom : [
          [320, 2],[480, 2], [550, 3], [768, 4], [1024, 5], [1200, 5], [1400,5], [1600, 5]
        ],
        navigation : true,
		autoPlay : false,
        stopOnHover : true,
		scrollPerPage: true	   
     });
	 


    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });
	
});


$(document).ready(function() {
	
	var owl = $("#color-slider3");
	owl.owlCarousel({
      itemsCustom : [
          [0, 4],[480, 5], [600, 6], [768, 4], [1024, 6], [1200, 8], [1400, 8], [1600, 8]
        ],
        navigation : true
    });
     
	 var owl1 = $("#color-slider4");
	 owl1.owlCarousel({
      itemsCustom : [
          [0, 3],[480, 5], [600, 5], [768, 4], [1024, 6], [1200, 8], [1400, 8], [1600, 8]
        ],
        rewindNav : false,	
		pagination : false,
		stopOnHover : true,
		scrollPerPage: true,
		afterAction: function(){
			if ( this.itemsAmount > this.visibleItems.length ) {
				$('.next').show();
				$('.prev').show();
	
				if ( this.currentItem == 0 ) {
				  $('.prev').addClass('disabled');
				  $('.next').removeClass('disabled');
				}
				if ( this.currentItem == this.maximumItem ) {
				  $('.next').addClass('disabled');
				  $('.prev').removeClass('disabled');
				}
	
			} else {
				$('.next').hide();
				$('.prev').hide();
			}
		}
     });
   
    $(".next").click(function(){
    	owl1.trigger('owl.next');
    })
    $(".prev").click(function(){
    	owl1.trigger('owl.prev');
    }) 
	  
   var owl = $("#color-slider5");
	 owl.owlCarousel({
      itemsCustom : [
          [0, 3],[480, 5], [600, 5], [768, 4], [1024, 6], [1200, 8], [1400, 8], [1600, 8]
        ],
        rewindNav : false,	
		pagination : false,
		stopOnHover : true,
		scrollPerPage: true,
		afterAction: function(){
			if ( this.itemsAmount > this.visibleItems.length ) {
				$('.next').show();
				$('.prev').show();
	
				if ( this.currentItem == 0 ) {
				  $('.prev').addClass('disabled');
				  $('.next').removeClass('disabled');
				}
				if ( this.currentItem == this.maximumItem ) {
				  $('.next').addClass('disabled');
				  $('.prev').removeClass('disabled');
				}
	
			} else {
				$('.next').hide();
				$('.prev').hide();
			}
		}

     });
	 
	$(".next").click(function(){
   		owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    	owl.trigger('owl.prev');
    })
});


function validate(formData, jqForm, options) { 
		var form = jqForm[0];
		var errorText = '';
		if (!form.customer_name.value || !form.customer_email.value) { 
			errorText = '<span class="text-red">Please enter a Your Name and Email</span>'; 
		} 
		if(errorText != '') {
			$("#message_alert").html(errorText);
			return false; 
		}else{
			return true;
		}
	}
function showResponse(responseText, statusText, options) {
	$("#enquiry_product_form").hide();
	
	if(responseText.status == 1)
		$("#message_alert").html('Thank You For Your Enquiry With Us <br/> We will get back to you soon.');
	else
		$("#message_alert").html("Error While submit Enquiry !!");
}
