package com.kthong3;

import org.junit.jupiter.api.Test;

import java.util.LinkedList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class JsonConverterTest {
    @Test
    void shouldConvertMovieToJson() {
        // Given
        String expected  = "[{\"title\":\"Spirited Away\",\"releaseDate\":\"1995\"}]";
        List<Movie> movieList = new LinkedList<>();
        Movie movie = new Movie("Spirited Away","1995" );
        movieList.add(movie);
        // When

        String actual = JsonConverter.parse(movieList);
        // Then
        assertEquals(expected, actual);
    }
}
