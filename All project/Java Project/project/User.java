package project;

import java.util.Scanner;

public class User {
    private final String USERNAME = "admin";
    private final String PASSWORD = "admin123";

    public boolean login() {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print(" Enter username: ");
            String user = sc.nextLine();
            System.out.print(" Enter password: ");
            String pass = sc.nextLine();

            if (user.equals(USERNAME) && pass.equals(PASSWORD)) {
                System.out.println(" Login successful!\n");
                return true;
            } else {
                System.out.println(" Invalid credentials.");
                return false;
            }
        }
    }
}
