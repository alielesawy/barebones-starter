import { h as c } from './codemirror.es2-5884f31a.js'
import { K as p } from './searchcursor.es2-cbfe7cae.js'
var l = Object.defineProperty,
	u = (e, o) => l(e, 'name', { value: o, configurable: !0 })
function f(e, o) {
	for (var n = 0; n < o.length; n++) {
		const r = o[n]
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const t in r)
				if (t !== 'default' && !(t in e)) {
					const a = Object.getOwnPropertyDescriptor(r, t)
					a && Object.defineProperty(e, t, a.get ? a : { enumerable: !0, get: () => r[t] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
u(f, '_mergeNamespaces')
var i = p()
const g = c(i),
	m = f({ __proto__: null, default: g }, [i])
export { m as s }
