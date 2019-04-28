let bgBody = document.getElementsByTagName('body'),
    ulMenu = document.querySelector('.menu'),
    allLI = document.querySelectorAll('li'),
    newLi = document.createElement('li');

    console.log(newLi);
//bgBody.style.background = 'url(img/apple_true.jpg)';
ulMenu.insertBefore(allLI[2],allLI[1]);
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';
ulMenu.appendChild(newLi);