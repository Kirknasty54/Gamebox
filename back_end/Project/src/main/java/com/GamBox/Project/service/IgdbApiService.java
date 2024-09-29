package com.GamBox.Project.service;

import okhttp3.*;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import io.github.cdimascio.dotenv.Dotenv;

@Service
public class IgdbApiService {
  private Dotenv dotenv = Dotenv.load();

  private String clientId = dotenv.get("vey05tu4xnhs3jotww4x9xn7umbcya");
}
