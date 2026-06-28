(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        i(a);
    new MutationObserver(a => {
        for (const l of a)
            if (l.type === "childList")
                for (const s of l.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(a) {
        const l = {};
        return a.integrity && (l.integrity = a.integrity),
        a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? l.credentials = "include" : a.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin",
        l
    }
    function i(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const l = n(a);
        fetch(a.href, l)
    }
}
)();
var Ym = {
    exports: {}
}
  , ou = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vv = Symbol.for("react.transitional.element")
  , Uv = Symbol.for("react.fragment");
function Gm(t, e, n) {
    var i = null;
    if (n !== void 0 && (i = "" + n),
    e.key !== void 0 && (i = "" + e.key),
    "key"in e) {
        n = {};
        for (var a in e)
            a !== "key" && (n[a] = e[a])
    } else
        n = e;
    return e = n.ref,
    {
        $$typeof: Vv,
        type: t,
        key: i,
        ref: e !== void 0 ? e : null,
        props: n
    }
}
ou.Fragment = Uv;
ou.jsx = Gm;
ou.jsxs = Gm;
Ym.exports = ou;
var g = Ym.exports
  , qm = {
    exports: {}
}
  , U = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac = Symbol.for("react.transitional.element")
  , _v = Symbol.for("react.portal")
  , Bv = Symbol.for("react.fragment")
  , Lv = Symbol.for("react.strict_mode")
  , Hv = Symbol.for("react.profiler")
  , Yv = Symbol.for("react.consumer")
  , Gv = Symbol.for("react.context")
  , qv = Symbol.for("react.forward_ref")
  , Xv = Symbol.for("react.suspense")
  , Qv = Symbol.for("react.memo")
  , Xm = Symbol.for("react.lazy")
  , Zv = Symbol.for("react.activity")
  , Hf = Symbol.iterator;
function Kv(t) {
    return t === null || typeof t != "object" ? null : (t = Hf && t[Hf] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Qm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Zm = Object.assign
  , Km = {};
function na(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Km,
    this.updater = n || Qm
}
na.prototype.isReactComponent = {};
na.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
na.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function km() {}
km.prototype = na.prototype;
function lc(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Km,
    this.updater = n || Qm
}
var sc = lc.prototype = new km;
sc.constructor = lc;
Zm(sc, na.prototype);
sc.isPureReactComponent = !0;
var Yf = Array.isArray;
function Bo() {}
var lt = {
    H: null,
    A: null,
    T: null,
    S: null
}
  , Jm = Object.prototype.hasOwnProperty;
function uc(t, e, n) {
    var i = n.ref;
    return {
        $$typeof: ac,
        type: t,
        key: e,
        ref: i !== void 0 ? i : null,
        props: n
    }
}
function kv(t, e) {
    return uc(t.type, e, t.props)
}
function oc(t) {
    return typeof t == "object" && t !== null && t.$$typeof === ac
}
function Jv(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var Gf = /\/+/g;
function Uu(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Jv("" + t.key) : e.toString(36)
}
function Fv(t) {
    switch (t.status) {
    case "fulfilled":
        return t.value;
    case "rejected":
        throw t.reason;
    default:
        switch (typeof t.status == "string" ? t.then(Bo, Bo) : (t.status = "pending",
        t.then(function(e) {
            t.status === "pending" && (t.status = "fulfilled",
            t.value = e)
        }, function(e) {
            t.status === "pending" && (t.status = "rejected",
            t.reason = e)
        })),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw t.reason
        }
    }
    throw t
}
function gi(t, e, n, i, a) {
    var l = typeof t;
    (l === "undefined" || l === "boolean") && (t = null);
    var s = !1;
    if (t === null)
        s = !0;
    else
        switch (l) {
        case "bigint":
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case ac:
            case _v:
                s = !0;
                break;
            case Xm:
                return s = t._init,
                gi(s(t._payload), e, n, i, a)
            }
        }
    if (s)
        return a = a(t),
        s = i === "" ? "." + Uu(t, 0) : i,
        Yf(a) ? (n = "",
        s != null && (n = s.replace(Gf, "$&/") + "/"),
        gi(a, e, n, "", function(r) {
            return r
        })) : a != null && (oc(a) && (a = kv(a, n + (a.key == null || t && t.key === a.key ? "" : ("" + a.key).replace(Gf, "$&/") + "/") + s)),
        e.push(a)),
        1;
    s = 0;
    var u = i === "" ? "." : i + ":";
    if (Yf(t))
        for (var o = 0; o < t.length; o++)
            i = t[o],
            l = u + Uu(i, o),
            s += gi(i, e, n, l, a);
    else if (o = Kv(t),
    typeof o == "function")
        for (t = o.call(t),
        o = 0; !(i = t.next()).done; )
            i = i.value,
            l = u + Uu(i, o++),
            s += gi(i, e, n, l, a);
    else if (l === "object") {
        if (typeof t.then == "function")
            return gi(Fv(t), e, n, i, a);
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.")
    }
    return s
}
function zl(t, e, n) {
    if (t == null)
        return t;
    var i = []
      , a = 0;
    return gi(t, i, "", "", function(l) {
        return e.call(n, l, a++)
    }),
    i
}
function Wv(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var qf = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error",{
            bubbles: !0,
            cancelable: !0,
            message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
            error: t
        });
        if (!window.dispatchEvent(e))
            return
    } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return
    }
    console.error(t)
}
  , Pv = {
    map: zl,
    forEach: function(t, e, n) {
        zl(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return zl(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return zl(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!oc(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
U.Activity = Zv;
U.Children = Pv;
U.Component = na;
U.Fragment = Bv;
U.Profiler = Hv;
U.PureComponent = lc;
U.StrictMode = Lv;
U.Suspense = Xv;
U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = lt;
U.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
        return lt.H.useMemoCache(t)
    }
};
U.cache = function(t) {
    return function() {
        return t.apply(null, arguments)
    }
}
;
U.cacheSignal = function() {
    return null
}
;
U.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("The argument must be a React element, but you passed " + t + ".");
    var i = Zm({}, t.props)
      , a = t.key;
    if (e != null)
        for (l in e.key !== void 0 && (a = "" + e.key),
        e)
            !Jm.call(e, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && e.ref === void 0 || (i[l] = e[l]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var s = Array(l), u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        i.children = s
    }
    return uc(t.type, a, i)
}
;
U.createContext = function(t) {
    return t = {
        $$typeof: Gv,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null
    },
    t.Provider = t,
    t.Consumer = {
        $$typeof: Yv,
        _context: t
    },
    t
}
;
U.createElement = function(t, e, n) {
    var i, a = {}, l = null;
    if (e != null)
        for (i in e.key !== void 0 && (l = "" + e.key),
        e)
            Jm.call(e, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = e[i]);
    var s = arguments.length - 2;
    if (s === 1)
        a.children = n;
    else if (1 < s) {
        for (var u = Array(s), o = 0; o < s; o++)
            u[o] = arguments[o + 2];
        a.children = u
    }
    if (t && t.defaultProps)
        for (i in s = t.defaultProps,
        s)
            a[i] === void 0 && (a[i] = s[i]);
    return uc(t, l, a)
}
;
U.createRef = function() {
    return {
        current: null
    }
}
;
U.forwardRef = function(t) {
    return {
        $$typeof: qv,
        render: t
    }
}
;
U.isValidElement = oc;
U.lazy = function(t) {
    return {
        $$typeof: Xm,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: Wv
    }
}
;
U.memo = function(t, e) {
    return {
        $$typeof: Qv,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
U.startTransition = function(t) {
    var e = lt.T
      , n = {};
    lt.T = n;
    try {
        var i = t()
          , a = lt.S;
        a !== null && a(n, i),
        typeof i == "object" && i !== null && typeof i.then == "function" && i.then(Bo, qf)
    } catch (l) {
        qf(l)
    } finally {
        e !== null && n.types !== null && (e.types = n.types),
        lt.T = e
    }
}
;
U.unstable_useCacheRefresh = function() {
    return lt.H.useCacheRefresh()
}
;
U.use = function(t) {
    return lt.H.use(t)
}
;
U.useActionState = function(t, e, n) {
    return lt.H.useActionState(t, e, n)
}
;
U.useCallback = function(t, e) {
    return lt.H.useCallback(t, e)
}
;
U.useContext = function(t) {
    return lt.H.useContext(t)
}
;
U.useDebugValue = function() {}
;
U.useDeferredValue = function(t, e) {
    return lt.H.useDeferredValue(t, e)
}
;
U.useEffect = function(t, e) {
    return lt.H.useEffect(t, e)
}
;
U.useEffectEvent = function(t) {
    return lt.H.useEffectEvent(t)
}
;
U.useId = function() {
    return lt.H.useId()
}
;
U.useImperativeHandle = function(t, e, n) {
    return lt.H.useImperativeHandle(t, e, n)
}
;
U.useInsertionEffect = function(t, e) {
    return lt.H.useInsertionEffect(t, e)
}
;
U.useLayoutEffect = function(t, e) {
    return lt.H.useLayoutEffect(t, e)
}
;
U.useMemo = function(t, e) {
    return lt.H.useMemo(t, e)
}
;
U.useOptimistic = function(t, e) {
    return lt.H.useOptimistic(t, e)
}
;
U.useReducer = function(t, e, n) {
    return lt.H.useReducer(t, e, n)
}
;
U.useRef = function(t) {
    return lt.H.useRef(t)
}
;
U.useState = function(t) {
    return lt.H.useState(t)
}
;
U.useSyncExternalStore = function(t, e, n) {
    return lt.H.useSyncExternalStore(t, e, n)
}
;
U.useTransition = function() {
    return lt.H.useTransition()
}
;
U.version = "19.2.4";
qm.exports = U;
var E = qm.exports
  , Fm = {
    exports: {}
}
  , ru = {}
  , Wm = {
    exports: {}
}
  , Pm = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(z, B) {
        var N = z.length;
        z.push(B);
        t: for (; 0 < N; ) {
            var X = N - 1 >>> 1
              , tt = z[X];
            if (0 < a(tt, B))
                z[X] = B,
                z[N] = tt,
                N = X;
            else
                break t
        }
    }
    function n(z) {
        return z.length === 0 ? null : z[0]
    }
    function i(z) {
        if (z.length === 0)
            return null;
        var B = z[0]
          , N = z.pop();
        if (N !== B) {
            z[0] = N;
            t: for (var X = 0, tt = z.length, ve = tt >>> 1; X < ve; ) {
                var hi = 2 * (X + 1) - 1
                  , Vu = z[hi]
                  , Ln = hi + 1
                  , Cl = z[Ln];
                if (0 > a(Vu, N))
                    Ln < tt && 0 > a(Cl, Vu) ? (z[X] = Cl,
                    z[Ln] = N,
                    X = Ln) : (z[X] = Vu,
                    z[hi] = N,
                    X = hi);
                else if (Ln < tt && 0 > a(Cl, N))
                    z[X] = Cl,
                    z[Ln] = N,
                    X = Ln;
                else
                    break t
            }
        }
        return B
    }
    function a(z, B) {
        var N = z.sortIndex - B.sortIndex;
        return N !== 0 ? N : z.id - B.id
    }
    if (t.unstable_now = void 0,
    typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        t.unstable_now = function() {
            return l.now()
        }
    } else {
        var s = Date
          , u = s.now();
        t.unstable_now = function() {
            return s.now() - u
        }
    }
    var o = []
      , r = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , v = !1
      , b = !1
      , S = !1
      , p = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , y = typeof setImmediate < "u" ? setImmediate : null;
    function x(z) {
        for (var B = n(r); B !== null; ) {
            if (B.callback === null)
                i(r);
            else if (B.startTime <= z)
                i(r),
                B.sortIndex = B.expirationTime,
                e(o, B);
            else
                break;
            B = n(r)
        }
    }
    function T(z) {
        if (b = !1,
        x(z),
        !v)
            if (n(o) !== null)
                v = !0,
                O || (O = !0,
                I());
            else {
                var B = n(r);
                B !== null && Kt(T, B.startTime - z)
            }
    }
    var O = !1
      , M = -1
      , D = 5
      , C = -1;
    function w() {
        return S ? !0 : !(t.unstable_now() - C < D)
    }
    function L() {
        if (S = !1,
        O) {
            var z = t.unstable_now();
            C = z;
            var B = !0;
            try {
                t: {
                    v = !1,
                    b && (b = !1,
                    m(M),
                    M = -1),
                    h = !0;
                    var N = f;
                    try {
                        e: {
                            for (x(z),
                            d = n(o); d !== null && !(d.expirationTime > z && w()); ) {
                                var X = d.callback;
                                if (typeof X == "function") {
                                    d.callback = null,
                                    f = d.priorityLevel;
                                    var tt = X(d.expirationTime <= z);
                                    if (z = t.unstable_now(),
                                    typeof tt == "function") {
                                        d.callback = tt,
                                        x(z),
                                        B = !0;
                                        break e
                                    }
                                    d === n(o) && i(o),
                                    x(z)
                                } else
                                    i(o);
                                d = n(o)
                            }
                            if (d !== null)
                                B = !0;
                            else {
                                var ve = n(r);
                                ve !== null && Kt(T, ve.startTime - z),
                                B = !1
                            }
                        }
                        break t
                    } finally {
                        d = null,
                        f = N,
                        h = !1
                    }
                    B = void 0
                }
            } finally {
                B ? I() : O = !1
            }
        }
    }
    var I;
    if (typeof y == "function")
        I = function() {
            y(L)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ae = new MessageChannel
          , le = ae.port2;
        ae.port1.onmessage = L,
        I = function() {
            le.postMessage(null)
        }
    } else
        I = function() {
            p(L, 0)
        }
        ;
    function Kt(z, B) {
        M = p(function() {
            z(t.unstable_now())
        }, B)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(z) {
        z.callback = null
    }
    ,
    t.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < z ? Math.floor(1e3 / z) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    t.unstable_next = function(z) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var B = 3;
            break;
        default:
            B = f
        }
        var N = f;
        f = B;
        try {
            return z()
        } finally {
            f = N
        }
    }
    ,
    t.unstable_requestPaint = function() {
        S = !0
    }
    ,
    t.unstable_runWithPriority = function(z, B) {
        switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            z = 3
        }
        var N = f;
        f = z;
        try {
            return B()
        } finally {
            f = N
        }
    }
    ,
    t.unstable_scheduleCallback = function(z, B, N) {
        var X = t.unstable_now();
        switch (typeof N == "object" && N !== null ? (N = N.delay,
        N = typeof N == "number" && 0 < N ? X + N : X) : N = X,
        z) {
        case 1:
            var tt = -1;
            break;
        case 2:
            tt = 250;
            break;
        case 5:
            tt = 1073741823;
            break;
        case 4:
            tt = 1e4;
            break;
        default:
            tt = 5e3
        }
        return tt = N + tt,
        z = {
            id: c++,
            callback: B,
            priorityLevel: z,
            startTime: N,
            expirationTime: tt,
            sortIndex: -1
        },
        N > X ? (z.sortIndex = N,
        e(r, z),
        n(o) === null && z === n(r) && (b ? (m(M),
        M = -1) : b = !0,
        Kt(T, N - X))) : (z.sortIndex = tt,
        e(o, z),
        v || h || (v = !0,
        O || (O = !0,
        I()))),
        z
    }
    ,
    t.unstable_shouldYield = w,
    t.unstable_wrapCallback = function(z) {
        var B = f;
        return function() {
            var N = f;
            f = B;
            try {
                return z.apply(this, arguments)
            } finally {
                f = N
            }
        }
    }
}
)(Pm);
Wm.exports = Pm;
var $v = Wm.exports
  , $m = {
    exports: {}
}
  , Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iv = E;
function Im(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
            e += "&args[]=" + encodeURIComponent(arguments[n])
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
function an() {}
var Vt = {
    d: {
        f: an,
        r: function() {
            throw Error(Im(522))
        },
        D: an,
        C: an,
        L: an,
        m: an,
        X: an,
        S: an,
        M: an
    },
    p: 0,
    findDOMNode: null
}
  , t1 = Symbol.for("react.portal");
function e1(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: t1,
        key: i == null ? null : "" + i,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
var Ca = Iv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function cu(t, e) {
    if (t === "font")
        return "";
    if (typeof e == "string")
        return e === "use-credentials" ? e : ""
}
Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Vt;
Bt.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        throw Error(Im(299));
    return e1(t, e, null, n)
}
;
Bt.flushSync = function(t) {
    var e = Ca.T
      , n = Vt.p;
    try {
        if (Ca.T = null,
        Vt.p = 2,
        t)
            return t()
    } finally {
        Ca.T = e,
        Vt.p = n,
        Vt.d.f()
    }
}
;
Bt.preconnect = function(t, e) {
    typeof t == "string" && (e ? (e = e.crossOrigin,
    e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null,
    Vt.d.C(t, e))
}
;
Bt.prefetchDNS = function(t) {
    typeof t == "string" && Vt.d.D(t)
}
;
Bt.preinit = function(t, e) {
    if (typeof t == "string" && e && typeof e.as == "string") {
        var n = e.as
          , i = cu(n, e.crossOrigin)
          , a = typeof e.integrity == "string" ? e.integrity : void 0
          , l = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        n === "style" ? Vt.d.S(t, typeof e.precedence == "string" ? e.precedence : void 0, {
            crossOrigin: i,
            integrity: a,
            fetchPriority: l
        }) : n === "script" && Vt.d.X(t, {
            crossOrigin: i,
            integrity: a,
            fetchPriority: l,
            nonce: typeof e.nonce == "string" ? e.nonce : void 0
        })
    }
}
;
Bt.preinitModule = function(t, e) {
    if (typeof t == "string")
        if (typeof e == "object" && e !== null) {
            if (e.as == null || e.as === "script") {
                var n = cu(e.as, e.crossOrigin);
                Vt.d.M(t, {
                    crossOrigin: n,
                    integrity: typeof e.integrity == "string" ? e.integrity : void 0,
                    nonce: typeof e.nonce == "string" ? e.nonce : void 0
                })
            }
        } else
            e == null && Vt.d.M(t)
}
;
Bt.preload = function(t, e) {
    if (typeof t == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        var n = e.as
          , i = cu(n, e.crossOrigin);
        Vt.d.L(t, n, {
            crossOrigin: i,
            integrity: typeof e.integrity == "string" ? e.integrity : void 0,
            nonce: typeof e.nonce == "string" ? e.nonce : void 0,
            type: typeof e.type == "string" ? e.type : void 0,
            fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
            referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
            imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
            imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
            media: typeof e.media == "string" ? e.media : void 0
        })
    }
}
;
Bt.preloadModule = function(t, e) {
    if (typeof t == "string")
        if (e) {
            var n = cu(e.as, e.crossOrigin);
            Vt.d.m(t, {
                as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
                crossOrigin: n,
                integrity: typeof e.integrity == "string" ? e.integrity : void 0
            })
        } else
            Vt.d.m(t)
}
;
Bt.requestFormReset = function(t) {
    Vt.d.r(t)
}
;
Bt.unstable_batchedUpdates = function(t, e) {
    return t(e)
}
;
Bt.useFormState = function(t, e, n) {
    return Ca.H.useFormState(t, e, n)
}
;
Bt.useFormStatus = function() {
    return Ca.H.useHostTransitionStatus()
}
;
Bt.version = "19.2.4";
function tp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)
        } catch (t) {
            console.error(t)
        }
}
tp(),
$m.exports = Bt;
var n1 = $m.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt = $v
  , ep = E
  , i1 = n1;
function A(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
            e += "&args[]=" + encodeURIComponent(arguments[n])
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
function np(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function dl(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function ip(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function ap(t) {
    if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Xf(t) {
    if (dl(t) !== t)
        throw Error(A(188))
}
function a1(t) {
    var e = t.alternate;
    if (!e) {
        if (e = dl(t),
        e === null)
            throw Error(A(188));
        return e !== t ? null : t
    }
    for (var n = t, i = e; ; ) {
        var a = n.return;
        if (a === null)
            break;
        var l = a.alternate;
        if (l === null) {
            if (i = a.return,
            i !== null) {
                n = i;
                continue
            }
            break
        }
        if (a.child === l.child) {
            for (l = a.child; l; ) {
                if (l === n)
                    return Xf(a),
                    t;
                if (l === i)
                    return Xf(a),
                    e;
                l = l.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== i.return)
            n = a,
            i = l;
        else {
            for (var s = !1, u = a.child; u; ) {
                if (u === n) {
                    s = !0,
                    n = a,
                    i = l;
                    break
                }
                if (u === i) {
                    s = !0,
                    i = a,
                    n = l;
                    break
                }
                u = u.sibling
            }
            if (!s) {
                for (u = l.child; u; ) {
                    if (u === n) {
                        s = !0,
                        n = l,
                        i = a;
                        break
                    }
                    if (u === i) {
                        s = !0,
                        i = l,
                        n = a;
                        break
                    }
                    u = u.sibling
                }
                if (!s)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== i)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? t : e
}
function lp(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6)
        return t;
    for (t = t.child; t !== null; ) {
        if (e = lp(t),
        e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var st = Object.assign
  , l1 = Symbol.for("react.element")
  , Ol = Symbol.for("react.transitional.element")
  , Sa = Symbol.for("react.portal")
  , Si = Symbol.for("react.fragment")
  , sp = Symbol.for("react.strict_mode")
  , Lo = Symbol.for("react.profiler")
  , up = Symbol.for("react.consumer")
  , Ze = Symbol.for("react.context")
  , rc = Symbol.for("react.forward_ref")
  , Ho = Symbol.for("react.suspense")
  , Yo = Symbol.for("react.suspense_list")
  , cc = Symbol.for("react.memo")
  , un = Symbol.for("react.lazy")
  , Go = Symbol.for("react.activity")
  , s1 = Symbol.for("react.memo_cache_sentinel")
  , Qf = Symbol.iterator;
function ha(t) {
    return t === null || typeof t != "object" ? null : (t = Qf && t[Qf] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var u1 = Symbol.for("react.client.reference");
function qo(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.$$typeof === u1 ? null : t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case Si:
        return "Fragment";
    case Lo:
        return "Profiler";
    case sp:
        return "StrictMode";
    case Ho:
        return "Suspense";
    case Yo:
        return "SuspenseList";
    case Go:
        return "Activity"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case Sa:
            return "Portal";
        case Ze:
            return t.displayName || "Context";
        case up:
            return (t._context.displayName || "Context") + ".Consumer";
        case rc:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case cc:
            return e = t.displayName || null,
            e !== null ? e : qo(t.type) || "Memo";
        case un:
            e = t._payload,
            t = t._init;
            try {
                return qo(t(e))
            } catch {}
        }
    return null
}
var Ta = Array.isArray
  , V = ep.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  , K = i1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  , Wn = {
    pending: !1,
    data: null,
    method: null,
    action: null
}
  , Xo = []
  , Ti = -1;
function Ue(t) {
    return {
        current: t
    }
}
function Dt(t) {
    0 > Ti || (t.current = Xo[Ti],
    Xo[Ti] = null,
    Ti--)
}
function et(t, e) {
    Ti++,
    Xo[Ti] = t.current,
    t.current = e
}
var Re = Ue(null)
  , Ja = Ue(null)
  , bn = Ue(null)
  , Ts = Ue(null);
function As(t, e) {
    switch (et(bn, e),
    et(Ja, t),
    et(Re, null),
    e.nodeType) {
    case 9:
    case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Wd(t) : 0;
        break;
    default:
        if (t = e.tagName,
        e = e.namespaceURI)
            e = Wd(e),
            t = wy(e, t);
        else
            switch (t) {
            case "svg":
                t = 1;
                break;
            case "math":
                t = 2;
                break;
            default:
                t = 0
            }
    }
    Dt(Re),
    et(Re, t)
}
function Xi() {
    Dt(Re),
    Dt(Ja),
    Dt(bn)
}
function Qo(t) {
    t.memoizedState !== null && et(Ts, t);
    var e = Re.current
      , n = wy(e, t.type);
    e !== n && (et(Ja, t),
    et(Re, n))
}
function Es(t) {
    Ja.current === t && (Dt(Re),
    Dt(Ja)),
    Ts.current === t && (Dt(Ts),
    ll._currentValue = Wn)
}
var _u, Zf;
function Xn(t) {
    if (_u === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            _u = e && e[1] || "",
            Zf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
    return `
` + _u + t + Zf
}
var Bu = !1;
function Lu(t, e) {
    if (!t || Bu)
        return "";
    Bu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        var i = {
            DetermineComponentFrameRoot: function() {
                try {
                    if (e) {
                        var d = function() {
                            throw Error()
                        };
                        if (Object.defineProperty(d.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        typeof Reflect == "object" && Reflect.construct) {
                            try {
                                Reflect.construct(d, [])
                            } catch (h) {
                                var f = h
                            }
                            Reflect.construct(t, [], d)
                        } else {
                            try {
                                d.call()
                            } catch (h) {
                                f = h
                            }
                            t.call(d.prototype)
                        }
                    } else {
                        try {
                            throw Error()
                        } catch (h) {
                            f = h
                        }
                        (d = t()) && typeof d.catch == "function" && d.catch(function() {})
                    }
                } catch (h) {
                    if (h && f && typeof h.stack == "string")
                        return [h.stack, f.stack]
                }
                return [null, null]
            }
        };
        i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
        a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
        });
        var l = i.DetermineComponentFrameRoot()
          , s = l[0]
          , u = l[1];
        if (s && u) {
            var o = s.split(`
`)
              , r = u.split(`
`);
            for (a = i = 0; i < o.length && !o[i].includes("DetermineComponentFrameRoot"); )
                i++;
            for (; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
                a++;
            if (i === o.length || a === r.length)
                for (i = o.length - 1,
                a = r.length - 1; 1 <= i && 0 <= a && o[i] !== r[a]; )
                    a--;
            for (; 1 <= i && 0 <= a; i--,
            a--)
                if (o[i] !== r[a]) {
                    if (i !== 1 || a !== 1)
                        do
                            if (i--,
                            a--,
                            0 > a || o[i] !== r[a]) {
                                var c = `
` + o[i].replace(" at new ", " at ");
                                return t.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", t.displayName)),
                                c
                            }
                        while (1 <= i && 0 <= a);
                    break
                }
        }
    } finally {
        Bu = !1,
        Error.prepareStackTrace = n
    }
    return (n = t ? t.displayName || t.name : "") ? Xn(n) : ""
}
function o1(t, e) {
    switch (t.tag) {
    case 26:
    case 27:
    case 5:
        return Xn(t.type);
    case 16:
        return Xn("Lazy");
    case 13:
        return t.child !== e && e !== null ? Xn("Suspense Fallback") : Xn("Suspense");
    case 19:
        return Xn("SuspenseList");
    case 0:
    case 15:
        return Lu(t.type, !1);
    case 11:
        return Lu(t.type.render, !1);
    case 1:
        return Lu(t.type, !0);
    case 31:
        return Xn("Activity");
    default:
        return ""
    }
}
function Kf(t) {
    try {
        var e = ""
          , n = null;
        do
            e += o1(t, n),
            n = t,
            t = t.return;
        while (t);
        return e
    } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack
    }
}
var Zo = Object.prototype.hasOwnProperty
  , fc = bt.unstable_scheduleCallback
  , Hu = bt.unstable_cancelCallback
  , r1 = bt.unstable_shouldYield
  , c1 = bt.unstable_requestPaint
  , Pt = bt.unstable_now
  , f1 = bt.unstable_getCurrentPriorityLevel
  , op = bt.unstable_ImmediatePriority
  , rp = bt.unstable_UserBlockingPriority
  , Ms = bt.unstable_NormalPriority
  , d1 = bt.unstable_LowPriority
  , cp = bt.unstable_IdlePriority
  , h1 = bt.log
  , m1 = bt.unstable_setDisableYieldValue
  , hl = null
  , $t = null;
function mn(t) {
    if (typeof h1 == "function" && m1(t),
    $t && typeof $t.setStrictMode == "function")
        try {
            $t.setStrictMode(hl, t)
        } catch {}
}
var It = Math.clz32 ? Math.clz32 : g1
  , p1 = Math.log
  , y1 = Math.LN2;
function g1(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (p1(t) / y1 | 0) | 0
}
var jl = 256
  , Nl = 262144
  , Rl = 4194304;
function Qn(t) {
    var e = t & 42;
    if (e !== 0)
        return e;
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
        return 64;
    case 128:
        return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
        return t & 261888;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 3932160;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
        return t & 62914560;
    case 67108864:
        return 67108864;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 0;
    default:
        return t
    }
}
function fu(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0)
        return 0;
    var a = 0
      , l = t.suspendedLanes
      , s = t.pingedLanes;
    t = t.warmLanes;
    var u = i & 134217727;
    return u !== 0 ? (i = u & ~l,
    i !== 0 ? a = Qn(i) : (s &= u,
    s !== 0 ? a = Qn(s) : n || (n = u & ~t,
    n !== 0 && (a = Qn(n))))) : (u = i & ~l,
    u !== 0 ? a = Qn(u) : s !== 0 ? a = Qn(s) : n || (n = i & ~t,
    n !== 0 && (a = Qn(n)))),
    a === 0 ? 0 : e !== 0 && e !== a && !(e & l) && (l = a & -a,
    n = e & -e,
    l >= n || l === 32 && (n & 4194048) !== 0) ? e : a
}
function ml(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
}
function v1(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
        return e + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
        return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function fp() {
    var t = Rl;
    return Rl <<= 1,
    !(Rl & 62914560) && (Rl = 4194304),
    t
}
function Yu(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function pl(t, e) {
    t.pendingLanes |= e,
    e !== 268435456 && (t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.warmLanes = 0)
}
function x1(t, e, n, i, a, l) {
    var s = t.pendingLanes;
    t.pendingLanes = n,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.warmLanes = 0,
    t.expiredLanes &= n,
    t.entangledLanes &= n,
    t.errorRecoveryDisabledLanes &= n,
    t.shellSuspendCounter = 0;
    var u = t.entanglements
      , o = t.expirationTimes
      , r = t.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
        var c = 31 - It(n)
          , d = 1 << c;
        u[c] = 0,
        o[c] = -1;
        var f = r[c];
        if (f !== null)
            for (r[c] = null,
            c = 0; c < f.length; c++) {
                var h = f[c];
                h !== null && (h.lane &= -536870913)
            }
        n &= ~d
    }
    i !== 0 && dp(t, i, 0),
    l !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= l & ~(s & ~e))
}
function dp(t, e, n) {
    t.pendingLanes |= e,
    t.suspendedLanes &= ~e;
    var i = 31 - It(e);
    t.entangledLanes |= e,
    t.entanglements[i] = t.entanglements[i] | 1073741824 | n & 261930
}
function hp(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var i = 31 - It(n)
          , a = 1 << i;
        a & e | t[i] & e && (t[i] |= e),
        n &= ~a
    }
}
function mp(t, e) {
    var n = e & -e;
    return n = n & 42 ? 1 : dc(n),
    n & (t.suspendedLanes | e) ? 0 : n
}
function dc(t) {
    switch (t) {
    case 2:
        t = 1;
        break;
    case 8:
        t = 4;
        break;
    case 32:
        t = 16;
        break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
        t = 128;
        break;
    case 268435456:
        t = 134217728;
        break;
    default:
        t = 0
    }
    return t
}
function hc(t) {
    return t &= -t,
    2 < t ? 8 < t ? t & 134217727 ? 32 : 268435456 : 8 : 2
}
function pp() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event,
    t === void 0 ? 32 : Ly(t.type))
}
function kf(t, e) {
    var n = K.p;
    try {
        return K.p = t,
        e()
    } finally {
        K.p = n
    }
}
var Un = Math.random().toString(36).slice(2)
  , Ct = "__reactFiber$" + Un
  , Qt = "__reactProps$" + Un
  , ia = "__reactContainer$" + Un
  , Ko = "__reactEvents$" + Un
  , b1 = "__reactListeners$" + Un
  , S1 = "__reactHandles$" + Un
  , Jf = "__reactResources$" + Un
  , yl = "__reactMarker$" + Un;
function mc(t) {
    delete t[Ct],
    delete t[Qt],
    delete t[Ko],
    delete t[b1],
    delete t[S1]
}
function Ai(t) {
    var e = t[Ct];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[ia] || n[Ct]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = eh(t); t !== null; ) {
                    if (n = t[Ct])
                        return n;
                    t = eh(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function aa(t) {
    if (t = t[Ct] || t[ia]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
            return t
    }
    return null
}
function Aa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
    throw Error(A(33))
}
function _i(t) {
    var e = t[Jf];
    return e || (e = t[Jf] = {
        hoistableStyles: new Map,
        hoistableScripts: new Map
    }),
    e
}
function Mt(t) {
    t[yl] = !0
}
var yp = new Set
  , gp = {};
function oi(t, e) {
    Qi(t, e),
    Qi(t + "Capture", e)
}
function Qi(t, e) {
    for (gp[t] = e,
    t = 0; t < e.length; t++)
        yp.add(e[t])
}
var T1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
  , Ff = {}
  , Wf = {};
function A1(t) {
    return Zo.call(Wf, t) ? !0 : Zo.call(Ff, t) ? !1 : T1.test(t) ? Wf[t] = !0 : (Ff[t] = !0,
    !1)
}
function ts(t, e, n) {
    if (A1(e))
        if (n === null)
            t.removeAttribute(e);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
                t.removeAttribute(e);
                return;
            case "boolean":
                var i = e.toLowerCase().slice(0, 5);
                if (i !== "data-" && i !== "aria-") {
                    t.removeAttribute(e);
                    return
                }
            }
            t.setAttribute(e, "" + n)
        }
}
function Vl(t, e, n) {
    if (n === null)
        t.removeAttribute(e);
    else {
        switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
            t.removeAttribute(e);
            return
        }
        t.setAttribute(e, "" + n)
    }
}
function Be(t, e, n, i) {
    if (i === null)
        t.removeAttribute(n);
    else {
        switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
            t.removeAttribute(n);
            return
        }
        t.setAttributeNS(e, n, "" + i)
    }
}
function ue(t) {
    switch (typeof t) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function vp(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function E1(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var a = i.get
          , l = i.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return a.call(this)
            },
            set: function(s) {
                n = "" + s,
                l.call(this, s)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: i.enumerable
        }),
        {
            getValue: function() {
                return n
            },
            setValue: function(s) {
                n = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function ko(t) {
    if (!t._valueTracker) {
        var e = vp(t) ? "checked" : "value";
        t._valueTracker = E1(t, e, "" + t[e])
    }
}
function xp(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , i = "";
    return t && (i = vp(t) ? t.checked ? "true" : "false" : t.value),
    t = i,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Ds(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
var M1 = /[\n"\\]/g;
function ce(t) {
    return t.replace(M1, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " "
    })
}
function Jo(t, e, n, i, a, l, s, u) {
    t.name = "",
    s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"),
    e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ue(e)) : t.value !== "" + ue(e) && (t.value = "" + ue(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"),
    e != null ? Fo(t, s, ue(e)) : n != null ? Fo(t, s, ue(n)) : i != null && t.removeAttribute("value"),
    a == null && l != null && (t.defaultChecked = !!l),
    a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"),
    u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? t.name = "" + ue(u) : t.removeAttribute("name")
}
function bp(t, e, n, i, a, l, s, u) {
    if (l != null && typeof l != "function" && typeof l != "symbol" && typeof l != "boolean" && (t.type = l),
    e != null || n != null) {
        if (!(l !== "submit" && l !== "reset" || e != null)) {
            ko(t);
            return
        }
        n = n != null ? "" + ue(n) : "",
        e = e != null ? "" + ue(e) : n,
        u || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    i = i ?? a,
    i = typeof i != "function" && typeof i != "symbol" && !!i,
    t.checked = u ? t.checked : !!i,
    t.defaultChecked = !!i,
    s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s),
    ko(t)
}
function Fo(t, e, n) {
    e === "number" && Ds(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n)
}
function Bi(t, e, n, i) {
    if (t = t.options,
    e) {
        e = {};
        for (var a = 0; a < n.length; a++)
            e["$" + n[a]] = !0;
        for (n = 0; n < t.length; n++)
            a = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== a && (t[n].selected = a),
            a && i && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + ue(n),
        e = null,
        a = 0; a < t.length; a++) {
            if (t[a].value === n) {
                t[a].selected = !0,
                i && (t[a].defaultSelected = !0);
                return
            }
            e !== null || t[a].disabled || (e = t[a])
        }
        e !== null && (e.selected = !0)
    }
}
function Sp(t, e, n) {
    if (e != null && (e = "" + ue(e),
    e !== t.value && (t.value = e),
    n == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return
    }
    t.defaultValue = n != null ? "" + ue(n) : ""
}
function Tp(t, e, n, i) {
    if (e == null) {
        if (i != null) {
            if (n != null)
                throw Error(A(92));
            if (Ta(i)) {
                if (1 < i.length)
                    throw Error(A(93));
                i = i[0]
            }
            n = i
        }
        n == null && (n = ""),
        e = n
    }
    n = ue(e),
    t.defaultValue = n,
    i = t.textContent,
    i === n && i !== "" && i !== null && (t.value = i),
    ko(t)
}
function Zi(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var D1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
function Pf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, n) : typeof n != "number" || n === 0 || D1.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px"
}
function Ap(t, e, n) {
    if (e != null && typeof e != "object")
        throw Error(A(62));
    if (t = t.style,
    n != null) {
        for (var i in n)
            !n.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
        for (var a in e)
            i = e[a],
            e.hasOwnProperty(a) && n[a] !== i && Pf(t, a, i)
    } else
        for (var l in e)
            e.hasOwnProperty(l) && Pf(t, l, e[l])
}
function pc(t) {
    if (t.indexOf("-") === -1)
        return !1;
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var w1 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
  , C1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function es(t) {
    return C1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
}
function Ke() {}
var Wo = null;
function yc(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var Ei = null
  , Li = null;
function $f(t) {
    var e = aa(t);
    if (e && (t = e.stateNode)) {
        var n = t[Qt] || null;
        t: switch (t = e.stateNode,
        e.type) {
        case "input":
            if (Jo(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
            e = n.name,
            n.type === "radio" && e != null) {
                for (n = t; n.parentNode; )
                    n = n.parentNode;
                for (n = n.querySelectorAll('input[name="' + ce("" + e) + '"][type="radio"]'),
                e = 0; e < n.length; e++) {
                    var i = n[e];
                    if (i !== t && i.form === t.form) {
                        var a = i[Qt] || null;
                        if (!a)
                            throw Error(A(90));
                        Jo(i, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                    }
                }
                for (e = 0; e < n.length; e++)
                    i = n[e],
                    i.form === t.form && xp(i)
            }
            break t;
        case "textarea":
            Sp(t, n.value, n.defaultValue);
            break t;
        case "select":
            e = n.value,
            e != null && Bi(t, !!n.multiple, e, !1)
        }
    }
}
var Gu = !1;
function Ep(t, e, n) {
    if (Gu)
        return t(e, n);
    Gu = !0;
    try {
        var i = t(e);
        return i
    } finally {
        if (Gu = !1,
        (Ei !== null || Li !== null) && (Au(),
        Ei && (e = Ei,
        t = Li,
        Li = Ei = null,
        $f(e),
        t)))
            for (e = 0; e < t.length; e++)
                $f(t[e])
    }
}
function Fa(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var i = n[Qt] || null;
    if (i === null)
        return null;
    n = i[e];
    t: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (t = t.type,
        i = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !i;
        break t;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, e, typeof n));
    return n
}
var Pe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Po = !1;
if (Pe)
    try {
        var ma = {};
        Object.defineProperty(ma, "passive", {
            get: function() {
                Po = !0
            }
        }),
        window.addEventListener("test", ma, ma),
        window.removeEventListener("test", ma, ma)
    } catch {
        Po = !1
    }
var pn = null
  , gc = null
  , ns = null;
function Mp() {
    if (ns)
        return ns;
    var t, e = gc, n = e.length, i, a = "value"in pn ? pn.value : pn.textContent, l = a.length;
    for (t = 0; t < n && e[t] === a[t]; t++)
        ;
    var s = n - t;
    for (i = 1; i <= s && e[n - i] === a[l - i]; i++)
        ;
    return ns = a.slice(t, 1 < i ? 1 - i : void 0)
}
function is(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function Ul() {
    return !0
}
function If() {
    return !1
}
function Zt(t) {
    function e(n, i, a, l, s) {
        this._reactName = n,
        this._targetInst = a,
        this.type = i,
        this.nativeEvent = l,
        this.target = s,
        this.currentTarget = null;
        for (var u in t)
            t.hasOwnProperty(u) && (n = t[u],
            this[u] = n ? n(l) : l[u]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ul : If,
        this.isPropagationStopped = If,
        this
    }
    return st(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ul)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ul)
        },
        persist: function() {},
        isPersistent: Ul
    }),
    e
}
var ri = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, du = Zt(ri), gl = st({}, ri, {
    view: 0,
    detail: 0
}), z1 = Zt(gl), qu, Xu, pa, hu = st({}, gl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vc,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== pa && (pa && t.type === "mousemove" ? (qu = t.screenX - pa.screenX,
        Xu = t.screenY - pa.screenY) : Xu = qu = 0,
        pa = t),
        qu)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Xu
    }
}), td = Zt(hu), O1 = st({}, hu, {
    dataTransfer: 0
}), j1 = Zt(O1), N1 = st({}, gl, {
    relatedTarget: 0
}), Qu = Zt(N1), R1 = st({}, ri, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), V1 = Zt(R1), U1 = st({}, ri, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), _1 = Zt(U1), B1 = st({}, ri, {
    data: 0
}), ed = Zt(B1), L1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, H1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Y1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function G1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Y1[t]) ? !!e[t] : !1
}
function vc() {
    return G1
}
var q1 = st({}, gl, {
    key: function(t) {
        if (t.key) {
            var e = L1[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = is(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? H1[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vc,
    charCode: function(t) {
        return t.type === "keypress" ? is(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? is(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , X1 = Zt(q1)
  , Q1 = st({}, hu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , nd = Zt(Q1)
  , Z1 = st({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vc
})
  , K1 = Zt(Z1)
  , k1 = st({}, ri, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , J1 = Zt(k1)
  , F1 = st({}, hu, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , W1 = Zt(F1)
  , P1 = st({}, ri, {
    newState: 0,
    oldState: 0
})
  , $1 = Zt(P1)
  , I1 = [9, 13, 27, 32]
  , xc = Pe && "CompositionEvent"in window
  , za = null;
Pe && "documentMode"in document && (za = document.documentMode);
var tx = Pe && "TextEvent"in window && !za
  , Dp = Pe && (!xc || za && 8 < za && 11 >= za)
  , id = " "
  , ad = !1;
function wp(t, e) {
    switch (t) {
    case "keyup":
        return I1.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Cp(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var Mi = !1;
function ex(t, e) {
    switch (t) {
    case "compositionend":
        return Cp(e);
    case "keypress":
        return e.which !== 32 ? null : (ad = !0,
        id);
    case "textInput":
        return t = e.data,
        t === id && ad ? null : t;
    default:
        return null
    }
}
function nx(t, e) {
    if (Mi)
        return t === "compositionend" || !xc && wp(t, e) ? (t = Mp(),
        ns = gc = pn = null,
        Mi = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Dp && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var ix = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ld(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!ix[t.type] : e === "textarea"
}
function zp(t, e, n, i) {
    Ei ? Li ? Li.push(i) : Li = [i] : Ei = i,
    e = Qs(e, "onChange"),
    0 < e.length && (n = new du("onChange","change",null,n,i),
    t.push({
        event: n,
        listeners: e
    }))
}
var Oa = null
  , Wa = null;
function ax(t) {
    Ey(t, 0)
}
function mu(t) {
    var e = Aa(t);
    if (xp(e))
        return t
}
function sd(t, e) {
    if (t === "change")
        return e
}
var Op = !1;
if (Pe) {
    var Zu;
    if (Pe) {
        var Ku = "oninput"in document;
        if (!Ku) {
            var ud = document.createElement("div");
            ud.setAttribute("oninput", "return;"),
            Ku = typeof ud.oninput == "function"
        }
        Zu = Ku
    } else
        Zu = !1;
    Op = Zu && (!document.documentMode || 9 < document.documentMode)
}
function od() {
    Oa && (Oa.detachEvent("onpropertychange", jp),
    Wa = Oa = null)
}
function jp(t) {
    if (t.propertyName === "value" && mu(Wa)) {
        var e = [];
        zp(e, Wa, t, yc(t)),
        Ep(ax, e)
    }
}
function lx(t, e, n) {
    t === "focusin" ? (od(),
    Oa = e,
    Wa = n,
    Oa.attachEvent("onpropertychange", jp)) : t === "focusout" && od()
}
function sx(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return mu(Wa)
}
function ux(t, e) {
    if (t === "click")
        return mu(e)
}
function ox(t, e) {
    if (t === "input" || t === "change")
        return mu(e)
}
function rx(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var ne = typeof Object.is == "function" ? Object.is : rx;
function Pa(t, e) {
    if (ne(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , i = Object.keys(e);
    if (n.length !== i.length)
        return !1;
    for (i = 0; i < n.length; i++) {
        var a = n[i];
        if (!Zo.call(e, a) || !ne(t[a], e[a]))
            return !1
    }
    return !0
}
function rd(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function cd(t, e) {
    var n = rd(t);
    t = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (i = t + n.textContent.length,
            t <= e && i >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = i
        }
        t: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break t
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = rd(n)
    }
}
function Np(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Np(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Rp(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Ds(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Ds(t.document)
    }
    return e
}
function bc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
var cx = Pe && "documentMode"in document && 11 >= document.documentMode
  , Di = null
  , $o = null
  , ja = null
  , Io = !1;
function fd(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io || Di == null || Di !== Ds(i) || (i = Di,
    "selectionStart"in i && bc(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    ja && Pa(ja, i) || (ja = i,
    i = Qs($o, "onSelect"),
    0 < i.length && (e = new du("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: i
    }),
    e.target = Di)))
}
function Hn(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var wi = {
    animationend: Hn("Animation", "AnimationEnd"),
    animationiteration: Hn("Animation", "AnimationIteration"),
    animationstart: Hn("Animation", "AnimationStart"),
    transitionrun: Hn("Transition", "TransitionRun"),
    transitionstart: Hn("Transition", "TransitionStart"),
    transitioncancel: Hn("Transition", "TransitionCancel"),
    transitionend: Hn("Transition", "TransitionEnd")
}
  , ku = {}
  , Vp = {};
Pe && (Vp = document.createElement("div").style,
"AnimationEvent"in window || (delete wi.animationend.animation,
delete wi.animationiteration.animation,
delete wi.animationstart.animation),
"TransitionEvent"in window || delete wi.transitionend.transition);
function ci(t) {
    if (ku[t])
        return ku[t];
    if (!wi[t])
        return t;
    var e = wi[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Vp)
            return ku[t] = e[n];
    return t
}
var Up = ci("animationend")
  , _p = ci("animationiteration")
  , Bp = ci("animationstart")
  , fx = ci("transitionrun")
  , dx = ci("transitionstart")
  , hx = ci("transitioncancel")
  , Lp = ci("transitionend")
  , Hp = new Map
  , tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
tr.push("scrollEnd");
function we(t, e) {
    Hp.set(t, e),
    oi(e, [t])
}
var ws = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error",{
            bubbles: !0,
            cancelable: !0,
            message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
            error: t
        });
        if (!window.dispatchEvent(e))
            return
    } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return
    }
    console.error(t)
}
  , se = []
  , Ci = 0
  , Sc = 0;
function pu() {
    for (var t = Ci, e = Sc = Ci = 0; e < t; ) {
        var n = se[e];
        se[e++] = null;
        var i = se[e];
        se[e++] = null;
        var a = se[e];
        se[e++] = null;
        var l = se[e];
        if (se[e++] = null,
        i !== null && a !== null) {
            var s = i.pending;
            s === null ? a.next = a : (a.next = s.next,
            s.next = a),
            i.pending = a
        }
        l !== 0 && Yp(n, a, l)
    }
}
function yu(t, e, n, i) {
    se[Ci++] = t,
    se[Ci++] = e,
    se[Ci++] = n,
    se[Ci++] = i,
    Sc |= i,
    t.lanes |= i,
    t = t.alternate,
    t !== null && (t.lanes |= i)
}
function Tc(t, e, n, i) {
    return yu(t, e, n, i),
    Cs(t)
}
function fi(t, e) {
    return yu(t, null, null, e),
    Cs(t)
}
function Yp(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var a = !1, l = t.return; l !== null; )
        l.childLanes |= n,
        i = l.alternate,
        i !== null && (i.childLanes |= n),
        l.tag === 22 && (t = l.stateNode,
        t === null || t._visibility & 1 || (a = !0)),
        t = l,
        l = l.return;
    return t.tag === 3 ? (l = t.stateNode,
    a && e !== null && (a = 31 - It(n),
    t = l.hiddenUpdates,
    i = t[a],
    i === null ? t[a] = [e] : i.push(e),
    e.lane = n | 536870912),
    l) : null
}
function Cs(t) {
    if (50 < Ya)
        throw Ya = 0,
        Sr = null,
        Error(A(185));
    for (var e = t.return; e !== null; )
        t = e,
        e = t.return;
    return t.tag === 3 ? t.stateNode : null
}
var zi = {};
function mx(t, e, n, i) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.refCleanup = this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ft(t, e, n, i) {
    return new mx(t,e,n,i)
}
function Ac(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function Je(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ft(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 65011712,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n.refCleanup = t.refCleanup,
    n
}
function Gp(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0,
    t.lanes = e,
    t.child = null,
    t.subtreeFlags = 0,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.updateQueue = null,
    t.dependencies = null,
    t.stateNode = null) : (t.childLanes = n.childLanes,
    t.lanes = n.lanes,
    t.child = n.child,
    t.subtreeFlags = 0,
    t.deletions = null,
    t.memoizedProps = n.memoizedProps,
    t.memoizedState = n.memoizedState,
    t.updateQueue = n.updateQueue,
    t.type = n.type,
    e = n.dependencies,
    t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }),
    t
}
function as(t, e, n, i, a, l) {
    var s = 0;
    if (i = t,
    typeof t == "function")
        Ac(t) && (s = 1);
    else if (typeof t == "string")
        s = xb(t, n, Re.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
        t: switch (t) {
        case Go:
            return t = Ft(31, n, e, a),
            t.elementType = Go,
            t.lanes = l,
            t;
        case Si:
            return Pn(n.children, a, l, e);
        case sp:
            s = 8,
            a |= 24;
            break;
        case Lo:
            return t = Ft(12, n, e, a | 2),
            t.elementType = Lo,
            t.lanes = l,
            t;
        case Ho:
            return t = Ft(13, n, e, a),
            t.elementType = Ho,
            t.lanes = l,
            t;
        case Yo:
            return t = Ft(19, n, e, a),
            t.elementType = Yo,
            t.lanes = l,
            t;
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case Ze:
                    s = 10;
                    break t;
                case up:
                    s = 9;
                    break t;
                case rc:
                    s = 11;
                    break t;
                case cc:
                    s = 14;
                    break t;
                case un:
                    s = 16,
                    i = null;
                    break t
                }
            s = 29,
            n = Error(A(130, t === null ? "null" : typeof t, "")),
            i = null
        }
    return e = Ft(s, n, e, a),
    e.elementType = t,
    e.type = i,
    e.lanes = l,
    e
}
function Pn(t, e, n, i) {
    return t = Ft(7, t, i, e),
    t.lanes = n,
    t
}
function Ju(t, e, n) {
    return t = Ft(6, t, null, e),
    t.lanes = n,
    t
}
function qp(t) {
    var e = Ft(18, null, null, 0);
    return e.stateNode = t,
    e
}
function Fu(t, e, n) {
    return e = Ft(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
var dd = new WeakMap;
function fe(t, e) {
    if (typeof t == "object" && t !== null) {
        var n = dd.get(t);
        return n !== void 0 ? n : (e = {
            value: t,
            source: e,
            stack: Kf(e)
        },
        dd.set(t, e),
        e)
    }
    return {
        value: t,
        source: e,
        stack: Kf(e)
    }
}
var Oi = []
  , ji = 0
  , zs = null
  , $a = 0
  , oe = []
  , re = 0
  , zn = null
  , Oe = 1
  , je = "";
function Xe(t, e) {
    Oi[ji++] = $a,
    Oi[ji++] = zs,
    zs = t,
    $a = e
}
function Xp(t, e, n) {
    oe[re++] = Oe,
    oe[re++] = je,
    oe[re++] = zn,
    zn = t;
    var i = Oe;
    t = je;
    var a = 32 - It(i) - 1;
    i &= ~(1 << a),
    n += 1;
    var l = 32 - It(e) + a;
    if (30 < l) {
        var s = a - a % 5;
        l = (i & (1 << s) - 1).toString(32),
        i >>= s,
        a -= s,
        Oe = 1 << 32 - It(e) + a | n << a | i,
        je = l + t
    } else
        Oe = 1 << l | n << a | i,
        je = t
}
function Ec(t) {
    t.return !== null && (Xe(t, 1),
    Xp(t, 1, 0))
}
function Mc(t) {
    for (; t === zs; )
        zs = Oi[--ji],
        Oi[ji] = null,
        $a = Oi[--ji],
        Oi[ji] = null;
    for (; t === zn; )
        zn = oe[--re],
        oe[re] = null,
        je = oe[--re],
        oe[re] = null,
        Oe = oe[--re],
        oe[re] = null
}
function Qp(t, e) {
    oe[re++] = Oe,
    oe[re++] = je,
    oe[re++] = zn,
    Oe = e.id,
    je = e.overflow,
    zn = t
}
var zt = null
  , it = null
  , q = !1
  , Sn = null
  , de = !1
  , er = Error(A(519));
function On(t) {
    var e = Error(A(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw Ia(fe(e, t)),
    er
}
function hd(t) {
    var e = t.stateNode
      , n = t.type
      , i = t.memoizedProps;
    switch (e[Ct] = t,
    e[Qt] = i,
    n) {
    case "dialog":
        H("cancel", e),
        H("close", e);
        break;
    case "iframe":
    case "object":
    case "embed":
        H("load", e);
        break;
    case "video":
    case "audio":
        for (n = 0; n < il.length; n++)
            H(il[n], e);
        break;
    case "source":
        H("error", e);
        break;
    case "img":
    case "image":
    case "link":
        H("error", e),
        H("load", e);
        break;
    case "details":
        H("toggle", e);
        break;
    case "input":
        H("invalid", e),
        bp(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
        break;
    case "select":
        H("invalid", e);
        break;
    case "textarea":
        H("invalid", e),
        Tp(e, i.value, i.defaultValue, i.children)
    }
    n = i.children,
    typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || i.suppressHydrationWarning === !0 || Dy(e.textContent, n) ? (i.popover != null && (H("beforetoggle", e),
    H("toggle", e)),
    i.onScroll != null && H("scroll", e),
    i.onScrollEnd != null && H("scrollend", e),
    i.onClick != null && (e.onclick = Ke),
    e = !0) : e = !1,
    e || On(t, !0)
}
function md(t) {
    for (zt = t.return; zt; )
        switch (zt.tag) {
        case 5:
        case 31:
        case 13:
            de = !1;
            return;
        case 27:
        case 3:
            de = !0;
            return;
        default:
            zt = zt.return
        }
}
function mi(t) {
    if (t !== zt)
        return !1;
    if (!q)
        return md(t),
        q = !0,
        !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type,
    n = !(n !== "form" && n !== "button") || Dr(t.type, t.memoizedProps)),
    n = !n),
    n && it && On(t),
    md(t),
    e === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(A(317));
        it = th(t)
    } else if (e === 31) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(A(317));
        it = th(t)
    } else
        e === 27 ? (e = it,
        _n(t.type) ? (t = Or,
        Or = null,
        it = t) : it = e) : it = zt ? pe(t.stateNode.nextSibling) : null;
    return !0
}
function ii() {
    it = zt = null,
    q = !1
}
function Wu() {
    var t = Sn;
    return t !== null && (Gt === null ? Gt = t : Gt.push.apply(Gt, t),
    Sn = null),
    t
}
function Ia(t) {
    Sn === null ? Sn = [t] : Sn.push(t)
}
var nr = Ue(null)
  , di = null
  , ke = null;
function rn(t, e, n) {
    et(nr, e._currentValue),
    e._currentValue = n
}
function Fe(t) {
    t._currentValue = nr.current,
    Dt(nr)
}
function ir(t, e, n) {
    for (; t !== null; ) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function ar(t, e, n, i) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
        var l = a.dependencies;
        if (l !== null) {
            var s = a.child;
            l = l.firstContext;
            t: for (; l !== null; ) {
                var u = l;
                l = a;
                for (var o = 0; o < e.length; o++)
                    if (u.context === e[o]) {
                        l.lanes |= n,
                        u = l.alternate,
                        u !== null && (u.lanes |= n),
                        ir(l.return, n, t),
                        i || (s = null);
                        break t
                    }
                l = u.next
            }
        } else if (a.tag === 18) {
            if (s = a.return,
            s === null)
                throw Error(A(341));
            s.lanes |= n,
            l = s.alternate,
            l !== null && (l.lanes |= n),
            ir(s, n, t),
            s = null
        } else
            s = a.child;
        if (s !== null)
            s.return = a;
        else
            for (s = a; s !== null; ) {
                if (s === t) {
                    s = null;
                    break
                }
                if (a = s.sibling,
                a !== null) {
                    a.return = s.return,
                    s = a;
                    break
                }
                s = s.return
            }
        a = s
    }
}
function la(t, e, n, i) {
    t = null;
    for (var a = e, l = !1; a !== null; ) {
        if (!l) {
            if (a.flags & 524288)
                l = !0;
            else if (a.flags & 262144)
                break
        }
        if (a.tag === 10) {
            var s = a.alternate;
            if (s === null)
                throw Error(A(387));
            if (s = s.memoizedProps,
            s !== null) {
                var u = a.type;
                ne(a.pendingProps.value, s.value) || (t !== null ? t.push(u) : t = [u])
            }
        } else if (a === Ts.current) {
            if (s = a.alternate,
            s === null)
                throw Error(A(387));
            s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(ll) : t = [ll])
        }
        a = a.return
    }
    t !== null && ar(e, t, n, i),
    e.flags |= 262144
}
function Os(t) {
    for (t = t.firstContext; t !== null; ) {
        if (!ne(t.context._currentValue, t.memoizedValue))
            return !0;
        t = t.next
    }
    return !1
}
function ai(t) {
    di = t,
    ke = null,
    t = t.dependencies,
    t !== null && (t.firstContext = null)
}
function Ot(t) {
    return Zp(di, t)
}
function _l(t, e) {
    return di === null && ai(t),
    Zp(t, e)
}
function Zp(t, e) {
    var n = e._currentValue;
    if (e = {
        context: e,
        memoizedValue: n,
        next: null
    },
    ke === null) {
        if (t === null)
            throw Error(A(308));
        ke = e,
        t.dependencies = {
            lanes: 0,
            firstContext: e
        },
        t.flags |= 524288
    } else
        ke = ke.next = e;
    return n
}
var px = typeof AbortController < "u" ? AbortController : function() {
    var t = []
      , e = this.signal = {
        aborted: !1,
        addEventListener: function(n, i) {
            t.push(i)
        }
    };
    this.abort = function() {
        e.aborted = !0,
        t.forEach(function(n) {
            return n()
        })
    }
}
  , yx = bt.unstable_scheduleCallback
  , gx = bt.unstable_NormalPriority
  , yt = {
    $$typeof: Ze,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
};
function Dc() {
    return {
        controller: new px,
        data: new Map,
        refCount: 0
    }
}
function vl(t) {
    t.refCount--,
    t.refCount === 0 && yx(gx, function() {
        t.controller.abort()
    })
}
var Na = null
  , lr = 0
  , Ki = 0
  , Hi = null;
function vx(t, e) {
    if (Na === null) {
        var n = Na = [];
        lr = 0,
        Ki = Pc(),
        Hi = {
            status: "pending",
            value: void 0,
            then: function(i) {
                n.push(i)
            }
        }
    }
    return lr++,
    e.then(pd, pd),
    e
}
function pd() {
    if (--lr === 0 && Na !== null) {
        Hi !== null && (Hi.status = "fulfilled");
        var t = Na;
        Na = null,
        Ki = 0,
        Hi = null;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
}
function xx(t, e) {
    var n = []
      , i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(a) {
            n.push(a)
        }
    };
    return t.then(function() {
        i.status = "fulfilled",
        i.value = e;
        for (var a = 0; a < n.length; a++)
            (0,
            n[a])(e)
    }, function(a) {
        for (i.status = "rejected",
        i.reason = a,
        a = 0; a < n.length; a++)
            (0,
            n[a])(void 0)
    }),
    i
}
var yd = V.S;
V.S = function(t, e) {
    ly = Pt(),
    typeof e == "object" && e !== null && typeof e.then == "function" && vx(t, e),
    yd !== null && yd(t, e)
}
;
var $n = Ue(null);
function wc() {
    var t = $n.current;
    return t !== null ? t : $.pooledCache
}
function ls(t, e) {
    e === null ? et($n, $n.current) : et($n, e.pool)
}
function Kp() {
    var t = wc();
    return t === null ? null : {
        parent: yt._currentValue,
        pool: t
    }
}
var sa = Error(A(460))
  , Cc = Error(A(474))
  , gu = Error(A(542))
  , js = {
    then: function() {}
};
function gd(t) {
    return t = t.status,
    t === "fulfilled" || t === "rejected"
}
function kp(t, e, n) {
    switch (n = t[n],
    n === void 0 ? t.push(e) : n !== e && (e.then(Ke, Ke),
    e = n),
    e.status) {
    case "fulfilled":
        return e.value;
    case "rejected":
        throw t = e.reason,
        xd(t),
        t;
    default:
        if (typeof e.status == "string")
            e.then(Ke, Ke);
        else {
            if (t = $,
            t !== null && 100 < t.shellSuspendCounter)
                throw Error(A(482));
            t = e,
            t.status = "pending",
            t.then(function(i) {
                if (e.status === "pending") {
                    var a = e;
                    a.status = "fulfilled",
                    a.value = i
                }
            }, function(i) {
                if (e.status === "pending") {
                    var a = e;
                    a.status = "rejected",
                    a.reason = i
                }
            })
        }
        switch (e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            xd(t),
            t
        }
        throw In = e,
        sa
    }
}
function Zn(t) {
    try {
        var e = t._init;
        return e(t._payload)
    } catch (n) {
        throw n !== null && typeof n == "object" && typeof n.then == "function" ? (In = n,
        sa) : n
    }
}
var In = null;
function vd() {
    if (In === null)
        throw Error(A(459));
    var t = In;
    return In = null,
    t
}
function xd(t) {
    if (t === sa || t === gu)
        throw Error(A(483))
}
var Yi = null
  , tl = 0;
function Bl(t) {
    var e = tl;
    return tl += 1,
    Yi === null && (Yi = []),
    kp(Yi, t, e)
}
function ya(t, e) {
    e = e.props.ref,
    t.ref = e !== void 0 ? e : null
}
function Ll(t, e) {
    throw e.$$typeof === l1 ? Error(A(525)) : (t = Object.prototype.toString.call(e),
    Error(A(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
}
function Jp(t) {
    function e(p, m) {
        if (t) {
            var y = p.deletions;
            y === null ? (p.deletions = [m],
            p.flags |= 16) : y.push(m)
        }
    }
    function n(p, m) {
        if (!t)
            return null;
        for (; m !== null; )
            e(p, m),
            m = m.sibling;
        return null
    }
    function i(p) {
        for (var m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function a(p, m) {
        return p = Je(p, m),
        p.index = 0,
        p.sibling = null,
        p
    }
    function l(p, m, y) {
        return p.index = y,
        t ? (y = p.alternate,
        y !== null ? (y = y.index,
        y < m ? (p.flags |= 67108866,
        m) : y) : (p.flags |= 67108866,
        m)) : (p.flags |= 1048576,
        m)
    }
    function s(p) {
        return t && p.alternate === null && (p.flags |= 67108866),
        p
    }
    function u(p, m, y, x) {
        return m === null || m.tag !== 6 ? (m = Ju(y, p.mode, x),
        m.return = p,
        m) : (m = a(m, y),
        m.return = p,
        m)
    }
    function o(p, m, y, x) {
        var T = y.type;
        return T === Si ? c(p, m, y.props.children, x, y.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === un && Zn(T) === m.type) ? (m = a(m, y.props),
        ya(m, y),
        m.return = p,
        m) : (m = as(y.type, y.key, y.props, null, p.mode, x),
        ya(m, y),
        m.return = p,
        m)
    }
    function r(p, m, y, x) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Fu(y, p.mode, x),
        m.return = p,
        m) : (m = a(m, y.children || []),
        m.return = p,
        m)
    }
    function c(p, m, y, x, T) {
        return m === null || m.tag !== 7 ? (m = Pn(y, p.mode, x, T),
        m.return = p,
        m) : (m = a(m, y),
        m.return = p,
        m)
    }
    function d(p, m, y) {
        if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
            return m = Ju("" + m, p.mode, y),
            m.return = p,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Ol:
                return y = as(m.type, m.key, m.props, null, p.mode, y),
                ya(y, m),
                y.return = p,
                y;
            case Sa:
                return m = Fu(m, p.mode, y),
                m.return = p,
                m;
            case un:
                return m = Zn(m),
                d(p, m, y)
            }
            if (Ta(m) || ha(m))
                return m = Pn(m, p.mode, y, null),
                m.return = p,
                m;
            if (typeof m.then == "function")
                return d(p, Bl(m), y);
            if (m.$$typeof === Ze)
                return d(p, _l(p, m), y);
            Ll(p, m)
        }
        return null
    }
    function f(p, m, y, x) {
        var T = m !== null ? m.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
            return T !== null ? null : u(p, m, "" + y, x);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ol:
                return y.key === T ? o(p, m, y, x) : null;
            case Sa:
                return y.key === T ? r(p, m, y, x) : null;
            case un:
                return y = Zn(y),
                f(p, m, y, x)
            }
            if (Ta(y) || ha(y))
                return T !== null ? null : c(p, m, y, x, null);
            if (typeof y.then == "function")
                return f(p, m, Bl(y), x);
            if (y.$$typeof === Ze)
                return f(p, m, _l(p, y), x);
            Ll(p, y)
        }
        return null
    }
    function h(p, m, y, x, T) {
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
            return p = p.get(y) || null,
            u(m, p, "" + x, T);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Ol:
                return p = p.get(x.key === null ? y : x.key) || null,
                o(m, p, x, T);
            case Sa:
                return p = p.get(x.key === null ? y : x.key) || null,
                r(m, p, x, T);
            case un:
                return x = Zn(x),
                h(p, m, y, x, T)
            }
            if (Ta(x) || ha(x))
                return p = p.get(y) || null,
                c(m, p, x, T, null);
            if (typeof x.then == "function")
                return h(p, m, y, Bl(x), T);
            if (x.$$typeof === Ze)
                return h(p, m, y, _l(m, x), T);
            Ll(m, x)
        }
        return null
    }
    function v(p, m, y, x) {
        for (var T = null, O = null, M = m, D = m = 0, C = null; M !== null && D < y.length; D++) {
            M.index > D ? (C = M,
            M = null) : C = M.sibling;
            var w = f(p, M, y[D], x);
            if (w === null) {
                M === null && (M = C);
                break
            }
            t && M && w.alternate === null && e(p, M),
            m = l(w, m, D),
            O === null ? T = w : O.sibling = w,
            O = w,
            M = C
        }
        if (D === y.length)
            return n(p, M),
            q && Xe(p, D),
            T;
        if (M === null) {
            for (; D < y.length; D++)
                M = d(p, y[D], x),
                M !== null && (m = l(M, m, D),
                O === null ? T = M : O.sibling = M,
                O = M);
            return q && Xe(p, D),
            T
        }
        for (M = i(M); D < y.length; D++)
            C = h(M, p, D, y[D], x),
            C !== null && (t && C.alternate !== null && M.delete(C.key === null ? D : C.key),
            m = l(C, m, D),
            O === null ? T = C : O.sibling = C,
            O = C);
        return t && M.forEach(function(L) {
            return e(p, L)
        }),
        q && Xe(p, D),
        T
    }
    function b(p, m, y, x) {
        if (y == null)
            throw Error(A(151));
        for (var T = null, O = null, M = m, D = m = 0, C = null, w = y.next(); M !== null && !w.done; D++,
        w = y.next()) {
            M.index > D ? (C = M,
            M = null) : C = M.sibling;
            var L = f(p, M, w.value, x);
            if (L === null) {
                M === null && (M = C);
                break
            }
            t && M && L.alternate === null && e(p, M),
            m = l(L, m, D),
            O === null ? T = L : O.sibling = L,
            O = L,
            M = C
        }
        if (w.done)
            return n(p, M),
            q && Xe(p, D),
            T;
        if (M === null) {
            for (; !w.done; D++,
            w = y.next())
                w = d(p, w.value, x),
                w !== null && (m = l(w, m, D),
                O === null ? T = w : O.sibling = w,
                O = w);
            return q && Xe(p, D),
            T
        }
        for (M = i(M); !w.done; D++,
        w = y.next())
            w = h(M, p, D, w.value, x),
            w !== null && (t && w.alternate !== null && M.delete(w.key === null ? D : w.key),
            m = l(w, m, D),
            O === null ? T = w : O.sibling = w,
            O = w);
        return t && M.forEach(function(I) {
            return e(p, I)
        }),
        q && Xe(p, D),
        T
    }
    function S(p, m, y, x) {
        if (typeof y == "object" && y !== null && y.type === Si && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ol:
                t: {
                    for (var T = y.key; m !== null; ) {
                        if (m.key === T) {
                            if (T = y.type,
                            T === Si) {
                                if (m.tag === 7) {
                                    n(p, m.sibling),
                                    x = a(m, y.props.children),
                                    x.return = p,
                                    p = x;
                                    break t
                                }
                            } else if (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === un && Zn(T) === m.type) {
                                n(p, m.sibling),
                                x = a(m, y.props),
                                ya(x, y),
                                x.return = p,
                                p = x;
                                break t
                            }
                            n(p, m);
                            break
                        } else
                            e(p, m);
                        m = m.sibling
                    }
                    y.type === Si ? (x = Pn(y.props.children, p.mode, x, y.key),
                    x.return = p,
                    p = x) : (x = as(y.type, y.key, y.props, null, p.mode, x),
                    ya(x, y),
                    x.return = p,
                    p = x)
                }
                return s(p);
            case Sa:
                t: {
                    for (T = y.key; m !== null; ) {
                        if (m.key === T)
                            if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                                n(p, m.sibling),
                                x = a(m, y.children || []),
                                x.return = p,
                                p = x;
                                break t
                            } else {
                                n(p, m);
                                break
                            }
                        else
                            e(p, m);
                        m = m.sibling
                    }
                    x = Fu(y, p.mode, x),
                    x.return = p,
                    p = x
                }
                return s(p);
            case un:
                return y = Zn(y),
                S(p, m, y, x)
            }
            if (Ta(y))
                return v(p, m, y, x);
            if (ha(y)) {
                if (T = ha(y),
                typeof T != "function")
                    throw Error(A(150));
                return y = T.call(y),
                b(p, m, y, x)
            }
            if (typeof y.then == "function")
                return S(p, m, Bl(y), x);
            if (y.$$typeof === Ze)
                return S(p, m, _l(p, y), x);
            Ll(p, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y,
        m !== null && m.tag === 6 ? (n(p, m.sibling),
        x = a(m, y),
        x.return = p,
        p = x) : (n(p, m),
        x = Ju(y, p.mode, x),
        x.return = p,
        p = x),
        s(p)) : n(p, m)
    }
    return function(p, m, y, x) {
        try {
            tl = 0;
            var T = S(p, m, y, x);
            return Yi = null,
            T
        } catch (M) {
            if (M === sa || M === gu)
                throw M;
            var O = Ft(29, M, null, p.mode);
            return O.lanes = x,
            O.return = p,
            O
        } finally {}
    }
}
var li = Jp(!0)
  , Fp = Jp(!1)
  , on = !1;
function zc(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null
        },
        callbacks: null
    }
}
function sr(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
    })
}
function Tn(t) {
    return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function An(t, e, n) {
    var i = t.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    Z & 2) {
        var a = i.pending;
        return a === null ? e.next = e : (e.next = a.next,
        a.next = e),
        i.pending = e,
        e = Cs(t),
        Yp(t, null, n),
        e
    }
    return yu(t, i, e, n),
    Cs(t)
}
function Ra(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194048) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes,
        n |= i,
        e.lanes = n,
        hp(t, n)
    }
}
function Pu(t, e) {
    var n = t.updateQueue
      , i = t.alternate;
    if (i !== null && (i = i.updateQueue,
    n === i)) {
        var a = null
          , l = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: null,
                    next: null
                };
                l === null ? a = l = s : l = l.next = s,
                n = n.next
            } while (n !== null);
            l === null ? a = l = e : l = l.next = e
        } else
            a = l = e;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: l,
            shared: i.shared,
            callbacks: i.callbacks
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
var ur = !1;
function Va() {
    if (ur) {
        var t = Hi;
        if (t !== null)
            throw t
    }
}
function Ua(t, e, n, i) {
    ur = !1;
    var a = t.updateQueue;
    on = !1;
    var l = a.firstBaseUpdate
      , s = a.lastBaseUpdate
      , u = a.shared.pending;
    if (u !== null) {
        a.shared.pending = null;
        var o = u
          , r = o.next;
        o.next = null,
        s === null ? l = r : s.next = r,
        s = o;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        u = c.lastBaseUpdate,
        u !== s && (u === null ? c.firstBaseUpdate = r : u.next = r,
        c.lastBaseUpdate = o))
    }
    if (l !== null) {
        var d = a.baseState;
        s = 0,
        c = r = o = null,
        u = l;
        do {
            var f = u.lane & -536870913
              , h = f !== u.lane;
            if (h ? (G & f) === f : (i & f) === f) {
                f !== 0 && f === Ki && (ur = !0),
                c !== null && (c = c.next = {
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: null,
                    next: null
                });
                t: {
                    var v = t
                      , b = u;
                    f = e;
                    var S = n;
                    switch (b.tag) {
                    case 1:
                        if (v = b.payload,
                        typeof v == "function") {
                            d = v.call(S, d, f);
                            break t
                        }
                        d = v;
                        break t;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = b.payload,
                        f = typeof v == "function" ? v.call(S, d, f) : v,
                        f == null)
                            break t;
                        d = st({}, d, f);
                        break t;
                    case 2:
                        on = !0
                    }
                }
                f = u.callback,
                f !== null && (t.flags |= 64,
                h && (t.flags |= 8192),
                h = a.callbacks,
                h === null ? a.callbacks = [f] : h.push(f))
            } else
                h = {
                    lane: f,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                c === null ? (r = c = h,
                o = d) : c = c.next = h,
                s |= f;
            if (u = u.next,
            u === null) {
                if (u = a.shared.pending,
                u === null)
                    break;
                h = u,
                u = h.next,
                h.next = null,
                a.lastBaseUpdate = h,
                a.shared.pending = null
            }
        } while (!0);
        c === null && (o = d),
        a.baseState = o,
        a.firstBaseUpdate = r,
        a.lastBaseUpdate = c,
        l === null && (a.shared.lanes = 0),
        Nn |= s,
        t.lanes = s,
        t.memoizedState = d
    }
}
function Wp(t, e) {
    if (typeof t != "function")
        throw Error(A(191, t));
    t.call(e)
}
function Pp(t, e) {
    var n = t.callbacks;
    if (n !== null)
        for (t.callbacks = null,
        t = 0; t < n.length; t++)
            Wp(n[t], e)
}
var ki = Ue(null)
  , Ns = Ue(0);
function bd(t, e) {
    t = en,
    et(Ns, t),
    et(ki, e),
    en = t | e.baseLanes
}
function or() {
    et(Ns, en),
    et(ki, ki.current)
}
function Oc() {
    en = Ns.current,
    Dt(ki),
    Dt(Ns)
}
var ie = Ue(null)
  , me = null;
function cn(t) {
    var e = t.alternate;
    et(ft, ft.current & 1),
    et(ie, t),
    me === null && (e === null || ki.current !== null || e.memoizedState !== null) && (me = t)
}
function rr(t) {
    et(ft, ft.current),
    et(ie, t),
    me === null && (me = t)
}
function $p(t) {
    t.tag === 22 ? (et(ft, ft.current),
    et(ie, t),
    me === null && (me = t)) : fn()
}
function fn() {
    et(ft, ft.current),
    et(ie, ie.current)
}
function Jt(t) {
    Dt(ie),
    me === t && (me = null),
    Dt(ft)
}
var ft = Ue(0);
function Rs(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || Cr(n) || zr(n)))
                return e
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var $e = 0
  , _ = null
  , P = null
  , mt = null
  , Vs = !1
  , Gi = !1
  , si = !1
  , Us = 0
  , el = 0
  , qi = null
  , bx = 0;
function ot() {
    throw Error(A(321))
}
function jc(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!ne(t[n], e[n]))
            return !1;
    return !0
}
function Nc(t, e, n, i, a, l) {
    return $e = l,
    _ = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    V.H = t === null || t.memoizedState === null ? z0 : Xc,
    si = !1,
    l = n(i, a),
    si = !1,
    Gi && (l = t0(e, n, i, a)),
    Ip(t),
    l
}
function Ip(t) {
    V.H = nl;
    var e = P !== null && P.next !== null;
    if ($e = 0,
    mt = P = _ = null,
    Vs = !1,
    el = 0,
    qi = null,
    e)
        throw Error(A(300));
    t === null || gt || (t = t.dependencies,
    t !== null && Os(t) && (gt = !0))
}
function t0(t, e, n, i) {
    _ = t;
    var a = 0;
    do {
        if (Gi && (qi = null),
        el = 0,
        Gi = !1,
        25 <= a)
            throw Error(A(301));
        if (a += 1,
        mt = P = null,
        t.updateQueue != null) {
            var l = t.updateQueue;
            l.lastEffect = null,
            l.events = null,
            l.stores = null,
            l.memoCache != null && (l.memoCache.index = 0)
        }
        V.H = O0,
        l = e(n, i)
    } while (Gi);
    return l
}
function Sx() {
    var t = V.H
      , e = t.useState()[0];
    return e = typeof e.then == "function" ? xl(e) : e,
    t = t.useState()[0],
    (P !== null ? P.memoizedState : null) !== t && (_.flags |= 1024),
    e
}
function Rc() {
    var t = Us !== 0;
    return Us = 0,
    t
}
function Vc(t, e, n) {
    e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~n
}
function Uc(t) {
    if (Vs) {
        for (t = t.memoizedState; t !== null; ) {
            var e = t.queue;
            e !== null && (e.pending = null),
            t = t.next
        }
        Vs = !1
    }
    $e = 0,
    mt = P = _ = null,
    Gi = !1,
    el = Us = 0,
    qi = null
}
function Rt() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return mt === null ? _.memoizedState = mt = t : mt = mt.next = t,
    mt
}
function dt() {
    if (P === null) {
        var t = _.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = P.next;
    var e = mt === null ? _.memoizedState : mt.next;
    if (e !== null)
        mt = e,
        P = t;
    else {
        if (t === null)
            throw _.alternate === null ? Error(A(467)) : Error(A(310));
        P = t,
        t = {
            memoizedState: P.memoizedState,
            baseState: P.baseState,
            baseQueue: P.baseQueue,
            queue: P.queue,
            next: null
        },
        mt === null ? _.memoizedState = mt = t : mt = mt.next = t
    }
    return mt
}
function vu() {
    return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
    }
}
function xl(t) {
    var e = el;
    return el += 1,
    qi === null && (qi = []),
    t = kp(qi, t, e),
    e = _,
    (mt === null ? e.memoizedState : mt.next) === null && (e = e.alternate,
    V.H = e === null || e.memoizedState === null ? z0 : Xc),
    t
}
function xu(t) {
    if (t !== null && typeof t == "object") {
        if (typeof t.then == "function")
            return xl(t);
        if (t.$$typeof === Ze)
            return Ot(t)
    }
    throw Error(A(438, String(t)))
}
function _c(t) {
    var e = null
      , n = _.updateQueue;
    if (n !== null && (e = n.memoCache),
    e == null) {
        var i = _.alternate;
        i !== null && (i = i.updateQueue,
        i !== null && (i = i.memoCache,
        i != null && (e = {
            data: i.data.map(function(a) {
                return a.slice()
            }),
            index: 0
        })))
    }
    if (e == null && (e = {
        data: [],
        index: 0
    }),
    n === null && (n = vu(),
    _.updateQueue = n),
    n.memoCache = e,
    n = e.data[e.index],
    n === void 0)
        for (n = e.data[e.index] = Array(t),
        i = 0; i < t; i++)
            n[i] = s1;
    return e.index++,
    n
}
function Ie(t, e) {
    return typeof e == "function" ? e(t) : e
}
function ss(t) {
    var e = dt();
    return Bc(e, P, t)
}
function Bc(t, e, n) {
    var i = t.queue;
    if (i === null)
        throw Error(A(311));
    i.lastRenderedReducer = n;
    var a = t.baseQueue
      , l = i.pending;
    if (l !== null) {
        if (a !== null) {
            var s = a.next;
            a.next = l.next,
            l.next = s
        }
        e.baseQueue = a = l,
        i.pending = null
    }
    if (l = t.baseState,
    a === null)
        t.memoizedState = l;
    else {
        e = a.next;
        var u = s = null
          , o = null
          , r = e
          , c = !1;
        do {
            var d = r.lane & -536870913;
            if (d !== r.lane ? (G & d) === d : ($e & d) === d) {
                var f = r.revertLane;
                if (f === 0)
                    o !== null && (o = o.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: r.action,
                        hasEagerState: r.hasEagerState,
                        eagerState: r.eagerState,
                        next: null
                    }),
                    d === Ki && (c = !0);
                else if (($e & f) === f) {
                    r = r.next,
                    f === Ki && (c = !0);
                    continue
                } else
                    d = {
                        lane: 0,
                        revertLane: r.revertLane,
                        gesture: null,
                        action: r.action,
                        hasEagerState: r.hasEagerState,
                        eagerState: r.eagerState,
                        next: null
                    },
                    o === null ? (u = o = d,
                    s = l) : o = o.next = d,
                    _.lanes |= f,
                    Nn |= f;
                d = r.action,
                si && n(l, d),
                l = r.hasEagerState ? r.eagerState : n(l, d)
            } else
                f = {
                    lane: d,
                    revertLane: r.revertLane,
                    gesture: r.gesture,
                    action: r.action,
                    hasEagerState: r.hasEagerState,
                    eagerState: r.eagerState,
                    next: null
                },
                o === null ? (u = o = f,
                s = l) : o = o.next = f,
                _.lanes |= d,
                Nn |= d;
            r = r.next
        } while (r !== null && r !== e);
        if (o === null ? s = l : o.next = u,
        !ne(l, t.memoizedState) && (gt = !0,
        c && (n = Hi,
        n !== null)))
            throw n;
        t.memoizedState = l,
        t.baseState = s,
        t.baseQueue = o,
        i.lastRenderedState = l
    }
    return a === null && (i.lanes = 0),
    [t.memoizedState, i.dispatch]
}
function $u(t) {
    var e = dt()
      , n = e.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch
      , a = n.pending
      , l = e.memoizedState;
    if (a !== null) {
        n.pending = null;
        var s = a = a.next;
        do
            l = t(l, s.action),
            s = s.next;
        while (s !== a);
        ne(l, e.memoizedState) || (gt = !0),
        e.memoizedState = l,
        e.baseQueue === null && (e.baseState = l),
        n.lastRenderedState = l
    }
    return [l, i]
}
function e0(t, e, n) {
    var i = _
      , a = dt()
      , l = q;
    if (l) {
        if (n === void 0)
            throw Error(A(407));
        n = n()
    } else
        n = e();
    var s = !ne((P || a).memoizedState, n);
    if (s && (a.memoizedState = n,
    gt = !0),
    a = a.queue,
    Lc(a0.bind(null, i, a, t), [t]),
    a.getSnapshot !== e || s || mt !== null && mt.memoizedState.tag & 1) {
        if (i.flags |= 2048,
        Ji(9, {
            destroy: void 0
        }, i0.bind(null, i, a, n, e), null),
        $ === null)
            throw Error(A(349));
        l || $e & 127 || n0(i, e, n)
    }
    return n
}
function n0(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = _.updateQueue,
    e === null ? (e = vu(),
    _.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function i0(t, e, n, i) {
    e.value = n,
    e.getSnapshot = i,
    l0(e) && s0(t)
}
function a0(t, e, n) {
    return n(function() {
        l0(e) && s0(t)
    })
}
function l0(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !ne(t, n)
    } catch {
        return !0
    }
}
function s0(t) {
    var e = fi(t, 2);
    e !== null && qt(e, t, 2)
}
function cr(t) {
    var e = Rt();
    if (typeof t == "function") {
        var n = t;
        if (t = n(),
        si) {
            mn(!0);
            try {
                n()
            } finally {
                mn(!1)
            }
        }
    }
    return e.memoizedState = e.baseState = t,
    e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ie,
        lastRenderedState: t
    },
    e
}
function u0(t, e, n, i) {
    return t.baseState = n,
    Bc(t, P, typeof i == "function" ? i : Ie)
}
function Tx(t, e, n, i, a) {
    if (Su(t))
        throw Error(A(485));
    if (t = e.action,
    t !== null) {
        var l = {
            payload: a,
            action: t,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function(s) {
                l.listeners.push(s)
            }
        };
        V.T !== null ? n(!0) : l.isTransition = !1,
        i(l),
        n = e.pending,
        n === null ? (l.next = e.pending = l,
        o0(e, l)) : (l.next = n.next,
        e.pending = n.next = l)
    }
}
function o0(t, e) {
    var n = e.action
      , i = e.payload
      , a = t.state;
    if (e.isTransition) {
        var l = V.T
          , s = {};
        V.T = s;
        try {
            var u = n(a, i)
              , o = V.S;
            o !== null && o(s, u),
            Sd(t, e, u)
        } catch (r) {
            fr(t, e, r)
        } finally {
            l !== null && s.types !== null && (l.types = s.types),
            V.T = l
        }
    } else
        try {
            l = n(a, i),
            Sd(t, e, l)
        } catch (r) {
            fr(t, e, r)
        }
}
function Sd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
        Td(t, e, i)
    }, function(i) {
        return fr(t, e, i)
    }) : Td(t, e, n)
}
function Td(t, e, n) {
    e.status = "fulfilled",
    e.value = n,
    r0(e),
    t.state = n,
    e = t.pending,
    e !== null && (n = e.next,
    n === e ? t.pending = null : (n = n.next,
    e.next = n,
    o0(t, n)))
}
function fr(t, e, n) {
    var i = t.pending;
    if (t.pending = null,
    i !== null) {
        i = i.next;
        do
            e.status = "rejected",
            e.reason = n,
            r0(e),
            e = e.next;
        while (e !== i)
    }
    t.action = null
}
function r0(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++)
        (0,
        t[e])()
}
function c0(t, e) {
    return e
}
function Ad(t, e) {
    if (q) {
        var n = $.formState;
        if (n !== null) {
            t: {
                var i = _;
                if (q) {
                    if (it) {
                        e: {
                            for (var a = it, l = de; a.nodeType !== 8; ) {
                                if (!l) {
                                    a = null;
                                    break e
                                }
                                if (a = pe(a.nextSibling),
                                a === null) {
                                    a = null;
                                    break e
                                }
                            }
                            l = a.data,
                            a = l === "F!" || l === "F" ? a : null
                        }
                        if (a) {
                            it = pe(a.nextSibling),
                            i = a.data === "F!";
                            break t
                        }
                    }
                    On(i)
                }
                i = !1
            }
            i && (e = n[0])
        }
    }
    return n = Rt(),
    n.memoizedState = n.baseState = e,
    i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: c0,
        lastRenderedState: e
    },
    n.queue = i,
    n = D0.bind(null, _, i),
    i.dispatch = n,
    i = cr(!1),
    l = qc.bind(null, _, !1, i.queue),
    i = Rt(),
    a = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
    },
    i.queue = a,
    n = Tx.bind(null, _, a, l, n),
    a.dispatch = n,
    i.memoizedState = t,
    [e, n, !1]
}
function Ed(t) {
    var e = dt();
    return f0(e, P, t)
}
function f0(t, e, n) {
    if (e = Bc(t, e, c0)[0],
    t = ss(Ie)[0],
    typeof e == "object" && e !== null && typeof e.then == "function")
        try {
            var i = xl(e)
        } catch (s) {
            throw s === sa ? gu : s
        }
    else
        i = e;
    e = dt();
    var a = e.queue
      , l = a.dispatch;
    return n !== e.memoizedState && (_.flags |= 2048,
    Ji(9, {
        destroy: void 0
    }, Ax.bind(null, a, n), null)),
    [i, l, t]
}
function Ax(t, e) {
    t.action = e
}
function Md(t) {
    var e = dt()
      , n = P;
    if (n !== null)
        return f0(e, n, t);
    dt(),
    e = e.memoizedState,
    n = dt();
    var i = n.queue.dispatch;
    return n.memoizedState = t,
    [e, i, !1]
}
function Ji(t, e, n, i) {
    return t = {
        tag: t,
        create: n,
        deps: i,
        inst: e,
        next: null
    },
    e = _.updateQueue,
    e === null && (e = vu(),
    _.updateQueue = e),
    n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (i = n.next,
    n.next = t,
    t.next = i,
    e.lastEffect = t),
    t
}
function d0() {
    return dt().memoizedState
}
function us(t, e, n, i) {
    var a = Rt();
    _.flags |= t,
    a.memoizedState = Ji(1 | e, {
        destroy: void 0
    }, n, i === void 0 ? null : i)
}
function bu(t, e, n, i) {
    var a = dt();
    i = i === void 0 ? null : i;
    var l = a.memoizedState.inst;
    P !== null && i !== null && jc(i, P.memoizedState.deps) ? a.memoizedState = Ji(e, l, n, i) : (_.flags |= t,
    a.memoizedState = Ji(1 | e, l, n, i))
}
function Dd(t, e) {
    us(8390656, 8, t, e)
}
function Lc(t, e) {
    bu(2048, 8, t, e)
}
function Ex(t) {
    _.flags |= 4;
    var e = _.updateQueue;
    if (e === null)
        e = vu(),
        _.updateQueue = e,
        e.events = [t];
    else {
        var n = e.events;
        n === null ? e.events = [t] : n.push(t)
    }
}
function h0(t) {
    var e = dt().memoizedState;
    return Ex({
        ref: e,
        nextImpl: t
    }),
    function() {
        if (Z & 2)
            throw Error(A(440));
        return e.impl.apply(void 0, arguments)
    }
}
function m0(t, e) {
    return bu(4, 2, t, e)
}
function p0(t, e) {
    return bu(4, 4, t, e)
}
function y0(t, e) {
    if (typeof e == "function") {
        t = t();
        var n = e(t);
        return function() {
            typeof n == "function" ? n() : e(null)
        }
    }
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function g0(t, e, n) {
    n = n != null ? n.concat([t]) : null,
    bu(4, 4, y0.bind(null, e, t), n)
}
function Hc() {}
function v0(t, e) {
    var n = dt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && jc(e, i[1]) ? i[0] : (n.memoizedState = [t, e],
    t)
}
function x0(t, e) {
    var n = dt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && jc(e, i[1]))
        return i[0];
    if (i = t(),
    si) {
        mn(!0);
        try {
            t()
        } finally {
            mn(!1)
        }
    }
    return n.memoizedState = [i, e],
    i
}
function Yc(t, e, n) {
    return n === void 0 || $e & 1073741824 && !(G & 261930) ? t.memoizedState = e : (t.memoizedState = n,
    t = uy(),
    _.lanes |= t,
    Nn |= t,
    n)
}
function b0(t, e, n, i) {
    return ne(n, e) ? n : ki.current !== null ? (t = Yc(t, n, i),
    ne(t, e) || (gt = !0),
    t) : !($e & 42) || $e & 1073741824 && !(G & 261930) ? (gt = !0,
    t.memoizedState = n) : (t = uy(),
    _.lanes |= t,
    Nn |= t,
    e)
}
function S0(t, e, n, i, a) {
    var l = K.p;
    K.p = l !== 0 && 8 > l ? l : 8;
    var s = V.T
      , u = {};
    V.T = u,
    qc(t, !1, e, n);
    try {
        var o = a()
          , r = V.S;
        if (r !== null && r(u, o),
        o !== null && typeof o == "object" && typeof o.then == "function") {
            var c = xx(o, i);
            _a(t, e, c, te(t))
        } else
            _a(t, e, i, te(t))
    } catch (d) {
        _a(t, e, {
            then: function() {},
            status: "rejected",
            reason: d
        }, te())
    } finally {
        K.p = l,
        s !== null && u.types !== null && (s.types = u.types),
        V.T = s
    }
}
function Mx() {}
function dr(t, e, n, i) {
    if (t.tag !== 5)
        throw Error(A(476));
    var a = T0(t).queue;
    S0(t, a, e, Wn, n === null ? Mx : function() {
        return A0(t),
        n(i)
    }
    )
}
function T0(t) {
    var e = t.memoizedState;
    if (e !== null)
        return e;
    e = {
        memoizedState: Wn,
        baseState: Wn,
        baseQueue: null,
        queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ie,
            lastRenderedState: Wn
        },
        next: null
    };
    var n = {};
    return e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ie,
            lastRenderedState: n
        },
        next: null
    },
    t.memoizedState = e,
    t = t.alternate,
    t !== null && (t.memoizedState = e),
    e
}
function A0(t) {
    var e = T0(t);
    e.next === null && (e = t.alternate.memoizedState),
    _a(t, e.next.queue, {}, te())
}
function Gc() {
    return Ot(ll)
}
function E0() {
    return dt().memoizedState
}
function M0() {
    return dt().memoizedState
}
function Dx(t) {
    for (var e = t.return; e !== null; ) {
        switch (e.tag) {
        case 24:
        case 3:
            var n = te();
            t = Tn(n);
            var i = An(e, t, n);
            i !== null && (qt(i, e, n),
            Ra(i, e, n)),
            e = {
                cache: Dc()
            },
            t.payload = e;
            return
        }
        e = e.return
    }
}
function wx(t, e, n) {
    var i = te();
    n = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Su(t) ? w0(e, n) : (n = Tc(t, e, n, i),
    n !== null && (qt(n, t, i),
    C0(n, e, i)))
}
function D0(t, e, n) {
    var i = te();
    _a(t, e, n, i)
}
function _a(t, e, n, i) {
    var a = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Su(t))
        w0(e, a);
    else {
        var l = t.alternate;
        if (t.lanes === 0 && (l === null || l.lanes === 0) && (l = e.lastRenderedReducer,
        l !== null))
            try {
                var s = e.lastRenderedState
                  , u = l(s, n);
                if (a.hasEagerState = !0,
                a.eagerState = u,
                ne(u, s))
                    return yu(t, e, a, 0),
                    $ === null && pu(),
                    !1
            } catch {} finally {}
        if (n = Tc(t, e, a, i),
        n !== null)
            return qt(n, t, i),
            C0(n, e, i),
            !0
    }
    return !1
}
function qc(t, e, n, i) {
    if (i = {
        lane: 2,
        revertLane: Pc(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Su(t)) {
        if (e)
            throw Error(A(479))
    } else
        e = Tc(t, n, i, 2),
        e !== null && qt(e, t, 2)
}
function Su(t) {
    var e = t.alternate;
    return t === _ || e !== null && e === _
}
function w0(t, e) {
    Gi = Vs = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function C0(t, e, n) {
    if (n & 4194048) {
        var i = e.lanes;
        i &= t.pendingLanes,
        n |= i,
        e.lanes = n,
        hp(t, n)
    }
}
var nl = {
    readContext: Ot,
    use: xu,
    useCallback: ot,
    useContext: ot,
    useEffect: ot,
    useImperativeHandle: ot,
    useLayoutEffect: ot,
    useInsertionEffect: ot,
    useMemo: ot,
    useReducer: ot,
    useRef: ot,
    useState: ot,
    useDebugValue: ot,
    useDeferredValue: ot,
    useTransition: ot,
    useSyncExternalStore: ot,
    useId: ot,
    useHostTransitionStatus: ot,
    useFormState: ot,
    useActionState: ot,
    useOptimistic: ot,
    useMemoCache: ot,
    useCacheRefresh: ot
};
nl.useEffectEvent = ot;
var z0 = {
    readContext: Ot,
    use: xu,
    useCallback: function(t, e) {
        return Rt().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: Ot,
    useEffect: Dd,
    useImperativeHandle: function(t, e, n) {
        n = n != null ? n.concat([t]) : null,
        us(4194308, 4, y0.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return us(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        us(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = Rt();
        e = e === void 0 ? null : e;
        var i = t();
        if (si) {
            mn(!0);
            try {
                t()
            } finally {
                mn(!1)
            }
        }
        return n.memoizedState = [i, e],
        i
    },
    useReducer: function(t, e, n) {
        var i = Rt();
        if (n !== void 0) {
            var a = n(e);
            if (si) {
                mn(!0);
                try {
                    n(e)
                } finally {
                    mn(!1)
                }
            }
        } else
            a = e;
        return i.memoizedState = i.baseState = a,
        t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: a
        },
        i.queue = t,
        t = t.dispatch = wx.bind(null, _, t),
        [i.memoizedState, t]
    },
    useRef: function(t) {
        var e = Rt();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: function(t) {
        t = cr(t);
        var e = t.queue
          , n = D0.bind(null, _, e);
        return e.dispatch = n,
        [t.memoizedState, n]
    },
    useDebugValue: Hc,
    useDeferredValue: function(t, e) {
        var n = Rt();
        return Yc(n, t, e)
    },
    useTransition: function() {
        var t = cr(!1);
        return t = S0.bind(null, _, t.queue, !0, !1),
        Rt().memoizedState = t,
        [!1, t]
    },
    useSyncExternalStore: function(t, e, n) {
        var i = _
          , a = Rt();
        if (q) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = e(),
            $ === null)
                throw Error(A(349));
            G & 127 || n0(i, e, n)
        }
        a.memoizedState = n;
        var l = {
            value: n,
            getSnapshot: e
        };
        return a.queue = l,
        Dd(a0.bind(null, i, l, t), [t]),
        i.flags |= 2048,
        Ji(9, {
            destroy: void 0
        }, i0.bind(null, i, l, n, e), null),
        n
    },
    useId: function() {
        var t = Rt()
          , e = $.identifierPrefix;
        if (q) {
            var n = je
              , i = Oe;
            n = (i & ~(1 << 32 - It(i) - 1)).toString(32) + n,
            e = "_" + e + "R_" + n,
            n = Us++,
            0 < n && (e += "H" + n.toString(32)),
            e += "_"
        } else
            n = bx++,
            e = "_" + e + "r_" + n.toString(32) + "_";
        return t.memoizedState = e
    },
    useHostTransitionStatus: Gc,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(t) {
        var e = Rt();
        e.memoizedState = e.baseState = t;
        var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
        };
        return e.queue = n,
        e = qc.bind(null, _, !0, n),
        n.dispatch = e,
        [t, e]
    },
    useMemoCache: _c,
    useCacheRefresh: function() {
        return Rt().memoizedState = Dx.bind(null, _)
    },
    useEffectEvent: function(t) {
        var e = Rt()
          , n = {
            impl: t
        };
        return e.memoizedState = n,
        function() {
            if (Z & 2)
                throw Error(A(440));
            return n.impl.apply(void 0, arguments)
        }
    }
}
  , Xc = {
    readContext: Ot,
    use: xu,
    useCallback: v0,
    useContext: Ot,
    useEffect: Lc,
    useImperativeHandle: g0,
    useInsertionEffect: m0,
    useLayoutEffect: p0,
    useMemo: x0,
    useReducer: ss,
    useRef: d0,
    useState: function() {
        return ss(Ie)
    },
    useDebugValue: Hc,
    useDeferredValue: function(t, e) {
        var n = dt();
        return b0(n, P.memoizedState, t, e)
    },
    useTransition: function() {
        var t = ss(Ie)[0]
          , e = dt().memoizedState;
        return [typeof t == "boolean" ? t : xl(t), e]
    },
    useSyncExternalStore: e0,
    useId: E0,
    useHostTransitionStatus: Gc,
    useFormState: Ed,
    useActionState: Ed,
    useOptimistic: function(t, e) {
        var n = dt();
        return u0(n, P, t, e)
    },
    useMemoCache: _c,
    useCacheRefresh: M0
};
Xc.useEffectEvent = h0;
var O0 = {
    readContext: Ot,
    use: xu,
    useCallback: v0,
    useContext: Ot,
    useEffect: Lc,
    useImperativeHandle: g0,
    useInsertionEffect: m0,
    useLayoutEffect: p0,
    useMemo: x0,
    useReducer: $u,
    useRef: d0,
    useState: function() {
        return $u(Ie)
    },
    useDebugValue: Hc,
    useDeferredValue: function(t, e) {
        var n = dt();
        return P === null ? Yc(n, t, e) : b0(n, P.memoizedState, t, e)
    },
    useTransition: function() {
        var t = $u(Ie)[0]
          , e = dt().memoizedState;
        return [typeof t == "boolean" ? t : xl(t), e]
    },
    useSyncExternalStore: e0,
    useId: E0,
    useHostTransitionStatus: Gc,
    useFormState: Md,
    useActionState: Md,
    useOptimistic: function(t, e) {
        var n = dt();
        return P !== null ? u0(n, P, t, e) : (n.baseState = t,
        [t, n.queue.dispatch])
    },
    useMemoCache: _c,
    useCacheRefresh: M0
};
O0.useEffectEvent = h0;
function Iu(t, e, n, i) {
    e = t.memoizedState,
    n = n(i, e),
    n = n == null ? e : st({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var hr = {
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var i = te()
          , a = Tn(i);
        a.payload = e,
        n != null && (a.callback = n),
        e = An(t, a, i),
        e !== null && (qt(e, t, i),
        Ra(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var i = te()
          , a = Tn(i);
        a.tag = 1,
        a.payload = e,
        n != null && (a.callback = n),
        e = An(t, a, i),
        e !== null && (qt(e, t, i),
        Ra(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = te()
          , i = Tn(n);
        i.tag = 2,
        e != null && (i.callback = e),
        e = An(t, i, n),
        e !== null && (qt(e, t, n),
        Ra(e, t, n))
    }
};
function wd(t, e, n, i, a, l, s) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, l, s) : e.prototype && e.prototype.isPureReactComponent ? !Pa(n, i) || !Pa(a, l) : !0
}
function Cd(t, e, n, i) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && hr.enqueueReplaceState(e, e.state, null)
}
function ui(t, e) {
    var n = e;
    if ("ref"in e) {
        n = {};
        for (var i in e)
            i !== "ref" && (n[i] = e[i])
    }
    if (t = t.defaultProps) {
        n === e && (n = st({}, n));
        for (var a in t)
            n[a] === void 0 && (n[a] = t[a])
    }
    return n
}
function j0(t) {
    ws(t)
}
function N0(t) {
    console.error(t)
}
function R0(t) {
    ws(t)
}
function _s(t, e) {
    try {
        var n = t.onUncaughtError;
        n(e.value, {
            componentStack: e.stack
        })
    } catch (i) {
        setTimeout(function() {
            throw i
        })
    }
}
function zd(t, e, n) {
    try {
        var i = t.onCaughtError;
        i(n.value, {
            componentStack: n.stack,
            errorBoundary: e.tag === 1 ? e.stateNode : null
        })
    } catch (a) {
        setTimeout(function() {
            throw a
        })
    }
}
function mr(t, e, n) {
    return n = Tn(n),
    n.tag = 3,
    n.payload = {
        element: null
    },
    n.callback = function() {
        _s(t, e)
    }
    ,
    n
}
function V0(t) {
    return t = Tn(t),
    t.tag = 3,
    t
}
function U0(t, e, n, i) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
        var l = i.value;
        t.payload = function() {
            return a(l)
        }
        ,
        t.callback = function() {
            zd(e, n, i)
        }
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
        zd(e, n, i),
        typeof a != "function" && (En === null ? En = new Set([this]) : En.add(this));
        var u = i.stack;
        this.componentDidCatch(i.value, {
            componentStack: u !== null ? u : ""
        })
    }
    )
}
function Cx(t, e, n, i, a) {
    if (n.flags |= 32768,
    i !== null && typeof i == "object" && typeof i.then == "function") {
        if (e = n.alternate,
        e !== null && la(e, n, a, !0),
        n = ie.current,
        n !== null) {
            switch (n.tag) {
            case 31:
            case 13:
                return me === null ? Gs() : n.alternate === null && ct === 0 && (ct = 3),
                n.flags &= -257,
                n.flags |= 65536,
                n.lanes = a,
                i === js ? n.flags |= 16384 : (e = n.updateQueue,
                e === null ? n.updateQueue = new Set([i]) : e.add(i),
                co(t, i, a)),
                !1;
            case 22:
                return n.flags |= 65536,
                i === js ? n.flags |= 16384 : (e = n.updateQueue,
                e === null ? (e = {
                    transitions: null,
                    markerInstances: null,
                    retryQueue: new Set([i])
                },
                n.updateQueue = e) : (n = e.retryQueue,
                n === null ? e.retryQueue = new Set([i]) : n.add(i)),
                co(t, i, a)),
                !1
            }
            throw Error(A(435, n.tag))
        }
        return co(t, i, a),
        Gs(),
        !1
    }
    if (q)
        return e = ie.current,
        e !== null ? (!(e.flags & 65536) && (e.flags |= 256),
        e.flags |= 65536,
        e.lanes = a,
        i !== er && (t = Error(A(422), {
            cause: i
        }),
        Ia(fe(t, n)))) : (i !== er && (e = Error(A(423), {
            cause: i
        }),
        Ia(fe(e, n))),
        t = t.current.alternate,
        t.flags |= 65536,
        a &= -a,
        t.lanes |= a,
        i = fe(i, n),
        a = mr(t.stateNode, i, a),
        Pu(t, a),
        ct !== 4 && (ct = 2)),
        !1;
    var l = Error(A(520), {
        cause: i
    });
    if (l = fe(l, n),
    Ha === null ? Ha = [l] : Ha.push(l),
    ct !== 4 && (ct = 2),
    e === null)
        return !0;
    i = fe(i, n),
    n = e;
    do {
        switch (n.tag) {
        case 3:
            return n.flags |= 65536,
            t = a & -a,
            n.lanes |= t,
            t = mr(n.stateNode, i, t),
            Pu(n, t),
            !1;
        case 1:
            if (e = n.type,
            l = n.stateNode,
            (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || l !== null && typeof l.componentDidCatch == "function" && (En === null || !En.has(l))))
                return n.flags |= 65536,
                a &= -a,
                n.lanes |= a,
                a = V0(a),
                U0(a, t, n, i),
                Pu(n, a),
                !1
        }
        n = n.return
    } while (n !== null);
    return !1
}
var Qc = Error(A(461))
  , gt = !1;
function wt(t, e, n, i) {
    e.child = t === null ? Fp(e, null, n, i) : li(e, t.child, n, i)
}
function Od(t, e, n, i, a) {
    n = n.render;
    var l = e.ref;
    if ("ref"in i) {
        var s = {};
        for (var u in i)
            u !== "ref" && (s[u] = i[u])
    } else
        s = i;
    return ai(e),
    i = Nc(t, e, n, s, l, a),
    u = Rc(),
    t !== null && !gt ? (Vc(t, e, a),
    tn(t, e, a)) : (q && u && Ec(e),
    e.flags |= 1,
    wt(t, e, i, a),
    e.child)
}
function jd(t, e, n, i, a) {
    if (t === null) {
        var l = n.type;
        return typeof l == "function" && !Ac(l) && l.defaultProps === void 0 && n.compare === null ? (e.tag = 15,
        e.type = l,
        _0(t, e, l, i, a)) : (t = as(n.type, null, i, e, e.mode, a),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (l = t.child,
    !Zc(t, a)) {
        var s = l.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Pa,
        n(s, i) && t.ref === e.ref)
            return tn(t, e, a)
    }
    return e.flags |= 1,
    t = Je(l, i),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function _0(t, e, n, i, a) {
    if (t !== null) {
        var l = t.memoizedProps;
        if (Pa(l, i) && t.ref === e.ref)
            if (gt = !1,
            e.pendingProps = i = l,
            Zc(t, a))
                t.flags & 131072 && (gt = !0);
            else
                return e.lanes = t.lanes,
                tn(t, e, a)
    }
    return pr(t, e, n, i, a)
}
function B0(t, e, n, i) {
    var a = i.children
      , l = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
    }),
    i.mode === "hidden") {
        if (e.flags & 128) {
            if (l = l !== null ? l.baseLanes | n : n,
            t !== null) {
                for (i = e.child = t.child,
                a = 0; i !== null; )
                    a = a | i.lanes | i.childLanes,
                    i = i.sibling;
                i = a & ~l
            } else
                i = 0,
                e.child = null;
            return Nd(t, e, l, n, i)
        }
        if (n & 536870912)
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null
            },
            t !== null && ls(e, l !== null ? l.cachePool : null),
            l !== null ? bd(e, l) : or(),
            $p(e);
        else
            return i = e.lanes = 536870912,
            Nd(t, e, l !== null ? l.baseLanes | n : n, n, i)
    } else
        l !== null ? (ls(e, l.cachePool),
        bd(e, l),
        fn(),
        e.memoizedState = null) : (t !== null && ls(e, null),
        or(),
        fn());
    return wt(t, e, a, n),
    e.child
}
function Ea(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
    }),
    e.sibling
}
function Nd(t, e, n, i, a) {
    var l = wc();
    return l = l === null ? null : {
        parent: yt._currentValue,
        pool: l
    },
    e.memoizedState = {
        baseLanes: n,
        cachePool: l
    },
    t !== null && ls(e, null),
    or(),
    $p(e),
    t !== null && la(t, e, i, !0),
    e.childLanes = a,
    null
}
function os(t, e) {
    return e = Bs({
        mode: e.mode,
        children: e.children
    }, t.mode),
    e.ref = t.ref,
    t.child = e,
    e.return = t,
    e
}
function Rd(t, e, n) {
    return li(e, t.child, null, n),
    t = os(e, e.pendingProps),
    t.flags |= 2,
    Jt(e),
    e.memoizedState = null,
    t
}
function zx(t, e, n) {
    var i = e.pendingProps
      , a = (e.flags & 128) !== 0;
    if (e.flags &= -129,
    t === null) {
        if (q) {
            if (i.mode === "hidden")
                return t = os(e, i),
                e.lanes = 536870912,
                Ea(null, t);
            if (rr(e),
            (t = it) ? (t = zy(t, de),
            t = t !== null && t.data === "&" ? t : null,
            t !== null && (e.memoizedState = {
                dehydrated: t,
                treeContext: zn !== null ? {
                    id: Oe,
                    overflow: je
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
            },
            n = qp(t),
            n.return = e,
            e.child = n,
            zt = e,
            it = null)) : t = null,
            t === null)
                throw On(e);
            return e.lanes = 536870912,
            null
        }
        return os(e, i)
    }
    var l = t.memoizedState;
    if (l !== null) {
        var s = l.dehydrated;
        if (rr(e),
        a)
            if (e.flags & 256)
                e.flags &= -257,
                e = Rd(t, e, n);
            else if (e.memoizedState !== null)
                e.child = t.child,
                e.flags |= 128,
                e = null;
            else
                throw Error(A(558));
        else if (gt || la(t, e, n, !1),
        a = (n & t.childLanes) !== 0,
        gt || a) {
            if (i = $,
            i !== null && (s = mp(i, n),
            s !== 0 && s !== l.retryLane))
                throw l.retryLane = s,
                fi(t, s),
                qt(i, t, s),
                Qc;
            Gs(),
            e = Rd(t, e, n)
        } else
            t = l.treeContext,
            it = pe(s.nextSibling),
            zt = e,
            q = !0,
            Sn = null,
            de = !1,
            t !== null && Qp(e, t),
            e = os(e, i),
            e.flags |= 4096;
        return e
    }
    return t = Je(t.child, {
        mode: i.mode,
        children: i.children
    }),
    t.ref = e.ref,
    e.child = t,
    t.return = e,
    t
}
function rs(t, e) {
    var n = e.ref;
    if (n === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
        if (typeof n != "function" && typeof n != "object")
            throw Error(A(284));
        (t === null || t.ref !== n) && (e.flags |= 4194816)
    }
}
function pr(t, e, n, i, a) {
    return ai(e),
    n = Nc(t, e, n, i, void 0, a),
    i = Rc(),
    t !== null && !gt ? (Vc(t, e, a),
    tn(t, e, a)) : (q && i && Ec(e),
    e.flags |= 1,
    wt(t, e, n, a),
    e.child)
}
function Vd(t, e, n, i, a, l) {
    return ai(e),
    e.updateQueue = null,
    n = t0(e, i, n, a),
    Ip(t),
    i = Rc(),
    t !== null && !gt ? (Vc(t, e, l),
    tn(t, e, l)) : (q && i && Ec(e),
    e.flags |= 1,
    wt(t, e, n, l),
    e.child)
}
function Ud(t, e, n, i, a) {
    if (ai(e),
    e.stateNode === null) {
        var l = zi
          , s = n.contextType;
        typeof s == "object" && s !== null && (l = Ot(s)),
        l = new n(i,l),
        e.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        l.updater = hr,
        e.stateNode = l,
        l._reactInternals = e,
        l = e.stateNode,
        l.props = i,
        l.state = e.memoizedState,
        l.refs = {},
        zc(e),
        s = n.contextType,
        l.context = typeof s == "object" && s !== null ? Ot(s) : zi,
        l.state = e.memoizedState,
        s = n.getDerivedStateFromProps,
        typeof s == "function" && (Iu(e, n, s, i),
        l.state = e.memoizedState),
        typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (s = l.state,
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
        s !== l.state && hr.enqueueReplaceState(l, l.state, null),
        Ua(e, i, l, a),
        Va(),
        l.state = e.memoizedState),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308),
        i = !0
    } else if (t === null) {
        l = e.stateNode;
        var u = e.memoizedProps
          , o = ui(n, u);
        l.props = o;
        var r = l.context
          , c = n.contextType;
        s = zi,
        typeof c == "object" && c !== null && (s = Ot(c));
        var d = n.getDerivedStateFromProps;
        c = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function",
        u = e.pendingProps !== u,
        c || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u || r !== s) && Cd(e, l, i, s),
        on = !1;
        var f = e.memoizedState;
        l.state = f,
        Ua(e, i, l, a),
        Va(),
        r = e.memoizedState,
        u || f !== r || on ? (typeof d == "function" && (Iu(e, n, d, i),
        r = e.memoizedState),
        (o = on || wd(e, n, o, i, f, r, s)) ? (c || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = i,
        e.memoizedState = r),
        l.props = i,
        l.state = r,
        l.context = s,
        i = o) : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
        i = !1)
    } else {
        l = e.stateNode,
        sr(t, e),
        s = e.memoizedProps,
        c = ui(n, s),
        l.props = c,
        d = e.pendingProps,
        f = l.context,
        r = n.contextType,
        o = zi,
        typeof r == "object" && r !== null && (o = Ot(r)),
        u = n.getDerivedStateFromProps,
        (r = typeof u == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || f !== o) && Cd(e, l, i, o),
        on = !1,
        f = e.memoizedState,
        l.state = f,
        Ua(e, i, l, a),
        Va();
        var h = e.memoizedState;
        s !== d || f !== h || on || t !== null && t.dependencies !== null && Os(t.dependencies) ? (typeof u == "function" && (Iu(e, n, u, i),
        h = e.memoizedState),
        (c = on || wd(e, n, c, i, f, h, o) || t !== null && t.dependencies !== null && Os(t.dependencies)) ? (r || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(i, h, o),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(i, h, o)),
        typeof l.componentDidUpdate == "function" && (e.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = i,
        e.memoizedState = h),
        l.props = i,
        l.state = h,
        l.context = o,
        i = c) : (typeof l.componentDidUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && f === t.memoizedState || (e.flags |= 1024),
        i = !1)
    }
    return l = i,
    rs(t, e),
    i = (e.flags & 128) !== 0,
    l || i ? (l = e.stateNode,
    n = i && typeof n.getDerivedStateFromError != "function" ? null : l.render(),
    e.flags |= 1,
    t !== null && i ? (e.child = li(e, t.child, null, a),
    e.child = li(e, null, n, a)) : wt(t, e, n, a),
    e.memoizedState = l.state,
    t = e.child) : t = tn(t, e, a),
    t
}
function _d(t, e, n, i) {
    return ii(),
    e.flags |= 256,
    wt(t, e, n, i),
    e.child
}
var to = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
};
function eo(t) {
    return {
        baseLanes: t,
        cachePool: Kp()
    }
}
function no(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0,
    e && (t |= Wt),
    t
}
function L0(t, e, n) {
    var i = e.pendingProps, a = !1, l = (e.flags & 128) !== 0, s;
    if ((s = l) || (s = t !== null && t.memoizedState === null ? !1 : (ft.current & 2) !== 0),
    s && (a = !0,
    e.flags &= -129),
    s = (e.flags & 32) !== 0,
    e.flags &= -33,
    t === null) {
        if (q) {
            if (a ? cn(e) : fn(),
            (t = it) ? (t = zy(t, de),
            t = t !== null && t.data !== "&" ? t : null,
            t !== null && (e.memoizedState = {
                dehydrated: t,
                treeContext: zn !== null ? {
                    id: Oe,
                    overflow: je
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
            },
            n = qp(t),
            n.return = e,
            e.child = n,
            zt = e,
            it = null)) : t = null,
            t === null)
                throw On(e);
            return zr(t) ? e.lanes = 32 : e.lanes = 536870912,
            null
        }
        var u = i.children;
        return i = i.fallback,
        a ? (fn(),
        a = e.mode,
        u = Bs({
            mode: "hidden",
            children: u
        }, a),
        i = Pn(i, a, n, null),
        u.return = e,
        i.return = e,
        u.sibling = i,
        e.child = u,
        i = e.child,
        i.memoizedState = eo(n),
        i.childLanes = no(t, s, n),
        e.memoizedState = to,
        Ea(null, i)) : (cn(e),
        yr(e, u))
    }
    var o = t.memoizedState;
    if (o !== null && (u = o.dehydrated,
    u !== null)) {
        if (l)
            e.flags & 256 ? (cn(e),
            e.flags &= -257,
            e = io(t, e, n)) : e.memoizedState !== null ? (fn(),
            e.child = t.child,
            e.flags |= 128,
            e = null) : (fn(),
            u = i.fallback,
            a = e.mode,
            i = Bs({
                mode: "visible",
                children: i.children
            }, a),
            u = Pn(u, a, n, null),
            u.flags |= 2,
            i.return = e,
            u.return = e,
            i.sibling = u,
            e.child = i,
            li(e, t.child, null, n),
            i = e.child,
            i.memoizedState = eo(n),
            i.childLanes = no(t, s, n),
            e.memoizedState = to,
            e = Ea(null, i));
        else if (cn(e),
        zr(u)) {
            if (s = u.nextSibling && u.nextSibling.dataset,
            s)
                var r = s.dgst;
            s = r,
            i = Error(A(419)),
            i.stack = "",
            i.digest = s,
            Ia({
                value: i,
                source: null,
                stack: null
            }),
            e = io(t, e, n)
        } else if (gt || la(t, e, n, !1),
        s = (n & t.childLanes) !== 0,
        gt || s) {
            if (s = $,
            s !== null && (i = mp(s, n),
            i !== 0 && i !== o.retryLane))
                throw o.retryLane = i,
                fi(t, i),
                qt(s, t, i),
                Qc;
            Cr(u) || Gs(),
            e = io(t, e, n)
        } else
            Cr(u) ? (e.flags |= 192,
            e.child = t.child,
            e = null) : (t = o.treeContext,
            it = pe(u.nextSibling),
            zt = e,
            q = !0,
            Sn = null,
            de = !1,
            t !== null && Qp(e, t),
            e = yr(e, i.children),
            e.flags |= 4096);
        return e
    }
    return a ? (fn(),
    u = i.fallback,
    a = e.mode,
    o = t.child,
    r = o.sibling,
    i = Je(o, {
        mode: "hidden",
        children: i.children
    }),
    i.subtreeFlags = o.subtreeFlags & 65011712,
    r !== null ? u = Je(r, u) : (u = Pn(u, a, n, null),
    u.flags |= 2),
    u.return = e,
    i.return = e,
    i.sibling = u,
    e.child = i,
    Ea(null, i),
    i = e.child,
    u = t.child.memoizedState,
    u === null ? u = eo(n) : (a = u.cachePool,
    a !== null ? (o = yt._currentValue,
    a = a.parent !== o ? {
        parent: o,
        pool: o
    } : a) : a = Kp(),
    u = {
        baseLanes: u.baseLanes | n,
        cachePool: a
    }),
    i.memoizedState = u,
    i.childLanes = no(t, s, n),
    e.memoizedState = to,
    Ea(t.child, i)) : (cn(e),
    n = t.child,
    t = n.sibling,
    n = Je(n, {
        mode: "visible",
        children: i.children
    }),
    n.return = e,
    n.sibling = null,
    t !== null && (s = e.deletions,
    s === null ? (e.deletions = [t],
    e.flags |= 16) : s.push(t)),
    e.child = n,
    e.memoizedState = null,
    n)
}
function yr(t, e) {
    return e = Bs({
        mode: "visible",
        children: e
    }, t.mode),
    e.return = t,
    t.child = e
}
function Bs(t, e) {
    return t = Ft(22, t, null, e),
    t.lanes = 0,
    t
}
function io(t, e, n) {
    return li(e, t.child, null, n),
    t = yr(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Bd(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e),
    ir(t.return, e, n)
}
function ao(t, e, n, i, a, l) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: a,
        treeForkCount: l
    } : (s.isBackwards = e,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = i,
    s.tail = n,
    s.tailMode = a,
    s.treeForkCount = l)
}
function H0(t, e, n) {
    var i = e.pendingProps
      , a = i.revealOrder
      , l = i.tail;
    i = i.children;
    var s = ft.current
      , u = (s & 2) !== 0;
    if (u ? (s = s & 1 | 2,
    e.flags |= 128) : s &= 1,
    et(ft, s),
    wt(t, e, i, n),
    i = q ? $a : 0,
    !u && t !== null && t.flags & 128)
        t: for (t = e.child; t !== null; ) {
            if (t.tag === 13)
                t.memoizedState !== null && Bd(t, n, e);
            else if (t.tag === 19)
                Bd(t, n, e);
            else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break t;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    break t;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    switch (a) {
    case "forwards":
        for (n = e.child,
        a = null; n !== null; )
            t = n.alternate,
            t !== null && Rs(t) === null && (a = n),
            n = n.sibling;
        n = a,
        n === null ? (a = e.child,
        e.child = null) : (a = n.sibling,
        n.sibling = null),
        ao(e, !1, a, n, l, i);
        break;
    case "backwards":
    case "unstable_legacy-backwards":
        for (n = null,
        a = e.child,
        e.child = null; a !== null; ) {
            if (t = a.alternate,
            t !== null && Rs(t) === null) {
                e.child = a;
                break
            }
            t = a.sibling,
            a.sibling = n,
            n = a,
            a = t
        }
        ao(e, !0, n, null, l, i);
        break;
    case "together":
        ao(e, !1, null, null, void 0, i);
        break;
    default:
        e.memoizedState = null
    }
    return e.child
}
function tn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    Nn |= e.lanes,
    !(n & e.childLanes))
        if (t !== null) {
            if (la(t, e, n, !1),
            (n & e.childLanes) === 0)
                return null
        } else
            return null;
    if (t !== null && e.child !== t.child)
        throw Error(A(153));
    if (e.child !== null) {
        for (t = e.child,
        n = Je(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = Je(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function Zc(t, e) {
    return t.lanes & e ? !0 : (t = t.dependencies,
    !!(t !== null && Os(t)))
}
function Ox(t, e, n) {
    switch (e.tag) {
    case 3:
        As(e, e.stateNode.containerInfo),
        rn(e, yt, t.memoizedState.cache),
        ii();
        break;
    case 27:
    case 5:
        Qo(e);
        break;
    case 4:
        As(e, e.stateNode.containerInfo);
        break;
    case 10:
        rn(e, e.type, e.memoizedProps.value);
        break;
    case 31:
        if (e.memoizedState !== null)
            return e.flags |= 128,
            rr(e),
            null;
        break;
    case 13:
        var i = e.memoizedState;
        if (i !== null)
            return i.dehydrated !== null ? (cn(e),
            e.flags |= 128,
            null) : n & e.child.childLanes ? L0(t, e, n) : (cn(e),
            t = tn(t, e, n),
            t !== null ? t.sibling : null);
        cn(e);
        break;
    case 19:
        var a = (t.flags & 128) !== 0;
        if (i = (n & e.childLanes) !== 0,
        i || (la(t, e, n, !1),
        i = (n & e.childLanes) !== 0),
        a) {
            if (i)
                return H0(t, e, n);
            e.flags |= 128
        }
        if (a = e.memoizedState,
        a !== null && (a.rendering = null,
        a.tail = null,
        a.lastEffect = null),
        et(ft, ft.current),
        i)
            break;
        return null;
    case 22:
        return e.lanes = 0,
        B0(t, e, n, e.pendingProps);
    case 24:
        rn(e, yt, t.memoizedState.cache)
    }
    return tn(t, e, n)
}
function Y0(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps)
            gt = !0;
        else {
            if (!Zc(t, n) && !(e.flags & 128))
                return gt = !1,
                Ox(t, e, n);
            gt = !!(t.flags & 131072)
        }
    else
        gt = !1,
        q && e.flags & 1048576 && Xp(e, $a, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 16:
        t: {
            var i = e.pendingProps;
            if (t = Zn(e.elementType),
            e.type = t,
            typeof t == "function")
                Ac(t) ? (i = ui(t, i),
                e.tag = 1,
                e = Ud(null, e, t, i, n)) : (e.tag = 0,
                e = pr(null, e, t, i, n));
            else {
                if (t != null) {
                    var a = t.$$typeof;
                    if (a === rc) {
                        e.tag = 11,
                        e = Od(null, e, t, i, n);
                        break t
                    } else if (a === cc) {
                        e.tag = 14,
                        e = jd(null, e, t, i, n);
                        break t
                    }
                }
                throw e = qo(t) || t,
                Error(A(306, e, ""))
            }
        }
        return e;
    case 0:
        return pr(t, e, e.type, e.pendingProps, n);
    case 1:
        return i = e.type,
        a = ui(i, e.pendingProps),
        Ud(t, e, i, a, n);
    case 3:
        t: {
            if (As(e, e.stateNode.containerInfo),
            t === null)
                throw Error(A(387));
            i = e.pendingProps;
            var l = e.memoizedState;
            a = l.element,
            sr(t, e),
            Ua(e, i, null, n);
            var s = e.memoizedState;
            if (i = s.cache,
            rn(e, yt, i),
            i !== l.cache && ar(e, [yt], n, !0),
            Va(),
            i = s.element,
            l.isDehydrated)
                if (l = {
                    element: i,
                    isDehydrated: !1,
                    cache: s.cache
                },
                e.updateQueue.baseState = l,
                e.memoizedState = l,
                e.flags & 256) {
                    e = _d(t, e, i, n);
                    break t
                } else if (i !== a) {
                    a = fe(Error(A(424)), e),
                    Ia(a),
                    e = _d(t, e, i, n);
                    break t
                } else {
                    switch (t = e.stateNode.containerInfo,
                    t.nodeType) {
                    case 9:
                        t = t.body;
                        break;
                    default:
                        t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                    }
                    for (it = pe(t.firstChild),
                    zt = e,
                    q = !0,
                    Sn = null,
                    de = !0,
                    n = Fp(e, null, i, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling
                }
            else {
                if (ii(),
                i === a) {
                    e = tn(t, e, n);
                    break t
                }
                wt(t, e, i, n)
            }
            e = e.child
        }
        return e;
    case 26:
        return rs(t, e),
        t === null ? (n = ih(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : q || (n = e.type,
        t = e.pendingProps,
        i = Zs(bn.current).createElement(n),
        i[Ct] = e,
        i[Qt] = t,
        Nt(i, n, t),
        Mt(i),
        e.stateNode = i) : e.memoizedState = ih(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
        null;
    case 27:
        return Qo(e),
        t === null && q && (i = e.stateNode = Oy(e.type, e.pendingProps, bn.current),
        zt = e,
        de = !0,
        a = it,
        _n(e.type) ? (Or = a,
        it = pe(i.firstChild)) : it = a),
        wt(t, e, e.pendingProps.children, n),
        rs(t, e),
        t === null && (e.flags |= 4194304),
        e.child;
    case 5:
        return t === null && q && ((a = i = it) && (i = sb(i, e.type, e.pendingProps, de),
        i !== null ? (e.stateNode = i,
        zt = e,
        it = pe(i.firstChild),
        de = !1,
        a = !0) : a = !1),
        a || On(e)),
        Qo(e),
        a = e.type,
        l = e.pendingProps,
        s = t !== null ? t.memoizedProps : null,
        i = l.children,
        Dr(a, l) ? i = null : s !== null && Dr(a, s) && (e.flags |= 32),
        e.memoizedState !== null && (a = Nc(t, e, Sx, null, null, n),
        ll._currentValue = a),
        rs(t, e),
        wt(t, e, i, n),
        e.child;
    case 6:
        return t === null && q && ((t = n = it) && (n = ub(n, e.pendingProps, de),
        n !== null ? (e.stateNode = n,
        zt = e,
        it = null,
        t = !0) : t = !1),
        t || On(e)),
        null;
    case 13:
        return L0(t, e, n);
    case 4:
        return As(e, e.stateNode.containerInfo),
        i = e.pendingProps,
        t === null ? e.child = li(e, null, i, n) : wt(t, e, i, n),
        e.child;
    case 11:
        return Od(t, e, e.type, e.pendingProps, n);
    case 7:
        return wt(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return wt(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return wt(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        return i = e.pendingProps,
        rn(e, e.type, i.value),
        wt(t, e, i.children, n),
        e.child;
    case 9:
        return a = e.type._context,
        i = e.pendingProps.children,
        ai(e),
        a = Ot(a),
        i = i(a),
        e.flags |= 1,
        wt(t, e, i, n),
        e.child;
    case 14:
        return jd(t, e, e.type, e.pendingProps, n);
    case 15:
        return _0(t, e, e.type, e.pendingProps, n);
    case 19:
        return H0(t, e, n);
    case 31:
        return zx(t, e, n);
    case 22:
        return B0(t, e, n, e.pendingProps);
    case 24:
        return ai(e),
        i = Ot(yt),
        t === null ? (a = wc(),
        a === null && (a = $,
        l = Dc(),
        a.pooledCache = l,
        l.refCount++,
        l !== null && (a.pooledCacheLanes |= n),
        a = l),
        e.memoizedState = {
            parent: i,
            cache: a
        },
        zc(e),
        rn(e, yt, a)) : (t.lanes & n && (sr(t, e),
        Ua(e, null, null, n),
        Va()),
        a = t.memoizedState,
        l = e.memoizedState,
        a.parent !== i ? (a = {
            parent: i,
            cache: i
        },
        e.memoizedState = a,
        e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a),
        rn(e, yt, i)) : (i = l.cache,
        rn(e, yt, i),
        i !== a.cache && ar(e, [yt], n, !0))),
        wt(t, e, e.pendingProps.children, n),
        e.child;
    case 29:
        throw e.pendingProps
    }
    throw Error(A(156, e.tag))
}
function Le(t) {
    t.flags |= 4
}
function lo(t, e, n, i, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1),
    e) {
        if (t.flags |= 16777216,
        (a & 335544128) === a)
            if (t.stateNode.complete)
                t.flags |= 8192;
            else if (cy())
                t.flags |= 8192;
            else
                throw In = js,
                Cc
    } else
        t.flags &= -16777217
}
function Ld(t, e) {
    if (e.type !== "stylesheet" || e.state.loading & 4)
        t.flags &= -16777217;
    else if (t.flags |= 16777216,
    !Ry(e))
        if (cy())
            t.flags |= 8192;
        else
            throw In = js,
            Cc
}
function Hl(t, e) {
    e !== null && (t.flags |= 4),
    t.flags & 16384 && (e = t.tag !== 22 ? fp() : 536870912,
    t.lanes |= e,
    Fi |= e)
}
function ga(t, e) {
    if (!q)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var i = null; n !== null; )
                n.alternate !== null && (i = n),
                n = n.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
        }
}
function nt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , i = 0;
    if (e)
        for (var a = t.child; a !== null; )
            n |= a.lanes | a.childLanes,
            i |= a.subtreeFlags & 65011712,
            i |= a.flags & 65011712,
            a.return = t,
            a = a.sibling;
    else
        for (a = t.child; a !== null; )
            n |= a.lanes | a.childLanes,
            i |= a.subtreeFlags,
            i |= a.flags,
            a.return = t,
            a = a.sibling;
    return t.subtreeFlags |= i,
    t.childLanes = n,
    e
}
function jx(t, e, n) {
    var i = e.pendingProps;
    switch (Mc(e),
    e.tag) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return nt(e),
        null;
    case 1:
        return nt(e),
        null;
    case 3:
        return n = e.stateNode,
        i = null,
        t !== null && (i = t.memoizedState.cache),
        e.memoizedState.cache !== i && (e.flags |= 2048),
        Fe(yt),
        Xi(),
        n.pendingContext && (n.context = n.pendingContext,
        n.pendingContext = null),
        (t === null || t.child === null) && (mi(e) ? Le(e) : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        Wu())),
        nt(e),
        null;
    case 26:
        var a = e.type
          , l = e.memoizedState;
        return t === null ? (Le(e),
        l !== null ? (nt(e),
        Ld(e, l)) : (nt(e),
        lo(e, a, null, i, n))) : l ? l !== t.memoizedState ? (Le(e),
        nt(e),
        Ld(e, l)) : (nt(e),
        e.flags &= -16777217) : (t = t.memoizedProps,
        t !== i && Le(e),
        nt(e),
        lo(e, a, t, i, n)),
        null;
    case 27:
        if (Es(e),
        n = bn.current,
        a = e.type,
        t !== null && e.stateNode != null)
            t.memoizedProps !== i && Le(e);
        else {
            if (!i) {
                if (e.stateNode === null)
                    throw Error(A(166));
                return nt(e),
                null
            }
            t = Re.current,
            mi(e) ? hd(e) : (t = Oy(a, i, n),
            e.stateNode = t,
            Le(e))
        }
        return nt(e),
        null;
    case 5:
        if (Es(e),
        a = e.type,
        t !== null && e.stateNode != null)
            t.memoizedProps !== i && Le(e);
        else {
            if (!i) {
                if (e.stateNode === null)
                    throw Error(A(166));
                return nt(e),
                null
            }
            if (l = Re.current,
            mi(e))
                hd(e);
            else {
                var s = Zs(bn.current);
                switch (l) {
                case 1:
                    l = s.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                case 2:
                    l = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                    break;
                default:
                    switch (a) {
                    case "svg":
                        l = s.createElementNS("http://www.w3.org/2000/svg", a);
                        break;
                    case "math":
                        l = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                        break;
                    case "script":
                        l = s.createElement("div"),
                        l.innerHTML = "<script><\/script>",
                        l = l.removeChild(l.firstChild);
                        break;
                    case "select":
                        l = typeof i.is == "string" ? s.createElement("select", {
                            is: i.is
                        }) : s.createElement("select"),
                        i.multiple ? l.multiple = !0 : i.size && (l.size = i.size);
                        break;
                    default:
                        l = typeof i.is == "string" ? s.createElement(a, {
                            is: i.is
                        }) : s.createElement(a)
                    }
                }
                l[Ct] = e,
                l[Qt] = i;
                t: for (s = e.child; s !== null; ) {
                    if (s.tag === 5 || s.tag === 6)
                        l.appendChild(s.stateNode);
                    else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                        s.child.return = s,
                        s = s.child;
                        continue
                    }
                    if (s === e)
                        break t;
                    for (; s.sibling === null; ) {
                        if (s.return === null || s.return === e)
                            break t;
                        s = s.return
                    }
                    s.sibling.return = s.return,
                    s = s.sibling
                }
                e.stateNode = l;
                t: switch (Nt(l, a, i),
                a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    i = !!i.autoFocus;
                    break t;
                case "img":
                    i = !0;
                    break t;
                default:
                    i = !1
                }
                i && Le(e)
            }
        }
        return nt(e),
        lo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
        null;
    case 6:
        if (t && e.stateNode != null)
            t.memoizedProps !== i && Le(e);
        else {
            if (typeof i != "string" && e.stateNode === null)
                throw Error(A(166));
            if (t = bn.current,
            mi(e)) {
                if (t = e.stateNode,
                n = e.memoizedProps,
                i = null,
                a = zt,
                a !== null)
                    switch (a.tag) {
                    case 27:
                    case 5:
                        i = a.memoizedProps
                    }
                t[Ct] = e,
                t = !!(t.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Dy(t.nodeValue, n)),
                t || On(e, !0)
            } else
                t = Zs(t).createTextNode(i),
                t[Ct] = e,
                e.stateNode = t
        }
        return nt(e),
        null;
    case 31:
        if (n = e.memoizedState,
        t === null || t.memoizedState !== null) {
            if (i = mi(e),
            n !== null) {
                if (t === null) {
                    if (!i)
                        throw Error(A(318));
                    if (t = e.memoizedState,
                    t = t !== null ? t.dehydrated : null,
                    !t)
                        throw Error(A(557));
                    t[Ct] = e
                } else
                    ii(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                nt(e),
                t = !1
            } else
                n = Wu(),
                t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                t = !0;
            if (!t)
                return e.flags & 256 ? (Jt(e),
                e) : (Jt(e),
                null);
            if (e.flags & 128)
                throw Error(A(558))
        }
        return nt(e),
        null;
    case 13:
        if (i = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (a = mi(e),
            i !== null && i.dehydrated !== null) {
                if (t === null) {
                    if (!a)
                        throw Error(A(318));
                    if (a = e.memoizedState,
                    a = a !== null ? a.dehydrated : null,
                    !a)
                        throw Error(A(317));
                    a[Ct] = e
                } else
                    ii(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                nt(e),
                a = !1
            } else
                a = Wu(),
                t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                a = !0;
            if (!a)
                return e.flags & 256 ? (Jt(e),
                e) : (Jt(e),
                null)
        }
        return Jt(e),
        e.flags & 128 ? (e.lanes = n,
        e) : (n = i !== null,
        t = t !== null && t.memoizedState !== null,
        n && (i = e.child,
        a = null,
        i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool),
        l = null,
        i.memoizedState !== null && i.memoizedState.cachePool !== null && (l = i.memoizedState.cachePool.pool),
        l !== a && (i.flags |= 2048)),
        n !== t && n && (e.child.flags |= 8192),
        Hl(e, e.updateQueue),
        nt(e),
        null);
    case 4:
        return Xi(),
        t === null && $c(e.stateNode.containerInfo),
        nt(e),
        null;
    case 10:
        return Fe(e.type),
        nt(e),
        null;
    case 19:
        if (Dt(ft),
        i = e.memoizedState,
        i === null)
            return nt(e),
            null;
        if (a = (e.flags & 128) !== 0,
        l = i.rendering,
        l === null)
            if (a)
                ga(i, !1);
            else {
                if (ct !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (l = Rs(t),
                        l !== null) {
                            for (e.flags |= 128,
                            ga(i, !1),
                            t = l.updateQueue,
                            e.updateQueue = t,
                            Hl(e, t),
                            e.subtreeFlags = 0,
                            t = n,
                            n = e.child; n !== null; )
                                Gp(n, t),
                                n = n.sibling;
                            return et(ft, ft.current & 1 | 2),
                            q && Xe(e, i.treeForkCount),
                            e.child
                        }
                        t = t.sibling
                    }
                i.tail !== null && Pt() > Hs && (e.flags |= 128,
                a = !0,
                ga(i, !1),
                e.lanes = 4194304)
            }
        else {
            if (!a)
                if (t = Rs(l),
                t !== null) {
                    if (e.flags |= 128,
                    a = !0,
                    t = t.updateQueue,
                    e.updateQueue = t,
                    Hl(e, t),
                    ga(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !l.alternate && !q)
                        return nt(e),
                        null
                } else
                    2 * Pt() - i.renderingStartTime > Hs && n !== 536870912 && (e.flags |= 128,
                    a = !0,
                    ga(i, !1),
                    e.lanes = 4194304);
            i.isBackwards ? (l.sibling = e.child,
            e.child = l) : (t = i.last,
            t !== null ? t.sibling = l : e.child = l,
            i.last = l)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Pt(),
        t.sibling = null,
        n = ft.current,
        et(ft, a ? n & 1 | 2 : n & 1),
        q && Xe(e, i.treeForkCount),
        t) : (nt(e),
        null);
    case 22:
    case 23:
        return Jt(e),
        Oc(),
        i = e.memoizedState !== null,
        t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192),
        i ? n & 536870912 && !(e.flags & 128) && (nt(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : nt(e),
        n = e.updateQueue,
        n !== null && Hl(e, n.retryQueue),
        n = null,
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
        i = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
        i !== n && (e.flags |= 2048),
        t !== null && Dt($n),
        null;
    case 24:
        return n = null,
        t !== null && (n = t.memoizedState.cache),
        e.memoizedState.cache !== n && (e.flags |= 2048),
        Fe(yt),
        nt(e),
        null;
    case 25:
        return null;
    case 30:
        return null
    }
    throw Error(A(156, e.tag))
}
function Nx(t, e) {
    switch (Mc(e),
    e.tag) {
    case 1:
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Fe(yt),
        Xi(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 26:
    case 27:
    case 5:
        return Es(e),
        null;
    case 31:
        if (e.memoizedState !== null) {
            if (Jt(e),
            e.alternate === null)
                throw Error(A(340));
            ii()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 13:
        if (Jt(e),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(A(340));
            ii()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return Dt(ft),
        null;
    case 4:
        return Xi(),
        null;
    case 10:
        return Fe(e.type),
        null;
    case 22:
    case 23:
        return Jt(e),
        Oc(),
        t !== null && Dt($n),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 24:
        return Fe(yt),
        null;
    case 25:
        return null;
    default:
        return null
    }
}
function G0(t, e) {
    switch (Mc(e),
    e.tag) {
    case 3:
        Fe(yt),
        Xi();
        break;
    case 26:
    case 27:
    case 5:
        Es(e);
        break;
    case 4:
        Xi();
        break;
    case 31:
        e.memoizedState !== null && Jt(e);
        break;
    case 13:
        Jt(e);
        break;
    case 19:
        Dt(ft);
        break;
    case 10:
        Fe(e.type);
        break;
    case 22:
    case 23:
        Jt(e),
        Oc(),
        t !== null && Dt($n);
        break;
    case 24:
        Fe(yt)
    }
}
function bl(t, e) {
    try {
        var n = e.updateQueue
          , i = n !== null ? n.lastEffect : null;
        if (i !== null) {
            var a = i.next;
            n = a;
            do {
                if ((n.tag & t) === t) {
                    i = void 0;
                    var l = n.create
                      , s = n.inst;
                    i = l(),
                    s.destroy = i
                }
                n = n.next
            } while (n !== a)
        }
    } catch (u) {
        F(e, e.return, u)
    }
}
function jn(t, e, n) {
    try {
        var i = e.updateQueue
          , a = i !== null ? i.lastEffect : null;
        if (a !== null) {
            var l = a.next;
            i = l;
            do {
                if ((i.tag & t) === t) {
                    var s = i.inst
                      , u = s.destroy;
                    if (u !== void 0) {
                        s.destroy = void 0,
                        a = e;
                        var o = n
                          , r = u;
                        try {
                            r()
                        } catch (c) {
                            F(a, o, c)
                        }
                    }
                }
                i = i.next
            } while (i !== l)
        }
    } catch (c) {
        F(e, e.return, c)
    }
}
function q0(t) {
    var e = t.updateQueue;
    if (e !== null) {
        var n = t.stateNode;
        try {
            Pp(e, n)
        } catch (i) {
            F(t, t.return, i)
        }
    }
}
function X0(t, e, n) {
    n.props = ui(t.type, t.memoizedProps),
    n.state = t.memoizedState;
    try {
        n.componentWillUnmount()
    } catch (i) {
        F(t, e, i)
    }
}
function Ba(t, e) {
    try {
        var n = t.ref;
        if (n !== null) {
            switch (t.tag) {
            case 26:
            case 27:
            case 5:
                var i = t.stateNode;
                break;
            case 30:
                i = t.stateNode;
                break;
            default:
                i = t.stateNode
            }
            typeof n == "function" ? t.refCleanup = n(i) : n.current = i
        }
    } catch (a) {
        F(t, e, a)
    }
}
function Ne(t, e) {
    var n = t.ref
      , i = t.refCleanup;
    if (n !== null)
        if (typeof i == "function")
            try {
                i()
            } catch (a) {
                F(t, e, a)
            } finally {
                t.refCleanup = null,
                t = t.alternate,
                t != null && (t.refCleanup = null)
            }
        else if (typeof n == "function")
            try {
                n(null)
            } catch (a) {
                F(t, e, a)
            }
        else
            n.current = null
}
function Q0(t) {
    var e = t.type
      , n = t.memoizedProps
      , i = t.stateNode;
    try {
        t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
            n.autoFocus && i.focus();
            break t;
        case "img":
            n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
        }
    } catch (a) {
        F(t, t.return, a)
    }
}
function so(t, e, n) {
    try {
        var i = t.stateNode;
        tb(i, t.type, n, e),
        i[Qt] = e
    } catch (a) {
        F(t, t.return, a)
    }
}
function Z0(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && _n(t.type) || t.tag === 4
}
function uo(t) {
    t: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Z0(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.tag === 27 && _n(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                continue t;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function gr(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        t = t.stateNode,
        e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
        e.appendChild(t),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = Ke));
    else if (i !== 4 && (i === 27 && _n(t.type) && (n = t.stateNode,
    e = null),
    t = t.child,
    t !== null))
        for (gr(t, e, n),
        t = t.sibling; t !== null; )
            gr(t, e, n),
            t = t.sibling
}
function Ls(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (i === 27 && _n(t.type) && (n = t.stateNode),
    t = t.child,
    t !== null))
        for (Ls(t, e, n),
        t = t.sibling; t !== null; )
            Ls(t, e, n),
            t = t.sibling
}
function K0(t) {
    var e = t.stateNode
      , n = t.memoizedProps;
    try {
        for (var i = t.type, a = e.attributes; a.length; )
            e.removeAttributeNode(a[0]);
        Nt(e, i, n),
        e[Ct] = t,
        e[Qt] = n
    } catch (l) {
        F(t, t.return, l)
    }
}
var Qe = !1
  , pt = !1
  , oo = !1
  , Hd = typeof WeakSet == "function" ? WeakSet : Set
  , Et = null;
function Rx(t, e) {
    if (t = t.containerInfo,
    Er = Fs,
    t = Rp(t),
    bc(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            t: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var a = i.anchorOffset
                      , l = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType,
                        l.nodeType
                    } catch {
                        n = null;
                        break t
                    }
                    var s = 0
                      , u = -1
                      , o = -1
                      , r = 0
                      , c = 0
                      , d = t
                      , f = null;
                    e: for (; ; ) {
                        for (var h; d !== n || a !== 0 && d.nodeType !== 3 || (u = s + a),
                        d !== l || i !== 0 && d.nodeType !== 3 || (o = s + i),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === t)
                                break e;
                            if (f === n && ++r === a && (u = s),
                            f === l && ++c === i && (o = s),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = u === -1 || o === -1 ? null : {
                        start: u,
                        end: o
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Mr = {
        focusedElem: t,
        selectionRange: n
    },
    Fs = !1,
    Et = e; Et !== null; )
        if (e = Et,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            Et = t;
        else
            for (; Et !== null; ) {
                switch (e = Et,
                l = e.alternate,
                t = e.flags,
                e.tag) {
                case 0:
                    if (t & 4 && (t = e.updateQueue,
                    t = t !== null ? t.events : null,
                    t !== null))
                        for (n = 0; n < t.length; n++)
                            a = t[n],
                            a.ref.impl = a.nextImpl;
                    break;
                case 11:
                case 15:
                    break;
                case 1:
                    if (t & 1024 && l !== null) {
                        t = void 0,
                        n = e,
                        a = l.memoizedProps,
                        l = l.memoizedState,
                        i = n.stateNode;
                        try {
                            var v = ui(n.type, a);
                            t = i.getSnapshotBeforeUpdate(v, l),
                            i.__reactInternalSnapshotBeforeUpdate = t
                        } catch (b) {
                            F(n, n.return, b)
                        }
                    }
                    break;
                case 3:
                    if (t & 1024) {
                        if (t = e.stateNode.containerInfo,
                        n = t.nodeType,
                        n === 9)
                            wr(t);
                        else if (n === 1)
                            switch (t.nodeName) {
                            case "HEAD":
                            case "HTML":
                            case "BODY":
                                wr(t);
                                break;
                            default:
                                t.textContent = ""
                            }
                    }
                    break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    if (t & 1024)
                        throw Error(A(163))
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    Et = t;
                    break
                }
                Et = e.return
            }
}
function k0(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
    case 0:
    case 11:
    case 15:
        Ye(t, n),
        i & 4 && bl(5, n);
        break;
    case 1:
        if (Ye(t, n),
        i & 4)
            if (t = n.stateNode,
            e === null)
                try {
                    t.componentDidMount()
                } catch (s) {
                    F(n, n.return, s)
                }
            else {
                var a = ui(n.type, e.memoizedProps);
                e = e.memoizedState;
                try {
                    t.componentDidUpdate(a, e, t.__reactInternalSnapshotBeforeUpdate)
                } catch (s) {
                    F(n, n.return, s)
                }
            }
        i & 64 && q0(n),
        i & 512 && Ba(n, n.return);
        break;
    case 3:
        if (Ye(t, n),
        i & 64 && (t = n.updateQueue,
        t !== null)) {
            if (e = null,
            n.child !== null)
                switch (n.child.tag) {
                case 27:
                case 5:
                    e = n.child.stateNode;
                    break;
                case 1:
                    e = n.child.stateNode
                }
            try {
                Pp(t, e)
            } catch (s) {
                F(n, n.return, s)
            }
        }
        break;
    case 27:
        e === null && i & 4 && K0(n);
    case 26:
    case 5:
        Ye(t, n),
        e === null && i & 4 && Q0(n),
        i & 512 && Ba(n, n.return);
        break;
    case 12:
        Ye(t, n);
        break;
    case 31:
        Ye(t, n),
        i & 4 && W0(t, n);
        break;
    case 13:
        Ye(t, n),
        i & 4 && P0(t, n),
        i & 64 && (t = n.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null && (n = qx.bind(null, n),
        ob(t, n))));
        break;
    case 22:
        if (i = n.memoizedState !== null || Qe,
        !i) {
            e = e !== null && e.memoizedState !== null || pt,
            a = Qe;
            var l = pt;
            Qe = i,
            (pt = e) && !l ? Ge(t, n, (n.subtreeFlags & 8772) !== 0) : Ye(t, n),
            Qe = a,
            pt = l
        }
        break;
    case 30:
        break;
    default:
        Ye(t, n)
    }
}
function J0(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    J0(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && mc(e)),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
var ut = null
  , Yt = !1;
function He(t, e, n) {
    for (n = n.child; n !== null; )
        F0(t, e, n),
        n = n.sibling
}
function F0(t, e, n) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
        try {
            $t.onCommitFiberUnmount(hl, n)
        } catch {}
    switch (n.tag) {
    case 26:
        pt || Ne(n, e),
        He(t, e, n),
        n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
        n.parentNode.removeChild(n));
        break;
    case 27:
        pt || Ne(n, e);
        var i = ut
          , a = Yt;
        _n(n.type) && (ut = n.stateNode,
        Yt = !1),
        He(t, e, n),
        Ga(n.stateNode),
        ut = i,
        Yt = a;
        break;
    case 5:
        pt || Ne(n, e);
    case 6:
        if (i = ut,
        a = Yt,
        ut = null,
        He(t, e, n),
        ut = i,
        Yt = a,
        ut !== null)
            if (Yt)
                try {
                    (ut.nodeType === 9 ? ut.body : ut.nodeName === "HTML" ? ut.ownerDocument.body : ut).removeChild(n.stateNode)
                } catch (l) {
                    F(n, e, l)
                }
            else
                try {
                    ut.removeChild(n.stateNode)
                } catch (l) {
                    F(n, e, l)
                }
        break;
    case 18:
        ut !== null && (Yt ? (t = ut,
        $d(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode),
        Ii(t)) : $d(ut, n.stateNode));
        break;
    case 4:
        i = ut,
        a = Yt,
        ut = n.stateNode.containerInfo,
        Yt = !0,
        He(t, e, n),
        ut = i,
        Yt = a;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        jn(2, n, e),
        pt || jn(4, n, e),
        He(t, e, n);
        break;
    case 1:
        pt || (Ne(n, e),
        i = n.stateNode,
        typeof i.componentWillUnmount == "function" && X0(n, e, i)),
        He(t, e, n);
        break;
    case 21:
        He(t, e, n);
        break;
    case 22:
        pt = (i = pt) || n.memoizedState !== null,
        He(t, e, n),
        pt = i;
        break;
    default:
        He(t, e, n)
    }
}
function W0(t, e) {
    if (e.memoizedState === null && (t = e.alternate,
    t !== null && (t = t.memoizedState,
    t !== null))) {
        t = t.dehydrated;
        try {
            Ii(t)
        } catch (n) {
            F(e, e.return, n)
        }
    }
}
function P0(t, e) {
    if (e.memoizedState === null && (t = e.alternate,
    t !== null && (t = t.memoizedState,
    t !== null && (t = t.dehydrated,
    t !== null))))
        try {
            Ii(t)
        } catch (n) {
            F(e, e.return, n)
        }
}
function Vx(t) {
    switch (t.tag) {
    case 31:
    case 13:
    case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Hd),
        e;
    case 22:
        return t = t.stateNode,
        e = t._retryCache,
        e === null && (e = t._retryCache = new Hd),
        e;
    default:
        throw Error(A(435, t.tag))
    }
}
function Yl(t, e) {
    var n = Vx(t);
    e.forEach(function(i) {
        if (!n.has(i)) {
            n.add(i);
            var a = Xx.bind(null, t, i);
            i.then(a, a)
        }
    })
}
function Lt(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var a = n[i]
              , l = t
              , s = e
              , u = s;
            t: for (; u !== null; ) {
                switch (u.tag) {
                case 27:
                    if (_n(u.type)) {
                        ut = u.stateNode,
                        Yt = !1;
                        break t
                    }
                    break;
                case 5:
                    ut = u.stateNode,
                    Yt = !1;
                    break t;
                case 3:
                case 4:
                    ut = u.stateNode.containerInfo,
                    Yt = !0;
                    break t
                }
                u = u.return
            }
            if (ut === null)
                throw Error(A(160));
            F0(l, s, a),
            ut = null,
            Yt = !1,
            l = a.alternate,
            l !== null && (l.return = null),
            a.return = null
        }
    if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
            $0(e, t),
            e = e.sibling
}
var Ae = null;
function $0(t, e) {
    var n = t.alternate
      , i = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        Lt(e, t),
        Ht(t),
        i & 4 && (jn(3, t, t.return),
        bl(3, t),
        jn(5, t, t.return));
        break;
    case 1:
        Lt(e, t),
        Ht(t),
        i & 512 && (pt || n === null || Ne(n, n.return)),
        i & 64 && Qe && (t = t.updateQueue,
        t !== null && (i = t.callbacks,
        i !== null && (n = t.shared.hiddenCallbacks,
        t.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
    case 26:
        var a = Ae;
        if (Lt(e, t),
        Ht(t),
        i & 512 && (pt || n === null || Ne(n, n.return)),
        i & 4) {
            var l = n !== null ? n.memoizedState : null;
            if (i = t.memoizedState,
            n === null)
                if (i === null)
                    if (t.stateNode === null) {
                        t: {
                            i = t.type,
                            n = t.memoizedProps,
                            a = a.ownerDocument || a;
                            e: switch (i) {
                            case "title":
                                l = a.getElementsByTagName("title")[0],
                                (!l || l[yl] || l[Ct] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = a.createElement(i),
                                a.head.insertBefore(l, a.querySelector("head > title"))),
                                Nt(l, i, n),
                                l[Ct] = t,
                                Mt(l),
                                i = l;
                                break t;
                            case "link":
                                var s = lh("link", "href", a).get(i + (n.href || ""));
                                if (s) {
                                    for (var u = 0; u < s.length; u++)
                                        if (l = s[u],
                                        l.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                            s.splice(u, 1);
                                            break e
                                        }
                                }
                                l = a.createElement(i),
                                Nt(l, i, n),
                                a.head.appendChild(l);
                                break;
                            case "meta":
                                if (s = lh("meta", "content", a).get(i + (n.content || ""))) {
                                    for (u = 0; u < s.length; u++)
                                        if (l = s[u],
                                        l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                            s.splice(u, 1);
                                            break e
                                        }
                                }
                                l = a.createElement(i),
                                Nt(l, i, n),
                                a.head.appendChild(l);
                                break;
                            default:
                                throw Error(A(468, i))
                            }
                            l[Ct] = t,
                            Mt(l),
                            i = l
                        }
                        t.stateNode = i
                    } else
                        sh(a, t.type, t.stateNode);
                else
                    t.stateNode = ah(a, i, t.memoizedProps);
            else
                l !== i ? (l === null ? n.stateNode !== null && (n = n.stateNode,
                n.parentNode.removeChild(n)) : l.count--,
                i === null ? sh(a, t.type, t.stateNode) : ah(a, i, t.memoizedProps)) : i === null && t.stateNode !== null && so(t, t.memoizedProps, n.memoizedProps)
        }
        break;
    case 27:
        Lt(e, t),
        Ht(t),
        i & 512 && (pt || n === null || Ne(n, n.return)),
        n !== null && i & 4 && so(t, t.memoizedProps, n.memoizedProps);
        break;
    case 5:
        if (Lt(e, t),
        Ht(t),
        i & 512 && (pt || n === null || Ne(n, n.return)),
        t.flags & 32) {
            a = t.stateNode;
            try {
                Zi(a, "")
            } catch (v) {
                F(t, t.return, v)
            }
        }
        i & 4 && t.stateNode != null && (a = t.memoizedProps,
        so(t, a, n !== null ? n.memoizedProps : a)),
        i & 1024 && (oo = !0);
        break;
    case 6:
        if (Lt(e, t),
        Ht(t),
        i & 4) {
            if (t.stateNode === null)
                throw Error(A(162));
            i = t.memoizedProps,
            n = t.stateNode;
            try {
                n.nodeValue = i
            } catch (v) {
                F(t, t.return, v)
            }
        }
        break;
    case 3:
        if (ds = null,
        a = Ae,
        Ae = Ks(e.containerInfo),
        Lt(e, t),
        Ae = a,
        Ht(t),
        i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ii(e.containerInfo)
            } catch (v) {
                F(t, t.return, v)
            }
        oo && (oo = !1,
        I0(t));
        break;
    case 4:
        i = Ae,
        Ae = Ks(t.stateNode.containerInfo),
        Lt(e, t),
        Ht(t),
        Ae = i;
        break;
    case 12:
        Lt(e, t),
        Ht(t);
        break;
    case 31:
        Lt(e, t),
        Ht(t),
        i & 4 && (i = t.updateQueue,
        i !== null && (t.updateQueue = null,
        Yl(t, i)));
        break;
    case 13:
        Lt(e, t),
        Ht(t),
        t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Tu = Pt()),
        i & 4 && (i = t.updateQueue,
        i !== null && (t.updateQueue = null,
        Yl(t, i)));
        break;
    case 22:
        a = t.memoizedState !== null;
        var o = n !== null && n.memoizedState !== null
          , r = Qe
          , c = pt;
        if (Qe = r || a,
        pt = c || o,
        Lt(e, t),
        pt = c,
        Qe = r,
        Ht(t),
        i & 8192)
            t: for (e = t.stateNode,
            e._visibility = a ? e._visibility & -2 : e._visibility | 1,
            a && (n === null || o || Qe || pt || Kn(t)),
            n = null,
            e = t; ; ) {
                if (e.tag === 5 || e.tag === 26) {
                    if (n === null) {
                        o = n = e;
                        try {
                            if (l = o.stateNode,
                            a)
                                s = l.style,
                                typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                            else {
                                u = o.stateNode;
                                var d = o.memoizedProps.style
                                  , f = d != null && d.hasOwnProperty("display") ? d.display : null;
                                u.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim()
                            }
                        } catch (v) {
                            F(o, o.return, v)
                        }
                    }
                } else if (e.tag === 6) {
                    if (n === null) {
                        o = e;
                        try {
                            o.stateNode.nodeValue = a ? "" : o.memoizedProps
                        } catch (v) {
                            F(o, o.return, v)
                        }
                    }
                } else if (e.tag === 18) {
                    if (n === null) {
                        o = e;
                        try {
                            var h = o.stateNode;
                            a ? Id(h, !0) : Id(o.stateNode, !1)
                        } catch (v) {
                            F(o, o.return, v)
                        }
                    }
                } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break t;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break t;
                    n === e && (n = null),
                    e = e.return
                }
                n === e && (n = null),
                e.sibling.return = e.return,
                e = e.sibling
            }
        i & 4 && (i = t.updateQueue,
        i !== null && (n = i.retryQueue,
        n !== null && (i.retryQueue = null,
        Yl(t, n))));
        break;
    case 19:
        Lt(e, t),
        Ht(t),
        i & 4 && (i = t.updateQueue,
        i !== null && (t.updateQueue = null,
        Yl(t, i)));
        break;
    case 30:
        break;
    case 21:
        break;
    default:
        Lt(e, t),
        Ht(t)
    }
}
function Ht(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            for (var n, i = t.return; i !== null; ) {
                if (Z0(i)) {
                    n = i;
                    break
                }
                i = i.return
            }
            if (n == null)
                throw Error(A(160));
            switch (n.tag) {
            case 27:
                var a = n.stateNode
                  , l = uo(t);
                Ls(t, l, a);
                break;
            case 5:
                var s = n.stateNode;
                n.flags & 32 && (Zi(s, ""),
                n.flags &= -33);
                var u = uo(t);
                Ls(t, u, s);
                break;
            case 3:
            case 4:
                var o = n.stateNode.containerInfo
                  , r = uo(t);
                gr(t, r, o);
                break;
            default:
                throw Error(A(161))
            }
        } catch (c) {
            F(t, t.return, c)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function I0(t) {
    if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
            var e = t;
            I0(e),
            e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
            t = t.sibling
        }
}
function Ye(t, e) {
    if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
            k0(t, e.alternate, e),
            e = e.sibling
}
function Kn(t) {
    for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            jn(4, e, e.return),
            Kn(e);
            break;
        case 1:
            Ne(e, e.return);
            var n = e.stateNode;
            typeof n.componentWillUnmount == "function" && X0(e, e.return, n),
            Kn(e);
            break;
        case 27:
            Ga(e.stateNode);
        case 26:
        case 5:
            Ne(e, e.return),
            Kn(e);
            break;
        case 22:
            e.memoizedState === null && Kn(e);
            break;
        case 30:
            Kn(e);
            break;
        default:
            Kn(e)
        }
        t = t.sibling
    }
}
function Ge(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0,
    e = e.child; e !== null; ) {
        var i = e.alternate
          , a = t
          , l = e
          , s = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            Ge(a, l, n),
            bl(4, l);
            break;
        case 1:
            if (Ge(a, l, n),
            i = l,
            a = i.stateNode,
            typeof a.componentDidMount == "function")
                try {
                    a.componentDidMount()
                } catch (r) {
                    F(i, i.return, r)
                }
            if (i = l,
            a = i.updateQueue,
            a !== null) {
                var u = i.stateNode;
                try {
                    var o = a.shared.hiddenCallbacks;
                    if (o !== null)
                        for (a.shared.hiddenCallbacks = null,
                        a = 0; a < o.length; a++)
                            Wp(o[a], u)
                } catch (r) {
                    F(i, i.return, r)
                }
            }
            n && s & 64 && q0(l),
            Ba(l, l.return);
            break;
        case 27:
            K0(l);
        case 26:
        case 5:
            Ge(a, l, n),
            n && i === null && s & 4 && Q0(l),
            Ba(l, l.return);
            break;
        case 12:
            Ge(a, l, n);
            break;
        case 31:
            Ge(a, l, n),
            n && s & 4 && W0(a, l);
            break;
        case 13:
            Ge(a, l, n),
            n && s & 4 && P0(a, l);
            break;
        case 22:
            l.memoizedState === null && Ge(a, l, n),
            Ba(l, l.return);
            break;
        case 30:
            break;
        default:
            Ge(a, l, n)
        }
        e = e.sibling
    }
}
function Kc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool),
    t = null,
    e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
    t !== n && (t != null && t.refCount++,
    n != null && vl(n))
}
function kc(t, e) {
    t = null,
    e.alternate !== null && (t = e.alternate.memoizedState.cache),
    e = e.memoizedState.cache,
    e !== t && (e.refCount++,
    t != null && vl(t))
}
function xe(t, e, n, i) {
    if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
            ty(t, e, n, i),
            e = e.sibling
}
function ty(t, e, n, i) {
    var a = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 15:
        xe(t, e, n, i),
        a & 2048 && bl(9, e);
        break;
    case 1:
        xe(t, e, n, i);
        break;
    case 3:
        xe(t, e, n, i),
        a & 2048 && (t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && vl(t)));
        break;
    case 12:
        if (a & 2048) {
            xe(t, e, n, i),
            t = e.stateNode;
            try {
                var l = e.memoizedProps
                  , s = l.id
                  , u = l.onPostCommit;
                typeof u == "function" && u(s, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
            } catch (o) {
                F(e, e.return, o)
            }
        } else
            xe(t, e, n, i);
        break;
    case 31:
        xe(t, e, n, i);
        break;
    case 13:
        xe(t, e, n, i);
        break;
    case 23:
        break;
    case 22:
        l = e.stateNode,
        s = e.alternate,
        e.memoizedState !== null ? l._visibility & 2 ? xe(t, e, n, i) : La(t, e) : l._visibility & 2 ? xe(t, e, n, i) : (l._visibility |= 2,
        vi(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)),
        a & 2048 && Kc(s, e);
        break;
    case 24:
        xe(t, e, n, i),
        a & 2048 && kc(e.alternate, e);
        break;
    default:
        xe(t, e, n, i)
    }
}
function vi(t, e, n, i, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1),
    e = e.child; e !== null; ) {
        var l = t
          , s = e
          , u = n
          , o = i
          , r = s.flags;
        switch (s.tag) {
        case 0:
        case 11:
        case 15:
            vi(l, s, u, o, a),
            bl(8, s);
            break;
        case 23:
            break;
        case 22:
            var c = s.stateNode;
            s.memoizedState !== null ? c._visibility & 2 ? vi(l, s, u, o, a) : La(l, s) : (c._visibility |= 2,
            vi(l, s, u, o, a)),
            a && r & 2048 && Kc(s.alternate, s);
            break;
        case 24:
            vi(l, s, u, o, a),
            a && r & 2048 && kc(s.alternate, s);
            break;
        default:
            vi(l, s, u, o, a)
        }
        e = e.sibling
    }
}
function La(t, e) {
    if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) {
            var n = t
              , i = e
              , a = i.flags;
            switch (i.tag) {
            case 22:
                La(n, i),
                a & 2048 && Kc(i.alternate, i);
                break;
            case 24:
                La(n, i),
                a & 2048 && kc(i.alternate, i);
                break;
            default:
                La(n, i)
            }
            e = e.sibling
        }
}
var Ma = 8192;
function pi(t, e, n) {
    if (t.subtreeFlags & Ma)
        for (t = t.child; t !== null; )
            ey(t, e, n),
            t = t.sibling
}
function ey(t, e, n) {
    switch (t.tag) {
    case 26:
        pi(t, e, n),
        t.flags & Ma && t.memoizedState !== null && bb(n, Ae, t.memoizedState, t.memoizedProps);
        break;
    case 5:
        pi(t, e, n);
        break;
    case 3:
    case 4:
        var i = Ae;
        Ae = Ks(t.stateNode.containerInfo),
        pi(t, e, n),
        Ae = i;
        break;
    case 22:
        t.memoizedState === null && (i = t.alternate,
        i !== null && i.memoizedState !== null ? (i = Ma,
        Ma = 16777216,
        pi(t, e, n),
        Ma = i) : pi(t, e, n));
        break;
    default:
        pi(t, e, n)
    }
}
function ny(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child,
    t !== null)) {
        e.child = null;
        do
            e = t.sibling,
            t.sibling = null,
            t = e;
        while (t !== null)
    }
}
function va(t) {
    var e = t.deletions;
    if (t.flags & 16) {
        if (e !== null)
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                Et = i,
                ay(i, t)
            }
        ny(t)
    }
    if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
            iy(t),
            t = t.sibling
}
function iy(t) {
    switch (t.tag) {
    case 0:
    case 11:
    case 15:
        va(t),
        t.flags & 2048 && jn(9, t, t.return);
        break;
    case 3:
        va(t);
        break;
    case 12:
        va(t);
        break;
    case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
        cs(t)) : va(t);
        break;
    default:
        va(t)
    }
}
function cs(t) {
    var e = t.deletions;
    if (t.flags & 16) {
        if (e !== null)
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                Et = i,
                ay(i, t)
            }
        ny(t)
    }
    for (t = t.child; t !== null; ) {
        switch (e = t,
        e.tag) {
        case 0:
        case 11:
        case 15:
            jn(8, e, e.return),
            cs(e);
            break;
        case 22:
            n = e.stateNode,
            n._visibility & 2 && (n._visibility &= -3,
            cs(e));
            break;
        default:
            cs(e)
        }
        t = t.sibling
    }
}
function ay(t, e) {
    for (; Et !== null; ) {
        var n = Et;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            jn(8, n, e);
            break;
        case 23:
        case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                var i = n.memoizedState.cachePool.pool;
                i != null && i.refCount++
            }
            break;
        case 24:
            vl(n.memoizedState.cache)
        }
        if (i = n.child,
        i !== null)
            i.return = n,
            Et = i;
        else
            t: for (n = t; Et !== null; ) {
                i = Et;
                var a = i.sibling
                  , l = i.return;
                if (J0(i),
                i === n) {
                    Et = null;
                    break t
                }
                if (a !== null) {
                    a.return = l,
                    Et = a;
                    break t
                }
                Et = l
            }
    }
}
var Ux = {
    getCacheForType: function(t) {
        var e = Ot(yt)
          , n = e.data.get(t);
        return n === void 0 && (n = t(),
        e.data.set(t, n)),
        n
    },
    cacheSignal: function() {
        return Ot(yt).controller.signal
    }
}
  , _x = typeof WeakMap == "function" ? WeakMap : Map
  , Z = 0
  , $ = null
  , Y = null
  , G = 0
  , J = 0
  , kt = null
  , yn = !1
  , ua = !1
  , Jc = !1
  , en = 0
  , ct = 0
  , Nn = 0
  , ti = 0
  , Fc = 0
  , Wt = 0
  , Fi = 0
  , Ha = null
  , Gt = null
  , vr = !1
  , Tu = 0
  , ly = 0
  , Hs = 1 / 0
  , Ys = null
  , En = null
  , xt = 0
  , Mn = null
  , Wi = null
  , We = 0
  , xr = 0
  , br = null
  , sy = null
  , Ya = 0
  , Sr = null;
function te() {
    return Z & 2 && G !== 0 ? G & -G : V.T !== null ? Pc() : pp()
}
function uy() {
    if (Wt === 0)
        if (!(G & 536870912) || q) {
            var t = Nl;
            Nl <<= 1,
            !(Nl & 3932160) && (Nl = 262144),
            Wt = t
        } else
            Wt = 536870912;
    return t = ie.current,
    t !== null && (t.flags |= 32),
    Wt
}
function qt(t, e, n) {
    (t === $ && (J === 2 || J === 9) || t.cancelPendingCommit !== null) && (Pi(t, 0),
    gn(t, G, Wt, !1)),
    pl(t, n),
    (!(Z & 2) || t !== $) && (t === $ && (!(Z & 2) && (ti |= n),
    ct === 4 && gn(t, G, Wt, !1)),
    _e(t))
}
function oy(t, e, n) {
    if (Z & 6)
        throw Error(A(327));
    var i = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ml(t, e)
      , a = i ? Hx(t, e) : ro(t, e, !0)
      , l = i;
    do {
        if (a === 0) {
            ua && !i && gn(t, e, 0, !1);
            break
        } else {
            if (n = t.current.alternate,
            l && !Bx(n)) {
                a = ro(t, e, !1),
                l = !1;
                continue
            }
            if (a === 2) {
                if (l = e,
                t.errorRecoveryDisabledLanes & l)
                    var s = 0;
                else
                    s = t.pendingLanes & -536870913,
                    s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
                if (s !== 0) {
                    e = s;
                    t: {
                        var u = t;
                        a = Ha;
                        var o = u.current.memoizedState.isDehydrated;
                        if (o && (Pi(u, s).flags |= 256),
                        s = ro(u, s, !1),
                        s !== 2) {
                            if (Jc && !o) {
                                u.errorRecoveryDisabledLanes |= l,
                                ti |= l,
                                a = 4;
                                break t
                            }
                            l = Gt,
                            Gt = a,
                            l !== null && (Gt === null ? Gt = l : Gt.push.apply(Gt, l))
                        }
                        a = s
                    }
                    if (l = !1,
                    a !== 2)
                        continue
                }
            }
            if (a === 1) {
                Pi(t, 0),
                gn(t, e, 0, !0);
                break
            }
            t: {
                switch (i = t,
                l = a,
                l) {
                case 0:
                case 1:
                    throw Error(A(345));
                case 4:
                    if ((e & 4194048) !== e)
                        break;
                case 6:
                    gn(i, e, Wt, !yn);
                    break t;
                case 2:
                    Gt = null;
                    break;
                case 3:
                case 5:
                    break;
                default:
                    throw Error(A(329))
                }
                if ((e & 62914560) === e && (a = Tu + 300 - Pt(),
                10 < a)) {
                    if (gn(i, e, Wt, !yn),
                    fu(i, 0, !0) !== 0)
                        break t;
                    We = e,
                    i.timeoutHandle = Cy(Yd.bind(null, i, n, Gt, Ys, vr, e, Wt, ti, Fi, yn, l, "Throttled", -0, 0), a);
                    break t
                }
                Yd(i, n, Gt, Ys, vr, e, Wt, ti, Fi, yn, l, null, -0, 0)
            }
        }
        break
    } while (!0);
    _e(t)
}
function Yd(t, e, n, i, a, l, s, u, o, r, c, d, f, h) {
    if (t.timeoutHandle = -1,
    d = e.subtreeFlags,
    d & 8192 || (d & 16785408) === 16785408) {
        d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: Ke
        },
        ey(e, l, d);
        var v = (l & 62914560) === l ? Tu - Pt() : (l & 4194048) === l ? ly - Pt() : 0;
        if (v = Sb(d, v),
        v !== null) {
            We = l,
            t.cancelPendingCommit = v(qd.bind(null, t, e, l, n, i, a, s, u, o, c, d, null, f, h)),
            gn(t, l, s, !r);
            return
        }
    }
    qd(t, e, l, n, i, a, s, u, o)
}
function Bx(t) {
    for (var e = t; ; ) {
        var n = e.tag;
        if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue,
        n !== null && (n = n.stores,
        n !== null)))
            for (var i = 0; i < n.length; i++) {
                var a = n[i]
                  , l = a.getSnapshot;
                a = a.value;
                try {
                    if (!ne(l(), a))
                        return !1
                } catch {
                    return !1
                }
            }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function gn(t, e, n, i) {
    e &= ~Fc,
    e &= ~ti,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    i && (t.warmLanes |= e),
    i = t.expirationTimes;
    for (var a = e; 0 < a; ) {
        var l = 31 - It(a)
          , s = 1 << l;
        i[l] = -1,
        a &= ~s
    }
    n !== 0 && dp(t, n, e)
}
function Au() {
    return Z & 6 ? !0 : (Sl(0),
    !1)
}
function Wc() {
    if (Y !== null) {
        if (J === 0)
            var t = Y.return;
        else
            t = Y,
            ke = di = null,
            Uc(t),
            Yi = null,
            tl = 0,
            t = Y;
        for (; t !== null; )
            G0(t.alternate, t),
            t = t.return;
        Y = null
    }
}
function Pi(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && (t.timeoutHandle = -1,
    ib(n)),
    n = t.cancelPendingCommit,
    n !== null && (t.cancelPendingCommit = null,
    n()),
    We = 0,
    Wc(),
    $ = t,
    Y = n = Je(t.current, null),
    G = e,
    J = 0,
    kt = null,
    yn = !1,
    ua = ml(t, e),
    Jc = !1,
    Fi = Wt = Fc = ti = Nn = ct = 0,
    Gt = Ha = null,
    vr = !1,
    e & 8 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
        for (t = t.entanglements,
        i &= e; 0 < i; ) {
            var a = 31 - It(i)
              , l = 1 << a;
            e |= t[a],
            i &= ~l
        }
    return en = e,
    pu(),
    n
}
function ry(t, e) {
    _ = null,
    V.H = nl,
    e === sa || e === gu ? (e = vd(),
    J = 3) : e === Cc ? (e = vd(),
    J = 4) : J = e === Qc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
    kt = e,
    Y === null && (ct = 1,
    _s(t, fe(e, t.current)))
}
function cy() {
    var t = ie.current;
    return t === null ? !0 : (G & 4194048) === G ? me === null : (G & 62914560) === G || G & 536870912 ? t === me : !1
}
function fy() {
    var t = V.H;
    return V.H = nl,
    t === null ? nl : t
}
function dy() {
    var t = V.A;
    return V.A = Ux,
    t
}
function Gs() {
    ct = 4,
    yn || (G & 4194048) !== G && ie.current !== null || (ua = !0),
    !(Nn & 134217727) && !(ti & 134217727) || $ === null || gn($, G, Wt, !1)
}
function ro(t, e, n) {
    var i = Z;
    Z |= 2;
    var a = fy()
      , l = dy();
    ($ !== t || G !== e) && (Ys = null,
    Pi(t, e)),
    e = !1;
    var s = ct;
    t: do
        try {
            if (J !== 0 && Y !== null) {
                var u = Y
                  , o = kt;
                switch (J) {
                case 8:
                    Wc(),
                    s = 6;
                    break t;
                case 3:
                case 2:
                case 9:
                case 6:
                    ie.current === null && (e = !0);
                    var r = J;
                    if (J = 0,
                    kt = null,
                    Ni(t, u, o, r),
                    n && ua) {
                        s = 0;
                        break t
                    }
                    break;
                default:
                    r = J,
                    J = 0,
                    kt = null,
                    Ni(t, u, o, r)
                }
            }
            Lx(),
            s = ct;
            break
        } catch (c) {
            ry(t, c)
        }
    while (!0);
    return e && t.shellSuspendCounter++,
    ke = di = null,
    Z = i,
    V.H = a,
    V.A = l,
    Y === null && ($ = null,
    G = 0,
    pu()),
    s
}
function Lx() {
    for (; Y !== null; )
        hy(Y)
}
function Hx(t, e) {
    var n = Z;
    Z |= 2;
    var i = fy()
      , a = dy();
    $ !== t || G !== e ? (Ys = null,
    Hs = Pt() + 500,
    Pi(t, e)) : ua = ml(t, e);
    t: do
        try {
            if (J !== 0 && Y !== null) {
                e = Y;
                var l = kt;
                e: switch (J) {
                case 1:
                    J = 0,
                    kt = null,
                    Ni(t, e, l, 1);
                    break;
                case 2:
                case 9:
                    if (gd(l)) {
                        J = 0,
                        kt = null,
                        Gd(e);
                        break
                    }
                    e = function() {
                        J !== 2 && J !== 9 || $ !== t || (J = 7),
                        _e(t)
                    }
                    ,
                    l.then(e, e);
                    break t;
                case 3:
                    J = 7;
                    break t;
                case 4:
                    J = 5;
                    break t;
                case 7:
                    gd(l) ? (J = 0,
                    kt = null,
                    Gd(e)) : (J = 0,
                    kt = null,
                    Ni(t, e, l, 7));
                    break;
                case 5:
                    var s = null;
                    switch (Y.tag) {
                    case 26:
                        s = Y.memoizedState;
                    case 5:
                    case 27:
                        var u = Y;
                        if (s ? Ry(s) : u.stateNode.complete) {
                            J = 0,
                            kt = null;
                            var o = u.sibling;
                            if (o !== null)
                                Y = o;
                            else {
                                var r = u.return;
                                r !== null ? (Y = r,
                                Eu(r)) : Y = null
                            }
                            break e
                        }
                    }
                    J = 0,
                    kt = null,
                    Ni(t, e, l, 5);
                    break;
                case 6:
                    J = 0,
                    kt = null,
                    Ni(t, e, l, 6);
                    break;
                case 8:
                    Wc(),
                    ct = 6;
                    break t;
                default:
                    throw Error(A(462))
                }
            }
            Yx();
            break
        } catch (c) {
            ry(t, c)
        }
    while (!0);
    return ke = di = null,
    V.H = i,
    V.A = a,
    Z = n,
    Y !== null ? 0 : ($ = null,
    G = 0,
    pu(),
    ct)
}
function Yx() {
    for (; Y !== null && !r1(); )
        hy(Y)
}
function hy(t) {
    var e = Y0(t.alternate, t, en);
    t.memoizedProps = t.pendingProps,
    e === null ? Eu(t) : Y = e
}
function Gd(t) {
    var e = t
      , n = e.alternate;
    switch (e.tag) {
    case 15:
    case 0:
        e = Vd(n, e, e.pendingProps, e.type, void 0, G);
        break;
    case 11:
        e = Vd(n, e, e.pendingProps, e.type.render, e.ref, G);
        break;
    case 5:
        Uc(e);
    default:
        G0(n, e),
        e = Y = Gp(e, en),
        e = Y0(n, e, en)
    }
    t.memoizedProps = t.pendingProps,
    e === null ? Eu(t) : Y = e
}
function Ni(t, e, n, i) {
    ke = di = null,
    Uc(e),
    Yi = null,
    tl = 0;
    var a = e.return;
    try {
        if (Cx(t, a, e, n, G)) {
            ct = 1,
            _s(t, fe(n, t.current)),
            Y = null;
            return
        }
    } catch (l) {
        if (a !== null)
            throw Y = a,
            l;
        ct = 1,
        _s(t, fe(n, t.current)),
        Y = null;
        return
    }
    e.flags & 32768 ? (q || i === 1 ? t = !0 : ua || G & 536870912 ? t = !1 : (yn = t = !0,
    (i === 2 || i === 9 || i === 3 || i === 6) && (i = ie.current,
    i !== null && i.tag === 13 && (i.flags |= 16384))),
    my(e, t)) : Eu(e)
}
function Eu(t) {
    var e = t;
    do {
        if (e.flags & 32768) {
            my(e, yn);
            return
        }
        t = e.return;
        var n = jx(e.alternate, e, en);
        if (n !== null) {
            Y = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            Y = e;
            return
        }
        Y = e = t
    } while (e !== null);
    ct === 0 && (ct = 5)
}
function my(t, e) {
    do {
        var n = Nx(t.alternate, t);
        if (n !== null) {
            n.flags &= 32767,
            Y = n;
            return
        }
        if (n = t.return,
        n !== null && (n.flags |= 32768,
        n.subtreeFlags = 0,
        n.deletions = null),
        !e && (t = t.sibling,
        t !== null)) {
            Y = t;
            return
        }
        Y = t = n
    } while (t !== null);
    ct = 6,
    Y = null
}
function qd(t, e, n, i, a, l, s, u, o) {
    t.cancelPendingCommit = null;
    do
        Mu();
    while (xt !== 0);
    if (Z & 6)
        throw Error(A(327));
    if (e !== null) {
        if (e === t.current)
            throw Error(A(177));
        if (l = e.lanes | e.childLanes,
        l |= Sc,
        x1(t, n, l, s, u, o),
        t === $ && (Y = $ = null,
        G = 0),
        Wi = e,
        Mn = t,
        We = n,
        xr = l,
        br = a,
        sy = i,
        e.subtreeFlags & 10256 || e.flags & 10256 ? (t.callbackNode = null,
        t.callbackPriority = 0,
        Qx(Ms, function() {
            return xy(),
            null
        })) : (t.callbackNode = null,
        t.callbackPriority = 0),
        i = (e.flags & 13878) !== 0,
        e.subtreeFlags & 13878 || i) {
            i = V.T,
            V.T = null,
            a = K.p,
            K.p = 2,
            s = Z,
            Z |= 4;
            try {
                Rx(t, e, n)
            } finally {
                Z = s,
                K.p = a,
                V.T = i
            }
        }
        xt = 1,
        py(),
        yy(),
        gy()
    }
}
function py() {
    if (xt === 1) {
        xt = 0;
        var t = Mn
          , e = Wi
          , n = (e.flags & 13878) !== 0;
        if (e.subtreeFlags & 13878 || n) {
            n = V.T,
            V.T = null;
            var i = K.p;
            K.p = 2;
            var a = Z;
            Z |= 4;
            try {
                $0(e, t);
                var l = Mr
                  , s = Rp(t.containerInfo)
                  , u = l.focusedElem
                  , o = l.selectionRange;
                if (s !== u && u && u.ownerDocument && Np(u.ownerDocument.documentElement, u)) {
                    if (o !== null && bc(u)) {
                        var r = o.start
                          , c = o.end;
                        if (c === void 0 && (c = r),
                        "selectionStart"in u)
                            u.selectionStart = r,
                            u.selectionEnd = Math.min(c, u.value.length);
                        else {
                            var d = u.ownerDocument || document
                              , f = d && d.defaultView || window;
                            if (f.getSelection) {
                                var h = f.getSelection()
                                  , v = u.textContent.length
                                  , b = Math.min(o.start, v)
                                  , S = o.end === void 0 ? b : Math.min(o.end, v);
                                !h.extend && b > S && (s = S,
                                S = b,
                                b = s);
                                var p = cd(u, b)
                                  , m = cd(u, S);
                                if (p && m && (h.rangeCount !== 1 || h.anchorNode !== p.node || h.anchorOffset !== p.offset || h.focusNode !== m.node || h.focusOffset !== m.offset)) {
                                    var y = d.createRange();
                                    y.setStart(p.node, p.offset),
                                    h.removeAllRanges(),
                                    b > S ? (h.addRange(y),
                                    h.extend(m.node, m.offset)) : (y.setEnd(m.node, m.offset),
                                    h.addRange(y))
                                }
                            }
                        }
                    }
                    for (d = [],
                    h = u; h = h.parentNode; )
                        h.nodeType === 1 && d.push({
                            element: h,
                            left: h.scrollLeft,
                            top: h.scrollTop
                        });
                    for (typeof u.focus == "function" && u.focus(),
                    u = 0; u < d.length; u++) {
                        var x = d[u];
                        x.element.scrollLeft = x.left,
                        x.element.scrollTop = x.top
                    }
                }
                Fs = !!Er,
                Mr = Er = null
            } finally {
                Z = a,
                K.p = i,
                V.T = n
            }
        }
        t.current = e,
        xt = 2
    }
}
function yy() {
    if (xt === 2) {
        xt = 0;
        var t = Mn
          , e = Wi
          , n = (e.flags & 8772) !== 0;
        if (e.subtreeFlags & 8772 || n) {
            n = V.T,
            V.T = null;
            var i = K.p;
            K.p = 2;
            var a = Z;
            Z |= 4;
            try {
                k0(t, e.alternate, e)
            } finally {
                Z = a,
                K.p = i,
                V.T = n
            }
        }
        xt = 3
    }
}
function gy() {
    if (xt === 4 || xt === 3) {
        xt = 0,
        c1();
        var t = Mn
          , e = Wi
          , n = We
          , i = sy;
        e.subtreeFlags & 10256 || e.flags & 10256 ? xt = 5 : (xt = 0,
        Wi = Mn = null,
        vy(t, t.pendingLanes));
        var a = t.pendingLanes;
        if (a === 0 && (En = null),
        hc(n),
        e = e.stateNode,
        $t && typeof $t.onCommitFiberRoot == "function")
            try {
                $t.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
        if (i !== null) {
            e = V.T,
            a = K.p,
            K.p = 2,
            V.T = null;
            try {
                for (var l = t.onRecoverableError, s = 0; s < i.length; s++) {
                    var u = i[s];
                    l(u.value, {
                        componentStack: u.stack
                    })
                }
            } finally {
                V.T = e,
                K.p = a
            }
        }
        We & 3 && Mu(),
        _e(t),
        a = t.pendingLanes,
        n & 261930 && a & 42 ? t === Sr ? Ya++ : (Ya = 0,
        Sr = t) : Ya = 0,
        Sl(0)
    }
}
function vy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
    e != null && (t.pooledCache = null,
    vl(e)))
}
function Mu() {
    return py(),
    yy(),
    gy(),
    xy()
}
function xy() {
    if (xt !== 5)
        return !1;
    var t = Mn
      , e = xr;
    xr = 0;
    var n = hc(We)
      , i = V.T
      , a = K.p;
    try {
        K.p = 32 > n ? 32 : n,
        V.T = null,
        n = br,
        br = null;
        var l = Mn
          , s = We;
        if (xt = 0,
        Wi = Mn = null,
        We = 0,
        Z & 6)
            throw Error(A(331));
        var u = Z;
        if (Z |= 4,
        iy(l.current),
        ty(l, l.current, s, n),
        Z = u,
        Sl(0, !1),
        $t && typeof $t.onPostCommitFiberRoot == "function")
            try {
                $t.onPostCommitFiberRoot(hl, l)
            } catch {}
        return !0
    } finally {
        K.p = a,
        V.T = i,
        vy(t, e)
    }
}
function Xd(t, e, n) {
    e = fe(n, e),
    e = mr(t.stateNode, e, 2),
    t = An(t, e, 2),
    t !== null && (pl(t, 2),
    _e(t))
}
function F(t, e, n) {
    if (t.tag === 3)
        Xd(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Xd(e, t, n);
                break
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (En === null || !En.has(i))) {
                    t = fe(n, t),
                    n = V0(2),
                    i = An(e, n, 2),
                    i !== null && (U0(n, i, e, t),
                    pl(i, 2),
                    _e(i));
                    break
                }
            }
            e = e.return
        }
}
function co(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new _x;
        var a = new Set;
        i.set(e, a)
    } else
        a = i.get(e),
        a === void 0 && (a = new Set,
        i.set(e, a));
    a.has(n) || (Jc = !0,
    a.add(n),
    t = Gx.bind(null, t, e, n),
    e.then(t, t))
}
function Gx(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
    t.pingedLanes |= t.suspendedLanes & n,
    t.warmLanes &= ~n,
    $ === t && (G & n) === n && (ct === 4 || ct === 3 && (G & 62914560) === G && 300 > Pt() - Tu ? !(Z & 2) && Pi(t, 0) : Fc |= n,
    Fi === G && (Fi = 0)),
    _e(t)
}
function by(t, e) {
    e === 0 && (e = fp()),
    t = fi(t, e),
    t !== null && (pl(t, e),
    _e(t))
}
function qx(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    by(t, n)
}
function Xx(t, e) {
    var n = 0;
    switch (t.tag) {
    case 31:
    case 13:
        var i = t.stateNode
          , a = t.memoizedState;
        a !== null && (n = a.retryLane);
        break;
    case 19:
        i = t.stateNode;
        break;
    case 22:
        i = t.stateNode._retryCache;
        break;
    default:
        throw Error(A(314))
    }
    i !== null && i.delete(e),
    by(t, n)
}
function Qx(t, e) {
    return fc(t, e)
}
var qs = null
  , xi = null
  , Tr = !1
  , Xs = !1
  , fo = !1
  , vn = 0;
function _e(t) {
    t !== xi && t.next === null && (xi === null ? qs = xi = t : xi = xi.next = t),
    Xs = !0,
    Tr || (Tr = !0,
    Kx())
}
function Sl(t, e) {
    if (!fo && Xs) {
        fo = !0;
        do
            for (var n = !1, i = qs; i !== null; ) {
                if (t !== 0) {
                    var a = i.pendingLanes;
                    if (a === 0)
                        var l = 0;
                    else {
                        var s = i.suspendedLanes
                          , u = i.pingedLanes;
                        l = (1 << 31 - It(42 | t) + 1) - 1,
                        l &= a & ~(s & ~u),
                        l = l & 201326741 ? l & 201326741 | 1 : l ? l | 2 : 0
                    }
                    l !== 0 && (n = !0,
                    Qd(i, l))
                } else
                    l = G,
                    l = fu(i, i === $ ? l : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                    !(l & 3) || ml(i, l) || (n = !0,
                    Qd(i, l));
                i = i.next
            }
        while (n);
        fo = !1
    }
}
function Zx() {
    Sy()
}
function Sy() {
    Xs = Tr = !1;
    var t = 0;
    vn !== 0 && nb() && (t = vn);
    for (var e = Pt(), n = null, i = qs; i !== null; ) {
        var a = i.next
          , l = Ty(i, e);
        l === 0 ? (i.next = null,
        n === null ? qs = a : n.next = a,
        a === null && (xi = n)) : (n = i,
        (t !== 0 || l & 3) && (Xs = !0)),
        i = a
    }
    xt !== 0 && xt !== 5 || Sl(t),
    vn !== 0 && (vn = 0)
}
function Ty(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, a = t.expirationTimes, l = t.pendingLanes & -62914561; 0 < l; ) {
        var s = 31 - It(l)
          , u = 1 << s
          , o = a[s];
        o === -1 ? (!(u & n) || u & i) && (a[s] = v1(u, e)) : o <= e && (t.expiredLanes |= u),
        l &= ~u
    }
    if (e = $,
    n = G,
    n = fu(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
    i = t.callbackNode,
    n === 0 || t === e && (J === 2 || J === 9) || t.cancelPendingCommit !== null)
        return i !== null && i !== null && Hu(i),
        t.callbackNode = null,
        t.callbackPriority = 0;
    if (!(n & 3) || ml(t, n)) {
        if (e = n & -n,
        e === t.callbackPriority)
            return e;
        switch (i !== null && Hu(i),
        hc(n)) {
        case 2:
        case 8:
            n = rp;
            break;
        case 32:
            n = Ms;
            break;
        case 268435456:
            n = cp;
            break;
        default:
            n = Ms
        }
        return i = Ay.bind(null, t),
        n = fc(n, i),
        t.callbackPriority = e,
        t.callbackNode = n,
        e
    }
    return i !== null && i !== null && Hu(i),
    t.callbackPriority = 2,
    t.callbackNode = null,
    2
}
function Ay(t, e) {
    if (xt !== 0 && xt !== 5)
        return t.callbackNode = null,
        t.callbackPriority = 0,
        null;
    var n = t.callbackNode;
    if (Mu() && t.callbackNode !== n)
        return null;
    var i = G;
    return i = fu(t, t === $ ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
    i === 0 ? null : (oy(t, i, e),
    Ty(t, Pt()),
    t.callbackNode != null && t.callbackNode === n ? Ay.bind(null, t) : null)
}
function Qd(t, e) {
    if (Mu())
        return null;
    oy(t, e, !0)
}
function Kx() {
    ab(function() {
        Z & 6 ? fc(op, Zx) : Sy()
    })
}
function Pc() {
    if (vn === 0) {
        var t = Ki;
        t === 0 && (t = jl,
        jl <<= 1,
        !(jl & 261888) && (jl = 256)),
        vn = t
    }
    return vn
}
function Zd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : es("" + t)
}
function Kd(t, e) {
    var n = e.ownerDocument.createElement("input");
    return n.name = e.name,
    n.value = e.value,
    t.id && n.setAttribute("form", t.id),
    e.parentNode.insertBefore(n, e),
    t = new FormData(t),
    n.parentNode.removeChild(n),
    t
}
function kx(t, e, n, i, a) {
    if (e === "submit" && n && n.stateNode === a) {
        var l = Zd((a[Qt] || null).action)
          , s = i.submitter;
        s && (e = (e = s[Qt] || null) ? Zd(e.formAction) : s.getAttribute("formAction"),
        e !== null && (l = e,
        s = null));
        var u = new du("action","action",null,i,a);
        t.push({
            event: u,
            listeners: [{
                instance: null,
                listener: function() {
                    if (i.defaultPrevented) {
                        if (vn !== 0) {
                            var o = s ? Kd(a, s) : new FormData(a);
                            dr(n, {
                                pending: !0,
                                data: o,
                                method: a.method,
                                action: l
                            }, null, o)
                        }
                    } else
                        typeof l == "function" && (u.preventDefault(),
                        o = s ? Kd(a, s) : new FormData(a),
                        dr(n, {
                            pending: !0,
                            data: o,
                            method: a.method,
                            action: l
                        }, l, o))
                },
                currentTarget: a
            }]
        })
    }
}
for (var ho = 0; ho < tr.length; ho++) {
    var mo = tr[ho]
      , Jx = mo.toLowerCase()
      , Fx = mo[0].toUpperCase() + mo.slice(1);
    we(Jx, "on" + Fx)
}
we(Up, "onAnimationEnd");
we(_p, "onAnimationIteration");
we(Bp, "onAnimationStart");
we("dblclick", "onDoubleClick");
we("focusin", "onFocus");
we("focusout", "onBlur");
we(fx, "onTransitionRun");
we(dx, "onTransitionStart");
we(hx, "onTransitionCancel");
we(Lp, "onTransitionEnd");
Qi("onMouseEnter", ["mouseout", "mouseover"]);
Qi("onMouseLeave", ["mouseout", "mouseover"]);
Qi("onPointerEnter", ["pointerout", "pointerover"]);
Qi("onPointerLeave", ["pointerout", "pointerover"]);
oi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
oi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
oi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
oi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
oi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
oi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var il = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Wx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));
function Ey(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n]
          , a = i.event;
        i = i.listeners;
        t: {
            var l = void 0;
            if (e)
                for (var s = i.length - 1; 0 <= s; s--) {
                    var u = i[s]
                      , o = u.instance
                      , r = u.currentTarget;
                    if (u = u.listener,
                    o !== l && a.isPropagationStopped())
                        break t;
                    l = u,
                    a.currentTarget = r;
                    try {
                        l(a)
                    } catch (c) {
                        ws(c)
                    }
                    a.currentTarget = null,
                    l = o
                }
            else
                for (s = 0; s < i.length; s++) {
                    if (u = i[s],
                    o = u.instance,
                    r = u.currentTarget,
                    u = u.listener,
                    o !== l && a.isPropagationStopped())
                        break t;
                    l = u,
                    a.currentTarget = r;
                    try {
                        l(a)
                    } catch (c) {
                        ws(c)
                    }
                    a.currentTarget = null,
                    l = o
                }
        }
    }
}
function H(t, e) {
    var n = e[Ko];
    n === void 0 && (n = e[Ko] = new Set);
    var i = t + "__bubble";
    n.has(i) || (My(e, t, 2, !1),
    n.add(i))
}
function po(t, e, n) {
    var i = 0;
    e && (i |= 4),
    My(n, t, i, e)
}
var Gl = "_reactListening" + Math.random().toString(36).slice(2);
function $c(t) {
    if (!t[Gl]) {
        t[Gl] = !0,
        yp.forEach(function(n) {
            n !== "selectionchange" && (Wx.has(n) || po(n, !1, t),
            po(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Gl] || (e[Gl] = !0,
        po("selectionchange", !1, e))
    }
}
function My(t, e, n, i) {
    switch (Ly(e)) {
    case 2:
        var a = Eb;
        break;
    case 8:
        a = Mb;
        break;
    default:
        a = nf
    }
    n = a.bind(null, e, n, t),
    a = void 0,
    !Po || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0),
    i ? a !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: a
    }) : t.addEventListener(e, n, !0) : a !== void 0 ? t.addEventListener(e, n, {
        passive: a
    }) : t.addEventListener(e, n, !1)
}
function yo(t, e, n, i, a) {
    var l = i;
    if (!(e & 1) && !(e & 2) && i !== null)
        t: for (; ; ) {
            if (i === null)
                return;
            var s = i.tag;
            if (s === 3 || s === 4) {
                var u = i.stateNode.containerInfo;
                if (u === a)
                    break;
                if (s === 4)
                    for (s = i.return; s !== null; ) {
                        var o = s.tag;
                        if ((o === 3 || o === 4) && s.stateNode.containerInfo === a)
                            return;
                        s = s.return
                    }
                for (; u !== null; ) {
                    if (s = Ai(u),
                    s === null)
                        return;
                    if (o = s.tag,
                    o === 5 || o === 6 || o === 26 || o === 27) {
                        i = l = s;
                        continue t
                    }
                    u = u.parentNode
                }
            }
            i = i.return
        }
    Ep(function() {
        var r = l
          , c = yc(n)
          , d = [];
        t: {
            var f = Hp.get(t);
            if (f !== void 0) {
                var h = du
                  , v = t;
                switch (t) {
                case "keypress":
                    if (is(n) === 0)
                        break t;
                case "keydown":
                case "keyup":
                    h = X1;
                    break;
                case "focusin":
                    v = "focus",
                    h = Qu;
                    break;
                case "focusout":
                    v = "blur",
                    h = Qu;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Qu;
                    break;
                case "click":
                    if (n.button === 2)
                        break t;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = td;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = j1;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = K1;
                    break;
                case Up:
                case _p:
                case Bp:
                    h = V1;
                    break;
                case Lp:
                    h = J1;
                    break;
                case "scroll":
                case "scrollend":
                    h = z1;
                    break;
                case "wheel":
                    h = W1;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = _1;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = nd;
                    break;
                case "toggle":
                case "beforetoggle":
                    h = $1
                }
                var b = (e & 4) !== 0
                  , S = !b && (t === "scroll" || t === "scrollend")
                  , p = b ? f !== null ? f + "Capture" : null : f;
                b = [];
                for (var m = r, y; m !== null; ) {
                    var x = m;
                    if (y = x.stateNode,
                    x = x.tag,
                    x !== 5 && x !== 26 && x !== 27 || y === null || p === null || (x = Fa(m, p),
                    x != null && b.push(al(m, x, y))),
                    S)
                        break;
                    m = m.return
                }
                0 < b.length && (f = new h(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: b
                }))
            }
        }
        if (!(e & 7)) {
            t: {
                if (f = t === "mouseover" || t === "pointerover",
                h = t === "mouseout" || t === "pointerout",
                f && n !== Wo && (v = n.relatedTarget || n.fromElement) && (Ai(v) || v[ia]))
                    break t;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (v = n.relatedTarget || n.toElement,
                h = r,
                v = v ? Ai(v) : null,
                v !== null && (S = dl(v),
                b = v.tag,
                v !== S || b !== 5 && b !== 27 && b !== 6) && (v = null)) : (h = null,
                v = r),
                h !== v)) {
                    if (b = td,
                    x = "onMouseLeave",
                    p = "onMouseEnter",
                    m = "mouse",
                    (t === "pointerout" || t === "pointerover") && (b = nd,
                    x = "onPointerLeave",
                    p = "onPointerEnter",
                    m = "pointer"),
                    S = h == null ? f : Aa(h),
                    y = v == null ? f : Aa(v),
                    f = new b(x,m + "leave",h,n,c),
                    f.target = S,
                    f.relatedTarget = y,
                    x = null,
                    Ai(c) === r && (b = new b(p,m + "enter",v,n,c),
                    b.target = y,
                    b.relatedTarget = S,
                    x = b),
                    S = x,
                    h && v)
                        e: {
                            for (b = Px,
                            p = h,
                            m = v,
                            y = 0,
                            x = p; x; x = b(x))
                                y++;
                            x = 0;
                            for (var T = m; T; T = b(T))
                                x++;
                            for (; 0 < y - x; )
                                p = b(p),
                                y--;
                            for (; 0 < x - y; )
                                m = b(m),
                                x--;
                            for (; y--; ) {
                                if (p === m || m !== null && p === m.alternate) {
                                    b = p;
                                    break e
                                }
                                p = b(p),
                                m = b(m)
                            }
                            b = null
                        }
                    else
                        b = null;
                    h !== null && kd(d, f, h, b, !1),
                    v !== null && S !== null && kd(d, S, v, b, !0)
                }
            }
            t: {
                if (f = r ? Aa(r) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var O = sd;
                else if (ld(f))
                    if (Op)
                        O = ox;
                    else {
                        O = sx;
                        var M = lx
                    }
                else
                    h = f.nodeName,
                    !h || h.toLowerCase() !== "input" || f.type !== "checkbox" && f.type !== "radio" ? r && pc(r.elementType) && (O = sd) : O = ux;
                if (O && (O = O(t, r))) {
                    zp(d, O, n, c);
                    break t
                }
                M && M(t, f, r),
                t === "focusout" && r && f.type === "number" && r.memoizedProps.value != null && Fo(f, "number", f.value)
            }
            switch (M = r ? Aa(r) : window,
            t) {
            case "focusin":
                (ld(M) || M.contentEditable === "true") && (Di = M,
                $o = r,
                ja = null);
                break;
            case "focusout":
                ja = $o = Di = null;
                break;
            case "mousedown":
                Io = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Io = !1,
                fd(d, n, c);
                break;
            case "selectionchange":
                if (cx)
                    break;
            case "keydown":
            case "keyup":
                fd(d, n, c)
            }
            var D;
            if (xc)
                t: {
                    switch (t) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break t;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break t;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break t
                    }
                    C = void 0
                }
            else
                Mi ? wp(t, n) && (C = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (Dp && n.locale !== "ko" && (Mi || C !== "onCompositionStart" ? C === "onCompositionEnd" && Mi && (D = Mp()) : (pn = c,
            gc = "value"in pn ? pn.value : pn.textContent,
            Mi = !0)),
            M = Qs(r, C),
            0 < M.length && (C = new ed(C,t,null,n,c),
            d.push({
                event: C,
                listeners: M
            }),
            D ? C.data = D : (D = Cp(n),
            D !== null && (C.data = D)))),
            (D = tx ? ex(t, n) : nx(t, n)) && (C = Qs(r, "onBeforeInput"),
            0 < C.length && (M = new ed("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: M,
                listeners: C
            }),
            M.data = D)),
            kx(d, t, r, n, c)
        }
        Ey(d, e)
    })
}
function al(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Qs(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
        var a = t
          , l = a.stateNode;
        if (a = a.tag,
        a !== 5 && a !== 26 && a !== 27 || l === null || (a = Fa(t, n),
        a != null && i.unshift(al(t, a, l)),
        a = Fa(t, e),
        a != null && i.push(al(t, a, l))),
        t.tag === 3)
            return i;
        t = t.return
    }
    return []
}
function Px(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null
}
function kd(t, e, n, i, a) {
    for (var l = e._reactName, s = []; n !== null && n !== i; ) {
        var u = n
          , o = u.alternate
          , r = u.stateNode;
        if (u = u.tag,
        o !== null && o === i)
            break;
        u !== 5 && u !== 26 && u !== 27 || r === null || (o = r,
        a ? (r = Fa(n, l),
        r != null && s.unshift(al(n, r, o))) : a || (r = Fa(n, l),
        r != null && s.push(al(n, r, o)))),
        n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var $x = /\r\n?/g
  , Ix = /\u0000|\uFFFD/g;
function Jd(t) {
    return (typeof t == "string" ? t : "" + t).replace($x, `
`).replace(Ix, "")
}
function Dy(t, e) {
    return e = Jd(e),
    Jd(t) === e
}
function W(t, e, n, i, a, l) {
    switch (n) {
    case "children":
        typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Zi(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Zi(t, "" + i);
        break;
    case "className":
        Vl(t, "class", i);
        break;
    case "tabIndex":
        Vl(t, "tabindex", i);
        break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
        Vl(t, n, i);
        break;
    case "style":
        Ap(t, i, l);
        break;
    case "data":
        if (e !== "object") {
            Vl(t, "data", i);
            break
        }
    case "src":
    case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
            t.removeAttribute(n);
            break
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(n);
            break
        }
        i = es("" + i),
        t.setAttribute(n, i);
        break;
    case "action":
    case "formAction":
        if (typeof i == "function") {
            t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break
        } else
            typeof l == "function" && (n === "formAction" ? (e !== "input" && W(t, e, "name", a.name, a, null),
            W(t, e, "formEncType", a.formEncType, a, null),
            W(t, e, "formMethod", a.formMethod, a, null),
            W(t, e, "formTarget", a.formTarget, a, null)) : (W(t, e, "encType", a.encType, a, null),
            W(t, e, "method", a.method, a, null),
            W(t, e, "target", a.target, a, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(n);
            break
        }
        i = es("" + i),
        t.setAttribute(n, i);
        break;
    case "onClick":
        i != null && (t.onclick = Ke);
        break;
    case "onScroll":
        i != null && H("scroll", t);
        break;
    case "onScrollEnd":
        i != null && H("scrollend", t);
        break;
    case "dangerouslySetInnerHTML":
        if (i != null) {
            if (typeof i != "object" || !("__html"in i))
                throw Error(A(61));
            if (n = i.__html,
            n != null) {
                if (a.children != null)
                    throw Error(A(60));
                t.innerHTML = n
            }
        }
        break;
    case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
    case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
        break;
    case "autoFocus":
        break;
    case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            t.removeAttribute("xlink:href");
            break
        }
        n = es("" + i),
        t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "" + i) : t.removeAttribute(n);
        break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
    case "capture":
    case "download":
        i === !0 ? t.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
    case "cols":
    case "rows":
    case "size":
    case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(n, i) : t.removeAttribute(n);
        break;
    case "rowSpan":
    case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(n) : t.setAttribute(n, i);
        break;
    case "popover":
        H("beforetoggle", t),
        H("toggle", t),
        ts(t, "popover", i);
        break;
    case "xlinkActuate":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
    case "xlinkArcrole":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
    case "xlinkRole":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
    case "xlinkShow":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
    case "xlinkTitle":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
    case "xlinkType":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
    case "xmlBase":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
    case "xmlLang":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
    case "xmlSpace":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
    case "is":
        ts(t, "is", i);
        break;
    case "innerText":
    case "textContent":
        break;
    default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = w1.get(n) || n,
        ts(t, n, i))
    }
}
function Ar(t, e, n, i, a, l) {
    switch (n) {
    case "style":
        Ap(t, i, l);
        break;
    case "dangerouslySetInnerHTML":
        if (i != null) {
            if (typeof i != "object" || !("__html"in i))
                throw Error(A(61));
            if (n = i.__html,
            n != null) {
                if (a.children != null)
                    throw Error(A(60));
                t.innerHTML = n
            }
        }
        break;
    case "children":
        typeof i == "string" ? Zi(t, i) : (typeof i == "number" || typeof i == "bigint") && Zi(t, "" + i);
        break;
    case "onScroll":
        i != null && H("scroll", t);
        break;
    case "onScrollEnd":
        i != null && H("scrollend", t);
        break;
    case "onClick":
        i != null && (t.onclick = Ke);
        break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
        break;
    case "innerText":
    case "textContent":
        break;
    default:
        if (!gp.hasOwnProperty(n))
            t: {
                if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"),
                e = n.slice(2, a ? n.length - 7 : void 0),
                l = t[Qt] || null,
                l = l != null ? l[n] : null,
                typeof l == "function" && t.removeEventListener(e, l, a),
                typeof i == "function")) {
                    typeof l != "function" && l !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)),
                    t.addEventListener(e, i, a);
                    break t
                }
                n in t ? t[n] = i : i === !0 ? t.setAttribute(n, "") : ts(t, n, i)
            }
    }
}
function Nt(t, e, n) {
    switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
        break;
    case "img":
        H("error", t),
        H("load", t);
        var i = !1, a = !1, l;
        for (l in n)
            if (n.hasOwnProperty(l)) {
                var s = n[l];
                if (s != null)
                    switch (l) {
                    case "src":
                        i = !0;
                        break;
                    case "srcSet":
                        a = !0;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(A(137, e));
                    default:
                        W(t, e, l, s, n, null)
                    }
            }
        a && W(t, e, "srcSet", n.srcSet, n, null),
        i && W(t, e, "src", n.src, n, null);
        return;
    case "input":
        H("invalid", t);
        var u = l = s = a = null
          , o = null
          , r = null;
        for (i in n)
            if (n.hasOwnProperty(i)) {
                var c = n[i];
                if (c != null)
                    switch (i) {
                    case "name":
                        a = c;
                        break;
                    case "type":
                        s = c;
                        break;
                    case "checked":
                        o = c;
                        break;
                    case "defaultChecked":
                        r = c;
                        break;
                    case "value":
                        l = c;
                        break;
                    case "defaultValue":
                        u = c;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(A(137, e));
                        break;
                    default:
                        W(t, e, i, c, n, null)
                    }
            }
        bp(t, l, u, o, r, s, a, !1);
        return;
    case "select":
        H("invalid", t),
        i = s = l = null;
        for (a in n)
            if (n.hasOwnProperty(a) && (u = n[a],
            u != null))
                switch (a) {
                case "value":
                    l = u;
                    break;
                case "defaultValue":
                    s = u;
                    break;
                case "multiple":
                    i = u;
                default:
                    W(t, e, a, u, n, null)
                }
        e = l,
        n = s,
        t.multiple = !!i,
        e != null ? Bi(t, !!i, e, !1) : n != null && Bi(t, !!i, n, !0);
        return;
    case "textarea":
        H("invalid", t),
        l = a = i = null;
        for (s in n)
            if (n.hasOwnProperty(s) && (u = n[s],
            u != null))
                switch (s) {
                case "value":
                    i = u;
                    break;
                case "defaultValue":
                    a = u;
                    break;
                case "children":
                    l = u;
                    break;
                case "dangerouslySetInnerHTML":
                    if (u != null)
                        throw Error(A(91));
                    break;
                default:
                    W(t, e, s, u, n, null)
                }
        Tp(t, i, a, l);
        return;
    case "option":
        for (o in n)
            if (n.hasOwnProperty(o) && (i = n[o],
            i != null))
                switch (o) {
                case "selected":
                    t.selected = i && typeof i != "function" && typeof i != "symbol";
                    break;
                default:
                    W(t, e, o, i, n, null)
                }
        return;
    case "dialog":
        H("beforetoggle", t),
        H("toggle", t),
        H("cancel", t),
        H("close", t);
        break;
    case "iframe":
    case "object":
        H("load", t);
        break;
    case "video":
    case "audio":
        for (i = 0; i < il.length; i++)
            H(il[i], t);
        break;
    case "image":
        H("error", t),
        H("load", t);
        break;
    case "details":
        H("toggle", t);
        break;
    case "embed":
    case "source":
    case "link":
        H("error", t),
        H("load", t);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
        for (r in n)
            if (n.hasOwnProperty(r) && (i = n[r],
            i != null))
                switch (r) {
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(A(137, e));
                default:
                    W(t, e, r, i, n, null)
                }
        return;
    default:
        if (pc(e)) {
            for (c in n)
                n.hasOwnProperty(c) && (i = n[c],
                i !== void 0 && Ar(t, e, c, i, n, void 0));
            return
        }
    }
    for (u in n)
        n.hasOwnProperty(u) && (i = n[u],
        i != null && W(t, e, u, i, n, null))
}
function tb(t, e, n, i) {
    switch (e) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
        break;
    case "input":
        var a = null
          , l = null
          , s = null
          , u = null
          , o = null
          , r = null
          , c = null;
        for (h in n) {
            var d = n[h];
            if (n.hasOwnProperty(h) && d != null)
                switch (h) {
                case "checked":
                    break;
                case "value":
                    break;
                case "defaultValue":
                    o = d;
                default:
                    i.hasOwnProperty(h) || W(t, e, h, null, i, d)
                }
        }
        for (var f in i) {
            var h = i[f];
            if (d = n[f],
            i.hasOwnProperty(f) && (h != null || d != null))
                switch (f) {
                case "type":
                    l = h;
                    break;
                case "name":
                    a = h;
                    break;
                case "checked":
                    r = h;
                    break;
                case "defaultChecked":
                    c = h;
                    break;
                case "value":
                    s = h;
                    break;
                case "defaultValue":
                    u = h;
                    break;
                case "children":
                case "dangerouslySetInnerHTML":
                    if (h != null)
                        throw Error(A(137, e));
                    break;
                default:
                    h !== d && W(t, e, f, h, i, d)
                }
        }
        Jo(t, s, u, o, r, c, l, a);
        return;
    case "select":
        h = s = u = f = null;
        for (l in n)
            if (o = n[l],
            n.hasOwnProperty(l) && o != null)
                switch (l) {
                case "value":
                    break;
                case "multiple":
                    h = o;
                default:
                    i.hasOwnProperty(l) || W(t, e, l, null, i, o)
                }
        for (a in i)
            if (l = i[a],
            o = n[a],
            i.hasOwnProperty(a) && (l != null || o != null))
                switch (a) {
                case "value":
                    f = l;
                    break;
                case "defaultValue":
                    u = l;
                    break;
                case "multiple":
                    s = l;
                default:
                    l !== o && W(t, e, a, l, i, o)
                }
        e = u,
        n = s,
        i = h,
        f != null ? Bi(t, !!n, f, !1) : !!i != !!n && (e != null ? Bi(t, !!n, e, !0) : Bi(t, !!n, n ? [] : "", !1));
        return;
    case "textarea":
        h = f = null;
        for (u in n)
            if (a = n[u],
            n.hasOwnProperty(u) && a != null && !i.hasOwnProperty(u))
                switch (u) {
                case "value":
                    break;
                case "children":
                    break;
                default:
                    W(t, e, u, null, i, a)
                }
        for (s in i)
            if (a = i[s],
            l = n[s],
            i.hasOwnProperty(s) && (a != null || l != null))
                switch (s) {
                case "value":
                    f = a;
                    break;
                case "defaultValue":
                    h = a;
                    break;
                case "children":
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null)
                        throw Error(A(91));
                    break;
                default:
                    a !== l && W(t, e, s, a, i, l)
                }
        Sp(t, f, h);
        return;
    case "option":
        for (var v in n)
            if (f = n[v],
            n.hasOwnProperty(v) && f != null && !i.hasOwnProperty(v))
                switch (v) {
                case "selected":
                    t.selected = !1;
                    break;
                default:
                    W(t, e, v, null, i, f)
                }
        for (o in i)
            if (f = i[o],
            h = n[o],
            i.hasOwnProperty(o) && f !== h && (f != null || h != null))
                switch (o) {
                case "selected":
                    t.selected = f && typeof f != "function" && typeof f != "symbol";
                    break;
                default:
                    W(t, e, o, f, i, h)
                }
        return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
        for (var b in n)
            f = n[b],
            n.hasOwnProperty(b) && f != null && !i.hasOwnProperty(b) && W(t, e, b, null, i, f);
        for (r in i)
            if (f = i[r],
            h = n[r],
            i.hasOwnProperty(r) && f !== h && (f != null || h != null))
                switch (r) {
                case "children":
                case "dangerouslySetInnerHTML":
                    if (f != null)
                        throw Error(A(137, e));
                    break;
                default:
                    W(t, e, r, f, i, h)
                }
        return;
    default:
        if (pc(e)) {
            for (var S in n)
                f = n[S],
                n.hasOwnProperty(S) && f !== void 0 && !i.hasOwnProperty(S) && Ar(t, e, S, void 0, i, f);
            for (c in i)
                f = i[c],
                h = n[c],
                !i.hasOwnProperty(c) || f === h || f === void 0 && h === void 0 || Ar(t, e, c, f, i, h);
            return
        }
    }
    for (var p in n)
        f = n[p],
        n.hasOwnProperty(p) && f != null && !i.hasOwnProperty(p) && W(t, e, p, null, i, f);
    for (d in i)
        f = i[d],
        h = n[d],
        !i.hasOwnProperty(d) || f === h || f == null && h == null || W(t, e, d, f, i, h)
}
function Fd(t) {
    switch (t) {
    case "css":
    case "script":
    case "font":
    case "img":
    case "image":
    case "input":
    case "link":
        return !0;
    default:
        return !1
    }
}
function eb() {
    if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0; i < n.length; i++) {
            var a = n[i]
              , l = a.transferSize
              , s = a.initiatorType
              , u = a.duration;
            if (l && u && Fd(s)) {
                for (s = 0,
                u = a.responseEnd,
                i += 1; i < n.length; i++) {
                    var o = n[i]
                      , r = o.startTime;
                    if (r > u)
                        break;
                    var c = o.transferSize
                      , d = o.initiatorType;
                    c && Fd(d) && (o = o.responseEnd,
                    s += c * (o < u ? 1 : (u - r) / (o - r)))
                }
                if (--i,
                e += 8 * (l + s) / (a.duration / 1e3),
                t++,
                10 < t)
                    break
            }
        }
        if (0 < t)
            return e / t / 1e6
    }
    return navigator.connection && (t = navigator.connection.downlink,
    typeof t == "number") ? t : 5
}
var Er = null
  , Mr = null;
function Zs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
}
function Wd(t) {
    switch (t) {
    case "http://www.w3.org/2000/svg":
        return 1;
    case "http://www.w3.org/1998/Math/MathML":
        return 2;
    default:
        return 0
    }
}
function wy(t, e) {
    if (t === 0)
        switch (e) {
        case "svg":
            return 1;
        case "math":
            return 2;
        default:
            return 0
        }
    return t === 1 && e === "foreignObject" ? 0 : t
}
function Dr(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var go = null;
function nb() {
    var t = window.event;
    return t && t.type === "popstate" ? t === go ? !1 : (go = t,
    !0) : (go = null,
    !1)
}
var Cy = typeof setTimeout == "function" ? setTimeout : void 0
  , ib = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Pd = typeof Promise == "function" ? Promise : void 0
  , ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pd < "u" ? function(t) {
    return Pd.resolve(null).then(t).catch(lb)
}
: Cy;
function lb(t) {
    setTimeout(function() {
        throw t
    })
}
function _n(t) {
    return t === "head"
}
function $d(t, e) {
    var n = e
      , i = 0;
    do {
        var a = n.nextSibling;
        if (t.removeChild(n),
        a && a.nodeType === 8)
            if (n = a.data,
            n === "/$" || n === "/&") {
                if (i === 0) {
                    t.removeChild(a),
                    Ii(e);
                    return
                }
                i--
            } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
                i++;
            else if (n === "html")
                Ga(t.ownerDocument.documentElement);
            else if (n === "head") {
                n = t.ownerDocument.head,
                Ga(n);
                for (var l = n.firstChild; l; ) {
                    var s = l.nextSibling
                      , u = l.nodeName;
                    l[yl] || u === "SCRIPT" || u === "STYLE" || u === "LINK" && l.rel.toLowerCase() === "stylesheet" || n.removeChild(l),
                    l = s
                }
            } else
                n === "body" && Ga(t.ownerDocument.body);
        n = a
    } while (n);
    Ii(e)
}
function Id(t, e) {
    var n = t;
    t = 0;
    do {
        var i = n.nextSibling;
        if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display,
        n.style.display = "none") : (n.style.display = n._stashedDisplay || "",
        n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue,
        n.nodeValue = "") : n.nodeValue = n._stashedText || ""),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (t === 0)
                    break;
                t--
            } else
                n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
        n = i
    } while (n)
}
function wr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var n = e;
        switch (e = e.nextSibling,
        n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
            wr(n),
            mc(n);
            continue;
        case "SCRIPT":
        case "STYLE":
            continue;
        case "LINK":
            if (n.rel.toLowerCase() === "stylesheet")
                continue
        }
        t.removeChild(n)
    }
}
function sb(t, e, n, i) {
    for (; t.nodeType === 1; ) {
        var a = n;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
            if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                break
        } else if (i) {
            if (!t[yl])
                switch (e) {
                case "meta":
                    if (!t.hasAttribute("itemprop"))
                        break;
                    return t;
                case "link":
                    if (l = t.getAttribute("rel"),
                    l === "stylesheet" && t.hasAttribute("data-precedence"))
                        break;
                    if (l !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                        break;
                    return t;
                case "style":
                    if (t.hasAttribute("data-precedence"))
                        break;
                    return t;
                case "script":
                    if (l = t.getAttribute("src"),
                    (l !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && l && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                        break;
                    return t;
                default:
                    return t
                }
        } else if (e === "input" && t.type === "hidden") {
            var l = a.name == null ? null : "" + a.name;
            if (a.type === "hidden" && t.getAttribute("name") === l)
                return t
        } else
            return t;
        if (t = pe(t.nextSibling),
        t === null)
            break
    }
    return null
}
function ub(t, e, n) {
    if (e === "")
        return null;
    for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = pe(t.nextSibling),
        t === null))
            return null;
    return t
}
function zy(t, e) {
    for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = pe(t.nextSibling),
        t === null))
            return null;
    return t
}
function Cr(t) {
    return t.data === "$?" || t.data === "$~"
}
function zr(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
}
function ob(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~")
        t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
        e();
    else {
        var i = function() {
            e(),
            n.removeEventListener("DOMContentLoaded", i)
        };
        n.addEventListener("DOMContentLoaded", i),
        t._reactRetry = i
    }
}
function pe(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                break;
            if (e === "/$" || e === "/&")
                return null
        }
    }
    return t
}
var Or = null;
function th(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "/$" || n === "/&") {
                if (e === 0)
                    return pe(t.nextSibling);
                e--
            } else
                n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++
        }
        t = t.nextSibling
    }
    return null
}
function eh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
                if (e === 0)
                    return t;
                e--
            } else
                n !== "/$" && n !== "/&" || e++
        }
        t = t.previousSibling
    }
    return null
}
function Oy(t, e, n) {
    switch (e = Zs(n),
    t) {
    case "html":
        if (t = e.documentElement,
        !t)
            throw Error(A(452));
        return t;
    case "head":
        if (t = e.head,
        !t)
            throw Error(A(453));
        return t;
    case "body":
        if (t = e.body,
        !t)
            throw Error(A(454));
        return t;
    default:
        throw Error(A(451))
    }
}
function Ga(t) {
    for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
    mc(t)
}
var ye = new Map
  , nh = new Set;
function Ks(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
}
var nn = K.d;
K.d = {
    f: rb,
    r: cb,
    D: fb,
    C: db,
    L: hb,
    m: mb,
    X: yb,
    S: pb,
    M: gb
};
function rb() {
    var t = nn.f()
      , e = Au();
    return t || e
}
function cb(t) {
    var e = aa(t);
    e !== null && e.tag === 5 && e.type === "form" ? A0(e) : nn.r(t)
}
var oa = typeof document > "u" ? null : document;
function jy(t, e, n) {
    var i = oa;
    if (i && typeof e == "string" && e) {
        var a = ce(e);
        a = 'link[rel="' + t + '"][href="' + a + '"]',
        typeof n == "string" && (a += '[crossorigin="' + n + '"]'),
        nh.has(a) || (nh.add(a),
        t = {
            rel: t,
            crossOrigin: n,
            href: e
        },
        i.querySelector(a) === null && (e = i.createElement("link"),
        Nt(e, "link", t),
        Mt(e),
        i.head.appendChild(e)))
    }
}
function fb(t) {
    nn.D(t),
    jy("dns-prefetch", t, null)
}
function db(t, e) {
    nn.C(t, e),
    jy("preconnect", t, e)
}
function hb(t, e, n) {
    nn.L(t, e, n);
    var i = oa;
    if (i && t && e) {
        var a = 'link[rel="preload"][as="' + ce(e) + '"]';
        e === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + ce(n.imageSrcSet) + '"]',
        typeof n.imageSizes == "string" && (a += '[imagesizes="' + ce(n.imageSizes) + '"]')) : a += '[href="' + ce(t) + '"]';
        var l = a;
        switch (e) {
        case "style":
            l = $i(t);
            break;
        case "script":
            l = ra(t)
        }
        ye.has(l) || (t = st({
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e
        }, n),
        ye.set(l, t),
        i.querySelector(a) !== null || e === "style" && i.querySelector(Tl(l)) || e === "script" && i.querySelector(Al(l)) || (e = i.createElement("link"),
        Nt(e, "link", t),
        Mt(e),
        i.head.appendChild(e)))
    }
}
function mb(t, e) {
    nn.m(t, e);
    var n = oa;
    if (n && t) {
        var i = e && typeof e.as == "string" ? e.as : "script"
          , a = 'link[rel="modulepreload"][as="' + ce(i) + '"][href="' + ce(t) + '"]'
          , l = a;
        switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
            l = ra(t)
        }
        if (!ye.has(l) && (t = st({
            rel: "modulepreload",
            href: t
        }, e),
        ye.set(l, t),
        n.querySelector(a) === null)) {
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                if (n.querySelector(Al(l)))
                    return
            }
            i = n.createElement("link"),
            Nt(i, "link", t),
            Mt(i),
            n.head.appendChild(i)
        }
    }
}
function pb(t, e, n) {
    nn.S(t, e, n);
    var i = oa;
    if (i && t) {
        var a = _i(i).hoistableStyles
          , l = $i(t);
        e = e || "default";
        var s = a.get(l);
        if (!s) {
            var u = {
                loading: 0,
                preload: null
            };
            if (s = i.querySelector(Tl(l)))
                u.loading = 5;
            else {
                t = st({
                    rel: "stylesheet",
                    href: t,
                    "data-precedence": e
                }, n),
                (n = ye.get(l)) && Ic(t, n);
                var o = s = i.createElement("link");
                Mt(o),
                Nt(o, "link", t),
                o._p = new Promise(function(r, c) {
                    o.onload = r,
                    o.onerror = c
                }
                ),
                o.addEventListener("load", function() {
                    u.loading |= 1
                }),
                o.addEventListener("error", function() {
                    u.loading |= 2
                }),
                u.loading |= 4,
                fs(s, e, i)
            }
            s = {
                type: "stylesheet",
                instance: s,
                count: 1,
                state: u
            },
            a.set(l, s)
        }
    }
}
function yb(t, e) {
    nn.X(t, e);
    var n = oa;
    if (n && t) {
        var i = _i(n).hoistableScripts
          , a = ra(t)
          , l = i.get(a);
        l || (l = n.querySelector(Al(a)),
        l || (t = st({
            src: t,
            async: !0
        }, e),
        (e = ye.get(a)) && tf(t, e),
        l = n.createElement("script"),
        Mt(l),
        Nt(l, "link", t),
        n.head.appendChild(l)),
        l = {
            type: "script",
            instance: l,
            count: 1,
            state: null
        },
        i.set(a, l))
    }
}
function gb(t, e) {
    nn.M(t, e);
    var n = oa;
    if (n && t) {
        var i = _i(n).hoistableScripts
          , a = ra(t)
          , l = i.get(a);
        l || (l = n.querySelector(Al(a)),
        l || (t = st({
            src: t,
            async: !0,
            type: "module"
        }, e),
        (e = ye.get(a)) && tf(t, e),
        l = n.createElement("script"),
        Mt(l),
        Nt(l, "link", t),
        n.head.appendChild(l)),
        l = {
            type: "script",
            instance: l,
            count: 1,
            state: null
        },
        i.set(a, l))
    }
}
function ih(t, e, n, i) {
    var a = (a = bn.current) ? Ks(a) : null;
    if (!a)
        throw Error(A(446));
    switch (t) {
    case "meta":
    case "title":
        return null;
    case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (e = $i(n.href),
        n = _i(a).hoistableStyles,
        i = n.get(e),
        i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
        },
        n.set(e, i)),
        i) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
        };
    case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
            t = $i(n.href);
            var l = _i(a).hoistableStyles
              , s = l.get(t);
            if (s || (a = a.ownerDocument || a,
            s = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: {
                    loading: 0,
                    preload: null
                }
            },
            l.set(t, s),
            (l = a.querySelector(Tl(t))) && !l._p && (s.instance = l,
            s.state.loading = 5),
            ye.has(t) || (n = {
                rel: "preload",
                as: "style",
                href: n.href,
                crossOrigin: n.crossOrigin,
                integrity: n.integrity,
                media: n.media,
                hrefLang: n.hrefLang,
                referrerPolicy: n.referrerPolicy
            },
            ye.set(t, n),
            l || vb(a, t, n, s.state))),
            e && i === null)
                throw Error(A(528, ""));
            return s
        }
        if (e && i !== null)
            throw Error(A(529, ""));
        return null;
    case "script":
        return e = n.async,
        n = n.src,
        typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ra(n),
        n = _i(a).hoistableScripts,
        i = n.get(e),
        i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
        },
        n.set(e, i)),
        i) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
        };
    default:
        throw Error(A(444, t))
    }
}
function $i(t) {
    return 'href="' + ce(t) + '"'
}
function Tl(t) {
    return 'link[rel="stylesheet"][' + t + "]"
}
function Ny(t) {
    return st({}, t, {
        "data-precedence": t.precedence,
        precedence: null
    })
}
function vb(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"),
    i.preload = e,
    e.addEventListener("load", function() {
        return i.loading |= 1
    }),
    e.addEventListener("error", function() {
        return i.loading |= 2
    }),
    Nt(e, "link", n),
    Mt(e),
    t.head.appendChild(e))
}
function ra(t) {
    return '[src="' + ce(t) + '"]'
}
function Al(t) {
    return "script[async]" + t
}
function ah(t, e, n) {
    if (e.count++,
    e.instance === null)
        switch (e.type) {
        case "style":
            var i = t.querySelector('style[data-href~="' + ce(n.href) + '"]');
            if (i)
                return e.instance = i,
                Mt(i),
                i;
            var a = st({}, n, {
                "data-href": n.href,
                "data-precedence": n.precedence,
                href: null,
                precedence: null
            });
            return i = (t.ownerDocument || t).createElement("style"),
            Mt(i),
            Nt(i, "style", a),
            fs(i, n.precedence, t),
            e.instance = i;
        case "stylesheet":
            a = $i(n.href);
            var l = t.querySelector(Tl(a));
            if (l)
                return e.state.loading |= 4,
                e.instance = l,
                Mt(l),
                l;
            i = Ny(n),
            (a = ye.get(a)) && Ic(i, a),
            l = (t.ownerDocument || t).createElement("link"),
            Mt(l);
            var s = l;
            return s._p = new Promise(function(u, o) {
                s.onload = u,
                s.onerror = o
            }
            ),
            Nt(l, "link", i),
            e.state.loading |= 4,
            fs(l, n.precedence, t),
            e.instance = l;
        case "script":
            return l = ra(n.src),
            (a = t.querySelector(Al(l))) ? (e.instance = a,
            Mt(a),
            a) : (i = n,
            (a = ye.get(l)) && (i = st({}, n),
            tf(i, a)),
            t = t.ownerDocument || t,
            a = t.createElement("script"),
            Mt(a),
            Nt(a, "link", i),
            t.head.appendChild(a),
            e.instance = a);
        case "void":
            return null;
        default:
            throw Error(A(443, e.type))
        }
    else
        e.type === "stylesheet" && !(e.state.loading & 4) && (i = e.instance,
        e.state.loading |= 4,
        fs(i, n.precedence, t));
    return e.instance
}
function fs(t, e, n) {
    for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = i.length ? i[i.length - 1] : null, l = a, s = 0; s < i.length; s++) {
        var u = i[s];
        if (u.dataset.precedence === e)
            l = u;
        else if (l !== a)
            break
    }
    l ? l.parentNode.insertBefore(t, l.nextSibling) : (e = n.nodeType === 9 ? n.head : n,
    e.insertBefore(t, e.firstChild))
}
function Ic(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
    t.title == null && (t.title = e.title)
}
function tf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
    t.integrity == null && (t.integrity = e.integrity)
}
var ds = null;
function lh(t, e, n) {
    if (ds === null) {
        var i = new Map
          , a = ds = new Map;
        a.set(n, i)
    } else
        a = ds,
        i = a.get(n),
        i || (i = new Map,
        a.set(n, i));
    if (i.has(t))
        return i;
    for (i.set(t, null),
    n = n.getElementsByTagName(t),
    a = 0; a < n.length; a++) {
        var l = n[a];
        if (!(l[yl] || l[Ct] || t === "link" && l.getAttribute("rel") === "stylesheet") && l.namespaceURI !== "http://www.w3.org/2000/svg") {
            var s = l.getAttribute(e) || "";
            s = t + s;
            var u = i.get(s);
            u ? u.push(l) : i.set(s, [l])
        }
    }
    return i
}
function sh(t, e, n) {
    t = t.ownerDocument || t,
    t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null)
}
function xb(t, e, n) {
    if (n === 1 || e.itemProp != null)
        return !1;
    switch (t) {
    case "meta":
    case "title":
        return !0;
    case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
            break;
        return !0;
    case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
            break;
        switch (e.rel) {
        case "stylesheet":
            return t = e.disabled,
            typeof e.precedence == "string" && t == null;
        default:
            return !0
        }
    case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
            return !0
    }
    return !1
}
function Ry(t) {
    return !(t.type === "stylesheet" && !(t.state.loading & 3))
}
function bb(t, e, n, i) {
    if (n.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && !(n.state.loading & 4)) {
        if (n.instance === null) {
            var a = $i(i.href)
              , l = e.querySelector(Tl(a));
            if (l) {
                e = l._p,
                e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                t = ks.bind(t),
                e.then(t, t)),
                n.state.loading |= 4,
                n.instance = l,
                Mt(l);
                return
            }
            l = e.ownerDocument || e,
            i = Ny(i),
            (a = ye.get(a)) && Ic(i, a),
            l = l.createElement("link"),
            Mt(l);
            var s = l;
            s._p = new Promise(function(u, o) {
                s.onload = u,
                s.onerror = o
            }
            ),
            Nt(l, "link", i),
            n.instance = l
        }
        t.stylesheets === null && (t.stylesheets = new Map),
        t.stylesheets.set(n, e),
        (e = n.state.preload) && !(n.state.loading & 3) && (t.count++,
        n = ks.bind(t),
        e.addEventListener("load", n),
        e.addEventListener("error", n))
    }
}
var vo = 0;
function Sb(t, e) {
    return t.stylesheets && t.count === 0 && hs(t, t.stylesheets),
    0 < t.count || 0 < t.imgCount ? function(n) {
        var i = setTimeout(function() {
            if (t.stylesheets && hs(t, t.stylesheets),
            t.unsuspend) {
                var l = t.unsuspend;
                t.unsuspend = null,
                l()
            }
        }, 6e4 + e);
        0 < t.imgBytes && vo === 0 && (vo = 62500 * eb());
        var a = setTimeout(function() {
            if (t.waitingForImages = !1,
            t.count === 0 && (t.stylesheets && hs(t, t.stylesheets),
            t.unsuspend)) {
                var l = t.unsuspend;
                t.unsuspend = null,
                l()
            }
        }, (t.imgBytes > vo ? 50 : 800) + e);
        return t.unsuspend = n,
        function() {
            t.unsuspend = null,
            clearTimeout(i),
            clearTimeout(a)
        }
    }
    : null
}
function ks() {
    if (this.count--,
    this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
            hs(this, this.stylesheets);
        else if (this.unsuspend) {
            var t = this.unsuspend;
            this.unsuspend = null,
            t()
        }
    }
}
var Js = null;
function hs(t, e) {
    t.stylesheets = null,
    t.unsuspend !== null && (t.count++,
    Js = new Map,
    e.forEach(Tb, t),
    Js = null,
    ks.call(t))
}
function Tb(t, e) {
    if (!(e.state.loading & 4)) {
        var n = Js.get(t);
        if (n)
            var i = n.get(null);
        else {
            n = new Map,
            Js.set(t, n);
            for (var a = t.querySelectorAll("link[data-precedence],style[data-precedence]"), l = 0; l < a.length; l++) {
                var s = a[l];
                (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s),
                i = s)
            }
            i && n.set(null, i)
        }
        a = e.instance,
        s = a.getAttribute("data-precedence"),
        l = n.get(s) || i,
        l === i && n.set(null, a),
        n.set(s, a),
        this.count++,
        i = ks.bind(this),
        a.addEventListener("load", i),
        a.addEventListener("error", i),
        l ? l.parentNode.insertBefore(a, l.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
        t.insertBefore(a, t.firstChild)),
        e.state.loading |= 4
    }
}
var ll = {
    $$typeof: Ze,
    Provider: null,
    Consumer: null,
    _currentValue: Wn,
    _currentValue2: Wn,
    _threadCount: 0
};
function Ab(t, e, n, i, a, l, s, u, o) {
    this.tag = 1,
    this.containerInfo = t,
    this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
    this.callbackPriority = 0,
    this.expirationTimes = Yu(-1),
    this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Yu(0),
    this.hiddenUpdates = Yu(null),
    this.identifierPrefix = i,
    this.onUncaughtError = a,
    this.onCaughtError = l,
    this.onRecoverableError = s,
    this.pooledCache = null,
    this.pooledCacheLanes = 0,
    this.formState = o,
    this.incompleteTransitions = new Map
}
function Vy(t, e, n, i, a, l, s, u, o, r, c, d) {
    return t = new Ab(t,e,n,s,o,r,c,d,u),
    e = 1,
    l === !0 && (e |= 24),
    l = Ft(3, null, null, e),
    t.current = l,
    l.stateNode = t,
    e = Dc(),
    e.refCount++,
    t.pooledCache = e,
    e.refCount++,
    l.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: e
    },
    zc(l),
    t
}
function Uy(t) {
    return t ? (t = zi,
    t) : zi
}
function _y(t, e, n, i, a, l) {
    a = Uy(a),
    i.context === null ? i.context = a : i.pendingContext = a,
    i = Tn(e),
    i.payload = {
        element: n
    },
    l = l === void 0 ? null : l,
    l !== null && (i.callback = l),
    n = An(t, i, e),
    n !== null && (qt(n, t, e),
    Ra(n, t, e))
}
function uh(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function ef(t, e) {
    uh(t, e),
    (t = t.alternate) && uh(t, e)
}
function By(t) {
    if (t.tag === 13 || t.tag === 31) {
        var e = fi(t, 67108864);
        e !== null && qt(e, t, 67108864),
        ef(t, 67108864)
    }
}
function oh(t) {
    if (t.tag === 13 || t.tag === 31) {
        var e = te();
        e = dc(e);
        var n = fi(t, e);
        n !== null && qt(n, t, e),
        ef(t, e)
    }
}
var Fs = !0;
function Eb(t, e, n, i) {
    var a = V.T;
    V.T = null;
    var l = K.p;
    try {
        K.p = 2,
        nf(t, e, n, i)
    } finally {
        K.p = l,
        V.T = a
    }
}
function Mb(t, e, n, i) {
    var a = V.T;
    V.T = null;
    var l = K.p;
    try {
        K.p = 8,
        nf(t, e, n, i)
    } finally {
        K.p = l,
        V.T = a
    }
}
function nf(t, e, n, i) {
    if (Fs) {
        var a = jr(i);
        if (a === null)
            yo(t, e, i, Ws, n),
            rh(t, i);
        else if (wb(a, t, e, n, i))
            i.stopPropagation();
        else if (rh(t, i),
        e & 4 && -1 < Db.indexOf(t)) {
            for (; a !== null; ) {
                var l = aa(a);
                if (l !== null)
                    switch (l.tag) {
                    case 3:
                        if (l = l.stateNode,
                        l.current.memoizedState.isDehydrated) {
                            var s = Qn(l.pendingLanes);
                            if (s !== 0) {
                                var u = l;
                                for (u.pendingLanes |= 2,
                                u.entangledLanes |= 2; s; ) {
                                    var o = 1 << 31 - It(s);
                                    u.entanglements[1] |= o,
                                    s &= ~o
                                }
                                _e(l),
                                !(Z & 6) && (Hs = Pt() + 500,
                                Sl(0))
                            }
                        }
                        break;
                    case 31:
                    case 13:
                        u = fi(l, 2),
                        u !== null && qt(u, l, 2),
                        Au(),
                        ef(l, 2)
                    }
                if (l = jr(i),
                l === null && yo(t, e, i, Ws, n),
                l === a)
                    break;
                a = l
            }
            a !== null && i.stopPropagation()
        } else
            yo(t, e, i, null, n)
    }
}
function jr(t) {
    return t = yc(t),
    af(t)
}
var Ws = null;
function af(t) {
    if (Ws = null,
    t = Ai(t),
    t !== null) {
        var e = dl(t);
        if (e === null)
            t = null;
        else {
            var n = e.tag;
            if (n === 13) {
                if (t = ip(e),
                t !== null)
                    return t;
                t = null
            } else if (n === 31) {
                if (t = ap(e),
                t !== null)
                    return t;
                t = null
            } else if (n === 3) {
                if (e.stateNode.current.memoizedState.isDehydrated)
                    return e.tag === 3 ? e.stateNode.containerInfo : null;
                t = null
            } else
                e !== t && (t = null)
        }
    }
    return Ws = t,
    null
}
function Ly(t) {
    switch (t) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 8;
    case "message":
        switch (f1()) {
        case op:
            return 2;
        case rp:
            return 8;
        case Ms:
        case d1:
            return 32;
        case cp:
            return 268435456;
        default:
            return 32
        }
    default:
        return 32
    }
}
var Nr = !1
  , Dn = null
  , wn = null
  , Cn = null
  , sl = new Map
  , ul = new Map
  , dn = []
  , Db = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
function rh(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Dn = null;
        break;
    case "dragenter":
    case "dragleave":
        wn = null;
        break;
    case "mouseover":
    case "mouseout":
        Cn = null;
        break;
    case "pointerover":
    case "pointerout":
        sl.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ul.delete(e.pointerId)
    }
}
function xa(t, e, n, i, a, l) {
    return t === null || t.nativeEvent !== l ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: l,
        targetContainers: [a]
    },
    e !== null && (e = aa(e),
    e !== null && By(e)),
    t) : (t.eventSystemFlags |= i,
    e = t.targetContainers,
    a !== null && e.indexOf(a) === -1 && e.push(a),
    t)
}
function wb(t, e, n, i, a) {
    switch (e) {
    case "focusin":
        return Dn = xa(Dn, t, e, n, i, a),
        !0;
    case "dragenter":
        return wn = xa(wn, t, e, n, i, a),
        !0;
    case "mouseover":
        return Cn = xa(Cn, t, e, n, i, a),
        !0;
    case "pointerover":
        var l = a.pointerId;
        return sl.set(l, xa(sl.get(l) || null, t, e, n, i, a)),
        !0;
    case "gotpointercapture":
        return l = a.pointerId,
        ul.set(l, xa(ul.get(l) || null, t, e, n, i, a)),
        !0
    }
    return !1
}
function Hy(t) {
    var e = Ai(t.target);
    if (e !== null) {
        var n = dl(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = ip(n),
                e !== null) {
                    t.blockedOn = e,
                    kf(t.priority, function() {
                        oh(n)
                    });
                    return
                }
            } else if (e === 31) {
                if (e = ap(n),
                e !== null) {
                    t.blockedOn = e,
                    kf(t.priority, function() {
                        oh(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function ms(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = jr(t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type,n);
            Wo = i,
            n.target.dispatchEvent(i),
            Wo = null
        } else
            return e = aa(n),
            e !== null && By(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function ch(t, e, n) {
    ms(t) && n.delete(e)
}
function Cb() {
    Nr = !1,
    Dn !== null && ms(Dn) && (Dn = null),
    wn !== null && ms(wn) && (wn = null),
    Cn !== null && ms(Cn) && (Cn = null),
    sl.forEach(ch),
    ul.forEach(ch)
}
function ql(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Nr || (Nr = !0,
    bt.unstable_scheduleCallback(bt.unstable_NormalPriority, Cb)))
}
var Xl = null;
function fh(t) {
    Xl !== t && (Xl = t,
    bt.unstable_scheduleCallback(bt.unstable_NormalPriority, function() {
        Xl === t && (Xl = null);
        for (var e = 0; e < t.length; e += 3) {
            var n = t[e]
              , i = t[e + 1]
              , a = t[e + 2];
            if (typeof i != "function") {
                if (af(i || n) === null)
                    continue;
                break
            }
            var l = aa(n);
            l !== null && (t.splice(e, 3),
            e -= 3,
            dr(l, {
                pending: !0,
                data: a,
                method: n.method,
                action: i
            }, i, a))
        }
    }))
}
function Ii(t) {
    function e(o) {
        return ql(o, t)
    }
    Dn !== null && ql(Dn, t),
    wn !== null && ql(wn, t),
    Cn !== null && ql(Cn, t),
    sl.forEach(e),
    ul.forEach(e);
    for (var n = 0; n < dn.length; n++) {
        var i = dn[n];
        i.blockedOn === t && (i.blockedOn = null)
    }
    for (; 0 < dn.length && (n = dn[0],
    n.blockedOn === null); )
        Hy(n),
        n.blockedOn === null && dn.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay,
    n != null)
        for (i = 0; i < n.length; i += 3) {
            var a = n[i]
              , l = n[i + 1]
              , s = a[Qt] || null;
            if (typeof l == "function")
                s || fh(n);
            else if (s) {
                var u = null;
                if (l && l.hasAttribute("formAction")) {
                    if (a = l,
                    s = l[Qt] || null)
                        u = s.formAction;
                    else if (af(a) !== null)
                        continue
                } else
                    u = s.action;
                typeof u == "function" ? n[i + 1] = u : (n.splice(i, 3),
                i -= 3),
                fh(n)
            }
        }
}
function Yy() {
    function t(l) {
        l.canIntercept && l.info === "react-transition" && l.intercept({
            handler: function() {
                return new Promise(function(s) {
                    return a = s
                }
                )
            },
            focusReset: "manual",
            scroll: "manual"
        })
    }
    function e() {
        a !== null && (a(),
        a = null),
        i || setTimeout(n, 20)
    }
    function n() {
        if (!i && !navigation.transition) {
            var l = navigation.currentEntry;
            l && l.url != null && navigation.navigate(l.url, {
                state: l.getState(),
                info: "react-transition",
                history: "replace"
            })
        }
    }
    if (typeof navigation == "object") {
        var i = !1
          , a = null;
        return navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function() {
            i = !0,
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            a !== null && (a(),
            a = null)
        }
    }
}
function lf(t) {
    this._internalRoot = t
}
Du.prototype.render = lf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(A(409));
    var n = e.current
      , i = te();
    _y(n, i, t, e, null, null)
}
;
Du.prototype.unmount = lf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        _y(t.current, 2, null, t, null, null),
        Au(),
        e[ia] = null
    }
}
;
function Du(t) {
    this._internalRoot = t
}
Du.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = pp();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < dn.length && e !== 0 && e < dn[n].priority; n++)
            ;
        dn.splice(n, 0, t),
        n === 0 && Hy(t)
    }
}
;
var dh = ep.version;
if (dh !== "19.2.4")
    throw Error(A(527, dh, "19.2.4"));
K.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(A(188)) : (t = Object.keys(t).join(","),
        Error(A(268, t)));
    return t = a1(e),
    t = t !== null ? lp(t) : null,
    t = t === null ? null : t.stateNode,
    t
}
;
var zb = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    reconcilerVersion: "19.2.4"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber)
        try {
            hl = Ql.inject(zb),
            $t = Ql
        } catch {}
}
ru.createRoot = function(t, e) {
    if (!np(t))
        throw Error(A(299));
    var n = !1
      , i = ""
      , a = j0
      , l = N0
      , s = R0;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
    e.onUncaughtError !== void 0 && (a = e.onUncaughtError),
    e.onCaughtError !== void 0 && (l = e.onCaughtError),
    e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    e = Vy(t, 1, !1, null, null, n, i, null, a, l, s, Yy),
    t[ia] = e.current,
    $c(t),
    new lf(e)
}
;
ru.hydrateRoot = function(t, e, n) {
    if (!np(t))
        throw Error(A(299));
    var i = !1
      , a = ""
      , l = j0
      , s = N0
      , u = R0
      , o = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
    n.onUncaughtError !== void 0 && (l = n.onUncaughtError),
    n.onCaughtError !== void 0 && (s = n.onCaughtError),
    n.onRecoverableError !== void 0 && (u = n.onRecoverableError),
    n.formState !== void 0 && (o = n.formState)),
    e = Vy(t, 1, !0, e, n ?? null, i, a, o, l, s, u, Yy),
    e.context = Uy(null),
    n = e.current,
    i = te(),
    i = dc(i),
    a = Tn(i),
    a.callback = null,
    An(n, a, i),
    n = i,
    e.current.lanes = n,
    pl(e, n),
    _e(e),
    t[ia] = e.current,
    $c(t),
    new Du(e)
}
;
ru.version = "19.2.4";
function Gy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gy)
        } catch (t) {
            console.error(t)
        }
}
Gy(),
Fm.exports = ru;
var Ob = Fm.exports;
const sf = E.createContext({});
function Rn(t) {
    const e = E.useRef(null);
    return e.current === null && (e.current = t()),
    e.current
}
const jb = typeof window < "u"
  , wu = jb ? E.useLayoutEffect : E.useEffect
  , Cu = E.createContext(null);
function uf(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}
function Ps(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
const De = (t, e, n) => n > e ? e : n < t ? t : n;
let ol = () => {}
;
const Vn = {}
  , qy = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Xy(t) {
    return typeof t == "object" && t !== null
}
const Qy = t => /^0[^.\s]+$/u.test(t);
function Zy(t) {
    let e;
    return () => (e === void 0 && (e = t()),
    e)
}
const Xt = t => t
  , Nb = (t, e) => n => e(t(n))
  , El = (...t) => t.reduce(Nb)
  , ta = (t, e, n) => {
    const i = e - t;
    return i === 0 ? 1 : (n - t) / i
}
;
class of {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return uf(this.subscriptions, e),
        () => Ps(this.subscriptions, e)
    }
    notify(e, n, i) {
        const a = this.subscriptions.length;
        if (a)
            if (a === 1)
                this.subscriptions[0](e, n, i);
            else
                for (let l = 0; l < a; l++) {
                    const s = this.subscriptions[l];
                    s && s(e, n, i)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const ee = t => t * 1e3
  , he = t => t / 1e3;
function rf(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Ky = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t
  , Rb = 1e-7
  , Vb = 12;
function Ub(t, e, n, i, a) {
    let l, s, u = 0;
    do
        s = e + (n - e) / 2,
        l = Ky(s, i, a) - t,
        l > 0 ? n = s : e = s;
    while (Math.abs(l) > Rb && ++u < Vb);
    return s
}
function Ml(t, e, n, i) {
    if (t === e && n === i)
        return Xt;
    const a = l => Ub(l, 0, 1, t, n);
    return l => l === 0 || l === 1 ? l : Ky(a(l), e, i)
}
const ky = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , Jy = t => e => 1 - t(1 - e)
  , Fy = Ml(.33, 1.53, .69, .99)
  , cf = Jy(Fy)
  , Wy = ky(cf)
  , Py = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * cf(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , ff = t => 1 - Math.sin(Math.acos(t))
  , $y = Jy(ff)
  , Iy = ky(ff)
  , _b = Ml(.42, 0, 1, 1)
  , Bb = Ml(0, 0, .58, 1)
  , tg = Ml(.42, 0, .58, 1)
  , Lb = t => Array.isArray(t) && typeof t[0] != "number"
  , eg = t => Array.isArray(t) && typeof t[0] == "number"
  , Hb = {
    linear: Xt,
    easeIn: _b,
    easeInOut: tg,
    easeOut: Bb,
    circIn: ff,
    circInOut: Iy,
    circOut: $y,
    backIn: cf,
    backInOut: Wy,
    backOut: Fy,
    anticipate: Py
}
  , Yb = t => typeof t == "string"
  , hh = t => {
    if (eg(t)) {
        ol(t.length === 4);
        const [e,n,i,a] = t;
        return Ml(e, n, i, a)
    } else if (Yb(t))
        return Hb[t];
    return t
}
  , Zl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Gb(t, e) {
    let n = new Set
      , i = new Set
      , a = !1
      , l = !1;
    const s = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function o(c) {
        s.has(c) && (r.schedule(c),
        t()),
        c(u)
    }
    const r = {
        schedule: (c, d=!1, f=!1) => {
            const v = f && a ? n : i;
            return d && s.add(c),
            v.add(c),
            c
        }
        ,
        cancel: c => {
            i.delete(c),
            s.delete(c)
        }
        ,
        process: c => {
            if (u = c,
            a) {
                l = !0;
                return
            }
            a = !0;
            const d = n;
            n = i,
            i = d,
            n.forEach(o),
            n.clear(),
            a = !1,
            l && (l = !1,
            r.process(c))
        }
    };
    return r
}
const qb = 40;
function ng(t, e) {
    let n = !1
      , i = !0;
    const a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = () => n = !0
      , s = Zl.reduce( (y, x) => (y[x] = Gb(l),
    y), {})
      , {setup: u, read: o, resolveKeyframes: r, preUpdate: c, update: d, preRender: f, render: h, postRender: v} = s
      , b = () => {
        const y = Vn.useManualTiming
          , x = y ? a.timestamp : performance.now();
        n = !1,
        y || (a.delta = i ? 1e3 / 60 : Math.max(Math.min(x - a.timestamp, qb), 1)),
        a.timestamp = x,
        a.isProcessing = !0,
        u.process(a),
        o.process(a),
        r.process(a),
        c.process(a),
        d.process(a),
        f.process(a),
        h.process(a),
        v.process(a),
        a.isProcessing = !1,
        n && e && (i = !1,
        t(b))
    }
      , S = () => {
        n = !0,
        i = !0,
        a.isProcessing || t(b)
    }
    ;
    return {
        schedule: Zl.reduce( (y, x) => {
            const T = s[x];
            return y[x] = (O, M=!1, D=!1) => (n || S(),
            T.schedule(O, M, D)),
            y
        }
        , {}),
        cancel: y => {
            for (let x = 0; x < Zl.length; x++)
                s[Zl[x]].cancel(y)
        }
        ,
        state: a,
        steps: s
    }
}
const {schedule: Q, cancel: ge, state: At, steps: xo} = ng(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xt, !0);
let ps;
function Xb() {
    ps = void 0
}
const Ut = {
    now: () => (ps === void 0 && Ut.set(At.isProcessing || Vn.useManualTiming ? At.timestamp : performance.now()),
    ps),
    set: t => {
        ps = t,
        queueMicrotask(Xb)
    }
}
  , ig = t => e => typeof e == "string" && e.startsWith(t)
  , ag = ig("--")
  , Qb = ig("var(--")
  , df = t => Qb(t) ? Zb.test(t.split("/*")[0].trim()) : !1
  , Zb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function mh(t) {
    return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--")
}
const ca = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , rl = {
    ...ca,
    transform: t => De(0, 1, t)
}
  , Kl = {
    ...ca,
    default: 1
}
  , qa = t => Math.round(t * 1e5) / 1e5
  , hf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Kb(t) {
    return t == null
}
const kb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , mf = (t, e) => n => !!(typeof n == "string" && kb.test(n) && n.startsWith(t) || e && !Kb(n) && Object.prototype.hasOwnProperty.call(n, e))
  , lg = (t, e, n) => i => {
    if (typeof i != "string")
        return i;
    const [a,l,s,u] = i.match(hf);
    return {
        [t]: parseFloat(a),
        [e]: parseFloat(l),
        [n]: parseFloat(s),
        alpha: u !== void 0 ? parseFloat(u) : 1
    }
}
  , Jb = t => De(0, 255, t)
  , bo = {
    ...ca,
    transform: t => Math.round(Jb(t))
}
  , Jn = {
    test: mf("rgb", "red"),
    parse: lg("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: i=1}) => "rgba(" + bo.transform(t) + ", " + bo.transform(e) + ", " + bo.transform(n) + ", " + qa(rl.transform(i)) + ")"
};
function Fb(t) {
    let e = ""
      , n = ""
      , i = ""
      , a = "";
    return t.length > 5 ? (e = t.substring(1, 3),
    n = t.substring(3, 5),
    i = t.substring(5, 7),
    a = t.substring(7, 9)) : (e = t.substring(1, 2),
    n = t.substring(2, 3),
    i = t.substring(3, 4),
    a = t.substring(4, 5),
    e += e,
    n += n,
    i += i,
    a += a),
    {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(i, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    }
}
const Rr = {
    test: mf("#"),
    parse: Fb,
    transform: Jn.transform
}
  , Dl = t => ({
    test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , ln = Dl("deg")
  , Ve = Dl("%")
  , j = Dl("px")
  , Wb = Dl("vh")
  , Pb = Dl("vw")
  , ph = {
    ...Ve,
    parse: t => Ve.parse(t) / 100,
    transform: t => Ve.transform(t * 100)
}
  , Ri = {
    test: mf("hsl", "hue"),
    parse: lg("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + Ve.transform(qa(e)) + ", " + Ve.transform(qa(n)) + ", " + qa(rl.transform(i)) + ")"
}
  , ht = {
    test: t => Jn.test(t) || Rr.test(t) || Ri.test(t),
    parse: t => Jn.test(t) ? Jn.parse(t) : Ri.test(t) ? Ri.parse(t) : Rr.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Jn.transform(t) : Ri.transform(t),
    getAnimatableNone: t => {
        const e = ht.parse(t);
        return e.alpha = 0,
        ht.transform(e)
    }
}
  , $b = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ib(t) {
    var e, n;
    return isNaN(t) && typeof t == "string" && (((e = t.match(hf)) == null ? void 0 : e.length) || 0) + (((n = t.match($b)) == null ? void 0 : n.length) || 0) > 0
}
const sg = "number"
  , ug = "color"
  , tS = "var"
  , eS = "var("
  , yh = "${}"
  , nS = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ea(t) {
    const e = t.toString()
      , n = []
      , i = {
        color: [],
        number: [],
        var: []
    }
      , a = [];
    let l = 0;
    const u = e.replace(nS, o => (ht.test(o) ? (i.color.push(l),
    a.push(ug),
    n.push(ht.parse(o))) : o.startsWith(eS) ? (i.var.push(l),
    a.push(tS),
    n.push(o)) : (i.number.push(l),
    a.push(sg),
    n.push(parseFloat(o))),
    ++l,
    yh)).split(yh);
    return {
        values: n,
        split: u,
        indexes: i,
        types: a
    }
}
function iS(t) {
    return ea(t).values
}
function og({split: t, types: e}) {
    const n = t.length;
    return i => {
        let a = "";
        for (let l = 0; l < n; l++)
            if (a += t[l],
            i[l] !== void 0) {
                const s = e[l];
                s === sg ? a += qa(i[l]) : s === ug ? a += ht.transform(i[l]) : a += i[l]
            }
        return a
    }
}
function aS(t) {
    return og(ea(t))
}
const lS = t => typeof t == "number" ? 0 : ht.test(t) ? ht.getAnimatableNone(t) : t
  , sS = (t, e) => typeof t == "number" ? e != null && e.trim().endsWith("/") ? t : 0 : lS(t);
function uS(t) {
    const e = ea(t);
    return og(e)(e.values.map( (i, a) => sS(i, e.split[a])))
}
const Me = {
    test: Ib,
    parse: iS,
    createTransformer: aS,
    getAnimatableNone: uS
};
function So(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
function oS({hue: t, saturation: e, lightness: n, alpha: i}) {
    t /= 360,
    e /= 100,
    n /= 100;
    let a = 0
      , l = 0
      , s = 0;
    if (!e)
        a = l = s = n;
    else {
        const u = n < .5 ? n * (1 + e) : n + e - n * e
          , o = 2 * n - u;
        a = So(o, u, t + 1 / 3),
        l = So(o, u, t),
        s = So(o, u, t - 1 / 3)
    }
    return {
        red: Math.round(a * 255),
        green: Math.round(l * 255),
        blue: Math.round(s * 255),
        alpha: i
    }
}
function $s(t, e) {
    return n => n > 0 ? e : t
}
const at = (t, e, n) => t + (e - t) * n
  , To = (t, e, n) => {
    const i = t * t
      , a = n * (e * e - i) + i;
    return a < 0 ? 0 : Math.sqrt(a)
}
  , rS = [Rr, Jn, Ri]
  , cS = t => rS.find(e => e.test(t));
function gh(t) {
    const e = cS(t);
    if (!e)
        return !1;
    let n = e.parse(t);
    return e === Ri && (n = oS(n)),
    n
}
const vh = (t, e) => {
    const n = gh(t)
      , i = gh(e);
    if (!n || !i)
        return $s(t, e);
    const a = {
        ...n
    };
    return l => (a.red = To(n.red, i.red, l),
    a.green = To(n.green, i.green, l),
    a.blue = To(n.blue, i.blue, l),
    a.alpha = at(n.alpha, i.alpha, l),
    Jn.transform(a))
}
  , Vr = new Set(["none", "hidden"]);
function fS(t, e) {
    return Vr.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}
function dS(t, e) {
    return n => at(t, e, n)
}
function pf(t) {
    return typeof t == "number" ? dS : typeof t == "string" ? df(t) ? $s : ht.test(t) ? vh : pS : Array.isArray(t) ? rg : typeof t == "object" ? ht.test(t) ? vh : hS : $s
}
function rg(t, e) {
    const n = [...t]
      , i = n.length
      , a = t.map( (l, s) => pf(l)(l, e[s]));
    return l => {
        for (let s = 0; s < i; s++)
            n[s] = a[s](l);
        return n
    }
}
function hS(t, e) {
    const n = {
        ...t,
        ...e
    }
      , i = {};
    for (const a in n)
        t[a] !== void 0 && e[a] !== void 0 && (i[a] = pf(t[a])(t[a], e[a]));
    return a => {
        for (const l in i)
            n[l] = i[l](a);
        return n
    }
}
function mS(t, e) {
    const n = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let a = 0; a < e.values.length; a++) {
        const l = e.types[a]
          , s = t.indexes[l][i[l]]
          , u = t.values[s] ?? 0;
        n[a] = u,
        i[l]++
    }
    return n
}
const pS = (t, e) => {
    const n = Me.createTransformer(e)
      , i = ea(t)
      , a = ea(e);
    return i.indexes.var.length === a.indexes.var.length && i.indexes.color.length === a.indexes.color.length && i.indexes.number.length >= a.indexes.number.length ? Vr.has(t) && !a.values.length || Vr.has(e) && !i.values.length ? fS(t, e) : El(rg(mS(i, a), a.values), n) : $s(t, e)
}
;
function cg(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? at(t, e, n) : pf(t)(t, e)
}
const yS = t => {
    const e = ({timestamp: n}) => t(n);
    return {
        start: (n=!0) => Q.update(e, n),
        stop: () => ge(e),
        now: () => At.isProcessing ? At.timestamp : Ut.now()
    }
}
  , fg = (t, e, n=10) => {
    let i = "";
    const a = Math.max(Math.round(e / n), 2);
    for (let l = 0; l < a; l++)
        i += Math.round(t(l / (a - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${i.substring(0, i.length - 2)})`
}
  , Is = 2e4;
function yf(t) {
    let e = 0;
    const n = 50;
    let i = t.next(e);
    for (; !i.done && e < Is; )
        e += n,
        i = t.next(e);
    return e >= Is ? 1 / 0 : e
}
function gS(t, e=100, n) {
    const i = n({
        ...t,
        keyframes: [0, e]
    })
      , a = Math.min(yf(i), Is);
    return {
        type: "keyframes",
        ease: l => i.next(a * l).value / e,
        duration: he(a)
    }
}
const rt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function Ur(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const vS = 12;
function xS(t, e, n) {
    let i = n;
    for (let a = 1; a < vS; a++)
        i = i - t(i) / e(i);
    return i
}
const Ao = .001;
function bS({duration: t=rt.duration, bounce: e=rt.bounce, velocity: n=rt.velocity, mass: i=rt.mass}) {
    let a, l, s = 1 - e;
    s = De(rt.minDamping, rt.maxDamping, s),
    t = De(rt.minDuration, rt.maxDuration, he(t)),
    s < 1 ? (a = r => {
        const c = r * s
          , d = c * t
          , f = c - n
          , h = Ur(r, s)
          , v = Math.exp(-d);
        return Ao - f / h * v
    }
    ,
    l = r => {
        const d = r * s * t
          , f = d * n + n
          , h = Math.pow(s, 2) * Math.pow(r, 2) * t
          , v = Math.exp(-d)
          , b = Ur(Math.pow(r, 2), s);
        return (-a(r) + Ao > 0 ? -1 : 1) * ((f - h) * v) / b
    }
    ) : (a = r => {
        const c = Math.exp(-r * t)
          , d = (r - n) * t + 1;
        return -Ao + c * d
    }
    ,
    l = r => {
        const c = Math.exp(-r * t)
          , d = (n - r) * (t * t);
        return c * d
    }
    );
    const u = 5 / t
      , o = xS(a, l, u);
    if (t = ee(t),
    isNaN(o))
        return {
            stiffness: rt.stiffness,
            damping: rt.damping,
            duration: t
        };
    {
        const r = Math.pow(o, 2) * i;
        return {
            stiffness: r,
            damping: s * 2 * Math.sqrt(i * r),
            duration: t
        }
    }
}
const SS = ["duration", "bounce"]
  , TS = ["stiffness", "damping", "mass"];
function xh(t, e) {
    return e.some(n => t[n] !== void 0)
}
function AS(t) {
    let e = {
        velocity: rt.velocity,
        stiffness: rt.stiffness,
        damping: rt.damping,
        mass: rt.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!xh(t, TS) && xh(t, SS))
        if (e.velocity = 0,
        t.visualDuration) {
            const n = t.visualDuration
              , i = 2 * Math.PI / (n * 1.2)
              , a = i * i
              , l = 2 * De(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(a);
            e = {
                ...e,
                mass: rt.mass,
                stiffness: a,
                damping: l
            }
        } else {
            const n = bS({
                ...t,
                velocity: 0
            });
            e = {
                ...e,
                ...n,
                mass: rt.mass
            },
            e.isResolvedFromDuration = !0
        }
    return e
}
function tu(t=rt.visualDuration, e=rt.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {restSpeed: i, restDelta: a} = n;
    const l = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , u = {
        done: !1,
        value: l
    }
      , {stiffness: o, damping: r, mass: c, duration: d, velocity: f, isResolvedFromDuration: h} = AS({
        ...n,
        velocity: -he(n.velocity || 0)
    })
      , v = f || 0
      , b = r / (2 * Math.sqrt(o * c))
      , S = s - l
      , p = he(Math.sqrt(o / c))
      , m = Math.abs(S) < 5;
    i || (i = m ? rt.restSpeed.granular : rt.restSpeed.default),
    a || (a = m ? rt.restDelta.granular : rt.restDelta.default);
    let y, x, T, O, M, D;
    if (b < 1)
        T = Ur(p, b),
        O = (v + b * p * S) / T,
        y = w => {
            const L = Math.exp(-b * p * w);
            return s - L * (O * Math.sin(T * w) + S * Math.cos(T * w))
        }
        ,
        M = b * p * O + S * T,
        D = b * p * S - O * T,
        x = w => Math.exp(-b * p * w) * (M * Math.sin(T * w) + D * Math.cos(T * w));
    else if (b === 1) {
        y = L => s - Math.exp(-p * L) * (S + (v + p * S) * L);
        const w = v + p * S;
        x = L => Math.exp(-p * L) * (p * w * L - v)
    } else {
        const w = p * Math.sqrt(b * b - 1);
        y = le => {
            const Kt = Math.exp(-b * p * le)
              , z = Math.min(w * le, 300);
            return s - Kt * ((v + b * p * S) * Math.sinh(z) + w * S * Math.cosh(z)) / w
        }
        ;
        const L = (v + b * p * S) / w
          , I = b * p * L - S * w
          , ae = b * p * S - L * w;
        x = le => {
            const Kt = Math.exp(-b * p * le)
              , z = Math.min(w * le, 300);
            return Kt * (I * Math.sinh(z) + ae * Math.cosh(z))
        }
    }
    const C = {
        calculatedDuration: h && d || null,
        velocity: w => ee(x(w)),
        next: w => {
            if (!h && b < 1) {
                const I = Math.exp(-b * p * w)
                  , ae = Math.sin(T * w)
                  , le = Math.cos(T * w)
                  , Kt = s - I * (O * ae + S * le)
                  , z = ee(I * (M * ae + D * le));
                return u.done = Math.abs(z) <= i && Math.abs(s - Kt) <= a,
                u.value = u.done ? s : Kt,
                u
            }
            const L = y(w);
            if (h)
                u.done = w >= d;
            else {
                const I = ee(x(w));
                u.done = Math.abs(I) <= i && Math.abs(s - L) <= a
            }
            return u.value = u.done ? s : L,
            u
        }
        ,
        toString: () => {
            const w = Math.min(yf(C), Is)
              , L = fg(I => C.next(w * I).value, w, 30);
            return w + "ms " + L
        }
        ,
        toTransition: () => {}
    };
    return C
}
tu.applyToOptions = t => {
    const e = gS(t, 100, tu);
    return t.ease = e.ease,
    t.duration = ee(e.duration),
    t.type = "keyframes",
    t
}
;
const ES = 5;
function dg(t, e, n) {
    const i = Math.max(e - ES, 0);
    return rf(n - t(i), e - i)
}
function _r({keyframes: t, velocity: e=0, power: n=.8, timeConstant: i=325, bounceDamping: a=10, bounceStiffness: l=500, modifyTarget: s, min: u, max: o, restDelta: r=.5, restSpeed: c}) {
    const d = t[0]
      , f = {
        done: !1,
        value: d
    }
      , h = D => u !== void 0 && D < u || o !== void 0 && D > o
      , v = D => u === void 0 ? o : o === void 0 || Math.abs(u - D) < Math.abs(o - D) ? u : o;
    let b = n * e;
    const S = d + b
      , p = s === void 0 ? S : s(S);
    p !== S && (b = p - d);
    const m = D => -b * Math.exp(-D / i)
      , y = D => p + m(D)
      , x = D => {
        const C = m(D)
          , w = y(D);
        f.done = Math.abs(C) <= r,
        f.value = f.done ? p : w
    }
    ;
    let T, O;
    const M = D => {
        h(f.value) && (T = D,
        O = tu({
            keyframes: [f.value, v(f.value)],
            velocity: dg(y, D, f.value),
            damping: a,
            stiffness: l,
            restDelta: r,
            restSpeed: c
        }))
    }
    ;
    return M(0),
    {
        calculatedDuration: null,
        next: D => {
            let C = !1;
            return !O && T === void 0 && (C = !0,
            x(D),
            M(D)),
            T !== void 0 && D >= T ? O.next(D - T) : (!C && x(D),
            f)
        }
    }
}
function MS(t, e, n) {
    const i = []
      , a = n || Vn.mix || cg
      , l = t.length - 1;
    for (let s = 0; s < l; s++) {
        let u = a(t[s], t[s + 1]);
        if (e) {
            const o = Array.isArray(e) ? e[s] || Xt : e;
            u = El(o, u)
        }
        i.push(u)
    }
    return i
}
function gf(t, e, {clamp: n=!0, ease: i, mixer: a}={}) {
    const l = t.length;
    if (ol(l === e.length),
    l === 1)
        return () => e[0];
    if (l === 2 && e[0] === e[1])
        return () => e[1];
    const s = t[0] === t[1];
    t[0] > t[l - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const u = MS(e, i, a)
      , o = u.length
      , r = c => {
        if (s && c < t[0])
            return e[0];
        let d = 0;
        if (o > 1)
            for (; d < t.length - 2 && !(c < t[d + 1]); d++)
                ;
        const f = ta(t[d], t[d + 1], c);
        return u[d](f)
    }
    ;
    return n ? c => r(De(t[0], t[l - 1], c)) : r
}
function DS(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
        const a = ta(0, e, i);
        t.push(at(n, 1, a))
    }
}
function hg(t) {
    const e = [0];
    return DS(e, t.length - 1),
    e
}
function wS(t, e) {
    return t.map(n => n * e)
}
function CS(t, e) {
    return t.map( () => e || tg).splice(0, t.length - 1)
}
function Xa({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
    const a = Lb(i) ? i.map(hh) : hh(i)
      , l = {
        done: !1,
        value: e[0]
    }
      , s = wS(n && n.length === e.length ? n : hg(e), t)
      , u = gf(s, e, {
        ease: Array.isArray(a) ? a : CS(e, a)
    });
    return {
        calculatedDuration: t,
        next: o => (l.value = u(o),
        l.done = o >= t,
        l)
    }
}
const zS = t => t !== null;
function zu(t, {repeat: e, repeatType: n="loop"}, i, a=1) {
    const l = t.filter(zS)
      , u = a < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : l.length - 1;
    return !u || i === void 0 ? l[u] : i
}
const OS = {
    decay: _r,
    inertia: _r,
    tween: Xa,
    keyframes: Xa,
    spring: tu
};
function mg(t) {
    typeof t.type == "string" && (t.type = OS[t.type])
}
class vf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(e => {
            this.resolve = e
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(e, n) {
        return this.finished.then(e, n)
    }
}
const jS = t => t / 100;
class eu extends vf {
    constructor(e) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.delayState = {
            done: !1,
            value: void 0
        },
        this.stop = () => {
            var i, a;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== Ut.now() && this.tick(Ut.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (a = (i = this.options).onStop) == null || a.call(i))
        }
        ,
        this.options = e,
        this.initAnimation(),
        this.play(),
        e.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: e} = this;
        mg(e);
        const {type: n=Xa, repeat: i=0, repeatDelay: a=0, repeatType: l, velocity: s=0} = e;
        let {keyframes: u} = e;
        const o = n || Xa;
        o !== Xa && typeof u[0] != "number" && (this.mixKeyframes = El(jS, cg(u[0], u[1])),
        u = [0, 100]);
        const r = o({
            ...e,
            keyframes: u
        });
        l === "mirror" && (this.mirroredGenerator = o({
            ...e,
            keyframes: [...u].reverse(),
            velocity: -s
        })),
        r.calculatedDuration === null && (r.calculatedDuration = yf(r));
        const {calculatedDuration: c} = r;
        this.calculatedDuration = c,
        this.resolvedDuration = c + a,
        this.totalDuration = this.resolvedDuration * (i + 1) - a,
        this.generator = r
    }
    updateTime(e) {
        const n = Math.round(e - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(e, n=!1) {
        const {generator: i, totalDuration: a, mixKeyframes: l, mirroredGenerator: s, resolvedDuration: u, calculatedDuration: o} = this;
        if (this.startTime === null)
            return i.next(0);
        const {delay: r=0, keyframes: c, repeat: d, repeatType: f, repeatDelay: h, type: v, onUpdate: b, finalKeyframe: S} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - a / this.speed, this.startTime)),
        n ? this.currentTime = e : this.updateTime(e);
        const p = this.currentTime - r * (this.playbackSpeed >= 0 ? 1 : -1)
          , m = this.playbackSpeed >= 0 ? p < 0 : p > a;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = a);
        let y = this.currentTime
          , x = i;
        if (d) {
            const D = Math.min(this.currentTime, a) / u;
            let C = Math.floor(D)
              , w = D % 1;
            !w && D >= 1 && (w = 1),
            w === 1 && C--,
            C = Math.min(C, d + 1),
            !!(C % 2) && (f === "reverse" ? (w = 1 - w,
            h && (w -= h / u)) : f === "mirror" && (x = s)),
            y = De(0, 1, w) * u
        }
        let T;
        m ? (this.delayState.value = c[0],
        T = this.delayState) : T = x.next(y),
        l && !m && (T.value = l(T.value));
        let {done: O} = T;
        !m && o !== null && (O = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
        const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && O);
        return M && v !== _r && (T.value = zu(c, this.options, S, this.speed)),
        b && b(T.value),
        M && this.finish(),
        T
    }
    then(e, n) {
        return this.finished.then(e, n)
    }
    get duration() {
        return he(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: e=0} = this.options || {};
        return this.duration + he(e)
    }
    get time() {
        return he(this.currentTime)
    }
    set time(e) {
        e = ee(e),
        this.currentTime = e,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
        this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = e,
        this.tick(e))
    }
    getGeneratorVelocity() {
        const e = this.currentTime;
        if (e <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(e);
        const n = this.generator.next(e).value;
        return dg(i => this.generator.next(i).value, e, n)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        const n = this.playbackSpeed !== e;
        n && this.driver && this.updateTime(Ut.now()),
        this.playbackSpeed = e,
        n && this.driver && (this.time = he(this.currentTime))
    }
    play() {
        var a, l;
        if (this.isStopped)
            return;
        const {driver: e=yS, startTime: n} = this.options;
        this.driver || (this.driver = e(s => this.tick(s))),
        (l = (a = this.options).onPlay) == null || l.call(a);
        const i = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = i) : this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = n ?? i),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Ut.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var e, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (e = this.options).onComplete) == null || n.call(e)
    }
    cancel() {
        var e, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (e = this.options).onCancel) == null || n.call(e)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0,
        this.tick(e, !0)
    }
    attachTimeline(e) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        e.observe(this)
    }
}
function NS(t) {
    for (let e = 1; e < t.length; e++)
        t[e] ?? (t[e] = t[e - 1])
}
const Fn = t => t * 180 / Math.PI
  , Br = t => {
    const e = Fn(Math.atan2(t[1], t[0]));
    return Lr(e)
}
  , RS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: Br,
    rotateZ: Br,
    skewX: t => Fn(Math.atan(t[1])),
    skewY: t => Fn(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}
  , Lr = t => (t = t % 360,
t < 0 && (t += 360),
t)
  , bh = Br
  , Sh = t => Math.sqrt(t[0] * t[0] + t[1] * t[1])
  , Th = t => Math.sqrt(t[4] * t[4] + t[5] * t[5])
  , VS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Sh,
    scaleY: Th,
    scale: t => (Sh(t) + Th(t)) / 2,
    rotateX: t => Lr(Fn(Math.atan2(t[6], t[5]))),
    rotateY: t => Lr(Fn(Math.atan2(-t[2], t[0]))),
    rotateZ: bh,
    rotate: bh,
    skewX: t => Fn(Math.atan(t[4])),
    skewY: t => Fn(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Hr(t) {
    return t.includes("scale") ? 1 : 0
}
function Yr(t, e) {
    if (!t || t === "none")
        return Hr(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let i, a;
    if (n)
        i = VS,
        a = n;
    else {
        const u = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        i = RS,
        a = u
    }
    if (!a)
        return Hr(e);
    const l = i[e]
      , s = a[1].split(",").map(_S);
    return typeof l == "function" ? l(s) : s[l]
}
const US = (t, e) => {
    const {transform: n="none"} = getComputedStyle(t);
    return Yr(n, e)
}
;
function _S(t) {
    return parseFloat(t.trim())
}
const fa = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , da = new Set(fa)
  , Ah = t => t === ca || t === j
  , BS = new Set(["x", "y", "z"])
  , LS = fa.filter(t => !BS.has(t));
function HS(t) {
    const e = [];
    return LS.forEach(n => {
        const i = t.getValue(n);
        i !== void 0 && (e.push([n, i.get()]),
        i.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    e
}
const xn = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0", boxSizing: i}) => {
        const a = t.max - t.min;
        return i === "border-box" ? a : a - parseFloat(e) - parseFloat(n)
    }
    ,
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0", boxSizing: i}) => {
        const a = t.max - t.min;
        return i === "border-box" ? a : a - parseFloat(e) - parseFloat(n)
    }
    ,
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: (t, {transform: e}) => Yr(e, "x"),
    y: (t, {transform: e}) => Yr(e, "y")
};
xn.translateX = xn.x;
xn.translateY = xn.y;
const ei = new Set;
let Gr = !1
  , qr = !1
  , Xr = !1;
function pg() {
    if (qr) {
        const t = Array.from(ei).filter(i => i.needsMeasurement)
          , e = new Set(t.map(i => i.element))
          , n = new Map;
        e.forEach(i => {
            const a = HS(i);
            a.length && (n.set(i, a),
            i.render())
        }
        ),
        t.forEach(i => i.measureInitialState()),
        e.forEach(i => {
            i.render();
            const a = n.get(i);
            a && a.forEach( ([l,s]) => {
                var u;
                (u = i.getValue(l)) == null || u.set(s)
            }
            )
        }
        ),
        t.forEach(i => i.measureEndState()),
        t.forEach(i => {
            i.suspendedScrollY !== void 0 && window.scrollTo(0, i.suspendedScrollY)
        }
        )
    }
    qr = !1,
    Gr = !1,
    ei.forEach(t => t.complete(Xr)),
    ei.clear()
}
function yg() {
    ei.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (qr = !0)
    }
    )
}
function YS() {
    Xr = !0,
    yg(),
    pg(),
    Xr = !1
}
class xf {
    constructor(e, n, i, a, l, s=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...e],
        this.onComplete = n,
        this.name = i,
        this.motionValue = a,
        this.element = l,
        this.isAsync = s
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (ei.add(this),
        Gr || (Gr = !0,
        Q.read(yg),
        Q.resolveKeyframes(pg))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, name: n, element: i, motionValue: a} = this;
        if (e[0] === null) {
            const l = a == null ? void 0 : a.get()
              , s = e[e.length - 1];
            if (l !== void 0)
                e[0] = l;
            else if (i && n) {
                const u = i.readValue(n, s);
                u != null && (e[0] = u)
            }
            e[0] === void 0 && (e[0] = s),
            a && l === void 0 && a.set(e[0])
        }
        NS(e)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
        ei.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (ei.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const GS = t => t.startsWith("--");
function gg(t, e, n) {
    GS(e) ? t.style.setProperty(e, n) : t.style[e] = n
}
const qS = {};
function bf(t, e) {
    const n = Zy(t);
    return () => qS[e] ?? n()
}
const Sf = bf( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , vg = bf( () => window.ViewTimeline !== void 0, "viewTimeline")
  , xg = bf( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Da = ([t,e,n,i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`
  , Eh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Da([0, .65, .55, 1]),
    circOut: Da([.55, 0, 1, .45]),
    backIn: Da([.31, .01, .66, -.59]),
    backOut: Da([.33, 1.53, .69, .99])
};
function bg(t, e) {
    if (t)
        return typeof t == "function" ? xg() ? fg(t, e) : "ease-out" : eg(t) ? Da(t) : Array.isArray(t) ? t.map(n => bg(n, e) || Eh.easeOut) : Eh[t]
}
function XS(t, e, n, {delay: i=0, duration: a=300, repeat: l=0, repeatType: s="loop", ease: u="easeOut", times: o}={}, r=void 0) {
    const c = {
        [e]: n
    };
    o && (c.offset = o);
    const d = bg(u, a);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: i,
        duration: a,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: l + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    };
    return r && (f.pseudoElement = r),
    t.animate(c, f)
}
function Sg(t) {
    return typeof t == "function" && "applyToOptions"in t
}
function QS({type: t, ...e}) {
    return Sg(t) && xg() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300),
    e.ease ?? (e.ease = "easeOut"),
    e)
}
class Tg extends vf {
    constructor(e) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !e)
            return;
        const {element: n, name: i, keyframes: a, pseudoElement: l, allowFlatten: s=!1, finalKeyframe: u, onComplete: o} = e;
        this.isPseudoElement = !!l,
        this.allowFlatten = s,
        this.options = e,
        ol(typeof e.type != "string");
        const r = QS(e);
        this.animation = XS(n, i, a, r, l),
        r.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !l) {
                const c = zu(a, this.options, u, this.speed);
                this.updateMotionValue && this.updateMotionValue(c),
                gg(n, i, c),
                this.animation.cancel()
            }
            o == null || o(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var e, n;
        (n = (e = this.animation).finish) == null || n.call(e)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: e} = this;
        e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, i, a;
        const e = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (e != null && e.isConnected) && ((a = (i = this.animation).commitStyles) == null || a.call(i))
    }
    get duration() {
        var n, i;
        const e = ((i = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : i.call(n).duration) || 0;
        return he(Number(e))
    }
    get iterationDuration() {
        const {delay: e=0} = this.options || {};
        return this.duration + he(e)
    }
    get time() {
        return he(Number(this.animation.currentTime) || 0)
    }
    set time(e) {
        const n = this.finishedTime !== null;
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = ee(e),
        n && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(e) {
        e < 0 && (this.finishedTime = null),
        this.animation.playbackRate = e
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(e) {
        this.manualStartTime = this.animation.startTime = e
    }
    attachTimeline({timeline: e, rangeStart: n, rangeEnd: i, observe: a}) {
        var l;
        return this.allowFlatten && ((l = this.animation.effect) == null || l.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        e && Sf() ? (this.animation.timeline = e,
        n && (this.animation.rangeStart = n),
        i && (this.animation.rangeEnd = i),
        Xt) : a(this)
    }
}
const Ag = {
    anticipate: Py,
    backInOut: Wy,
    circInOut: Iy
};
function ZS(t) {
    return t in Ag
}
function KS(t) {
    typeof t.ease == "string" && ZS(t.ease) && (t.ease = Ag[t.ease])
}
const Eo = 10;
class kS extends Tg {
    constructor(e) {
        KS(e),
        mg(e),
        super(e),
        e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime),
        this.options = e
    }
    updateMotionValue(e) {
        const {motionValue: n, onUpdate: i, onComplete: a, element: l, ...s} = this.options;
        if (!n)
            return;
        if (e !== void 0) {
            n.set(e);
            return
        }
        const u = new eu({
            ...s,
            autoplay: !1
        })
          , o = Math.max(Eo, Ut.now() - this.startTime)
          , r = De(0, Eo, o - Eo)
          , c = u.sample(o).value
          , {name: d} = this.options;
        l && d && gg(l, d, c),
        n.setWithVelocity(u.sample(Math.max(0, o - r)).value, c, r),
        u.stop()
    }
}
const Mh = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Me.test(t) || t === "0") && !t.startsWith("url("));
function JS(t) {
    const e = t[0];
    if (t.length === 1)
        return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e)
            return !0
}
function FS(t, e, n, i) {
    const a = t[0];
    if (a === null)
        return !1;
    if (e === "display" || e === "visibility")
        return !0;
    const l = t[t.length - 1]
      , s = Mh(a, e)
      , u = Mh(l, e);
    return !s || !u ? !1 : JS(t) || (n === "spring" || Sg(n)) && i
}
function Qr(t) {
    t.duration = 0,
    t.type = "keyframes"
}
const Eg = new Set(["opacity", "clipPath", "filter", "transform"])
  , WS = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function PS(t) {
    for (let e = 0; e < t.length; e++)
        if (typeof t[e] == "string" && WS.test(t[e]))
            return !0;
    return !1
}
const $S = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , IS = Zy( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function t2(t) {
    var d;
    const {motionValue: e, name: n, repeatDelay: i, repeatType: a, damping: l, type: s, keyframes: u} = t;
    if (!(((d = e == null ? void 0 : e.owner) == null ? void 0 : d.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: r, transformTemplate: c} = e.owner.getProps();
    return IS() && n && (Eg.has(n) || $S.has(n) && PS(u)) && (n !== "transform" || !c) && !r && !i && a !== "mirror" && l !== 0 && s !== "inertia"
}
const e2 = 40;
class n2 extends vf {
    constructor({autoplay: e=!0, delay: n=0, type: i="keyframes", repeat: a=0, repeatDelay: l=0, repeatType: s="loop", keyframes: u, name: o, motionValue: r, element: c, ...d}) {
        var v;
        super(),
        this.stop = () => {
            var b, S;
            this._animation && (this._animation.stop(),
            (b = this.stopTimeline) == null || b.call(this)),
            (S = this.keyframeResolver) == null || S.cancel()
        }
        ,
        this.createdAt = Ut.now();
        const f = {
            autoplay: e,
            delay: n,
            type: i,
            repeat: a,
            repeatDelay: l,
            repeatType: s,
            name: o,
            motionValue: r,
            element: c,
            ...d
        }
          , h = (c == null ? void 0 : c.KeyframeResolver) || xf;
        this.keyframeResolver = new h(u, (b, S, p) => this.onKeyframesResolved(b, S, f, !p),o,r,c),
        (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(e, n, i, a) {
        var p, m;
        this.keyframeResolver = void 0;
        const {name: l, type: s, velocity: u, delay: o, isHandoff: r, onUpdate: c} = i;
        this.resolvedAt = Ut.now();
        let d = !0;
        FS(e, l, s, u) || (d = !1,
        (Vn.instantAnimations || !o) && (c == null || c(zu(e, i, n))),
        e[0] = e[e.length - 1],
        Qr(i),
        i.repeat = 0);
        const h = {
            startTime: a ? this.resolvedAt ? this.resolvedAt - this.createdAt > e2 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...i,
            keyframes: e
        }
          , v = d && !r && t2(h)
          , b = (m = (p = h.motionValue) == null ? void 0 : p.owner) == null ? void 0 : m.current;
        let S;
        if (v)
            try {
                S = new kS({
                    ...h,
                    element: b
                })
            } catch {
                S = new eu(h)
            }
        else
            S = new eu(h);
        S.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Xt),
        this.pendingTimeline && (this.stopTimeline = S.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = S
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(e, n) {
        return this.finished.finally(e).then( () => {}
        )
    }
    get animation() {
        var e;
        return this._animation || ((e = this.keyframeResolver) == null || e.resume(),
        YS()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(e) {
        this.animation.time = e
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(e) {
        this.animation.speed = e
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(e) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var e;
        this._animation && this.animation.cancel(),
        (e = this.keyframeResolver) == null || e.cancel()
    }
}
function Mg(t, e, n, i=0, a=1) {
    const l = Array.from(t).sort( (r, c) => r.sortNodePosition(c)).indexOf(e)
      , s = t.size
      , u = (s - 1) * i;
    return typeof n == "function" ? n(l, s) : a === 1 ? l * i : u - l * i
}
const i2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function a2(t) {
    const e = i2.exec(t);
    if (!e)
        return [, ];
    const [,n,i,a] = e;
    return [`--${n ?? i}`, a]
}
function Dg(t, e, n=1) {
    const [i,a] = a2(t);
    if (!i)
        return;
    const l = window.getComputedStyle(e).getPropertyValue(i);
    if (l) {
        const s = l.trim();
        return qy(s) ? parseFloat(s) : s
    }
    return df(a) ? Dg(a, e, n + 1) : a
}
const l2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , s2 = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , u2 = {
    type: "keyframes",
    duration: .8
}
  , o2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , r2 = (t, {keyframes: e}) => e.length > 2 ? u2 : da.has(t) ? t.startsWith("scale") ? s2(e[1]) : l2 : o2;
function wg(t, e) {
    if (t != null && t.inherit && e) {
        const {inherit: n, ...i} = t;
        return {
            ...e,
            ...i
        }
    }
    return t
}
function Tf(t, e) {
    const n = (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
    return n !== t ? wg(n, t) : n
}
const c2 = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function f2(t) {
    for (const e in t)
        if (!c2.has(e))
            return !0;
    return !1
}
const Af = (t, e, n, i={}, a, l) => s => {
    const u = Tf(i, t) || {}
      , o = u.delay || i.delay || 0;
    let {elapsed: r=0} = i;
    r = r - ee(o);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...u,
        delay: -r,
        onUpdate: f => {
            e.set(f),
            u.onUpdate && u.onUpdate(f)
        }
        ,
        onComplete: () => {
            s(),
            u.onComplete && u.onComplete()
        }
        ,
        name: t,
        motionValue: e,
        element: l ? void 0 : a
    };
    f2(u) || Object.assign(c, r2(t, c)),
    c.duration && (c.duration = ee(c.duration)),
    c.repeatDelay && (c.repeatDelay = ee(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (Qr(c),
    c.delay === 0 && (d = !0)),
    (Vn.instantAnimations || Vn.skipAnimations || a != null && a.shouldSkipAnimations) && (d = !0,
    Qr(c),
    c.delay = 0),
    c.allowFlatten = !u.type && !u.ease,
    d && !l && e.get() !== void 0) {
        const f = zu(c.keyframes, u);
        if (f !== void 0) {
            Q.update( () => {
                c.onUpdate(f),
                c.onComplete()
            }
            );
            return
        }
    }
    return u.isSync ? new eu(c) : new n2(c)
}
;
function Dh(t) {
    const e = [{}, {}];
    return t == null || t.values.forEach( (n, i) => {
        e[0][i] = n.get(),
        e[1][i] = n.getVelocity()
    }
    ),
    e
}
function Ef(t, e, n, i) {
    if (typeof e == "function") {
        const [a,l] = Dh(i);
        e = e(n !== void 0 ? n : t.custom, a, l)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]),
    typeof e == "function") {
        const [a,l] = Dh(i);
        e = e(n !== void 0 ? n : t.custom, a, l)
    }
    return e
}
function ni(t, e, n) {
    const i = t.getProps();
    return Ef(i, e, n !== void 0 ? n : i.custom, t)
}
const Cg = new Set(["width", "height", "top", "left", "right", "bottom", ...fa])
  , wh = 30
  , d2 = t => !isNaN(parseFloat(t))
  , Qa = {
    current: void 0
};
class h2 {
    constructor(e, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = i => {
            var l;
            const a = Ut.now();
            if (this.updatedAt !== a && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(i),
            this.current !== this.prev && ((l = this.events.change) == null || l.notify(this.current),
            this.dependents))
                for (const s of this.dependents)
                    s.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(e),
        this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e,
        this.updatedAt = Ut.now(),
        this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = d2(this.current))
    }
    setPrevFrameValue(e=this.current) {
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new of);
        const i = this.events[e].add(n);
        return e === "change" ? () => {
            i(),
            Q.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : i
    }
    clearListeners() {
        for (const e in this.events)
            this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e,
        this.stopPassiveEffect = n
    }
    set(e) {
        this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
    }
    setWithVelocity(e, n, i) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = e,
        this.prevUpdatedAt = this.updatedAt - i
    }
    jump(e, n=!0) {
        this.updateAndNotify(e),
        this.prev = e,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var e;
        (e = this.events.change) == null || e.notify(this.current)
    }
    addDependent(e) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(e)
    }
    removeDependent(e) {
        this.dependents && this.dependents.delete(e)
    }
    get() {
        return Qa.current && Qa.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = Ut.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > wh)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, wh);
        return rf(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = e(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var e, n;
        (e = this.dependents) == null || e.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ee(t, e) {
    return new h2(t,e)
}
const Zr = t => Array.isArray(t);
function m2(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ee(n))
}
function p2(t) {
    return Zr(t) ? t[t.length - 1] || 0 : t
}
function y2(t, e) {
    const n = ni(t, e);
    let {transitionEnd: i={}, transition: a={}, ...l} = n || {};
    l = {
        ...l,
        ...i
    };
    for (const s in l) {
        const u = p2(l[s]);
        m2(t, s, u)
    }
}
const jt = t => !!(t && t.getVelocity);
function g2(t) {
    return !!(jt(t) && t.add)
}
function Kr(t, e) {
    const n = t.getValue("willChange");
    if (g2(n))
        return n.add(e);
    if (!n && Vn.WillChange) {
        const i = new Vn.WillChange("auto");
        t.addValue("willChange", i),
        i.add(e)
    }
}
function Mf(t) {
    return t.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
}
const v2 = "framerAppearId"
  , zg = "data-" + Mf(v2);
function Og(t) {
    return t.props[zg]
}
function x2({protectedKeys: t, needsAnimating: e}, n) {
    const i = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1,
    i
}
function jg(t, e, {delay: n=0, transitionOverride: i, type: a}={}) {
    let {transition: l, transitionEnd: s, ...u} = e;
    const o = t.getDefaultTransition();
    l = l ? wg(l, o) : o;
    const r = l == null ? void 0 : l.reduceMotion;
    i && (l = i);
    const c = []
      , d = a && t.animationState && t.animationState.getState()[a];
    for (const f in u) {
        const h = t.getValue(f, t.latestValues[f] ?? null)
          , v = u[f];
        if (v === void 0 || d && x2(d, f))
            continue;
        const b = {
            delay: n,
            ...Tf(l || {}, f)
        }
          , S = h.get();
        if (S !== void 0 && !h.isAnimating() && !Array.isArray(v) && v === S && !b.velocity) {
            Q.update( () => h.set(v));
            continue
        }
        let p = !1;
        if (window.MotionHandoffAnimation) {
            const x = Og(t);
            if (x) {
                const T = window.MotionHandoffAnimation(x, f, Q);
                T !== null && (b.startTime = T,
                p = !0)
            }
        }
        Kr(t, f);
        const m = r ?? t.shouldReduceMotion;
        h.start(Af(f, h, v, m && Cg.has(f) ? {
            type: !1
        } : b, t, p));
        const y = h.animation;
        y && c.push(y)
    }
    if (s) {
        const f = () => Q.update( () => {
            s && y2(t, s)
        }
        );
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}
function kr(t, e, n={}) {
    var o;
    const i = ni(t, e, n.type === "exit" ? (o = t.presenceContext) == null ? void 0 : o.custom : void 0);
    let {transition: a=t.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (a = n.transitionOverride);
    const l = i ? () => Promise.all(jg(t, i, n)) : () => Promise.resolve()
      , s = t.variantChildren && t.variantChildren.size ? (r=0) => {
        const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = a;
        return b2(t, e, r, c, d, f, n)
    }
    : () => Promise.resolve()
      , {when: u} = a;
    if (u) {
        const [r,c] = u === "beforeChildren" ? [l, s] : [s, l];
        return r().then( () => c())
    } else
        return Promise.all([l(), s(n.delay)])
}
function b2(t, e, n=0, i=0, a=0, l=1, s) {
    const u = [];
    for (const o of t.variantChildren)
        o.notify("AnimationStart", e),
        u.push(kr(o, e, {
            ...s,
            delay: n + (typeof i == "function" ? 0 : i) + Mg(t.variantChildren, o, i, a, l)
        }).then( () => o.notify("AnimationComplete", e)));
    return Promise.all(u)
}
function S2(t, e, n={}) {
    t.notify("AnimationStart", e);
    let i;
    if (Array.isArray(e)) {
        const a = e.map(l => kr(t, l, n));
        i = Promise.all(a)
    } else if (typeof e == "string")
        i = kr(t, e, n);
    else {
        const a = typeof e == "function" ? ni(t, e, n.custom) : e;
        i = Promise.all(jg(t, a, n))
    }
    return i.then( () => {
        t.notify("AnimationComplete", e)
    }
    )
}
const T2 = {
    test: t => t === "auto",
    parse: t => t
}
  , Ng = t => e => e.test(t)
  , Rg = [ca, j, Ve, ln, Pb, Wb, T2]
  , Ch = t => Rg.find(Ng(t));
function A2(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Qy(t) : !0
}
const E2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function M2(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow")
        return t;
    const [i] = n.match(hf) || [];
    if (!i)
        return t;
    const a = n.replace(i, "");
    let l = E2.has(e) ? 1 : 0;
    return i !== n && (l *= 100),
    e + "(" + l + a + ")"
}
const D2 = /\b([a-z-]*)\(.*?\)/gu
  , Jr = {
    ...Me,
    getAnimatableNone: t => {
        const e = t.match(D2);
        return e ? e.map(M2).join(" ") : t
    }
}
  , Fr = {
    ...Me,
    getAnimatableNone: t => {
        const e = Me.parse(t);
        return Me.createTransformer(t)(e.map(i => typeof i == "number" ? 0 : typeof i == "object" ? {
            ...i,
            alpha: 1
        } : i))
    }
}
  , zh = {
    ...ca,
    transform: Math.round
}
  , w2 = {
    rotate: ln,
    rotateX: ln,
    rotateY: ln,
    rotateZ: ln,
    scale: Kl,
    scaleX: Kl,
    scaleY: Kl,
    scaleZ: Kl,
    skew: ln,
    skewX: ln,
    skewY: ln,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: rl,
    originX: ph,
    originY: ph,
    originZ: j
}
  , Df = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    inset: j,
    insetBlock: j,
    insetBlockStart: j,
    insetBlockEnd: j,
    insetInline: j,
    insetInlineStart: j,
    insetInlineEnd: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    paddingBlock: j,
    paddingBlockStart: j,
    paddingBlockEnd: j,
    paddingInline: j,
    paddingInlineStart: j,
    paddingInlineEnd: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    marginBlock: j,
    marginBlockStart: j,
    marginBlockEnd: j,
    marginInline: j,
    marginInlineStart: j,
    marginInlineEnd: j,
    fontSize: j,
    backgroundPositionX: j,
    backgroundPositionY: j,
    ...w2,
    zIndex: zh,
    fillOpacity: rl,
    strokeOpacity: rl,
    numOctaves: zh
}
  , C2 = {
    ...Df,
    color: ht,
    backgroundColor: ht,
    outlineColor: ht,
    fill: ht,
    stroke: ht,
    borderColor: ht,
    borderTopColor: ht,
    borderRightColor: ht,
    borderBottomColor: ht,
    borderLeftColor: ht,
    filter: Jr,
    WebkitFilter: Jr,
    mask: Fr,
    WebkitMask: Fr
}
  , Vg = t => C2[t]
  , z2 = new Set([Jr, Fr]);
function Ug(t, e) {
    let n = Vg(t);
    return z2.has(n) || (n = Me),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const O2 = new Set(["auto", "none", "0"]);
function j2(t, e, n) {
    let i = 0, a;
    for (; i < t.length && !a; ) {
        const l = t[i];
        typeof l == "string" && !O2.has(l) && ea(l).values.length && (a = t[i]),
        i++
    }
    if (a && n)
        for (const l of e)
            t[l] = Ug(n, a)
}
class N2 extends xf {
    constructor(e, n, i, a, l) {
        super(e, n, i, a, l, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: e, element: n, name: i} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let c = 0; c < e.length; c++) {
            let d = e[c];
            if (typeof d == "string" && (d = d.trim(),
            df(d))) {
                const f = Dg(d, n.current);
                f !== void 0 && (e[c] = f),
                c === e.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Cg.has(i) || e.length !== 2)
            return;
        const [a,l] = e
          , s = Ch(a)
          , u = Ch(l)
          , o = mh(a)
          , r = mh(l);
        if (o !== r && xn[i]) {
            this.needsMeasurement = !0;
            return
        }
        if (s !== u)
            if (Ah(s) && Ah(u))
                for (let c = 0; c < e.length; c++) {
                    const d = e[c];
                    typeof d == "string" && (e[c] = parseFloat(d))
                }
            else
                xn[i] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: e, name: n} = this
          , i = [];
        for (let a = 0; a < e.length; a++)
            (e[a] === null || A2(e[a])) && i.push(a);
        i.length && j2(e, i, n)
    }
    measureInitialState() {
        const {element: e, unresolvedKeyframes: n, name: i} = this;
        if (!e || !e.current)
            return;
        i === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = xn[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
        n[0] = this.measuredOrigin;
        const a = n[n.length - 1];
        a !== void 0 && e.getValue(i, a).jump(a, !1)
    }
    measureEndState() {
        var u;
        const {element: e, name: n, unresolvedKeyframes: i} = this;
        if (!e || !e.current)
            return;
        const a = e.getValue(n);
        a && a.jump(this.measuredOrigin, !1);
        const l = i.length - 1
          , s = i[l];
        i[l] = xn[n](e.measureViewportBox(), window.getComputedStyle(e.current)),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        (u = this.removedTransforms) != null && u.length && this.removedTransforms.forEach( ([o,r]) => {
            e.getValue(o).set(r)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function wf(t, e, n) {
    if (t == null)
        return [];
    if (t instanceof EventTarget)
        return [t];
    if (typeof t == "string") {
        const a = document.querySelectorAll(t);
        return a ? Array.from(a) : []
    }
    return Array.from(t).filter(i => i != null)
}
const _g = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Za(t) {
    return Xy(t) && "offsetHeight"in t && !("ownerSVGElement"in t)
}
const {schedule: Cf} = ng(queueMicrotask, !1)
  , Se = {
    x: !1,
    y: !1
};
function Bg() {
    return Se.x || Se.y
}
function R2(t) {
    return t === "x" || t === "y" ? Se[t] ? null : (Se[t] = !0,
    () => {
        Se[t] = !1
    }
    ) : Se.x || Se.y ? null : (Se.x = Se.y = !0,
    () => {
        Se.x = Se.y = !1
    }
    )
}
function Lg(t, e) {
    const n = wf(t)
      , i = new AbortController
      , a = {
        passive: !0,
        ...e,
        signal: i.signal
    };
    return [n, a, () => i.abort()]
}
function V2(t) {
    return !(t.pointerType === "touch" || Bg())
}
function U2(t, e, n={}) {
    const [i,a,l] = Lg(t, n);
    return i.forEach(s => {
        let u = !1, o = !1, r;
        const c = () => {
            s.removeEventListener("pointerleave", v)
        }
          , d = S => {
            r && (r(S),
            r = void 0),
            c()
        }
          , f = S => {
            u = !1,
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", f),
            o && (o = !1,
            d(S))
        }
          , h = () => {
            u = !0,
            window.addEventListener("pointerup", f, a),
            window.addEventListener("pointercancel", f, a)
        }
          , v = S => {
            if (S.pointerType !== "touch") {
                if (u) {
                    o = !0;
                    return
                }
                d(S)
            }
        }
          , b = S => {
            if (!V2(S))
                return;
            o = !1;
            const p = e(s, S);
            typeof p == "function" && (r = p,
            s.addEventListener("pointerleave", v, a))
        }
        ;
        s.addEventListener("pointerenter", b, a),
        s.addEventListener("pointerdown", h, a)
    }
    ),
    l
}
const Hg = (t, e) => e ? t === e ? !0 : Hg(t, e.parentElement) : !1
  , zf = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , _2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function B2(t) {
    return _2.has(t.tagName) || t.isContentEditable === !0
}
const L2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function H2(t) {
    return L2.has(t.tagName) || t.isContentEditable === !0
}
const ys = new WeakSet;
function Oh(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}
function Mo(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Y2 = (t, e) => {
    const n = t.currentTarget;
    if (!n)
        return;
    const i = Oh( () => {
        if (ys.has(n))
            return;
        Mo(n, "down");
        const a = Oh( () => {
            Mo(n, "up")
        }
        )
          , l = () => Mo(n, "cancel");
        n.addEventListener("keyup", a, e),
        n.addEventListener("blur", l, e)
    }
    );
    n.addEventListener("keydown", i, e),
    n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
}
;
function jh(t) {
    return zf(t) && !Bg()
}
const Nh = new WeakSet;
function G2(t, e, n={}) {
    const [i,a,l] = Lg(t, n)
      , s = u => {
        const o = u.currentTarget;
        if (!jh(u) || Nh.has(u))
            return;
        ys.add(o),
        n.stopPropagation && Nh.add(u);
        const r = e(o, u)
          , c = (h, v) => {
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ys.has(o) && ys.delete(o),
            jh(h) && typeof r == "function" && r(h, {
                success: v
            })
        }
          , d = h => {
            c(h, o === window || o === document || n.useGlobalTarget || Hg(o, h.target))
        }
          , f = h => {
            c(h, !1)
        }
        ;
        window.addEventListener("pointerup", d, a),
        window.addEventListener("pointercancel", f, a)
    }
    ;
    return i.forEach(u => {
        (n.useGlobalTarget ? window : u).addEventListener("pointerdown", s, a),
        Za(u) && (u.addEventListener("focus", r => Y2(r, a)),
        !B2(u) && !u.hasAttribute("tabindex") && (u.tabIndex = 0))
    }
    ),
    l
}
function Of(t) {
    return Xy(t) && "ownerSVGElement"in t
}
const gs = new WeakMap;
let sn;
const Yg = (t, e, n) => (i, a) => a && a[0] ? a[0][t + "Size"] : Of(i) && "getBBox"in i ? i.getBBox()[e] : i[n]
  , q2 = Yg("inline", "width", "offsetWidth")
  , X2 = Yg("block", "height", "offsetHeight");
function Q2({target: t, borderBoxSize: e}) {
    var n;
    (n = gs.get(t)) == null || n.forEach(i => {
        i(t, {
            get width() {
                return q2(t, e)
            },
            get height() {
                return X2(t, e)
            }
        })
    }
    )
}
function Z2(t) {
    t.forEach(Q2)
}
function K2() {
    typeof ResizeObserver > "u" || (sn = new ResizeObserver(Z2))
}
function k2(t, e) {
    sn || K2();
    const n = wf(t);
    return n.forEach(i => {
        let a = gs.get(i);
        a || (a = new Set,
        gs.set(i, a)),
        a.add(e),
        sn == null || sn.observe(i)
    }
    ),
    () => {
        n.forEach(i => {
            const a = gs.get(i);
            a == null || a.delete(e),
            a != null && a.size || sn == null || sn.unobserve(i)
        }
        )
    }
}
const vs = new Set;
let Vi;
function J2() {
    Vi = () => {
        const t = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        vs.forEach(e => e(t))
    }
    ,
    window.addEventListener("resize", Vi)
}
function F2(t) {
    return vs.add(t),
    Vi || J2(),
    () => {
        vs.delete(t),
        !vs.size && typeof Vi == "function" && (window.removeEventListener("resize", Vi),
        Vi = void 0)
    }
}
function Wr(t, e) {
    return typeof t == "function" ? F2(t) : k2(t, e)
}
function Gg(t, e) {
    let n;
    const i = () => {
        const {currentTime: a} = e
          , s = (a === null ? 0 : a.value) / 100;
        n !== s && t(s),
        n = s
    }
    ;
    return Q.preUpdate(i, !0),
    () => ge(i)
}
function W2(t) {
    return Of(t) && t.tagName === "svg"
}
function P2(...t) {
    const e = !Array.isArray(t[0])
      , n = e ? 0 : -1
      , i = t[0 + n]
      , a = t[1 + n]
      , l = t[2 + n]
      , s = t[3 + n]
      , u = gf(a, l, s);
    return e ? u(i) : u
}
const $2 = [...Rg, ht, Me]
  , I2 = t => $2.find(Ng(t))
  , Rh = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ui = () => ({
    x: Rh(),
    y: Rh()
})
  , Vh = () => ({
    min: 0,
    max: 0
})
  , vt = () => ({
    x: Vh(),
    y: Vh()
})
  , tT = new WeakMap;
function Ou(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
function cl(t) {
    return typeof t == "string" || Array.isArray(t)
}
const jf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Nf = ["initial", ...jf];
function ju(t) {
    return Ou(t.animate) || Nf.some(e => cl(t[e]))
}
function qg(t) {
    return !!(ju(t) || t.variants)
}
function eT(t, e, n) {
    for (const i in e) {
        const a = e[i]
          , l = n[i];
        if (jt(a))
            t.addValue(i, a);
        else if (jt(l))
            t.addValue(i, Ee(a, {
                owner: t
            }));
        else if (l !== a)
            if (t.hasValue(i)) {
                const s = t.getValue(i);
                s.liveStyle === !0 ? s.jump(a) : s.hasAnimated || s.set(a)
            } else {
                const s = t.getStaticValue(i);
                t.addValue(i, Ee(s !== void 0 ? s : a, {
                    owner: t
                }))
            }
    }
    for (const i in n)
        e[i] === void 0 && t.removeValue(i);
    return e
}
const nu = {
    current: null
}
  , Rf = {
    current: !1
}
  , nT = typeof window < "u";
function Xg() {
    if (Rf.current = !0,
    !!nT)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , e = () => nu.current = t.matches;
            t.addEventListener("change", e),
            e()
        } else
            nu.current = !1
}
const Uh = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let iu = {};
function Qg(t) {
    iu = t
}
function iT() {
    return iu
}
class aT {
    scrapeMotionValuesFromProps(e, n, i) {
        return {}
    }
    constructor({parent: e, props: n, presenceContext: i, reducedMotionConfig: a, skipAnimations: l, blockInitialAnimation: s, visualState: u}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = xf,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const h = Ut.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h,
            Q.render(this.render, !1, !0))
        }
        ;
        const {latestValues: r, renderState: c} = u;
        this.latestValues = r,
        this.baseTarget = {
            ...r
        },
        this.initialValues = n.initial ? {
            ...r
        } : {},
        this.renderState = c,
        this.parent = e,
        this.props = n,
        this.presenceContext = i,
        this.depth = e ? e.depth + 1 : 0,
        this.reducedMotionConfig = a,
        this.skipAnimationsConfig = l,
        this.options = o,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = ju(n),
        this.isVariantNode = qg(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(e && e.current);
        const {willChange: d, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            r[h] !== void 0 && jt(v) && v.set(r[h])
        }
    }
    mount(e) {
        var n, i;
        if (this.hasBeenMounted)
            for (const a in this.initialValues)
                (n = this.values.get(a)) == null || n.jump(this.initialValues[a]),
                this.latestValues[a] = this.initialValues[a];
        this.current = e,
        tT.set(e, this),
        this.projection && !this.projection.instance && this.projection.mount(e),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (a, l) => this.bindToMotionValue(l, a)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Rf.current || Xg(),
        this.shouldReduceMotion = nu.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (i = this.parent) == null || i.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var e;
        this.projection && this.projection.unmount(),
        ge(this.notifyUpdate),
        ge(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (e = this.parent) == null || e.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const i = this.features[n];
            i && (i.unmount(),
            i.isMounted = !1)
        }
        this.current = null
    }
    addChild(e) {
        this.children.add(e),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(e)
    }
    removeChild(e) {
        this.children.delete(e),
        this.enteringChildren && this.enteringChildren.delete(e)
    }
    bindToMotionValue(e, n) {
        if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(),
        n.accelerate && Eg.has(e) && this.current instanceof HTMLElement) {
            const {factory: s, keyframes: u, times: o, ease: r, duration: c} = n.accelerate
              , d = new Tg({
                element: this.current,
                name: e,
                keyframes: u,
                times: o,
                ease: r,
                duration: ee(c)
            })
              , f = s(d);
            this.valueSubscriptions.set(e, () => {
                f(),
                d.cancel()
            }
            );
            return
        }
        const i = da.has(e);
        i && this.onBindTransform && this.onBindTransform();
        const a = n.on("change", s => {
            this.latestValues[e] = s,
            this.props.onUpdate && Q.preRender(this.notifyUpdate),
            i && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let l;
        typeof window < "u" && window.MotionCheckAppearSync && (l = window.MotionCheckAppearSync(this, e, n)),
        this.valueSubscriptions.set(e, () => {
            a(),
            l && l(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in iu) {
            const n = iu[e];
            if (!n)
                continue;
            const {isEnabled: i, Feature: a} = n;
            if (!this.features[e] && a && i(this.props) && (this.features[e] = new a(this)),
            this.features[e]) {
                const l = this.features[e];
                l.isMounted ? l.update() : (l.mount(),
                l.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : vt()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = e,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let i = 0; i < Uh.length; i++) {
            const a = Uh[i];
            this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](),
            delete this.propEventSubscriptions[a]);
            const l = "on" + a
              , s = e[l];
            s && (this.propEventSubscriptions[a] = this.on(a, s))
        }
        this.prevMotionValues = eT(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(e),
            () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const i = this.values.get(e);
        n !== i && (i && this.removeValue(e),
        this.bindToMotionValue(e, n),
        this.values.set(e, n),
        this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(),
        this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e])
            return this.props.values[e];
        let i = this.values.get(e);
        return i === void 0 && n !== void 0 && (i = Ee(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(e, i)),
        i
    }
    readValue(e, n) {
        let i = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
        return i != null && (typeof i == "string" && (qy(i) || Qy(i)) ? i = parseFloat(i) : !I2(i) && Me.test(n) && (i = Ug(e, n)),
        this.setBaseTarget(e, jt(i) ? i.get() : i)),
        jt(i) ? i.get() : i
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        var l;
        const {initial: n} = this.props;
        let i;
        if (typeof n == "string" || typeof n == "object") {
            const s = Ef(this.props, n, (l = this.presenceContext) == null ? void 0 : l.custom);
            s && (i = s[e])
        }
        if (n && i !== void 0)
            return i;
        const a = this.getBaseTargetFromProps(this.props, e);
        return a !== void 0 && !jt(a) ? a : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new of),
        this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
    scheduleRenderMicrotask() {
        Cf.render(this.render)
    }
}
class Zg extends aT {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = N2
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        const i = e.style;
        return i ? i[n] : void 0
    }
    removeValueFromRenderState(e, {vars: n, style: i}) {
        delete n[e],
        delete i[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: e} = this.props;
        jt(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class Bn {
    constructor(e) {
        this.isMounted = !1,
        this.node = e
    }
    update() {}
}
function Kg({top: t, left: e, right: n, bottom: i}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}
function lT({x: t, y: e}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}
function sT(t, e) {
    if (!e)
        return t;
    const n = e({
        x: t.left,
        y: t.top
    })
      , i = e({
        x: t.right,
        y: t.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: i.y,
        right: i.x
    }
}
function Do(t) {
    return t === void 0 || t === 1
}
function Pr({scale: t, scaleX: e, scaleY: n}) {
    return !Do(t) || !Do(e) || !Do(n)
}
function kn(t) {
    return Pr(t) || kg(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function kg(t) {
    return _h(t.x) || _h(t.y)
}
function _h(t) {
    return t && t !== "0%"
}
function au(t, e, n) {
    const i = t - n
      , a = e * i;
    return n + a
}
function Bh(t, e, n, i, a) {
    return a !== void 0 && (t = au(t, a, i)),
    au(t, n, i) + e
}
function $r(t, e=0, n=1, i, a) {
    t.min = Bh(t.min, e, n, i, a),
    t.max = Bh(t.max, e, n, i, a)
}
function Jg(t, {x: e, y: n}) {
    $r(t.x, e.translate, e.scale, e.originPoint),
    $r(t.y, n.translate, n.scale, n.originPoint)
}
const Lh = .999999999999
  , Hh = 1.0000000000001;
function uT(t, e, n, i=!1) {
    var u;
    const a = n.length;
    if (!a)
        return;
    e.x = e.y = 1;
    let l, s;
    for (let o = 0; o < a; o++) {
        l = n[o],
        s = l.projectionDelta;
        const {visualElement: r} = l.options;
        r && r.props.style && r.props.style.display === "contents" || (i && l.options.layoutScroll && l.scroll && l !== l.root && (ze(t.x, -l.scroll.offset.x),
        ze(t.y, -l.scroll.offset.y)),
        s && (e.x *= s.x.scale,
        e.y *= s.y.scale,
        Jg(t, s)),
        i && kn(l.latestValues) && xs(t, l.latestValues, (u = l.layout) == null ? void 0 : u.layoutBox))
    }
    e.x < Hh && e.x > Lh && (e.x = 1),
    e.y < Hh && e.y > Lh && (e.y = 1)
}
function ze(t, e) {
    t.min += e,
    t.max += e
}
function Yh(t, e, n, i, a=.5) {
    const l = at(t.min, t.max, a);
    $r(t, e, n, l, i)
}
function Gh(t, e) {
    return typeof t == "string" ? parseFloat(t) / 100 * (e.max - e.min) : t
}
function xs(t, e, n) {
    const i = n ?? t;
    Yh(t.x, Gh(e.x, i.x), e.scaleX, e.scale, e.originX),
    Yh(t.y, Gh(e.y, i.y), e.scaleY, e.scale, e.originY)
}
function Fg(t, e) {
    return Kg(sT(t.getBoundingClientRect(), e))
}
function oT(t, e, n) {
    const i = Fg(t, n)
      , {scroll: a} = e;
    return a && (ze(i.x, a.offset.x),
    ze(i.y, a.offset.y)),
    i
}
const rT = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , cT = fa.length;
function fT(t, e, n) {
    let i = ""
      , a = !0;
    for (let l = 0; l < cT; l++) {
        const s = fa[l]
          , u = t[s];
        if (u === void 0)
            continue;
        let o = !0;
        if (typeof u == "number")
            o = u === (s.startsWith("scale") ? 1 : 0);
        else {
            const r = parseFloat(u);
            o = s.startsWith("scale") ? r === 1 : r === 0
        }
        if (!o || n) {
            const r = _g(u, Df[s]);
            if (!o) {
                a = !1;
                const c = rT[s] || s;
                i += `${c}(${r}) `
            }
            n && (e[s] = r)
        }
    }
    return i = i.trim(),
    n ? i = n(e, a ? "" : i) : a && (i = "none"),
    i
}
function Vf(t, e, n) {
    const {style: i, vars: a, transformOrigin: l} = t;
    let s = !1
      , u = !1;
    for (const o in e) {
        const r = e[o];
        if (da.has(o)) {
            s = !0;
            continue
        } else if (ag(o)) {
            a[o] = r;
            continue
        } else {
            const c = _g(r, Df[o]);
            o.startsWith("origin") ? (u = !0,
            l[o] = c) : i[o] = c
        }
    }
    if (e.transform || (s || n ? i.transform = fT(e, t.transform, n) : i.transform && (i.transform = "none")),
    u) {
        const {originX: o="50%", originY: r="50%", originZ: c=0} = l;
        i.transformOrigin = `${o} ${r} ${c}`
    }
}
function Wg(t, {style: e, vars: n}, i, a) {
    const l = t.style;
    let s;
    for (s in e)
        l[s] = e[s];
    a == null || a.applyProjectionStyles(l, i);
    for (s in n)
        l.setProperty(s, n[s])
}
function qh(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const ba = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if (typeof t == "string")
            if (j.test(t))
                t = parseFloat(t);
            else
                return t;
        const n = qh(t, e.target.x)
          , i = qh(t, e.target.y);
        return `${n}% ${i}%`
    }
}
  , dT = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const i = t
          , a = Me.parse(t);
        if (a.length > 5)
            return i;
        const l = Me.createTransformer(t)
          , s = typeof a[0] != "number" ? 1 : 0
          , u = n.x.scale * e.x
          , o = n.y.scale * e.y;
        a[0 + s] /= u,
        a[1 + s] /= o;
        const r = at(u, o, .5);
        return typeof a[2 + s] == "number" && (a[2 + s] /= r),
        typeof a[3 + s] == "number" && (a[3 + s] /= r),
        l(a)
    }
}
  , Ir = {
    borderRadius: {
        ...ba,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ba,
    borderTopRightRadius: ba,
    borderBottomLeftRadius: ba,
    borderBottomRightRadius: ba,
    boxShadow: dT
};
function Pg(t, {layout: e, layoutId: n}) {
    return da.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ir[t] || t === "opacity")
}
function Uf(t, e, n) {
    var s;
    const i = t.style
      , a = e == null ? void 0 : e.style
      , l = {};
    if (!i)
        return l;
    for (const u in i)
        (jt(i[u]) || a && jt(a[u]) || Pg(u, t) || ((s = n == null ? void 0 : n.getValue(u)) == null ? void 0 : s.liveStyle) !== void 0) && (l[u] = i[u]);
    return l
}
function hT(t) {
    return window.getComputedStyle(t)
}
class mT extends Zg {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Wg
    }
    readValueFromInstance(e, n) {
        var i;
        if (da.has(n))
            return (i = this.projection) != null && i.isProjecting ? Hr(n) : US(e, n);
        {
            const a = hT(e)
              , l = (ag(n) ? a.getPropertyValue(n) : a[n]) || 0;
            return typeof l == "string" ? l.trim() : l
        }
    }
    measureInstanceViewportBox(e, {transformPagePoint: n}) {
        return Fg(e, n)
    }
    build(e, n, i) {
        Vf(e, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return Uf(e, n, i)
    }
}
const pT = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , yT = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function gT(t, e, n=1, i=0, a=!0) {
    t.pathLength = 1;
    const l = a ? pT : yT;
    t[l.offset] = `${-i}`,
    t[l.array] = `${e} ${n}`
}
const vT = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function $g(t, {attrX: e, attrY: n, attrScale: i, pathLength: a, pathSpacing: l=1, pathOffset: s=0, ...u}, o, r, c) {
    if (Vf(t, u, r),
    o) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: d, style: f} = t;
    d.transform && (f.transform = d.transform,
    delete d.transform),
    (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%",
    delete d.transformOrigin),
    f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete d.transformBox);
    for (const h of vT)
        d[h] !== void 0 && (f[h] = d[h],
        delete d[h]);
    e !== void 0 && (d.x = e),
    n !== void 0 && (d.y = n),
    i !== void 0 && (d.scale = i),
    a !== void 0 && gT(d, a, l, s, !1)
}
const Ig = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , tv = t => typeof t == "string" && t.toLowerCase() === "svg";
function xT(t, e, n, i) {
    Wg(t, e, void 0, i);
    for (const a in e.attrs)
        t.setAttribute(Ig.has(a) ? a : Mf(a), e.attrs[a])
}
function ev(t, e, n) {
    const i = Uf(t, e, n);
    for (const a in t)
        if (jt(t[a]) || jt(e[a])) {
            const l = fa.indexOf(a) !== -1 ? "attr" + a.charAt(0).toUpperCase() + a.substring(1) : a;
            i[l] = t[a]
        }
    return i
}
class bT extends Zg {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = vt
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (da.has(n)) {
            const i = Vg(n);
            return i && i.default || 0
        }
        return n = Ig.has(n) ? n : Mf(n),
        e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, i) {
        return ev(e, n, i)
    }
    build(e, n, i) {
        $g(e, n, this.isSVGTag, i.transformTemplate, i.style)
    }
    renderInstance(e, n, i, a) {
        xT(e, n, i, a)
    }
    mount(e) {
        this.isSVGTag = tv(e.tagName),
        super.mount(e)
    }
}
const ST = Nf.length;
function nv(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const n = t.parent ? nv(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial),
        n
    }
    const e = {};
    for (let n = 0; n < ST; n++) {
        const i = Nf[n]
          , a = t.props[i];
        (cl(a) || a === !1) && (e[i] = a)
    }
    return e
}
function iv(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
const TT = [...jf].reverse()
  , AT = jf.length;
function ET(t) {
    return e => Promise.all(e.map( ({animation: n, options: i}) => S2(t, n, i)))
}
function MT(t) {
    let e = ET(t)
      , n = Xh()
      , i = !0
      , a = !1;
    const l = r => (c, d) => {
        var h;
        const f = ni(t, d, r === "exit" ? (h = t.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {transition: v, transitionEnd: b, ...S} = f;
            c = {
                ...c,
                ...S,
                ...b
            }
        }
        return c
    }
    ;
    function s(r) {
        e = r(t)
    }
    function u(r) {
        const {props: c} = t
          , d = nv(t.parent) || {}
          , f = []
          , h = new Set;
        let v = {}
          , b = 1 / 0;
        for (let p = 0; p < AT; p++) {
            const m = TT[p]
              , y = n[m]
              , x = c[m] !== void 0 ? c[m] : d[m]
              , T = cl(x)
              , O = m === r ? y.isActive : null;
            O === !1 && (b = p);
            let M = x === d[m] && x !== c[m] && T;
            if (M && (i || a) && t.manuallyAnimateOnMount && (M = !1),
            y.protectedKeys = {
                ...v
            },
            !y.isActive && O === null || !x && !y.prevProp || Ou(x) || typeof x == "boolean")
                continue;
            if (m === "exit" && y.isActive && O !== !0) {
                y.prevResolvedValues && (v = {
                    ...v,
                    ...y.prevResolvedValues
                });
                continue
            }
            const D = DT(y.prevProp, x);
            let C = D || m === r && y.isActive && !M && T || p > b && T
              , w = !1;
            const L = Array.isArray(x) ? x : [x];
            let I = L.reduce(l(m), {});
            O === !1 && (I = {});
            const {prevResolvedValues: ae={}} = y
              , le = {
                ...ae,
                ...I
            }
              , Kt = N => {
                C = !0,
                h.has(N) && (w = !0,
                h.delete(N)),
                y.needsAnimating[N] = !0;
                const X = t.getValue(N);
                X && (X.liveStyle = !1)
            }
            ;
            for (const N in le) {
                const X = I[N]
                  , tt = ae[N];
                if (v.hasOwnProperty(N))
                    continue;
                let ve = !1;
                Zr(X) && Zr(tt) ? ve = !iv(X, tt) : ve = X !== tt,
                ve ? X != null ? Kt(N) : h.add(N) : X !== void 0 && h.has(N) ? Kt(N) : y.protectedKeys[N] = !0
            }
            y.prevProp = x,
            y.prevResolvedValues = I,
            y.isActive && (v = {
                ...v,
                ...I
            }),
            (i || a) && t.blockInitialAnimation && (C = !1);
            const z = M && D;
            C && (!z || w) && f.push(...L.map(N => {
                const X = {
                    type: m
                };
                if (typeof N == "string" && (i || a) && !z && t.manuallyAnimateOnMount && t.parent) {
                    const {parent: tt} = t
                      , ve = ni(tt, N);
                    if (tt.enteringChildren && ve) {
                        const {delayChildren: hi} = ve.transition || {};
                        X.delay = Mg(tt.enteringChildren, t, hi)
                    }
                }
                return {
                    animation: N,
                    options: X
                }
            }
            ))
        }
        if (h.size) {
            const p = {};
            if (typeof c.initial != "boolean") {
                const m = ni(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                m && m.transition && (p.transition = m.transition)
            }
            h.forEach(m => {
                const y = t.getBaseTarget(m)
                  , x = t.getValue(m);
                x && (x.liveStyle = !0),
                p[m] = y ?? null
            }
            ),
            f.push({
                animation: p
            })
        }
        let S = !!f.length;
        return i && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (S = !1),
        i = !1,
        a = !1,
        S ? e(f) : Promise.resolve()
    }
    function o(r, c) {
        var f;
        if (n[r].isActive === c)
            return Promise.resolve();
        (f = t.variantChildren) == null || f.forEach(h => {
            var v;
            return (v = h.animationState) == null ? void 0 : v.setActive(r, c)
        }
        ),
        n[r].isActive = c;
        const d = u(r);
        for (const h in n)
            n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: u,
        setActive: o,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Xh(),
            a = !0
        }
    }
}
function DT(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !iv(e, t) : !1
}
function Yn(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Xh() {
    return {
        animate: Yn(!0),
        whileInView: Yn(),
        whileHover: Yn(),
        whileTap: Yn(),
        whileDrag: Yn(),
        whileFocus: Yn(),
        exit: Yn()
    }
}
function tc(t, e) {
    t.min = e.min,
    t.max = e.max
}
function be(t, e) {
    tc(t.x, e.x),
    tc(t.y, e.y)
}
function Qh(t, e) {
    t.translate = e.translate,
    t.scale = e.scale,
    t.originPoint = e.originPoint,
    t.origin = e.origin
}
const av = 1e-4
  , wT = 1 - av
  , CT = 1 + av
  , lv = .01
  , zT = 0 - lv
  , OT = 0 + lv;
function _t(t) {
    return t.max - t.min
}
function jT(t, e, n) {
    return Math.abs(t - e) <= n
}
function Zh(t, e, n, i=.5) {
    t.origin = i,
    t.originPoint = at(e.min, e.max, t.origin),
    t.scale = _t(n) / _t(e),
    t.translate = at(n.min, n.max, t.origin) - t.originPoint,
    (t.scale >= wT && t.scale <= CT || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= zT && t.translate <= OT || isNaN(t.translate)) && (t.translate = 0)
}
function Ka(t, e, n, i) {
    Zh(t.x, e.x, n.x, i ? i.originX : void 0),
    Zh(t.y, e.y, n.y, i ? i.originY : void 0)
}
function Kh(t, e, n, i=0) {
    const a = i ? at(n.min, n.max, i) : n.min;
    t.min = a + e.min,
    t.max = t.min + _t(e)
}
function NT(t, e, n, i) {
    Kh(t.x, e.x, n.x, i == null ? void 0 : i.x),
    Kh(t.y, e.y, n.y, i == null ? void 0 : i.y)
}
function kh(t, e, n, i=0) {
    const a = i ? at(n.min, n.max, i) : n.min;
    t.min = e.min - a,
    t.max = t.min + _t(e)
}
function lu(t, e, n, i) {
    kh(t.x, e.x, n.x, i == null ? void 0 : i.x),
    kh(t.y, e.y, n.y, i == null ? void 0 : i.y)
}
function Jh(t, e, n, i, a) {
    return t -= e,
    t = au(t, 1 / n, i),
    a !== void 0 && (t = au(t, 1 / a, i)),
    t
}
function RT(t, e=0, n=1, i=.5, a, l=t, s=t) {
    if (Ve.test(e) && (e = parseFloat(e),
    e = at(s.min, s.max, e / 100) - s.min),
    typeof e != "number")
        return;
    let u = at(l.min, l.max, i);
    t === l && (u -= e),
    t.min = Jh(t.min, e, n, u, a),
    t.max = Jh(t.max, e, n, u, a)
}
function Fh(t, e, [n,i,a], l, s) {
    RT(t, e[n], e[i], e[a], e.scale, l, s)
}
const VT = ["x", "scaleX", "originX"]
  , UT = ["y", "scaleY", "originY"];
function Wh(t, e, n, i) {
    Fh(t.x, e, VT, n ? n.x : void 0, i ? i.x : void 0),
    Fh(t.y, e, UT, n ? n.y : void 0, i ? i.y : void 0)
}
function Ph(t) {
    return t.translate === 0 && t.scale === 1
}
function sv(t) {
    return Ph(t.x) && Ph(t.y)
}
function $h(t, e) {
    return t.min === e.min && t.max === e.max
}
function _T(t, e) {
    return $h(t.x, e.x) && $h(t.y, e.y)
}
function Ih(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}
function uv(t, e) {
    return Ih(t.x, e.x) && Ih(t.y, e.y)
}
function tm(t) {
    return _t(t.x) / _t(t.y)
}
function em(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
function Ce(t) {
    return [t("x"), t("y")]
}
function BT(t, e, n) {
    let i = "";
    const a = t.x.translate / e.x
      , l = t.y.translate / e.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((a || l || s) && (i = `translate3d(${a}px, ${l}px, ${s}px) `),
    (e.x !== 1 || e.y !== 1) && (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {transformPerspective: r, rotate: c, rotateX: d, rotateY: f, skewX: h, skewY: v} = n;
        r && (i = `perspective(${r}px) ${i}`),
        c && (i += `rotate(${c}deg) `),
        d && (i += `rotateX(${d}deg) `),
        f && (i += `rotateY(${f}deg) `),
        h && (i += `skewX(${h}deg) `),
        v && (i += `skewY(${v}deg) `)
    }
    const u = t.x.scale * e.x
      , o = t.y.scale * e.y;
    return (u !== 1 || o !== 1) && (i += `scale(${u}, ${o})`),
    i || "none"
}
const ov = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  , LT = ov.length
  , nm = t => typeof t == "string" ? parseFloat(t) : t
  , im = t => typeof t == "number" || j.test(t);
function HT(t, e, n, i, a, l) {
    a ? (t.opacity = at(0, n.opacity ?? 1, YT(i)),
    t.opacityExit = at(e.opacity ?? 1, 0, GT(i))) : l && (t.opacity = at(e.opacity ?? 1, n.opacity ?? 1, i));
    for (let s = 0; s < LT; s++) {
        const u = ov[s];
        let o = am(e, u)
          , r = am(n, u);
        if (o === void 0 && r === void 0)
            continue;
        o || (o = 0),
        r || (r = 0),
        o === 0 || r === 0 || im(o) === im(r) ? (t[u] = Math.max(at(nm(o), nm(r), i), 0),
        (Ve.test(r) || Ve.test(o)) && (t[u] += "%")) : t[u] = r
    }
    (e.rotate || n.rotate) && (t.rotate = at(e.rotate || 0, n.rotate || 0, i))
}
function am(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const YT = rv(0, .5, $y)
  , GT = rv(.5, .95, Xt);
function rv(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(ta(t, e, i))
}
function qT(t, e, n) {
    const i = jt(t) ? t : Ee(t);
    return i.start(Af("", i, e, n)),
    i.animation
}
function fl(t, e, n, i={
    passive: !0
}) {
    return t.addEventListener(e, n, i),
    () => t.removeEventListener(e, n)
}
const XT = (t, e) => t.depth - e.depth;
class QT {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(e) {
        uf(this.children, e),
        this.isDirty = !0
    }
    remove(e) {
        Ps(this.children, e),
        this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(XT),
        this.isDirty = !1,
        this.children.forEach(e)
    }
}
function ZT(t, e) {
    const n = Ut.now()
      , i = ({timestamp: a}) => {
        const l = a - n;
        l >= e && (ge(i),
        t(l - e))
    }
    ;
    return Q.setup(i, !0),
    () => ge(i)
}
function bs(t) {
    return jt(t) ? t.get() : t
}
class KT {
    constructor() {
        this.members = []
    }
    add(e) {
        uf(this.members, e);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const i = this.members[n];
            if (i === e || i === this.lead || i === this.prevLead)
                continue;
            const a = i.instance;
            (!a || a.isConnected === !1) && !i.snapshot && (Ps(this.members, i),
            i.unmount())
        }
        e.scheduleRender()
    }
    remove(e) {
        if (Ps(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        var n;
        for (let i = this.members.indexOf(e) - 1; i >= 0; i--) {
            const a = this.members[i];
            if (a.isPresent !== !1 && ((n = a.instance) == null ? void 0 : n.isConnected) !== !1)
                return this.promote(a),
                !0
        }
        return !1
    }
    promote(e, n) {
        var a;
        const i = this.lead;
        if (e !== i && (this.prevLead = i,
        this.lead = e,
        e.show(),
        i)) {
            i.updateSnapshot(),
            e.scheduleRender();
            const {layoutDependency: l} = i.options
              , {layoutDependency: s} = e.options;
            (l === void 0 || l !== s) && (e.resumeFrom = i,
            n && (i.preserveOpacity = !0),
            i.snapshot && (e.snapshot = i.snapshot,
            e.snapshot.latestValues = i.animationValues || i.latestValues),
            (a = e.root) != null && a.isUpdating && (e.isLayoutDirty = !0)),
            e.options.crossfade === !1 && i.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            var n, i, a, l, s;
            (i = (n = e.options).onExitComplete) == null || i.call(n),
            (s = (a = e.resumingFrom) == null ? void 0 : (l = a.options).onExitComplete) == null || s.call(l)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(e => e.instance && e.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var e;
        (e = this.lead) != null && e.snapshot && (this.lead.snapshot = void 0)
    }
}
const Ss = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , wo = ["", "X", "Y", "Z"]
  , kT = 1e3;
let JT = 0;
function Co(t, e, n, i) {
    const {latestValues: a} = e;
    a[t] && (n[t] = a[t],
    e.setStaticValue(t, 0),
    i && (i[t] = 0))
}
function cv(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: e} = t.options;
    if (!e)
        return;
    const n = Og(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: a, layoutId: l} = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", Q, !(a || l))
    }
    const {parent: i} = t;
    i && !i.hasCheckedOptimisedAppear && cv(i)
}
function fv({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: a}) {
    return class {
        constructor(s={}, u=e == null ? void 0 : e()) {
            this.id = JT++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(PT),
                this.nodes.forEach(iA),
                this.nodes.forEach(aA),
                this.nodes.forEach($T)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = u ? u.root || u : this,
            this.path = u ? [...u.path, u] : [],
            this.parent = u,
            this.depth = u ? u.depth + 1 : 0;
            for (let o = 0; o < this.path.length; o++)
                this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new QT)
        }
        addEventListener(s, u) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new of),
            this.eventHandlers.get(s).add(u)
        }
        notifyListeners(s, ...u) {
            const o = this.eventHandlers.get(s);
            o && o.notify(...u)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s) {
            if (this.instance)
                return;
            this.isSVG = Of(s) && !W2(s),
            this.instance = s;
            const {layoutId: u, layout: o, visualElement: r} = this.options;
            if (r && !r.current && r.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (o || u) && (this.isLayoutDirty = !0),
            t) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                Q.read( () => {
                    d = window.innerWidth
                }
                ),
                t(s, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = ZT(f, 250),
                    Ss.hasAnimatedSinceResize && (Ss.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(um)))
                }
                )
            }
            u && this.root.registerSharedNode(u, this),
            this.options.animate !== !1 && r && (u || o) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: h}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || r.getDefaultTransition() || rA
                  , {onLayoutAnimationStart: b, onLayoutAnimationComplete: S} = r.getProps()
                  , p = !this.targetLayout || !uv(this.targetLayout, h)
                  , m = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || m || d && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const y = {
                        ...Tf(v, "layout"),
                        onPlay: b,
                        onComplete: S
                    };
                    (r.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0,
                    y.type = !1),
                    this.startAnimation(y),
                    this.setAnimationOrigin(c, m)
                } else
                    d || um(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ge(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(lA),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cv(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") && (d.isLayoutDirty = !0),
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: u, layout: o} = this.options;
            if (u === void 0 && !o)
                return;
            const r = this.getTransformTemplate();
            this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                const o = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                o && this.nodes.forEach(tA),
                this.nodes.forEach(lm);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(sm);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(eA),
            this.nodes.forEach(nA),
            this.nodes.forEach(FT),
            this.nodes.forEach(WT)) : this.nodes.forEach(sm),
            this.clearAllSnapshots();
            const u = Ut.now();
            At.delta = De(0, 1e3 / 60, u - At.timestamp),
            At.timestamp = u,
            At.isProcessing = !0,
            xo.update.process(At),
            xo.preRender.process(At),
            xo.render.process(At),
            At.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Cf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(IT),
            this.sharedNodes.forEach(sA)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Q.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Q.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !_t(this.snapshot.measuredBox.x) && !_t(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let o = 0; o < this.path.length; o++)
                    this.path[o].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = vt()),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: u} = this.options;
            u && u.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let u = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (u = !1),
            u && this.instance) {
                const o = i(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: o,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : o
                }
            }
        }
        resetTransform() {
            if (!a)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , u = this.projectionDelta && !sv(this.projectionDelta)
              , o = this.getTransformTemplate()
              , r = o ? o(this.latestValues, "") : void 0
              , c = r !== this.prevTransformTemplateValue;
            s && this.instance && (u || kn(this.latestValues) || c) && (a(this.instance, r),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const u = this.measurePageBox();
            let o = this.removeElementScroll(u);
            return s && (o = this.removeTransform(o)),
            cA(o),
            {
                animationId: this.root.animationId,
                measuredBox: u,
                layoutBox: o,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var r;
            const {visualElement: s} = this.options;
            if (!s)
                return vt();
            const u = s.measureViewportBox();
            if (!(((r = this.scroll) == null ? void 0 : r.wasRoot) || this.path.some(fA))) {
                const {scroll: c} = this.root;
                c && (ze(u.x, c.offset.x),
                ze(u.y, c.offset.y))
            }
            return u
        }
        removeElementScroll(s) {
            var o;
            const u = vt();
            if (be(u, s),
            (o = this.scroll) != null && o.wasRoot)
                return u;
            for (let r = 0; r < this.path.length; r++) {
                const c = this.path[r]
                  , {scroll: d, options: f} = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && be(u, s),
                ze(u.x, d.offset.x),
                ze(u.y, d.offset.y))
            }
            return u
        }
        applyTransform(s, u=!1, o) {
            var c, d;
            const r = o || vt();
            be(r, s);
            for (let f = 0; f < this.path.length; f++) {
                const h = this.path[f];
                !u && h.options.layoutScroll && h.scroll && h !== h.root && (ze(r.x, -h.scroll.offset.x),
                ze(r.y, -h.scroll.offset.y)),
                kn(h.latestValues) && xs(r, h.latestValues, (c = h.layout) == null ? void 0 : c.layoutBox)
            }
            return kn(this.latestValues) && xs(r, this.latestValues, (d = this.layout) == null ? void 0 : d.layoutBox),
            r
        }
        removeTransform(s) {
            var o;
            const u = vt();
            be(u, s);
            for (let r = 0; r < this.path.length; r++) {
                const c = this.path[r];
                if (!kn(c.latestValues))
                    continue;
                let d;
                c.instance && (Pr(c.latestValues) && c.updateSnapshot(),
                d = vt(),
                be(d, c.measurePageBox())),
                Wh(u, c.latestValues, (o = c.snapshot) == null ? void 0 : o.layoutBox, d)
            }
            return kn(this.latestValues) && Wh(u, this.latestValues),
            u
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== At.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var h;
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const o = !!this.resumingFrom || this !== u;
            if (!(s || o && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: d} = this.options;
            if (!this.layout || !(c || d))
                return;
            this.resolvedRelativeTargetAt = At.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = vt(),
            this.targetWithTransforms = vt()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            NT(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : be(this.target, this.layout.layoutBox),
            Jg(this.target, this.targetDelta)) : be(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Pr(this.parent.latestValues) || kg(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(s, u, o) {
            this.relativeParent = s,
            this.linkedParentVersion = s.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = vt(),
            this.relativeTargetOrigin = vt(),
            lu(this.relativeTargetOrigin, u, o, this.options.layoutAnchor || void 0),
            be(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const s = this.getLead()
              , u = !!this.resumingFrom || this !== s;
            let o = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (o = !1),
            u && (this.isSharedProjectionDirty || this.isTransformDirty) && (o = !1),
            this.resolvedRelativeTargetAt === At.timestamp && (o = !1),
            o)
                return;
            const {layout: r, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(r || c))
                return;
            be(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , f = this.treeScale.y;
            uT(this.layoutCorrected, this.treeScale, this.path, u),
            s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox,
            s.targetWithTransforms = vt());
            const {target: h} = s;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Qh(this.prevProjectionDelta.x, this.projectionDelta.x),
            Qh(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Ka(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== f || !em(this.projectionDelta.x, this.prevProjectionDelta.x) || !em(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var u;
            if ((u = this.options.visualElement) == null || u.scheduleRender(),
            s) {
                const o = this.getStack();
                o && o.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Ui(),
            this.projectionDelta = Ui(),
            this.projectionDeltaWithTransform = Ui()
        }
        setAnimationOrigin(s, u=!1) {
            const o = this.snapshot
              , r = o ? o.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = Ui();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !u;
            const f = vt()
              , h = o ? o.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , b = h !== v
              , S = this.getStack()
              , p = !S || S.members.length <= 1
              , m = !!(b && !p && this.options.crossfade === !0 && !this.path.some(oA));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = x => {
                const T = x / 1e3;
                om(d.x, s.x, T),
                om(d.y, s.y, T),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (lu(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                uA(this.relativeTarget, this.relativeTargetOrigin, f, T),
                y && _T(this.relativeTarget, y) && (this.isProjectionDirty = !1),
                y || (y = vt()),
                be(y, this.relativeTarget)),
                b && (this.animationValues = c,
                HT(c, r, this.latestValues, T, m, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = T
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            var u, o, r;
            this.notifyListeners("animationStart"),
            (u = this.currentAnimation) == null || u.stop(),
            (r = (o = this.resumingFrom) == null ? void 0 : o.currentAnimation) == null || r.stop(),
            this.pendingAnimation && (ge(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Q.update( () => {
                Ss.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Ee(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = qT(this.motionValue, [0, 1e3], {
                    ...s,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        s.onUpdate && s.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(kT),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: u, target: o, layout: r, latestValues: c} = s;
            if (!(!u || !o || !r)) {
                if (this !== s && this.layout && r && dv(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                    o = this.target || vt();
                    const d = _t(this.layout.layoutBox.x);
                    o.x.min = s.target.x.min,
                    o.x.max = o.x.min + d;
                    const f = _t(this.layout.layoutBox.y);
                    o.y.min = s.target.y.min,
                    o.y.max = o.y.min + f
                }
                be(u, o),
                xs(u, c),
                Ka(this.projectionDeltaWithTransform, this.layoutCorrected, u, c)
            }
        }
        registerSharedNode(s, u) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new KT),
            this.sharedNodes.get(s).add(u);
            const r = u.options.initialPromotionConfig;
            u.promote({
                transition: r ? r.transition : void 0,
                preserveFollowOpacity: r && r.shouldPreserveFollowOpacity ? r.shouldPreserveFollowOpacity(u) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var u;
            const {layoutId: s} = this.options;
            return s ? ((u = this.getStack()) == null ? void 0 : u.lead) || this : this
        }
        getPrevLead() {
            var u;
            const {layoutId: s} = this.options;
            return s ? (u = this.getStack()) == null ? void 0 : u.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: u, preserveFollowOpacity: o}={}) {
            const r = this.getStack();
            r && r.promote(this, o),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            u && this.setOptions({
                transition: u
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let u = !1;
            const {latestValues: o} = s;
            if ((o.z || o.rotate || o.rotateX || o.rotateY || o.rotateZ || o.skewX || o.skewY) && (u = !0),
            !u)
                return;
            const r = {};
            o.z && Co("z", s, r, this.animationValues);
            for (let c = 0; c < wo.length; c++)
                Co(`rotate${wo[c]}`, s, r, this.animationValues),
                Co(`skew${wo[c]}`, s, r, this.animationValues);
            s.render();
            for (const c in r)
                s.setStaticValue(c, r[c]),
                this.animationValues && (this.animationValues[c] = r[c]);
            s.scheduleRender()
        }
        applyProjectionStyles(s, u) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                s.visibility = "hidden";
                return
            }
            const o = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                s.visibility = "",
                s.opacity = "",
                s.pointerEvents = bs(u == null ? void 0 : u.pointerEvents) || "",
                s.transform = o ? o(this.latestValues, "") : "none";
                return
            }
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
                this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                s.pointerEvents = bs(u == null ? void 0 : u.pointerEvents) || ""),
                this.hasProjected && !kn(this.latestValues) && (s.transform = o ? o({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            s.visibility = "";
            const c = r.animationValues || r.latestValues;
            this.applyTransformsToTarget();
            let d = BT(this.projectionDeltaWithTransform, this.treeScale, c);
            o && (d = o(c, d)),
            s.transform = d;
            const {x: f, y: h} = this.projectionDelta;
            s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`,
            r.animationValues ? s.opacity = r === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = r === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in Ir) {
                if (c[v] === void 0)
                    continue;
                const {correct: b, applyTo: S, isCSSVariable: p} = Ir[v]
                  , m = d === "none" ? c[v] : b(c[v], r);
                if (S) {
                    const y = S.length;
                    for (let x = 0; x < y; x++)
                        s[S[x]] = m
                } else
                    p ? this.options.visualElement.renderState.vars[v] = m : s[v] = m
            }
            this.options.layoutId && (s.pointerEvents = r === this ? bs(u == null ? void 0 : u.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var u;
                return (u = s.currentAnimation) == null ? void 0 : u.stop()
            }
            ),
            this.root.nodes.forEach(lm),
            this.root.sharedNodes.clear()
        }
    }
}
function FT(t) {
    t.updateLayout()
}
function WT(t) {
    var n;
    const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        const {layoutBox: i, measuredBox: a} = t.layout
          , {animationType: l} = t.options
          , s = e.source !== t.layout.source;
        if (l === "size")
            Ce(d => {
                const f = s ? e.measuredBox[d] : e.layoutBox[d]
                  , h = _t(f);
                f.min = i[d].min,
                f.max = f.min + h
            }
            );
        else if (l === "x" || l === "y") {
            const d = l === "x" ? "y" : "x";
            tc(s ? e.measuredBox[d] : e.layoutBox[d], i[d])
        } else
            dv(l, e.layoutBox, i) && Ce(d => {
                const f = s ? e.measuredBox[d] : e.layoutBox[d]
                  , h = _t(i[d]);
                f.max = f.min + h,
                t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                t.relativeTarget[d].max = t.relativeTarget[d].min + h)
            }
            );
        const u = Ui();
        Ka(u, i, e.layoutBox);
        const o = Ui();
        s ? Ka(o, t.applyTransform(a, !0), e.measuredBox) : Ka(o, i, e.layoutBox);
        const r = !sv(u);
        let c = !1;
        if (!t.resumeFrom) {
            const d = t.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const v = t.options.layoutAnchor || void 0
                      , b = vt();
                    lu(b, e.layoutBox, f.layoutBox, v);
                    const S = vt();
                    lu(S, i, h.layoutBox, v),
                    uv(b, S) || (c = !0),
                    d.options.layoutRoot && (t.relativeTarget = S,
                    t.relativeTargetOrigin = b,
                    t.relativeParent = d)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: o,
            layoutDelta: u,
            hasLayoutChanged: r,
            hasRelativeLayoutChanged: c
        })
    } else if (t.isLead()) {
        const {onExitComplete: i} = t.options;
        i && i()
    }
    t.options.transition = void 0
}
function PT(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function $T(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function IT(t) {
    t.clearSnapshot()
}
function lm(t) {
    t.clearMeasurements()
}
function tA(t) {
    t.isLayoutDirty = !0,
    t.updateLayout()
}
function sm(t) {
    t.isLayoutDirty = !1
}
function eA(t) {
    t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout,
    t.isLayoutDirty = !0)
}
function nA(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function um(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function iA(t) {
    t.resolveTargetDelta()
}
function aA(t) {
    t.calcProjection()
}
function lA(t) {
    t.resetSkewAndRotation()
}
function sA(t) {
    t.removeLeadSnapshot()
}
function om(t, e, n) {
    t.translate = at(e.translate, 0, n),
    t.scale = at(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function rm(t, e, n, i) {
    t.min = at(e.min, n.min, i),
    t.max = at(e.max, n.max, i)
}
function uA(t, e, n, i) {
    rm(t.x, e.x, n.x, i),
    rm(t.y, e.y, n.y, i)
}
function oA(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const rA = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , cm = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , fm = cm("applewebkit/") && !cm("chrome/") ? Math.round : Xt;
function dm(t) {
    t.min = fm(t.min),
    t.max = fm(t.max)
}
function cA(t) {
    dm(t.x),
    dm(t.y)
}
function dv(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !jT(tm(e), tm(n), .2)
}
function fA(t) {
    var e;
    return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot)
}
const dA = fv({
    attachResizeListener: (t, e) => fl(t, "resize", e),
    measureScroll: () => {
        var t, e;
        return {
            x: document.documentElement.scrollLeft || ((t = document.body) == null ? void 0 : t.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((e = document.body) == null ? void 0 : e.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , zo = {
    current: void 0
}
  , hv = fv({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!zo.current) {
            const t = new dA({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            zo.current = t
        }
        return zo.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = e !== void 0 ? e : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , Nu = E.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
function hm(t, e) {
    if (typeof t == "function")
        return t(e);
    t != null && (t.current = e)
}
function hA(...t) {
    return e => {
        let n = !1;
        const i = t.map(a => {
            const l = hm(a, e);
            return !n && typeof l == "function" && (n = !0),
            l
        }
        );
        if (n)
            return () => {
                for (let a = 0; a < i.length; a++) {
                    const l = i[a];
                    typeof l == "function" ? l() : hm(t[a], null)
                }
            }
    }
}
function mA(...t) {
    return E.useCallback(hA(...t), t)
}
class pA extends E.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (Za(n) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const i = n.offsetParent
              , a = Za(i) && i.offsetWidth || 0
              , l = Za(i) && i.offsetHeight || 0
              , s = getComputedStyle(n)
              , u = this.props.sizeRef.current;
            u.height = parseFloat(s.height),
            u.width = parseFloat(s.width),
            u.top = n.offsetTop,
            u.left = n.offsetLeft,
            u.right = a - u.width - u.left,
            u.bottom = l - u.height - u.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function yA({children: t, isPresent: e, anchorX: n, anchorY: i, root: a, pop: l}) {
    var f;
    const s = E.useId()
      , u = E.useRef(null)
      , o = E.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: r} = E.useContext(Nu)
      , c = ((f = t.props) == null ? void 0 : f.ref) ?? (t == null ? void 0 : t.ref)
      , d = mA(u, c);
    return E.useInsertionEffect( () => {
        const {width: h, height: v, top: b, left: S, right: p, bottom: m} = o.current;
        if (e || l === !1 || !u.current || !h || !v)
            return;
        const y = n === "left" ? `left: ${S}` : `right: ${p}`
          , x = i === "bottom" ? `bottom: ${m}` : `top: ${b}`;
        u.current.dataset.motionPopId = s;
        const T = document.createElement("style");
        r && (T.nonce = r);
        const O = a ?? document.head;
        return O.appendChild(T),
        T.sheet && T.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${v}px !important;
            ${y}px !important;
            ${x}px !important;
          }
        `),
        () => {
            var M;
            (M = u.current) == null || M.removeAttribute("data-motion-pop-id"),
            O.contains(T) && O.removeChild(T)
        }
    }
    , [e]),
    g.jsx(pA, {
        isPresent: e,
        childRef: u,
        sizeRef: o,
        pop: l,
        children: l === !1 ? t : E.cloneElement(t, {
            ref: d
        })
    })
}
const gA = ({children: t, initial: e, isPresent: n, onExitComplete: i, custom: a, presenceAffectsLayout: l, mode: s, anchorX: u, anchorY: o, root: r}) => {
    const c = Rn(vA)
      , d = E.useId();
    let f = !0
      , h = E.useMemo( () => (f = !1,
    {
        id: d,
        initial: e,
        isPresent: n,
        custom: a,
        onExitComplete: v => {
            c.set(v, !0);
            for (const b of c.values())
                if (!b)
                    return;
            i && i()
        }
        ,
        register: v => (c.set(v, !1),
        () => c.delete(v))
    }), [n, c, i]);
    return l && f && (h = {
        ...h
    }),
    E.useMemo( () => {
        c.forEach( (v, b) => c.set(b, !1))
    }
    , [n]),
    E.useEffect( () => {
        !n && !c.size && i && i()
    }
    , [n]),
    t = g.jsx(yA, {
        pop: s === "popLayout",
        isPresent: n,
        anchorX: u,
        anchorY: o,
        root: r,
        children: t
    }),
    g.jsx(Cu.Provider, {
        value: h,
        children: t
    })
}
;
function vA() {
    return new Map
}
function mv(t=!0) {
    const e = E.useContext(Cu);
    if (e === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: i, register: a} = e
      , l = E.useId();
    E.useEffect( () => {
        if (t)
            return a(l)
    }
    , [t]);
    const s = E.useCallback( () => t && i && i(l), [l, i, t]);
    return !n && i ? [!1, s] : [!0]
}
const kl = t => t.key || "";
function mm(t) {
    const e = [];
    return E.Children.forEach(t, n => {
        E.isValidElement(n) && e.push(n)
    }
    ),
    e
}
const xA = ({children: t, custom: e, initial: n=!0, onExitComplete: i, presenceAffectsLayout: a=!0, mode: l="sync", propagate: s=!1, anchorX: u="left", anchorY: o="top", root: r}) => {
    const [c,d] = mv(s)
      , f = E.useMemo( () => mm(t), [t])
      , h = s && !c ? [] : f.map(kl)
      , v = E.useRef(!0)
      , b = E.useRef(f)
      , S = Rn( () => new Map)
      , p = E.useRef(new Set)
      , [m,y] = E.useState(f)
      , [x,T] = E.useState(f);
    wu( () => {
        v.current = !1,
        b.current = f;
        for (let D = 0; D < x.length; D++) {
            const C = kl(x[D]);
            h.includes(C) ? (S.delete(C),
            p.current.delete(C)) : S.get(C) !== !0 && S.set(C, !1)
        }
    }
    , [x, h.length, h.join("-")]);
    const O = [];
    if (f !== m) {
        let D = [...f];
        for (let C = 0; C < x.length; C++) {
            const w = x[C]
              , L = kl(w);
            h.includes(L) || (D.splice(C, 0, w),
            O.push(w))
        }
        return l === "wait" && O.length && (D = O),
        T(mm(D)),
        y(f),
        null
    }
    const {forceRender: M} = E.useContext(sf);
    return g.jsx(g.Fragment, {
        children: x.map(D => {
            const C = kl(D)
              , w = s && !c ? !1 : f === x || h.includes(C)
              , L = () => {
                if (p.current.has(C))
                    return;
                if (S.has(C))
                    p.current.add(C),
                    S.set(C, !0);
                else
                    return;
                let I = !0;
                S.forEach(ae => {
                    ae || (I = !1)
                }
                ),
                I && (M == null || M(),
                T(b.current),
                s && (d == null || d()),
                i && i())
            }
            ;
            return g.jsx(gA, {
                isPresent: w,
                initial: !v.current || n ? void 0 : !1,
                custom: e,
                presenceAffectsLayout: a,
                mode: l,
                root: r,
                onExitComplete: w ? void 0 : L,
                anchorX: u,
                anchorY: o,
                children: D
            }, C)
        }
        )
    })
}
  , pv = E.createContext({
    strict: !1
})
  , pm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let ym = !1;
function bA() {
    if (ym)
        return;
    const t = {};
    for (const e in pm)
        t[e] = {
            isEnabled: n => pm[e].some(i => !!n[i])
        };
    Qg(t),
    ym = !0
}
function yv() {
    return bA(),
    iT()
}
function SA(t) {
    const e = yv();
    for (const n in t)
        e[n] = {
            ...e[n],
            ...t[n]
        };
    Qg(e)
}
const TA = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function su(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || TA.has(t)
}
let gv = t => !su(t);
function AA(t) {
    typeof t == "function" && (gv = e => e.startsWith("on") ? !su(e) : t(e))
}
try {
    AA(require("@emotion/is-prop-valid").default)
} catch {}
function EA(t, e, n) {
    const i = {};
    for (const a in t)
        a === "values" && typeof t.values == "object" || jt(t[a]) || (gv(a) || n === !0 && su(a) || !e && !su(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
    return i
}
const Ru = E.createContext({});
function MA(t, e) {
    if (ju(t)) {
        const {initial: n, animate: i} = t;
        return {
            initial: n === !1 || cl(n) ? n : void 0,
            animate: cl(i) ? i : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}
function DA(t) {
    const {initial: e, animate: n} = MA(t, E.useContext(Ru));
    return E.useMemo( () => ({
        initial: e,
        animate: n
    }), [gm(e), gm(n)])
}
function gm(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const _f = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function vv(t, e, n) {
    for (const i in e)
        !jt(e[i]) && !Pg(i, n) && (t[i] = e[i])
}
function wA({transformTemplate: t}, e) {
    return E.useMemo( () => {
        const n = _f();
        return Vf(n, e, t),
        Object.assign({}, n.vars, n.style)
    }
    , [e])
}
function CA(t, e) {
    const n = t.style || {}
      , i = {};
    return vv(i, n, t),
    Object.assign(i, wA(t, e)),
    i
}
function zA(t, e) {
    const n = {}
      , i = CA(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0),
    n.style = i,
    n
}
const xv = () => ({
    ..._f(),
    attrs: {}
});
function OA(t, e, n, i) {
    const a = E.useMemo( () => {
        const l = xv();
        return $g(l, e, tv(i), t.transformTemplate, t.style),
        {
            ...l.attrs,
            style: {
                ...l.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const l = {};
        vv(l, t.style, t),
        a.style = {
            ...l,
            ...a.style
        }
    }
    return a
}
const jA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Bf(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(jA.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function NA(t, e, n, {latestValues: i}, a, l=!1, s) {
    const o = (s ?? Bf(t) ? OA : zA)(e, i, a, t)
      , r = EA(e, typeof t == "string", l)
      , c = t !== E.Fragment ? {
        ...r,
        ...o,
        ref: n
    } : {}
      , {children: d} = e
      , f = E.useMemo( () => jt(d) ? d.get() : d, [d]);
    return E.createElement(t, {
        ...c,
        children: f
    })
}
function RA({scrapeMotionValuesFromProps: t, createRenderState: e}, n, i, a) {
    return {
        latestValues: VA(n, i, a, t),
        renderState: e()
    }
}
function VA(t, e, n, i) {
    const a = {}
      , l = i(t, {});
    for (const f in l)
        a[f] = bs(l[f]);
    let {initial: s, animate: u} = t;
    const o = ju(t)
      , r = qg(t);
    e && r && !o && t.inherit !== !1 && (s === void 0 && (s = e.initial),
    u === void 0 && (u = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? u : s;
    if (d && typeof d != "boolean" && !Ou(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = Ef(t, f[h]);
            if (v) {
                const {transitionEnd: b, transition: S, ...p} = v;
                for (const m in p) {
                    let y = p[m];
                    if (Array.isArray(y)) {
                        const x = c ? y.length - 1 : 0;
                        y = y[x]
                    }
                    y !== null && (a[m] = y)
                }
                for (const m in b)
                    a[m] = b[m]
            }
        }
    }
    return a
}
const bv = t => (e, n) => {
    const i = E.useContext(Ru)
      , a = E.useContext(Cu)
      , l = () => RA(t, e, i, a);
    return n ? l() : Rn(l)
}
  , UA = bv({
    scrapeMotionValuesFromProps: Uf,
    createRenderState: _f
})
  , _A = bv({
    scrapeMotionValuesFromProps: ev,
    createRenderState: xv
})
  , BA = Symbol.for("motionComponentSymbol");
function LA(t, e, n) {
    const i = E.useRef(n);
    E.useInsertionEffect( () => {
        i.current = n
    }
    );
    const a = E.useRef(null);
    return E.useCallback(l => {
        var u;
        l && ((u = t.onMount) == null || u.call(t, l));
        const s = i.current;
        if (typeof s == "function")
            if (l) {
                const o = s(l);
                typeof o == "function" && (a.current = o)
            } else
                a.current ? (a.current(),
                a.current = null) : s(l);
        else
            s && (s.current = l);
        e && (l ? e.mount(l) : e.unmount())
    }
    , [e])
}
const Sv = E.createContext({});
function bi(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function HA(t, e, n, i, a, l) {
    var y, x;
    const {visualElement: s} = E.useContext(Ru)
      , u = E.useContext(pv)
      , o = E.useContext(Cu)
      , r = E.useContext(Nu)
      , c = r.reducedMotion
      , d = r.skipAnimations
      , f = E.useRef(null)
      , h = E.useRef(!1);
    i = i || u.renderer,
    !f.current && i && (f.current = i(t, {
        visualState: e,
        parent: s,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: l
    }),
    h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current
      , b = E.useContext(Sv);
    v && !v.projection && a && (v.type === "html" || v.type === "svg") && YA(f.current, n, a, b);
    const S = E.useRef(!1);
    E.useInsertionEffect( () => {
        v && S.current && v.update(n, o)
    }
    );
    const p = n[zg]
      , m = E.useRef(!!p && typeof window < "u" && !((y = window.MotionHandoffIsComplete) != null && y.call(window, p)) && ((x = window.MotionHasOptimisedAnimation) == null ? void 0 : x.call(window, p)));
    return wu( () => {
        h.current = !0,
        v && (S.current = !0,
        window.MotionIsMounted = !0,
        v.updateFeatures(),
        v.scheduleRenderMicrotask(),
        m.current && v.animationState && v.animationState.animateChanges())
    }
    ),
    E.useEffect( () => {
        v && (!m.current && v.animationState && v.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var T;
            (T = window.MotionHandoffMarkAsComplete) == null || T.call(window, p)
        }
        ),
        m.current = !1),
        v.enteringChildren = void 0)
    }
    ),
    v
}
function YA(t, e, n, i) {
    const {layoutId: a, layout: l, drag: s, dragConstraints: u, layoutScroll: o, layoutRoot: r, layoutAnchor: c, layoutCrossfade: d} = e;
    t.projection = new n(t.latestValues,e["data-framer-portal-id"] ? void 0 : Tv(t.parent)),
    t.projection.setOptions({
        layoutId: a,
        layout: l,
        alwaysMeasureLayout: !!s || u && bi(u),
        visualElement: t,
        animationType: typeof l == "string" ? l : "both",
        initialPromotionConfig: i,
        crossfade: d,
        layoutScroll: o,
        layoutRoot: r,
        layoutAnchor: c
    })
}
function Tv(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Tv(t.parent)
}
function Oo(t, {forwardMotionProps: e=!1, type: n}={}, i, a) {
    i && SA(i);
    const l = n ? n === "svg" : Bf(t)
      , s = l ? _A : UA;
    function u(r, c) {
        let d;
        const f = {
            ...E.useContext(Nu),
            ...r,
            layoutId: GA(r)
        }
          , {isStatic: h} = f
          , v = DA(r)
          , b = s(r, h);
        if (!h && typeof window < "u") {
            qA();
            const S = XA(f);
            d = S.MeasureLayout,
            v.visualElement = HA(t, b, f, a, S.ProjectionNode, l)
        }
        return g.jsxs(Ru.Provider, {
            value: v,
            children: [d && v.visualElement ? g.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, NA(t, r, LA(b, v.visualElement, c), b, h, e, l)]
        })
    }
    u.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const o = E.forwardRef(u);
    return o[BA] = t,
    o
}
function GA({layoutId: t}) {
    const e = E.useContext(sf).id;
    return e && t !== void 0 ? e + "-" + t : t
}
function qA(t, e) {
    E.useContext(pv).strict
}
function XA(t) {
    const e = yv()
      , {drag: n, layout: i} = e;
    if (!n && !i)
        return {};
    const a = {
        ...n,
        ...i
    };
    return {
        MeasureLayout: n != null && n.isEnabled(t) || i != null && i.isEnabled(t) ? a.MeasureLayout : void 0,
        ProjectionNode: a.ProjectionNode
    }
}
function QA(t, e) {
    if (typeof Proxy > "u")
        return Oo;
    const n = new Map
      , i = (l, s) => Oo(l, s, t, e)
      , a = (l, s) => i(l, s);
    return new Proxy(a,{
        get: (l, s) => s === "create" ? i : (n.has(s) || n.set(s, Oo(s, void 0, t, e)),
        n.get(s))
    })
}
const ZA = (t, e) => e.isSVG ?? Bf(t) ? new bT(e) : new mT(e,{
    allowProjection: t !== E.Fragment
});
class KA extends Bn {
    constructor(e) {
        super(e),
        e.animationState || (e.animationState = MT(e))
    }
    updateAnimationControlsSubscription() {
        const {animate: e} = this.node.getProps();
        Ou(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: e} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var e;
        this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this)
    }
}
let kA = 0;
class JA extends Bn {
    constructor() {
        super(...arguments),
        this.id = kA++,
        this.isExitComplete = !1
    }
    update() {
        var l;
        if (!this.node.presenceContext)
            return;
        const {isPresent: e, onExitComplete: n} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === i)
            return;
        if (e && i === !1) {
            if (this.isExitComplete) {
                const {initial: s, custom: u} = this.node.getProps();
                if (typeof s == "string") {
                    const o = ni(this.node, s, u);
                    if (o) {
                        const {transition: r, transitionEnd: c, ...d} = o;
                        for (const f in d)
                            (l = this.node.getValue(f)) == null || l.jump(d[f])
                    }
                }
                this.node.animationState.reset(),
                this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const a = this.node.animationState.setActive("exit", !e);
        n && !e && a.then( () => {
            this.isExitComplete = !0,
            n(this.id)
        }
        )
    }
    mount() {
        const {register: e, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const FA = {
    animation: {
        Feature: KA
    },
    exit: {
        Feature: JA
    }
};
function wl(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const WA = t => e => zf(e) && t(e, wl(e));
function ka(t, e, n, i) {
    return fl(t, e, WA(n), i)
}
const Av = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , vm = (t, e) => Math.abs(t - e);
function PA(t, e) {
    const n = vm(t.x, e.x)
      , i = vm(t.y, e.y);
    return Math.sqrt(n ** 2 + i ** 2)
}
const xm = new Set(["auto", "scroll"]);
class Ev {
    constructor(e, n, {transformPagePoint: i, contextWindow: a=window, dragSnapToOrigin: l=!1, distanceThreshold: s=3, element: u}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.lastRawMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = h => {
            this.handleScroll(h.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Jl(this.lastRawMoveEventInfo, this.transformPagePoint));
            const h = jo(this.lastMoveEventInfo, this.history)
              , v = this.startEvent !== null
              , b = PA(h.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!v && !b)
                return;
            const {point: S} = h
              , {timestamp: p} = At;
            this.history.push({
                ...S,
                timestamp: p
            });
            const {onStart: m, onMove: y} = this.handlers;
            v || (m && m(this.lastMoveEvent, h),
            this.startEvent = this.lastMoveEvent),
            y && y(this.lastMoveEvent, h)
        }
        ,
        this.handlePointerMove = (h, v) => {
            this.lastMoveEvent = h,
            this.lastRawMoveEventInfo = v,
            this.lastMoveEventInfo = Jl(v, this.transformPagePoint),
            Q.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (h, v) => {
            this.end();
            const {onEnd: b, onSessionEnd: S, resumeAnimation: p} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = jo(h.type === "pointercancel" ? this.lastMoveEventInfo : Jl(v, this.transformPagePoint), this.history);
            this.startEvent && b && b(h, m),
            S && S(h, m)
        }
        ,
        !zf(e))
            return;
        this.dragSnapToOrigin = l,
        this.handlers = n,
        this.transformPagePoint = i,
        this.distanceThreshold = s,
        this.contextWindow = a || window;
        const o = wl(e)
          , r = Jl(o, this.transformPagePoint)
          , {point: c} = r
          , {timestamp: d} = At;
        this.history = [{
            ...c,
            timestamp: d
        }];
        const {onSessionStart: f} = n;
        f && f(e, jo(r, this.history)),
        this.removeListeners = El(ka(this.contextWindow, "pointermove", this.handlePointerMove), ka(this.contextWindow, "pointerup", this.handlePointerUp), ka(this.contextWindow, "pointercancel", this.handlePointerUp)),
        u && this.startScrollTracking(u)
    }
    startScrollTracking(e) {
        let n = e.parentElement;
        for (; n; ) {
            const i = getComputedStyle(n);
            (xm.has(i.overflowX) || xm.has(i.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(e) {
        const n = this.scrollPositions.get(e);
        if (!n)
            return;
        const i = e === window
          , a = i ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
          , l = {
            x: a.x - n.x,
            y: a.y - n.y
        };
        l.x === 0 && l.y === 0 || (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += l.x,
        this.lastMoveEventInfo.point.y += l.y) : this.history.length > 0 && (this.history[0].x -= l.x,
        this.history[0].y -= l.y),
        this.scrollPositions.set(e, a),
        Q.update(this.updatePoint, !0))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        ge(this.updatePoint)
    }
}
function Jl(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function bm(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function jo({point: t}, e) {
    return {
        point: t,
        delta: bm(t, Mv(e)),
        offset: bm(t, $A(e)),
        velocity: IA(e, .1)
    }
}
function $A(t) {
    return t[0]
}
function Mv(t) {
    return t[t.length - 1]
}
function IA(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , i = null;
    const a = Mv(t);
    for (; n >= 0 && (i = t[n],
    !(a.timestamp - i.timestamp > ee(e))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    i === t[0] && t.length > 2 && a.timestamp - i.timestamp > ee(e) * 2 && (i = t[1]);
    const l = he(a.timestamp - i.timestamp);
    if (l === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (a.x - i.x) / l,
        y: (a.y - i.y) / l
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function tE(t, {min: e, max: n}, i) {
    return e !== void 0 && t < e ? t = i ? at(e, t, i.min) : Math.max(t, e) : n !== void 0 && t > n && (t = i ? at(n, t, i.max) : Math.min(t, n)),
    t
}
function Sm(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}
function eE(t, {top: e, left: n, bottom: i, right: a}) {
    return {
        x: Sm(t.x, n, a),
        y: Sm(t.y, e, i)
    }
}
function Tm(t, e) {
    let n = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
function nE(t, e) {
    return {
        x: Tm(t.x, e.x),
        y: Tm(t.y, e.y)
    }
}
function iE(t, e) {
    let n = .5;
    const i = _t(t)
      , a = _t(e);
    return a > i ? n = ta(e.min, e.max - i, t.min) : i > a && (n = ta(t.min, t.max - a, e.min)),
    De(0, 1, n)
}
function aE(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min),
    e.max !== void 0 && (n.max = e.max - t.min),
    n
}
const ec = .35;
function lE(t=ec) {
    return t === !1 ? t = 0 : t === !0 && (t = ec),
    {
        x: Am(t, "left", "right"),
        y: Am(t, "top", "bottom")
    }
}
function Am(t, e, n) {
    return {
        min: Em(t, e),
        max: Em(t, n)
    }
}
function Em(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const sE = new WeakMap;
class uE {
    constructor(e) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = vt(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = e
    }
    start(e, {snapToCursor: n=!1, distanceThreshold: i}={}) {
        const {presenceContext: a} = this.visualElement;
        if (a && a.isPresent === !1)
            return;
        const l = d => {
            n && this.snapToCursor(wl(d).point),
            this.stopAnimation()
        }
          , s = (d, f) => {
            const {drag: h, dragPropagation: v, onDragStart: b} = this.getProps();
            if (h && !v && (this.openDragLock && this.openDragLock(),
            this.openDragLock = R2(h),
            !this.openDragLock))
                return;
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ce(p => {
                let m = this.getAxisMotionValue(p).get() || 0;
                if (Ve.test(m)) {
                    const {projection: y} = this.visualElement;
                    if (y && y.layout) {
                        const x = y.layout.layoutBox[p];
                        x && (m = _t(x) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[p] = m
            }
            ),
            b && Q.update( () => b(d, f), !1, !0),
            Kr(this.visualElement, "transform");
            const {animationState: S} = this.visualElement;
            S && S.setActive("whileDrag", !0)
        }
          , u = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f;
            const {dragPropagation: h, dragDirectionLock: v, onDirectionLock: b, onDrag: S} = this.getProps();
            if (!h && !this.openDragLock)
                return;
            const {offset: p} = f;
            if (v && this.currentDirection === null) {
                this.currentDirection = rE(p),
                this.currentDirection !== null && b && b(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, p),
            this.updateAxis("y", f.point, p),
            this.visualElement.render(),
            S && Q.update( () => S(d, f), !1, !0)
        }
          , o = (d, f) => {
            this.latestPointerEvent = d,
            this.latestPanInfo = f,
            this.stop(d, f),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , r = () => {
            const {dragSnapToOrigin: d} = this.getProps();
            (d || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new Ev(e,{
            onSessionStart: l,
            onStart: s,
            onMove: u,
            onSessionEnd: o,
            resumeAnimation: r
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: i,
            contextWindow: Av(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(e, n) {
        const i = e || this.latestPointerEvent
          , a = n || this.latestPanInfo
          , l = this.isDragging;
        if (this.cancel(),
        !l || !a || !i)
            return;
        const {velocity: s} = a;
        this.startAnimation(s);
        const {onDragEnd: u} = this.getProps();
        u && Q.postRender( () => u(i, a))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: e, animationState: n} = this.visualElement;
        e && (e.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: i} = this.getProps();
        !i && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(e, n, i) {
        const {drag: a} = this.getProps();
        if (!i || !Fl(e, a, this.currentDirection))
            return;
        const l = this.getAxisMotionValue(e);
        let s = this.originPoint[e] + i[e];
        this.constraints && this.constraints[e] && (s = tE(s, this.constraints[e], this.elastic[e])),
        l.set(s)
    }
    resolveConstraints() {
        var l;
        const {dragConstraints: e, dragElastic: n} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (l = this.visualElement.projection) == null ? void 0 : l.layout
          , a = this.constraints;
        e && bi(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = eE(i.layoutBox, e) : this.constraints = !1,
        this.elastic = lE(n),
        a !== this.constraints && !bi(e) && i && this.constraints && !this.hasMutatedConstraints && Ce(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = aE(i.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
        if (!e || !bi(e))
            return !1;
        const i = e.current
          , {projection: a} = this.visualElement;
        if (!a || !a.layout)
            return !1;
        const l = oT(i, a.root, this.visualElement.getTransformPagePoint());
        let s = nE(a.layout.layoutBox, l);
        if (n) {
            const u = n(lT(s));
            this.hasMutatedConstraints = !!u,
            u && (s = Kg(u))
        }
        return s
    }
    startAnimation(e) {
        const {drag: n, dragMomentum: i, dragElastic: a, dragTransition: l, dragSnapToOrigin: s, onDragTransitionEnd: u} = this.getProps()
          , o = this.constraints || {}
          , r = Ce(c => {
            if (!Fl(c, n, this.currentDirection))
                return;
            let d = o && o[c] || {};
            (s === !0 || s === c) && (d = {
                min: 0,
                max: 0
            });
            const f = a ? 200 : 1e6
              , h = a ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: i ? e[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...l,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(r).then(u)
    }
    startAxisValueAnimation(e, n) {
        const i = this.getAxisMotionValue(e);
        return Kr(this.visualElement, e),
        i.start(Af(e, i, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Ce(e => this.getAxisMotionValue(e).stop())
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`
          , i = this.visualElement.getProps()
          , a = i[n];
        return a || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        Ce(n => {
            const {drag: i} = this.getProps();
            if (!Fl(n, i, this.currentDirection))
                return;
            const {projection: a} = this.visualElement
              , l = this.getAxisMotionValue(n);
            if (a && a.layout) {
                const {min: s, max: u} = a.layout.layoutBox[n]
                  , o = l.get() || 0;
                l.set(e[n] - at(s, u, .5) + o)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: e, dragConstraints: n} = this.getProps()
          , {projection: i} = this.visualElement;
        if (!bi(n) || !i || !this.constraints)
            return;
        this.stopAnimation();
        const a = {
            x: 0,
            y: 0
        };
        Ce(s => {
            const u = this.getAxisMotionValue(s);
            if (u && this.constraints !== !1) {
                const o = u.get();
                a[s] = iE({
                    min: o,
                    max: o
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: l} = this.visualElement.getProps();
        this.visualElement.current.style.transform = l ? l({}, "") : "none",
        i.root && i.root.updateScroll(),
        i.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        Ce(s => {
            if (!Fl(s, e, null))
                return;
            const u = this.getAxisMotionValue(s)
              , {min: o, max: r} = this.constraints[s];
            u.set(at(o, r, a[s]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        sE.set(this.visualElement, this);
        const e = this.visualElement.current
          , n = ka(e, "pointerdown", r => {
            const {drag: c, dragListener: d=!0} = this.getProps()
              , f = r.target
              , h = f !== e && H2(f);
            c && d && !h && this.start(r)
        }
        );
        let i;
        const a = () => {
            const {dragConstraints: r} = this.getProps();
            bi(r) && r.current && (this.constraints = this.resolveRefConstraints(),
            i || (i = oE(e, r.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: l} = this.visualElement
          , s = l.addEventListener("measure", a);
        l && !l.layout && (l.root && l.root.updateScroll(),
        l.updateLayout()),
        Q.read(a);
        const u = fl(window, "resize", () => this.scalePositionWithinConstraints())
          , o = l.addEventListener("didUpdate", ({delta: r, hasLayoutChanged: c}) => {
            this.isDragging && c && (Ce(d => {
                const f = this.getAxisMotionValue(d);
                f && (this.originPoint[d] += r[d].translate,
                f.set(f.get() + r[d].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            u(),
            n(),
            s(),
            o && o(),
            i && i()
        }
    }
    getProps() {
        const e = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: i=!1, dragPropagation: a=!1, dragConstraints: l=!1, dragElastic: s=ec, dragMomentum: u=!0} = e;
        return {
            ...e,
            drag: n,
            dragDirectionLock: i,
            dragPropagation: a,
            dragConstraints: l,
            dragElastic: s,
            dragMomentum: u
        }
    }
}
function Mm(t) {
    let e = !0;
    return () => {
        if (e) {
            e = !1;
            return
        }
        t()
    }
}
function oE(t, e, n) {
    const i = Wr(t, Mm(n))
      , a = Wr(e, Mm(n));
    return () => {
        i(),
        a()
    }
}
function Fl(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}
function rE(t, e=10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
    n
}
class cE extends Bn {
    constructor(e) {
        super(e),
        this.removeGroupControls = Xt,
        this.removeListeners = Xt,
        this.controls = new uE(e)
    }
    mount() {
        const {dragControls: e} = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Xt
    }
    update() {
        const {dragControls: e} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        e !== n && (this.removeGroupControls(),
        e && (this.removeGroupControls = e.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const No = t => (e, n) => {
    t && Q.update( () => t(e, n), !1, !0)
}
;
class fE extends Bn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Xt
    }
    onPointerDown(e) {
        this.session = new Ev(e,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Av(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: e, onPanStart: n, onPan: i, onPanEnd: a} = this.node.getProps();
        return {
            onSessionStart: No(e),
            onStart: No(n),
            onMove: No(i),
            onEnd: (l, s) => {
                delete this.session,
                a && Q.postRender( () => a(l, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = ka(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Ro = !1;
class dE extends E.Component {
    componentDidMount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i, layoutId: a} = this.props
          , {projection: l} = e;
        l && (n.group && n.group.add(l),
        i && i.register && a && i.register(l),
        Ro && l.root.didUpdate(),
        l.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        l.setOptions({
            ...l.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        Ss.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {layoutDependency: n, visualElement: i, drag: a, isPresent: l} = this.props
          , {projection: s} = i;
        return s && (s.isPresent = l,
        e.layoutDependency !== n && s.setOptions({
            ...s.options,
            layoutDependency: n
        }),
        Ro = !0,
        a || e.layoutDependency !== n || n === void 0 || e.isPresent !== l ? s.willUpdate() : this.safeToRemove(),
        e.isPresent !== l && (l ? s.promote() : s.relegate() || Q.postRender( () => {
            const u = s.getStack();
            (!u || !u.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {visualElement: e, layoutAnchor: n} = this.props
          , {projection: i} = e;
        i && (i.options.layoutAnchor = n,
        i.root.didUpdate(),
        Cf.postRender( () => {
            !i.currentAnimation && i.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: e, layoutGroup: n, switchLayoutGroup: i} = this.props
          , {projection: a} = e;
        Ro = !0,
        a && (a.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(a),
        i && i.deregister && i.deregister(a))
    }
    safeToRemove() {
        const {safeToRemove: e} = this.props;
        e && e()
    }
    render() {
        return null
    }
}
function Dv(t) {
    const [e,n] = mv()
      , i = E.useContext(sf);
    return g.jsx(dE, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: E.useContext(Sv),
        isPresent: e,
        safeToRemove: n
    })
}
const hE = {
    pan: {
        Feature: fE
    },
    drag: {
        Feature: cE,
        ProjectionNode: hv,
        MeasureLayout: Dv
    }
};
function Dm(t, e, n) {
    const {props: i} = t;
    t.animationState && i.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const a = "onHover" + n
      , l = i[a];
    l && Q.postRender( () => l(e, wl(e)))
}
class mE extends Bn {
    mount() {
        const {current: e} = this.node;
        e && (this.unmount = U2(e, (n, i) => (Dm(this.node, i, "Start"),
        a => Dm(this.node, a, "End"))))
    }
    unmount() {}
}
class pE extends Bn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }
        !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = El(fl(this.node.current, "focus", () => this.onFocus()), fl(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function wm(t, e, n) {
    const {props: i} = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled)
        return;
    t.animationState && i.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const a = "onTap" + (n === "End" ? "" : n)
      , l = i[a];
    l && Q.postRender( () => l(e, wl(e)))
}
class yE extends Bn {
    mount() {
        const {current: e} = this.node;
        if (!e)
            return;
        const {globalTapTarget: n, propagate: i} = this.node.props;
        this.unmount = G2(e, (a, l) => (wm(this.node, l, "Start"),
        (s, {success: u}) => wm(this.node, s, u ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (i == null ? void 0 : i.tap) === !1
        })
    }
    unmount() {}
}
const nc = new WeakMap
  , Vo = new WeakMap
  , gE = t => {
    const e = nc.get(t.target);
    e && e(t)
}
  , vE = t => {
    t.forEach(gE)
}
;
function xE({root: t, ...e}) {
    const n = t || document;
    Vo.has(n) || Vo.set(n, {});
    const i = Vo.get(n)
      , a = JSON.stringify(e);
    return i[a] || (i[a] = new IntersectionObserver(vE,{
        root: t,
        ...e
    })),
    i[a]
}
function bE(t, e, n) {
    const i = xE(e);
    return nc.set(t, n),
    i.observe(t),
    () => {
        nc.delete(t),
        i.unobserve(t)
    }
}
const SE = {
    some: 0,
    all: 1
};
class TE extends Bn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        var o;
        (o = this.stopObserver) == null || o.call(this);
        const {viewport: e={}} = this.node.getProps()
          , {root: n, margin: i, amount: a="some", once: l} = e
          , s = {
            root: n ? n.current : void 0,
            rootMargin: i,
            threshold: typeof a == "number" ? a : SE[a]
        }
          , u = r => {
            const {isIntersecting: c} = r;
            if (this.isInView === c || (this.isInView = c,
            l && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: d, onViewportLeave: f} = this.node.getProps()
              , h = c ? d : f;
            h && h(r)
        }
        ;
        this.stopObserver = bE(this.node.current, s, u)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: e, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(AE(e, n)) && this.startObserver()
    }
    unmount() {
        var e;
        (e = this.stopObserver) == null || e.call(this),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
}
function AE({viewport: t={}}, {viewport: e={}}={}) {
    return n => t[n] !== e[n]
}
const EE = {
    inView: {
        Feature: TE
    },
    tap: {
        Feature: yE
    },
    focus: {
        Feature: pE
    },
    hover: {
        Feature: mE
    }
}
  , ME = {
    layout: {
        ProjectionNode: hv,
        MeasureLayout: Dv
    }
}
  , DE = {
    ...FA,
    ...EE,
    ...hE,
    ...ME
}
  , k = QA(DE, ZA);
function wE(t, e, n) {
    E.useInsertionEffect( () => t.on(e, n), [t, e, n])
}
function uu(t) {
    return typeof window > "u" ? !1 : t ? vg() : Sf()
}
const CE = 50
  , Cm = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , zE = () => ({
    time: 0,
    x: Cm(),
    y: Cm()
})
  , OE = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function zm(t, e, n, i) {
    const a = n[e]
      , {length: l, position: s} = OE[e]
      , u = a.current
      , o = n.time;
    a.current = Math.abs(t[`scroll${s}`]),
    a.scrollLength = t[`scroll${l}`] - t[`client${l}`],
    a.offset.length = 0,
    a.offset[0] = 0,
    a.offset[1] = a.scrollLength,
    a.progress = ta(0, a.scrollLength, a.current);
    const r = i - o;
    a.velocity = r > CE ? 0 : rf(a.current - u, r)
}
function jE(t, e, n) {
    zm(t, "x", e, n),
    zm(t, "y", e, n),
    e.time = n
}
function NE(t, e) {
    const n = {
        x: 0,
        y: 0
    };
    let i = t;
    for (; i && i !== e; )
        if (Za(i))
            n.x += i.offsetLeft,
            n.y += i.offsetTop,
            i = i.offsetParent;
        else if (i.tagName === "svg") {
            const a = i.getBoundingClientRect();
            i = i.parentElement;
            const l = i.getBoundingClientRect();
            n.x += a.left - l.left,
            n.y += a.top - l.top
        } else if (i instanceof SVGGraphicsElement) {
            const {x: a, y: l} = i.getBBox();
            n.x += a,
            n.y += l;
            let s = null
              , u = i.parentNode;
            for (; !s; )
                u.tagName === "svg" && (s = u),
                u = i.parentNode;
            i = s
        } else
            break;
    return n
}
const ic = {
    start: 0,
    center: .5,
    end: 1
};
function Om(t, e, n=0) {
    let i = 0;
    if (t in ic && (t = ic[t]),
    typeof t == "string") {
        const a = parseFloat(t);
        t.endsWith("px") ? i = a : t.endsWith("%") ? t = a / 100 : t.endsWith("vw") ? i = a / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? i = a / 100 * document.documentElement.clientHeight : t = a
    }
    return typeof t == "number" && (i = e * t),
    n + i
}
const RE = [0, 0];
function VE(t, e, n, i) {
    let a = Array.isArray(t) ? t : RE
      , l = 0
      , s = 0;
    return typeof t == "number" ? a = [t, t] : typeof t == "string" && (t = t.trim(),
    t.includes(" ") ? a = t.split(" ") : a = [t, ic[t] ? t : "0"]),
    l = Om(a[0], n, i),
    s = Om(a[1], e),
    l - s
}
const wa = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
}
  , UE = {
    x: 0,
    y: 0
};
function _E(t) {
    return "getBBox"in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}
function BE(t, e, n) {
    const {offset: i=wa.All} = n
      , {target: a=t, axis: l="y"} = n
      , s = l === "y" ? "height" : "width"
      , u = a !== t ? NE(a, t) : UE
      , o = a === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : _E(a)
      , r = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[l].offset.length = 0;
    let c = !e[l].interpolate;
    const d = i.length;
    for (let f = 0; f < d; f++) {
        const h = VE(i[f], r[s], o[s], u[l]);
        !c && h !== e[l].interpolatorOffsets[f] && (c = !0),
        e[l].offset[f] = h
    }
    c && (e[l].interpolate = gf(e[l].offset, hg(i), {
        clamp: !1
    }),
    e[l].interpolatorOffsets = [...e[l].offset]),
    e[l].progress = De(0, 1, e[l].interpolate(e[l].current))
}
function LE(t, e=t, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    e !== t) {
        let i = e;
        for (; i && i !== t; )
            n.x.targetOffset += i.offsetLeft,
            n.y.targetOffset += i.offsetTop,
            i = i.offsetParent
    }
    n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth,
    n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight,
    n.x.containerLength = t.clientWidth,
    n.y.containerLength = t.clientHeight
}
function HE(t, e, n, i={}) {
    return {
        measure: a => {
            LE(t, i.target, n),
            jE(t, n, a),
            (i.offset || i.target) && BE(t, n, i)
        }
        ,
        notify: () => e(n)
    }
}
const yi = new WeakMap
  , jm = new WeakMap
  , Uo = new WeakMap
  , Nm = new WeakMap
  , Wl = new WeakMap
  , Rm = t => t === document.scrollingElement ? window : t;
function wv(t, {container: e=document.scrollingElement, trackContentSize: n=!1, ...i}={}) {
    if (!e)
        return Xt;
    let a = Uo.get(e);
    a || (a = new Set,
    Uo.set(e, a));
    const l = zE()
      , s = HE(e, t, l, i);
    if (a.add(s),
    !yi.has(e)) {
        const o = () => {
            for (const f of a)
                f.measure(At.timestamp);
            Q.preUpdate(r)
        }
          , r = () => {
            for (const f of a)
                f.notify()
        }
          , c = () => Q.read(o);
        yi.set(e, c);
        const d = Rm(e);
        window.addEventListener("resize", c),
        e !== document.documentElement && jm.set(e, Wr(e, c)),
        d.addEventListener("scroll", c),
        c()
    }
    if (n && !Wl.has(e)) {
        const o = yi.get(e)
          , r = {
            width: e.scrollWidth,
            height: e.scrollHeight
        };
        Nm.set(e, r);
        const c = () => {
            const f = e.scrollWidth
              , h = e.scrollHeight;
            (r.width !== f || r.height !== h) && (o(),
            r.width = f,
            r.height = h)
        }
          , d = Q.read(c, !0);
        Wl.set(e, d)
    }
    const u = yi.get(e);
    return Q.read(u, !1, !0),
    () => {
        var d;
        ge(u);
        const o = Uo.get(e);
        if (!o || (o.delete(s),
        o.size))
            return;
        const r = yi.get(e);
        yi.delete(e),
        r && (Rm(e).removeEventListener("scroll", r),
        (d = jm.get(e)) == null || d(),
        window.removeEventListener("resize", r));
        const c = Wl.get(e);
        c && (ge(c),
        Wl.delete(e)),
        Nm.delete(e)
    }
}
const YE = [[wa.Enter, "entry"], [wa.Exit, "exit"], [wa.Any, "cover"], [wa.All, "contain"]]
  , Vm = {
    start: 0,
    end: 1
};
function GE(t) {
    const e = t.trim().split(/\s+/);
    if (e.length !== 2)
        return;
    const n = Vm[e[0]]
      , i = Vm[e[1]];
    if (!(n === void 0 || i === void 0))
        return [n, i]
}
function qE(t) {
    if (t.length !== 2)
        return;
    const e = [];
    for (const n of t)
        if (Array.isArray(n))
            e.push(n);
        else if (typeof n == "string") {
            const i = GE(n);
            if (!i)
                return;
            e.push(i)
        } else
            return;
    return e
}
function XE(t, e) {
    const n = qE(t);
    if (!n)
        return !1;
    for (let i = 0; i < 2; i++) {
        const a = n[i]
          , l = e[i];
        if (a[0] !== l[0] || a[1] !== l[1])
            return !1
    }
    return !0
}
function Lf(t) {
    if (!t)
        return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
    for (const [e,n] of YE)
        if (XE(t, e))
            return {
                rangeStart: `${n} 0%`,
                rangeEnd: `${n} 100%`
            }
}
const Um = new Map;
function _m(t) {
    const e = {
        value: 0
    }
      , n = wv(i => {
        e.value = i[t.axis].progress * 100
    }
    , t);
    return {
        currentTime: e,
        cancel: n
    }
}
function Cv({source: t, container: e, ...n}) {
    const {axis: i} = n;
    t && (e = t);
    let a = Um.get(e);
    a || (a = new Map,
    Um.set(e, a));
    const l = n.target ?? "self";
    let s = a.get(l);
    s || (s = {},
    a.set(l, s));
    const u = i + (n.offset ?? []).join(",");
    return s[u] || (n.target && uu(n.target) ? Lf(n.offset) ? s[u] = new ViewTimeline({
        subject: n.target,
        axis: i
    }) : s[u] = _m({
        container: e,
        ...n
    }) : uu() ? s[u] = new ScrollTimeline({
        source: e,
        axis: i
    }) : s[u] = _m({
        container: e,
        ...n
    })),
    s[u]
}
function QE(t, e) {
    const n = Cv(e)
      , i = e.target ? Lf(e.offset) : void 0
      , a = e.target ? uu(e.target) && !!i : uu();
    return t.attachTimeline({
        timeline: a ? n : void 0,
        ...i && a && {
            rangeStart: i.rangeStart,
            rangeEnd: i.rangeEnd
        },
        observe: l => (l.pause(),
        Gg(s => {
            l.time = l.iterationDuration * s
        }
        , n))
    })
}
function ZE(t) {
    return t.length === 2
}
function KE(t, e) {
    return ZE(t) ? wv(n => {
        t(n[e.axis].progress, n)
    }
    , e) : Gg(t, Cv(e))
}
function zv(t, {axis: e="y", container: n=document.scrollingElement, ...i}={}) {
    if (!n)
        return Xt;
    const a = {
        axis: e,
        container: n,
        ...i
    };
    return typeof t == "function" ? KE(t, a) : QE(t, a)
}
const kE = () => ({
    scrollX: Ee(0),
    scrollY: Ee(0),
    scrollXProgress: Ee(0),
    scrollYProgress: Ee(0)
})
  , Pl = t => t ? !t.current : !1;
function Bm(t, e, n, i) {
    return {
        factory: a => zv(a, {
            ...e,
            axis: t,
            container: (n == null ? void 0 : n.current) || void 0,
            target: (i == null ? void 0 : i.current) || void 0
        }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: a => a,
        duration: 1
    }
}
function JE(t, e) {
    return typeof window > "u" ? !1 : t ? vg() && !!Lf(e) : Sf()
}
function Ov({container: t, target: e, ...n}={}) {
    const i = Rn(kE);
    JE(e, n.offset) && (i.scrollXProgress.accelerate = Bm("x", n, t, e),
    i.scrollYProgress.accelerate = Bm("y", n, t, e));
    const a = E.useRef(null)
      , l = E.useRef(!1)
      , s = E.useCallback( () => (a.current = zv( (u, {x: o, y: r}) => {
        i.scrollX.set(o.current),
        i.scrollXProgress.set(o.progress),
        i.scrollY.set(r.current),
        i.scrollYProgress.set(r.progress)
    }
    , {
        ...n,
        container: (t == null ? void 0 : t.current) || void 0,
        target: (e == null ? void 0 : e.current) || void 0
    }),
    () => {
        var u;
        (u = a.current) == null || u.call(a)
    }
    ), [t, e, JSON.stringify(n.offset)]);
    return wu( () => {
        if (l.current = !1,
        Pl(t) || Pl(e)) {
            l.current = !0;
            return
        } else
            return s()
    }
    , [s]),
    E.useEffect( () => {
        if (l.current)
            return ol(!Pl(t)),
            ol(!Pl(e)),
            s()
    }
    , [s]),
    i
}
function FE(t) {
    const e = Rn( () => Ee(t))
      , {isStatic: n} = E.useContext(Nu);
    if (n) {
        const [,i] = E.useState(t);
        E.useEffect( () => e.on("change", i), [])
    }
    return e
}
function jv(t, e) {
    const n = FE(e())
      , i = () => n.set(e());
    return i(),
    wu( () => {
        const a = () => Q.preRender(i, !1, !0)
          , l = t.map(s => s.on("change", a));
        return () => {
            l.forEach(s => s()),
            ge(i)
        }
    }
    ),
    n
}
function WE(t) {
    Qa.current = [],
    t();
    const e = jv(Qa.current, t);
    return Qa.current = void 0,
    e
}
function Tt(t, e, n, i) {
    if (typeof t == "function")
        return WE(t);
    if (n !== void 0 && !Array.isArray(n) && typeof e != "function")
        return PE(t, e, n, i);
    const s = typeof e == "function" ? e : P2(e, n, i)
      , u = Array.isArray(t) ? Lm(t, s) : Lm([t], ([r]) => s(r))
      , o = Array.isArray(t) ? void 0 : t.accelerate;
    return o && !o.isTransformed && typeof e != "function" && Array.isArray(n) && (i == null ? void 0 : i.clamp) !== !1 && (u.accelerate = {
        ...o,
        times: e,
        keyframes: n,
        isTransformed: !0
    }),
    u
}
function Lm(t, e) {
    const n = Rn( () => []);
    return jv(t, () => {
        n.length = 0;
        const i = t.length;
        for (let a = 0; a < i; a++)
            n[a] = t[a].get();
        return e(n)
    }
    )
}
function PE(t, e, n, i) {
    const a = Rn( () => Object.keys(n))
      , l = Rn( () => ({}));
    for (const s of a)
        l[s] = Tt(t, e, n[s], i);
    return l
}
function Nv() {
    !Rf.current && Xg();
    const [t] = E.useState(nu.current);
    return t
}
const $E = {
    some: 0,
    all: 1
};
function IE(t, e, {root: n, margin: i, amount: a="some"}={}) {
    const l = wf(t)
      , s = new WeakMap
      , u = r => {
        r.forEach(c => {
            const d = s.get(c.target);
            if (c.isIntersecting !== !!d)
                if (c.isIntersecting) {
                    const f = e(c.target, c);
                    typeof f == "function" ? s.set(c.target, f) : o.unobserve(c.target)
                } else
                    typeof d == "function" && (d(c),
                    s.delete(c.target))
        }
        )
    }
      , o = new IntersectionObserver(u,{
        root: n,
        rootMargin: i,
        threshold: typeof a == "number" ? a : $E[a]
    });
    return l.forEach(r => o.observe(r)),
    () => o.disconnect()
}
function tM(t, {root: e, margin: n, amount: i, once: a=!1, initial: l=!1}={}) {
    const [s,u] = E.useState(l);
    return E.useEffect( () => {
        if (!t.current || a && s)
            return;
        const o = () => (u(!0),
        a ? void 0 : () => u(!1))
          , r = {
            root: e && e.current || void 0,
            margin: n,
            amount: i
        };
        return IE(t.current, o, r)
    }
    , [e, t, n, a, i]),
    s
}
const St = t => `/wedding-invite/${t.replace(/^\/+/, "")}`
  , R = {
    couple: {
        bride: "Nivedha",
        groom: "Divakar",
        monogramLogo: St("nd-logo-envelope.png")
    },
    wedding: {
        targetISO: "2026-06-25T08:30:00",
        reception: {
            dateISO: "2026-06-24T18:00:00",
            dateDisplay: "24 June 2026",
            timeDisplay: "6:00 PM onwards",
            label: "Reception"
        },
        muhurtham: {
            dateDisplay: "25 June 2026",
            timeDisplay: "8:00 AM – 9:00 AM",
            label: "Muhurtham"
        }
    },
    envelope: {
        sealColor: "#c2410c",
        sealLogo: St("logo-seal.png"),
        animations: {
            initialFadeInDuration: 1.1,
            sealClickToFadeOutDelay: 950,
            flapOpeningDuration: 1.35,
            fadeOutDuration: 1.15,
            hoverLiftDistance: 8,
            containerScaleOnOpen: 1.015,
            containerScaleDuration: 1.3
        }
    },
    audio: {
        backgroundMusic: St("mangalyam-tantunanena-lyrical-just-married-sanjith-hegde-c-r-bobby-b-aj_DHDXVlxD.mp3"),
        volume: .16,
        fadeInDuration: 2600
    },
    hero: {
        image: St("temple-background.png"),
        tagline: "We're getting married"
    },
    invitation: {
        backgroundImage: St("bg-rose-kolam.png")
    },
    scrollStory: {
        brideApproach: St("bride-1left-cutout.png"),
        groomApproach: St("groom-1left-cutout.png"),
        garlandMoment: St("bride-groom-center-cutout.png"),
        finalMoment: St("bride-groom-center2-cutout.png"),
        celebrationSound: St("party-popper.wav")
    },
    venue: {
        name: "Sarasu Mahal",
        addressLine: "Avalpoondurai",
        city: "Erode",
        region: "Tamil Nadu",
        image: St("wedding-hall.png"),
        coordinates: {
            latitude: 11.23435,
            longitude: 77.72115
        },
        mapsLink: "https://www.google.com/maps/search/?api=1&query=11.23435,77.72115",
        mapsEmbedUrl: "https://maps.google.com/maps?q=11.23435,77.72115&hl=en&z=17&output=embed",
        description: "Join us at Sarasu Mahal in Avalpoondurai, Erode — a gracious setting for our reception and wedding celebrations with family and friends."
    },
    featuredSections: [{
        id: 1,
        title: "Reception",
        description: "An evening of warmth, music, and togetherness as we begin the celebrations with everyone we love.",
        image: St("reception.png"),
        imagePositionClass: "object-center"
    }, {
        id: 2,
        title: "Traditions",
        description: "Sacred rituals and blessings woven into every moment of our Tamil wedding.",
        image: St("traditions.png"),
        imagePositionClass: "object-center"
    }, {
        id: 3,
        title: "New beginnings",
        description: "Two families, one journey — we can’t wait to share this joy with you.",
        image: St("beginnings.png"),
        imagePositionClass: "object-top"
    }],
    eventSchedule: [{
        id: 1,
        time: "24 Jun · 5:00 – 6:00 PM",
        title: "Mappilai Alaipu",
        description: "Welcoming the groom and his family",
        image: St("mappilai-azhaipu.png")
    }, {
        id: 2,
        time: "24 Jun · 6:00 PM",
        title: "Reception",
        description: "6:00 PM onwards — dinner & celebrations",
        image: St("reception-logo.png"),
        calendarEventId: "reception"
    }, {
        id: 3,
        time: "25 Jun · 6:00 – 7:00 AM",
        title: "Kasi Yatrai",
        description: "A joyful traditional wedding ritual",
        image: St("kasi-yatra.png")
    }, {
        id: 4,
        time: "25 Jun · 8:00 – 9:00 AM",
        title: "Muhurtham",
        description: "Auspicious wedding ceremony",
        image: St("muhurtham.png"),
        calendarEventId: "muhurtham"
    }],
    calendarEvents: [{
        id: "reception",
        title: "Nivedha & Divakar Reception",
        startUtc: "20260624T123000Z",
        endUtc: "20260624T173000Z",
        description: "Reception celebration for Nivedha and Divakar. Dinner and celebrations from 6:00 PM onwards.",
        filename: "nivedha-divakar-reception.ics"
    }, {
        id: "muhurtham",
        title: "Nivedha & Divakar Muhurtham",
        startUtc: "20260625T023000Z",
        endUtc: "20260625T033000Z",
        description: "Auspicious wedding ceremony for Nivedha and Divakar.",
        filename: "nivedha-divakar-muhurtham.ics"
    }],
    translations: {
        welcome: "We joyfully invite you to celebrate our wedding. Your presence will make our day complete as we take our vows surrounded by family and friends.",
        countdown: "Countdown to muhurtham",
        countdownSubtitle: "25 June 2026 · 8:00 AM – 9:00 AM",
        getDirections: "Open in Google Maps",
        scrollText: "Scroll",
        mapHeading: "Venue location",
        withLove: "With love & blessings",
        copyright: 'Nivedha <span class="text-gold-600">&</span> Divakar'
    },
    rsvp: {
        heading: "RSVP",
        message: "Share your details and send your RSVP to us.",
        sheetSubmitUrl: "https://script.google.com/macros/s/AKfycbwWupcaMAKNImDOj50hss7DoletIX1gJ9Qa89Wc_ujIcfZPgtD79xRQ6arN_ybGwcX4pA/exec",
        sheetUrl: "https://docs.google.com/spreadsheets/d/1yGenXp3kIhv7U3bCkrqOc4EO-H2zXIlg0aMdqSbJd38/edit?usp=sharing",
        phoneDisplay: "8973983311",
        whatsappLink: "https://wa.me/918973983311?text=Hi%20Divakar%2C%20I%20would%20like%20to%20RSVP%20for%20the%20wedding."
    }
};
function eM() {
    const e = `kolam-ambient-${E.useId().replace(/:/g, "")}`;
    return g.jsxs("div", {
        className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        "aria-hidden": !0,
        children: [g.jsxs("svg", {
            className: "absolute left-1/2 top-0 h-full min-h-[100dvh] w-full min-w-full -translate-x-1/2 opacity-[0.055] text-amber-800",
            preserveAspectRatio: "xMidYMid slice",
            children: [g.jsx("defs", {
                children: g.jsxs("pattern", {
                    id: e,
                    x: "0",
                    y: "0",
                    width: "120",
                    height: "120",
                    patternUnits: "userSpaceOnUse",
                    children: [g.jsx("circle", {
                        cx: "12",
                        cy: "12",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "60",
                        cy: "12",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "108",
                        cy: "12",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "12",
                        cy: "60",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "60",
                        cy: "60",
                        r: "2.5",
                        className: "fill-gold-500/90"
                    }), g.jsx("circle", {
                        cx: "108",
                        cy: "60",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "12",
                        cy: "108",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "60",
                        cy: "108",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("circle", {
                        cx: "108",
                        cy: "108",
                        r: "2",
                        className: "fill-gold-600/80"
                    }), g.jsx("path", {
                        d: "M0 60 Q30 30 60 60 T120 60",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "0.9",
                        opacity: "0.65"
                    }), g.jsx("path", {
                        d: "M60 0 Q90 30 60 60 T60 120",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "0.75",
                        opacity: "0.5"
                    }), g.jsx("path", {
                        d: "M0 12 Q60 60 120 12",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                        opacity: "0.35"
                    })]
                })
            }), g.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${e})`
            })]
        }), g.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-cream-100/75 via-transparent to-cream-200/65"
        })]
    })
}
function qe({className: t=""}) {
    const n = `kolam-divider-${E.useId().replace(/:/g, "")}`;
    return g.jsxs("div", {
        className: `relative z-[1] flex h-14 w-full items-center justify-center py-2 ${t}`,
        role: "presentation",
        "aria-hidden": !0,
        children: [g.jsx("div", {
            className: "h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/35 to-transparent"
        }), g.jsxs("svg", {
            className: "mx-3 h-10 w-[min(100%,420px)] shrink text-gold-600/70 sm:mx-6",
            viewBox: "0 0 420 40",
            preserveAspectRatio: "xMidYMid meet",
            children: [g.jsx("defs", {
                children: g.jsxs("pattern", {
                    id: n,
                    x: "0",
                    y: "0",
                    width: "42",
                    height: "40",
                    patternUnits: "userSpaceOnUse",
                    children: [g.jsx("circle", {
                        cx: "8",
                        cy: "20",
                        r: "1.8",
                        className: "fill-gold-500/90"
                    }), g.jsx("circle", {
                        cx: "21",
                        cy: "20",
                        r: "1.8",
                        className: "fill-gold-500/90"
                    }), g.jsx("circle", {
                        cx: "34",
                        cy: "20",
                        r: "1.8",
                        className: "fill-gold-500/90"
                    }), g.jsx("path", {
                        d: "M0 20 Q10.5 10 21 20 T42 20",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        opacity: "0.75"
                    })]
                })
            }), g.jsx("rect", {
                x: "0",
                y: "8",
                width: "420",
                height: "24",
                fill: `url(#${n})`
            })]
        }), g.jsx("div", {
            className: "h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/35 to-transparent"
        })]
    })
}
function hn({className: t=""}) {
    const e = "currentColor"
      , n = "absolute h-7 w-7 text-gold-600/55 sm:h-8 sm:w-8";
    return g.jsxs("div", {
        className: `pointer-events-none absolute inset-0 overflow-visible rounded-[inherit] ${t}`,
        "aria-hidden": !0,
        children: [g.jsxs("svg", {
            className: `${n} left-0 top-0`,
            viewBox: "0 0 28 28",
            fill: "none",
            children: [g.jsx("path", {
                d: "M2 26V2h24",
                stroke: e,
                strokeWidth: "1.2"
            }), g.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "1.5",
                className: "fill-gold-500/85"
            }), g.jsx("path", {
                d: "M4 22 Q 10 12 16 8",
                stroke: e,
                strokeWidth: "0.85",
                fill: "none",
                opacity: "0.75"
            })]
        }), g.jsxs("svg", {
            className: `${n} right-0 top-0 scale-x-[-1]`,
            viewBox: "0 0 28 28",
            fill: "none",
            children: [g.jsx("path", {
                d: "M2 26V2h24",
                stroke: e,
                strokeWidth: "1.2"
            }), g.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "1.5",
                className: "fill-gold-500/85"
            }), g.jsx("path", {
                d: "M4 22 Q 10 12 16 8",
                stroke: e,
                strokeWidth: "0.85",
                fill: "none",
                opacity: "0.75"
            })]
        }), g.jsxs("svg", {
            className: `${n} bottom-0 left-0 scale-y-[-1]`,
            viewBox: "0 0 28 28",
            fill: "none",
            children: [g.jsx("path", {
                d: "M2 26V2h24",
                stroke: e,
                strokeWidth: "1.2"
            }), g.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "1.5",
                className: "fill-gold-500/85"
            }), g.jsx("path", {
                d: "M4 22 Q 10 12 16 8",
                stroke: e,
                strokeWidth: "0.85",
                fill: "none",
                opacity: "0.75"
            })]
        }), g.jsxs("svg", {
            className: `${n} bottom-0 right-0 scale-[-1]`,
            viewBox: "0 0 28 28",
            fill: "none",
            children: [g.jsx("path", {
                d: "M2 26V2h24",
                stroke: e,
                strokeWidth: "1.2"
            }), g.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "1.5",
                className: "fill-gold-500/85"
            }), g.jsx("path", {
                d: "M4 22 Q 10 12 16 8",
                stroke: e,
                strokeWidth: "0.85",
                fill: "none",
                opacity: "0.75"
            })]
        })]
    })
}
const Gn = R.envelope.animations;
function nM({open: t, opening: e, onSealClick: n, onExitComplete: i}) {
    return g.jsx(xA, {
        onExitComplete: i,
        children: t && g.jsxs(k.div, {
            className: "pointer-events-auto fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-cream-100 via-cream-200 to-cream-100 px-6",
            initial: {
                opacity: 0,
                y: 28
            },
            animate: {
                opacity: 1,
                y: e ? -48 : 0,
                scale: e ? Gn.containerScaleOnOpen : 1
            },
            exit: {
                opacity: 0,
                y: "-110vh",
                transition: {
                    duration: Gn.fadeOutDuration + .35,
                    ease: [.22, 1, .36, 1]
                }
            },
            transition: {
                opacity: {
                    duration: Gn.initialFadeInDuration,
                    ease: "easeOut"
                },
                y: {
                    duration: Gn.containerScaleDuration,
                    ease: [.22, 1, .36, 1]
                },
                scale: {
                    duration: Gn.containerScaleDuration,
                    ease: [.22, 1, .36, 1]
                }
            },
            children: [g.jsx(qe, {
                className: "!h-9 !py-0"
            }), g.jsxs("div", {
                className: "relative mb-8 max-w-md rounded-xl px-5 py-6 text-center ring-1 ring-gold-500/20",
                style: {
                    perspective: "1000px"
                },
                children: [g.jsx(hn, {
                    className: "opacity-50"
                }), g.jsxs("div", {
                    className: "relative z-[1]",
                    children: [g.jsx("p", {
                        className: "font-cormorant text-sm font-medium uppercase tracking-[0.35em] text-stone-600",
                        children: "You're Invited"
                    }), g.jsx("p", {
                        className: "mt-3 font-display text-2xl text-stone-800 md:text-3xl",
                        children: "To celebrate our special day"
                    }), g.jsx("img", {
                        src: R.couple.monogramLogo,
                        alt: "Nivedha and Divakar",
                        className: "mx-auto mt-6 h-24 w-auto object-contain md:h-36",
                        loading: "eager",
                        fetchPriority: "high",
                        decoding: "async"
                    })]
                })]
            }), g.jsx(qe, {
                className: "!h-9 !py-0"
            }), g.jsx("div", {
                className: "relative flex justify-center",
                style: {
                    perspective: "1200px"
                },
                children: g.jsxs("div", {
                    className: "relative h-[220px] w-[min(100vw-3rem,300px)]",
                    style: {
                        transformStyle: "preserve-3d"
                    },
                    children: [g.jsx("div", {
                        className: "absolute inset-x-0 bottom-0 top-[32%] rounded-b-2xl border-2 border-gold-300/80 bg-cream-50 shadow-2xl shadow-stone-900/10"
                    }), g.jsx(k.div, {
                        className: "absolute inset-x-6 bottom-4 top-[28%] rounded-lg border border-gold-300/40 bg-white/90 shadow-inner",
                        initial: {
                            y: 8,
                            opacity: .85
                        },
                        animate: {
                            y: e ? -18 : 8,
                            opacity: e ? 1 : .85
                        },
                        transition: {
                            duration: Gn.flapOpeningDuration,
                            ease: [.22, 1, .36, 1]
                        }
                    }), g.jsx(k.div, {
                        className: "absolute inset-x-0 top-0 z-10 h-[45%] origin-bottom rounded-t-2xl border-2 border-b-0 border-gold-300/80 bg-gradient-to-b from-cream-50 to-cream-200 shadow-md",
                        style: {
                            transformStyle: "preserve-3d",
                            transformOrigin: "50% 100%"
                        },
                        animate: {
                            rotateX: e ? -178 : 0
                        },
                        transition: {
                            duration: Gn.flapOpeningDuration,
                            ease: [.22, 1, .36, 1]
                        }
                    }), g.jsx(k.button, {
                        type: "button",
                        "aria-label": "Open invitation",
                        className: "absolute left-1/2 top-[36%] z-20 flex h-16 w-16 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-4 border-amber-100/90 shadow-lg outline-none ring-gold-400/30 focus-visible:ring-4",
                        style: {
                            backgroundColor: R.envelope.sealColor
                        },
                        whileHover: {
                            y: -8,
                            boxShadow: "0 12px 40px rgba(0,0,0,0.15)"
                        },
                        whileTap: {
                            scale: .96
                        },
                        animate: {
                            scale: e ? .85 : 1,
                            opacity: e ? 0 : 1
                        },
                        transition: {
                            duration: .8,
                            ease: [.22, 1, .36, 1]
                        },
                        onClick: n,
                        children: g.jsx("img", {
                            src: R.envelope.sealLogo,
                            alt: "",
                            className: "h-full w-full rounded-full object-contain"
                        })
                    })]
                })
            }), g.jsx("p", {
                className: "mt-10 font-sans text-sm text-stone-600/90",
                children: "Click the seal"
            })]
        })
    })
}
const iM = t => {
    switch (t) {
    case "left":
        return {
            hidden: {
                opacity: 0,
                x: -48
            },
            visible: {
                opacity: 1,
                x: 0
            }
        };
    case "right":
        return {
            hidden: {
                opacity: 0,
                x: 48
            },
            visible: {
                opacity: 1,
                x: 0
            }
        };
    case "down":
        return {
            hidden: {
                opacity: 0,
                y: -48 * .55
            },
            visible: {
                opacity: 1,
                y: 0
            }
        };
    case "scale":
        return {
            hidden: {
                opacity: 0,
                scale: .94
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        };
    case "up":
    default:
        return {
            hidden: {
                opacity: 0,
                y: 48
            },
            visible: {
                opacity: 1,
                y: 0
            }
        }
    }
}
  , aM = {
    hidden: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
    }
};
function Te({children: t, className: e, direction: n="up", delay: i=0, duration: a=.52, once: l=!0, amount: s=.18, ...u}) {
    const o = E.useRef(null)
      , r = Nv()
      , c = tM(o, {
        amount: s,
        margin: "0px 0px -10% 0px",
        once: l
    })
      , d = r ? aM : iM(n);
    return g.jsx(k.div, {
        ref: o,
        className: e,
        initial: "hidden",
        animate: c ? "visible" : "hidden",
        variants: d,
        transition: {
            duration: r ? 0 : a,
            delay: r ? 0 : i,
            ease: [.22, 1, .36, 1]
        },
        ...u,
        children: t
    })
}
function $l(t) {
    return t.toString().padStart(2, "0")
}
function lM() {
    const t = new Date(R.wedding.targetISO).getTime()
      , [e,n] = E.useState( () => Date.now());
    E.useEffect( () => {
        const r = window.setInterval( () => n(Date.now()), 1e3);
        return () => window.clearInterval(r)
    }
    , []);
    const i = Math.max(0, t - e)
      , a = Math.floor(i / (1e3 * 60 * 60 * 24))
      , l = Math.floor(i / (1e3 * 60 * 60) % 24)
      , s = Math.floor(i / (1e3 * 60) % 60)
      , u = Math.floor(i / 1e3 % 60)
      , o = [{
        label: "Days",
        value: $l(a)
    }, {
        label: "Hours",
        value: $l(l)
    }, {
        label: "Minutes",
        value: $l(s)
    }, {
        label: "Seconds",
        value: $l(u)
    }];
    return g.jsxs("div", {
        className: "relative overflow-hidden rounded-xl border-y border-gold-300/45 bg-cream-50/95 py-16 md:py-24",
        children: [g.jsx(hn, {
            className: "opacity-[0.35]"
        }), g.jsxs("div", {
            className: "relative z-[1] mx-auto max-w-4xl px-6 text-center",
            children: [g.jsxs(Te, {
                direction: "up",
                children: [g.jsx("p", {
                    className: "font-display text-3xl text-stone-800 md:text-4xl",
                    children: R.translations.countdown
                }), g.jsx("p", {
                    className: "mt-2 text-sm uppercase tracking-[0.25em] text-gold-600",
                    children: R.translations.countdownSubtitle
                })]
            }), g.jsx("div", {
                className: "mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6",
                children: o.map( (r, c) => g.jsx(Te, {
                    direction: "up",
                    delay: .06 * c,
                    children: g.jsxs(k.div, {
                        className: "relative overflow-hidden rounded-2xl border border-gold-300/50 bg-white/75 px-4 py-6 shadow-sm backdrop-blur-sm",
                        whileHover: {
                            y: -4,
                            boxShadow: "0 12px 28px rgba(0,0,0,0.06)"
                        },
                        transition: {
                            duration: .25
                        },
                        children: [g.jsx(hn, {
                            className: "opacity-40"
                        }), g.jsxs("div", {
                            className: "relative z-[1]",
                            children: [g.jsx("div", {
                                className: "font-display text-4xl tabular-nums text-stone-900 md:text-5xl",
                                children: r.value
                            }), g.jsx("div", {
                                className: "mt-2 text-xs font-medium uppercase tracking-widest text-stone-500",
                                children: r.label
                            })]
                        })]
                    })
                }, r.label))
            })]
        })]
    })
}
function sM() {
    const t = E.useRef(null)
      , {scrollYProgress: e} = Ov({
        target: t,
        offset: ["start start", "end start"]
    })
      , n = Tt(e, [0, 1], ["0%", "12%"])
      , i = Tt(e, [0, 1], ["0%", "5%"])
      , a = R.hero.image
      , {reception: l, muhurtham: s} = R.wedding;
    return g.jsxs("header", {
        ref: t,
        className: "relative flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] flex-col overflow-hidden",
        children: [g.jsx(k.div, {
            className: "absolute inset-0 z-0",
            style: {
                y: n
            },
            "aria-hidden": !0,
            children: g.jsx("img", {
                src: a,
                alt: "",
                className: "absolute left-1/2 top-1/2 h-[105%] min-h-full w-[105%] min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center",
                draggable: !1
            })
        }), g.jsx("div", {
            className: "absolute inset-0 z-[1] bg-gradient-to-b from-stone-950/60 via-stone-900/30 to-stone-950/72",
            "aria-hidden": !0
        }), g.jsx("div", {
            className: "absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_25%,transparent_0%,rgba(15,10,8,0.24)_70%)]",
            "aria-hidden": !0
        }), g.jsxs(k.div, {
            className: "relative z-10 mx-auto w-full max-w-4xl px-6 pt-14 text-center text-white md:pt-16 lg:pt-20",
            style: {
                y: i
            },
            children: [g.jsx(k.p, {
                className: "font-cormorant text-xs uppercase tracking-[0.4em] text-amber-100/90 md:text-sm",
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .55,
                    delay: .2
                },
                children: R.hero.tagline
            }), g.jsx("div", {
                className: "mt-5 md:mt-6",
                children: g.jsx(k.h1, {
                    className: "mt-1.5 font-display text-4xl font-semibold leading-tight tracking-tight drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .42
                    },
                    children: R.couple.bride
                })
            }), g.jsx(k.p, {
                className: "font-cormorant my-3 text-xl text-amber-200/95 md:my-4 md:text-2xl",
                initial: {
                    opacity: 0,
                    scale: .9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .4,
                    delay: .52
                },
                children: "&"
            }), g.jsx("div", {
                children: g.jsx(k.h1, {
                    className: "mt-1.5 font-display text-4xl font-semibold leading-tight tracking-tight drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .55
                    },
                    children: R.couple.groom
                })
            }), g.jsxs(k.div, {
                className: "mx-auto mt-6 max-w-lg space-y-2 font-display text-sm leading-snug text-amber-50/95 md:mt-8 md:space-y-2.5 md:text-base lg:text-lg",
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    delay: .68
                },
                children: [g.jsxs("p", {
                    children: [g.jsx("span", {
                        className: "text-gold-300",
                        children: l.label
                    }), " · ", l.dateDisplay, " · ", l.timeDisplay]
                }), g.jsxs("p", {
                    children: [g.jsx("span", {
                        className: "text-gold-300",
                        children: s.label
                    }), " · ", s.dateDisplay, " · ", s.timeDisplay]
                })]
            })]
        }), g.jsx("div", {
            className: "min-h-0 flex-1",
            "aria-hidden": !0
        }), g.jsxs(k.div, {
            className: "relative z-10 mx-auto flex flex-col items-center gap-1 pb-10 text-amber-100/90 md:pb-14",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: .95,
                duration: .5
            },
            children: [g.jsx("span", {
                className: "text-[10px] uppercase tracking-[0.35em] md:text-xs",
                children: R.translations.scrollText
            }), g.jsx(k.div, {
                "aria-hidden": !0,
                className: "flex flex-col items-center",
                animate: {
                    y: [0, 10, 0]
                },
                transition: {
                    duration: 1.4,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                children: g.jsx("svg", {
                    width: "36",
                    height: "36",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "text-amber-200 drop-shadow-md",
                    children: g.jsx("path", {
                        d: "M6 9l6 6 6-6",
                        stroke: "currentColor",
                        strokeWidth: "2.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            })]
        })]
    })
}
const Hm = ["#f59e0b", "#dc2626", "#e11d48", "#7c3aed", "#16a34a", "#fef3c7"];
function uM({active: t}) {
    const e = E.useMemo( () => Array.from({
        length: 72
    }, (n, i) => {
        const a = i % 3
          , l = a === 0 ? 12 : a === 1 ? 88 : 50
          , s = i * 37 % 100
          , u = 8 + i * 19 % 70;
        return {
            id: i,
            color: Hm[i % Hm.length],
            delay: i % 12 * .025,
            startX: l,
            startY: a === 2 ? 72 : 88,
            endX: s,
            endY: u,
            rotate: (i % 2 === 0 ? 1 : -1) * (180 + i * 23),
            width: 6 + i % 4 * 2,
            height: 10 + i % 3 * 4
        }
    }
    ), []);
    return t ? g.jsxs("div", {
        "aria-hidden": !0,
        className: "pointer-events-none fixed inset-0 z-40 overflow-hidden",
        children: [g.jsx(k.div, {
            className: "absolute inset-0 bg-gradient-to-b from-gold-100/15 via-transparent to-rose-100/20",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: [0, 1, 0]
            },
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }), e.map(n => g.jsx(k.span, {
            className: "absolute rounded-full shadow-sm",
            style: {
                backgroundColor: n.color,
                left: `${n.startX}%`,
                top: `${n.startY}%`,
                width: n.width,
                height: n.height
            },
            initial: {
                opacity: 0,
                scale: .4,
                x: 0,
                y: 0,
                rotate: 0
            },
            animate: {
                opacity: [0, 1, 1, 0],
                scale: [.4, 1, .9],
                x: `${n.endX - n.startX}vw`,
                y: `${n.endY - n.startY}vh`,
                rotate: n.rotate
            },
            transition: {
                duration: 1.8,
                delay: n.delay,
                ease: [.16, 1, .3, 1]
            }
        }, n.id))]
    }) : null
}
function Il({src: t, opacity: e, x: n, y: i, scale: a, className: l=""}) {
    return g.jsx(k.img, {
        src: t,
        alt: "",
        "aria-hidden": !0,
        className: `absolute bottom-0 left-1/2 w-auto max-w-[92vw] -translate-x-1/2 select-none object-contain drop-shadow-2xl ${l}`.trim(),
        draggable: !1,
        loading: "lazy",
        decoding: "async",
        style: {
            opacity: e,
            x: n,
            y: i,
            scale: a
        }
    })
}
function oM() {
    const {scrollYProgress: t} = Ov()
      , e = R.scrollStory
      , [n,i] = E.useState(!1)
      , [a,l] = E.useState(!1)
      , s = E.useRef(!1)
      , u = E.useRef(null);
    E.useEffect( () => {
        const M = window.matchMedia("(max-width: 640px)")
          , D = () => l(M.matches);
        return D(),
        M.addEventListener("change", D),
        () => {
            M.removeEventListener("change", D),
            u.current && window.clearTimeout(u.current)
        }
    }
    , []),
    wE(t, "change", M => {
        var C, w;
        if (M < .68 && (s.current = !1),
        M < .755 || s.current)
            return;
        s.current = !0,
        i(!0),
        (w = (C = window.navigator).vibrate) == null || w.call(C, [80, 40, 120]);
        const D = new Audio(e.celebrationSound);
        D.volume = .55,
        D.play().catch( () => {}
        ),
        u.current && window.clearTimeout(u.current),
        u.current = window.setTimeout( () => {
            i(!1),
            u.current = null
        }
        , 2500)
    }
    );
    const o = Tt(t, [.04, .06, .5, .505], [0, 1, 1, 0])
      , r = Tt(t, [.04, .3, .5], a ? ["-58vw", "-40vw", "-36vw"] : ["-42vw", "-24vw", "-16vw"])
      , c = Tt(t, [.04, .3, .5], a ? ["56vw", "6vw", "-10vw"] : ["20vw", "10vw", "8vw"])
      , d = Tt(t, [.04, .5], ["4vh", "4vh"])
      , f = Tt(t, [.04, .5], [.82, .9])
      , h = Tt(t, [.04, .5], [.72, .8])
      , v = Tt(t, [.505, .51, .75, .755], [0, 1, 1, 0])
      , b = Tt(t, [.505, .75], a ? ["-22vw", "-22vw"] : ["-12vw", "-12vw"])
      , S = Tt(t, [.505, .75], ["8vh", "8vh"])
      , p = Tt(t, [.505, .75], [.82, .86])
      , m = Tt(t, [.755, .76, 1], [0, 1, 1])
      , y = Tt(t, [.755, 1], a ? ["-22vw", "-22vw"] : ["-12vw", "-12vw"])
      , x = Tt(t, [.755, 1], ["8vh", "8vh"])
      , T = Tt(t, [.755, 1], [.84, .9])
      , O = Tt(t, [.04, .08, .98, 1], [0, 1, 1, .75]);
    return g.jsxs(g.Fragment, {
        children: [g.jsx(uM, {
            active: n
        }), g.jsxs("div", {
            "aria-hidden": !0,
            className: "pointer-events-none fixed inset-x-0 bottom-0 z-[2] h-[24vh] min-h-36 overflow-hidden sm:h-[32vh] md:h-[42vh]",
            children: [g.jsx(k.div, {
                className: "absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-cream-50/70 via-cream-50/30 to-transparent backdrop-blur-[1.5px]",
                style: {
                    opacity: O
                }
            }), g.jsxs("div", {
                className: "relative mx-auto h-full max-w-7xl",
                children: [g.jsx(Il, {
                    src: e.brideApproach,
                    opacity: o,
                    x: r,
                    y: d,
                    scale: f,
                    className: "h-[92%] sm:h-[94%]"
                }), g.jsx(Il, {
                    src: e.groomApproach,
                    opacity: o,
                    x: c,
                    y: d,
                    scale: h,
                    className: "h-[90%] sm:h-[92%]"
                }), g.jsx(Il, {
                    src: e.garlandMoment,
                    opacity: v,
                    x: b,
                    y: S,
                    scale: p,
                    className: "h-full"
                }), g.jsx(Il, {
                    src: e.finalMoment,
                    opacity: m,
                    x: y,
                    y: x,
                    scale: T,
                    className: "h-full"
                })]
            })]
        })]
    })
}
function qn({children: t, className: e="", id: n}) {
    const i = Nv();
    return g.jsx(k.section, {
        id: n,
        className: e,
        initial: i ? "visible" : "hidden",
        whileInView: "visible",
        viewport: {
            once: !0,
            margin: "-40px 0px",
            amount: .08
        },
        variants: {
            hidden: {
                opacity: 0,
                y: 44
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: i ? 0 : .62,
                    ease: [.22, 1, .36, 1]
                }
            }
        },
        children: t
    })
}
function rM({className: t=""}) {
    return g.jsxs("div", {
        className: `relative overflow-hidden rounded-2xl border border-gold-300/40 bg-stone-100 shadow-lg ${t}`,
        children: [g.jsxs("div", {
            className: "pointer-events-none absolute left-4 top-4 z-10 max-w-[calc(100%-2rem)] rounded-2xl border border-gold-200/80 bg-cream-50/95 px-4 py-3 shadow-xl backdrop-blur-sm md:left-6 md:top-6 md:px-5",
            children: [g.jsx("p", {
                className: "text-xs font-semibold uppercase tracking-[0.28em] text-gold-700",
                children: "Venue"
            }), g.jsx("p", {
                className: "mt-1 font-display text-xl text-stone-900",
                children: R.venue.name
            }), g.jsxs("p", {
                className: "mt-1 text-sm text-stone-600",
                children: [R.venue.addressLine, ", ", R.venue.city]
            })]
        }), g.jsx("iframe", {
            title: `Map: ${R.venue.name}`,
            src: R.venue.mapsEmbedUrl,
            className: "h-[min(55vh,420px)] min-h-[280px] w-full border-0 grayscale-[0.12] sepia-[0.08]",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            allowFullScreen: !0
        })]
    })
}
const Rv = `${R.venue.name}, ${R.venue.addressLine}, ${R.venue.city}, ${R.venue.region}`;
function cM(t) {
    return `https://calendar.google.com/calendar/render?${new URLSearchParams({
        action: "TEMPLATE",
        text: t.title,
        dates: `${t.startUtc}/${t.endUtc}`,
        details: t.description,
        location: Rv
    }).toString()}`
}
function fM(t) {
    const e = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Nivedha Divakar Wedding//Invitation//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "BEGIN:VEVENT", `UID:${t.id}@nivedha-divakar-wedding`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`, `DTSTART:${t.startUtc}`, `DTEND:${t.endUtc}`, `SUMMARY:${t.title}`, `DESCRIPTION:${t.description}`, `LOCATION:${Rv}`, "END:VEVENT", "END:VCALENDAR"].join(`\r
`);
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(e)}`
}
function dM(t) {
    if (/iPad|iPhone|iPod|Macintosh/.test(window.navigator.userAgent) || window.navigator.platform.toLowerCase().includes("mac")) {
        const n = document.createElement("a");
        n.href = fM(t),
        n.download = t.filename,
        document.body.appendChild(n),
        n.click(),
        n.remove();
        return
    }
    window.open(cM(t), "_blank", "noopener,noreferrer")
}
function hM() {
    const [t] = R.calendarEvents;
    t && dM(t)
}
function mM() {
    const [t,e] = E.useState("")
      , [n,i] = E.useState("")
      , [a,l] = E.useState("idle")
      , s = async u => {
        u.preventDefault(),
        l("submitting");
        try {
            const o = new FormData;
            o.append("name", t.trim()),
            o.append("phone", n.trim()),
            await fetch(R.rsvp.sheetSubmitUrl, {
                method: "POST",
                mode: "no-cors",
                body: o
            }),
            e(""),
            i(""),
            l("sent")
        } catch {
            l("error")
        }
    }
    ;
    return g.jsxs("div", {
        className: "relative min-h-screen text-stone-800",
        children: [g.jsx("div", {
            "aria-hidden": !0,
            className: "pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.16] mix-blend-multiply md:opacity-[0.13]",
            style: {
                backgroundImage: `url(${R.invitation.backgroundImage})`
            }
        }), g.jsx(eM, {}), g.jsx(oM, {}), g.jsxs("div", {
            className: "relative z-[1]",
            children: [g.jsx(sM, {}), g.jsx(qe, {}), g.jsx(qn, {
                className: "mx-auto max-w-3xl px-6 py-16 text-center md:py-24",
                children: g.jsx(Te, {
                    direction: "up",
                    children: g.jsx("p", {
                        className: "font-display text-2xl leading-relaxed text-stone-800 md:text-3xl",
                        children: R.translations.welcome
                    })
                })
            }), g.jsx(qe, {}), g.jsx(qn, {
                children: g.jsx(lM, {})
            }), g.jsx(qe, {}), g.jsxs(qn, {
                className: "mx-auto max-w-6xl px-6 py-16 md:py-24",
                children: [g.jsxs("div", {
                    className: "grid gap-10 md:grid-cols-2 md:items-start md:gap-12",
                    children: [g.jsxs(Te, {
                        direction: "right",
                        className: "relative overflow-hidden rounded-3xl border border-gold-300/45 shadow-xl",
                        children: [g.jsx(hn, {
                            className: "z-10 opacity-90"
                        }), g.jsx(k.img, {
                            src: R.venue.image,
                            alt: R.venue.name,
                            className: "relative z-0 aspect-[4/3] w-full object-cover",
                            loading: "lazy",
                            whileHover: {
                                scale: 1.03
                            },
                            transition: {
                                duration: .45
                            }
                        })]
                    }), g.jsx(Te, {
                        direction: "left",
                        delay: .08,
                        children: g.jsxs("div", {
                            children: [g.jsx("h2", {
                                className: "font-display text-3xl text-stone-900 md:text-4xl",
                                children: R.venue.name
                            }), g.jsx("p", {
                                className: "mt-4 leading-relaxed text-stone-600",
                                children: R.venue.description
                            }), g.jsxs("address", {
                                className: "mt-6 not-italic text-stone-700",
                                children: [g.jsx("p", {
                                    className: "font-medium",
                                    children: R.venue.addressLine
                                }), g.jsxs("p", {
                                    children: [R.venue.city, ", ", R.venue.region]
                                })]
                            }), g.jsx(k.a, {
                                href: R.venue.mapsLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-8 inline-flex items-center justify-center rounded-full border-2 border-gold-400 bg-gold-50 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-gold-800 transition hover:bg-gold-100 hover:shadow-lg",
                                whileHover: {
                                    scale: 1.03,
                                    y: -2
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: R.translations.getDirections
                            })]
                        })
                    })]
                }), g.jsxs(Te, {
                    direction: "up",
                    className: "mt-12 md:mt-14",
                    delay: .1,
                    children: [g.jsx("h3", {
                        className: "mb-4 text-center font-display text-2xl text-stone-900 md:text-3xl",
                        children: R.translations.mapHeading
                    }), g.jsx(rM, {})]
                })]
            }), g.jsx(qe, {}), g.jsxs(qn, {
                className: "relative overflow-hidden bg-cream-100/75 py-16 md:py-24",
                children: [g.jsxs(Te, {
                    direction: "up",
                    className: "mx-auto max-w-6xl px-6",
                    children: [g.jsx("h2", {
                        className: "text-center font-display text-3xl text-stone-900 md:text-4xl",
                        children: "Moments we cherish"
                    }), g.jsx("p", {
                        className: "mx-auto mt-3 max-w-2xl text-center text-sm text-stone-600",
                        children: "A glimpse of the celebration ahead"
                    })]
                }), g.jsx("div", {
                    className: "mx-auto mt-12 grid max-w-6xl gap-8 px-6 md:grid-cols-3 md:gap-10",
                    children: R.featuredSections.map( (u, o) => g.jsx(Te, {
                        direction: o % 3 === 1 ? "scale" : o % 3 === 0 ? "up" : "left",
                        delay: .07 * o,
                        children: g.jsxs(k.article, {
                            className: "group relative overflow-hidden rounded-2xl border border-gold-300/30 bg-white/95 shadow-md",
                            whileHover: {
                                y: -6,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                            },
                            transition: {
                                duration: .35
                            },
                            children: [g.jsx(hn, {}), g.jsx("div", {
                                className: "relative z-[1] aspect-video overflow-hidden",
                                children: g.jsx(k.img, {
                                    src: u.image,
                                    alt: "",
                                    className: `h-full w-full object-cover ${u.imagePositionClass}`,
                                    loading: "lazy",
                                    whileHover: {
                                        scale: 1.06
                                    },
                                    transition: {
                                        duration: .5
                                    }
                                })
                            }), g.jsxs("div", {
                                className: "relative z-[1] p-6",
                                children: [g.jsx("h3", {
                                    className: "font-display text-2xl text-stone-900",
                                    children: u.title
                                }), g.jsx("p", {
                                    className: "mt-3 text-sm leading-relaxed text-stone-600",
                                    children: u.description
                                })]
                            })]
                        })
                    }, u.id))
                })]
            }), g.jsx(qe, {}), g.jsxs(qn, {
                className: "mx-auto max-w-4xl px-6 py-16 md:py-24",
                children: [g.jsx(Te, {
                    direction: "down",
                    children: g.jsx("h2", {
                        className: "text-center font-display text-3xl text-stone-900 md:text-4xl",
                        children: "Order of the events"
                    })
                }), g.jsx("ul", {
                    className: "mt-12 space-y-8 md:space-y-10",
                    children: R.eventSchedule.map( (u, o) => g.jsx(Te, {
                        direction: o % 2 === 0 ? "left" : "right",
                        delay: .05 * o,
                        children: g.jsxs(k.li, {
                            className: "relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gold-300/40 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:gap-8 md:p-8",
                            children: [g.jsx(hn, {
                                className: "opacity-80"
                            }), g.jsxs("div", {
                                className: "relative z-[1] flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-8",
                                children: [g.jsx(k.img, {
                                    src: u.image,
                                    alt: "",
                                    className: "h-20 w-24 rounded-xl object-cover object-center shadow-sm md:h-16 md:w-16",
                                    loading: "lazy",
                                    whileHover: {
                                        scale: 1.06
                                    },
                                    transition: {
                                        duration: .4
                                    }
                                }), g.jsx("div", {
                                    className: "min-w-0 shrink-0 font-display text-lg text-gold-700 md:min-w-[10rem] md:text-xl",
                                    children: u.time
                                }), g.jsxs("div", {
                                    className: "flex-1",
                                    children: [g.jsx("h3", {
                                        className: "font-display text-xl text-stone-900 md:text-2xl",
                                        children: u.title
                                    }), g.jsx("p", {
                                        className: "mt-1 text-stone-600",
                                        children: u.description
                                    })]
                                })]
                            })]
                        })
                    }, u.id))
                })]
            }), g.jsx(qe, {
                className: "!h-10 !py-1"
            }), g.jsx(qn, {
                className: "mx-auto max-w-3xl px-6 py-16 text-center md:py-20",
                children: g.jsx(Te, {
                    direction: "up",
                    children: g.jsxs("div", {
                        className: "relative overflow-hidden rounded-3xl border border-gold-300/45 bg-white/90 px-6 py-10 shadow-lg backdrop-blur-sm md:px-10",
                        children: [g.jsx(hn, {
                            className: "opacity-70"
                        }), g.jsxs("div", {
                            className: "relative z-[1]",
                            children: [g.jsx("p", {
                                className: "font-cormorant text-sm font-semibold uppercase tracking-[0.35em] text-gold-700",
                                children: R.rsvp.heading
                            }), g.jsx("h2", {
                                className: "mt-3 font-display text-3xl text-stone-900 md:text-4xl",
                                children: "Join us in celebration"
                            }), g.jsx("p", {
                                className: "mx-auto mt-4 max-w-xl leading-relaxed text-stone-600",
                                children: R.rsvp.message
                            }), g.jsxs("form", {
                                className: "mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left",
                                onSubmit: s,
                                children: [g.jsxs("label", {
                                    className: "text-sm font-medium text-stone-700",
                                    children: ["Name", g.jsx("input", {
                                        type: "text",
                                        value: t,
                                        onChange: u => e(u.target.value),
                                        required: !0,
                                        className: "mt-2 w-full rounded-2xl border border-gold-300/60 bg-white px-4 py-3 text-stone-800 shadow-sm outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-200/50",
                                        placeholder: "Your name"
                                    })]
                                }), g.jsxs("label", {
                                    className: "text-sm font-medium text-stone-700",
                                    children: ["Phone number", g.jsx("input", {
                                        type: "tel",
                                        value: n,
                                        onChange: u => i(u.target.value),
                                        required: !0,
                                        className: "mt-2 w-full rounded-2xl border border-gold-300/60 bg-white px-4 py-3 text-stone-800 shadow-sm outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-200/50",
                                        placeholder: "Your phone number"
                                    })]
                                }), g.jsx(k.button, {
                                    type: "submit",
                                    disabled: a === "submitting",
                                    className: "mt-2 inline-flex w-full items-center justify-center rounded-full border-2 border-gold-400 bg-gold-50 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-gold-800 transition hover:bg-gold-100 hover:shadow-lg",
                                    whileHover: {
                                        scale: 1.03,
                                        y: -2
                                    },
                                    whileTap: {
                                        scale: .98
                                    },
                                    children: a === "submitting" ? "Sending..." : "Send RSVP"
                                })]
                            }), a === "sent" && g.jsx("p", {
                                className: "mt-4 text-sm font-medium text-emerald-700",
                                children: "RSVP sent. Thank you!"
                            }), a === "error" && g.jsx("p", {
                                className: "mt-4 text-sm font-medium text-red-700",
                                children: "RSVP sheet is not connected yet. Please use WhatsApp for now."
                            }), g.jsx(k.a, {
                                href: R.rsvp.whatsappLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mx-auto mt-4 inline-flex w-full max-w-xl items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-50 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-emerald-800 transition hover:bg-emerald-100 hover:shadow-lg",
                                whileHover: {
                                    scale: 1.03,
                                    y: -2
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: "WhatsApp me"
                            }), g.jsx(k.button, {
                                type: "button",
                                onClick: hM,
                                className: "mx-auto mt-4 inline-flex w-full max-w-xl items-center justify-center rounded-full border-2 border-gold-400 bg-gold-50 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-gold-800 transition hover:bg-gold-100 hover:shadow-lg",
                                whileHover: {
                                    scale: 1.03,
                                    y: -2
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: "Add to your calendar"
                            }), g.jsxs("p", {
                                className: "mt-6 text-sm text-stone-500",
                                children: ["RSVP details will be saved to our wedding sheet · WhatsApp", " ", R.rsvp.phoneDisplay]
                            })]
                        })]
                    })
                })
            }), g.jsx(qe, {
                className: "!h-10 !py-1"
            }), g.jsx(qn, {
                children: g.jsxs("footer", {
                    className: "relative overflow-hidden border-t border-gold-300/35 bg-cream-50/95 py-12 text-center",
                    children: [g.jsx(hn, {
                        className: "opacity-50"
                    }), g.jsxs("div", {
                        className: "relative z-[1]",
                        children: [g.jsx("p", {
                            className: "font-cormorant text-lg text-stone-700",
                            children: R.translations.withLove
                        }), g.jsx("p", {
                            className: "mt-4 text-sm text-stone-500",
                            dangerouslySetInnerHTML: {
                                __html: R.translations.copyright
                            }
                        })]
                    })]
                })
            })]
        })]
    })
}
const {animations: _o} = R.envelope;
function pM() {
    const [t,e] = E.useState(!0)
      , [n,i] = E.useState(!1)
      , [a,l] = E.useState(!1)
      , s = E.useRef(!1)
      , u = E.useRef(null)
      , o = E.useRef(null)
      , r = E.useCallback( () => {
        if (u.current)
            return;
        const v = new Audio(R.audio.backgroundMusic);
        v.loop = !0,
        v.volume = 0,
        u.current = v,
        v.play().catch( () => {
            u.current = null
        }
        )
    }
    , [])
      , c = E.useCallback( () => {
        const v = u.current;
        if (!v)
            return;
        o.current && window.cancelAnimationFrame(o.current);
        const b = performance.now()
          , S = R.audio.volume
          , p = m => {
            const y = Math.min((m - b) / R.audio.fadeInDuration, 1);
            if (v.volume = S * y,
            y < 1) {
                o.current = window.requestAnimationFrame(p);
                return
            }
            o.current = null
        }
        ;
        o.current = window.requestAnimationFrame(p)
    }
    , [])
      , d = E.useCallback( () => {
        const v = u.current;
        if (!v || v.paused)
            return;
        o.current && window.cancelAnimationFrame(o.current);
        const b = performance.now()
          , S = v.volume
          , p = 900
          , m = y => {
            const x = Math.min((y - b) / p, 1);
            if (v.volume = S * (1 - x),
            x < 1) {
                o.current = window.requestAnimationFrame(m);
                return
            }
            v.pause(),
            v.volume = 0,
            o.current = null
        }
        ;
        o.current = window.requestAnimationFrame(m)
    }
    , []);
    E.useEffect( () => {
        if (!a)
            return;
        const v = () => {
            const {documentElement: b} = document;
            b.scrollHeight - window.innerHeight - window.scrollY <= 32 && d()
        }
        ;
        return v(),
        window.addEventListener("scroll", v, {
            passive: !0
        }),
        window.addEventListener("resize", v),
        () => {
            window.removeEventListener("scroll", v),
            window.removeEventListener("resize", v)
        }
    }
    , [d, a]);
    const f = E.useCallback( () => {
        if (s.current)
            return;
        s.current = !0,
        i(!0),
        r();
        const v = _o.sealClickToFadeOutDelay + _o.flapOpeningDuration * 1e3 - _o.fadeOutDuration * 450;
        window.setTimeout( () => {
            l(!0),
            c()
        }
        , Math.max(0, v - 350)),
        window.setTimeout( () => {
            e(!1),
            i(!1)
        }
        , v)
    }
    , [c, r])
      , h = E.useCallback( () => {
        s.current = !1
    }
    , []);
    return g.jsxs("div", {
        className: "relative min-h-screen",
        children: [!a && !n && g.jsx("div", {
            className: "sr-only",
            "aria-live": "polite",
            children: "Invitation hidden until envelope opens."
        }), g.jsx("div", {
            id: "invitation-root",
            children: a && g.jsx(k.div, {
                initial: {
                    opacity: 0,
                    y: 96,
                    scale: .98
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                transition: {
                    duration: 1.55,
                    ease: [.22, 1, .36, 1]
                },
                children: g.jsx(mM, {})
            }, "invitation")
        }), g.jsx(nM, {
            open: t,
            opening: n,
            onSealClick: f,
            onExitComplete: h
        })]
    })
}
Ob.createRoot(document.getElementById("root")).render(g.jsx(E.StrictMode, {
    children: g.jsx(pM, {})
}));
