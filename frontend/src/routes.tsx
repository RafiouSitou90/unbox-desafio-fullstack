import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components'
import { Details, Discover, Movies, Trending, Genres } from './pages'

const Routes = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Movies} />
				<Route path="/movies" exact component={Movies} />
				<Route path="/movies/details/:id" component={Details} />
				<Route path="/movies/discover" component={Discover} />
				<Route path="/movies/trending" component={Trending} />
				<Route path="/movies/genres" component={Genres} />
				{/*<Route path="/series" exact component={Series} />*/}
				{/*<Route path="/series/details/:id" component={Details} />*/}
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
