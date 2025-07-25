package OperatorNOperation;
public class MathExample {
  public static void main(String[] args) {
    int result = Math.round(4.6f);
    int result1 = (int)Math.ceil(4.1f);
    int result2 = (int)Math.ceil(4.1f);
    int result3 = Math.min(result1, result2);
    int result4 = Math.max(result2, result3);
    double Random = Math.round(Math.random()*100);
    // int Random1 = (int)Math.round(Math.random()*100);
    int Random1 = (int) (Math.random()*100);


    System.out.println(result);
        System.out.println(result1);
        System.out.println(Random1);

  }
}
