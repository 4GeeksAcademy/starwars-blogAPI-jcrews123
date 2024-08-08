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
					<div>
						<h1>This page is for {extraData.name}</h1>
						<p>Name: {extraData.name}</p>
						<p>Birth Year: {extraData.birth_year}</p>
						<p>Gender: {extraData.gender}</p>
						<p>Height: {extraData.height}</p>
						<p>Skin Color: {extraData.skin_color}</p>
						<p>Eye Color: {extraData.eye_color}</p>
					</div>
				) :
				props.category == "planets" ?
					(
						<div>
							<h1>This page is for {extraData.name}</h1>
							<p>Name: {extraData.name}</p>
							<p>Climate: {extraData.climate}</p>
							<p>Population: {extraData.population}</p>
							<p>Orbital Period: {extraData.orbital_period}</p>
							<p>Rotation Period: {extraData.rodation_period}</p>
							<p>Diameter: {extraData.diameter}</p>
						</div>
					) :
					props.category == "species" ?
						(
							<div>
								<h1>This page is for {extraData.name}</h1>
								<p>Name: {extraData.name}</p>
								<p>Classification: {extraData.classification}</p>
								<p>Average Height: {extraData.average_height}</p>
								<p>Average Lifespan: {extraData.average_lifespan}</p>
								<p>Language: {extraData.language}</p>
								<p>Homeworld: {extraData.homeworld}</p>
							</div>
						) :
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


