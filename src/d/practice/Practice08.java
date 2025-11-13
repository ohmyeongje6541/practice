package d.practice;

interface Swimmable {
    void swim();
}

interface Flyable {
    void fly();
}

class Duck implements Swimmable, Flyable {
    private String name;

    public Duck(String name) {
        this.name = name;
    }

    @Override
    public void fly() {
        System.out.println(name + "가 날아갑니다");
    }

    @Override
    public void swim() {
        System.out.println(name + "(이)가 수영합니다");
    }
}

class Fish implements Swimmable {
    private String name;

    public Fish(String name) {
        this.name = name;
    }

    @Override
    public void swim() {
        System.out.println(name + "(이)가 헤엄칩니다");
    }
}

class Bird1 implements  Flyable {
    private String name;

    public Bird1(String name) {
        this.name = name;
    }

    @Override
    public void fly() {
        System.out.println(name + "(이)가 하늘을 날아갑니다");
    }
}

public class Practice08 {
    public static void main(String[] args) {
        Duck duck = new Duck("오리");
        duck.swim();
        duck.fly();
        System.out.println();

        Fish fish = new Fish("물고기");
        fish.swim();
        System.out.println();

        Bird1 bird = new Bird1("참새");
        bird.fly();
    }
}
