$(document).ready(function(){
	$( '#example5' ).sliderPro({
		height: 470,
		width: 530,
		orientation: 'vertical',
		loop: false,
		arrows: false,
		autoplay: false,
		buttons: false,
		touchSwipe: true,
		thumbnailsPosition: 'right',
		thumbnailWidth: 75,
		thumbnailHeight: 75,
		thumbnailArrows: true,
		fadeThumbnailArrows: false,
		breakpoints: {
			750: {
				orientation: 'horizontal',
				buttons: true,
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 0,
				thumbnailHeight: 0,
				fadeArrows: false,
				arrows: true
			},
			480: {
				orientation: 'horizontal',
				buttons: true,
				thumbnailsPosition: 'bottom',
				thumbnailWidth: 0,
				thumbnailHeight: 0,
				fadeArrows: false,
				arrows: true
			}
		}
	});
	
	$('input[name="cart_quantity"]').numeric();	
	$('input[name="quote_cart_quantity"]').numeric();	
	
	$(document).on('click', '.color-slider .colr', function(e) {
	//$('.color-slider .colr').click(function(e) {
		var target = $(e.target);
		var select_val = $(this).attr('attr_id');
		$("input:hidden[name='id[2]']").val(select_val);
		$('.clr-bx').removeClass('active');
		$(this).parent().parent().addClass('active');
		
	});
	
	$('.shipping_type').on('change', function() {
		$(this).get_total_price();
	});
	
	$(document).on('change','input[name="cart_quantity"]', function() {
		if($(this).val() < minQty ){
			alert("Prooduct Cart Quantity Should Not Be Less then Product Minimum Qty");
			$(this).val(minQty);
		}
		$(this).get_total_price();
	
	});

	$('#imprint_color').on('change', function() {
		$(this).get_total_price();
	});
	
	$.fn.get_total_price = function(event) {
		
		var products_id = $("input[name='products_id']").val();
		var source = $("input[name='p_source']").val();
		var qty = $("#buynow_product input[name='cart_quantity']").val();
		var ship_option = $("#buynow_product .shipping_type").val();
		var air_shipping_wt = $("input[name='air_shipping_wt']").val();
		var air_cargo_wt = $("input[name='air_cargo_wt']").val();
		var sea_shipping_wt = $("input[name='sea_shipping_wt']").val();
		var imprint_color = $("#imprint_color").val();
		var imprint_position = $("#imprint_position").val();
		
		$.ajax({
		  type: "POST",
		  url: "ajax/ajax_product.php",
		  data: { action: "ship_cost", p_id: products_id, qty: qty, ship_type: ship_option, air_shipping_wt: air_shipping_wt, air_cargo_wt: air_cargo_wt, sea_shipping_wt: sea_shipping_wt, imprint_color: imprint_color, imprint_position: imprint_position }
		}).done(function( msg ) {
			//console.log(msg);
		   $(".totalPr").find("label").html(msg);
		});
	}
	
	$(this).get_total_price();
	
	$('#sample_cart_quantity').on('change', function() {
		$(this).get_sample_price();
	});
	
	$.fn.get_sample_price = function(event) {
	
		var products_id = $("input[name='products_id']").val();
		var source = $("input[name='p_source']").val();
		var qty = $("#sample_imprint_product select[name='cart_quantity']").val();
		var sample_type = $("#sample_imprint_product input[name='id[4]']").val();
		
		$.ajax({
		  type: "POST",
		  url: "ajax/ajax_product.php",
		  dataType:"json",
		  data: { action: "sample_cost", p_id: products_id, source:source, qty: qty, sample_type:sample_type }
		}).done(function( msg ) {
		   $(".totalSPr").html("");
		   $(".totalSPr").html("<span> x "+msg.products_price+" each </span>&nbsp; = "+msg.total_price);
		});
	}
	
	$(this).get_sample_price();
	
	
	
	$('.add-box').click(function(){
        var n = $('.text-box').length + 1;
        if(n > 5)
        {
            alert('Only 5 Savy :D');
            return false;
        }
        var box_html = $('<div class="text-box form-group"><div class=""><input type="file" class="" name="txtImage[]" id="imageinput'+ n +'"/></div><div class=""><button type="submit" class="remove-box btn btn-danger btn-sm"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div></div>');
        $('.text-box:last').after(box_html);
        box_html.fadeIn('slow');
    });

    $('.form-horizontal').on('click', '.remove-box', function(){
        $(this).closest(".form-group").remove();
        return false;
    });
	
	
	$('.add-box2').click(function(){
        var n = $('.text-box2').length + 1;
        if(n > 5)
        {
            alert('Only 5 Savy :D');
            return false;
        }
        var box_html = $('<div class="text-box2 form-group"><div class=""><input type="file" class="" name="txtImage[]" id="imageinput'+ n +'"/></div><div class=""><button type="submit" class="remove-box btn btn-danger btn-sm"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div></div>');
        $('.text-box2:last').after(box_html);
        box_html.fadeIn('slow');
    });

    $('.form-horizontal').on('click', '.remove-box', function(){
        $(this).closest(".form-group").remove();
        return false;
    });
	
	$('.add-box3').click(function(){
        var n = $('.text-box3').length + 1;
        if(n > 5)
        {
            alert('Only 5 Savy :D');
            return false;
        }
        var box_html = $('<div class="text-box3 form-group"><div class=""><input type="file" class="" name="txtImage[]" id="imageinput'+ n +'"/></div><div class=""><button type="submit" class="remove-box btn btn-danger btn-sm"><i class="fa fa-times-circle" aria-hidden="true"></i></button></div></div>');
        $('.text-box3:last').after(box_html);
        box_html.fadeIn('slow');
    });

    $('.form-horizontal').on('click', '.remove-box', function(){
        $(this).closest(".form-group").remove();
        return false;
    });
	
	$("input[type='radio'][name='sample_type']").click( function(e) {
		e.preventDefault();
	});
	
	$(".video_btn").click(function(){
	 $('#Modal1 iframe').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('data-url'));
	});
	$(".video_btn_mob").click(function(){
	 $('#Modal1 iframe').attr('src', 'https://www.youtube.com/embed/' + $(this).attr('data-url'));
	});
	
});
