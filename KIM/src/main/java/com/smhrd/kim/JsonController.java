package com.smhrd.kim;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.map_test;
import com.smhrd.mapper.MapMapper;

@RestController
public class JsonController {

   @Autowired
   private MapMapper mapMapper;
   
   @GetMapping("/places")
   public List<map_test> getPlaces() {
      List<map_test> places = mapMapper.mapList();
      return places;
   }
   
}
