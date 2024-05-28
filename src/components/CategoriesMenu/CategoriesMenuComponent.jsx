import React from "react";
import CategoryItem from "../CategoryItem/CategoryItemComponent";
import "./categoriesMenu.style.scss";

const CategoriesMenuComponent = ({categories}) => {
	
	return (
		<div className="categories-container">
			{categories.map((category, id) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default CategoriesMenuComponent;
