import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cartContext";

import "./styles.scss";

const CartIcon = () => {
	const { setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen((prev) => !prev);

	return (
		<div className="cart-icon-container">
			<ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
			<span className="item-count">0</span>
		</div>
	);
};

export default CartIcon;
