package com.best.ftree;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import javax.validation.constraints.NotNull;

@SpringBootApplication
public class FtreeApplication {

	@NotNull
	protected SpringApplicationBuilder configure(@NotNull SpringApplicationBuilder application) {
		return application.sources(FtreeApplication.class);
	}

	public static void main(String... args) {
		SpringApplication.run(FtreeApplication.class);
	}
}
