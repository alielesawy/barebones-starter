import { h as c } from './codemirror.es2-5884f31a.js'
import { j as p } from './matchbrackets.es2-f53f57e6.js'
var s = Object.defineProperty,
	u = (e, o) => s(e, 'name', { value: o, configurable: !0 })
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
const l = c(i),
	y = f({ __proto__: null, default: l }, [i])
export { y as m }
