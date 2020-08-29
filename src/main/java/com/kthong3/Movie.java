package com.kthong3;

public class Movie {
    private String title;
    private String releaseDate;

    public Movie(String title, String releaseDate) {
        this.title = title;
        this.releaseDate = releaseDate;
    }

    public String getTitle() {
        return title;
    }

    public String getReleaseDate() {
        return releaseDate;
    }
}


