import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import { Product } from "../../models/Product";

function ProductList({ products }: { products: Product[] }) {
	const [productItems, setProductItems] = useState<Product[]>([]);
	useEffect(() => {
		setProductItems(products);

		return () => {
			setProductItems([]);
		};
	}, [products]);

	return (
		<React.Fragment>
			<h2 className="text-3xl text-gray-700 dark:text-white mt-5 mb-10 font-light uppercase text-center tracking-widest">
				Our Hunted Products
			</h2>
			<div className="flex flex-col xl:grid xl:grid-cols-2 xl:gap-5">
				{productItems &&
					productItems.map((product: Product) => (
						<ProductItem product={product} key={product.id} />
					))}
			</div>
		</React.Fragment>
	);
}

ProductList.propTypes = {
	products: PropTypes.array,
};

export default ProductList;
