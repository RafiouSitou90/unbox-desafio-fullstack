import React, { useState, useEffect } from 'react'
import { api } from '../../services'
import Genre from '../Genre'
import Loading from '../Loading'

interface GenreListProps {
	mediaType: string
}

interface GenreType {
	id: number
	name: string
}

const GenreList = ({ mediaType }: GenreListProps) => {
	const [genres, setGenres] = useState<Array<GenreType>>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		setIsLoading(true)
		api.get(`${mediaType}/genres`).then((response) => {
			setGenres(response.data.genres)
			setIsLoading(false)
		})
	}, [mediaType])

	if (isLoading) {
		return <Loading />
	}

	return (
		<>
			{genres.map((genre: GenreType, index) => (
				<Genre key={index} {...genre} />
			))}
		</>
	)
}

export default GenreList
