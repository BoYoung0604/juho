$(function() {
    var mY = 0;

    $('.img-box a:before').css(
        {
            '-moz-transform-origin': '50% 100%',
            'transform-origin': '50% 100%',
            '-ms-transform-origin': '50% 100%',
            '-webkit-transform-origin': '50% 100%'
        });

    $('.img-box').mousemove(function(e) {
        if (e.pageY < mY) {
            $('.img-box a:before').css(
                {
                    '-moz-transform-origin': '50% 100%',
                    'transform-origin': '50% 100%',
                    '-ms-transform-origin': '50% 100%',
                    '-webkit-transform-origin': '50% 100%'
                });
        }

         else if (e.pageY > mY) {
            console.log($('.img-box a:before'));
            $('.img-box a:before').css(
                {
                    '-moz-transform-origin': '50% 0',
                    'transform-origin': '50% 0',
                    '-ms-transform-origin': '50% 0',
                    '-webkit-transform-origin': '50% 0'
                });
        } else {

        }

        mY = e.pageY;
    });
});