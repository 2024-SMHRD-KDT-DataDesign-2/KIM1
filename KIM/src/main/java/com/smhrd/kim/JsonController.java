package com.smhrd.kim;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.entity.map_test;
import com.smhrd.entity.tbl_cd;
import com.smhrd.entity.tbl_dl;
import com.smhrd.entity.tbl_rp_1;
import com.smhrd.entity.tbl_rp_2;
import com.smhrd.entity.tbl_st;
import com.smhrd.mapper.CdMapper;
import com.smhrd.mapper.DlMapper;
import com.smhrd.mapper.MapMapper;
import com.smhrd.mapper.Rp1Mapper;
import com.smhrd.mapper.Rp2Mapper;
import com.smhrd.mapper.StMapper;

@RestController
public class JsonController {

	@Autowired
	private MapMapper mapMapper;
	@Autowired
	private StMapper stMapper;
	@Autowired
	private Rp2Mapper rp2Mapper;
	@Autowired
	private Rp1Mapper rp1Mapper;
	@Autowired
	private DlMapper dlMapper;
	@Autowired
	private CdMapper cdMapper;

	@GetMapping("/places")
	public List<map_test> getPlaces() {
		List<map_test> places = mapMapper.mapList();
		return places;
	}

	@GetMapping("/st")
	public List<tbl_st> getSalesTrend(long lat, long lon) {
		List<tbl_st> st = stMapper.tbl_st_list(lat, lon);
		return st;
	}

	@GetMapping("/rp2")
	public List<tbl_rp_2> getResPop2(long lat, long lon) {
		List<tbl_rp_2> rp2 = rp2Mapper.tbl_rp_2_list(lat, lon);
		return rp2;
	}

	@GetMapping("/rp1")
	public List<tbl_rp_1> getResPop1(long lat, long lon) {
		List<tbl_rp_1> rp1 = rp1Mapper.tbl_rp_1_list(lat, lon);
		return rp1;
	}

	@GetMapping("/dl")
	public List<tbl_dl> getDeepLearning(long lat, long lon) {
		List<tbl_dl> dl = dlMapper.tbl_dl_list(lat, lon);
		return dl;
	}

	@GetMapping("/cd")
	public List<tbl_cd> getCommDis() {
		
		List<tbl_cd> cd = cdMapper.tbl_cd_list(region, service_category);
		return cd;
	}

}
