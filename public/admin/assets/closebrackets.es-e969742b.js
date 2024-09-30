import { c as N, h as q } from './codemirror.es2-5884f31a.js'
var F = Object.defineProperty,
	f = (P, k) => F(P, 'name', { value: k, configurable: !0 })
function z(P, k) {
	for (var t = 0; t < k.length; t++) {
		const v = k[t]
		if (typeof v != 'string' && !Array.isArray(v)) {
			for (const o in v)
				if (o !== 'default' && !(o in P)) {
					const h = Object.getOwnPropertyDescriptor(v, o)
					h && Object.defineProperty(P, o, h.get ? h : { enumerable: !0, get: () => v[o] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(P, Symbol.toStringTag, { value: 'Module' }))
}
f(z, '_mergeNamespaces')
var J = { exports: {} }
;(function (P, k) {
	;(function (t) {
		t(N())
	})(function (t) {
		var v = { pairs: `()[]{}''""`, closeBefore: `)]}'":;>`, triples: '', explode: '[]{}' },
			o = t.Pos
		t.defineOption('autoCloseBrackets', !1, function (e, n, r) {
			r && r != t.Init && (e.removeKeyMap(B), (e.state.closeBrackets = null)),
				n && (T(h(n, 'pairs')), (e.state.closeBrackets = n), e.addKeyMap(B))
		})
		function h(e, n) {
			return n == 'pairs' && typeof e == 'string'
				? e
				: typeof e == 'object' && e[n] != null
				? e[n]
				: v[n]
		}
		f(h, 'getOption')
		var B = { Backspace: E, Enter: M }
		function T(e) {
			for (var n = 0; n < e.length; n++) {
				var r = e.charAt(n),
					a = "'" + r + "'"
				B[a] || (B[a] = w(r))
			}
		}
		f(T, 'ensureBound'), T(v.pairs + '`')
		function w(e) {
			return function (n) {
				return I(n, e)
			}
		}
		f(w, 'handler')
		function A(e) {
			var n = e.state.closeBrackets
			if (!n || n.override) return n
			var r = e.getModeAt(e.getCursor())
			return r.closeBrackets || n
		}
		f(A, 'getConfig')
		function E(e) {
			var n = A(e)
			if (!n || e.getOption('disableInput')) return t.Pass
			for (var r = h(n, 'pairs'), a = e.listSelections(), i = 0; i < a.length; i++) {
				if (!a[i].empty()) return t.Pass
				var l = x(e, a[i].head)
				if (!l || r.indexOf(l) % 2 != 0) return t.Pass
			}
			for (var i = a.length - 1; i >= 0; i--) {
				var c = a[i].head
				e.replaceRange('', o(c.line, c.ch - 1), o(c.line, c.ch + 1), '+delete')
			}
		}
		f(E, 'handleBackspace')
		function M(e) {
			var n = A(e),
				r = n && h(n, 'explode')
			if (!r || e.getOption('disableInput')) return t.Pass
			for (var a = e.listSelections(), i = 0; i < a.length; i++) {
				if (!a[i].empty()) return t.Pass
				var l = x(e, a[i].head)
				if (!l || r.indexOf(l) % 2 != 0) return t.Pass
			}
			e.operation(function () {
				var c =
					e.lineSeparator() ||
					`
`
				e.replaceSelection(c + c, null), S(e, -1), (a = e.listSelections())
				for (var u = 0; u < a.length; u++) {
					var b = a[u].head.line
					e.indentLine(b, null, !0), e.indentLine(b + 1, null, !0)
				}
			})
		}
		f(M, 'handleEnter')
		function S(e, n) {
			for (var r = [], a = e.listSelections(), i = 0, l = 0; l < a.length; l++) {
				var c = a[l]
				c.head == e.getCursor() && (i = l)
				var u =
					c.head.ch || n > 0 ? { line: c.head.line, ch: c.head.ch + n } : { line: c.head.line - 1 }
				r.push({ anchor: u, head: u })
			}
			e.setSelections(r, i)
		}
		f(S, 'moveSel')
		function R(e) {
			var n = t.cmpPos(e.anchor, e.head) > 0
			return {
				anchor: new o(e.anchor.line, e.anchor.ch + (n ? -1 : 1)),
				head: new o(e.head.line, e.head.ch + (n ? 1 : -1))
			}
		}
		f(R, 'contractSelection')
		function I(e, n) {
			var r = A(e)
			if (!r || e.getOption('disableInput')) return t.Pass
			var a = h(r, 'pairs'),
				i = a.indexOf(n)
			if (i == -1) return t.Pass
			for (
				var l = h(r, 'closeBefore'),
					c = h(r, 'triples'),
					u = a.charAt(i + 1) == n,
					b = e.listSelections(),
					C = i % 2 == 0,
					y,
					_ = 0;
				_ < b.length;
				_++
			) {
				var L = b[_],
					s = L.head,
					d,
					m = e.getRange(s, o(s.line, s.ch + 1))
				if (C && !L.empty()) d = 'surround'
				else if ((u || !C) && m == n)
					u && K(e, s)
						? (d = 'both')
						: c.indexOf(n) >= 0 && e.getRange(s, o(s.line, s.ch + 3)) == n + n + n
						? (d = 'skipThree')
						: (d = 'skip')
				else if (
					u &&
					s.ch > 1 &&
					c.indexOf(n) >= 0 &&
					e.getRange(o(s.line, s.ch - 2), s) == n + n
				) {
					if (s.ch > 2 && /\bstring/.test(e.getTokenTypeAt(o(s.line, s.ch - 2)))) return t.Pass
					d = 'addFour'
				} else if (u) {
					var W = s.ch == 0 ? ' ' : e.getRange(o(s.line, s.ch - 1), s)
					if (!t.isWordChar(m) && W != n && !t.isWordChar(W)) d = 'both'
					else return t.Pass
				} else if (C && (m.length === 0 || /\s/.test(m) || l.indexOf(m) > -1)) d = 'both'
				else return t.Pass
				if (!y) y = d
				else if (y != d) return t.Pass
			}
			var O = i % 2 ? a.charAt(i - 1) : n,
				j = i % 2 ? n : a.charAt(i + 1)
			e.operation(function () {
				if (y == 'skip') S(e, 1)
				else if (y == 'skipThree') S(e, 3)
				else if (y == 'surround') {
					for (var p = e.getSelections(), g = 0; g < p.length; g++) p[g] = O + p[g] + j
					e.replaceSelections(p, 'around'), (p = e.listSelections().slice())
					for (var g = 0; g < p.length; g++) p[g] = R(p[g])
					e.setSelections(p)
				} else
					y == 'both'
						? (e.replaceSelection(O + j, null), e.triggerElectric(O + j), S(e, -1))
						: y == 'addFour' && (e.replaceSelection(O + O + O + O, 'before'), S(e, 1))
			})
		}
		f(I, 'handleChar')
		function x(e, n) {
			var r = e.getRange(o(n.line, n.ch - 1), o(n.line, n.ch + 1))
			return r.length == 2 ? r : null
		}
		f(x, 'charsAround')
		function K(e, n) {
			var r = e.getTokenAt(o(n.line, n.ch + 1))
			return (
				/\bstring/.test(r.type) &&
				r.start == n.ch &&
				(n.ch == 0 || !/\bstring/.test(e.getTokenTypeAt(n)))
			)
		}
		f(K, 'stringStartsAfter')
	})
})()
var D = J.exports
const Q = q(D),
	$ = z({ __proto__: null, default: Q }, [D])
export { $ as c }
