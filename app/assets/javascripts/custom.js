jQuery.noConflict()(function($) {
    "use strict";
    if ($(window).height() < 700) {
        $('#oi_featuder_posts').css('margin-top', '20px');
    };
    $('.oi_slider').flexslider({
        prevText: "", //String: Set the text for the "previous" directionNav item
        nextText: "",
        animation: "fade",
        useCSS: true,
        controlNav: false,
        animationLoop: true,
        slideshow: true,
        slideshowSpeed: 3000,
        pauseOnHover: true,
        start: function(slider) {
            slider.removeClass('oi_flex_loading');
        }
    });

    $(window).load(function() {
        var wh = ((window.innerHeight) / 2);
        var hh = ($(".oi_head_holder").outerHeight()) / 2;
        var lh = ($(".oi_left_text_area").outerHeight()) / 2;
        var lp = $(".oi_logo_place").outerHeight() / 2;
        var rh = ($(".oi_right_text_area:not(.oi_inner_soc)").outerHeight()) / 2;
        var rhs = ($(".oi_right_text_area.oi_inner_soc").outerHeight()) / 2;
        if ($('body').width() > 640) {

            $(".oi_head_holder:not(.oi_inner)").css({
                'margin-top': (wh - hh)
            })

            $(".oi_left_text_area").css({
                'margin-top': (lp - lh)
            })
            $(".oi_right_text_area:not(.oi_inner)").css({
                'margin-top': (lp - rh)
            })
            $(".oi_right_text_area.oi_inner:not(.oi_inner_soc)").css({
                'margin-top': (hh - rh)
            })
            $(".oi_right_text_area.oi_inner.oi_inner_soc").css({
                'margin-top': (hh - rhs)
            })
            $('#oi_container:not(.oi_inner)').css({
                'margin-top': (wh * 2)
            })
            $('#oi_container.oi_inner').css({
                'margin-top': (hh * 2) + 60
            })
            $('#scroll_to_content a').click(function(e) {
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: $('#oi_container').offset().top
                }, 400);
                return false;
            });
        };
		
		
        $('.oi_page_holder').css('visibility', 'visible');
        // will first fade out the loading animation
        $("#status").fadeOut("slow");
        // will fade out the whole DIV that covers the website.
        $("#preloader").fadeOut("slow");
		
    });

    if ($('body').width() > 640) {
        $(window).load(function() {
            if (($("body").height() - $(window).height()) > 300) {
                var stickyNavTop = $('.oi_head_holder').offset().top + $(".oi_head_holder .row").outerHeight();
                $(window).scroll(function() {
                    if ($(this).scrollTop() > stickyNavTop) {
                        $('.oi_st_menu_holder').fadeIn('fast');
                    } else {
                        $('.oi_st_menu_holder').fadeOut('fast');
                    }
                });
            };
        });
    };

    $(document).ready(function() { // after loading the DOM
		/***************************************************
                          Flickr
      ***************************************************/
        if ($("div").is("#cbox")) {
            $('#cbox').jflickrfeed({
                limit: 10,
                qstrings: {
                    id: "52617155@N08"
                },
                itemTemplate: '<div class="oi_flickr_item">' +
                    '<a data-lightbox="roadtrip" href="{{image_b}}" title="{{title}}">' +
                    '<img src="{{image_s}}"/>' +
                    '</a>' +
                    '</div>'
            });
        }
	
	
	
        $('.oi_img_grid img').hover(function() {
            $(this).addClass('transition');

        }, function() {
            $(this).removeClass('transition');
        });
		
        $("#featured_slider").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items: 3,
            stopOnHover: true
        });



        $("#ajax-contact-form").submit(function() {
            // this points to our form
            var str = $(this).serialize(); // Serialize the data for the POST-request
            var result = '';
            $.ajax({

                type: "POST",
                url: 'contact.php',
                data: str,
                success: function(msg) {
                    if (msg == 'OK') {
                        result = '<div class="alert alert-info">Message was sent to website administrator, thank you!</div>';
                        $("#fields").hide();
                    } else {
                        result = msg;
                    }
                    $("#note").html(result);

                }
            });
            return false;
        });
    });


    $('.oi_page_holder').css('visibility', 'hiden');
    // makes sure the whole site is loaded
    jQuery("#status").css('display', 'block');
    jQuery("#preloader").css('display', 'block');



    $('.oi_xs_menu').click(function() {
        $('.post-categories').toggle();
    });

    $('#oi_container img').removeAttr('height');
    $('#oi_container img').removeAttr('width');
    $('.wp-caption').removeAttr('style');
    $('table:not(#wp-calendar)').addClass('table table-striped table-bordered');

    

});