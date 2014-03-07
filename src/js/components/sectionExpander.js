/*
 * @depend /third-party/jquery.js
 */

$(function(){

	var currentSection = $('section.big:not(.expand)').first(),
			offset = $(currentSection).offset().top - $(currentSection).height()/3,
			body = $('html body');

	$(document).bind("scroll.sectionScroll", function(event){
		var scrollTop = body.scrollTop();

		if(scrollTop > offset){
			currentSection.addClass('expand');

			currentSection = $('section.big:not(.expand)').first();
			offset = $(currentSection).offset().top - $(currentSection).height()/2;

		}
	});

});
