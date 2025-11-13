package d.inheritance;

class Animal7 {
    void eat() {
        System.out.println("eating");
    }
}

interface Swimmable {
    void swim();
}

interface Flyable {
    void fly();
}

interface Walkable {
    void walk();
}

class Duck implements Swimmable, Flyable, Walkable {
    @Override
    public void fly() {
        System.out.println("오리가 날아갑니다");
    }

    @Override
    public void swim() {
        System.out.println("오리가 수영합니다");
    }

    @Override
    public void walk() {
        System.out.println("오리가 걸어다닙니다");
    }
}
class Fish implements Swimmable {
    @Override
    public void swim() {
        System.out.println("물고기가 수영합니다");
    }
}

public class MultiInterface {
}
