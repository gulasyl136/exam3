import { data,dat } from "./card.js";
const root = document.querySelector('#root');
data.forEach((item) => {
    const dataList = document.createElement('div');
    dataList.innerHTML = `
    <div class="w-[237px] ml-[-500px] mt-[100px]">
    <img class="w-[231px]" src=${item.img}>
    <h4 class="w-[215px] h-[40px] font-semibold text-xl align-center">${item.h4}</h4>
    <h3 class=" w-[90px] h-[20px] mt-[25px] font-semibold text-xl">${item.h3}</h3>
    <button id="buyButton" class="hover:bg-orange-200  mt-[30px] bg-[#F7D05E] text-white rounded-[94px] w-[231px] h-[43px]">${item.button}</button>
    </div>
 ;`
  root.appendChild(dataList);
});


// document.getElementById("buyButton").onclick = function() {
//   document.getElementById("modal").style.display = "block";
// }

// document.querySelector(".close").onclick = function() {
//   document.getElementById("modal").style.display = "none";
// }

// document.getElementById("firstTime").onclick = function() {
//   alert("Пожалуйста, заполните ваши данные.");
// }

// document.getElementById("notFirstTime").onclick = function() {
//   alert("1 клик куплен");
// }

// // Закрытие модального окна при клике вне его
// window.onclick = function(event) {
//   if (event.target == document.getElementById("modal")) {
//       document.getElementById("modal").style.display = "none";
//   }
// }



const gl = document.querySelector('#gl');
dat.forEach((item) => {
    const datList = document.createElement('div');
    datList.innerHTML = `
    <div class="w-[310px] h-[310px] ">
    <img class="w-[231px" src=${item.img}>
    <h4 class="font-semibold mt-[10px] text-center text-[#5A5A5A]">${item.h4}</h4>
    </div>
 ;`
  gl.appendChild(datList);
});
    


// function subscribe() {
//   alert("Вы подписаны!");
// }

