package com.devsuperior.movieflix.dto;

import java.util.ArrayList;
import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;

public class MovieDTO {
	
	private Long id;
	
	@NotBlank(message = "Titulo obrigatório")
	private String title;
	private String subTitle;
	
	@Positive(message = "Não pode ser um valor negativo")
	private Integer year;
	private String imgUrl;
	private String synopsis;
	
	private Long genreId;
	
	private List<ReviewDTO> reviews  = new ArrayList<>();
;
	
	public MovieDTO() {
		
	}
	
	public MovieDTO(Long id, String title, String subTitle, Integer year, String imgUrl, String synopsis) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.year = year;
		this.imgUrl = imgUrl;
		this.synopsis = synopsis;
	}
	
	public MovieDTO(Movie entity) {
		id = entity.getId();
		title = entity.getTitle();
		subTitle = entity.getSubTitle();
		year = entity.getYear();
		imgUrl = entity.getImgUrl();
		genreId = entity.getGenre().getId();
	}
	
	public MovieDTO(Movie entity,  List<Review> reviews) {
		this(entity);
		synopsis = entity.getSynopsis();
		reviews.forEach(review -> this.reviews.add( new ReviewDTO(review)));
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public Long getGenreId() {
		return genreId;
	}

	public List<ReviewDTO> getReviews() {
		return reviews;
	}
}
