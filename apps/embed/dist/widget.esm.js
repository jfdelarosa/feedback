var Jn = {}, Bc = {};
/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ao(e) {
  const o = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) o[t] = 1;
  return (t) => t in o;
}
const Y = Bc.NODE_ENV !== "production" ? Object.freeze({}) : {}, qo = Bc.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, bi = () => !1, Ct = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Xt = (e) => e.startsWith("onUpdate:"), te = Object.assign, gn = (e, o) => {
  const t = e.indexOf(o);
  t > -1 && e.splice(t, 1);
}, gi = Object.prototype.hasOwnProperty, q = (e, o) => gi.call(e, o), $ = Array.isArray, zo = (e) => Ot(e) === "[object Map]", fr = (e) => Ot(e) === "[object Set]", Gn = (e) => Ot(e) === "[object Date]", I = (e) => typeof e == "function", re = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", kn = (e) => (G(e) || I(e)) && I(e.then) && I(e.catch), Kc = Object.prototype.toString, Ot = (e) => Kc.call(e), vn = (e) => Ot(e).slice(8, -1), mr = (e) => Ot(e) === "[object Object]", xn = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ ao(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ki = /* @__PURE__ */ ao(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), br = (e) => {
  const o = /* @__PURE__ */ Object.create(null);
  return (t) => o[t] || (o[t] = e(t));
}, vi = /-(\w)/g, ke = br(
  (e) => e.replace(vi, (o, t) => t ? t.toUpperCase() : "")
), xi = /\B([A-Z])/g, Ne = br(
  (e) => e.replace(xi, "-$1").toLowerCase()
), gr = br((e) => e.charAt(0).toUpperCase() + e.slice(1)), Co = br(
  (e) => e ? `on${gr(e)}` : ""
), Ee = (e, o) => !Object.is(e, o), Ho = (e, ...o) => {
  for (let t = 0; t < e.length; t++)
    e[t](...o);
}, Jt = (e, o, t, r = !1) => {
  Object.defineProperty(e, o, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: t
  });
}, Gt = (e) => {
  const o = parseFloat(e);
  return isNaN(o) ? e : o;
}, Qn = (e) => {
  const o = re(e) ? Number(e) : NaN;
  return isNaN(o) ? e : o;
};
let Zn;
const Dt = () => Zn || (Zn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof Jn < "u" ? Jn : {});
function kr(e) {
  if ($(e)) {
    const o = {};
    for (let t = 0; t < e.length; t++) {
      const r = e[t], n = re(r) ? Ei(r) : kr(r);
      if (n)
        for (const c in n)
          o[c] = n[c];
    }
    return o;
  } else if (re(e) || G(e))
    return e;
}
const yi = /;(?![^(]*\))/g, wi = /:([^]+)/, _i = /\/\*[^]*?\*\//g;
function Ei(e) {
  const o = {};
  return e.replace(_i, "").split(yi).forEach((t) => {
    if (t) {
      const r = t.split(wi);
      r.length > 1 && (o[r[0].trim()] = r[1].trim());
    }
  }), o;
}
function qe(e) {
  let o = "";
  if (re(e))
    o = e;
  else if ($(e))
    for (let t = 0; t < e.length; t++) {
      const r = qe(e[t]);
      r && (o += r + " ");
    }
  else if (G(e))
    for (const t in e)
      e[t] && (o += t + " ");
  return o.trim();
}
const Ni = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ci = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Oi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Di = /* @__PURE__ */ ao(Ni), Si = /* @__PURE__ */ ao(Ci), zi = /* @__PURE__ */ ao(Oi), Vi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ti = /* @__PURE__ */ ao(Vi);
function qc(e) {
  return !!e || e === "";
}
function $i(e, o) {
  if (e.length !== o.length) return !1;
  let t = !0;
  for (let r = 0; t && r < e.length; r++)
    t = vr(e[r], o[r]);
  return t;
}
function vr(e, o) {
  if (e === o) return !0;
  let t = Gn(e), r = Gn(o);
  if (t || r)
    return t && r ? e.getTime() === o.getTime() : !1;
  if (t = Ze(e), r = Ze(o), t || r)
    return e === o;
  if (t = $(e), r = $(o), t || r)
    return t && r ? $i(e, o) : !1;
  if (t = G(e), r = G(o), t || r) {
    if (!t || !r)
      return !1;
    const n = Object.keys(e).length, c = Object.keys(o).length;
    if (n !== c)
      return !1;
    for (const l in e) {
      const i = e.hasOwnProperty(l), s = o.hasOwnProperty(l);
      if (i && !s || !i && s || !vr(e[l], o[l]))
        return !1;
    }
  }
  return String(e) === String(o);
}
function Mi(e, o) {
  return e.findIndex((t) => vr(t, o));
}
const Yc = (e) => !!(e && e.__v_isRef === !0), U = (e) => re(e) ? e : e == null ? "" : $(e) || G(e) && (e.toString === Kc || !I(e.toString)) ? Yc(e) ? U(e.value) : JSON.stringify(e, Xc, 2) : String(e), Xc = (e, o) => Yc(o) ? Xc(e, o.value) : zo(o) ? {
  [`Map(${o.size})`]: [...o.entries()].reduce(
    (t, [r, n], c) => (t[jr(r, c) + " =>"] = n, t),
    {}
  )
} : fr(o) ? {
  [`Set(${o.size})`]: [...o.values()].map((t) => jr(t))
} : Ze(o) ? jr(o) : G(o) && !$(o) && !mr(o) ? String(o) : o, jr = (e, o = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(t = e.description) != null ? t : o})` : e
  );
};
var oe = {};
function eo(e, ...o) {
  console.warn(`[Vue warn] ${e}`, ...o);
}
let _e;
class Pi {
  constructor(o = !1) {
    this.detached = o, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = _e, !o && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let o, t;
      if (this.scopes)
        for (o = 0, t = this.scopes.length; o < t; o++)
          this.scopes[o].pause();
      for (o = 0, t = this.effects.length; o < t; o++)
        this.effects[o].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let o, t;
      if (this.scopes)
        for (o = 0, t = this.scopes.length; o < t; o++)
          this.scopes[o].resume();
      for (o = 0, t = this.effects.length; o < t; o++)
        this.effects[o].resume();
    }
  }
  run(o) {
    if (this._active) {
      const t = _e;
      try {
        return _e = this, o();
      } finally {
        _e = t;
      }
    } else oe.NODE_ENV !== "production" && eo("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = _e, _e = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (_e = this.prevScope, this.prevScope = void 0);
  }
  stop(o) {
    if (this._active) {
      this._active = !1;
      let t, r;
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].stop();
      for (this.effects.length = 0, t = 0, r = this.cleanups.length; t < r; t++)
        this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !o) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ji() {
  return _e;
}
let J;
const Ar = /* @__PURE__ */ new WeakSet();
class Jc {
  constructor(o) {
    this.fn = o, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, _e && _e.active && _e.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ar.has(this) && (Ar.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ec(this), Zc(this);
    const o = J, t = je;
    J = this, je = !0;
    try {
      return this.fn();
    } finally {
      oe.NODE_ENV !== "production" && J !== this && eo(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), el(this), J = o, je = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let o = this.deps; o; o = o.nextDep)
        _n(o);
      this.deps = this.depsTail = void 0, ec(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ar.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Zr(this) && this.run();
  }
  get dirty() {
    return Zr(this);
  }
}
let Gc = 0, mt, bt;
function Qc(e, o = !1) {
  if (e.flags |= 8, o) {
    e.next = bt, bt = e;
    return;
  }
  e.next = mt, mt = e;
}
function yn() {
  Gc++;
}
function wn() {
  if (--Gc > 0)
    return;
  if (bt) {
    let o = bt;
    for (bt = void 0; o; ) {
      const t = o.next;
      o.next = void 0, o.flags &= -9, o = t;
    }
  }
  let e;
  for (; mt; ) {
    let o = mt;
    for (mt = void 0; o; ) {
      const t = o.next;
      if (o.next = void 0, o.flags &= -9, o.flags & 1)
        try {
          o.trigger();
        } catch (r) {
          e || (e = r);
        }
      o = t;
    }
  }
  if (e) throw e;
}
function Zc(e) {
  for (let o = e.deps; o; o = o.nextDep)
    o.version = -1, o.prevActiveLink = o.dep.activeLink, o.dep.activeLink = o;
}
function el(e) {
  let o, t = e.depsTail, r = t;
  for (; r; ) {
    const n = r.prevDep;
    r.version === -1 ? (r === t && (t = n), _n(r), Ai(r)) : o = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = n;
  }
  e.deps = o, e.depsTail = t;
}
function Zr(e) {
  for (let o = e.deps; o; o = o.nextDep)
    if (o.dep.version !== o.version || o.dep.computed && (ol(o.dep.computed) || o.dep.version !== o.version))
      return !0;
  return !!e._dirty;
}
function ol(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === vt) || (e.globalVersion = vt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Zr(e))))
    return;
  e.flags |= 2;
  const o = e.dep, t = J, r = je;
  J = e, je = !0;
  try {
    Zc(e);
    const n = e.fn(e._value);
    (o.version === 0 || Ee(n, e._value)) && (e.flags |= 128, e._value = n, o.version++);
  } catch (n) {
    throw o.version++, n;
  } finally {
    J = t, je = r, el(e), e.flags &= -3;
  }
}
function _n(e, o = !1) {
  const { dep: t, prevSub: r, nextSub: n } = e;
  if (r && (r.nextSub = n, e.prevSub = void 0), n && (n.prevSub = r, e.nextSub = void 0), oe.NODE_ENV !== "production" && t.subsHead === e && (t.subsHead = n), t.subs === e && (t.subs = r, !r && t.computed)) {
    t.computed.flags &= -5;
    for (let c = t.computed.deps; c; c = c.nextDep)
      _n(c, !0);
  }
  !o && !--t.sc && t.map && t.map.delete(t.key);
}
function Ai(e) {
  const { prevDep: o, nextDep: t } = e;
  o && (o.nextDep = t, e.prevDep = void 0), t && (t.prevDep = o, e.nextDep = void 0);
}
let je = !0;
const tl = [];
function Ie() {
  tl.push(je), je = !1;
}
function Re() {
  const e = tl.pop();
  je = e === void 0 ? !0 : e;
}
function ec(e) {
  const { cleanup: o } = e;
  if (e.cleanup = void 0, o) {
    const t = J;
    J = void 0;
    try {
      o();
    } finally {
      J = t;
    }
  }
}
let vt = 0;
class Ii {
  constructor(o, t) {
    this.sub = o, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class xr {
  constructor(o) {
    this.computed = o, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, oe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(o) {
    if (!J || !je || J === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== J)
      t = this.activeLink = new Ii(J, this), J.deps ? (t.prevDep = J.depsTail, J.depsTail.nextDep = t, J.depsTail = t) : J.deps = J.depsTail = t, rl(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const r = t.nextDep;
      r.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = r), t.prevDep = J.depsTail, t.nextDep = void 0, J.depsTail.nextDep = t, J.depsTail = t, J.deps === t && (J.deps = r);
    }
    return oe.NODE_ENV !== "production" && J.onTrack && J.onTrack(
      te(
        {
          effect: J
        },
        o
      )
    ), t;
  }
  trigger(o) {
    this.version++, vt++, this.notify(o);
  }
  notify(o) {
    yn();
    try {
      if (oe.NODE_ENV !== "production")
        for (let t = this.subsHead; t; t = t.nextSub)
          t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(
            te(
              {
                effect: t.sub
              },
              o
            )
          );
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      wn();
    }
  }
}
function rl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const o = e.dep.computed;
    if (o && !e.dep.subs) {
      o.flags |= 20;
      for (let r = o.deps; r; r = r.nextDep)
        rl(r);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), oe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const en = /* @__PURE__ */ new WeakMap(), Vo = Symbol(
  oe.NODE_ENV !== "production" ? "Object iterate" : ""
), on = Symbol(
  oe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), xt = Symbol(
  oe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ie(e, o, t) {
  if (je && J) {
    let r = en.get(e);
    r || en.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(t);
    n || (r.set(t, n = new xr()), n.map = r, n.key = t), oe.NODE_ENV !== "production" ? n.track({
      target: e,
      type: o,
      key: t
    }) : n.track();
  }
}
function Ye(e, o, t, r, n, c) {
  const l = en.get(e);
  if (!l) {
    vt++;
    return;
  }
  const i = (s) => {
    s && (oe.NODE_ENV !== "production" ? s.trigger({
      target: e,
      type: o,
      key: t,
      newValue: r,
      oldValue: n,
      oldTarget: c
    }) : s.trigger());
  };
  if (yn(), o === "clear")
    l.forEach(i);
  else {
    const s = $(e), p = s && xn(t);
    if (s && t === "length") {
      const u = Number(r);
      l.forEach((d, m) => {
        (m === "length" || m === xt || !Ze(m) && m >= u) && i(d);
      });
    } else
      switch ((t !== void 0 || l.has(void 0)) && i(l.get(t)), p && i(l.get(xt)), o) {
        case "add":
          s ? p && i(l.get("length")) : (i(l.get(Vo)), zo(e) && i(l.get(on)));
          break;
        case "delete":
          s || (i(l.get(Vo)), zo(e) && i(l.get(on)));
          break;
        case "set":
          zo(e) && i(l.get(Vo));
          break;
      }
  }
  wn();
}
function Ro(e) {
  const o = H(e);
  return o === e ? o : (ie(o, "iterate", xt), ve(e) ? o : o.map(he));
}
function yr(e) {
  return ie(e = H(e), "iterate", xt), e;
}
const Ri = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ir(this, Symbol.iterator, he);
  },
  concat(...e) {
    return Ro(this).concat(
      ...e.map((o) => $(o) ? Ro(o) : o)
    );
  },
  entries() {
    return Ir(this, "entries", (e) => (e[1] = he(e[1]), e));
  },
  every(e, o) {
    return no(this, "every", e, o, void 0, arguments);
  },
  filter(e, o) {
    return no(this, "filter", e, o, (t) => t.map(he), arguments);
  },
  find(e, o) {
    return no(this, "find", e, o, he, arguments);
  },
  findIndex(e, o) {
    return no(this, "findIndex", e, o, void 0, arguments);
  },
  findLast(e, o) {
    return no(this, "findLast", e, o, he, arguments);
  },
  findLastIndex(e, o) {
    return no(this, "findLastIndex", e, o, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, o) {
    return no(this, "forEach", e, o, void 0, arguments);
  },
  includes(...e) {
    return Rr(this, "includes", e);
  },
  indexOf(...e) {
    return Rr(this, "indexOf", e);
  },
  join(e) {
    return Ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Rr(this, "lastIndexOf", e);
  },
  map(e, o) {
    return no(this, "map", e, o, void 0, arguments);
  },
  pop() {
    return lt(this, "pop");
  },
  push(...e) {
    return lt(this, "push", e);
  },
  reduce(e, ...o) {
    return oc(this, "reduce", e, o);
  },
  reduceRight(e, ...o) {
    return oc(this, "reduceRight", e, o);
  },
  shift() {
    return lt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, o) {
    return no(this, "some", e, o, void 0, arguments);
  },
  splice(...e) {
    return lt(this, "splice", e);
  },
  toReversed() {
    return Ro(this).toReversed();
  },
  toSorted(e) {
    return Ro(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ro(this).toSpliced(...e);
  },
  unshift(...e) {
    return lt(this, "unshift", e);
  },
  values() {
    return Ir(this, "values", he);
  }
};
function Ir(e, o, t) {
  const r = yr(e), n = r[o]();
  return r !== e && !ve(e) && (n._next = n.next, n.next = () => {
    const c = n._next();
    return c.value && (c.value = t(c.value)), c;
  }), n;
}
const Fi = Array.prototype;
function no(e, o, t, r, n, c) {
  const l = yr(e), i = l !== e && !ve(e), s = l[o];
  if (s !== Fi[o]) {
    const d = s.apply(e, c);
    return i ? he(d) : d;
  }
  let p = t;
  l !== e && (i ? p = function(d, m) {
    return t.call(this, he(d), m, e);
  } : t.length > 2 && (p = function(d, m) {
    return t.call(this, d, m, e);
  }));
  const u = s.call(l, p, r);
  return i && n ? n(u) : u;
}
function oc(e, o, t, r) {
  const n = yr(e);
  let c = t;
  return n !== e && (ve(e) ? t.length > 3 && (c = function(l, i, s) {
    return t.call(this, l, i, s, e);
  }) : c = function(l, i, s) {
    return t.call(this, l, he(i), s, e);
  }), n[o](c, ...r);
}
function Rr(e, o, t) {
  const r = H(e);
  ie(r, "iterate", xt);
  const n = r[o](...t);
  return (n === -1 || n === !1) && Qt(t[0]) ? (t[0] = H(t[0]), r[o](...t)) : n;
}
function lt(e, o, t = []) {
  Ie(), yn();
  const r = H(e)[o].apply(e, t);
  return wn(), Re(), r;
}
const Li = /* @__PURE__ */ ao("__proto__,__v_isRef,__isVue"), nl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function Ui(e) {
  Ze(e) || (e = String(e));
  const o = H(this);
  return ie(o, "has", e), o.hasOwnProperty(e);
}
class cl {
  constructor(o = !1, t = !1) {
    this._isReadonly = o, this._isShallow = t;
  }
  get(o, t, r) {
    if (t === "__v_skip") return o.__v_skip;
    const n = this._isReadonly, c = this._isShallow;
    if (t === "__v_isReactive")
      return !n;
    if (t === "__v_isReadonly")
      return n;
    if (t === "__v_isShallow")
      return c;
    if (t === "__v_raw")
      return r === (n ? c ? ul : dl : c ? al : sl).get(o) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(o) === Object.getPrototypeOf(r) ? o : void 0;
    const l = $(o);
    if (!n) {
      let s;
      if (l && (s = Ri[t]))
        return s;
      if (t === "hasOwnProperty")
        return Ui;
    }
    const i = Reflect.get(
      o,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      le(o) ? o : r
    );
    return (Ze(t) ? nl.has(t) : Li(t)) || (n || ie(o, "get", t), c) ? i : le(i) ? l && xn(t) ? i : i.value : G(i) ? n ? hl(i) : En(i) : i;
  }
}
class ll extends cl {
  constructor(o = !1) {
    super(!1, o);
  }
  set(o, t, r, n) {
    let c = o[t];
    if (!this._isShallow) {
      const s = oo(c);
      if (!ve(r) && !oo(r) && (c = H(c), r = H(r)), !$(o) && le(c) && !le(r))
        return s ? !1 : (c.value = r, !0);
    }
    const l = $(o) && xn(t) ? Number(t) < o.length : q(o, t), i = Reflect.set(
      o,
      t,
      r,
      le(o) ? o : n
    );
    return o === H(n) && (l ? Ee(r, c) && Ye(o, "set", t, r, c) : Ye(o, "add", t, r)), i;
  }
  deleteProperty(o, t) {
    const r = q(o, t), n = o[t], c = Reflect.deleteProperty(o, t);
    return c && r && Ye(o, "delete", t, void 0, n), c;
  }
  has(o, t) {
    const r = Reflect.has(o, t);
    return (!Ze(t) || !nl.has(t)) && ie(o, "has", t), r;
  }
  ownKeys(o) {
    return ie(
      o,
      "iterate",
      $(o) ? "length" : Vo
    ), Reflect.ownKeys(o);
  }
}
class il extends cl {
  constructor(o = !1) {
    super(!0, o);
  }
  set(o, t) {
    return oe.NODE_ENV !== "production" && eo(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      o
    ), !0;
  }
  deleteProperty(o, t) {
    return oe.NODE_ENV !== "production" && eo(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      o
    ), !0;
  }
}
const Hi = /* @__PURE__ */ new ll(), Wi = /* @__PURE__ */ new il(), Bi = /* @__PURE__ */ new ll(!0), Ki = /* @__PURE__ */ new il(!0), tn = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function qi(e, o, t) {
  return function(...r) {
    const n = this.__v_raw, c = H(n), l = zo(c), i = e === "entries" || e === Symbol.iterator && l, s = e === "keys" && l, p = n[e](...r), u = t ? tn : o ? Zt : he;
    return !o && ie(
      c,
      "iterate",
      s ? on : Vo
    ), {
      // iterator protocol
      next() {
        const { value: d, done: m } = p.next();
        return m ? { value: d, done: m } : {
          value: i ? [u(d[0]), u(d[1])] : u(d),
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
function At(e) {
  return function(...o) {
    if (oe.NODE_ENV !== "production") {
      const t = o[0] ? `on key "${o[0]}" ` : "";
      eo(
        `${gr(e)} operation ${t}failed: target is readonly.`,
        H(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Yi(e, o) {
  const t = {
    get(n) {
      const c = this.__v_raw, l = H(c), i = H(n);
      e || (Ee(n, i) && ie(l, "get", n), ie(l, "get", i));
      const { has: s } = jt(l), p = o ? tn : e ? Zt : he;
      if (s.call(l, n))
        return p(c.get(n));
      if (s.call(l, i))
        return p(c.get(i));
      c !== l && c.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && ie(H(n), "iterate", Vo), Reflect.get(n, "size", n);
    },
    has(n) {
      const c = this.__v_raw, l = H(c), i = H(n);
      return e || (Ee(n, i) && ie(l, "has", n), ie(l, "has", i)), n === i ? c.has(n) : c.has(n) || c.has(i);
    },
    forEach(n, c) {
      const l = this, i = l.__v_raw, s = H(i), p = o ? tn : e ? Zt : he;
      return !e && ie(s, "iterate", Vo), i.forEach((u, d) => n.call(c, p(u), p(d), l));
    }
  };
  return te(
    t,
    e ? {
      add: At("add"),
      set: At("set"),
      delete: At("delete"),
      clear: At("clear")
    } : {
      add(n) {
        !o && !ve(n) && !oo(n) && (n = H(n));
        const c = H(this);
        return jt(c).has.call(c, n) || (c.add(n), Ye(c, "add", n, n)), this;
      },
      set(n, c) {
        !o && !ve(c) && !oo(c) && (c = H(c));
        const l = H(this), { has: i, get: s } = jt(l);
        let p = i.call(l, n);
        p ? oe.NODE_ENV !== "production" && tc(l, i, n) : (n = H(n), p = i.call(l, n));
        const u = s.call(l, n);
        return l.set(n, c), p ? Ee(c, u) && Ye(l, "set", n, c, u) : Ye(l, "add", n, c), this;
      },
      delete(n) {
        const c = H(this), { has: l, get: i } = jt(c);
        let s = l.call(c, n);
        s ? oe.NODE_ENV !== "production" && tc(c, l, n) : (n = H(n), s = l.call(c, n));
        const p = i ? i.call(c, n) : void 0, u = c.delete(n);
        return s && Ye(c, "delete", n, void 0, p), u;
      },
      clear() {
        const n = H(this), c = n.size !== 0, l = oe.NODE_ENV !== "production" ? zo(n) ? new Map(n) : new Set(n) : void 0, i = n.clear();
        return c && Ye(
          n,
          "clear",
          void 0,
          void 0,
          l
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    t[n] = qi(n, e, o);
  }), t;
}
function wr(e, o) {
  const t = Yi(e, o);
  return (r, n, c) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    q(t, n) && n in r ? t : r,
    n,
    c
  );
}
const Xi = {
  get: /* @__PURE__ */ wr(!1, !1)
}, Ji = {
  get: /* @__PURE__ */ wr(!1, !0)
}, Gi = {
  get: /* @__PURE__ */ wr(!0, !1)
}, Qi = {
  get: /* @__PURE__ */ wr(!0, !0)
};
function tc(e, o, t) {
  const r = H(t);
  if (r !== t && o.call(e, r)) {
    const n = vn(e);
    eo(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sl = /* @__PURE__ */ new WeakMap(), al = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap(), ul = /* @__PURE__ */ new WeakMap();
function Zi(e) {
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
function es(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zi(vn(e));
}
function En(e) {
  return oo(e) ? e : _r(
    e,
    !1,
    Hi,
    Xi,
    sl
  );
}
function os(e) {
  return _r(
    e,
    !1,
    Bi,
    Ji,
    al
  );
}
function hl(e) {
  return _r(
    e,
    !0,
    Wi,
    Gi,
    dl
  );
}
function Je(e) {
  return _r(
    e,
    !0,
    Ki,
    Qi,
    ul
  );
}
function _r(e, o, t, r, n) {
  if (!G(e))
    return oe.NODE_ENV !== "production" && eo(
      `value cannot be made ${o ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(o && e.__v_isReactive))
    return e;
  const c = es(e);
  if (c === 0)
    return e;
  const l = n.get(e);
  if (l)
    return l;
  const i = new Proxy(
    e,
    c === 2 ? r : t
  );
  return n.set(e, i), i;
}
function To(e) {
  return oo(e) ? To(e.__v_raw) : !!(e && e.__v_isReactive);
}
function oo(e) {
  return !!(e && e.__v_isReadonly);
}
function ve(e) {
  return !!(e && e.__v_isShallow);
}
function Qt(e) {
  return e ? !!e.__v_raw : !1;
}
function H(e) {
  const o = e && e.__v_raw;
  return o ? H(o) : e;
}
function ts(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && Jt(e, "__v_skip", !0), e;
}
const he = (e) => G(e) ? En(e) : e, Zt = (e) => G(e) ? hl(e) : e;
function le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ne(e) {
  return rs(e, !1);
}
function rs(e, o) {
  return le(e) ? e : new ns(e, o);
}
class ns {
  constructor(o, t) {
    this.dep = new xr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? o : H(o), this._value = t ? o : he(o), this.__v_isShallow = t;
  }
  get value() {
    return oe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(o) {
    const t = this._rawValue, r = this.__v_isShallow || ve(o) || oo(o);
    o = r ? o : H(o), Ee(o, t) && (this._rawValue = o, this._value = r ? o : he(o), oe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: o,
      oldValue: t
    }) : this.dep.trigger());
  }
}
function A(e) {
  return le(e) ? e.value : e;
}
const cs = {
  get: (e, o, t) => o === "__v_raw" ? e : A(Reflect.get(e, o, t)),
  set: (e, o, t, r) => {
    const n = e[o];
    return le(n) && !le(t) ? (n.value = t, !0) : Reflect.set(e, o, t, r);
  }
};
function pl(e) {
  return To(e) ? e : new Proxy(e, cs);
}
class ls {
  constructor(o) {
    this.__v_isRef = !0, this._value = void 0;
    const t = this.dep = new xr(), { get: r, set: n } = o(t.track.bind(t), t.trigger.bind(t));
    this._get = r, this._set = n;
  }
  get value() {
    return this._value = this._get();
  }
  set value(o) {
    this._set(o);
  }
}
function is(e) {
  return new ls(e);
}
class ss {
  constructor(o, t, r) {
    this.fn = o, this.setter = t, this._value = void 0, this.dep = new xr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    J !== this)
      return Qc(this, !0), !0;
  }
  get value() {
    const o = oe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ol(this), o && (o.version = this.dep.version), this._value;
  }
  set value(o) {
    this.setter ? this.setter(o) : oe.NODE_ENV !== "production" && eo("Write operation failed: computed value is readonly");
  }
}
function as(e, o, t = !1) {
  let r, n;
  return I(e) ? r = e : (r = e.get, n = e.set), new ss(r, n, t);
}
const It = {}, er = /* @__PURE__ */ new WeakMap();
let Oo;
function ds(e, o = !1, t = Oo) {
  if (t) {
    let r = er.get(t);
    r || er.set(t, r = []), r.push(e);
  } else oe.NODE_ENV !== "production" && !o && eo(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function us(e, o, t = Y) {
  const { immediate: r, deep: n, once: c, scheduler: l, augmentJob: i, call: s } = t, p = (S) => {
    (t.onWarn || eo)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (S) => n ? S : ve(S) || n === !1 || n === 0 ? lo(S, 1) : lo(S);
  let d, m, b, _, T = !1, X = !1;
  if (le(e) ? (m = () => e.value, T = ve(e)) : To(e) ? (m = () => u(e), T = !0) : $(e) ? (X = !0, T = e.some((S) => To(S) || ve(S)), m = () => e.map((S) => {
    if (le(S))
      return S.value;
    if (To(S))
      return u(S);
    if (I(S))
      return s ? s(S, 2) : S();
    oe.NODE_ENV !== "production" && p(S);
  })) : I(e) ? o ? m = s ? () => s(e, 2) : e : m = () => {
    if (b) {
      Ie();
      try {
        b();
      } finally {
        Re();
      }
    }
    const S = Oo;
    Oo = d;
    try {
      return s ? s(e, 3, [_]) : e(_);
    } finally {
      Oo = S;
    }
  } : (m = se, oe.NODE_ENV !== "production" && p(e)), o && n) {
    const S = m, ae = n === !0 ? 1 / 0 : n;
    m = () => lo(S(), ae);
  }
  const R = ji(), P = () => {
    d.stop(), R && R.active && gn(R.effects, d);
  };
  if (c && o) {
    const S = o;
    o = (...ae) => {
      S(...ae), P();
    };
  }
  let F = X ? new Array(e.length).fill(It) : It;
  const Z = (S) => {
    if (!(!(d.flags & 1) || !d.dirty && !S))
      if (o) {
        const ae = d.run();
        if (n || T || (X ? ae.some(($e, pe) => Ee($e, F[pe])) : Ee(ae, F))) {
          b && b();
          const $e = Oo;
          Oo = d;
          try {
            const pe = [
              ae,
              // pass undefined as the old value when it's changed for the first time
              F === It ? void 0 : X && F[0] === It ? [] : F,
              _
            ];
            s ? s(o, 3, pe) : (
              // @ts-expect-error
              o(...pe)
            ), F = ae;
          } finally {
            Oo = $e;
          }
        }
      } else
        d.run();
  };
  return i && i(Z), d = new Jc(m), d.scheduler = l ? () => l(Z, !1) : Z, _ = (S) => ds(S, !1, d), b = d.onStop = () => {
    const S = er.get(d);
    if (S) {
      if (s)
        s(S, 4);
      else
        for (const ae of S) ae();
      er.delete(d);
    }
  }, oe.NODE_ENV !== "production" && (d.onTrack = t.onTrack, d.onTrigger = t.onTrigger), o ? r ? Z(!0) : F = d.run() : l ? l(Z.bind(null, !0), !0) : d.run(), P.pause = d.pause.bind(d), P.resume = d.resume.bind(d), P.stop = P, P;
}
function lo(e, o = 1 / 0, t) {
  if (o <= 0 || !G(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), o--, le(e))
    lo(e.value, o, t);
  else if ($(e))
    for (let r = 0; r < e.length; r++)
      lo(e[r], o, t);
  else if (fr(e) || zo(e))
    e.forEach((r) => {
      lo(r, o, t);
    });
  else if (mr(e)) {
    for (const r in e)
      lo(e[r], o, t);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && lo(e[r], o, t);
  }
  return e;
}
var f = {};
const $o = [];
function Ft(e) {
  $o.push(e);
}
function Lt() {
  $o.pop();
}
let Fr = !1;
function C(e, ...o) {
  if (Fr) return;
  Fr = !0, Ie();
  const t = $o.length ? $o[$o.length - 1].component : null, r = t && t.appContext.config.warnHandler, n = hs();
  if (r)
    et(
      r,
      t,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + o.map((c) => {
          var l, i;
          return (i = (l = c.toString) == null ? void 0 : l.call(c)) != null ? i : JSON.stringify(c);
        }).join(""),
        t && t.proxy,
        n.map(
          ({ vnode: c }) => `at <${zr(t, c.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const c = [`[Vue warn]: ${e}`, ...o];
    n.length && c.push(`
`, ...ps(n)), console.warn(...c);
  }
  Re(), Fr = !1;
}
function hs() {
  let e = $o[$o.length - 1];
  if (!e)
    return [];
  const o = [];
  for (; e; ) {
    const t = o[0];
    t && t.vnode === e ? t.recurseCount++ : o.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return o;
}
function ps(e) {
  const o = [];
  return e.forEach((t, r) => {
    o.push(...r === 0 ? [] : [`
`], ...fs(t));
  }), o;
}
function fs({ vnode: e, recurseCount: o }) {
  const t = o > 0 ? `... (${o} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, n = ` at <${zr(
    e.component,
    e.type,
    r
  )}`, c = ">" + t;
  return e.props ? [n, ...ms(e.props), c] : [n + c];
}
function ms(e) {
  const o = [], t = Object.keys(e);
  return t.slice(0, 3).forEach((r) => {
    o.push(...fl(r, e[r]));
  }), t.length > 3 && o.push(" ..."), o;
}
function fl(e, o, t) {
  return re(o) ? (o = JSON.stringify(o), t ? o : [`${e}=${o}`]) : typeof o == "number" || typeof o == "boolean" || o == null ? t ? o : [`${e}=${o}`] : le(o) ? (o = fl(e, H(o.value), !0), t ? o : [`${e}=Ref<`, o, ">"]) : I(o) ? [`${e}=fn${o.name ? `<${o.name}>` : ""}`] : (o = H(o), t ? o : [`${e}=`, o]);
}
const Nn = {
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
function et(e, o, t, r) {
  try {
    return r ? e(...r) : e();
  } catch (n) {
    St(n, o, t);
  }
}
function to(e, o, t, r) {
  if (I(e)) {
    const n = et(e, o, t, r);
    return n && kn(n) && n.catch((c) => {
      St(c, o, t);
    }), n;
  }
  if ($(e)) {
    const n = [];
    for (let c = 0; c < e.length; c++)
      n.push(to(e[c], o, t, r));
    return n;
  } else f.NODE_ENV !== "production" && C(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function St(e, o, t, r = !0) {
  const n = o ? o.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: l } = o && o.appContext.config || Y;
  if (o) {
    let i = o.parent;
    const s = o.proxy, p = f.NODE_ENV !== "production" ? Nn[t] : `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, s, p) === !1)
            return;
      }
      i = i.parent;
    }
    if (c) {
      Ie(), et(c, null, 10, [
        e,
        s,
        p
      ]), Re();
      return;
    }
  }
  bs(e, t, n, r, l);
}
function bs(e, o, t, r = !0, n = !1) {
  if (f.NODE_ENV !== "production") {
    const c = Nn[o];
    if (t && Ft(t), C(`Unhandled error${c ? ` during execution of ${c}` : ""}`), t && Lt(), r)
      throw e;
    console.error(e);
  } else {
    if (n)
      throw e;
    console.error(e);
  }
}
const ge = [];
let Be = -1;
const Yo = [];
let bo = null, Wo = 0;
const ml = /* @__PURE__ */ Promise.resolve();
let or = null;
const gs = 100;
function Cn(e) {
  const o = or || ml;
  return e ? o.then(this ? e.bind(this) : e) : o;
}
function ks(e) {
  let o = Be + 1, t = ge.length;
  for (; o < t; ) {
    const r = o + t >>> 1, n = ge[r], c = yt(n);
    c < e || c === e && n.flags & 2 ? o = r + 1 : t = r;
  }
  return o;
}
function Er(e) {
  if (!(e.flags & 1)) {
    const o = yt(e), t = ge[ge.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && o >= yt(t) ? ge.push(e) : ge.splice(ks(o), 0, e), e.flags |= 1, bl();
  }
}
function bl() {
  or || (or = ml.then(vl));
}
function gl(e) {
  $(e) ? Yo.push(...e) : bo && e.id === -1 ? bo.splice(Wo + 1, 0, e) : e.flags & 1 || (Yo.push(e), e.flags |= 1), bl();
}
function rc(e, o, t = Be + 1) {
  for (f.NODE_ENV !== "production" && (o = o || /* @__PURE__ */ new Map()); t < ge.length; t++) {
    const r = ge[t];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || f.NODE_ENV !== "production" && On(o, r))
        continue;
      ge.splice(t, 1), t--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function kl(e) {
  if (Yo.length) {
    const o = [...new Set(Yo)].sort(
      (t, r) => yt(t) - yt(r)
    );
    if (Yo.length = 0, bo) {
      bo.push(...o);
      return;
    }
    for (bo = o, f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Wo = 0; Wo < bo.length; Wo++) {
      const t = bo[Wo];
      f.NODE_ENV !== "production" && On(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
    }
    bo = null, Wo = 0;
  }
}
const yt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function vl(e) {
  f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const o = f.NODE_ENV !== "production" ? (t) => On(e, t) : se;
  try {
    for (Be = 0; Be < ge.length; Be++) {
      const t = ge[Be];
      if (t && !(t.flags & 8)) {
        if (f.NODE_ENV !== "production" && o(t))
          continue;
        t.flags & 4 && (t.flags &= -2), et(
          t,
          t.i,
          t.i ? 15 : 14
        ), t.flags & 4 || (t.flags &= -2);
      }
    }
  } finally {
    for (; Be < ge.length; Be++) {
      const t = ge[Be];
      t && (t.flags &= -2);
    }
    Be = -1, ge.length = 0, kl(e), or = null, (ge.length || Yo.length) && vl(e);
  }
}
function On(e, o) {
  const t = e.get(o) || 0;
  if (t > gs) {
    const r = o.i, n = r && ei(r.type);
    return St(
      `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(o, t + 1), !1;
}
let Ge = !1;
const Ut = /* @__PURE__ */ new Map();
f.NODE_ENV !== "production" && (Dt().__VUE_HMR_RUNTIME__ = {
  createRecord: Lr(xl),
  rerender: Lr(ys),
  reload: Lr(ws)
});
const Po = /* @__PURE__ */ new Map();
function vs(e) {
  const o = e.type.__hmrId;
  let t = Po.get(o);
  t || (xl(o, e.type), t = Po.get(o)), t.instances.add(e);
}
function xs(e) {
  Po.get(e.type.__hmrId).instances.delete(e);
}
function xl(e, o) {
  return Po.has(e) ? !1 : (Po.set(e, {
    initialDef: tr(o),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function tr(e) {
  return oi(e) ? e.__vccOpts : e;
}
function ys(e, o) {
  const t = Po.get(e);
  t && (t.initialDef.render = o, [...t.instances].forEach((r) => {
    o && (r.render = o, tr(r.type).render = o), r.renderCache = [], Ge = !0, r.update(), Ge = !1;
  }));
}
function ws(e, o) {
  const t = Po.get(e);
  if (!t) return;
  o = tr(o), nc(t.initialDef, o);
  const r = [...t.instances];
  for (let n = 0; n < r.length; n++) {
    const c = r[n], l = tr(c.type);
    let i = Ut.get(l);
    i || (l !== t.initialDef && nc(l, o), Ut.set(l, i = /* @__PURE__ */ new Set())), i.add(c), c.appContext.propsCache.delete(c.type), c.appContext.emitsCache.delete(c.type), c.appContext.optionsCache.delete(c.type), c.ceReload ? (i.add(c), c.ceReload(o.styles), i.delete(c)) : c.parent ? Er(() => {
      Ge = !0, c.parent.update(), Ge = !1, i.delete(c);
    }) : c.appContext.reload ? c.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), c.root.ce && c !== c.root && c.root.ce._removeChildStyle(l);
  }
  gl(() => {
    Ut.clear();
  });
}
function nc(e, o) {
  te(e, o);
  for (const t in e)
    t !== "__file" && !(t in o) && delete e[t];
}
function Lr(e) {
  return (o, t) => {
    try {
      return e(o, t);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Xe, ut = [], rn = !1;
function zt(e, ...o) {
  Xe ? Xe.emit(e, ...o) : rn || ut.push({ event: e, args: o });
}
function yl(e, o) {
  var t, r;
  Xe = e, Xe ? (Xe.enabled = !0, ut.forEach(({ event: n, args: c }) => Xe.emit(n, ...c)), ut = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (t = window.navigator) == null ? void 0 : t.userAgent) != null && r.includes("jsdom")) ? ((o.__VUE_DEVTOOLS_HOOK_REPLAY__ = o.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((c) => {
    yl(c, o);
  }), setTimeout(() => {
    Xe || (o.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, rn = !0, ut = []);
  }, 3e3)) : (rn = !0, ut = []);
}
function _s(e, o) {
  zt("app:init", e, o, {
    Fragment: ce,
    Text: Vt,
    Comment: Ve,
    Static: Bt
  });
}
function Es(e) {
  zt("app:unmount", e);
}
const Ns = /* @__PURE__ */ Dn(
  "component:added"
  /* COMPONENT_ADDED */
), wl = /* @__PURE__ */ Dn(
  "component:updated"
  /* COMPONENT_UPDATED */
), Cs = /* @__PURE__ */ Dn(
  "component:removed"
  /* COMPONENT_REMOVED */
), Os = (e) => {
  Xe && typeof Xe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Xe.cleanupBuffer(e) && Cs(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  return (o) => {
    zt(
      e,
      o.appContext.app,
      o.uid,
      o.parent ? o.parent.uid : void 0,
      o
    );
  };
}
const Ds = /* @__PURE__ */ _l(
  "perf:start"
  /* PERFORMANCE_START */
), Ss = /* @__PURE__ */ _l(
  "perf:end"
  /* PERFORMANCE_END */
);
function _l(e) {
  return (o, t, r) => {
    zt(e, o.appContext.app, o.uid, o, t, r);
  };
}
function zs(e, o, t) {
  zt(
    "component:emit",
    e.appContext.app,
    e,
    o,
    t
  );
}
let fe = null, El = null;
function rr(e) {
  const o = fe;
  return fe = e, El = e && e.type.__scopeId || null, o;
}
function Vs(e, o = fe, t) {
  if (!o || e._n)
    return e;
  const r = (...n) => {
    r._d && mc(-1);
    const c = rr(o);
    let l;
    try {
      l = e(...n);
    } finally {
      rr(c), r._d && mc(1);
    }
    return f.NODE_ENV !== "production" && wl(o), l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Nl(e) {
  ki(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function Qe(e, o) {
  if (fe === null)
    return f.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const t = Sr(fe), r = e.dirs || (e.dirs = []);
  for (let n = 0; n < o.length; n++) {
    let [c, l, i, s = Y] = o[n];
    c && (I(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && lo(l), r.push({
      dir: c,
      instance: t,
      value: l,
      oldValue: void 0,
      arg: i,
      modifiers: s
    }));
  }
  return e;
}
function Eo(e, o, t, r) {
  const n = e.dirs, c = o && o.dirs;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    c && (i.oldValue = c[l].value);
    let s = i.dir[r];
    s && (Ie(), to(s, t, 8, [
      e.el,
      i,
      e,
      o
    ]), Re());
  }
}
const Ts = Symbol("_vte"), $s = (e) => e.__isTeleport;
function Sn(e, o) {
  e.shapeFlag & 6 && e.component ? (e.transition = o, Sn(e.component.subTree, o)) : e.shapeFlag & 128 ? (e.ssContent.transition = o.clone(e.ssContent), e.ssFallback.transition = o.clone(e.ssFallback)) : e.transition = o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ot(e, o) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    te({ name: e.name }, o, { setup: e })
  ) : e;
}
function Cl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ms = /* @__PURE__ */ new WeakSet();
function nr(e, o, t, r, n = !1) {
  if ($(e)) {
    e.forEach(
      (_, T) => nr(
        _,
        o && ($(o) ? o[T] : o),
        t,
        r,
        n
      )
    );
    return;
  }
  if (gt(r) && !n) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && nr(e, o, t, r.component.subTree);
    return;
  }
  const c = r.shapeFlag & 4 ? Sr(r.component) : r.el, l = n ? null : c, { i, r: s } = e;
  if (f.NODE_ENV !== "production" && !i) {
    C(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = o && o.r, u = i.refs === Y ? i.refs = {} : i.refs, d = i.setupState, m = H(d), b = d === Y ? () => !1 : (_) => f.NODE_ENV !== "production" && (q(m, _) && !le(m[_]) && C(
    `Template ref "${_}" used on a non-ref value. It will not work in the production build.`
  ), Ms.has(m[_])) ? !1 : q(m, _);
  if (p != null && p !== s && (re(p) ? (u[p] = null, b(p) && (d[p] = null)) : le(p) && (p.value = null)), I(s))
    et(s, i, 12, [l, u]);
  else {
    const _ = re(s), T = le(s);
    if (_ || T) {
      const X = () => {
        if (e.f) {
          const R = _ ? b(s) ? d[s] : u[s] : s.value;
          n ? $(R) && gn(R, c) : $(R) ? R.includes(c) || R.push(c) : _ ? (u[s] = [c], b(s) && (d[s] = u[s])) : (s.value = [c], e.k && (u[e.k] = s.value));
        } else _ ? (u[s] = l, b(s) && (d[s] = l)) : T ? (s.value = l, e.k && (u[e.k] = l)) : f.NODE_ENV !== "production" && C("Invalid template ref type:", s, `(${typeof s})`);
      };
      l ? (X.id = -1, De(X, t)) : X();
    } else f.NODE_ENV !== "production" && C("Invalid template ref type:", s, `(${typeof s})`);
  }
}
Dt().requestIdleCallback;
Dt().cancelIdleCallback;
const gt = (e) => !!e.type.__asyncLoader, zn = (e) => e.type.__isKeepAlive;
function Ps(e, o) {
  Ol(e, "a", o);
}
function js(e, o) {
  Ol(e, "da", o);
}
function Ol(e, o, t = de) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = t;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (Nr(o, r, t), t) {
    let n = t.parent;
    for (; n && n.parent; )
      zn(n.parent.vnode) && As(r, o, t, n), n = n.parent;
  }
}
function As(e, o, t, r) {
  const n = Nr(
    o,
    e,
    r,
    !0
    /* prepend */
  );
  Dl(() => {
    gn(r[o], n);
  }, t);
}
function Nr(e, o, t = de, r = !1) {
  if (t) {
    const n = t[e] || (t[e] = []), c = o.__weh || (o.__weh = (...l) => {
      Ie();
      const i = Tt(t), s = to(o, t, e, l);
      return i(), Re(), s;
    });
    return r ? n.unshift(c) : n.push(c), c;
  } else if (f.NODE_ENV !== "production") {
    const n = Co(Nn[e].replace(/ hook$/, ""));
    C(
      `${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const uo = (e) => (o, t = de) => {
  (!_t || e === "sp") && Nr(e, (...r) => o(...r), t);
}, Is = uo("bm"), Cr = uo("m"), Rs = uo(
  "bu"
), Fs = uo("u"), Ls = uo(
  "bum"
), Dl = uo("um"), Us = uo(
  "sp"
), Hs = uo("rtg"), Ws = uo("rtc");
function Bs(e, o = de) {
  Nr("ec", e, o);
}
const Ks = Symbol.for("v-ndc");
function So(e, o, t, r) {
  let n;
  const c = t, l = $(e);
  if (l || re(e)) {
    const i = l && To(e);
    let s = !1, p = !1;
    i && (s = !ve(e), p = oo(e), e = yr(e)), n = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      n[u] = o(
        s ? p ? Zt(he(e[u])) : he(e[u]) : e[u],
        u,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    f.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), n = new Array(e);
    for (let i = 0; i < e; i++)
      n[i] = o(i + 1, i, void 0, c);
  } else if (G(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (i, s) => o(i, s, void 0, c)
      );
    else {
      const i = Object.keys(e);
      n = new Array(i.length);
      for (let s = 0, p = i.length; s < p; s++) {
        const u = i[s];
        n[s] = o(e[u], u, s, c);
      }
    }
  else
    n = [];
  return n;
}
const nn = (e) => e ? Ql(e) ? Sr(e) : nn(e.parent) : null, Mo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => f.NODE_ENV !== "production" ? Je(e.props) : e.props,
    $attrs: (e) => f.NODE_ENV !== "production" ? Je(e.attrs) : e.attrs,
    $slots: (e) => f.NODE_ENV !== "production" ? Je(e.slots) : e.slots,
    $refs: (e) => f.NODE_ENV !== "production" ? Je(e.refs) : e.refs,
    $parent: (e) => nn(e.parent),
    $root: (e) => nn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Er(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cn.bind(e.proxy)),
    $watch: (e) => Oa.bind(e)
  })
), Vn = (e) => e === "_" || e === "$", Ur = (e, o) => e !== Y && !e.__isScriptSetup && q(e, o), Sl = {
  get({ _: e }, o) {
    if (o === "__v_skip")
      return !0;
    const { ctx: t, setupState: r, data: n, props: c, accessCache: l, type: i, appContext: s } = e;
    if (f.NODE_ENV !== "production" && o === "__isVue")
      return !0;
    let p;
    if (o[0] !== "$") {
      const b = l[o];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[o];
          case 2:
            return n[o];
          case 4:
            return t[o];
          case 3:
            return c[o];
        }
      else {
        if (Ur(r, o))
          return l[o] = 1, r[o];
        if (n !== Y && q(n, o))
          return l[o] = 2, n[o];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && q(p, o)
        )
          return l[o] = 3, c[o];
        if (t !== Y && q(t, o))
          return l[o] = 4, t[o];
        cn && (l[o] = 0);
      }
    }
    const u = Mo[o];
    let d, m;
    if (u)
      return o === "$attrs" ? (ie(e.attrs, "get", ""), f.NODE_ENV !== "production" && sr()) : f.NODE_ENV !== "production" && o === "$slots" && ie(e, "get", o), u(e);
    if (
      // css module (injected by vue-loader)
      (d = i.__cssModules) && (d = d[o])
    )
      return d;
    if (t !== Y && q(t, o))
      return l[o] = 4, t[o];
    if (
      // global properties
      m = s.config.globalProperties, q(m, o)
    )
      return m[o];
    f.NODE_ENV !== "production" && fe && (!re(o) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    o.indexOf("__v") !== 0) && (n !== Y && Vn(o[0]) && q(n, o) ? C(
      `Property ${JSON.stringify(
        o
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === fe && C(
      `Property ${JSON.stringify(o)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, o, t) {
    const { data: r, setupState: n, ctx: c } = e;
    return Ur(n, o) ? (n[o] = t, !0) : f.NODE_ENV !== "production" && n.__isScriptSetup && q(n, o) ? (C(`Cannot mutate <script setup> binding "${o}" from Options API.`), !1) : r !== Y && q(r, o) ? (r[o] = t, !0) : q(e.props, o) ? (f.NODE_ENV !== "production" && C(`Attempting to mutate prop "${o}". Props are readonly.`), !1) : o[0] === "$" && o.slice(1) in e ? (f.NODE_ENV !== "production" && C(
      `Attempting to mutate public property "${o}". Properties starting with $ are reserved and readonly.`
    ), !1) : (f.NODE_ENV !== "production" && o in e.appContext.config.globalProperties ? Object.defineProperty(c, o, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : c[o] = t, !0);
  },
  has({
    _: { data: e, setupState: o, accessCache: t, ctx: r, appContext: n, propsOptions: c }
  }, l) {
    let i;
    return !!t[l] || e !== Y && q(e, l) || Ur(o, l) || (i = c[0]) && q(i, l) || q(r, l) || q(Mo, l) || q(n.config.globalProperties, l);
  },
  defineProperty(e, o, t) {
    return t.get != null ? e._.accessCache[o] = 0 : q(t, "value") && this.set(e, o, t.value, null), Reflect.defineProperty(e, o, t);
  }
};
f.NODE_ENV !== "production" && (Sl.ownKeys = (e) => (C(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function qs(e) {
  const o = {};
  return Object.defineProperty(o, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Mo).forEach((t) => {
    Object.defineProperty(o, t, {
      configurable: !0,
      enumerable: !1,
      get: () => Mo[t](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: se
    });
  }), o;
}
function Ys(e) {
  const {
    ctx: o,
    propsOptions: [t]
  } = e;
  t && Object.keys(t).forEach((r) => {
    Object.defineProperty(o, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: se
    });
  });
}
function Xs(e) {
  const { ctx: o, setupState: t } = e;
  Object.keys(H(t)).forEach((r) => {
    if (!t.__isScriptSetup) {
      if (Vn(r[0])) {
        C(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(o, r, {
        enumerable: !0,
        configurable: !0,
        get: () => t[r],
        set: se
      });
    }
  });
}
function cr(e) {
  return $(e) ? e.reduce(
    (o, t) => (o[t] = null, o),
    {}
  ) : e;
}
function Js(e, o) {
  return !e || !o ? e || o : $(e) && $(o) ? e.concat(o) : te({}, cr(e), cr(o));
}
function Gs() {
  const e = /* @__PURE__ */ Object.create(null);
  return (o, t) => {
    e[t] ? C(`${o} property "${t}" is already defined in ${e[t]}.`) : e[t] = o;
  };
}
let cn = !0;
function Qs(e) {
  const o = Vl(e), t = e.proxy, r = e.ctx;
  cn = !1, o.beforeCreate && cc(o.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: c,
    methods: l,
    watch: i,
    provide: s,
    inject: p,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: m,
    beforeUpdate: b,
    updated: _,
    activated: T,
    deactivated: X,
    beforeDestroy: R,
    beforeUnmount: P,
    destroyed: F,
    unmounted: Z,
    render: S,
    renderTracked: ae,
    renderTriggered: $e,
    errorCaptured: pe,
    serverPrefetch: xe,
    // public API
    expose: ro,
    inheritAttrs: ho,
    // assets
    components: Me,
    directives: Mt,
    filters: Kn
  } = o, po = f.NODE_ENV !== "production" ? Gs() : null;
  if (f.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const W in B)
        po("Props", W);
  }
  if (p && Zs(p, r, po), l)
    for (const B in l) {
      const W = l[B];
      I(W) ? (f.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: W.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = W.bind(t), f.NODE_ENV !== "production" && po("Methods", B)) : f.NODE_ENV !== "production" && C(
        `Method "${B}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (n) {
    f.NODE_ENV !== "production" && !I(n) && C(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = n.call(t, t);
    if (f.NODE_ENV !== "production" && kn(B) && C(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !G(B))
      f.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = En(B), f.NODE_ENV !== "production")
      for (const W in B)
        po("Data", W), Vn(W[0]) || Object.defineProperty(r, W, {
          configurable: !0,
          enumerable: !0,
          get: () => B[W],
          set: se
        });
  }
  if (cn = !0, c)
    for (const B in c) {
      const W = c[B], Fe = I(W) ? W.bind(t, t) : I(W.get) ? W.get.bind(t, t) : se;
      f.NODE_ENV !== "production" && Fe === se && C(`Computed property "${B}" has no getter.`);
      const $r = !I(W) && I(W.set) ? W.set.bind(t) : f.NODE_ENV !== "production" ? () => {
        C(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : se, tt = vo({
        get: Fe,
        set: $r
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (Io) => tt.value = Io
      }), f.NODE_ENV !== "production" && po("Computed", B);
    }
  if (i)
    for (const B in i)
      zl(i[B], r, t, B);
  if (s) {
    const B = I(s) ? s.call(t) : s;
    Reflect.ownKeys(B).forEach((W) => {
      ca(W, B[W]);
    });
  }
  u && cc(u, e, "c");
  function ye(B, W) {
    $(W) ? W.forEach((Fe) => B(Fe.bind(t))) : W && B(W.bind(t));
  }
  if (ye(Is, d), ye(Cr, m), ye(Rs, b), ye(Fs, _), ye(Ps, T), ye(js, X), ye(Bs, pe), ye(Ws, ae), ye(Hs, $e), ye(Ls, P), ye(Dl, Z), ye(Us, xe), $(ro))
    if (ro.length) {
      const B = e.exposed || (e.exposed = {});
      ro.forEach((W) => {
        Object.defineProperty(B, W, {
          get: () => t[W],
          set: (Fe) => t[W] = Fe
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === se && (e.render = S), ho != null && (e.inheritAttrs = ho), Me && (e.components = Me), Mt && (e.directives = Mt), xe && Cl(e);
}
function Zs(e, o, t = se) {
  $(e) && (e = ln(e));
  for (const r in e) {
    const n = e[r];
    let c;
    G(n) ? "default" in n ? c = Ht(
      n.from || r,
      n.default,
      !0
    ) : c = Ht(n.from || r) : c = Ht(n), le(c) ? Object.defineProperty(o, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (l) => c.value = l
    }) : o[r] = c, f.NODE_ENV !== "production" && t("Inject", r);
  }
}
function cc(e, o, t) {
  to(
    $(e) ? e.map((r) => r.bind(o.proxy)) : e.bind(o.proxy),
    o,
    t
  );
}
function zl(e, o, t, r) {
  let n = r.includes(".") ? Ul(t, r) : () => t[r];
  if (re(e)) {
    const c = o[e];
    I(c) ? Wr(n, c) : f.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, c);
  } else if (I(e))
    Wr(n, e.bind(t));
  else if (G(e))
    if ($(e))
      e.forEach((c) => zl(c, o, t, r));
    else {
      const c = I(e.handler) ? e.handler.bind(t) : o[e.handler];
      I(c) ? Wr(n, c, e) : f.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, c);
    }
  else f.NODE_ENV !== "production" && C(`Invalid watch option: "${r}"`, e);
}
function Vl(e) {
  const o = e.type, { mixins: t, extends: r } = o, {
    mixins: n,
    optionsCache: c,
    config: { optionMergeStrategies: l }
  } = e.appContext, i = c.get(o);
  let s;
  return i ? s = i : !n.length && !t && !r ? s = o : (s = {}, n.length && n.forEach(
    (p) => lr(s, p, l, !0)
  ), lr(s, o, l)), G(o) && c.set(o, s), s;
}
function lr(e, o, t, r = !1) {
  const { mixins: n, extends: c } = o;
  c && lr(e, c, t, !0), n && n.forEach(
    (l) => lr(e, l, t, !0)
  );
  for (const l in o)
    if (r && l === "expose")
      f.NODE_ENV !== "production" && C(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = ea[l] || t && t[l];
      e[l] = i ? i(e[l], o[l]) : o[l];
    }
  return e;
}
const ea = {
  data: lc,
  props: ic,
  emits: ic,
  // objects
  methods: ht,
  computed: ht,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: ht,
  directives: ht,
  // watch
  watch: ta,
  // provide / inject
  provide: lc,
  inject: oa
};
function lc(e, o) {
  return o ? e ? function() {
    return te(
      I(e) ? e.call(this, this) : e,
      I(o) ? o.call(this, this) : o
    );
  } : o : e;
}
function oa(e, o) {
  return ht(ln(e), ln(o));
}
function ln(e) {
  if ($(e)) {
    const o = {};
    for (let t = 0; t < e.length; t++)
      o[e[t]] = e[t];
    return o;
  }
  return e;
}
function be(e, o) {
  return e ? [...new Set([].concat(e, o))] : o;
}
function ht(e, o) {
  return e ? te(/* @__PURE__ */ Object.create(null), e, o) : o;
}
function ic(e, o) {
  return e ? $(e) && $(o) ? [.../* @__PURE__ */ new Set([...e, ...o])] : te(
    /* @__PURE__ */ Object.create(null),
    cr(e),
    cr(o ?? {})
  ) : o;
}
function ta(e, o) {
  if (!e) return o;
  if (!o) return e;
  const t = te(/* @__PURE__ */ Object.create(null), e);
  for (const r in o)
    t[r] = be(e[r], o[r]);
  return t;
}
function Tl() {
  return {
    app: null,
    config: {
      isNativeTag: bi,
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
let ra = 0;
function na(e, o) {
  return function(r, n = null) {
    I(r) || (r = te({}, r)), n != null && !G(n) && (f.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), n = null);
    const c = Tl(), l = /* @__PURE__ */ new WeakSet(), i = [];
    let s = !1;
    const p = c.app = {
      _uid: ra++,
      _component: r,
      _props: n,
      _container: null,
      _context: c,
      _instance: null,
      version: vc,
      get config() {
        return c.config;
      },
      set config(u) {
        f.NODE_ENV !== "production" && C(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...d) {
        return l.has(u) ? f.NODE_ENV !== "production" && C("Plugin has already been applied to target app.") : u && I(u.install) ? (l.add(u), u.install(p, ...d)) : I(u) ? (l.add(u), u(p, ...d)) : f.NODE_ENV !== "production" && C(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(u) {
        return c.mixins.includes(u) ? f.NODE_ENV !== "production" && C(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : c.mixins.push(u), p;
      },
      component(u, d) {
        return f.NODE_ENV !== "production" && hn(u, c.config), d ? (f.NODE_ENV !== "production" && c.components[u] && C(`Component "${u}" has already been registered in target app.`), c.components[u] = d, p) : c.components[u];
      },
      directive(u, d) {
        return f.NODE_ENV !== "production" && Nl(u), d ? (f.NODE_ENV !== "production" && c.directives[u] && C(`Directive "${u}" has already been registered in target app.`), c.directives[u] = d, p) : c.directives[u];
      },
      mount(u, d, m) {
        if (s)
          f.NODE_ENV !== "production" && C(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          f.NODE_ENV !== "production" && u.__vue_app__ && C(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = p._ceVNode || Ae(r, n);
          return b.appContext = c, m === !0 ? m = "svg" : m === !1 && (m = void 0), f.NODE_ENV !== "production" && (c.reload = () => {
            const _ = xo(b);
            _.el = null, e(_, u, m);
          }), e(b, u, m), s = !0, p._container = u, u.__vue_app__ = p, f.NODE_ENV !== "production" && (p._instance = b.component, _s(p, vc)), Sr(b.component);
        }
      },
      onUnmount(u) {
        f.NODE_ENV !== "production" && typeof u != "function" && C(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), i.push(u);
      },
      unmount() {
        s ? (to(
          i,
          p._instance,
          16
        ), e(null, p._container), f.NODE_ENV !== "production" && (p._instance = null, Es(p)), delete p._container.__vue_app__) : f.NODE_ENV !== "production" && C("Cannot unmount an app that is not mounted.");
      },
      provide(u, d) {
        return f.NODE_ENV !== "production" && u in c.provides && C(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), c.provides[u] = d, p;
      },
      runWithContext(u) {
        const d = Xo;
        Xo = p;
        try {
          return u();
        } finally {
          Xo = d;
        }
      }
    };
    return p;
  };
}
let Xo = null;
function ca(e, o) {
  if (!de)
    f.NODE_ENV !== "production" && C("provide() can only be used inside setup().");
  else {
    let t = de.provides;
    const r = de.parent && de.parent.provides;
    r === t && (t = de.provides = Object.create(r)), t[e] = o;
  }
}
function Ht(e, o, t = !1) {
  const r = de || fe;
  if (r || Xo) {
    const n = Xo ? Xo._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return t && I(o) ? o.call(r && r.proxy) : o;
    f.NODE_ENV !== "production" && C(`injection "${String(e)}" not found.`);
  } else f.NODE_ENV !== "production" && C("inject() can only be used inside setup() or functional components.");
}
const $l = {}, Ml = () => Object.create($l), Pl = (e) => Object.getPrototypeOf(e) === $l;
function la(e, o, t, r = !1) {
  const n = {}, c = Ml();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jl(e, o, n, c);
  for (const l in e.propsOptions[0])
    l in n || (n[l] = void 0);
  f.NODE_ENV !== "production" && Il(o || {}, n, e), t ? e.props = r ? n : os(n) : e.type.props ? e.props = n : e.props = c, e.attrs = c;
}
function ia(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function sa(e, o, t, r) {
  const {
    props: n,
    attrs: c,
    vnode: { patchFlag: l }
  } = e, i = H(n), [s] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(f.NODE_ENV !== "production" && ia(e)) && (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let m = u[d];
        if (Or(e.emitsOptions, m))
          continue;
        const b = o[m];
        if (s)
          if (q(c, m))
            b !== c[m] && (c[m] = b, p = !0);
          else {
            const _ = ke(m);
            n[_] = sn(
              s,
              i,
              _,
              b,
              e,
              !1
            );
          }
        else
          b !== c[m] && (c[m] = b, p = !0);
      }
    }
  } else {
    jl(e, o, n, c) && (p = !0);
    let u;
    for (const d in i)
      (!o || // for camelCase
      !q(o, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ne(d)) === d || !q(o, u))) && (s ? t && // for camelCase
      (t[d] !== void 0 || // for kebab-case
      t[u] !== void 0) && (n[d] = sn(
        s,
        i,
        d,
        void 0,
        e,
        !0
      )) : delete n[d]);
    if (c !== i)
      for (const d in c)
        (!o || !q(o, d)) && (delete c[d], p = !0);
  }
  p && Ye(e.attrs, "set", ""), f.NODE_ENV !== "production" && Il(o || {}, n, e);
}
function jl(e, o, t, r) {
  const [n, c] = e.propsOptions;
  let l = !1, i;
  if (o)
    for (let s in o) {
      if (ft(s))
        continue;
      const p = o[s];
      let u;
      n && q(n, u = ke(s)) ? !c || !c.includes(u) ? t[u] = p : (i || (i = {}))[u] = p : Or(e.emitsOptions, s) || (!(s in r) || p !== r[s]) && (r[s] = p, l = !0);
    }
  if (c) {
    const s = H(t), p = i || Y;
    for (let u = 0; u < c.length; u++) {
      const d = c[u];
      t[d] = sn(
        n,
        s,
        d,
        p[d],
        e,
        !q(p, d)
      );
    }
  }
  return l;
}
function sn(e, o, t, r, n, c) {
  const l = e[t];
  if (l != null) {
    const i = q(l, "default");
    if (i && r === void 0) {
      const s = l.default;
      if (l.type !== Function && !l.skipFactory && I(s)) {
        const { propsDefaults: p } = n;
        if (t in p)
          r = p[t];
        else {
          const u = Tt(n);
          r = p[t] = s.call(
            null,
            o
          ), u();
        }
      } else
        r = s;
      n.ce && n.ce._setProp(t, r);
    }
    l[
      0
      /* shouldCast */
    ] && (c && !i ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ne(t)) && (r = !0));
  }
  return r;
}
const aa = /* @__PURE__ */ new WeakMap();
function Al(e, o, t = !1) {
  const r = t ? aa : o.propsCache, n = r.get(e);
  if (n)
    return n;
  const c = e.props, l = {}, i = [];
  let s = !1;
  if (!I(e)) {
    const u = (d) => {
      s = !0;
      const [m, b] = Al(d, o, !0);
      te(l, m), b && i.push(...b);
    };
    !t && o.mixins.length && o.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!c && !s)
    return G(e) && r.set(e, qo), qo;
  if ($(c))
    for (let u = 0; u < c.length; u++) {
      f.NODE_ENV !== "production" && !re(c[u]) && C("props must be strings when using array syntax.", c[u]);
      const d = ke(c[u]);
      sc(d) && (l[d] = Y);
    }
  else if (c) {
    f.NODE_ENV !== "production" && !G(c) && C("invalid props options", c);
    for (const u in c) {
      const d = ke(u);
      if (sc(d)) {
        const m = c[u], b = l[d] = $(m) || I(m) ? { type: m } : te({}, m), _ = b.type;
        let T = !1, X = !0;
        if ($(_))
          for (let R = 0; R < _.length; ++R) {
            const P = _[R], F = I(P) && P.name;
            if (F === "Boolean") {
              T = !0;
              break;
            } else F === "String" && (X = !1);
          }
        else
          T = I(_) && _.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = T, b[
          1
          /* shouldCastTrue */
        ] = X, (T || q(b, "default")) && i.push(d);
      }
    }
  }
  const p = [l, i];
  return G(e) && r.set(e, p), p;
}
function sc(e) {
  return e[0] !== "$" && !ft(e) ? !0 : (f.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function da(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Il(e, o, t) {
  const r = H(o), n = t.propsOptions[0], c = Object.keys(e).map((l) => ke(l));
  for (const l in n) {
    let i = n[l];
    i != null && ua(
      l,
      r[l],
      i,
      f.NODE_ENV !== "production" ? Je(r) : r,
      !c.includes(l)
    );
  }
}
function ua(e, o, t, r, n) {
  const { type: c, required: l, validator: i, skipCheck: s } = t;
  if (l && n) {
    C('Missing required prop: "' + e + '"');
    return;
  }
  if (!(o == null && !l)) {
    if (c != null && c !== !0 && !s) {
      let p = !1;
      const u = $(c) ? c : [c], d = [];
      for (let m = 0; m < u.length && !p; m++) {
        const { valid: b, expectedType: _ } = pa(o, u[m]);
        d.push(_ || ""), p = b;
      }
      if (!p) {
        C(fa(e, o, d));
        return;
      }
    }
    i && !i(o, r) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ha = /* @__PURE__ */ ao(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function pa(e, o) {
  let t;
  const r = da(o);
  if (r === "null")
    t = e === null;
  else if (ha(r)) {
    const n = typeof e;
    t = n === r.toLowerCase(), !t && n === "object" && (t = e instanceof o);
  } else r === "Object" ? t = G(e) : r === "Array" ? t = $(e) : t = e instanceof o;
  return {
    valid: t,
    expectedType: r
  };
}
function fa(e, o, t) {
  if (t.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${t.map(gr).join(" | ")}`;
  const n = t[0], c = vn(o), l = ac(o, n), i = ac(o, c);
  return t.length === 1 && dc(n) && !ma(n, c) && (r += ` with value ${l}`), r += `, got ${c} `, dc(c) && (r += `with value ${i}.`), r;
}
function ac(e, o) {
  return o === "String" ? `"${e}"` : o === "Number" ? `${Number(e)}` : `${e}`;
}
function dc(e) {
  return ["string", "number", "boolean"].some((t) => e.toLowerCase() === t);
}
function ma(...e) {
  return e.some((o) => o.toLowerCase() === "boolean");
}
const Tn = (e) => e[0] === "_" || e === "$stable", $n = (e) => $(e) ? e.map(Pe) : [Pe(e)], ba = (e, o, t) => {
  if (o._n)
    return o;
  const r = Vs((...n) => (f.NODE_ENV !== "production" && de && !(t === null && fe) && !(t && t.root !== de.root) && C(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $n(o(...n))), t);
  return r._c = !1, r;
}, Rl = (e, o, t) => {
  const r = e._ctx;
  for (const n in e) {
    if (Tn(n)) continue;
    const c = e[n];
    if (I(c))
      o[n] = ba(n, c, r);
    else if (c != null) {
      f.NODE_ENV !== "production" && C(
        `Non-function value encountered for slot "${n}". Prefer function slots for better performance.`
      );
      const l = $n(c);
      o[n] = () => l;
    }
  }
}, Fl = (e, o) => {
  f.NODE_ENV !== "production" && !zn(e.vnode) && C(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = $n(o);
  e.slots.default = () => t;
}, an = (e, o, t) => {
  for (const r in o)
    (t || !Tn(r)) && (e[r] = o[r]);
}, ga = (e, o, t) => {
  const r = e.slots = Ml();
  if (e.vnode.shapeFlag & 32) {
    const n = o._;
    n ? (an(r, o, t), t && Jt(r, "_", n, !0)) : Rl(o, r);
  } else o && Fl(e, o);
}, ka = (e, o, t) => {
  const { vnode: r, slots: n } = e;
  let c = !0, l = Y;
  if (r.shapeFlag & 32) {
    const i = o._;
    i ? f.NODE_ENV !== "production" && Ge ? (an(n, o, t), Ye(e, "set", "$slots")) : t && i === 1 ? c = !1 : an(n, o, t) : (c = !o.$stable, Rl(o, n)), l = o;
  } else o && (Fl(e, o), l = { default: 1 });
  if (c)
    for (const i in n)
      !Tn(i) && l[i] == null && delete n[i];
};
let it, ko;
function Fo(e, o) {
  e.appContext.config.performance && ir() && ko.mark(`vue-${o}-${e.uid}`), f.NODE_ENV !== "production" && Ds(e, o, ir() ? ko.now() : Date.now());
}
function Lo(e, o) {
  if (e.appContext.config.performance && ir()) {
    const t = `vue-${o}-${e.uid}`, r = t + ":end";
    ko.mark(r), ko.measure(
      `<${zr(e, e.type)}> ${o}`,
      t,
      r
    ), ko.clearMarks(t), ko.clearMarks(r);
  }
  f.NODE_ENV !== "production" && Ss(e, o, ir() ? ko.now() : Date.now());
}
function ir() {
  return it !== void 0 || (typeof window < "u" && window.performance ? (it = !0, ko = window.performance) : it = !1), it;
}
function va() {
  const e = [];
  if (f.NODE_ENV !== "production" && e.length) {
    const o = e.length > 1;
    console.warn(
      `Feature flag${o ? "s" : ""} ${e.join(", ")} ${o ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const De = Ma;
function xa(e) {
  return ya(e);
}
function ya(e, o) {
  va();
  const t = Dt();
  t.__VUE__ = !0, f.NODE_ENV !== "production" && yl(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: r,
    remove: n,
    patchProp: c,
    createElement: l,
    createText: i,
    createComment: s,
    setText: p,
    setElementText: u,
    parentNode: d,
    nextSibling: m,
    setScopeId: b = se,
    insertStaticContent: _
  } = e, T = (a, h, k, y = null, v = null, x = null, O = void 0, N = null, E = f.NODE_ENV !== "production" && Ge ? !1 : !!h.dynamicChildren) => {
    if (a === h)
      return;
    a && !st(a, h) && (y = Pt(a), fo(a, v, x, !0), a = null), h.patchFlag === -2 && (E = !1, h.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: D } = h;
    switch (w) {
      case Vt:
        X(a, h, k, y);
        break;
      case Ve:
        R(a, h, k, y);
        break;
      case Bt:
        a == null ? P(h, k, y, O) : f.NODE_ENV !== "production" && F(a, h, k, O);
        break;
      case ce:
        Mt(
          a,
          h,
          k,
          y,
          v,
          x,
          O,
          N,
          E
        );
        break;
      default:
        D & 1 ? ae(
          a,
          h,
          k,
          y,
          v,
          x,
          O,
          N,
          E
        ) : D & 6 ? Kn(
          a,
          h,
          k,
          y,
          v,
          x,
          O,
          N,
          E
        ) : D & 64 || D & 128 ? w.process(
          a,
          h,
          k,
          y,
          v,
          x,
          O,
          N,
          E,
          nt
        ) : f.NODE_ENV !== "production" && C("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && v && nr(j, a && a.ref, x, h || a, !h);
  }, X = (a, h, k, y) => {
    if (a == null)
      r(
        h.el = i(h.children),
        k,
        y
      );
    else {
      const v = h.el = a.el;
      h.children !== a.children && p(v, h.children);
    }
  }, R = (a, h, k, y) => {
    a == null ? r(
      h.el = s(h.children || ""),
      k,
      y
    ) : h.el = a.el;
  }, P = (a, h, k, y) => {
    [a.el, a.anchor] = _(
      a.children,
      h,
      k,
      y,
      a.el,
      a.anchor
    );
  }, F = (a, h, k, y) => {
    if (h.children !== a.children) {
      const v = m(a.anchor);
      S(a), [h.el, h.anchor] = _(
        h.children,
        k,
        v,
        y
      );
    } else
      h.el = a.el, h.anchor = a.anchor;
  }, Z = ({ el: a, anchor: h }, k, y) => {
    let v;
    for (; a && a !== h; )
      v = m(a), r(a, k, y), a = v;
    r(h, k, y);
  }, S = ({ el: a, anchor: h }) => {
    let k;
    for (; a && a !== h; )
      k = m(a), n(a), a = k;
    n(h);
  }, ae = (a, h, k, y, v, x, O, N, E) => {
    h.type === "svg" ? O = "svg" : h.type === "math" && (O = "mathml"), a == null ? $e(
      h,
      k,
      y,
      v,
      x,
      O,
      N,
      E
    ) : ro(
      a,
      h,
      v,
      x,
      O,
      N,
      E
    );
  }, $e = (a, h, k, y, v, x, O, N) => {
    let E, w;
    const { props: j, shapeFlag: D, transition: M, dirs: L } = a;
    if (E = a.el = l(
      a.type,
      x,
      j && j.is,
      j
    ), D & 8 ? u(E, a.children) : D & 16 && xe(
      a.children,
      E,
      null,
      y,
      v,
      Hr(a, x),
      O,
      N
    ), L && Eo(a, null, y, "created"), pe(E, a, a.scopeId, O, y), j) {
      for (const ee in j)
        ee !== "value" && !ft(ee) && c(E, ee, null, j[ee], x, y);
      "value" in j && c(E, "value", null, j.value, x), (w = j.onVnodeBeforeMount) && We(w, y, a);
    }
    f.NODE_ENV !== "production" && (Jt(E, "__vnode", a, !0), Jt(E, "__vueParentComponent", y, !0)), L && Eo(a, null, y, "beforeMount");
    const K = wa(v, M);
    K && M.beforeEnter(E), r(E, h, k), ((w = j && j.onVnodeMounted) || K || L) && De(() => {
      w && We(w, y, a), K && M.enter(E), L && Eo(a, null, y, "mounted");
    }, v);
  }, pe = (a, h, k, y, v) => {
    if (k && b(a, k), y)
      for (let x = 0; x < y.length; x++)
        b(a, y[x]);
    if (v) {
      let x = v.subTree;
      if (f.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && (x = Pn(x.children) || x), h === x || Kl(x.type) && (x.ssContent === h || x.ssFallback === h)) {
        const O = v.vnode;
        pe(
          a,
          O,
          O.scopeId,
          O.slotScopeIds,
          v.parent
        );
      }
    }
  }, xe = (a, h, k, y, v, x, O, N, E = 0) => {
    for (let w = E; w < a.length; w++) {
      const j = a[w] = N ? go(a[w]) : Pe(a[w]);
      T(
        null,
        j,
        h,
        k,
        y,
        v,
        x,
        O,
        N
      );
    }
  }, ro = (a, h, k, y, v, x, O) => {
    const N = h.el = a.el;
    f.NODE_ENV !== "production" && (N.__vnode = h);
    let { patchFlag: E, dynamicChildren: w, dirs: j } = h;
    E |= a.patchFlag & 16;
    const D = a.props || Y, M = h.props || Y;
    let L;
    if (k && No(k, !1), (L = M.onVnodeBeforeUpdate) && We(L, k, h, a), j && Eo(h, a, k, "beforeUpdate"), k && No(k, !0), f.NODE_ENV !== "production" && Ge && (E = 0, O = !1, w = null), (D.innerHTML && M.innerHTML == null || D.textContent && M.textContent == null) && u(N, ""), w ? (ho(
      a.dynamicChildren,
      w,
      N,
      k,
      y,
      Hr(h, v),
      x
    ), f.NODE_ENV !== "production" && Wt(a, h)) : O || Fe(
      a,
      h,
      N,
      null,
      k,
      y,
      Hr(h, v),
      x,
      !1
    ), E > 0) {
      if (E & 16)
        Me(N, D, M, k, v);
      else if (E & 2 && D.class !== M.class && c(N, "class", null, M.class, v), E & 4 && c(N, "style", D.style, M.style, v), E & 8) {
        const K = h.dynamicProps;
        for (let ee = 0; ee < K.length; ee++) {
          const Q = K[ee], Oe = D[Q], we = M[Q];
          (we !== Oe || Q === "value") && c(N, Q, Oe, we, v, k);
        }
      }
      E & 1 && a.children !== h.children && u(N, h.children);
    } else !O && w == null && Me(N, D, M, k, v);
    ((L = M.onVnodeUpdated) || j) && De(() => {
      L && We(L, k, h, a), j && Eo(h, a, k, "updated");
    }, y);
  }, ho = (a, h, k, y, v, x, O) => {
    for (let N = 0; N < h.length; N++) {
      const E = a[N], w = h[N], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !st(E, w) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 70) ? d(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      T(
        E,
        w,
        j,
        null,
        y,
        v,
        x,
        O,
        !0
      );
    }
  }, Me = (a, h, k, y, v) => {
    if (h !== k) {
      if (h !== Y)
        for (const x in h)
          !ft(x) && !(x in k) && c(
            a,
            x,
            h[x],
            null,
            v,
            y
          );
      for (const x in k) {
        if (ft(x)) continue;
        const O = k[x], N = h[x];
        O !== N && x !== "value" && c(a, x, N, O, v, y);
      }
      "value" in k && c(a, "value", h.value, k.value, v);
    }
  }, Mt = (a, h, k, y, v, x, O, N, E) => {
    const w = h.el = a ? a.el : i(""), j = h.anchor = a ? a.anchor : i("");
    let { patchFlag: D, dynamicChildren: M, slotScopeIds: L } = h;
    f.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ge || D & 2048) && (D = 0, E = !1, M = null), L && (N = N ? N.concat(L) : L), a == null ? (r(w, k, y), r(j, k, y), xe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      k,
      j,
      v,
      x,
      O,
      N,
      E
    )) : D > 0 && D & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (ho(
      a.dynamicChildren,
      M,
      k,
      v,
      x,
      O,
      N
    ), f.NODE_ENV !== "production" ? Wt(a, h) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (h.key != null || v && h === v.subTree) && Wt(
        a,
        h,
        !0
        /* shallow */
      )
    )) : Fe(
      a,
      h,
      k,
      j,
      v,
      x,
      O,
      N,
      E
    );
  }, Kn = (a, h, k, y, v, x, O, N, E) => {
    h.slotScopeIds = N, a == null ? h.shapeFlag & 512 ? v.ctx.activate(
      h,
      k,
      y,
      O,
      E
    ) : po(
      h,
      k,
      y,
      v,
      x,
      O,
      E
    ) : ye(a, h, E);
  }, po = (a, h, k, y, v, x, O) => {
    const N = a.component = La(
      a,
      y,
      v
    );
    if (f.NODE_ENV !== "production" && N.type.__hmrId && vs(N), f.NODE_ENV !== "production" && (Ft(a), Fo(N, "mount")), zn(a) && (N.ctx.renderer = nt), f.NODE_ENV !== "production" && Fo(N, "init"), Ha(N, !1, O), f.NODE_ENV !== "production" && Lo(N, "init"), f.NODE_ENV !== "production" && Ge && (a.el = null), N.asyncDep) {
      if (v && v.registerDep(N, B, O), !a.el) {
        const E = N.subTree = Ae(Ve);
        R(null, E, h, k);
      }
    } else
      B(
        N,
        a,
        h,
        k,
        v,
        x,
        O
      );
    f.NODE_ENV !== "production" && (Lt(), Lo(N, "mount"));
  }, ye = (a, h, k) => {
    const y = h.component = a.component;
    if (Ta(a, h, k))
      if (y.asyncDep && !y.asyncResolved) {
        f.NODE_ENV !== "production" && Ft(h), W(y, h, k), f.NODE_ENV !== "production" && Lt();
        return;
      } else
        y.next = h, y.update();
    else
      h.el = a.el, y.vnode = h;
  }, B = (a, h, k, y, v, x, O) => {
    const N = () => {
      if (a.isMounted) {
        let { next: D, bu: M, u: L, parent: K, vnode: ee } = a;
        {
          const Ue = Ll(a);
          if (Ue) {
            D && (D.el = ee.el, W(a, D, O)), Ue.asyncDep.then(() => {
              a.isUnmounted || N();
            });
            return;
          }
        }
        let Q = D, Oe;
        f.NODE_ENV !== "production" && Ft(D || a.vnode), No(a, !1), D ? (D.el = ee.el, W(a, D, O)) : D = ee, M && Ho(M), (Oe = D.props && D.props.onVnodeBeforeUpdate) && We(Oe, K, D, ee), No(a, !0), f.NODE_ENV !== "production" && Fo(a, "render");
        const we = hc(a);
        f.NODE_ENV !== "production" && Lo(a, "render");
        const Le = a.subTree;
        a.subTree = we, f.NODE_ENV !== "production" && Fo(a, "patch"), T(
          Le,
          we,
          // parent may have changed if it's in a teleport
          d(Le.el),
          // anchor may have changed if it's in a fragment
          Pt(Le),
          a,
          v,
          x
        ), f.NODE_ENV !== "production" && Lo(a, "patch"), D.el = we.el, Q === null && $a(a, we.el), L && De(L, v), (Oe = D.props && D.props.onVnodeUpdated) && De(
          () => We(Oe, K, D, ee),
          v
        ), f.NODE_ENV !== "production" && wl(a), f.NODE_ENV !== "production" && Lt();
      } else {
        let D;
        const { el: M, props: L } = h, { bm: K, m: ee, parent: Q, root: Oe, type: we } = a, Le = gt(h);
        No(a, !1), K && Ho(K), !Le && (D = L && L.onVnodeBeforeMount) && We(D, Q, h), No(a, !0);
        {
          Oe.ce && Oe.ce._injectChildStyle(we), f.NODE_ENV !== "production" && Fo(a, "render");
          const Ue = a.subTree = hc(a);
          f.NODE_ENV !== "production" && Lo(a, "render"), f.NODE_ENV !== "production" && Fo(a, "patch"), T(
            null,
            Ue,
            k,
            y,
            a,
            v,
            x
          ), f.NODE_ENV !== "production" && Lo(a, "patch"), h.el = Ue.el;
        }
        if (ee && De(ee, v), !Le && (D = L && L.onVnodeMounted)) {
          const Ue = h;
          De(
            () => We(D, Q, Ue),
            v
          );
        }
        (h.shapeFlag & 256 || Q && gt(Q.vnode) && Q.vnode.shapeFlag & 256) && a.a && De(a.a, v), a.isMounted = !0, f.NODE_ENV !== "production" && Ns(a), h = k = y = null;
      }
    };
    a.scope.on();
    const E = a.effect = new Jc(N);
    a.scope.off();
    const w = a.update = E.run.bind(E), j = a.job = E.runIfDirty.bind(E);
    j.i = a, j.id = a.uid, E.scheduler = () => Er(j), No(a, !0), f.NODE_ENV !== "production" && (E.onTrack = a.rtc ? (D) => Ho(a.rtc, D) : void 0, E.onTrigger = a.rtg ? (D) => Ho(a.rtg, D) : void 0), w();
  }, W = (a, h, k) => {
    h.component = a;
    const y = a.vnode.props;
    a.vnode = h, a.next = null, sa(a, h.props, y, k), ka(a, h.children, k), Ie(), rc(a), Re();
  }, Fe = (a, h, k, y, v, x, O, N, E = !1) => {
    const w = a && a.children, j = a ? a.shapeFlag : 0, D = h.children, { patchFlag: M, shapeFlag: L } = h;
    if (M > 0) {
      if (M & 128) {
        tt(
          w,
          D,
          k,
          y,
          v,
          x,
          O,
          N,
          E
        );
        return;
      } else if (M & 256) {
        $r(
          w,
          D,
          k,
          y,
          v,
          x,
          O,
          N,
          E
        );
        return;
      }
    }
    L & 8 ? (j & 16 && rt(w, v, x), D !== w && u(k, D)) : j & 16 ? L & 16 ? tt(
      w,
      D,
      k,
      y,
      v,
      x,
      O,
      N,
      E
    ) : rt(w, v, x, !0) : (j & 8 && u(k, ""), L & 16 && xe(
      D,
      k,
      y,
      v,
      x,
      O,
      N,
      E
    ));
  }, $r = (a, h, k, y, v, x, O, N, E) => {
    a = a || qo, h = h || qo;
    const w = a.length, j = h.length, D = Math.min(w, j);
    let M;
    for (M = 0; M < D; M++) {
      const L = h[M] = E ? go(h[M]) : Pe(h[M]);
      T(
        a[M],
        L,
        k,
        null,
        v,
        x,
        O,
        N,
        E
      );
    }
    w > j ? rt(
      a,
      v,
      x,
      !0,
      !1,
      D
    ) : xe(
      h,
      k,
      y,
      v,
      x,
      O,
      N,
      E,
      D
    );
  }, tt = (a, h, k, y, v, x, O, N, E) => {
    let w = 0;
    const j = h.length;
    let D = a.length - 1, M = j - 1;
    for (; w <= D && w <= M; ) {
      const L = a[w], K = h[w] = E ? go(h[w]) : Pe(h[w]);
      if (st(L, K))
        T(
          L,
          K,
          k,
          null,
          v,
          x,
          O,
          N,
          E
        );
      else
        break;
      w++;
    }
    for (; w <= D && w <= M; ) {
      const L = a[D], K = h[M] = E ? go(h[M]) : Pe(h[M]);
      if (st(L, K))
        T(
          L,
          K,
          k,
          null,
          v,
          x,
          O,
          N,
          E
        );
      else
        break;
      D--, M--;
    }
    if (w > D) {
      if (w <= M) {
        const L = M + 1, K = L < j ? h[L].el : y;
        for (; w <= M; )
          T(
            null,
            h[w] = E ? go(h[w]) : Pe(h[w]),
            k,
            K,
            v,
            x,
            O,
            N,
            E
          ), w++;
      }
    } else if (w > M)
      for (; w <= D; )
        fo(a[w], v, x, !0), w++;
    else {
      const L = w, K = w, ee = /* @__PURE__ */ new Map();
      for (w = K; w <= M; w++) {
        const me = h[w] = E ? go(h[w]) : Pe(h[w]);
        me.key != null && (f.NODE_ENV !== "production" && ee.has(me.key) && C(
          "Duplicate keys found during update:",
          JSON.stringify(me.key),
          "Make sure keys are unique."
        ), ee.set(me.key, w));
      }
      let Q, Oe = 0;
      const we = M - K + 1;
      let Le = !1, Ue = 0;
      const ct = new Array(we);
      for (w = 0; w < we; w++) ct[w] = 0;
      for (w = L; w <= D; w++) {
        const me = a[w];
        if (Oe >= we) {
          fo(me, v, x, !0);
          continue;
        }
        let He;
        if (me.key != null)
          He = ee.get(me.key);
        else
          for (Q = K; Q <= M; Q++)
            if (ct[Q - K] === 0 && st(me, h[Q])) {
              He = Q;
              break;
            }
        He === void 0 ? fo(me, v, x, !0) : (ct[He - K] = w + 1, He >= Ue ? Ue = He : Le = !0, T(
          me,
          h[He],
          k,
          null,
          v,
          x,
          O,
          N,
          E
        ), Oe++);
      }
      const Yn = Le ? _a(ct) : qo;
      for (Q = Yn.length - 1, w = we - 1; w >= 0; w--) {
        const me = K + w, He = h[me], Xn = me + 1 < j ? h[me + 1].el : y;
        ct[w] === 0 ? T(
          null,
          He,
          k,
          Xn,
          v,
          x,
          O,
          N,
          E
        ) : Le && (Q < 0 || w !== Yn[Q] ? Io(He, k, Xn, 2) : Q--);
      }
    }
  }, Io = (a, h, k, y, v = null) => {
    const { el: x, type: O, transition: N, children: E, shapeFlag: w } = a;
    if (w & 6) {
      Io(a.component.subTree, h, k, y);
      return;
    }
    if (w & 128) {
      a.suspense.move(h, k, y);
      return;
    }
    if (w & 64) {
      O.move(a, h, k, nt);
      return;
    }
    if (O === ce) {
      r(x, h, k);
      for (let D = 0; D < E.length; D++)
        Io(E[D], h, k, y);
      r(a.anchor, h, k);
      return;
    }
    if (O === Bt) {
      Z(a, h, k);
      return;
    }
    if (y !== 2 && w & 1 && N)
      if (y === 0)
        N.beforeEnter(x), r(x, h, k), De(() => N.enter(x), v);
      else {
        const { leave: D, delayLeave: M, afterLeave: L } = N, K = () => {
          a.ctx.isUnmounted ? n(x) : r(x, h, k);
        }, ee = () => {
          D(x, () => {
            K(), L && L();
          });
        };
        M ? M(x, K, ee) : ee();
      }
    else
      r(x, h, k);
  }, fo = (a, h, k, y = !1, v = !1) => {
    const {
      type: x,
      props: O,
      ref: N,
      children: E,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: D,
      dirs: M,
      cacheIndex: L
    } = a;
    if (D === -2 && (v = !1), N != null && (Ie(), nr(N, null, k, a, !0), Re()), L != null && (h.renderCache[L] = void 0), j & 256) {
      h.ctx.deactivate(a);
      return;
    }
    const K = j & 1 && M, ee = !gt(a);
    let Q;
    if (ee && (Q = O && O.onVnodeBeforeUnmount) && We(Q, h, a), j & 6)
      mi(a.component, k, y);
    else {
      if (j & 128) {
        a.suspense.unmount(k, y);
        return;
      }
      K && Eo(a, null, h, "beforeUnmount"), j & 64 ? a.type.remove(
        a,
        h,
        k,
        nt,
        y
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== ce || D > 0 && D & 64) ? rt(
        w,
        h,
        k,
        !1,
        !0
      ) : (x === ce && D & 384 || !v && j & 16) && rt(E, h, k), y && Mr(a);
    }
    (ee && (Q = O && O.onVnodeUnmounted) || K) && De(() => {
      Q && We(Q, h, a), K && Eo(a, null, h, "unmounted");
    }, k);
  }, Mr = (a) => {
    const { type: h, el: k, anchor: y, transition: v } = a;
    if (h === ce) {
      f.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && v && !v.persisted ? a.children.forEach((O) => {
        O.type === Ve ? n(O.el) : Mr(O);
      }) : fi(k, y);
      return;
    }
    if (h === Bt) {
      S(a);
      return;
    }
    const x = () => {
      n(k), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: O, delayLeave: N } = v, E = () => O(k, x);
      N ? N(a.el, x, E) : E();
    } else
      x();
  }, fi = (a, h) => {
    let k;
    for (; a !== h; )
      k = m(a), n(a), a = k;
    n(h);
  }, mi = (a, h, k) => {
    f.NODE_ENV !== "production" && a.type.__hmrId && xs(a);
    const {
      bum: y,
      scope: v,
      job: x,
      subTree: O,
      um: N,
      m: E,
      a: w,
      parent: j,
      slots: { __: D }
    } = a;
    uc(E), uc(w), y && Ho(y), j && $(D) && D.forEach((M) => {
      j.renderCache[M] = void 0;
    }), v.stop(), x && (x.flags |= 8, fo(O, a, h, k)), N && De(N, h), De(() => {
      a.isUnmounted = !0;
    }, h), h && h.pendingBranch && !h.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === h.pendingId && (h.deps--, h.deps === 0 && h.resolve()), f.NODE_ENV !== "production" && Os(a);
  }, rt = (a, h, k, y = !1, v = !1, x = 0) => {
    for (let O = x; O < a.length; O++)
      fo(a[O], h, k, y, v);
  }, Pt = (a) => {
    if (a.shapeFlag & 6)
      return Pt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const h = m(a.anchor || a.el), k = h && h[Ts];
    return k ? m(k) : h;
  };
  let Pr = !1;
  const qn = (a, h, k) => {
    a == null ? h._vnode && fo(h._vnode, null, null, !0) : T(
      h._vnode || null,
      a,
      h,
      null,
      null,
      null,
      k
    ), h._vnode = a, Pr || (Pr = !0, rc(), kl(), Pr = !1);
  }, nt = {
    p: T,
    um: fo,
    m: Io,
    r: Mr,
    mt: po,
    mc: xe,
    pc: Fe,
    pbc: ho,
    n: Pt,
    o: e
  };
  return {
    render: qn,
    hydrate: void 0,
    createApp: na(qn)
  };
}
function Hr({ type: e, props: o }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && o && o.encoding && o.encoding.includes("html") ? void 0 : t;
}
function No({ effect: e, job: o }, t) {
  t ? (e.flags |= 32, o.flags |= 4) : (e.flags &= -33, o.flags &= -5);
}
function wa(e, o) {
  return (!e || e && !e.pendingBranch) && o && !o.persisted;
}
function Wt(e, o, t = !1) {
  const r = e.children, n = o.children;
  if ($(r) && $(n))
    for (let c = 0; c < r.length; c++) {
      const l = r[c];
      let i = n[c];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = n[c] = go(n[c]), i.el = l.el), !t && i.patchFlag !== -2 && Wt(l, i)), i.type === Vt && (i.el = l.el), i.type === Ve && !i.el && (i.el = l.el), f.NODE_ENV !== "production" && i.el && (i.el.__vnode = i);
    }
}
function _a(e) {
  const o = e.slice(), t = [0];
  let r, n, c, l, i;
  const s = e.length;
  for (r = 0; r < s; r++) {
    const p = e[r];
    if (p !== 0) {
      if (n = t[t.length - 1], e[n] < p) {
        o[r] = n, t.push(r);
        continue;
      }
      for (c = 0, l = t.length - 1; c < l; )
        i = c + l >> 1, e[t[i]] < p ? c = i + 1 : l = i;
      p < e[t[c]] && (c > 0 && (o[r] = t[c - 1]), t[c] = r);
    }
  }
  for (c = t.length, l = t[c - 1]; c-- > 0; )
    t[c] = l, l = o[l];
  return t;
}
function Ll(e) {
  const o = e.subTree.component;
  if (o)
    return o.asyncDep && !o.asyncResolved ? o : Ll(o);
}
function uc(e) {
  if (e)
    for (let o = 0; o < e.length; o++)
      e[o].flags |= 8;
}
const Ea = Symbol.for("v-scx"), Na = () => {
  {
    const e = Ht(Ea);
    return e || f.NODE_ENV !== "production" && C(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ca(e, o) {
  return Mn(
    e,
    null,
    f.NODE_ENV !== "production" ? te({}, o, { flush: "sync" }) : { flush: "sync" }
  );
}
function Wr(e, o, t) {
  return f.NODE_ENV !== "production" && !I(o) && C(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Mn(e, o, t);
}
function Mn(e, o, t = Y) {
  const { immediate: r, deep: n, flush: c, once: l } = t;
  f.NODE_ENV !== "production" && !o && (r !== void 0 && C(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && C(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), l !== void 0 && C(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const i = te({}, t);
  f.NODE_ENV !== "production" && (i.onWarn = C);
  const s = o && r || !o && c !== "post";
  let p;
  if (_t) {
    if (c === "sync") {
      const b = Na();
      p = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!s) {
      const b = () => {
      };
      return b.stop = se, b.resume = se, b.pause = se, b;
    }
  }
  const u = de;
  i.call = (b, _, T) => to(b, u, _, T);
  let d = !1;
  c === "post" ? i.scheduler = (b) => {
    De(b, u && u.suspense);
  } : c !== "sync" && (d = !0, i.scheduler = (b, _) => {
    _ ? b() : Er(b);
  }), i.augmentJob = (b) => {
    o && (b.flags |= 4), d && (b.flags |= 2, u && (b.id = u.uid, b.i = u));
  };
  const m = us(e, o, i);
  return _t && (p ? p.push(m) : s && m()), m;
}
function Oa(e, o, t) {
  const r = this.proxy, n = re(e) ? e.includes(".") ? Ul(r, e) : () => r[e] : e.bind(r, r);
  let c;
  I(o) ? c = o : (c = o.handler, t = o);
  const l = Tt(this), i = Mn(n, c.bind(r), t);
  return l(), i;
}
function Ul(e, o) {
  const t = o.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < t.length && r; n++)
      r = r[t[n]];
    return r;
  };
}
function Da(e, o, t = Y) {
  const r = Gl();
  if (f.NODE_ENV !== "production" && !r)
    return C("useModel() called without active instance."), ne();
  const n = ke(o);
  if (f.NODE_ENV !== "production" && !r.propsOptions[0][n])
    return C(`useModel() called with prop "${o}" which is not declared.`), ne();
  const c = Ne(o), l = Hl(e, n), i = is((s, p) => {
    let u, d = Y, m;
    return Ca(() => {
      const b = e[n];
      Ee(u, b) && (u = b, p());
    }), {
      get() {
        return s(), t.get ? t.get(u) : u;
      },
      set(b) {
        const _ = t.set ? t.set(b) : b;
        if (!Ee(_, u) && !(d !== Y && Ee(b, d)))
          return;
        const T = r.vnode.props;
        T && // check if parent has passed v-model
        (o in T || n in T || c in T) && (`onUpdate:${o}` in T || `onUpdate:${n}` in T || `onUpdate:${c}` in T) || (u = b, p()), r.emit(`update:${o}`, _), Ee(b, _) && Ee(b, d) && !Ee(_, m) && p(), d = b, m = _;
      }
    };
  });
  return i[Symbol.iterator] = () => {
    let s = 0;
    return {
      next() {
        return s < 2 ? { value: s++ ? l || Y : i, done: !1 } : { done: !0 };
      }
    };
  }, i;
}
const Hl = (e, o) => o === "modelValue" || o === "model-value" ? e.modelModifiers : e[`${o}Modifiers`] || e[`${ke(o)}Modifiers`] || e[`${Ne(o)}Modifiers`];
function Sa(e, o, ...t) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Y;
  if (f.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(o in u))
        (!d || !(Co(ke(o)) in d)) && C(
          `Component emitted event "${o}" but it is neither declared in the emits option nor as an "${Co(ke(o))}" prop.`
        );
      else {
        const m = u[o];
        I(m) && (m(...t) || C(
          `Invalid event arguments: event validation failed for event "${o}".`
        ));
      }
  }
  let n = t;
  const c = o.startsWith("update:"), l = c && Hl(r, o.slice(7));
  if (l && (l.trim && (n = t.map((u) => re(u) ? u.trim() : u)), l.number && (n = t.map(Gt))), f.NODE_ENV !== "production" && zs(e, o, n), f.NODE_ENV !== "production") {
    const u = o.toLowerCase();
    u !== o && r[Co(u)] && C(
      `Event "${u}" is emitted in component ${zr(
        e,
        e.type
      )} but the handler is registered for "${o}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ne(
        o
      )}" instead of "${o}".`
    );
  }
  let i, s = r[i = Co(o)] || // also try camelCase event handler (#2249)
  r[i = Co(ke(o))];
  !s && c && (s = r[i = Co(Ne(o))]), s && to(
    s,
    e,
    6,
    n
  );
  const p = r[i + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, to(
      p,
      e,
      6,
      n
    );
  }
}
function Wl(e, o, t = !1) {
  const r = o.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const c = e.emits;
  let l = {}, i = !1;
  if (!I(e)) {
    const s = (p) => {
      const u = Wl(p, o, !0);
      u && (i = !0, te(l, u));
    };
    !t && o.mixins.length && o.mixins.forEach(s), e.extends && s(e.extends), e.mixins && e.mixins.forEach(s);
  }
  return !c && !i ? (G(e) && r.set(e, null), null) : ($(c) ? c.forEach((s) => l[s] = null) : te(l, c), G(e) && r.set(e, l), l);
}
function Or(e, o) {
  return !e || !Ct(o) ? !1 : (o = o.slice(2).replace(/Once$/, ""), q(e, o[0].toLowerCase() + o.slice(1)) || q(e, Ne(o)) || q(e, o));
}
let dn = !1;
function sr() {
  dn = !0;
}
function hc(e) {
  const {
    type: o,
    vnode: t,
    proxy: r,
    withProxy: n,
    propsOptions: [c],
    slots: l,
    attrs: i,
    emit: s,
    render: p,
    renderCache: u,
    props: d,
    data: m,
    setupState: b,
    ctx: _,
    inheritAttrs: T
  } = e, X = rr(e);
  let R, P;
  f.NODE_ENV !== "production" && (dn = !1);
  try {
    if (t.shapeFlag & 4) {
      const S = n || r, ae = f.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(S, {
        get($e, pe, xe) {
          return C(
            `Property '${String(
              pe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get($e, pe, xe);
        }
      }) : S;
      R = Pe(
        p.call(
          ae,
          S,
          u,
          f.NODE_ENV !== "production" ? Je(d) : d,
          b,
          m,
          _
        )
      ), P = i;
    } else {
      const S = o;
      f.NODE_ENV !== "production" && i === d && sr(), R = Pe(
        S.length > 1 ? S(
          f.NODE_ENV !== "production" ? Je(d) : d,
          f.NODE_ENV !== "production" ? {
            get attrs() {
              return sr(), Je(i);
            },
            slots: l,
            emit: s
          } : { attrs: i, slots: l, emit: s }
        ) : S(
          f.NODE_ENV !== "production" ? Je(d) : d,
          null
        )
      ), P = o.props ? i : za(i);
    }
  } catch (S) {
    kt.length = 0, St(S, e, 1), R = Ae(Ve);
  }
  let F = R, Z;
  if (f.NODE_ENV !== "production" && R.patchFlag > 0 && R.patchFlag & 2048 && ([F, Z] = Bl(R)), P && T !== !1) {
    const S = Object.keys(P), { shapeFlag: ae } = F;
    if (S.length) {
      if (ae & 7)
        c && S.some(Xt) && (P = Va(
          P,
          c
        )), F = xo(F, P, !1, !0);
      else if (f.NODE_ENV !== "production" && !dn && F.type !== Ve) {
        const $e = Object.keys(i), pe = [], xe = [];
        for (let ro = 0, ho = $e.length; ro < ho; ro++) {
          const Me = $e[ro];
          Ct(Me) ? Xt(Me) || pe.push(Me[2].toLowerCase() + Me.slice(3)) : xe.push(Me);
        }
        xe.length && C(
          `Extraneous non-props attributes (${xe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), pe.length && C(
          `Extraneous non-emits event listeners (${pe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (f.NODE_ENV !== "production" && !pc(F) && C(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), F = xo(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(t.dirs) : t.dirs), t.transition && (f.NODE_ENV !== "production" && !pc(F) && C(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Sn(F, t.transition)), f.NODE_ENV !== "production" && Z ? Z(F) : R = F, rr(X), R;
}
const Bl = (e) => {
  const o = e.children, t = e.dynamicChildren, r = Pn(o, !1);
  if (r) {
    if (f.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Bl(r);
  } else return [e, void 0];
  const n = o.indexOf(r), c = t ? t.indexOf(r) : -1, l = (i) => {
    o[n] = i, t && (c > -1 ? t[c] = i : i.patchFlag > 0 && (e.dynamicChildren = [...t, i]));
  };
  return [Pe(r), l];
};
function Pn(e, o = !0) {
  let t;
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (Dr(n)) {
      if (n.type !== Ve || n.children === "v-if") {
        if (t)
          return;
        if (t = n, f.NODE_ENV !== "production" && o && t.patchFlag > 0 && t.patchFlag & 2048)
          return Pn(t.children);
      }
    } else
      return;
  }
  return t;
}
const za = (e) => {
  let o;
  for (const t in e)
    (t === "class" || t === "style" || Ct(t)) && ((o || (o = {}))[t] = e[t]);
  return o;
}, Va = (e, o) => {
  const t = {};
  for (const r in e)
    (!Xt(r) || !(r.slice(9) in o)) && (t[r] = e[r]);
  return t;
}, pc = (e) => e.shapeFlag & 7 || e.type === Ve;
function Ta(e, o, t) {
  const { props: r, children: n, component: c } = e, { props: l, children: i, patchFlag: s } = o, p = c.emitsOptions;
  if (f.NODE_ENV !== "production" && (n || i) && Ge || o.dirs || o.transition)
    return !0;
  if (t && s >= 0) {
    if (s & 1024)
      return !0;
    if (s & 16)
      return r ? fc(r, l, p) : !!l;
    if (s & 8) {
      const u = o.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (l[m] !== r[m] && !Or(p, m))
          return !0;
      }
    }
  } else
    return (n || i) && (!i || !i.$stable) ? !0 : r === l ? !1 : r ? l ? fc(r, l, p) : !0 : !!l;
  return !1;
}
function fc(e, o, t) {
  const r = Object.keys(o);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const c = r[n];
    if (o[c] !== e[c] && !Or(t, c))
      return !0;
  }
  return !1;
}
function $a({ vnode: e, parent: o }, t) {
  for (; o; ) {
    const r = o.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = o.vnode).el = t, o = o.parent;
    else
      break;
  }
}
const Kl = (e) => e.__isSuspense;
function Ma(e, o) {
  o && o.pendingBranch ? $(e) ? o.effects.push(...e) : o.effects.push(e) : gl(e);
}
const ce = Symbol.for("v-fgt"), Vt = Symbol.for("v-txt"), Ve = Symbol.for("v-cmt"), Bt = Symbol.for("v-stc"), kt = [];
let Se = null;
function z(e = !1) {
  kt.push(Se = e ? null : []);
}
function Pa() {
  kt.pop(), Se = kt[kt.length - 1] || null;
}
let wt = 1;
function mc(e, o = !1) {
  wt += e, e < 0 && Se && o && (Se.hasOnce = !0);
}
function ql(e) {
  return e.dynamicChildren = wt > 0 ? Se || qo : null, Pa(), wt > 0 && Se && Se.push(e), e;
}
function V(e, o, t, r, n, c) {
  return ql(
    g(
      e,
      o,
      t,
      r,
      n,
      c,
      !0
    )
  );
}
function jn(e, o, t, r, n) {
  return ql(
    Ae(
      e,
      o,
      t,
      r,
      n,
      !0
    )
  );
}
function Dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function st(e, o) {
  if (f.NODE_ENV !== "production" && o.shapeFlag & 6 && e.component) {
    const t = Ut.get(o.type);
    if (t && t.has(e.component))
      return e.shapeFlag &= -257, o.shapeFlag &= -513, !1;
  }
  return e.type === o.type && e.key === o.key;
}
const ja = (...e) => Xl(
  ...e
), Yl = ({ key: e }) => e ?? null, Kt = ({
  ref: e,
  ref_key: o,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || le(e) || I(e) ? { i: fe, r: e, k: o, f: !!t } : e : null);
function g(e, o = null, t = null, r = 0, n = null, c = e === ce ? 0 : 1, l = !1, i = !1) {
  const s = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: o,
    key: o && Yl(o),
    ref: o && Kt(o),
    scopeId: El,
    slotScopeIds: null,
    children: t,
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
    shapeFlag: c,
    patchFlag: r,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return i ? (An(s, t), c & 128 && e.normalize(s)) : t && (s.shapeFlag |= re(t) ? 8 : 16), f.NODE_ENV !== "production" && s.key !== s.key && C("VNode created with invalid key (NaN). VNode type:", s.type), wt > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (s.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  s.patchFlag !== 32 && Se.push(s), s;
}
const Ae = f.NODE_ENV !== "production" ? ja : Xl;
function Xl(e, o = null, t = null, r = 0, n = null, c = !1) {
  if ((!e || e === Ks) && (f.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = Ve), Dr(e)) {
    const i = xo(
      e,
      o,
      !0
      /* mergeRef: true */
    );
    return t && An(i, t), wt > 0 && !c && Se && (i.shapeFlag & 6 ? Se[Se.indexOf(e)] = i : Se.push(i)), i.patchFlag = -2, i;
  }
  if (oi(e) && (e = e.__vccOpts), o) {
    o = Aa(o);
    let { class: i, style: s } = o;
    i && !re(i) && (o.class = qe(i)), G(s) && (Qt(s) && !$(s) && (s = te({}, s)), o.style = kr(s));
  }
  const l = re(e) ? 1 : Kl(e) ? 128 : $s(e) ? 64 : G(e) ? 4 : I(e) ? 2 : 0;
  return f.NODE_ENV !== "production" && l & 4 && Qt(e) && (e = H(e), C(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), g(
    e,
    o,
    t,
    r,
    n,
    l,
    c,
    !0
  );
}
function Aa(e) {
  return e ? Qt(e) || Pl(e) ? te({}, e) : e : null;
}
function xo(e, o, t = !1, r = !1) {
  const { props: n, ref: c, patchFlag: l, children: i, transition: s } = e, p = o ? Ia(n || {}, o) : n, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Yl(p),
    ref: o && o.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && c ? $(c) ? c.concat(Kt(o)) : [c, Kt(o)] : Kt(o)
    ) : c,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f.NODE_ENV !== "production" && l === -1 && $(i) ? i.map(Jl) : i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: o && e.type !== ce ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: s,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && xo(e.ssContent),
    ssFallback: e.ssFallback && xo(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return s && r && Sn(
    u,
    s.clone(u)
  ), u;
}
function Jl(e) {
  const o = xo(e);
  return $(e.children) && (o.children = e.children.map(Jl)), o;
}
function so(e = " ", o = 0) {
  return Ae(Vt, null, e, o);
}
function ze(e = "", o = !1) {
  return o ? (z(), jn(Ve, null, e)) : Ae(Ve, null, e);
}
function Pe(e) {
  return e == null || typeof e == "boolean" ? Ae(Ve) : $(e) ? Ae(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Dr(e) ? go(e) : Ae(Vt, null, String(e));
}
function go(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xo(e);
}
function An(e, o) {
  let t = 0;
  const { shapeFlag: r } = e;
  if (o == null)
    o = null;
  else if ($(o))
    t = 16;
  else if (typeof o == "object")
    if (r & 65) {
      const n = o.default;
      n && (n._c && (n._d = !1), An(e, n()), n._c && (n._d = !0));
      return;
    } else {
      t = 32;
      const n = o._;
      !n && !Pl(o) ? o._ctx = fe : n === 3 && fe && (fe.slots._ === 1 ? o._ = 1 : (o._ = 2, e.patchFlag |= 1024));
    }
  else I(o) ? (o = { default: o, _ctx: fe }, t = 32) : (o = String(o), r & 64 ? (t = 16, o = [so(o)]) : t = 8);
  e.children = o, e.shapeFlag |= t;
}
function Ia(...e) {
  const o = {};
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    for (const n in r)
      if (n === "class")
        o.class !== r.class && (o.class = qe([o.class, r.class]));
      else if (n === "style")
        o.style = kr([o.style, r.style]);
      else if (Ct(n)) {
        const c = o[n], l = r[n];
        l && c !== l && !($(c) && c.includes(l)) && (o[n] = c ? [].concat(c, l) : l);
      } else n !== "" && (o[n] = r[n]);
  }
  return o;
}
function We(e, o, t, r = null) {
  to(e, o, 7, [
    t,
    r
  ]);
}
const Ra = Tl();
let Fa = 0;
function La(e, o, t) {
  const r = e.type, n = (o ? o.appContext : e.appContext) || Ra, c = {
    uid: Fa++,
    vnode: e,
    type: r,
    parent: o,
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
    scope: new Pi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: o ? o.provides : Object.create(n.provides),
    ids: o ? o.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Al(r, n),
    emitsOptions: Wl(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Y,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Y,
    data: Y,
    props: Y,
    attrs: Y,
    slots: Y,
    refs: Y,
    setupState: Y,
    setupContext: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
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
  return f.NODE_ENV !== "production" ? c.ctx = qs(c) : c.ctx = { _: c }, c.root = o ? o.root : c, c.emit = Sa.bind(null, c), e.ce && e.ce(c), c;
}
let de = null;
const Gl = () => de || fe;
let ar, un;
{
  const e = Dt(), o = (t, r) => {
    let n;
    return (n = e[t]) || (n = e[t] = []), n.push(r), (c) => {
      n.length > 1 ? n.forEach((l) => l(c)) : n[0](c);
    };
  };
  ar = o(
    "__VUE_INSTANCE_SETTERS__",
    (t) => de = t
  ), un = o(
    "__VUE_SSR_SETTERS__",
    (t) => _t = t
  );
}
const Tt = (e) => {
  const o = de;
  return ar(e), e.scope.on(), () => {
    e.scope.off(), ar(o);
  };
}, bc = () => {
  de && de.scope.off(), ar(null);
}, Ua = /* @__PURE__ */ ao("slot,component");
function hn(e, { isNativeTag: o }) {
  (Ua(e) || o(e)) && C(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ql(e) {
  return e.vnode.shapeFlag & 4;
}
let _t = !1;
function Ha(e, o = !1, t = !1) {
  o && un(o);
  const { props: r, children: n } = e.vnode, c = Ql(e);
  la(e, r, c, o), ga(e, n, t || o);
  const l = c ? Wa(e, o) : void 0;
  return o && un(!1), l;
}
function Wa(e, o) {
  var t;
  const r = e.type;
  if (f.NODE_ENV !== "production") {
    if (r.name && hn(r.name, e.appContext.config), r.components) {
      const c = Object.keys(r.components);
      for (let l = 0; l < c.length; l++)
        hn(c[l], e.appContext.config);
    }
    if (r.directives) {
      const c = Object.keys(r.directives);
      for (let l = 0; l < c.length; l++)
        Nl(c[l]);
    }
    r.compilerOptions && Ba() && C(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sl), f.NODE_ENV !== "production" && Ys(e);
  const { setup: n } = r;
  if (n) {
    Ie();
    const c = e.setupContext = n.length > 1 ? qa(e) : null, l = Tt(e), i = et(
      n,
      e,
      0,
      [
        f.NODE_ENV !== "production" ? Je(e.props) : e.props,
        c
      ]
    ), s = kn(i);
    if (Re(), l(), (s || e.sp) && !gt(e) && Cl(e), s) {
      if (i.then(bc, bc), o)
        return i.then((p) => {
          gc(e, p, o);
        }).catch((p) => {
          St(p, e, 0);
        });
      if (e.asyncDep = i, f.NODE_ENV !== "production" && !e.suspense) {
        const p = (t = r.name) != null ? t : "Anonymous";
        C(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      gc(e, i, o);
  } else
    Zl(e, o);
}
function gc(e, o, t) {
  I(o) ? e.type.__ssrInlineRender ? e.ssrRender = o : e.render = o : G(o) ? (f.NODE_ENV !== "production" && Dr(o) && C(
    "setup() should not return VNodes directly - return a render function instead."
  ), f.NODE_ENV !== "production" && (e.devtoolsRawSetupState = o), e.setupState = pl(o), f.NODE_ENV !== "production" && Xs(e)) : f.NODE_ENV !== "production" && o !== void 0 && C(
    `setup() should return an object. Received: ${o === null ? "null" : typeof o}`
  ), Zl(e, t);
}
const Ba = () => !0;
function Zl(e, o, t) {
  const r = e.type;
  e.render || (e.render = r.render || se);
  {
    const n = Tt(e);
    Ie();
    try {
      Qs(e);
    } finally {
      Re(), n();
    }
  }
  f.NODE_ENV !== "production" && !r.render && e.render === se && !o && (r.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : C("Component is missing template or render function: ", r));
}
const kc = f.NODE_ENV !== "production" ? {
  get(e, o) {
    return sr(), ie(e, "get", ""), e[o];
  },
  set() {
    return C("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return C("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, o) {
    return ie(e, "get", ""), e[o];
  }
};
function Ka(e) {
  return new Proxy(e.slots, {
    get(o, t) {
      return ie(e, "get", "$slots"), o[t];
    }
  });
}
function qa(e) {
  const o = (t) => {
    if (f.NODE_ENV !== "production" && (e.exposed && C("expose() should be called only once per setup()."), t != null)) {
      let r = typeof t;
      r === "object" && ($(t) ? r = "array" : le(t) && (r = "ref")), r !== "object" && C(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = t || {};
  };
  if (f.NODE_ENV !== "production") {
    let t, r;
    return Object.freeze({
      get attrs() {
        return t || (t = new Proxy(e.attrs, kc));
      },
      get slots() {
        return r || (r = Ka(e));
      },
      get emit() {
        return (n, ...c) => e.emit(n, ...c);
      },
      expose: o
    });
  } else
    return {
      attrs: new Proxy(e.attrs, kc),
      slots: e.slots,
      emit: e.emit,
      expose: o
    };
}
function Sr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(pl(ts(e.exposed)), {
    get(o, t) {
      if (t in o)
        return o[t];
      if (t in Mo)
        return Mo[t](e);
    },
    has(o, t) {
      return t in o || t in Mo;
    }
  })) : e.proxy;
}
const Ya = /(?:^|[-_])(\w)/g, Xa = (e) => e.replace(Ya, (o) => o.toUpperCase()).replace(/[-_]/g, "");
function ei(e, o = !0) {
  return I(e) ? e.displayName || e.name : e.name || o && e.__name;
}
function zr(e, o, t = !1) {
  let r = ei(o);
  if (!r && o.__file) {
    const n = o.__file.match(/([^/\\]+)\.\w+$/);
    n && (r = n[1]);
  }
  if (!r && e && e.parent) {
    const n = (c) => {
      for (const l in c)
        if (c[l] === o)
          return l;
    };
    r = n(
      e.components || e.parent.type.components
    ) || n(e.appContext.components);
  }
  return r ? Xa(r) : t ? "App" : "Anonymous";
}
function oi(e) {
  return I(e) && "__vccOpts" in e;
}
const vo = (e, o) => {
  const t = as(e, o, _t);
  if (f.NODE_ENV !== "production") {
    const r = Gl();
    r && r.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function Ja() {
  if (f.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, o = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, n = {
    __vue_custom_formatter: !0,
    header(d) {
      if (!G(d))
        return null;
      if (d.__isVue)
        return ["div", e, "VueInstance"];
      if (le(d)) {
        Ie();
        const m = d.value;
        return Re(), [
          "div",
          {},
          ["span", e, u(d)],
          "<",
          i(m),
          ">"
        ];
      } else {
        if (To(d))
          return [
            "div",
            {},
            ["span", e, ve(d) ? "ShallowReactive" : "Reactive"],
            "<",
            i(d),
            `>${oo(d) ? " (readonly)" : ""}`
          ];
        if (oo(d))
          return [
            "div",
            {},
            ["span", e, ve(d) ? "ShallowReadonly" : "Readonly"],
            "<",
            i(d),
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
          ...c(d.$)
        ];
    }
  };
  function c(d) {
    const m = [];
    d.type.props && d.props && m.push(l("props", H(d.props))), d.setupState !== Y && m.push(l("setup", d.setupState)), d.data !== Y && m.push(l("data", H(d.data)));
    const b = s(d, "computed");
    b && m.push(l("computed", b));
    const _ = s(d, "inject");
    return _ && m.push(l("injected", _)), m.push([
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
    ]), m;
  }
  function l(d, m) {
    return m = te({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((b) => [
          "div",
          {},
          ["span", r, b + ": "],
          i(m[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(d, m = !0) {
    return typeof d == "number" ? ["span", o, d] : typeof d == "string" ? ["span", t, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : G(d) ? ["object", { object: m ? H(d) : d }] : ["span", t, String(d)];
  }
  function s(d, m) {
    const b = d.type;
    if (I(b))
      return;
    const _ = {};
    for (const T in d.ctx)
      p(b, T, m) && (_[T] = d.ctx[T]);
    return _;
  }
  function p(d, m, b) {
    const _ = d[b];
    if ($(_) && _.includes(m) || G(_) && m in _ || d.extends && p(d.extends, m, b) || d.mixins && d.mixins.some((T) => p(T, m, b)))
      return !0;
  }
  function u(d) {
    return ve(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
const vc = "3.5.14", Te = f.NODE_ENV !== "production" ? C : se;
var ue = {};
let pn;
const xc = typeof window < "u" && window.trustedTypes;
if (xc)
  try {
    pn = /* @__PURE__ */ xc.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ue.NODE_ENV !== "production" && Te(`Error creating trusted types policy: ${e}`);
  }
const ti = pn ? (e) => pn.createHTML(e) : (e) => e, Ga = "http://www.w3.org/2000/svg", Qa = "http://www.w3.org/1998/Math/MathML", co = typeof document < "u" ? document : null, yc = co && /* @__PURE__ */ co.createElement("template"), Za = {
  insert: (e, o, t) => {
    o.insertBefore(e, t || null);
  },
  remove: (e) => {
    const o = e.parentNode;
    o && o.removeChild(e);
  },
  createElement: (e, o, t, r) => {
    const n = o === "svg" ? co.createElementNS(Ga, e) : o === "mathml" ? co.createElementNS(Qa, e) : t ? co.createElement(e, { is: t }) : co.createElement(e);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => co.createTextNode(e),
  createComment: (e) => co.createComment(e),
  setText: (e, o) => {
    e.nodeValue = o;
  },
  setElementText: (e, o) => {
    e.textContent = o;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => co.querySelector(e),
  setScopeId(e, o) {
    e.setAttribute(o, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, o, t, r, n, c) {
    const l = t ? t.previousSibling : o.lastChild;
    if (n && (n === c || n.nextSibling))
      for (; o.insertBefore(n.cloneNode(!0), t), !(n === c || !(n = n.nextSibling)); )
        ;
    else {
      yc.innerHTML = ti(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const i = yc.content;
      if (r === "svg" || r === "mathml") {
        const s = i.firstChild;
        for (; s.firstChild; )
          i.appendChild(s.firstChild);
        i.removeChild(s);
      }
      o.insertBefore(i, t);
    }
    return [
      // first
      l ? l.nextSibling : o.firstChild,
      // last
      t ? t.previousSibling : o.lastChild
    ];
  }
}, ed = Symbol("_vtc");
function od(e, o, t) {
  const r = e[ed];
  r && (o = (o ? [o, ...r] : [...r]).join(" ")), o == null ? e.removeAttribute("class") : t ? e.setAttribute("class", o) : e.className = o;
}
const wc = Symbol("_vod"), td = Symbol("_vsh"), rd = Symbol(ue.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), nd = /(^|;)\s*display\s*:/;
function cd(e, o, t) {
  const r = e.style, n = re(t);
  let c = !1;
  if (t && !n) {
    if (o)
      if (re(o))
        for (const l of o.split(";")) {
          const i = l.slice(0, l.indexOf(":")).trim();
          t[i] == null && qt(r, i, "");
        }
      else
        for (const l in o)
          t[l] == null && qt(r, l, "");
    for (const l in t)
      l === "display" && (c = !0), qt(r, l, t[l]);
  } else if (n) {
    if (o !== t) {
      const l = r[rd];
      l && (t += ";" + l), r.cssText = t, c = nd.test(t);
    }
  } else o && e.removeAttribute("style");
  wc in e && (e[wc] = c ? r.display : "", e[td] && (r.display = "none"));
}
const ld = /[^\\];\s*$/, _c = /\s*!important$/;
function qt(e, o, t) {
  if ($(t))
    t.forEach((r) => qt(e, o, r));
  else if (t == null && (t = ""), ue.NODE_ENV !== "production" && ld.test(t) && Te(
    `Unexpected semicolon at the end of '${o}' style value: '${t}'`
  ), o.startsWith("--"))
    e.setProperty(o, t);
  else {
    const r = id(e, o);
    _c.test(t) ? e.setProperty(
      Ne(r),
      t.replace(_c, ""),
      "important"
    ) : e[r] = t;
  }
}
const Ec = ["Webkit", "Moz", "ms"], Br = {};
function id(e, o) {
  const t = Br[o];
  if (t)
    return t;
  let r = ke(o);
  if (r !== "filter" && r in e)
    return Br[o] = r;
  r = gr(r);
  for (let n = 0; n < Ec.length; n++) {
    const c = Ec[n] + r;
    if (c in e)
      return Br[o] = c;
  }
  return o;
}
const Nc = "http://www.w3.org/1999/xlink";
function Cc(e, o, t, r, n, c = Ti(o)) {
  r && o.startsWith("xlink:") ? t == null ? e.removeAttributeNS(Nc, o.slice(6, o.length)) : e.setAttributeNS(Nc, o, t) : t == null || c && !qc(t) ? e.removeAttribute(o) : e.setAttribute(
    o,
    c ? "" : Ze(t) ? String(t) : t
  );
}
function Oc(e, o, t, r, n) {
  if (o === "innerHTML" || o === "textContent") {
    t != null && (e[o] = o === "innerHTML" ? ti(t) : t);
    return;
  }
  const c = e.tagName;
  if (o === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const i = c === "OPTION" ? e.getAttribute("value") || "" : e.value, s = t == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(t);
    (i !== s || !("_value" in e)) && (e.value = s), t == null && e.removeAttribute(o), e._value = t;
    return;
  }
  let l = !1;
  if (t === "" || t == null) {
    const i = typeof e[o];
    i === "boolean" ? t = qc(t) : t == null && i === "string" ? (t = "", l = !0) : i === "number" && (t = 0, l = !0);
  }
  try {
    e[o] = t;
  } catch (i) {
    ue.NODE_ENV !== "production" && !l && Te(
      `Failed setting prop "${o}" on <${c.toLowerCase()}>: value ${t} is invalid.`,
      i
    );
  }
  l && e.removeAttribute(n || o);
}
function Do(e, o, t, r) {
  e.addEventListener(o, t, r);
}
function sd(e, o, t, r) {
  e.removeEventListener(o, t, r);
}
const Dc = Symbol("_vei");
function ad(e, o, t, r, n = null) {
  const c = e[Dc] || (e[Dc] = {}), l = c[o];
  if (r && l)
    l.value = ue.NODE_ENV !== "production" ? zc(r, o) : r;
  else {
    const [i, s] = dd(o);
    if (r) {
      const p = c[o] = pd(
        ue.NODE_ENV !== "production" ? zc(r, o) : r,
        n
      );
      Do(e, i, p, s);
    } else l && (sd(e, i, l, s), c[o] = void 0);
  }
}
const Sc = /(?:Once|Passive|Capture)$/;
function dd(e) {
  let o;
  if (Sc.test(e)) {
    o = {};
    let r;
    for (; r = e.match(Sc); )
      e = e.slice(0, e.length - r[0].length), o[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ne(e.slice(2)), o];
}
let Kr = 0;
const ud = /* @__PURE__ */ Promise.resolve(), hd = () => Kr || (ud.then(() => Kr = 0), Kr = Date.now());
function pd(e, o) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    to(
      fd(r, t.value),
      o,
      5,
      [r]
    );
  };
  return t.value = e, t.attached = hd(), t;
}
function zc(e, o) {
  return I(e) || $(e) ? e : (Te(
    `Wrong type passed as event handler to ${o} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), se);
}
function fd(e, o) {
  if ($(o)) {
    const t = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      t.call(e), e._stopped = !0;
    }, o.map(
      (r) => (n) => !n._stopped && r && r(n)
    );
  } else
    return o;
}
const Vc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, md = (e, o, t, r, n, c) => {
  const l = n === "svg";
  o === "class" ? od(e, r, l) : o === "style" ? cd(e, t, r) : Ct(o) ? Xt(o) || ad(e, o, t, r, c) : (o[0] === "." ? (o = o.slice(1), !0) : o[0] === "^" ? (o = o.slice(1), !1) : bd(e, o, r, l)) ? (Oc(e, o, r), !e.tagName.includes("-") && (o === "value" || o === "checked" || o === "selected") && Cc(e, o, r, l, c, o !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(o) || !re(r)) ? Oc(e, ke(o), r, c, o) : (o === "true-value" ? e._trueValue = r : o === "false-value" && (e._falseValue = r), Cc(e, o, r, l));
};
function bd(e, o, t, r) {
  if (r)
    return !!(o === "innerHTML" || o === "textContent" || o in e && Vc(o) && I(t));
  if (o === "spellcheck" || o === "draggable" || o === "translate" || o === "autocorrect" || o === "form" || o === "list" && e.tagName === "INPUT" || o === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (o === "width" || o === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Vc(o) && re(t) ? !1 : o in e;
}
const Tc = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ri(e, o, t) {
  const r = /* @__PURE__ */ ot(e, o);
  mr(r) && te(r, o);
  class n extends In {
    constructor(l) {
      super(r, l, t);
    }
  }
  return n.def = r, n;
}
const gd = typeof HTMLElement < "u" ? HTMLElement : class {
};
class In extends gd {
  constructor(o, t = {}, r = jc) {
    super(), this._def = o, this._props = t, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== jc ? this._root = this.shadowRoot : (ue.NODE_ENV !== "production" && this.shadowRoot && Te(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), o.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let o = this;
    for (; o = o && (o.parentNode || o.host); )
      if (o instanceof In) {
        this._parent = o;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : o && o._pendingResolve ? this._pendingResolve = o._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(o = this._parent) {
    o && (this._instance.parent = o._instance, this._instance.provides = o._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Cn(() => {
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
    const o = (r, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: c, styles: l } = r;
      let i;
      if (c && !$(c))
        for (const s in c) {
          const p = c[s];
          (p === Number || p && p.type === Number) && (s in this._props && (this._props[s] = Qn(this._props[s])), (i || (i = /* @__PURE__ */ Object.create(null)))[ke(s)] = !0);
        }
      this._numberProps = i, n && this._resolveProps(r), this.shadowRoot ? this._applyStyles(l) : ue.NODE_ENV !== "production" && l && Te(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, t = this._def.__asyncLoader;
    t ? this._pendingResolve = t().then(
      (r) => o(this._def = r, !0)
    ) : o(this._def);
  }
  _mount(o) {
    ue.NODE_ENV !== "production" && !o.name && (o.name = "VueElement"), this._app = this._createApp(o), o.configureApp && o.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const t = this._instance && this._instance.exposed;
    if (t)
      for (const r in t)
        q(this, r) ? ue.NODE_ENV !== "production" && Te(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => A(t[r])
        });
  }
  _resolveProps(o) {
    const { props: t } = o, r = $(t) ? t : Object.keys(t || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && r.includes(n) && this._setProp(n, this[n]);
    for (const n of r.map(ke))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(c) {
          this._setProp(n, c, !0, !0);
        }
      });
  }
  _setAttr(o) {
    if (o.startsWith("data-v-")) return;
    const t = this.hasAttribute(o);
    let r = t ? this.getAttribute(o) : Tc;
    const n = ke(o);
    t && this._numberProps && this._numberProps[n] && (r = Qn(r)), this._setProp(n, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(o) {
    return this._props[o];
  }
  /**
   * @internal
   */
  _setProp(o, t, r = !0, n = !1) {
    if (t !== this._props[o] && (t === Tc ? delete this._props[o] : (this._props[o] = t, o === "key" && this._app && (this._app._ceVNode.key = t)), n && this._instance && this._update(), r)) {
      const c = this._ob;
      c && c.disconnect(), t === !0 ? this.setAttribute(Ne(o), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(Ne(o), t + "") : t || this.removeAttribute(Ne(o)), c && c.observe(this, { attributes: !0 });
    }
  }
  _update() {
    yd(this._createVNode(), this._root);
  }
  _createVNode() {
    const o = {};
    this.shadowRoot || (o.onVnodeMounted = o.onVnodeUpdated = this._renderSlots.bind(this));
    const t = Ae(this._def, te(o, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, ue.NODE_ENV !== "production" && (r.ceReload = (c) => {
        this._styles && (this._styles.forEach((l) => this._root.removeChild(l)), this._styles.length = 0), this._applyStyles(c), this._instance = null, this._update();
      });
      const n = (c, l) => {
        this.dispatchEvent(
          new CustomEvent(
            c,
            mr(l[0]) ? te({ detail: l }, l[0]) : { detail: l }
          )
        );
      };
      r.emit = (c, ...l) => {
        n(c, l), Ne(c) !== c && n(Ne(c), l);
      }, this._setParent();
    }), t;
  }
  _applyStyles(o, t) {
    if (!o) return;
    if (t) {
      if (t === this._def || this._styleChildren.has(t))
        return;
      this._styleChildren.add(t);
    }
    const r = this._nonce;
    for (let n = o.length - 1; n >= 0; n--) {
      const c = document.createElement("style");
      if (r && c.setAttribute("nonce", r), c.textContent = o[n], this.shadowRoot.prepend(c), ue.NODE_ENV !== "production")
        if (t) {
          if (t.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let l = this._childStyles.get(t.__hmrId);
            l || this._childStyles.set(t.__hmrId, l = []), l.push(c);
          }
        } else
          (this._styles || (this._styles = [])).push(c);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const o = this._slots = {};
    let t;
    for (; t = this.firstChild; ) {
      const r = t.nodeType === 1 && t.getAttribute("slot") || "default";
      (o[r] || (o[r] = [])).push(t), this.removeChild(t);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const o = (this._teleportTarget || this).querySelectorAll("slot"), t = this._instance.type.__scopeId;
    for (let r = 0; r < o.length; r++) {
      const n = o[r], c = n.getAttribute("name") || "default", l = this._slots[c], i = n.parentNode;
      if (l)
        for (const s of l) {
          if (t && s.nodeType === 1) {
            const p = t + "-s", u = document.createTreeWalker(s, 1);
            s.setAttribute(p, "");
            let d;
            for (; d = u.nextNode(); )
              d.setAttribute(p, "");
          }
          i.insertBefore(s, n);
        }
      else
        for (; n.firstChild; ) i.insertBefore(n.firstChild, n);
      i.removeChild(n);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(o) {
    this._applyStyles(o.styles, o);
  }
  /**
   * @internal
   */
  _removeChildStyle(o) {
    if (ue.NODE_ENV !== "production" && (this._styleChildren.delete(o), this._childStyles && o.__hmrId)) {
      const t = this._childStyles.get(o.__hmrId);
      t && (t.forEach((r) => this._root.removeChild(r)), t.length = 0);
    }
  }
}
const dr = (e) => {
  const o = e.props["onUpdate:modelValue"] || !1;
  return $(o) ? (t) => Ho(o, t) : o;
};
function kd(e) {
  e.target.composing = !0;
}
function $c(e) {
  const o = e.target;
  o.composing && (o.composing = !1, o.dispatchEvent(new Event("input")));
}
const Jo = Symbol("_assign"), fn = {
  created(e, { modifiers: { lazy: o, trim: t, number: r } }, n) {
    e[Jo] = dr(n);
    const c = r || n.props && n.props.type === "number";
    Do(e, o ? "change" : "input", (l) => {
      if (l.target.composing) return;
      let i = e.value;
      t && (i = i.trim()), c && (i = Gt(i)), e[Jo](i);
    }), t && Do(e, "change", () => {
      e.value = e.value.trim();
    }), o || (Do(e, "compositionstart", kd), Do(e, "compositionend", $c), Do(e, "change", $c));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: o }) {
    e.value = o ?? "";
  },
  beforeUpdate(e, { value: o, oldValue: t, modifiers: { lazy: r, trim: n, number: c } }, l) {
    if (e[Jo] = dr(l), e.composing) return;
    const i = (c || e.type === "number") && !/^0\d/.test(e.value) ? Gt(e.value) : e.value, s = o ?? "";
    i !== s && (document.activeElement === e && e.type !== "range" && (r && o === t || n && e.value.trim() === s) || (e.value = s));
  }
}, vd = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: o, modifiers: { number: t } }, r) {
    const n = fr(o);
    Do(e, "change", () => {
      const c = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => t ? Gt(ur(l)) : ur(l)
      );
      e[Jo](
        e.multiple ? n ? new Set(c) : c : c[0]
      ), e._assigning = !0, Cn(() => {
        e._assigning = !1;
      });
    }), e[Jo] = dr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: o }) {
    Mc(e, o);
  },
  beforeUpdate(e, o, t) {
    e[Jo] = dr(t);
  },
  updated(e, { value: o }) {
    e._assigning || Mc(e, o);
  }
};
function Mc(e, o) {
  const t = e.multiple, r = $(o);
  if (t && !r && !fr(o)) {
    ue.NODE_ENV !== "production" && Te(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(o).slice(8, -1)}.`
    );
    return;
  }
  for (let n = 0, c = e.options.length; n < c; n++) {
    const l = e.options[n], i = ur(l);
    if (t)
      if (r) {
        const s = typeof i;
        s === "string" || s === "number" ? l.selected = o.some((p) => String(p) === String(i)) : l.selected = Mi(o, i) > -1;
      } else
        l.selected = o.has(i);
    else if (vr(ur(l), o)) {
      e.selectedIndex !== n && (e.selectedIndex = n);
      return;
    }
  }
  !t && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function ur(e) {
  return "_value" in e ? e._value : e.value;
}
const xd = /* @__PURE__ */ te({ patchProp: md }, Za);
let Pc;
function ni() {
  return Pc || (Pc = xa(xd));
}
const yd = (...e) => {
  ni().render(...e);
}, jc = (...e) => {
  const o = ni().createApp(...e);
  ue.NODE_ENV !== "production" && (_d(o), Ed(o));
  const { mount: t } = o;
  return o.mount = (r) => {
    const n = Nd(r);
    if (!n) return;
    const c = o._component;
    !I(c) && !c.render && !c.template && (c.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const l = t(n, !1, wd(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), l;
  }, o;
};
function wd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _d(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (o) => Di(o) || Si(o) || zi(o),
    writable: !1
  });
}
function Ed(e) {
  {
    const o = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return o;
      },
      set() {
        Te(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Te(r), t;
      },
      set() {
        Te(r);
      }
    });
  }
}
function Nd(e) {
  if (re(e)) {
    const o = document.querySelector(e);
    return ue.NODE_ENV !== "production" && !o && Te(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), o;
  }
  return ue.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Te(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Cd = {};
function Od() {
  Ja();
}
Cd.NODE_ENV !== "production" && Od();
const Rt = 43200, Ac = 1440, Ic = Symbol.for("constructDateFrom");
function Rn(e, o) {
  return typeof e == "function" ? e(o) : e && typeof e == "object" && Ic in e ? e[Ic](o) : e instanceof Date ? new e.constructor(o) : new Date(o);
}
function yo(e, o) {
  return Rn(e, e);
}
let Dd = {};
function Sd() {
  return Dd;
}
function Rc(e) {
  const o = yo(e), t = new Date(
    Date.UTC(
      o.getFullYear(),
      o.getMonth(),
      o.getDate(),
      o.getHours(),
      o.getMinutes(),
      o.getSeconds(),
      o.getMilliseconds()
    )
  );
  return t.setUTCFullYear(o.getFullYear()), +e - +t;
}
function Fn(e, ...o) {
  const t = Rn.bind(
    null,
    e || o.find((r) => typeof r == "object")
  );
  return o.map(t);
}
function Yt(e, o) {
  const t = +yo(e) - +yo(o);
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function zd(e) {
  return Rn(e, Date.now());
}
function Vd(e, o, t) {
  const [r, n] = Fn(
    t?.in,
    e,
    o
  ), c = r.getFullYear() - n.getFullYear(), l = r.getMonth() - n.getMonth();
  return c * 12 + l;
}
function Td(e) {
  return (o) => {
    const r = (e ? Math[e] : Math.trunc)(o);
    return r === 0 ? 0 : r;
  };
}
function $d(e, o) {
  return +yo(e) - +yo(o);
}
function Md(e, o) {
  const t = yo(e);
  return t.setHours(23, 59, 59, 999), t;
}
function Pd(e, o) {
  const t = yo(e), r = t.getMonth();
  return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function jd(e, o) {
  const t = yo(e);
  return +Md(t) == +Pd(t);
}
function Ad(e, o, t) {
  const [r, n, c] = Fn(
    t?.in,
    e,
    e,
    o
  ), l = Yt(n, c), i = Math.abs(
    Vd(n, c)
  );
  if (i < 1) return 0;
  n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30), n.setMonth(n.getMonth() - l * i);
  let s = Yt(n, c) === -l;
  jd(r) && i === 1 && Yt(r, c) === 1 && (s = !1);
  const p = l * (i - +s);
  return p === 0 ? 0 : p;
}
function Id(e, o, t) {
  const r = $d(e, o) / 1e3;
  return Td(t?.roundingMethod)(r);
}
const Rd = {
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
}, Fd = (e, o, t) => {
  let r;
  const n = Rd[e];
  return typeof n == "string" ? r = n : o === 1 ? r = n.one : r = n.other.replace("{{count}}", o.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
};
function qr(e) {
  return (o = {}) => {
    const t = o.width ? String(o.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const Ld = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ud = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Hd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Wd = {
  date: qr({
    formats: Ld,
    defaultWidth: "full"
  }),
  time: qr({
    formats: Ud,
    defaultWidth: "full"
  }),
  dateTime: qr({
    formats: Hd,
    defaultWidth: "full"
  })
}, Bd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Kd = (e, o, t, r) => Bd[e];
function at(e) {
  return (o, t) => {
    const r = t?.context ? String(t.context) : "standalone";
    let n;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, i = t?.width ? String(t.width) : l;
      n = e.formattingValues[i] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, i = t?.width ? String(t.width) : e.defaultWidth;
      n = e.values[i] || e.values[l];
    }
    const c = e.argumentCallback ? e.argumentCallback(o) : o;
    return n[c];
  };
}
const qd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Yd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Xd = {
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
}, Jd = {
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
}, Gd = {
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
}, Qd = {
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
}, Zd = (e, o) => {
  const t = Number(e), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, eu = {
  ordinalNumber: Zd,
  era: at({
    values: qd,
    defaultWidth: "wide"
  }),
  quarter: at({
    values: Yd,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: at({
    values: Xd,
    defaultWidth: "wide"
  }),
  day: at({
    values: Jd,
    defaultWidth: "wide"
  }),
  dayPeriod: at({
    values: Gd,
    defaultWidth: "wide",
    formattingValues: Qd,
    defaultFormattingWidth: "wide"
  })
};
function dt(e) {
  return (o, t = {}) => {
    const r = t.width, n = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], c = o.match(n);
    if (!c)
      return null;
    const l = c[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(i) ? tu(i, (d) => d.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      ou(i, (d) => d.test(l))
    );
    let p;
    p = e.valueCallback ? e.valueCallback(s) : s, p = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(p)
    ) : p;
    const u = o.slice(l.length);
    return { value: p, rest: u };
  };
}
function ou(e, o) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && o(e[t]))
      return t;
}
function tu(e, o) {
  for (let t = 0; t < e.length; t++)
    if (o(e[t]))
      return t;
}
function ru(e) {
  return (o, t = {}) => {
    const r = o.match(e.matchPattern);
    if (!r) return null;
    const n = r[0], c = o.match(e.parsePattern);
    if (!c) return null;
    let l = e.valueCallback ? e.valueCallback(c[0]) : c[0];
    l = t.valueCallback ? t.valueCallback(l) : l;
    const i = o.slice(n.length);
    return { value: l, rest: i };
  };
}
const nu = /^(\d+)(th|st|nd|rd)?/i, cu = /\d+/i, lu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, iu = {
  any: [/^b/i, /^(a|c)/i]
}, su = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, au = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, du = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uu = {
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
}, fu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, mu = {
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
}, bu = {
  ordinalNumber: ru({
    matchPattern: nu,
    parsePattern: cu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: dt({
    matchPatterns: lu,
    defaultMatchWidth: "wide",
    parsePatterns: iu,
    defaultParseWidth: "any"
  }),
  quarter: dt({
    matchPatterns: su,
    defaultMatchWidth: "wide",
    parsePatterns: au,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: dt({
    matchPatterns: du,
    defaultMatchWidth: "wide",
    parsePatterns: uu,
    defaultParseWidth: "any"
  }),
  day: dt({
    matchPatterns: hu,
    defaultMatchWidth: "wide",
    parsePatterns: pu,
    defaultParseWidth: "any"
  }),
  dayPeriod: dt({
    matchPatterns: fu,
    defaultMatchWidth: "any",
    parsePatterns: mu,
    defaultParseWidth: "any"
  })
}, gu = {
  code: "en-US",
  formatDistance: Fd,
  formatLong: Wd,
  formatRelative: Kd,
  localize: eu,
  match: bu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ku(e, o, t) {
  const r = Sd(), n = t?.locale ?? r.locale ?? gu, c = 2520, l = Yt(e, o);
  if (isNaN(l)) throw new RangeError("Invalid time value");
  const i = Object.assign({}, t, {
    addSuffix: t?.addSuffix,
    comparison: l
  }), [s, p] = Fn(
    t?.in,
    ...l > 0 ? [o, e] : [e, o]
  ), u = Id(p, s), d = (Rc(p) - Rc(s)) / 1e3, m = Math.round((u - d) / 60);
  let b;
  if (m < 2)
    return t?.includeSeconds ? u < 5 ? n.formatDistance("lessThanXSeconds", 5, i) : u < 10 ? n.formatDistance("lessThanXSeconds", 10, i) : u < 20 ? n.formatDistance("lessThanXSeconds", 20, i) : u < 40 ? n.formatDistance("halfAMinute", 0, i) : u < 60 ? n.formatDistance("lessThanXMinutes", 1, i) : n.formatDistance("xMinutes", 1, i) : m === 0 ? n.formatDistance("lessThanXMinutes", 1, i) : n.formatDistance("xMinutes", m, i);
  if (m < 45)
    return n.formatDistance("xMinutes", m, i);
  if (m < 90)
    return n.formatDistance("aboutXHours", 1, i);
  if (m < Ac) {
    const _ = Math.round(m / 60);
    return n.formatDistance("aboutXHours", _, i);
  } else {
    if (m < c)
      return n.formatDistance("xDays", 1, i);
    if (m < Rt) {
      const _ = Math.round(m / Ac);
      return n.formatDistance("xDays", _, i);
    } else if (m < Rt * 2)
      return b = Math.round(m / Rt), n.formatDistance("aboutXMonths", b, i);
  }
  if (b = Ad(p, s), b < 12) {
    const _ = Math.round(m / Rt);
    return n.formatDistance("xMonths", _, i);
  } else {
    const _ = b % 12, T = Math.trunc(b / 12);
    return _ < 3 ? n.formatDistance("aboutXYears", T, i) : _ < 9 ? n.formatDistance("overXYears", T, i) : n.formatDistance("almostXYears", T + 1, i);
  }
}
function vu(e, o) {
  return ku(e, zd(e), o);
}
const Ln = () => {
  function e(o) {
    return vu(new Date(o), { addSuffix: !0 });
  }
  return {
    formatDate: e
  };
}, ci = /* @__PURE__ */ new Set(), Ce = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), jo = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), xu = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakSet();
let wo, Un = 0, Hn = 0;
const io = "__aa_tgt", Et = "__aa_del", pr = "__aa_new", yu = (e) => {
  const o = Ou(e);
  o && o.forEach((t) => Du(t));
}, wu = (e) => {
  e.forEach((o) => {
    o.target === wo && Eu(), Ce.has(o.target) && Ao(o.target);
  });
};
function _u(e) {
  const o = mn.get(e);
  o?.disconnect();
  let t = Ce.get(e), r = 0;
  const n = 5;
  t || (t = Zo(e), Ce.set(e, t));
  const { offsetWidth: c, offsetHeight: l } = wo, s = [
    t.top - n,
    c - (t.left + n + t.width),
    l - (t.top + n + t.height),
    t.left - n
  ].map((u) => `${-1 * Math.floor(u)}px`).join(" "), p = new IntersectionObserver(() => {
    ++r > 1 && Ao(e);
  }, {
    root: wo,
    threshold: 1,
    rootMargin: s
  });
  p.observe(e), mn.set(e, p);
}
function Ao(e) {
  clearTimeout(hr.get(e));
  const o = Vr(e), t = Nt(o) ? 500 : o.duration;
  hr.set(e, setTimeout(async () => {
    const r = jo.get(e);
    try {
      await r?.finished, Ce.set(e, Zo(e)), _u(e);
    } catch {
    }
  }, t));
}
function Eu() {
  clearTimeout(hr.get(wo)), hr.set(wo, setTimeout(() => {
    ci.forEach((e) => ai(e, (o) => li(() => Ao(o))));
  }, 100));
}
function Nu(e) {
  setTimeout(() => {
    xu.set(e, setInterval(() => li(Ao.bind(null, e)), 2e3));
  }, Math.round(2e3 * Math.random()));
}
function li(e) {
  typeof requestIdleCallback == "function" ? requestIdleCallback(() => e()) : requestAnimationFrame(() => e());
}
let bn, Bo;
const Cu = typeof window < "u" && "ResizeObserver" in window;
Cu && (wo = document.documentElement, bn = new MutationObserver(yu), Bo = new ResizeObserver(wu), window.addEventListener("scroll", () => {
  Hn = window.scrollY, Un = window.scrollX;
}), Bo.observe(wo));
function Ou(e) {
  return e.reduce((r, n) => [
    ...r,
    ...Array.from(n.addedNodes),
    ...Array.from(n.removedNodes)
  ], []).every((r) => r.nodeName === "#comment") ? !1 : e.reduce((r, n) => {
    if (r === !1)
      return !1;
    if (n.target instanceof Element) {
      if (Yr(n.target), !r.has(n.target)) {
        r.add(n.target);
        for (let c = 0; c < n.target.children.length; c++) {
          const l = n.target.children.item(c);
          if (l) {
            if (Et in l)
              return !1;
            Yr(n.target, l), r.add(l);
          }
        }
      }
      if (n.removedNodes.length)
        for (let c = 0; c < n.removedNodes.length; c++) {
          const l = n.removedNodes[c];
          if (Et in l)
            return !1;
          l instanceof Element && (r.add(l), Yr(n.target, l), Go.set(l, [
            n.previousSibling,
            n.nextSibling
          ]));
        }
    }
    return r;
  }, /* @__PURE__ */ new Set());
}
function Yr(e, o) {
  !o && !(io in e) ? Object.defineProperty(e, io, { value: e }) : o && !(io in o) && Object.defineProperty(o, io, { value: e });
}
function Du(e) {
  var o;
  const t = e.isConnected, r = Ce.has(e);
  t && Go.has(e) && Go.delete(e), jo.has(e) && ((o = jo.get(e)) === null || o === void 0 || o.cancel()), pr in e ? Fc(e) : r && t ? zu(e) : r && !t ? Vu(e) : Fc(e);
}
function Ke(e) {
  return Number(e.replace(/[^0-9.\-]/g, ""));
}
function Su(e) {
  let o = e.parentElement;
  for (; o; ) {
    if (o.scrollLeft || o.scrollTop)
      return { x: o.scrollLeft, y: o.scrollTop };
    o = o.parentElement;
  }
  return { x: 0, y: 0 };
}
function Zo(e) {
  const o = e.getBoundingClientRect(), { x: t, y: r } = Su(e);
  return {
    top: o.top + r,
    left: o.left + t,
    width: o.width,
    height: o.height
  };
}
function ii(e, o, t) {
  let r = o.width, n = o.height, c = t.width, l = t.height;
  const i = getComputedStyle(e);
  if (i.getPropertyValue("box-sizing") === "content-box") {
    const p = Ke(i.paddingTop) + Ke(i.paddingBottom) + Ke(i.borderTopWidth) + Ke(i.borderBottomWidth), u = Ke(i.paddingLeft) + Ke(i.paddingRight) + Ke(i.borderRightWidth) + Ke(i.borderLeftWidth);
    r -= u, c -= u, n -= p, l -= p;
  }
  return [r, c, n, l].map(Math.round);
}
function Vr(e) {
  return io in e && Qo.has(e[io]) ? Qo.get(e[io]) : { duration: 250, easing: "ease-in-out" };
}
function si(e) {
  if (io in e)
    return e[io];
}
function Wn(e) {
  const o = si(e);
  return o ? pt.has(o) : !1;
}
function ai(e, ...o) {
  o.forEach((t) => t(e, Qo.has(e)));
  for (let t = 0; t < e.children.length; t++) {
    const r = e.children.item(t);
    r && o.forEach((n) => n(r, Qo.has(r)));
  }
}
function Bn(e) {
  return Array.isArray(e) ? e : [e];
}
function Nt(e) {
  return typeof e == "function";
}
function zu(e) {
  const o = Ce.get(e), t = Zo(e);
  if (!Wn(e))
    return Ce.set(e, t);
  let r;
  if (!o)
    return;
  const n = Vr(e);
  if (typeof n != "function") {
    const c = o.left - t.left, l = o.top - t.top, [i, s, p, u] = ii(e, o, t), d = {
      transform: `translate(${c}px, ${l}px)`
    }, m = {
      transform: "translate(0, 0)"
    };
    i !== s && (d.width = `${i}px`, m.width = `${s}px`), p !== u && (d.height = `${p}px`, m.height = `${u}px`), r = e.animate([d, m], {
      duration: n.duration,
      easing: n.easing
    });
  } else {
    const [c] = Bn(n(e, "remain", o, t));
    r = new Animation(c), r.play();
  }
  jo.set(e, r), Ce.set(e, t), r.addEventListener("finish", Ao.bind(null, e));
}
function Fc(e) {
  pr in e && delete e[pr];
  const o = Zo(e);
  Ce.set(e, o);
  const t = Vr(e);
  if (!Wn(e))
    return;
  let r;
  if (typeof t != "function")
    r = e.animate([
      { transform: "scale(.98)", opacity: 0 },
      { transform: "scale(0.98)", opacity: 0, offset: 0.5 },
      { transform: "scale(1)", opacity: 1 }
    ], {
      duration: t.duration * 1.5,
      easing: "ease-in"
    });
  else {
    const [n] = Bn(t(e, "add", o));
    r = new Animation(n), r.play();
  }
  jo.set(e, r), r.addEventListener("finish", Ao.bind(null, e));
}
function Lc(e, o) {
  var t;
  e.remove(), Ce.delete(e), Go.delete(e), jo.delete(e), (t = mn.get(e)) === null || t === void 0 || t.disconnect(), setTimeout(() => {
    if (Et in e && delete e[Et], Object.defineProperty(e, pr, { value: !0, configurable: !0 }), o && e instanceof HTMLElement)
      for (const r in o)
        e.style[r] = "";
  }, 0);
}
function Vu(e) {
  var o;
  if (!Go.has(e) || !Ce.has(e))
    return;
  const [t, r] = Go.get(e);
  Object.defineProperty(e, Et, { value: !0, configurable: !0 });
  const n = window.scrollX, c = window.scrollY;
  if (r && r.parentNode && r.parentNode instanceof Element ? r.parentNode.insertBefore(e, r) : t && t.parentNode ? t.parentNode.appendChild(e) : (o = si(e)) === null || o === void 0 || o.appendChild(e), !Wn(e))
    return Lc(e);
  const [l, i, s, p] = $u(e), u = Vr(e), d = Ce.get(e);
  (n !== Un || c !== Hn) && Tu(e, n, c, u);
  let m, b = {
    position: "absolute",
    top: `${l}px`,
    left: `${i}px`,
    width: `${s}px`,
    height: `${p}px`,
    margin: "0",
    pointerEvents: "none",
    transformOrigin: "center",
    zIndex: "100"
  };
  if (!Nt(u))
    Object.assign(e.style, b), m = e.animate([
      {
        transform: "scale(1)",
        opacity: 1
      },
      {
        transform: "scale(.98)",
        opacity: 0
      }
    ], { duration: u.duration, easing: "ease-out" });
  else {
    const [_, T] = Bn(u(e, "remove", d));
    T?.styleReset !== !1 && (b = T?.styleReset || b, Object.assign(e.style, b)), m = new Animation(_), m.play();
  }
  jo.set(e, m), m.addEventListener("finish", Lc.bind(null, e, b));
}
function Tu(e, o, t, r) {
  const n = Un - o, c = Hn - t, l = document.documentElement.style.scrollBehavior;
  if (getComputedStyle(wo).scrollBehavior === "smooth" && (document.documentElement.style.scrollBehavior = "auto"), window.scrollTo(window.scrollX + n, window.scrollY + c), !e.parentElement)
    return;
  const s = e.parentElement;
  let p = s.clientHeight, u = s.clientWidth;
  const d = performance.now();
  function m() {
    requestAnimationFrame(() => {
      if (!Nt(r)) {
        const b = p - s.clientHeight, _ = u - s.clientWidth;
        d + r.duration > performance.now() ? (window.scrollTo({
          left: window.scrollX - _,
          top: window.scrollY - b
        }), p = s.clientHeight, u = s.clientWidth, m()) : document.documentElement.style.scrollBehavior = l;
      }
    });
  }
  m();
}
function $u(e) {
  const o = Ce.get(e), [t, , r] = ii(e, o, Zo(e));
  let n = e.parentElement;
  for (; n && (getComputedStyle(n).position === "static" || n instanceof HTMLBodyElement); )
    n = n.parentElement;
  n || (n = document.body);
  const c = getComputedStyle(n), l = Ce.get(n) || Zo(n), i = Math.round(o.top - l.top) - Ke(c.borderTopWidth), s = Math.round(o.left - l.left) - Ke(c.borderLeftWidth);
  return [i, s, t, r];
}
function Mu(e, o = {}) {
  return bn && Bo && (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !Nt(o) && !o.disrespectUserMotionPreference || (pt.add(e), getComputedStyle(e).position === "static" && Object.assign(e.style, { position: "relative" }), ai(e, Ao, Nu, (n) => Bo?.observe(n)), Nt(o) ? Qo.set(e, o) : Qo.set(e, { duration: 250, easing: "ease-in-out", ...o }), bn.observe(e, { childList: !0 }), ci.add(e))), Object.freeze({
    parent: e,
    enable: () => {
      pt.add(e);
    },
    disable: () => {
      pt.delete(e);
    },
    isEnabled: () => pt.has(e)
  });
}
const Ko = {
  mounted: (e, o) => {
    Mu(e, o.value || {});
  },
  // ignore ssr see #96:
  getSSRProps: () => ({})
}, Pu = { class: "p-4 border-t border-base-300 bg-base-200/80 space-y-4" }, ju = { class: "space-y-4" }, Au = {
  key: 0,
  class: "flex items-center gap-2 py-2"
}, Iu = { class: "flex items-center gap-2 text-xs" }, Ru = ["src"], Fu = {
  key: 1,
  class: "w-6 h-6 rounded-full bg-base-300 inline-block"
}, Lu = { class: "text-sm space-x-1" }, Uu = { class: "text-base-content/70 font-semibold" }, Hu = { class: "text-base-content" }, Wu = { class: "font-medium" }, Bu = { class: "text-base-content/50 text-xs" }, Ku = ["src"], qu = {
  key: 1,
  class: "w-6 h-6 rounded-full bg-base-300 inline-block"
}, Yu = { class: "text-sm space-x-1" }, Xu = { class: "text-base-content/70 font-semibold" }, Ju = { class: "text-base-content" }, Gu = { class: "font-medium" }, Qu = { class: "text-base-content/50 text-xs" }, Zu = { key: 1 }, e0 = { class: "flex items-center gap-2 text-xs mb-1" }, o0 = ["src"], t0 = {
  key: 1,
  class: "w-6 h-6 rounded-full bg-base-300 inline-block"
}, r0 = { class: "text-xs space-x-1" }, n0 = { class: "text-base-content/70 font-semibold" }, c0 = { class: "text-base-content/50" }, l0 = ["src"], i0 = {
  key: 1,
  class: "w-6 h-6 rounded-full bg-base-300 inline-block"
}, s0 = { class: "text-xs space-x-1" }, a0 = { class: "text-base-content/70 font-semibold" }, d0 = { class: "text-base-content/50" }, u0 = { class: "pl-8 text-sm text-base-content" }, h0 = {
  key: 0,
  class: "flex flex-col gap-2"
}, p0 = ["disabled"], f0 = /* @__PURE__ */ ot({
  __name: "comments",
  props: {
    isReadonly: { type: Boolean },
    comments: { type: Array }
  },
  emits: ["addComment"],
  setup(e, { emit: o }) {
    const t = o, r = ne(""), { formatDate: n } = Ln();
    function c() {
      t("addComment", r.value), r.value = "";
    }
    return (l, i) => (z(), V("div", Pu, [
      g("div", ju, [
        (z(!0), V(ce, null, So(l.comments, (s) => Qe((z(), V("div", {
          key: s.id
        }, [
          s.isStatusUpdate ? (z(), V("div", Au, [
            g("div", Iu, [
              s.authorPlatformUser ? (z(), V(ce, { key: 0 }, [
                s.authorPlatformUser.avatar ? (z(), V("img", {
                  key: 0,
                  src: s.authorPlatformUser.avatar,
                  alt: "User avatar",
                  class: "w-6 h-6 rounded-full bg-base-300"
                }, null, 8, Ru)) : (z(), V("span", Fu)),
                g("div", Lu, [
                  g("span", Uu, U(s.authorPlatformUser.name || s.authorPlatformUser.email || "Anonymous"), 1),
                  g("span", Hu, [
                    i[1] || (i[1] = so(" marked this as ")),
                    g("span", Wu, U(s.statusTo), 1)
                  ]),
                  g("span", Bu, U(A(n)(s.createdAt)), 1)
                ])
              ], 64)) : (z(), V(ce, { key: 1 }, [
                s.representingClientUser.avatar ? (z(), V("img", {
                  key: 0,
                  src: s.representingClientUser.avatar,
                  alt: "User avatar",
                  class: "w-6 h-6 rounded-full bg-base-300"
                }, null, 8, Ku)) : (z(), V("span", qu)),
                g("div", Yu, [
                  g("span", Xu, U(s.representingClientUser.name || s.representingClientUser.email || "Anonymous"), 1),
                  g("span", Ju, [
                    i[2] || (i[2] = so(" marked this as ")),
                    g("span", Gu, U(s.statusTo), 1)
                  ]),
                  g("span", Qu, U(A(n)(s.createdAt)), 1)
                ])
              ], 64))
            ])
          ])) : (z(), V("div", Zu, [
            g("div", e0, [
              s.authorPlatformUser ? (z(), V(ce, { key: 0 }, [
                s.authorPlatformUser.avatar ? (z(), V("img", {
                  key: 0,
                  src: s.authorPlatformUser.avatar,
                  alt: "User avatar",
                  class: "w-6 h-6 rounded-full bg-base-300"
                }, null, 8, o0)) : (z(), V("span", t0)),
                g("div", r0, [
                  g("span", n0, U(s.authorPlatformUser.name || s.authorPlatformUser.email || "Anonymous"), 1),
                  g("span", c0, U(A(n)(s.createdAt)), 1)
                ])
              ], 64)) : (z(), V(ce, { key: 1 }, [
                s.representingClientUser.avatar ? (z(), V("img", {
                  key: 0,
                  src: s.representingClientUser.avatar,
                  alt: "User avatar",
                  class: "w-6 h-6 rounded-full bg-base-300"
                }, null, 8, l0)) : (z(), V("span", i0)),
                g("div", s0, [
                  g("span", a0, U(s.representingClientUser.name || s.representingClientUser.email || "Anonymous"), 1),
                  g("span", d0, U(A(n)(s.createdAt)), 1)
                ])
              ], 64))
            ]),
            g("div", u0, U(s.content), 1)
          ]))
        ])), [
          [A(Ko)]
        ])), 128))
      ]),
      l.isReadonly ? ze("", !0) : (z(), V("div", h0, [
        Qe(g("textarea", {
          class: "textarea textarea-bordered text-sm w-full",
          "onUpdate:modelValue": i[0] || (i[0] = (s) => r.value = s),
          placeholder: "Add a comment..."
        }, null, 512), [
          [fn, r.value]
        ]),
        g("button", {
          class: "btn btn-sm btn-primary self-end",
          disabled: !r.value.trim(),
          onClick: c
        }, " Submit ", 8, p0)
      ]))
    ]));
  }
}), Uc = ne(null), Hc = ne(null);
function _o() {
  function e(t) {
    Hc.value = t;
  }
  function o(t) {
    Uc.value = t;
  }
  return {
    user: Uc,
    projectId: Hc,
    setProjectId: e,
    setUser: o
  };
}
async function m0(e, o = {}, t, r) {
  const n = "https://api.trypulsekit.com/public";
  if (!t)
    throw new Error("PulseKit: Project ID is required for making requests");
  const c = `${n}${e.startsWith("/") ? e : `/${e}`}`, l = new Headers(o.headers);
  l.set("X-PulseKit-Project", t), l.set("Content-Type", "application/json"), r && l.set("X-PulseKit-User", JSON.stringify(r));
  try {
    const i = await fetch(c, {
      ...o,
      headers: l
    });
    if (!i.ok)
      throw new Error(`PulseKit API Error: ${i.status} ${i.statusText}`);
    return await i.json();
  } catch (i) {
    throw console.error("PulseKit: API request failed", i), i;
  }
}
function $t() {
  return async (e, o = {}) => {
    const { user: t, projectId: r } = _o();
    return m0(e, o, r.value, t.value);
  };
}
const mo = ne([]), Xr = ne(!0), Uo = ne(null);
function Tr() {
  const { user: e } = _o(), o = $t();
  async function t(l = {}) {
    try {
      Xr.value = !0, Uo.value = null;
      let i = `/feedback${e.value?.id ? `?userId=${e.value?.id}` : ""}`;
      l.groupBy && (i += `?groupBy=${l.groupBy}`);
      const s = await o(
        i
      );
      if (l.groupBy) {
        mo.value = s;
        return;
      }
      mo.value = s.map((p) => ({
        ...p,
        showComments: !1
      }));
    } catch (i) {
      Uo.value = i instanceof Error ? i.message : "Failed to load feedback";
    } finally {
      Xr.value = !1;
    }
  }
  async function r(l) {
    try {
      const { comments: i } = await o(`/feedback/${l}/comments`);
      return i;
    } catch (i) {
      return Uo.value = i instanceof Error ? i.message : "Failed to load comments", null;
    }
  }
  async function n(l, i, s) {
    if (!i.trim() || !e.value || !e.value.id) return null;
    try {
      const { feedback: p } = await o(
        "/feedback",
        {
          method: "POST",
          body: JSON.stringify({
            title: l,
            content: i,
            userId: e.value.id,
            categoryId: s
          })
        }
      );
      return mo.value = [p, ...mo.value], p;
    } catch (p) {
      return Uo.value = p instanceof Error ? p.message : "Failed to submit feedback", null;
    }
  }
  async function c(l, i) {
    if (!(!e.value || !e.value.id))
      try {
        const { feedback: s } = await o(
          `/feedback/${l}/vote`,
          {
            method: "POST",
            body: JSON.stringify({
              userId: e.value.id
            })
          }
        ), p = mo.value.findIndex((u) => u.id === l);
        return p !== -1 && (mo.value[p] = {
          ...mo.value[p],
          votes: s.votes
        }), s;
      } catch (s) {
        return Uo.value = s instanceof Error ? s.message : "Failed to vote", null;
      }
  }
  return {
    feedbackItems: mo,
    loading: Xr,
    error: Uo,
    loadFeedback: t,
    loadComments: r,
    submitNewFeedback: n,
    voteOnFeedback: c
  };
}
function b0() {
  const e = ne(null), o = $t(), { user: t } = _o();
  async function r(n, c) {
    if (!c.trim() || !t.value?.id) return null;
    try {
      const { comment: l } = await o(
        `/feedback/${n}/comment`,
        {
          method: "POST",
          body: JSON.stringify({
            comment: c
          })
        }
      );
      return l;
    } catch (l) {
      return e.value = l instanceof Error ? l.message : "Failed to add comment", null;
    }
  }
  return {
    error: e,
    addComment: r
  };
}
const g0 = { class: "card card-border bg-base-100 shadow-sm overflow-hidden" }, k0 = { class: "card-body p-4" }, v0 = { class: "flex items-center gap-2" }, x0 = {
  key: 0,
  class: "flex items-center gap-2"
}, y0 = { class: "text-xs font-semibold text-base-content/60" }, w0 = {
  key: 1,
  class: "text-base-content/50"
}, _0 = ["title"], E0 = { class: "card-title text-primary" }, N0 = { class: "pb-1 text-sm text-base-content whitespace-pre-wrap" }, C0 = { class: "card-actions justify-between items-end" }, O0 = { class: "flex items-center gap-2" }, D0 = ["src"], S0 = {
  key: 1,
  class: "size-4 rounded-full bg-base-300 inline-block"
}, z0 = { class: "text-xs text-base-content/70 font-medium" }, V0 = { class: "space-x-2" }, T0 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center bg-base-100/80 rounded"
}, $0 = { key: 1 }, M0 = ["disabled"], P0 = /* @__PURE__ */ ot({
  __name: "feedback",
  props: /* @__PURE__ */ Js({
    feedback: { type: Object },
    isReadonly: { type: Boolean }
  }, {
    showComments: { type: Boolean },
    showCommentsModifiers: {}
  }),
  emits: ["update:showComments"],
  setup(e) {
    const o = Da(e, "showComments"), t = e, { formatDate: r } = Ln(), { user: n } = _o(), { addComment: c } = b0(), { loadComments: l, voteOnFeedback: i } = Tr(), s = ne(!1), p = vo(() => t.feedback.votes.some((b) => b.userId === n.value?.id)), u = ne([]);
    async function d() {
      if (!o.value && u.value.length === 0) {
        s.value = !0;
        try {
          const b = await l(t.feedback.id);
          u.value = b || [];
        } finally {
          s.value = !1;
        }
      }
      o.value = !o.value;
    }
    async function m(b) {
      const _ = await c(t.feedback.id, b);
      u.value = [...u.value, _];
    }
    return (b, _) => (z(), V("div", g0, [
      g("div", k0, [
        g("div", v0, [
          b.feedback.categories && b.feedback.categories.length > 0 ? (z(), V("div", x0, [
            b.feedback.categories[0].category.color ? (z(), V("span", {
              key: 0,
              style: kr({ backgroundColor: b.feedback.categories[0].category.color }),
              class: "inline-block w-3 h-3 rounded-full"
            }, null, 4)) : ze("", !0),
            g("span", y0, U(b.feedback.categories[0].category.name), 1)
          ])) : ze("", !0),
          b.feedback.categories && b.feedback.categories.length > 0 ? (z(), V("span", w0, " • ")) : ze("", !0),
          g("time", {
            title: b.feedback.createdAt,
            class: "text-xs text-base-content/50"
          }, U(A(r)(b.feedback.createdAt)), 9, _0)
        ]),
        g("h2", E0, U(b.feedback.title), 1),
        g("p", N0, U(b.feedback.content), 1),
        g("div", C0, [
          g("div", O0, [
            b.feedback?.user?.avatar ? (z(), V("img", {
              key: 0,
              src: b.feedback?.user?.avatar,
              alt: "User avatar",
              class: "size-4 rounded-full bg-base-300"
            }, null, 8, D0)) : (z(), V("span", S0)),
            g("span", z0, U(b.feedback?.user?.name || b.feedback?.user?.email || "Anonymous"), 1)
          ]),
          g("div", V0, [
            g("button", {
              onClick: d,
              class: "btn btn-sm btn-outline btn-accent relative"
            }, [
              s.value ? (z(), V("div", T0, _[1] || (_[1] = [
                g("span", { class: "loading loading-spinner loading-xs" }, null, -1)
              ]))) : (z(), V("span", $0, "💬 " + U(b.feedback.comments || 0), 1))
            ]),
            g("button", {
              onClick: _[0] || (_[0] = (T) => A(i)(b.feedback.id, 1)),
              disabled: b.isReadonly,
              class: qe(["btn btn-sm btn-accent", {
                "btn-outline": !p.value
              }])
            }, " 👍 " + U(b.feedback.votes.length || 0), 11, M0)
          ])
        ])
      ]),
      b.feedback.showComments ? (z(), jn(f0, {
        key: 0,
        comments: u.value,
        isReadonly: b.isReadonly,
        onAddComment: m
      }, null, 8, ["comments", "isReadonly"])) : ze("", !0)
    ]));
  }
}), Wc = ne([]), Jr = ne(!1), Gr = ne(null);
function j0() {
  const e = $t();
  async function o() {
    try {
      Jr.value = !0, Gr.value = null;
      const t = await e("/categories");
      Wc.value = t;
    } catch (t) {
      Gr.value = t instanceof Error ? t.message : "Failed to load categories";
    } finally {
      Jr.value = !1;
    }
  }
  return {
    categories: Wc,
    loading: Jr,
    error: Gr,
    loadCategories: o
  };
}
const A0 = {
  key: 0,
  class: "card card-border shadow-sm bg-base-100"
}, I0 = { class: "card-body p-4" }, R0 = { class: "fieldset" }, F0 = {
  key: 0,
  class: "fieldset"
}, L0 = ["value"], U0 = { class: "fieldset" }, H0 = { class: "card-actions justify-end" }, W0 = ["disabled"], B0 = { key: 0 }, K0 = { key: 1 }, q0 = /* @__PURE__ */ ot({
  __name: "FeedbackForm",
  props: {
    isReadonly: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const o = e, { submitNewFeedback: t } = Tr(), { categories: r, loadCategories: n } = j0(), c = ne(""), l = ne(""), i = ne(""), s = ne(!1);
    Cr(() => {
      n();
    });
    async function p() {
      if (!(!l.value.trim() || o.isReadonly || s.value)) {
        s.value = !0;
        try {
          await t(
            c.value,
            l.value,
            i.value || void 0
          ), c.value = "", l.value = "", i.value = "";
        } finally {
          s.value = !1;
        }
      }
    }
    return (u, d) => u.isReadonly ? ze("", !0) : (z(), V("div", A0, [
      g("div", I0, [
        d[7] || (d[7] = g("h2", { class: "card-title" }, "Submit Feedback", -1)),
        d[8] || (d[8] = g("p", { class: "text-sm text-base-content/50" }, "Share your feedback or suggestions...", -1)),
        g("div", null, [
          g("fieldset", R0, [
            d[3] || (d[3] = g("legend", { class: "fieldset-legend" }, "Title", -1)),
            Qe(g("input", {
              type: "text",
              class: "input input-bordered input-sm w-full",
              "onUpdate:modelValue": d[0] || (d[0] = (m) => c.value = m)
            }, null, 512), [
              [fn, c.value]
            ])
          ]),
          A(r).length > 0 ? (z(), V("fieldset", F0, [
            d[5] || (d[5] = g("legend", { class: "fieldset-legend" }, "Category", -1)),
            Qe(g("select", {
              class: "select select-bordered select-sm w-full",
              "onUpdate:modelValue": d[1] || (d[1] = (m) => i.value = m)
            }, [
              d[4] || (d[4] = g("option", {
                value: "",
                disabled: ""
              }, "Select a category", -1)),
              (z(!0), V(ce, null, So(A(r), (m) => (z(), V("option", {
                key: m.id,
                value: m.id
              }, U(m.name), 9, L0))), 128))
            ], 512), [
              [vd, i.value]
            ])
          ])) : ze("", !0),
          g("fieldset", U0, [
            d[6] || (d[6] = g("legend", { class: "fieldset-legend" }, "Description", -1)),
            Qe(g("textarea", {
              class: "textarea textarea-bordered textarea-sm w-full",
              "onUpdate:modelValue": d[2] || (d[2] = (m) => l.value = m)
            }, null, 512), [
              [fn, l.value]
            ])
          ])
        ]),
        g("div", H0, [
          g("button", {
            class: "btn btn-primary btn-sm",
            onClick: p,
            disabled: !l.value.trim() || u.disabled || s.value
          }, [
            s.value ? (z(), V("span", B0, "Submitting...")) : (z(), V("span", K0, "Submit"))
          ], 8, W0)
        ])
      ])
    ]));
  }
});
function Y0() {
  const { user: e, setUser: o } = _o(), t = ne(null), r = vo(() => !!e.value), n = vo(() => !r.value);
  async function c(l) {
    try {
      const s = await $t()("/identify", {
        method: "POST",
        body: JSON.stringify(l)
      });
      return o(s.user), s.user;
    } catch (i) {
      return t.value = i instanceof Error ? i.message : "Failed to identify user", null;
    }
  }
  return {
    error: t,
    isIdentified: r,
    isReadonly: n,
    identifyUser: c
  };
}
const Qr = ne(null);
function di() {
  const { projectId: e } = _o(), o = ne(!1), t = ne(null), r = $t();
  async function n() {
    if (!e.value) {
      t.value = "No project ID provided";
      return;
    }
    o.value = !0, t.value = null;
    try {
      const c = await r("/project");
      return Qr.value = c, Qr;
    } catch (c) {
      t.value = c instanceof Error ? c.message : "An unknown error occurred", console.error("Error loading project:", c);
    } finally {
      o.value = !1;
    }
  }
  return {
    project: Qr,
    loading: o,
    error: t,
    loadProject: n
  };
}
const X0 = ["data-theme"], J0 = {
  key: 0,
  class: "text-center py-2 @md:py-4 text-primary/50"
}, G0 = {
  key: 1,
  class: "bg-error/10 text-error p-3 @md:p-4 rounded mb-3 @md:mb-4 flex flex-col gap-2"
}, Q0 = {
  key: 2,
  class: "text-primary"
}, Z0 = {
  key: 0,
  class: "bg-base-200/80 shadow-sm border border-base-300 rounded-lg p-3 @md:p-4 mb-3 @md:mb-4"
}, eh = { class: "flex flex-col @lg:flex-row gap-4 @lg:gap-6" }, oh = { class: "@lg:w-80 @lg:flex-shrink-0" }, th = { class: "@lg:sticky @lg:top-0" }, rh = { class: "flex-1 min-w-0" }, nh = {
  key: 0,
  class: "bg-error/10 text-error p-3 @md:p-4 rounded mb-3 @md:mb-4 flex flex-col gap-2"
}, ch = {
  key: 1,
  class: "text-center py-8 @md:py-12 text-primary/50"
}, lh = {
  key: 2,
  class: "text-center py-8 @md:py-12 text-primary/50"
}, ih = { class: "text-sm @md:text-base" }, sh = {
  key: 0,
  class: "block @md:inline"
}, ah = {
  key: 3,
  class: "space-y-3 @md:space-y-4 @2xl:grid @2xl:grid-cols-2 @2xl:gap-4 @2xl:space-y-0"
}, dh = { class: "mt-6 @md:mt-8 pt-4 @md:pt-6 border-t border-base-300" }, uh = ["href"], hh = /* @__PURE__ */ ot({
  __name: "Board",
  props: {
    projectId: { type: String },
    user: { type: [String, null] }
  },
  setup(e) {
    const o = e, { setProjectId: t, setUser: r } = _o(), {
      isReadonly: n,
      identifyUser: c
    } = Y0(), {
      project: l,
      loading: i,
      error: s,
      loadProject: p
    } = di(), {
      feedbackItems: u,
      loading: d,
      error: m,
      loadFeedback: b
    } = Tr(), _ = vo(() => `https://trypulsekit.com/?utm_source=pulsekit-embed&utm_medium=${o.projectId}&utm_campaign=powered-by`);
    return Cr(async () => {
      try {
        if (t(o.projectId), await p(), !l.value)
          return;
        if (o.user) {
          const T = JSON.parse(o.user);
          r(T), await c(T);
        }
        await b();
      } catch (T) {
        console.error("Error during initialization sequence:", T);
      }
    }), (T, X) => (z(), V("div", {
      id: "pulsekit-embed",
      "data-theme": A(l)?.theme || "light",
      class: "@container bg-transparent"
    }, [
      A(i) ? (z(), V("div", J0, " Loading project... ")) : A(s) ? (z(), V("div", G0, [
        so(U(A(s)) + " ", 1),
        g("button", {
          onClick: X[0] || (X[0] = //@ts-ignore
          (...R) => A(p) && A(p)(...R)),
          class: "btn btn-sm btn-error self-end"
        }, "Try Again")
      ])) : A(l) ? (z(), V("div", Q0, [
        A(n) ? (z(), V("div", Z0, X[2] || (X[2] = [
          g("div", { class: "flex items-center gap-2" }, [
            g("span", { class: "text-lg @md:text-xl" }, "ℹ️"),
            g("span", { class: "text-xs @md:text-sm text-base-content/50" }, "You're viewing in read-only mode.")
          ], -1)
        ]))) : ze("", !0),
        g("div", eh, [
          g("div", oh, [
            g("div", th, [
              Ae(q0, {
                disabled: A(d) || A(n),
                "is-readonly": A(n)
              }, null, 8, ["disabled", "is-readonly"])
            ])
          ]),
          g("div", rh, [
            A(m) ? (z(), V("div", nh, [
              so(U(A(m)) + " ", 1),
              g("button", {
                onClick: X[1] || (X[1] = (R) => A(b)()),
                class: "btn btn-sm btn-error self-end"
              }, "Try Again")
            ])) : A(d) ? (z(), V("div", ch, X[3] || (X[3] = [
              g("div", { class: "text-sm @md:text-base" }, "Loading feedback...", -1)
            ]))) : A(u).length === 0 ? (z(), V("div", lh, [
              g("div", ih, [
                X[4] || (X[4] = so(" No feedback items yet. ")),
                A(n) ? ze("", !0) : (z(), V("span", sh, "Be the first to share your thoughts!"))
              ])
            ])) : Qe((z(), V("div", ah, [
              (z(!0), V(ce, null, So(A(u), (R) => (z(), jn(P0, {
                key: R.id,
                feedback: R,
                "is-readonly": A(n),
                "show-comments": R.showComments,
                "onUpdate:showComments": (P) => R.showComments = P,
                class: "@2xl:break-inside-avoid"
              }, null, 8, ["feedback", "is-readonly", "show-comments", "onUpdate:showComments"]))), 128))
            ])), [
              [A(Ko)]
            ])
          ])
        ]),
        g("div", dh, [
          g("a", {
            class: "btn btn-secondary btn-xs @md:btn-sm mx-auto block w-fit",
            href: _.value,
            target: "_blank"
          }, " Powered by PulseKit ", 8, uh)
        ])
      ])) : ze("", !0)
    ], 8, X0));
  }
}), ph = `/*! tailwindcss v4.1.7 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-700:oklch(50.5% .213 27.518);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-700:oklch(55.4% .135 66.442);--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-green-700:oklch(52.7% .154 150.069);--color-sky-100:oklch(95.1% .026 236.824);--color-blue-50:oklch(97% .014 254.604);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-700:oklch(37.3% .034 259.733);--color-black:#000;--spacing:.25rem;--container-md:28rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--leading-relaxed:1.625;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:where(#pulsekit-embed),#pulsekit-embed:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){#pulsekit-embed{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}#pulsekit-embed:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cupcake]:checked),[data-theme=cupcake]{color-scheme:light;--color-base-100:oklch(97.788% .004 56.375);--color-base-200:oklch(93.982% .007 61.449);--color-base-300:oklch(91.586% .006 53.44);--color-base-content:oklch(23.574% .066 313.189);--color-primary:oklch(85% .138 181.071);--color-primary-content:oklch(43% .078 188.216);--color-secondary:oklch(89% .061 343.231);--color-secondary-content:oklch(45% .187 3.815);--color-accent:oklch(90% .076 70.697);--color-accent-content:oklch(47% .157 37.304);--color-neutral:oklch(27% .006 286.033);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(68% .169 237.323);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(69% .17 162.48);--color-success-content:oklch(26% .051 172.552);--color-warning:oklch(79% .184 86.047);--color-warning-content:oklch(28% .066 53.813);--color-error:oklch(64% .246 16.439);--color-error-content:oklch(27% .105 12.094);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=bumblebee]:checked),[data-theme=bumblebee]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(85% .199 91.936);--color-primary-content:oklch(42% .095 57.708);--color-secondary:oklch(75% .183 55.934);--color-secondary-content:oklch(40% .123 38.172);--color-accent:oklch(0% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(37% .01 67.558);--color-neutral-content:oklch(92% .003 48.717);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(39% .09 240.876);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=emerald]:checked),[data-theme=emerald]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(35.519% .032 262.988);--color-primary:oklch(76.662% .135 153.45);--color-primary-content:oklch(33.387% .04 162.24);--color-secondary:oklch(61.302% .202 261.294);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(72.772% .149 33.2);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(35.519% .032 262.988);--color-neutral-content:oklch(98.462% .001 247.838);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=corporate]:checked),[data-theme=corporate]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(22.389% .031 278.072);--color-primary:oklch(58% .158 241.966);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(55% .046 257.417);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(60% .126 221.723);--color-info-content:oklch(100% 0 0);--color-success:oklch(62% .194 149.214);--color-success-content:oklch(100% 0 0);--color-warning:oklch(85% .199 91.936);--color-warning-content:oklch(0% 0 0);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(0% 0 0);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=synthwave]:checked),[data-theme=synthwave]{color-scheme:dark;--color-base-100:oklch(15% .09 281.288);--color-base-200:oklch(20% .09 281.288);--color-base-300:oklch(25% .09 281.288);--color-base-content:oklch(78% .115 274.713);--color-primary:oklch(71% .202 349.761);--color-primary-content:oklch(28% .109 3.907);--color-secondary:oklch(82% .111 230.318);--color-secondary-content:oklch(29% .066 243.157);--color-accent:oklch(75% .183 55.934);--color-accent-content:oklch(26% .079 36.259);--color-neutral:oklch(45% .24 277.023);--color-neutral-content:oklch(87% .065 274.039);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(77% .152 181.912);--color-success-content:oklch(27% .046 192.524);--color-warning:oklch(90% .182 98.111);--color-warning-content:oklch(42% .095 57.708);--color-error:oklch(73.7% .121 32.639);--color-error-content:oklch(23.501% .096 290.329);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=retro]:checked),[data-theme=retro]{color-scheme:light;--color-base-100:oklch(91.637% .034 90.515);--color-base-200:oklch(88.272% .049 91.774);--color-base-300:oklch(84.133% .065 90.856);--color-base-content:oklch(41% .112 45.904);--color-primary:oklch(80% .114 19.571);--color-primary-content:oklch(39% .141 25.723);--color-secondary:oklch(92% .084 155.995);--color-secondary-content:oklch(44% .119 151.328);--color-accent:oklch(68% .162 75.834);--color-accent-content:oklch(41% .112 45.904);--color-neutral:oklch(44% .011 73.639);--color-neutral-content:oklch(86% .005 56.366);--color-info:oklch(58% .158 241.966);--color-info-content:oklch(96% .059 95.617);--color-success:oklch(51% .096 186.391);--color-success-content:oklch(96% .059 95.617);--color-warning:oklch(64% .222 41.116);--color-warning-content:oklch(96% .059 95.617);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(40% .123 38.172);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cyberpunk]:checked),[data-theme=cyberpunk]{color-scheme:light;--color-base-100:oklch(94.51% .179 104.32);--color-base-200:oklch(91.51% .179 104.32);--color-base-300:oklch(85.51% .179 104.32);--color-base-content:oklch(0% 0 0);--color-primary:oklch(74.22% .209 6.35);--color-primary-content:oklch(14.844% .041 6.35);--color-secondary:oklch(83.33% .184 204.72);--color-secondary-content:oklch(16.666% .036 204.72);--color-accent:oklch(71.86% .217 310.43);--color-accent-content:oklch(14.372% .043 310.43);--color-neutral:oklch(23.04% .065 269.31);--color-neutral-content:oklch(94.51% .179 104.32);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=valentine]:checked),[data-theme=valentine]{color-scheme:light;--color-base-100:oklch(97% .014 343.198);--color-base-200:oklch(94% .028 342.258);--color-base-300:oklch(89% .061 343.231);--color-base-content:oklch(52% .223 3.958);--color-primary:oklch(65% .241 354.308);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(62% .265 303.9);--color-secondary-content:oklch(97% .014 308.299);--color-accent:oklch(82% .111 230.318);--color-accent-content:oklch(39% .09 240.876);--color-neutral:oklch(40% .153 2.432);--color-neutral-content:oklch(89% .061 343.231);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(44% .11 240.79);--color-success:oklch(84% .143 164.978);--color-success-content:oklch(43% .095 166.913);--color-warning:oklch(75% .183 55.934);--color-warning-content:oklch(26% .079 36.259);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(97% .013 17.38);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=halloween]:checked),[data-theme=halloween]{color-scheme:dark;--color-base-100:oklch(21% .006 56.043);--color-base-200:oklch(14% .004 49.25);--color-base-300:oklch(0% 0 0);--color-base-content:oklch(84.955% 0 0);--color-primary:oklch(77.48% .204 60.62);--color-primary-content:oklch(19.693% .004 196.779);--color-secondary:oklch(45.98% .248 305.03);--color-secondary-content:oklch(89.196% .049 305.03);--color-accent:oklch(64.8% .223 136.073);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(24.371% .046 65.681);--color-neutral-content:oklch(84.874% .009 65.681);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(13.316% .031 58.318);--color-error:oklch(65.72% .199 27.33);--color-error-content:oklch(13.144% .039 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=garden]:checked),[data-theme=garden]{color-scheme:light;--color-base-100:oklch(92.951% .002 17.197);--color-base-200:oklch(86.445% .002 17.197);--color-base-300:oklch(79.938% .001 17.197);--color-base-content:oklch(16.961% .001 17.32);--color-primary:oklch(62.45% .278 3.836);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(48.495% .11 355.095);--color-secondary-content:oklch(89.699% .022 355.095);--color-accent:oklch(56.273% .054 154.39);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(24.155% .049 89.07);--color-neutral-content:oklch(92.951% .002 17.197);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=forest]:checked),[data-theme=forest]{color-scheme:dark;--color-base-100:oklch(20.84% .008 17.911);--color-base-200:oklch(18.522% .007 17.911);--color-base-300:oklch(16.203% .007 17.911);--color-base-content:oklch(83.768% .001 17.911);--color-primary:oklch(68.628% .185 148.958);--color-primary-content:oklch(0% 0 0);--color-secondary:oklch(69.776% .135 168.327);--color-secondary-content:oklch(13.955% .027 168.327);--color-accent:oklch(70.628% .119 185.713);--color-accent-content:oklch(14.125% .023 185.713);--color-neutral:oklch(30.698% .039 171.364);--color-neutral-content:oklch(86.139% .007 171.364);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=aqua]:checked),[data-theme=aqua]{color-scheme:dark;--color-base-100:oklch(37% .146 265.522);--color-base-200:oklch(28% .091 267.935);--color-base-300:oklch(22% .091 267.935);--color-base-content:oklch(90% .058 230.902);--color-primary:oklch(85.661% .144 198.645);--color-primary-content:oklch(40.124% .068 197.603);--color-secondary:oklch(60.682% .108 309.782);--color-secondary-content:oklch(96% .016 293.756);--color-accent:oklch(93.426% .102 94.555);--color-accent-content:oklch(18.685% .02 94.555);--color-neutral:oklch(27% .146 265.522);--color-neutral-content:oklch(80% .146 265.522);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(27% .077 45.635);--color-error:oklch(73.95% .19 27.33);--color-error-content:oklch(14.79% .038 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=lofi]:checked),[data-theme=lofi]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(15.906% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(21.455% .001 17.278);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(26.861% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(79.54% .103 205.9);--color-info-content:oklch(15.908% .02 205.9);--color-success:oklch(90.13% .153 164.14);--color-success-content:oklch(18.026% .03 164.14);--color-warning:oklch(88.37% .135 79.94);--color-warning-content:oklch(17.674% .027 79.94);--color-error:oklch(78.66% .15 28.47);--color-error-content:oklch(15.732% .03 28.47);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=pastel]:checked),[data-theme=pastel]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98.462% .001 247.838);--color-base-300:oklch(92.462% .001 247.838);--color-base-content:oklch(20% 0 0);--color-primary:oklch(90% .063 306.703);--color-primary-content:oklch(49% .265 301.924);--color-secondary:oklch(89% .058 10.001);--color-secondary-content:oklch(51% .222 16.935);--color-accent:oklch(90% .093 164.15);--color-accent-content:oklch(50% .118 165.612);--color-neutral:oklch(55% .046 257.417);--color-neutral-content:oklch(92% .013 255.508);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(52% .105 223.128);--color-success:oklch(87% .15 154.449);--color-success-content:oklch(52% .154 150.069);--color-warning:oklch(83% .128 66.29);--color-warning-content:oklch(55% .195 38.402);--color-error:oklch(80% .114 19.571);--color-error-content:oklch(50% .213 27.518);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=fantasy]:checked),[data-theme=fantasy]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(27.807% .029 256.847);--color-primary:oklch(37.45% .189 325.02);--color-primary-content:oklch(87.49% .037 325.02);--color-secondary:oklch(53.92% .162 241.36);--color-secondary-content:oklch(90.784% .032 241.36);--color-accent:oklch(75.98% .204 56.72);--color-accent-content:oklch(15.196% .04 56.72);--color-neutral:oklch(27.807% .029 256.847);--color-neutral-content:oklch(85.561% .005 256.847);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=wireframe]:checked),[data-theme=wireframe]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(87% 0 0);--color-primary-content:oklch(26% 0 0);--color-secondary:oklch(87% 0 0);--color-secondary-content:oklch(26% 0 0);--color-accent:oklch(87% 0 0);--color-accent-content:oklch(26% 0 0);--color-neutral:oklch(87% 0 0);--color-neutral-content:oklch(26% 0 0);--color-info:oklch(44% .11 240.79);--color-info-content:oklch(90% .058 230.902);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .093 164.15);--color-warning:oklch(47% .137 46.201);--color-warning-content:oklch(92% .12 95.746);--color-error:oklch(44% .177 26.899);--color-error-content:oklch(88% .062 18.334);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=black]:checked),[data-theme=black]{color-scheme:dark;--color-base-100:oklch(0% 0 0);--color-base-200:oklch(19% 0 0);--color-base-300:oklch(22% 0 0);--color-base-content:oklch(87.609% 0 0);--color-primary:oklch(35% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(35% 0 0);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(35% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(35% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(45.201% .313 264.052);--color-info-content:oklch(89.04% .062 264.052);--color-success:oklch(51.975% .176 142.495);--color-success-content:oklch(90.395% .035 142.495);--color-warning:oklch(96.798% .211 109.769);--color-warning-content:oklch(19.359% .042 109.769);--color-error:oklch(62.795% .257 29.233);--color-error-content:oklch(12.559% .051 29.233);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=luxury]:checked),[data-theme=luxury]{color-scheme:dark;--color-base-100:oklch(14.076% .004 285.822);--color-base-200:oklch(20.219% .004 308.229);--color-base-300:oklch(23.219% .004 308.229);--color-base-content:oklch(75.687% .123 76.89);--color-primary:oklch(100% 0 0);--color-primary-content:oklch(20% 0 0);--color-secondary:oklch(27.581% .064 261.069);--color-secondary-content:oklch(85.516% .012 261.069);--color-accent:oklch(36.674% .051 338.825);--color-accent-content:oklch(87.334% .01 338.825);--color-neutral:oklch(24.27% .057 59.825);--color-neutral-content:oklch(93.203% .089 90.861);--color-info:oklch(79.061% .121 237.133);--color-info-content:oklch(15.812% .024 237.133);--color-success:oklch(78.119% .192 132.154);--color-success-content:oklch(15.623% .038 132.154);--color-warning:oklch(86.127% .136 102.891);--color-warning-content:oklch(17.225% .027 102.891);--color-error:oklch(71.753% .176 22.568);--color-error-content:oklch(14.35% .035 22.568);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dracula]:checked),[data-theme=dracula]{color-scheme:dark;--color-base-100:oklch(28.822% .022 277.508);--color-base-200:oklch(26.805% .02 277.508);--color-base-300:oklch(24.787% .019 277.508);--color-base-content:oklch(97.747% .007 106.545);--color-primary:oklch(75.461% .183 346.812);--color-primary-content:oklch(15.092% .036 346.812);--color-secondary:oklch(74.202% .148 301.883);--color-secondary-content:oklch(14.84% .029 301.883);--color-accent:oklch(83.392% .124 66.558);--color-accent-content:oklch(16.678% .024 66.558);--color-neutral:oklch(39.445% .032 275.524);--color-neutral-content:oklch(87.889% .006 275.524);--color-info:oklch(88.263% .093 212.846);--color-info-content:oklch(17.652% .018 212.846);--color-success:oklch(87.099% .219 148.024);--color-success-content:oklch(17.419% .043 148.024);--color-warning:oklch(95.533% .134 112.757);--color-warning-content:oklch(19.106% .026 112.757);--color-error:oklch(68.22% .206 24.43);--color-error-content:oklch(13.644% .041 24.43);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cmyk]:checked),[data-theme=cmyk]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(90% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(71.772% .133 239.443);--color-primary-content:oklch(14.354% .026 239.443);--color-secondary:oklch(64.476% .202 359.339);--color-secondary-content:oklch(12.895% .04 359.339);--color-accent:oklch(94.228% .189 105.306);--color-accent-content:oklch(18.845% .037 105.306);--color-neutral:oklch(21.778% 0 0);--color-neutral-content:oklch(84.355% 0 0);--color-info:oklch(68.475% .094 217.284);--color-info-content:oklch(13.695% .018 217.284);--color-success:oklch(46.949% .162 321.406);--color-success-content:oklch(89.389% .032 321.406);--color-warning:oklch(71.236% .159 52.023);--color-warning-content:oklch(14.247% .031 52.023);--color-error:oklch(62.013% .208 28.717);--color-error-content:oklch(12.402% .041 28.717);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=autumn]:checked),[data-theme=autumn]{color-scheme:light;--color-base-100:oklch(95.814% 0 0);--color-base-200:oklch(89.107% 0 0);--color-base-300:oklch(82.4% 0 0);--color-base-content:oklch(19.162% 0 0);--color-primary:oklch(40.723% .161 17.53);--color-primary-content:oklch(88.144% .032 17.53);--color-secondary:oklch(61.676% .169 23.865);--color-secondary-content:oklch(12.335% .033 23.865);--color-accent:oklch(73.425% .094 60.729);--color-accent-content:oklch(14.685% .018 60.729);--color-neutral:oklch(54.367% .037 51.902);--color-neutral-content:oklch(90.873% .007 51.902);--color-info:oklch(69.224% .097 207.284);--color-info-content:oklch(13.844% .019 207.284);--color-success:oklch(60.995% .08 174.616);--color-success-content:oklch(12.199% .016 174.616);--color-warning:oklch(70.081% .164 56.844);--color-warning-content:oklch(14.016% .032 56.844);--color-error:oklch(53.07% .241 24.16);--color-error-content:oklch(90.614% .048 24.16);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=business]:checked),[data-theme=business]{color-scheme:dark;--color-base-100:oklch(24.353% 0 0);--color-base-200:oklch(22.648% 0 0);--color-base-300:oklch(20.944% 0 0);--color-base-content:oklch(84.87% 0 0);--color-primary:oklch(41.703% .099 251.473);--color-primary-content:oklch(88.34% .019 251.473);--color-secondary:oklch(64.092% .027 229.389);--color-secondary-content:oklch(12.818% .005 229.389);--color-accent:oklch(67.271% .167 35.791);--color-accent-content:oklch(13.454% .033 35.791);--color-neutral:oklch(27.441% .013 253.041);--color-neutral-content:oklch(85.488% .002 253.041);--color-info:oklch(62.616% .143 240.033);--color-info-content:oklch(12.523% .028 240.033);--color-success:oklch(70.226% .094 156.596);--color-success-content:oklch(14.045% .018 156.596);--color-warning:oklch(77.482% .115 81.519);--color-warning-content:oklch(15.496% .023 81.519);--color-error:oklch(51.61% .146 29.674);--color-error-content:oklch(90.322% .029 29.674);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=acid]:checked),[data-theme=acid]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(91% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(71.9% .357 330.759);--color-primary-content:oklch(14.38% .071 330.759);--color-secondary:oklch(73.37% .224 48.25);--color-secondary-content:oklch(14.674% .044 48.25);--color-accent:oklch(92.78% .264 122.962);--color-accent-content:oklch(18.556% .052 122.962);--color-neutral:oklch(21.31% .128 278.68);--color-neutral-content:oklch(84.262% .025 278.68);--color-info:oklch(60.72% .227 252.05);--color-info-content:oklch(12.144% .045 252.05);--color-success:oklch(85.72% .266 158.53);--color-success-content:oklch(17.144% .053 158.53);--color-warning:oklch(91.01% .212 100.5);--color-warning-content:oklch(18.202% .042 100.5);--color-error:oklch(64.84% .293 29.349);--color-error-content:oklch(12.968% .058 29.349);--radius-selector:1rem;--radius-field:1rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=lemonade]:checked),[data-theme=lemonade]{color-scheme:light;--color-base-100:oklch(98.71% .02 123.72);--color-base-200:oklch(91.8% .018 123.72);--color-base-300:oklch(84.89% .017 123.72);--color-base-content:oklch(19.742% .004 123.72);--color-primary:oklch(58.92% .199 134.6);--color-primary-content:oklch(11.784% .039 134.6);--color-secondary:oklch(77.75% .196 111.09);--color-secondary-content:oklch(15.55% .039 111.09);--color-accent:oklch(85.39% .201 100.73);--color-accent-content:oklch(17.078% .04 100.73);--color-neutral:oklch(30.98% .075 108.6);--color-neutral-content:oklch(86.196% .015 108.6);--color-info:oklch(86.19% .047 224.14);--color-info-content:oklch(17.238% .009 224.14);--color-success:oklch(86.19% .047 157.85);--color-success-content:oklch(17.238% .009 157.85);--color-warning:oklch(86.19% .047 102.15);--color-warning-content:oklch(17.238% .009 102.15);--color-error:oklch(86.19% .047 25.85);--color-error-content:oklch(17.238% .009 25.85);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=night]:checked),[data-theme=night]{color-scheme:dark;--color-base-100:oklch(20.768% .039 265.754);--color-base-200:oklch(19.314% .037 265.754);--color-base-300:oklch(17.86% .034 265.754);--color-base-content:oklch(84.153% .007 265.754);--color-primary:oklch(75.351% .138 232.661);--color-primary-content:oklch(15.07% .027 232.661);--color-secondary:oklch(68.011% .158 276.934);--color-secondary-content:oklch(13.602% .031 276.934);--color-accent:oklch(72.36% .176 350.048);--color-accent-content:oklch(14.472% .035 350.048);--color-neutral:oklch(27.949% .036 260.03);--color-neutral-content:oklch(85.589% .007 260.03);--color-info:oklch(68.455% .148 237.251);--color-info-content:oklch(0% 0 0);--color-success:oklch(78.452% .132 181.911);--color-success-content:oklch(15.69% .026 181.911);--color-warning:oklch(83.242% .139 82.95);--color-warning-content:oklch(16.648% .027 82.95);--color-error:oklch(71.785% .17 13.118);--color-error-content:oklch(14.357% .034 13.118);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=coffee]:checked),[data-theme=coffee]{color-scheme:dark;--color-base-100:oklch(24% .023 329.708);--color-base-200:oklch(21% .021 329.708);--color-base-300:oklch(16% .019 329.708);--color-base-content:oklch(72.354% .092 79.129);--color-primary:oklch(71.996% .123 62.756);--color-primary-content:oklch(14.399% .024 62.756);--color-secondary:oklch(34.465% .029 199.194);--color-secondary-content:oklch(86.893% .005 199.194);--color-accent:oklch(42.621% .074 224.389);--color-accent-content:oklch(88.524% .014 224.389);--color-neutral:oklch(16.51% .015 326.261);--color-neutral-content:oklch(83.302% .003 326.261);--color-info:oklch(79.49% .063 184.558);--color-info-content:oklch(15.898% .012 184.558);--color-success:oklch(74.722% .072 131.116);--color-success-content:oklch(14.944% .014 131.116);--color-warning:oklch(88.15% .14 87.722);--color-warning-content:oklch(17.63% .028 87.722);--color-error:oklch(77.318% .128 31.871);--color-error-content:oklch(15.463% .025 31.871);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=winter]:checked),[data-theme=winter]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97.466% .011 259.822);--color-base-300:oklch(93.268% .016 262.751);--color-base-content:oklch(41.886% .053 255.824);--color-primary:oklch(56.86% .255 257.57);--color-primary-content:oklch(91.372% .051 257.57);--color-secondary:oklch(42.551% .161 282.339);--color-secondary-content:oklch(88.51% .032 282.339);--color-accent:oklch(59.939% .191 335.171);--color-accent-content:oklch(11.988% .038 335.171);--color-neutral:oklch(19.616% .063 257.651);--color-neutral-content:oklch(83.923% .012 257.651);--color-info:oklch(88.127% .085 214.515);--color-info-content:oklch(17.625% .017 214.515);--color-success:oklch(80.494% .077 197.823);--color-success-content:oklch(16.098% .015 197.823);--color-warning:oklch(89.172% .045 71.47);--color-warning-content:oklch(17.834% .009 71.47);--color-error:oklch(73.092% .11 20.076);--color-error-content:oklch(14.618% .022 20.076);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dim]:checked),[data-theme=dim]{color-scheme:dark;--color-base-100:oklch(30.857% .023 264.149);--color-base-200:oklch(28.036% .019 264.182);--color-base-300:oklch(26.346% .018 262.177);--color-base-content:oklch(82.901% .031 222.959);--color-primary:oklch(86.133% .141 139.549);--color-primary-content:oklch(17.226% .028 139.549);--color-secondary:oklch(73.375% .165 35.353);--color-secondary-content:oklch(14.675% .033 35.353);--color-accent:oklch(74.229% .133 311.379);--color-accent-content:oklch(14.845% .026 311.379);--color-neutral:oklch(24.731% .02 264.094);--color-neutral-content:oklch(82.901% .031 222.959);--color-info:oklch(86.078% .142 206.182);--color-info-content:oklch(17.215% .028 206.182);--color-success:oklch(86.171% .142 166.534);--color-success-content:oklch(17.234% .028 166.534);--color-warning:oklch(86.163% .142 94.818);--color-warning-content:oklch(17.232% .028 94.818);--color-error:oklch(82.418% .099 33.756);--color-error-content:oklch(16.483% .019 33.756);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=nord]:checked),[data-theme=nord]{color-scheme:light;--color-base-100:oklch(95.127% .007 260.731);--color-base-200:oklch(93.299% .01 261.788);--color-base-300:oklch(89.925% .016 262.749);--color-base-content:oklch(32.437% .022 264.182);--color-primary:oklch(59.435% .077 254.027);--color-primary-content:oklch(11.887% .015 254.027);--color-secondary:oklch(69.651% .059 248.687);--color-secondary-content:oklch(13.93% .011 248.687);--color-accent:oklch(77.464% .062 217.469);--color-accent-content:oklch(15.492% .012 217.469);--color-neutral:oklch(45.229% .035 264.131);--color-neutral-content:oklch(89.925% .016 262.749);--color-info:oklch(69.207% .062 332.664);--color-info-content:oklch(13.841% .012 332.664);--color-success:oklch(76.827% .074 131.063);--color-success-content:oklch(15.365% .014 131.063);--color-warning:oklch(85.486% .089 84.093);--color-warning-content:oklch(17.097% .017 84.093);--color-error:oklch(60.61% .12 15.341);--color-error-content:oklch(12.122% .024 15.341);--radius-selector:1rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=sunset]:checked),[data-theme=sunset]{color-scheme:dark;--color-base-100:oklch(22% .019 237.69);--color-base-200:oklch(20% .019 237.69);--color-base-300:oklch(18% .019 237.69);--color-base-content:oklch(77.383% .043 245.096);--color-primary:oklch(74.703% .158 39.947);--color-primary-content:oklch(14.94% .031 39.947);--color-secondary:oklch(72.537% .177 2.72);--color-secondary-content:oklch(14.507% .035 2.72);--color-accent:oklch(71.294% .166 299.844);--color-accent-content:oklch(14.258% .033 299.844);--color-neutral:oklch(26% .019 237.69);--color-neutral-content:oklch(70% .019 237.69);--color-info:oklch(85.559% .085 206.015);--color-info-content:oklch(17.111% .017 206.015);--color-success:oklch(85.56% .085 144.778);--color-success-content:oklch(17.112% .017 144.778);--color-warning:oklch(85.569% .084 74.427);--color-warning-content:oklch(17.113% .016 74.427);--color-error:oklch(85.511% .078 16.886);--color-error-content:oklch(17.102% .015 16.886);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=caramellatte]:checked),[data-theme=caramellatte]{color-scheme:light;--color-base-100:oklch(98% .016 73.684);--color-base-200:oklch(95% .038 75.164);--color-base-300:oklch(90% .076 70.697);--color-base-content:oklch(40% .123 38.172);--color-primary:oklch(0% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(22.45% .075 37.85);--color-secondary-content:oklch(90% .076 70.697);--color-accent:oklch(46.44% .111 37.85);--color-accent-content:oklch(90% .076 70.697);--color-neutral:oklch(55% .195 38.402);--color-neutral-content:oklch(98% .016 73.684);--color-info:oklch(42% .199 265.638);--color-info-content:oklch(90% .076 70.697);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .076 70.697);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:1}#pulsekit-embed:has(input.theme-controller[value=abyss]:checked),[data-theme=abyss]{color-scheme:dark;--color-base-100:oklch(20% .08 209);--color-base-200:oklch(15% .08 209);--color-base-300:oklch(10% .08 209);--color-base-content:oklch(90% .076 70.697);--color-primary:oklch(92% .2653 125);--color-primary-content:oklch(50% .2653 125);--color-secondary:oklch(83.27% .0764 298.3);--color-secondary-content:oklch(43.27% .0764 298.3);--color-accent:oklch(43% 0 0);--color-accent-content:oklch(98% 0 0);--color-neutral:oklch(30% .08 209);--color-neutral-content:oklch(90% .076 70.697);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(79% .209 151.711);--color-success-content:oklch(26% .065 152.934);--color-warning:oklch(84.8% .1962 84.62);--color-warning-content:oklch(44.8% .1962 84.62);--color-error:oklch(65% .1985 24.22);--color-error-content:oklch(27% .1985 24.22);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=silk]:checked),[data-theme=silk]{color-scheme:light;--color-base-100:oklch(97% .0035 67.78);--color-base-200:oklch(95% .0081 61.42);--color-base-300:oklch(90% .0081 61.42);--color-base-content:oklch(40% .0081 61.42);--color-primary:oklch(23.27% .0249 284.3);--color-primary-content:oklch(94.22% .2505 117.44);--color-secondary:oklch(23.27% .0249 284.3);--color-secondary-content:oklch(73.92% .2135 50.94);--color-accent:oklch(23.27% .0249 284.3);--color-accent-content:oklch(88.92% .2061 189.9);--color-neutral:oklch(20% 0 0);--color-neutral-content:oklch(80% .0081 61.42);--color-info:oklch(80.39% .1148 241.68);--color-info-content:oklch(30.39% .1148 241.68);--color-success:oklch(83.92% .0901 136.87);--color-success-content:oklch(23.92% .0901 136.87);--color-warning:oklch(83.92% .1085 80);--color-warning-content:oklch(43.92% .1085 80);--color-error:oklch(75.1% .1814 22.37);--color-error-content:oklch(35.1% .1814 22.37);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}.chat{--mask-chat:url("data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e")}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:calc(var(--size-field,.25rem)*10);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:100%;display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.list{flex-direction:column;font-size:.875rem;display:flex}.list :where(.list-row){--list-grid-cols:minmax(0,auto)1fr;border-radius:var(--radius-box);word-break:break-word;grid-auto-flow:column;grid-template-columns:var(--list-grid-cols);gap:1rem;padding:1rem;display:grid;position:relative}.list :where(.list-row):has(.list-col-grow:first-child){--list-grid-cols:1fr}.list :where(.list-row):has(.list-col-grow:nth-child(2)){--list-grid-cols:minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(3)){--list-grid-cols:minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(4)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(5)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(6)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row) :not(.list-col-wrap){grid-row-start:1}:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{content:"";border-bottom:var(--border)solid;inset-inline:var(--radius-box);border-color:var(--color-base-content);position:absolute;bottom:0}@supports (color:color-mix(in lab,red,red)){:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{border-color:color-mix(in oklab,var(--color-base-content)5%,transparent)}}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.card{border-radius:var(--radius-box);outline-offset:2px;outline:0 solid #0000;flex-direction:column;transition:outline .2s ease-in-out;display:flex;position:relative}.card:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.card:focus{outline-offset:2px;outline:2px solid #0000}}.card:focus-visible{outline-color:currentColor}.card :where(figure:first-child){border-start-start-radius:inherit;border-start-end-radius:inherit;border-end-end-radius:unset;border-end-start-radius:unset;overflow:hidden}.card :where(figure:last-child){border-start-start-radius:unset;border-start-end-radius:unset;border-end-end-radius:inherit;border-end-start-radius:inherit;overflow:hidden}.card:where(.card-border){border:var(--border)solid var(--color-base-200)}.card:where(.card-dash){border:var(--border)dashed var(--color-base-200)}.card.image-full{display:grid}.card.image-full>*{grid-row-start:1;grid-column-start:1}.card.image-full>.card-body{color:var(--color-neutral-content);position:relative}.card.image-full :where(figure){border-radius:inherit;overflow:hidden}.card.image-full>figure img{object-fit:cover;filter:brightness(28%);height:100%}.card figure{justify-content:center;align-items:center;display:flex}.card:has(>input:is(input[type=checkbox],input[type=radio])){cursor:pointer;-webkit-user-select:none;user-select:none}.card:has(>:checked){outline:2px solid}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.progress{appearance:none;border-radius:var(--radius-box);background-color:currentColor;width:100%;height:.5rem;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.progress{background-color:color-mix(in oklab,currentColor 20%,transparent)}}.progress{color:var(--color-base-content)}.progress:indeterminate{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}@supports ((-moz-appearance:none)){.progress:indeterminate::-moz-progress-bar{background-color:#0000;background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}.progress::-moz-progress-bar{border-radius:var(--radius-box);background-color:currentColor}}@supports ((-webkit-appearance:none)){.progress::-webkit-progress-bar{border-radius:var(--radius-box);background-color:#0000}.progress::-webkit-progress-value{border-radius:var(--radius-box);background-color:currentColor}}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.textarea{border:var(--border)solid #0000;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;border-color:var(--input-color);width:clamp(3rem,20rem,100%);min-height:5rem;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem;font-size:.875rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.input-sm{--size:calc(var(--size-field,.25rem)*8);font-size:.75rem}.input-sm[type=number]::-webkit-inner-spin-button{margin-block:-.5rem;margin-inline-end:-.75rem}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-8{margin-top:calc(var(--spacing)*8)}.mr-1{margin-right:calc(var(--spacing)*1)}.fieldset-legend{color:var(--color-base-content);justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:-.25rem;padding-block:.5rem;font-weight:600;display:flex}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:#0000004d}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.badge{border-radius:var(--radius-selector);vertical-align:middle;color:var(--badge-fg);border:var(--border)solid var(--badge-color,var(--color-base-200));width:fit-content;padding-inline:calc(.25rem*3 - var(--border));background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);background-color:var(--badge-bg);--badge-bg:var(--badge-color,var(--color-base-100));--badge-fg:var(--color-base-content);--size:calc(var(--size-selector,.25rem)*6);height:var(--size);justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;display:inline-flex}.badge.badge-outline{--badge-fg:var(--badge-color);--badge-bg:#0000;background-image:none;border-color:currentColor}.badge.badge-dash{--badge-fg:var(--badge-color);--badge-bg:#0000;background-image:none;border-style:dashed;border-color:currentColor}.badge.badge-soft{color:var(--badge-color,var(--color-base-content));background-color:var(--badge-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.badge.badge-soft{background-color:color-mix(in oklab,var(--badge-color,var(--color-base-content))8%,var(--color-base-100))}}.badge.badge-soft{border-color:var(--badge-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.badge.badge-soft{border-color:color-mix(in oklab,var(--badge-color,var(--color-base-content))10%,var(--color-base-100))}}.badge.badge-soft{background-image:none}.card-body{padding:var(--card-p,1.5rem);font-size:var(--card-fs,.875rem);flex-direction:column;flex:auto;gap:.5rem;display:flex}.card-body :where(p){flex-grow:1}.fieldset{grid-template-columns:1fr;grid-auto-rows:max-content;gap:.375rem;padding-block:.25rem;font-size:.75rem;display:grid}.card-actions{flex-wrap:wrap;align-items:flex-start;gap:.5rem;display:flex}.card-title{font-size:var(--cardtitle-fs,1.125rem);align-items:center;gap:.5rem;font-weight:600;display:flex}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-block{display:inline-block}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-full{height:100%}.h-screen{height:100vh}.max-h-96{max-height:calc(var(--spacing)*96)}.min-h-96{min-height:calc(var(--spacing)*96)}.loading-lg{width:calc(var(--size-selector,.25rem)*7)}.loading-md{width:calc(var(--size-selector,.25rem)*6)}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-fit{width:fit-content}.w-full{width:100%}.w-screen{width:100vw}.max-w-5xl{max-width:var(--container-5xl)}.max-w-md{max-width:var(--container-md)}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.self-end{align-self:flex-end}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-base-300{border-color:var(--color-base-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-error\\/20{border-color:var(--color-error)}@supports (color:color-mix(in lab,red,red)){.border-error\\/20{border-color:color-mix(in oklab,var(--color-error)20%,transparent)}}.border-gray-200{border-color:var(--color-gray-200)}.border-green-200{border-color:var(--color-green-200)}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.bg-base-100,.bg-base-100\\/80{background-color:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){.bg-base-100\\/80{background-color:color-mix(in oklab,var(--color-base-100)80%,transparent)}}.bg-base-200,.bg-base-200\\/80{background-color:var(--color-base-200)}@supports (color:color-mix(in lab,red,red)){.bg-base-200\\/80{background-color:color-mix(in oklab,var(--color-base-200)80%,transparent)}}.bg-base-300{background-color:var(--color-base-300)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-error\\/10{background-color:var(--color-error)}@supports (color:color-mix(in lab,red,red)){.bg-error\\/10{background-color:color-mix(in oklab,var(--color-error)10%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-green-50{background-color:var(--color-green-50)}.bg-primary\\/10{background-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,var(--color-primary)10%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-sky-100{background-color:var(--color-sky-100)}.bg-transparent{background-color:#0000}.bg-yellow-50{background-color:var(--color-yellow-50)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.object-cover{object-fit:cover}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.badge-sm{--size:calc(var(--size-selector,.25rem)*5);padding-inline:calc(.25rem*2.5 - var(--border));font-size:.75rem}.badge-xs{--size:calc(var(--size-selector,.25rem)*4);padding-inline:calc(.25rem*2 - var(--border));font-size:.625rem}.py-2{padding-block:calc(var(--spacing)*2)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-6{padding-top:calc(var(--spacing)*6)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.select-sm{--size:calc(var(--size-field,.25rem)*8);font-size:.75rem}.textarea-sm{font-size:.75rem}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-pre-wrap{white-space:pre-wrap}.text-base-content,.text-base-content\\/50{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/50{color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.text-base-content\\/60{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/60{color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.text-base-content\\/70{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/70{color:color-mix(in oklab,var(--color-base-content)70%,transparent)}}.text-blue-700{color:var(--color-blue-700)}.text-error{color:var(--color-error)}.text-gray-700{color:var(--color-gray-700)}.text-green-700{color:var(--color-green-700)}.text-primary,.text-primary\\/40{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/40{color:color-mix(in oklab,var(--color-primary)40%,transparent)}}.text-primary\\/50{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/50{color:color-mix(in oklab,var(--color-primary)50%,transparent)}}.text-primary\\/60{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/60{color:color-mix(in oklab,var(--color-primary)60%,transparent)}}.text-primary\\/70{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/70{color:color-mix(in oklab,var(--color-primary)70%,transparent)}}.text-red-700{color:var(--color-red-700)}.text-yellow-700{color:var(--color-yellow-700)}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-90{opacity:.9}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.badge-error{--badge-color:var(--color-error);--badge-fg:var(--color-error-content)}.badge-info{--badge-color:var(--color-info);--badge-fg:var(--color-info-content)}.badge-neutral{--badge-color:var(--color-neutral);--badge-fg:var(--color-neutral-content)}.badge-success{--badge-color:var(--color-success);--badge-fg:var(--color-success-content)}.badge-warning{--badge-color:var(--color-warning);--badge-fg:var(--color-warning-content)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}@media (hover:hover){.group-hover\\:text-primary:is(:where(.group):hover *){color:var(--color-primary)}.hover\\:border-primary\\/20:hover{border-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-primary\\/20:hover{border-color:color-mix(in oklab,var(--color-primary)20%,transparent)}}.hover\\:bg-base-300:hover{background-color:var(--color-base-300)}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:btn-primary:hover{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}}@container (min-width:28rem){.\\@md\\:mt-8{margin-top:calc(var(--spacing)*8)}.\\@md\\:mt-12{margin-top:calc(var(--spacing)*12)}.\\@md\\:mb-4{margin-bottom:calc(var(--spacing)*4)}.\\@md\\:mb-8{margin-bottom:calc(var(--spacing)*8)}.\\@md\\:inline{display:inline}:where(.\\@md\\:space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.\\@md\\:p-4{padding:calc(var(--spacing)*4)}.\\@md\\:p-6{padding:calc(var(--spacing)*6)}.\\@md\\:py-4{padding-block:calc(var(--spacing)*4)}.\\@md\\:py-12{padding-block:calc(var(--spacing)*12)}.\\@md\\:py-16{padding-block:calc(var(--spacing)*16)}.\\@md\\:pt-6{padding-top:calc(var(--spacing)*6)}.\\@md\\:pt-8{padding-top:calc(var(--spacing)*8)}.\\@md\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.\\@md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\@md\\:btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}}@container (min-width:32rem){.\\@lg\\:sticky{position:sticky}.\\@lg\\:top-0{top:calc(var(--spacing)*0)}.\\@lg\\:w-80{width:calc(var(--spacing)*80)}.\\@lg\\:flex-shrink-0{flex-shrink:0}.\\@lg\\:flex-row{flex-direction:row}.\\@lg\\:gap-6{gap:calc(var(--spacing)*6)}}@container (min-width:42rem){.\\@2xl\\:grid{display:grid}.\\@2xl\\:hidden{display:none}.\\@2xl\\:break-inside-avoid{break-inside:avoid}.\\@2xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@2xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\@2xl\\:gap-4{gap:calc(var(--spacing)*4)}:where(.\\@2xl\\:space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*0)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*0)*calc(1 - var(--tw-space-y-reverse)))}}}@keyframes dropdown{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}`, ui = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [r, n] of o)
    t[r] = n;
  return t;
}, fh = /* @__PURE__ */ ui(hh, [["styles", [ph]]]), mh = ["data-theme"], bh = {
  key: 0,
  class: "flex items-center justify-center py-8 @md:py-12"
}, gh = {
  key: 1,
  class: "bg-error/10 text-error p-4 @md:p-6 rounded-xl border border-error/20 flex flex-col gap-3 max-w-md mx-auto"
}, kh = { class: "text-sm opacity-90" }, vh = {
  key: 2,
  class: "text-primary"
}, xh = {
  key: 0,
  class: "bg-error/10 text-error p-4 @md:p-6 rounded-xl border border-error/20 flex flex-col gap-3 mb-6"
}, yh = { class: "text-sm opacity-90" }, wh = {
  key: 1,
  class: "flex items-center justify-center py-12 @md:py-16"
}, _h = {
  key: 2,
  class: "flex flex-col items-center justify-center py-12 @md:py-16 text-center"
}, Eh = {
  key: 3,
  class: "space-y-6 @2xl:space-y-0"
}, Nh = { class: "@2xl:hidden space-y-6" }, Ch = { class: "flex items-center gap-3" }, Oh = { class: "text-lg" }, Dh = { class: "p-3 space-y-3" }, Sh = { class: "flex items-start justify-between gap-3 mb-3" }, zh = { class: "font-medium text-sm leading-relaxed flex-1 group-hover:text-primary transition-colors" }, Vh = { class: "badge badge-xs opacity-60" }, Th = { class: "text-xs text-primary/70 leading-relaxed mb-4 line-clamp-2 whitespace-pre-wrap" }, $h = { class: "flex items-center justify-between" }, Mh = { class: "flex items-center gap-2" }, Ph = { class: "avatar" }, jh = { class: "w-5 h-5 rounded-full bg-primary/10" }, Ah = ["src", "alt"], Ih = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-xs text-primary/50"
}, Rh = { class: "text-xs text-primary/60 font-medium" }, Fh = { class: "flex items-center gap-3 text-xs text-primary/50" }, Lh = { class: "flex items-center gap-1" }, Uh = { class: "flex items-center gap-1" }, Hh = {
  key: 0,
  class: "text-center py-8 text-primary/50"
}, Wh = { class: "hidden @2xl:grid @2xl:grid-cols-4 @2xl:gap-4" }, Bh = { class: "flex items-center justify-between" }, Kh = { class: "flex items-center gap-3" }, qh = { class: "text-lg" }, Yh = { class: "p-3 space-y-3 max-h-96 overflow-y-auto" }, Xh = { class: "flex items-start justify-between gap-2 mb-3" }, Jh = { class: "font-medium text-sm leading-relaxed flex-1 group-hover:text-primary transition-colors" }, Gh = { class: "text-xs text-primary/70 leading-relaxed mb-4 line-clamp-3" }, Qh = { class: "space-y-3" }, Zh = { class: "flex items-center gap-2" }, ep = { class: "avatar" }, op = { class: "w-4 h-4 rounded-full bg-primary/10" }, tp = ["src", "alt"], rp = {
  key: 1,
  class: "w-full h-full flex items-center justify-center text-xs text-primary/50"
}, np = { class: "text-xs text-primary/60 font-medium truncate" }, cp = { class: "flex items-center justify-between" }, lp = { class: "flex items-center gap-2 text-xs text-primary/50" }, ip = { class: "flex items-center gap-1" }, sp = { class: "flex items-center gap-1" }, ap = { class: "text-xs text-primary/40" }, dp = {
  key: 0,
  class: "text-center py-12 text-primary/50"
}, up = { class: "mt-8 @md:mt-12 pt-6 @md:pt-8 border-t border-base-300" }, hp = ["href"], pp = /* @__PURE__ */ ot({
  __name: "Kanban",
  props: {
    projectId: { type: String },
    user: { type: [String, null] }
  },
  setup(e) {
    const o = e, { setProjectId: t } = _o(), { formatDate: r } = Ln(), {
      project: n,
      loading: c,
      error: l,
      loadProject: i
    } = di(), {
      feedbackItems: s,
      loading: p,
      error: u,
      loadFeedback: d
    } = Tr(), m = vo(() => ({
      open: {
        title: "Open",
        icon: "🆕",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        badgeColor: "badge-info"
      },
      "in-progress": {
        title: "In Progress",
        icon: "⚡",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        textColor: "text-yellow-700",
        badgeColor: "badge-warning"
      },
      completed: {
        title: "Completed",
        icon: "✅",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        textColor: "text-green-700",
        badgeColor: "badge-success"
      },
      declined: {
        title: "Declined",
        icon: "❌",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        textColor: "text-red-700",
        badgeColor: "badge-error"
      }
    })), b = vo(() => `https://trypulsekit.com/?utm_source=pulsekit-embed&utm_medium=${o.projectId}&utm_campaign=powered-by`), _ = (R) => ["open", "in-progress", "completed", "declined"].includes(R) ? m.value[R] : {
      title: R,
      icon: "❓",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      badgeColor: "badge-neutral"
    }, T = () => {
      d({ groupBy: "status" });
    };
    Cr(async () => {
      try {
        if (t(o.projectId), await i(), !n.value)
          return;
        await d({ groupBy: "status" });
      } catch (R) {
        console.error("Error during initialization sequence:", R);
      }
    });
    const X = vo(() => {
      const R = {};
      for (const P in s.value)
        P !== "declined" && (R[P] = s.value[P]);
      return R;
    });
    return (R, P) => (z(), V("div", {
      id: "pulsekit-embed",
      "data-theme": A(n)?.theme || "light",
      class: "@container bg-transparent"
    }, [
      A(c) ? (z(), V("div", bh, P[1] || (P[1] = [
        g("div", { class: "flex flex-col items-center gap-3" }, [
          g("div", { class: "loading loading-spinner loading-md text-primary" }),
          g("div", { class: "text-sm text-primary/70" }, "Loading project...")
        ], -1)
      ]))) : A(l) ? (z(), V("div", gh, [
        P[3] || (P[3] = g("div", { class: "flex items-center gap-2" }, [
          g("span", { class: "text-lg" }, "⚠️"),
          g("span", { class: "font-medium" }, "Failed to load project")
        ], -1)),
        g("p", kh, U(A(l)), 1),
        g("button", {
          onClick: P[0] || (P[0] = //@ts-ignore
          (...F) => A(i) && A(i)(...F)),
          class: "btn btn-sm btn-error self-end"
        }, P[2] || (P[2] = [
          g("span", { class: "text-xs" }, "🔄", -1),
          so(" Try Again ")
        ]))
      ])) : A(n) ? (z(), V("div", vh, [
        P[11] || (P[11] = g("div", { class: "mb-6 @md:mb-8" }, [
          g("h2", { class: "text-lg @md:text-xl font-semibold text-primary mb-2" }, " Feedback Board "),
          g("p", { class: "text-sm @md:text-base text-primary/70" }, " Track the progress of feature requests and improvements ")
        ], -1)),
        A(u) ? (z(), V("div", xh, [
          P[5] || (P[5] = g("div", { class: "flex items-center gap-2" }, [
            g("span", { class: "text-lg" }, "⚠️"),
            g("span", { class: "font-medium" }, "Failed to load feedback")
          ], -1)),
          g("p", yh, U(A(u)), 1),
          g("button", {
            onClick: T,
            class: "btn btn-sm btn-error self-end"
          }, P[4] || (P[4] = [
            g("span", { class: "text-xs" }, "🔄", -1),
            so(" Try Again ")
          ]))
        ])) : A(p) ? (z(), V("div", wh, P[6] || (P[6] = [
          g("div", { class: "flex flex-col items-center gap-4" }, [
            g("div", { class: "loading loading-spinner loading-lg text-primary" }),
            g("div", { class: "text-sm @md:text-base text-primary/70" }, "Loading feedback...")
          ], -1)
        ]))) : !A(s) || Object.keys(A(s)).length === 0 ? (z(), V("div", _h, P[7] || (P[7] = [
          g("div", { class: "text-4xl @md:text-5xl mb-4 opacity-50" }, "📝", -1),
          g("div", { class: "text-lg @md:text-xl font-medium text-primary mb-2" }, " No feedback yet ", -1),
          g("div", { class: "text-sm @md:text-base text-primary/70 max-w-md" }, " When users submit feedback, it will appear here organized by status. ", -1)
        ]))) : (z(), V("div", Eh, [
          Qe((z(), V("div", Nh, [
            (z(!0), V(ce, null, So(X.value, (F, Z) => (z(), V("div", {
              key: Z,
              class: "bg-base-100 rounded-xl border border-base-300 overflow-hidden"
            }, [
              g("div", {
                class: qe(["flex items-center justify-between p-4 border-b border-base-300", _(String(Z))?.bgColor])
              }, [
                g("div", Ch, [
                  g("span", Oh, U(_(String(Z))?.icon), 1),
                  g("div", null, [
                    g("h3", {
                      class: qe(["font-semibold text-sm", _(String(Z))?.textColor])
                    }, U(_(String(Z))?.title), 3)
                  ])
                ]),
                g("div", {
                  class: qe(["badge badge-sm", _(String(Z))?.badgeColor])
                }, U(Array.isArray(F) ? F.length : 0), 3)
              ], 2),
              Qe((z(), V("div", Dh, [
                (z(!0), V(ce, null, So(Array.isArray(F) ? F : [], (S) => (z(), V("div", {
                  key: S.id,
                  class: "bg-base-200 hover:bg-base-300 transition-colors duration-200 p-4 rounded-lg border border-base-300 hover:border-primary/20 group"
                }, [
                  g("div", Sh, [
                    g("h4", zh, U(S.title), 1),
                    g("div", Vh, U(A(r)(S.createdAt)), 1)
                  ]),
                  g("p", Th, U(S.content), 1),
                  g("div", $h, [
                    g("div", Mh, [
                      g("div", Ph, [
                        g("div", jh, [
                          S.user?.avatar ? (z(), V("img", {
                            key: 0,
                            src: S.user.avatar,
                            alt: S.user.name,
                            class: "w-full h-full object-cover rounded-full"
                          }, null, 8, Ah)) : (z(), V("div", Ih, " 👤 "))
                        ])
                      ]),
                      g("span", Rh, U(S.user?.name || S.user?.email || "Anonymous"), 1)
                    ]),
                    g("div", Fh, [
                      g("span", Lh, " 💬 " + U(S.comments || 0), 1),
                      g("span", Uh, " 👍 " + U(S.votes?.length || 0), 1)
                    ])
                  ])
                ]))), 128)),
                !Array.isArray(F) || F.length === 0 ? (z(), V("div", Hh, P[8] || (P[8] = [
                  g("div", { class: "text-2xl mb-2 opacity-50" }, "📭", -1),
                  g("div", { class: "text-xs" }, "No items in this status", -1)
                ]))) : ze("", !0)
              ])), [
                [A(Ko)]
              ])
            ]))), 128))
          ])), [
            [A(Ko)]
          ]),
          Qe((z(), V("div", Wh, [
            (z(!0), V(ce, null, So(X.value, (F, Z) => (z(), V("div", {
              key: Z,
              class: "bg-base-100 rounded-xl border border-base-300 overflow-hidden min-h-96"
            }, [
              g("div", {
                class: qe(["sticky top-0 bg-base-100 border-b border-base-300 p-4", _(String(Z))?.bgColor])
              }, [
                g("div", Bh, [
                  g("div", Kh, [
                    g("span", qh, U(_(String(Z))?.icon), 1),
                    g("h3", {
                      class: qe(["font-semibold text-sm", _(String(Z))?.textColor])
                    }, U(_(String(Z))?.title), 3)
                  ]),
                  g("div", {
                    class: qe(["badge badge-sm", _(String(Z))?.badgeColor])
                  }, U(Array.isArray(F) ? F.length : 0), 3)
                ])
              ], 2),
              Qe((z(), V("div", Yh, [
                (z(!0), V(ce, null, So(Array.isArray(F) ? F : [], (S) => (z(), V("div", {
                  key: S.id,
                  class: "bg-base-200 hover:bg-base-300 transition-all duration-200 p-4 rounded-lg border border-base-300 hover:border-primary/20 hover:shadow-sm group cursor-pointer"
                }, [
                  g("div", Xh, [
                    g("h4", Jh, U(S.title), 1)
                  ]),
                  g("p", Gh, U(S.content), 1),
                  g("div", Qh, [
                    g("div", Zh, [
                      g("div", ep, [
                        g("div", op, [
                          S.user?.avatar ? (z(), V("img", {
                            key: 0,
                            src: S.user.avatar,
                            alt: S.user.name,
                            class: "w-full h-full object-cover rounded-full"
                          }, null, 8, tp)) : (z(), V("div", rp, " 👤 "))
                        ])
                      ]),
                      g("span", np, U(S.user?.name || S.user?.email || "Anonymous"), 1)
                    ]),
                    g("div", cp, [
                      g("div", lp, [
                        g("span", ip, " 💬 " + U(S.comments || 0), 1),
                        g("span", sp, " 👍 " + U(S.votes?.length || 0), 1)
                      ]),
                      g("div", ap, U(A(r)(S.createdAt)), 1)
                    ])
                  ])
                ]))), 128)),
                !Array.isArray(F) || F.length === 0 ? (z(), V("div", dp, P[9] || (P[9] = [
                  g("div", { class: "text-3xl mb-3 opacity-30" }, "📭", -1),
                  g("div", { class: "text-xs" }, "No items yet", -1)
                ]))) : ze("", !0)
              ])), [
                [A(Ko)]
              ])
            ]))), 128))
          ])), [
            [A(Ko)]
          ])
        ])),
        g("div", up, [
          g("a", {
            class: "btn btn-secondary btn-xs @md:btn-sm mx-auto block w-fit hover:btn-primary transition-colors",
            href: b.value,
            target: "_blank"
          }, P[10] || (P[10] = [
            g("span", { class: "text-xs mr-1" }, "⚡", -1),
            so(" Powered by PulseKit ")
          ]), 8, hp)
        ])
      ])) : ze("", !0)
    ], 8, mh));
  }
}), fp = `/*! tailwindcss v4.1.7 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-700:oklch(50.5% .213 27.518);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-700:oklch(55.4% .135 66.442);--color-green-50:oklch(98.2% .018 155.826);--color-green-200:oklch(92.5% .084 155.995);--color-green-700:oklch(52.7% .154 150.069);--color-sky-100:oklch(95.1% .026 236.824);--color-blue-50:oklch(97% .014 254.604);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-700:oklch(37.3% .034 259.733);--color-black:#000;--spacing:.25rem;--container-md:28rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:3rem;--text-5xl--line-height:1;--font-weight-medium:500;--font-weight-semibold:600;--leading-relaxed:1.625;--radius-lg:.5rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:where(#pulsekit-embed),#pulsekit-embed:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){#pulsekit-embed{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}#pulsekit-embed:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cupcake]:checked),[data-theme=cupcake]{color-scheme:light;--color-base-100:oklch(97.788% .004 56.375);--color-base-200:oklch(93.982% .007 61.449);--color-base-300:oklch(91.586% .006 53.44);--color-base-content:oklch(23.574% .066 313.189);--color-primary:oklch(85% .138 181.071);--color-primary-content:oklch(43% .078 188.216);--color-secondary:oklch(89% .061 343.231);--color-secondary-content:oklch(45% .187 3.815);--color-accent:oklch(90% .076 70.697);--color-accent-content:oklch(47% .157 37.304);--color-neutral:oklch(27% .006 286.033);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(68% .169 237.323);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(69% .17 162.48);--color-success-content:oklch(26% .051 172.552);--color-warning:oklch(79% .184 86.047);--color-warning-content:oklch(28% .066 53.813);--color-error:oklch(64% .246 16.439);--color-error-content:oklch(27% .105 12.094);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=bumblebee]:checked),[data-theme=bumblebee]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(85% .199 91.936);--color-primary-content:oklch(42% .095 57.708);--color-secondary:oklch(75% .183 55.934);--color-secondary-content:oklch(40% .123 38.172);--color-accent:oklch(0% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(37% .01 67.558);--color-neutral-content:oklch(92% .003 48.717);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(39% .09 240.876);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=emerald]:checked),[data-theme=emerald]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(35.519% .032 262.988);--color-primary:oklch(76.662% .135 153.45);--color-primary-content:oklch(33.387% .04 162.24);--color-secondary:oklch(61.302% .202 261.294);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(72.772% .149 33.2);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(35.519% .032 262.988);--color-neutral-content:oklch(98.462% .001 247.838);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=corporate]:checked),[data-theme=corporate]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(22.389% .031 278.072);--color-primary:oklch(58% .158 241.966);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(55% .046 257.417);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(60% .126 221.723);--color-info-content:oklch(100% 0 0);--color-success:oklch(62% .194 149.214);--color-success-content:oklch(100% 0 0);--color-warning:oklch(85% .199 91.936);--color-warning-content:oklch(0% 0 0);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(0% 0 0);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=synthwave]:checked),[data-theme=synthwave]{color-scheme:dark;--color-base-100:oklch(15% .09 281.288);--color-base-200:oklch(20% .09 281.288);--color-base-300:oklch(25% .09 281.288);--color-base-content:oklch(78% .115 274.713);--color-primary:oklch(71% .202 349.761);--color-primary-content:oklch(28% .109 3.907);--color-secondary:oklch(82% .111 230.318);--color-secondary-content:oklch(29% .066 243.157);--color-accent:oklch(75% .183 55.934);--color-accent-content:oklch(26% .079 36.259);--color-neutral:oklch(45% .24 277.023);--color-neutral-content:oklch(87% .065 274.039);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(77% .152 181.912);--color-success-content:oklch(27% .046 192.524);--color-warning:oklch(90% .182 98.111);--color-warning-content:oklch(42% .095 57.708);--color-error:oklch(73.7% .121 32.639);--color-error-content:oklch(23.501% .096 290.329);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=retro]:checked),[data-theme=retro]{color-scheme:light;--color-base-100:oklch(91.637% .034 90.515);--color-base-200:oklch(88.272% .049 91.774);--color-base-300:oklch(84.133% .065 90.856);--color-base-content:oklch(41% .112 45.904);--color-primary:oklch(80% .114 19.571);--color-primary-content:oklch(39% .141 25.723);--color-secondary:oklch(92% .084 155.995);--color-secondary-content:oklch(44% .119 151.328);--color-accent:oklch(68% .162 75.834);--color-accent-content:oklch(41% .112 45.904);--color-neutral:oklch(44% .011 73.639);--color-neutral-content:oklch(86% .005 56.366);--color-info:oklch(58% .158 241.966);--color-info-content:oklch(96% .059 95.617);--color-success:oklch(51% .096 186.391);--color-success-content:oklch(96% .059 95.617);--color-warning:oklch(64% .222 41.116);--color-warning-content:oklch(96% .059 95.617);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(40% .123 38.172);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cyberpunk]:checked),[data-theme=cyberpunk]{color-scheme:light;--color-base-100:oklch(94.51% .179 104.32);--color-base-200:oklch(91.51% .179 104.32);--color-base-300:oklch(85.51% .179 104.32);--color-base-content:oklch(0% 0 0);--color-primary:oklch(74.22% .209 6.35);--color-primary-content:oklch(14.844% .041 6.35);--color-secondary:oklch(83.33% .184 204.72);--color-secondary-content:oklch(16.666% .036 204.72);--color-accent:oklch(71.86% .217 310.43);--color-accent-content:oklch(14.372% .043 310.43);--color-neutral:oklch(23.04% .065 269.31);--color-neutral-content:oklch(94.51% .179 104.32);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=valentine]:checked),[data-theme=valentine]{color-scheme:light;--color-base-100:oklch(97% .014 343.198);--color-base-200:oklch(94% .028 342.258);--color-base-300:oklch(89% .061 343.231);--color-base-content:oklch(52% .223 3.958);--color-primary:oklch(65% .241 354.308);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(62% .265 303.9);--color-secondary-content:oklch(97% .014 308.299);--color-accent:oklch(82% .111 230.318);--color-accent-content:oklch(39% .09 240.876);--color-neutral:oklch(40% .153 2.432);--color-neutral-content:oklch(89% .061 343.231);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(44% .11 240.79);--color-success:oklch(84% .143 164.978);--color-success-content:oklch(43% .095 166.913);--color-warning:oklch(75% .183 55.934);--color-warning-content:oklch(26% .079 36.259);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(97% .013 17.38);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=halloween]:checked),[data-theme=halloween]{color-scheme:dark;--color-base-100:oklch(21% .006 56.043);--color-base-200:oklch(14% .004 49.25);--color-base-300:oklch(0% 0 0);--color-base-content:oklch(84.955% 0 0);--color-primary:oklch(77.48% .204 60.62);--color-primary-content:oklch(19.693% .004 196.779);--color-secondary:oklch(45.98% .248 305.03);--color-secondary-content:oklch(89.196% .049 305.03);--color-accent:oklch(64.8% .223 136.073);--color-accent-content:oklch(0% 0 0);--color-neutral:oklch(24.371% .046 65.681);--color-neutral-content:oklch(84.874% .009 65.681);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(13.316% .031 58.318);--color-error:oklch(65.72% .199 27.33);--color-error-content:oklch(13.144% .039 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=garden]:checked),[data-theme=garden]{color-scheme:light;--color-base-100:oklch(92.951% .002 17.197);--color-base-200:oklch(86.445% .002 17.197);--color-base-300:oklch(79.938% .001 17.197);--color-base-content:oklch(16.961% .001 17.32);--color-primary:oklch(62.45% .278 3.836);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(48.495% .11 355.095);--color-secondary-content:oklch(89.699% .022 355.095);--color-accent:oklch(56.273% .054 154.39);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(24.155% .049 89.07);--color-neutral-content:oklch(92.951% .002 17.197);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=forest]:checked),[data-theme=forest]{color-scheme:dark;--color-base-100:oklch(20.84% .008 17.911);--color-base-200:oklch(18.522% .007 17.911);--color-base-300:oklch(16.203% .007 17.911);--color-base-content:oklch(83.768% .001 17.911);--color-primary:oklch(68.628% .185 148.958);--color-primary-content:oklch(0% 0 0);--color-secondary:oklch(69.776% .135 168.327);--color-secondary-content:oklch(13.955% .027 168.327);--color-accent:oklch(70.628% .119 185.713);--color-accent-content:oklch(14.125% .023 185.713);--color-neutral:oklch(30.698% .039 171.364);--color-neutral-content:oklch(86.139% .007 171.364);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=aqua]:checked),[data-theme=aqua]{color-scheme:dark;--color-base-100:oklch(37% .146 265.522);--color-base-200:oklch(28% .091 267.935);--color-base-300:oklch(22% .091 267.935);--color-base-content:oklch(90% .058 230.902);--color-primary:oklch(85.661% .144 198.645);--color-primary-content:oklch(40.124% .068 197.603);--color-secondary:oklch(60.682% .108 309.782);--color-secondary-content:oklch(96% .016 293.756);--color-accent:oklch(93.426% .102 94.555);--color-accent-content:oklch(18.685% .02 94.555);--color-neutral:oklch(27% .146 265.522);--color-neutral-content:oklch(80% .146 265.522);--color-info:oklch(54.615% .215 262.88);--color-info-content:oklch(90.923% .043 262.88);--color-success:oklch(62.705% .169 149.213);--color-success-content:oklch(12.541% .033 149.213);--color-warning:oklch(66.584% .157 58.318);--color-warning-content:oklch(27% .077 45.635);--color-error:oklch(73.95% .19 27.33);--color-error-content:oklch(14.79% .038 27.33);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=lofi]:checked),[data-theme=lofi]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(15.906% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(21.455% .001 17.278);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(26.861% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(0% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(79.54% .103 205.9);--color-info-content:oklch(15.908% .02 205.9);--color-success:oklch(90.13% .153 164.14);--color-success-content:oklch(18.026% .03 164.14);--color-warning:oklch(88.37% .135 79.94);--color-warning-content:oklch(17.674% .027 79.94);--color-error:oklch(78.66% .15 28.47);--color-error-content:oklch(15.732% .03 28.47);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=pastel]:checked),[data-theme=pastel]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98.462% .001 247.838);--color-base-300:oklch(92.462% .001 247.838);--color-base-content:oklch(20% 0 0);--color-primary:oklch(90% .063 306.703);--color-primary-content:oklch(49% .265 301.924);--color-secondary:oklch(89% .058 10.001);--color-secondary-content:oklch(51% .222 16.935);--color-accent:oklch(90% .093 164.15);--color-accent-content:oklch(50% .118 165.612);--color-neutral:oklch(55% .046 257.417);--color-neutral-content:oklch(92% .013 255.508);--color-info:oklch(86% .127 207.078);--color-info-content:oklch(52% .105 223.128);--color-success:oklch(87% .15 154.449);--color-success-content:oklch(52% .154 150.069);--color-warning:oklch(83% .128 66.29);--color-warning-content:oklch(55% .195 38.402);--color-error:oklch(80% .114 19.571);--color-error-content:oklch(50% .213 27.518);--radius-selector:1rem;--radius-field:2rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=fantasy]:checked),[data-theme=fantasy]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(93% 0 0);--color-base-300:oklch(86% 0 0);--color-base-content:oklch(27.807% .029 256.847);--color-primary:oklch(37.45% .189 325.02);--color-primary-content:oklch(87.49% .037 325.02);--color-secondary:oklch(53.92% .162 241.36);--color-secondary-content:oklch(90.784% .032 241.36);--color-accent:oklch(75.98% .204 56.72);--color-accent-content:oklch(15.196% .04 56.72);--color-neutral:oklch(27.807% .029 256.847);--color-neutral-content:oklch(85.561% .005 256.847);--color-info:oklch(72.06% .191 231.6);--color-info-content:oklch(0% 0 0);--color-success:oklch(64.8% .15 160);--color-success-content:oklch(0% 0 0);--color-warning:oklch(84.71% .199 83.87);--color-warning-content:oklch(0% 0 0);--color-error:oklch(71.76% .221 22.18);--color-error-content:oklch(0% 0 0);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=wireframe]:checked),[data-theme=wireframe]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(94% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(87% 0 0);--color-primary-content:oklch(26% 0 0);--color-secondary:oklch(87% 0 0);--color-secondary-content:oklch(26% 0 0);--color-accent:oklch(87% 0 0);--color-accent-content:oklch(26% 0 0);--color-neutral:oklch(87% 0 0);--color-neutral-content:oklch(26% 0 0);--color-info:oklch(44% .11 240.79);--color-info-content:oklch(90% .058 230.902);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .093 164.15);--color-warning:oklch(47% .137 46.201);--color-warning-content:oklch(92% .12 95.746);--color-error:oklch(44% .177 26.899);--color-error-content:oklch(88% .062 18.334);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=black]:checked),[data-theme=black]{color-scheme:dark;--color-base-100:oklch(0% 0 0);--color-base-200:oklch(19% 0 0);--color-base-300:oklch(22% 0 0);--color-base-content:oklch(87.609% 0 0);--color-primary:oklch(35% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(35% 0 0);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(35% 0 0);--color-accent-content:oklch(100% 0 0);--color-neutral:oklch(35% 0 0);--color-neutral-content:oklch(100% 0 0);--color-info:oklch(45.201% .313 264.052);--color-info-content:oklch(89.04% .062 264.052);--color-success:oklch(51.975% .176 142.495);--color-success-content:oklch(90.395% .035 142.495);--color-warning:oklch(96.798% .211 109.769);--color-warning-content:oklch(19.359% .042 109.769);--color-error:oklch(62.795% .257 29.233);--color-error-content:oklch(12.559% .051 29.233);--radius-selector:0rem;--radius-field:0rem;--radius-box:0rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=luxury]:checked),[data-theme=luxury]{color-scheme:dark;--color-base-100:oklch(14.076% .004 285.822);--color-base-200:oklch(20.219% .004 308.229);--color-base-300:oklch(23.219% .004 308.229);--color-base-content:oklch(75.687% .123 76.89);--color-primary:oklch(100% 0 0);--color-primary-content:oklch(20% 0 0);--color-secondary:oklch(27.581% .064 261.069);--color-secondary-content:oklch(85.516% .012 261.069);--color-accent:oklch(36.674% .051 338.825);--color-accent-content:oklch(87.334% .01 338.825);--color-neutral:oklch(24.27% .057 59.825);--color-neutral-content:oklch(93.203% .089 90.861);--color-info:oklch(79.061% .121 237.133);--color-info-content:oklch(15.812% .024 237.133);--color-success:oklch(78.119% .192 132.154);--color-success-content:oklch(15.623% .038 132.154);--color-warning:oklch(86.127% .136 102.891);--color-warning-content:oklch(17.225% .027 102.891);--color-error:oklch(71.753% .176 22.568);--color-error-content:oklch(14.35% .035 22.568);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dracula]:checked),[data-theme=dracula]{color-scheme:dark;--color-base-100:oklch(28.822% .022 277.508);--color-base-200:oklch(26.805% .02 277.508);--color-base-300:oklch(24.787% .019 277.508);--color-base-content:oklch(97.747% .007 106.545);--color-primary:oklch(75.461% .183 346.812);--color-primary-content:oklch(15.092% .036 346.812);--color-secondary:oklch(74.202% .148 301.883);--color-secondary-content:oklch(14.84% .029 301.883);--color-accent:oklch(83.392% .124 66.558);--color-accent-content:oklch(16.678% .024 66.558);--color-neutral:oklch(39.445% .032 275.524);--color-neutral-content:oklch(87.889% .006 275.524);--color-info:oklch(88.263% .093 212.846);--color-info-content:oklch(17.652% .018 212.846);--color-success:oklch(87.099% .219 148.024);--color-success-content:oklch(17.419% .043 148.024);--color-warning:oklch(95.533% .134 112.757);--color-warning-content:oklch(19.106% .026 112.757);--color-error:oklch(68.22% .206 24.43);--color-error-content:oklch(13.644% .041 24.43);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=cmyk]:checked),[data-theme=cmyk]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(90% 0 0);--color-base-content:oklch(20% 0 0);--color-primary:oklch(71.772% .133 239.443);--color-primary-content:oklch(14.354% .026 239.443);--color-secondary:oklch(64.476% .202 359.339);--color-secondary-content:oklch(12.895% .04 359.339);--color-accent:oklch(94.228% .189 105.306);--color-accent-content:oklch(18.845% .037 105.306);--color-neutral:oklch(21.778% 0 0);--color-neutral-content:oklch(84.355% 0 0);--color-info:oklch(68.475% .094 217.284);--color-info-content:oklch(13.695% .018 217.284);--color-success:oklch(46.949% .162 321.406);--color-success-content:oklch(89.389% .032 321.406);--color-warning:oklch(71.236% .159 52.023);--color-warning-content:oklch(14.247% .031 52.023);--color-error:oklch(62.013% .208 28.717);--color-error-content:oklch(12.402% .041 28.717);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=autumn]:checked),[data-theme=autumn]{color-scheme:light;--color-base-100:oklch(95.814% 0 0);--color-base-200:oklch(89.107% 0 0);--color-base-300:oklch(82.4% 0 0);--color-base-content:oklch(19.162% 0 0);--color-primary:oklch(40.723% .161 17.53);--color-primary-content:oklch(88.144% .032 17.53);--color-secondary:oklch(61.676% .169 23.865);--color-secondary-content:oklch(12.335% .033 23.865);--color-accent:oklch(73.425% .094 60.729);--color-accent-content:oklch(14.685% .018 60.729);--color-neutral:oklch(54.367% .037 51.902);--color-neutral-content:oklch(90.873% .007 51.902);--color-info:oklch(69.224% .097 207.284);--color-info-content:oklch(13.844% .019 207.284);--color-success:oklch(60.995% .08 174.616);--color-success-content:oklch(12.199% .016 174.616);--color-warning:oklch(70.081% .164 56.844);--color-warning-content:oklch(14.016% .032 56.844);--color-error:oklch(53.07% .241 24.16);--color-error-content:oklch(90.614% .048 24.16);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=business]:checked),[data-theme=business]{color-scheme:dark;--color-base-100:oklch(24.353% 0 0);--color-base-200:oklch(22.648% 0 0);--color-base-300:oklch(20.944% 0 0);--color-base-content:oklch(84.87% 0 0);--color-primary:oklch(41.703% .099 251.473);--color-primary-content:oklch(88.34% .019 251.473);--color-secondary:oklch(64.092% .027 229.389);--color-secondary-content:oklch(12.818% .005 229.389);--color-accent:oklch(67.271% .167 35.791);--color-accent-content:oklch(13.454% .033 35.791);--color-neutral:oklch(27.441% .013 253.041);--color-neutral-content:oklch(85.488% .002 253.041);--color-info:oklch(62.616% .143 240.033);--color-info-content:oklch(12.523% .028 240.033);--color-success:oklch(70.226% .094 156.596);--color-success-content:oklch(14.045% .018 156.596);--color-warning:oklch(77.482% .115 81.519);--color-warning-content:oklch(15.496% .023 81.519);--color-error:oklch(51.61% .146 29.674);--color-error-content:oklch(90.322% .029 29.674);--radius-selector:0rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=acid]:checked),[data-theme=acid]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(95% 0 0);--color-base-300:oklch(91% 0 0);--color-base-content:oklch(0% 0 0);--color-primary:oklch(71.9% .357 330.759);--color-primary-content:oklch(14.38% .071 330.759);--color-secondary:oklch(73.37% .224 48.25);--color-secondary-content:oklch(14.674% .044 48.25);--color-accent:oklch(92.78% .264 122.962);--color-accent-content:oklch(18.556% .052 122.962);--color-neutral:oklch(21.31% .128 278.68);--color-neutral-content:oklch(84.262% .025 278.68);--color-info:oklch(60.72% .227 252.05);--color-info-content:oklch(12.144% .045 252.05);--color-success:oklch(85.72% .266 158.53);--color-success-content:oklch(17.144% .053 158.53);--color-warning:oklch(91.01% .212 100.5);--color-warning-content:oklch(18.202% .042 100.5);--color-error:oklch(64.84% .293 29.349);--color-error-content:oklch(12.968% .058 29.349);--radius-selector:1rem;--radius-field:1rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=lemonade]:checked),[data-theme=lemonade]{color-scheme:light;--color-base-100:oklch(98.71% .02 123.72);--color-base-200:oklch(91.8% .018 123.72);--color-base-300:oklch(84.89% .017 123.72);--color-base-content:oklch(19.742% .004 123.72);--color-primary:oklch(58.92% .199 134.6);--color-primary-content:oklch(11.784% .039 134.6);--color-secondary:oklch(77.75% .196 111.09);--color-secondary-content:oklch(15.55% .039 111.09);--color-accent:oklch(85.39% .201 100.73);--color-accent-content:oklch(17.078% .04 100.73);--color-neutral:oklch(30.98% .075 108.6);--color-neutral-content:oklch(86.196% .015 108.6);--color-info:oklch(86.19% .047 224.14);--color-info-content:oklch(17.238% .009 224.14);--color-success:oklch(86.19% .047 157.85);--color-success-content:oklch(17.238% .009 157.85);--color-warning:oklch(86.19% .047 102.15);--color-warning-content:oklch(17.238% .009 102.15);--color-error:oklch(86.19% .047 25.85);--color-error-content:oklch(17.238% .009 25.85);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=night]:checked),[data-theme=night]{color-scheme:dark;--color-base-100:oklch(20.768% .039 265.754);--color-base-200:oklch(19.314% .037 265.754);--color-base-300:oklch(17.86% .034 265.754);--color-base-content:oklch(84.153% .007 265.754);--color-primary:oklch(75.351% .138 232.661);--color-primary-content:oklch(15.07% .027 232.661);--color-secondary:oklch(68.011% .158 276.934);--color-secondary-content:oklch(13.602% .031 276.934);--color-accent:oklch(72.36% .176 350.048);--color-accent-content:oklch(14.472% .035 350.048);--color-neutral:oklch(27.949% .036 260.03);--color-neutral-content:oklch(85.589% .007 260.03);--color-info:oklch(68.455% .148 237.251);--color-info-content:oklch(0% 0 0);--color-success:oklch(78.452% .132 181.911);--color-success-content:oklch(15.69% .026 181.911);--color-warning:oklch(83.242% .139 82.95);--color-warning-content:oklch(16.648% .027 82.95);--color-error:oklch(71.785% .17 13.118);--color-error-content:oklch(14.357% .034 13.118);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=coffee]:checked),[data-theme=coffee]{color-scheme:dark;--color-base-100:oklch(24% .023 329.708);--color-base-200:oklch(21% .021 329.708);--color-base-300:oklch(16% .019 329.708);--color-base-content:oklch(72.354% .092 79.129);--color-primary:oklch(71.996% .123 62.756);--color-primary-content:oklch(14.399% .024 62.756);--color-secondary:oklch(34.465% .029 199.194);--color-secondary-content:oklch(86.893% .005 199.194);--color-accent:oklch(42.621% .074 224.389);--color-accent-content:oklch(88.524% .014 224.389);--color-neutral:oklch(16.51% .015 326.261);--color-neutral-content:oklch(83.302% .003 326.261);--color-info:oklch(79.49% .063 184.558);--color-info-content:oklch(15.898% .012 184.558);--color-success:oklch(74.722% .072 131.116);--color-success-content:oklch(14.944% .014 131.116);--color-warning:oklch(88.15% .14 87.722);--color-warning-content:oklch(17.63% .028 87.722);--color-error:oklch(77.318% .128 31.871);--color-error-content:oklch(15.463% .025 31.871);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=winter]:checked),[data-theme=winter]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(97.466% .011 259.822);--color-base-300:oklch(93.268% .016 262.751);--color-base-content:oklch(41.886% .053 255.824);--color-primary:oklch(56.86% .255 257.57);--color-primary-content:oklch(91.372% .051 257.57);--color-secondary:oklch(42.551% .161 282.339);--color-secondary-content:oklch(88.51% .032 282.339);--color-accent:oklch(59.939% .191 335.171);--color-accent-content:oklch(11.988% .038 335.171);--color-neutral:oklch(19.616% .063 257.651);--color-neutral-content:oklch(83.923% .012 257.651);--color-info:oklch(88.127% .085 214.515);--color-info-content:oklch(17.625% .017 214.515);--color-success:oklch(80.494% .077 197.823);--color-success-content:oklch(16.098% .015 197.823);--color-warning:oklch(89.172% .045 71.47);--color-warning-content:oklch(17.834% .009 71.47);--color-error:oklch(73.092% .11 20.076);--color-error-content:oklch(14.618% .022 20.076);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=dim]:checked),[data-theme=dim]{color-scheme:dark;--color-base-100:oklch(30.857% .023 264.149);--color-base-200:oklch(28.036% .019 264.182);--color-base-300:oklch(26.346% .018 262.177);--color-base-content:oklch(82.901% .031 222.959);--color-primary:oklch(86.133% .141 139.549);--color-primary-content:oklch(17.226% .028 139.549);--color-secondary:oklch(73.375% .165 35.353);--color-secondary-content:oklch(14.675% .033 35.353);--color-accent:oklch(74.229% .133 311.379);--color-accent-content:oklch(14.845% .026 311.379);--color-neutral:oklch(24.731% .02 264.094);--color-neutral-content:oklch(82.901% .031 222.959);--color-info:oklch(86.078% .142 206.182);--color-info-content:oklch(17.215% .028 206.182);--color-success:oklch(86.171% .142 166.534);--color-success-content:oklch(17.234% .028 166.534);--color-warning:oklch(86.163% .142 94.818);--color-warning-content:oklch(17.232% .028 94.818);--color-error:oklch(82.418% .099 33.756);--color-error-content:oklch(16.483% .019 33.756);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=nord]:checked),[data-theme=nord]{color-scheme:light;--color-base-100:oklch(95.127% .007 260.731);--color-base-200:oklch(93.299% .01 261.788);--color-base-300:oklch(89.925% .016 262.749);--color-base-content:oklch(32.437% .022 264.182);--color-primary:oklch(59.435% .077 254.027);--color-primary-content:oklch(11.887% .015 254.027);--color-secondary:oklch(69.651% .059 248.687);--color-secondary-content:oklch(13.93% .011 248.687);--color-accent:oklch(77.464% .062 217.469);--color-accent-content:oklch(15.492% .012 217.469);--color-neutral:oklch(45.229% .035 264.131);--color-neutral-content:oklch(89.925% .016 262.749);--color-info:oklch(69.207% .062 332.664);--color-info-content:oklch(13.841% .012 332.664);--color-success:oklch(76.827% .074 131.063);--color-success-content:oklch(15.365% .014 131.063);--color-warning:oklch(85.486% .089 84.093);--color-warning-content:oklch(17.097% .017 84.093);--color-error:oklch(60.61% .12 15.341);--color-error-content:oklch(12.122% .024 15.341);--radius-selector:1rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=sunset]:checked),[data-theme=sunset]{color-scheme:dark;--color-base-100:oklch(22% .019 237.69);--color-base-200:oklch(20% .019 237.69);--color-base-300:oklch(18% .019 237.69);--color-base-content:oklch(77.383% .043 245.096);--color-primary:oklch(74.703% .158 39.947);--color-primary-content:oklch(14.94% .031 39.947);--color-secondary:oklch(72.537% .177 2.72);--color-secondary-content:oklch(14.507% .035 2.72);--color-accent:oklch(71.294% .166 299.844);--color-accent-content:oklch(14.258% .033 299.844);--color-neutral:oklch(26% .019 237.69);--color-neutral-content:oklch(70% .019 237.69);--color-info:oklch(85.559% .085 206.015);--color-info-content:oklch(17.111% .017 206.015);--color-success:oklch(85.56% .085 144.778);--color-success-content:oklch(17.112% .017 144.778);--color-warning:oklch(85.569% .084 74.427);--color-warning-content:oklch(17.113% .016 74.427);--color-error:oklch(85.511% .078 16.886);--color-error-content:oklch(17.102% .015 16.886);--radius-selector:1rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:0;--noise:0}#pulsekit-embed:has(input.theme-controller[value=caramellatte]:checked),[data-theme=caramellatte]{color-scheme:light;--color-base-100:oklch(98% .016 73.684);--color-base-200:oklch(95% .038 75.164);--color-base-300:oklch(90% .076 70.697);--color-base-content:oklch(40% .123 38.172);--color-primary:oklch(0% 0 0);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(22.45% .075 37.85);--color-secondary-content:oklch(90% .076 70.697);--color-accent:oklch(46.44% .111 37.85);--color-accent-content:oklch(90% .076 70.697);--color-neutral:oklch(55% .195 38.402);--color-neutral-content:oklch(98% .016 73.684);--color-info:oklch(42% .199 265.638);--color-info-content:oklch(90% .076 70.697);--color-success:oklch(43% .095 166.913);--color-success-content:oklch(90% .076 70.697);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(70% .191 22.216);--color-error-content:oklch(39% .141 25.723);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:1}#pulsekit-embed:has(input.theme-controller[value=abyss]:checked),[data-theme=abyss]{color-scheme:dark;--color-base-100:oklch(20% .08 209);--color-base-200:oklch(15% .08 209);--color-base-300:oklch(10% .08 209);--color-base-content:oklch(90% .076 70.697);--color-primary:oklch(92% .2653 125);--color-primary-content:oklch(50% .2653 125);--color-secondary:oklch(83.27% .0764 298.3);--color-secondary-content:oklch(43.27% .0764 298.3);--color-accent:oklch(43% 0 0);--color-accent-content:oklch(98% 0 0);--color-neutral:oklch(30% .08 209);--color-neutral-content:oklch(90% .076 70.697);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(79% .209 151.711);--color-success-content:oklch(26% .065 152.934);--color-warning:oklch(84.8% .1962 84.62);--color-warning-content:oklch(44.8% .1962 84.62);--color-error:oklch(65% .1985 24.22);--color-error-content:oklch(27% .1985 24.22);--radius-selector:2rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#pulsekit-embed:has(input.theme-controller[value=silk]:checked),[data-theme=silk]{color-scheme:light;--color-base-100:oklch(97% .0035 67.78);--color-base-200:oklch(95% .0081 61.42);--color-base-300:oklch(90% .0081 61.42);--color-base-content:oklch(40% .0081 61.42);--color-primary:oklch(23.27% .0249 284.3);--color-primary-content:oklch(94.22% .2505 117.44);--color-secondary:oklch(23.27% .0249 284.3);--color-secondary-content:oklch(73.92% .2135 50.94);--color-accent:oklch(23.27% .0249 284.3);--color-accent-content:oklch(88.92% .2061 189.9);--color-neutral:oklch(20% 0 0);--color-neutral-content:oklch(80% .0081 61.42);--color-info:oklch(80.39% .1148 241.68);--color-info-content:oklch(30.39% .1148 241.68);--color-success:oklch(83.92% .0901 136.87);--color-success-content:oklch(23.92% .0901 136.87);--color-warning:oklch(83.92% .1085 80);--color-warning-content:oklch(43.92% .1085 80);--color-error:oklch(75.1% .1814 22.37);--color-error-content:oklch(35.1% .1814 22.37);--radius-selector:2rem;--radius-field:.5rem;--radius-box:1rem;--size-selector:.25rem;--size-field:.25rem;--border:2px;--depth:1;--noise:0}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}.chat{--mask-chat:url("data:image/svg+xml,%3csvg width='13' height='13' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill='black' d='M0 11.5004C0 13.0004 2 13.0004 2 13.0004H12H13V0.00036329L12.5 0C12.5 0 11.977 2.09572 11.8581 2.50033C11.6075 3.35237 10.9149 4.22374 9 5.50036C6 7.50036 0 10.0004 0 11.5004Z'/%3e%3c/svg%3e")}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:calc(var(--size-field,.25rem)*10);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:100%;display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.loading{pointer-events:none;aspect-ratio:1;vertical-align:middle;width:calc(var(--size-selector,.25rem)*6);background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:50%;mask-position:50%;-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.list{flex-direction:column;font-size:.875rem;display:flex}.list :where(.list-row){--list-grid-cols:minmax(0,auto)1fr;border-radius:var(--radius-box);word-break:break-word;grid-auto-flow:column;grid-template-columns:var(--list-grid-cols);gap:1rem;padding:1rem;display:grid;position:relative}.list :where(.list-row):has(.list-col-grow:first-child){--list-grid-cols:1fr}.list :where(.list-row):has(.list-col-grow:nth-child(2)){--list-grid-cols:minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(3)){--list-grid-cols:minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(4)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(5)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row):has(.list-col-grow:nth-child(6)){--list-grid-cols:minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)minmax(0,auto)1fr}.list :where(.list-row) :not(.list-col-wrap){grid-row-start:1}:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{content:"";border-bottom:var(--border)solid;inset-inline:var(--radius-box);border-color:var(--color-base-content);position:absolute;bottom:0}@supports (color:color-mix(in lab,red,red)){:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{border-color:color-mix(in oklab,var(--color-base-content)5%,transparent)}}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.card{border-radius:var(--radius-box);outline-offset:2px;outline:0 solid #0000;flex-direction:column;transition:outline .2s ease-in-out;display:flex;position:relative}.card:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.card:focus{outline-offset:2px;outline:2px solid #0000}}.card:focus-visible{outline-color:currentColor}.card :where(figure:first-child){border-start-start-radius:inherit;border-start-end-radius:inherit;border-end-end-radius:unset;border-end-start-radius:unset;overflow:hidden}.card :where(figure:last-child){border-start-start-radius:unset;border-start-end-radius:unset;border-end-end-radius:inherit;border-end-start-radius:inherit;overflow:hidden}.card:where(.card-border){border:var(--border)solid var(--color-base-200)}.card:where(.card-dash){border:var(--border)dashed var(--color-base-200)}.card.image-full{display:grid}.card.image-full>*{grid-row-start:1;grid-column-start:1}.card.image-full>.card-body{color:var(--color-neutral-content);position:relative}.card.image-full :where(figure){border-radius:inherit;overflow:hidden}.card.image-full>figure img{object-fit:cover;filter:brightness(28%);height:100%}.card figure{justify-content:center;align-items:center;display:flex}.card:has(>input:is(input[type=checkbox],input[type=radio])){cursor:pointer;-webkit-user-select:none;user-select:none}.card:has(>:checked){outline:2px solid}.avatar{vertical-align:middle;display:inline-flex;position:relative}.avatar>div{aspect-ratio:1;display:block;overflow:hidden}.avatar img{object-fit:cover;width:100%;height:100%}.progress{appearance:none;border-radius:var(--radius-box);background-color:currentColor;width:100%;height:.5rem;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.progress{background-color:color-mix(in oklab,currentColor 20%,transparent)}}.progress{color:var(--color-base-content)}.progress:indeterminate{background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}@supports ((-moz-appearance:none)){.progress:indeterminate::-moz-progress-bar{background-color:#0000;background-image:repeating-linear-gradient(90deg,currentColor -1% 10%,#0000 10% 90%);background-position-x:15%;background-size:200%;animation:5s ease-in-out infinite progress}.progress::-moz-progress-bar{border-radius:var(--radius-box);background-color:currentColor}}@supports ((-webkit-appearance:none)){.progress::-webkit-progress-bar{border-radius:var(--radius-box);background-color:#0000}.progress::-webkit-progress-value{border-radius:var(--radius-box);background-color:currentColor}}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.textarea{border:var(--border)solid #0000;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;border-color:var(--input-color);width:clamp(3rem,20rem,100%);min-height:5rem;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem;font-size:.875rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.mx-auto{margin-inline:auto}.input-sm{--size:calc(var(--size-field,.25rem)*8);font-size:.75rem}.input-sm[type=number]::-webkit-inner-spin-button{margin-block:-.5rem;margin-inline-end:-.75rem}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-8{margin-top:calc(var(--spacing)*8)}.mr-1{margin-right:calc(var(--spacing)*1)}.fieldset-legend{color:var(--color-base-content);justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:-.25rem;padding-block:.5rem;font-weight:600;display:flex}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:#0000004d}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.badge{border-radius:var(--radius-selector);vertical-align:middle;color:var(--badge-fg);border:var(--border)solid var(--badge-color,var(--color-base-200));width:fit-content;padding-inline:calc(.25rem*3 - var(--border));background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);background-color:var(--badge-bg);--badge-bg:var(--badge-color,var(--color-base-100));--badge-fg:var(--color-base-content);--size:calc(var(--size-selector,.25rem)*6);height:var(--size);justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;display:inline-flex}.badge.badge-outline{--badge-fg:var(--badge-color);--badge-bg:#0000;background-image:none;border-color:currentColor}.badge.badge-dash{--badge-fg:var(--badge-color);--badge-bg:#0000;background-image:none;border-style:dashed;border-color:currentColor}.badge.badge-soft{color:var(--badge-color,var(--color-base-content));background-color:var(--badge-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.badge.badge-soft{background-color:color-mix(in oklab,var(--badge-color,var(--color-base-content))8%,var(--color-base-100))}}.badge.badge-soft{border-color:var(--badge-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.badge.badge-soft{border-color:color-mix(in oklab,var(--badge-color,var(--color-base-content))10%,var(--color-base-100))}}.badge.badge-soft{background-image:none}.card-body{padding:var(--card-p,1.5rem);font-size:var(--card-fs,.875rem);flex-direction:column;flex:auto;gap:.5rem;display:flex}.card-body :where(p){flex-grow:1}.fieldset{grid-template-columns:1fr;grid-auto-rows:max-content;gap:.375rem;padding-block:.25rem;font-size:.75rem;display:grid}.card-actions{flex-wrap:wrap;align-items:flex-start;gap:.5rem;display:flex}.card-title{font-size:var(--cardtitle-fs,1.125rem);align-items:center;gap:.5rem;font-weight:600;display:flex}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-block{display:inline-block}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.h-3{height:calc(var(--spacing)*3)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-full{height:100%}.h-screen{height:100vh}.max-h-96{max-height:calc(var(--spacing)*96)}.min-h-96{min-height:calc(var(--spacing)*96)}.loading-lg{width:calc(var(--size-selector,.25rem)*7)}.loading-md{width:calc(var(--size-selector,.25rem)*6)}.loading-xs{width:calc(var(--size-selector,.25rem)*4)}.w-3{width:calc(var(--spacing)*3)}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-fit{width:fit-content}.w-full{width:100%}.w-screen{width:100vw}.max-w-5xl{max-width:var(--container-5xl)}.max-w-md{max-width:var(--container-md)}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.self-end{align-self:flex-end}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-base-300{border-color:var(--color-base-300)}.border-blue-200{border-color:var(--color-blue-200)}.border-error\\/20{border-color:var(--color-error)}@supports (color:color-mix(in lab,red,red)){.border-error\\/20{border-color:color-mix(in oklab,var(--color-error)20%,transparent)}}.border-gray-200{border-color:var(--color-gray-200)}.border-green-200{border-color:var(--color-green-200)}.border-red-200{border-color:var(--color-red-200)}.border-yellow-200{border-color:var(--color-yellow-200)}.bg-base-100,.bg-base-100\\/80{background-color:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){.bg-base-100\\/80{background-color:color-mix(in oklab,var(--color-base-100)80%,transparent)}}.bg-base-200,.bg-base-200\\/80{background-color:var(--color-base-200)}@supports (color:color-mix(in lab,red,red)){.bg-base-200\\/80{background-color:color-mix(in oklab,var(--color-base-200)80%,transparent)}}.bg-base-300{background-color:var(--color-base-300)}.bg-blue-50{background-color:var(--color-blue-50)}.bg-error\\/10{background-color:var(--color-error)}@supports (color:color-mix(in lab,red,red)){.bg-error\\/10{background-color:color-mix(in oklab,var(--color-error)10%,transparent)}}.bg-gray-50{background-color:var(--color-gray-50)}.bg-green-50{background-color:var(--color-green-50)}.bg-primary\\/10{background-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/10{background-color:color-mix(in oklab,var(--color-primary)10%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-sky-100{background-color:var(--color-sky-100)}.bg-transparent{background-color:#0000}.bg-yellow-50{background-color:var(--color-yellow-50)}.loading-spinner{-webkit-mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform-origin='center'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' stroke-linecap='round'%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 12 12' to='360 12 12' dur='2s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dasharray' values='0,150;42,150;42,150' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3Canimate attributeName='stroke-dashoffset' values='0;-16;-59' keyTimes='0;0.475;1' dur='1.5s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")}.object-cover{object-fit:cover}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.badge-sm{--size:calc(var(--size-selector,.25rem)*5);padding-inline:calc(.25rem*2.5 - var(--border));font-size:.75rem}.badge-xs{--size:calc(var(--size-selector,.25rem)*4);padding-inline:calc(.25rem*2 - var(--border));font-size:.625rem}.py-2{padding-block:calc(var(--spacing)*2)}.py-8{padding-block:calc(var(--spacing)*8)}.py-12{padding-block:calc(var(--spacing)*12)}.pt-4{padding-top:calc(var(--spacing)*4)}.pt-6{padding-top:calc(var(--spacing)*6)}.pb-1{padding-bottom:calc(var(--spacing)*1)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.select-sm{--size:calc(var(--size-field,.25rem)*8);font-size:.75rem}.textarea-sm{font-size:.75rem}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.whitespace-pre-wrap{white-space:pre-wrap}.text-base-content,.text-base-content\\/50{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/50{color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.text-base-content\\/60{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/60{color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.text-base-content\\/70{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/70{color:color-mix(in oklab,var(--color-base-content)70%,transparent)}}.text-blue-700{color:var(--color-blue-700)}.text-error{color:var(--color-error)}.text-gray-700{color:var(--color-gray-700)}.text-green-700{color:var(--color-green-700)}.text-primary,.text-primary\\/40{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/40{color:color-mix(in oklab,var(--color-primary)40%,transparent)}}.text-primary\\/50{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/50{color:color-mix(in oklab,var(--color-primary)50%,transparent)}}.text-primary\\/60{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/60{color:color-mix(in oklab,var(--color-primary)60%,transparent)}}.text-primary\\/70{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.text-primary\\/70{color:color-mix(in oklab,var(--color-primary)70%,transparent)}}.text-red-700{color:var(--color-red-700)}.text-yellow-700{color:var(--color-yellow-700)}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-90{opacity:.9}.shadow,.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-200{--tw-duration:.2s;transition-duration:.2s}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.badge-error{--badge-color:var(--color-error);--badge-fg:var(--color-error-content)}.badge-info{--badge-color:var(--color-info);--badge-fg:var(--color-info-content)}.badge-neutral{--badge-color:var(--color-neutral);--badge-fg:var(--color-neutral-content)}.badge-success{--badge-color:var(--color-success);--badge-fg:var(--color-success-content)}.badge-warning{--badge-color:var(--color-warning);--badge-fg:var(--color-warning-content)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}@media (hover:hover){.group-hover\\:text-primary:is(:where(.group):hover *){color:var(--color-primary)}.hover\\:border-primary\\/20:hover{border-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:border-primary\\/20:hover{border-color:color-mix(in oklab,var(--color-primary)20%,transparent)}}.hover\\:bg-base-300:hover{background-color:var(--color-base-300)}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.hover\\:btn-primary:hover{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}}@container (min-width:28rem){.\\@md\\:mt-8{margin-top:calc(var(--spacing)*8)}.\\@md\\:mt-12{margin-top:calc(var(--spacing)*12)}.\\@md\\:mb-4{margin-bottom:calc(var(--spacing)*4)}.\\@md\\:mb-8{margin-bottom:calc(var(--spacing)*8)}.\\@md\\:inline{display:inline}:where(.\\@md\\:space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.\\@md\\:p-4{padding:calc(var(--spacing)*4)}.\\@md\\:p-6{padding:calc(var(--spacing)*6)}.\\@md\\:py-4{padding-block:calc(var(--spacing)*4)}.\\@md\\:py-12{padding-block:calc(var(--spacing)*12)}.\\@md\\:py-16{padding-block:calc(var(--spacing)*16)}.\\@md\\:pt-6{padding-top:calc(var(--spacing)*6)}.\\@md\\:pt-8{padding-top:calc(var(--spacing)*8)}.\\@md\\:text-5xl{font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.\\@md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@md\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\@md\\:btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}}@container (min-width:32rem){.\\@lg\\:sticky{position:sticky}.\\@lg\\:top-0{top:calc(var(--spacing)*0)}.\\@lg\\:w-80{width:calc(var(--spacing)*80)}.\\@lg\\:flex-shrink-0{flex-shrink:0}.\\@lg\\:flex-row{flex-direction:row}.\\@lg\\:gap-6{gap:calc(var(--spacing)*6)}}@container (min-width:42rem){.\\@2xl\\:grid{display:grid}.\\@2xl\\:hidden{display:none}.\\@2xl\\:break-inside-avoid{break-inside:avoid}.\\@2xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@2xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\@2xl\\:gap-4{gap:calc(var(--spacing)*4)}:where(.\\@2xl\\:space-y-0>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*0)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*0)*calc(1 - var(--tw-space-y-reverse)))}}}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.max-h-96::-webkit-scrollbar{width:4px}.max-h-96::-webkit-scrollbar-track{background:0 0}.max-h-96::-webkit-scrollbar-thumb{background:#0000001a;border-radius:2px}.max-h-96::-webkit-scrollbar-thumb:hover{background:#0003}@keyframes dropdown{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-duration{syntax:"*";inherits:false}`, mp = /* @__PURE__ */ ui(pp, [["styles", [fp]]]), hi = /* @__PURE__ */ ri(fh), pi = /* @__PURE__ */ ri(mp);
customElements.define("pulsekit-board", hi);
customElements.define("pulsekit-kanban", pi);
window.PulseKit = {
  // Components
  Board: hi,
  Kanban: pi
};
