var Rn = {}, Mi = {};
/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const H = Mi.NODE_ENV !== "production" ? Object.freeze({}) : {}, Rt = Mi.NODE_ENV !== "production" ? Object.freeze([]) : [], ne = () => {
}, ic = () => !1, yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wo = (e) => e.startsWith("onUpdate:"), Z = Object.assign, sn = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, sc = Object.prototype.hasOwnProperty, L = (e, t) => sc.call(e, t), S = Array.isArray, wt = (e) => ir(e) === "[object Map]", Pi = (e) => ir(e) === "[object Set]", P = (e) => typeof e == "function", ee = (e) => typeof e == "string", mt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", cn = (e) => (K(e) || P(e)) && P(e.then) && P(e.catch), $i = Object.prototype.toString, ir = (e) => $i.call(e), ln = (e) => ir(e).slice(8, -1), sr = (e) => ir(e) === "[object Object]", an = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, io = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), cc = /* @__PURE__ */ nt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), cr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, lc = /-(\w)/g, me = cr(
  (e) => e.replace(lc, (t, o) => o ? o.toUpperCase() : "")
), ac = /\B([A-Z])/g, xe = cr(
  (e) => e.replace(ac, "-$1").toLowerCase()
), lr = cr((e) => e.charAt(0).toUpperCase() + e.slice(1)), kt = cr(
  (e) => e ? `on${lr(e)}` : ""
), we = (e, t) => !Object.is(e, t), zt = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Uo = (e, t, o, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: o
  });
}, Lr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Fn = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ln;
const wo = () => Ln || (Ln = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof Rn < "u" ? Rn : {});
function dn(e) {
  if (S(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o], n = ee(r) ? hc(r) : dn(r);
      if (n)
        for (const i in n)
          t[i] = n[i];
    }
    return t;
  } else if (ee(e) || K(e))
    return e;
}
const dc = /;(?![^(]*\))/g, uc = /:([^]+)/, fc = /\/\*[^]*?\*\//g;
function hc(e) {
  const t = {};
  return e.replace(fc, "").split(dc).forEach((o) => {
    if (o) {
      const r = o.split(uc);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ar(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (S(e))
    for (let o = 0; o < e.length; o++) {
      const r = ar(e[o]);
      r && (t += r + " ");
    }
  else if (K(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const pc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", mc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", bc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", gc = /* @__PURE__ */ nt(pc), vc = /* @__PURE__ */ nt(mc), kc = /* @__PURE__ */ nt(bc), yc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wc = /* @__PURE__ */ nt(yc);
function zi(e) {
  return !!e || e === "";
}
const Ai = (e) => !!(e && e.__v_isRef === !0), Ve = (e) => ee(e) ? e : e == null ? "" : S(e) || K(e) && (e.toString === $i || !P(e.toString)) ? Ai(e) ? Ve(e.value) : JSON.stringify(e, ji, 2) : String(e), ji = (e, t) => Ai(t) ? ji(e, t.value) : wt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [r, n], i) => (o[Nr(r, i) + " =>"] = n, o),
    {}
  )
} : Pi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Nr(o))
} : mt(t) ? Nr(t) : K(t) && !S(t) && !sr(t) ? String(t) : t, Nr = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    mt(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
var J = {};
function Je(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ye;
class xc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ye, !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = ye;
      try {
        return ye = this, t();
      } finally {
        ye = o;
      }
    } else J.NODE_ENV !== "production" && Je("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ye, ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ye = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let o, r;
      for (o = 0, r = this.effects.length; o < r; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, r = this.cleanups.length; o < r; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, r = this.scopes.length; o < r; o++)
          this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function _c() {
  return ye;
}
let W;
const Or = /* @__PURE__ */ new WeakSet();
class Ii {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && ye.active && ye.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Or.has(this) && (Or.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hn(this), Li(this);
    const t = W, o = ze;
    W = this, ze = !0;
    try {
      return this.fn();
    } finally {
      J.NODE_ENV !== "production" && W !== this && Je(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Hi(this), W = t, ze = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hn(t);
      this.deps = this.depsTail = void 0, Hn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hr(this) && this.run();
  }
  get dirty() {
    return Hr(this);
  }
}
let Ri = 0, so, co;
function Fi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = co, co = e;
    return;
  }
  e.next = so, so = e;
}
function un() {
  Ri++;
}
function fn() {
  if (--Ri > 0)
    return;
  if (co) {
    let t = co;
    for (co = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; so; ) {
    let t = so;
    for (so = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function Li(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Hi(e) {
  let t, o = e.depsTail, r = o;
  for (; r; ) {
    const n = r.prevDep;
    r.version === -1 ? (r === o && (o = n), hn(r), Ec(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = n;
  }
  e.deps = t, e.depsTail = o;
}
function Hr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === uo) || (e.globalVersion = uo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = W, r = ze;
  W = e, ze = !0;
  try {
    Li(e);
    const n = e.fn(e._value);
    (t.version === 0 || we(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    W = o, ze = r, Hi(e), e.flags &= -3;
  }
}
function hn(e, t = !1) {
  const { dep: o, prevSub: r, nextSub: n } = e;
  if (r && (r.nextSub = n, e.prevSub = void 0), n && (n.prevSub = r, e.nextSub = void 0), J.NODE_ENV !== "production" && o.subsHead === e && (o.subsHead = n), o.subs === e && (o.subs = r, !r && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      hn(i, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Ec(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ze = !0;
const Ui = [];
function je() {
  Ui.push(ze), ze = !1;
}
function Ie() {
  const e = Ui.pop();
  ze = e === void 0 ? !0 : e;
}
function Hn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = W;
    W = void 0;
    try {
      t();
    } finally {
      W = o;
    }
  }
}
let uo = 0;
class Nc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class dr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, J.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!W || !ze || W === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== W)
      o = this.activeLink = new Nc(W, this), W.deps ? (o.prevDep = W.depsTail, W.depsTail.nextDep = o, W.depsTail = o) : W.deps = W.depsTail = o, Bi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const r = o.nextDep;
      r.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = r), o.prevDep = W.depsTail, o.nextDep = void 0, W.depsTail.nextDep = o, W.depsTail = o, W.deps === o && (W.deps = r);
    }
    return J.NODE_ENV !== "production" && W.onTrack && W.onTrack(
      Z(
        {
          effect: W
        },
        t
      )
    ), o;
  }
  trigger(t) {
    this.version++, uo++, this.notify(t);
  }
  notify(t) {
    un();
    try {
      if (J.NODE_ENV !== "production")
        for (let o = this.subsHead; o; o = o.nextSub)
          o.sub.onTrigger && !(o.sub.flags & 8) && o.sub.onTrigger(
            Z(
              {
                effect: o.sub
              },
              t
            )
          );
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      fn();
    }
  }
}
function Bi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Bi(r);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), J.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Wr = /* @__PURE__ */ new WeakMap(), xt = Symbol(
  J.NODE_ENV !== "production" ? "Object iterate" : ""
), Ur = Symbol(
  J.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fo = Symbol(
  J.NODE_ENV !== "production" ? "Array iterate" : ""
);
function re(e, t, o) {
  if (ze && W) {
    let r = Wr.get(e);
    r || Wr.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(o);
    n || (r.set(o, n = new dr()), n.map = r, n.key = o), J.NODE_ENV !== "production" ? n.track({
      target: e,
      type: t,
      key: o
    }) : n.track();
  }
}
function qe(e, t, o, r, n, i) {
  const s = Wr.get(e);
  if (!s) {
    uo++;
    return;
  }
  const c = (l) => {
    l && (J.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: o,
      newValue: r,
      oldValue: n,
      oldTarget: i
    }) : l.trigger());
  };
  if (un(), t === "clear")
    s.forEach(c);
  else {
    const l = S(e), h = l && an(o);
    if (l && o === "length") {
      const d = Number(r);
      s.forEach((u, m) => {
        (m === "length" || m === fo || !mt(m) && m >= d) && c(u);
      });
    } else
      switch ((o !== void 0 || s.has(void 0)) && c(s.get(o)), h && c(s.get(fo)), t) {
        case "add":
          l ? h && c(s.get("length")) : (c(s.get(xt)), wt(e) && c(s.get(Ur)));
          break;
        case "delete":
          l || (c(s.get(xt)), wt(e) && c(s.get(Ur)));
          break;
        case "set":
          wt(e) && c(s.get(xt));
          break;
      }
  }
  fn();
}
function Tt(e) {
  const t = z(e);
  return t === e ? t : (re(t, "iterate", fo), be(e) ? t : t.map(le));
}
function ur(e) {
  return re(e = z(e), "iterate", fo), e;
}
const Oc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cr(this, Symbol.iterator, le);
  },
  concat(...e) {
    return Tt(this).concat(
      ...e.map((t) => S(t) ? Tt(t) : t)
    );
  },
  entries() {
    return Cr(this, "entries", (e) => (e[1] = le(e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(this, "filter", e, t, (o) => o.map(le), arguments);
  },
  find(e, t) {
    return et(this, "find", e, t, le, arguments);
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(this, "findLast", e, t, le, arguments);
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Dr(this, "includes", e);
  },
  indexOf(...e) {
    return Dr(this, "indexOf", e);
  },
  join(e) {
    return Tt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Dr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return Wn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wn(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
  },
  toReversed() {
    return Tt(this).toReversed();
  },
  toSorted(e) {
    return Tt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Tt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gt(this, "unshift", e);
  },
  values() {
    return Cr(this, "values", le);
  }
};
function Cr(e, t, o) {
  const r = ur(e), n = r[t]();
  return r !== e && !be(e) && (n._next = n.next, n.next = () => {
    const i = n._next();
    return i.value && (i.value = o(i.value)), i;
  }), n;
}
const Cc = Array.prototype;
function et(e, t, o, r, n, i) {
  const s = ur(e), c = s !== e && !be(e), l = s[t];
  if (l !== Cc[t]) {
    const u = l.apply(e, i);
    return c ? le(u) : u;
  }
  let h = o;
  s !== e && (c ? h = function(u, m) {
    return o.call(this, le(u), m, e);
  } : o.length > 2 && (h = function(u, m) {
    return o.call(this, u, m, e);
  }));
  const d = l.call(s, h, r);
  return c && n ? n(d) : d;
}
function Wn(e, t, o, r) {
  const n = ur(e);
  let i = o;
  return n !== e && (be(e) ? o.length > 3 && (i = function(s, c, l) {
    return o.call(this, s, c, l, e);
  }) : i = function(s, c, l) {
    return o.call(this, s, le(c), l, e);
  }), n[t](i, ...r);
}
function Dr(e, t, o) {
  const r = z(e);
  re(r, "iterate", fo);
  const n = r[t](...o);
  return (n === -1 || n === !1) && Bo(o[0]) ? (o[0] = z(o[0]), r[t](...o)) : n;
}
function Gt(e, t, o = []) {
  je(), un();
  const r = z(e)[t].apply(e, o);
  return fn(), Ie(), r;
}
const Dc = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), qi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mt)
);
function Sc(e) {
  mt(e) || (e = String(e));
  const t = z(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
class Ki {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, r) {
    if (o === "__v_skip") return t.__v_skip;
    const n = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !n;
    if (o === "__v_isReadonly")
      return n;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return r === (n ? i ? Zi : Qi : i ? Gi : Ji).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = S(t);
    if (!n) {
      let l;
      if (s && (l = Oc[o]))
        return l;
      if (o === "hasOwnProperty")
        return Sc;
    }
    const c = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      oe(t) ? t : r
    );
    return (mt(o) ? qi.has(o) : Dc(o)) || (n || re(t, "get", o), i) ? c : oe(c) ? s && an(o) ? c : c.value : K(c) ? n ? es(c) : pn(c) : c;
  }
}
class Yi extends Ki {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, r, n) {
    let i = t[o];
    if (!this._isShallow) {
      const l = Ge(i);
      if (!be(r) && !Ge(r) && (i = z(i), r = z(r)), !S(t) && oe(i) && !oe(r))
        return l ? !1 : (i.value = r, !0);
    }
    const s = S(t) && an(o) ? Number(o) < t.length : L(t, o), c = Reflect.set(
      t,
      o,
      r,
      oe(t) ? t : n
    );
    return t === z(n) && (s ? we(r, i) && qe(t, "set", o, r, i) : qe(t, "add", o, r)), c;
  }
  deleteProperty(t, o) {
    const r = L(t, o), n = t[o], i = Reflect.deleteProperty(t, o);
    return i && r && qe(t, "delete", o, void 0, n), i;
  }
  has(t, o) {
    const r = Reflect.has(t, o);
    return (!mt(o) || !qi.has(o)) && re(t, "has", o), r;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      S(t) ? "length" : xt
    ), Reflect.ownKeys(t);
  }
}
class Xi extends Ki {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return J.NODE_ENV !== "production" && Je(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, o) {
    return J.NODE_ENV !== "production" && Je(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vc = /* @__PURE__ */ new Yi(), Tc = /* @__PURE__ */ new Xi(), Mc = /* @__PURE__ */ new Yi(!0), Pc = /* @__PURE__ */ new Xi(!0), Br = (e) => e, So = (e) => Reflect.getPrototypeOf(e);
function $c(e, t, o) {
  return function(...r) {
    const n = this.__v_raw, i = z(n), s = wt(i), c = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, h = n[e](...r), d = o ? Br : t ? qo : le;
    return !t && re(
      i,
      "iterate",
      l ? Ur : xt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: m } = h.next();
        return m ? { value: u, done: m } : {
          value: c ? [d(u[0]), d(u[1])] : d(u),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vo(e) {
  return function(...t) {
    if (J.NODE_ENV !== "production") {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      Je(
        `${lr(e)} operation ${o}failed: target is readonly.`,
        z(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zc(e, t) {
  const o = {
    get(n) {
      const i = this.__v_raw, s = z(i), c = z(n);
      e || (we(n, c) && re(s, "get", n), re(s, "get", c));
      const { has: l } = So(s), h = t ? Br : e ? qo : le;
      if (l.call(s, n))
        return h(i.get(n));
      if (l.call(s, c))
        return h(i.get(c));
      i !== s && i.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && re(z(n), "iterate", xt), Reflect.get(n, "size", n);
    },
    has(n) {
      const i = this.__v_raw, s = z(i), c = z(n);
      return e || (we(n, c) && re(s, "has", n), re(s, "has", c)), n === c ? i.has(n) : i.has(n) || i.has(c);
    },
    forEach(n, i) {
      const s = this, c = s.__v_raw, l = z(c), h = t ? Br : e ? qo : le;
      return !e && re(l, "iterate", xt), c.forEach((d, u) => n.call(i, h(d), h(u), s));
    }
  };
  return Z(
    o,
    e ? {
      add: Vo("add"),
      set: Vo("set"),
      delete: Vo("delete"),
      clear: Vo("clear")
    } : {
      add(n) {
        !t && !be(n) && !Ge(n) && (n = z(n));
        const i = z(this);
        return So(i).has.call(i, n) || (i.add(n), qe(i, "add", n, n)), this;
      },
      set(n, i) {
        !t && !be(i) && !Ge(i) && (i = z(i));
        const s = z(this), { has: c, get: l } = So(s);
        let h = c.call(s, n);
        h ? J.NODE_ENV !== "production" && Un(s, c, n) : (n = z(n), h = c.call(s, n));
        const d = l.call(s, n);
        return s.set(n, i), h ? we(i, d) && qe(s, "set", n, i, d) : qe(s, "add", n, i), this;
      },
      delete(n) {
        const i = z(this), { has: s, get: c } = So(i);
        let l = s.call(i, n);
        l ? J.NODE_ENV !== "production" && Un(i, s, n) : (n = z(n), l = s.call(i, n));
        const h = c ? c.call(i, n) : void 0, d = i.delete(n);
        return l && qe(i, "delete", n, void 0, h), d;
      },
      clear() {
        const n = z(this), i = n.size !== 0, s = J.NODE_ENV !== "production" ? wt(n) ? new Map(n) : new Set(n) : void 0, c = n.clear();
        return i && qe(
          n,
          "clear",
          void 0,
          void 0,
          s
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    o[n] = $c(n, e, t);
  }), o;
}
function fr(e, t) {
  const o = zc(e, t);
  return (r, n, i) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    L(o, n) && n in r ? o : r,
    n,
    i
  );
}
const Ac = {
  get: /* @__PURE__ */ fr(!1, !1)
}, jc = {
  get: /* @__PURE__ */ fr(!1, !0)
}, Ic = {
  get: /* @__PURE__ */ fr(!0, !1)
}, Rc = {
  get: /* @__PURE__ */ fr(!0, !0)
};
function Un(e, t, o) {
  const r = z(o);
  if (r !== o && t.call(e, r)) {
    const n = ln(e);
    Je(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ji = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), Zi = /* @__PURE__ */ new WeakMap();
function Fc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Lc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fc(ln(e));
}
function pn(e) {
  return Ge(e) ? e : hr(
    e,
    !1,
    Vc,
    Ac,
    Ji
  );
}
function Hc(e) {
  return hr(
    e,
    !1,
    Mc,
    jc,
    Gi
  );
}
function es(e) {
  return hr(
    e,
    !0,
    Tc,
    Ic,
    Qi
  );
}
function Ye(e) {
  return hr(
    e,
    !0,
    Pc,
    Rc,
    Zi
  );
}
function hr(e, t, o, r, n) {
  if (!K(e))
    return J.NODE_ENV !== "production" && Je(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Lc(e);
  if (i === 0)
    return e;
  const s = n.get(e);
  if (s)
    return s;
  const c = new Proxy(
    e,
    i === 2 ? r : o
  );
  return n.set(e, c), c;
}
function _t(e) {
  return Ge(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ge(e) {
  return !!(e && e.__v_isReadonly);
}
function be(e) {
  return !!(e && e.__v_isShallow);
}
function Bo(e) {
  return e ? !!e.__v_raw : !1;
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function Wc(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && Uo(e, "__v_skip", !0), e;
}
const le = (e) => K(e) ? pn(e) : e, qo = (e) => K(e) ? es(e) : e;
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ce(e) {
  return Uc(e, !1);
}
function Uc(e, t) {
  return oe(e) ? e : new Bc(e, t);
}
class Bc {
  constructor(t, o) {
    this.dep = new dr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : z(t), this._value = o ? t : le(t), this.__v_isShallow = o;
  }
  get value() {
    return J.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, r = this.__v_isShallow || be(t) || Ge(t);
    t = r ? t : z(t), we(t, o) && (this._rawValue = t, this._value = r ? t : le(t), J.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: o
    }) : this.dep.trigger());
  }
}
function X(e) {
  return oe(e) ? e.value : e;
}
const qc = {
  get: (e, t, o) => t === "__v_raw" ? e : X(Reflect.get(e, t, o)),
  set: (e, t, o, r) => {
    const n = e[t];
    return oe(n) && !oe(o) ? (n.value = o, !0) : Reflect.set(e, t, o, r);
  }
};
function ts(e) {
  return _t(e) ? e : new Proxy(e, qc);
}
class Kc {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const o = this.dep = new dr(), { get: r, set: n } = t(o.track.bind(o), o.trigger.bind(o));
    this._get = r, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Yc(e) {
  return new Kc(e);
}
class Xc {
  constructor(t, o, r) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new dr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = uo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    W !== this)
      return Fi(this, !0), !0;
  }
  get value() {
    const t = J.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Wi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : J.NODE_ENV !== "production" && Je("Write operation failed: computed value is readonly");
  }
}
function Jc(e, t, o = !1) {
  let r, n;
  return P(e) ? r = e : (r = e.get, n = e.set), new Xc(r, n, o);
}
const To = {}, Ko = /* @__PURE__ */ new WeakMap();
let yt;
function Gc(e, t = !1, o = yt) {
  if (o) {
    let r = Ko.get(o);
    r || Ko.set(o, r = []), r.push(e);
  } else J.NODE_ENV !== "production" && !t && Je(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Qc(e, t, o = H) {
  const { immediate: r, deep: n, once: i, scheduler: s, augmentJob: c, call: l } = o, h = (M) => {
    (o.onWarn || Je)(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (M) => n ? M : be(M) || n === !1 || n === 0 ? ot(M, 1) : ot(M);
  let u, m, b, N, D = !1, G = !1;
  if (oe(e) ? (m = () => e.value, D = be(e)) : _t(e) ? (m = () => d(e), D = !0) : S(e) ? (G = !0, D = e.some((M) => _t(M) || be(M)), m = () => e.map((M) => {
    if (oe(M))
      return M.value;
    if (_t(M))
      return d(M);
    if (P(M))
      return l ? l(M, 2) : M();
    J.NODE_ENV !== "production" && h(M);
  })) : P(e) ? t ? m = l ? () => l(e, 2) : e : m = () => {
    if (b) {
      je();
      try {
        b();
      } finally {
        Ie();
      }
    }
    const M = yt;
    yt = u;
    try {
      return l ? l(e, 3, [N]) : e(N);
    } finally {
      yt = M;
    }
  } : (m = ne, J.NODE_ENV !== "production" && h(e)), t && n) {
    const M = m, ie = n === !0 ? 1 / 0 : n;
    m = () => ot(M(), ie);
  }
  const j = _c(), te = () => {
    u.stop(), j && j.active && sn(j.effects, u);
  };
  if (i && t) {
    const M = t;
    t = (...ie) => {
      M(...ie), te();
    };
  }
  let U = G ? new Array(e.length).fill(To) : To;
  const Ee = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const ie = u.run();
        if (n || D || (G ? ie.some((Se, ae) => we(Se, U[ae])) : we(ie, U))) {
          b && b();
          const Se = yt;
          yt = u;
          try {
            const ae = [
              ie,
              // pass undefined as the old value when it's changed for the first time
              U === To ? void 0 : G && U[0] === To ? [] : U,
              N
            ];
            l ? l(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            ), U = ie;
          } finally {
            yt = Se;
          }
        }
      } else
        u.run();
  };
  return c && c(Ee), u = new Ii(m), u.scheduler = s ? () => s(Ee, !1) : Ee, N = (M) => Gc(M, !1, u), b = u.onStop = () => {
    const M = Ko.get(u);
    if (M) {
      if (l)
        l(M, 4);
      else
        for (const ie of M) ie();
      Ko.delete(u);
    }
  }, J.NODE_ENV !== "production" && (u.onTrack = o.onTrack, u.onTrigger = o.onTrigger), t ? r ? Ee(!0) : U = u.run() : s ? s(Ee.bind(null, !0), !0) : u.run(), te.pause = u.pause.bind(u), te.resume = u.resume.bind(u), te.stop = te, te;
}
function ot(e, t = 1 / 0, o) {
  if (t <= 0 || !K(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), t--, oe(e))
    ot(e.value, t, o);
  else if (S(e))
    for (let r = 0; r < e.length; r++)
      ot(e[r], t, o);
  else if (Pi(e) || wt(e))
    e.forEach((r) => {
      ot(r, t, o);
    });
  else if (sr(e)) {
    for (const r in e)
      ot(e[r], t, o);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ot(e[r], t, o);
  }
  return e;
}
var p = {};
const Et = [];
function Po(e) {
  Et.push(e);
}
function $o() {
  Et.pop();
}
let Sr = !1;
function E(e, ...t) {
  if (Sr) return;
  Sr = !0, je();
  const o = Et.length ? Et[Et.length - 1].component : null, r = o && o.appContext.config.warnHandler, n = Zc();
  if (r)
    qt(
      r,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, c;
          return (c = (s = i.toString) == null ? void 0 : s.call(i)) != null ? c : JSON.stringify(i);
        }).join(""),
        o && o.proxy,
        n.map(
          ({ vnode: i }) => `at <${kr(o, i.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    n.length && i.push(`
`, ...el(n)), console.warn(...i);
  }
  Ie(), Sr = !1;
}
function Zc() {
  let e = Et[Et.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const o = t[0];
    o && o.vnode === e ? o.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function el(e) {
  const t = [];
  return e.forEach((o, r) => {
    t.push(...r === 0 ? [] : [`
`], ...tl(o));
  }), t;
}
function tl({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, n = ` at <${kr(
    e.component,
    e.type,
    r
  )}`, i = ">" + o;
  return e.props ? [n, ...ol(e.props), i] : [n + i];
}
function ol(e) {
  const t = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((r) => {
    t.push(...os(r, e[r]));
  }), o.length > 3 && t.push(" ..."), t;
}
function os(e, t, o) {
  return ee(t) ? (t = JSON.stringify(t), o ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? o ? t : [`${e}=${t}`] : oe(t) ? (t = os(e, z(t.value), !0), o ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = z(t), o ? t : [`${e}=`, t]);
}
const mn = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function qt(e, t, o, r) {
  try {
    return r ? e(...r) : e();
  } catch (n) {
    xo(n, t, o);
  }
}
function Qe(e, t, o, r) {
  if (P(e)) {
    const n = qt(e, t, o, r);
    return n && cn(n) && n.catch((i) => {
      xo(i, t, o);
    }), n;
  }
  if (S(e)) {
    const n = [];
    for (let i = 0; i < e.length; i++)
      n.push(Qe(e[i], t, o, r));
    return n;
  } else p.NODE_ENV !== "production" && E(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function xo(e, t, o, r = !0) {
  const n = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || H;
  if (t) {
    let c = t.parent;
    const l = t.proxy, h = p.NODE_ENV !== "production" ? mn[o] : `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; c; ) {
      const d = c.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      je(), qt(i, null, 10, [
        e,
        l,
        h
      ]), Ie();
      return;
    }
  }
  rl(e, o, n, r, s);
}
function rl(e, t, o, r = !0, n = !1) {
  if (p.NODE_ENV !== "production") {
    const i = mn[t];
    if (o && Po(o), E(`Unhandled error${i ? ` during execution of ${i}` : ""}`), o && $o(), r)
      throw e;
    console.error(e);
  } else {
    if (n)
      throw e;
    console.error(e);
  }
}
const pe = [];
let Ue = -1;
const Ft = [];
let at = null, At = 0;
const rs = /* @__PURE__ */ Promise.resolve();
let Yo = null;
const nl = 100;
function ns(e) {
  const t = Yo || rs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function il(e) {
  let t = Ue + 1, o = pe.length;
  for (; t < o; ) {
    const r = t + o >>> 1, n = pe[r], i = ho(n);
    i < e || i === e && n.flags & 2 ? t = r + 1 : o = r;
  }
  return t;
}
function pr(e) {
  if (!(e.flags & 1)) {
    const t = ho(e), o = pe[pe.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ho(o) ? pe.push(e) : pe.splice(il(t), 0, e), e.flags |= 1, is();
  }
}
function is() {
  Yo || (Yo = rs.then(ls));
}
function ss(e) {
  S(e) ? Ft.push(...e) : at && e.id === -1 ? at.splice(At + 1, 0, e) : e.flags & 1 || (Ft.push(e), e.flags |= 1), is();
}
function Bn(e, t, o = Ue + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); o < pe.length; o++) {
    const r = pe[o];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || p.NODE_ENV !== "production" && bn(t, r))
        continue;
      pe.splice(o, 1), o--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function cs(e) {
  if (Ft.length) {
    const t = [...new Set(Ft)].sort(
      (o, r) => ho(o) - ho(r)
    );
    if (Ft.length = 0, at) {
      at.push(...t);
      return;
    }
    for (at = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), At = 0; At < at.length; At++) {
      const o = at[At];
      p.NODE_ENV !== "production" && bn(e, o) || (o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2);
    }
    at = null, At = 0;
  }
}
const ho = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ls(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (o) => bn(e, o) : ne;
  try {
    for (Ue = 0; Ue < pe.length; Ue++) {
      const o = pe[Ue];
      if (o && !(o.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(o))
          continue;
        o.flags & 4 && (o.flags &= -2), qt(
          o,
          o.i,
          o.i ? 15 : 14
        ), o.flags & 4 || (o.flags &= -2);
      }
    }
  } finally {
    for (; Ue < pe.length; Ue++) {
      const o = pe[Ue];
      o && (o.flags &= -2);
    }
    Ue = -1, pe.length = 0, cs(e), Yo = null, (pe.length || Ft.length) && ls(e);
  }
}
function bn(e, t) {
  const o = e.get(t) || 0;
  if (o > nl) {
    const r = t.i, n = r && Bs(r.type);
    return xo(
      `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, o + 1), !1;
}
let Xe = !1;
const zo = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (wo().__VUE_HMR_RUNTIME__ = {
  createRecord: Vr(as),
  rerender: Vr(ll),
  reload: Vr(al)
});
const Ot = /* @__PURE__ */ new Map();
function sl(e) {
  const t = e.type.__hmrId;
  let o = Ot.get(t);
  o || (as(t, e.type), o = Ot.get(t)), o.instances.add(e);
}
function cl(e) {
  Ot.get(e.type.__hmrId).instances.delete(e);
}
function as(e, t) {
  return Ot.has(e) ? !1 : (Ot.set(e, {
    initialDef: Xo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Xo(e) {
  return qs(e) ? e.__vccOpts : e;
}
function ll(e, t) {
  const o = Ot.get(e);
  o && (o.initialDef.render = t, [...o.instances].forEach((r) => {
    t && (r.render = t, Xo(r.type).render = t), r.renderCache = [], Xe = !0, r.update(), Xe = !1;
  }));
}
function al(e, t) {
  const o = Ot.get(e);
  if (!o) return;
  t = Xo(t), qn(o.initialDef, t);
  const r = [...o.instances];
  for (let n = 0; n < r.length; n++) {
    const i = r[n], s = Xo(i.type);
    let c = zo.get(s);
    c || (s !== o.initialDef && qn(s, t), zo.set(s, c = /* @__PURE__ */ new Set())), c.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (c.add(i), i.ceReload(t.styles), c.delete(i)) : i.parent ? pr(() => {
      Xe = !0, i.parent.update(), Xe = !1, c.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  ss(() => {
    zo.clear();
  });
}
function qn(e, t) {
  Z(e, t);
  for (const o in e)
    o !== "__file" && !(o in t) && delete e[o];
}
function Vr(e) {
  return (t, o) => {
    try {
      return e(t, o);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ke, oo = [], qr = !1;
function _o(e, ...t) {
  Ke ? Ke.emit(e, ...t) : qr || oo.push({ event: e, args: t });
}
function ds(e, t) {
  var o, r;
  Ke = e, Ke ? (Ke.enabled = !0, oo.forEach(({ event: n, args: i }) => Ke.emit(n, ...i)), oo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (o = window.navigator) == null ? void 0 : o.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    ds(i, t);
  }), setTimeout(() => {
    Ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, qr = !0, oo = []);
  }, 3e3)) : (qr = !0, oo = []);
}
function dl(e, t) {
  _o("app:init", e, t, {
    Fragment: Te,
    Text: No,
    Comment: De,
    Static: Io
  });
}
function ul(e) {
  _o("app:unmount", e);
}
const fl = /* @__PURE__ */ gn(
  "component:added"
  /* COMPONENT_ADDED */
), us = /* @__PURE__ */ gn(
  "component:updated"
  /* COMPONENT_UPDATED */
), hl = /* @__PURE__ */ gn(
  "component:removed"
  /* COMPONENT_REMOVED */
), pl = (e) => {
  Ke && typeof Ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ke.cleanupBuffer(e) && hl(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return (t) => {
    _o(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ml = /* @__PURE__ */ fs(
  "perf:start"
  /* PERFORMANCE_START */
), bl = /* @__PURE__ */ fs(
  "perf:end"
  /* PERFORMANCE_END */
);
function fs(e) {
  return (t, o, r) => {
    _o(e, t.appContext.app, t.uid, t, o, r);
  };
}
function gl(e, t, o) {
  _o(
    "component:emit",
    e.appContext.app,
    e,
    t,
    o
  );
}
let ue = null, hs = null;
function Jo(e) {
  const t = ue;
  return ue = e, hs = e && e.type.__scopeId || null, t;
}
function vl(e, t = ue, o) {
  if (!t || e._n)
    return e;
  const r = (...n) => {
    r._d && ri(-1);
    const i = Jo(t);
    let s;
    try {
      s = e(...n);
    } finally {
      Jo(i), r._d && ri(1);
    }
    return p.NODE_ENV !== "production" && us(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ps(e) {
  cc(e) && E("Do not use built-in directive ids as custom directive id: " + e);
}
function po(e, t) {
  if (ue === null)
    return p.NODE_ENV !== "production" && E("withDirectives can only be used inside render functions."), e;
  const o = vr(ue), r = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [i, s, c, l = H] = t[n];
    i && (P(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(s), r.push({
      dir: i,
      instance: o,
      value: s,
      oldValue: void 0,
      arg: c,
      modifiers: l
    }));
  }
  return e;
}
function bt(e, t, o, r) {
  const n = e.dirs, i = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    i && (c.oldValue = i[s].value);
    let l = c.dir[r];
    l && (je(), Qe(l, o, 8, [
      e.el,
      c,
      e,
      t
    ]), Ie());
  }
}
const kl = Symbol("_vte"), yl = (e) => e.__isTeleport;
function vn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Eo(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Z({ name: e.name }, t, { setup: e })
  ) : e;
}
function ms(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const wl = /* @__PURE__ */ new WeakSet();
function Go(e, t, o, r, n = !1) {
  if (S(e)) {
    e.forEach(
      (N, D) => Go(
        N,
        t && (S(t) ? t[D] : t),
        o,
        r,
        n
      )
    );
    return;
  }
  if (lo(r) && !n) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Go(e, t, o, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? vr(r.component) : r.el, s = n ? null : i, { i: c, r: l } = e;
  if (p.NODE_ENV !== "production" && !c) {
    E(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = c.refs === H ? c.refs = {} : c.refs, u = c.setupState, m = z(u), b = u === H ? () => !1 : (N) => p.NODE_ENV !== "production" && (L(m, N) && !oe(m[N]) && E(
    `Template ref "${N}" used on a non-ref value. It will not work in the production build.`
  ), wl.has(m[N])) ? !1 : L(m, N);
  if (h != null && h !== l && (ee(h) ? (d[h] = null, b(h) && (u[h] = null)) : oe(h) && (h.value = null)), P(l))
    qt(l, c, 12, [s, d]);
  else {
    const N = ee(l), D = oe(l);
    if (N || D) {
      const G = () => {
        if (e.f) {
          const j = N ? b(l) ? u[l] : d[l] : l.value;
          n ? S(j) && sn(j, i) : S(j) ? j.includes(i) || j.push(i) : N ? (d[l] = [i], b(l) && (u[l] = d[l])) : (l.value = [i], e.k && (d[e.k] = l.value));
        } else N ? (d[l] = s, b(l) && (u[l] = s)) : D ? (l.value = s, e.k && (d[e.k] = s)) : p.NODE_ENV !== "production" && E("Invalid template ref type:", l, `(${typeof l})`);
      };
      s ? (G.id = -1, Oe(G, o)) : G();
    } else p.NODE_ENV !== "production" && E("Invalid template ref type:", l, `(${typeof l})`);
  }
}
wo().requestIdleCallback;
wo().cancelIdleCallback;
const lo = (e) => !!e.type.__asyncLoader, kn = (e) => e.type.__isKeepAlive;
function xl(e, t) {
  bs(e, "a", t);
}
function _l(e, t) {
  bs(e, "da", t);
}
function bs(e, t, o = se) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = o;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (mr(t, r, o), o) {
    let n = o.parent;
    for (; n && n.parent; )
      kn(n.parent.vnode) && El(r, t, o, n), n = n.parent;
  }
}
function El(e, t, o, r) {
  const n = mr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  vs(() => {
    sn(r[t], n);
  }, o);
}
function mr(e, t, o = se, r = !1) {
  if (o) {
    const n = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...s) => {
      je();
      const c = Oo(o), l = Qe(t, o, e, s);
      return c(), Ie(), l;
    });
    return r ? n.unshift(i) : n.push(i), i;
  } else if (p.NODE_ENV !== "production") {
    const n = kt(mn[e].replace(/ hook$/, ""));
    E(
      `${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const it = (e) => (t, o = se) => {
  (!bo || e === "sp") && mr(e, (...r) => t(...r), o);
}, Nl = it("bm"), gs = it("m"), Ol = it(
  "bu"
), Cl = it("u"), Dl = it(
  "bum"
), vs = it("um"), Sl = it(
  "sp"
), Vl = it("rtg"), Tl = it("rtc");
function Ml(e, t = se) {
  mr("ec", e, t);
}
const Pl = Symbol.for("v-ndc");
function ks(e, t, o, r) {
  let n;
  const i = o, s = S(e);
  if (s || ee(e)) {
    const c = s && _t(e);
    let l = !1, h = !1;
    c && (l = !be(e), h = Ge(e), e = ur(e)), n = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      n[d] = t(
        l ? h ? qo(le(e[d])) : le(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && E(`The v-for range expect an integer value but got ${e}.`), n = new Array(e);
    for (let c = 0; c < e; c++)
      n[c] = t(c + 1, c, void 0, i);
  } else if (K(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (c, l) => t(c, l, void 0, i)
      );
    else {
      const c = Object.keys(e);
      n = new Array(c.length);
      for (let l = 0, h = c.length; l < h; l++) {
        const d = c[l];
        n[l] = t(e[d], d, l, i);
      }
    }
  else
    n = [];
  return n;
}
const Kr = (e) => e ? Ws(e) ? vr(e) : Kr(e.parent) : null, Nt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Ye(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Ye(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Ye(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Ye(e.refs) : e.refs,
    $parent: (e) => Kr(e.parent),
    $root: (e) => Kr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      pr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ns.bind(e.proxy)),
    $watch: (e) => pa.bind(e)
  })
), yn = (e) => e === "_" || e === "$", Tr = (e, t) => e !== H && !e.__isScriptSetup && L(e, t), ys = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: r, data: n, props: i, accessCache: s, type: c, appContext: l } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const b = s[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[t];
          case 2:
            return n[t];
          case 4:
            return o[t];
          case 3:
            return i[t];
        }
      else {
        if (Tr(r, t))
          return s[t] = 1, r[t];
        if (n !== H && L(n, t))
          return s[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && L(h, t)
        )
          return s[t] = 3, i[t];
        if (o !== H && L(o, t))
          return s[t] = 4, o[t];
        Yr && (s[t] = 0);
      }
    }
    const d = Nt[t];
    let u, m;
    if (d)
      return t === "$attrs" ? (re(e.attrs, "get", ""), p.NODE_ENV !== "production" && tr()) : p.NODE_ENV !== "production" && t === "$slots" && re(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = c.__cssModules) && (u = u[t])
    )
      return u;
    if (o !== H && L(o, t))
      return s[t] = 4, o[t];
    if (
      // global properties
      m = l.config.globalProperties, L(m, t)
    )
      return m[t];
    p.NODE_ENV !== "production" && ue && (!ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (n !== H && yn(t[0]) && L(n, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ue && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, o) {
    const { data: r, setupState: n, ctx: i } = e;
    return Tr(n, t) ? (n[t] = o, !0) : p.NODE_ENV !== "production" && n.__isScriptSetup && L(n, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== H && L(r, t) ? (r[t] = o, !0) : L(e.props, t) ? (p.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: o
    }) : i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: r, appContext: n, propsOptions: i }
  }, s) {
    let c;
    return !!o[s] || e !== H && L(e, s) || Tr(t, s) || (c = i[0]) && L(c, s) || L(r, s) || L(Nt, s) || L(n.config.globalProperties, s);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : L(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
p.NODE_ENV !== "production" && (ys.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $l(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Nt).forEach((o) => {
    Object.defineProperty(t, o, {
      configurable: !0,
      enumerable: !1,
      get: () => Nt[o](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ne
    });
  }), t;
}
function zl(e) {
  const {
    ctx: t,
    propsOptions: [o]
  } = e;
  o && Object.keys(o).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: ne
    });
  });
}
function Al(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(z(o)).forEach((r) => {
    if (!o.__isScriptSetup) {
      if (yn(r[0])) {
        E(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => o[r],
        set: ne
      });
    }
  });
}
function Qo(e) {
  return S(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function jl(e, t) {
  return !e || !t ? e || t : S(e) && S(t) ? e.concat(t) : Z({}, Qo(e), Qo(t));
}
function Il() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o] ? E(`${t} property "${o}" is already defined in ${e[o]}.`) : e[o] = t;
  };
}
let Yr = !0;
function Rl(e) {
  const t = xs(e), o = e.proxy, r = e.ctx;
  Yr = !1, t.beforeCreate && Kn(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: i,
    methods: s,
    watch: c,
    provide: l,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: m,
    beforeUpdate: b,
    updated: N,
    activated: D,
    deactivated: G,
    beforeDestroy: j,
    beforeUnmount: te,
    destroyed: U,
    unmounted: Ee,
    render: M,
    renderTracked: ie,
    renderTriggered: Se,
    errorCaptured: ae,
    serverPrefetch: ge,
    // public API
    expose: Ze,
    inheritAttrs: st,
    // assets
    components: Pe,
    directives: Co,
    filters: zn
  } = t, ct = p.NODE_ENV !== "production" ? Il() : null;
  if (p.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const I in R)
        ct("Props", I);
  }
  if (h && Fl(h, r, ct), s)
    for (const R in s) {
      const I = s[R];
      P(I) ? (p.NODE_ENV !== "production" ? Object.defineProperty(r, R, {
        value: I.bind(o),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[R] = I.bind(o), p.NODE_ENV !== "production" && ct("Methods", R)) : p.NODE_ENV !== "production" && E(
        `Method "${R}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (n) {
    p.NODE_ENV !== "production" && !P(n) && E(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = n.call(o, o);
    if (p.NODE_ENV !== "production" && cn(R) && E(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(R))
      p.NODE_ENV !== "production" && E("data() should return an object.");
    else if (e.data = pn(R), p.NODE_ENV !== "production")
      for (const I in R)
        ct("Data", I), yn(I[0]) || Object.defineProperty(r, I, {
          configurable: !0,
          enumerable: !0,
          get: () => R[I],
          set: ne
        });
  }
  if (Yr = !0, i)
    for (const R in i) {
      const I = i[R], Re = P(I) ? I.bind(o, o) : P(I.get) ? I.get.bind(o, o) : ne;
      p.NODE_ENV !== "production" && Re === ne && E(`Computed property "${R}" has no getter.`);
      const xr = !P(I) && P(I.set) ? I.set.bind(o) : p.NODE_ENV !== "production" ? () => {
        E(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : ne, Kt = go({
        get: Re,
        set: xr
      });
      Object.defineProperty(r, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Kt.value,
        set: (Vt) => Kt.value = Vt
      }), p.NODE_ENV !== "production" && ct("Computed", R);
    }
  if (c)
    for (const R in c)
      ws(c[R], r, o, R);
  if (l) {
    const R = P(l) ? l.call(o) : l;
    Reflect.ownKeys(R).forEach((I) => {
      ql(I, R[I]);
    });
  }
  d && Kn(d, e, "c");
  function ve(R, I) {
    S(I) ? I.forEach((Re) => R(Re.bind(o))) : I && R(I.bind(o));
  }
  if (ve(Nl, u), ve(gs, m), ve(Ol, b), ve(Cl, N), ve(xl, D), ve(_l, G), ve(Ml, ae), ve(Tl, ie), ve(Vl, Se), ve(Dl, te), ve(vs, Ee), ve(Sl, ge), S(Ze))
    if (Ze.length) {
      const R = e.exposed || (e.exposed = {});
      Ze.forEach((I) => {
        Object.defineProperty(R, I, {
          get: () => o[I],
          set: (Re) => o[I] = Re
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === ne && (e.render = M), st != null && (e.inheritAttrs = st), Pe && (e.components = Pe), Co && (e.directives = Co), ge && ms(e);
}
function Fl(e, t, o = ne) {
  S(e) && (e = Xr(e));
  for (const r in e) {
    const n = e[r];
    let i;
    K(n) ? "default" in n ? i = Ao(
      n.from || r,
      n.default,
      !0
    ) : i = Ao(n.from || r) : i = Ao(n), oe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, p.NODE_ENV !== "production" && o("Inject", r);
  }
}
function Kn(e, t, o) {
  Qe(
    S(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function ws(e, t, o, r) {
  let n = r.includes(".") ? Ps(o, r) : () => o[r];
  if (ee(e)) {
    const i = t[e];
    P(i) ? Pr(n, i) : p.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e}"`, i);
  } else if (P(e))
    Pr(n, e.bind(o));
  else if (K(e))
    if (S(e))
      e.forEach((i) => ws(i, t, o, r));
    else {
      const i = P(e.handler) ? e.handler.bind(o) : t[e.handler];
      P(i) ? Pr(n, i, e) : p.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else p.NODE_ENV !== "production" && E(`Invalid watch option: "${r}"`, e);
}
function xs(e) {
  const t = e.type, { mixins: o, extends: r } = t, {
    mixins: n,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = i.get(t);
  let l;
  return c ? l = c : !n.length && !o && !r ? l = t : (l = {}, n.length && n.forEach(
    (h) => Zo(l, h, s, !0)
  ), Zo(l, t, s)), K(t) && i.set(t, l), l;
}
function Zo(e, t, o, r = !1) {
  const { mixins: n, extends: i } = t;
  i && Zo(e, i, o, !0), n && n.forEach(
    (s) => Zo(e, s, o, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      p.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Ll[s] || o && o[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Ll = {
  data: Yn,
  props: Xn,
  emits: Xn,
  // objects
  methods: ro,
  computed: ro,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: ro,
  directives: ro,
  // watch
  watch: Wl,
  // provide / inject
  provide: Yn,
  inject: Hl
};
function Yn(e, t) {
  return t ? e ? function() {
    return Z(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hl(e, t) {
  return ro(Xr(e), Xr(t));
}
function Xr(e) {
  if (S(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ro(e, t) {
  return e ? Z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xn(e, t) {
  return e ? S(e) && S(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Z(
    /* @__PURE__ */ Object.create(null),
    Qo(e),
    Qo(t ?? {})
  ) : t;
}
function Wl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Z(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    o[r] = he(e[r], t[r]);
  return o;
}
function _s() {
  return {
    app: null,
    config: {
      isNativeTag: ic,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ul = 0;
function Bl(e, t) {
  return function(r, n = null) {
    P(r) || (r = Z({}, r)), n != null && !K(n) && (p.NODE_ENV !== "production" && E("root props passed to app.mount() must be an object."), n = null);
    const i = _s(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let l = !1;
    const h = i.app = {
      _uid: Ul++,
      _component: r,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: ci,
      get config() {
        return i.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && E(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return s.has(d) ? p.NODE_ENV !== "production" && E("Plugin has already been applied to target app.") : d && P(d.install) ? (s.add(d), d.install(h, ...u)) : P(d) ? (s.add(d), d(h, ...u)) : p.NODE_ENV !== "production" && E(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return i.mixins.includes(d) ? p.NODE_ENV !== "production" && E(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), h;
      },
      component(d, u) {
        return p.NODE_ENV !== "production" && en(d, i.config), u ? (p.NODE_ENV !== "production" && i.components[d] && E(`Component "${d}" has already been registered in target app.`), i.components[d] = u, h) : i.components[d];
      },
      directive(d, u) {
        return p.NODE_ENV !== "production" && ps(d), u ? (p.NODE_ENV !== "production" && i.directives[d] && E(`Directive "${d}" has already been registered in target app.`), i.directives[d] = u, h) : i.directives[d];
      },
      mount(d, u, m) {
        if (l)
          p.NODE_ENV !== "production" && E(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && E(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = h._ceVNode || Ae(r, n);
          return b.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), p.NODE_ENV !== "production" && (i.reload = () => {
            const N = ft(b);
            N.el = null, e(N, d, m);
          }), e(b, d, m), l = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = b.component, dl(h, ci)), vr(b.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && E(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), c.push(d);
      },
      unmount() {
        l ? (Qe(
          c,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, ul(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && E("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return p.NODE_ENV !== "production" && d in i.provides && E(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = u, h;
      },
      runWithContext(d) {
        const u = Lt;
        Lt = h;
        try {
          return d();
        } finally {
          Lt = u;
        }
      }
    };
    return h;
  };
}
let Lt = null;
function ql(e, t) {
  if (!se)
    p.NODE_ENV !== "production" && E("provide() can only be used inside setup().");
  else {
    let o = se.provides;
    const r = se.parent && se.parent.provides;
    r === o && (o = se.provides = Object.create(r)), o[e] = t;
  }
}
function Ao(e, t, o = !1) {
  const r = se || ue;
  if (r || Lt) {
    const n = Lt ? Lt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return o && P(t) ? t.call(r && r.proxy) : t;
    p.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const Es = {}, Ns = () => Object.create(Es), Os = (e) => Object.getPrototypeOf(e) === Es;
function Kl(e, t, o, r = !1) {
  const n = {}, i = Ns();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cs(e, t, n, i);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  p.NODE_ENV !== "production" && Ss(t || {}, n, e), o ? e.props = r ? n : Hc(n) : e.type.props ? e.props = n : e.props = i, e.attrs = i;
}
function Yl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Xl(e, t, o, r) {
  const {
    props: n,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, c = z(n), [l] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && Yl(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let m = d[u];
        if (br(e.emitsOptions, m))
          continue;
        const b = t[m];
        if (l)
          if (L(i, m))
            b !== i[m] && (i[m] = b, h = !0);
          else {
            const N = me(m);
            n[N] = Jr(
              l,
              c,
              N,
              b,
              e,
              !1
            );
          }
        else
          b !== i[m] && (i[m] = b, h = !0);
      }
    }
  } else {
    Cs(e, t, n, i) && (h = !0);
    let d;
    for (const u in c)
      (!t || // for camelCase
      !L(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = xe(u)) === u || !L(t, d))) && (l ? o && // for camelCase
      (o[u] !== void 0 || // for kebab-case
      o[d] !== void 0) && (n[u] = Jr(
        l,
        c,
        u,
        void 0,
        e,
        !0
      )) : delete n[u]);
    if (i !== c)
      for (const u in i)
        (!t || !L(t, u)) && (delete i[u], h = !0);
  }
  h && qe(e.attrs, "set", ""), p.NODE_ENV !== "production" && Ss(t || {}, n, e);
}
function Cs(e, t, o, r) {
  const [n, i] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let l in t) {
      if (io(l))
        continue;
      const h = t[l];
      let d;
      n && L(n, d = me(l)) ? !i || !i.includes(d) ? o[d] = h : (c || (c = {}))[d] = h : br(e.emitsOptions, l) || (!(l in r) || h !== r[l]) && (r[l] = h, s = !0);
    }
  if (i) {
    const l = z(o), h = c || H;
    for (let d = 0; d < i.length; d++) {
      const u = i[d];
      o[u] = Jr(
        n,
        l,
        u,
        h[u],
        e,
        !L(h, u)
      );
    }
  }
  return s;
}
function Jr(e, t, o, r, n, i) {
  const s = e[o];
  if (s != null) {
    const c = L(s, "default");
    if (c && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && P(l)) {
        const { propsDefaults: h } = n;
        if (o in h)
          r = h[o];
        else {
          const d = Oo(n);
          r = h[o] = l.call(
            null,
            t
          ), d();
        }
      } else
        r = l;
      n.ce && n.ce._setProp(o, r);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !c ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === xe(o)) && (r = !0));
  }
  return r;
}
const Jl = /* @__PURE__ */ new WeakMap();
function Ds(e, t, o = !1) {
  const r = o ? Jl : t.propsCache, n = r.get(e);
  if (n)
    return n;
  const i = e.props, s = {}, c = [];
  let l = !1;
  if (!P(e)) {
    const d = (u) => {
      l = !0;
      const [m, b] = Ds(u, t, !0);
      Z(s, m), b && c.push(...b);
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !l)
    return K(e) && r.set(e, Rt), Rt;
  if (S(i))
    for (let d = 0; d < i.length; d++) {
      p.NODE_ENV !== "production" && !ee(i[d]) && E("props must be strings when using array syntax.", i[d]);
      const u = me(i[d]);
      Jn(u) && (s[u] = H);
    }
  else if (i) {
    p.NODE_ENV !== "production" && !K(i) && E("invalid props options", i);
    for (const d in i) {
      const u = me(d);
      if (Jn(u)) {
        const m = i[d], b = s[u] = S(m) || P(m) ? { type: m } : Z({}, m), N = b.type;
        let D = !1, G = !0;
        if (S(N))
          for (let j = 0; j < N.length; ++j) {
            const te = N[j], U = P(te) && te.name;
            if (U === "Boolean") {
              D = !0;
              break;
            } else U === "String" && (G = !1);
          }
        else
          D = P(N) && N.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = D, b[
          1
          /* shouldCastTrue */
        ] = G, (D || L(b, "default")) && c.push(u);
      }
    }
  }
  const h = [s, c];
  return K(e) && r.set(e, h), h;
}
function Jn(e) {
  return e[0] !== "$" && !io(e) ? !0 : (p.NODE_ENV !== "production" && E(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Gl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ss(e, t, o) {
  const r = z(t), n = o.propsOptions[0], i = Object.keys(e).map((s) => me(s));
  for (const s in n) {
    let c = n[s];
    c != null && Ql(
      s,
      r[s],
      c,
      p.NODE_ENV !== "production" ? Ye(r) : r,
      !i.includes(s)
    );
  }
}
function Ql(e, t, o, r, n) {
  const { type: i, required: s, validator: c, skipCheck: l } = o;
  if (s && n) {
    E('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !l) {
      let h = !1;
      const d = S(i) ? i : [i], u = [];
      for (let m = 0; m < d.length && !h; m++) {
        const { valid: b, expectedType: N } = ea(t, d[m]);
        u.push(N || ""), h = b;
      }
      if (!h) {
        E(ta(e, t, u));
        return;
      }
    }
    c && !c(t, r) && E('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Zl = /* @__PURE__ */ nt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ea(e, t) {
  let o;
  const r = Gl(t);
  if (r === "null")
    o = e === null;
  else if (Zl(r)) {
    const n = typeof e;
    o = n === r.toLowerCase(), !o && n === "object" && (o = e instanceof t);
  } else r === "Object" ? o = K(e) : r === "Array" ? o = S(e) : o = e instanceof t;
  return {
    valid: o,
    expectedType: r
  };
}
function ta(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${o.map(lr).join(" | ")}`;
  const n = o[0], i = ln(t), s = Gn(t, n), c = Gn(t, i);
  return o.length === 1 && Qn(n) && !oa(n, i) && (r += ` with value ${s}`), r += `, got ${i} `, Qn(i) && (r += `with value ${c}.`), r;
}
function Gn(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Qn(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function oa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const wn = (e) => e[0] === "_" || e === "$stable", xn = (e) => S(e) ? e.map($e) : [$e(e)], ra = (e, t, o) => {
  if (t._n)
    return t;
  const r = vl((...n) => (p.NODE_ENV !== "production" && se && !(o === null && ue) && !(o && o.root !== se.root) && E(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), xn(t(...n))), o);
  return r._c = !1, r;
}, Vs = (e, t, o) => {
  const r = e._ctx;
  for (const n in e) {
    if (wn(n)) continue;
    const i = e[n];
    if (P(i))
      t[n] = ra(n, i, r);
    else if (i != null) {
      p.NODE_ENV !== "production" && E(
        `Non-function value encountered for slot "${n}". Prefer function slots for better performance.`
      );
      const s = xn(i);
      t[n] = () => s;
    }
  }
}, Ts = (e, t) => {
  p.NODE_ENV !== "production" && !kn(e.vnode) && E(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const o = xn(t);
  e.slots.default = () => o;
}, Gr = (e, t, o) => {
  for (const r in t)
    (o || !wn(r)) && (e[r] = t[r]);
}, na = (e, t, o) => {
  const r = e.slots = Ns();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (Gr(r, t, o), o && Uo(r, "_", n, !0)) : Vs(t, r);
  } else t && Ts(e, t);
}, ia = (e, t, o) => {
  const { vnode: r, slots: n } = e;
  let i = !0, s = H;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? p.NODE_ENV !== "production" && Xe ? (Gr(n, t, o), qe(e, "set", "$slots")) : o && c === 1 ? i = !1 : Gr(n, t, o) : (i = !t.$stable, Vs(t, n)), s = t;
  } else t && (Ts(e, t), s = { default: 1 });
  if (i)
    for (const c in n)
      !wn(c) && s[c] == null && delete n[c];
};
let Qt, ut;
function Mt(e, t) {
  e.appContext.config.performance && er() && ut.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && ml(e, t, er() ? ut.now() : Date.now());
}
function Pt(e, t) {
  if (e.appContext.config.performance && er()) {
    const o = `vue-${t}-${e.uid}`, r = o + ":end";
    ut.mark(r), ut.measure(
      `<${kr(e, e.type)}> ${t}`,
      o,
      r
    ), ut.clearMarks(o), ut.clearMarks(r);
  }
  p.NODE_ENV !== "production" && bl(e, t, er() ? ut.now() : Date.now());
}
function er() {
  return Qt !== void 0 || (typeof window < "u" && window.performance ? (Qt = !0, ut = window.performance) : Qt = !1), Qt;
}
function sa() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Oe = wa;
function ca(e) {
  return la(e);
}
function la(e, t) {
  sa();
  const o = wo();
  o.__VUE__ = !0, p.NODE_ENV !== "production" && ds(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
    insert: r,
    remove: n,
    patchProp: i,
    createElement: s,
    createText: c,
    createComment: l,
    setText: h,
    setElementText: d,
    parentNode: u,
    nextSibling: m,
    setScopeId: b = ne,
    insertStaticContent: N
  } = e, D = (a, f, g, y = null, v = null, k = null, O = void 0, _ = null, x = p.NODE_ENV !== "production" && Xe ? !1 : !!f.dynamicChildren) => {
    if (a === f)
      return;
    a && !Zt(a, f) && (y = Do(a), lt(a, v, k, !0), a = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: w, ref: T, shapeFlag: C } = f;
    switch (w) {
      case No:
        G(a, f, g, y);
        break;
      case De:
        j(a, f, g, y);
        break;
      case Io:
        a == null ? te(f, g, y, O) : p.NODE_ENV !== "production" && U(a, f, g, O);
        break;
      case Te:
        Co(
          a,
          f,
          g,
          y,
          v,
          k,
          O,
          _,
          x
        );
        break;
      default:
        C & 1 ? ie(
          a,
          f,
          g,
          y,
          v,
          k,
          O,
          _,
          x
        ) : C & 6 ? zn(
          a,
          f,
          g,
          y,
          v,
          k,
          O,
          _,
          x
        ) : C & 64 || C & 128 ? w.process(
          a,
          f,
          g,
          y,
          v,
          k,
          O,
          _,
          x,
          Xt
        ) : p.NODE_ENV !== "production" && E("Invalid VNode type:", w, `(${typeof w})`);
    }
    T != null && v && Go(T, a && a.ref, k, f || a, !f);
  }, G = (a, f, g, y) => {
    if (a == null)
      r(
        f.el = c(f.children),
        g,
        y
      );
    else {
      const v = f.el = a.el;
      f.children !== a.children && h(v, f.children);
    }
  }, j = (a, f, g, y) => {
    a == null ? r(
      f.el = l(f.children || ""),
      g,
      y
    ) : f.el = a.el;
  }, te = (a, f, g, y) => {
    [a.el, a.anchor] = N(
      a.children,
      f,
      g,
      y,
      a.el,
      a.anchor
    );
  }, U = (a, f, g, y) => {
    if (f.children !== a.children) {
      const v = m(a.anchor);
      M(a), [f.el, f.anchor] = N(
        f.children,
        g,
        v,
        y
      );
    } else
      f.el = a.el, f.anchor = a.anchor;
  }, Ee = ({ el: a, anchor: f }, g, y) => {
    let v;
    for (; a && a !== f; )
      v = m(a), r(a, g, y), a = v;
    r(f, g, y);
  }, M = ({ el: a, anchor: f }) => {
    let g;
    for (; a && a !== f; )
      g = m(a), n(a), a = g;
    n(f);
  }, ie = (a, f, g, y, v, k, O, _, x) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), a == null ? Se(
      f,
      g,
      y,
      v,
      k,
      O,
      _,
      x
    ) : Ze(
      a,
      f,
      v,
      k,
      O,
      _,
      x
    );
  }, Se = (a, f, g, y, v, k, O, _) => {
    let x, w;
    const { props: T, shapeFlag: C, transition: V, dirs: $ } = a;
    if (x = a.el = s(
      a.type,
      k,
      T && T.is,
      T
    ), C & 8 ? d(x, a.children) : C & 16 && ge(
      a.children,
      x,
      null,
      y,
      v,
      Mr(a, k),
      O,
      _
    ), $ && bt(a, null, y, "created"), ae(x, a, a.scopeId, O, y), T) {
      for (const Y in T)
        Y !== "value" && !io(Y) && i(x, Y, null, T[Y], k, y);
      "value" in T && i(x, "value", null, T.value, k), (w = T.onVnodeBeforeMount) && We(w, y, a);
    }
    p.NODE_ENV !== "production" && (Uo(x, "__vnode", a, !0), Uo(x, "__vueParentComponent", y, !0)), $ && bt(a, null, y, "beforeMount");
    const F = aa(v, V);
    F && V.beforeEnter(x), r(x, f, g), ((w = T && T.onVnodeMounted) || F || $) && Oe(() => {
      w && We(w, y, a), F && V.enter(x), $ && bt(a, null, y, "mounted");
    }, v);
  }, ae = (a, f, g, y, v) => {
    if (g && b(a, g), y)
      for (let k = 0; k < y.length; k++)
        b(a, y[k]);
    if (v) {
      let k = v.subTree;
      if (p.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && (k = En(k.children) || k), f === k || js(k.type) && (k.ssContent === f || k.ssFallback === f)) {
        const O = v.vnode;
        ae(
          a,
          O,
          O.scopeId,
          O.slotScopeIds,
          v.parent
        );
      }
    }
  }, ge = (a, f, g, y, v, k, O, _, x = 0) => {
    for (let w = x; w < a.length; w++) {
      const T = a[w] = _ ? dt(a[w]) : $e(a[w]);
      D(
        null,
        T,
        f,
        g,
        y,
        v,
        k,
        O,
        _
      );
    }
  }, Ze = (a, f, g, y, v, k, O) => {
    const _ = f.el = a.el;
    p.NODE_ENV !== "production" && (_.__vnode = f);
    let { patchFlag: x, dynamicChildren: w, dirs: T } = f;
    x |= a.patchFlag & 16;
    const C = a.props || H, V = f.props || H;
    let $;
    if (g && gt(g, !1), ($ = V.onVnodeBeforeUpdate) && We($, g, f, a), T && bt(f, a, g, "beforeUpdate"), g && gt(g, !0), p.NODE_ENV !== "production" && Xe && (x = 0, O = !1, w = null), (C.innerHTML && V.innerHTML == null || C.textContent && V.textContent == null) && d(_, ""), w ? (st(
      a.dynamicChildren,
      w,
      _,
      g,
      y,
      Mr(f, v),
      k
    ), p.NODE_ENV !== "production" && jo(a, f)) : O || Re(
      a,
      f,
      _,
      null,
      g,
      y,
      Mr(f, v),
      k,
      !1
    ), x > 0) {
      if (x & 16)
        Pe(_, C, V, g, v);
      else if (x & 2 && C.class !== V.class && i(_, "class", null, V.class, v), x & 4 && i(_, "style", C.style, V.style, v), x & 8) {
        const F = f.dynamicProps;
        for (let Y = 0; Y < F.length; Y++) {
          const B = F[Y], Ne = C[B], ke = V[B];
          (ke !== Ne || B === "value") && i(_, B, Ne, ke, v, g);
        }
      }
      x & 1 && a.children !== f.children && d(_, f.children);
    } else !O && w == null && Pe(_, C, V, g, v);
    (($ = V.onVnodeUpdated) || T) && Oe(() => {
      $ && We($, g, f, a), T && bt(f, a, g, "updated");
    }, y);
  }, st = (a, f, g, y, v, k, O) => {
    for (let _ = 0; _ < f.length; _++) {
      const x = a[_], w = f[_], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(x, w) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 70) ? u(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      D(
        x,
        w,
        T,
        null,
        y,
        v,
        k,
        O,
        !0
      );
    }
  }, Pe = (a, f, g, y, v) => {
    if (f !== g) {
      if (f !== H)
        for (const k in f)
          !io(k) && !(k in g) && i(
            a,
            k,
            f[k],
            null,
            v,
            y
          );
      for (const k in g) {
        if (io(k)) continue;
        const O = g[k], _ = f[k];
        O !== _ && k !== "value" && i(a, k, _, O, v, y);
      }
      "value" in g && i(a, "value", f.value, g.value, v);
    }
  }, Co = (a, f, g, y, v, k, O, _, x) => {
    const w = f.el = a ? a.el : c(""), T = f.anchor = a ? a.anchor : c("");
    let { patchFlag: C, dynamicChildren: V, slotScopeIds: $ } = f;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Xe || C & 2048) && (C = 0, x = !1, V = null), $ && (_ = _ ? _.concat($) : $), a == null ? (r(w, g, y), r(T, g, y), ge(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      T,
      v,
      k,
      O,
      _,
      x
    )) : C > 0 && C & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (st(
      a.dynamicChildren,
      V,
      g,
      v,
      k,
      O,
      _
    ), p.NODE_ENV !== "production" ? jo(a, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || v && f === v.subTree) && jo(
        a,
        f,
        !0
        /* shallow */
      )
    )) : Re(
      a,
      f,
      g,
      T,
      v,
      k,
      O,
      _,
      x
    );
  }, zn = (a, f, g, y, v, k, O, _, x) => {
    f.slotScopeIds = _, a == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      g,
      y,
      O,
      x
    ) : ct(
      f,
      g,
      y,
      v,
      k,
      O,
      x
    ) : ve(a, f, x);
  }, ct = (a, f, g, y, v, k, O) => {
    const _ = a.component = Da(
      a,
      y,
      v
    );
    if (p.NODE_ENV !== "production" && _.type.__hmrId && sl(_), p.NODE_ENV !== "production" && (Po(a), Mt(_, "mount")), kn(a) && (_.ctx.renderer = Xt), p.NODE_ENV !== "production" && Mt(_, "init"), Va(_, !1, O), p.NODE_ENV !== "production" && Pt(_, "init"), p.NODE_ENV !== "production" && Xe && (a.el = null), _.asyncDep) {
      if (v && v.registerDep(_, R, O), !a.el) {
        const x = _.subTree = Ae(De);
        j(null, x, f, g);
      }
    } else
      R(
        _,
        a,
        f,
        g,
        v,
        k,
        O
      );
    p.NODE_ENV !== "production" && ($o(), Pt(_, "mount"));
  }, ve = (a, f, g) => {
    const y = f.component = a.component;
    if (ka(a, f, g))
      if (y.asyncDep && !y.asyncResolved) {
        p.NODE_ENV !== "production" && Po(f), I(y, f, g), p.NODE_ENV !== "production" && $o();
        return;
      } else
        y.next = f, y.update();
    else
      f.el = a.el, y.vnode = f;
  }, R = (a, f, g, y, v, k, O) => {
    const _ = () => {
      if (a.isMounted) {
        let { next: C, bu: V, u: $, parent: F, vnode: Y } = a;
        {
          const Le = Ms(a);
          if (Le) {
            C && (C.el = Y.el, I(a, C, O)), Le.asyncDep.then(() => {
              a.isUnmounted || _();
            });
            return;
          }
        }
        let B = C, Ne;
        p.NODE_ENV !== "production" && Po(C || a.vnode), gt(a, !1), C ? (C.el = Y.el, I(a, C, O)) : C = Y, V && zt(V), (Ne = C.props && C.props.onVnodeBeforeUpdate) && We(Ne, F, C, Y), gt(a, !0), p.NODE_ENV !== "production" && Mt(a, "render");
        const ke = ei(a);
        p.NODE_ENV !== "production" && Pt(a, "render");
        const Fe = a.subTree;
        a.subTree = ke, p.NODE_ENV !== "production" && Mt(a, "patch"), D(
          Fe,
          ke,
          // parent may have changed if it's in a teleport
          u(Fe.el),
          // anchor may have changed if it's in a fragment
          Do(Fe),
          a,
          v,
          k
        ), p.NODE_ENV !== "production" && Pt(a, "patch"), C.el = ke.el, B === null && ya(a, ke.el), $ && Oe($, v), (Ne = C.props && C.props.onVnodeUpdated) && Oe(
          () => We(Ne, F, C, Y),
          v
        ), p.NODE_ENV !== "production" && us(a), p.NODE_ENV !== "production" && $o();
      } else {
        let C;
        const { el: V, props: $ } = f, { bm: F, m: Y, parent: B, root: Ne, type: ke } = a, Fe = lo(f);
        gt(a, !1), F && zt(F), !Fe && (C = $ && $.onVnodeBeforeMount) && We(C, B, f), gt(a, !0);
        {
          Ne.ce && Ne.ce._injectChildStyle(ke), p.NODE_ENV !== "production" && Mt(a, "render");
          const Le = a.subTree = ei(a);
          p.NODE_ENV !== "production" && Pt(a, "render"), p.NODE_ENV !== "production" && Mt(a, "patch"), D(
            null,
            Le,
            g,
            y,
            a,
            v,
            k
          ), p.NODE_ENV !== "production" && Pt(a, "patch"), f.el = Le.el;
        }
        if (Y && Oe(Y, v), !Fe && (C = $ && $.onVnodeMounted)) {
          const Le = f;
          Oe(
            () => We(C, B, Le),
            v
          );
        }
        (f.shapeFlag & 256 || B && lo(B.vnode) && B.vnode.shapeFlag & 256) && a.a && Oe(a.a, v), a.isMounted = !0, p.NODE_ENV !== "production" && fl(a), f = g = y = null;
      }
    };
    a.scope.on();
    const x = a.effect = new Ii(_);
    a.scope.off();
    const w = a.update = x.run.bind(x), T = a.job = x.runIfDirty.bind(x);
    T.i = a, T.id = a.uid, x.scheduler = () => pr(T), gt(a, !0), p.NODE_ENV !== "production" && (x.onTrack = a.rtc ? (C) => zt(a.rtc, C) : void 0, x.onTrigger = a.rtg ? (C) => zt(a.rtg, C) : void 0), w();
  }, I = (a, f, g) => {
    f.component = a;
    const y = a.vnode.props;
    a.vnode = f, a.next = null, Xl(a, f.props, y, g), ia(a, f.children, g), je(), Bn(a), Ie();
  }, Re = (a, f, g, y, v, k, O, _, x = !1) => {
    const w = a && a.children, T = a ? a.shapeFlag : 0, C = f.children, { patchFlag: V, shapeFlag: $ } = f;
    if (V > 0) {
      if (V & 128) {
        Kt(
          w,
          C,
          g,
          y,
          v,
          k,
          O,
          _,
          x
        );
        return;
      } else if (V & 256) {
        xr(
          w,
          C,
          g,
          y,
          v,
          k,
          O,
          _,
          x
        );
        return;
      }
    }
    $ & 8 ? (T & 16 && Yt(w, v, k), C !== w && d(g, C)) : T & 16 ? $ & 16 ? Kt(
      w,
      C,
      g,
      y,
      v,
      k,
      O,
      _,
      x
    ) : Yt(w, v, k, !0) : (T & 8 && d(g, ""), $ & 16 && ge(
      C,
      g,
      y,
      v,
      k,
      O,
      _,
      x
    ));
  }, xr = (a, f, g, y, v, k, O, _, x) => {
    a = a || Rt, f = f || Rt;
    const w = a.length, T = f.length, C = Math.min(w, T);
    let V;
    for (V = 0; V < C; V++) {
      const $ = f[V] = x ? dt(f[V]) : $e(f[V]);
      D(
        a[V],
        $,
        g,
        null,
        v,
        k,
        O,
        _,
        x
      );
    }
    w > T ? Yt(
      a,
      v,
      k,
      !0,
      !1,
      C
    ) : ge(
      f,
      g,
      y,
      v,
      k,
      O,
      _,
      x,
      C
    );
  }, Kt = (a, f, g, y, v, k, O, _, x) => {
    let w = 0;
    const T = f.length;
    let C = a.length - 1, V = T - 1;
    for (; w <= C && w <= V; ) {
      const $ = a[w], F = f[w] = x ? dt(f[w]) : $e(f[w]);
      if (Zt($, F))
        D(
          $,
          F,
          g,
          null,
          v,
          k,
          O,
          _,
          x
        );
      else
        break;
      w++;
    }
    for (; w <= C && w <= V; ) {
      const $ = a[C], F = f[V] = x ? dt(f[V]) : $e(f[V]);
      if (Zt($, F))
        D(
          $,
          F,
          g,
          null,
          v,
          k,
          O,
          _,
          x
        );
      else
        break;
      C--, V--;
    }
    if (w > C) {
      if (w <= V) {
        const $ = V + 1, F = $ < T ? f[$].el : y;
        for (; w <= V; )
          D(
            null,
            f[w] = x ? dt(f[w]) : $e(f[w]),
            g,
            F,
            v,
            k,
            O,
            _,
            x
          ), w++;
      }
    } else if (w > V)
      for (; w <= C; )
        lt(a[w], v, k, !0), w++;
    else {
      const $ = w, F = w, Y = /* @__PURE__ */ new Map();
      for (w = F; w <= V; w++) {
        const fe = f[w] = x ? dt(f[w]) : $e(f[w]);
        fe.key != null && (p.NODE_ENV !== "production" && Y.has(fe.key) && E(
          "Duplicate keys found during update:",
          JSON.stringify(fe.key),
          "Make sure keys are unique."
        ), Y.set(fe.key, w));
      }
      let B, Ne = 0;
      const ke = V - F + 1;
      let Fe = !1, Le = 0;
      const Jt = new Array(ke);
      for (w = 0; w < ke; w++) Jt[w] = 0;
      for (w = $; w <= C; w++) {
        const fe = a[w];
        if (Ne >= ke) {
          lt(fe, v, k, !0);
          continue;
        }
        let He;
        if (fe.key != null)
          He = Y.get(fe.key);
        else
          for (B = F; B <= V; B++)
            if (Jt[B - F] === 0 && Zt(fe, f[B])) {
              He = B;
              break;
            }
        He === void 0 ? lt(fe, v, k, !0) : (Jt[He - F] = w + 1, He >= Le ? Le = He : Fe = !0, D(
          fe,
          f[He],
          g,
          null,
          v,
          k,
          O,
          _,
          x
        ), Ne++);
      }
      const jn = Fe ? da(Jt) : Rt;
      for (B = jn.length - 1, w = ke - 1; w >= 0; w--) {
        const fe = F + w, He = f[fe], In = fe + 1 < T ? f[fe + 1].el : y;
        Jt[w] === 0 ? D(
          null,
          He,
          g,
          In,
          v,
          k,
          O,
          _,
          x
        ) : Fe && (B < 0 || w !== jn[B] ? Vt(He, g, In, 2) : B--);
      }
    }
  }, Vt = (a, f, g, y, v = null) => {
    const { el: k, type: O, transition: _, children: x, shapeFlag: w } = a;
    if (w & 6) {
      Vt(a.component.subTree, f, g, y);
      return;
    }
    if (w & 128) {
      a.suspense.move(f, g, y);
      return;
    }
    if (w & 64) {
      O.move(a, f, g, Xt);
      return;
    }
    if (O === Te) {
      r(k, f, g);
      for (let C = 0; C < x.length; C++)
        Vt(x[C], f, g, y);
      r(a.anchor, f, g);
      return;
    }
    if (O === Io) {
      Ee(a, f, g);
      return;
    }
    if (y !== 2 && w & 1 && _)
      if (y === 0)
        _.beforeEnter(k), r(k, f, g), Oe(() => _.enter(k), v);
      else {
        const { leave: C, delayLeave: V, afterLeave: $ } = _, F = () => {
          a.ctx.isUnmounted ? n(k) : r(k, f, g);
        }, Y = () => {
          C(k, () => {
            F(), $ && $();
          });
        };
        V ? V(k, F, Y) : Y();
      }
    else
      r(k, f, g);
  }, lt = (a, f, g, y = !1, v = !1) => {
    const {
      type: k,
      props: O,
      ref: _,
      children: x,
      dynamicChildren: w,
      shapeFlag: T,
      patchFlag: C,
      dirs: V,
      cacheIndex: $
    } = a;
    if (C === -2 && (v = !1), _ != null && (je(), Go(_, null, g, a, !0), Ie()), $ != null && (f.renderCache[$] = void 0), T & 256) {
      f.ctx.deactivate(a);
      return;
    }
    const F = T & 1 && V, Y = !lo(a);
    let B;
    if (Y && (B = O && O.onVnodeBeforeUnmount) && We(B, f, a), T & 6)
      nc(a.component, g, y);
    else {
      if (T & 128) {
        a.suspense.unmount(g, y);
        return;
      }
      F && bt(a, null, f, "beforeUnmount"), T & 64 ? a.type.remove(
        a,
        f,
        g,
        Xt,
        y
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Te || C > 0 && C & 64) ? Yt(
        w,
        f,
        g,
        !1,
        !0
      ) : (k === Te && C & 384 || !v && T & 16) && Yt(x, f, g), y && _r(a);
    }
    (Y && (B = O && O.onVnodeUnmounted) || F) && Oe(() => {
      B && We(B, f, a), F && bt(a, null, f, "unmounted");
    }, g);
  }, _r = (a) => {
    const { type: f, el: g, anchor: y, transition: v } = a;
    if (f === Te) {
      p.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && v && !v.persisted ? a.children.forEach((O) => {
        O.type === De ? n(O.el) : _r(O);
      }) : rc(g, y);
      return;
    }
    if (f === Io) {
      M(a);
      return;
    }
    const k = () => {
      n(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: O, delayLeave: _ } = v, x = () => O(g, k);
      _ ? _(a.el, k, x) : x();
    } else
      k();
  }, rc = (a, f) => {
    let g;
    for (; a !== f; )
      g = m(a), n(a), a = g;
    n(f);
  }, nc = (a, f, g) => {
    p.NODE_ENV !== "production" && a.type.__hmrId && cl(a);
    const {
      bum: y,
      scope: v,
      job: k,
      subTree: O,
      um: _,
      m: x,
      a: w,
      parent: T,
      slots: { __: C }
    } = a;
    Zn(x), Zn(w), y && zt(y), T && S(C) && C.forEach((V) => {
      T.renderCache[V] = void 0;
    }), v.stop(), k && (k.flags |= 8, lt(O, a, f, g)), _ && Oe(_, f), Oe(() => {
      a.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), p.NODE_ENV !== "production" && pl(a);
  }, Yt = (a, f, g, y = !1, v = !1, k = 0) => {
    for (let O = k; O < a.length; O++)
      lt(a[O], f, g, y, v);
  }, Do = (a) => {
    if (a.shapeFlag & 6)
      return Do(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const f = m(a.anchor || a.el), g = f && f[kl];
    return g ? m(g) : f;
  };
  let Er = !1;
  const An = (a, f, g) => {
    a == null ? f._vnode && lt(f._vnode, null, null, !0) : D(
      f._vnode || null,
      a,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = a, Er || (Er = !0, Bn(), cs(), Er = !1);
  }, Xt = {
    p: D,
    um: lt,
    m: Vt,
    r: _r,
    mt: ct,
    mc: ge,
    pc: Re,
    pbc: st,
    n: Do,
    o: e
  };
  return {
    render: An,
    hydrate: void 0,
    createApp: Bl(An)
  };
}
function Mr({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function gt({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function aa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jo(e, t, o = !1) {
  const r = e.children, n = t.children;
  if (S(r) && S(n))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let c = n[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[i] = dt(n[i]), c.el = s.el), !o && c.patchFlag !== -2 && jo(s, c)), c.type === No && (c.el = s.el), c.type === De && !c.el && (c.el = s.el), p.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function da(e) {
  const t = e.slice(), o = [0];
  let r, n, i, s, c;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const h = e[r];
    if (h !== 0) {
      if (n = o[o.length - 1], e[n] < h) {
        t[r] = n, o.push(r);
        continue;
      }
      for (i = 0, s = o.length - 1; i < s; )
        c = i + s >> 1, e[o[c]] < h ? i = c + 1 : s = c;
      h < e[o[i]] && (i > 0 && (t[r] = o[i - 1]), o[i] = r);
    }
  }
  for (i = o.length, s = o[i - 1]; i-- > 0; )
    o[i] = s, s = t[s];
  return o;
}
function Ms(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ms(t);
}
function Zn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ua = Symbol.for("v-scx"), fa = () => {
  {
    const e = Ao(ua);
    return e || p.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ha(e, t) {
  return _n(
    e,
    null,
    p.NODE_ENV !== "production" ? Z({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Pr(e, t, o) {
  return p.NODE_ENV !== "production" && !P(t) && E(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), _n(e, t, o);
}
function _n(e, t, o = H) {
  const { immediate: r, deep: n, flush: i, once: s } = o;
  p.NODE_ENV !== "production" && !t && (r !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = Z({}, o);
  p.NODE_ENV !== "production" && (c.onWarn = E);
  const l = t && r || !t && i !== "post";
  let h;
  if (bo) {
    if (i === "sync") {
      const b = fa();
      h = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!l) {
      const b = () => {
      };
      return b.stop = ne, b.resume = ne, b.pause = ne, b;
    }
  }
  const d = se;
  c.call = (b, N, D) => Qe(b, d, N, D);
  let u = !1;
  i === "post" ? c.scheduler = (b) => {
    Oe(b, d && d.suspense);
  } : i !== "sync" && (u = !0, c.scheduler = (b, N) => {
    N ? b() : pr(b);
  }), c.augmentJob = (b) => {
    t && (b.flags |= 4), u && (b.flags |= 2, d && (b.id = d.uid, b.i = d));
  };
  const m = Qc(e, t, c);
  return bo && (h ? h.push(m) : l && m()), m;
}
function pa(e, t, o) {
  const r = this.proxy, n = ee(e) ? e.includes(".") ? Ps(r, e) : () => r[e] : e.bind(r, r);
  let i;
  P(t) ? i = t : (i = t.handler, o = t);
  const s = Oo(this), c = _n(n, i.bind(r), o);
  return s(), c;
}
function Ps(e, t) {
  const o = t.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < o.length && r; n++)
      r = r[o[n]];
    return r;
  };
}
function ma(e, t, o = H) {
  const r = Hs();
  if (p.NODE_ENV !== "production" && !r)
    return E("useModel() called without active instance."), ce();
  const n = me(t);
  if (p.NODE_ENV !== "production" && !r.propsOptions[0][n])
    return E(`useModel() called with prop "${t}" which is not declared.`), ce();
  const i = xe(t), s = $s(e, n), c = Yc((l, h) => {
    let d, u = H, m;
    return ha(() => {
      const b = e[n];
      we(d, b) && (d = b, h());
    }), {
      get() {
        return l(), o.get ? o.get(d) : d;
      },
      set(b) {
        const N = o.set ? o.set(b) : b;
        if (!we(N, d) && !(u !== H && we(b, u)))
          return;
        const D = r.vnode.props;
        D && // check if parent has passed v-model
        (t in D || n in D || i in D) && (`onUpdate:${t}` in D || `onUpdate:${n}` in D || `onUpdate:${i}` in D) || (d = b, h()), r.emit(`update:${t}`, N), we(b, N) && we(b, u) && !we(N, m) && h(), u = b, m = N;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || H : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const $s = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${me(t)}Modifiers`] || e[`${xe(t)}Modifiers`];
function ba(e, t, ...o) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || H;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(kt(me(t)) in u)) && E(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${kt(me(t))}" prop.`
        );
      else {
        const m = d[t];
        P(m) && (m(...o) || E(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let n = o;
  const i = t.startsWith("update:"), s = i && $s(r, t.slice(7));
  if (s && (s.trim && (n = o.map((d) => ee(d) ? d.trim() : d)), s.number && (n = o.map(Lr))), p.NODE_ENV !== "production" && gl(e, t, n), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[kt(d)] && E(
      `Event "${d}" is emitted in component ${kr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${xe(
        t
      )}" instead of "${t}".`
    );
  }
  let c, l = r[c = kt(t)] || // also try camelCase event handler (#2249)
  r[c = kt(me(t))];
  !l && i && (l = r[c = kt(xe(t))]), l && Qe(
    l,
    e,
    6,
    n
  );
  const h = r[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Qe(
      h,
      e,
      6,
      n
    );
  }
}
function zs(e, t, o = !1) {
  const r = t.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const i = e.emits;
  let s = {}, c = !1;
  if (!P(e)) {
    const l = (h) => {
      const d = zs(h, t, !0);
      d && (c = !0, Z(s, d));
    };
    !o && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !c ? (K(e) && r.set(e, null), null) : (S(i) ? i.forEach((l) => s[l] = null) : Z(s, i), K(e) && r.set(e, s), s);
}
function br(e, t) {
  return !e || !yo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, xe(t)) || L(e, t));
}
let Qr = !1;
function tr() {
  Qr = !0;
}
function ei(e) {
  const {
    type: t,
    vnode: o,
    proxy: r,
    withProxy: n,
    propsOptions: [i],
    slots: s,
    attrs: c,
    emit: l,
    render: h,
    renderCache: d,
    props: u,
    data: m,
    setupState: b,
    ctx: N,
    inheritAttrs: D
  } = e, G = Jo(e);
  let j, te;
  p.NODE_ENV !== "production" && (Qr = !1);
  try {
    if (o.shapeFlag & 4) {
      const M = n || r, ie = p.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(M, {
        get(Se, ae, ge) {
          return E(
            `Property '${String(
              ae
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Se, ae, ge);
        }
      }) : M;
      j = $e(
        h.call(
          ie,
          M,
          d,
          p.NODE_ENV !== "production" ? Ye(u) : u,
          b,
          m,
          N
        )
      ), te = c;
    } else {
      const M = t;
      p.NODE_ENV !== "production" && c === u && tr(), j = $e(
        M.length > 1 ? M(
          p.NODE_ENV !== "production" ? Ye(u) : u,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return tr(), Ye(c);
            },
            slots: s,
            emit: l
          } : { attrs: c, slots: s, emit: l }
        ) : M(
          p.NODE_ENV !== "production" ? Ye(u) : u,
          null
        )
      ), te = t.props ? c : ga(c);
    }
  } catch (M) {
    ao.length = 0, xo(M, e, 1), j = Ae(De);
  }
  let U = j, Ee;
  if (p.NODE_ENV !== "production" && j.patchFlag > 0 && j.patchFlag & 2048 && ([U, Ee] = As(j)), te && D !== !1) {
    const M = Object.keys(te), { shapeFlag: ie } = U;
    if (M.length) {
      if (ie & 7)
        i && M.some(Wo) && (te = va(
          te,
          i
        )), U = ft(U, te, !1, !0);
      else if (p.NODE_ENV !== "production" && !Qr && U.type !== De) {
        const Se = Object.keys(c), ae = [], ge = [];
        for (let Ze = 0, st = Se.length; Ze < st; Ze++) {
          const Pe = Se[Ze];
          yo(Pe) ? Wo(Pe) || ae.push(Pe[2].toLowerCase() + Pe.slice(3)) : ge.push(Pe);
        }
        ge.length && E(
          `Extraneous non-props attributes (${ge.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ae.length && E(
          `Extraneous non-emits event listeners (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return o.dirs && (p.NODE_ENV !== "production" && !ti(U) && E(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = ft(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(o.dirs) : o.dirs), o.transition && (p.NODE_ENV !== "production" && !ti(U) && E(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), vn(U, o.transition)), p.NODE_ENV !== "production" && Ee ? Ee(U) : j = U, Jo(G), j;
}
const As = (e) => {
  const t = e.children, o = e.dynamicChildren, r = En(t, !1);
  if (r) {
    if (p.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return As(r);
  } else return [e, void 0];
  const n = t.indexOf(r), i = o ? o.indexOf(r) : -1, s = (c) => {
    t[n] = c, o && (i > -1 ? o[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...o, c]));
  };
  return [$e(r), s];
};
function En(e, t = !0) {
  let o;
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (gr(n)) {
      if (n.type !== De || n.children === "v-if") {
        if (o)
          return;
        if (o = n, p.NODE_ENV !== "production" && t && o.patchFlag > 0 && o.patchFlag & 2048)
          return En(o.children);
      }
    } else
      return;
  }
  return o;
}
const ga = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || yo(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, va = (e, t) => {
  const o = {};
  for (const r in e)
    (!Wo(r) || !(r.slice(9) in t)) && (o[r] = e[r]);
  return o;
}, ti = (e) => e.shapeFlag & 7 || e.type === De;
function ka(e, t, o) {
  const { props: r, children: n, component: i } = e, { props: s, children: c, patchFlag: l } = t, h = i.emitsOptions;
  if (p.NODE_ENV !== "production" && (n || c) && Xe || t.dirs || t.transition)
    return !0;
  if (o && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? oi(r, s, h) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const m = d[u];
        if (s[m] !== r[m] && !br(h, m))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : r === s ? !1 : r ? s ? oi(r, s, h) : !0 : !!s;
  return !1;
}
function oi(e, t, o) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    if (t[i] !== e[i] && !br(o, i))
      return !0;
  }
  return !1;
}
function ya({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const js = (e) => e.__isSuspense;
function wa(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : ss(e);
}
const Te = Symbol.for("v-fgt"), No = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), Io = Symbol.for("v-stc"), ao = [];
let Ce = null;
function q(e = !1) {
  ao.push(Ce = e ? null : []);
}
function xa() {
  ao.pop(), Ce = ao[ao.length - 1] || null;
}
let mo = 1;
function ri(e, t = !1) {
  mo += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function Is(e) {
  return e.dynamicChildren = mo > 0 ? Ce || Rt : null, xa(), mo > 0 && Ce && Ce.push(e), e;
}
function Q(e, t, o, r, n, i) {
  return Is(
    A(
      e,
      t,
      o,
      r,
      n,
      i,
      !0
    )
  );
}
function Nn(e, t, o, r, n) {
  return Is(
    Ae(
      e,
      t,
      o,
      r,
      n,
      !0
    )
  );
}
function gr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const o = zo.get(t.type);
    if (o && o.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const _a = (...e) => Fs(
  ...e
), Rs = ({ key: e }) => e ?? null, Ro = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || oe(e) || P(e) ? { i: ue, r: e, k: t, f: !!o } : e : null);
function A(e, t = null, o = null, r = 0, n = null, i = e === Te ? 0 : 1, s = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rs(t),
    ref: t && Ro(t),
    scopeId: hs,
    slotScopeIds: null,
    children: o,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: ue
  };
  return c ? (On(l, o), i & 128 && e.normalize(l)) : o && (l.shapeFlag |= ee(o) ? 8 : 16), p.NODE_ENV !== "production" && l.key !== l.key && E("VNode created with invalid key (NaN). VNode type:", l.type), mo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ce.push(l), l;
}
const Ae = p.NODE_ENV !== "production" ? _a : Fs;
function Fs(e, t = null, o = null, r = 0, n = null, i = !1) {
  if ((!e || e === Pl) && (p.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = De), gr(e)) {
    const c = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && On(c, o), mo > 0 && !i && Ce && (c.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = c : Ce.push(c)), c.patchFlag = -2, c;
  }
  if (qs(e) && (e = e.__vccOpts), t) {
    t = Ea(t);
    let { class: c, style: l } = t;
    c && !ee(c) && (t.class = ar(c)), K(l) && (Bo(l) && !S(l) && (l = Z({}, l)), t.style = dn(l));
  }
  const s = ee(e) ? 1 : js(e) ? 128 : yl(e) ? 64 : K(e) ? 4 : P(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && s & 4 && Bo(e) && (e = z(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), A(
    e,
    t,
    o,
    r,
    n,
    s,
    i,
    !0
  );
}
function Ea(e) {
  return e ? Bo(e) || Os(e) ? Z({}, e) : e : null;
}
function ft(e, t, o = !1, r = !1) {
  const { props: n, ref: i, patchFlag: s, children: c, transition: l } = e, h = t ? Na(n || {}, t) : n, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Rs(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? S(i) ? i.concat(Ro(t)) : [i, Ro(t)] : Ro(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && s === -1 && S(c) ? c.map(Ls) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && vn(
    d,
    l.clone(d)
  ), d;
}
function Ls(e) {
  const t = ft(e);
  return S(e.children) && (t.children = e.children.map(Ls)), t;
}
function Fo(e = " ", t = 0) {
  return Ae(No, null, e, t);
}
function Ht(e = "", t = !1) {
  return t ? (q(), Nn(De, null, e)) : Ae(De, null, e);
}
function $e(e) {
  return e == null || typeof e == "boolean" ? Ae(De) : S(e) ? Ae(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gr(e) ? dt(e) : Ae(No, null, String(e));
}
function dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function On(e, t) {
  let o = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (S(t))
    o = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), On(e, n()), n._c && (n._d = !0));
      return;
    } else {
      o = 32;
      const n = t._;
      !n && !Os(t) ? t._ctx = ue : n === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: ue }, o = 32) : (t = String(t), r & 64 ? (o = 16, t = [Fo(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function Na(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (const n in r)
      if (n === "class")
        t.class !== r.class && (t.class = ar([t.class, r.class]));
      else if (n === "style")
        t.style = dn([t.style, r.style]);
      else if (yo(n)) {
        const i = t[n], s = r[n];
        s && i !== s && !(S(i) && i.includes(s)) && (t[n] = i ? [].concat(i, s) : s);
      } else n !== "" && (t[n] = r[n]);
  }
  return t;
}
function We(e, t, o, r = null) {
  Qe(e, t, 7, [
    o,
    r
  ]);
}
const Oa = _s();
let Ca = 0;
function Da(e, t, o) {
  const r = e.type, n = (t ? t.appContext : e.appContext) || Oa, i = {
    uid: Ca++,
    vnode: e,
    type: r,
    parent: t,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new xc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ds(r, n),
    emitsOptions: zs(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: H,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return p.NODE_ENV !== "production" ? i.ctx = $l(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ba.bind(null, i), e.ce && e.ce(i), i;
}
let se = null;
const Hs = () => se || ue;
let or, Zr;
{
  const e = wo(), t = (o, r) => {
    let n;
    return (n = e[o]) || (n = e[o] = []), n.push(r), (i) => {
      n.length > 1 ? n.forEach((s) => s(i)) : n[0](i);
    };
  };
  or = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => se = o
  ), Zr = t(
    "__VUE_SSR_SETTERS__",
    (o) => bo = o
  );
}
const Oo = (e) => {
  const t = se;
  return or(e), e.scope.on(), () => {
    e.scope.off(), or(t);
  };
}, ni = () => {
  se && se.scope.off(), or(null);
}, Sa = /* @__PURE__ */ nt("slot,component");
function en(e, { isNativeTag: t }) {
  (Sa(e) || t(e)) && E(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ws(e) {
  return e.vnode.shapeFlag & 4;
}
let bo = !1;
function Va(e, t = !1, o = !1) {
  t && Zr(t);
  const { props: r, children: n } = e.vnode, i = Ws(e);
  Kl(e, r, i, t), na(e, n, o || t);
  const s = i ? Ta(e, t) : void 0;
  return t && Zr(!1), s;
}
function Ta(e, t) {
  var o;
  const r = e.type;
  if (p.NODE_ENV !== "production") {
    if (r.name && en(r.name, e.appContext.config), r.components) {
      const i = Object.keys(r.components);
      for (let s = 0; s < i.length; s++)
        en(i[s], e.appContext.config);
    }
    if (r.directives) {
      const i = Object.keys(r.directives);
      for (let s = 0; s < i.length; s++)
        ps(i[s]);
    }
    r.compilerOptions && Ma() && E(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ys), p.NODE_ENV !== "production" && zl(e);
  const { setup: n } = r;
  if (n) {
    je();
    const i = e.setupContext = n.length > 1 ? $a(e) : null, s = Oo(e), c = qt(
      n,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Ye(e.props) : e.props,
        i
      ]
    ), l = cn(c);
    if (Ie(), s(), (l || e.sp) && !lo(e) && ms(e), l) {
      if (c.then(ni, ni), t)
        return c.then((h) => {
          ii(e, h, t);
        }).catch((h) => {
          xo(h, e, 0);
        });
      if (e.asyncDep = c, p.NODE_ENV !== "production" && !e.suspense) {
        const h = (o = r.name) != null ? o : "Anonymous";
        E(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ii(e, c, t);
  } else
    Us(e, t);
}
function ii(e, t, o) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (p.NODE_ENV !== "production" && gr(t) && E(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = ts(t), p.NODE_ENV !== "production" && Al(e)) : p.NODE_ENV !== "production" && t !== void 0 && E(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Us(e, o);
}
const Ma = () => !0;
function Us(e, t, o) {
  const r = e.type;
  e.render || (e.render = r.render || ne);
  {
    const n = Oo(e);
    je();
    try {
      Rl(e);
    } finally {
      Ie(), n();
    }
  }
  p.NODE_ENV !== "production" && !r.render && e.render === ne && !t && (r.template ? E(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : E("Component is missing template or render function: ", r));
}
const si = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return tr(), re(e, "get", ""), e[t];
  },
  set() {
    return E("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return E("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return re(e, "get", ""), e[t];
  }
};
function Pa(e) {
  return new Proxy(e.slots, {
    get(t, o) {
      return re(e, "get", "$slots"), t[o];
    }
  });
}
function $a(e) {
  const t = (o) => {
    if (p.NODE_ENV !== "production" && (e.exposed && E("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (S(o) ? r = "array" : oe(o) && (r = "ref")), r !== "object" && E(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = o || {};
  };
  if (p.NODE_ENV !== "production") {
    let o, r;
    return Object.freeze({
      get attrs() {
        return o || (o = new Proxy(e.attrs, si));
      },
      get slots() {
        return r || (r = Pa(e));
      },
      get emit() {
        return (n, ...i) => e.emit(n, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, si),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ts(Wc(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Nt)
        return Nt[o](e);
    },
    has(t, o) {
      return o in t || o in Nt;
    }
  })) : e.proxy;
}
const za = /(?:^|[-_])(\w)/g, Aa = (e) => e.replace(za, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Bs(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kr(e, t, o = !1) {
  let r = Bs(t);
  if (!r && t.__file) {
    const n = t.__file.match(/([^/\\]+)\.\w+$/);
    n && (r = n[1]);
  }
  if (!r && e && e.parent) {
    const n = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = n(
      e.components || e.parent.type.components
    ) || n(e.appContext.components);
  }
  return r ? Aa(r) : o ? "App" : "Anonymous";
}
function qs(e) {
  return P(e) && "__vccOpts" in e;
}
const go = (e, t) => {
  const o = Jc(e, t, bo);
  if (p.NODE_ENV !== "production") {
    const r = Hs();
    r && r.appContext.config.warnRecursiveComputed && (o._warnRecursive = !0);
  }
  return o;
};
function ja() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, o = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, n = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!K(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (oe(u)) {
        je();
        const m = u.value;
        return Ie(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          c(m),
          ">"
        ];
      } else {
        if (_t(u))
          return [
            "div",
            {},
            ["span", e, be(u) ? "ShallowReactive" : "Reactive"],
            "<",
            c(u),
            `>${Ge(u) ? " (readonly)" : ""}`
          ];
        if (Ge(u))
          return [
            "div",
            {},
            ["span", e, be(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const m = [];
    u.type.props && u.props && m.push(s("props", z(u.props))), u.setupState !== H && m.push(s("setup", u.setupState)), u.data !== H && m.push(s("data", z(u.data)));
    const b = l(u, "computed");
    b && m.push(s("computed", b));
    const N = l(u, "inject");
    return N && m.push(s("injected", N)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), m;
  }
  function s(u, m) {
    return m = Z({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((b) => [
          "div",
          {},
          ["span", r, b + ": "],
          c(m[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(u, m = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", o, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : K(u) ? ["object", { object: m ? z(u) : u }] : ["span", o, String(u)];
  }
  function l(u, m) {
    const b = u.type;
    if (P(b))
      return;
    const N = {};
    for (const D in u.ctx)
      h(b, D, m) && (N[D] = u.ctx[D]);
    return N;
  }
  function h(u, m, b) {
    const N = u[b];
    if (S(N) && N.includes(m) || K(N) && m in N || u.extends && h(u.extends, m, b) || u.mixins && u.mixins.some((D) => h(D, m, b)))
      return !0;
  }
  function d(u) {
    return be(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
const ci = "3.5.14", Me = p.NODE_ENV !== "production" ? E : ne;
var de = {};
let tn;
const li = typeof window < "u" && window.trustedTypes;
if (li)
  try {
    tn = /* @__PURE__ */ li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    de.NODE_ENV !== "production" && Me(`Error creating trusted types policy: ${e}`);
  }
const Ks = tn ? (e) => tn.createHTML(e) : (e) => e, Ia = "http://www.w3.org/2000/svg", Ra = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, ai = tt && /* @__PURE__ */ tt.createElement("template"), Fa = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, r) => {
    const n = t === "svg" ? tt.createElementNS(Ia, e) : t === "mathml" ? tt.createElementNS(Ra, e) : o ? tt.createElement(e, { is: o }) : tt.createElement(e);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, r, n, i) {
    const s = o ? o.previousSibling : t.lastChild;
    if (n && (n === i || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), o), !(n === i || !(n = n.nextSibling)); )
        ;
    else {
      ai.innerHTML = Ks(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ai.content;
      if (r === "svg" || r === "mathml") {
        const l = c.firstChild;
        for (; l.firstChild; )
          c.appendChild(l.firstChild);
        c.removeChild(l);
      }
      t.insertBefore(c, o);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, La = Symbol("_vtc");
function Ha(e, t, o) {
  const r = e[La];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const di = Symbol("_vod"), Wa = Symbol("_vsh"), Ua = Symbol(de.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Ba = /(^|;)\s*display\s*:/;
function qa(e, t, o) {
  const r = e.style, n = ee(o);
  let i = !1;
  if (o && !n) {
    if (t)
      if (ee(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          o[c] == null && Lo(r, c, "");
        }
      else
        for (const s in t)
          o[s] == null && Lo(r, s, "");
    for (const s in o)
      s === "display" && (i = !0), Lo(r, s, o[s]);
  } else if (n) {
    if (t !== o) {
      const s = r[Ua];
      s && (o += ";" + s), r.cssText = o, i = Ba.test(o);
    }
  } else t && e.removeAttribute("style");
  di in e && (e[di] = i ? r.display : "", e[Wa] && (r.display = "none"));
}
const Ka = /[^\\];\s*$/, ui = /\s*!important$/;
function Lo(e, t, o) {
  if (S(o))
    o.forEach((r) => Lo(e, t, r));
  else if (o == null && (o = ""), de.NODE_ENV !== "production" && Ka.test(o) && Me(
    `Unexpected semicolon at the end of '${t}' style value: '${o}'`
  ), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const r = Ya(e, t);
    ui.test(o) ? e.setProperty(
      xe(r),
      o.replace(ui, ""),
      "important"
    ) : e[r] = o;
  }
}
const fi = ["Webkit", "Moz", "ms"], $r = {};
function Ya(e, t) {
  const o = $r[t];
  if (o)
    return o;
  let r = me(t);
  if (r !== "filter" && r in e)
    return $r[t] = r;
  r = lr(r);
  for (let n = 0; n < fi.length; n++) {
    const i = fi[n] + r;
    if (i in e)
      return $r[t] = i;
  }
  return t;
}
const hi = "http://www.w3.org/1999/xlink";
function pi(e, t, o, r, n, i = wc(t)) {
  r && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(hi, t.slice(6, t.length)) : e.setAttributeNS(hi, t, o) : o == null || i && !zi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : mt(o) ? String(o) : o
  );
}
function mi(e, t, o, r, n) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Ks(o) : o);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (c !== l || !("_value" in e)) && (e.value = l), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let s = !1;
  if (o === "" || o == null) {
    const c = typeof e[t];
    c === "boolean" ? o = zi(o) : o == null && c === "string" ? (o = "", s = !0) : c === "number" && (o = 0, s = !0);
  }
  try {
    e[t] = o;
  } catch (c) {
    de.NODE_ENV !== "production" && !s && Me(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${o} is invalid.`,
      c
    );
  }
  s && e.removeAttribute(n || t);
}
function jt(e, t, o, r) {
  e.addEventListener(t, o, r);
}
function Xa(e, t, o, r) {
  e.removeEventListener(t, o, r);
}
const bi = Symbol("_vei");
function Ja(e, t, o, r, n = null) {
  const i = e[bi] || (e[bi] = {}), s = i[t];
  if (r && s)
    s.value = de.NODE_ENV !== "production" ? vi(r, t) : r;
  else {
    const [c, l] = Ga(t);
    if (r) {
      const h = i[t] = ed(
        de.NODE_ENV !== "production" ? vi(r, t) : r,
        n
      );
      jt(e, c, h, l);
    } else s && (Xa(e, c, s, l), i[t] = void 0);
  }
}
const gi = /(?:Once|Passive|Capture)$/;
function Ga(e) {
  let t;
  if (gi.test(e)) {
    t = {};
    let r;
    for (; r = e.match(gi); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xe(e.slice(2)), t];
}
let zr = 0;
const Qa = /* @__PURE__ */ Promise.resolve(), Za = () => zr || (Qa.then(() => zr = 0), zr = Date.now());
function ed(e, t) {
  const o = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= o.attached)
      return;
    Qe(
      td(r, o.value),
      t,
      5,
      [r]
    );
  };
  return o.value = e, o.attached = Za(), o;
}
function vi(e, t) {
  return P(e) || S(e) ? e : (Me(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ne);
}
function td(e, t) {
  if (S(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (r) => (n) => !n._stopped && r && r(n)
    );
  } else
    return t;
}
const ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, od = (e, t, o, r, n, i) => {
  const s = n === "svg";
  t === "class" ? Ha(e, r, s) : t === "style" ? qa(e, o, r) : yo(t) ? Wo(t) || Ja(e, t, o, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rd(e, t, r, s)) ? (mi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pi(e, t, r, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ee(r)) ? mi(e, me(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), pi(e, t, r, s));
};
function rd(e, t, o, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ki(t) && P(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return ki(t) && ee(o) ? !1 : t in e;
}
const yi = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nd(e, t, o) {
  const r = /* @__PURE__ */ Eo(e, t);
  sr(r) && Z(r, t);
  class n extends Cn {
    constructor(s) {
      super(r, s, o);
    }
  }
  return n.def = r, n;
}
const id = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Cn extends id {
  constructor(t, o = {}, r = Ei) {
    super(), this._def = t, this._props = o, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== Ei ? this._root = this.shadowRoot : (de.NODE_ENV !== "production" && this.shadowRoot && Me(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Cn) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, ns(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const n of r)
        this._setAttr(n.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: s } = r;
      let c;
      if (i && !S(i))
        for (const l in i) {
          const h = i[l];
          (h === Number || h && h.type === Number) && (l in this._props && (this._props[l] = Fn(this._props[l])), (c || (c = /* @__PURE__ */ Object.create(null)))[me(l)] = !0);
        }
      this._numberProps = c, n && this._resolveProps(r), this.shadowRoot ? this._applyStyles(s) : de.NODE_ENV !== "production" && s && Me(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, o = this._def.__asyncLoader;
    o ? this._pendingResolve = o().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    de.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const o = this._instance && this._instance.exposed;
    if (o)
      for (const r in o)
        L(this, r) ? de.NODE_ENV !== "production" && Me(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => X(o[r])
        });
  }
  _resolveProps(t) {
    const { props: o } = t, r = S(o) ? o : Object.keys(o || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && r.includes(n) && this._setProp(n, this[n]);
    for (const n of r.map(me))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(i) {
          this._setProp(n, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const o = this.hasAttribute(t);
    let r = o ? this.getAttribute(t) : yi;
    const n = me(t);
    o && this._numberProps && this._numberProps[n] && (r = Fn(r)), this._setProp(n, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, o, r = !0, n = !1) {
    if (o !== this._props[t] && (o === yi ? delete this._props[t] : (this._props[t] = o, t === "key" && this._app && (this._app._ceVNode.key = o)), n && this._instance && this._update(), r)) {
      const i = this._ob;
      i && i.disconnect(), o === !0 ? this.setAttribute(xe(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(xe(t), o + "") : o || this.removeAttribute(xe(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    ld(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const o = Ae(this._def, Z(t, this._props));
    return this._instance || (o.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, de.NODE_ENV !== "production" && (r.ceReload = (i) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const n = (i, s) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            sr(s[0]) ? Z({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      r.emit = (i, ...s) => {
        n(i, s), xe(i) !== i && n(xe(i), s);
      }, this._setParent();
    }), o;
  }
  _applyStyles(t, o) {
    if (!t) return;
    if (o) {
      if (o === this._def || this._styleChildren.has(o))
        return;
      this._styleChildren.add(o);
    }
    const r = this._nonce;
    for (let n = t.length - 1; n >= 0; n--) {
      const i = document.createElement("style");
      if (r && i.setAttribute("nonce", r), i.textContent = t[n], this.shadowRoot.prepend(i), de.NODE_ENV !== "production")
        if (o) {
          if (o.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let s = this._childStyles.get(o.__hmrId);
            s || this._childStyles.set(o.__hmrId, s = []), s.push(i);
          }
        } else
          (this._styles || (this._styles = [])).push(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let o;
    for (; o = this.firstChild; ) {
      const r = o.nodeType === 1 && o.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(o), this.removeChild(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), o = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const n = t[r], i = n.getAttribute("name") || "default", s = this._slots[i], c = n.parentNode;
      if (s)
        for (const l of s) {
          if (o && l.nodeType === 1) {
            const h = o + "-s", d = document.createTreeWalker(l, 1);
            l.setAttribute(h, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(h, "");
          }
          c.insertBefore(l, n);
        }
      else
        for (; n.firstChild; ) c.insertBefore(n.firstChild, n);
      c.removeChild(n);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (de.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const o = this._childStyles.get(t.__hmrId);
      o && (o.forEach((r) => this._root.removeChild(r)), o.length = 0);
    }
  }
}
const wi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return S(t) ? (o) => zt(t, o) : t;
};
function sd(e) {
  e.target.composing = !0;
}
function xi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ar = Symbol("_assign"), on = {
  created(e, { modifiers: { lazy: t, trim: o, number: r } }, n) {
    e[Ar] = wi(n);
    const i = r || n.props && n.props.type === "number";
    jt(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let c = e.value;
      o && (c = c.trim()), i && (c = Lr(c)), e[Ar](c);
    }), o && jt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (jt(e, "compositionstart", sd), jt(e, "compositionend", xi), jt(e, "change", xi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: r, trim: n, number: i } }, s) {
    if (e[Ar] = wi(s), e.composing) return;
    const c = (i || e.type === "number") && !/^0\d/.test(e.value) ? Lr(e.value) : e.value, l = t ?? "";
    c !== l && (document.activeElement === e && e.type !== "range" && (r && t === o || n && e.value.trim() === l) || (e.value = l));
  }
}, cd = /* @__PURE__ */ Z({ patchProp: od }, Fa);
let _i;
function Ys() {
  return _i || (_i = ca(cd));
}
const ld = (...e) => {
  Ys().render(...e);
}, Ei = (...e) => {
  const t = Ys().createApp(...e);
  de.NODE_ENV !== "production" && (dd(t), ud(t));
  const { mount: o } = t;
  return t.mount = (r) => {
    const n = fd(r);
    if (!n) return;
    const i = t._component;
    !P(i) && !i.render && !i.template && (i.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = o(n, !1, ad(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
};
function ad(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function dd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => gc(t) || vc(t) || kc(t),
    writable: !1
  });
}
function ud(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Me(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const o = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Me(r), o;
      },
      set() {
        Me(r);
      }
    });
  }
}
function fd(e) {
  if (ee(e)) {
    const t = document.querySelector(e);
    return de.NODE_ENV !== "production" && !t && Me(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return de.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Me(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var hd = {};
function pd() {
  ja();
}
hd.NODE_ENV !== "production" && pd();
const Mo = 43200, Ni = 1440, Oi = Symbol.for("constructDateFrom");
function Dn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Oi in e ? e[Oi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ht(e, t) {
  return Dn(e, e);
}
let md = {};
function bd() {
  return md;
}
function Ci(e) {
  const t = ht(e), o = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return o.setUTCFullYear(t.getFullYear()), +e - +o;
}
function Sn(e, ...t) {
  const o = Dn.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(o);
}
function Ho(e, t) {
  const o = +ht(e) - +ht(t);
  return o < 0 ? -1 : o > 0 ? 1 : o;
}
function gd(e) {
  return Dn(e, Date.now());
}
function vd(e, t, o) {
  const [r, n] = Sn(
    o?.in,
    e,
    t
  ), i = r.getFullYear() - n.getFullYear(), s = r.getMonth() - n.getMonth();
  return i * 12 + s;
}
function kd(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function yd(e, t) {
  return +ht(e) - +ht(t);
}
function wd(e, t) {
  const o = ht(e);
  return o.setHours(23, 59, 59, 999), o;
}
function xd(e, t) {
  const o = ht(e), r = o.getMonth();
  return o.setFullYear(o.getFullYear(), r + 1, 0), o.setHours(23, 59, 59, 999), o;
}
function _d(e, t) {
  const o = ht(e);
  return +wd(o) == +xd(o);
}
function Ed(e, t, o) {
  const [r, n, i] = Sn(
    o?.in,
    e,
    e,
    t
  ), s = Ho(n, i), c = Math.abs(
    vd(n, i)
  );
  if (c < 1) return 0;
  n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - s * c);
  let l = Ho(n, i) === -s;
  _d(r) && c === 1 && Ho(r, i) === 1 && (l = !1);
  const h = s * (c - +l);
  return h === 0 ? 0 : h;
}
function Nd(e, t, o) {
  const r = yd(e, t) / 1e3;
  return kd(o?.roundingMethod)(r);
}
const Od = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Cd = (e, t, o) => {
  let r;
  const n = Od[e];
  return typeof n == "string" ? r = n : t === 1 ? r = n.one : r = n.other.replace("{{count}}", t.toString()), o?.addSuffix ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r;
};
function jr(e) {
  return (t = {}) => {
    const o = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[o] || e.formats[e.defaultWidth];
  };
}
const Dd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Sd = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Vd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Td = {
  date: jr({
    formats: Dd,
    defaultWidth: "full"
  }),
  time: jr({
    formats: Sd,
    defaultWidth: "full"
  }),
  dateTime: jr({
    formats: Vd,
    defaultWidth: "full"
  })
}, Md = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Pd = (e, t, o, r) => Md[e];
function eo(e) {
  return (t, o) => {
    const r = o?.context ? String(o.context) : "standalone";
    let n;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, c = o?.width ? String(o.width) : s;
      n = e.formattingValues[c] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, c = o?.width ? String(o.width) : e.defaultWidth;
      n = e.values[c] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return n[i];
  };
}
const $d = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ad = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, jd = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Id = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Rd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Fd = (e, t) => {
  const o = Number(e), r = o % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd";
    }
  return o + "th";
}, Ld = {
  ordinalNumber: Fd,
  era: eo({
    values: $d,
    defaultWidth: "wide"
  }),
  quarter: eo({
    values: zd,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: eo({
    values: Ad,
    defaultWidth: "wide"
  }),
  day: eo({
    values: jd,
    defaultWidth: "wide"
  }),
  dayPeriod: eo({
    values: Id,
    defaultWidth: "wide",
    formattingValues: Rd,
    defaultFormattingWidth: "wide"
  })
};
function to(e) {
  return (t, o = {}) => {
    const r = o.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    const s = i[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(c) ? Wd(c, (u) => u.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Hd(c, (u) => u.test(s))
    );
    let h;
    h = e.valueCallback ? e.valueCallback(l) : l, h = o.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      o.valueCallback(h)
    ) : h;
    const d = t.slice(s.length);
    return { value: h, rest: d };
  };
}
function Hd(e, t) {
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o]))
      return o;
}
function Wd(e, t) {
  for (let o = 0; o < e.length; o++)
    if (t(e[o]))
      return o;
}
function Ud(e) {
  return (t, o = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const n = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = o.valueCallback ? o.valueCallback(s) : s;
    const c = t.slice(n.length);
    return { value: s, rest: c };
  };
}
const Bd = /^(\d+)(th|st|nd|rd)?/i, qd = /\d+/i, Kd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Yd = {
  any: [/^b/i, /^(a|c)/i]
}, Xd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Jd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gd = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Qd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Zd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, eu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, tu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ou = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, ru = {
  ordinalNumber: Ud({
    matchPattern: Bd,
    parsePattern: qd,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: to({
    matchPatterns: Kd,
    defaultMatchWidth: "wide",
    parsePatterns: Yd,
    defaultParseWidth: "any"
  }),
  quarter: to({
    matchPatterns: Xd,
    defaultMatchWidth: "wide",
    parsePatterns: Jd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: to({
    matchPatterns: Gd,
    defaultMatchWidth: "wide",
    parsePatterns: Qd,
    defaultParseWidth: "any"
  }),
  day: to({
    matchPatterns: Zd,
    defaultMatchWidth: "wide",
    parsePatterns: eu,
    defaultParseWidth: "any"
  }),
  dayPeriod: to({
    matchPatterns: tu,
    defaultMatchWidth: "any",
    parsePatterns: ou,
    defaultParseWidth: "any"
  })
}, nu = {
  code: "en-US",
  formatDistance: Cd,
  formatLong: Td,
  formatRelative: Pd,
  localize: Ld,
  match: ru,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function iu(e, t, o) {
  const r = bd(), n = o?.locale ?? r.locale ?? nu, i = 2520, s = Ho(e, t);
  if (isNaN(s)) throw new RangeError("Invalid time value");
  const c = Object.assign({}, o, {
    addSuffix: o?.addSuffix,
    comparison: s
  }), [l, h] = Sn(
    o?.in,
    ...s > 0 ? [t, e] : [e, t]
  ), d = Nd(h, l), u = (Ci(h) - Ci(l)) / 1e3, m = Math.round((d - u) / 60);
  let b;
  if (m < 2)
    return o?.includeSeconds ? d < 5 ? n.formatDistance("lessThanXSeconds", 5, c) : d < 10 ? n.formatDistance("lessThanXSeconds", 10, c) : d < 20 ? n.formatDistance("lessThanXSeconds", 20, c) : d < 40 ? n.formatDistance("halfAMinute", 0, c) : d < 60 ? n.formatDistance("lessThanXMinutes", 1, c) : n.formatDistance("xMinutes", 1, c) : m === 0 ? n.formatDistance("lessThanXMinutes", 1, c) : n.formatDistance("xMinutes", m, c);
  if (m < 45)
    return n.formatDistance("xMinutes", m, c);
  if (m < 90)
    return n.formatDistance("aboutXHours", 1, c);
  if (m < Ni) {
    const N = Math.round(m / 60);
    return n.formatDistance("aboutXHours", N, c);
  } else {
    if (m < i)
      return n.formatDistance("xDays", 1, c);
    if (m < Mo) {
      const N = Math.round(m / Ni);
      return n.formatDistance("xDays", N, c);
    } else if (m < Mo * 2)
      return b = Math.round(m / Mo), n.formatDistance("aboutXMonths", b, c);
  }
  if (b = Ed(h, l), b < 12) {
    const N = Math.round(m / Mo);
    return n.formatDistance("xMonths", N, c);
  } else {
    const N = b % 12, D = Math.trunc(b / 12);
    return N < 3 ? n.formatDistance("aboutXYears", D, c) : N < 9 ? n.formatDistance("overXYears", D, c) : n.formatDistance("almostXYears", D + 1, c);
  }
}
function su(e, t) {
  return iu(e, gd(e), t);
}
const Xs = () => {
  function e(t) {
    return su(new Date(t), { addSuffix: !0 });
  }
  return {
    formatDate: e
  };
}, Js = /* @__PURE__ */ new Set(), _e = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakSet();
let pt, Vn = 0, Tn = 0;
const rt = "__aa_tgt", vo = "__aa_del", nr = "__aa_new", lu = (e) => {
  const t = pu(e);
  t && t.forEach((o) => mu(o));
}, au = (e) => {
  e.forEach((t) => {
    t.target === pt && uu(), _e.has(t.target) && Dt(t.target);
  });
};
function du(e) {
  const t = rn.get(e);
  t?.disconnect();
  let o = _e.get(e), r = 0;
  const n = 5;
  o || (o = Bt(e), _e.set(e, o));
  const { offsetWidth: i, offsetHeight: s } = pt, l = [
    o.top - n,
    i - (o.left + n + o.width),
    s - (o.top + n + o.height),
    o.left - n
  ].map((d) => `${-1 * Math.floor(d)}px`).join(" "), h = new IntersectionObserver(() => {
    ++r > 1 && Dt(e);
  }, {
    root: pt,
    threshold: 1,
    rootMargin: l
  });
  h.observe(e), rn.set(e, h);
}
function Dt(e) {
  clearTimeout(rr.get(e));
  const t = yr(e), o = ko(t) ? 500 : t.duration;
  rr.set(e, setTimeout(async () => {
    const r = Ct.get(e);
    try {
      await r?.finished, _e.set(e, Bt(e)), du(e);
    } catch {
    }
  }, o));
}
function uu() {
  clearTimeout(rr.get(pt)), rr.set(pt, setTimeout(() => {
    Js.forEach((e) => ec(e, (t) => Gs(() => Dt(t))));
  }, 100));
}
function fu(e) {
  setTimeout(() => {
    cu.set(e, setInterval(() => Gs(Dt.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function Gs(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let nn, It;
const hu = typeof window < "u" && "ResizeObserver" in window;
hu && (pt = document.documentElement, nn = new MutationObserver(lu), It = new ResizeObserver(au), window.addEventListener("scroll", () => {
  Tn = window.scrollY, Vn = window.scrollX;
}), It.observe(pt));
function pu(e) {
  return e.reduce((r, n) => [
    ...r,
    ...Array.from(n.addedNodes),
    ...Array.from(n.removedNodes)
  ], []).every((r) => r.nodeName === "#comment") ? !1 : e.reduce((r, n) => {
    if (r === !1)
      return !1;
    if (n.target instanceof Element) {
      if (Ir(n.target), !r.has(n.target)) {
        r.add(n.target);
        for (let i = 0; i < n.target.children.length; i++) {
          const s = n.target.children.item(i);
          if (s) {
            if (vo in s)
              return !1;
            Ir(n.target, s), r.add(s);
          }
        }
      }
      if (n.removedNodes.length)
        for (let i = 0; i < n.removedNodes.length; i++) {
          const s = n.removedNodes[i];
          if (vo in s)
            return !1;
          s instanceof Element && (r.add(s), Ir(n.target, s), Wt.set(s, [
            n.previousSibling,
            n.nextSibling
          ]));
        }
    }
    return r;
  }, /* @__PURE__ */ new Set());
}
function Ir(e, t) {
  !t && !(rt in e) ? Object.defineProperty(e, rt, { value: e }) : t && !(rt in t) && Object.defineProperty(t, rt, { value: e });
}
function mu(e) {
  var t;
  const o = e.isConnected, r = _e.has(e);
  o && Wt.has(e) && Wt.delete(e), Ct.has(e) && ((t = Ct.get(e)) === null || t === void 0 || t.cancel()), nr in e ? Di(e) : r && o ? gu(e) : r && !o ? vu(e) : Di(e);
}
function Be(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function bu(e) {
  let t = e.parentElement;
  for (; t; ) {
    if (t.scrollLeft || t.scrollTop)
      return { x: t.scrollLeft, y: t.scrollTop };
    t = t.parentElement;
  }
  return { x: 0, y: 0 };
}
function Bt(e) {
  const t = e.getBoundingClientRect(), { x: o, y: r } = bu(e);
  return {
    top: t.top + r,
    left: t.left + o,
    width: t.width,
    height: t.height
  };
}
function Qs(e, t, o) {
  let r = t.width, n = t.height, i = o.width, s = o.height;
  const c = getComputedStyle(e);
  if (c.getPropertyValue("box-sizing") === "content-box") {
    const h = Be(c.paddingTop) + Be(c.paddingBottom) + Be(c.borderTopWidth) + Be(c.borderBottomWidth), d = Be(c.paddingLeft) + Be(c.paddingRight) + Be(c.borderRightWidth) + Be(c.borderLeftWidth);
    r -= d, i -= d, n -= h, s -= h;
  }
  return [r, i, n, s].map(Math.round);
}
function yr(e) {
  return rt in e && Ut.has(e[rt]) ? Ut.get(e[rt]) : { duration: 250, easing: "ease-in-out" };
}
function Zs(e) {
  if (rt in e)
    return e[rt];
}
function Mn(e) {
  const t = Zs(e);
  return t ? no.has(t) : !1;
}
function ec(e, ...t) {
  t.forEach((o) => o(e, Ut.has(e)));
  for (let o = 0; o < e.children.length; o++) {
    const r = e.children.item(o);
    r && t.forEach((n) => n(r, Ut.has(r)));
  }
}
function Pn(e) {
  return Array.isArray(e) ? e : [e];
}
function ko(e) {
  return typeof e == "function";
}
function gu(e) {
  const t = _e.get(e), o = Bt(e);
  if (!Mn(e))
    return _e.set(e, o);
  let r;
  if (!t)
    return;
  const n = yr(e);
  if (typeof n != "function") {
    const i = t.left - o.left, s = t.top - o.top, [c, l, h, d] = Qs(e, t, o), u = {
      transform: `translate(${i}px, ${s}px)`
    }, m = {
      transform: "translate(0, 0)"
    };
    c !== l && (u.width = `${c}px`, m.width = `${l}px`), h !== d && (u.height = `${h}px`, m.height = `${d}px`), r = e.animate([u, m], {
      duration: n.duration,
      easing: n.easing
    });
  } else {
    const [i] = Pn(n(e, "remain", t, o));
    r = new Animation(i), r.play();
  }
  Ct.set(e, r), _e.set(e, o), r.addEventListener("finish", Dt.bind(null, e));
}
function Di(e) {
  nr in e && delete e[nr];
  const t = Bt(e);
  _e.set(e, t);
  const o = yr(e);
  if (!Mn(e))
    return;
  let r;
  if (typeof o != "function")
    r = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: o.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [n] = Pn(o(e, "add", t));
    r = new Animation(n), r.play();
  }
  Ct.set(e, r), r.addEventListener("finish", Dt.bind(null, e));
}
function Si(e, t) {
  var o;
  e.remove(), _e.delete(e), Wt.delete(e), Ct.delete(e), (o = rn.get(e)) === null || o === void 0 || o.disconnect(), setTimeout(() => {
    if (vo in e && delete e[vo], Object.defineProperty(e, nr, { value: !0, configurable: !0 }), t && e instanceof HTMLElement)
      for (const r in t)
        e.style[r] = "";
  }, 0);
}
function vu(e) {
  var t;
  if (!Wt.has(e) || !_e.has(e))
    return;
  const [o, r] = Wt.get(e);
  Object.defineProperty(e, vo, { value: !0, configurable: !0 });
  const n = window.scrollX, i = window.scrollY;
  if (r && r.parentNode && r.parentNode instanceof Element ? r.parentNode.insertBefore(e, r) : o && o.parentNode ? o.parentNode.appendChild(e) : (t = Zs(e)) === null || t === void 0 || t.appendChild(e), !Mn(e))
    return Si(e);
  const [s, c, l, h] = yu(e), d = yr(e), u = _e.get(e);
  (n !== Vn || i !== Tn) && ku(e, n, i, d);
  let m, b = {
    position: "absolute",
    top: `${s}px`,
    left: `${c}px`,
    width: `${l}px`,
    height: `${h}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!ko(d))
    Object.assign(e.style, b), m = e.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], { duration: d.duration, easing: "ease-out" });
  else {
    const [N, D] = Pn(d(e, "remove", u));
    D?.styleReset !== !1 && (b = D?.styleReset || b, Object.assign(e.style, b)), m = new Animation(N), m.play();
  }
  Ct.set(e, m), m.addEventListener("finish", Si.bind(null, e, b));
}
function ku(e, t, o, r) {
  const n = Vn - t, i = Tn - o, s = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(pt).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + n, window.scrollY + i), !e.parentElement)
    return;
  const l = e.parentElement;
  let h = l.clientHeight, d = l.clientWidth;
  const u = performance.now();
  function m() {
    requestAnimationFrame(() => {
      if (!ko(r)) {
        const b = h - l.clientHeight, N = d - l.clientWidth;
        u + r.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - N,
          top: window.scrollY - b
        }), h = l.clientHeight, d = l.clientWidth, m()) : document.documentElement.style.scrollBehavior = s;
      }
    });
  }
  m();
}
function yu(e) {
  const t = _e.get(e), [o, , r] = Qs(e, t, Bt(e));
  let n = e.parentElement;
  for (; n && (getComputedStyle(n).position === "static" || n instanceof HTMLBodyElement); )
    n = n.parentElement;
  n || (n = document.body);
  const i = getComputedStyle(n), s = _e.get(n) || Bt(n), c = Math.round(t.top - s.top) - Be(i.borderTopWidth), l = Math.round(t.left - s.left) - Be(i.borderLeftWidth);
  return [c, l, o, r];
}
function wu(e, t = {}) {
  return nn && It && (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !ko(t) && !t.disrespectUserMotionPreference || (no.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), ec(e, Dt, fu, (n) => It?.observe(n)), ko(t) ? Ut.set(e, t) : Ut.set(e, { duration: 250, easing: "ease-in-out", ...t }), nn.observe(e, { childList: !0 }), Js.add(e))), Object.freeze({
    parent: e,
    enable: () => {
      no.add(e);
    },
    disable: () => {
      no.delete(e);
    },
    isEnabled: () => no.has(e)
  });
}
const tc = {
  mounted: (e, t) => {
    wu(e, t.value || {});
  },
  // ignore ssr see #96:
  getSSRProps: () => ({})
}, xu = { class: "p-4 border-t border-base-300 bg-base-200/80 space-y-4" }, _u = { class: "space-y-4" }, Eu = { class: "flex items-center gap-2 text-xs mb-1" }, Nu = ["src"], Ou = {
  key: 1,
  class: "w-6 h-6 rounded-full bg-base-300 inline-block"
}, Cu = { class: "text-xs space-x-1" }, Du = { class: "text-base-content/70 font-semibold" }, Su = { class: "text-base-content/50" }, Vu = { class: "pl-8 text-sm" }, Tu = {
  key: 0,
  class: "flex flex-col gap-2"
}, Mu = ["disabled"], Pu = /* @__PURE__ */ Eo({
  __name: "comments",
  props: {
    isReadonly: { type: Boolean },
    comments: { type: Array }
  },
  emits: ["addComment"],
  setup(e, { emit: t }) {
    const o = t, r = ce(""), { formatDate: n } = Xs();
    function i() {
      o("addComment", r.value), r.value = "";
    }
    return (s, c) => (q(), Q("div", xu, [
      A("div", _u, [
        (q(!0), Q(Te, null, ks(s.comments, (l) => po((q(), Q("div", {
          key: l.id
        }, [
          A("div", Eu, [
            l.user.avatar ? (q(), Q("img", {
              key: 0,
              src: l.user.avatar,
              alt: "User avatar",
              class: "w-6 h-6 rounded-full bg-base-300"
            }, null, 8, Nu)) : (q(), Q("span", Ou)),
            A("div", Cu, [
              A("span", Du, Ve(l.user.name || l.user.email || "Anonymous"), 1),
              A("span", Su, Ve(X(n)(l.createdAt)), 1)
            ])
          ]),
          A("div", Vu, Ve(l.content), 1)
        ])), [
          [X(tc)]
        ])), 128))
      ]),
      s.isReadonly ? Ht("", !0) : (q(), Q("div", Tu, [
        po(A("textarea", {
          class: "textarea textarea-bordered text-sm w-full",
          "onUpdate:modelValue": c[0] || (c[0] = (l) => r.value = l),
          placeholder: "Add a comment..."
        }, null, 512), [
          [on, r.value]
        ]),
        A("button", {
          class: "btn btn-sm btn-primary self-end",
          disabled: !r.value.trim(),
          onClick: i
        }, " Submit ", 8, Mu)
      ]))
    ]));
  }
}), Vi = ce(null), Ti = ce(null);
function St() {
  function e(o) {
    Ti.value = o;
  }
  function t(o) {
    Vi.value = o;
  }
  return {
    user: Vi,
    projectId: Ti,
    setProjectId: e,
    setUser: t
  };
}
async function $u(e, t = {}, o, r) {
  const n = "https://api.trypulsekit.com/public";
  if (!o)
    throw new Error("PulseKit: Project ID is required for making requests");
  const i = `${n}${e.startsWith("/") ? e : `/${e}`}`, s = new Headers(t.headers);
  s.set("X-PulseKit-Project", o), s.set("Content-Type", "application/json"), r && s.set("X-PulseKit-User", JSON.stringify(r));
  try {
    const c = await fetch(i, {
      ...t,
      headers: s
    });
    if (!c.ok)
      throw new Error(`PulseKit API Error: ${c.status} ${c.statusText}`);
    return await c.json();
  } catch (c) {
    throw console.error("PulseKit: API request failed", c), c;
  }
}
function wr() {
  return async (e, t = {}) => {
    const { user: o, projectId: r } = St();
    return $u(e, t, r.value, o.value);
  };
}
const vt = ce([]), Rr = ce(!0), $t = ce(null);
function $n() {
  const { user: e } = St(), t = wr();
  async function o() {
    try {
      Rr.value = !0, $t.value = null;
      const s = await t(
        `/feedback${e.value?.id ? `?userId=${e.value?.id}` : ""}`
      );
      vt.value = s.map((c) => ({
        ...c,
        showComments: !1
      }));
    } catch (s) {
      $t.value = s instanceof Error ? s.message : "Failed to load feedback";
    } finally {
      Rr.value = !1;
    }
  }
  async function r(s) {
    try {
      const { comments: c } = await t(`/feedback/${s}/comments`);
      return c;
    } catch (c) {
      return $t.value = c instanceof Error ? c.message : "Failed to load comments", null;
    }
  }
  async function n(s, c) {
    if (!c.trim() || !e.value || !e.value.id) return null;
    try {
      const { feedback: l } = await t(
        "/feedback",
        {
          method: "POST",
          body: JSON.stringify({
            title: s,
            content: c,
            userId: e.value.id
          })
        }
      );
      return vt.value = [l, ...vt.value], l;
    } catch (l) {
      return $t.value = l instanceof Error ? l.message : "Failed to submit feedback", null;
    }
  }
  async function i(s, c) {
    if (!(!e.value || !e.value.id))
      try {
        const { feedback: l } = await t(
          `/feedback/${s}/vote`,
          {
            method: "POST",
            body: JSON.stringify({
              userId: e.value.id
            })
          }
        ), h = vt.value.findIndex((d) => d.id === s);
        return h !== -1 && (vt.value[h] = {
          ...vt.value[h],
          votes: l.votes
        }), l;
      } catch (l) {
        return $t.value = l instanceof Error ? l.message : "Failed to vote", null;
      }
  }
  return {
    feedbackItems: vt,
    loading: Rr,
    error: $t,
    loadFeedback: o,
    loadComments: r,
    submitNewFeedback: n,
    voteOnFeedback: i
  };
}
function zu() {
  const e = ce(null), t = wr(), { user: o } = St();
  async function r(n, i) {
    if (!i.trim() || !o.value?.id) return null;
    try {
      const { comment: s } = await t(
        `/feedback/${n}/comment`,
        {
          method: "POST",
          body: JSON.stringify({
            comment: i
          })
        }
      );
      return s;
    } catch (s) {
      return e.value = s instanceof Error ? s.message : "Failed to add comment", null;
    }
  }
  return {
    error: e,
    addComment: r
  };
}
const Au = { class: "card card-border bg-base-100 shadow-sm overflow-hidden" }, ju = { class: "card-body p-4" }, Iu = ["title"], Ru = { class: "card-title text-primary" }, Fu = { class: "pb-1 text-sm text-base-content" }, Lu = { class: "card-actions justify-between items-end" }, Hu = { class: "flex items-center gap-2" }, Wu = ["src"], Uu = {
  key: 1,
  class: "size-4 rounded-full bg-base-300 inline-block"
}, Bu = { class: "text-xs text-base-content/70 font-medium" }, qu = { class: "space-x-2" }, Ku = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center bg-base-100/80 rounded"
}, Yu = { key: 1 }, Xu = ["disabled"], Ju = /* @__PURE__ */ Eo({
  __name: "feedback",
  props: /* @__PURE__ */ jl({
    feedback: { type: Object },
    isReadonly: { type: Boolean }
  }, {
    showComments: { type: Boolean },
    showCommentsModifiers: {}
  }),
  emits: ["update:showComments"],
  setup(e) {
    const t = ma(e, "showComments"), o = e, { formatDate: r } = Xs(), { user: n } = St(), { addComment: i } = zu(), { loadComments: s, voteOnFeedback: c } = $n(), l = ce(!1), h = go(() => o.feedback.votes.some((b) => b.userId === n.value?.id)), d = ce([]);
    async function u() {
      if (!t.value && d.value.length === 0) {
        l.value = !0;
        try {
          const b = await s(o.feedback.id);
          d.value = b || [];
        } finally {
          l.value = !1;
        }
      }
      t.value = !t.value;
    }
    async function m(b) {
      const N = await i(o.feedback.id, b);
      d.value = [...d.value, N];
    }
    return (b, N) => (q(), Q("div", Au, [
      A("div", ju, [
        A("time", {
          title: b.feedback.createdAt,
          class: "text-xs text-base-content/50"
        }, Ve(X(r)(b.feedback.createdAt)), 9, Iu),
        A("h2", Ru, Ve(b.feedback.title), 1),
        A("p", Fu, Ve(b.feedback.content), 1),
        A("div", Lu, [
          A("div", Hu, [
            b.feedback?.user?.avatar ? (q(), Q("img", {
              key: 0,
              src: b.feedback?.user?.avatar,
              alt: "User avatar",
              class: "size-4 rounded-full bg-base-300"
            }, null, 8, Wu)) : (q(), Q("span", Uu)),
            A("span", Bu, Ve(b.feedback?.user?.name || b.feedback?.user?.email || "Anonymous"), 1)
          ]),
          A("div", qu, [
            A("button", {
              onClick: u,
              class: "btn btn-sm btn-outline btn-accent relative"
            }, [
              l.value ? (q(), Q("div", Ku, N[1] || (N[1] = [
                A("span", { class: "loading loading-spinner loading-xs" }, null, -1)
              ]))) : (q(), Q("span", Yu, "💬 " + Ve(b.feedback.comments || 0), 1))
            ]),
            A("button", {
              onClick: N[0] || (N[0] = (D) => X(c)(b.feedback.id, 1)),
              disabled: b.isReadonly,
              class: ar(["btn btn-sm btn-accent", {
                "btn-outline": !h.value
              }])
            }, " 👍 " + Ve(b.feedback.votes.length || 0), 11, Xu)
          ])
        ])
      ]),
      b.feedback.showComments ? (q(), Nn(Pu, {
        key: 0,
        comments: d.value,
        isReadonly: b.isReadonly,
        onAddComment: m
      }, null, 8, ["comments", "isReadonly"])) : Ht("", !0)
    ]));
  }
}), Gu = {
  key: 0,
  class: "card card-border shadow-sm bg-base-100"
}, Qu = { class: "card-body p-4" }, Zu = { class: "fieldset" }, ef = { class: "fieldset" }, tf = { class: "card-actions justify-end" }, of = ["disabled"], rf = { key: 0 }, nf = { key: 1 }, sf = /* @__PURE__ */ Eo({
  __name: "FeedbackForm",
  props: {
    isReadonly: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, { submitNewFeedback: o } = $n(), r = ce(""), n = ce(""), i = ce(!1);
    async function s() {
      if (!(!n.value.trim() || t.isReadonly || i.value)) {
        i.value = !0;
        try {
          await o(r.value, n.value), r.value = "", n.value = "";
        } finally {
          i.value = !1;
        }
      }
    }
    return (c, l) => c.isReadonly ? Ht("", !0) : (q(), Q("div", Gu, [
      A("div", Qu, [
        l[4] || (l[4] = A("h2", { class: "card-title" }, "Submit Feedback", -1)),
        l[5] || (l[5] = A("p", { class: "text-sm text-base-content/50" }, "Share your feedback or suggestions...", -1)),
        A("div", null, [
          A("fieldset", Zu, [
            l[2] || (l[2] = A("legend", { class: "fieldset-legend" }, "Title", -1)),
            po(A("input", {
              type: "text",
              class: "input input-bordered input-sm w-full",
              "onUpdate:modelValue": l[0] || (l[0] = (h) => r.value = h)
            }, null, 512), [
              [on, r.value]
            ])
          ]),
          A("fieldset", ef, [
            l[3] || (l[3] = A("legend", { class: "fieldset-legend" }, "Description", -1)),
            po(A("textarea", {
              class: "textarea textarea-bordered textarea-sm w-full",
              "onUpdate:modelValue": l[1] || (l[1] = (h) => n.value = h)
            }, null, 512), [
              [on, n.value]
            ])
          ])
        ]),
        A("div", tf, [
          A("button", {
            class: "btn btn-primary btn-sm",
            onClick: s,
            disabled: !n.value.trim() || c.disabled || i.value
          }, [
            i.value ? (q(), Q("span", rf, "Submitting...")) : (q(), Q("span", nf, "Submit"))
          ], 8, of)
        ])
      ])
    ]));
  }
});
function cf() {
  const { user: e, setUser: t } = St(), o = ce(null), r = go(() => !!e.value), n = go(() => !r.value);
  async function i(s) {
    try {
      const l = await wr()("/identify", {
        method: "POST",
        body: JSON.stringify(s)
      });
      return t(l.user), l.user;
    } catch (c) {
      return o.value = c instanceof Error ? c.message : "Failed to identify user", null;
    }
  }
  return {
    error: o,
    isIdentified: r,
    isReadonly: n,
    identifyUser: i
  };
}
const Fr = ce(null);
function lf() {
  const { projectId: e } = St(), t = ce(!1), o = ce(null), r = wr();
  async function n() {
    if (!e.value) {
      o.value = "No project ID provided";
      return;
    }
    t.value = !0, o.value = null;
    try {
      const i = await r("/project");
      return Fr.value = i, Fr;
    } catch (i) {
      o.value = i instanceof Error ? i.message : "An unknown error occurred", console.error("Error loading project:", i);
    } finally {
      t.value = !1;
    }
  }
  return {
    project: Fr,
    loading: t,
    error: o,
    loadProject: n
  };
}
const af = ["data-theme"], df = {
  key: 0,
  class: "text-center py-2 text-primary/50"
}, uf = {
  key: 1,
  class: "bg-error/10 text-error p-4 rounded mb-4 flex flex-col gap-2"
}, ff = {
  key: 2,
  class: "text-primary flex flex-col gap-4"
}, hf = {
  key: 0,
  class: "bg-base-200/80 shadow-sm border border-base-300 rounded-lg p-3 mb-4"
}, pf = {
  key: 1,
  class: "bg-error/10 text-error p-4 rounded mb-4 flex flex-col gap-2"
}, mf = {
  key: 2,
  class: "text-center py-8 text-primary/50"
}, bf = {
  key: 3,
  class: "text-center py-8 text-primary/50"
}, gf = { key: 0 }, vf = {
  key: 4,
  class: "flex flex-col gap-4"
}, kf = ["href"], yf = /* @__PURE__ */ Eo({
  __name: "Board",
  props: {
    projectId: { type: String },
    user: { type: [String, null] }
  },
  setup(e) {
    const t = e, { setProjectId: o, setUser: r } = St(), {
      isReadonly: n,
      identifyUser: i
    } = cf(), {
      project: s,
      loading: c,
      error: l,
      loadProject: h
    } = lf(), {
      feedbackItems: d,
      loading: u,
      error: m,
      loadFeedback: b
    } = $n(), N = go(() => `https://trypulsekit.com/?utm_source=pulsekit-embed&utm_medium=${t.projectId}&utm_campaign=powered-by`);
    return gs(async () => {
      try {
        if (o(t.projectId), await h(), !s.value)
          return;
        if (t.user) {
          const D = JSON.parse(t.user);
          r(D), await i(D);
        }
        await b();
      } catch (D) {
        console.error("Error during initialization sequence:", D);
      }
    }), (D, G) => (q(), Q("div", {
      id: "pulsekit-embed",
      "data-theme": X(s)?.theme || "light",
      class: "bg-transparent"
    }, [
      X(c) ? (q(), Q("div", df, " Loading project... ")) : X(l) ? (q(), Q("div", uf, [
        Fo(Ve(X(l)) + " ", 1),
        A("button", {
          onClick: G[0] || (G[0] = //@ts-ignore
          (...j) => X(h) && X(h)(...j)),
          class: "btn btn-sm btn-error self-end"
        }, "Try Again")
      ])) : X(s) ? (q(), Q("div", ff, [
        X(n) ? (q(), Q("div", hf, G[2] || (G[2] = [
          A("div", { class: "flex items-center gap-2" }, [
            A("span", { class: "text-xl" }, "ℹ️"),
            A("span", { class: "text-sm text-base-content/50" }, "You're viewing in read-only mode.")
          ], -1)
        ]))) : Ht("", !0),
        Ae(sf, {
          disabled: X(u) || X(n),
          "is-readonly": X(n)
        }, null, 8, ["disabled", "is-readonly"]),
        X(m) ? (q(), Q("div", pf, [
          Fo(Ve(X(m)) + " ", 1),
          A("button", {
            onClick: G[1] || (G[1] = //@ts-ignore
            (...j) => X(b) && X(b)(...j)),
            class: "btn btn-sm btn-error self-end"
          }, "Try Again")
        ])) : X(u) ? (q(), Q("div", mf, " Loading feedback... ")) : X(d).length === 0 ? (q(), Q("div", bf, [
          G[3] || (G[3] = Fo(" No feedback items yet. ")),
          X(n) ? Ht("", !0) : (q(), Q("span", gf, "Be the first to share your thoughts!"))
        ])) : po((q(), Q("div", vf, [
          (q(!0), Q(Te, null, ks(X(d), (j) => (q(), Nn(Ju, {
            key: j.id,
            feedback: j,
            "is-readonly": X(n),
            "show-comments": j.showComments,
            "onUpdate:showComments": (te) => j.showComments = te
          }, null, 8, ["feedback", "is-readonly", "show-comments", "onUpdate:showComments"]))), 128))
        ])), [
          [X(tc)]
        ]),
        A("a", {
          class: "btn btn-secondary btn-xs self-center",
          href: N.value,
          target: "_blank"
        }, " Powered by PulseKit ", 8, kf)
      ])) : Ht("", !0)
    ], 8, af));
  }
}), wf = `/*! tailwindcss v4.1.7 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-sky-100:oklch(95.1% .026 236.824);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--spacing:.25rem;--container-md:28rem;--container-3xl:48rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--radius-lg:.5rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:where(#pulsekit-embed),#pulsekit-embed:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){#pulsekit-embed{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}#pulsekit-embed:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cupcake]:checked),[data-theme=cupcake]{color-scheme:light;--color-base-100:oklch(97.788% .004 56.375);--color-base-200:oklch(93.982% .007 61.449);--color-base-300:oklch(91.586% .006 53.44);--color-base-content:oklch(23.574% .066 313.189);--color-primary:oklch(85% .138 181.071);--color-primary-content:oklch(43% .078 188.216);--color-secondary:oklch(89% .061 343.231);--color-secondary-content:oklch(45% .187 3.815);--color-accent:oklch(90% .076 70.697);--color-accent-content:oklch(47% .157 37.304);--color-neutral:oklch(27% .006 286.033);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(68% .169 237.323);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(69% .17 162.48);--color-success-content:oklch(26% .051 172.552);--color-warning:oklch(79% .184 86.047);--color-warning-content:oklch(28% .066 53.813);--color-error:oklch(64% .246 16.439);--color-error-content:oklch(27% .105 12.094);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=bumblebee]:checked),[data-theme=bumblebee]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(85% .199 91.936);--color-primary-content:oklch(42% .095 57.708);--color-secondary:oklch(75% .183 55.934);--color-secondary-content:oklch(40% .123 38.172);--color-accent:oklch(0% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(37% .01 67.558);--color-neutral-content:oklch(92% .003 48.717);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(39% .09 240.876);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=emerald]:checked),[data-theme=emerald]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(35.519% .032 262.988);--color-primary:oklch(76.662% .135 153.45);--color-primary-content:oklch(33.387% .04 162.24);--color-secondary:oklch(61.302% .202 261.294);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(72.772% .149 33.2);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(35.519% .032 262.988);--color-neutral-content:oklch(98.462% .001 247.838);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=corporate]:checked),[data-theme=corporate]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(22.389% .031 278.072);--color-primary:oklch(58% .158 241.966);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(55% .046 257.417);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(60% .126 221.723);--color-info-content:oklch(100% 0 0);--color-success:oklch(62% .194 149.214);--color-success-content:oklch(100% 0 0);--color-warning:oklch(85% .199 91.936);--color-warning-content:oklch(0% 0 0);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(0% 0 0);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=synthwave]:checked),[data-theme=synthwave]{color-scheme:dark;--color-base-100:oklch(15% .09 281.288);--color-base-200:oklch(20% .09 281.288);--color-base-300:oklch(25% .09 281.288);--color-base-content:oklch(78% .115 274.713);--color-primary:oklch(71% .202 349.761);--color-primary-content:oklch(28% .109 3.907);--color-secondary:oklch(82% .111 230.318);--color-secondary-content:oklch(29% .066 243.157);--color-accent:oklch(75% .183 55.934);--color-accent-content:oklch(26% .079 36.259);--color-neutral:oklch(45% .24 277.023);--color-neutral-content:oklch(87% .065 274.039);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(77% .152 181.912);--color-success-content:oklch(27% .046 192.524);--color-warning:oklch(90% .182 98.111);--color-warning-content:oklch(42% .095 57.708);--color-error:oklch(73.7% .121 32.639);--color-error-content:oklch(23.501% .096 290.329);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=retro]:checked),[data-theme=retro]{color-scheme:light;--color-base-100:oklch(91.637% .034 90.515);--color-base-200:oklch(88.272% .049 91.774);--color-base-300:oklch(84.133% .065 90.856);--color-base-content:oklch(41% .112 45.904);--color-primary:oklch(80% .114 19.571);--color-primary-content:oklch(39% .141 25.723);--color-secondary:oklch(92% .084 155.995);--color-secondary-content:oklch(44% .119 151.328);--color-accent:oklch(68% .162 75.834);--color-accent-content:oklch(41% .112 45.904);--color-neutral:oklch(44% .011 73.639);--color-neutral-content:oklch(86% .005 56.366);--color-info:oklch(58% .158 241.966);--color-info-content:oklch(96% .059 95.617);--color-success:oklch(51% .096 186.391);--color-success-content:oklch(96% .059 95.617);--color-warning:oklch(64% .222 41.116);--color-warning-content:oklch(96% .059 95.617);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(40% .123 38.172);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cyberpunk]:checked),[data-theme=cyberpunk]{color-scheme:light;--color-base-100:oklch(94.51% .179 104.32);--color-base-200:oklch(91.51% .179 104.32);--color-base-300:oklch(85.51% .179 104.32);--color-base-content:oklch(0% 0 0);--color-primary:oklch(74.22% .209 6.35);--color-primary-content:oklch(14.844% .041 6.35);--color-secondary:oklch(83.33% .184 204.72);--color-secondary-content:oklch(16.666% .036 204.72);--color-accent:oklch(71.86% .217 310.43);--color-accent-content:oklch(14.372% .043 310.43);--color-neutral:oklch(23.04% .065 269.31);--color-neutral-content:oklch(94.51% .179 104.32);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=valentine]:checked),[data-theme=valentine]{color-scheme:light;--color-base-100:oklch(97% .014 343.198);--color-base-200:oklch(94% .028 342.258);--color-base-300:oklch(89% .061 343.231);--color-base-content:oklch(52% .223 3.958);--color-primary:oklch(65% .241 354.308);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(62% .265 303.9);--color-secondary-content:oklch(97% .014 308.299);--color-accent:oklch(82% .111 230.318);--color-accent-content:oklch(39% .09 240.876);--color-neutral:oklch(40% .153 2.432);--color-neutral-content:oklch(89% .061 343.231);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(44% .11 240.79);--color-success:oklch(84% .143 164.978);--color-success-content:oklch(43% .095 166.913);--color-warning:oklch(75% .183 55.934);--color-warning-content:oklch(26% .079 36.259);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(97% .013 17.38);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=halloween]:checked),[data-theme=halloween]{color-scheme:dark;--color-base-100:oklch(21% .006 56.043);--color-base-200:oklch(14% .004 49.25);--color-base-300:oklch(0% 0 0);--color-base-content:oklch(84.955% 0 0);--color-primary:oklch(77.48% .204 60.62);--color-primary-content:oklch(19.693% .004 196.779);--color-secondary:oklch(45.98% .248 305.03);--color-secondary-content:oklch(89.196% .049 305.03);--color-accent:oklch(64.8% .223 136.073);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(24.371% .046 65.681);--color-neutral-content:oklch(84.874% .009 65.681);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(13.316% .031 58.318);--color-error:oklch(65.72% .199 27.33);--color-error-content:oklch(13.144% .039 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=garden]:checked),[data-theme=garden]{color-scheme:light;--color-base-100:oklch(92.951% .002 17.197);--color-base-200:oklch(86.445% .002 17.197);--color-base-300:oklch(79.938% .001 17.197);--color-base-content:oklch(16.961% .001 17.32);--color-primary:oklch(62.45% .278 3.836);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(48.495% .11 355.095);--color-secondary-content:oklch(89.699% .022 355.095);--color-accent:oklch(56.273% .054 154.39);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(24.155% .049 89.07);--color-neutral-content:oklch(92.951% .002 17.197);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=forest]:checked),[data-theme=forest]{color-scheme:dark;--color-base-100:oklch(20.84% .008 17.911);--color-base-200:oklch(18.522% .007 17.911);--color-base-300:oklch(16.203% .007 17.911);--color-base-content:oklch(83.768% .001 17.911);--color-primary:oklch(68.628% .185 148.958);--color-primary-content:oklch(0% 0 0);--color-secondary:oklch(69.776% .135 168.327);--color-secondary-content:oklch(13.955% .027 168.327);--color-accent:oklch(70.628% .119 185.713);--color-accent-content:oklch(14.125% .023 185.713);--color-neutral:oklch(30.698% .039 171.364);--color-neutral-content:oklch(86.139% .007 171.364);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=aqua]:checked),[data-theme=aqua]{color-scheme:dark;--color-base-100:oklch(37% .146 265.522);--color-base-200:oklch(28% .091 267.935);--color-base-300:oklch(22% .091 267.935);--color-base-content:oklch(90% .058 230.902);--color-primary:oklch(85.661% .144 198.645);--color-primary-content:oklch(40.124% .068 197.603);--color-secondary:oklch(60.682% .108 309.782);--color-secondary-content:oklch(96% .016 293.756);--color-accent:oklch(93.426% .102 94.555);--color-accent-content:oklch(18.685% .02 94.555);--color-neutral:oklch(27% .146 265.522);--color-neutral-content:oklch(80% .146 265.522);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(27% .077 45.635);--color-error:oklch(73.95% .19 27.33);--color-error-content:oklch(14.79% .038 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=lofi]:checked),[data-theme=lofi]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(15.906% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(21.455% .001 17.278);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(26.861% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(79.54% .103 205.9);--color-info-content:oklch(15.908% .02 205.9);--color-success:oklch(90.13% .153 164.14);--color-success-content:oklch(18.026% .03 164.14);--color-warning:oklch(88.37% .135 79.94);--color-warning-content:oklch(17.674% .027 79.94);--color-error:oklch(78.66% .15 28.47);--color-error-content:oklch(15.732% .03 28.47);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=pastel]:checked),[data-theme=pastel]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98.462% .001 247.838);--color-base-300:oklch(92.462% .001 247.838);--color-base-content:oklch(20% 0 0);--color-primary:oklch(90% .063 306.703);--color-primary-content:oklch(49% .265 301.924);--color-secondary:oklch(89% .058 10.001);--color-secondary-content:oklch(51% .222 16.935);--color-accent:oklch(90% .093 164.15);--color-accent-content:oklch(50% .118 165.612);--color-neutral:oklch(55% .046 257.417);--color-neutral-content:oklch(92% .013 255.508);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(52% .105 223.128);--color-success:oklch(87% .15 154.449);--color-success-content:oklch(52% .154 150.069);--color-warning:oklch(83% .128 66.29);--color-warning-content:oklch(55% .195 38.402);--color-error:oklch(80% .114 19.571);--color-error-content:oklch(50% .213 27.518);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=fantasy]:checked),[data-theme=fantasy]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(27.807% .029 256.847);--color-primary:oklch(37.45% .189 325.02);--color-primary-content:oklch(87.49% .037 325.02);--color-secondary:oklch(53.92% .162 241.36);--color-secondary-content:oklch(90.784% .032 241.36);--color-accent:oklch(75.98% .204 56.72);--color-accent-content:oklch(15.196% .04 56.72);--color-neutral:oklch(27.807% .029 256.847);--color-neutral-content:oklch(85.561% .005 256.847);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=wireframe]:checked),[data-theme=wireframe]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(87% 0 0);--color-primary-content:oklch(26% 0 0);--color-secondary:oklch(87% 0 0);--color-secondary-content:oklch(26% 0 0);--color-accent:oklch(87% 0 0);--color-accent-content:oklch(26% 0 0);--color-neutral:oklch(87% 0 0);--color-neutral-content:oklch(26% 0 0);--color-info:oklch(44% .11 240.79);--color-info-content:oklch(90% .058 230.902);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .093 164.15);--color-warning:oklch(47% .137 46.201);--color-warning-content:oklch(92% .12 95.746);--color-error:oklch(44% .177 26.899);--color-error-content:oklch(88% .062 18.334);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=black]:checked),[data-theme=black]{color-scheme:dark;--color-base-100:oklch(0% 0 0);--color-base-200:oklch(19% 0 0);--color-base-300:oklch(22% 0 0);--color-base-content:oklch(87.609% 0 0);--color-primary:oklch(35% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(35% 0 0);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(35% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(35% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(45.201% .313 264.052);--color-info-content:oklch(89.04% .062 264.052);--color-success:oklch(51.975% .176 142.495);--color-success-content:oklch(90.395% .035 142.495);--color-warning:oklch(96.798% .211 109.769);--color-warning-content:oklch(19.359% .042 109.769);--color-error:oklch(62.795% .257 29.233);--color-error-content:oklch(12.559% .051 29.233);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=luxury]:checked),[data-theme=luxury]{color-scheme:dark;--color-base-100:oklch(14.076% .004 285.822);--color-base-200:oklch(20.219% .004 308.229);--color-base-300:oklch(23.219% .004 308.229);--color-base-content:oklch(75.687% .123 76.89);--color-primary:oklch(100% 0 0);--color-primary-content:oklch(20% 0 0);--color-secondary:oklch(27.581% .064 261.069);--color-secondary-content:oklch(85.516% .012 261.069);--color-accent:oklch(36.674% .051 338.825);--color-accent-content:oklch(87.334% .01 338.825);--color-neutral:oklch(24.27% .057 59.825);--color-neutral-content:oklch(93.203% .089 90.861);--color-info:oklch(79.061% .121 237.133);--color-info-content:oklch(15.812% .024 237.133);--color-success:oklch(78.119% .192 132.154);--color-success-content:oklch(15.623% .038 132.154);--color-warning:oklch(86.127% .136 102.891);--color-warning-content:oklch(17.225% .027 102.891);--color-error:oklch(71.753% .176 22.568);--color-error-content:oklch(14.35% .035 22.568);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dracula]:checked),[data-theme=dracula]{color-scheme:dark;--color-base-100:oklch(28.822% .022 277.508);--color-base-200:oklch(26.805% .02 277.508);--color-base-300:oklch(24.787% .019 277.508);--color-base-content:oklch(97.747% .007 106.545);--color-primary:oklch(75.461% .183 346.812);--color-primary-content:oklch(15.092% .036 346.812);--color-secondary:oklch(74.202% .148 301.883);--color-secondary-content:oklch(14.84% .029 301.883);--color-accent:oklch(83.392% .124 66.558);--color-accent-content:oklch(16.678% .024 66.558);--color-neutral:oklch(39.445% .032 275.524);--color-neutral-content:oklch(87.889% .006 275.524);--color-info:oklch(88.263% .093 212.846);--color-info-content:oklch(17.652% .018 212.846);--color-success:oklch(87.099% .219 148.024);--color-success-content:oklch(17.419% .043 148.024);--color-warning:oklch(95.533% .134 112.757);--color-warning-content:oklch(19.106% .026 112.757);--color-error:oklch(68.22% .206 24.43);--color-error-content:oklch(13.644% .041 24.43);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cmyk]:checked),[data-theme=cmyk]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(90% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(71.772% .133 239.443);--color-primary-content:oklch(14.354% .026 239.443);--color-secondary:oklch(64.476% .202 359.339);--color-secondary-content:oklch(12.895% .04 359.339);--color-accent:oklch(94.228% .189 105.306);--color-accent-content:oklch(18.845% .037 105.306);--color-neutral:oklch(21.778% 0 0);--color-neutral-content:oklch(84.355% 0 0);--color-info:oklch(68.475% .094 217.284);--color-info-content:oklch(13.695% .018 217.284);--color-success:oklch(46.949% .162 321.406);--color-success-content:oklch(89.389% .032 321.406);--color-warning:oklch(71.236% .159 52.023);--color-warning-content:oklch(14.247% .031 52.023);--color-error:oklch(62.013% .208 28.717);--color-error-content:oklch(12.402% .041 28.717);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=autumn]:checked),[data-theme=autumn]{color-scheme:light;--color-base-100:oklch(95.814% 0 0);--color-base-200:oklch(89.107% 0 0);--color-base-300:oklch(82.4% 0 0);--color-base-content:oklch(19.162% 0 0);--color-primary:oklch(40.723% .161 17.53);--color-primary-content:oklch(88.144% .032 17.53);--color-secondary:oklch(61.676% .169 23.865);--color-secondary-content:oklch(12.335% .033 23.865);--color-accent:oklch(73.425% .094 60.729);--color-accent-content:oklch(14.685% .018 60.729);--color-neutral:oklch(54.367% .037 51.902);--color-neutral-content:oklch(90.873% .007 51.902);--color-info:oklch(69.224% .097 207.284);--color-info-content:oklch(13.844% .019 207.284);--color-success:oklch(60.995% .08 174.616);--color-success-content:oklch(12.199% .016 174.616);--color-warning:oklch(70.081% .164 56.844);--color-warning-content:oklch(14.016% .032 56.844);--color-error:oklch(53.07% .241 24.16);--color-error-content:oklch(90.614% .048 24.16);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=business]:checked),[data-theme=business]{color-scheme:dark;--color-base-100:oklch(24.353% 0 0);--color-base-200:oklch(22.648% 0 0);--color-base-300:oklch(20.944% 0 0);--color-base-content:oklch(84.87% 0 0);--color-primary:oklch(41.703% .099 251.473);--color-primary-content:oklch(88.34% .019 251.473);--color-secondary:oklch(64.092% .027 229.389);--color-secondary-content:oklch(12.818% .005 229.389);--color-accent:oklch(67.271% .167 35.791);--color-accent-content:oklch(13.454% .033 35.791);--color-neutral:oklch(27.441% .013 253.041);--color-neutral-content:oklch(85.488% .002 253.041);--color-info:oklch(62.616% .143 240.033);--color-info-content:oklch(12.523% .028 240.033);--color-success:oklch(70.226% .094 156.596);--color-success-content:oklch(14.045% .018 156.596);--color-warning:oklch(77.482% .115 81.519);--color-warning-content:oklch(15.496% .023 81.519);--color-error:oklch(51.61% .146 29.674);--color-error-content:oklch(90.322% .029 29.674);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=acid]:checked),[data-theme=acid]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(91% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(71.9% .357 330.759);--color-primary-content:oklch(14.38% .071 330.759);--color-secondary:oklch(73.37% .224 48.25);--color-secondary-content:oklch(14.674% .044 48.25);--color-accent:oklch(92.78% .264 122.962);--color-accent-content:oklch(18.556% .052 122.962);--color-neutral:oklch(21.31% .128 278.68);--color-neutral-content:oklch(84.262% .025 278.68);--color-info:oklch(60.72% .227 252.05);--color-info-content:oklch(12.144% .045 252.05);--color-success:oklch(85.72% .266 158.53);--color-success-content:oklch(17.144% .053 158.53);--color-warning:oklch(91.01% .212 100.5);--color-warning-content:oklch(18.202% .042 100.5);--color-error:oklch(64.84% .293 29.349);--color-error-content:oklch(12.968% .058 29.349);--radius-selector:1rem;--radius-field:1rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=lemonade]:checked),[data-theme=lemonade]{color-scheme:light;--color-base-100:oklch(98.71% .02 123.72);--color-base-200:oklch(91.8% .018 123.72);--color-base-300:oklch(84.89% .017 123.72);--color-base-content:oklch(19.742% .004 123.72);--color-primary:oklch(58.92% .199 134.6);--color-primary-content:oklch(11.784% .039 134.6);--color-secondary:oklch(77.75% .196 111.09);--color-secondary-content:oklch(15.55% .039 111.09);--color-accent:oklch(85.39% .201 100.73);--color-accent-content:oklch(17.078% .04 100.73);--color-neutral:oklch(30.98% .075 108.6);--color-neutral-content:oklch(86.196% .015 108.6);--color-info:oklch(86.19% .047 224.14);--color-info-content:oklch(17.238% .009 224.14);--color-success:oklch(86.19% .047 157.85);--color-success-content:oklch(17.238% .009 157.85);--color-warning:oklch(86.19% .047 102.15);--color-warning-content:oklch(17.238% .009 102.15);--color-error:oklch(86.19% .047 25.85);--color-error-content:oklch(17.238% .009 25.85);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=night]:checked),[data-theme=night]{color-scheme:dark;--color-base-100:oklch(20.768% .039 265.754);--color-base-200:oklch(19.314% .037 265.754);--color-base-300:oklch(17.86% .034 265.754);--color-base-content:oklch(84.153% .007 265.754);--color-primary:oklch(75.351% .138 232.661);--color-primary-content:oklch(15.07% .027 232.661);--color-secondary:oklch(68.011% .158 276.934);--color-secondary-content:oklch(13.602% .031 276.934);--color-accent:oklch(72.36% .176 350.048);--color-accent-content:oklch(14.472% .035 350.048);--color-neutral:oklch(27.949% .036 260.03);--color-neutral-content:oklch(85.589% .007 260.03);--color-info:oklch(68.455% .148 237.251);--color-info-content:oklch(0% 0 0);--color-success:oklch(78.452% .132 181.911);--color-success-content:oklch(15.69% .026 181.911);--color-warning:oklch(83.242% .139 82.95);--color-warning-content:oklch(16.648% .027 82.95);--color-error:oklch(71.785% .17 13.118);--color-error-content:oklch(14.357% .034 13.118);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=coffee]:checked),[data-theme=coffee]{color-scheme:dark;--color-base-100:oklch(24% .023 329.708);--color-base-200:oklch(21% .021 329.708);--color-base-300:oklch(16% .019 329.708);--color-base-content:oklch(72.354% .092 79.129);--color-primary:oklch(71.996% .123 62.756);--color-primary-content:oklch(14.399% .024 62.756);--color-secondary:oklch(34.465% .029 199.194);--color-secondary-content:oklch(86.893% .005 199.194);--color-accent:oklch(42.621% .074 224.389);--color-accent-content:oklch(88.524% .014 224.389);--color-neutral:oklch(16.51% .015 326.261);--color-neutral-content:oklch(83.302% .003 326.261);--color-info:oklch(79.49% .063 184.558);--color-info-content:oklch(15.898% .012 184.558);--color-success:oklch(74.722% .072 131.116);--color-success-content:oklch(14.944% .014 131.116);--color-warning:oklch(88.15% .14 87.722);--color-warning-content:oklch(17.63% .028 87.722);--color-error:oklch(77.318% .128 31.871);--color-error-content:oklch(15.463% .025 31.871);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=winter]:checked),[data-theme=winter]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97.466% .011 259.822);--color-base-300:oklch(93.268% .016 262.751);--color-base-content:oklch(41.886% .053 255.824);--color-primary:oklch(56.86% .255 257.57);--color-primary-content:oklch(91.372% .051 257.57);--color-secondary:oklch(42.551% .161 282.339);--color-secondary-content:oklch(88.51% .032 282.339);--color-accent:oklch(59.939% .191 335.171);--color-accent-content:oklch(11.988% .038 335.171);--color-neutral:oklch(19.616% .063 257.651);--color-neutral-content:oklch(83.923% .012 257.651);--color-info:oklch(88.127% .085 214.515);--color-info-content:oklch(17.625% .017 214.515);--color-success:oklch(80.494% .077 197.823);--color-success-content:oklch(16.098% .015 197.823);--color-warning:oklch(89.172% .045 71.47);--color-warning-content:oklch(17.834% .009 71.47);--color-error:oklch(73.092% .11 20.076);--color-error-content:oklch(14.618% .022 20.076);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dim]:checked),[data-theme=dim]{color-scheme:dark;--color-base-100:oklch(30.857% .023 264.149);--color-base-200:oklch(28.036% .019 264.182);--color-base-300:oklch(26.346% .018 262.177);--color-base-content:oklch(82.901% .031 222.959);--color-primary:oklch(86.133% .141 139.549);--color-primary-content:oklch(17.226% .028 139.549);--color-secondary:oklch(73.375% .165 35.353);--color-secondary-content:oklch(14.675% .033 35.353);--color-accent:oklch(74.229% .133 311.379);--color-accent-content:oklch(14.845% .026 311.379);--color-neutral:oklch(24.731% .02 264.094);--color-neutral-content:oklch(82.901% .031 222.959);--color-info:oklch(86.078% .142 206.182);--color-info-content:oklch(17.215% .028 206.182);--color-success:oklch(86.171% .142 166.534);--color-success-content:oklch(17.234% .028 166.534);--color-warning:oklch(86.163% .142 94.818);--color-warning-content:oklch(17.232% .028 94.818);--color-error:oklch(82.418% .099 33.756);--color-error-content:oklch(16.483% .019 33.756);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=nord]:checked),[data-theme=nord]{color-scheme:light;--color-base-100:oklch(95.127% .007 260.731);--color-base-200:oklch(93.299% .01 261.788);--color-base-300:oklch(89.925% .016 262.749);--color-base-content:oklch(32.437% .022 264.182);--color-primary:oklch(59.435% .077 254.027);--color-primary-content:oklch(11.887% .015 254.027);--color-secondary:oklch(69.651% .059 248.687);--color-secondary-content:oklch(13.93% .011 248.687);--color-accent:oklch(77.464% .062 217.469);--color-accent-content:oklch(15.492% .012 217.469);--color-neutral:oklch(45.229% .035 264.131);--color-neutral-content:oklch(89.925% .016 262.749);--color-info:oklch(69.207% .062 332.664);--color-info-content:oklch(13.841% .012 332.664);--color-success:oklch(76.827% .074 131.063);--color-success-content:oklch(15.365% .014 131.063);--color-warning:oklch(85.486% .089 84.093);--color-warning-content:oklch(17.097% .017 84.093);--color-error:oklch(60.61% .12 15.341);--color-error-content:oklch(12.122% .024 15.341);--radius-selector:1rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=sunset]:checked),[data-theme=sunset]{color-scheme:dark;--color-base-100:oklch(22% .019 237.69);--color-base-200:oklch(20% .019 237.69);--color-base-300:oklch(18% .019 237.69);--color-base-content:oklch(77.383% .043 245.096);--color-primary:oklch(74.703% .158 39.947);--color-primary-content:oklch(14.94% .031 39.947);--color-secondary:oklch(72.537% .177 2.72);--color-secondary-content:oklch(14.507% .035 2.72);--color-accent:oklch(71.294% .166 299.844);--color-accent-content:oklch(14.258% .033 299.844);--color-neutral:oklch(26% .019 237.69);--color-neutral-content:oklch(70% .019 237.69);--color-info:oklch(85.559% .085 206.015);--color-info-content:oklch(17.111% .017 206.015);--color-success:oklch(85.56% .085 144.778);--color-success-content:oklch(17.112% .017 144.778);--color-warning:oklch(85.569% .084 74.427);--color-warning-content:oklch(17.113% .016 74.427);--color-error:oklch(85.511% .078 16.886);--color-error-content:oklch(17.102% .015 16.886);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=caramellatte]:checked),[data-theme=caramellatte]{color-scheme:light;--color-base-100:oklch(98% .016 73.684);--color-base-200:oklch(95% .038 75.164);--color-base-300:oklch(90% .076 70.697);--color-base-content:oklch(40% .123 38.172);--color-primary:oklch(0% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(22.45% .075 37.85);--color-secondary-content:oklch(90% .076 70.697);--color-accent:oklch(46.44% .111 37.85);--color-accent-content:oklch(90% .076 70.697);--color-neutral:oklch(55% .195 38.402);--color-neutral-content:oklch(98% .016 73.684);--color-info:oklch(42% .199 265.638);--color-info-content:oklch(90% .076 70.697);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .076 70.697);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:1}#pulsekit-embed:has(input.theme-controller[value=abyss]:checked),[data-theme=abyss]{color-scheme:dark;--color-base-100:oklch(20% .08 209);--color-base-200:oklch(15% .08 209);--color-base-300:oklch(10% .08 209);--color-base-content:oklch(90% .076 70.697);--color-primary:oklch(92% .2653 125);--color-primary-content:oklch(50% .2653 125);--color-secondary:oklch(83.27% .0764 298.3);--color-secondary-content:oklch(43.27% .0764 298.3);--color-accent:oklch(43% 0 0);--color-accent-content:oklch(98% 0 0);--color-neutral:oklch(30% .08 209);--color-neutral-content:oklch(90% .076 70.697);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(79% .209 151.711);--color-success-content:oklch(26% .065 152.934);--color-warning:oklch(84.8% .1962 84.62);--color-warning-content:oklch(44.8% .1962 84.62);--color-error:oklch(65% .1985 24.22);--color-error-content:oklch(27% .1985 24.22);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=silk]:checked),[data-theme=silk]{color-scheme:light;--color-base-100:oklch(97% .0035 67.78);--color-base-200:oklch(95% .0081 61.42);--color-base-300:oklch(90% .0081 61.42);--color-base-content:oklch(40% .0081 61.42);--color-primary:oklch(23.27% .0249 284.3);--color-primary-content:oklch(94.22% .2505 117.44);--color-secondary:oklch(23.27% .0249 284.3);--color-secondary-content:oklch(73.92% .2135 50.94);--color-accent:oklch(23.27% .0249 284.3);--color-accent-content:oklch(88.92% .2061 189.9);--color-neutral:oklch(20% 0 0);--color-neutral-content:oklch(80% .0081 61.42);--color-info:oklch(80.39% .1148 241.68);--color-info-content:oklch(30.39% .1148 241.68);--color-success:oklch(83.92% .0901 136.87);--color-success-content:oklch(23.92% .0901 136.87);--color-warning:oklch(83.92% .1085 80);--color-warning-content:oklch(43.92% .1085 80);--color-error:oklch(75.1% .1814 22.37);--color-error-content:oklch(35.1% .1814 22.37);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}.chat{--mask-chat:url("data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e")}}@layer components;@layer utilities{.diff{webkit-user-select:none;-webkit-user-select:none;user-select:none;direction:ltr;grid-template-columns:auto 1fr;width:100%;display:grid;position:relative;overflow:hidden;container-type:inline-size}.diff:focus-visible,.diff:has(.diff-item-1:focus-visible){outline-style:var(--tw-outline-style);outline-offset:1px;outline-width:2px;outline-color:var(--color-base-content)}.diff:focus-visible .diff-resizer{min-width:90cqi;max-width:90cqi}.diff:has(.diff-item-2:focus-visible){outline-style:var(--tw-outline-style);outline-offset:1px;outline-width:2px}.diff:has(.diff-item-2:focus-visible) .diff-resizer{min-width:10cqi;max-width:10cqi}@supports (-webkit-overflow-scrolling:touch) and (overflow:-webkit-paged-x){.diff:focus .diff-resizer{min-width:10cqi;max-width:10cqi}.diff:has(.diff-item-1:focus) .diff-resizer{min-width:90cqi;max-width:90cqi}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:calc(var(--size-field,.25rem)*10);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:100%;display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.validator-hint{visibility:hidden;margin-top:.5rem;font-size:.75rem}.validator:user-valid{--input-color:var(--color-success)}.validator:user-valid:focus{--input-color:var(--color-success)}.validator:user-valid:checked{--input-color:var(--color-success)}.validator:user-valid[aria-checked=true]{--input-color:var(--color-success)}.validator:user-valid:focus-within{--input-color:var(--color-success)}.validator:has(:user-valid){--input-color:var(--color-success)}.validator:has(:user-valid):focus{--input-color:var(--color-success)}.validator:has(:user-valid):checked{--input-color:var(--color-success)}.validator:has(:user-valid)[aria-checked=true]{--input-color:var(--color-success)}.validator:has(:user-valid):focus-within{--input-color:var(--color-success)}.validator:user-invalid{--input-color:var(--color-error)}.validator:user-invalid:focus{--input-color:var(--color-error)}.validator:user-invalid:checked{--input-color:var(--color-error)}.validator:user-invalid[aria-checked=true]{--input-color:var(--color-error)}.validator:user-invalid:focus-within{--input-color:var(--color-error)}.validator:user-invalid~.validator-hint{visibility:visible;color:var(--color-error);display:block}.validator:has(:user-invalid){--input-color:var(--color-error)}.validator:has(:user-invalid):focus{--input-color:var(--color-error)}.validator:has(:user-invalid):checked{--input-color:var(--color-error)}.validator:has(:user-invalid)[aria-checked=true]{--input-color:var(--color-error)}.validator:has(:user-invalid):focus-within{--input-color:var(--color-error)}.validator:has(:user-invalid)~.validator-hint{visibility:visible;color:var(--color-error);display:block}.validator[aria-invalid],.validator[aria-invalid]:focus,.validator[aria-invalid]:checked,.validator[aria-invalid][aria-checked=true],.validator[aria-invalid]:focus-within{--input-color:var(--color-error)}.validator[aria-invalid]~.validator-hint{visibility:visible;color:var(--color-error);display:block}.list{flex-direction:column;font-size:.875rem;display:flex}.list :where(.list-row){--list-grid-cols:minmax(0,auto)1fr;border-radius:var(--radius-box);word-break:break-word;grid-auto-flow:column;grid-template-columns:var(--list-grid-cols);gap:1rem;padding:1rem;display:grid;position:relative}.list :where(.list-row):has(.list-col-grow:first-child){--list-grid-cols:1fr}.list :where(.list-row):has(.list-col-grow:nth-child(2)){--list-grid-cols:minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(3)){--list-grid-cols:minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(4)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(5)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(6)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row) :not(.list-col-wrap){grid-row-start:1}:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{content:"";border-bottom:var(--border)solid;inset-inline:var(--radius-box);border-color:var(--color-base-content);position:absolute;bottom:0}@supports (color:color-mix(in lab,red,red)){:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{border-color:color-mix(in oklab,var(--color-base-content)5%,transparent)}}.toast{translate:var(--toast-x,0)var(--toast-y,0);inset-inline:auto 1rem;background-color:#0000;flex-direction:column;gap:.5rem;width:max-content;max-width:calc(100vw - 2rem);display:flex;position:fixed;top:auto;bottom:1rem}.toast>*{animation:.25s ease-out toast}.toast:where(.toast-start){--toast-x:0;inset-inline:1rem auto}.toast:where(.toast-center){--toast-x:-50%;inset-inline:50%}.toast:where(.toast-end){--toast-x:0;inset-inline:auto 1rem}.toast:where(.toast-bottom){--toast-y:0;top:auto;bottom:1rem}.toast:where(.toast-middle){--toast-y:-50%;top:50%;bottom:auto}.toast:where(.toast-top){--toast-y:0;top:1rem;bottom:auto}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.diff-resizer{z-index:1;resize:horizontal;opacity:0;cursor:ew-resize;transform-origin:100% 100%;clip-path:inset(calc(100% - .75rem) 0 0 calc(100% - .75rem));grid-row-start:1;grid-column-start:1;width:50cqi;min-width:1rem;max-width:calc(100cqi - 1rem);height:.5rem;transition:min-width .3s ease-out,max-width .3s ease-out;position:relative;top:50%;overflow:hidden;transform:scaleY(3)translate(.35rem,.08rem)}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.card{border-radius:var(--radius-box);outline-offset:2px;outline:0 solid #0000;flex-direction:column;transition:outline .2s ease-in-out;display:flex;position:relative}.card:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.card:focus{outline-offset:2px;outline:2px solid #0000}}.card:focus-visible{outline-color:currentColor}.card :where(figure:first-child){border-start-start-radius:inherit;border-start-end-radius:inherit;border-end-end-radius:unset;border-end-start-radius:unset;overflow:hidden}.card :where(figure:last-child){border-start-start-radius:unset;border-start-end-radius:unset;border-end-end-radius:inherit;border-end-start-radius:inherit;overflow:hidden}.card:where(.card-border){border:var(--border)solid var(--color-base-200)}.card:where(.card-dash){border:var(--border)dashed var(--color-base-200)}.card.image-full{display:grid}.card.image-full>*{grid-row-start:1;grid-column-start:1}.card.image-full>.card-body{color:var(--color-neutral-content);position:relative}.card.image-full :where(figure){border-radius:inherit;overflow:hidden}.card.image-full>figure img{object-fit:cover;filter:brightness(28%);height:100%}.card figure{justify-content:center;align-items:center;display:flex}.card:has(>input:is(input[type=checkbox],input[type=radio])){cursor:pointer;-webkit-user-select:none;user-select:none}.card:has(>:checked){outline:2px solid}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.rating{vertical-align:middle;display:inline-flex;position:relative}.rating input{appearance:none;border:none}.rating :where(*){background-color:var(--color-base-content);opacity:.2;border-radius:0;width:1.5rem;height:1.5rem;animation:.25s ease-out rating}.rating :where(*):is(input){cursor:pointer}.rating .rating-hidden{background-color:#0000;width:.5rem}.rating input[type=radio]:checked{background-image:none}.rating :checked,.rating [aria-checked=true],.rating [aria-current=true],.rating :has(~:checked,~[aria-checked=true],~[aria-current=true]){opacity:1}.rating :focus-visible{transition:scale .2s ease-out;scale:1.1}.rating :active:focus{animation:none;scale:1.1}.rating.rating-xs :where(:not(.rating-hidden)){width:1rem;height:1rem}.rating.rating-sm :where(:not(.rating-hidden)){width:1.25rem;height:1.25rem}.rating.rating-md :where(:not(.rating-hidden)){width:1.5rem;height:1.5rem}.rating.rating-lg :where(:not(.rating-hidden)){width:1.75rem;height:1.75rem}.rating.rating-xl :where(:not(.rating-hidden)){width:2rem;height:2rem}.progress{appearance:none;border-radius:var(--radius-box);background-color:currentColor;width:100%;height:.5rem;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.progress{background-color:color-mix(in oklab,currentColor 20%,transparent)}}.progress{color:var(--color-base-content)}.progress:indeterminate{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}@supports ((-moz-appearance:none)){.progress:indeterminate::-moz-progress-bar{background-color:#0000;background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}.progress::-moz-progress-bar{border-radius:var(--radius-box);background-color:currentColor}}@supports ((-webkit-appearance:none)){.progress::-webkit-progress-bar{border-radius:var(--radius-box);background-color:#0000}.progress::-webkit-progress-value{border-radius:var(--radius-box);background-color:currentColor}}.absolute{position:absolute}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.textarea{border:var(--border)solid #0000;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;border-color:var(--input-color);width:clamp(3rem,20rem,100%);min-height:5rem;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem;font-size:.875rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.tab-content{order:var(--tabcontent-order);--tabcontent-radius-ss:0;--tabcontent-radius-se:0;--tabcontent-radius-es:0;--tabcontent-radius-ee:0;--tabcontent-order:1;width:100%;margin:var(--tabcontent-margin);border-color:#0000;border-width:var(--border);border-start-start-radius:var(--tabcontent-radius-ss);border-start-end-radius:var(--tabcontent-radius-se);border-end-end-radius:var(--tabcontent-radius-ee);border-end-start-radius:var(--tabcontent-radius-es);display:none}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.mx-auto{margin-inline:auto}.input-sm{--size:calc(var(--size-field,.25rem)*8);font-size:.75rem}.input-sm[type=number]::-webkit-inner-spin-button{margin-block:-.5rem;margin-inline-end:-.75rem}.fieldset-legend{color:var(--color-base-content);justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:-.25rem;padding-block:.5rem;font-weight:600;display:flex}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:#0000004d}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.card-body{padding:var(--card-p,1.5rem);font-size:var(--card-fs,.875rem);flex-direction:column;flex:auto;gap:.5rem;display:flex}.card-body :where(p){flex-grow:1}.fieldset{grid-template-columns:1fr;grid-auto-rows:max-content;gap:.375rem;padding-block:.25rem;font-size:.75rem;display:grid}.card-actions{flex-wrap:wrap;align-items:flex-start;gap:.5rem;display:flex}.card-title{font-size:var(--cardtitle-fs,1.125rem);align-items:center;gap:.5rem;font-weight:600;display:flex}.chat{column-gap:.75rem;padding-block:.25rem;display:grid}:root .prose{--tw-prose-body:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-body:color-mix(in oklab,var(--color-base-content)80%,#0000)}}:root .prose{--tw-prose-headings:var(--color-base-content);--tw-prose-lead:var(--color-base-content);--tw-prose-links:var(--color-base-content);--tw-prose-bold:var(--color-base-content);--tw-prose-counters:var(--color-base-content);--tw-prose-bullets:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-bullets:color-mix(in oklab,var(--color-base-content)50%,#0000)}}:root .prose{--tw-prose-hr:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-hr:color-mix(in oklab,var(--color-base-content)20%,#0000)}}:root .prose{--tw-prose-quotes:var(--color-base-content);--tw-prose-quote-borders:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-quote-borders:color-mix(in oklab,var(--color-base-content)20%,#0000)}}:root .prose{--tw-prose-captions:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-captions:color-mix(in oklab,var(--color-base-content)50%,#0000)}}:root .prose{--tw-prose-code:var(--color-base-content);--tw-prose-pre-code:var(--color-neutral-content);--tw-prose-pre-bg:var(--color-neutral);--tw-prose-th-borders:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-th-borders:color-mix(in oklab,var(--color-base-content)50%,#0000)}}:root .prose{--tw-prose-td-borders:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-td-borders:color-mix(in oklab,var(--color-base-content)20%,#0000)}}:root .prose{--tw-prose-kbd:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:root .prose{--tw-prose-kbd:color-mix(in oklab,var(--color-base-content)80%,#0000)}}:root .prose :where(code):not(pre>code){background-color:var(--color-base-200);border-radius:var(--radius-selector);border:var(--border)solid var(--color-base-300);font-weight:inherit;padding-inline:.5em}:root .prose :where(code):not(pre>code):before,:root .prose :where(code):not(pre>code):after{display:none}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-block{display:inline-block}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.h-6{height:calc(var(--spacing)*6)}.h-screen{height:100vh}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.w-6{width:calc(var(--spacing)*6)}.w-full{width:100%}.w-screen{width:100vw}.max-w-3xl{max-width:var(--container-3xl)}.max-w-md{max-width:var(--container-md)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.skeleton{border-radius:var(--radius-box);background-color:var(--color-base-300)}@media (prefers-reduced-motion:reduce){.skeleton{transition-duration:15s}}.skeleton{will-change:background-position;background-image:linear-gradient(105deg,#0000 0% 40%,var(--color-base-100)50%,#0000 60% 100%);background-position-x:-50%;background-repeat:no-repeat;background-size:200%;animation:1.8s ease-in-out infinite skeleton}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.flex-col{flex-direction:column}.items-center{align-items:center}.items-end{align-items:flex-end}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.self-center{align-self:center}.self-end{align-self:flex-end}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-base-300{border-color:var(--color-base-300)}.bg-base-100,.bg-base-100\\/80{background-color:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){.bg-base-100\\/80{background-color:color-mix(in oklab,var(--color-base-100)80%,transparent)}}.bg-base-200,.bg-base-200\\/80{background-color:var(--color-base-200)}@supports (color:color-mix(in lab,red,red)){.bg-base-200\\/80{background-color:color-mix(in oklab,var(--color-base-200)80%,transparent)}}.bg-base-300{background-color:var(--color-base-300)}.bg-error,.bg-error\\/10{background-color:var(--color-error)}@supports (color:color-mix(in lab,red,red)){.bg-error\\/10{background-color:color-mix(in oklab,var(--color-error)10%,transparent)}}.bg-sky-100{background-color:var(--color-sky-100)}.bg-transparent{background-color:#0000}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.py-2{padding-block:calc(var(--spacing)*2)}.py-8{padding-block:calc(var(--spacing)*8)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.textarea-sm{font-size:.75rem}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-base-content,.text-base-content\\/50{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/50{color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.text-base-content\\/70{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/70{color:color-mix(in oklab,var(--color-base-content)70%,transparent)}}.text-error{color:var(--color-error)}.text-gray-800{color:var(--color-gray-800)}.text-primary,.text-primary\\/50{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/50{color:color-mix(in oklab,var(--color-primary)50%,transparent)}}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}}@keyframes dropdown{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}`, xf = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, _f = /* @__PURE__ */ xf(yf, [["styles", [wf]]]), oc = /* @__PURE__ */ nd(_f);
customElements.define("pulse-feedback", oc);
window.PulseKit = {
  // Components
  Board: oc
};
