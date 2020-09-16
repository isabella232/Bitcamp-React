# Expense Report
For this homework you will be making an expense report. The goal of this assignment is to get comfortable with using the useContext hook and implementing it rather than having to pass down props while also giving more practice with useState. I will be providing you with React app template which includes an `App.css` that you may use to get started. The below image is what you will be creating..

<p align="center">
  <img src="https://github.com/bitprj/Bitcamp-React/blob/week3/week3/homework/issue/images/expense-report-picture.png" alt="expense-report"/>
</p>

The expense report allows the user to enter text for their expense and an amount. The app will then update the balance amount, transactions list, expenses and income when the amount is added. Some of the functions are already implmented and you can use these as a guide. 

Your task will be to complete `AddTransaction.js`, `Balance.js` and `GlobalContext.js` using useState and useContext hooks. 
`Balance.js` controls updating the balance amount when new inputs are added. Reflect on some of the other already implemented components to see how they use Context and map through transactions to access information if you are stuck. 

<p align="center">
  <img src="https://github.com/bitprj/Bitcamp-React/blob/week3/week3/homework/issue/images/balance-image.png" alt="balance"/>
</p>

`AddTransaction.js`controls the inputs of the user and adding the transaction to the report. This component should comprise of `<Form/>`, `<Button/>` and `<Input/>` tags to allow user inputs and transaction button. This component is also where you will create your state so be sure to set the state for both the amount and the text. 

<p align="center">
  <img src="https://github.com/bitprj/Bitcamp-React/blob/week3/week3/homework/issue/images/add-transaction.png" alt="addTransaction"/>
</p>

If you are having trouble, please refer to the Todo List example I went through during the stream or reach out to me directly. 

To get started with this homework, I suggest using your preferred IDE to create a personal react app and copy over the files from the template into your project folder. You may also work with the expense report template that I have created in this CodeSandbox(___).
