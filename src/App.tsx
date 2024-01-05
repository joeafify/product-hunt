import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/product/ProductDetails";
import ProductList from "./components/product/ProductList";
import { Product } from "./models/Product";
import HomePage from "./pages/HomePage";

function App() {
	const [products] = useState<Product[]>([
		{
			id: 1,
			name: "Generic Granite Fish nn",
			link: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			media:
				"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			upvote: 169,
			description:
				"Dicta aut quidem assumenda distinctio. Rerum beatae ducimus quae libero possimus enim. Doloribus fugit corrupti enim similique soluta. Sunt debitis maiores facere vero aliquam aut quo voluptatibus. Omnis rerum accusamus suscipit deleniti numquam ut. Enim voluptas odio error quis culpa explicabo velit dignissimos.",
			maker: {
				name: "Donald Yundt",
				avatar:
					"https://namesfrog.com/wp-content/uploads/2022/02/pexels-david-floyd-5366443-1.jpg",
			},
		},
		{
			id: 2,
			name: "Small Metal Bacon",
			link: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			media:
				"https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			upvote: 58,
			description:
				"Explicabo rem fugit omnis quis quisquam cum modi. Non omnis voluptas. Maxime maxime consequuntur inventore soluta iste ut velit repellat debitis.",
			maker: {
				name: "Jeannette Kertzmann",
				avatar:
					"https://images.pexels.com/photos/6001342/pexels-photo-6001342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			},
		},
		{
			id: 4,
			name: "Practical Steel Keyboard",
			link: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			media:
				"https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			upvote: 58,
			description:
				"Explicabo rem fugit omnis quis quisquam cum modi. Non omnis voluptas. Maxime maxime consequuntur inventore soluta iste ut velit repellat debitis.",
			maker: {
				name: "Alexander Russel",
				avatar:
					"https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
			},
		},
		{
			id: 3,
			name: "Refined Fresh Cheese",
			link: "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			media:
				"https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			upvote: 169,
			description:
				"Dicta aut quidem assumenda distinctio. Rerum beatae ducimus quae libero possimus enim. Doloribus fugit corrupti enim similique soluta. Sunt debitis maiores facere vero aliquam aut quo voluptatibus. Omnis rerum accusamus suscipit deleniti numquam ut. Enim voluptas odio error quis culpa explicabo velit dignissimos.",
			maker: {
				name: "Cecil Wilderman MD",
				avatar:
					"https://images.pexels.com/photos/6059991/pexels-photo-6059991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			},
		},
	]);
	return (
		<Routes>
			<Route path="/" element={<HomePage />}>
				<Route path="/" element={<ProductList products={products} />} />
				<Route
					path="product/:id"
					element={<ProductDetails products={products} />}
				/>
			</Route>
			<Route
				path="*"
				element={
					<section className="flex flex-col justify-center items-center h-screen text-secondary-dark">
						<h1 className=" text-9xl font-bold animate-bounce">404</h1>
						<p className="font-light text-4xl">Page not found!</p>
						<NavLink to="/" className="my-10 underline">
							Go to home page
						</NavLink>
					</section>
				}
			/>
		</Routes>
	);
}

export default App;
