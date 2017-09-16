$(function () {
    var pals = ['000', '088', '00d', '438', '800', '888', '8cf', 'aa2', 'b82', 'c18', 'fbb', 'e00', 'fd0', 'feb', 'ddd', 'fff'];
    var pushed = false;
    var color = '';

    //    グリッド設定

    var row = '<tr>';
    for (i = 0; i < 20; i++) row += '<td>&nbsp;</td>';
    row += '</tr>';

    for (i = 0; i < 16; i++) $('#canvas').append(row);

    //    パレット設定

    $('#palette').html(row);
    for (i = 0; i < 16; i++) $('#palette td').eq(i).css({
        backgroundColor: '#' + pals[i]
    });

    //    グリッド操作
    $('#canvas td').mousedown(function () {
        pushed = true;
        $(this).css({
            backgroundColor: color
        });
        return false;
    }).mousemove(function () {
        if (pushed) $(this).css({
            backgroundColor: color
        });
        return false;
    });
    $(document).mouseup(function () {
        pushed = false;
    });

    $('#palette td').click(function () {
        $(this).css({
            borderColor: 'yellow'
        }).siblings().css({
            borderColor: 'gray'
        });
        color = $(this).css('background-color');
    }).eq(0).click();

    //    カスタム
    //    for (i = 0; i < 16; i++) {
    //        $('#canvas td').eq(i).css({
    //            backgroundColor: '#' + pals[i]
    //        });
    //    }

    var count = 0;

    var timer = setInterval(function () {
        //do something
        $('#canvas td').eq(count).css({
            backgroundColor: '#' + pals[count]
        });
        $('#canvas td').eq(count - 1).css({
            backgroundColor: '#' + pals[count]
        });

        console.log("do something");
        if (count >= 15) {
            clearInterval(timer);
        }
        count++;
    }, 100);

});
