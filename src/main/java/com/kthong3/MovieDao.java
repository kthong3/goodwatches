package com.kthong3;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

public class MovieDao implements Dao <Movie> {
    private List<Movie> movieList;

    public MovieDao() {
        Movie spiritedAway = new Movie("Spirited Away", "1995", 1);
        Movie ponyo = new Movie("Ponyo", "1993", 2);

        movieList = new LinkedList<>();
        movieList.add(spiritedAway);
        movieList.add(ponyo);
    }

    @Override
    public List<Movie> getAll() {
        return this.movieList;
    }

    @Override
    public Movie get(int id) {
               try {
                   return this.movieList.stream().filter(movie -> movie.getId().equals(id)).collect(Collectors.toList()).get(0);
               }
               catch (Exception e) {
                   throw new RuntimeException("movie does not exist");
               }
    }

    @Override
    public void update(Movie type) {
        throw new RuntimeException("not implemented");
    }

    @Override
    public void delete(Movie type) {
        throw new RuntimeException("not implemented");
    }
}
