package com.nesthome.dao;

import java.util.List;

import com.nesthome.entity.userdetails;

public interface dao {

	public List<userdetails> findall();
	void save(userdetails user);

}
