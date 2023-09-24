const books = [
	{
		title: "The Awakening",
		author: "Kate Chopin",
	},
	{
		title: "City of Glass",
		author: "Paul Auster",
	},
]

const bookResolver = {
	Query: {
		books: () => books,
	},
}

export default bookResolver
