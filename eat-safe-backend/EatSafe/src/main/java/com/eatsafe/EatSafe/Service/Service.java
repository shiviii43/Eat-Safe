package com.eatsafe.EatSafe.Service;

import com.eatsafe.EatSafe.DTO.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;

@org.springframework.stereotype.Service
public class Service {

    @Value("${openai.api.key}")
    private String apiKey;

    @Autowired
    private RestTemplate restTemplate;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public Object analyzeFood(Model foodData){
        try{
            String prompt = """
                    You are a food safety assistant .
                   \s
                    Product :%s
                    Allergies and Diseases: %s
                   \s
                    Respond only in valid JSON:
                    {
                      "status":"safe|caution|unsafe",
                      "issues": ["..."],
                      "reason" : "Short Explanation"
                    }                    \s
                   \s""".formatted(
                            foodData.getProduct_name(),
                            foodData.getDiseases_allergies()
                    );

            String url = "https://api.openai.com/v1/chat/completions";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.setBearerAuth(apiKey);

            String body = """
            {
              "model":"gpt-4o-mini",
              "messages":[
                {
                    "role":"user",
                    "content": "%s"
                }
              ]
            }  
            """.formatted(prompt);
            HttpEntity<String> entity = new HttpEntity<>(body,headers);

            ResponseEntity<String> response =
                    restTemplate.postForEntity(url,entity,String.class);

            JsonNode root = objectMapper.readTree(response.getBody());
            String content = root
                    .path("choices")
                    .get(0)
                    .path("message")
                    .path("content")
                    .asText();

            JsonNode cleanJson = objectMapper.readTree(content);
            return cleanJson;
        }catch(Exception e){
            return new ErrorResponse("error","Failed to analyze the product");
        }
    }
    static class ErrorResponse{
        public String status;
        public String message;

        public ErrorResponse(String status, String message){
            this.status = status;
            this.message = message;
        }
    }
}
