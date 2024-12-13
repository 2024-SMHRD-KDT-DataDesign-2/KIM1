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

public class tbl_cd {

	private String region;
	private String stats_year;
	private String quarter;
	private String service_category;
	private String cd_name;
	private int survive;
	private double region_lat;
	private double region_lon;
	private double cd_lat;
	private double cd_lon;
	private LocalDateTime created_at;
	private LocalDateTime updated_at;
	
}
