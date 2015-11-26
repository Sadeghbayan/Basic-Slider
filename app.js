var app = angular.module('app', []);
    app.controller('MainCtrl', function ($scope, $element) {
        var change_img_time 	= 5000;
        var transition_speed	= 300;
        var  slideshowParent = angular.element('.slideshow-wrap'),
             slider = slideshowParent.children('.slide'),
            sliderLen = slider.length,
            i   = 0;

        var makeSlider = function(){
            slider.eq(i).fadeOut(transition_speed, function(){
                i +=1;
                if(i === sliderLen){
                    i = 0;

                }
                slider.eq(i).fadeIn(transition_speed);
//
            })
        }

        slider.not(':first').hide();
//        makeSlider();
        setInterval(makeSlider,5000);
//        slider.eq(1).css({'background-color':'#343434'})
//        console.log(slider.eq(1));
        console.log(slider.not(':first'));


    });
