window.fbAsyncInit = function() {
        FB.init({
          appId      : '732317930133325',
          status     : true, // check login status
          cookie     : false, // enable cookies to allow the server to access the session
          xfbml      : true, // parse XFBML,
        });
		FB.Event.subscribe('auth.authResponseChange', console.log);
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
