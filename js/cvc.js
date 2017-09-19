$(function () {
    $('#b_home').click(function () {
        $('#c_ourinfo').hide();
        $('#c_works').hide();
        $('#bg_mosaic').css('background', 'url("./img/bg_mosaic1_b.png")');
    });

    $('#b_ourinfo').click(function () {
        $('#c_works').hide();
        $('#c_ourinfo').fadeIn(500);
        $('#bg_mosaic').css('background', 'url("./img/bg_mosaic2_b.png"), url("./img/bg_mosaic3_b.png")');
    });

    $('#b_works').click(function () {
        $('#c_ourinfo').hide();
        $('#c_works').fadeIn(500);
        $('#bg_mosaic').css('background', 'url("./img/bg_mosaic2_b.png"),url("./img/bg_mosaic3_b.png")');
    });
});
