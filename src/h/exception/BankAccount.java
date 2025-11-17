package h.exception;

class InsufficientBalanceException extends Exception {
    private int current;
    private int request;

    public InsufficientBalanceException(int current, int request) {
        super("잔액 부족" + current + " / " + request);
        this.current = current;
        this.request = request;
    }

    public InsufficientBalanceException() {
    }
}

public class BankAccount {
    private int balance;

    public BankAccount(int balance) {
        this.balance = balance;
    }

    public void withdraw(int amount) throws InsufficientBalanceException {
        if (balance < amount) {
            throw new InsufficientBalanceException(balance, amount);
        }
        balance = balance - amount;
    }

    public static void main(String[] args) throws InsufficientBalanceException {
        BankAccount ba = new BankAccount(1000);
        try {
            ba.withdraw(100000);
        } catch (InsufficientBalanceException e) {
            System.out.println("problem");
        }
        ba.withdraw(100000);
        System.out.println(ba.balance);
    }
}
