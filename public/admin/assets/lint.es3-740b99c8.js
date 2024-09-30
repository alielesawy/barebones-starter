import { C as H } from './codemirror.es-52e8b92d.js'
import './codemirror.es2-5884f31a.js'
import { G as B, e as J, h as P, m as U, t as D } from './index-2cabfba0.js'
var M = Object.defineProperty,
	n = (e, r) => M(e, 'name', { value: r, configurable: !0 })
function G(e) {
	;(d = e), (x = e.length), (s = u = g = -1), a(), N()
	const r = S()
	return p('EOF'), r
}
n(G, 'jsonParse')
let d, x, s, u, g, t, l
function S() {
	const e = s,
		r = []
	if ((p('{'), !v('}'))) {
		do r.push(L())
		while (v(','))
		p('}')
	}
	return { kind: 'Object', start: e, end: g, members: r }
}
n(S, 'parseObj')
function L() {
	const e = s,
		r = l === 'String' ? j() : null
	p('String'), p(':')
	const i = T()
	return { kind: 'Member', start: e, end: g, key: r, value: i }
}
n(L, 'parseMember')
function V() {
	const e = s,
		r = []
	if ((p('['), !v(']'))) {
		do r.push(T())
		while (v(','))
		p(']')
	}
	return { kind: 'Array', start: e, end: g, values: r }
}
n(V, 'parseArr')
function T() {
	switch (l) {
		case '[':
			return V()
		case '{':
			return S()
		case 'String':
		case 'Number':
		case 'Boolean':
		case 'Null':
			const e = j()
			return N(), e
	}
	p('Value')
}
n(T, 'parseVal')
function j() {
	return { kind: l, start: s, end: u, value: JSON.parse(d.slice(s, u)) }
}
n(j, 'curToken')
function p(e) {
	if (l === e) {
		N()
		return
	}
	let r
	if (l === 'EOF') r = '[end of file]'
	else if (u - s > 1) r = '`' + d.slice(s, u) + '`'
	else {
		const i = d.slice(s).match(/^.+?\b/)
		r = '`' + (i ? i[0] : d[s]) + '`'
	}
	throw m(`Expected ${e} but found ${r}.`)
}
n(p, 'expect')
class F extends Error {
	constructor(r, i) {
		super(r), (this.position = i)
	}
}
n(F, 'JSONSyntaxError')
function m(e) {
	return new F(e, { start: s, end: u })
}
n(m, 'syntaxError')
function v(e) {
	if (l === e) return N(), !0
}
n(v, 'skip')
function a() {
	return u < x && (u++, (t = u === x ? 0 : d.charCodeAt(u))), t
}
n(a, 'ch')
function N() {
	for (g = u; t === 9 || t === 10 || t === 13 || t === 32; ) a()
	if (t === 0) {
		l = 'EOF'
		return
	}
	switch (((s = u), t)) {
		case 34:
			return (l = 'String'), Q()
		case 45:
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
			return (l = 'Number'), I()
		case 102:
			if (d.slice(s, s + 5) !== 'false') break
			;(u += 4), a(), (l = 'Boolean')
			return
		case 110:
			if (d.slice(s, s + 4) !== 'null') break
			;(u += 3), a(), (l = 'Null')
			return
		case 116:
			if (d.slice(s, s + 4) !== 'true') break
			;(u += 3), a(), (l = 'Boolean')
			return
	}
	;(l = d[s]), a()
}
n(N, 'lex')
function Q() {
	for (a(); t !== 34 && t > 31; )
		if (t === 92)
			switch (((t = a()), t)) {
				case 34:
				case 47:
				case 92:
				case 98:
				case 102:
				case 110:
				case 114:
				case 116:
					a()
					break
				case 117:
					a(), k(), k(), k(), k()
					break
				default:
					throw m('Bad character escape sequence.')
			}
		else {
			if (u === x) throw m('Unterminated string.')
			a()
		}
	if (t === 34) {
		a()
		return
	}
	throw m('Unterminated string.')
}
n(Q, 'readString')
function k() {
	if ((t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)) return a()
	throw m('Expected hexadecimal digit.')
}
n(k, 'readHex')
function I() {
	t === 45 && a(),
		t === 48 ? a() : w(),
		t === 46 && (a(), w()),
		(t === 69 || t === 101) && ((t = a()), (t === 43 || t === 45) && a(), w())
}
n(I, 'readNumber')
function w() {
	if (t < 48 || t > 57) throw m('Expected decimal digit.')
	do a()
	while (t >= 48 && t <= 57)
}
n(w, 'readDigits')
H.registerHelper('lint', 'graphql-variables', (e, r, i) => {
	if (!e) return []
	let f
	try {
		f = G(e)
	} catch (c) {
		if (c instanceof F) return [O(i, c.position, c.message)]
		throw c
	}
	const { variableToType: o } = r
	return o ? A(i, o, f) : []
})
function A(e, r, i) {
	var f
	const o = []
	for (const c of i.members)
		if (c) {
			const h = (f = c.key) === null || f === void 0 ? void 0 : f.value,
				b = r[h]
			if (b) for (const [E, C] of y(b, c.value)) o.push(O(e, E, C))
			else o.push(O(e, c.key, `Variable "$${h}" does not appear in any GraphQL query.`))
		}
	return o
}
n(A, 'validateVariables')
function y(e, r) {
	if (!e || !r) return []
	if (e instanceof B)
		return r.kind === 'Null'
			? [[r, `Type "${e}" is non-nullable and cannot be null.`]]
			: y(e.ofType, r)
	if (r.kind === 'Null') return []
	if (e instanceof J) {
		const i = e.ofType
		if (r.kind === 'Array') {
			const f = r.values || []
			return $(f, (o) => y(i, o))
		}
		return y(i, r)
	}
	if (e instanceof P) {
		if (r.kind !== 'Object') return [[r, `Type "${e}" must be an Object.`]]
		const i = Object.create(null),
			f = $(r.members, (o) => {
				var c
				const h = (c = o == null ? void 0 : o.key) === null || c === void 0 ? void 0 : c.value
				i[h] = !0
				const b = e.getFields()[h]
				if (!b) return [[o.key, `Type "${e}" does not have a field "${h}".`]]
				const E = b ? b.type : void 0
				return y(E, o.value)
			})
		for (const o of Object.keys(e.getFields())) {
			const c = e.getFields()[o]
			!i[o] &&
				c.type instanceof B &&
				!c.defaultValue &&
				f.push([r, `Object of type "${e}" is missing required field "${o}".`])
		}
		return f
	}
	return (e.name === 'Boolean' && r.kind !== 'Boolean') ||
		(e.name === 'String' && r.kind !== 'String') ||
		(e.name === 'ID' && r.kind !== 'Number' && r.kind !== 'String') ||
		(e.name === 'Float' && r.kind !== 'Number') ||
		(e.name === 'Int' && (r.kind !== 'Number' || (r.value | 0) !== r.value))
		? [[r, `Expected value of type "${e}".`]]
		: (e instanceof U || e instanceof D) &&
		  ((r.kind !== 'String' && r.kind !== 'Number' && r.kind !== 'Boolean' && r.kind !== 'Null') ||
				q(e.parseValue(r.value)))
		? [[r, `Expected value of type "${e}".`]]
		: []
}
n(y, 'validateValue')
function O(e, r, i) {
	return {
		message: i,
		severity: 'error',
		type: 'validation',
		from: e.posFromIndex(r.start),
		to: e.posFromIndex(r.end)
	}
}
n(O, 'lintError')
function q(e) {
	return e == null || e !== e
}
n(q, 'isNullish')
function $(e, r) {
	return Array.prototype.concat.apply([], e.map(r))
}
n($, 'mapCat')
