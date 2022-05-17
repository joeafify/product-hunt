import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo.svg";

function Navbar() {
	return (
		<div className="container flex  justify-between py-3">
			<NavLink to="/">
				<img
					src={Logo}
					alt="logo"
					className="w-12 h-12 rounded-full bg-secondary-light/20 hover:animate-spin"
				/>
			</NavLink>
			<input
				type="search"
				placeholder="Search ..."
				id="search-bar"
				className="outline-none  border-b border-b-slate-300 bg-slate-100 py-2 px-4 w-1/3"
			/>
			<button className="transition bg-secondary-dark hover:bg-secondary-light text-white px-5 py-2  rounded self-center">
				Login
			</button>
		</div>
	);
}

export default Navbar;
