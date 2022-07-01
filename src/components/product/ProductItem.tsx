import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../../models/Product";

export function ProductItem(props: any) {
	const [product, setProduct] = useState<Product | any>({});
	useEffect(() => {
		setProduct(props.product);
	}, [props.product]);

	const { id, name, description, media, upvote, maker } = product;
	return (
		<div className=" relative flex flex-row flex-wrap sm:flex-nowrap mb-5 xl:mb-0 shadow p-5 rounded bg-slate-50 dark:bg-slate-900 dark:shadow-slate-700 hover:shadow-lg hover:-translate-y-0.5 hover:-translate-x-0.5 sm:basis-1/2">
			<div className="basis-1/2-1/4 sm:basis-0 text-gray-700 dark:text-white flex flex-col justify-center items-center order-2 sm:order-1 grow">
				<span
					className="material-symbols-outlined cursor-pointer"
					onClick={() => {
						setProduct({
							...product,
							upvote:
								product.upvote - props.product.upvote === 1
									? product.upvote
									: product.upvote + 1,
						});
					}}
				>
					expand_less
				</span>
				<span>{upvote}</span>
				<span
					className="material-symbols-outlined cursor-pointer"
					onClick={() => {
						setProduct({
							...product,
							upvote:
								props.product.upvote - product.upvote === 1
									? product.upvote
									: product.upvote - 1,
						});
					}}
				>
					expand_more
				</span>
			</div>
			<img
				src={media}
				alt={name}
				className="basis-1/2 sm:basis-0 w-32 h-32 inline object-cover sm:mx-5 sm:self-center border p-0.5 hover:backdrop-blur-sm sm:order-1"
			/>
			<div className="order-3">
				<NavLink to={"/product/" + id}>
					<h4 className="text-xl font-bold text-gray-700 dark:text-white inline-block mt-4 sm:mt-0">
						{name && name}
					</h4>
				</NavLink>
				<p className="text-sm my-1 text-slate-600 dark:text-white">
					{description?.length > 150
						? description.substring(0, 150) + "..."
						: description}
				</p>
				<div className="flex mt-2">
					<img
						src={maker?.avatar}
						alt={maker?.name}
						className="rounded-full h-12 w-12 object-cover mr-2 italic border p-0.5"
					/>
					<h5 className="text-gray-500 italic self-center dark:text-white">
						{maker?.name}
					</h5>
				</div>
			</div>
			<NavLink
				to={"/product/" + id}
				className="absolute right-2 top-2 z-10 text-gray-700 dark:text-white"
			>
				<span className="material-symbols-outlined">north_east</span>
			</NavLink>
		</div>
	);
}

export default ProductItem;
