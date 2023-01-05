import './style.css';
import We, { createContext as mt, useRef as Q, useContext as be, useEffect as le, useState as V, useMemo as se } from "react";
var _ = {}, yt = {
  get exports() {
    return _;
  },
  set exports(m) {
    _ = m;
  }
}, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function bt() {
  if (Be)
    return oe;
  Be = 1;
  var m = We, y = Symbol.for("react.element"), C = Symbol.for("react.fragment"), x = Object.prototype.hasOwnProperty, w = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(p, u, t) {
    var i, l = {}, a = null, r = null;
    t !== void 0 && (a = "" + t), u.key !== void 0 && (a = "" + u.key), u.ref !== void 0 && (r = u.ref);
    for (i in u)
      x.call(u, i) && !n.hasOwnProperty(i) && (l[i] = u[i]);
    if (p && p.defaultProps)
      for (i in u = p.defaultProps, u)
        l[i] === void 0 && (l[i] = u[i]);
    return { $$typeof: y, type: p, key: a, ref: r, props: l, _owner: w.current };
  }
  return oe.Fragment = C, oe.jsx = E, oe.jsxs = E, oe;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function _t() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    var m = We, y = Symbol.for("react.element"), C = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), p = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), t = Symbol.for("react.suspense"), i = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), r = Symbol.for("react.offscreen"), f = Symbol.iterator, R = "@@iterator";
    function s(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = f && e[f] || e[R];
      return typeof o == "function" ? o : null;
    }
    var c = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var o = arguments.length, h = new Array(o > 1 ? o - 1 : 0), b = 1; b < o; b++)
          h[b - 1] = arguments[b];
        v("error", e, h);
      }
    }
    function v(e, o, h) {
      {
        var b = c.ReactDebugCurrentFrame, F = b.getStackAddendum();
        F !== "" && (o += "%s", h = h.concat([F]));
        var D = h.map(function(P) {
          return String(P);
        });
        D.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, D);
      }
    }
    var S = !1, g = !1, O = !1, j = !1, G = !1, I;
    I = Symbol.for("react.module.reference");
    function L(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === x || e === n || G || e === w || e === t || e === i || j || e === r || S || g || O || typeof e == "object" && e !== null && (e.$$typeof === a || e.$$typeof === l || e.$$typeof === E || e.$$typeof === p || e.$$typeof === u || e.$$typeof === I || e.getModuleId !== void 0));
    }
    function q(e, o, h) {
      var b = e.displayName;
      if (b)
        return b;
      var F = o.displayName || o.name || "";
      return F !== "" ? h + "(" + F + ")" : h;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case x:
          return "Fragment";
        case C:
          return "Portal";
        case n:
          return "Profiler";
        case w:
          return "StrictMode";
        case t:
          return "Suspense";
        case i:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var o = e;
            return X(o) + ".Consumer";
          case E:
            var h = e;
            return X(h._context) + ".Provider";
          case u:
            return q(e, e.render, "ForwardRef");
          case l:
            var b = e.displayName || null;
            return b !== null ? b : M(e.type) || "Memo";
          case a: {
            var F = e, D = F._payload, P = F._init;
            try {
              return M(P(D));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, W = 0, ne, _e, Ee, fe, ee, he, J;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function T() {
      {
        if (W === 0) {
          ne = console.log, _e = console.info, Ee = console.warn, fe = console.error, ee = console.group, he = console.groupCollapsed, J = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: A,
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
        W++;
      }
    }
    function $() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: ne
            }),
            info: Y({}, e, {
              value: _e
            }),
            warn: Y({}, e, {
              value: Ee
            }),
            error: Y({}, e, {
              value: fe
            }),
            group: Y({}, e, {
              value: ee
            }),
            groupCollapsed: Y({}, e, {
              value: he
            }),
            groupEnd: Y({}, e, {
              value: J
            })
          });
        }
        W < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = c.ReactCurrentDispatcher, K;
    function Z(e, o, h) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (F) {
            var b = F.stack.trim().match(/\n( *(at )?)/);
            K = b && b[1] || "";
          }
        return `
` + K + e;
      }
    }
    var pe = !1, de;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      de = new He();
    }
    function Fe(e, o) {
      if (!e || pe)
        return "";
      {
        var h = de.get(e);
        if (h !== void 0)
          return h;
      }
      var b;
      pe = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var D;
      D = te.current, te.current = null, T();
      try {
        if (o) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (H) {
              b = H;
            }
            Reflect.construct(e, [], P);
          } else {
            try {
              P.call();
            } catch (H) {
              b = H;
            }
            e.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            b = H;
          }
          e();
        }
      } catch (H) {
        if (H && b && typeof H.stack == "string") {
          for (var k = H.stack.split(`
`), z = b.stack.split(`
`), N = k.length - 1, U = z.length - 1; N >= 1 && U >= 0 && k[N] !== z[U]; )
            U--;
          for (; N >= 1 && U >= 0; N--, U--)
            if (k[N] !== z[U]) {
              if (N !== 1 || U !== 1)
                do
                  if (N--, U--, U < 0 || k[N] !== z[U]) {
                    var B = `
` + k[N].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, B), B;
                  }
                while (N >= 1 && U >= 0);
              break;
            }
        }
      } finally {
        pe = !1, te.current = D, $(), Error.prepareStackTrace = F;
      }
      var ie = e ? e.displayName || e.name : "", $e = ie ? Z(ie) : "";
      return typeof e == "function" && de.set(e, $e), $e;
    }
    function Xe(e, o, h) {
      return Fe(e, !1);
    }
    function Je(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function ve(e, o, h) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, Je(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case t:
          return Z("Suspense");
        case i:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Xe(e.render);
          case l:
            return ve(e.type, o, h);
          case a: {
            var b = e, F = b._payload, D = b._init;
            try {
              return ve(D(F), o, h);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, we = {}, Te = c.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var o = e._owner, h = ve(e.type, e._source, o ? o.type : null);
        Te.setExtraStackFrame(h);
      } else
        Te.setExtraStackFrame(null);
    }
    function Ke(e, o, h, b, F) {
      {
        var D = Function.call.bind(ge);
        for (var P in e)
          if (D(e, P)) {
            var k = void 0;
            try {
              if (typeof e[P] != "function") {
                var z = Error((b || "React class") + ": " + h + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              k = e[P](o, P, b, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              k = N;
            }
            k && !(k instanceof Error) && (me(F), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", h, P, typeof k), me(null)), k instanceof Error && !(k.message in we) && (we[k.message] = !0, me(F), d("Failed %s type: %s", h, k.message), me(null));
          }
      }
    }
    var Ze = Array.isArray;
    function Re(e) {
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
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Oe(e) {
      if (et(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), De(e);
    }
    var ae = c.ReactCurrentOwner, tt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Ae, Se;
    Se = {};
    function rt(e) {
      if (ge.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function it(e) {
      if (ge.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function st(e, o) {
      if (typeof e.ref == "string" && ae.current && o && ae.current.stateNode !== o) {
        var h = M(ae.current.type);
        Se[h] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ae.current.type), e.ref), Se[h] = !0);
      }
    }
    function nt(e, o) {
      {
        var h = function() {
          je || (je = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
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
          Ae || (Ae = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        h.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var ot = function(e, o, h, b, F, D, P) {
      var k = {
        $$typeof: y,
        type: e,
        key: o,
        ref: h,
        props: P,
        _owner: D
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function ut(e, o, h, b, F) {
      {
        var D, P = {}, k = null, z = null;
        h !== void 0 && (Oe(h), k = "" + h), it(o) && (Oe(o.key), k = "" + o.key), rt(o) && (z = o.ref, st(o, F));
        for (D in o)
          ge.call(o, D) && !tt.hasOwnProperty(D) && (P[D] = o[D]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (D in N)
            P[D] === void 0 && (P[D] = N[D]);
        }
        if (k || z) {
          var U = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && nt(P, U), z && at(P, U);
        }
        return ot(e, k, z, F, b, ae.current, P);
      }
    }
    var xe = c.ReactCurrentOwner, Ne = c.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var o = e._owner, h = ve(e.type, e._source, o ? o.type : null);
        Ne.setExtraStackFrame(h);
      } else
        Ne.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Ue() {
      {
        if (xe.current) {
          var e = M(xe.current.type);
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
    var Ie = {};
    function ct(e) {
      {
        var o = Ue();
        if (!o) {
          var h = typeof e == "string" ? e : e.displayName || e.name;
          h && (o = `

Check the top-level render call using <` + h + ">.");
        }
        return o;
      }
    }
    function Le(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var h = ct(o);
        if (Ie[h])
          return;
        Ie[h] = !0;
        var b = "";
        e && e._owner && e._owner !== xe.current && (b = " It was passed a child from " + M(e._owner.type) + "."), re(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, b), re(null);
      }
    }
    function ze(e, o) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var h = 0; h < e.length; h++) {
            var b = e[h];
            Ce(b) && Le(b, o);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var F = s(e);
          if (typeof F == "function" && F !== e.entries)
            for (var D = F.call(e), P; !(P = D.next()).done; )
              Ce(P.value) && Le(P.value, o);
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
        else if (typeof o == "object" && (o.$$typeof === u || o.$$typeof === l))
          h = o.propTypes;
        else
          return;
        if (h) {
          var b = M(o);
          Ke(h, e.props, "prop", b, e);
        } else if (o.PropTypes !== void 0 && !ke) {
          ke = !0;
          var F = M(o);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(e) {
      {
        for (var o = Object.keys(e.props), h = 0; h < o.length; h++) {
          var b = o[h];
          if (b !== "children" && b !== "key") {
            re(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), re(null);
            break;
          }
        }
        e.ref !== null && (re(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    function Me(e, o, h, b, F, D) {
      {
        var P = L(e);
        if (!P) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = lt(F);
          z ? k += z : k += Ue();
          var N;
          e === null ? N = "null" : Re(e) ? N = "array" : e !== void 0 && e.$$typeof === y ? (N = "<" + (M(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, k);
        }
        var U = ut(e, o, h, F, D);
        if (U == null)
          return U;
        if (P) {
          var B = o.children;
          if (B !== void 0)
            if (b)
              if (Re(B)) {
                for (var ie = 0; ie < B.length; ie++)
                  ze(B[ie], e);
                Object.freeze && Object.freeze(B);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(B, e);
        }
        return e === x ? ht(U) : ft(U), U;
      }
    }
    function pt(e, o, h) {
      return Me(e, o, h, !0);
    }
    function dt(e, o, h) {
      return Me(e, o, h, !1);
    }
    var vt = dt, gt = pt;
    ue.Fragment = x, ue.jsx = vt, ue.jsxs = gt;
  }()), ue;
}
(function(m) {
  process.env.NODE_ENV === "production" ? m.exports = bt() : m.exports = _t();
})(yt);
function ye(m) {
  throw new Error('Could not dynamically require "' + m + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pe = {}, Et = {
  get exports() {
    return Pe;
  },
  set exports(m) {
    Pe = m;
  }
};
/*!
 * Uploader - Uploader library implements html5 file upload and provides multiple simultaneous, stable, fault tolerant and resumable uploads
 * @version v0.6.0
 * @author dolymood <dolymood@gmail.com>
 * @link https://github.com/simple-uploader/Uploader
 * @license MIT
 */
(function(m, y) {
  (function(C) {
    m.exports = C();
  })(function() {
    return function C(x, w, n) {
      function E(t, i) {
        if (!w[t]) {
          if (!x[t]) {
            var l = typeof ye == "function" && ye;
            if (!i && l)
              return l(t, !0);
            if (p)
              return p(t, !0);
            throw new Error("Cannot find module '" + t + "'");
          }
          var a = w[t] = { exports: {} };
          x[t][0].call(a.exports, function(r) {
            var f = x[t][1][r];
            return E(f || r);
          }, a, a.exports, C, x, w, n);
        }
        return w[t].exports;
      }
      for (var p = typeof ye == "function" && ye, u = 0; u < n.length; u++)
        E(n[u]);
      return E;
    }({ 1: [function(C, x, w) {
      var n = C("./utils");
      function E(u, t, i) {
        n.defineNonEnumerable(this, "uploader", u), n.defineNonEnumerable(this, "file", t), n.defineNonEnumerable(this, "bytes", null), this.offset = i, this.tested = !1, this.retries = 0, this.pendingRetry = !1, this.preprocessState = 0, this.readState = 0, this.loaded = 0, this.total = 0, this.chunkSize = n.evalOpts(u.opts.chunkSize, t, this), this.startByte = this.offset * this.chunkSize, this.endByte = this.computeEndByte(), this.xhr = null;
      }
      var p = E.STATUS = {
        PENDING: "pending",
        UPLOADING: "uploading",
        READING: "reading",
        SUCCESS: "success",
        ERROR: "error",
        COMPLETE: "complete",
        PROGRESS: "progress",
        RETRY: "retry"
      };
      n.extend(E.prototype, {
        _event: function(u, t) {
          t = n.toArray(arguments), t.unshift(this), this.file._chunkEvent.apply(this.file, t);
        },
        computeEndByte: function() {
          var u = Math.min(this.file.size, (this.offset + 1) * this.chunkSize);
          return this.file.size - u < this.chunkSize && !this.uploader.opts.forceChunkSize && (u = this.file.size), u;
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
        getTarget: function(u, t) {
          return t.length ? (u.indexOf("?") < 0 ? u += "?" : u += "&", u + t.join("&")) : u;
        },
        test: function() {
          this.xhr = new XMLHttpRequest(), this.xhr.addEventListener("load", l, !1), this.xhr.addEventListener("error", l, !1);
          var u = n.evalOpts(this.uploader.opts.testMethod, this.file, this), t = this.prepareXhrRequest(u, !0);
          this.xhr.send(t);
          var i = this;
          function l(a) {
            var r = i.status(!0);
            r === p.ERROR ? (i._event(r, i.message()), i.uploader.uploadNextChunk()) : r === p.SUCCESS ? (i._event(r, i.message()), i.tested = !0) : i.file.paused || (i.tested = !0, i.send());
          }
        },
        preprocessFinished: function() {
          this.endByte = this.computeEndByte(), this.preprocessState = 2, this.send();
        },
        readFinished: function(u) {
          this.readState = 2, this.bytes = u, this.send();
        },
        send: function() {
          var u = this.uploader.opts.preprocess, t = this.uploader.opts.readFileFn;
          if (n.isFunction(u))
            switch (this.preprocessState) {
              case 0:
                this.preprocessState = 1, u(this);
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
          this.loaded = 0, this.total = 0, this.pendingRetry = !1, this.xhr = new XMLHttpRequest(), this.xhr.upload.addEventListener("progress", r, !1), this.xhr.addEventListener("load", f, !1), this.xhr.addEventListener("error", f, !1);
          var i = n.evalOpts(this.uploader.opts.uploadMethod, this.file, this), l = this.prepareXhrRequest(i, !1, this.uploader.opts.method, this.bytes);
          this.xhr.send(l);
          var a = this;
          function r(R) {
            R.lengthComputable && (a.loaded = R.loaded, a.total = R.total), a._event(p.PROGRESS, R);
          }
          function f(R) {
            var s = a.message();
            a.processingResponse = !0, a.uploader.opts.processResponse(s, function(c, d) {
              if (a.processingResponse = !1, !!a.xhr) {
                a.processedState = {
                  err: c,
                  res: d
                };
                var v = a.status();
                if (v === p.SUCCESS || v === p.ERROR)
                  a._event(v, d), v === p.ERROR && a.uploader.uploadNextChunk();
                else {
                  a._event(p.RETRY, d), a.pendingRetry = !0, a.abort(), a.retries++;
                  var S = a.uploader.opts.chunkRetryInterval;
                  S !== null ? setTimeout(function() {
                    a.send();
                  }, S) : a.send();
                }
              }
            }, a.file, a);
          }
        },
        abort: function() {
          var u = this.xhr;
          this.xhr = null, this.processingResponse = !1, this.processedState = null, u && u.abort();
        },
        status: function(u) {
          if (this.readState === 1)
            return p.READING;
          if (this.pendingRetry || this.preprocessState === 1)
            return p.UPLOADING;
          if (this.xhr) {
            if (this.xhr.readyState < 4 || this.processingResponse)
              return p.UPLOADING;
            var t;
            this.uploader.opts.successStatuses.indexOf(this.xhr.status) > -1 ? t = p.SUCCESS : this.uploader.opts.permanentErrors.indexOf(this.xhr.status) > -1 || !u && this.retries >= this.uploader.opts.maxChunkRetries ? t = p.ERROR : (this.abort(), t = p.PENDING);
            var i = this.processedState;
            return i && i.err && (t = p.ERROR), t;
          } else
            return p.PENDING;
        },
        message: function() {
          return this.xhr ? this.xhr.responseText : "";
        },
        progress: function() {
          if (this.pendingRetry)
            return 0;
          var u = this.status();
          return u === p.SUCCESS || u === p.ERROR ? 1 : u === p.PENDING ? 0 : this.total > 0 ? this.loaded / this.total : 0;
        },
        sizeUploaded: function() {
          var u = this.endByte - this.startByte;
          return this.status() !== p.SUCCESS && (u = this.progress() * u), u;
        },
        prepareXhrRequest: function(u, t, i, l) {
          var a = n.evalOpts(this.uploader.opts.query, this.file, this, t);
          a = n.extend(this.getParams(), a), a = this.uploader.opts.processParams(a, this.file, this, t);
          var r = n.evalOpts(this.uploader.opts.target, this.file, this, t), f = null;
          if (u === "GET" || i === "octet") {
            var R = [];
            n.each(a, function(s, c) {
              R.push([encodeURIComponent(c), encodeURIComponent(s)].join("="));
            }), r = this.getTarget(r, R), f = l || null;
          } else
            f = new FormData(), n.each(a, function(s, c) {
              f.append(c, s);
            }), typeof l < "u" && f.append(this.uploader.opts.fileParameterName, l, this.file.name);
          return this.xhr.open(u, r, !0), this.xhr.withCredentials = this.uploader.opts.withCredentials, n.each(n.evalOpts(this.uploader.opts.headers, this.file, this, t), function(s, c) {
            this.xhr.setRequestHeader(c, s);
          }, this), f;
        }
      }), x.exports = E;
    }, { "./utils": 5 }], 2: [function(C, x, w) {
      var n = C("./utils").each, E = {
        _eventData: null,
        on: function(p, u) {
          this._eventData || (this._eventData = {}), this._eventData[p] || (this._eventData[p] = []);
          var t = !1;
          n(this._eventData[p], function(i) {
            if (i === u)
              return t = !0, !1;
          }), t || this._eventData[p].push(u);
        },
        off: function(p, u) {
          this._eventData || (this._eventData = {}), !(!this._eventData[p] || !this._eventData[p].length) && (u ? n(this._eventData[p], function(t, i) {
            if (t === u)
              return this._eventData[p].splice(i, 1), !1;
          }, this) : this._eventData[p] = []);
        },
        trigger: function(p) {
          if (this._eventData || (this._eventData = {}), !this._eventData[p])
            return !0;
          var u = this._eventData[p].slice.call(arguments, 1), t = !1;
          return n(this._eventData[p], function(i) {
            t = i.apply(this, u) === !1 || t;
          }, this), !t;
        }
      };
      x.exports = E;
    }, { "./utils": 5 }], 3: [function(C, x, w) {
      var n = C("./utils"), E = C("./event"), p = C("./file"), u = C("./chunk"), t = "0.6.0", i = typeof window > "u", l = i ? !1 : window.navigator.msPointerEnabled, a = function() {
        if (i)
          return !1;
        var s = "slice", c = n.isDefined(window.File) && n.isDefined(window.Blob) && n.isDefined(window.FileList), d = null;
        return c && (d = window.Blob.prototype, n.each(["slice", "webkitSlice", "mozSlice"], function(v) {
          if (d[v])
            return s = v, !1;
        }), c = !!d[s]), c && (f.sliceName = s), d = null, c;
      }(), r = function() {
        if (i)
          return !1;
        var s = window.document.createElement("input");
        s.type = "file";
        var c = "webkitdirectory" in s || "directory" in s;
        return s = null, c;
      }();
      function f(s) {
        this.support = a, this.support && (this.supportDirectory = r, n.defineNonEnumerable(this, "filePaths", {}), this.opts = n.extend({}, f.defaults, s || {}), this.preventEvent = n.bind(this._preventEvent, this), p.call(this, this));
      }
      var R = function(s, c, d, v, S) {
        S.readFinished(s.file[f.sliceName](d, v, c));
      };
      f.version = t, f.defaults = {
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
        readFileFn: R,
        checkChunkUploadedByResponse: null,
        initialPaused: !1,
        processResponse: function(s, c) {
          c(null, s);
        },
        processParams: function(s) {
          return s;
        }
      }, f.utils = n, f.event = E, f.File = p, f.Chunk = u, f.prototype = n.extend({}, p.prototype), n.extend(f.prototype, E), n.extend(f.prototype, {
        constructor: f,
        _trigger: function(s) {
          var c = n.toArray(arguments), d = !this.trigger.apply(this, arguments);
          return s !== "catchAll" && (c.unshift("catchAll"), d = !this.trigger.apply(this, c) || d), !d;
        },
        _triggerAsync: function() {
          var s = arguments;
          n.nextTick(function() {
            this._trigger.apply(this, s);
          }, this);
        },
        addFiles: function(s, c) {
          var d = [], v = this.fileList.length;
          n.each(s, function(g) {
            if ((!l || l && g.size > 0) && !(g.size % 4096 === 0 && (g.name === "." || g.fileName === "."))) {
              var O = this.generateUniqueIdentifier(g);
              if (this.opts.allowDuplicateUploads || !this.getFromUniqueIdentifier(O)) {
                var j = new p(this, g, this);
                j.uniqueIdentifier = O, this._trigger("fileAdded", j, c) ? d.push(j) : p.prototype.removeFile.call(this, j);
              }
            }
          }, this);
          var S = this.fileList.slice(v);
          this._trigger("filesAdded", d, S, c) ? (n.each(d, function(g) {
            this.opts.singleFile && this.files.length > 0 && this.removeFile(this.files[0]), this.files.push(g);
          }, this), this._trigger("filesSubmitted", d, S, c)) : n.each(S, function(g) {
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
          if (n.isFunction(c))
            return c(s);
          var d = s.relativePath || s.webkitRelativePath || s.fileName || s.name;
          return s.size + "-" + d.replace(/[^0-9a-zA-Z_-]/img, "");
        },
        getFromUniqueIdentifier: function(s) {
          var c = !1;
          return n.each(this.files, function(d) {
            if (d.uniqueIdentifier === s)
              return c = d, !1;
          }), c;
        },
        uploadNextChunk: function(s) {
          var c = !1, d = u.STATUS.PENDING, v = this.uploader.opts.checkChunkUploadedByResponse;
          if (this.opts.prioritizeFirstAndLastChunk && (n.each(this.files, function(g) {
            if (!g.paused && !(v && !g._firstResponse && g.isUploading())) {
              if (g.chunks.length && g.chunks[0].status() === d)
                return g.chunks[0].send(), c = !0, !1;
              if (g.chunks.length > 1 && g.chunks[g.chunks.length - 1].status() === d)
                return g.chunks[g.chunks.length - 1].send(), c = !0, !1;
            }
          }), c))
            return c;
          if (n.each(this.files, function(g) {
            if (!g.paused) {
              if (v && !g._firstResponse && g.isUploading())
                return;
              n.each(g.chunks, function(O) {
                if (O.status() === d)
                  return O.send(), c = !0, !1;
              });
            }
            if (c)
              return !1;
          }), c)
            return !0;
          var S = !1;
          return n.each(this.files, function(g) {
            if (!g.isComplete())
              return S = !0, !1;
          }), !S && !s && this.files.length && this._triggerAsync("complete"), S;
        },
        upload: function(s) {
          var c = this._shouldUploadNext();
          if (c !== !1) {
            !s && this._trigger("uploadStart");
            for (var d = !1, v = 1; v <= this.opts.simultaneousUploads - c && (d = this.uploadNextChunk(!s) || d, !(!d && s)); v++)
              ;
            !d && !s && this._triggerAsync("complete");
          }
        },
        _shouldUploadNext: function() {
          var s = 0, c = !0, d = this.opts.simultaneousUploads, v = u.STATUS.UPLOADING;
          return n.each(this.files, function(S) {
            return n.each(S.chunks, function(g) {
              if (g.status() === v && (s++, s >= d))
                return c = !1, !1;
            }), c;
          }), c && s;
        },
        assignBrowse: function(s, c, d, v) {
          typeof s.length > "u" && (s = [s]), n.each(s, function(S) {
            var g;
            S.tagName === "INPUT" && S.type === "file" ? g = S : (g = document.createElement("input"), g.setAttribute("type", "file"), n.extend(g.style, {
              visibility: "hidden",
              position: "absolute",
              width: "1px",
              height: "1px"
            }), S.appendChild(g), S.addEventListener("click", function(j) {
              S.tagName.toLowerCase() !== "label" && g.click();
            }, !1)), !this.opts.singleFile && !d && g.setAttribute("multiple", "multiple"), c && g.setAttribute("webkitdirectory", "webkitdirectory"), v && n.each(v, function(j, G) {
              g.setAttribute(G, j);
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
          var d = this, v = s.items.length, S = [];
          n.each(s.items, function(I) {
            var L = I.webkitGetAsEntry();
            if (!L) {
              G();
              return;
            }
            L.isFile ? O(I.getAsFile(), L.fullPath) : g(L.createReader());
          });
          function g(I) {
            I.readEntries(function(L) {
              L.length ? (v += L.length, n.each(L, function(q) {
                if (q.isFile) {
                  var X = q.fullPath;
                  q.file(function(M) {
                    O(M, X);
                  }, j);
                } else
                  q.isDirectory && g(q.createReader());
              }), g(I)) : G();
            }, j);
          }
          function O(I, L) {
            I.relativePath = L.substring(1), S.push(I), G();
          }
          function j(I) {
            throw I;
          }
          function G() {
            --v === 0 && d.addFiles(S, c);
          }
        },
        _assignHelper: function(s, c, d) {
          typeof s.length > "u" && (s = [s]);
          var v = d ? "removeEventListener" : "addEventListener";
          n.each(s, function(S) {
            n.each(c, function(g, O) {
              S[v](O, g, !1);
            }, this);
          }, this);
        },
        _preventEvent: function(s) {
          n.preventEvent(s), this._trigger(s.type, s);
        },
        assignDrop: function(s) {
          this._onDrop = n.bind(this.onDrop, this), this._assignHelper(s, {
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
      }), x.exports = f;
    }, { "./chunk": 1, "./event": 2, "./file": 4, "./utils": 5 }], 4: [function(C, x, w) {
      var n = C("./utils"), E = C("./chunk");
      function p(t, i, l) {
        n.defineNonEnumerable(this, "uploader", t), this.isRoot = this.isFolder = t === this, n.defineNonEnumerable(this, "parent", l || null), n.defineNonEnumerable(this, "files", []), n.defineNonEnumerable(this, "fileList", []), n.defineNonEnumerable(this, "chunks", []), n.defineNonEnumerable(this, "_errorFiles", []), n.defineNonEnumerable(this, "file", null), this.id = n.uid(), this.isRoot || !i ? this.file = null : n.isString(i) ? (this.isFolder = !0, this.file = null, this.path = i, this.parent.path && (i = i.substr(this.parent.path.length)), this.name = i.charAt(i.length - 1) === "/" ? i.substr(0, i.length - 1) : i) : (this.file = i, this.fileType = this.file.type, this.name = i.fileName || i.name, this.size = i.size, this.relativePath = i.relativePath || i.webkitRelativePath || this.name, this._parseFile()), this.paused = t.opts.initialPaused, this.error = !1, this.allError = !1, this.aborted = !1, this.completed = !1, this.averageSpeed = 0, this.currentSpeed = 0, this._lastProgressCallback = Date.now(), this._prevUploadedSize = 0, this._prevProgress = 0, this.bootstrap();
      }
      n.extend(p.prototype, {
        _parseFile: function() {
          var t = u(this.relativePath);
          if (t.length) {
            var i = this.uploader.filePaths;
            n.each(t, function(l, a) {
              var r = i[l];
              r || (r = new p(this.uploader, l, this.parent), i[l] = r, this._updateParentFileList(r)), this.parent = r, r.files.push(this), t[a + 1] || r.fileList.push(this);
            }, this);
          } else
            this._updateParentFileList();
        },
        _updateParentFileList: function(t) {
          t || (t = this);
          var i = this.parent;
          i && i.fileList.push(t);
        },
        _eachAccess: function(t, i) {
          if (this.isFolder) {
            n.each(this.files, function(l, a) {
              return t.call(this, l, a);
            }, this);
            return;
          }
          i.call(this, this);
        },
        bootstrap: function() {
          if (!this.isFolder) {
            var t = this.uploader.opts;
            n.isFunction(t.initFileFn) && t.initFileFn.call(this, this), this.abort(!0), this._resetError(), this._prevProgress = 0;
            for (var i = t.forceChunkSize ? Math.ceil : Math.floor, l = Math.max(i(this.size / t.chunkSize), 1), a = 0; a < l; a++)
              this.chunks.push(new E(this.uploader, this, a));
          }
        },
        _measureSpeed: function() {
          var t = this.uploader.opts.speedSmoothingFactor, i = Date.now() - this._lastProgressCallback;
          if (i) {
            var l = this.sizeUploaded();
            this.currentSpeed = Math.max((l - this._prevUploadedSize) / i * 1e3, 0), this.averageSpeed = t * this.currentSpeed + (1 - t) * this.averageSpeed, this._prevUploadedSize = l, this.parent && this.parent._checkProgress() && this.parent._measureSpeed();
          }
        },
        _checkProgress: function(t) {
          return Date.now() - this._lastProgressCallback >= this.uploader.opts.progressCallbacksInterval;
        },
        _chunkEvent: function(t, i, l) {
          var a = this.uploader, r = E.STATUS, f = this, R = this.getRoot(), s = function() {
            f._measureSpeed(), a._trigger("fileProgress", R, f, t), f._lastProgressCallback = Date.now();
          };
          switch (i) {
            case r.PROGRESS:
              this._checkProgress() && s();
              break;
            case r.ERROR:
              this._error(), this.abort(!0), a._trigger("fileError", R, this, l, t);
              break;
            case r.SUCCESS:
              if (this._updateUploadedChunks(l, t), this.error)
                return;
              clearTimeout(this._progeressId), this._progeressId = 0;
              var c = Date.now() - this._lastProgressCallback;
              c < a.opts.progressCallbacksInterval && (this._progeressId = setTimeout(s, a.opts.progressCallbacksInterval - c)), this.isComplete() ? (clearTimeout(this._progeressId), s(), this.currentSpeed = 0, this.averageSpeed = 0, a._trigger("fileSuccess", R, this, l, t), R.isComplete() && a._trigger("fileComplete", R, this)) : this._progeressId || s();
              break;
            case r.RETRY:
              a._trigger("fileRetry", R, this, t);
              break;
          }
        },
        _updateUploadedChunks: function(t, i) {
          var l = this.uploader.opts.checkChunkUploadedByResponse;
          if (l) {
            var a = i.xhr;
            n.each(this.chunks, function(r) {
              if (!r.tested) {
                var f = l.call(this, r, t);
                r === i && !f && (r.xhr = null), f && (r.xhr = a), r.tested = !0;
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
          for (var t = this.parent, i = -1; t && t !== this.uploader; )
            i = t._errorFiles.indexOf(this), t._errorFiles.splice(i, 1), t.allError = !1, t._errorFiles.length || (t.error = !1), t = t.parent;
        },
        isComplete: function() {
          if (!this.completed) {
            var t = !1;
            this._eachAccess(function(i) {
              if (!i.isComplete())
                return t = !0, !1;
            }, function() {
              if (this.error)
                t = !0;
              else {
                var i = E.STATUS;
                n.each(this.chunks, function(l) {
                  var a = l.status();
                  if (a === i.ERROR || a === i.PENDING || a === i.UPLOADING || a === i.READING || l.preprocessState === 1 || l.readState === 1)
                    return t = !0, !1;
                });
              }
            }), this.completed = !t;
          }
          return this.completed;
        },
        isUploading: function() {
          var t = !1;
          return this._eachAccess(function(i) {
            if (i.isUploading())
              return t = !0, !1;
          }, function() {
            var i = E.STATUS.UPLOADING;
            n.each(this.chunks, function(l) {
              if (l.status() === i)
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
          var i = function(l) {
            l.error && l.bootstrap();
          };
          t ? t.bootstrap() : this._eachAccess(i, function() {
            this.bootstrap();
          }), this.uploader.upload();
        },
        abort: function(t) {
          if (!this.aborted) {
            this.currentSpeed = 0, this.averageSpeed = 0, this.aborted = !t;
            var i = this.chunks;
            t && (this.chunks = []);
            var l = E.STATUS.UPLOADING;
            n.each(i, function(a) {
              a.status() === l && (a.abort(), this.uploader.uploadNextChunk());
            }, this);
          }
        },
        progress: function() {
          var t = 0, i = 0, l = 0;
          return this._eachAccess(function(a, r) {
            t += a.progress() * a.size, i += a.size, r === this.files.length - 1 && (l = i > 0 ? t / i : this.isComplete() ? 1 : 0);
          }, function() {
            if (this.error) {
              l = 1;
              return;
            }
            if (this.chunks.length === 1) {
              this._prevProgress = Math.max(this._prevProgress, this.chunks[0].progress()), l = this._prevProgress;
              return;
            }
            var a = 0;
            n.each(this.chunks, function(f) {
              a += f.progress() * (f.endByte - f.startByte);
            });
            var r = a / this.size;
            this._prevProgress = Math.max(this._prevProgress, r > 0.9999 ? 1 : r), l = this._prevProgress;
          }), l;
        },
        getSize: function() {
          var t = 0;
          return this._eachAccess(function(i) {
            t += i.size;
          }, function() {
            t += this.size;
          }), t;
        },
        getFormatSize: function() {
          var t = this.getSize();
          return n.formatSize(t);
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
          return this._eachAccess(function(i) {
            t += i.sizeUploaded();
          }, function() {
            n.each(this.chunks, function(i) {
              t += i.sizeUploaded();
            });
          }), t;
        },
        timeRemaining: function() {
          var t = 0, i = 0, l = 0;
          return this._eachAccess(function(r, f) {
            !r.paused && !r.error && (i += r.size - r.sizeUploaded(), l += r.averageSpeed), f === this.files.length - 1 && (t = a(i, l));
          }, function() {
            if (this.paused || this.error) {
              t = 0;
              return;
            }
            var r = this.size - this.sizeUploaded();
            t = a(r, this.averageSpeed);
          }), t;
          function a(r, f) {
            return r && !f ? Number.POSITIVE_INFINITY : !r && !f ? 0 : Math.floor(r / f);
          }
        },
        removeFile: function(t) {
          if (t.isFolder)
            for (; t.files.length; ) {
              var i = t.files[t.files.length - 1];
              this._removeFile(i);
            }
          this._removeFile(t);
        },
        _delFilePath: function(t) {
          t.path && this.filePaths && delete this.filePaths[t.path], n.each(t.fileList, function(i) {
            this._delFilePath(i);
          }, this);
        },
        _removeFile: function(t) {
          if (!t.isFolder) {
            n.each(this.files, function(a, r) {
              if (a === t)
                return this.files.splice(r, 1), !1;
            }, this), t.abort();
            for (var i = t.parent, l; i && i !== this; )
              l = i.parent, i._removeFile(t), i = l;
          }
          t.parent === this && n.each(this.fileList, function(a, r) {
            if (a === t)
              return this.fileList.splice(r, 1), !1;
          }, this), !this.isRoot && this.isFolder && !this.files.length && (this.parent._removeFile(this), this.uploader._delFilePath(this)), t.parent = null;
        },
        getType: function() {
          return this.isFolder ? "folder" : this.file.type && this.file.type.split("/")[1];
        },
        getExtension: function() {
          return this.isFolder ? "" : this.name.substr((~-this.name.lastIndexOf(".") >>> 0) + 2).toLowerCase();
        }
      }), x.exports = p;
      function u(t) {
        var i = [], l = t.split("/"), a = l.length, r = 1;
        if (l.splice(a - 1, 1), a--, l.length)
          for (; r <= a; )
            i.push(l.slice(0, r++).join("/") + "/");
        return i;
      }
    }, { "./chunk": 1, "./utils": 5 }], 5: [function(C, x, w) {
      var n = Object.prototype, E = Array.prototype, p = n.toString, u = function(r) {
        return p.call(r) === "[object Function]";
      }, t = Array.isArray || function(r) {
        return p.call(r) === "[object Array]";
      }, i = function(r) {
        return p.call(r) === "[object Object]" && Object.getPrototypeOf(r) === n;
      }, l = 0, a = {
        uid: function() {
          return ++l;
        },
        noop: function() {
        },
        bind: function(r, f) {
          return function() {
            return r.apply(f, arguments);
          };
        },
        preventEvent: function(r) {
          r.preventDefault();
        },
        stop: function(r) {
          r.preventDefault(), r.stopPropagation();
        },
        nextTick: function(r, f) {
          setTimeout(a.bind(r, f), 0);
        },
        toArray: function(r, f, R) {
          return f === void 0 && (f = 0), R === void 0 && (R = r.length), E.slice.call(r, f, R);
        },
        isPlainObject: i,
        isFunction: u,
        isArray: t,
        isObject: function(r) {
          return Object(r) === r;
        },
        isString: function(r) {
          return typeof r == "string";
        },
        isUndefined: function(r) {
          return typeof r > "u";
        },
        isDefined: function(r) {
          return typeof r < "u";
        },
        each: function(r, f, R) {
          if (a.isDefined(r.length))
            for (var s = 0, c = r.length; s < c && f.call(R, r[s], s, r) !== !1; s++)
              ;
          else
            for (var d in r)
              if (f.call(R, r[d], d, r) === !1)
                break;
        },
        evalOpts: function(r, f) {
          return a.isFunction(r) && (f = a.toArray(arguments), r = r.apply(null, f.slice(1))), r;
        },
        extend: function() {
          var r, f, R, s, c, d, v = arguments[0] || {}, S = 1, g = arguments.length, O = !1;
          for (typeof v == "boolean" && (O = v, v = arguments[1] || {}, S++), typeof v != "object" && !u(v) && (v = {}), S === g && (v = this, S--); S < g; S++)
            if ((r = arguments[S]) != null)
              for (f in r)
                R = v[f], s = r[f], v !== s && (O && s && (i(s) || (c = t(s))) ? (c ? (c = !1, d = R && t(R) ? R : []) : d = R && i(R) ? R : {}, v[f] = a.extend(O, d, s)) : s !== void 0 && (v[f] = s));
          return v;
        },
        formatSize: function(r) {
          return r < 1024 ? r.toFixed(0) + " bytes" : r < 1024 * 1024 ? (r / 1024).toFixed(0) + " KB" : r < 1024 * 1024 * 1024 ? (r / 1024 / 1024).toFixed(1) + " MB" : (r / 1024 / 1024 / 1024).toFixed(1) + " GB";
        },
        defineNonEnumerable: function(r, f, R) {
          Object.defineProperty(r, f, {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: R
          });
        }
      };
      x.exports = a;
    }, {}] }, {}, [3])(3);
  });
})(Et);
const Ve = Pe, ce = mt({
  uploader: null,
  isSupport: !0
});
const qe = ({ children: m, directory: y = !1, single: C = !1, attributes: x = "" }) => {
  const w = Q(null), { uploader: n } = be(ce);
  return le(() => {
    n == null || n.assignBrowse(w.current, y, C, x);
  }, [n]), _.jsx("div", { children: _.jsx("label", { className: "uploader-btn", ref: w, children: m }) });
};
const Rt = ({ children: m }) => {
  const { uploader: y, isSupport: C } = be(ce);
  if (!C)
    return null;
  const x = Q(null), [w, n] = V(""), E = () => {
    n("uploader-dragover");
  }, p = () => {
    n("");
  }, u = () => {
    n("uploader-droped");
  };
  return le(() => (y == null || y.assignDrop(x.current), y == null || y.on("dragenter", E), y == null || y.on("dragleave", p), y == null || y.on("drop", u), () => {
    y == null || y.off("dragenter", E), y == null || y.off("dragleave", p), y == null || y.off("drop", u), y == null || y.unAssignDrop(x.current);
  }), [y]), _.jsx("div", { className: `uploader-drop ${w}`, ref: x, children: m });
}, St = {
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
function xt(m) {
  const y = Math.floor(m / 31536e3);
  if (y)
    return y + " year" + E(y);
  const C = Math.floor((m %= 31536e3) / 86400);
  if (C)
    return C + " day" + E(C);
  const x = Math.floor((m %= 86400) / 3600);
  if (x)
    return x + " hour" + E(x);
  const w = Math.floor((m %= 3600) / 60);
  if (w)
    return w + " minute" + E(w);
  const n = m % 60;
  return n + " second" + E(n);
  function E(p) {
    return p > 1 ? "s" : "";
  }
}
const Ye = ["fileProgress", "fileSuccess", "fileComplete", "fileError"], kt = ({ file: m, list: y = !1, children: C }) => {
  const [x, w] = V(!1), [n, E] = V(!1), [p, u] = V(!1), [t, i] = V(!1), [l, a] = V(0), [r, f] = V(0), [R, s] = V(null), [c, d] = V(""), v = Q(null), S = Q({}), g = se(() => p ? "success" : x ? "error" : t ? "uploading" : n ? "paused" : "waiting", [t, p, x, n]), O = se(() => {
    const A = m.isFolder, T = m.getExtension();
    let $ = A ? "folder" : "unknown";
    const K = m.uploader.opts.categoryMap || St;
    return Object.keys(K).forEach((Z) => {
      K[Z].indexOf(T) > -1 && ($ = Z);
    }), $;
  }, [m.getExtension()]), j = se(() => {
    const A = Math.floor(l * 100), T = `translateX(${Math.floor(A - 100)}%)`;
    return {
      progress: `${A}%`,
      WebkitTransform: T,
      MozTransform: T,
      msTransform: T,
      transform: T
    };
  }, [l]), G = se(() => `${Ve.utils.formatSize(m.averageSpeed)} / s`, [m.averageSpeed]), I = se(() => m.uploader.fileStatusText[g], [g]), L = se(() => {
    if (r === Number.POSITIVE_INFINITY || r === 0)
      return "";
    let A = xt(r);
    const T = m.uploader.opts.parseTimeRemaining;
    return T && (A = T(r, A)), A;
  }, [r]), q = () => {
    m.pause(), J(), W();
  }, X = () => {
    m.retry(), J();
  }, M = () => {
    m.resume(), J();
  }, Y = () => {
    m.cancel();
  }, W = () => {
    f(m.timeRemaining()), a(m.progress()), J();
  }, ne = (A, T, $) => {
    A && ee($), W(), w(!1), u(!0), i(!1);
  }, fe = Q({
    _fileProgress: W,
    _fileSuccess: ne,
    _fileComplete: () => {
      ne();
    },
    _fileError: (A, T, $) => {
      W(), ee($), w(!0), u(!1), i(!1);
    }
  }), ee = (A) => {
    let T = A;
    try {
      T = JSON.parse(T);
    } catch {
      s(T);
    }
  }, he = (A, T) => {
    const $ = T[0], te = T[1];
    if (m === (y ? $ : te)) {
      if (y && A === "fileSuccess") {
        ee(T[2]);
        return;
      }
      fe.current[`_${A}`]();
    }
  }, J = () => {
    w(m.error), E(m.paused), i(m.isUploading());
  };
  return le(() => {
    g === "uploading" ? v.current = setTimeout(() => {
      d("uploader-file-progressing");
    }, 200) : (clearTimeout(v.current), d(""));
  }, [g]), le(() => {
    w(m.error), E(m.paused), u(m.isComplete()), i(m.isUploading()), a(m.progress()), f(m.timeRemaining());
    const A = (T) => S.current[T] = (...$) => {
      he(T, $);
    };
    return Ye.forEach((T) => {
      m.uploader.on(T, A(T));
    }), () => {
      Ye.forEach((T) => {
        m.uploader.off(T, S.current[T]);
      }), S.current = null;
    };
  }, []), _.jsx(_.Fragment, { children: C ? C({
    name: m.name,
    size: m.getFormatSize(),
    averageSpeed: G,
    error: x,
    paused: n,
    isComplete: p,
    isUploading: t,
    progress: l,
    formatedTimeRemaining: L,
    status: g,
    statusText: I,
    fileCategory: O,
    pause: q,
    remove: Y,
    resume: M,
    retry: X
  }) : _.jsxs("div", { className: "uploader-file", status: g, children: [_.jsx("div", { className: `uploader-file-progress ${c}`, style: j }), _.jsxs("div", { className: "uploader-file-info", children: [_.jsxs("div", { className: "uploader-file-name", children: [_.jsx("i", { className: "uploader-file-icon", icon: O }), m.name] }), _.jsx("div", { className: "uploader-file-size", children: m.getFormatSize() }), _.jsx("div", { className: "uploader-file-meta" }), _.jsxs("div", { className: "uploader-file-status", children: [g !== "uploading" && _.jsx("span", { children: I }), g === "uploading" && _.jsxs("span", { children: [_.jsxs("span", { children: [j.progress, " "] }), _.jsxs("em", { children: [G, " "] }), _.jsxs("i", { children: [L, " "] })] })] }), _.jsxs("div", { className: "uploader-file-actions", children: [_.jsx("span", { className: "uploader-file-pause", onClick: q }), _.jsx("span", { className: "uploader-file-resume", onClick: M }), _.jsx("span", { className: "uploader-file-retry", onClick: X }), _.jsx("span", { className: "uploader-file-remove", onClick: Y })] })] })] }) });
};
const Ct = ({ fileList: m, children: y }) => {
  const { isSupport: C } = be(ce);
  return C ? _.jsx("div", { className: "uploader-list", children: y ? y(m) : _.jsx("ul", { children: m.map((x) => _.jsx(kt, { file: x, list: !0 }, x.id)) }) }) : null;
};
const Pt = ({ children: m }) => {
  const { isSupport: y } = be(ce);
  return y ? null : _.jsx("div", { className: "uploader-unsupport", children: m || _.jsx("p", { children: "你的浏览器等级过低暂不支持上传组件" }) });
};
function wt(m) {
  var d;
  const { options: y, fileStatusText: C = {
    success: "成功了",
    error: "出错了",
    uploading: "上传中",
    paused: "暂停中",
    waiting: "等待中"
  }, autoStart: x = !0, onFileComplete: w = () => {
  }, onComplete: n = () => {
  }, onChange: E = () => {
  }, onFilesSubmitted: p = () => {
  }, onFileProgress: u = () => {
  }, onFileSuccess: t = () => {
  }, onFileAdded: i = () => {
  }, onFilesAdded: l = () => {
  }, children: a } = m, r = Q(new Ve(y)), f = Q((d = r.current) == null ? void 0 : d.support), [R, s] = V([]), c = (...v) => {
    var g, O;
    switch (v[0]) {
      case "change":
        E(v[1]);
        break;
      case "filesSubmitted":
        s([...(g = r.current) == null ? void 0 : g.fileList]), r.current.upload(), p(v[1], v[2], v[3]);
        break;
      case "fileProgress":
        u(v[1], v[2], v[3]);
        break;
      case "fileSuccess":
        t(v[1], v[2], v[3], v[4]);
        break;
      case "fileComplete":
        w(v[1]);
        break;
      case "complete":
        n();
        break;
      case "fileAdded":
        i(v[1]);
        break;
      case "filesAdded":
        l(v[1], v[2]);
        break;
      case "fileRemoved":
        s([...(O = r.current) == null ? void 0 : O.fileList]);
    }
  };
  return le(() => (r.current.fileStatusText = C, r.current.on("catchAll", c), window.uploader = r.current, () => {
    var v;
    (v = r.current) == null || v.off("catchAll", c), r.current = null;
  }), []), _.jsx("div", { className: "uploader-example uploader", children: _.jsx(ce.Provider, { value: {
    uploader: r.current,
    isSupport: f.current
  }, children: a ? a({ fileList: R }) : _.jsxs(_.Fragment, { children: [_.jsx(Pt, {}), _.jsx(Rt, { children: _.jsxs(_.Fragment, { children: [_.jsx("p", { className: "m-3", children: "把文件拖拽到此处进行上传" }), _.jsxs("div", { className: "flex", children: [_.jsx(qe, { children: "选择文件" }), _.jsx(qe, { directory: !0, children: "选择文件夹" })] })] }) }), _.jsx(Ct, { fileList: R })] }) }) });
}
export {
  Pt as UnSupport,
  qe as UploaderBtn,
  Rt as UploaderDrop,
  kt as UploaderFile,
  Ct as UploaderList,
  wt as default
};
