import React from 'react'
import { Link } from 'react-router-dom'

interface BannerProps {
	mediaType: string
}

const Banner = ({ mediaType }: BannerProps) => {
	return (
		<div className="mb-5">
			<nav className="nav">
				<Link to={`/${mediaType}/trending`} className="nav-link active">
					Trending
				</Link>
				<Link to={`/${mediaType}/discover`} className="nav-link">
					Discover
				</Link>
				<Link to={`/${mediaType}/genres`} className="nav-link">
					Genres
				</Link>
			</nav>
		</div>
	)
}

export default Banner
