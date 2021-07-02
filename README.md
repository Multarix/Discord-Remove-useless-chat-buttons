# Discord: Remove useless chat buttons
Remove the gift nitro, gif and sticker buttons from the chat bar in discord!

This repository is for those looking to hide the "Gift Nitro", "Stickers" and "GIF" buttons from the chat bar in discord. If reading this far into the future, please note that this may not work.<br>

**Note:** Upon changing channel, the icons will reappear, don't worry, they'll automagically disappear within 2 seconds again as the script is on a 2 second loop.

There are 2 versions of the scripts here:<br>
1. "All" versions remove the Gift Nitro, Stickers and GIF buttons, (Note that you can still access gifs and stickers via the tabs in the emoji button that remains)
2. "KeepGIF" versions remove the Gift Nitro and Sticker buttons only (Note that you can still access the stickers via the tab in the emoji/ gif buttons that remain)


###  **The script will need to re-pasted in every time you start discord. If something goes wrong, restarting discord should fix it.**
#### _**I hold no responsibility for you breaking your discord or other things happening**_

<br>
To use these, while discord is open, press <i>Ctrl + Shift + I</i>. You will be presented with a console. First and foremost you'll be greeted with a giant message telling you that pasting anything inside the console has a high chance of being a scam. The real reason they tell you this, is to discourge exactly what this script does, removing nitro bloat. It's of course your choice who you trust,

Copy and paste the script into the console and hit enter.<br>

### Some last minute warnings
- This may potentially hide other objects related to these things in the future if discord changes anything, so as stated above, if you happen to be using this far into the future, it may not work as expected.
- Trying to use both versions of the script at the same time will probably cause problems, don't try it.

## Userscripts
In the event you use the web based version of discord rather than the app, tampermonkey versions are avaliable too...
- Remove All: https://github.com/Multarix/Discord-Remove-useless-chat-buttons/raw/main/all.user.js
- Keep GIF: https://github.com/Multarix/Discord-Remove-useless-chat-buttons/raw/main/keepGif.user.js

#### Quick Access: All Version

```js
function removeAnnoyingButtons(){ // Remove Gif, Sticker and Gift Nitro buttons in one simple script
	const hideGifs = document.querySelectorAll('[aria-label="Open GIF picker"]'); // Find the "Gif" button
	hideGifs.forEach(gifButton => {
		if(gifButton.style.display !== "none") gifButton.style.display = "none"; // Hide the button if it's not already hidden.
	});

	const hideStickers = document.querySelectorAll('[aria-label="Open sticker picker"]'); // Find the "Sticker" button
	hideStickers.forEach(gifButton => {
		if(gifButton.style.display !== "none") gifButton.style.display = "none"; // Hide the button if it's not already hidden.
	});

	const hideNitro = document.querySelectorAll('[aria-label="Send a gift"]'); // Find the "Gift Nitro" button
	hideNitro.forEach(nitroButton => {
		if(nitroButton.style.display !== "none") nitroButton.style.display = "none"; // Hide the button if it's not already hidden.
	});
}
setInterval(removeAnnoyingButtons, 2000) // Repeat every 2 seconds. Recommended to keep at 2000, but raise/ lower if you wish.
```

#### Quick Access: Keep GIF Version

```js
function removeAnnoyingButtons(){ // Remove Gif, Sticker and Gift Nitro buttons in one simple script
	const hideStickers = document.querySelectorAll('[aria-label="Open sticker picker"]'); // Find the "Sticker" button
	hideStickers.forEach(gifButton => {
		if(gifButton.style.display !== "none") gifButton.style.display = "none"; // Hide the button if it's not already hidden.
	});

	const hideNitro = document.querySelectorAll('[aria-label="Send a gift"]'); // Find the "Gift Nitro" button
	hideNitro.forEach(nitroButton => {
		if(nitroButton.style.display !== "none") nitroButton.style.display = "none"; // Hide the button if it's not already hidden.
	});
}
setInterval(removeAnnoyingButtons, 2000) // Repeat every 2 seconds. Recommended to keep at 2000, but raise/ lower if you wish.
```
