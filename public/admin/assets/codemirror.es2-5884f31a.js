var su = Object.defineProperty,
	u = (Et, Nl) => su(Et, 'name', { value: Nl, configurable: !0 }),
	uu =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
			? window
			: typeof global < 'u'
			? global
			: typeof self < 'u'
			? self
			: {}
function cu(Et) {
	return Et && Et.__esModule && Object.prototype.hasOwnProperty.call(Et, 'default')
		? Et.default
		: Et
}
u(cu, 'getDefaultExportFromCjs')
var Gs = { exports: {} },
	Ks
function hu() {
	return (
		Ks ||
			((Ks = 1),
			(function (Et, Nl) {
				;(function (it, tr) {
					Et.exports = tr()
				})(uu, function () {
					var it = navigator.userAgent,
						tr = navigator.platform,
						It = /gecko\/\d/i.test(it),
						Ol = /MSIE \d/.test(it),
						Dl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(it),
						er = /Edge\/(\d+)/.exec(it),
						A = Ol || Dl || er,
						I = A && (Ol ? document.documentMode || 6 : +(er || Dl)[1]),
						ot = !er && /WebKit\//.test(it),
						Vs = ot && /Qt\/\d+\.\d+/.test(it),
						nr = !er && /Chrome\//.test(it),
						kt = /Opera\//.test(it),
						rr = /Apple Computer/.test(navigator.vendor),
						js = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(it),
						Xs = /PhantomJS/.test(it),
						hn = rr && (/Mobile\/\w+/.test(it) || navigator.maxTouchPoints > 2),
						ir = /Android/.test(it),
						dn = hn || ir || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(it),
						xt = hn || /Mac/.test(tr),
						_s = /\bCrOS\b/.test(it),
						qs = /win/i.test(tr),
						he = kt && it.match(/Version\/(\d*\.\d*)/)
					he && (he = Number(he[1])), he && he >= 15 && ((kt = !1), (ot = !0))
					var Al = xt && (Vs || (kt && (he == null || he < 12.11))),
						gi = It || (A && I >= 9)
					function de(t) {
						return new RegExp('(^|\\s)' + t + '(?:$|\\s)\\s*')
					}
					u(de, 'classTest')
					var fe = u(function (t, e) {
						var r = t.className,
							n = de(e).exec(r)
						if (n) {
							var i = r.slice(n.index + n[0].length)
							t.className = r.slice(0, n.index) + (i ? n[1] + i : '')
						}
					}, 'rmClass')
					function Rt(t) {
						for (var e = t.childNodes.length; e > 0; --e) t.removeChild(t.firstChild)
						return t
					}
					u(Rt, 'removeChildren')
					function gt(t, e) {
						return Rt(t).appendChild(e)
					}
					u(gt, 'removeChildrenAndAdd')
					function k(t, e, r, n) {
						var i = document.createElement(t)
						if ((r && (i.className = r), n && (i.style.cssText = n), typeof e == 'string'))
							i.appendChild(document.createTextNode(e))
						else if (e) for (var o = 0; o < e.length; ++o) i.appendChild(e[o])
						return i
					}
					u(k, 'elt')
					function pe(t, e, r, n) {
						var i = k(t, e, r, n)
						return i.setAttribute('role', 'presentation'), i
					}
					u(pe, 'eltP')
					var ge
					document.createRange
						? (ge = u(function (t, e, r, n) {
								var i = document.createRange()
								return i.setEnd(n || t, r), i.setStart(t, e), i
						  }, 'range'))
						: (ge = u(function (t, e, r) {
								var n = document.body.createTextRange()
								try {
									n.moveToElementText(t.parentNode)
								} catch {
									return n
								}
								return n.collapse(!0), n.moveEnd('character', r), n.moveStart('character', e), n
						  }, 'range'))
					function zt(t, e) {
						if ((e.nodeType == 3 && (e = e.parentNode), t.contains)) return t.contains(e)
						do if ((e.nodeType == 11 && (e = e.host), e == t)) return !0
						while ((e = e.parentNode))
					}
					u(zt, 'contains')
					function vt() {
						var t
						try {
							t = document.activeElement
						} catch {
							t = document.body || null
						}
						for (; t && t.shadowRoot && t.shadowRoot.activeElement; ) t = t.shadowRoot.activeElement
						return t
					}
					u(vt, 'activeElt')
					function Zt(t, e) {
						var r = t.className
						de(e).test(r) || (t.className += (r ? ' ' : '') + e)
					}
					u(Zt, 'addClass')
					function or(t, e) {
						for (var r = t.split(' '), n = 0; n < r.length; n++)
							r[n] && !de(r[n]).test(e) && (e += ' ' + r[n])
						return e
					}
					u(or, 'joinClasses')
					var fn = u(function (t) {
						t.select()
					}, 'selectInput')
					hn
						? (fn = u(function (t) {
								;(t.selectionStart = 0), (t.selectionEnd = t.value.length)
						  }, 'selectInput'))
						: A &&
						  (fn = u(function (t) {
								try {
									t.select()
								} catch {}
						  }, 'selectInput'))
					function lr(t) {
						var e = Array.prototype.slice.call(arguments, 1)
						return function () {
							return t.apply(null, e)
						}
					}
					u(lr, 'bind')
					function $t(t, e, r) {
						e || (e = {})
						for (var n in t)
							t.hasOwnProperty(n) && (r !== !1 || !e.hasOwnProperty(n)) && (e[n] = t[n])
						return e
					}
					u($t, 'copyObj')
					function yt(t, e, r, n, i) {
						e == null && ((e = t.search(/[^\s\u00a0]/)), e == -1 && (e = t.length))
						for (var o = n || 0, l = i || 0; ; ) {
							var a = t.indexOf('	', o)
							if (a < 0 || a >= e) return l + (e - o)
							;(l += a - o), (l += r - (l % r)), (o = a + 1)
						}
					}
					u(yt, 'countColumn')
					var Qt = u(function () {
						;(this.id = null),
							(this.f = null),
							(this.time = 0),
							(this.handler = lr(this.onTimeout, this))
					}, 'Delayed')
					;(Qt.prototype.onTimeout = function (t) {
						;(t.id = 0), t.time <= +new Date() ? t.f() : setTimeout(t.handler, t.time - +new Date())
					}),
						(Qt.prototype.set = function (t, e) {
							this.f = e
							var r = +new Date() + t
							;(!this.id || r < this.time) &&
								(clearTimeout(this.id), (this.id = setTimeout(this.handler, t)), (this.time = r))
						})
					function J(t, e) {
						for (var r = 0; r < t.length; ++r) if (t[r] == e) return r
						return -1
					}
					u(J, 'indexOf')
					var Wl = 50,
						ar = {
							toString: function () {
								return 'CodeMirror.Pass'
							}
						},
						Dt = { scroll: !1 },
						mi = { origin: '*mouse' },
						pn = { origin: '+move' }
					function sr(t, e, r) {
						for (var n = 0, i = 0; ; ) {
							var o = t.indexOf('	', n)
							o == -1 && (o = t.length)
							var l = o - n
							if (o == t.length || i + l >= e) return n + Math.min(l, e - i)
							if (((i += o - n), (i += r - (i % r)), (n = o + 1), i >= e)) return n
						}
					}
					u(sr, 'findColumn')
					var ur = ['']
					function cr(t) {
						for (; ur.length <= t; ) ur.push(W(ur) + ' ')
						return ur[t]
					}
					u(cr, 'spaceStr')
					function W(t) {
						return t[t.length - 1]
					}
					u(W, 'lst')
					function gn(t, e) {
						for (var r = [], n = 0; n < t.length; n++) r[n] = e(t[n], n)
						return r
					}
					u(gn, 'map')
					function Hl(t, e, r) {
						for (var n = 0, i = r(e); n < t.length && r(t[n]) <= i; ) n++
						t.splice(n, 0, e)
					}
					u(Hl, 'insertSorted')
					function vi() {}
					u(vi, 'nothing')
					function yi(t, e) {
						var r
						return (
							Object.create ? (r = Object.create(t)) : ((vi.prototype = t), (r = new vi())),
							e && $t(e, r),
							r
						)
					}
					u(yi, 'createObj')
					var Ys =
						/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
					function hr(t) {
						return /\w/.test(t) || (t > '' && (t.toUpperCase() != t.toLowerCase() || Ys.test(t)))
					}
					u(hr, 'isWordCharBasic')
					function mn(t, e) {
						return e ? (e.source.indexOf('\\w') > -1 && hr(t) ? !0 : e.test(t)) : hr(t)
					}
					u(mn, 'isWordChar')
					function bi(t) {
						for (var e in t) if (t.hasOwnProperty(e) && t[e]) return !1
						return !0
					}
					u(bi, 'isEmpty')
					var Zs =
						/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
					function dr(t) {
						return t.charCodeAt(0) >= 768 && Zs.test(t)
					}
					u(dr, 'isExtendingChar')
					function wi(t, e, r) {
						for (; (r < 0 ? e > 0 : e < t.length) && dr(t.charAt(e)); ) e += r
						return e
					}
					u(wi, 'skipExtendingChars')
					function Pe(t, e, r) {
						for (var n = e > r ? -1 : 1; ; ) {
							if (e == r) return e
							var i = (e + r) / 2,
								o = n < 0 ? Math.ceil(i) : Math.floor(i)
							if (o == e) return t(o) ? e : r
							t(o) ? (r = o) : (e = o + n)
						}
					}
					u(Pe, 'findFirst')
					function Fl(t, e, r, n) {
						if (!t) return n(e, r, 'ltr', 0)
						for (var i = !1, o = 0; o < t.length; ++o) {
							var l = t[o]
							;((l.from < r && l.to > e) || (e == r && l.to == e)) &&
								(n(Math.max(l.from, e), Math.min(l.to, r), l.level == 1 ? 'rtl' : 'ltr', o),
								(i = !0))
						}
						i || n(e, r, 'ltr')
					}
					u(Fl, 'iterateBidiSections')
					var vn = null
					function Ee(t, e, r) {
						var n
						vn = null
						for (var i = 0; i < t.length; ++i) {
							var o = t[i]
							if (o.from < e && o.to > e) return i
							o.to == e && (o.from != o.to && r == 'before' ? (n = i) : (vn = i)),
								o.from == e && (o.from != o.to && r != 'before' ? (n = i) : (vn = i))
						}
						return n ?? vn
					}
					u(Ee, 'getBidiPartAt')
					var $s = (function () {
						var t =
								'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
							e =
								'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111'
						function r(c) {
							return c <= 247
								? t.charAt(c)
								: 1424 <= c && c <= 1524
								? 'R'
								: 1536 <= c && c <= 1785
								? e.charAt(c - 1536)
								: 1774 <= c && c <= 2220
								? 'r'
								: 8192 <= c && c <= 8203
								? 'w'
								: c == 8204
								? 'b'
								: 'L'
						}
						u(r, 'charType')
						var n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
							i = /[stwN]/,
							o = /[LRr]/,
							l = /[Lb1n]/,
							a = /[1n]/
						function s(c, h, d) {
							;(this.level = c), (this.from = h), (this.to = d)
						}
						return (
							u(s, 'BidiSpan'),
							function (c, h) {
								var d = h == 'ltr' ? 'L' : 'R'
								if (c.length == 0 || (h == 'ltr' && !n.test(c))) return !1
								for (var p = c.length, f = [], g = 0; g < p; ++g) f.push(r(c.charCodeAt(g)))
								for (var m = 0, y = d; m < p; ++m) {
									var b = f[m]
									b == 'm' ? (f[m] = y) : (y = b)
								}
								for (var x = 0, w = d; x < p; ++x) {
									var C = f[x]
									C == '1' && w == 'r'
										? (f[x] = 'n')
										: o.test(C) && ((w = C), C == 'r' && (f[x] = 'R'))
								}
								for (var T = 1, L = f[0]; T < p - 1; ++T) {
									var D = f[T]
									D == '+' && L == '1' && f[T + 1] == '1'
										? (f[T] = '1')
										: D == ',' && L == f[T + 1] && (L == '1' || L == 'n') && (f[T] = L),
										(L = D)
								}
								for (var E = 0; E < p; ++E) {
									var $ = f[E]
									if ($ == ',') f[E] = 'N'
									else if ($ == '%') {
										var z = void 0
										for (z = E + 1; z < p && f[z] == '%'; ++z);
										for (
											var ht = (E && f[E - 1] == '!') || (z < p && f[z] == '1') ? '1' : 'N', dt = E;
											dt < z;
											++dt
										)
											f[dt] = ht
										E = z - 1
									}
								}
								for (var V = 0, ft = d; V < p; ++V) {
									var et = f[V]
									ft == 'L' && et == '1' ? (f[V] = 'L') : o.test(et) && (ft = et)
								}
								for (var Z = 0; Z < p; ++Z)
									if (i.test(f[Z])) {
										var j = void 0
										for (j = Z + 1; j < p && i.test(f[j]); ++j);
										for (
											var B = (Z ? f[Z - 1] : d) == 'L',
												pt = (j < p ? f[j] : d) == 'L',
												un = B == pt ? (B ? 'L' : 'R') : d,
												ce = Z;
											ce < j;
											++ce
										)
											f[ce] = un
										Z = j - 1
									}
								for (var rt = [], Pt, Q = 0; Q < p; )
									if (l.test(f[Q])) {
										var Tl = Q
										for (++Q; Q < p && l.test(f[Q]); ++Q);
										rt.push(new s(0, Tl, Q))
									} else {
										var Yt = Q,
											He = rt.length,
											Fe = h == 'rtl' ? 1 : 0
										for (++Q; Q < p && f[Q] != 'L'; ++Q);
										for (var st = Yt; st < Q; )
											if (a.test(f[st])) {
												Yt < st && (rt.splice(He, 0, new s(1, Yt, st)), (He += Fe))
												var cn = st
												for (++st; st < Q && a.test(f[st]); ++st);
												rt.splice(He, 0, new s(2, cn, st)), (He += Fe), (Yt = st)
											} else ++st
										Yt < Q && rt.splice(He, 0, new s(1, Yt, Q))
									}
								return (
									h == 'ltr' &&
										(rt[0].level == 1 &&
											(Pt = c.match(/^\s+/)) &&
											((rt[0].from = Pt[0].length), rt.unshift(new s(0, 0, Pt[0].length))),
										W(rt).level == 1 &&
											(Pt = c.match(/\s+$/)) &&
											((W(rt).to -= Pt[0].length), rt.push(new s(0, p - Pt[0].length, p)))),
									h == 'rtl' ? rt.reverse() : rt
								)
							}
						)
					})()
					function At(t, e) {
						var r = t.order
						return r == null && (r = t.order = $s(t.text, e)), r
					}
					u(At, 'getOrder')
					var Pl = [],
						M = u(function (t, e, r) {
							if (t.addEventListener) t.addEventListener(e, r, !1)
							else if (t.attachEvent) t.attachEvent('on' + e, r)
							else {
								var n = t._handlers || (t._handlers = {})
								n[e] = (n[e] || Pl).concat(r)
							}
						}, 'on')
					function fr(t, e) {
						return (t._handlers && t._handlers[e]) || Pl
					}
					u(fr, 'getHandlers')
					function mt(t, e, r) {
						if (t.removeEventListener) t.removeEventListener(e, r, !1)
						else if (t.detachEvent) t.detachEvent('on' + e, r)
						else {
							var n = t._handlers,
								i = n && n[e]
							if (i) {
								var o = J(i, r)
								o > -1 && (n[e] = i.slice(0, o).concat(i.slice(o + 1)))
							}
						}
					}
					u(mt, 'off')
					function U(t, e) {
						var r = fr(t, e)
						if (r.length)
							for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i)
								r[i].apply(null, n)
					}
					u(U, 'signal')
					function X(t, e, r) {
						return (
							typeof e == 'string' &&
								(e = {
									type: e,
									preventDefault: function () {
										this.defaultPrevented = !0
									}
								}),
							U(t, r || e.type, t, e),
							pr(e) || e.codemirrorIgnore
						)
					}
					u(X, 'signalDOMEvent')
					function xi(t) {
						var e = t._handlers && t._handlers.cursorActivity
						if (e)
							for (
								var r = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []),
									n = 0;
								n < e.length;
								++n
							)
								J(r, e[n]) == -1 && r.push(e[n])
					}
					u(xi, 'signalCursorActivity')
					function bt(t, e) {
						return fr(t, e).length > 0
					}
					u(bt, 'hasHandler')
					function me(t) {
						;(t.prototype.on = function (e, r) {
							M(this, e, r)
						}),
							(t.prototype.off = function (e, r) {
								mt(this, e, r)
							})
					}
					u(me, 'eventMixin')
					function lt(t) {
						t.preventDefault ? t.preventDefault() : (t.returnValue = !1)
					}
					u(lt, 'e_preventDefault')
					function Ci(t) {
						t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0)
					}
					u(Ci, 'e_stopPropagation')
					function pr(t) {
						return t.defaultPrevented != null ? t.defaultPrevented : t.returnValue == !1
					}
					u(pr, 'e_defaultPrevented')
					function Ie(t) {
						lt(t), Ci(t)
					}
					u(Ie, 'e_stop')
					function gr(t) {
						return t.target || t.srcElement
					}
					u(gr, 'e_target')
					function Si(t) {
						var e = t.which
						return (
							e == null &&
								(t.button & 1 ? (e = 1) : t.button & 2 ? (e = 3) : t.button & 4 && (e = 2)),
							xt && t.ctrlKey && e == 1 && (e = 3),
							e
						)
					}
					u(Si, 'e_button')
					var Qs = (function () {
							if (A && I < 9) return !1
							var t = k('div')
							return 'draggable' in t || 'dragDrop' in t
						})(),
						Li
					function El(t) {
						if (Li == null) {
							var e = k('span', '​')
							gt(t, k('span', [e, document.createTextNode('x')])),
								t.firstChild.offsetHeight != 0 &&
									(Li = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(A && I < 8))
						}
						var r = Li
							? k('span', '​')
							: k('span', ' ', null, 'display: inline-block; width: 1px; margin-right: -1px')
						return r.setAttribute('cm-text', ''), r
					}
					u(El, 'zeroWidthElement')
					var ki
					function Il(t) {
						if (ki != null) return ki
						var e = gt(t, document.createTextNode('AخA')),
							r = ge(e, 0, 1).getBoundingClientRect(),
							n = ge(e, 1, 2).getBoundingClientRect()
						return Rt(t), !r || r.left == r.right ? !1 : (ki = n.right - r.right < 3)
					}
					u(Il, 'hasBadBidiRects')
					var Ti =
							`

b`.split(/\n/).length != 3
								? function (t) {
										for (var e = 0, r = [], n = t.length; e <= n; ) {
											var i = t.indexOf(
												`
`,
												e
											)
											i == -1 && (i = t.length)
											var o = t.slice(e, t.charAt(i - 1) == '\r' ? i - 1 : i),
												l = o.indexOf('\r')
											l != -1 ? (r.push(o.slice(0, l)), (e += l + 1)) : (r.push(o), (e = i + 1))
										}
										return r
								  }
								: function (t) {
										return t.split(/\r\n?|\n/)
								  },
						Js = window.getSelection
							? function (t) {
									try {
										return t.selectionStart != t.selectionEnd
									} catch {
										return !1
									}
							  }
							: function (t) {
									var e
									try {
										e = t.ownerDocument.selection.createRange()
									} catch {}
									return !e || e.parentElement() != t
										? !1
										: e.compareEndPoints('StartToEnd', e) != 0
							  },
						tu = (function () {
							var t = k('div')
							return 'oncopy' in t
								? !0
								: (t.setAttribute('oncopy', 'return;'), typeof t.oncopy == 'function')
						})(),
						Mi = null
					function Rl(t) {
						if (Mi != null) return Mi
						var e = gt(t, k('span', 'x')),
							r = e.getBoundingClientRect(),
							n = ge(e, 0, 1).getBoundingClientRect()
						return (Mi = Math.abs(r.left - n.left) > 1)
					}
					u(Rl, 'hasBadZoomedRects')
					var Ni = {},
						Re = {}
					function zl(t, e) {
						arguments.length > 2 && (e.dependencies = Array.prototype.slice.call(arguments, 2)),
							(Ni[t] = e)
					}
					u(zl, 'defineMode')
					function Bl(t, e) {
						Re[t] = e
					}
					u(Bl, 'defineMIME')
					function yn(t) {
						if (typeof t == 'string' && Re.hasOwnProperty(t)) t = Re[t]
						else if (t && typeof t.name == 'string' && Re.hasOwnProperty(t.name)) {
							var e = Re[t.name]
							typeof e == 'string' && (e = { name: e }), (t = yi(e, t)), (t.name = e.name)
						} else {
							if (typeof t == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
								return yn('application/xml')
							if (typeof t == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
								return yn('application/json')
						}
						return typeof t == 'string' ? { name: t } : t || { name: 'null' }
					}
					u(yn, 'resolveMode')
					function mr(t, e) {
						e = yn(e)
						var r = Ni[e.name]
						if (!r) return mr(t, 'text/plain')
						var n = r(t, e)
						if (ze.hasOwnProperty(e.name)) {
							var i = ze[e.name]
							for (var o in i)
								i.hasOwnProperty(o) && (n.hasOwnProperty(o) && (n['_' + o] = n[o]), (n[o] = i[o]))
						}
						if (((n.name = e.name), e.helperType && (n.helperType = e.helperType), e.modeProps))
							for (var l in e.modeProps) n[l] = e.modeProps[l]
						return n
					}
					u(mr, 'getMode')
					var ze = {}
					function Ul(t, e) {
						var r = ze.hasOwnProperty(t) ? ze[t] : (ze[t] = {})
						$t(e, r)
					}
					u(Ul, 'extendMode')
					function Jt(t, e) {
						if (e === !0) return e
						if (t.copyState) return t.copyState(e)
						var r = {}
						for (var n in e) {
							var i = e[n]
							i instanceof Array && (i = i.concat([])), (r[n] = i)
						}
						return r
					}
					u(Jt, 'copyState')
					function vr(t, e) {
						for (var r; t.innerMode && ((r = t.innerMode(e)), !(!r || r.mode == t)); )
							(e = r.state), (t = r.mode)
						return r || { mode: t, state: e }
					}
					u(vr, 'innerMode')
					function Oi(t, e, r) {
						return t.startState ? t.startState(e, r) : !0
					}
					u(Oi, 'startState')
					var K = u(function (t, e, r) {
						;(this.pos = this.start = 0),
							(this.string = t),
							(this.tabSize = e || 8),
							(this.lastColumnPos = this.lastColumnValue = 0),
							(this.lineStart = 0),
							(this.lineOracle = r)
					}, 'StringStream')
					;(K.prototype.eol = function () {
						return this.pos >= this.string.length
					}),
						(K.prototype.sol = function () {
							return this.pos == this.lineStart
						}),
						(K.prototype.peek = function () {
							return this.string.charAt(this.pos) || void 0
						}),
						(K.prototype.next = function () {
							if (this.pos < this.string.length) return this.string.charAt(this.pos++)
						}),
						(K.prototype.eat = function (t) {
							var e = this.string.charAt(this.pos),
								r
							if ((typeof t == 'string' ? (r = e == t) : (r = e && (t.test ? t.test(e) : t(e))), r))
								return ++this.pos, e
						}),
						(K.prototype.eatWhile = function (t) {
							for (var e = this.pos; this.eat(t); );
							return this.pos > e
						}),
						(K.prototype.eatSpace = function () {
							for (var t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos
							return this.pos > t
						}),
						(K.prototype.skipToEnd = function () {
							this.pos = this.string.length
						}),
						(K.prototype.skipTo = function (t) {
							var e = this.string.indexOf(t, this.pos)
							if (e > -1) return (this.pos = e), !0
						}),
						(K.prototype.backUp = function (t) {
							this.pos -= t
						}),
						(K.prototype.column = function () {
							return (
								this.lastColumnPos < this.start &&
									((this.lastColumnValue = yt(
										this.string,
										this.start,
										this.tabSize,
										this.lastColumnPos,
										this.lastColumnValue
									)),
									(this.lastColumnPos = this.start)),
								this.lastColumnValue -
									(this.lineStart ? yt(this.string, this.lineStart, this.tabSize) : 0)
							)
						}),
						(K.prototype.indentation = function () {
							return (
								yt(this.string, null, this.tabSize) -
								(this.lineStart ? yt(this.string, this.lineStart, this.tabSize) : 0)
							)
						}),
						(K.prototype.match = function (t, e, r) {
							if (typeof t == 'string') {
								var n = u(function (l) {
										return r ? l.toLowerCase() : l
									}, 'cased'),
									i = this.string.substr(this.pos, t.length)
								if (n(i) == n(t)) return e !== !1 && (this.pos += t.length), !0
							} else {
								var o = this.string.slice(this.pos).match(t)
								return o && o.index > 0 ? null : (o && e !== !1 && (this.pos += o[0].length), o)
							}
						}),
						(K.prototype.current = function () {
							return this.string.slice(this.start, this.pos)
						}),
						(K.prototype.hideFirstChars = function (t, e) {
							this.lineStart += t
							try {
								return e()
							} finally {
								this.lineStart -= t
							}
						}),
						(K.prototype.lookAhead = function (t) {
							var e = this.lineOracle
							return e && e.lookAhead(t)
						}),
						(K.prototype.baseToken = function () {
							var t = this.lineOracle
							return t && t.baseToken(this.pos)
						})
					function S(t, e) {
						if (((e -= t.first), e < 0 || e >= t.size))
							throw new Error('There is no line ' + (e + t.first) + ' in the document.')
						for (var r = t; !r.lines; )
							for (var n = 0; ; ++n) {
								var i = r.children[n],
									o = i.chunkSize()
								if (e < o) {
									r = i
									break
								}
								e -= o
							}
						return r.lines[e]
					}
					u(S, 'getLine')
					function te(t, e, r) {
						var n = [],
							i = e.line
						return (
							t.iter(e.line, r.line + 1, function (o) {
								var l = o.text
								i == r.line && (l = l.slice(0, r.ch)),
									i == e.line && (l = l.slice(e.ch)),
									n.push(l),
									++i
							}),
							n
						)
					}
					u(te, 'getBetween')
					function yr(t, e, r) {
						var n = []
						return (
							t.iter(e, r, function (i) {
								n.push(i.text)
							}),
							n
						)
					}
					u(yr, 'getLines')
					function Tt(t, e) {
						var r = e - t.height
						if (r) for (var n = t; n; n = n.parent) n.height += r
					}
					u(Tt, 'updateLineHeight')
					function F(t) {
						if (t.parent == null) return null
						for (var e = t.parent, r = J(e.lines, t), n = e.parent; n; e = n, n = n.parent)
							for (var i = 0; n.children[i] != e; ++i) r += n.children[i].chunkSize()
						return r + e.first
					}
					u(F, 'lineNo')
					function ee(t, e) {
						var r = t.first
						t: do {
							for (var n = 0; n < t.children.length; ++n) {
								var i = t.children[n],
									o = i.height
								if (e < o) {
									t = i
									continue t
								}
								;(e -= o), (r += i.chunkSize())
							}
							return r
						} while (!t.lines)
						for (var l = 0; l < t.lines.length; ++l) {
							var a = t.lines[l],
								s = a.height
							if (e < s) break
							e -= s
						}
						return r + l
					}
					u(ee, 'lineAtHeight')
					function Be(t, e) {
						return e >= t.first && e < t.first + t.size
					}
					u(Be, 'isLine')
					function br(t, e) {
						return String(t.lineNumberFormatter(e + t.firstLineNumber))
					}
					u(br, 'lineNumberFor')
					function v(t, e, r) {
						if ((r === void 0 && (r = null), !(this instanceof v))) return new v(t, e, r)
						;(this.line = t), (this.ch = e), (this.sticky = r)
					}
					u(v, 'Pos')
					function N(t, e) {
						return t.line - e.line || t.ch - e.ch
					}
					u(N, 'cmp')
					function wr(t, e) {
						return t.sticky == e.sticky && N(t, e) == 0
					}
					u(wr, 'equalCursorPos')
					function xr(t) {
						return v(t.line, t.ch)
					}
					u(xr, 'copyPos')
					function bn(t, e) {
						return N(t, e) < 0 ? e : t
					}
					u(bn, 'maxPos')
					function wn(t, e) {
						return N(t, e) < 0 ? t : e
					}
					u(wn, 'minPos')
					function Di(t, e) {
						return Math.max(t.first, Math.min(e, t.first + t.size - 1))
					}
					u(Di, 'clipLine')
					function O(t, e) {
						if (e.line < t.first) return v(t.first, 0)
						var r = t.first + t.size - 1
						return e.line > r ? v(r, S(t, r).text.length) : Gl(e, S(t, e.line).text.length)
					}
					u(O, 'clipPos')
					function Gl(t, e) {
						var r = t.ch
						return r == null || r > e ? v(t.line, e) : r < 0 ? v(t.line, 0) : t
					}
					u(Gl, 'clipToLen')
					function Ai(t, e) {
						for (var r = [], n = 0; n < e.length; n++) r[n] = O(t, e[n])
						return r
					}
					u(Ai, 'clipPosArray')
					var Cr = u(function (t, e) {
							;(this.state = t), (this.lookAhead = e)
						}, 'SavedContext'),
						Wt = u(function (t, e, r, n) {
							;(this.state = e),
								(this.doc = t),
								(this.line = r),
								(this.maxLookAhead = n || 0),
								(this.baseTokens = null),
								(this.baseTokenPos = 1)
						}, 'Context')
					;(Wt.prototype.lookAhead = function (t) {
						var e = this.doc.getLine(this.line + t)
						return e != null && t > this.maxLookAhead && (this.maxLookAhead = t), e
					}),
						(Wt.prototype.baseToken = function (t) {
							if (!this.baseTokens) return null
							for (; this.baseTokens[this.baseTokenPos] <= t; ) this.baseTokenPos += 2
							var e = this.baseTokens[this.baseTokenPos + 1]
							return {
								type: e && e.replace(/( |^)overlay .*/, ''),
								size: this.baseTokens[this.baseTokenPos] - t
							}
						}),
						(Wt.prototype.nextLine = function () {
							this.line++, this.maxLookAhead > 0 && this.maxLookAhead--
						}),
						(Wt.fromSaved = function (t, e, r) {
							return e instanceof Cr
								? new Wt(t, Jt(t.mode, e.state), r, e.lookAhead)
								: new Wt(t, Jt(t.mode, e), r)
						}),
						(Wt.prototype.save = function (t) {
							var e = t !== !1 ? Jt(this.doc.mode, this.state) : this.state
							return this.maxLookAhead > 0 ? new Cr(e, this.maxLookAhead) : e
						})
					function Wi(t, e, r, n) {
						var i = [t.state.modeGen],
							o = {}
						Ii(
							t,
							e.text,
							t.doc.mode,
							r,
							function (c, h) {
								return i.push(c, h)
							},
							o,
							n
						)
						for (
							var l = r.state,
								a = u(function (c) {
									r.baseTokens = i
									var h = t.state.overlays[c],
										d = 1,
										p = 0
									;(r.state = !0),
										Ii(
											t,
											e.text,
											h.mode,
											r,
											function (f, g) {
												for (var m = d; p < f; ) {
													var y = i[d]
													y > f && i.splice(d, 1, f, i[d + 1], y), (d += 2), (p = Math.min(f, y))
												}
												if (g)
													if (h.opaque) i.splice(m, d - m, f, 'overlay ' + g), (d = m + 2)
													else
														for (; m < d; m += 2) {
															var b = i[m + 1]
															i[m + 1] = (b ? b + ' ' : '') + 'overlay ' + g
														}
											},
											o
										),
										(r.state = l),
										(r.baseTokens = null),
										(r.baseTokenPos = 1)
								}, 'loop'),
								s = 0;
							s < t.state.overlays.length;
							++s
						)
							a(s)
						return { styles: i, classes: o.bgClass || o.textClass ? o : null }
					}
					u(Wi, 'highlightLine')
					function Hi(t, e, r) {
						if (!e.styles || e.styles[0] != t.state.modeGen) {
							var n = Ue(t, F(e)),
								i = e.text.length > t.options.maxHighlightLength && Jt(t.doc.mode, n.state),
								o = Wi(t, e, n)
							i && (n.state = i),
								(e.stateAfter = n.save(!i)),
								(e.styles = o.styles),
								o.classes
									? (e.styleClasses = o.classes)
									: e.styleClasses && (e.styleClasses = null),
								r === t.doc.highlightFrontier &&
									(t.doc.modeFrontier = Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier))
						}
						return e.styles
					}
					u(Hi, 'getLineStyles')
					function Ue(t, e, r) {
						var n = t.doc,
							i = t.display
						if (!n.mode.startState) return new Wt(n, !0, e)
						var o = Vl(t, e, r),
							l = o > n.first && S(n, o - 1).stateAfter,
							a = l ? Wt.fromSaved(n, l, o) : new Wt(n, Oi(n.mode), o)
						return (
							n.iter(o, e, function (s) {
								Sr(t, s.text, a)
								var c = a.line
								;(s.stateAfter =
									c == e - 1 || c % 5 == 0 || (c >= i.viewFrom && c < i.viewTo) ? a.save() : null),
									a.nextLine()
							}),
							r && (n.modeFrontier = a.line),
							a
						)
					}
					u(Ue, 'getContextBefore')
					function Sr(t, e, r, n) {
						var i = t.doc.mode,
							o = new K(e, t.options.tabSize, r)
						for (o.start = o.pos = n || 0, e == '' && Fi(i, r.state); !o.eol(); )
							Lr(i, o, r.state), (o.start = o.pos)
					}
					u(Sr, 'processLine')
					function Fi(t, e) {
						if (t.blankLine) return t.blankLine(e)
						if (t.innerMode) {
							var r = vr(t, e)
							if (r.mode.blankLine) return r.mode.blankLine(r.state)
						}
					}
					u(Fi, 'callBlankLine')
					function Lr(t, e, r, n) {
						for (var i = 0; i < 10; i++) {
							n && (n[0] = vr(t, r).mode)
							var o = t.token(e, r)
							if (e.pos > e.start) return o
						}
						throw new Error('Mode ' + t.name + ' failed to advance stream.')
					}
					u(Lr, 'readToken')
					var Kl = u(function (t, e, r) {
						;(this.start = t.start),
							(this.end = t.pos),
							(this.string = t.current()),
							(this.type = e || null),
							(this.state = r)
					}, 'Token')
					function Pi(t, e, r, n) {
						var i = t.doc,
							o = i.mode,
							l
						e = O(i, e)
						var a = S(i, e.line),
							s = Ue(t, e.line, r),
							c = new K(a.text, t.options.tabSize, s),
							h
						for (n && (h = []); (n || c.pos < e.ch) && !c.eol(); )
							(c.start = c.pos),
								(l = Lr(o, c, s.state)),
								n && h.push(new Kl(c, l, Jt(i.mode, s.state)))
						return n ? h : new Kl(c, l, s.state)
					}
					u(Pi, 'takeToken')
					function Ei(t, e) {
						if (t)
							for (;;) {
								var r = t.match(/(?:^|\s+)line-(background-)?(\S+)/)
								if (!r) break
								t = t.slice(0, r.index) + t.slice(r.index + r[0].length)
								var n = r[1] ? 'bgClass' : 'textClass'
								e[n] == null
									? (e[n] = r[2])
									: new RegExp('(?:^|\\s)' + r[2] + '(?:$|\\s)').test(e[n]) || (e[n] += ' ' + r[2])
							}
						return t
					}
					u(Ei, 'extractLineClasses')
					function Ii(t, e, r, n, i, o, l) {
						var a = r.flattenSpans
						a == null && (a = t.options.flattenSpans)
						var s = 0,
							c = null,
							h = new K(e, t.options.tabSize, n),
							d,
							p = t.options.addModeClass && [null]
						for (e == '' && Ei(Fi(r, n.state), o); !h.eol(); ) {
							if (
								(h.pos > t.options.maxHighlightLength
									? ((a = !1), l && Sr(t, e, n, h.pos), (h.pos = e.length), (d = null))
									: (d = Ei(Lr(r, h, n.state, p), o)),
								p)
							) {
								var f = p[0].name
								f && (d = 'm-' + (d ? f + ' ' + d : f))
							}
							if (!a || c != d) {
								for (; s < h.start; ) (s = Math.min(h.start, s + 5e3)), i(s, c)
								c = d
							}
							h.start = h.pos
						}
						for (; s < h.pos; ) {
							var g = Math.min(h.pos, s + 5e3)
							i(g, c), (s = g)
						}
					}
					u(Ii, 'runMode')
					function Vl(t, e, r) {
						for (
							var n, i, o = t.doc, l = r ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100), a = e;
							a > l;
							--a
						) {
							if (a <= o.first) return o.first
							var s = S(o, a - 1),
								c = s.stateAfter
							if (c && (!r || a + (c instanceof Cr ? c.lookAhead : 0) <= o.modeFrontier)) return a
							var h = yt(s.text, null, t.options.tabSize)
							;(i == null || n > h) && ((i = a - 1), (n = h))
						}
						return i
					}
					u(Vl, 'findStartLine')
					function jl(t, e) {
						if (((t.modeFrontier = Math.min(t.modeFrontier, e)), !(t.highlightFrontier < e - 10))) {
							for (var r = t.first, n = e - 1; n > r; n--) {
								var i = S(t, n).stateAfter
								if (i && (!(i instanceof Cr) || n + i.lookAhead < e)) {
									r = n + 1
									break
								}
							}
							t.highlightFrontier = Math.min(t.highlightFrontier, r)
						}
					}
					u(jl, 'retreatFrontier')
					var Xl = !1,
						Bt = !1
					function _l() {
						Xl = !0
					}
					u(_l, 'seeReadOnlySpans')
					function ql() {
						Bt = !0
					}
					u(ql, 'seeCollapsedSpans')
					function xn(t, e, r) {
						;(this.marker = t), (this.from = e), (this.to = r)
					}
					u(xn, 'MarkedSpan')
					function Ge(t, e) {
						if (t)
							for (var r = 0; r < t.length; ++r) {
								var n = t[r]
								if (n.marker == e) return n
							}
					}
					u(Ge, 'getMarkedSpanFor')
					function Yl(t, e) {
						for (var r, n = 0; n < t.length; ++n) t[n] != e && (r || (r = [])).push(t[n])
						return r
					}
					u(Yl, 'removeMarkedSpan')
					function Zl(t, e, r) {
						var n = r && window.WeakSet && (r.markedSpans || (r.markedSpans = new WeakSet()))
						n && t.markedSpans && n.has(t.markedSpans)
							? t.markedSpans.push(e)
							: ((t.markedSpans = t.markedSpans ? t.markedSpans.concat([e]) : [e]),
							  n && n.add(t.markedSpans)),
							e.marker.attachLine(t)
					}
					u(Zl, 'addMarkedSpan')
					function $l(t, e, r) {
						var n
						if (t)
							for (var i = 0; i < t.length; ++i) {
								var o = t[i],
									l = o.marker,
									a = o.from == null || (l.inclusiveLeft ? o.from <= e : o.from < e)
								if (a || (o.from == e && l.type == 'bookmark' && (!r || !o.marker.insertLeft))) {
									var s = o.to == null || (l.inclusiveRight ? o.to >= e : o.to > e)
									;(n || (n = [])).push(new xn(l, o.from, s ? null : o.to))
								}
							}
						return n
					}
					u($l, 'markedSpansBefore')
					function Ql(t, e, r) {
						var n
						if (t)
							for (var i = 0; i < t.length; ++i) {
								var o = t[i],
									l = o.marker,
									a = o.to == null || (l.inclusiveRight ? o.to >= e : o.to > e)
								if (a || (o.from == e && l.type == 'bookmark' && (!r || o.marker.insertLeft))) {
									var s = o.from == null || (l.inclusiveLeft ? o.from <= e : o.from < e)
									;(n || (n = [])).push(
										new xn(l, s ? null : o.from - e, o.to == null ? null : o.to - e)
									)
								}
							}
						return n
					}
					u(Ql, 'markedSpansAfter')
					function kr(t, e) {
						if (e.full) return null
						var r = Be(t, e.from.line) && S(t, e.from.line).markedSpans,
							n = Be(t, e.to.line) && S(t, e.to.line).markedSpans
						if (!r && !n) return null
						var i = e.from.ch,
							o = e.to.ch,
							l = N(e.from, e.to) == 0,
							a = $l(r, i, l),
							s = Ql(n, o, l),
							c = e.text.length == 1,
							h = W(e.text).length + (c ? i : 0)
						if (a)
							for (var d = 0; d < a.length; ++d) {
								var p = a[d]
								if (p.to == null) {
									var f = Ge(s, p.marker)
									f ? c && (p.to = f.to == null ? null : f.to + h) : (p.to = i)
								}
							}
						if (s)
							for (var g = 0; g < s.length; ++g) {
								var m = s[g]
								if ((m.to != null && (m.to += h), m.from == null)) {
									var y = Ge(a, m.marker)
									y || ((m.from = h), c && (a || (a = [])).push(m))
								} else (m.from += h), c && (a || (a = [])).push(m)
							}
						a && (a = Ri(a)), s && s != a && (s = Ri(s))
						var b = [a]
						if (!c) {
							var x = e.text.length - 2,
								w
							if (x > 0 && a)
								for (var C = 0; C < a.length; ++C)
									a[C].to == null && (w || (w = [])).push(new xn(a[C].marker, null, null))
							for (var T = 0; T < x; ++T) b.push(w)
							b.push(s)
						}
						return b
					}
					u(kr, 'stretchSpansOverChange')
					function Ri(t) {
						for (var e = 0; e < t.length; ++e) {
							var r = t[e]
							r.from != null && r.from == r.to && r.marker.clearWhenEmpty !== !1 && t.splice(e--, 1)
						}
						return t.length ? t : null
					}
					u(Ri, 'clearEmptySpans')
					function Jl(t, e, r) {
						var n = null
						if (
							(t.iter(e.line, r.line + 1, function (f) {
								if (f.markedSpans)
									for (var g = 0; g < f.markedSpans.length; ++g) {
										var m = f.markedSpans[g].marker
										m.readOnly && (!n || J(n, m) == -1) && (n || (n = [])).push(m)
									}
							}),
							!n)
						)
							return null
						for (var i = [{ from: e, to: r }], o = 0; o < n.length; ++o)
							for (var l = n[o], a = l.find(0), s = 0; s < i.length; ++s) {
								var c = i[s]
								if (!(N(c.to, a.from) < 0 || N(c.from, a.to) > 0)) {
									var h = [s, 1],
										d = N(c.from, a.from),
										p = N(c.to, a.to)
									;(d < 0 || (!l.inclusiveLeft && !d)) && h.push({ from: c.from, to: a.from }),
										(p > 0 || (!l.inclusiveRight && !p)) && h.push({ from: a.to, to: c.to }),
										i.splice.apply(i, h),
										(s += h.length - 3)
								}
							}
						return i
					}
					u(Jl, 'removeReadOnlyRanges')
					function zi(t) {
						var e = t.markedSpans
						if (e) {
							for (var r = 0; r < e.length; ++r) e[r].marker.detachLine(t)
							t.markedSpans = null
						}
					}
					u(zi, 'detachMarkedSpans')
					function Bi(t, e) {
						if (e) {
							for (var r = 0; r < e.length; ++r) e[r].marker.attachLine(t)
							t.markedSpans = e
						}
					}
					u(Bi, 'attachMarkedSpans')
					function Cn(t) {
						return t.inclusiveLeft ? -1 : 0
					}
					u(Cn, 'extraLeft')
					function Sn(t) {
						return t.inclusiveRight ? 1 : 0
					}
					u(Sn, 'extraRight')
					function Tr(t, e) {
						var r = t.lines.length - e.lines.length
						if (r != 0) return r
						var n = t.find(),
							i = e.find(),
							o = N(n.from, i.from) || Cn(t) - Cn(e)
						if (o) return -o
						var l = N(n.to, i.to) || Sn(t) - Sn(e)
						return l || e.id - t.id
					}
					u(Tr, 'compareCollapsedMarkers')
					function Ui(t, e) {
						var r = Bt && t.markedSpans,
							n
						if (r)
							for (var i = void 0, o = 0; o < r.length; ++o)
								(i = r[o]),
									i.marker.collapsed &&
										(e ? i.from : i.to) == null &&
										(!n || Tr(n, i.marker) < 0) &&
										(n = i.marker)
						return n
					}
					u(Ui, 'collapsedSpanAtSide')
					function Gi(t) {
						return Ui(t, !0)
					}
					u(Gi, 'collapsedSpanAtStart')
					function Ln(t) {
						return Ui(t, !1)
					}
					u(Ln, 'collapsedSpanAtEnd')
					function ta(t, e) {
						var r = Bt && t.markedSpans,
							n
						if (r)
							for (var i = 0; i < r.length; ++i) {
								var o = r[i]
								o.marker.collapsed &&
									(o.from == null || o.from < e) &&
									(o.to == null || o.to > e) &&
									(!n || Tr(n, o.marker) < 0) &&
									(n = o.marker)
							}
						return n
					}
					u(ta, 'collapsedSpanAround')
					function Ki(t, e, r, n, i) {
						var o = S(t, e),
							l = Bt && o.markedSpans
						if (l)
							for (var a = 0; a < l.length; ++a) {
								var s = l[a]
								if (s.marker.collapsed) {
									var c = s.marker.find(0),
										h = N(c.from, r) || Cn(s.marker) - Cn(i),
										d = N(c.to, n) || Sn(s.marker) - Sn(i)
									if (
										!((h >= 0 && d <= 0) || (h <= 0 && d >= 0)) &&
										((h <= 0 &&
											(s.marker.inclusiveRight && i.inclusiveLeft
												? N(c.to, r) >= 0
												: N(c.to, r) > 0)) ||
											(h >= 0 &&
												(s.marker.inclusiveRight && i.inclusiveLeft
													? N(c.from, n) <= 0
													: N(c.from, n) < 0)))
									)
										return !0
								}
							}
					}
					u(Ki, 'conflictingCollapsedRange')
					function Ct(t) {
						for (var e; (e = Gi(t)); ) t = e.find(-1, !0).line
						return t
					}
					u(Ct, 'visualLine')
					function ea(t) {
						for (var e; (e = Ln(t)); ) t = e.find(1, !0).line
						return t
					}
					u(ea, 'visualLineEnd')
					function na(t) {
						for (var e, r; (e = Ln(t)); ) (t = e.find(1, !0).line), (r || (r = [])).push(t)
						return r
					}
					u(na, 'visualLineContinued')
					function Mr(t, e) {
						var r = S(t, e),
							n = Ct(r)
						return r == n ? e : F(n)
					}
					u(Mr, 'visualLineNo')
					function Vi(t, e) {
						if (e > t.lastLine()) return e
						var r = S(t, e),
							n
						if (!Ut(t, r)) return e
						for (; (n = Ln(r)); ) r = n.find(1, !0).line
						return F(r) + 1
					}
					u(Vi, 'visualLineEndNo')
					function Ut(t, e) {
						var r = Bt && e.markedSpans
						if (r) {
							for (var n = void 0, i = 0; i < r.length; ++i)
								if (
									((n = r[i]),
									!!n.marker.collapsed &&
										(n.from == null ||
											(!n.marker.widgetNode &&
												n.from == 0 &&
												n.marker.inclusiveLeft &&
												Nr(t, e, n))))
								)
									return !0
						}
					}
					u(Ut, 'lineIsHidden')
					function Nr(t, e, r) {
						if (r.to == null) {
							var n = r.marker.find(1, !0)
							return Nr(t, n.line, Ge(n.line.markedSpans, r.marker))
						}
						if (r.marker.inclusiveRight && r.to == e.text.length) return !0
						for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
							if (
								((i = e.markedSpans[o]),
								i.marker.collapsed &&
									!i.marker.widgetNode &&
									i.from == r.to &&
									(i.to == null || i.to != r.from) &&
									(i.marker.inclusiveLeft || r.marker.inclusiveRight) &&
									Nr(t, e, i))
							)
								return !0
					}
					u(Nr, 'lineIsHiddenInner')
					function Ht(t) {
						t = Ct(t)
						for (var e = 0, r = t.parent, n = 0; n < r.lines.length; ++n) {
							var i = r.lines[n]
							if (i == t) break
							e += i.height
						}
						for (var o = r.parent; o; r = o, o = r.parent)
							for (var l = 0; l < o.children.length; ++l) {
								var a = o.children[l]
								if (a == r) break
								e += a.height
							}
						return e
					}
					u(Ht, 'heightAtLine')
					function kn(t) {
						if (t.height == 0) return 0
						for (var e = t.text.length, r, n = t; (r = Gi(n)); ) {
							var i = r.find(0, !0)
							;(n = i.from.line), (e += i.from.ch - i.to.ch)
						}
						for (n = t; (r = Ln(n)); ) {
							var o = r.find(0, !0)
							;(e -= n.text.length - o.from.ch), (n = o.to.line), (e += n.text.length - o.to.ch)
						}
						return e
					}
					u(kn, 'lineLength')
					function Or(t) {
						var e = t.display,
							r = t.doc
						;(e.maxLine = S(r, r.first)),
							(e.maxLineLength = kn(e.maxLine)),
							(e.maxLineChanged = !0),
							r.iter(function (n) {
								var i = kn(n)
								i > e.maxLineLength && ((e.maxLineLength = i), (e.maxLine = n))
							})
					}
					u(Or, 'findMaxLine')
					var Ke = u(function (t, e, r) {
						;(this.text = t), Bi(this, e), (this.height = r ? r(this) : 1)
					}, 'Line')
					;(Ke.prototype.lineNo = function () {
						return F(this)
					}),
						me(Ke)
					function ra(t, e, r, n) {
						;(t.text = e),
							t.stateAfter && (t.stateAfter = null),
							t.styles && (t.styles = null),
							t.order != null && (t.order = null),
							zi(t),
							Bi(t, r)
						var i = n ? n(t) : 1
						i != t.height && Tt(t, i)
					}
					u(ra, 'updateLine')
					function ia(t) {
						;(t.parent = null), zi(t)
					}
					u(ia, 'cleanUpLine')
					var eu = {},
						nu = {}
					function ji(t, e) {
						if (!t || /^\s*$/.test(t)) return null
						var r = e.addModeClass ? nu : eu
						return r[t] || (r[t] = t.replace(/\S+/g, 'cm-$&'))
					}
					u(ji, 'interpretTokenStyle')
					function Xi(t, e) {
						var r = pe('span', null, null, ot ? 'padding-right: .1px' : null),
							n = {
								pre: pe('pre', [r], 'CodeMirror-line'),
								content: r,
								col: 0,
								pos: 0,
								cm: t,
								trailingSpace: !1,
								splitSpaces: t.getOption('lineWrapping')
							}
						e.measure = {}
						for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
							var o = i ? e.rest[i - 1] : e.line,
								l = void 0
							;(n.pos = 0),
								(n.addToken = la),
								Il(t.display.measure) &&
									(l = At(o, t.doc.direction)) &&
									(n.addToken = sa(n.addToken, l)),
								(n.map = [])
							var a = e != t.display.externalMeasured && F(o)
							ua(o, n, Hi(t, o, a)),
								o.styleClasses &&
									(o.styleClasses.bgClass &&
										(n.bgClass = or(o.styleClasses.bgClass, n.bgClass || '')),
									o.styleClasses.textClass &&
										(n.textClass = or(o.styleClasses.textClass, n.textClass || ''))),
								n.map.length == 0 && n.map.push(0, 0, n.content.appendChild(El(t.display.measure))),
								i == 0
									? ((e.measure.map = n.map), (e.measure.cache = {}))
									: ((e.measure.maps || (e.measure.maps = [])).push(n.map),
									  (e.measure.caches || (e.measure.caches = [])).push({}))
						}
						if (ot) {
							var s = n.content.lastChild
							;(/\bcm-tab\b/.test(s.className) ||
								(s.querySelector && s.querySelector('.cm-tab'))) &&
								(n.content.className = 'cm-tab-wrap-hack')
						}
						return (
							U(t, 'renderLine', t, e.line, n.pre),
							n.pre.className && (n.textClass = or(n.pre.className, n.textClass || '')),
							n
						)
					}
					u(Xi, 'buildLineContent')
					function oa(t) {
						var e = k('span', '•', 'cm-invalidchar')
						return (
							(e.title = '\\u' + t.charCodeAt(0).toString(16)),
							e.setAttribute('aria-label', e.title),
							e
						)
					}
					u(oa, 'defaultSpecialCharPlaceholder')
					function la(t, e, r, n, i, o, l) {
						if (e) {
							var a = t.splitSpaces ? aa(e, t.trailingSpace) : e,
								s = t.cm.state.specialChars,
								c = !1,
								h
							if (!s.test(e))
								(t.col += e.length),
									(h = document.createTextNode(a)),
									t.map.push(t.pos, t.pos + e.length, h),
									A && I < 9 && (c = !0),
									(t.pos += e.length)
							else {
								h = document.createDocumentFragment()
								for (var d = 0; ; ) {
									s.lastIndex = d
									var p = s.exec(e),
										f = p ? p.index - d : e.length - d
									if (f) {
										var g = document.createTextNode(a.slice(d, d + f))
										A && I < 9 ? h.appendChild(k('span', [g])) : h.appendChild(g),
											t.map.push(t.pos, t.pos + f, g),
											(t.col += f),
											(t.pos += f)
									}
									if (!p) break
									d += f + 1
									var m = void 0
									if (p[0] == '	') {
										var y = t.cm.options.tabSize,
											b = y - (t.col % y)
										;(m = h.appendChild(k('span', cr(b), 'cm-tab'))),
											m.setAttribute('role', 'presentation'),
											m.setAttribute('cm-text', '	'),
											(t.col += b)
									} else
										p[0] == '\r' ||
										p[0] ==
											`
`
											? ((m = h.appendChild(k('span', p[0] == '\r' ? '␍' : '␤', 'cm-invalidchar'))),
											  m.setAttribute('cm-text', p[0]),
											  (t.col += 1))
											: ((m = t.cm.options.specialCharPlaceholder(p[0])),
											  m.setAttribute('cm-text', p[0]),
											  A && I < 9 ? h.appendChild(k('span', [m])) : h.appendChild(m),
											  (t.col += 1))
									t.map.push(t.pos, t.pos + 1, m), t.pos++
								}
							}
							if (
								((t.trailingSpace = a.charCodeAt(e.length - 1) == 32), r || n || i || c || o || l)
							) {
								var x = r || ''
								n && (x += n), i && (x += i)
								var w = k('span', [h], x, o)
								if (l)
									for (var C in l)
										l.hasOwnProperty(C) && C != 'style' && C != 'class' && w.setAttribute(C, l[C])
								return t.content.appendChild(w)
							}
							t.content.appendChild(h)
						}
					}
					u(la, 'buildToken')
					function aa(t, e) {
						if (t.length > 1 && !/  /.test(t)) return t
						for (var r = e, n = '', i = 0; i < t.length; i++) {
							var o = t.charAt(i)
							o == ' ' && r && (i == t.length - 1 || t.charCodeAt(i + 1) == 32) && (o = ' '),
								(n += o),
								(r = o == ' ')
						}
						return n
					}
					u(aa, 'splitSpaces')
					function sa(t, e) {
						return function (r, n, i, o, l, a, s) {
							i = i ? i + ' cm-force-border' : 'cm-force-border'
							for (var c = r.pos, h = c + n.length; ; ) {
								for (
									var d = void 0, p = 0;
									p < e.length && ((d = e[p]), !(d.to > c && d.from <= c));
									p++
								);
								if (d.to >= h) return t(r, n, i, o, l, a, s)
								t(r, n.slice(0, d.to - c), i, o, null, a, s),
									(o = null),
									(n = n.slice(d.to - c)),
									(c = d.to)
							}
						}
					}
					u(sa, 'buildTokenBadBidi')
					function _i(t, e, r, n) {
						var i = !n && r.widgetNode
						i && t.map.push(t.pos, t.pos + e, i),
							!n &&
								t.cm.display.input.needsContentAttribute &&
								(i || (i = t.content.appendChild(document.createElement('span'))),
								i.setAttribute('cm-marker', r.id)),
							i && (t.cm.display.input.setUneditable(i), t.content.appendChild(i)),
							(t.pos += e),
							(t.trailingSpace = !1)
					}
					u(_i, 'buildCollapsedSpan')
					function ua(t, e, r) {
						var n = t.markedSpans,
							i = t.text,
							o = 0
						if (!n) {
							for (var l = 1; l < r.length; l += 2)
								e.addToken(e, i.slice(o, (o = r[l])), ji(r[l + 1], e.cm.options))
							return
						}
						for (var a = i.length, s = 0, c = 1, h = '', d, p, f = 0, g, m, y, b, x; ; ) {
							if (f == s) {
								;(g = m = y = p = ''), (x = null), (b = null), (f = 1 / 0)
								for (var w = [], C = void 0, T = 0; T < n.length; ++T) {
									var L = n[T],
										D = L.marker
									if (D.type == 'bookmark' && L.from == s && D.widgetNode) w.push(D)
									else if (
										L.from <= s &&
										(L.to == null || L.to > s || (D.collapsed && L.to == s && L.from == s))
									) {
										if (
											(L.to != null && L.to != s && f > L.to && ((f = L.to), (m = '')),
											D.className && (g += ' ' + D.className),
											D.css && (p = (p ? p + ';' : '') + D.css),
											D.startStyle && L.from == s && (y += ' ' + D.startStyle),
											D.endStyle && L.to == f && (C || (C = [])).push(D.endStyle, L.to),
											D.title && ((x || (x = {})).title = D.title),
											D.attributes)
										)
											for (var E in D.attributes) (x || (x = {}))[E] = D.attributes[E]
										D.collapsed && (!b || Tr(b.marker, D) < 0) && (b = L)
									} else L.from > s && f > L.from && (f = L.from)
								}
								if (C) for (var $ = 0; $ < C.length; $ += 2) C[$ + 1] == f && (m += ' ' + C[$])
								if (!b || b.from == s) for (var z = 0; z < w.length; ++z) _i(e, 0, w[z])
								if (b && (b.from || 0) == s) {
									if (
										(_i(e, (b.to == null ? a + 1 : b.to) - s, b.marker, b.from == null),
										b.to == null)
									)
										return
									b.to == s && (b = !1)
								}
							}
							if (s >= a) break
							for (var ht = Math.min(a, f); ; ) {
								if (h) {
									var dt = s + h.length
									if (!b) {
										var V = dt > ht ? h.slice(0, ht - s) : h
										e.addToken(e, V, d ? d + g : g, y, s + V.length == f ? m : '', p, x)
									}
									if (dt >= ht) {
										;(h = h.slice(ht - s)), (s = ht)
										break
									}
									;(s = dt), (y = '')
								}
								;(h = i.slice(o, (o = r[c++]))), (d = ji(r[c++], e.cm.options))
							}
						}
					}
					u(ua, 'insertLineContent')
					function qi(t, e, r) {
						;(this.line = e),
							(this.rest = na(e)),
							(this.size = this.rest ? F(W(this.rest)) - r + 1 : 1),
							(this.node = this.text = null),
							(this.hidden = Ut(t, e))
					}
					u(qi, 'LineView')
					function Tn(t, e, r) {
						for (var n = [], i, o = e; o < r; o = i) {
							var l = new qi(t.doc, S(t.doc, o), o)
							;(i = o + l.size), n.push(l)
						}
						return n
					}
					u(Tn, 'buildViewArray')
					var Ve = null
					function ca(t) {
						Ve ? Ve.ops.push(t) : (t.ownsGroup = Ve = { ops: [t], delayedCallbacks: [] })
					}
					u(ca, 'pushOperation')
					function ha(t) {
						var e = t.delayedCallbacks,
							r = 0
						do {
							for (; r < e.length; r++) e[r].call(null)
							for (var n = 0; n < t.ops.length; n++) {
								var i = t.ops[n]
								if (i.cursorActivityHandlers)
									for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
										i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
							}
						} while (r < e.length)
					}
					u(ha, 'fireCallbacksForOps')
					function da(t, e) {
						var r = t.ownsGroup
						if (r)
							try {
								ha(r)
							} finally {
								;(Ve = null), e(r)
							}
					}
					u(da, 'finishOperation')
					var Mn = null
					function _(t, e) {
						var r = fr(t, e)
						if (r.length) {
							var n = Array.prototype.slice.call(arguments, 2),
								i
							Ve ? (i = Ve.delayedCallbacks) : Mn ? (i = Mn) : ((i = Mn = []), setTimeout(fa, 0))
							for (
								var o = u(function (a) {
										i.push(function () {
											return r[a].apply(null, n)
										})
									}, 'loop'),
									l = 0;
								l < r.length;
								++l
							)
								o(l)
						}
					}
					u(_, 'signalLater')
					function fa() {
						var t = Mn
						Mn = null
						for (var e = 0; e < t.length; ++e) t[e]()
					}
					u(fa, 'fireOrphanDelayed')
					function Yi(t, e, r, n) {
						for (var i = 0; i < e.changes.length; i++) {
							var o = e.changes[i]
							o == 'text'
								? ga(t, e)
								: o == 'gutter'
								? $i(t, e, r, n)
								: o == 'class'
								? Dr(t, e)
								: o == 'widget' && ma(t, e, n)
						}
						e.changes = null
					}
					u(Yi, 'updateLineForChanges')
					function je(t) {
						return (
							t.node == t.text &&
								((t.node = k('div', null, null, 'position: relative')),
								t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
								t.node.appendChild(t.text),
								A && I < 8 && (t.node.style.zIndex = 2)),
							t.node
						)
					}
					u(je, 'ensureLineWrapped')
					function pa(t, e) {
						var r = e.bgClass ? e.bgClass + ' ' + (e.line.bgClass || '') : e.line.bgClass
						if ((r && (r += ' CodeMirror-linebackground'), e.background))
							r
								? (e.background.className = r)
								: (e.background.parentNode.removeChild(e.background), (e.background = null))
						else if (r) {
							var n = je(e)
							;(e.background = n.insertBefore(k('div', null, r), n.firstChild)),
								t.display.input.setUneditable(e.background)
						}
					}
					u(pa, 'updateLineBackground')
					function Zi(t, e) {
						var r = t.display.externalMeasured
						return r && r.line == e.line
							? ((t.display.externalMeasured = null), (e.measure = r.measure), r.built)
							: Xi(t, e)
					}
					u(Zi, 'getLineContent')
					function ga(t, e) {
						var r = e.text.className,
							n = Zi(t, e)
						e.text == e.node && (e.node = n.pre),
							e.text.parentNode.replaceChild(n.pre, e.text),
							(e.text = n.pre),
							n.bgClass != e.bgClass || n.textClass != e.textClass
								? ((e.bgClass = n.bgClass), (e.textClass = n.textClass), Dr(t, e))
								: r && (e.text.className = r)
					}
					u(ga, 'updateLineText')
					function Dr(t, e) {
						pa(t, e),
							e.line.wrapClass
								? (je(e).className = e.line.wrapClass)
								: e.node != e.text && (e.node.className = '')
						var r = e.textClass ? e.textClass + ' ' + (e.line.textClass || '') : e.line.textClass
						e.text.className = r || ''
					}
					u(Dr, 'updateLineClasses')
					function $i(t, e, r, n) {
						if (
							(e.gutter && (e.node.removeChild(e.gutter), (e.gutter = null)),
							e.gutterBackground &&
								(e.node.removeChild(e.gutterBackground), (e.gutterBackground = null)),
							e.line.gutterClass)
						) {
							var i = je(e)
							;(e.gutterBackground = k(
								'div',
								null,
								'CodeMirror-gutter-background ' + e.line.gutterClass,
								'left: ' +
									(t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) +
									'px; width: ' +
									n.gutterTotalWidth +
									'px'
							)),
								t.display.input.setUneditable(e.gutterBackground),
								i.insertBefore(e.gutterBackground, e.text)
						}
						var o = e.line.gutterMarkers
						if (t.options.lineNumbers || o) {
							var l = je(e),
								a = (e.gutter = k(
									'div',
									null,
									'CodeMirror-gutter-wrapper',
									'left: ' + (t.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + 'px'
								))
							if (
								(a.setAttribute('aria-hidden', 'true'),
								t.display.input.setUneditable(a),
								l.insertBefore(a, e.text),
								e.line.gutterClass && (a.className += ' ' + e.line.gutterClass),
								t.options.lineNumbers &&
									(!o || !o['CodeMirror-linenumbers']) &&
									(e.lineNumber = a.appendChild(
										k(
											'div',
											br(t.options, r),
											'CodeMirror-linenumber CodeMirror-gutter-elt',
											'left: ' +
												n.gutterLeft['CodeMirror-linenumbers'] +
												'px; width: ' +
												t.display.lineNumInnerWidth +
												'px'
										)
									)),
								o)
							)
								for (var s = 0; s < t.display.gutterSpecs.length; ++s) {
									var c = t.display.gutterSpecs[s].className,
										h = o.hasOwnProperty(c) && o[c]
									h &&
										a.appendChild(
											k(
												'div',
												[h],
												'CodeMirror-gutter-elt',
												'left: ' + n.gutterLeft[c] + 'px; width: ' + n.gutterWidth[c] + 'px'
											)
										)
								}
						}
					}
					u($i, 'updateLineGutter')
					function ma(t, e, r) {
						e.alignable && (e.alignable = null)
						for (var n = de('CodeMirror-linewidget'), i = e.node.firstChild, o = void 0; i; i = o)
							(o = i.nextSibling), n.test(i.className) && e.node.removeChild(i)
						Qi(t, e, r)
					}
					u(ma, 'updateLineWidgets')
					function va(t, e, r, n) {
						var i = Zi(t, e)
						return (
							(e.text = e.node = i.pre),
							i.bgClass && (e.bgClass = i.bgClass),
							i.textClass && (e.textClass = i.textClass),
							Dr(t, e),
							$i(t, e, r, n),
							Qi(t, e, n),
							e.node
						)
					}
					u(va, 'buildLineElement')
					function Qi(t, e, r) {
						if ((Ji(t, e.line, e, r, !0), e.rest))
							for (var n = 0; n < e.rest.length; n++) Ji(t, e.rest[n], e, r, !1)
					}
					u(Qi, 'insertLineWidgets')
					function Ji(t, e, r, n, i) {
						if (e.widgets)
							for (var o = je(r), l = 0, a = e.widgets; l < a.length; ++l) {
								var s = a[l],
									c = k(
										'div',
										[s.node],
										'CodeMirror-linewidget' + (s.className ? ' ' + s.className : '')
									)
								s.handleMouseEvents || c.setAttribute('cm-ignore-events', 'true'),
									ya(s, c, r, n),
									t.display.input.setUneditable(c),
									i && s.above ? o.insertBefore(c, r.gutter || r.text) : o.appendChild(c),
									_(s, 'redraw')
							}
					}
					u(Ji, 'insertLineWidgetsFor')
					function ya(t, e, r, n) {
						if (t.noHScroll) {
							;(r.alignable || (r.alignable = [])).push(e)
							var i = n.wrapperWidth
							;(e.style.left = n.fixedPos + 'px'),
								t.coverGutter ||
									((i -= n.gutterTotalWidth), (e.style.paddingLeft = n.gutterTotalWidth + 'px')),
								(e.style.width = i + 'px')
						}
						t.coverGutter &&
							((e.style.zIndex = 5),
							(e.style.position = 'relative'),
							t.noHScroll || (e.style.marginLeft = -n.gutterTotalWidth + 'px'))
					}
					u(ya, 'positionLineWidget')
					function Xe(t) {
						if (t.height != null) return t.height
						var e = t.doc.cm
						if (!e) return 0
						if (!zt(document.body, t.node)) {
							var r = 'position: relative;'
							t.coverGutter && (r += 'margin-left: -' + e.display.gutters.offsetWidth + 'px;'),
								t.noHScroll && (r += 'width: ' + e.display.wrapper.clientWidth + 'px;'),
								gt(e.display.measure, k('div', [t.node], null, r))
						}
						return (t.height = t.node.parentNode.offsetHeight)
					}
					u(Xe, 'widgetHeight')
					function Ft(t, e) {
						for (var r = gr(e); r != t.wrapper; r = r.parentNode)
							if (
								!r ||
								(r.nodeType == 1 && r.getAttribute('cm-ignore-events') == 'true') ||
								(r.parentNode == t.sizer && r != t.mover)
							)
								return !0
					}
					u(Ft, 'eventInWidget')
					function Nn(t) {
						return t.lineSpace.offsetTop
					}
					u(Nn, 'paddingTop')
					function Ar(t) {
						return t.mover.offsetHeight - t.lineSpace.offsetHeight
					}
					u(Ar, 'paddingVert')
					function to(t) {
						if (t.cachedPaddingH) return t.cachedPaddingH
						var e = gt(t.measure, k('pre', 'x', 'CodeMirror-line-like')),
							r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
							n = { left: parseInt(r.paddingLeft), right: parseInt(r.paddingRight) }
						return !isNaN(n.left) && !isNaN(n.right) && (t.cachedPaddingH = n), n
					}
					u(to, 'paddingH')
					function Mt(t) {
						return Wl - t.display.nativeBarWidth
					}
					u(Mt, 'scrollGap')
					function ne(t) {
						return t.display.scroller.clientWidth - Mt(t) - t.display.barWidth
					}
					u(ne, 'displayWidth')
					function Wr(t) {
						return t.display.scroller.clientHeight - Mt(t) - t.display.barHeight
					}
					u(Wr, 'displayHeight')
					function ba(t, e, r) {
						var n = t.options.lineWrapping,
							i = n && ne(t)
						if (!e.measure.heights || (n && e.measure.width != i)) {
							var o = (e.measure.heights = [])
							if (n) {
								e.measure.width = i
								for (var l = e.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
									var s = l[a],
										c = l[a + 1]
									Math.abs(s.bottom - c.bottom) > 2 && o.push((s.bottom + c.top) / 2 - r.top)
								}
							}
							o.push(r.bottom - r.top)
						}
					}
					u(ba, 'ensureLineHeights')
					function eo(t, e, r) {
						if (t.line == e) return { map: t.measure.map, cache: t.measure.cache }
						if (t.rest) {
							for (var n = 0; n < t.rest.length; n++)
								if (t.rest[n] == e) return { map: t.measure.maps[n], cache: t.measure.caches[n] }
							for (var i = 0; i < t.rest.length; i++)
								if (F(t.rest[i]) > r)
									return { map: t.measure.maps[i], cache: t.measure.caches[i], before: !0 }
						}
					}
					u(eo, 'mapFromLineView')
					function wa(t, e) {
						e = Ct(e)
						var r = F(e),
							n = (t.display.externalMeasured = new qi(t.doc, e, r))
						n.lineN = r
						var i = (n.built = Xi(t, n))
						return (n.text = i.pre), gt(t.display.lineMeasure, i.pre), n
					}
					u(wa, 'updateExternalMeasurement')
					function no(t, e, r, n) {
						return Nt(t, ve(t, e), r, n)
					}
					u(no, 'measureChar')
					function Hr(t, e) {
						if (e >= t.display.viewFrom && e < t.display.viewTo) return t.display.view[ie(t, e)]
						var r = t.display.externalMeasured
						if (r && e >= r.lineN && e < r.lineN + r.size) return r
					}
					u(Hr, 'findViewForLine')
					function ve(t, e) {
						var r = F(e),
							n = Hr(t, r)
						n && !n.text
							? (n = null)
							: n && n.changes && (Yi(t, n, r, Rr(t)), (t.curOp.forceUpdate = !0)),
							n || (n = wa(t, e))
						var i = eo(n, e, r)
						return {
							line: e,
							view: n,
							rect: null,
							map: i.map,
							cache: i.cache,
							before: i.before,
							hasHeights: !1
						}
					}
					u(ve, 'prepareMeasureForLine')
					function Nt(t, e, r, n, i) {
						e.before && (r = -1)
						var o = r + (n || ''),
							l
						return (
							e.cache.hasOwnProperty(o)
								? (l = e.cache[o])
								: (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
								  e.hasHeights || (ba(t, e.view, e.rect), (e.hasHeights = !0)),
								  (l = Sa(t, e, r, n)),
								  l.bogus || (e.cache[o] = l)),
							{
								left: l.left,
								right: l.right,
								top: i ? l.rtop : l.top,
								bottom: i ? l.rbottom : l.bottom
							}
						)
					}
					u(Nt, 'measureCharPrepared')
					var xa = { left: 0, right: 0, top: 0, bottom: 0 }
					function ro(t, e, r) {
						for (var n, i, o, l, a, s, c = 0; c < t.length; c += 3)
							if (
								((a = t[c]),
								(s = t[c + 1]),
								e < a
									? ((i = 0), (o = 1), (l = 'left'))
									: e < s
									? ((i = e - a), (o = i + 1))
									: (c == t.length - 3 || (e == s && t[c + 3] > e)) &&
									  ((o = s - a), (i = o - 1), e >= s && (l = 'right')),
								i != null)
							) {
								if (
									((n = t[c + 2]),
									a == s && r == (n.insertLeft ? 'left' : 'right') && (l = r),
									r == 'left' && i == 0)
								)
									for (; c && t[c - 2] == t[c - 3] && t[c - 1].insertLeft; )
										(n = t[(c -= 3) + 2]), (l = 'left')
								if (r == 'right' && i == s - a)
									for (; c < t.length - 3 && t[c + 3] == t[c + 4] && !t[c + 5].insertLeft; )
										(n = t[(c += 3) + 2]), (l = 'right')
								break
							}
						return { node: n, start: i, end: o, collapse: l, coverStart: a, coverEnd: s }
					}
					u(ro, 'nodeAndOffsetInLineMap')
					function Ca(t, e) {
						var r = xa
						if (e == 'left') for (var n = 0; n < t.length && (r = t[n]).left == r.right; n++);
						else for (var i = t.length - 1; i >= 0 && (r = t[i]).left == r.right; i--);
						return r
					}
					u(Ca, 'getUsefulRect')
					function Sa(t, e, r, n) {
						var i = ro(e.map, r, n),
							o = i.node,
							l = i.start,
							a = i.end,
							s = i.collapse,
							c
						if (o.nodeType == 3) {
							for (var h = 0; h < 4; h++) {
								for (; l && dr(e.line.text.charAt(i.coverStart + l)); ) --l
								for (; i.coverStart + a < i.coverEnd && dr(e.line.text.charAt(i.coverStart + a)); )
									++a
								if (
									(A && I < 9 && l == 0 && a == i.coverEnd - i.coverStart
										? (c = o.parentNode.getBoundingClientRect())
										: (c = Ca(ge(o, l, a).getClientRects(), n)),
									c.left || c.right || l == 0)
								)
									break
								;(a = l), (l = l - 1), (s = 'right')
							}
							A && I < 11 && (c = La(t.display.measure, c))
						} else {
							l > 0 && (s = n = 'right')
							var d
							t.options.lineWrapping && (d = o.getClientRects()).length > 1
								? (c = d[n == 'right' ? d.length - 1 : 0])
								: (c = o.getBoundingClientRect())
						}
						if (A && I < 9 && !l && (!c || (!c.left && !c.right))) {
							var p = o.parentNode.getClientRects()[0]
							p
								? (c = {
										left: p.left,
										right: p.left + we(t.display),
										top: p.top,
										bottom: p.bottom
								  })
								: (c = xa)
						}
						for (
							var f = c.top - e.rect.top,
								g = c.bottom - e.rect.top,
								m = (f + g) / 2,
								y = e.view.measure.heights,
								b = 0;
							b < y.length - 1 && !(m < y[b]);
							b++
						);
						var x = b ? y[b - 1] : 0,
							w = y[b],
							C = {
								left: (s == 'right' ? c.right : c.left) - e.rect.left,
								right: (s == 'left' ? c.left : c.right) - e.rect.left,
								top: x,
								bottom: w
							}
						return (
							!c.left && !c.right && (C.bogus = !0),
							t.options.singleCursorHeightPerLine || ((C.rtop = f), (C.rbottom = g)),
							C
						)
					}
					u(Sa, 'measureCharInner')
					function La(t, e) {
						if (
							!window.screen ||
							screen.logicalXDPI == null ||
							screen.logicalXDPI == screen.deviceXDPI ||
							!Rl(t)
						)
							return e
						var r = screen.logicalXDPI / screen.deviceXDPI,
							n = screen.logicalYDPI / screen.deviceYDPI
						return { left: e.left * r, right: e.right * r, top: e.top * n, bottom: e.bottom * n }
					}
					u(La, 'maybeUpdateRectForZooming')
					function io(t) {
						if (t.measure && ((t.measure.cache = {}), (t.measure.heights = null), t.rest))
							for (var e = 0; e < t.rest.length; e++) t.measure.caches[e] = {}
					}
					u(io, 'clearLineMeasurementCacheFor')
					function oo(t) {
						;(t.display.externalMeasure = null), Rt(t.display.lineMeasure)
						for (var e = 0; e < t.display.view.length; e++) io(t.display.view[e])
					}
					u(oo, 'clearLineMeasurementCache')
					function _e(t) {
						oo(t),
							(t.display.cachedCharWidth =
								t.display.cachedTextHeight =
								t.display.cachedPaddingH =
									null),
							t.options.lineWrapping || (t.display.maxLineChanged = !0),
							(t.display.lineNumChars = null)
					}
					u(_e, 'clearCaches')
					function lo() {
						return nr && ir
							? -(
									document.body.getBoundingClientRect().left -
									parseInt(getComputedStyle(document.body).marginLeft)
							  )
							: window.pageXOffset || (document.documentElement || document.body).scrollLeft
					}
					u(lo, 'pageScrollX')
					function ao() {
						return nr && ir
							? -(
									document.body.getBoundingClientRect().top -
									parseInt(getComputedStyle(document.body).marginTop)
							  )
							: window.pageYOffset || (document.documentElement || document.body).scrollTop
					}
					u(ao, 'pageScrollY')
					function Fr(t) {
						var e = Ct(t),
							r = e.widgets,
							n = 0
						if (r) for (var i = 0; i < r.length; ++i) r[i].above && (n += Xe(r[i]))
						return n
					}
					u(Fr, 'widgetTopHeight')
					function On(t, e, r, n, i) {
						if (!i) {
							var o = Fr(e)
							;(r.top += o), (r.bottom += o)
						}
						if (n == 'line') return r
						n || (n = 'local')
						var l = Ht(e)
						if (
							(n == 'local' ? (l += Nn(t.display)) : (l -= t.display.viewOffset),
							n == 'page' || n == 'window')
						) {
							var a = t.display.lineSpace.getBoundingClientRect()
							l += a.top + (n == 'window' ? 0 : ao())
							var s = a.left + (n == 'window' ? 0 : lo())
							;(r.left += s), (r.right += s)
						}
						return (r.top += l), (r.bottom += l), r
					}
					u(On, 'intoCoordSystem')
					function so(t, e, r) {
						if (r == 'div') return e
						var n = e.left,
							i = e.top
						if (r == 'page') (n -= lo()), (i -= ao())
						else if (r == 'local' || !r) {
							var o = t.display.sizer.getBoundingClientRect()
							;(n += o.left), (i += o.top)
						}
						var l = t.display.lineSpace.getBoundingClientRect()
						return { left: n - l.left, top: i - l.top }
					}
					u(so, 'fromCoordSystem')
					function Dn(t, e, r, n, i) {
						return n || (n = S(t.doc, e.line)), On(t, n, no(t, n, e.ch, i), r)
					}
					u(Dn, 'charCoords')
					function St(t, e, r, n, i, o) {
						;(n = n || S(t.doc, e.line)), i || (i = ve(t, n))
						function l(g, m) {
							var y = Nt(t, i, g, m ? 'right' : 'left', o)
							return m ? (y.left = y.right) : (y.right = y.left), On(t, n, y, r)
						}
						u(l, 'get')
						var a = At(n, t.doc.direction),
							s = e.ch,
							c = e.sticky
						if (
							(s >= n.text.length
								? ((s = n.text.length), (c = 'before'))
								: s <= 0 && ((s = 0), (c = 'after')),
							!a)
						)
							return l(c == 'before' ? s - 1 : s, c == 'before')
						function h(g, m, y) {
							var b = a[m],
								x = b.level == 1
							return l(y ? g - 1 : g, x != y)
						}
						u(h, 'getBidi')
						var d = Ee(a, s, c),
							p = vn,
							f = h(s, d, c == 'before')
						return p != null && (f.other = h(s, p, c != 'before')), f
					}
					u(St, 'cursorCoords')
					function uo(t, e) {
						var r = 0
						;(e = O(t.doc, e)), t.options.lineWrapping || (r = we(t.display) * e.ch)
						var n = S(t.doc, e.line),
							i = Ht(n) + Nn(t.display)
						return { left: r, right: r, top: i, bottom: i + n.height }
					}
					u(uo, 'estimateCoords')
					function Pr(t, e, r, n, i) {
						var o = v(t, e, r)
						return (o.xRel = i), n && (o.outside = n), o
					}
					u(Pr, 'PosWithInfo')
					function Er(t, e, r) {
						var n = t.doc
						if (((r += t.display.viewOffset), r < 0)) return Pr(n.first, 0, null, -1, -1)
						var i = ee(n, r),
							o = n.first + n.size - 1
						if (i > o) return Pr(n.first + n.size - 1, S(n, o).text.length, null, 1, 1)
						e < 0 && (e = 0)
						for (var l = S(n, i); ; ) {
							var a = ka(t, l, i, e, r),
								s = ta(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0))
							if (!s) return a
							var c = s.find(1)
							if (c.line == i) return c
							l = S(n, (i = c.line))
						}
					}
					u(Er, 'coordsChar')
					function co(t, e, r, n) {
						n -= Fr(e)
						var i = e.text.length,
							o = Pe(
								function (l) {
									return Nt(t, r, l - 1).bottom <= n
								},
								i,
								0
							)
						return (
							(i = Pe(
								function (l) {
									return Nt(t, r, l).top > n
								},
								o,
								i
							)),
							{ begin: o, end: i }
						)
					}
					u(co, 'wrappedLineExtent')
					function ho(t, e, r, n) {
						r || (r = ve(t, e))
						var i = On(t, e, Nt(t, r, n), 'line').top
						return co(t, e, r, i)
					}
					u(ho, 'wrappedLineExtentChar')
					function Ir(t, e, r, n) {
						return t.bottom <= r ? !1 : t.top > r ? !0 : (n ? t.left : t.right) > e
					}
					u(Ir, 'boxIsAfter')
					function ka(t, e, r, n, i) {
						i -= Ht(e)
						var o = ve(t, e),
							l = Fr(e),
							a = 0,
							s = e.text.length,
							c = !0,
							h = At(e, t.doc.direction)
						if (h) {
							var d = (t.options.lineWrapping ? Ma : Ta)(t, e, r, o, h, n, i)
							;(c = d.level != 1), (a = c ? d.from : d.to - 1), (s = c ? d.to : d.from - 1)
						}
						var p = null,
							f = null,
							g = Pe(
								function (T) {
									var L = Nt(t, o, T)
									return (
										(L.top += l),
										(L.bottom += l),
										Ir(L, n, i, !1) ? (L.top <= i && L.left <= n && ((p = T), (f = L)), !0) : !1
									)
								},
								a,
								s
							),
							m,
							y,
							b = !1
						if (f) {
							var x = n - f.left < f.right - n,
								w = x == c
							;(g = p + (w ? 0 : 1)), (y = w ? 'after' : 'before'), (m = x ? f.left : f.right)
						} else {
							!c && (g == s || g == a) && g++,
								(y =
									g == 0
										? 'after'
										: g == e.text.length
										? 'before'
										: Nt(t, o, g - (c ? 1 : 0)).bottom + l <= i == c
										? 'after'
										: 'before')
							var C = St(t, v(r, g, y), 'line', e, o)
							;(m = C.left), (b = i < C.top ? -1 : i >= C.bottom ? 1 : 0)
						}
						return (g = wi(e.text, g, 1)), Pr(r, g, y, b, n - m)
					}
					u(ka, 'coordsCharInner')
					function Ta(t, e, r, n, i, o, l) {
						var a = Pe(
								function (d) {
									var p = i[d],
										f = p.level != 1
									return Ir(
										St(t, v(r, f ? p.to : p.from, f ? 'before' : 'after'), 'line', e, n),
										o,
										l,
										!0
									)
								},
								0,
								i.length - 1
							),
							s = i[a]
						if (a > 0) {
							var c = s.level != 1,
								h = St(t, v(r, c ? s.from : s.to, c ? 'after' : 'before'), 'line', e, n)
							Ir(h, o, l, !0) && h.top > l && (s = i[a - 1])
						}
						return s
					}
					u(Ta, 'coordsBidiPart')
					function Ma(t, e, r, n, i, o, l) {
						var a = co(t, e, n, l),
							s = a.begin,
							c = a.end
						;/\s/.test(e.text.charAt(c - 1)) && c--
						for (var h = null, d = null, p = 0; p < i.length; p++) {
							var f = i[p]
							if (!(f.from >= c || f.to <= s)) {
								var g = f.level != 1,
									m = Nt(t, n, g ? Math.min(c, f.to) - 1 : Math.max(s, f.from)).right,
									y = m < o ? o - m + 1e9 : m - o
								;(!h || d > y) && ((h = f), (d = y))
							}
						}
						return (
							h || (h = i[i.length - 1]),
							h.from < s && (h = { from: s, to: h.to, level: h.level }),
							h.to > c && (h = { from: h.from, to: c, level: h.level }),
							h
						)
					}
					u(Ma, 'coordsBidiPartWrapped')
					var ye
					function be(t) {
						if (t.cachedTextHeight != null) return t.cachedTextHeight
						if (ye == null) {
							ye = k('pre', null, 'CodeMirror-line-like')
							for (var e = 0; e < 49; ++e)
								ye.appendChild(document.createTextNode('x')), ye.appendChild(k('br'))
							ye.appendChild(document.createTextNode('x'))
						}
						gt(t.measure, ye)
						var r = ye.offsetHeight / 50
						return r > 3 && (t.cachedTextHeight = r), Rt(t.measure), r || 1
					}
					u(be, 'textHeight')
					function we(t) {
						if (t.cachedCharWidth != null) return t.cachedCharWidth
						var e = k('span', 'xxxxxxxxxx'),
							r = k('pre', [e], 'CodeMirror-line-like')
						gt(t.measure, r)
						var n = e.getBoundingClientRect(),
							i = (n.right - n.left) / 10
						return i > 2 && (t.cachedCharWidth = i), i || 10
					}
					u(we, 'charWidth')
					function Rr(t) {
						for (
							var e = t.display,
								r = {},
								n = {},
								i = e.gutters.clientLeft,
								o = e.gutters.firstChild,
								l = 0;
							o;
							o = o.nextSibling, ++l
						) {
							var a = t.display.gutterSpecs[l].className
							;(r[a] = o.offsetLeft + o.clientLeft + i), (n[a] = o.clientWidth)
						}
						return {
							fixedPos: zr(e),
							gutterTotalWidth: e.gutters.offsetWidth,
							gutterLeft: r,
							gutterWidth: n,
							wrapperWidth: e.wrapper.clientWidth
						}
					}
					u(Rr, 'getDimensions')
					function zr(t) {
						return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left
					}
					u(zr, 'compensateForHScroll')
					function fo(t) {
						var e = be(t.display),
							r = t.options.lineWrapping,
							n = r && Math.max(5, t.display.scroller.clientWidth / we(t.display) - 3)
						return function (i) {
							if (Ut(t.doc, i)) return 0
							var o = 0
							if (i.widgets)
								for (var l = 0; l < i.widgets.length; l++)
									i.widgets[l].height && (o += i.widgets[l].height)
							return r ? o + (Math.ceil(i.text.length / n) || 1) * e : o + e
						}
					}
					u(fo, 'estimateHeight')
					function Br(t) {
						var e = t.doc,
							r = fo(t)
						e.iter(function (n) {
							var i = r(n)
							i != n.height && Tt(n, i)
						})
					}
					u(Br, 'estimateLineHeights')
					function re(t, e, r, n) {
						var i = t.display
						if (!r && gr(e).getAttribute('cm-not-content') == 'true') return null
						var o,
							l,
							a = i.lineSpace.getBoundingClientRect()
						try {
							;(o = e.clientX - a.left), (l = e.clientY - a.top)
						} catch {
							return null
						}
						var s = Er(t, o, l),
							c
						if (n && s.xRel > 0 && (c = S(t.doc, s.line).text).length == s.ch) {
							var h = yt(c, c.length, t.options.tabSize) - c.length
							s = v(s.line, Math.max(0, Math.round((o - to(t.display).left) / we(t.display)) - h))
						}
						return s
					}
					u(re, 'posFromMouse')
					function ie(t, e) {
						if (e >= t.display.viewTo || ((e -= t.display.viewFrom), e < 0)) return null
						for (var r = t.display.view, n = 0; n < r.length; n++)
							if (((e -= r[n].size), e < 0)) return n
					}
					u(ie, 'findViewIndex')
					function at(t, e, r, n) {
						e == null && (e = t.doc.first),
							r == null && (r = t.doc.first + t.doc.size),
							n || (n = 0)
						var i = t.display
						if (
							(n &&
								r < i.viewTo &&
								(i.updateLineNumbers == null || i.updateLineNumbers > e) &&
								(i.updateLineNumbers = e),
							(t.curOp.viewChanged = !0),
							e >= i.viewTo)
						)
							Bt && Mr(t.doc, e) < i.viewTo && Kt(t)
						else if (r <= i.viewFrom)
							Bt && Vi(t.doc, r + n) > i.viewFrom ? Kt(t) : ((i.viewFrom += n), (i.viewTo += n))
						else if (e <= i.viewFrom && r >= i.viewTo) Kt(t)
						else if (e <= i.viewFrom) {
							var o = An(t, r, r + n, 1)
							o
								? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += n))
								: Kt(t)
						} else if (r >= i.viewTo) {
							var l = An(t, e, e, -1)
							l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : Kt(t)
						} else {
							var a = An(t, e, e, -1),
								s = An(t, r, r + n, 1)
							a && s
								? ((i.view = i.view
										.slice(0, a.index)
										.concat(Tn(t, a.lineN, s.lineN))
										.concat(i.view.slice(s.index))),
								  (i.viewTo += n))
								: Kt(t)
						}
						var c = i.externalMeasured
						c &&
							(r < c.lineN ? (c.lineN += n) : e < c.lineN + c.size && (i.externalMeasured = null))
					}
					u(at, 'regChange')
					function Gt(t, e, r) {
						t.curOp.viewChanged = !0
						var n = t.display,
							i = t.display.externalMeasured
						if (
							(i && e >= i.lineN && e < i.lineN + i.size && (n.externalMeasured = null),
							!(e < n.viewFrom || e >= n.viewTo))
						) {
							var o = n.view[ie(t, e)]
							if (o.node != null) {
								var l = o.changes || (o.changes = [])
								J(l, r) == -1 && l.push(r)
							}
						}
					}
					u(Gt, 'regLineChange')
					function Kt(t) {
						;(t.display.viewFrom = t.display.viewTo = t.doc.first),
							(t.display.view = []),
							(t.display.viewOffset = 0)
					}
					u(Kt, 'resetView')
					function An(t, e, r, n) {
						var i = ie(t, e),
							o,
							l = t.display.view
						if (!Bt || r == t.doc.first + t.doc.size) return { index: i, lineN: r }
						for (var a = t.display.viewFrom, s = 0; s < i; s++) a += l[s].size
						if (a != e) {
							if (n > 0) {
								if (i == l.length - 1) return null
								;(o = a + l[i].size - e), i++
							} else o = a - e
							;(e += o), (r += o)
						}
						for (; Mr(t.doc, r) != r; ) {
							if (i == (n < 0 ? 0 : l.length - 1)) return null
							;(r += n * l[i - (n < 0 ? 1 : 0)].size), (i += n)
						}
						return { index: i, lineN: r }
					}
					u(An, 'viewCuttingPoint')
					function Na(t, e, r) {
						var n = t.display,
							i = n.view
						i.length == 0 || e >= n.viewTo || r <= n.viewFrom
							? ((n.view = Tn(t, e, r)), (n.viewFrom = e))
							: (n.viewFrom > e
									? (n.view = Tn(t, e, n.viewFrom).concat(n.view))
									: n.viewFrom < e && (n.view = n.view.slice(ie(t, e))),
							  (n.viewFrom = e),
							  n.viewTo < r
									? (n.view = n.view.concat(Tn(t, n.viewTo, r)))
									: n.viewTo > r && (n.view = n.view.slice(0, ie(t, r)))),
							(n.viewTo = r)
					}
					u(Na, 'adjustView')
					function po(t) {
						for (var e = t.display.view, r = 0, n = 0; n < e.length; n++) {
							var i = e[n]
							!i.hidden && (!i.node || i.changes) && ++r
						}
						return r
					}
					u(po, 'countDirtyView')
					function qe(t) {
						t.display.input.showSelection(t.display.input.prepareSelection())
					}
					u(qe, 'updateSelection')
					function go(t, e) {
						e === void 0 && (e = !0)
						var r = t.doc,
							n = {},
							i = (n.cursors = document.createDocumentFragment()),
							o = (n.selection = document.createDocumentFragment()),
							l = t.options.$customCursor
						l && (e = !0)
						for (var a = 0; a < r.sel.ranges.length; a++)
							if (!(!e && a == r.sel.primIndex)) {
								var s = r.sel.ranges[a]
								if (!(s.from().line >= t.display.viewTo || s.to().line < t.display.viewFrom)) {
									var c = s.empty()
									if (l) {
										var h = l(t, s)
										h && Ur(t, h, i)
									} else (c || t.options.showCursorWhenSelecting) && Ur(t, s.head, i)
									c || Oa(t, s, o)
								}
							}
						return n
					}
					u(go, 'prepareSelection')
					function Ur(t, e, r) {
						var n = St(t, e, 'div', null, null, !t.options.singleCursorHeightPerLine),
							i = r.appendChild(k('div', ' ', 'CodeMirror-cursor'))
						if (
							((i.style.left = n.left + 'px'),
							(i.style.top = n.top + 'px'),
							(i.style.height = Math.max(0, n.bottom - n.top) * t.options.cursorHeight + 'px'),
							/\bcm-fat-cursor\b/.test(t.getWrapperElement().className))
						) {
							var o = Dn(t, e, 'div', null, null),
								l = o.right - o.left
							i.style.width = (l > 0 ? l : t.defaultCharWidth()) + 'px'
						}
						if (n.other) {
							var a = r.appendChild(k('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor'))
							;(a.style.display = ''),
								(a.style.left = n.other.left + 'px'),
								(a.style.top = n.other.top + 'px'),
								(a.style.height = (n.other.bottom - n.other.top) * 0.85 + 'px')
						}
					}
					u(Ur, 'drawSelectionCursor')
					function Wn(t, e) {
						return t.top - e.top || t.left - e.left
					}
					u(Wn, 'cmpCoords')
					function Oa(t, e, r) {
						var n = t.display,
							i = t.doc,
							o = document.createDocumentFragment(),
							l = to(t.display),
							a = l.left,
							s = Math.max(n.sizerWidth, ne(t) - n.sizer.offsetLeft) - l.right,
							c = i.direction == 'ltr'
						function h(w, C, T, L) {
							C < 0 && (C = 0),
								(C = Math.round(C)),
								(L = Math.round(L)),
								o.appendChild(
									k(
										'div',
										null,
										'CodeMirror-selected',
										'position: absolute; left: ' +
											w +
											`px;
                             top: ` +
											C +
											'px; width: ' +
											(T ?? s - w) +
											`px;
                             height: ` +
											(L - C) +
											'px'
									)
								)
						}
						u(h, 'add')
						function d(w, C, T) {
							var L = S(i, w),
								D = L.text.length,
								E,
								$
							function z(V, ft) {
								return Dn(t, v(w, V), 'div', L, ft)
							}
							u(z, 'coords')
							function ht(V, ft, et) {
								var Z = ho(t, L, null, V),
									j = (ft == 'ltr') == (et == 'after') ? 'left' : 'right',
									B =
										et == 'after' ? Z.begin : Z.end - (/\s/.test(L.text.charAt(Z.end - 1)) ? 2 : 1)
								return z(B, j)[j]
							}
							u(ht, 'wrapX')
							var dt = At(L, i.direction)
							return (
								Fl(dt, C || 0, T ?? D, function (V, ft, et, Z) {
									var j = et == 'ltr',
										B = z(V, j ? 'left' : 'right'),
										pt = z(ft - 1, j ? 'right' : 'left'),
										un = C == null && V == 0,
										ce = T == null && ft == D,
										rt = Z == 0,
										Pt = !dt || Z == dt.length - 1
									if (pt.top - B.top <= 3) {
										var Q = (c ? un : ce) && rt,
											Tl = (c ? ce : un) && Pt,
											Yt = Q ? a : (j ? B : pt).left,
											He = Tl ? s : (j ? pt : B).right
										h(Yt, B.top, He - Yt, B.bottom)
									} else {
										var Fe, st, cn, Ml
										j
											? ((Fe = c && un && rt ? a : B.left),
											  (st = c ? s : ht(V, et, 'before')),
											  (cn = c ? a : ht(ft, et, 'after')),
											  (Ml = c && ce && Pt ? s : pt.right))
											: ((Fe = c ? ht(V, et, 'before') : a),
											  (st = !c && un && rt ? s : B.right),
											  (cn = !c && ce && Pt ? a : pt.left),
											  (Ml = c ? ht(ft, et, 'after') : s)),
											h(Fe, B.top, st - Fe, B.bottom),
											B.bottom < pt.top && h(a, B.bottom, null, pt.top),
											h(cn, pt.top, Ml - cn, pt.bottom)
									}
									;(!E || Wn(B, E) < 0) && (E = B),
										Wn(pt, E) < 0 && (E = pt),
										(!$ || Wn(B, $) < 0) && ($ = B),
										Wn(pt, $) < 0 && ($ = pt)
								}),
								{ start: E, end: $ }
							)
						}
						u(d, 'drawForLine')
						var p = e.from(),
							f = e.to()
						if (p.line == f.line) d(p.line, p.ch, f.ch)
						else {
							var g = S(i, p.line),
								m = S(i, f.line),
								y = Ct(g) == Ct(m),
								b = d(p.line, p.ch, y ? g.text.length + 1 : null).end,
								x = d(f.line, y ? 0 : null, f.ch).start
							y &&
								(b.top < x.top - 2
									? (h(b.right, b.top, null, b.bottom), h(a, x.top, x.left, x.bottom))
									: h(b.right, b.top, x.left - b.right, b.bottom)),
								b.bottom < x.top && h(a, b.bottom, null, x.top)
						}
						r.appendChild(o)
					}
					u(Oa, 'drawSelectionRange')
					function Gr(t) {
						if (t.state.focused) {
							var e = t.display
							clearInterval(e.blinker)
							var r = !0
							;(e.cursorDiv.style.visibility = ''),
								t.options.cursorBlinkRate > 0
									? (e.blinker = setInterval(function () {
											t.hasFocus() || xe(t),
												(e.cursorDiv.style.visibility = (r = !r) ? '' : 'hidden')
									  }, t.options.cursorBlinkRate))
									: t.options.cursorBlinkRate < 0 && (e.cursorDiv.style.visibility = 'hidden')
						}
					}
					u(Gr, 'restartBlink')
					function mo(t) {
						t.hasFocus() || (t.display.input.focus(), t.state.focused || Vr(t))
					}
					u(mo, 'ensureFocus')
					function Kr(t) {
						;(t.state.delayingBlurEvent = !0),
							setTimeout(function () {
								t.state.delayingBlurEvent &&
									((t.state.delayingBlurEvent = !1), t.state.focused && xe(t))
							}, 100)
					}
					u(Kr, 'delayBlurEvent')
					function Vr(t, e) {
						t.state.delayingBlurEvent && !t.state.draggingText && (t.state.delayingBlurEvent = !1),
							t.options.readOnly != 'nocursor' &&
								(t.state.focused ||
									(U(t, 'focus', t, e),
									(t.state.focused = !0),
									Zt(t.display.wrapper, 'CodeMirror-focused'),
									!t.curOp &&
										t.display.selForContextMenu != t.doc.sel &&
										(t.display.input.reset(),
										ot &&
											setTimeout(function () {
												return t.display.input.reset(!0)
											}, 20)),
									t.display.input.receivedFocus()),
								Gr(t))
					}
					u(Vr, 'onFocus')
					function xe(t, e) {
						t.state.delayingBlurEvent ||
							(t.state.focused &&
								(U(t, 'blur', t, e),
								(t.state.focused = !1),
								fe(t.display.wrapper, 'CodeMirror-focused')),
							clearInterval(t.display.blinker),
							setTimeout(function () {
								t.state.focused || (t.display.shift = !1)
							}, 150))
					}
					u(xe, 'onBlur')
					function Hn(t) {
						for (
							var e = t.display,
								r = e.lineDiv.offsetTop,
								n = Math.max(0, e.scroller.getBoundingClientRect().top),
								i = e.lineDiv.getBoundingClientRect().top,
								o = 0,
								l = 0;
							l < e.view.length;
							l++
						) {
							var a = e.view[l],
								s = t.options.lineWrapping,
								c = void 0,
								h = 0
							if (!a.hidden) {
								if (((i += a.line.height), A && I < 8)) {
									var d = a.node.offsetTop + a.node.offsetHeight
									;(c = d - r), (r = d)
								} else {
									var p = a.node.getBoundingClientRect()
									;(c = p.bottom - p.top),
										!s &&
											a.text.firstChild &&
											(h = a.text.firstChild.getBoundingClientRect().right - p.left - 1)
								}
								var f = a.line.height - c
								if (
									(f > 0.005 || f < -0.005) &&
									(i < n && (o -= f), Tt(a.line, c), vo(a.line), a.rest)
								)
									for (var g = 0; g < a.rest.length; g++) vo(a.rest[g])
								if (h > t.display.sizerWidth) {
									var m = Math.ceil(h / we(t.display))
									m > t.display.maxLineLength &&
										((t.display.maxLineLength = m),
										(t.display.maxLine = a.line),
										(t.display.maxLineChanged = !0))
								}
							}
						}
						Math.abs(o) > 2 && (e.scroller.scrollTop += o)
					}
					u(Hn, 'updateHeightsInViewport')
					function vo(t) {
						if (t.widgets)
							for (var e = 0; e < t.widgets.length; ++e) {
								var r = t.widgets[e],
									n = r.node.parentNode
								n && (r.height = n.offsetHeight)
							}
					}
					u(vo, 'updateWidgetHeight')
					function Fn(t, e, r) {
						var n = r && r.top != null ? Math.max(0, r.top) : t.scroller.scrollTop
						n = Math.floor(n - Nn(t))
						var i = r && r.bottom != null ? r.bottom : n + t.wrapper.clientHeight,
							o = ee(e, n),
							l = ee(e, i)
						if (r && r.ensure) {
							var a = r.ensure.from.line,
								s = r.ensure.to.line
							a < o
								? ((o = a), (l = ee(e, Ht(S(e, a)) + t.wrapper.clientHeight)))
								: Math.min(s, e.lastLine()) >= l &&
								  ((o = ee(e, Ht(S(e, s)) - t.wrapper.clientHeight)), (l = s))
						}
						return { from: o, to: Math.max(l, o + 1) }
					}
					u(Fn, 'visibleLines')
					function Da(t, e) {
						if (!X(t, 'scrollCursorIntoView')) {
							var r = t.display,
								n = r.sizer.getBoundingClientRect(),
								i = null
							if (
								(e.top + n.top < 0
									? (i = !0)
									: e.bottom + n.top >
											(window.innerHeight || document.documentElement.clientHeight) && (i = !1),
								i != null && !Xs)
							) {
								var o = k(
									'div',
									'​',
									null,
									`position: absolute;
                         top: ` +
										(e.top - r.viewOffset - Nn(t.display)) +
										`px;
                         height: ` +
										(e.bottom - e.top + Mt(t) + r.barHeight) +
										`px;
                         left: ` +
										e.left +
										'px; width: ' +
										Math.max(2, e.right - e.left) +
										'px;'
								)
								t.display.lineSpace.appendChild(o),
									o.scrollIntoView(i),
									t.display.lineSpace.removeChild(o)
							}
						}
					}
					u(Da, 'maybeScrollWindow')
					function Aa(t, e, r, n) {
						n == null && (n = 0)
						var i
						!t.options.lineWrapping &&
							e == r &&
							((r = e.sticky == 'before' ? v(e.line, e.ch + 1, 'before') : e),
							(e = e.ch ? v(e.line, e.sticky == 'before' ? e.ch - 1 : e.ch, 'after') : e))
						for (var o = 0; o < 5; o++) {
							var l = !1,
								a = St(t, e),
								s = !r || r == e ? a : St(t, r)
							i = {
								left: Math.min(a.left, s.left),
								top: Math.min(a.top, s.top) - n,
								right: Math.max(a.left, s.left),
								bottom: Math.max(a.bottom, s.bottom) + n
							}
							var c = jr(t, i),
								h = t.doc.scrollTop,
								d = t.doc.scrollLeft
							if (
								(c.scrollTop != null &&
									(Ze(t, c.scrollTop), Math.abs(t.doc.scrollTop - h) > 1 && (l = !0)),
								c.scrollLeft != null &&
									(oe(t, c.scrollLeft), Math.abs(t.doc.scrollLeft - d) > 1 && (l = !0)),
								!l)
							)
								break
						}
						return i
					}
					u(Aa, 'scrollPosIntoView')
					function Wa(t, e) {
						var r = jr(t, e)
						r.scrollTop != null && Ze(t, r.scrollTop), r.scrollLeft != null && oe(t, r.scrollLeft)
					}
					u(Wa, 'scrollIntoView')
					function jr(t, e) {
						var r = t.display,
							n = be(t.display)
						e.top < 0 && (e.top = 0)
						var i = t.curOp && t.curOp.scrollTop != null ? t.curOp.scrollTop : r.scroller.scrollTop,
							o = Wr(t),
							l = {}
						e.bottom - e.top > o && (e.bottom = e.top + o)
						var a = t.doc.height + Ar(r),
							s = e.top < n,
							c = e.bottom > a - n
						if (e.top < i) l.scrollTop = s ? 0 : e.top
						else if (e.bottom > i + o) {
							var h = Math.min(e.top, (c ? a : e.bottom) - o)
							h != i && (l.scrollTop = h)
						}
						var d = t.options.fixedGutter ? 0 : r.gutters.offsetWidth,
							p =
								t.curOp && t.curOp.scrollLeft != null
									? t.curOp.scrollLeft
									: r.scroller.scrollLeft - d,
							f = ne(t) - r.gutters.offsetWidth,
							g = e.right - e.left > f
						return (
							g && (e.right = e.left + f),
							e.left < 10
								? (l.scrollLeft = 0)
								: e.left < p
								? (l.scrollLeft = Math.max(0, e.left + d - (g ? 0 : 10)))
								: e.right > f + p - 3 && (l.scrollLeft = e.right + (g ? 0 : 10) - f),
							l
						)
					}
					u(jr, 'calculateScrollPos')
					function Xr(t, e) {
						e != null &&
							(Pn(t),
							(t.curOp.scrollTop =
								(t.curOp.scrollTop == null ? t.doc.scrollTop : t.curOp.scrollTop) + e))
					}
					u(Xr, 'addToScrollTop')
					function Ce(t) {
						Pn(t)
						var e = t.getCursor()
						t.curOp.scrollToPos = { from: e, to: e, margin: t.options.cursorScrollMargin }
					}
					u(Ce, 'ensureCursorVisible')
					function Ye(t, e, r) {
						;(e != null || r != null) && Pn(t),
							e != null && (t.curOp.scrollLeft = e),
							r != null && (t.curOp.scrollTop = r)
					}
					u(Ye, 'scrollToCoords')
					function Ha(t, e) {
						Pn(t), (t.curOp.scrollToPos = e)
					}
					u(Ha, 'scrollToRange')
					function Pn(t) {
						var e = t.curOp.scrollToPos
						if (e) {
							t.curOp.scrollToPos = null
							var r = uo(t, e.from),
								n = uo(t, e.to)
							yo(t, r, n, e.margin)
						}
					}
					u(Pn, 'resolveScrollToPos')
					function yo(t, e, r, n) {
						var i = jr(t, {
							left: Math.min(e.left, r.left),
							top: Math.min(e.top, r.top) - n,
							right: Math.max(e.right, r.right),
							bottom: Math.max(e.bottom, r.bottom) + n
						})
						Ye(t, i.scrollLeft, i.scrollTop)
					}
					u(yo, 'scrollToCoordsRange')
					function Ze(t, e) {
						Math.abs(t.doc.scrollTop - e) < 2 ||
							(It || Yr(t, { top: e }), bo(t, e, !0), It && Yr(t), Qe(t, 100))
					}
					u(Ze, 'updateScrollTop')
					function bo(t, e, r) {
						;(e = Math.max(
							0,
							Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, e)
						)),
							!(t.display.scroller.scrollTop == e && !r) &&
								((t.doc.scrollTop = e),
								t.display.scrollbars.setScrollTop(e),
								t.display.scroller.scrollTop != e && (t.display.scroller.scrollTop = e))
					}
					u(bo, 'setScrollTop')
					function oe(t, e, r, n) {
						;(e = Math.max(
							0,
							Math.min(e, t.display.scroller.scrollWidth - t.display.scroller.clientWidth)
						)),
							!((r ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) && !n) &&
								((t.doc.scrollLeft = e),
								So(t),
								t.display.scroller.scrollLeft != e && (t.display.scroller.scrollLeft = e),
								t.display.scrollbars.setScrollLeft(e))
					}
					u(oe, 'setScrollLeft')
					function $e(t) {
						var e = t.display,
							r = e.gutters.offsetWidth,
							n = Math.round(t.doc.height + Ar(t.display))
						return {
							clientHeight: e.scroller.clientHeight,
							viewHeight: e.wrapper.clientHeight,
							scrollWidth: e.scroller.scrollWidth,
							clientWidth: e.scroller.clientWidth,
							viewWidth: e.wrapper.clientWidth,
							barLeft: t.options.fixedGutter ? r : 0,
							docHeight: n,
							scrollHeight: n + Mt(t) + e.barHeight,
							nativeBarWidth: e.nativeBarWidth,
							gutterWidth: r
						}
					}
					u($e, 'measureForScrollbars')
					var Se = u(function (t, e, r) {
						this.cm = r
						var n = (this.vert = k(
								'div',
								[k('div', null, null, 'min-width: 1px')],
								'CodeMirror-vscrollbar'
							)),
							i = (this.horiz = k(
								'div',
								[k('div', null, null, 'height: 100%; min-height: 1px')],
								'CodeMirror-hscrollbar'
							))
						;(n.tabIndex = i.tabIndex = -1),
							t(n),
							t(i),
							M(n, 'scroll', function () {
								n.clientHeight && e(n.scrollTop, 'vertical')
							}),
							M(i, 'scroll', function () {
								i.clientWidth && e(i.scrollLeft, 'horizontal')
							}),
							(this.checkedZeroWidth = !1),
							A && I < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = '18px')
					}, 'NativeScrollbars')
					;(Se.prototype.update = function (t) {
						var e = t.scrollWidth > t.clientWidth + 1,
							r = t.scrollHeight > t.clientHeight + 1,
							n = t.nativeBarWidth
						if (r) {
							;(this.vert.style.display = 'block'), (this.vert.style.bottom = e ? n + 'px' : '0')
							var i = t.viewHeight - (e ? n : 0)
							this.vert.firstChild.style.height =
								Math.max(0, t.scrollHeight - t.clientHeight + i) + 'px'
						} else
							(this.vert.scrollTop = 0),
								(this.vert.style.display = ''),
								(this.vert.firstChild.style.height = '0')
						if (e) {
							;(this.horiz.style.display = 'block'),
								(this.horiz.style.right = r ? n + 'px' : '0'),
								(this.horiz.style.left = t.barLeft + 'px')
							var o = t.viewWidth - t.barLeft - (r ? n : 0)
							this.horiz.firstChild.style.width =
								Math.max(0, t.scrollWidth - t.clientWidth + o) + 'px'
						} else (this.horiz.style.display = ''), (this.horiz.firstChild.style.width = '0')
						return (
							!this.checkedZeroWidth &&
								t.clientHeight > 0 &&
								(n == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
							{ right: r ? n : 0, bottom: e ? n : 0 }
						)
					}),
						(Se.prototype.setScrollLeft = function (t) {
							this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
								this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz')
						}),
						(Se.prototype.setScrollTop = function (t) {
							this.vert.scrollTop != t && (this.vert.scrollTop = t),
								this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, 'vert')
						}),
						(Se.prototype.zeroWidthHack = function () {
							var t = xt && !js ? '12px' : '18px'
							;(this.horiz.style.height = this.vert.style.width = t),
								(this.horiz.style.pointerEvents = this.vert.style.pointerEvents = 'none'),
								(this.disableHoriz = new Qt()),
								(this.disableVert = new Qt())
						}),
						(Se.prototype.enableZeroWidthBar = function (t, e, r) {
							t.style.pointerEvents = 'auto'
							function n() {
								var i = t.getBoundingClientRect(),
									o =
										r == 'vert'
											? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
											: document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)
								o != t ? (t.style.pointerEvents = 'none') : e.set(1e3, n)
							}
							u(n, 'maybeDisable'), e.set(1e3, n)
						}),
						(Se.prototype.clear = function () {
							var t = this.horiz.parentNode
							t.removeChild(this.horiz), t.removeChild(this.vert)
						})
					var En = u(function () {}, 'NullScrollbars')
					;(En.prototype.update = function () {
						return { bottom: 0, right: 0 }
					}),
						(En.prototype.setScrollLeft = function () {}),
						(En.prototype.setScrollTop = function () {}),
						(En.prototype.clear = function () {})
					function Le(t, e) {
						e || (e = $e(t))
						var r = t.display.barWidth,
							n = t.display.barHeight
						wo(t, e)
						for (var i = 0; (i < 4 && r != t.display.barWidth) || n != t.display.barHeight; i++)
							r != t.display.barWidth && t.options.lineWrapping && Hn(t),
								wo(t, $e(t)),
								(r = t.display.barWidth),
								(n = t.display.barHeight)
					}
					u(Le, 'updateScrollbars')
					function wo(t, e) {
						var r = t.display,
							n = r.scrollbars.update(e)
						;(r.sizer.style.paddingRight = (r.barWidth = n.right) + 'px'),
							(r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + 'px'),
							(r.heightForcer.style.borderBottom = n.bottom + 'px solid transparent'),
							n.right && n.bottom
								? ((r.scrollbarFiller.style.display = 'block'),
								  (r.scrollbarFiller.style.height = n.bottom + 'px'),
								  (r.scrollbarFiller.style.width = n.right + 'px'))
								: (r.scrollbarFiller.style.display = ''),
							n.bottom && t.options.coverGutterNextToScrollbar && t.options.fixedGutter
								? ((r.gutterFiller.style.display = 'block'),
								  (r.gutterFiller.style.height = n.bottom + 'px'),
								  (r.gutterFiller.style.width = e.gutterWidth + 'px'))
								: (r.gutterFiller.style.display = '')
					}
					u(wo, 'updateScrollbarsInner')
					var Fa = { native: Se, null: En }
					function xo(t) {
						t.display.scrollbars &&
							(t.display.scrollbars.clear(),
							t.display.scrollbars.addClass &&
								fe(t.display.wrapper, t.display.scrollbars.addClass)),
							(t.display.scrollbars = new Fa[t.options.scrollbarStyle](
								function (e) {
									t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
										M(e, 'mousedown', function () {
											t.state.focused &&
												setTimeout(function () {
													return t.display.input.focus()
												}, 0)
										}),
										e.setAttribute('cm-not-content', 'true')
								},
								function (e, r) {
									r == 'horizontal' ? oe(t, e) : Ze(t, e)
								},
								t
							)),
							t.display.scrollbars.addClass && Zt(t.display.wrapper, t.display.scrollbars.addClass)
					}
					u(xo, 'initScrollbars')
					var ru = 0
					function le(t) {
						;(t.curOp = {
							cm: t,
							viewChanged: !1,
							startHeight: t.doc.height,
							forceUpdate: !1,
							updateInput: 0,
							typing: !1,
							changeObjs: null,
							cursorActivityHandlers: null,
							cursorActivityCalled: 0,
							selectionChanged: !1,
							updateMaxLine: !1,
							scrollLeft: null,
							scrollTop: null,
							scrollToPos: null,
							focus: !1,
							id: ++ru,
							markArrays: null
						}),
							ca(t.curOp)
					}
					u(le, 'startOperation')
					function ae(t) {
						var e = t.curOp
						e &&
							da(e, function (r) {
								for (var n = 0; n < r.ops.length; n++) r.ops[n].cm.curOp = null
								Pa(r)
							})
					}
					u(ae, 'endOperation')
					function Pa(t) {
						for (var e = t.ops, r = 0; r < e.length; r++) Ea(e[r])
						for (var n = 0; n < e.length; n++) Ia(e[n])
						for (var i = 0; i < e.length; i++) Ra(e[i])
						for (var o = 0; o < e.length; o++) za(e[o])
						for (var l = 0; l < e.length; l++) Ba(e[l])
					}
					u(Pa, 'endOperations')
					function Ea(t) {
						var e = t.cm,
							r = e.display
						Ga(e),
							t.updateMaxLine && Or(e),
							(t.mustUpdate =
								t.viewChanged ||
								t.forceUpdate ||
								t.scrollTop != null ||
								(t.scrollToPos &&
									(t.scrollToPos.from.line < r.viewFrom || t.scrollToPos.to.line >= r.viewTo)) ||
								(r.maxLineChanged && e.options.lineWrapping)),
							(t.update =
								t.mustUpdate &&
								new _r(
									e,
									t.mustUpdate && { top: t.scrollTop, ensure: t.scrollToPos },
									t.forceUpdate
								))
					}
					u(Ea, 'endOperation_R1')
					function Ia(t) {
						t.updatedDisplay = t.mustUpdate && qr(t.cm, t.update)
					}
					u(Ia, 'endOperation_W1')
					function Ra(t) {
						var e = t.cm,
							r = e.display
						t.updatedDisplay && Hn(e),
							(t.barMeasure = $e(e)),
							r.maxLineChanged &&
								!e.options.lineWrapping &&
								((t.adjustWidthTo = no(e, r.maxLine, r.maxLine.text.length).left + 3),
								(e.display.sizerWidth = t.adjustWidthTo),
								(t.barMeasure.scrollWidth = Math.max(
									r.scroller.clientWidth,
									r.sizer.offsetLeft + t.adjustWidthTo + Mt(e) + e.display.barWidth
								)),
								(t.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + t.adjustWidthTo - ne(e)))),
							(t.updatedDisplay || t.selectionChanged) &&
								(t.preparedSelection = r.input.prepareSelection())
					}
					u(Ra, 'endOperation_R2')
					function za(t) {
						var e = t.cm
						t.adjustWidthTo != null &&
							((e.display.sizer.style.minWidth = t.adjustWidthTo + 'px'),
							t.maxScrollLeft < e.doc.scrollLeft &&
								oe(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0),
							(e.display.maxLineChanged = !1))
						var r = t.focus && t.focus == vt()
						t.preparedSelection && e.display.input.showSelection(t.preparedSelection, r),
							(t.updatedDisplay || t.startHeight != e.doc.height) && Le(e, t.barMeasure),
							t.updatedDisplay && $r(e, t.barMeasure),
							t.selectionChanged && Gr(e),
							e.state.focused && t.updateInput && e.display.input.reset(t.typing),
							r && mo(t.cm)
					}
					u(za, 'endOperation_W2')
					function Ba(t) {
						var e = t.cm,
							r = e.display,
							n = e.doc
						if (
							(t.updatedDisplay && Co(e, t.update),
							r.wheelStartX != null &&
								(t.scrollTop != null || t.scrollLeft != null || t.scrollToPos) &&
								(r.wheelStartX = r.wheelStartY = null),
							t.scrollTop != null && bo(e, t.scrollTop, t.forceScroll),
							t.scrollLeft != null && oe(e, t.scrollLeft, !0, !0),
							t.scrollToPos)
						) {
							var i = Aa(e, O(n, t.scrollToPos.from), O(n, t.scrollToPos.to), t.scrollToPos.margin)
							Da(e, i)
						}
						var o = t.maybeHiddenMarkers,
							l = t.maybeUnhiddenMarkers
						if (o) for (var a = 0; a < o.length; ++a) o[a].lines.length || U(o[a], 'hide')
						if (l) for (var s = 0; s < l.length; ++s) l[s].lines.length && U(l[s], 'unhide')
						r.wrapper.offsetHeight && (n.scrollTop = e.display.scroller.scrollTop),
							t.changeObjs && U(e, 'changes', e, t.changeObjs),
							t.update && t.update.finish()
					}
					u(Ba, 'endOperation_finish')
					function ut(t, e) {
						if (t.curOp) return e()
						le(t)
						try {
							return e()
						} finally {
							ae(t)
						}
					}
					u(ut, 'runInOp')
					function q(t, e) {
						return function () {
							if (t.curOp) return e.apply(t, arguments)
							le(t)
							try {
								return e.apply(t, arguments)
							} finally {
								ae(t)
							}
						}
					}
					u(q, 'operation')
					function nt(t) {
						return function () {
							if (this.curOp) return t.apply(this, arguments)
							le(this)
							try {
								return t.apply(this, arguments)
							} finally {
								ae(this)
							}
						}
					}
					u(nt, 'methodOp')
					function Y(t) {
						return function () {
							var e = this.cm
							if (!e || e.curOp) return t.apply(this, arguments)
							le(e)
							try {
								return t.apply(this, arguments)
							} finally {
								ae(e)
							}
						}
					}
					u(Y, 'docMethodOp')
					function Qe(t, e) {
						t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(e, lr(Ua, t))
					}
					u(Qe, 'startWorker')
					function Ua(t) {
						var e = t.doc
						if (!(e.highlightFrontier >= t.display.viewTo)) {
							var r = +new Date() + t.options.workTime,
								n = Ue(t, e.highlightFrontier),
								i = []
							e.iter(n.line, Math.min(e.first + e.size, t.display.viewTo + 500), function (o) {
								if (n.line >= t.display.viewFrom) {
									var l = o.styles,
										a = o.text.length > t.options.maxHighlightLength ? Jt(e.mode, n.state) : null,
										s = Wi(t, o, n, !0)
									a && (n.state = a), (o.styles = s.styles)
									var c = o.styleClasses,
										h = s.classes
									h ? (o.styleClasses = h) : c && (o.styleClasses = null)
									for (
										var d =
												!l ||
												l.length != o.styles.length ||
												(c != h &&
													(!c || !h || c.bgClass != h.bgClass || c.textClass != h.textClass)),
											p = 0;
										!d && p < l.length;
										++p
									)
										d = l[p] != o.styles[p]
									d && i.push(n.line), (o.stateAfter = n.save()), n.nextLine()
								} else
									o.text.length <= t.options.maxHighlightLength && Sr(t, o.text, n),
										(o.stateAfter = n.line % 5 == 0 ? n.save() : null),
										n.nextLine()
								if (+new Date() > r) return Qe(t, t.options.workDelay), !0
							}),
								(e.highlightFrontier = n.line),
								(e.modeFrontier = Math.max(e.modeFrontier, n.line)),
								i.length &&
									ut(t, function () {
										for (var o = 0; o < i.length; o++) Gt(t, i[o], 'text')
									})
						}
					}
					u(Ua, 'highlightWorker')
					var _r = u(function (t, e, r) {
						var n = t.display
						;(this.viewport = e),
							(this.visible = Fn(n, t.doc, e)),
							(this.editorIsHidden = !n.wrapper.offsetWidth),
							(this.wrapperHeight = n.wrapper.clientHeight),
							(this.wrapperWidth = n.wrapper.clientWidth),
							(this.oldDisplayWidth = ne(t)),
							(this.force = r),
							(this.dims = Rr(t)),
							(this.events = [])
					}, 'DisplayUpdate')
					;(_r.prototype.signal = function (t, e) {
						bt(t, e) && this.events.push(arguments)
					}),
						(_r.prototype.finish = function () {
							for (var t = 0; t < this.events.length; t++) U.apply(null, this.events[t])
						})
					function Ga(t) {
						var e = t.display
						!e.scrollbarsClipped &&
							e.scroller.offsetWidth &&
							((e.nativeBarWidth = e.scroller.offsetWidth - e.scroller.clientWidth),
							(e.heightForcer.style.height = Mt(t) + 'px'),
							(e.sizer.style.marginBottom = -e.nativeBarWidth + 'px'),
							(e.sizer.style.borderRightWidth = Mt(t) + 'px'),
							(e.scrollbarsClipped = !0))
					}
					u(Ga, 'maybeClipScrollbars')
					function Ka(t) {
						if (t.hasFocus()) return null
						var e = vt()
						if (!e || !zt(t.display.lineDiv, e)) return null
						var r = { activeElt: e }
						if (window.getSelection) {
							var n = window.getSelection()
							n.anchorNode &&
								n.extend &&
								zt(t.display.lineDiv, n.anchorNode) &&
								((r.anchorNode = n.anchorNode),
								(r.anchorOffset = n.anchorOffset),
								(r.focusNode = n.focusNode),
								(r.focusOffset = n.focusOffset))
						}
						return r
					}
					u(Ka, 'selectionSnapshot')
					function Va(t) {
						if (
							!(!t || !t.activeElt || t.activeElt == vt()) &&
							(t.activeElt.focus(),
							!/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) &&
								t.anchorNode &&
								zt(document.body, t.anchorNode) &&
								zt(document.body, t.focusNode))
						) {
							var e = window.getSelection(),
								r = document.createRange()
							r.setEnd(t.anchorNode, t.anchorOffset),
								r.collapse(!1),
								e.removeAllRanges(),
								e.addRange(r),
								e.extend(t.focusNode, t.focusOffset)
						}
					}
					u(Va, 'restoreSelection')
					function qr(t, e) {
						var r = t.display,
							n = t.doc
						if (e.editorIsHidden) return Kt(t), !1
						if (
							!e.force &&
							e.visible.from >= r.viewFrom &&
							e.visible.to <= r.viewTo &&
							(r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo) &&
							r.renderedView == r.view &&
							po(t) == 0
						)
							return !1
						Lo(t) && (Kt(t), (e.dims = Rr(t)))
						var i = n.first + n.size,
							o = Math.max(e.visible.from - t.options.viewportMargin, n.first),
							l = Math.min(i, e.visible.to + t.options.viewportMargin)
						r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)),
							r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)),
							Bt && ((o = Mr(t.doc, o)), (l = Vi(t.doc, l)))
						var a =
							o != r.viewFrom ||
							l != r.viewTo ||
							r.lastWrapHeight != e.wrapperHeight ||
							r.lastWrapWidth != e.wrapperWidth
						Na(t, o, l),
							(r.viewOffset = Ht(S(t.doc, r.viewFrom))),
							(t.display.mover.style.top = r.viewOffset + 'px')
						var s = po(t)
						if (
							!a &&
							s == 0 &&
							!e.force &&
							r.renderedView == r.view &&
							(r.updateLineNumbers == null || r.updateLineNumbers >= r.viewTo)
						)
							return !1
						var c = Ka(t)
						return (
							s > 4 && (r.lineDiv.style.display = 'none'),
							ja(t, r.updateLineNumbers, e.dims),
							s > 4 && (r.lineDiv.style.display = ''),
							(r.renderedView = r.view),
							Va(c),
							Rt(r.cursorDiv),
							Rt(r.selectionDiv),
							(r.gutters.style.height = r.sizer.style.minHeight = 0),
							a &&
								((r.lastWrapHeight = e.wrapperHeight),
								(r.lastWrapWidth = e.wrapperWidth),
								Qe(t, 400)),
							(r.updateLineNumbers = null),
							!0
						)
					}
					u(qr, 'updateDisplayIfNeeded')
					function Co(t, e) {
						for (var r = e.viewport, n = !0; ; n = !1) {
							if (!n || !t.options.lineWrapping || e.oldDisplayWidth == ne(t)) {
								if (
									(r &&
										r.top != null &&
										(r = { top: Math.min(t.doc.height + Ar(t.display) - Wr(t), r.top) }),
									(e.visible = Fn(t.display, t.doc, r)),
									e.visible.from >= t.display.viewFrom && e.visible.to <= t.display.viewTo)
								)
									break
							} else n && (e.visible = Fn(t.display, t.doc, r))
							if (!qr(t, e)) break
							Hn(t)
							var i = $e(t)
							qe(t), Le(t, i), $r(t, i), (e.force = !1)
						}
						e.signal(t, 'update', t),
							(t.display.viewFrom != t.display.reportedViewFrom ||
								t.display.viewTo != t.display.reportedViewTo) &&
								(e.signal(t, 'viewportChange', t, t.display.viewFrom, t.display.viewTo),
								(t.display.reportedViewFrom = t.display.viewFrom),
								(t.display.reportedViewTo = t.display.viewTo))
					}
					u(Co, 'postUpdateDisplay')
					function Yr(t, e) {
						var r = new _r(t, e)
						if (qr(t, r)) {
							Hn(t), Co(t, r)
							var n = $e(t)
							qe(t), Le(t, n), $r(t, n), r.finish()
						}
					}
					u(Yr, 'updateDisplaySimple')
					function ja(t, e, r) {
						var n = t.display,
							i = t.options.lineNumbers,
							o = n.lineDiv,
							l = o.firstChild
						function a(g) {
							var m = g.nextSibling
							return (
								ot && xt && t.display.currentWheelTarget == g
									? (g.style.display = 'none')
									: g.parentNode.removeChild(g),
								m
							)
						}
						u(a, 'rm')
						for (var s = n.view, c = n.viewFrom, h = 0; h < s.length; h++) {
							var d = s[h]
							if (!d.hidden)
								if (!d.node || d.node.parentNode != o) {
									var p = va(t, d, c, r)
									o.insertBefore(p, l)
								} else {
									for (; l != d.node; ) l = a(l)
									var f = i && e != null && e <= c && d.lineNumber
									d.changes && (J(d.changes, 'gutter') > -1 && (f = !1), Yi(t, d, c, r)),
										f &&
											(Rt(d.lineNumber),
											d.lineNumber.appendChild(document.createTextNode(br(t.options, c)))),
										(l = d.node.nextSibling)
								}
							c += d.size
						}
						for (; l; ) l = a(l)
					}
					u(ja, 'patchDisplay')
					function Zr(t) {
						var e = t.gutters.offsetWidth
						;(t.sizer.style.marginLeft = e + 'px'), _(t, 'gutterChanged', t)
					}
					u(Zr, 'updateGutterSpace')
					function $r(t, e) {
						;(t.display.sizer.style.minHeight = e.docHeight + 'px'),
							(t.display.heightForcer.style.top = e.docHeight + 'px'),
							(t.display.gutters.style.height = e.docHeight + t.display.barHeight + Mt(t) + 'px')
					}
					u($r, 'setDocumentHeight')
					function So(t) {
						var e = t.display,
							r = e.view
						if (!(!e.alignWidgets && (!e.gutters.firstChild || !t.options.fixedGutter))) {
							for (
								var n = zr(e) - e.scroller.scrollLeft + t.doc.scrollLeft,
									i = e.gutters.offsetWidth,
									o = n + 'px',
									l = 0;
								l < r.length;
								l++
							)
								if (!r[l].hidden) {
									t.options.fixedGutter &&
										(r[l].gutter && (r[l].gutter.style.left = o),
										r[l].gutterBackground && (r[l].gutterBackground.style.left = o))
									var a = r[l].alignable
									if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o
								}
							t.options.fixedGutter && (e.gutters.style.left = n + i + 'px')
						}
					}
					u(So, 'alignHorizontally')
					function Lo(t) {
						if (!t.options.lineNumbers) return !1
						var e = t.doc,
							r = br(t.options, e.first + e.size - 1),
							n = t.display
						if (r.length != n.lineNumChars) {
							var i = n.measure.appendChild(
									k('div', [k('div', r)], 'CodeMirror-linenumber CodeMirror-gutter-elt')
								),
								o = i.firstChild.offsetWidth,
								l = i.offsetWidth - o
							return (
								(n.lineGutter.style.width = ''),
								(n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l) + 1),
								(n.lineNumWidth = n.lineNumInnerWidth + l),
								(n.lineNumChars = n.lineNumInnerWidth ? r.length : -1),
								(n.lineGutter.style.width = n.lineNumWidth + 'px'),
								Zr(t.display),
								!0
							)
						}
						return !1
					}
					u(Lo, 'maybeUpdateLineNumberWidth')
					function Qr(t, e) {
						for (var r = [], n = !1, i = 0; i < t.length; i++) {
							var o = t[i],
								l = null
							if (
								(typeof o != 'string' && ((l = o.style), (o = o.className)),
								o == 'CodeMirror-linenumbers')
							)
								if (e) n = !0
								else continue
							r.push({ className: o, style: l })
						}
						return e && !n && r.push({ className: 'CodeMirror-linenumbers', style: null }), r
					}
					u(Qr, 'getGutters')
					function ko(t) {
						var e = t.gutters,
							r = t.gutterSpecs
						Rt(e), (t.lineGutter = null)
						for (var n = 0; n < r.length; ++n) {
							var i = r[n],
								o = i.className,
								l = i.style,
								a = e.appendChild(k('div', null, 'CodeMirror-gutter ' + o))
							l && (a.style.cssText = l),
								o == 'CodeMirror-linenumbers' &&
									((t.lineGutter = a), (a.style.width = (t.lineNumWidth || 1) + 'px'))
						}
						;(e.style.display = r.length ? '' : 'none'), Zr(t)
					}
					u(ko, 'renderGutters')
					function Je(t) {
						ko(t.display), at(t), So(t)
					}
					u(Je, 'updateGutters')
					function Xa(t, e, r, n) {
						var i = this
						;(this.input = r),
							(i.scrollbarFiller = k('div', null, 'CodeMirror-scrollbar-filler')),
							i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
							(i.gutterFiller = k('div', null, 'CodeMirror-gutter-filler')),
							i.gutterFiller.setAttribute('cm-not-content', 'true'),
							(i.lineDiv = pe('div', null, 'CodeMirror-code')),
							(i.selectionDiv = k('div', null, null, 'position: relative; z-index: 1')),
							(i.cursorDiv = k('div', null, 'CodeMirror-cursors')),
							(i.measure = k('div', null, 'CodeMirror-measure')),
							(i.lineMeasure = k('div', null, 'CodeMirror-measure')),
							(i.lineSpace = pe(
								'div',
								[i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
								null,
								'position: relative; outline: none'
							))
						var o = pe('div', [i.lineSpace], 'CodeMirror-lines')
						;(i.mover = k('div', [o], null, 'position: relative')),
							(i.sizer = k('div', [i.mover], 'CodeMirror-sizer')),
							(i.sizerWidth = null),
							(i.heightForcer = k(
								'div',
								null,
								null,
								'position: absolute; height: ' + Wl + 'px; width: 1px;'
							)),
							(i.gutters = k('div', null, 'CodeMirror-gutters')),
							(i.lineGutter = null),
							(i.scroller = k('div', [i.sizer, i.heightForcer, i.gutters], 'CodeMirror-scroll')),
							i.scroller.setAttribute('tabIndex', '-1'),
							(i.wrapper = k('div', [i.scrollbarFiller, i.gutterFiller, i.scroller], 'CodeMirror')),
							i.wrapper.setAttribute('translate', 'no'),
							A && I < 8 && ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
							!ot && !(It && dn) && (i.scroller.draggable = !0),
							t && (t.appendChild ? t.appendChild(i.wrapper) : t(i.wrapper)),
							(i.viewFrom = i.viewTo = e.first),
							(i.reportedViewFrom = i.reportedViewTo = e.first),
							(i.view = []),
							(i.renderedView = null),
							(i.externalMeasured = null),
							(i.viewOffset = 0),
							(i.lastWrapHeight = i.lastWrapWidth = 0),
							(i.updateLineNumbers = null),
							(i.nativeBarWidth = i.barHeight = i.barWidth = 0),
							(i.scrollbarsClipped = !1),
							(i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
							(i.alignWidgets = !1),
							(i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
							(i.maxLine = null),
							(i.maxLineLength = 0),
							(i.maxLineChanged = !1),
							(i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
							(i.shift = !1),
							(i.selForContextMenu = null),
							(i.activeTouch = null),
							(i.gutterSpecs = Qr(n.gutters, n.lineNumbers)),
							ko(i),
							r.init(i)
					}
					u(Xa, 'Display')
					var Jr = 0,
						Vt = null
					A ? (Vt = -0.53) : It ? (Vt = 15) : nr ? (Vt = -0.7) : rr && (Vt = -1 / 3)
					function To(t) {
						var e = t.wheelDeltaX,
							r = t.wheelDeltaY
						return (
							e == null && t.detail && t.axis == t.HORIZONTAL_AXIS && (e = t.detail),
							r == null && t.detail && t.axis == t.VERTICAL_AXIS
								? (r = t.detail)
								: r == null && (r = t.wheelDelta),
							{ x: e, y: r }
						)
					}
					u(To, 'wheelEventDelta')
					function _a(t) {
						var e = To(t)
						return (e.x *= Vt), (e.y *= Vt), e
					}
					u(_a, 'wheelEventPixels')
					function Mo(t, e) {
						var r = To(e),
							n = r.x,
							i = r.y,
							o = Vt
						e.deltaMode === 0 && ((n = e.deltaX), (i = e.deltaY), (o = 1))
						var l = t.display,
							a = l.scroller,
							s = a.scrollWidth > a.clientWidth,
							c = a.scrollHeight > a.clientHeight
						if ((n && s) || (i && c)) {
							if (i && xt && ot) {
								t: for (var h = e.target, d = l.view; h != a; h = h.parentNode)
									for (var p = 0; p < d.length; p++)
										if (d[p].node == h) {
											t.display.currentWheelTarget = h
											break t
										}
							}
							if (n && !It && !kt && o != null) {
								i && c && Ze(t, Math.max(0, a.scrollTop + i * o)),
									oe(t, Math.max(0, a.scrollLeft + n * o)),
									(!i || (i && c)) && lt(e),
									(l.wheelStartX = null)
								return
							}
							if (i && o != null) {
								var f = i * o,
									g = t.doc.scrollTop,
									m = g + l.wrapper.clientHeight
								f < 0 ? (g = Math.max(0, g + f - 50)) : (m = Math.min(t.doc.height, m + f + 50)),
									Yr(t, { top: g, bottom: m })
							}
							Jr < 20 &&
								e.deltaMode !== 0 &&
								(l.wheelStartX == null
									? ((l.wheelStartX = a.scrollLeft),
									  (l.wheelStartY = a.scrollTop),
									  (l.wheelDX = n),
									  (l.wheelDY = i),
									  setTimeout(function () {
											if (l.wheelStartX != null) {
												var y = a.scrollLeft - l.wheelStartX,
													b = a.scrollTop - l.wheelStartY,
													x = (b && l.wheelDY && b / l.wheelDY) || (y && l.wheelDX && y / l.wheelDX)
												;(l.wheelStartX = l.wheelStartY = null),
													x && ((Vt = (Vt * Jr + x) / (Jr + 1)), ++Jr)
											}
									  }, 200))
									: ((l.wheelDX += n), (l.wheelDY += i)))
						}
					}
					u(Mo, 'onScrollWheel')
					var wt = u(function (t, e) {
						;(this.ranges = t), (this.primIndex = e)
					}, 'Selection')
					;(wt.prototype.primary = function () {
						return this.ranges[this.primIndex]
					}),
						(wt.prototype.equals = function (t) {
							if (t == this) return !0
							if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length) return !1
							for (var e = 0; e < this.ranges.length; e++) {
								var r = this.ranges[e],
									n = t.ranges[e]
								if (!wr(r.anchor, n.anchor) || !wr(r.head, n.head)) return !1
							}
							return !0
						}),
						(wt.prototype.deepCopy = function () {
							for (var t = [], e = 0; e < this.ranges.length; e++)
								t[e] = new H(xr(this.ranges[e].anchor), xr(this.ranges[e].head))
							return new wt(t, this.primIndex)
						}),
						(wt.prototype.somethingSelected = function () {
							for (var t = 0; t < this.ranges.length; t++) if (!this.ranges[t].empty()) return !0
							return !1
						}),
						(wt.prototype.contains = function (t, e) {
							e || (e = t)
							for (var r = 0; r < this.ranges.length; r++) {
								var n = this.ranges[r]
								if (N(e, n.from()) >= 0 && N(t, n.to()) <= 0) return r
							}
							return -1
						})
					var H = u(function (t, e) {
						;(this.anchor = t), (this.head = e)
					}, 'Range')
					;(H.prototype.from = function () {
						return wn(this.anchor, this.head)
					}),
						(H.prototype.to = function () {
							return bn(this.anchor, this.head)
						}),
						(H.prototype.empty = function () {
							return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
						})
					function Lt(t, e, r) {
						var n = t && t.options.selectionsMayTouch,
							i = e[r]
						e.sort(function (p, f) {
							return N(p.from(), f.from())
						}),
							(r = J(e, i))
						for (var o = 1; o < e.length; o++) {
							var l = e[o],
								a = e[o - 1],
								s = N(a.to(), l.from())
							if (n && !l.empty() ? s > 0 : s >= 0) {
								var c = wn(a.from(), l.from()),
									h = bn(a.to(), l.to()),
									d = a.empty() ? l.from() == l.head : a.from() == a.head
								o <= r && --r, e.splice(--o, 2, new H(d ? h : c, d ? c : h))
							}
						}
						return new wt(e, r)
					}
					u(Lt, 'normalizeSelection')
					function jt(t, e) {
						return new wt([new H(t, e || t)], 0)
					}
					u(jt, 'simpleSelection')
					function Xt(t) {
						return t.text
							? v(
									t.from.line + t.text.length - 1,
									W(t.text).length + (t.text.length == 1 ? t.from.ch : 0)
							  )
							: t.to
					}
					u(Xt, 'changeEnd')
					function No(t, e) {
						if (N(t, e.from) < 0) return t
						if (N(t, e.to) <= 0) return Xt(e)
						var r = t.line + e.text.length - (e.to.line - e.from.line) - 1,
							n = t.ch
						return t.line == e.to.line && (n += Xt(e).ch - e.to.ch), v(r, n)
					}
					u(No, 'adjustForChange')
					function ti(t, e) {
						for (var r = [], n = 0; n < t.sel.ranges.length; n++) {
							var i = t.sel.ranges[n]
							r.push(new H(No(i.anchor, e), No(i.head, e)))
						}
						return Lt(t.cm, r, t.sel.primIndex)
					}
					u(ti, 'computeSelAfterChange')
					function Oo(t, e, r) {
						return t.line == e.line
							? v(r.line, t.ch - e.ch + r.ch)
							: v(r.line + (t.line - e.line), t.ch)
					}
					u(Oo, 'offsetPos')
					function qa(t, e, r) {
						for (var n = [], i = v(t.first, 0), o = i, l = 0; l < e.length; l++) {
							var a = e[l],
								s = Oo(a.from, i, o),
								c = Oo(Xt(a), i, o)
							if (((i = a.to), (o = c), r == 'around')) {
								var h = t.sel.ranges[l],
									d = N(h.head, h.anchor) < 0
								n[l] = new H(d ? c : s, d ? s : c)
							} else n[l] = new H(s, s)
						}
						return new wt(n, t.sel.primIndex)
					}
					u(qa, 'computeReplacedSel')
					function ei(t) {
						;(t.doc.mode = mr(t.options, t.doc.modeOption)), tn(t)
					}
					u(ei, 'loadMode')
					function tn(t) {
						t.doc.iter(function (e) {
							e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
						}),
							(t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first),
							Qe(t, 100),
							t.state.modeGen++,
							t.curOp && at(t)
					}
					u(tn, 'resetModeState')
					function Do(t, e) {
						return (
							e.from.ch == 0 &&
							e.to.ch == 0 &&
							W(e.text) == '' &&
							(!t.cm || t.cm.options.wholeLineUpdateBefore)
						)
					}
					u(Do, 'isWholeLineUpdate')
					function ni(t, e, r, n) {
						function i(x) {
							return r ? r[x] : null
						}
						u(i, 'spansFor')
						function o(x, w, C) {
							ra(x, w, C, n), _(x, 'change', x, e)
						}
						u(o, 'update')
						function l(x, w) {
							for (var C = [], T = x; T < w; ++T) C.push(new Ke(c[T], i(T), n))
							return C
						}
						u(l, 'linesFor')
						var a = e.from,
							s = e.to,
							c = e.text,
							h = S(t, a.line),
							d = S(t, s.line),
							p = W(c),
							f = i(c.length - 1),
							g = s.line - a.line
						if (e.full) t.insert(0, l(0, c.length)), t.remove(c.length, t.size - c.length)
						else if (Do(t, e)) {
							var m = l(0, c.length - 1)
							o(d, d.text, f), g && t.remove(a.line, g), m.length && t.insert(a.line, m)
						} else if (h == d)
							if (c.length == 1) o(h, h.text.slice(0, a.ch) + p + h.text.slice(s.ch), f)
							else {
								var y = l(1, c.length - 1)
								y.push(new Ke(p + h.text.slice(s.ch), f, n)),
									o(h, h.text.slice(0, a.ch) + c[0], i(0)),
									t.insert(a.line + 1, y)
							}
						else if (c.length == 1)
							o(h, h.text.slice(0, a.ch) + c[0] + d.text.slice(s.ch), i(0)), t.remove(a.line + 1, g)
						else {
							o(h, h.text.slice(0, a.ch) + c[0], i(0)), o(d, p + d.text.slice(s.ch), f)
							var b = l(1, c.length - 1)
							g > 1 && t.remove(a.line + 1, g - 1), t.insert(a.line + 1, b)
						}
						_(t, 'change', t, e)
					}
					u(ni, 'updateDoc')
					function _t(t, e, r) {
						function n(i, o, l) {
							if (i.linked)
								for (var a = 0; a < i.linked.length; ++a) {
									var s = i.linked[a]
									if (s.doc != o) {
										var c = l && s.sharedHist
										;(r && !c) || (e(s.doc, c), n(s.doc, i, c))
									}
								}
						}
						u(n, 'propagate'), n(t, null, !0)
					}
					u(_t, 'linkedDocs')
					function Ao(t, e) {
						if (e.cm) throw new Error('This document is already in use.')
						;(t.doc = e),
							(e.cm = t),
							Br(t),
							ei(t),
							Wo(t),
							(t.options.direction = e.direction),
							t.options.lineWrapping || Or(t),
							(t.options.mode = e.modeOption),
							at(t)
					}
					u(Ao, 'attachDoc')
					function Wo(t) {
						;(t.doc.direction == 'rtl' ? Zt : fe)(t.display.lineDiv, 'CodeMirror-rtl')
					}
					u(Wo, 'setDirectionClass')
					function Ya(t) {
						ut(t, function () {
							Wo(t), at(t)
						})
					}
					u(Ya, 'directionChanged')
					function In(t) {
						;(this.done = []),
							(this.undone = []),
							(this.undoDepth = t ? t.undoDepth : 1 / 0),
							(this.lastModTime = this.lastSelTime = 0),
							(this.lastOp = this.lastSelOp = null),
							(this.lastOrigin = this.lastSelOrigin = null),
							(this.generation = this.maxGeneration = t ? t.maxGeneration : 1)
					}
					u(In, 'History')
					function ri(t, e) {
						var r = { from: xr(e.from), to: Xt(e), text: te(t, e.from, e.to) }
						return (
							Po(t, r, e.from.line, e.to.line + 1),
							_t(
								t,
								function (n) {
									return Po(n, r, e.from.line, e.to.line + 1)
								},
								!0
							),
							r
						)
					}
					u(ri, 'historyChangeFromChange')
					function Ho(t) {
						for (; t.length; ) {
							var e = W(t)
							if (e.ranges) t.pop()
							else break
						}
					}
					u(Ho, 'clearSelectionEvents')
					function Za(t, e) {
						if (e) return Ho(t.done), W(t.done)
						if (t.done.length && !W(t.done).ranges) return W(t.done)
						if (t.done.length > 1 && !t.done[t.done.length - 2].ranges)
							return t.done.pop(), W(t.done)
					}
					u(Za, 'lastChangeEvent')
					function Fo(t, e, r, n) {
						var i = t.history
						i.undone.length = 0
						var o = +new Date(),
							l,
							a
						if (
							(i.lastOp == n ||
								(i.lastOrigin == e.origin &&
									e.origin &&
									((e.origin.charAt(0) == '+' &&
										i.lastModTime > o - (t.cm ? t.cm.options.historyEventDelay : 500)) ||
										e.origin.charAt(0) == '*'))) &&
							(l = Za(i, i.lastOp == n))
						)
							(a = W(l.changes)),
								N(e.from, e.to) == 0 && N(e.from, a.to) == 0
									? (a.to = Xt(e))
									: l.changes.push(ri(t, e))
						else {
							var s = W(i.done)
							for (
								(!s || !s.ranges) && Rn(t.sel, i.done),
									l = { changes: [ri(t, e)], generation: i.generation },
									i.done.push(l);
								i.done.length > i.undoDepth;

							)
								i.done.shift(), i.done[0].ranges || i.done.shift()
						}
						i.done.push(r),
							(i.generation = ++i.maxGeneration),
							(i.lastModTime = i.lastSelTime = o),
							(i.lastOp = i.lastSelOp = n),
							(i.lastOrigin = i.lastSelOrigin = e.origin),
							a || U(t, 'historyAdded')
					}
					u(Fo, 'addChangeToHistory')
					function $a(t, e, r, n) {
						var i = e.charAt(0)
						return (
							i == '*' ||
							(i == '+' &&
								r.ranges.length == n.ranges.length &&
								r.somethingSelected() == n.somethingSelected() &&
								new Date() - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500))
						)
					}
					u($a, 'selectionEventCanBeMerged')
					function Qa(t, e, r, n) {
						var i = t.history,
							o = n && n.origin
						r == i.lastSelOp ||
						(o &&
							i.lastSelOrigin == o &&
							((i.lastModTime == i.lastSelTime && i.lastOrigin == o) || $a(t, o, W(i.done), e)))
							? (i.done[i.done.length - 1] = e)
							: Rn(e, i.done),
							(i.lastSelTime = +new Date()),
							(i.lastSelOrigin = o),
							(i.lastSelOp = r),
							n && n.clearRedo !== !1 && Ho(i.undone)
					}
					u(Qa, 'addSelectionToHistory')
					function Rn(t, e) {
						var r = W(e)
						;(r && r.ranges && r.equals(t)) || e.push(t)
					}
					u(Rn, 'pushSelectionToHistory')
					function Po(t, e, r, n) {
						var i = e['spans_' + t.id],
							o = 0
						t.iter(Math.max(t.first, r), Math.min(t.first + t.size, n), function (l) {
							l.markedSpans && ((i || (i = e['spans_' + t.id] = {}))[o] = l.markedSpans), ++o
						})
					}
					u(Po, 'attachLocalSpans')
					function Ja(t) {
						if (!t) return null
						for (var e, r = 0; r < t.length; ++r)
							t[r].marker.explicitlyCleared ? e || (e = t.slice(0, r)) : e && e.push(t[r])
						return e ? (e.length ? e : null) : t
					}
					u(Ja, 'removeClearedSpans')
					function ts(t, e) {
						var r = e['spans_' + t.id]
						if (!r) return null
						for (var n = [], i = 0; i < e.text.length; ++i) n.push(Ja(r[i]))
						return n
					}
					u(ts, 'getOldSpans')
					function Eo(t, e) {
						var r = ts(t, e),
							n = kr(t, e)
						if (!r) return n
						if (!n) return r
						for (var i = 0; i < r.length; ++i) {
							var o = r[i],
								l = n[i]
							if (o && l)
								t: for (var a = 0; a < l.length; ++a) {
									for (var s = l[a], c = 0; c < o.length; ++c)
										if (o[c].marker == s.marker) continue t
									o.push(s)
								}
							else l && (r[i] = l)
						}
						return r
					}
					u(Eo, 'mergeOldSpans')
					function ke(t, e, r) {
						for (var n = [], i = 0; i < t.length; ++i) {
							var o = t[i]
							if (o.ranges) {
								n.push(r ? wt.prototype.deepCopy.call(o) : o)
								continue
							}
							var l = o.changes,
								a = []
							n.push({ changes: a })
							for (var s = 0; s < l.length; ++s) {
								var c = l[s],
									h = void 0
								if ((a.push({ from: c.from, to: c.to, text: c.text }), e))
									for (var d in c)
										(h = d.match(/^spans_(\d+)$/)) &&
											J(e, Number(h[1])) > -1 &&
											((W(a)[d] = c[d]), delete c[d])
							}
						}
						return n
					}
					u(ke, 'copyHistoryArray')
					function ii(t, e, r, n) {
						if (n) {
							var i = t.anchor
							if (r) {
								var o = N(e, i) < 0
								o != N(r, i) < 0 ? ((i = e), (e = r)) : o != N(e, r) < 0 && (e = r)
							}
							return new H(i, e)
						} else return new H(r || e, e)
					}
					u(ii, 'extendRange')
					function zn(t, e, r, n, i) {
						i == null && (i = t.cm && (t.cm.display.shift || t.extend)),
							tt(t, new wt([ii(t.sel.primary(), e, r, i)], 0), n)
					}
					u(zn, 'extendSelection')
					function Io(t, e, r) {
						for (
							var n = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0;
							o < t.sel.ranges.length;
							o++
						)
							n[o] = ii(t.sel.ranges[o], e[o], null, i)
						var l = Lt(t.cm, n, t.sel.primIndex)
						tt(t, l, r)
					}
					u(Io, 'extendSelections')
					function oi(t, e, r, n) {
						var i = t.sel.ranges.slice(0)
						;(i[e] = r), tt(t, Lt(t.cm, i, t.sel.primIndex), n)
					}
					u(oi, 'replaceOneSelection')
					function Ro(t, e, r, n) {
						tt(t, jt(e, r), n)
					}
					u(Ro, 'setSimpleSelection')
					function es(t, e, r) {
						var n = {
							ranges: e.ranges,
							update: function (i) {
								this.ranges = []
								for (var o = 0; o < i.length; o++)
									this.ranges[o] = new H(O(t, i[o].anchor), O(t, i[o].head))
							},
							origin: r && r.origin
						}
						return (
							U(t, 'beforeSelectionChange', t, n),
							t.cm && U(t.cm, 'beforeSelectionChange', t.cm, n),
							n.ranges != e.ranges ? Lt(t.cm, n.ranges, n.ranges.length - 1) : e
						)
					}
					u(es, 'filterSelectionChange')
					function zo(t, e, r) {
						var n = t.history.done,
							i = W(n)
						i && i.ranges ? ((n[n.length - 1] = e), Bn(t, e, r)) : tt(t, e, r)
					}
					u(zo, 'setSelectionReplaceHistory')
					function tt(t, e, r) {
						Bn(t, e, r), Qa(t, t.sel, t.cm ? t.cm.curOp.id : NaN, r)
					}
					u(tt, 'setSelection')
					function Bn(t, e, r) {
						;(bt(t, 'beforeSelectionChange') || (t.cm && bt(t.cm, 'beforeSelectionChange'))) &&
							(e = es(t, e, r))
						var n = (r && r.bias) || (N(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1)
						Bo(t, Go(t, e, n, !0)),
							!(r && r.scroll === !1) &&
								t.cm &&
								t.cm.getOption('readOnly') != 'nocursor' &&
								Ce(t.cm)
					}
					u(Bn, 'setSelectionNoUndo')
					function Bo(t, e) {
						e.equals(t.sel) ||
							((t.sel = e),
							t.cm && ((t.cm.curOp.updateInput = 1), (t.cm.curOp.selectionChanged = !0), xi(t.cm)),
							_(t, 'cursorActivity', t))
					}
					u(Bo, 'setSelectionInner')
					function Uo(t) {
						Bo(t, Go(t, t.sel, null, !1))
					}
					u(Uo, 'reCheckSelection')
					function Go(t, e, r, n) {
						for (var i, o = 0; o < e.ranges.length; o++) {
							var l = e.ranges[o],
								a = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o],
								s = Un(t, l.anchor, a && a.anchor, r, n),
								c = Un(t, l.head, a && a.head, r, n)
							;(i || s != l.anchor || c != l.head) &&
								(i || (i = e.ranges.slice(0, o)), (i[o] = new H(s, c)))
						}
						return i ? Lt(t.cm, i, e.primIndex) : e
					}
					u(Go, 'skipAtomicInSelection')
					function Te(t, e, r, n, i) {
						var o = S(t, e.line)
						if (o.markedSpans)
							for (var l = 0; l < o.markedSpans.length; ++l) {
								var a = o.markedSpans[l],
									s = a.marker,
									c = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft,
									h = 'selectRight' in s ? !s.selectRight : s.inclusiveRight
								if (
									(a.from == null || (c ? a.from <= e.ch : a.from < e.ch)) &&
									(a.to == null || (h ? a.to >= e.ch : a.to > e.ch))
								) {
									if (i && (U(s, 'beforeCursorEnter'), s.explicitlyCleared))
										if (o.markedSpans) {
											--l
											continue
										} else break
									if (!s.atomic) continue
									if (r) {
										var d = s.find(n < 0 ? 1 : -1),
											p = void 0
										if (
											((n < 0 ? h : c) && (d = Ko(t, d, -n, d && d.line == e.line ? o : null)),
											d && d.line == e.line && (p = N(d, r)) && (n < 0 ? p < 0 : p > 0))
										)
											return Te(t, d, e, n, i)
									}
									var f = s.find(n < 0 ? -1 : 1)
									return (
										(n < 0 ? c : h) && (f = Ko(t, f, n, f.line == e.line ? o : null)),
										f ? Te(t, f, e, n, i) : null
									)
								}
							}
						return e
					}
					u(Te, 'skipAtomicInner')
					function Un(t, e, r, n, i) {
						var o = n || 1,
							l =
								Te(t, e, r, o, i) ||
								(!i && Te(t, e, r, o, !0)) ||
								Te(t, e, r, -o, i) ||
								(!i && Te(t, e, r, -o, !0))
						return l || ((t.cantEdit = !0), v(t.first, 0))
					}
					u(Un, 'skipAtomic')
					function Ko(t, e, r, n) {
						return r < 0 && e.ch == 0
							? e.line > t.first
								? O(t, v(e.line - 1))
								: null
							: r > 0 && e.ch == (n || S(t, e.line)).text.length
							? e.line < t.first + t.size - 1
								? v(e.line + 1, 0)
								: null
							: new v(e.line, e.ch + r)
					}
					u(Ko, 'movePos')
					function Vo(t) {
						t.setSelection(v(t.firstLine(), 0), v(t.lastLine()), Dt)
					}
					u(Vo, 'selectAll')
					function jo(t, e, r) {
						var n = {
							canceled: !1,
							from: e.from,
							to: e.to,
							text: e.text,
							origin: e.origin,
							cancel: function () {
								return (n.canceled = !0)
							}
						}
						return (
							r &&
								(n.update = function (i, o, l, a) {
									i && (n.from = O(t, i)),
										o && (n.to = O(t, o)),
										l && (n.text = l),
										a !== void 0 && (n.origin = a)
								}),
							U(t, 'beforeChange', t, n),
							t.cm && U(t.cm, 'beforeChange', t.cm, n),
							n.canceled
								? (t.cm && (t.cm.curOp.updateInput = 2), null)
								: { from: n.from, to: n.to, text: n.text, origin: n.origin }
						)
					}
					u(jo, 'filterChange')
					function Me(t, e, r) {
						if (t.cm) {
							if (!t.cm.curOp) return q(t.cm, Me)(t, e, r)
							if (t.cm.state.suppressEdits) return
						}
						if (
							!(
								(bt(t, 'beforeChange') || (t.cm && bt(t.cm, 'beforeChange'))) &&
								((e = jo(t, e, !0)), !e)
							)
						) {
							var n = Xl && !r && Jl(t, e.from, e.to)
							if (n)
								for (var i = n.length - 1; i >= 0; --i)
									Xo(t, { from: n[i].from, to: n[i].to, text: i ? [''] : e.text, origin: e.origin })
							else Xo(t, e)
						}
					}
					u(Me, 'makeChange')
					function Xo(t, e) {
						if (!(e.text.length == 1 && e.text[0] == '' && N(e.from, e.to) == 0)) {
							var r = ti(t, e)
							Fo(t, e, r, t.cm ? t.cm.curOp.id : NaN), en(t, e, r, kr(t, e))
							var n = []
							_t(t, function (i, o) {
								!o && J(n, i.history) == -1 && (Zo(i.history, e), n.push(i.history)),
									en(i, e, null, kr(i, e))
							})
						}
					}
					u(Xo, 'makeChangeInner')
					function Gn(t, e, r) {
						var n = t.cm && t.cm.state.suppressEdits
						if (!(n && !r)) {
							for (
								var i = t.history,
									o,
									l = t.sel,
									a = e == 'undo' ? i.done : i.undone,
									s = e == 'undo' ? i.undone : i.done,
									c = 0;
								c < a.length && ((o = a[c]), !(r ? o.ranges && !o.equals(t.sel) : !o.ranges));
								c++
							);
							if (c != a.length) {
								for (i.lastOrigin = i.lastSelOrigin = null; ; )
									if (((o = a.pop()), o.ranges)) {
										if ((Rn(o, s), r && !o.equals(t.sel))) {
											tt(t, o, { clearRedo: !1 })
											return
										}
										l = o
									} else if (n) {
										a.push(o)
										return
									} else break
								var h = []
								Rn(l, s),
									s.push({ changes: h, generation: i.generation }),
									(i.generation = o.generation || ++i.maxGeneration)
								for (
									var d = bt(t, 'beforeChange') || (t.cm && bt(t.cm, 'beforeChange')),
										p = u(function (m) {
											var y = o.changes[m]
											if (((y.origin = e), d && !jo(t, y, !1))) return (a.length = 0), {}
											h.push(ri(t, y))
											var b = m ? ti(t, y) : W(a)
											en(t, y, b, Eo(t, y)),
												!m && t.cm && t.cm.scrollIntoView({ from: y.from, to: Xt(y) })
											var x = []
											_t(t, function (w, C) {
												!C && J(x, w.history) == -1 && (Zo(w.history, y), x.push(w.history)),
													en(w, y, null, Eo(w, y))
											})
										}, 'loop'),
										f = o.changes.length - 1;
									f >= 0;
									--f
								) {
									var g = p(f)
									if (g) return g.v
								}
							}
						}
					}
					u(Gn, 'makeChangeFromHistory')
					function _o(t, e) {
						if (
							e != 0 &&
							((t.first += e),
							(t.sel = new wt(
								gn(t.sel.ranges, function (i) {
									return new H(v(i.anchor.line + e, i.anchor.ch), v(i.head.line + e, i.head.ch))
								}),
								t.sel.primIndex
							)),
							t.cm)
						) {
							at(t.cm, t.first, t.first - e, e)
							for (var r = t.cm.display, n = r.viewFrom; n < r.viewTo; n++) Gt(t.cm, n, 'gutter')
						}
					}
					u(_o, 'shiftDoc')
					function en(t, e, r, n) {
						if (t.cm && !t.cm.curOp) return q(t.cm, en)(t, e, r, n)
						if (e.to.line < t.first) {
							_o(t, e.text.length - 1 - (e.to.line - e.from.line))
							return
						}
						if (!(e.from.line > t.lastLine())) {
							if (e.from.line < t.first) {
								var i = e.text.length - 1 - (t.first - e.from.line)
								_o(t, i),
									(e = {
										from: v(t.first, 0),
										to: v(e.to.line + i, e.to.ch),
										text: [W(e.text)],
										origin: e.origin
									})
							}
							var o = t.lastLine()
							e.to.line > o &&
								(e = {
									from: e.from,
									to: v(o, S(t, o).text.length),
									text: [e.text[0]],
									origin: e.origin
								}),
								(e.removed = te(t, e.from, e.to)),
								r || (r = ti(t, e)),
								t.cm ? ns(t.cm, e, n) : ni(t, e, n),
								Bn(t, r, Dt),
								t.cantEdit && Un(t, v(t.firstLine(), 0)) && (t.cantEdit = !1)
						}
					}
					u(en, 'makeChangeSingleDoc')
					function ns(t, e, r) {
						var n = t.doc,
							i = t.display,
							o = e.from,
							l = e.to,
							a = !1,
							s = o.line
						t.options.lineWrapping ||
							((s = F(Ct(S(n, o.line)))),
							n.iter(s, l.line + 1, function (f) {
								if (f == i.maxLine) return (a = !0), !0
							})),
							n.sel.contains(e.from, e.to) > -1 && xi(t),
							ni(n, e, r, fo(t)),
							t.options.lineWrapping ||
								(n.iter(s, o.line + e.text.length, function (f) {
									var g = kn(f)
									g > i.maxLineLength &&
										((i.maxLine = f), (i.maxLineLength = g), (i.maxLineChanged = !0), (a = !1))
								}),
								a && (t.curOp.updateMaxLine = !0)),
							jl(n, o.line),
							Qe(t, 400)
						var c = e.text.length - (l.line - o.line) - 1
						e.full
							? at(t)
							: o.line == l.line && e.text.length == 1 && !Do(t.doc, e)
							? Gt(t, o.line, 'text')
							: at(t, o.line, l.line + 1, c)
						var h = bt(t, 'changes'),
							d = bt(t, 'change')
						if (d || h) {
							var p = { from: o, to: l, text: e.text, removed: e.removed, origin: e.origin }
							d && _(t, 'change', t, p),
								h && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(p)
						}
						t.display.selForContextMenu = null
					}
					u(ns, 'makeChangeSingleDocInEditor')
					function Ne(t, e, r, n, i) {
						var o
						n || (n = r),
							N(n, r) < 0 && ((o = [n, r]), (r = o[0]), (n = o[1])),
							typeof e == 'string' && (e = t.splitLines(e)),
							Me(t, { from: r, to: n, text: e, origin: i })
					}
					u(Ne, 'replaceRange')
					function qo(t, e, r, n) {
						r < t.line ? (t.line += n) : e < t.line && ((t.line = e), (t.ch = 0))
					}
					u(qo, 'rebaseHistSelSingle')
					function Yo(t, e, r, n) {
						for (var i = 0; i < t.length; ++i) {
							var o = t[i],
								l = !0
							if (o.ranges) {
								o.copied || ((o = t[i] = o.deepCopy()), (o.copied = !0))
								for (var a = 0; a < o.ranges.length; a++)
									qo(o.ranges[a].anchor, e, r, n), qo(o.ranges[a].head, e, r, n)
								continue
							}
							for (var s = 0; s < o.changes.length; ++s) {
								var c = o.changes[s]
								if (r < c.from.line)
									(c.from = v(c.from.line + n, c.from.ch)), (c.to = v(c.to.line + n, c.to.ch))
								else if (e <= c.to.line) {
									l = !1
									break
								}
							}
							l || (t.splice(0, i + 1), (i = 0))
						}
					}
					u(Yo, 'rebaseHistArray')
					function Zo(t, e) {
						var r = e.from.line,
							n = e.to.line,
							i = e.text.length - (n - r) - 1
						Yo(t.done, r, n, i), Yo(t.undone, r, n, i)
					}
					u(Zo, 'rebaseHist')
					function nn(t, e, r, n) {
						var i = e,
							o = e
						return (
							typeof e == 'number' ? (o = S(t, Di(t, e))) : (i = F(e)),
							i == null ? null : (n(o, i) && t.cm && Gt(t.cm, i, r), o)
						)
					}
					u(nn, 'changeLine')
					function rn(t) {
						;(this.lines = t), (this.parent = null)
						for (var e = 0, r = 0; r < t.length; ++r) (t[r].parent = this), (e += t[r].height)
						this.height = e
					}
					u(rn, 'LeafChunk'),
						(rn.prototype = {
							chunkSize: function () {
								return this.lines.length
							},
							removeInner: function (t, e) {
								for (var r = t, n = t + e; r < n; ++r) {
									var i = this.lines[r]
									;(this.height -= i.height), ia(i), _(i, 'delete')
								}
								this.lines.splice(t, e)
							},
							collapse: function (t) {
								t.push.apply(t, this.lines)
							},
							insertInner: function (t, e, r) {
								;(this.height += r),
									(this.lines = this.lines.slice(0, t).concat(e).concat(this.lines.slice(t)))
								for (var n = 0; n < e.length; ++n) e[n].parent = this
							},
							iterN: function (t, e, r) {
								for (var n = t + e; t < n; ++t) if (r(this.lines[t])) return !0
							}
						})
					function on(t) {
						this.children = t
						for (var e = 0, r = 0, n = 0; n < t.length; ++n) {
							var i = t[n]
							;(e += i.chunkSize()), (r += i.height), (i.parent = this)
						}
						;(this.size = e), (this.height = r), (this.parent = null)
					}
					u(on, 'BranchChunk'),
						(on.prototype = {
							chunkSize: function () {
								return this.size
							},
							removeInner: function (t, e) {
								this.size -= e
								for (var r = 0; r < this.children.length; ++r) {
									var n = this.children[r],
										i = n.chunkSize()
									if (t < i) {
										var o = Math.min(e, i - t),
											l = n.height
										if (
											(n.removeInner(t, o),
											(this.height -= l - n.height),
											i == o && (this.children.splice(r--, 1), (n.parent = null)),
											(e -= o) == 0)
										)
											break
										t = 0
									} else t -= i
								}
								if (
									this.size - e < 25 &&
									(this.children.length > 1 || !(this.children[0] instanceof rn))
								) {
									var a = []
									this.collapse(a), (this.children = [new rn(a)]), (this.children[0].parent = this)
								}
							},
							collapse: function (t) {
								for (var e = 0; e < this.children.length; ++e) this.children[e].collapse(t)
							},
							insertInner: function (t, e, r) {
								;(this.size += e.length), (this.height += r)
								for (var n = 0; n < this.children.length; ++n) {
									var i = this.children[n],
										o = i.chunkSize()
									if (t <= o) {
										if ((i.insertInner(t, e, r), i.lines && i.lines.length > 50)) {
											for (var l = (i.lines.length % 25) + 25, a = l; a < i.lines.length; ) {
												var s = new rn(i.lines.slice(a, (a += 25)))
												;(i.height -= s.height), this.children.splice(++n, 0, s), (s.parent = this)
											}
											;(i.lines = i.lines.slice(0, l)), this.maybeSpill()
										}
										break
									}
									t -= o
								}
							},
							maybeSpill: function () {
								if (!(this.children.length <= 10)) {
									var t = this
									do {
										var e = t.children.splice(t.children.length - 5, 5),
											r = new on(e)
										if (t.parent) {
											;(t.size -= r.size), (t.height -= r.height)
											var n = J(t.parent.children, t)
											t.parent.children.splice(n + 1, 0, r)
										} else {
											var i = new on(t.children)
											;(i.parent = t), (t.children = [i, r]), (t = i)
										}
										r.parent = t.parent
									} while (t.children.length > 10)
									t.parent.maybeSpill()
								}
							},
							iterN: function (t, e, r) {
								for (var n = 0; n < this.children.length; ++n) {
									var i = this.children[n],
										o = i.chunkSize()
									if (t < o) {
										var l = Math.min(e, o - t)
										if (i.iterN(t, l, r)) return !0
										if ((e -= l) == 0) break
										t = 0
									} else t -= o
								}
							}
						})
					var Kn = u(function (t, e, r) {
						if (r) for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n])
						;(this.doc = t), (this.node = e)
					}, 'LineWidget')
					;(Kn.prototype.clear = function () {
						var t = this.doc.cm,
							e = this.line.widgets,
							r = this.line,
							n = F(r)
						if (!(n == null || !e)) {
							for (var i = 0; i < e.length; ++i) e[i] == this && e.splice(i--, 1)
							e.length || (r.widgets = null)
							var o = Xe(this)
							Tt(r, Math.max(0, r.height - o)),
								t &&
									(ut(t, function () {
										$o(t, r, -o), Gt(t, n, 'widget')
									}),
									_(t, 'lineWidgetCleared', t, this, n))
						}
					}),
						(Kn.prototype.changed = function () {
							var t = this,
								e = this.height,
								r = this.doc.cm,
								n = this.line
							this.height = null
							var i = Xe(this) - e
							i &&
								(Ut(this.doc, n) || Tt(n, n.height + i),
								r &&
									ut(r, function () {
										;(r.curOp.forceUpdate = !0), $o(r, n, i), _(r, 'lineWidgetChanged', r, t, F(n))
									}))
						}),
						me(Kn)
					function $o(t, e, r) {
						Ht(e) < ((t.curOp && t.curOp.scrollTop) || t.doc.scrollTop) && Xr(t, r)
					}
					u($o, 'adjustScrollWhenAboveVisible')
					function rs(t, e, r, n) {
						var i = new Kn(t, r, n),
							o = t.cm
						return (
							o && i.noHScroll && (o.display.alignWidgets = !0),
							nn(t, e, 'widget', function (l) {
								var a = l.widgets || (l.widgets = [])
								if (
									(i.insertAt == null
										? a.push(i)
										: a.splice(Math.min(a.length, Math.max(0, i.insertAt)), 0, i),
									(i.line = l),
									o && !Ut(t, l))
								) {
									var s = Ht(l) < t.scrollTop
									Tt(l, l.height + Xe(i)), s && Xr(o, i.height), (o.curOp.forceUpdate = !0)
								}
								return !0
							}),
							o && _(o, 'lineWidgetAdded', o, i, typeof e == 'number' ? e : F(e)),
							i
						)
					}
					u(rs, 'addLineWidget')
					var is = 0,
						se = u(function (t, e) {
							;(this.lines = []), (this.type = e), (this.doc = t), (this.id = ++is)
						}, 'TextMarker')
					;(se.prototype.clear = function () {
						if (!this.explicitlyCleared) {
							var t = this.doc.cm,
								e = t && !t.curOp
							if ((e && le(t), bt(this, 'clear'))) {
								var r = this.find()
								r && _(this, 'clear', r.from, r.to)
							}
							for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
								var l = this.lines[o],
									a = Ge(l.markedSpans, this)
								t && !this.collapsed
									? Gt(t, F(l), 'text')
									: t && (a.to != null && (i = F(l)), a.from != null && (n = F(l))),
									(l.markedSpans = Yl(l.markedSpans, a)),
									a.from == null && this.collapsed && !Ut(this.doc, l) && t && Tt(l, be(t.display))
							}
							if (t && this.collapsed && !t.options.lineWrapping)
								for (var s = 0; s < this.lines.length; ++s) {
									var c = Ct(this.lines[s]),
										h = kn(c)
									h > t.display.maxLineLength &&
										((t.display.maxLine = c),
										(t.display.maxLineLength = h),
										(t.display.maxLineChanged = !0))
								}
							n != null && t && this.collapsed && at(t, n, i + 1),
								(this.lines.length = 0),
								(this.explicitlyCleared = !0),
								this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), t && Uo(t.doc)),
								t && _(t, 'markerCleared', t, this, n, i),
								e && ae(t),
								this.parent && this.parent.clear()
						}
					}),
						(se.prototype.find = function (t, e) {
							t == null && this.type == 'bookmark' && (t = 1)
							for (var r, n, i = 0; i < this.lines.length; ++i) {
								var o = this.lines[i],
									l = Ge(o.markedSpans, this)
								if (l.from != null && ((r = v(e ? o : F(o), l.from)), t == -1)) return r
								if (l.to != null && ((n = v(e ? o : F(o), l.to)), t == 1)) return n
							}
							return r && { from: r, to: n }
						}),
						(se.prototype.changed = function () {
							var t = this,
								e = this.find(-1, !0),
								r = this,
								n = this.doc.cm
							!e ||
								!n ||
								ut(n, function () {
									var i = e.line,
										o = F(e.line),
										l = Hr(n, o)
									if (
										(l && (io(l), (n.curOp.selectionChanged = n.curOp.forceUpdate = !0)),
										(n.curOp.updateMaxLine = !0),
										!Ut(r.doc, i) && r.height != null)
									) {
										var a = r.height
										r.height = null
										var s = Xe(r) - a
										s && Tt(i, i.height + s)
									}
									_(n, 'markerChanged', n, t)
								})
						}),
						(se.prototype.attachLine = function (t) {
							if (!this.lines.length && this.doc.cm) {
								var e = this.doc.cm.curOp
								;(!e.maybeHiddenMarkers || J(e.maybeHiddenMarkers, this) == -1) &&
									(e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(this)
							}
							this.lines.push(t)
						}),
						(se.prototype.detachLine = function (t) {
							if ((this.lines.splice(J(this.lines, t), 1), !this.lines.length && this.doc.cm)) {
								var e = this.doc.cm.curOp
								;(e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
							}
						}),
						me(se)
					function Oe(t, e, r, n, i) {
						if (n && n.shared) return os(t, e, r, n, i)
						if (t.cm && !t.cm.curOp) return q(t.cm, Oe)(t, e, r, n, i)
						var o = new se(t, i),
							l = N(e, r)
						if ((n && $t(n, o, !1), l > 0 || (l == 0 && o.clearWhenEmpty !== !1))) return o
						if (
							(o.replacedWith &&
								((o.collapsed = !0),
								(o.widgetNode = pe('span', [o.replacedWith], 'CodeMirror-widget')),
								n.handleMouseEvents || o.widgetNode.setAttribute('cm-ignore-events', 'true'),
								n.insertLeft && (o.widgetNode.insertLeft = !0)),
							o.collapsed)
						) {
							if (Ki(t, e.line, e, r, o) || (e.line != r.line && Ki(t, r.line, e, r, o)))
								throw new Error('Inserting collapsed marker partially overlapping an existing one')
							ql()
						}
						o.addToHistory && Fo(t, { from: e, to: r, origin: 'markText' }, t.sel, NaN)
						var a = e.line,
							s = t.cm,
							c
						if (
							(t.iter(a, r.line + 1, function (d) {
								s &&
									o.collapsed &&
									!s.options.lineWrapping &&
									Ct(d) == s.display.maxLine &&
									(c = !0),
									o.collapsed && a != e.line && Tt(d, 0),
									Zl(
										d,
										new xn(o, a == e.line ? e.ch : null, a == r.line ? r.ch : null),
										t.cm && t.cm.curOp
									),
									++a
							}),
							o.collapsed &&
								t.iter(e.line, r.line + 1, function (d) {
									Ut(t, d) && Tt(d, 0)
								}),
							o.clearOnEnter &&
								M(o, 'beforeCursorEnter', function () {
									return o.clear()
								}),
							o.readOnly &&
								(_l(), (t.history.done.length || t.history.undone.length) && t.clearHistory()),
							o.collapsed && ((o.id = ++is), (o.atomic = !0)),
							s)
						) {
							if ((c && (s.curOp.updateMaxLine = !0), o.collapsed)) at(s, e.line, r.line + 1)
							else if (
								o.className ||
								o.startStyle ||
								o.endStyle ||
								o.css ||
								o.attributes ||
								o.title
							)
								for (var h = e.line; h <= r.line; h++) Gt(s, h, 'text')
							o.atomic && Uo(s.doc), _(s, 'markerAdded', s, o)
						}
						return o
					}
					u(Oe, 'markText')
					var Vn = u(function (t, e) {
						;(this.markers = t), (this.primary = e)
						for (var r = 0; r < t.length; ++r) t[r].parent = this
					}, 'SharedTextMarker')
					;(Vn.prototype.clear = function () {
						if (!this.explicitlyCleared) {
							this.explicitlyCleared = !0
							for (var t = 0; t < this.markers.length; ++t) this.markers[t].clear()
							_(this, 'clear')
						}
					}),
						(Vn.prototype.find = function (t, e) {
							return this.primary.find(t, e)
						}),
						me(Vn)
					function os(t, e, r, n, i) {
						;(n = $t(n)), (n.shared = !1)
						var o = [Oe(t, e, r, n, i)],
							l = o[0],
							a = n.widgetNode
						return (
							_t(t, function (s) {
								a && (n.widgetNode = a.cloneNode(!0)), o.push(Oe(s, O(s, e), O(s, r), n, i))
								for (var c = 0; c < s.linked.length; ++c) if (s.linked[c].isParent) return
								l = W(o)
							}),
							new Vn(o, l)
						)
					}
					u(os, 'markTextShared')
					function Qo(t) {
						return t.findMarks(v(t.first, 0), t.clipPos(v(t.lastLine())), function (e) {
							return e.parent
						})
					}
					u(Qo, 'findSharedMarkers')
					function ls(t, e) {
						for (var r = 0; r < e.length; r++) {
							var n = e[r],
								i = n.find(),
								o = t.clipPos(i.from),
								l = t.clipPos(i.to)
							if (N(o, l)) {
								var a = Oe(t, o, l, n.primary, n.primary.type)
								n.markers.push(a), (a.parent = n)
							}
						}
					}
					u(ls, 'copySharedMarkers')
					function as(t) {
						for (
							var e = u(function (n) {
									var i = t[n],
										o = [i.primary.doc]
									_t(i.primary.doc, function (s) {
										return o.push(s)
									})
									for (var l = 0; l < i.markers.length; l++) {
										var a = i.markers[l]
										J(o, a.doc) == -1 && ((a.parent = null), i.markers.splice(l--, 1))
									}
								}, 'loop'),
								r = 0;
							r < t.length;
							r++
						)
							e(r)
					}
					u(as, 'detachSharedMarkers')
					var iu = 0,
						ct = u(function (t, e, r, n, i) {
							if (!(this instanceof ct)) return new ct(t, e, r, n, i)
							r == null && (r = 0),
								on.call(this, [new rn([new Ke('', null)])]),
								(this.first = r),
								(this.scrollTop = this.scrollLeft = 0),
								(this.cantEdit = !1),
								(this.cleanGeneration = 1),
								(this.modeFrontier = this.highlightFrontier = r)
							var o = v(r, 0)
							;(this.sel = jt(o)),
								(this.history = new In(null)),
								(this.id = ++iu),
								(this.modeOption = e),
								(this.lineSep = n),
								(this.direction = i == 'rtl' ? 'rtl' : 'ltr'),
								(this.extend = !1),
								typeof t == 'string' && (t = this.splitLines(t)),
								ni(this, { from: o, to: o, text: t }),
								tt(this, jt(o), Dt)
						}, 'Doc')
					;(ct.prototype = yi(on.prototype, {
						constructor: ct,
						iter: function (t, e, r) {
							r
								? this.iterN(t - this.first, e - t, r)
								: this.iterN(this.first, this.first + this.size, t)
						},
						insert: function (t, e) {
							for (var r = 0, n = 0; n < e.length; ++n) r += e[n].height
							this.insertInner(t - this.first, e, r)
						},
						remove: function (t, e) {
							this.removeInner(t - this.first, e)
						},
						getValue: function (t) {
							var e = yr(this, this.first, this.first + this.size)
							return t === !1 ? e : e.join(t || this.lineSeparator())
						},
						setValue: Y(function (t) {
							var e = v(this.first, 0),
								r = this.first + this.size - 1
							Me(
								this,
								{
									from: e,
									to: v(r, S(this, r).text.length),
									text: this.splitLines(t),
									origin: 'setValue',
									full: !0
								},
								!0
							),
								this.cm && Ye(this.cm, 0, 0),
								tt(this, jt(e), Dt)
						}),
						replaceRange: function (t, e, r, n) {
							;(e = O(this, e)), (r = r ? O(this, r) : e), Ne(this, t, e, r, n)
						},
						getRange: function (t, e, r) {
							var n = te(this, O(this, t), O(this, e))
							return r === !1 ? n : r === '' ? n.join('') : n.join(r || this.lineSeparator())
						},
						getLine: function (t) {
							var e = this.getLineHandle(t)
							return e && e.text
						},
						getLineHandle: function (t) {
							if (Be(this, t)) return S(this, t)
						},
						getLineNumber: function (t) {
							return F(t)
						},
						getLineHandleVisualStart: function (t) {
							return typeof t == 'number' && (t = S(this, t)), Ct(t)
						},
						lineCount: function () {
							return this.size
						},
						firstLine: function () {
							return this.first
						},
						lastLine: function () {
							return this.first + this.size - 1
						},
						clipPos: function (t) {
							return O(this, t)
						},
						getCursor: function (t) {
							var e = this.sel.primary(),
								r
							return (
								t == null || t == 'head'
									? (r = e.head)
									: t == 'anchor'
									? (r = e.anchor)
									: t == 'end' || t == 'to' || t === !1
									? (r = e.to())
									: (r = e.from()),
								r
							)
						},
						listSelections: function () {
							return this.sel.ranges
						},
						somethingSelected: function () {
							return this.sel.somethingSelected()
						},
						setCursor: Y(function (t, e, r) {
							Ro(this, O(this, typeof t == 'number' ? v(t, e || 0) : t), null, r)
						}),
						setSelection: Y(function (t, e, r) {
							Ro(this, O(this, t), O(this, e || t), r)
						}),
						extendSelection: Y(function (t, e, r) {
							zn(this, O(this, t), e && O(this, e), r)
						}),
						extendSelections: Y(function (t, e) {
							Io(this, Ai(this, t), e)
						}),
						extendSelectionsBy: Y(function (t, e) {
							var r = gn(this.sel.ranges, t)
							Io(this, Ai(this, r), e)
						}),
						setSelections: Y(function (t, e, r) {
							if (t.length) {
								for (var n = [], i = 0; i < t.length; i++)
									n[i] = new H(O(this, t[i].anchor), O(this, t[i].head || t[i].anchor))
								e == null && (e = Math.min(t.length - 1, this.sel.primIndex)),
									tt(this, Lt(this.cm, n, e), r)
							}
						}),
						addSelection: Y(function (t, e, r) {
							var n = this.sel.ranges.slice(0)
							n.push(new H(O(this, t), O(this, e || t))), tt(this, Lt(this.cm, n, n.length - 1), r)
						}),
						getSelection: function (t) {
							for (var e = this.sel.ranges, r, n = 0; n < e.length; n++) {
								var i = te(this, e[n].from(), e[n].to())
								r = r ? r.concat(i) : i
							}
							return t === !1 ? r : r.join(t || this.lineSeparator())
						},
						getSelections: function (t) {
							for (var e = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
								var i = te(this, r[n].from(), r[n].to())
								t !== !1 && (i = i.join(t || this.lineSeparator())), (e[n] = i)
							}
							return e
						},
						replaceSelection: function (t, e, r) {
							for (var n = [], i = 0; i < this.sel.ranges.length; i++) n[i] = t
							this.replaceSelections(n, e, r || '+input')
						},
						replaceSelections: Y(function (t, e, r) {
							for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
								var l = i.ranges[o]
								n[o] = { from: l.from(), to: l.to(), text: this.splitLines(t[o]), origin: r }
							}
							for (var a = e && e != 'end' && qa(this, n, e), s = n.length - 1; s >= 0; s--)
								Me(this, n[s])
							a ? zo(this, a) : this.cm && Ce(this.cm)
						}),
						undo: Y(function () {
							Gn(this, 'undo')
						}),
						redo: Y(function () {
							Gn(this, 'redo')
						}),
						undoSelection: Y(function () {
							Gn(this, 'undo', !0)
						}),
						redoSelection: Y(function () {
							Gn(this, 'redo', !0)
						}),
						setExtending: function (t) {
							this.extend = t
						},
						getExtending: function () {
							return this.extend
						},
						historySize: function () {
							for (var t = this.history, e = 0, r = 0, n = 0; n < t.done.length; n++)
								t.done[n].ranges || ++e
							for (var i = 0; i < t.undone.length; i++) t.undone[i].ranges || ++r
							return { undo: e, redo: r }
						},
						clearHistory: function () {
							var t = this
							;(this.history = new In(this.history)),
								_t(
									this,
									function (e) {
										return (e.history = t.history)
									},
									!0
								)
						},
						markClean: function () {
							this.cleanGeneration = this.changeGeneration(!0)
						},
						changeGeneration: function (t) {
							return (
								t &&
									(this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
								this.history.generation
							)
						},
						isClean: function (t) {
							return this.history.generation == (t || this.cleanGeneration)
						},
						getHistory: function () {
							return { done: ke(this.history.done), undone: ke(this.history.undone) }
						},
						setHistory: function (t) {
							var e = (this.history = new In(this.history))
							;(e.done = ke(t.done.slice(0), null, !0)),
								(e.undone = ke(t.undone.slice(0), null, !0))
						},
						setGutterMarker: Y(function (t, e, r) {
							return nn(this, t, 'gutter', function (n) {
								var i = n.gutterMarkers || (n.gutterMarkers = {})
								return (i[e] = r), !r && bi(i) && (n.gutterMarkers = null), !0
							})
						}),
						clearGutter: Y(function (t) {
							var e = this
							this.iter(function (r) {
								r.gutterMarkers &&
									r.gutterMarkers[t] &&
									nn(e, r, 'gutter', function () {
										return (
											(r.gutterMarkers[t] = null),
											bi(r.gutterMarkers) && (r.gutterMarkers = null),
											!0
										)
									})
							})
						}),
						lineInfo: function (t) {
							var e
							if (typeof t == 'number') {
								if (!Be(this, t) || ((e = t), (t = S(this, t)), !t)) return null
							} else if (((e = F(t)), e == null)) return null
							return {
								line: e,
								handle: t,
								text: t.text,
								gutterMarkers: t.gutterMarkers,
								textClass: t.textClass,
								bgClass: t.bgClass,
								wrapClass: t.wrapClass,
								widgets: t.widgets
							}
						},
						addLineClass: Y(function (t, e, r) {
							return nn(this, t, e == 'gutter' ? 'gutter' : 'class', function (n) {
								var i =
									e == 'text'
										? 'textClass'
										: e == 'background'
										? 'bgClass'
										: e == 'gutter'
										? 'gutterClass'
										: 'wrapClass'
								if (!n[i]) n[i] = r
								else {
									if (de(r).test(n[i])) return !1
									n[i] += ' ' + r
								}
								return !0
							})
						}),
						removeLineClass: Y(function (t, e, r) {
							return nn(this, t, e == 'gutter' ? 'gutter' : 'class', function (n) {
								var i =
										e == 'text'
											? 'textClass'
											: e == 'background'
											? 'bgClass'
											: e == 'gutter'
											? 'gutterClass'
											: 'wrapClass',
									o = n[i]
								if (o)
									if (r == null) n[i] = null
									else {
										var l = o.match(de(r))
										if (!l) return !1
										var a = l.index + l[0].length
										n[i] =
											o.slice(0, l.index) + (!l.index || a == o.length ? '' : ' ') + o.slice(a) ||
											null
									}
								else return !1
								return !0
							})
						}),
						addLineWidget: Y(function (t, e, r) {
							return rs(this, t, e, r)
						}),
						removeLineWidget: function (t) {
							t.clear()
						},
						markText: function (t, e, r) {
							return Oe(this, O(this, t), O(this, e), r, (r && r.type) || 'range')
						},
						setBookmark: function (t, e) {
							var r = {
								replacedWith: e && (e.nodeType == null ? e.widget : e),
								insertLeft: e && e.insertLeft,
								clearWhenEmpty: !1,
								shared: e && e.shared,
								handleMouseEvents: e && e.handleMouseEvents
							}
							return (t = O(this, t)), Oe(this, t, t, r, 'bookmark')
						},
						findMarksAt: function (t) {
							t = O(this, t)
							var e = [],
								r = S(this, t.line).markedSpans
							if (r)
								for (var n = 0; n < r.length; ++n) {
									var i = r[n]
									;(i.from == null || i.from <= t.ch) &&
										(i.to == null || i.to >= t.ch) &&
										e.push(i.marker.parent || i.marker)
								}
							return e
						},
						findMarks: function (t, e, r) {
							;(t = O(this, t)), (e = O(this, e))
							var n = [],
								i = t.line
							return (
								this.iter(t.line, e.line + 1, function (o) {
									var l = o.markedSpans
									if (l)
										for (var a = 0; a < l.length; a++) {
											var s = l[a]
											!(
												(s.to != null && i == t.line && t.ch >= s.to) ||
												(s.from == null && i != t.line) ||
												(s.from != null && i == e.line && s.from >= e.ch)
											) &&
												(!r || r(s.marker)) &&
												n.push(s.marker.parent || s.marker)
										}
									++i
								}),
								n
							)
						},
						getAllMarks: function () {
							var t = []
							return (
								this.iter(function (e) {
									var r = e.markedSpans
									if (r) for (var n = 0; n < r.length; ++n) r[n].from != null && t.push(r[n].marker)
								}),
								t
							)
						},
						posFromIndex: function (t) {
							var e,
								r = this.first,
								n = this.lineSeparator().length
							return (
								this.iter(function (i) {
									var o = i.text.length + n
									if (o > t) return (e = t), !0
									;(t -= o), ++r
								}),
								O(this, v(r, e))
							)
						},
						indexFromPos: function (t) {
							t = O(this, t)
							var e = t.ch
							if (t.line < this.first || t.ch < 0) return 0
							var r = this.lineSeparator().length
							return (
								this.iter(this.first, t.line, function (n) {
									e += n.text.length + r
								}),
								e
							)
						},
						copy: function (t) {
							var e = new ct(
								yr(this, this.first, this.first + this.size),
								this.modeOption,
								this.first,
								this.lineSep,
								this.direction
							)
							return (
								(e.scrollTop = this.scrollTop),
								(e.scrollLeft = this.scrollLeft),
								(e.sel = this.sel),
								(e.extend = !1),
								t &&
									((e.history.undoDepth = this.history.undoDepth), e.setHistory(this.getHistory())),
								e
							)
						},
						linkedDoc: function (t) {
							t || (t = {})
							var e = this.first,
								r = this.first + this.size
							t.from != null && t.from > e && (e = t.from), t.to != null && t.to < r && (r = t.to)
							var n = new ct(
								yr(this, e, r),
								t.mode || this.modeOption,
								e,
								this.lineSep,
								this.direction
							)
							return (
								t.sharedHist && (n.history = this.history),
								(this.linked || (this.linked = [])).push({ doc: n, sharedHist: t.sharedHist }),
								(n.linked = [{ doc: this, isParent: !0, sharedHist: t.sharedHist }]),
								ls(n, Qo(this)),
								n
							)
						},
						unlinkDoc: function (t) {
							if ((t instanceof R && (t = t.doc), this.linked))
								for (var e = 0; e < this.linked.length; ++e) {
									var r = this.linked[e]
									if (r.doc == t) {
										this.linked.splice(e, 1), t.unlinkDoc(this), as(Qo(this))
										break
									}
								}
							if (t.history == this.history) {
								var n = [t.id]
								_t(
									t,
									function (i) {
										return n.push(i.id)
									},
									!0
								),
									(t.history = new In(null)),
									(t.history.done = ke(this.history.done, n)),
									(t.history.undone = ke(this.history.undone, n))
							}
						},
						iterLinkedDocs: function (t) {
							_t(this, t)
						},
						getMode: function () {
							return this.mode
						},
						getEditor: function () {
							return this.cm
						},
						splitLines: function (t) {
							return this.lineSep ? t.split(this.lineSep) : Ti(t)
						},
						lineSeparator: function () {
							return (
								this.lineSep ||
								`
`
							)
						},
						setDirection: Y(function (t) {
							t != 'rtl' && (t = 'ltr'),
								t != this.direction &&
									((this.direction = t),
									this.iter(function (e) {
										return (e.order = null)
									}),
									this.cm && Ya(this.cm))
						})
					})),
						(ct.prototype.eachLine = ct.prototype.iter)
					var ss = 0
					function us(t) {
						var e = this
						if ((Jo(e), !(X(e, t) || Ft(e.display, t)))) {
							lt(t), A && (ss = +new Date())
							var r = re(e, t, !0),
								n = t.dataTransfer.files
							if (!(!r || e.isReadOnly()))
								if (n && n.length && window.FileReader && window.File)
									for (
										var i = n.length,
											o = Array(i),
											l = 0,
											a = u(function () {
												++l == i &&
													q(e, function () {
														r = O(e.doc, r)
														var f = {
															from: r,
															to: r,
															text: e.doc.splitLines(
																o
																	.filter(function (g) {
																		return g != null
																	})
																	.join(e.doc.lineSeparator())
															),
															origin: 'paste'
														}
														Me(e.doc, f), zo(e.doc, jt(O(e.doc, r), O(e.doc, Xt(f))))
													})()
											}, 'markAsReadAndPasteIfAllFilesAreRead'),
											s = u(function (f, g) {
												if (
													e.options.allowDropFileTypes &&
													J(e.options.allowDropFileTypes, f.type) == -1
												) {
													a()
													return
												}
												var m = new FileReader()
												;(m.onerror = function () {
													return a()
												}),
													(m.onload = function () {
														var y = m.result
														if (/[\x00-\x08\x0e-\x1f]{2}/.test(y)) {
															a()
															return
														}
														;(o[g] = y), a()
													}),
													m.readAsText(f)
											}, 'readTextFromFile'),
											c = 0;
										c < n.length;
										c++
									)
										s(n[c], c)
								else {
									if (e.state.draggingText && e.doc.sel.contains(r) > -1) {
										e.state.draggingText(t),
											setTimeout(function () {
												return e.display.input.focus()
											}, 20)
										return
									}
									try {
										var h = t.dataTransfer.getData('Text')
										if (h) {
											var d
											if (
												(e.state.draggingText &&
													!e.state.draggingText.copy &&
													(d = e.listSelections()),
												Bn(e.doc, jt(r, r)),
												d)
											)
												for (var p = 0; p < d.length; ++p)
													Ne(e.doc, '', d[p].anchor, d[p].head, 'drag')
											e.replaceSelection(h, 'around', 'paste'), e.display.input.focus()
										}
									} catch {}
								}
						}
					}
					u(us, 'onDrop')
					function cs(t, e) {
						if (A && (!t.state.draggingText || +new Date() - ss < 100)) {
							Ie(e)
							return
						}
						if (
							!(X(t, e) || Ft(t.display, e)) &&
							(e.dataTransfer.setData('Text', t.getSelection()),
							(e.dataTransfer.effectAllowed = 'copyMove'),
							e.dataTransfer.setDragImage && !rr)
						) {
							var r = k('img', null, null, 'position: fixed; left: 0; top: 0;')
							;(r.src =
								'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
								kt &&
									((r.width = r.height = 1),
									t.display.wrapper.appendChild(r),
									(r._top = r.offsetTop)),
								e.dataTransfer.setDragImage(r, 0, 0),
								kt && r.parentNode.removeChild(r)
						}
					}
					u(cs, 'onDragStart')
					function hs(t, e) {
						var r = re(t, e)
						if (r) {
							var n = document.createDocumentFragment()
							Ur(t, r, n),
								t.display.dragCursor ||
									((t.display.dragCursor = k(
										'div',
										null,
										'CodeMirror-cursors CodeMirror-dragcursors'
									)),
									t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)),
								gt(t.display.dragCursor, n)
						}
					}
					u(hs, 'onDragOver')
					function Jo(t) {
						t.display.dragCursor &&
							(t.display.lineSpace.removeChild(t.display.dragCursor), (t.display.dragCursor = null))
					}
					u(Jo, 'clearDragCursor')
					function tl(t) {
						if (document.getElementsByClassName) {
							for (
								var e = document.getElementsByClassName('CodeMirror'), r = [], n = 0;
								n < e.length;
								n++
							) {
								var i = e[n].CodeMirror
								i && r.push(i)
							}
							r.length &&
								r[0].operation(function () {
									for (var o = 0; o < r.length; o++) t(r[o])
								})
						}
					}
					u(tl, 'forEachCodeMirror')
					var ds = !1
					function fs() {
						ds || (ps(), (ds = !0))
					}
					u(fs, 'ensureGlobalHandlers')
					function ps() {
						var t
						M(window, 'resize', function () {
							t == null &&
								(t = setTimeout(function () {
									;(t = null), tl(gs)
								}, 100))
						}),
							M(window, 'blur', function () {
								return tl(xe)
							})
					}
					u(ps, 'registerGlobalHandlers')
					function gs(t) {
						var e = t.display
						;(e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null),
							(e.scrollbarsClipped = !1),
							t.setSize()
					}
					u(gs, 'onResize')
					for (
						var ue = {
								3: 'Pause',
								8: 'Backspace',
								9: 'Tab',
								13: 'Enter',
								16: 'Shift',
								17: 'Ctrl',
								18: 'Alt',
								19: 'Pause',
								20: 'CapsLock',
								27: 'Esc',
								32: 'Space',
								33: 'PageUp',
								34: 'PageDown',
								35: 'End',
								36: 'Home',
								37: 'Left',
								38: 'Up',
								39: 'Right',
								40: 'Down',
								44: 'PrintScrn',
								45: 'Insert',
								46: 'Delete',
								59: ';',
								61: '=',
								91: 'Mod',
								92: 'Mod',
								93: 'Mod',
								106: '*',
								107: '=',
								109: '-',
								110: '.',
								111: '/',
								145: 'ScrollLock',
								173: '-',
								186: ';',
								187: '=',
								188: ',',
								189: '-',
								190: '.',
								191: '/',
								192: '`',
								219: '[',
								220: '\\',
								221: ']',
								222: "'",
								224: 'Mod',
								63232: 'Up',
								63233: 'Down',
								63234: 'Left',
								63235: 'Right',
								63272: 'Delete',
								63273: 'Home',
								63275: 'End',
								63276: 'PageUp',
								63277: 'PageDown',
								63302: 'Insert'
							},
							jn = 0;
						jn < 10;
						jn++
					)
						ue[jn + 48] = ue[jn + 96] = String(jn)
					for (var li = 65; li <= 90; li++) ue[li] = String.fromCharCode(li)
					for (var Xn = 1; Xn <= 12; Xn++) ue[Xn + 111] = ue[Xn + 63235] = 'F' + Xn
					var qt = {}
					;(qt.basic = {
						Left: 'goCharLeft',
						Right: 'goCharRight',
						Up: 'goLineUp',
						Down: 'goLineDown',
						End: 'goLineEnd',
						Home: 'goLineStartSmart',
						PageUp: 'goPageUp',
						PageDown: 'goPageDown',
						Delete: 'delCharAfter',
						Backspace: 'delCharBefore',
						'Shift-Backspace': 'delCharBefore',
						Tab: 'defaultTab',
						'Shift-Tab': 'indentAuto',
						Enter: 'newlineAndIndent',
						Insert: 'toggleOverwrite',
						Esc: 'singleSelection'
					}),
						(qt.pcDefault = {
							'Ctrl-A': 'selectAll',
							'Ctrl-D': 'deleteLine',
							'Ctrl-Z': 'undo',
							'Shift-Ctrl-Z': 'redo',
							'Ctrl-Y': 'redo',
							'Ctrl-Home': 'goDocStart',
							'Ctrl-End': 'goDocEnd',
							'Ctrl-Up': 'goLineUp',
							'Ctrl-Down': 'goLineDown',
							'Ctrl-Left': 'goGroupLeft',
							'Ctrl-Right': 'goGroupRight',
							'Alt-Left': 'goLineStart',
							'Alt-Right': 'goLineEnd',
							'Ctrl-Backspace': 'delGroupBefore',
							'Ctrl-Delete': 'delGroupAfter',
							'Ctrl-S': 'save',
							'Ctrl-F': 'find',
							'Ctrl-G': 'findNext',
							'Shift-Ctrl-G': 'findPrev',
							'Shift-Ctrl-F': 'replace',
							'Shift-Ctrl-R': 'replaceAll',
							'Ctrl-[': 'indentLess',
							'Ctrl-]': 'indentMore',
							'Ctrl-U': 'undoSelection',
							'Shift-Ctrl-U': 'redoSelection',
							'Alt-U': 'redoSelection',
							fallthrough: 'basic'
						}),
						(qt.emacsy = {
							'Ctrl-F': 'goCharRight',
							'Ctrl-B': 'goCharLeft',
							'Ctrl-P': 'goLineUp',
							'Ctrl-N': 'goLineDown',
							'Ctrl-A': 'goLineStart',
							'Ctrl-E': 'goLineEnd',
							'Ctrl-V': 'goPageDown',
							'Shift-Ctrl-V': 'goPageUp',
							'Ctrl-D': 'delCharAfter',
							'Ctrl-H': 'delCharBefore',
							'Alt-Backspace': 'delWordBefore',
							'Ctrl-K': 'killLine',
							'Ctrl-T': 'transposeChars',
							'Ctrl-O': 'openLine'
						}),
						(qt.macDefault = {
							'Cmd-A': 'selectAll',
							'Cmd-D': 'deleteLine',
							'Cmd-Z': 'undo',
							'Shift-Cmd-Z': 'redo',
							'Cmd-Y': 'redo',
							'Cmd-Home': 'goDocStart',
							'Cmd-Up': 'goDocStart',
							'Cmd-End': 'goDocEnd',
							'Cmd-Down': 'goDocEnd',
							'Alt-Left': 'goGroupLeft',
							'Alt-Right': 'goGroupRight',
							'Cmd-Left': 'goLineLeft',
							'Cmd-Right': 'goLineRight',
							'Alt-Backspace': 'delGroupBefore',
							'Ctrl-Alt-Backspace': 'delGroupAfter',
							'Alt-Delete': 'delGroupAfter',
							'Cmd-S': 'save',
							'Cmd-F': 'find',
							'Cmd-G': 'findNext',
							'Shift-Cmd-G': 'findPrev',
							'Cmd-Alt-F': 'replace',
							'Shift-Cmd-Alt-F': 'replaceAll',
							'Cmd-[': 'indentLess',
							'Cmd-]': 'indentMore',
							'Cmd-Backspace': 'delWrappedLineLeft',
							'Cmd-Delete': 'delWrappedLineRight',
							'Cmd-U': 'undoSelection',
							'Shift-Cmd-U': 'redoSelection',
							'Ctrl-Up': 'goDocStart',
							'Ctrl-Down': 'goDocEnd',
							fallthrough: ['basic', 'emacsy']
						}),
						(qt.default = xt ? qt.macDefault : qt.pcDefault)
					function ms(t) {
						var e = t.split(/-(?!$)/)
						t = e[e.length - 1]
						for (var r, n, i, o, l = 0; l < e.length - 1; l++) {
							var a = e[l]
							if (/^(cmd|meta|m)$/i.test(a)) o = !0
							else if (/^a(lt)?$/i.test(a)) r = !0
							else if (/^(c|ctrl|control)$/i.test(a)) n = !0
							else if (/^s(hift)?$/i.test(a)) i = !0
							else throw new Error('Unrecognized modifier name: ' + a)
						}
						return (
							r && (t = 'Alt-' + t),
							n && (t = 'Ctrl-' + t),
							o && (t = 'Cmd-' + t),
							i && (t = 'Shift-' + t),
							t
						)
					}
					u(ms, 'normalizeKeyName')
					function vs(t) {
						var e = {}
						for (var r in t)
							if (t.hasOwnProperty(r)) {
								var n = t[r]
								if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue
								if (n == '...') {
									delete t[r]
									continue
								}
								for (var i = gn(r.split(' '), ms), o = 0; o < i.length; o++) {
									var l = void 0,
										a = void 0
									o == i.length - 1
										? ((a = i.join(' ')), (l = n))
										: ((a = i.slice(0, o + 1).join(' ')), (l = '...'))
									var s = e[a]
									if (!s) e[a] = l
									else if (s != l) throw new Error('Inconsistent bindings for ' + a)
								}
								delete t[r]
							}
						for (var c in e) t[c] = e[c]
						return t
					}
					u(vs, 'normalizeKeyMap')
					function De(t, e, r, n) {
						e = _n(e)
						var i = e.call ? e.call(t, n) : e[t]
						if (i === !1) return 'nothing'
						if (i === '...') return 'multi'
						if (i != null && r(i)) return 'handled'
						if (e.fallthrough) {
							if (Object.prototype.toString.call(e.fallthrough) != '[object Array]')
								return De(t, e.fallthrough, r, n)
							for (var o = 0; o < e.fallthrough.length; o++) {
								var l = De(t, e.fallthrough[o], r, n)
								if (l) return l
							}
						}
					}
					u(De, 'lookupKey')
					function el(t) {
						var e = typeof t == 'string' ? t : ue[t.keyCode]
						return e == 'Ctrl' || e == 'Alt' || e == 'Shift' || e == 'Mod'
					}
					u(el, 'isModifierKey')
					function nl(t, e, r) {
						var n = t
						return (
							e.altKey && n != 'Alt' && (t = 'Alt-' + t),
							(Al ? e.metaKey : e.ctrlKey) && n != 'Ctrl' && (t = 'Ctrl-' + t),
							(Al ? e.ctrlKey : e.metaKey) && n != 'Mod' && (t = 'Cmd-' + t),
							!r && e.shiftKey && n != 'Shift' && (t = 'Shift-' + t),
							t
						)
					}
					u(nl, 'addModifierNames')
					function rl(t, e) {
						if (kt && t.keyCode == 34 && t.char) return !1
						var r = ue[t.keyCode]
						return r == null || t.altGraphKey
							? !1
							: (t.keyCode == 3 && t.code && (r = t.code), nl(r, t, e))
					}
					u(rl, 'keyName')
					function _n(t) {
						return typeof t == 'string' ? qt[t] : t
					}
					u(_n, 'getKeyMap')
					function Ae(t, e) {
						for (var r = t.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
							for (var o = e(r[i]); n.length && N(o.from, W(n).to) <= 0; ) {
								var l = n.pop()
								if (N(l.from, o.from) < 0) {
									o.from = l.from
									break
								}
							}
							n.push(o)
						}
						ut(t, function () {
							for (var a = n.length - 1; a >= 0; a--) Ne(t.doc, '', n[a].from, n[a].to, '+delete')
							Ce(t)
						})
					}
					u(Ae, 'deleteNearSelection')
					function ai(t, e, r) {
						var n = wi(t.text, e + r, r)
						return n < 0 || n > t.text.length ? null : n
					}
					u(ai, 'moveCharLogically')
					function si(t, e, r) {
						var n = ai(t, e.ch, r)
						return n == null ? null : new v(e.line, n, r < 0 ? 'after' : 'before')
					}
					u(si, 'moveLogically')
					function ui(t, e, r, n, i) {
						if (t) {
							e.doc.direction == 'rtl' && (i = -i)
							var o = At(r, e.doc.direction)
							if (o) {
								var l = i < 0 ? W(o) : o[0],
									a = i < 0 == (l.level == 1),
									s = a ? 'after' : 'before',
									c
								if (l.level > 0 || e.doc.direction == 'rtl') {
									var h = ve(e, r)
									c = i < 0 ? r.text.length - 1 : 0
									var d = Nt(e, h, c).top
									;(c = Pe(
										function (p) {
											return Nt(e, h, p).top == d
										},
										i < 0 == (l.level == 1) ? l.from : l.to - 1,
										c
									)),
										s == 'before' && (c = ai(r, c, 1))
								} else c = i < 0 ? l.to : l.from
								return new v(n, c, s)
							}
						}
						return new v(n, i < 0 ? r.text.length : 0, i < 0 ? 'before' : 'after')
					}
					u(ui, 'endOfLine')
					function ys(t, e, r, n) {
						var i = At(e, t.doc.direction)
						if (!i) return si(e, r, n)
						r.ch >= e.text.length
							? ((r.ch = e.text.length), (r.sticky = 'before'))
							: r.ch <= 0 && ((r.ch = 0), (r.sticky = 'after'))
						var o = Ee(i, r.ch, r.sticky),
							l = i[o]
						if (
							t.doc.direction == 'ltr' &&
							l.level % 2 == 0 &&
							(n > 0 ? l.to > r.ch : l.from < r.ch)
						)
							return si(e, r, n)
						var a = u(function (b, x) {
								return ai(e, b instanceof v ? b.ch : b, x)
							}, 'mv'),
							s,
							c = u(function (b) {
								return t.options.lineWrapping
									? ((s = s || ve(t, e)), ho(t, e, s, b))
									: { begin: 0, end: e.text.length }
							}, 'getWrappedLineExtent'),
							h = c(r.sticky == 'before' ? a(r, -1) : r.ch)
						if (t.doc.direction == 'rtl' || l.level == 1) {
							var d = (l.level == 1) == n < 0,
								p = a(r, d ? 1 : -1)
							if (p != null && (d ? p <= l.to && p <= h.end : p >= l.from && p >= h.begin)) {
								var f = d ? 'before' : 'after'
								return new v(r.line, p, f)
							}
						}
						var g = u(function (b, x, w) {
								for (
									var C = u(function (E, $) {
										return $ ? new v(r.line, a(E, 1), 'before') : new v(r.line, E, 'after')
									}, 'getRes');
									b >= 0 && b < i.length;
									b += x
								) {
									var T = i[b],
										L = x > 0 == (T.level != 1),
										D = L ? w.begin : a(w.end, -1)
									if (
										(T.from <= D && D < T.to) ||
										((D = L ? T.from : a(T.to, -1)), w.begin <= D && D < w.end)
									)
										return C(D, L)
								}
							}, 'searchInVisualLine'),
							m = g(o + n, n, h)
						if (m) return m
						var y = n > 0 ? h.end : a(h.begin, -1)
						return y != null &&
							!(n > 0 && y == e.text.length) &&
							((m = g(n > 0 ? 0 : i.length - 1, n, c(y))), m)
							? m
							: null
					}
					u(ys, 'moveVisually')
					var qn = {
						selectAll: Vo,
						singleSelection: function (t) {
							return t.setSelection(t.getCursor('anchor'), t.getCursor('head'), Dt)
						},
						killLine: function (t) {
							return Ae(t, function (e) {
								if (e.empty()) {
									var r = S(t.doc, e.head.line).text.length
									return e.head.ch == r && e.head.line < t.lastLine()
										? { from: e.head, to: v(e.head.line + 1, 0) }
										: { from: e.head, to: v(e.head.line, r) }
								} else return { from: e.from(), to: e.to() }
							})
						},
						deleteLine: function (t) {
							return Ae(t, function (e) {
								return { from: v(e.from().line, 0), to: O(t.doc, v(e.to().line + 1, 0)) }
							})
						},
						delLineLeft: function (t) {
							return Ae(t, function (e) {
								return { from: v(e.from().line, 0), to: e.from() }
							})
						},
						delWrappedLineLeft: function (t) {
							return Ae(t, function (e) {
								var r = t.charCoords(e.head, 'div').top + 5,
									n = t.coordsChar({ left: 0, top: r }, 'div')
								return { from: n, to: e.from() }
							})
						},
						delWrappedLineRight: function (t) {
							return Ae(t, function (e) {
								var r = t.charCoords(e.head, 'div').top + 5,
									n = t.coordsChar({ left: t.display.lineDiv.offsetWidth + 100, top: r }, 'div')
								return { from: e.from(), to: n }
							})
						},
						undo: function (t) {
							return t.undo()
						},
						redo: function (t) {
							return t.redo()
						},
						undoSelection: function (t) {
							return t.undoSelection()
						},
						redoSelection: function (t) {
							return t.redoSelection()
						},
						goDocStart: function (t) {
							return t.extendSelection(v(t.firstLine(), 0))
						},
						goDocEnd: function (t) {
							return t.extendSelection(v(t.lastLine()))
						},
						goLineStart: function (t) {
							return t.extendSelectionsBy(
								function (e) {
									return il(t, e.head.line)
								},
								{ origin: '+move', bias: 1 }
							)
						},
						goLineStartSmart: function (t) {
							return t.extendSelectionsBy(
								function (e) {
									return ol(t, e.head)
								},
								{ origin: '+move', bias: 1 }
							)
						},
						goLineEnd: function (t) {
							return t.extendSelectionsBy(
								function (e) {
									return bs(t, e.head.line)
								},
								{ origin: '+move', bias: -1 }
							)
						},
						goLineRight: function (t) {
							return t.extendSelectionsBy(function (e) {
								var r = t.cursorCoords(e.head, 'div').top + 5
								return t.coordsChar({ left: t.display.lineDiv.offsetWidth + 100, top: r }, 'div')
							}, pn)
						},
						goLineLeft: function (t) {
							return t.extendSelectionsBy(function (e) {
								var r = t.cursorCoords(e.head, 'div').top + 5
								return t.coordsChar({ left: 0, top: r }, 'div')
							}, pn)
						},
						goLineLeftSmart: function (t) {
							return t.extendSelectionsBy(function (e) {
								var r = t.cursorCoords(e.head, 'div').top + 5,
									n = t.coordsChar({ left: 0, top: r }, 'div')
								return n.ch < t.getLine(n.line).search(/\S/) ? ol(t, e.head) : n
							}, pn)
						},
						goLineUp: function (t) {
							return t.moveV(-1, 'line')
						},
						goLineDown: function (t) {
							return t.moveV(1, 'line')
						},
						goPageUp: function (t) {
							return t.moveV(-1, 'page')
						},
						goPageDown: function (t) {
							return t.moveV(1, 'page')
						},
						goCharLeft: function (t) {
							return t.moveH(-1, 'char')
						},
						goCharRight: function (t) {
							return t.moveH(1, 'char')
						},
						goColumnLeft: function (t) {
							return t.moveH(-1, 'column')
						},
						goColumnRight: function (t) {
							return t.moveH(1, 'column')
						},
						goWordLeft: function (t) {
							return t.moveH(-1, 'word')
						},
						goGroupRight: function (t) {
							return t.moveH(1, 'group')
						},
						goGroupLeft: function (t) {
							return t.moveH(-1, 'group')
						},
						goWordRight: function (t) {
							return t.moveH(1, 'word')
						},
						delCharBefore: function (t) {
							return t.deleteH(-1, 'codepoint')
						},
						delCharAfter: function (t) {
							return t.deleteH(1, 'char')
						},
						delWordBefore: function (t) {
							return t.deleteH(-1, 'word')
						},
						delWordAfter: function (t) {
							return t.deleteH(1, 'word')
						},
						delGroupBefore: function (t) {
							return t.deleteH(-1, 'group')
						},
						delGroupAfter: function (t) {
							return t.deleteH(1, 'group')
						},
						indentAuto: function (t) {
							return t.indentSelection('smart')
						},
						indentMore: function (t) {
							return t.indentSelection('add')
						},
						indentLess: function (t) {
							return t.indentSelection('subtract')
						},
						insertTab: function (t) {
							return t.replaceSelection('	')
						},
						insertSoftTab: function (t) {
							for (
								var e = [], r = t.listSelections(), n = t.options.tabSize, i = 0;
								i < r.length;
								i++
							) {
								var o = r[i].from(),
									l = yt(t.getLine(o.line), o.ch, n)
								e.push(cr(n - (l % n)))
							}
							t.replaceSelections(e)
						},
						defaultTab: function (t) {
							t.somethingSelected() ? t.indentSelection('add') : t.execCommand('insertTab')
						},
						transposeChars: function (t) {
							return ut(t, function () {
								for (var e = t.listSelections(), r = [], n = 0; n < e.length; n++)
									if (e[n].empty()) {
										var i = e[n].head,
											o = S(t.doc, i.line).text
										if (o) {
											if ((i.ch == o.length && (i = new v(i.line, i.ch - 1)), i.ch > 0))
												(i = new v(i.line, i.ch + 1)),
													t.replaceRange(
														o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
														v(i.line, i.ch - 2),
														i,
														'+transpose'
													)
											else if (i.line > t.doc.first) {
												var l = S(t.doc, i.line - 1).text
												l &&
													((i = new v(i.line, 1)),
													t.replaceRange(
														o.charAt(0) + t.doc.lineSeparator() + l.charAt(l.length - 1),
														v(i.line - 1, l.length - 1),
														i,
														'+transpose'
													))
											}
										}
										r.push(new H(i, i))
									}
								t.setSelections(r)
							})
						},
						newlineAndIndent: function (t) {
							return ut(t, function () {
								for (var e = t.listSelections(), r = e.length - 1; r >= 0; r--)
									t.replaceRange(t.doc.lineSeparator(), e[r].anchor, e[r].head, '+input')
								e = t.listSelections()
								for (var n = 0; n < e.length; n++) t.indentLine(e[n].from().line, null, !0)
								Ce(t)
							})
						},
						openLine: function (t) {
							return t.replaceSelection(
								`
`,
								'start'
							)
						},
						toggleOverwrite: function (t) {
							return t.toggleOverwrite()
						}
					}
					function il(t, e) {
						var r = S(t.doc, e),
							n = Ct(r)
						return n != r && (e = F(n)), ui(!0, t, n, e, 1)
					}
					u(il, 'lineStart')
					function bs(t, e) {
						var r = S(t.doc, e),
							n = ea(r)
						return n != r && (e = F(n)), ui(!0, t, r, e, -1)
					}
					u(bs, 'lineEnd')
					function ol(t, e) {
						var r = il(t, e.line),
							n = S(t.doc, r.line),
							i = At(n, t.doc.direction)
						if (!i || i[0].level == 0) {
							var o = Math.max(r.ch, n.text.search(/\S/)),
								l = e.line == r.line && e.ch <= o && e.ch
							return v(r.line, l ? 0 : o, r.sticky)
						}
						return r
					}
					u(ol, 'lineStartSmart')
					function Yn(t, e, r) {
						if (typeof e == 'string' && ((e = qn[e]), !e)) return !1
						t.display.input.ensurePolled()
						var n = t.display.shift,
							i = !1
						try {
							t.isReadOnly() && (t.state.suppressEdits = !0),
								r && (t.display.shift = !1),
								(i = e(t) != ar)
						} finally {
							;(t.display.shift = n), (t.state.suppressEdits = !1)
						}
						return i
					}
					u(Yn, 'doHandleBinding')
					function ws(t, e, r) {
						for (var n = 0; n < t.state.keyMaps.length; n++) {
							var i = De(e, t.state.keyMaps[n], r, t)
							if (i) return i
						}
						return (
							(t.options.extraKeys && De(e, t.options.extraKeys, r, t)) ||
							De(e, t.options.keyMap, r, t)
						)
					}
					u(ws, 'lookupKeyForEditor')
					var ou = new Qt()
					function ln(t, e, r, n) {
						var i = t.state.keySeq
						if (i) {
							if (el(e)) return 'handled'
							if (
								(/\'$/.test(e)
									? (t.state.keySeq = null)
									: ou.set(50, function () {
											t.state.keySeq == i && ((t.state.keySeq = null), t.display.input.reset())
									  }),
								ll(t, i + ' ' + e, r, n))
							)
								return !0
						}
						return ll(t, e, r, n)
					}
					u(ln, 'dispatchKey')
					function ll(t, e, r, n) {
						var i = ws(t, e, n)
						return (
							i == 'multi' && (t.state.keySeq = e),
							i == 'handled' && _(t, 'keyHandled', t, e, r),
							(i == 'handled' || i == 'multi') && (lt(r), Gr(t)),
							!!i
						)
					}
					u(ll, 'dispatchKeyInner')
					function al(t, e) {
						var r = rl(e, !0)
						return r
							? e.shiftKey && !t.state.keySeq
								? ln(t, 'Shift-' + r, e, function (n) {
										return Yn(t, n, !0)
								  }) ||
								  ln(t, r, e, function (n) {
										if (typeof n == 'string' ? /^go[A-Z]/.test(n) : n.motion) return Yn(t, n)
								  })
								: ln(t, r, e, function (n) {
										return Yn(t, n)
								  })
							: !1
					}
					u(al, 'handleKeyBinding')
					function xs(t, e, r) {
						return ln(t, "'" + r + "'", e, function (n) {
							return Yn(t, n, !0)
						})
					}
					u(xs, 'handleCharBinding')
					var sl = null
					function ul(t) {
						var e = this
						if (
							!(t.target && t.target != e.display.input.getField()) &&
							((e.curOp.focus = vt()), !X(e, t))
						) {
							A && I < 11 && t.keyCode == 27 && (t.returnValue = !1)
							var r = t.keyCode
							e.display.shift = r == 16 || t.shiftKey
							var n = al(e, t)
							kt &&
								((sl = n ? r : null),
								!n &&
									r == 88 &&
									!tu &&
									(xt ? t.metaKey : t.ctrlKey) &&
									e.replaceSelection('', null, 'cut')),
								It &&
									!xt &&
									!n &&
									r == 46 &&
									t.shiftKey &&
									!t.ctrlKey &&
									document.execCommand &&
									document.execCommand('cut'),
								r == 18 && !/\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) && Cs(e)
						}
					}
					u(ul, 'onKeyDown')
					function Cs(t) {
						var e = t.display.lineDiv
						Zt(e, 'CodeMirror-crosshair')
						function r(n) {
							;(n.keyCode == 18 || !n.altKey) &&
								(fe(e, 'CodeMirror-crosshair'),
								mt(document, 'keyup', r),
								mt(document, 'mouseover', r))
						}
						u(r, 'up'), M(document, 'keyup', r), M(document, 'mouseover', r)
					}
					u(Cs, 'showCrossHair')
					function cl(t) {
						t.keyCode == 16 && (this.doc.sel.shift = !1), X(this, t)
					}
					u(cl, 'onKeyUp')
					function hl(t) {
						var e = this
						if (
							!(t.target && t.target != e.display.input.getField()) &&
							!(Ft(e.display, t) || X(e, t) || (t.ctrlKey && !t.altKey) || (xt && t.metaKey))
						) {
							var r = t.keyCode,
								n = t.charCode
							if (kt && r == sl) {
								;(sl = null), lt(t)
								return
							}
							if (!(kt && (!t.which || t.which < 10) && al(e, t))) {
								var i = String.fromCharCode(n ?? r)
								i != '\b' && (xs(e, t, i) || e.display.input.onKeyPress(t))
							}
						}
					}
					u(hl, 'onKeyPress')
					var lu = 400,
						dl = u(function (t, e, r) {
							;(this.time = t), (this.pos = e), (this.button = r)
						}, 'PastClick')
					dl.prototype.compare = function (t, e, r) {
						return this.time + lu > t && N(e, this.pos) == 0 && r == this.button
					}
					var Zn, $n
					function Ss(t, e) {
						var r = +new Date()
						return $n && $n.compare(r, t, e)
							? ((Zn = $n = null), 'triple')
							: Zn && Zn.compare(r, t, e)
							? (($n = new dl(r, t, e)), (Zn = null), 'double')
							: ((Zn = new dl(r, t, e)), ($n = null), 'single')
					}
					u(Ss, 'clickRepeat')
					function fl(t) {
						var e = this,
							r = e.display
						if (!(X(e, t) || (r.activeTouch && r.input.supportsTouch()))) {
							if ((r.input.ensurePolled(), (r.shift = t.shiftKey), Ft(r, t))) {
								ot ||
									((r.scroller.draggable = !1),
									setTimeout(function () {
										return (r.scroller.draggable = !0)
									}, 100))
								return
							}
							if (!ci(e, t)) {
								var n = re(e, t),
									i = Si(t),
									o = n ? Ss(n, i) : 'single'
								window.focus(),
									i == 1 && e.state.selectingText && e.state.selectingText(t),
									!(n && Ls(e, i, n, o, t)) &&
										(i == 1
											? n
												? Ts(e, n, o, t)
												: gr(t) == r.scroller && lt(t)
											: i == 2
											? (n && zn(e.doc, n),
											  setTimeout(function () {
													return r.input.focus()
											  }, 20))
											: i == 3 && (gi ? e.display.input.onContextMenu(t) : Kr(e)))
							}
						}
					}
					u(fl, 'onMouseDown')
					function Ls(t, e, r, n, i) {
						var o = 'Click'
						return (
							n == 'double' ? (o = 'Double' + o) : n == 'triple' && (o = 'Triple' + o),
							(o = (e == 1 ? 'Left' : e == 2 ? 'Middle' : 'Right') + o),
							ln(t, nl(o, i), i, function (l) {
								if ((typeof l == 'string' && (l = qn[l]), !l)) return !1
								var a = !1
								try {
									t.isReadOnly() && (t.state.suppressEdits = !0), (a = l(t, r) != ar)
								} finally {
									t.state.suppressEdits = !1
								}
								return a
							})
						)
					}
					u(Ls, 'handleMappedButton')
					function ks(t, e, r) {
						var n = t.getOption('configureMouse'),
							i = n ? n(t, e, r) : {}
						if (i.unit == null) {
							var o = _s ? r.shiftKey && r.metaKey : r.altKey
							i.unit = o ? 'rectangle' : e == 'single' ? 'char' : e == 'double' ? 'word' : 'line'
						}
						return (
							(i.extend == null || t.doc.extend) && (i.extend = t.doc.extend || r.shiftKey),
							i.addNew == null && (i.addNew = xt ? r.metaKey : r.ctrlKey),
							i.moveOnDrag == null && (i.moveOnDrag = !(xt ? r.altKey : r.ctrlKey)),
							i
						)
					}
					u(ks, 'configureMouse')
					function Ts(t, e, r, n) {
						A ? setTimeout(lr(mo, t), 0) : (t.curOp.focus = vt())
						var i = ks(t, r, n),
							o = t.doc.sel,
							l
						t.options.dragDrop &&
						Qs &&
						!t.isReadOnly() &&
						r == 'single' &&
						(l = o.contains(e)) > -1 &&
						(N((l = o.ranges[l]).from(), e) < 0 || e.xRel > 0) &&
						(N(l.to(), e) > 0 || e.xRel < 0)
							? Ms(t, n, e, i)
							: Ns(t, n, e, i)
					}
					u(Ts, 'leftButtonDown')
					function Ms(t, e, r, n) {
						var i = t.display,
							o = !1,
							l = q(t, function (c) {
								ot && (i.scroller.draggable = !1),
									(t.state.draggingText = !1),
									t.state.delayingBlurEvent &&
										(t.hasFocus() ? (t.state.delayingBlurEvent = !1) : Kr(t)),
									mt(i.wrapper.ownerDocument, 'mouseup', l),
									mt(i.wrapper.ownerDocument, 'mousemove', a),
									mt(i.scroller, 'dragstart', s),
									mt(i.scroller, 'drop', l),
									o ||
										(lt(c),
										n.addNew || zn(t.doc, r, null, null, n.extend),
										(ot && !rr) || (A && I == 9)
											? setTimeout(function () {
													i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus()
											  }, 20)
											: i.input.focus())
							}),
							a = u(function (c) {
								o = o || Math.abs(e.clientX - c.clientX) + Math.abs(e.clientY - c.clientY) >= 10
							}, 'mouseMove'),
							s = u(function () {
								return (o = !0)
							}, 'dragStart')
						ot && (i.scroller.draggable = !0),
							(t.state.draggingText = l),
							(l.copy = !n.moveOnDrag),
							M(i.wrapper.ownerDocument, 'mouseup', l),
							M(i.wrapper.ownerDocument, 'mousemove', a),
							M(i.scroller, 'dragstart', s),
							M(i.scroller, 'drop', l),
							(t.state.delayingBlurEvent = !0),
							setTimeout(function () {
								return i.input.focus()
							}, 20),
							i.scroller.dragDrop && i.scroller.dragDrop()
					}
					u(Ms, 'leftButtonStartDrag')
					function pl(t, e, r) {
						if (r == 'char') return new H(e, e)
						if (r == 'word') return t.findWordAt(e)
						if (r == 'line') return new H(v(e.line, 0), O(t.doc, v(e.line + 1, 0)))
						var n = r(t, e)
						return new H(n.from, n.to)
					}
					u(pl, 'rangeForUnit')
					function Ns(t, e, r, n) {
						A && Kr(t)
						var i = t.display,
							o = t.doc
						lt(e)
						var l,
							a,
							s = o.sel,
							c = s.ranges
						if (
							(n.addNew && !n.extend
								? ((a = o.sel.contains(r)), a > -1 ? (l = c[a]) : (l = new H(r, r)))
								: ((l = o.sel.primary()), (a = o.sel.primIndex)),
							n.unit == 'rectangle')
						)
							n.addNew || (l = new H(r, r)), (r = re(t, e, !0, !0)), (a = -1)
						else {
							var h = pl(t, r, n.unit)
							n.extend ? (l = ii(l, h.anchor, h.head, n.extend)) : (l = h)
						}
						n.addNew
							? a == -1
								? ((a = c.length), tt(o, Lt(t, c.concat([l]), a), { scroll: !1, origin: '*mouse' }))
								: c.length > 1 && c[a].empty() && n.unit == 'char' && !n.extend
								? (tt(o, Lt(t, c.slice(0, a).concat(c.slice(a + 1)), 0), {
										scroll: !1,
										origin: '*mouse'
								  }),
								  (s = o.sel))
								: oi(o, a, l, mi)
							: ((a = 0), tt(o, new wt([l], 0), mi), (s = o.sel))
						var d = r
						function p(w) {
							if (N(d, w) != 0)
								if (((d = w), n.unit == 'rectangle')) {
									for (
										var C = [],
											T = t.options.tabSize,
											L = yt(S(o, r.line).text, r.ch, T),
											D = yt(S(o, w.line).text, w.ch, T),
											E = Math.min(L, D),
											$ = Math.max(L, D),
											z = Math.min(r.line, w.line),
											ht = Math.min(t.lastLine(), Math.max(r.line, w.line));
										z <= ht;
										z++
									) {
										var dt = S(o, z).text,
											V = sr(dt, E, T)
										E == $
											? C.push(new H(v(z, V), v(z, V)))
											: dt.length > V && C.push(new H(v(z, V), v(z, sr(dt, $, T))))
									}
									C.length || C.push(new H(r, r)),
										tt(o, Lt(t, s.ranges.slice(0, a).concat(C), a), {
											origin: '*mouse',
											scroll: !1
										}),
										t.scrollIntoView(w)
								} else {
									var ft = l,
										et = pl(t, w, n.unit),
										Z = ft.anchor,
										j
									N(et.anchor, Z) > 0
										? ((j = et.head), (Z = wn(ft.from(), et.anchor)))
										: ((j = et.anchor), (Z = bn(ft.to(), et.head)))
									var B = s.ranges.slice(0)
									;(B[a] = Os(t, new H(O(o, Z), j))), tt(o, Lt(t, B, a), mi)
								}
						}
						u(p, 'extendTo')
						var f = i.wrapper.getBoundingClientRect(),
							g = 0
						function m(w) {
							var C = ++g,
								T = re(t, w, !0, n.unit == 'rectangle')
							if (T)
								if (N(T, d) != 0) {
									;(t.curOp.focus = vt()), p(T)
									var L = Fn(i, o)
									;(T.line >= L.to || T.line < L.from) &&
										setTimeout(
											q(t, function () {
												g == C && m(w)
											}),
											150
										)
								} else {
									var D = w.clientY < f.top ? -20 : w.clientY > f.bottom ? 20 : 0
									D &&
										setTimeout(
											q(t, function () {
												g == C && ((i.scroller.scrollTop += D), m(w))
											}),
											50
										)
								}
						}
						u(m, 'extend')
						function y(w) {
							;(t.state.selectingText = !1),
								(g = 1 / 0),
								w && (lt(w), i.input.focus()),
								mt(i.wrapper.ownerDocument, 'mousemove', b),
								mt(i.wrapper.ownerDocument, 'mouseup', x),
								(o.history.lastSelOrigin = null)
						}
						u(y, 'done')
						var b = q(t, function (w) {
								w.buttons === 0 || !Si(w) ? y(w) : m(w)
							}),
							x = q(t, y)
						;(t.state.selectingText = x),
							M(i.wrapper.ownerDocument, 'mousemove', b),
							M(i.wrapper.ownerDocument, 'mouseup', x)
					}
					u(Ns, 'leftButtonSelect')
					function Os(t, e) {
						var r = e.anchor,
							n = e.head,
							i = S(t.doc, r.line)
						if (N(r, n) == 0 && r.sticky == n.sticky) return e
						var o = At(i)
						if (!o) return e
						var l = Ee(o, r.ch, r.sticky),
							a = o[l]
						if (a.from != r.ch && a.to != r.ch) return e
						var s = l + ((a.from == r.ch) == (a.level != 1) ? 0 : 1)
						if (s == 0 || s == o.length) return e
						var c
						if (n.line != r.line) c = (n.line - r.line) * (t.doc.direction == 'ltr' ? 1 : -1) > 0
						else {
							var h = Ee(o, n.ch, n.sticky),
								d = h - l || (n.ch - r.ch) * (a.level == 1 ? -1 : 1)
							h == s - 1 || h == s ? (c = d < 0) : (c = d > 0)
						}
						var p = o[s + (c ? -1 : 0)],
							f = c == (p.level == 1),
							g = f ? p.from : p.to,
							m = f ? 'after' : 'before'
						return r.ch == g && r.sticky == m ? e : new H(new v(r.line, g, m), n)
					}
					u(Os, 'bidiSimplify')
					function gl(t, e, r, n) {
						var i, o
						if (e.touches) (i = e.touches[0].clientX), (o = e.touches[0].clientY)
						else
							try {
								;(i = e.clientX), (o = e.clientY)
							} catch {
								return !1
							}
						if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right)) return !1
						n && lt(e)
						var l = t.display,
							a = l.lineDiv.getBoundingClientRect()
						if (o > a.bottom || !bt(t, r)) return pr(e)
						o -= a.top - l.viewOffset
						for (var s = 0; s < t.display.gutterSpecs.length; ++s) {
							var c = l.gutters.childNodes[s]
							if (c && c.getBoundingClientRect().right >= i) {
								var h = ee(t.doc, o),
									d = t.display.gutterSpecs[s]
								return U(t, r, t, h, d.className, e), pr(e)
							}
						}
					}
					u(gl, 'gutterEvent')
					function ci(t, e) {
						return gl(t, e, 'gutterClick', !0)
					}
					u(ci, 'clickInGutter')
					function ml(t, e) {
						Ft(t.display, e) ||
							Ds(t, e) ||
							X(t, e, 'contextmenu') ||
							gi ||
							t.display.input.onContextMenu(e)
					}
					u(ml, 'onContextMenu')
					function Ds(t, e) {
						return bt(t, 'gutterContextMenu') ? gl(t, e, 'gutterContextMenu', !1) : !1
					}
					u(Ds, 'contextMenuInGutter')
					function vl(t) {
						;(t.display.wrapper.className =
							t.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
							t.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
							_e(t)
					}
					u(vl, 'themeChanged')
					var an = {
							toString: function () {
								return 'CodeMirror.Init'
							}
						},
						As = {},
						hi = {}
					function Ws(t) {
						var e = t.optionHandlers
						function r(n, i, o, l) {
							;(t.defaults[n] = i),
								o &&
									(e[n] = l
										? function (a, s, c) {
												c != an && o(a, s, c)
										  }
										: o)
						}
						u(r, 'option'),
							(t.defineOption = r),
							(t.Init = an),
							r(
								'value',
								'',
								function (n, i) {
									return n.setValue(i)
								},
								!0
							),
							r(
								'mode',
								null,
								function (n, i) {
									;(n.doc.modeOption = i), ei(n)
								},
								!0
							),
							r('indentUnit', 2, ei, !0),
							r('indentWithTabs', !1),
							r('smartIndent', !0),
							r(
								'tabSize',
								4,
								function (n) {
									tn(n), _e(n), at(n)
								},
								!0
							),
							r('lineSeparator', null, function (n, i) {
								if (((n.doc.lineSep = i), !!i)) {
									var o = [],
										l = n.doc.first
									n.doc.iter(function (s) {
										for (var c = 0; ; ) {
											var h = s.text.indexOf(i, c)
											if (h == -1) break
											;(c = h + i.length), o.push(v(l, h))
										}
										l++
									})
									for (var a = o.length - 1; a >= 0; a--)
										Ne(n.doc, i, o[a], v(o[a].line, o[a].ch + i.length))
								}
							}),
							r(
								'specialChars',
								/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,
								function (n, i, o) {
									;(n.state.specialChars = new RegExp(i.source + (i.test('	') ? '' : '|	'), 'g')),
										o != an && n.refresh()
								}
							),
							r(
								'specialCharPlaceholder',
								oa,
								function (n) {
									return n.refresh()
								},
								!0
							),
							r('electricChars', !0),
							r(
								'inputStyle',
								dn ? 'contenteditable' : 'textarea',
								function () {
									throw new Error('inputStyle can not (yet) be changed in a running editor')
								},
								!0
							),
							r(
								'spellcheck',
								!1,
								function (n, i) {
									return (n.getInputField().spellcheck = i)
								},
								!0
							),
							r(
								'autocorrect',
								!1,
								function (n, i) {
									return (n.getInputField().autocorrect = i)
								},
								!0
							),
							r(
								'autocapitalize',
								!1,
								function (n, i) {
									return (n.getInputField().autocapitalize = i)
								},
								!0
							),
							r('rtlMoveVisually', !qs),
							r('wholeLineUpdateBefore', !0),
							r(
								'theme',
								'default',
								function (n) {
									vl(n), Je(n)
								},
								!0
							),
							r('keyMap', 'default', function (n, i, o) {
								var l = _n(i),
									a = o != an && _n(o)
								a && a.detach && a.detach(n, l), l.attach && l.attach(n, a || null)
							}),
							r('extraKeys', null),
							r('configureMouse', null),
							r('lineWrapping', !1, Fs, !0),
							r(
								'gutters',
								[],
								function (n, i) {
									;(n.display.gutterSpecs = Qr(i, n.options.lineNumbers)), Je(n)
								},
								!0
							),
							r(
								'fixedGutter',
								!0,
								function (n, i) {
									;(n.display.gutters.style.left = i ? zr(n.display) + 'px' : '0'), n.refresh()
								},
								!0
							),
							r(
								'coverGutterNextToScrollbar',
								!1,
								function (n) {
									return Le(n)
								},
								!0
							),
							r(
								'scrollbarStyle',
								'native',
								function (n) {
									xo(n),
										Le(n),
										n.display.scrollbars.setScrollTop(n.doc.scrollTop),
										n.display.scrollbars.setScrollLeft(n.doc.scrollLeft)
								},
								!0
							),
							r(
								'lineNumbers',
								!1,
								function (n, i) {
									;(n.display.gutterSpecs = Qr(n.options.gutters, i)), Je(n)
								},
								!0
							),
							r('firstLineNumber', 1, Je, !0),
							r(
								'lineNumberFormatter',
								function (n) {
									return n
								},
								Je,
								!0
							),
							r('showCursorWhenSelecting', !1, qe, !0),
							r('resetSelectionOnContextMenu', !0),
							r('lineWiseCopyCut', !0),
							r('pasteLinesPerSelection', !0),
							r('selectionsMayTouch', !1),
							r('readOnly', !1, function (n, i) {
								i == 'nocursor' && (xe(n), n.display.input.blur()),
									n.display.input.readOnlyChanged(i)
							}),
							r('screenReaderLabel', null, function (n, i) {
								;(i = i === '' ? null : i), n.display.input.screenReaderLabelChanged(i)
							}),
							r(
								'disableInput',
								!1,
								function (n, i) {
									i || n.display.input.reset()
								},
								!0
							),
							r('dragDrop', !0, Hs),
							r('allowDropFileTypes', null),
							r('cursorBlinkRate', 530),
							r('cursorScrollMargin', 0),
							r('cursorHeight', 1, qe, !0),
							r('singleCursorHeightPerLine', !0, qe, !0),
							r('workTime', 100),
							r('workDelay', 100),
							r('flattenSpans', !0, tn, !0),
							r('addModeClass', !1, tn, !0),
							r('pollInterval', 100),
							r('undoDepth', 200, function (n, i) {
								return (n.doc.history.undoDepth = i)
							}),
							r('historyEventDelay', 1250),
							r(
								'viewportMargin',
								10,
								function (n) {
									return n.refresh()
								},
								!0
							),
							r('maxHighlightLength', 1e4, tn, !0),
							r('moveInputWithCursor', !0, function (n, i) {
								i || n.display.input.resetPosition()
							}),
							r('tabindex', null, function (n, i) {
								return (n.display.input.getField().tabIndex = i || '')
							}),
							r('autofocus', null),
							r(
								'direction',
								'ltr',
								function (n, i) {
									return n.doc.setDirection(i)
								},
								!0
							),
							r('phrases', null)
					}
					u(Ws, 'defineOptions')
					function Hs(t, e, r) {
						var n = r && r != an
						if (!e != !n) {
							var i = t.display.dragFunctions,
								o = e ? M : mt
							o(t.display.scroller, 'dragstart', i.start),
								o(t.display.scroller, 'dragenter', i.enter),
								o(t.display.scroller, 'dragover', i.over),
								o(t.display.scroller, 'dragleave', i.leave),
								o(t.display.scroller, 'drop', i.drop)
						}
					}
					u(Hs, 'dragDropChanged')
					function Fs(t) {
						t.options.lineWrapping
							? (Zt(t.display.wrapper, 'CodeMirror-wrap'),
							  (t.display.sizer.style.minWidth = ''),
							  (t.display.sizerWidth = null))
							: (fe(t.display.wrapper, 'CodeMirror-wrap'), Or(t)),
							Br(t),
							at(t),
							_e(t),
							setTimeout(function () {
								return Le(t)
							}, 100)
					}
					u(Fs, 'wrappingChanged')
					function R(t, e) {
						var r = this
						if (!(this instanceof R)) return new R(t, e)
						;(this.options = e = e ? $t(e) : {}), $t(As, e, !1)
						var n = e.value
						typeof n == 'string'
							? (n = new ct(n, e.mode, null, e.lineSeparator, e.direction))
							: e.mode && (n.modeOption = e.mode),
							(this.doc = n)
						var i = new R.inputStyles[e.inputStyle](this),
							o = (this.display = new Xa(t, n, i, e))
						;(o.wrapper.CodeMirror = this),
							vl(this),
							e.lineWrapping && (this.display.wrapper.className += ' CodeMirror-wrap'),
							xo(this),
							(this.state = {
								keyMaps: [],
								overlays: [],
								modeGen: 0,
								overwrite: !1,
								delayingBlurEvent: !1,
								focused: !1,
								suppressEdits: !1,
								pasteIncoming: -1,
								cutIncoming: -1,
								selectingText: !1,
								draggingText: !1,
								highlight: new Qt(),
								keySeq: null,
								specialChars: null
							}),
							e.autofocus && !dn && o.input.focus(),
							A &&
								I < 11 &&
								setTimeout(function () {
									return r.display.input.reset(!0)
								}, 20),
							Ps(this),
							fs(),
							le(this),
							(this.curOp.forceUpdate = !0),
							Ao(this, n),
							(e.autofocus && !dn) || this.hasFocus()
								? setTimeout(function () {
										r.hasFocus() && !r.state.focused && Vr(r)
								  }, 20)
								: xe(this)
						for (var l in hi) hi.hasOwnProperty(l) && hi[l](this, e[l], an)
						Lo(this), e.finishInit && e.finishInit(this)
						for (var a = 0; a < yl.length; ++a) yl[a](this)
						ae(this),
							ot &&
								e.lineWrapping &&
								getComputedStyle(o.lineDiv).textRendering == 'optimizelegibility' &&
								(o.lineDiv.style.textRendering = 'auto')
					}
					u(R, 'CodeMirror'), (R.defaults = As), (R.optionHandlers = hi)
					function Ps(t) {
						var e = t.display
						M(e.scroller, 'mousedown', q(t, fl)),
							A && I < 11
								? M(
										e.scroller,
										'dblclick',
										q(t, function (s) {
											if (!X(t, s)) {
												var c = re(t, s)
												if (!(!c || ci(t, s) || Ft(t.display, s))) {
													lt(s)
													var h = t.findWordAt(c)
													zn(t.doc, h.anchor, h.head)
												}
											}
										})
								  )
								: M(e.scroller, 'dblclick', function (s) {
										return X(t, s) || lt(s)
								  }),
							M(e.scroller, 'contextmenu', function (s) {
								return ml(t, s)
							}),
							M(e.input.getField(), 'contextmenu', function (s) {
								e.scroller.contains(s.target) || ml(t, s)
							})
						var r,
							n = { end: 0 }
						function i() {
							e.activeTouch &&
								((r = setTimeout(function () {
									return (e.activeTouch = null)
								}, 1e3)),
								(n = e.activeTouch),
								(n.end = +new Date()))
						}
						u(i, 'finishTouch')
						function o(s) {
							if (s.touches.length != 1) return !1
							var c = s.touches[0]
							return c.radiusX <= 1 && c.radiusY <= 1
						}
						u(o, 'isMouseLikeTouchEvent')
						function l(s, c) {
							if (c.left == null) return !0
							var h = c.left - s.left,
								d = c.top - s.top
							return h * h + d * d > 20 * 20
						}
						u(l, 'farAway'),
							M(e.scroller, 'touchstart', function (s) {
								if (!X(t, s) && !o(s) && !ci(t, s)) {
									e.input.ensurePolled(), clearTimeout(r)
									var c = +new Date()
									;(e.activeTouch = { start: c, moved: !1, prev: c - n.end <= 300 ? n : null }),
										s.touches.length == 1 &&
											((e.activeTouch.left = s.touches[0].pageX),
											(e.activeTouch.top = s.touches[0].pageY))
								}
							}),
							M(e.scroller, 'touchmove', function () {
								e.activeTouch && (e.activeTouch.moved = !0)
							}),
							M(e.scroller, 'touchend', function (s) {
								var c = e.activeTouch
								if (c && !Ft(e, s) && c.left != null && !c.moved && new Date() - c.start < 300) {
									var h = t.coordsChar(e.activeTouch, 'page'),
										d
									!c.prev || l(c, c.prev)
										? (d = new H(h, h))
										: !c.prev.prev || l(c, c.prev.prev)
										? (d = t.findWordAt(h))
										: (d = new H(v(h.line, 0), O(t.doc, v(h.line + 1, 0)))),
										t.setSelection(d.anchor, d.head),
										t.focus(),
										lt(s)
								}
								i()
							}),
							M(e.scroller, 'touchcancel', i),
							M(e.scroller, 'scroll', function () {
								e.scroller.clientHeight &&
									(Ze(t, e.scroller.scrollTop), oe(t, e.scroller.scrollLeft, !0), U(t, 'scroll', t))
							}),
							M(e.scroller, 'mousewheel', function (s) {
								return Mo(t, s)
							}),
							M(e.scroller, 'DOMMouseScroll', function (s) {
								return Mo(t, s)
							}),
							M(e.wrapper, 'scroll', function () {
								return (e.wrapper.scrollTop = e.wrapper.scrollLeft = 0)
							}),
							(e.dragFunctions = {
								enter: function (s) {
									X(t, s) || Ie(s)
								},
								over: function (s) {
									X(t, s) || (hs(t, s), Ie(s))
								},
								start: function (s) {
									return cs(t, s)
								},
								drop: q(t, us),
								leave: function (s) {
									X(t, s) || Jo(t)
								}
							})
						var a = e.input.getField()
						M(a, 'keyup', function (s) {
							return cl.call(t, s)
						}),
							M(a, 'keydown', q(t, ul)),
							M(a, 'keypress', q(t, hl)),
							M(a, 'focus', function (s) {
								return Vr(t, s)
							}),
							M(a, 'blur', function (s) {
								return xe(t, s)
							})
					}
					u(Ps, 'registerEventHandlers')
					var yl = []
					R.defineInitHook = function (t) {
						return yl.push(t)
					}
					function sn(t, e, r, n) {
						var i = t.doc,
							o
						r == null && (r = 'add'),
							r == 'smart' && (i.mode.indent ? (o = Ue(t, e).state) : (r = 'prev'))
						var l = t.options.tabSize,
							a = S(i, e),
							s = yt(a.text, null, l)
						a.stateAfter && (a.stateAfter = null)
						var c = a.text.match(/^\s*/)[0],
							h
						if (!n && !/\S/.test(a.text)) (h = 0), (r = 'not')
						else if (
							r == 'smart' &&
							((h = i.mode.indent(o, a.text.slice(c.length), a.text)), h == ar || h > 150)
						) {
							if (!n) return
							r = 'prev'
						}
						r == 'prev'
							? e > i.first
								? (h = yt(S(i, e - 1).text, null, l))
								: (h = 0)
							: r == 'add'
							? (h = s + t.options.indentUnit)
							: r == 'subtract'
							? (h = s - t.options.indentUnit)
							: typeof r == 'number' && (h = s + r),
							(h = Math.max(0, h))
						var d = '',
							p = 0
						if (t.options.indentWithTabs)
							for (var f = Math.floor(h / l); f; --f) (p += l), (d += '	')
						if ((p < h && (d += cr(h - p)), d != c))
							return Ne(i, d, v(e, 0), v(e, c.length), '+input'), (a.stateAfter = null), !0
						for (var g = 0; g < i.sel.ranges.length; g++) {
							var m = i.sel.ranges[g]
							if (m.head.line == e && m.head.ch < c.length) {
								var y = v(e, c.length)
								oi(i, g, new H(y, y))
								break
							}
						}
					}
					u(sn, 'indentLine')
					var Ot = null
					function Qn(t) {
						Ot = t
					}
					u(Qn, 'setLastCopied')
					function di(t, e, r, n, i) {
						var o = t.doc
						;(t.display.shift = !1), n || (n = o.sel)
						var l = +new Date() - 200,
							a = i == 'paste' || t.state.pasteIncoming > l,
							s = Ti(e),
							c = null
						if (a && n.ranges.length > 1)
							if (
								Ot &&
								Ot.text.join(`
`) == e
							) {
								if (n.ranges.length % Ot.text.length == 0) {
									c = []
									for (var h = 0; h < Ot.text.length; h++) c.push(o.splitLines(Ot.text[h]))
								}
							} else
								s.length == n.ranges.length &&
									t.options.pasteLinesPerSelection &&
									(c = gn(s, function (b) {
										return [b]
									}))
						for (var d = t.curOp.updateInput, p = n.ranges.length - 1; p >= 0; p--) {
							var f = n.ranges[p],
								g = f.from(),
								m = f.to()
							f.empty() &&
								(r && r > 0
									? (g = v(g.line, g.ch - r))
									: t.state.overwrite && !a
									? (m = v(m.line, Math.min(S(o, m.line).text.length, m.ch + W(s).length)))
									: a &&
									  Ot &&
									  Ot.lineWise &&
									  Ot.text.join(`
`) ==
											s.join(`
`) &&
									  (g = m = v(g.line, 0)))
							var y = {
								from: g,
								to: m,
								text: c ? c[p % c.length] : s,
								origin: i || (a ? 'paste' : t.state.cutIncoming > l ? 'cut' : '+input')
							}
							Me(t.doc, y), _(t, 'inputRead', t, y)
						}
						e && !a && wl(t, e),
							Ce(t),
							t.curOp.updateInput < 2 && (t.curOp.updateInput = d),
							(t.curOp.typing = !0),
							(t.state.pasteIncoming = t.state.cutIncoming = -1)
					}
					u(di, 'applyTextInput')
					function bl(t, e) {
						var r = t.clipboardData && t.clipboardData.getData('Text')
						if (r)
							return (
								t.preventDefault(),
								!e.isReadOnly() &&
									!e.options.disableInput &&
									ut(e, function () {
										return di(e, r, 0, null, 'paste')
									}),
								!0
							)
					}
					u(bl, 'handlePaste')
					function wl(t, e) {
						if (!(!t.options.electricChars || !t.options.smartIndent))
							for (var r = t.doc.sel, n = r.ranges.length - 1; n >= 0; n--) {
								var i = r.ranges[n]
								if (!(i.head.ch > 100 || (n && r.ranges[n - 1].head.line == i.head.line))) {
									var o = t.getModeAt(i.head),
										l = !1
									if (o.electricChars) {
										for (var a = 0; a < o.electricChars.length; a++)
											if (e.indexOf(o.electricChars.charAt(a)) > -1) {
												l = sn(t, i.head.line, 'smart')
												break
											}
									} else
										o.electricInput &&
											o.electricInput.test(S(t.doc, i.head.line).text.slice(0, i.head.ch)) &&
											(l = sn(t, i.head.line, 'smart'))
									l && _(t, 'electricInput', t, i.head.line)
								}
							}
					}
					u(wl, 'triggerElectric')
					function xl(t) {
						for (var e = [], r = [], n = 0; n < t.doc.sel.ranges.length; n++) {
							var i = t.doc.sel.ranges[n].head.line,
								o = { anchor: v(i, 0), head: v(i + 1, 0) }
							r.push(o), e.push(t.getRange(o.anchor, o.head))
						}
						return { text: e, ranges: r }
					}
					u(xl, 'copyableRanges')
					function Cl(t, e, r, n) {
						t.setAttribute('autocorrect', r ? '' : 'off'),
							t.setAttribute('autocapitalize', n ? '' : 'off'),
							t.setAttribute('spellcheck', !!e)
					}
					u(Cl, 'disableBrowserMagic')
					function Sl() {
						var t = k(
								'textarea',
								null,
								null,
								'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none'
							),
							e = k(
								'div',
								[t],
								null,
								'overflow: hidden; position: relative; width: 3px; height: 0px;'
							)
						return (
							ot ? (t.style.width = '1000px') : t.setAttribute('wrap', 'off'),
							hn && (t.style.border = '1px solid black'),
							Cl(t),
							e
						)
					}
					u(Sl, 'hiddenTextarea')
					function Es(t) {
						var e = t.optionHandlers,
							r = (t.helpers = {})
						;(t.prototype = {
							constructor: t,
							focus: function () {
								window.focus(), this.display.input.focus()
							},
							setOption: function (n, i) {
								var o = this.options,
									l = o[n]
								;(o[n] == i && n != 'mode') ||
									((o[n] = i),
									e.hasOwnProperty(n) && q(this, e[n])(this, i, l),
									U(this, 'optionChange', this, n))
							},
							getOption: function (n) {
								return this.options[n]
							},
							getDoc: function () {
								return this.doc
							},
							addKeyMap: function (n, i) {
								this.state.keyMaps[i ? 'push' : 'unshift'](_n(n))
							},
							removeKeyMap: function (n) {
								for (var i = this.state.keyMaps, o = 0; o < i.length; ++o)
									if (i[o] == n || i[o].name == n) return i.splice(o, 1), !0
							},
							addOverlay: nt(function (n, i) {
								var o = n.token ? n : t.getMode(this.options, n)
								if (o.startState) throw new Error('Overlays may not be stateful.')
								Hl(
									this.state.overlays,
									{ mode: o, modeSpec: n, opaque: i && i.opaque, priority: (i && i.priority) || 0 },
									function (l) {
										return l.priority
									}
								),
									this.state.modeGen++,
									at(this)
							}),
							removeOverlay: nt(function (n) {
								for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
									var l = i[o].modeSpec
									if (l == n || (typeof n == 'string' && l.name == n)) {
										i.splice(o, 1), this.state.modeGen++, at(this)
										return
									}
								}
							}),
							indentLine: nt(function (n, i, o) {
								typeof i != 'string' &&
									typeof i != 'number' &&
									(i == null
										? (i = this.options.smartIndent ? 'smart' : 'prev')
										: (i = i ? 'add' : 'subtract')),
									Be(this.doc, n) && sn(this, n, i, o)
							}),
							indentSelection: nt(function (n) {
								for (var i = this.doc.sel.ranges, o = -1, l = 0; l < i.length; l++) {
									var a = i[l]
									if (a.empty())
										a.head.line > o &&
											(sn(this, a.head.line, n, !0),
											(o = a.head.line),
											l == this.doc.sel.primIndex && Ce(this))
									else {
										var s = a.from(),
											c = a.to(),
											h = Math.max(o, s.line)
										o = Math.min(this.lastLine(), c.line - (c.ch ? 0 : 1)) + 1
										for (var d = h; d < o; ++d) sn(this, d, n)
										var p = this.doc.sel.ranges
										s.ch == 0 &&
											i.length == p.length &&
											p[l].from().ch > 0 &&
											oi(this.doc, l, new H(s, p[l].to()), Dt)
									}
								}
							}),
							getTokenAt: function (n, i) {
								return Pi(this, n, i)
							},
							getLineTokens: function (n, i) {
								return Pi(this, v(n), i, !0)
							},
							getTokenTypeAt: function (n) {
								n = O(this.doc, n)
								var i = Hi(this, S(this.doc, n.line)),
									o = 0,
									l = (i.length - 1) / 2,
									a = n.ch,
									s
								if (a == 0) s = i[2]
								else
									for (;;) {
										var c = (o + l) >> 1
										if ((c ? i[c * 2 - 1] : 0) >= a) l = c
										else if (i[c * 2 + 1] < a) o = c + 1
										else {
											s = i[c * 2 + 2]
											break
										}
									}
								var h = s ? s.indexOf('overlay ') : -1
								return h < 0 ? s : h == 0 ? null : s.slice(0, h - 1)
							},
							getModeAt: function (n) {
								var i = this.doc.mode
								return i.innerMode ? t.innerMode(i, this.getTokenAt(n).state).mode : i
							},
							getHelper: function (n, i) {
								return this.getHelpers(n, i)[0]
							},
							getHelpers: function (n, i) {
								var o = []
								if (!r.hasOwnProperty(i)) return o
								var l = r[i],
									a = this.getModeAt(n)
								if (typeof a[i] == 'string') l[a[i]] && o.push(l[a[i]])
								else if (a[i])
									for (var s = 0; s < a[i].length; s++) {
										var c = l[a[i][s]]
										c && o.push(c)
									}
								else
									a.helperType && l[a.helperType]
										? o.push(l[a.helperType])
										: l[a.name] && o.push(l[a.name])
								for (var h = 0; h < l._global.length; h++) {
									var d = l._global[h]
									d.pred(a, this) && J(o, d.val) == -1 && o.push(d.val)
								}
								return o
							},
							getStateAfter: function (n, i) {
								var o = this.doc
								return (n = Di(o, n ?? o.first + o.size - 1)), Ue(this, n + 1, i).state
							},
							cursorCoords: function (n, i) {
								var o,
									l = this.doc.sel.primary()
								return (
									n == null
										? (o = l.head)
										: typeof n == 'object'
										? (o = O(this.doc, n))
										: (o = n ? l.from() : l.to()),
									St(this, o, i || 'page')
								)
							},
							charCoords: function (n, i) {
								return Dn(this, O(this.doc, n), i || 'page')
							},
							coordsChar: function (n, i) {
								return (n = so(this, n, i || 'page')), Er(this, n.left, n.top)
							},
							lineAtHeight: function (n, i) {
								return (
									(n = so(this, { top: n, left: 0 }, i || 'page').top),
									ee(this.doc, n + this.display.viewOffset)
								)
							},
							heightAtLine: function (n, i, o) {
								var l = !1,
									a
								if (typeof n == 'number') {
									var s = this.doc.first + this.doc.size - 1
									n < this.doc.first ? (n = this.doc.first) : n > s && ((n = s), (l = !0)),
										(a = S(this.doc, n))
								} else a = n
								return (
									On(this, a, { top: 0, left: 0 }, i || 'page', o || l).top +
									(l ? this.doc.height - Ht(a) : 0)
								)
							},
							defaultTextHeight: function () {
								return be(this.display)
							},
							defaultCharWidth: function () {
								return we(this.display)
							},
							getViewport: function () {
								return { from: this.display.viewFrom, to: this.display.viewTo }
							},
							addWidget: function (n, i, o, l, a) {
								var s = this.display
								n = St(this, O(this.doc, n))
								var c = n.bottom,
									h = n.left
								if (
									((i.style.position = 'absolute'),
									i.setAttribute('cm-ignore-events', 'true'),
									this.display.input.setUneditable(i),
									s.sizer.appendChild(i),
									l == 'over')
								)
									c = n.top
								else if (l == 'above' || l == 'near') {
									var d = Math.max(s.wrapper.clientHeight, this.doc.height),
										p = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth)
									;(l == 'above' || n.bottom + i.offsetHeight > d) && n.top > i.offsetHeight
										? (c = n.top - i.offsetHeight)
										: n.bottom + i.offsetHeight <= d && (c = n.bottom),
										h + i.offsetWidth > p && (h = p - i.offsetWidth)
								}
								;(i.style.top = c + 'px'),
									(i.style.left = i.style.right = ''),
									a == 'right'
										? ((h = s.sizer.clientWidth - i.offsetWidth), (i.style.right = '0px'))
										: (a == 'left'
												? (h = 0)
												: a == 'middle' && (h = (s.sizer.clientWidth - i.offsetWidth) / 2),
										  (i.style.left = h + 'px')),
									o &&
										Wa(this, {
											left: h,
											top: c,
											right: h + i.offsetWidth,
											bottom: c + i.offsetHeight
										})
							},
							triggerOnKeyDown: nt(ul),
							triggerOnKeyPress: nt(hl),
							triggerOnKeyUp: cl,
							triggerOnMouseDown: nt(fl),
							execCommand: function (n) {
								if (qn.hasOwnProperty(n)) return qn[n].call(null, this)
							},
							triggerElectric: nt(function (n) {
								wl(this, n)
							}),
							findPosH: function (n, i, o, l) {
								var a = 1
								i < 0 && ((a = -1), (i = -i))
								for (
									var s = O(this.doc, n), c = 0;
									c < i && ((s = fi(this.doc, s, a, o, l)), !s.hitSide);
									++c
								);
								return s
							},
							moveH: nt(function (n, i) {
								var o = this
								this.extendSelectionsBy(function (l) {
									return o.display.shift || o.doc.extend || l.empty()
										? fi(o.doc, l.head, n, i, o.options.rtlMoveVisually)
										: n < 0
										? l.from()
										: l.to()
								}, pn)
							}),
							deleteH: nt(function (n, i) {
								var o = this.doc.sel,
									l = this.doc
								o.somethingSelected()
									? l.replaceSelection('', null, '+delete')
									: Ae(this, function (a) {
											var s = fi(l, a.head, n, i, !1)
											return n < 0 ? { from: s, to: a.head } : { from: a.head, to: s }
									  })
							}),
							findPosV: function (n, i, o, l) {
								var a = 1,
									s = l
								i < 0 && ((a = -1), (i = -i))
								for (var c = O(this.doc, n), h = 0; h < i; ++h) {
									var d = St(this, c, 'div')
									if ((s == null ? (s = d.left) : (d.left = s), (c = Ll(this, d, a, o)), c.hitSide))
										break
								}
								return c
							},
							moveV: nt(function (n, i) {
								var o = this,
									l = this.doc,
									a = [],
									s = !this.display.shift && !l.extend && l.sel.somethingSelected()
								if (
									(l.extendSelectionsBy(function (h) {
										if (s) return n < 0 ? h.from() : h.to()
										var d = St(o, h.head, 'div')
										h.goalColumn != null && (d.left = h.goalColumn), a.push(d.left)
										var p = Ll(o, d, n, i)
										return (
											i == 'page' && h == l.sel.primary() && Xr(o, Dn(o, p, 'div').top - d.top), p
										)
									}, pn),
									a.length)
								)
									for (var c = 0; c < l.sel.ranges.length; c++) l.sel.ranges[c].goalColumn = a[c]
							}),
							findWordAt: function (n) {
								var i = this.doc,
									o = S(i, n.line).text,
									l = n.ch,
									a = n.ch
								if (o) {
									var s = this.getHelper(n, 'wordChars')
									;(n.sticky == 'before' || a == o.length) && l ? --l : ++a
									for (
										var c = o.charAt(l),
											h = mn(c, s)
												? function (d) {
														return mn(d, s)
												  }
												: /\s/.test(c)
												? function (d) {
														return /\s/.test(d)
												  }
												: function (d) {
														return !/\s/.test(d) && !mn(d)
												  };
										l > 0 && h(o.charAt(l - 1));

									)
										--l
									for (; a < o.length && h(o.charAt(a)); ) ++a
								}
								return new H(v(n.line, l), v(n.line, a))
							},
							toggleOverwrite: function (n) {
								;(n != null && n == this.state.overwrite) ||
									((this.state.overwrite = !this.state.overwrite)
										? Zt(this.display.cursorDiv, 'CodeMirror-overwrite')
										: fe(this.display.cursorDiv, 'CodeMirror-overwrite'),
									U(this, 'overwriteToggle', this, this.state.overwrite))
							},
							hasFocus: function () {
								return this.display.input.getField() == vt()
							},
							isReadOnly: function () {
								return !!(this.options.readOnly || this.doc.cantEdit)
							},
							scrollTo: nt(function (n, i) {
								Ye(this, n, i)
							}),
							getScrollInfo: function () {
								var n = this.display.scroller
								return {
									left: n.scrollLeft,
									top: n.scrollTop,
									height: n.scrollHeight - Mt(this) - this.display.barHeight,
									width: n.scrollWidth - Mt(this) - this.display.barWidth,
									clientHeight: Wr(this),
									clientWidth: ne(this)
								}
							},
							scrollIntoView: nt(function (n, i) {
								n == null
									? ((n = { from: this.doc.sel.primary().head, to: null }),
									  i == null && (i = this.options.cursorScrollMargin))
									: typeof n == 'number'
									? (n = { from: v(n, 0), to: null })
									: n.from == null && (n = { from: n, to: null }),
									n.to || (n.to = n.from),
									(n.margin = i || 0),
									n.from.line != null ? Ha(this, n) : yo(this, n.from, n.to, n.margin)
							}),
							setSize: nt(function (n, i) {
								var o = this,
									l = u(function (s) {
										return typeof s == 'number' || /^\d+$/.test(String(s)) ? s + 'px' : s
									}, 'interpret')
								n != null && (this.display.wrapper.style.width = l(n)),
									i != null && (this.display.wrapper.style.height = l(i)),
									this.options.lineWrapping && oo(this)
								var a = this.display.viewFrom
								this.doc.iter(a, this.display.viewTo, function (s) {
									if (s.widgets) {
										for (var c = 0; c < s.widgets.length; c++)
											if (s.widgets[c].noHScroll) {
												Gt(o, a, 'widget')
												break
											}
									}
									++a
								}),
									(this.curOp.forceUpdate = !0),
									U(this, 'refresh', this)
							}),
							operation: function (n) {
								return ut(this, n)
							},
							startOperation: function () {
								return le(this)
							},
							endOperation: function () {
								return ae(this)
							},
							refresh: nt(function () {
								var n = this.display.cachedTextHeight
								at(this),
									(this.curOp.forceUpdate = !0),
									_e(this),
									Ye(this, this.doc.scrollLeft, this.doc.scrollTop),
									Zr(this.display),
									(n == null ||
										Math.abs(n - be(this.display)) > 0.5 ||
										this.options.lineWrapping) &&
										Br(this),
									U(this, 'refresh', this)
							}),
							swapDoc: nt(function (n) {
								var i = this.doc
								return (
									(i.cm = null),
									this.state.selectingText && this.state.selectingText(),
									Ao(this, n),
									_e(this),
									this.display.input.reset(),
									Ye(this, n.scrollLeft, n.scrollTop),
									(this.curOp.forceScroll = !0),
									_(this, 'swapDoc', this, i),
									i
								)
							}),
							phrase: function (n) {
								var i = this.options.phrases
								return i && Object.prototype.hasOwnProperty.call(i, n) ? i[n] : n
							},
							getInputField: function () {
								return this.display.input.getField()
							},
							getWrapperElement: function () {
								return this.display.wrapper
							},
							getScrollerElement: function () {
								return this.display.scroller
							},
							getGutterElement: function () {
								return this.display.gutters
							}
						}),
							me(t),
							(t.registerHelper = function (n, i, o) {
								r.hasOwnProperty(n) || (r[n] = t[n] = { _global: [] }), (r[n][i] = o)
							}),
							(t.registerGlobalHelper = function (n, i, o, l) {
								t.registerHelper(n, i, l), r[n]._global.push({ pred: o, val: l })
							})
					}
					u(Es, 'addEditorMethods')
					function fi(t, e, r, n, i) {
						var o = e,
							l = r,
							a = S(t, e.line),
							s = i && t.direction == 'rtl' ? -r : r
						function c() {
							var x = e.line + s
							return x < t.first || x >= t.first + t.size
								? !1
								: ((e = new v(x, e.ch, e.sticky)), (a = S(t, x)))
						}
						u(c, 'findNextLine')
						function h(x) {
							var w
							if (n == 'codepoint') {
								var C = a.text.charCodeAt(e.ch + (r > 0 ? 0 : -1))
								if (isNaN(C)) w = null
								else {
									var T = r > 0 ? C >= 55296 && C < 56320 : C >= 56320 && C < 57343
									w = new v(
										e.line,
										Math.max(0, Math.min(a.text.length, e.ch + r * (T ? 2 : 1))),
										-r
									)
								}
							} else i ? (w = ys(t.cm, a, e, r)) : (w = si(a, e, r))
							if (w == null)
								if (!x && c()) e = ui(i, t.cm, a, e.line, s)
								else return !1
							else e = w
							return !0
						}
						if ((u(h, 'moveOnce'), n == 'char' || n == 'codepoint')) h()
						else if (n == 'column') h(!0)
						else if (n == 'word' || n == 'group')
							for (
								var d = null, p = n == 'group', f = t.cm && t.cm.getHelper(e, 'wordChars'), g = !0;
								!(r < 0 && !h(!g));
								g = !1
							) {
								var m =
										a.text.charAt(e.ch) ||
										`
`,
									y = mn(m, f)
										? 'w'
										: p &&
										  m ==
												`
`
										? 'n'
										: !p || /\s/.test(m)
										? null
										: 'p'
								if ((p && !g && !y && (y = 's'), d && d != y)) {
									r < 0 && ((r = 1), h(), (e.sticky = 'after'))
									break
								}
								if ((y && (d = y), r > 0 && !h(!g))) break
							}
						var b = Un(t, e, o, l, !0)
						return wr(o, b) && (b.hitSide = !0), b
					}
					u(fi, 'findPosH')
					function Ll(t, e, r, n) {
						var i = t.doc,
							o = e.left,
							l
						if (n == 'page') {
							var a = Math.min(
									t.display.wrapper.clientHeight,
									window.innerHeight || document.documentElement.clientHeight
								),
								s = Math.max(a - 0.5 * be(t.display), 3)
							l = (r > 0 ? e.bottom : e.top) + r * s
						} else n == 'line' && (l = r > 0 ? e.bottom + 3 : e.top - 3)
						for (var c; (c = Er(t, o, l)), !!c.outside; ) {
							if (r < 0 ? l <= 0 : l >= i.height) {
								c.hitSide = !0
								break
							}
							l += r * 5
						}
						return c
					}
					u(Ll, 'findPosV')
					var P = u(function (t) {
						;(this.cm = t),
							(this.lastAnchorNode =
								this.lastAnchorOffset =
								this.lastFocusNode =
								this.lastFocusOffset =
									null),
							(this.polling = new Qt()),
							(this.composing = null),
							(this.gracePeriod = !1),
							(this.readDOMTimeout = null)
					}, 'ContentEditableInput')
					;(P.prototype.init = function (t) {
						var e = this,
							r = this,
							n = r.cm,
							i = (r.div = t.lineDiv)
						;(i.contentEditable = !0),
							Cl(i, n.options.spellcheck, n.options.autocorrect, n.options.autocapitalize)
						function o(a) {
							for (var s = a.target; s; s = s.parentNode) {
								if (s == i) return !0
								if (/\bCodeMirror-(?:line)?widget\b/.test(s.className)) break
							}
							return !1
						}
						u(o, 'belongsToInput'),
							M(i, 'paste', function (a) {
								!o(a) ||
									X(n, a) ||
									bl(a, n) ||
									(I <= 11 &&
										setTimeout(
											q(n, function () {
												return e.updateFromDOM()
											}),
											20
										))
							}),
							M(i, 'compositionstart', function (a) {
								e.composing = { data: a.data, done: !1 }
							}),
							M(i, 'compositionupdate', function (a) {
								e.composing || (e.composing = { data: a.data, done: !1 })
							}),
							M(i, 'compositionend', function (a) {
								e.composing &&
									(a.data != e.composing.data && e.readFromDOMSoon(), (e.composing.done = !0))
							}),
							M(i, 'touchstart', function () {
								return r.forceCompositionEnd()
							}),
							M(i, 'input', function () {
								e.composing || e.readFromDOMSoon()
							})
						function l(a) {
							if (!(!o(a) || X(n, a))) {
								if (n.somethingSelected())
									Qn({ lineWise: !1, text: n.getSelections() }),
										a.type == 'cut' && n.replaceSelection('', null, 'cut')
								else if (n.options.lineWiseCopyCut) {
									var s = xl(n)
									Qn({ lineWise: !0, text: s.text }),
										a.type == 'cut' &&
											n.operation(function () {
												n.setSelections(s.ranges, 0, Dt), n.replaceSelection('', null, 'cut')
											})
								} else return
								if (a.clipboardData) {
									a.clipboardData.clearData()
									var c = Ot.text.join(`
`)
									if ((a.clipboardData.setData('Text', c), a.clipboardData.getData('Text') == c)) {
										a.preventDefault()
										return
									}
								}
								var h = Sl(),
									d = h.firstChild
								n.display.lineSpace.insertBefore(h, n.display.lineSpace.firstChild),
									(d.value = Ot.text.join(`
`))
								var p = vt()
								fn(d),
									setTimeout(function () {
										n.display.lineSpace.removeChild(h),
											p.focus(),
											p == i && r.showPrimarySelection()
									}, 50)
							}
						}
						u(l, 'onCopyCut'), M(i, 'copy', l), M(i, 'cut', l)
					}),
						(P.prototype.screenReaderLabelChanged = function (t) {
							t ? this.div.setAttribute('aria-label', t) : this.div.removeAttribute('aria-label')
						}),
						(P.prototype.prepareSelection = function () {
							var t = go(this.cm, !1)
							return (t.focus = vt() == this.div), t
						}),
						(P.prototype.showSelection = function (t, e) {
							!t ||
								!this.cm.display.view.length ||
								((t.focus || e) && this.showPrimarySelection(), this.showMultipleSelections(t))
						}),
						(P.prototype.getSelection = function () {
							return this.cm.display.wrapper.ownerDocument.getSelection()
						}),
						(P.prototype.showPrimarySelection = function () {
							var t = this.getSelection(),
								e = this.cm,
								r = e.doc.sel.primary(),
								n = r.from(),
								i = r.to()
							if (
								e.display.viewTo == e.display.viewFrom ||
								n.line >= e.display.viewTo ||
								i.line < e.display.viewFrom
							) {
								t.removeAllRanges()
								return
							}
							var o = Jn(e, t.anchorNode, t.anchorOffset),
								l = Jn(e, t.focusNode, t.focusOffset)
							if (!(o && !o.bad && l && !l.bad && N(wn(o, l), n) == 0 && N(bn(o, l), i) == 0)) {
								var a = e.display.view,
									s = (n.line >= e.display.viewFrom && kl(e, n)) || {
										node: a[0].measure.map[2],
										offset: 0
									},
									c = i.line < e.display.viewTo && kl(e, i)
								if (!c) {
									var h = a[a.length - 1].measure,
										d = h.maps ? h.maps[h.maps.length - 1] : h.map
									c = { node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3] }
								}
								if (!s || !c) {
									t.removeAllRanges()
									return
								}
								var p = t.rangeCount && t.getRangeAt(0),
									f
								try {
									f = ge(s.node, s.offset, c.offset, c.node)
								} catch {}
								f &&
									(!It && e.state.focused
										? (t.collapse(s.node, s.offset),
										  f.collapsed || (t.removeAllRanges(), t.addRange(f)))
										: (t.removeAllRanges(), t.addRange(f)),
									p && t.anchorNode == null ? t.addRange(p) : It && this.startGracePeriod()),
									this.rememberSelection()
							}
						}),
						(P.prototype.startGracePeriod = function () {
							var t = this
							clearTimeout(this.gracePeriod),
								(this.gracePeriod = setTimeout(function () {
									;(t.gracePeriod = !1),
										t.selectionChanged() &&
											t.cm.operation(function () {
												return (t.cm.curOp.selectionChanged = !0)
											})
								}, 20))
						}),
						(P.prototype.showMultipleSelections = function (t) {
							gt(this.cm.display.cursorDiv, t.cursors),
								gt(this.cm.display.selectionDiv, t.selection)
						}),
						(P.prototype.rememberSelection = function () {
							var t = this.getSelection()
							;(this.lastAnchorNode = t.anchorNode),
								(this.lastAnchorOffset = t.anchorOffset),
								(this.lastFocusNode = t.focusNode),
								(this.lastFocusOffset = t.focusOffset)
						}),
						(P.prototype.selectionInEditor = function () {
							var t = this.getSelection()
							if (!t.rangeCount) return !1
							var e = t.getRangeAt(0).commonAncestorContainer
							return zt(this.div, e)
						}),
						(P.prototype.focus = function () {
							this.cm.options.readOnly != 'nocursor' &&
								((!this.selectionInEditor() || vt() != this.div) &&
									this.showSelection(this.prepareSelection(), !0),
								this.div.focus())
						}),
						(P.prototype.blur = function () {
							this.div.blur()
						}),
						(P.prototype.getField = function () {
							return this.div
						}),
						(P.prototype.supportsTouch = function () {
							return !0
						}),
						(P.prototype.receivedFocus = function () {
							var t = this,
								e = this
							this.selectionInEditor()
								? setTimeout(function () {
										return t.pollSelection()
								  }, 20)
								: ut(this.cm, function () {
										return (e.cm.curOp.selectionChanged = !0)
								  })
							function r() {
								e.cm.state.focused &&
									(e.pollSelection(), e.polling.set(e.cm.options.pollInterval, r))
							}
							u(r, 'poll'), this.polling.set(this.cm.options.pollInterval, r)
						}),
						(P.prototype.selectionChanged = function () {
							var t = this.getSelection()
							return (
								t.anchorNode != this.lastAnchorNode ||
								t.anchorOffset != this.lastAnchorOffset ||
								t.focusNode != this.lastFocusNode ||
								t.focusOffset != this.lastFocusOffset
							)
						}),
						(P.prototype.pollSelection = function () {
							if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
								var t = this.getSelection(),
									e = this.cm
								if (ir && nr && this.cm.display.gutterSpecs.length && Is(t.anchorNode)) {
									this.cm.triggerOnKeyDown({
										type: 'keydown',
										keyCode: 8,
										preventDefault: Math.abs
									}),
										this.blur(),
										this.focus()
									return
								}
								if (!this.composing) {
									this.rememberSelection()
									var r = Jn(e, t.anchorNode, t.anchorOffset),
										n = Jn(e, t.focusNode, t.focusOffset)
									r &&
										n &&
										ut(e, function () {
											tt(e.doc, jt(r, n), Dt), (r.bad || n.bad) && (e.curOp.selectionChanged = !0)
										})
								}
							}
						}),
						(P.prototype.pollContent = function () {
							this.readDOMTimeout != null &&
								(clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null))
							var t = this.cm,
								e = t.display,
								r = t.doc.sel.primary(),
								n = r.from(),
								i = r.to()
							if (
								(n.ch == 0 &&
									n.line > t.firstLine() &&
									(n = v(n.line - 1, S(t.doc, n.line - 1).length)),
								i.ch == S(t.doc, i.line).text.length &&
									i.line < t.lastLine() &&
									(i = v(i.line + 1, 0)),
								n.line < e.viewFrom || i.line > e.viewTo - 1)
							)
								return !1
							var o, l, a
							n.line == e.viewFrom || (o = ie(t, n.line)) == 0
								? ((l = F(e.view[0].line)), (a = e.view[0].node))
								: ((l = F(e.view[o].line)), (a = e.view[o - 1].node.nextSibling))
							var s = ie(t, i.line),
								c,
								h
							if (
								(s == e.view.length - 1
									? ((c = e.viewTo - 1), (h = e.lineDiv.lastChild))
									: ((c = F(e.view[s + 1].line) - 1), (h = e.view[s + 1].node.previousSibling)),
								!a)
							)
								return !1
							for (
								var d = t.doc.splitLines(Rs(t, a, h, l, c)),
									p = te(t.doc, v(l, 0), v(c, S(t.doc, c).text.length));
								d.length > 1 && p.length > 1;

							)
								if (W(d) == W(p)) d.pop(), p.pop(), c--
								else if (d[0] == p[0]) d.shift(), p.shift(), l++
								else break
							for (
								var f = 0, g = 0, m = d[0], y = p[0], b = Math.min(m.length, y.length);
								f < b && m.charCodeAt(f) == y.charCodeAt(f);

							)
								++f
							for (
								var x = W(d),
									w = W(p),
									C = Math.min(
										x.length - (d.length == 1 ? f : 0),
										w.length - (p.length == 1 ? f : 0)
									);
								g < C && x.charCodeAt(x.length - g - 1) == w.charCodeAt(w.length - g - 1);

							)
								++g
							if (d.length == 1 && p.length == 1 && l == n.line)
								for (
									;
									f && f > n.ch && x.charCodeAt(x.length - g - 1) == w.charCodeAt(w.length - g - 1);

								)
									f--, g++
							;(d[d.length - 1] = x.slice(0, x.length - g).replace(/^\u200b+/, '')),
								(d[0] = d[0].slice(f).replace(/\u200b+$/, ''))
							var T = v(l, f),
								L = v(c, p.length ? W(p).length - g : 0)
							if (d.length > 1 || d[0] || N(T, L)) return Ne(t.doc, d, T, L, '+input'), !0
						}),
						(P.prototype.ensurePolled = function () {
							this.forceCompositionEnd()
						}),
						(P.prototype.reset = function () {
							this.forceCompositionEnd()
						}),
						(P.prototype.forceCompositionEnd = function () {
							this.composing &&
								(clearTimeout(this.readDOMTimeout),
								(this.composing = null),
								this.updateFromDOM(),
								this.div.blur(),
								this.div.focus())
						}),
						(P.prototype.readFromDOMSoon = function () {
							var t = this
							this.readDOMTimeout == null &&
								(this.readDOMTimeout = setTimeout(function () {
									if (((t.readDOMTimeout = null), t.composing))
										if (t.composing.done) t.composing = null
										else return
									t.updateFromDOM()
								}, 80))
						}),
						(P.prototype.updateFromDOM = function () {
							var t = this
							;(this.cm.isReadOnly() || !this.pollContent()) &&
								ut(this.cm, function () {
									return at(t.cm)
								})
						}),
						(P.prototype.setUneditable = function (t) {
							t.contentEditable = 'false'
						}),
						(P.prototype.onKeyPress = function (t) {
							t.charCode == 0 ||
								this.composing ||
								(t.preventDefault(),
								this.cm.isReadOnly() ||
									q(this.cm, di)(
										this.cm,
										String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode),
										0
									))
						}),
						(P.prototype.readOnlyChanged = function (t) {
							this.div.contentEditable = String(t != 'nocursor')
						}),
						(P.prototype.onContextMenu = function () {}),
						(P.prototype.resetPosition = function () {}),
						(P.prototype.needsContentAttribute = !0)
					function kl(t, e) {
						var r = Hr(t, e.line)
						if (!r || r.hidden) return null
						var n = S(t.doc, e.line),
							i = eo(r, n, e.line),
							o = At(n, t.doc.direction),
							l = 'left'
						if (o) {
							var a = Ee(o, e.ch)
							l = a % 2 ? 'right' : 'left'
						}
						var s = ro(i.map, e.ch, l)
						return (s.offset = s.collapse == 'right' ? s.end : s.start), s
					}
					u(kl, 'posToDOM')
					function Is(t) {
						for (var e = t; e; e = e.parentNode)
							if (/CodeMirror-gutter-wrapper/.test(e.className)) return !0
						return !1
					}
					u(Is, 'isInGutter')
					function We(t, e) {
						return e && (t.bad = !0), t
					}
					u(We, 'badPos')
					function Rs(t, e, r, n, i) {
						var o = '',
							l = !1,
							a = t.doc.lineSeparator(),
							s = !1
						function c(f) {
							return function (g) {
								return g.id == f
							}
						}
						u(c, 'recognizeMarker')
						function h() {
							l && ((o += a), s && (o += a), (l = s = !1))
						}
						u(h, 'close')
						function d(f) {
							f && (h(), (o += f))
						}
						u(d, 'addText')
						function p(f) {
							if (f.nodeType == 1) {
								var g = f.getAttribute('cm-text')
								if (g) {
									d(g)
									return
								}
								var m = f.getAttribute('cm-marker'),
									y
								if (m) {
									var b = t.findMarks(v(n, 0), v(i + 1, 0), c(+m))
									b.length && (y = b[0].find(0)) && d(te(t.doc, y.from, y.to).join(a))
									return
								}
								if (f.getAttribute('contenteditable') == 'false') return
								var x = /^(pre|div|p|li|table|br)$/i.test(f.nodeName)
								if (!/^br$/i.test(f.nodeName) && f.textContent.length == 0) return
								x && h()
								for (var w = 0; w < f.childNodes.length; w++) p(f.childNodes[w])
								;/^(pre|p)$/i.test(f.nodeName) && (s = !0), x && (l = !0)
							} else
								f.nodeType == 3 && d(f.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '))
						}
						for (u(p, 'walk'); p(e), e != r; ) (e = e.nextSibling), (s = !1)
						return o
					}
					u(Rs, 'domTextBetween')
					function Jn(t, e, r) {
						var n
						if (e == t.display.lineDiv) {
							if (((n = t.display.lineDiv.childNodes[r]), !n))
								return We(t.clipPos(v(t.display.viewTo - 1)), !0)
							;(e = null), (r = 0)
						} else
							for (n = e; ; n = n.parentNode) {
								if (!n || n == t.display.lineDiv) return null
								if (n.parentNode && n.parentNode == t.display.lineDiv) break
							}
						for (var i = 0; i < t.display.view.length; i++) {
							var o = t.display.view[i]
							if (o.node == n) return zs(o, e, r)
						}
					}
					u(Jn, 'domToPos')
					function zs(t, e, r) {
						var n = t.text.firstChild,
							i = !1
						if (!e || !zt(n, e)) return We(v(F(t.line), 0), !0)
						if (e == n && ((i = !0), (e = n.childNodes[r]), (r = 0), !e)) {
							var o = t.rest ? W(t.rest) : t.line
							return We(v(F(o), o.text.length), i)
						}
						var l = e.nodeType == 3 ? e : null,
							a = e
						for (
							!l &&
							e.childNodes.length == 1 &&
							e.firstChild.nodeType == 3 &&
							((l = e.firstChild), r && (r = l.nodeValue.length));
							a.parentNode != n;

						)
							a = a.parentNode
						var s = t.measure,
							c = s.maps
						function h(y, b, x) {
							for (var w = -1; w < (c ? c.length : 0); w++)
								for (var C = w < 0 ? s.map : c[w], T = 0; T < C.length; T += 3) {
									var L = C[T + 2]
									if (L == y || L == b) {
										var D = F(w < 0 ? t.line : t.rest[w]),
											E = C[T] + x
										return (x < 0 || L != y) && (E = C[T + (x ? 1 : 0)]), v(D, E)
									}
								}
						}
						u(h, 'find')
						var d = h(l, a, r)
						if (d) return We(d, i)
						for (var p = a.nextSibling, f = l ? l.nodeValue.length - r : 0; p; p = p.nextSibling) {
							if (((d = h(p, p.firstChild, 0)), d)) return We(v(d.line, d.ch - f), i)
							f += p.textContent.length
						}
						for (var g = a.previousSibling, m = r; g; g = g.previousSibling) {
							if (((d = h(g, g.firstChild, -1)), d)) return We(v(d.line, d.ch + m), i)
							m += g.textContent.length
						}
					}
					u(zs, 'locateNodeInLineView')
					var G = u(function (t) {
						;(this.cm = t),
							(this.prevInput = ''),
							(this.pollingFast = !1),
							(this.polling = new Qt()),
							(this.hasSelection = !1),
							(this.composing = null)
					}, 'TextareaInput')
					;(G.prototype.init = function (t) {
						var e = this,
							r = this,
							n = this.cm
						this.createField(t)
						var i = this.textarea
						t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild),
							hn && (i.style.width = '0px'),
							M(i, 'input', function () {
								A && I >= 9 && e.hasSelection && (e.hasSelection = null), r.poll()
							}),
							M(i, 'paste', function (l) {
								X(n, l) || bl(l, n) || ((n.state.pasteIncoming = +new Date()), r.fastPoll())
							})
						function o(l) {
							if (!X(n, l)) {
								if (n.somethingSelected()) Qn({ lineWise: !1, text: n.getSelections() })
								else if (n.options.lineWiseCopyCut) {
									var a = xl(n)
									Qn({ lineWise: !0, text: a.text }),
										l.type == 'cut'
											? n.setSelections(a.ranges, null, Dt)
											: ((r.prevInput = ''),
											  (i.value = a.text.join(`
`)),
											  fn(i))
								} else return
								l.type == 'cut' && (n.state.cutIncoming = +new Date())
							}
						}
						u(o, 'prepareCopyCut'),
							M(i, 'cut', o),
							M(i, 'copy', o),
							M(t.scroller, 'paste', function (l) {
								if (!(Ft(t, l) || X(n, l))) {
									if (!i.dispatchEvent) {
										;(n.state.pasteIncoming = +new Date()), r.focus()
										return
									}
									var a = new Event('paste')
									;(a.clipboardData = l.clipboardData), i.dispatchEvent(a)
								}
							}),
							M(t.lineSpace, 'selectstart', function (l) {
								Ft(t, l) || lt(l)
							}),
							M(i, 'compositionstart', function () {
								var l = n.getCursor('from')
								r.composing && r.composing.range.clear(),
									(r.composing = {
										start: l,
										range: n.markText(l, n.getCursor('to'), { className: 'CodeMirror-composing' })
									})
							}),
							M(i, 'compositionend', function () {
								r.composing && (r.poll(), r.composing.range.clear(), (r.composing = null))
							})
					}),
						(G.prototype.createField = function (t) {
							;(this.wrapper = Sl()), (this.textarea = this.wrapper.firstChild)
						}),
						(G.prototype.screenReaderLabelChanged = function (t) {
							t
								? this.textarea.setAttribute('aria-label', t)
								: this.textarea.removeAttribute('aria-label')
						}),
						(G.prototype.prepareSelection = function () {
							var t = this.cm,
								e = t.display,
								r = t.doc,
								n = go(t)
							if (t.options.moveInputWithCursor) {
								var i = St(t, r.sel.primary().head, 'div'),
									o = e.wrapper.getBoundingClientRect(),
									l = e.lineDiv.getBoundingClientRect()
								;(n.teTop = Math.max(
									0,
									Math.min(e.wrapper.clientHeight - 10, i.top + l.top - o.top)
								)),
									(n.teLeft = Math.max(
										0,
										Math.min(e.wrapper.clientWidth - 10, i.left + l.left - o.left)
									))
							}
							return n
						}),
						(G.prototype.showSelection = function (t) {
							var e = this.cm,
								r = e.display
							gt(r.cursorDiv, t.cursors),
								gt(r.selectionDiv, t.selection),
								t.teTop != null &&
									((this.wrapper.style.top = t.teTop + 'px'),
									(this.wrapper.style.left = t.teLeft + 'px'))
						}),
						(G.prototype.reset = function (t) {
							if (!(this.contextMenuPending || this.composing)) {
								var e = this.cm
								if (e.somethingSelected()) {
									this.prevInput = ''
									var r = e.getSelection()
									;(this.textarea.value = r),
										e.state.focused && fn(this.textarea),
										A && I >= 9 && (this.hasSelection = r)
								} else
									t ||
										((this.prevInput = this.textarea.value = ''),
										A && I >= 9 && (this.hasSelection = null))
							}
						}),
						(G.prototype.getField = function () {
							return this.textarea
						}),
						(G.prototype.supportsTouch = function () {
							return !1
						}),
						(G.prototype.focus = function () {
							if (this.cm.options.readOnly != 'nocursor' && (!dn || vt() != this.textarea))
								try {
									this.textarea.focus()
								} catch {}
						}),
						(G.prototype.blur = function () {
							this.textarea.blur()
						}),
						(G.prototype.resetPosition = function () {
							this.wrapper.style.top = this.wrapper.style.left = 0
						}),
						(G.prototype.receivedFocus = function () {
							this.slowPoll()
						}),
						(G.prototype.slowPoll = function () {
							var t = this
							this.pollingFast ||
								this.polling.set(this.cm.options.pollInterval, function () {
									t.poll(), t.cm.state.focused && t.slowPoll()
								})
						}),
						(G.prototype.fastPoll = function () {
							var t = !1,
								e = this
							e.pollingFast = !0
							function r() {
								var n = e.poll()
								!n && !t ? ((t = !0), e.polling.set(60, r)) : ((e.pollingFast = !1), e.slowPoll())
							}
							u(r, 'p'), e.polling.set(20, r)
						}),
						(G.prototype.poll = function () {
							var t = this,
								e = this.cm,
								r = this.textarea,
								n = this.prevInput
							if (
								this.contextMenuPending ||
								!e.state.focused ||
								(Js(r) && !n && !this.composing) ||
								e.isReadOnly() ||
								e.options.disableInput ||
								e.state.keySeq
							)
								return !1
							var i = r.value
							if (i == n && !e.somethingSelected()) return !1
							if ((A && I >= 9 && this.hasSelection === i) || (xt && /[\uf700-\uf7ff]/.test(i)))
								return e.display.input.reset(), !1
							if (e.doc.sel == e.display.selForContextMenu) {
								var o = i.charCodeAt(0)
								if ((o == 8203 && !n && (n = '​'), o == 8666))
									return this.reset(), this.cm.execCommand('undo')
							}
							for (
								var l = 0, a = Math.min(n.length, i.length);
								l < a && n.charCodeAt(l) == i.charCodeAt(l);

							)
								++l
							return (
								ut(e, function () {
									di(e, i.slice(l), n.length - l, null, t.composing ? '*compose' : null),
										i.length > 1e3 ||
										i.indexOf(`
`) > -1
											? (r.value = t.prevInput = '')
											: (t.prevInput = i),
										t.composing &&
											(t.composing.range.clear(),
											(t.composing.range = e.markText(t.composing.start, e.getCursor('to'), {
												className: 'CodeMirror-composing'
											})))
								}),
								!0
							)
						}),
						(G.prototype.ensurePolled = function () {
							this.pollingFast && this.poll() && (this.pollingFast = !1)
						}),
						(G.prototype.onKeyPress = function () {
							A && I >= 9 && (this.hasSelection = null), this.fastPoll()
						}),
						(G.prototype.onContextMenu = function (t) {
							var e = this,
								r = e.cm,
								n = r.display,
								i = e.textarea
							e.contextMenuPending && e.contextMenuPending()
							var o = re(r, t),
								l = n.scroller.scrollTop
							if (!o || kt) return
							var a = r.options.resetSelectionOnContextMenu
							a && r.doc.sel.contains(o) == -1 && q(r, tt)(r.doc, jt(o), Dt)
							var s = i.style.cssText,
								c = e.wrapper.style.cssText,
								h = e.wrapper.offsetParent.getBoundingClientRect()
							;(e.wrapper.style.cssText = 'position: static'),
								(i.style.cssText =
									`position: absolute; width: 30px; height: 30px;
      top: ` +
									(t.clientY - h.top - 5) +
									'px; left: ' +
									(t.clientX - h.left - 5) +
									`px;
      z-index: 1000; background: ` +
									(A ? 'rgba(255, 255, 255, .05)' : 'transparent') +
									`;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`)
							var d
							ot && (d = window.scrollY),
								n.input.focus(),
								ot && window.scrollTo(null, d),
								n.input.reset(),
								r.somethingSelected() || (i.value = e.prevInput = ' '),
								(e.contextMenuPending = f),
								(n.selForContextMenu = r.doc.sel),
								clearTimeout(n.detectingSelectAll)
							function p() {
								if (i.selectionStart != null) {
									var m = r.somethingSelected(),
										y = '​' + (m ? i.value : '')
									;(i.value = '⇚'),
										(i.value = y),
										(e.prevInput = m ? '' : '​'),
										(i.selectionStart = 1),
										(i.selectionEnd = y.length),
										(n.selForContextMenu = r.doc.sel)
								}
							}
							u(p, 'prepareSelectAllHack')
							function f() {
								if (
									e.contextMenuPending == f &&
									((e.contextMenuPending = !1),
									(e.wrapper.style.cssText = c),
									(i.style.cssText = s),
									A && I < 9 && n.scrollbars.setScrollTop((n.scroller.scrollTop = l)),
									i.selectionStart != null)
								) {
									;(!A || (A && I < 9)) && p()
									var m = 0,
										y = u(function () {
											n.selForContextMenu == r.doc.sel &&
											i.selectionStart == 0 &&
											i.selectionEnd > 0 &&
											e.prevInput == '​'
												? q(r, Vo)(r)
												: m++ < 10
												? (n.detectingSelectAll = setTimeout(y, 500))
												: ((n.selForContextMenu = null), n.input.reset())
										}, 'poll')
									n.detectingSelectAll = setTimeout(y, 200)
								}
							}
							if ((u(f, 'rehide'), A && I >= 9 && p(), gi)) {
								Ie(t)
								var g = u(function () {
									mt(window, 'mouseup', g), setTimeout(f, 20)
								}, 'mouseup')
								M(window, 'mouseup', g)
							} else setTimeout(f, 50)
						}),
						(G.prototype.readOnlyChanged = function (t) {
							t || this.reset(),
								(this.textarea.disabled = t == 'nocursor'),
								(this.textarea.readOnly = !!t)
						}),
						(G.prototype.setUneditable = function () {}),
						(G.prototype.needsContentAttribute = !1)
					function Bs(t, e) {
						if (
							((e = e ? $t(e) : {}),
							(e.value = t.value),
							!e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
							!e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
							e.autofocus == null)
						) {
							var r = vt()
							e.autofocus = r == t || (t.getAttribute('autofocus') != null && r == document.body)
						}
						function n() {
							t.value = a.getValue()
						}
						u(n, 'save')
						var i
						if (t.form && (M(t.form, 'submit', n), !e.leaveSubmitMethodAlone)) {
							var o = t.form
							i = o.submit
							try {
								var l = (o.submit = function () {
									n(), (o.submit = i), o.submit(), (o.submit = l)
								})
							} catch {}
						}
						;(e.finishInit = function (s) {
							;(s.save = n),
								(s.getTextArea = function () {
									return t
								}),
								(s.toTextArea = function () {
									;(s.toTextArea = isNaN),
										n(),
										t.parentNode.removeChild(s.getWrapperElement()),
										(t.style.display = ''),
										t.form &&
											(mt(t.form, 'submit', n),
											!e.leaveSubmitMethodAlone &&
												typeof t.form.submit == 'function' &&
												(t.form.submit = i))
								})
						}),
							(t.style.display = 'none')
						var a = R(function (s) {
							return t.parentNode.insertBefore(s, t.nextSibling)
						}, e)
						return a
					}
					u(Bs, 'fromTextArea')
					function Us(t) {
						;(t.off = mt),
							(t.on = M),
							(t.wheelEventPixels = _a),
							(t.Doc = ct),
							(t.splitLines = Ti),
							(t.countColumn = yt),
							(t.findColumn = sr),
							(t.isWordChar = hr),
							(t.Pass = ar),
							(t.signal = U),
							(t.Line = Ke),
							(t.changeEnd = Xt),
							(t.scrollbarModel = Fa),
							(t.Pos = v),
							(t.cmpPos = N),
							(t.modes = Ni),
							(t.mimeModes = Re),
							(t.resolveMode = yn),
							(t.getMode = mr),
							(t.modeExtensions = ze),
							(t.extendMode = Ul),
							(t.copyState = Jt),
							(t.startState = Oi),
							(t.innerMode = vr),
							(t.commands = qn),
							(t.keyMap = qt),
							(t.keyName = rl),
							(t.isModifierKey = el),
							(t.lookupKey = De),
							(t.normalizeKeyMap = vs),
							(t.StringStream = K),
							(t.SharedTextMarker = Vn),
							(t.TextMarker = se),
							(t.LineWidget = Kn),
							(t.e_preventDefault = lt),
							(t.e_stopPropagation = Ci),
							(t.e_stop = Ie),
							(t.addClass = Zt),
							(t.contains = zt),
							(t.rmClass = fe),
							(t.keyNames = ue)
					}
					u(Us, 'addLegacyProps'), Ws(R), Es(R)
					var au = 'iter insert remove copy getEditor constructor'.split(' ')
					for (var pi in ct.prototype)
						ct.prototype.hasOwnProperty(pi) &&
							J(au, pi) < 0 &&
							(R.prototype[pi] = (function (t) {
								return function () {
									return t.apply(this.doc, arguments)
								}
							})(ct.prototype[pi]))
					return (
						me(ct),
						(R.inputStyles = { textarea: G, contenteditable: P }),
						(R.defineMode = function (t) {
							!R.defaults.mode && t != 'null' && (R.defaults.mode = t), zl.apply(this, arguments)
						}),
						(R.defineMIME = Bl),
						R.defineMode('null', function () {
							return {
								token: function (t) {
									return t.skipToEnd()
								}
							}
						}),
						R.defineMIME('text/plain', 'null'),
						(R.defineExtension = function (t, e) {
							R.prototype[t] = e
						}),
						(R.defineDocExtension = function (t, e) {
							ct.prototype[t] = e
						}),
						(R.fromTextArea = Bs),
						Us(R),
						(R.version = '5.65.3'),
						R
					)
				})
			})(Gs)),
		Gs.exports
	)
}
u(hu, 'requireCodemirror')
export { hu as c, cu as h }
