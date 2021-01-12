package com.servebyte.inc.restaurant.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.servebyte.inc.restaurant.model.FoodSuplier;
import com.servebyte.inc.restaurant.model.Menu;
import com.servebyte.inc.restaurant.repository.FoodSuplierRepository;
import com.servebyte.inc.restaurant.repository.MenuRepository;

@Service
public class MenuService {
	
	@Autowired
	private MenuRepository menurepo;
	
	public List<Menu> fetchMenuList(){
		return menurepo.findAll();	
	}
	
	public Menu saveMenuToDb(Menu menu) {
		return menurepo.save(menu);
	}
	
	public Optional<Menu> fetchMenuById(String id) {
		return menurepo.findById(id);
	}
	
	public String deleteMenuById(String id) {
		String result;
		try {
			menurepo.deleteById(id);
			result = "Menu Item successfully deleted";
			
		}catch(Exception e) {
			result = "There is no menu with id: " + id;
		}
		
		return result;
	
	}
	
	
	
	

}
