const infoSectionClose = document.getElementById("info-section-close");
const infoSection = document.getElementById("info-section");
const mainChatHeader = document.getElementsByClassName("main-chat-header")[0];
const mainChatImage = document.getElementById("main-chat-image");
const mainChatName = document.getElementById("main-chat-name");
const infoOptionBlock = document.getElementById("info-option-block");
const blockModal = document.getElementById("block-modal");
const noModalButton = document.getElementById("no-modal-button");
const yesModalButton = document.getElementById("yes-modal-button");


infoSectionClose.addEventListener("click", hideInfoSection);
mainChatHeader.addEventListener("click", showInfoSection);
infoOptionBlock.addEventListener("click", showBlockModal);
noModalButton.addEventListener("click", hideBlockModal);
yesModalButton.addEventListener("click", hideBlockModal);

for(let x=0; x<4; x++) {
  let chat = document.getElementsByClassName("chat")[x];
  chat.addEventListener("click", getInfo);
}

function showInfoSection() {
  infoSection.classList.remove("hidden");
}

function hideInfoSection() {
  infoSection.classList.add("hidden");
}

function showBlockModal() {
  blockModal.classList.add("show");
}

function hideBlockModal() {
  blockModal.classList.remove("show");
}

function getInfo(evt) {
  let target = evt.target;
  let targetClass = target.classList[0];
  while(targetClass !== "chat") {
      target = target.parentNode;
      targetClass = target.classList[0];
  }

  let targetChildren = target.childNodes;
  const chatURL = targetChildren[1].src;
  const chatName = targetChildren[3].childNodes[1].childNodes[1].textContent;

  mainChatImage.src = chatURL;
  mainChatName.textContent = chatName;

}
