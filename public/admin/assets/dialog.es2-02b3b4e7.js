import { c as N } from './codemirror.es2-5884f31a.js'
var b = Object.defineProperty,
	d = (v, C) => b(v, 'name', { value: C, configurable: !0 }),
	E = { exports: {} },
	y
function k() {
	return (
		y ||
			((y = 1),
			(function (v, C) {
				;(function (e) {
					e(N())
				})(function (e) {
					function f(l, a, o) {
						var i = l.getWrapperElement(),
							u
						return (
							(u = i.appendChild(document.createElement('div'))),
							o
								? (u.className = 'CodeMirror-dialog CodeMirror-dialog-bottom')
								: (u.className = 'CodeMirror-dialog CodeMirror-dialog-top'),
							typeof a == 'string' ? (u.innerHTML = a) : u.appendChild(a),
							e.addClass(i, 'dialog-opened'),
							u
						)
					}
					d(f, 'dialogDiv')
					function p(l, a) {
						l.state.currentNotificationClose && l.state.currentNotificationClose(),
							(l.state.currentNotificationClose = a)
					}
					d(p, 'closeNotification'),
						e.defineExtension('openDialog', function (l, a, o) {
							o || (o = {}), p(this, null)
							var i = f(this, l, o.bottom),
								u = !1,
								c = this
							function r(n) {
								if (typeof n == 'string') t.value = n
								else {
									if (u) return
									;(u = !0),
										e.rmClass(i.parentNode, 'dialog-opened'),
										i.parentNode.removeChild(i),
										c.focus(),
										o.onClose && o.onClose(i)
								}
							}
							d(r, 'close')
							var t = i.getElementsByTagName('input')[0],
								s
							return (
								t
									? (t.focus(),
									  o.value && ((t.value = o.value), o.selectValueOnOpen !== !1 && t.select()),
									  o.onInput &&
											e.on(t, 'input', function (n) {
												o.onInput(n, t.value, r)
											}),
									  o.onKeyUp &&
											e.on(t, 'keyup', function (n) {
												o.onKeyUp(n, t.value, r)
											}),
									  e.on(t, 'keydown', function (n) {
											;(o && o.onKeyDown && o.onKeyDown(n, t.value, r)) ||
												((n.keyCode == 27 || (o.closeOnEnter !== !1 && n.keyCode == 13)) &&
													(t.blur(), e.e_stop(n), r()),
												n.keyCode == 13 && a(t.value, n))
									  }),
									  o.closeOnBlur !== !1 &&
											e.on(i, 'focusout', function (n) {
												n.relatedTarget !== null && r()
											}))
									: (s = i.getElementsByTagName('button')[0]) &&
									  (e.on(s, 'click', function () {
											r(), c.focus()
									  }),
									  o.closeOnBlur !== !1 && e.on(s, 'blur', r),
									  s.focus()),
								r
							)
						}),
						e.defineExtension('openConfirm', function (l, a, o) {
							p(this, null)
							var i = f(this, l, o && o.bottom),
								u = i.getElementsByTagName('button'),
								c = !1,
								r = this,
								t = 1
							function s() {
								c ||
									((c = !0),
									e.rmClass(i.parentNode, 'dialog-opened'),
									i.parentNode.removeChild(i),
									r.focus())
							}
							d(s, 'close'), u[0].focus()
							for (var n = 0; n < u.length; ++n) {
								var m = u[n]
								;(function (g) {
									e.on(m, 'click', function (h) {
										e.e_preventDefault(h), s(), g && g(r)
									})
								})(a[n]),
									e.on(m, 'blur', function () {
										--t,
											setTimeout(function () {
												t <= 0 && s()
											}, 200)
									}),
									e.on(m, 'focus', function () {
										++t
									})
							}
						}),
						e.defineExtension('openNotification', function (l, a) {
							p(this, r)
							var o = f(this, l, a && a.bottom),
								i = !1,
								u,
								c = a && typeof a.duration < 'u' ? a.duration : 5e3
							function r() {
								i ||
									((i = !0),
									clearTimeout(u),
									e.rmClass(o.parentNode, 'dialog-opened'),
									o.parentNode.removeChild(o))
							}
							return (
								d(r, 'close'),
								e.on(o, 'click', function (t) {
									e.e_preventDefault(t), r()
								}),
								c && (u = setTimeout(r, c)),
								r
							)
						})
				})
			})()),
		E.exports
	)
}
d(k, 'requireDialog')
export { k }
