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
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
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

    @PostMapping(path = "/categories")
    public ResponseEntity<?> createCategory(@Validated @RequestBody Category category, BindingResult bindingResult) {
        try {
            if (bindingResult.hasErrors()) {
                List<FieldError> errors = bindingResult.getFieldErrors();
                Map<String, Object> response = new HashMap<>();
                for (FieldError e : errors) {
                    response.put(e.getField(), e.getDefaultMessage());
                }
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

            } else {
                Category categorySaved = categoryService.save(category);
                return new ResponseEntity<>(categorySaved, HttpStatus.CREATED);
            }

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "An error happen when adding a category");
        }

    }

    @PutMapping(path = "/categories/{id}")
    public ResponseEntity<?> editCategory(@PathVariable("id") Long id, @Validated @RequestBody Category data, BindingResult bindingResult) {
        try {
            Optional<Category> category = categoryService.findById(id);
            Map<String, String> categoryExist = CheckIsExist.checkValue(category, "category", id);
            if (categoryExist.containsKey("message")) {
                return new ResponseEntity<>(categoryExist, HttpStatus.NOT_FOUND);
            }
            if (bindingResult.hasErrors()) {
                List<FieldError> errors = bindingResult.getFieldErrors();
                Map<String, Object> response = new HashMap<>();
                for (FieldError e : errors) {
                    response.put(e.getField(), e.getDefaultMessage());
                }
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

            } else {
                category.get().setName(data.getName());
                Category categoryEdited = categoryService.save(category.get());
                return new ResponseEntity<>(categoryEdited, HttpStatus.CREATED);
            }

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "An error happen when editing a category");
        }

    }

    @DeleteMapping(path = "/categories/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        try {
            categoryService.deletedById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "An error happen when deleting a category", e);
        }
    }
}
