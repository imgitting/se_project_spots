const editProfileButton = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const profileCloseButton = editProfileModal.querySelector(".modal__close-btn");

const addProfileButton = document.querySelector(".profile__add-btn");
const newPostButton = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostButton.querySelector(".modal__close-btn");
const profilNameInput = editProfileModal.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description",
);

editProfileButton.addEventListener("click", function () {
  profilNameInput.value = profileNameElement.textContent;
  profileDescriptionInput.value = profileDescriptionElement.textContent;

  editProfileModal.classList.add("modal_is-opened");
});

profileCloseButton.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

addProfileButton.addEventListener("click", function () {
  newPostButton.classList.add("modal_is-opened");
});

newPostCloseButton.addEventListener("click", function () {
  newPostButton.classList.remove("modal_is-opened");
});

const profileFormElement = editProfileModal.querySelector(".modal__form");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileNameElement.textContent = profilNameInput.value;
  profileDescriptionElement.textContent = profileDescriptionInput.value;

  editProfileModal.classList.remove("modal_is-opened");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

const addCardFormElement = newPostButton.querySelector(".modal__form");

const imageLinkInput = addCardFormElement.querySelector("#image-link");

const captionInput = addCardFormElement.querySelector("#caption");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  console.log(imageLinkInput.value);
  console.log(captionInput.value);

  newPostButton.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
