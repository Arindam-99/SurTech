package OperatorNOperation;
import java.text.NumberFormat;

public class Formating_number {
  public static void main(String[] args) {
  NumberFormat currency = NumberFormat.getCurrencyInstance();
    String Result = currency.format(1234567.891);

    NumberFormat persent = NumberFormat.getPercentInstance();
    String Result2 = persent.format(0.1);

  System.out.println(Result);
  System.out.println(Result2);

  // NumberFormat.getPercentInstance().format(0);
  }
}
