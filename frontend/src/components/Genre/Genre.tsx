import React from 'react'
import './style.css'

interface GenreProps {
	name: string
}

const Genre = ({ name }: GenreProps) => {
	return (
		<div className="card genre">
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
			</div>
		</div>
	)
}

export default Genre
