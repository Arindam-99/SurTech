//  Polymorphism in Java
//  One name, many forms
// Types: Compile-time (Overloading), Runtime (Overriding)

class Calculator {
  //  Method Overloading (Compile-time)
  int add(int a, int b) {
    return a + b;
  }

  int add(int a, int b, int c) {
    return a + b + c;
  }
}

class Vehicle {
  void start() {
    System.out.println("Vehicle is starting...");
  }
}

class Car extends Vehicle {
  //  Method Overriding (Runtime)
  @Override
  void start() {
    System.out.println("Car is starting...");
  }
}

public class PolymorphismDemo {
  public static void main(String[] args) {
    Calculator calc = new Calculator();
    System.out.println("Sum (2 args): " + calc.add(5, 10));
    System.out.println("Sum (3 args): " + calc.add(1, 2, 3));

    Vehicle v = new Car(); // Parent ref, child obj
    v.start(); // Output: Car is starting...
  }
}
