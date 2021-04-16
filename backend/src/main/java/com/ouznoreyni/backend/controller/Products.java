package com.ouznoreyni.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api")
@AllArgsConstructor
public class Products {

    @GetMapping("products")
    public String allProducts() {
        return "Hello";
    }

    @PostMapping("products")
    public String addProduct() {
        return "product created";
    }
}
