const buttonsToHide = ["Open sticker picker", "Send a gift", "Boost this server"];
let css = "";
buttonsToHide.forEach(button => css = css.concat(`[aria-label="${button}"]{display:none}`));
css = css.concat('[id="channel-attach-THREAD"]{display:none}');
const style = document.createElement('style'); style.innerHTML = css;
document.body.appendChild(style);
