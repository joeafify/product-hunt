import Popup from "./Popup";

function PostPopup(props: any) {
	return (
		<Popup {...props}>
			<h2 className="py-5 hidden sm:block text-xl font-bold text-secondary-dark dark:text-white w-1/2 text-center italic before:content-['\201C'] after:content-['\201D']">
				Once you have permission to talk to someone, finding new products or
				services for them is a smart way to grow.
			</h2>
			<form>
				<div className="w-full mb-2">
					<label
						className="text-secondary-dark dark:text-white"
						htmlFor="name-input"
					>
						Name
					</label>
					<input
						type="text"
						placeholder="ex: (Practical Steel Keyboard)"
						id="name-input"
						className="outline-none  border-b border-b-slate-300 bg-slate-300 py-2 px-4 w-full"
					/>
				</div>
				<div className="w-full">
					<label
						className="text-secondary-dark dark:text-white"
						htmlFor="description-input"
					>
						Description
					</label>
					<textarea
						rows={5}
						placeholder="ex: (Explicabo rem fugit omnis quis quisquam cum modi. Non omnis voluptas.)"
						id="description-input"
						className="outline-none  border-b border-b-slate-300 bg-slate-300 py-2 px-4 w-full"
					></textarea>
				</div>
				<div className="w-full mb-2">
					<label
						className="text-secondary-dark dark:text-white"
						htmlFor="image-url-input"
					>
						Image URL
					</label>
					<input
						type="tel"
						placeholder="ex: (https://......)"
						id="image-url-input"
						className="outline-none  border-b border-b-slate-300 bg-slate-300 py-2 px-4 w-full"
					/>
				</div>
				<button
					type="submit"
					className="bg-secondary-dark hover:bg-secondary-light dark:bg-slate-900 dark:hover:bg-slate-600 text-white px-5 py-2 rounded self-center"
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					Add
				</button>
			</form>
		</Popup>
	);
}

export default PostPopup;
