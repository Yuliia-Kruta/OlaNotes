package com.krutye.yuliiakruta.projects.olanotes.controllers;

import com.krutye.yuliiakruta.projects.olanotes.dto.RegistrationDto;
import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.services.UserService;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;


@Controller
public class AuthController {
    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public String homePage(){
        return "home-page";
    }

    @GetMapping("/register")
    public String getRegistrationForm(Model model){
        RegistrationDto regUserDto = new RegistrationDto();
        model.addAttribute("user", regUserDto);
        return "sign-up";
    }

    private boolean hasBlankFields(BindingResult result) {
        List<FieldError> fieldErrors = result.getFieldErrors();
        for (FieldError fieldError : fieldErrors) {
            if (fieldError.getRejectedValue() == null || fieldError.getRejectedValue().toString().trim().isEmpty()) {
                return true;
            }
        }
        return false;
    }
    @PostMapping("/register/save")
    public String register(@Valid @ModelAttribute("user") RegistrationDto regUserDto, BindingResult result, Model model){
        UserEntityDto existingUserByUsername = userService.findUserByUsername(regUserDto.getUsername());

        if(existingUserByUsername != null){
            result.rejectValue("username", null,
                    "There is already an account registered with the same username");
            model.addAttribute("usernameError", "Username already taken.");
        }

        UserEntityDto existingUserByEmail = userService.findUserByEmail(regUserDto.getEmail());
        if(existingUserByEmail != null){
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
            model.addAttribute("emailError", "Account with this email already exists.");
        }

        if(result.hasErrors()){
            if(result.hasGlobalErrors()) {
                model.addAttribute("passwordMismatchError", "Passwords do not match.");
            }
            if (hasBlankFields(result)) {
                model.addAttribute("blankFieldError", "Please fill in the required fields.");
            }

            model.addAttribute("user", regUserDto);
            return "sign-up";
        }
        userService.saveUser(regUserDto);
        return "redirect:/login?success";
    }

    @GetMapping("/login")
    public String getLoginForm(){
        return "sign-in";
    }
}
