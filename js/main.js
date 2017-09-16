$(function () {
    $("#navbar").load("./navbar.html");
    $("#footer").load("./footer.html");

    $('#maximage').maximage({
        cycleOptions: {
            timeout: 5000
        }
    });

    $('#c_works').hide();
    $('#c_ourinfo').fadeIn(500);
    $('#bg_mosaic').css('background', 'url("./img/bg_mosaic2.png"), url("./img/bg_mosaic3.png")');

});
