$('h1').click(function() {
    window.print();
});

$(document).ready(function() {
    $('.info-wrap').each(function() {
        if ($(this).eq(0).find('p').is(':contains(구축)')) {
            $(this).find('.info:first').addClass('new');
        } else if ($(this).eq(0).find('p').is(':contains(운영)')) {
            $(this).find('.info:first').addClass('manage');
        } else if ($(this).eq(0).find('p').is(':contains(개선)')) {
            $(this).find('.info:first').addClass('develop');
        };
    });
});