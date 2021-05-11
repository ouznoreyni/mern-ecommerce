package com.ouznoreyni.backend.controller;

import com.ouznoreyni.backend.model.Product;
import com.ouznoreyni.backend.model.User;
import com.ouznoreyni.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class UsersController {

    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<?> allUsers(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "3") int size) {
        try {
            List<User> users = new ArrayList<User>();

            Pageable pageable = PageRequest.of(page, size);
            Page<User> userPage = userRepository.findAll(pageable);

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

}
