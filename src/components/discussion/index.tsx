import DiscussionList from "./DiscussionList";

function Discussion(props: any) {
	return (
		<section className="rounded shadow p-5 dark:bg-slate-900 bg-slate-50 my-5">
			<h2 className="dark:text-white sm:text-lg">Discussion</h2>
			<div className="my-5 flex p-3">
				<img
					src="/images/google-logo.svg"
					className="w-10 h-10"
					alt="user avatar"
				/>
				<input
					type="text"
					placeholder="What do you think of this product?"
					id="name-input"
					className="outline-none  border-b border-b-slate-300 text-white dark:text-black bg-slate-200 dark:bg-slate-300 py-2 px-4 grow mx-10"
				/>
				<button
					type="submit"
					className="bg-secondary-dark hover:bg-secondary-light dark:bg-slate-800 dark:hover:bg-slate-600 text-white px-5 py-2 rounded self-center"
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					Reply
				</button>
			</div>
			<hr className="bg-slate-400 dark:bg-white" />
			<DiscussionList />
		</section>
	);
}

export default Discussion;
