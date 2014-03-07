/**
 * @depend /third-party/jquery.js
 * @depend /third-party/underscore.js
 * @depend /third-party/backbone.js
 * @depend /components/facebook.js
 * @depend /components/share.js
 */





function gotCommonImages(images){
  $('.image-container-bottom').append('<div class="bottom-image" style="background-image:url(' +  images[0].src_big + ');"></div>');  
  setInterval(function(){imageRotatorBottom(images);}, 3000);
  
  console.log(images);
  $('body').addClass('red');
  $('audio')[0].play();
}

function imageRotatorBottom(images){
  console.log(_.random(0, images.length));
  if($('.image-container-bottom div').length === 5){
    $('.image-container-bottom div:first').animate({
        marginLeft: '-=1440px'
        }, 500,'swing', function() {
          console.log('remove');
          $( this ).remove();
          $('.image-container-bottom div:first').css('margin-left','720px');
          $('.image-container-bottom').append('<div class="bottom-image" style="background-image:url(' +  images[_.random(0, images.length-1)].src_big + ');"></div>');
      });
  }else {
  
    $('.image-container-bottom div:first').animate({
        marginLeft: '-=720px'
        }, 500,'swing', function() {
          $( this ).css('margin-left', '0px');
          $('.image-container-bottom').append('<div class="bottom-image" style="background-image:url(' +  images[_.random(0, images.length-1)].src_big + ');"></div>');
      });
  }
  

}

function getRobinImages(images){
  $('.image-container-top').append('<div class="top-image" style="background-image:url(' +  images[0].src_big + ');"></div>');      
  setInterval(function(){imageRotatorTop(images);}, 3000);
}

function imageRotatorTop(images){
  console.log(_.random(0, images.length));
  if($('.image-container-top div').length === 5){
    $('.image-container-top div:last').animate({
        marginRight: '-=1440px'
        }, 500,'swing', function() {
          console.log('remove');
          $( this ).remove();
          $('.image-container-top div:last').css('margin-right','720px');
          $('.image-container-top').prepend('<div class="top-image" style="background-image:url(' +  images[_.random(0, images.length-1)].src_big + ');"></div>');
      });
  } else {
  
    $('.image-container-top div:last').animate({
        marginRight: '-=720px'
        }, 500,'swing', function() {
          $( this ).css('margin-right', '0px');
          $('.image-container-top').prepend('<div class="top-image" style="background-image:url(' +  images[_.random(0, images.length-1)].src_big + ');"></div>');
      });
  }
  

}

function handleFacebookThingy(response){
    if (response.status === 'connected') {
      //$('.love-container').slideUp();
      FB.api({
          method: 'fql.query',
          query: 'SELECT pid, src_big FROM photo WHERE pid IN(SELECT pid FROM photo_tag WHERE subject=me()) AND pid IN(SELECT pid FROM photo_tag WHERE subject=737958530)'
      }, function(data) {
          gotCommonImages(data);
      });

        FB.api({
          method: 'fql.query',
          query: 'SELECT pid, src_big FROM photo WHERE pid IN(SELECT pid FROM photo_tag WHERE subject=737958530)'
      }, function(data) {
          getRobinImages(data);
      });

    } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
  } else {
    // the user isn't logged in to Facebook.
  }
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1401431986786331',
    status     : true, // check login status
    cookie     : false, // enable cookies to allow the server to access the session
    xfbml      : true // parse XFBML,
  });
  
  FB.Event.subscribe('auth.authResponseChange', handleFacebookThingy);

};

