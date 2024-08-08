$(function() {
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
})