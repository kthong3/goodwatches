package com.kthong3;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GoodWatches extends HttpServlet {
    @Override
    public void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        res.setContentType("application/json;charset=UTF-8");
        String uri = req.getRequestURI();
        System.out.println(uri);

        ServletOutputStream outputStream = res.getOutputStream();
        MovieDao movieDao = new MovieDao();

        Pattern pattern = Pattern.compile("movie\\/(\\d+)", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(uri);

        if (uri.equals("/movies")) {
            String moviesJSON = JsonConverter.parse(movieDao.getAll());
            outputStream.println(moviesJSON);
        } else if (matcher.find()) {
            System.out.println(matcher.group(1));
            Integer movieId = Integer.parseInt(matcher.group(1));
            String response;

            try {
                response = JsonConverter.parse(movieDao.get(movieId));
            }
            catch (Exception e){
                response = "{\"error\":\"movie with that id does not exist\"}";
            }
            outputStream.println(response);
        } else {
            outputStream.println("404");
        }
    }
}
