package com.servebyte.inc.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servebyte.inc.restaurant.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, String> {

}
