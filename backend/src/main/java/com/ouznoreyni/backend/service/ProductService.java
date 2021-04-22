package com.ouznoreyni.backend.service;

import com.ouznoreyni.backend.model.Product;
import com.ouznoreyni.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public Optional<Product> edit(Product data, Long id) {
        try {
            Optional<Product> product = productRepository.findById(id);

            return product;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "product does not exist");
        }

    }

    public void deletedById(Long id) {
        productRepository.deleteById(id);
    }

}
