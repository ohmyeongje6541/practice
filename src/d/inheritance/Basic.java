package d.inheritance;

class Animal {
    String name;
    int age;

    void eat() {
        System.out.println("eat!!!");
    }
}

class Dog extends Animal {
    String name;
    int age;

    void eat() {
        System.out.println("eat!!!");
    }

    void bark() {
        System.out.println("bark!!!");
    }
}

public class Basic {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}
