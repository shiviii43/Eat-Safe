package com.eatsafe.EatSafe.DTO;

import lombok.Data;
import java.util.List;

@Data
public class Model {
    private String product_name;
    private List<String> diseases_allergies;
}
