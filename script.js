const totalAmountbtn = document.querySelector('#total-amount-btn');
const buttons = document.querySelectorAll('.btn');
const showtotalAmount = document.getElementById('total-amount');
let inputTotalamount = document.getElementById('input-total-amount');
const list = document.getElementById('unorderedList')
const inputDescription = document.getElementById('description')
const inputAmount = document.getElementById('amount')
const remainAmount = document.getElementById('remaining-amount')
let description;
let amount;
let expenseAmount =0;
let remainingAmount = 0;
let totalAmount;

//show totalAmount
function totalamountshow(){
   totalAmount = parseFloat(inputTotalamount.value) || 0;
    showtotalAmount.innerText += totalAmount;
    inputTotalamount.value = "";
}

//addList
function itemAdd() {
    description = inputDescription.value.trim();
   amount = parseFloat(inputAmount.value) || 0;
    const li = document.createElement('li');
    li.innerHTML = `<span>${description}</span><span>${amount}</span><span><button class="delete-btn">Delete</button>`
    list.appendChild(li);
    inputDescription.value = '';
    inputAmount.value = '';
    return amount
}
//update expense amount
function updateExpenseRemainAmount(addedAmount){
    expenseAmount += addedAmount;
    remainingAmount = totalAmount-expenseAmount;
    remainAmount.innerText = remainingAmount;
}
//deleteExpenseAmount
function deleteExpenseamount(addedAmount){
    list.remove(li)


}


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'total-amount-btn') {
            totalamountshow();
        }

        else if (e.target.id === 'add-btn') {
          let addedAmount = itemAdd();
           updateExpenseRemainAmount(addedAmount);
        }
        // else if(e.target.id ==='delete-btn'){
        //     deleteExpenseamount(addedAmount);
        // }

    })

})
list.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.closest('li');                  // parent li
        const amount = parseFloat(li.querySelectorAll('span')[1].innerText);
        expenseAmount -= amount;
        remainingAmount = totalAmount - expenseAmount;
        remainAmount.innerText = remainingAmount;
        li.remove();                                       // remove li from DOM
    }
});
