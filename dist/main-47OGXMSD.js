// esm:https://esm.sh/*@vue/shared@3.5.30/esnext/shared.mjs
function l(e) {
  let t2 = /* @__PURE__ */ Object.create(null);
  for (let n2 of e.split(",")) t2[n2] = 1;
  return (n2) => n2 in t2;
}
var ie = {};
var se = [];
var ae = () => {
};
var ce = () => false;
var le = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
var pe = (e) => e.startsWith("onUpdate:");
var fe = Object.assign;
var de = (e, t2) => {
  let n2 = e.indexOf(t2);
  n2 > -1 && e.splice(n2, 1);
};
var P = Object.prototype.hasOwnProperty;
var me = (e, t2) => P.call(e, t2);
var d = Array.isArray;
var F = (e) => m(e) === "[object Map]";
var I = (e) => m(e) === "[object Set]";
var O = (e) => m(e) === "[object Date]";
var g = (e) => typeof e == "function";
var p = (e) => typeof e == "string";
var y = (e) => typeof e == "symbol";
var f = (e) => e !== null && typeof e == "object";
var he = (e) => (f(e) || g(e)) && g(e.then) && g(e.catch);
var C = Object.prototype.toString;
var m = (e) => C.call(e);
var ge = (e) => m(e).slice(8, -1);
var U = (e) => m(e) === "[object Object]";
var ye = (e) => p(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
var Ee = l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var be = l("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
var E = (e) => {
  let t2 = /* @__PURE__ */ Object.create(null);
  return (n2) => t2[n2] || (t2[n2] = e(n2));
};
var z = /-\w/g;
var Te = E((e) => e.replace(z, (t2) => t2.slice(1).toUpperCase()));
var j = /\B([A-Z])/g;
var V = E((e) => e.replace(j, "-$1").toLowerCase());
var H = E((e) => e.charAt(0).toUpperCase() + e.slice(1));
var Se = E((e) => e ? `on${H(e)}` : "");
var Ae = (e, t2) => !Object.is(e, t2);
var Ne = (e, ...t2) => {
  for (let n2 = 0; n2 < e.length; n2++) e[n2](...t2);
};
var Oe = (e, t2, n2, r2 = false) => {
  Object.defineProperty(e, t2, { configurable: true, enumerable: false, writable: r2, value: n2 });
};
var xe = (e) => {
  let t2 = parseFloat(e);
  return isNaN(t2) ? e : t2;
};
var ke = (e) => {
  let t2 = p(e) ? Number(e) : NaN;
  return isNaN(t2) ? e : t2;
};
var x;
var Ce = () => x || (x = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {});
var G = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
var Y = l(G);
function _(e) {
  if (d(e)) {
    let t2 = {};
    for (let n2 = 0; n2 < e.length; n2++) {
      let r2 = e[n2], i = p(r2) ? $(r2) : _(r2);
      if (i) for (let o in i) t2[o] = i[o];
    }
    return t2;
  } else if (p(e) || f(e)) return e;
}
var K = /;(?![^(]*\))/g;
var q = /:([^]+)/;
var v = /\/\*[^]*?\*\//g;
function $(e) {
  let t2 = {};
  return e.replace(v, "").split(K).forEach((n2) => {
    if (n2) {
      let r2 = n2.split(q);
      r2.length > 1 && (t2[r2[0].trim()] = r2[1].trim());
    }
  }), t2;
}
function R(e) {
  let t2 = "";
  if (p(e)) t2 = e;
  else if (d(e)) for (let n2 = 0; n2 < e.length; n2++) {
    let r2 = R(e[n2]);
    r2 && (t2 += r2 + " ");
  }
  else if (f(e)) for (let n2 in e) e[n2] && (t2 += n2 + " ");
  return t2.trim();
}
var W = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var X = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var J = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
var Z = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
var je = l(W);
var Ve = l(X);
var He = l(J);
var Be = l(Z);
var L = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var Ge = l(L);
var Ye = l(L + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Ke(e) {
  return !!e || e === "";
}
var $e = l("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap");
var We = l("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
var Xe = l("accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns");
function re(e, t2) {
  if (e.length !== t2.length) return false;
  let n2 = true;
  for (let r2 = 0; n2 && r2 < e.length; r2++) n2 = S(e[r2], t2[r2]);
  return n2;
}
function S(e, t2) {
  if (e === t2) return true;
  let n2 = O(e), r2 = O(t2);
  if (n2 || r2) return n2 && r2 ? e.getTime() === t2.getTime() : false;
  if (n2 = y(e), r2 = y(t2), n2 || r2) return e === t2;
  if (n2 = d(e), r2 = d(t2), n2 || r2) return n2 && r2 ? re(e, t2) : false;
  if (n2 = f(e), r2 = f(t2), n2 || r2) {
    if (!n2 || !r2) return false;
    let i = Object.keys(e).length, o = Object.keys(t2).length;
    if (i !== o) return false;
    for (let a2 in e) {
      let c3 = e.hasOwnProperty(a2), s = t2.hasOwnProperty(a2);
      if (c3 && !s || !c3 && s || !S(e[a2], t2[a2])) return false;
    }
  }
  return String(e) === String(t2);
}

// esm:https://esm.sh/*@vue/reactivity@3.5.30/esnext/reactivity.mjs
function ct(e, ...t2) {
  console.warn(`[Vue warn] ${e}`, ...t2);
}
var v2;
var ge2 = class {
  constructor(t2 = false) {
    this.detached = t2, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = v2, !t2 && v2 && (this.index = (v2.scopes || (v2.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let t2, s;
      if (this.scopes) for (t2 = 0, s = this.scopes.length; t2 < s; t2++) this.scopes[t2].pause();
      for (t2 = 0, s = this.effects.length; t2 < s; t2++) this.effects[t2].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = false;
      let t2, s;
      if (this.scopes) for (t2 = 0, s = this.scopes.length; t2 < s; t2++) this.scopes[t2].resume();
      for (t2 = 0, s = this.effects.length; t2 < s; t2++) this.effects[t2].resume();
    }
  }
  run(t2) {
    if (this._active) {
      let s = v2;
      try {
        return v2 = this, t2();
      } finally {
        v2 = s;
      }
    }
  }
  on() {
    ++this._on === 1 && (this.prevScope = v2, v2 = this);
  }
  off() {
    this._on > 0 && --this._on === 0 && (v2 = this.prevScope, this.prevScope = void 0);
  }
  stop(t2) {
    if (this._active) {
      this._active = false;
      let s, n2;
      for (s = 0, n2 = this.effects.length; s < n2; s++) this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n2 = this.cleanups.length; s < n2; s++) this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n2 = this.scopes.length; s < n2; s++) this.scopes[s].stop(true);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t2) {
        let i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
};
function ft() {
  return v2;
}
var h;
var de2 = /* @__PURE__ */ new WeakSet();
var W2 = class {
  constructor(t2) {
    this.fn = t2, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, v2 && v2.active && v2.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, de2.has(this) && (de2.delete(this), this.trigger()));
  }
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ke2(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    this.flags |= 2, Pe(this), ke2(this);
    let t2 = h, s = E2;
    h = this, E2 = true;
    try {
      return this.fn();
    } finally {
      He2(this), h = t2, E2 = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t2 = this.deps; t2; t2 = t2.nextDep) Ie(t2);
      this.deps = this.depsTail = void 0, Pe(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? de2.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  runIfDirty() {
    we(this) && this.run();
  }
  get dirty() {
    return we(this);
  }
};
var We2 = 0;
var $2;
var F2;
function Ke2(e, t2 = false) {
  if (e.flags |= 8, t2) {
    e.next = F2, F2 = e;
    return;
  }
  e.next = $2, $2 = e;
}
function Ae2() {
  We2++;
}
function Ve2() {
  if (--We2 > 0) return;
  if (F2) {
    let t2 = F2;
    for (F2 = void 0; t2; ) {
      let s = t2.next;
      t2.next = void 0, t2.flags &= -9, t2 = s;
    }
  }
  let e;
  for (; $2; ) {
    let t2 = $2;
    for ($2 = void 0; t2; ) {
      let s = t2.next;
      if (t2.next = void 0, t2.flags &= -9, t2.flags & 1) try {
        t2.trigger();
      } catch (n2) {
        e || (e = n2);
      }
      t2 = s;
    }
  }
  if (e) throw e;
}
function ke2(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep) t2.version = -1, t2.prevActiveLink = t2.dep.activeLink, t2.dep.activeLink = t2;
}
function He2(e) {
  let t2, s = e.depsTail, n2 = s;
  for (; n2; ) {
    let i = n2.prevDep;
    n2.version === -1 ? (n2 === s && (s = i), Ie(n2), lt(n2)) : t2 = n2, n2.dep.activeLink = n2.prevActiveLink, n2.prevActiveLink = void 0, n2 = i;
  }
  e.deps = t2, e.depsTail = s;
}
function we(e) {
  for (let t2 = e.deps; t2; t2 = t2.nextDep) if (t2.dep.version !== t2.version || t2.dep.computed && (je2(t2.dep.computed) || t2.dep.version !== t2.version)) return true;
  return !!e._dirty;
}
function je2(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Y2) || (e.globalVersion = Y2, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !we(e)))) return;
  e.flags |= 2;
  let t2 = e.dep, s = h, n2 = E2;
  h = e, E2 = true;
  try {
    ke2(e);
    let i = e.fn(e._value);
    (t2.version === 0 || Ae(i, e._value)) && (e.flags |= 128, e._value = i, t2.version++);
  } catch (i) {
    throw t2.version++, i;
  } finally {
    h = s, E2 = n2, He2(e), e.flags &= -3;
  }
}
function Ie(e, t2 = false) {
  let { dep: s, prevSub: n2, nextSub: i } = e;
  if (n2 && (n2.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n2, e.nextSub = void 0), s.subs === e && (s.subs = n2, !n2 && s.computed)) {
    s.computed.flags &= -5;
    for (let r2 = s.computed.deps; r2; r2 = r2.nextDep) Ie(r2, true);
  }
  !t2 && !--s.sc && s.map && s.map.delete(s.key);
}
function lt(e) {
  let { prevDep: t2, nextDep: s } = e;
  t2 && (t2.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t2, e.nextDep = void 0);
}
var E2 = true;
var me2 = [];
function Ue() {
  me2.push(E2), E2 = false;
}
function $e2() {
  let e = me2.pop();
  E2 = e === void 0 ? true : e;
}
function Pe(e) {
  let { cleanup: t2 } = e;
  if (e.cleanup = void 0, t2) {
    let s = h;
    h = void 0;
    try {
      t2();
    } finally {
      h = s;
    }
  }
}
var Y2 = 0;
var Ee2 = class {
  constructor(t2, s) {
    this.sub = t2, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var K2 = class {
  constructor(t2) {
    this.computed = t2, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
  }
  track(t2) {
    if (!h || !E2 || h === this.computed) return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== h) s = this.activeLink = new Ee2(h, this), h.deps ? (s.prevDep = h.depsTail, h.depsTail.nextDep = s, h.depsTail = s) : h.deps = h.depsTail = s, Fe(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      let n2 = s.nextDep;
      n2.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n2), s.prevDep = h.depsTail, s.nextDep = void 0, h.depsTail.nextDep = s, h.depsTail = s, h.deps === s && (h.deps = n2);
    }
    return s;
  }
  trigger(t2) {
    this.version++, Y2++, this.notify(t2);
  }
  notify(t2) {
    Ae2();
    try {
      for (let s = this.subs; s; s = s.prevSub) s.sub.notify() && s.sub.dep.notify();
    } finally {
      Ve2();
    }
  }
};
function Fe(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    let t2 = e.dep.computed;
    if (t2 && !e.dep.subs) {
      t2.flags |= 20;
      for (let n2 = t2.deps; n2; n2 = n2.nextDep) Fe(n2);
    }
    let s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
var ne = /* @__PURE__ */ new WeakMap();
var m2 = Symbol("");
var ye2 = Symbol("");
var z2 = Symbol("");
function w(e, t2, s) {
  if (E2 && h) {
    let n2 = ne.get(e);
    n2 || ne.set(e, n2 = /* @__PURE__ */ new Map());
    let i = n2.get(s);
    i || (n2.set(s, i = new K2()), i.map = n2, i.key = s), i.track();
  }
}
function x2(e, t2, s, n2, i, r2) {
  let o = ne.get(e);
  if (!o) {
    Y2++;
    return;
  }
  let a2 = (c3) => {
    c3 && c3.trigger();
  };
  if (Ae2(), t2 === "clear") o.forEach(a2);
  else {
    let c3 = d(e), l3 = c3 && ye(s);
    if (c3 && s === "length") {
      let d4 = Number(n2);
      o.forEach((f3, _5) => {
        (_5 === "length" || _5 === z2 || !y(_5) && _5 >= d4) && a2(f3);
      });
    } else switch ((s !== void 0 || o.has(void 0)) && a2(o.get(s)), l3 && a2(o.get(z2)), t2) {
      case "add":
        c3 ? l3 && a2(o.get("length")) : (a2(o.get(m2)), F(e) && a2(o.get(ye2)));
        break;
      case "delete":
        c3 || (a2(o.get(m2)), F(e) && a2(o.get(ye2)));
        break;
      case "set":
        F(e) && a2(o.get(m2));
        break;
    }
  }
  Ve2();
}
function P2(e) {
  let t2 = p2(e);
  return t2 === e ? t2 : (w(t2, "iterate", z2), y2(e) ? t2 : t2.map(D));
}
function Ce2(e) {
  return w(e = p2(e), "iterate", z2), e;
}
function b(e, t2) {
  return V2(e) ? B(M(e) ? D(t2) : t2) : D(t2);
}
var ht = { __proto__: null, [Symbol.iterator]() {
  return _e(this, Symbol.iterator, (e) => b(this, e));
}, concat(...e) {
  return P2(this).concat(...e.map((t2) => d(t2) ? P2(t2) : t2));
}, entries() {
  return _e(this, "entries", (e) => (e[1] = b(this, e[1]), e));
}, every(e, t2) {
  return T(this, "every", e, t2, void 0, arguments);
}, filter(e, t2) {
  return T(this, "filter", e, t2, (s) => s.map((n2) => b(this, n2)), arguments);
}, find(e, t2) {
  return T(this, "find", e, t2, (s) => b(this, s), arguments);
}, findIndex(e, t2) {
  return T(this, "findIndex", e, t2, void 0, arguments);
}, findLast(e, t2) {
  return T(this, "findLast", e, t2, (s) => b(this, s), arguments);
}, findLastIndex(e, t2) {
  return T(this, "findLastIndex", e, t2, void 0, arguments);
}, forEach(e, t2) {
  return T(this, "forEach", e, t2, void 0, arguments);
}, includes(...e) {
  return ve(this, "includes", e);
}, indexOf(...e) {
  return ve(this, "indexOf", e);
}, join(e) {
  return P2(this).join(e);
}, lastIndexOf(...e) {
  return ve(this, "lastIndexOf", e);
}, map(e, t2) {
  return T(this, "map", e, t2, void 0, arguments);
}, pop() {
  return j2(this, "pop");
}, push(...e) {
  return j2(this, "push", e);
}, reduce(e, ...t2) {
  return Me(this, "reduce", e, t2);
}, reduceRight(e, ...t2) {
  return Me(this, "reduceRight", e, t2);
}, shift() {
  return j2(this, "shift");
}, some(e, t2) {
  return T(this, "some", e, t2, void 0, arguments);
}, splice(...e) {
  return j2(this, "splice", e);
}, toReversed() {
  return P2(this).toReversed();
}, toSorted(e) {
  return P2(this).toSorted(e);
}, toSpliced(...e) {
  return P2(this).toSpliced(...e);
}, unshift(...e) {
  return j2(this, "unshift", e);
}, values() {
  return _e(this, "values", (e) => b(this, e));
} };
function _e(e, t2, s) {
  let n2 = Ce2(e), i = n2[t2]();
  return n2 !== e && !y2(e) && (i._next = i.next, i.next = () => {
    let r2 = i._next();
    return r2.done || (r2.value = s(r2.value)), r2;
  }), i;
}
var pt = Array.prototype;
function T(e, t2, s, n2, i, r2) {
  let o = Ce2(e), a2 = o !== e && !y2(e), c3 = o[t2];
  if (c3 !== pt[t2]) {
    let f3 = c3.apply(e, r2);
    return a2 ? D(f3) : f3;
  }
  let l3 = s;
  o !== e && (a2 ? l3 = function(f3, _5) {
    return s.call(this, b(e, f3), _5, e);
  } : s.length > 2 && (l3 = function(f3, _5) {
    return s.call(this, f3, _5, e);
  }));
  let d4 = c3.call(o, l3, n2);
  return a2 && i ? i(d4) : d4;
}
function Me(e, t2, s, n2) {
  let i = Ce2(e), r2 = i !== e && !y2(e), o = s, a2 = false;
  i !== e && (r2 ? (a2 = n2.length === 0, o = function(l3, d4, f3) {
    return a2 && (a2 = false, l3 = b(e, l3)), s.call(this, l3, b(e, d4), f3, e);
  }) : s.length > 3 && (o = function(l3, d4, f3) {
    return s.call(this, l3, d4, f3, e);
  }));
  let c3 = i[t2](o, ...n2);
  return a2 ? b(e, c3) : c3;
}
function ve(e, t2, s) {
  let n2 = p2(e);
  w(n2, "iterate", z2);
  let i = n2[t2](...s);
  return (i === -1 || i === false) && qe(s[0]) ? (s[0] = p2(s[0]), n2[t2](...s)) : i;
}
function j2(e, t2, s = []) {
  Ue(), Ae2();
  let n2 = p2(e)[t2].apply(e, s);
  return Ve2(), $e2(), n2;
}
var dt = l("__proto__,__v_isRef,__isVue");
var Ge2 = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function _t(e) {
  y(e) || (e = String(e));
  let t2 = p2(this);
  return w(t2, "has", e), t2.hasOwnProperty(e);
}
var re2 = class {
  constructor(t2 = false, s = false) {
    this._isReadonly = t2, this._isShallow = s;
  }
  get(t2, s, n2) {
    if (s === "__v_skip") return t2.__v_skip;
    let i = this._isReadonly, r2 = this._isShallow;
    if (s === "__v_isReactive") return !i;
    if (s === "__v_isReadonly") return i;
    if (s === "__v_isShallow") return r2;
    if (s === "__v_raw") return n2 === (i ? r2 ? Je : Be2 : r2 ? ze : Ye2).get(t2) || Object.getPrototypeOf(t2) === Object.getPrototypeOf(n2) ? t2 : void 0;
    let o = d(t2);
    if (!i) {
      let c3;
      if (o && (c3 = ht[s])) return c3;
      if (s === "hasOwnProperty") return _t;
    }
    let a2 = Reflect.get(t2, s, g2(t2) ? t2 : n2);
    if ((y(s) ? Ge2.has(s) : dt(s)) || (i || w(t2, "get", s), r2)) return a2;
    if (g2(a2)) {
      let c3 = o && ye(s) ? a2 : a2.value;
      return i && f(c3) ? be2(c3) : c3;
    }
    return f(a2) ? i ? be2(a2) : Qe(a2) : a2;
  }
};
var oe = class extends re2 {
  constructor(t2 = false) {
    super(false, t2);
  }
  set(t2, s, n2, i) {
    let r2 = t2[s], o = d(t2) && ye(s);
    if (!this._isShallow) {
      let l3 = V2(r2);
      if (!y2(n2) && !V2(n2) && (r2 = p2(r2), n2 = p2(n2)), !o && g2(r2) && !g2(n2)) return l3 || (r2.value = n2), true;
    }
    let a2 = o ? Number(s) < t2.length : me(t2, s), c3 = Reflect.set(t2, s, n2, g2(t2) ? t2 : i);
    return t2 === p2(i) && (a2 ? Ae(n2, r2) && x2(t2, "set", s, n2, r2) : x2(t2, "add", s, n2)), c3;
  }
  deleteProperty(t2, s) {
    let n2 = me(t2, s), i = t2[s], r2 = Reflect.deleteProperty(t2, s);
    return r2 && n2 && x2(t2, "delete", s, void 0, i), r2;
  }
  has(t2, s) {
    let n2 = Reflect.has(t2, s);
    return (!y(s) || !Ge2.has(s)) && w(t2, "has", s), n2;
  }
  ownKeys(t2) {
    return w(t2, "iterate", d(t2) ? "length" : m2), Reflect.ownKeys(t2);
  }
};
var ae2 = class extends re2 {
  constructor(t2 = false) {
    super(true, t2);
  }
  set(t2, s) {
    return true;
  }
  deleteProperty(t2, s) {
    return true;
  }
};
var vt = new oe();
var gt = new ae2();
var wt = new oe(true);
var Et = new ae2(true);
var Se2 = (e) => e;
var ee = (e) => Reflect.getPrototypeOf(e);
function yt(e, t2, s) {
  return function(...n2) {
    let i = this.__v_raw, r2 = p2(i), o = F(r2), a2 = e === "entries" || e === Symbol.iterator && o, c3 = e === "keys" && o, l3 = i[e](...n2), d4 = s ? Se2 : t2 ? B : D;
    return !t2 && w(r2, "iterate", c3 ? ye2 : m2), fe(Object.create(l3), { next() {
      let { value: f3, done: _5 } = l3.next();
      return _5 ? { value: f3, done: _5 } : { value: a2 ? [d4(f3[0]), d4(f3[1])] : d4(f3), done: _5 };
    } });
  };
}
function te(e) {
  return function(...t2) {
    return e === "delete" ? false : e === "clear" ? void 0 : this;
  };
}
function St(e, t2) {
  let s = { get(i) {
    let r2 = this.__v_raw, o = p2(r2), a2 = p2(i);
    e || (Ae(i, a2) && w(o, "get", i), w(o, "get", a2));
    let { has: c3 } = ee(o), l3 = t2 ? Se2 : e ? B : D;
    if (c3.call(o, i)) return l3(r2.get(i));
    if (c3.call(o, a2)) return l3(r2.get(a2));
    r2 !== o && r2.get(i);
  }, get size() {
    let i = this.__v_raw;
    return !e && w(p2(i), "iterate", m2), i.size;
  }, has(i) {
    let r2 = this.__v_raw, o = p2(r2), a2 = p2(i);
    return e || (Ae(i, a2) && w(o, "has", i), w(o, "has", a2)), i === a2 ? r2.has(i) : r2.has(i) || r2.has(a2);
  }, forEach(i, r2) {
    let o = this, a2 = o.__v_raw, c3 = p2(a2), l3 = t2 ? Se2 : e ? B : D;
    return !e && w(c3, "iterate", m2), a2.forEach((d4, f3) => i.call(r2, l3(d4), l3(f3), o));
  } };
  return fe(s, e ? { add: te("add"), set: te("set"), delete: te("delete"), clear: te("clear") } : { add(i) {
    let r2 = p2(this), o = ee(r2), a2 = p2(i), c3 = !t2 && !y2(i) && !V2(i) ? a2 : i;
    return o.has.call(r2, c3) || Ae(i, c3) && o.has.call(r2, i) || Ae(a2, c3) && o.has.call(r2, a2) || (r2.add(c3), x2(r2, "add", c3, c3)), this;
  }, set(i, r2) {
    !t2 && !y2(r2) && !V2(r2) && (r2 = p2(r2));
    let o = p2(this), { has: a2, get: c3 } = ee(o), l3 = a2.call(o, i);
    l3 || (i = p2(i), l3 = a2.call(o, i));
    let d4 = c3.call(o, i);
    return o.set(i, r2), l3 ? Ae(r2, d4) && x2(o, "set", i, r2, d4) : x2(o, "add", i, r2), this;
  }, delete(i) {
    let r2 = p2(this), { has: o, get: a2 } = ee(r2), c3 = o.call(r2, i);
    c3 || (i = p2(i), c3 = o.call(r2, i));
    let l3 = a2 ? a2.call(r2, i) : void 0, d4 = r2.delete(i);
    return c3 && x2(r2, "delete", i, void 0, l3), d4;
  }, clear() {
    let i = p2(this), r2 = i.size !== 0, o = void 0, a2 = i.clear();
    return r2 && x2(i, "clear", void 0, void 0, o), a2;
  } }), ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    s[i] = yt(i, e, t2);
  }), s;
}
function le2(e, t2) {
  let s = St(e, t2);
  return (n2, i, r2) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n2 : Reflect.get(me(s, i) && i in n2 ? s : n2, i, r2);
}
var bt = { get: le2(false, false) };
var Nt = { get: le2(false, true) };
var Tt = { get: le2(true, false) };
var Rt = { get: le2(true, true) };
var Ye2 = /* @__PURE__ */ new WeakMap();
var ze = /* @__PURE__ */ new WeakMap();
var Be2 = /* @__PURE__ */ new WeakMap();
var Je = /* @__PURE__ */ new WeakMap();
function Dt(e) {
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
function Ot(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dt(ge(e));
}
function Qe(e) {
  return V2(e) ? e : ue(e, false, vt, bt, Ye2);
}
function Ht(e) {
  return ue(e, false, wt, Nt, ze);
}
function be2(e) {
  return ue(e, true, gt, Tt, Be2);
}
function ue(e, t2, s, n2, i) {
  if (!f(e) || e.__v_raw && !(t2 && e.__v_isReactive)) return e;
  let r2 = Ot(e);
  if (r2 === 0) return e;
  let o = i.get(e);
  if (o) return o;
  let a2 = new Proxy(e, r2 === 2 ? n2 : s);
  return i.set(e, a2), a2;
}
function M(e) {
  return V2(e) ? M(e.__v_raw) : !!(e && e.__v_isReactive);
}
function V2(e) {
  return !!(e && e.__v_isReadonly);
}
function y2(e) {
  return !!(e && e.__v_isShallow);
}
function qe(e) {
  return e ? !!e.__v_raw : false;
}
function p2(e) {
  let t2 = e && e.__v_raw;
  return t2 ? p2(t2) : e;
}
function Ut(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && Oe(e, "__v_skip", true), e;
}
var D = (e) => f(e) ? Qe(e) : e;
var B = (e) => f(e) ? be2(e) : e;
function g2(e) {
  return e ? e.__v_isRef === true : false;
}
function xt(e) {
  return Xe2(e, false);
}
function $t(e) {
  return Xe2(e, true);
}
function Xe2(e, t2) {
  return g2(e) ? e : new Ne2(e, t2);
}
var Ne2 = class {
  constructor(t2, s) {
    this.dep = new K2(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = s ? t2 : p2(t2), this._value = s ? t2 : D(t2), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t2) {
    let s = this._rawValue, n2 = this.__v_isShallow || y2(t2) || V2(t2);
    t2 = n2 ? t2 : p2(t2), Ae(t2, s) && (this._rawValue = t2, this._value = n2 ? t2 : D(t2), this.dep.trigger());
  }
};
function Le(e) {
  return g2(e) ? e.value : e;
}
var At = { get: (e, t2, s) => t2 === "__v_raw" ? e : Le(Reflect.get(e, t2, s)), set: (e, t2, s, n2) => {
  let i = e[t2];
  return g2(i) && !g2(s) ? (i.value = s, true) : Reflect.set(e, t2, s, n2);
} };
function Yt(e) {
  return M(e) ? e : new Proxy(e, At);
}
var Oe2 = class {
  constructor(t2, s, n2) {
    this.fn = t2, this.setter = s, this._value = void 0, this.dep = new K2(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Y2 - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n2;
  }
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && h !== this) return Ke2(this, true), true;
  }
  get value() {
    let t2 = this.dep.track();
    return je2(this), t2 && (t2.version = this.dep.version), this._value;
  }
  set value(t2) {
    this.setter && this.setter(t2);
  }
};
function Qt(e, t2, s = false) {
  let n2, i;
  return g(e) ? n2 = e : (n2 = e.get, i = e.set), new Oe2(n2, i, s);
}
var se2 = {};
var ce2 = /* @__PURE__ */ new WeakMap();
var O2;
function Vt(e, t2 = false, s = O2) {
  if (s) {
    let n2 = ce2.get(s);
    n2 || ce2.set(s, n2 = []), n2.push(e);
  }
}
function ss(e, t2, s = ie) {
  let { immediate: n2, deep: i, once: r2, scheduler: o, augmentJob: a2, call: c3 } = s, l3 = (u2) => {
    (s.onWarn || ct)("Invalid watch source: ", u2, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, d4 = (u2) => i ? u2 : y2(u2) || i === false || i === 0 ? A(u2, 1) : A(u2), f3, _5, k7, Q4, q5 = false, X5 = false;
  if (g2(e) ? (_5 = () => e.value, q5 = y2(e)) : M(e) ? (_5 = () => d4(e), q5 = true) : d(e) ? (X5 = true, q5 = e.some((u2) => M(u2) || y2(u2)), _5 = () => e.map((u2) => {
    if (g2(u2)) return u2.value;
    if (M(u2)) return d4(u2);
    if (g(u2)) return c3 ? c3(u2, 2) : u2();
  })) : g(e) ? t2 ? _5 = c3 ? () => c3(e, 2) : e : _5 = () => {
    if (k7) {
      Ue();
      try {
        k7();
      } finally {
        $e2();
      }
    }
    let u2 = O2;
    O2 = f3;
    try {
      return c3 ? c3(e, 3, [Q4]) : e(Q4);
    } finally {
      O2 = u2;
    }
  } : _5 = ae, t2 && i) {
    let u2 = _5, S5 = i === true ? 1 / 0 : i;
    _5 = () => A(u2(), S5);
  }
  let he5 = ft(), L5 = () => {
    f3.stop(), he5 && he5.active && de(he5.effects, f3);
  };
  if (r2 && t2) {
    let u2 = t2;
    t2 = (...S5) => {
      u2(...S5), L5();
    };
  }
  let I4 = X5 ? new Array(e.length).fill(se2) : se2, H6 = (u2) => {
    if (!(!(f3.flags & 1) || !f3.dirty && !u2)) if (t2) {
      let S5 = f3.run();
      if (i || q5 || (X5 ? S5.some((pe5, Z6) => Ae(pe5, I4[Z6])) : Ae(S5, I4))) {
        k7 && k7();
        let pe5 = O2;
        O2 = f3;
        try {
          let Z6 = [S5, I4 === se2 ? void 0 : X5 && I4[0] === se2 ? [] : I4, Q4];
          I4 = S5, c3 ? c3(t2, 3, Z6) : t2(...Z6);
        } finally {
          O2 = pe5;
        }
      }
    } else f3.run();
  };
  return a2 && a2(H6), f3 = new W2(_5), f3.scheduler = o ? () => o(H6, false) : H6, Q4 = (u2) => Vt(u2, false, f3), k7 = f3.onStop = () => {
    let u2 = ce2.get(f3);
    if (u2) {
      if (c3) c3(u2, 4);
      else for (let S5 of u2) S5();
      ce2.delete(f3);
    }
  }, t2 ? n2 ? H6(true) : I4 = f3.run() : o ? o(H6.bind(null, true), true) : f3.run(), L5.pause = f3.pause.bind(f3), L5.resume = f3.resume.bind(f3), L5.stop = L5, L5;
}
function A(e, t2 = 1 / 0, s) {
  if (t2 <= 0 || !f(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t2)) return e;
  if (s.set(e, t2), t2--, g2(e)) A(e.value, t2, s);
  else if (d(e)) for (let n2 = 0; n2 < e.length; n2++) A(e[n2], t2, s);
  else if (I(e) || F(e)) e.forEach((n2) => {
    A(n2, t2, s);
  });
  else if (U(e)) {
    for (let n2 in e) A(e[n2], t2, s);
    for (let n2 of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, n2) && A(e[n2], t2, s);
  }
  return e;
}

// esm:https://esm.sh/*@vue/runtime-core@3.5.30/esnext/runtime-core.mjs
function ht2(e, t2, n2, r2) {
  try {
    return r2 ? e(...r2) : e();
  } catch (o) {
    _t2(o, t2, n2);
  }
}
function ke3(e, t2, n2, r2) {
  if (g(e)) {
    let o = ht2(e, t2, n2, r2);
    return o && he(o) && o.catch((s) => {
      _t2(s, t2, n2);
    }), o;
  }
  if (d(e)) {
    let o = [];
    for (let s = 0; s < e.length; s++) o.push(ke3(e[s], t2, n2, r2));
    return o;
  }
}
function _t2(e, t2, n2, r2 = true) {
  let o = t2 ? t2.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t2 && t2.appContext.config || ie;
  if (t2) {
    let l3 = t2.parent, u2 = t2.proxy, h5 = `https://vuejs.org/error-reference/#runtime-${n2}`;
    for (; l3; ) {
      let p3 = l3.ec;
      if (p3) {
        for (let a2 = 0; a2 < p3.length; a2++) if (p3[a2](e, u2, h5) === false) return;
      }
      l3 = l3.parent;
    }
    if (s) {
      Ue(), ht2(s, null, 10, [e, u2, h5]), $e2();
      return;
    }
  }
  _s(e, n2, o, r2, i);
}
function _s(e, t2, n2, r2 = true, o = false) {
  if (o) throw e;
  console.error(e);
}
var _e2 = [];
var Te2 = -1;
var it = [];
var je3 = null;
var ot = 0;
var Mr = Promise.resolve();
var Gt2 = null;
function gs(e) {
  let t2 = Gt2 || Mr;
  return e ? t2.then(this ? e.bind(this) : e) : t2;
}
function Es(e) {
  let t2 = Te2 + 1, n2 = _e2.length;
  for (; t2 < n2; ) {
    let r2 = t2 + n2 >>> 1, o = _e2[r2], s = $t2(o);
    s < e || s === e && o.flags & 2 ? t2 = r2 + 1 : n2 = r2;
  }
  return t2;
}
function Bn(e) {
  if (!(e.flags & 1)) {
    let t2 = $t2(e), n2 = _e2[_e2.length - 1];
    !n2 || !(e.flags & 2) && t2 >= $t2(n2) ? _e2.push(e) : _e2.splice(Es(t2), 0, e), e.flags |= 1, Fr();
  }
}
function Fr() {
  Gt2 || (Gt2 = Mr.then(Hr));
}
function Vn(e) {
  d(e) ? it.push(...e) : je3 && e.id === -1 ? je3.splice(ot + 1, 0, e) : e.flags & 1 || (it.push(e), e.flags |= 1), Fr();
}
function ur(e, t2, n2 = Te2 + 1) {
  for (; n2 < _e2.length; n2++) {
    let r2 = _e2[n2];
    if (r2 && r2.flags & 2) {
      if (e && r2.id !== e.uid) continue;
      _e2.splice(n2, 1), n2--, r2.flags & 4 && (r2.flags &= -2), r2(), r2.flags & 4 || (r2.flags &= -2);
    }
  }
}
function Xt2(e) {
  if (it.length) {
    let t2 = [...new Set(it)].sort((n2, r2) => $t2(n2) - $t2(r2));
    if (it.length = 0, je3) {
      je3.push(...t2);
      return;
    }
    for (je3 = t2, ot = 0; ot < je3.length; ot++) {
      let n2 = je3[ot];
      n2.flags & 4 && (n2.flags &= -2), n2.flags & 8 || n2(), n2.flags &= -2;
    }
    je3 = null, ot = 0;
  }
}
var $t2 = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Hr(e) {
  let t2 = ae;
  try {
    for (Te2 = 0; Te2 < _e2.length; Te2++) {
      let n2 = _e2[Te2];
      n2 && !(n2.flags & 8) && (n2.flags & 4 && (n2.flags &= -2), ht2(n2, n2.i, n2.i ? 15 : 14), n2.flags & 4 || (n2.flags &= -2));
    }
  } finally {
    for (; Te2 < _e2.length; Te2++) {
      let n2 = _e2[Te2];
      n2 && (n2.flags &= -2);
    }
    Te2 = -1, _e2.length = 0, Xt2(e), Gt2 = null, (_e2.length || it.length) && Hr(e);
  }
}
var Ve3;
var vt2 = [];
var Dn = false;
function an(e, ...t2) {
  Ve3 ? Ve3.emit(e, ...t2) : Dn || vt2.push({ event: e, args: t2 });
}
function Wn(e, t2) {
  var n2, r2;
  Ve3 = e, Ve3 ? (Ve3.enabled = true, vt2.forEach(({ event: o, args: s }) => Ve3.emit(o, ...s)), vt2 = []) : typeof window < "u" && window.HTMLElement && !((r2 = (n2 = window.navigator) == null ? void 0 : n2.userAgent) != null && r2.includes("jsdom")) ? ((t2.__VUE_DEVTOOLS_HOOK_REPLAY__ = t2.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Wn(s, t2);
  }), setTimeout(() => {
    Ve3 || (t2.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Dn = true, vt2 = []);
  }, 3e3)) : (Dn = true, vt2 = []);
}
function ms(e, t2) {
  an("app:init", e, t2, { Fragment: ce3, Text: Be3, Comment: oe3, Static: at });
}
function ys(e) {
  an("app:unmount", e);
}
var wn = Kn("component:added");
var Ur = Kn("component:updated");
var Ns = Kn("component:removed");
var vs = (e) => {
  Ve3 && typeof Ve3.cleanupBuffer == "function" && !Ve3.cleanupBuffer(e) && Ns(e);
};
function Kn(e) {
  return (t2) => {
    an(e, t2.appContext.app, t2.uid, t2.parent ? t2.parent.uid : void 0, t2);
  };
}
function Os(e, t2, n2) {
  an("component:emit", e.appContext.app, e, t2, n2);
}
var ue3 = null;
var un = null;
function At2(e) {
  let t2 = ue3;
  return ue3 = e, un = e && e.type.__scopeId || null, t2;
}
function Lr(e, t2 = ue3, n2) {
  if (!t2 || e._n) return e;
  let r2 = (...o) => {
    r2._d && nn(-1);
    let s = At2(t2), i;
    try {
      i = e(...o);
    } finally {
      At2(s), r2._d && nn(1);
    }
    return __VUE_PROD_DEVTOOLS__ && Ur(t2), i;
  };
  return r2._n = true, r2._c = true, r2._d = true, r2;
}
function $e3(e, t2, n2, r2) {
  let o = e.dirs, s = t2 && t2.dirs;
  for (let i = 0; i < o.length; i++) {
    let l3 = o[i];
    s && (l3.oldValue = s[i].value);
    let u2 = l3.dir[r2];
    u2 && (Ue(), ke3(u2, n2, 8, [e.el, l3, e, t2]), $e2());
  }
}
function bs(e, t2) {
  if (ae3) {
    let n2 = ae3.provides, r2 = ae3.parent && ae3.parent.provides;
    r2 === n2 && (n2 = ae3.provides = Object.create(r2)), n2[e] = t2;
  }
}
function Wt2(e, t2, n2 = false) {
  let r2 = Pe2();
  if (r2 || ze3) {
    let o = ze3 ? ze3._context.provides : r2 ? r2.parent == null || r2.ce ? r2.vnode.appContext && r2.vnode.appContext.provides : r2.parent.provides : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n2 && g(t2) ? t2.call(r2 && r2.proxy) : t2;
  }
}
var Vs = Symbol.for("v-scx");
var Ds = () => {
  {
    let e = Wt2(Vs);
    return e;
  }
};
function nl(e, t2) {
  return St2(e, null, t2);
}
function Kt(e, t2, n2) {
  return St2(e, t2, n2);
}
function St2(e, t2, n2 = ie) {
  let { immediate: r2, deep: o, flush: s, once: i } = n2, l3 = fe({}, n2), u2 = t2 && r2 || !t2 && s !== "post", h5;
  if (tt) {
    if (s === "sync") {
      let y8 = Ds();
      h5 = y8.__watcherHandles || (y8.__watcherHandles = []);
    } else if (!u2) {
      let y8 = () => {
      };
      return y8.stop = ae, y8.resume = ae, y8.pause = ae, y8;
    }
  }
  let p3 = ae3;
  l3.call = (y8, O6, N4) => ke3(y8, p3, O6, N4);
  let a2 = false;
  s === "post" ? l3.scheduler = (y8) => {
    re3(y8, p3 && p3.suspense);
  } : s !== "sync" && (a2 = true, l3.scheduler = (y8, O6) => {
    O6 ? y8() : Bn(y8);
  }), l3.augmentJob = (y8) => {
    t2 && (y8.flags |= 4), a2 && (y8.flags |= 2, p3 && (y8.id = p3.uid, y8.i = p3));
  };
  let g8 = ss(e, t2, l3);
  return tt && (h5 ? h5.push(g8) : u2 && g8()), g8;
}
function xs(e, t2, n2) {
  let r2 = this.proxy, o = p(e) ? e.includes(".") ? jr(r2, e) : () => r2[e] : e.bind(r2, r2), s;
  g(t2) ? s = t2 : (s = t2.handler, n2 = t2);
  let i = gt2(this), l3 = St2(o, s.bind(r2), n2);
  return i(), l3;
}
function jr(e, t2) {
  let n2 = t2.split(".");
  return () => {
    let r2 = e;
    for (let o = 0; o < n2.length && r2; o++) r2 = r2[n2[o]];
    return r2;
  };
}
var Br = Symbol("_vte");
var Wr = (e) => e.__isTeleport;
var Ae3 = Symbol("_leaveCb");
var Nt2 = Symbol("_enterCb");
function Cs() {
  let e = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
  return qn(() => {
    e.isMounted = true;
  }), Jn(() => {
    e.isUnmounting = true;
  }), e;
}
var ve2 = [Function, Array];
var $s = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: ve2, onEnter: ve2, onAfterEnter: ve2, onEnterCancelled: ve2, onBeforeLeave: ve2, onLeave: ve2, onAfterLeave: ve2, onLeaveCancelled: ve2, onBeforeAppear: ve2, onAppear: ve2, onAfterAppear: ve2, onAppearCancelled: ve2 };
var Yr = (e) => {
  let t2 = e.subTree;
  return t2.component ? Yr(t2.component) : t2;
};
var As = { name: "BaseTransition", props: $s, setup(e, { slots: t2 }) {
  let n2 = Pe2(), r2 = Cs();
  return () => {
    let o = t2.default && Gr(t2.default(), true);
    if (!o || !o.length) return;
    let s = qr(o), i = p2(e), { mode: l3 } = i;
    if (r2.isLeaving) return yn(s);
    let u2 = hr(s);
    if (!u2) return yn(s);
    let h5 = Cn(u2, i, r2, n2, (a2) => h5 = a2);
    u2.type !== oe3 && pt2(u2, h5);
    let p3 = n2.subTree && hr(n2.subTree);
    if (p3 && p3.type !== oe3 && !De(p3, u2) && Yr(n2).type !== oe3) {
      let a2 = Cn(p3, i, r2, n2);
      if (pt2(p3, a2), l3 === "out-in" && u2.type !== oe3) return r2.isLeaving = true, a2.afterLeave = () => {
        r2.isLeaving = false, n2.job.flags & 8 || n2.update(), delete a2.afterLeave, p3 = void 0;
      }, yn(s);
      l3 === "in-out" && u2.type !== oe3 ? a2.delayLeave = (g8, y8, O6) => {
        let N4 = Jr(r2, p3);
        N4[String(p3.key)] = p3, g8[Ae3] = () => {
          y8(), g8[Ae3] = void 0, delete h5.delayedLeave, p3 = void 0;
        }, h5.delayedLeave = () => {
          O6(), delete h5.delayedLeave, p3 = void 0;
        };
      } : p3 = void 0;
    } else p3 && (p3 = void 0);
    return s;
  };
} };
function qr(e) {
  let t2 = e[0];
  if (e.length > 1) {
    let n2 = false;
    for (let r2 of e) if (r2.type !== oe3) {
      t2 = r2, n2 = true;
      break;
    }
  }
  return t2;
}
var sl = As;
function Jr(e, t2) {
  let { leavingVNodes: n2 } = e, r2 = n2.get(t2.type);
  return r2 || (r2 = /* @__PURE__ */ Object.create(null), n2.set(t2.type, r2)), r2;
}
function Cn(e, t2, n2, r2, o) {
  let { appear: s, mode: i, persisted: l3 = false, onBeforeEnter: u2, onEnter: h5, onAfterEnter: p3, onEnterCancelled: a2, onBeforeLeave: g8, onLeave: y8, onAfterLeave: O6, onLeaveCancelled: N4, onBeforeAppear: U5, onAppear: L5, onAfterAppear: w4, onAppearCancelled: d4 } = t2, E6 = String(e.key), m7 = Jr(n2, e), C5 = (x10, T8) => {
    x10 && ke3(x10, r2, 9, T8);
  }, R6 = (x10, T8) => {
    let M6 = T8[1];
    C5(x10, T8), d(x10) ? x10.every((Y6) => Y6.length <= 1) && M6() : x10.length <= 1 && M6();
  }, I4 = { mode: i, persisted: l3, beforeEnter(x10) {
    let T8 = u2;
    if (!n2.isMounted) if (s) T8 = U5 || u2;
    else return;
    x10[Ae3] && x10[Ae3](true);
    let M6 = m7[E6];
    M6 && De(e, M6) && M6.el[Ae3] && M6.el[Ae3](), C5(T8, [x10]);
  }, enter(x10) {
    if (m7[E6] === e) return;
    let T8 = h5, M6 = p3, Y6 = a2;
    if (!n2.isMounted) if (s) T8 = L5 || h5, M6 = w4 || p3, Y6 = d4 || a2;
    else return;
    let q5 = false;
    x10[Nt2] = (ne6) => {
      q5 || (q5 = true, ne6 ? C5(Y6, [x10]) : C5(M6, [x10]), I4.delayedLeave && I4.delayedLeave(), x10[Nt2] = void 0);
    };
    let z5 = x10[Nt2].bind(null, false);
    T8 ? R6(T8, [x10, z5]) : z5();
  }, leave(x10, T8) {
    let M6 = String(e.key);
    if (x10[Nt2] && x10[Nt2](true), n2.isUnmounting) return T8();
    C5(g8, [x10]);
    let Y6 = false;
    x10[Ae3] = (z5) => {
      Y6 || (Y6 = true, T8(), z5 ? C5(N4, [x10]) : C5(O6, [x10]), x10[Ae3] = void 0, m7[M6] === e && delete m7[M6]);
    };
    let q5 = x10[Ae3].bind(null, false);
    m7[M6] = e, y8 ? R6(y8, [x10, q5]) : q5();
  }, clone(x10) {
    let T8 = Cn(x10, t2, n2, r2, o);
    return o && o(T8), T8;
  } };
  return I4;
}
function yn(e) {
  if (Rt2(e)) return e = He3(e), e.children = null, e;
}
function hr(e) {
  if (!Rt2(e)) return Wr(e.type) && e.children ? qr(e.children) : e;
  if (e.component) return e.component.subTree;
  let { shapeFlag: t2, children: n2 } = e;
  if (n2) {
    if (t2 & 16) return n2[0];
    if (t2 & 32 && g(n2.default)) return n2.default();
  }
}
function pt2(e, t2) {
  e.shapeFlag & 6 && e.component ? (e.transition = t2, pt2(e.component.subTree, t2)) : e.shapeFlag & 128 ? (e.ssContent.transition = t2.clone(e.ssContent), e.ssFallback.transition = t2.clone(e.ssFallback)) : e.transition = t2;
}
function Gr(e, t2 = false, n2) {
  let r2 = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s], l3 = n2 == null ? i.key : String(n2) + String(i.key != null ? i.key : s);
    i.type === ce3 ? (i.patchFlag & 128 && o++, r2 = r2.concat(Gr(i.children, t2, l3))) : (t2 || i.type !== oe3) && r2.push(l3 != null ? He3(i, { key: l3 }) : i);
  }
  if (o > 1) for (let s = 0; s < r2.length; s++) r2[s].patchFlag = -2;
  return r2;
}
function ks(e, t2) {
  return g(e) ? fe({ name: e.name }, t2, { setup: e }) : e;
}
function Yn(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _r(e, t2) {
  let n2;
  return !!((n2 = Object.getOwnPropertyDescriptor(e, t2)) && !n2.configurable);
}
var Qt2 = /* @__PURE__ */ new WeakMap();
function lt2(e, t2, n2, r2, o = false) {
  if (d(e)) {
    e.forEach((N4, U5) => lt2(N4, t2 && (d(t2) ? t2[U5] : t2), n2, r2, o));
    return;
  }
  if (Ie2(r2) && !o) {
    r2.shapeFlag & 512 && r2.type.__asyncResolved && r2.component.subTree.component && lt2(e, t2, n2, r2.component.subTree);
    return;
  }
  let s = r2.shapeFlag & 4 ? It(r2.component) : r2.el, i = o ? null : s, { i: l3, r: u2 } = e, h5 = t2 && t2.r, p3 = l3.refs === ie ? l3.refs = {} : l3.refs, a2 = l3.setupState, g8 = p2(a2), y8 = a2 === ie ? ce : (N4) => _r(p3, N4) ? false : me(g8, N4), O6 = (N4, U5) => !(U5 && _r(p3, U5));
  if (h5 != null && h5 !== u2) {
    if (gr(t2), p(h5)) p3[h5] = null, y8(h5) && (a2[h5] = null);
    else if (g2(h5)) {
      let N4 = t2;
      O6(h5, N4.k) && (h5.value = null), N4.k && (p3[N4.k] = null);
    }
  }
  if (g(u2)) ht2(u2, l3, 12, [i, p3]);
  else {
    let N4 = p(u2), U5 = g2(u2);
    if (N4 || U5) {
      let L5 = () => {
        if (e.f) {
          let w4 = N4 ? y8(u2) ? a2[u2] : p3[u2] : O6(u2) || !e.k ? u2.value : p3[e.k];
          if (o) d(w4) && de(w4, s);
          else if (d(w4)) w4.includes(s) || w4.push(s);
          else if (N4) p3[u2] = [s], y8(u2) && (a2[u2] = p3[u2]);
          else {
            let d4 = [s];
            O6(u2, e.k) && (u2.value = d4), e.k && (p3[e.k] = d4);
          }
        } else N4 ? (p3[u2] = i, y8(u2) && (a2[u2] = i)) : U5 && (O6(u2, e.k) && (u2.value = i), e.k && (p3[e.k] = i));
      };
      if (i) {
        let w4 = () => {
          L5(), Qt2.delete(e);
        };
        w4.id = -1, Qt2.set(e, w4), re3(w4, n2);
      } else gr(e), L5();
    }
  }
}
function gr(e) {
  let t2 = Qt2.get(e);
  t2 && (t2.flags |= 8, Qt2.delete(e));
}
var Hs = Ce().requestIdleCallback || ((e) => setTimeout(e, 1));
var Us = Ce().cancelIdleCallback || ((e) => clearTimeout(e));
var Ie2 = (e) => !!e.type.__asyncLoader;
var Rt2 = (e) => e.type.__isKeepAlive;
function Ws(e, t2) {
  Zr(e, "a", t2);
}
function Ks(e, t2) {
  Zr(e, "da", t2);
}
function Zr(e, t2, n2 = ae3) {
  let r2 = e.__wdc || (e.__wdc = () => {
    let o = n2;
    for (; o; ) {
      if (o.isDeactivated) return;
      o = o.parent;
    }
    return e();
  });
  if (fn(t2, r2, n2), n2) {
    let o = n2.parent;
    for (; o && o.parent; ) Rt2(o.parent.vnode) && Ys(r2, t2, n2, o), o = o.parent;
  }
}
function Ys(e, t2, n2, r2) {
  let o = fn(t2, e, r2, true);
  eo(() => {
    de(r2[t2], o);
  }, n2);
}
function fn(e, t2, n2 = ae3, r2 = false) {
  if (n2) {
    let o = n2[e] || (n2[e] = []), s = t2.__weh || (t2.__weh = (...i) => {
      Ue();
      let l3 = gt2(n2), u2 = ke3(t2, n2, e, i);
      return l3(), $e2(), u2;
    });
    return r2 ? o.unshift(s) : o.push(s), s;
  }
}
var Ue3 = (e) => (t2, n2 = ae3) => {
  (!tt || e === "sp") && fn(e, (...r2) => t2(...r2), n2);
};
var qs = Ue3("bm");
var qn = Ue3("m");
var Js = Ue3("bu");
var zr = Ue3("u");
var Jn = Ue3("bum");
var eo = Ue3("um");
var Gs = Ue3("sp");
var Xs = Ue3("rtg");
var Qs = Ue3("rtc");
function Zs(e, t2 = ae3) {
  fn("ec", e, t2);
}
var to = Symbol.for("v-ndc");
var $n = (e) => e ? Co(e) ? It(e) : $n(e.parent) : null;
var xt2 = fe(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => e.props, $attrs: (e) => e.attrs, $slots: (e) => e.slots, $refs: (e) => e.refs, $parent: (e) => $n(e.parent), $root: (e) => $n(e.root), $host: (e) => e.ce, $emit: (e) => e.emit, $options: (e) => __VUE_OPTIONS_API__ ? Zn(e) : e.type, $forceUpdate: (e) => e.f || (e.f = () => {
  Bn(e.update);
}), $nextTick: (e) => e.n || (e.n = gs.bind(e.proxy)), $watch: (e) => __VUE_OPTIONS_API__ ? xs.bind(e) : ae });
var vn = (e, t2) => e !== ie && !e.__isScriptSetup && me(e, t2);
var An = { get({ _: e }, t2) {
  if (t2 === "__v_skip") return true;
  let { ctx: n2, setupState: r2, data: o, props: s, accessCache: i, type: l3, appContext: u2 } = e;
  if (t2[0] !== "$") {
    let g8 = i[t2];
    if (g8 !== void 0) switch (g8) {
      case 1:
        return r2[t2];
      case 2:
        return o[t2];
      case 4:
        return n2[t2];
      case 3:
        return s[t2];
    }
    else {
      if (vn(r2, t2)) return i[t2] = 1, r2[t2];
      if (__VUE_OPTIONS_API__ && o !== ie && me(o, t2)) return i[t2] = 2, o[t2];
      if (me(s, t2)) return i[t2] = 3, s[t2];
      if (n2 !== ie && me(n2, t2)) return i[t2] = 4, n2[t2];
      (!__VUE_OPTIONS_API__ || kn) && (i[t2] = 0);
    }
  }
  let h5 = xt2[t2], p3, a2;
  if (h5) return t2 === "$attrs" && w(e.attrs, "get", ""), h5(e);
  if ((p3 = l3.__cssModules) && (p3 = p3[t2])) return p3;
  if (n2 !== ie && me(n2, t2)) return i[t2] = 4, n2[t2];
  if (a2 = u2.config.globalProperties, me(a2, t2)) return a2[t2];
}, set({ _: e }, t2, n2) {
  let { data: r2, setupState: o, ctx: s } = e;
  return vn(o, t2) ? (o[t2] = n2, true) : __VUE_OPTIONS_API__ && r2 !== ie && me(r2, t2) ? (r2[t2] = n2, true) : me(e.props, t2) || t2[0] === "$" && t2.slice(1) in e ? false : (s[t2] = n2, true);
}, has({ _: { data: e, setupState: t2, accessCache: n2, ctx: r2, appContext: o, props: s, type: i } }, l3) {
  let u2;
  return !!(n2[l3] || __VUE_OPTIONS_API__ && e !== ie && l3[0] !== "$" && me(e, l3) || vn(t2, l3) || me(s, l3) || me(r2, l3) || me(xt2, l3) || me(o.config.globalProperties, l3) || (u2 = i.__cssModules) && u2[l3]);
}, defineProperty(e, t2, n2) {
  return n2.get != null ? e._.accessCache[t2] = 0 : me(n2, "value") && this.set(e, t2, n2.value, null), Reflect.defineProperty(e, t2, n2);
} };
var ei = fe({}, An, { get(e, t2) {
  if (t2 !== Symbol.unscopables) return An.get(e, t2, e);
}, has(e, t2) {
  return t2[0] !== "_" && !Y(t2);
} });
function kt(e) {
  return d(e) ? e.reduce((t2, n2) => (t2[n2] = null, t2), {}) : e;
}
var kn = true;
function ti(e) {
  let t2 = Zn(e), n2 = e.proxy, r2 = e.ctx;
  kn = false, t2.beforeCreate && Or(t2.beforeCreate, e, "bc");
  let { data: o, computed: s, methods: i, watch: l3, provide: u2, inject: h5, created: p3, beforeMount: a2, mounted: g8, beforeUpdate: y8, updated: O6, activated: N4, deactivated: U5, beforeDestroy: L5, beforeUnmount: w4, destroyed: d4, unmounted: E6, render: m7, renderTracked: C5, renderTriggered: R6, errorCaptured: I4, serverPrefetch: x10, expose: T8, inheritAttrs: M6, components: Y6, directives: q5, filters: z5 } = t2;
  if (h5 && ni(h5, r2, null), i) for (let W6 in i) {
    let S5 = i[W6];
    g(S5) && (r2[W6] = S5.bind(n2));
  }
  if (o) {
    let W6 = o.call(n2, n2);
    f(W6) && (e.data = Qe(W6));
  }
  if (kn = true, s) for (let W6 in s) {
    let S5 = s[W6], Q4 = g(S5) ? S5.bind(n2, n2) : g(S5.get) ? S5.get.bind(n2, n2) : ae, Ke6 = !g(S5) && g(S5.set) ? S5.set.bind(n2) : ae, Et5 = Hi({ get: Q4, set: Ke6 });
    Object.defineProperty(r2, W6, { enumerable: true, configurable: true, get: () => Et5.value, set: (nt5) => Et5.value = nt5 });
  }
  if (l3) for (let W6 in l3) ro(l3[W6], r2, n2, W6);
  if (u2) {
    let W6 = g(u2) ? u2.call(n2) : u2;
    Reflect.ownKeys(W6).forEach((S5) => {
      bs(S5, W6[S5]);
    });
  }
  p3 && Or(p3, e, "c");
  function H6(W6, S5) {
    d(S5) ? S5.forEach((Q4) => W6(Q4.bind(n2))) : S5 && W6(S5.bind(n2));
  }
  if (H6(qs, a2), H6(qn, g8), H6(Js, y8), H6(zr, O6), H6(Ws, N4), H6(Ks, U5), H6(Zs, I4), H6(Qs, C5), H6(Xs, R6), H6(Jn, w4), H6(eo, E6), H6(Gs, x10), d(T8)) if (T8.length) {
    let W6 = e.exposed || (e.exposed = {});
    T8.forEach((S5) => {
      Object.defineProperty(W6, S5, { get: () => n2[S5], set: (Q4) => n2[S5] = Q4, enumerable: true });
    });
  } else e.exposed || (e.exposed = {});
  m7 && e.render === ae && (e.render = m7), M6 != null && (e.inheritAttrs = M6), Y6 && (e.components = Y6), q5 && (e.directives = q5), x10 && Yn(e);
}
function ni(e, t2, n2 = ae) {
  d(e) && (e = Pn(e));
  for (let r2 in e) {
    let o = e[r2], s;
    f(o) ? "default" in o ? s = Wt2(o.from || r2, o.default, true) : s = Wt2(o.from || r2) : s = Wt2(o), g2(s) ? Object.defineProperty(t2, r2, { enumerable: true, configurable: true, get: () => s.value, set: (i) => s.value = i }) : t2[r2] = s;
  }
}
function Or(e, t2, n2) {
  ke3(d(e) ? e.map((r2) => r2.bind(t2.proxy)) : e.bind(t2.proxy), t2, n2);
}
function ro(e, t2, n2, r2) {
  let o = r2.includes(".") ? jr(n2, r2) : () => n2[r2];
  if (p(e)) {
    let s = t2[e];
    g(s) && Kt(o, s);
  } else if (g(e)) Kt(o, e.bind(n2));
  else if (f(e)) if (d(e)) e.forEach((s) => ro(s, t2, n2, r2));
  else {
    let s = g(e.handler) ? e.handler.bind(n2) : t2[e.handler];
    g(s) && Kt(o, s, e);
  }
}
function Zn(e) {
  let t2 = e.type, { mixins: n2, extends: r2 } = t2, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, l3 = s.get(t2), u2;
  return l3 ? u2 = l3 : !o.length && !n2 && !r2 ? u2 = t2 : (u2 = {}, o.length && o.forEach((h5) => Zt(u2, h5, i, true)), Zt(u2, t2, i)), f(t2) && s.set(t2, u2), u2;
}
function Zt(e, t2, n2, r2 = false) {
  let { mixins: o, extends: s } = t2;
  s && Zt(e, s, n2, true), o && o.forEach((i) => Zt(e, i, n2, true));
  for (let i in t2) if (!(r2 && i === "expose")) {
    let l3 = ri[i] || n2 && n2[i];
    e[i] = l3 ? l3(e[i], t2[i]) : t2[i];
  }
  return e;
}
var ri = { data: br, props: Vr, emits: Vr, methods: Vt2, computed: Vt2, beforeCreate: he2, created: he2, beforeMount: he2, mounted: he2, beforeUpdate: he2, updated: he2, beforeDestroy: he2, beforeUnmount: he2, destroyed: he2, unmounted: he2, activated: he2, deactivated: he2, errorCaptured: he2, serverPrefetch: he2, components: Vt2, directives: Vt2, watch: si, provide: br, inject: oi };
function br(e, t2) {
  return t2 ? e ? function() {
    return fe(g(e) ? e.call(this, this) : e, g(t2) ? t2.call(this, this) : t2);
  } : t2 : e;
}
function oi(e, t2) {
  return Vt2(Pn(e), Pn(t2));
}
function Pn(e) {
  if (d(e)) {
    let t2 = {};
    for (let n2 = 0; n2 < e.length; n2++) t2[e[n2]] = e[n2];
    return t2;
  }
  return e;
}
function he2(e, t2) {
  return e ? [...new Set([].concat(e, t2))] : t2;
}
function Vt2(e, t2) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t2) : t2;
}
function Vr(e, t2) {
  return e ? d(e) && d(t2) ? [.../* @__PURE__ */ new Set([...e, ...t2])] : fe(/* @__PURE__ */ Object.create(null), kt(e), kt(t2 ?? {})) : t2;
}
function si(e, t2) {
  if (!e) return t2;
  if (!t2) return e;
  let n2 = fe(/* @__PURE__ */ Object.create(null), e);
  for (let r2 in t2) n2[r2] = he2(e[r2], t2[r2]);
  return n2;
}
function oo() {
  return { app: null, config: { isNativeTag: ce, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
var ii = 0;
function li(e, t2) {
  return function(r2, o = null) {
    g(r2) || (r2 = fe({}, r2)), o != null && !f(o) && (o = null);
    let s = oo(), i = /* @__PURE__ */ new WeakSet(), l3 = [], u2 = false, h5 = s.app = { _uid: ii++, _component: r2, _props: o, _container: null, _context: s, _instance: null, version: Tr, get config() {
      return s.config;
    }, set config(p3) {
    }, use(p3, ...a2) {
      return i.has(p3) || (p3 && g(p3.install) ? (i.add(p3), p3.install(h5, ...a2)) : g(p3) && (i.add(p3), p3(h5, ...a2))), h5;
    }, mixin(p3) {
      return __VUE_OPTIONS_API__ && (s.mixins.includes(p3) || s.mixins.push(p3)), h5;
    }, component(p3, a2) {
      return a2 ? (s.components[p3] = a2, h5) : s.components[p3];
    }, directive(p3, a2) {
      return a2 ? (s.directives[p3] = a2, h5) : s.directives[p3];
    }, mount(p3, a2, g8) {
      if (!u2) {
        let y8 = h5._ceVNode || se3(r2, o);
        return y8.appContext = s, g8 === true ? g8 = "svg" : g8 === false && (g8 = void 0), a2 && t2 ? t2(y8, p3) : e(y8, p3, g8), u2 = true, h5._container = p3, p3.__vue_app__ = h5, __VUE_PROD_DEVTOOLS__ && (h5._instance = y8.component, ms(h5, Tr)), It(y8.component);
      }
    }, onUnmount(p3) {
      l3.push(p3);
    }, unmount() {
      u2 && (ke3(l3, h5._instance, 16), e(null, h5._container), __VUE_PROD_DEVTOOLS__ && (h5._instance = null, ys(h5)), delete h5._container.__vue_app__);
    }, provide(p3, a2) {
      return s.provides[p3] = a2, h5;
    }, runWithContext(p3) {
      let a2 = ze3;
      ze3 = h5;
      try {
        return p3();
      } finally {
        ze3 = a2;
      }
    } };
    return h5;
  };
}
var ze3 = null;
var so = (e, t2) => t2 === "modelValue" || t2 === "model-value" ? e.modelModifiers : e[`${t2}Modifiers`] || e[`${Te(t2)}Modifiers`] || e[`${V(t2)}Modifiers`];
function ci(e, t2, ...n2) {
  if (e.isUnmounted) return;
  let r2 = e.vnode.props || ie, o = n2, s = t2.startsWith("update:"), i = s && so(r2, t2.slice(7));
  i && (i.trim && (o = n2.map((p3) => p(p3) ? p3.trim() : p3)), i.number && (o = n2.map(xe))), __VUE_PROD_DEVTOOLS__ && Os(e, t2, o);
  let l3, u2 = r2[l3 = Se(t2)] || r2[l3 = Se(Te(t2))];
  !u2 && s && (u2 = r2[l3 = Se(V(t2))]), u2 && ke3(u2, e, 6, o);
  let h5 = r2[l3 + "Once"];
  if (h5) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l3]) return;
    e.emitted[l3] = true, ke3(h5, e, 6, o);
  }
}
var ai = /* @__PURE__ */ new WeakMap();
function io(e, t2, n2 = false) {
  let r2 = __VUE_OPTIONS_API__ && n2 ? ai : t2.emitsCache, o = r2.get(e);
  if (o !== void 0) return o;
  let s = e.emits, i = {}, l3 = false;
  if (__VUE_OPTIONS_API__ && !g(e)) {
    let u2 = (h5) => {
      let p3 = io(h5, t2, true);
      p3 && (l3 = true, fe(i, p3));
    };
    !n2 && t2.mixins.length && t2.mixins.forEach(u2), e.extends && u2(e.extends), e.mixins && e.mixins.forEach(u2);
  }
  return !s && !l3 ? (f(e) && r2.set(e, null), null) : (d(s) ? s.forEach((u2) => i[u2] = null) : fe(i, s), f(e) && r2.set(e, i), i);
}
function pn(e, t2) {
  return !e || !le(t2) ? false : (t2 = t2.slice(2).replace(/Once$/, ""), me(e, t2[0].toLowerCase() + t2.slice(1)) || me(e, V(t2)) || me(e, t2));
}
function qt2(e) {
  let { type: t2, vnode: n2, proxy: r2, withProxy: o, propsOptions: [s], slots: i, attrs: l3, emit: u2, render: h5, renderCache: p3, props: a2, data: g8, setupState: y8, ctx: O6, inheritAttrs: N4 } = e, U5 = At2(e), L5, w4;
  try {
    if (n2.shapeFlag & 4) {
      let m7 = o || r2, C5 = m7;
      L5 = me3(h5.call(C5, m7, p3, a2, y8, g8, O6)), w4 = l3;
    } else {
      let m7 = t2;
      L5 = me3(m7.length > 1 ? m7(a2, { attrs: l3, slots: i, emit: u2 }) : m7(a2, null)), w4 = t2.props ? l3 : fi(l3);
    }
  } catch (m7) {
    Tt2.length = 0, _t2(m7, e, 1), L5 = se3(oe3);
  }
  let d4 = L5, E6;
  if (w4 && N4 !== false) {
    let m7 = Object.keys(w4), { shapeFlag: C5 } = d4;
    m7.length && C5 & 7 && (s && m7.some(pe) && (w4 = pi(w4, s)), d4 = He3(d4, w4, false, true));
  }
  return n2.dirs && (d4 = He3(d4, null, false, true), d4.dirs = d4.dirs ? d4.dirs.concat(n2.dirs) : n2.dirs), n2.transition && pt2(d4, n2.transition), L5 = d4, At2(U5), L5;
}
var fi = (e) => {
  let t2;
  for (let n2 in e) (n2 === "class" || n2 === "style" || le(n2)) && ((t2 || (t2 = {}))[n2] = e[n2]);
  return t2;
};
var pi = (e, t2) => {
  let n2 = {};
  for (let r2 in e) (!pe(r2) || !(r2.slice(9) in t2)) && (n2[r2] = e[r2]);
  return n2;
};
function di(e, t2, n2) {
  let { props: r2, children: o, component: s } = e, { props: i, children: l3, patchFlag: u2 } = t2, h5 = s.emitsOptions;
  if (t2.dirs || t2.transition) return true;
  if (n2 && u2 >= 0) {
    if (u2 & 1024) return true;
    if (u2 & 16) return r2 ? Dr(r2, i, h5) : !!i;
    if (u2 & 8) {
      let p3 = t2.dynamicProps;
      for (let a2 = 0; a2 < p3.length; a2++) {
        let g8 = p3[a2];
        if (lo(i, r2, g8) && !pn(h5, g8)) return true;
      }
    }
  } else return (o || l3) && (!l3 || !l3.$stable) ? true : r2 === i ? false : r2 ? i ? Dr(r2, i, h5) : true : !!i;
  return false;
}
function Dr(e, t2, n2) {
  let r2 = Object.keys(t2);
  if (r2.length !== Object.keys(e).length) return true;
  for (let o = 0; o < r2.length; o++) {
    let s = r2[o];
    if (lo(t2, e, s) && !pn(n2, s)) return true;
  }
  return false;
}
function lo(e, t2, n2) {
  let r2 = e[n2], o = t2[n2];
  return n2 === "style" && f(r2) && f(o) ? !S(r2, o) : r2 !== o;
}
function dn({ vnode: e, parent: t2 }, n2) {
  for (; t2; ) {
    let r2 = t2.subTree;
    if (r2.suspense && r2.suspense.activeBranch === e && (r2.el = e.el), r2 === e) (e = t2.vnode).el = n2, t2 = t2.parent;
    else break;
  }
}
var co = {};
var ao = () => Object.create(co);
var uo = (e) => Object.getPrototypeOf(e) === co;
function hi(e, t2, n2, r2 = false) {
  let o = {}, s = ao();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fo(e, t2, o, s);
  for (let i in e.propsOptions[0]) i in o || (o[i] = void 0);
  n2 ? e.props = r2 ? o : Ht(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function _i(e, t2, n2, r2) {
  let { props: o, attrs: s, vnode: { patchFlag: i } } = e, l3 = p2(o), [u2] = e.propsOptions, h5 = false;
  if ((r2 || i > 0) && !(i & 16)) {
    if (i & 8) {
      let p3 = e.vnode.dynamicProps;
      for (let a2 = 0; a2 < p3.length; a2++) {
        let g8 = p3[a2];
        if (pn(e.emitsOptions, g8)) continue;
        let y8 = t2[g8];
        if (u2) if (me(s, g8)) y8 !== s[g8] && (s[g8] = y8, h5 = true);
        else {
          let O6 = Te(g8);
          o[O6] = Sn(u2, l3, O6, y8, e, false);
        }
        else y8 !== s[g8] && (s[g8] = y8, h5 = true);
      }
    }
  } else {
    fo(e, t2, o, s) && (h5 = true);
    let p3;
    for (let a2 in l3) (!t2 || !me(t2, a2) && ((p3 = V(a2)) === a2 || !me(t2, p3))) && (u2 ? n2 && (n2[a2] !== void 0 || n2[p3] !== void 0) && (o[a2] = Sn(u2, l3, a2, void 0, e, true)) : delete o[a2]);
    if (s !== l3) for (let a2 in s) (!t2 || !me(t2, a2)) && (delete s[a2], h5 = true);
  }
  h5 && x2(e.attrs, "set", "");
}
function fo(e, t2, n2, r2) {
  let [o, s] = e.propsOptions, i = false, l3;
  if (t2) for (let u2 in t2) {
    if (Ee(u2)) continue;
    let h5 = t2[u2], p3;
    o && me(o, p3 = Te(u2)) ? !s || !s.includes(p3) ? n2[p3] = h5 : (l3 || (l3 = {}))[p3] = h5 : pn(e.emitsOptions, u2) || (!(u2 in r2) || h5 !== r2[u2]) && (r2[u2] = h5, i = true);
  }
  if (s) {
    let u2 = p2(n2), h5 = l3 || ie;
    for (let p3 = 0; p3 < s.length; p3++) {
      let a2 = s[p3];
      n2[a2] = Sn(o, u2, a2, h5[a2], e, !me(h5, a2));
    }
  }
  return i;
}
function Sn(e, t2, n2, r2, o, s) {
  let i = e[n2];
  if (i != null) {
    let l3 = me(i, "default");
    if (l3 && r2 === void 0) {
      let u2 = i.default;
      if (i.type !== Function && !i.skipFactory && g(u2)) {
        let { propsDefaults: h5 } = o;
        if (n2 in h5) r2 = h5[n2];
        else {
          let p3 = gt2(o);
          r2 = h5[n2] = u2.call(null, t2), p3();
        }
      } else r2 = u2;
      o.ce && o.ce._setProp(n2, r2);
    }
    i[0] && (s && !l3 ? r2 = false : i[1] && (r2 === "" || r2 === V(n2)) && (r2 = true));
  }
  return r2;
}
var gi = /* @__PURE__ */ new WeakMap();
function po(e, t2, n2 = false) {
  let r2 = __VUE_OPTIONS_API__ && n2 ? gi : t2.propsCache, o = r2.get(e);
  if (o) return o;
  let s = e.props, i = {}, l3 = [], u2 = false;
  if (__VUE_OPTIONS_API__ && !g(e)) {
    let p3 = (a2) => {
      u2 = true;
      let [g8, y8] = po(a2, t2, true);
      fe(i, g8), y8 && l3.push(...y8);
    };
    !n2 && t2.mixins.length && t2.mixins.forEach(p3), e.extends && p3(e.extends), e.mixins && e.mixins.forEach(p3);
  }
  if (!s && !u2) return f(e) && r2.set(e, se), se;
  if (d(s)) for (let p3 = 0; p3 < s.length; p3++) {
    let a2 = Te(s[p3]);
    wr(a2) && (i[a2] = ie);
  }
  else if (s) for (let p3 in s) {
    let a2 = Te(p3);
    if (wr(a2)) {
      let g8 = s[p3], y8 = i[a2] = d(g8) || g(g8) ? { type: g8 } : fe({}, g8), O6 = y8.type, N4 = false, U5 = true;
      if (d(O6)) for (let L5 = 0; L5 < O6.length; ++L5) {
        let w4 = O6[L5], d4 = g(w4) && w4.name;
        if (d4 === "Boolean") {
          N4 = true;
          break;
        } else d4 === "String" && (U5 = false);
      }
      else N4 = g(O6) && O6.name === "Boolean";
      y8[0] = N4, y8[1] = U5, (N4 || me(y8, "default")) && l3.push(a2);
    }
  }
  let h5 = [i, l3];
  return f(e) && r2.set(e, h5), h5;
}
function wr(e) {
  return e[0] !== "$" && !Ee(e);
}
var zn = (e) => e === "_" || e === "_ctx" || e === "$stable";
var er = (e) => d(e) ? e.map(me3) : [me3(e)];
var Ei = (e, t2, n2) => {
  if (t2._n) return t2;
  let r2 = Lr((...o) => er(t2(...o)), n2);
  return r2._c = false, r2;
};
var ho = (e, t2, n2) => {
  let r2 = e._ctx;
  for (let o in e) {
    if (zn(o)) continue;
    let s = e[o];
    if (g(s)) t2[o] = Ei(o, s, r2);
    else if (s != null) {
      let i = er(s);
      t2[o] = () => i;
    }
  }
};
var _o = (e, t2) => {
  let n2 = er(t2);
  e.slots.default = () => n2;
};
var go = (e, t2, n2) => {
  for (let r2 in t2) (n2 || !zn(r2)) && (e[r2] = t2[r2]);
};
var mi = (e, t2, n2) => {
  let r2 = e.slots = ao();
  if (e.vnode.shapeFlag & 32) {
    let o = t2._;
    o ? (go(r2, t2, n2), n2 && Oe(r2, "_", o, true)) : ho(t2, r2);
  } else t2 && _o(e, t2);
};
var yi = (e, t2, n2) => {
  let { vnode: r2, slots: o } = e, s = true, i = ie;
  if (r2.shapeFlag & 32) {
    let l3 = t2._;
    l3 ? n2 && l3 === 1 ? s = false : go(o, t2, n2) : (s = !t2.$stable, ho(t2, o)), i = t2;
  } else t2 && (_o(e, t2), i = { default: 1 });
  if (s) for (let l3 in o) !zn(l3) && i[l3] == null && delete o[l3];
};
function Ni() {
  let e = [];
  typeof __VUE_OPTIONS_API__ != "boolean" && (Ce().__VUE_OPTIONS_API__ = true), typeof __VUE_PROD_DEVTOOLS__ != "boolean" && (Ce().__VUE_PROD_DEVTOOLS__ = false), typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ != "boolean" && (Ce().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false);
}
var re3 = Oo;
function Rl(e) {
  return Eo(e);
}
function Eo(e, t2) {
  Ni();
  let n2 = Ce();
  n2.__VUE__ = true, __VUE_PROD_DEVTOOLS__ && Wn(n2.__VUE_DEVTOOLS_GLOBAL_HOOK__, n2);
  let { insert: r2, remove: o, patchProp: s, createElement: i, createText: l3, createComment: u2, setText: h5, setElementText: p3, parentNode: a2, nextSibling: g8, setScopeId: y8 = ae, insertStaticContent: O6 } = e, N4 = (c3, f3, _5, b7 = null, v6 = null, V6 = null, k7 = void 0, A5 = null, $5 = !!f3.dynamicChildren) => {
    if (c3 === f3) return;
    c3 && !De(c3, f3) && (b7 = Mt4(c3), Le4(c3, v6, V6, true), c3 = null), f3.patchFlag === -2 && ($5 = false, f3.dynamicChildren = null);
    let { type: D6, ref: j5, shapeFlag: P6 } = f3;
    switch (D6) {
      case Be3:
        U5(c3, f3, _5, b7);
        break;
      case oe3:
        L5(c3, f3, _5, b7);
        break;
      case at:
        c3 == null && w4(f3, _5, b7, k7);
        break;
      case ce3:
        q5(c3, f3, _5, b7, v6, V6, k7, A5, $5);
        break;
      default:
        P6 & 1 ? C5(c3, f3, _5, b7, v6, V6, k7, A5, $5) : P6 & 6 ? z5(c3, f3, _5, b7, v6, V6, k7, A5, $5) : (P6 & 64 || P6 & 128) && D6.process(c3, f3, _5, b7, v6, V6, k7, A5, $5, rt4);
    }
    j5 != null && v6 ? lt2(j5, c3 && c3.ref, V6, f3 || c3, !f3) : j5 == null && c3 && c3.ref != null && lt2(c3.ref, null, V6, c3, true);
  }, U5 = (c3, f3, _5, b7) => {
    if (c3 == null) r2(f3.el = l3(f3.children), _5, b7);
    else {
      let v6 = f3.el = c3.el;
      f3.children !== c3.children && h5(v6, f3.children);
    }
  }, L5 = (c3, f3, _5, b7) => {
    c3 == null ? r2(f3.el = u2(f3.children || ""), _5, b7) : f3.el = c3.el;
  }, w4 = (c3, f3, _5, b7) => {
    [c3.el, c3.anchor] = O6(c3.children, f3, _5, b7, c3.el, c3.anchor);
  }, d4 = (c3, f3, _5, b7) => {
    if (f3.children !== c3.children) {
      let v6 = g8(c3.anchor);
      m7(c3), [f3.el, f3.anchor] = O6(f3.children, _5, v6, b7);
    } else f3.el = c3.el, f3.anchor = c3.anchor;
  }, E6 = ({ el: c3, anchor: f3 }, _5, b7) => {
    let v6;
    for (; c3 && c3 !== f3; ) v6 = g8(c3), r2(c3, _5, b7), c3 = v6;
    r2(f3, _5, b7);
  }, m7 = ({ el: c3, anchor: f3 }) => {
    let _5;
    for (; c3 && c3 !== f3; ) _5 = g8(c3), o(c3), c3 = _5;
    o(f3);
  }, C5 = (c3, f3, _5, b7, v6, V6, k7, A5, $5) => {
    if (f3.type === "svg" ? k7 = "svg" : f3.type === "math" && (k7 = "mathml"), c3 == null) R6(f3, _5, b7, v6, V6, k7, A5, $5);
    else {
      let D6 = c3.el && c3.el._isVueCE ? c3.el : null;
      try {
        D6 && D6._beginPatch(), T8(c3, f3, v6, V6, k7, A5, $5);
      } finally {
        D6 && D6._endPatch();
      }
    }
  }, R6 = (c3, f3, _5, b7, v6, V6, k7, A5) => {
    let $5, D6, { props: j5, shapeFlag: P6, transition: F7, dirs: B6 } = c3;
    if ($5 = c3.el = i(c3.type, V6, j5 && j5.is, j5), P6 & 8 ? p3($5, c3.children) : P6 & 16 && x10(c3.children, $5, null, b7, v6, On(c3, V6), k7, A5), B6 && $e3(c3, null, b7, "created"), I4($5, c3, c3.scopeId, k7, b7), j5) {
      for (let ee4 in j5) ee4 !== "value" && !Ee(ee4) && s($5, ee4, null, j5[ee4], V6, b7);
      "value" in j5 && s($5, "value", null, j5.value, V6), (D6 = j5.onVnodeBeforeMount) && Ee3(D6, b7, c3);
    }
    __VUE_PROD_DEVTOOLS__ && (Oe($5, "__vnode", c3, true), Oe($5, "__vueParentComponent", b7, true)), B6 && $e3(c3, null, b7, "beforeMount");
    let G4 = mo(v6, F7);
    G4 && F7.beforeEnter($5), r2($5, f3, _5), ((D6 = j5 && j5.onVnodeMounted) || G4 || B6) && re3(() => {
      D6 && Ee3(D6, b7, c3), G4 && F7.enter($5), B6 && $e3(c3, null, b7, "mounted");
    }, v6);
  }, I4 = (c3, f3, _5, b7, v6) => {
    if (_5 && y8(c3, _5), b7) for (let V6 = 0; V6 < b7.length; V6++) y8(c3, b7[V6]);
    if (v6) {
      let V6 = v6.subTree;
      if (f3 === V6 || en(V6.type) && (V6.ssContent === f3 || V6.ssFallback === f3)) {
        let k7 = v6.vnode;
        I4(c3, k7, k7.scopeId, k7.slotScopeIds, v6.parent);
      }
    }
  }, x10 = (c3, f3, _5, b7, v6, V6, k7, A5, $5 = 0) => {
    for (let D6 = $5; D6 < c3.length; D6++) {
      let j5 = c3[D6] = A5 ? Se3(c3[D6]) : me3(c3[D6]);
      N4(null, j5, f3, _5, b7, v6, V6, k7, A5);
    }
  }, T8 = (c3, f3, _5, b7, v6, V6, k7) => {
    let A5 = f3.el = c3.el;
    __VUE_PROD_DEVTOOLS__ && (A5.__vnode = f3);
    let { patchFlag: $5, dynamicChildren: D6, dirs: j5 } = f3;
    $5 |= c3.patchFlag & 16;
    let P6 = c3.props || ie, F7 = f3.props || ie, B6;
    if (_5 && qe2(_5, false), (B6 = F7.onVnodeBeforeUpdate) && Ee3(B6, _5, f3, c3), j5 && $e3(f3, c3, _5, "beforeUpdate"), _5 && qe2(_5, true), (P6.innerHTML && F7.innerHTML == null || P6.textContent && F7.textContent == null) && p3(A5, ""), D6 ? M6(c3.dynamicChildren, D6, A5, _5, b7, On(f3, v6), V6) : k7 || Q4(c3, f3, A5, null, _5, b7, On(f3, v6), V6, false), $5 > 0) {
      if ($5 & 16) Y6(A5, P6, F7, _5, v6);
      else if ($5 & 2 && P6.class !== F7.class && s(A5, "class", null, F7.class, v6), $5 & 4 && s(A5, "style", P6.style, F7.style, v6), $5 & 8) {
        let G4 = f3.dynamicProps;
        for (let ee4 = 0; ee4 < G4.length; ee4++) {
          let Z6 = G4[ee4], ge5 = P6[Z6], fe3 = F7[Z6];
          (fe3 !== ge5 || Z6 === "value") && s(A5, Z6, ge5, fe3, v6, _5);
        }
      }
      $5 & 1 && c3.children !== f3.children && p3(A5, f3.children);
    } else !k7 && D6 == null && Y6(A5, P6, F7, _5, v6);
    ((B6 = F7.onVnodeUpdated) || j5) && re3(() => {
      B6 && Ee3(B6, _5, f3, c3), j5 && $e3(f3, c3, _5, "updated");
    }, b7);
  }, M6 = (c3, f3, _5, b7, v6, V6, k7) => {
    for (let A5 = 0; A5 < f3.length; A5++) {
      let $5 = c3[A5], D6 = f3[A5], j5 = $5.el && ($5.type === ce3 || !De($5, D6) || $5.shapeFlag & 198) ? a2($5.el) : _5;
      N4($5, D6, j5, null, b7, v6, V6, k7, true);
    }
  }, Y6 = (c3, f3, _5, b7, v6) => {
    if (f3 !== _5) {
      if (f3 !== ie) for (let V6 in f3) !Ee(V6) && !(V6 in _5) && s(c3, V6, f3[V6], null, v6, b7);
      for (let V6 in _5) {
        if (Ee(V6)) continue;
        let k7 = _5[V6], A5 = f3[V6];
        k7 !== A5 && V6 !== "value" && s(c3, V6, A5, k7, v6, b7);
      }
      "value" in _5 && s(c3, "value", f3.value, _5.value, v6);
    }
  }, q5 = (c3, f3, _5, b7, v6, V6, k7, A5, $5) => {
    let D6 = f3.el = c3 ? c3.el : l3(""), j5 = f3.anchor = c3 ? c3.anchor : l3(""), { patchFlag: P6, dynamicChildren: F7, slotScopeIds: B6 } = f3;
    B6 && (A5 = A5 ? A5.concat(B6) : B6), c3 == null ? (r2(D6, _5, b7), r2(j5, _5, b7), x10(f3.children || [], _5, j5, v6, V6, k7, A5, $5)) : P6 > 0 && P6 & 64 && F7 && c3.dynamicChildren && c3.dynamicChildren.length === F7.length ? (M6(c3.dynamicChildren, F7, _5, v6, V6, k7, A5), (f3.key != null || v6 && f3 === v6.subTree) && tr(c3, f3, true)) : Q4(c3, f3, _5, j5, v6, V6, k7, A5, $5);
  }, z5 = (c3, f3, _5, b7, v6, V6, k7, A5, $5) => {
    f3.slotScopeIds = A5, c3 == null ? f3.shapeFlag & 512 ? v6.ctx.activate(f3, _5, b7, k7, $5) : ne6(f3, _5, b7, v6, V6, k7, $5) : H6(c3, f3, $5);
  }, ne6 = (c3, f3, _5, b7, v6, V6, k7) => {
    let A5 = c3.component = To(c3, b7, v6);
    if (Rt2(c3) && (A5.ctx.renderer = rt4), $o(A5, false, k7), A5.asyncDep) {
      if (v6 && v6.registerDep(A5, W6, k7), !c3.el) {
        let $5 = A5.subTree = se3(oe3);
        L5(null, $5, f3, _5), c3.placeholder = $5.el;
      }
    } else W6(A5, c3, f3, _5, v6, V6, k7);
  }, H6 = (c3, f3, _5) => {
    let b7 = f3.component = c3.component;
    if (di(c3, f3, _5)) if (b7.asyncDep && !b7.asyncResolved) {
      S5(b7, f3, _5);
      return;
    } else b7.next = f3, b7.update();
    else f3.el = c3.el, b7.vnode = f3;
  }, W6 = (c3, f3, _5, b7, v6, V6, k7) => {
    let A5 = () => {
      if (c3.isMounted) {
        let { next: P6, bu: F7, u: B6, parent: G4, vnode: ee4 } = c3;
        {
          let ye4 = yo(c3);
          if (ye4) {
            P6 && (P6.el = ee4.el, S5(c3, P6, k7)), ye4.asyncDep.then(() => {
              re3(() => {
                c3.isUnmounted || D6();
              }, v6);
            });
            return;
          }
        }
        let Z6 = P6, ge5;
        qe2(c3, false), P6 ? (P6.el = ee4.el, S5(c3, P6, k7)) : P6 = ee4, F7 && Ne(F7), (ge5 = P6.props && P6.props.onVnodeBeforeUpdate) && Ee3(ge5, G4, P6, ee4), qe2(c3, true);
        let fe3 = qt2(c3), be4 = c3.subTree;
        c3.subTree = fe3, N4(be4, fe3, a2(be4.el), Mt4(be4), c3, v6, V6), P6.el = fe3.el, Z6 === null && dn(c3, fe3.el), B6 && re3(B6, v6), (ge5 = P6.props && P6.props.onVnodeUpdated) && re3(() => Ee3(ge5, G4, P6, ee4), v6), __VUE_PROD_DEVTOOLS__ && Ur(c3);
      } else {
        let P6, { el: F7, props: B6 } = f3, { bm: G4, m: ee4, parent: Z6, root: ge5, type: fe3 } = c3, be4 = Ie2(f3);
        if (qe2(c3, false), G4 && Ne(G4), !be4 && (P6 = B6 && B6.onVnodeBeforeMount) && Ee3(P6, Z6, f3), qe2(c3, true), F7 && gn) {
          let ye4 = () => {
            c3.subTree = qt2(c3), gn(F7, c3.subTree, c3, v6, null);
          };
          be4 && fe3.__asyncHydrate ? fe3.__asyncHydrate(F7, c3, ye4) : ye4();
        } else {
          ge5.ce && ge5.ce._hasShadowRoot() && ge5.ce._injectChildStyle(fe3, c3.parent ? c3.parent.type : void 0);
          let ye4 = c3.subTree = qt2(c3);
          N4(null, ye4, _5, b7, c3, v6, V6), f3.el = ye4.el;
        }
        if (ee4 && re3(ee4, v6), !be4 && (P6 = B6 && B6.onVnodeMounted)) {
          let ye4 = f3;
          re3(() => Ee3(P6, Z6, ye4), v6);
        }
        (f3.shapeFlag & 256 || Z6 && Ie2(Z6.vnode) && Z6.vnode.shapeFlag & 256) && c3.a && re3(c3.a, v6), c3.isMounted = true, __VUE_PROD_DEVTOOLS__ && wn(c3), f3 = _5 = b7 = null;
      }
    };
    c3.scope.on();
    let $5 = c3.effect = new W2(A5);
    c3.scope.off();
    let D6 = c3.update = $5.run.bind($5), j5 = c3.job = $5.runIfDirty.bind($5);
    j5.i = c3, j5.id = c3.uid, $5.scheduler = () => Bn(j5), qe2(c3, true), D6();
  }, S5 = (c3, f3, _5) => {
    f3.component = c3;
    let b7 = c3.vnode.props;
    c3.vnode = f3, c3.next = null, _i(c3, f3.props, b7, _5), yi(c3, f3.children, _5), Ue(), ur(c3), $e2();
  }, Q4 = (c3, f3, _5, b7, v6, V6, k7, A5, $5 = false) => {
    let D6 = c3 && c3.children, j5 = c3 ? c3.shapeFlag : 0, P6 = f3.children, { patchFlag: F7, shapeFlag: B6 } = f3;
    if (F7 > 0) {
      if (F7 & 128) {
        Et5(D6, P6, _5, b7, v6, V6, k7, A5, $5);
        return;
      } else if (F7 & 256) {
        Ke6(D6, P6, _5, b7, v6, V6, k7, A5, $5);
        return;
      }
    }
    B6 & 8 ? (j5 & 16 && mt3(D6, v6, V6), P6 !== D6 && p3(_5, P6)) : j5 & 16 ? B6 & 16 ? Et5(D6, P6, _5, b7, v6, V6, k7, A5, $5) : mt3(D6, v6, V6, true) : (j5 & 8 && p3(_5, ""), B6 & 16 && x10(P6, _5, b7, v6, V6, k7, A5, $5));
  }, Ke6 = (c3, f3, _5, b7, v6, V6, k7, A5, $5) => {
    c3 = c3 || se, f3 = f3 || se;
    let D6 = c3.length, j5 = f3.length, P6 = Math.min(D6, j5), F7;
    for (F7 = 0; F7 < P6; F7++) {
      let B6 = f3[F7] = $5 ? Se3(f3[F7]) : me3(f3[F7]);
      N4(c3[F7], B6, _5, null, v6, V6, k7, A5, $5);
    }
    D6 > j5 ? mt3(c3, v6, V6, true, false, P6) : x10(f3, _5, b7, v6, V6, k7, A5, $5, P6);
  }, Et5 = (c3, f3, _5, b7, v6, V6, k7, A5, $5) => {
    let D6 = 0, j5 = f3.length, P6 = c3.length - 1, F7 = j5 - 1;
    for (; D6 <= P6 && D6 <= F7; ) {
      let B6 = c3[D6], G4 = f3[D6] = $5 ? Se3(f3[D6]) : me3(f3[D6]);
      if (De(B6, G4)) N4(B6, G4, _5, null, v6, V6, k7, A5, $5);
      else break;
      D6++;
    }
    for (; D6 <= P6 && D6 <= F7; ) {
      let B6 = c3[P6], G4 = f3[F7] = $5 ? Se3(f3[F7]) : me3(f3[F7]);
      if (De(B6, G4)) N4(B6, G4, _5, null, v6, V6, k7, A5, $5);
      else break;
      P6--, F7--;
    }
    if (D6 > P6) {
      if (D6 <= F7) {
        let B6 = F7 + 1, G4 = B6 < j5 ? f3[B6].el : b7;
        for (; D6 <= F7; ) N4(null, f3[D6] = $5 ? Se3(f3[D6]) : me3(f3[D6]), _5, G4, v6, V6, k7, A5, $5), D6++;
      }
    } else if (D6 > F7) for (; D6 <= P6; ) Le4(c3[D6], v6, V6, true), D6++;
    else {
      let B6 = D6, G4 = D6, ee4 = /* @__PURE__ */ new Map();
      for (D6 = G4; D6 <= F7; D6++) {
        let Ne5 = f3[D6] = $5 ? Se3(f3[D6]) : me3(f3[D6]);
        Ne5.key != null && ee4.set(Ne5.key, D6);
      }
      let Z6, ge5 = 0, fe3 = F7 - G4 + 1, be4 = false, ye4 = 0, yt5 = new Array(fe3);
      for (D6 = 0; D6 < fe3; D6++) yt5[D6] = 0;
      for (D6 = B6; D6 <= P6; D6++) {
        let Ne5 = c3[D6];
        if (ge5 >= fe3) {
          Le4(Ne5, v6, V6, true);
          continue;
        }
        let xe4;
        if (Ne5.key != null) xe4 = ee4.get(Ne5.key);
        else for (Z6 = G4; Z6 <= F7; Z6++) if (yt5[Z6 - G4] === 0 && De(Ne5, f3[Z6])) {
          xe4 = Z6;
          break;
        }
        xe4 === void 0 ? Le4(Ne5, v6, V6, true) : (yt5[xe4 - G4] = D6 + 1, xe4 >= ye4 ? ye4 = xe4 : be4 = true, N4(Ne5, f3[xe4], _5, null, v6, V6, k7, A5, $5), ge5++);
      }
      let sr2 = be4 ? vi(yt5) : se;
      for (Z6 = sr2.length - 1, D6 = fe3 - 1; D6 >= 0; D6--) {
        let Ne5 = G4 + D6, xe4 = f3[Ne5], ir2 = f3[Ne5 + 1], lr2 = Ne5 + 1 < j5 ? ir2.el || No(ir2) : b7;
        yt5[D6] === 0 ? N4(null, xe4, _5, lr2, v6, V6, k7, A5, $5) : be4 && (Z6 < 0 || D6 !== sr2[Z6] ? nt5(xe4, _5, lr2, 2) : Z6--);
      }
    }
  }, nt5 = (c3, f3, _5, b7, v6 = null) => {
    let { el: V6, type: k7, transition: A5, children: $5, shapeFlag: D6 } = c3;
    if (D6 & 6) {
      nt5(c3.component.subTree, f3, _5, b7);
      return;
    }
    if (D6 & 128) {
      c3.suspense.move(f3, _5, b7);
      return;
    }
    if (D6 & 64) {
      k7.move(c3, f3, _5, rt4);
      return;
    }
    if (k7 === ce3) {
      r2(V6, f3, _5);
      for (let P6 = 0; P6 < $5.length; P6++) nt5($5[P6], f3, _5, b7);
      r2(c3.anchor, f3, _5);
      return;
    }
    if (k7 === at) {
      E6(c3, f3, _5);
      return;
    }
    if (b7 !== 2 && D6 & 1 && A5) if (b7 === 0) A5.beforeEnter(V6), r2(V6, f3, _5), re3(() => A5.enter(V6), v6);
    else {
      let { leave: P6, delayLeave: F7, afterLeave: B6 } = A5, G4 = () => {
        c3.ctx.isUnmounted ? o(V6) : r2(V6, f3, _5);
      }, ee4 = () => {
        V6._isLeaving && V6[Ae3](true), P6(V6, () => {
          G4(), B6 && B6();
        });
      };
      F7 ? F7(V6, G4, ee4) : ee4();
    }
    else r2(V6, f3, _5);
  }, Le4 = (c3, f3, _5, b7 = false, v6 = false) => {
    let { type: V6, props: k7, ref: A5, children: $5, dynamicChildren: D6, shapeFlag: j5, patchFlag: P6, dirs: F7, cacheIndex: B6 } = c3;
    if (P6 === -2 && (v6 = false), A5 != null && (Ue(), lt2(A5, null, _5, c3, true), $e2()), B6 != null && (f3.renderCache[B6] = void 0), j5 & 256) {
      f3.ctx.deactivate(c3);
      return;
    }
    let G4 = j5 & 1 && F7, ee4 = !Ie2(c3), Z6;
    if (ee4 && (Z6 = k7 && k7.onVnodeBeforeUnmount) && Ee3(Z6, f3, c3), j5 & 6) Ro2(c3.component, _5, b7);
    else {
      if (j5 & 128) {
        c3.suspense.unmount(_5, b7);
        return;
      }
      G4 && $e3(c3, null, f3, "beforeUnmount"), j5 & 64 ? c3.type.remove(c3, f3, _5, rt4, b7) : D6 && !D6.hasOnce && (V6 !== ce3 || P6 > 0 && P6 & 64) ? mt3(D6, f3, _5, false, true) : (V6 === ce3 && P6 & 384 || !v6 && j5 & 16) && mt3($5, f3, _5), b7 && rr(c3);
    }
    (ee4 && (Z6 = k7 && k7.onVnodeUnmounted) || G4) && re3(() => {
      Z6 && Ee3(Z6, f3, c3), G4 && $e3(c3, null, f3, "unmounted");
    }, _5);
  }, rr = (c3) => {
    let { type: f3, el: _5, anchor: b7, transition: v6 } = c3;
    if (f3 === ce3) {
      So(_5, b7);
      return;
    }
    if (f3 === at) {
      m7(c3);
      return;
    }
    let V6 = () => {
      o(_5), v6 && !v6.persisted && v6.afterLeave && v6.afterLeave();
    };
    if (c3.shapeFlag & 1 && v6 && !v6.persisted) {
      let { leave: k7, delayLeave: A5 } = v6, $5 = () => k7(_5, V6);
      A5 ? A5(c3.el, V6, $5) : $5();
    } else V6();
  }, So = (c3, f3) => {
    let _5;
    for (; c3 !== f3; ) _5 = g8(c3), o(c3), c3 = _5;
    o(f3);
  }, Ro2 = (c3, f3, _5) => {
    let { bum: b7, scope: v6, job: V6, subTree: k7, um: A5, m: $5, a: D6 } = c3;
    zt2($5), zt2(D6), b7 && Ne(b7), v6.stop(), V6 && (V6.flags |= 8, Le4(k7, c3, f3, _5)), A5 && re3(A5, f3), re3(() => {
      c3.isUnmounted = true;
    }, f3), __VUE_PROD_DEVTOOLS__ && vs(c3);
  }, mt3 = (c3, f3, _5, b7 = false, v6 = false, V6 = 0) => {
    for (let k7 = V6; k7 < c3.length; k7++) Le4(c3[k7], f3, _5, b7, v6);
  }, Mt4 = (c3) => {
    if (c3.shapeFlag & 6) return Mt4(c3.component.subTree);
    if (c3.shapeFlag & 128) return c3.suspense.next();
    let f3 = g8(c3.anchor || c3.el), _5 = f3 && f3[Br];
    return _5 ? g8(_5) : f3;
  }, hn2 = false, or = (c3, f3, _5) => {
    let b7;
    c3 == null ? f3._vnode && (Le4(f3._vnode, null, null, true), b7 = f3._vnode.component) : N4(f3._vnode || null, c3, f3, null, null, null, _5), f3._vnode = c3, hn2 || (hn2 = true, ur(b7), Xt2(), hn2 = false);
  }, rt4 = { p: N4, um: Le4, m: nt5, r: rr, mt: ne6, mc: x10, pc: Q4, pbc: M6, n: Mt4, o: e }, _n2, gn;
  return t2 && ([_n2, gn] = t2(rt4)), { render: or, hydrate: _n2, createApp: li(or, _n2) };
}
function On({ type: e, props: t2 }, n2) {
  return n2 === "svg" && e === "foreignObject" || n2 === "mathml" && e === "annotation-xml" && t2 && t2.encoding && t2.encoding.includes("html") ? void 0 : n2;
}
function qe2({ effect: e, job: t2 }, n2) {
  n2 ? (e.flags |= 32, t2.flags |= 4) : (e.flags &= -33, t2.flags &= -5);
}
function mo(e, t2) {
  return (!e || e && !e.pendingBranch) && t2 && !t2.persisted;
}
function tr(e, t2, n2 = false) {
  let r2 = e.children, o = t2.children;
  if (d(r2) && d(o)) for (let s = 0; s < r2.length; s++) {
    let i = r2[s], l3 = o[s];
    l3.shapeFlag & 1 && !l3.dynamicChildren && ((l3.patchFlag <= 0 || l3.patchFlag === 32) && (l3 = o[s] = Se3(o[s]), l3.el = i.el), !n2 && l3.patchFlag !== -2 && tr(i, l3)), l3.type === Be3 && (l3.patchFlag === -1 && (l3 = o[s] = Se3(l3)), l3.el = i.el), l3.type === oe3 && !l3.el && (l3.el = i.el);
  }
}
function vi(e) {
  let t2 = e.slice(), n2 = [0], r2, o, s, i, l3, u2 = e.length;
  for (r2 = 0; r2 < u2; r2++) {
    let h5 = e[r2];
    if (h5 !== 0) {
      if (o = n2[n2.length - 1], e[o] < h5) {
        t2[r2] = o, n2.push(r2);
        continue;
      }
      for (s = 0, i = n2.length - 1; s < i; ) l3 = s + i >> 1, e[n2[l3]] < h5 ? s = l3 + 1 : i = l3;
      h5 < e[n2[s]] && (s > 0 && (t2[r2] = n2[s - 1]), n2[s] = r2);
    }
  }
  for (s = n2.length, i = n2[s - 1]; s-- > 0; ) n2[s] = i, i = t2[i];
  return n2;
}
function yo(e) {
  let t2 = e.subTree.component;
  if (t2) return t2.asyncDep && !t2.asyncResolved ? t2 : yo(t2);
}
function zt2(e) {
  if (e) for (let t2 = 0; t2 < e.length; t2++) e[t2].flags |= 8;
}
function No(e) {
  if (e.placeholder) return e.placeholder;
  let t2 = e.component;
  return t2 ? No(t2.subTree) : null;
}
var en = (e) => e.__isSuspense;
function Oo(e, t2) {
  t2 && t2.pendingBranch ? d(e) ? t2.effects.push(...e) : t2.effects.push(e) : Vn(e);
}
var ce3 = Symbol.for("v-fgt");
var Be3 = Symbol.for("v-txt");
var oe3 = Symbol.for("v-cmt");
var at = Symbol.for("v-stc");
var Tt2 = [];
var pe2 = null;
var et2 = 1;
function nn(e, t2 = false) {
  et2 += e, e < 0 && pe2 && t2 && (pe2.hasOnce = true);
}
function We3(e) {
  return e ? e.__v_isVNode === true : false;
}
function De(e, t2) {
  return e.type === t2.type && e.key === t2.key;
}
var Do = ({ key: e }) => e ?? null;
var Jt2 = ({ ref: e, ref_key: t2, ref_for: n2 }) => (typeof e == "number" && (e = "" + e), e != null ? p(e) || g2(e) || g(e) ? { i: ue3, r: e, k: t2, f: !!n2 } : e : null);
function wo(e, t2 = null, n2 = null, r2 = 0, o = null, s = e === ce3 ? 0 : 1, i = false, l3 = false) {
  let u2 = { __v_isVNode: true, __v_skip: true, type: e, props: t2, key: t2 && Do(t2), ref: t2 && Jt2(t2), scopeId: un, slotScopeIds: null, children: n2, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: r2, dynamicProps: o, dynamicChildren: null, appContext: null, ctx: ue3 };
  return l3 ? (nr(u2, n2), s & 128 && e.normalize(u2)) : n2 && (u2.shapeFlag |= p(n2) ? 8 : 16), et2 > 0 && !i && pe2 && (u2.patchFlag > 0 || s & 6) && u2.patchFlag !== 32 && pe2.push(u2), u2;
}
var se3 = Ci;
function Ci(e, t2 = null, n2 = null, r2 = 0, o = null, s = false) {
  if ((!e || e === to) && (e = oe3), We3(e)) {
    let l3 = He3(e, t2, true);
    return n2 && nr(l3, n2), et2 > 0 && !s && pe2 && (l3.shapeFlag & 6 ? pe2[pe2.indexOf(e)] = l3 : pe2.push(l3)), l3.patchFlag = -2, l3;
  }
  if (Fi(e) && (e = e.__vccOpts), t2) {
    t2 = $i(t2);
    let { class: l3, style: u2 } = t2;
    l3 && !p(l3) && (t2.class = R(l3)), f(u2) && (qe(u2) && !d(u2) && (u2 = fe({}, u2)), t2.style = _(u2));
  }
  let i = p(e) ? 1 : en(e) ? 128 : Wr(e) ? 64 : f(e) ? 4 : g(e) ? 2 : 0;
  return wo(e, t2, n2, r2, o, i, s, true);
}
function $i(e) {
  return e ? qe(e) || uo(e) ? fe({}, e) : e : null;
}
function He3(e, t2, n2 = false, r2 = false) {
  let { props: o, ref: s, patchFlag: i, children: l3, transition: u2 } = e, h5 = t2 ? Ai(o || {}, t2) : o, p3 = { __v_isVNode: true, __v_skip: true, type: e.type, props: h5, key: h5 && Do(h5), ref: t2 && t2.ref ? n2 && s ? d(s) ? s.concat(Jt2(t2)) : [s, Jt2(t2)] : Jt2(t2) : s, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: l3, target: e.target, targetStart: e.targetStart, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t2 && e.type !== ce3 ? i === -1 ? 16 : i | 16 : i, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: u2, component: e.component, suspense: e.suspense, ssContent: e.ssContent && He3(e.ssContent), ssFallback: e.ssFallback && He3(e.ssFallback), placeholder: e.placeholder, el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
  return u2 && r2 && pt2(p3, u2.clone(p3)), p3;
}
function xo(e = " ", t2 = 0) {
  return se3(Be3, null, e, t2);
}
function me3(e) {
  return e == null || typeof e == "boolean" ? se3(oe3) : d(e) ? se3(ce3, null, e.slice()) : We3(e) ? Se3(e) : se3(Be3, null, String(e));
}
function Se3(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : He3(e);
}
function nr(e, t2) {
  let n2 = 0, { shapeFlag: r2 } = e;
  if (t2 == null) t2 = null;
  else if (d(t2)) n2 = 16;
  else if (typeof t2 == "object") if (r2 & 65) {
    let o = t2.default;
    o && (o._c && (o._d = false), nr(e, o()), o._c && (o._d = true));
    return;
  } else {
    n2 = 32;
    let o = t2._;
    !o && !uo(t2) ? t2._ctx = ue3 : o === 3 && ue3 && (ue3.slots._ === 1 ? t2._ = 1 : (t2._ = 2, e.patchFlag |= 1024));
  }
  else g(t2) ? (t2 = { default: t2, _ctx: ue3 }, n2 = 32) : (t2 = String(t2), r2 & 64 ? (n2 = 16, t2 = [xo(t2)]) : n2 = 8);
  e.children = t2, e.shapeFlag |= n2;
}
function Ai(...e) {
  let t2 = {};
  for (let n2 = 0; n2 < e.length; n2++) {
    let r2 = e[n2];
    for (let o in r2) if (o === "class") t2.class !== r2.class && (t2.class = R([t2.class, r2.class]));
    else if (o === "style") t2.style = _([t2.style, r2.style]);
    else if (le(o)) {
      let s = t2[o], i = r2[o];
      i && s !== i && !(d(s) && s.includes(i)) && (t2[o] = s ? [].concat(s, i) : i);
    } else o !== "" && (t2[o] = r2[o]);
  }
  return t2;
}
function Ee3(e, t2, n2, r2 = null) {
  ke3(e, t2, 7, [n2, r2]);
}
var ki = oo();
var Pi = 0;
function To(e, t2, n2) {
  let r2 = e.type, o = (t2 ? t2.appContext : e.appContext) || ki, s = { uid: Pi++, vnode: e, type: r2, parent: t2, appContext: o, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new ge2(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t2 ? t2.provides : Object.create(o.provides), ids: t2 ? t2.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: po(r2, o), emitsOptions: io(r2, o), emit: null, emitted: null, propsDefaults: ie, inheritAttrs: r2.inheritAttrs, ctx: ie, data: ie, props: ie, attrs: ie, slots: ie, refs: ie, setupState: ie, setupContext: null, suspense: n2, suspenseId: n2 ? n2.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
  return s.ctx = { _: s }, s.root = t2 ? t2.root : s, s.emit = ci.bind(null, s), e.ce && e.ce(s), s;
}
var ae3 = null;
var Pe2 = () => ae3 || ue3;
var rn;
var ut;
{
  let e = Ce(), t2 = (n2, r2) => {
    let o;
    return (o = e[n2]) || (o = e[n2] = []), o.push(r2), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  rn = t2("__VUE_INSTANCE_SETTERS__", (n2) => ae3 = n2), ut = t2("__VUE_SSR_SETTERS__", (n2) => tt = n2);
}
var gt2 = (e) => {
  let t2 = ae3;
  return rn(e), e.scope.on(), () => {
    e.scope.off(), rn(t2);
  };
};
var on = () => {
  ae3 && ae3.scope.off(), rn(null);
};
function Co(e) {
  return e.vnode.shapeFlag & 4;
}
var tt = false;
function $o(e, t2 = false, n2 = false) {
  t2 && ut(t2);
  let { props: r2, children: o } = e.vnode, s = Co(e);
  hi(e, r2, s, t2), mi(e, o, n2 || t2);
  let i = s ? Si(e, t2) : void 0;
  return t2 && ut(false), i;
}
function Si(e, t2) {
  let n2 = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, An);
  let { setup: r2 } = n2;
  if (r2) {
    Ue();
    let o = e.setupContext = r2.length > 1 ? ko(e) : null, s = gt2(e), i = ht2(r2, e, 0, [e.props, o]), l3 = he(i);
    if ($e2(), s(), (l3 || e.sp) && !Ie2(e) && Yn(e), l3) {
      if (i.then(on, on), t2) return i.then((u2) => {
        Mn(e, u2, t2);
      }).catch((u2) => {
        _t2(u2, e, 0);
      });
      e.asyncDep = i;
    } else Mn(e, i, t2);
  } else Ao(e, t2);
}
function Mn(e, t2, n2) {
  g(t2) ? e.type.__ssrInlineRender ? e.ssrRender = t2 : e.render = t2 : f(t2) && (__VUE_PROD_DEVTOOLS__ && (e.devtoolsRawSetupState = t2), e.setupState = Yt(t2)), Ao(e, n2);
}
var sn;
var Fn;
function Ao(e, t2, n2) {
  let r2 = e.type;
  if (!e.render) {
    if (!t2 && sn && !r2.render) {
      let o = r2.template || __VUE_OPTIONS_API__ && Zn(e).template;
      if (o) {
        let { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l3, compilerOptions: u2 } = r2, h5 = fe(fe({ isCustomElement: s, delimiters: l3 }, i), u2);
        r2.render = sn(o, h5);
      }
    }
    e.render = r2.render || ae, Fn && Fn(e);
  }
  if (__VUE_OPTIONS_API__) {
    let o = gt2(e);
    Ue();
    try {
      ti(e);
    } finally {
      $e2(), o();
    }
  }
}
var Ri = { get(e, t2) {
  return w(e, "get", ""), e[t2];
} };
function ko(e) {
  let t2 = (n2) => {
    e.exposed = n2 || {};
  };
  return { attrs: new Proxy(e.attrs, Ri), slots: e.slots, emit: e.emit, expose: t2 };
}
function It(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yt(Ut(e.exposed)), { get(t2, n2) {
    if (n2 in t2) return t2[n2];
    if (n2 in xt2) return xt2[n2](e);
  }, has(t2, n2) {
    return n2 in t2 || n2 in xt2;
  } })) : e.proxy;
}
function Fi(e) {
  return g(e) && "__vccOpts" in e;
}
var Hi = (e, t2) => Qt(e, t2, tt);
function Wl(e, t2, n2) {
  try {
    nn(-1);
    let r2 = arguments.length;
    return r2 === 2 ? f(t2) && !d(t2) ? We3(t2) ? se3(e, null, [t2]) : se3(e, t2) : se3(e, null, t2) : (r2 > 3 ? n2 = Array.prototype.slice.call(arguments, 2) : r2 === 3 && We3(n2) && (n2 = [n2]), se3(e, t2, n2));
  } finally {
    nn(1);
  }
}
var Tr = "3.5.30";

// esm:https://esm.sh/*@vue/runtime-dom@3.5.30/esnext/runtime-dom.mjs
var Z2;
var dt2 = typeof window < "u" && window.trustedTypes;
if (dt2) try {
  Z2 = dt2.createPolicy("vue", { createHTML: (t2) => t2 });
} catch {
}
var Kt2 = Z2 ? (t2) => Z2.createHTML(t2) : (t2) => t2;
var Ke3 = "http://www.w3.org/2000/svg";
var We4 = "http://www.w3.org/1998/Math/MathML";
var y3 = typeof document < "u" ? document : null;
var ht3 = y3 && y3.createElement("template");
var ze4 = { insert: (t2, e, s) => {
  e.insertBefore(t2, s || null);
}, remove: (t2) => {
  let e = t2.parentNode;
  e && e.removeChild(t2);
}, createElement: (t2, e, s, n2) => {
  let o = e === "svg" ? y3.createElementNS(Ke3, t2) : e === "mathml" ? y3.createElementNS(We4, t2) : s ? y3.createElement(t2, { is: s }) : y3.createElement(t2);
  return t2 === "select" && n2 && n2.multiple != null && o.setAttribute("multiple", n2.multiple), o;
}, createText: (t2) => y3.createTextNode(t2), createComment: (t2) => y3.createComment(t2), setText: (t2, e) => {
  t2.nodeValue = e;
}, setElementText: (t2, e) => {
  t2.textContent = e;
}, parentNode: (t2) => t2.parentNode, nextSibling: (t2) => t2.nextSibling, querySelector: (t2) => y3.querySelector(t2), setScopeId(t2, e) {
  t2.setAttribute(e, "");
}, insertStaticContent(t2, e, s, n2, o, i) {
  let r2 = s ? s.previousSibling : e.lastChild;
  if (o && (o === i || o.nextSibling)) for (; e.insertBefore(o.cloneNode(true), s), !(o === i || !(o = o.nextSibling)); ) ;
  else {
    ht3.innerHTML = Kt2(n2 === "svg" ? `<svg>${t2}</svg>` : n2 === "mathml" ? `<math>${t2}</math>` : t2);
    let c3 = ht3.content;
    if (n2 === "svg" || n2 === "mathml") {
      let a2 = c3.firstChild;
      for (; a2.firstChild; ) c3.appendChild(a2.firstChild);
      c3.removeChild(a2);
    }
    e.insertBefore(c3, s);
  }
  return [r2 ? r2.nextSibling : e.firstChild, s ? s.previousSibling : e.lastChild];
} };
var S2 = "transition";
var M2 = "animation";
var R2 = Symbol("_vtc");
var Wt3 = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
var zt3 = fe({}, $s, Wt3);
var ke4 = (t2) => (t2.displayName = "Transition", t2.props = zt3, t2);
var js = ke4((t2, { slots: e }) => Wl(sl, kt2(t2), e));
var T2 = (t2, e = []) => {
  d(t2) ? t2.forEach((s) => s(...e)) : t2 && t2(...e);
};
var mt = (t2) => t2 ? d(t2) ? t2.some((e) => e.length > 1) : t2.length > 1 : false;
function kt2(t2) {
  let e = {};
  for (let u2 in t2) u2 in Wt3 || (e[u2] = t2[u2]);
  if (t2.css === false) return e;
  let { name: s = "v", type: n2, duration: o, enterFromClass: i = `${s}-enter-from`, enterActiveClass: r2 = `${s}-enter-active`, enterToClass: c3 = `${s}-enter-to`, appearFromClass: a2 = i, appearActiveClass: l3 = r2, appearToClass: p3 = c3, leaveFromClass: f3 = `${s}-leave-from`, leaveActiveClass: d4 = `${s}-leave-active`, leaveToClass: O6 = `${s}-leave-to` } = t2, V6 = Ge3(o), ae6 = V6 && V6[0], le4 = V6 && V6[1], { onBeforeEnter: ot5, onEnter: it4, onEnterCancelled: rt4, onLeave: ct5, onLeaveCancelled: ue5, onBeforeAppear: pe5 = ot5, onAppear: fe3 = it4, onAppearCancelled: de4 = rt4 } = e, k7 = (u2, h5, N4, j5) => {
    u2._enterCancelled = j5, v3(u2, h5 ? p3 : c3), v3(u2, h5 ? l3 : r2), N4 && N4();
  }, at4 = (u2, h5) => {
    u2._isLeaving = false, v3(u2, f3), v3(u2, O6), v3(u2, d4), h5 && h5();
  }, lt6 = (u2) => (h5, N4) => {
    let j5 = u2 ? fe3 : it4, ut5 = () => k7(h5, u2, N4);
    T2(j5, [h5, ut5]), _t3(() => {
      v3(h5, u2 ? a2 : i), g3(h5, u2 ? p3 : c3), mt(j5) || gt3(h5, n2, ae6, ut5);
    });
  };
  return fe(e, { onBeforeEnter(u2) {
    T2(ot5, [u2]), g3(u2, i), g3(u2, r2);
  }, onBeforeAppear(u2) {
    T2(pe5, [u2]), g3(u2, a2), g3(u2, l3);
  }, onEnter: lt6(false), onAppear: lt6(true), onLeave(u2, h5) {
    u2._isLeaving = true;
    let N4 = () => at4(u2, h5);
    g3(u2, f3), u2._enterCancelled ? (g3(u2, d4), Q(u2)) : (Q(u2), g3(u2, d4)), _t3(() => {
      u2._isLeaving && (v3(u2, f3), g3(u2, O6), mt(ct5) || gt3(u2, n2, le4, N4));
    }), T2(ct5, [u2, N4]);
  }, onEnterCancelled(u2) {
    k7(u2, false, void 0, true), T2(rt4, [u2]);
  }, onAppearCancelled(u2) {
    k7(u2, true, void 0, true), T2(de4, [u2]);
  }, onLeaveCancelled(u2) {
    at4(u2), T2(ue5, [u2]);
  } });
}
function Ge3(t2) {
  if (t2 == null) return null;
  if (f(t2)) return [q2(t2.enter), q2(t2.leave)];
  {
    let e = q2(t2);
    return [e, e];
  }
}
function q2(t2) {
  return ke(t2);
}
function g3(t2, e) {
  e.split(/\s+/).forEach((s) => s && t2.classList.add(s)), (t2[R2] || (t2[R2] = /* @__PURE__ */ new Set())).add(e);
}
function v3(t2, e) {
  e.split(/\s+/).forEach((n2) => n2 && t2.classList.remove(n2));
  let s = t2[R2];
  s && (s.delete(e), s.size || (t2[R2] = void 0));
}
function _t3(t2) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t2);
  });
}
var qe3 = 0;
function gt3(t2, e, s, n2) {
  let o = t2._endId = ++qe3, i = () => {
    o === t2._endId && n2();
  };
  if (s != null) return setTimeout(i, s);
  let { type: r2, timeout: c3, propCount: a2 } = Gt3(t2, e);
  if (!r2) return n2();
  let l3 = r2 + "end", p3 = 0, f3 = () => {
    t2.removeEventListener(l3, d4), i();
  }, d4 = (O6) => {
    O6.target === t2 && ++p3 >= a2 && f3();
  };
  setTimeout(() => {
    p3 < a2 && f3();
  }, c3 + 1), t2.addEventListener(l3, d4);
}
function Gt3(t2, e) {
  let s = window.getComputedStyle(t2), n2 = (V6) => (s[V6] || "").split(", "), o = n2(`${S2}Delay`), i = n2(`${S2}Duration`), r2 = yt2(o, i), c3 = n2(`${M2}Delay`), a2 = n2(`${M2}Duration`), l3 = yt2(c3, a2), p3 = null, f3 = 0, d4 = 0;
  e === S2 ? r2 > 0 && (p3 = S2, f3 = r2, d4 = i.length) : e === M2 ? l3 > 0 && (p3 = M2, f3 = l3, d4 = a2.length) : (f3 = Math.max(r2, l3), p3 = f3 > 0 ? r2 > l3 ? S2 : M2 : null, d4 = p3 ? p3 === S2 ? i.length : a2.length : 0);
  let O6 = p3 === S2 && /\b(?:transform|all)(?:,|$)/.test(n2(`${S2}Property`).toString());
  return { type: p3, timeout: f3, propCount: d4, hasTransform: O6 };
}
function yt2(t2, e) {
  for (; t2.length < e.length; ) t2 = t2.concat(t2);
  return Math.max(...e.map((s, n2) => bt2(s) + bt2(t2[n2])));
}
function bt2(t2) {
  return t2 === "auto" ? 0 : Number(t2.slice(0, -1).replace(",", ".")) * 1e3;
}
function Q(t2) {
  return (t2 ? t2.ownerDocument : document).body.offsetHeight;
}
function Xe3(t2, e, s) {
  let n2 = t2[R2];
  n2 && (e = (e ? [e, ...n2] : [...n2]).join(" ")), e == null ? t2.removeAttribute("class") : s ? t2.setAttribute("class", e) : t2.className = e;
}
var B2 = Symbol("_vod");
var qt3 = Symbol("_vsh");
var Xt3 = Symbol("");
var Ze = /(?:^|;)\s*display\s*:/;
function Qe2(t2, e, s) {
  let n2 = t2.style, o = p(s), i = false;
  if (s && !o) {
    if (e) if (p(e)) for (let r2 of e.split(";")) {
      let c3 = r2.slice(0, r2.indexOf(":")).trim();
      s[c3] == null && F3(n2, c3, "");
    }
    else for (let r2 in e) s[r2] == null && F3(n2, r2, "");
    for (let r2 in s) r2 === "display" && (i = true), F3(n2, r2, s[r2]);
  } else if (o) {
    if (e !== s) {
      let r2 = n2[Xt3];
      r2 && (s += ";" + r2), n2.cssText = s, i = Ze.test(s);
    }
  } else e && t2.removeAttribute("style");
  B2 in t2 && (t2[B2] = i ? n2.display : "", t2[qt3] && (n2.display = "none"));
}
var St3 = /\s*!important$/;
function F3(t2, e, s) {
  if (d(s)) s.forEach((n2) => F3(t2, e, n2));
  else if (s == null && (s = ""), e.startsWith("--")) t2.setProperty(e, s);
  else {
    let n2 = ts2(t2, e);
    St3.test(s) ? t2.setProperty(V(n2), s.replace(St3, ""), "important") : t2[n2] = s;
  }
}
var vt3 = ["Webkit", "Moz", "ms"];
var X2 = {};
function ts2(t2, e) {
  let s = X2[e];
  if (s) return s;
  let n2 = Te(e);
  if (n2 !== "filter" && n2 in t2) return X2[e] = n2;
  n2 = H(n2);
  for (let o = 0; o < vt3.length; o++) {
    let i = vt3[o] + n2;
    if (i in t2) return X2[e] = i;
  }
  return e;
}
var Et2 = "http://www.w3.org/1999/xlink";
function Ct2(t2, e, s, n2, o, i = Ge(e)) {
  n2 && e.startsWith("xlink:") ? s == null ? t2.removeAttributeNS(Et2, e.slice(6, e.length)) : t2.setAttributeNS(Et2, e, s) : s == null || i && !Ke(s) ? t2.removeAttribute(e) : t2.setAttribute(e, i ? "" : y(s) ? String(s) : s);
}
function wt2(t2, e, s, n2, o) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t2[e] = e === "innerHTML" ? Kt2(s) : s);
    return;
  }
  let i = t2.tagName;
  if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
    let c3 = i === "OPTION" ? t2.getAttribute("value") || "" : t2.value, a2 = s == null ? t2.type === "checkbox" ? "on" : "" : String(s);
    (c3 !== a2 || !("_value" in t2)) && (t2.value = a2), s == null && t2.removeAttribute(e), t2._value = s;
    return;
  }
  let r2 = false;
  if (s === "" || s == null) {
    let c3 = typeof t2[e];
    c3 === "boolean" ? s = Ke(s) : s == null && c3 === "string" ? (s = "", r2 = true) : c3 === "number" && (s = 0, r2 = true);
  }
  try {
    t2[e] = s;
  } catch {
  }
  r2 && t2.removeAttribute(o || e);
}
function b2(t2, e, s, n2) {
  t2.addEventListener(e, s, n2);
}
function es(t2, e, s, n2) {
  t2.removeEventListener(e, s, n2);
}
var Nt3 = Symbol("_vei");
function ss2(t2, e, s, n2, o = null) {
  let i = t2[Nt3] || (t2[Nt3] = {}), r2 = i[e];
  if (n2 && r2) r2.value = n2;
  else {
    let [c3, a2] = ns(e);
    if (n2) {
      let l3 = i[e] = rs(n2, o);
      b2(t2, c3, l3, a2);
    } else r2 && (es(t2, c3, r2, a2), i[e] = void 0);
  }
}
var Tt3 = /(?:Once|Passive|Capture)$/;
function ns(t2) {
  let e;
  if (Tt3.test(t2)) {
    e = {};
    let n2;
    for (; n2 = t2.match(Tt3); ) t2 = t2.slice(0, t2.length - n2[0].length), e[n2[0].toLowerCase()] = true;
  }
  return [t2[2] === ":" ? t2.slice(3) : V(t2.slice(2)), e];
}
var Y3 = 0;
var os = Promise.resolve();
var is = () => Y3 || (os.then(() => Y3 = 0), Y3 = Date.now());
function rs(t2, e) {
  let s = (n2) => {
    if (!n2._vts) n2._vts = Date.now();
    else if (n2._vts <= s.attached) return;
    ke3(cs(n2, s.value), e, 5, [n2]);
  };
  return s.value = t2, s.attached = is(), s;
}
function cs(t2, e) {
  if (d(e)) {
    let s = t2.stopImmediatePropagation;
    return t2.stopImmediatePropagation = () => {
      s.call(t2), t2._stopped = true;
    }, e.map((n2) => (o) => !o._stopped && n2 && n2(o));
  } else return e;
}
var At3 = (t2) => t2.charCodeAt(0) === 111 && t2.charCodeAt(1) === 110 && t2.charCodeAt(2) > 96 && t2.charCodeAt(2) < 123;
var as = (t2, e, s, n2, o, i) => {
  let r2 = o === "svg";
  e === "class" ? Xe3(t2, n2, r2) : e === "style" ? Qe2(t2, s, n2) : le(e) ? pe(e) || ss2(t2, e, s, n2, i) : (e[0] === "." ? (e = e.slice(1), true) : e[0] === "^" ? (e = e.slice(1), false) : ls(t2, e, n2, r2)) ? (wt2(t2, e, n2), !t2.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Ct2(t2, e, n2, r2, i, e !== "value")) : t2._isVueCE && (us(t2, e) || t2._def.__asyncLoader && (/[A-Z]/.test(e) || !p(n2))) ? wt2(t2, Te(e), n2, i, e) : (e === "true-value" ? t2._trueValue = n2 : e === "false-value" && (t2._falseValue = n2), Ct2(t2, e, n2, r2));
};
function ls(t2, e, s, n2) {
  if (n2) return !!(e === "innerHTML" || e === "textContent" || e in t2 && At3(e) && g(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t2.tagName === "IFRAME" || e === "form" || e === "list" && t2.tagName === "INPUT" || e === "type" && t2.tagName === "TEXTAREA") return false;
  if (e === "width" || e === "height") {
    let o = t2.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
  }
  return At3(e) && p(s) ? false : e in t2;
}
function us(t2, e) {
  let s = t2._def.props;
  if (!s) return false;
  let n2 = Te(e);
  return Array.isArray(s) ? s.some((o) => Te(o) === n2) : Object.keys(s).some((o) => Te(o) === n2);
}
var Yt2 = /* @__PURE__ */ new WeakMap();
var Jt3 = /* @__PURE__ */ new WeakMap();
var K3 = Symbol("_moveCb");
var Vt3 = Symbol("_enterCb");
var hs = (t2) => (delete t2.props.mode, t2);
var ms2 = hs({ name: "TransitionGroup", props: fe({}, zt3, { tag: String, moveClass: String }), setup(t2, { slots: e }) {
  let s = Pe2(), n2 = Cs(), o, i;
  return zr(() => {
    if (!o.length) return;
    let r2 = t2.moveClass || `${t2.name || "v"}-move`;
    if (!bs2(o[0].el, s.vnode.el, r2)) {
      o = [];
      return;
    }
    o.forEach(_s2), o.forEach(gs2);
    let c3 = o.filter(ys2);
    Q(s.vnode.el), c3.forEach((a2) => {
      let l3 = a2.el, p3 = l3.style;
      g3(l3, r2), p3.transform = p3.webkitTransform = p3.transitionDuration = "";
      let f3 = l3[K3] = (d4) => {
        d4 && d4.target !== l3 || (!d4 || d4.propertyName.endsWith("transform")) && (l3.removeEventListener("transitionend", f3), l3[K3] = null, v3(l3, r2));
      };
      l3.addEventListener("transitionend", f3);
    }), o = [];
  }), () => {
    let r2 = p2(t2), c3 = kt2(r2), a2 = r2.tag || ce3;
    if (o = [], i) for (let l3 = 0; l3 < i.length; l3++) {
      let p3 = i[l3];
      p3.el && p3.el instanceof Element && (o.push(p3), pt2(p3, Cn(p3, c3, n2, s)), Yt2.set(p3, Zt2(p3.el)));
    }
    i = e.default ? Gr(e.default()) : [];
    for (let l3 = 0; l3 < i.length; l3++) {
      let p3 = i[l3];
      p3.key != null && pt2(p3, Cn(p3, c3, n2, s));
    }
    return se3(a2, null, i);
  };
} });
function _s2(t2) {
  let e = t2.el;
  e[K3] && e[K3](), e[Vt3] && e[Vt3]();
}
function gs2(t2) {
  Jt3.set(t2, Zt2(t2.el));
}
function ys2(t2) {
  let e = Yt2.get(t2), s = Jt3.get(t2), n2 = e.left - s.left, o = e.top - s.top;
  if (n2 || o) {
    let i = t2.el, r2 = i.style, c3 = i.getBoundingClientRect(), a2 = 1, l3 = 1;
    return i.offsetWidth && (a2 = c3.width / i.offsetWidth), i.offsetHeight && (l3 = c3.height / i.offsetHeight), (!Number.isFinite(a2) || a2 === 0) && (a2 = 1), (!Number.isFinite(l3) || l3 === 0) && (l3 = 1), Math.abs(a2 - 1) < 0.01 && (a2 = 1), Math.abs(l3 - 1) < 0.01 && (l3 = 1), r2.transform = r2.webkitTransform = `translate(${n2 / a2}px,${o / l3}px)`, r2.transitionDuration = "0s", t2;
  }
}
function Zt2(t2) {
  let e = t2.getBoundingClientRect();
  return { left: e.left, top: e.top };
}
function bs2(t2, e, s) {
  let n2 = t2.cloneNode(), o = t2[R2];
  o && o.forEach((c3) => {
    c3.split(/\s+/).forEach((a2) => a2 && n2.classList.remove(a2));
  }), s.split(/\s+/).forEach((c3) => c3 && n2.classList.add(c3)), n2.style.display = "none";
  let i = e.nodeType === 1 ? e : e.parentNode;
  i.appendChild(n2);
  let { hasTransform: r2 } = Gt3(n2);
  return i.removeChild(n2), r2;
}
var m3 = Symbol("_assign");
var ne2 = fe({ patchProp: as }, ze4);
var x3;
function oe4() {
  return x3 || (x3 = Rl(ne2));
}
var Lt2 = (...t2) => {
  let e = oe4().createApp(...t2), { mount: s } = e;
  return e.mount = (n2) => {
    let o = ce4(n2);
    if (!o) return;
    let i = e._component;
    !g(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    let r2 = s(o, false, re4(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r2;
  }, e;
};
function re4(t2) {
  if (t2 instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t2 instanceof MathMLElement) return "mathml";
}
function ce4(t2) {
  return p(t2) ? document.querySelector(t2) : t2;
}

// fs:/projects/portfolio/src/App.vue
var App_default = "./App-UCADZL3Q.vue";

// esm:https://esm.sh/node/buffer.mjs
function ut2(t2) {
  return new Error(`[unenv] ${t2} is not implemented yet!`);
}
function v4(t2) {
  return Object.assign(() => {
    throw ut2(t2);
  }, { __unenv__: true });
}
var d2 = [];
var y4 = [];
var st = typeof Uint8Array > "u" ? Array : Uint8Array;
var N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let t2 = 0, e = N.length; t2 < e; ++t2) d2[t2] = N[t2], y4[N.charCodeAt(t2)] = t2;
y4[45] = 62;
y4[95] = 63;
function ht4(t2) {
  let e = t2.length;
  if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  let n2 = t2.indexOf("=");
  n2 === -1 && (n2 = e);
  let r2 = n2 === e ? 0 : 4 - n2 % 4;
  return [n2, r2];
}
function lt3(t2, e, n2) {
  return (e + n2) * 3 / 4 - n2;
}
function at2(t2) {
  let e, n2 = ht4(t2), r2 = n2[0], o = n2[1], i = new st(lt3(t2, r2, o)), u2 = 0, s = o > 0 ? r2 - 4 : r2, l3;
  for (l3 = 0; l3 < s; l3 += 4) e = y4[t2.charCodeAt(l3)] << 18 | y4[t2.charCodeAt(l3 + 1)] << 12 | y4[t2.charCodeAt(l3 + 2)] << 6 | y4[t2.charCodeAt(l3 + 3)], i[u2++] = e >> 16 & 255, i[u2++] = e >> 8 & 255, i[u2++] = e & 255;
  return o === 2 && (e = y4[t2.charCodeAt(l3)] << 2 | y4[t2.charCodeAt(l3 + 1)] >> 4, i[u2++] = e & 255), o === 1 && (e = y4[t2.charCodeAt(l3)] << 10 | y4[t2.charCodeAt(l3 + 1)] << 4 | y4[t2.charCodeAt(l3 + 2)] >> 2, i[u2++] = e >> 8 & 255, i[u2++] = e & 255), i;
}
function pt3(t2) {
  return d2[t2 >> 18 & 63] + d2[t2 >> 12 & 63] + d2[t2 >> 6 & 63] + d2[t2 & 63];
}
function ct2(t2, e, n2) {
  let r2, o = [];
  for (let i = e; i < n2; i += 3) r2 = (t2[i] << 16 & 16711680) + (t2[i + 1] << 8 & 65280) + (t2[i + 2] & 255), o.push(pt3(r2));
  return o.join("");
}
function k(t2) {
  let e, n2 = t2.length, r2 = n2 % 3, o = [], i = 16383;
  for (let u2 = 0, s = n2 - r2; u2 < s; u2 += i) o.push(ct2(t2, u2, u2 + i > s ? s : u2 + i));
  return r2 === 1 ? (e = t2[n2 - 1], o.push(d2[e >> 2] + d2[e << 4 & 63] + "==")) : r2 === 2 && (e = (t2[n2 - 2] << 8) + t2[n2 - 1], o.push(d2[e >> 10] + d2[e >> 4 & 63] + d2[e << 2 & 63] + "=")), o.join("");
}
function _2(t2, e, n2, r2, o) {
  let i, u2, s = o * 8 - r2 - 1, l3 = (1 << s) - 1, p3 = l3 >> 1, h5 = -7, a2 = n2 ? o - 1 : 0, I4 = n2 ? -1 : 1, w4 = t2[e + a2];
  for (a2 += I4, i = w4 & (1 << -h5) - 1, w4 >>= -h5, h5 += s; h5 > 0; ) i = i * 256 + t2[e + a2], a2 += I4, h5 -= 8;
  for (u2 = i & (1 << -h5) - 1, i >>= -h5, h5 += r2; h5 > 0; ) u2 = u2 * 256 + t2[e + a2], a2 += I4, h5 -= 8;
  if (i === 0) i = 1 - p3;
  else {
    if (i === l3) return u2 ? Number.NaN : (w4 ? -1 : 1) * Number.POSITIVE_INFINITY;
    u2 = u2 + Math.pow(2, r2), i = i - p3;
  }
  return (w4 ? -1 : 1) * u2 * Math.pow(2, i - r2);
}
function z3(t2, e, n2, r2, o, i) {
  let u2, s, l3, p3 = i * 8 - o - 1, h5 = (1 << p3) - 1, a2 = h5 >> 1, I4 = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w4 = r2 ? 0 : i - 1, L5 = r2 ? 1 : -1, ft4 = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), Number.isNaN(e) || e === Number.POSITIVE_INFINITY ? (s = Number.isNaN(e) ? 1 : 0, u2 = h5) : (u2 = Math.floor(Math.log2(e)), e * (l3 = Math.pow(2, -u2)) < 1 && (u2--, l3 *= 2), e += u2 + a2 >= 1 ? I4 / l3 : I4 * Math.pow(2, 1 - a2), e * l3 >= 2 && (u2++, l3 /= 2), u2 + a2 >= h5 ? (s = 0, u2 = h5) : u2 + a2 >= 1 ? (s = (e * l3 - 1) * Math.pow(2, o), u2 = u2 + a2) : (s = e * Math.pow(2, a2 - 1) * Math.pow(2, o), u2 = 0)); o >= 8; ) t2[n2 + w4] = s & 255, w4 += L5, s /= 256, o -= 8;
  for (u2 = u2 << o | s, p3 += o; p3 > 0; ) t2[n2 + w4] = u2 & 255, w4 += L5, u2 /= 256, p3 -= 8;
  t2[n2 + w4 - L5] |= ft4 * 128;
}
var F4 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
var G2 = 50;
var R3 = 2147483647;
f2.TYPED_ARRAY_SUPPORT = gt4();
!f2.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function gt4() {
  try {
    let t2 = new Uint8Array(1), e = { foo: function() {
      return 42;
    } };
    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t2, e), t2.foo() === 42;
  } catch {
    return false;
  }
}
Object.defineProperty(f2.prototype, "parent", { enumerable: true, get: function() {
  if (f2.isBuffer(this)) return this.buffer;
} });
Object.defineProperty(f2.prototype, "offset", { enumerable: true, get: function() {
  if (f2.isBuffer(this)) return this.byteOffset;
} });
function m4(t2) {
  if (t2 > R3) throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
  let e = new Uint8Array(t2);
  return Object.setPrototypeOf(e, f2.prototype), e;
}
function f2(t2, e, n2) {
  if (typeof t2 == "number") {
    if (typeof e == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
    return M3(t2);
  }
  return X3(t2, e, n2);
}
f2.poolSize = 8192;
function X3(t2, e, n2) {
  if (typeof t2 == "string") return wt3(t2, e);
  if (ArrayBuffer.isView(t2)) return dt3(t2);
  if (t2 == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
  if (b3(t2, ArrayBuffer) || t2 && b3(t2.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (b3(t2, SharedArrayBuffer) || t2 && b3(t2.buffer, SharedArrayBuffer))) return H2(t2, e, n2);
  if (typeof t2 == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
  let r2 = t2.valueOf && t2.valueOf();
  if (r2 != null && r2 !== t2) return f2.from(r2, e, n2);
  let o = bt3(t2);
  if (o) return o;
  if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t2[Symbol.toPrimitive] == "function") return f2.from(t2[Symbol.toPrimitive]("string"), e, n2);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t2);
}
f2.from = function(t2, e, n2) {
  return X3(t2, e, n2);
};
Object.setPrototypeOf(f2.prototype, Uint8Array.prototype);
Object.setPrototypeOf(f2, Uint8Array);
function q3(t2) {
  if (typeof t2 != "number") throw new TypeError('"size" argument must be of type number');
  if (t2 < 0) throw new RangeError('The value "' + t2 + '" is invalid for option "size"');
}
function yt3(t2, e, n2) {
  return q3(t2), t2 <= 0 ? m4(t2) : e !== void 0 ? typeof n2 == "string" ? m4(t2).fill(e, n2) : m4(t2).fill(e) : m4(t2);
}
f2.alloc = function(t2, e, n2) {
  return yt3(t2, e, n2);
};
function M3(t2) {
  return q3(t2), m4(t2 < 0 ? 0 : $3(t2) | 0);
}
f2.allocUnsafe = function(t2) {
  return M3(t2);
};
f2.allocUnsafeSlow = function(t2) {
  return M3(t2);
};
function wt3(t2, e) {
  if ((typeof e != "string" || e === "") && (e = "utf8"), !f2.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
  let n2 = W3(t2, e) | 0, r2 = m4(n2), o = r2.write(t2, e);
  return o !== n2 && (r2 = r2.slice(0, o)), r2;
}
function S3(t2) {
  let e = t2.length < 0 ? 0 : $3(t2.length) | 0, n2 = m4(e);
  for (let r2 = 0; r2 < e; r2 += 1) n2[r2] = t2[r2] & 255;
  return n2;
}
function dt3(t2) {
  if (b3(t2, Uint8Array)) {
    let e = new Uint8Array(t2);
    return H2(e.buffer, e.byteOffset, e.byteLength);
  }
  return S3(t2);
}
function H2(t2, e, n2) {
  if (e < 0 || t2.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
  if (t2.byteLength < e + (n2 || 0)) throw new RangeError('"length" is outside of buffer bounds');
  let r2;
  return e === void 0 && n2 === void 0 ? r2 = new Uint8Array(t2) : n2 === void 0 ? r2 = new Uint8Array(t2, e) : r2 = new Uint8Array(t2, e, n2), Object.setPrototypeOf(r2, f2.prototype), r2;
}
function bt3(t2) {
  if (f2.isBuffer(t2)) {
    let e = $3(t2.length) | 0, n2 = m4(e);
    return n2.length === 0 || t2.copy(n2, 0, 0, e), n2;
  }
  if (t2.length !== void 0) return typeof t2.length != "number" || P3(t2.length) ? m4(0) : S3(t2);
  if (t2.type === "Buffer" && Array.isArray(t2.data)) return S3(t2.data);
}
function $3(t2) {
  if (t2 >= R3) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + R3.toString(16) + " bytes");
  return t2 | 0;
}
f2.isBuffer = function(t2) {
  return t2 != null && t2._isBuffer === true && t2 !== f2.prototype;
};
f2.compare = function(t2, e) {
  if (b3(t2, Uint8Array) && (t2 = f2.from(t2, t2.offset, t2.byteLength)), b3(e, Uint8Array) && (e = f2.from(e, e.offset, e.byteLength)), !f2.isBuffer(t2) || !f2.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t2 === e) return 0;
  let n2 = t2.length, r2 = e.length;
  for (let o = 0, i = Math.min(n2, r2); o < i; ++o) if (t2[o] !== e[o]) {
    n2 = t2[o], r2 = e[o];
    break;
  }
  return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
};
f2.isEncoding = function(t2) {
  switch (String(t2).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
f2.concat = function(t2, e) {
  if (!Array.isArray(t2)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (t2.length === 0) return f2.alloc(0);
  let n2;
  if (e === void 0) for (e = 0, n2 = 0; n2 < t2.length; ++n2) e += t2[n2].length;
  let r2 = f2.allocUnsafe(e), o = 0;
  for (n2 = 0; n2 < t2.length; ++n2) {
    let i = t2[n2];
    if (b3(i, Uint8Array)) o + i.length > r2.length ? (f2.isBuffer(i) || (i = f2.from(i.buffer, i.byteOffset, i.byteLength)), i.copy(r2, o)) : Uint8Array.prototype.set.call(r2, i, o);
    else if (f2.isBuffer(i)) i.copy(r2, o);
    else throw new TypeError('"list" argument must be an Array of Buffers');
    o += i.length;
  }
  return r2;
};
function W3(t2, e) {
  if (f2.isBuffer(t2)) return t2.length;
  if (ArrayBuffer.isView(t2) || b3(t2, ArrayBuffer)) return t2.byteLength;
  if (typeof t2 != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t2);
  let n2 = t2.length, r2 = arguments.length > 2 && arguments[2] === true;
  if (!r2 && n2 === 0) return 0;
  let o = false;
  for (; ; ) switch (e) {
    case "ascii":
    case "latin1":
    case "binary":
      return n2;
    case "utf8":
    case "utf-8":
      return x4(t2).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return n2 * 2;
    case "hex":
      return n2 >>> 1;
    case "base64":
      return ot2(t2).length;
    default:
      if (o) return r2 ? -1 : x4(t2).length;
      e = ("" + e).toLowerCase(), o = true;
  }
}
f2.byteLength = W3;
function Et3(t2, e, n2) {
  let r2 = false;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0) || (n2 >>>= 0, e >>>= 0, n2 <= e)) return "";
  for (t2 || (t2 = "utf8"); ; ) switch (t2) {
    case "hex":
      return Lt3(this, e, n2);
    case "utf8":
    case "utf-8":
      return K4(this, e, n2);
    case "ascii":
      return _t4(this, e, n2);
    case "latin1":
    case "binary":
      return Ot2(this, e, n2);
    case "base64":
      return Tt4(this, e, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return Nt4(this, e, n2);
    default:
      if (r2) throw new TypeError("Unknown encoding: " + t2);
      t2 = (t2 + "").toLowerCase(), r2 = true;
  }
}
f2.prototype._isBuffer = true;
function B3(t2, e, n2) {
  let r2 = t2[e];
  t2[e] = t2[n2], t2[n2] = r2;
}
f2.prototype.swap16 = function() {
  let t2 = this.length;
  if (t2 % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (let e = 0; e < t2; e += 2) B3(this, e, e + 1);
  return this;
};
f2.prototype.swap32 = function() {
  let t2 = this.length;
  if (t2 % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (let e = 0; e < t2; e += 4) B3(this, e, e + 3), B3(this, e + 1, e + 2);
  return this;
};
f2.prototype.swap64 = function() {
  let t2 = this.length;
  if (t2 % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (let e = 0; e < t2; e += 8) B3(this, e, e + 7), B3(this, e + 1, e + 6), B3(this, e + 2, e + 5), B3(this, e + 3, e + 4);
  return this;
};
f2.prototype.toString = function() {
  let t2 = this.length;
  return t2 === 0 ? "" : arguments.length === 0 ? K4(this, 0, t2) : Reflect.apply(Et3, this, arguments);
};
f2.prototype.toLocaleString = f2.prototype.toString;
f2.prototype.equals = function(t2) {
  if (!f2.isBuffer(t2)) throw new TypeError("Argument must be a Buffer");
  return this === t2 ? true : f2.compare(this, t2) === 0;
};
f2.prototype.inspect = function() {
  let t2 = "", e = G2;
  return t2 = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t2 += " ... "), "<Buffer " + t2 + ">";
};
F4 && (f2.prototype[F4] = f2.prototype.inspect);
f2.prototype.compare = function(t2, e, n2, r2, o) {
  if (b3(t2, Uint8Array) && (t2 = f2.from(t2, t2.offset, t2.byteLength)), !f2.isBuffer(t2)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t2);
  if (e === void 0 && (e = 0), n2 === void 0 && (n2 = t2 ? t2.length : 0), r2 === void 0 && (r2 = 0), o === void 0 && (o = this.length), e < 0 || n2 > t2.length || r2 < 0 || o > this.length) throw new RangeError("out of range index");
  if (r2 >= o && e >= n2) return 0;
  if (r2 >= o) return -1;
  if (e >= n2) return 1;
  if (e >>>= 0, n2 >>>= 0, r2 >>>= 0, o >>>= 0, this === t2) return 0;
  let i = o - r2, u2 = n2 - e, s = Math.min(i, u2), l3 = this.slice(r2, o), p3 = t2.slice(e, n2);
  for (let h5 = 0; h5 < s; ++h5) if (l3[h5] !== p3[h5]) {
    i = l3[h5], u2 = p3[h5];
    break;
  }
  return i < u2 ? -1 : u2 < i ? 1 : 0;
};
function J2(t2, e, n2, r2, o) {
  if (t2.length === 0) return -1;
  if (typeof n2 == "string" ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, P3(n2) && (n2 = o ? 0 : t2.length - 1), n2 < 0 && (n2 = t2.length + n2), n2 >= t2.length) {
    if (o) return -1;
    n2 = t2.length - 1;
  } else if (n2 < 0) if (o) n2 = 0;
  else return -1;
  if (typeof e == "string" && (e = f2.from(e, r2)), f2.isBuffer(e)) return e.length === 0 ? -1 : j3(t2, e, n2, r2, o);
  if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? o ? Uint8Array.prototype.indexOf.call(t2, e, n2) : Uint8Array.prototype.lastIndexOf.call(t2, e, n2) : j3(t2, [e], n2, r2, o);
  throw new TypeError("val must be string, number or Buffer");
}
function j3(t2, e, n2, r2, o) {
  let i = 1, u2 = t2.length, s = e.length;
  if (r2 !== void 0 && (r2 = String(r2).toLowerCase(), r2 === "ucs2" || r2 === "ucs-2" || r2 === "utf16le" || r2 === "utf-16le")) {
    if (t2.length < 2 || e.length < 2) return -1;
    i = 2, u2 /= 2, s /= 2, n2 /= 2;
  }
  function l3(h5, a2) {
    return i === 1 ? h5[a2] : h5.readUInt16BE(a2 * i);
  }
  let p3;
  if (o) {
    let h5 = -1;
    for (p3 = n2; p3 < u2; p3++) if (l3(t2, p3) === l3(e, h5 === -1 ? 0 : p3 - h5)) {
      if (h5 === -1 && (h5 = p3), p3 - h5 + 1 === s) return h5 * i;
    } else h5 !== -1 && (p3 -= p3 - h5), h5 = -1;
  } else for (n2 + s > u2 && (n2 = u2 - s), p3 = n2; p3 >= 0; p3--) {
    let h5 = true;
    for (let a2 = 0; a2 < s; a2++) if (l3(t2, p3 + a2) !== l3(e, a2)) {
      h5 = false;
      break;
    }
    if (h5) return p3;
  }
  return -1;
}
f2.prototype.includes = function(t2, e, n2) {
  return this.indexOf(t2, e, n2) !== -1;
};
f2.prototype.indexOf = function(t2, e, n2) {
  return J2(this, t2, e, n2, true);
};
f2.prototype.lastIndexOf = function(t2, e, n2) {
  return J2(this, t2, e, n2, false);
};
function Bt2(t2, e, n2, r2) {
  n2 = Number(n2) || 0;
  let o = t2.length - n2;
  r2 ? (r2 = Number(r2), r2 > o && (r2 = o)) : r2 = o;
  let i = e.length;
  r2 > i / 2 && (r2 = i / 2);
  let u2;
  for (u2 = 0; u2 < r2; ++u2) {
    let s = Number.parseInt(e.slice(u2 * 2, u2 * 2 + 2), 16);
    if (P3(s)) return u2;
    t2[n2 + u2] = s;
  }
  return u2;
}
function It2(t2, e, n2, r2) {
  return O3(x4(e, t2.length - n2), t2, n2, r2);
}
function At4(t2, e, n2, r2) {
  return O3($t3(e), t2, n2, r2);
}
function Ut2(t2, e, n2, r2) {
  return O3(ot2(e), t2, n2, r2);
}
function vt4(t2, e, n2, r2) {
  return O3(Ct3(e, t2.length - n2), t2, n2, r2);
}
f2.prototype.write = function(t2, e, n2, r2) {
  if (e === void 0) r2 = "utf8", n2 = this.length, e = 0;
  else if (n2 === void 0 && typeof e == "string") r2 = e, n2 = this.length, e = 0;
  else if (Number.isFinite(e)) e = e >>> 0, Number.isFinite(n2) ? (n2 = n2 >>> 0, r2 === void 0 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
  else throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  let o = this.length - e;
  if ((n2 === void 0 || n2 > o) && (n2 = o), t2.length > 0 && (n2 < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  r2 || (r2 = "utf8");
  let i = false;
  for (; ; ) switch (r2) {
    case "hex":
      return Bt2(this, t2, e, n2);
    case "utf8":
    case "utf-8":
      return It2(this, t2, e, n2);
    case "ascii":
    case "latin1":
    case "binary":
      return At4(this, t2, e, n2);
    case "base64":
      return Ut2(this, t2, e, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return vt4(this, t2, e, n2);
    default:
      if (i) throw new TypeError("Unknown encoding: " + r2);
      r2 = ("" + r2).toLowerCase(), i = true;
  }
};
f2.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Tt4(t2, e, n2) {
  return e === 0 && n2 === t2.length ? k(t2) : k(t2.slice(e, n2));
}
function K4(t2, e, n2) {
  n2 = Math.min(t2.length, n2);
  let r2 = [], o = e;
  for (; o < n2; ) {
    let i = t2[o], u2 = null, s = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
    if (o + s <= n2) {
      let l3, p3, h5, a2;
      switch (s) {
        case 1:
          i < 128 && (u2 = i);
          break;
        case 2:
          l3 = t2[o + 1], (l3 & 192) === 128 && (a2 = (i & 31) << 6 | l3 & 63, a2 > 127 && (u2 = a2));
          break;
        case 3:
          l3 = t2[o + 1], p3 = t2[o + 2], (l3 & 192) === 128 && (p3 & 192) === 128 && (a2 = (i & 15) << 12 | (l3 & 63) << 6 | p3 & 63, a2 > 2047 && (a2 < 55296 || a2 > 57343) && (u2 = a2));
          break;
        case 4:
          l3 = t2[o + 1], p3 = t2[o + 2], h5 = t2[o + 3], (l3 & 192) === 128 && (p3 & 192) === 128 && (h5 & 192) === 128 && (a2 = (i & 15) << 18 | (l3 & 63) << 12 | (p3 & 63) << 6 | h5 & 63, a2 > 65535 && a2 < 1114112 && (u2 = a2));
      }
    }
    u2 === null ? (u2 = 65533, s = 1) : u2 > 65535 && (u2 -= 65536, r2.push(u2 >>> 10 & 1023 | 55296), u2 = 56320 | u2 & 1023), r2.push(u2), o += s;
  }
  return Rt3(r2);
}
var Y4 = 4096;
function Rt3(t2) {
  let e = t2.length;
  if (e <= Y4) return String.fromCharCode.apply(String, t2);
  let n2 = "", r2 = 0;
  for (; r2 < e; ) n2 += String.fromCharCode.apply(String, t2.slice(r2, r2 += Y4));
  return n2;
}
function _t4(t2, e, n2) {
  let r2 = "";
  n2 = Math.min(t2.length, n2);
  for (let o = e; o < n2; ++o) r2 += String.fromCharCode(t2[o] & 127);
  return r2;
}
function Ot2(t2, e, n2) {
  let r2 = "";
  n2 = Math.min(t2.length, n2);
  for (let o = e; o < n2; ++o) r2 += String.fromCharCode(t2[o]);
  return r2;
}
function Lt3(t2, e, n2) {
  let r2 = t2.length;
  (!e || e < 0) && (e = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
  let o = "";
  for (let i = e; i < n2; ++i) o += Pt[t2[i]];
  return o;
}
function Nt4(t2, e, n2) {
  let r2 = t2.slice(e, n2), o = "";
  for (let i = 0; i < r2.length - 1; i += 2) o += String.fromCharCode(r2[i] + r2[i + 1] * 256);
  return o;
}
f2.prototype.slice = function(t2, e) {
  let n2 = this.length;
  t2 = Math.trunc(t2), e = e === void 0 ? n2 : Math.trunc(e), t2 < 0 ? (t2 += n2, t2 < 0 && (t2 = 0)) : t2 > n2 && (t2 = n2), e < 0 ? (e += n2, e < 0 && (e = 0)) : e > n2 && (e = n2), e < t2 && (e = t2);
  let r2 = this.subarray(t2, e);
  return Object.setPrototypeOf(r2, f2.prototype), r2;
};
function c(t2, e, n2) {
  if (t2 % 1 !== 0 || t2 < 0) throw new RangeError("offset is not uint");
  if (t2 + e > n2) throw new RangeError("Trying to access beyond buffer length");
}
f2.prototype.readUintLE = f2.prototype.readUIntLE = function(t2, e, n2) {
  t2 = t2 >>> 0, e = e >>> 0, n2 || c(t2, e, this.length);
  let r2 = this[t2], o = 1, i = 0;
  for (; ++i < e && (o *= 256); ) r2 += this[t2 + i] * o;
  return r2;
};
f2.prototype.readUintBE = f2.prototype.readUIntBE = function(t2, e, n2) {
  t2 = t2 >>> 0, e = e >>> 0, n2 || c(t2, e, this.length);
  let r2 = this[t2 + --e], o = 1;
  for (; e > 0 && (o *= 256); ) r2 += this[t2 + --e] * o;
  return r2;
};
f2.prototype.readUint8 = f2.prototype.readUInt8 = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 1, this.length), this[t2];
};
f2.prototype.readUint16LE = f2.prototype.readUInt16LE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 2, this.length), this[t2] | this[t2 + 1] << 8;
};
f2.prototype.readUint16BE = f2.prototype.readUInt16BE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 2, this.length), this[t2] << 8 | this[t2 + 1];
};
f2.prototype.readUint32LE = f2.prototype.readUInt32LE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 4, this.length), (this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16) + this[t2 + 3] * 16777216;
};
f2.prototype.readUint32BE = f2.prototype.readUInt32BE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 4, this.length), this[t2] * 16777216 + (this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3]);
};
f2.prototype.readBigUInt64LE = E3(function(t2) {
  t2 = t2 >>> 0, U2(t2, "offset");
  let e = this[t2], n2 = this[t2 + 7];
  (e === void 0 || n2 === void 0) && T3(t2, this.length - 8);
  let r2 = e + this[++t2] * 2 ** 8 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 24, o = this[++t2] + this[++t2] * 2 ** 8 + this[++t2] * 2 ** 16 + n2 * 2 ** 24;
  return BigInt(r2) + (BigInt(o) << BigInt(32));
});
f2.prototype.readBigUInt64BE = E3(function(t2) {
  t2 = t2 >>> 0, U2(t2, "offset");
  let e = this[t2], n2 = this[t2 + 7];
  (e === void 0 || n2 === void 0) && T3(t2, this.length - 8);
  let r2 = e * 2 ** 24 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + this[++t2], o = this[++t2] * 2 ** 24 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + n2;
  return (BigInt(r2) << BigInt(32)) + BigInt(o);
});
f2.prototype.readIntLE = function(t2, e, n2) {
  t2 = t2 >>> 0, e = e >>> 0, n2 || c(t2, e, this.length);
  let r2 = this[t2], o = 1, i = 0;
  for (; ++i < e && (o *= 256); ) r2 += this[t2 + i] * o;
  return o *= 128, r2 >= o && (r2 -= Math.pow(2, 8 * e)), r2;
};
f2.prototype.readIntBE = function(t2, e, n2) {
  t2 = t2 >>> 0, e = e >>> 0, n2 || c(t2, e, this.length);
  let r2 = e, o = 1, i = this[t2 + --r2];
  for (; r2 > 0 && (o *= 256); ) i += this[t2 + --r2] * o;
  return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i;
};
f2.prototype.readInt8 = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 1, this.length), this[t2] & 128 ? (255 - this[t2] + 1) * -1 : this[t2];
};
f2.prototype.readInt16LE = function(t2, e) {
  t2 = t2 >>> 0, e || c(t2, 2, this.length);
  let n2 = this[t2] | this[t2 + 1] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
};
f2.prototype.readInt16BE = function(t2, e) {
  t2 = t2 >>> 0, e || c(t2, 2, this.length);
  let n2 = this[t2 + 1] | this[t2] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
};
f2.prototype.readInt32LE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 4, this.length), this[t2] | this[t2 + 1] << 8 | this[t2 + 2] << 16 | this[t2 + 3] << 24;
};
f2.prototype.readInt32BE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 4, this.length), this[t2] << 24 | this[t2 + 1] << 16 | this[t2 + 2] << 8 | this[t2 + 3];
};
f2.prototype.readBigInt64LE = E3(function(t2) {
  t2 = t2 >>> 0, U2(t2, "offset");
  let e = this[t2], n2 = this[t2 + 7];
  (e === void 0 || n2 === void 0) && T3(t2, this.length - 8);
  let r2 = this[t2 + 4] + this[t2 + 5] * 2 ** 8 + this[t2 + 6] * 2 ** 16 + (n2 << 24);
  return (BigInt(r2) << BigInt(32)) + BigInt(e + this[++t2] * 2 ** 8 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 24);
});
f2.prototype.readBigInt64BE = E3(function(t2) {
  t2 = t2 >>> 0, U2(t2, "offset");
  let e = this[t2], n2 = this[t2 + 7];
  (e === void 0 || n2 === void 0) && T3(t2, this.length - 8);
  let r2 = (e << 24) + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + this[++t2];
  return (BigInt(r2) << BigInt(32)) + BigInt(this[++t2] * 2 ** 24 + this[++t2] * 2 ** 16 + this[++t2] * 2 ** 8 + n2);
});
f2.prototype.readFloatLE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 4, this.length), _2(this, t2, true, 23, 4);
};
f2.prototype.readFloatBE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 4, this.length), _2(this, t2, false, 23, 4);
};
f2.prototype.readDoubleLE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 8, this.length), _2(this, t2, true, 52, 8);
};
f2.prototype.readDoubleBE = function(t2, e) {
  return t2 = t2 >>> 0, e || c(t2, 8, this.length), _2(this, t2, false, 52, 8);
};
function g4(t2, e, n2, r2, o, i) {
  if (!f2.isBuffer(t2)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
  if (n2 + r2 > t2.length) throw new RangeError("Index out of range");
}
f2.prototype.writeUintLE = f2.prototype.writeUIntLE = function(t2, e, n2, r2) {
  if (t2 = +t2, e = e >>> 0, n2 = n2 >>> 0, !r2) {
    let u2 = Math.pow(2, 8 * n2) - 1;
    g4(this, t2, e, n2, u2, 0);
  }
  let o = 1, i = 0;
  for (this[e] = t2 & 255; ++i < n2 && (o *= 256); ) this[e + i] = t2 / o & 255;
  return e + n2;
};
f2.prototype.writeUintBE = f2.prototype.writeUIntBE = function(t2, e, n2, r2) {
  if (t2 = +t2, e = e >>> 0, n2 = n2 >>> 0, !r2) {
    let u2 = Math.pow(2, 8 * n2) - 1;
    g4(this, t2, e, n2, u2, 0);
  }
  let o = n2 - 1, i = 1;
  for (this[e + o] = t2 & 255; --o >= 0 && (i *= 256); ) this[e + o] = t2 / i & 255;
  return e + n2;
};
f2.prototype.writeUint8 = f2.prototype.writeUInt8 = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 1, 255, 0), this[e] = t2 & 255, e + 1;
};
f2.prototype.writeUint16LE = f2.prototype.writeUInt16LE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 2, 65535, 0), this[e] = t2 & 255, this[e + 1] = t2 >>> 8, e + 2;
};
f2.prototype.writeUint16BE = f2.prototype.writeUInt16BE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 2, 65535, 0), this[e] = t2 >>> 8, this[e + 1] = t2 & 255, e + 2;
};
f2.prototype.writeUint32LE = f2.prototype.writeUInt32LE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 4, 4294967295, 0), this[e + 3] = t2 >>> 24, this[e + 2] = t2 >>> 16, this[e + 1] = t2 >>> 8, this[e] = t2 & 255, e + 4;
};
f2.prototype.writeUint32BE = f2.prototype.writeUInt32BE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 4, 4294967295, 0), this[e] = t2 >>> 24, this[e + 1] = t2 >>> 16, this[e + 2] = t2 >>> 8, this[e + 3] = t2 & 255, e + 4;
};
function Q2(t2, e, n2, r2, o) {
  rt(e, r2, o, t2, n2, 7);
  let i = Number(e & BigInt(4294967295));
  t2[n2++] = i, i = i >> 8, t2[n2++] = i, i = i >> 8, t2[n2++] = i, i = i >> 8, t2[n2++] = i;
  let u2 = Number(e >> BigInt(32) & BigInt(4294967295));
  return t2[n2++] = u2, u2 = u2 >> 8, t2[n2++] = u2, u2 = u2 >> 8, t2[n2++] = u2, u2 = u2 >> 8, t2[n2++] = u2, n2;
}
function Z3(t2, e, n2, r2, o) {
  rt(e, r2, o, t2, n2, 7);
  let i = Number(e & BigInt(4294967295));
  t2[n2 + 7] = i, i = i >> 8, t2[n2 + 6] = i, i = i >> 8, t2[n2 + 5] = i, i = i >> 8, t2[n2 + 4] = i;
  let u2 = Number(e >> BigInt(32) & BigInt(4294967295));
  return t2[n2 + 3] = u2, u2 = u2 >> 8, t2[n2 + 2] = u2, u2 = u2 >> 8, t2[n2 + 1] = u2, u2 = u2 >> 8, t2[n2] = u2, n2 + 8;
}
f2.prototype.writeBigUInt64LE = E3(function(t2, e = 0) {
  return Q2(this, t2, e, BigInt(0), BigInt("0xffffffffffffffff"));
});
f2.prototype.writeBigUInt64BE = E3(function(t2, e = 0) {
  return Z3(this, t2, e, BigInt(0), BigInt("0xffffffffffffffff"));
});
f2.prototype.writeIntLE = function(t2, e, n2, r2) {
  if (t2 = +t2, e = e >>> 0, !r2) {
    let s = Math.pow(2, 8 * n2 - 1);
    g4(this, t2, e, n2, s - 1, -s);
  }
  let o = 0, i = 1, u2 = 0;
  for (this[e] = t2 & 255; ++o < n2 && (i *= 256); ) t2 < 0 && u2 === 0 && this[e + o - 1] !== 0 && (u2 = 1), this[e + o] = Math.trunc(t2 / i) - u2 & 255;
  return e + n2;
};
f2.prototype.writeIntBE = function(t2, e, n2, r2) {
  if (t2 = +t2, e = e >>> 0, !r2) {
    let s = Math.pow(2, 8 * n2 - 1);
    g4(this, t2, e, n2, s - 1, -s);
  }
  let o = n2 - 1, i = 1, u2 = 0;
  for (this[e + o] = t2 & 255; --o >= 0 && (i *= 256); ) t2 < 0 && u2 === 0 && this[e + o + 1] !== 0 && (u2 = 1), this[e + o] = Math.trunc(t2 / i) - u2 & 255;
  return e + n2;
};
f2.prototype.writeInt8 = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 1, 127, -128), t2 < 0 && (t2 = 255 + t2 + 1), this[e] = t2 & 255, e + 1;
};
f2.prototype.writeInt16LE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 2, 32767, -32768), this[e] = t2 & 255, this[e + 1] = t2 >>> 8, e + 2;
};
f2.prototype.writeInt16BE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 2, 32767, -32768), this[e] = t2 >>> 8, this[e + 1] = t2 & 255, e + 2;
};
f2.prototype.writeInt32LE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 4, 2147483647, -2147483648), this[e] = t2 & 255, this[e + 1] = t2 >>> 8, this[e + 2] = t2 >>> 16, this[e + 3] = t2 >>> 24, e + 4;
};
f2.prototype.writeInt32BE = function(t2, e, n2) {
  return t2 = +t2, e = e >>> 0, n2 || g4(this, t2, e, 4, 2147483647, -2147483648), t2 < 0 && (t2 = 4294967295 + t2 + 1), this[e] = t2 >>> 24, this[e + 1] = t2 >>> 16, this[e + 2] = t2 >>> 8, this[e + 3] = t2 & 255, e + 4;
};
f2.prototype.writeBigInt64LE = E3(function(t2, e = 0) {
  return Q2(this, t2, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
f2.prototype.writeBigInt64BE = E3(function(t2, e = 0) {
  return Z3(this, t2, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function tt3(t2, e, n2, r2, o, i) {
  if (n2 + r2 > t2.length) throw new RangeError("Index out of range");
  if (n2 < 0) throw new RangeError("Index out of range");
}
function et3(t2, e, n2, r2, o) {
  return e = +e, n2 = n2 >>> 0, o || tt3(t2, e, n2, 4, 34028234663852886e22, -34028234663852886e22), z3(t2, e, n2, r2, 23, 4), n2 + 4;
}
f2.prototype.writeFloatLE = function(t2, e, n2) {
  return et3(this, t2, e, true, n2);
};
f2.prototype.writeFloatBE = function(t2, e, n2) {
  return et3(this, t2, e, false, n2);
};
function nt2(t2, e, n2, r2, o) {
  return e = +e, n2 = n2 >>> 0, o || tt3(t2, e, n2, 8, 17976931348623157e292, -17976931348623157e292), z3(t2, e, n2, r2, 52, 8), n2 + 8;
}
f2.prototype.writeDoubleLE = function(t2, e, n2) {
  return nt2(this, t2, e, true, n2);
};
f2.prototype.writeDoubleBE = function(t2, e, n2) {
  return nt2(this, t2, e, false, n2);
};
f2.prototype.copy = function(t2, e, n2, r2) {
  if (!f2.isBuffer(t2)) throw new TypeError("argument should be a Buffer");
  if (n2 || (n2 = 0), !r2 && r2 !== 0 && (r2 = this.length), e >= t2.length && (e = t2.length), e || (e = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2 || t2.length === 0 || this.length === 0) return 0;
  if (e < 0) throw new RangeError("targetStart out of bounds");
  if (n2 < 0 || n2 >= this.length) throw new RangeError("Index out of range");
  if (r2 < 0) throw new RangeError("sourceEnd out of bounds");
  r2 > this.length && (r2 = this.length), t2.length - e < r2 - n2 && (r2 = t2.length - e + n2);
  let o = r2 - n2;
  return this === t2 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n2, r2) : Uint8Array.prototype.set.call(t2, this.subarray(n2, r2), e), o;
};
f2.prototype.fill = function(t2, e, n2, r2) {
  if (typeof t2 == "string") {
    if (typeof e == "string" ? (r2 = e, e = 0, n2 = this.length) : typeof n2 == "string" && (r2 = n2, n2 = this.length), r2 !== void 0 && typeof r2 != "string") throw new TypeError("encoding must be a string");
    if (typeof r2 == "string" && !f2.isEncoding(r2)) throw new TypeError("Unknown encoding: " + r2);
    if (t2.length === 1) {
      let i = t2.charCodeAt(0);
      (r2 === "utf8" && i < 128 || r2 === "latin1") && (t2 = i);
    }
  } else typeof t2 == "number" ? t2 = t2 & 255 : typeof t2 == "boolean" && (t2 = Number(t2));
  if (e < 0 || this.length < e || this.length < n2) throw new RangeError("Out of range index");
  if (n2 <= e) return this;
  e = e >>> 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, t2 || (t2 = 0);
  let o;
  if (typeof t2 == "number") for (o = e; o < n2; ++o) this[o] = t2;
  else {
    let i = f2.isBuffer(t2) ? t2 : f2.from(t2, r2), u2 = i.length;
    if (u2 === 0) throw new TypeError('The value "' + t2 + '" is invalid for argument "value"');
    for (o = 0; o < n2 - e; ++o) this[o + e] = i[o % u2];
  }
  return this;
};
var A2 = {};
function C2(t2, e, n2) {
  A2[t2] = class extends n2 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(e, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t2}]`, this.stack, delete this.name;
    }
    get code() {
      return t2;
    }
    set code(r2) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: r2, writable: true });
    }
    toString() {
      return `${this.name} [${t2}]: ${this.message}`;
    }
  };
}
C2("ERR_BUFFER_OUT_OF_BOUNDS", function(t2) {
  return t2 ? `${t2} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
}, RangeError);
C2("ERR_INVALID_ARG_TYPE", function(t2, e) {
  return `The "${t2}" argument must be of type number. Received type ${typeof e}`;
}, TypeError);
C2("ERR_OUT_OF_RANGE", function(t2, e, n2) {
  let r2 = `The value of "${t2}" is out of range.`, o = n2;
  return Number.isInteger(n2) && Math.abs(n2) > 2 ** 32 ? o = D2(String(n2)) : typeof n2 == "bigint" && (o = String(n2), (n2 > BigInt(2) ** BigInt(32) || n2 < -(BigInt(2) ** BigInt(32))) && (o = D2(o)), o += "n"), r2 += ` It must be ${e}. Received ${o}`, r2;
}, RangeError);
function D2(t2) {
  let e = "", n2 = t2.length, r2 = t2[0] === "-" ? 1 : 0;
  for (; n2 >= r2 + 4; n2 -= 3) e = `_${t2.slice(n2 - 3, n2)}${e}`;
  return `${t2.slice(0, n2)}${e}`;
}
function St4(t2, e, n2) {
  U2(e, "offset"), (t2[e] === void 0 || t2[e + n2] === void 0) && T3(e, t2.length - (n2 + 1));
}
function rt(t2, e, n2, r2, o, i) {
  if (t2 > n2 || t2 < e) {
    let u2 = typeof e == "bigint" ? "n" : "", s;
    throw i > 3 ? s = e === 0 || e === BigInt(0) ? `>= 0${u2} and < 2${u2} ** ${(i + 1) * 8}${u2}` : `>= -(2${u2} ** ${(i + 1) * 8 - 1}${u2}) and < 2 ** ${(i + 1) * 8 - 1}${u2}` : s = `>= ${e}${u2} and <= ${n2}${u2}`, new A2.ERR_OUT_OF_RANGE("value", s, t2);
  }
  St4(r2, o, i);
}
function U2(t2, e) {
  if (typeof t2 != "number") throw new A2.ERR_INVALID_ARG_TYPE(e, "number", t2);
}
function T3(t2, e, n2) {
  throw Math.floor(t2) !== t2 ? (U2(t2, n2), new A2.ERR_OUT_OF_RANGE(n2 || "offset", "an integer", t2)) : e < 0 ? new A2.ERR_BUFFER_OUT_OF_BOUNDS() : new A2.ERR_OUT_OF_RANGE(n2 || "offset", `>= ${n2 ? 1 : 0} and <= ${e}`, t2);
}
var xt3 = /[^\w+/-]/g;
function Mt2(t2) {
  if (t2 = t2.split("=")[0], t2 = t2.trim().replace(xt3, ""), t2.length < 2) return "";
  for (; t2.length % 4 !== 0; ) t2 = t2 + "=";
  return t2;
}
function x4(t2, e) {
  e = e || Number.POSITIVE_INFINITY;
  let n2, r2 = t2.length, o = null, i = [];
  for (let u2 = 0; u2 < r2; ++u2) {
    if (n2 = t2.charCodeAt(u2), n2 > 55295 && n2 < 57344) {
      if (!o) {
        if (n2 > 56319) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        } else if (u2 + 1 === r2) {
          (e -= 3) > -1 && i.push(239, 191, 189);
          continue;
        }
        o = n2;
        continue;
      }
      if (n2 < 56320) {
        (e -= 3) > -1 && i.push(239, 191, 189), o = n2;
        continue;
      }
      n2 = (o - 55296 << 10 | n2 - 56320) + 65536;
    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
    if (o = null, n2 < 128) {
      if ((e -= 1) < 0) break;
      i.push(n2);
    } else if (n2 < 2048) {
      if ((e -= 2) < 0) break;
      i.push(n2 >> 6 | 192, n2 & 63 | 128);
    } else if (n2 < 65536) {
      if ((e -= 3) < 0) break;
      i.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else if (n2 < 1114112) {
      if ((e -= 4) < 0) break;
      i.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else throw new Error("Invalid code point");
  }
  return i;
}
function $t3(t2) {
  let e = [];
  for (let n2 = 0; n2 < t2.length; ++n2) e.push(t2.charCodeAt(n2) & 255);
  return e;
}
function Ct3(t2, e) {
  let n2, r2, o, i = [];
  for (let u2 = 0; u2 < t2.length && !((e -= 2) < 0); ++u2) n2 = t2.charCodeAt(u2), r2 = n2 >> 8, o = n2 % 256, i.push(o, r2);
  return i;
}
function ot2(t2) {
  return at2(Mt2(t2));
}
function O3(t2, e, n2, r2) {
  let o;
  for (o = 0; o < r2 && !(o + n2 >= e.length || o >= t2.length); ++o) e[o + n2] = t2[o];
  return o;
}
function b3(t2, e) {
  return t2 instanceof e || t2 != null && t2.constructor != null && t2.constructor.name != null && t2.constructor.name === e.name;
}
function P3(t2) {
  return t2 !== t2;
}
var Pt = function() {
  let t2 = "0123456789abcdef", e = Array.from({ length: 256 });
  for (let n2 = 0; n2 < 16; ++n2) {
    let r2 = n2 * 16;
    for (let o = 0; o < 16; ++o) e[r2 + o] = t2[n2] + t2[o];
  }
  return e;
}();
function E3(t2) {
  return typeof BigInt > "u" ? kt3 : t2;
}
function kt3() {
  throw new Error("BigInt not supported");
}
var jt2 = globalThis.Buffer || f2;
var Yt3 = globalThis.Blob;
var Dt2 = v4("buffer.resolveObjectURL");
var zt4 = v4("buffer.transcode");
var Gt4 = v4("buffer.isUtf8");
var Vt4 = v4("buffer.isAscii");
var Xt4 = globalThis.btoa.bind(globalThis);
var qt4 = globalThis.atob.bind(globalThis);

// esm:https://esm.sh/*@vue/devtools-shared@8.0.7/esnext/devtools-shared.mjs
var E4 = Object.create;
var h2 = Object.defineProperty;
var P4 = Object.getOwnPropertyDescriptor;
var S4 = Object.getOwnPropertyNames;
var m5 = Object.getPrototypeOf;
var M4 = Object.prototype.hasOwnProperty;
var x5 = (r2, c3) => () => (c3 || r2((c3 = { exports: {} }).exports, c3), c3.exports);
var I2 = (r2, c3, u2, O6) => {
  if (c3 && typeof c3 == "object" || typeof c3 == "function") for (var g8 = S4(c3), i = 0, a2 = g8.length, s; i < a2; i++) s = g8[i], !M4.call(r2, s) && s !== u2 && h2(r2, s, { get: ((y8) => c3[y8]).bind(null, s), enumerable: !(O6 = P4(c3, s)) || O6.enumerable });
  return r2;
};
var N2 = (r2, c3, u2) => (u2 = r2 != null ? E4(m5(r2)) : {}, I2(c3 || !r2 || !r2.__esModule ? h2(u2, "default", { value: r2, enumerable: true }) : u2, r2));
var T4 = typeof navigator < "u";
var A3 = typeof window < "u" ? window : typeof globalThis < "u" || typeof globalThis < "u" ? globalThis : {};
var B4 = typeof A3.chrome < "u" && !!A3.chrome.devtools;
var C3 = T4 && A3.self !== A3.top;
var k2 = typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron");
var K5 = typeof window < "u" && !!window.__NUXT__;
var D3 = x5((r2, c3) => {
  c3.exports = O6;
  function u2(i) {
    return i instanceof jt2 ? jt2.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
  }
  function O6(i) {
    if (i = i || {}, i.circles) return g8(i);
    let a2 = /* @__PURE__ */ new Map();
    if (a2.set(Date, (n2) => new Date(n2)), a2.set(Map, (n2, f3) => new Map(y8(Array.from(n2), f3))), a2.set(Set, (n2, f3) => new Set(y8(Array.from(n2), f3))), i.constructorHandlers) for (let n2 of i.constructorHandlers) a2.set(n2[0], n2[1]);
    let s = null;
    return i.proto ? d4 : _5;
    function y8(n2, f3) {
      let e = Object.keys(n2), t2 = new Array(e.length);
      for (let l3 = 0; l3 < e.length; l3++) {
        let o = e[l3], p3 = n2[o];
        typeof p3 != "object" || p3 === null ? t2[o] = p3 : p3.constructor !== Object && (s = a2.get(p3.constructor)) ? t2[o] = s(p3, f3) : ArrayBuffer.isView(p3) ? t2[o] = u2(p3) : t2[o] = f3(p3);
      }
      return t2;
    }
    function _5(n2) {
      if (typeof n2 != "object" || n2 === null) return n2;
      if (Array.isArray(n2)) return y8(n2, _5);
      if (n2.constructor !== Object && (s = a2.get(n2.constructor))) return s(n2, _5);
      let f3 = {};
      for (let e in n2) {
        if (Object.hasOwnProperty.call(n2, e) === false) continue;
        let t2 = n2[e];
        typeof t2 != "object" || t2 === null ? f3[e] = t2 : t2.constructor !== Object && (s = a2.get(t2.constructor)) ? f3[e] = s(t2, _5) : ArrayBuffer.isView(t2) ? f3[e] = u2(t2) : f3[e] = _5(t2);
      }
      return f3;
    }
    function d4(n2) {
      if (typeof n2 != "object" || n2 === null) return n2;
      if (Array.isArray(n2)) return y8(n2, d4);
      if (n2.constructor !== Object && (s = a2.get(n2.constructor))) return s(n2, d4);
      let f3 = {};
      for (let e in n2) {
        let t2 = n2[e];
        typeof t2 != "object" || t2 === null ? f3[e] = t2 : t2.constructor !== Object && (s = a2.get(t2.constructor)) ? f3[e] = s(t2, d4) : ArrayBuffer.isView(t2) ? f3[e] = u2(t2) : f3[e] = d4(t2);
      }
      return f3;
    }
  }
  function g8(i) {
    let a2 = [], s = [], y8 = /* @__PURE__ */ new Map();
    if (y8.set(Date, (e) => new Date(e)), y8.set(Map, (e, t2) => new Map(d4(Array.from(e), t2))), y8.set(Set, (e, t2) => new Set(d4(Array.from(e), t2))), i.constructorHandlers) for (let e of i.constructorHandlers) y8.set(e[0], e[1]);
    let _5 = null;
    return i.proto ? f3 : n2;
    function d4(e, t2) {
      let l3 = Object.keys(e), o = new Array(l3.length);
      for (let p3 = 0; p3 < l3.length; p3++) {
        let w4 = l3[p3], b7 = e[w4];
        if (typeof b7 != "object" || b7 === null) o[w4] = b7;
        else if (b7.constructor !== Object && (_5 = y8.get(b7.constructor))) o[w4] = _5(b7, t2);
        else if (ArrayBuffer.isView(b7)) o[w4] = u2(b7);
        else {
          let j5 = a2.indexOf(b7);
          j5 !== -1 ? o[w4] = s[j5] : o[w4] = t2(b7);
        }
      }
      return o;
    }
    function n2(e) {
      if (typeof e != "object" || e === null) return e;
      if (Array.isArray(e)) return d4(e, n2);
      if (e.constructor !== Object && (_5 = y8.get(e.constructor))) return _5(e, n2);
      let t2 = {};
      a2.push(e), s.push(t2);
      for (let l3 in e) {
        if (Object.hasOwnProperty.call(e, l3) === false) continue;
        let o = e[l3];
        if (typeof o != "object" || o === null) t2[l3] = o;
        else if (o.constructor !== Object && (_5 = y8.get(o.constructor))) t2[l3] = _5(o, n2);
        else if (ArrayBuffer.isView(o)) t2[l3] = u2(o);
        else {
          let p3 = a2.indexOf(o);
          p3 !== -1 ? t2[l3] = s[p3] : t2[l3] = n2(o);
        }
      }
      return a2.pop(), s.pop(), t2;
    }
    function f3(e) {
      if (typeof e != "object" || e === null) return e;
      if (Array.isArray(e)) return d4(e, f3);
      if (e.constructor !== Object && (_5 = y8.get(e.constructor))) return _5(e, f3);
      let t2 = {};
      a2.push(e), s.push(t2);
      for (let l3 in e) {
        let o = e[l3];
        if (typeof o != "object" || o === null) t2[l3] = o;
        else if (o.constructor !== Object && (_5 = y8.get(o.constructor))) t2[l3] = _5(o, f3);
        else if (ArrayBuffer.isView(o)) t2[l3] = u2(o);
        else {
          let p3 = a2.indexOf(o);
          p3 !== -1 ? t2[l3] = s[p3] : t2[l3] = f3(o);
        }
      }
      return a2.pop(), s.pop(), t2;
    }
  }
});
var R4 = N2(D3(), 1);
var L2 = /(?:^|[-_/])(\w)/g;
function v5(r2, c3) {
  return c3 ? c3.toUpperCase() : "";
}
function X4(r2) {
  return r2 && `${r2}`.replace(L2, v5);
}
function ee2(r2, c3) {
  let u2 = r2.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  u2.endsWith(`index${c3}`) && (u2 = u2.replace(`/index${c3}`, c3));
  let O6 = u2.lastIndexOf("/"), g8 = u2.substring(O6 + 1);
  if (c3) {
    let i = g8.lastIndexOf(c3);
    return g8.substring(0, i);
  }
  return "";
}
var ne3 = (0, R4.default)({ circles: true });

// esm:https://esm.sh/*perfect-debounce@2.1.0/esnext/perfect-debounce.mjs
var h3 = { trailing: true };
function T5(a2, i = 25, t2 = {}) {
  if (t2 = { ...h3, ...t2 }, !Number.isFinite(i)) throw new TypeError("Expected `wait` to be a finite number");
  let f3, n2, u2 = [], r2, l3, o = (e, s) => (r2 = y5(a2, e, s), r2.finally(() => {
    if (r2 = null, t2.trailing && l3 && !n2) {
      let m7 = o(e, l3);
      return l3 = null, m7;
    }
  }), r2), c3 = function(...e) {
    return t2.trailing && (l3 = e), r2 || new Promise((s) => {
      let m7 = !n2 && t2.leading;
      clearTimeout(n2), n2 = setTimeout(() => {
        n2 = null;
        let g8 = t2.leading ? f3 : o(this, e);
        l3 = null;
        for (let p3 of u2) p3(g8);
        u2 = [];
      }, i), m7 ? (f3 = o(this, e), s(f3)) : u2.push(s);
    });
  }, d4 = (e) => {
    e && (clearTimeout(e), n2 = null);
  };
  return c3.isPending = () => !!n2, c3.cancel = () => {
    d4(n2), u2 = [], l3 = null;
  }, c3.flush = () => {
    if (d4(n2), !l3 || r2) return;
    let e = l3;
    return l3 = null, o(this, e);
  }, c3;
}
async function y5(a2, i, t2) {
  return await a2.apply(i, t2);
}

// esm:https://esm.sh/*hookable@6.0.1/esnext/hookable.mjs
function c2(e, o = {}, t2) {
  for (let s in e) {
    let i = e[s], n2 = t2 ? `${t2}:${s}` : s;
    typeof i == "object" && i !== null ? c2(i, o, n2) : typeof i == "function" && (o[n2] = i);
  }
  return o;
}
var u = (() => {
  if (console.createTask) return console.createTask;
  let e = { run: (o) => o() };
  return () => e;
})();
function a(e, o, t2, s) {
  for (let i = t2; i < e.length; i += 1) try {
    let n2 = s ? s.run(() => e[i](...o)) : e[i](...o);
    if (n2 instanceof Promise) return n2.then(() => a(e, o, i + 1, s));
  } catch (n2) {
    return Promise.reject(n2);
  }
}
function g5(e, o, t2) {
  if (e.length > 0) return a(e, o, 0, u(t2));
}
function H3(e, o, t2) {
  if (e.length > 0) {
    let s = u(t2);
    return Promise.all(e.map((i) => s.run(() => i(...o))));
  }
}
function l2(e, o) {
  for (let t2 of [...e]) t2(o);
}
var b4 = class {
  _hooks;
  _before;
  _after;
  _deprecatedHooks;
  _deprecatedMessages;
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(e, o, t2 = {}) {
    if (!e || typeof o != "function") return () => {
    };
    let s = e, i;
    for (; this._deprecatedHooks[e]; ) i = this._deprecatedHooks[e], e = i.to;
    if (i && !t2.allowDeprecated) {
      let n2 = i.message;
      n2 || (n2 = `${s} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(n2) || (console.warn(n2), this._deprecatedMessages.add(n2));
    }
    if (!o.name) try {
      Object.defineProperty(o, "name", { get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb", configurable: true });
    } catch {
    }
    return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(o), () => {
      o && (this.removeHook(e, o), o = void 0);
    };
  }
  hookOnce(e, o) {
    let t2, s = (...i) => (typeof t2 == "function" && t2(), t2 = void 0, s = void 0, o(...i));
    return t2 = this.hook(e, s), t2;
  }
  removeHook(e, o) {
    let t2 = this._hooks[e];
    if (t2) {
      let s = t2.indexOf(o);
      s !== -1 && t2.splice(s, 1), t2.length === 0 && (this._hooks[e] = void 0);
    }
  }
  deprecateHook(e, o) {
    this._deprecatedHooks[e] = typeof o == "string" ? { to: o } : o;
    let t2 = this._hooks[e] || [];
    this._hooks[e] = void 0;
    for (let s of t2) this.hook(e, s);
  }
  deprecateHooks(e) {
    for (let o in e) this.deprecateHook(o, e[o]);
  }
  addHooks(e) {
    let o = c2(e), t2 = Object.keys(o).map((s) => this.hook(s, o[s]));
    return () => {
      for (let s of t2) s();
      t2.length = 0;
    };
  }
  removeHooks(e) {
    let o = c2(e);
    for (let t2 in o) this.removeHook(t2, o[t2]);
  }
  removeAllHooks() {
    this._hooks = {};
  }
  callHook(e, ...o) {
    return this.callHookWith(g5, e, o);
  }
  callHookParallel(e, ...o) {
    return this.callHookWith(H3, e, o);
  }
  callHookWith(e, o, t2) {
    let s = this._before || this._after ? { name: o, args: t2, context: {} } : void 0;
    this._before && l2(this._before, s);
    let i = e(this._hooks[o] ? [...this._hooks[o]] : [], t2, o);
    return i instanceof Promise ? i.finally(() => {
      this._after && s && l2(this._after, s);
    }) : (this._after && s && l2(this._after, s), i);
  }
  beforeEach(e) {
    return this._before = this._before || [], this._before.push(e), () => {
      if (this._before !== void 0) {
        let o = this._before.indexOf(e);
        o !== -1 && this._before.splice(o, 1);
      }
    };
  }
  afterEach(e) {
    return this._after = this._after || [], this._after.push(e), () => {
      if (this._after !== void 0) {
        let o = this._after.indexOf(e);
        o !== -1 && this._after.splice(o, 1);
      }
    };
  }
};
function x6() {
  return new b4();
}

// esm:https://esm.sh/*birpc@4.0.0/esnext/birpc.mjs
var k3 = Math.random.bind(Math);
var { clearTimeout: x7, setTimeout: D4 } = globalThis;

// esm:https://esm.sh/*@vue/devtools-kit@8.0.7/esnext/devtools-kit.mjs
var Xn = Object.create;
var Ht2 = Object.defineProperty;
var Wn2 = Object.getOwnPropertyDescriptor;
var qn2 = Object.getOwnPropertyNames;
var Zn2 = Object.getPrototypeOf;
var Jn2 = Object.prototype.hasOwnProperty;
var Yt4 = (e, t2) => () => (t2 || e((t2 = { exports: {} }).exports, t2), t2.exports);
var Qn = (e, t2, n2, r2) => {
  if (t2 && typeof t2 == "object" || typeof t2 == "function") for (var o = qn2(t2), i = 0, s = o.length, a2; i < s; i++) a2 = o[i], !Jn2.call(e, a2) && a2 !== n2 && Ht2(e, a2, { get: ((l3) => t2[l3]).bind(null, a2), enumerable: !(r2 = Wn2(t2, a2)) || r2.enumerable });
  return e;
};
var er2 = (e, t2, n2) => (n2 = e != null ? Xn(Zn2(e)) : {}, Qn(t2 || !e || !e.__esModule ? Ht2(n2, "default", { value: e, enumerable: true }) : n2, e));
function nr2(e) {
  if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
  let t2 = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return t2 === "index" && e.__file?.endsWith("index.vue") ? "" : t2;
}
function Xt5(e) {
  let t2 = e.__file;
  if (t2) return X4(ee2(t2, ".vue"));
}
function Rt4(e, t2) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t2, t2;
}
function w2(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function ct3(e) {
  let t2 = e.subTree?.type, n2 = w2(e);
  return n2 ? n2?.types?.Fragment === t2 : false;
}
function b5(e) {
  let t2 = nr2(e?.type || {});
  if (t2) return t2;
  if (e?.root === e) return "Root";
  for (let r2 in e.parent?.type?.components) if (e.parent.type.components[r2] === e?.type) return Rt4(e, r2);
  for (let r2 in e.appContext?.components) if (e.appContext.components[r2] === e?.type) return Rt4(e, r2);
  let n2 = Xt5(e?.type || {});
  return n2 || "Anonymous Component";
}
function lt4(e) {
  return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function re6(e, t2) {
  return t2 = t2 || `${e.id}:root`, e.instanceMap.get(t2) || e.instanceMap.get(":root");
}
function ir() {
  let e = { top: 0, bottom: 0, left: 0, right: 0, get width() {
    return e.right - e.left;
  }, get height() {
    return e.bottom - e.top;
  } };
  return e;
}
var Ie3;
function sr(e) {
  return Ie3 || (Ie3 = document.createRange()), Ie3.selectNode(e), Ie3.getBoundingClientRect();
}
function ar(e) {
  let t2 = ir();
  if (!e.children) return t2;
  for (let n2 = 0, r2 = e.children.length; n2 < r2; n2++) {
    let o = e.children[n2], i;
    if (o.component) i = J3(o.component);
    else if (o.el) {
      let s = o.el;
      s.nodeType === 1 || s.getBoundingClientRect ? i = s.getBoundingClientRect() : s.nodeType === 3 && s.data.trim() && (i = sr(s));
    }
    i && cr(t2, i);
  }
  return t2;
}
function cr(e, t2) {
  return (!e.top || t2.top < e.top) && (e.top = t2.top), (!e.bottom || t2.bottom > e.bottom) && (e.bottom = t2.bottom), (!e.left || t2.left < e.left) && (e.left = t2.left), (!e.right || t2.right > e.right) && (e.right = t2.right), e;
}
var vt5 = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
function J3(e) {
  let t2 = e.subTree.el;
  return typeof window > "u" ? vt5 : ct3(e) ? ar(e.subTree) : t2?.nodeType === 1 ? t2?.getBoundingClientRect() : e.subTree.component ? J3(e.subTree.component) : vt5;
}
function oe5(e) {
  return ct3(e) ? lr(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function lr(e) {
  if (!e.children) return [];
  let t2 = [];
  return e.children.forEach((n2) => {
    n2.component ? t2.push(...oe5(n2.component)) : n2?.el && t2.push(n2.el);
  }), t2;
}
var Wt4 = "__vue-devtools-component-inspector__";
var qt5 = "__vue-devtools-component-inspector__card__";
var Zt3 = "__vue-devtools-component-inspector__name__";
var Jt4 = "__vue-devtools-component-inspector__indicator__";
var Qt3 = { display: "block", zIndex: 2147483640, position: "fixed", backgroundColor: "#42b88325", border: "1px solid #42b88350", borderRadius: "5px", transition: "all 0.1s ease-in", pointerEvents: "none" };
var ur2 = { fontFamily: "Arial, Helvetica, sans-serif", padding: "5px 8px", borderRadius: "4px", textAlign: "left", position: "absolute", left: 0, color: "#e9e9e9", fontSize: "14px", fontWeight: 600, lineHeight: "24px", backgroundColor: "#42b883", boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)" };
var _r2 = { display: "inline-block", fontWeight: 400, fontStyle: "normal", fontSize: "12px", opacity: 0.7 };
function ae4() {
  return document.getElementById(Wt4);
}
function fr() {
  return document.getElementById(qt5);
}
function pr() {
  return document.getElementById(Jt4);
}
function dr() {
  return document.getElementById(Zt3);
}
function ut3(e) {
  return { left: `${Math.round(e.left * 100) / 100}px`, top: `${Math.round(e.top * 100) / 100}px`, width: `${Math.round(e.width * 100) / 100}px`, height: `${Math.round(e.height * 100) / 100}px` };
}
function _t5(e) {
  let t2 = document.createElement("div");
  t2.id = e.elementId ?? Wt4, Object.assign(t2.style, { ...Qt3, ...ut3(e.bounds), ...e.style });
  let n2 = document.createElement("span");
  n2.id = qt5, Object.assign(n2.style, { ...ur2, top: e.bounds.top < 35 ? 0 : "-35px" });
  let r2 = document.createElement("span");
  r2.id = Zt3, r2.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  let o = document.createElement("i");
  return o.id = Jt4, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(o.style, _r2), n2.appendChild(r2), n2.appendChild(o), t2.appendChild(n2), document.body.appendChild(t2), t2;
}
function ft2(e) {
  let t2 = ae4(), n2 = fr(), r2 = dr(), o = pr();
  t2 && (Object.assign(t2.style, { ...Qt3, ...ut3(e.bounds) }), Object.assign(n2.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r2.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Er(e) {
  let t2 = J3(e);
  if (!t2.width && !t2.height) return;
  let n2 = b5(e);
  ae4() ? ft2({ bounds: t2, name: n2 }) : _t5({ bounds: t2, name: n2 });
}
function en2() {
  let e = ae4();
  e && (e.style.display = "none");
}
var Je3 = null;
function Qe3(e) {
  let t2 = e.target;
  if (t2) {
    let n2 = t2.__vueParentComponent;
    if (n2 && (Je3 = n2, n2.vnode.el)) {
      let r2 = J3(n2), o = b5(n2);
      ae4() ? ft2({ bounds: r2, name: o }) : _t5({ bounds: r2, name: o });
    }
  }
}
function mr(e, t2) {
  e.preventDefault(), e.stopPropagation(), Je3 && t2(lt4(Je3));
}
var ve3 = null;
function Tr2() {
  en2(), window.removeEventListener("mouseover", Qe3), window.removeEventListener("click", ve3, true), ve3 = null;
}
function gr2() {
  return window.addEventListener("mouseover", Qe3), new Promise((e) => {
    function t2(n2) {
      n2.preventDefault(), n2.stopPropagation(), mr(n2, (r2) => {
        window.removeEventListener("click", t2, true), ve3 = null, window.removeEventListener("mouseover", Qe3);
        let o = ae4();
        o && (o.style.display = "none"), e(JSON.stringify({ id: r2 }));
      });
    }
    ve3 = t2, window.addEventListener("click", t2, true);
  });
}
function Or2(e) {
  let t2 = re6(g6.value, e.id);
  if (t2) {
    let [n2] = oe5(t2);
    if (typeof n2.scrollIntoView == "function") n2.scrollIntoView({ behavior: "smooth" });
    else {
      let r2 = J3(t2), o = document.createElement("div"), i = { ...ut3(r2), position: "absolute" };
      Object.assign(o.style, i), document.body.appendChild(o), o.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      let r2 = J3(t2);
      if (r2.width || r2.height) {
        let o = b5(t2), i = ae4();
        i ? ft2({ ...e, name: o, bounds: r2 }) : _t5({ ...e, name: o, bounds: r2 }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
A3.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= true;
function hr2(e) {
  let t2 = 0, n2 = setInterval(() => {
    A3.__VUE_INSPECTOR__ && (clearInterval(n2), t2 += 30, e()), t2 >= 5e3 && clearInterval(n2);
  }, 30);
}
function yr() {
  let e = A3.__VUE_INSPECTOR__, t2 = e.openInEditor;
  e.openInEditor = async (...n2) => {
    e.disable(), t2(...n2);
  };
}
function Sr() {
  return new Promise((e) => {
    function t2() {
      yr(), e(A3.__VUE_INSPECTOR__);
    }
    A3.__VUE_INSPECTOR__ ? t2() : hr2(() => {
      t2();
    });
  });
}
var Pe3 = function(e) {
  return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function Ir(e) {
  return !!(e && e[Pe3.IS_READONLY]);
}
function tn(e) {
  return Ir(e) ? tn(e[Pe3.RAW]) : !!(e && e[Pe3.IS_REACTIVE]);
}
function We5(e) {
  return !!(e && e.__v_isRef === true);
}
function pe3(e) {
  let t2 = e && e[Pe3.RAW];
  return t2 ? pe3(t2) : e;
}
var nn2 = class {
  constructor() {
    this.refEditor = new Nr();
  }
  set(e, t2, n2, r2) {
    let o = Array.isArray(t2) ? t2 : t2.split(".");
    for (; o.length > 1; ) {
      let a2 = o.shift();
      e instanceof Map ? e = e.get(a2) : e instanceof Set ? e = Array.from(e.values())[a2] : e = e[a2], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    let i = o[0], s = this.refEditor.get(e)[i];
    r2 ? r2(e, i, n2) : this.refEditor.isRef(s) ? this.refEditor.set(s, n2) : e[i] = n2;
  }
  get(e, t2) {
    let n2 = Array.isArray(t2) ? t2 : t2.split(".");
    for (let r2 = 0; r2 < n2.length; r2++) if (e instanceof Map ? e = e.get(n2[r2]) : e = e[n2[r2]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
    return e;
  }
  has(e, t2, n2 = false) {
    if (typeof e > "u") return false;
    let r2 = Array.isArray(t2) ? t2.slice() : t2.split("."), o = n2 ? 2 : 1;
    for (; e && r2.length > o; ) {
      let i = r2.shift();
      e = e[i], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, r2[0]);
  }
  createDefaultSetCallback(e) {
    return (t2, n2, r2) => {
      if ((e.remove || e.newKey) && (Array.isArray(t2) ? t2.splice(n2, 1) : pe3(t2) instanceof Map ? t2.delete(n2) : pe3(t2) instanceof Set ? t2.delete(Array.from(t2.values())[n2]) : Reflect.deleteProperty(t2, n2)), !e.remove) {
        let o = t2[e.newKey || n2];
        this.refEditor.isRef(o) ? this.refEditor.set(o, r2) : pe3(t2) instanceof Map ? t2.set(e.newKey || n2, r2) : pe3(t2) instanceof Set ? t2.add(r2) : t2[e.newKey || n2] = r2;
      }
    };
  }
};
var Nr = class {
  set(e, t2) {
    if (We5(e)) e.value = t2;
    else {
      if (e instanceof Set && Array.isArray(t2)) {
        e.clear(), t2.forEach((o) => e.add(o));
        return;
      }
      let n2 = Object.keys(t2);
      if (e instanceof Map) {
        let o = new Set(e.keys());
        n2.forEach((i) => {
          e.set(i, Reflect.get(t2, i)), o.delete(i);
        }), o.forEach((i) => e.delete(i));
        return;
      }
      let r2 = new Set(Object.keys(e));
      n2.forEach((o) => {
        Reflect.set(e, o, Reflect.get(t2, o)), r2.delete(o);
      }), r2.forEach((o) => Reflect.deleteProperty(e, o));
    }
  }
  get(e) {
    return We5(e) ? e.value : e;
  }
  isRef(e) {
    return We5(e) || tn(e);
  }
};
var Rr = new nn2();
var rn2 = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Dr2() {
  if (typeof window > "u" || !T4 || typeof localStorage > "u" || localStorage === null) return { recordingState: false, mouseEventEnabled: false, keyboardEventEnabled: false, componentEventEnabled: false, performanceEventEnabled: false, selected: "" };
  let e = typeof localStorage.getItem < "u" ? localStorage.getItem(rn2) : null;
  return e ? JSON.parse(e) : { recordingState: false, mouseEventEnabled: false, keyboardEventEnabled: false, componentEventEnabled: false, performanceEventEnabled: false, selected: "" };
}
A3.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var on2 = new Proxy(A3.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t2, n2) {
  return Reflect.get(e, t2, n2);
} });
function Ar(e, t2) {
  d3.timelineLayersState[t2.id] = false, on2.push({ ...e, descriptorId: t2.id, appRecord: w2(t2.app) });
}
A3.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var pt4 = new Proxy(A3.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t2, n2) {
  return Reflect.get(e, t2, n2);
} });
var sn2 = T5(() => {
  V3.hooks.callHook(x8.SEND_INSPECTOR_TO_CLIENT, an2());
});
function Vr2(e, t2) {
  pt4.push({ options: e, descriptor: t2, treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...", stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...", treeFilter: "", selectedNodeId: "", appRecord: w2(t2.app) }), sn2();
}
function an2() {
  return pt4.filter((e) => e.descriptor.app === g6.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    let t2 = e.descriptor, n2 = e.options;
    return { id: n2.id, label: n2.label, logo: t2.logo, icon: `custom-ic-baseline-${n2?.icon?.replace(/_/g, "-")}`, packageName: t2.packageName, homepage: t2.homepage, pluginId: t2.id };
  });
}
function Z5(e, t2) {
  return pt4.find((n2) => n2.options.id === e && (t2 ? n2.descriptor.app === t2 : true));
}
var R5 = function(e) {
  return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({});
var O4 = function(e) {
  return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({});
var x8 = function(e) {
  return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function Lr2() {
  let e = x6();
  e.hook(O4.ADD_INSPECTOR, ({ inspector: r2, plugin: o }) => {
    Vr2(r2, o.descriptor);
  });
  let t2 = T5(async ({ inspectorId: r2, plugin: o }) => {
    if (!r2 || !o?.descriptor?.app || d3.highPerfModeEnabled) return;
    let i = Z5(r2, o.descriptor.app), s = { app: o.descriptor.app, inspectorId: r2, filter: i?.treeFilter || "", rootNodes: [] };
    await new Promise((a2) => {
      e.callHookWith(async (l3) => {
        await Promise.all(l3.map((u2) => u2(s))), a2();
      }, R5.GET_INSPECTOR_TREE);
    }), e.callHookWith(async (a2) => {
      await Promise.all(a2.map((l3) => l3({ inspectorId: r2, rootNodes: s.rootNodes })));
    }, x8.SEND_INSPECTOR_TREE_TO_CLIENT);
  }, 120);
  e.hook(O4.SEND_INSPECTOR_TREE, t2);
  let n2 = T5(async ({ inspectorId: r2, plugin: o }) => {
    if (!r2 || !o?.descriptor?.app || d3.highPerfModeEnabled) return;
    let i = Z5(r2, o.descriptor.app), s = { app: o.descriptor.app, inspectorId: r2, nodeId: i?.selectedNodeId || "", state: null }, a2 = { currentTab: `custom-inspector:${r2}` };
    s.nodeId && await new Promise((l3) => {
      e.callHookWith(async (u2) => {
        await Promise.all(u2.map((p3) => p3(s, a2))), l3();
      }, R5.GET_INSPECTOR_STATE);
    }), e.callHookWith(async (l3) => {
      await Promise.all(l3.map((u2) => u2({ inspectorId: r2, nodeId: s.nodeId, state: s.state })));
    }, x8.SEND_INSPECTOR_STATE_TO_CLIENT);
  }, 120);
  return e.hook(O4.SEND_INSPECTOR_STATE, n2), e.hook(O4.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: r2, nodeId: o, plugin: i }) => {
    let s = Z5(r2, i.descriptor.app);
    s && (s.selectedNodeId = o);
  }), e.hook(O4.TIMELINE_LAYER_ADDED, ({ options: r2, plugin: o }) => {
    Ar(r2, o.descriptor);
  }), e.hook(O4.TIMELINE_EVENT_ADDED, ({ options: r2, plugin: o }) => {
    d3.highPerfModeEnabled || !d3.timelineLayersState?.[o.descriptor.id] && !["performance", "component-event", "keyboard", "mouse"].includes(r2.layerId) || e.callHookWith(async (i) => {
      await Promise.all(i.map((s) => s(r2)));
    }, x8.SEND_TIMELINE_EVENT_TO_CLIENT);
  }), e.hook(O4.GET_COMPONENT_INSTANCES, async ({ app: r2 }) => {
    let o = r2.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!o) return null;
    let i = o.id.toString();
    return [...o.instanceMap].filter(([s]) => s.split(":")[0] === i).map(([, s]) => s);
  }), e.hook(O4.GET_COMPONENT_BOUNDS, async ({ instance: r2 }) => J3(r2)), e.hook(O4.GET_COMPONENT_NAME, ({ instance: r2 }) => b5(r2)), e.hook(O4.COMPONENT_HIGHLIGHT, ({ uid: r2 }) => {
    let o = g6.value.instanceMap.get(r2);
    o && Er(o);
  }), e.hook(O4.COMPONENT_UNHIGHLIGHT, () => {
    en2();
  }), e;
}
A3.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [];
A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {};
A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "";
A3.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [];
A3.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var M5 = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function cn() {
  return { connected: false, clientConnected: false, vitePluginDetected: true, appRecords: [], activeAppRecordId: "", tabs: [], commands: [], highPerfModeEnabled: true, devtoolsClientDetected: {}, perfUniqueGroupId: 0, timelineLayersState: Dr2() };
}
A3[M5] ??= cn();
var wr2 = T5((e) => {
  V3.hooks.callHook(x8.DEVTOOLS_STATE_UPDATED, { state: e });
});
var br2 = T5((e, t2) => {
  V3.hooks.callHook(x8.DEVTOOLS_CONNECTED_UPDATED, { state: e, oldState: t2 });
});
var F5 = new Proxy(A3.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t2, n2) {
  return t2 === "value" ? A3.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : A3.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t2];
} });
var g6 = new Proxy(A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t2, n2) {
  return t2 === "value" ? A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t2 === "id" ? A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t2];
} });
function ce5() {
  wr2({ ...A3[M5], appRecords: F5.value, activeAppRecordId: g6.id, tabs: A3.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__, commands: A3.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ });
}
function et4(e) {
  A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, ce5();
}
function ln(e) {
  A3.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, ce5();
}
var d3 = new Proxy(A3[M5], { get(e, t2) {
  return t2 === "appRecords" ? F5 : t2 === "activeAppRecordId" ? g6.id : t2 === "tabs" ? A3.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t2 === "commands" ? A3.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : A3[M5][t2];
}, deleteProperty(e, t2) {
  return delete e[t2], true;
}, set(e, t2, n2) {
  return { ...A3[M5] }, e[t2] = n2, A3[M5][t2] = n2, true;
} });
function Mr2(e = {}) {
  let { file: t2, host: n2, baseUrl: r2 = window.location.origin, line: o = 0, column: i = 0 } = e;
  if (t2) {
    if (n2 === "chrome-extension") {
      let s = t2.replace(/\\/g, "\\\\"), a2 = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
      fetch(`${a2}__open-in-editor?file=${encodeURI(t2)}`).then((l3) => {
        if (!l3.ok) {
          let u2 = `Opening component ${s} failed`;
          console.log(`%c${u2}`, "color:red");
        }
      });
    } else if (d3.vitePluginDetected) {
      let s = A3.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r2;
      A3.__VUE_INSPECTOR__.openInEditor(s, t2, o, i);
    }
  }
}
A3.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var he3 = new Proxy(A3.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t2, n2) {
  return Reflect.get(e, t2, n2);
} });
function nt3(e) {
  let t2 = {};
  return Object.keys(e).forEach((n2) => {
    t2[n2] = e[n2].defaultValue;
  }), t2;
}
function dt4(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Gr2(e) {
  return (he3.find((t2) => t2[0].id === e && !!t2[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function un2(e, t2) {
  let n2 = dt4(e);
  if (n2) {
    let r2 = localStorage.getItem(n2);
    if (r2) return JSON.parse(r2);
  }
  return nt3(e ? (he3.find((r2) => r2[0].id === e)?.[0] ?? null)?.settings ?? {} : t2);
}
function _n(e, t2) {
  let n2 = dt4(e);
  localStorage.getItem(n2) || localStorage.setItem(n2, JSON.stringify(nt3(t2)));
}
function Kr(e, t2, n2) {
  let r2 = dt4(e), o = localStorage.getItem(r2), i = JSON.parse(o || "{}"), s = { ...i, [t2]: n2 };
  localStorage.setItem(r2, JSON.stringify(s)), V3.hooks.callHookWith((a2) => {
    a2.forEach((l3) => l3({ pluginId: e, key: t2, oldValue: i[t2], newValue: n2, settings: s }));
  }, R5.SET_PLUGIN_SETTINGS);
}
var T6 = function(e) {
  return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({});
var y6 = A3.__VUE_DEVTOOLS_HOOK ??= x6();
var $r = { vueAppInit(e) {
  y6.hook(T6.APP_INIT, e);
}, vueAppUnmount(e) {
  y6.hook(T6.APP_UNMOUNT, e);
}, vueAppConnected(e) {
  y6.hook(T6.APP_CONNECTED, e);
}, componentAdded(e) {
  return y6.hook(T6.COMPONENT_ADDED, e);
}, componentEmit(e) {
  return y6.hook(T6.COMPONENT_EMIT, e);
}, componentUpdated(e) {
  return y6.hook(T6.COMPONENT_UPDATED, e);
}, componentRemoved(e) {
  return y6.hook(T6.COMPONENT_REMOVED, e);
}, setupDevtoolsPlugin(e) {
  y6.hook(T6.SETUP_DEVTOOLS_PLUGIN, e);
}, perfStart(e) {
  return y6.hook(T6.PERFORMANCE_START, e);
}, perfEnd(e) {
  return y6.hook(T6.PERFORMANCE_END, e);
} };
var A4 = { on: $r, setupDevToolsPlugin(e, t2) {
  return y6.callHook(T6.SETUP_DEVTOOLS_PLUGIN, e, t2);
} };
var jr2 = class {
  constructor({ plugin: e, ctx: t2 }) {
    this.hooks = t2.hooks, this.plugin = e;
  }
  get on() {
    return { visitComponentTree: (e) => {
      this.hooks.hook(R5.VISIT_COMPONENT_TREE, e);
    }, inspectComponent: (e) => {
      this.hooks.hook(R5.INSPECT_COMPONENT, e);
    }, editComponentState: (e) => {
      this.hooks.hook(R5.EDIT_COMPONENT_STATE, e);
    }, getInspectorTree: (e) => {
      this.hooks.hook(R5.GET_INSPECTOR_TREE, e);
    }, getInspectorState: (e) => {
      this.hooks.hook(R5.GET_INSPECTOR_STATE, e);
    }, editInspectorState: (e) => {
      this.hooks.hook(R5.EDIT_INSPECTOR_STATE, e);
    }, inspectTimelineEvent: (e) => {
      this.hooks.hook(R5.INSPECT_TIMELINE_EVENT, e);
    }, timelineCleared: (e) => {
      this.hooks.hook(R5.TIMELINE_CLEARED, e);
    }, setPluginSettings: (e) => {
      this.hooks.hook(R5.SET_PLUGIN_SETTINGS, e);
    } };
  }
  notifyComponentUpdate(e) {
    if (d3.highPerfModeEnabled) return;
    let t2 = an2().find((n2) => n2.packageName === this.plugin.descriptor.packageName);
    if (t2?.id) {
      if (e) {
        let n2 = [e.appContext.app, e.uid, e.parent?.uid, e];
        y6.callHook(T6.COMPONENT_UPDATED, ...n2);
      } else y6.callHook(T6.COMPONENT_UPDATED);
      this.hooks.callHook(O4.SEND_INSPECTOR_STATE, { inspectorId: t2.id, plugin: this.plugin });
    }
  }
  addInspector(e) {
    this.hooks.callHook(O4.ADD_INSPECTOR, { inspector: e, plugin: this.plugin }), this.plugin.descriptor.settings && _n(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    d3.highPerfModeEnabled || this.hooks.callHook(O4.SEND_INSPECTOR_TREE, { inspectorId: e, plugin: this.plugin });
  }
  sendInspectorState(e) {
    d3.highPerfModeEnabled || this.hooks.callHook(O4.SEND_INSPECTOR_STATE, { inspectorId: e, plugin: this.plugin });
  }
  selectInspectorNode(e, t2) {
    this.hooks.callHook(O4.CUSTOM_INSPECTOR_SELECT_NODE, { inspectorId: e, nodeId: t2, plugin: this.plugin });
  }
  visitComponentTree(e) {
    return this.hooks.callHook(R5.VISIT_COMPONENT_TREE, e);
  }
  now() {
    return d3.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook(O4.TIMELINE_LAYER_ADDED, { options: e, plugin: this.plugin });
  }
  addTimelineEvent(e) {
    d3.highPerfModeEnabled || this.hooks.callHook(O4.TIMELINE_EVENT_ADDED, { options: e, plugin: this.plugin });
  }
  getSettings(e) {
    return un2(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  getComponentInstances(e) {
    return this.hooks.callHook(O4.GET_COMPONENT_INSTANCES, { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook(O4.GET_COMPONENT_BOUNDS, { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook(O4.GET_COMPONENT_NAME, { instance: e });
  }
  highlightElement(e) {
    let t2 = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook(O4.COMPONENT_HIGHLIGHT, { uid: t2 });
  }
  unhighlightElement() {
    return this.hooks.callHook(O4.COMPONENT_UNHIGHLIGHT);
  }
};
var Fr2 = jr2;
var ke5 = "__vue_devtool_undefined__";
var Me2 = "__vue_devtool_infinity__";
var xe2 = "__vue_devtool_negative_infinity__";
var Ge4 = "__vue_devtool_nan__";
var Ae4 = { [ke5]: "undefined", [Ge4]: "NaN", [Me2]: "Infinity", [xe2]: "-Infinity" };
var qe4 = Object.entries(Ae4).reduce((e, [t2, n2]) => (e[n2] = t2, e), {});
A3.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function Ro(e, t2) {
  return A4.setupDevToolsPlugin(e, t2);
}
function On2(e, t2) {
  let [n2, r2] = e;
  if (n2.app !== t2) return;
  let o = new Fr2({ plugin: { setupFn: r2, descriptor: n2 }, ctx: V3 });
  n2.packageName === "vuex" && o.on.editInspectorState((i) => {
    o.sendInspectorState(i.inspectorId);
  }), r2(o);
}
function Tt5(e, t2) {
  A3.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || d3.highPerfModeEnabled && !t2?.inspectingComponent || (A3.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), he3.forEach((n2) => {
    On2(n2, e);
  }));
}
var Le2 = "__VUE_DEVTOOLS_ROUTER__";
var me4 = "__VUE_DEVTOOLS_ROUTER_INFO__";
A3[me4] ??= { currentRoute: null, routes: [] };
A3[Le2] ??= {};
var As2 = new Proxy(A3[me4], { get(e, t2) {
  return A3[me4][t2];
} });
var Vs2 = new Proxy(A3[Le2], { get(e, t2) {
  if (t2 === "value") return A3[Le2];
} });
function Po(e) {
  let t2 = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n2) => !t2.has(n2.path) && t2.set(n2.path, 1));
}
function gt5(e) {
  return e.map((t2) => {
    let { path: n2, name: r2, children: o, meta: i } = t2;
    return o?.length && (o = gt5(o)), { path: n2, name: r2, children: o, meta: i };
  });
}
function Do2(e) {
  if (e) {
    let { fullPath: t2, hash: n2, href: r2, path: o, name: i, matched: s, params: a2, query: l3 } = e;
    return { fullPath: t2, hash: n2, href: r2, path: o, name: i, params: a2, query: l3, matched: gt5(s) };
  }
  return e;
}
function hn(e, t2) {
  function n2() {
    let r2 = e.app?.config.globalProperties.$router, o = Do2(r2?.currentRoute.value), i = gt5(Po(r2)), s = console.warn;
    console.warn = () => {
    }, A3[me4] = { currentRoute: o ? ne3(o) : {}, routes: ne3(i) }, A3[Le2] = r2, console.warn = s;
  }
  n2(), A4.on.componentUpdated(T5(() => {
    t2.value?.app === e.app && (n2(), !d3.highPerfModeEnabled && V3.hooks.callHook(x8.ROUTER_INFO_UPDATED, { state: A3[me4] }));
  }, 200));
}
function Ao2(e) {
  return { async getInspectorTree(t2) {
    let n2 = { ...t2, app: g6.value.app, rootNodes: [] };
    return await new Promise((r2) => {
      e.callHookWith(async (o) => {
        await Promise.all(o.map((i) => i(n2))), r2();
      }, R5.GET_INSPECTOR_TREE);
    }), n2.rootNodes;
  }, async getInspectorState(t2) {
    let n2 = { ...t2, app: g6.value.app, state: null }, r2 = { currentTab: `custom-inspector:${t2.inspectorId}` };
    return await new Promise((o) => {
      e.callHookWith(async (i) => {
        await Promise.all(i.map((s) => s(n2, r2))), o();
      }, R5.GET_INSPECTOR_STATE);
    }), n2.state;
  }, editInspectorState(t2) {
    let n2 = new nn2(), r2 = { ...t2, app: g6.value.app, set: (o, i = t2.path, s = t2.state.value, a2) => {
      n2.set(o, i, s, a2 || n2.createDefaultSetCallback(t2.state));
    } };
    e.callHookWith((o) => {
      o.forEach((i) => i(r2));
    }, R5.EDIT_INSPECTOR_STATE);
  }, sendInspectorState(t2) {
    let n2 = Z5(t2);
    e.callHook(O4.SEND_INSPECTOR_STATE, { inspectorId: t2, plugin: { descriptor: n2.descriptor, setupFn: () => ({}) } });
  }, inspectComponentInspector() {
    return gr2();
  }, cancelInspectComponentInspector() {
    return Tr2();
  }, getComponentRenderCode(t2) {
    let n2 = re6(g6.value, t2);
    if (n2) return typeof n2?.type != "function" ? n2.render.toString() : n2.type.toString();
  }, scrollToComponent(t2) {
    return Or2({ id: t2 });
  }, openInEditor: Mr2, getVueInspector: Sr, toggleApp(t2, n2) {
    let r2 = F5.value.find((o) => o.id === t2);
    r2 && (ln(t2), et4(r2), hn(r2, g6), sn2(), Tt5(r2.app, n2));
  }, inspectDOM(t2) {
    let n2 = re6(g6.value, t2);
    if (n2) {
      let [r2] = oe5(n2);
      r2 && (A3.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = r2);
    }
  }, updatePluginSettings(t2, n2, r2) {
    Kr(t2, n2, r2);
  }, getPluginSettings(t2) {
    return { options: Gr2(t2), values: un2(t2) };
  } };
}
A3.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: false };
var Lt4 = Lr2();
A3.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= { hooks: Lt4, get state() {
  return { ...d3, activeAppRecordId: g6.id, activeAppRecord: g6.value, appRecords: F5.value };
}, api: Ao2(Lt4) };
var V3 = A3.__VUE_DEVTOOLS_KIT_CONTEXT__;
var Lo = Yt4((e, t2) => {
  (function(n2) {
    "use strict";
    var r2 = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "Ae", \u00C5: "A", \u00C6: "AE", \u00C7: "C", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00D0: "D", \u00D1: "N", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "Oe", \u0150: "O", \u00D8: "O", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "Ue", \u0170: "U", \u00DD: "Y", \u00DE: "TH", \u00DF: "ss", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "ae", \u00E5: "a", \u00E6: "ae", \u00E7: "c", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00F0: "d", \u00F1: "n", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "oe", \u0151: "o", \u00F8: "o", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "ue", \u0171: "u", \u00FD: "y", \u00FE: "th", \u00FF: "y", "\u1E9E": "SS", \u0627: "a", \u0623: "a", \u0625: "i", \u0622: "aa", \u0624: "u", \u0626: "e", \u0621: "a", \u0628: "b", \u062A: "t", \u062B: "th", \u062C: "j", \u062D: "h", \u062E: "kh", \u062F: "d", \u0630: "th", \u0631: "r", \u0632: "z", \u0633: "s", \u0634: "sh", \u0635: "s", \u0636: "dh", \u0637: "t", \u0638: "z", \u0639: "a", \u063A: "gh", \u0641: "f", \u0642: "q", \u0643: "k", \u0644: "l", \u0645: "m", \u0646: "n", \u0647: "h", \u0648: "w", \u064A: "y", \u0649: "a", \u0629: "h", \uFEFB: "la", \uFEF7: "laa", \uFEF9: "lai", \uFEF5: "laa", \u06AF: "g", \u0686: "ch", \u067E: "p", \u0698: "zh", \u06A9: "k", \u06CC: "y", "\u064E": "a", "\u064B": "an", "\u0650": "e", "\u064D": "en", "\u064F": "u", "\u064C": "on", "\u0652": "", "\u0660": "0", "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u06F0": "0", "\u06F1": "1", "\u06F2": "2", "\u06F3": "3", "\u06F4": "4", "\u06F5": "5", "\u06F6": "6", "\u06F7": "7", "\u06F8": "8", "\u06F9": "9", \u1000: "k", \u1001: "kh", \u1002: "g", \u1003: "ga", \u1004: "ng", \u1005: "s", \u1006: "sa", \u1007: "z", "\u1005\u103B": "za", \u100A: "ny", \u100B: "t", \u100C: "ta", \u100D: "d", \u100E: "da", \u100F: "na", \u1010: "t", \u1011: "ta", \u1012: "d", \u1013: "da", \u1014: "n", \u1015: "p", \u1016: "pa", \u1017: "b", \u1018: "ba", \u1019: "m", \u101A: "y", \u101B: "ya", \u101C: "l", \u101D: "w", \u101E: "th", \u101F: "h", \u1020: "la", \u1021: "a", "\u103C": "y", "\u103B": "ya", "\u103D": "w", "\u103C\u103D": "yw", "\u103B\u103D": "ywa", "\u103E": "h", \u1027: "e", "\u104F": "-e", \u1023: "i", \u1024: "-i", \u1009: "u", \u1026: "-u", \u1029: "aw", "\u101E\u103C\u1031\u102C": "aw", \u102A: "aw", "\u1040": "0", "\u1041": "1", "\u1042": "2", "\u1043": "3", "\u1044": "4", "\u1045": "5", "\u1046": "6", "\u1047": "7", "\u1048": "8", "\u1049": "9", "\u1039": "", "\u1037": "", "\u1038": "", \u010D: "c", \u010F: "d", \u011B: "e", \u0148: "n", \u0159: "r", \u0161: "s", \u0165: "t", \u016F: "u", \u017E: "z", \u010C: "C", \u010E: "D", \u011A: "E", \u0147: "N", \u0158: "R", \u0160: "S", \u0164: "T", \u016E: "U", \u017D: "Z", \u0780: "h", \u0781: "sh", \u0782: "n", \u0783: "r", \u0784: "b", \u0785: "lh", \u0786: "k", \u0787: "a", \u0788: "v", \u0789: "m", \u078A: "f", \u078B: "dh", \u078C: "th", \u078D: "l", \u078E: "g", \u078F: "gn", \u0790: "s", \u0791: "d", \u0792: "z", \u0793: "t", \u0794: "y", \u0795: "p", \u0796: "j", \u0797: "ch", \u0798: "tt", \u0799: "hh", \u079A: "kh", \u079B: "th", \u079C: "z", \u079D: "sh", \u079E: "s", \u079F: "d", \u07A0: "t", \u07A1: "z", \u07A2: "a", \u07A3: "gh", \u07A4: "q", \u07A5: "w", "\u07A6": "a", "\u07A7": "aa", "\u07A8": "i", "\u07A9": "ee", "\u07AA": "u", "\u07AB": "oo", "\u07AC": "e", "\u07AD": "ey", "\u07AE": "o", "\u07AF": "oa", "\u07B0": "", \u10D0: "a", \u10D1: "b", \u10D2: "g", \u10D3: "d", \u10D4: "e", \u10D5: "v", \u10D6: "z", \u10D7: "t", \u10D8: "i", \u10D9: "k", \u10DA: "l", \u10DB: "m", \u10DC: "n", \u10DD: "o", \u10DE: "p", \u10DF: "zh", \u10E0: "r", \u10E1: "s", \u10E2: "t", \u10E3: "u", \u10E4: "p", \u10E5: "k", \u10E6: "gh", \u10E7: "q", \u10E8: "sh", \u10E9: "ch", \u10EA: "ts", \u10EB: "dz", \u10EC: "ts", \u10ED: "ch", \u10EE: "kh", \u10EF: "j", \u10F0: "h", \u03B1: "a", \u03B2: "v", \u03B3: "g", \u03B4: "d", \u03B5: "e", \u03B6: "z", \u03B7: "i", \u03B8: "th", \u03B9: "i", \u03BA: "k", \u03BB: "l", \u03BC: "m", \u03BD: "n", \u03BE: "ks", \u03BF: "o", \u03C0: "p", \u03C1: "r", \u03C3: "s", \u03C4: "t", \u03C5: "y", \u03C6: "f", \u03C7: "x", \u03C8: "ps", \u03C9: "o", \u03AC: "a", \u03AD: "e", \u03AF: "i", \u03CC: "o", \u03CD: "y", \u03AE: "i", \u03CE: "o", \u03C2: "s", \u03CA: "i", \u03B0: "y", \u03CB: "y", \u0390: "i", \u0391: "A", \u0392: "B", \u0393: "G", \u0394: "D", \u0395: "E", \u0396: "Z", \u0397: "I", \u0398: "TH", \u0399: "I", \u039A: "K", \u039B: "L", \u039C: "M", \u039D: "N", \u039E: "KS", \u039F: "O", \u03A0: "P", \u03A1: "R", \u03A3: "S", \u03A4: "T", \u03A5: "Y", \u03A6: "F", \u03A7: "X", \u03A8: "PS", \u03A9: "O", \u0386: "A", \u0388: "E", \u038A: "I", \u038C: "O", \u038E: "Y", \u0389: "I", \u038F: "O", \u03AA: "I", \u03AB: "Y", \u0101: "a", \u0113: "e", \u0123: "g", \u012B: "i", \u0137: "k", \u013C: "l", \u0146: "n", \u016B: "u", \u0100: "A", \u0112: "E", \u0122: "G", \u012A: "I", \u0136: "k", \u013B: "L", \u0145: "N", \u016A: "U", \u040C: "Kj", \u045C: "kj", \u0409: "Lj", \u0459: "lj", \u040A: "Nj", \u045A: "nj", \u0422\u0441: "Ts", \u0442\u0441: "ts", \u0105: "a", \u0107: "c", \u0119: "e", \u0142: "l", \u0144: "n", \u015B: "s", \u017A: "z", \u017C: "z", \u0104: "A", \u0106: "C", \u0118: "E", \u0141: "L", \u0143: "N", \u015A: "S", \u0179: "Z", \u017B: "Z", \u0404: "Ye", \u0406: "I", \u0407: "Yi", \u0490: "G", \u0454: "ye", \u0456: "i", \u0457: "yi", \u0491: "g", \u0103: "a", \u0102: "A", \u0219: "s", \u0218: "S", \u021B: "t", \u021A: "T", \u0163: "t", \u0162: "T", \u0430: "a", \u0431: "b", \u0432: "v", \u0433: "g", \u0434: "d", \u0435: "e", \u0451: "yo", \u0436: "zh", \u0437: "z", \u0438: "i", \u0439: "i", \u043A: "k", \u043B: "l", \u043C: "m", \u043D: "n", \u043E: "o", \u043F: "p", \u0440: "r", \u0441: "s", \u0442: "t", \u0443: "u", \u0444: "f", \u0445: "kh", \u0446: "c", \u0447: "ch", \u0448: "sh", \u0449: "sh", \u044A: "", \u044B: "y", \u044C: "", \u044D: "e", \u044E: "yu", \u044F: "ya", \u0410: "A", \u0411: "B", \u0412: "V", \u0413: "G", \u0414: "D", \u0415: "E", \u0401: "Yo", \u0416: "Zh", \u0417: "Z", \u0418: "I", \u0419: "I", \u041A: "K", \u041B: "L", \u041C: "M", \u041D: "N", \u041E: "O", \u041F: "P", \u0420: "R", \u0421: "S", \u0422: "T", \u0423: "U", \u0424: "F", \u0425: "Kh", \u0426: "C", \u0427: "Ch", \u0428: "Sh", \u0429: "Sh", \u042A: "", \u042B: "Y", \u042C: "", \u042D: "E", \u042E: "Yu", \u042F: "Ya", \u0452: "dj", \u0458: "j", \u045B: "c", \u045F: "dz", \u0402: "Dj", \u0408: "j", \u040B: "C", \u040F: "Dz", \u013E: "l", \u013A: "l", \u0155: "r", \u013D: "L", \u0139: "L", \u0154: "R", \u015F: "s", \u015E: "S", \u0131: "i", \u0130: "I", \u011F: "g", \u011E: "G", \u1EA3: "a", \u1EA2: "A", \u1EB3: "a", \u1EB2: "A", \u1EA9: "a", \u1EA8: "A", \u0111: "d", \u0110: "D", \u1EB9: "e", \u1EB8: "E", \u1EBD: "e", \u1EBC: "E", \u1EBB: "e", \u1EBA: "E", \u1EBF: "e", \u1EBE: "E", \u1EC1: "e", \u1EC0: "E", \u1EC7: "e", \u1EC6: "E", \u1EC5: "e", \u1EC4: "E", \u1EC3: "e", \u1EC2: "E", \u1ECF: "o", \u1ECD: "o", \u1ECC: "o", \u1ED1: "o", \u1ED0: "O", \u1ED3: "o", \u1ED2: "O", \u1ED5: "o", \u1ED4: "O", \u1ED9: "o", \u1ED8: "O", \u1ED7: "o", \u1ED6: "O", \u01A1: "o", \u01A0: "O", \u1EDB: "o", \u1EDA: "O", \u1EDD: "o", \u1EDC: "O", \u1EE3: "o", \u1EE2: "O", \u1EE1: "o", \u1EE0: "O", \u1EDE: "o", \u1EDF: "o", \u1ECB: "i", \u1ECA: "I", \u0129: "i", \u0128: "I", \u1EC9: "i", \u1EC8: "i", \u1EE7: "u", \u1EE6: "U", \u1EE5: "u", \u1EE4: "U", \u0169: "u", \u0168: "U", \u01B0: "u", \u01AF: "U", \u1EE9: "u", \u1EE8: "U", \u1EEB: "u", \u1EEA: "U", \u1EF1: "u", \u1EF0: "U", \u1EEF: "u", \u1EEE: "U", \u1EED: "u", \u1EEC: "\u01B0", \u1EF7: "y", \u1EF6: "y", \u1EF3: "y", \u1EF2: "Y", \u1EF5: "y", \u1EF4: "Y", \u1EF9: "y", \u1EF8: "Y", \u1EA1: "a", \u1EA0: "A", \u1EA5: "a", \u1EA4: "A", \u1EA7: "a", \u1EA6: "A", \u1EAD: "a", \u1EAC: "A", \u1EAB: "a", \u1EAA: "A", \u1EAF: "a", \u1EAE: "A", \u1EB1: "a", \u1EB0: "A", \u1EB7: "a", \u1EB6: "A", \u1EB5: "a", \u1EB4: "A", "\u24EA": "0", "\u2460": "1", "\u2461": "2", "\u2462": "3", "\u2463": "4", "\u2464": "5", "\u2465": "6", "\u2466": "7", "\u2467": "8", "\u2468": "9", "\u2469": "10", "\u246A": "11", "\u246B": "12", "\u246C": "13", "\u246D": "14", "\u246E": "15", "\u246F": "16", "\u2470": "17", "\u2471": "18", "\u2472": "18", "\u2473": "18", "\u24F5": "1", "\u24F6": "2", "\u24F7": "3", "\u24F8": "4", "\u24F9": "5", "\u24FA": "6", "\u24FB": "7", "\u24FC": "8", "\u24FD": "9", "\u24FE": "10", "\u24FF": "0", "\u24EB": "11", "\u24EC": "12", "\u24ED": "13", "\u24EE": "14", "\u24EF": "15", "\u24F0": "16", "\u24F1": "17", "\u24F2": "18", "\u24F3": "19", "\u24F4": "20", "\u24B6": "A", "\u24B7": "B", "\u24B8": "C", "\u24B9": "D", "\u24BA": "E", "\u24BB": "F", "\u24BC": "G", "\u24BD": "H", "\u24BE": "I", "\u24BF": "J", "\u24C0": "K", "\u24C1": "L", "\u24C2": "M", "\u24C3": "N", "\u24C4": "O", "\u24C5": "P", "\u24C6": "Q", "\u24C7": "R", "\u24C8": "S", "\u24C9": "T", "\u24CA": "U", "\u24CB": "V", "\u24CC": "W", "\u24CD": "X", "\u24CE": "Y", "\u24CF": "Z", "\u24D0": "a", "\u24D1": "b", "\u24D2": "c", "\u24D3": "d", "\u24D4": "e", "\u24D5": "f", "\u24D6": "g", "\u24D7": "h", "\u24D8": "i", "\u24D9": "j", "\u24DA": "k", "\u24DB": "l", "\u24DC": "m", "\u24DD": "n", "\u24DE": "o", "\u24DF": "p", "\u24E0": "q", "\u24E1": "r", "\u24E2": "s", "\u24E3": "t", "\u24E4": "u", "\u24E6": "v", "\u24E5": "w", "\u24E7": "x", "\u24E8": "y", "\u24E9": "z", "\u201C": '"', "\u201D": '"', "\u2018": "'", "\u2019": "'", "\u2202": "d", \u0192: "f", "\u2122": "(TM)", "\xA9": "(C)", \u0153: "oe", \u0152: "OE", "\xAE": "(R)", "\u2020": "+", "\u2120": "(SM)", "\u2026": "...", "\u02DA": "o", \u00BA: "o", \u00AA: "a", "\u2022": "*", "\u104A": ",", "\u104B": ".", $: "USD", "\u20AC": "EUR", "\u20A2": "BRN", "\u20A3": "FRF", "\xA3": "GBP", "\u20A4": "ITL", "\u20A6": "NGN", "\u20A7": "ESP", "\u20A9": "KRW", "\u20AA": "ILS", "\u20AB": "VND", "\u20AD": "LAK", "\u20AE": "MNT", "\u20AF": "GRD", "\u20B1": "ARS", "\u20B2": "PYG", "\u20B3": "ARA", "\u20B4": "UAH", "\u20B5": "GHS", "\xA2": "cent", "\xA5": "CNY", \u5143: "CNY", \u5186: "YEN", "\uFDFC": "IRR", "\u20A0": "EWE", "\u0E3F": "THB", "\u20A8": "INR", "\u20B9": "INR", "\u20B0": "PF", "\u20BA": "TRY", "\u060B": "AFN", "\u20BC": "AZN", \u043B\u0432: "BGN", "\u17DB": "KHR", "\u20A1": "CRC", "\u20B8": "KZT", \u0434\u0435\u043D: "MKD", z\u0142: "PLN", "\u20BD": "RUB", "\u20BE": "GEL" }, o = ["\u103A", "\u07B0"], i = { "\u102C": "a", "\u102B": "a", "\u1031": "e", "\u1032": "e", "\u102D": "i", "\u102E": "i", "\u102D\u102F": "o", "\u102F": "u", "\u1030": "u", "\u1031\u102B\u1004\u103A": "aung", "\u1031\u102C": "aw", "\u1031\u102C\u103A": "aw", "\u1031\u102B": "aw", "\u1031\u102B\u103A": "aw", "\u103A": "\u103A", "\u1000\u103A": "et", "\u102D\u102F\u1000\u103A": "aik", "\u1031\u102C\u1000\u103A": "auk", "\u1004\u103A": "in", "\u102D\u102F\u1004\u103A": "aing", "\u1031\u102C\u1004\u103A": "aung", "\u1005\u103A": "it", "\u100A\u103A": "i", "\u1010\u103A": "at", "\u102D\u1010\u103A": "eik", "\u102F\u1010\u103A": "ok", "\u103D\u1010\u103A": "ut", "\u1031\u1010\u103A": "it", "\u1012\u103A": "d", "\u102D\u102F\u1012\u103A": "ok", "\u102F\u1012\u103A": "ait", "\u1014\u103A": "an", "\u102C\u1014\u103A": "an", "\u102D\u1014\u103A": "ein", "\u102F\u1014\u103A": "on", "\u103D\u1014\u103A": "un", "\u1015\u103A": "at", "\u102D\u1015\u103A": "eik", "\u102F\u1015\u103A": "ok", "\u103D\u1015\u103A": "ut", "\u1014\u103A\u102F\u1015\u103A": "nub", "\u1019\u103A": "an", "\u102D\u1019\u103A": "ein", "\u102F\u1019\u103A": "on", "\u103D\u1019\u103A": "un", "\u101A\u103A": "e", "\u102D\u102F\u101C\u103A": "ol", "\u1009\u103A": "in", "\u1036": "an", "\u102D\u1036": "ein", "\u102F\u1036": "on", "\u07A6\u0787\u07B0": "ah", "\u07A6\u0781\u07B0": "ah" }, s = { en: {}, az: { \u00E7: "c", \u0259: "e", \u011F: "g", \u0131: "i", \u00F6: "o", \u015F: "s", \u00FC: "u", \u00C7: "C", \u018F: "E", \u011E: "G", \u0130: "I", \u00D6: "O", \u015E: "S", \u00DC: "U" }, cs: { \u010D: "c", \u010F: "d", \u011B: "e", \u0148: "n", \u0159: "r", \u0161: "s", \u0165: "t", \u016F: "u", \u017E: "z", \u010C: "C", \u010E: "D", \u011A: "E", \u0147: "N", \u0158: "R", \u0160: "S", \u0164: "T", \u016E: "U", \u017D: "Z" }, fi: { \u00E4: "a", \u00C4: "A", \u00F6: "o", \u00D6: "O" }, hu: { \u00E4: "a", \u00C4: "A", \u00F6: "o", \u00D6: "O", \u00FC: "u", \u00DC: "U", \u0171: "u", \u0170: "U" }, lt: { \u0105: "a", \u010D: "c", \u0119: "e", \u0117: "e", \u012F: "i", \u0161: "s", \u0173: "u", \u016B: "u", \u017E: "z", \u0104: "A", \u010C: "C", \u0118: "E", \u0116: "E", \u012E: "I", \u0160: "S", \u0172: "U", \u016A: "U" }, lv: { \u0101: "a", \u010D: "c", \u0113: "e", \u0123: "g", \u012B: "i", \u0137: "k", \u013C: "l", \u0146: "n", \u0161: "s", \u016B: "u", \u017E: "z", \u0100: "A", \u010C: "C", \u0112: "E", \u0122: "G", \u012A: "i", \u0136: "k", \u013B: "L", \u0145: "N", \u0160: "S", \u016A: "u", \u017D: "Z" }, pl: { \u0105: "a", \u0107: "c", \u0119: "e", \u0142: "l", \u0144: "n", \u00F3: "o", \u015B: "s", \u017A: "z", \u017C: "z", \u0104: "A", \u0106: "C", \u0118: "e", \u0141: "L", \u0143: "N", \u00D3: "O", \u015A: "S", \u0179: "Z", \u017B: "Z" }, sv: { \u00E4: "a", \u00C4: "A", \u00F6: "o", \u00D6: "O" }, sk: { \u00E4: "a", \u00C4: "A" }, sr: { \u0459: "lj", \u045A: "nj", \u0409: "Lj", \u040A: "Nj", \u0111: "dj", \u0110: "Dj" }, tr: { \u00DC: "U", \u00D6: "O", \u00FC: "u", \u00F6: "o" } }, a2 = { ar: { "\u2206": "delta", "\u221E": "la-nihaya", "\u2665": "hob", "&": "wa", "|": "aw", "<": "aqal-men", ">": "akbar-men", "\u2211": "majmou", "\xA4": "omla" }, az: {}, ca: { "\u2206": "delta", "\u221E": "infinit", "\u2665": "amor", "&": "i", "|": "o", "<": "menys que", ">": "mes que", "\u2211": "suma dels", "\xA4": "moneda" }, cs: { "\u2206": "delta", "\u221E": "nekonecno", "\u2665": "laska", "&": "a", "|": "nebo", "<": "mensi nez", ">": "vetsi nez", "\u2211": "soucet", "\xA4": "mena" }, de: { "\u2206": "delta", "\u221E": "unendlich", "\u2665": "Liebe", "&": "und", "|": "oder", "<": "kleiner als", ">": "groesser als", "\u2211": "Summe von", "\xA4": "Waehrung" }, dv: { "\u2206": "delta", "\u221E": "kolunulaa", "\u2665": "loabi", "&": "aai", "|": "noonee", "<": "ah vure kuda", ">": "ah vure bodu", "\u2211": "jumula", "\xA4": "faisaa" }, en: { "\u2206": "delta", "\u221E": "infinity", "\u2665": "love", "&": "and", "|": "or", "<": "less than", ">": "greater than", "\u2211": "sum", "\xA4": "currency" }, es: { "\u2206": "delta", "\u221E": "infinito", "\u2665": "amor", "&": "y", "|": "u", "<": "menos que", ">": "mas que", "\u2211": "suma de los", "\xA4": "moneda" }, fa: { "\u2206": "delta", "\u221E": "bi-nahayat", "\u2665": "eshgh", "&": "va", "|": "ya", "<": "kamtar-az", ">": "bishtar-az", "\u2211": "majmooe", "\xA4": "vahed" }, fi: { "\u2206": "delta", "\u221E": "aarettomyys", "\u2665": "rakkaus", "&": "ja", "|": "tai", "<": "pienempi kuin", ">": "suurempi kuin", "\u2211": "summa", "\xA4": "valuutta" }, fr: { "\u2206": "delta", "\u221E": "infiniment", "\u2665": "Amour", "&": "et", "|": "ou", "<": "moins que", ">": "superieure a", "\u2211": "somme des", "\xA4": "monnaie" }, ge: { "\u2206": "delta", "\u221E": "usasruloba", "\u2665": "siqvaruli", "&": "da", "|": "an", "<": "naklebi", ">": "meti", "\u2211": "jami", "\xA4": "valuta" }, gr: {}, hu: { "\u2206": "delta", "\u221E": "vegtelen", "\u2665": "szerelem", "&": "es", "|": "vagy", "<": "kisebb mint", ">": "nagyobb mint", "\u2211": "szumma", "\xA4": "penznem" }, it: { "\u2206": "delta", "\u221E": "infinito", "\u2665": "amore", "&": "e", "|": "o", "<": "minore di", ">": "maggiore di", "\u2211": "somma", "\xA4": "moneta" }, lt: { "\u2206": "delta", "\u221E": "begalybe", "\u2665": "meile", "&": "ir", "|": "ar", "<": "maziau nei", ">": "daugiau nei", "\u2211": "suma", "\xA4": "valiuta" }, lv: { "\u2206": "delta", "\u221E": "bezgaliba", "\u2665": "milestiba", "&": "un", "|": "vai", "<": "mazak neka", ">": "lielaks neka", "\u2211": "summa", "\xA4": "valuta" }, my: { "\u2206": "kwahkhyaet", "\u221E": "asaonasme", "\u2665": "akhyait", "&": "nhin", "|": "tho", "<": "ngethaw", ">": "kyithaw", "\u2211": "paungld", "\xA4": "ngwekye" }, mk: {}, nl: { "\u2206": "delta", "\u221E": "oneindig", "\u2665": "liefde", "&": "en", "|": "of", "<": "kleiner dan", ">": "groter dan", "\u2211": "som", "\xA4": "valuta" }, pl: { "\u2206": "delta", "\u221E": "nieskonczonosc", "\u2665": "milosc", "&": "i", "|": "lub", "<": "mniejsze niz", ">": "wieksze niz", "\u2211": "suma", "\xA4": "waluta" }, pt: { "\u2206": "delta", "\u221E": "infinito", "\u2665": "amor", "&": "e", "|": "ou", "<": "menor que", ">": "maior que", "\u2211": "soma", "\xA4": "moeda" }, ro: { "\u2206": "delta", "\u221E": "infinit", "\u2665": "dragoste", "&": "si", "|": "sau", "<": "mai mic ca", ">": "mai mare ca", "\u2211": "suma", "\xA4": "valuta" }, ru: { "\u2206": "delta", "\u221E": "beskonechno", "\u2665": "lubov", "&": "i", "|": "ili", "<": "menshe", ">": "bolshe", "\u2211": "summa", "\xA4": "valjuta" }, sk: { "\u2206": "delta", "\u221E": "nekonecno", "\u2665": "laska", "&": "a", "|": "alebo", "<": "menej ako", ">": "viac ako", "\u2211": "sucet", "\xA4": "mena" }, sr: {}, tr: { "\u2206": "delta", "\u221E": "sonsuzluk", "\u2665": "ask", "&": "ve", "|": "veya", "<": "kucuktur", ">": "buyuktur", "\u2211": "toplam", "\xA4": "para birimi" }, uk: { "\u2206": "delta", "\u221E": "bezkinechnist", "\u2665": "lubov", "&": "i", "|": "abo", "<": "menshe", ">": "bilshe", "\u2211": "suma", "\xA4": "valjuta" }, vn: { "\u2206": "delta", "\u221E": "vo cuc", "\u2665": "yeu", "&": "va", "|": "hoac", "<": "nho hon", ">": "lon hon", "\u2211": "tong", "\xA4": "tien te" } }, l3 = [";", "?", ":", "@", "&", "=", "+", "$", ",", "/"].join(""), u2 = [";", "?", ":", "@", "&", "=", "+", "$", ","].join(""), p3 = [".", "!", "~", "*", "'", "(", ")"].join(""), f3 = function(S5, E6) {
      var v6 = "-", C5 = "", X5 = "", Be6 = true, G4 = {}, yt5, ye4, le4, je5, Fe2, St6, ue5, ee4, It4, K7, m7, Se5, U5, te3, $5 = "";
      if (typeof S5 != "string") return "";
      if (typeof E6 == "string" && (v6 = E6), ue5 = a2.en, ee4 = s.en, typeof E6 == "object") {
        yt5 = E6.maintainCase || false, G4 = E6.custom && typeof E6.custom == "object" ? E6.custom : G4, le4 = +E6.truncate > 1 && E6.truncate || false, je5 = E6.uric || false, Fe2 = E6.uricNoSlash || false, St6 = E6.mark || false, Be6 = !(E6.symbols === false || E6.lang === false), v6 = E6.separator || v6, je5 && ($5 += l3), Fe2 && ($5 += u2), St6 && ($5 += p3), ue5 = E6.lang && a2[E6.lang] && Be6 ? a2[E6.lang] : Be6 ? a2.en : {}, ee4 = E6.lang && s[E6.lang] ? s[E6.lang] : E6.lang === false || E6.lang === true ? {} : s.en, E6.titleCase && typeof E6.titleCase.length == "number" && Array.prototype.toString.call(E6.titleCase) ? (E6.titleCase.forEach(function(L5) {
          G4[L5 + ""] = L5 + "";
        }), ye4 = true) : ye4 = !!E6.titleCase, E6.custom && typeof E6.custom.length == "number" && Array.prototype.toString.call(E6.custom) && E6.custom.forEach(function(L5) {
          G4[L5 + ""] = L5 + "";
        }), Object.keys(G4).forEach(function(L5) {
          var _e4;
          L5.length > 1 ? _e4 = new RegExp("\\b" + N4(L5) + "\\b", "gi") : _e4 = new RegExp(N4(L5), "gi"), S5 = S5.replace(_e4, G4[L5]);
        });
        for (m7 in G4) $5 += m7;
      }
      for ($5 += v6, $5 = N4($5), S5 = S5.replace(/(^\s+|\s+$)/g, ""), U5 = false, te3 = false, K7 = 0, Se5 = S5.length; K7 < Se5; K7++) m7 = S5[K7], I4(m7, G4) ? U5 = false : ee4[m7] ? (m7 = U5 && ee4[m7].match(/[A-Za-z0-9]/) ? " " + ee4[m7] : ee4[m7], U5 = false) : m7 in r2 ? (K7 + 1 < Se5 && o.indexOf(S5[K7 + 1]) >= 0 ? (X5 += m7, m7 = "") : te3 === true ? (m7 = i[X5] + r2[m7], X5 = "") : m7 = U5 && r2[m7].match(/[A-Za-z0-9]/) ? " " + r2[m7] : r2[m7], U5 = false, te3 = false) : m7 in i ? (X5 += m7, m7 = "", K7 === Se5 - 1 && (m7 = i[X5]), te3 = true) : ue5[m7] && !(je5 && l3.indexOf(m7) !== -1) && !(Fe2 && u2.indexOf(m7) !== -1) ? (m7 = U5 || C5.substr(-1).match(/[A-Za-z0-9]/) ? v6 + ue5[m7] : ue5[m7], m7 += S5[K7 + 1] !== void 0 && S5[K7 + 1].match(/[A-Za-z0-9]/) ? v6 : "", U5 = true) : (te3 === true ? (m7 = i[X5] + m7, X5 = "", te3 = false) : U5 && (/[A-Za-z0-9]/.test(m7) || C5.substr(-1).match(/A-Za-z0-9]/)) && (m7 = " " + m7), U5 = false), C5 += m7.replace(new RegExp("[^\\w\\s" + $5 + "_-]", "g"), v6);
      return ye4 && (C5 = C5.replace(/(\w)(\S*)/g, function(L5, _e4, Nt6) {
        var He5 = _e4.toUpperCase() + (Nt6 !== null ? Nt6 : "");
        return Object.keys(G4).indexOf(He5.toLowerCase()) < 0 ? He5 : He5.toLowerCase();
      })), C5 = C5.replace(/\s+/g, v6).replace(new RegExp("\\" + v6 + "+", "g"), v6).replace(new RegExp("(^\\" + v6 + "+|\\" + v6 + "+$)", "g"), ""), le4 && C5.length > le4 && (It4 = C5.charAt(le4) === v6, C5 = C5.slice(0, le4), It4 || (C5 = C5.slice(0, C5.lastIndexOf(v6)))), !yt5 && !ye4 && (C5 = C5.toLowerCase()), C5;
    }, h5 = function(S5) {
      return function(v6) {
        return f3(v6, S5);
      };
    }, N4 = function(S5) {
      return S5.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
    }, I4 = function(P6, S5) {
      for (var E6 in S5) if (S5[E6] === P6) return true;
    };
    if (typeof t2 < "u" && t2.exports) t2.exports = f3, t2.exports.createSlug = h5;
    else if (typeof define < "u" && define.amd) define([], function() {
      return f3;
    });
    else try {
      if (n2.getSlug || n2.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
      n2.getSlug = f3, n2.createSlug = h5;
    } catch {
    }
  })(e);
});
var wo2 = Yt4((e, t2) => {
  t2.exports = Lo();
});
var bo = er2(wo2(), 1);
var z4 = A3.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= { id: 0, appIds: /* @__PURE__ */ new Set() };
function $o2(e) {
  d3.highPerfModeEnabled = e ?? !d3.highPerfModeEnabled, !e && g6.value && Tt5(g6.value.app);
}
function Ho(e) {
  d3.devtoolsClientDetected = { ...d3.devtoolsClientDetected, ...e }, $o2(!Object.values(d3.devtoolsClientDetected).some(Boolean));
}
A3.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= Ho;
var Yo = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t2) {
    this.keyToValue.set(e, t2), this.valueToKey.set(t2, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
};
var In = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new Yo();
  }
  register(e, t2) {
    this.kv.getByValue(e) || (t2 || (t2 = this.generateIdentifier(e)), this.kv.set(t2, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
};
var Xo = class extends In {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t2) {
    typeof t2 == "object" ? (t2.allowProps && this.classToAllowedProps.set(e, t2.allowProps), super.register(e, t2.identifier)) : super.register(e, t2);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
function Wo(e) {
  if ("values" in Object) return Object.values(e);
  let t2 = [];
  for (let n2 in e) e.hasOwnProperty(n2) && t2.push(e[n2]);
  return t2;
}
function qo(e, t2) {
  let n2 = Wo(e);
  if ("find" in n2) return n2.find(t2);
  let r2 = n2;
  for (let o = 0; o < r2.length; o++) {
    let i = r2[o];
    if (t2(i)) return i;
  }
}
function ie2(e, t2) {
  Object.entries(e).forEach(([n2, r2]) => t2(r2, n2));
}
function Re(e, t2) {
  return e.indexOf(t2) !== -1;
}
function wt4(e, t2) {
  for (let n2 = 0; n2 < e.length; n2++) {
    let r2 = e[n2];
    if (t2(r2)) return r2;
  }
}
var Zo = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return qo(this.transfomers, (t2) => t2.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
var Jo = (e) => Object.prototype.toString.call(e).slice(8, -1);
var Nn = (e) => typeof e > "u";
var Qo = (e) => e === null;
var Te3 = (e) => typeof e != "object" || e === null || e === Object.prototype ? false : Object.getPrototypeOf(e) === null ? true : Object.getPrototypeOf(e) === Object.prototype;
var rt2 = (e) => Te3(e) && Object.keys(e).length === 0;
var H4 = (e) => Array.isArray(e);
var ei2 = (e) => typeof e == "string";
var ti2 = (e) => typeof e == "number" && !isNaN(e);
var ni2 = (e) => typeof e == "boolean";
var ri2 = (e) => e instanceof RegExp;
var ge3 = (e) => e instanceof Map;
var Oe3 = (e) => e instanceof Set;
var Cn2 = (e) => Jo(e) === "Symbol";
var oi2 = (e) => e instanceof Date && !isNaN(e.valueOf());
var ii2 = (e) => e instanceof Error;
var bt4 = (e) => typeof e == "number" && isNaN(e);
var si2 = (e) => ni2(e) || Qo(e) || Nn(e) || ti2(e) || ei2(e) || Cn2(e);
var ai2 = (e) => typeof e == "bigint";
var ci2 = (e) => e === 1 / 0 || e === -1 / 0;
var li2 = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView);
var ui = (e) => e instanceof URL;
var Rn = (e) => e.replace(/\./g, "\\.");
var Ze2 = (e) => e.map(String).map(Rn).join(".");
var Ee4 = (e) => {
  let t2 = [], n2 = "";
  for (let o = 0; o < e.length; o++) {
    let i = e.charAt(o);
    if (i === "\\" && e.charAt(o + 1) === ".") {
      n2 += ".", o++;
      continue;
    }
    if (i === ".") {
      t2.push(n2), n2 = "";
      continue;
    }
    n2 += i;
  }
  let r2 = n2;
  return t2.push(r2), t2;
};
function k4(e, t2, n2, r2) {
  return { isApplicable: e, annotation: t2, transform: n2, untransform: r2 };
}
var vn2 = [k4(Nn, "undefined", () => null, () => {
}), k4(ai2, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)), k4(oi2, "Date", (e) => e.toISOString(), (e) => new Date(e)), k4(ii2, "Error", (e, t2) => {
  let n2 = { name: e.name, message: e.message };
  return t2.allowedErrorProps.forEach((r2) => {
    n2[r2] = e[r2];
  }), n2;
}, (e, t2) => {
  let n2 = new Error(e.message);
  return n2.name = e.name, n2.stack = e.stack, t2.allowedErrorProps.forEach((r2) => {
    n2[r2] = e[r2];
  }), n2;
}), k4(ri2, "regexp", (e) => "" + e, (e) => {
  let t2 = e.slice(1, e.lastIndexOf("/")), n2 = e.slice(e.lastIndexOf("/") + 1);
  return new RegExp(t2, n2);
}), k4(Oe3, "set", (e) => [...e.values()], (e) => new Set(e)), k4(ge3, "map", (e) => [...e.entries()], (e) => new Map(e)), k4((e) => bt4(e) || ci2(e), "number", (e) => bt4(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number), k4((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number), k4(ui, "URL", (e) => e.toString(), (e) => new URL(e))];
function $e4(e, t2, n2, r2) {
  return { isApplicable: e, annotation: t2, transform: n2, untransform: r2 };
}
var Pn2 = $e4((e, t2) => Cn2(e) ? !!t2.symbolRegistry.getIdentifier(e) : false, (e, t2) => ["symbol", t2.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t2, n2) => {
  let r2 = n2.symbolRegistry.getValue(t2[1]);
  if (!r2) throw new Error("Trying to deserialize unknown symbol");
  return r2;
});
var _i2 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce((e, t2) => (e[t2.name] = t2, e), {});
var Dn2 = $e4(li2, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t2) => {
  let n2 = _i2[t2[1]];
  if (!n2) throw new Error("Trying to deserialize unknown typed array");
  return new n2(e);
});
function An2(e, t2) {
  return e?.constructor ? !!t2.classRegistry.getIdentifier(e.constructor) : false;
}
var Vn2 = $e4(An2, (e, t2) => ["class", t2.classRegistry.getIdentifier(e.constructor)], (e, t2) => {
  let n2 = t2.classRegistry.getAllowedProps(e.constructor);
  if (!n2) return { ...e };
  let r2 = {};
  return n2.forEach((o) => {
    r2[o] = e[o];
  }), r2;
}, (e, t2, n2) => {
  let r2 = n2.classRegistry.getValue(t2[1]);
  if (!r2) throw new Error(`Trying to deserialize unknown class '${t2[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(r2.prototype), e);
});
var Ln = $e4((e, t2) => !!t2.customTransformerRegistry.findApplicable(e), (e, t2) => ["custom", t2.customTransformerRegistry.findApplicable(e).name], (e, t2) => t2.customTransformerRegistry.findApplicable(e).serialize(e), (e, t2, n2) => {
  let r2 = n2.customTransformerRegistry.findByName(t2[1]);
  if (!r2) throw new Error("Trying to deserialize unknown custom value");
  return r2.deserialize(e);
});
var fi2 = [Vn2, Pn2, Ln, Dn2];
var Ut3 = (e, t2) => {
  let n2 = wt4(fi2, (o) => o.isApplicable(e, t2));
  if (n2) return { value: n2.transform(e, t2), type: n2.annotation(e, t2) };
  let r2 = wt4(vn2, (o) => o.isApplicable(e, t2));
  if (r2) return { value: r2.transform(e, t2), type: r2.annotation };
};
var wn2 = {};
vn2.forEach((e) => {
  wn2[e.annotation] = e;
});
var pi2 = (e, t2, n2) => {
  if (H4(t2)) switch (t2[0]) {
    case "symbol":
      return Pn2.untransform(e, t2, n2);
    case "class":
      return Vn2.untransform(e, t2, n2);
    case "custom":
      return Ln.untransform(e, t2, n2);
    case "typed-array":
      return Dn2.untransform(e, t2, n2);
    default:
      throw new Error("Unknown transformation: " + t2);
  }
  else {
    let r2 = wn2[t2];
    if (!r2) throw new Error("Unknown transformation: " + t2);
    return r2.untransform(e, n2);
  }
};
var ne4 = (e, t2) => {
  if (t2 > e.size) throw new Error("index out of bounds");
  let n2 = e.keys();
  for (; t2 > 0; ) n2.next(), t2--;
  return n2.next().value;
};
function bn(e) {
  if (Re(e, "__proto__")) throw new Error("__proto__ is not allowed as a property");
  if (Re(e, "prototype")) throw new Error("prototype is not allowed as a property");
  if (Re(e, "constructor")) throw new Error("constructor is not allowed as a property");
}
var di2 = (e, t2) => {
  bn(t2);
  for (let n2 = 0; n2 < t2.length; n2++) {
    let r2 = t2[n2];
    if (Oe3(e)) e = ne4(e, +r2);
    else if (ge3(e)) {
      let o = +r2, i = +t2[++n2] == 0 ? "key" : "value", s = ne4(e, o);
      switch (i) {
        case "key":
          e = s;
          break;
        case "value":
          e = e.get(s);
          break;
      }
    } else e = e[r2];
  }
  return e;
};
var ot3 = (e, t2, n2) => {
  if (bn(t2), t2.length === 0) return n2(e);
  let r2 = e;
  for (let i = 0; i < t2.length - 1; i++) {
    let s = t2[i];
    if (H4(r2)) {
      let a2 = +s;
      r2 = r2[a2];
    } else if (Te3(r2)) r2 = r2[s];
    else if (Oe3(r2)) {
      let a2 = +s;
      r2 = ne4(r2, a2);
    } else if (ge3(r2)) {
      if (i === t2.length - 2) break;
      let a2 = +s, l3 = +t2[++i] == 0 ? "key" : "value", u2 = ne4(r2, a2);
      switch (l3) {
        case "key":
          r2 = u2;
          break;
        case "value":
          r2 = r2.get(u2);
          break;
      }
    }
  }
  let o = t2[t2.length - 1];
  if (H4(r2) ? r2[+o] = n2(r2[+o]) : Te3(r2) && (r2[o] = n2(r2[o])), Oe3(r2)) {
    let i = ne4(r2, +o), s = n2(i);
    i !== s && (r2.delete(i), r2.add(s));
  }
  if (ge3(r2)) {
    let i = +t2[t2.length - 2], s = ne4(r2, i);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        let a2 = n2(s);
        r2.set(a2, r2.get(s)), a2 !== s && r2.delete(s);
        break;
      }
      case "value":
        r2.set(s, n2(r2.get(s)));
        break;
    }
  }
  return e;
};
function it2(e, t2, n2 = []) {
  if (!e) return;
  if (!H4(e)) {
    ie2(e, (i, s) => it2(i, t2, [...n2, ...Ee4(s)]));
    return;
  }
  let [r2, o] = e;
  o && ie2(o, (i, s) => {
    it2(i, t2, [...n2, ...Ee4(s)]);
  }), t2(r2, n2);
}
function Ei2(e, t2, n2) {
  return it2(t2, (r2, o) => {
    e = ot3(e, o, (i) => pi2(i, r2, n2));
  }), e;
}
function mi2(e, t2) {
  function n2(r2, o) {
    let i = di2(e, Ee4(o));
    r2.map(Ee4).forEach((s) => {
      e = ot3(e, s, () => i);
    });
  }
  if (H4(t2)) {
    let [r2, o] = t2;
    r2.forEach((i) => {
      e = ot3(e, Ee4(i), () => e);
    }), o && ie2(o, n2);
  } else ie2(t2, n2);
  return e;
}
var Ti = (e, t2) => Te3(e) || H4(e) || ge3(e) || Oe3(e) || An2(e, t2);
function gi2(e, t2, n2) {
  let r2 = n2.get(e);
  r2 ? r2.push(t2) : n2.set(e, [t2]);
}
function Oi(e, t2) {
  let n2 = {}, r2;
  return e.forEach((o) => {
    if (o.length <= 1) return;
    t2 || (o = o.map((a2) => a2.map(String)).sort((a2, l3) => a2.length - l3.length));
    let [i, ...s] = o;
    i.length === 0 ? r2 = s.map(Ze2) : n2[Ze2(i)] = s.map(Ze2);
  }), r2 ? rt2(n2) ? [r2] : [r2, n2] : rt2(n2) ? void 0 : n2;
}
var Un = (e, t2, n2, r2, o = [], i = [], s = /* @__PURE__ */ new Map()) => {
  let a2 = si2(e);
  if (!a2) {
    gi2(e, o, t2);
    let N4 = s.get(e);
    if (N4) return r2 ? { transformedValue: null } : N4;
  }
  if (!Ti(e, n2)) {
    let N4 = Ut3(e, n2), I4 = N4 ? { transformedValue: N4.value, annotations: [N4.type] } : { transformedValue: e };
    return a2 || s.set(e, I4), I4;
  }
  if (Re(i, e)) return { transformedValue: null };
  let l3 = Ut3(e, n2), u2 = l3?.value ?? e, p3 = H4(u2) ? [] : {}, f3 = {};
  ie2(u2, (N4, I4) => {
    if (I4 === "__proto__" || I4 === "constructor" || I4 === "prototype") throw new Error(`Detected property ${I4}. This is a prototype pollution risk, please remove it from your object.`);
    let P6 = Un(N4, t2, n2, r2, [...o, I4], [...i, e], s);
    p3[I4] = P6.transformedValue, H4(P6.annotations) ? f3[I4] = P6.annotations : Te3(P6.annotations) && ie2(P6.annotations, (S5, E6) => {
      f3[Rn(I4) + "." + E6] = S5;
    });
  });
  let h5 = rt2(f3) ? { transformedValue: p3, annotations: l3 ? [l3.type] : void 0 } : { transformedValue: p3, annotations: l3 ? [l3.type, f3] : f3 };
  return a2 || s.set(e, h5), h5;
};
function ze5(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function kt4(e) {
  return ze5(e) === "Array";
}
function hi2(e) {
  if (ze5(e) !== "Object") return false;
  let t2 = Object.getPrototypeOf(e);
  return !!t2 && t2.constructor === Object && t2 === Object.prototype;
}
function yi2(e) {
  return ze5(e) === "Null";
}
function Si2(e, t2, n2, r2, o) {
  return (i) => e(i) || t2(i) || !!n2 && n2(i) || !!r2 && r2(i) || !!o && o(i);
}
function Ii(e) {
  return ze5(e) === "Undefined";
}
var ks2 = Si2(yi2, Ii);
function Ni2(e, t2, n2, r2, o) {
  let i = {}.propertyIsEnumerable.call(r2, t2) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t2] = n2), o && i === "nonenumerable" && Object.defineProperty(e, t2, { value: n2, enumerable: false, writable: true, configurable: true });
}
function st2(e, t2 = {}) {
  if (kt4(e)) return e.map((o) => st2(o, t2));
  if (!hi2(e)) return e;
  let n2 = Object.getOwnPropertyNames(e), r2 = Object.getOwnPropertySymbols(e);
  return [...n2, ...r2].reduce((o, i) => {
    if (kt4(t2.props) && !t2.props.includes(i)) return o;
    let s = e[i];
    return Ni2(o, i, st2(s, t2), e, t2.nonenumerable), o;
  }, {});
}
var _3 = class {
  constructor({ dedupe: e = false } = {}) {
    this.classRegistry = new Xo(), this.symbolRegistry = new In((t2) => t2.description ?? ""), this.customTransformerRegistry = new Zo(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    let t2 = /* @__PURE__ */ new Map(), n2 = Un(e, t2, this, this.dedupe), r2 = { json: n2.transformedValue };
    n2.annotations && (r2.meta = { ...r2.meta, values: n2.annotations });
    let o = Oi(t2, this.dedupe);
    return o && (r2.meta = { ...r2.meta, referentialEqualities: o }), r2;
  }
  deserialize(e) {
    let { json: t2, meta: n2 } = e, r2 = st2(t2);
    return n2?.values && (r2 = Ei2(r2, n2.values, this)), n2?.referentialEqualities && (r2 = mi2(r2, n2.referentialEqualities)), r2;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t2) {
    this.classRegistry.register(e, t2);
  }
  registerSymbol(e, t2) {
    this.symbolRegistry.register(e, t2);
  }
  registerCustom(e, t2) {
    this.customTransformerRegistry.register({ name: t2, ...e });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
_3.defaultInstance = new _3();
_3.serialize = _3.defaultInstance.serialize.bind(_3.defaultInstance);
_3.deserialize = _3.defaultInstance.deserialize.bind(_3.defaultInstance);
_3.stringify = _3.defaultInstance.stringify.bind(_3.defaultInstance);
_3.parse = _3.defaultInstance.parse.bind(_3.defaultInstance);
_3.registerClass = _3.defaultInstance.registerClass.bind(_3.defaultInstance);
_3.registerSymbol = _3.defaultInstance.registerSymbol.bind(_3.defaultInstance);
_3.registerCustom = _3.defaultInstance.registerCustom.bind(_3.defaultInstance);
_3.allowErrorProps = _3.defaultInstance.allowErrorProps.bind(_3.defaultInstance);
var Ms = _3.serialize;
var xs2 = _3.deserialize;
var Gs2 = _3.stringify;
var Ks2 = _3.parse;
var $s2 = _3.registerClass;
var zs = _3.registerCustom;
var Bs = _3.registerSymbol;
var js2 = _3.allowErrorProps;
A3.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [];
A3.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null;
A3.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null;
A3.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null;
A3.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null;
A3.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
var Ne3 = 2 * 1024 * 1024;

// esm:https://esm.sh/*vue-router@4.6.4/esnext/dist/devtools-EWN81iOl.mjs
var ee3 = typeof document < "u";
function T7(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function D5(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && T7(e.default);
}
var k5 = Object.assign;
function Be4(e, t2) {
  let o = {};
  for (let n2 in t2) {
    let r2 = t2[n2];
    o[n2] = h4(r2) ? r2.map(e) : e(r2);
  }
  return o;
}
var Ue4 = () => {
};
var h4 = Array.isArray;
function Ge5(e, t2) {
  let o = {};
  for (let n2 in e) o[n2] = n2 in t2 ? t2[n2] : e[n2];
  return o;
}
function te2(e) {
  let t2 = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t2));
}
var L4 = /#/g;
var ne5 = /&/g;
var oe6 = /\//g;
var re7 = /=/g;
var ae5 = /\?/g;
var V4 = /\+/g;
var se4 = /%5B/g;
var ie3 = /%5D/g;
var $4 = /%5E/g;
var ce6 = /%60/g;
var x9 = /%7B/g;
var le3 = /%7C/g;
var B5 = /%7D/g;
var ue4 = /%20/g;
function I3(e) {
  return e == null ? "" : encodeURI("" + e).replace(le3, "|").replace(se4, "[").replace(ie3, "]");
}
function de3(e) {
  return I3(e).replace(x9, "{").replace(B5, "}").replace($4, "^");
}
function C4(e) {
  return I3(e).replace(V4, "%2B").replace(ue4, "+").replace(L4, "%23").replace(ne5, "%26").replace(ce6, "`").replace(x9, "{").replace(B5, "}").replace($4, "^");
}
function fe2(e) {
  return C4(e).replace(re7, "%3D");
}
function pe4(e) {
  return I3(e).replace(L4, "%23").replace(ae5, "%3F");
}
function Me3(e) {
  return pe4(e).replace(oe6, "%2F");
}
function y7(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
var he4 = /\/$/;
var me5 = (e) => e.replace(he4, "");
function je4(e, t2, o = "/") {
  let n2, r2 = {}, s = "", i = "", c3 = t2.indexOf("#"), d4 = t2.indexOf("?");
  return d4 = c3 >= 0 && d4 > c3 ? -1 : d4, d4 >= 0 && (n2 = t2.slice(0, d4), s = t2.slice(d4, c3 > 0 ? c3 : t2.length), r2 = e(s.slice(1))), c3 >= 0 && (n2 = n2 || t2.slice(0, c3), i = t2.slice(c3, t2.length)), n2 = ve4(n2 ?? t2, o), { fullPath: n2 + s + i, path: n2, query: r2, hash: y7(i) };
}
function Ke4(e, t2) {
  let o = t2.query ? e(t2.query) : "";
  return t2.path + (o && "?") + o + (t2.hash || "");
}
function qe5(e, t2) {
  return !t2 || !e.toLowerCase().startsWith(t2.toLowerCase()) ? e : e.slice(t2.length) || "/";
}
function He4(e, t2, o) {
  let n2 = t2.matched.length - 1, r2 = o.matched.length - 1;
  return n2 > -1 && n2 === r2 && _4(t2.matched[n2], o.matched[r2]) && ge4(t2.params, o.params) && e(t2.query) === e(o.query) && t2.hash === o.hash;
}
function _4(e, t2) {
  return (e.aliasOf || e) === (t2.aliasOf || t2);
}
function ge4(e, t2) {
  if (Object.keys(e).length !== Object.keys(t2).length) return false;
  for (var o in e) if (!_e3(e[o], t2[o])) return false;
  return true;
}
function _e3(e, t2) {
  return h4(e) ? O5(e, t2) : h4(t2) ? O5(t2, e) : e?.valueOf() === t2?.valueOf();
}
function O5(e, t2) {
  return h4(t2) ? e.length === t2.length && e.every((o, n2) => o === t2[n2]) : e.length === 1 && e[0] === t2;
}
function ve4(e, t2) {
  if (e.startsWith("/")) return e;
  if (!e) return t2;
  let o = t2.split("/"), n2 = e.split("/"), r2 = n2[n2.length - 1];
  (r2 === ".." || r2 === ".") && n2.push("");
  let s = o.length - 1, i, c3;
  for (i = 0; i < n2.length; i++) if (c3 = n2[i], c3 !== ".") if (c3 === "..") s > 1 && s--;
  else break;
  return o.slice(0, s).join("/") + "/" + n2.slice(i).join("/");
}
var We6 = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 };
var Ye3 = function(e) {
  return e.pop = "pop", e.push = "push", e;
}({});
var Qe4 = function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
}({});
function Xe4(e) {
  if (!e) if (ee3) {
    let t2 = document.querySelector("base");
    e = t2 && t2.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), me5(e);
}
var Ee5 = /^[^#]+#/;
function Je4(e, t2) {
  return e.replace(Ee5, "#") + t2;
}
function ye3(e, t2) {
  let o = document.documentElement.getBoundingClientRect(), n2 = e.getBoundingClientRect();
  return { behavior: t2.behavior, left: n2.left - o.left - (t2.left || 0), top: n2.top - o.top - (t2.top || 0) };
}
var Ze3 = () => ({ left: window.scrollX, top: window.scrollY });
function et5(e) {
  let t2;
  if ("el" in e) {
    let o = e.el, n2 = typeof o == "string" && o.startsWith("#"), r2 = typeof o == "string" ? n2 ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!r2) return;
    t2 = ye3(r2, e);
  } else t2 = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t2) : window.scrollTo(t2.left != null ? t2.left : window.scrollX, t2.top != null ? t2.top : window.scrollY);
}
function tt4(e, t2) {
  return (history.state ? history.state.position - t2 : -1) + e;
}
var N3 = /* @__PURE__ */ new Map();
function nt4(e, t2) {
  N3.set(e, t2);
}
function ot4(e) {
  let t2 = N3.get(e);
  return N3.delete(e), t2;
}
function Re2(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function rt3(e) {
  return typeof e == "string" || typeof e == "symbol";
}
var m6 = function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
}({});
var U3 = Symbol("");
var at3 = function(e) {
  return e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated", e;
}({});
var st3 = { [m6.MATCHER_NOT_FOUND]({ location: e, currentLocation: t2 }) {
  return `No match for
 ${JSON.stringify(e)}${t2 ? `
while being at
` + JSON.stringify(t2) : ""}`;
}, [m6.NAVIGATION_GUARD_REDIRECT]({ from: e, to: t2 }) {
  return `Redirected from "${e.fullPath}" to "${Ne4(t2)}" via a navigation guard.`;
}, [m6.NAVIGATION_ABORTED]({ from: e, to: t2 }) {
  return `Navigation aborted from "${e.fullPath}" to "${t2.fullPath}" via a navigation guard.`;
}, [m6.NAVIGATION_CANCELLED]({ from: e, to: t2 }) {
  return `Navigation cancelled from "${e.fullPath}" to "${t2.fullPath}" with a new navigation.`;
}, [m6.NAVIGATION_DUPLICATED]({ from: e, to: t2 }) {
  return `Avoided redundant navigation to current location: "${e.fullPath}".`;
} };
function P5(e, t2) {
  return k5(new Error(), { type: e, [U3]: true }, t2);
}
function it3(e, t2) {
  return e instanceof Error && U3 in e && (t2 == null || !!(e.type & t2));
}
var Ce3 = ["params", "query", "hash"];
function Ne4(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  let t2 = {};
  for (let o of Ce3) o in e && (t2[o] = e[o]);
  return JSON.stringify(t2, null, 2);
}
function ct4(e) {
  let t2 = {};
  if (e === "" || e === "?") return t2;
  let o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let n2 = 0; n2 < o.length; ++n2) {
    let r2 = o[n2].replace(V4, " "), s = r2.indexOf("="), i = y7(s < 0 ? r2 : r2.slice(0, s)), c3 = s < 0 ? null : y7(r2.slice(s + 1));
    if (i in t2) {
      let d4 = t2[i];
      h4(d4) || (d4 = t2[i] = [d4]), d4.push(c3);
    } else t2[i] = c3;
  }
  return t2;
}
function lt5(e) {
  let t2 = "";
  for (let o in e) {
    let n2 = e[o];
    if (o = fe2(o), n2 == null) {
      n2 !== void 0 && (t2 += (t2.length ? "&" : "") + o);
      continue;
    }
    (h4(n2) ? n2.map((r2) => r2 && C4(r2)) : [n2 && C4(n2)]).forEach((r2) => {
      r2 !== void 0 && (t2 += (t2.length ? "&" : "") + o, r2 != null && (t2 += "=" + r2));
    });
  }
  return t2;
}
function ut4(e) {
  let t2 = {};
  for (let o in e) {
    let n2 = e[o];
    n2 !== void 0 && (t2[o] = h4(n2) ? n2.map((r2) => r2 == null ? null : "" + r2) : n2 == null ? n2 : "" + n2);
  }
  return t2;
}
var G3 = Symbol("");
var dt5 = Symbol("");
var ft3 = Symbol("");
var pt5 = Symbol("");
var ht5 = Symbol("");
function mt2() {
  let e = [];
  function t2(n2) {
    return e.push(n2), () => {
      let r2 = e.indexOf(n2);
      r2 > -1 && e.splice(r2, 1);
    };
  }
  function o() {
    e = [];
  }
  return { add: t2, list: () => e.slice(), reset: o };
}
function b6(e, t2, o, n2, r2, s = (i) => i()) {
  let i = n2 && (n2.enterCallbacks[r2] = n2.enterCallbacks[r2] || []);
  return () => new Promise((c3, d4) => {
    let f3 = (a2) => {
      a2 === false ? d4(P5(m6.NAVIGATION_ABORTED, { from: o, to: t2 })) : a2 instanceof Error ? d4(a2) : Re2(a2) ? d4(P5(m6.NAVIGATION_GUARD_REDIRECT, { from: t2, to: a2 })) : (i && n2.enterCallbacks[r2] === i && typeof a2 == "function" && i.push(a2), c3());
    }, l3 = s(() => e.call(n2 && n2.instances[r2], t2, o, f3)), u2 = Promise.resolve(l3);
    e.length < 3 && (u2 = u2.then(f3)), u2.catch((a2) => d4(a2));
  });
}
function vt6(e, t2, o, n2, r2 = (s) => s()) {
  let s = [];
  for (let i of e) for (let c3 in i.components) {
    let d4 = i.components[c3];
    if (!(t2 !== "beforeRouteEnter" && !i.instances[c3])) if (T7(d4)) {
      let f3 = (d4.__vccOpts || d4)[t2];
      f3 && s.push(b6(f3, o, n2, i, c3, r2));
    } else {
      let f3 = d4();
      s.push(() => f3.then((l3) => {
        if (!l3) throw new Error(`Couldn't resolve component "${c3}" at "${i.path}"`);
        let u2 = D5(l3) ? l3.default : l3;
        i.mods[c3] = l3, i.components[c3] = u2;
        let a2 = (u2.__vccOpts || u2)[t2];
        return a2 && b6(a2, o, n2, i, c3, r2)();
      }));
    }
  }
  return s;
}
function yt4(e, t2) {
  let o = [], n2 = [], r2 = [], s = Math.max(t2.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    let c3 = t2.matched[i];
    c3 && (e.matched.find((f3) => _4(f3, c3)) ? n2.push(c3) : o.push(c3));
    let d4 = e.matched[i];
    d4 && (t2.matched.find((f3) => _4(f3, d4)) || r2.push(d4));
  }
  return [o, n2, r2];
}
function g7(e, t2) {
  let o = k5({}, e, { matched: e.matched.map((n2) => ke6(n2, ["instances", "children", "aliasOf"])) });
  return { _custom: { type: null, readOnly: true, display: e.fullPath, tooltip: t2, value: o } };
}
function E5(e) {
  return { _custom: { display: e } };
}
var we2 = 0;
function Rt5(e, t2, o) {
  if (t2.__hasDevtools) return;
  t2.__hasDevtools = true;
  let n2 = we2++;
  Ro({ id: "org.vuejs.router" + (n2 ? "." + n2 : ""), label: "Vue Router", packageName: "vue-router", homepage: "https://router.vuejs.org", logo: "https://router.vuejs.org/logo.png", componentStateTypes: ["Routing"], app: e }, (r2) => {
    typeof r2.now != "function" && te2("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), r2.on.inspectComponent((l3, u2) => {
      l3.instanceData && l3.instanceData.state.push({ type: "Routing", key: "$route", editable: false, value: g7(t2.currentRoute.value, "Current Route") });
    }), r2.on.visitComponentTree(({ treeNode: l3, componentInstance: u2 }) => {
      if (u2.__vrv_devtools) {
        let a2 = u2.__vrv_devtools;
        l3.tags.push({ label: (a2.name ? `${a2.name.toString()}: ` : "") + a2.path, textColor: 0, tooltip: "This component is rendered by &lt;router-view&gt;", backgroundColor: j4 });
      }
      h4(u2.__vrl_devtools) && (u2.__devtoolsApi = r2, u2.__vrl_devtools.forEach((a2) => {
        let p3 = a2.route.path, v6 = q4, R6 = "", A5 = 0;
        a2.error ? (p3 = a2.error, v6 = be3, A5 = Se4) : a2.isExactActive ? (v6 = K6, R6 = "This is exactly active") : a2.isActive && (v6 = F6, R6 = "This link is active"), l3.tags.push({ label: p3, textColor: A5, tooltip: R6, backgroundColor: v6 });
      }));
    }), Kt(t2.currentRoute, () => {
      d4(), r2.notifyComponentUpdate(), r2.sendInspectorTree(c3), r2.sendInspectorState(c3);
    });
    let s = "router:navigations:" + n2;
    r2.addTimelineLayer({ id: s, label: `Router${n2 ? " " + n2 : ""} Navigations`, color: 4237508 }), t2.onError((l3, u2) => {
      r2.addTimelineEvent({ layerId: s, event: { title: "Error during Navigation", subtitle: u2.fullPath, logType: "error", time: r2.now(), data: { error: l3 }, groupId: u2.meta.__navigationId } });
    });
    let i = 0;
    t2.beforeEach((l3, u2) => {
      let a2 = { guard: E5("beforeEach"), from: g7(u2, "Current Location during this navigation"), to: g7(l3, "Target location") };
      Object.defineProperty(l3.meta, "__navigationId", { value: i++ }), r2.addTimelineEvent({ layerId: s, event: { time: r2.now(), title: "Start of navigation", subtitle: l3.fullPath, data: a2, groupId: l3.meta.__navigationId } });
    }), t2.afterEach((l3, u2, a2) => {
      let p3 = { guard: E5("afterEach") };
      a2 ? (p3.failure = { _custom: { type: Error, readOnly: true, display: a2 ? a2.message : "", tooltip: "Navigation Failure", value: a2 } }, p3.status = E5("\u274C")) : p3.status = E5("\u2705"), p3.from = g7(u2, "Current Location during this navigation"), p3.to = g7(l3, "Target location"), r2.addTimelineEvent({ layerId: s, event: { title: "End of navigation", subtitle: l3.fullPath, time: r2.now(), data: p3, logType: a2 ? "warning" : "default", groupId: l3.meta.__navigationId } });
    });
    let c3 = "router-inspector:" + n2;
    r2.addInspector({ id: c3, label: "Routes" + (n2 ? " " + n2 : ""), icon: "book", treeFilterPlaceholder: "Search routes" });
    function d4() {
      if (!f3) return;
      let l3 = f3, u2 = o.getRoutes().filter((a2) => !a2.parent || !a2.parent.record.components);
      u2.forEach(Y5), l3.filter && (u2 = u2.filter((a2) => w3(a2, l3.filter.toLowerCase()))), u2.forEach((a2) => W5(a2, t2.currentRoute.value)), l3.rootNodes = u2.map(H5);
    }
    let f3;
    r2.on.getInspectorTree((l3) => {
      f3 = l3, l3.app === e && l3.inspectorId === c3 && d4();
    }), r2.on.getInspectorState((l3) => {
      if (l3.app === e && l3.inspectorId === c3) {
        let u2 = o.getRoutes().find((a2) => a2.record.__vd_id === l3.nodeId);
        u2 && (l3.state = { options: Ae5(u2) });
      }
    }), r2.sendInspectorTree(c3), r2.sendInspectorState(c3);
  });
}
function Ie4(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ae5(e) {
  let { record: t2 } = e, o = [{ editable: false, key: "path", value: t2.path }];
  return t2.name != null && o.push({ editable: false, key: "name", value: t2.name }), o.push({ editable: false, key: "regexp", value: e.re }), e.keys.length && o.push({ editable: false, key: "keys", value: { _custom: { type: null, readOnly: true, display: e.keys.map((n2) => `${n2.name}${Ie4(n2)}`).join(" "), tooltip: "Param keys", value: e.keys } } }), t2.redirect != null && o.push({ editable: false, key: "redirect", value: t2.redirect }), e.alias.length && o.push({ editable: false, key: "aliases", value: e.alias.map((n2) => n2.record.path) }), Object.keys(e.record.meta).length && o.push({ editable: false, key: "meta", value: e.record.meta }), o.push({ key: "score", editable: false, value: { _custom: { type: null, readOnly: true, display: e.score.map((n2) => n2.join(", ")).join(" | "), tooltip: "Score used to sort routes", value: e.score } } }), o;
}
var j4 = 15485081;
var F6 = 2450411;
var K6 = 8702998;
var Oe4 = 2282478;
var q4 = 16486972;
var Pe4 = 6710886;
var be3 = 16704226;
var Se4 = 12131356;
function H5(e) {
  let t2 = [], { record: o } = e;
  o.name != null && t2.push({ label: String(o.name), textColor: 0, backgroundColor: Oe4 }), o.aliasOf && t2.push({ label: "alias", textColor: 0, backgroundColor: q4 }), e.__vd_match && t2.push({ label: "matches", textColor: 0, backgroundColor: j4 }), e.__vd_exactActive && t2.push({ label: "exact", textColor: 0, backgroundColor: K6 }), e.__vd_active && t2.push({ label: "active", textColor: 0, backgroundColor: F6 }), o.redirect && t2.push({ label: typeof o.redirect == "string" ? `redirect: ${o.redirect}` : "redirects", textColor: 16777215, backgroundColor: Pe4 });
  let n2 = o.__vd_id;
  return n2 == null && (n2 = String(Te4++), o.__vd_id = n2), { id: n2, label: o.path, tags: t2, children: e.children.map(H5) };
}
var Te4 = 0;
var De2 = /^\/(.*)\/([a-z]*)$/;
function W5(e, t2) {
  let o = t2.matched.length && _4(t2.matched[t2.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = o, o || (e.__vd_active = t2.matched.some((n2) => _4(n2, e.record))), e.children.forEach((n2) => W5(n2, t2));
}
function Y5(e) {
  e.__vd_match = false, e.children.forEach(Y5);
}
function w3(e, t2) {
  let o = String(e.re).match(De2);
  if (e.__vd_match = false, !o || o.length < 3) return false;
  if (new RegExp(o[1].replace(/\$$/, ""), o[2]).test(t2)) return e.children.forEach((s) => w3(s, t2)), e.record.path !== "/" || t2 === "/" ? (e.__vd_match = e.re.test(t2), true) : false;
  let n2 = e.record.path.toLowerCase(), r2 = y7(n2);
  return !t2.startsWith("/") && (r2.includes(t2) || n2.includes(t2)) || r2.startsWith(t2) || n2.startsWith(t2) || e.record.name && String(e.record.name).includes(t2) ? true : e.children.some((s) => w3(s, t2));
}
function ke6(e, t2) {
  let o = {};
  for (let n2 in e) t2.includes(n2) || (o[n2] = e[n2]);
  return o;
}

// esm:https://esm.sh/*vue-router@4.6.4/esnext/vue-router.mjs
var wt5 = () => location.protocol + "//" + location.host;
function Ke5(e, r2) {
  let { pathname: t2, search: o, hash: i } = r2, d4 = e.indexOf("#");
  if (d4 > -1) {
    let g8 = i.includes(e.slice(d4)) ? e.slice(d4).length : 1, v6 = i.slice(g8);
    return v6[0] !== "/" && (v6 = "/" + v6), qe5(v6, "");
  }
  return qe5(t2, e) + o + i;
}
function Rt6(e, r2, t2, o) {
  let i = [], d4 = [], g8 = null, v6 = ({ state: l3 }) => {
    let s = Ke5(e, location), w4 = t2.value, O6 = r2.value, _5 = 0;
    if (l3) {
      if (t2.value = s, r2.value = l3, g8 && g8 === w4) {
        g8 = null;
        return;
      }
      _5 = O6 ? l3.position - O6.position : 0;
    } else o(s);
    i.forEach((P6) => {
      P6(t2.value, w4, { delta: _5, type: Ye3.pop, direction: _5 ? _5 > 0 ? Qe4.forward : Qe4.back : Qe4.unknown });
    });
  };
  function u2() {
    g8 = t2.value;
  }
  function h5(l3) {
    i.push(l3);
    let s = () => {
      let w4 = i.indexOf(l3);
      w4 > -1 && i.splice(w4, 1);
    };
    return d4.push(s), s;
  }
  function c3() {
    if (document.visibilityState === "hidden") {
      let { history: l3 } = window;
      if (!l3.state) return;
      l3.replaceState(k5({}, l3.state, { scroll: Ze3() }), "");
    }
  }
  function a2() {
    for (let l3 of d4) l3();
    d4 = [], window.removeEventListener("popstate", v6), window.removeEventListener("pagehide", c3), document.removeEventListener("visibilitychange", c3);
  }
  return window.addEventListener("popstate", v6), window.addEventListener("pagehide", c3), document.addEventListener("visibilitychange", c3), { pauseListeners: u2, listen: h5, destroy: a2 };
}
function xe3(e, r2, t2, o = false, i = false) {
  return { back: e, current: r2, forward: t2, replaced: o, position: window.history.length, scroll: i ? Ze3() : null };
}
function Nt5(e) {
  let { history: r2, location: t2 } = window, o = { value: Ke5(e, t2) }, i = { value: r2.state };
  i.value || d4(o.value, { back: null, current: o.value, forward: null, position: r2.length - 1, replaced: true, scroll: null }, true);
  function d4(u2, h5, c3) {
    let a2 = e.indexOf("#"), l3 = a2 > -1 ? (t2.host && document.querySelector("base") ? e : e.slice(a2)) + u2 : wt5() + e + u2;
    try {
      r2[c3 ? "replaceState" : "pushState"](h5, "", l3), i.value = h5;
    } catch (s) {
      console.error(s), t2[c3 ? "replace" : "assign"](l3);
    }
  }
  function g8(u2, h5) {
    d4(u2, k5({}, r2.state, xe3(i.value.back, u2, i.value.forward, true), h5, { position: i.value.position }), true), o.value = u2;
  }
  function v6(u2, h5) {
    let c3 = k5({}, i.value, r2.state, { forward: u2, scroll: Ze3() });
    d4(c3.current, c3, true), d4(u2, k5({}, xe3(o.value, u2, null), { position: c3.position + 1 }, h5), false), o.value = u2;
  }
  return { location: o, state: i, push: v6, replace: g8 };
}
function Ot3(e) {
  e = Xe4(e);
  let r2 = Nt5(e), t2 = Rt6(e, r2.state, r2.location, r2.replace);
  function o(d4, g8 = true) {
    g8 || t2.pauseListeners(), history.go(d4);
  }
  let i = k5({ location: "", base: e, go: o, createHref: Je4.bind(null, e) }, r2, t2);
  return Object.defineProperty(i, "location", { enumerable: true, get: () => r2.location.value }), Object.defineProperty(i, "state", { enumerable: true, get: () => r2.state.value }), i;
}
var U4 = function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
}({});
var k6 = function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
}(k6 || {});
var At5 = { type: U4.Static, value: "" };
var bt5 = /[a-zA-Z0-9_]/;
function _t7(e) {
  if (!e) return [[]];
  if (e === "/") return [[At5]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function r2(s) {
    throw new Error(`ERR (${t2})/"${h5}": ${s}`);
  }
  let t2 = k6.Static, o = t2, i = [], d4;
  function g8() {
    d4 && i.push(d4), d4 = [];
  }
  let v6 = 0, u2, h5 = "", c3 = "";
  function a2() {
    h5 && (t2 === k6.Static ? d4.push({ type: U4.Static, value: h5 }) : t2 === k6.Param || t2 === k6.ParamRegExp || t2 === k6.ParamRegExpEnd ? (d4.length > 1 && (u2 === "*" || u2 === "+") && r2(`A repeatable param (${h5}) must be alone in its segment. eg: '/:ids+.`), d4.push({ type: U4.Param, value: h5, regexp: c3, repeatable: u2 === "*" || u2 === "+", optional: u2 === "*" || u2 === "?" })) : r2("Invalid state to consume buffer"), h5 = "");
  }
  function l3() {
    h5 += u2;
  }
  for (; v6 < e.length; ) {
    if (u2 = e[v6++], u2 === "\\" && t2 !== k6.ParamRegExp) {
      o = t2, t2 = k6.EscapeNext;
      continue;
    }
    switch (t2) {
      case k6.Static:
        u2 === "/" ? (h5 && a2(), g8()) : u2 === ":" ? (a2(), t2 = k6.Param) : l3();
        break;
      case k6.EscapeNext:
        l3(), t2 = o;
        break;
      case k6.Param:
        u2 === "(" ? t2 = k6.ParamRegExp : bt5.test(u2) ? l3() : (a2(), t2 = k6.Static, u2 !== "*" && u2 !== "?" && u2 !== "+" && v6--);
        break;
      case k6.ParamRegExp:
        u2 === ")" ? c3[c3.length - 1] == "\\" ? c3 = c3.slice(0, -1) + u2 : t2 = k6.ParamRegExpEnd : c3 += u2;
        break;
      case k6.ParamRegExpEnd:
        a2(), t2 = k6.Static, u2 !== "*" && u2 !== "?" && u2 !== "+" && v6--, c3 = "";
        break;
      default:
        r2("Unknown state");
        break;
    }
  }
  return t2 === k6.ParamRegExp && r2(`Unfinished custom RegExp for param "${h5}"`), a2(), g8(), i;
}
var Ve4 = "[^/]+?";
var Pt2 = { sensitive: false, strict: false, start: true, end: true };
var V5 = function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
}(V5 || {});
var Dt3 = /[.+*?^${}()[\]/\\]/g;
function St5(e, r2) {
  let t2 = k5({}, Pt2, r2), o = [], i = t2.start ? "^" : "", d4 = [];
  for (let h5 of e) {
    let c3 = h5.length ? [] : [V5.Root];
    t2.strict && !h5.length && (i += "/");
    for (let a2 = 0; a2 < h5.length; a2++) {
      let l3 = h5[a2], s = V5.Segment + (t2.sensitive ? V5.BonusCaseSensitive : 0);
      if (l3.type === U4.Static) a2 || (i += "/"), i += l3.value.replace(Dt3, "\\$&"), s += V5.Static;
      else if (l3.type === U4.Param) {
        let { value: w4, repeatable: O6, optional: _5, regexp: P6 } = l3;
        d4.push({ name: w4, repeatable: O6, optional: _5 });
        let y8 = P6 || Ve4;
        if (y8 !== Ve4) {
          s += V5.BonusCustomRegExp;
          try {
            `${y8}`;
          } catch (T8) {
            throw new Error(`Invalid custom RegExp for param "${w4}" (${y8}): ` + T8.message);
          }
        }
        let b7 = O6 ? `((?:${y8})(?:/(?:${y8}))*)` : `(${y8})`;
        a2 || (b7 = _5 && h5.length < 2 ? `(?:/${b7})` : "/" + b7), _5 && (b7 += "?"), i += b7, s += V5.Dynamic, _5 && (s += V5.BonusOptional), O6 && (s += V5.BonusRepeatable), y8 === ".*" && (s += V5.BonusWildcard);
      }
      c3.push(s);
    }
    o.push(c3);
  }
  if (t2.strict && t2.end) {
    let h5 = o.length - 1;
    o[h5][o[h5].length - 1] += V5.BonusStrict;
  }
  t2.strict || (i += "/?"), t2.end ? i += "$" : t2.strict && !i.endsWith("/") && (i += "(?:/|$)");
  let g8 = new RegExp(i, t2.sensitive ? "" : "i");
  function v6(h5) {
    let c3 = h5.match(g8), a2 = {};
    if (!c3) return null;
    for (let l3 = 1; l3 < c3.length; l3++) {
      let s = c3[l3] || "", w4 = d4[l3 - 1];
      a2[w4.name] = s && w4.repeatable ? s.split("/") : s;
    }
    return a2;
  }
  function u2(h5) {
    let c3 = "", a2 = false;
    for (let l3 of e) {
      (!a2 || !c3.endsWith("/")) && (c3 += "/"), a2 = false;
      for (let s of l3) if (s.type === U4.Static) c3 += s.value;
      else if (s.type === U4.Param) {
        let { value: w4, repeatable: O6, optional: _5 } = s, P6 = w4 in h5 ? h5[w4] : "";
        if (h4(P6) && !O6) throw new Error(`Provided param "${w4}" is an array but it is not repeatable (* or + modifiers)`);
        let y8 = h4(P6) ? P6.join("/") : P6;
        if (!y8) if (_5) l3.length < 2 && (c3.endsWith("/") ? c3 = c3.slice(0, -1) : a2 = true);
        else throw new Error(`Missing required param "${w4}"`);
        c3 += y8;
      }
    }
    return c3 || "/";
  }
  return { re: g8, score: o, keys: d4, parse: v6, stringify: u2 };
}
function kt5(e, r2) {
  let t2 = 0;
  for (; t2 < e.length && t2 < r2.length; ) {
    let o = r2[t2] - e[t2];
    if (o) return o;
    t2++;
  }
  return e.length < r2.length ? e.length === 1 && e[0] === V5.Static + V5.Segment ? -1 : 1 : e.length > r2.length ? r2.length === 1 && r2[0] === V5.Static + V5.Segment ? 1 : -1 : 0;
}
function qe6(e, r2) {
  let t2 = 0, o = e.score, i = r2.score;
  for (; t2 < o.length && t2 < i.length; ) {
    let d4 = kt5(o[t2], i[t2]);
    if (d4) return d4;
    t2++;
  }
  if (Math.abs(i.length - o.length) === 1) {
    if (Ce4(o)) return 1;
    if (Ce4(i)) return -1;
  }
  return i.length - o.length;
}
function Ce4(e) {
  let r2 = e[e.length - 1];
  return e.length > 0 && r2[r2.length - 1] < 0;
}
var xt4 = { strict: false, end: true, sensitive: false };
function Vt5(e, r2, t2) {
  let o = St5(_t7(e.path), t2), i = k5(o, { record: e, parent: r2, children: [], alias: [] });
  return r2 && !i.record.aliasOf == !r2.record.aliasOf && r2.children.push(i), i;
}
function Ct4(e, r2) {
  let t2 = [], o = /* @__PURE__ */ new Map();
  r2 = Ge5(xt4, r2);
  function i(a2) {
    return o.get(a2);
  }
  function d4(a2, l3, s) {
    let w4 = !s, O6 = Ie5(a2);
    O6.aliasOf = s && s.record;
    let _5 = Ge5(r2, a2), P6 = [O6];
    if ("alias" in a2) {
      let T8 = typeof a2.alias == "string" ? [a2.alias] : a2.alias;
      for (let B6 of T8) P6.push(Ie5(k5({}, O6, { components: s ? s.record.components : O6.components, path: B6, aliasOf: s ? s.record : O6 })));
    }
    let y8, b7;
    for (let T8 of P6) {
      let { path: B6 } = T8;
      if (l3 && B6[0] !== "/") {
        let G4 = l3.record.path, I4 = G4[G4.length - 1] === "/" ? "" : "/";
        T8.path = l3.record.path + (B6 && I4 + B6);
      }
      if (y8 = Vt5(T8, l3, _5), s ? s.alias.push(y8) : (b7 = b7 || y8, b7 !== y8 && b7.alias.push(y8), w4 && a2.name && !Le3(y8) && g8(a2.name)), ze7(y8) && u2(y8), O6.children) {
        let G4 = O6.children;
        for (let I4 = 0; I4 < G4.length; I4++) d4(G4[I4], y8, s && s.children[I4]);
      }
      s = s || y8;
    }
    return b7 ? () => {
      g8(b7);
    } : Ue4;
  }
  function g8(a2) {
    if (rt3(a2)) {
      let l3 = o.get(a2);
      l3 && (o.delete(a2), t2.splice(t2.indexOf(l3), 1), l3.children.forEach(g8), l3.alias.forEach(g8));
    } else {
      let l3 = t2.indexOf(a2);
      l3 > -1 && (t2.splice(l3, 1), a2.record.name && o.delete(a2.record.name), a2.children.forEach(g8), a2.alias.forEach(g8));
    }
  }
  function v6() {
    return t2;
  }
  function u2(a2) {
    let l3 = Lt5(a2, t2);
    t2.splice(l3, 0, a2), a2.record.name && !Le3(a2) && o.set(a2.record.name, a2);
  }
  function h5(a2, l3) {
    let s, w4 = {}, O6, _5;
    if ("name" in a2 && a2.name) {
      if (s = o.get(a2.name), !s) throw P5(m6.MATCHER_NOT_FOUND, { location: a2 });
      _5 = s.record.name, w4 = k5(Te5(l3.params, s.keys.filter((b7) => !b7.optional).concat(s.parent ? s.parent.keys.filter((b7) => b7.optional) : []).map((b7) => b7.name)), a2.params && Te5(a2.params, s.keys.map((b7) => b7.name))), O6 = s.stringify(w4);
    } else if (a2.path != null) O6 = a2.path, s = t2.find((b7) => b7.re.test(O6)), s && (w4 = s.parse(O6), _5 = s.record.name);
    else {
      if (s = l3.name ? o.get(l3.name) : t2.find((b7) => b7.re.test(l3.path)), !s) throw P5(m6.MATCHER_NOT_FOUND, { location: a2, currentLocation: l3 });
      _5 = s.record.name, w4 = k5({}, l3.params, a2.params), O6 = s.stringify(w4);
    }
    let P6 = [], y8 = s;
    for (; y8; ) P6.unshift(y8.record), y8 = y8.parent;
    return { name: _5, path: O6, params: w4, matched: P6, meta: It3(P6) };
  }
  e.forEach((a2) => d4(a2));
  function c3() {
    t2.length = 0, o.clear();
  }
  return { addRoute: d4, resolve: h5, removeRoute: g8, clearRoutes: c3, getRoutes: v6, getRecordMatcher: i };
}
function Te5(e, r2) {
  let t2 = {};
  for (let o of r2) o in e && (t2[o] = e[o]);
  return t2;
}
function Ie5(e) {
  let r2 = { path: e.path, redirect: e.redirect, name: e.name, meta: e.meta || {}, aliasOf: e.aliasOf, beforeEnter: e.beforeEnter, props: Tt6(e), children: e.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e ? e.components || null : e.component && { default: e.component } };
  return Object.defineProperty(r2, "mods", { value: {} }), r2;
}
function Tt6(e) {
  let r2 = {}, t2 = e.props || false;
  if ("component" in e) r2.default = t2;
  else for (let o in e.components) r2[o] = typeof t2 == "object" ? t2[o] : t2;
  return r2;
}
function Le3(e) {
  for (; e; ) {
    if (e.record.aliasOf) return true;
    e = e.parent;
  }
  return false;
}
function It3(e) {
  return e.reduce((r2, t2) => k5(r2, t2.meta), {});
}
function Lt5(e, r2) {
  let t2 = 0, o = r2.length;
  for (; t2 !== o; ) {
    let d4 = t2 + o >> 1;
    qe6(e, r2[d4]) < 0 ? o = d4 : t2 = d4 + 1;
  }
  let i = $t4(e);
  return i && (o = r2.lastIndexOf(i, o - 1)), o;
}
function $t4(e) {
  let r2 = e;
  for (; r2 = r2.parent; ) if (ze7(r2) && qe6(e, r2) === 0) return r2;
}
function ze7({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function $e5(e) {
  let r2 = Wt2(ft3), t2 = Wt2(pt5), o = false, i = null, d4 = Hi(() => {
    let c3 = Le(e.to);
    return r2.resolve(c3);
  }), g8 = Hi(() => {
    let { matched: c3 } = d4.value, { length: a2 } = c3, l3 = c3[a2 - 1], s = t2.matched;
    if (!l3 || !s.length) return -1;
    let w4 = s.findIndex(_4.bind(null, l3));
    if (w4 > -1) return w4;
    let O6 = Be5(c3[a2 - 2]);
    return a2 > 1 && Be5(l3) === O6 && s[s.length - 1].path !== O6 ? s.findIndex(_4.bind(null, c3[a2 - 2])) : w4;
  }), v6 = Hi(() => g8.value > -1 && Ut4(t2.params, d4.value.params)), u2 = Hi(() => g8.value > -1 && g8.value === t2.matched.length - 1 && ge4(t2.params, d4.value.params));
  function h5(c3 = {}) {
    if (jt3(c3)) {
      let a2 = r2[Le(e.replace) ? "replace" : "push"](Le(e.to)).catch(Ue4);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => a2), a2;
    }
    return Promise.resolve();
  }
  if (__VUE_PROD_DEVTOOLS__ && ee3) {
    let c3 = Pe2();
    if (c3) {
      let a2 = { route: d4.value, isActive: v6.value, isExactActive: u2.value, error: null };
      c3.__vrl_devtools = c3.__vrl_devtools || [], c3.__vrl_devtools.push(a2), nl(() => {
        a2.route = d4.value, a2.isActive = v6.value, a2.isExactActive = u2.value, a2.error = Re2(Le(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return { route: d4, href: Hi(() => d4.value.href), isActive: v6, isExactActive: u2, navigate: h5 };
}
function Bt3(e) {
  return e.length === 1 ? e[0] : e;
}
var Gt5 = ks({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" }, viewTransition: Boolean }, useLink: $e5, setup(e, { slots: r2 }) {
  let t2 = Qe($e5(e)), { options: o } = Wt2(ft3), i = Hi(() => ({ [Ge6(e.activeClass, o.linkActiveClass, "router-link-active")]: t2.isActive, [Ge6(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: t2.isExactActive }));
  return () => {
    let d4 = r2.default && Bt3(r2.default(t2));
    return e.custom ? d4 : Wl("a", { "aria-current": t2.isExactActive ? e.ariaCurrentValue : null, href: t2.href, onClick: t2.navigate, class: i.value }, d4);
  };
} });
var Mt3 = Gt5;
function jt3(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      let r2 = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(r2)) return;
    }
    return e.preventDefault && e.preventDefault(), true;
  }
}
function Ut4(e, r2) {
  for (let t2 in r2) {
    let o = r2[t2], i = e[t2];
    if (typeof o == "string") {
      if (o !== i) return false;
    } else if (!h4(i) || i.length !== o.length || o.some((d4, g8) => d4.valueOf() !== i[g8].valueOf())) return false;
  }
  return true;
}
function Be5(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Ge6 = (e, r2, t2) => e ?? r2 ?? t2;
var Ht3 = ks({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e, { attrs: r2, slots: t2 }) {
  let o = Wt2(ht5), i = Hi(() => e.route || o.value), d4 = Wt2(dt5, 0), g8 = Hi(() => {
    let h5 = Le(d4), { matched: c3 } = i.value, a2;
    for (; (a2 = c3[h5]) && !a2.components; ) h5++;
    return h5;
  }), v6 = Hi(() => i.value.matched[g8.value]);
  bs(dt5, Hi(() => g8.value + 1)), bs(G3, v6), bs(ht5, i);
  let u2 = xt();
  return Kt(() => [u2.value, v6.value, e.name], ([h5, c3, a2], [l3, s, w4]) => {
    c3 && (c3.instances[a2] = h5, s && s !== c3 && h5 && h5 === l3 && (c3.leaveGuards.size || (c3.leaveGuards = s.leaveGuards), c3.updateGuards.size || (c3.updateGuards = s.updateGuards))), h5 && c3 && (!s || !_4(c3, s) || !l3) && (c3.enterCallbacks[a2] || []).forEach((O6) => O6(h5));
  }, { flush: "post" }), () => {
    let h5 = i.value, c3 = e.name, a2 = v6.value, l3 = a2 && a2.components[c3];
    if (!l3) return Me4(t2.default, { Component: l3, route: h5 });
    let s = a2.props[c3], w4 = s ? s === true ? h5.params : typeof s == "function" ? s(h5) : s : null, _5 = Wl(l3, k5({}, w4, r2, { onVnodeUnmounted: (P6) => {
      P6.component.isUnmounted && (a2.instances[c3] = null);
    }, ref: u2 }));
    if (__VUE_PROD_DEVTOOLS__ && ee3 && _5.ref) {
      let P6 = { depth: g8.value, name: a2.name, path: a2.path, meta: a2.meta };
      (h4(_5.ref) ? _5.ref.map((y8) => y8.i) : [_5.ref.i]).forEach((y8) => {
        y8.__vrv_devtools = P6;
      });
    }
    return Me4(t2.default, { Component: _5, route: h5 }) || _5;
  };
} });
function Me4(e, r2) {
  if (!e) return null;
  let t2 = e(r2);
  return t2.length === 1 ? t2[0] : t2;
}
var Wt5 = Ht3;
function en3(e) {
  let r2 = Ct4(e.routes, e), t2 = e.parseQuery || ct4, o = e.stringifyQuery || lt5, i = e.history, d4 = mt2(), g8 = mt2(), v6 = mt2(), u2 = $t(We6), h5 = We6;
  ee3 && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let c3 = Be4.bind(null, (n2) => "" + n2), a2 = Be4.bind(null, Me3), l3 = Be4.bind(null, y7);
  function s(n2, p3) {
    let f3, m7;
    return rt3(n2) ? (f3 = r2.getRecordMatcher(n2), m7 = p3) : m7 = n2, r2.addRoute(m7, f3);
  }
  function w4(n2) {
    let p3 = r2.getRecordMatcher(n2);
    p3 && r2.removeRoute(p3);
  }
  function O6() {
    return r2.getRoutes().map((n2) => n2.record);
  }
  function _5(n2) {
    return !!r2.getRecordMatcher(n2);
  }
  function P6(n2, p3) {
    if (p3 = k5({}, p3 || u2.value), typeof n2 == "string") {
      let E6 = je4(t2, n2, p3.path), S5 = r2.resolve({ path: E6.path }, p3), Q4 = i.createHref(E6.fullPath);
      return k5(E6, S5, { params: l3(S5.params), hash: y7(E6.hash), redirectedFrom: void 0, href: Q4 });
    }
    let f3;
    if (n2.path != null) f3 = k5({}, n2, { path: je4(t2, n2.path, p3.path).path });
    else {
      let E6 = k5({}, n2.params);
      for (let S5 in E6) E6[S5] == null && delete E6[S5];
      f3 = k5({}, n2, { params: a2(E6) }), p3.params = a2(p3.params);
    }
    let m7 = r2.resolve(f3, p3), N4 = n2.hash || "";
    m7.params = c3(l3(m7.params));
    let D6 = Ke4(o, k5({}, n2, { hash: de3(N4), path: m7.path })), R6 = i.createHref(D6);
    return k5({ fullPath: D6, hash: N4, query: o === lt5 ? ut4(n2.query) : n2.query || {} }, m7, { redirectedFrom: void 0, href: R6 });
  }
  function y8(n2) {
    return typeof n2 == "string" ? je4(t2, n2, u2.value.path) : k5({}, n2);
  }
  function b7(n2, p3) {
    if (h5 !== n2) return P5(m6.NAVIGATION_CANCELLED, { from: p3, to: n2 });
  }
  function T8(n2) {
    return I4(n2);
  }
  function B6(n2) {
    return T8(k5(y8(n2), { replace: true }));
  }
  function G4(n2, p3) {
    let f3 = n2.matched[n2.matched.length - 1];
    if (f3 && f3.redirect) {
      let { redirect: m7 } = f3, N4 = typeof m7 == "function" ? m7(n2, p3) : m7;
      return typeof N4 == "string" && (N4 = N4.includes("?") || N4.includes("#") ? N4 = y8(N4) : { path: N4 }, N4.params = {}), k5({ query: n2.query, hash: n2.hash, params: N4.path != null ? {} : n2.params }, N4);
    }
  }
  function I4(n2, p3) {
    let f3 = h5 = P6(n2), m7 = u2.value, N4 = n2.state, D6 = n2.force, R6 = n2.replace === true, E6 = G4(f3, m7);
    if (E6) return I4(k5(y8(E6), { state: typeof E6 == "object" ? k5({}, N4, E6.state) : N4, force: D6, replace: R6 }), p3 || f3);
    let S5 = f3;
    S5.redirectedFrom = p3;
    let Q4;
    return !D6 && He4(o, m7, f3) && (Q4 = P5(m6.NAVIGATION_DUPLICATED, { to: S5, from: m7 }), Ae6(m7, m7, true, false)), (Q4 ? Promise.resolve(Q4) : we3(S5, m7)).catch((C5) => it3(C5) ? it3(C5, m6.NAVIGATION_GUARD_REDIRECT) ? C5 : ue5(C5) : ce7(C5, S5, m7)).then((C5) => {
      if (C5) {
        if (it3(C5, m6.NAVIGATION_GUARD_REDIRECT)) return I4(k5({ replace: R6 }, y8(C5.to), { state: typeof C5.to == "object" ? k5({}, N4, C5.to.state) : N4, force: D6 }), p3 || S5);
      } else C5 = Ne5(S5, m7, true, R6, N4);
      return Re3(S5, m7, C5), C5;
    });
  }
  function Qe5(n2, p3) {
    let f3 = b7(n2, p3);
    return f3 ? Promise.reject(f3) : Promise.resolve();
  }
  function se5(n2) {
    let p3 = te3.values().next().value;
    return p3 && typeof p3.runWithContext == "function" ? p3.runWithContext(n2) : n2();
  }
  function we3(n2, p3) {
    let f3, [m7, N4, D6] = yt4(n2, p3);
    f3 = vt6(m7.reverse(), "beforeRouteLeave", n2, p3);
    for (let E6 of m7) E6.leaveGuards.forEach((S5) => {
      f3.push(b6(S5, n2, p3));
    });
    let R6 = Qe5.bind(null, n2, p3);
    return f3.push(R6), F7(f3).then(() => {
      f3 = [];
      for (let E6 of d4.list()) f3.push(b6(E6, n2, p3));
      return f3.push(R6), F7(f3);
    }).then(() => {
      f3 = vt6(N4, "beforeRouteUpdate", n2, p3);
      for (let E6 of N4) E6.updateGuards.forEach((S5) => {
        f3.push(b6(S5, n2, p3));
      });
      return f3.push(R6), F7(f3);
    }).then(() => {
      f3 = [];
      for (let E6 of D6) if (E6.beforeEnter) if (h4(E6.beforeEnter)) for (let S5 of E6.beforeEnter) f3.push(b6(S5, n2, p3));
      else f3.push(b6(E6.beforeEnter, n2, p3));
      return f3.push(R6), F7(f3);
    }).then(() => (n2.matched.forEach((E6) => E6.enterCallbacks = {}), f3 = vt6(D6, "beforeRouteEnter", n2, p3, se5), f3.push(R6), F7(f3))).then(() => {
      f3 = [];
      for (let E6 of g8.list()) f3.push(b6(E6, n2, p3));
      return f3.push(R6), F7(f3);
    }).catch((E6) => it3(E6, m6.NAVIGATION_CANCELLED) ? E6 : Promise.reject(E6));
  }
  function Re3(n2, p3, f3) {
    v6.list().forEach((m7) => se5(() => m7(n2, p3, f3)));
  }
  function Ne5(n2, p3, f3, m7, N4) {
    let D6 = b7(n2, p3);
    if (D6) return D6;
    let R6 = p3 === We6, E6 = ee3 ? history.state : {};
    f3 && (m7 || R6 ? i.replace(n2.fullPath, k5({ scroll: R6 && E6 && E6.scroll }, N4)) : i.push(n2.fullPath, N4)), u2.value = n2, Ae6(n2, p3, f3, R6), ue5();
  }
  let z5;
  function Ze4() {
    z5 || (z5 = i.listen((n2, p3, f3) => {
      if (!W6.listening) return;
      let m7 = P6(n2), N4 = G4(m7, W6.currentRoute.value);
      if (N4) {
        I4(k5(N4, { replace: true, force: true }), m7).catch(Ue4);
        return;
      }
      h5 = m7;
      let D6 = u2.value;
      ee3 && nt4(tt4(D6.fullPath, f3.delta), Ze3()), we3(m7, D6).catch((R6) => it3(R6, m6.NAVIGATION_ABORTED | m6.NAVIGATION_CANCELLED) ? R6 : it3(R6, m6.NAVIGATION_GUARD_REDIRECT) ? (I4(k5(y8(R6.to), { force: true }), m7).then((E6) => {
        it3(E6, m6.NAVIGATION_ABORTED | m6.NAVIGATION_DUPLICATED) && !f3.delta && f3.type === Ye3.pop && i.go(-1, false);
      }).catch(Ue4), Promise.reject()) : (f3.delta && i.go(-f3.delta, false), ce7(R6, m7, D6))).then((R6) => {
        R6 = R6 || Ne5(m7, D6, false), R6 && (f3.delta && !it3(R6, m6.NAVIGATION_CANCELLED) ? i.go(-f3.delta, false) : f3.type === Ye3.pop && it3(R6, m6.NAVIGATION_ABORTED | m6.NAVIGATION_DUPLICATED) && i.go(-1, false)), Re3(m7, D6, R6);
      }).catch(Ue4);
    }));
  }
  let ie4 = mt2(), Oe5 = mt2(), ee4;
  function ce7(n2, p3, f3) {
    ue5(n2);
    let m7 = Oe5.list();
    return m7.length ? m7.forEach((N4) => N4(n2, p3, f3)) : console.error(n2), Promise.reject(n2);
  }
  function Je5() {
    return ee4 && u2.value !== We6 ? Promise.resolve() : new Promise((n2, p3) => {
      ie4.add([n2, p3]);
    });
  }
  function ue5(n2) {
    return ee4 || (ee4 = !n2, Ze4(), ie4.list().forEach(([p3, f3]) => n2 ? f3(n2) : p3()), ie4.reset()), n2;
  }
  function Ae6(n2, p3, f3, m7) {
    let { scrollBehavior: N4 } = e;
    if (!ee3 || !N4) return Promise.resolve();
    let D6 = !f3 && ot4(tt4(n2.fullPath, 0)) || (m7 || !f3) && history.state && history.state.scroll || null;
    return gs().then(() => N4(n2, p3, D6)).then((R6) => R6 && et5(R6)).catch((R6) => ce7(R6, n2, p3));
  }
  let le4 = (n2) => i.go(n2), fe3, te3 = /* @__PURE__ */ new Set(), W6 = { currentRoute: u2, listening: true, addRoute: s, removeRoute: w4, clearRoutes: r2.clearRoutes, hasRoute: _5, getRoutes: O6, resolve: P6, options: e, push: T8, replace: B6, go: le4, back: () => le4(-1), forward: () => le4(1), beforeEach: d4.add, beforeResolve: g8.add, afterEach: v6.add, onError: Oe5.add, isReady: Je5, install(n2) {
    n2.component("RouterLink", Mt3), n2.component("RouterView", Wt5), n2.config.globalProperties.$router = W6, Object.defineProperty(n2.config.globalProperties, "$route", { enumerable: true, get: () => Le(u2) }), ee3 && !fe3 && u2.value === We6 && (fe3 = true, T8(i.location).catch((m7) => {
    }));
    let p3 = {};
    for (let m7 in We6) Object.defineProperty(p3, m7, { get: () => u2.value[m7], enumerable: true });
    n2.provide(ft3, W6), n2.provide(pt5, Ht(p3)), n2.provide(ht5, u2);
    let f3 = n2.unmount;
    te3.add(n2), n2.unmount = function() {
      te3.delete(n2), te3.size < 1 && (h5 = We6, z5 && z5(), z5 = null, u2.value = We6, fe3 = false, ee4 = false), f3();
    }, __VUE_PROD_DEVTOOLS__ && ee3 && Rt5(n2, W6, r2);
  } };
  function F7(n2) {
    return n2.reduce((p3, f3) => p3.then(() => se5(f3)), Promise.resolve());
  }
  return W6;
}

// fs:/projects/portfolio/src/Home.vue
var Home_default = "./Home-IPD2K3CU.vue";

// fs:/projects/portfolio/src/DetailedProject.vue
var DetailedProject_default = "./DetailedProject-VMLEZGY3.vue";

// fs:/projects/portfolio/src/NotFound.vue
var NotFound_default = "./NotFound-Y3XN6KYR.vue";

// fs:/projects/portfolio/src/router/index.ts
var routes = [
  {
    path: "/",
    name: "Home",
    component: Home_default
  },
  {
    path: "/home/:id",
    name: "DetailedProject",
    component: DetailedProject_default,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound_default
  }
];
var router = en3({
  history: Ot3(),
  routes
});
var router_default = router;

// fs:/projects/portfolio/src/main.ts
Lt2(App_default).use(router_default).mount("#app");
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
/*! Bundled license information:

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
/*! Bundled license information:

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
/*! Bundled license information:

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
/*! Bundled license information:

vue/dist/vue.runtime.esm-bundler.js:
  (**
  * vue v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
/*! Bundled license information:

unenv/dist/runtime/node/internal/buffer/ieee754.mjs:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

unenv/dist/runtime/node/internal/buffer/buffer.mjs:
  (*!
  * The buffer module from node.js, for the browser.
  *
  * @author   Feross Aboukhadijeh <https://feross.org>
  * @license  MIT
  *)
*/
/*! Bundled license information:

vue-router/dist/devtools-EWN81iOl.mjs:
  (*!
   * vue-router v4.6.4
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   *)
*/
/*! Bundled license information:

vue-router/dist/vue-router.mjs:
  (*!
   * vue-router v4.6.4
   * (c) 2025 Eduardo San Martin Morote
   * @license MIT
   *)
*/
//# sourceMappingURL=main-47OGXMSD.js.map
