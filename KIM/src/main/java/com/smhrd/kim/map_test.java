package com.smhrd.kim;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class map_test {

   @GetMapping("/map")
   public String showMap() {
      return "map_test";
   }
   
}