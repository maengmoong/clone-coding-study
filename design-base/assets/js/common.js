$(function(){
    headerEffect();
    activeBtn();
    mobNav();
});


function headerEffect(){
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 10){
                $('header').addClass('scroll');
            }else{
                $('header').removeClass('scroll');
                $('.searchSiteMap').removeClass('scroll');
            }
        });
        $(".search-btn").click(function(){
            $('header').addClass('scroll');
            $('.searchSiteMap').toggleClass('scroll');   
            $('.searchContainer').toggleClass('scroll');  
        });
        $(".search-bg").click(function(){
            $('.searchSiteMap').removeClass('scroll');   
            $('.searchContainer').removeClass('scroll');  
        });
    });
}

function activeBtn(){
    var navList = $('.gnb > li');
    $(navList).click(function(){
        $(this).addClass('is-active');
        $(this).siblings().removeClass('is-active');
    });
}

function mobNav(){
    //mob서브메뉴
    var moSubNav = $('.mob-nav > .gnb > li.has-sub');
    $('.mob-submenu-btn').click(function(){
        $(this).toggleClass('rotate');
        $(moSubNav).find('.submenu').toggleClass('is-active');
    });

    //햄버거 아이콘
    $('.hamburger').click(function() {
        $(this).toggleClass('is-opened');
        $('.mob-bg .mob-nav').toggleClass('is-active');
        $('.mob-bg').toggleClass('is-active');
    });
    
    //모바일->pc 사이트맵 숨기기
    $( window ).resize(function() {
    	var windowWidth = $( window ).width();
    	if(windowWidth > 855) {
    		$('.mob-bg').removeClass('is-active');
            $('.mob-bg .mob-nav').removeClass('is-active');
    	}
     });
}


