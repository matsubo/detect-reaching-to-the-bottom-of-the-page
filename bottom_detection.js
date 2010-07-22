/**
 * Detect the user is reached in the bottom of the page and make action!
 * - jQuery is required.(Test jQuery 1.4.2)
 *
 * @todo Distribute as a jQuery plugin
 * @author Yuki Matsukura
 */

/** prevent double detection */
var bottom_flag = false;

/** whether auto load is enabled */
var auto_load_enabled = true;


// Load next page automatically when the user scrolls to the bottom
$(window).scroll(function () {

  if(!auto_load_enabled){
    return;
  }
  var document_y = document.documentElement.scrollHeight || document.body.scrollHeight;
  var scroll_y = document.documentElement.scrollTop || document.body.scrollTop;

  var window_y = 0;
  var isSafari = (navigator.appVersion.toLowerCase().indexOf('safari')+1?1:0);
  var isOpera = (navigator.userAgent.toLowerCase().indexOf('opera')+1?1:0);
  if (isOpera) isIE = false;

  if (!isSafari && !isOpera) {
    window_y = document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
  } else {
    window_y = window.innerHeight;
  }

  if(bottom_flag && (document_y > scroll_y + window_y)){
    bottom_flag = false;
  }

  if(bottom_flag){
    return;
  }

  // detect the user came to the bottom of the page.
  if(document_y < scroll_y + window_y + 1){
    /* WRITE ACTION IN THE FOLLOWING LINE! */
    doInTheBottom();
    
    bottom_flag = true;
  }
});

