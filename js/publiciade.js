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
    //Menus com animação

    $('.menu').click(function() {
        let width = $(window).width()
        if(width < 1550) {
            if(!$(this).hasClass('expand')) {
                $(this).css({
                    'width': '300px'
                })
                $('.item').css({
                    'width': 'auto',
                    'right': '0',
    
                }) 
                $('.item .flex').css({
                    'display': 'flex'
                })
                $('.item span').css({
                    'display': 'block'
                })
                $('aside').css({
                    'width': 'auto'
                })
                $('aside ul').css({
                    'display': 'block'
                })
                $('.card').css({
                    'padding': '50px 40px'
                })
                $('.main2').css({
                    'left': '38%'
                })
                $(this).addClass('expand')
            } else {
                $(this).css({
                    'width': '62px'
                })
                $('.item').css({
                    'width': '50px',
                    'right': '0',
    
                }) 
                $('.item .flex').css({
                    'display': 'none'
                })
                $('.item span').css({
                    'display': 'none'
                })
                $('aside').css({
                    'width': '30px'
                })
                $('aside ul').css({
                    'display': 'none'
                })
    
                $('.card').css({
                    'padding': '50px 80px'
                })
                $('.main2').css({
                    'left': '32%'
                })
                $(this).removeClass('expand')
            }
        } else {
            if(!$(this).hasClass('expand')) {
                $(this).css({
                    'width': '300px'
                })
                $('.item').css({
                    'width': 'auto',
                    'right': '0',
    
                }) 
                $('.item .flex').css({
                    'display': 'flex'
                })
                $('.item span').css({
                    'display': 'block'
                })
                $('aside').css({
                    'width': 'auto'
                })
                $('aside ul').css({
                    'display': 'block'
                })
                $('.card').css({
                    'padding': '80px 100px'
                })
                $(this).addClass('expand')
            } else {
                $(this).css({
                    'width': '62px'
                })
                $('.item').css({
                    'width': '50px',
                    'right': '0',
    
                }) 
                $('.item .flex').css({
                    'display': 'none'
                })
                $('.item span').css({
                    'display': 'none'
                })
                $('aside').css({
                    'width': '30px'
                })
                $('aside ul').css({
                    'display': 'none'
                })
    
                $('.card').css({
                    'padding': '80px 130px'
                })
                $(this).removeClass('expand')
            }
        }
    })

    //------------------------------------------------
    //aside animação de seleção
    
    $('.selector').each(function() {
        $(this).data('width', $(this).width());
        $(this).data('height', $(this).height());
    });
    
    $('aside ul li a').on('click', function(e) {
        e.preventDefault(); 

        const $clickedItem = $(this).parent();
        console.log($clickedItem.outerHeight())
        const offset = $clickedItem.offset();
        console.log(offset)
        const itemWidth = $clickedItem.outerWidth();
        const itemHeight = $clickedItem.outerHeight();

        $('.selector').stop().animate({
            top: offset.top - $('aside').offset().top,
            left: offset.left - $('aside').offset().left,
            width: itemWidth,
            height: itemHeight
        }, 300);
    });


    //--------------------------------------------------
    //top menu animação de seleção

    $('.selectorMenu').each(function() {
        $(this).data('width', $(this).width());
    });
    
    $('.topMenu li a').on('click', function(e) {
        e.preventDefault(); 

        const $clickedItem = $(this).parent();
        console.log($clickedItem.outerHeight())
        const offset = $clickedItem.offset();
        console.log(offset)
        const itemWidth = $clickedItem.outerWidth();

        $('.selectorMenu').stop().animate({
            bottom: offset.top - (($('.topMenu').offset().top)+5),
            left: offset.left - $('.topMenu').offset().left,
            width: itemWidth,
        }, 300);
    });
})

//-----------------------------------------------

//Prograssão em círculo

