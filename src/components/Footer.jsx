import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
	return (
		<Box
			sx={{
				padding: '2rem',
				backgroundColor: 'primary.main',
				color: 'white',
				textAlign: 'center',
			}}
		>
			<Typography variant="h6">
				Powered by{' '}
				<a style={{ color: 'white' }} href="https://www.pexels.com">
					pexels.com
				</a>
			</Typography>
		</Box>
	);
}

export default Footer;
