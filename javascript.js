let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

function addExpense() {

    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if(title==="" || amount==="" || date===""){
        alert("Please fill all fields");
        return;
    }

    const expense={
        title,
        amount:Number(amount),
        category,
        date
    };

    expenses.push(expense);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    displayExpenses();

    document.getElementById("title").value="";
    document.getElementById("amount").value="";
    document.getElementById("date").value="";
}

function displayExpenses(){

    const list=document.getElementById("expenseList");

    list.innerHTML="";

    let total=0;

    expenses.forEach((expense,index)=>{

        total+=expense.amount;

        list.innerHTML+=`
        <tr>
            <td>${expense.title}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button class="delete" onclick="deleteExpense(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

    document.getElementById("total").innerText=total;

}

function deleteExpense(index){

    expenses.splice(index,1);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    displayExpenses();

}