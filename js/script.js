$(function () {

  //skills:gauge-bar:
  // 80:
  const progressWrap=$('.progress'),
        progressBar=progressWrap.find('.bar'),
        progressText=progressWrap.find('.stats80'),
        progressNum=progressText.attr('data-num');
  progressBar.css('width','0').animate({width:progressNum + '%'},2000);
  function textAni(){
      let currentWidth=progressBar.width() /progressWrap.width() *100;
      progressText.text(Math.ceil(currentWidth)+'%');
  }
  setInterval(textAni, 10);
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
  AOS.init();
})