package f.collection;

import java.util.HashSet;

public class HashSetMain {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();

        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");

        System.out.println(set);

        System.out.println(set.contains("Melon"));

        set.remove("Apple");

        System.out.println(set.size());
        System.out.println(set.isEmpty());
        // set.clear();
        // System.out.println(set.isEmpty());
    }
}
