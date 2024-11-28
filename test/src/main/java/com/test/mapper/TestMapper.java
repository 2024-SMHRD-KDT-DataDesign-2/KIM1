package com.test.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.test.entity.Test;

@Mapper
public interface TestMapper {
	
	public List<Test> testList();
	
}
