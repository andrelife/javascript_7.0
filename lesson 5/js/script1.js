let ulMenu = document.querySelector('.menu'),
    allLI = document.querySelectorAll('li'),
    newLi = document.createElement('li'),
    text = document.querySelector('#title'),
    column = document.querySelectorAll('.column'),
    banner = document.querySelectorAll('.adv'),
    answer = document.querySelector('#prompt');

    //console.log(banner);
document.body.style.background = 'url(img/apple_true.jpg)';
ulMenu.insertBefore(allLI[2],allLI[1]);
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';
ulMenu.appendChild(newLi);
text.innerHTML = 'Мы продаем только подлинную технику Apple';
//document.getElementsByClassName("adv")[0].remove();
column[1].removeChild(banner[0]);


for(let i=0; i < 1; i++){
    let question = prompt("Как вы относитесь к технике Apple ? :", "");
    if( (typeof(question)) === "string" && (typeof(question)) != null && question != '' ) {
        answer.innerHTML = question;
    } else{
        i--;
    }
};