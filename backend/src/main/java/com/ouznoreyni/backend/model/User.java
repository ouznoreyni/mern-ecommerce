package com.ouznoreyni.backend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column()
    @NotBlank(message = "firstName is required")
    private String firstName;

    @Column()
    @NotBlank(message = "lastName is required")
    private String lastName;

    @Column()
    @NotBlank(message = "Password is required")
    private String password;

    @Column(unique = true)
    @NotBlank(message = "Username is required")
    private String username;

    @Column(unique = true)
    @Email
    @NotEmpty(message = "Email is required")
    private String email;

    @Column()
    private Instant created;

    @Column()
    @NotNull
    @Value("false")
    private Boolean isAdmin;

}
