var _t = Object.defineProperty;
var kt = (r, e, t) => e in r ? _t(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var $ = (r, e, t) => kt(r, typeof e != "symbol" ? e + "" : e, t);
const tt = "KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0IGY9bmV3IFRleHRFbmNvZGVyO2Z1bmN0aW9uIGQoZSl7cmV0dXJuWy4uLm5ldyBVaW50OEFycmF5KGUpXS5tYXAodD0+dC50b1N0cmluZygxNikucGFkU3RhcnQoMiwiMCIpKS5qb2luKCIiKX1hc3luYyBmdW5jdGlvbiBwKGUsdCxvKXtyZXR1cm4gZChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChvLnRvVXBwZXJDYXNlKCksZi5lbmNvZGUoZSt0KSkpfWZ1bmN0aW9uIGcoZSx0LG89IlNIQS0yNTYiLGw9MWU2LGM9MCl7Y29uc3QgYT1uZXcgQWJvcnRDb250cm9sbGVyLGk9RGF0ZS5ub3coKTtyZXR1cm57cHJvbWlzZTooYXN5bmMoKT0+e2ZvcihsZXQgbj1jO248PWw7bis9MSl7aWYoYS5zaWduYWwuYWJvcnRlZClyZXR1cm4gbnVsbDtpZihhd2FpdCBwKHQsbixvKT09PWUpcmV0dXJue251bWJlcjpuLHRvb2s6RGF0ZS5ub3coKS1pfX1yZXR1cm4gbnVsbH0pKCksY29udHJvbGxlcjphfX1sZXQgcjtvbm1lc3NhZ2U9YXN5bmMgZT0+e2NvbnN0e3R5cGU6dCxwYXlsb2FkOm99PWUuZGF0YTtpZih0PT09ImFib3J0IilyPT1udWxsfHxyLmFib3J0KCkscj12b2lkIDA7ZWxzZSBpZih0PT09IndvcmsiKXtjb25zdHthbGc6bCxjaGFsbGVuZ2U6YyxtYXg6YSxzYWx0Omksc3RhcnQ6dX09b3x8e30sbj1nKGMsaSxsLGEsdSk7cj1uLmNvbnRyb2xsZXIsbi5wcm9taXNlLnRoZW4ocz0+e3NlbGYucG9zdE1lc3NhZ2UocyYmey4uLnMsd29ya2VyOiEwfSl9KX19fSkoKTsK", xt = (r) => Uint8Array.from(atob(r), (e) => e.charCodeAt(0)), He = typeof window < "u" && window.Blob && new Blob([xt(tt)], { type: "text/javascript;charset=utf-8" });
function Et(r) {
  let e;
  try {
    if (e = He && (window.URL || window.webkitURL).createObjectURL(He), !e) throw "";
    const t = new Worker(e, {
      name: r == null ? void 0 : r.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(e);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + tt,
      {
        name: r == null ? void 0 : r.name
      }
    );
  } finally {
    e && (window.URL || window.webkitURL).revokeObjectURL(e);
  }
}
function ie() {
}
function rt(r) {
  return r();
}
function Xe() {
  return /* @__PURE__ */ Object.create(null);
}
function ae(r) {
  r.forEach(rt);
}
function nt(r) {
  return typeof r == "function";
}
function Lt(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
function Ct(r) {
  return Object.keys(r).length === 0;
}
function C(r, e) {
  r.appendChild(e);
}
function Rt(r, e, t) {
  const i = It(r);
  if (!i.getElementById(e)) {
    const o = N("style");
    o.id = e, o.textContent = t, At(i, o);
  }
}
function It(r) {
  if (!r) return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function At(r, e) {
  return C(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function D(r, e, t) {
  r.insertBefore(e, t || null);
}
function Z(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function N(r) {
  return document.createElement(r);
}
function Q(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function Nt(r) {
  return document.createTextNode(r);
}
function O() {
  return Nt(" ");
}
function xe(r, e, t, i) {
  return r.addEventListener(e, t, i), () => r.removeEventListener(e, t, i);
}
function f(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function St(r) {
  return Array.from(r.childNodes);
}
function Be(r, e, t) {
  r.classList.toggle(e, !!t);
}
function jt(r, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(r, { detail: e, bubbles: t, cancelable: i });
}
function Mt(r) {
  const e = {};
  return r.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ce;
function fe(r) {
  ce = r;
}
function Re() {
  if (!ce) throw new Error("Function called outside component initialization");
  return ce;
}
function Zt(r) {
  Re().$$.on_mount.push(r);
}
function Tt(r) {
  Re().$$.on_destroy.push(r);
}
function Wt() {
  const r = Re();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const o = r.$$.callbacks[e];
    if (o) {
      const l = jt(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return o.slice().forEach((s) => {
        s.call(r, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const re = [], ve = [];
let ne = [];
const Oe = [], it = /* @__PURE__ */ Promise.resolve();
let Le = !1;
function ot() {
  Le || (Le = !0, it.then(v));
}
function Dt() {
  return ot(), it;
}
function Ce(r) {
  ne.push(r);
}
const Ee = /* @__PURE__ */ new Set();
let te = 0;
function v() {
  if (te !== 0)
    return;
  const r = ce;
  do {
    try {
      for (; te < re.length; ) {
        const e = re[te];
        te++, fe(e), Vt(e.$$);
      }
    } catch (e) {
      throw re.length = 0, te = 0, e;
    }
    for (fe(null), re.length = 0, te = 0; ve.length; ) ve.pop()();
    for (let e = 0; e < ne.length; e += 1) {
      const t = ne[e];
      Ee.has(t) || (Ee.add(t), t());
    }
    ne.length = 0;
  } while (re.length);
  for (; Oe.length; )
    Oe.pop()();
  Le = !1, Ee.clear(), fe(r);
}
function Vt(r) {
  if (r.fragment !== null) {
    r.update(), ae(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(Ce);
  }
}
function Ft(r) {
  const e = [], t = [];
  ne.forEach((i) => r.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), ne = e;
}
const Pt = /* @__PURE__ */ new Set();
function Ut(r, e) {
  r && r.i && (Pt.delete(r), r.i(e));
}
function $t(r, e, t) {
  const { fragment: i, after_update: o } = r.$$;
  i && i.m(e, t), Ce(() => {
    const l = r.$$.on_mount.map(rt).filter(nt);
    r.$$.on_destroy ? r.$$.on_destroy.push(...l) : ae(l), r.$$.on_mount = [];
  }), o.forEach(Ce);
}
function Gt(r, e) {
  const t = r.$$;
  t.fragment !== null && (Ft(t.after_update), ae(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ht(r, e) {
  r.$$.dirty[0] === -1 && (re.push(r), ot(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Xt(r, e, t, i, o, l, s = null, a = [-1]) {
  const u = ce;
  fe(r);
  const h = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ie,
    not_equal: o,
    bound: Xe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Xe(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(h.root);
  let P = !1;
  if (h.ctx = t ? t(r, e.props || {}, (j, V, ..._) => {
    const U = _.length ? _[0] : V;
    return h.ctx && o(h.ctx[j], h.ctx[j] = U) && (!h.skip_bound && h.bound[j] && h.bound[j](U), P && Ht(r, j)), V;
  }) : [], h.update(), P = !0, ae(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const j = St(e.target);
      h.fragment && h.fragment.l(j), j.forEach(Z);
    } else
      h.fragment && h.fragment.c();
    e.intro && Ut(r.$$.fragment), $t(r, e.target, e.anchor), v();
  }
  fe(u);
}
let lt;
typeof HTMLElement == "function" && (lt = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    $(this, "$$ctor");
    /** Slots */
    $(this, "$$s");
    /** The Svelte component instance */
    $(this, "$$c");
    /** Whether or not the custom element is connected */
    $(this, "$$cn", !1);
    /** Component props data */
    $(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    $(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    $(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    $(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const o = this.$$c.$on(e, t);
      this.$$l_u.set(t, o);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const o = this.$$l_u.get(t);
      o && (o(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(l) {
        return () => {
          let s;
          return {
            c: function() {
              s = N("slot"), l !== "default" && f(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(h, P) {
              D(h, s, P);
            },
            d: function(h) {
              h && Z(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Mt(this);
      for (const l of this.$$s)
        l in i && (t[l] = [e(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = we(s, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$scope: {
            ctx: []
          }
        }
      });
      const o = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const s = we(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const l in this.$$l)
        for (const s of this.$$l[l]) {
          const a = this.$$c.$on(l, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var o;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = we(e, i, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function we(r, e, t, i) {
  var l;
  const o = (l = t[r]) == null ? void 0 : l.type;
  if (e = o === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[r])
    return e;
  if (i === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Bt(r, e, t, i, o, l) {
  let s = class extends lt {
    constructor() {
      super(r, t, o), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (a) => (e[a].attribute || a).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(u) {
        var h;
        u = we(a, u, e), this.$$d[a] = u, (h = this.$$c) == null || h.$set({ [a]: u });
      }
    });
  }), i.forEach((a) => {
    Object.defineProperty(s.prototype, a, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[a];
      }
    });
  }), l && (s = l(s)), r.element = /** @type {any} */
  s, s;
}
class Ot {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Gt(this, 1), this.$destroy = ie;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!nt(t))
      return ie;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const o = i.indexOf(t);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ct(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Yt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Yt);
const Kt = new TextEncoder();
function zt(r) {
  return [...new Uint8Array(r)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Jt(r, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  r || (r = Math.round(Math.random() * t));
  const o = await st(i, r, e);
  return {
    algorithm: e,
    challenge: o,
    salt: i,
    signature: ""
  };
}
async function st(r, e, t) {
  return zt(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Kt.encode(r + e)
    )
  );
}
function qt(r, e, t = "SHA-256", i = 1e6, o = 0) {
  const l = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let u = o; u <= i; u += 1) {
        if (l.signal.aborted)
          return null;
        if (await st(e, u, t) === r)
          return {
            number: u,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: l
  };
}
var b = /* @__PURE__ */ ((r) => (r.ERROR = "error", r.VERIFIED = "verified", r.VERIFYING = "verifying", r.UNVERIFIED = "unverified", r.EXPIRED = "expired", r))(b || {});
function Qt(r) {
  Rt(r, "svelte-1ffb04m", '.powcha.svelte-1ffb04m.svelte-1ffb04m{background:var(--powcha-color-base, transparent);border:var(--powcha-border-width, 1px) solid var(--powcha-color-border, #a0a0a0);border-radius:var(--powcha-border-radius, 3px);color:var(--powcha-color-text, currentColor);display:flex;flex-direction:column;max-width:var(--powcha-max-width, 260px);position:relative;text-align:left}.powcha.svelte-1ffb04m.svelte-1ffb04m:focus-within{border-color:var(--powcha-color-border-focus, currentColor)}.powcha[data-floating].svelte-1ffb04m.svelte-1ffb04m{background:var(--powcha-color-base, white);display:none;filter:drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2));left:-100%;position:fixed;top:-100%;width:var(--powcha-max-width, 260px);z-index:999999}.powcha[data-floating=top].svelte-1ffb04m .powcha-anchor-arrow.svelte-1ffb04m{border-bottom-color:transparent;border-top-color:var(--powcha-color-border, #a0a0a0);bottom:-12px;top:auto}.powcha[data-floating=bottom].svelte-1ffb04m.svelte-1ffb04m:focus-within::after{border-bottom-color:var(--powcha-color-border-focus, currentColor)}.powcha[data-floating=top].svelte-1ffb04m.svelte-1ffb04m:focus-within::after{border-top-color:var(--powcha-color-border-focus, currentColor)}.powcha[data-floating].svelte-1ffb04m.svelte-1ffb04m:not([data-state=unverified]){display:block}.powcha-anchor-arrow.svelte-1ffb04m.svelte-1ffb04m{border:6px solid transparent;border-bottom-color:var(--powcha-color-border, #a0a0a0);content:"";height:0;left:12px;position:absolute;top:-12px;width:0}.powcha-main.svelte-1ffb04m.svelte-1ffb04m{align-items:center;display:flex;gap:0.4rem;padding:0.7rem}.powcha-label.svelte-1ffb04m.svelte-1ffb04m{flex-grow:1}.powcha-label.svelte-1ffb04m label.svelte-1ffb04m{cursor:pointer}.powcha-brand.svelte-1ffb04m.svelte-1ffb04m{display:flex;align-items:center;height:24px;width:24px}.powcha-logo.svelte-1ffb04m.svelte-1ffb04m{color:currentColor;opacity:0.3}.powcha-logo.svelte-1ffb04m.svelte-1ffb04m:hover{opacity:1}.powcha-error.svelte-1ffb04m.svelte-1ffb04m{color:var(--powcha-color-error-text, #f23939);display:flex;font-size:0.85rem;gap:0.3rem;padding:0 0.7rem 0.7rem}.powcha-footer.svelte-1ffb04m.svelte-1ffb04m{align-items:center;background-color:var(--powcha-color-footer-bg, transparent);display:flex;font-size:0.75rem;opacity:0.4;padding:0.2rem 0.7rem;text-align:right}.powcha-footer.svelte-1ffb04m.svelte-1ffb04m:hover{opacity:1}.powcha-footer.svelte-1ffb04m>.svelte-1ffb04m:first-child{flex-grow:1}.powcha-footer.svelte-1ffb04m a{color:currentColor}.powcha-checkbox.svelte-1ffb04m.svelte-1ffb04m{display:flex;align-items:center;height:24px;width:24px}.powcha-checkbox.svelte-1ffb04m input.svelte-1ffb04m{width:18px;height:18px;margin:0}.powcha-hidden.svelte-1ffb04m.svelte-1ffb04m{display:none}.powcha-spinner.svelte-1ffb04m.svelte-1ffb04m{animation:svelte-1ffb04m-powcha-spinner 0.75s infinite linear;transform-origin:center}@keyframes svelte-1ffb04m-powcha-spinner{100%{transform:rotate(360deg)}}');
}
function Ye(r) {
  let e, t, i;
  return {
    c() {
      e = Q("svg"), t = Q("path"), i = Q("path"), f(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), f(t, "fill", "currentColor"), f(t, "opacity", ".25"), f(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), f(i, "fill", "currentColor"), f(i, "class", "powcha-spinner svelte-1ffb04m"), f(e, "width", "24"), f(e, "height", "24"), f(e, "viewBox", "0 0 24 24"), f(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(o, l) {
      D(o, e, l), C(e, t), C(e, i);
    },
    d(o) {
      o && Z(e);
    }
  };
}
function er(r) {
  let e, t = (
    /*_strings*/
    r[12].label + ""
  ), i;
  return {
    c() {
      e = N("label"), f(e, "for", i = /*name*/
      r[4] + "_checkbox"), f(e, "class", "svelte-1ffb04m");
    },
    m(o, l) {
      D(o, e, l), e.innerHTML = t;
    },
    p(o, l) {
      l[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      o[12].label + "") && (e.innerHTML = t), l[0] & /*name*/
      16 && i !== (i = /*name*/
      o[4] + "_checkbox") && f(e, "for", i);
    },
    d(o) {
      o && Z(e);
    }
  };
}
function tr(r) {
  let e, t = (
    /*_strings*/
    r[12].verifying + ""
  );
  return {
    c() {
      e = N("span");
    },
    m(i, o) {
      D(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      i[12].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && Z(e);
    }
  };
}
function rr(r) {
  let e, t = (
    /*_strings*/
    r[12].verified + ""
  ), i, o;
  return {
    c() {
      e = N("span"), i = O(), o = N("input"), f(o, "type", "hidden"), f(
        o,
        "name",
        /*formfieldname*/
        r[5]
      ), o.value = /*payload*/
      r[6];
    },
    m(l, s) {
      D(l, e, s), e.innerHTML = t, D(l, i, s), D(l, o, s);
    },
    p(l, s) {
      s[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      l[12].verified + "") && (e.innerHTML = t), s[0] & /*formfieldname*/
      32 && f(
        o,
        "name",
        /*formfieldname*/
        l[5]
      ), s[0] & /*payload*/
      64 && (o.value = /*payload*/
      l[6]);
    },
    d(l) {
      l && (Z(e), Z(i), Z(o));
    }
  };
}
function Ke(r) {
  let e, t, i, o, l;
  return {
    c() {
      e = N("div"), t = N("a"), i = Q("svg"), o = Q("path"), f(o, "d", "M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"), f(o, "fill", "currentColor"), f(i, "width", "24"), f(i, "height", "24"), f(i, "viewBox", "0 0 24 24"), f(i, "fill", "none"), f(i, "xmlns", "http://www.w3.org/2000/svg"), f(t, "href", ft), f(t, "target", "_blank"), f(t, "class", "powcha-logo svelte-1ffb04m"), f(t, "aria-label", l = /*_strings*/
      r[12].ariaLinkLabel), f(e, "class", "powcha-brand svelte-1ffb04m");
    },
    m(s, a) {
      D(s, e, a), C(e, t), C(t, i), C(i, o);
    },
    p(s, a) {
      a[0] & /*_strings*/
      4096 && l !== (l = /*_strings*/
      s[12].ariaLinkLabel) && f(t, "aria-label", l);
    },
    d(s) {
      s && Z(e);
    }
  };
}
function ze(r) {
  let e, t, i, o;
  function l(u, h) {
    return (
      /*state*/
      u[7] === b.EXPIRED ? ir : nr
    );
  }
  let s = l(r), a = s(r);
  return {
    c() {
      e = N("div"), t = Q("svg"), i = Q("path"), o = O(), a.c(), f(i, "stroke-linecap", "round"), f(i, "stroke-linejoin", "round"), f(i, "d", "M6 18L18 6M6 6l12 12"), f(t, "width", "14"), f(t, "height", "14"), f(t, "xmlns", "http://www.w3.org/2000/svg"), f(t, "fill", "none"), f(t, "viewBox", "0 0 24 24"), f(t, "stroke-width", "1.5"), f(t, "stroke", "currentColor"), f(e, "class", "powcha-error svelte-1ffb04m");
    },
    m(u, h) {
      D(u, e, h), C(e, t), C(t, i), C(e, o), a.m(e, null);
    },
    p(u, h) {
      s === (s = l(u)) && a ? a.p(u, h) : (a.d(1), a = s(u), a && (a.c(), a.m(e, null)));
    },
    d(u) {
      u && Z(e), a.d();
    }
  };
}
function nr(r) {
  let e, t = (
    /*_strings*/
    r[12].error + ""
  );
  return {
    c() {
      e = N("div"), f(
        e,
        "title",
        /*error*/
        r[11]
      );
    },
    m(i, o) {
      D(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      i[12].error + "") && (e.innerHTML = t), o[0] & /*error*/
      2048 && f(
        e,
        "title",
        /*error*/
        i[11]
      );
    },
    d(i) {
      i && Z(e);
    }
  };
}
function ir(r) {
  let e, t = (
    /*_strings*/
    r[12].expired + ""
  );
  return {
    c() {
      e = N("div"), f(
        e,
        "title",
        /*error*/
        r[11]
      );
    },
    m(i, o) {
      D(i, e, o), e.innerHTML = t;
    },
    p(i, o) {
      o[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      i[12].expired + "") && (e.innerHTML = t), o[0] & /*error*/
      2048 && f(
        e,
        "title",
        /*error*/
        i[11]
      );
    },
    d(i) {
      i && Z(e);
    }
  };
}
function Je(r) {
  let e, t, i = (
    /*_strings*/
    r[12].footer + ""
  );
  return {
    c() {
      e = N("div"), t = N("div"), f(t, "class", "svelte-1ffb04m"), f(e, "class", "powcha-footer svelte-1ffb04m");
    },
    m(o, l) {
      D(o, e, l), C(e, t), t.innerHTML = i;
    },
    p(o, l) {
      l[0] & /*_strings*/
      4096 && i !== (i = /*_strings*/
      o[12].footer + "") && (t.innerHTML = i);
    },
    d(o) {
      o && Z(e);
    }
  };
}
function qe(r) {
  let e;
  return {
    c() {
      e = N("div"), f(e, "class", "powcha-anchor-arrow svelte-1ffb04m");
    },
    m(t, i) {
      D(t, e, i), r[37](e);
    },
    p: ie,
    d(t) {
      t && Z(e), r[37](null);
    }
  };
}
function or(r) {
  let e, t, i, o, l, s, a, u, h, P, j, V, _, U, Y, S = (
    /*state*/
    r[7] === b.VERIFYING && Ye()
  );
  function ee(d, w) {
    return (
      /*state*/
      d[7] === b.VERIFIED ? rr : (
        /*state*/
        d[7] === b.VERIFYING ? tr : er
      )
    );
  }
  let X = ee(r), F = X(r), k = (
    /*hidelogo*/
    r[3] !== !0 && Ke(r)
  ), R = (
    /*error*/
    (r[11] || /*state*/
    r[7] === b.EXPIRED) && ze(r)
  ), I = (
    /*_strings*/
    r[12].footer && /*hidefooter*/
    r[2] !== !0 && Je(r)
  ), p = (
    /*floating*/
    r[1] && qe(r)
  );
  return {
    c() {
      e = N("div"), t = N("div"), S && S.c(), i = O(), o = N("div"), l = N("input"), u = O(), h = N("div"), F.c(), P = O(), k && k.c(), j = O(), R && R.c(), V = O(), I && I.c(), _ = O(), p && p.c(), f(l, "type", "checkbox"), f(l, "id", s = /*name*/
      r[4] + "_checkbox"), l.required = a = /*auto*/
      r[0] !== "onsubmit", f(l, "class", "svelte-1ffb04m"), f(o, "class", "powcha-checkbox svelte-1ffb04m"), Be(
        o,
        "powcha-hidden",
        /*state*/
        r[7] === b.VERIFYING
      ), f(h, "class", "powcha-label svelte-1ffb04m"), f(t, "class", "powcha-main svelte-1ffb04m"), f(e, "class", "powcha svelte-1ffb04m"), f(
        e,
        "data-state",
        /*state*/
        r[7]
      ), f(
        e,
        "data-floating",
        /*floating*/
        r[1]
      );
    },
    m(d, w) {
      D(d, e, w), C(e, t), S && S.m(t, null), C(t, i), C(t, o), C(o, l), l.checked = /*checked*/
      r[8], C(t, u), C(t, h), F.m(h, null), C(t, P), k && k.m(t, null), C(e, j), R && R.m(e, null), C(e, V), I && I.m(e, null), C(e, _), p && p.m(e, null), r[38](e), U || (Y = [
        xe(
          l,
          "change",
          /*input_change_handler*/
          r[36]
        ),
        xe(
          l,
          "change",
          /*onCheckedChange*/
          r[13]
        ),
        xe(
          l,
          "invalid",
          /*onInvalid*/
          r[14]
        )
      ], U = !0);
    },
    p(d, w) {
      /*state*/
      d[7] === b.VERIFYING ? S || (S = Ye(), S.c(), S.m(t, i)) : S && (S.d(1), S = null), w[0] & /*name*/
      16 && s !== (s = /*name*/
      d[4] + "_checkbox") && f(l, "id", s), w[0] & /*auto*/
      1 && a !== (a = /*auto*/
      d[0] !== "onsubmit") && (l.required = a), w[0] & /*checked*/
      256 && (l.checked = /*checked*/
      d[8]), w[0] & /*state*/
      128 && Be(
        o,
        "powcha-hidden",
        /*state*/
        d[7] === b.VERIFYING
      ), X === (X = ee(d)) && F ? F.p(d, w) : (F.d(1), F = X(d), F && (F.c(), F.m(h, null))), /*hidelogo*/
      d[3] !== !0 ? k ? k.p(d, w) : (k = Ke(d), k.c(), k.m(t, null)) : k && (k.d(1), k = null), /*error*/
      d[11] || /*state*/
      d[7] === b.EXPIRED ? R ? R.p(d, w) : (R = ze(d), R.c(), R.m(e, V)) : R && (R.d(1), R = null), /*_strings*/
      d[12].footer && /*hidefooter*/
      d[2] !== !0 ? I ? I.p(d, w) : (I = Je(d), I.c(), I.m(e, _)) : I && (I.d(1), I = null), /*floating*/
      d[1] ? p ? p.p(d, w) : (p = qe(d), p.c(), p.m(e, null)) : p && (p.d(1), p = null), w[0] & /*state*/
      128 && f(
        e,
        "data-state",
        /*state*/
        d[7]
      ), w[0] & /*floating*/
      2 && f(
        e,
        "data-floating",
        /*floating*/
        d[1]
      );
    },
    i: ie,
    o: ie,
    d(d) {
      d && Z(e), S && S.d(), F.d(), k && k.d(), R && R.d(), I && I.d(), p && p.d(), r[38](null), U = !1, ae(Y);
    }
  };
}
const Qe = "PoWCHA", ft = "https://github.com/TundraWork/powcha-web";
function et(r) {
  return JSON.parse(r);
}
function lr() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function sr(r, e, t) {
  var $e, Ge;
  let i, o, l, { auto: s = void 0 } = e, { blockspam: a = void 0 } = e, { challengeurl: u = void 0 } = e, { challengejson: h = void 0 } = e, { debug: P = !1 } = e, { delay: j = 0 } = e, { expire: V = void 0 } = e, { floating: _ = void 0 } = e, { floatinganchor: U = void 0 } = e, { floatingoffset: Y = void 0 } = e, { hidefooter: S = !1 } = e, { hidelogo: ee = !1 } = e, { name: X = "powcha" } = e, { formfieldname: F = "powcha" } = e, { maxnumber: k = 1e6 } = e, { mockerror: R = !1 } = e, { refetchonexpire: I = !0 } = e, { spamfilter: p = !1 } = e, { strings: d = void 0 } = e, { test: w = !1 } = e, { verifyurl: K = void 0 } = e, { workers: oe = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ue = void 0 } = e;
  const pe = Wt(), Ie = ["SHA-256", "SHA-384", "SHA-512"], Ae = (Ge = ($e = document.documentElement.lang) == null ? void 0 : $e.split("-")) == null ? void 0 : Ge[0];
  let B = !1, x, z = null, he = null, g = null, ye = null, J = null, T = b.UNVERIFIED, G = null;
  Tt(() => {
    g && (g.removeEventListener("submit", Se), g.removeEventListener("reset", je), g.removeEventListener("focusin", Ne), g = null), G && (clearTimeout(G), G = null), document.removeEventListener("click", We), document.removeEventListener("scroll", De), window.removeEventListener("resize", Fe);
  }), Zt(() => {
    E("mounted", "0.6.5"), E("workers", oe), w && E("using test mode"), V && de(V), s !== void 0 && E("auto", s), _ !== void 0 && Pe(_), g = x.closest("form"), g && (g.addEventListener("submit", Se, { capture: !0 }), g.addEventListener("reset", je), s === "onfocus" && g.addEventListener("focusin", Ne)), s === "onload" && q();
  });
  function E(...n) {
    (P || n.some((c) => c instanceof Error)) && console[n[0] instanceof Error ? "error" : "log"]("PoWCHA", ...n);
  }
  function Ne(n) {
    T === b.UNVERIFIED && q();
  }
  function Se(n) {
    g && s === "onsubmit" && (T === b.UNVERIFIED ? (n.preventDefault(), n.stopPropagation(), q().then(() => {
      g == null || g.requestSubmit();
    })) : T !== b.VERIFIED && (n.preventDefault(), n.stopPropagation(), T === b.VERIFYING && Ve()));
  }
  function je() {
    me();
  }
  function Me(n, c) {
    return btoa(JSON.stringify({
      algorithm: n.algorithm,
      challenge: n.challenge,
      number: c.number,
      salt: n.salt,
      signature: n.signature,
      test: w ? !0 : void 0,
      took: c.took
    }));
  }
  function Ze(n) {
    if (!n.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (n.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ie.includes(n.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ie.join(", ")}`);
    if (!n.challenge || n.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!n.salt || n.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function ct() {
    var n;
    if (R)
      throw E("mocking error"), new Error("Mocked error.");
    if (i)
      return E("using provided json data"), i;
    if (w)
      return E("generating test challenge", { test: w }), Jt(typeof w != "boolean" ? +w : void 0);
    {
      if (!u)
        throw new Error("Attribute challengeurl not set.");
      E("fetching challenge from", u);
      const c = await fetch(u, {
        headers: {
          "x-powcha-spam-filter": p ? "1" : "0"
        }
      });
      if (c.status !== 200)
        throw new Error(`Server responded with ${c.status}.`);
      const m = c.headers.get("Expires"), A = c.headers.get("X-powcha-Config"), W = await c.json(), M = new URLSearchParams((n = W.salt.split("?")) == null ? void 0 : n[1]), H = M.get("expires") || M.get("expire");
      if (H) {
        const y = new Date(+H * 1e3), L = isNaN(y.getTime()) ? 0 : y.getTime() - Date.now();
        L > 0 && de(L);
      }
      if (A)
        try {
          const y = JSON.parse(A);
          y && typeof y == "object" && (y.verifyurl && (y.verifyurl = new URL(y.verifyurl, new URL(u)).toString()), Ue(y));
        } catch (y) {
          E("unable to configure from X-powcha-Config", y);
        }
      if (!V && (m != null && m.length)) {
        const y = Date.parse(m);
        if (y) {
          const L = y - Date.now();
          L > 0 && de(L);
        }
      }
      return W;
    }
  }
  function Te() {
    u && I && T === b.VERIFIED ? q() : me(b.EXPIRED, l.expired);
  }
  async function at(n) {
    let c = null;
    if ("Worker" in window) {
      try {
        c = await ut(n.challenge, n.salt, n.algorithm, n.maxnumber);
      } catch (m) {
        E(m);
      }
      if ((c == null ? void 0 : c.number) !== void 0)
        return { data: n, solution: c };
    }
    return {
      data: n,
      solution: await qt(n.challenge, n.salt, n.algorithm, n.maxnumber || k).promise
    };
  }
  async function ut(n, c, m, A = typeof w == "number" ? w : k, W = Math.ceil(oe)) {
    const M = [];
    W = Math.min(16, Math.max(1, W));
    for (let L = 0; L < W; L++)
      M.push(createPoWCHAWorker(ue));
    const H = Math.ceil(A / W), y = await Promise.all(M.map((L, ke) => {
      const le = ke * H;
      return new Promise((ge) => {
        L.addEventListener("message", (be) => {
          if (be.data)
            for (const se of M)
              se !== L && se.postMessage({ type: "abort" });
          ge(be.data);
        }), L.postMessage({
          payload: {
            alg: m,
            challenge: n,
            max: le + H,
            salt: c,
            start: le
          },
          type: "work"
        });
      });
    }));
    for (const L of M)
      L.terminate();
    return y.find((L) => !!L) || null;
  }
  function ht() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(T) ? p && (g == null ? void 0 : g.reportValidity()) === !1 ? t(8, B = !1) : q() : t(8, B = !0);
  }
  function We(n) {
    const c = n.target;
    _ && c && !x.contains(c) && T === b.VERIFIED && t(9, x.style.display = "none", x);
  }
  function De() {
    _ && _e();
  }
  function Ve() {
    T === b.VERIFYING && l.waitAlert && alert(l.waitAlert);
  }
  function dt(n) {
    _ && T !== b.UNVERIFIED && requestAnimationFrame(() => {
      _e();
    });
  }
  function Fe() {
    _ && _e();
  }
  function de(n) {
    E("expire", n), G && (clearTimeout(G), G = null), n < 1 ? Te() : G = setTimeout(Te, n);
  }
  function Pe(n) {
    E("floating", n), _ !== n && (t(9, x.style.left = "", x), t(9, x.style.top = "", x)), t(1, _ = n === !0 || n === "" ? "auto" : n === !1 || n === "false" ? void 0 : _), _ ? (s || t(0, s = "onsubmit"), document.addEventListener("scroll", De), document.addEventListener("click", We), window.addEventListener("resize", Fe)) : s === "onsubmit" && t(0, s = void 0);
  }
  function mt(n) {
    var m;
    const c = g == null ? void 0 : g.querySelector(typeof n == "string" ? `input[name="${n}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((m = c == null ? void 0 : c.value) == null ? void 0 : m.slice(c.value.indexOf("@"))) || void 0;
  }
  function gt(n) {
    return [
      ...(g == null ? void 0 : g.querySelectorAll(n != null && n.length ? n.map((m) => `input[name="${m}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (m, A) => {
        const W = A.name, M = A.value;
        return W && M && (m[W] = /\n/.test(M) ? M.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : M), m;
      },
      {}
    );
  }
  async function bt(n) {
    if (!K)
      throw new Error("Attribute verifyurl not set.");
    E("requesting server verification from", K);
    const c = { payload: n };
    if (p) {
      const { blockedCountries: W, classifier: M, disableRules: H, email: y, expectedLanguages: L, expectedCountries: ke, fields: le, ipAddress: ge, text: be, timeZone: se } = wt();
      c.blockedCountries = W, c.classifier = M, c.disableRules = H, c.email = y === !1 ? void 0 : mt(y), c.expectedCountries = ke, c.expectedLanguages = L || (Ae ? [Ae] : void 0), c.fields = le === !1 ? void 0 : gt(le), c.ipAddress = ge === !1 ? void 0 : ge || "auto", c.text = be, c.timeZone = se === !1 ? void 0 : se || lr();
    }
    const m = await fetch(K, {
      body: JSON.stringify(c),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (m.status !== 200)
      throw new Error(`Server responded with ${m.status}.`);
    const A = await m.json();
    if (A != null && A.payload && t(6, J = A.payload), pe("serververification", A), a && A.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function wt() {
    return p === "ipAddress" ? {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: !1,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: !1,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    } : typeof p == "object" ? p : {
      blockedCountries: void 0,
      classifier: void 0,
      disableRules: void 0,
      email: void 0,
      expectedCountries: void 0,
      expectedLanguages: void 0,
      fields: void 0,
      ipAddress: void 0,
      text: void 0,
      timeZone: void 0
    };
  }
  function _e(n = 20) {
    if (x)
      if (he || (he = (U ? document.querySelector(U) : g == null ? void 0 : g.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || g), he) {
        const c = parseInt(Y, 10) || 12, m = he.getBoundingClientRect(), A = x.getBoundingClientRect(), W = document.documentElement.clientHeight, M = document.documentElement.clientWidth, H = _ === "auto" ? m.bottom + A.height + c + n > W : _ === "top", y = Math.max(n, Math.min(M - n - A.width, m.left + m.width / 2 - A.width / 2));
        if (H ? t(9, x.style.top = `${m.top - (A.height + c)}px`, x) : t(9, x.style.top = `${m.bottom + c}px`, x), t(9, x.style.left = `${y}px`, x), x.setAttribute("data-floating", H ? "top" : "bottom"), z) {
          const L = z.getBoundingClientRect();
          t(10, z.style.left = m.left - y + m.width / 2 - L.width / 2 + "px", z);
        }
      } else
        E("unable to find floating anchor element");
  }
  function Ue(n) {
    n.auto !== void 0 && (t(0, s = n.auto), s === "onload" && q()), n.floatinganchor !== void 0 && t(19, U = n.floatinganchor), n.delay !== void 0 && t(17, j = n.delay), n.floatingoffset !== void 0 && t(20, Y = n.floatingoffset), n.floating !== void 0 && Pe(n.floating), n.expire !== void 0 && (de(n.expire), t(18, V = n.expire)), n.challenge && (Ze(n.challenge), i = n.challenge), n.challengeurl !== void 0 && t(15, u = n.challengeurl), n.debug !== void 0 && t(16, P = !!n.debug), n.hidefooter !== void 0 && t(2, S = !!n.hidefooter), n.hidelogo !== void 0 && t(3, ee = !!n.hidelogo), n.maxnumber !== void 0 && t(21, k = +n.maxnumber), n.mockerror !== void 0 && t(22, R = !!n.mockerror), n.name !== void 0 && t(4, X = n.name), n.refetchonexpire !== void 0 && t(23, I = !!n.refetchonexpire), n.spamfilter !== void 0 && t(24, p = typeof n.spamfilter == "object" ? n.spamfilter : !!n.spamfilter), n.strings && t(35, o = n.strings), n.test !== void 0 && t(25, w = typeof n.test == "number" ? n.test : !!n.test), n.verifyurl !== void 0 && t(26, K = n.verifyurl), n.workers !== void 0 && t(27, oe = +n.workers), n.workerurl !== void 0 && t(28, ue = n.workerurl);
  }
  function me(n = b.UNVERIFIED, c = null) {
    G && (clearTimeout(G), G = null), t(8, B = !1), t(11, ye = c), t(6, J = null), t(7, T = n);
  }
  async function q() {
    return me(b.VERIFYING), await new Promise((n) => setTimeout(n, j || 0)), ct().then((n) => (Ze(n), E("challenge", n), at(n))).then(({ data: n, solution: c }) => {
      if (E("solution", c), (c == null ? void 0 : c.number) !== void 0) {
        if (K)
          return bt(Me(n, c));
        t(6, J = Me(n, c)), E("payload", J);
      } else
        throw E("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      Dt().then(() => {
        t(7, T = b.VERIFIED), t(8, B = !0), E("verified"), pe("verified", { payload: J });
      });
    }).catch((n) => {
      E(n), t(7, T = b.ERROR), t(8, B = !1), t(11, ye = n.message);
    });
  }
  function vt() {
    B = this.checked, t(8, B);
  }
  function pt(n) {
    ve[n ? "unshift" : "push"](() => {
      z = n, t(10, z);
    });
  }
  function yt(n) {
    ve[n ? "unshift" : "push"](() => {
      x = n, t(9, x);
    });
  }
  return r.$$set = (n) => {
    "auto" in n && t(0, s = n.auto), "blockspam" in n && t(29, a = n.blockspam), "challengeurl" in n && t(15, u = n.challengeurl), "challengejson" in n && t(30, h = n.challengejson), "debug" in n && t(16, P = n.debug), "delay" in n && t(17, j = n.delay), "expire" in n && t(18, V = n.expire), "floating" in n && t(1, _ = n.floating), "floatinganchor" in n && t(19, U = n.floatinganchor), "floatingoffset" in n && t(20, Y = n.floatingoffset), "hidefooter" in n && t(2, S = n.hidefooter), "hidelogo" in n && t(3, ee = n.hidelogo), "name" in n && t(4, X = n.name), "formfieldname" in n && t(5, F = n.formfieldname), "maxnumber" in n && t(21, k = n.maxnumber), "mockerror" in n && t(22, R = n.mockerror), "refetchonexpire" in n && t(23, I = n.refetchonexpire), "spamfilter" in n && t(24, p = n.spamfilter), "strings" in n && t(31, d = n.strings), "test" in n && t(25, w = n.test), "verifyurl" in n && t(26, K = n.verifyurl), "workers" in n && t(27, oe = n.workers), "workerurl" in n && t(28, ue = n.workerurl);
  }, r.$$.update = () => {
    r.$$.dirty[0] & /*challengejson*/
    1073741824 && (i = h ? et(h) : void 0), r.$$.dirty[1] & /*strings*/
    1 && t(35, o = d ? et(d) : {}), r.$$.dirty[1] & /*parsedStrings*/
    16 && t(12, l = {
      ariaLinkLabel: Qe,
      error: "Verification failed. Try again later.",
      expired: "Work timed out. Please try again.",
      footer: `Protected by <a href="${ft}" target="_blank" aria-label="${o.ariaLinkLabel || Qe}">PoWCHA</a>`,
      label: "I'm not a bad robot",
      verified: "You're good to go! 🎉",
      verifying: "Working... ⚙️",
      waitAlert: "Still working... Please wait.",
      ...o
    }), r.$$.dirty[0] & /*payload, state*/
    192 && pe("statechange", { payload: J, state: T }), r.$$.dirty[0] & /*state*/
    128 && dt();
  }, [
    s,
    _,
    S,
    ee,
    X,
    F,
    J,
    T,
    B,
    x,
    z,
    ye,
    l,
    ht,
    Ve,
    u,
    P,
    j,
    V,
    U,
    Y,
    k,
    R,
    I,
    p,
    w,
    K,
    oe,
    ue,
    a,
    h,
    d,
    Ue,
    me,
    q,
    o,
    vt,
    pt,
    yt
  ];
}
class fr extends Ot {
  constructor(e) {
    super(), Xt(
      this,
      e,
      sr,
      or,
      Lt,
      {
        auto: 0,
        blockspam: 29,
        challengeurl: 15,
        challengejson: 30,
        debug: 16,
        delay: 17,
        expire: 18,
        floating: 1,
        floatinganchor: 19,
        floatingoffset: 20,
        hidefooter: 2,
        hidelogo: 3,
        name: 4,
        formfieldname: 5,
        maxnumber: 21,
        mockerror: 22,
        refetchonexpire: 23,
        spamfilter: 24,
        strings: 31,
        test: 25,
        verifyurl: 26,
        workers: 27,
        workerurl: 28,
        configure: 32,
        reset: 33,
        verify: 34
      },
      Qt,
      [-1, -1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), v();
  }
  get blockspam() {
    return this.$$.ctx[29];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), v();
  }
  get challengeurl() {
    return this.$$.ctx[15];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), v();
  }
  get challengejson() {
    return this.$$.ctx[30];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), v();
  }
  get debug() {
    return this.$$.ctx[16];
  }
  set debug(e) {
    this.$$set({ debug: e }), v();
  }
  get delay() {
    return this.$$.ctx[17];
  }
  set delay(e) {
    this.$$set({ delay: e }), v();
  }
  get expire() {
    return this.$$.ctx[18];
  }
  set expire(e) {
    this.$$set({ expire: e }), v();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), v();
  }
  get floatinganchor() {
    return this.$$.ctx[19];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), v();
  }
  get floatingoffset() {
    return this.$$.ctx[20];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), v();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), v();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), v();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), v();
  }
  get formfieldname() {
    return this.$$.ctx[5];
  }
  set formfieldname(e) {
    this.$$set({ formfieldname: e }), v();
  }
  get maxnumber() {
    return this.$$.ctx[21];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), v();
  }
  get mockerror() {
    return this.$$.ctx[22];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), v();
  }
  get refetchonexpire() {
    return this.$$.ctx[23];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), v();
  }
  get spamfilter() {
    return this.$$.ctx[24];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), v();
  }
  get strings() {
    return this.$$.ctx[31];
  }
  set strings(e) {
    this.$$set({ strings: e }), v();
  }
  get test() {
    return this.$$.ctx[25];
  }
  set test(e) {
    this.$$set({ test: e }), v();
  }
  get verifyurl() {
    return this.$$.ctx[26];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), v();
  }
  get workers() {
    return this.$$.ctx[27];
  }
  set workers(e) {
    this.$$set({ workers: e }), v();
  }
  get workerurl() {
    return this.$$.ctx[28];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), v();
  }
  get configure() {
    return this.$$.ctx[32];
  }
  get reset() {
    return this.$$.ctx[33];
  }
  get verify() {
    return this.$$.ctx[34];
  }
}
customElements.define("powcha-widget", Bt(fr, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, formfieldname: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createPoWCHAWorker = (r) => r ? new Worker(new URL(r)) : new Et();
export {
  fr as Altcha
};
