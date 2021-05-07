package com.ouznoreyni.backend.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class CheckIsExist {

    public static Map<String, String> checkValue(Optional<?> item, String name, Long id) {
        if (item.isEmpty()) {
            Map<String, String> errorMessage = new HashMap<String, String>();
            errorMessage.put("message", name + " with id " + id + " does not exist");
            return errorMessage;
        }
        return new HashMap<>();
    }
}
