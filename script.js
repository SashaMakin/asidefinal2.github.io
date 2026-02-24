let popup = document.querySelectorAll('.modal');
let openPopupButton = document.querySelector('.button-open');
let closePopupButton = document.querySelector('.button-close');

openPopupButton.addEventListener('click', function () {

for (let i = 0; i < popup.length; i++)  {
  popup[i].classList.remove('modal');
  openPopupButton.classList.add('modal');
  closePopupButton.classList.remove('modal');
}});

closePopupButton.addEventListener('click', function () {

  for (let i = 0; i < popup.length; i++)  {
  popup[i].classList.add('modal');
  closePopupButton.classList.add('modal');
  openPopupButton.classList.remove('modal');
}});


let repair = document.querySelectorAll('.show');
let repairopenPopupButton = document.querySelector('.button-show');
let repairclosePopupButton = document.querySelector('.button-lost');

repairopenPopupButton.addEventListener('click', function () {

for (let i = 0; i < repair.length; i++)  {
  repair[i].classList.remove('show');
  repairopenPopupButton.classList.add('show');
  repairclosePopupButton.classList.remove('show');
}});

repairclosePopupButton.addEventListener('click', function () {

  for (let i = 0; i < repair.length; i++)  {
  repair[i].classList.add('show');
  repairclosePopupButton.classList.add('show');
  repairopenPopupButton.classList.remove('show');
}});


let headerOpenButton = document.querySelector('.header_button_open');
let showMenu = document.querySelector('.menuMobile');
let closwMenu = document.querySelector('.closure');
let showOverlay = document.querySelector('.overlay');

headerOpenButton.addEventListener('click', function () {
  showMenu.classList.remove('menuMobile');
  showOverlay.classList.remove('overlayShow');
});

closwMenu.addEventListener('click', function (event) {
  showMenu.classList.add('menuMobile');
  showOverlay.classList.add('overlayShow');
});

showOverlay.addEventListener('click', function (event) {
  showMenu.classList.add('menuMobile');
  showOverlay.classList.add('overlayShow');
  showCall.classList.add('menuCallMobileShow');
  showCallPk.classList.add('menuCallShow');
  showMail.classList.add('menuMailMobileShow');
  showMailPk.classList.add('menuMailShow');
});


let openCall = document.querySelectorAll('.show_call');
let showCall = document.querySelector('.menuCallMobileShow');
let closeCall = document.querySelector('.closure_call');

for (let i = 0; i < openCall.length; i++)  {

  openCall[i].addEventListener('click', function () {

  showCall.classList.remove('menuCallMobileShow');
  showMenu.classList.add('menuMobile');
  showOverlay.classList.remove('overlayShow');

})};

closeCall.addEventListener('click', function () {
  showCall.classList.add('menuCallMobileShow');
  showOverlay.classList.add('overlayShow');
});


let openCallPk = document.querySelector('.show_call_Pk');
let showCallPk = document.querySelector('.menuCallShow');
let closeCallPk = document.querySelector('.closure_callPk');

openCallPk.addEventListener('click', function () {
  showCallPk.classList.remove('menuCallShow');
  showOverlay.classList.remove('overlayShow');
});

closeCallPk.addEventListener('click', function () {
  showCallPk.classList.add('menuCallShow');
  showOverlay.classList.add('overlayShow');
});


let openMail = document.querySelectorAll('.show_mail');
let showMail = document.querySelector('.menuMailMobileShow');
let closeMail = document.querySelector('.closure_mail');

for (let i = 0; i < openMail.length; i++)  {

  openMail[i].addEventListener('click', function () {

  showMail.classList.remove('menuMailMobileShow');
  showMenu.classList.add('menuMobile');
  showOverlay.classList.remove('overlayShow');

})};

closeMail.addEventListener('click', function () {
  showMail.classList.add('menuMailMobileShow');
  showOverlay.classList.add('overlayShow');
});

let openMailPk = document.querySelector('.show_mail_Pk');
let showMailPk = document.querySelector('.menuMail');
let closeMailPk = document.querySelector('.closure_mailPk');

openMailPk.addEventListener('click', function () {
  showMailPk.classList.remove('menuMailShow');
  showOverlay.classList.remove('overlayShow');
});

closeMailPk.addEventListener('click', function () {
  showMailPk.classList.add('menuMailShow');
  showOverlay.classList.add('overlayShow');
});