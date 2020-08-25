// SMOOTH SCROLL
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			//setTimeout(function(){	
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

$(document).ready(function() {
	AOS.init();
		
	$('.arrowContainer').click(function(e) {
		e.preventDefault();
		$(this).parent().siblings('.mediaContainer').fadeIn();
	});
});
	
var viewPortHeight = $(window).height();
$(window).scroll(function(){
	$("header").css("opacity", 1 - $(window).scrollTop() / viewPortHeight);
});

const updateScrollPercentage = function() { 
	const heightOfWindow = window.innerHeight,
	contentScrolled = window.pageYOffset,
	bodyHeight = document.body.offsetHeight,
	percentage = document.querySelector("[data-scrollPercentage] .second"),
	percentage2 = document.querySelector("[data-scrollPercentage] .percentage")

	if ( bodyHeight - contentScrolled <= heightOfWindow ) {
		percentage.style.height = "100%"
		percentage2.style.height = "100%"
	}
	else {
		const total = bodyHeight - heightOfWindow,
		got = contentScrolled,
		percent = parseInt((got/total) * 100)
		percentage.style.height = percent + "%"
		percentage2.style.height = percent + "%"
	}
}

window.addEventListener('scroll', updateScrollPercentage)