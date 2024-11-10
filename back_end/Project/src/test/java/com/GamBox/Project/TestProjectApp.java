package com.GamBox.Project;

import org.springframework.boot.SpringApplication;

public class TestProjectApp {
    public static void main(String[] args) {
        SpringApplication.from(ProjectApplication::main).with(TestcontainersConfiguration.class).run(args);
    }
}
