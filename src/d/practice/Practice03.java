package d.practice;

abstract class Animal1 {
    protected String name;
    protected int age;

    public Animal1(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void displayInfo() {
        System.out.println("이름:" + name + ", 나이:" + age);
    }

    public abstract void makeSound();
    public abstract void eat();
}

class Dog extends Animal1 {
    public Dog(String name, int age) {
        super(name, age);
    }

    @Override
    public void makeSound() {
        System.out.println("멍멍");
    }

    @Override
    public void eat() {
        System.out.println("사료를 먹습니다");
    }
}

class Cat extends Animal1 {
    public Cat(String name, int age) {
        super(name, age);
    }

    @Override
    public void makeSound() {
        System.out.println("야옹");
    }

    @Override
    public void eat() {
        System.out.println("생선을 먹습니다");
    }
}

class Bird extends Animal1 {
    public Bird(String name, int age) {
        super(name, age);
    }

    @Override
    public void makeSound() {
        System.out.println("쨱짹");
    }

    @Override
    public void eat() {
        System.out.println("모이를 먹습니다");
    }
}


public class Practice03 {
    public static void main(String[] args) {
        Animal1[] animals = {
                new Dog("바둑이", 3),
                new Cat("나비", 2),
                new Bird("짹짹이", 1)
        };

        for (Animal1 animal : animals) {
            animal.displayInfo();
            animal.makeSound();
            animal.eat();
            System.out.println();
        }

    }
}
