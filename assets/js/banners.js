/*
 * Reformat banners as the page is moved..
 *
 */

(function() {

	// Show or hide the object depending on page position
	function toggleAtPosition($object, position) {
		if ($(window).scrollTop() > position) {
			$object.addClass('hidden');
		} else {
			$object.removeClass('hidden');
		}
	}

	$(window).scroll(function() {
		$initialsBar = $('#initials-bar');
		toggleAtPosition($initialsBar, $(window).height()/3);
	});

	
})();
