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

public class tbl_st {

	private String region;
	private String stats_year;
	private String service_category;
	private String quarter;
	private long sales_mon;
	private long sales_tue;
	private long sales_wed;
	private long sales_thur;
	private long sales_fri;
	private long sales_sat;
	private long sales_sun;
	private long sales_10;
	private long sales_20;
	private long sales_30;
	private long sales_40;
	private long sales_50;
	private long sales_60;
	private long sales_00_06;
	private long sales_06_11;
	private long sales_11_14;
	private long sales_14_17;
	private long sales_17_21;
	private long sales_21_24;
	private long sales_male;
	private long sales_female;
	private double region_lat;
	private double region_lon;
	private LocalDateTime created_at;
	private LocalDateTime updated_at;
	
}
