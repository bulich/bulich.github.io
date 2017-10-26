
$(window).ready(function(){
  $(".work-item").animate({ opacity: 0 }, 0);
  $(".work-item").animate({ opacity: 1 }, 3500);
});

  var typed = new Typed('.element', {
    stringsElement: '#typed-strings',
    typeSpeed: 80,
    backDelay: 700,
    showCursor: false
  });
