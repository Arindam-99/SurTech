package project;

import java.io.Serializable;

public class Book implements Serializable {
    private String title;
    private String author;
    private boolean isIssued;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isIssued = false;
    }

    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public boolean isIssued() { return isIssued; }

    public void issue() { isIssued = true; }
    public void returned() { isIssued = false; }

    @Override
    public String toString() {
        return title + " by " + author + " - " + (isIssued ? "Issued" : "Available");
    }
}
