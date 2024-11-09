package com.GamBox.Project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class Security {
    private final UserDetailsService userDetailsService;

    public Security(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf(csrf -> {
      csrf.disable(); // Disable CSRF protection
    })
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/login").permitAll() // Allow access to login endpoint
            .requestMatchers("/v1/users/auth").permitAll() // Allow access to user-related endpoints
            .requestMatchers("/v1/users/register").permitAll() // Allow access to
            .requestMatchers("/v1/users/auth").permitAll()
            .requestMatchers("/v1/games/**").permitAll() // Allow access to all game-related endpoints
            .anyRequest().authenticated() // Require authentication for all other requests
        )
        .formLogin(AbstractHttpConfigurer::disable) // Disable form login
        .httpBasic(AbstractHttpConfigurer::disable) // Disable basic authentication
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Use stateless
        )
        .build();
  }

    @Bean
    public PasswordEncoder passwordEncoder() {return new BCryptPasswordEncoder();}

    @Bean
    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(this.userDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder);

        //
        return new ProviderManager(authenticationProvider);
    }

}