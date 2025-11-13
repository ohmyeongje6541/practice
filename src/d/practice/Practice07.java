package d.practice;

interface Payment {
    void processPayment(int amount); //결제 처리 (추상 메서드)
    String getPaymentMethod();//결제 수단 이름 반환 (추상 메서드)

    default void printReceipt(int amount) {
        System.out.println("영수증: " + amount + " - 결제 수단");
    }
}

class CreditCardPayment implements Payment {
    private String cardNumber; //카드 번호

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public void processPayment(int amount) {
        System.out.println("신용카드" + "(" + cardNumber + ")로" + amount + "원 결제 완료");
    }

    @Override
    public String getPaymentMethod() {
        return "신용카드";
    }
}

class CashPayment implements Payment {
    @Override
    public void processPayment(int amount) {
        System.out.println("현금 " + amount + "원 결제 완료");
    }

    @Override
    public String getPaymentMethod() {
        return "현금";
    }
}


public class Practice07 {
    public static void main(String[] args) {
        Payment[] payments = {
                new CreditCardPayment("1234-5678"),
                new CashPayment()
        };

        int amount = 50000;
        for (Payment payment : payments) {
            payment.processPayment(amount);
            payment.printReceipt(amount);
            System.out.println();
        }
    }
}
