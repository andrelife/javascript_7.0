let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    question1 = prompt( 'Введите обязательную статью расходов в этом месяце ?'),
    question2 = prompt( 'Во сколько обойдется ?'),
    question3 = prompt( 'Введите обязательную статью расходов в этом месяце ?'),
    question4 = prompt( 'Во сколько обойдется ?');

let appData = {
    
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

console.log(appData);
console.log(appData.budget / 30);
alert(appData.budget / 30);

