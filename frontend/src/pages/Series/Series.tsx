import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Banner, Loading, Serie, Title } from '../../components'
import { api } from '../../services'

interface SearchFormData {
	search: string
}

const Series = () => {
	const { register, handleSubmit, formState } = useForm()
	const { isSubmitting } = formState
	const [movies, setMovies] = useState([])

	const onSubmit = async ({ search }: SearchFormData) => {
		const formData = new FormData()
		formData.append('title', search)

		await api.post('series/search', formData).then((response) => {
			setMovies(response.data.results)
		})
	}

	return (
		<div className="container mt-5">
			<Banner mediaType="series" />
			<Title title="Search series by title" />
			<div className="mt-3 mb-5 col-12">
				<form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
					<input
						className="form-control col-md-10"
						type="search"
						placeholder="Search..."
						aria-label="Search"
						name="search"
						ref={register}
					/>
					<button
						className="btn btn-primary my-2 my-sm-0 col-md-2"
						type="submit"
					>
						Search
					</button>
				</form>
			</div>
			{isSubmitting ? (
				<Loading />
			) : (
				<div className="movies-container">
					{movies.map((movie: any, index) => (
						<Serie key={index} movie={movie} mediaType="series" />
					))}
				</div>
			)}
		</div>
	)
}

export default Series
