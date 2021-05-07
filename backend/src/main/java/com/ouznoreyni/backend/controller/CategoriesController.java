package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Category;
import com.ouznoreyni.backend.service.CategoryService;
import com.ouznoreyni.backend.utils.CheckIsExist;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class CategoriesController {

    @Autowired
    CategoryService categoryService;

    @GetMapping(path = "/categories")
    public ResponseEntity<Map<String, Object>> getAll(@RequestParam(defaultValue = "0") int page,
                                                      @RequestParam(defaultValue = "3") int size) {
        try {
            Page<Category> categoriesPages = categoryService.findAll(PageRequest.of(page, size));
            Map<String, Object> response = new HashMap<>();
            response.put("categories", categoriesPages.getContent());
            response.put("currentPage", categoriesPages.getNumber());
            response.put("totalItems", categoriesPages.getTotalElements());
            response.put("totalPages", categoriesPages.getTotalPages());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(path = "/categories/{id}")
    public ResponseEntity<?> getCategory(@PathVariable("id") Long id) {
        try {
            Optional<Category> category = categoryService.findById(id);
            Map<String, String> response = CheckIsExist.checkValue(category, "category", id);
            if (response.isEmpty()) {
                return new ResponseEntity<>(category, HttpStatus.OK);
            }
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
