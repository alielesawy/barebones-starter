import { C as g } from './codemirror.es-52e8b92d.js'
import { X as C, W as M, Z as x, K as L, e as V, n as l } from './SchemaReference.es-46a20649.js'
import './info-addon.es-c9b2027b.js'
import './codemirror.es2-5884f31a.js'
import './forEachState.es-b2033c2b.js'
import { G as u, e as f } from './index-2cabfba0.js'
var k = Object.defineProperty,
	d = (r, e) => k(r, 'name', { value: e, configurable: !0 })
g.registerHelper('info', 'graphql', (r, e) => {
	if (!e.schema || !r.state) return
	const { kind: i, step: t } = r.state,
		n = C(e.schema, r.state)
	if ((i === 'Field' && t === 0 && n.fieldDef) || (i === 'AliasedField' && t === 2 && n.fieldDef)) {
		const c = document.createElement('div')
		;(c.className = 'CodeMirror-info-header'), v(c, n, e)
		const o = document.createElement('div')
		return o.append(c), p(o, e, n.fieldDef), o
	}
	if (i === 'Directive' && t === 1 && n.directiveDef) {
		const c = document.createElement('div')
		;(c.className = 'CodeMirror-info-header'), E(c, n, e)
		const o = document.createElement('div')
		return o.append(c), p(o, e, n.directiveDef), o
	}
	if (i === 'Argument' && t === 0 && n.argDef) {
		const c = document.createElement('div')
		;(c.className = 'CodeMirror-info-header'), y(c, n, e)
		const o = document.createElement('div')
		return o.append(c), p(o, e, n.argDef), o
	}
	if (i === 'EnumValue' && n.enumValue && n.enumValue.description) {
		const c = document.createElement('div')
		;(c.className = 'CodeMirror-info-header'), N(c, n, e)
		const o = document.createElement('div')
		return o.append(c), p(o, e, n.enumValue), o
	}
	if (i === 'NamedType' && n.type && n.type.description) {
		const c = document.createElement('div')
		;(c.className = 'CodeMirror-info-header'), m(c, n, e, n.type)
		const o = document.createElement('div')
		return o.append(c), p(o, e, n.type), o
	}
})
function v(r, e, i) {
	D(r, e, i), s(r, e, i, e.type)
}
d(v, 'renderField')
function D(r, e, i) {
	var t
	const n = ((t = e.fieldDef) === null || t === void 0 ? void 0 : t.name) || ''
	a(r, n, 'field-name', i, M(e))
}
d(D, 'renderQualifiedField')
function E(r, e, i) {
	var t
	const n = '@' + (((t = e.directiveDef) === null || t === void 0 ? void 0 : t.name) || '')
	a(r, n, 'directive-name', i, x(e))
}
d(E, 'renderDirective')
function y(r, e, i) {
	var t
	const n = ((t = e.argDef) === null || t === void 0 ? void 0 : t.name) || ''
	a(r, n, 'arg-name', i, L(e)), s(r, e, i, e.inputType)
}
d(y, 'renderArg')
function N(r, e, i) {
	var t
	const n = ((t = e.enumValue) === null || t === void 0 ? void 0 : t.name) || ''
	m(r, e, i, e.inputType), a(r, '.'), a(r, n, 'enum-value', i, V(e))
}
d(N, 'renderEnumValue')
function s(r, e, i, t) {
	const n = document.createElement('span')
	;(n.className = 'type-name-pill'),
		t instanceof u
			? (m(n, e, i, t.ofType), a(n, '!'))
			: t instanceof f
			? (a(n, '['), m(n, e, i, t.ofType), a(n, ']'))
			: a(n, (t == null ? void 0 : t.name) || '', 'type-name', i, l(e, t)),
		r.append(n)
}
d(s, 'renderTypeAnnotation')
function m(r, e, i, t) {
	t instanceof u
		? (m(r, e, i, t.ofType), a(r, '!'))
		: t instanceof f
		? (a(r, '['), m(r, e, i, t.ofType), a(r, ']'))
		: a(r, (t == null ? void 0 : t.name) || '', 'type-name', i, l(e, t))
}
d(m, 'renderType')
function p(r, e, i) {
	const { description: t } = i
	if (t) {
		const n = document.createElement('div')
		;(n.className = 'info-description'),
			e.renderDescription
				? (n.innerHTML = e.renderDescription(t))
				: n.append(document.createTextNode(t)),
			r.append(n)
	}
	T(r, e, i)
}
d(p, 'renderDescription')
function T(r, e, i) {
	const t = i.deprecationReason
	if (t) {
		const n = document.createElement('div')
		;(n.className = 'info-deprecation'), r.append(n)
		const c = document.createElement('span')
		;(c.className = 'info-deprecation-label'),
			c.append(document.createTextNode('Deprecated')),
			n.append(c)
		const o = document.createElement('div')
		;(o.className = 'info-deprecation-reason'),
			e.renderDescription
				? (o.innerHTML = e.renderDescription(t))
				: o.append(document.createTextNode(t)),
			n.append(o)
	}
}
d(T, 'renderDeprecation')
function a(r, e, i = '', t = { onClick: null }, n = null) {
	if (i) {
		const { onClick: c } = t
		let o
		c
			? ((o = document.createElement('a')),
			  (o.href = 'javascript:void 0'),
			  o.addEventListener('click', (h) => {
					c(n, h)
			  }))
			: (o = document.createElement('span')),
			(o.className = i),
			o.append(document.createTextNode(e)),
			r.append(o)
	} else r.append(document.createTextNode(e))
}
d(a, 'text')
