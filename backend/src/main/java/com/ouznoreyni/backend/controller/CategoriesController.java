package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Category;
import com.ouznoreyni.backend.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

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
}
