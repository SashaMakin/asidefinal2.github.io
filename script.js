let popup = document.querySelectorAll('.brandsitem__hide');
let hideBtn = document.querySelector('.activebtnclose');
let showBtn = document.querySelector('.activebtnopen');



showBtn = addEventListener('click', function(evt){

for (let i = 0 ; i < popup.length; i++ ){
popup[i].classList.remove('brandsitem__hide');
hideBtn.classList.remove('brandsitem__hide');
showBtn.classList.add('brandsitem__hide');

}});

hideBtn = addEventListener('click', function(evt){

for (let i = 0 ; i < popup.length ; i++ ){
popup[i].classList.add('brandsitem__hide');
showBtn.classList.remove('brandsitem__hide');
hideBtn.classList.add('brandsitem__hide');


}});       
      
