/*
 * Create a typewriter affect on a text box.
 *
 */

(function() {

	// Provide a list of titles to type
	const titles = [
		'PhD Candidate',
		'Software Developer',
	]
	const optionalTitles = [
		'Nuclear scientist',
		'Teacher',
		'Open source enthusiast',
		'Distance runner'
	];
	// Pick a random title to end on
	let randomTitleIndex = Math.floor(Math.random()*optionalTitles.length)
	let randomTitle = optionalTitles[randomTitleIndex]
	titles.push(randomTitle);

	// Get the object where the title will be displayed
	const display = $('#whoami')[0];

	function typewriter(titles, display) {
		// Define parameters of the animation.
		const speed = 50;
		const type_pause = 500;
		const delete_pause = 2500;

		// Generate the animation for each title
		let titleDelay = 2000;
		let deleteDelay = 0;
		for (let i = 0; i < titles.length; i++) {
			// Type the title
			const title = titles[i];
			const titleTime = speed*title.length;
			setTimeout(typeTitle, titleDelay, title, display, speed);
			// Delete the title (if not the last word)
			if (i != titles.length-1) {
				deleteDelay = titleDelay + titleTime + delete_pause;
				setTimeout(deleteTitle, deleteDelay, title, display, speed);
				// Add to the delays for the next title
				titleDelay = deleteDelay + titleTime + type_pause; 
			}
		}
	}

	function typeTitle(title, display, speed, frame=0) {
		// Show characters of the title frame-by-frame
		if (frame < title.length ) {
			// Add the character to the display
			const character = title.charAt(frame);
			display.innerHTML += character;
			// Display the next character
			frame++;
			setTimeout(typeTitle, speed, title, display, speed, frame);
		}
	}

	function deleteTitle(title, display, speed, frame=0) {
		// Delete characters of the title frame-by-frame
		if (frame < title.length ) {
			// Delete the last character from the display
			display.innerHTML = display.innerHTML.slice(0, -1);
			// Delete the next character
			frame++;
			setTimeout(deleteTitle, speed, title, display, speed, frame);
		}
	}

	typewriter(titles, display);

})();
