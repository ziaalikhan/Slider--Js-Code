const swiper = new Swiper('.swiper-container', {
    // Optional parameters
 
    loop: true,


// for cube style // 

    effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 40,
            shadowScale: 0.94,
        },

      
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

   
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });