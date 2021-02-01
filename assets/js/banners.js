/*
 * Reformat banners as the page is moved..
 *
 */

(function() {

	// Show or hide the object depending on page position
	function toggleClassAtPosition($object, position, className) {
		if ($(window).scrollTop() >= position) {
			$object.addClass(className);
		} else {
			$object.removeClass(className);
		}
	}

	$(window).scroll(function() {
		// Hide the top banner when below 1/3 of the screen
		$initialsBar = $('#initials-bar');
		toggleClassAtPosition($initialsBar, $(window).height()/3, 'hidden');
		$mediaBar = $('#media-bar');
		toggleClassAtPosition($mediaBar, 0, 'not-loaded-top');
	});

})();
