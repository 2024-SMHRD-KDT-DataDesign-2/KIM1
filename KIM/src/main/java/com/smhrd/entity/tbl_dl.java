package com.smhrd.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class tbl_dl {

	private String region;
	private String service_category;
	private String dl_result;
	private String pre_feature1;
	private String pre_feature2;
	private String pre_feature3;
	private double region_lat;
	private double region_lon;
	private double cd_lat;
	private double cd_lon;
	private LocalDateTime created_at;
	private LocalDateTime updated_at;
	
}
