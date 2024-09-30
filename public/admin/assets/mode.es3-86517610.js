import { C as n } from './codemirror.es-52e8b92d.js'
import { o as s, v as e, w as a, y as r } from './index-2cabfba0.js'
import { r as i } from './mode-indent.es-057a4f6a.js'
import './codemirror.es2-5884f31a.js'
n.defineMode('graphql-results', (t) => {
	const u = s({
		eatWhitespace: (l) => l.eatSpace(),
		lexRules: o,
		parseRules: c,
		editorConfig: { tabSize: t.tabSize }
	})
	return {
		config: t,
		startState: u.startState,
		token: u.token,
		indent: i,
		electricInput: /^\s*[}\]]/,
		fold: 'brace',
		closeBrackets: { pairs: '[]{}""', explode: '[]{}' }
	}
})
const o = {
		Punctuation: /^\[|]|\{|\}|:|,/,
		Number: /^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,
		String: /^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,
		Keyword: /^true|false|null/
	},
	c = {
		Document: [e('{'), a('Entry', e(',')), e('}')],
		Entry: [r('String', 'def'), e(':'), 'Value'],
		Value(t) {
			switch (t.kind) {
				case 'Number':
					return 'NumberValue'
				case 'String':
					return 'StringValue'
				case 'Punctuation':
					switch (t.value) {
						case '[':
							return 'ListValue'
						case '{':
							return 'ObjectValue'
					}
					return null
				case 'Keyword':
					switch (t.value) {
						case 'true':
						case 'false':
							return 'BooleanValue'
						case 'null':
							return 'NullValue'
					}
					return null
			}
		},
		NumberValue: [r('Number', 'number')],
		StringValue: [r('String', 'string')],
		BooleanValue: [r('Keyword', 'builtin')],
		NullValue: [r('Keyword', 'keyword')],
		ListValue: [e('['), a('Value', e(',')), e(']')],
		ObjectValue: [e('{'), a('ObjectField', e(',')), e('}')],
		ObjectField: [r('String', 'property'), e(':'), 'Value']
	}
