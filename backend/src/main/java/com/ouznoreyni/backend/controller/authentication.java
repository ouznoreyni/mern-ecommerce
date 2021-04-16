package com.ouznoreyni.backend.controller;


import com.ouznoreyni.backend.model.User;
import com.ouznoreyni.backend.model.UserCredential;
import com.ouznoreyni.backend.security.JwtProvider;
import com.ouznoreyni.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController()
@RequestMapping("/api/auth")
@AllArgsConstructor
public class authentication {

    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/register")
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
        Map<String, String> token = generateToken(userRegistered.getUsername());

        return ResponseEntity.ok(token);

    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated @RequestBody UserCredential userCredential) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(userCredential.getUsername(), userCredential.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }

        Map<String, String> token = generateToken(userCredential.getUsername());

        return ResponseEntity.ok(token);
    }


    private Map<String, String> generateToken(String username) {
        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(username);

        final String jwt = jwtProvider.generateToken(userDetails);

        Map<String, String> token = new HashMap<String, String>();
        token.put("token", jwt);

        return token;
    }
}
