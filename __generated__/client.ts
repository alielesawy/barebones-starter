import { createClient } from 'tinacms/dist/client'
import { queries } from './types'
export const client = createClient({
	cacheDir: '/workspaces/barebones-starter/tina/__generated__/.cache/1727647070318',
	url: 'https://content.tinajs.io/1.5/content/1f4d10bc-c80c-406a-b36d-18538ec8c503/github/main',
	token: '77f0522d0779809d38330bb501e184f074f0447e',
	queries
})
export default client
