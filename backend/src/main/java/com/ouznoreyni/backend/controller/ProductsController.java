package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Category;
import com.ouznoreyni.backend.model.Product;
import com.ouznoreyni.backend.repository.CategoryRepository;
import com.ouznoreyni.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@RestController()
@RequestMapping("/api")
@AllArgsConstructor
public class ProductsController {

    @Autowired
    ProductService productService;

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("products")
    public ResponseEntity<?> allProducts(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "3") int size) {
        try {
            List<Product> products = new ArrayList<Product>();

            Pageable pageable = PageRequest.of(page, size);
            Page<Product> productsPage = productService.getAll(pageable);

            Map<String, Object> response = new HashMap<>();
            products=productsPage.getContent();
            System.out.println(productsPage.getContent());
            response.put("products", products );
            response.put("currentPage", productsPage.getNumber());
            response.put("totalItems", productsPage.getTotalElements());
            response.put("totalPages", productsPage.getTotalPages());
            return  new ResponseEntity<>(response, HttpStatus.OK);
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
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "AN error happen when adding a product", e);
        }
    }

    @PostMapping(value = "products", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Product> addProduct(@RequestParam("name") String name,
                                              @RequestParam("description") String description,
                                              @RequestParam("countInStock") int countInStock,
                                              @RequestParam("price") int price,
                                              @RequestParam("image") MultipartFile image,
                                              @RequestParam("categoryId") long categoryId
    ) {
        try {
            System.out.println(categoryId);
            Optional<Category> category = categoryRepository.findById(categoryId);
            System.out.println(category.get().getName());

            /*if (category.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "category not found");
            }

             */
            Product product = new Product();
            product.setName(name);
            product.setPrice(price);
            product.setDescription(description);
            product.setCountInStock(countInStock);
            product.setImage(image.getBytes());
            product.setCategory(category.get());
            Product savedProduct = productService.save(product);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "AN error happen when adding a product", e);
        }

    }

    @PutMapping("products/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product data, @PathVariable Long id) {
        try {
            Product product = productService.edit(data, id);
            return new ResponseEntity<>(product, HttpStatus.OK);

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
