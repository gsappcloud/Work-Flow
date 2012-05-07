	$(document).ready(function(){
  		var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                scroll_pos = Math.min(scroll_pos/2000, 0.7);
                var bg = 'rgba(0,0,0,' + scroll_pos + ')';
                $('body', this).css('background-color', bg);
                var color = 'rgba(255,255,255,' + scroll_pos + ')';
            	$('body').css('color', color);
            });
	});