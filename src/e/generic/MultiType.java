package e.generic;

class Pair<k, v> {
    private k key;
    private v value;

    public Pair(k key, v value) {
        this.key = key;
        this.value = value;
    }

    public k getKey() {
        return key;
    }

    public v getValue() {
        return value;
    }
}

public class MultiType {
    public static void main(String[] args) {
        Pair<String, String> p1 = new Pair<String, String>("name", "kim");
        System.out.println(p1);

        Pair<String, Integer> p2 = new Pair<String, Integer>("age", 20);
        System.out.println(p2);
    }
}
