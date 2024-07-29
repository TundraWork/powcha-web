var yt = Object.defineProperty;
var vt = (n, e, t) => e in n ? yt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var B = (n, e, t) => vt(n, typeof e != "symbol" ? e + "" : e, t);
function ie() {
}
function et(n) {
  return n();
}
function We() {
  return /* @__PURE__ */ Object.create(null);
}
function ue(n) {
  n.forEach(et);
}
function tt(n) {
  return typeof n == "function";
}
function kt(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Et(n) {
  return Object.keys(n).length === 0;
}
function R(n, e) {
  n.appendChild(e);
}
function j(n, e, t) {
  n.insertBefore(e, t || null);
}
function P(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function $(n) {
  return document.createElement(n);
}
function Q(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function pt(n) {
  return document.createTextNode(n);
}
function G() {
  return pt(" ");
}
function pe(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function f(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
function xt(n) {
  return Array.from(n.childNodes);
}
function qe(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Lt(n, e, { bubbles: t = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: i });
}
function Ct(n) {
  const e = {};
  return n.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let ce;
function fe(n) {
  ce = n;
}
function Ie() {
  if (!ce) throw new Error("Function called outside component initialization");
  return ce;
}
function It(n) {
  Ie().$$.on_mount.push(n);
}
function At(n) {
  Ie().$$.on_destroy.push(n);
}
function Rt() {
  const n = Ie();
  return (e, t, { cancelable: i = !1 } = {}) => {
    const l = n.$$.callbacks[e];
    if (l) {
      const o = Lt(
        /** @type {string} */
        e,
        t,
        { cancelable: i }
      );
      return l.slice().forEach((s) => {
        s.call(n, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const ne = [], _e = [];
let re = [];
const Ye = [], nt = /* @__PURE__ */ Promise.resolve();
let Le = !1;
function rt() {
  Le || (Le = !0, nt.then(_));
}
function $t() {
  return rt(), nt;
}
function Ce(n) {
  re.push(n);
}
const xe = /* @__PURE__ */ new Set();
let te = 0;
function _() {
  if (te !== 0)
    return;
  const n = ce;
  do {
    try {
      for (; te < ne.length; ) {
        const e = ne[te];
        te++, fe(e), Mt(e.$$);
      }
    } catch (e) {
      throw ne.length = 0, te = 0, e;
    }
    for (fe(null), ne.length = 0, te = 0; _e.length; ) _e.pop()();
    for (let e = 0; e < re.length; e += 1) {
      const t = re[e];
      xe.has(t) || (xe.add(t), t());
    }
    re.length = 0;
  } while (ne.length);
  for (; Ye.length; )
    Ye.pop()();
  Le = !1, xe.clear(), fe(n);
}
function Mt(n) {
  if (n.fragment !== null) {
    n.update(), ue(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Ce);
  }
}
function St(n) {
  const e = [], t = [];
  re.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), re = e;
}
const Dt = /* @__PURE__ */ new Set();
function Pt(n, e) {
  n && n.i && (Dt.delete(n), n.i(e));
}
function Tt(n, e, t) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, t), Ce(() => {
    const o = n.$$.on_mount.map(et).filter(tt);
    n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ue(o), n.$$.on_mount = [];
  }), l.forEach(Ce);
}
function Nt(n, e) {
  const t = n.$$;
  t.fragment !== null && (St(t.after_update), ue(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function jt(n, e) {
  n.$$.dirty[0] === -1 && (ne.push(n), rt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ht(n, e, t, i, l, o, s = null, u = [-1]) {
  const a = ce;
  fe(n);
  const h = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: ie,
    not_equal: l,
    bound: We(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: We(),
    dirty: u,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(h.root);
  let F = !1;
  if (h.ctx = t ? t(n, e.props || {}, (S, H, ...k) => {
    const O = k.length ? k[0] : H;
    return h.ctx && l(h.ctx[S], h.ctx[S] = O) && (!h.skip_bound && h.bound[S] && h.bound[S](O), F && jt(n, S)), H;
  }) : [], h.update(), F = !0, ue(h.before_update), h.fragment = i ? i(h.ctx) : !1, e.target) {
    if (e.hydrate) {
      const S = xt(e.target);
      h.fragment && h.fragment.l(S), S.forEach(P);
    } else
      h.fragment && h.fragment.c();
    e.intro && Pt(n.$$.fragment), Tt(n, e.target, e.anchor), _();
  }
  fe(a);
}
let it;
typeof HTMLElement == "function" && (it = class extends HTMLElement {
  constructor(e, t, i) {
    super();
    /** The Svelte component constructor */
    B(this, "$$ctor");
    /** Slots */
    B(this, "$$s");
    /** The Svelte component instance */
    B(this, "$$c");
    /** Whether or not the custom element is connected */
    B(this, "$$cn", !1);
    /** Component props data */
    B(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    B(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    B(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    B(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    B(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const l = this.$$c.$on(e, t);
      this.$$l_u.set(t, l);
    }
    super.addEventListener(e, t, i);
  }
  removeEventListener(e, t, i) {
    if (super.removeEventListener(e, t, i), this.$$c) {
      const l = this.$$l_u.get(t);
      l && (l(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(o) {
        return () => {
          let s;
          return {
            c: function() {
              s = $("slot"), o !== "default" && f(s, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(h, F) {
              j(h, s, F);
            },
            d: function(h) {
              h && P(s);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, i = Ct(this);
      for (const o of this.$$s)
        o in i && (t[o] = [e(o)]);
      for (const o of this.attributes) {
        const s = this.$$g_p(o.name);
        s in this.$$d || (this.$$d[s] = we(s, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
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
      const l = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const s = we(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(l), l();
      for (const o in this.$$l)
        for (const s of this.$$l[o]) {
          const u = this.$$c.$on(o, s);
          this.$$l_u.set(s, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, i) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = we(e, i, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
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
function we(n, e, t, i) {
  var o;
  const l = (o = t[n]) == null ? void 0 : o.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !t[n])
    return e;
  if (i === "toAttribute")
    switch (l) {
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
    switch (l) {
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
function Vt(n, e, t, i, l, o) {
  let s = class extends it {
    constructor() {
      super(n, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (u) => (e[u].attribute || u).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(a) {
        var h;
        a = we(u, a, e), this.$$d[u] = a, (h = this.$$c) == null || h.$set({ [u]: a });
      }
    });
  }), i.forEach((u) => {
    Object.defineProperty(s.prototype, u, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[u];
      }
    });
  }), o && (s = o(s)), n.element = /** @type {any} */
  s, s;
}
class Ft {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    B(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Nt(this, 1), this.$destroy = ie;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!tt(t))
      return ie;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const l = i.indexOf(t);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Et(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
const Bt = new TextEncoder();
function Ut(n) {
  return [...new Uint8Array(n)].map((e) => e.toString(16).padStart(2, "0")).join("");
}
async function Wt(n, e = "SHA-256", t = 1e5) {
  const i = Date.now().toString(16);
  n || (n = Math.round(Math.random() * t));
  const l = await ot(i, n, e);
  return {
    algorithm: e,
    challenge: l,
    salt: i,
    signature: ""
  };
}
async function ot(n, e, t) {
  return Ut(
    await crypto.subtle.digest(
      t.toUpperCase(),
      Bt.encode(n + e)
    )
  );
}
function qt(n, e, t = "SHA-256", i = 1e6, l = 0) {
  const o = new AbortController(), s = Date.now();
  return {
    promise: (async () => {
      for (let a = l; a <= i; a += 1) {
        if (o.signal.aborted)
          return null;
        if (await ot(e, a, t) === n)
          return {
            number: a,
            took: Date.now() - s
          };
      }
      return null;
    })(),
    controller: o
  };
}
var b = /* @__PURE__ */ ((n) => (n.ERROR = "error", n.VERIFIED = "verified", n.VERIFYING = "verifying", n.UNVERIFIED = "unverified", n.EXPIRED = "expired", n))(b || {});
function Ge(n) {
  let e, t, i;
  return {
    c() {
      e = Q("svg"), t = Q("path"), i = Q("path"), f(t, "d", "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"), f(t, "fill", "currentColor"), f(t, "opacity", ".25"), f(i, "d", "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"), f(i, "fill", "currentColor"), f(i, "class", "powcha-spinner"), f(e, "width", "24"), f(e, "height", "24"), f(e, "viewBox", "0 0 24 24"), f(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, o) {
      j(l, e, o), R(e, t), R(e, i);
    },
    d(l) {
      l && P(e);
    }
  };
}
function Yt(n) {
  let e, t = (
    /*_strings*/
    n[12].label + ""
  ), i;
  return {
    c() {
      e = $("label"), f(e, "for", i = /*name*/
      n[4] + "_checkbox");
    },
    m(l, o) {
      j(l, e, o), e.innerHTML = t;
    },
    p(l, o) {
      o[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      l[12].label + "") && (e.innerHTML = t), o[0] & /*name*/
      16 && i !== (i = /*name*/
      l[4] + "_checkbox") && f(e, "for", i);
    },
    d(l) {
      l && P(e);
    }
  };
}
function Gt(n) {
  let e, t = (
    /*_strings*/
    n[12].verifying + ""
  );
  return {
    c() {
      e = $("span");
    },
    m(i, l) {
      j(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      i[12].verifying + "") && (e.innerHTML = t);
    },
    d(i) {
      i && P(e);
    }
  };
}
function Zt(n) {
  let e, t = (
    /*_strings*/
    n[12].verified + ""
  ), i, l;
  return {
    c() {
      e = $("span"), i = G(), l = $("input"), f(l, "type", "hidden"), f(
        l,
        "name",
        /*formfieldname*/
        n[5]
      ), l.value = /*payload*/
      n[6];
    },
    m(o, s) {
      j(o, e, s), e.innerHTML = t, j(o, i, s), j(o, l, s);
    },
    p(o, s) {
      s[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      o[12].verified + "") && (e.innerHTML = t), s[0] & /*formfieldname*/
      32 && f(
        l,
        "name",
        /*formfieldname*/
        o[5]
      ), s[0] & /*payload*/
      64 && (l.value = /*payload*/
      o[6]);
    },
    d(o) {
      o && (P(e), P(i), P(l));
    }
  };
}
function Ze(n) {
  let e, t, i, l, o;
  return {
    c() {
      e = $("div"), t = $("a"), i = Q("svg"), l = Q("path"), f(l, "d", "M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z"), f(l, "fill", "currentColor"), f(i, "width", "24"), f(i, "height", "24"), f(i, "viewBox", "0 0 24 24"), f(i, "fill", "none"), f(i, "xmlns", "http://www.w3.org/2000/svg"), f(t, "href", lt), f(t, "target", "_blank"), f(t, "class", "powcha-logo"), f(t, "aria-label", o = /*_strings*/
      n[12].ariaLinkLabel), f(e, "class", "powcha-brand");
    },
    m(s, u) {
      j(s, e, u), R(e, t), R(t, i), R(i, l);
    },
    p(s, u) {
      u[0] & /*_strings*/
      4096 && o !== (o = /*_strings*/
      s[12].ariaLinkLabel) && f(t, "aria-label", o);
    },
    d(s) {
      s && P(e);
    }
  };
}
function Xe(n) {
  let e, t, i, l;
  function o(a, h) {
    return (
      /*state*/
      a[7] === b.EXPIRED ? Jt : Xt
    );
  }
  let s = o(n), u = s(n);
  return {
    c() {
      e = $("div"), t = Q("svg"), i = Q("path"), l = G(), u.c(), f(i, "stroke-linecap", "round"), f(i, "stroke-linejoin", "round"), f(i, "d", "M6 18L18 6M6 6l12 12"), f(t, "width", "14"), f(t, "height", "14"), f(t, "xmlns", "http://www.w3.org/2000/svg"), f(t, "fill", "none"), f(t, "viewBox", "0 0 24 24"), f(t, "stroke-width", "1.5"), f(t, "stroke", "currentColor"), f(e, "class", "powcha-error");
    },
    m(a, h) {
      j(a, e, h), R(e, t), R(t, i), R(e, l), u.m(e, null);
    },
    p(a, h) {
      s === (s = o(a)) && u ? u.p(a, h) : (u.d(1), u = s(a), u && (u.c(), u.m(e, null)));
    },
    d(a) {
      a && P(e), u.d();
    }
  };
}
function Xt(n) {
  let e, t = (
    /*_strings*/
    n[12].error + ""
  );
  return {
    c() {
      e = $("div"), f(
        e,
        "title",
        /*error*/
        n[11]
      );
    },
    m(i, l) {
      j(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      i[12].error + "") && (e.innerHTML = t), l[0] & /*error*/
      2048 && f(
        e,
        "title",
        /*error*/
        i[11]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function Jt(n) {
  let e, t = (
    /*_strings*/
    n[12].expired + ""
  );
  return {
    c() {
      e = $("div"), f(
        e,
        "title",
        /*error*/
        n[11]
      );
    },
    m(i, l) {
      j(i, e, l), e.innerHTML = t;
    },
    p(i, l) {
      l[0] & /*_strings*/
      4096 && t !== (t = /*_strings*/
      i[12].expired + "") && (e.innerHTML = t), l[0] & /*error*/
      2048 && f(
        e,
        "title",
        /*error*/
        i[11]
      );
    },
    d(i) {
      i && P(e);
    }
  };
}
function Je(n) {
  let e, t, i = (
    /*_strings*/
    n[12].footer + ""
  );
  return {
    c() {
      e = $("div"), t = $("div"), f(e, "class", "powcha-footer");
    },
    m(l, o) {
      j(l, e, o), R(e, t), t.innerHTML = i;
    },
    p(l, o) {
      o[0] & /*_strings*/
      4096 && i !== (i = /*_strings*/
      l[12].footer + "") && (t.innerHTML = i);
    },
    d(l) {
      l && P(e);
    }
  };
}
function ze(n) {
  let e;
  return {
    c() {
      e = $("div"), f(e, "class", "powcha-anchor-arrow");
    },
    m(t, i) {
      j(t, e, i), n[37](e);
    },
    p: ie,
    d(t) {
      t && P(e), n[37](null);
    }
  };
}
function zt(n) {
  let e, t, i, l, o, s, u, a, h, F, S, H, k, O, Z, M = (
    /*state*/
    n[7] === b.VERIFYING && Ge()
  );
  function ee(d, w) {
    return (
      /*state*/
      d[7] === b.VERIFIED ? Zt : (
        /*state*/
        d[7] === b.VERIFYING ? Gt : Yt
      )
    );
  }
  let q = ee(n), V = q(n), E = (
    /*hidelogo*/
    n[3] !== !0 && Ze(n)
  ), C = (
    /*error*/
    (n[11] || /*state*/
    n[7] === b.EXPIRED) && Xe(n)
  ), I = (
    /*_strings*/
    n[12].footer && /*hidefooter*/
    n[2] !== !0 && Je(n)
  ), y = (
    /*floating*/
    n[1] && ze(n)
  );
  return {
    c() {
      e = $("div"), t = $("div"), M && M.c(), i = G(), l = $("div"), o = $("input"), a = G(), h = $("div"), V.c(), F = G(), E && E.c(), S = G(), C && C.c(), H = G(), I && I.c(), k = G(), y && y.c(), f(o, "type", "checkbox"), f(o, "id", s = /*name*/
      n[4] + "_checkbox"), o.required = u = /*auto*/
      n[0] !== "onsubmit", f(l, "class", "powcha-checkbox"), qe(
        l,
        "powcha-hidden",
        /*state*/
        n[7] === b.VERIFYING
      ), f(h, "class", "powcha-label"), f(t, "class", "powcha-main"), f(e, "class", "powcha"), f(
        e,
        "data-state",
        /*state*/
        n[7]
      ), f(
        e,
        "data-floating",
        /*floating*/
        n[1]
      );
    },
    m(d, w) {
      j(d, e, w), R(e, t), M && M.m(t, null), R(t, i), R(t, l), R(l, o), o.checked = /*checked*/
      n[8], R(t, a), R(t, h), V.m(h, null), R(t, F), E && E.m(t, null), R(e, S), C && C.m(e, null), R(e, H), I && I.m(e, null), R(e, k), y && y.m(e, null), n[38](e), O || (Z = [
        pe(
          o,
          "change",
          /*input_change_handler*/
          n[36]
        ),
        pe(
          o,
          "change",
          /*onCheckedChange*/
          n[13]
        ),
        pe(
          o,
          "invalid",
          /*onInvalid*/
          n[14]
        )
      ], O = !0);
    },
    p(d, w) {
      /*state*/
      d[7] === b.VERIFYING ? M || (M = Ge(), M.c(), M.m(t, i)) : M && (M.d(1), M = null), w[0] & /*name*/
      16 && s !== (s = /*name*/
      d[4] + "_checkbox") && f(o, "id", s), w[0] & /*auto*/
      1 && u !== (u = /*auto*/
      d[0] !== "onsubmit") && (o.required = u), w[0] & /*checked*/
      256 && (o.checked = /*checked*/
      d[8]), w[0] & /*state*/
      128 && qe(
        l,
        "powcha-hidden",
        /*state*/
        d[7] === b.VERIFYING
      ), q === (q = ee(d)) && V ? V.p(d, w) : (V.d(1), V = q(d), V && (V.c(), V.m(h, null))), /*hidelogo*/
      d[3] !== !0 ? E ? E.p(d, w) : (E = Ze(d), E.c(), E.m(t, null)) : E && (E.d(1), E = null), /*error*/
      d[11] || /*state*/
      d[7] === b.EXPIRED ? C ? C.p(d, w) : (C = Xe(d), C.c(), C.m(e, H)) : C && (C.d(1), C = null), /*_strings*/
      d[12].footer && /*hidefooter*/
      d[2] !== !0 ? I ? I.p(d, w) : (I = Je(d), I.c(), I.m(e, k)) : I && (I.d(1), I = null), /*floating*/
      d[1] ? y ? y.p(d, w) : (y = ze(d), y.c(), y.m(e, null)) : y && (y.d(1), y = null), w[0] & /*state*/
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
      d && P(e), M && M.d(), V.d(), E && E.d(), C && C.d(), I && I.d(), y && y.d(), n[38](null), O = !1, ue(Z);
    }
  };
}
const Ke = "PoWCHA", lt = "https://github.com/TundraWork/powcha-web";
function Qe(n) {
  return JSON.parse(n);
}
function Kt() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Qt(n, e, t) {
  var Be, Ue;
  let i, l, o, { auto: s = void 0 } = e, { blockspam: u = void 0 } = e, { challengeurl: a = void 0 } = e, { challengejson: h = void 0 } = e, { debug: F = !1 } = e, { delay: S = 0 } = e, { expire: H = void 0 } = e, { floating: k = void 0 } = e, { floatinganchor: O = void 0 } = e, { floatingoffset: Z = void 0 } = e, { hidefooter: M = !1 } = e, { hidelogo: ee = !1 } = e, { name: q = "powcha" } = e, { formfieldname: V = "powcha" } = e, { maxnumber: E = 1e6 } = e, { mockerror: C = !1 } = e, { refetchonexpire: I = !0 } = e, { spamfilter: y = !1 } = e, { strings: d = void 0 } = e, { test: w = !1 } = e, { verifyurl: X = void 0 } = e, { workers: oe = Math.min(16, navigator.hardwareConcurrency || 8) } = e, { workerurl: ae = void 0 } = e;
  const ye = Rt(), Ae = ["SHA-256", "SHA-384", "SHA-512"], Re = (Ue = (Be = document.documentElement.lang) == null ? void 0 : Be.split("-")) == null ? void 0 : Ue[0];
  let Y = !1, p, J = null, he = null, m = null, ve = null, z = null, T = b.UNVERIFIED, U = null;
  At(() => {
    m && (m.removeEventListener("submit", Me), m.removeEventListener("reset", Se), m.removeEventListener("focusin", $e), m = null), U && (clearTimeout(U), U = null), document.removeEventListener("click", Ne), document.removeEventListener("scroll", je), window.removeEventListener("resize", Ve);
  }), It(() => {
    x("mounted", "0.6.5"), x("workers", oe), w && x("using test mode"), H && de(H), s !== void 0 && x("auto", s), k !== void 0 && Fe(k), m = p.closest("form"), m && (m.addEventListener("submit", Me, { capture: !0 }), m.addEventListener("reset", Se), s === "onfocus" && m.addEventListener("focusin", $e)), s === "onload" && K();
  });
  function x(...r) {
    (F || r.some((c) => c instanceof Error)) && console[r[0] instanceof Error ? "error" : "log"]("PoWCHA", ...r);
  }
  function $e(r) {
    T === b.UNVERIFIED && K();
  }
  function Me(r) {
    m && s === "onsubmit" && (T === b.UNVERIFIED ? (r.preventDefault(), r.stopPropagation(), K().then(() => {
      m == null || m.requestSubmit();
    })) : T !== b.VERIFIED && (r.preventDefault(), r.stopPropagation(), T === b.VERIFYING && He()));
  }
  function Se() {
    ge();
  }
  function De(r, c) {
    return btoa(JSON.stringify({
      algorithm: r.algorithm,
      challenge: r.challenge,
      number: c.number,
      salt: r.salt,
      signature: r.signature,
      test: w ? !0 : void 0,
      took: c.took
    }));
  }
  function Pe(r) {
    if (!r.algorithm)
      throw new Error("Invalid challenge. Property algorithm is missing.");
    if (r.signature === void 0)
      throw new Error("Invalid challenge. Property signature is missing.");
    if (!Ae.includes(r.algorithm.toUpperCase()))
      throw new Error(`Unknown algorithm value. Allowed values: ${Ae.join(", ")}`);
    if (!r.challenge || r.challenge.length < 40)
      throw new Error("Challenge is too short. Min. 40 chars.");
    if (!r.salt || r.salt.length < 10)
      throw new Error("Salt is too short. Min. 10 chars.");
  }
  async function st() {
    var r;
    if (C)
      throw x("mocking error"), new Error("Mocked error.");
    if (i)
      return x("using provided json data"), i;
    if (w)
      return x("generating test challenge", { test: w }), Wt(typeof w != "boolean" ? +w : void 0);
    {
      if (!a)
        throw new Error("Attribute challengeurl not set.");
      x("fetching challenge from", a);
      const c = await fetch(a, {
        headers: {
          "x-powcha-spam-filter": y ? "1" : "0"
        }
      });
      if (c.status !== 200)
        throw new Error(`Server responded with ${c.status}.`);
      const g = c.headers.get("Expires"), A = c.headers.get("X-powcha-Config"), N = await c.json(), D = new URLSearchParams((r = N.salt.split("?")) == null ? void 0 : r[1]), W = D.get("expires") || D.get("expire");
      if (W) {
        const v = new Date(+W * 1e3), L = isNaN(v.getTime()) ? 0 : v.getTime() - Date.now();
        L > 0 && de(L);
      }
      if (A)
        try {
          const v = JSON.parse(A);
          v && typeof v == "object" && (v.verifyurl && (v.verifyurl = new URL(v.verifyurl, new URL(a)).toString()), Oe(v));
        } catch (v) {
          x("unable to configure from X-powcha-Config", v);
        }
      if (!H && (g != null && g.length)) {
        const v = Date.parse(g);
        if (v) {
          const L = v - Date.now();
          L > 0 && de(L);
        }
      }
      return N;
    }
  }
  function Te() {
    a && I && T === b.VERIFIED ? K() : ge(b.EXPIRED, o.expired);
  }
  async function ft(r) {
    let c = null;
    if ("Worker" in window) {
      try {
        c = await ct(r.challenge, r.salt, r.algorithm, r.maxnumber);
      } catch (g) {
        x(g);
      }
      if ((c == null ? void 0 : c.number) !== void 0)
        return { data: r, solution: c };
    }
    return {
      data: r,
      solution: await qt(r.challenge, r.salt, r.algorithm, r.maxnumber || E).promise
    };
  }
  async function ct(r, c, g, A = typeof w == "number" ? w : E, N = Math.ceil(oe)) {
    const D = [];
    N = Math.min(16, Math.max(1, N));
    for (let L = 0; L < N; L++)
      D.push(createPoWCHAWorker(ae));
    const W = Math.ceil(A / N), v = await Promise.all(D.map((L, Ee) => {
      const le = Ee * W;
      return new Promise((me) => {
        L.addEventListener("message", (be) => {
          if (be.data)
            for (const se of D)
              se !== L && se.postMessage({ type: "abort" });
          me(be.data);
        }), L.postMessage({
          payload: {
            alg: g,
            challenge: r,
            max: le + W,
            salt: c,
            start: le
          },
          type: "work"
        });
      });
    }));
    for (const L of D)
      L.terminate();
    return v.find((L) => !!L) || null;
  }
  function ut() {
    [b.UNVERIFIED, b.ERROR, b.EXPIRED].includes(T) ? y && (m == null ? void 0 : m.reportValidity()) === !1 ? t(8, Y = !1) : K() : t(8, Y = !0);
  }
  function Ne(r) {
    const c = r.target;
    k && c && !p.contains(c) && T === b.VERIFIED && t(9, p.style.display = "none", p);
  }
  function je() {
    k && ke();
  }
  function He() {
    T === b.VERIFYING && o.waitAlert && alert(o.waitAlert);
  }
  function at(r) {
    k && T !== b.UNVERIFIED && requestAnimationFrame(() => {
      ke();
    });
  }
  function Ve() {
    k && ke();
  }
  function de(r) {
    x("expire", r), U && (clearTimeout(U), U = null), r < 1 ? Te() : U = setTimeout(Te, r);
  }
  function Fe(r) {
    x("floating", r), k !== r && (t(9, p.style.left = "", p), t(9, p.style.top = "", p)), t(1, k = r === !0 || r === "" ? "auto" : r === !1 || r === "false" ? void 0 : k), k ? (s || t(0, s = "onsubmit"), document.addEventListener("scroll", je), document.addEventListener("click", Ne), window.addEventListener("resize", Ve)) : s === "onsubmit" && t(0, s = void 0);
  }
  function ht(r) {
    var g;
    const c = m == null ? void 0 : m.querySelector(typeof r == "string" ? `input[name="${r}"]` : 'input[type="email"]:not([data-no-spamfilter])');
    return ((g = c == null ? void 0 : c.value) == null ? void 0 : g.slice(c.value.indexOf("@"))) || void 0;
  }
  function dt(r) {
    return [
      ...(m == null ? void 0 : m.querySelectorAll(r != null && r.length ? r.map((g) => `input[name="${g}"]`).join(", ") : 'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])')) || []
    ].reduce(
      (g, A) => {
        const N = A.name, D = A.value;
        return N && D && (g[N] = /\n/.test(D) ? D.replace(new RegExp("(?<!\\r)\\n", "g"), `\r
`) : D), g;
      },
      {}
    );
  }
  async function gt(r) {
    if (!X)
      throw new Error("Attribute verifyurl not set.");
    x("requesting server verification from", X);
    const c = { payload: r };
    if (y) {
      const { blockedCountries: N, classifier: D, disableRules: W, email: v, expectedLanguages: L, expectedCountries: Ee, fields: le, ipAddress: me, text: be, timeZone: se } = mt();
      c.blockedCountries = N, c.classifier = D, c.disableRules = W, c.email = v === !1 ? void 0 : ht(v), c.expectedCountries = Ee, c.expectedLanguages = L || (Re ? [Re] : void 0), c.fields = le === !1 ? void 0 : dt(le), c.ipAddress = me === !1 ? void 0 : me || "auto", c.text = be, c.timeZone = se === !1 ? void 0 : se || Kt();
    }
    const g = await fetch(X, {
      body: JSON.stringify(c),
      headers: { "content-type": "application/json" },
      method: "POST"
    });
    if (g.status !== 200)
      throw new Error(`Server responded with ${g.status}.`);
    const A = await g.json();
    if (A != null && A.payload && t(6, z = A.payload), ye("serververification", A), u && A.classification === "BAD")
      throw new Error("SpamFilter returned negative classification.");
  }
  function mt() {
    return y === "ipAddress" ? {
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
    } : typeof y == "object" ? y : {
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
  function ke(r = 20) {
    if (p)
      if (he || (he = (O ? document.querySelector(O) : m == null ? void 0 : m.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])')) || m), he) {
        const c = parseInt(Z, 10) || 12, g = he.getBoundingClientRect(), A = p.getBoundingClientRect(), N = document.documentElement.clientHeight, D = document.documentElement.clientWidth, W = k === "auto" ? g.bottom + A.height + c + r > N : k === "top", v = Math.max(r, Math.min(D - r - A.width, g.left + g.width / 2 - A.width / 2));
        if (W ? t(9, p.style.top = `${g.top - (A.height + c)}px`, p) : t(9, p.style.top = `${g.bottom + c}px`, p), t(9, p.style.left = `${v}px`, p), p.setAttribute("data-floating", W ? "top" : "bottom"), J) {
          const L = J.getBoundingClientRect();
          t(10, J.style.left = g.left - v + g.width / 2 - L.width / 2 + "px", J);
        }
      } else
        x("unable to find floating anchor element");
  }
  function Oe(r) {
    r.auto !== void 0 && (t(0, s = r.auto), s === "onload" && K()), r.floatinganchor !== void 0 && t(19, O = r.floatinganchor), r.delay !== void 0 && t(17, S = r.delay), r.floatingoffset !== void 0 && t(20, Z = r.floatingoffset), r.floating !== void 0 && Fe(r.floating), r.expire !== void 0 && (de(r.expire), t(18, H = r.expire)), r.challenge && (Pe(r.challenge), i = r.challenge), r.challengeurl !== void 0 && t(15, a = r.challengeurl), r.debug !== void 0 && t(16, F = !!r.debug), r.hidefooter !== void 0 && t(2, M = !!r.hidefooter), r.hidelogo !== void 0 && t(3, ee = !!r.hidelogo), r.maxnumber !== void 0 && t(21, E = +r.maxnumber), r.mockerror !== void 0 && t(22, C = !!r.mockerror), r.name !== void 0 && t(4, q = r.name), r.refetchonexpire !== void 0 && t(23, I = !!r.refetchonexpire), r.spamfilter !== void 0 && t(24, y = typeof r.spamfilter == "object" ? r.spamfilter : !!r.spamfilter), r.strings && t(35, l = r.strings), r.test !== void 0 && t(25, w = typeof r.test == "number" ? r.test : !!r.test), r.verifyurl !== void 0 && t(26, X = r.verifyurl), r.workers !== void 0 && t(27, oe = +r.workers), r.workerurl !== void 0 && t(28, ae = r.workerurl);
  }
  function ge(r = b.UNVERIFIED, c = null) {
    U && (clearTimeout(U), U = null), t(8, Y = !1), t(11, ve = c), t(6, z = null), t(7, T = r);
  }
  async function K() {
    return ge(b.VERIFYING), await new Promise((r) => setTimeout(r, S || 0)), st().then((r) => (Pe(r), x("challenge", r), ft(r))).then(({ data: r, solution: c }) => {
      if (x("solution", c), (c == null ? void 0 : c.number) !== void 0) {
        if (X)
          return gt(De(r, c));
        t(6, z = De(r, c)), x("payload", z);
      } else
        throw x("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."), new Error("Unexpected result returned.");
    }).then(() => {
      $t().then(() => {
        t(7, T = b.VERIFIED), t(8, Y = !0), x("verified"), ye("verified", { payload: z });
      });
    }).catch((r) => {
      x(r), t(7, T = b.ERROR), t(8, Y = !1), t(11, ve = r.message);
    });
  }
  function bt() {
    Y = this.checked, t(8, Y);
  }
  function wt(r) {
    _e[r ? "unshift" : "push"](() => {
      J = r, t(10, J);
    });
  }
  function _t(r) {
    _e[r ? "unshift" : "push"](() => {
      p = r, t(9, p);
    });
  }
  return n.$$set = (r) => {
    "auto" in r && t(0, s = r.auto), "blockspam" in r && t(29, u = r.blockspam), "challengeurl" in r && t(15, a = r.challengeurl), "challengejson" in r && t(30, h = r.challengejson), "debug" in r && t(16, F = r.debug), "delay" in r && t(17, S = r.delay), "expire" in r && t(18, H = r.expire), "floating" in r && t(1, k = r.floating), "floatinganchor" in r && t(19, O = r.floatinganchor), "floatingoffset" in r && t(20, Z = r.floatingoffset), "hidefooter" in r && t(2, M = r.hidefooter), "hidelogo" in r && t(3, ee = r.hidelogo), "name" in r && t(4, q = r.name), "formfieldname" in r && t(5, V = r.formfieldname), "maxnumber" in r && t(21, E = r.maxnumber), "mockerror" in r && t(22, C = r.mockerror), "refetchonexpire" in r && t(23, I = r.refetchonexpire), "spamfilter" in r && t(24, y = r.spamfilter), "strings" in r && t(31, d = r.strings), "test" in r && t(25, w = r.test), "verifyurl" in r && t(26, X = r.verifyurl), "workers" in r && t(27, oe = r.workers), "workerurl" in r && t(28, ae = r.workerurl);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*challengejson*/
    1073741824 && (i = h ? Qe(h) : void 0), n.$$.dirty[1] & /*strings*/
    1 && t(35, l = d ? Qe(d) : {}), n.$$.dirty[1] & /*parsedStrings*/
    16 && t(12, o = {
      ariaLinkLabel: Ke,
      error: "Verification failed. Try again later.",
      expired: "Work timed out. Please try again.",
      footer: `Protected by <a href="${lt}" target="_blank" aria-label="${l.ariaLinkLabel || Ke}">PoWCHA</a>`,
      label: "I'm not a bad robot",
      verified: "You're good to go! 🎉",
      verifying: "Working... ⚙️",
      waitAlert: "Still working... Please wait.",
      ...l
    }), n.$$.dirty[0] & /*payload, state*/
    192 && ye("statechange", { payload: z, state: T }), n.$$.dirty[0] & /*state*/
    128 && at();
  }, [
    s,
    k,
    M,
    ee,
    q,
    V,
    z,
    T,
    Y,
    p,
    J,
    ve,
    o,
    ut,
    He,
    a,
    F,
    S,
    H,
    O,
    Z,
    E,
    C,
    I,
    y,
    w,
    X,
    oe,
    ae,
    u,
    h,
    d,
    Oe,
    ge,
    K,
    l,
    bt,
    wt,
    _t
  ];
}
class en extends Ft {
  constructor(e) {
    super(), Ht(
      this,
      e,
      Qt,
      zt,
      kt,
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
      null,
      [-1, -1, -1]
    );
  }
  get auto() {
    return this.$$.ctx[0];
  }
  set auto(e) {
    this.$$set({ auto: e }), _();
  }
  get blockspam() {
    return this.$$.ctx[29];
  }
  set blockspam(e) {
    this.$$set({ blockspam: e }), _();
  }
  get challengeurl() {
    return this.$$.ctx[15];
  }
  set challengeurl(e) {
    this.$$set({ challengeurl: e }), _();
  }
  get challengejson() {
    return this.$$.ctx[30];
  }
  set challengejson(e) {
    this.$$set({ challengejson: e }), _();
  }
  get debug() {
    return this.$$.ctx[16];
  }
  set debug(e) {
    this.$$set({ debug: e }), _();
  }
  get delay() {
    return this.$$.ctx[17];
  }
  set delay(e) {
    this.$$set({ delay: e }), _();
  }
  get expire() {
    return this.$$.ctx[18];
  }
  set expire(e) {
    this.$$set({ expire: e }), _();
  }
  get floating() {
    return this.$$.ctx[1];
  }
  set floating(e) {
    this.$$set({ floating: e }), _();
  }
  get floatinganchor() {
    return this.$$.ctx[19];
  }
  set floatinganchor(e) {
    this.$$set({ floatinganchor: e }), _();
  }
  get floatingoffset() {
    return this.$$.ctx[20];
  }
  set floatingoffset(e) {
    this.$$set({ floatingoffset: e }), _();
  }
  get hidefooter() {
    return this.$$.ctx[2];
  }
  set hidefooter(e) {
    this.$$set({ hidefooter: e }), _();
  }
  get hidelogo() {
    return this.$$.ctx[3];
  }
  set hidelogo(e) {
    this.$$set({ hidelogo: e }), _();
  }
  get name() {
    return this.$$.ctx[4];
  }
  set name(e) {
    this.$$set({ name: e }), _();
  }
  get formfieldname() {
    return this.$$.ctx[5];
  }
  set formfieldname(e) {
    this.$$set({ formfieldname: e }), _();
  }
  get maxnumber() {
    return this.$$.ctx[21];
  }
  set maxnumber(e) {
    this.$$set({ maxnumber: e }), _();
  }
  get mockerror() {
    return this.$$.ctx[22];
  }
  set mockerror(e) {
    this.$$set({ mockerror: e }), _();
  }
  get refetchonexpire() {
    return this.$$.ctx[23];
  }
  set refetchonexpire(e) {
    this.$$set({ refetchonexpire: e }), _();
  }
  get spamfilter() {
    return this.$$.ctx[24];
  }
  set spamfilter(e) {
    this.$$set({ spamfilter: e }), _();
  }
  get strings() {
    return this.$$.ctx[31];
  }
  set strings(e) {
    this.$$set({ strings: e }), _();
  }
  get test() {
    return this.$$.ctx[25];
  }
  set test(e) {
    this.$$set({ test: e }), _();
  }
  get verifyurl() {
    return this.$$.ctx[26];
  }
  set verifyurl(e) {
    this.$$set({ verifyurl: e }), _();
  }
  get workers() {
    return this.$$.ctx[27];
  }
  set workers(e) {
    this.$$set({ workers: e }), _();
  }
  get workerurl() {
    return this.$$.ctx[28];
  }
  set workerurl(e) {
    this.$$set({ workerurl: e }), _();
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
customElements.define("powcha-widget", Vt(en, { auto: {}, blockspam: {}, challengeurl: {}, challengejson: {}, debug: { type: "Boolean" }, delay: {}, expire: {}, floating: {}, floatinganchor: {}, floatingoffset: {}, hidefooter: { type: "Boolean" }, hidelogo: { type: "Boolean" }, name: {}, formfieldname: {}, maxnumber: {}, mockerror: { type: "Boolean" }, refetchonexpire: { type: "Boolean" }, spamfilter: { type: "Boolean" }, strings: {}, test: { type: "Boolean" }, verifyurl: {}, workers: {}, workerurl: {} }, [], ["configure", "reset", "verify"], !1));
globalThis.createPoWCHAWorker = (n) => new Worker(new URL(n || "./worker.js", import.meta.url));
export {
  en as Altcha
};
