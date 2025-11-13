package f.collection;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListMain {
    public static void main(String[] args) {
        ArrayList<String> l = new ArrayList<>();
        l.add("apple");
        l.add("orange");
        System.out.println(l);

        l.add(1, "cherry");
        System.out.println(l);

        String f = l.get(0);
        System.out.println(f);

        l.set(2, "grape");
        System.out.println(l);

        l.remove(0);
        l.remove("grape");
        System.out.println(l);

        System.out.println(l.size());
        System.out.println(l.isEmpty());
        System.out.println(l.contains("cherry"));

        ArrayList<Integer> intList = new ArrayList<>();
        intList.addAll(Arrays.asList(1, 2, 3));
        System.out.println(intList);

        int index = intList.indexOf(9);
        System.out.println(index);

        System.out.println("for-each");
        for (Integer num : intList) {
            System.out.println(num);
        }
    }
}
