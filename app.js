const btn = document.querySelector("input[type='submit']");
const messageInput = document.querySelector("#message-input");
const linkInput = document.querySelector("#link-input");
const form = document.querySelector("form");

form.addEventListener("submit", function(eventObj){
    eventObj.preventDefault();
    let encrypted_message = btoa(messageInput.value);
    linkInput.value = encrypted_message;
});
