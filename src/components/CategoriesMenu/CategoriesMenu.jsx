import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./categoriesMenu.style.scss";

const CategoriesMenu = ({categories}) => {
	
	return (
		<div className="categories-container">
			{categories.map((category, id) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default CategoriesMenu;
