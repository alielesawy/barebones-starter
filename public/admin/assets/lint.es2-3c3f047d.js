import { C as a } from './codemirror.es-52e8b92d.js'
import { d as c } from './index-2cabfba0.js'
import './codemirror.es2-5884f31a.js'
const t = ['error', 'warning', 'information', 'hint'],
	g = {
		'GraphQL: Validation': 'validation',
		'GraphQL: Deprecation': 'deprecation',
		'GraphQL: Syntax': 'syntax'
	}
a.registerHelper('lint', 'graphql', (e, i) => {
	const { schema: n, validationRules: o, externalFragments: s } = i
	return c(e, n, o, void 0, s).map((r) => ({
		message: r.message,
		severity: r.severity ? t[r.severity - 1] : t[0],
		type: r.source ? g[r.source] : void 0,
		from: a.Pos(r.range.start.line, r.range.start.character),
		to: a.Pos(r.range.end.line, r.range.end.character)
	}))
})
