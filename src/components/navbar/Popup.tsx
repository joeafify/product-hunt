function Popup(props: any) {
	return (
		<section className="z-20 fixed w-full h-full top-0 left-0 bg-white dark:bg-slate-800 dark:text-white opacity-95 flex flex-col justify-center items-center">
			<button
				className="absolute top-4 left-4 rounded-full bg-slate-200 dark:text-white dark:bg-slate-900 dark:hover:bg-slate-600  w-12 h-12 flex justify-center items-center"
				onClick={(e) => {
					props.setPopupStatus(false);
				}}
			>
				<span className="material-symbols-outlined">close</span>
			</button>
			{props.children}
		</section>
	);
}

export default Popup;
