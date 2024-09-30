import { c as I, h as L } from './codemirror.es2-5884f31a.js'
var S = Object.defineProperty,
	b = (k, T) => S(k, 'name', { value: T, configurable: !0 })
function A(k, T) {
	for (var r = 0; r < T.length; r++) {
		const s = T[r]
		if (typeof s != 'string' && !Array.isArray(s)) {
			for (const e in s)
				if (e !== 'default' && !(e in k)) {
					const i = Object.getOwnPropertyDescriptor(s, e)
					i && Object.defineProperty(k, e, i.get ? i : { enumerable: !0, get: () => s[e] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(k, Symbol.toStringTag, { value: 'Module' }))
}
b(A, '_mergeNamespaces')
var w = { exports: {} }
;(function (k, T) {
	;(function (r) {
		r(I())
	})(function (r) {
		function s(e) {
			return function (i, o) {
				var t = o.line,
					u = i.getLine(t)
				function c(a) {
					for (var l, p = o.ch, v = 0; ; ) {
						var h = p <= 0 ? -1 : u.lastIndexOf(a[0], p - 1)
						if (h == -1) {
							if (v == 1) break
							;(v = 1), (p = u.length)
							continue
						}
						if (v == 1 && h < o.ch) break
						if (((l = i.getTokenTypeAt(r.Pos(t, h + 1))), !/^(comment|string)/.test(l)))
							return { ch: h + 1, tokenType: l, pair: a }
						p = h - 1
					}
				}
				b(c, 'findOpening')
				function d(a) {
					var l = 1,
						p = i.lastLine(),
						v,
						h = a.ch,
						_
					r: for (var P = t; P <= p; ++P)
						for (var O = i.getLine(P), m = P == t ? h : 0; ; ) {
							var x = O.indexOf(a.pair[0], m),
								j = O.indexOf(a.pair[1], m)
							if (
								(x < 0 && (x = O.length),
								j < 0 && (j = O.length),
								(m = Math.min(x, j)),
								m == O.length)
							)
								break
							if (i.getTokenTypeAt(r.Pos(P, m + 1)) == a.tokenType) {
								if (m == x) ++l
								else if (!--l) {
									;(v = P), (_ = m)
									break r
								}
							}
							++m
						}
					return v == null || t == v ? null : { from: r.Pos(t, h), to: r.Pos(v, _) }
				}
				b(d, 'findRange')
				for (var f = [], n = 0; n < e.length; n++) {
					var g = c(e[n])
					g && f.push(g)
				}
				f.sort(function (a, l) {
					return a.ch - l.ch
				})
				for (var n = 0; n < f.length; n++) {
					var y = d(f[n])
					if (y) return y
				}
				return null
			}
		}
		b(s, 'bracketFolding'),
			r.registerHelper(
				'fold',
				'brace',
				s([
					['{', '}'],
					['[', ']']
				])
			),
			r.registerHelper(
				'fold',
				'brace-paren',
				s([
					['{', '}'],
					['[', ']'],
					['(', ')']
				])
			),
			r.registerHelper('fold', 'import', function (e, i) {
				function o(n) {
					if (n < e.firstLine() || n > e.lastLine()) return null
					var g = e.getTokenAt(r.Pos(n, 1))
					if (
						(/\S/.test(g.string) || (g = e.getTokenAt(r.Pos(n, g.end + 1))),
						g.type != 'keyword' || g.string != 'import')
					)
						return null
					for (var y = n, a = Math.min(e.lastLine(), n + 10); y <= a; ++y) {
						var l = e.getLine(y),
							p = l.indexOf(';')
						if (p != -1) return { startCh: g.end, end: r.Pos(y, p) }
					}
				}
				b(o, 'hasImport')
				var t = i.line,
					u = o(t),
					c
				if (!u || o(t - 1) || ((c = o(t - 2)) && c.end.line == t - 1)) return null
				for (var d = u.end; ; ) {
					var f = o(d.line + 1)
					if (f == null) break
					d = f.end
				}
				return { from: e.clipPos(r.Pos(t, u.startCh + 1)), to: d }
			}),
			r.registerHelper('fold', 'include', function (e, i) {
				function o(f) {
					if (f < e.firstLine() || f > e.lastLine()) return null
					var n = e.getTokenAt(r.Pos(f, 1))
					if (
						(/\S/.test(n.string) || (n = e.getTokenAt(r.Pos(f, n.end + 1))),
						n.type == 'meta' && n.string.slice(0, 8) == '#include')
					)
						return n.start + 8
				}
				b(o, 'hasInclude')
				var t = i.line,
					u = o(t)
				if (u == null || o(t - 1) != null) return null
				for (var c = t; ; ) {
					var d = o(c + 1)
					if (d == null) break
					++c
				}
				return { from: r.Pos(t, u + 1), to: e.clipPos(r.Pos(c)) }
			})
	})
})()
var H = w.exports
const M = L(H),
	D = A({ __proto__: null, default: M }, [H])
export { D as b }
