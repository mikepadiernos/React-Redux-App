import axios from 'axios';

export const FETCH_DATA       = "FETCH_DATA";
export const SET_ERROR        = "SET_ERROR";

export const getData = () => dispatch => {
	dispatch({ type: FETCH_DATA });
	setTimeout(() => {
		axios
			.get("https://www.drupal.org/api-d7/node.json?type=casestudy")
			.then(response => {
				console.log("Response: ", response);
			})
			.catch(error => {
				console.error("Error fetching data from api", error);
				dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
			})
	})
};