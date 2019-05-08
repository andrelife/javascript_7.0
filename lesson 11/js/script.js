//window.addEventListener('load'); Скрипты Используются когда весь сайт прогрузится вместе с картинками
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    // задача перебрать табы -- скрыть все кроме одного 1го, и при клике на другой таб чтоб
    // информацию о нужном оставалась, а другая пряталась исчезала
    // перебираем переменные - получаем селекторы.
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    // далее прописываем функции- те действи которые мы хотим чтоб были на сайте
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);
    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Таймер
    let deadline = '2019-05-05';
    function getTimeRemaining(endtime) {
        let t =Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            //hours = Math.floor((t/1000/60/60) % 24),
            //seconds = Math.floor((t/(1000*60*60*24)));
            return {
                'total' : t,
                'hours' : ('0' + hours).slice(-2),
                'minutes' : ('0' + minutes).slice(-2),
                'seconds' : ('0' + seconds).slice(-2)
            };
            
    }
    function setClock(id, endtime) {
        let timer = document.getElementById('id'),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock(){
            let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if(t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
                
        }
        
    }
    setClock('timer', deadline);

// Modal
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descriptionBtn = document.querySelectorAll('.description-btn'),
    content = document.querySelector('.content');
function showDescriptionBtn(){
    content.addEventListener('click', function(event){
        if(event.target && event.target.matches('.description-btn')) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }
    });
}
showDescriptionBtn();
function moreCloseBtn(){
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });
}
moreCloseBtn();
});

// Form
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...' 
};
let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(form);
        request.send(formData);

        request.addEventListener('readystatechange', function(){
            if(request.readystate < 4) {
                statusMessage.innerHTML = message.loading; 
            }else if(request.readystate === 4 && request.readystate == 200) {
                statusMessage.innerHTML = message.success;
            }else{
                statusMessage.innerHTML = message.failure;
            }
        });
});