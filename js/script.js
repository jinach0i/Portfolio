$(function () {
  // HEADER:
  $('header .knob').hover(function () {  
    $('header').css({width:'20%',backgroundColor:'#444'});
    $(this).css({display:none});
  },function () {  
    $('header').css({width:'80px'});
  });
  // SKILLS:
  $(window).scroll(function () {
    var sct = $(window).scrollTop(),
      slide3 = $('#slide3').offset();
    if (sct > slide3.top - 150) {
      var skills = $('.skills>div');
      skills.each(function () {
        var progressWrap = $(this).find('.progress');
        var progressBar = progressWrap.find('.bar');
        var progressText = progressWrap.find('.stats');
        var progressNum = progressText.attr('data-num');
        //움직일대상.animate({속성:속성값},시간); - 애니메이트주는방법
        progressBar.css('width',0).animate({
          width: progressNum + "%"
        }, 2000);
  
        //setInterval(할일, 시간);
        // % = 움직일려고 하는 넓이/전체넓이 * 100
        setInterval(textNum, 1000 / 10);
  
        function textNum() {
          var currentWidth = (progressBar.width() / progressWrap.width()) * 100;
          progressText.text(Math.floor(currentWidth) + "%");
        }
  
      });
    }
  });


  // <!-- Initialize Swiper -->    
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // AOS initialize:
  AOS.init({duration:1200});
})