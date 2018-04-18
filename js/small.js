if ($(window).width() < 960) {
  $('.img-resposnsive-logo')
  .attr('src','img/logo3.png');
}
else {
  $(function(){
      $(window).scroll(function(){
          if($(this).scrollTop() > 50) {
              $('.img-resposnsive-logo')
                  .attr('src','img/logo3.png');
          }
          if($(this).scrollTop() < 50) {
              $('.img-resposnsive-logo')
                  .attr('src','img/logo2.png');
          }
      });
  });
};

$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
