import { useState } from "react";

export const AddCategory = ( { setCategory } ) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	};

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length <= 0 ) return;

    setCategory(inputValue);
    //console.log('limpiando');
    setInputValue('');
  }

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Nueva categoria"
				value={inputValue}
				onChange={onInputChange}
			></input>
		</form>
	);
};
