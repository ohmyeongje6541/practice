package d.inheritance;

class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void introduce() {
        System.out.println("안녕하세요, 저는 " + name + "이고" + age + "살입니다");
    }
}

class Student extends Person {
    String studentId;
    String major;

    public Student(String name, int age, String studentId, String major) {
        super(name, age);
        this.studentId = studentId;
        this.major = major;
    }

    @Override
    void introduce() {
        System.out.println("안녕하세요, 저는 " + name + "입니다. " +
                age + "살이고, 학번은 " + studentId + "이며, " +
                major + "을 전공합니다.");
    }
}

public class ClassMain {
    public static void main(String[] args) {
        Student s = new Student("김철수", 20, "2024001", "컴퓨터공학");
        s.introduce();
    }
}
