package d.inheritance;

class MyObject {
    String name;
    int value;

    public MyObject(String name, int value) {
        this.name = name;
        this.value = value;
    }

    @Override
    public String toString() {
        return "name =" + name + "value =" + value;
    }
}


public class ObjectMain {
    public static void main(String[] args) {
        MyObject obj = new MyObject("test", 100);
        System.out.println(obj.toString());
    }
}
