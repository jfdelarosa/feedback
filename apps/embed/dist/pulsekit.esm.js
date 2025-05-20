var cn = {}, Gn = {};
/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const U = Gn.NODE_ENV !== "production" ? Object.freeze({}) : {}, Vt = Gn.NODE_ENV !== "production" ? Object.freeze([]) : [], re = () => {
}, bs = () => !1, to = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), No = (e) => e.startsWith("onUpdate:"), Q = Object.assign, Mr = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, gs = Object.prototype.hasOwnProperty, H = (e, t) => gs.call(e, t), S = Array.isArray, mt = (e) => Fo(e) === "[object Map]", Qn = (e) => Fo(e) === "[object Set]", P = (e) => typeof e == "function", G = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", Pr = (e) => (J(e) || P(e)) && P(e.then) && P(e.catch), Zn = Object.prototype.toString, Fo = (e) => Zn.call(e), Ar = (e) => Fo(e).slice(8, -1), zo = (e) => Fo(e) === "[object Object]", $r = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ks = /* @__PURE__ */ Qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, ys = /-(\w)/g, ke = Ho(
  (e) => e.replace(ys, (t, o) => o ? o.toUpperCase() : "")
), vs = /\B([A-Z])/g, we = Ho(
  (e) => e.replace(vs, "-$1").toLowerCase()
), Lo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), ht = Ho(
  (e) => e ? `on${Lo(e)}` : ""
), ct = (e, t) => !Object.is(e, t), Nt = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Oo = (e, t, o, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: o
  });
}, pr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ln = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let an;
const oo = () => an || (an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof cn < "u" ? cn : {});
function Ir(e) {
  if (S(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o], n = G(r) ? Es(r) : Ir(r);
      if (n)
        for (const i in n)
          t[i] = n[i];
    }
    return t;
  } else if (G(e) || J(e))
    return e;
}
const _s = /;(?![^(]*\))/g, ws = /:([^]+)/, xs = /\/\*[^]*?\*\//g;
function Es(e) {
  const t = {};
  return e.replace(xs, "").split(_s).forEach((o) => {
    if (o) {
      const r = o.split(ws);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Mt(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (S(e))
    for (let o = 0; o < e.length; o++) {
      const r = Mt(e[o]);
      r && (t += r + " ");
    }
  else if (J(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Ns = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Os = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ds = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Cs = /* @__PURE__ */ Qe(Ns), Vs = /* @__PURE__ */ Qe(Os), Ss = /* @__PURE__ */ Qe(Ds), Ts = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ms = /* @__PURE__ */ Qe(Ts);
function ei(e) {
  return !!e || e === "";
}
const ti = (e) => !!(e && e.__v_isRef === !0), Fe = (e) => G(e) ? e : e == null ? "" : S(e) || J(e) && (e.toString === Zn || !P(e.toString)) ? ti(e) ? Fe(e.value) : JSON.stringify(e, oi, 2) : String(e), oi = (e, t) => ti(t) ? oi(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [r, n], i) => (o[or(r, i) + " =>"] = n, o),
    {}
  )
} : Qn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => or(o))
} : ut(t) ? or(t) : J(t) && !S(t) && !zo(t) ? String(t) : t, or = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
var X = {};
function Be(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ge;
class Ps {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
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
      const o = ge;
      try {
        return ge = this, t();
      } finally {
        ge = o;
      }
    } else X.NODE_ENV !== "production" && Be("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ge, ge = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ge = this.prevScope, this.prevScope = void 0);
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
function As() {
  return ge;
}
let W;
const rr = /* @__PURE__ */ new WeakSet();
class ri {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rr.has(this) && (rr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ii(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, un(this), si(this);
    const t = W, o = Se;
    W = this, Se = !0;
    try {
      return this.fn();
    } finally {
      X.NODE_ENV !== "production" && W !== this && Be(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ci(this), W = t, Se = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fr(t);
      this.deps = this.depsTail = void 0, un(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? rr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    mr(this) && this.run();
  }
  get dirty() {
    return mr(this);
  }
}
let ni = 0, Kt, qt;
function ii(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = qt, qt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function Rr() {
  ni++;
}
function jr() {
  if (--ni > 0)
    return;
  if (qt) {
    let t = qt;
    for (qt = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
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
function si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ci(e) {
  let t, o = e.depsTail, r = o;
  for (; r; ) {
    const n = r.prevDep;
    r.version === -1 ? (r === o && (o = n), Fr(r), $s(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = n;
  }
  e.deps = t, e.depsTail = o;
}
function mr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (li(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function li(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xt) || (e.globalVersion = Xt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !mr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = W, r = Se;
  W = e, Se = !0;
  try {
    si(e);
    const n = e.fn(e._value);
    (t.version === 0 || ct(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    W = o, Se = r, ci(e), e.flags &= -3;
  }
}
function Fr(e, t = !1) {
  const { dep: o, prevSub: r, nextSub: n } = e;
  if (r && (r.nextSub = n, e.prevSub = void 0), n && (n.prevSub = r, e.nextSub = void 0), X.NODE_ENV !== "production" && o.subsHead === e && (o.subsHead = n), o.subs === e && (o.subs = r, !r && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Fr(i, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function $s(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let Se = !0;
const ai = [];
function Te() {
  ai.push(Se), Se = !1;
}
function Me() {
  const e = ai.pop();
  Se = e === void 0 ? !0 : e;
}
function un(e) {
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
let Xt = 0;
class Is {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zr {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, X.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!W || !Se || W === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== W)
      o = this.activeLink = new Is(W, this), W.deps ? (o.prevDep = W.depsTail, W.depsTail.nextDep = o, W.depsTail = o) : W.deps = W.depsTail = o, ui(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const r = o.nextDep;
      r.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = r), o.prevDep = W.depsTail, o.nextDep = void 0, W.depsTail.nextDep = o, W.depsTail = o, W.deps === o && (W.deps = r);
    }
    return X.NODE_ENV !== "production" && W.onTrack && W.onTrack(
      Q(
        {
          effect: W
        },
        t
      )
    ), o;
  }
  trigger(t) {
    this.version++, Xt++, this.notify(t);
  }
  notify(t) {
    Rr();
    try {
      if (X.NODE_ENV !== "production")
        for (let o = this.subsHead; o; o = o.nextSub)
          o.sub.onTrigger && !(o.sub.flags & 8) && o.sub.onTrigger(
            Q(
              {
                effect: o.sub
              },
              t
            )
          );
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      jr();
    }
  }
}
function ui(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        ui(r);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), X.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const br = /* @__PURE__ */ new WeakMap(), bt = Symbol(
  X.NODE_ENV !== "production" ? "Object iterate" : ""
), gr = Symbol(
  X.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Gt = Symbol(
  X.NODE_ENV !== "production" ? "Array iterate" : ""
);
function oe(e, t, o) {
  if (Se && W) {
    let r = br.get(e);
    r || br.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(o);
    n || (r.set(o, n = new zr()), n.map = r, n.key = o), X.NODE_ENV !== "production" ? n.track({
      target: e,
      type: t,
      key: o
    }) : n.track();
  }
}
function ze(e, t, o, r, n, i) {
  const s = br.get(e);
  if (!s) {
    Xt++;
    return;
  }
  const c = (l) => {
    l && (X.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: o,
      newValue: r,
      oldValue: n,
      oldTarget: i
    }) : l.trigger());
  };
  if (Rr(), t === "clear")
    s.forEach(c);
  else {
    const l = S(e), p = l && $r(o);
    if (l && o === "length") {
      const f = Number(r);
      s.forEach((d, b) => {
        (b === "length" || b === Gt || !ut(b) && b >= f) && c(d);
      });
    } else
      switch ((o !== void 0 || s.has(void 0)) && c(s.get(o)), p && c(s.get(Gt)), t) {
        case "add":
          l ? p && c(s.get("length")) : (c(s.get(bt)), mt(e) && c(s.get(gr)));
          break;
        case "delete":
          l || (c(s.get(bt)), mt(e) && c(s.get(gr)));
          break;
        case "set":
          mt(e) && c(s.get(bt));
          break;
      }
  }
  jr();
}
function wt(e) {
  const t = R(e);
  return t === e ? t : (oe(t, "iterate", Gt), he(e) ? t : t.map(se));
}
function Wo(e) {
  return oe(e = R(e), "iterate", Gt), e;
}
const Rs = {
  __proto__: null,
  [Symbol.iterator]() {
    return nr(this, Symbol.iterator, se);
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((t) => S(t) ? wt(t) : t)
    );
  },
  entries() {
    return nr(this, "entries", (e) => (e[1] = se(e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(this, "filter", e, t, (o) => o.map(se), arguments);
  },
  find(e, t) {
    return Ye(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ir(this, "includes", e);
  },
  indexOf(...e) {
    return ir(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ir(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jt(this, "pop");
  },
  push(...e) {
    return jt(this, "push", e);
  },
  reduce(e, ...t) {
    return dn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dn(this, "reduceRight", e, t);
  },
  shift() {
    return jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jt(this, "splice", e);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return jt(this, "unshift", e);
  },
  values() {
    return nr(this, "values", se);
  }
};
function nr(e, t, o) {
  const r = Wo(e), n = r[t]();
  return r !== e && !he(e) && (n._next = n.next, n.next = () => {
    const i = n._next();
    return i.value && (i.value = o(i.value)), i;
  }), n;
}
const js = Array.prototype;
function Ye(e, t, o, r, n, i) {
  const s = Wo(e), c = s !== e && !he(e), l = s[t];
  if (l !== js[t]) {
    const d = l.apply(e, i);
    return c ? se(d) : d;
  }
  let p = o;
  s !== e && (c ? p = function(d, b) {
    return o.call(this, se(d), b, e);
  } : o.length > 2 && (p = function(d, b) {
    return o.call(this, d, b, e);
  }));
  const f = l.call(s, p, r);
  return c && n ? n(f) : f;
}
function dn(e, t, o, r) {
  const n = Wo(e);
  let i = o;
  return n !== e && (he(e) ? o.length > 3 && (i = function(s, c, l) {
    return o.call(this, s, c, l, e);
  }) : i = function(s, c, l) {
    return o.call(this, s, se(c), l, e);
  }), n[t](i, ...r);
}
function ir(e, t, o) {
  const r = R(e);
  oe(r, "iterate", Gt);
  const n = r[t](...o);
  return (n === -1 || n === !1) && Do(o[0]) ? (o[0] = R(o[0]), r[t](...o)) : n;
}
function jt(e, t, o = []) {
  Te(), Rr();
  const r = R(e)[t].apply(e, o);
  return jr(), Me(), r;
}
const Fs = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), di = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function zs(e) {
  ut(e) || (e = String(e));
  const t = R(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
class fi {
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
      return r === (n ? i ? ki : gi : i ? bi : mi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = S(t);
    if (!n) {
      let l;
      if (s && (l = Rs[o]))
        return l;
      if (o === "hasOwnProperty")
        return zs;
    }
    const c = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ee(t) ? t : r
    );
    return (ut(o) ? di.has(o) : Fs(o)) || (n || oe(t, "get", o), i) ? c : ee(c) ? s && $r(o) ? c : c.value : J(c) ? n ? yi(c) : Hr(c) : c;
  }
}
class hi extends fi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, r, n) {
    let i = t[o];
    if (!this._isShallow) {
      const l = Ke(i);
      if (!he(r) && !Ke(r) && (i = R(i), r = R(r)), !S(t) && ee(i) && !ee(r))
        return l ? !1 : (i.value = r, !0);
    }
    const s = S(t) && $r(o) ? Number(o) < t.length : H(t, o), c = Reflect.set(
      t,
      o,
      r,
      ee(t) ? t : n
    );
    return t === R(n) && (s ? ct(r, i) && ze(t, "set", o, r, i) : ze(t, "add", o, r)), c;
  }
  deleteProperty(t, o) {
    const r = H(t, o), n = t[o], i = Reflect.deleteProperty(t, o);
    return i && r && ze(t, "delete", o, void 0, n), i;
  }
  has(t, o) {
    const r = Reflect.has(t, o);
    return (!ut(o) || !di.has(o)) && oe(t, "has", o), r;
  }
  ownKeys(t) {
    return oe(
      t,
      "iterate",
      S(t) ? "length" : bt
    ), Reflect.ownKeys(t);
  }
}
class pi extends fi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return X.NODE_ENV !== "production" && Be(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, o) {
    return X.NODE_ENV !== "production" && Be(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Hs = /* @__PURE__ */ new hi(), Ls = /* @__PURE__ */ new pi(), Ws = /* @__PURE__ */ new hi(!0), Us = /* @__PURE__ */ new pi(!0), kr = (e) => e, uo = (e) => Reflect.getPrototypeOf(e);
function Bs(e, t, o) {
  return function(...r) {
    const n = this.__v_raw, i = R(n), s = mt(i), c = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, p = n[e](...r), f = o ? kr : t ? Co : se;
    return !t && oe(
      i,
      "iterate",
      l ? gr : bt
    ), {
      // iterator protocol
      next() {
        const { value: d, done: b } = p.next();
        return b ? { value: d, done: b } : {
          value: c ? [f(d[0]), f(d[1])] : f(d),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function fo(e) {
  return function(...t) {
    if (X.NODE_ENV !== "production") {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      Be(
        `${Lo(e)} operation ${o}failed: target is readonly.`,
        R(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ks(e, t) {
  const o = {
    get(n) {
      const i = this.__v_raw, s = R(i), c = R(n);
      e || (ct(n, c) && oe(s, "get", n), oe(s, "get", c));
      const { has: l } = uo(s), p = t ? kr : e ? Co : se;
      if (l.call(s, n))
        return p(i.get(n));
      if (l.call(s, c))
        return p(i.get(c));
      i !== s && i.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && oe(R(n), "iterate", bt), Reflect.get(n, "size", n);
    },
    has(n) {
      const i = this.__v_raw, s = R(i), c = R(n);
      return e || (ct(n, c) && oe(s, "has", n), oe(s, "has", c)), n === c ? i.has(n) : i.has(n) || i.has(c);
    },
    forEach(n, i) {
      const s = this, c = s.__v_raw, l = R(c), p = t ? kr : e ? Co : se;
      return !e && oe(l, "iterate", bt), c.forEach((f, d) => n.call(i, p(f), p(d), s));
    }
  };
  return Q(
    o,
    e ? {
      add: fo("add"),
      set: fo("set"),
      delete: fo("delete"),
      clear: fo("clear")
    } : {
      add(n) {
        !t && !he(n) && !Ke(n) && (n = R(n));
        const i = R(this);
        return uo(i).has.call(i, n) || (i.add(n), ze(i, "add", n, n)), this;
      },
      set(n, i) {
        !t && !he(i) && !Ke(i) && (i = R(i));
        const s = R(this), { has: c, get: l } = uo(s);
        let p = c.call(s, n);
        p ? X.NODE_ENV !== "production" && fn(s, c, n) : (n = R(n), p = c.call(s, n));
        const f = l.call(s, n);
        return s.set(n, i), p ? ct(i, f) && ze(s, "set", n, i, f) : ze(s, "add", n, i), this;
      },
      delete(n) {
        const i = R(this), { has: s, get: c } = uo(i);
        let l = s.call(i, n);
        l ? X.NODE_ENV !== "production" && fn(i, s, n) : (n = R(n), l = s.call(i, n));
        const p = c ? c.call(i, n) : void 0, f = i.delete(n);
        return l && ze(i, "delete", n, void 0, p), f;
      },
      clear() {
        const n = R(this), i = n.size !== 0, s = X.NODE_ENV !== "production" ? mt(n) ? new Map(n) : new Set(n) : void 0, c = n.clear();
        return i && ze(
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
    o[n] = Bs(n, e, t);
  }), o;
}
function Uo(e, t) {
  const o = Ks(e, t);
  return (r, n, i) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    H(o, n) && n in r ? o : r,
    n,
    i
  );
}
const qs = {
  get: /* @__PURE__ */ Uo(!1, !1)
}, Js = {
  get: /* @__PURE__ */ Uo(!1, !0)
}, Ys = {
  get: /* @__PURE__ */ Uo(!0, !1)
}, Xs = {
  get: /* @__PURE__ */ Uo(!0, !0)
};
function fn(e, t, o) {
  const r = R(o);
  if (r !== o && t.call(e, r)) {
    const n = Ar(e);
    Be(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const mi = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap();
function Gs(e) {
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
function Qs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gs(Ar(e));
}
function Hr(e) {
  return Ke(e) ? e : Bo(
    e,
    !1,
    Hs,
    qs,
    mi
  );
}
function Zs(e) {
  return Bo(
    e,
    !1,
    Ws,
    Js,
    bi
  );
}
function yi(e) {
  return Bo(
    e,
    !0,
    Ls,
    Ys,
    gi
  );
}
function Le(e) {
  return Bo(
    e,
    !0,
    Us,
    Xs,
    ki
  );
}
function Bo(e, t, o, r, n) {
  if (!J(e))
    return X.NODE_ENV !== "production" && Be(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Qs(e);
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
function gt(e) {
  return Ke(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
function he(e) {
  return !!(e && e.__v_isShallow);
}
function Do(e) {
  return e ? !!e.__v_raw : !1;
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function ec(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Oo(e, "__v_skip", !0), e;
}
const se = (e) => J(e) ? Hr(e) : e, Co = (e) => J(e) ? yi(e) : e;
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function rt(e) {
  return tc(e, !1);
}
function tc(e, t) {
  return ee(e) ? e : new oc(e, t);
}
class oc {
  constructor(t, o) {
    this.dep = new zr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : R(t), this._value = o ? t : se(t), this.__v_isShallow = o;
  }
  get value() {
    return X.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, r = this.__v_isShallow || he(t) || Ke(t);
    t = r ? t : R(t), ct(t, o) && (this._rawValue = t, this._value = r ? t : se(t), X.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: o
    }) : this.dep.trigger());
  }
}
function vi(e) {
  return ee(e) ? e.value : e;
}
const rc = {
  get: (e, t, o) => t === "__v_raw" ? e : vi(Reflect.get(e, t, o)),
  set: (e, t, o, r) => {
    const n = e[t];
    return ee(n) && !ee(o) ? (n.value = o, !0) : Reflect.set(e, t, o, r);
  }
};
function _i(e) {
  return gt(e) ? e : new Proxy(e, rc);
}
class nc {
  constructor(t, o, r) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new zr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    W !== this)
      return ii(this, !0), !0;
  }
  get value() {
    const t = X.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return li(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : X.NODE_ENV !== "production" && Be("Write operation failed: computed value is readonly");
  }
}
function ic(e, t, o = !1) {
  let r, n;
  return P(e) ? r = e : (r = e.get, n = e.set), new nc(r, n, o);
}
const ho = {}, Vo = /* @__PURE__ */ new WeakMap();
let pt;
function sc(e, t = !1, o = pt) {
  if (o) {
    let r = Vo.get(o);
    r || Vo.set(o, r = []), r.push(e);
  } else X.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function cc(e, t, o = U) {
  const { immediate: r, deep: n, once: i, scheduler: s, augmentJob: c, call: l } = o, p = (M) => {
    (o.onWarn || Be)(
      "Invalid watch source: ",
      M,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (M) => n ? M : he(M) || n === !1 || n === 0 ? Ge(M, 1) : Ge(M);
  let d, b, _, D, C = !1, I = !1;
  if (ee(e) ? (b = () => e.value, C = he(e)) : gt(e) ? (b = () => f(e), C = !0) : S(e) ? (I = !0, C = e.some((M) => gt(M) || he(M)), b = () => e.map((M) => {
    if (ee(M))
      return M.value;
    if (gt(M))
      return f(M);
    if (P(M))
      return l ? l(M, 2) : M();
    X.NODE_ENV !== "production" && p(M);
  })) : P(e) ? t ? b = l ? () => l(e, 2) : e : b = () => {
    if (_) {
      Te();
      try {
        _();
      } finally {
        Me();
      }
    }
    const M = pt;
    pt = d;
    try {
      return l ? l(e, 3, [D]) : e(D);
    } finally {
      pt = M;
    }
  } : (b = re, X.NODE_ENV !== "production" && p(e)), t && n) {
    const M = b, ne = n === !0 ? 1 / 0 : n;
    b = () => Ge(M(), ne);
  }
  const A = As(), q = () => {
    d.stop(), A && A.active && Mr(A.effects, d);
  };
  if (i && t) {
    const M = t;
    t = (...ne) => {
      M(...ne), q();
    };
  }
  let L = I ? new Array(e.length).fill(ho) : ho;
  const ye = (M) => {
    if (!(!(d.flags & 1) || !d.dirty && !M))
      if (t) {
        const ne = d.run();
        if (n || C || (I ? ne.some((Ne, ce) => ct(Ne, L[ce])) : ct(ne, L))) {
          _ && _();
          const Ne = pt;
          pt = d;
          try {
            const ce = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              L === ho ? void 0 : I && L[0] === ho ? [] : L,
              D
            ];
            l ? l(t, 3, ce) : (
              // @ts-expect-error
              t(...ce)
            ), L = ne;
          } finally {
            pt = Ne;
          }
        }
      } else
        d.run();
  };
  return c && c(ye), d = new ri(b), d.scheduler = s ? () => s(ye, !1) : ye, D = (M) => sc(M, !1, d), _ = d.onStop = () => {
    const M = Vo.get(d);
    if (M) {
      if (l)
        l(M, 4);
      else
        for (const ne of M) ne();
      Vo.delete(d);
    }
  }, X.NODE_ENV !== "production" && (d.onTrack = o.onTrack, d.onTrigger = o.onTrigger), t ? r ? ye(!0) : L = d.run() : s ? s(ye.bind(null, !0), !0) : d.run(), q.pause = d.pause.bind(d), q.resume = d.resume.bind(d), q.stop = q, q;
}
function Ge(e, t = 1 / 0, o) {
  if (t <= 0 || !J(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), t--, ee(e))
    Ge(e.value, t, o);
  else if (S(e))
    for (let r = 0; r < e.length; r++)
      Ge(e[r], t, o);
  else if (Qn(e) || mt(e))
    e.forEach((r) => {
      Ge(r, t, o);
    });
  else if (zo(e)) {
    for (const r in e)
      Ge(e[r], t, o);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ge(e[r], t, o);
  }
  return e;
}
var h = {};
const kt = [];
function mo(e) {
  kt.push(e);
}
function bo() {
  kt.pop();
}
let sr = !1;
function E(e, ...t) {
  if (sr) return;
  sr = !0, Te();
  const o = kt.length ? kt[kt.length - 1].component : null, r = o && o.appContext.config.warnHandler, n = lc();
  if (r)
    Pt(
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
          ({ vnode: i }) => `at <${Qo(o, i.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    n.length && i.push(`
`, ...ac(n)), console.warn(...i);
  }
  Me(), sr = !1;
}
function lc() {
  let e = kt[kt.length - 1];
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
function ac(e) {
  const t = [];
  return e.forEach((o, r) => {
    t.push(...r === 0 ? [] : [`
`], ...uc(o));
  }), t;
}
function uc({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, n = ` at <${Qo(
    e.component,
    e.type,
    r
  )}`, i = ">" + o;
  return e.props ? [n, ...dc(e.props), i] : [n + i];
}
function dc(e) {
  const t = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((r) => {
    t.push(...wi(r, e[r]));
  }), o.length > 3 && t.push(" ..."), t;
}
function wi(e, t, o) {
  return G(t) ? (t = JSON.stringify(t), o ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? o ? t : [`${e}=${t}`] : ee(t) ? (t = wi(e, R(t.value), !0), o ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), o ? t : [`${e}=`, t]);
}
const Lr = {
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
function Pt(e, t, o, r) {
  try {
    return r ? e(...r) : e();
  } catch (n) {
    ro(n, t, o);
  }
}
function qe(e, t, o, r) {
  if (P(e)) {
    const n = Pt(e, t, o, r);
    return n && Pr(n) && n.catch((i) => {
      ro(i, t, o);
    }), n;
  }
  if (S(e)) {
    const n = [];
    for (let i = 0; i < e.length; i++)
      n.push(qe(e[i], t, o, r));
    return n;
  } else h.NODE_ENV !== "production" && E(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ro(e, t, o, r = !0) {
  const n = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || U;
  if (t) {
    let c = t.parent;
    const l = t.proxy, p = h.NODE_ENV !== "production" ? Lr[o] : `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let d = 0; d < f.length; d++)
          if (f[d](e, l, p) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      Te(), Pt(i, null, 10, [
        e,
        l,
        p
      ]), Me();
      return;
    }
  }
  fc(e, o, n, r, s);
}
function fc(e, t, o, r = !0, n = !1) {
  if (h.NODE_ENV !== "production") {
    const i = Lr[t];
    if (o && mo(o), E(`Unhandled error${i ? ` during execution of ${i}` : ""}`), o && bo(), r)
      throw e;
    console.error(e);
  } else {
    if (n)
      throw e;
    console.error(e);
  }
}
const fe = [];
let je = -1;
const St = [];
let nt = null, Ot = 0;
const xi = /* @__PURE__ */ Promise.resolve();
let So = null;
const hc = 100;
function Ei(e) {
  const t = So || xi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function pc(e) {
  let t = je + 1, o = fe.length;
  for (; t < o; ) {
    const r = t + o >>> 1, n = fe[r], i = Qt(n);
    i < e || i === e && n.flags & 2 ? t = r + 1 : o = r;
  }
  return t;
}
function Ko(e) {
  if (!(e.flags & 1)) {
    const t = Qt(e), o = fe[fe.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qt(o) ? fe.push(e) : fe.splice(pc(t), 0, e), e.flags |= 1, Ni();
  }
}
function Ni() {
  So || (So = xi.then(Ci));
}
function Oi(e) {
  S(e) ? St.push(...e) : nt && e.id === -1 ? nt.splice(Ot + 1, 0, e) : e.flags & 1 || (St.push(e), e.flags |= 1), Ni();
}
function hn(e, t, o = je + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); o < fe.length; o++) {
    const r = fe[o];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && Wr(t, r))
        continue;
      fe.splice(o, 1), o--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Di(e) {
  if (St.length) {
    const t = [...new Set(St)].sort(
      (o, r) => Qt(o) - Qt(r)
    );
    if (St.length = 0, nt) {
      nt.push(...t);
      return;
    }
    for (nt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ot = 0; Ot < nt.length; Ot++) {
      const o = nt[Ot];
      h.NODE_ENV !== "production" && Wr(e, o) || (o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2);
    }
    nt = null, Ot = 0;
  }
}
const Qt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ci(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (o) => Wr(e, o) : re;
  try {
    for (je = 0; je < fe.length; je++) {
      const o = fe[je];
      if (o && !(o.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(o))
          continue;
        o.flags & 4 && (o.flags &= -2), Pt(
          o,
          o.i,
          o.i ? 15 : 14
        ), o.flags & 4 || (o.flags &= -2);
      }
    }
  } finally {
    for (; je < fe.length; je++) {
      const o = fe[je];
      o && (o.flags &= -2);
    }
    je = -1, fe.length = 0, Di(e), So = null, (fe.length || St.length) && Ci(e);
  }
}
function Wr(e, t) {
  const o = e.get(t) || 0;
  if (o > hc) {
    const r = t.i, n = r && as(r.type);
    return ro(
      `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, o + 1), !1;
}
let We = !1;
const go = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (oo().__VUE_HMR_RUNTIME__ = {
  createRecord: cr(Vi),
  rerender: cr(gc),
  reload: cr(kc)
});
const vt = /* @__PURE__ */ new Map();
function mc(e) {
  const t = e.type.__hmrId;
  let o = vt.get(t);
  o || (Vi(t, e.type), o = vt.get(t)), o.instances.add(e);
}
function bc(e) {
  vt.get(e.type.__hmrId).instances.delete(e);
}
function Vi(e, t) {
  return vt.has(e) ? !1 : (vt.set(e, {
    initialDef: To(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function To(e) {
  return us(e) ? e.__vccOpts : e;
}
function gc(e, t) {
  const o = vt.get(e);
  o && (o.initialDef.render = t, [...o.instances].forEach((r) => {
    t && (r.render = t, To(r.type).render = t), r.renderCache = [], We = !0, r.update(), We = !1;
  }));
}
function kc(e, t) {
  const o = vt.get(e);
  if (!o) return;
  t = To(t), pn(o.initialDef, t);
  const r = [...o.instances];
  for (let n = 0; n < r.length; n++) {
    const i = r[n], s = To(i.type);
    let c = go.get(s);
    c || (s !== o.initialDef && pn(s, t), go.set(s, c = /* @__PURE__ */ new Set())), c.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (c.add(i), i.ceReload(t.styles), c.delete(i)) : i.parent ? Ko(() => {
      We = !0, i.parent.update(), We = !1, c.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  Oi(() => {
    go.clear();
  });
}
function pn(e, t) {
  Q(e, t);
  for (const o in e)
    o !== "__file" && !(o in t) && delete e[o];
}
function cr(e) {
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
let He, Wt = [], yr = !1;
function no(e, ...t) {
  He ? He.emit(e, ...t) : yr || Wt.push({ event: e, args: t });
}
function Si(e, t) {
  var o, r;
  He = e, He ? (He.enabled = !0, Wt.forEach(({ event: n, args: i }) => He.emit(n, ...i)), Wt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (o = window.navigator) == null ? void 0 : o.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Si(i, t);
  }), setTimeout(() => {
    He || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, yr = !0, Wt = []);
  }, 3e3)) : (yr = !0, Wt = []);
}
function yc(e, t) {
  no("app:init", e, t, {
    Fragment: Oe,
    Text: io,
    Comment: Ee,
    Static: _o
  });
}
function vc(e) {
  no("app:unmount", e);
}
const _c = /* @__PURE__ */ Ur(
  "component:added"
  /* COMPONENT_ADDED */
), Ti = /* @__PURE__ */ Ur(
  "component:updated"
  /* COMPONENT_UPDATED */
), wc = /* @__PURE__ */ Ur(
  "component:removed"
  /* COMPONENT_REMOVED */
), xc = (e) => {
  He && typeof He.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !He.cleanupBuffer(e) && wc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  return (t) => {
    no(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ec = /* @__PURE__ */ Mi(
  "perf:start"
  /* PERFORMANCE_START */
), Nc = /* @__PURE__ */ Mi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Mi(e) {
  return (t, o, r) => {
    no(e, t.appContext.app, t.uid, t, o, r);
  };
}
function Oc(e, t, o) {
  no(
    "component:emit",
    e.appContext.app,
    e,
    t,
    o
  );
}
let ae = null, Pi = null;
function Mo(e) {
  const t = ae;
  return ae = e, Pi = e && e.type.__scopeId || null, t;
}
function Dc(e, t = ae, o) {
  if (!t || e._n)
    return e;
  const r = (...n) => {
    r._d && On(-1);
    const i = Mo(t);
    let s;
    try {
      s = e(...n);
    } finally {
      Mo(i), r._d && On(1);
    }
    return h.NODE_ENV !== "production" && Ti(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Ai(e) {
  ks(e) && E("Do not use built-in directive ids as custom directive id: " + e);
}
function vr(e, t) {
  if (ae === null)
    return h.NODE_ENV !== "production" && E("withDirectives can only be used inside render functions."), e;
  const o = Go(ae), r = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [i, s, c, l = U] = t[n];
    i && (P(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ge(s), r.push({
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
function dt(e, t, o, r) {
  const n = e.dirs, i = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const c = n[s];
    i && (c.oldValue = i[s].value);
    let l = c.dir[r];
    l && (Te(), qe(l, o, 8, [
      e.el,
      c,
      e,
      t
    ]), Me());
  }
}
const Cc = Symbol("_vte"), Vc = (e) => e.__isTeleport;
function Br(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Br(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function qo(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Q({ name: e.name }, t, { setup: e })
  ) : e;
}
function $i(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Sc = /* @__PURE__ */ new WeakSet();
function Po(e, t, o, r, n = !1) {
  if (S(e)) {
    e.forEach(
      (D, C) => Po(
        D,
        t && (S(t) ? t[C] : t),
        o,
        r,
        n
      )
    );
    return;
  }
  if (Jt(r) && !n) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Po(e, t, o, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Go(r.component) : r.el, s = n ? null : i, { i: c, r: l } = e;
  if (h.NODE_ENV !== "production" && !c) {
    E(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, f = c.refs === U ? c.refs = {} : c.refs, d = c.setupState, b = R(d), _ = d === U ? () => !1 : (D) => h.NODE_ENV !== "production" && (H(b, D) && !ee(b[D]) && E(
    `Template ref "${D}" used on a non-ref value. It will not work in the production build.`
  ), Sc.has(b[D])) ? !1 : H(b, D);
  if (p != null && p !== l && (G(p) ? (f[p] = null, _(p) && (d[p] = null)) : ee(p) && (p.value = null)), P(l))
    Pt(l, c, 12, [s, f]);
  else {
    const D = G(l), C = ee(l);
    if (D || C) {
      const I = () => {
        if (e.f) {
          const A = D ? _(l) ? d[l] : f[l] : l.value;
          n ? S(A) && Mr(A, i) : S(A) ? A.includes(i) || A.push(i) : D ? (f[l] = [i], _(l) && (d[l] = f[l])) : (l.value = [i], e.k && (f[e.k] = l.value));
        } else D ? (f[l] = s, _(l) && (d[l] = s)) : C ? (l.value = s, e.k && (f[e.k] = s)) : h.NODE_ENV !== "production" && E("Invalid template ref type:", l, `(${typeof l})`);
      };
      s ? (I.id = -1, _e(I, o)) : I();
    } else h.NODE_ENV !== "production" && E("Invalid template ref type:", l, `(${typeof l})`);
  }
}
oo().requestIdleCallback;
oo().cancelIdleCallback;
const Jt = (e) => !!e.type.__asyncLoader, Kr = (e) => e.type.__isKeepAlive;
function Tc(e, t) {
  Ii(e, "a", t);
}
function Mc(e, t) {
  Ii(e, "da", t);
}
function Ii(e, t, o = ie) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = o;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (Jo(t, r, o), o) {
    let n = o.parent;
    for (; n && n.parent; )
      Kr(n.parent.vnode) && Pc(r, t, o, n), n = n.parent;
  }
}
function Pc(e, t, o, r) {
  const n = Jo(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ri(() => {
    Mr(r[t], n);
  }, o);
}
function Jo(e, t, o = ie, r = !1) {
  if (o) {
    const n = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...s) => {
      Te();
      const c = so(o), l = qe(t, o, e, s);
      return c(), Me(), l;
    });
    return r ? n.unshift(i) : n.push(i), i;
  } else if (h.NODE_ENV !== "production") {
    const n = ht(Lr[e].replace(/ hook$/, ""));
    E(
      `${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ze = (e) => (t, o = ie) => {
  (!eo || e === "sp") && Jo(e, (...r) => t(...r), o);
}, Ac = Ze("bm"), $c = Ze("m"), Ic = Ze(
  "bu"
), Rc = Ze("u"), jc = Ze(
  "bum"
), Ri = Ze("um"), Fc = Ze(
  "sp"
), zc = Ze("rtg"), Hc = Ze("rtc");
function Lc(e, t = ie) {
  Jo("ec", e, t);
}
const Wc = Symbol.for("v-ndc");
function ji(e, t, o, r) {
  let n;
  const i = o, s = S(e);
  if (s || G(e)) {
    const c = s && gt(e);
    let l = !1, p = !1;
    c && (l = !he(e), p = Ke(e), e = Wo(e)), n = new Array(e.length);
    for (let f = 0, d = e.length; f < d; f++)
      n[f] = t(
        l ? p ? Co(se(e[f])) : se(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && E(`The v-for range expect an integer value but got ${e}.`), n = new Array(e);
    for (let c = 0; c < e; c++)
      n[c] = t(c + 1, c, void 0, i);
  } else if (J(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (c, l) => t(c, l, void 0, i)
      );
    else {
      const c = Object.keys(e);
      n = new Array(c.length);
      for (let l = 0, p = c.length; l < p; l++) {
        const f = c[l];
        n[l] = t(e[f], f, l, i);
      }
    }
  else
    n = [];
  return n;
}
const _r = (e) => e ? cs(e) ? Go(e) : _r(e.parent) : null, yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? Le(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? Le(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? Le(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? Le(e.refs) : e.refs,
    $parent: (e) => _r(e.parent),
    $root: (e) => _r(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ko(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ei.bind(e.proxy)),
    $watch: (e) => wl.bind(e)
  })
), qr = (e) => e === "_" || e === "$", lr = (e, t) => e !== U && !e.__isScriptSetup && H(e, t), Fi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: r, data: n, props: i, accessCache: s, type: c, appContext: l } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const _ = s[t];
      if (_ !== void 0)
        switch (_) {
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
        if (lr(r, t))
          return s[t] = 1, r[t];
        if (n !== U && H(n, t))
          return s[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && H(p, t)
        )
          return s[t] = 3, i[t];
        if (o !== U && H(o, t))
          return s[t] = 4, o[t];
        wr && (s[t] = 0);
      }
    }
    const f = yt[t];
    let d, b;
    if (f)
      return t === "$attrs" ? (oe(e.attrs, "get", ""), h.NODE_ENV !== "production" && Io()) : h.NODE_ENV !== "production" && t === "$slots" && oe(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (o !== U && H(o, t))
      return s[t] = 4, o[t];
    if (
      // global properties
      b = l.config.globalProperties, H(b, t)
    )
      return b[t];
    h.NODE_ENV !== "production" && ae && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (n !== U && qr(t[0]) && H(n, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ae && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, o) {
    const { data: r, setupState: n, ctx: i } = e;
    return lr(n, t) ? (n[t] = o, !0) : h.NODE_ENV !== "production" && n.__isScriptSetup && H(n, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== U && H(r, t) ? (r[t] = o, !0) : H(e.props, t) ? (h.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: o
    }) : i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: r, appContext: n, propsOptions: i }
  }, s) {
    let c;
    return !!o[s] || e !== U && H(e, s) || lr(t, s) || (c = i[0]) && H(c, s) || H(r, s) || H(yt, s) || H(n.config.globalProperties, s);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : H(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
h.NODE_ENV !== "production" && (Fi.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Uc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(yt).forEach((o) => {
    Object.defineProperty(t, o, {
      configurable: !0,
      enumerable: !1,
      get: () => yt[o](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: re
    });
  }), t;
}
function Bc(e) {
  const {
    ctx: t,
    propsOptions: [o]
  } = e;
  o && Object.keys(o).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: re
    });
  });
}
function Kc(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(R(o)).forEach((r) => {
    if (!o.__isScriptSetup) {
      if (qr(r[0])) {
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
        set: re
      });
    }
  });
}
function mn(e) {
  return S(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function qc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o] ? E(`${t} property "${o}" is already defined in ${e[o]}.`) : e[o] = t;
  };
}
let wr = !0;
function Jc(e) {
  const t = Hi(e), o = e.proxy, r = e.ctx;
  wr = !1, t.beforeCreate && bn(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: i,
    methods: s,
    watch: c,
    provide: l,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: d,
    mounted: b,
    beforeUpdate: _,
    updated: D,
    activated: C,
    deactivated: I,
    beforeDestroy: A,
    beforeUnmount: q,
    destroyed: L,
    unmounted: ye,
    render: M,
    renderTracked: ne,
    renderTriggered: Ne,
    errorCaptured: ce,
    serverPrefetch: pe,
    // public API
    expose: Je,
    inheritAttrs: et,
    // assets
    components: Ce,
    directives: lo,
    filters: on
  } = t, tt = h.NODE_ENV !== "production" ? qc() : null;
  if (h.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const j in F)
        tt("Props", j);
  }
  if (p && Yc(p, r, tt), s)
    for (const F in s) {
      const j = s[F];
      P(j) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, F, {
        value: j.bind(o),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[F] = j.bind(o), h.NODE_ENV !== "production" && tt("Methods", F)) : h.NODE_ENV !== "production" && E(
        `Method "${F}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (n) {
    h.NODE_ENV !== "production" && !P(n) && E(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = n.call(o, o);
    if (h.NODE_ENV !== "production" && Pr(F) && E(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !J(F))
      h.NODE_ENV !== "production" && E("data() should return an object.");
    else if (e.data = Hr(F), h.NODE_ENV !== "production")
      for (const j in F)
        tt("Data", j), qr(j[0]) || Object.defineProperty(r, j, {
          configurable: !0,
          enumerable: !0,
          get: () => F[j],
          set: re
        });
  }
  if (wr = !0, i)
    for (const F in i) {
      const j = i[F], Pe = P(j) ? j.bind(o, o) : P(j.get) ? j.get.bind(o, o) : re;
      h.NODE_ENV !== "production" && Pe === re && E(`Computed property "${F}" has no getter.`);
      const Zo = !P(j) && P(j.set) ? j.set.bind(o) : h.NODE_ENV !== "production" ? () => {
        E(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : re, At = jo({
        get: Pe,
        set: Zo
      });
      Object.defineProperty(r, F, {
        enumerable: !0,
        configurable: !0,
        get: () => At.value,
        set: (_t) => At.value = _t
      }), h.NODE_ENV !== "production" && tt("Computed", F);
    }
  if (c)
    for (const F in c)
      zi(c[F], r, o, F);
  if (l) {
    const F = P(l) ? l.call(o) : l;
    Reflect.ownKeys(F).forEach((j) => {
      tl(j, F[j]);
    });
  }
  f && bn(f, e, "c");
  function me(F, j) {
    S(j) ? j.forEach((Pe) => F(Pe.bind(o))) : j && F(j.bind(o));
  }
  if (me(Ac, d), me($c, b), me(Ic, _), me(Rc, D), me(Tc, C), me(Mc, I), me(Lc, ce), me(Hc, ne), me(zc, Ne), me(jc, q), me(Ri, ye), me(Fc, pe), S(Je))
    if (Je.length) {
      const F = e.exposed || (e.exposed = {});
      Je.forEach((j) => {
        Object.defineProperty(F, j, {
          get: () => o[j],
          set: (Pe) => o[j] = Pe
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === re && (e.render = M), et != null && (e.inheritAttrs = et), Ce && (e.components = Ce), lo && (e.directives = lo), pe && $i(e);
}
function Yc(e, t, o = re) {
  S(e) && (e = xr(e));
  for (const r in e) {
    const n = e[r];
    let i;
    J(n) ? "default" in n ? i = ko(
      n.from || r,
      n.default,
      !0
    ) : i = ko(n.from || r) : i = ko(n), ee(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, h.NODE_ENV !== "production" && o("Inject", r);
  }
}
function bn(e, t, o) {
  qe(
    S(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function zi(e, t, o, r) {
  let n = r.includes(".") ? Zi(o, r) : () => o[r];
  if (G(e)) {
    const i = t[e];
    P(i) ? vo(n, i) : h.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e}"`, i);
  } else if (P(e))
    vo(n, e.bind(o));
  else if (J(e))
    if (S(e))
      e.forEach((i) => zi(i, t, o, r));
    else {
      const i = P(e.handler) ? e.handler.bind(o) : t[e.handler];
      P(i) ? vo(n, i, e) : h.NODE_ENV !== "production" && E(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else h.NODE_ENV !== "production" && E(`Invalid watch option: "${r}"`, e);
}
function Hi(e) {
  const t = e.type, { mixins: o, extends: r } = t, {
    mixins: n,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = i.get(t);
  let l;
  return c ? l = c : !n.length && !o && !r ? l = t : (l = {}, n.length && n.forEach(
    (p) => Ao(l, p, s, !0)
  ), Ao(l, t, s)), J(t) && i.set(t, l), l;
}
function Ao(e, t, o, r = !1) {
  const { mixins: n, extends: i } = t;
  i && Ao(e, i, o, !0), n && n.forEach(
    (s) => Ao(e, s, o, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      h.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Xc[s] || o && o[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const Xc = {
  data: gn,
  props: kn,
  emits: kn,
  // objects
  methods: Ut,
  computed: Ut,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Ut,
  directives: Ut,
  // watch
  watch: Qc,
  // provide / inject
  provide: gn,
  inject: Gc
};
function gn(e, t) {
  return t ? e ? function() {
    return Q(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gc(e, t) {
  return Ut(xr(e), xr(t));
}
function xr(e) {
  if (S(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? Q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function kn(e, t) {
  return e ? S(e) && S(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Q(
    /* @__PURE__ */ Object.create(null),
    mn(e),
    mn(t ?? {})
  ) : t;
}
function Qc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Q(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    o[r] = de(e[r], t[r]);
  return o;
}
function Li() {
  return {
    app: null,
    config: {
      isNativeTag: bs,
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
let Zc = 0;
function el(e, t) {
  return function(r, n = null) {
    P(r) || (r = Q({}, r)), n != null && !J(n) && (h.NODE_ENV !== "production" && E("root props passed to app.mount() must be an object."), n = null);
    const i = Li(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let l = !1;
    const p = i.app = {
      _uid: Zc++,
      _component: r,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: Sn,
      get config() {
        return i.config;
      },
      set config(f) {
        h.NODE_ENV !== "production" && E(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...d) {
        return s.has(f) ? h.NODE_ENV !== "production" && E("Plugin has already been applied to target app.") : f && P(f.install) ? (s.add(f), f.install(p, ...d)) : P(f) ? (s.add(f), f(p, ...d)) : h.NODE_ENV !== "production" && E(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(f) {
        return i.mixins.includes(f) ? h.NODE_ENV !== "production" && E(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), p;
      },
      component(f, d) {
        return h.NODE_ENV !== "production" && Vr(f, i.config), d ? (h.NODE_ENV !== "production" && i.components[f] && E(`Component "${f}" has already been registered in target app.`), i.components[f] = d, p) : i.components[f];
      },
      directive(f, d) {
        return h.NODE_ENV !== "production" && Ai(f), d ? (h.NODE_ENV !== "production" && i.directives[f] && E(`Directive "${f}" has already been registered in target app.`), i.directives[f] = d, p) : i.directives[f];
      },
      mount(f, d, b) {
        if (l)
          h.NODE_ENV !== "production" && E(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && f.__vue_app__ && E(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = p._ceVNode || Ue(r, n);
          return _.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), h.NODE_ENV !== "production" && (i.reload = () => {
            const D = lt(_);
            D.el = null, e(D, f, b);
          }), e(_, f, b), l = !0, p._container = f, f.__vue_app__ = p, h.NODE_ENV !== "production" && (p._instance = _.component, yc(p, Sn)), Go(_.component);
        }
      },
      onUnmount(f) {
        h.NODE_ENV !== "production" && typeof f != "function" && E(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), c.push(f);
      },
      unmount() {
        l ? (qe(
          c,
          p._instance,
          16
        ), e(null, p._container), h.NODE_ENV !== "production" && (p._instance = null, vc(p)), delete p._container.__vue_app__) : h.NODE_ENV !== "production" && E("Cannot unmount an app that is not mounted.");
      },
      provide(f, d) {
        return h.NODE_ENV !== "production" && f in i.provides && E(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ), i.provides[f] = d, p;
      },
      runWithContext(f) {
        const d = Tt;
        Tt = p;
        try {
          return f();
        } finally {
          Tt = d;
        }
      }
    };
    return p;
  };
}
let Tt = null;
function tl(e, t) {
  if (!ie)
    h.NODE_ENV !== "production" && E("provide() can only be used inside setup().");
  else {
    let o = ie.provides;
    const r = ie.parent && ie.parent.provides;
    r === o && (o = ie.provides = Object.create(r)), o[e] = t;
  }
}
function ko(e, t, o = !1) {
  const r = ie || ae;
  if (r || Tt) {
    const n = Tt ? Tt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return o && P(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const Wi = {}, Ui = () => Object.create(Wi), Bi = (e) => Object.getPrototypeOf(e) === Wi;
function ol(e, t, o, r = !1) {
  const n = {}, i = Ui();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ki(e, t, n, i);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  h.NODE_ENV !== "production" && Ji(t || {}, n, e), o ? e.props = r ? n : Zs(n) : e.type.props ? e.props = n : e.props = i, e.attrs = i;
}
function rl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function nl(e, t, o, r) {
  const {
    props: n,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, c = R(n), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && rl(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const f = e.vnode.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        let b = f[d];
        if (Yo(e.emitsOptions, b))
          continue;
        const _ = t[b];
        if (l)
          if (H(i, b))
            _ !== i[b] && (i[b] = _, p = !0);
          else {
            const D = ke(b);
            n[D] = Er(
              l,
              c,
              D,
              _,
              e,
              !1
            );
          }
        else
          _ !== i[b] && (i[b] = _, p = !0);
      }
    }
  } else {
    Ki(e, t, n, i) && (p = !0);
    let f;
    for (const d in c)
      (!t || // for camelCase
      !H(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = we(d)) === d || !H(t, f))) && (l ? o && // for camelCase
      (o[d] !== void 0 || // for kebab-case
      o[f] !== void 0) && (n[d] = Er(
        l,
        c,
        d,
        void 0,
        e,
        !0
      )) : delete n[d]);
    if (i !== c)
      for (const d in i)
        (!t || !H(t, d)) && (delete i[d], p = !0);
  }
  p && ze(e.attrs, "set", ""), h.NODE_ENV !== "production" && Ji(t || {}, n, e);
}
function Ki(e, t, o, r) {
  const [n, i] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let l in t) {
      if (Bt(l))
        continue;
      const p = t[l];
      let f;
      n && H(n, f = ke(l)) ? !i || !i.includes(f) ? o[f] = p : (c || (c = {}))[f] = p : Yo(e.emitsOptions, l) || (!(l in r) || p !== r[l]) && (r[l] = p, s = !0);
    }
  if (i) {
    const l = R(o), p = c || U;
    for (let f = 0; f < i.length; f++) {
      const d = i[f];
      o[d] = Er(
        n,
        l,
        d,
        p[d],
        e,
        !H(p, d)
      );
    }
  }
  return s;
}
function Er(e, t, o, r, n, i) {
  const s = e[o];
  if (s != null) {
    const c = H(s, "default");
    if (c && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && P(l)) {
        const { propsDefaults: p } = n;
        if (o in p)
          r = p[o];
        else {
          const f = so(n);
          r = p[o] = l.call(
            null,
            t
          ), f();
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
    ] && (r === "" || r === we(o)) && (r = !0));
  }
  return r;
}
const il = /* @__PURE__ */ new WeakMap();
function qi(e, t, o = !1) {
  const r = o ? il : t.propsCache, n = r.get(e);
  if (n)
    return n;
  const i = e.props, s = {}, c = [];
  let l = !1;
  if (!P(e)) {
    const f = (d) => {
      l = !0;
      const [b, _] = qi(d, t, !0);
      Q(s, b), _ && c.push(..._);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !l)
    return J(e) && r.set(e, Vt), Vt;
  if (S(i))
    for (let f = 0; f < i.length; f++) {
      h.NODE_ENV !== "production" && !G(i[f]) && E("props must be strings when using array syntax.", i[f]);
      const d = ke(i[f]);
      yn(d) && (s[d] = U);
    }
  else if (i) {
    h.NODE_ENV !== "production" && !J(i) && E("invalid props options", i);
    for (const f in i) {
      const d = ke(f);
      if (yn(d)) {
        const b = i[f], _ = s[d] = S(b) || P(b) ? { type: b } : Q({}, b), D = _.type;
        let C = !1, I = !0;
        if (S(D))
          for (let A = 0; A < D.length; ++A) {
            const q = D[A], L = P(q) && q.name;
            if (L === "Boolean") {
              C = !0;
              break;
            } else L === "String" && (I = !1);
          }
        else
          C = P(D) && D.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = C, _[
          1
          /* shouldCastTrue */
        ] = I, (C || H(_, "default")) && c.push(d);
      }
    }
  }
  const p = [s, c];
  return J(e) && r.set(e, p), p;
}
function yn(e) {
  return e[0] !== "$" && !Bt(e) ? !0 : (h.NODE_ENV !== "production" && E(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function sl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ji(e, t, o) {
  const r = R(t), n = o.propsOptions[0], i = Object.keys(e).map((s) => ke(s));
  for (const s in n) {
    let c = n[s];
    c != null && cl(
      s,
      r[s],
      c,
      h.NODE_ENV !== "production" ? Le(r) : r,
      !i.includes(s)
    );
  }
}
function cl(e, t, o, r, n) {
  const { type: i, required: s, validator: c, skipCheck: l } = o;
  if (s && n) {
    E('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !l) {
      let p = !1;
      const f = S(i) ? i : [i], d = [];
      for (let b = 0; b < f.length && !p; b++) {
        const { valid: _, expectedType: D } = al(t, f[b]);
        d.push(D || ""), p = _;
      }
      if (!p) {
        E(ul(e, t, d));
        return;
      }
    }
    c && !c(t, r) && E('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ll = /* @__PURE__ */ Qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function al(e, t) {
  let o;
  const r = sl(t);
  if (r === "null")
    o = e === null;
  else if (ll(r)) {
    const n = typeof e;
    o = n === r.toLowerCase(), !o && n === "object" && (o = e instanceof t);
  } else r === "Object" ? o = J(e) : r === "Array" ? o = S(e) : o = e instanceof t;
  return {
    valid: o,
    expectedType: r
  };
}
function ul(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${o.map(Lo).join(" | ")}`;
  const n = o[0], i = Ar(t), s = vn(t, n), c = vn(t, i);
  return o.length === 1 && _n(n) && !dl(n, i) && (r += ` with value ${s}`), r += `, got ${i} `, _n(i) && (r += `with value ${c}.`), r;
}
function vn(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function _n(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function dl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Jr = (e) => e[0] === "_" || e === "$stable", Yr = (e) => S(e) ? e.map(Ve) : [Ve(e)], fl = (e, t, o) => {
  if (t._n)
    return t;
  const r = Dc((...n) => (h.NODE_ENV !== "production" && ie && !(o === null && ae) && !(o && o.root !== ie.root) && E(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Yr(t(...n))), o);
  return r._c = !1, r;
}, Yi = (e, t, o) => {
  const r = e._ctx;
  for (const n in e) {
    if (Jr(n)) continue;
    const i = e[n];
    if (P(i))
      t[n] = fl(n, i, r);
    else if (i != null) {
      h.NODE_ENV !== "production" && E(
        `Non-function value encountered for slot "${n}". Prefer function slots for better performance.`
      );
      const s = Yr(i);
      t[n] = () => s;
    }
  }
}, Xi = (e, t) => {
  h.NODE_ENV !== "production" && !Kr(e.vnode) && E(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const o = Yr(t);
  e.slots.default = () => o;
}, Nr = (e, t, o) => {
  for (const r in t)
    (o || !Jr(r)) && (e[r] = t[r]);
}, hl = (e, t, o) => {
  const r = e.slots = Ui();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (Nr(r, t, o), o && Oo(r, "_", n, !0)) : Yi(t, r);
  } else t && Xi(e, t);
}, pl = (e, t, o) => {
  const { vnode: r, slots: n } = e;
  let i = !0, s = U;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? h.NODE_ENV !== "production" && We ? (Nr(n, t, o), ze(e, "set", "$slots")) : o && c === 1 ? i = !1 : Nr(n, t, o) : (i = !t.$stable, Yi(t, n)), s = t;
  } else t && (Xi(e, t), s = { default: 1 });
  if (i)
    for (const c in n)
      !Jr(c) && s[c] == null && delete n[c];
};
let Ft, st;
function xt(e, t) {
  e.appContext.config.performance && $o() && st.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && Ec(e, t, $o() ? st.now() : Date.now());
}
function Et(e, t) {
  if (e.appContext.config.performance && $o()) {
    const o = `vue-${t}-${e.uid}`, r = o + ":end";
    st.mark(r), st.measure(
      `<${Qo(e, e.type)}> ${t}`,
      o,
      r
    ), st.clearMarks(o), st.clearMarks(r);
  }
  h.NODE_ENV !== "production" && Nc(e, t, $o() ? st.now() : Date.now());
}
function $o() {
  return Ft !== void 0 || (typeof window < "u" && window.performance ? (Ft = !0, st = window.performance) : Ft = !1), Ft;
}
function ml() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const _e = Vl;
function bl(e) {
  return gl(e);
}
function gl(e, t) {
  ml();
  const o = oo();
  o.__VUE__ = !0, h.NODE_ENV !== "production" && Si(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
    insert: r,
    remove: n,
    patchProp: i,
    createElement: s,
    createText: c,
    createComment: l,
    setText: p,
    setElementText: f,
    parentNode: d,
    nextSibling: b,
    setScopeId: _ = re,
    insertStaticContent: D
  } = e, C = (a, u, m, y = null, g = null, k = null, N = void 0, x = null, w = h.NODE_ENV !== "production" && We ? !1 : !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !zt(a, u) && (y = ao(a), ot(a, g, k, !0), a = null), u.patchFlag === -2 && (w = !1, u.dynamicChildren = null);
    const { type: v, ref: T, shapeFlag: O } = u;
    switch (v) {
      case io:
        I(a, u, m, y);
        break;
      case Ee:
        A(a, u, m, y);
        break;
      case _o:
        a == null ? q(u, m, y, N) : h.NODE_ENV !== "production" && L(a, u, m, N);
        break;
      case Oe:
        lo(
          a,
          u,
          m,
          y,
          g,
          k,
          N,
          x,
          w
        );
        break;
      default:
        O & 1 ? ne(
          a,
          u,
          m,
          y,
          g,
          k,
          N,
          x,
          w
        ) : O & 6 ? on(
          a,
          u,
          m,
          y,
          g,
          k,
          N,
          x,
          w
        ) : O & 64 || O & 128 ? v.process(
          a,
          u,
          m,
          y,
          g,
          k,
          N,
          x,
          w,
          It
        ) : h.NODE_ENV !== "production" && E("Invalid VNode type:", v, `(${typeof v})`);
    }
    T != null && g && Po(T, a && a.ref, k, u || a, !u);
  }, I = (a, u, m, y) => {
    if (a == null)
      r(
        u.el = c(u.children),
        m,
        y
      );
    else {
      const g = u.el = a.el;
      u.children !== a.children && p(g, u.children);
    }
  }, A = (a, u, m, y) => {
    a == null ? r(
      u.el = l(u.children || ""),
      m,
      y
    ) : u.el = a.el;
  }, q = (a, u, m, y) => {
    [a.el, a.anchor] = D(
      a.children,
      u,
      m,
      y,
      a.el,
      a.anchor
    );
  }, L = (a, u, m, y) => {
    if (u.children !== a.children) {
      const g = b(a.anchor);
      M(a), [u.el, u.anchor] = D(
        u.children,
        m,
        g,
        y
      );
    } else
      u.el = a.el, u.anchor = a.anchor;
  }, ye = ({ el: a, anchor: u }, m, y) => {
    let g;
    for (; a && a !== u; )
      g = b(a), r(a, m, y), a = g;
    r(u, m, y);
  }, M = ({ el: a, anchor: u }) => {
    let m;
    for (; a && a !== u; )
      m = b(a), n(a), a = m;
    n(u);
  }, ne = (a, u, m, y, g, k, N, x, w) => {
    u.type === "svg" ? N = "svg" : u.type === "math" && (N = "mathml"), a == null ? Ne(
      u,
      m,
      y,
      g,
      k,
      N,
      x,
      w
    ) : Je(
      a,
      u,
      g,
      k,
      N,
      x,
      w
    );
  }, Ne = (a, u, m, y, g, k, N, x) => {
    let w, v;
    const { props: T, shapeFlag: O, transition: V, dirs: $ } = a;
    if (w = a.el = s(
      a.type,
      k,
      T && T.is,
      T
    ), O & 8 ? f(w, a.children) : O & 16 && pe(
      a.children,
      w,
      null,
      y,
      g,
      ar(a, k),
      N,
      x
    ), $ && dt(a, null, y, "created"), ce(w, a, a.scopeId, N, y), T) {
      for (const Y in T)
        Y !== "value" && !Bt(Y) && i(w, Y, null, T[Y], k, y);
      "value" in T && i(w, "value", null, T.value, k), (v = T.onVnodeBeforeMount) && Re(v, y, a);
    }
    h.NODE_ENV !== "production" && (Oo(w, "__vnode", a, !0), Oo(w, "__vueParentComponent", y, !0)), $ && dt(a, null, y, "beforeMount");
    const z = kl(g, V);
    z && V.beforeEnter(w), r(w, u, m), ((v = T && T.onVnodeMounted) || z || $) && _e(() => {
      v && Re(v, y, a), z && V.enter(w), $ && dt(a, null, y, "mounted");
    }, g);
  }, ce = (a, u, m, y, g) => {
    if (m && _(a, m), y)
      for (let k = 0; k < y.length; k++)
        _(a, y[k]);
    if (g) {
      let k = g.subTree;
      if (h.NODE_ENV !== "production" && k.patchFlag > 0 && k.patchFlag & 2048 && (k = Xr(k.children) || k), u === k || os(k.type) && (k.ssContent === u || k.ssFallback === u)) {
        const N = g.vnode;
        ce(
          a,
          N,
          N.scopeId,
          N.slotScopeIds,
          g.parent
        );
      }
    }
  }, pe = (a, u, m, y, g, k, N, x, w = 0) => {
    for (let v = w; v < a.length; v++) {
      const T = a[v] = x ? it(a[v]) : Ve(a[v]);
      C(
        null,
        T,
        u,
        m,
        y,
        g,
        k,
        N,
        x
      );
    }
  }, Je = (a, u, m, y, g, k, N) => {
    const x = u.el = a.el;
    h.NODE_ENV !== "production" && (x.__vnode = u);
    let { patchFlag: w, dynamicChildren: v, dirs: T } = u;
    w |= a.patchFlag & 16;
    const O = a.props || U, V = u.props || U;
    let $;
    if (m && ft(m, !1), ($ = V.onVnodeBeforeUpdate) && Re($, m, u, a), T && dt(u, a, m, "beforeUpdate"), m && ft(m, !0), h.NODE_ENV !== "production" && We && (w = 0, N = !1, v = null), (O.innerHTML && V.innerHTML == null || O.textContent && V.textContent == null) && f(x, ""), v ? (et(
      a.dynamicChildren,
      v,
      x,
      m,
      y,
      ar(u, g),
      k
    ), h.NODE_ENV !== "production" && yo(a, u)) : N || Pe(
      a,
      u,
      x,
      null,
      m,
      y,
      ar(u, g),
      k,
      !1
    ), w > 0) {
      if (w & 16)
        Ce(x, O, V, m, g);
      else if (w & 2 && O.class !== V.class && i(x, "class", null, V.class, g), w & 4 && i(x, "style", O.style, V.style, g), w & 8) {
        const z = u.dynamicProps;
        for (let Y = 0; Y < z.length; Y++) {
          const B = z[Y], ve = O[B], be = V[B];
          (be !== ve || B === "value") && i(x, B, ve, be, g, m);
        }
      }
      w & 1 && a.children !== u.children && f(x, u.children);
    } else !N && v == null && Ce(x, O, V, m, g);
    (($ = V.onVnodeUpdated) || T) && _e(() => {
      $ && Re($, m, u, a), T && dt(u, a, m, "updated");
    }, y);
  }, et = (a, u, m, y, g, k, N) => {
    for (let x = 0; x < u.length; x++) {
      const w = a[x], v = u[x], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zt(w, v) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? d(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      C(
        w,
        v,
        T,
        null,
        y,
        g,
        k,
        N,
        !0
      );
    }
  }, Ce = (a, u, m, y, g) => {
    if (u !== m) {
      if (u !== U)
        for (const k in u)
          !Bt(k) && !(k in m) && i(
            a,
            k,
            u[k],
            null,
            g,
            y
          );
      for (const k in m) {
        if (Bt(k)) continue;
        const N = m[k], x = u[k];
        N !== x && k !== "value" && i(a, k, x, N, g, y);
      }
      "value" in m && i(a, "value", u.value, m.value, g);
    }
  }, lo = (a, u, m, y, g, k, N, x, w) => {
    const v = u.el = a ? a.el : c(""), T = u.anchor = a ? a.anchor : c("");
    let { patchFlag: O, dynamicChildren: V, slotScopeIds: $ } = u;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (We || O & 2048) && (O = 0, w = !1, V = null), $ && (x = x ? x.concat($) : $), a == null ? (r(v, m, y), r(T, m, y), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      m,
      T,
      g,
      k,
      N,
      x,
      w
    )) : O > 0 && O & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (et(
      a.dynamicChildren,
      V,
      m,
      g,
      k,
      N,
      x
    ), h.NODE_ENV !== "production" ? yo(a, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || g && u === g.subTree) && yo(
        a,
        u,
        !0
        /* shallow */
      )
    )) : Pe(
      a,
      u,
      m,
      T,
      g,
      k,
      N,
      x,
      w
    );
  }, on = (a, u, m, y, g, k, N, x, w) => {
    u.slotScopeIds = x, a == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      m,
      y,
      N,
      w
    ) : tt(
      u,
      m,
      y,
      g,
      k,
      N,
      w
    ) : me(a, u, w);
  }, tt = (a, u, m, y, g, k, N) => {
    const x = a.component = Il(
      a,
      y,
      g
    );
    if (h.NODE_ENV !== "production" && x.type.__hmrId && mc(x), h.NODE_ENV !== "production" && (mo(a), xt(x, "mount")), Kr(a) && (x.ctx.renderer = It), h.NODE_ENV !== "production" && xt(x, "init"), Fl(x, !1, N), h.NODE_ENV !== "production" && Et(x, "init"), h.NODE_ENV !== "production" && We && (a.el = null), x.asyncDep) {
      if (g && g.registerDep(x, F, N), !a.el) {
        const w = x.subTree = Ue(Ee);
        A(null, w, u, m);
      }
    } else
      F(
        x,
        a,
        u,
        m,
        g,
        k,
        N
      );
    h.NODE_ENV !== "production" && (bo(), Et(x, "mount"));
  }, me = (a, u, m) => {
    const y = u.component = a.component;
    if (Dl(a, u, m))
      if (y.asyncDep && !y.asyncResolved) {
        h.NODE_ENV !== "production" && mo(u), j(y, u, m), h.NODE_ENV !== "production" && bo();
        return;
      } else
        y.next = u, y.update();
    else
      u.el = a.el, y.vnode = u;
  }, F = (a, u, m, y, g, k, N) => {
    const x = () => {
      if (a.isMounted) {
        let { next: O, bu: V, u: $, parent: z, vnode: Y } = a;
        {
          const $e = Gi(a);
          if ($e) {
            O && (O.el = Y.el, j(a, O, N)), $e.asyncDep.then(() => {
              a.isUnmounted || x();
            });
            return;
          }
        }
        let B = O, ve;
        h.NODE_ENV !== "production" && mo(O || a.vnode), ft(a, !1), O ? (O.el = Y.el, j(a, O, N)) : O = Y, V && Nt(V), (ve = O.props && O.props.onVnodeBeforeUpdate) && Re(ve, z, O, Y), ft(a, !0), h.NODE_ENV !== "production" && xt(a, "render");
        const be = xn(a);
        h.NODE_ENV !== "production" && Et(a, "render");
        const Ae = a.subTree;
        a.subTree = be, h.NODE_ENV !== "production" && xt(a, "patch"), C(
          Ae,
          be,
          // parent may have changed if it's in a teleport
          d(Ae.el),
          // anchor may have changed if it's in a fragment
          ao(Ae),
          a,
          g,
          k
        ), h.NODE_ENV !== "production" && Et(a, "patch"), O.el = be.el, B === null && Cl(a, be.el), $ && _e($, g), (ve = O.props && O.props.onVnodeUpdated) && _e(
          () => Re(ve, z, O, Y),
          g
        ), h.NODE_ENV !== "production" && Ti(a), h.NODE_ENV !== "production" && bo();
      } else {
        let O;
        const { el: V, props: $ } = u, { bm: z, m: Y, parent: B, root: ve, type: be } = a, Ae = Jt(u);
        ft(a, !1), z && Nt(z), !Ae && (O = $ && $.onVnodeBeforeMount) && Re(O, B, u), ft(a, !0);
        {
          ve.ce && ve.ce._injectChildStyle(be), h.NODE_ENV !== "production" && xt(a, "render");
          const $e = a.subTree = xn(a);
          h.NODE_ENV !== "production" && Et(a, "render"), h.NODE_ENV !== "production" && xt(a, "patch"), C(
            null,
            $e,
            m,
            y,
            a,
            g,
            k
          ), h.NODE_ENV !== "production" && Et(a, "patch"), u.el = $e.el;
        }
        if (Y && _e(Y, g), !Ae && (O = $ && $.onVnodeMounted)) {
          const $e = u;
          _e(
            () => Re(O, B, $e),
            g
          );
        }
        (u.shapeFlag & 256 || B && Jt(B.vnode) && B.vnode.shapeFlag & 256) && a.a && _e(a.a, g), a.isMounted = !0, h.NODE_ENV !== "production" && _c(a), u = m = y = null;
      }
    };
    a.scope.on();
    const w = a.effect = new ri(x);
    a.scope.off();
    const v = a.update = w.run.bind(w), T = a.job = w.runIfDirty.bind(w);
    T.i = a, T.id = a.uid, w.scheduler = () => Ko(T), ft(a, !0), h.NODE_ENV !== "production" && (w.onTrack = a.rtc ? (O) => Nt(a.rtc, O) : void 0, w.onTrigger = a.rtg ? (O) => Nt(a.rtg, O) : void 0), v();
  }, j = (a, u, m) => {
    u.component = a;
    const y = a.vnode.props;
    a.vnode = u, a.next = null, nl(a, u.props, y, m), pl(a, u.children, m), Te(), hn(a), Me();
  }, Pe = (a, u, m, y, g, k, N, x, w = !1) => {
    const v = a && a.children, T = a ? a.shapeFlag : 0, O = u.children, { patchFlag: V, shapeFlag: $ } = u;
    if (V > 0) {
      if (V & 128) {
        At(
          v,
          O,
          m,
          y,
          g,
          k,
          N,
          x,
          w
        );
        return;
      } else if (V & 256) {
        Zo(
          v,
          O,
          m,
          y,
          g,
          k,
          N,
          x,
          w
        );
        return;
      }
    }
    $ & 8 ? (T & 16 && $t(v, g, k), O !== v && f(m, O)) : T & 16 ? $ & 16 ? At(
      v,
      O,
      m,
      y,
      g,
      k,
      N,
      x,
      w
    ) : $t(v, g, k, !0) : (T & 8 && f(m, ""), $ & 16 && pe(
      O,
      m,
      y,
      g,
      k,
      N,
      x,
      w
    ));
  }, Zo = (a, u, m, y, g, k, N, x, w) => {
    a = a || Vt, u = u || Vt;
    const v = a.length, T = u.length, O = Math.min(v, T);
    let V;
    for (V = 0; V < O; V++) {
      const $ = u[V] = w ? it(u[V]) : Ve(u[V]);
      C(
        a[V],
        $,
        m,
        null,
        g,
        k,
        N,
        x,
        w
      );
    }
    v > T ? $t(
      a,
      g,
      k,
      !0,
      !1,
      O
    ) : pe(
      u,
      m,
      y,
      g,
      k,
      N,
      x,
      w,
      O
    );
  }, At = (a, u, m, y, g, k, N, x, w) => {
    let v = 0;
    const T = u.length;
    let O = a.length - 1, V = T - 1;
    for (; v <= O && v <= V; ) {
      const $ = a[v], z = u[v] = w ? it(u[v]) : Ve(u[v]);
      if (zt($, z))
        C(
          $,
          z,
          m,
          null,
          g,
          k,
          N,
          x,
          w
        );
      else
        break;
      v++;
    }
    for (; v <= O && v <= V; ) {
      const $ = a[O], z = u[V] = w ? it(u[V]) : Ve(u[V]);
      if (zt($, z))
        C(
          $,
          z,
          m,
          null,
          g,
          k,
          N,
          x,
          w
        );
      else
        break;
      O--, V--;
    }
    if (v > O) {
      if (v <= V) {
        const $ = V + 1, z = $ < T ? u[$].el : y;
        for (; v <= V; )
          C(
            null,
            u[v] = w ? it(u[v]) : Ve(u[v]),
            m,
            z,
            g,
            k,
            N,
            x,
            w
          ), v++;
      }
    } else if (v > V)
      for (; v <= O; )
        ot(a[v], g, k, !0), v++;
    else {
      const $ = v, z = v, Y = /* @__PURE__ */ new Map();
      for (v = z; v <= V; v++) {
        const ue = u[v] = w ? it(u[v]) : Ve(u[v]);
        ue.key != null && (h.NODE_ENV !== "production" && Y.has(ue.key) && E(
          "Duplicate keys found during update:",
          JSON.stringify(ue.key),
          "Make sure keys are unique."
        ), Y.set(ue.key, v));
      }
      let B, ve = 0;
      const be = V - z + 1;
      let Ae = !1, $e = 0;
      const Rt = new Array(be);
      for (v = 0; v < be; v++) Rt[v] = 0;
      for (v = $; v <= O; v++) {
        const ue = a[v];
        if (ve >= be) {
          ot(ue, g, k, !0);
          continue;
        }
        let Ie;
        if (ue.key != null)
          Ie = Y.get(ue.key);
        else
          for (B = z; B <= V; B++)
            if (Rt[B - z] === 0 && zt(ue, u[B])) {
              Ie = B;
              break;
            }
        Ie === void 0 ? ot(ue, g, k, !0) : (Rt[Ie - z] = v + 1, Ie >= $e ? $e = Ie : Ae = !0, C(
          ue,
          u[Ie],
          m,
          null,
          g,
          k,
          N,
          x,
          w
        ), ve++);
      }
      const nn = Ae ? yl(Rt) : Vt;
      for (B = nn.length - 1, v = be - 1; v >= 0; v--) {
        const ue = z + v, Ie = u[ue], sn = ue + 1 < T ? u[ue + 1].el : y;
        Rt[v] === 0 ? C(
          null,
          Ie,
          m,
          sn,
          g,
          k,
          N,
          x,
          w
        ) : Ae && (B < 0 || v !== nn[B] ? _t(Ie, m, sn, 2) : B--);
      }
    }
  }, _t = (a, u, m, y, g = null) => {
    const { el: k, type: N, transition: x, children: w, shapeFlag: v } = a;
    if (v & 6) {
      _t(a.component.subTree, u, m, y);
      return;
    }
    if (v & 128) {
      a.suspense.move(u, m, y);
      return;
    }
    if (v & 64) {
      N.move(a, u, m, It);
      return;
    }
    if (N === Oe) {
      r(k, u, m);
      for (let O = 0; O < w.length; O++)
        _t(w[O], u, m, y);
      r(a.anchor, u, m);
      return;
    }
    if (N === _o) {
      ye(a, u, m);
      return;
    }
    if (y !== 2 && v & 1 && x)
      if (y === 0)
        x.beforeEnter(k), r(k, u, m), _e(() => x.enter(k), g);
      else {
        const { leave: O, delayLeave: V, afterLeave: $ } = x, z = () => {
          a.ctx.isUnmounted ? n(k) : r(k, u, m);
        }, Y = () => {
          O(k, () => {
            z(), $ && $();
          });
        };
        V ? V(k, z, Y) : Y();
      }
    else
      r(k, u, m);
  }, ot = (a, u, m, y = !1, g = !1) => {
    const {
      type: k,
      props: N,
      ref: x,
      children: w,
      dynamicChildren: v,
      shapeFlag: T,
      patchFlag: O,
      dirs: V,
      cacheIndex: $
    } = a;
    if (O === -2 && (g = !1), x != null && (Te(), Po(x, null, m, a, !0), Me()), $ != null && (u.renderCache[$] = void 0), T & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const z = T & 1 && V, Y = !Jt(a);
    let B;
    if (Y && (B = N && N.onVnodeBeforeUnmount) && Re(B, u, a), T & 6)
      ms(a.component, m, y);
    else {
      if (T & 128) {
        a.suspense.unmount(m, y);
        return;
      }
      z && dt(a, null, u, "beforeUnmount"), T & 64 ? a.type.remove(
        a,
        u,
        m,
        It,
        y
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== Oe || O > 0 && O & 64) ? $t(
        v,
        u,
        m,
        !1,
        !0
      ) : (k === Oe && O & 384 || !g && T & 16) && $t(w, u, m), y && er(a);
    }
    (Y && (B = N && N.onVnodeUnmounted) || z) && _e(() => {
      B && Re(B, u, a), z && dt(a, null, u, "unmounted");
    }, m);
  }, er = (a) => {
    const { type: u, el: m, anchor: y, transition: g } = a;
    if (u === Oe) {
      h.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && g && !g.persisted ? a.children.forEach((N) => {
        N.type === Ee ? n(N.el) : er(N);
      }) : ps(m, y);
      return;
    }
    if (u === _o) {
      M(a);
      return;
    }
    const k = () => {
      n(m), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (a.shapeFlag & 1 && g && !g.persisted) {
      const { leave: N, delayLeave: x } = g, w = () => N(m, k);
      x ? x(a.el, k, w) : w();
    } else
      k();
  }, ps = (a, u) => {
    let m;
    for (; a !== u; )
      m = b(a), n(a), a = m;
    n(u);
  }, ms = (a, u, m) => {
    h.NODE_ENV !== "production" && a.type.__hmrId && bc(a);
    const {
      bum: y,
      scope: g,
      job: k,
      subTree: N,
      um: x,
      m: w,
      a: v,
      parent: T,
      slots: { __: O }
    } = a;
    wn(w), wn(v), y && Nt(y), T && S(O) && O.forEach((V) => {
      T.renderCache[V] = void 0;
    }), g.stop(), k && (k.flags |= 8, ot(N, a, u, m)), x && _e(x, u), _e(() => {
      a.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), h.NODE_ENV !== "production" && xc(a);
  }, $t = (a, u, m, y = !1, g = !1, k = 0) => {
    for (let N = k; N < a.length; N++)
      ot(a[N], u, m, y, g);
  }, ao = (a) => {
    if (a.shapeFlag & 6)
      return ao(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = b(a.anchor || a.el), m = u && u[Cc];
    return m ? b(m) : u;
  };
  let tr = !1;
  const rn = (a, u, m) => {
    a == null ? u._vnode && ot(u._vnode, null, null, !0) : C(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      m
    ), u._vnode = a, tr || (tr = !0, hn(), Di(), tr = !1);
  }, It = {
    p: C,
    um: ot,
    m: _t,
    r: er,
    mt: tt,
    mc: pe,
    pc: Pe,
    pbc: et,
    n: ao,
    o: e
  };
  return {
    render: rn,
    hydrate: void 0,
    createApp: el(rn)
  };
}
function ar({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function ft({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yo(e, t, o = !1) {
  const r = e.children, n = t.children;
  if (S(r) && S(n))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let c = n[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = n[i] = it(n[i]), c.el = s.el), !o && c.patchFlag !== -2 && yo(s, c)), c.type === io && (c.el = s.el), c.type === Ee && !c.el && (c.el = s.el), h.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function yl(e) {
  const t = e.slice(), o = [0];
  let r, n, i, s, c;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const p = e[r];
    if (p !== 0) {
      if (n = o[o.length - 1], e[n] < p) {
        t[r] = n, o.push(r);
        continue;
      }
      for (i = 0, s = o.length - 1; i < s; )
        c = i + s >> 1, e[o[c]] < p ? i = c + 1 : s = c;
      p < e[o[i]] && (i > 0 && (t[r] = o[i - 1]), o[i] = r);
    }
  }
  for (i = o.length, s = o[i - 1]; i-- > 0; )
    o[i] = s, s = t[s];
  return o;
}
function Gi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gi(t);
}
function wn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vl = Symbol.for("v-scx"), _l = () => {
  {
    const e = ko(vl);
    return e || h.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function vo(e, t, o) {
  return h.NODE_ENV !== "production" && !P(t) && E(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Qi(e, t, o);
}
function Qi(e, t, o = U) {
  const { immediate: r, deep: n, flush: i, once: s } = o;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = Q({}, o);
  h.NODE_ENV !== "production" && (c.onWarn = E);
  const l = t && r || !t && i !== "post";
  let p;
  if (eo) {
    if (i === "sync") {
      const _ = _l();
      p = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!l) {
      const _ = () => {
      };
      return _.stop = re, _.resume = re, _.pause = re, _;
    }
  }
  const f = ie;
  c.call = (_, D, C) => qe(_, f, D, C);
  let d = !1;
  i === "post" ? c.scheduler = (_) => {
    _e(_, f && f.suspense);
  } : i !== "sync" && (d = !0, c.scheduler = (_, D) => {
    D ? _() : Ko(_);
  }), c.augmentJob = (_) => {
    t && (_.flags |= 4), d && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const b = cc(e, t, c);
  return eo && (p ? p.push(b) : l && b()), b;
}
function wl(e, t, o) {
  const r = this.proxy, n = G(e) ? e.includes(".") ? Zi(r, e) : () => r[e] : e.bind(r, r);
  let i;
  P(t) ? i = t : (i = t.handler, o = t);
  const s = so(this), c = Qi(n, i.bind(r), o);
  return s(), c;
}
function Zi(e, t) {
  const o = t.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < o.length && r; n++)
      r = r[o[n]];
    return r;
  };
}
const xl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ke(t)}Modifiers`] || e[`${we(t)}Modifiers`];
function El(e, t, ...o) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || U;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [d]
    } = e;
    if (f)
      if (!(t in f))
        (!d || !(ht(ke(t)) in d)) && E(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ht(ke(t))}" prop.`
        );
      else {
        const b = f[t];
        P(b) && (b(...o) || E(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let n = o;
  const i = t.startsWith("update:"), s = i && xl(r, t.slice(7));
  if (s && (s.trim && (n = o.map((f) => G(f) ? f.trim() : f)), s.number && (n = o.map(pr))), h.NODE_ENV !== "production" && Oc(e, t, n), h.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && r[ht(f)] && E(
      `Event "${f}" is emitted in component ${Qo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${we(
        t
      )}" instead of "${t}".`
    );
  }
  let c, l = r[c = ht(t)] || // also try camelCase event handler (#2249)
  r[c = ht(ke(t))];
  !l && i && (l = r[c = ht(we(t))]), l && qe(
    l,
    e,
    6,
    n
  );
  const p = r[c + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, qe(
      p,
      e,
      6,
      n
    );
  }
}
function es(e, t, o = !1) {
  const r = t.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const i = e.emits;
  let s = {}, c = !1;
  if (!P(e)) {
    const l = (p) => {
      const f = es(p, t, !0);
      f && (c = !0, Q(s, f));
    };
    !o && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !c ? (J(e) && r.set(e, null), null) : (S(i) ? i.forEach((l) => s[l] = null) : Q(s, i), J(e) && r.set(e, s), s);
}
function Yo(e, t) {
  return !e || !to(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, we(t)) || H(e, t));
}
let Or = !1;
function Io() {
  Or = !0;
}
function xn(e) {
  const {
    type: t,
    vnode: o,
    proxy: r,
    withProxy: n,
    propsOptions: [i],
    slots: s,
    attrs: c,
    emit: l,
    render: p,
    renderCache: f,
    props: d,
    data: b,
    setupState: _,
    ctx: D,
    inheritAttrs: C
  } = e, I = Mo(e);
  let A, q;
  h.NODE_ENV !== "production" && (Or = !1);
  try {
    if (o.shapeFlag & 4) {
      const M = n || r, ne = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(M, {
        get(Ne, ce, pe) {
          return E(
            `Property '${String(
              ce
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ne, ce, pe);
        }
      }) : M;
      A = Ve(
        p.call(
          ne,
          M,
          f,
          h.NODE_ENV !== "production" ? Le(d) : d,
          _,
          b,
          D
        )
      ), q = c;
    } else {
      const M = t;
      h.NODE_ENV !== "production" && c === d && Io(), A = Ve(
        M.length > 1 ? M(
          h.NODE_ENV !== "production" ? Le(d) : d,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Io(), Le(c);
            },
            slots: s,
            emit: l
          } : { attrs: c, slots: s, emit: l }
        ) : M(
          h.NODE_ENV !== "production" ? Le(d) : d,
          null
        )
      ), q = t.props ? c : Nl(c);
    }
  } catch (M) {
    Yt.length = 0, ro(M, e, 1), A = Ue(Ee);
  }
  let L = A, ye;
  if (h.NODE_ENV !== "production" && A.patchFlag > 0 && A.patchFlag & 2048 && ([L, ye] = ts(A)), q && C !== !1) {
    const M = Object.keys(q), { shapeFlag: ne } = L;
    if (M.length) {
      if (ne & 7)
        i && M.some(No) && (q = Ol(
          q,
          i
        )), L = lt(L, q, !1, !0);
      else if (h.NODE_ENV !== "production" && !Or && L.type !== Ee) {
        const Ne = Object.keys(c), ce = [], pe = [];
        for (let Je = 0, et = Ne.length; Je < et; Je++) {
          const Ce = Ne[Je];
          to(Ce) ? No(Ce) || ce.push(Ce[2].toLowerCase() + Ce.slice(3)) : pe.push(Ce);
        }
        pe.length && E(
          `Extraneous non-props attributes (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ce.length && E(
          `Extraneous non-emits event listeners (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return o.dirs && (h.NODE_ENV !== "production" && !En(L) && E(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = lt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(o.dirs) : o.dirs), o.transition && (h.NODE_ENV !== "production" && !En(L) && E(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Br(L, o.transition)), h.NODE_ENV !== "production" && ye ? ye(L) : A = L, Mo(I), A;
}
const ts = (e) => {
  const t = e.children, o = e.dynamicChildren, r = Xr(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return ts(r);
  } else return [e, void 0];
  const n = t.indexOf(r), i = o ? o.indexOf(r) : -1, s = (c) => {
    t[n] = c, o && (i > -1 ? o[i] = c : c.patchFlag > 0 && (e.dynamicChildren = [...o, c]));
  };
  return [Ve(r), s];
};
function Xr(e, t = !0) {
  let o;
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (Xo(n)) {
      if (n.type !== Ee || n.children === "v-if") {
        if (o)
          return;
        if (o = n, h.NODE_ENV !== "production" && t && o.patchFlag > 0 && o.patchFlag & 2048)
          return Xr(o.children);
      }
    } else
      return;
  }
  return o;
}
const Nl = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || to(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Ol = (e, t) => {
  const o = {};
  for (const r in e)
    (!No(r) || !(r.slice(9) in t)) && (o[r] = e[r]);
  return o;
}, En = (e) => e.shapeFlag & 7 || e.type === Ee;
function Dl(e, t, o) {
  const { props: r, children: n, component: i } = e, { props: s, children: c, patchFlag: l } = t, p = i.emitsOptions;
  if (h.NODE_ENV !== "production" && (n || c) && We || t.dirs || t.transition)
    return !0;
  if (o && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Nn(r, s, p) : !!s;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let d = 0; d < f.length; d++) {
        const b = f[d];
        if (s[b] !== r[b] && !Yo(p, b))
          return !0;
      }
    }
  } else
    return (n || c) && (!c || !c.$stable) ? !0 : r === s ? !1 : r ? s ? Nn(r, s, p) : !0 : !!s;
  return !1;
}
function Nn(e, t, o) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    if (t[i] !== e[i] && !Yo(o, i))
      return !0;
  }
  return !1;
}
function Cl({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const os = (e) => e.__isSuspense;
function Vl(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : Oi(e);
}
const Oe = Symbol.for("v-fgt"), io = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), _o = Symbol.for("v-stc"), Yt = [];
let xe = null;
function Z(e = !1) {
  Yt.push(xe = e ? null : []);
}
function Sl() {
  Yt.pop(), xe = Yt[Yt.length - 1] || null;
}
let Zt = 1;
function On(e, t = !1) {
  Zt += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function rs(e) {
  return e.dynamicChildren = Zt > 0 ? xe || Vt : null, Sl(), Zt > 0 && xe && xe.push(e), e;
}
function te(e, t, o, r, n, i) {
  return rs(
    K(
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
function Gr(e, t, o, r, n) {
  return rs(
    Ue(
      e,
      t,
      o,
      r,
      n,
      !0
    )
  );
}
function Xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const o = go.get(t.type);
    if (o && o.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Tl = (...e) => is(
  ...e
), ns = ({ key: e }) => e ?? null, wo = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || ee(e) || P(e) ? { i: ae, r: e, k: t, f: !!o } : e : null);
function K(e, t = null, o = null, r = 0, n = null, i = e === Oe ? 0 : 1, s = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ns(t),
    ref: t && wo(t),
    scopeId: Pi,
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
    ctx: ae
  };
  return c ? (Qr(l, o), i & 128 && e.normalize(l)) : o && (l.shapeFlag |= G(o) ? 8 : 16), h.NODE_ENV !== "production" && l.key !== l.key && E("VNode created with invalid key (NaN). VNode type:", l.type), Zt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && xe.push(l), l;
}
const Ue = h.NODE_ENV !== "production" ? Tl : is;
function is(e, t = null, o = null, r = 0, n = null, i = !1) {
  if ((!e || e === Wc) && (h.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = Ee), Xo(e)) {
    const c = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Qr(c, o), Zt > 0 && !i && xe && (c.shapeFlag & 6 ? xe[xe.indexOf(e)] = c : xe.push(c)), c.patchFlag = -2, c;
  }
  if (us(e) && (e = e.__vccOpts), t) {
    t = Ml(t);
    let { class: c, style: l } = t;
    c && !G(c) && (t.class = Mt(c)), J(l) && (Do(l) && !S(l) && (l = Q({}, l)), t.style = Ir(l));
  }
  const s = G(e) ? 1 : os(e) ? 128 : Vc(e) ? 64 : J(e) ? 4 : P(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && s & 4 && Do(e) && (e = R(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), K(
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
function Ml(e) {
  return e ? Do(e) || Bi(e) ? Q({}, e) : e : null;
}
function lt(e, t, o = !1, r = !1) {
  const { props: n, ref: i, patchFlag: s, children: c, transition: l } = e, p = t ? Pl(n || {}, t) : n, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && ns(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? S(i) ? i.concat(wo(t)) : [i, wo(t)] : wo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && s === -1 && S(c) ? c.map(ss) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && Br(
    f,
    l.clone(f)
  ), f;
}
function ss(e) {
  const t = lt(e);
  return S(e.children) && (t.children = e.children.map(ss)), t;
}
function Dr(e = " ", t = 0) {
  return Ue(io, null, e, t);
}
function Ct(e = "", t = !1) {
  return t ? (Z(), Gr(Ee, null, e)) : Ue(Ee, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Ue(Ee) : S(e) ? Ue(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xo(e) ? it(e) : Ue(io, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function Qr(e, t) {
  let o = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (S(t))
    o = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), Qr(e, n()), n._c && (n._d = !0));
      return;
    } else {
      o = 32;
      const n = t._;
      !n && !Bi(t) ? t._ctx = ae : n === 3 && ae && (ae.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: ae }, o = 32) : (t = String(t), r & 64 ? (o = 16, t = [Dr(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function Pl(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (const n in r)
      if (n === "class")
        t.class !== r.class && (t.class = Mt([t.class, r.class]));
      else if (n === "style")
        t.style = Ir([t.style, r.style]);
      else if (to(n)) {
        const i = t[n], s = r[n];
        s && i !== s && !(S(i) && i.includes(s)) && (t[n] = i ? [].concat(i, s) : s);
      } else n !== "" && (t[n] = r[n]);
  }
  return t;
}
function Re(e, t, o, r = null) {
  qe(e, t, 7, [
    o,
    r
  ]);
}
const Al = Li();
let $l = 0;
function Il(e, t, o) {
  const r = e.type, n = (t ? t.appContext : e.appContext) || Al, i = {
    uid: $l++,
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
    scope: new Ps(
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
    propsOptions: qi(r, n),
    emitsOptions: es(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
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
  return h.NODE_ENV !== "production" ? i.ctx = Uc(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = El.bind(null, i), e.ce && e.ce(i), i;
}
let ie = null;
const Rl = () => ie || ae;
let Ro, Cr;
{
  const e = oo(), t = (o, r) => {
    let n;
    return (n = e[o]) || (n = e[o] = []), n.push(r), (i) => {
      n.length > 1 ? n.forEach((s) => s(i)) : n[0](i);
    };
  };
  Ro = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => ie = o
  ), Cr = t(
    "__VUE_SSR_SETTERS__",
    (o) => eo = o
  );
}
const so = (e) => {
  const t = ie;
  return Ro(e), e.scope.on(), () => {
    e.scope.off(), Ro(t);
  };
}, Dn = () => {
  ie && ie.scope.off(), Ro(null);
}, jl = /* @__PURE__ */ Qe("slot,component");
function Vr(e, { isNativeTag: t }) {
  (jl(e) || t(e)) && E(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function cs(e) {
  return e.vnode.shapeFlag & 4;
}
let eo = !1;
function Fl(e, t = !1, o = !1) {
  t && Cr(t);
  const { props: r, children: n } = e.vnode, i = cs(e);
  ol(e, r, i, t), hl(e, n, o || t);
  const s = i ? zl(e, t) : void 0;
  return t && Cr(!1), s;
}
function zl(e, t) {
  var o;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && Vr(r.name, e.appContext.config), r.components) {
      const i = Object.keys(r.components);
      for (let s = 0; s < i.length; s++)
        Vr(i[s], e.appContext.config);
    }
    if (r.directives) {
      const i = Object.keys(r.directives);
      for (let s = 0; s < i.length; s++)
        Ai(i[s]);
    }
    r.compilerOptions && Hl() && E(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Fi), h.NODE_ENV !== "production" && Bc(e);
  const { setup: n } = r;
  if (n) {
    Te();
    const i = e.setupContext = n.length > 1 ? Wl(e) : null, s = so(e), c = Pt(
      n,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? Le(e.props) : e.props,
        i
      ]
    ), l = Pr(c);
    if (Me(), s(), (l || e.sp) && !Jt(e) && $i(e), l) {
      if (c.then(Dn, Dn), t)
        return c.then((p) => {
          Cn(e, p, t);
        }).catch((p) => {
          ro(p, e, 0);
        });
      if (e.asyncDep = c, h.NODE_ENV !== "production" && !e.suspense) {
        const p = (o = r.name) != null ? o : "Anonymous";
        E(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Cn(e, c, t);
  } else
    ls(e, t);
}
function Cn(e, t, o) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) ? (h.NODE_ENV !== "production" && Xo(t) && E(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = _i(t), h.NODE_ENV !== "production" && Kc(e)) : h.NODE_ENV !== "production" && t !== void 0 && E(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ls(e, o);
}
const Hl = () => !0;
function ls(e, t, o) {
  const r = e.type;
  e.render || (e.render = r.render || re);
  {
    const n = so(e);
    Te();
    try {
      Jc(e);
    } finally {
      Me(), n();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === re && !t && (r.template ? E(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : E("Component is missing template or render function: ", r));
}
const Vn = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Io(), oe(e, "get", ""), e[t];
  },
  set() {
    return E("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return E("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return oe(e, "get", ""), e[t];
  }
};
function Ll(e) {
  return new Proxy(e.slots, {
    get(t, o) {
      return oe(e, "get", "$slots"), t[o];
    }
  });
}
function Wl(e) {
  const t = (o) => {
    if (h.NODE_ENV !== "production" && (e.exposed && E("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (S(o) ? r = "array" : ee(o) && (r = "ref")), r !== "object" && E(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = o || {};
  };
  if (h.NODE_ENV !== "production") {
    let o, r;
    return Object.freeze({
      get attrs() {
        return o || (o = new Proxy(e.attrs, Vn));
      },
      get slots() {
        return r || (r = Ll(e));
      },
      get emit() {
        return (n, ...i) => e.emit(n, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Vn),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Go(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_i(ec(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in yt)
        return yt[o](e);
    },
    has(t, o) {
      return o in t || o in yt;
    }
  })) : e.proxy;
}
const Ul = /(?:^|[-_])(\w)/g, Bl = (e) => e.replace(Ul, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function as(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qo(e, t, o = !1) {
  let r = as(t);
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
  return r ? Bl(r) : o ? "App" : "Anonymous";
}
function us(e) {
  return P(e) && "__vccOpts" in e;
}
const jo = (e, t) => {
  const o = ic(e, t, eo);
  if (h.NODE_ENV !== "production") {
    const r = Rl();
    r && r.appContext.config.warnRecursiveComputed && (o._warnRecursive = !0);
  }
  return o;
};
function Kl() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, o = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, n = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!J(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (ee(d)) {
        Te();
        const b = d.value;
        return Me(), [
          "div",
          {},
          ["span", e, f(d)],
          "<",
          c(b),
          ">"
        ];
      } else {
        if (gt(d))
          return [
            "div",
            {},
            ["span", e, he(d) ? "ShallowReactive" : "Reactive"],
            "<",
            c(d),
            `>${Ke(d) ? " (readonly)" : ""}`
          ];
        if (Ke(d))
          return [
            "div",
            {},
            ["span", e, he(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(d),
            ">"
          ];
      }
      return null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const b = [];
    d.type.props && d.props && b.push(s("props", R(d.props))), d.setupState !== U && b.push(s("setup", d.setupState)), d.data !== U && b.push(s("data", R(d.data)));
    const _ = l(d, "computed");
    _ && b.push(s("computed", _));
    const D = l(d, "inject");
    return D && b.push(s("injected", D)), b.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), b;
  }
  function s(d, b) {
    return b = Q({}, b), Object.keys(b).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(b).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          c(b[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(d, b = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", o, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : J(d) ? ["object", { object: b ? R(d) : d }] : ["span", o, String(d)];
  }
  function l(d, b) {
    const _ = d.type;
    if (P(_))
      return;
    const D = {};
    for (const C in d.ctx)
      p(_, C, b) && (D[C] = d.ctx[C]);
    return D;
  }
  function p(d, b, _) {
    const D = d[_];
    if (S(D) && D.includes(b) || J(D) && b in D || d.extends && p(d.extends, b, _) || d.mixins && d.mixins.some((C) => p(C, b, _)))
      return !0;
  }
  function f(d) {
    return he(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
const Sn = "3.5.14", De = h.NODE_ENV !== "production" ? E : re;
var le = {};
let Sr;
const Tn = typeof window < "u" && window.trustedTypes;
if (Tn)
  try {
    Sr = /* @__PURE__ */ Tn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    le.NODE_ENV !== "production" && De(`Error creating trusted types policy: ${e}`);
  }
const ds = Sr ? (e) => Sr.createHTML(e) : (e) => e, ql = "http://www.w3.org/2000/svg", Jl = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, Mn = Xe && /* @__PURE__ */ Xe.createElement("template"), Yl = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, r) => {
    const n = t === "svg" ? Xe.createElementNS(ql, e) : t === "mathml" ? Xe.createElementNS(Jl, e) : o ? Xe.createElement(e, { is: o }) : Xe.createElement(e);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
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
      Mn.innerHTML = ds(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Mn.content;
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
}, Xl = Symbol("_vtc");
function Gl(e, t, o) {
  const r = e[Xl];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Pn = Symbol("_vod"), Ql = Symbol("_vsh"), Zl = Symbol(le.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ea = /(^|;)\s*display\s*:/;
function ta(e, t, o) {
  const r = e.style, n = G(o);
  let i = !1;
  if (o && !n) {
    if (t)
      if (G(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          o[c] == null && xo(r, c, "");
        }
      else
        for (const s in t)
          o[s] == null && xo(r, s, "");
    for (const s in o)
      s === "display" && (i = !0), xo(r, s, o[s]);
  } else if (n) {
    if (t !== o) {
      const s = r[Zl];
      s && (o += ";" + s), r.cssText = o, i = ea.test(o);
    }
  } else t && e.removeAttribute("style");
  Pn in e && (e[Pn] = i ? r.display : "", e[Ql] && (r.display = "none"));
}
const oa = /[^\\];\s*$/, An = /\s*!important$/;
function xo(e, t, o) {
  if (S(o))
    o.forEach((r) => xo(e, t, r));
  else if (o == null && (o = ""), le.NODE_ENV !== "production" && oa.test(o) && De(
    `Unexpected semicolon at the end of '${t}' style value: '${o}'`
  ), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const r = ra(e, t);
    An.test(o) ? e.setProperty(
      we(r),
      o.replace(An, ""),
      "important"
    ) : e[r] = o;
  }
}
const $n = ["Webkit", "Moz", "ms"], ur = {};
function ra(e, t) {
  const o = ur[t];
  if (o)
    return o;
  let r = ke(t);
  if (r !== "filter" && r in e)
    return ur[t] = r;
  r = Lo(r);
  for (let n = 0; n < $n.length; n++) {
    const i = $n[n] + r;
    if (i in e)
      return ur[t] = i;
  }
  return t;
}
const In = "http://www.w3.org/1999/xlink";
function Rn(e, t, o, r, n, i = Ms(t)) {
  r && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(In, t.slice(6, t.length)) : e.setAttributeNS(In, t, o) : o == null || i && !ei(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ut(o) ? String(o) : o
  );
}
function jn(e, t, o, r, n) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? ds(o) : o);
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
    c === "boolean" ? o = ei(o) : o == null && c === "string" ? (o = "", s = !0) : c === "number" && (o = 0, s = !0);
  }
  try {
    e[t] = o;
  } catch (c) {
    le.NODE_ENV !== "production" && !s && De(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${o} is invalid.`,
      c
    );
  }
  s && e.removeAttribute(n || t);
}
function Dt(e, t, o, r) {
  e.addEventListener(t, o, r);
}
function na(e, t, o, r) {
  e.removeEventListener(t, o, r);
}
const Fn = Symbol("_vei");
function ia(e, t, o, r, n = null) {
  const i = e[Fn] || (e[Fn] = {}), s = i[t];
  if (r && s)
    s.value = le.NODE_ENV !== "production" ? Hn(r, t) : r;
  else {
    const [c, l] = sa(t);
    if (r) {
      const p = i[t] = aa(
        le.NODE_ENV !== "production" ? Hn(r, t) : r,
        n
      );
      Dt(e, c, p, l);
    } else s && (na(e, c, s, l), i[t] = void 0);
  }
}
const zn = /(?:Once|Passive|Capture)$/;
function sa(e) {
  let t;
  if (zn.test(e)) {
    t = {};
    let r;
    for (; r = e.match(zn); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : we(e.slice(2)), t];
}
let dr = 0;
const ca = /* @__PURE__ */ Promise.resolve(), la = () => dr || (ca.then(() => dr = 0), dr = Date.now());
function aa(e, t) {
  const o = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= o.attached)
      return;
    qe(
      ua(r, o.value),
      t,
      5,
      [r]
    );
  };
  return o.value = e, o.attached = la(), o;
}
function Hn(e, t) {
  return P(e) || S(e) ? e : (De(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), re);
}
function ua(e, t) {
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
const Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, da = (e, t, o, r, n, i) => {
  const s = n === "svg";
  t === "class" ? Gl(e, r, s) : t === "style" ? ta(e, o, r) : to(t) ? No(t) || ia(e, t, o, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : fa(e, t, r, s)) ? (jn(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rn(e, t, r, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(r)) ? jn(e, ke(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Rn(e, t, r, s));
};
function fa(e, t, o, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ln(t) && P(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Ln(t) && G(o) ? !1 : t in e;
}
const Wn = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ha(e, t, o) {
  const r = /* @__PURE__ */ qo(e, t);
  zo(r) && Q(r, t);
  class n extends Zr {
    constructor(s) {
      super(r, s, o);
    }
  }
  return n.def = r, n;
}
const pa = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Zr extends pa {
  constructor(t, o = {}, r = qn) {
    super(), this._def = t, this._props = o, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== qn ? this._root = this.shadowRoot : (le.NODE_ENV !== "production" && this.shadowRoot && De(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Zr) {
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
    this._connected = !1, Ei(() => {
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
          const p = i[l];
          (p === Number || p && p.type === Number) && (l in this._props && (this._props[l] = ln(this._props[l])), (c || (c = /* @__PURE__ */ Object.create(null)))[ke(l)] = !0);
        }
      this._numberProps = c, n && this._resolveProps(r), this.shadowRoot ? this._applyStyles(s) : le.NODE_ENV !== "production" && s && De(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, o = this._def.__asyncLoader;
    o ? this._pendingResolve = o().then(
      (r) => t(this._def = r, !0)
    ) : t(this._def);
  }
  _mount(t) {
    le.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const o = this._instance && this._instance.exposed;
    if (o)
      for (const r in o)
        H(this, r) ? le.NODE_ENV !== "production" && De(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => vi(o[r])
        });
  }
  _resolveProps(t) {
    const { props: o } = t, r = S(o) ? o : Object.keys(o || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && r.includes(n) && this._setProp(n, this[n]);
    for (const n of r.map(ke))
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
    let r = o ? this.getAttribute(t) : Wn;
    const n = ke(t);
    o && this._numberProps && this._numberProps[n] && (r = ln(r)), this._setProp(n, r, !1, !0);
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
    if (o !== this._props[t] && (o === Wn ? delete this._props[t] : (this._props[t] = o, t === "key" && this._app && (this._app._ceVNode.key = o)), n && this._instance && this._update(), r)) {
      const i = this._ob;
      i && i.disconnect(), o === !0 ? this.setAttribute(we(t), "") : typeof o == "string" || typeof o == "number" ? this.setAttribute(we(t), o + "") : o || this.removeAttribute(we(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    ga(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const o = Ue(this._def, Q(t, this._props));
    return this._instance || (o.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, le.NODE_ENV !== "production" && (r.ceReload = (i) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const n = (i, s) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            zo(s[0]) ? Q({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      r.emit = (i, ...s) => {
        n(i, s), we(i) !== i && n(we(i), s);
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
      if (r && i.setAttribute("nonce", r), i.textContent = t[n], this.shadowRoot.prepend(i), le.NODE_ENV !== "production")
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
            const p = o + "-s", f = document.createTreeWalker(l, 1);
            l.setAttribute(p, "");
            let d;
            for (; d = f.nextNode(); )
              d.setAttribute(p, "");
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
    if (le.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const o = this._childStyles.get(t.__hmrId);
      o && (o.forEach((r) => this._root.removeChild(r)), o.length = 0);
    }
  }
}
const Un = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return S(t) ? (o) => Nt(t, o) : t;
};
function ma(e) {
  e.target.composing = !0;
}
function Bn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fr = Symbol("_assign"), Tr = {
  created(e, { modifiers: { lazy: t, trim: o, number: r } }, n) {
    e[fr] = Un(n);
    const i = r || n.props && n.props.type === "number";
    Dt(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let c = e.value;
      o && (c = c.trim()), i && (c = pr(c)), e[fr](c);
    }), o && Dt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Dt(e, "compositionstart", ma), Dt(e, "compositionend", Bn), Dt(e, "change", Bn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: r, trim: n, number: i } }, s) {
    if (e[fr] = Un(s), e.composing) return;
    const c = (i || e.type === "number") && !/^0\d/.test(e.value) ? pr(e.value) : e.value, l = t ?? "";
    c !== l && (document.activeElement === e && e.type !== "range" && (r && t === o || n && e.value.trim() === l) || (e.value = l));
  }
}, ba = /* @__PURE__ */ Q({ patchProp: da }, Yl);
let Kn;
function fs() {
  return Kn || (Kn = bl(ba));
}
const ga = (...e) => {
  fs().render(...e);
}, qn = (...e) => {
  const t = fs().createApp(...e);
  le.NODE_ENV !== "production" && (ya(t), va(t));
  const { mount: o } = t;
  return t.mount = (r) => {
    const n = _a(r);
    if (!n) return;
    const i = t._component;
    !P(i) && !i.render && !i.template && (i.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = o(n, !1, ka(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
};
function ka(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ya(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Cs(t) || Vs(t) || Ss(t),
    writable: !1
  });
}
function va(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        De(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const o = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return De(r), o;
      },
      set() {
        De(r);
      }
    });
  }
}
function _a(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return le.NODE_ENV !== "production" && !t && De(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return le.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && De(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var wa = {};
function xa() {
  Kl();
}
wa.NODE_ENV !== "production" && xa();
async function co(e, t = {}, o, r) {
  const n = "http://localhost:3002/public";
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
async function Ea(e, t) {
  return co("/identify", {
    method: "POST",
    body: JSON.stringify(t)
  }, e, t);
}
async function Na(e, t) {
  const o = t?.id;
  return co(
    `/feedback${o ? `?userId=${o}` : ""}`,
    {},
    e,
    t
  );
}
async function Oa(e, t, o) {
  return co(
    "/feedback",
    {
      method: "POST",
      body: JSON.stringify(e)
    },
    t,
    o
  );
}
async function Da(e, t, o) {
  const r = o?.id;
  return co(
    `/feedback/${e}/vote`,
    {
      method: "POST",
      body: JSON.stringify({
        userId: r
      })
    },
    t,
    o
  );
}
async function Ca(e, t, o, r) {
  const n = r?.id;
  return co(
    `/feedback/${e}/comment`,
    {
      method: "POST",
      body: JSON.stringify({
        comment: t,
        userId: n
      })
    },
    o,
    r
  );
}
const po = 43200, Jn = 1440, Yn = Symbol.for("constructDateFrom");
function en(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Yn in e ? e[Yn](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function at(e, t) {
  return en(e, e);
}
let Va = {};
function Sa() {
  return Va;
}
function Xn(e) {
  const t = at(e), o = new Date(
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
function tn(e, ...t) {
  const o = en.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(o);
}
function Eo(e, t) {
  const o = +at(e) - +at(t);
  return o < 0 ? -1 : o > 0 ? 1 : o;
}
function Ta(e) {
  return en(e, Date.now());
}
function Ma(e, t, o) {
  const [r, n] = tn(
    o?.in,
    e,
    t
  ), i = r.getFullYear() - n.getFullYear(), s = r.getMonth() - n.getMonth();
  return i * 12 + s;
}
function Pa(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function Aa(e, t) {
  return +at(e) - +at(t);
}
function $a(e, t) {
  const o = at(e);
  return o.setHours(23, 59, 59, 999), o;
}
function Ia(e, t) {
  const o = at(e), r = o.getMonth();
  return o.setFullYear(o.getFullYear(), r + 1, 0), o.setHours(23, 59, 59, 999), o;
}
function Ra(e, t) {
  const o = at(e);
  return +$a(o) == +Ia(o);
}
function ja(e, t, o) {
  const [r, n, i] = tn(
    o?.in,
    e,
    e,
    t
  ), s = Eo(n, i), c = Math.abs(
    Ma(n, i)
  );
  if (c < 1) return 0;
  n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - s * c);
  let l = Eo(n, i) === -s;
  Ra(r) && c === 1 && Eo(r, i) === 1 && (l = !1);
  const p = s * (c - +l);
  return p === 0 ? 0 : p;
}
function Fa(e, t, o) {
  const r = Aa(e, t) / 1e3;
  return Pa(o?.roundingMethod)(r);
}
const za = {
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
}, Ha = (e, t, o) => {
  let r;
  const n = za[e];
  return typeof n == "string" ? r = n : t === 1 ? r = n.one : r = n.other.replace("{{count}}", t.toString()), o?.addSuffix ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r;
};
function hr(e) {
  return (t = {}) => {
    const o = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[o] || e.formats[e.defaultWidth];
  };
}
const La = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Wa = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ua = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ba = {
  date: hr({
    formats: La,
    defaultWidth: "full"
  }),
  time: hr({
    formats: Wa,
    defaultWidth: "full"
  }),
  dateTime: hr({
    formats: Ua,
    defaultWidth: "full"
  })
}, Ka = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qa = (e, t, o, r) => Ka[e];
function Ht(e) {
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
const Ja = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ya = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xa = {
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
}, Ga = {
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
}, Qa = {
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
}, Za = {
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
}, eu = (e, t) => {
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
}, tu = {
  ordinalNumber: eu,
  era: Ht({
    values: Ja,
    defaultWidth: "wide"
  }),
  quarter: Ht({
    values: Ya,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ht({
    values: Xa,
    defaultWidth: "wide"
  }),
  day: Ht({
    values: Ga,
    defaultWidth: "wide"
  }),
  dayPeriod: Ht({
    values: Qa,
    defaultWidth: "wide",
    formattingValues: Za,
    defaultFormattingWidth: "wide"
  })
};
function Lt(e) {
  return (t, o = {}) => {
    const r = o.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(n);
    if (!i)
      return null;
    const s = i[0], c = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(c) ? ru(c, (d) => d.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      ou(c, (d) => d.test(s))
    );
    let p;
    p = e.valueCallback ? e.valueCallback(l) : l, p = o.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      o.valueCallback(p)
    ) : p;
    const f = t.slice(s.length);
    return { value: p, rest: f };
  };
}
function ou(e, t) {
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o) && t(e[o]))
      return o;
}
function ru(e, t) {
  for (let o = 0; o < e.length; o++)
    if (t(e[o]))
      return o;
}
function nu(e) {
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
const iu = /^(\d+)(th|st|nd|rd)?/i, su = /\d+/i, cu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, lu = {
  any: [/^b/i, /^(a|c)/i]
}, au = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, uu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, du = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, fu = {
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
}, hu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, pu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, mu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, bu = {
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
}, gu = {
  ordinalNumber: nu({
    matchPattern: iu,
    parsePattern: su,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Lt({
    matchPatterns: cu,
    defaultMatchWidth: "wide",
    parsePatterns: lu,
    defaultParseWidth: "any"
  }),
  quarter: Lt({
    matchPatterns: au,
    defaultMatchWidth: "wide",
    parsePatterns: uu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Lt({
    matchPatterns: du,
    defaultMatchWidth: "wide",
    parsePatterns: fu,
    defaultParseWidth: "any"
  }),
  day: Lt({
    matchPatterns: hu,
    defaultMatchWidth: "wide",
    parsePatterns: pu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Lt({
    matchPatterns: mu,
    defaultMatchWidth: "any",
    parsePatterns: bu,
    defaultParseWidth: "any"
  })
}, ku = {
  code: "en-US",
  formatDistance: Ha,
  formatLong: Ba,
  formatRelative: qa,
  localize: tu,
  match: gu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function yu(e, t, o) {
  const r = Sa(), n = o?.locale ?? r.locale ?? ku, i = 2520, s = Eo(e, t);
  if (isNaN(s)) throw new RangeError("Invalid time value");
  const c = Object.assign({}, o, {
    addSuffix: o?.addSuffix,
    comparison: s
  }), [l, p] = tn(
    o?.in,
    ...s > 0 ? [t, e] : [e, t]
  ), f = Fa(p, l), d = (Xn(p) - Xn(l)) / 1e3, b = Math.round((f - d) / 60);
  let _;
  if (b < 2)
    return o?.includeSeconds ? f < 5 ? n.formatDistance("lessThanXSeconds", 5, c) : f < 10 ? n.formatDistance("lessThanXSeconds", 10, c) : f < 20 ? n.formatDistance("lessThanXSeconds", 20, c) : f < 40 ? n.formatDistance("halfAMinute", 0, c) : f < 60 ? n.formatDistance("lessThanXMinutes", 1, c) : n.formatDistance("xMinutes", 1, c) : b === 0 ? n.formatDistance("lessThanXMinutes", 1, c) : n.formatDistance("xMinutes", b, c);
  if (b < 45)
    return n.formatDistance("xMinutes", b, c);
  if (b < 90)
    return n.formatDistance("aboutXHours", 1, c);
  if (b < Jn) {
    const D = Math.round(b / 60);
    return n.formatDistance("aboutXHours", D, c);
  } else {
    if (b < i)
      return n.formatDistance("xDays", 1, c);
    if (b < po) {
      const D = Math.round(b / Jn);
      return n.formatDistance("xDays", D, c);
    } else if (b < po * 2)
      return _ = Math.round(b / po), n.formatDistance("aboutXMonths", _, c);
  }
  if (_ = ja(p, l), _ < 12) {
    const D = Math.round(b / po);
    return n.formatDistance("xMonths", D, c);
  } else {
    const D = _ % 12, C = Math.trunc(_ / 12);
    return D < 3 ? n.formatDistance("aboutXYears", C, c) : D < 9 ? n.formatDistance("overXYears", C, c) : n.formatDistance("almostXYears", C + 1, c);
  }
}
function vu(e, t) {
  return yu(e, Ta(e), t);
}
const _u = { class: "p-4 border-t border-gray-100 bg-base-200/80" }, wu = { class: "flex items-center gap-2 text-xs mb-1" }, xu = ["src"], Eu = {
  key: 1,
  class: "w-6 h-6 rounded-full bg-gray-100 inline-block"
}, Nu = { class: "pl-8 text-sm" }, Ou = {
  key: 0,
  class: "flex flex-col gap-2"
}, Du = /* @__PURE__ */ qo({
  __name: "comments",
  props: {
    feedback: { type: null },
    isReadonly: { type: Boolean }
  },
  emits: ["addComment"],
  setup(e, { emit: t }) {
    const o = t, r = rt("");
    function n() {
      o("addComment", r.value), r.value = "";
    }
    return (i, s) => (Z(), te("div", _u, [
      (Z(!0), te(Oe, null, ji(i.feedback.comments, (c) => (Z(), te("div", {
        key: c.id,
        class: "mb-4 pb-4 border-b border-gray-50 last:border-0"
      }, [
        K("div", wu, [
          c.userAvatar ? (Z(), te("img", {
            key: 0,
            src: c.userAvatar,
            alt: "User avatar",
            class: "w-6 h-6 rounded-full bg-gray-100"
          }, null, 8, xu)) : (Z(), te("span", Eu)),
          K("span", null, Fe(c.userName || "Anonymous"), 1)
        ]),
        K("div", Nu, Fe(c.content), 1)
      ]))), 128)),
      i.isReadonly ? Ct("", !0) : (Z(), te("div", Ou, [
        vr(K("textarea", {
          class: "textarea textarea-bordered text-sm w-full",
          "onUpdate:modelValue": s[0] || (s[0] = (c) => r.value = c),
          placeholder: "Add a comment..."
        }, null, 512), [
          [Tr, r.value]
        ]),
        K("button", {
          class: "btn btn-sm btn-primary self-end",
          onClick: n
        }, " Submit ")
      ]))
    ]));
  }
}), Cu = { class: "card card-border bg-base-100 shadow-sm" }, Vu = { class: "card-body p-4" }, Su = ["title"], Tu = { class: "card-title" }, Mu = { class: "pb-1" }, Pu = { class: "card-actions justify-between items-center" }, Au = { class: "flex items-center gap-2" }, $u = ["src"], Iu = {
  key: 1,
  class: "size-6 rounded-full bg-base-300 inline-block"
}, Ru = { class: "text-sm text-base-content/70 font-medium" }, ju = { class: "space-x-2" }, Fu = ["disabled"], zu = /* @__PURE__ */ qo({
  __name: "feedback",
  props: {
    feedback: { type: Object },
    isReadonly: { type: Boolean },
    currentUser: { type: [Object, null] }
  },
  emits: ["vote", "addComment"],
  setup(e, { emit: t }) {
    const o = e, r = t, n = (l, p) => {
      r("vote", l, p);
    }, i = (l) => {
      r("addComment", o.feedback.id, l);
    }, s = jo(() => o.feedback.votes.some((l) => l.userId === o.currentUser?.id));
    function c(l) {
      return vu(new Date(l), { addSuffix: !0 });
    }
    return (l, p) => (Z(), te("div", Cu, [
      K("div", Vu, [
        K("time", {
          title: l.feedback.createdAt,
          class: "text-sm text-base-content/50"
        }, Fe(c(l.feedback.createdAt)), 9, Su),
        K("h2", Tu, Fe(l.feedback.title), 1),
        K("p", Mu, Fe(l.feedback.content), 1),
        K("div", Pu, [
          K("div", Au, [
            l.feedback?.user?.avatar ? (Z(), te("img", {
              key: 0,
              src: l.feedback?.user?.avatar,
              alt: "User avatar",
              class: "size-6 rounded-full bg-base-300"
            }, null, 8, $u)) : (Z(), te("span", Iu)),
            K("span", Ru, Fe(l.feedback?.user?.name || l.feedback?.user?.email || "Anonymous"), 1)
          ]),
          K("div", ju, [
            K("button", {
              onClick: p[0] || (p[0] = (f) => l.feedback.showComments = !l.feedback.showComments),
              class: "btn btn-sm btn-outline btn-secondary"
            }, " 💬 " + Fe(l.feedback.comments.length || 0), 1),
            K("button", {
              onClick: p[1] || (p[1] = (f) => n(l.feedback.id, 1)),
              disabled: l.isReadonly,
              class: Mt(["btn btn-sm btn-secondary", { "btn-outline": !s.value }])
            }, " 👍 " + Fe(l.feedback.votes.length || 0), 11, Fu)
          ])
        ])
      ]),
      l.feedback.showComments ? (Z(), Gr(Du, {
        key: 0,
        feedback: l.feedback,
        isReadonly: l.isReadonly,
        onAddComment: i
      }, null, 8, ["feedback", "isReadonly"])) : Ct("", !0)
    ]));
  }
}), Hu = {
  "data-theme": "light",
  class: "bg-transparent font-sans text-gray-800 max-w-3xl mx-auto p-4 flex flex-col gap-4"
}, Lu = { class: "flex justify-between items-center mb-6" }, Wu = { class: "flex gap-2" }, Uu = ["disabled"], Bu = {
  key: 0,
  class: "bg-gray-50 border border-gray-200 rounded p-3 mb-4"
}, Ku = {
  key: 1,
  class: "flex flex-col gap-2 mb-6"
}, qu = ["disabled"], Ju = {
  key: 2,
  class: "bg-red-50 text-red-800 p-4 rounded mb-4 flex flex-col gap-2"
}, Yu = {
  key: 3,
  class: "text-center py-8 text-gray-500"
}, Xu = {
  key: 4,
  class: "text-center py-8 text-gray-500"
}, Gu = { key: 0 }, Qu = {
  key: 5,
  class: "flex flex-col gap-4"
}, Zu = /* @__PURE__ */ qo({
  __name: "Board",
  props: {
    projectId: { type: String },
    user: { type: [Object, null] }
  },
  setup(e) {
    const t = e, o = rt([]), r = rt(!0), n = rt(null), i = rt(""), s = rt(""), c = rt("all"), l = rt(t.user || null), p = jo(() => !!l.value), f = jo(() => !p.value);
    async function d() {
      try {
        r.value = !0, n.value = null, o.value = await Na(t.projectId, l.value);
      } catch (C) {
        n.value = C instanceof Error ? C.message : "Failed to load feedback";
      } finally {
        r.value = !1;
      }
    }
    async function b() {
      if (!(!s.value.trim() || f.value))
        try {
          const C = {
            title: i.value,
            content: s.value,
            userId: l.value?.id
          }, I = await Oa(C, t.projectId, l.value);
          o.value = [I, ...o.value], i.value = "", s.value = "";
        } catch (C) {
          n.value = C instanceof Error ? C.message : "Failed to submit feedback";
        }
    }
    async function _(C, I) {
      if (!f.value)
        try {
          const A = await Da(C, t.projectId, l.value), q = o.value.findIndex((L) => L.id === C);
          q !== -1 && (o.value[q] = {
            ...o.value[q],
            votes: A.feedback.votes,
            userVote: A.feedback.userVote
          });
        } catch (A) {
          n.value = A instanceof Error ? A.message : "Failed to vote";
        }
    }
    async function D(C, I) {
      if (!(!I.trim() || f.value))
        try {
          const A = await Ca(C, I, t.projectId, l.value), q = o.value.findIndex((L) => L.id === C);
          q !== -1 && (o.value[q] = A);
        } catch (A) {
          n.value = A instanceof Error ? A.message : "Failed to add comment";
        }
    }
    return vo(
      [() => t.projectId, () => t.user],
      async () => {
        if (t.user) {
          const C = await Ea(t.projectId, t.user);
          l.value = C.user;
        }
        d();
      },
      { immediate: !0 }
    ), (C, I) => (Z(), te("div", Hu, [
      K("div", Lu, [
        I[4] || (I[4] = K("h2", { class: "text-2xl font-semibold m-0" }, "Feedback Board", -1)),
        K("div", Wu, [
          K("button", {
            class: Mt(["btn btn-sm", c.value === "all" ? "btn-primary" : "btn-ghost"]),
            onClick: I[0] || (I[0] = (A) => c.value = "all")
          }, " All Feedback ", 2),
          f.value ? Ct("", !0) : (Z(), te("button", {
            key: 0,
            class: Mt(["btn btn-sm", c.value === "mine" ? "btn-primary" : "btn-ghost"]),
            onClick: I[1] || (I[1] = (A) => c.value = "mine"),
            disabled: f.value
          }, " My Feedback ", 10, Uu))
        ])
      ]),
      f.value ? (Z(), te("div", Bu, I[5] || (I[5] = [
        K("div", { class: "flex items-center gap-2" }, [
          K("span", { class: "text-xl" }, "ℹ️"),
          K("span", { class: "text-sm text-gray-500" }, "You're viewing in read-only mode.")
        ], -1)
      ]))) : Ct("", !0),
      f.value ? Ct("", !0) : (Z(), te("div", Ku, [
        vr(K("input", {
          type: "text",
          class: "input input-bordered w-full",
          "onUpdate:modelValue": I[2] || (I[2] = (A) => i.value = A),
          placeholder: "Title"
        }, null, 512), [
          [Tr, i.value]
        ]),
        vr(K("textarea", {
          class: "textarea textarea-bordered w-full",
          "onUpdate:modelValue": I[3] || (I[3] = (A) => s.value = A),
          placeholder: "Share your feedback or suggestions..."
        }, null, 512), [
          [Tr, s.value]
        ]),
        K("button", {
          class: "btn btn-primary self-end",
          onClick: b,
          disabled: !s.value.trim()
        }, " Submit ", 8, qu)
      ])),
      n.value ? (Z(), te("div", Ju, [
        Dr(Fe(n.value) + " ", 1),
        K("button", {
          onClick: d,
          class: "btn btn-sm btn-error self-end"
        }, "Try Again")
      ])) : r.value ? (Z(), te("div", Yu, " Loading feedback... ")) : o.value.length === 0 ? (Z(), te("div", Xu, [
        I[6] || (I[6] = Dr(" No feedback items yet. ")),
        f.value ? Ct("", !0) : (Z(), te("span", Gu, "Be the first to share your thoughts!"))
      ])) : (Z(), te("div", Qu, [
        (Z(!0), te(Oe, null, ji(o.value, (A) => (Z(), Gr(zu, {
          key: A.id,
          feedback: A,
          "is-readonly": f.value,
          "current-user": l.value,
          onVote: _,
          onAddComment: D
        }, null, 8, ["feedback", "is-readonly", "current-user"]))), 128))
      ])),
      I[7] || (I[7] = K("a", {
        class: "btn btn-primary btn-sm btn-outline",
        href: "https://pulsekit.com"
      }, " Powered by PulseKit ", -1))
    ]));
  }
}), ed = `/*! tailwindcss v4.1.7 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-x-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-800:oklch(44.4% .177 26.899);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--spacing:.25rem;--container-md:28rem;--container-3xl:48rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:where(:root),:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){:root{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}:root:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=cupcake]:checked),[data-theme=cupcake]{color-scheme:light;--color-base-100:oklch(97.788% .004 56.375);--color-base-200:oklch(93.982% .007 61.449);--color-base-300:oklch(91.586% .006 53.44);--color-base-content:oklch(23.574% .066 313.189);--color-primary:oklch(85% .138 181.071);--color-primary-content:oklch(43% .078 188.216);--color-secondary:oklch(89% .061 343.231);--color-secondary-content:oklch(45% .187 3.815);--color-accent:oklch(90% .076 70.697);--color-accent-content:oklch(47% .157 37.304);--color-neutral:oklch(27% .006 286.033);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(68% .169 237.323);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(69% .17 162.48);--color-success-content:oklch(26% .051 172.552);--color-warning:oklch(79% .184 86.047);--color-warning-content:oklch(28% .066 53.813);--color-error:oklch(64% .246 16.439);--color-error-content:oklch(27% .105 12.094);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}:root:has(input.theme-controller[value=bumblebee]:checked),[data-theme=bumblebee]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(85% .199 91.936);--color-primary-content:oklch(42% .095 57.708);--color-secondary:oklch(75% .183 55.934);--color-secondary-content:oklch(40% .123 38.172);--color-accent:oklch(0% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(37% .01 67.558);--color-neutral-content:oklch(92% .003 48.717);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(39% .09 240.876);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=emerald]:checked),[data-theme=emerald]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(35.519% .032 262.988);--color-primary:oklch(76.662% .135 153.45);--color-primary-content:oklch(33.387% .04 162.24);--color-secondary:oklch(61.302% .202 261.294);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(72.772% .149 33.2);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(35.519% .032 262.988);--color-neutral-content:oklch(98.462% .001 247.838);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=corporate]:checked),[data-theme=corporate]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(22.389% .031 278.072);--color-primary:oklch(58% .158 241.966);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(55% .046 257.417);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(60% .126 221.723);--color-info-content:oklch(100% 0 0);--color-success:oklch(62% .194 149.214);--color-success-content:oklch(100% 0 0);--color-warning:oklch(85% .199 91.936);--color-warning-content:oklch(0% 0 0);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(0% 0 0);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=synthwave]:checked),[data-theme=synthwave]{color-scheme:dark;--color-base-100:oklch(15% .09 281.288);--color-base-200:oklch(20% .09 281.288);--color-base-300:oklch(25% .09 281.288);--color-base-content:oklch(78% .115 274.713);--color-primary:oklch(71% .202 349.761);--color-primary-content:oklch(28% .109 3.907);--color-secondary:oklch(82% .111 230.318);--color-secondary-content:oklch(29% .066 243.157);--color-accent:oklch(75% .183 55.934);--color-accent-content:oklch(26% .079 36.259);--color-neutral:oklch(45% .24 277.023);--color-neutral-content:oklch(87% .065 274.039);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(77% .152 181.912);--color-success-content:oklch(27% .046 192.524);--color-warning:oklch(90% .182 98.111);--color-warning-content:oklch(42% .095 57.708);--color-error:oklch(73.7% .121 32.639);--color-error-content:oklch(23.501% .096 290.329);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=retro]:checked),[data-theme=retro]{color-scheme:light;--color-base-100:oklch(91.637% .034 90.515);--color-base-200:oklch(88.272% .049 91.774);--color-base-300:oklch(84.133% .065 90.856);--color-base-content:oklch(41% .112 45.904);--color-primary:oklch(80% .114 19.571);--color-primary-content:oklch(39% .141 25.723);--color-secondary:oklch(92% .084 155.995);--color-secondary-content:oklch(44% .119 151.328);--color-accent:oklch(68% .162 75.834);--color-accent-content:oklch(41% .112 45.904);--color-neutral:oklch(44% .011 73.639);--color-neutral-content:oklch(86% .005 56.366);--color-info:oklch(58% .158 241.966);--color-info-content:oklch(96% .059 95.617);--color-success:oklch(51% .096 186.391);--color-success-content:oklch(96% .059 95.617);--color-warning:oklch(64% .222 41.116);--color-warning-content:oklch(96% .059 95.617);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(40% .123 38.172);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=cyberpunk]:checked),[data-theme=cyberpunk]{color-scheme:light;--color-base-100:oklch(94.51% .179 104.32);--color-base-200:oklch(91.51% .179 104.32);--color-base-300:oklch(85.51% .179 104.32);--color-base-content:oklch(0% 0 0);--color-primary:oklch(74.22% .209 6.35);--color-primary-content:oklch(14.844% .041 6.35);--color-secondary:oklch(83.33% .184 204.72);--color-secondary-content:oklch(16.666% .036 204.72);--color-accent:oklch(71.86% .217 310.43);--color-accent-content:oklch(14.372% .043 310.43);--color-neutral:oklch(23.04% .065 269.31);--color-neutral-content:oklch(94.51% .179 104.32);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=valentine]:checked),[data-theme=valentine]{color-scheme:light;--color-base-100:oklch(97% .014 343.198);--color-base-200:oklch(94% .028 342.258);--color-base-300:oklch(89% .061 343.231);--color-base-content:oklch(52% .223 3.958);--color-primary:oklch(65% .241 354.308);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(62% .265 303.9);--color-secondary-content:oklch(97% .014 308.299);--color-accent:oklch(82% .111 230.318);--color-accent-content:oklch(39% .09 240.876);--color-neutral:oklch(40% .153 2.432);--color-neutral-content:oklch(89% .061 343.231);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(44% .11 240.79);--color-success:oklch(84% .143 164.978);--color-success-content:oklch(43% .095 166.913);--color-warning:oklch(75% .183 55.934);--color-warning-content:oklch(26% .079 36.259);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(97% .013 17.38);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=halloween]:checked),[data-theme=halloween]{color-scheme:dark;--color-base-100:oklch(21% .006 56.043);--color-base-200:oklch(14% .004 49.25);--color-base-300:oklch(0% 0 0);--color-base-content:oklch(84.955% 0 0);--color-primary:oklch(77.48% .204 60.62);--color-primary-content:oklch(19.693% .004 196.779);--color-secondary:oklch(45.98% .248 305.03);--color-secondary-content:oklch(89.196% .049 305.03);--color-accent:oklch(64.8% .223 136.073);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(24.371% .046 65.681);--color-neutral-content:oklch(84.874% .009 65.681);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(13.316% .031 58.318);--color-error:oklch(65.72% .199 27.33);--color-error-content:oklch(13.144% .039 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=garden]:checked),[data-theme=garden]{color-scheme:light;--color-base-100:oklch(92.951% .002 17.197);--color-base-200:oklch(86.445% .002 17.197);--color-base-300:oklch(79.938% .001 17.197);--color-base-content:oklch(16.961% .001 17.32);--color-primary:oklch(62.45% .278 3.836);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(48.495% .11 355.095);--color-secondary-content:oklch(89.699% .022 355.095);--color-accent:oklch(56.273% .054 154.39);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(24.155% .049 89.07);--color-neutral-content:oklch(92.951% .002 17.197);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=forest]:checked),[data-theme=forest]{color-scheme:dark;--color-base-100:oklch(20.84% .008 17.911);--color-base-200:oklch(18.522% .007 17.911);--color-base-300:oklch(16.203% .007 17.911);--color-base-content:oklch(83.768% .001 17.911);--color-primary:oklch(68.628% .185 148.958);--color-primary-content:oklch(0% 0 0);--color-secondary:oklch(69.776% .135 168.327);--color-secondary-content:oklch(13.955% .027 168.327);--color-accent:oklch(70.628% .119 185.713);--color-accent-content:oklch(14.125% .023 185.713);--color-neutral:oklch(30.698% .039 171.364);--color-neutral-content:oklch(86.139% .007 171.364);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=aqua]:checked),[data-theme=aqua]{color-scheme:dark;--color-base-100:oklch(37% .146 265.522);--color-base-200:oklch(28% .091 267.935);--color-base-300:oklch(22% .091 267.935);--color-base-content:oklch(90% .058 230.902);--color-primary:oklch(85.661% .144 198.645);--color-primary-content:oklch(40.124% .068 197.603);--color-secondary:oklch(60.682% .108 309.782);--color-secondary-content:oklch(96% .016 293.756);--color-accent:oklch(93.426% .102 94.555);--color-accent-content:oklch(18.685% .02 94.555);--color-neutral:oklch(27% .146 265.522);--color-neutral-content:oklch(80% .146 265.522);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(27% .077 45.635);--color-error:oklch(73.95% .19 27.33);--color-error-content:oklch(14.79% .038 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=lofi]:checked),[data-theme=lofi]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(15.906% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(21.455% .001 17.278);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(26.861% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(79.54% .103 205.9);--color-info-content:oklch(15.908% .02 205.9);--color-success:oklch(90.13% .153 164.14);--color-success-content:oklch(18.026% .03 164.14);--color-warning:oklch(88.37% .135 79.94);--color-warning-content:oklch(17.674% .027 79.94);--color-error:oklch(78.66% .15 28.47);--color-error-content:oklch(15.732% .03 28.47);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=pastel]:checked),[data-theme=pastel]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98.462% .001 247.838);--color-base-300:oklch(92.462% .001 247.838);--color-base-content:oklch(20% 0 0);--color-primary:oklch(90% .063 306.703);--color-primary-content:oklch(49% .265 301.924);--color-secondary:oklch(89% .058 10.001);--color-secondary-content:oklch(51% .222 16.935);--color-accent:oklch(90% .093 164.15);--color-accent-content:oklch(50% .118 165.612);--color-neutral:oklch(55% .046 257.417);--color-neutral-content:oklch(92% .013 255.508);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(52% .105 223.128);--color-success:oklch(87% .15 154.449);--color-success-content:oklch(52% .154 150.069);--color-warning:oklch(83% .128 66.29);--color-warning-content:oklch(55% .195 38.402);--color-error:oklch(80% .114 19.571);--color-error-content:oklch(50% .213 27.518);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:0;--noise:0}:root:has(input.theme-controller[value=fantasy]:checked),[data-theme=fantasy]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(27.807% .029 256.847);--color-primary:oklch(37.45% .189 325.02);--color-primary-content:oklch(87.49% .037 325.02);--color-secondary:oklch(53.92% .162 241.36);--color-secondary-content:oklch(90.784% .032 241.36);--color-accent:oklch(75.98% .204 56.72);--color-accent-content:oklch(15.196% .04 56.72);--color-neutral:oklch(27.807% .029 256.847);--color-neutral-content:oklch(85.561% .005 256.847);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=wireframe]:checked),[data-theme=wireframe]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(87% 0 0);--color-primary-content:oklch(26% 0 0);--color-secondary:oklch(87% 0 0);--color-secondary-content:oklch(26% 0 0);--color-accent:oklch(87% 0 0);--color-accent-content:oklch(26% 0 0);--color-neutral:oklch(87% 0 0);--color-neutral-content:oklch(26% 0 0);--color-info:oklch(44% .11 240.79);--color-info-content:oklch(90% .058 230.902);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .093 164.15);--color-warning:oklch(47% .137 46.201);--color-warning-content:oklch(92% .12 95.746);--color-error:oklch(44% .177 26.899);--color-error-content:oklch(88% .062 18.334);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=black]:checked),[data-theme=black]{color-scheme:dark;--color-base-100:oklch(0% 0 0);--color-base-200:oklch(19% 0 0);--color-base-300:oklch(22% 0 0);--color-base-content:oklch(87.609% 0 0);--color-primary:oklch(35% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(35% 0 0);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(35% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(35% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(45.201% .313 264.052);--color-info-content:oklch(89.04% .062 264.052);--color-success:oklch(51.975% .176 142.495);--color-success-content:oklch(90.395% .035 142.495);--color-warning:oklch(96.798% .211 109.769);--color-warning-content:oklch(19.359% .042 109.769);--color-error:oklch(62.795% .257 29.233);--color-error-content:oklch(12.559% .051 29.233);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=luxury]:checked),[data-theme=luxury]{color-scheme:dark;--color-base-100:oklch(14.076% .004 285.822);--color-base-200:oklch(20.219% .004 308.229);--color-base-300:oklch(23.219% .004 308.229);--color-base-content:oklch(75.687% .123 76.89);--color-primary:oklch(100% 0 0);--color-primary-content:oklch(20% 0 0);--color-secondary:oklch(27.581% .064 261.069);--color-secondary-content:oklch(85.516% .012 261.069);--color-accent:oklch(36.674% .051 338.825);--color-accent-content:oklch(87.334% .01 338.825);--color-neutral:oklch(24.27% .057 59.825);--color-neutral-content:oklch(93.203% .089 90.861);--color-info:oklch(79.061% .121 237.133);--color-info-content:oklch(15.812% .024 237.133);--color-success:oklch(78.119% .192 132.154);--color-success-content:oklch(15.623% .038 132.154);--color-warning:oklch(86.127% .136 102.891);--color-warning-content:oklch(17.225% .027 102.891);--color-error:oklch(71.753% .176 22.568);--color-error-content:oklch(14.35% .035 22.568);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=dracula]:checked),[data-theme=dracula]{color-scheme:dark;--color-base-100:oklch(28.822% .022 277.508);--color-base-200:oklch(26.805% .02 277.508);--color-base-300:oklch(24.787% .019 277.508);--color-base-content:oklch(97.747% .007 106.545);--color-primary:oklch(75.461% .183 346.812);--color-primary-content:oklch(15.092% .036 346.812);--color-secondary:oklch(74.202% .148 301.883);--color-secondary-content:oklch(14.84% .029 301.883);--color-accent:oklch(83.392% .124 66.558);--color-accent-content:oklch(16.678% .024 66.558);--color-neutral:oklch(39.445% .032 275.524);--color-neutral-content:oklch(87.889% .006 275.524);--color-info:oklch(88.263% .093 212.846);--color-info-content:oklch(17.652% .018 212.846);--color-success:oklch(87.099% .219 148.024);--color-success-content:oklch(17.419% .043 148.024);--color-warning:oklch(95.533% .134 112.757);--color-warning-content:oklch(19.106% .026 112.757);--color-error:oklch(68.22% .206 24.43);--color-error-content:oklch(13.644% .041 24.43);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=cmyk]:checked),[data-theme=cmyk]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(90% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(71.772% .133 239.443);--color-primary-content:oklch(14.354% .026 239.443);--color-secondary:oklch(64.476% .202 359.339);--color-secondary-content:oklch(12.895% .04 359.339);--color-accent:oklch(94.228% .189 105.306);--color-accent-content:oklch(18.845% .037 105.306);--color-neutral:oklch(21.778% 0 0);--color-neutral-content:oklch(84.355% 0 0);--color-info:oklch(68.475% .094 217.284);--color-info-content:oklch(13.695% .018 217.284);--color-success:oklch(46.949% .162 321.406);--color-success-content:oklch(89.389% .032 321.406);--color-warning:oklch(71.236% .159 52.023);--color-warning-content:oklch(14.247% .031 52.023);--color-error:oklch(62.013% .208 28.717);--color-error-content:oklch(12.402% .041 28.717);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=autumn]:checked),[data-theme=autumn]{color-scheme:light;--color-base-100:oklch(95.814% 0 0);--color-base-200:oklch(89.107% 0 0);--color-base-300:oklch(82.4% 0 0);--color-base-content:oklch(19.162% 0 0);--color-primary:oklch(40.723% .161 17.53);--color-primary-content:oklch(88.144% .032 17.53);--color-secondary:oklch(61.676% .169 23.865);--color-secondary-content:oklch(12.335% .033 23.865);--color-accent:oklch(73.425% .094 60.729);--color-accent-content:oklch(14.685% .018 60.729);--color-neutral:oklch(54.367% .037 51.902);--color-neutral-content:oklch(90.873% .007 51.902);--color-info:oklch(69.224% .097 207.284);--color-info-content:oklch(13.844% .019 207.284);--color-success:oklch(60.995% .08 174.616);--color-success-content:oklch(12.199% .016 174.616);--color-warning:oklch(70.081% .164 56.844);--color-warning-content:oklch(14.016% .032 56.844);--color-error:oklch(53.07% .241 24.16);--color-error-content:oklch(90.614% .048 24.16);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=business]:checked),[data-theme=business]{color-scheme:dark;--color-base-100:oklch(24.353% 0 0);--color-base-200:oklch(22.648% 0 0);--color-base-300:oklch(20.944% 0 0);--color-base-content:oklch(84.87% 0 0);--color-primary:oklch(41.703% .099 251.473);--color-primary-content:oklch(88.34% .019 251.473);--color-secondary:oklch(64.092% .027 229.389);--color-secondary-content:oklch(12.818% .005 229.389);--color-accent:oklch(67.271% .167 35.791);--color-accent-content:oklch(13.454% .033 35.791);--color-neutral:oklch(27.441% .013 253.041);--color-neutral-content:oklch(85.488% .002 253.041);--color-info:oklch(62.616% .143 240.033);--color-info-content:oklch(12.523% .028 240.033);--color-success:oklch(70.226% .094 156.596);--color-success-content:oklch(14.045% .018 156.596);--color-warning:oklch(77.482% .115 81.519);--color-warning-content:oklch(15.496% .023 81.519);--color-error:oklch(51.61% .146 29.674);--color-error-content:oklch(90.322% .029 29.674);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=acid]:checked),[data-theme=acid]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(91% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(71.9% .357 330.759);--color-primary-content:oklch(14.38% .071 330.759);--color-secondary:oklch(73.37% .224 48.25);--color-secondary-content:oklch(14.674% .044 48.25);--color-accent:oklch(92.78% .264 122.962);--color-accent-content:oklch(18.556% .052 122.962);--color-neutral:oklch(21.31% .128 278.68);--color-neutral-content:oklch(84.262% .025 278.68);--color-info:oklch(60.72% .227 252.05);--color-info-content:oklch(12.144% .045 252.05);--color-success:oklch(85.72% .266 158.53);--color-success-content:oklch(17.144% .053 158.53);--color-warning:oklch(91.01% .212 100.5);--color-warning-content:oklch(18.202% .042 100.5);--color-error:oklch(64.84% .293 29.349);--color-error-content:oklch(12.968% .058 29.349);--radius-selector:1rem;--radius-field:1rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=lemonade]:checked),[data-theme=lemonade]{color-scheme:light;--color-base-100:oklch(98.71% .02 123.72);--color-base-200:oklch(91.8% .018 123.72);--color-base-300:oklch(84.89% .017 123.72);--color-base-content:oklch(19.742% .004 123.72);--color-primary:oklch(58.92% .199 134.6);--color-primary-content:oklch(11.784% .039 134.6);--color-secondary:oklch(77.75% .196 111.09);--color-secondary-content:oklch(15.55% .039 111.09);--color-accent:oklch(85.39% .201 100.73);--color-accent-content:oklch(17.078% .04 100.73);--color-neutral:oklch(30.98% .075 108.6);--color-neutral-content:oklch(86.196% .015 108.6);--color-info:oklch(86.19% .047 224.14);--color-info-content:oklch(17.238% .009 224.14);--color-success:oklch(86.19% .047 157.85);--color-success-content:oklch(17.238% .009 157.85);--color-warning:oklch(86.19% .047 102.15);--color-warning-content:oklch(17.238% .009 102.15);--color-error:oklch(86.19% .047 25.85);--color-error-content:oklch(17.238% .009 25.85);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=night]:checked),[data-theme=night]{color-scheme:dark;--color-base-100:oklch(20.768% .039 265.754);--color-base-200:oklch(19.314% .037 265.754);--color-base-300:oklch(17.86% .034 265.754);--color-base-content:oklch(84.153% .007 265.754);--color-primary:oklch(75.351% .138 232.661);--color-primary-content:oklch(15.07% .027 232.661);--color-secondary:oklch(68.011% .158 276.934);--color-secondary-content:oklch(13.602% .031 276.934);--color-accent:oklch(72.36% .176 350.048);--color-accent-content:oklch(14.472% .035 350.048);--color-neutral:oklch(27.949% .036 260.03);--color-neutral-content:oklch(85.589% .007 260.03);--color-info:oklch(68.455% .148 237.251);--color-info-content:oklch(0% 0 0);--color-success:oklch(78.452% .132 181.911);--color-success-content:oklch(15.69% .026 181.911);--color-warning:oklch(83.242% .139 82.95);--color-warning-content:oklch(16.648% .027 82.95);--color-error:oklch(71.785% .17 13.118);--color-error-content:oklch(14.357% .034 13.118);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=coffee]:checked),[data-theme=coffee]{color-scheme:dark;--color-base-100:oklch(24% .023 329.708);--color-base-200:oklch(21% .021 329.708);--color-base-300:oklch(16% .019 329.708);--color-base-content:oklch(72.354% .092 79.129);--color-primary:oklch(71.996% .123 62.756);--color-primary-content:oklch(14.399% .024 62.756);--color-secondary:oklch(34.465% .029 199.194);--color-secondary-content:oklch(86.893% .005 199.194);--color-accent:oklch(42.621% .074 224.389);--color-accent-content:oklch(88.524% .014 224.389);--color-neutral:oklch(16.51% .015 326.261);--color-neutral-content:oklch(83.302% .003 326.261);--color-info:oklch(79.49% .063 184.558);--color-info-content:oklch(15.898% .012 184.558);--color-success:oklch(74.722% .072 131.116);--color-success-content:oklch(14.944% .014 131.116);--color-warning:oklch(88.15% .14 87.722);--color-warning-content:oklch(17.63% .028 87.722);--color-error:oklch(77.318% .128 31.871);--color-error-content:oklch(15.463% .025 31.871);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=winter]:checked),[data-theme=winter]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97.466% .011 259.822);--color-base-300:oklch(93.268% .016 262.751);--color-base-content:oklch(41.886% .053 255.824);--color-primary:oklch(56.86% .255 257.57);--color-primary-content:oklch(91.372% .051 257.57);--color-secondary:oklch(42.551% .161 282.339);--color-secondary-content:oklch(88.51% .032 282.339);--color-accent:oklch(59.939% .191 335.171);--color-accent-content:oklch(11.988% .038 335.171);--color-neutral:oklch(19.616% .063 257.651);--color-neutral-content:oklch(83.923% .012 257.651);--color-info:oklch(88.127% .085 214.515);--color-info-content:oklch(17.625% .017 214.515);--color-success:oklch(80.494% .077 197.823);--color-success-content:oklch(16.098% .015 197.823);--color-warning:oklch(89.172% .045 71.47);--color-warning-content:oklch(17.834% .009 71.47);--color-error:oklch(73.092% .11 20.076);--color-error-content:oklch(14.618% .022 20.076);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=dim]:checked),[data-theme=dim]{color-scheme:dark;--color-base-100:oklch(30.857% .023 264.149);--color-base-200:oklch(28.036% .019 264.182);--color-base-300:oklch(26.346% .018 262.177);--color-base-content:oklch(82.901% .031 222.959);--color-primary:oklch(86.133% .141 139.549);--color-primary-content:oklch(17.226% .028 139.549);--color-secondary:oklch(73.375% .165 35.353);--color-secondary-content:oklch(14.675% .033 35.353);--color-accent:oklch(74.229% .133 311.379);--color-accent-content:oklch(14.845% .026 311.379);--color-neutral:oklch(24.731% .02 264.094);--color-neutral-content:oklch(82.901% .031 222.959);--color-info:oklch(86.078% .142 206.182);--color-info-content:oklch(17.215% .028 206.182);--color-success:oklch(86.171% .142 166.534);--color-success-content:oklch(17.234% .028 166.534);--color-warning:oklch(86.163% .142 94.818);--color-warning-content:oklch(17.232% .028 94.818);--color-error:oklch(82.418% .099 33.756);--color-error-content:oklch(16.483% .019 33.756);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=nord]:checked),[data-theme=nord]{color-scheme:light;--color-base-100:oklch(95.127% .007 260.731);--color-base-200:oklch(93.299% .01 261.788);--color-base-300:oklch(89.925% .016 262.749);--color-base-content:oklch(32.437% .022 264.182);--color-primary:oklch(59.435% .077 254.027);--color-primary-content:oklch(11.887% .015 254.027);--color-secondary:oklch(69.651% .059 248.687);--color-secondary-content:oklch(13.93% .011 248.687);--color-accent:oklch(77.464% .062 217.469);--color-accent-content:oklch(15.492% .012 217.469);--color-neutral:oklch(45.229% .035 264.131);--color-neutral-content:oklch(89.925% .016 262.749);--color-info:oklch(69.207% .062 332.664);--color-info-content:oklch(13.841% .012 332.664);--color-success:oklch(76.827% .074 131.063);--color-success-content:oklch(15.365% .014 131.063);--color-warning:oklch(85.486% .089 84.093);--color-warning-content:oklch(17.097% .017 84.093);--color-error:oklch(60.61% .12 15.341);--color-error-content:oklch(12.122% .024 15.341);--radius-selector:1rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=sunset]:checked),[data-theme=sunset]{color-scheme:dark;--color-base-100:oklch(22% .019 237.69);--color-base-200:oklch(20% .019 237.69);--color-base-300:oklch(18% .019 237.69);--color-base-content:oklch(77.383% .043 245.096);--color-primary:oklch(74.703% .158 39.947);--color-primary-content:oklch(14.94% .031 39.947);--color-secondary:oklch(72.537% .177 2.72);--color-secondary-content:oklch(14.507% .035 2.72);--color-accent:oklch(71.294% .166 299.844);--color-accent-content:oklch(14.258% .033 299.844);--color-neutral:oklch(26% .019 237.69);--color-neutral-content:oklch(70% .019 237.69);--color-info:oklch(85.559% .085 206.015);--color-info-content:oklch(17.111% .017 206.015);--color-success:oklch(85.56% .085 144.778);--color-success-content:oklch(17.112% .017 144.778);--color-warning:oklch(85.569% .084 74.427);--color-warning-content:oklch(17.113% .016 74.427);--color-error:oklch(85.511% .078 16.886);--color-error-content:oklch(17.102% .015 16.886);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}:root:has(input.theme-controller[value=caramellatte]:checked),[data-theme=caramellatte]{color-scheme:light;--color-base-100:oklch(98% .016 73.684);--color-base-200:oklch(95% .038 75.164);--color-base-300:oklch(90% .076 70.697);--color-base-content:oklch(40% .123 38.172);--color-primary:oklch(0% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(22.45% .075 37.85);--color-secondary-content:oklch(90% .076 70.697);--color-accent:oklch(46.44% .111 37.85);--color-accent-content:oklch(90% .076 70.697);--color-neutral:oklch(55% .195 38.402);--color-neutral-content:oklch(98% .016 73.684);--color-info:oklch(42% .199 265.638);--color-info-content:oklch(90% .076 70.697);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .076 70.697);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:1}:root:has(input.theme-controller[value=abyss]:checked),[data-theme=abyss]{color-scheme:dark;--color-base-100:oklch(20% .08 209);--color-base-200:oklch(15% .08 209);--color-base-300:oklch(10% .08 209);--color-base-content:oklch(90% .076 70.697);--color-primary:oklch(92% .2653 125);--color-primary-content:oklch(50% .2653 125);--color-secondary:oklch(83.27% .0764 298.3);--color-secondary-content:oklch(43.27% .0764 298.3);--color-accent:oklch(43% 0 0);--color-accent-content:oklch(98% 0 0);--color-neutral:oklch(30% .08 209);--color-neutral-content:oklch(90% .076 70.697);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(79% .209 151.711);--color-success-content:oklch(26% .065 152.934);--color-warning:oklch(84.8% .1962 84.62);--color-warning-content:oklch(44.8% .1962 84.62);--color-error:oklch(65% .1985 24.22);--color-error-content:oklch(27% .1985 24.22);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root:has(input.theme-controller[value=silk]:checked),[data-theme=silk]{color-scheme:light;--color-base-100:oklch(97% .0035 67.78);--color-base-200:oklch(95% .0081 61.42);--color-base-300:oklch(90% .0081 61.42);--color-base-content:oklch(40% .0081 61.42);--color-primary:oklch(23.27% .0249 284.3);--color-primary-content:oklch(94.22% .2505 117.44);--color-secondary:oklch(23.27% .0249 284.3);--color-secondary-content:oklch(73.92% .2135 50.94);--color-accent:oklch(23.27% .0249 284.3);--color-accent-content:oklch(88.92% .2061 189.9);--color-neutral:oklch(20% 0 0);--color-neutral-content:oklch(80% .0081 61.42);--color-info:oklch(80.39% .1148 241.68);--color-info-content:oklch(30.39% .1148 241.68);--color-success:oklch(83.92% .0901 136.87);--color-success-content:oklch(23.92% .0901 136.87);--color-warning:oklch(83.92% .1085 80);--color-warning-content:oklch(43.92% .1085 80);--color-error:oklch(75.1% .1814 22.37);--color-error-content:oklch(35.1% .1814 22.37);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}.chat{--mask-chat:url("data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e")}}@layer components;@layer utilities{.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:calc(var(--size-field,.25rem)*10);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:100%;display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.card{border-radius:var(--radius-box);outline-offset:2px;outline:0 solid #0000;flex-direction:column;transition:outline .2s ease-in-out;display:flex;position:relative}.card:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.card:focus{outline-offset:2px;outline:2px solid #0000}}.card:focus-visible{outline-color:currentColor}.card :where(figure:first-child){border-start-start-radius:inherit;border-start-end-radius:inherit;border-end-end-radius:unset;border-end-start-radius:unset;overflow:hidden}.card :where(figure:last-child){border-start-start-radius:unset;border-start-end-radius:unset;border-end-end-radius:inherit;border-end-start-radius:inherit;overflow:hidden}.card:where(.card-border){border:var(--border)solid var(--color-base-200)}.card:where(.card-dash){border:var(--border)dashed var(--color-base-200)}.card.image-full{display:grid}.card.image-full>*{grid-row-start:1;grid-column-start:1}.card.image-full>.card-body{color:var(--color-neutral-content);position:relative}.card.image-full :where(figure){border-radius:inherit;overflow:hidden}.card.image-full>figure img{object-fit:cover;filter:brightness(28%);height:100%}.card figure{justify-content:center;align-items:center;display:flex}.card:has(>input:is(input[type=checkbox],input[type=radio])){cursor:pointer;-webkit-user-select:none;user-select:none}.card:has(>:checked){outline:2px solid}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.textarea{border:var(--border)solid #0000;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;border-color:var(--input-color);width:clamp(3rem,20rem,100%);min-height:5rem;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem;font-size:.875rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.m-0{margin:calc(var(--spacing)*0)}.mx-auto{margin-inline:auto}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:#0000004d}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.card-body{padding:var(--card-p,1.5rem);font-size:var(--card-fs,.875rem);flex-direction:column;flex:auto;gap:.5rem;display:flex}.card-body :where(p){flex-grow:1}.card-actions{flex-wrap:wrap;align-items:flex-start;gap:.5rem;display:flex}.card-title{font-size:var(--cardtitle-fs,1.125rem);align-items:center;gap:.5rem;font-weight:600;display:flex}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-block{display:inline-block}.size-6{width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.h-6{height:calc(var(--spacing)*6)}.w-6{width:calc(var(--spacing)*6)}.w-full{width:100%}.max-w-3xl{max-width:var(--container-3xl)}.max-w-md{max-width:var(--container-md)}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.self-end{align-self:flex-end}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-gray-50{border-color:var(--color-gray-50)}.border-gray-100{border-color:var(--color-gray-100)}.border-gray-200{border-color:var(--color-gray-200)}.bg-base-100{background-color:var(--color-base-100)}.bg-base-200\\/80{background-color:var(--color-base-200)}@supports (color:color-mix(in lab,red,red)){.bg-base-200\\/80{background-color:color-mix(in oklab,var(--color-base-200)80%,transparent)}}.bg-base-300{background-color:var(--color-base-300)}.bg-gray-50{background-color:var(--color-gray-50)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.py-8{padding-block:calc(var(--spacing)*8)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.font-sans{font-family:var(--font-sans)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-base-content\\/50{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/50{color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.text-base-content\\/70{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/70{color:color-mix(in oklab,var(--color-base-content)70%,transparent)}}.text-gray-500{color:var(--color-gray-500)}.text-gray-800{color:var(--color-gray-800)}.text-red-800{color:var(--color-red-800)}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}.last\\:border-0:last-child{border-style:var(--tw-border-style);border-width:0}}@keyframes dropdown{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}`, td = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, od = /* @__PURE__ */ td(Zu, [["styles", [ed]]]), hs = /* @__PURE__ */ ha(od);
customElements.define("pulse-feedback", hs);
window.PulseKit = {
  // Components
  Board: hs
};
