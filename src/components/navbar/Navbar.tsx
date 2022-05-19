import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo.svg";
import LoginPopup from "./LoginPopup";
import PostPopup from "./PostPopup";
import ProfileMenu from "./ProfileMenu";

function Navbar(props: any) {
	const [popupStatus, setPopupStatus] = useState<boolean>(false);
	const [theme, setTheme] = useState<string>("dark");
	useEffect(() => {
		const getTheme = localStorage.getItem("theme");
		console.log(theme);

		if (getTheme === "light") {
			document.body.classList.remove("dark");
			setTheme("light");
		} else {
			document.body.classList.add("dark");
			setTheme("dark");
		}
		console.log(theme);
	}, [theme]);

	const toggleMode = () => {
		if (localStorage.theme === "light" || theme === "light") {
			document.body.classList.add("dark");
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.classList.remove("dark");
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<React.Fragment>
			<section className="dark:bg-slate-800">
				<div className="container flex justify-between items-center py-3">
					<NavLink to="/">
						<img
							src={Logo}
							alt="logo"
							className="w-12 h-12 rounded-full bg-secondary-light/20 dark:bg-transparent hover:animate-spin"
						/>
					</NavLink>
					<input
						type="search"
						placeholder="Search ..."
						id="search-bar"
						className="outline-none  border-b border-b-slate-300 bg-slate-100 py-2 px-4 w-1/3 grow mx-5 sm:grow-0"
					/>
					<div className="flex">
						{props.user ? (
							<React.Fragment>
								<button
									className="bg-secondary-dark hidden sm:block hover:bg-secondary-light dark:bg-slate-900 dark:hover:bg-slate-600 text-white px-5 py-2 mx-2 rounded self-center"
									onClick={() => {
										setPopupStatus(true);
									}}
								>
									New Post
								</button>
								<ProfileMenu setPopupStatus={setPopupStatus} />
							</React.Fragment>
						) : (
							<button
								className="bg-secondary-dark hover:bg-secondary-light dark:bg-slate-900 dark:hover:bg-slate-600 text-white px-5 py-2 mx-2 rounded self-center"
								onClick={() => {
									setPopupStatus(true);
								}}
							>
								Login
							</button>
						)}

						<button
							className="flex items-center justify-center rounded-full bg-slate-100 dark:text-white dark:bg-slate-900 dark:hover:bg-slate-600 w-10 h-10"
							onClick={toggleMode}
						>
							{theme === "light" ? (
								<span className="material-symbols-outlined">dark_mode</span>
							) : (
								<span className="material-symbols-outlined">light_mode</span>
							)}
						</button>
					</div>
				</div>
			</section>
			{popupStatus ? (
				props.user ? (
					<PostPopup setPopupStatus={setPopupStatus} />
				) : (
					<LoginPopup setPopupStatus={setPopupStatus} />
				)
			) : null}
		</React.Fragment>
	);
}

export default Navbar;
