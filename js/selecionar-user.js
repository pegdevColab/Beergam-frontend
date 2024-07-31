// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 2,
//     spaceBetween: 100,
//     loopAddBlankSlides: false,
//     mousewheel: true,
//     dynamicBullets: true,
//     keyboard: {
//         enabled: true,
//     },
    
//     pagination: {
//         el: '.swiper-pagination',
//     },
    
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     });
//     $('.swiper-button-next').click(function() {
//         navigationNext($('.swiper-button-next'))
//     })


$('swiper-slide').click(function() {
    let name = $(this).children().last().text();
    alert(`Redirecionado para a página de ${name}`)
    //Direcionamento para outra página precisa ser feito aqui
})