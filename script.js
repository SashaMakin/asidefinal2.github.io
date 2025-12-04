let popup = document.querySelectorAll('.brands-item__hide');
let showbtn = document.querySelector('.show');
let hidebtn = document.querySelector('.hide');

showbtn = addEventListener('click', function(evt){

for (let i = 0 ; i < popup.length; i++ ){
popup[i].classList.remove('brands-item__hide');
showbtn.classList.add('brands-item__hide');
hidebtn.classList.remove('brands-item__hide');
}});

hidebtn = addEventListener('click', function(evt){

for (let i = 0 ; i < popup.length ; i++ ){
popup[i].classList.add('brands-item__hide');
hidebtn.classList.add('brands-item__hide');
showbtn.classList.remove('brands-item__hide');

}});       
      
