import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Dart Vader']);

	const onAddCategory = (newCategory) => {
		//Valida que no exista
		if (
			categories.findIndex(
				(item) => item.toLowerCase().trim() === newCategory.toLowerCase().trim()
			) >= 0
		)
			return;


		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>Gif App</h1>

			<AddCategory setCategory={onAddCategory} />

			
			{ categories.map( (category) => (
					<GifGrid 
						key= {category} 
						category = {category}
					/>
					
				))
			}
			<div className='clear-fix'></div>
			
		</>
	);
};
