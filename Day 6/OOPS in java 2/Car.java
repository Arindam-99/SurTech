public class Car {
  String model;

  int year;

  int speed;

  String brand;

  String color;

  public void accelerate(int increment){
    speed += increment;

  }
  public void brake(int decrement){
    speed -= decrement;
    if(speed <0){
      speed = 0;
    }
  }
}
