import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Box, Typography, ButtonGroup, Button } from '@mui/material';

function Image({ data }) {
	if (!data || !data.photos) {
		return <p>Loading...</p>;
	}

	const params = useParams();
	const photosArray = data.photos;

	const clickedPhoto = photosArray.find((photo) => {
		return params.id == photo.id;
	});

	function handleDownload(src) {
		window.open(src, '_blank');
	}

	return (
		<Box sx={{ display: 'flex', gap: '3rem', margin: '1rem' }}>
			<a href={clickedPhoto.url} target="_blank">
				<img src={clickedPhoto.src.large} alt={clickedPhoto.alt} />
			</a>

			<Box
				sx={{
					marginTop: '5rem',
					display: 'flex',
					flexDirection: 'column',
					gap: '3rem',
				}}
			>
				<Typography variant="h5" gutterBottom>
					<a
						style={{ textDecoration: 'none' }}
						href={clickedPhoto.photographer_url}
						target="_blank"
						className="MuiTypography-colorPrimary MuiLink-underlineNone" // Adding class for primary color
					>
						Photographer : {clickedPhoto.photographer}
					</a>
				</Typography>
				<ButtonGroup variant="contained" orientation="vertical">
					<Button
						onClick={() =>
							handleDownload(clickedPhoto.src.original)
						}
					>
						Download Original Size ({clickedPhoto.width} X{' '}
						{clickedPhoto.height})
					</Button>
					<Button
						onClick={() => handleDownload(clickedPhoto.src.large)}
					>
						Download Large Size
					</Button>
					<Button
						onClick={() => handleDownload(clickedPhoto.src.medium)}
					>
						Download Medium Size{' '}
					</Button>
				</ButtonGroup>
				<Button>
					<Link
						to="/"
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						Back
					</Link>
				</Button>
			</Box>
		</Box>
	);
}

export default Image;
