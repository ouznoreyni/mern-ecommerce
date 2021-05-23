package com.ouznoreyni.backend.controller;


import com.ouznoreyni.backend.model.User;
import com.ouznoreyni.backend.model.UserCredential;
import com.ouznoreyni.backend.payload.request.RegisterRequest;
import com.ouznoreyni.backend.security.JwtProvider;
import com.ouznoreyni.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController()
@RequestMapping(value = "/api/auth")
@AllArgsConstructor
public class authenticationController {

    private UserService userService;

    PasswordEncoder passwordEncoder;

    private AuthenticationManager authenticationManager;

    private JwtProvider jwtProvider;

    private UserDetailsService userDetailsService;


    @PostMapping(value = "/register")
    public ResponseEntity<?> register(@Valid @RequestBody  User userData, BindingResult bindingResult) {
        System.out.println(userData);
        return new ResponseEntity<>("hello", HttpStatus.CREATED);
    }


    @PostMapping(value = "/login")
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
