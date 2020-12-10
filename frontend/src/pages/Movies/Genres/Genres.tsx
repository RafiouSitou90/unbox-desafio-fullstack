import React from 'react'

import { Banner, GenreList, Title } from '../../../components'

const Genres = () => {
	return (
		<div className="container mt-5">
			<Banner mediaType="movies" />
			<Title title={'Movies genre list'} />
			<div className="genres-container mb-5">
				<GenreList mediaType="movies" />
			</div>
		</div>
	)
}

export default Genres
