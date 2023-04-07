$(function(){

var oldsct = 0; // 이전 스크롤탑값 기억 할 변수

$(window).scroll(function(){
var sct = $(window).scrollTop();
// 스크롤 방향을 내렸을 때 헤더 보이고 감추기
if(sct > oldsct){ // 스크롤을 내리면 감추고
    $('#main_header').addClass('up'); 
}else{ // 스크롤을 올리면 보이고
    $('#main_header').removeClass('up');
}
oldsct = sct;
});
// 네비
$(function(){
    $('#main_nav ul').css({
        right:-$('#main_nav ul').width()
        });
        $('#main_nav').hide();
        $('#hamburger').click(function(){
            $('#main_nav').fadeIn(500);
            $('#main_nav ul').animate({
            left:'-100%'
        },500);
        });
        $('#main_nav .close').click(function(){
            $('#main_nav').fadeOut(500);
            $('#main_nav ul').animate({
                left:-$('#main_nav ul').width()
            },500);
        });


        $('#main_nav .depth1').click(function(){
            $('.depth2').slideToggle();
        });

    
        
    });

    for(var i=0; i<4; i++){
        $('.more a').append('<div class="bar"></div>');
        }
        
        $('#train_wrap .train').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 375,
        maxSlides: 2,
        touchEnabled: false,
        });
});

        
        $('.acco').each(function(){
        
            var dt =  $(this).find('dt')
        
            dt.click(function(){
                $('.acco dd').stop().slideUp();
                $(this).next().stop().slideDown();

                $('.acco dt').removeClass('open');
                $(this).addClass('open');
        
        });
});


