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

public class tbl_rp_2 {

	private String region;
	private String stats_year;
	private long one_person_house;
	private long two_person_house;
	private long three_person_house;
	private long four_or_more_person_house;
	private double region_lat;
	private double region_lon;
	private LocalDateTime created_at;
	private LocalDateTime updated_at;
	
}
