import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";


export const PeopleCard = (props) => {
  const navigate = useNavigate()
  return (
    <div className="card col-12 col-md" style={{ minWidth: "400px" }}>
      <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${props.extraPersonInfo.uid}.jpg`} alt="Card image" style={{ maxHeight: "450px", maxWidth: "300px" }} />
      <div className="card-body text-left">
        <h4 className="card-title">{props.extraPersonInfo.name}</h4>
        <p className="card-text">Gender: {props.extraPersonInfo.gender}</p>
        <p className="card-text">Hair Color: {props.extraPersonInfo.hair_color}</p>
        <p className="card-text">Eye-Color: {props.extraPersonInfo.eye_color}</p>
        <a href="#" className="btn btn-primary" onClick={() => navigate("/moreinfo/" + `${props.extraPersonInfo.uid}`)}>Learn more!</a>
        <a href="#" className="btn btn-primary">heart</a>
      </div>
    </div>
  )
}
export const PlanetCard = (props) => {
  return (
    <div className="card col-12 col-md" style={{ minWidth: "400px" }}>
      <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${props.extraPlanetInfo.uid}.jpg`} alt="Card image" />
      <div className="card-body text-left">
        <h4 className="card-title">{props.extraPlanetInfo.name}</h4>
        <p className="card-text">Population: {props.extraPlanetInfo.population}</p>
        <p className="card-text">Terrain: {props.extraPlanetInfo.terrain}</p>
        <a href="#" className="btn btn-primary" onClick={() => navigate("/moreinfo/" + `${props.extraPlanetInfo.uid}`)}>Learn more!</a>
        <a href="#" className="btn btn-primary">heart</a>
      </div>
    </div>
  )
}
export const SpeciesCard = (props) => {
  return (
    <div className="card col-12 col-md" style={{ minWidth: "400px" }}>
      <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/species/${props.extraSpeciesInfo.uid}.jpg`} alt="Card image" />
      <div className="card-body text-left">
        <h4 className="card-title">{props.extraSpeciesInfo.name}</h4>
        <p className="card-text">Language: {props.extraSpeciesInfo.language}</p>
        <p className="card-text">Home World: {props.extraSpeciesInfo.home_world}</p>
        <p className="card-text">Classification: {props.extraSpeciesInfo.classification}</p>
        <a href="#" className="btn btn-primary">Learn more!</a>
        <a href="#" className="btn btn-primary">heart</a>
      </div>
    </div>
  )
}