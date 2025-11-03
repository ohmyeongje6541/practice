package a.basic;

public class Operator {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        System.out.println(a + b);

        int x = 10;
        int y = 3;

        double result = (double) x/y;
        System.out.println(result);

        System.out.println("x =" + --x);
        System.out.println("x =" + x);

        x += 5;
        System.out.println("x += 5");
    }
}
