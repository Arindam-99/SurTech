//  Inheritance in Java
//  Enables code reuse and "is-a" relationship

class Animal {
  void eat() {
    System.out.println("Animal is eating...");
  }
}

class Dog extends Animal {
  void bark() {
    System.out.println("Dog is barking...");
  }
}

public class InheritanceDemo {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.eat();  // Inherited
    d.bark(); // Own method
  }
}
