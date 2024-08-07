import React, { useContext, useEffect, useState, } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PeopleCard, PlanetCard, SpeciesCard } from "../component/BoostrapCard";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const eachPerson = store.Information.people.map((extraPersonInfo, index) => (
		<PeopleCard key={index} extraPersonInfo={extraPersonInfo} />
	))

	const eachPlanet = store.Information.planets.map((extraPlanetInfo, index) => (
		<PlanetCard key={index} extraPlanetInfo={extraPlanetInfo} />
	))
	const eachSpecies = store.Information.species.map((extraSpeciesInfo, index) => (
		<SpeciesCard key={index} extraSpeciesInfo={extraSpeciesInfo} />
	))
	return (
		<div>
			<button onClick={actions.getPlanets}>get Planets</button>
			<button onClick={actions.getSpecies}>get Species</button>
			<br />
			<button onClick={() => navigate("/moreinfo")}>get People Info</button>
			<button onClick={actions.getPlanetsInformation}>get Planets Info</button>
			<button onClick={actions.getSpeciesInformation}>get Species Info</button>
			<div className="mt-5">
				<h1>Characters</h1>
				<div class="scrollmenu d-flex">
					{eachPerson}
				</div>
			</div>
			<div>
				<h1>Planets</h1>
				<div class="scrollmenu d-flex">
					{eachPlanet}
				</div>
			</div>
			<div>
				<h1>Species</h1>
				<div class="scrollmenu d-flex">
					{eachSpecies}
				</div>
			</div>
		</div>
	)

}
