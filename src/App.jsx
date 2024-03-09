import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Main from './components/Main';
import Image from './components/Image';
import Layout from './components/Layout';

function App() {
	const apiKey = '4fl6wJU1NYnWisfleysa9hw3dd9NKBJap0CR429LBZ52gZpoBGhJvwu4';
	let url = '';
	const [data, setData] = useState({});
	const [searchedTerm, setSearchedTerm] = useState('nature');
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	// fetch api
	useEffect(() => {
		const fetchData = async () => {
			url = `https://api.pexels.com/v1/search?query=${searchedTerm}&per_page=15&page=${currentPage}`;
			const res = await axios(url, {
				headers: {
					Authorization: apiKey,
				},
			});
			setData(res.data);
			setTotalPages(
				Math.ceil(res.data.total_results / res.data.per_page)
			);
		};
		fetchData();
	}, [searchedTerm, currentPage]);

	// handle searched term
	function handleSearch(value) {
		setSearchedTerm(value);
		setCurrentPage(1);
	}

	// handle next page
	function handleNextPage() {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	}

	// handle previous page
	function handlePrevPage() {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout handleChange={handleSearch} />}
				>
					<Route
						index
						element={
							<Main
								data={data}
								handleNextPage={handleNextPage}
								handlePrevPage={handlePrevPage}
								currentPage={currentPage}
								totalPages={totalPages}
							/>
						}
					/>
					<Route path="/:id" element={<Image data={data} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
