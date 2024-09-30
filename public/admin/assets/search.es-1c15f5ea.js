import { c as I, h as V } from './codemirror.es2-5884f31a.js'
import { K } from './searchcursor.es2-cbfe7cae.js'
import { k as L } from './dialog.es2-02b3b4e7.js'
var z = Object.defineProperty,
	a = (C, O) => z(C, 'name', { value: O, configurable: !0 })
function A(C, O) {
	for (var s = 0; s < O.length; s++) {
		const h = O[s]
		if (typeof h != 'string' && !Array.isArray(h)) {
			for (const g in h)
				if (g !== 'default' && !(g in C)) {
					const m = Object.getOwnPropertyDescriptor(h, g)
					m && Object.defineProperty(C, g, m.get ? m : { enumerable: !0, get: () => h[g] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(C, Symbol.toStringTag, { value: 'Module' }))
}
a(A, '_mergeNamespaces')
var B = { exports: {} }
;(function (C, O) {
	;(function (s) {
		s(I(), K(), L())
	})(function (s) {
		s.defineOption('search', { bottom: !1 })
		function h(e, r) {
			return (
				typeof e == 'string'
					? (e = new RegExp(
							e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'),
							r ? 'gi' : 'g'
					  ))
					: e.global || (e = new RegExp(e.source, e.ignoreCase ? 'gi' : 'g')),
				{
					token: function (t) {
						e.lastIndex = t.pos
						var n = e.exec(t.string)
						if (n && n.index == t.pos) return (t.pos += n[0].length || 1), 'searching'
						n ? (t.pos = n.index) : t.skipToEnd()
					}
				}
			)
		}
		a(h, 'searchOverlay')
		function g() {
			;(this.posFrom = this.posTo = this.lastQuery = this.query = null), (this.overlay = null)
		}
		a(g, 'SearchState')
		function m(e) {
			return e.state.search || (e.state.search = new g())
		}
		a(m, 'getSearchState')
		function S(e) {
			return typeof e == 'string' && e == e.toLowerCase()
		}
		a(S, 'queryCaseInsensitive')
		function b(e, r, t) {
			return e.getSearchCursor(r, t, { caseFold: S(r), multiline: !0 })
		}
		a(b, 'getSearchCursor')
		function _(e, r, t, n, o) {
			e.openDialog(r, n, {
				value: t,
				selectValueOnOpen: !0,
				closeOnEnter: !1,
				onClose: function () {
					N(e)
				},
				onKeyDown: o,
				bottom: e.options.search.bottom
			})
		}
		a(_, 'persistentDialog')
		function P(e, r, t, n, o) {
			e.openDialog
				? e.openDialog(r, o, { value: n, selectValueOnOpen: !0, bottom: e.options.search.bottom })
				: o(prompt(t, n))
		}
		a(P, 'dialog')
		function E(e, r, t, n) {
			e.openConfirm ? e.openConfirm(r, n) : confirm(t) && n[0]()
		}
		a(E, 'confirmDialog')
		function R(e) {
			return e.replace(/\\([nrt\\])/g, function (r, t) {
				return t == 'n'
					? `
`
					: t == 'r'
					? '\r'
					: t == 't'
					? '	'
					: t == '\\'
					? '\\'
					: r
			})
		}
		a(R, 'parseString')
		function M(e) {
			var r = e.match(/^\/(.*)\/([a-z]*)$/)
			if (r)
				try {
					e = new RegExp(r[1], r[2].indexOf('i') == -1 ? '' : 'i')
				} catch {}
			else e = R(e)
			return (typeof e == 'string' ? e == '' : e.test('')) && (e = /x^/), e
		}
		a(M, 'parseQuery')
		function q(e, r, t) {
			;(r.queryText = t),
				(r.query = M(t)),
				e.removeOverlay(r.overlay, S(r.query)),
				(r.overlay = h(r.query, S(r.query))),
				e.addOverlay(r.overlay),
				e.showMatchesOnScrollbar &&
					(r.annotate && (r.annotate.clear(), (r.annotate = null)),
					(r.annotate = e.showMatchesOnScrollbar(r.query, S(r.query))))
		}
		a(q, 'startSearch')
		function v(e, r, t, n) {
			var o = m(e)
			if (o.query) return w(e, r)
			var i = e.getSelection() || o.lastQuery
			if ((i instanceof RegExp && i.source == 'x^' && (i = null), t && e.openDialog)) {
				var p = null,
					u = a(function (l, x) {
						s.e_stop(x),
							l &&
								(l != o.queryText && (q(e, o, l), (o.posFrom = o.posTo = e.getCursor())),
								p && (p.style.opacity = 1),
								w(e, x.shiftKey, function (y, d) {
									var f
									d.line < 3 &&
										document.querySelector &&
										(f = e.display.wrapper.querySelector('.CodeMirror-dialog')) &&
										f.getBoundingClientRect().bottom - 4 > e.cursorCoords(d, 'window').top &&
										((p = f).style.opacity = 0.4)
								}))
					}, 'searchNext')
				_(e, D(e), i, u, function (l, x) {
					var y = s.keyName(l),
						d = e.getOption('extraKeys'),
						f = (d && d[y]) || s.keyMap[e.getOption('keyMap')][y]
					f == 'findNext' ||
					f == 'findPrev' ||
					f == 'findPersistentNext' ||
					f == 'findPersistentPrev'
						? (s.e_stop(l), q(e, m(e), x), e.execCommand(f))
						: (f == 'find' || f == 'findPersistent') && (s.e_stop(l), u(x, l))
				}),
					n && i && (q(e, o, i), w(e, r))
			} else
				P(e, D(e), 'Search for:', i, function (l) {
					l &&
						!o.query &&
						e.operation(function () {
							q(e, o, l), (o.posFrom = o.posTo = e.getCursor()), w(e, r)
						})
				})
		}
		a(v, 'doSearch')
		function w(e, r, t) {
			e.operation(function () {
				var n = m(e),
					o = b(e, n.query, r ? n.posFrom : n.posTo)
				;(!o.find(r) &&
					((o = b(e, n.query, r ? s.Pos(e.lastLine()) : s.Pos(e.firstLine(), 0))), !o.find(r))) ||
					(e.setSelection(o.from(), o.to()),
					e.scrollIntoView({ from: o.from(), to: o.to() }, 20),
					(n.posFrom = o.from()),
					(n.posTo = o.to()),
					t && t(o.from(), o.to()))
			})
		}
		a(w, 'findNext')
		function N(e) {
			e.operation(function () {
				var r = m(e)
				;(r.lastQuery = r.query),
					r.query &&
						((r.query = r.queryText = null),
						e.removeOverlay(r.overlay),
						r.annotate && (r.annotate.clear(), (r.annotate = null)))
			})
		}
		a(N, 'clearSearch')
		function c(e, r) {
			var t = e ? document.createElement(e) : document.createDocumentFragment()
			for (var n in r) t[n] = r[n]
			for (var o = 2; o < arguments.length; o++) {
				var i = arguments[o]
				t.appendChild(typeof i == 'string' ? document.createTextNode(i) : i)
			}
			return t
		}
		a(c, 'el')
		function D(e) {
			return c(
				'',
				null,
				c('span', { className: 'CodeMirror-search-label' }, e.phrase('Search:')),
				' ',
				c('input', { type: 'text', style: 'width: 10em', className: 'CodeMirror-search-field' }),
				' ',
				c(
					'span',
					{ style: 'color: #888', className: 'CodeMirror-search-hint' },
					e.phrase('(Use /re/ syntax for regexp search)')
				)
			)
		}
		a(D, 'getQueryDialog')
		function F(e) {
			return c(
				'',
				null,
				' ',
				c('input', { type: 'text', style: 'width: 10em', className: 'CodeMirror-search-field' }),
				' ',
				c(
					'span',
					{ style: 'color: #888', className: 'CodeMirror-search-hint' },
					e.phrase('(Use /re/ syntax for regexp search)')
				)
			)
		}
		a(F, 'getReplaceQueryDialog')
		function k(e) {
			return c(
				'',
				null,
				c('span', { className: 'CodeMirror-search-label' }, e.phrase('With:')),
				' ',
				c('input', { type: 'text', style: 'width: 10em', className: 'CodeMirror-search-field' })
			)
		}
		a(k, 'getReplacementQueryDialog')
		function j(e) {
			return c(
				'',
				null,
				c('span', { className: 'CodeMirror-search-label' }, e.phrase('Replace?')),
				' ',
				c('button', {}, e.phrase('Yes')),
				' ',
				c('button', {}, e.phrase('No')),
				' ',
				c('button', {}, e.phrase('All')),
				' ',
				c('button', {}, e.phrase('Stop'))
			)
		}
		a(j, 'getDoReplaceConfirm')
		function T(e, r, t) {
			e.operation(function () {
				for (var n = b(e, r); n.findNext(); )
					if (typeof r != 'string') {
						var o = e.getRange(n.from(), n.to()).match(r)
						n.replace(
							t.replace(/\$(\d)/g, function (i, p) {
								return o[p]
							})
						)
					} else n.replace(t)
			})
		}
		a(T, 'replaceAll')
		function Q(e, r) {
			if (!e.getOption('readOnly')) {
				var t = e.getSelection() || m(e).lastQuery,
					n = r ? e.phrase('Replace all:') : e.phrase('Replace:'),
					o = c('', null, c('span', { className: 'CodeMirror-search-label' }, n), F(e))
				P(e, o, n, t, function (i) {
					i &&
						((i = M(i)),
						P(e, k(e), e.phrase('Replace with:'), '', function (p) {
							if (((p = R(p)), r)) T(e, i, p)
							else {
								N(e)
								var u = b(e, i, e.getCursor('from')),
									l = a(function () {
										var y = u.from(),
											d
										;(!(d = u.findNext()) &&
											((u = b(e, i)),
											!(d = u.findNext()) ||
												(y && u.from().line == y.line && u.from().ch == y.ch))) ||
											(e.setSelection(u.from(), u.to()),
											e.scrollIntoView({ from: u.from(), to: u.to() }),
											E(e, j(e), e.phrase('Replace?'), [
												function () {
													x(d)
												},
												l,
												function () {
													T(e, i, p)
												}
											]))
									}, 'advance'),
									x = a(function (y) {
										u.replace(
											typeof i == 'string'
												? p
												: p.replace(/\$(\d)/g, function (d, f) {
														return y[f]
												  })
										),
											l()
									}, 'doReplace')
								l()
							}
						}))
				})
			}
		}
		a(Q, 'replace'),
			(s.commands.find = function (e) {
				N(e), v(e)
			}),
			(s.commands.findPersistent = function (e) {
				N(e), v(e, !1, !0)
			}),
			(s.commands.findPersistentNext = function (e) {
				v(e, !1, !0, !0)
			}),
			(s.commands.findPersistentPrev = function (e) {
				v(e, !0, !0, !0)
			}),
			(s.commands.findNext = v),
			(s.commands.findPrev = function (e) {
				v(e, !0)
			}),
			(s.commands.clearSearch = N),
			(s.commands.replace = Q),
			(s.commands.replaceAll = function (e) {
				Q(e, !0)
			})
	})
})()
var $ = B.exports
const U = V($),
	G = A({ __proto__: null, default: U }, [$])
export { G as s }
