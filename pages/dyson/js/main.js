 gsap.registerPlugin(ScrollTrigger)
 let panels = gsap.utils.toArray(".up");
 let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}))
 panels.forEach((panel, i) => {
    
   ScrollTrigger.create({
     trigger: panel,
     start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
     pin: true, 
     pinSpacing: false 
   });
 })

 $('header .btn').click(function(){
  $('.layer').show();
  $('.close').show();
  $(this).hide();
})

$('.close').click(function(){
  $('.layer').hide();
  $('header .btn').show();
  $(this).hide();
})

$('.layer .vaccum').mouseover(function(){
  $('.vcimg').stop().fadeIn();
  $('.pvaccum').show();
}).mouseleave(function(){
  $('.vcimg').stop().fadeOut();
  $('.pvaccum').hide();
})

$('.layer .hair').mouseover(function(){
  $('.haimg').stop().fadeIn();
  $('.phair').show();
}).mouseleave(function(){
  $('.haimg').stop().fadeOut();
  $('.phair').hide();
})

$('.layer .air').mouseover(function(){
  $('.airimg').stop().fadeIn();
  $('.pair').show();
}).mouseleave(function(){
  $('.airimg').stop().fadeOut();
  $('.pair').hide();
})

$('.layer .hide').click(function(){
  $('.layer').hide();
  $('.close').hide();
  $('.btn').show();
})




function scrollToElement(target) {
  // 스크롤 위치로 이동할 요소를 가져옵니다.
  var element = document.querySelector(target);

  // 요소가 존재하는 경우에만 스크롤 이동을 수행합니다.
  if (element) {
    // 스크롤 애니메이션을 적용하여 부드럽게 이동합니다.
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }

  console.log(element.offsetTop)
}

var btnVaccum = document.querySelector(".vaccum");
var btnHair = document.querySelector(".hair");
var btnAir = document.querySelector(".air");

btnVaccum.addEventListener("click", function() {
  scrollToElement('.con');
});

btnHair.addEventListener("click", function() {
  window.scrollTo({
    top: 19445,
    behavior: 'smooth'
  });
});

btnAir.addEventListener("click", function() {
  scrollToElement('.s11');
});

document.addEventListener("mousemove", function(event) {
  var x = event.clientX; // 마우스의 X 좌표
  var y = event.clientY; // 마우스의 Y 좌표
  
  var cursor = document.querySelector(".custom");
  cursor.style.transition = "none"; // 딜레이 동안의 전환 효과 제거
  
  setTimeout(function() {
    cursor.style.transition = "all 0.1s ease"; // 딜레이 이후 전환 효과 다시 추가
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  }, 70); // 500ms(0.5초)의 딜레이
});


let winHeight = window.innerHeight;
let winWidth = window.innerWidth;
let txtSize = 3000;

gsap.to('.s2 .txt', {
  scrollTrigger: {
    trigger:'.s2',
    start:'center center',
    end:'600% bottom',
    pin:true,
    scrub:4,
    duration:7000
  },
  x : winWidth + txtSize-3000
});

gsap.to('.s2 .left', {
  scrollTrigger: {
    trigger:'.s2Left',
    start:'center center',
    end:'600% bottom',
    pin:true,
    scrub:4,
  },
  x : - 1000
});

gsap.to('.s2 .top', {
  scrollTrigger: {
    trigger:'.s2Top ',
    start:'center center',
    end:'600% bottom',
    pin:true,
    scrub:4,
  },

  y : - 1000
});



gsap.to('.s2 .bottom',{
  scrollTrigger: {
    trigger:'.s2Bottom ',
    start:'center center',
    end:'600% bottom',
    pin:true,
    scrub:4,
  },

  y : 1000,
  x: 0
});


$(window).on('scroll',function(){
  let scr = $(window).scrollTop();
      
      if(scr > 19500){
          $('header').addClass('on');
          $('header .btn button img').attr('src', 'images/blackbtn.png');
          $('header h1 img').attr('src', 'images/blackLogo.png');
          $('header .hWrap .scr img').attr('src', 'images/blackscroll.png');

      }if(scr > 32400){
        $('header').removeClass('on');
        $('header .btn button img').attr('src', 'images/whitebtn.png');
        $('header h1 img').attr('src', 'images/whiteLogo.png');
        $('header .hWrap .scr img').attr('src', 'images/header-txt.png');
      }if(scr < 20470){
        $('header').removeClass('on');
        $('header .btn button img').attr('src', 'images/whitebtn.png');
        $('header h1 img').attr('src', 'images/whiteLogo.png');
        $('header .hWrap .scr img').attr('src', 'images/header-txt.png');
      }
  });


let sections = gsap.utils.toArray('.event');

sections.forEach((section) => {
  gsap.set(section, { x: '0'});

  gsap.to(section, {
    x: '-400vw',
    duration: 5000,
    scrollTrigger: {
      trigger: section,
      start: 'center center',
      end: 'bottom -5000px',
      scrub: true,
      pin:true,
    }
  });
});


const tl = gsap.timeline().to('.s9 .videoBox', {
  height:'72vh',
  width:'72vw' 
});

ScrollTrigger.create({
  trigger: '.s9',
  animation: tl,
  pin: true,
  start: 'center center',
  end: 'bottom -9000px',
  scrub: 1,
});


  gsap.to('.imgWrap', {
    scrollTrigger: {
      trigger:'.s3',
      start:'center center',
      end:'bottom -30000px',
      pin:true,
      scrub:1
    },

    y : - 7000
  });

 gsap.to('.s3R .right', {
  scrollTrigger: {
    trigger:'.s3R',
    start:'top top',
    end:'bottom -5000px',
    pin:true,
    scrub:1,
  },
  x : - 4000
});

gsap.to('.s3L .left', {
  scrollTrigger: {
    trigger:'.s3L',
    start:'top top',
    end:'bottom -5000px',
    pin:true,
    scrub:1,
  },
  x : 4000
});

let imgArray = gsap.utils.toArray('.s6 .main');
gsap.set(imgArray, {opacity: 2});

let dur = 1;
let next = 1.5;
let fade = 4;

let imgAction = gsap.timeline({
  defaults: {
    ease: 'none',
    stagger: next
  },
  paused: true
})

.to(imgArray, {
  opacity: -0.5,
  duration: fade
}, dur - fade);

let imgSlider = gsap.fromTo(imgAction, {
  time: dur
}, {
  time: imgAction.duration() - dur,
  paused: true,
});

ScrollTrigger.create({
  trigger: '.sWrap2',
  start: '180% left',
  pin: true,
  animation: imgSlider,
  scrub: 0.5
});

gsap.to('.s6 .background', {
  y: -500,
  scrollTrigger: {
    trigger: '.sWrap2',
    start: '180% left ',
    end:'right 300%',
    scrub: 4,
    delay:5
  }
});

  let animates = gsap.utils.toArray('.animate');

  animates.forEach((animate) => {
    gsap.set(animate, { x: '0'});

    gsap.to(animate, {
      x: '-500vw',
      scrollTrigger: {
        trigger: animate,
        start: 'center center',
        end: 'bottom -5000px',
        scrub: 0.5,
        pin:true,
      }
    });
  }); 


function animateImage() {
  $('.s17 .main').css('top', '-500px');
  $('.s17 .main').animate({ top: '100px' }, 2000, 'linear', function() {
    animateImage();
  });
}

$(window).scroll(function () { 
	var scrollValue = $(document).scrollTop(); 
});

//s5
$(function () {
var delay = -0.3;
var dura = 1.5;
var tp = "100%";

function green_sock() {

    gsap.set(".s5 .s5up", { y: 100, opacity: 0 })

    gsap.utils.toArray(".s5 .s5up").forEach(function (entry) {
        delay = $(entry).attr('data-delay');
        if ($(entry).attr('data-dura')) {
            dura = $(entry).attr('data-dura');
        }
        if ($(entry).attr('data-tp')) {
            tp = $(entry).attr('data-tp'); 
        }
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: entry,
                start: "left + 370px" + tp,
                end:'right right'
            }
        });
        tl.to(entry, { delay: delay, duration: dura, opacity: 1, y: 0 });
    });

}

green_sock();

});

$(function () {
  var delay5 = -0.3;
  var dura5 = 1.5;
  var tp5 = "100%";
  
  function green_sock() {
  
      gsap.set(".s7 .up2", { y: 100, opacity: 0 })
  
      gsap.utils.toArray(".s7 .up2").forEach(function (entry) {
          delay5 = $(entry).attr('data-delay');
          if ($(entry).attr('data-dura')) {
              dura5 = $(entry).attr('data-dura');
          }
          if ($(entry).attr('data-tp')) {
              tp5 = $(entry).attr('data-tp'); 
          }
          var tl = gsap.timeline({
              scrollTrigger: {
                  trigger: entry,
                  start: "left -185px" + tp5,
                  end:'right right'
              }
          });
          tl.to(entry, { delay: delay5, duration: dura5, opacity: 1, y: 0 });
      });
  
  }
  
  green_sock();
  
  });
//s5

// s11
gsap.set(".rort", { yPercent: -30, rotation:-40});

gsap.to(".rort", {
  yPercent: -500,
  rotation: 180,
  scrollTrigger: {
    trigger: ".s11 ",
    scrub: 0.5,
    start:'top 43.5%',
    end:'bottom -3000px'
  }, 
});

// s13
$(function () {
  var delay2 = 0;
  var dura2 = 0.5;
  var tp2 = "100%";
  
  function green_sock() {
  
      gsap.set(".s13 .down1", { y: 0, opacity: 1 })
  
      gsap.utils.toArray(".s13 .down1").forEach(function (entry) {
          delay2 = $(entry).attr('data-delay');
          if ($(entry).attr('data-dura')) {
              dura2 = $(entry).attr('data-dura');
          }
          if ($(entry).attr('data-tp')) {
              tp2 = $(entry).attr('data-tp'); 
          }
          var tl = gsap.timeline({
              scrollTrigger: {
                  trigger: entry,
                  start: "left + 400px" + tp2,
                  end:'right right',
                  scrub:0.3
              }
          });
          tl.to(entry, { delay: delay2, duration: dura2, opacity: 1, y: 900 });
      });
  
  }
  
  green_sock();
  
  });

  $(function () {
    var delay3 = 0;
    var dura3 = 0.5;
    var tp3 = "100%";
    
    function green_sock() {
    
        gsap.set(".s13 .up1", { y: 0, opacity: 1 })
    
        gsap.utils.toArray(".s13 .up1").forEach(function (entry) {
            delay3 = $(entry).attr('data-delay');
            if ($(entry).attr('datas-dura')) {
                dura3 = $(entry).attr('data-dura');
            }
            if ($(entry).attr('data-tp')) {
                tp3 = $(entry).attr('data-tp'); 
            }
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: entry,
                    start: "left + 400px" + tp3,
                    scrub:0.3,
                    end:'right right'
                }
            });
            tl.to(entry, { delay: delay3, duration: dura3, opacity: 1, y: -900 });
        });
    
    }
    
    green_sock();
    
    });
// s13


// s16
const highlight = document.getElementById("highlight-style");
const mode = document.getElementById("mode");

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-highlight").forEach((highlight) => {
  ScrollTrigger.create({
    trigger: highlight,
    start: "620px left",
    onEnter: () => highlight.classList.add("active")
  });
});

const setHighlightStyle = (value) =>
  document.body.setAttribute("data-highlight", value);

mode.addEventListener("click", (e) =>
  document.body.classList.toggle("dark-mode")
);

highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));

setHighlightStyle(highlight.value);





// s15
const highlight2 = document.getElementById("highlight-style");
const mode2 = document.getElementById("mode");

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-highlight2").forEach((highlight2) => {
  ScrollTrigger.create({
    trigger: highlight2,
    start: "1240px left",
    onEnter: () => highlight2.classList.add("active")
  });
});

const setHighlightStyle2 = (value) =>
  document.body.setAttribute("data-highlight", value);

mode.addEventListener("click", (e) =>
  document.body.classList.toggle("dark-mode")
);

highlight2.addEventListener("change", (e) => setHighlightStyle(e.target.value));

setHighlightStyle2(highlight2.value);

window.addEventListener('scroll', function() {
  // 현재 스크롤 위치 확인
  var scrollPosition = window.scrollY;
  
  // 콘솔에 출력
  console.log('현재 스크롤 위치:', scrollPosition);
});

// curser

$('.ho').mouseover(function(){
  $('.custom').addClass('active')
  $('.cursor').addClass('active')
}).mouseleave(function(){
  $('.custom').removeClass('active')
  $('.cursor').removeClass('active')
})