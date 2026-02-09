let popup = document.querySelectorAll('.brandsitem__hide');
let hideBtn = document.querySelector('.activebtnclose');
let showBtn = document.querySelector('.activebtnopen');



showBtn.addEventListener('click', function(){

for (let i = 0 ; i < popup.length; i++ ){
popup[i].classList.remove('brandsitem__hide');
hideBtn.classList.remove('brandsitem__hide');
showBtn.classList.add('brandsitem__hide');

}});

hideBtn.addEventListener('click', function(){

for (let i = 0 ; i < popup.length ; i++ ){
popup[i].classList.add('brandsitem__hide');
showBtn.classList.remove('brandsitem__hide');
hideBtn.classList.add('brandsitem__hide');


}});       
      
let repair = document.querySelectorAll('.hide2');
let repairopenPopupButton = document.querySelector('.hide2-show');
let repairclosePopupButton = document.querySelector('.hide2-hide');

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