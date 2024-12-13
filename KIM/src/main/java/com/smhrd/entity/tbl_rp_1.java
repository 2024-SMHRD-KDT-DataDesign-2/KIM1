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

public class tbl_rp_1 {

	private String region;
	private String stats_year;
	private char gender;
	private long p_10s;
	private long p_20s;
	private long p_30s;
	private long p_40s;
	private long p_50s;
	private long p_60s_above;
	private double region_lat;
	private double region_lon;
	private LocalDateTime created_at;
	private LocalDateTime updated_at;
	
}
