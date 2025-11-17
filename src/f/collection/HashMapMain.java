package f.collection;

import java.util.HashMap;

public class HashMapMain {
    public static void main(String[] args) {

        HashMap<String, Integer> map = new HashMap<>();

        map.put("Apple", 1000);
        map.put("Banana", 2000);
        map.put("Cherry", 3000);
        System.out.println(map);

        int price = map.get("Apple");
        System.out.println(price);


    }
}
