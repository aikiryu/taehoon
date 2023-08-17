$('.gnb').children('li').on('mouseover',function(){

    $(this).find('.sub').stop().slideDown();

}).on('mouseout',function(){

    $('.sub').stop().slideUp();

});

$(document).ready(function() {
	$(".play").click(function() {
		let acVideo = $('.acVideo').get(0);

		$('.videoWrap').fadeIn();

		$('.acVideo').get(0).play();		
	});


	$(".btnClose").click(function() {

		let acVideo = $('.acVideo').get(0);

		$('.videoWrap').fadeOut();
		$('.acVideo').get(0).pause();

	
	});

});

$(".s1 .visit").click(function() {
    $('html,body').animate({
        scrollLeft: $(".s2").offset().left},
        500);
});


$('.s2 .left').slick({
	prevArrow :'.s2 .btn .prev',
	nextArrow :'.s2 .btn .next',
    slidesToshow : 1
});

$('.s3 .right .mainItem').slick({
	prevArrow :'.s3 .btn .pr',
	nextArrow :'.s3 .btn .nx',
	asNavFor : '.s3 .right .subItem',
	autoplay : true,
	autoplaySpeed : 1000
});

$('.s3 .right .subItem ').slick({
	prevArrow :'.s3 .btn .pr',
	nextArrow :'.s3 .btn .nx',
	asNavFor : '.s3 .right .mainItem'
});

$('.s4 .right .mainItem').slick({
	asNavFor : '.s4 .right .subItem',
    //autoplay : true,
	autoplaySpeed : 1000,
		prevArrow :'.s4 .btn .pr',
	nextArrow :'.s4 .btn .nx',
});

$('.s4 .right .subItem ').slick({
	arrows:false,
	asNavFor : '.s4 .right .mainItem'
});

$('.s3 .btn .pa').click(function(){
	$('.s3 .btn .pa').addClass('active');
	$('.s3 .btn .pl').addClass('act')
})

$('.s3 .btn .pl').click(function(){
	$('.s3 .btn .pa').removeClass('active');
	$('.s3 .btn .pl').removeClass('act')
})

$('.s4 .btn .pa').click(function(){
	$('.s4 .btn .pa').addClass('active');
	$('.s4 .btn .pl').addClass('act')
})

$('.s4 .btn .pl').click(function(){
	$('.s4 .btn .pa').removeClass('active');
	$('.s4 .btn .pl').removeClass('act')
})

$('.s3 .pause').on('click', function(){
    $('.s3 .right .mainItem')
        .slick('slickPause');
});

$('.s4 .pause').on('click', function(){
    $('.s4 .right .mainItem')
        .slick('slickPause');
});

$('.s3 .pl').on('click', function(){
    $('.s3 .right .mainItem')
        .slick('slickPlay');
});

$('.s4 .pl').on('click', function(){
    $('.s4 .right .mainItem')
        .slick('slickPlay');
});

$('.s5 .right .clothes').slick({
	slidesToShow : 4,
	arrows : false, 		
	dots : false,
	variableWidth: true,
	autoplay:true
})

$('.s5 .right .sunglass').slick({
	slidesToShow : 4,
	arrows : false, 		
	dots : false,	
	variableWidth: true,
	autoplay:true
})

$('.s7 .down').click(function(){
	$('.s7 .gnb').stop().slideDown();
})

$('.s7 .up').click(function(){
	$('.s7 .gnb').stop().slideUp();
})
	
$('.s7 .down').click(function(){
	$('.s7 .down').addClass('cl');
	$('.s7 .up').addClass('cl');
	$(".mask").fadeIn(100);
})

$('.s7 .up').click(function(){
	$('.s7 .down').removeClass('cl');
	$('.s7 .up').removeClass('cl');
	$(".mask").fadeOut(100);
})

$('.s7 .item .visit').click(function(){

	let tgt = $(this).parents('.item').index();

	$('.map .images img').eq(tgt).stop().fadeIn(1000)
	.siblings().stop().fadeOut(1000);
})



let num = 0
$('.s7 .map .images').mouseenter(function(){

	$('.Dover').stop().fadeIn();

});

$('.Dover').mouseleave(function(){
	$('.Dover').stop().fadeOut();
});

$('.scrolled').on('mousewheel',function(e,d){

if(d>0){ //마우스휠 올렸을때	
	
	let prev = $(this).prev().offset().left;
	$('html, body').stop().animate({'scrollLeft': prev},600);


}else if(d<0){ //마우스휠 내렸을때

	let nxt = $(this).next().offset().left;
	$('html, body').stop().animate({'scrollLeft': nxt},600);

}

});


$('.s7Wrap').on('mousewheel',function(e,d){

	if(d>0){ //마우스휠 올렸을때	
	
		let prev = $(this).parent().prev().offset().left;
		$('html, body').animate({'scrollLeft': prev},600);
	
	
	}
	
	});
