import axios from 'axios'

const ApiToken =
	'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjEyMjE4NjZjNTQ3YzhmZjQzZDY5ZDY4MzMxMGY1ZSIsIm5iZiI6MTcyMjUzNTI3My4wMjQ0NjcsInN1YiI6IjY2YWJjYWYyYmU5OGU3ZTJiOWEzYjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htPqiuXYF1WKp4x36nbLaMPuO2yKMfC57AapntFIa3I'

// --------------------------

export const fetchTrendingMovies = async () => {
	const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
	const options = {
		headers: {
			Authorization: ApiToken,
		},
	}

	const res = await axios.get(url, options)
	return res.data
}

// --------------------------

export const fetchSearchMovies = async (query = 'batman', page = 1) => {
	const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US'
	const options = {
		headers: {
			Authorization: ApiToken,
		},
		params: {
			query: query,
			page: page,
		},
	}

	const res = await axios.get(url, options)
	return res.data
}

// --------------------------

export const fetchMovieDetails = async (movie_id) => {
	const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`
	const options = {
		headers: {
			Authorization: ApiToken,
		},
	}

	const res = await axios.get(url, options)
	return res.data
}

// --------------------------

export const fetchMovieCredits = async (movieId) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
	const options = {
		headers: {
			Authorization: ApiToken,
		},
	}

	const res = await axios.get(url, options)
	return res.data.cast
}

// --------------------------

export const fetchMovieReviews = async (movieId, page = 1) => {
	const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`
	const options = {
		headers: {
			Authorization: ApiToken,
		},
		params: {
			page: page,
		},
	}

	const res = await axios.get(url, options)
	return res.data.results
}
