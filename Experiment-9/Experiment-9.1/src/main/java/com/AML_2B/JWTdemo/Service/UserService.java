package com.AML_2B.JWTdemo.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.AML_2B.JWTdemo.Entity.UserEntity;
import com.AML_2B.JWTdemo.Repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final AuthenticationManager authManager;
    private final JwtService jwtService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    // 🔥 Manual constructor
    public UserService(UserRepository userRepository,
                       AuthenticationManager authManager,
                       JwtService jwtService,
                       BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.authManager = authManager;
        this.jwtService = jwtService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public UserEntity addUser(UserEntity user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String verify(UserEntity user) {
        Authentication auth =
                authManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                user.getUsername(),
                                user.getPassword()
                        )
                );

        if (auth.isAuthenticated()) {
            return jwtService.generateToken(user.getUsername());
        }
        return "failed";
    }
}