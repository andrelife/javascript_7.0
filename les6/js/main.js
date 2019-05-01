let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checksavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
    inputs[i].style.opacity = .3;
}

expensesItemBtn.disabled = true;
expensesItemBtn.style.opacity = .5;
optionalExpensesBtn.disabled = true;
optionalExpensesBtn.style.opacity = .5;
countBudgetBtn.disabled = true;
countBudgetBtn.style.opacity = .5;

let money, time;
startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-10-10');
    money = +prompt('Ваш бюджет на месяц?', '900');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
        inputs[i].style.opacity = 1;
    }
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            console.log("done");
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

for (let i = 0; i < expensesItem.length; i++) {
    expensesItem[i].addEventListener('input', function () {
        let items1 = document.querySelector('#expenses_1'),
            items2 = document.querySelector('#expenses_2'),
            items3 = document.querySelector('#expenses_3'),
            items4 = document.querySelector('#expenses_4');
        if (items1.value != '' && items2.value != '' && items3.value != '' && items4.value != '') {
            expensesItemBtn.disabled = false;
            expensesItemBtn.style.opacity = 1;
        } else {
            expensesItemBtn.setAttribute("disabled", true);
            expensesItemBtn.style.opacity = 0.5;
        }

        if (expensesItemBtn.disabled == false && optionalExpensesBtn.disabled == false) {
            countBudgetBtn.disabled = false;
            countBudgetBtn.style.opacity = 1;
        }
    });
}

for (let i = 0; i < optionalExpensesItem.length; i++) {
    optionalExpensesItem[i].addEventListener('input', function () {
        let items1 = document.querySelector('#optionalexpenses_1'),
            items2 = document.querySelector('#optionalexpenses_2'),
            items3 = document.querySelector('#optionalexpenses_3');
        if (items1.value != '' && items2.value != '' && items3.value != '') {
            optionalExpensesBtn.disabled = false;
            optionalExpensesBtn.style.opacity = 1;
        } else {
            optionalExpensesBtn.setAttribute("disabled", true);
            optionalExpensesBtn.style.opacity = 0.5;
        }
        if (expensesItemBtn.disabled == false && optionalExpensesBtn.disabled == false) {
            countBudgetBtn.disabled = false;
            countBudgetBtn.style.opacity = 1;
        }
    });
}

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        let gg = +expensesValue.textContent;
        appData.moneyPerDay = ((appData.budget - gg) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        daybudgetValue.textContent = "Произошла ошибка";
    }

});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

checksavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.manthIncome = (sum / 100 / 12 * percent);
        appData.yearIncome = (sum / 100 * percent);
        monthsavingsValue.textContent = appData.manthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.manthIncome = (sum / 100 / 12 * percent);
        appData.yearIncome = (sum / 100 * percent);
        monthsavingsValue.textContent = appData.manthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {}, //расходы 
    optionalExpenses: {},
    income: [], // доход
    timeData: time,
    savings: false,
};