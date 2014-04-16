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
	
	
var start=true;

//var vall="-"+($('.clicked').first().width()-(($('.clicked').first().width()*130)/766))+"px";

	$('.discog').click(function(){
		if($(this).css("left")=="0px"){
			if(!start){
				$('.discog').each(function(){
					$(this).animate({
    					'left' : "0px"
					});
				});
			}
		start=false;
		
			$(this).animate({
				'left' : "-"+($('.clicked').first().width()-(($('.clicked').first().width()*130)/766))+"px"
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
	
	
	
	
	
	//when the .clicked is clicked
	
	$('.clicked').click(function(){
		//doesnt do anything as .clicked can only be clicked when this is not true
		if($(this).prev().css("left")=="0px"){
			$('.discog').each(function(){
				$(this).animate({
					'left' : "0px"
				});
			});
			
			$(this).animate({
				'left' : "-"+($('.clicked').first().width()-(($('.clicked').first().width()*130)/766))+"px"
			});
			
		}
		//if it is clickable...
	else {
		//if the audio is playing
		if(isPlaying(this.parent().find("audio"))){
		//then toggle it playing to stop
		this.toggleplay();
		}
		//if the audio is not playing
		else{
			//then play it
			this.toggleplay();
		}
		
	}
	
	$.fn.toggleplay = function() { 
		if(isPlaying(this)){
			this.parent().find('audio').pause();
		}
		else{
			this.parent().find('audio').play();
		}
	return this;
	}
	
	});
	
	
	
	//goes through each audio element compares to the audio within tobplaid if it is it plays if not then it pauses all others
	/*
	function playerIt(tobplaid){
		
		$('audio').each(function( index, element ) {
		
			if(this.is(tobplaid.parent().find("audio"))){
			this.play();
			}
			else{
			this.pause();
			}
		
		});
	
	};*/
	
	//finds the audio element within elem then returns true if it is playing false if not
	function isPlaying(elem){
		
		//if is playing then return true
		if((!elem.paused || !elem.currentTime) || (elem.duration > 0 && !elem.paused)){
			return true;
			}
		//if it is not playing return false
		else{
			return false;
		}
	}
	
	/*
	$('.discog').click(function(){
	if(position of album cover is zero){
	Go through each discog close it and pause it
	Or store the playing in a var and select that only and close it and pause. 
	}
	Else{
	It's open so pause it or play it based on is isPlaying and switch icon
	}
	});
*/
/*
	//goes through each audio element and if it is playing then it returns it if it is the first time then returns null if none are playing returns false
	function currentlyplaying(){ 
		$('audio').each(function(){
			if(isPlaying(this))
				return this;
			else if(first){
			return null;
			}
	});
	return false;
	}*/
	
});