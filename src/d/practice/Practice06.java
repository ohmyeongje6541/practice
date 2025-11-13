package d.practice;

interface Drawable {
    void draw();
}

class Circle2 implements Drawable {
    private int radius;

    public Circle2(int radius) {
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("반지름 " + radius + "인 원을 그립니다");
    }
}

class Rectangle2 implements Drawable {
    private int width, height;

    public Rectangle2(int width, int height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public void draw() {
        System.out.println(width + "X" + height + "사각형을 그립니다");
    }
}

class Triangle2 implements Drawable {
    private int base, height;

    public Triangle2(int base, int height) {
        this.base = base;
        this.height = height;
    }

    @Override
    public void draw() {
        System.out.println("밑변 " + base + "높이 " + height + "인 삼각형을 그립니다");
    }
}

public class Practice06 {
    public static void main(String[] args) {
        Drawable[] shapes = {
                new Circle2(5),
                new Rectangle2(4, 6),
                new Triangle2(3, 4)
        };

        for (Drawable shape : shapes) {
            shape.draw();
        }
    }
}
