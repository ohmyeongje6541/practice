package d.inheritance;

class Animal2 {
    String name;
    int age;

    Animal2(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Dog2 extends Animal2 {
    String breed;

    Dog2 () {
        super("name", 0);
    }

    Dog2(String name, int age, String breed) {
        super("name", 0);
//        this.name = name;
//        this.age = age;
        this.breed = breed;
    }
}

public class SuperMain {
    public static void main(String[] args) {
        Animal2 a = new Animal2("동물", 0);
    }
}
