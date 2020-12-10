import React from 'react'

import { DEFAULT_IMAGE_URL, IMG_API_URL } from '../Movie/Movie'

export interface MovieDetailsProps {
	adult: boolean
	backdrop_path: string
	genres: Array<object>
	original_title: string
	original_name: string
	overview: string
	poster_path: string
	release_date: string
	runtime: number
	episode_run_time: Array<number>
	title: string
	vote_average: number
	vote_count: number
}

const MovieDetails = ({
	poster_path,
	original_title,
	original_name,
	runtime,
	episode_run_time,
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
					alt={!original_title ? original_name : original_title}
				/>
			</div>
			<div className="col-8">
				<h2>{!original_title ? original_name : original_title}</h2>
				<div className="mt-3">
					<span style={{ fontWeight: 'bold' }}>Duration: </span>
					<span>
						{!runtime
							? !episode_run_time
								? 0
								: episode_run_time[0]
							: runtime}{' '}
						Min.
					</span>
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
