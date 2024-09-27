import { defineConfig } from 'tinacms'
import { CATEGORIES } from '../src/data/categories.ts'

export default defineConfig({
	branch: 'main',
	clientId: '1f4d10bc-c80c-406a-b36d-18538ec8c503', // Get this from tina.io
	token: '77f0522d0779809d38330bb501e184f074f0447e', // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: 'uploads',
			publicFolder: 'public'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			}
		]
	}
})
