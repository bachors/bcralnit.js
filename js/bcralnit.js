/************************************************
 * #### jQuery bcralnit.js v0.0.1 ####
 * Coded by Ican Bachors 2017.
 * https://github.com/bachors/bcralnit.js
 * Updates will be posted to this site.
 ***********************************************/

$.fn.bcralnit = function(e) {
    var f = {
        width: '60px',
        background: '#ddd',
        color: '#333'
    };
    if (typeof e === 'object') {
        e.width = (e.width == undefined ? f.width : e.width);
        e.background = (e.background == undefined ? f.background : e.background);
        e.color = (e.color == undefined ? f.color : e.color);
    } else {
        e = f
    }
    $(this).each(function(i, a) {
        var w = $(this).css('width'),
            h = $(this).css('height'),
            d = ($(this).css('display') == 'inline' ? 'inline-block' : $(this).css('display')),
            ff = $(this).css('font-family'),
            fs = $(this).css('font-size'),
            lh = $(this).css('line-height'),
            bt = $(this).css('border-top-width'),
            bb = $(this).css('border-bottom-width'),
            br = $(this).css('border-right-width'),
            bl = $(this).css('border-left-width'),
            m = $(this).css('margin'),
            pt = $(this).css('padding-top'),
            pb = $(this).css('padding-bottom'),
            pl = $(this).css('padding-left'),
            pr = $(this).css('padding-right'),
            nw = (parseInt(w) - parseInt(e.width)) + 'px',
            c = ($(this).attr('id') != null && $(this).attr('id') != undefined ? 'bcralnit_' + $(this).attr('id') + i : 'bcralnit_' + $(this).attr('class') + i),
            b = '<div style="position:absolute;box-sizing:border-box;border:none;margin:0px;overflow:hidden;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;padding:' + (parseInt(pt) + parseInt(bt)) + 'px ' + pr + ' ' + pb + ' ' + pl + ';font-family:' + ff + ';font-size:' + fs + ';line-height:' + lh + ';right:' + e.width + ';width:' + (parseInt(nw) - parseInt(br) - parseInt(bl)) + 'px;height:calc(100% - ' + bb + ');background:' + e.background + ';color:' + e.color + '"></div>';
        $(this).css('width', nw);
        $(this).css('height', '100%');
        $(this).css('position', 'absolute');
        $(this).css('overflow', 'auto');
        $(this).css('resize', 'none');
        $(this).css('top', '0px');
        $(this).css('margin', '0px');
        $(this).css('box-shadow', 'none');
        $(this).css('left', e.width);
        $(this).css('box-sizing', 'border-box');
        $(this).wrap('<div id="' + c + '" style="display:' + d + ';box-sizing:border-box;border:none;background:' + e.background + ';position:relative;padding:0px;margin:' + m + ';width:' + w + ';height:' + h + '"></div>');
        $(this).before(b);
        var b = $(this).val().split('\n').length;
        addln(b, c);
        $(this).on('blur focus change keyup keydown', function() {
            var a = $(this).val().split('\n').length;
            addln(a, c)
        });
        $(this).scroll(function() {
            $('#' + c + ' div').scrollTop($(this).scrollTop())
        });
        $('#' + c + ' div').scroll(function() {
            $(this).scrollTop($('#' + c + ' div').scrollTop())
        })
    });

    function addln(a, b) {
        var c = '';
        for (i = 0; i < a; i++) {
            var j = $('#' + b + ' textarea').val().split('\n')[i].substr(i.toString().length).length;
            var s = '';
            for (x = 0; x < j; x++) {
                s += '&nbsp;'
            }
            c += (i + 1) + s + '<br>'
        };
        $('#' + b + ' div').html(c);
        $('#' + b + ' div').scrollTop($('#' + b + ' textarea').scrollTop())
    }
}
