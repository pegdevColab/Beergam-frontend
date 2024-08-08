$(function() {

    //--------------------------------------------------
    //top menu animação de seleção

    console.log($('.fisrt').offset().left)
    $('.selectorMenu').css({
        'left': $('.section.main .container ul li a.fisrt').offset().left
    })

    $('.selectorMenu').each(function() {
        $(this).data('width', $(this).width());
    });
    
    $('section.main .container ul li a').on('click', function(e) {
        e.preventDefault(); 

        const $clickedItem = $(this).parent();
        const offset = $clickedItem.offset();
        const itemWidth = $clickedItem.outerWidth();

        $('.selectorMenu').stop().animate({
            bottom: offset.top - (($('section.main .container ul').offset().top)+5),
            left: offset.left - $('section.main .container ul').offset().left,
            width: itemWidth,
        }, 300);
    });
 
//-----------------------------------------------
})