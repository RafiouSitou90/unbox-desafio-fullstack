import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components'
import {
	Movies,
	Series,
	MoviesDetails,
	MoviesTrending,
	MoviesDiscover,
	MoviesGenres,
	SeriesTrending,
	SeriesDiscover,
	SeriesDetails,
	SeriesGenres,
} from './pages'

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Movies} />
				<Route path="/movies" exact component={Movies} />
				<Route path="/movies/details/:id" component={MoviesDetails} />
				<Route path="/movies/discover" component={MoviesDiscover} />
				<Route path="/movies/trending" component={MoviesTrending} />
				<Route path="/movies/genres" component={MoviesGenres} />
				<Route path="/series" exact component={Series} />
				<Route path="/series/details/:id" component={SeriesDetails} />
				<Route path="/series/discover" component={SeriesDiscover} />
				<Route path="/series/trending" component={SeriesTrending} />
				<Route path="/series/genres" component={SeriesGenres} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
