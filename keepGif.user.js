// ==UserScript==
// @name        Discord Hide Useless Chat Buttons
// @namespace   https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Remove-useless-chat-buttons/master/keepGif.user.js
// @homepageURL https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @supportURL  https://github.com/Multarix/Discord-Remove-useless-chat-buttons/issues
// @grant       none
// @version     1.0
// @author      Anonymous
// @description 10/28/2020, 1:37:40 PM
// ==/UserScript==

new MutationObserver(() => {
	const buttonsToHide = ["Open sticker picker", "Send a gift"] // Array of labels for buttons we want to remove
	for(button of buttonsToHide){ // Loop through the array
		const foundButton = document.querySelector(`[aria-label="${button}"]`); // Find the button
		if(foundButton) foundButton.remove() = "none"; // If the button was found, remove it
	}
}).observe(document.querySelector('title'), {childList: true}); // Whenever the "channel" changes, run the script
