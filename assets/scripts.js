jQuery(document).ready(function($) {
	$document = $(document);
	$nav = $('#nav');
	$document.on('scroll', function() {
		if($document.scrollTop() > 100) {
			$nav.addClass('fixed');
		}else {
			$nav.removeClass('fixed');
		}
	})
});
