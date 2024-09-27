// tina/config.ts
import { defineConfig } from 'tinacms'
var config_default = defineConfig({
	branch: 'main',
	clientId: '3f5633a9-28e6-4bfe-9e0a-0f422ca0aadd',
	// Get this from tina.io
	token: 'c28ecb72fe4f0cfecf7adb598d5c156d994c7e5a',
	// Get this from tina.io
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
export { config_default as default }
