function DiscussionItem(props: any) {
	return (
		<div>
			<li className="my-5 flex p-3 items-start">
				<img
					src="/images/google-logo.svg"
					className="w-10 h-10"
					alt="user avatar"
				/>
				<p
					id="name-input"
					className="rounded bg-slate-200 dark:bg-slate-700 outline-none text-xs sm:text-sm dark:text-slate-300 py-2 px-4 grow mx-10"
				>
					Explicabo rem fugit omnis quis quisquam cum modi. Non omnis voluptas.
					Maxime maxime consequuntur inventore soluta iste ut velit repellat
					debitis.
				</p>
			</li>
		</div>
	);
}

export default DiscussionItem;
