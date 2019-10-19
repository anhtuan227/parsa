jQuery(window).load(function() {
		if(jQuery('#slider') > 0) {
        jQuery('.nivoSlider').nivoSlider({
        	effect:'random',
    });
		} else {
			jQuery('#slider').nivoSlider({
        	effect:'random',
    });
		}
});