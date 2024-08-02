import axios from 'axios'

const ApiToken =
	'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjEyMjE4NjZjNTQ3YzhmZjQzZDY5ZDY4MzMxMGY1ZSIsIm5iZiI6MTcyMjUzNTI3My4wMjQ0NjcsInN1YiI6IjY2YWJjYWYyYmU5OGU3ZTJiOWEzYjU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htPqiuXYF1WKp4x36nbLaMPuO2yKMfC57AapntFIa3I'

// --------------------------

export const fetchMovies = async () => {
	const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
	const options = {
		headers: {
			Authorization: ApiToken,
		},
	}

	const res = await axios.get(url, options)
	return console.log(res.data)
}

// --------------------------

export const fetchSearchMovies = async (query = '', page = 1) => {
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
	return console.log(res.data)
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
	return console.log(res.data)
}

// --------------------------

export const fetchMovieCredits = async (movie_id) => {
	const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`
	const options = {
		headers: {
			Authorization: ApiToken,
		},
	}

	const res = await axios.get(url, options)
	return console.log(res.data)
}

// --------------------------

export const fetchMovieReviews = async (movie_id, page = 1) => {
	const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US`
	const options = {
		headers: {
			Authorization: ApiToken,
		},
		params: {
			page: page,
		},
	}

	const res = await axios.get(url, options)
	return console.log(res)
}
