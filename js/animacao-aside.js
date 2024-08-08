$(function() {
    $('.selector').each(function() {
        $(this).data('width', $(this).width());
        $(this).data('height', $(this).height());
    });
    
    $('aside ul li a').on('click', function(e) {
        e.preventDefault();
    
        // $(this).css({
        //     'color': '#284277 !important',
        // })
    
        // $('aside ul li a').css({
        //     'color': '#FF8A00'
        // })
    
        const $clickedItem = $(this).parent();
        console.log($clickedItem.outerHeight())
        const offset = $clickedItem.offset();
        console.log(offset)
        const itemWidth = $clickedItem.outerWidth();
        const itemHeight = $clickedItem.outerHeight();
    
        $('.selector').stop().animate({
            top: offset.top - $('aside').offset().top - 30, // caso mude o padding, alterar esse valor também
            left: offset.left - $('aside').offset().left -30,
            width: itemWidth,
            height: itemHeight
        }, 300);
    });

    $('.menu').click(function() {
        {
           if(!$(this).hasClass('expand')) {
               // $('.backdrop').css('display', 'inline-block')
               $('aside').css('width', '13%')
               $('aside ul').css('align-items', 'start')
               $('aside ul li a span').css('display', 'block')
               $('.infos .item').css('padding', '25px 10px')
               $(this).addClass('expand')
           } else {
               // $('.backdrop').css('display', 'none')
               $('aside').css('width', '5%')
               $('aside ul').css('align-items', 'center')
               $('aside ul li a span').css('display', 'none')
               $('.infos .item').css('padding', '25px')
               $('.menu').removeClass('expand')
           }
       }
   })
})