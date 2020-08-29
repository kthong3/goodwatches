package com.kthong3;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class JsonConverter {

    static private Function<Movie, String> movieToJson = m -> String.format("{\"title\":\"%s\",\"releaseDate\":\"%s\"}", m.getTitle(), m.getReleaseDate());

    static public String parse(List<Movie> movieList) {
        String moviesJson = movieList
                .stream()
                .map(movieToJson)
                .collect(Collectors.joining(","));

        return String.format("[%s]", moviesJson);
    }
}
