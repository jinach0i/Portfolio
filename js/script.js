$(function () {
  HEADER:
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $("header").addClass("scrollheader"); 
        $("label").addClass("scroll-berger");
        //스크롤내리면 헤더 텍스트 전체적으로 작아짐
    } else {
        $("header").removeClass("scrollheader");
        $("label").removeClass("scroll-berger");
    }
});
  
  // WHERE-ARE-WE:
  $('')

  // SLIDE1:
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
          progressText.text(Math.ceil(currentWidth) + "%");
        }
  
      });
    }
  });
//SLIDE4:
const box=$('#slide4 .container .contents');
const prev=$('.content-btn .prev');
const next=$('.content-btn .next');
let col1=0,
    col2=1,
    col3=2,
    col4=3,
    timer;


timer=setInterval(events,2500);

function events(){
    box.eq(col1).stop().css({transform:'scale(' + .9 +')' ,'z-index' : 0}).animate({left:'10%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col2).stop().css({transform:'scale(' + .8 +')' ,'z-index' : 0}).animate({left:'50%', top:10 , opacity:.1, marginLeft:'-11%'},1000);
    box.eq(col3).stop().css({transform:'scale(' + .9 +')' ,'z-index' : 0}).animate({left:'68%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col4).stop().css({transform:'scale(' + 1 +')' ,'z-index' : 1}).animate({left:'50%', top:100 , opacity:1, marginLeft:'-11%'},1000);
    col1--;
    col2--;
    col3--;
    col4--;

    if(col1<0) col1=3;
    if(col2<0) col2=3;
    if(col3<0) col3=3;
    if(col4<0) col4=3;
}
$('#slide4').hover(function(){
    clearInterval(timer);
},function(){
    timer=setInterval(events,2500);
});
box.hover(function(){
    $(this).css('background','#d9ede0');
},function(){
    $(this).css('background','#fff');
});

next.on('click',function(){
    box.eq(col1).stop().css({transform:'scale(' + .9 +')' ,'z-index' : 0}).animate({left:'10%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col2).stop().css({transform:'scale(' + .8 +')' ,'z-index' : 0}).animate({left:'50%', top:10 , opacity:.1, marginLeft:'-11%'},1000);
    box.eq(col3).stop().css({transform:'scale(' + .9 +')' ,'z-index' : 0}).animate({left:'68%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col4).stop().css({transform:'scale(' + 1 +')' ,'z-index' : 1}).animate({left:'50%', top:100 , opacity:1, marginLeft:'-11%'},1000);
    col1--;
    col2--;
    col3--;
    col4--;

    if(col1<0) col1=3;
    if(col2<0) col2=3;
    if(col3<0) col3=3;
    if(col4<0) col4=3;
    return false;
});

prev.on('click',function(){
    box.eq(col3).stop().css({transform:'scale(' + .9 +')' ,'z-index' : 0}).animate({left:'10%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col4).stop().css({transform:'scale(' + .8 +')' ,'z-index' : 0}).animate({left:'50%', top:10 , opacity:.1, marginLeft:'-11%'},1000);
    box.eq(col1).stop().css({transform:'scale(' + .9 +')' ,'z-index' : 0}).animate({left:'68%', top:50 , opacity:.5, marginLeft:0},1000);
    box.eq(col2).stop().css({transform:'scale(' + 1 +')' ,'z-index' : 1}).animate({left:'50%', top:100 , opacity:1, marginLeft:'-11%'},1000);
    col1++;
    col2++;
    col3++;
    col4++;

    if(col1>3) col1=0;
    if(col2>3) col2=0;
    if(col3>3) col3=0;
    if(col4>3) col4=0;
    return false;
});
  // HOVER시 ICON 경로 변경:
  $('li.naverblogicon').hover(function () {  
    $('li.naverblogicon img').attr({src:'./img/naverblogicon.png'});
  },function () {  
    $('li.naverblogicon img').attr({src:'./img/naverblog-logo.png'});
  });
  $('li.kakaotalkicon').hover(function () {  
    $('li.kakaotalkicon img').attr({src:'./img/kakaotalkicon.png'});
  },function () {  
    $('li.kakaotalkicon img').attr({src:'./img/kakaotalk.png'});
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