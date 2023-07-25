package com.krutye.yuliiakruta.projects.olanotes.controllers;

import com.krutye.yuliiakruta.projects.olanotes.dto.UserEntityDto;
import com.krutye.yuliiakruta.projects.olanotes.security.SecurityUtil;
import com.krutye.yuliiakruta.projects.olanotes.services.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user/edit")
    public String editUserAccountForm(Model model){
        String username = SecurityUtil.getSessionUser();
        UserEntityDto userDto = userService.findUserByUsername(username);
        model.addAttribute("user", userDto);
        return "user-profile-edit";
    }

    @PostMapping("/user/edit")
    public String updateUser(@ModelAttribute("user") UserEntityDto userDto){
        userService.updateUser(userDto);
        return "redirect:/notes";
    }
}
