import './style.css';
import Ye, { createContext as mt, useRef as ie, useContext as We, useEffect as ue, useState as q, useMemo as re } from "react";
var R = {}, yt = {
  get exports() {
    return R;
  },
  set exports(v) {
    R = v;
  }
}, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function bt() {
  if ($e)
    return ae;
  $e = 1;
  var v = Ye, D = Symbol.for("react.element"), m = Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, w = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(p, f, t) {
    var r, l = {}, n = null, i = null;
    t !== void 0 && (n = "" + t), f.key !== void 0 && (n = "" + f.key), f.ref !== void 0 && (i = f.ref);
    for (r in f)
      k.call(f, r) && !a.hasOwnProperty(r) && (l[r] = f[r]);
    if (p && p.defaultProps)
      for (r in f = p.defaultProps, f)
        l[r] === void 0 && (l[r] = f[r]);
    return { $$typeof: D, type: p, key: n, ref: i, props: l, _owner: w.current };
  }
  return ae.Fragment = m, ae.jsx = x, ae.jsxs = x, ae;
}
var oe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function _t() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ye, D = Symbol.for("react.element"), m = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), p = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), t = Symbol.for("react.suspense"), r = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), i = Symbol.for("react.offscreen"), d = Symbol.iterator, E = "@@iterator";
    function s(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = d && e[d] || e[E];
      return typeof o == "function" ? o : null;
    }
    var c = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var o = arguments.length, h = new Array(o > 1 ? o - 1 : 0), _ = 1; _ < o; _++)
          h[_ - 1] = arguments[_];
        y("error", e, h);
      }
    }
    function y(e, o, h) {
      {
        var _ = c.ReactDebugCurrentFrame, F = _.getStackAddendum();
        F !== "" && (o += "%s", h = h.concat([F]));
        var T = h.map(function(C) {
          return String(C);
        });
        T.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, T);
      }
    }
    var b = !1, g = !1, O = !1, j = !1, Y = !1, I;
    I = Symbol.for("react.module.reference");
    function z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === k || e === a || Y || e === w || e === t || e === r || j || e === i || b || g || O || typeof e == "object" && e !== null && (e.$$typeof === n || e.$$typeof === l || e.$$typeof === x || e.$$typeof === p || e.$$typeof === f || e.$$typeof === I || e.getModuleId !== void 0));
    }
    function W(e, o, h) {
      var _ = e.displayName;
      if (_)
        return _;
      var F = o.displayName || o.name || "";
      return F !== "" ? h + "(" + F + ")" : h;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case k:
          return "Fragment";
        case m:
          return "Portal";
        case a:
          return "Profiler";
        case w:
          return "StrictMode";
        case t:
          return "Suspense";
        case r:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var o = e;
            return K(o) + ".Consumer";
          case x:
            var h = e;
            return K(h._context) + ".Provider";
          case f:
            return W(e, e.render, "ForwardRef");
          case l:
            var _ = e.displayName || null;
            return _ !== null ? _ : M(e.type) || "Memo";
          case n: {
            var F = e, T = F._payload, C = F._init;
            try {
              return M(C(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, H = 0, me, ye, le, Z, ce, X, A;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function $() {
      {
        if (H === 0) {
          me = console.log, ye = console.info, le = console.warn, Z = console.error, ce = console.group, X = console.groupCollapsed, A = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        H++;
      }
    }
    function fe() {
      {
        if (H--, H === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: me
            }),
            info: B({}, e, {
              value: ye
            }),
            warn: B({}, e, {
              value: le
            }),
            error: B({}, e, {
              value: Z
            }),
            group: B({}, e, {
              value: ce
            }),
            groupCollapsed: B({}, e, {
              value: X
            }),
            groupEnd: B({}, e, {
              value: A
            })
          });
        }
        H < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = c.ReactCurrentDispatcher, Q;
    function se(e, o, h) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (F) {
            var _ = F.stack.trim().match(/\n( *(at )?)/);
            Q = _ && _[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var be = !1, he;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      he = new He();
    }
    function Pe(e, o) {
      if (!e || be)
        return "";
      {
        var h = he.get(e);
        if (h !== void 0)
          return h;
      }
      var _;
      be = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = J.current, J.current = null, $();
      try {
        if (o) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (V) {
              _ = V;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (V) {
              _ = V;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            _ = V;
          }
          e();
        }
      } catch (V) {
        if (V && _ && typeof V.stack == "string") {
          for (var S = V.stack.split(`
`), L = _.stack.split(`
`), N = S.length - 1, U = L.length - 1; N >= 1 && U >= 0 && S[N] !== L[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (S[N] !== L[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || S[N] !== L[U]) {
                    var G = `
` + S[N].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && he.set(e, G), G;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        be = !1, J.current = T, fe(), Error.prepareStackTrace = F;
      }
      var te = e ? e.displayName || e.name : "", Me = te ? se(te) : "";
      return typeof e == "function" && he.set(e, Me), Me;
    }
    function Xe(e, o, h) {
      return Pe(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function pe(e, o, h) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, Je(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case t:
          return se("Suspense");
        case r:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Xe(e.render);
          case l:
            return pe(e.type, o, h);
          case n: {
            var _ = e, F = _._payload, T = _._init;
            try {
              return pe(T(F), o, h);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Fe = {}, we = c.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var o = e._owner, h = pe(e.type, e._source, o ? o.type : null);
        we.setExtraStackFrame(h);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(e, o, h, _, F) {
      {
        var T = Function.call.bind(de);
        for (var C in e)
          if (T(e, C)) {
            var S = void 0;
            try {
              if (typeof e[C] != "function") {
                var L = Error((_ || "React class") + ": " + h + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              S = e[C](o, C, _, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              S = N;
            }
            S && !(S instanceof Error) && (ve(F), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", h, C, typeof S), ve(null)), S instanceof Error && !(S.message in Fe) && (Fe[S.message] = !0, ve(F), u("Failed %s type: %s", h, S.message), ve(null));
          }
      }
    }
    var Ze = Array.isArray;
    function _e(e) {
      return Ze(e);
    }
    function Qe(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, h = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return h;
      }
    }
    function et(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function De(e) {
      if (et(e))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Te(e);
    }
    var ne = c.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, je, Ee;
    Ee = {};
    function rt(e) {
      if (de.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function it(e) {
      if (de.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function st(e, o) {
      if (typeof e.ref == "string" && ne.current && o && ne.current.stateNode !== o) {
        var h = M(ne.current.type);
        Ee[h] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ne.current.type), e.ref), Ee[h] = !0);
      }
    }
    function nt(e, o) {
      {
        var h = function() {
          Oe || (Oe = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        h.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function at(e, o) {
      {
        var h = function() {
          je || (je = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        h.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var ot = function(e, o, h, _, F, T, C) {
      var S = {
        $$typeof: D,
        type: e,
        key: o,
        ref: h,
        props: C,
        _owner: T
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function ut(e, o, h, _, F) {
      {
        var T, C = {}, S = null, L = null;
        h !== void 0 && (De(h), S = "" + h), it(o) && (De(o.key), S = "" + o.key), rt(o) && (L = o.ref, st(o, F));
        for (T in o)
          de.call(o, T) && !tt.hasOwnProperty(T) && (C[T] = o[T]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (T in N)
            C[T] === void 0 && (C[T] = N[T]);
        }
        if (S || L) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && nt(C, U), L && at(C, U);
        }
        return ot(e, S, L, F, _, ne.current, C);
      }
    }
    var Re = c.ReactCurrentOwner, Ae = c.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var o = e._owner, h = pe(e.type, e._source, o ? o.type : null);
        Ae.setExtraStackFrame(h);
      } else
        Ae.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ne() {
      {
        if (Re.current) {
          var e = M(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lt(e) {
      {
        if (e !== void 0) {
          var o = e.fileName.replace(/^.*[\\\/]/, ""), h = e.lineNumber;
          return `

Check your code at ` + o + ":" + h + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function ct(e) {
      {
        var o = Ne();
        if (!o) {
          var h = typeof e == "string" ? e : e.displayName || e.name;
          h && (o = `

Check the top-level render call using <` + h + ">.");
        }
        return o;
      }
    }
    function Ie(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var h = ct(o);
        if (Ue[h])
          return;
        Ue[h] = !0;
        var _ = "";
        e && e._owner && e._owner !== Re.current && (_ = " It was passed a child from " + M(e._owner.type) + "."), ee(e), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, _), ee(null);
      }
    }
    function Le(e, o) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var h = 0; h < e.length; h++) {
            var _ = e[h];
            Se(_) && Ie(_, o);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var F = s(e);
          if (typeof F == "function" && F !== e.entries)
            for (var T = F.call(e), C; !(C = T.next()).done; )
              Se(C.value) && Ie(C.value, o);
        }
      }
    }
    function ft(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var h;
        if (typeof o == "function")
          h = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === f || o.$$typeof === l))
          h = o.propTypes;
        else
          return;
        if (h) {
          var _ = M(o);
          Ke(h, e.props, "prop", _, e);
        } else if (o.PropTypes !== void 0 && !xe) {
          xe = !0;
          var F = M(o);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(e) {
      {
        for (var o = Object.keys(e.props), h = 0; h < o.length; h++) {
          var _ = o[h];
          if (_ !== "children" && _ !== "key") {
            ee(e), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), u("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    function ze(e, o, h, _, F, T) {
      {
        var C = z(e);
        if (!C) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = lt(F);
          L ? S += L : S += Ne();
          var N;
          e === null ? N = "null" : _e(e) ? N = "array" : e !== void 0 && e.$$typeof === D ? (N = "<" + (M(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, S);
        }
        var U = ut(e, o, h, F, T);
        if (U == null)
          return U;
        if (C) {
          var G = o.children;
          if (G !== void 0)
            if (_)
              if (_e(G)) {
                for (var te = 0; te < G.length; te++)
                  Le(G[te], e);
                Object.freeze && Object.freeze(G);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(G, e);
        }
        return e === k ? ht(U) : ft(U), U;
      }
    }
    function pt(e, o, h) {
      return ze(e, o, h, !0);
    }
    function dt(e, o, h) {
      return ze(e, o, h, !1);
    }
    var vt = dt, gt = pt;
    oe.Fragment = k, oe.jsx = vt, oe.jsxs = gt;
  }()), oe;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = bt() : v.exports = _t();
})(yt);
function ge(v) {
  throw new Error('Could not dynamically require "' + v + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ke = {}, Et = {
  get exports() {
    return ke;
  },
  set exports(v) {
    ke = v;
  }
};
/*!
 * Uploader - Uploader library implements html5 file upload and provides multiple simultaneous, stable, fault tolerant and resumable uploads
 * @version v0.6.0
 * @author dolymood <dolymood@gmail.com>
 * @link https://github.com/simple-uploader/Uploader
 * @license MIT
 */
(function(v, D) {
  (function(m) {
    v.exports = m();
  })(function() {
    return function m(k, w, a) {
      function x(t, r) {
        if (!w[t]) {
          if (!k[t]) {
            var l = typeof ge == "function" && ge;
            if (!r && l)
              return l(t, !0);
            if (p)
              return p(t, !0);
            throw new Error("Cannot find module '" + t + "'");
          }
          var n = w[t] = { exports: {} };
          k[t][0].call(n.exports, function(i) {
            var d = k[t][1][i];
            return x(d || i);
          }, n, n.exports, m, k, w, a);
        }
        return w[t].exports;
      }
      for (var p = typeof ge == "function" && ge, f = 0; f < a.length; f++)
        x(a[f]);
      return x;
    }({ 1: [function(m, k, w) {
      var a = m("./utils");
      function x(f, t, r) {
        a.defineNonEnumerable(this, "uploader", f), a.defineNonEnumerable(this, "file", t), a.defineNonEnumerable(this, "bytes", null), this.offset = r, this.tested = !1, this.retries = 0, this.pendingRetry = !1, this.preprocessState = 0, this.readState = 0, this.loaded = 0, this.total = 0, this.chunkSize = a.evalOpts(f.opts.chunkSize, t, this), this.startByte = this.offset * this.chunkSize, this.endByte = this.computeEndByte(), this.xhr = null;
      }
      var p = x.STATUS = {
        PENDING: "pending",
        UPLOADING: "uploading",
        READING: "reading",
        SUCCESS: "success",
        ERROR: "error",
        COMPLETE: "complete",
        PROGRESS: "progress",
        RETRY: "retry"
      };
      a.extend(x.prototype, {
        _event: function(f, t) {
          t = a.toArray(arguments), t.unshift(this), this.file._chunkEvent.apply(this.file, t);
        },
        computeEndByte: function() {
          var f = Math.min(this.file.size, (this.offset + 1) * this.chunkSize);
          return this.file.size - f < this.chunkSize && !this.uploader.opts.forceChunkSize && (f = this.file.size), f;
        },
        getParams: function() {
          return {
            chunkNumber: this.offset + 1,
            chunkSize: this.chunkSize,
            currentChunkSize: this.endByte - this.startByte,
            totalSize: this.file.size,
            identifier: this.file.uniqueIdentifier,
            filename: this.file.name,
            relativePath: this.file.relativePath,
            totalChunks: this.file.chunks.length
          };
        },
        getTarget: function(f, t) {
          return t.length ? (f.indexOf("?") < 0 ? f += "?" : f += "&", f + t.join("&")) : f;
        },
        test: function() {
          this.xhr = new XMLHttpRequest(), this.xhr.addEventListener("load", l, !1), this.xhr.addEventListener("error", l, !1);
          var f = a.evalOpts(this.uploader.opts.testMethod, this.file, this), t = this.prepareXhrRequest(f, !0);
          this.xhr.send(t);
          var r = this;
          function l(n) {
            var i = r.status(!0);
            i === p.ERROR ? (r._event(i, r.message()), r.uploader.uploadNextChunk()) : i === p.SUCCESS ? (r._event(i, r.message()), r.tested = !0) : r.file.paused || (r.tested = !0, r.send());
          }
        },
        preprocessFinished: function() {
          this.endByte = this.computeEndByte(), this.preprocessState = 2, this.send();
        },
        readFinished: function(f) {
          this.readState = 2, this.bytes = f, this.send();
        },
        send: function() {
          var f = this.uploader.opts.preprocess, t = this.uploader.opts.readFileFn;
          if (a.isFunction(f))
            switch (this.preprocessState) {
              case 0:
                this.preprocessState = 1, f(this);
                return;
              case 1:
                return;
            }
          switch (this.readState) {
            case 0:
              this.readState = 1, t(this.file, this.file.fileType, this.startByte, this.endByte, this);
              return;
            case 1:
              return;
          }
          if (this.uploader.opts.testChunks && !this.tested) {
            this.test();
            return;
          }
          this.loaded = 0, this.total = 0, this.pendingRetry = !1, this.xhr = new XMLHttpRequest(), this.xhr.upload.addEventListener("progress", i, !1), this.xhr.addEventListener("load", d, !1), this.xhr.addEventListener("error", d, !1);
          var r = a.evalOpts(this.uploader.opts.uploadMethod, this.file, this), l = this.prepareXhrRequest(r, !1, this.uploader.opts.method, this.bytes);
          this.xhr.send(l);
          var n = this;
          function i(E) {
            E.lengthComputable && (n.loaded = E.loaded, n.total = E.total), n._event(p.PROGRESS, E);
          }
          function d(E) {
            var s = n.message();
            n.processingResponse = !0, n.uploader.opts.processResponse(s, function(c, u) {
              if (n.processingResponse = !1, !!n.xhr) {
                n.processedState = {
                  err: c,
                  res: u
                };
                var y = n.status();
                if (y === p.SUCCESS || y === p.ERROR)
                  n._event(y, u), y === p.ERROR && n.uploader.uploadNextChunk();
                else {
                  n._event(p.RETRY, u), n.pendingRetry = !0, n.abort(), n.retries++;
                  var b = n.uploader.opts.chunkRetryInterval;
                  b !== null ? setTimeout(function() {
                    n.send();
                  }, b) : n.send();
                }
              }
            }, n.file, n);
          }
        },
        abort: function() {
          var f = this.xhr;
          this.xhr = null, this.processingResponse = !1, this.processedState = null, f && f.abort();
        },
        status: function(f) {
          if (this.readState === 1)
            return p.READING;
          if (this.pendingRetry || this.preprocessState === 1)
            return p.UPLOADING;
          if (this.xhr) {
            if (this.xhr.readyState < 4 || this.processingResponse)
              return p.UPLOADING;
            var t;
            this.uploader.opts.successStatuses.indexOf(this.xhr.status) > -1 ? t = p.SUCCESS : this.uploader.opts.permanentErrors.indexOf(this.xhr.status) > -1 || !f && this.retries >= this.uploader.opts.maxChunkRetries ? t = p.ERROR : (this.abort(), t = p.PENDING);
            var r = this.processedState;
            return r && r.err && (t = p.ERROR), t;
          } else
            return p.PENDING;
        },
        message: function() {
          return this.xhr ? this.xhr.responseText : "";
        },
        progress: function() {
          if (this.pendingRetry)
            return 0;
          var f = this.status();
          return f === p.SUCCESS || f === p.ERROR ? 1 : f === p.PENDING ? 0 : this.total > 0 ? this.loaded / this.total : 0;
        },
        sizeUploaded: function() {
          var f = this.endByte - this.startByte;
          return this.status() !== p.SUCCESS && (f = this.progress() * f), f;
        },
        prepareXhrRequest: function(f, t, r, l) {
          var n = a.evalOpts(this.uploader.opts.query, this.file, this, t);
          n = a.extend(this.getParams(), n), n = this.uploader.opts.processParams(n, this.file, this, t);
          var i = a.evalOpts(this.uploader.opts.target, this.file, this, t), d = null;
          if (f === "GET" || r === "octet") {
            var E = [];
            a.each(n, function(s, c) {
              E.push([encodeURIComponent(c), encodeURIComponent(s)].join("="));
            }), i = this.getTarget(i, E), d = l || null;
          } else
            d = new FormData(), a.each(n, function(s, c) {
              d.append(c, s);
            }), typeof l < "u" && d.append(this.uploader.opts.fileParameterName, l, this.file.name);
          return this.xhr.open(f, i, !0), this.xhr.withCredentials = this.uploader.opts.withCredentials, a.each(a.evalOpts(this.uploader.opts.headers, this.file, this, t), function(s, c) {
            this.xhr.setRequestHeader(c, s);
          }, this), d;
        }
      }), k.exports = x;
    }, { "./utils": 5 }], 2: [function(m, k, w) {
      var a = m("./utils").each, x = {
        _eventData: null,
        on: function(p, f) {
          this._eventData || (this._eventData = {}), this._eventData[p] || (this._eventData[p] = []);
          var t = !1;
          a(this._eventData[p], function(r) {
            if (r === f)
              return t = !0, !1;
          }), t || this._eventData[p].push(f);
        },
        off: function(p, f) {
          this._eventData || (this._eventData = {}), !(!this._eventData[p] || !this._eventData[p].length) && (f ? a(this._eventData[p], function(t, r) {
            if (t === f)
              return this._eventData[p].splice(r, 1), !1;
          }, this) : this._eventData[p] = []);
        },
        trigger: function(p) {
          if (this._eventData || (this._eventData = {}), !this._eventData[p])
            return !0;
          var f = this._eventData[p].slice.call(arguments, 1), t = !1;
          return a(this._eventData[p], function(r) {
            t = r.apply(this, f) === !1 || t;
          }, this), !t;
        }
      };
      k.exports = x;
    }, { "./utils": 5 }], 3: [function(m, k, w) {
      var a = m("./utils"), x = m("./event"), p = m("./file"), f = m("./chunk"), t = "0.6.0", r = typeof window > "u", l = r ? !1 : window.navigator.msPointerEnabled, n = function() {
        if (r)
          return !1;
        var s = "slice", c = a.isDefined(window.File) && a.isDefined(window.Blob) && a.isDefined(window.FileList), u = null;
        return c && (u = window.Blob.prototype, a.each(["slice", "webkitSlice", "mozSlice"], function(y) {
          if (u[y])
            return s = y, !1;
        }), c = !!u[s]), c && (d.sliceName = s), u = null, c;
      }(), i = function() {
        if (r)
          return !1;
        var s = window.document.createElement("input");
        s.type = "file";
        var c = "webkitdirectory" in s || "directory" in s;
        return s = null, c;
      }();
      function d(s) {
        this.support = n, this.support && (this.supportDirectory = i, a.defineNonEnumerable(this, "filePaths", {}), this.opts = a.extend({}, d.defaults, s || {}), this.preventEvent = a.bind(this._preventEvent, this), p.call(this, this));
      }
      var E = function(s, c, u, y, b) {
        b.readFinished(s.file[d.sliceName](u, y, c));
      };
      d.version = t, d.defaults = {
        chunkSize: 1024 * 1024,
        forceChunkSize: !1,
        simultaneousUploads: 3,
        singleFile: !1,
        fileParameterName: "file",
        progressCallbacksInterval: 500,
        speedSmoothingFactor: 0.1,
        query: {},
        headers: {},
        withCredentials: !1,
        preprocess: null,
        method: "multipart",
        testMethod: "GET",
        uploadMethod: "POST",
        prioritizeFirstAndLastChunk: !1,
        allowDuplicateUploads: !1,
        target: "/",
        testChunks: !0,
        generateUniqueIdentifier: null,
        maxChunkRetries: 0,
        chunkRetryInterval: null,
        permanentErrors: [404, 415, 500, 501],
        successStatuses: [200, 201, 202],
        onDropStopPropagation: !1,
        initFileFn: null,
        readFileFn: E,
        checkChunkUploadedByResponse: null,
        initialPaused: !1,
        processResponse: function(s, c) {
          c(null, s);
        },
        processParams: function(s) {
          return s;
        }
      }, d.utils = a, d.event = x, d.File = p, d.Chunk = f, d.prototype = a.extend({}, p.prototype), a.extend(d.prototype, x), a.extend(d.prototype, {
        constructor: d,
        _trigger: function(s) {
          var c = a.toArray(arguments), u = !this.trigger.apply(this, arguments);
          return s !== "catchAll" && (c.unshift("catchAll"), u = !this.trigger.apply(this, c) || u), !u;
        },
        _triggerAsync: function() {
          var s = arguments;
          a.nextTick(function() {
            this._trigger.apply(this, s);
          }, this);
        },
        addFiles: function(s, c) {
          var u = [], y = this.fileList.length;
          a.each(s, function(g) {
            if ((!l || l && g.size > 0) && !(g.size % 4096 === 0 && (g.name === "." || g.fileName === "."))) {
              var O = this.generateUniqueIdentifier(g);
              if (this.opts.allowDuplicateUploads || !this.getFromUniqueIdentifier(O)) {
                var j = new p(this, g, this);
                j.uniqueIdentifier = O, this._trigger("fileAdded", j, c) ? u.push(j) : p.prototype.removeFile.call(this, j);
              }
            }
          }, this);
          var b = this.fileList.slice(y);
          this._trigger("filesAdded", u, b, c) ? (a.each(u, function(g) {
            this.opts.singleFile && this.files.length > 0 && this.removeFile(this.files[0]), this.files.push(g);
          }, this), this._trigger("filesSubmitted", u, b, c)) : a.each(b, function(g) {
            p.prototype.removeFile.call(this, g);
          }, this);
        },
        addFile: function(s, c) {
          this.addFiles([s], c);
        },
        cancel: function() {
          for (var s = this.fileList.length - 1; s >= 0; s--)
            this.fileList[s].cancel();
        },
        removeFile: function(s) {
          p.prototype.removeFile.call(this, s), this._trigger("fileRemoved", s);
        },
        generateUniqueIdentifier: function(s) {
          var c = this.opts.generateUniqueIdentifier;
          if (a.isFunction(c))
            return c(s);
          var u = s.relativePath || s.webkitRelativePath || s.fileName || s.name;
          return s.size + "-" + u.replace(/[^0-9a-zA-Z_-]/img, "");
        },
        getFromUniqueIdentifier: function(s) {
          var c = !1;
          return a.each(this.files, function(u) {
            if (u.uniqueIdentifier === s)
              return c = u, !1;
          }), c;
        },
        uploadNextChunk: function(s) {
          var c = !1, u = f.STATUS.PENDING, y = this.uploader.opts.checkChunkUploadedByResponse;
          if (this.opts.prioritizeFirstAndLastChunk && (a.each(this.files, function(g) {
            if (!g.paused && !(y && !g._firstResponse && g.isUploading())) {
              if (g.chunks.length && g.chunks[0].status() === u)
                return g.chunks[0].send(), c = !0, !1;
              if (g.chunks.length > 1 && g.chunks[g.chunks.length - 1].status() === u)
                return g.chunks[g.chunks.length - 1].send(), c = !0, !1;
            }
          }), c))
            return c;
          if (a.each(this.files, function(g) {
            if (!g.paused) {
              if (y && !g._firstResponse && g.isUploading())
                return;
              a.each(g.chunks, function(O) {
                if (O.status() === u)
                  return O.send(), c = !0, !1;
              });
            }
            if (c)
              return !1;
          }), c)
            return !0;
          var b = !1;
          return a.each(this.files, function(g) {
            if (!g.isComplete())
              return b = !0, !1;
          }), !b && !s && this.files.length && this._triggerAsync("complete"), b;
        },
        upload: function(s) {
          var c = this._shouldUploadNext();
          if (c !== !1) {
            !s && this._trigger("uploadStart");
            for (var u = !1, y = 1; y <= this.opts.simultaneousUploads - c && (u = this.uploadNextChunk(!s) || u, !(!u && s)); y++)
              ;
            !u && !s && this._triggerAsync("complete");
          }
        },
        _shouldUploadNext: function() {
          var s = 0, c = !0, u = this.opts.simultaneousUploads, y = f.STATUS.UPLOADING;
          return a.each(this.files, function(b) {
            return a.each(b.chunks, function(g) {
              if (g.status() === y && (s++, s >= u))
                return c = !1, !1;
            }), c;
          }), c && s;
        },
        assignBrowse: function(s, c, u, y) {
          typeof s.length > "u" && (s = [s]), a.each(s, function(b) {
            var g;
            b.tagName === "INPUT" && b.type === "file" ? g = b : (g = document.createElement("input"), g.setAttribute("type", "file"), a.extend(g.style, {
              visibility: "hidden",
              position: "absolute",
              width: "1px",
              height: "1px"
            }), b.appendChild(g), b.addEventListener("click", function(j) {
              b.tagName.toLowerCase() !== "label" && g.click();
            }, !1)), !this.opts.singleFile && !u && g.setAttribute("multiple", "multiple"), c && g.setAttribute("webkitdirectory", "webkitdirectory"), y && a.each(y, function(j, Y) {
              g.setAttribute(Y, j);
            });
            var O = this;
            g.addEventListener("change", function(j) {
              O._trigger(j.type, j), j.target.value && (O.addFiles(j.target.files, j), j.target.value = "");
            }, !1);
          }, this);
        },
        onDrop: function(s) {
          this._trigger(s.type, s), this.opts.onDropStopPropagation && s.stopPropagation(), s.preventDefault(), this._parseDataTransfer(s.dataTransfer, s);
        },
        _parseDataTransfer: function(s, c) {
          s.items && s.items[0] && s.items[0].webkitGetAsEntry ? this.webkitReadDataTransfer(s, c) : this.addFiles(s.files, c);
        },
        webkitReadDataTransfer: function(s, c) {
          var u = this, y = s.items.length, b = [];
          a.each(s.items, function(I) {
            var z = I.webkitGetAsEntry();
            if (!z) {
              Y();
              return;
            }
            z.isFile ? O(I.getAsFile(), z.fullPath) : g(z.createReader());
          });
          function g(I) {
            I.readEntries(function(z) {
              z.length ? (y += z.length, a.each(z, function(W) {
                if (W.isFile) {
                  var K = W.fullPath;
                  W.file(function(M) {
                    O(M, K);
                  }, j);
                } else
                  W.isDirectory && g(W.createReader());
              }), g(I)) : Y();
            }, j);
          }
          function O(I, z) {
            I.relativePath = z.substring(1), b.push(I), Y();
          }
          function j(I) {
            throw I;
          }
          function Y() {
            --y === 0 && u.addFiles(b, c);
          }
        },
        _assignHelper: function(s, c, u) {
          typeof s.length > "u" && (s = [s]);
          var y = u ? "removeEventListener" : "addEventListener";
          a.each(s, function(b) {
            a.each(c, function(g, O) {
              b[y](O, g, !1);
            }, this);
          }, this);
        },
        _preventEvent: function(s) {
          a.preventEvent(s), this._trigger(s.type, s);
        },
        assignDrop: function(s) {
          this._onDrop = a.bind(this.onDrop, this), this._assignHelper(s, {
            dragover: this.preventEvent,
            dragenter: this.preventEvent,
            dragleave: this.preventEvent,
            drop: this._onDrop
          });
        },
        unAssignDrop: function(s) {
          this._assignHelper(s, {
            dragover: this.preventEvent,
            dragenter: this.preventEvent,
            dragleave: this.preventEvent,
            drop: this._onDrop
          }, !0), this._onDrop = null;
        }
      }), k.exports = d;
    }, { "./chunk": 1, "./event": 2, "./file": 4, "./utils": 5 }], 4: [function(m, k, w) {
      var a = m("./utils"), x = m("./chunk");
      function p(t, r, l) {
        a.defineNonEnumerable(this, "uploader", t), this.isRoot = this.isFolder = t === this, a.defineNonEnumerable(this, "parent", l || null), a.defineNonEnumerable(this, "files", []), a.defineNonEnumerable(this, "fileList", []), a.defineNonEnumerable(this, "chunks", []), a.defineNonEnumerable(this, "_errorFiles", []), a.defineNonEnumerable(this, "file", null), this.id = a.uid(), this.isRoot || !r ? this.file = null : a.isString(r) ? (this.isFolder = !0, this.file = null, this.path = r, this.parent.path && (r = r.substr(this.parent.path.length)), this.name = r.charAt(r.length - 1) === "/" ? r.substr(0, r.length - 1) : r) : (this.file = r, this.fileType = this.file.type, this.name = r.fileName || r.name, this.size = r.size, this.relativePath = r.relativePath || r.webkitRelativePath || this.name, this._parseFile()), this.paused = t.opts.initialPaused, this.error = !1, this.allError = !1, this.aborted = !1, this.completed = !1, this.averageSpeed = 0, this.currentSpeed = 0, this._lastProgressCallback = Date.now(), this._prevUploadedSize = 0, this._prevProgress = 0, this.bootstrap();
      }
      a.extend(p.prototype, {
        _parseFile: function() {
          var t = f(this.relativePath);
          if (t.length) {
            var r = this.uploader.filePaths;
            a.each(t, function(l, n) {
              var i = r[l];
              i || (i = new p(this.uploader, l, this.parent), r[l] = i, this._updateParentFileList(i)), this.parent = i, i.files.push(this), t[n + 1] || i.fileList.push(this);
            }, this);
          } else
            this._updateParentFileList();
        },
        _updateParentFileList: function(t) {
          t || (t = this);
          var r = this.parent;
          r && r.fileList.push(t);
        },
        _eachAccess: function(t, r) {
          if (this.isFolder) {
            a.each(this.files, function(l, n) {
              return t.call(this, l, n);
            }, this);
            return;
          }
          r.call(this, this);
        },
        bootstrap: function() {
          if (!this.isFolder) {
            var t = this.uploader.opts;
            a.isFunction(t.initFileFn) && t.initFileFn.call(this, this), this.abort(!0), this._resetError(), this._prevProgress = 0;
            for (var r = t.forceChunkSize ? Math.ceil : Math.floor, l = Math.max(r(this.size / t.chunkSize), 1), n = 0; n < l; n++)
              this.chunks.push(new x(this.uploader, this, n));
          }
        },
        _measureSpeed: function() {
          var t = this.uploader.opts.speedSmoothingFactor, r = Date.now() - this._lastProgressCallback;
          if (r) {
            var l = this.sizeUploaded();
            this.currentSpeed = Math.max((l - this._prevUploadedSize) / r * 1e3, 0), this.averageSpeed = t * this.currentSpeed + (1 - t) * this.averageSpeed, this._prevUploadedSize = l, this.parent && this.parent._checkProgress() && this.parent._measureSpeed();
          }
        },
        _checkProgress: function(t) {
          return Date.now() - this._lastProgressCallback >= this.uploader.opts.progressCallbacksInterval;
        },
        _chunkEvent: function(t, r, l) {
          var n = this.uploader, i = x.STATUS, d = this, E = this.getRoot(), s = function() {
            d._measureSpeed(), n._trigger("fileProgress", E, d, t), d._lastProgressCallback = Date.now();
          };
          switch (r) {
            case i.PROGRESS:
              this._checkProgress() && s();
              break;
            case i.ERROR:
              this._error(), this.abort(!0), n._trigger("fileError", E, this, l, t);
              break;
            case i.SUCCESS:
              if (this._updateUploadedChunks(l, t), this.error)
                return;
              clearTimeout(this._progeressId), this._progeressId = 0;
              var c = Date.now() - this._lastProgressCallback;
              c < n.opts.progressCallbacksInterval && (this._progeressId = setTimeout(s, n.opts.progressCallbacksInterval - c)), this.isComplete() ? (clearTimeout(this._progeressId), s(), this.currentSpeed = 0, this.averageSpeed = 0, n._trigger("fileSuccess", E, this, l, t), E.isComplete() && n._trigger("fileComplete", E, this)) : this._progeressId || s();
              break;
            case i.RETRY:
              n._trigger("fileRetry", E, this, t);
              break;
          }
        },
        _updateUploadedChunks: function(t, r) {
          var l = this.uploader.opts.checkChunkUploadedByResponse;
          if (l) {
            var n = r.xhr;
            a.each(this.chunks, function(i) {
              if (!i.tested) {
                var d = l.call(this, i, t);
                i === r && !d && (i.xhr = null), d && (i.xhr = n), i.tested = !0;
              }
            }, this), this._firstResponse ? this.uploader.uploadNextChunk() : (this._firstResponse = !0, this.uploader.upload(!0));
          } else
            this.uploader.uploadNextChunk();
        },
        _error: function() {
          this.error = this.allError = !0;
          for (var t = this.parent; t && t !== this.uploader; )
            t._errorFiles.push(this), t.error = !0, t._errorFiles.length === t.files.length && (t.allError = !0), t = t.parent;
        },
        _resetError: function() {
          this.error = this.allError = !1;
          for (var t = this.parent, r = -1; t && t !== this.uploader; )
            r = t._errorFiles.indexOf(this), t._errorFiles.splice(r, 1), t.allError = !1, t._errorFiles.length || (t.error = !1), t = t.parent;
        },
        isComplete: function() {
          if (!this.completed) {
            var t = !1;
            this._eachAccess(function(r) {
              if (!r.isComplete())
                return t = !0, !1;
            }, function() {
              if (this.error)
                t = !0;
              else {
                var r = x.STATUS;
                a.each(this.chunks, function(l) {
                  var n = l.status();
                  if (n === r.ERROR || n === r.PENDING || n === r.UPLOADING || n === r.READING || l.preprocessState === 1 || l.readState === 1)
                    return t = !0, !1;
                });
              }
            }), this.completed = !t;
          }
          return this.completed;
        },
        isUploading: function() {
          var t = !1;
          return this._eachAccess(function(r) {
            if (r.isUploading())
              return t = !0, !1;
          }, function() {
            var r = x.STATUS.UPLOADING;
            a.each(this.chunks, function(l) {
              if (l.status() === r)
                return t = !0, !1;
            });
          }), t;
        },
        resume: function() {
          this._eachAccess(function(t) {
            t.resume();
          }, function() {
            this.paused = !1, this.aborted = !1, this.uploader.upload();
          }), this.paused = !1, this.aborted = !1;
        },
        pause: function() {
          this._eachAccess(function(t) {
            t.pause();
          }, function() {
            this.paused = !0, this.abort();
          }), this.paused = !0;
        },
        cancel: function() {
          this.uploader.removeFile(this);
        },
        retry: function(t) {
          var r = function(l) {
            l.error && l.bootstrap();
          };
          t ? t.bootstrap() : this._eachAccess(r, function() {
            this.bootstrap();
          }), this.uploader.upload();
        },
        abort: function(t) {
          if (!this.aborted) {
            this.currentSpeed = 0, this.averageSpeed = 0, this.aborted = !t;
            var r = this.chunks;
            t && (this.chunks = []);
            var l = x.STATUS.UPLOADING;
            a.each(r, function(n) {
              n.status() === l && (n.abort(), this.uploader.uploadNextChunk());
            }, this);
          }
        },
        progress: function() {
          var t = 0, r = 0, l = 0;
          return this._eachAccess(function(n, i) {
            t += n.progress() * n.size, r += n.size, i === this.files.length - 1 && (l = r > 0 ? t / r : this.isComplete() ? 1 : 0);
          }, function() {
            if (this.error) {
              l = 1;
              return;
            }
            if (this.chunks.length === 1) {
              this._prevProgress = Math.max(this._prevProgress, this.chunks[0].progress()), l = this._prevProgress;
              return;
            }
            var n = 0;
            a.each(this.chunks, function(d) {
              n += d.progress() * (d.endByte - d.startByte);
            });
            var i = n / this.size;
            this._prevProgress = Math.max(this._prevProgress, i > 0.9999 ? 1 : i), l = this._prevProgress;
          }), l;
        },
        getSize: function() {
          var t = 0;
          return this._eachAccess(function(r) {
            t += r.size;
          }, function() {
            t += this.size;
          }), t;
        },
        getFormatSize: function() {
          var t = this.getSize();
          return a.formatSize(t);
        },
        getRoot: function() {
          if (this.isRoot)
            return this;
          for (var t = this.parent; t; ) {
            if (t.parent === this.uploader)
              return t;
            t = t.parent;
          }
          return this;
        },
        sizeUploaded: function() {
          var t = 0;
          return this._eachAccess(function(r) {
            t += r.sizeUploaded();
          }, function() {
            a.each(this.chunks, function(r) {
              t += r.sizeUploaded();
            });
          }), t;
        },
        timeRemaining: function() {
          var t = 0, r = 0, l = 0;
          return this._eachAccess(function(i, d) {
            !i.paused && !i.error && (r += i.size - i.sizeUploaded(), l += i.averageSpeed), d === this.files.length - 1 && (t = n(r, l));
          }, function() {
            if (this.paused || this.error) {
              t = 0;
              return;
            }
            var i = this.size - this.sizeUploaded();
            t = n(i, this.averageSpeed);
          }), t;
          function n(i, d) {
            return i && !d ? Number.POSITIVE_INFINITY : !i && !d ? 0 : Math.floor(i / d);
          }
        },
        removeFile: function(t) {
          if (t.isFolder)
            for (; t.files.length; ) {
              var r = t.files[t.files.length - 1];
              this._removeFile(r);
            }
          this._removeFile(t);
        },
        _delFilePath: function(t) {
          t.path && this.filePaths && delete this.filePaths[t.path], a.each(t.fileList, function(r) {
            this._delFilePath(r);
          }, this);
        },
        _removeFile: function(t) {
          if (!t.isFolder) {
            a.each(this.files, function(n, i) {
              if (n === t)
                return this.files.splice(i, 1), !1;
            }, this), t.abort();
            for (var r = t.parent, l; r && r !== this; )
              l = r.parent, r._removeFile(t), r = l;
          }
          t.parent === this && a.each(this.fileList, function(n, i) {
            if (n === t)
              return this.fileList.splice(i, 1), !1;
          }, this), !this.isRoot && this.isFolder && !this.files.length && (this.parent._removeFile(this), this.uploader._delFilePath(this)), t.parent = null;
        },
        getType: function() {
          return this.isFolder ? "folder" : this.file.type && this.file.type.split("/")[1];
        },
        getExtension: function() {
          return this.isFolder ? "" : this.name.substr((~-this.name.lastIndexOf(".") >>> 0) + 2).toLowerCase();
        }
      }), k.exports = p;
      function f(t) {
        var r = [], l = t.split("/"), n = l.length, i = 1;
        if (l.splice(n - 1, 1), n--, l.length)
          for (; i <= n; )
            r.push(l.slice(0, i++).join("/") + "/");
        return r;
      }
    }, { "./chunk": 1, "./utils": 5 }], 5: [function(m, k, w) {
      var a = Object.prototype, x = Array.prototype, p = a.toString, f = function(i) {
        return p.call(i) === "[object Function]";
      }, t = Array.isArray || function(i) {
        return p.call(i) === "[object Array]";
      }, r = function(i) {
        return p.call(i) === "[object Object]" && Object.getPrototypeOf(i) === a;
      }, l = 0, n = {
        uid: function() {
          return ++l;
        },
        noop: function() {
        },
        bind: function(i, d) {
          return function() {
            return i.apply(d, arguments);
          };
        },
        preventEvent: function(i) {
          i.preventDefault();
        },
        stop: function(i) {
          i.preventDefault(), i.stopPropagation();
        },
        nextTick: function(i, d) {
          setTimeout(n.bind(i, d), 0);
        },
        toArray: function(i, d, E) {
          return d === void 0 && (d = 0), E === void 0 && (E = i.length), x.slice.call(i, d, E);
        },
        isPlainObject: r,
        isFunction: f,
        isArray: t,
        isObject: function(i) {
          return Object(i) === i;
        },
        isString: function(i) {
          return typeof i == "string";
        },
        isUndefined: function(i) {
          return typeof i > "u";
        },
        isDefined: function(i) {
          return typeof i < "u";
        },
        each: function(i, d, E) {
          if (n.isDefined(i.length))
            for (var s = 0, c = i.length; s < c && d.call(E, i[s], s, i) !== !1; s++)
              ;
          else
            for (var u in i)
              if (d.call(E, i[u], u, i) === !1)
                break;
        },
        evalOpts: function(i, d) {
          return n.isFunction(i) && (d = n.toArray(arguments), i = i.apply(null, d.slice(1))), i;
        },
        extend: function() {
          var i, d, E, s, c, u, y = arguments[0] || {}, b = 1, g = arguments.length, O = !1;
          for (typeof y == "boolean" && (O = y, y = arguments[1] || {}, b++), typeof y != "object" && !f(y) && (y = {}), b === g && (y = this, b--); b < g; b++)
            if ((i = arguments[b]) != null)
              for (d in i)
                E = y[d], s = i[d], y !== s && (O && s && (r(s) || (c = t(s))) ? (c ? (c = !1, u = E && t(E) ? E : []) : u = E && r(E) ? E : {}, y[d] = n.extend(O, u, s)) : s !== void 0 && (y[d] = s));
          return y;
        },
        formatSize: function(i) {
          return i < 1024 ? i.toFixed(0) + " bytes" : i < 1024 * 1024 ? (i / 1024).toFixed(0) + " KB" : i < 1024 * 1024 * 1024 ? (i / 1024 / 1024).toFixed(1) + " MB" : (i / 1024 / 1024 / 1024).toFixed(1) + " GB";
        },
        defineNonEnumerable: function(i, d, E) {
          Object.defineProperty(i, d, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: E
          });
        }
      };
      k.exports = n;
    }, {}] }, {}, [3])(3);
  });
})(Et);
const Ve = ke, Ce = mt({
  uploader: null
});
const Ge = ({ children: v, directory: D = !1, single: m = !1, attributes: k = "" }) => {
  const w = ie(null), { uploader: a } = We(Ce);
  return ue(() => {
    a == null || a.assignBrowse(w.current, D, m, k);
  }, [a]), R.jsx("div", { children: R.jsx("label", { className: "uploader-btn", ref: w, children: v }) });
};
const Rt = ({ children: v }) => {
  const D = ie(null), { uploader: m } = We(Ce), [k, w] = q(""), a = () => {
    w("uploader-dragover");
  }, x = () => {
    w("");
  }, p = () => {
    w("uploader-droped");
  };
  return ue(() => (m == null || m.assignDrop(D.current), m == null || m.on("dragenter", a), m == null || m.on("dragleave", x), m == null || m.on("drop", p), () => {
    m == null || m.off("dragenter", a), m == null || m.off("dragleave", x), m == null || m.off("drop", p), m == null || m.unAssignDrop(D.current);
  }), [m]), R.jsx("div", { className: `uploader-drop ${k}`, ref: D, children: v });
}, xt = {
  image: ["gif", "jpg", "jpeg", "png", "bmp", "webp"],
  video: ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"],
  audio: ["mp3", "wav", "wma", "ogg", "aac", "flac"],
  document: [
    "doc",
    "txt",
    "docx",
    "pages",
    "epub",
    "pdf",
    "numbers",
    "csv",
    "xls",
    "xlsx",
    "keynote",
    "ppt",
    "pptx"
  ]
};
function St(v) {
  const D = Math.floor(v / 31536e3);
  if (D)
    return D + " year" + x(D);
  const m = Math.floor((v %= 31536e3) / 86400);
  if (m)
    return m + " day" + x(m);
  const k = Math.floor((v %= 86400) / 3600);
  if (k)
    return k + " hour" + x(k);
  const w = Math.floor((v %= 3600) / 60);
  if (w)
    return w + " minute" + x(w);
  const a = v % 60;
  return a + " second" + x(a);
  function x(p) {
    return p > 1 ? "s" : "";
  }
}
const qe = ["fileProgress", "fileSuccess", "fileComplete", "fileError"], kt = ({ file: v, list: D = !1 }) => {
  const [m, k] = q(!1), [w, a] = q(!1), [x, p] = q(!1), [f, t] = q(!1), [r, l] = q(0), [n, i] = q(0), [d, E] = q(null), [s, c] = q(""), u = ie(null), y = ie({}), b = re(() => x ? "success" : m ? "error" : f ? "uploading" : w ? "paused" : "waiting", [f, x, m, w]), g = re(() => {
    const A = v.isFolder, P = v.getExtension();
    let $ = A ? "folder" : "unknown";
    const J = v.uploader.opts.categoryMap || xt;
    return Object.keys(J).forEach((Q) => {
      J[Q].indexOf(P) > -1 && ($ = Q);
    }), $;
  }, [v.getExtension()]), O = re(() => {
    const A = Math.floor(r * 100), P = `translateX(${Math.floor(A - 100)}%)`;
    return {
      progress: `${A}%`,
      WebkitTransform: P,
      MozTransform: P,
      msTransform: P,
      transform: P
    };
  }, [r]), j = re(() => `${Ve.utils.formatSize(v.averageSpeed)} / s`, [v.averageSpeed]), Y = re(() => v.uploader.fileStatusText[b], [b]), I = re(() => {
    if (n === Number.POSITIVE_INFINITY || n === 0)
      return "";
    let A = St(n);
    const P = v.uploader.opts.parseTimeRemaining;
    return P && (A = P(n, A)), A;
  }, [n]), z = () => {
    v.pause(), X(), B();
  }, W = () => {
    v.retry(), X();
  }, K = () => {
    v.resume(), X();
  }, M = () => {
    v.cancel();
  }, B = () => {
    i(v.timeRemaining()), l(v.progress()), X();
  }, H = (A, P, $) => {
    A && Z($), B(), k(!1), p(!0), t(!1);
  }, le = ie({
    _fileProgress: B,
    _fileSuccess: H,
    _fileComplete: () => {
      H();
    },
    _fileError: (A, P, $) => {
      B(), Z($), k(!0), p(!1), t(!1);
    }
  }), Z = (A) => {
    let P = A;
    try {
      P = JSON.parse(P);
    } catch {
      E(P);
    }
  }, ce = (A, P) => {
    const $ = P[0], fe = P[1];
    if (v === (D ? $ : fe)) {
      if (D && A === "fileSuccess") {
        Z(P[2]);
        return;
      }
      le.current[`_${A}`]();
    }
  }, X = () => {
    k(v.error), a(v.paused), t(v.isUploading());
  };
  return ue(() => {
    b === "uploading" ? u.current = setTimeout(() => {
      c("uploader-file-progressing");
    }, 200) : (clearTimeout(u.current), c(""));
  }, [b]), ue(() => {
    k(v.error), a(v.paused), p(v.isComplete()), t(v.isUploading()), l(v.progress()), i(v.timeRemaining());
    const A = (P) => y.current[P] = (...$) => {
      ce(P, $);
    };
    return qe.forEach((P) => {
      v.uploader.on(P, A(P));
    }), () => {
      qe.forEach((P) => {
        v.uploader.off(P, y.current[P]);
      });
    };
  }, []), R.jsx(R.Fragment, { children: R.jsxs("div", { className: "uploader-file", status: b, children: [R.jsx("div", { className: `uploader-file-progress ${s}`, style: O }), R.jsxs("div", { className: "uploader-file-info", children: [R.jsxs("div", { className: "uploader-file-name", children: [R.jsx("i", { className: "uploader-file-icon", icon: g }), v.name] }), R.jsx("div", { className: "uploader-file-size", children: v.getFormatSize() }), R.jsx("div", { className: "uploader-file-meta" }), R.jsxs("div", { className: "uploader-file-status", children: [b !== "uploading" && R.jsx("span", { children: Y }), b === "uploading" && R.jsxs("span", { children: [R.jsxs("span", { children: [O.progress, " "] }), R.jsxs("em", { children: [j, " "] }), R.jsxs("i", { children: [I, " "] })] })] }), R.jsxs("div", { className: "uploader-file-actions", children: [R.jsx("span", { className: "uploader-file-pause", onClick: z }), R.jsx("span", { className: "uploader-file-resume", onClick: K }), R.jsx("span", { className: "uploader-file-retry", onClick: W }), R.jsx("span", { className: "uploader-file-remove", onClick: M })] })] })] }) });
};
const Ct = ({ fileList: v }) => R.jsx("div", { className: "uploader-list", children: R.jsx("ul", { children: v.map((D) => R.jsx(kt, { file: D, list: !0 }, D.id)) }) });
const Pt = ({ children: v }) => R.jsx("div", { className: "uploader-unsupport", children: v || R.jsx("p", { children: "你的浏览器等级过低暂不支持上传组件" }) });
function wt(v) {
  var s, c;
  const { options: D, fileStatusText: m = {
    success: "成功了",
    error: "出错了",
    uploading: "上传中",
    paused: "暂停中",
    waiting: "等待中"
  }, autoStart: k = !0, onFileComplete: w, onComplete: a, onChange: x = () => {
  }, onFilesSubmitted: p = () => {
  }, onFileProgress: f = () => {
  }, onFileSuccess: t = () => {
  }, onFileAdded: r = () => {
  }, onFilesAdded: l = () => {
  } } = v, n = ie(new Ve(D)), [i, d] = q([]), E = (...u) => {
    var b, g;
    switch (u[0]) {
      case "change":
        x(u[1]);
        break;
      case "filesSubmitted":
        d([...(b = n.current) == null ? void 0 : b.fileList]), n.current.upload(), p(u[1], u[2], u[3]);
        break;
      case "fileProgress":
        f(u[1], u[2], u[3]);
        break;
      case "fileSuccess":
        t(u[1], u[2], u[3], u[4]);
        break;
      case "fileComplete":
        w(u[1]);
        break;
      case "complete":
        a();
        break;
      case "fileAdded":
        r(u[1]);
        break;
      case "filesAdded":
        l(u[1], u[2]);
        break;
      case "fileRemoved":
        d([...(g = n.current) == null ? void 0 : g.fileList]);
    }
  };
  return ue(() => (n.current.fileStatusText = m, n.current.on("catchAll", E), window.uploader = n.current, () => {
    var u;
    (u = n.current) == null || u.off("catchAll", E);
  }), []), R.jsx("div", { className: "uploader-example uploader", children: R.jsxs(Ce.Provider, { value: {
    uploader: n.current
  }, children: [(s = n.current) != null && s.support ? R.jsx(Rt, { children: R.jsxs(R.Fragment, { children: [R.jsx("p", { className: "m-3", children: "把文件拖拽到此处进行上传" }), R.jsxs("div", { className: "flex", children: [R.jsx(Ge, { children: "选择文件" }), R.jsx(Ge, { directory: !0, children: "选择文件夹" })] })] }) }) : R.jsx(Pt, {}), ((c = n.current) == null ? void 0 : c.support) && R.jsx(Ct, { fileList: i })] }) });
}
export {
  wt as default
};
