/*
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 * @depend /components/facebook.js
 */

$(function(){

	$('.share-facebook').click(function(event){
			FB.getLoginStatus(function(fbResponse) {
			if (fbResponse.status === 'connected') {
				FB.ui({
				method: 'feed',
				image:'/img/kiev-1.jpg',
				link: 'http://flamecause.herokuapp.com',
				caption: 'The Difference Between...',
				display: 'iframe'
				});
			} 
			else if (fbResponse.status === 'not_authorized') {
				FB.login();
			}
		});

	});
	$('.share-twitter').click(function(event){
		window.open('https://twitter.com/intent/tweet?hashtags=flamecausekiev&url=http://flamecause.com/kiev', 'mywin', 'left=500,top=300,width=500,height=500,toolbar=1,resizable=0'); 
	});

	$('.share-google').click(function(event){
		window.open('https://plus.google.com/share?url=http://flamecause.com/kiev', 'mywin', 'left=500,top=300,width=600,height=600,toolbar=no,resizable=no'); 
	});

});