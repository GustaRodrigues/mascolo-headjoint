jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
     event.preventDefault();
     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $("#nav-logo").fadeOut();
    } else {
      $("#nav-logo").fadeIn();
    }
  });