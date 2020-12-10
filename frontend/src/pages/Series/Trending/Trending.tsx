import React from 'react'
import { Banner, MovieList } from '../../../components'

const Trending = () => {
	return (
		<div className="container mt-5">
			<Banner mediaType="series" />
			<div className="movies-container">
				<MovieList mediaType="movies" movieType="trending" />
			</div>
		</div>
	)
}

export default Trending
