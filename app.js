const btn = document.querySelector("input[type='submit']");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");
const form = document.querySelector("form");

form.addEventListener("submit", function(eventObj){
    eventObj.preventDefault();
    let encrypted_message = btoa(messageInput.value);
    linkInput.value = window.location.href + "#" + encrypted_message;
    linkInput.select();
});



const msgLinkContainer = document.querySelector("#message-link-container");
const decryptedMsgContainer = document.querySelector("#decrypted-message-container");

if(window.location.hash)
{
    let hashValue = window.location.hash.replace("#", "");
    msgLinkContainer.classList.add("hide");
    decryptedMsgContainer.classList.remove("hide");
    const p_element = document.querySelector("#decrypted-message-container > .msg-container > p");
    p_element.innerText = `Here is your friend's secret message: ${atob(hashValue)}`;
}