$( document ).ready(function() {


  /****************
   *  PhotoSwipe *
  ****************/
  var $pswp = $('.pswp')[0];
  var items = [];
  $('.portfolio .item').each( function() {
    $(this).find('a').each(function() {
      var item = { 
        src: $(this).attr('href'), 
        w: $(this).data('width'), 
        h: $(this).data('height'), 
        title: $(this).find('img').first().attr('alt') + "<br /><small>" + $(this).data('meta') + "</small>"
      }
      items.push(item);
      $(this).on('click', function(event) {
        event.preventDefault();
        var options = {
          index: $(this).data('index'),
          showHideOpacity: true, 
          mainClass: 'pswp--minimal--dark',
          barsSize: {top:0,bottom:0}, 
          fullscreenEl: false,
          shareEl: false,
          bgOpacity: 0.9, 
          tapToClose: true, 
          tapToToggleControls: false
        }
        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
      });
    });
  });

});


