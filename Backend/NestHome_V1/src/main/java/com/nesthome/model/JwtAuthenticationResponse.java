package com.nesthome.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class JwtAuthenticationResponse {
    private String token;
    private String email;
    private List<String> authorities;
}