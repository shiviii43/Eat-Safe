package com.eatsafe.EatSafe.DTO;

import lombok.Data;
import java.util.List;

@Data
public class FoodDTO {
    private String productName;
    private List<String> diseaseName;
}
