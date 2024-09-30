import { c as _, h as Y } from './codemirror.es2-5884f31a.js'
import { K as q } from './searchcursor.es2-cbfe7cae.js'
import { j as z } from './matchbrackets.es2-f53f57e6.js'
var G = Object.defineProperty,
	C = (L, A) => G(L, 'name', { value: A, configurable: !0 })
function j(L, A) {
	for (var u = 0; u < A.length; u++) {
		const s = A[u]
		if (typeof s != 'string' && !Array.isArray(s)) {
			for (const c in s)
				if (c !== 'default' && !(c in L)) {
					const b = Object.getOwnPropertyDescriptor(s, c)
					b && Object.defineProperty(L, c, b.get ? b : { enumerable: !0, get: () => s[c] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(L, Symbol.toStringTag, { value: 'Module' }))
}
C(j, '_mergeNamespaces')
var J = { exports: {} }
;(function (L, A) {
	;(function (u) {
		u(_(), q(), z())
	})(function (u) {
		var s = u.commands,
			c = u.Pos
		function b(e, t, n) {
			if (n < 0 && t.ch == 0) return e.clipPos(c(t.line - 1))
			var r = e.getLine(t.line)
			if (n > 0 && t.ch >= r.length) return e.clipPos(c(t.line + 1, 0))
			for (
				var o = 'start', i, l = t.ch, a = l, f = n < 0 ? 0 : r.length, m = 0;
				a != f;
				a += n, m++
			) {
				var h = r.charAt(n < 0 ? a - 1 : a),
					d = h != '_' && u.isWordChar(h) ? 'w' : 'o'
				if ((d == 'w' && h.toUpperCase() == h && (d = 'W'), o == 'start'))
					d != 'o' ? ((o = 'in'), (i = d)) : (l = a + n)
				else if (o == 'in' && i != d) {
					if ((i == 'w' && d == 'W' && n < 0 && a--, i == 'W' && d == 'w' && n > 0))
						if (a == l + 1) {
							i = 'w'
							continue
						} else a--
					break
				}
			}
			return c(t.line, a)
		}
		C(b, 'findPosSubword')
		function R(e, t) {
			e.extendSelectionsBy(function (n) {
				return e.display.shift || e.doc.extend || n.empty()
					? b(e.doc, n.head, t)
					: t < 0
					? n.from()
					: n.to()
			})
		}
		C(R, 'moveSubword'),
			(s.goSubwordLeft = function (e) {
				R(e, -1)
			}),
			(s.goSubwordRight = function (e) {
				R(e, 1)
			}),
			(s.scrollLineUp = function (e) {
				var t = e.getScrollInfo()
				if (!e.somethingSelected()) {
					var n = e.lineAtHeight(t.top + t.clientHeight, 'local')
					e.getCursor().line >= n && e.execCommand('goLineUp')
				}
				e.scrollTo(null, t.top - e.defaultTextHeight())
			}),
			(s.scrollLineDown = function (e) {
				var t = e.getScrollInfo()
				if (!e.somethingSelected()) {
					var n = e.lineAtHeight(t.top, 'local') + 1
					e.getCursor().line <= n && e.execCommand('goLineDown')
				}
				e.scrollTo(null, t.top + e.defaultTextHeight())
			}),
			(s.splitSelectionByLine = function (e) {
				for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
					for (var o = t[r].from(), i = t[r].to(), l = o.line; l <= i.line; ++l)
						(i.line > o.line && l == i.line && i.ch == 0) ||
							n.push({ anchor: l == o.line ? o : c(l, 0), head: l == i.line ? i : c(l) })
				e.setSelections(n, 0)
			}),
			(s.singleSelectionTop = function (e) {
				var t = e.listSelections()[0]
				e.setSelection(t.anchor, t.head, { scroll: !1 })
			}),
			(s.selectLine = function (e) {
				for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
					var o = t[r]
					n.push({ anchor: c(o.from().line, 0), head: c(o.to().line + 1, 0) })
				}
				e.setSelections(n)
			})
		function y(e, t) {
			if (e.isReadOnly()) return u.Pass
			e.operation(function () {
				for (var n = e.listSelections().length, r = [], o = -1, i = 0; i < n; i++) {
					var l = e.listSelections()[i].head
					if (!(l.line <= o)) {
						var a = c(l.line + (t ? 0 : 1), 0)
						e.replaceRange(
							`
`,
							a,
							null,
							'+insertLine'
						),
							e.indentLine(a.line, null, !0),
							r.push({ head: a, anchor: a }),
							(o = l.line + 1)
					}
				}
				e.setSelections(r)
			}),
				e.execCommand('indentAuto')
		}
		C(y, 'insertLine'),
			(s.insertLineAfter = function (e) {
				return y(e, !1)
			}),
			(s.insertLineBefore = function (e) {
				return y(e, !0)
			})
		function P(e, t) {
			for (var n = t.ch, r = n, o = e.getLine(t.line); n && u.isWordChar(o.charAt(n - 1)); ) --n
			for (; r < o.length && u.isWordChar(o.charAt(r)); ) ++r
			return { from: c(t.line, n), to: c(t.line, r), word: o.slice(n, r) }
		}
		C(P, 'wordAt'),
			(s.selectNextOccurrence = function (e) {
				var t = e.getCursor('from'),
					n = e.getCursor('to'),
					r = e.state.sublimeFindFullWord == e.doc.sel
				if (u.cmpPos(t, n) == 0) {
					var o = P(e, t)
					if (!o.word) return
					e.setSelection(o.from, o.to), (r = !0)
				} else {
					var i = e.getRange(t, n),
						l = r ? new RegExp('\\b' + i + '\\b') : i,
						a = e.getSearchCursor(l, n),
						f = a.findNext()
					if (
						(f || ((a = e.getSearchCursor(l, c(e.firstLine(), 0))), (f = a.findNext())),
						!f || O(e.listSelections(), a.from(), a.to()))
					)
						return
					e.addSelection(a.from(), a.to())
				}
				r && (e.state.sublimeFindFullWord = e.doc.sel)
			}),
			(s.skipAndSelectNextOccurrence = function (e) {
				var t = e.getCursor('anchor'),
					n = e.getCursor('head')
				s.selectNextOccurrence(e),
					u.cmpPos(t, n) != 0 &&
						e.doc.setSelections(
							e.doc.listSelections().filter(function (r) {
								return r.anchor != t || r.head != n
							})
						)
			})
		function F(e, t) {
			for (var n = e.listSelections(), r = [], o = 0; o < n.length; o++) {
				var i = n[o],
					l = e.findPosV(i.anchor, t, 'line', i.anchor.goalColumn),
					a = e.findPosV(i.head, t, 'line', i.head.goalColumn)
				;(l.goalColumn =
					i.anchor.goalColumn != null ? i.anchor.goalColumn : e.cursorCoords(i.anchor, 'div').left),
					(a.goalColumn =
						i.head.goalColumn != null ? i.head.goalColumn : e.cursorCoords(i.head, 'div').left)
				var f = { anchor: l, head: a }
				r.push(i), r.push(f)
			}
			e.setSelections(r)
		}
		C(F, 'addCursorToSelection'),
			(s.addCursorToPrevLine = function (e) {
				F(e, -1)
			}),
			(s.addCursorToNextLine = function (e) {
				F(e, 1)
			})
		function O(e, t, n) {
			for (var r = 0; r < e.length; r++)
				if (u.cmpPos(e[r].from(), t) == 0 && u.cmpPos(e[r].to(), n) == 0) return !0
			return !1
		}
		C(O, 'isSelectedRange')
		var N = '(){}[]'
		function T(e) {
			for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
				var o = t[r],
					i = o.head,
					l = e.scanForBracket(i, -1)
				if (!l) return !1
				for (;;) {
					var a = e.scanForBracket(i, 1)
					if (!a) return !1
					if (a.ch == N.charAt(N.indexOf(l.ch) + 1)) {
						var f = c(l.pos.line, l.pos.ch + 1)
						if (u.cmpPos(f, o.from()) == 0 && u.cmpPos(a.pos, o.to()) == 0) {
							if (((l = e.scanForBracket(l.pos, -1)), !l)) return !1
						} else {
							n.push({ anchor: f, head: a.pos })
							break
						}
					}
					i = c(a.pos.line, a.pos.ch + 1)
				}
			}
			return e.setSelections(n), !0
		}
		C(T, 'selectBetweenBrackets'),
			(s.selectScope = function (e) {
				T(e) || e.execCommand('selectAll')
			}),
			(s.selectBetweenBrackets = function (e) {
				if (!T(e)) return u.Pass
			})
		function x(e) {
			return e ? (/\bpunctuation\b/.test(e) ? e : void 0) : null
		}
		C(x, 'puncType'),
			(s.goToBracket = function (e) {
				e.extendSelectionsBy(function (t) {
					var n = e.scanForBracket(t.head, 1, x(e.getTokenTypeAt(t.head)))
					if (n && u.cmpPos(n.pos, t.head) != 0) return n.pos
					var r = e.scanForBracket(t.head, -1, x(e.getTokenTypeAt(c(t.head.line, t.head.ch + 1))))
					return (r && c(r.pos.line, r.pos.ch + 1)) || t.head
				})
			}),
			(s.swapLineUp = function (e) {
				if (e.isReadOnly()) return u.Pass
				for (
					var t = e.listSelections(), n = [], r = e.firstLine() - 1, o = [], i = 0;
					i < t.length;
					i++
				) {
					var l = t[i],
						a = l.from().line - 1,
						f = l.to().line
					o.push({
						anchor: c(l.anchor.line - 1, l.anchor.ch),
						head: c(l.head.line - 1, l.head.ch)
					}),
						l.to().ch == 0 && !l.empty() && --f,
						a > r ? n.push(a, f) : n.length && (n[n.length - 1] = f),
						(r = f)
				}
				e.operation(function () {
					for (var m = 0; m < n.length; m += 2) {
						var h = n[m],
							d = n[m + 1],
							w = e.getLine(h)
						e.replaceRange('', c(h, 0), c(h + 1, 0), '+swapLine'),
							d > e.lastLine()
								? e.replaceRange(
										`
` + w,
										c(e.lastLine()),
										null,
										'+swapLine'
								  )
								: e.replaceRange(
										w +
											`
`,
										c(d, 0),
										null,
										'+swapLine'
								  )
					}
					e.setSelections(o), e.scrollIntoView()
				})
			}),
			(s.swapLineDown = function (e) {
				if (e.isReadOnly()) return u.Pass
				for (
					var t = e.listSelections(), n = [], r = e.lastLine() + 1, o = t.length - 1;
					o >= 0;
					o--
				) {
					var i = t[o],
						l = i.to().line + 1,
						a = i.from().line
					i.to().ch == 0 && !i.empty() && l--,
						l < r ? n.push(l, a) : n.length && (n[n.length - 1] = a),
						(r = a)
				}
				e.operation(function () {
					for (var f = n.length - 2; f >= 0; f -= 2) {
						var m = n[f],
							h = n[f + 1],
							d = e.getLine(m)
						m == e.lastLine()
							? e.replaceRange('', c(m - 1), c(m), '+swapLine')
							: e.replaceRange('', c(m, 0), c(m + 1, 0), '+swapLine'),
							e.replaceRange(
								d +
									`
`,
								c(h, 0),
								null,
								'+swapLine'
							)
					}
					e.scrollIntoView()
				})
			}),
			(s.toggleCommentIndented = function (e) {
				e.toggleComment({ indent: !0 })
			}),
			(s.joinLines = function (e) {
				for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
					for (
						var o = t[r], i = o.from(), l = i.line, a = o.to().line;
						r < t.length - 1 && t[r + 1].from().line == a;

					)
						a = t[++r].to().line
					n.push({ start: l, end: a, anchor: !o.empty() && i })
				}
				e.operation(function () {
					for (var f = 0, m = [], h = 0; h < n.length; h++) {
						for (
							var d = n[h], w = d.anchor && c(d.anchor.line - f, d.anchor.ch), B, S = d.start;
							S <= d.end;
							S++
						) {
							var g = S - f
							S == d.end && (B = c(g, e.getLine(g).length + 1)),
								g < e.lastLine() &&
									(e.replaceRange(' ', c(g), c(g + 1, /^\s*/.exec(e.getLine(g + 1))[0].length)),
									++f)
						}
						m.push({ anchor: w || B, head: B })
					}
					e.setSelections(m, 0)
				})
			}),
			(s.duplicateLine = function (e) {
				e.operation(function () {
					for (var t = e.listSelections().length, n = 0; n < t; n++) {
						var r = e.listSelections()[n]
						r.empty()
							? e.replaceRange(
									e.getLine(r.head.line) +
										`
`,
									c(r.head.line, 0)
							  )
							: e.replaceRange(e.getRange(r.from(), r.to()), r.from())
					}
					e.scrollIntoView()
				})
			})
		function K(e, t, n) {
			if (e.isReadOnly()) return u.Pass
			for (var r = e.listSelections(), o = [], i, l = 0; l < r.length; l++) {
				var a = r[l]
				if (!a.empty()) {
					for (
						var f = a.from().line, m = a.to().line;
						l < r.length - 1 && r[l + 1].from().line == m;

					)
						m = r[++l].to().line
					r[l].to().ch || m--, o.push(f, m)
				}
			}
			o.length ? (i = !0) : o.push(e.firstLine(), e.lastLine()),
				e.operation(function () {
					for (var h = [], d = 0; d < o.length; d += 2) {
						var w = o[d],
							B = o[d + 1],
							S = c(w, 0),
							g = c(B),
							D = e.getRange(S, g, !1)
						t
							? D.sort(function (v, k) {
									return v < k ? -n : v == k ? 0 : n
							  })
							: D.sort(function (v, k) {
									var W = v.toUpperCase(),
										H = k.toUpperCase()
									return W != H && ((v = W), (k = H)), v < k ? -n : v == k ? 0 : n
							  }),
							e.replaceRange(D, S, g),
							i && h.push({ anchor: S, head: c(B + 1, 0) })
					}
					i && e.setSelections(h, 0)
				})
		}
		C(K, 'sortLines'),
			(s.sortLines = function (e) {
				K(e, !0, 1)
			}),
			(s.reverseSortLines = function (e) {
				K(e, !0, -1)
			}),
			(s.sortLinesInsensitive = function (e) {
				K(e, !1, 1)
			}),
			(s.reverseSortLinesInsensitive = function (e) {
				K(e, !1, -1)
			}),
			(s.nextBookmark = function (e) {
				var t = e.state.sublimeBookmarks
				if (t)
					for (; t.length; ) {
						var n = t.shift(),
							r = n.find()
						if (r) return t.push(n), e.setSelection(r.from, r.to)
					}
			}),
			(s.prevBookmark = function (e) {
				var t = e.state.sublimeBookmarks
				if (t)
					for (; t.length; ) {
						t.unshift(t.pop())
						var n = t[t.length - 1].find()
						if (!n) t.pop()
						else return e.setSelection(n.from, n.to)
					}
			}),
			(s.toggleBookmark = function (e) {
				for (
					var t = e.listSelections(),
						n = e.state.sublimeBookmarks || (e.state.sublimeBookmarks = []),
						r = 0;
					r < t.length;
					r++
				) {
					for (
						var o = t[r].from(),
							i = t[r].to(),
							l = t[r].empty() ? e.findMarksAt(o) : e.findMarks(o, i),
							a = 0;
						a < l.length;
						a++
					)
						if (l[a].sublimeBookmark) {
							l[a].clear()
							for (var f = 0; f < n.length; f++) n[f] == l[a] && n.splice(f--, 1)
							break
						}
					a == l.length && n.push(e.markText(o, i, { sublimeBookmark: !0, clearWhenEmpty: !1 }))
				}
			}),
			(s.clearBookmarks = function (e) {
				var t = e.state.sublimeBookmarks
				if (t) for (var n = 0; n < t.length; n++) t[n].clear()
				t.length = 0
			}),
			(s.selectBookmarks = function (e) {
				var t = e.state.sublimeBookmarks,
					n = []
				if (t)
					for (var r = 0; r < t.length; r++) {
						var o = t[r].find()
						o ? n.push({ anchor: o.from, head: o.to }) : t.splice(r--, 0)
					}
				n.length && e.setSelections(n, 0)
			})
		function M(e, t) {
			e.operation(function () {
				for (var n = e.listSelections(), r = [], o = [], i = 0; i < n.length; i++) {
					var l = n[i]
					l.empty() ? (r.push(i), o.push('')) : o.push(t(e.getRange(l.from(), l.to())))
				}
				e.replaceSelections(o, 'around', 'case')
				for (var i = r.length - 1, a; i >= 0; i--) {
					var l = n[r[i]]
					if (!(a && u.cmpPos(l.head, a) > 0)) {
						var f = P(e, l.head)
						;(a = f.from), e.replaceRange(t(f.word), f.from, f.to)
					}
				}
			})
		}
		C(M, 'modifyWordOrSelection'),
			(s.smartBackspace = function (e) {
				if (e.somethingSelected()) return u.Pass
				e.operation(function () {
					for (
						var t = e.listSelections(), n = e.getOption('indentUnit'), r = t.length - 1;
						r >= 0;
						r--
					) {
						var o = t[r].head,
							i = e.getRange({ line: o.line, ch: 0 }, o),
							l = u.countColumn(i, null, e.getOption('tabSize')),
							a = e.findPosH(o, -1, 'char', !1)
						if (i && !/\S/.test(i) && l % n == 0) {
							var f = new c(o.line, u.findColumn(i, l - n, n))
							f.ch != o.ch && (a = f)
						}
						e.replaceRange('', a, o, '+delete')
					}
				})
			}),
			(s.delLineRight = function (e) {
				e.operation(function () {
					for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
						e.replaceRange('', t[n].anchor, c(t[n].to().line), '+delete')
					e.scrollIntoView()
				})
			}),
			(s.upcaseAtCursor = function (e) {
				M(e, function (t) {
					return t.toUpperCase()
				})
			}),
			(s.downcaseAtCursor = function (e) {
				M(e, function (t) {
					return t.toLowerCase()
				})
			}),
			(s.setSublimeMark = function (e) {
				e.state.sublimeMark && e.state.sublimeMark.clear(),
					(e.state.sublimeMark = e.setBookmark(e.getCursor()))
			}),
			(s.selectToSublimeMark = function (e) {
				var t = e.state.sublimeMark && e.state.sublimeMark.find()
				t && e.setSelection(e.getCursor(), t)
			}),
			(s.deleteToSublimeMark = function (e) {
				var t = e.state.sublimeMark && e.state.sublimeMark.find()
				if (t) {
					var n = e.getCursor(),
						r = t
					if (u.cmpPos(n, r) > 0) {
						var o = r
						;(r = n), (n = o)
					}
					;(e.state.sublimeKilled = e.getRange(n, r)), e.replaceRange('', n, r)
				}
			}),
			(s.swapWithSublimeMark = function (e) {
				var t = e.state.sublimeMark && e.state.sublimeMark.find()
				t &&
					(e.state.sublimeMark.clear(),
					(e.state.sublimeMark = e.setBookmark(e.getCursor())),
					e.setCursor(t))
			}),
			(s.sublimeYank = function (e) {
				e.state.sublimeKilled != null && e.replaceSelection(e.state.sublimeKilled, null, 'paste')
			}),
			(s.showInCenter = function (e) {
				var t = e.cursorCoords(null, 'local')
				e.scrollTo(null, (t.top + t.bottom) / 2 - e.getScrollInfo().clientHeight / 2)
			})
		function U(e) {
			var t = e.getCursor('from'),
				n = e.getCursor('to')
			if (u.cmpPos(t, n) == 0) {
				var r = P(e, t)
				if (!r.word) return
				;(t = r.from), (n = r.to)
			}
			return { from: t, to: n, query: e.getRange(t, n), word: r }
		}
		C(U, 'getTarget')
		function I(e, t) {
			var n = U(e)
			if (n) {
				var r = n.query,
					o = e.getSearchCursor(r, t ? n.to : n.from)
				;(t ? o.findNext() : o.findPrevious())
					? e.setSelection(o.from(), o.to())
					: ((o = e.getSearchCursor(r, t ? c(e.firstLine(), 0) : e.clipPos(c(e.lastLine())))),
					  (t ? o.findNext() : o.findPrevious())
							? e.setSelection(o.from(), o.to())
							: n.word && e.setSelection(n.from, n.to))
			}
		}
		C(I, 'findAndGoTo'),
			(s.findUnder = function (e) {
				I(e, !0)
			}),
			(s.findUnderPrevious = function (e) {
				I(e, !1)
			}),
			(s.findAllUnder = function (e) {
				var t = U(e)
				if (t) {
					for (var n = e.getSearchCursor(t.query), r = [], o = -1; n.findNext(); )
						r.push({ anchor: n.from(), head: n.to() }),
							n.from().line <= t.from.line && n.from().ch <= t.from.ch && o++
					e.setSelections(r, o)
				}
			})
		var p = u.keyMap
		;(p.macSublime = {
			'Cmd-Left': 'goLineStartSmart',
			'Shift-Tab': 'indentLess',
			'Shift-Ctrl-K': 'deleteLine',
			'Alt-Q': 'wrapLines',
			'Ctrl-Left': 'goSubwordLeft',
			'Ctrl-Right': 'goSubwordRight',
			'Ctrl-Alt-Up': 'scrollLineUp',
			'Ctrl-Alt-Down': 'scrollLineDown',
			'Cmd-L': 'selectLine',
			'Shift-Cmd-L': 'splitSelectionByLine',
			Esc: 'singleSelectionTop',
			'Cmd-Enter': 'insertLineAfter',
			'Shift-Cmd-Enter': 'insertLineBefore',
			'Cmd-D': 'selectNextOccurrence',
			'Shift-Cmd-Space': 'selectScope',
			'Shift-Cmd-M': 'selectBetweenBrackets',
			'Cmd-M': 'goToBracket',
			'Cmd-Ctrl-Up': 'swapLineUp',
			'Cmd-Ctrl-Down': 'swapLineDown',
			'Cmd-/': 'toggleCommentIndented',
			'Cmd-J': 'joinLines',
			'Shift-Cmd-D': 'duplicateLine',
			F5: 'sortLines',
			'Shift-F5': 'reverseSortLines',
			'Cmd-F5': 'sortLinesInsensitive',
			'Shift-Cmd-F5': 'reverseSortLinesInsensitive',
			F2: 'nextBookmark',
			'Shift-F2': 'prevBookmark',
			'Cmd-F2': 'toggleBookmark',
			'Shift-Cmd-F2': 'clearBookmarks',
			'Alt-F2': 'selectBookmarks',
			Backspace: 'smartBackspace',
			'Cmd-K Cmd-D': 'skipAndSelectNextOccurrence',
			'Cmd-K Cmd-K': 'delLineRight',
			'Cmd-K Cmd-U': 'upcaseAtCursor',
			'Cmd-K Cmd-L': 'downcaseAtCursor',
			'Cmd-K Cmd-Space': 'setSublimeMark',
			'Cmd-K Cmd-A': 'selectToSublimeMark',
			'Cmd-K Cmd-W': 'deleteToSublimeMark',
			'Cmd-K Cmd-X': 'swapWithSublimeMark',
			'Cmd-K Cmd-Y': 'sublimeYank',
			'Cmd-K Cmd-C': 'showInCenter',
			'Cmd-K Cmd-G': 'clearBookmarks',
			'Cmd-K Cmd-Backspace': 'delLineLeft',
			'Cmd-K Cmd-1': 'foldAll',
			'Cmd-K Cmd-0': 'unfoldAll',
			'Cmd-K Cmd-J': 'unfoldAll',
			'Ctrl-Shift-Up': 'addCursorToPrevLine',
			'Ctrl-Shift-Down': 'addCursorToNextLine',
			'Cmd-F3': 'findUnder',
			'Shift-Cmd-F3': 'findUnderPrevious',
			'Alt-F3': 'findAllUnder',
			'Shift-Cmd-[': 'fold',
			'Shift-Cmd-]': 'unfold',
			'Cmd-I': 'findIncremental',
			'Shift-Cmd-I': 'findIncrementalReverse',
			'Cmd-H': 'replace',
			F3: 'findNext',
			'Shift-F3': 'findPrev',
			fallthrough: 'macDefault'
		}),
			u.normalizeKeyMap(p.macSublime),
			(p.pcSublime = {
				'Shift-Tab': 'indentLess',
				'Shift-Ctrl-K': 'deleteLine',
				'Alt-Q': 'wrapLines',
				'Ctrl-T': 'transposeChars',
				'Alt-Left': 'goSubwordLeft',
				'Alt-Right': 'goSubwordRight',
				'Ctrl-Up': 'scrollLineUp',
				'Ctrl-Down': 'scrollLineDown',
				'Ctrl-L': 'selectLine',
				'Shift-Ctrl-L': 'splitSelectionByLine',
				Esc: 'singleSelectionTop',
				'Ctrl-Enter': 'insertLineAfter',
				'Shift-Ctrl-Enter': 'insertLineBefore',
				'Ctrl-D': 'selectNextOccurrence',
				'Shift-Ctrl-Space': 'selectScope',
				'Shift-Ctrl-M': 'selectBetweenBrackets',
				'Ctrl-M': 'goToBracket',
				'Shift-Ctrl-Up': 'swapLineUp',
				'Shift-Ctrl-Down': 'swapLineDown',
				'Ctrl-/': 'toggleCommentIndented',
				'Ctrl-J': 'joinLines',
				'Shift-Ctrl-D': 'duplicateLine',
				F9: 'sortLines',
				'Shift-F9': 'reverseSortLines',
				'Ctrl-F9': 'sortLinesInsensitive',
				'Shift-Ctrl-F9': 'reverseSortLinesInsensitive',
				F2: 'nextBookmark',
				'Shift-F2': 'prevBookmark',
				'Ctrl-F2': 'toggleBookmark',
				'Shift-Ctrl-F2': 'clearBookmarks',
				'Alt-F2': 'selectBookmarks',
				Backspace: 'smartBackspace',
				'Ctrl-K Ctrl-D': 'skipAndSelectNextOccurrence',
				'Ctrl-K Ctrl-K': 'delLineRight',
				'Ctrl-K Ctrl-U': 'upcaseAtCursor',
				'Ctrl-K Ctrl-L': 'downcaseAtCursor',
				'Ctrl-K Ctrl-Space': 'setSublimeMark',
				'Ctrl-K Ctrl-A': 'selectToSublimeMark',
				'Ctrl-K Ctrl-W': 'deleteToSublimeMark',
				'Ctrl-K Ctrl-X': 'swapWithSublimeMark',
				'Ctrl-K Ctrl-Y': 'sublimeYank',
				'Ctrl-K Ctrl-C': 'showInCenter',
				'Ctrl-K Ctrl-G': 'clearBookmarks',
				'Ctrl-K Ctrl-Backspace': 'delLineLeft',
				'Ctrl-K Ctrl-1': 'foldAll',
				'Ctrl-K Ctrl-0': 'unfoldAll',
				'Ctrl-K Ctrl-J': 'unfoldAll',
				'Ctrl-Alt-Up': 'addCursorToPrevLine',
				'Ctrl-Alt-Down': 'addCursorToNextLine',
				'Ctrl-F3': 'findUnder',
				'Shift-Ctrl-F3': 'findUnderPrevious',
				'Alt-F3': 'findAllUnder',
				'Shift-Ctrl-[': 'fold',
				'Shift-Ctrl-]': 'unfold',
				'Ctrl-I': 'findIncremental',
				'Shift-Ctrl-I': 'findIncrementalReverse',
				'Ctrl-H': 'replace',
				F3: 'findNext',
				'Shift-F3': 'findPrev',
				fallthrough: 'pcDefault'
			}),
			u.normalizeKeyMap(p.pcSublime)
		var V = p.default == p.macDefault
		p.sublime = V ? p.macSublime : p.pcSublime
	})
})()
var E = J.exports
const Q = Y(E),
	ee = j({ __proto__: null, default: Q }, [E])
export { ee as s }
