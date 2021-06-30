
//GALERIA AUTOMATICA
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    centeredSlides: true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//SETA
$(document).ready(function(){
    
    $("#img-seta").hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() < 400){
            $("#img-seta").hide(1000);
         }
        else{
          $("#img-seta").show(1000);
         }
    });oll();
});

