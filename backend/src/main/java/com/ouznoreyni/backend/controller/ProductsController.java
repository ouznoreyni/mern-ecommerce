package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Product;
import com.ouznoreyni.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController()
@RequestMapping("/api")
@AllArgsConstructor
public class ProductsController {

    @Autowired
    ProductService productService;

    @GetMapping("products")
    public List<Product> allProducts() {
        try {
            return productService.getAll();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "internal error happen", e);
        }
    }

    @GetMapping("products/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id) {
        try {
            Optional<Product> product = productService.findById(id);
            if (product.isEmpty()) {
                Map<String, String> errorMessage = new HashMap<String, String>();
                errorMessage.put("message", "product with id " + id + " does not exist");
                return new ResponseEntity<>(errorMessage, HttpStatus.NOT_FOUND);
            }
            return
                    new ResponseEntity<>(product, HttpStatus.OK);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "AN error happen when adding a product", e);
        }
    }

    @PostMapping("products")
    public ResponseEntity<Product> addProduct(@Validated @RequestBody Product data) {
        try {
            Product product = productService.save(data);
            return new ResponseEntity<>(product, HttpStatus.CREATED);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "AN error happen when adding a product", e);
        }

    }

    @PutMapping("products/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product data, @PathVariable Long id) {
        try {
            Optional<Product> product = productService.edit(data, id);
            return new ResponseEntity<>(product.get(), HttpStatus.OK);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "AN error happen when updating a product", e);
        }
    }

    @DeleteMapping("products/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        try {
            productService.deletedById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "AN error happen when deleting a product", e);
        }
    }
}
