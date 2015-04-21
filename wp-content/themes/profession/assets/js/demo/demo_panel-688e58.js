(function($){ 
	$(document).ready(function(){
		var style = $('<style type="text/css" id="theme_color" />').appendTo('head');
		var style2 = $('<style type="text/css" id="theme_color2" />').appendTo('head');
		var style3 = $('<style type="text/css" id="theme_color3" />').appendTo('head');
		var style4 = $('<style type="text/css" id="theme_color4" />').appendTo('head');
		
		var $op = $('#options_panel'),
			$op_btn = $('#options_panel h3');
			
		$op_btn.click(function(){
			if($op.hasClass('opened')) {
				$op.removeClass('opened').animate({'left':'-'+195+'px'}, 500,'easeInOutBack');
				$(this).find('span').removeClass('icon-remove').addClass('icon-wrench');
				
			} else {
				$op.addClass('opened').animate({'left':0}, 500,'easeInOutBack');
				$(this).find('span').removeClass('icon-wrench').addClass('icon-remove');
			}
		});
		
		$('#header_style').change(function(){
			$('#header').attr('class','');
			$('#header').addClass('style'+$(this).val());
		});
		
		
		
		$('#options_panel .color_suggestions li').click(function(){
			var $value = $(this).attr('data-value');
			if ( $value  == 1 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/gray.css" type="text/css" id="color_style" />').appendTo('head');
			 } else if ( $value == 2 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/green.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 3 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/brown.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 4 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/yellow.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 5 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/orange.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 6 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/red.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 7 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/purple.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 8 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/blue.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value  == 9 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/bgray.css" type="text/css" id="color_style" />').appendTo('head');
			 } else if ( $value == 10 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/bgreen.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 11 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/bbrown.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 12 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/byellow.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 13 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/borange.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 14 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/bred.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 15 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/bpurple.css" type="text/css" id="color_style" />').appendTo('head');
			} else if ( $value == 16 ) {
				$('#color_style').remove();
				var style = $('<link rel="stylesheet" href="http://demo2.pixflow.net/profession/wp-content/themes/profession/assets/css/color/bblue.css" type="text/css" id="color_style" />').appendTo('head');
			} 
		});

		
	});
})(jQuery);