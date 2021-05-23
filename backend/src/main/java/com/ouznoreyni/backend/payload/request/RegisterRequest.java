package com.ouznoreyni.backend.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "lastName is required")
    @Size(max = 30)
    private String firstName;

    @NotBlank(message = "lastName is required")
    @Size(max = 40)
    private String lastName;

    @NotBlank(message = "Password is required")
    @Size(min = 5, max = 50)
    private String password;

    @NotBlank(message = "Username is required")
    @Size(min = 5, max = 50)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email()
    private String email;

    @NotNull
    @Value("false")
    private Boolean isAdmin;
}
