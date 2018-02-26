;(function () {
    'use strict';

    // code
    $('pre code').each(function(){
      var text=$(this).html().replace(/</g,'&lt;');
      var text=text.replace(/>/g,'&gt;');
      $(this).html(text);
    });

    // niceScroll
    $(".js-NiceScroll").niceScroll({
        cursorcolor : "#000000",
        cursoropacitymax : 0.3,
        cursorwidth : "8px",
        cursorborder : "2px solid transparent",
        cursordragontouch : true, // drag cursor in touch / touchbehavior mode also
        zindex : "10", // change z-index for scrollbar div
        cursorborderradius: "10px",
    });

})();
