// ==UserScript==
// @name        Discord Hide Useless Chat Buttons
// @namespace   https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Remove-useless-chat-buttons/master/all.user.js
// @homepageURL https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @supportURL  https://github.com/Multarix/Discord-Remove-useless-chat-buttons/issues
// @grant       none
// @version     1.1
// @author      Multarix
// @description Working as of: 3/07/2021
// ==/UserScript==

new MutationObserver(() => {
	const buttonsToHide = ["Open GIF picker", "Open sticker picker", "Send a gift"] // Array of labels for buttons we want to remove
	for(button of buttonsToHide){ // Loop through the array
		const foundButton = document.querySelector(`[aria-label="${button}"]`); // Find the button
		if(foundButton) foundButton.remove() = "none"; // If the button was found, remove it
	}
}).observe(document.querySelector('title'), {childList: true}); // Whenever the "channel" changes, run the script
