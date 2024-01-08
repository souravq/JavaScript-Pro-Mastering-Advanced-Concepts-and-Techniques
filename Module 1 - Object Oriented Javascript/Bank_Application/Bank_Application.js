console.log("Bank Application");

class BankAccount {
  constructor(
    bankAccountNumber,
    bankAccountHolderName,
    bankAccountBalance = 0
  ) {
    this.bankAccountNumber = bankAccountNumber;
    this.bankAccountHolderName = bankAccountHolderName;
    this.bankAccountBalance = bankAccountBalance;
  }
  // Deposit
  deposit(amt) {
    if (amt > 0) {
      this.bankAccountBalance += amt;
      console.log(
        `You deposited Rs ${amt}, and Your Current Balance is Rs ${this.bankAccountBalance}`
      );
    } else {
      console.log("Amount can't be negetive");
    }
  }

  // Withdraw
  withdraw(amt) {
    if (amt > this.bankAccountBalance) {
      console.log("Account balance is not enough");
    } else {
      this.bankAccountBalance -= amt;
      console.log(
        `You withdrew Rs ${amt}, and Your Current Balance is Rs ${this.bankAccountBalance}`
      );
    }
  }
}

const bank_account = new BankAccount("123", "Sourav");
