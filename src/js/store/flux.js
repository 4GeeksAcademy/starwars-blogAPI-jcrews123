class Information {
	constructor() {
		this.people = [];
		this.planets = [];
		this.species = [];
	}
}
class ExtraSpeciesInfo {
	constructor(resultFromServer) {
		const props = resultFromServer.properties
		this.classification = props.classification;
		this.designation = props.designation;
		this.average_height = props.average_height;
		this.average_lifespan = props.average_lifespan;
		this.hair_colors = props.hair_colors;
		this.skin_colors = props.skin_colors;
		this.eye_colors = props.eye_colors;
		this.homeworld = props.homeworld;
		this.name = props.name;
		this.language = props.language;
		this.people = Array.isArray(props.people) ? props.people : [];
		this.created = props.created;
		this.edited = props.edited;
		this.url = props.url;
		this.description = resultFromServer.description;
		this._id = resultFromServer._id;
		this.uid = resultFromServer.uid;
		this.__v = resultFromServer.__v;
	}
}
class ExtraPlanetInfo {
	constructor(resultFromServer) {
		const props = resultFromServer.properties;
		this.diameter = props.diameter;
		this.rotation_period = props.rotation_period;
		this.orbital_period = props.rotation_period;
		this.gravity = props.gravity;
		this.population = props.population;
		this.climate = props.climate;
		this.terrain = props.terrain;
		this.surface_water = props.surface_water;
		this.created = props.created;
		this.name = props.name;
		this.url = props.url;
		this.description = resultFromServer.description;
		this._id = resultFromServer._id;
		this.uid = resultFromServer.uid;
		this.__v = resultFromServer.__v;
	}
}
class ExtraPersonInfo {
	constructor(resultFromServer) {
		const props = resultFromServer.properties;
		this.height = props.height;
		this.mass = props.mass;
		this.hair_color = props.hair_color;
		this.skin_color = props.skin_color;
		this.eye_color = props.eye_color;
		this.birth_year = props.birth_year;
		this.gender = props.gender;
		this.created = props.created;
		this.edited = props.edited;
		this.name = props.name;
		this.homeworld = props.homeworld;
		this.url = props.url;
		this.description = resultFromServer.description;
		this._id = resultFromServer._id;
		this.uid = resultFromServer.uid;
		this.__v = resultFromServer.__v;
	}
}
class Result { // reusable
	fetchExtraPeopleInfo = async function () {
		try {
			const resp = await fetch(this.url, {
				method: "GET",
				headers: {
					"Content-type": "application/json"
				}
			})
			let data = await resp.json();
			console.log(data.result);
			const person = new ExtraPersonInfo(data.result);
			return person;
		} catch (error) {
			console.error("Error")
		}
	}
	fetchExtraPlanetInfo = async function () {
		try {
			const resp = await fetch(this.url, {
				method: "GET",
				headers: {
					"Content-type": "application/json"
				}
			})
			let data = await resp.json();
			console.log(data.result);
			const planet = new ExtraPlanetInfo(data.result);
			return planet;
		} catch (error) {
			console.error("Error")
		}
	}
	fetchExtraSpeciesInfo = async function () {
		try {
			const resp = await fetch(this.url, {
				method: "GET",
				headers: {
					"Content-type": "application/json"
				}
			})
			let data = await resp.json();
			console.log(data.result);
			const species = new ExtraSpeciesInfo(data.result);
			return species;
		} catch (error) {
			console.error("Error")
		}
	}
	constructor(resultFromServer) {
		this.url = resultFromServer.url;
		this.uid = resultFromServer.uid;
		this.name = resultFromServer.name;
	}
}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Information: new Information(),
			ExtraData: [],
			Favorites: [],
			dummy: 0,

		},
		actions: {
			learnMoreData: async(data) =>{
				try{
					setStore({ExtraData: data})
				} catch (error) {
					console.error("Error")
				}
			},
			addFavorites: async(data) =>{
				try {
					const store = getStore()
					store.Favorites.push(data)
					setStore(store)
				} catch (error) {
					console.error("Error")
				}
			},
			deleteFavorites: async(data) => {
				try {
					const store = getStore()
					const updatedList = 
					store.Favorites.filter((t, currentIndex) => data !== currentIndex)
					setStore({Favorites: updatedList})
				} catch (error) {
					
				}
			},
			getPeople: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people?page=1&limit=5", { //82
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					})
					if (!resp.ok) {
						throw new Error(`error status: ${resp.status}`)
					}
					let data = await resp.json()
					console.log(data.results)
					for (const resultFromServer of data.results) {
						const personResult = new Result(resultFromServer);
						const returnedExtraPeopleInfo = await personResult.fetchExtraPeopleInfo()
						getStore().Information.people.push(returnedExtraPeopleInfo)
					}
					setStore(getStore())
					// return getStore().Information.people
				} catch (error) {
					console.error("Error")
				}

			},
			getPlanets: async () => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/planets/?page=1&limit=5`, {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					})
					if (!resp.ok) {
						throw new Error(`error status: ${resp.status}`)
					}
					let data = await resp.json()
					console.log(data.results)
					for (const resultFromServer of data.results) {
						const planetResult = new Result(resultFromServer);
						const returnedExtraPeopleInfo = await planetResult.fetchExtraPlanetInfo()
						getStore().Information.planets.push(returnedExtraPeopleInfo)
					}
					setStore(getStore())
				} catch (error) {
					console.error("Error")
				}
			},
			getSpecies: async () => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/species/?page=1&limit=5`, {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					})
					if (!resp.ok) {
						throw new Error(`error status: ${resp.status}`)
					}
					let data = await resp.json()
					console.log(data.results)
					for (const resultFromServer of data.results) {
						const speciesResult = new Result(resultFromServer);
						const returnedExtraSpeciesInfo = await speciesResult.fetchExtraSpeciesInfo()
						getStore().Information.species.push(returnedExtraSpeciesInfo)
					}
					setStore(getStore())
				} catch (error) {
					console.error("Error")
				}
			},
		}
	}
};


export default getState;
