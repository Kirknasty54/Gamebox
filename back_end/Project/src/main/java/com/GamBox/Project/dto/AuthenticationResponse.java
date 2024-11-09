package com.GamBox.Project.dto;

import lombok.Getter;

public class AuthenticationResponse {
    @Getter
    private String userEmail;
    @Getter
    private boolean authenticated;

    public AuthenticationResponse(String userEmail, boolean authenticated) {
        this.userEmail = userEmail;
        this.authenticated = authenticated;
    }
}
