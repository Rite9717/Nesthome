package com.nesthome.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nesthome.dao.dao;
import com.nesthome.entity.userdetails;

@RestController
@RequestMapping("/api")
public class controller {
	
	@Autowired
	private dao dao;
	
	
	@GetMapping("/hello")
	public String hello()
	{
		return "Hello from NestHome";
	}
	
	@GetMapping("/findall")
	public List<userdetails> findall()
	{
		return dao.findall();
	}
	
	@PostMapping("/adduser")
	public ResponseEntity<Map<String, String>> newUser(@RequestBody userdetails entity) {
	    dao.save(entity);
	    return ResponseEntity.ok(Collections.singletonMap("message", "User added successfully"));
	}


}
