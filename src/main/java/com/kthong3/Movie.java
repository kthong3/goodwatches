package com.kthong3;

public class Movie {
    private String title;
    private String releaseDate;
    private  Integer id;

    public Movie(String title, String releaseDate, Integer id) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.id = id;
    }

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

    public Integer getId() {
        return id;
    }
}


