package com.eatsafe.EatSafe.Controller;

import com.eatsafe.EatSafe.DTO.FoodDTO;
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

    @PostMapping("/v1/examine-product")
    private Object analyzeTheData(@RequestBody FoodDTO foodData){
        return serviceObj.analyzeFood(foodData);
    }
}
