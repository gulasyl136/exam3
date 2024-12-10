
import  { dat } from "./card.js";
const gl = document.querySelector('#gl');
dat.forEach((item) => {
    const datList = document.createElement('div');
    datList.innerHTML = `
    <div class="w-[310px] h-[310px] transition-transform duration-500 hover:scale-110">
     <a href="./pages/carus.html"><img class="w-[231px" src=${item.img}></a>
    <h4 class="font-semibold mt-[10px] text-center text-[#5A5A5A]">${item.h4}</h4>
    </div>
 ;`
  gl.appendChild(datList);
});





document.getElementById('catalogLink').onclick = function(event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  document.getElementById('modal').classList.remove('hidden'); // Показываем модальное окно
};

document.getElementById('closeBtn').onclick = function() {
  document.getElementById('modal').classList.add('hidden'); // Скрываем модальное окно
};

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      modal.classList.add('hidden');
  }
};




const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    // Функция для открытия всплывающего окна
    openPopupButton.addEventListener('click', () => {
        popup.style.display = 'block'; // Показываем всплывающее окно
    });

    // Функция для закрытия всплывающего окна
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none'; // Скрываем всплывающее окно
    });

    // Закрытие окна при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });




  let cart = [];

  // Функция для добавления товара в корзину
  function addToCart(product) {
      cart.push(product); // Добавляем товар в корзину
      console.log(cart); // Для проверки, что товар добавлен
      alert('Товар добавлен в корзину: ' + product.name); // Сообщение пользователю
  }

  // Получаем кнопку по ID и добавляем обработчик события
  document.getElementById('add-to-cart').addEventListener('click', function() {
      const product = {
          name: 'Боди без рукавов "ФРУК-ТИК", розовый',
          price: 349,
          image: '../img/a1.png'
      };
      addToCart(product); // Вызываем функцию для добавления товара
  });
