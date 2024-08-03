import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const MoreInfoPage = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const { id } = useParams();
	const [person, setPerson] = useState(null);
	useEffect(() => {
		const fetchPerson = async () => {
			const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
			const data = await response.json();
			console.log(data);
			setPerson(data.result.properties);
		};
		fetchPerson();
	}, [id]);

	if (!person) {
		return <div>Loading...</div>;
	}

	// const [peopleData, setPeopleData] = useState("")
	// useEffect(() => {
	// 	const personData = store.Information.people.find((person) => {
	// 		return person.uid.toString() === params.id
	// 	})
	// 	if (personData) {
	// 		setPeopleData({
	// 			name: personData.name || "",
	// 			birth_year: personData.birth_year || "",
	// 			gender: personData.gender || "",
	// 			height: personData.height || "",
	// 			uid: personData.uid || ""
	// 		});
	// 	}
	// }, [store.Information.people])

	// const info = store.Information.people.forEach(person => {
	// 	return

	return (
		<div>
			<h1>{person.name}</h1>
			<p>Height: {person.height}</p>
			<p>Mass: {person.mass}</p>
			<p>Hair Color: {person.hair_color}</p>
			<p>Skin Color: {person.skin_color}</p>
			<p>Eye Color: {person.eye_color}</p>
			<p>Birth Year: {person.birth_year}</p>
			<p>Gender: {person.gender}</p>
			<p>Homeworld: {person.homeworld}</p>
		</div>
	);
};
// return (
// 	<div className="">
// 		<image></image>
// 		<p>{props.extraPersonInfo.name}</p>
// 		<hr className="my-4" />

// 		<Link to="/">
// 			<span className="btn btn-primary btn-lg" href="#" role="button">
// 				Back home
// 			</span>
// 		</Link>
// 	</div>
// );
// };

