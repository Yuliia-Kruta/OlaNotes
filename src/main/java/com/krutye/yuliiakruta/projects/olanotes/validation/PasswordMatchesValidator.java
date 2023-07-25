package com.krutye.yuliiakruta.projects.olanotes.validation;

import com.krutye.yuliiakruta.projects.olanotes.dto.RegistrationDto;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, Object> {

    @Override
    public void initialize(PasswordMatches constraintAnnotation) {
    }
    @Override
    public boolean isValid(Object obj, ConstraintValidatorContext context) {

        RegistrationDto registrationDto = (RegistrationDto) obj;
        String password = registrationDto.getPassword();
        String confirmPassword = registrationDto.getConfirmPassword();

        // Return true if both password and confirmPassword are blank or null
        if (password == null && confirmPassword == null ||
                password != null && password.trim().isEmpty() && confirmPassword != null && confirmPassword.trim().isEmpty()) {
            return true;
        }

        // Return true if password and confirmPassword are equal
        return password != null && password.equals(confirmPassword);
    }
}