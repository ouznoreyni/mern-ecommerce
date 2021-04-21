package com.ouznoreyni.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/api")
@AllArgsConstructor
public class ProductsController {

    @GetMapping("products")
    public String allProducts() {
        return "Hello";
    }

    @GetMapping("products/{id}")
    public int getProduct(@PathVariable int id) {
        return id;
    }

    @PostMapping("products")
    public String addProduct() {
        return "product created";
    }

    @PutMapping("products/{id}")
    public int updateProduct(@PathVariable int id) {
        return id;
    }

    @DeleteMapping("products/{id}")
    public int deleteProduct(@PathVariable int id) {
        return id;
    }
}
