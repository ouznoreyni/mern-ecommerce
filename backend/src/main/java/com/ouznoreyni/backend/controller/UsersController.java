package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Product;
import com.ouznoreyni.backend.model.User;
import com.ouznoreyni.backend.repository.UserRepository;
import com.ouznoreyni.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UsersController {

    UserService userService;

    @GetMapping("/users")
    public ResponseEntity<?> allUsers(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "3") int size) {
        try {
            List<User> users = new ArrayList<User>();

            Pageable pageable = PageRequest.of(page, size);
            Page<User> userPage = userService.findAll(pageable);

            Map<String, Object> response = new HashMap<>();
            users=userPage.getContent();
            System.out.println(userPage.getContent());
            response.put("users", users );
            response.put("currentPage", userPage.getNumber());
            response.put("totalItems", userPage.getTotalElements());
            response.put("totalPages", userPage.getTotalPages());
            return  new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "internal error happen", e);
        }
    }

    @GetMapping("users/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Long id) {
        try {
            Optional<User> product = userService.findById(id);
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


    @PostMapping("/users")
    public ResponseEntity<?> register(@Validated @RequestBody User userData) throws Exception {
        try {
            Optional<?> user = userService.findByUsernameOrEmail(userData.getUsername(), userData.getEmail());
            if (!user.isEmpty()) {
                throw new Exception("Username or Email is already exist");
            }

        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect Data", e);
        }

        User userRegistered = userService.save(userData);

        return ResponseEntity.ok(userRegistered);

    }

}
