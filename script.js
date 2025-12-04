const brandsBtn = document.querySelector('.hide');
const brands = document.querySelector('.brands');
const brandsitemhide = document.querySelectorAll('.brands-item__hide');
let isHidden = false;
brandsBtn = addEventListener('click', function() {
isHidden = !isHidden;
if(isHidden) {
items.forEach(brandsitemhide => {
    brandsitemhide.classList.add('hidden');});
    brandsBtn.textContent = 'Показать всё';
    brands.classList.remove('show-all');
    } else {
    items.forEach(item => {
    brandsitemhide.classList.remove('hidden');});
    brandsBtn.textContent = 'Скрыть всё';
    brands.classList.add('show-all');
    }
       
      
})