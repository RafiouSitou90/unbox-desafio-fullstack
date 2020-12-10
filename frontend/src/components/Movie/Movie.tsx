import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export interface MovieProps {
	poster_path?: string
	adult: boolean
	overview: string
	release_date: string
	genre_ids: Array<number>
	id: number
	original_title: string
	original_language: string
	title: string
	backdrop_path?: string
	popularity: number
	vote_count: number
	video: boolean
	vote_average: number
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

const Movie = (movie: MovieProps) => {
	const { id, title, poster_path, vote_average, release_date } = movie
	return (
		<div className="card movie mx-auto mb-5">
			<Link to={`/movies/details/${id}`}>
				<img
					className="card-img-top"
					src={
						poster_path
							? IMG_API_URL + poster_path
							: DEFAULT_IMAGE_URL
					}
					alt={title}
				/>
			</Link>
			<div className="card-body">
				<h2 className="card-title movie-title">
					<Link to={`/movies/details/${id}`}>{title}</Link>
				</h2>
				<div className="movie-info">
					<p>{release_date}</p>
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

export default Movie
