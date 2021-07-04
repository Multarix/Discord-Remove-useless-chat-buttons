// ==UserScript==
// @name        Discord Hide Useless Chat Buttons
// @namespace   https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @match       https://discord.com/*
// @downloadURL https://raw.githubusercontent.com/Multarix/Discord-Remove-useless-chat-buttons/master/keepGif.user.js
// @homepageURL https://github.com/Multarix/Discord-Remove-useless-chat-buttons
// @supportURL  https://github.com/Multarix/Discord-Remove-useless-chat-buttons/issues
// @grant       none
// @version     1.2
// @author      Multarix
// @description Working as of: 4/07/2021
// ==/UserScript==

const buttonsToHide = ["Open sticker picker", "Send a gift"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));
const style = document.createElement('style'); style.innerHTML = css;
document.head.appendChild(style);
