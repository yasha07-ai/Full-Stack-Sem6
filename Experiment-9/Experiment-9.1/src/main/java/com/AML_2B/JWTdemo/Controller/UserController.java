package com.AML_2B.JWTdemo.Controller;

import org.springframework.web.bind.annotation.*;

import com.AML_2B.JWTdemo.Entity.UserEntity;
import com.AML_2B.JWTdemo.Service.UserService;

@RestController
public class UserController {

    private final UserService userService;

    // 🔥 Manual constructor
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserEntity register(@RequestBody UserEntity user) {
        userService.addUser(user);
        return user;
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello !! Your JWT Authentication is Successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody UserEntity user) {
        return userService.verify(user);
    }
}