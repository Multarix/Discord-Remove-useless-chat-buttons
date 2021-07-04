const buttonsToHide = ["Open GIF picker", "Open sticker picker", "Send a gift"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));
const style = document.createElement('style'); style.innerHTML = css;
document.head.appendChild(style);
