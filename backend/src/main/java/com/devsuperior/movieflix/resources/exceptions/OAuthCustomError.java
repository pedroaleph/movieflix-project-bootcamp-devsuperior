package com.devsuperior.movieflix.resources.exceptions;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OAuthCustomError  implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String Error;
	
	@JsonProperty("error_description")
	private String ErrorDescription;

	public OAuthCustomError() {
		
	}

	public OAuthCustomError(String error, String errorDescription) {
		super();
		Error = error;
		ErrorDescription = errorDescription;
	}

	public String getError() {
		return Error;
	}

	public void setError(String error) {
		Error = error;
	}

	public String getErrorDescription() {
		return ErrorDescription;
	}

	public void setErrorDescription(String errorDescription) {
		ErrorDescription = errorDescription;
	}
	
	

}
