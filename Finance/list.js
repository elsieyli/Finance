document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get input values
        const bill = document.getElementById("bill").value;
        const dueDate = document.getElementById("due").value; // Corrected to "due" to match the HTML id
        const urgency = document.getElementById("urgency").value;

        // Create a new expense item
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");
        expenseItem.innerHTML = `
            <p><strong>Expense:</strong> ${bill}</p>
            <p><strong>Due Date:</strong> ${dueDate}</p>
            <p><strong>Urgency:</strong> ${urgency}</p>
        `;

        // Add the expense item to the list
        expenseList.appendChild(expenseItem);

        // Clear the form fields
        expenseForm.reset();
    });
});
