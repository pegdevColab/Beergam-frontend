$(function() {

    //Notificação dinâmica
    setInterval(() => {
        $('.profile i.hasNotification').each(function() {
            if($(this).find('.notification').length === 0) {
                $(this).append('<div class="notification"></div>');
            }
        });

        if(!$('.profile i').hasClass('hasNotification')) {
            $('.profile i .notification').remove()
        }
    }, 5000);
    //verificar se tem notificação a cada 5s

    //-------------------------------------------

    //Ações menu

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
    // $('.backdrop').click(function() {
    //     $('.backdrop').css('display', 'none')
    //     $('aside').css('width', '5%')
    //     $('aside ul').css('align-items', 'center')
    //     $('aside ul li a span').css('display', 'none')
    //     $('.menu').removeClass('expand')
    // })

    //------------------------------------------------
    //aside animação de seleção
    
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