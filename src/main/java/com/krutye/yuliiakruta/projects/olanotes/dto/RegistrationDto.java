package com.krutye.yuliiakruta.projects.olanotes.dto;

import com.krutye.yuliiakruta.projects.olanotes.validation.PasswordMatches;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@PasswordMatches
public class RegistrationDto {

    private Long id;
    @NotEmpty(message = "Username should not be empty")
    private String username;
    @NotEmpty(message = "First name should not be empty")
    private String firstName;
    @NotEmpty(message = "Last name should not be empty")
    private String lastName;
    @NotEmpty(message = "Email should not be empty")
    @Email
    private String email;
    @NotEmpty(message = "Password should not be empty")
    private String password;

    @NotEmpty(message = "Please confirm the password")
    private String confirmPassword;
}

