package c.oop2;

public class Enum {
    public static void main(String[] args) {
        Direction direction = Direction.WEST;
        System.out.println(direction);

        System.out.println(direction.name());

        System.out.println(direction.ordinal());
    }
}
