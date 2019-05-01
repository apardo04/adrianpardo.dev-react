(function($) {
    // The no-js class is used by the Modernizr feature detection library. When Modernizr loads, it replaces no-js with js . If JavaScript is disabled, the class remains. This allows you to write CSS which easily targets either condition.
    $('html').removeClass('no-js');

    // Animate to section when nav is clicked
    $('header .prevent-default, .lead-download-btn').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        let heading = $(this).attr('href');
        let scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to first element
    $('.see-more').click(function() {
        var scrollDistance = $(this).parent().next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });

    // Show More Projects
    $("#show-more-projects").click(function() {
        $(this).hide();
        $(".hidden-project").removeClass("hidden-project");
    });

    // Skills Active Filter
    $(".skills-text").click(function() {
        $(".skills-text").removeClass("active");
        $(this).addClass("active");

        let dataFilter = $(this).attr("data-filter");
        $(".skill").hide();
        $("."+dataFilter).removeClass("hidden").show();
    });

    // Hire-me "Other" radio textarea display code
    $("input#help-radio-other").click(function() {
        $("#other-textarea").toggle();
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
    
    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

})(jQuery);
