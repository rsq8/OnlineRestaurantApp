package com.servebyte.inc.restaurant.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servebyte.inc.restaurant.model.FoodSuplier;
import com.servebyte.inc.restaurant.model.Menu;
import com.servebyte.inc.restaurant.repository.FoodSuplierRepository;

@Service
public class FoodSuplierService {
	
	@Autowired
	private FoodSuplierRepository foodrepo;
	@Autowired
	private MenuService menuservice;
	
	public List<FoodSuplier> fetchKitchenList() {
		return foodrepo.findAll();
	}
	
	public FoodSuplier saveKitchen(FoodSuplier kitchen) {
		return foodrepo.save(kitchen);
	}
	
	public Optional<FoodSuplier> fetchKitchenById(String id){
		return foodrepo.findById(id);
	}
	
	public List<FoodSuplier> deleteKitchenById(String id) {
		//String result;
		//try {
			foodrepo.deleteById(id);
			return foodrepo.findAll();
		//	result = "Kitchen Deleted";
		//}
		//catch(Exception e) {
		//	result = "Error encountered";
		//}
		//return result;
	}
	
	public FoodSuplier addNewMenu(FoodSuplier kitchen, Menu menu) {
		 kitchen.addMenu(menu);
		 return kitchen;
		
	}
	
}
