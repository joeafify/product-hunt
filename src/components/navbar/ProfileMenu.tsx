import { useState } from "react";

function ProfileMenu(props: any) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="relative">
			<img
				src="/images/google-logo.svg"
				className="w-10 h-10 block mx-2"
				alt="user avatar"
				onMouseOver={() => {
					setShowMenu(true);
				}}
				onMouseLeave={() => {
					setShowMenu(false);
				}}
			/>
			{showMenu && (
				<ul
					onMouseOver={() => {
						setShowMenu(true);
					}}
					onMouseLeave={() => {
						setShowMenu(false);
					}}
					className="absolute text-sm w-36 z-20 top-10 right-0  sm:-left-2 bg-white  dark:bg-slate-600 dark:text-white rounded-sm overflow-hidden"
				>
					<li
						onClick={() => {
							props.setPopupStatus(true);
						}}
						className="px-5 py-2 hover:bg-secondary-dark hover:text-white duration-500 sm:hidden cursor-pointer"
					>
						New Post
					</li>
					<li className="px-5 py-2 hover:bg-secondary-dark hover:text-white duration-500 cursor-pointer">
						Profile
					</li>
					<li className="px-5 py-2 hover:bg-secondary-dark hover:text-white duration-500 cursor-pointer">
						Logout
					</li>
				</ul>
			)}
		</nav>
	);
}

export default ProfileMenu;
