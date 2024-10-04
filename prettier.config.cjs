/** @type {import("prettier").Config} */
module.exports = {
	...require('prettier-config-standard'),
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	useTabs: true,

	plugins: [require.resolve('prettier-plugin-astro'), require.resolve('prettier-plugin-mdx')],

	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.mdx',
			options: {
				parser: 'mdx',
				// Custom format settings for MDX frontmatter
				frontMatter: {
					title: 'string',
					description: 'string',
					pubDate: 'datetime',
					heroImage: 'string',
					category: 'string',
					tags: 'array',
				},
			},
		},
	],
}
