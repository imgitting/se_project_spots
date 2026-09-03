const editProfileButton = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const profileCloseButton = editProfileModal.querySelector(".modal__close-btn");

const addProfileButton = document.querySelector(".profile__add-btn");
const newPostButton = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostButton.querySelector(".modal__close-btn");

editProfileButton.addEventListener("click", function () {
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
