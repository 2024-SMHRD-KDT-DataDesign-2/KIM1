package com.smhrd.mapper;

import java.util.List;

import com.smhrd.entity.tbl_rp_2;

public interface Rp2Mapper {
	
	public List<tbl_rp_2> tbl_rp_2_list(long lat, long lon);

}
