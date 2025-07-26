//  Class and Object in Java
//  Class: Blueprint/template to create objects
//  Object: Real-world entity created from a class

//  Define a class
class Student {
  //  Data members (fields/attributes)
  String name;
  int age;

  //  Method (behavior)
  void study() {
    System.out.println(name + " is studying...");
  }

  void showDetails() {
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
  }
}

public class ClassAndObjectDemo {
  public static void main(String[] args) {
    //  Create object using 'new' keyword
    Student s1 = new Student();  // s1 is a reference to the object
    s1.name = "Arindam";
    s1.age = 20;

    //  Call object's methods
    s1.showDetails();  // Output: Name and Age
    s1.study();        // Output: Arindam is studying...

    //  Another object
    Student s2 = new Student();
    s2.name = "Sujata";
    s2.age = 22;
    s2.showDetails();
    s2.study();
  }
}

/*
 Class vs Object:

 Class:
- Like a blueprint (e.g., Student)
- Doesn’t use memory until instantiated
- Declared using `class` keyword

Object:
- Instance of a class (e.g., s1, s2)
- Uses memory
- Created using `new` keyword

 Analogy:
- Class: A recipe (for cake)
- Object: Actual cake made using the recipe
*/
