import { s as Et } from './forEachState.es-b2033c2b.js'
import { f as te, h as bt, k as Ot, e as St, m as At, n as Lt } from './index-2cabfba0.js'
var Dt = Object.defineProperty,
	s = (e, t) => Dt(e, 'name', { value: t, configurable: !0 })
const _t = 10,
	Me = 2
function N(e) {
	return K(e, [])
}
s(N, 'inspect')
function K(e, t) {
	switch (typeof e) {
		case 'string':
			return JSON.stringify(e)
		case 'function':
			return e.name ? `[function ${e.name}]` : '[function]'
		case 'object':
			return Be(e, t)
		default:
			return String(e)
	}
}
s(K, 'formatValue')
function Be(e, t) {
	if (e === null) return 'null'
	if (t.includes(e)) return '[Circular]'
	const n = [...t, e]
	if (Ge(e)) {
		const i = e.toJSON()
		if (i !== e) return typeof i == 'string' ? i : K(i, n)
	} else if (Array.isArray(e)) return Je(e, n)
	return Pe(e, n)
}
s(Be, 'formatObjectValue')
function Ge(e) {
	return typeof e.toJSON == 'function'
}
s(Ge, 'isJSONable')
function Pe(e, t) {
	const n = Object.entries(e)
	return n.length === 0
		? '{}'
		: t.length > Me
		? '[' + Qe(e) + ']'
		: '{ ' + n.map(([i, r]) => i + ': ' + K(r, t)).join(', ') + ' }'
}
s(Pe, 'formatObject')
function Je(e, t) {
	if (e.length === 0) return '[]'
	if (t.length > Me) return '[Array]'
	const n = Math.min(_t, e.length),
		i = e.length - n,
		r = []
	for (let a = 0; a < n; ++a) r.push(K(e[a], t))
	return (
		i === 1 ? r.push('... 1 more item') : i > 1 && r.push(`... ${i} more items`),
		'[' + r.join(', ') + ']'
	)
}
s(Je, 'formatArray')
function Qe(e) {
	const t = Object.prototype.toString
		.call(e)
		.replace(/^\[object /, '')
		.replace(/]$/, '')
	if (t === 'Object' && typeof e.constructor == 'function') {
		const n = e.constructor.name
		if (typeof n == 'string' && n !== '') return n
	}
	return t
}
s(Qe, 'getObjectTag')
function re(e, t) {
	if (!e) throw new Error(t ?? 'Unexpected invariant triggered.')
}
s(re, 'invariant')
let E
;(function (e) {
	;(e.QUERY = 'QUERY'),
		(e.MUTATION = 'MUTATION'),
		(e.SUBSCRIPTION = 'SUBSCRIPTION'),
		(e.FIELD = 'FIELD'),
		(e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
		(e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
		(e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
		(e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
		(e.SCHEMA = 'SCHEMA'),
		(e.SCALAR = 'SCALAR'),
		(e.OBJECT = 'OBJECT'),
		(e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
		(e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
		(e.INTERFACE = 'INTERFACE'),
		(e.UNION = 'UNION'),
		(e.ENUM = 'ENUM'),
		(e.ENUM_VALUE = 'ENUM_VALUE'),
		(e.INPUT_OBJECT = 'INPUT_OBJECT'),
		(e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION')
})(E || (E = {}))
function fe(e) {
	return e === 9 || e === 32
}
s(fe, 'isWhiteSpace')
function Ye(e) {
	return e >= 48 && e <= 57
}
s(Ye, 'isDigit$1')
function Ee(e) {
	return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
}
s(Ee, 'isLetter')
function ze(e) {
	return Ee(e) || e === 95
}
s(ze, 'isNameStart')
function qe(e) {
	return Ee(e) || Ye(e) || e === 95
}
s(qe, 'isNameContinue')
function Xe(e, t) {
	const n = e.replace(/"""/g, '\\"""'),
		i = n.split(/\r\n|[\n\r]/g),
		r = i.length === 1,
		a = i.length > 1 && i.slice(1).every((S) => S.length === 0 || fe(S.charCodeAt(0))),
		l = n.endsWith('\\"""'),
		p = e.endsWith('"') && !l,
		f = e.endsWith('\\'),
		d = p || f,
		u = !(t != null && t.minimize) && (!r || e.length > 70 || d || a || l)
	let m = ''
	const g = r && fe(e.charCodeAt(0))
	return (
		((u && !g) || a) &&
			(m += `
`),
		(m += n),
		(u || d) &&
			(m += `
`),
		'"""' + m + '"""'
	)
}
s(Xe, 'printBlockString')
function We(e) {
	return `"${e.replace(wt, He)}"`
}
s(We, 'printString')
const wt = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g
function He(e) {
	return Ft[e.charCodeAt(0)]
}
s(He, 'escapedReplacer')
const Ft = [
	'\\u0000',
	'\\u0001',
	'\\u0002',
	'\\u0003',
	'\\u0004',
	'\\u0005',
	'\\u0006',
	'\\u0007',
	'\\b',
	'\\t',
	'\\n',
	'\\u000B',
	'\\f',
	'\\r',
	'\\u000E',
	'\\u000F',
	'\\u0010',
	'\\u0011',
	'\\u0012',
	'\\u0013',
	'\\u0014',
	'\\u0015',
	'\\u0016',
	'\\u0017',
	'\\u0018',
	'\\u0019',
	'\\u001A',
	'\\u001B',
	'\\u001C',
	'\\u001D',
	'\\u001E',
	'\\u001F',
	'',
	'',
	'\\"',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'\\\\',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'\\u007F',
	'\\u0080',
	'\\u0081',
	'\\u0082',
	'\\u0083',
	'\\u0084',
	'\\u0085',
	'\\u0086',
	'\\u0087',
	'\\u0088',
	'\\u0089',
	'\\u008A',
	'\\u008B',
	'\\u008C',
	'\\u008D',
	'\\u008E',
	'\\u008F',
	'\\u0090',
	'\\u0091',
	'\\u0092',
	'\\u0093',
	'\\u0094',
	'\\u0095',
	'\\u0096',
	'\\u0097',
	'\\u0098',
	'\\u0099',
	'\\u009A',
	'\\u009B',
	'\\u009C',
	'\\u009D',
	'\\u009E',
	'\\u009F'
]
function I(e, t) {
	if (!e) throw new Error(t)
}
s(I, 'devAssert')
const Ke = {
		Name: [],
		Document: ['definitions'],
		OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
		VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
		Variable: ['name'],
		SelectionSet: ['selections'],
		Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
		Argument: ['name', 'value'],
		FragmentSpread: ['name', 'directives'],
		InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
		FragmentDefinition: [
			'name',
			'variableDefinitions',
			'typeCondition',
			'directives',
			'selectionSet'
		],
		IntValue: [],
		FloatValue: [],
		StringValue: [],
		BooleanValue: [],
		NullValue: [],
		EnumValue: [],
		ListValue: ['values'],
		ObjectValue: ['fields'],
		ObjectField: ['name', 'value'],
		Directive: ['name', 'arguments'],
		NamedType: ['name'],
		ListType: ['type'],
		NonNullType: ['type'],
		SchemaDefinition: ['description', 'directives', 'operationTypes'],
		OperationTypeDefinition: ['type'],
		ScalarTypeDefinition: ['description', 'name', 'directives'],
		ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
		FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
		InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
		InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
		UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
		EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
		EnumValueDefinition: ['description', 'name', 'directives'],
		InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
		DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
		SchemaExtension: ['directives', 'operationTypes'],
		ScalarTypeExtension: ['name', 'directives'],
		ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
		InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
		UnionTypeExtension: ['name', 'directives', 'types'],
		EnumTypeExtension: ['name', 'directives', 'values'],
		InputObjectTypeExtension: ['name', 'directives', 'fields']
	},
	xt = new Set(Object.keys(Ke))
function ye(e) {
	const t = e == null ? void 0 : e.kind
	return typeof t == 'string' && xt.has(t)
}
s(ye, 'isNode')
let Ve
;(function (e) {
	;(e.QUERY = 'query'), (e.MUTATION = 'mutation'), (e.SUBSCRIPTION = 'subscription')
})(Ve || (Ve = {}))
let y
;(function (e) {
	;(e.NAME = 'Name'),
		(e.DOCUMENT = 'Document'),
		(e.OPERATION_DEFINITION = 'OperationDefinition'),
		(e.VARIABLE_DEFINITION = 'VariableDefinition'),
		(e.SELECTION_SET = 'SelectionSet'),
		(e.FIELD = 'Field'),
		(e.ARGUMENT = 'Argument'),
		(e.FRAGMENT_SPREAD = 'FragmentSpread'),
		(e.INLINE_FRAGMENT = 'InlineFragment'),
		(e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
		(e.VARIABLE = 'Variable'),
		(e.INT = 'IntValue'),
		(e.FLOAT = 'FloatValue'),
		(e.STRING = 'StringValue'),
		(e.BOOLEAN = 'BooleanValue'),
		(e.NULL = 'NullValue'),
		(e.ENUM = 'EnumValue'),
		(e.LIST = 'ListValue'),
		(e.OBJECT = 'ObjectValue'),
		(e.OBJECT_FIELD = 'ObjectField'),
		(e.DIRECTIVE = 'Directive'),
		(e.NAMED_TYPE = 'NamedType'),
		(e.LIST_TYPE = 'ListType'),
		(e.NON_NULL_TYPE = 'NonNullType'),
		(e.SCHEMA_DEFINITION = 'SchemaDefinition'),
		(e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
		(e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
		(e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
		(e.FIELD_DEFINITION = 'FieldDefinition'),
		(e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
		(e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
		(e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
		(e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
		(e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
		(e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
		(e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
		(e.SCHEMA_EXTENSION = 'SchemaExtension'),
		(e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
		(e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
		(e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
		(e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
		(e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
		(e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension')
})(y || (y = {}))
const Rt = Object.freeze({})
function Ze(e, t, n = Ke) {
	const i = new Map()
	for (const _ of Object.values(y)) i.set(_, et(t, _))
	let r,
		a = Array.isArray(e),
		l = [e],
		p = -1,
		f = [],
		d = e,
		u,
		m
	const g = [],
		S = []
	do {
		p++
		const _ = p === l.length,
			xe = _ && f.length !== 0
		if (_) {
			if (((u = S.length === 0 ? void 0 : g[g.length - 1]), (d = m), (m = S.pop()), xe))
				if (a) {
					d = d.slice()
					let $ = 0
					for (const [ce, Re] of f) {
						const je = ce - $
						Re === null ? (d.splice(je, 1), $++) : (d[je] = Re)
					}
				} else {
					d = Object.defineProperties({}, Object.getOwnPropertyDescriptors(d))
					for (const [$, ce] of f) d[$] = ce
				}
			;(p = r.index), (l = r.keys), (f = r.edits), (a = r.inArray), (r = r.prev)
		} else if (m) {
			if (((u = a ? p : l[p]), (d = m[u]), d == null)) continue
			g.push(u)
		}
		let U
		if (!Array.isArray(d)) {
			var h, A
			ye(d) || I(!1, `Invalid AST Node: ${N(d)}.`)
			const $ = _
				? (h = i.get(d.kind)) === null || h === void 0
					? void 0
					: h.leave
				: (A = i.get(d.kind)) === null || A === void 0
				? void 0
				: A.enter
			if (((U = $ == null ? void 0 : $.call(t, d, u, m, g, S)), U === Rt)) break
			if (U === !1) {
				if (!_) {
					g.pop()
					continue
				}
			} else if (U !== void 0 && (f.push([u, U]), !_))
				if (ye(U)) d = U
				else {
					g.pop()
					continue
				}
		}
		if ((U === void 0 && xe && f.push([u, d]), _)) g.pop()
		else {
			var R
			;(r = { inArray: a, index: p, keys: l, edits: f, prev: r }),
				(a = Array.isArray(d)),
				(l = a ? d : (R = n[d.kind]) !== null && R !== void 0 ? R : []),
				(p = -1),
				(f = []),
				m && S.push(m),
				(m = d)
		}
	} while (r !== void 0)
	return f.length !== 0 ? f[f.length - 1][1] : e
}
s(Ze, 'visit')
function et(e, t) {
	const n = e[t]
	return typeof n == 'object'
		? n
		: typeof n == 'function'
		? { enter: n, leave: void 0 }
		: { enter: e.enter, leave: e.leave }
}
s(et, 'getEnterLeaveForKind')
function V(e) {
	return Ze(e, Vt)
}
s(V, 'print')
const jt = 80,
	Vt = {
		Name: { leave: (e) => e.value },
		Variable: { leave: (e) => '$' + e.name },
		Document: {
			leave: (e) =>
				o(
					e.definitions,
					`

`
				)
		},
		OperationDefinition: {
			leave(e) {
				const t = c('(', o(e.variableDefinitions, ', '), ')'),
					n = o([e.operation, o([e.name, t]), o(e.directives, ' ')], ' ')
				return (n === 'query' ? '' : n + ' ') + e.selectionSet
			}
		},
		VariableDefinition: {
			leave: ({ variable: e, type: t, defaultValue: n, directives: i }) =>
				e + ': ' + t + c(' = ', n) + c(' ', o(i, ' '))
		},
		SelectionSet: { leave: ({ selections: e }) => L(e) },
		Field: {
			leave({ alias: e, name: t, arguments: n, directives: i, selectionSet: r }) {
				const a = c('', e, ': ') + t
				let l = a + c('(', o(n, ', '), ')')
				return (
					l.length > jt &&
						(l =
							a +
							c(
								`(
`,
								X(
									o(
										n,
										`
`
									)
								),
								`
)`
							)),
					o([l, o(i, ' '), r], ' ')
				)
			}
		},
		Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
		FragmentSpread: { leave: ({ name: e, directives: t }) => '...' + e + c(' ', o(t, ' ')) },
		InlineFragment: {
			leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
				o(['...', c('on ', e), o(t, ' '), n], ' ')
		},
		FragmentDefinition: {
			leave: ({
				name: e,
				typeCondition: t,
				variableDefinitions: n,
				directives: i,
				selectionSet: r
			}) => `fragment ${e}${c('(', o(n, ', '), ')')} on ${t} ${c('', o(i, ' '), ' ')}` + r
		},
		IntValue: { leave: ({ value: e }) => e },
		FloatValue: { leave: ({ value: e }) => e },
		StringValue: { leave: ({ value: e, block: t }) => (t ? Xe(e) : We(e)) },
		BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
		NullValue: { leave: () => 'null' },
		EnumValue: { leave: ({ value: e }) => e },
		ListValue: { leave: ({ values: e }) => '[' + o(e, ', ') + ']' },
		ObjectValue: { leave: ({ fields: e }) => '{' + o(e, ', ') + '}' },
		ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
		Directive: { leave: ({ name: e, arguments: t }) => '@' + e + c('(', o(t, ', '), ')') },
		NamedType: { leave: ({ name: e }) => e },
		ListType: { leave: ({ type: e }) => '[' + e + ']' },
		NonNullType: { leave: ({ type: e }) => e + '!' },
		SchemaDefinition: {
			leave: ({ description: e, directives: t, operationTypes: n }) =>
				c(
					'',
					e,
					`
`
				) + o(['schema', o(t, ' '), L(n)], ' ')
		},
		OperationTypeDefinition: { leave: ({ operation: e, type: t }) => e + ': ' + t },
		ScalarTypeDefinition: {
			leave: ({ description: e, name: t, directives: n }) =>
				c(
					'',
					e,
					`
`
				) + o(['scalar', t, o(n, ' ')], ' ')
		},
		ObjectTypeDefinition: {
			leave: ({ description: e, name: t, interfaces: n, directives: i, fields: r }) =>
				c(
					'',
					e,
					`
`
				) + o(['type', t, c('implements ', o(n, ' & ')), o(i, ' '), L(r)], ' ')
		},
		FieldDefinition: {
			leave: ({ description: e, name: t, arguments: n, type: i, directives: r }) =>
				c(
					'',
					e,
					`
`
				) +
				t +
				(ve(n)
					? c(
							`(
`,
							X(
								o(
									n,
									`
`
								)
							),
							`
)`
					  )
					: c('(', o(n, ', '), ')')) +
				': ' +
				i +
				c(' ', o(r, ' '))
		},
		InputValueDefinition: {
			leave: ({ description: e, name: t, type: n, defaultValue: i, directives: r }) =>
				c(
					'',
					e,
					`
`
				) + o([t + ': ' + n, c('= ', i), o(r, ' ')], ' ')
		},
		InterfaceTypeDefinition: {
			leave: ({ description: e, name: t, interfaces: n, directives: i, fields: r }) =>
				c(
					'',
					e,
					`
`
				) + o(['interface', t, c('implements ', o(n, ' & ')), o(i, ' '), L(r)], ' ')
		},
		UnionTypeDefinition: {
			leave: ({ description: e, name: t, directives: n, types: i }) =>
				c(
					'',
					e,
					`
`
				) + o(['union', t, o(n, ' '), c('= ', o(i, ' | '))], ' ')
		},
		EnumTypeDefinition: {
			leave: ({ description: e, name: t, directives: n, values: i }) =>
				c(
					'',
					e,
					`
`
				) + o(['enum', t, o(n, ' '), L(i)], ' ')
		},
		EnumValueDefinition: {
			leave: ({ description: e, name: t, directives: n }) =>
				c(
					'',
					e,
					`
`
				) + o([t, o(n, ' ')], ' ')
		},
		InputObjectTypeDefinition: {
			leave: ({ description: e, name: t, directives: n, fields: i }) =>
				c(
					'',
					e,
					`
`
				) + o(['input', t, o(n, ' '), L(i)], ' ')
		},
		DirectiveDefinition: {
			leave: ({ description: e, name: t, arguments: n, repeatable: i, locations: r }) =>
				c(
					'',
					e,
					`
`
				) +
				'directive @' +
				t +
				(ve(n)
					? c(
							`(
`,
							X(
								o(
									n,
									`
`
								)
							),
							`
)`
					  )
					: c('(', o(n, ', '), ')')) +
				(i ? ' repeatable' : '') +
				' on ' +
				o(r, ' | ')
		},
		SchemaExtension: {
			leave: ({ directives: e, operationTypes: t }) => o(['extend schema', o(e, ' '), L(t)], ' ')
		},
		ScalarTypeExtension: {
			leave: ({ name: e, directives: t }) => o(['extend scalar', e, o(t, ' ')], ' ')
		},
		ObjectTypeExtension: {
			leave: ({ name: e, interfaces: t, directives: n, fields: i }) =>
				o(['extend type', e, c('implements ', o(t, ' & ')), o(n, ' '), L(i)], ' ')
		},
		InterfaceTypeExtension: {
			leave: ({ name: e, interfaces: t, directives: n, fields: i }) =>
				o(['extend interface', e, c('implements ', o(t, ' & ')), o(n, ' '), L(i)], ' ')
		},
		UnionTypeExtension: {
			leave: ({ name: e, directives: t, types: n }) =>
				o(['extend union', e, o(t, ' '), c('= ', o(n, ' | '))], ' ')
		},
		EnumTypeExtension: {
			leave: ({ name: e, directives: t, values: n }) => o(['extend enum', e, o(t, ' '), L(n)], ' ')
		},
		InputObjectTypeExtension: {
			leave: ({ name: e, directives: t, fields: n }) => o(['extend input', e, o(t, ' '), L(n)], ' ')
		}
	}
function o(e, t = '') {
	var n
	return (n = e == null ? void 0 : e.filter((i) => i).join(t)) !== null && n !== void 0 ? n : ''
}
s(o, 'join')
function L(e) {
	return c(
		`{
`,
		X(
			o(
				e,
				`
`
			)
		),
		`
}`
	)
}
s(L, 'block')
function c(e, t, n = '') {
	return t != null && t !== '' ? e + t + n : ''
}
s(c, 'wrap')
function X(e) {
	return c(
		'  ',
		e.replace(
			/\n/g,
			`
  `
		)
	)
}
s(X, 'indent')
function ve(e) {
	var t
	return (t =
		e == null
			? void 0
			: e.some((n) =>
					n.includes(`
`)
			  )) !== null && t !== void 0
		? t
		: !1
}
s(ve, 'hasMultilineItems')
function tt(e) {
	return typeof e == 'object' && typeof (e == null ? void 0 : e[Symbol.iterator]) == 'function'
}
s(tt, 'isIterableObject')
function J(e) {
	return typeof e == 'object' && e !== null
}
s(J, 'isObjectLike')
const Ut = 5
function nt(e, t) {
	const [n, i] = t ? [e, t] : [void 0, e]
	let r = ' Did you mean '
	n && (r += n + ' ')
	const a = i.map((f) => `"${f}"`)
	switch (a.length) {
		case 0:
			return ''
		case 1:
			return r + a[0] + '?'
		case 2:
			return r + a[0] + ' or ' + a[1] + '?'
	}
	const l = a.slice(0, Ut),
		p = l.pop()
	return r + l.join(', ') + ', or ' + p + '?'
}
s(nt, 'didYouMean')
function he(e) {
	return e
}
s(he, 'identityFunc')
const C = s(function (e, t) {
	return e instanceof t
}, 'instanceOf')
function it(e, t) {
	const n = Object.create(null)
	for (const i of e) n[t(i)] = i
	return n
}
s(it, 'keyMap')
function se(e, t, n) {
	const i = Object.create(null)
	for (const r of e) i[t(r)] = n(r)
	return i
}
s(se, 'keyValMap')
function Z(e, t) {
	const n = Object.create(null)
	for (const i of Object.keys(e)) n[i] = t(e[i], i)
	return n
}
s(Z, 'mapValue')
function rt(e, t) {
	let n = 0,
		i = 0
	for (; n < e.length && i < t.length; ) {
		let r = e.charCodeAt(n),
			a = t.charCodeAt(i)
		if (z(r) && z(a)) {
			let l = 0
			do ++n, (l = l * 10 + r - me), (r = e.charCodeAt(n))
			while (z(r) && l > 0)
			let p = 0
			do ++i, (p = p * 10 + a - me), (a = t.charCodeAt(i))
			while (z(a) && p > 0)
			if (l < p) return -1
			if (l > p) return 1
		} else {
			if (r < a) return -1
			if (r > a) return 1
			++n, ++i
		}
	}
	return e.length - t.length
}
s(rt, 'naturalCompare')
const me = 48,
	Ct = 57
function z(e) {
	return !isNaN(e) && me <= e && e <= Ct
}
s(z, 'isDigit')
function st(e, t) {
	const n = Object.create(null),
		i = new ot(e),
		r = Math.floor(e.length * 0.4) + 1
	for (const a of t) {
		const l = i.measure(a, r)
		l !== void 0 && (n[a] = l)
	}
	return Object.keys(n).sort((a, l) => {
		const p = n[a] - n[l]
		return p !== 0 ? p : rt(a, l)
	})
}
s(st, 'suggestionList')
class ot {
	constructor(t) {
		;(this._input = t),
			(this._inputLowerCase = t.toLowerCase()),
			(this._inputArray = Te(this._inputLowerCase)),
			(this._rows = [
				new Array(t.length + 1).fill(0),
				new Array(t.length + 1).fill(0),
				new Array(t.length + 1).fill(0)
			])
	}
	measure(t, n) {
		if (this._input === t) return 0
		const i = t.toLowerCase()
		if (this._inputLowerCase === i) return 1
		let r = Te(i),
			a = this._inputArray
		if (r.length < a.length) {
			const u = r
			;(r = a), (a = u)
		}
		const l = r.length,
			p = a.length
		if (l - p > n) return
		const f = this._rows
		for (let u = 0; u <= p; u++) f[0][u] = u
		for (let u = 1; u <= l; u++) {
			const m = f[(u - 1) % 3],
				g = f[u % 3]
			let S = (g[0] = u)
			for (let h = 1; h <= p; h++) {
				const A = r[u - 1] === a[h - 1] ? 0 : 1
				let R = Math.min(m[h] + 1, g[h - 1] + 1, m[h - 1] + A)
				if (u > 1 && h > 1 && r[u - 1] === a[h - 2] && r[u - 2] === a[h - 1]) {
					const _ = f[(u - 2) % 3][h - 2]
					R = Math.min(R, _ + 1)
				}
				R < S && (S = R), (g[h] = R)
			}
			if (S > n) return
		}
		const d = f[l % 3][p]
		return d <= n ? d : void 0
	}
}
s(ot, 'LexicalDistance')
function Te(e) {
	const t = e.length,
		n = new Array(t)
	for (let i = 0; i < t; ++i) n[i] = e.charCodeAt(i)
	return n
}
s(Te, 'stringToArray')
function w(e) {
	if (e == null) return Object.create(null)
	if (Object.getPrototypeOf(e) === null) return e
	const t = Object.create(null)
	for (const [n, i] of Object.entries(e)) t[n] = i
	return t
}
s(w, 'toObjMap')
const kt = /\r\n|[\n\r]/g
function ne(e, t) {
	let n = 0,
		i = 1
	for (const r of e.body.matchAll(kt)) {
		if ((typeof r.index == 'number' || re(!1), r.index >= t)) break
		;(n = r.index + r[0].length), (i += 1)
	}
	return { line: i, column: t + 1 - n }
}
s(ne, 'getLocation')
function at(e) {
	return be(e.source, ne(e.source, e.start))
}
s(at, 'printLocation')
function be(e, t) {
	const n = e.locationOffset.column - 1,
		i = ''.padStart(n) + e.body,
		r = t.line - 1,
		a = e.locationOffset.line - 1,
		l = t.line + a,
		p = t.line === 1 ? n : 0,
		f = t.column + p,
		d = `${e.name}:${l}:${f}
`,
		u = i.split(/\r\n|[\n\r]/g),
		m = u[r]
	if (m.length > 120) {
		const g = Math.floor(f / 80),
			S = f % 80,
			h = []
		for (let A = 0; A < m.length; A += 80) h.push(m.slice(A, A + 80))
		return (
			d +
			Ne([
				[`${l} |`, h[0]],
				...h.slice(1, g + 1).map((A) => ['|', A]),
				['|', '^'.padStart(S)],
				['|', h[g + 1]]
			])
		)
	}
	return (
		d +
		Ne([
			[`${l - 1} |`, u[r - 1]],
			[`${l} |`, m],
			['|', '^'.padStart(f)],
			[`${l + 1} |`, u[r + 1]]
		])
	)
}
s(be, 'printSourceLocation')
function Ne(e) {
	const t = e.filter(([i, r]) => r !== void 0),
		n = Math.max(...t.map(([i]) => i.length))
	return t.map(([i, r]) => i.padStart(n) + (r ? ' ' + r : '')).join(`
`)
}
s(Ne, 'printPrefixedLines')
function lt(e) {
	const t = e[0]
	return t == null || 'kind' in t || 'length' in t
		? { nodes: t, source: e[1], positions: e[2], path: e[3], originalError: e[4], extensions: e[5] }
		: t
}
s(lt, 'toNormalizedOptions')
class T extends Error {
	constructor(t, ...n) {
		var i, r, a
		const { nodes: l, source: p, positions: f, path: d, originalError: u, extensions: m } = lt(n)
		super(t),
			(this.name = 'GraphQLError'),
			(this.path = d ?? void 0),
			(this.originalError = u ?? void 0),
			(this.nodes = ge(Array.isArray(l) ? l : l ? [l] : void 0))
		const g = ge(
			(i = this.nodes) === null || i === void 0
				? void 0
				: i.map((h) => h.loc).filter((h) => h != null)
		)
		;(this.source = p ?? (g == null || (r = g[0]) === null || r === void 0 ? void 0 : r.source)),
			(this.positions = f ?? (g == null ? void 0 : g.map((h) => h.start))),
			(this.locations =
				f && p ? f.map((h) => ne(p, h)) : g == null ? void 0 : g.map((h) => ne(h.source, h.start)))
		const S = J(u == null ? void 0 : u.extensions) ? (u == null ? void 0 : u.extensions) : void 0
		;(this.extensions = (a = m ?? S) !== null && a !== void 0 ? a : Object.create(null)),
			Object.defineProperties(this, {
				message: { writable: !0, enumerable: !0 },
				name: { enumerable: !1 },
				nodes: { enumerable: !1 },
				source: { enumerable: !1 },
				positions: { enumerable: !1 },
				originalError: { enumerable: !1 }
			}),
			u != null && u.stack
				? Object.defineProperty(this, 'stack', { value: u.stack, writable: !0, configurable: !0 })
				: Error.captureStackTrace
				? Error.captureStackTrace(this, T)
				: Object.defineProperty(this, 'stack', {
						value: Error().stack,
						writable: !0,
						configurable: !0
				  })
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLError'
	}
	toString() {
		let t = this.message
		if (this.nodes)
			for (const n of this.nodes)
				n.loc &&
					(t +=
						`

` + at(n.loc))
		else if (this.source && this.locations)
			for (const n of this.locations)
				t +=
					`

` + be(this.source, n)
		return t
	}
	toJSON() {
		const t = { message: this.message }
		return (
			this.locations != null && (t.locations = this.locations),
			this.path != null && (t.path = this.path),
			this.extensions != null &&
				Object.keys(this.extensions).length > 0 &&
				(t.extensions = this.extensions),
			t
		)
	}
}
s(T, 'GraphQLError')
function ge(e) {
	return e === void 0 || e.length === 0 ? void 0 : e
}
s(ge, 'undefinedIfEmpty')
function ie(e, t) {
	switch (e.kind) {
		case y.NULL:
			return null
		case y.INT:
			return parseInt(e.value, 10)
		case y.FLOAT:
			return parseFloat(e.value)
		case y.STRING:
		case y.ENUM:
		case y.BOOLEAN:
			return e.value
		case y.LIST:
			return e.values.map((n) => ie(n, t))
		case y.OBJECT:
			return se(
				e.fields,
				(n) => n.name.value,
				(n) => ie(n.value, t)
			)
		case y.VARIABLE:
			return t == null ? void 0 : t[e.name.value]
	}
}
s(ie, 'valueFromASTUntyped')
function F(e) {
	if (
		(e != null || I(!1, 'Must provide name.'),
		typeof e == 'string' || I(!1, 'Expected name to be a string.'),
		e.length === 0)
	)
		throw new T('Expected name to be a non-empty string.')
	for (let t = 1; t < e.length; ++t)
		if (!qe(e.charCodeAt(t)))
			throw new T(`Names must only contain [_a-zA-Z0-9] but "${e}" does not.`)
	if (!ze(e.charCodeAt(0))) throw new T(`Names must start with [_a-zA-Z] but "${e}" does not.`)
	return e
}
s(F, 'assertName')
function ut(e) {
	if (e === 'true' || e === 'false' || e === 'null')
		throw new T(`Enum values cannot be named: ${e}`)
	return F(e)
}
s(ut, 'assertEnumValueName')
function Oe(e) {
	return oe(e) || W(e) || P(e) || ae(e) || Q(e) || H(e) || le(e) || ee(e)
}
s(Oe, 'isType')
function oe(e) {
	return C(e, B)
}
s(oe, 'isScalarType')
function W(e) {
	return C(e, k)
}
s(W, 'isObjectType')
function P(e) {
	return C(e, vt)
}
s(P, 'isInterfaceType')
function ae(e) {
	return C(e, ht)
}
s(ae, 'isUnionType')
function Q(e) {
	return C(e, ue)
}
s(Q, 'isEnumType')
function H(e) {
	return C(e, Nt)
}
s(H, 'isInputObjectType')
function le(e) {
	return C(e, D)
}
s(le, 'isListType')
function ee(e) {
	return C(e, v)
}
s(ee, 'isNonNullType')
function ct(e) {
	return oe(e) || Q(e)
}
s(ct, 'isLeafType')
function pt(e) {
	return P(e) || ae(e)
}
s(pt, 'isAbstractType')
class D {
	constructor(t) {
		Oe(t) || I(!1, `Expected ${N(t)} to be a GraphQL type.`), (this.ofType = t)
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLList'
	}
	toString() {
		return '[' + String(this.ofType) + ']'
	}
	toJSON() {
		return this.toString()
	}
}
s(D, 'GraphQLList')
class v {
	constructor(t) {
		dt(t) || I(!1, `Expected ${N(t)} to be a GraphQL nullable type.`), (this.ofType = t)
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLNonNull'
	}
	toString() {
		return String(this.ofType) + '!'
	}
	toJSON() {
		return this.toString()
	}
}
s(v, 'GraphQLNonNull')
function dt(e) {
	return Oe(e) && !ee(e)
}
s(dt, 'isNullableType')
function Se(e) {
	return typeof e == 'function' ? e() : e
}
s(Se, 'resolveReadonlyArrayThunk')
function Ae(e) {
	return typeof e == 'function' ? e() : e
}
s(Ae, 'resolveObjMapThunk')
class B {
	constructor(t) {
		var n, i, r, a
		const l = (n = t.parseValue) !== null && n !== void 0 ? n : he
		;(this.name = F(t.name)),
			(this.description = t.description),
			(this.specifiedByURL = t.specifiedByURL),
			(this.serialize = (i = t.serialize) !== null && i !== void 0 ? i : he),
			(this.parseValue = l),
			(this.parseLiteral =
				(r = t.parseLiteral) !== null && r !== void 0 ? r : (p, f) => l(ie(p, f))),
			(this.extensions = w(t.extensions)),
			(this.astNode = t.astNode),
			(this.extensionASTNodes = (a = t.extensionASTNodes) !== null && a !== void 0 ? a : []),
			t.specifiedByURL == null ||
				typeof t.specifiedByURL == 'string' ||
				I(
					!1,
					`${this.name} must provide "specifiedByURL" as a string, but got: ${N(t.specifiedByURL)}.`
				),
			t.serialize == null ||
				typeof t.serialize == 'function' ||
				I(
					!1,
					`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
				),
			t.parseLiteral &&
				((typeof t.parseValue == 'function' && typeof t.parseLiteral == 'function') ||
					I(!1, `${this.name} must provide both "parseValue" and "parseLiteral" functions.`))
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLScalarType'
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			specifiedByURL: this.specifiedByURL,
			serialize: this.serialize,
			parseValue: this.parseValue,
			parseLiteral: this.parseLiteral,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		}
	}
	toString() {
		return this.name
	}
	toJSON() {
		return this.toString()
	}
}
s(B, 'GraphQLScalarType')
class k {
	constructor(t) {
		var n
		;(this.name = F(t.name)),
			(this.description = t.description),
			(this.isTypeOf = t.isTypeOf),
			(this.extensions = w(t.extensions)),
			(this.astNode = t.astNode),
			(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
			(this._fields = () => De(t)),
			(this._interfaces = () => Le(t)),
			t.isTypeOf == null ||
				typeof t.isTypeOf == 'function' ||
				I(!1, `${this.name} must provide "isTypeOf" as a function, but got: ${N(t.isTypeOf)}.`)
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLObjectType'
	}
	getFields() {
		return typeof this._fields == 'function' && (this._fields = this._fields()), this._fields
	}
	getInterfaces() {
		return (
			typeof this._interfaces == 'function' && (this._interfaces = this._interfaces()),
			this._interfaces
		)
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			interfaces: this.getInterfaces(),
			fields: _e(this.getFields()),
			isTypeOf: this.isTypeOf,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		}
	}
	toString() {
		return this.name
	}
	toJSON() {
		return this.toString()
	}
}
s(k, 'GraphQLObjectType')
function Le(e) {
	var t
	const n = Se((t = e.interfaces) !== null && t !== void 0 ? t : [])
	return (
		Array.isArray(n) ||
			I(!1, `${e.name} interfaces must be an Array or a function which returns an Array.`),
		n
	)
}
s(Le, 'defineInterfaces')
function De(e) {
	const t = Ae(e.fields)
	return (
		M(t) ||
			I(
				!1,
				`${e.name} fields must be an object with field names as keys or a function which returns such an object.`
			),
		Z(t, (n, i) => {
			var r
			M(n) || I(!1, `${e.name}.${i} field config must be an object.`),
				n.resolve == null ||
					typeof n.resolve == 'function' ||
					I(
						!1,
						`${e.name}.${i} field resolver must be a function if provided, but got: ${N(
							n.resolve
						)}.`
					)
			const a = (r = n.args) !== null && r !== void 0 ? r : {}
			return (
				M(a) || I(!1, `${e.name}.${i} args must be an object with argument names as keys.`),
				{
					name: F(i),
					description: n.description,
					type: n.type,
					args: ft(a),
					resolve: n.resolve,
					subscribe: n.subscribe,
					deprecationReason: n.deprecationReason,
					extensions: w(n.extensions),
					astNode: n.astNode
				}
			)
		})
	)
}
s(De, 'defineFieldMap')
function ft(e) {
	return Object.entries(e).map(([t, n]) => ({
		name: F(t),
		description: n.description,
		type: n.type,
		defaultValue: n.defaultValue,
		deprecationReason: n.deprecationReason,
		extensions: w(n.extensions),
		astNode: n.astNode
	}))
}
s(ft, 'defineArguments')
function M(e) {
	return J(e) && !Array.isArray(e)
}
s(M, 'isPlainObj')
function _e(e) {
	return Z(e, (t) => ({
		description: t.description,
		type: t.type,
		args: yt(t.args),
		resolve: t.resolve,
		subscribe: t.subscribe,
		deprecationReason: t.deprecationReason,
		extensions: t.extensions,
		astNode: t.astNode
	}))
}
s(_e, 'fieldsToFieldsConfig')
function yt(e) {
	return se(
		e,
		(t) => t.name,
		(t) => ({
			description: t.description,
			type: t.type,
			defaultValue: t.defaultValue,
			deprecationReason: t.deprecationReason,
			extensions: t.extensions,
			astNode: t.astNode
		})
	)
}
s(yt, 'argsToArgsConfig')
class vt {
	constructor(t) {
		var n
		;(this.name = F(t.name)),
			(this.description = t.description),
			(this.resolveType = t.resolveType),
			(this.extensions = w(t.extensions)),
			(this.astNode = t.astNode),
			(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
			(this._fields = De.bind(void 0, t)),
			(this._interfaces = Le.bind(void 0, t)),
			t.resolveType == null ||
				typeof t.resolveType == 'function' ||
				I(
					!1,
					`${this.name} must provide "resolveType" as a function, but got: ${N(t.resolveType)}.`
				)
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLInterfaceType'
	}
	getFields() {
		return typeof this._fields == 'function' && (this._fields = this._fields()), this._fields
	}
	getInterfaces() {
		return (
			typeof this._interfaces == 'function' && (this._interfaces = this._interfaces()),
			this._interfaces
		)
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			interfaces: this.getInterfaces(),
			fields: _e(this.getFields()),
			resolveType: this.resolveType,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		}
	}
	toString() {
		return this.name
	}
	toJSON() {
		return this.toString()
	}
}
s(vt, 'GraphQLInterfaceType')
class ht {
	constructor(t) {
		var n
		;(this.name = F(t.name)),
			(this.description = t.description),
			(this.resolveType = t.resolveType),
			(this.extensions = w(t.extensions)),
			(this.astNode = t.astNode),
			(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
			(this._types = mt.bind(void 0, t)),
			t.resolveType == null ||
				typeof t.resolveType == 'function' ||
				I(
					!1,
					`${this.name} must provide "resolveType" as a function, but got: ${N(t.resolveType)}.`
				)
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLUnionType'
	}
	getTypes() {
		return typeof this._types == 'function' && (this._types = this._types()), this._types
	}
	toConfig() {
		return {
			name: this.name,
			description: this.description,
			types: this.getTypes(),
			resolveType: this.resolveType,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		}
	}
	toString() {
		return this.name
	}
	toJSON() {
		return this.toString()
	}
}
s(ht, 'GraphQLUnionType')
function mt(e) {
	const t = Se(e.types)
	return (
		Array.isArray(t) ||
			I(
				!1,
				`Must provide Array of types or a function which returns such an array for Union ${e.name}.`
			),
		t
	)
}
s(mt, 'defineTypes')
class ue {
	constructor(t) {
		var n
		;(this.name = F(t.name)),
			(this.description = t.description),
			(this.extensions = w(t.extensions)),
			(this.astNode = t.astNode),
			(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
			(this._values = Tt(this.name, t.values)),
			(this._valueLookup = new Map(this._values.map((i) => [i.value, i]))),
			(this._nameLookup = it(this._values, (i) => i.name))
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLEnumType'
	}
	getValues() {
		return this._values
	}
	getValue(t) {
		return this._nameLookup[t]
	}
	serialize(t) {
		const n = this._valueLookup.get(t)
		if (n === void 0) throw new T(`Enum "${this.name}" cannot represent value: ${N(t)}`)
		return n.name
	}
	parseValue(t) {
		if (typeof t != 'string') {
			const i = N(t)
			throw new T(`Enum "${this.name}" cannot represent non-string value: ${i}.` + q(this, i))
		}
		const n = this.getValue(t)
		if (n == null) throw new T(`Value "${t}" does not exist in "${this.name}" enum.` + q(this, t))
		return n.value
	}
	parseLiteral(t, n) {
		if (t.kind !== y.ENUM) {
			const r = V(t)
			throw new T(`Enum "${this.name}" cannot represent non-enum value: ${r}.` + q(this, r), {
				nodes: t
			})
		}
		const i = this.getValue(t.value)
		if (i == null) {
			const r = V(t)
			throw new T(`Value "${r}" does not exist in "${this.name}" enum.` + q(this, r), { nodes: t })
		}
		return i.value
	}
	toConfig() {
		const t = se(
			this.getValues(),
			(n) => n.name,
			(n) => ({
				description: n.description,
				value: n.value,
				deprecationReason: n.deprecationReason,
				extensions: n.extensions,
				astNode: n.astNode
			})
		)
		return {
			name: this.name,
			description: this.description,
			values: t,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		}
	}
	toString() {
		return this.name
	}
	toJSON() {
		return this.toString()
	}
}
s(ue, 'GraphQLEnumType')
function q(e, t) {
	const n = e.getValues().map((r) => r.name),
		i = st(t, n)
	return nt('the enum value', i)
}
s(q, 'didYouMeanEnumValue')
function Tt(e, t) {
	return (
		M(t) || I(!1, `${e} values must be an object with value names as keys.`),
		Object.entries(t).map(
			([n, i]) => (
				M(i) ||
					I(
						!1,
						`${e}.${n} must refer to an object with a "value" key representing an internal value but got: ${N(
							i
						)}.`
					),
				{
					name: ut(n),
					description: i.description,
					value: i.value !== void 0 ? i.value : n,
					deprecationReason: i.deprecationReason,
					extensions: w(i.extensions),
					astNode: i.astNode
				}
			)
		)
	)
}
s(Tt, 'defineEnumValues')
class Nt {
	constructor(t) {
		var n
		;(this.name = F(t.name)),
			(this.description = t.description),
			(this.extensions = w(t.extensions)),
			(this.astNode = t.astNode),
			(this.extensionASTNodes = (n = t.extensionASTNodes) !== null && n !== void 0 ? n : []),
			(this._fields = gt.bind(void 0, t))
	}
	get [Symbol.toStringTag]() {
		return 'GraphQLInputObjectType'
	}
	getFields() {
		return typeof this._fields == 'function' && (this._fields = this._fields()), this._fields
	}
	toConfig() {
		const t = Z(this.getFields(), (n) => ({
			description: n.description,
			type: n.type,
			defaultValue: n.defaultValue,
			deprecationReason: n.deprecationReason,
			extensions: n.extensions,
			astNode: n.astNode
		}))
		return {
			name: this.name,
			description: this.description,
			fields: t,
			extensions: this.extensions,
			astNode: this.astNode,
			extensionASTNodes: this.extensionASTNodes
		}
	}
	toString() {
		return this.name
	}
	toJSON() {
		return this.toString()
	}
}
s(Nt, 'GraphQLInputObjectType')
function gt(e) {
	const t = Ae(e.fields)
	return (
		M(t) ||
			I(
				!1,
				`${e.name} fields must be an object with field names as keys or a function which returns such an object.`
			),
		Z(
			t,
			(n, i) => (
				!('resolve' in n) ||
					I(
						!1,
						`${e.name}.${i} field has a resolve property, but Input Types cannot define resolvers.`
					),
				{
					name: F(i),
					description: n.description,
					type: n.type,
					defaultValue: n.defaultValue,
					deprecationReason: n.deprecationReason,
					extensions: w(n.extensions),
					astNode: n.astNode
				}
			)
		)
	)
}
s(gt, 'defineInputFieldMap')
const pe = 2147483647,
	de = -2147483648
new B({
	name: 'Int',
	description:
		'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
	serialize(e) {
		const t = Y(e)
		if (typeof t == 'boolean') return t ? 1 : 0
		let n = t
		if (
			(typeof t == 'string' && t !== '' && (n = Number(t)),
			typeof n != 'number' || !Number.isInteger(n))
		)
			throw new T(`Int cannot represent non-integer value: ${N(t)}`)
		if (n > pe || n < de)
			throw new T('Int cannot represent non 32-bit signed integer value: ' + N(t))
		return n
	},
	parseValue(e) {
		if (typeof e != 'number' || !Number.isInteger(e))
			throw new T(`Int cannot represent non-integer value: ${N(e)}`)
		if (e > pe || e < de) throw new T(`Int cannot represent non 32-bit signed integer value: ${e}`)
		return e
	},
	parseLiteral(e) {
		if (e.kind !== y.INT)
			throw new T(`Int cannot represent non-integer value: ${V(e)}`, { nodes: e })
		const t = parseInt(e.value, 10)
		if (t > pe || t < de)
			throw new T(`Int cannot represent non 32-bit signed integer value: ${e.value}`, { nodes: e })
		return t
	}
})
new B({
	name: 'Float',
	description:
		'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
	serialize(e) {
		const t = Y(e)
		if (typeof t == 'boolean') return t ? 1 : 0
		let n = t
		if (
			(typeof t == 'string' && t !== '' && (n = Number(t)),
			typeof n != 'number' || !Number.isFinite(n))
		)
			throw new T(`Float cannot represent non numeric value: ${N(t)}`)
		return n
	},
	parseValue(e) {
		if (typeof e != 'number' || !Number.isFinite(e))
			throw new T(`Float cannot represent non numeric value: ${N(e)}`)
		return e
	},
	parseLiteral(e) {
		if (e.kind !== y.FLOAT && e.kind !== y.INT)
			throw new T(`Float cannot represent non numeric value: ${V(e)}`, e)
		return parseFloat(e.value)
	}
})
const O = new B({
		name: 'String',
		description:
			'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
		serialize(e) {
			const t = Y(e)
			if (typeof t == 'string') return t
			if (typeof t == 'boolean') return t ? 'true' : 'false'
			if (typeof t == 'number' && Number.isFinite(t)) return t.toString()
			throw new T(`String cannot represent value: ${N(e)}`)
		},
		parseValue(e) {
			if (typeof e != 'string') throw new T(`String cannot represent a non string value: ${N(e)}`)
			return e
		},
		parseLiteral(e) {
			if (e.kind !== y.STRING)
				throw new T(`String cannot represent a non string value: ${V(e)}`, { nodes: e })
			return e.value
		}
	}),
	j = new B({
		name: 'Boolean',
		description: 'The `Boolean` scalar type represents `true` or `false`.',
		serialize(e) {
			const t = Y(e)
			if (typeof t == 'boolean') return t
			if (Number.isFinite(t)) return t !== 0
			throw new T(`Boolean cannot represent a non boolean value: ${N(t)}`)
		},
		parseValue(e) {
			if (typeof e != 'boolean')
				throw new T(`Boolean cannot represent a non boolean value: ${N(e)}`)
			return e
		},
		parseLiteral(e) {
			if (e.kind !== y.BOOLEAN)
				throw new T(`Boolean cannot represent a non boolean value: ${V(e)}`, { nodes: e })
			return e.value
		}
	}),
	$t = new B({
		name: 'ID',
		description:
			'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
		serialize(e) {
			const t = Y(e)
			if (typeof t == 'string') return t
			if (Number.isInteger(t)) return String(t)
			throw new T(`ID cannot represent value: ${N(e)}`)
		},
		parseValue(e) {
			if (typeof e == 'string') return e
			if (typeof e == 'number' && Number.isInteger(e)) return e.toString()
			throw new T(`ID cannot represent value: ${N(e)}`)
		},
		parseLiteral(e) {
			if (e.kind !== y.STRING && e.kind !== y.INT)
				throw new T('ID cannot represent a non-string and non-integer value: ' + V(e), { nodes: e })
			return e.value
		}
	})
function Y(e) {
	if (J(e)) {
		if (typeof e.valueOf == 'function') {
			const t = e.valueOf()
			if (!J(t)) return t
		}
		if (typeof e.toJSON == 'function') return e.toJSON()
	}
	return e
}
s(Y, 'serializeObject')
function G(e, t) {
	if (ee(t)) {
		const n = G(e, t.ofType)
		return (n == null ? void 0 : n.kind) === y.NULL ? null : n
	}
	if (e === null) return { kind: y.NULL }
	if (e === void 0) return null
	if (le(t)) {
		const n = t.ofType
		if (tt(e)) {
			const i = []
			for (const r of e) {
				const a = G(r, n)
				a != null && i.push(a)
			}
			return { kind: y.LIST, values: i }
		}
		return G(e, n)
	}
	if (H(t)) {
		if (!J(e)) return null
		const n = []
		for (const i of Object.values(t.getFields())) {
			const r = G(e[i.name], i.type)
			r && n.push({ kind: y.OBJECT_FIELD, name: { kind: y.NAME, value: i.name }, value: r })
		}
		return { kind: y.OBJECT, fields: n }
	}
	if (ct(t)) {
		const n = t.serialize(e)
		if (n == null) return null
		if (typeof n == 'boolean') return { kind: y.BOOLEAN, value: n }
		if (typeof n == 'number' && Number.isFinite(n)) {
			const i = String(n)
			return Ue.test(i) ? { kind: y.INT, value: i } : { kind: y.FLOAT, value: i }
		}
		if (typeof n == 'string')
			return Q(t)
				? { kind: y.ENUM, value: n }
				: t === $t && Ue.test(n)
				? { kind: y.INT, value: n }
				: { kind: y.STRING, value: n }
		throw new TypeError(`Cannot convert value to AST: ${N(n)}.`)
	}
	re(!1, 'Unexpected input type: ' + N(t))
}
s(G, 'astFromValue')
const Ue = /^-?(?:0|[1-9][0-9]*)$/,
	Mt = new k({
		name: '__Schema',
		description:
			'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
		fields: () => ({
			description: { type: O, resolve: (e) => e.description },
			types: {
				description: 'A list of all types supported by this server.',
				type: new v(new D(new v(x))),
				resolve(e) {
					return Object.values(e.getTypeMap())
				}
			},
			queryType: {
				description: 'The type that query operations will be rooted at.',
				type: new v(x),
				resolve: (e) => e.getQueryType()
			},
			mutationType: {
				description:
					'If this server supports mutation, the type that mutation operations will be rooted at.',
				type: x,
				resolve: (e) => e.getMutationType()
			},
			subscriptionType: {
				description:
					'If this server support subscription, the type that subscription operations will be rooted at.',
				type: x,
				resolve: (e) => e.getSubscriptionType()
			},
			directives: {
				description: 'A list of all directives supported by this server.',
				type: new v(new D(new v(Bt))),
				resolve: (e) => e.getDirectives()
			}
		})
	}),
	Bt = new k({
		name: '__Directive',
		description: `A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,
		fields: () => ({
			name: { type: new v(O), resolve: (e) => e.name },
			description: { type: O, resolve: (e) => e.description },
			isRepeatable: { type: new v(j), resolve: (e) => e.isRepeatable },
			locations: { type: new v(new D(new v(Gt))), resolve: (e) => e.locations },
			args: {
				type: new v(new D(new v(we))),
				args: { includeDeprecated: { type: j, defaultValue: !1 } },
				resolve(e, { includeDeprecated: t }) {
					return t ? e.args : e.args.filter((n) => n.deprecationReason == null)
				}
			}
		})
	}),
	Gt = new ue({
		name: '__DirectiveLocation',
		description:
			'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
		values: {
			QUERY: { value: E.QUERY, description: 'Location adjacent to a query operation.' },
			MUTATION: { value: E.MUTATION, description: 'Location adjacent to a mutation operation.' },
			SUBSCRIPTION: {
				value: E.SUBSCRIPTION,
				description: 'Location adjacent to a subscription operation.'
			},
			FIELD: { value: E.FIELD, description: 'Location adjacent to a field.' },
			FRAGMENT_DEFINITION: {
				value: E.FRAGMENT_DEFINITION,
				description: 'Location adjacent to a fragment definition.'
			},
			FRAGMENT_SPREAD: {
				value: E.FRAGMENT_SPREAD,
				description: 'Location adjacent to a fragment spread.'
			},
			INLINE_FRAGMENT: {
				value: E.INLINE_FRAGMENT,
				description: 'Location adjacent to an inline fragment.'
			},
			VARIABLE_DEFINITION: {
				value: E.VARIABLE_DEFINITION,
				description: 'Location adjacent to a variable definition.'
			},
			SCHEMA: { value: E.SCHEMA, description: 'Location adjacent to a schema definition.' },
			SCALAR: { value: E.SCALAR, description: 'Location adjacent to a scalar definition.' },
			OBJECT: { value: E.OBJECT, description: 'Location adjacent to an object type definition.' },
			FIELD_DEFINITION: {
				value: E.FIELD_DEFINITION,
				description: 'Location adjacent to a field definition.'
			},
			ARGUMENT_DEFINITION: {
				value: E.ARGUMENT_DEFINITION,
				description: 'Location adjacent to an argument definition.'
			},
			INTERFACE: {
				value: E.INTERFACE,
				description: 'Location adjacent to an interface definition.'
			},
			UNION: { value: E.UNION, description: 'Location adjacent to a union definition.' },
			ENUM: { value: E.ENUM, description: 'Location adjacent to an enum definition.' },
			ENUM_VALUE: {
				value: E.ENUM_VALUE,
				description: 'Location adjacent to an enum value definition.'
			},
			INPUT_OBJECT: {
				value: E.INPUT_OBJECT,
				description: 'Location adjacent to an input object type definition.'
			},
			INPUT_FIELD_DEFINITION: {
				value: E.INPUT_FIELD_DEFINITION,
				description: 'Location adjacent to an input object field definition.'
			}
		}
	}),
	x = new k({
		name: '__Type',
		description:
			'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
		fields: () => ({
			kind: {
				type: new v(Qt),
				resolve(e) {
					if (oe(e)) return b.SCALAR
					if (W(e)) return b.OBJECT
					if (P(e)) return b.INTERFACE
					if (ae(e)) return b.UNION
					if (Q(e)) return b.ENUM
					if (H(e)) return b.INPUT_OBJECT
					if (le(e)) return b.LIST
					if (ee(e)) return b.NON_NULL
					re(!1, `Unexpected type: "${N(e)}".`)
				}
			},
			name: { type: O, resolve: (e) => ('name' in e ? e.name : void 0) },
			description: { type: O, resolve: (e) => ('description' in e ? e.description : void 0) },
			specifiedByURL: {
				type: O,
				resolve: (e) => ('specifiedByURL' in e ? e.specifiedByURL : void 0)
			},
			fields: {
				type: new D(new v(Pt)),
				args: { includeDeprecated: { type: j, defaultValue: !1 } },
				resolve(e, { includeDeprecated: t }) {
					if (W(e) || P(e)) {
						const n = Object.values(e.getFields())
						return t ? n : n.filter((i) => i.deprecationReason == null)
					}
				}
			},
			interfaces: {
				type: new D(new v(x)),
				resolve(e) {
					if (W(e) || P(e)) return e.getInterfaces()
				}
			},
			possibleTypes: {
				type: new D(new v(x)),
				resolve(e, t, n, { schema: i }) {
					if (pt(e)) return i.getPossibleTypes(e)
				}
			},
			enumValues: {
				type: new D(new v(Jt)),
				args: { includeDeprecated: { type: j, defaultValue: !1 } },
				resolve(e, { includeDeprecated: t }) {
					if (Q(e)) {
						const n = e.getValues()
						return t ? n : n.filter((i) => i.deprecationReason == null)
					}
				}
			},
			inputFields: {
				type: new D(new v(we)),
				args: { includeDeprecated: { type: j, defaultValue: !1 } },
				resolve(e, { includeDeprecated: t }) {
					if (H(e)) {
						const n = Object.values(e.getFields())
						return t ? n : n.filter((i) => i.deprecationReason == null)
					}
				}
			},
			ofType: { type: x, resolve: (e) => ('ofType' in e ? e.ofType : void 0) }
		})
	}),
	Pt = new k({
		name: '__Field',
		description:
			'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
		fields: () => ({
			name: { type: new v(O), resolve: (e) => e.name },
			description: { type: O, resolve: (e) => e.description },
			args: {
				type: new v(new D(new v(we))),
				args: { includeDeprecated: { type: j, defaultValue: !1 } },
				resolve(e, { includeDeprecated: t }) {
					return t ? e.args : e.args.filter((n) => n.deprecationReason == null)
				}
			},
			type: { type: new v(x), resolve: (e) => e.type },
			isDeprecated: { type: new v(j), resolve: (e) => e.deprecationReason != null },
			deprecationReason: { type: O, resolve: (e) => e.deprecationReason }
		})
	}),
	we = new k({
		name: '__InputValue',
		description:
			'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
		fields: () => ({
			name: { type: new v(O), resolve: (e) => e.name },
			description: { type: O, resolve: (e) => e.description },
			type: { type: new v(x), resolve: (e) => e.type },
			defaultValue: {
				type: O,
				description:
					'A GraphQL-formatted string representing the default value for this input value.',
				resolve(e) {
					const { type: t, defaultValue: n } = e,
						i = G(n, t)
					return i ? V(i) : null
				}
			},
			isDeprecated: { type: new v(j), resolve: (e) => e.deprecationReason != null },
			deprecationReason: { type: O, resolve: (e) => e.deprecationReason }
		})
	}),
	Jt = new k({
		name: '__EnumValue',
		description:
			'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
		fields: () => ({
			name: { type: new v(O), resolve: (e) => e.name },
			description: { type: O, resolve: (e) => e.description },
			isDeprecated: { type: new v(j), resolve: (e) => e.deprecationReason != null },
			deprecationReason: { type: O, resolve: (e) => e.deprecationReason }
		})
	})
let b
;(function (e) {
	;(e.SCALAR = 'SCALAR'),
		(e.OBJECT = 'OBJECT'),
		(e.INTERFACE = 'INTERFACE'),
		(e.UNION = 'UNION'),
		(e.ENUM = 'ENUM'),
		(e.INPUT_OBJECT = 'INPUT_OBJECT'),
		(e.LIST = 'LIST'),
		(e.NON_NULL = 'NON_NULL')
})(b || (b = {}))
const Qt = new ue({
		name: '__TypeKind',
		description: 'An enum describing what kind of type a given `__Type` is.',
		values: {
			SCALAR: { value: b.SCALAR, description: 'Indicates this type is a scalar.' },
			OBJECT: {
				value: b.OBJECT,
				description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
			},
			INTERFACE: {
				value: b.INTERFACE,
				description:
					'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.'
			},
			UNION: {
				value: b.UNION,
				description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
			},
			ENUM: {
				value: b.ENUM,
				description: 'Indicates this type is an enum. `enumValues` is a valid field.'
			},
			INPUT_OBJECT: {
				value: b.INPUT_OBJECT,
				description: 'Indicates this type is an input object. `inputFields` is a valid field.'
			},
			LIST: {
				value: b.LIST,
				description: 'Indicates this type is a list. `ofType` is a valid field.'
			},
			NON_NULL: {
				value: b.NON_NULL,
				description: 'Indicates this type is a non-null. `ofType` is a valid field.'
			}
		}
	}),
	Ce = {
		name: '__schema',
		type: new v(Mt),
		description: 'Access the current type schema of this server.',
		args: [],
		resolve: (e, t, n, { schema: i }) => i,
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	},
	ke = {
		name: '__type',
		type: x,
		description: 'Request the type information of a single type.',
		args: [
			{
				name: 'name',
				description: void 0,
				type: new v(O),
				defaultValue: void 0,
				deprecationReason: void 0,
				extensions: Object.create(null),
				astNode: void 0
			}
		],
		resolve: (e, { name: t }, n, { schema: i }) => i.getType(t),
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	},
	$e = {
		name: '__typename',
		type: new v(O),
		description: 'The name of the current Object type at runtime.',
		args: [],
		resolve: (e, t, n, { parentType: i }) => i.name,
		deprecationReason: void 0,
		extensions: Object.create(null),
		astNode: void 0
	}
function Yt(e, t) {
	const n = {
		schema: e,
		type: null,
		parentType: null,
		inputType: null,
		directiveDef: null,
		fieldDef: null,
		argDef: null,
		argDefs: null,
		objectFieldDefs: null
	}
	return (
		Et(t, (i) => {
			var r, a
			switch (i.kind) {
				case 'Query':
				case 'ShortQuery':
					n.type = e.getQueryType()
					break
				case 'Mutation':
					n.type = e.getMutationType()
					break
				case 'Subscription':
					n.type = e.getSubscriptionType()
					break
				case 'InlineFragment':
				case 'FragmentDefinition':
					i.type && (n.type = e.getType(i.type))
					break
				case 'Field':
				case 'AliasedField':
					;(n.fieldDef = n.type && i.name ? Ie(e, n.parentType, i.name) : null),
						(n.type = (r = n.fieldDef) === null || r === void 0 ? void 0 : r.type)
					break
				case 'SelectionSet':
					n.parentType = n.type ? te(n.type) : null
					break
				case 'Directive':
					n.directiveDef = i.name ? e.getDirective(i.name) : null
					break
				case 'Arguments':
					const l = i.prevState
						? i.prevState.kind === 'Field'
							? n.fieldDef
							: i.prevState.kind === 'Directive'
							? n.directiveDef
							: i.prevState.kind === 'AliasedField'
							? i.prevState.name && Ie(e, n.parentType, i.prevState.name)
							: null
						: null
					n.argDefs = l ? l.args : null
					break
				case 'Argument':
					if (((n.argDef = null), n.argDefs)) {
						for (let m = 0; m < n.argDefs.length; m++)
							if (n.argDefs[m].name === i.name) {
								n.argDef = n.argDefs[m]
								break
							}
					}
					n.inputType = (a = n.argDef) === null || a === void 0 ? void 0 : a.type
					break
				case 'EnumValue':
					const p = n.inputType ? te(n.inputType) : null
					n.enumValue = p instanceof At ? It(p.getValues(), (m) => m.value === i.name) : null
					break
				case 'ListValue':
					const f = n.inputType ? Ot(n.inputType) : null
					n.inputType = f instanceof St ? f.ofType : null
					break
				case 'ObjectValue':
					const d = n.inputType ? te(n.inputType) : null
					n.objectFieldDefs = d instanceof bt ? d.getFields() : null
					break
				case 'ObjectField':
					const u = i.name && n.objectFieldDefs ? n.objectFieldDefs[i.name] : null
					n.inputType = u == null ? void 0 : u.type
					break
				case 'NamedType':
					n.type = i.name ? e.getType(i.name) : null
					break
			}
		}),
		n
	)
}
s(Yt, 'getTypeInfo')
function Ie(e, t, n) {
	if (n === Ce.name && e.getQueryType() === t) return Ce
	if (n === ke.name && e.getQueryType() === t) return ke
	if (n === $e.name && Lt(t)) return $e
	if (t && t.getFields) return t.getFields()[n]
}
s(Ie, 'getFieldDef')
function It(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return e[n]
}
s(It, 'find')
function zt(e) {
	return {
		kind: 'Field',
		schema: e.schema,
		field: e.fieldDef,
		type: Fe(e.fieldDef) ? null : e.parentType
	}
}
s(zt, 'getFieldReference')
function qt(e) {
	return { kind: 'Directive', schema: e.schema, directive: e.directiveDef }
}
s(qt, 'getDirectiveReference')
function Xt(e) {
	return e.directiveDef
		? { kind: 'Argument', schema: e.schema, argument: e.argDef, directive: e.directiveDef }
		: {
				kind: 'Argument',
				schema: e.schema,
				argument: e.argDef,
				field: e.fieldDef,
				type: Fe(e.fieldDef) ? null : e.parentType
		  }
}
s(Xt, 'getArgumentReference')
function Wt(e) {
	return {
		kind: 'EnumValue',
		value: e.enumValue || void 0,
		type: e.inputType ? te(e.inputType) : void 0
	}
}
s(Wt, 'getEnumValueReference')
function Ht(e, t) {
	return { kind: 'Type', schema: e.schema, type: t || e.type }
}
s(Ht, 'getTypeReference')
function Fe(e) {
	return e.name.slice(0, 2) === '__'
}
s(Fe, 'isMetaField')
export { Xt as K, zt as W, Yt as X, qt as Z, Wt as e, Ht as n }
