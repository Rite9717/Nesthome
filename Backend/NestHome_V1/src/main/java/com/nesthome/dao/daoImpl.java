package com.nesthome.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nesthome.entity.userdetails;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;
@Repository
public class daoImpl implements dao{
	
	@Autowired
	private EntityManager entitymanager;

	@Override
	public List<userdetails> findall() {
		TypedQuery<userdetails> query=entitymanager.createQuery("from userdetails",userdetails.class);
		List<userdetails> result=query.getResultList();
		return result;
	}

	@Override
	@Transactional
	public void save(userdetails user) {
		entitymanager.persist(user);
		
	}

}
