const money = prompt('Ваш бюджет на месяц?');
const time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    
    budget: money,
    timeData : time,
    
    expenses: {
        
    },

    optionalExpenses: {},

    income: [],

    savings: false
};


let question1 = prompt( 'Введите обязательную статью расходов в этом месяце ?');
let question2 = prompt( 'Во сколько обойдется ?');


    appData.expenses[question1] = question2;

    let question3 = prompt( 'Введите обязательную статью расходов в этом месяце ?');
    let question4 = prompt( 'Во сколько обойдется ?');

    appData.expenses[question3] = question4;



console.log(appData);
console.log(money/30);

