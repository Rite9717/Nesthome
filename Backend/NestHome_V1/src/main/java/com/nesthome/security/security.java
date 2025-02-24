package com.nesthome.security;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class security {

	@Bean
    public JdbcUserDetailsManager userDetailsManager(DataSource dataSource) {
        return new JdbcUserDetailsManager(dataSource);
    }

	SecurityFilterChain filterChain(HttpSecurity http) throws Exception
	{
		http.authorizeHttpRequests(configurer -> configurer
				.requestMatchers(HttpMethod.GET,"/api/students").hasRole("User")
				.requestMatchers(HttpMethod.GET,"/api/students/**").hasRole("User")
				.requestMatchers(HttpMethod.POST,"/api/students").hasRole("Professional")
				.requestMatchers(HttpMethod.PUT,"/api/students").hasRole("Professional")
				.requestMatchers(HttpMethod.DELETE,"/api/students/**").hasRole("ADMIN")
				);
		
		http.httpBasic(Customizer.withDefaults());
		http.cors(Customizer.withDefaults())
        .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		http.csrf(csrf->csrf.disable());
		return http.build();
	}


}
