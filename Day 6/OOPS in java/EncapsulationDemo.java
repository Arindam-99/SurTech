//  Encapsulation in Java
//  Wrapping data and code together + data hiding

class BankAccount {
  private int balance = 1000; //  Private variable

  public int getBalance() {
    return balance;
  }

  public void deposit(int amount) {
    balance += amount;
  }

  public void withdraw(int amount) {
    if (amount <= balance) {
      balance -= amount;
    } else {
      System.out.println("Insufficient funds.");
    }
  }
}

public class EncapsulationDemo {
  public static void main(String[] args) {
    BankAccount acc = new BankAccount();
    acc.deposit(500);
    acc.withdraw(300);
    System.out.println("Current Balance: ₹" + acc.getBalance());
  }
}
