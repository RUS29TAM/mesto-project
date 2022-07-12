//-----------------------------------------------------------------------------ПЕРЕМЕННЫЕ
const page = document.querySelector(".page");

// Переменные - POPUP
const popup = document.querySelector(".popup");
/*const popupBox = document.querySelector(".popup__box");*/

// Переменные - FORM PROFILE-EDIT
const form = document.querySelector("form");
const formInputTypeFirstname = document.querySelector(
  ".form__input_type_firstname"
);
const formInputTypeProfession = document.querySelector(
  ".form__input_type_profession"
);
//  Переменные - BUTTON PROFILE-EDIT
const buttonTypeEdit = document.querySelector(".button_type_edit");
const buttonTypeClose = document.querySelector(".button_type_close");
const buttonTypeSave = document.querySelector(".button_type_save");

// Переменные - FORM PROFILE
/*const profile = document.querySelector(".profile");*/
/*const profileInfoAvatar = document.querySelector(".profile__info-avatar");*/
const profileInfo = document.querySelector(".profile__info");
const profilTitleFirstname = document.querySelector(
  ".profile__title-firstname"
);
const profilSubtitleProfession = document.querySelector(
  ".profile__subtitle-profession"
);

// Переменные - BUTTON ADD PROFILE
const buttonTypeAdd = document.querySelector(".button_type_add");

//-----------------------------------------------------------------------------FUNCTIONS
//Получить и вернуть
function getProfile() {
  return {
    firstname: profilTitleFirstname.textContent,
    profession: profilSubtitleProfession.textContent,
  };
}
//Ввод
function setProfile(userProfile) {
  profilTitleFirstname.textContent = userProfile.firstname;
  profilSubtitleProfession.textContent = userProfile.profession;
}

//Открыть форму
function openEditForm() {
  let userProfile = getProfile();

  formInputTypeFirstname.setAttribute("value", userProfile.firstname);
  formInputTypeProfession.value = userProfile.profession;

  popup.classList.add("popup_opened");
}

//Сохранить данные формы
function saveProfile (evt) {
  evt.preventDefault();

  let userProfile = {
  firstname: formInputTypeFirstname.value,
  profession: formInputTypeProfession.value,
  };

setProfile(userProfile);
closeEditForm();
}

//Закрыть форму
function closeEditForm() {
  popup.classList.remove("popup_opened");
}

//-----------------------------------------------------------------------------Обработчики
buttonTypeEdit.addEventListener("click", openEditForm);
buttonTypeClose.addEventListener("click", closeEditForm);
buttonTypeSave.addEventListener('click', saveProfile);


//console.log();