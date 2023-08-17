function mobile(){
    // 모바일
}

function pc(){
    // pc

      $('.dRound').mouseover(function(){
         $('.dy').stop().fadeIn();
      }).mouseleave(function(){
        $('.dy').stop().fadeOut();
      })

      $('.mRound').mouseover(function(){
          $('.mo').stop().show();
      }).mouseleave(function(){
         $('.mo').stop().hide();
      })

      $('.nRound').mouseover(function () {
        $('.no').stop().fadeIn();
      }).mouseleave(function () {
        $('.no').stop().fadeOut();
      });
      
      $('.pRound').mouseover(function(){
         $('.pr').stop().fadeIn();
      }).mouseleave(function(){
         $('.pr').stop().fadeOut();
      })

      $('.dRound').click(function(){
        $('.dWeb').stop().fadeIn();
        $('.mask').show();
        $('.round').hide();
      })

      $('.mRound').click(function(){
        $('.mWeb').stop().fadeIn();
        $('.mask').show();
        $('.round').hide();
      })

      $('.pRound').click(function(){
        $('.pWeb').stop().fadeIn();
        $('.mask').show();
        $('.round').hide();
      })

      $('.nRound').click(function(){
        $('.nWeb').stop().fadeIn();
        $('.mask').show();
        $('.round').hide();
      })

      $('.mask').click(function(){
        $('.item').hide();
        $('.round').show();
        $(this).hide();
      })

      document.addEventListener("mousemove", function(event) {
        var x = event.clientX; // 마우스의 X 좌표
        var y = event.clientY; // 마우스의 Y 좌표
        
        var cursor = document.querySelector(".custom");
        cursor.style.transition = "none"; // 딜레이 동안의 전환 효과 제거
        
        setTimeout(function() {
          cursor.style.transition = "all 0.15s ease"; // 딜레이 이후 전환 효과 다시 추가
          cursor.style.left = x + "px";
          cursor.style.top = y + "px";
        }, 70); // 500ms(0.5초)의 딜레이
      });

      $('.round p').mouseover(function(){
        $('.custom').addClass('active')
        $('.cursor').addClass('active')
      }).mouseleave(function(){
        $('.custom').removeClass('active')
        $('.cursor').removeClass('active')
      })

      $('.mask').mouseover(function(){
        $('.custom').addClass('active')
        $('.cursor').addClass('active')
      }).mouseleave(function(){
        $('.custom').removeClass('active')
        $('.cursor').removeClass('active')
      })

      $('.web').mouseover(function(){
        $('.custom').addClass('active')
        $('.cursor').addClass('active')
      }).mouseleave(function(){
        $('.custom').removeClass('active')
        $('.cursor').removeClass('active')
      })

      $('.hWrap ul li').mouseover(function(){
        $('.custom').addClass('active')
        $('.cursor').addClass('active')
      }).mouseleave(function(){
        $('.custom').removeClass('active')
        $('.cursor').removeClass('active')
      })
}

function common(){
    // 공통
} 


let winWidth = $(window).width();

if(winWidth < 1200){

    mobile();

}else{

    pc();
}


common();

$(window).resize(function(){

    let winWidth2 = $(window).width();

if(winWidth2 < 1200){
  setTimeout(function(){
    location.reload();
    },500)
    mobile();

}else{
    setTimeout(function(){
        location.reload();
    },500)
    pc();
}


common();


})
