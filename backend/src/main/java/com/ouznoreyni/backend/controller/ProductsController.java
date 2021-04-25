package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Image;
import com.ouznoreyni.backend.model.Product;
import com.ouznoreyni.backend.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.*;

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

    @PostMapping(value = "products", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Product> addProduct(@RequestParam("name") String name,
                                              @RequestParam("description") String description,
                                              @RequestParam("countInStock") int countInStock,
                                              @RequestParam("price") int price,
                                              @RequestParam("images") MultipartFile[] images
    ) throws IOException {
        try {
            List<Image> imagesProduct = new ArrayList<>();
            Product product = new Product();

            //upload images to blob
            Arrays.asList(images).stream().forEach(image -> {
                String fileName = StringUtils.cleanPath(image.getOriginalFilename());
                try {
                    Image imageProduct = new Image(fileName, image.getContentType(), image.getBytes());
                    imagesProduct.add(imageProduct);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });
            product.setName(name);
            product.setPrice(price);
            product.setDescription(description);
            product.setCountInStock(countInStock);
            product.setImages(imagesProduct);
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
