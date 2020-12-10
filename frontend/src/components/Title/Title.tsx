import React from 'react'

interface TitleProps {
	title: string
}

const Title = ({ title }: TitleProps) => {
	return (
		<div className="row mb-3">
			<div className="col-md-12 ml-3">
				<h3>{title}</h3>
			</div>
		</div>
	)
}

export default Title
