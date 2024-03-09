import React, { useState } from 'react';
import { Typography, Box, Input, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header({ handleChange }) {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleButtonClick = () => {
		handleChange(inputValue); // Pass inputValue to the parent component
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignContent: 'center',
				padding: '2rem',
				backgroundColor: 'primary.main',
				color: 'white',
			}}
		>
			<Typography component="h1" variant="h4">
				<Link
					style={{
						textDecoration: 'none',
						color: 'inherit',
						marginRight: '1rem',
					}}
					to="/"
				>
					Pickture
				</Link>
			</Typography>

			<label htmlFor="search"></label>
			<Input
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					color: 'white',
				}}
				placeholder="Enter word"
				sx={{ width: '300px', marginRight: 'auto' }}
				autoComplete="true"
				type="text"
				name="search"
				id="search"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</Box>
	);
}

export default Header;
