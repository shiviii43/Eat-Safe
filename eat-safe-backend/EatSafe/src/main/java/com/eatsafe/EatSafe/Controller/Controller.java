package com.eatsafe.EatSafe.Controller;

import com.eatsafe.EatSafe.DTO.Model;
import com.eatsafe.EatSafe.Service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired
    private Service serviceObj;

    @PostMapping("/analyze")
    private String analyzeTheData(@RequestBody Model foodData){
        return serviceObj.analyzeFood(foodData);
    }
}
