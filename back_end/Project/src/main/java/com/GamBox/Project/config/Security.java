package com.GamBox.Project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class Security {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http.csrf(csrf -> {
      csrf.disable(); // Disable CSRF protection
    })
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/login").permitAll() // Allow access to login endpoint
            .requestMatchers("/v1/users/auth").permitAll() // Allow access to user-related endpoints
            .requestMatchers("/v1/users/register").permitAll() // Allow access to user-related endpoints
            .requestMatchers("/v1/games/**").permitAll() // Allow access to all game-related endpoints
            .anyRequest().authenticated() // Require authentication for all other requests
        )
        .cors((Customizer.withDefaults())) // Enable CORS support
        .formLogin(AbstractHttpConfigurer::disable) // Disable form login
        .httpBasic(AbstractHttpConfigurer::disable) // Disable basic authentication
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS) // Use stateless
        )
        .build();
  }
}
// @Bean
// SecurityFilterChain securityFilterChainA(HttpSecurity http) throws Exception
// {
// return http.csrf(csrf -> {
// csrf.disable();
// })
// .authorizeHttpRequests(auth -> auth
// .requestMatchers(new AntPathRequestMatcher("/login")).permitAll()
// .requestMatchers(new AntPathRequestMatcher("/api/v1/user/**")).permitAll() //
// permit all requests to login
// .requestMatchers(new AntPathRequestMatcher("/api/v1/user")).permitAll()//
// permit all requests to login
// .anyRequest().authenticated()// all other requests require authentication
// )
// .cors(withDefaults())
// .formLogin(AbstractHttpConfigurer::disable)
// .httpBasic(AbstractHttpConfigurer::disable)
// .oauth2ResourceServer(oAuth -> oAuth.jwt(withDefaults()))
// .sessionManagement(session ->
// session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
// .build();
//
// }
