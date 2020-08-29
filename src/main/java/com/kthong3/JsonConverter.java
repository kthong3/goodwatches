package com.kthong3;

import java.util.List;
import java.util.stream.Collectors;

public class JsonConverter {

    static public String parse(List<Movie> movieList) {
        return "[" + movieList
                .stream()
                .map(m -> "{\"title\":\"" + m.getTitle() + "\",\"releaseDate\":\"" + m.getReleaseDate()+ "\"}")
                .collect(Collectors.joining(",")) + "]";
    }
}
