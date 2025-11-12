package e.generic;

class Box2<T> {
    private T item;

    public T getItem() {
        return item;
    }

    public void setItem(T item) {
        this.item = item;
    }
}

public class WithGeneric {
    public static void main(String[] args) {
        Box2<String> b = new Box2<String>();
        Box2<Integer> b2 = new Box2<Integer>();

        b.setItem("hello");
        String str = b.getItem();
        //b.setItem(123);

        b2.setItem(123);
        int i = b2.getItem();

    }
}
