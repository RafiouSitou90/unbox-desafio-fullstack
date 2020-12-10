import React, { useEffect, useState } from 'react'

import { api } from '../../services'
import Loading from '../Loading'
import Movie from '../Movie'

interface MovieListProps {
	mediaType: string
	movieType: string
}

const MovieList = ({ mediaType, movieType }: MovieListProps) => {
	const [movies, setMovies] = useState([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		api.get(`${mediaType}/${movieType}`).then((response) => {
			setMovies(response.data.results)
			console.log(response)
			setIsLoading(false)
		})
	}, [mediaType, movieType])

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			{movies.map((movie: any, index) => (
				<Movie key={index} {...movie} />
			))}
		</>
	)
}

export default MovieList
