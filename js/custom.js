$(function () {

    const MAINVISUALSLIDE = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },

        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },

    })

});

$(function () {
    $('.main_content .best_tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_content .best_tab_menu button').removeClass('on');
        $(this).addClass('on');
        $('.main_content .best_tab_content .con').removeClass('on');
        $('.main_content .best_tab_content .con').eq(idx).addClass('on')
    })
});



$(function () {
    $('.main_product .menu_wrap a').on('mouseenter', function () {
        let idx = $(this).parent().index();
        $('.main_product .menu_wrap a').removeClass('on');
        $(this).addClass('on');
        $('.main_product').css({
            backgroundImage: `url(./images/main_product0${idx + 1}.jpg)`
        })
    })
});


$(function () {
    $('.main_promotion .control .play').on('click', function () {
        $('.main_promotion video').trigger('play')
    });
    $('.main_promotion .control .pause').on('click', function () {
        $('.main_promotion video').trigger('pause')
    })
});

$(function () {
    $('#bgndVideo').YTPlayer(
        {
            videoURL: 'https://youtu.be/eOWG-d2lP7E',
            containment: '.main_movie',
            showControls: false,
            playOnlyIfVisible: true,
        }
    );

    $('.main_movie .control .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
    $('.main_movie .control .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });
    $('.main_movie .control .fullscreen').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });
});


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk)
    })
})