function mobile(){
    //모바일에서 일어날 모든 것들을 다 집어넣기
    $('.s2 .slideWrap').slick({
        slidesToShow : 2,
        slidesToScroll : 2,
        arrows : false,
        dots : true,
        draggabls:true,
    })
    
    $('.s2 .slick-dots li').eq(0).find('button').html(`
        <div class="left">
        </div>
        `
    );

    $('.s2 .slick-dots li').eq(1).find('button').html(`
        <div class="right">
        </div>
        `
    );


    $('.s6 .slideWrap ').slick({
        slidesToShow : 2,
        slidesToScroll : 2,
        arrows : false, 		
        dots : true,
        draggabls:true
    })

    $('.s6 .slick-dots li').eq(0).find('button').html(`
        <div class="left">
        </div>
        `
    );
    
    $('.s6 .slick-dots li').eq(1).find('button').html(`
        <div class="right">
        </div>
        `
    );

  
    $('.hBtn').click(function(){
        $('.menu').stop().slideDown(550);
    })

    $('.menu .close').click(function(){
        $('.menu').stop().slideUp(550);
    })
    
}



function pc(){
    //pc에서 일어날 모든 것들 다 집어넣기
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('header').outerHeight(); 
    
    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
    
        if(Math.abs(lastScrollTop - st) <= delta){
            return;
        }
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }
}



function common(){
    //모바일/pc공통인것 넣기
    $('.s1 .slideWrap ').slick({
        slidesToShow : 1,
        arrows : false, 		
        dots : true,
        autoplay:true,
        autoplaySpeed:3000
    })

    AOS.init();


    $('.s1 .slick-dots li').eq(0).find('button').html(`
                     <p>01<br>
                    <span>
                    MOCA EXHIBITION <br>
                    GRAND OPEN
                    </span>
                    </p>`
    );

    $('.s1 .slick-dots li').eq(1).find('button').html(`
                     <p>02 <br>
                    <span>MOCARCHIVE</span>
                    </p>
    `);
    
    $('.s1 .slick-dots li').eq(2).find('button').html(`
                    <p>03 <br>
                    <span>RESERVATION </span>
                    </p>
    `)

} //common


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

    mobile();

}else{
    setTimeout(function(){
        location.reload();
    },500)
    pc();
}


common();


})
