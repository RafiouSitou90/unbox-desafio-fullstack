import React from 'react'

import { Banner, GenreList, Title } from '../../../components'

const Genres = () => {
	return (
		<div className="container mt-5">
			<Banner mediaType="series" />
			<Title title={'Series genre list'} />
			<div className="genres-container mb-5">
				<GenreList mediaType="series" />
			</div>
		</div>
	)
}

export default Genres
