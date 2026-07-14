package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Product;
import com.example.demo.repository.Productrepo;

@Service
public class ProductService {

	@Autowired
	private Productrepo productrepo;

	public List<Product> getAllProducts() {
		return productrepo.findAll();
	}

	public Product getProductById(Long id) {
		return productrepo.findById(id).orElse(null);
	}

	public Product addProduct(Product product) {
		return productrepo.save(product);
	}

	public Product updateProduct(Long id, Product updatedProduct) {
		Product existing = productrepo.findById(id).orElse(null);
		if (existing != null) {
			existing.setName(updatedProduct.getName());
			existing.setDescription(updatedProduct.getDescription());
			existing.setPrice(updatedProduct.getPrice());
			existing.setImageUrl(updatedProduct.getImageUrl());
			existing.setStock(updatedProduct.getStock());
			existing.setCategory(updatedProduct.getCategory());
			return productrepo.save(existing);
		}
		return null;
	}

	public void deleteProduct(Long id) {
		productrepo.deleteById(id);
	}
}