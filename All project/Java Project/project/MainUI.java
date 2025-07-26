package project;

import javax.swing.*;
import java.awt.*;

public class MainUI {
    private static Library library = new Library();
    private static JFrame frame;

    public static void main(String[] args) {
        SwingUtilities.invokeLater(MainUI::showLoginUI);
    }

    private static void showLoginUI() {
        frame = new JFrame("Library Login");
        frame.setSize(300, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null);

        JPanel panel = new JPanel(new GridLayout(3, 2, 10, 10));
        JTextField userField = new JTextField();
        JPasswordField passField = new JPasswordField();

        panel.add(new JLabel("Username:"));
        panel.add(userField);
        panel.add(new JLabel("Password:"));
        panel.add(passField);

        JButton loginBtn = new JButton("Login");
        panel.add(new JLabel());
        panel.add(loginBtn);

        loginBtn.addActionListener(_ -> {
            String user = userField.getText();
            String pass = new String(passField.getPassword());
            if (user.equals("admin") && pass.equals("admin123")) {
                showMainUI();
            } else {
                JOptionPane.showMessageDialog(frame, "Invalid credentials", "Error", JOptionPane.ERROR_MESSAGE);
            }
        });

        frame.setContentPane(panel);
        frame.setVisible(true);
    }

    private static void showMainUI() {
        frame.getContentPane().removeAll();
        frame.setTitle("Library Management System");
        frame.setSize(400, 400);

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(6, 1, 10, 10));
        JButton addBookBtn = new JButton("Add Book");
        JButton issueBookBtn = new JButton("Issue Book");
        JButton returnBookBtn = new JButton("Return Book");
        JButton listBooksBtn = new JButton("List All Books");
        JButton logoutBtn = new JButton("Logout");
        JButton exitBtn = new JButton("Exit");

        addBookBtn.addActionListener(_ -> {
            String title = JOptionPane.showInputDialog(frame, "Enter Book Title:");
            if (title != null) {
                String author = JOptionPane.showInputDialog(frame, "Enter Author Name:");
                if (author != null) {
                    library.addBook(title, author);
                }
            }
        });

        issueBookBtn.addActionListener(_ -> {
            String title = JOptionPane.showInputDialog(frame, "Enter Book Title to Issue:");
            if (title != null) library.issueBook(title);
        });

        returnBookBtn.addActionListener(_ -> {
            String title = JOptionPane.showInputDialog(frame, "Enter Book Title to Return:");
            if (title != null) library.returnBook(title);
        });

        listBooksBtn.addActionListener(_ -> {
            JTextArea textArea = new JTextArea(20, 30);
            textArea.setEditable(false);
            for (Book book : library.getBooks()) {
                textArea.append(book.toString() + "\n");
            }
            JOptionPane.showMessageDialog(frame, new JScrollPane(textArea), "Book List", JOptionPane.INFORMATION_MESSAGE);
        });

        logoutBtn.addActionListener(_ -> showLoginUI());
        exitBtn.addActionListener(_ -> System.exit(0));

        panel.add(addBookBtn);
        panel.add(issueBookBtn);
        panel.add(returnBookBtn);
        panel.add(listBooksBtn);
        panel.add(logoutBtn);
        panel.add(exitBtn);

        frame.setContentPane(panel);
        frame.setVisible(true);
    }
}
