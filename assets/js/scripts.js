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
		
	$('.mediaButton').click(function(e) {
		e.preventDefault();
		$(this).parent().siblings('.mediaContainer').fadeIn();
	});
	
	// DETECT SAFARI
	if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1) {
	   $('body').addClass('safariBrowser');
	}
});

$(window).scroll(function() {
	if ( $('#section2 .sectionTitle').hasClass('aos-animate') ) {
		$('body').addClass('moveLine');
	} else {
		$('body').removeClass('moveLine');
	}
	if ( $('#section3 .sectionTitle').hasClass('aos-animate') ) {
		$('body').addClass('moveLine2').removeClass('moveLine');
	} else {
		$('body').removeClass('moveLine2');
	}
	if ( $('#section4 .sectionTitle').hasClass('aos-animate') ) {
		$('body').addClass('moveLine3').removeClass('moveLine, moveLine2');
	} else {
		$('body').removeClass('moveLine3');
	}
	if ( $('#section5 .sectionTitle').hasClass('aos-animate') ) {
		$('body').addClass('moveLine4').removeClass('moveLine, moveLine2, moveLine3');
	} else {
		$('body').removeClass('moveLine4');
	}
	if ( $('#section6 .sectionTitle').hasClass('aos-animate') ) {
		$('body').addClass('moveLine5').removeClass('moveLine, moveLine2, moveLine3, moveLine4');
	} else {
		$('body').removeClass('moveLine5');
	}
	if ( $('#section7 .sectionTitle').hasClass('aos-animate') ) {
		$('body').addClass('moveLine6').removeClass('moveLine, moveLine2, moveLine3, moveLine4, moveLine5');
	} else {
		$('body').removeClass('moveLine6');
	}
});

// SIDE NAVIGATION
$('.openNav').click(function() {
	$('body').toggleClass('reveal');
	//$(this).siblings('.navigation').toggleClass('reveal');
	//$(this).toggleClass('reveal');
});

$('.wrapper').click(function() {
	if ( $('body').hasClass('reveal') ) {	
		$('body').removeClass('reveal');
	}
});

$('.navigation a').click(function() {
	$('body').toggleClass('reveal');
	//$(this).parent().parent().parent().toggleClass('reveal');
});
	
var viewPortHeight = $(window).height();
$(window).scroll(function(){
	$("header").css("opacity", 1 - $(window).scrollTop() / viewPortHeight);
});

/*const updateScrollPercentage = function() { 
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

window.addEventListener('scroll', updateScrollPercentage)*/

const updateScrollPercentage = function() { 
	const heightOfSection = document.getElementById("#section1"),
	contentScrolled = window.pageYOffset,
	bodyHeight = document.body.offsetHeight,
	//percentage = document.querySelector("[data-scrollPercentage] .second"),
	percentage2 = document.querySelector("[data-scrollPercentage] .percentage")

	if ( bodyHeight - contentScrolled <= heightOfSection ) {
		//percentage.style.height = "100%"
		percentage2.style.height = "100%"
	}
	else {
		const total = bodyHeight - heightOfSection,
		got = contentScrolled,
		percent = parseInt((got/total) * 100)
		//percentage.style.height = percent + "%"
		percentage2.style.height = percent + "%"
	}
}

window.addEventListener('scroll', updateScrollPercentage)