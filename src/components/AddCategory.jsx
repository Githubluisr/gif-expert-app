import { useState } from "react";
import  PropTypes  from 'prop-types' 

export const AddCategory = ( { newCategory } ) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length <= 0 ) return;

    newCategory(inputValue);
    setInputValue('');
  }

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input
				type="text"
				placeholder="Nueva categoria"
				value={inputValue}
				onChange={onInputChange}
			></input>
		</form>
	);
};

AddCategory.propTypes = {
	newCategory: PropTypes.func.isRequired
}
