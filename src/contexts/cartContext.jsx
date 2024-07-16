import { createContext, useState } from "react";

export const CartContext = createContext({
	isOpen: Boolean,
	setIsOpen: () => null,
	items: [],
	setItems: () => null,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [items, setItems] = useState([]);
	const value = {
		isCartOpen,
		setIsCartOpen,
		items,
		setItems,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
