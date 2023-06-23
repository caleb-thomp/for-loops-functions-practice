
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let invalidAccounts = [];

  for (let acc of array) {
    let calculatedBalance = 0;
    
    for (let deps of (acc.deposits || [0])) {
        calculatedBalance += deps
    }
    for (let wits of (acc.withdrawals || [0])) {
        calculatedBalance -= wits
    }

    if (calculatedBalance !== acc.balance) {
      invalidAccounts.push(acc);
    }
  }

  return invalidAccounts;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
