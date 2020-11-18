const budget = {
    myBudget: [
        {
            title: 'Phone',
            budget: 35
        },
        {
            title: 'Internet',
            budget: 45
        },
        {
            title: 'Education',
            budget: 80
        },
        {
            title: 'Eat out',
            budget: 25
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
        {
            title: 'Pharmacy',
            budget: 40
        },
        {
            title: 'Donations',
            budget: 10
        },
    ]
};

function generateTable(b) {
    const p = document.getElementById('list');
    p.innerHTML = '';
    for (var i = 0; i < b.length; i++) {
        const div = document.createElement('div');
        div.innerHTML = `${b[i].title} - ${b[i].budget}`;
        p.appendChild(div);
    }
}

generateTable(budget.myBudget);
// Eslint detected 4 problems with this file
// (1)  'aZ' is defined but never used
function aZ() {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.title > b.title) ? 1 : - 1);
    generateTable(newArray);
}
// (2) 'zA' is defined but never used
function zA() {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.title < b.title) ? 1 : - 1);
    generateTable(newArray);
}
// (3) 'biggerBudget' is defined but never used
function biggerBudget() {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.budget < b.budget) ? 1 : - 1);
    generateTable(newArray);
}
// (4) 'smallerBudget' is defined but never used
function smallerBudget() {
    const newArray = [...budget.myBudget];
    newArray.sort((a, b) => (a.budget > b.budget) ? 1 : - 1);
    generateTable(newArray);
}