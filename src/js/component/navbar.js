import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);
	const Favorites = store.Favorites
	console.log(props)
	// console.log(Favorites?.ExtraPersonInfo)
	// console.log(Favorites?.ExtraPersonInfo.ExtraPersonInfo)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {Favorites.length}
						</button>
						<ul class="dropdown-menu dropdown-menu-end">
							{Favorites?.map((name, index) => (
								<div key={index}>
								<Link class="dropdown-item align-middle" href={(`/${name.category}/moreinfo/ + ${index}`)}>{name.name} </Link><button className="fa fa-trash" onClick={()=> actions.deleteFavorites(index)}></button>
								</div>
	))}
						</ul>
					</div>
			</div>
		</nav>
	);
};
