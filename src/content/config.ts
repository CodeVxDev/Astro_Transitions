// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// 2. Define a `type` and `schema` for each collection
const movieCollection = defineCollection({
	type: 'data', // v2.5.0 and later
	schema: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			releaseYear: z.string(),
			imgURL: z.string(),
			cast: z.array(z.string()),
			plot: z.string().optional()
		})
	)
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
	movies: movieCollection
}
