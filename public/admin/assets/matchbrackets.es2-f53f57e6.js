import { c as N } from './codemirror.es2-5884f31a.js'
var j = Object.defineProperty,
	u = (M, b) => j(M, 'name', { value: b, configurable: !0 }),
	C = { exports: {} },
	T
function R() {
	return (
		T ||
			((T = 1),
			(function (M, b) {
				;(function (f) {
					f(N())
				})(function (f) {
					var E =
							/MSIE \d/.test(navigator.userAgent) &&
							(document.documentMode == null || document.documentMode < 8),
						g = f.Pos,
						x = {
							'(': ')>',
							')': '(<',
							'[': ']>',
							']': '[<',
							'{': '}>',
							'}': '{<',
							'<': '>>',
							'>': '<<'
						}
					function v(t) {
						return (t && t.bracketRegex) || /[(){}[\]]/
					}
					u(v, 'bracketRegex')
					function y(t, n, e) {
						var i = t.getLineHandle(n.line),
							a = n.ch - 1,
							h = e && e.afterCursor
						h == null && (h = /(^| )cm-fat-cursor($| )/.test(t.getWrapperElement().className))
						var l = v(e),
							o =
								(!h && a >= 0 && l.test(i.text.charAt(a)) && x[i.text.charAt(a)]) ||
								(l.test(i.text.charAt(a + 1)) && x[i.text.charAt(++a)])
						if (!o) return null
						var r = o.charAt(1) == '>' ? 1 : -1
						if (e && e.strict && r > 0 != (a == n.ch)) return null
						var m = t.getTokenTypeAt(g(n.line, a + 1)),
							c = A(t, g(n.line, a + (r > 0 ? 1 : 0)), r, m, e)
						return c == null
							? null
							: {
									from: g(n.line, a),
									to: c && c.pos,
									match: c && c.ch == o.charAt(0),
									forward: r > 0
							  }
					}
					u(y, 'findMatchingBracket')
					function A(t, n, e, i, a) {
						for (
							var h = (a && a.maxScanLineLength) || 1e4,
								l = (a && a.maxScanLines) || 1e3,
								o = [],
								r = v(a),
								m =
									e > 0
										? Math.min(n.line + l, t.lastLine() + 1)
										: Math.max(t.firstLine() - 1, n.line - l),
								c = n.line;
							c != m;
							c += e
						) {
							var s = t.getLine(c)
							if (s) {
								var k = e > 0 ? 0 : s.length - 1,
									S = e > 0 ? s.length : -1
								if (!(s.length > h))
									for (c == n.line && (k = n.ch - (e < 0 ? 1 : 0)); k != S; k += e) {
										var B = s.charAt(k)
										if (
											r.test(B) &&
											(i === void 0 || (t.getTokenTypeAt(g(c, k + 1)) || '') == (i || ''))
										) {
											var H = x[B]
											if (H && (H.charAt(1) == '>') == e > 0) o.push(B)
											else if (o.length) o.pop()
											else return { pos: g(c, k), ch: B }
										}
									}
							}
						}
						return c - e == (e > 0 ? t.lastLine() : t.firstLine()) ? !1 : null
					}
					u(A, 'scanForBracket')
					function L(t, n, e) {
						for (
							var i = t.state.matchBrackets.maxHighlightLineLength || 1e3,
								a = e && e.highlightNonMatching,
								h = [],
								l = t.listSelections(),
								o = 0;
							o < l.length;
							o++
						) {
							var r = l[o].empty() && y(t, l[o].head, e)
							if (r && (r.match || a !== !1) && t.getLine(r.from.line).length <= i) {
								var m = r.match ? 'CodeMirror-matchingbracket' : 'CodeMirror-nonmatchingbracket'
								h.push(t.markText(r.from, g(r.from.line, r.from.ch + 1), { className: m })),
									r.to &&
										t.getLine(r.to.line).length <= i &&
										h.push(t.markText(r.to, g(r.to.line, r.to.ch + 1), { className: m }))
							}
						}
						if (h.length) {
							E && t.state.focused && t.focus()
							var c = u(function () {
								t.operation(function () {
									for (var s = 0; s < h.length; s++) h[s].clear()
								})
							}, 'clear')
							if (n) setTimeout(c, 800)
							else return c
						}
					}
					u(L, 'matchBrackets')
					function d(t) {
						t.operation(function () {
							t.state.matchBrackets.currentlyHighlighted &&
								(t.state.matchBrackets.currentlyHighlighted(),
								(t.state.matchBrackets.currentlyHighlighted = null)),
								(t.state.matchBrackets.currentlyHighlighted = L(t, !1, t.state.matchBrackets))
						})
					}
					u(d, 'doMatchBrackets')
					function p(t) {
						t.state.matchBrackets &&
							t.state.matchBrackets.currentlyHighlighted &&
							(t.state.matchBrackets.currentlyHighlighted(),
							(t.state.matchBrackets.currentlyHighlighted = null))
					}
					u(p, 'clearHighlighted'),
						f.defineOption('matchBrackets', !1, function (t, n, e) {
							e &&
								e != f.Init &&
								(t.off('cursorActivity', d), t.off('focus', d), t.off('blur', p), p(t)),
								n &&
									((t.state.matchBrackets = typeof n == 'object' ? n : {}),
									t.on('cursorActivity', d),
									t.on('focus', d),
									t.on('blur', p))
						}),
						f.defineExtension('matchBrackets', function () {
							L(this, !0)
						}),
						f.defineExtension('findMatchingBracket', function (t, n, e) {
							return (
								(e || typeof n == 'boolean') &&
									(e ? ((e.strict = n), (n = e)) : (n = n ? { strict: !0 } : null)),
								y(this, t, n)
							)
						}),
						f.defineExtension('scanForBracket', function (t, n, e, i) {
							return A(this, t, n, e, i)
						})
				})
			})()),
		C.exports
	)
}
u(R, 'requireMatchbrackets')
export { R as j }
