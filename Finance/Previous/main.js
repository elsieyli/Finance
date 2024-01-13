document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Retrieve form data
        const bill = document.getElementById('bill').value;
        const expenseName = document.getElementById('ExpenseName').value;
        const dueDate = document.getElementById('due').value;
        const urgency = document.getElementById('urgency').value;

        // Create a new list item for the expense
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <p>Bill: $${bill}</p>
            <p>Expense Name: ${expenseName}</p>
            <p>Due Date: ${dueDate}</p>
            <p>Urgency: ${urgency}</p>
        `;

        // Append the new expense item to the list
        expenseList.appendChild(expenseItem);

        // Clear the form
        form.reset();
    });
});