import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";
import SHOP_DATA from "../../shop-data.json";

export const Shop = () => {
	const {products} = useContext(ProductsContext)
	return (
		<div>
			{products.map(({ id, name }) => (
				<div>
					<h1>{name}</h1>
				</div>
			))}
		</div>
	);
};
