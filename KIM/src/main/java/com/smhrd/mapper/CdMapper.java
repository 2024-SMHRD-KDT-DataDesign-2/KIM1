package com.smhrd.mapper;

import java.util.List;

import com.smhrd.entity.tbl_cd;

public interface CdMapper {
	
	public List<tbl_cd> tbl_cd_list(String region, String service_category);

}
    