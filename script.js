
 const swiper = new Swiper(".swiper",{
   
    loop:true,
    slidesPerView:1,
    breakpoints:{
        481:{
            slidesPerView:2,
        }
    },
    
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    pagination:{
        el:".swiper-pagination"
    },
    scrollbar:{
        el:".swiper-scrollbar",
        hide:false,
    },
    autoplay:true,

 });


$('.page-header').click(function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
        
 });


 $(window).scroll(function() {
    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();
     $(".Signature-Food,.Our-Coffee,.Our-Food,.address,.tenpo").each(function(){
        const bPosition = $(this).offset().top;
       if(wScroll>bPosition-wHeight+100){
        $(this).addClass("fadeIn");
       }
     });
    });