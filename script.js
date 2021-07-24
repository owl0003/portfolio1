$(function() {

  $(".top-img").fadeIn(2000);

  $(window).scroll(function() {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function() {
      const targetPosition =$(this).offset().top;
      if(scrollAmount > targetPosition - wHeight + 50) {
        $(this).addClass("fadeInDown");
      }
    });
  });

  $('.btn').hover(
    function() {
      $(this).css('opacity', '0.7');
    },
    function() {
      $(this).css('opacity', '1');
    }
  );

 

});
