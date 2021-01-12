package com.servebyte.inc.restaurant.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.servebyte.inc.restaurant.model.Menu;
import com.servebyte.inc.restaurant.services.MenuService;

@RestController
public class KitchenRestController {
	
	@Autowired
	private MenuService mservice;
	
	@GetMapping("/getmenulist")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Menu> fetchMenuList(){
		List<Menu> menu = new ArrayList<Menu>();
		menu = mservice.fetchMenuList();
		return menu;
	}
	
	@PostMapping("/addmenu")
	@CrossOrigin(origins = "http://localhost:4200")
	public Menu saveMenu(@RequestBody Menu menu){
		return mservice.saveMenuToDb(menu);
	}
	
	@GetMapping("/getmenubyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Menu fetchMenuById(@PathVariable String id){
		return mservice.fetchMenuById(id).get();
		
	}
	
	@DeleteMapping("/deletemenubyid/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public String deleteMenuById(@PathVariable String id){
		return mservice.deleteMenuById(id);
		
	}

}
