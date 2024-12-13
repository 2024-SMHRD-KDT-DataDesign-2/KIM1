package com.smhrd.mapper;

import java.util.List;

import com.smhrd.entity.tbl_st;

public interface StMapper {
	
	List<tbl_st> tbl_st_list(long lat, long lon);

}
