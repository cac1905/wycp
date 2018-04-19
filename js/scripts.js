jQuery(document).ready(function($) {
	$('form.quform').Quform();

	// Tooltip settings
	if ($.isFunction($.fn.qtip)) {
		$('.quform-tooltip').qtip({
			content: {
				text: false
			},
			style: {
				classes: 'qtip-default qtip-shadow quform-tt',
				width: '180px'
			},
			position: {
				my: 'left center',
				at: 'right center'
			}
		});
	}

	// Changes subject to a text field when 'Other' is chosen
	$('#subject').replaceSelectWithTextInput({onValue: 'Other'});

	// home slider
	$('.bxslider').bxSlider({
	  auto: true,
	  pager: true,
	   mode:'fade'
	});

	// 返回顶部
	 $(window).scroll(function () {
		if($(window).scrollTop() > 100) {  
			$(".backTop").height(48);
		} else {
			$(".backTop").height(0);
		}
	}); 
		
	$(".backTop").on("click",function(){
		$("html,body").animate({scrollTop:0}, 500);
	})
	$(".bx-pager-item").each(function(i){
		$(".bx-pager-item").eq(i).append('<div class="thumb thumb-0'+(i+1)+'">111</div><div class="overlay-thumb></div>');
	})
	

}); // End document ready
(function ($) {
	$(window).load(function () {
		// Preload images
		var images = [
      		'images/close.png',
    		'images/success.png',
    		'images/error.png',
    		'images/default-loading.gif'
    	];

		// Preload images for any active themes
		if ($('.quform-theme-light-light, .quform-theme-light-rounded').length) {
			images = images.concat([
         		'images/button-active-bg-rep.png',
         		'images/close.png',
         		'images/input-active-bg-rep.png'
         	]);
		}

		if ($('.quform-theme-dark-dark, .quform-theme-dark-rounded').length) {
			images = images.concat([
         		'images/button-active-bg-rep.png',
         		'images/close.png',
         		'images/input-active-bg-rep.png',
         		'images/loading.gif'
         	]);
		}

		if ($('.quform-theme-minimal-light').length) {
			images = images.concat([
         		'images/close-light.png'
         	]);
		}

		if ($('.quform-theme-minimal-dark').length) {
			images = images.concat([
         		'images/close-dark.png',
         		'images/loading-dark.gif'
         	]);
		}

		$.preloadImages(images);
	});
})(jQuery);