function setPageHeight() {
    var windowHeight = $(window).height();
    var pageHeight = $('#page').height();
    var headerHeight = $('#header').height();
    if (windowHeight > pageHeight + headerHeight + 1)
        $('#page').height(windowHeight - headerHeight - 1);
}

$(function () {
    setPageHeight();
    $(window).on('resize', setPageHeight);
    $(document).on('scroll', function () {
        $('.subMenu').removeClass('visibleSubMenu');
        if ($(document).scrollTop() > 60) {
            $('#header').removeClass('headerLarge').addClass('headerSmall');
        } else {
            $('#header').removeClass('headerSmall').addClass('headerLarge');
        }
        setPageHeight();
    });
    $('#header').on('click', function() {
        $('.subMenu').removeClass('visibleSubMenu');
    });
    $('#menu>ul>li').on('mouseenter', function () {
        $('.subMenu').removeClass('visibleSubMenu');
        $(this).find('.subMenu').addClass('visibleSubMenu');
    });
    $('#main').on('mouseenter', function () {
        $('.subMenu').removeClass('visibleSubMenu');
    });
    $('#mobileMenuIcon').on('click', function () {
        if (!$('#page').hasClass('showMobileMenu')) {
            $('#page').addClass('showMobileMenu');
            $('#header').addClass('showMobileMenu');
            $('#mobileMenu').addClass('showMobileMenu');
            $('#mobileMenu').css('display', 'block');
            setTimeout(function () {
                $('#mobileMenu').css('z-index', 100);
            }, 300);
        } else {
            $('#mobileMenu').css('z-index', -1);
            $('#page').removeClass('showMobileMenu');
            $('#header').removeClass('showMobileMenu');
            $('#mobileMenu').removeClass('showMobileMenu');
            setTimeout(function () {
                $('#mobileMenu').css('display', 'none');
            }, 300);
        }
    });
})
