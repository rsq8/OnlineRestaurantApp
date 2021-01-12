package com.servebyte.inc.restaurant.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class FoodSuplier {
	
	@Id
	private String id;
	private String name;
	
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "rm_fk", referencedColumnName = "id")
	private List<Menu> menu = new ArrayList<>();
	
	public FoodSuplier() {}
	

	public FoodSuplier(String id, String name) {
		this.id = id;
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Menu> getMenu() {
		return menu;
	}

	public void setMenu(List<Menu> menu) {
		this.menu = menu;
	}
	
	public void addMenu(Menu item) {
		menu.add(item);
	}
	
	public void removeMenu(Menu item) {
		menu.remove(item);
	}
	
	

}
