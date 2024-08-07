import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PlanetCard, SpeciesCard } from "../component/BoostrapCard";

export const MoreInfoPage = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const { id } = useParams();
	const [person, setPerson] = useState(null);
	const planets = store.Information.people.find((item, index) => index = params._id)
	console.log(store.Information)
	const extraData = store.ExtraData
	return (
		<div>
			{props.category == "people" ?
				(
				<h1>This is a person. {extraData.name}</h1>
			) : 
				props.category == "planets" ? 
				(<h1>this is a planet. {extraData.name}</h1>

				) :
				props.category == "species" ? (
				<h1>this is a species. {extraData.name}</h1>
			):
				"loading..."}
			{/* <h1>{person.name}</h1>
			<p>Height: {person.height}</p>
			<p>Mass: {person.mass}</p>
			<p>Hair Color: {person.hair_color}</p>
			<p>Skin Color: {person.skin_color}</p>
			<p>Eye Color: {person.eye_color}</p>
			<p>Birth Year: {person.birth_year}</p>
			<p>Gender: {person.gender}</p>
			<p>Homeworld: {person.homeworld}</p>
			<h1>{props.category}</h1> */}
		</div>
	);
};


