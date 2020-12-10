import React from 'react'
import { Banner, MovieList } from '../../../components'

const Discover = () => {
	return (
		<div className="container mt-5">
			<Banner mediaType="series" />
			<div className="movies-container">
				<MovieList mediaType="series" movieType="discover" />
			</div>
		</div>
	)
}

export default Discover
