import { createClient } from 'tinacms/dist/client'
import { queries } from './types'
export const client = createClient({
	cacheDir: '/workspaces/barebones-starter/tina/__generated__/.cache/1727478764039',
	url: 'https://content.tinajs.io/1.5/content/3f5633a9-28e6-4bfe-9e0a-0f422ca0aadd/github/main',
	token: 'c28ecb72fe4f0cfecf7adb598d5c156d994c7e5a',
	queries
})
export default client
