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

// Form
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...' 
};
let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input')[0],
    statusMessage = document.createElement('div'),
    formTelEmail = document.getElementById('form'),
    inputs = formTelEmail.getElementsByTagName('input'),
    input1 = formTelEmail.getElementsByTagName('input')[0],
    input2 = formTelEmail.getElementsByTagName('input')[1];
    
    input1.name = 'email';
	input2.name = 'phone';

    statusMessage.classList.add('status');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     form.appendChild(statusMessage);

//     let request = new XMLHttpRequest();
//         request.open('POST', 'server.php');
//         request.setRequestHeader('Content-type', 'application/json charset=utf-8');

//     let formData = new FormData(form);

//         let obj = {};
//         formData.forEach(function(value, key) {
//             obj[key] = value;
//         });
//         let json = JSON.stringify(obj);

//         request.send(json);

//         request.addEventListener('readystatechange', function(){
//             if(request.readyState < 4) {
//                 statusMessage.innerHTML = message.loading; 
//             }else if(request.readyState === 4 && request.status == 200) {
//                 statusMessage.innerHTML = message.success;
//             }else{
//                 statusMessage.innerHTML = message.failure;
//             }
//         });
//         for (let i = 0; i < input.length; i++){
//             input[i].value = '';
//         }
//     });

//     formTelEmail.addEventListener('submit', function(event) {
//         event.preventDefault();
//         formTelEmail.appendChild(statusMessage);
    
//         let request = new XMLHttpRequest();
//             request.open('POST', 'server.php');
//             request.setRequestHeader('Content-type', 'application/json charset=utf-8');
    
//         let formData = new FormData(formTelEmail);
    
//             let obj = {};
//             formData.forEach(function(value, key) {
//                 obj[key] = value;
//             });
//             let json = JSON.stringify(obj);
    
//             request.send(json);
    
//             request.addEventListener('readystatechange', function(){
//                 if(request.readyState < 4) {
//                     statusMessage.innerHTML = message.loading; 
//                 }else if(request.readyState === 4 && request.status == 200) {
//                     statusMessage.innerHTML = message.success;
//                 }else{
//                     statusMessage.innerHTML = message.failure;
//                 }
//             });
//             for (let i = 0; i < inputs.length; i++){
//                 inputs[i].value = '';
//             }
//         });
        input2.onkeypress = function(event){
            if (event.keyCode != 43) {
                if(event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
                }
            }
        };
        input.onkeypress = function(event){
            if (event.keyCode != 43) {
                if(event.keyCode < 48 || event.keyCode > 57){
            event.preventDefault();
                }
            }
        };
// promis 
function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
        e.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);
        
        function postData(data) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');

                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                // request.send(json);

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve()
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };



                let obj = {};

                formData.forEach(function (value, key) {
                    obj[key] = value;
                });

                let json = JSON.stringify(obj);

                request.send(json);
            });
        } //end postData

        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        function clearInputs() {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        }


        postData(formData)
        	.then(()=> statusMessage.innerHTML = message.loading)
        	.then(()=> {
        		thanksModal.style.display = 'block';
        		mainModal.style.display = 'none';
        		statusMessage.innerHTML = '';
        	})
        	.catch(() => statusMessage.innerHTML = message.failure)
        	.then(clearInputs);
    });
}
sendForm(form);
sendForm(formTelEmail);

});