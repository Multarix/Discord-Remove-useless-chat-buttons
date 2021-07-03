new MutationObserver(() => {
	const buttonsToHide = ["Open sticker picker", "Send a gift"] // Array of labels for buttons we want to remove
	for(button of buttonsToHide){ // Loop through the array
		const foundButton = document.querySelector(`[aria-label="${button}"]`); // Find the button
		if(foundButton) foundButton.remove() // If the button was found, remove it
	}
}).observe(document.querySelector('title'), {childList: true}); // Whenever the "channel" changes, run the script
