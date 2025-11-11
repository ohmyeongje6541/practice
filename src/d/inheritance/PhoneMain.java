package d.inheritance;

class Phone {
    String brand;
    String model;
    int batterLevel;

    void powerOn() {
        System.out.println(model + "is powering on");
    }

    void charge() {
        batterLevel = 100;
    }
}

class IPhone extends Phone {
    String ios;

}
class Galaxy extends Phone {
    String android;
}

public class PhoneMain {
    public static void main(String[] args) {
        IPhone i = new IPhone();
        Galaxy g = new Galaxy();

        i.model = "16 pro";
        i.ios = "26.1";
        i.powerOn();

        g.model = "S25";
        g.brand = "samsung";
        g.android = "25";
        g.powerOn();



    }
}
