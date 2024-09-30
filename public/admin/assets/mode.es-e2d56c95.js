import { C as a } from './codemirror.es-52e8b92d.js'
import { o, p as s, L as i, q as n } from './index-2cabfba0.js'
import { r as l } from './mode-indent.es-057a4f6a.js'
import './codemirror.es2-5884f31a.js'
var p = Object.defineProperty,
	c = (e, t) => p(e, 'name', { value: t, configurable: !0 })
const m = c((e) => {
	const t = o({
		eatWhitespace: (r) => r.eatWhile(s),
		lexRules: i,
		parseRules: n,
		editorConfig: { tabSize: e.tabSize }
	})
	return {
		config: e,
		startState: t.startState,
		token: t.token,
		indent: l,
		electricInput: /^\s*[})\]]/,
		fold: 'brace',
		lineComment: '#',
		closeBrackets: { pairs: '()[]{}""', explode: '()[]{}' }
	}
}, 'graphqlModeFactory')
a.defineMode('graphql', m)
