import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../../services'
import { Loading, MovieDetails } from '../../../components'
import { MovieDetailsProps } from '../../../components/MovieDetails/MovieDetails'

interface MovieParams {
	id: string
}

const Details = () => {
	const { id } = useParams<MovieParams>()

	const [movie, setMovie] = useState<MovieDetailsProps | null>(null)

	useEffect(() => {
		api.get(`movies/${id}`).then((response) => {
			setMovie(response.data)
		})
	}, [id])

	if (!movie) {
		return <Loading />
	}

	return (
		<div className="container">
			<div className="mt-5">
				<MovieDetails {...movie} />
			</div>
		</div>
	)
}

export default Details
