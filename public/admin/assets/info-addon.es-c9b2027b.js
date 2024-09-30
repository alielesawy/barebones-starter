import { C as i } from './codemirror.es-52e8b92d.js'
import './codemirror.es2-5884f31a.js'
var y = Object.defineProperty,
	u = (o, t) => y(o, 'name', { value: t, configurable: !0 })
i.defineOption('info', !1, (o, t, n) => {
	if (n && n !== i.Init) {
		const e = o.state.info.onMouseOver
		i.off(o.getWrapperElement(), 'mouseover', e),
			clearTimeout(o.state.info.hoverTimeout),
			delete o.state.info
	}
	if (t) {
		const e = (o.state.info = v(t))
		;(e.onMouseOver = T.bind(null, o)), i.on(o.getWrapperElement(), 'mouseover', e.onMouseOver)
	}
})
function v(o) {
	return { options: o instanceof Function ? { render: o } : o === !0 ? {} : o }
}
u(v, 'createState')
function g(o) {
	const { options: t } = o.state.info
	return (t == null ? void 0 : t.hoverTime) || 500
}
u(g, 'getHoverTime')
function T(o, t) {
	const n = o.state.info,
		e = t.target || t.srcElement
	if (!(e instanceof HTMLElement) || e.nodeName !== 'SPAN' || n.hoverTimeout !== void 0) return
	const m = e.getBoundingClientRect(),
		r = u(function () {
			clearTimeout(n.hoverTimeout), (n.hoverTimeout = setTimeout(a, f))
		}, 'onMouseMove'),
		s = u(function () {
			i.off(document, 'mousemove', r),
				i.off(o.getWrapperElement(), 'mouseout', s),
				clearTimeout(n.hoverTimeout),
				(n.hoverTimeout = void 0)
		}, 'onMouseOut'),
		a = u(function () {
			i.off(document, 'mousemove', r),
				i.off(o.getWrapperElement(), 'mouseout', s),
				(n.hoverTimeout = void 0),
				h(o, m)
		}, 'onHover'),
		f = g(o)
	;(n.hoverTimeout = setTimeout(a, f)),
		i.on(document, 'mousemove', r),
		i.on(o.getWrapperElement(), 'mouseout', s)
}
u(T, 'onMouseOver')
function h(o, t) {
	const n = o.coordsChar({ left: (t.left + t.right) / 2, top: (t.top + t.bottom) / 2 }, 'window'),
		e = o.state.info,
		{ options: m } = e,
		r = m.render || o.getHelper(n, 'info')
	if (r) {
		const s = o.getTokenAt(n, !0)
		if (s) {
			const a = r(s, m, o, n)
			a && M(o, t, a)
		}
	}
}
u(h, 'onMouseHover')
function M(o, t, n) {
	const e = document.createElement('div')
	;(e.className = 'CodeMirror-info'), e.append(n), document.body.append(e)
	const m = e.getBoundingClientRect(),
		r = window.getComputedStyle(e),
		s = m.right - m.left + parseFloat(r.marginLeft) + parseFloat(r.marginRight),
		a = m.bottom - m.top + parseFloat(r.marginTop) + parseFloat(r.marginBottom)
	let f = t.bottom
	a > window.innerHeight - t.bottom - 15 &&
		t.top > window.innerHeight - t.bottom &&
		(f = t.top - a),
		f < 0 && (f = t.bottom)
	let c = Math.max(0, window.innerWidth - s - 15)
	c > t.left && (c = t.left),
		(e.style.opacity = '1'),
		(e.style.top = f + 'px'),
		(e.style.left = c + 'px')
	let l
	const d = u(function () {
			clearTimeout(l)
		}, 'onMouseOverPopup'),
		p = u(function () {
			clearTimeout(l), (l = setTimeout(w, 200))
		}, 'onMouseOut'),
		w = u(function () {
			i.off(e, 'mouseover', d),
				i.off(e, 'mouseout', p),
				i.off(o.getWrapperElement(), 'mouseout', p),
				e.style.opacity
					? ((e.style.opacity = '0'),
					  setTimeout(() => {
							e.parentNode && e.remove()
					  }, 600))
					: e.parentNode && e.remove()
		}, 'hidePopup')
	i.on(e, 'mouseover', d), i.on(e, 'mouseout', p), i.on(o.getWrapperElement(), 'mouseout', p)
}
u(M, 'showPopup')
