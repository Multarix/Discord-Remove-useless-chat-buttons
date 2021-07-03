/*
Remove all buttons
remove("Open GIF picker", "Open sticker picker", "Send a gift")
*/

function remove(labels) {
    new MutationObserver(() => {      
        for (const label of labels) {
            document.querySelector(`[aria-label="${label}"]`).remove()
        }
    }).observe(document.querySelector('title'), {childList: true});
}
