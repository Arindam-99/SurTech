package project;

import java.io.*;
import java.util.*;

public class Library {
    private List<Book> books = new ArrayList<>();
    private static final String FILE_NAME = "books.txt";

    public Library() {
        loadBooks();
    }

    // Add a new book
    public void addBook(String title, String author) {
        books.add(new Book(title, author));
        saveBooks();
        showMessage(" Book added: " + title + " by " + author);
    }

    // Issue a book
    public void issueBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                if (!book.isIssued()) {
                    book.issue();
                    saveBooks();
                    showMessage(" Book issued: " + title);
                    return;
                } else {
                    showMessage(" Book already issued: " + title);
                    return;
                }
            }
        }
        showMessage(" Book not found: " + title);
    }

    // Return a book
    public void returnBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                if (book.isIssued()) {
                    book.returned();
                    saveBooks();
                    showMessage(" Book returned: " + title);
                    return;
                } else {
                    showMessage(" Book was not issued: " + title);
                    return;
                }
            }
        }
        showMessage(" Book not found: " + title);
    }

    // List of all books
    public void listBooks() {
        if (books.isEmpty()) {
            System.out.println(" No books in the library.");
        } else {
            for (Book book : books) {
                System.out.println(book);
            }
        }
    }

    // Support for UI to get book list
    public List<Book> getBooks() {
        return books;
    }

    // Save book list to file
    private void saveBooks() {
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            out.writeObject(books);
        } catch (IOException e) {
            showMessage(" Error saving books: " + e.getMessage());
        }
    }

    // Load books from file
    @SuppressWarnings("unchecked")
    private void loadBooks() {
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            books = (List<Book>) in.readObject();
        } catch (IOException | ClassNotFoundException e) {
            books = new ArrayList<>();
        }
    }

    // Optional: show message in both console and GUI
    private void showMessage(String message) {
        System.out.println(message); // console
        // GUI popups can call this if needed
    }
}
