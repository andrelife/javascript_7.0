let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');
   
 let appData = {
    budget: money,
    expenses: {},  //расходы 
    optionalExpenses: {},
    income: [], // доход
    timeData : time,
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt( 'Введите обязательную статью расходов в этом месяце ?'),
//         b = prompt( 'Во сколько обойдется ?');

//         if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != "" && b != "" && a.length < 50) {
//         appData.expenses[a] = b; 
//         console.log("done");
//         } else{
//             i--;
//         }
// }

// let i=0; // пременная i
// while (i < 2) {  // итерация проходит 2 раза 
//     let a = prompt( 'Введите обязательную статью расходов в этом месяце ?'),
//         b = prompt( 'Во сколько обойдется ?');
//         i++;

//         if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != "" && b != "" && a.length < 50) {
//         appData.expenses[a] = b; 
//         console.log("done");
//         } else{
//             i--;
//         }
// }

let i=0;
do {
    let a = prompt( 'Введите обязательную статью расходов в этом месяце ?'),
        b = prompt( 'Во сколько обойдется ?');
        i++;

        if((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        appData.expenses[a] = b; 
        console.log("done");
        } else{
            i--;
        }
}
while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay <2000 ) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

