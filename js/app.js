console.log('hallo');

$(document).ready(function(){

  let prlxScroll = () => {
    let scrolled = $(document).scrollLeft();

    $('.back001').css('transform', `translateX(-${scrolled*0.17}px)`);
    $('.back002').css('transform', `translateX(-${scrolled*0.4}px)`);
    $('.back003').css('transform', `translateX(-${scrolled*0.6}px)`);
  }
  let scrollActive = true;
  $(window).bind('mousewheel', function(e){

    let animTime = 300;
    let currentScroll = $(window).scrollLeft();
    let width = $(window).width();

    if(e.originalEvent.wheelDelta /120 > 0) {
      setTimeout(() => {
        scrollActive = true;
      }, animTime);
      if (scrollActive) {
        $("html, body").animate( { scrollLeft: '-=' + width }, animTime);
        scrollActive = false;
        console.log('scrolling up !');
      }
    }
    else {
      setTimeout(() => {
        scrollActive = true;
      }, animTime);
      if (scrollActive) {
        $("html, body").animate( { scrollLeft: '+=' + width }, animTime);
        scrollActive = false;
        console.log('scrolling down !');
      }
      prlxScroll();
    }

  });

  $(window).bind('scroll', () => {
    prlxScroll();
  });
});
