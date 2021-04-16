package com.ouznoreyni.backend.service;

import com.ouznoreyni.backend.config.SecurityConfig;
import com.ouznoreyni.backend.model.User;
import com.ouznoreyni.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {

    @Autowired
    UserRepository userRepository;
    private SecurityConfig securityConfig;

    public User save(User user) {
        user.setCreated(Instant.now());
        String passwordEncoded = securityConfig.passwordEncoder().encode(user.getPassword());
        user.setPassword(passwordEncoded);
        return userRepository.save(user);
    }

    public Optional<?> findByUsernameOrEmail(String username, String email) {
        Optional<User> user = userRepository.findByUsernameOrEmail(username, email);
        return user;
    }
}
