import React from 'react'
import { DEFAULT_IMAGE_URL, IMG_API_URL } from '../Movie/Movie'

export interface MovieDetailsProps {
	adult: boolean
	backdrop_path: string
	genres: Array<object>
	original_title: string
	overview: string
	poster_path: string
	release_date: string
	runtime: number
	title: string
	vote_average: number
	vote_count: number
}

const MovieDetails = ({
	poster_path,
	original_title,
	runtime,
	overview,
}: MovieDetailsProps) => {
	return (
		<div className="row">
			<div className="col-4">
				<img
					className="img-fluid img-thumbnail"
					style={{ height: 500 }}
					src={
						poster_path
							? IMG_API_URL + poster_path
							: DEFAULT_IMAGE_URL
					}
					alt={original_title}
				/>
			</div>
			<div className="col-8">
				<h2>{original_title}</h2>
				<div className="mt-3">
					<span style={{ fontWeight: 'bold' }}>Duration: </span>
					<span>{runtime} Min.</span>
				</div>
				<div className="mt-5">
					<h3>Overview</h3>
					<p style={{ fontSize: 16, textAlign: 'justify' }}>
						{overview}
					</p>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
