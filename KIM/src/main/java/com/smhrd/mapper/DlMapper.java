package com.smhrd.mapper;

import java.util.List;

import com.smhrd.entity.tbl_dl;

public interface DlMapper {
	
	public List<tbl_dl> tbl_dl_list(long lat, long lon);

}
