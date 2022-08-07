'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const flagPicturesBox = document.querySelector('.flag-pictures__box ');
   const flagImgs = document.querySelectorAll('.flag__img');

   window.addEventListener('load', function () {

      setTimeout(function () {
         flagImgs.forEach(flagImg => {
            flagImg.classList.add('flag__img--active');
         });
      }, 3000);

      setTimeout(function () {
         flagPicturesBox.classList.add('flag-pictures__box--active');
      }, 5500);

   });


   const iconMenu = document.querySelector(".icon-menu");
   const menuBody = document.querySelector(".menu__list");

   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle("_lock");
         iconMenu.classList.toggle("menu-open");
         menuBody.classList.toggle("menu-open");
         menuBody.classList.toggle('menu__list--active');
      });
   }
   if (menuBody) {
      menuBody.addEventListener('click', function () {
         iconMenu.classList.remove("menu-open");
         menuBody.classList.remove("menu__list--active");
         menuBody.classList.remove("menu-open");
         document.body.classList.remove("_lock");
      });
   }

   
   const MIN_NAME_LENGTH = 4;
   const MAX_NAME_LENGTH = 12;

   let stopSumb = (/[!@#$%^&*()]/);


   let searcHeaderInput = document.querySelector('.search-header__input');

   searcHeaderInput.addEventListener('input', () => {
      const valueLength = searcHeaderInput.value.length;

      if (valueLength < MIN_NAME_LENGTH) {
         searcHeaderInput.setCustomValidity('Ещё' + ' ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');

      } else if (valueLength > MAX_NAME_LENGTH) {
         searcHeaderInput.setCustomValidity('Удалите лишнее' + (valueLength - MAX_NAME_LENGTH) + 'симв.');

      } else {
         searcHeaderInput.setCustomValidity('');
      }

      searcHeaderInput.reportValidity();

   });

   // Symbol !@#$%^&*() =========================

   searcHeaderInput.addEventListener('input', function () {

      this.value = this.value.replace(stopSumb, '');

   });


   // Text randomtext =============================

   fetch('https://baconipsum.com/api/?type=lucky')

      .then(function (resp) { return resp.json(); })
      .then(function (randomtext) {
         // console.log(randomtext);

         setTimeout(function () {

            setInterval(function () {
               
               let description = document.querySelector('.header__content-description');
               description.textContent = randomtext[Math.floor(Math.random() * randomtext.length)];

            }, 2500);

         }, 5500);

      })


      .catch(function () {
         
      });

});



