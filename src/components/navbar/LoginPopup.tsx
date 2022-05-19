import Popup from "./Popup";

function LoginPopup(props: any) {
	return (
		<Popup {...props}>
			<h2 className="py-5 text-2xl font-bold text-secondary-dark">
				Welcome Customer
			</h2>
			<p className="font-light pb-6 w-1/2 text-center text-sm sm:text-xl">
				Et doloremque sapiente iusto quas sunt ut provident exercitationem.
				Error qui esse porro eos laudantium et ipsa quo error.
			</p>
			<button
				id="google-login-btn"
				className="flex px-5 py-2 rounded-3xl bg-red-600 hover:bg-red-700 text-white"
			>
				<img
					src="/images/google-logo.svg"
					alt="Google Logo"
					className="w-6 h-6"
				/>
				<span className="pl-2 font-bold">Login with Google</span>
			</button>
		</Popup>
	);
}

export default LoginPopup;
