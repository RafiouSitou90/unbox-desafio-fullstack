import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to="/" className="navbar-brand">
					Movie App
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="/movies" className="nav-link">
								Movies{' '}
								<span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/series" className="nav-link">
								Series
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header
