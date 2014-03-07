/**
 * @depend /third-party/jquery.js
 */
 

$(function(){

var enableTimer = 0;
  
  window.addEventListener('scroll', function() {
      clearTimeout(enableTimer);
      removeHoverClass();
      enableTimer = setTimeout(addHoverClass, 200); // 200 is a bit snappier
  }, false);

  /**
   * Removes the hover class from the body. Hover styles
   * are reliant on this class being present
   */
  function removeHoverClass() {
    document.body.style.pointerEvents = 'none';
  }

  /**
   * Adds the hover class to the body. Hover styles
   * are reliant on this class being present
   */
  function addHoverClass() {
    document.body.style.pointerEvents = 'auto';
  }
});