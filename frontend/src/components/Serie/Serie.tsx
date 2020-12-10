import React from 'react'
import { Link } from 'react-router-dom'

import '../Movie/style.css'

interface SerieData {
	poster_path?: string
	adult: boolean
	overview: string
	first_air_date: string
	genre_ids: Array<number>
	id: number
	original_name: string
	original_language: string
	name: string
	backdrop_path?: string
	popularity: number
	vote_count: number
	video: boolean
	vote_average: number
}

export interface MovieProps {
	movie: SerieData
	mediaType: string
}

export const IMG_API_URL = 'https://image.tmdb.org/t/p/w1280'
export const DEFAULT_IMAGE_URL =
	'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'

const setVoteClassName = (vote: number) => {
	if (vote >= 8) {
		return 'success'
	} else if (vote >= 6) {
		return 'warning'
	} else {
		return 'danger'
	}
}

const Serie = ({ movie, mediaType }: MovieProps) => {
	const { id, name, poster_path, vote_average, first_air_date } = movie
	return (
		<div className="card movie mx-auto mb-5">
			<Link to={`/${mediaType}/details/${id}`}>
				<img
					className="card-img-top"
					src={
						poster_path
							? IMG_API_URL + poster_path
							: DEFAULT_IMAGE_URL
					}
					alt={name}
				/>
			</Link>
			<div className="card-body">
				<h2 className="card-title movie-title">
					<Link to={`/series/details/${id}`}>{name}</Link>
				</h2>
				<div className="movie-info">
					<p>{first_air_date}</p>
					<span
						className={`tag tag-${setVoteClassName(vote_average)}`}
					>
						{vote_average}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Serie
