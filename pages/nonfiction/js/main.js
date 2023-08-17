

let bar = 100;

$('.s2 .con').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, 
    autoplaySpeed: 2000,
    dots:true
}).on('afterChange',function(){
   let i = $('.slick-dots .slick-active').index();
   $('.bar').animate({'width' : i * bar});
});

$('.scrollUp').on('mousewheel',function(e,d){

    if(d>0){
        let prv = $(this).parents('.s3').prev().offset().top;
        $('html, body').stop().animate({
            'scrollTop' : prv
        })
    }
});


$('.mainBn, .subBn, .s1, .s2').on('mousewheel', function(e, d) {
    if (d > 0) {
      
    let prv = $(this).index();
        prv = prv - 2;
    let winHig = window.innerHeight;

       prv = prv * winHig
        
        $('html,body').stop().animate({
            'scrollTop': prv
        }, 500, 'linear');
        console.log(prv, winHig);

    } else if (d < 0) {

        let nxt = $(this).index();
        let winHig = window.innerHeight;
        $('html,body').stop().animate({
            'scrollTop': nxt * winHig
        }, 500, 'linear');

    }
});

$('.event').slick({
    vertical: true,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3000,
    speed:500
});

$(window).on('scroll',function(){
let scr = $(window).scrollTop();
   
    if(scr>=0 && scr<969){
        $('header').removeClass('on');
    }else 
    
    if(scr < 1938){
        $('header').addClass('on');
    }
});

$('.per').on('mouseover',function(){
    $('.sub1').stop().fadeIn(1500)
    .siblings().stop().fadeOut(1500);
})

$('.body').on('mouseover',function(){
    $('.sub2').stop().fadeIn(1500)
    .siblings().stop().fadeOut(1500);
})

$('.home').on('mouseover',function(){
    $('.sub3').stop().fadeIn(1500)
    .siblings().stop().fadeOut(1500);
})


gsap.registerPlugin(ScrollTrigger);

let imgArray = gsap.utils.toArray(".s3 .pic");
gsap.set(imgArray, {yPercent: 110});

let txtArray = gsap.utils.toArray('.s3 .text');
gsap.set(txtArray, {opacity: 0});

let animateEnd = imgArray.length;
let imgHeight = 1000;
let conHeight = imgHeight * animateEnd;

let dur = 1;
let next = 1.5;
let fade = 0.3;


let imgAction = gsap.timeline({
        defaults: {
            ease: 'none',
            stagger: next
        },
        paused: true
})
.to(imgArray, {
        yPercent: 0,
        duration: dur
    })
    .to(txtArray, {
        opacity: 1,
        duration: fade
    }, dur - fade)
    .to(txtArray, {
        opacity: 0,
        duration: fade
    },dur*2);

    let esgSlider = gsap.fromTo(imgAction, {
        time: dur
    }, {
        time: imgAction.duration() - dur,
        paused: true,
    });

    ScrollTrigger.create({
        trigger: '.s3 .con',
        start: 'top top',
        end: '+=' + `${conHeight}`,
        pin: true,
        animation: esgSlider,
        scrub: 0.5,
        //markers: true,
    });




