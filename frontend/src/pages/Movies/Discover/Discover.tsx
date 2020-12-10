import React from 'react'
import { Banner, MovieList } from '../../../components'

const Discover = () => {
	return (
		<div className="container mt-5">
			<Banner mediaType="movies" />
			<div className="movies-container">
				<MovieList mediaType="movies" movieType="discover" />
			</div>
		</div>
	)
}

export default Discover
