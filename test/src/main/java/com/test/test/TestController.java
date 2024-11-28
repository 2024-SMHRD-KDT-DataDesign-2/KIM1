package com.test.test;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.test.entity.Test;
import com.test.mapper.TestMapper;

@Controller
public class TestController {

	@Autowired
	private TestMapper testMapper;
	
	@RequestMapping("/test")
	public String test(Model model) {
		
		List<Test> test = testMapper.testList();
		model.addAttribute("test", test);
		
		return "test";
	}
	
}
