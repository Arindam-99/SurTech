public class Test {
  public static void main(String[] args) {
    Car car = new Car();
    car.color = "Blue";
    car.speed = 40;
    car.brand = "Tata";
    car.year = 2024;
    car.model = "Safari";

    car.accelerate(1);
    System.out.println(car.speed);

  }
}
