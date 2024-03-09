import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({ handleChange }) {
	return (
		<div style={{ margin: '0' }}>
			<Header handleChange={handleChange} />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
