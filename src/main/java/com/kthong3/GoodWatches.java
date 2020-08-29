package com.kthong3;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


public class GoodWatches extends HttpServlet {
    @Override
    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
        res.setContentType("application/json;charset=UTF-8");

        ServletOutputStream outputStream = res.getOutputStream();
        outputStream.println("hello world");



    }

    public  convertMapToJson() {
        ObjectMapper mapperObj = new ObjectMapper();
        Map<String, String> inputMap = new HashMap<String, String>();
        inputMap.put("Title", "Spirited Away");
        inputMap.put("Release Date", "1995");
        // convert map to JSON String
        try {
            String jsonResp = mapperObj.writeValueAsString(inputMap);
            System.out.println(jsonResp);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
