$(function(){
    headerEffect();
});


function headerEffect(){
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 1){
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