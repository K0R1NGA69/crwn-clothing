import React from "react";
import "./categoryItem.styles.scss";
const CategoryItem = ({ category : { title, imageUrl } }) => {
	return (
		<div className="category-container">
			<img className="background-image" src={imageUrl} alt={title} />

			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
