import React from 'react';
import { Link } from 'react-router-dom';
import {
	ImageListItem,
	ButtonGroup,
	Button,
	Box,
	Typography,
} from '@mui/material';

function Main({
	data,
	handleNextPage,
	handlePrevPage,
	currentPage,
	totalPages,
}) {
	if (!data || !data.photos) {
		return <div>Loading...</div>; // or any other loading indicator
	}

	const imagesArray = data.photos;

	return (
		<div>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
					gap: '16px', // Add gap between grid items
					margin: '1rem',
				}}
			>
				{imagesArray.map((image) => {
					return (
						<Link to={`/${image.id}`} key={image.id}>
							<img
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
								}}
								src={image.src.medium}
								alt={image.alt}
							/>
						</Link>
					);
				})}
			</Box>
			<Box
				sx={{
					color: 'primary.main',
					display: 'flex',
					gap: '1rem',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '1rem',
				}}
			>
				<ButtonGroup>
					<Button
						onClick={() => {
							handlePrevPage();
						}}
					>
						Previous Page
					</Button>
					<Button
						onClick={() => {
							handleNextPage();
						}}
					>
						Next Page
					</Button>
				</ButtonGroup>
				<Typography>
					{currentPage} / {totalPages}
				</Typography>
			</Box>
		</div>
	);
}

export default Main;
