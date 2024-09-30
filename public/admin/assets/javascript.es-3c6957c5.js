import { c as gt, h as wt } from './codemirror.es2-5884f31a.js'
var ht = Object.defineProperty,
	i = (R, X) => ht(R, 'name', { value: X, configurable: !0 })
function mt(R, X) {
	for (var b = 0; b < X.length; b++) {
		const N = X[b]
		if (typeof N != 'string' && !Array.isArray(N)) {
			for (const x in N)
				if (x !== 'default' && !(x in R)) {
					const E = Object.getOwnPropertyDescriptor(N, x)
					E && Object.defineProperty(R, x, E.get ? E : { enumerable: !0, get: () => N[x] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(R, Symbol.toStringTag, { value: 'Module' }))
}
i(mt, '_mergeNamespaces')
var jt = { exports: {} }
;(function (R, X) {
	;(function (b) {
		b(gt())
	})(function (b) {
		b.defineMode('javascript', function (N, x) {
			var E = N.indentUnit,
				qe = x.statementIndent,
				fe = x.jsonld,
				P = x.json || fe,
				Ne = x.trackScope !== !1,
				y = x.typescript,
				ce = x.wordCharacters || /[\w$\xa1-\uffff]/,
				Pe = (function () {
					function e(h) {
						return { type: h, style: 'keyword' }
					}
					i(e, 'kw')
					var t = e('keyword a'),
						n = e('keyword b'),
						o = e('keyword c'),
						f = e('keyword d'),
						p = e('operator'),
						d = { type: 'atom', style: 'atom' }
					return {
						if: e('if'),
						while: t,
						with: t,
						else: n,
						do: n,
						try: n,
						finally: n,
						return: f,
						break: f,
						continue: f,
						new: e('new'),
						delete: o,
						void: o,
						throw: o,
						debugger: e('debugger'),
						var: e('var'),
						const: e('var'),
						let: e('var'),
						function: e('function'),
						catch: e('catch'),
						for: e('for'),
						switch: e('switch'),
						case: e('case'),
						default: e('default'),
						in: p,
						typeof: p,
						instanceof: p,
						true: d,
						false: d,
						null: d,
						undefined: d,
						NaN: d,
						Infinity: d,
						this: e('this'),
						class: e('class'),
						super: e('atom'),
						yield: o,
						export: e('export'),
						import: e('import'),
						extends: o,
						await: o
					}
				})(),
				Be = /[+\-*&%=<>!?|~^@]/,
				yt = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
			function Le(e) {
				for (var t = !1, n, o = !1; (n = e.next()) != null; ) {
					if (!t) {
						if (n == '/' && !o) return
						n == '[' ? (o = !0) : o && n == ']' && (o = !1)
					}
					t = !t && n == '\\'
				}
			}
			i(Le, 'readRegexp')
			var Y, le
			function v(e, t, n) {
				return (Y = e), (le = n), t
			}
			i(v, 'ret')
			function S(e, t) {
				var n = e.next()
				if (n == '"' || n == "'") return (t.tokenize = Qe(n)), t.tokenize(e, t)
				if (n == '.' && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return v('number', 'number')
				if (n == '.' && e.match('..')) return v('spread', 'meta')
				if (/[\[\]{}\(\),;\:\.]/.test(n)) return v(n)
				if (n == '=' && e.eat('>')) return v('=>', 'operator')
				if (n == '0' && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
					return v('number', 'number')
				if (/\d/.test(n))
					return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), v('number', 'number')
				if (n == '/')
					return e.eat('*')
						? ((t.tokenize = Z), Z(e, t))
						: e.eat('/')
						? (e.skipToEnd(), v('comment', 'comment'))
						: $e(e, t, 1)
						? (Le(e), e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), v('regexp', 'string-2'))
						: (e.eat('='), v('operator', 'operator', e.current()))
				if (n == '`') return (t.tokenize = U), U(e, t)
				if (n == '#' && e.peek() == '!') return e.skipToEnd(), v('meta', 'meta')
				if (n == '#' && e.eatWhile(ce)) return v('variable', 'property')
				if (
					(n == '<' && e.match('!--')) ||
					(n == '-' && e.match('->') && !/\S/.test(e.string.slice(0, e.start)))
				)
					return e.skipToEnd(), v('comment', 'comment')
				if (Be.test(n))
					return (
						(n != '>' || !t.lexical || t.lexical.type != '>') &&
							(e.eat('=')
								? (n == '!' || n == '=') && e.eat('=')
								: /[<>*+\-|&?]/.test(n) && (e.eat(n), n == '>' && e.eat(n))),
						n == '?' && e.eat('.') ? v('.') : v('operator', 'operator', e.current())
					)
				if (ce.test(n)) {
					e.eatWhile(ce)
					var o = e.current()
					if (t.lastType != '.') {
						if (Pe.propertyIsEnumerable(o)) {
							var f = Pe[o]
							return v(f.type, f.style, o)
						}
						if (o == 'async' && e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1))
							return v('async', 'keyword', o)
					}
					return v('variable', 'variable', o)
				}
			}
			i(S, 'tokenBase')
			function Qe(e) {
				return function (t, n) {
					var o = !1,
						f
					if (fe && t.peek() == '@' && t.match(yt))
						return (n.tokenize = S), v('jsonld-keyword', 'meta')
					for (; (f = t.next()) != null && !(f == e && !o); ) o = !o && f == '\\'
					return o || (n.tokenize = S), v('string', 'string')
				}
			}
			i(Qe, 'tokenString')
			function Z(e, t) {
				for (var n = !1, o; (o = e.next()); ) {
					if (o == '/' && n) {
						t.tokenize = S
						break
					}
					n = o == '*'
				}
				return v('comment', 'comment')
			}
			i(Z, 'tokenComment')
			function U(e, t) {
				for (var n = !1, o; (o = e.next()) != null; ) {
					if (!n && (o == '`' || (o == '$' && e.eat('{')))) {
						t.tokenize = S
						break
					}
					n = !n && o == '\\'
				}
				return v('quasi', 'string-2', e.current())
			}
			i(U, 'tokenQuasi')
			var kt = '([{}])'
			function pe(e, t) {
				t.fatArrowAt && (t.fatArrowAt = null)
				var n = e.string.indexOf('=>', e.start)
				if (!(n < 0)) {
					if (y) {
						var o = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n))
						o && (n = o.index)
					}
					for (var f = 0, p = !1, d = n - 1; d >= 0; --d) {
						var h = e.string.charAt(d),
							V = kt.indexOf(h)
						if (V >= 0 && V < 3) {
							if (!f) {
								++d
								break
							}
							if (--f == 0) {
								h == '(' && (p = !0)
								break
							}
						} else if (V >= 3 && V < 6) ++f
						else if (ce.test(h)) p = !0
						else if (/["'\/`]/.test(h))
							for (; ; --d) {
								if (d == 0) return
								var xt = e.string.charAt(d - 1)
								if (xt == h && e.string.charAt(d - 2) != '\\') {
									d--
									break
								}
							}
						else if (p && !f) {
							++d
							break
						}
					}
					p && !f && (t.fatArrowAt = d)
				}
			}
			i(pe, 'findFatArrow')
			var vt = {
				atom: !0,
				number: !0,
				variable: !0,
				string: !0,
				regexp: !0,
				this: !0,
				import: !0,
				'jsonld-keyword': !0
			}
			function ge(e, t, n, o, f, p) {
				;(this.indented = e),
					(this.column = t),
					(this.type = n),
					(this.prev = f),
					(this.info = p),
					o != null && (this.align = o)
			}
			i(ge, 'JSLexical')
			function De(e, t) {
				if (!Ne) return !1
				for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0
				for (var o = e.context; o; o = o.prev)
					for (var n = o.vars; n; n = n.next) if (n.name == t) return !0
			}
			i(De, 'inScope')
			function we(e, t, n, o, f) {
				var p = e.cc
				for (
					a.state = e,
						a.stream = f,
						a.marked = null,
						a.cc = p,
						a.style = t,
						e.lexical.hasOwnProperty('align') || (e.lexical.align = !0);
					;

				) {
					var d = p.length ? p.pop() : P ? k : g
					if (d(n, o)) {
						for (; p.length && p[p.length - 1].lex; ) p.pop()()
						return a.marked ? a.marked : n == 'variable' && De(e, o) ? 'variable-2' : t
					}
				}
			}
			i(we, 'parseJS')
			var a = { state: null, column: null, marked: null, cc: null }
			function s() {
				for (var e = arguments.length - 1; e >= 0; e--) a.cc.push(arguments[e])
			}
			i(s, 'pass')
			function r() {
				return s.apply(null, arguments), !0
			}
			i(r, 'cont')
			function me(e, t) {
				for (var n = t; n; n = n.next) if (n.name == e) return !0
				return !1
			}
			i(me, 'inList')
			function B(e) {
				var t = a.state
				if (((a.marked = 'def'), !!Ne)) {
					if (t.context) {
						if (t.lexical.info == 'var' && t.context && t.context.block) {
							var n = he(e, t.context)
							if (n != null) {
								t.context = n
								return
							}
						} else if (!me(e, t.localVars)) {
							t.localVars = new H(e, t.localVars)
							return
						}
					}
					x.globalVars && !me(e, t.globalVars) && (t.globalVars = new H(e, t.globalVars))
				}
			}
			i(B, 'register')
			function he(e, t) {
				if (t)
					if (t.block) {
						var n = he(e, t.prev)
						return n ? (n == t.prev ? t : new W(n, t.vars, !0)) : null
					} else return me(e, t.vars) ? t : new W(t.prev, new H(e, t.vars), !1)
				else return null
			}
			i(he, 'registerVarScoped')
			function ee(e) {
				return (
					e == 'public' || e == 'private' || e == 'protected' || e == 'abstract' || e == 'readonly'
				)
			}
			i(ee, 'isModifier')
			function W(e, t, n) {
				;(this.prev = e), (this.vars = t), (this.block = n)
			}
			i(W, 'Context')
			function H(e, t) {
				;(this.name = e), (this.next = t)
			}
			i(H, 'Var')
			var bt = new H('this', new H('arguments', null))
			function O() {
				;(a.state.context = new W(a.state.context, a.state.localVars, !1)), (a.state.localVars = bt)
			}
			i(O, 'pushcontext')
			function te() {
				;(a.state.context = new W(a.state.context, a.state.localVars, !0)),
					(a.state.localVars = null)
			}
			i(te, 'pushblockcontext'), (O.lex = te.lex = !0)
			function A() {
				;(a.state.localVars = a.state.context.vars), (a.state.context = a.state.context.prev)
			}
			i(A, 'popcontext'), (A.lex = !0)
			function c(e, t) {
				var n = i(function () {
					var o = a.state,
						f = o.indented
					if (o.lexical.type == 'stat') f = o.lexical.indented
					else for (var p = o.lexical; p && p.type == ')' && p.align; p = p.prev) f = p.indented
					o.lexical = new ge(f, a.stream.column(), e, null, o.lexical, t)
				}, 'result')
				return (n.lex = !0), n
			}
			i(c, 'pushlex')
			function u() {
				var e = a.state
				e.lexical.prev &&
					(e.lexical.type == ')' && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev))
			}
			i(u, 'poplex'), (u.lex = !0)
			function l(e) {
				function t(n) {
					return n == e ? r() : e == ';' || n == '}' || n == ')' || n == ']' ? s() : r(t)
				}
				return i(t, 'exp'), t
			}
			i(l, 'expect')
			function g(e, t) {
				return e == 'var'
					? r(c('vardef', t), be, l(';'), u)
					: e == 'keyword a'
					? r(c('form'), de, g, u)
					: e == 'keyword b'
					? r(c('form'), g, u)
					: e == 'keyword d'
					? a.stream.match(/^\s*$/, !1)
						? r()
						: r(c('stat'), L, l(';'), u)
					: e == 'debugger'
					? r(l(';'))
					: e == '{'
					? r(c('}'), te, ae, u, A)
					: e == ';'
					? r()
					: e == 'if'
					? (a.state.lexical.info == 'else' &&
							a.state.cc[a.state.cc.length - 1] == u &&
							a.state.cc.pop()(),
					  r(c('form'), de, g, u, Ie))
					: e == 'function'
					? r(C)
					: e == 'for'
					? r(c('form'), te, Ve, g, A, u)
					: e == 'class' || (y && t == 'interface')
					? ((a.marked = 'keyword'), r(c('form', e == 'class' ? e : t), Ce, u))
					: e == 'variable'
					? y && t == 'declare'
						? ((a.marked = 'keyword'), r(g))
						: y && (t == 'module' || t == 'enum' || t == 'type') && a.stream.match(/^\s*\w/, !1)
						? ((a.marked = 'keyword'),
						  t == 'enum'
								? r(_e)
								: t == 'type'
								? r(ze, l('operator'), m, l(';'))
								: r(c('form'), M, l('{'), c('}'), ae, u, u))
						: y && t == 'namespace'
						? ((a.marked = 'keyword'), r(c('form'), k, g, u))
						: y && t == 'abstract'
						? ((a.marked = 'keyword'), r(g))
						: r(c('stat'), He)
					: e == 'switch'
					? r(c('form'), de, l('{'), c('}', 'switch'), te, ae, u, u, A)
					: e == 'case'
					? r(k, l(':'))
					: e == 'default'
					? r(l(':'))
					: e == 'catch'
					? r(c('form'), O, Fe, g, u, A)
					: e == 'export'
					? r(c('stat'), ut, u)
					: e == 'import'
					? r(c('stat'), st, u)
					: e == 'async'
					? r(g)
					: t == '@'
					? r(k, g)
					: s(c('stat'), k, l(';'), u)
			}
			i(g, 'statement')
			function Fe(e) {
				if (e == '(') return r(q, l(')'))
			}
			i(Fe, 'maybeCatchBinding')
			function k(e, t) {
				return je(e, t, !1)
			}
			i(k, 'expression')
			function j(e, t) {
				return je(e, t, !0)
			}
			i(j, 'expressionNoComma')
			function de(e) {
				return e != '(' ? s() : r(c(')'), L, l(')'), u)
			}
			i(de, 'parenExpr')
			function je(e, t, n) {
				if (a.state.fatArrowAt == a.stream.start) {
					var o = n ? Me : Ae
					if (e == '(') return r(O, c(')'), w(q, ')'), u, l('=>'), o, A)
					if (e == 'variable') return s(O, M, l('=>'), o, A)
				}
				var f = n ? Q : _
				return vt.hasOwnProperty(e)
					? r(f)
					: e == 'function'
					? r(C, f)
					: e == 'class' || (y && t == 'interface')
					? ((a.marked = 'keyword'), r(c('form'), ot, u))
					: e == 'keyword c' || e == 'async'
					? r(n ? j : k)
					: e == '('
					? r(c(')'), L, l(')'), u, f)
					: e == 'operator' || e == 'spread'
					? r(n ? j : k)
					: e == '['
					? r(c(']'), ct, u, f)
					: e == '{'
					? K(ne, '}', null, f)
					: e == 'quasi'
					? s(re, f)
					: e == 'new'
					? r(Re(n))
					: r()
			}
			i(je, 'expressionInner')
			function L(e) {
				return e.match(/[;\}\)\],]/) ? s() : s(k)
			}
			i(L, 'maybeexpression')
			function _(e, t) {
				return e == ',' ? r(L) : Q(e, t, !1)
			}
			i(_, 'maybeoperatorComma')
			function Q(e, t, n) {
				var o = n == !1 ? _ : Q,
					f = n == !1 ? k : j
				if (e == '=>') return r(O, n ? Me : Ae, A)
				if (e == 'operator')
					return /\+\+|--/.test(t) || (y && t == '!')
						? r(o)
						: y && t == '<' && a.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
						? r(c('>'), w(m, '>'), u, o)
						: t == '?'
						? r(k, l(':'), f)
						: r(f)
				if (e == 'quasi') return s(re, o)
				if (e != ';') {
					if (e == '(') return K(j, ')', 'call', o)
					if (e == '.') return r(Ke, o)
					if (e == '[') return r(c(']'), L, l(']'), u, o)
					if (y && t == 'as') return (a.marked = 'keyword'), r(m, o)
					if (e == 'regexp')
						return (
							(a.state.lastType = a.marked = 'operator'),
							a.stream.backUp(a.stream.pos - a.stream.start - 1),
							r(f)
						)
				}
			}
			i(Q, 'maybeoperatorNoComma')
			function re(e, t) {
				return e != 'quasi' ? s() : t.slice(t.length - 2) != '${' ? r(re) : r(L, Je)
			}
			i(re, 'quasi')
			function Je(e) {
				if (e == '}') return (a.marked = 'string-2'), (a.state.tokenize = U), r(re)
			}
			i(Je, 'continueQuasi')
			function Ae(e) {
				return pe(a.stream, a.state), s(e == '{' ? g : k)
			}
			i(Ae, 'arrowBody')
			function Me(e) {
				return pe(a.stream, a.state), s(e == '{' ? g : j)
			}
			i(Me, 'arrowBodyNoComma')
			function Re(e) {
				return function (t) {
					return t == '.' ? r(e ? We : Ue) : t == 'variable' && y ? r(tt, e ? Q : _) : s(e ? j : k)
				}
			}
			i(Re, 'maybeTarget')
			function Ue(e, t) {
				if (t == 'target') return (a.marked = 'keyword'), r(_)
			}
			i(Ue, 'target')
			function We(e, t) {
				if (t == 'target') return (a.marked = 'keyword'), r(Q)
			}
			i(We, 'targetNoComma')
			function He(e) {
				return e == ':' ? r(u, g) : s(_, l(';'), u)
			}
			i(He, 'maybelabel')
			function Ke(e) {
				if (e == 'variable') return (a.marked = 'property'), r()
			}
			i(Ke, 'property')
			function ne(e, t) {
				if (e == 'async') return (a.marked = 'property'), r(ne)
				if (e == 'variable' || a.style == 'keyword') {
					if (((a.marked = 'property'), t == 'get' || t == 'set')) return r(Ge)
					var n
					return (
						y &&
							a.state.fatArrowAt == a.stream.start &&
							(n = a.stream.match(/^\s*:\s*/, !1)) &&
							(a.state.fatArrowAt = a.stream.pos + n[0].length),
						r($)
					)
				} else {
					if (e == 'number' || e == 'string')
						return (a.marked = fe ? 'property' : a.style + ' property'), r($)
					if (e == 'jsonld-keyword') return r($)
					if (y && ee(t)) return (a.marked = 'keyword'), r(ne)
					if (e == '[') return r(k, D, l(']'), $)
					if (e == 'spread') return r(j, $)
					if (t == '*') return (a.marked = 'keyword'), r(ne)
					if (e == ':') return s($)
				}
			}
			i(ne, 'objprop')
			function Ge(e) {
				return e != 'variable' ? s($) : ((a.marked = 'property'), r(C))
			}
			i(Ge, 'getterSetter')
			function $(e) {
				if (e == ':') return r(j)
				if (e == '(') return s(C)
			}
			i($, 'afterprop')
			function w(e, t, n) {
				function o(f, p) {
					if (n ? n.indexOf(f) > -1 : f == ',') {
						var d = a.state.lexical
						return (
							d.info == 'call' && (d.pos = (d.pos || 0) + 1),
							r(function (h, V) {
								return h == t || V == t ? s() : s(e)
							}, o)
						)
					}
					return f == t || p == t ? r() : n && n.indexOf(';') > -1 ? s(e) : r(l(t))
				}
				return (
					i(o, 'proceed'),
					function (f, p) {
						return f == t || p == t ? r() : s(e, o)
					}
				)
			}
			i(w, 'commasep')
			function K(e, t, n) {
				for (var o = 3; o < arguments.length; o++) a.cc.push(arguments[o])
				return r(c(t, n), w(e, t), u)
			}
			i(K, 'contCommasep')
			function ae(e) {
				return e == '}' ? r() : s(g, ae)
			}
			i(ae, 'block')
			function D(e, t) {
				if (y) {
					if (e == ':') return r(m)
					if (t == '?') return r(D)
				}
			}
			i(D, 'maybetype')
			function Xe(e, t) {
				if (y && (e == ':' || t == 'in')) return r(m)
			}
			i(Xe, 'maybetypeOrIn')
			function Ee(e) {
				if (y && e == ':') return a.stream.match(/^\s*\w+\s+is\b/, !1) ? r(k, Ye, m) : r(m)
			}
			i(Ee, 'mayberettype')
			function Ye(e, t) {
				if (t == 'is') return (a.marked = 'keyword'), r()
			}
			i(Ye, 'isKW')
			function m(e, t) {
				if (t == 'keyof' || t == 'typeof' || t == 'infer' || t == 'readonly')
					return (a.marked = 'keyword'), r(t == 'typeof' ? j : m)
				if (e == 'variable' || t == 'void') return (a.marked = 'type'), r(T)
				if (t == '|' || t == '&') return r(m)
				if (e == 'string' || e == 'number' || e == 'atom') return r(T)
				if (e == '[') return r(c(']'), w(m, ']', ','), u, T)
				if (e == '{') return r(c('}'), ye, u, T)
				if (e == '(') return r(w(ve, ')'), Ze, T)
				if (e == '<') return r(w(m, '>'), m)
				if (e == 'quasi') return s(ke, T)
			}
			i(m, 'typeexpr')
			function Ze(e) {
				if (e == '=>') return r(m)
			}
			i(Ze, 'maybeReturnType')
			function ye(e) {
				return e.match(/[\}\)\]]/) ? r() : e == ',' || e == ';' ? r(ye) : s(G, ye)
			}
			i(ye, 'typeprops')
			function G(e, t) {
				if (e == 'variable' || a.style == 'keyword') return (a.marked = 'property'), r(G)
				if (t == '?' || e == 'number' || e == 'string') return r(G)
				if (e == ':') return r(m)
				if (e == '[') return r(l('variable'), Xe, l(']'), G)
				if (e == '(') return s(J, G)
				if (!e.match(/[;\}\)\],]/)) return r()
			}
			i(G, 'typeprop')
			function ke(e, t) {
				return e != 'quasi' ? s() : t.slice(t.length - 2) != '${' ? r(ke) : r(m, et)
			}
			i(ke, 'quasiType')
			function et(e) {
				if (e == '}') return (a.marked = 'string-2'), (a.state.tokenize = U), r(ke)
			}
			i(et, 'continueQuasiType')
			function ve(e, t) {
				return (e == 'variable' && a.stream.match(/^\s*[?:]/, !1)) || t == '?'
					? r(ve)
					: e == ':'
					? r(m)
					: e == 'spread'
					? r(ve)
					: s(m)
			}
			i(ve, 'typearg')
			function T(e, t) {
				if (t == '<') return r(c('>'), w(m, '>'), u, T)
				if (t == '|' || e == '.' || t == '&') return r(m)
				if (e == '[') return r(m, l(']'), T)
				if (t == 'extends' || t == 'implements') return (a.marked = 'keyword'), r(m)
				if (t == '?') return r(m, l(':'), m)
			}
			i(T, 'afterType')
			function tt(e, t) {
				if (t == '<') return r(c('>'), w(m, '>'), u, T)
			}
			i(tt, 'maybeTypeArgs')
			function ie() {
				return s(m, rt)
			}
			i(ie, 'typeparam')
			function rt(e, t) {
				if (t == '=') return r(m)
			}
			i(rt, 'maybeTypeDefault')
			function be(e, t) {
				return t == 'enum' ? ((a.marked = 'keyword'), r(_e)) : s(M, D, z, at)
			}
			i(be, 'vardef')
			function M(e, t) {
				if (y && ee(t)) return (a.marked = 'keyword'), r(M)
				if (e == 'variable') return B(t), r()
				if (e == 'spread') return r(M)
				if (e == '[') return K(nt, ']')
				if (e == '{') return K(Te, '}')
			}
			i(M, 'pattern')
			function Te(e, t) {
				return e == 'variable' && !a.stream.match(/^\s*:/, !1)
					? (B(t), r(z))
					: (e == 'variable' && (a.marked = 'property'),
					  e == 'spread'
							? r(M)
							: e == '}'
							? s()
							: e == '['
							? r(k, l(']'), l(':'), Te)
							: r(l(':'), M, z))
			}
			i(Te, 'proppattern')
			function nt() {
				return s(M, z)
			}
			i(nt, 'eltpattern')
			function z(e, t) {
				if (t == '=') return r(j)
			}
			i(z, 'maybeAssign')
			function at(e) {
				if (e == ',') return r(be)
			}
			i(at, 'vardefCont')
			function Ie(e, t) {
				if (e == 'keyword b' && t == 'else') return r(c('form', 'else'), g, u)
			}
			i(Ie, 'maybeelse')
			function Ve(e, t) {
				if (t == 'await') return r(Ve)
				if (e == '(') return r(c(')'), it, u)
			}
			i(Ve, 'forspec')
			function it(e) {
				return e == 'var' ? r(be, F) : e == 'variable' ? r(F) : s(F)
			}
			i(it, 'forspec1')
			function F(e, t) {
				return e == ')'
					? r()
					: e == ';'
					? r(F)
					: t == 'in' || t == 'of'
					? ((a.marked = 'keyword'), r(k, F))
					: s(k, F)
			}
			i(F, 'forspec2')
			function C(e, t) {
				if (t == '*') return (a.marked = 'keyword'), r(C)
				if (e == 'variable') return B(t), r(C)
				if (e == '(') return r(O, c(')'), w(q, ')'), u, Ee, g, A)
				if (y && t == '<') return r(c('>'), w(ie, '>'), u, C)
			}
			i(C, 'functiondef')
			function J(e, t) {
				if (t == '*') return (a.marked = 'keyword'), r(J)
				if (e == 'variable') return B(t), r(J)
				if (e == '(') return r(O, c(')'), w(q, ')'), u, Ee, A)
				if (y && t == '<') return r(c('>'), w(ie, '>'), u, J)
			}
			i(J, 'functiondecl')
			function ze(e, t) {
				if (e == 'keyword' || e == 'variable') return (a.marked = 'type'), r(ze)
				if (t == '<') return r(c('>'), w(ie, '>'), u)
			}
			i(ze, 'typename')
			function q(e, t) {
				return (
					t == '@' && r(k, q),
					e == 'spread'
						? r(q)
						: y && ee(t)
						? ((a.marked = 'keyword'), r(q))
						: y && e == 'this'
						? r(D, z)
						: s(M, D, z)
				)
			}
			i(q, 'funarg')
			function ot(e, t) {
				return e == 'variable' ? Ce(e, t) : oe(e, t)
			}
			i(ot, 'classExpression')
			function Ce(e, t) {
				if (e == 'variable') return B(t), r(oe)
			}
			i(Ce, 'className')
			function oe(e, t) {
				if (t == '<') return r(c('>'), w(ie, '>'), u, oe)
				if (t == 'extends' || t == 'implements' || (y && e == ','))
					return t == 'implements' && (a.marked = 'keyword'), r(y ? m : k, oe)
				if (e == '{') return r(c('}'), I, u)
			}
			i(oe, 'classNameAfter')
			function I(e, t) {
				if (
					e == 'async' ||
					(e == 'variable' &&
						(t == 'static' || t == 'get' || t == 'set' || (y && ee(t))) &&
						a.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
				)
					return (a.marked = 'keyword'), r(I)
				if (e == 'variable' || a.style == 'keyword') return (a.marked = 'property'), r(ue, I)
				if (e == 'number' || e == 'string') return r(ue, I)
				if (e == '[') return r(k, D, l(']'), ue, I)
				if (t == '*') return (a.marked = 'keyword'), r(I)
				if (y && e == '(') return s(J, I)
				if (e == ';' || e == ',') return r(I)
				if (e == '}') return r()
				if (t == '@') return r(k, I)
			}
			i(I, 'classBody')
			function ue(e, t) {
				if (t == '!' || t == '?') return r(ue)
				if (e == ':') return r(m, z)
				if (t == '=') return r(j)
				var n = a.state.lexical.prev,
					o = n && n.info == 'interface'
				return s(o ? J : C)
			}
			i(ue, 'classfield')
			function ut(e, t) {
				return t == '*'
					? ((a.marked = 'keyword'), r(xe, l(';')))
					: t == 'default'
					? ((a.marked = 'keyword'), r(k, l(';')))
					: e == '{'
					? r(w(Se, '}'), xe, l(';'))
					: s(g)
			}
			i(ut, 'afterExport')
			function Se(e, t) {
				if (t == 'as') return (a.marked = 'keyword'), r(l('variable'))
				if (e == 'variable') return s(j, Se)
			}
			i(Se, 'exportField')
			function st(e) {
				return e == 'string' ? r() : e == '(' ? s(k) : e == '.' ? s(_) : s(se, Oe, xe)
			}
			i(st, 'afterImport')
			function se(e, t) {
				return e == '{'
					? K(se, '}')
					: (e == 'variable' && B(t), t == '*' && (a.marked = 'keyword'), r(ft))
			}
			i(se, 'importSpec')
			function Oe(e) {
				if (e == ',') return r(se, Oe)
			}
			i(Oe, 'maybeMoreImports')
			function ft(e, t) {
				if (t == 'as') return (a.marked = 'keyword'), r(se)
			}
			i(ft, 'maybeAs')
			function xe(e, t) {
				if (t == 'from') return (a.marked = 'keyword'), r(k)
			}
			i(xe, 'maybeFrom')
			function ct(e) {
				return e == ']' ? r() : s(w(j, ']'))
			}
			i(ct, 'arrayLiteral')
			function _e() {
				return s(c('form'), M, l('{'), c('}'), w(lt, '}'), u, u)
			}
			i(_e, 'enumdef')
			function lt() {
				return s(M, z)
			}
			i(lt, 'enummember')
			function pt(e, t) {
				return (
					e.lastType == 'operator' ||
					e.lastType == ',' ||
					Be.test(t.charAt(0)) ||
					/[,.]/.test(t.charAt(0))
				)
			}
			i(pt, 'isContinuedStatement')
			function $e(e, t, n) {
				return (
					(t.tokenize == S &&
						/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
							t.lastType
						)) ||
					(t.lastType == 'quasi' && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))))
				)
			}
			return (
				i($e, 'expressionAllowed'),
				{
					startState: function (e) {
						var t = {
							tokenize: S,
							lastType: 'sof',
							cc: [],
							lexical: new ge((e || 0) - E, 0, 'block', !1),
							localVars: x.localVars,
							context: x.localVars && new W(null, null, !1),
							indented: e || 0
						}
						return (
							x.globalVars && typeof x.globalVars == 'object' && (t.globalVars = x.globalVars), t
						)
					},
					token: function (e, t) {
						if (
							(e.sol() &&
								(t.lexical.hasOwnProperty('align') || (t.lexical.align = !1),
								(t.indented = e.indentation()),
								pe(e, t)),
							t.tokenize != Z && e.eatSpace())
						)
							return null
						var n = t.tokenize(e, t)
						return Y == 'comment'
							? n
							: ((t.lastType = Y == 'operator' && (le == '++' || le == '--') ? 'incdec' : Y),
							  we(t, n, Y, le, e))
					},
					indent: function (e, t) {
						if (e.tokenize == Z || e.tokenize == U) return b.Pass
						if (e.tokenize != S) return 0
						var n = t && t.charAt(0),
							o = e.lexical,
							f
						if (!/^\s*else\b/.test(t))
							for (var p = e.cc.length - 1; p >= 0; --p) {
								var d = e.cc[p]
								if (d == u) o = o.prev
								else if (d != Ie && d != A) break
							}
						for (
							;
							(o.type == 'stat' || o.type == 'form') &&
							(n == '}' ||
								((f = e.cc[e.cc.length - 1]) && (f == _ || f == Q) && !/^[,\.=+\-*:?[\(]/.test(t)));

						)
							o = o.prev
						qe && o.type == ')' && o.prev.type == 'stat' && (o = o.prev)
						var h = o.type,
							V = n == h
						return h == 'vardef'
							? o.indented + (e.lastType == 'operator' || e.lastType == ',' ? o.info.length + 1 : 0)
							: h == 'form' && n == '{'
							? o.indented
							: h == 'form'
							? o.indented + E
							: h == 'stat'
							? o.indented + (pt(e, t) ? qe || E : 0)
							: o.info == 'switch' && !V && x.doubleIndentSwitch != !1
							? o.indented + (/^(?:case|default)\b/.test(t) ? E : 2 * E)
							: o.align
							? o.column + (V ? 0 : 1)
							: o.indented + (V ? 0 : E)
					},
					electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
					blockCommentStart: P ? null : '/*',
					blockCommentEnd: P ? null : '*/',
					blockCommentContinue: P ? null : ' * ',
					lineComment: P ? null : '//',
					fold: 'brace',
					closeBrackets: '()[]{}\'\'""``',
					helperType: P ? 'json' : 'javascript',
					jsonldMode: fe,
					jsonMode: P,
					expressionAllowed: $e,
					skipExpression: function (e) {
						we(e, 'atom', 'atom', 'true', new b.StringStream('', 2, null))
					}
				}
			)
		}),
			b.registerHelper('wordChars', 'javascript', /[\w$]/),
			b.defineMIME('text/javascript', 'javascript'),
			b.defineMIME('text/ecmascript', 'javascript'),
			b.defineMIME('application/javascript', 'javascript'),
			b.defineMIME('application/x-javascript', 'javascript'),
			b.defineMIME('application/ecmascript', 'javascript'),
			b.defineMIME('application/json', { name: 'javascript', json: !0 }),
			b.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
			b.defineMIME('application/manifest+json', { name: 'javascript', json: !0 }),
			b.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
			b.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
			b.defineMIME('application/typescript', { name: 'javascript', typescript: !0 })
	})
})()
var dt = jt.exports
const At = wt(dt),
	Et = mt({ __proto__: null, default: At }, [dt])
export { Et as j }
