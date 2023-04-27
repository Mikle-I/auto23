// открываем модальную форму

let openForm = document.querySelector(".header__button");
let modal = document.querySelector(".modal--ten");

openForm.onclick = function () {
  modal.classList.toggle("noVisible");
};

// закрываем модалку по клику в другое место на экране

let overlay = document.querySelector(".overlay");
overlay.onclick = function () {
  modal.classList.toggle("noVisible");
};
// закрываем модалку по клику на крестик

let butExet = document.querySelector(".formStandart__exit");
butExet.onclick = function () {
  modal.classList.toggle("noVisible");
};

// закрываем модалку по клику на кнопку на главную

let butHome = document.querySelector(".boxSendOK__button");
butHome.onclick = function () {
  modal.classList.toggle("noVisible");
};
// закрываем окно ошибки по клику на кнопку на главную

let butReset = document.querySelector(".boxSendFail__button");
butReset.onclick = function () {
  let formFail = document.querySelector(".boxSendFail");
  let formSt = document.querySelector(".formStandart");
  formFail.classList.toggle("noVisible");
  formSt.classList.toggle("noVisible");
};
// откртытие формы при нажатие всех  кнопок на карточках
let butSP = document.querySelectorAll(".cart__button--offer");
let butSlPa = document.querySelectorAll(".cart__button--white");
const arrButs = [...butSP, ...butSlPa];

arrButs.forEach(function (evt) {
  evt.addEventListener("click", function () {
    modal.classList.toggle("noVisible");
  });
});
