package com.GamBox.Project.config;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class EnvConfig {
  private final Dotenv dotenv = Dotenv.load();

  @Bean
  public String dbUsername() {
    return dotenv.get("DB_USERNAME");
  }

  @Bean
  public String dbPassword() {
    return dotenv.get("DB_PASSWORD");
  }
}
