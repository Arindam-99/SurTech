//  Abstraction in Java
//  Hiding complexity and showing only essentials

abstract class Shape {
  abstract void draw(); // Abstract method
}

class Circle extends Shape {
  @Override
  void draw() {
    System.out.println("Drawing Circle...");
  }
}

public class AbstractionDemo {
  public static void main(String[] args) {
    Shape s = new Circle(); // Abstract class ref to child
    s.draw();
  }
}
