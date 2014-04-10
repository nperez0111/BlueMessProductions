jQuery(document).ready(function ($) {


    button = $('.button1');

	function goToByScroll(dataslide) {
	var pad = $('nav:visible').outerHeight(),
		top = $('.slide[data-slide="' + dataslide + '"]').offset().top
	$('html,body').stop(true).animate({
		scrollTop: Math.max(top - pad, 0)
	}, 2000, 'easeOutQuint');
}

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
	
	
var start=false;
var vall="-"+$('.clicked').first().width()+"px";
	$('.discog').click(function(){
		if($(this).css("left")=="0px"){
			if(start){
				$('.discog').each(function(){
					$(this).animate({
    					'left' : "0px"
					});
				});
			}
		start=true;
		
			$(this).animate({
				'left' : vall
			});
		}
		
	else {
		$('.discog').each(function(){
			$(this).animate({
   				 'left' : "0px"
			});
		});
	}
	
	});
	$('.clicked').click(function(){
		if($(this).prev().css("left")=="0px"){
			$('.discog').each(function(){
		$(this).animate({
    'left' : "0px"
	});
		});
			$(this).animate({
				'left' : vall
			});
			
		}
	else {
		$('.discog').each(function(){
			$(this).animate({
				 'left' : "0px"
				});
		});
	}
	
	});
});