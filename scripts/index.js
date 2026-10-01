const editProfileButton = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const profileCloseButton = editProfileModal.querySelector(".modal__close-btn");
const addProfileButton = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-btn");

const profileNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  profileNameInput.value = profileNameElement.textContent;

  profileDescriptionInput.value = profileDescriptionElement.textContent;

  openModal(editProfileModal);
});

profileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

addProfileButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

const profileFormElement = editProfileModal.querySelector(".modal__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = profileNameInput.value;

  profileDescriptionElement.textContent = profileDescriptionInput.value;

  closeModal(editProfileModal);
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

const addCardFormElement = newPostModal.querySelector(".modal__form");
const imageLinkInput = addCardFormElement.querySelector("#image-link");
const captionInput = addCardFormElement.querySelector("#caption");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(imageLinkInput.value);

  console.log(captionInput.value);

  closeModal(newPostModal);
}
addCardFormElement.addEventListener("submit", handleAddCardSubmit);
