function ty(t, r) {
    for (var i = 0; i < r.length; i++) {
        const o = r[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const a in o)
                if (a !== "default" && !(a in t)) {
                    const u = Object.getOwnPropertyDescriptor(o, a);
                    u &&
                        Object.defineProperty(
                            t,
                            a,
                            u.get ? u : { enumerable: !0, get: () => o[a] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        o(a);
    new MutationObserver((a) => {
        for (const u of a)
            if (u.type === "childList")
                for (const c of u.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && o(c);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(a) {
        const u = {};
        return (
            a.integrity && (u.integrity = a.integrity),
            a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
            a.crossOrigin === "use-credentials"
                ? (u.credentials = "include")
                : a.crossOrigin === "anonymous"
                ? (u.credentials = "omit")
                : (u.credentials = "same-origin"),
            u
        );
    }
    function o(a) {
        if (a.ep) return;
        a.ep = !0;
        const u = i(a);
        fetch(a.href, u);
    }
})();
function No(t) {
    return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t;
}
var Ca = { exports: {} },
    Ui = {},
    ja = { exports: {} },
    je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function ny() {
    if (xd) return je;
    xd = 1;
    var t = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        u = Symbol.for("react.provider"),
        c = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        x = Symbol.iterator;
    function k(P) {
        return P === null || typeof P != "object"
            ? null
            : ((P = (x && P[x]) || P["@@iterator"]),
              typeof P == "function" ? P : null);
    }
    var w = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        j = Object.assign,
        T = {};
    function R(P, M, C) {
        (this.props = P),
            (this.context = M),
            (this.refs = T),
            (this.updater = C || w);
    }
    (R.prototype.isReactComponent = {}),
        (R.prototype.setState = function (P, M) {
            if (typeof P != "object" && typeof P != "function" && P != null)
                throw Error(
                    "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, P, M, "setState");
        }),
        (R.prototype.forceUpdate = function (P) {
            this.updater.enqueueForceUpdate(this, P, "forceUpdate");
        });
    function L() {}
    L.prototype = R.prototype;
    function D(P, M, C) {
        (this.props = P),
            (this.context = M),
            (this.refs = T),
            (this.updater = C || w);
    }
    var U = (D.prototype = new L());
    (U.constructor = D), j(U, R.prototype), (U.isPureReactComponent = !0);
    var J = Array.isArray,
        $ = Object.prototype.hasOwnProperty,
        _ = { current: null },
        ie = { key: !0, ref: !0, __self: !0, __source: !0 };
    function xe(P, M, C) {
        var de,
            ke = {},
            fe = null,
            Re = null;
        if (M != null)
            for (de in (M.ref !== void 0 && (Re = M.ref),
            M.key !== void 0 && (fe = "" + M.key),
            M))
                $.call(M, de) && !ie.hasOwnProperty(de) && (ke[de] = M[de]);
        var Ee = arguments.length - 2;
        if (Ee === 1) ke.children = C;
        else if (1 < Ee) {
            for (var Ie = Array(Ee), Qe = 0; Qe < Ee; Qe++)
                Ie[Qe] = arguments[Qe + 2];
            ke.children = Ie;
        }
        if (P && P.defaultProps)
            for (de in ((Ee = P.defaultProps), Ee))
                ke[de] === void 0 && (ke[de] = Ee[de]);
        return {
            $$typeof: t,
            type: P,
            key: fe,
            ref: Re,
            props: ke,
            _owner: _.current,
        };
    }
    function ge(P, M) {
        return {
            $$typeof: t,
            type: P.type,
            key: M,
            ref: P.ref,
            props: P.props,
            _owner: P._owner,
        };
    }
    function Se(P) {
        return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function oe(P) {
        var M = { "=": "=0", ":": "=2" };
        return (
            "$" +
            P.replace(/[=:]/g, function (C) {
                return M[C];
            })
        );
    }
    var te = /\/+/g;
    function Z(P, M) {
        return typeof P == "object" && P !== null && P.key != null
            ? oe("" + P.key)
            : M.toString(36);
    }
    function G(P, M, C, de, ke) {
        var fe = typeof P;
        (fe === "undefined" || fe === "boolean") && (P = null);
        var Re = !1;
        if (P === null) Re = !0;
        else
            switch (fe) {
                case "string":
                case "number":
                    Re = !0;
                    break;
                case "object":
                    switch (P.$$typeof) {
                        case t:
                        case r:
                            Re = !0;
                    }
            }
        if (Re)
            return (
                (Re = P),
                (ke = ke(Re)),
                (P = de === "" ? "." + Z(Re, 0) : de),
                J(ke)
                    ? ((C = ""),
                      P != null && (C = P.replace(te, "$&/") + "/"),
                      G(ke, M, C, "", function (Qe) {
                          return Qe;
                      }))
                    : ke != null &&
                      (Se(ke) &&
                          (ke = ge(
                              ke,
                              C +
                                  (!ke.key || (Re && Re.key === ke.key)
                                      ? ""
                                      : ("" + ke.key).replace(te, "$&/") +
                                        "/") +
                                  P
                          )),
                      M.push(ke)),
                1
            );
        if (((Re = 0), (de = de === "" ? "." : de + ":"), J(P)))
            for (var Ee = 0; Ee < P.length; Ee++) {
                fe = P[Ee];
                var Ie = de + Z(fe, Ee);
                Re += G(fe, M, C, Ie, ke);
            }
        else if (((Ie = k(P)), typeof Ie == "function"))
            for (P = Ie.call(P), Ee = 0; !(fe = P.next()).done; )
                (fe = fe.value),
                    (Ie = de + Z(fe, Ee++)),
                    (Re += G(fe, M, C, Ie, ke));
        else if (fe === "object")
            throw (
                ((M = String(P)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (M === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(P).join(", ") +
                              "}"
                            : M) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        return Re;
    }
    function ae(P, M, C) {
        if (P == null) return P;
        var de = [],
            ke = 0;
        return (
            G(P, de, "", "", function (fe) {
                return M.call(C, fe, ke++);
            }),
            de
        );
    }
    function Ae(P) {
        if (P._status === -1) {
            var M = P._result;
            (M = M()),
                M.then(
                    function (C) {
                        (P._status === 0 || P._status === -1) &&
                            ((P._status = 1), (P._result = C));
                    },
                    function (C) {
                        (P._status === 0 || P._status === -1) &&
                            ((P._status = 2), (P._result = C));
                    }
                ),
                P._status === -1 && ((P._status = 0), (P._result = M));
        }
        if (P._status === 1) return P._result.default;
        throw P._result;
    }
    var we = { current: null },
        Y = { transition: null },
        se = {
            ReactCurrentDispatcher: we,
            ReactCurrentBatchConfig: Y,
            ReactCurrentOwner: _,
        };
    function S() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    return (
        (je.Children = {
            map: ae,
            forEach: function (P, M, C) {
                ae(
                    P,
                    function () {
                        M.apply(this, arguments);
                    },
                    C
                );
            },
            count: function (P) {
                var M = 0;
                return (
                    ae(P, function () {
                        M++;
                    }),
                    M
                );
            },
            toArray: function (P) {
                return (
                    ae(P, function (M) {
                        return M;
                    }) || []
                );
            },
            only: function (P) {
                if (!Se(P))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return P;
            },
        }),
        (je.Component = R),
        (je.Fragment = i),
        (je.Profiler = a),
        (je.PureComponent = D),
        (je.StrictMode = o),
        (je.Suspense = g),
        (je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se),
        (je.act = S),
        (je.cloneElement = function (P, M, C) {
            if (P == null)
                throw Error(
                    "React.cloneElement(...): The argument must be a React element, but you passed " +
                        P +
                        "."
                );
            var de = j({}, P.props),
                ke = P.key,
                fe = P.ref,
                Re = P._owner;
            if (M != null) {
                if (
                    (M.ref !== void 0 && ((fe = M.ref), (Re = _.current)),
                    M.key !== void 0 && (ke = "" + M.key),
                    P.type && P.type.defaultProps)
                )
                    var Ee = P.type.defaultProps;
                for (Ie in M)
                    $.call(M, Ie) &&
                        !ie.hasOwnProperty(Ie) &&
                        (de[Ie] =
                            M[Ie] === void 0 && Ee !== void 0 ? Ee[Ie] : M[Ie]);
            }
            var Ie = arguments.length - 2;
            if (Ie === 1) de.children = C;
            else if (1 < Ie) {
                Ee = Array(Ie);
                for (var Qe = 0; Qe < Ie; Qe++) Ee[Qe] = arguments[Qe + 2];
                de.children = Ee;
            }
            return {
                $$typeof: t,
                type: P.type,
                key: ke,
                ref: fe,
                props: de,
                _owner: Re,
            };
        }),
        (je.createContext = function (P) {
            return (
                (P = {
                    $$typeof: c,
                    _currentValue: P,
                    _currentValue2: P,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null,
                }),
                (P.Provider = { $$typeof: u, _context: P }),
                (P.Consumer = P)
            );
        }),
        (je.createElement = xe),
        (je.createFactory = function (P) {
            var M = xe.bind(null, P);
            return (M.type = P), M;
        }),
        (je.createRef = function () {
            return { current: null };
        }),
        (je.forwardRef = function (P) {
            return { $$typeof: p, render: P };
        }),
        (je.isValidElement = Se),
        (je.lazy = function (P) {
            return {
                $$typeof: y,
                _payload: { _status: -1, _result: P },
                _init: Ae,
            };
        }),
        (je.memo = function (P, M) {
            return { $$typeof: m, type: P, compare: M === void 0 ? null : M };
        }),
        (je.startTransition = function (P) {
            var M = Y.transition;
            Y.transition = {};
            try {
                P();
            } finally {
                Y.transition = M;
            }
        }),
        (je.unstable_act = S),
        (je.useCallback = function (P, M) {
            return we.current.useCallback(P, M);
        }),
        (je.useContext = function (P) {
            return we.current.useContext(P);
        }),
        (je.useDebugValue = function () {}),
        (je.useDeferredValue = function (P) {
            return we.current.useDeferredValue(P);
        }),
        (je.useEffect = function (P, M) {
            return we.current.useEffect(P, M);
        }),
        (je.useId = function () {
            return we.current.useId();
        }),
        (je.useImperativeHandle = function (P, M, C) {
            return we.current.useImperativeHandle(P, M, C);
        }),
        (je.useInsertionEffect = function (P, M) {
            return we.current.useInsertionEffect(P, M);
        }),
        (je.useLayoutEffect = function (P, M) {
            return we.current.useLayoutEffect(P, M);
        }),
        (je.useMemo = function (P, M) {
            return we.current.useMemo(P, M);
        }),
        (je.useReducer = function (P, M, C) {
            return we.current.useReducer(P, M, C);
        }),
        (je.useRef = function (P) {
            return we.current.useRef(P);
        }),
        (je.useState = function (P) {
            return we.current.useState(P);
        }),
        (je.useSyncExternalStore = function (P, M, C) {
            return we.current.useSyncExternalStore(P, M, C);
        }),
        (je.useTransition = function () {
            return we.current.useTransition();
        }),
        (je.version = "18.3.1"),
        je
    );
}
var wd;
function fu() {
    return wd || ((wd = 1), (ja.exports = ny())), ja.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function ry() {
    if (kd) return Ui;
    kd = 1;
    var t = fu(),
        r = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        a =
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
    function c(p, g, m) {
        var y,
            x = {},
            k = null,
            w = null;
        m !== void 0 && (k = "" + m),
            g.key !== void 0 && (k = "" + g.key),
            g.ref !== void 0 && (w = g.ref);
        for (y in g) o.call(g, y) && !u.hasOwnProperty(y) && (x[y] = g[y]);
        if (p && p.defaultProps)
            for (y in ((g = p.defaultProps), g))
                x[y] === void 0 && (x[y] = g[y]);
        return {
            $$typeof: r,
            type: p,
            key: k,
            ref: w,
            props: x,
            _owner: a.current,
        };
    }
    return (Ui.Fragment = i), (Ui.jsx = c), (Ui.jsxs = c), Ui;
}
var Sd;
function iy() {
    return Sd || ((Sd = 1), (Ca.exports = ry())), Ca.exports;
}
var h = iy(),
    W = fu();
const Lh = No(W),
    ly = ty({ __proto__: null, default: Lh }, [W]);
var po = {},
    Aa = { exports: {} },
    kt = {},
    Ta = { exports: {} },
    Na = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function oy() {
    return (
        Ed ||
            ((Ed = 1),
            (function (t) {
                function r(Y, se) {
                    var S = Y.length;
                    Y.push(se);
                    e: for (; 0 < S; ) {
                        var P = (S - 1) >>> 1,
                            M = Y[P];
                        if (0 < a(M, se)) (Y[P] = se), (Y[S] = M), (S = P);
                        else break e;
                    }
                }
                function i(Y) {
                    return Y.length === 0 ? null : Y[0];
                }
                function o(Y) {
                    if (Y.length === 0) return null;
                    var se = Y[0],
                        S = Y.pop();
                    if (S !== se) {
                        Y[0] = S;
                        e: for (var P = 0, M = Y.length, C = M >>> 1; P < C; ) {
                            var de = 2 * (P + 1) - 1,
                                ke = Y[de],
                                fe = de + 1,
                                Re = Y[fe];
                            if (0 > a(ke, S))
                                fe < M && 0 > a(Re, ke)
                                    ? ((Y[P] = Re), (Y[fe] = S), (P = fe))
                                    : ((Y[P] = ke), (Y[de] = S), (P = de));
                            else if (fe < M && 0 > a(Re, S))
                                (Y[P] = Re), (Y[fe] = S), (P = fe);
                            else break e;
                        }
                    }
                    return se;
                }
                function a(Y, se) {
                    var S = Y.sortIndex - se.sortIndex;
                    return S !== 0 ? S : Y.id - se.id;
                }
                if (
                    typeof performance == "object" &&
                    typeof performance.now == "function"
                ) {
                    var u = performance;
                    t.unstable_now = function () {
                        return u.now();
                    };
                } else {
                    var c = Date,
                        p = c.now();
                    t.unstable_now = function () {
                        return c.now() - p;
                    };
                }
                var g = [],
                    m = [],
                    y = 1,
                    x = null,
                    k = 3,
                    w = !1,
                    j = !1,
                    T = !1,
                    R = typeof setTimeout == "function" ? setTimeout : null,
                    L = typeof clearTimeout == "function" ? clearTimeout : null,
                    D = typeof setImmediate < "u" ? setImmediate : null;
                typeof navigator < "u" &&
                    navigator.scheduling !== void 0 &&
                    navigator.scheduling.isInputPending !== void 0 &&
                    navigator.scheduling.isInputPending.bind(
                        navigator.scheduling
                    );
                function U(Y) {
                    for (var se = i(m); se !== null; ) {
                        if (se.callback === null) o(m);
                        else if (se.startTime <= Y)
                            o(m), (se.sortIndex = se.expirationTime), r(g, se);
                        else break;
                        se = i(m);
                    }
                }
                function J(Y) {
                    if (((T = !1), U(Y), !j))
                        if (i(g) !== null) (j = !0), Ae($);
                        else {
                            var se = i(m);
                            se !== null && we(J, se.startTime - Y);
                        }
                }
                function $(Y, se) {
                    (j = !1), T && ((T = !1), L(xe), (xe = -1)), (w = !0);
                    var S = k;
                    try {
                        for (
                            U(se), x = i(g);
                            x !== null &&
                            (!(x.expirationTime > se) || (Y && !oe()));

                        ) {
                            var P = x.callback;
                            if (typeof P == "function") {
                                (x.callback = null), (k = x.priorityLevel);
                                var M = P(x.expirationTime <= se);
                                (se = t.unstable_now()),
                                    typeof M == "function"
                                        ? (x.callback = M)
                                        : x === i(g) && o(g),
                                    U(se);
                            } else o(g);
                            x = i(g);
                        }
                        if (x !== null) var C = !0;
                        else {
                            var de = i(m);
                            de !== null && we(J, de.startTime - se), (C = !1);
                        }
                        return C;
                    } finally {
                        (x = null), (k = S), (w = !1);
                    }
                }
                var _ = !1,
                    ie = null,
                    xe = -1,
                    ge = 5,
                    Se = -1;
                function oe() {
                    return !(t.unstable_now() - Se < ge);
                }
                function te() {
                    if (ie !== null) {
                        var Y = t.unstable_now();
                        Se = Y;
                        var se = !0;
                        try {
                            se = ie(!0, Y);
                        } finally {
                            se ? Z() : ((_ = !1), (ie = null));
                        }
                    } else _ = !1;
                }
                var Z;
                if (typeof D == "function")
                    Z = function () {
                        D(te);
                    };
                else if (typeof MessageChannel < "u") {
                    var G = new MessageChannel(),
                        ae = G.port2;
                    (G.port1.onmessage = te),
                        (Z = function () {
                            ae.postMessage(null);
                        });
                } else
                    Z = function () {
                        R(te, 0);
                    };
                function Ae(Y) {
                    (ie = Y), _ || ((_ = !0), Z());
                }
                function we(Y, se) {
                    xe = R(function () {
                        Y(t.unstable_now());
                    }, se);
                }
                (t.unstable_IdlePriority = 5),
                    (t.unstable_ImmediatePriority = 1),
                    (t.unstable_LowPriority = 4),
                    (t.unstable_NormalPriority = 3),
                    (t.unstable_Profiling = null),
                    (t.unstable_UserBlockingPriority = 2),
                    (t.unstable_cancelCallback = function (Y) {
                        Y.callback = null;
                    }),
                    (t.unstable_continueExecution = function () {
                        j || w || ((j = !0), Ae($));
                    }),
                    (t.unstable_forceFrameRate = function (Y) {
                        0 > Y || 125 < Y
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : (ge = 0 < Y ? Math.floor(1e3 / Y) : 5);
                    }),
                    (t.unstable_getCurrentPriorityLevel = function () {
                        return k;
                    }),
                    (t.unstable_getFirstCallbackNode = function () {
                        return i(g);
                    }),
                    (t.unstable_next = function (Y) {
                        switch (k) {
                            case 1:
                            case 2:
                            case 3:
                                var se = 3;
                                break;
                            default:
                                se = k;
                        }
                        var S = k;
                        k = se;
                        try {
                            return Y();
                        } finally {
                            k = S;
                        }
                    }),
                    (t.unstable_pauseExecution = function () {}),
                    (t.unstable_requestPaint = function () {}),
                    (t.unstable_runWithPriority = function (Y, se) {
                        switch (Y) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                Y = 3;
                        }
                        var S = k;
                        k = Y;
                        try {
                            return se();
                        } finally {
                            k = S;
                        }
                    }),
                    (t.unstable_scheduleCallback = function (Y, se, S) {
                        var P = t.unstable_now();
                        switch (
                            (typeof S == "object" && S !== null
                                ? ((S = S.delay),
                                  (S =
                                      typeof S == "number" && 0 < S
                                          ? P + S
                                          : P))
                                : (S = P),
                            Y)
                        ) {
                            case 1:
                                var M = -1;
                                break;
                            case 2:
                                M = 250;
                                break;
                            case 5:
                                M = 1073741823;
                                break;
                            case 4:
                                M = 1e4;
                                break;
                            default:
                                M = 5e3;
                        }
                        return (
                            (M = S + M),
                            (Y = {
                                id: y++,
                                callback: se,
                                priorityLevel: Y,
                                startTime: S,
                                expirationTime: M,
                                sortIndex: -1,
                            }),
                            S > P
                                ? ((Y.sortIndex = S),
                                  r(m, Y),
                                  i(g) === null &&
                                      Y === i(m) &&
                                      (T ? (L(xe), (xe = -1)) : (T = !0),
                                      we(J, S - P)))
                                : ((Y.sortIndex = M),
                                  r(g, Y),
                                  j || w || ((j = !0), Ae($))),
                            Y
                        );
                    }),
                    (t.unstable_shouldYield = oe),
                    (t.unstable_wrapCallback = function (Y) {
                        var se = k;
                        return function () {
                            var S = k;
                            k = se;
                            try {
                                return Y.apply(this, arguments);
                            } finally {
                                k = S;
                            }
                        };
                    });
            })(Na)),
        Na
    );
}
var Cd;
function sy() {
    return Cd || ((Cd = 1), (Ta.exports = oy())), Ta.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function ay() {
    if (jd) return kt;
    jd = 1;
    var t = fu(),
        r = sy();
    function i(e) {
        for (
            var n =
                    "https://reactjs.org/docs/error-decoder.html?invariant=" +
                    e,
                l = 1;
            l < arguments.length;
            l++
        )
            n += "&args[]=" + encodeURIComponent(arguments[l]);
        return (
            "Minified React error #" +
            e +
            "; visit " +
            n +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    var o = new Set(),
        a = {};
    function u(e, n) {
        c(e, n), c(e + "Capture", n);
    }
    function c(e, n) {
        for (a[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
    }
    var p = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        g = Object.prototype.hasOwnProperty,
        m =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        y = {},
        x = {};
    function k(e) {
        return g.call(x, e)
            ? !0
            : g.call(y, e)
            ? !1
            : m.test(e)
            ? (x[e] = !0)
            : ((y[e] = !0), !1);
    }
    function w(e, n, l, s) {
        if (l !== null && l.type === 0) return !1;
        switch (typeof n) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return s
                    ? !1
                    : l !== null
                    ? !l.acceptsBooleans
                    : ((e = e.toLowerCase().slice(0, 5)),
                      e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function j(e, n, l, s) {
        if (n === null || typeof n > "u" || w(e, n, l, s)) return !0;
        if (s) return !1;
        if (l !== null)
            switch (l.type) {
                case 3:
                    return !n;
                case 4:
                    return n === !1;
                case 5:
                    return isNaN(n);
                case 6:
                    return isNaN(n) || 1 > n;
            }
        return !1;
    }
    function T(e, n, l, s, f, d, v) {
        (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
            (this.attributeName = s),
            (this.attributeNamespace = f),
            (this.mustUseProperty = l),
            (this.propertyName = e),
            (this.type = n),
            (this.sanitizeURL = d),
            (this.removeEmptyString = v);
    }
    var R = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
            R[e] = new T(e, 0, !1, e, null, !1, !1);
        }),
        [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
            var n = e[0];
            R[n] = new T(n, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
                R[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
        ),
        [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
        ].forEach(function (e) {
            R[e] = new T(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
                R[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            R[e] = new T(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
            R[e] = new T(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
            R[e] = new T(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
            R[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
    var L = /[\-:]([a-z])/g;
    function D(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
            var n = e.replace(L, D);
            R[n] = new T(n, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
                var n = e.replace(L, D);
                R[n] = new T(
                    n,
                    1,
                    !1,
                    e,
                    "http://www.w3.org/1999/xlink",
                    !1,
                    !1
                );
            }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var n = e.replace(L, D);
            R[n] = new T(
                n,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1
            );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
            R[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (R.xlinkHref = new T(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
            R[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
    function U(e, n, l, s) {
        var f = R.hasOwnProperty(n) ? R[n] : null;
        (f !== null
            ? f.type !== 0
            : s ||
              !(2 < n.length) ||
              (n[0] !== "o" && n[0] !== "O") ||
              (n[1] !== "n" && n[1] !== "N")) &&
            (j(n, l, f, s) && (l = null),
            s || f === null
                ? k(n) &&
                  (l === null
                      ? e.removeAttribute(n)
                      : e.setAttribute(n, "" + l))
                : f.mustUseProperty
                ? (e[f.propertyName] =
                      l === null ? (f.type === 3 ? !1 : "") : l)
                : ((n = f.attributeName),
                  (s = f.attributeNamespace),
                  l === null
                      ? e.removeAttribute(n)
                      : ((f = f.type),
                        (l = f === 3 || (f === 4 && l === !0) ? "" : "" + l),
                        s ? e.setAttributeNS(s, n, l) : e.setAttribute(n, l))));
    }
    var J = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        $ = Symbol.for("react.element"),
        _ = Symbol.for("react.portal"),
        ie = Symbol.for("react.fragment"),
        xe = Symbol.for("react.strict_mode"),
        ge = Symbol.for("react.profiler"),
        Se = Symbol.for("react.provider"),
        oe = Symbol.for("react.context"),
        te = Symbol.for("react.forward_ref"),
        Z = Symbol.for("react.suspense"),
        G = Symbol.for("react.suspense_list"),
        ae = Symbol.for("react.memo"),
        Ae = Symbol.for("react.lazy"),
        we = Symbol.for("react.offscreen"),
        Y = Symbol.iterator;
    function se(e) {
        return e === null || typeof e != "object"
            ? null
            : ((e = (Y && e[Y]) || e["@@iterator"]),
              typeof e == "function" ? e : null);
    }
    var S = Object.assign,
        P;
    function M(e) {
        if (P === void 0)
            try {
                throw Error();
            } catch (l) {
                var n = l.stack.trim().match(/\n( *(at )?)/);
                P = (n && n[1]) || "";
            }
        return (
            `
` +
            P +
            e
        );
    }
    var C = !1;
    function de(e, n) {
        if (!e || C) return "";
        C = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n)
                if (
                    ((n = function () {
                        throw Error();
                    }),
                    Object.defineProperty(n.prototype, "props", {
                        set: function () {
                            throw Error();
                        },
                    }),
                    typeof Reflect == "object" && Reflect.construct)
                ) {
                    try {
                        Reflect.construct(n, []);
                    } catch (z) {
                        var s = z;
                    }
                    Reflect.construct(e, [], n);
                } else {
                    try {
                        n.call();
                    } catch (z) {
                        s = z;
                    }
                    e.call(n.prototype);
                }
            else {
                try {
                    throw Error();
                } catch (z) {
                    s = z;
                }
                e();
            }
        } catch (z) {
            if (z && s && typeof z.stack == "string") {
                for (
                    var f = z.stack.split(`
`),
                        d = s.stack.split(`
`),
                        v = f.length - 1,
                        E = d.length - 1;
                    1 <= v && 0 <= E && f[v] !== d[E];

                )
                    E--;
                for (; 1 <= v && 0 <= E; v--, E--)
                    if (f[v] !== d[E]) {
                        if (v !== 1 || E !== 1)
                            do
                                if ((v--, E--, 0 > E || f[v] !== d[E])) {
                                    var A =
                                        `
` + f[v].replace(" at new ", " at ");
                                    return (
                                        e.displayName &&
                                            A.includes("<anonymous>") &&
                                            (A = A.replace(
                                                "<anonymous>",
                                                e.displayName
                                            )),
                                        A
                                    );
                                }
                            while (1 <= v && 0 <= E);
                        break;
                    }
            }
        } finally {
            (C = !1), (Error.prepareStackTrace = l);
        }
        return (e = e ? e.displayName || e.name : "") ? M(e) : "";
    }
    function ke(e) {
        switch (e.tag) {
            case 5:
                return M(e.type);
            case 16:
                return M("Lazy");
            case 13:
                return M("Suspense");
            case 19:
                return M("SuspenseList");
            case 0:
            case 2:
            case 15:
                return (e = de(e.type, !1)), e;
            case 11:
                return (e = de(e.type.render, !1)), e;
            case 1:
                return (e = de(e.type, !0)), e;
            default:
                return "";
        }
    }
    function fe(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ie:
                return "Fragment";
            case _:
                return "Portal";
            case ge:
                return "Profiler";
            case xe:
                return "StrictMode";
            case Z:
                return "Suspense";
            case G:
                return "SuspenseList";
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case oe:
                    return (e.displayName || "Context") + ".Consumer";
                case Se:
                    return (e._context.displayName || "Context") + ".Provider";
                case te:
                    var n = e.render;
                    return (
                        (e = e.displayName),
                        e ||
                            ((e = n.displayName || n.name || ""),
                            (e =
                                e !== ""
                                    ? "ForwardRef(" + e + ")"
                                    : "ForwardRef")),
                        e
                    );
                case ae:
                    return (
                        (n = e.displayName || null),
                        n !== null ? n : fe(e.type) || "Memo"
                    );
                case Ae:
                    (n = e._payload), (e = e._init);
                    try {
                        return fe(e(n));
                    } catch {}
            }
        return null;
    }
    function Re(e) {
        var n = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (n.displayName || "Context") + ".Consumer";
            case 10:
                return (n._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return (
                    (e = n.render),
                    (e = e.displayName || e.name || ""),
                    n.displayName ||
                        (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
            case 7:
                return "Fragment";
            case 5:
                return n;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return fe(n);
            case 8:
                return n === xe ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof n == "function")
                    return n.displayName || n.name || null;
                if (typeof n == "string") return n;
        }
        return null;
    }
    function Ee(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function Ie(e) {
        var n = e.type;
        return (
            (e = e.nodeName) &&
            e.toLowerCase() === "input" &&
            (n === "checkbox" || n === "radio")
        );
    }
    function Qe(e) {
        var n = Ie(e) ? "checked" : "value",
            l = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            s = "" + e[n];
        if (
            !e.hasOwnProperty(n) &&
            typeof l < "u" &&
            typeof l.get == "function" &&
            typeof l.set == "function"
        ) {
            var f = l.get,
                d = l.set;
            return (
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: function () {
                        return f.call(this);
                    },
                    set: function (v) {
                        (s = "" + v), d.call(this, v);
                    },
                }),
                Object.defineProperty(e, n, { enumerable: l.enumerable }),
                {
                    getValue: function () {
                        return s;
                    },
                    setValue: function (v) {
                        s = "" + v;
                    },
                    stopTracking: function () {
                        (e._valueTracker = null), delete e[n];
                    },
                }
            );
        }
    }
    function sn(e) {
        e._valueTracker || (e._valueTracker = Qe(e));
    }
    function tl(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var l = n.getValue(),
            s = "";
        return (
            e && (s = Ie(e) ? (e.checked ? "true" : "false") : e.value),
            (e = s),
            e !== l ? (n.setValue(e), !0) : !1
        );
    }
    function pr(e) {
        if (
            ((e = e || (typeof document < "u" ? document : void 0)),
            typeof e > "u")
        )
            return null;
        try {
            return e.activeElement || e.body;
        } catch {
            return e.body;
        }
    }
    function Zr(e, n) {
        var l = n.checked;
        return S({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: l ?? e._wrapperState.initialChecked,
        });
    }
    function ei(e, n) {
        var l = n.defaultValue == null ? "" : n.defaultValue,
            s = n.checked != null ? n.checked : n.defaultChecked;
        (l = Ee(n.value != null ? n.value : l)),
            (e._wrapperState = {
                initialChecked: s,
                initialValue: l,
                controlled:
                    n.type === "checkbox" || n.type === "radio"
                        ? n.checked != null
                        : n.value != null,
            });
    }
    function ti(e, n) {
        (n = n.checked), n != null && U(e, "checked", n, !1);
    }
    function mr(e, n) {
        ti(e, n);
        var l = Ee(n.value),
            s = n.type;
        if (l != null)
            s === "number"
                ? ((l === 0 && e.value === "") || e.value != l) &&
                  (e.value = "" + l)
                : e.value !== "" + l && (e.value = "" + l);
        else if (s === "submit" || s === "reset") {
            e.removeAttribute("value");
            return;
        }
        n.hasOwnProperty("value")
            ? gr(e, n.type, l)
            : n.hasOwnProperty("defaultValue") &&
              gr(e, n.type, Ee(n.defaultValue)),
            n.checked == null &&
                n.defaultChecked != null &&
                (e.defaultChecked = !!n.defaultChecked);
    }
    function nl(e, n, l) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var s = n.type;
            if (
                !(
                    (s !== "submit" && s !== "reset") ||
                    (n.value !== void 0 && n.value !== null)
                )
            )
                return;
            (n = "" + e._wrapperState.initialValue),
                l || n === e.value || (e.value = n),
                (e.defaultValue = n);
        }
        (l = e.name),
            l !== "" && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            l !== "" && (e.name = l);
    }
    function gr(e, n, l) {
        (n !== "number" || pr(e.ownerDocument) !== e) &&
            (l == null
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + l && (e.defaultValue = "" + l));
    }
    var vn = Array.isArray;
    function xn(e, n, l, s) {
        if (((e = e.options), n)) {
            n = {};
            for (var f = 0; f < l.length; f++) n["$" + l[f]] = !0;
            for (l = 0; l < e.length; l++)
                (f = n.hasOwnProperty("$" + e[l].value)),
                    e[l].selected !== f && (e[l].selected = f),
                    f && s && (e[l].defaultSelected = !0);
        } else {
            for (l = "" + Ee(l), n = null, f = 0; f < e.length; f++) {
                if (e[f].value === l) {
                    (e[f].selected = !0), s && (e[f].defaultSelected = !0);
                    return;
                }
                n !== null || e[f].disabled || (n = e[f]);
            }
            n !== null && (n.selected = !0);
        }
    }
    function ni(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(i(91));
        return S({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
        });
    }
    function rl(e, n) {
        var l = n.value;
        if (l == null) {
            if (((l = n.children), (n = n.defaultValue), l != null)) {
                if (n != null) throw Error(i(92));
                if (vn(l)) {
                    if (1 < l.length) throw Error(i(93));
                    l = l[0];
                }
                n = l;
            }
            n == null && (n = ""), (l = n);
        }
        e._wrapperState = { initialValue: Ee(l) };
    }
    function il(e, n) {
        var l = Ee(n.value),
            s = Ee(n.defaultValue);
        l != null &&
            ((l = "" + l),
            l !== e.value && (e.value = l),
            n.defaultValue == null &&
                e.defaultValue !== l &&
                (e.defaultValue = l)),
            s != null && (e.defaultValue = "" + s);
    }
    function ll(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue &&
            n !== "" &&
            n !== null &&
            (e.value = n);
    }
    function F(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function q(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
            ? F(n)
            : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
            ? "http://www.w3.org/1999/xhtml"
            : e;
    }
    var he,
        Ce = (function (e) {
            return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
                ? function (n, l, s, f) {
                      MSApp.execUnsafeLocalFunction(function () {
                          return e(n, l, s, f);
                      });
                  }
                : e;
        })(function (e, n) {
            if (
                e.namespaceURI !== "http://www.w3.org/2000/svg" ||
                "innerHTML" in e
            )
                e.innerHTML = n;
            else {
                for (
                    he = he || document.createElement("div"),
                        he.innerHTML =
                            "<svg>" + n.valueOf().toString() + "</svg>",
                        n = he.firstChild;
                    e.firstChild;

                )
                    e.removeChild(e.firstChild);
                for (; n.firstChild; ) e.appendChild(n.firstChild);
            }
        });
    function Te(e, n) {
        if (n) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = n;
                return;
            }
        }
        e.textContent = n;
    }
    var tt = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
        },
        an = ["Webkit", "ms", "Moz", "O"];
    Object.keys(tt).forEach(function (e) {
        an.forEach(function (n) {
            (n = n + e.charAt(0).toUpperCase() + e.substring(1)),
                (tt[n] = tt[e]);
        });
    });
    function Lt(e, n, l) {
        return n == null || typeof n == "boolean" || n === ""
            ? ""
            : l ||
              typeof n != "number" ||
              n === 0 ||
              (tt.hasOwnProperty(e) && tt[e])
            ? ("" + n).trim()
            : n + "px";
    }
    function wn(e, n) {
        e = e.style;
        for (var l in n)
            if (n.hasOwnProperty(l)) {
                var s = l.indexOf("--") === 0,
                    f = Lt(l, n[l], s);
                l === "float" && (l = "cssFloat"),
                    s ? e.setProperty(l, f) : (e[l] = f);
            }
    }
    var qn = S(
        { menuitem: !0 },
        {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
        }
    );
    function nt(e, n) {
        if (n) {
            if (
                qn[e] &&
                (n.children != null || n.dangerouslySetInnerHTML != null)
            )
                throw Error(i(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(i(60));
                if (
                    typeof n.dangerouslySetInnerHTML != "object" ||
                    !("__html" in n.dangerouslySetInnerHTML)
                )
                    throw Error(i(61));
            }
            if (n.style != null && typeof n.style != "object")
                throw Error(i(62));
        }
    }
    function $t(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
        switch (e) {
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
                return !0;
        }
    }
    var jt = null;
    function Uo(e) {
        return (
            (e = e.target || e.srcElement || window),
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        );
    }
    var Mo = null,
        yr = null,
        vr = null;
    function bu(e) {
        if ((e = Ci(e))) {
            if (typeof Mo != "function") throw Error(i(280));
            var n = e.stateNode;
            n && ((n = Nl(n)), Mo(e.stateNode, e.type, n));
        }
    }
    function _u(e) {
        yr ? (vr ? vr.push(e) : (vr = [e])) : (yr = e);
    }
    function Du() {
        if (yr) {
            var e = yr,
                n = vr;
            if (((vr = yr = null), bu(e), n))
                for (e = 0; e < n.length; e++) bu(n[e]);
        }
    }
    function Fu(e, n) {
        return e(n);
    }
    function Uu() {}
    var Bo = !1;
    function Mu(e, n, l) {
        if (Bo) return e(n, l);
        Bo = !0;
        try {
            return Fu(e, n, l);
        } finally {
            (Bo = !1), (yr !== null || vr !== null) && (Uu(), Du());
        }
    }
    function ri(e, n) {
        var l = e.stateNode;
        if (l === null) return null;
        var s = Nl(l);
        if (s === null) return null;
        l = s[n];
        e: switch (n) {
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
                (s = !s.disabled) ||
                    ((e = e.type),
                    (s = !(
                        e === "button" ||
                        e === "input" ||
                        e === "select" ||
                        e === "textarea"
                    ))),
                    (e = !s);
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (l && typeof l != "function") throw Error(i(231, n, typeof l));
        return l;
    }
    var Vo = !1;
    if (p)
        try {
            var ii = {};
            Object.defineProperty(ii, "passive", {
                get: function () {
                    Vo = !0;
                },
            }),
                window.addEventListener("test", ii, ii),
                window.removeEventListener("test", ii, ii);
        } catch {
            Vo = !1;
        }
    function sm(e, n, l, s, f, d, v, E, A) {
        var z = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(l, z);
        } catch (V) {
            this.onError(V);
        }
    }
    var li = !1,
        ol = null,
        sl = !1,
        Ho = null,
        am = {
            onError: function (e) {
                (li = !0), (ol = e);
            },
        };
    function um(e, n, l, s, f, d, v, E, A) {
        (li = !1), (ol = null), sm.apply(am, arguments);
    }
    function cm(e, n, l, s, f, d, v, E, A) {
        if ((um.apply(this, arguments), li)) {
            if (li) {
                var z = ol;
                (li = !1), (ol = null);
            } else throw Error(i(198));
            sl || ((sl = !0), (Ho = z));
        }
    }
    function Jn(e) {
        var n = e,
            l = e;
        if (e.alternate) for (; n.return; ) n = n.return;
        else {
            e = n;
            do (n = e), n.flags & 4098 && (l = n.return), (e = n.return);
            while (e);
        }
        return n.tag === 3 ? l : null;
    }
    function Bu(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (
                (n === null &&
                    ((e = e.alternate), e !== null && (n = e.memoizedState)),
                n !== null)
            )
                return n.dehydrated;
        }
        return null;
    }
    function Vu(e) {
        if (Jn(e) !== e) throw Error(i(188));
    }
    function fm(e) {
        var n = e.alternate;
        if (!n) {
            if (((n = Jn(e)), n === null)) throw Error(i(188));
            return n !== e ? null : e;
        }
        for (var l = e, s = n; ; ) {
            var f = l.return;
            if (f === null) break;
            var d = f.alternate;
            if (d === null) {
                if (((s = f.return), s !== null)) {
                    l = s;
                    continue;
                }
                break;
            }
            if (f.child === d.child) {
                for (d = f.child; d; ) {
                    if (d === l) return Vu(f), e;
                    if (d === s) return Vu(f), n;
                    d = d.sibling;
                }
                throw Error(i(188));
            }
            if (l.return !== s.return) (l = f), (s = d);
            else {
                for (var v = !1, E = f.child; E; ) {
                    if (E === l) {
                        (v = !0), (l = f), (s = d);
                        break;
                    }
                    if (E === s) {
                        (v = !0), (s = f), (l = d);
                        break;
                    }
                    E = E.sibling;
                }
                if (!v) {
                    for (E = d.child; E; ) {
                        if (E === l) {
                            (v = !0), (l = d), (s = f);
                            break;
                        }
                        if (E === s) {
                            (v = !0), (s = d), (l = f);
                            break;
                        }
                        E = E.sibling;
                    }
                    if (!v) throw Error(i(189));
                }
            }
            if (l.alternate !== s) throw Error(i(190));
        }
        if (l.tag !== 3) throw Error(i(188));
        return l.stateNode.current === l ? e : n;
    }
    function Hu(e) {
        return (e = fm(e)), e !== null ? Wu(e) : null;
    }
    function Wu(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
            var n = Wu(e);
            if (n !== null) return n;
            e = e.sibling;
        }
        return null;
    }
    var Xu = r.unstable_scheduleCallback,
        Qu = r.unstable_cancelCallback,
        dm = r.unstable_shouldYield,
        hm = r.unstable_requestPaint,
        We = r.unstable_now,
        pm = r.unstable_getCurrentPriorityLevel,
        Wo = r.unstable_ImmediatePriority,
        Yu = r.unstable_UserBlockingPriority,
        al = r.unstable_NormalPriority,
        mm = r.unstable_LowPriority,
        qu = r.unstable_IdlePriority,
        ul = null,
        Kt = null;
    function gm(e) {
        if (Kt && typeof Kt.onCommitFiberRoot == "function")
            try {
                Kt.onCommitFiberRoot(
                    ul,
                    e,
                    void 0,
                    (e.current.flags & 128) === 128
                );
            } catch {}
    }
    var Vt = Math.clz32 ? Math.clz32 : xm,
        ym = Math.log,
        vm = Math.LN2;
    function xm(e) {
        return (e >>>= 0), e === 0 ? 32 : (31 - ((ym(e) / vm) | 0)) | 0;
    }
    var cl = 64,
        fl = 4194304;
    function oi(e) {
        switch (e & -e) {
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
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function dl(e, n) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var s = 0,
            f = e.suspendedLanes,
            d = e.pingedLanes,
            v = l & 268435455;
        if (v !== 0) {
            var E = v & ~f;
            E !== 0 ? (s = oi(E)) : ((d &= v), d !== 0 && (s = oi(d)));
        } else (v = l & ~f), v !== 0 ? (s = oi(v)) : d !== 0 && (s = oi(d));
        if (s === 0) return 0;
        if (
            n !== 0 &&
            n !== s &&
            !(n & f) &&
            ((f = s & -s),
            (d = n & -n),
            f >= d || (f === 16 && (d & 4194240) !== 0))
        )
            return n;
        if ((s & 4 && (s |= l & 16), (n = e.entangledLanes), n !== 0))
            for (e = e.entanglements, n &= s; 0 < n; )
                (l = 31 - Vt(n)), (f = 1 << l), (s |= e[l]), (n &= ~f);
        return s;
    }
    function wm(e, n) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function km(e, n) {
        for (
            var l = e.suspendedLanes,
                s = e.pingedLanes,
                f = e.expirationTimes,
                d = e.pendingLanes;
            0 < d;

        ) {
            var v = 31 - Vt(d),
                E = 1 << v,
                A = f[v];
            A === -1
                ? (!(E & l) || E & s) && (f[v] = wm(E, n))
                : A <= n && (e.expiredLanes |= E),
                (d &= ~E);
        }
    }
    function Xo(e) {
        return (
            (e = e.pendingLanes & -1073741825),
            e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
        );
    }
    function Ju() {
        var e = cl;
        return (cl <<= 1), !(cl & 4194240) && (cl = 64), e;
    }
    function Qo(e) {
        for (var n = [], l = 0; 31 > l; l++) n.push(e);
        return n;
    }
    function si(e, n, l) {
        (e.pendingLanes |= n),
            n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            (e = e.eventTimes),
            (n = 31 - Vt(n)),
            (e[n] = l);
    }
    function Sm(e, n) {
        var l = e.pendingLanes & ~n;
        (e.pendingLanes = n),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= n),
            (e.mutableReadLanes &= n),
            (e.entangledLanes &= n),
            (n = e.entanglements);
        var s = e.eventTimes;
        for (e = e.expirationTimes; 0 < l; ) {
            var f = 31 - Vt(l),
                d = 1 << f;
            (n[f] = 0), (s[f] = -1), (e[f] = -1), (l &= ~d);
        }
    }
    function Yo(e, n) {
        var l = (e.entangledLanes |= n);
        for (e = e.entanglements; l; ) {
            var s = 31 - Vt(l),
                f = 1 << s;
            (f & n) | (e[s] & n) && (e[s] |= n), (l &= ~f);
        }
    }
    var Le = 0;
    function $u(e) {
        return (
            (e &= -e),
            1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
        );
    }
    var Ku,
        qo,
        Gu,
        Zu,
        ec,
        Jo = !1,
        hl = [],
        kn = null,
        Sn = null,
        En = null,
        ai = new Map(),
        ui = new Map(),
        Cn = [],
        Em =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " "
            );
    function tc(e, n) {
        switch (e) {
            case "focusin":
            case "focusout":
                kn = null;
                break;
            case "dragenter":
            case "dragleave":
                Sn = null;
                break;
            case "mouseover":
            case "mouseout":
                En = null;
                break;
            case "pointerover":
            case "pointerout":
                ai.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ui.delete(n.pointerId);
        }
    }
    function ci(e, n, l, s, f, d) {
        return e === null || e.nativeEvent !== d
            ? ((e = {
                  blockedOn: n,
                  domEventName: l,
                  eventSystemFlags: s,
                  nativeEvent: d,
                  targetContainers: [f],
              }),
              n !== null && ((n = Ci(n)), n !== null && qo(n)),
              e)
            : ((e.eventSystemFlags |= s),
              (n = e.targetContainers),
              f !== null && n.indexOf(f) === -1 && n.push(f),
              e);
    }
    function Cm(e, n, l, s, f) {
        switch (n) {
            case "focusin":
                return (kn = ci(kn, e, n, l, s, f)), !0;
            case "dragenter":
                return (Sn = ci(Sn, e, n, l, s, f)), !0;
            case "mouseover":
                return (En = ci(En, e, n, l, s, f)), !0;
            case "pointerover":
                var d = f.pointerId;
                return ai.set(d, ci(ai.get(d) || null, e, n, l, s, f)), !0;
            case "gotpointercapture":
                return (
                    (d = f.pointerId),
                    ui.set(d, ci(ui.get(d) || null, e, n, l, s, f)),
                    !0
                );
        }
        return !1;
    }
    function nc(e) {
        var n = $n(e.target);
        if (n !== null) {
            var l = Jn(n);
            if (l !== null) {
                if (((n = l.tag), n === 13)) {
                    if (((n = Bu(l)), n !== null)) {
                        (e.blockedOn = n),
                            ec(e.priority, function () {
                                Gu(l);
                            });
                        return;
                    }
                } else if (
                    n === 3 &&
                    l.stateNode.current.memoizedState.isDehydrated
                ) {
                    e.blockedOn =
                        l.tag === 3 ? l.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function pl(e) {
        if (e.blockedOn !== null) return !1;
        for (var n = e.targetContainers; 0 < n.length; ) {
            var l = Ko(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var s = new l.constructor(l.type, l);
                (jt = s), l.target.dispatchEvent(s), (jt = null);
            } else
                return (n = Ci(l)), n !== null && qo(n), (e.blockedOn = l), !1;
            n.shift();
        }
        return !0;
    }
    function rc(e, n, l) {
        pl(e) && l.delete(n);
    }
    function jm() {
        (Jo = !1),
            kn !== null && pl(kn) && (kn = null),
            Sn !== null && pl(Sn) && (Sn = null),
            En !== null && pl(En) && (En = null),
            ai.forEach(rc),
            ui.forEach(rc);
    }
    function fi(e, n) {
        e.blockedOn === n &&
            ((e.blockedOn = null),
            Jo ||
                ((Jo = !0),
                r.unstable_scheduleCallback(r.unstable_NormalPriority, jm)));
    }
    function di(e) {
        function n(f) {
            return fi(f, e);
        }
        if (0 < hl.length) {
            fi(hl[0], e);
            for (var l = 1; l < hl.length; l++) {
                var s = hl[l];
                s.blockedOn === e && (s.blockedOn = null);
            }
        }
        for (
            kn !== null && fi(kn, e),
                Sn !== null && fi(Sn, e),
                En !== null && fi(En, e),
                ai.forEach(n),
                ui.forEach(n),
                l = 0;
            l < Cn.length;
            l++
        )
            (s = Cn[l]), s.blockedOn === e && (s.blockedOn = null);
        for (; 0 < Cn.length && ((l = Cn[0]), l.blockedOn === null); )
            nc(l), l.blockedOn === null && Cn.shift();
    }
    var xr = J.ReactCurrentBatchConfig,
        ml = !0;
    function Am(e, n, l, s) {
        var f = Le,
            d = xr.transition;
        xr.transition = null;
        try {
            (Le = 1), $o(e, n, l, s);
        } finally {
            (Le = f), (xr.transition = d);
        }
    }
    function Tm(e, n, l, s) {
        var f = Le,
            d = xr.transition;
        xr.transition = null;
        try {
            (Le = 4), $o(e, n, l, s);
        } finally {
            (Le = f), (xr.transition = d);
        }
    }
    function $o(e, n, l, s) {
        if (ml) {
            var f = Ko(e, n, l, s);
            if (f === null) ps(e, n, s, gl, l), tc(e, s);
            else if (Cm(f, e, n, l, s)) s.stopPropagation();
            else if ((tc(e, s), n & 4 && -1 < Em.indexOf(e))) {
                for (; f !== null; ) {
                    var d = Ci(f);
                    if (
                        (d !== null && Ku(d),
                        (d = Ko(e, n, l, s)),
                        d === null && ps(e, n, s, gl, l),
                        d === f)
                    )
                        break;
                    f = d;
                }
                f !== null && s.stopPropagation();
            } else ps(e, n, s, null, l);
        }
    }
    var gl = null;
    function Ko(e, n, l, s) {
        if (((gl = null), (e = Uo(s)), (e = $n(e)), e !== null))
            if (((n = Jn(e)), n === null)) e = null;
            else if (((l = n.tag), l === 13)) {
                if (((e = Bu(n)), e !== null)) return e;
                e = null;
            } else if (l === 3) {
                if (n.stateNode.current.memoizedState.isDehydrated)
                    return n.tag === 3 ? n.stateNode.containerInfo : null;
                e = null;
            } else n !== e && (e = null);
        return (gl = e), null;
    }
    function ic(e) {
        switch (e) {
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
                return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (pm()) {
                    case Wo:
                        return 1;
                    case Yu:
                        return 4;
                    case al:
                    case mm:
                        return 16;
                    case qu:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var jn = null,
        Go = null,
        yl = null;
    function lc() {
        if (yl) return yl;
        var e,
            n = Go,
            l = n.length,
            s,
            f = "value" in jn ? jn.value : jn.textContent,
            d = f.length;
        for (e = 0; e < l && n[e] === f[e]; e++);
        var v = l - e;
        for (s = 1; s <= v && n[l - s] === f[d - s]; s++);
        return (yl = f.slice(e, 1 < s ? 1 - s : void 0));
    }
    function vl(e) {
        var n = e.keyCode;
        return (
            "charCode" in e
                ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
                : (e = n),
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        );
    }
    function xl() {
        return !0;
    }
    function oc() {
        return !1;
    }
    function At(e) {
        function n(l, s, f, d, v) {
            (this._reactName = l),
                (this._targetInst = f),
                (this.type = s),
                (this.nativeEvent = d),
                (this.target = v),
                (this.currentTarget = null);
            for (var E in e)
                e.hasOwnProperty(E) &&
                    ((l = e[E]), (this[E] = l ? l(d) : d[E]));
            return (
                (this.isDefaultPrevented = (
                    d.defaultPrevented != null
                        ? d.defaultPrevented
                        : d.returnValue === !1
                )
                    ? xl
                    : oc),
                (this.isPropagationStopped = oc),
                this
            );
        }
        return (
            S(n.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l &&
                        (l.preventDefault
                            ? l.preventDefault()
                            : typeof l.returnValue != "unknown" &&
                              (l.returnValue = !1),
                        (this.isDefaultPrevented = xl));
                },
                stopPropagation: function () {
                    var l = this.nativeEvent;
                    l &&
                        (l.stopPropagation
                            ? l.stopPropagation()
                            : typeof l.cancelBubble != "unknown" &&
                              (l.cancelBubble = !0),
                        (this.isPropagationStopped = xl));
                },
                persist: function () {},
                isPersistent: xl,
            }),
            n
        );
    }
    var wr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Zo = At(wr),
        hi = S({}, wr, { view: 0, detail: 0 }),
        Nm = At(hi),
        es,
        ts,
        pi,
        wl = S({}, hi, {
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
            getModifierState: rs,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
                return e.relatedTarget === void 0
                    ? e.fromElement === e.srcElement
                        ? e.toElement
                        : e.fromElement
                    : e.relatedTarget;
            },
            movementX: function (e) {
                return "movementX" in e
                    ? e.movementX
                    : (e !== pi &&
                          (pi && e.type === "mousemove"
                              ? ((es = e.screenX - pi.screenX),
                                (ts = e.screenY - pi.screenY))
                              : (ts = es = 0),
                          (pi = e)),
                      es);
            },
            movementY: function (e) {
                return "movementY" in e ? e.movementY : ts;
            },
        }),
        sc = At(wl),
        Rm = S({}, wl, { dataTransfer: 0 }),
        Pm = At(Rm),
        Im = S({}, hi, { relatedTarget: 0 }),
        ns = At(Im),
        Om = S({}, wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Lm = At(Om),
        zm = S({}, wr, {
            clipboardData: function (e) {
                return "clipboardData" in e
                    ? e.clipboardData
                    : window.clipboardData;
            },
        }),
        bm = At(zm),
        _m = S({}, wr, { data: 0 }),
        ac = At(_m),
        Dm = {
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
            MozPrintableKey: "Unidentified",
        },
        Fm = {
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
            224: "Meta",
        },
        Um = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function Mm(e) {
        var n = this.nativeEvent;
        return n.getModifierState
            ? n.getModifierState(e)
            : (e = Um[e])
            ? !!n[e]
            : !1;
    }
    function rs() {
        return Mm;
    }
    var Bm = S({}, hi, {
            key: function (e) {
                if (e.key) {
                    var n = Dm[e.key] || e.key;
                    if (n !== "Unidentified") return n;
                }
                return e.type === "keypress"
                    ? ((e = vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                    : e.type === "keydown" || e.type === "keyup"
                    ? Fm[e.keyCode] || "Unidentified"
                    : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: rs,
            charCode: function (e) {
                return e.type === "keypress" ? vl(e) : 0;
            },
            keyCode: function (e) {
                return e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
            which: function (e) {
                return e.type === "keypress"
                    ? vl(e)
                    : e.type === "keydown" || e.type === "keyup"
                    ? e.keyCode
                    : 0;
            },
        }),
        Vm = At(Bm),
        Hm = S({}, wl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        uc = At(Hm),
        Wm = S({}, hi, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: rs,
        }),
        Xm = At(Wm),
        Qm = S({}, wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        Ym = At(Qm),
        qm = S({}, wl, {
            deltaX: function (e) {
                return "deltaX" in e
                    ? e.deltaX
                    : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
            },
            deltaY: function (e) {
                return "deltaY" in e
                    ? e.deltaY
                    : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        Jm = At(qm),
        $m = [9, 13, 27, 32],
        is = p && "CompositionEvent" in window,
        mi = null;
    p && "documentMode" in document && (mi = document.documentMode);
    var Km = p && "TextEvent" in window && !mi,
        cc = p && (!is || (mi && 8 < mi && 11 >= mi)),
        fc = " ",
        dc = !1;
    function hc(e, n) {
        switch (e) {
            case "keyup":
                return $m.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function pc(e) {
        return (
            (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
        );
    }
    var kr = !1;
    function Gm(e, n) {
        switch (e) {
            case "compositionend":
                return pc(n);
            case "keypress":
                return n.which !== 32 ? null : ((dc = !0), fc);
            case "textInput":
                return (e = n.data), e === fc && dc ? null : e;
            default:
                return null;
        }
    }
    function Zm(e, n) {
        if (kr)
            return e === "compositionend" || (!is && hc(e, n))
                ? ((e = lc()), (yl = Go = jn = null), (kr = !1), e)
                : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(n.ctrlKey || n.altKey || n.metaKey) ||
                    (n.ctrlKey && n.altKey)
                ) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
                }
                return null;
            case "compositionend":
                return cc && n.locale !== "ko" ? null : n.data;
            default:
                return null;
        }
    }
    var eg = {
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
        week: !0,
    };
    function mc(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!eg[e.type] : n === "textarea";
    }
    function gc(e, n, l, s) {
        _u(s),
            (n = jl(n, "onChange")),
            0 < n.length &&
                ((l = new Zo("onChange", "change", null, l, s)),
                e.push({ event: l, listeners: n }));
    }
    var gi = null,
        yi = null;
    function tg(e) {
        zc(e, 0);
    }
    function kl(e) {
        var n = Ar(e);
        if (tl(n)) return e;
    }
    function ng(e, n) {
        if (e === "change") return n;
    }
    var yc = !1;
    if (p) {
        var ls;
        if (p) {
            var os = "oninput" in document;
            if (!os) {
                var vc = document.createElement("div");
                vc.setAttribute("oninput", "return;"),
                    (os = typeof vc.oninput == "function");
            }
            ls = os;
        } else ls = !1;
        yc = ls && (!document.documentMode || 9 < document.documentMode);
    }
    function xc() {
        gi && (gi.detachEvent("onpropertychange", wc), (yi = gi = null));
    }
    function wc(e) {
        if (e.propertyName === "value" && kl(yi)) {
            var n = [];
            gc(n, yi, e, Uo(e)), Mu(tg, n);
        }
    }
    function rg(e, n, l) {
        e === "focusin"
            ? (xc(), (gi = n), (yi = l), gi.attachEvent("onpropertychange", wc))
            : e === "focusout" && xc();
    }
    function ig(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return kl(yi);
    }
    function lg(e, n) {
        if (e === "click") return kl(n);
    }
    function og(e, n) {
        if (e === "input" || e === "change") return kl(n);
    }
    function sg(e, n) {
        return (
            (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n)
        );
    }
    var Ht = typeof Object.is == "function" ? Object.is : sg;
    function vi(e, n) {
        if (Ht(e, n)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof n != "object" ||
            n === null
        )
            return !1;
        var l = Object.keys(e),
            s = Object.keys(n);
        if (l.length !== s.length) return !1;
        for (s = 0; s < l.length; s++) {
            var f = l[s];
            if (!g.call(n, f) || !Ht(e[f], n[f])) return !1;
        }
        return !0;
    }
    function kc(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
    }
    function Sc(e, n) {
        var l = kc(e);
        e = 0;
        for (var s; l; ) {
            if (l.nodeType === 3) {
                if (((s = e + l.textContent.length), e <= n && s >= n))
                    return { node: l, offset: n - e };
                e = s;
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e;
                    }
                    l = l.parentNode;
                }
                l = void 0;
            }
            l = kc(l);
        }
    }
    function Ec(e, n) {
        return e && n
            ? e === n
                ? !0
                : e && e.nodeType === 3
                ? !1
                : n && n.nodeType === 3
                ? Ec(e, n.parentNode)
                : "contains" in e
                ? e.contains(n)
                : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
            : !1;
    }
    function Cc() {
        for (var e = window, n = pr(); n instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof n.contentWindow.location.href == "string";
            } catch {
                l = !1;
            }
            if (l) e = n.contentWindow;
            else break;
            n = pr(e.document);
        }
        return n;
    }
    function ss(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return (
            n &&
            ((n === "input" &&
                (e.type === "text" ||
                    e.type === "search" ||
                    e.type === "tel" ||
                    e.type === "url" ||
                    e.type === "password")) ||
                n === "textarea" ||
                e.contentEditable === "true")
        );
    }
    function ag(e) {
        var n = Cc(),
            l = e.focusedElem,
            s = e.selectionRange;
        if (
            n !== l &&
            l &&
            l.ownerDocument &&
            Ec(l.ownerDocument.documentElement, l)
        ) {
            if (s !== null && ss(l)) {
                if (
                    ((n = s.start),
                    (e = s.end),
                    e === void 0 && (e = n),
                    "selectionStart" in l)
                )
                    (l.selectionStart = n),
                        (l.selectionEnd = Math.min(e, l.value.length));
                else if (
                    ((e =
                        ((n = l.ownerDocument || document) && n.defaultView) ||
                        window),
                    e.getSelection)
                ) {
                    e = e.getSelection();
                    var f = l.textContent.length,
                        d = Math.min(s.start, f);
                    (s = s.end === void 0 ? d : Math.min(s.end, f)),
                        !e.extend && d > s && ((f = s), (s = d), (d = f)),
                        (f = Sc(l, d));
                    var v = Sc(l, s);
                    f &&
                        v &&
                        (e.rangeCount !== 1 ||
                            e.anchorNode !== f.node ||
                            e.anchorOffset !== f.offset ||
                            e.focusNode !== v.node ||
                            e.focusOffset !== v.offset) &&
                        ((n = n.createRange()),
                        n.setStart(f.node, f.offset),
                        e.removeAllRanges(),
                        d > s
                            ? (e.addRange(n), e.extend(v.node, v.offset))
                            : (n.setEnd(v.node, v.offset), e.addRange(n)));
                }
            }
            for (n = [], e = l; (e = e.parentNode); )
                e.nodeType === 1 &&
                    n.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop,
                    });
            for (
                typeof l.focus == "function" && l.focus(), l = 0;
                l < n.length;
                l++
            )
                (e = n[l]),
                    (e.element.scrollLeft = e.left),
                    (e.element.scrollTop = e.top);
        }
    }
    var ug = p && "documentMode" in document && 11 >= document.documentMode,
        Sr = null,
        as = null,
        xi = null,
        us = !1;
    function jc(e, n, l) {
        var s =
            l.window === l
                ? l.document
                : l.nodeType === 9
                ? l
                : l.ownerDocument;
        us ||
            Sr == null ||
            Sr !== pr(s) ||
            ((s = Sr),
            "selectionStart" in s && ss(s)
                ? (s = { start: s.selectionStart, end: s.selectionEnd })
                : ((s = (
                      (s.ownerDocument && s.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (s = {
                      anchorNode: s.anchorNode,
                      anchorOffset: s.anchorOffset,
                      focusNode: s.focusNode,
                      focusOffset: s.focusOffset,
                  })),
            (xi && vi(xi, s)) ||
                ((xi = s),
                (s = jl(as, "onSelect")),
                0 < s.length &&
                    ((n = new Zo("onSelect", "select", null, n, l)),
                    e.push({ event: n, listeners: s }),
                    (n.target = Sr))));
    }
    function Sl(e, n) {
        var l = {};
        return (
            (l[e.toLowerCase()] = n.toLowerCase()),
            (l["Webkit" + e] = "webkit" + n),
            (l["Moz" + e] = "moz" + n),
            l
        );
    }
    var Er = {
            animationend: Sl("Animation", "AnimationEnd"),
            animationiteration: Sl("Animation", "AnimationIteration"),
            animationstart: Sl("Animation", "AnimationStart"),
            transitionend: Sl("Transition", "TransitionEnd"),
        },
        cs = {},
        Ac = {};
    p &&
        ((Ac = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete Er.animationend.animation,
            delete Er.animationiteration.animation,
            delete Er.animationstart.animation),
        "TransitionEvent" in window || delete Er.transitionend.transition);
    function El(e) {
        if (cs[e]) return cs[e];
        if (!Er[e]) return e;
        var n = Er[e],
            l;
        for (l in n) if (n.hasOwnProperty(l) && l in Ac) return (cs[e] = n[l]);
        return e;
    }
    var Tc = El("animationend"),
        Nc = El("animationiteration"),
        Rc = El("animationstart"),
        Pc = El("transitionend"),
        Ic = new Map(),
        Oc =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " "
            );
    function An(e, n) {
        Ic.set(e, n), u(n, [e]);
    }
    for (var fs = 0; fs < Oc.length; fs++) {
        var ds = Oc[fs],
            cg = ds.toLowerCase(),
            fg = ds[0].toUpperCase() + ds.slice(1);
        An(cg, "on" + fg);
    }
    An(Tc, "onAnimationEnd"),
        An(Nc, "onAnimationIteration"),
        An(Rc, "onAnimationStart"),
        An("dblclick", "onDoubleClick"),
        An("focusin", "onFocus"),
        An("focusout", "onBlur"),
        An(Pc, "onTransitionEnd"),
        c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " "
            )
        ),
        u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        ),
        u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " "
            )
        );
    var wi =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        dg = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(wi)
        );
    function Lc(e, n, l) {
        var s = e.type || "unknown-event";
        (e.currentTarget = l), cm(s, n, void 0, e), (e.currentTarget = null);
    }
    function zc(e, n) {
        n = (n & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var s = e[l],
                f = s.event;
            s = s.listeners;
            e: {
                var d = void 0;
                if (n)
                    for (var v = s.length - 1; 0 <= v; v--) {
                        var E = s[v],
                            A = E.instance,
                            z = E.currentTarget;
                        if (
                            ((E = E.listener),
                            A !== d && f.isPropagationStopped())
                        )
                            break e;
                        Lc(f, E, z), (d = A);
                    }
                else
                    for (v = 0; v < s.length; v++) {
                        if (
                            ((E = s[v]),
                            (A = E.instance),
                            (z = E.currentTarget),
                            (E = E.listener),
                            A !== d && f.isPropagationStopped())
                        )
                            break e;
                        Lc(f, E, z), (d = A);
                    }
            }
        }
        if (sl) throw ((e = Ho), (sl = !1), (Ho = null), e);
    }
    function De(e, n) {
        var l = n[ws];
        l === void 0 && (l = n[ws] = new Set());
        var s = e + "__bubble";
        l.has(s) || (bc(n, e, 2, !1), l.add(s));
    }
    function hs(e, n, l) {
        var s = 0;
        n && (s |= 4), bc(l, e, s, n);
    }
    var Cl = "_reactListening" + Math.random().toString(36).slice(2);
    function ki(e) {
        if (!e[Cl]) {
            (e[Cl] = !0),
                o.forEach(function (l) {
                    l !== "selectionchange" &&
                        (dg.has(l) || hs(l, !1, e), hs(l, !0, e));
                });
            var n = e.nodeType === 9 ? e : e.ownerDocument;
            n === null || n[Cl] || ((n[Cl] = !0), hs("selectionchange", !1, n));
        }
    }
    function bc(e, n, l, s) {
        switch (ic(n)) {
            case 1:
                var f = Am;
                break;
            case 4:
                f = Tm;
                break;
            default:
                f = $o;
        }
        (l = f.bind(null, n, l, e)),
            (f = void 0),
            !Vo ||
                (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
                (f = !0),
            s
                ? f !== void 0
                    ? e.addEventListener(n, l, { capture: !0, passive: f })
                    : e.addEventListener(n, l, !0)
                : f !== void 0
                ? e.addEventListener(n, l, { passive: f })
                : e.addEventListener(n, l, !1);
    }
    function ps(e, n, l, s, f) {
        var d = s;
        if (!(n & 1) && !(n & 2) && s !== null)
            e: for (;;) {
                if (s === null) return;
                var v = s.tag;
                if (v === 3 || v === 4) {
                    var E = s.stateNode.containerInfo;
                    if (E === f || (E.nodeType === 8 && E.parentNode === f))
                        break;
                    if (v === 4)
                        for (v = s.return; v !== null; ) {
                            var A = v.tag;
                            if (
                                (A === 3 || A === 4) &&
                                ((A = v.stateNode.containerInfo),
                                A === f ||
                                    (A.nodeType === 8 && A.parentNode === f))
                            )
                                return;
                            v = v.return;
                        }
                    for (; E !== null; ) {
                        if (((v = $n(E)), v === null)) return;
                        if (((A = v.tag), A === 5 || A === 6)) {
                            s = d = v;
                            continue e;
                        }
                        E = E.parentNode;
                    }
                }
                s = s.return;
            }
        Mu(function () {
            var z = d,
                V = Uo(l),
                H = [];
            e: {
                var B = Ic.get(e);
                if (B !== void 0) {
                    var K = Zo,
                        ne = e;
                    switch (e) {
                        case "keypress":
                            if (vl(l) === 0) break e;
                        case "keydown":
                        case "keyup":
                            K = Vm;
                            break;
                        case "focusin":
                            (ne = "focus"), (K = ns);
                            break;
                        case "focusout":
                            (ne = "blur"), (K = ns);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            K = ns;
                            break;
                        case "click":
                            if (l.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            K = sc;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            K = Pm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            K = Xm;
                            break;
                        case Tc:
                        case Nc:
                        case Rc:
                            K = Lm;
                            break;
                        case Pc:
                            K = Ym;
                            break;
                        case "scroll":
                            K = Nm;
                            break;
                        case "wheel":
                            K = Jm;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            K = bm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            K = uc;
                    }
                    var re = (n & 4) !== 0,
                        Xe = !re && e === "scroll",
                        I = re ? (B !== null ? B + "Capture" : null) : B;
                    re = [];
                    for (var N = z, O; N !== null; ) {
                        O = N;
                        var Q = O.stateNode;
                        if (
                            (O.tag === 5 &&
                                Q !== null &&
                                ((O = Q),
                                I !== null &&
                                    ((Q = ri(N, I)),
                                    Q != null && re.push(Si(N, Q, O)))),
                            Xe)
                        )
                            break;
                        N = N.return;
                    }
                    0 < re.length &&
                        ((B = new K(B, ne, null, l, V)),
                        H.push({ event: B, listeners: re }));
                }
            }
            if (!(n & 7)) {
                e: {
                    if (
                        ((B = e === "mouseover" || e === "pointerover"),
                        (K = e === "mouseout" || e === "pointerout"),
                        B &&
                            l !== jt &&
                            (ne = l.relatedTarget || l.fromElement) &&
                            ($n(ne) || ne[un]))
                    )
                        break e;
                    if (
                        (K || B) &&
                        ((B =
                            V.window === V
                                ? V
                                : (B = V.ownerDocument)
                                ? B.defaultView || B.parentWindow
                                : window),
                        K
                            ? ((ne = l.relatedTarget || l.toElement),
                              (K = z),
                              (ne = ne ? $n(ne) : null),
                              ne !== null &&
                                  ((Xe = Jn(ne)),
                                  ne !== Xe ||
                                      (ne.tag !== 5 && ne.tag !== 6)) &&
                                  (ne = null))
                            : ((K = null), (ne = z)),
                        K !== ne)
                    ) {
                        if (
                            ((re = sc),
                            (Q = "onMouseLeave"),
                            (I = "onMouseEnter"),
                            (N = "mouse"),
                            (e === "pointerout" || e === "pointerover") &&
                                ((re = uc),
                                (Q = "onPointerLeave"),
                                (I = "onPointerEnter"),
                                (N = "pointer")),
                            (Xe = K == null ? B : Ar(K)),
                            (O = ne == null ? B : Ar(ne)),
                            (B = new re(Q, N + "leave", K, l, V)),
                            (B.target = Xe),
                            (B.relatedTarget = O),
                            (Q = null),
                            $n(V) === z &&
                                ((re = new re(I, N + "enter", ne, l, V)),
                                (re.target = O),
                                (re.relatedTarget = Xe),
                                (Q = re)),
                            (Xe = Q),
                            K && ne)
                        )
                            t: {
                                for (
                                    re = K, I = ne, N = 0, O = re;
                                    O;
                                    O = Cr(O)
                                )
                                    N++;
                                for (O = 0, Q = I; Q; Q = Cr(Q)) O++;
                                for (; 0 < N - O; ) (re = Cr(re)), N--;
                                for (; 0 < O - N; ) (I = Cr(I)), O--;
                                for (; N--; ) {
                                    if (
                                        re === I ||
                                        (I !== null && re === I.alternate)
                                    )
                                        break t;
                                    (re = Cr(re)), (I = Cr(I));
                                }
                                re = null;
                            }
                        else re = null;
                        K !== null && _c(H, B, K, re, !1),
                            ne !== null && Xe !== null && _c(H, Xe, ne, re, !0);
                    }
                }
                e: {
                    if (
                        ((B = z ? Ar(z) : window),
                        (K = B.nodeName && B.nodeName.toLowerCase()),
                        K === "select" || (K === "input" && B.type === "file"))
                    )
                        var le = ng;
                    else if (mc(B))
                        if (yc) le = og;
                        else {
                            le = ig;
                            var ue = rg;
                        }
                    else
                        (K = B.nodeName) &&
                            K.toLowerCase() === "input" &&
                            (B.type === "checkbox" || B.type === "radio") &&
                            (le = lg);
                    if (le && (le = le(e, z))) {
                        gc(H, le, l, V);
                        break e;
                    }
                    ue && ue(e, B, z),
                        e === "focusout" &&
                            (ue = B._wrapperState) &&
                            ue.controlled &&
                            B.type === "number" &&
                            gr(B, "number", B.value);
                }
                switch (((ue = z ? Ar(z) : window), e)) {
                    case "focusin":
                        (mc(ue) || ue.contentEditable === "true") &&
                            ((Sr = ue), (as = z), (xi = null));
                        break;
                    case "focusout":
                        xi = as = Sr = null;
                        break;
                    case "mousedown":
                        us = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (us = !1), jc(H, l, V);
                        break;
                    case "selectionchange":
                        if (ug) break;
                    case "keydown":
                    case "keyup":
                        jc(H, l, V);
                }
                var ce;
                if (is)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var pe = "onCompositionStart";
                                break e;
                            case "compositionend":
                                pe = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                pe = "onCompositionUpdate";
                                break e;
                        }
                        pe = void 0;
                    }
                else
                    kr
                        ? hc(e, l) && (pe = "onCompositionEnd")
                        : e === "keydown" &&
                          l.keyCode === 229 &&
                          (pe = "onCompositionStart");
                pe &&
                    (cc &&
                        l.locale !== "ko" &&
                        (kr || pe !== "onCompositionStart"
                            ? pe === "onCompositionEnd" && kr && (ce = lc())
                            : ((jn = V),
                              (Go = "value" in jn ? jn.value : jn.textContent),
                              (kr = !0))),
                    (ue = jl(z, pe)),
                    0 < ue.length &&
                        ((pe = new ac(pe, e, null, l, V)),
                        H.push({ event: pe, listeners: ue }),
                        ce
                            ? (pe.data = ce)
                            : ((ce = pc(l)), ce !== null && (pe.data = ce)))),
                    (ce = Km ? Gm(e, l) : Zm(e, l)) &&
                        ((z = jl(z, "onBeforeInput")),
                        0 < z.length &&
                            ((V = new ac(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                l,
                                V
                            )),
                            H.push({ event: V, listeners: z }),
                            (V.data = ce)));
            }
            zc(H, n);
        });
    }
    function Si(e, n, l) {
        return { instance: e, listener: n, currentTarget: l };
    }
    function jl(e, n) {
        for (var l = n + "Capture", s = []; e !== null; ) {
            var f = e,
                d = f.stateNode;
            f.tag === 5 &&
                d !== null &&
                ((f = d),
                (d = ri(e, l)),
                d != null && s.unshift(Si(e, d, f)),
                (d = ri(e, n)),
                d != null && s.push(Si(e, d, f))),
                (e = e.return);
        }
        return s;
    }
    function Cr(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function _c(e, n, l, s, f) {
        for (var d = n._reactName, v = []; l !== null && l !== s; ) {
            var E = l,
                A = E.alternate,
                z = E.stateNode;
            if (A !== null && A === s) break;
            E.tag === 5 &&
                z !== null &&
                ((E = z),
                f
                    ? ((A = ri(l, d)), A != null && v.unshift(Si(l, A, E)))
                    : f || ((A = ri(l, d)), A != null && v.push(Si(l, A, E)))),
                (l = l.return);
        }
        v.length !== 0 && e.push({ event: n, listeners: v });
    }
    var hg = /\r\n?/g,
        pg = /\u0000|\uFFFD/g;
    function Dc(e) {
        return (typeof e == "string" ? e : "" + e)
            .replace(
                hg,
                `
`
            )
            .replace(pg, "");
    }
    function Al(e, n, l) {
        if (((n = Dc(n)), Dc(e) !== n && l)) throw Error(i(425));
    }
    function Tl() {}
    var ms = null,
        gs = null;
    function ys(e, n) {
        return (
            e === "textarea" ||
            e === "noscript" ||
            typeof n.children == "string" ||
            typeof n.children == "number" ||
            (typeof n.dangerouslySetInnerHTML == "object" &&
                n.dangerouslySetInnerHTML !== null &&
                n.dangerouslySetInnerHTML.__html != null)
        );
    }
    var vs = typeof setTimeout == "function" ? setTimeout : void 0,
        mg = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Fc = typeof Promise == "function" ? Promise : void 0,
        gg =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Fc < "u"
                ? function (e) {
                      return Fc.resolve(null).then(e).catch(yg);
                  }
                : vs;
    function yg(e) {
        setTimeout(function () {
            throw e;
        });
    }
    function xs(e, n) {
        var l = n,
            s = 0;
        do {
            var f = l.nextSibling;
            if ((e.removeChild(l), f && f.nodeType === 8))
                if (((l = f.data), l === "/$")) {
                    if (s === 0) {
                        e.removeChild(f), di(n);
                        return;
                    }
                    s--;
                } else (l !== "$" && l !== "$?" && l !== "$!") || s++;
            l = f;
        } while (l);
        di(n);
    }
    function Tn(e) {
        for (; e != null; e = e.nextSibling) {
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (((n = e.data), n === "$" || n === "$!" || n === "$?"))
                    break;
                if (n === "/$") return null;
            }
        }
        return e;
    }
    function Uc(e) {
        e = e.previousSibling;
        for (var n = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?") {
                    if (n === 0) return e;
                    n--;
                } else l === "/$" && n++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var jr = Math.random().toString(36).slice(2),
        Gt = "__reactFiber$" + jr,
        Ei = "__reactProps$" + jr,
        un = "__reactContainer$" + jr,
        ws = "__reactEvents$" + jr,
        vg = "__reactListeners$" + jr,
        xg = "__reactHandles$" + jr;
    function $n(e) {
        var n = e[Gt];
        if (n) return n;
        for (var l = e.parentNode; l; ) {
            if ((n = l[un] || l[Gt])) {
                if (
                    ((l = n.alternate),
                    n.child !== null || (l !== null && l.child !== null))
                )
                    for (e = Uc(e); e !== null; ) {
                        if ((l = e[Gt])) return l;
                        e = Uc(e);
                    }
                return n;
            }
            (e = l), (l = e.parentNode);
        }
        return null;
    }
    function Ci(e) {
        return (
            (e = e[Gt] || e[un]),
            !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
                ? null
                : e
        );
    }
    function Ar(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(i(33));
    }
    function Nl(e) {
        return e[Ei] || null;
    }
    var ks = [],
        Tr = -1;
    function Nn(e) {
        return { current: e };
    }
    function Fe(e) {
        0 > Tr || ((e.current = ks[Tr]), (ks[Tr] = null), Tr--);
    }
    function ze(e, n) {
        Tr++, (ks[Tr] = e.current), (e.current = n);
    }
    var Rn = {},
        lt = Nn(Rn),
        gt = Nn(!1),
        Kn = Rn;
    function Nr(e, n) {
        var l = e.type.contextTypes;
        if (!l) return Rn;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === n)
            return s.__reactInternalMemoizedMaskedChildContext;
        var f = {},
            d;
        for (d in l) f[d] = n[d];
        return (
            s &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = n),
                (e.__reactInternalMemoizedMaskedChildContext = f)),
            f
        );
    }
    function yt(e) {
        return (e = e.childContextTypes), e != null;
    }
    function Rl() {
        Fe(gt), Fe(lt);
    }
    function Mc(e, n, l) {
        if (lt.current !== Rn) throw Error(i(168));
        ze(lt, n), ze(gt, l);
    }
    function Bc(e, n, l) {
        var s = e.stateNode;
        if (((n = n.childContextTypes), typeof s.getChildContext != "function"))
            return l;
        s = s.getChildContext();
        for (var f in s)
            if (!(f in n)) throw Error(i(108, Re(e) || "Unknown", f));
        return S({}, l, s);
    }
    function Pl(e) {
        return (
            (e =
                ((e = e.stateNode) &&
                    e.__reactInternalMemoizedMergedChildContext) ||
                Rn),
            (Kn = lt.current),
            ze(lt, e),
            ze(gt, gt.current),
            !0
        );
    }
    function Vc(e, n, l) {
        var s = e.stateNode;
        if (!s) throw Error(i(169));
        l
            ? ((e = Bc(e, n, Kn)),
              (s.__reactInternalMemoizedMergedChildContext = e),
              Fe(gt),
              Fe(lt),
              ze(lt, e))
            : Fe(gt),
            ze(gt, l);
    }
    var cn = null,
        Il = !1,
        Ss = !1;
    function Hc(e) {
        cn === null ? (cn = [e]) : cn.push(e);
    }
    function wg(e) {
        (Il = !0), Hc(e);
    }
    function Pn() {
        if (!Ss && cn !== null) {
            Ss = !0;
            var e = 0,
                n = Le;
            try {
                var l = cn;
                for (Le = 1; e < l.length; e++) {
                    var s = l[e];
                    do s = s(!0);
                    while (s !== null);
                }
                (cn = null), (Il = !1);
            } catch (f) {
                throw (cn !== null && (cn = cn.slice(e + 1)), Xu(Wo, Pn), f);
            } finally {
                (Le = n), (Ss = !1);
            }
        }
        return null;
    }
    var Rr = [],
        Pr = 0,
        Ol = null,
        Ll = 0,
        zt = [],
        bt = 0,
        Gn = null,
        fn = 1,
        dn = "";
    function Zn(e, n) {
        (Rr[Pr++] = Ll), (Rr[Pr++] = Ol), (Ol = e), (Ll = n);
    }
    function Wc(e, n, l) {
        (zt[bt++] = fn), (zt[bt++] = dn), (zt[bt++] = Gn), (Gn = e);
        var s = fn;
        e = dn;
        var f = 32 - Vt(s) - 1;
        (s &= ~(1 << f)), (l += 1);
        var d = 32 - Vt(n) + f;
        if (30 < d) {
            var v = f - (f % 5);
            (d = (s & ((1 << v) - 1)).toString(32)),
                (s >>= v),
                (f -= v),
                (fn = (1 << (32 - Vt(n) + f)) | (l << f) | s),
                (dn = d + e);
        } else (fn = (1 << d) | (l << f) | s), (dn = e);
    }
    function Es(e) {
        e.return !== null && (Zn(e, 1), Wc(e, 1, 0));
    }
    function Cs(e) {
        for (; e === Ol; )
            (Ol = Rr[--Pr]), (Rr[Pr] = null), (Ll = Rr[--Pr]), (Rr[Pr] = null);
        for (; e === Gn; )
            (Gn = zt[--bt]),
                (zt[bt] = null),
                (dn = zt[--bt]),
                (zt[bt] = null),
                (fn = zt[--bt]),
                (zt[bt] = null);
    }
    var Tt = null,
        Nt = null,
        Ue = !1,
        Wt = null;
    function Xc(e, n) {
        var l = Ut(5, null, null, 0);
        (l.elementType = "DELETED"),
            (l.stateNode = n),
            (l.return = e),
            (n = e.deletions),
            n === null ? ((e.deletions = [l]), (e.flags |= 16)) : n.push(l);
    }
    function Qc(e, n) {
        switch (e.tag) {
            case 5:
                var l = e.type;
                return (
                    (n =
                        n.nodeType !== 1 ||
                        l.toLowerCase() !== n.nodeName.toLowerCase()
                            ? null
                            : n),
                    n !== null
                        ? ((e.stateNode = n),
                          (Tt = e),
                          (Nt = Tn(n.firstChild)),
                          !0)
                        : !1
                );
            case 6:
                return (
                    (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
                    n !== null
                        ? ((e.stateNode = n), (Tt = e), (Nt = null), !0)
                        : !1
                );
            case 13:
                return (
                    (n = n.nodeType !== 8 ? null : n),
                    n !== null
                        ? ((l = Gn !== null ? { id: fn, overflow: dn } : null),
                          (e.memoizedState = {
                              dehydrated: n,
                              treeContext: l,
                              retryLane: 1073741824,
                          }),
                          (l = Ut(18, null, null, 0)),
                          (l.stateNode = n),
                          (l.return = e),
                          (e.child = l),
                          (Tt = e),
                          (Nt = null),
                          !0)
                        : !1
                );
            default:
                return !1;
        }
    }
    function js(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function As(e) {
        if (Ue) {
            var n = Nt;
            if (n) {
                var l = n;
                if (!Qc(e, n)) {
                    if (js(e)) throw Error(i(418));
                    n = Tn(l.nextSibling);
                    var s = Tt;
                    n && Qc(e, n)
                        ? Xc(s, l)
                        : ((e.flags = (e.flags & -4097) | 2),
                          (Ue = !1),
                          (Tt = e));
                }
            } else {
                if (js(e)) throw Error(i(418));
                (e.flags = (e.flags & -4097) | 2), (Ue = !1), (Tt = e);
            }
        }
    }
    function Yc(e) {
        for (
            e = e.return;
            e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

        )
            e = e.return;
        Tt = e;
    }
    function zl(e) {
        if (e !== Tt) return !1;
        if (!Ue) return Yc(e), (Ue = !0), !1;
        var n;
        if (
            ((n = e.tag !== 3) &&
                !(n = e.tag !== 5) &&
                ((n = e.type),
                (n =
                    n !== "head" &&
                    n !== "body" &&
                    !ys(e.type, e.memoizedProps))),
            n && (n = Nt))
        ) {
            if (js(e)) throw (qc(), Error(i(418)));
            for (; n; ) Xc(e, n), (n = Tn(n.nextSibling));
        }
        if ((Yc(e), e.tag === 13)) {
            if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
            )
                throw Error(i(317));
            e: {
                for (e = e.nextSibling, n = 0; e; ) {
                    if (e.nodeType === 8) {
                        var l = e.data;
                        if (l === "/$") {
                            if (n === 0) {
                                Nt = Tn(e.nextSibling);
                                break e;
                            }
                            n--;
                        } else (l !== "$" && l !== "$!" && l !== "$?") || n++;
                    }
                    e = e.nextSibling;
                }
                Nt = null;
            }
        } else Nt = Tt ? Tn(e.stateNode.nextSibling) : null;
        return !0;
    }
    function qc() {
        for (var e = Nt; e; ) e = Tn(e.nextSibling);
    }
    function Ir() {
        (Nt = Tt = null), (Ue = !1);
    }
    function Ts(e) {
        Wt === null ? (Wt = [e]) : Wt.push(e);
    }
    var kg = J.ReactCurrentBatchConfig;
    function ji(e, n, l) {
        if (
            ((e = l.ref),
            e !== null && typeof e != "function" && typeof e != "object")
        ) {
            if (l._owner) {
                if (((l = l._owner), l)) {
                    if (l.tag !== 1) throw Error(i(309));
                    var s = l.stateNode;
                }
                if (!s) throw Error(i(147, e));
                var f = s,
                    d = "" + e;
                return n !== null &&
                    n.ref !== null &&
                    typeof n.ref == "function" &&
                    n.ref._stringRef === d
                    ? n.ref
                    : ((n = function (v) {
                          var E = f.refs;
                          v === null ? delete E[d] : (E[d] = v);
                      }),
                      (n._stringRef = d),
                      n);
            }
            if (typeof e != "string") throw Error(i(284));
            if (!l._owner) throw Error(i(290, e));
        }
        return e;
    }
    function bl(e, n) {
        throw (
            ((e = Object.prototype.toString.call(n)),
            Error(
                i(
                    31,
                    e === "[object Object]"
                        ? "object with keys {" + Object.keys(n).join(", ") + "}"
                        : e
                )
            ))
        );
    }
    function Jc(e) {
        var n = e._init;
        return n(e._payload);
    }
    function $c(e) {
        function n(I, N) {
            if (e) {
                var O = I.deletions;
                O === null ? ((I.deletions = [N]), (I.flags |= 16)) : O.push(N);
            }
        }
        function l(I, N) {
            if (!e) return null;
            for (; N !== null; ) n(I, N), (N = N.sibling);
            return null;
        }
        function s(I, N) {
            for (I = new Map(); N !== null; )
                N.key !== null ? I.set(N.key, N) : I.set(N.index, N),
                    (N = N.sibling);
            return I;
        }
        function f(I, N) {
            return (I = Fn(I, N)), (I.index = 0), (I.sibling = null), I;
        }
        function d(I, N, O) {
            return (
                (I.index = O),
                e
                    ? ((O = I.alternate),
                      O !== null
                          ? ((O = O.index), O < N ? ((I.flags |= 2), N) : O)
                          : ((I.flags |= 2), N))
                    : ((I.flags |= 1048576), N)
            );
        }
        function v(I) {
            return e && I.alternate === null && (I.flags |= 2), I;
        }
        function E(I, N, O, Q) {
            return N === null || N.tag !== 6
                ? ((N = va(O, I.mode, Q)), (N.return = I), N)
                : ((N = f(N, O)), (N.return = I), N);
        }
        function A(I, N, O, Q) {
            var le = O.type;
            return le === ie
                ? V(I, N, O.props.children, Q, O.key)
                : N !== null &&
                  (N.elementType === le ||
                      (typeof le == "object" &&
                          le !== null &&
                          le.$$typeof === Ae &&
                          Jc(le) === N.type))
                ? ((Q = f(N, O.props)),
                  (Q.ref = ji(I, N, O)),
                  (Q.return = I),
                  Q)
                : ((Q = lo(O.type, O.key, O.props, null, I.mode, Q)),
                  (Q.ref = ji(I, N, O)),
                  (Q.return = I),
                  Q);
        }
        function z(I, N, O, Q) {
            return N === null ||
                N.tag !== 4 ||
                N.stateNode.containerInfo !== O.containerInfo ||
                N.stateNode.implementation !== O.implementation
                ? ((N = xa(O, I.mode, Q)), (N.return = I), N)
                : ((N = f(N, O.children || [])), (N.return = I), N);
        }
        function V(I, N, O, Q, le) {
            return N === null || N.tag !== 7
                ? ((N = sr(O, I.mode, Q, le)), (N.return = I), N)
                : ((N = f(N, O)), (N.return = I), N);
        }
        function H(I, N, O) {
            if ((typeof N == "string" && N !== "") || typeof N == "number")
                return (N = va("" + N, I.mode, O)), (N.return = I), N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case $:
                        return (
                            (O = lo(N.type, N.key, N.props, null, I.mode, O)),
                            (O.ref = ji(I, null, N)),
                            (O.return = I),
                            O
                        );
                    case _:
                        return (N = xa(N, I.mode, O)), (N.return = I), N;
                    case Ae:
                        var Q = N._init;
                        return H(I, Q(N._payload), O);
                }
                if (vn(N) || se(N))
                    return (N = sr(N, I.mode, O, null)), (N.return = I), N;
                bl(I, N);
            }
            return null;
        }
        function B(I, N, O, Q) {
            var le = N !== null ? N.key : null;
            if ((typeof O == "string" && O !== "") || typeof O == "number")
                return le !== null ? null : E(I, N, "" + O, Q);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                    case $:
                        return O.key === le ? A(I, N, O, Q) : null;
                    case _:
                        return O.key === le ? z(I, N, O, Q) : null;
                    case Ae:
                        return (le = O._init), B(I, N, le(O._payload), Q);
                }
                if (vn(O) || se(O))
                    return le !== null ? null : V(I, N, O, Q, null);
                bl(I, O);
            }
            return null;
        }
        function K(I, N, O, Q, le) {
            if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
                return (I = I.get(O) || null), E(N, I, "" + Q, le);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case $:
                        return (
                            (I = I.get(Q.key === null ? O : Q.key) || null),
                            A(N, I, Q, le)
                        );
                    case _:
                        return (
                            (I = I.get(Q.key === null ? O : Q.key) || null),
                            z(N, I, Q, le)
                        );
                    case Ae:
                        var ue = Q._init;
                        return K(I, N, O, ue(Q._payload), le);
                }
                if (vn(Q) || se(Q))
                    return (I = I.get(O) || null), V(N, I, Q, le, null);
                bl(N, Q);
            }
            return null;
        }
        function ne(I, N, O, Q) {
            for (
                var le = null, ue = null, ce = N, pe = (N = 0), et = null;
                ce !== null && pe < O.length;
                pe++
            ) {
                ce.index > pe ? ((et = ce), (ce = null)) : (et = ce.sibling);
                var Pe = B(I, ce, O[pe], Q);
                if (Pe === null) {
                    ce === null && (ce = et);
                    break;
                }
                e && ce && Pe.alternate === null && n(I, ce),
                    (N = d(Pe, N, pe)),
                    ue === null ? (le = Pe) : (ue.sibling = Pe),
                    (ue = Pe),
                    (ce = et);
            }
            if (pe === O.length) return l(I, ce), Ue && Zn(I, pe), le;
            if (ce === null) {
                for (; pe < O.length; pe++)
                    (ce = H(I, O[pe], Q)),
                        ce !== null &&
                            ((N = d(ce, N, pe)),
                            ue === null ? (le = ce) : (ue.sibling = ce),
                            (ue = ce));
                return Ue && Zn(I, pe), le;
            }
            for (ce = s(I, ce); pe < O.length; pe++)
                (et = K(ce, I, pe, O[pe], Q)),
                    et !== null &&
                        (e &&
                            et.alternate !== null &&
                            ce.delete(et.key === null ? pe : et.key),
                        (N = d(et, N, pe)),
                        ue === null ? (le = et) : (ue.sibling = et),
                        (ue = et));
            return (
                e &&
                    ce.forEach(function (Un) {
                        return n(I, Un);
                    }),
                Ue && Zn(I, pe),
                le
            );
        }
        function re(I, N, O, Q) {
            var le = se(O);
            if (typeof le != "function") throw Error(i(150));
            if (((O = le.call(O)), O == null)) throw Error(i(151));
            for (
                var ue = (le = null),
                    ce = N,
                    pe = (N = 0),
                    et = null,
                    Pe = O.next();
                ce !== null && !Pe.done;
                pe++, Pe = O.next()
            ) {
                ce.index > pe ? ((et = ce), (ce = null)) : (et = ce.sibling);
                var Un = B(I, ce, Pe.value, Q);
                if (Un === null) {
                    ce === null && (ce = et);
                    break;
                }
                e && ce && Un.alternate === null && n(I, ce),
                    (N = d(Un, N, pe)),
                    ue === null ? (le = Un) : (ue.sibling = Un),
                    (ue = Un),
                    (ce = et);
            }
            if (Pe.done) return l(I, ce), Ue && Zn(I, pe), le;
            if (ce === null) {
                for (; !Pe.done; pe++, Pe = O.next())
                    (Pe = H(I, Pe.value, Q)),
                        Pe !== null &&
                            ((N = d(Pe, N, pe)),
                            ue === null ? (le = Pe) : (ue.sibling = Pe),
                            (ue = Pe));
                return Ue && Zn(I, pe), le;
            }
            for (ce = s(I, ce); !Pe.done; pe++, Pe = O.next())
                (Pe = K(ce, I, pe, Pe.value, Q)),
                    Pe !== null &&
                        (e &&
                            Pe.alternate !== null &&
                            ce.delete(Pe.key === null ? pe : Pe.key),
                        (N = d(Pe, N, pe)),
                        ue === null ? (le = Pe) : (ue.sibling = Pe),
                        (ue = Pe));
            return (
                e &&
                    ce.forEach(function (ey) {
                        return n(I, ey);
                    }),
                Ue && Zn(I, pe),
                le
            );
        }
        function Xe(I, N, O, Q) {
            if (
                (typeof O == "object" &&
                    O !== null &&
                    O.type === ie &&
                    O.key === null &&
                    (O = O.props.children),
                typeof O == "object" && O !== null)
            ) {
                switch (O.$$typeof) {
                    case $:
                        e: {
                            for (var le = O.key, ue = N; ue !== null; ) {
                                if (ue.key === le) {
                                    if (((le = O.type), le === ie)) {
                                        if (ue.tag === 7) {
                                            l(I, ue.sibling),
                                                (N = f(ue, O.props.children)),
                                                (N.return = I),
                                                (I = N);
                                            break e;
                                        }
                                    } else if (
                                        ue.elementType === le ||
                                        (typeof le == "object" &&
                                            le !== null &&
                                            le.$$typeof === Ae &&
                                            Jc(le) === ue.type)
                                    ) {
                                        l(I, ue.sibling),
                                            (N = f(ue, O.props)),
                                            (N.ref = ji(I, ue, O)),
                                            (N.return = I),
                                            (I = N);
                                        break e;
                                    }
                                    l(I, ue);
                                    break;
                                } else n(I, ue);
                                ue = ue.sibling;
                            }
                            O.type === ie
                                ? ((N = sr(O.props.children, I.mode, Q, O.key)),
                                  (N.return = I),
                                  (I = N))
                                : ((Q = lo(
                                      O.type,
                                      O.key,
                                      O.props,
                                      null,
                                      I.mode,
                                      Q
                                  )),
                                  (Q.ref = ji(I, N, O)),
                                  (Q.return = I),
                                  (I = Q));
                        }
                        return v(I);
                    case _:
                        e: {
                            for (ue = O.key; N !== null; ) {
                                if (N.key === ue)
                                    if (
                                        N.tag === 4 &&
                                        N.stateNode.containerInfo ===
                                            O.containerInfo &&
                                        N.stateNode.implementation ===
                                            O.implementation
                                    ) {
                                        l(I, N.sibling),
                                            (N = f(N, O.children || [])),
                                            (N.return = I),
                                            (I = N);
                                        break e;
                                    } else {
                                        l(I, N);
                                        break;
                                    }
                                else n(I, N);
                                N = N.sibling;
                            }
                            (N = xa(O, I.mode, Q)), (N.return = I), (I = N);
                        }
                        return v(I);
                    case Ae:
                        return (ue = O._init), Xe(I, N, ue(O._payload), Q);
                }
                if (vn(O)) return ne(I, N, O, Q);
                if (se(O)) return re(I, N, O, Q);
                bl(I, O);
            }
            return (typeof O == "string" && O !== "") || typeof O == "number"
                ? ((O = "" + O),
                  N !== null && N.tag === 6
                      ? (l(I, N.sibling),
                        (N = f(N, O)),
                        (N.return = I),
                        (I = N))
                      : (l(I, N),
                        (N = va(O, I.mode, Q)),
                        (N.return = I),
                        (I = N)),
                  v(I))
                : l(I, N);
        }
        return Xe;
    }
    var Or = $c(!0),
        Kc = $c(!1),
        _l = Nn(null),
        Dl = null,
        Lr = null,
        Ns = null;
    function Rs() {
        Ns = Lr = Dl = null;
    }
    function Ps(e) {
        var n = _l.current;
        Fe(_l), (e._currentValue = n);
    }
    function Is(e, n, l) {
        for (; e !== null; ) {
            var s = e.alternate;
            if (
                ((e.childLanes & n) !== n
                    ? ((e.childLanes |= n), s !== null && (s.childLanes |= n))
                    : s !== null &&
                      (s.childLanes & n) !== n &&
                      (s.childLanes |= n),
                e === l)
            )
                break;
            e = e.return;
        }
    }
    function zr(e, n) {
        (Dl = e),
            (Ns = Lr = null),
            (e = e.dependencies),
            e !== null &&
                e.firstContext !== null &&
                (e.lanes & n && (vt = !0), (e.firstContext = null));
    }
    function _t(e) {
        var n = e._currentValue;
        if (Ns !== e)
            if (
                ((e = { context: e, memoizedValue: n, next: null }),
                Lr === null)
            ) {
                if (Dl === null) throw Error(i(308));
                (Lr = e), (Dl.dependencies = { lanes: 0, firstContext: e });
            } else Lr = Lr.next = e;
        return n;
    }
    var er = null;
    function Os(e) {
        er === null ? (er = [e]) : er.push(e);
    }
    function Gc(e, n, l, s) {
        var f = n.interleaved;
        return (
            f === null
                ? ((l.next = l), Os(n))
                : ((l.next = f.next), (f.next = l)),
            (n.interleaved = l),
            hn(e, s)
        );
    }
    function hn(e, n) {
        e.lanes |= n;
        var l = e.alternate;
        for (l !== null && (l.lanes |= n), l = e, e = e.return; e !== null; )
            (e.childLanes |= n),
                (l = e.alternate),
                l !== null && (l.childLanes |= n),
                (l = e),
                (e = e.return);
        return l.tag === 3 ? l.stateNode : null;
    }
    var In = !1;
    function Ls(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
        };
    }
    function Zc(e, n) {
        (e = e.updateQueue),
            n.updateQueue === e &&
                (n.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects,
                });
    }
    function pn(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
        };
    }
    function On(e, n, l) {
        var s = e.updateQueue;
        if (s === null) return null;
        if (((s = s.shared), Ne & 2)) {
            var f = s.pending;
            return (
                f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
                (s.pending = n),
                hn(e, l)
            );
        }
        return (
            (f = s.interleaved),
            f === null
                ? ((n.next = n), Os(s))
                : ((n.next = f.next), (f.next = n)),
            (s.interleaved = n),
            hn(e, l)
        );
    }
    function Fl(e, n, l) {
        if (
            ((n = n.updateQueue),
            n !== null && ((n = n.shared), (l & 4194240) !== 0))
        ) {
            var s = n.lanes;
            (s &= e.pendingLanes), (l |= s), (n.lanes = l), Yo(e, l);
        }
    }
    function ef(e, n) {
        var l = e.updateQueue,
            s = e.alternate;
        if (s !== null && ((s = s.updateQueue), l === s)) {
            var f = null,
                d = null;
            if (((l = l.firstBaseUpdate), l !== null)) {
                do {
                    var v = {
                        eventTime: l.eventTime,
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: l.callback,
                        next: null,
                    };
                    d === null ? (f = d = v) : (d = d.next = v), (l = l.next);
                } while (l !== null);
                d === null ? (f = d = n) : (d = d.next = n);
            } else f = d = n;
            (l = {
                baseState: s.baseState,
                firstBaseUpdate: f,
                lastBaseUpdate: d,
                shared: s.shared,
                effects: s.effects,
            }),
                (e.updateQueue = l);
            return;
        }
        (e = l.lastBaseUpdate),
            e === null ? (l.firstBaseUpdate = n) : (e.next = n),
            (l.lastBaseUpdate = n);
    }
    function Ul(e, n, l, s) {
        var f = e.updateQueue;
        In = !1;
        var d = f.firstBaseUpdate,
            v = f.lastBaseUpdate,
            E = f.shared.pending;
        if (E !== null) {
            f.shared.pending = null;
            var A = E,
                z = A.next;
            (A.next = null), v === null ? (d = z) : (v.next = z), (v = A);
            var V = e.alternate;
            V !== null &&
                ((V = V.updateQueue),
                (E = V.lastBaseUpdate),
                E !== v &&
                    (E === null ? (V.firstBaseUpdate = z) : (E.next = z),
                    (V.lastBaseUpdate = A)));
        }
        if (d !== null) {
            var H = f.baseState;
            (v = 0), (V = z = A = null), (E = d);
            do {
                var B = E.lane,
                    K = E.eventTime;
                if ((s & B) === B) {
                    V !== null &&
                        (V = V.next =
                            {
                                eventTime: K,
                                lane: 0,
                                tag: E.tag,
                                payload: E.payload,
                                callback: E.callback,
                                next: null,
                            });
                    e: {
                        var ne = e,
                            re = E;
                        switch (((B = n), (K = l), re.tag)) {
                            case 1:
                                if (
                                    ((ne = re.payload), typeof ne == "function")
                                ) {
                                    H = ne.call(K, H, B);
                                    break e;
                                }
                                H = ne;
                                break e;
                            case 3:
                                ne.flags = (ne.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((ne = re.payload),
                                    (B =
                                        typeof ne == "function"
                                            ? ne.call(K, H, B)
                                            : ne),
                                    B == null)
                                )
                                    break e;
                                H = S({}, H, B);
                                break e;
                            case 2:
                                In = !0;
                        }
                    }
                    E.callback !== null &&
                        E.lane !== 0 &&
                        ((e.flags |= 64),
                        (B = f.effects),
                        B === null ? (f.effects = [E]) : B.push(E));
                } else
                    (K = {
                        eventTime: K,
                        lane: B,
                        tag: E.tag,
                        payload: E.payload,
                        callback: E.callback,
                        next: null,
                    }),
                        V === null ? ((z = V = K), (A = H)) : (V = V.next = K),
                        (v |= B);
                if (((E = E.next), E === null)) {
                    if (((E = f.shared.pending), E === null)) break;
                    (B = E),
                        (E = B.next),
                        (B.next = null),
                        (f.lastBaseUpdate = B),
                        (f.shared.pending = null);
                }
            } while (!0);
            if (
                (V === null && (A = H),
                (f.baseState = A),
                (f.firstBaseUpdate = z),
                (f.lastBaseUpdate = V),
                (n = f.shared.interleaved),
                n !== null)
            ) {
                f = n;
                do (v |= f.lane), (f = f.next);
                while (f !== n);
            } else d === null && (f.shared.lanes = 0);
            (rr |= v), (e.lanes = v), (e.memoizedState = H);
        }
    }
    function tf(e, n, l) {
        if (((e = n.effects), (n.effects = null), e !== null))
            for (n = 0; n < e.length; n++) {
                var s = e[n],
                    f = s.callback;
                if (f !== null) {
                    if (((s.callback = null), (s = l), typeof f != "function"))
                        throw Error(i(191, f));
                    f.call(s);
                }
            }
    }
    var Ai = {},
        Zt = Nn(Ai),
        Ti = Nn(Ai),
        Ni = Nn(Ai);
    function tr(e) {
        if (e === Ai) throw Error(i(174));
        return e;
    }
    function zs(e, n) {
        switch ((ze(Ni, n), ze(Ti, e), ze(Zt, Ai), (e = n.nodeType), e)) {
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : q(null, "");
                break;
            default:
                (e = e === 8 ? n.parentNode : n),
                    (n = e.namespaceURI || null),
                    (e = e.tagName),
                    (n = q(n, e));
        }
        Fe(Zt), ze(Zt, n);
    }
    function br() {
        Fe(Zt), Fe(Ti), Fe(Ni);
    }
    function nf(e) {
        tr(Ni.current);
        var n = tr(Zt.current),
            l = q(n, e.type);
        n !== l && (ze(Ti, e), ze(Zt, l));
    }
    function bs(e) {
        Ti.current === e && (Fe(Zt), Fe(Ti));
    }
    var Me = Nn(0);
    function Ml(e) {
        for (var n = e; n !== null; ) {
            if (n.tag === 13) {
                var l = n.memoizedState;
                if (
                    l !== null &&
                    ((l = l.dehydrated),
                    l === null || l.data === "$?" || l.data === "$!")
                )
                    return n;
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if (n.flags & 128) return n;
            } else if (n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
            }
            if (n === e) break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e) return null;
                n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
        }
        return null;
    }
    var _s = [];
    function Ds() {
        for (var e = 0; e < _s.length; e++)
            _s[e]._workInProgressVersionPrimary = null;
        _s.length = 0;
    }
    var Bl = J.ReactCurrentDispatcher,
        Fs = J.ReactCurrentBatchConfig,
        nr = 0,
        Be = null,
        $e = null,
        Ge = null,
        Vl = !1,
        Ri = !1,
        Pi = 0,
        Sg = 0;
    function ot() {
        throw Error(i(321));
    }
    function Us(e, n) {
        if (n === null) return !1;
        for (var l = 0; l < n.length && l < e.length; l++)
            if (!Ht(e[l], n[l])) return !1;
        return !0;
    }
    function Ms(e, n, l, s, f, d) {
        if (
            ((nr = d),
            (Be = n),
            (n.memoizedState = null),
            (n.updateQueue = null),
            (n.lanes = 0),
            (Bl.current = e === null || e.memoizedState === null ? Ag : Tg),
            (e = l(s, f)),
            Ri)
        ) {
            d = 0;
            do {
                if (((Ri = !1), (Pi = 0), 25 <= d)) throw Error(i(301));
                (d += 1),
                    (Ge = $e = null),
                    (n.updateQueue = null),
                    (Bl.current = Ng),
                    (e = l(s, f));
            } while (Ri);
        }
        if (
            ((Bl.current = Xl),
            (n = $e !== null && $e.next !== null),
            (nr = 0),
            (Ge = $e = Be = null),
            (Vl = !1),
            n)
        )
            throw Error(i(300));
        return e;
    }
    function Bs() {
        var e = Pi !== 0;
        return (Pi = 0), e;
    }
    function en() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            Ge === null ? (Be.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge
        );
    }
    function Dt() {
        if ($e === null) {
            var e = Be.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = $e.next;
        var n = Ge === null ? Be.memoizedState : Ge.next;
        if (n !== null) (Ge = n), ($e = e);
        else {
            if (e === null) throw Error(i(310));
            ($e = e),
                (e = {
                    memoizedState: $e.memoizedState,
                    baseState: $e.baseState,
                    baseQueue: $e.baseQueue,
                    queue: $e.queue,
                    next: null,
                }),
                Ge === null ? (Be.memoizedState = Ge = e) : (Ge = Ge.next = e);
        }
        return Ge;
    }
    function Ii(e, n) {
        return typeof n == "function" ? n(e) : n;
    }
    function Vs(e) {
        var n = Dt(),
            l = n.queue;
        if (l === null) throw Error(i(311));
        l.lastRenderedReducer = e;
        var s = $e,
            f = s.baseQueue,
            d = l.pending;
        if (d !== null) {
            if (f !== null) {
                var v = f.next;
                (f.next = d.next), (d.next = v);
            }
            (s.baseQueue = f = d), (l.pending = null);
        }
        if (f !== null) {
            (d = f.next), (s = s.baseState);
            var E = (v = null),
                A = null,
                z = d;
            do {
                var V = z.lane;
                if ((nr & V) === V)
                    A !== null &&
                        (A = A.next =
                            {
                                lane: 0,
                                action: z.action,
                                hasEagerState: z.hasEagerState,
                                eagerState: z.eagerState,
                                next: null,
                            }),
                        (s = z.hasEagerState ? z.eagerState : e(s, z.action));
                else {
                    var H = {
                        lane: V,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null,
                    };
                    A === null ? ((E = A = H), (v = s)) : (A = A.next = H),
                        (Be.lanes |= V),
                        (rr |= V);
                }
                z = z.next;
            } while (z !== null && z !== d);
            A === null ? (v = s) : (A.next = E),
                Ht(s, n.memoizedState) || (vt = !0),
                (n.memoizedState = s),
                (n.baseState = v),
                (n.baseQueue = A),
                (l.lastRenderedState = s);
        }
        if (((e = l.interleaved), e !== null)) {
            f = e;
            do (d = f.lane), (Be.lanes |= d), (rr |= d), (f = f.next);
            while (f !== e);
        } else f === null && (l.lanes = 0);
        return [n.memoizedState, l.dispatch];
    }
    function Hs(e) {
        var n = Dt(),
            l = n.queue;
        if (l === null) throw Error(i(311));
        l.lastRenderedReducer = e;
        var s = l.dispatch,
            f = l.pending,
            d = n.memoizedState;
        if (f !== null) {
            l.pending = null;
            var v = (f = f.next);
            do (d = e(d, v.action)), (v = v.next);
            while (v !== f);
            Ht(d, n.memoizedState) || (vt = !0),
                (n.memoizedState = d),
                n.baseQueue === null && (n.baseState = d),
                (l.lastRenderedState = d);
        }
        return [d, s];
    }
    function rf() {}
    function lf(e, n) {
        var l = Be,
            s = Dt(),
            f = n(),
            d = !Ht(s.memoizedState, f);
        if (
            (d && ((s.memoizedState = f), (vt = !0)),
            (s = s.queue),
            Ws(af.bind(null, l, s, e), [e]),
            s.getSnapshot !== n ||
                d ||
                (Ge !== null && Ge.memoizedState.tag & 1))
        ) {
            if (
                ((l.flags |= 2048),
                Oi(9, sf.bind(null, l, s, f, n), void 0, null),
                Ze === null)
            )
                throw Error(i(349));
            nr & 30 || of(l, n, f);
        }
        return f;
    }
    function of(e, n, l) {
        (e.flags |= 16384),
            (e = { getSnapshot: n, value: l }),
            (n = Be.updateQueue),
            n === null
                ? ((n = { lastEffect: null, stores: null }),
                  (Be.updateQueue = n),
                  (n.stores = [e]))
                : ((l = n.stores), l === null ? (n.stores = [e]) : l.push(e));
    }
    function sf(e, n, l, s) {
        (n.value = l), (n.getSnapshot = s), uf(n) && cf(e);
    }
    function af(e, n, l) {
        return l(function () {
            uf(n) && cf(e);
        });
    }
    function uf(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
            var l = n();
            return !Ht(e, l);
        } catch {
            return !0;
        }
    }
    function cf(e) {
        var n = hn(e, 1);
        n !== null && qt(n, e, 1, -1);
    }
    function ff(e) {
        var n = en();
        return (
            typeof e == "function" && (e = e()),
            (n.memoizedState = n.baseState = e),
            (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ii,
                lastRenderedState: e,
            }),
            (n.queue = e),
            (e = e.dispatch = jg.bind(null, Be, e)),
            [n.memoizedState, e]
        );
    }
    function Oi(e, n, l, s) {
        return (
            (e = { tag: e, create: n, destroy: l, deps: s, next: null }),
            (n = Be.updateQueue),
            n === null
                ? ((n = { lastEffect: null, stores: null }),
                  (Be.updateQueue = n),
                  (n.lastEffect = e.next = e))
                : ((l = n.lastEffect),
                  l === null
                      ? (n.lastEffect = e.next = e)
                      : ((s = l.next),
                        (l.next = e),
                        (e.next = s),
                        (n.lastEffect = e))),
            e
        );
    }
    function df() {
        return Dt().memoizedState;
    }
    function Hl(e, n, l, s) {
        var f = en();
        (Be.flags |= e),
            (f.memoizedState = Oi(1 | n, l, void 0, s === void 0 ? null : s));
    }
    function Wl(e, n, l, s) {
        var f = Dt();
        s = s === void 0 ? null : s;
        var d = void 0;
        if ($e !== null) {
            var v = $e.memoizedState;
            if (((d = v.destroy), s !== null && Us(s, v.deps))) {
                f.memoizedState = Oi(n, l, d, s);
                return;
            }
        }
        (Be.flags |= e), (f.memoizedState = Oi(1 | n, l, d, s));
    }
    function hf(e, n) {
        return Hl(8390656, 8, e, n);
    }
    function Ws(e, n) {
        return Wl(2048, 8, e, n);
    }
    function pf(e, n) {
        return Wl(4, 2, e, n);
    }
    function mf(e, n) {
        return Wl(4, 4, e, n);
    }
    function gf(e, n) {
        if (typeof n == "function")
            return (
                (e = e()),
                n(e),
                function () {
                    n(null);
                }
            );
        if (n != null)
            return (
                (e = e()),
                (n.current = e),
                function () {
                    n.current = null;
                }
            );
    }
    function yf(e, n, l) {
        return (
            (l = l != null ? l.concat([e]) : null),
            Wl(4, 4, gf.bind(null, n, e), l)
        );
    }
    function Xs() {}
    function vf(e, n) {
        var l = Dt();
        n = n === void 0 ? null : n;
        var s = l.memoizedState;
        return s !== null && n !== null && Us(n, s[1])
            ? s[0]
            : ((l.memoizedState = [e, n]), e);
    }
    function xf(e, n) {
        var l = Dt();
        n = n === void 0 ? null : n;
        var s = l.memoizedState;
        return s !== null && n !== null && Us(n, s[1])
            ? s[0]
            : ((e = e()), (l.memoizedState = [e, n]), e);
    }
    function wf(e, n, l) {
        return nr & 21
            ? (Ht(l, n) ||
                  ((l = Ju()), (Be.lanes |= l), (rr |= l), (e.baseState = !0)),
              n)
            : (e.baseState && ((e.baseState = !1), (vt = !0)),
              (e.memoizedState = l));
    }
    function Eg(e, n) {
        var l = Le;
        (Le = l !== 0 && 4 > l ? l : 4), e(!0);
        var s = Fs.transition;
        Fs.transition = {};
        try {
            e(!1), n();
        } finally {
            (Le = l), (Fs.transition = s);
        }
    }
    function kf() {
        return Dt().memoizedState;
    }
    function Cg(e, n, l) {
        var s = _n(e);
        if (
            ((l = {
                lane: s,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            Sf(e))
        )
            Ef(n, l);
        else if (((l = Gc(e, n, l, s)), l !== null)) {
            var f = mt();
            qt(l, e, s, f), Cf(l, n, s);
        }
    }
    function jg(e, n, l) {
        var s = _n(e),
            f = {
                lane: s,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            };
        if (Sf(e)) Ef(n, f);
        else {
            var d = e.alternate;
            if (
                e.lanes === 0 &&
                (d === null || d.lanes === 0) &&
                ((d = n.lastRenderedReducer), d !== null)
            )
                try {
                    var v = n.lastRenderedState,
                        E = d(v, l);
                    if (
                        ((f.hasEagerState = !0), (f.eagerState = E), Ht(E, v))
                    ) {
                        var A = n.interleaved;
                        A === null
                            ? ((f.next = f), Os(n))
                            : ((f.next = A.next), (A.next = f)),
                            (n.interleaved = f);
                        return;
                    }
                } catch {
                } finally {
                }
            (l = Gc(e, n, f, s)),
                l !== null && ((f = mt()), qt(l, e, s, f), Cf(l, n, s));
        }
    }
    function Sf(e) {
        var n = e.alternate;
        return e === Be || (n !== null && n === Be);
    }
    function Ef(e, n) {
        Ri = Vl = !0;
        var l = e.pending;
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
            (e.pending = n);
    }
    function Cf(e, n, l) {
        if (l & 4194240) {
            var s = n.lanes;
            (s &= e.pendingLanes), (l |= s), (n.lanes = l), Yo(e, l);
        }
    }
    var Xl = {
            readContext: _t,
            useCallback: ot,
            useContext: ot,
            useEffect: ot,
            useImperativeHandle: ot,
            useInsertionEffect: ot,
            useLayoutEffect: ot,
            useMemo: ot,
            useReducer: ot,
            useRef: ot,
            useState: ot,
            useDebugValue: ot,
            useDeferredValue: ot,
            useTransition: ot,
            useMutableSource: ot,
            useSyncExternalStore: ot,
            useId: ot,
            unstable_isNewReconciler: !1,
        },
        Ag = {
            readContext: _t,
            useCallback: function (e, n) {
                return (en().memoizedState = [e, n === void 0 ? null : n]), e;
            },
            useContext: _t,
            useEffect: hf,
            useImperativeHandle: function (e, n, l) {
                return (
                    (l = l != null ? l.concat([e]) : null),
                    Hl(4194308, 4, gf.bind(null, n, e), l)
                );
            },
            useLayoutEffect: function (e, n) {
                return Hl(4194308, 4, e, n);
            },
            useInsertionEffect: function (e, n) {
                return Hl(4, 2, e, n);
            },
            useMemo: function (e, n) {
                var l = en();
                return (
                    (n = n === void 0 ? null : n),
                    (e = e()),
                    (l.memoizedState = [e, n]),
                    e
                );
            },
            useReducer: function (e, n, l) {
                var s = en();
                return (
                    (n = l !== void 0 ? l(n) : n),
                    (s.memoizedState = s.baseState = n),
                    (e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: n,
                    }),
                    (s.queue = e),
                    (e = e.dispatch = Cg.bind(null, Be, e)),
                    [s.memoizedState, e]
                );
            },
            useRef: function (e) {
                var n = en();
                return (e = { current: e }), (n.memoizedState = e);
            },
            useState: ff,
            useDebugValue: Xs,
            useDeferredValue: function (e) {
                return (en().memoizedState = e);
            },
            useTransition: function () {
                var e = ff(!1),
                    n = e[0];
                return (
                    (e = Eg.bind(null, e[1])), (en().memoizedState = e), [n, e]
                );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, n, l) {
                var s = Be,
                    f = en();
                if (Ue) {
                    if (l === void 0) throw Error(i(407));
                    l = l();
                } else {
                    if (((l = n()), Ze === null)) throw Error(i(349));
                    nr & 30 || of(s, n, l);
                }
                f.memoizedState = l;
                var d = { value: l, getSnapshot: n };
                return (
                    (f.queue = d),
                    hf(af.bind(null, s, d, e), [e]),
                    (s.flags |= 2048),
                    Oi(9, sf.bind(null, s, d, l, n), void 0, null),
                    l
                );
            },
            useId: function () {
                var e = en(),
                    n = Ze.identifierPrefix;
                if (Ue) {
                    var l = dn,
                        s = fn;
                    (l = (s & ~(1 << (32 - Vt(s) - 1))).toString(32) + l),
                        (n = ":" + n + "R" + l),
                        (l = Pi++),
                        0 < l && (n += "H" + l.toString(32)),
                        (n += ":");
                } else (l = Sg++), (n = ":" + n + "r" + l.toString(32) + ":");
                return (e.memoizedState = n);
            },
            unstable_isNewReconciler: !1,
        },
        Tg = {
            readContext: _t,
            useCallback: vf,
            useContext: _t,
            useEffect: Ws,
            useImperativeHandle: yf,
            useInsertionEffect: pf,
            useLayoutEffect: mf,
            useMemo: xf,
            useReducer: Vs,
            useRef: df,
            useState: function () {
                return Vs(Ii);
            },
            useDebugValue: Xs,
            useDeferredValue: function (e) {
                var n = Dt();
                return wf(n, $e.memoizedState, e);
            },
            useTransition: function () {
                var e = Vs(Ii)[0],
                    n = Dt().memoizedState;
                return [e, n];
            },
            useMutableSource: rf,
            useSyncExternalStore: lf,
            useId: kf,
            unstable_isNewReconciler: !1,
        },
        Ng = {
            readContext: _t,
            useCallback: vf,
            useContext: _t,
            useEffect: Ws,
            useImperativeHandle: yf,
            useInsertionEffect: pf,
            useLayoutEffect: mf,
            useMemo: xf,
            useReducer: Hs,
            useRef: df,
            useState: function () {
                return Hs(Ii);
            },
            useDebugValue: Xs,
            useDeferredValue: function (e) {
                var n = Dt();
                return $e === null
                    ? (n.memoizedState = e)
                    : wf(n, $e.memoizedState, e);
            },
            useTransition: function () {
                var e = Hs(Ii)[0],
                    n = Dt().memoizedState;
                return [e, n];
            },
            useMutableSource: rf,
            useSyncExternalStore: lf,
            useId: kf,
            unstable_isNewReconciler: !1,
        };
    function Xt(e, n) {
        if (e && e.defaultProps) {
            (n = S({}, n)), (e = e.defaultProps);
            for (var l in e) n[l] === void 0 && (n[l] = e[l]);
            return n;
        }
        return n;
    }
    function Qs(e, n, l, s) {
        (n = e.memoizedState),
            (l = l(s, n)),
            (l = l == null ? n : S({}, n, l)),
            (e.memoizedState = l),
            e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var Ql = {
        isMounted: function (e) {
            return (e = e._reactInternals) ? Jn(e) === e : !1;
        },
        enqueueSetState: function (e, n, l) {
            e = e._reactInternals;
            var s = mt(),
                f = _n(e),
                d = pn(s, f);
            (d.payload = n),
                l != null && (d.callback = l),
                (n = On(e, d, f)),
                n !== null && (qt(n, e, f, s), Fl(n, e, f));
        },
        enqueueReplaceState: function (e, n, l) {
            e = e._reactInternals;
            var s = mt(),
                f = _n(e),
                d = pn(s, f);
            (d.tag = 1),
                (d.payload = n),
                l != null && (d.callback = l),
                (n = On(e, d, f)),
                n !== null && (qt(n, e, f, s), Fl(n, e, f));
        },
        enqueueForceUpdate: function (e, n) {
            e = e._reactInternals;
            var l = mt(),
                s = _n(e),
                f = pn(l, s);
            (f.tag = 2),
                n != null && (f.callback = n),
                (n = On(e, f, s)),
                n !== null && (qt(n, e, s, l), Fl(n, e, s));
        },
    };
    function jf(e, n, l, s, f, d, v) {
        return (
            (e = e.stateNode),
            typeof e.shouldComponentUpdate == "function"
                ? e.shouldComponentUpdate(s, d, v)
                : n.prototype && n.prototype.isPureReactComponent
                ? !vi(l, s) || !vi(f, d)
                : !0
        );
    }
    function Af(e, n, l) {
        var s = !1,
            f = Rn,
            d = n.contextType;
        return (
            typeof d == "object" && d !== null
                ? (d = _t(d))
                : ((f = yt(n) ? Kn : lt.current),
                  (s = n.contextTypes),
                  (d = (s = s != null) ? Nr(e, f) : Rn)),
            (n = new n(l, d)),
            (e.memoizedState =
                n.state !== null && n.state !== void 0 ? n.state : null),
            (n.updater = Ql),
            (e.stateNode = n),
            (n._reactInternals = e),
            s &&
                ((e = e.stateNode),
                (e.__reactInternalMemoizedUnmaskedChildContext = f),
                (e.__reactInternalMemoizedMaskedChildContext = d)),
            n
        );
    }
    function Tf(e, n, l, s) {
        (e = n.state),
            typeof n.componentWillReceiveProps == "function" &&
                n.componentWillReceiveProps(l, s),
            typeof n.UNSAFE_componentWillReceiveProps == "function" &&
                n.UNSAFE_componentWillReceiveProps(l, s),
            n.state !== e && Ql.enqueueReplaceState(n, n.state, null);
    }
    function Ys(e, n, l, s) {
        var f = e.stateNode;
        (f.props = l), (f.state = e.memoizedState), (f.refs = {}), Ls(e);
        var d = n.contextType;
        typeof d == "object" && d !== null
            ? (f.context = _t(d))
            : ((d = yt(n) ? Kn : lt.current), (f.context = Nr(e, d))),
            (f.state = e.memoizedState),
            (d = n.getDerivedStateFromProps),
            typeof d == "function" &&
                (Qs(e, n, d, l), (f.state = e.memoizedState)),
            typeof n.getDerivedStateFromProps == "function" ||
                typeof f.getSnapshotBeforeUpdate == "function" ||
                (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                ((n = f.state),
                typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount(),
                n !== f.state && Ql.enqueueReplaceState(f, f.state, null),
                Ul(e, l, f, s),
                (f.state = e.memoizedState)),
            typeof f.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function _r(e, n) {
        try {
            var l = "",
                s = n;
            do (l += ke(s)), (s = s.return);
            while (s);
            var f = l;
        } catch (d) {
            f =
                `
Error generating stack: ` +
                d.message +
                `
` +
                d.stack;
        }
        return { value: e, source: n, stack: f, digest: null };
    }
    function qs(e, n, l) {
        return { value: e, source: null, stack: l ?? null, digest: n ?? null };
    }
    function Js(e, n) {
        try {
            console.error(n.value);
        } catch (l) {
            setTimeout(function () {
                throw l;
            });
        }
    }
    var Rg = typeof WeakMap == "function" ? WeakMap : Map;
    function Nf(e, n, l) {
        (l = pn(-1, l)), (l.tag = 3), (l.payload = { element: null });
        var s = n.value;
        return (
            (l.callback = function () {
                Zl || ((Zl = !0), (ca = s)), Js(e, n);
            }),
            l
        );
    }
    function Rf(e, n, l) {
        (l = pn(-1, l)), (l.tag = 3);
        var s = e.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var f = n.value;
            (l.payload = function () {
                return s(f);
            }),
                (l.callback = function () {
                    Js(e, n);
                });
        }
        var d = e.stateNode;
        return (
            d !== null &&
                typeof d.componentDidCatch == "function" &&
                (l.callback = function () {
                    Js(e, n),
                        typeof s != "function" &&
                            (zn === null
                                ? (zn = new Set([this]))
                                : zn.add(this));
                    var v = n.stack;
                    this.componentDidCatch(n.value, {
                        componentStack: v !== null ? v : "",
                    });
                }),
            l
        );
    }
    function Pf(e, n, l) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new Rg();
            var f = new Set();
            s.set(n, f);
        } else (f = s.get(n)), f === void 0 && ((f = new Set()), s.set(n, f));
        f.has(l) || (f.add(l), (e = Hg.bind(null, e, n, l)), n.then(e, e));
    }
    function If(e) {
        do {
            var n;
            if (
                ((n = e.tag === 13) &&
                    ((n = e.memoizedState),
                    (n = n !== null ? n.dehydrated !== null : !0)),
                n)
            )
                return e;
            e = e.return;
        } while (e !== null);
        return null;
    }
    function Of(e, n, l, s, f) {
        return e.mode & 1
            ? ((e.flags |= 65536), (e.lanes = f), e)
            : (e === n
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (l.flags |= 131072),
                    (l.flags &= -52805),
                    l.tag === 1 &&
                        (l.alternate === null
                            ? (l.tag = 17)
                            : ((n = pn(-1, 1)), (n.tag = 2), On(l, n, 1))),
                    (l.lanes |= 1)),
              e);
    }
    var Pg = J.ReactCurrentOwner,
        vt = !1;
    function pt(e, n, l, s) {
        n.child = e === null ? Kc(n, null, l, s) : Or(n, e.child, l, s);
    }
    function Lf(e, n, l, s, f) {
        l = l.render;
        var d = n.ref;
        return (
            zr(n, f),
            (s = Ms(e, n, l, s, d, f)),
            (l = Bs()),
            e !== null && !vt
                ? ((n.updateQueue = e.updateQueue),
                  (n.flags &= -2053),
                  (e.lanes &= ~f),
                  mn(e, n, f))
                : (Ue && l && Es(n), (n.flags |= 1), pt(e, n, s, f), n.child)
        );
    }
    function zf(e, n, l, s, f) {
        if (e === null) {
            var d = l.type;
            return typeof d == "function" &&
                !ya(d) &&
                d.defaultProps === void 0 &&
                l.compare === null &&
                l.defaultProps === void 0
                ? ((n.tag = 15), (n.type = d), bf(e, n, d, s, f))
                : ((e = lo(l.type, null, s, n, n.mode, f)),
                  (e.ref = n.ref),
                  (e.return = n),
                  (n.child = e));
        }
        if (((d = e.child), !(e.lanes & f))) {
            var v = d.memoizedProps;
            if (
                ((l = l.compare),
                (l = l !== null ? l : vi),
                l(v, s) && e.ref === n.ref)
            )
                return mn(e, n, f);
        }
        return (
            (n.flags |= 1),
            (e = Fn(d, s)),
            (e.ref = n.ref),
            (e.return = n),
            (n.child = e)
        );
    }
    function bf(e, n, l, s, f) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (vi(d, s) && e.ref === n.ref)
                if (((vt = !1), (n.pendingProps = s = d), (e.lanes & f) !== 0))
                    e.flags & 131072 && (vt = !0);
                else return (n.lanes = e.lanes), mn(e, n, f);
        }
        return $s(e, n, l, s, f);
    }
    function _f(e, n, l) {
        var s = n.pendingProps,
            f = s.children,
            d = e !== null ? e.memoizedState : null;
        if (s.mode === "hidden")
            if (!(n.mode & 1))
                (n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    ze(Fr, Rt),
                    (Rt |= l);
            else {
                if (!(l & 1073741824))
                    return (
                        (e = d !== null ? d.baseLanes | l : l),
                        (n.lanes = n.childLanes = 1073741824),
                        (n.memoizedState = {
                            baseLanes: e,
                            cachePool: null,
                            transitions: null,
                        }),
                        (n.updateQueue = null),
                        ze(Fr, Rt),
                        (Rt |= e),
                        null
                    );
                (n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null,
                }),
                    (s = d !== null ? d.baseLanes : l),
                    ze(Fr, Rt),
                    (Rt |= s);
            }
        else
            d !== null
                ? ((s = d.baseLanes | l), (n.memoizedState = null))
                : (s = l),
                ze(Fr, Rt),
                (Rt |= s);
        return pt(e, n, f, l), n.child;
    }
    function Df(e, n) {
        var l = n.ref;
        ((e === null && l !== null) || (e !== null && e.ref !== l)) &&
            ((n.flags |= 512), (n.flags |= 2097152));
    }
    function $s(e, n, l, s, f) {
        var d = yt(l) ? Kn : lt.current;
        return (
            (d = Nr(n, d)),
            zr(n, f),
            (l = Ms(e, n, l, s, d, f)),
            (s = Bs()),
            e !== null && !vt
                ? ((n.updateQueue = e.updateQueue),
                  (n.flags &= -2053),
                  (e.lanes &= ~f),
                  mn(e, n, f))
                : (Ue && s && Es(n), (n.flags |= 1), pt(e, n, l, f), n.child)
        );
    }
    function Ff(e, n, l, s, f) {
        if (yt(l)) {
            var d = !0;
            Pl(n);
        } else d = !1;
        if ((zr(n, f), n.stateNode === null))
            ql(e, n), Af(n, l, s), Ys(n, l, s, f), (s = !0);
        else if (e === null) {
            var v = n.stateNode,
                E = n.memoizedProps;
            v.props = E;
            var A = v.context,
                z = l.contextType;
            typeof z == "object" && z !== null
                ? (z = _t(z))
                : ((z = yt(l) ? Kn : lt.current), (z = Nr(n, z)));
            var V = l.getDerivedStateFromProps,
                H =
                    typeof V == "function" ||
                    typeof v.getSnapshotBeforeUpdate == "function";
            H ||
                (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof v.componentWillReceiveProps != "function") ||
                ((E !== s || A !== z) && Tf(n, v, s, z)),
                (In = !1);
            var B = n.memoizedState;
            (v.state = B),
                Ul(n, s, v, f),
                (A = n.memoizedState),
                E !== s || B !== A || gt.current || In
                    ? (typeof V == "function" &&
                          (Qs(n, l, V, s), (A = n.memoizedState)),
                      (E = In || jf(n, l, E, s, B, A, z))
                          ? (H ||
                                (typeof v.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof v.componentWillMount !=
                                        "function") ||
                                (typeof v.componentWillMount == "function" &&
                                    v.componentWillMount(),
                                typeof v.UNSAFE_componentWillMount ==
                                    "function" &&
                                    v.UNSAFE_componentWillMount()),
                            typeof v.componentDidMount == "function" &&
                                (n.flags |= 4194308))
                          : (typeof v.componentDidMount == "function" &&
                                (n.flags |= 4194308),
                            (n.memoizedProps = s),
                            (n.memoizedState = A)),
                      (v.props = s),
                      (v.state = A),
                      (v.context = z),
                      (s = E))
                    : (typeof v.componentDidMount == "function" &&
                          (n.flags |= 4194308),
                      (s = !1));
        } else {
            (v = n.stateNode),
                Zc(e, n),
                (E = n.memoizedProps),
                (z = n.type === n.elementType ? E : Xt(n.type, E)),
                (v.props = z),
                (H = n.pendingProps),
                (B = v.context),
                (A = l.contextType),
                typeof A == "object" && A !== null
                    ? (A = _t(A))
                    : ((A = yt(l) ? Kn : lt.current), (A = Nr(n, A)));
            var K = l.getDerivedStateFromProps;
            (V =
                typeof K == "function" ||
                typeof v.getSnapshotBeforeUpdate == "function") ||
                (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
                    typeof v.componentWillReceiveProps != "function") ||
                ((E !== H || B !== A) && Tf(n, v, s, A)),
                (In = !1),
                (B = n.memoizedState),
                (v.state = B),
                Ul(n, s, v, f);
            var ne = n.memoizedState;
            E !== H || B !== ne || gt.current || In
                ? (typeof K == "function" &&
                      (Qs(n, l, K, s), (ne = n.memoizedState)),
                  (z = In || jf(n, l, z, s, B, ne, A) || !1)
                      ? (V ||
                            (typeof v.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof v.componentWillUpdate != "function") ||
                            (typeof v.componentWillUpdate == "function" &&
                                v.componentWillUpdate(s, ne, A),
                            typeof v.UNSAFE_componentWillUpdate == "function" &&
                                v.UNSAFE_componentWillUpdate(s, ne, A)),
                        typeof v.componentDidUpdate == "function" &&
                            (n.flags |= 4),
                        typeof v.getSnapshotBeforeUpdate == "function" &&
                            (n.flags |= 1024))
                      : (typeof v.componentDidUpdate != "function" ||
                            (E === e.memoizedProps && B === e.memoizedState) ||
                            (n.flags |= 4),
                        typeof v.getSnapshotBeforeUpdate != "function" ||
                            (E === e.memoizedProps && B === e.memoizedState) ||
                            (n.flags |= 1024),
                        (n.memoizedProps = s),
                        (n.memoizedState = ne)),
                  (v.props = s),
                  (v.state = ne),
                  (v.context = A),
                  (s = z))
                : (typeof v.componentDidUpdate != "function" ||
                      (E === e.memoizedProps && B === e.memoizedState) ||
                      (n.flags |= 4),
                  typeof v.getSnapshotBeforeUpdate != "function" ||
                      (E === e.memoizedProps && B === e.memoizedState) ||
                      (n.flags |= 1024),
                  (s = !1));
        }
        return Ks(e, n, l, s, d, f);
    }
    function Ks(e, n, l, s, f, d) {
        Df(e, n);
        var v = (n.flags & 128) !== 0;
        if (!s && !v) return f && Vc(n, l, !1), mn(e, n, d);
        (s = n.stateNode), (Pg.current = n);
        var E =
            v && typeof l.getDerivedStateFromError != "function"
                ? null
                : s.render();
        return (
            (n.flags |= 1),
            e !== null && v
                ? ((n.child = Or(n, e.child, null, d)),
                  (n.child = Or(n, null, E, d)))
                : pt(e, n, E, d),
            (n.memoizedState = s.state),
            f && Vc(n, l, !0),
            n.child
        );
    }
    function Uf(e) {
        var n = e.stateNode;
        n.pendingContext
            ? Mc(e, n.pendingContext, n.pendingContext !== n.context)
            : n.context && Mc(e, n.context, !1),
            zs(e, n.containerInfo);
    }
    function Mf(e, n, l, s, f) {
        return Ir(), Ts(f), (n.flags |= 256), pt(e, n, l, s), n.child;
    }
    var Gs = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Zs(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Bf(e, n, l) {
        var s = n.pendingProps,
            f = Me.current,
            d = !1,
            v = (n.flags & 128) !== 0,
            E;
        if (
            ((E = v) ||
                (E =
                    e !== null && e.memoizedState === null
                        ? !1
                        : (f & 2) !== 0),
            E
                ? ((d = !0), (n.flags &= -129))
                : (e === null || e.memoizedState !== null) && (f |= 1),
            ze(Me, f & 1),
            e === null)
        )
            return (
                As(n),
                (e = n.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)
                    ? (n.mode & 1
                          ? e.data === "$!"
                              ? (n.lanes = 8)
                              : (n.lanes = 1073741824)
                          : (n.lanes = 1),
                      null)
                    : ((v = s.children),
                      (e = s.fallback),
                      d
                          ? ((s = n.mode),
                            (d = n.child),
                            (v = { mode: "hidden", children: v }),
                            !(s & 1) && d !== null
                                ? ((d.childLanes = 0), (d.pendingProps = v))
                                : (d = oo(v, s, 0, null)),
                            (e = sr(e, s, l, null)),
                            (d.return = n),
                            (e.return = n),
                            (d.sibling = e),
                            (n.child = d),
                            (n.child.memoizedState = Zs(l)),
                            (n.memoizedState = Gs),
                            e)
                          : ea(n, v))
            );
        if (
            ((f = e.memoizedState),
            f !== null && ((E = f.dehydrated), E !== null))
        )
            return Ig(e, n, v, s, E, f, l);
        if (d) {
            (d = s.fallback), (v = n.mode), (f = e.child), (E = f.sibling);
            var A = { mode: "hidden", children: s.children };
            return (
                !(v & 1) && n.child !== f
                    ? ((s = n.child),
                      (s.childLanes = 0),
                      (s.pendingProps = A),
                      (n.deletions = null))
                    : ((s = Fn(f, A)),
                      (s.subtreeFlags = f.subtreeFlags & 14680064)),
                E !== null
                    ? (d = Fn(E, d))
                    : ((d = sr(d, v, l, null)), (d.flags |= 2)),
                (d.return = n),
                (s.return = n),
                (s.sibling = d),
                (n.child = s),
                (s = d),
                (d = n.child),
                (v = e.child.memoizedState),
                (v =
                    v === null
                        ? Zs(l)
                        : {
                              baseLanes: v.baseLanes | l,
                              cachePool: null,
                              transitions: v.transitions,
                          }),
                (d.memoizedState = v),
                (d.childLanes = e.childLanes & ~l),
                (n.memoizedState = Gs),
                s
            );
        }
        return (
            (d = e.child),
            (e = d.sibling),
            (s = Fn(d, { mode: "visible", children: s.children })),
            !(n.mode & 1) && (s.lanes = l),
            (s.return = n),
            (s.sibling = null),
            e !== null &&
                ((l = n.deletions),
                l === null
                    ? ((n.deletions = [e]), (n.flags |= 16))
                    : l.push(e)),
            (n.child = s),
            (n.memoizedState = null),
            s
        );
    }
    function ea(e, n) {
        return (
            (n = oo({ mode: "visible", children: n }, e.mode, 0, null)),
            (n.return = e),
            (e.child = n)
        );
    }
    function Yl(e, n, l, s) {
        return (
            s !== null && Ts(s),
            Or(n, e.child, null, l),
            (e = ea(n, n.pendingProps.children)),
            (e.flags |= 2),
            (n.memoizedState = null),
            e
        );
    }
    function Ig(e, n, l, s, f, d, v) {
        if (l)
            return n.flags & 256
                ? ((n.flags &= -257), (s = qs(Error(i(422)))), Yl(e, n, v, s))
                : n.memoizedState !== null
                ? ((n.child = e.child), (n.flags |= 128), null)
                : ((d = s.fallback),
                  (f = n.mode),
                  (s = oo(
                      { mode: "visible", children: s.children },
                      f,
                      0,
                      null
                  )),
                  (d = sr(d, f, v, null)),
                  (d.flags |= 2),
                  (s.return = n),
                  (d.return = n),
                  (s.sibling = d),
                  (n.child = s),
                  n.mode & 1 && Or(n, e.child, null, v),
                  (n.child.memoizedState = Zs(v)),
                  (n.memoizedState = Gs),
                  d);
        if (!(n.mode & 1)) return Yl(e, n, v, null);
        if (f.data === "$!") {
            if (((s = f.nextSibling && f.nextSibling.dataset), s))
                var E = s.dgst;
            return (
                (s = E),
                (d = Error(i(419))),
                (s = qs(d, s, void 0)),
                Yl(e, n, v, s)
            );
        }
        if (((E = (v & e.childLanes) !== 0), vt || E)) {
            if (((s = Ze), s !== null)) {
                switch (v & -v) {
                    case 4:
                        f = 2;
                        break;
                    case 16:
                        f = 8;
                        break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        f = 32;
                        break;
                    case 536870912:
                        f = 268435456;
                        break;
                    default:
                        f = 0;
                }
                (f = f & (s.suspendedLanes | v) ? 0 : f),
                    f !== 0 &&
                        f !== d.retryLane &&
                        ((d.retryLane = f), hn(e, f), qt(s, e, f, -1));
            }
            return ga(), (s = qs(Error(i(421)))), Yl(e, n, v, s);
        }
        return f.data === "$?"
            ? ((n.flags |= 128),
              (n.child = e.child),
              (n = Wg.bind(null, e)),
              (f._reactRetry = n),
              null)
            : ((e = d.treeContext),
              (Nt = Tn(f.nextSibling)),
              (Tt = n),
              (Ue = !0),
              (Wt = null),
              e !== null &&
                  ((zt[bt++] = fn),
                  (zt[bt++] = dn),
                  (zt[bt++] = Gn),
                  (fn = e.id),
                  (dn = e.overflow),
                  (Gn = n)),
              (n = ea(n, s.children)),
              (n.flags |= 4096),
              n);
    }
    function Vf(e, n, l) {
        e.lanes |= n;
        var s = e.alternate;
        s !== null && (s.lanes |= n), Is(e.return, n, l);
    }
    function ta(e, n, l, s, f) {
        var d = e.memoizedState;
        d === null
            ? (e.memoizedState = {
                  isBackwards: n,
                  rendering: null,
                  renderingStartTime: 0,
                  last: s,
                  tail: l,
                  tailMode: f,
              })
            : ((d.isBackwards = n),
              (d.rendering = null),
              (d.renderingStartTime = 0),
              (d.last = s),
              (d.tail = l),
              (d.tailMode = f));
    }
    function Hf(e, n, l) {
        var s = n.pendingProps,
            f = s.revealOrder,
            d = s.tail;
        if ((pt(e, n, s.children, l), (s = Me.current), s & 2))
            (s = (s & 1) | 2), (n.flags |= 128);
        else {
            if (e !== null && e.flags & 128)
                e: for (e = n.child; e !== null; ) {
                    if (e.tag === 13) e.memoizedState !== null && Vf(e, l, n);
                    else if (e.tag === 19) Vf(e, l, n);
                    else if (e.child !== null) {
                        (e.child.return = e), (e = e.child);
                        continue;
                    }
                    if (e === n) break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === n) break e;
                        e = e.return;
                    }
                    (e.sibling.return = e.return), (e = e.sibling);
                }
            s &= 1;
        }
        if ((ze(Me, s), !(n.mode & 1))) n.memoizedState = null;
        else
            switch (f) {
                case "forwards":
                    for (l = n.child, f = null; l !== null; )
                        (e = l.alternate),
                            e !== null && Ml(e) === null && (f = l),
                            (l = l.sibling);
                    (l = f),
                        l === null
                            ? ((f = n.child), (n.child = null))
                            : ((f = l.sibling), (l.sibling = null)),
                        ta(n, !1, f, l, d);
                    break;
                case "backwards":
                    for (l = null, f = n.child, n.child = null; f !== null; ) {
                        if (((e = f.alternate), e !== null && Ml(e) === null)) {
                            n.child = f;
                            break;
                        }
                        (e = f.sibling), (f.sibling = l), (l = f), (f = e);
                    }
                    ta(n, !0, l, null, d);
                    break;
                case "together":
                    ta(n, !1, null, null, void 0);
                    break;
                default:
                    n.memoizedState = null;
            }
        return n.child;
    }
    function ql(e, n) {
        !(n.mode & 1) &&
            e !== null &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
    }
    function mn(e, n, l) {
        if (
            (e !== null && (n.dependencies = e.dependencies),
            (rr |= n.lanes),
            !(l & n.childLanes))
        )
            return null;
        if (e !== null && n.child !== e.child) throw Error(i(153));
        if (n.child !== null) {
            for (
                e = n.child,
                    l = Fn(e, e.pendingProps),
                    n.child = l,
                    l.return = n;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (l = l.sibling = Fn(e, e.pendingProps)),
                    (l.return = n);
            l.sibling = null;
        }
        return n.child;
    }
    function Og(e, n, l) {
        switch (n.tag) {
            case 3:
                Uf(n), Ir();
                break;
            case 5:
                nf(n);
                break;
            case 1:
                yt(n.type) && Pl(n);
                break;
            case 4:
                zs(n, n.stateNode.containerInfo);
                break;
            case 10:
                var s = n.type._context,
                    f = n.memoizedProps.value;
                ze(_l, s._currentValue), (s._currentValue = f);
                break;
            case 13:
                if (((s = n.memoizedState), s !== null))
                    return s.dehydrated !== null
                        ? (ze(Me, Me.current & 1), (n.flags |= 128), null)
                        : l & n.child.childLanes
                        ? Bf(e, n, l)
                        : (ze(Me, Me.current & 1),
                          (e = mn(e, n, l)),
                          e !== null ? e.sibling : null);
                ze(Me, Me.current & 1);
                break;
            case 19:
                if (((s = (l & n.childLanes) !== 0), e.flags & 128)) {
                    if (s) return Hf(e, n, l);
                    n.flags |= 128;
                }
                if (
                    ((f = n.memoizedState),
                    f !== null &&
                        ((f.rendering = null),
                        (f.tail = null),
                        (f.lastEffect = null)),
                    ze(Me, Me.current),
                    s)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (n.lanes = 0), _f(e, n, l);
        }
        return mn(e, n, l);
    }
    var Wf, na, Xf, Qf;
    (Wf = function (e, n) {
        for (var l = n.child; l !== null; ) {
            if (l.tag === 5 || l.tag === 6) e.appendChild(l.stateNode);
            else if (l.tag !== 4 && l.child !== null) {
                (l.child.return = l), (l = l.child);
                continue;
            }
            if (l === n) break;
            for (; l.sibling === null; ) {
                if (l.return === null || l.return === n) return;
                l = l.return;
            }
            (l.sibling.return = l.return), (l = l.sibling);
        }
    }),
        (na = function () {}),
        (Xf = function (e, n, l, s) {
            var f = e.memoizedProps;
            if (f !== s) {
                (e = n.stateNode), tr(Zt.current);
                var d = null;
                switch (l) {
                    case "input":
                        (f = Zr(e, f)), (s = Zr(e, s)), (d = []);
                        break;
                    case "select":
                        (f = S({}, f, { value: void 0 })),
                            (s = S({}, s, { value: void 0 })),
                            (d = []);
                        break;
                    case "textarea":
                        (f = ni(e, f)), (s = ni(e, s)), (d = []);
                        break;
                    default:
                        typeof f.onClick != "function" &&
                            typeof s.onClick == "function" &&
                            (e.onclick = Tl);
                }
                nt(l, s);
                var v;
                l = null;
                for (z in f)
                    if (
                        !s.hasOwnProperty(z) &&
                        f.hasOwnProperty(z) &&
                        f[z] != null
                    )
                        if (z === "style") {
                            var E = f[z];
                            for (v in E)
                                E.hasOwnProperty(v) &&
                                    (l || (l = {}), (l[v] = ""));
                        } else
                            z !== "dangerouslySetInnerHTML" &&
                                z !== "children" &&
                                z !== "suppressContentEditableWarning" &&
                                z !== "suppressHydrationWarning" &&
                                z !== "autoFocus" &&
                                (a.hasOwnProperty(z)
                                    ? d || (d = [])
                                    : (d = d || []).push(z, null));
                for (z in s) {
                    var A = s[z];
                    if (
                        ((E = f != null ? f[z] : void 0),
                        s.hasOwnProperty(z) &&
                            A !== E &&
                            (A != null || E != null))
                    )
                        if (z === "style")
                            if (E) {
                                for (v in E)
                                    !E.hasOwnProperty(v) ||
                                        (A && A.hasOwnProperty(v)) ||
                                        (l || (l = {}), (l[v] = ""));
                                for (v in A)
                                    A.hasOwnProperty(v) &&
                                        E[v] !== A[v] &&
                                        (l || (l = {}), (l[v] = A[v]));
                            } else l || (d || (d = []), d.push(z, l)), (l = A);
                        else
                            z === "dangerouslySetInnerHTML"
                                ? ((A = A ? A.__html : void 0),
                                  (E = E ? E.__html : void 0),
                                  A != null &&
                                      E !== A &&
                                      (d = d || []).push(z, A))
                                : z === "children"
                                ? (typeof A != "string" &&
                                      typeof A != "number") ||
                                  (d = d || []).push(z, "" + A)
                                : z !== "suppressContentEditableWarning" &&
                                  z !== "suppressHydrationWarning" &&
                                  (a.hasOwnProperty(z)
                                      ? (A != null &&
                                            z === "onScroll" &&
                                            De("scroll", e),
                                        d || E === A || (d = []))
                                      : (d = d || []).push(z, A));
                }
                l && (d = d || []).push("style", l);
                var z = d;
                (n.updateQueue = z) && (n.flags |= 4);
            }
        }),
        (Qf = function (e, n, l, s) {
            l !== s && (n.flags |= 4);
        });
    function Li(e, n) {
        if (!Ue)
            switch (e.tailMode) {
                case "hidden":
                    n = e.tail;
                    for (var l = null; n !== null; )
                        n.alternate !== null && (l = n), (n = n.sibling);
                    l === null ? (e.tail = null) : (l.sibling = null);
                    break;
                case "collapsed":
                    l = e.tail;
                    for (var s = null; l !== null; )
                        l.alternate !== null && (s = l), (l = l.sibling);
                    s === null
                        ? n || e.tail === null
                            ? (e.tail = null)
                            : (e.tail.sibling = null)
                        : (s.sibling = null);
            }
    }
    function st(e) {
        var n = e.alternate !== null && e.alternate.child === e.child,
            l = 0,
            s = 0;
        if (n)
            for (var f = e.child; f !== null; )
                (l |= f.lanes | f.childLanes),
                    (s |= f.subtreeFlags & 14680064),
                    (s |= f.flags & 14680064),
                    (f.return = e),
                    (f = f.sibling);
        else
            for (f = e.child; f !== null; )
                (l |= f.lanes | f.childLanes),
                    (s |= f.subtreeFlags),
                    (s |= f.flags),
                    (f.return = e),
                    (f = f.sibling);
        return (e.subtreeFlags |= s), (e.childLanes = l), n;
    }
    function Lg(e, n, l) {
        var s = n.pendingProps;
        switch ((Cs(n), n.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return st(n), null;
            case 1:
                return yt(n.type) && Rl(), st(n), null;
            case 3:
                return (
                    (s = n.stateNode),
                    br(),
                    Fe(gt),
                    Fe(lt),
                    Ds(),
                    s.pendingContext &&
                        ((s.context = s.pendingContext),
                        (s.pendingContext = null)),
                    (e === null || e.child === null) &&
                        (zl(n)
                            ? (n.flags |= 4)
                            : e === null ||
                              (e.memoizedState.isDehydrated &&
                                  !(n.flags & 256)) ||
                              ((n.flags |= 1024),
                              Wt !== null && (ha(Wt), (Wt = null)))),
                    na(e, n),
                    st(n),
                    null
                );
            case 5:
                bs(n);
                var f = tr(Ni.current);
                if (((l = n.type), e !== null && n.stateNode != null))
                    Xf(e, n, l, s, f),
                        e.ref !== n.ref &&
                            ((n.flags |= 512), (n.flags |= 2097152));
                else {
                    if (!s) {
                        if (n.stateNode === null) throw Error(i(166));
                        return st(n), null;
                    }
                    if (((e = tr(Zt.current)), zl(n))) {
                        (s = n.stateNode), (l = n.type);
                        var d = n.memoizedProps;
                        switch (
                            ((s[Gt] = n),
                            (s[Ei] = d),
                            (e = (n.mode & 1) !== 0),
                            l)
                        ) {
                            case "dialog":
                                De("cancel", s), De("close", s);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                De("load", s);
                                break;
                            case "video":
                            case "audio":
                                for (f = 0; f < wi.length; f++) De(wi[f], s);
                                break;
                            case "source":
                                De("error", s);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                De("error", s), De("load", s);
                                break;
                            case "details":
                                De("toggle", s);
                                break;
                            case "input":
                                ei(s, d), De("invalid", s);
                                break;
                            case "select":
                                (s._wrapperState = {
                                    wasMultiple: !!d.multiple,
                                }),
                                    De("invalid", s);
                                break;
                            case "textarea":
                                rl(s, d), De("invalid", s);
                        }
                        nt(l, d), (f = null);
                        for (var v in d)
                            if (d.hasOwnProperty(v)) {
                                var E = d[v];
                                v === "children"
                                    ? typeof E == "string"
                                        ? s.textContent !== E &&
                                          (d.suppressHydrationWarning !== !0 &&
                                              Al(s.textContent, E, e),
                                          (f = ["children", E]))
                                        : typeof E == "number" &&
                                          s.textContent !== "" + E &&
                                          (d.suppressHydrationWarning !== !0 &&
                                              Al(s.textContent, E, e),
                                          (f = ["children", "" + E]))
                                    : a.hasOwnProperty(v) &&
                                      E != null &&
                                      v === "onScroll" &&
                                      De("scroll", s);
                            }
                        switch (l) {
                            case "input":
                                sn(s), nl(s, d, !0);
                                break;
                            case "textarea":
                                sn(s), ll(s);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof d.onClick == "function" &&
                                    (s.onclick = Tl);
                        }
                        (s = f),
                            (n.updateQueue = s),
                            s !== null && (n.flags |= 4);
                    } else {
                        (v = f.nodeType === 9 ? f : f.ownerDocument),
                            e === "http://www.w3.org/1999/xhtml" && (e = F(l)),
                            e === "http://www.w3.org/1999/xhtml"
                                ? l === "script"
                                    ? ((e = v.createElement("div")),
                                      (e.innerHTML = "<script></script>"),
                                      (e = e.removeChild(e.firstChild)))
                                    : typeof s.is == "string"
                                    ? (e = v.createElement(l, { is: s.is }))
                                    : ((e = v.createElement(l)),
                                      l === "select" &&
                                          ((v = e),
                                          s.multiple
                                              ? (v.multiple = !0)
                                              : s.size && (v.size = s.size)))
                                : (e = v.createElementNS(e, l)),
                            (e[Gt] = n),
                            (e[Ei] = s),
                            Wf(e, n, !1, !1),
                            (n.stateNode = e);
                        e: {
                            switch (((v = $t(l, s)), l)) {
                                case "dialog":
                                    De("cancel", e), De("close", e), (f = s);
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    De("load", e), (f = s);
                                    break;
                                case "video":
                                case "audio":
                                    for (f = 0; f < wi.length; f++)
                                        De(wi[f], e);
                                    f = s;
                                    break;
                                case "source":
                                    De("error", e), (f = s);
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    De("error", e), De("load", e), (f = s);
                                    break;
                                case "details":
                                    De("toggle", e), (f = s);
                                    break;
                                case "input":
                                    ei(e, s), (f = Zr(e, s)), De("invalid", e);
                                    break;
                                case "option":
                                    f = s;
                                    break;
                                case "select":
                                    (e._wrapperState = {
                                        wasMultiple: !!s.multiple,
                                    }),
                                        (f = S({}, s, { value: void 0 })),
                                        De("invalid", e);
                                    break;
                                case "textarea":
                                    rl(e, s), (f = ni(e, s)), De("invalid", e);
                                    break;
                                default:
                                    f = s;
                            }
                            nt(l, f), (E = f);
                            for (d in E)
                                if (E.hasOwnProperty(d)) {
                                    var A = E[d];
                                    d === "style"
                                        ? wn(e, A)
                                        : d === "dangerouslySetInnerHTML"
                                        ? ((A = A ? A.__html : void 0),
                                          A != null && Ce(e, A))
                                        : d === "children"
                                        ? typeof A == "string"
                                            ? (l !== "textarea" || A !== "") &&
                                              Te(e, A)
                                            : typeof A == "number" &&
                                              Te(e, "" + A)
                                        : d !==
                                              "suppressContentEditableWarning" &&
                                          d !== "suppressHydrationWarning" &&
                                          d !== "autoFocus" &&
                                          (a.hasOwnProperty(d)
                                              ? A != null &&
                                                d === "onScroll" &&
                                                De("scroll", e)
                                              : A != null && U(e, d, A, v));
                                }
                            switch (l) {
                                case "input":
                                    sn(e), nl(e, s, !1);
                                    break;
                                case "textarea":
                                    sn(e), ll(e);
                                    break;
                                case "option":
                                    s.value != null &&
                                        e.setAttribute(
                                            "value",
                                            "" + Ee(s.value)
                                        );
                                    break;
                                case "select":
                                    (e.multiple = !!s.multiple),
                                        (d = s.value),
                                        d != null
                                            ? xn(e, !!s.multiple, d, !1)
                                            : s.defaultValue != null &&
                                              xn(
                                                  e,
                                                  !!s.multiple,
                                                  s.defaultValue,
                                                  !0
                                              );
                                    break;
                                default:
                                    typeof f.onClick == "function" &&
                                        (e.onclick = Tl);
                            }
                            switch (l) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s = !!s.autoFocus;
                                    break e;
                                case "img":
                                    s = !0;
                                    break e;
                                default:
                                    s = !1;
                            }
                        }
                        s && (n.flags |= 4);
                    }
                    n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
                }
                return st(n), null;
            case 6:
                if (e && n.stateNode != null) Qf(e, n, e.memoizedProps, s);
                else {
                    if (typeof s != "string" && n.stateNode === null)
                        throw Error(i(166));
                    if (((l = tr(Ni.current)), tr(Zt.current), zl(n))) {
                        if (
                            ((s = n.stateNode),
                            (l = n.memoizedProps),
                            (s[Gt] = n),
                            (d = s.nodeValue !== l) && ((e = Tt), e !== null))
                        )
                            switch (e.tag) {
                                case 3:
                                    Al(s.nodeValue, l, (e.mode & 1) !== 0);
                                    break;
                                case 5:
                                    e.memoizedProps.suppressHydrationWarning !==
                                        !0 &&
                                        Al(s.nodeValue, l, (e.mode & 1) !== 0);
                            }
                        d && (n.flags |= 4);
                    } else
                        (s = (
                            l.nodeType === 9 ? l : l.ownerDocument
                        ).createTextNode(s)),
                            (s[Gt] = n),
                            (n.stateNode = s);
                }
                return st(n), null;
            case 13:
                if (
                    (Fe(Me),
                    (s = n.memoizedState),
                    e === null ||
                        (e.memoizedState !== null &&
                            e.memoizedState.dehydrated !== null))
                ) {
                    if (Ue && Nt !== null && n.mode & 1 && !(n.flags & 128))
                        qc(), Ir(), (n.flags |= 98560), (d = !1);
                    else if (
                        ((d = zl(n)), s !== null && s.dehydrated !== null)
                    ) {
                        if (e === null) {
                            if (!d) throw Error(i(318));
                            if (
                                ((d = n.memoizedState),
                                (d = d !== null ? d.dehydrated : null),
                                !d)
                            )
                                throw Error(i(317));
                            d[Gt] = n;
                        } else
                            Ir(),
                                !(n.flags & 128) && (n.memoizedState = null),
                                (n.flags |= 4);
                        st(n), (d = !1);
                    } else Wt !== null && (ha(Wt), (Wt = null)), (d = !0);
                    if (!d) return n.flags & 65536 ? n : null;
                }
                return n.flags & 128
                    ? ((n.lanes = l), n)
                    : ((s = s !== null),
                      s !== (e !== null && e.memoizedState !== null) &&
                          s &&
                          ((n.child.flags |= 8192),
                          n.mode & 1 &&
                              (e === null || Me.current & 1
                                  ? Ke === 0 && (Ke = 3)
                                  : ga())),
                      n.updateQueue !== null && (n.flags |= 4),
                      st(n),
                      null);
            case 4:
                return (
                    br(),
                    na(e, n),
                    e === null && ki(n.stateNode.containerInfo),
                    st(n),
                    null
                );
            case 10:
                return Ps(n.type._context), st(n), null;
            case 17:
                return yt(n.type) && Rl(), st(n), null;
            case 19:
                if ((Fe(Me), (d = n.memoizedState), d === null))
                    return st(n), null;
                if (
                    ((s = (n.flags & 128) !== 0), (v = d.rendering), v === null)
                )
                    if (s) Li(d, !1);
                    else {
                        if (Ke !== 0 || (e !== null && e.flags & 128))
                            for (e = n.child; e !== null; ) {
                                if (((v = Ml(e)), v !== null)) {
                                    for (
                                        n.flags |= 128,
                                            Li(d, !1),
                                            s = v.updateQueue,
                                            s !== null &&
                                                ((n.updateQueue = s),
                                                (n.flags |= 4)),
                                            n.subtreeFlags = 0,
                                            s = l,
                                            l = n.child;
                                        l !== null;

                                    )
                                        (d = l),
                                            (e = s),
                                            (d.flags &= 14680066),
                                            (v = d.alternate),
                                            v === null
                                                ? ((d.childLanes = 0),
                                                  (d.lanes = e),
                                                  (d.child = null),
                                                  (d.subtreeFlags = 0),
                                                  (d.memoizedProps = null),
                                                  (d.memoizedState = null),
                                                  (d.updateQueue = null),
                                                  (d.dependencies = null),
                                                  (d.stateNode = null))
                                                : ((d.childLanes =
                                                      v.childLanes),
                                                  (d.lanes = v.lanes),
                                                  (d.child = v.child),
                                                  (d.subtreeFlags = 0),
                                                  (d.deletions = null),
                                                  (d.memoizedProps =
                                                      v.memoizedProps),
                                                  (d.memoizedState =
                                                      v.memoizedState),
                                                  (d.updateQueue =
                                                      v.updateQueue),
                                                  (d.type = v.type),
                                                  (e = v.dependencies),
                                                  (d.dependencies =
                                                      e === null
                                                          ? null
                                                          : {
                                                                lanes: e.lanes,
                                                                firstContext:
                                                                    e.firstContext,
                                                            })),
                                            (l = l.sibling);
                                    return (
                                        ze(Me, (Me.current & 1) | 2), n.child
                                    );
                                }
                                e = e.sibling;
                            }
                        d.tail !== null &&
                            We() > Ur &&
                            ((n.flags |= 128),
                            (s = !0),
                            Li(d, !1),
                            (n.lanes = 4194304));
                    }
                else {
                    if (!s)
                        if (((e = Ml(v)), e !== null)) {
                            if (
                                ((n.flags |= 128),
                                (s = !0),
                                (l = e.updateQueue),
                                l !== null &&
                                    ((n.updateQueue = l), (n.flags |= 4)),
                                Li(d, !0),
                                d.tail === null &&
                                    d.tailMode === "hidden" &&
                                    !v.alternate &&
                                    !Ue)
                            )
                                return st(n), null;
                        } else
                            2 * We() - d.renderingStartTime > Ur &&
                                l !== 1073741824 &&
                                ((n.flags |= 128),
                                (s = !0),
                                Li(d, !1),
                                (n.lanes = 4194304));
                    d.isBackwards
                        ? ((v.sibling = n.child), (n.child = v))
                        : ((l = d.last),
                          l !== null ? (l.sibling = v) : (n.child = v),
                          (d.last = v));
                }
                return d.tail !== null
                    ? ((n = d.tail),
                      (d.rendering = n),
                      (d.tail = n.sibling),
                      (d.renderingStartTime = We()),
                      (n.sibling = null),
                      (l = Me.current),
                      ze(Me, s ? (l & 1) | 2 : l & 1),
                      n)
                    : (st(n), null);
            case 22:
            case 23:
                return (
                    ma(),
                    (s = n.memoizedState !== null),
                    e !== null &&
                        (e.memoizedState !== null) !== s &&
                        (n.flags |= 8192),
                    s && n.mode & 1
                        ? Rt & 1073741824 &&
                          (st(n), n.subtreeFlags & 6 && (n.flags |= 8192))
                        : st(n),
                    null
                );
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(i(156, n.tag));
    }
    function zg(e, n) {
        switch ((Cs(n), n.tag)) {
            case 1:
                return (
                    yt(n.type) && Rl(),
                    (e = n.flags),
                    e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
                );
            case 3:
                return (
                    br(),
                    Fe(gt),
                    Fe(lt),
                    Ds(),
                    (e = n.flags),
                    e & 65536 && !(e & 128)
                        ? ((n.flags = (e & -65537) | 128), n)
                        : null
                );
            case 5:
                return bs(n), null;
            case 13:
                if (
                    (Fe(Me),
                    (e = n.memoizedState),
                    e !== null && e.dehydrated !== null)
                ) {
                    if (n.alternate === null) throw Error(i(340));
                    Ir();
                }
                return (
                    (e = n.flags),
                    e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
                );
            case 19:
                return Fe(Me), null;
            case 4:
                return br(), null;
            case 10:
                return Ps(n.type._context), null;
            case 22:
            case 23:
                return ma(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Jl = !1,
        at = !1,
        bg = typeof WeakSet == "function" ? WeakSet : Set,
        ee = null;
    function Dr(e, n) {
        var l = e.ref;
        if (l !== null)
            if (typeof l == "function")
                try {
                    l(null);
                } catch (s) {
                    He(e, n, s);
                }
            else l.current = null;
    }
    function ra(e, n, l) {
        try {
            l();
        } catch (s) {
            He(e, n, s);
        }
    }
    var Yf = !1;
    function _g(e, n) {
        if (((ms = ml), (e = Cc()), ss(e))) {
            if ("selectionStart" in e)
                var l = { start: e.selectionStart, end: e.selectionEnd };
            else
                e: {
                    l = ((l = e.ownerDocument) && l.defaultView) || window;
                    var s = l.getSelection && l.getSelection();
                    if (s && s.rangeCount !== 0) {
                        l = s.anchorNode;
                        var f = s.anchorOffset,
                            d = s.focusNode;
                        s = s.focusOffset;
                        try {
                            l.nodeType, d.nodeType;
                        } catch {
                            l = null;
                            break e;
                        }
                        var v = 0,
                            E = -1,
                            A = -1,
                            z = 0,
                            V = 0,
                            H = e,
                            B = null;
                        t: for (;;) {
                            for (
                                var K;
                                H !== l ||
                                    (f !== 0 && H.nodeType !== 3) ||
                                    (E = v + f),
                                    H !== d ||
                                        (s !== 0 && H.nodeType !== 3) ||
                                        (A = v + s),
                                    H.nodeType === 3 &&
                                        (v += H.nodeValue.length),
                                    (K = H.firstChild) !== null;

                            )
                                (B = H), (H = K);
                            for (;;) {
                                if (H === e) break t;
                                if (
                                    (B === l && ++z === f && (E = v),
                                    B === d && ++V === s && (A = v),
                                    (K = H.nextSibling) !== null)
                                )
                                    break;
                                (H = B), (B = H.parentNode);
                            }
                            H = K;
                        }
                        l = E === -1 || A === -1 ? null : { start: E, end: A };
                    } else l = null;
                }
            l = l || { start: 0, end: 0 };
        } else l = null;
        for (
            gs = { focusedElem: e, selectionRange: l }, ml = !1, ee = n;
            ee !== null;

        )
            if (
                ((n = ee),
                (e = n.child),
                (n.subtreeFlags & 1028) !== 0 && e !== null)
            )
                (e.return = n), (ee = e);
            else
                for (; ee !== null; ) {
                    n = ee;
                    try {
                        var ne = n.alternate;
                        if (n.flags & 1024)
                            switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    break;
                                case 1:
                                    if (ne !== null) {
                                        var re = ne.memoizedProps,
                                            Xe = ne.memoizedState,
                                            I = n.stateNode,
                                            N = I.getSnapshotBeforeUpdate(
                                                n.elementType === n.type
                                                    ? re
                                                    : Xt(n.type, re),
                                                Xe
                                            );
                                        I.__reactInternalSnapshotBeforeUpdate =
                                            N;
                                    }
                                    break;
                                case 3:
                                    var O = n.stateNode.containerInfo;
                                    O.nodeType === 1
                                        ? (O.textContent = "")
                                        : O.nodeType === 9 &&
                                          O.documentElement &&
                                          O.removeChild(O.documentElement);
                                    break;
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break;
                                default:
                                    throw Error(i(163));
                            }
                    } catch (Q) {
                        He(n, n.return, Q);
                    }
                    if (((e = n.sibling), e !== null)) {
                        (e.return = n.return), (ee = e);
                        break;
                    }
                    ee = n.return;
                }
        return (ne = Yf), (Yf = !1), ne;
    }
    function zi(e, n, l) {
        var s = n.updateQueue;
        if (((s = s !== null ? s.lastEffect : null), s !== null)) {
            var f = (s = s.next);
            do {
                if ((f.tag & e) === e) {
                    var d = f.destroy;
                    (f.destroy = void 0), d !== void 0 && ra(n, l, d);
                }
                f = f.next;
            } while (f !== s);
        }
    }
    function $l(e, n) {
        if (
            ((n = n.updateQueue),
            (n = n !== null ? n.lastEffect : null),
            n !== null)
        ) {
            var l = (n = n.next);
            do {
                if ((l.tag & e) === e) {
                    var s = l.create;
                    l.destroy = s();
                }
                l = l.next;
            } while (l !== n);
        }
    }
    function ia(e) {
        var n = e.ref;
        if (n !== null) {
            var l = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = l;
                    break;
                default:
                    e = l;
            }
            typeof n == "function" ? n(e) : (n.current = e);
        }
    }
    function qf(e) {
        var n = e.alternate;
        n !== null && ((e.alternate = null), qf(n)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            e.tag === 5 &&
                ((n = e.stateNode),
                n !== null &&
                    (delete n[Gt],
                    delete n[Ei],
                    delete n[ws],
                    delete n[vg],
                    delete n[xg])),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
    }
    function Jf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function $f(e) {
        e: for (;;) {
            for (; e.sibling === null; ) {
                if (e.return === null || Jf(e.return)) return null;
                e = e.return;
            }
            for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

            ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                (e.child.return = e), (e = e.child);
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function la(e, n, l) {
        var s = e.tag;
        if (s === 5 || s === 6)
            (e = e.stateNode),
                n
                    ? l.nodeType === 8
                        ? l.parentNode.insertBefore(e, n)
                        : l.insertBefore(e, n)
                    : (l.nodeType === 8
                          ? ((n = l.parentNode), n.insertBefore(e, l))
                          : ((n = l), n.appendChild(e)),
                      (l = l._reactRootContainer),
                      l != null || n.onclick !== null || (n.onclick = Tl));
        else if (s !== 4 && ((e = e.child), e !== null))
            for (la(e, n, l), e = e.sibling; e !== null; )
                la(e, n, l), (e = e.sibling);
    }
    function oa(e, n, l) {
        var s = e.tag;
        if (s === 5 || s === 6)
            (e = e.stateNode), n ? l.insertBefore(e, n) : l.appendChild(e);
        else if (s !== 4 && ((e = e.child), e !== null))
            for (oa(e, n, l), e = e.sibling; e !== null; )
                oa(e, n, l), (e = e.sibling);
    }
    var rt = null,
        Qt = !1;
    function Ln(e, n, l) {
        for (l = l.child; l !== null; ) Kf(e, n, l), (l = l.sibling);
    }
    function Kf(e, n, l) {
        if (Kt && typeof Kt.onCommitFiberUnmount == "function")
            try {
                Kt.onCommitFiberUnmount(ul, l);
            } catch {}
        switch (l.tag) {
            case 5:
                at || Dr(l, n);
            case 6:
                var s = rt,
                    f = Qt;
                (rt = null),
                    Ln(e, n, l),
                    (rt = s),
                    (Qt = f),
                    rt !== null &&
                        (Qt
                            ? ((e = rt),
                              (l = l.stateNode),
                              e.nodeType === 8
                                  ? e.parentNode.removeChild(l)
                                  : e.removeChild(l))
                            : rt.removeChild(l.stateNode));
                break;
            case 18:
                rt !== null &&
                    (Qt
                        ? ((e = rt),
                          (l = l.stateNode),
                          e.nodeType === 8
                              ? xs(e.parentNode, l)
                              : e.nodeType === 1 && xs(e, l),
                          di(e))
                        : xs(rt, l.stateNode));
                break;
            case 4:
                (s = rt),
                    (f = Qt),
                    (rt = l.stateNode.containerInfo),
                    (Qt = !0),
                    Ln(e, n, l),
                    (rt = s),
                    (Qt = f);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (
                    !at &&
                    ((s = l.updateQueue),
                    s !== null && ((s = s.lastEffect), s !== null))
                ) {
                    f = s = s.next;
                    do {
                        var d = f,
                            v = d.destroy;
                        (d = d.tag),
                            v !== void 0 && (d & 2 || d & 4) && ra(l, n, v),
                            (f = f.next);
                    } while (f !== s);
                }
                Ln(e, n, l);
                break;
            case 1:
                if (
                    !at &&
                    (Dr(l, n),
                    (s = l.stateNode),
                    typeof s.componentWillUnmount == "function")
                )
                    try {
                        (s.props = l.memoizedProps),
                            (s.state = l.memoizedState),
                            s.componentWillUnmount();
                    } catch (E) {
                        He(l, n, E);
                    }
                Ln(e, n, l);
                break;
            case 21:
                Ln(e, n, l);
                break;
            case 22:
                l.mode & 1
                    ? ((at = (s = at) || l.memoizedState !== null),
                      Ln(e, n, l),
                      (at = s))
                    : Ln(e, n, l);
                break;
            default:
                Ln(e, n, l);
        }
    }
    function Gf(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var l = e.stateNode;
            l === null && (l = e.stateNode = new bg()),
                n.forEach(function (s) {
                    var f = Xg.bind(null, e, s);
                    l.has(s) || (l.add(s), s.then(f, f));
                });
        }
    }
    function Yt(e, n) {
        var l = n.deletions;
        if (l !== null)
            for (var s = 0; s < l.length; s++) {
                var f = l[s];
                try {
                    var d = e,
                        v = n,
                        E = v;
                    e: for (; E !== null; ) {
                        switch (E.tag) {
                            case 5:
                                (rt = E.stateNode), (Qt = !1);
                                break e;
                            case 3:
                                (rt = E.stateNode.containerInfo), (Qt = !0);
                                break e;
                            case 4:
                                (rt = E.stateNode.containerInfo), (Qt = !0);
                                break e;
                        }
                        E = E.return;
                    }
                    if (rt === null) throw Error(i(160));
                    Kf(d, v, f), (rt = null), (Qt = !1);
                    var A = f.alternate;
                    A !== null && (A.return = null), (f.return = null);
                } catch (z) {
                    He(f, n, z);
                }
            }
        if (n.subtreeFlags & 12854)
            for (n = n.child; n !== null; ) Zf(n, e), (n = n.sibling);
    }
    function Zf(e, n) {
        var l = e.alternate,
            s = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if ((Yt(n, e), tn(e), s & 4)) {
                    try {
                        zi(3, e, e.return), $l(3, e);
                    } catch (re) {
                        He(e, e.return, re);
                    }
                    try {
                        zi(5, e, e.return);
                    } catch (re) {
                        He(e, e.return, re);
                    }
                }
                break;
            case 1:
                Yt(n, e), tn(e), s & 512 && l !== null && Dr(l, l.return);
                break;
            case 5:
                if (
                    (Yt(n, e),
                    tn(e),
                    s & 512 && l !== null && Dr(l, l.return),
                    e.flags & 32)
                ) {
                    var f = e.stateNode;
                    try {
                        Te(f, "");
                    } catch (re) {
                        He(e, e.return, re);
                    }
                }
                if (s & 4 && ((f = e.stateNode), f != null)) {
                    var d = e.memoizedProps,
                        v = l !== null ? l.memoizedProps : d,
                        E = e.type,
                        A = e.updateQueue;
                    if (((e.updateQueue = null), A !== null))
                        try {
                            E === "input" &&
                                d.type === "radio" &&
                                d.name != null &&
                                ti(f, d),
                                $t(E, v);
                            var z = $t(E, d);
                            for (v = 0; v < A.length; v += 2) {
                                var V = A[v],
                                    H = A[v + 1];
                                V === "style"
                                    ? wn(f, H)
                                    : V === "dangerouslySetInnerHTML"
                                    ? Ce(f, H)
                                    : V === "children"
                                    ? Te(f, H)
                                    : U(f, V, H, z);
                            }
                            switch (E) {
                                case "input":
                                    mr(f, d);
                                    break;
                                case "textarea":
                                    il(f, d);
                                    break;
                                case "select":
                                    var B = f._wrapperState.wasMultiple;
                                    f._wrapperState.wasMultiple = !!d.multiple;
                                    var K = d.value;
                                    K != null
                                        ? xn(f, !!d.multiple, K, !1)
                                        : B !== !!d.multiple &&
                                          (d.defaultValue != null
                                              ? xn(
                                                    f,
                                                    !!d.multiple,
                                                    d.defaultValue,
                                                    !0
                                                )
                                              : xn(
                                                    f,
                                                    !!d.multiple,
                                                    d.multiple ? [] : "",
                                                    !1
                                                ));
                            }
                            f[Ei] = d;
                        } catch (re) {
                            He(e, e.return, re);
                        }
                }
                break;
            case 6:
                if ((Yt(n, e), tn(e), s & 4)) {
                    if (e.stateNode === null) throw Error(i(162));
                    (f = e.stateNode), (d = e.memoizedProps);
                    try {
                        f.nodeValue = d;
                    } catch (re) {
                        He(e, e.return, re);
                    }
                }
                break;
            case 3:
                if (
                    (Yt(n, e),
                    tn(e),
                    s & 4 && l !== null && l.memoizedState.isDehydrated)
                )
                    try {
                        di(n.containerInfo);
                    } catch (re) {
                        He(e, e.return, re);
                    }
                break;
            case 4:
                Yt(n, e), tn(e);
                break;
            case 13:
                Yt(n, e),
                    tn(e),
                    (f = e.child),
                    f.flags & 8192 &&
                        ((d = f.memoizedState !== null),
                        (f.stateNode.isHidden = d),
                        !d ||
                            (f.alternate !== null &&
                                f.alternate.memoizedState !== null) ||
                            (ua = We())),
                    s & 4 && Gf(e);
                break;
            case 22:
                if (
                    ((V = l !== null && l.memoizedState !== null),
                    e.mode & 1
                        ? ((at = (z = at) || V), Yt(n, e), (at = z))
                        : Yt(n, e),
                    tn(e),
                    s & 8192)
                ) {
                    if (
                        ((z = e.memoizedState !== null),
                        (e.stateNode.isHidden = z) && !V && e.mode & 1)
                    )
                        for (ee = e, V = e.child; V !== null; ) {
                            for (H = ee = V; ee !== null; ) {
                                switch (((B = ee), (K = B.child), B.tag)) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        zi(4, B, B.return);
                                        break;
                                    case 1:
                                        Dr(B, B.return);
                                        var ne = B.stateNode;
                                        if (
                                            typeof ne.componentWillUnmount ==
                                            "function"
                                        ) {
                                            (s = B), (l = B.return);
                                            try {
                                                (n = s),
                                                    (ne.props =
                                                        n.memoizedProps),
                                                    (ne.state =
                                                        n.memoizedState),
                                                    ne.componentWillUnmount();
                                            } catch (re) {
                                                He(s, l, re);
                                            }
                                        }
                                        break;
                                    case 5:
                                        Dr(B, B.return);
                                        break;
                                    case 22:
                                        if (B.memoizedState !== null) {
                                            nd(H);
                                            continue;
                                        }
                                }
                                K !== null ? ((K.return = B), (ee = K)) : nd(H);
                            }
                            V = V.sibling;
                        }
                    e: for (V = null, H = e; ; ) {
                        if (H.tag === 5) {
                            if (V === null) {
                                V = H;
                                try {
                                    (f = H.stateNode),
                                        z
                                            ? ((d = f.style),
                                              typeof d.setProperty == "function"
                                                  ? d.setProperty(
                                                        "display",
                                                        "none",
                                                        "important"
                                                    )
                                                  : (d.display = "none"))
                                            : ((E = H.stateNode),
                                              (A = H.memoizedProps.style),
                                              (v =
                                                  A != null &&
                                                  A.hasOwnProperty("display")
                                                      ? A.display
                                                      : null),
                                              (E.style.display = Lt(
                                                  "display",
                                                  v
                                              )));
                                } catch (re) {
                                    He(e, e.return, re);
                                }
                            }
                        } else if (H.tag === 6) {
                            if (V === null)
                                try {
                                    H.stateNode.nodeValue = z
                                        ? ""
                                        : H.memoizedProps;
                                } catch (re) {
                                    He(e, e.return, re);
                                }
                        } else if (
                            ((H.tag !== 22 && H.tag !== 23) ||
                                H.memoizedState === null ||
                                H === e) &&
                            H.child !== null
                        ) {
                            (H.child.return = H), (H = H.child);
                            continue;
                        }
                        if (H === e) break e;
                        for (; H.sibling === null; ) {
                            if (H.return === null || H.return === e) break e;
                            V === H && (V = null), (H = H.return);
                        }
                        V === H && (V = null),
                            (H.sibling.return = H.return),
                            (H = H.sibling);
                    }
                }
                break;
            case 19:
                Yt(n, e), tn(e), s & 4 && Gf(e);
                break;
            case 21:
                break;
            default:
                Yt(n, e), tn(e);
        }
    }
    function tn(e) {
        var n = e.flags;
        if (n & 2) {
            try {
                e: {
                    for (var l = e.return; l !== null; ) {
                        if (Jf(l)) {
                            var s = l;
                            break e;
                        }
                        l = l.return;
                    }
                    throw Error(i(160));
                }
                switch (s.tag) {
                    case 5:
                        var f = s.stateNode;
                        s.flags & 32 && (Te(f, ""), (s.flags &= -33));
                        var d = $f(e);
                        oa(e, d, f);
                        break;
                    case 3:
                    case 4:
                        var v = s.stateNode.containerInfo,
                            E = $f(e);
                        la(e, E, v);
                        break;
                    default:
                        throw Error(i(161));
                }
            } catch (A) {
                He(e, e.return, A);
            }
            e.flags &= -3;
        }
        n & 4096 && (e.flags &= -4097);
    }
    function Dg(e, n, l) {
        (ee = e), ed(e);
    }
    function ed(e, n, l) {
        for (var s = (e.mode & 1) !== 0; ee !== null; ) {
            var f = ee,
                d = f.child;
            if (f.tag === 22 && s) {
                var v = f.memoizedState !== null || Jl;
                if (!v) {
                    var E = f.alternate,
                        A = (E !== null && E.memoizedState !== null) || at;
                    E = Jl;
                    var z = at;
                    if (((Jl = v), (at = A) && !z))
                        for (ee = f; ee !== null; )
                            (v = ee),
                                (A = v.child),
                                v.tag === 22 && v.memoizedState !== null
                                    ? rd(f)
                                    : A !== null
                                    ? ((A.return = v), (ee = A))
                                    : rd(f);
                    for (; d !== null; ) (ee = d), ed(d), (d = d.sibling);
                    (ee = f), (Jl = E), (at = z);
                }
                td(e);
            } else
                f.subtreeFlags & 8772 && d !== null
                    ? ((d.return = f), (ee = d))
                    : td(e);
        }
    }
    function td(e) {
        for (; ee !== null; ) {
            var n = ee;
            if (n.flags & 8772) {
                var l = n.alternate;
                try {
                    if (n.flags & 8772)
                        switch (n.tag) {
                            case 0:
                            case 11:
                            case 15:
                                at || $l(5, n);
                                break;
                            case 1:
                                var s = n.stateNode;
                                if (n.flags & 4 && !at)
                                    if (l === null) s.componentDidMount();
                                    else {
                                        var f =
                                            n.elementType === n.type
                                                ? l.memoizedProps
                                                : Xt(n.type, l.memoizedProps);
                                        s.componentDidUpdate(
                                            f,
                                            l.memoizedState,
                                            s.__reactInternalSnapshotBeforeUpdate
                                        );
                                    }
                                var d = n.updateQueue;
                                d !== null && tf(n, d, s);
                                break;
                            case 3:
                                var v = n.updateQueue;
                                if (v !== null) {
                                    if (((l = null), n.child !== null))
                                        switch (n.child.tag) {
                                            case 5:
                                                l = n.child.stateNode;
                                                break;
                                            case 1:
                                                l = n.child.stateNode;
                                        }
                                    tf(n, v, l);
                                }
                                break;
                            case 5:
                                var E = n.stateNode;
                                if (l === null && n.flags & 4) {
                                    l = E;
                                    var A = n.memoizedProps;
                                    switch (n.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            A.autoFocus && l.focus();
                                            break;
                                        case "img":
                                            A.src && (l.src = A.src);
                                    }
                                }
                                break;
                            case 6:
                                break;
                            case 4:
                                break;
                            case 12:
                                break;
                            case 13:
                                if (n.memoizedState === null) {
                                    var z = n.alternate;
                                    if (z !== null) {
                                        var V = z.memoizedState;
                                        if (V !== null) {
                                            var H = V.dehydrated;
                                            H !== null && di(H);
                                        }
                                    }
                                }
                                break;
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25:
                                break;
                            default:
                                throw Error(i(163));
                        }
                    at || (n.flags & 512 && ia(n));
                } catch (B) {
                    He(n, n.return, B);
                }
            }
            if (n === e) {
                ee = null;
                break;
            }
            if (((l = n.sibling), l !== null)) {
                (l.return = n.return), (ee = l);
                break;
            }
            ee = n.return;
        }
    }
    function nd(e) {
        for (; ee !== null; ) {
            var n = ee;
            if (n === e) {
                ee = null;
                break;
            }
            var l = n.sibling;
            if (l !== null) {
                (l.return = n.return), (ee = l);
                break;
            }
            ee = n.return;
        }
    }
    function rd(e) {
        for (; ee !== null; ) {
            var n = ee;
            try {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var l = n.return;
                        try {
                            $l(4, n);
                        } catch (A) {
                            He(n, l, A);
                        }
                        break;
                    case 1:
                        var s = n.stateNode;
                        if (typeof s.componentDidMount == "function") {
                            var f = n.return;
                            try {
                                s.componentDidMount();
                            } catch (A) {
                                He(n, f, A);
                            }
                        }
                        var d = n.return;
                        try {
                            ia(n);
                        } catch (A) {
                            He(n, d, A);
                        }
                        break;
                    case 5:
                        var v = n.return;
                        try {
                            ia(n);
                        } catch (A) {
                            He(n, v, A);
                        }
                }
            } catch (A) {
                He(n, n.return, A);
            }
            if (n === e) {
                ee = null;
                break;
            }
            var E = n.sibling;
            if (E !== null) {
                (E.return = n.return), (ee = E);
                break;
            }
            ee = n.return;
        }
    }
    var Fg = Math.ceil,
        Kl = J.ReactCurrentDispatcher,
        sa = J.ReactCurrentOwner,
        Ft = J.ReactCurrentBatchConfig,
        Ne = 0,
        Ze = null,
        Ye = null,
        it = 0,
        Rt = 0,
        Fr = Nn(0),
        Ke = 0,
        bi = null,
        rr = 0,
        Gl = 0,
        aa = 0,
        _i = null,
        xt = null,
        ua = 0,
        Ur = 1 / 0,
        gn = null,
        Zl = !1,
        ca = null,
        zn = null,
        eo = !1,
        bn = null,
        to = 0,
        Di = 0,
        fa = null,
        no = -1,
        ro = 0;
    function mt() {
        return Ne & 6 ? We() : no !== -1 ? no : (no = We());
    }
    function _n(e) {
        return e.mode & 1
            ? Ne & 2 && it !== 0
                ? it & -it
                : kg.transition !== null
                ? (ro === 0 && (ro = Ju()), ro)
                : ((e = Le),
                  e !== 0 ||
                      ((e = window.event),
                      (e = e === void 0 ? 16 : ic(e.type))),
                  e)
            : 1;
    }
    function qt(e, n, l, s) {
        if (50 < Di) throw ((Di = 0), (fa = null), Error(i(185)));
        si(e, l, s),
            (!(Ne & 2) || e !== Ze) &&
                (e === Ze && (!(Ne & 2) && (Gl |= l), Ke === 4 && Dn(e, it)),
                wt(e, s),
                l === 1 &&
                    Ne === 0 &&
                    !(n.mode & 1) &&
                    ((Ur = We() + 500), Il && Pn()));
    }
    function wt(e, n) {
        var l = e.callbackNode;
        km(e, n);
        var s = dl(e, e === Ze ? it : 0);
        if (s === 0)
            l !== null && Qu(l),
                (e.callbackNode = null),
                (e.callbackPriority = 0);
        else if (((n = s & -s), e.callbackPriority !== n)) {
            if ((l != null && Qu(l), n === 1))
                e.tag === 0 ? wg(ld.bind(null, e)) : Hc(ld.bind(null, e)),
                    gg(function () {
                        !(Ne & 6) && Pn();
                    }),
                    (l = null);
            else {
                switch ($u(s)) {
                    case 1:
                        l = Wo;
                        break;
                    case 4:
                        l = Yu;
                        break;
                    case 16:
                        l = al;
                        break;
                    case 536870912:
                        l = qu;
                        break;
                    default:
                        l = al;
                }
                l = hd(l, id.bind(null, e));
            }
            (e.callbackPriority = n), (e.callbackNode = l);
        }
    }
    function id(e, n) {
        if (((no = -1), (ro = 0), Ne & 6)) throw Error(i(327));
        var l = e.callbackNode;
        if (Mr() && e.callbackNode !== l) return null;
        var s = dl(e, e === Ze ? it : 0);
        if (s === 0) return null;
        if (s & 30 || s & e.expiredLanes || n) n = io(e, s);
        else {
            n = s;
            var f = Ne;
            Ne |= 2;
            var d = sd();
            (Ze !== e || it !== n) &&
                ((gn = null), (Ur = We() + 500), lr(e, n));
            do
                try {
                    Bg();
                    break;
                } catch (E) {
                    od(e, E);
                }
            while (!0);
            Rs(),
                (Kl.current = d),
                (Ne = f),
                Ye !== null ? (n = 0) : ((Ze = null), (it = 0), (n = Ke));
        }
        if (n !== 0) {
            if (
                (n === 2 && ((f = Xo(e)), f !== 0 && ((s = f), (n = da(e, f)))),
                n === 1)
            )
                throw ((l = bi), lr(e, 0), Dn(e, s), wt(e, We()), l);
            if (n === 6) Dn(e, s);
            else {
                if (
                    ((f = e.current.alternate),
                    !(s & 30) &&
                        !Ug(f) &&
                        ((n = io(e, s)),
                        n === 2 &&
                            ((d = Xo(e)), d !== 0 && ((s = d), (n = da(e, d)))),
                        n === 1))
                )
                    throw ((l = bi), lr(e, 0), Dn(e, s), wt(e, We()), l);
                switch (((e.finishedWork = f), (e.finishedLanes = s), n)) {
                    case 0:
                    case 1:
                        throw Error(i(345));
                    case 2:
                        or(e, xt, gn);
                        break;
                    case 3:
                        if (
                            (Dn(e, s),
                            (s & 130023424) === s &&
                                ((n = ua + 500 - We()), 10 < n))
                        ) {
                            if (dl(e, 0) !== 0) break;
                            if (((f = e.suspendedLanes), (f & s) !== s)) {
                                mt(), (e.pingedLanes |= e.suspendedLanes & f);
                                break;
                            }
                            e.timeoutHandle = vs(or.bind(null, e, xt, gn), n);
                            break;
                        }
                        or(e, xt, gn);
                        break;
                    case 4:
                        if ((Dn(e, s), (s & 4194240) === s)) break;
                        for (n = e.eventTimes, f = -1; 0 < s; ) {
                            var v = 31 - Vt(s);
                            (d = 1 << v),
                                (v = n[v]),
                                v > f && (f = v),
                                (s &= ~d);
                        }
                        if (
                            ((s = f),
                            (s = We() - s),
                            (s =
                                (120 > s
                                    ? 120
                                    : 480 > s
                                    ? 480
                                    : 1080 > s
                                    ? 1080
                                    : 1920 > s
                                    ? 1920
                                    : 3e3 > s
                                    ? 3e3
                                    : 4320 > s
                                    ? 4320
                                    : 1960 * Fg(s / 1960)) - s),
                            10 < s)
                        ) {
                            e.timeoutHandle = vs(or.bind(null, e, xt, gn), s);
                            break;
                        }
                        or(e, xt, gn);
                        break;
                    case 5:
                        or(e, xt, gn);
                        break;
                    default:
                        throw Error(i(329));
                }
            }
        }
        return wt(e, We()), e.callbackNode === l ? id.bind(null, e) : null;
    }
    function da(e, n) {
        var l = _i;
        return (
            e.current.memoizedState.isDehydrated && (lr(e, n).flags |= 256),
            (e = io(e, n)),
            e !== 2 && ((n = xt), (xt = l), n !== null && ha(n)),
            e
        );
    }
    function ha(e) {
        xt === null ? (xt = e) : xt.push.apply(xt, e);
    }
    function Ug(e) {
        for (var n = e; ; ) {
            if (n.flags & 16384) {
                var l = n.updateQueue;
                if (l !== null && ((l = l.stores), l !== null))
                    for (var s = 0; s < l.length; s++) {
                        var f = l[s],
                            d = f.getSnapshot;
                        f = f.value;
                        try {
                            if (!Ht(d(), f)) return !1;
                        } catch {
                            return !1;
                        }
                    }
            }
            if (((l = n.child), n.subtreeFlags & 16384 && l !== null))
                (l.return = n), (n = l);
            else {
                if (n === e) break;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === e) return !0;
                    n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
            }
        }
        return !0;
    }
    function Dn(e, n) {
        for (
            n &= ~aa,
                n &= ~Gl,
                e.suspendedLanes |= n,
                e.pingedLanes &= ~n,
                e = e.expirationTimes;
            0 < n;

        ) {
            var l = 31 - Vt(n),
                s = 1 << l;
            (e[l] = -1), (n &= ~s);
        }
    }
    function ld(e) {
        if (Ne & 6) throw Error(i(327));
        Mr();
        var n = dl(e, 0);
        if (!(n & 1)) return wt(e, We()), null;
        var l = io(e, n);
        if (e.tag !== 0 && l === 2) {
            var s = Xo(e);
            s !== 0 && ((n = s), (l = da(e, s)));
        }
        if (l === 1) throw ((l = bi), lr(e, 0), Dn(e, n), wt(e, We()), l);
        if (l === 6) throw Error(i(345));
        return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = n),
            or(e, xt, gn),
            wt(e, We()),
            null
        );
    }
    function pa(e, n) {
        var l = Ne;
        Ne |= 1;
        try {
            return e(n);
        } finally {
            (Ne = l), Ne === 0 && ((Ur = We() + 500), Il && Pn());
        }
    }
    function ir(e) {
        bn !== null && bn.tag === 0 && !(Ne & 6) && Mr();
        var n = Ne;
        Ne |= 1;
        var l = Ft.transition,
            s = Le;
        try {
            if (((Ft.transition = null), (Le = 1), e)) return e();
        } finally {
            (Le = s), (Ft.transition = l), (Ne = n), !(Ne & 6) && Pn();
        }
    }
    function ma() {
        (Rt = Fr.current), Fe(Fr);
    }
    function lr(e, n) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var l = e.timeoutHandle;
        if ((l !== -1 && ((e.timeoutHandle = -1), mg(l)), Ye !== null))
            for (l = Ye.return; l !== null; ) {
                var s = l;
                switch ((Cs(s), s.tag)) {
                    case 1:
                        (s = s.type.childContextTypes), s != null && Rl();
                        break;
                    case 3:
                        br(), Fe(gt), Fe(lt), Ds();
                        break;
                    case 5:
                        bs(s);
                        break;
                    case 4:
                        br();
                        break;
                    case 13:
                        Fe(Me);
                        break;
                    case 19:
                        Fe(Me);
                        break;
                    case 10:
                        Ps(s.type._context);
                        break;
                    case 22:
                    case 23:
                        ma();
                }
                l = l.return;
            }
        if (
            ((Ze = e),
            (Ye = e = Fn(e.current, null)),
            (it = Rt = n),
            (Ke = 0),
            (bi = null),
            (aa = Gl = rr = 0),
            (xt = _i = null),
            er !== null)
        ) {
            for (n = 0; n < er.length; n++)
                if (((l = er[n]), (s = l.interleaved), s !== null)) {
                    l.interleaved = null;
                    var f = s.next,
                        d = l.pending;
                    if (d !== null) {
                        var v = d.next;
                        (d.next = f), (s.next = v);
                    }
                    l.pending = s;
                }
            er = null;
        }
        return e;
    }
    function od(e, n) {
        do {
            var l = Ye;
            try {
                if ((Rs(), (Bl.current = Xl), Vl)) {
                    for (var s = Be.memoizedState; s !== null; ) {
                        var f = s.queue;
                        f !== null && (f.pending = null), (s = s.next);
                    }
                    Vl = !1;
                }
                if (
                    ((nr = 0),
                    (Ge = $e = Be = null),
                    (Ri = !1),
                    (Pi = 0),
                    (sa.current = null),
                    l === null || l.return === null)
                ) {
                    (Ke = 1), (bi = n), (Ye = null);
                    break;
                }
                e: {
                    var d = e,
                        v = l.return,
                        E = l,
                        A = n;
                    if (
                        ((n = it),
                        (E.flags |= 32768),
                        A !== null &&
                            typeof A == "object" &&
                            typeof A.then == "function")
                    ) {
                        var z = A,
                            V = E,
                            H = V.tag;
                        if (
                            !(V.mode & 1) &&
                            (H === 0 || H === 11 || H === 15)
                        ) {
                            var B = V.alternate;
                            B
                                ? ((V.updateQueue = B.updateQueue),
                                  (V.memoizedState = B.memoizedState),
                                  (V.lanes = B.lanes))
                                : ((V.updateQueue = null),
                                  (V.memoizedState = null));
                        }
                        var K = If(v);
                        if (K !== null) {
                            (K.flags &= -257),
                                Of(K, v, E, d, n),
                                K.mode & 1 && Pf(d, z, n),
                                (n = K),
                                (A = z);
                            var ne = n.updateQueue;
                            if (ne === null) {
                                var re = new Set();
                                re.add(A), (n.updateQueue = re);
                            } else ne.add(A);
                            break e;
                        } else {
                            if (!(n & 1)) {
                                Pf(d, z, n), ga();
                                break e;
                            }
                            A = Error(i(426));
                        }
                    } else if (Ue && E.mode & 1) {
                        var Xe = If(v);
                        if (Xe !== null) {
                            !(Xe.flags & 65536) && (Xe.flags |= 256),
                                Of(Xe, v, E, d, n),
                                Ts(_r(A, E));
                            break e;
                        }
                    }
                    (d = A = _r(A, E)),
                        Ke !== 4 && (Ke = 2),
                        _i === null ? (_i = [d]) : _i.push(d),
                        (d = v);
                    do {
                        switch (d.tag) {
                            case 3:
                                (d.flags |= 65536), (n &= -n), (d.lanes |= n);
                                var I = Nf(d, A, n);
                                ef(d, I);
                                break e;
                            case 1:
                                E = A;
                                var N = d.type,
                                    O = d.stateNode;
                                if (
                                    !(d.flags & 128) &&
                                    (typeof N.getDerivedStateFromError ==
                                        "function" ||
                                        (O !== null &&
                                            typeof O.componentDidCatch ==
                                                "function" &&
                                            (zn === null || !zn.has(O))))
                                ) {
                                    (d.flags |= 65536),
                                        (n &= -n),
                                        (d.lanes |= n);
                                    var Q = Rf(d, E, n);
                                    ef(d, Q);
                                    break e;
                                }
                        }
                        d = d.return;
                    } while (d !== null);
                }
                ud(l);
            } catch (le) {
                (n = le), Ye === l && l !== null && (Ye = l = l.return);
                continue;
            }
            break;
        } while (!0);
    }
    function sd() {
        var e = Kl.current;
        return (Kl.current = Xl), e === null ? Xl : e;
    }
    function ga() {
        (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
            Ze === null ||
                (!(rr & 268435455) && !(Gl & 268435455)) ||
                Dn(Ze, it);
    }
    function io(e, n) {
        var l = Ne;
        Ne |= 2;
        var s = sd();
        (Ze !== e || it !== n) && ((gn = null), lr(e, n));
        do
            try {
                Mg();
                break;
            } catch (f) {
                od(e, f);
            }
        while (!0);
        if ((Rs(), (Ne = l), (Kl.current = s), Ye !== null))
            throw Error(i(261));
        return (Ze = null), (it = 0), Ke;
    }
    function Mg() {
        for (; Ye !== null; ) ad(Ye);
    }
    function Bg() {
        for (; Ye !== null && !dm(); ) ad(Ye);
    }
    function ad(e) {
        var n = dd(e.alternate, e, Rt);
        (e.memoizedProps = e.pendingProps),
            n === null ? ud(e) : (Ye = n),
            (sa.current = null);
    }
    function ud(e) {
        var n = e;
        do {
            var l = n.alternate;
            if (((e = n.return), n.flags & 32768)) {
                if (((l = zg(l, n)), l !== null)) {
                    (l.flags &= 32767), (Ye = l);
                    return;
                }
                if (e !== null)
                    (e.flags |= 32768),
                        (e.subtreeFlags = 0),
                        (e.deletions = null);
                else {
                    (Ke = 6), (Ye = null);
                    return;
                }
            } else if (((l = Lg(l, n, Rt)), l !== null)) {
                Ye = l;
                return;
            }
            if (((n = n.sibling), n !== null)) {
                Ye = n;
                return;
            }
            Ye = n = e;
        } while (n !== null);
        Ke === 0 && (Ke = 5);
    }
    function or(e, n, l) {
        var s = Le,
            f = Ft.transition;
        try {
            (Ft.transition = null), (Le = 1), Vg(e, n, l, s);
        } finally {
            (Ft.transition = f), (Le = s);
        }
        return null;
    }
    function Vg(e, n, l, s) {
        do Mr();
        while (bn !== null);
        if (Ne & 6) throw Error(i(327));
        l = e.finishedWork;
        var f = e.finishedLanes;
        if (l === null) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), l === e.current))
            throw Error(i(177));
        (e.callbackNode = null), (e.callbackPriority = 0);
        var d = l.lanes | l.childLanes;
        if (
            (Sm(e, d),
            e === Ze && ((Ye = Ze = null), (it = 0)),
            (!(l.subtreeFlags & 2064) && !(l.flags & 2064)) ||
                eo ||
                ((eo = !0),
                hd(al, function () {
                    return Mr(), null;
                })),
            (d = (l.flags & 15990) !== 0),
            l.subtreeFlags & 15990 || d)
        ) {
            (d = Ft.transition), (Ft.transition = null);
            var v = Le;
            Le = 1;
            var E = Ne;
            (Ne |= 4),
                (sa.current = null),
                _g(e, l),
                Zf(l, e),
                ag(gs),
                (ml = !!ms),
                (gs = ms = null),
                (e.current = l),
                Dg(l),
                hm(),
                (Ne = E),
                (Le = v),
                (Ft.transition = d);
        } else e.current = l;
        if (
            (eo && ((eo = !1), (bn = e), (to = f)),
            (d = e.pendingLanes),
            d === 0 && (zn = null),
            gm(l.stateNode),
            wt(e, We()),
            n !== null)
        )
            for (s = e.onRecoverableError, l = 0; l < n.length; l++)
                (f = n[l]),
                    s(f.value, { componentStack: f.stack, digest: f.digest });
        if (Zl) throw ((Zl = !1), (e = ca), (ca = null), e);
        return (
            to & 1 && e.tag !== 0 && Mr(),
            (d = e.pendingLanes),
            d & 1 ? (e === fa ? Di++ : ((Di = 0), (fa = e))) : (Di = 0),
            Pn(),
            null
        );
    }
    function Mr() {
        if (bn !== null) {
            var e = $u(to),
                n = Ft.transition,
                l = Le;
            try {
                if (
                    ((Ft.transition = null),
                    (Le = 16 > e ? 16 : e),
                    bn === null)
                )
                    var s = !1;
                else {
                    if (((e = bn), (bn = null), (to = 0), Ne & 6))
                        throw Error(i(331));
                    var f = Ne;
                    for (Ne |= 4, ee = e.current; ee !== null; ) {
                        var d = ee,
                            v = d.child;
                        if (ee.flags & 16) {
                            var E = d.deletions;
                            if (E !== null) {
                                for (var A = 0; A < E.length; A++) {
                                    var z = E[A];
                                    for (ee = z; ee !== null; ) {
                                        var V = ee;
                                        switch (V.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                zi(8, V, d);
                                        }
                                        var H = V.child;
                                        if (H !== null)
                                            (H.return = V), (ee = H);
                                        else
                                            for (; ee !== null; ) {
                                                V = ee;
                                                var B = V.sibling,
                                                    K = V.return;
                                                if ((qf(V), V === z)) {
                                                    ee = null;
                                                    break;
                                                }
                                                if (B !== null) {
                                                    (B.return = K), (ee = B);
                                                    break;
                                                }
                                                ee = K;
                                            }
                                    }
                                }
                                var ne = d.alternate;
                                if (ne !== null) {
                                    var re = ne.child;
                                    if (re !== null) {
                                        ne.child = null;
                                        do {
                                            var Xe = re.sibling;
                                            (re.sibling = null), (re = Xe);
                                        } while (re !== null);
                                    }
                                }
                                ee = d;
                            }
                        }
                        if (d.subtreeFlags & 2064 && v !== null)
                            (v.return = d), (ee = v);
                        else
                            e: for (; ee !== null; ) {
                                if (((d = ee), d.flags & 2048))
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zi(9, d, d.return);
                                    }
                                var I = d.sibling;
                                if (I !== null) {
                                    (I.return = d.return), (ee = I);
                                    break e;
                                }
                                ee = d.return;
                            }
                    }
                    var N = e.current;
                    for (ee = N; ee !== null; ) {
                        v = ee;
                        var O = v.child;
                        if (v.subtreeFlags & 2064 && O !== null)
                            (O.return = v), (ee = O);
                        else
                            e: for (v = N; ee !== null; ) {
                                if (((E = ee), E.flags & 2048))
                                    try {
                                        switch (E.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                $l(9, E);
                                        }
                                    } catch (le) {
                                        He(E, E.return, le);
                                    }
                                if (E === v) {
                                    ee = null;
                                    break e;
                                }
                                var Q = E.sibling;
                                if (Q !== null) {
                                    (Q.return = E.return), (ee = Q);
                                    break e;
                                }
                                ee = E.return;
                            }
                    }
                    if (
                        ((Ne = f),
                        Pn(),
                        Kt && typeof Kt.onPostCommitFiberRoot == "function")
                    )
                        try {
                            Kt.onPostCommitFiberRoot(ul, e);
                        } catch {}
                    s = !0;
                }
                return s;
            } finally {
                (Le = l), (Ft.transition = n);
            }
        }
        return !1;
    }
    function cd(e, n, l) {
        (n = _r(l, n)),
            (n = Nf(e, n, 1)),
            (e = On(e, n, 1)),
            (n = mt()),
            e !== null && (si(e, 1, n), wt(e, n));
    }
    function He(e, n, l) {
        if (e.tag === 3) cd(e, e, l);
        else
            for (; n !== null; ) {
                if (n.tag === 3) {
                    cd(n, e, l);
                    break;
                } else if (n.tag === 1) {
                    var s = n.stateNode;
                    if (
                        typeof n.type.getDerivedStateFromError == "function" ||
                        (typeof s.componentDidCatch == "function" &&
                            (zn === null || !zn.has(s)))
                    ) {
                        (e = _r(l, e)),
                            (e = Rf(n, e, 1)),
                            (n = On(n, e, 1)),
                            (e = mt()),
                            n !== null && (si(n, 1, e), wt(n, e));
                        break;
                    }
                }
                n = n.return;
            }
    }
    function Hg(e, n, l) {
        var s = e.pingCache;
        s !== null && s.delete(n),
            (n = mt()),
            (e.pingedLanes |= e.suspendedLanes & l),
            Ze === e &&
                (it & l) === l &&
                (Ke === 4 ||
                (Ke === 3 && (it & 130023424) === it && 500 > We() - ua)
                    ? lr(e, 0)
                    : (aa |= l)),
            wt(e, n);
    }
    function fd(e, n) {
        n === 0 &&
            (e.mode & 1
                ? ((n = fl), (fl <<= 1), !(fl & 130023424) && (fl = 4194304))
                : (n = 1));
        var l = mt();
        (e = hn(e, n)), e !== null && (si(e, n, l), wt(e, l));
    }
    function Wg(e) {
        var n = e.memoizedState,
            l = 0;
        n !== null && (l = n.retryLane), fd(e, l);
    }
    function Xg(e, n) {
        var l = 0;
        switch (e.tag) {
            case 13:
                var s = e.stateNode,
                    f = e.memoizedState;
                f !== null && (l = f.retryLane);
                break;
            case 19:
                s = e.stateNode;
                break;
            default:
                throw Error(i(314));
        }
        s !== null && s.delete(n), fd(e, l);
    }
    var dd;
    dd = function (e, n, l) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps || gt.current) vt = !0;
            else {
                if (!(e.lanes & l) && !(n.flags & 128))
                    return (vt = !1), Og(e, n, l);
                vt = !!(e.flags & 131072);
            }
        else (vt = !1), Ue && n.flags & 1048576 && Wc(n, Ll, n.index);
        switch (((n.lanes = 0), n.tag)) {
            case 2:
                var s = n.type;
                ql(e, n), (e = n.pendingProps);
                var f = Nr(n, lt.current);
                zr(n, l), (f = Ms(null, n, s, e, f, l));
                var d = Bs();
                return (
                    (n.flags |= 1),
                    typeof f == "object" &&
                    f !== null &&
                    typeof f.render == "function" &&
                    f.$$typeof === void 0
                        ? ((n.tag = 1),
                          (n.memoizedState = null),
                          (n.updateQueue = null),
                          yt(s) ? ((d = !0), Pl(n)) : (d = !1),
                          (n.memoizedState =
                              f.state !== null && f.state !== void 0
                                  ? f.state
                                  : null),
                          Ls(n),
                          (f.updater = Ql),
                          (n.stateNode = f),
                          (f._reactInternals = n),
                          Ys(n, s, e, l),
                          (n = Ks(null, n, s, !0, d, l)))
                        : ((n.tag = 0),
                          Ue && d && Es(n),
                          pt(null, n, f, l),
                          (n = n.child)),
                    n
                );
            case 16:
                s = n.elementType;
                e: {
                    switch (
                        (ql(e, n),
                        (e = n.pendingProps),
                        (f = s._init),
                        (s = f(s._payload)),
                        (n.type = s),
                        (f = n.tag = Yg(s)),
                        (e = Xt(s, e)),
                        f)
                    ) {
                        case 0:
                            n = $s(null, n, s, e, l);
                            break e;
                        case 1:
                            n = Ff(null, n, s, e, l);
                            break e;
                        case 11:
                            n = Lf(null, n, s, e, l);
                            break e;
                        case 14:
                            n = zf(null, n, s, Xt(s.type, e), l);
                            break e;
                    }
                    throw Error(i(306, s, ""));
                }
                return n;
            case 0:
                return (
                    (s = n.type),
                    (f = n.pendingProps),
                    (f = n.elementType === s ? f : Xt(s, f)),
                    $s(e, n, s, f, l)
                );
            case 1:
                return (
                    (s = n.type),
                    (f = n.pendingProps),
                    (f = n.elementType === s ? f : Xt(s, f)),
                    Ff(e, n, s, f, l)
                );
            case 3:
                e: {
                    if ((Uf(n), e === null)) throw Error(i(387));
                    (s = n.pendingProps),
                        (d = n.memoizedState),
                        (f = d.element),
                        Zc(e, n),
                        Ul(n, s, null, l);
                    var v = n.memoizedState;
                    if (((s = v.element), d.isDehydrated))
                        if (
                            ((d = {
                                element: s,
                                isDehydrated: !1,
                                cache: v.cache,
                                pendingSuspenseBoundaries:
                                    v.pendingSuspenseBoundaries,
                                transitions: v.transitions,
                            }),
                            (n.updateQueue.baseState = d),
                            (n.memoizedState = d),
                            n.flags & 256)
                        ) {
                            (f = _r(Error(i(423)), n)), (n = Mf(e, n, s, l, f));
                            break e;
                        } else if (s !== f) {
                            (f = _r(Error(i(424)), n)), (n = Mf(e, n, s, l, f));
                            break e;
                        } else
                            for (
                                Nt = Tn(n.stateNode.containerInfo.firstChild),
                                    Tt = n,
                                    Ue = !0,
                                    Wt = null,
                                    l = Kc(n, null, s, l),
                                    n.child = l;
                                l;

                            )
                                (l.flags = (l.flags & -3) | 4096),
                                    (l = l.sibling);
                    else {
                        if ((Ir(), s === f)) {
                            n = mn(e, n, l);
                            break e;
                        }
                        pt(e, n, s, l);
                    }
                    n = n.child;
                }
                return n;
            case 5:
                return (
                    nf(n),
                    e === null && As(n),
                    (s = n.type),
                    (f = n.pendingProps),
                    (d = e !== null ? e.memoizedProps : null),
                    (v = f.children),
                    ys(s, f)
                        ? (v = null)
                        : d !== null && ys(s, d) && (n.flags |= 32),
                    Df(e, n),
                    pt(e, n, v, l),
                    n.child
                );
            case 6:
                return e === null && As(n), null;
            case 13:
                return Bf(e, n, l);
            case 4:
                return (
                    zs(n, n.stateNode.containerInfo),
                    (s = n.pendingProps),
                    e === null ? (n.child = Or(n, null, s, l)) : pt(e, n, s, l),
                    n.child
                );
            case 11:
                return (
                    (s = n.type),
                    (f = n.pendingProps),
                    (f = n.elementType === s ? f : Xt(s, f)),
                    Lf(e, n, s, f, l)
                );
            case 7:
                return pt(e, n, n.pendingProps, l), n.child;
            case 8:
                return pt(e, n, n.pendingProps.children, l), n.child;
            case 12:
                return pt(e, n, n.pendingProps.children, l), n.child;
            case 10:
                e: {
                    if (
                        ((s = n.type._context),
                        (f = n.pendingProps),
                        (d = n.memoizedProps),
                        (v = f.value),
                        ze(_l, s._currentValue),
                        (s._currentValue = v),
                        d !== null)
                    )
                        if (Ht(d.value, v)) {
                            if (d.children === f.children && !gt.current) {
                                n = mn(e, n, l);
                                break e;
                            }
                        } else
                            for (
                                d = n.child, d !== null && (d.return = n);
                                d !== null;

                            ) {
                                var E = d.dependencies;
                                if (E !== null) {
                                    v = d.child;
                                    for (var A = E.firstContext; A !== null; ) {
                                        if (A.context === s) {
                                            if (d.tag === 1) {
                                                (A = pn(-1, l & -l)),
                                                    (A.tag = 2);
                                                var z = d.updateQueue;
                                                if (z !== null) {
                                                    z = z.shared;
                                                    var V = z.pending;
                                                    V === null
                                                        ? (A.next = A)
                                                        : ((A.next = V.next),
                                                          (V.next = A)),
                                                        (z.pending = A);
                                                }
                                            }
                                            (d.lanes |= l),
                                                (A = d.alternate),
                                                A !== null && (A.lanes |= l),
                                                Is(d.return, l, n),
                                                (E.lanes |= l);
                                            break;
                                        }
                                        A = A.next;
                                    }
                                } else if (d.tag === 10)
                                    v = d.type === n.type ? null : d.child;
                                else if (d.tag === 18) {
                                    if (((v = d.return), v === null))
                                        throw Error(i(341));
                                    (v.lanes |= l),
                                        (E = v.alternate),
                                        E !== null && (E.lanes |= l),
                                        Is(v, l, n),
                                        (v = d.sibling);
                                } else v = d.child;
                                if (v !== null) v.return = d;
                                else
                                    for (v = d; v !== null; ) {
                                        if (v === n) {
                                            v = null;
                                            break;
                                        }
                                        if (((d = v.sibling), d !== null)) {
                                            (d.return = v.return), (v = d);
                                            break;
                                        }
                                        v = v.return;
                                    }
                                d = v;
                            }
                    pt(e, n, f.children, l), (n = n.child);
                }
                return n;
            case 9:
                return (
                    (f = n.type),
                    (s = n.pendingProps.children),
                    zr(n, l),
                    (f = _t(f)),
                    (s = s(f)),
                    (n.flags |= 1),
                    pt(e, n, s, l),
                    n.child
                );
            case 14:
                return (
                    (s = n.type),
                    (f = Xt(s, n.pendingProps)),
                    (f = Xt(s.type, f)),
                    zf(e, n, s, f, l)
                );
            case 15:
                return bf(e, n, n.type, n.pendingProps, l);
            case 17:
                return (
                    (s = n.type),
                    (f = n.pendingProps),
                    (f = n.elementType === s ? f : Xt(s, f)),
                    ql(e, n),
                    (n.tag = 1),
                    yt(s) ? ((e = !0), Pl(n)) : (e = !1),
                    zr(n, l),
                    Af(n, s, f),
                    Ys(n, s, f, l),
                    Ks(null, n, s, !0, e, l)
                );
            case 19:
                return Hf(e, n, l);
            case 22:
                return _f(e, n, l);
        }
        throw Error(i(156, n.tag));
    };
    function hd(e, n) {
        return Xu(e, n);
    }
    function Qg(e, n, l, s) {
        (this.tag = e),
            (this.key = l),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = n),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = s),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function Ut(e, n, l, s) {
        return new Qg(e, n, l, s);
    }
    function ya(e) {
        return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Yg(e) {
        if (typeof e == "function") return ya(e) ? 1 : 0;
        if (e != null) {
            if (((e = e.$$typeof), e === te)) return 11;
            if (e === ae) return 14;
        }
        return 2;
    }
    function Fn(e, n) {
        var l = e.alternate;
        return (
            l === null
                ? ((l = Ut(e.tag, n, e.key, e.mode)),
                  (l.elementType = e.elementType),
                  (l.type = e.type),
                  (l.stateNode = e.stateNode),
                  (l.alternate = e),
                  (e.alternate = l))
                : ((l.pendingProps = n),
                  (l.type = e.type),
                  (l.flags = 0),
                  (l.subtreeFlags = 0),
                  (l.deletions = null)),
            (l.flags = e.flags & 14680064),
            (l.childLanes = e.childLanes),
            (l.lanes = e.lanes),
            (l.child = e.child),
            (l.memoizedProps = e.memoizedProps),
            (l.memoizedState = e.memoizedState),
            (l.updateQueue = e.updateQueue),
            (n = e.dependencies),
            (l.dependencies =
                n === null
                    ? null
                    : { lanes: n.lanes, firstContext: n.firstContext }),
            (l.sibling = e.sibling),
            (l.index = e.index),
            (l.ref = e.ref),
            l
        );
    }
    function lo(e, n, l, s, f, d) {
        var v = 2;
        if (((s = e), typeof e == "function")) ya(e) && (v = 1);
        else if (typeof e == "string") v = 5;
        else
            e: switch (e) {
                case ie:
                    return sr(l.children, f, d, n);
                case xe:
                    (v = 8), (f |= 8);
                    break;
                case ge:
                    return (
                        (e = Ut(12, l, n, f | 2)),
                        (e.elementType = ge),
                        (e.lanes = d),
                        e
                    );
                case Z:
                    return (
                        (e = Ut(13, l, n, f)),
                        (e.elementType = Z),
                        (e.lanes = d),
                        e
                    );
                case G:
                    return (
                        (e = Ut(19, l, n, f)),
                        (e.elementType = G),
                        (e.lanes = d),
                        e
                    );
                case we:
                    return oo(l, f, d, n);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case Se:
                                v = 10;
                                break e;
                            case oe:
                                v = 9;
                                break e;
                            case te:
                                v = 11;
                                break e;
                            case ae:
                                v = 14;
                                break e;
                            case Ae:
                                (v = 16), (s = null);
                                break e;
                        }
                    throw Error(i(130, e == null ? e : typeof e, ""));
            }
        return (
            (n = Ut(v, l, n, f)),
            (n.elementType = e),
            (n.type = s),
            (n.lanes = d),
            n
        );
    }
    function sr(e, n, l, s) {
        return (e = Ut(7, e, s, n)), (e.lanes = l), e;
    }
    function oo(e, n, l, s) {
        return (
            (e = Ut(22, e, s, n)),
            (e.elementType = we),
            (e.lanes = l),
            (e.stateNode = { isHidden: !1 }),
            e
        );
    }
    function va(e, n, l) {
        return (e = Ut(6, e, null, n)), (e.lanes = l), e;
    }
    function xa(e, n, l) {
        return (
            (n = Ut(4, e.children !== null ? e.children : [], e.key, n)),
            (n.lanes = l),
            (n.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
            }),
            n
        );
    }
    function qg(e, n, l, s, f) {
        (this.tag = n),
            (this.containerInfo = e),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Qo(0)),
            (this.expirationTimes = Qo(-1)),
            (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Qo(0)),
            (this.identifierPrefix = s),
            (this.onRecoverableError = f),
            (this.mutableSourceEagerHydrationData = null);
    }
    function wa(e, n, l, s, f, d, v, E, A) {
        return (
            (e = new qg(e, n, l, E, A)),
            n === 1 ? ((n = 1), d === !0 && (n |= 8)) : (n = 0),
            (d = Ut(3, null, null, n)),
            (e.current = d),
            (d.stateNode = e),
            (d.memoizedState = {
                element: s,
                isDehydrated: l,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
            }),
            Ls(d),
            e
        );
    }
    function Jg(e, n, l) {
        var s =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: _,
            key: s == null ? null : "" + s,
            children: e,
            containerInfo: n,
            implementation: l,
        };
    }
    function pd(e) {
        if (!e) return Rn;
        e = e._reactInternals;
        e: {
            if (Jn(e) !== e || e.tag !== 1) throw Error(i(170));
            var n = e;
            do {
                switch (n.tag) {
                    case 3:
                        n = n.stateNode.context;
                        break e;
                    case 1:
                        if (yt(n.type)) {
                            n =
                                n.stateNode
                                    .__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                n = n.return;
            } while (n !== null);
            throw Error(i(171));
        }
        if (e.tag === 1) {
            var l = e.type;
            if (yt(l)) return Bc(e, l, n);
        }
        return n;
    }
    function md(e, n, l, s, f, d, v, E, A) {
        return (
            (e = wa(l, s, !0, e, f, d, v, E, A)),
            (e.context = pd(null)),
            (l = e.current),
            (s = mt()),
            (f = _n(l)),
            (d = pn(s, f)),
            (d.callback = n ?? null),
            On(l, d, f),
            (e.current.lanes = f),
            si(e, f, s),
            wt(e, s),
            e
        );
    }
    function so(e, n, l, s) {
        var f = n.current,
            d = mt(),
            v = _n(f);
        return (
            (l = pd(l)),
            n.context === null ? (n.context = l) : (n.pendingContext = l),
            (n = pn(d, v)),
            (n.payload = { element: e }),
            (s = s === void 0 ? null : s),
            s !== null && (n.callback = s),
            (e = On(f, n, v)),
            e !== null && (qt(e, f, v, d), Fl(e, f, v)),
            v
        );
    }
    function ao(e) {
        if (((e = e.current), !e.child)) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function gd(e, n) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < n ? l : n;
        }
    }
    function ka(e, n) {
        gd(e, n), (e = e.alternate) && gd(e, n);
    }
    function $g() {
        return null;
    }
    var yd =
        typeof reportError == "function"
            ? reportError
            : function (e) {
                  console.error(e);
              };
    function Sa(e) {
        this._internalRoot = e;
    }
    (uo.prototype.render = Sa.prototype.render =
        function (e) {
            var n = this._internalRoot;
            if (n === null) throw Error(i(409));
            so(e, n, null, null);
        }),
        (uo.prototype.unmount = Sa.prototype.unmount =
            function () {
                var e = this._internalRoot;
                if (e !== null) {
                    this._internalRoot = null;
                    var n = e.containerInfo;
                    ir(function () {
                        so(null, e, null, null);
                    }),
                        (n[un] = null);
                }
            });
    function uo(e) {
        this._internalRoot = e;
    }
    uo.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var n = Zu();
            e = { blockedOn: null, target: e, priority: n };
            for (
                var l = 0;
                l < Cn.length && n !== 0 && n < Cn[l].priority;
                l++
            );
            Cn.splice(l, 0, e), l === 0 && nc(e);
        }
    };
    function Ea(e) {
        return !(
            !e ||
            (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
    }
    function co(e) {
        return !(
            !e ||
            (e.nodeType !== 1 &&
                e.nodeType !== 9 &&
                e.nodeType !== 11 &&
                (e.nodeType !== 8 ||
                    e.nodeValue !== " react-mount-point-unstable "))
        );
    }
    function vd() {}
    function Kg(e, n, l, s, f) {
        if (f) {
            if (typeof s == "function") {
                var d = s;
                s = function () {
                    var z = ao(v);
                    d.call(z);
                };
            }
            var v = md(n, s, e, 0, null, !1, !1, "", vd);
            return (
                (e._reactRootContainer = v),
                (e[un] = v.current),
                ki(e.nodeType === 8 ? e.parentNode : e),
                ir(),
                v
            );
        }
        for (; (f = e.lastChild); ) e.removeChild(f);
        if (typeof s == "function") {
            var E = s;
            s = function () {
                var z = ao(A);
                E.call(z);
            };
        }
        var A = wa(e, 0, !1, null, null, !1, !1, "", vd);
        return (
            (e._reactRootContainer = A),
            (e[un] = A.current),
            ki(e.nodeType === 8 ? e.parentNode : e),
            ir(function () {
                so(n, A, l, s);
            }),
            A
        );
    }
    function fo(e, n, l, s, f) {
        var d = l._reactRootContainer;
        if (d) {
            var v = d;
            if (typeof f == "function") {
                var E = f;
                f = function () {
                    var A = ao(v);
                    E.call(A);
                };
            }
            so(n, v, e, f);
        } else v = Kg(l, n, e, f, s);
        return ao(v);
    }
    (Ku = function (e) {
        switch (e.tag) {
            case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                    var l = oi(n.pendingLanes);
                    l !== 0 &&
                        (Yo(n, l | 1),
                        wt(n, We()),
                        !(Ne & 6) && ((Ur = We() + 500), Pn()));
                }
                break;
            case 13:
                ir(function () {
                    var s = hn(e, 1);
                    if (s !== null) {
                        var f = mt();
                        qt(s, e, 1, f);
                    }
                }),
                    ka(e, 1);
        }
    }),
        (qo = function (e) {
            if (e.tag === 13) {
                var n = hn(e, 134217728);
                if (n !== null) {
                    var l = mt();
                    qt(n, e, 134217728, l);
                }
                ka(e, 134217728);
            }
        }),
        (Gu = function (e) {
            if (e.tag === 13) {
                var n = _n(e),
                    l = hn(e, n);
                if (l !== null) {
                    var s = mt();
                    qt(l, e, n, s);
                }
                ka(e, n);
            }
        }),
        (Zu = function () {
            return Le;
        }),
        (ec = function (e, n) {
            var l = Le;
            try {
                return (Le = e), n();
            } finally {
                Le = l;
            }
        }),
        (Mo = function (e, n, l) {
            switch (n) {
                case "input":
                    if (
                        (mr(e, l),
                        (n = l.name),
                        l.type === "radio" && n != null)
                    ) {
                        for (l = e; l.parentNode; ) l = l.parentNode;
                        for (
                            l = l.querySelectorAll(
                                "input[name=" +
                                    JSON.stringify("" + n) +
                                    '][type="radio"]'
                            ),
                                n = 0;
                            n < l.length;
                            n++
                        ) {
                            var s = l[n];
                            if (s !== e && s.form === e.form) {
                                var f = Nl(s);
                                if (!f) throw Error(i(90));
                                tl(s), mr(s, f);
                            }
                        }
                    }
                    break;
                case "textarea":
                    il(e, l);
                    break;
                case "select":
                    (n = l.value), n != null && xn(e, !!l.multiple, n, !1);
            }
        }),
        (Fu = pa),
        (Uu = ir);
    var Gg = { usingClientEntryPoint: !1, Events: [Ci, Ar, Nl, _u, Du, pa] },
        Fi = {
            findFiberByHostInstance: $n,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
        },
        Zg = {
            bundleType: Fi.bundleType,
            version: Fi.version,
            rendererPackageName: Fi.rendererPackageName,
            rendererConfig: Fi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: J.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
                return (e = Hu(e)), e === null ? null : e.stateNode;
            },
            findFiberByHostInstance: Fi.findFiberByHostInstance || $g,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ho.isDisabled && ho.supportsFiber)
            try {
                (ul = ho.inject(Zg)), (Kt = ho);
            } catch {}
    }
    return (
        (kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg),
        (kt.createPortal = function (e, n) {
            var l =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (!Ea(n)) throw Error(i(200));
            return Jg(e, n, null, l);
        }),
        (kt.createRoot = function (e, n) {
            if (!Ea(e)) throw Error(i(299));
            var l = !1,
                s = "",
                f = yd;
            return (
                n != null &&
                    (n.unstable_strictMode === !0 && (l = !0),
                    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
                    n.onRecoverableError !== void 0 &&
                        (f = n.onRecoverableError)),
                (n = wa(e, 1, !1, null, null, l, !1, s, f)),
                (e[un] = n.current),
                ki(e.nodeType === 8 ? e.parentNode : e),
                new Sa(n)
            );
        }),
        (kt.findDOMNode = function (e) {
            if (e == null) return null;
            if (e.nodeType === 1) return e;
            var n = e._reactInternals;
            if (n === void 0)
                throw typeof e.render == "function"
                    ? Error(i(188))
                    : ((e = Object.keys(e).join(",")), Error(i(268, e)));
            return (e = Hu(n)), (e = e === null ? null : e.stateNode), e;
        }),
        (kt.flushSync = function (e) {
            return ir(e);
        }),
        (kt.hydrate = function (e, n, l) {
            if (!co(n)) throw Error(i(200));
            return fo(null, e, n, !0, l);
        }),
        (kt.hydrateRoot = function (e, n, l) {
            if (!Ea(e)) throw Error(i(405));
            var s = (l != null && l.hydratedSources) || null,
                f = !1,
                d = "",
                v = yd;
            if (
                (l != null &&
                    (l.unstable_strictMode === !0 && (f = !0),
                    l.identifierPrefix !== void 0 && (d = l.identifierPrefix),
                    l.onRecoverableError !== void 0 &&
                        (v = l.onRecoverableError)),
                (n = md(n, null, e, 1, l ?? null, f, !1, d, v)),
                (e[un] = n.current),
                ki(e),
                s)
            )
                for (e = 0; e < s.length; e++)
                    (l = s[e]),
                        (f = l._getVersion),
                        (f = f(l._source)),
                        n.mutableSourceEagerHydrationData == null
                            ? (n.mutableSourceEagerHydrationData = [l, f])
                            : n.mutableSourceEagerHydrationData.push(l, f);
            return new uo(n);
        }),
        (kt.render = function (e, n, l) {
            if (!co(n)) throw Error(i(200));
            return fo(null, e, n, !1, l);
        }),
        (kt.unmountComponentAtNode = function (e) {
            if (!co(e)) throw Error(i(40));
            return e._reactRootContainer
                ? (ir(function () {
                      fo(null, null, e, !1, function () {
                          (e._reactRootContainer = null), (e[un] = null);
                      });
                  }),
                  !0)
                : !1;
        }),
        (kt.unstable_batchedUpdates = pa),
        (kt.unstable_renderSubtreeIntoContainer = function (e, n, l, s) {
            if (!co(l)) throw Error(i(200));
            if (e == null || e._reactInternals === void 0) throw Error(i(38));
            return fo(e, n, l, !1, s);
        }),
        (kt.version = "18.3.1-next-f1338f8080-20240426"),
        kt
    );
}
var Ad;
function zh() {
    if (Ad) return Aa.exports;
    Ad = 1;
    function t() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (r) {
                console.error(r);
            }
    }
    return t(), (Aa.exports = ay()), Aa.exports;
}
var Td;
function uy() {
    if (Td) return po;
    Td = 1;
    var t = zh();
    return (po.createRoot = t.createRoot), (po.hydrateRoot = t.hydrateRoot), po;
}
var cy = uy();
const fy = No(cy);
zh();
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xi() {
    return (
        (Xi = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r];
                      for (var o in i)
                          Object.prototype.hasOwnProperty.call(i, o) &&
                              (t[o] = i[o]);
                  }
                  return t;
              }),
        Xi.apply(this, arguments)
    );
}
var Bn;
(function (t) {
    (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Bn || (Bn = {}));
const Nd = "popstate";
function dy(t) {
    t === void 0 && (t = {});
    function r(o, a) {
        let { pathname: u, search: c, hash: p } = o.location;
        return Ya(
            "",
            { pathname: u, search: c, hash: p },
            (a.state && a.state.usr) || null,
            (a.state && a.state.key) || "default"
        );
    }
    function i(o, a) {
        return typeof a == "string" ? a : So(a);
    }
    return py(r, i, null, t);
}
function Je(t, r) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(r);
}
function bh(t, r) {
    if (!t) {
        typeof console < "u" && console.warn(r);
        try {
            throw new Error(r);
        } catch {}
    }
}
function hy() {
    return Math.random().toString(36).substr(2, 8);
}
function Rd(t, r) {
    return { usr: t.state, key: t.key, idx: r };
}
function Ya(t, r, i, o) {
    return (
        i === void 0 && (i = null),
        Xi(
            {
                pathname: typeof t == "string" ? t : t.pathname,
                search: "",
                hash: "",
            },
            typeof r == "string" ? Yr(r) : r,
            { state: i, key: (r && r.key) || o || hy() }
        )
    );
}
function So(t) {
    let { pathname: r = "/", search: i = "", hash: o = "" } = t;
    return (
        i && i !== "?" && (r += i.charAt(0) === "?" ? i : "?" + i),
        o && o !== "#" && (r += o.charAt(0) === "#" ? o : "#" + o),
        r
    );
}
function Yr(t) {
    let r = {};
    if (t) {
        let i = t.indexOf("#");
        i >= 0 && ((r.hash = t.substr(i)), (t = t.substr(0, i)));
        let o = t.indexOf("?");
        o >= 0 && ((r.search = t.substr(o)), (t = t.substr(0, o))),
            t && (r.pathname = t);
    }
    return r;
}
function py(t, r, i, o) {
    o === void 0 && (o = {});
    let { window: a = document.defaultView, v5Compat: u = !1 } = o,
        c = a.history,
        p = Bn.Pop,
        g = null,
        m = y();
    m == null && ((m = 0), c.replaceState(Xi({}, c.state, { idx: m }), ""));
    function y() {
        return (c.state || { idx: null }).idx;
    }
    function x() {
        p = Bn.Pop;
        let R = y(),
            L = R == null ? null : R - m;
        (m = R), g && g({ action: p, location: T.location, delta: L });
    }
    function k(R, L) {
        p = Bn.Push;
        let D = Ya(T.location, R, L);
        m = y() + 1;
        let U = Rd(D, m),
            J = T.createHref(D);
        try {
            c.pushState(U, "", J);
        } catch ($) {
            if ($ instanceof DOMException && $.name === "DataCloneError")
                throw $;
            a.location.assign(J);
        }
        u && g && g({ action: p, location: T.location, delta: 1 });
    }
    function w(R, L) {
        p = Bn.Replace;
        let D = Ya(T.location, R, L);
        m = y();
        let U = Rd(D, m),
            J = T.createHref(D);
        c.replaceState(U, "", J),
            u && g && g({ action: p, location: T.location, delta: 0 });
    }
    function j(R) {
        let L =
                a.location.origin !== "null"
                    ? a.location.origin
                    : a.location.href,
            D = typeof R == "string" ? R : So(R);
        return (
            (D = D.replace(/ $/, "%20")),
            Je(
                L,
                "No window.location.(origin|href) available to create URL for href: " +
                    D
            ),
            new URL(D, L)
        );
    }
    let T = {
        get action() {
            return p;
        },
        get location() {
            return t(a, c);
        },
        listen(R) {
            if (g)
                throw new Error("A history only accepts one active listener");
            return (
                a.addEventListener(Nd, x),
                (g = R),
                () => {
                    a.removeEventListener(Nd, x), (g = null);
                }
            );
        },
        createHref(R) {
            return r(a, R);
        },
        createURL: j,
        encodeLocation(R) {
            let L = j(R);
            return { pathname: L.pathname, search: L.search, hash: L.hash };
        },
        push: k,
        replace: w,
        go(R) {
            return c.go(R);
        },
    };
    return T;
}
var Pd;
(function (t) {
    (t.data = "data"),
        (t.deferred = "deferred"),
        (t.redirect = "redirect"),
        (t.error = "error");
})(Pd || (Pd = {}));
function my(t, r, i) {
    return i === void 0 && (i = "/"), gy(t, r, i);
}
function gy(t, r, i, o) {
    let a = typeof r == "string" ? Yr(r) : r,
        u = du(a.pathname || "/", i);
    if (u == null) return null;
    let c = _h(t);
    yy(c);
    let p = null;
    for (let g = 0; p == null && g < c.length; ++g) {
        let m = Ry(u);
        p = Ay(c[g], m);
    }
    return p;
}
function _h(t, r, i, o) {
    r === void 0 && (r = []),
        i === void 0 && (i = []),
        o === void 0 && (o = "");
    let a = (u, c, p) => {
        let g = {
            relativePath: p === void 0 ? u.path || "" : p,
            caseSensitive: u.caseSensitive === !0,
            childrenIndex: c,
            route: u,
        };
        g.relativePath.startsWith("/") &&
            (Je(
                g.relativePath.startsWith(o),
                'Absolute route path "' +
                    g.relativePath +
                    '" nested under path ' +
                    ('"' +
                        o +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (g.relativePath = g.relativePath.slice(o.length)));
        let m = Vn([o, g.relativePath]),
            y = i.concat(g);
        u.children &&
            u.children.length > 0 &&
            (Je(
                u.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + m + '".')
            ),
            _h(u.children, r, y, m)),
            !(u.path == null && !u.index) &&
                r.push({ path: m, score: Cy(m, u.index), routesMeta: y });
    };
    return (
        t.forEach((u, c) => {
            var p;
            if (u.path === "" || !((p = u.path) != null && p.includes("?")))
                a(u, c);
            else for (let g of Dh(u.path)) a(u, c, g);
        }),
        r
    );
}
function Dh(t) {
    let r = t.split("/");
    if (r.length === 0) return [];
    let [i, ...o] = r,
        a = i.endsWith("?"),
        u = i.replace(/\?$/, "");
    if (o.length === 0) return a ? [u, ""] : [u];
    let c = Dh(o.join("/")),
        p = [];
    return (
        p.push(...c.map((g) => (g === "" ? u : [u, g].join("/")))),
        a && p.push(...c),
        p.map((g) => (t.startsWith("/") && g === "" ? "/" : g))
    );
}
function yy(t) {
    t.sort((r, i) =>
        r.score !== i.score
            ? i.score - r.score
            : jy(
                  r.routesMeta.map((o) => o.childrenIndex),
                  i.routesMeta.map((o) => o.childrenIndex)
              )
    );
}
const vy = /^:[\w-]+$/,
    xy = 3,
    wy = 2,
    ky = 1,
    Sy = 10,
    Ey = -2,
    Id = (t) => t === "*";
function Cy(t, r) {
    let i = t.split("/"),
        o = i.length;
    return (
        i.some(Id) && (o += Ey),
        r && (o += wy),
        i
            .filter((a) => !Id(a))
            .reduce((a, u) => a + (vy.test(u) ? xy : u === "" ? ky : Sy), o)
    );
}
function jy(t, r) {
    return t.length === r.length && t.slice(0, -1).every((o, a) => o === r[a])
        ? t[t.length - 1] - r[r.length - 1]
        : 0;
}
function Ay(t, r, i) {
    let { routesMeta: o } = t,
        a = {},
        u = "/",
        c = [];
    for (let p = 0; p < o.length; ++p) {
        let g = o[p],
            m = p === o.length - 1,
            y = u === "/" ? r : r.slice(u.length) || "/",
            x = Ty(
                {
                    path: g.relativePath,
                    caseSensitive: g.caseSensitive,
                    end: m,
                },
                y
            ),
            k = g.route;
        if (!x) return null;
        Object.assign(a, x.params),
            c.push({
                params: a,
                pathname: Vn([u, x.pathname]),
                pathnameBase: Ly(Vn([u, x.pathnameBase])),
                route: k,
            }),
            x.pathnameBase !== "/" && (u = Vn([u, x.pathnameBase]));
    }
    return c;
}
function Ty(t, r) {
    typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
    let [i, o] = Ny(t.path, t.caseSensitive, t.end),
        a = r.match(i);
    if (!a) return null;
    let u = a[0],
        c = u.replace(/(.)\/+$/, "$1"),
        p = a.slice(1);
    return {
        params: o.reduce((m, y, x) => {
            let { paramName: k, isOptional: w } = y;
            if (k === "*") {
                let T = p[x] || "";
                c = u.slice(0, u.length - T.length).replace(/(.)\/+$/, "$1");
            }
            const j = p[x];
            return (
                w && !j
                    ? (m[k] = void 0)
                    : (m[k] = (j || "").replace(/%2F/g, "/")),
                m
            );
        }, {}),
        pathname: u,
        pathnameBase: c,
        pattern: t,
    };
}
function Ny(t, r, i) {
    r === void 0 && (r = !1),
        i === void 0 && (i = !0),
        bh(
            t === "*" || !t.endsWith("*") || t.endsWith("/*"),
            'Route path "' +
                t +
                '" will be treated as if it were ' +
                ('"' +
                    t.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    t.replace(/\*$/, "/*") +
                    '".')
        );
    let o = [],
        a =
            "^" +
            t
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (c, p, g) => (
                        o.push({ paramName: p, isOptional: g != null }),
                        g ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                );
    return (
        t.endsWith("*")
            ? (o.push({ paramName: "*" }),
              (a += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : i
            ? (a += "\\/*$")
            : t !== "" && t !== "/" && (a += "(?:(?=\\/|$))"),
        [new RegExp(a, r ? void 0 : "i"), o]
    );
}
function Ry(t) {
    try {
        return t
            .split("/")
            .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
            .join("/");
    } catch (r) {
        return (
            bh(
                !1,
                'The URL path "' +
                    t +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + r + ").")
            ),
            t
        );
    }
}
function du(t, r) {
    if (r === "/") return t;
    if (!t.toLowerCase().startsWith(r.toLowerCase())) return null;
    let i = r.endsWith("/") ? r.length - 1 : r.length,
        o = t.charAt(i);
    return o && o !== "/" ? null : t.slice(i) || "/";
}
function Py(t, r) {
    r === void 0 && (r = "/");
    let {
        pathname: i,
        search: o = "",
        hash: a = "",
    } = typeof t == "string" ? Yr(t) : t;
    return {
        pathname: i ? (i.startsWith("/") ? i : Iy(i, r)) : r,
        search: zy(o),
        hash: by(a),
    };
}
function Iy(t, r) {
    let i = r.replace(/\/+$/, "").split("/");
    return (
        t.split("/").forEach((a) => {
            a === ".." ? i.length > 1 && i.pop() : a !== "." && i.push(a);
        }),
        i.length > 1 ? i.join("/") : "/"
    );
}
function Ra(t, r, i, o) {
    return (
        "Cannot include a '" +
        t +
        "' character in a manually specified " +
        ("`to." +
            r +
            "` field [" +
            JSON.stringify(o) +
            "].  Please separate it out to the ") +
        ("`to." +
            i +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Oy(t) {
    return t.filter(
        (r, i) => i === 0 || (r.route.path && r.route.path.length > 0)
    );
}
function Fh(t, r) {
    let i = Oy(t);
    return r
        ? i.map((o, a) => (a === i.length - 1 ? o.pathname : o.pathnameBase))
        : i.map((o) => o.pathnameBase);
}
function Uh(t, r, i, o) {
    o === void 0 && (o = !1);
    let a;
    typeof t == "string"
        ? (a = Yr(t))
        : ((a = Xi({}, t)),
          Je(
              !a.pathname || !a.pathname.includes("?"),
              Ra("?", "pathname", "search", a)
          ),
          Je(
              !a.pathname || !a.pathname.includes("#"),
              Ra("#", "pathname", "hash", a)
          ),
          Je(
              !a.search || !a.search.includes("#"),
              Ra("#", "search", "hash", a)
          ));
    let u = t === "" || a.pathname === "",
        c = u ? "/" : a.pathname,
        p;
    if (c == null) p = i;
    else {
        let x = r.length - 1;
        if (!o && c.startsWith("..")) {
            let k = c.split("/");
            for (; k[0] === ".."; ) k.shift(), (x -= 1);
            a.pathname = k.join("/");
        }
        p = x >= 0 ? r[x] : "/";
    }
    let g = Py(a, p),
        m = c && c !== "/" && c.endsWith("/"),
        y = (u || c === ".") && i.endsWith("/");
    return !g.pathname.endsWith("/") && (m || y) && (g.pathname += "/"), g;
}
const Vn = (t) => t.join("/").replace(/\/\/+/g, "/"),
    Ly = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    zy = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
    by = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function _y(t) {
    return (
        t != null &&
        typeof t.status == "number" &&
        typeof t.statusText == "string" &&
        typeof t.internal == "boolean" &&
        "data" in t
    );
}
const Mh = ["post", "put", "patch", "delete"];
new Set(Mh);
const Dy = ["get", ...Mh];
new Set(Dy);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qi() {
    return (
        (Qi = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r];
                      for (var o in i)
                          Object.prototype.hasOwnProperty.call(i, o) &&
                              (t[o] = i[o]);
                  }
                  return t;
              }),
        Qi.apply(this, arguments)
    );
}
const hu = W.createContext(null),
    Fy = W.createContext(null),
    fr = W.createContext(null),
    Ro = W.createContext(null),
    dr = W.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Bh = W.createContext(null);
function Uy(t, r) {
    let { relative: i } = r === void 0 ? {} : r;
    Ji() || Je(!1);
    let { basename: o, navigator: a } = W.useContext(fr),
        { hash: u, pathname: c, search: p } = Hh(t, { relative: i }),
        g = c;
    return (
        o !== "/" && (g = c === "/" ? o : Vn([o, c])),
        a.createHref({ pathname: g, search: p, hash: u })
    );
}
function Ji() {
    return W.useContext(Ro) != null;
}
function qr() {
    return Ji() || Je(!1), W.useContext(Ro).location;
}
function Vh(t) {
    W.useContext(fr).static || W.useLayoutEffect(t);
}
function My() {
    let { isDataRoute: t } = W.useContext(dr);
    return t ? Zy() : By();
}
function By() {
    Ji() || Je(!1);
    let t = W.useContext(hu),
        { basename: r, future: i, navigator: o } = W.useContext(fr),
        { matches: a } = W.useContext(dr),
        { pathname: u } = qr(),
        c = JSON.stringify(Fh(a, i.v7_relativeSplatPath)),
        p = W.useRef(!1);
    return (
        Vh(() => {
            p.current = !0;
        }),
        W.useCallback(
            function (m, y) {
                if ((y === void 0 && (y = {}), !p.current)) return;
                if (typeof m == "number") {
                    o.go(m);
                    return;
                }
                let x = Uh(m, JSON.parse(c), u, y.relative === "path");
                t == null &&
                    r !== "/" &&
                    (x.pathname = x.pathname === "/" ? r : Vn([r, x.pathname])),
                    (y.replace ? o.replace : o.push)(x, y.state, y);
            },
            [r, o, c, u, t]
        )
    );
}
function Hh(t, r) {
    let { relative: i } = r === void 0 ? {} : r,
        { future: o } = W.useContext(fr),
        { matches: a } = W.useContext(dr),
        { pathname: u } = qr(),
        c = JSON.stringify(Fh(a, o.v7_relativeSplatPath));
    return W.useMemo(() => Uh(t, JSON.parse(c), u, i === "path"), [t, c, u, i]);
}
function Vy(t, r) {
    return Hy(t, r);
}
function Hy(t, r, i, o) {
    Ji() || Je(!1);
    let { navigator: a } = W.useContext(fr),
        { matches: u } = W.useContext(dr),
        c = u[u.length - 1],
        p = c ? c.params : {};
    c && c.pathname;
    let g = c ? c.pathnameBase : "/";
    c && c.route;
    let m = qr(),
        y;
    if (r) {
        var x;
        let R = typeof r == "string" ? Yr(r) : r;
        g === "/" || ((x = R.pathname) != null && x.startsWith(g)) || Je(!1),
            (y = R);
    } else y = m;
    let k = y.pathname || "/",
        w = k;
    if (g !== "/") {
        let R = g.replace(/^\//, "").split("/");
        w = "/" + k.replace(/^\//, "").split("/").slice(R.length).join("/");
    }
    let j = my(t, { pathname: w }),
        T = qy(
            j &&
                j.map((R) =>
                    Object.assign({}, R, {
                        params: Object.assign({}, p, R.params),
                        pathname: Vn([
                            g,
                            a.encodeLocation
                                ? a.encodeLocation(R.pathname).pathname
                                : R.pathname,
                        ]),
                        pathnameBase:
                            R.pathnameBase === "/"
                                ? g
                                : Vn([
                                      g,
                                      a.encodeLocation
                                          ? a.encodeLocation(R.pathnameBase)
                                                .pathname
                                          : R.pathnameBase,
                                  ]),
                    })
                ),
            u,
            i,
            o
        );
    return r && T
        ? W.createElement(
              Ro.Provider,
              {
                  value: {
                      location: Qi(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          y
                      ),
                      navigationType: Bn.Pop,
                  },
              },
              T
          )
        : T;
}
function Wy() {
    let t = Gy(),
        r = _y(t)
            ? t.status + " " + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
        i = t instanceof Error ? t.stack : null,
        a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return W.createElement(
        W.Fragment,
        null,
        W.createElement("h2", null, "Unexpected Application Error!"),
        W.createElement("h3", { style: { fontStyle: "italic" } }, r),
        i ? W.createElement("pre", { style: a }, i) : null,
        null
    );
}
const Xy = W.createElement(Wy, null);
class Qy extends W.Component {
    constructor(r) {
        super(r),
            (this.state = {
                location: r.location,
                revalidation: r.revalidation,
                error: r.error,
            });
    }
    static getDerivedStateFromError(r) {
        return { error: r };
    }
    static getDerivedStateFromProps(r, i) {
        return i.location !== r.location ||
            (i.revalidation !== "idle" && r.revalidation === "idle")
            ? {
                  error: r.error,
                  location: r.location,
                  revalidation: r.revalidation,
              }
            : {
                  error: r.error !== void 0 ? r.error : i.error,
                  location: i.location,
                  revalidation: r.revalidation || i.revalidation,
              };
    }
    componentDidCatch(r, i) {
        console.error(
            "React Router caught the following error during render",
            r,
            i
        );
    }
    render() {
        return this.state.error !== void 0
            ? W.createElement(
                  dr.Provider,
                  { value: this.props.routeContext },
                  W.createElement(Bh.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function Yy(t) {
    let { routeContext: r, match: i, children: o } = t,
        a = W.useContext(hu);
    return (
        a &&
            a.static &&
            a.staticContext &&
            (i.route.errorElement || i.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = i.route.id),
        W.createElement(dr.Provider, { value: r }, o)
    );
}
function qy(t, r, i, o) {
    var a;
    if (
        (r === void 0 && (r = []),
        i === void 0 && (i = null),
        o === void 0 && (o = null),
        t == null)
    ) {
        var u;
        if (!i) return null;
        if (i.errors) t = i.matches;
        else if (
            (u = o) != null &&
            u.v7_partialHydration &&
            r.length === 0 &&
            !i.initialized &&
            i.matches.length > 0
        )
            t = i.matches;
        else return null;
    }
    let c = t,
        p = (a = i) == null ? void 0 : a.errors;
    if (p != null) {
        let y = c.findIndex(
            (x) => x.route.id && (p == null ? void 0 : p[x.route.id]) !== void 0
        );
        y >= 0 || Je(!1), (c = c.slice(0, Math.min(c.length, y + 1)));
    }
    let g = !1,
        m = -1;
    if (i && o && o.v7_partialHydration)
        for (let y = 0; y < c.length; y++) {
            let x = c[y];
            if (
                ((x.route.HydrateFallback || x.route.hydrateFallbackElement) &&
                    (m = y),
                x.route.id)
            ) {
                let { loaderData: k, errors: w } = i,
                    j =
                        x.route.loader &&
                        k[x.route.id] === void 0 &&
                        (!w || w[x.route.id] === void 0);
                if (x.route.lazy || j) {
                    (g = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]);
                    break;
                }
            }
        }
    return c.reduceRight((y, x, k) => {
        let w,
            j = !1,
            T = null,
            R = null;
        i &&
            ((w = p && x.route.id ? p[x.route.id] : void 0),
            (T = x.route.errorElement || Xy),
            g &&
                (m < 0 && k === 0
                    ? (ev("route-fallback"), (j = !0), (R = null))
                    : m === k &&
                      ((j = !0),
                      (R = x.route.hydrateFallbackElement || null))));
        let L = r.concat(c.slice(0, k + 1)),
            D = () => {
                let U;
                return (
                    w
                        ? (U = T)
                        : j
                        ? (U = R)
                        : x.route.Component
                        ? (U = W.createElement(x.route.Component, null))
                        : x.route.element
                        ? (U = x.route.element)
                        : (U = y),
                    W.createElement(Yy, {
                        match: x,
                        routeContext: {
                            outlet: y,
                            matches: L,
                            isDataRoute: i != null,
                        },
                        children: U,
                    })
                );
            };
        return i && (x.route.ErrorBoundary || x.route.errorElement || k === 0)
            ? W.createElement(Qy, {
                  location: i.location,
                  revalidation: i.revalidation,
                  component: T,
                  error: w,
                  children: D(),
                  routeContext: { outlet: null, matches: L, isDataRoute: !0 },
              })
            : D();
    }, null);
}
var Wh = (function (t) {
        return (
            (t.UseBlocker = "useBlocker"),
            (t.UseRevalidator = "useRevalidator"),
            (t.UseNavigateStable = "useNavigate"),
            t
        );
    })(Wh || {}),
    Xh = (function (t) {
        return (
            (t.UseBlocker = "useBlocker"),
            (t.UseLoaderData = "useLoaderData"),
            (t.UseActionData = "useActionData"),
            (t.UseRouteError = "useRouteError"),
            (t.UseNavigation = "useNavigation"),
            (t.UseRouteLoaderData = "useRouteLoaderData"),
            (t.UseMatches = "useMatches"),
            (t.UseRevalidator = "useRevalidator"),
            (t.UseNavigateStable = "useNavigate"),
            (t.UseRouteId = "useRouteId"),
            t
        );
    })(Xh || {});
function Jy(t) {
    let r = W.useContext(hu);
    return r || Je(!1), r;
}
function $y(t) {
    let r = W.useContext(Fy);
    return r || Je(!1), r;
}
function Ky(t) {
    let r = W.useContext(dr);
    return r || Je(!1), r;
}
function Qh(t) {
    let r = Ky(),
        i = r.matches[r.matches.length - 1];
    return i.route.id || Je(!1), i.route.id;
}
function Gy() {
    var t;
    let r = W.useContext(Bh),
        i = $y(),
        o = Qh();
    return r !== void 0 ? r : (t = i.errors) == null ? void 0 : t[o];
}
function Zy() {
    let { router: t } = Jy(Wh.UseNavigateStable),
        r = Qh(Xh.UseNavigateStable),
        i = W.useRef(!1);
    return (
        Vh(() => {
            i.current = !0;
        }),
        W.useCallback(
            function (a, u) {
                u === void 0 && (u = {}),
                    i.current &&
                        (typeof a == "number"
                            ? t.navigate(a)
                            : t.navigate(a, Qi({ fromRouteId: r }, u)));
            },
            [t, r]
        )
    );
}
const Od = {};
function ev(t, r, i) {
    Od[t] || (Od[t] = !0);
}
function yn(t) {
    Je(!1);
}
function tv(t) {
    let {
        basename: r = "/",
        children: i = null,
        location: o,
        navigationType: a = Bn.Pop,
        navigator: u,
        static: c = !1,
        future: p,
    } = t;
    Ji() && Je(!1);
    let g = r.replace(/^\/*/, "/"),
        m = W.useMemo(
            () => ({
                basename: g,
                navigator: u,
                static: c,
                future: Qi({ v7_relativeSplatPath: !1 }, p),
            }),
            [g, p, u, c]
        );
    typeof o == "string" && (o = Yr(o));
    let {
            pathname: y = "/",
            search: x = "",
            hash: k = "",
            state: w = null,
            key: j = "default",
        } = o,
        T = W.useMemo(() => {
            let R = du(y, g);
            return R == null
                ? null
                : {
                      location: {
                          pathname: R,
                          search: x,
                          hash: k,
                          state: w,
                          key: j,
                      },
                      navigationType: a,
                  };
        }, [g, y, x, k, w, j, a]);
    return T == null
        ? null
        : W.createElement(
              fr.Provider,
              { value: m },
              W.createElement(Ro.Provider, { children: i, value: T })
          );
}
function nv(t) {
    let { children: r, location: i } = t;
    return Vy(qa(r), i);
}
new Promise(() => {});
function qa(t, r) {
    r === void 0 && (r = []);
    let i = [];
    return (
        W.Children.forEach(t, (o, a) => {
            if (!W.isValidElement(o)) return;
            let u = [...r, a];
            if (o.type === W.Fragment) {
                i.push.apply(i, qa(o.props.children, u));
                return;
            }
            o.type !== yn && Je(!1),
                !o.props.index || !o.props.children || Je(!1);
            let c = {
                id: o.props.id || u.join("-"),
                caseSensitive: o.props.caseSensitive,
                element: o.props.element,
                Component: o.props.Component,
                index: o.props.index,
                path: o.props.path,
                loader: o.props.loader,
                action: o.props.action,
                errorElement: o.props.errorElement,
                ErrorBoundary: o.props.ErrorBoundary,
                hasErrorBoundary:
                    o.props.ErrorBoundary != null ||
                    o.props.errorElement != null,
                shouldRevalidate: o.props.shouldRevalidate,
                handle: o.props.handle,
                lazy: o.props.lazy,
            };
            o.props.children && (c.children = qa(o.props.children, u)),
                i.push(c);
        }),
        i
    );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ja() {
    return (
        (Ja = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r];
                      for (var o in i)
                          Object.prototype.hasOwnProperty.call(i, o) &&
                              (t[o] = i[o]);
                  }
                  return t;
              }),
        Ja.apply(this, arguments)
    );
}
function rv(t, r) {
    if (t == null) return {};
    var i = {},
        o = Object.keys(t),
        a,
        u;
    for (u = 0; u < o.length; u++)
        (a = o[u]), !(r.indexOf(a) >= 0) && (i[a] = t[a]);
    return i;
}
function iv(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function lv(t, r) {
    return t.button === 0 && (!r || r === "_self") && !iv(t);
}
const ov = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition",
    ],
    sv = "6";
try {
    window.__reactRouterVersion = sv;
} catch {}
const av = "startTransition",
    Ld = ly[av];
function uv(t) {
    let { basename: r, children: i, future: o, window: a } = t,
        u = W.useRef();
    u.current == null && (u.current = dy({ window: a, v5Compat: !0 }));
    let c = u.current,
        [p, g] = W.useState({ action: c.action, location: c.location }),
        { v7_startTransition: m } = o || {},
        y = W.useCallback(
            (x) => {
                m && Ld ? Ld(() => g(x)) : g(x);
            },
            [g, m]
        );
    return (
        W.useLayoutEffect(() => c.listen(y), [c, y]),
        W.createElement(tv, {
            basename: r,
            children: i,
            location: p.location,
            navigationType: p.action,
            navigator: c,
            future: o,
        })
    );
}
const cv =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    fv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ct = W.forwardRef(function (r, i) {
        let {
                onClick: o,
                relative: a,
                reloadDocument: u,
                replace: c,
                state: p,
                target: g,
                to: m,
                preventScrollReset: y,
                viewTransition: x,
            } = r,
            k = rv(r, ov),
            { basename: w } = W.useContext(fr),
            j,
            T = !1;
        if (typeof m == "string" && fv.test(m) && ((j = m), cv))
            try {
                let U = new URL(window.location.href),
                    J = m.startsWith("//")
                        ? new URL(U.protocol + m)
                        : new URL(m),
                    $ = du(J.pathname, w);
                J.origin === U.origin && $ != null
                    ? (m = $ + J.search + J.hash)
                    : (T = !0);
            } catch {}
        let R = Uy(m, { relative: a }),
            L = dv(m, {
                replace: c,
                state: p,
                target: g,
                preventScrollReset: y,
                relative: a,
                viewTransition: x,
            });
        function D(U) {
            o && o(U), U.defaultPrevented || L(U);
        }
        return W.createElement(
            "a",
            Ja({}, k, {
                href: j || R,
                onClick: T || u ? o : D,
                ref: i,
                target: g,
            })
        );
    });
var zd;
(function (t) {
    (t.UseScrollRestoration = "useScrollRestoration"),
        (t.UseSubmit = "useSubmit"),
        (t.UseSubmitFetcher = "useSubmitFetcher"),
        (t.UseFetcher = "useFetcher"),
        (t.useViewTransitionState = "useViewTransitionState");
})(zd || (zd = {}));
var bd;
(function (t) {
    (t.UseFetcher = "useFetcher"),
        (t.UseFetchers = "useFetchers"),
        (t.UseScrollRestoration = "useScrollRestoration");
})(bd || (bd = {}));
function dv(t, r) {
    let {
            target: i,
            replace: o,
            state: a,
            preventScrollReset: u,
            relative: c,
            viewTransition: p,
        } = r === void 0 ? {} : r,
        g = My(),
        m = qr(),
        y = Hh(t, { relative: c });
    return W.useCallback(
        (x) => {
            if (lv(x, i)) {
                x.preventDefault();
                let k = o !== void 0 ? o : So(m) === So(y);
                g(t, {
                    replace: k,
                    state: a,
                    preventScrollReset: u,
                    relative: c,
                    viewTransition: p,
                });
            }
        },
        [m, g, y, o, a, i, t, u, c, p]
    );
}
function hv() {
    return h.jsxs("div", {
        className: "hero",
        children: [
            h.jsx("img", {
                className: "programName",
                src: "/images/UXresearchImg.png",
                alt: "Advanced Strategic UX Research",
            }),
            h.jsx("img", {
                className: "jared",
                src: "/images/Jared_Spool 2.png",
                alt: "Jared",
            }),
            h.jsxs("div", {
                className: "hero-paragraphs",
                children: [
                    h.jsx("p", { children: "Small Group Coaching" }),
                    h.jsxs("p", {
                        children: [
                            "8 Hours Live with Jared Spool ",
                            h.jsx("br", {}),
                            "8 Hours of Recorded Content",
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Hn() {
    const [t, r] = W.useState(!1);
    return h.jsx("section", {
        className: "header-background",
        children: h.jsx("section", {
            className: "header",
            children: h.jsxs("div", {
                children: [
                    h.jsx("h1", { children: "Advanced Strategic UX Research" }),
                    h.jsx("p", {
                        className: "online-course",
                        children: "An Online Course with Jared Spool",
                    }),
                    h.jsx(hv, {}),
                ],
            }),
        }),
    });
}
function Wn({ children: t }) {
    return h.jsx("section", {
        className: "title",
        children: h.jsx("div", {
            className: "title-content",
            children: t,
        }),
    });
}
function Yh(t, r) {
    return function () {
        return t.apply(r, arguments);
    };
}
const { toString: pv } = Object.prototype,
    { getPrototypeOf: pu } = Object,
    Po = ((t) => (r) => {
        const i = pv.call(r);
        return t[i] || (t[i] = i.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Jt = (t) => ((t = t.toLowerCase()), (r) => Po(r) === t),
    Io = (t) => (r) => typeof r === t,
    { isArray: Jr } = Array,
    Yi = Io("undefined");
function mv(t) {
    return (
        t !== null &&
        !Yi(t) &&
        t.constructor !== null &&
        !Yi(t.constructor) &&
        Ot(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
    );
}
const qh = Jt("ArrayBuffer");
function gv(t) {
    let r;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (r = ArrayBuffer.isView(t))
            : (r = t && t.buffer && qh(t.buffer)),
        r
    );
}
const yv = Io("string"),
    Ot = Io("function"),
    Jh = Io("number"),
    Oo = (t) => t !== null && typeof t == "object",
    vv = (t) => t === !0 || t === !1,
    vo = (t) => {
        if (Po(t) !== "object") return !1;
        const r = pu(t);
        return (
            (r === null ||
                r === Object.prototype ||
                Object.getPrototypeOf(r) === null) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
        );
    },
    xv = Jt("Date"),
    wv = Jt("File"),
    kv = Jt("Blob"),
    Sv = Jt("FileList"),
    Ev = (t) => Oo(t) && Ot(t.pipe),
    Cv = (t) => {
        let r;
        return (
            t &&
            ((typeof FormData == "function" && t instanceof FormData) ||
                (Ot(t.append) &&
                    ((r = Po(t)) === "formdata" ||
                        (r === "object" &&
                            Ot(t.toString) &&
                            t.toString() === "[object FormData]"))))
        );
    },
    jv = Jt("URLSearchParams"),
    [Av, Tv, Nv, Rv] = ["ReadableStream", "Request", "Response", "Headers"].map(
        Jt
    ),
    Pv = (t) =>
        t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $i(t, r, { allOwnKeys: i = !1 } = {}) {
    if (t === null || typeof t > "u") return;
    let o, a;
    if ((typeof t != "object" && (t = [t]), Jr(t)))
        for (o = 0, a = t.length; o < a; o++) r.call(null, t[o], o, t);
    else {
        const u = i ? Object.getOwnPropertyNames(t) : Object.keys(t),
            c = u.length;
        let p;
        for (o = 0; o < c; o++) (p = u[o]), r.call(null, t[p], p, t);
    }
}
function $h(t, r) {
    r = r.toLowerCase();
    const i = Object.keys(t);
    let o = i.length,
        a;
    for (; o-- > 0; ) if (((a = i[o]), r === a.toLowerCase())) return a;
    return null;
}
const ar =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
            ? self
            : typeof window < "u"
            ? window
            : global,
    Kh = (t) => !Yi(t) && t !== ar;
function $a() {
    const { caseless: t } = (Kh(this) && this) || {},
        r = {},
        i = (o, a) => {
            const u = (t && $h(r, a)) || a;
            vo(r[u]) && vo(o)
                ? (r[u] = $a(r[u], o))
                : vo(o)
                ? (r[u] = $a({}, o))
                : Jr(o)
                ? (r[u] = o.slice())
                : (r[u] = o);
        };
    for (let o = 0, a = arguments.length; o < a; o++)
        arguments[o] && $i(arguments[o], i);
    return r;
}
const Iv = (t, r, i, { allOwnKeys: o } = {}) => (
        $i(
            r,
            (a, u) => {
                i && Ot(a) ? (t[u] = Yh(a, i)) : (t[u] = a);
            },
            { allOwnKeys: o }
        ),
        t
    ),
    Ov = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t),
    Lv = (t, r, i, o) => {
        (t.prototype = Object.create(r.prototype, o)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: r.prototype }),
            i && Object.assign(t.prototype, i);
    },
    zv = (t, r, i, o) => {
        let a, u, c;
        const p = {};
        if (((r = r || {}), t == null)) return r;
        do {
            for (a = Object.getOwnPropertyNames(t), u = a.length; u-- > 0; )
                (c = a[u]),
                    (!o || o(c, t, r)) && !p[c] && ((r[c] = t[c]), (p[c] = !0));
            t = i !== !1 && pu(t);
        } while (t && (!i || i(t, r)) && t !== Object.prototype);
        return r;
    },
    bv = (t, r, i) => {
        (t = String(t)),
            (i === void 0 || i > t.length) && (i = t.length),
            (i -= r.length);
        const o = t.indexOf(r, i);
        return o !== -1 && o === i;
    },
    _v = (t) => {
        if (!t) return null;
        if (Jr(t)) return t;
        let r = t.length;
        if (!Jh(r)) return null;
        const i = new Array(r);
        for (; r-- > 0; ) i[r] = t[r];
        return i;
    },
    Dv = (
        (t) => (r) =>
            t && r instanceof t
    )(typeof Uint8Array < "u" && pu(Uint8Array)),
    Fv = (t, r) => {
        const o = (t && t[Symbol.iterator]).call(t);
        let a;
        for (; (a = o.next()) && !a.done; ) {
            const u = a.value;
            r.call(t, u[0], u[1]);
        }
    },
    Uv = (t, r) => {
        let i;
        const o = [];
        for (; (i = t.exec(r)) !== null; ) o.push(i);
        return o;
    },
    Mv = Jt("HTMLFormElement"),
    Bv = (t) =>
        t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (i, o, a) {
            return o.toUpperCase() + a;
        }),
    _d = (
        ({ hasOwnProperty: t }) =>
        (r, i) =>
            t.call(r, i)
    )(Object.prototype),
    Vv = Jt("RegExp"),
    Gh = (t, r) => {
        const i = Object.getOwnPropertyDescriptors(t),
            o = {};
        $i(i, (a, u) => {
            let c;
            (c = r(a, u, t)) !== !1 && (o[u] = c || a);
        }),
            Object.defineProperties(t, o);
    },
    Hv = (t) => {
        Gh(t, (r, i) => {
            if (Ot(t) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
                return !1;
            const o = t[i];
            if (Ot(o)) {
                if (((r.enumerable = !1), "writable" in r)) {
                    r.writable = !1;
                    return;
                }
                r.set ||
                    (r.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + i + "'"
                        );
                    });
            }
        });
    },
    Wv = (t, r) => {
        const i = {},
            o = (a) => {
                a.forEach((u) => {
                    i[u] = !0;
                });
            };
        return Jr(t) ? o(t) : o(String(t).split(r)), i;
    },
    Xv = () => {},
    Qv = (t, r) => (t != null && Number.isFinite((t = +t)) ? t : r),
    Pa = "abcdefghijklmnopqrstuvwxyz",
    Dd = "0123456789",
    Zh = { DIGIT: Dd, ALPHA: Pa, ALPHA_DIGIT: Pa + Pa.toUpperCase() + Dd },
    Yv = (t = 16, r = Zh.ALPHA_DIGIT) => {
        let i = "";
        const { length: o } = r;
        for (; t--; ) i += r[(Math.random() * o) | 0];
        return i;
    };
function qv(t) {
    return !!(
        t &&
        Ot(t.append) &&
        t[Symbol.toStringTag] === "FormData" &&
        t[Symbol.iterator]
    );
}
const Jv = (t) => {
        const r = new Array(10),
            i = (o, a) => {
                if (Oo(o)) {
                    if (r.indexOf(o) >= 0) return;
                    if (!("toJSON" in o)) {
                        r[a] = o;
                        const u = Jr(o) ? [] : {};
                        return (
                            $i(o, (c, p) => {
                                const g = i(c, a + 1);
                                !Yi(g) && (u[p] = g);
                            }),
                            (r[a] = void 0),
                            u
                        );
                    }
                }
                return o;
            };
        return i(t, 0);
    },
    $v = Jt("AsyncFunction"),
    Kv = (t) => t && (Oo(t) || Ot(t)) && Ot(t.then) && Ot(t.catch),
    ep = ((t, r) =>
        t
            ? setImmediate
            : r
            ? ((i, o) => (
                  ar.addEventListener(
                      "message",
                      ({ source: a, data: u }) => {
                          a === ar && u === i && o.length && o.shift()();
                      },
                      !1
                  ),
                  (a) => {
                      o.push(a), ar.postMessage(i, "*");
                  }
              ))(`axios@${Math.random()}`, [])
            : (i) => setTimeout(i))(
        typeof setImmediate == "function",
        Ot(ar.postMessage)
    ),
    Gv =
        typeof queueMicrotask < "u"
            ? queueMicrotask.bind(ar)
            : (typeof process < "u" && process.nextTick) || ep,
    b = {
        isArray: Jr,
        isArrayBuffer: qh,
        isBuffer: mv,
        isFormData: Cv,
        isArrayBufferView: gv,
        isString: yv,
        isNumber: Jh,
        isBoolean: vv,
        isObject: Oo,
        isPlainObject: vo,
        isReadableStream: Av,
        isRequest: Tv,
        isResponse: Nv,
        isHeaders: Rv,
        isUndefined: Yi,
        isDate: xv,
        isFile: wv,
        isBlob: kv,
        isRegExp: Vv,
        isFunction: Ot,
        isStream: Ev,
        isURLSearchParams: jv,
        isTypedArray: Dv,
        isFileList: Sv,
        forEach: $i,
        merge: $a,
        extend: Iv,
        trim: Pv,
        stripBOM: Ov,
        inherits: Lv,
        toFlatObject: zv,
        kindOf: Po,
        kindOfTest: Jt,
        endsWith: bv,
        toArray: _v,
        forEachEntry: Fv,
        matchAll: Uv,
        isHTMLForm: Mv,
        hasOwnProperty: _d,
        hasOwnProp: _d,
        reduceDescriptors: Gh,
        freezeMethods: Hv,
        toObjectSet: Wv,
        toCamelCase: Bv,
        noop: Xv,
        toFiniteNumber: Qv,
        findKey: $h,
        global: ar,
        isContextDefined: Kh,
        ALPHABET: Zh,
        generateString: Yv,
        isSpecCompliantForm: qv,
        toJSONObject: Jv,
        isAsyncFn: $v,
        isThenable: Kv,
        setImmediate: ep,
        asap: Gv,
    };
function ve(t, r, i, o, a) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = t),
        (this.name = "AxiosError"),
        r && (this.code = r),
        i && (this.config = i),
        o && (this.request = o),
        a && ((this.response = a), (this.status = a.status ? a.status : null));
}
b.inherits(ve, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: b.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    },
});
const tp = ve.prototype,
    np = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((t) => {
    np[t] = { value: t };
});
Object.defineProperties(ve, np);
Object.defineProperty(tp, "isAxiosError", { value: !0 });
ve.from = (t, r, i, o, a, u) => {
    const c = Object.create(tp);
    return (
        b.toFlatObject(
            t,
            c,
            function (g) {
                return g !== Error.prototype;
            },
            (p) => p !== "isAxiosError"
        ),
        ve.call(c, t.message, r, i, o, a),
        (c.cause = t),
        (c.name = t.name),
        u && Object.assign(c, u),
        c
    );
};
const Zv = null;
function Ka(t) {
    return b.isPlainObject(t) || b.isArray(t);
}
function rp(t) {
    return b.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Fd(t, r, i) {
    return t
        ? t
              .concat(r)
              .map(function (a, u) {
                  return (a = rp(a)), !i && u ? "[" + a + "]" : a;
              })
              .join(i ? "." : "")
        : r;
}
function ex(t) {
    return b.isArray(t) && !t.some(Ka);
}
const tx = b.toFlatObject(b, {}, null, function (r) {
    return /^is[A-Z]/.test(r);
});
function Lo(t, r, i) {
    if (!b.isObject(t)) throw new TypeError("target must be an object");
    (r = r || new FormData()),
        (i = b.toFlatObject(
            i,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (T, R) {
                return !b.isUndefined(R[T]);
            }
        ));
    const o = i.metaTokens,
        a = i.visitor || y,
        u = i.dots,
        c = i.indexes,
        g = (i.Blob || (typeof Blob < "u" && Blob)) && b.isSpecCompliantForm(r);
    if (!b.isFunction(a)) throw new TypeError("visitor must be a function");
    function m(j) {
        if (j === null) return "";
        if (b.isDate(j)) return j.toISOString();
        if (!g && b.isBlob(j))
            throw new ve("Blob is not supported. Use a Buffer instead.");
        return b.isArrayBuffer(j) || b.isTypedArray(j)
            ? g && typeof Blob == "function"
                ? new Blob([j])
                : Buffer.from(j)
            : j;
    }
    function y(j, T, R) {
        let L = j;
        if (j && !R && typeof j == "object") {
            if (b.endsWith(T, "{}"))
                (T = o ? T : T.slice(0, -2)), (j = JSON.stringify(j));
            else if (
                (b.isArray(j) && ex(j)) ||
                ((b.isFileList(j) || b.endsWith(T, "[]")) && (L = b.toArray(j)))
            )
                return (
                    (T = rp(T)),
                    L.forEach(function (U, J) {
                        !(b.isUndefined(U) || U === null) &&
                            r.append(
                                c === !0
                                    ? Fd([T], J, u)
                                    : c === null
                                    ? T
                                    : T + "[]",
                                m(U)
                            );
                    }),
                    !1
                );
        }
        return Ka(j) ? !0 : (r.append(Fd(R, T, u), m(j)), !1);
    }
    const x = [],
        k = Object.assign(tx, {
            defaultVisitor: y,
            convertValue: m,
            isVisitable: Ka,
        });
    function w(j, T) {
        if (!b.isUndefined(j)) {
            if (x.indexOf(j) !== -1)
                throw Error("Circular reference detected in " + T.join("."));
            x.push(j),
                b.forEach(j, function (L, D) {
                    (!(b.isUndefined(L) || L === null) &&
                        a.call(r, L, b.isString(D) ? D.trim() : D, T, k)) ===
                        !0 && w(L, T ? T.concat(D) : [D]);
                }),
                x.pop();
        }
    }
    if (!b.isObject(t)) throw new TypeError("data must be an object");
    return w(t), r;
}
function Ud(t) {
    const r = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (o) {
        return r[o];
    });
}
function mu(t, r) {
    (this._pairs = []), t && Lo(t, this, r);
}
const ip = mu.prototype;
ip.append = function (r, i) {
    this._pairs.push([r, i]);
};
ip.toString = function (r) {
    const i = r
        ? function (o) {
              return r.call(this, o, Ud);
          }
        : Ud;
    return this._pairs
        .map(function (a) {
            return i(a[0]) + "=" + i(a[1]);
        }, "")
        .join("&");
};
function nx(t) {
    return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
}
function lp(t, r, i) {
    if (!r) return t;
    const o = (i && i.encode) || nx;
    b.isFunction(i) && (i = { serialize: i });
    const a = i && i.serialize;
    let u;
    if (
        (a
            ? (u = a(r, i))
            : (u = b.isURLSearchParams(r)
                  ? r.toString()
                  : new mu(r, i).toString(o)),
        u)
    ) {
        const c = t.indexOf("#");
        c !== -1 && (t = t.slice(0, c)),
            (t += (t.indexOf("?") === -1 ? "?" : "&") + u);
    }
    return t;
}
class Md {
    constructor() {
        this.handlers = [];
    }
    use(r, i, o) {
        return (
            this.handlers.push({
                fulfilled: r,
                rejected: i,
                synchronous: o ? o.synchronous : !1,
                runWhen: o ? o.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(r) {
        this.handlers[r] && (this.handlers[r] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(r) {
        b.forEach(this.handlers, function (o) {
            o !== null && r(o);
        });
    }
}
const op = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    rx = typeof URLSearchParams < "u" ? URLSearchParams : mu,
    ix = typeof FormData < "u" ? FormData : null,
    lx = typeof Blob < "u" ? Blob : null,
    ox = {
        isBrowser: !0,
        classes: { URLSearchParams: rx, FormData: ix, Blob: lx },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    gu = typeof window < "u" && typeof document < "u",
    Ga = (typeof navigator == "object" && navigator) || void 0,
    sx =
        gu &&
        (!Ga || ["ReactNative", "NativeScript", "NS"].indexOf(Ga.product) < 0),
    ax =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    ux = (gu && window.location.href) || "http://localhost",
    cx = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: gu,
                hasStandardBrowserEnv: sx,
                hasStandardBrowserWebWorkerEnv: ax,
                navigator: Ga,
                origin: ux,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    ft = { ...cx, ...ox };
function fx(t, r) {
    return Lo(
        t,
        new ft.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (i, o, a, u) {
                    return ft.isNode && b.isBuffer(i)
                        ? (this.append(o, i.toString("base64")), !1)
                        : u.defaultVisitor.apply(this, arguments);
                },
            },
            r
        )
    );
}
function dx(t) {
    return b
        .matchAll(/\w+|\[(\w*)]/g, t)
        .map((r) => (r[0] === "[]" ? "" : r[1] || r[0]));
}
function hx(t) {
    const r = {},
        i = Object.keys(t);
    let o;
    const a = i.length;
    let u;
    for (o = 0; o < a; o++) (u = i[o]), (r[u] = t[u]);
    return r;
}
function sp(t) {
    function r(i, o, a, u) {
        let c = i[u++];
        if (c === "__proto__") return !0;
        const p = Number.isFinite(+c),
            g = u >= i.length;
        return (
            (c = !c && b.isArray(a) ? a.length : c),
            g
                ? (b.hasOwnProp(a, c) ? (a[c] = [a[c], o]) : (a[c] = o), !p)
                : ((!a[c] || !b.isObject(a[c])) && (a[c] = []),
                  r(i, o, a[c], u) && b.isArray(a[c]) && (a[c] = hx(a[c])),
                  !p)
        );
    }
    if (b.isFormData(t) && b.isFunction(t.entries)) {
        const i = {};
        return (
            b.forEachEntry(t, (o, a) => {
                r(dx(o), a, i, 0);
            }),
            i
        );
    }
    return null;
}
function px(t, r, i) {
    if (b.isString(t))
        try {
            return (r || JSON.parse)(t), b.trim(t);
        } catch (o) {
            if (o.name !== "SyntaxError") throw o;
        }
    return (i || JSON.stringify)(t);
}
const Ki = {
    transitional: op,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (r, i) {
            const o = i.getContentType() || "",
                a = o.indexOf("application/json") > -1,
                u = b.isObject(r);
            if (
                (u && b.isHTMLForm(r) && (r = new FormData(r)), b.isFormData(r))
            )
                return a ? JSON.stringify(sp(r)) : r;
            if (
                b.isArrayBuffer(r) ||
                b.isBuffer(r) ||
                b.isStream(r) ||
                b.isFile(r) ||
                b.isBlob(r) ||
                b.isReadableStream(r)
            )
                return r;
            if (b.isArrayBufferView(r)) return r.buffer;
            if (b.isURLSearchParams(r))
                return (
                    i.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1
                    ),
                    r.toString()
                );
            let p;
            if (u) {
                if (o.indexOf("application/x-www-form-urlencoded") > -1)
                    return fx(r, this.formSerializer).toString();
                if (
                    (p = b.isFileList(r)) ||
                    o.indexOf("multipart/form-data") > -1
                ) {
                    const g = this.env && this.env.FormData;
                    return Lo(
                        p ? { "files[]": r } : r,
                        g && new g(),
                        this.formSerializer
                    );
                }
            }
            return u || a
                ? (i.setContentType("application/json", !1), px(r))
                : r;
        },
    ],
    transformResponse: [
        function (r) {
            const i = this.transitional || Ki.transitional,
                o = i && i.forcedJSONParsing,
                a = this.responseType === "json";
            if (b.isResponse(r) || b.isReadableStream(r)) return r;
            if (r && b.isString(r) && ((o && !this.responseType) || a)) {
                const c = !(i && i.silentJSONParsing) && a;
                try {
                    return JSON.parse(r);
                } catch (p) {
                    if (c)
                        throw p.name === "SyntaxError"
                            ? ve.from(
                                  p,
                                  ve.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : p;
                }
            }
            return r;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob },
    validateStatus: function (r) {
        return r >= 200 && r < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
    Ki.headers[t] = {};
});
const mx = b.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    gx = (t) => {
        const r = {};
        let i, o, a;
        return (
            t &&
                t
                    .split(
                        `
`
                    )
                    .forEach(function (c) {
                        (a = c.indexOf(":")),
                            (i = c.substring(0, a).trim().toLowerCase()),
                            (o = c.substring(a + 1).trim()),
                            !(!i || (r[i] && mx[i])) &&
                                (i === "set-cookie"
                                    ? r[i]
                                        ? r[i].push(o)
                                        : (r[i] = [o])
                                    : (r[i] = r[i] ? r[i] + ", " + o : o));
                    }),
            r
        );
    },
    Bd = Symbol("internals");
function Mi(t) {
    return t && String(t).trim().toLowerCase();
}
function xo(t) {
    return t === !1 || t == null ? t : b.isArray(t) ? t.map(xo) : String(t);
}
function yx(t) {
    const r = Object.create(null),
        i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; (o = i.exec(t)); ) r[o[1]] = o[2];
    return r;
}
const vx = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Ia(t, r, i, o, a) {
    if (b.isFunction(o)) return o.call(this, r, i);
    if ((a && (r = i), !!b.isString(r))) {
        if (b.isString(o)) return r.indexOf(o) !== -1;
        if (b.isRegExp(o)) return o.test(r);
    }
}
function xx(t) {
    return t
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (r, i, o) => i.toUpperCase() + o);
}
function wx(t, r) {
    const i = b.toCamelCase(" " + r);
    ["get", "set", "has"].forEach((o) => {
        Object.defineProperty(t, o + i, {
            value: function (a, u, c) {
                return this[o].call(this, r, a, u, c);
            },
            configurable: !0,
        });
    });
}
let Et = class {
    constructor(r) {
        r && this.set(r);
    }
    set(r, i, o) {
        const a = this;
        function u(p, g, m) {
            const y = Mi(g);
            if (!y) throw new Error("header name must be a non-empty string");
            const x = b.findKey(a, y);
            (!x ||
                a[x] === void 0 ||
                m === !0 ||
                (m === void 0 && a[x] !== !1)) &&
                (a[x || g] = xo(p));
        }
        const c = (p, g) => b.forEach(p, (m, y) => u(m, y, g));
        if (b.isPlainObject(r) || r instanceof this.constructor) c(r, i);
        else if (b.isString(r) && (r = r.trim()) && !vx(r)) c(gx(r), i);
        else if (b.isHeaders(r)) for (const [p, g] of r.entries()) u(g, p, o);
        else r != null && u(i, r, o);
        return this;
    }
    get(r, i) {
        if (((r = Mi(r)), r)) {
            const o = b.findKey(this, r);
            if (o) {
                const a = this[o];
                if (!i) return a;
                if (i === !0) return yx(a);
                if (b.isFunction(i)) return i.call(this, a, o);
                if (b.isRegExp(i)) return i.exec(a);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(r, i) {
        if (((r = Mi(r)), r)) {
            const o = b.findKey(this, r);
            return !!(
                o &&
                this[o] !== void 0 &&
                (!i || Ia(this, this[o], o, i))
            );
        }
        return !1;
    }
    delete(r, i) {
        const o = this;
        let a = !1;
        function u(c) {
            if (((c = Mi(c)), c)) {
                const p = b.findKey(o, c);
                p && (!i || Ia(o, o[p], p, i)) && (delete o[p], (a = !0));
            }
        }
        return b.isArray(r) ? r.forEach(u) : u(r), a;
    }
    clear(r) {
        const i = Object.keys(this);
        let o = i.length,
            a = !1;
        for (; o--; ) {
            const u = i[o];
            (!r || Ia(this, this[u], u, r, !0)) && (delete this[u], (a = !0));
        }
        return a;
    }
    normalize(r) {
        const i = this,
            o = {};
        return (
            b.forEach(this, (a, u) => {
                const c = b.findKey(o, u);
                if (c) {
                    (i[c] = xo(a)), delete i[u];
                    return;
                }
                const p = r ? xx(u) : String(u).trim();
                p !== u && delete i[u], (i[p] = xo(a)), (o[p] = !0);
            }),
            this
        );
    }
    concat(...r) {
        return this.constructor.concat(this, ...r);
    }
    toJSON(r) {
        const i = Object.create(null);
        return (
            b.forEach(this, (o, a) => {
                o != null &&
                    o !== !1 &&
                    (i[a] = r && b.isArray(o) ? o.join(", ") : o);
            }),
            i
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([r, i]) => r + ": " + i)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(r) {
        return r instanceof this ? r : new this(r);
    }
    static concat(r, ...i) {
        const o = new this(r);
        return i.forEach((a) => o.set(a)), o;
    }
    static accessor(r) {
        const o = (this[Bd] = this[Bd] = { accessors: {} }).accessors,
            a = this.prototype;
        function u(c) {
            const p = Mi(c);
            o[p] || (wx(a, c), (o[p] = !0));
        }
        return b.isArray(r) ? r.forEach(u) : u(r), this;
    }
};
Et.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
b.reduceDescriptors(Et.prototype, ({ value: t }, r) => {
    let i = r[0].toUpperCase() + r.slice(1);
    return {
        get: () => t,
        set(o) {
            this[i] = o;
        },
    };
});
b.freezeMethods(Et);
function Oa(t, r) {
    const i = this || Ki,
        o = r || i,
        a = Et.from(o.headers);
    let u = o.data;
    return (
        b.forEach(t, function (p) {
            u = p.call(i, u, a.normalize(), r ? r.status : void 0);
        }),
        a.normalize(),
        u
    );
}
function ap(t) {
    return !!(t && t.__CANCEL__);
}
function $r(t, r, i) {
    ve.call(this, t ?? "canceled", ve.ERR_CANCELED, r, i),
        (this.name = "CanceledError");
}
b.inherits($r, ve, { __CANCEL__: !0 });
function up(t, r, i) {
    const o = i.config.validateStatus;
    !i.status || !o || o(i.status)
        ? t(i)
        : r(
              new ve(
                  "Request failed with status code " + i.status,
                  [ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][
                      Math.floor(i.status / 100) - 4
                  ],
                  i.config,
                  i.request,
                  i
              )
          );
}
function kx(t) {
    const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (r && r[1]) || "";
}
function Sx(t, r) {
    t = t || 10;
    const i = new Array(t),
        o = new Array(t);
    let a = 0,
        u = 0,
        c;
    return (
        (r = r !== void 0 ? r : 1e3),
        function (g) {
            const m = Date.now(),
                y = o[u];
            c || (c = m), (i[a] = g), (o[a] = m);
            let x = u,
                k = 0;
            for (; x !== a; ) (k += i[x++]), (x = x % t);
            if (((a = (a + 1) % t), a === u && (u = (u + 1) % t), m - c < r))
                return;
            const w = y && m - y;
            return w ? Math.round((k * 1e3) / w) : void 0;
        }
    );
}
function Ex(t, r) {
    let i = 0,
        o = 1e3 / r,
        a,
        u;
    const c = (m, y = Date.now()) => {
        (i = y),
            (a = null),
            u && (clearTimeout(u), (u = null)),
            t.apply(null, m);
    };
    return [
        (...m) => {
            const y = Date.now(),
                x = y - i;
            x >= o
                ? c(m, y)
                : ((a = m),
                  u ||
                      (u = setTimeout(() => {
                          (u = null), c(a);
                      }, o - x)));
        },
        () => a && c(a),
    ];
}
const Eo = (t, r, i = 3) => {
        let o = 0;
        const a = Sx(50, 250);
        return Ex((u) => {
            const c = u.loaded,
                p = u.lengthComputable ? u.total : void 0,
                g = c - o,
                m = a(g),
                y = c <= p;
            o = c;
            const x = {
                loaded: c,
                total: p,
                progress: p ? c / p : void 0,
                bytes: g,
                rate: m || void 0,
                estimated: m && p && y ? (p - c) / m : void 0,
                event: u,
                lengthComputable: p != null,
                [r ? "download" : "upload"]: !0,
            };
            t(x);
        }, i);
    },
    Vd = (t, r) => {
        const i = t != null;
        return [
            (o) => r[0]({ lengthComputable: i, total: t, loaded: o }),
            r[1],
        ];
    },
    Hd =
        (t) =>
        (...r) =>
            b.asap(() => t(...r)),
    Cx = ft.hasStandardBrowserEnv
        ? ((t, r) => (i) => (
              (i = new URL(i, ft.origin)),
              t.protocol === i.protocol &&
                  t.host === i.host &&
                  (r || t.port === i.port)
          ))(
              new URL(ft.origin),
              ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent)
          )
        : () => !0,
    jx = ft.hasStandardBrowserEnv
        ? {
              write(t, r, i, o, a, u) {
                  const c = [t + "=" + encodeURIComponent(r)];
                  b.isNumber(i) &&
                      c.push("expires=" + new Date(i).toGMTString()),
                      b.isString(o) && c.push("path=" + o),
                      b.isString(a) && c.push("domain=" + a),
                      u === !0 && c.push("secure"),
                      (document.cookie = c.join("; "));
              },
              read(t) {
                  const r = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")
                  );
                  return r ? decodeURIComponent(r[3]) : null;
              },
              remove(t) {
                  this.write(t, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function Ax(t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Tx(t, r) {
    return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
}
function cp(t, r) {
    return t && !Ax(r) ? Tx(t, r) : r;
}
const Wd = (t) => (t instanceof Et ? { ...t } : t);
function cr(t, r) {
    r = r || {};
    const i = {};
    function o(m, y, x, k) {
        return b.isPlainObject(m) && b.isPlainObject(y)
            ? b.merge.call({ caseless: k }, m, y)
            : b.isPlainObject(y)
            ? b.merge({}, y)
            : b.isArray(y)
            ? y.slice()
            : y;
    }
    function a(m, y, x, k) {
        if (b.isUndefined(y)) {
            if (!b.isUndefined(m)) return o(void 0, m, x, k);
        } else return o(m, y, x, k);
    }
    function u(m, y) {
        if (!b.isUndefined(y)) return o(void 0, y);
    }
    function c(m, y) {
        if (b.isUndefined(y)) {
            if (!b.isUndefined(m)) return o(void 0, m);
        } else return o(void 0, y);
    }
    function p(m, y, x) {
        if (x in r) return o(m, y);
        if (x in t) return o(void 0, m);
    }
    const g = {
        url: u,
        method: u,
        data: u,
        baseURL: c,
        transformRequest: c,
        transformResponse: c,
        paramsSerializer: c,
        timeout: c,
        timeoutMessage: c,
        withCredentials: c,
        withXSRFToken: c,
        adapter: c,
        responseType: c,
        xsrfCookieName: c,
        xsrfHeaderName: c,
        onUploadProgress: c,
        onDownloadProgress: c,
        decompress: c,
        maxContentLength: c,
        maxBodyLength: c,
        beforeRedirect: c,
        transport: c,
        httpAgent: c,
        httpsAgent: c,
        cancelToken: c,
        socketPath: c,
        responseEncoding: c,
        validateStatus: p,
        headers: (m, y, x) => a(Wd(m), Wd(y), x, !0),
    };
    return (
        b.forEach(Object.keys(Object.assign({}, t, r)), function (y) {
            const x = g[y] || a,
                k = x(t[y], r[y], y);
            (b.isUndefined(k) && x !== p) || (i[y] = k);
        }),
        i
    );
}
const fp = (t) => {
        const r = cr({}, t);
        let {
            data: i,
            withXSRFToken: o,
            xsrfHeaderName: a,
            xsrfCookieName: u,
            headers: c,
            auth: p,
        } = r;
        (r.headers = c = Et.from(c)),
            (r.url = lp(cp(r.baseURL, r.url), t.params, t.paramsSerializer)),
            p &&
                c.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (p.username || "") +
                                ":" +
                                (p.password
                                    ? unescape(encodeURIComponent(p.password))
                                    : "")
                        )
                );
        let g;
        if (b.isFormData(i)) {
            if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
                c.setContentType(void 0);
            else if ((g = c.getContentType()) !== !1) {
                const [m, ...y] = g
                    ? g
                          .split(";")
                          .map((x) => x.trim())
                          .filter(Boolean)
                    : [];
                c.setContentType([m || "multipart/form-data", ...y].join("; "));
            }
        }
        if (
            ft.hasStandardBrowserEnv &&
            (o && b.isFunction(o) && (o = o(r)), o || (o !== !1 && Cx(r.url)))
        ) {
            const m = a && u && jx.read(u);
            m && c.set(a, m);
        }
        return r;
    },
    Nx = typeof XMLHttpRequest < "u",
    Rx =
        Nx &&
        function (t) {
            return new Promise(function (i, o) {
                const a = fp(t);
                let u = a.data;
                const c = Et.from(a.headers).normalize();
                let {
                        responseType: p,
                        onUploadProgress: g,
                        onDownloadProgress: m,
                    } = a,
                    y,
                    x,
                    k,
                    w,
                    j;
                function T() {
                    w && w(),
                        j && j(),
                        a.cancelToken && a.cancelToken.unsubscribe(y),
                        a.signal && a.signal.removeEventListener("abort", y);
                }
                let R = new XMLHttpRequest();
                R.open(a.method.toUpperCase(), a.url, !0),
                    (R.timeout = a.timeout);
                function L() {
                    if (!R) return;
                    const U = Et.from(
                            "getAllResponseHeaders" in R &&
                                R.getAllResponseHeaders()
                        ),
                        $ = {
                            data:
                                !p || p === "text" || p === "json"
                                    ? R.responseText
                                    : R.response,
                            status: R.status,
                            statusText: R.statusText,
                            headers: U,
                            config: t,
                            request: R,
                        };
                    up(
                        function (ie) {
                            i(ie), T();
                        },
                        function (ie) {
                            o(ie), T();
                        },
                        $
                    ),
                        (R = null);
                }
                "onloadend" in R
                    ? (R.onloadend = L)
                    : (R.onreadystatechange = function () {
                          !R ||
                              R.readyState !== 4 ||
                              (R.status === 0 &&
                                  !(
                                      R.responseURL &&
                                      R.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(L);
                      }),
                    (R.onabort = function () {
                        R &&
                            (o(
                                new ve("Request aborted", ve.ECONNABORTED, t, R)
                            ),
                            (R = null));
                    }),
                    (R.onerror = function () {
                        o(new ve("Network Error", ve.ERR_NETWORK, t, R)),
                            (R = null);
                    }),
                    (R.ontimeout = function () {
                        let J = a.timeout
                            ? "timeout of " + a.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const $ = a.transitional || op;
                        a.timeoutErrorMessage && (J = a.timeoutErrorMessage),
                            o(
                                new ve(
                                    J,
                                    $.clarifyTimeoutError
                                        ? ve.ETIMEDOUT
                                        : ve.ECONNABORTED,
                                    t,
                                    R
                                )
                            ),
                            (R = null);
                    }),
                    u === void 0 && c.setContentType(null),
                    "setRequestHeader" in R &&
                        b.forEach(c.toJSON(), function (J, $) {
                            R.setRequestHeader($, J);
                        }),
                    b.isUndefined(a.withCredentials) ||
                        (R.withCredentials = !!a.withCredentials),
                    p && p !== "json" && (R.responseType = a.responseType),
                    m &&
                        (([k, j] = Eo(m, !0)),
                        R.addEventListener("progress", k)),
                    g &&
                        R.upload &&
                        (([x, w] = Eo(g)),
                        R.upload.addEventListener("progress", x),
                        R.upload.addEventListener("loadend", w)),
                    (a.cancelToken || a.signal) &&
                        ((y = (U) => {
                            R &&
                                (o(!U || U.type ? new $r(null, t, R) : U),
                                R.abort(),
                                (R = null));
                        }),
                        a.cancelToken && a.cancelToken.subscribe(y),
                        a.signal &&
                            (a.signal.aborted
                                ? y()
                                : a.signal.addEventListener("abort", y)));
                const D = kx(a.url);
                if (D && ft.protocols.indexOf(D) === -1) {
                    o(
                        new ve(
                            "Unsupported protocol " + D + ":",
                            ve.ERR_BAD_REQUEST,
                            t
                        )
                    );
                    return;
                }
                R.send(u || null);
            });
        },
    Px = (t, r) => {
        const { length: i } = (t = t ? t.filter(Boolean) : []);
        if (r || i) {
            let o = new AbortController(),
                a;
            const u = function (m) {
                if (!a) {
                    (a = !0), p();
                    const y = m instanceof Error ? m : this.reason;
                    o.abort(
                        y instanceof ve
                            ? y
                            : new $r(y instanceof Error ? y.message : y)
                    );
                }
            };
            let c =
                r &&
                setTimeout(() => {
                    (c = null),
                        u(new ve(`timeout ${r} of ms exceeded`, ve.ETIMEDOUT));
                }, r);
            const p = () => {
                t &&
                    (c && clearTimeout(c),
                    (c = null),
                    t.forEach((m) => {
                        m.unsubscribe
                            ? m.unsubscribe(u)
                            : m.removeEventListener("abort", u);
                    }),
                    (t = null));
            };
            t.forEach((m) => m.addEventListener("abort", u));
            const { signal: g } = o;
            return (g.unsubscribe = () => b.asap(p)), g;
        }
    },
    Ix = function* (t, r) {
        let i = t.byteLength;
        if (i < r) {
            yield t;
            return;
        }
        let o = 0,
            a;
        for (; o < i; ) (a = o + r), yield t.slice(o, a), (o = a);
    },
    Ox = async function* (t, r) {
        for await (const i of Lx(t)) yield* Ix(i, r);
    },
    Lx = async function* (t) {
        if (t[Symbol.asyncIterator]) {
            yield* t;
            return;
        }
        const r = t.getReader();
        try {
            for (;;) {
                const { done: i, value: o } = await r.read();
                if (i) break;
                yield o;
            }
        } finally {
            await r.cancel();
        }
    },
    Xd = (t, r, i, o) => {
        const a = Ox(t, r);
        let u = 0,
            c,
            p = (g) => {
                c || ((c = !0), o && o(g));
            };
        return new ReadableStream(
            {
                async pull(g) {
                    try {
                        const { done: m, value: y } = await a.next();
                        if (m) {
                            p(), g.close();
                            return;
                        }
                        let x = y.byteLength;
                        if (i) {
                            let k = (u += x);
                            i(k);
                        }
                        g.enqueue(new Uint8Array(y));
                    } catch (m) {
                        throw (p(m), m);
                    }
                },
                cancel(g) {
                    return p(g), a.return();
                },
            },
            { highWaterMark: 2 }
        );
    },
    zo =
        typeof fetch == "function" &&
        typeof Request == "function" &&
        typeof Response == "function",
    dp = zo && typeof ReadableStream == "function",
    zx =
        zo &&
        (typeof TextEncoder == "function"
            ? (
                  (t) => (r) =>
                      t.encode(r)
              )(new TextEncoder())
            : async (t) => new Uint8Array(await new Response(t).arrayBuffer())),
    hp = (t, ...r) => {
        try {
            return !!t(...r);
        } catch {
            return !1;
        }
    },
    bx =
        dp &&
        hp(() => {
            let t = !1;
            const r = new Request(ft.origin, {
                body: new ReadableStream(),
                method: "POST",
                get duplex() {
                    return (t = !0), "half";
                },
            }).headers.has("Content-Type");
            return t && !r;
        }),
    Qd = 64 * 1024,
    Za = dp && hp(() => b.isReadableStream(new Response("").body)),
    Co = { stream: Za && ((t) => t.body) };
zo &&
    ((t) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
            !Co[r] &&
                (Co[r] = b.isFunction(t[r])
                    ? (i) => i[r]()
                    : (i, o) => {
                          throw new ve(
                              `Response type '${r}' is not supported`,
                              ve.ERR_NOT_SUPPORT,
                              o
                          );
                      });
        });
    })(new Response());
const _x = async (t) => {
        if (t == null) return 0;
        if (b.isBlob(t)) return t.size;
        if (b.isSpecCompliantForm(t))
            return (
                await new Request(ft.origin, {
                    method: "POST",
                    body: t,
                }).arrayBuffer()
            ).byteLength;
        if (b.isArrayBufferView(t) || b.isArrayBuffer(t)) return t.byteLength;
        if ((b.isURLSearchParams(t) && (t = t + ""), b.isString(t)))
            return (await zx(t)).byteLength;
    },
    Dx = async (t, r) => {
        const i = b.toFiniteNumber(t.getContentLength());
        return i ?? _x(r);
    },
    Fx =
        zo &&
        (async (t) => {
            let {
                url: r,
                method: i,
                data: o,
                signal: a,
                cancelToken: u,
                timeout: c,
                onDownloadProgress: p,
                onUploadProgress: g,
                responseType: m,
                headers: y,
                withCredentials: x = "same-origin",
                fetchOptions: k,
            } = fp(t);
            m = m ? (m + "").toLowerCase() : "text";
            let w = Px([a, u && u.toAbortSignal()], c),
                j;
            const T =
                w &&
                w.unsubscribe &&
                (() => {
                    w.unsubscribe();
                });
            let R;
            try {
                if (
                    g &&
                    bx &&
                    i !== "get" &&
                    i !== "head" &&
                    (R = await Dx(y, o)) !== 0
                ) {
                    let $ = new Request(r, {
                            method: "POST",
                            body: o,
                            duplex: "half",
                        }),
                        _;
                    if (
                        (b.isFormData(o) &&
                            (_ = $.headers.get("content-type")) &&
                            y.setContentType(_),
                        $.body)
                    ) {
                        const [ie, xe] = Vd(R, Eo(Hd(g)));
                        o = Xd($.body, Qd, ie, xe);
                    }
                }
                b.isString(x) || (x = x ? "include" : "omit");
                const L = "credentials" in Request.prototype;
                j = new Request(r, {
                    ...k,
                    signal: w,
                    method: i.toUpperCase(),
                    headers: y.normalize().toJSON(),
                    body: o,
                    duplex: "half",
                    credentials: L ? x : void 0,
                });
                let D = await fetch(j);
                const U = Za && (m === "stream" || m === "response");
                if (Za && (p || (U && T))) {
                    const $ = {};
                    ["status", "statusText", "headers"].forEach((ge) => {
                        $[ge] = D[ge];
                    });
                    const _ = b.toFiniteNumber(D.headers.get("content-length")),
                        [ie, xe] = (p && Vd(_, Eo(Hd(p), !0))) || [];
                    D = new Response(
                        Xd(D.body, Qd, ie, () => {
                            xe && xe(), T && T();
                        }),
                        $
                    );
                }
                m = m || "text";
                let J = await Co[b.findKey(Co, m) || "text"](D, t);
                return (
                    !U && T && T(),
                    await new Promise(($, _) => {
                        up($, _, {
                            data: J,
                            headers: Et.from(D.headers),
                            status: D.status,
                            statusText: D.statusText,
                            config: t,
                            request: j,
                        });
                    })
                );
            } catch (L) {
                throw (
                    (T && T(),
                    L && L.name === "TypeError" && /fetch/i.test(L.message)
                        ? Object.assign(
                              new ve("Network Error", ve.ERR_NETWORK, t, j),
                              { cause: L.cause || L }
                          )
                        : ve.from(L, L && L.code, t, j))
                );
            }
        }),
    eu = { http: Zv, xhr: Rx, fetch: Fx };
b.forEach(eu, (t, r) => {
    if (t) {
        try {
            Object.defineProperty(t, "name", { value: r });
        } catch {}
        Object.defineProperty(t, "adapterName", { value: r });
    }
});
const Yd = (t) => `- ${t}`,
    Ux = (t) => b.isFunction(t) || t === null || t === !1,
    pp = {
        getAdapter: (t) => {
            t = b.isArray(t) ? t : [t];
            const { length: r } = t;
            let i, o;
            const a = {};
            for (let u = 0; u < r; u++) {
                i = t[u];
                let c;
                if (
                    ((o = i),
                    !Ux(i) &&
                        ((o = eu[(c = String(i)).toLowerCase()]), o === void 0))
                )
                    throw new ve(`Unknown adapter '${c}'`);
                if (o) break;
                a[c || "#" + u] = o;
            }
            if (!o) {
                const u = Object.entries(a).map(
                    ([p, g]) =>
                        `adapter ${p} ` +
                        (g === !1
                            ? "is not supported by the environment"
                            : "is not available in the build")
                );
                let c = r
                    ? u.length > 1
                        ? `since :
` +
                          u.map(Yd).join(`
`)
                        : " " + Yd(u[0])
                    : "as no adapter specified";
                throw new ve(
                    "There is no suitable adapter to dispatch the request " + c,
                    "ERR_NOT_SUPPORT"
                );
            }
            return o;
        },
        adapters: eu,
    };
function La(t) {
    if (
        (t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted)
    )
        throw new $r(null, t);
}
function qd(t) {
    return (
        La(t),
        (t.headers = Et.from(t.headers)),
        (t.data = Oa.call(t, t.transformRequest)),
        ["post", "put", "patch"].indexOf(t.method) !== -1 &&
            t.headers.setContentType("application/x-www-form-urlencoded", !1),
        pp
            .getAdapter(t.adapter || Ki.adapter)(t)
            .then(
                function (o) {
                    return (
                        La(t),
                        (o.data = Oa.call(t, t.transformResponse, o)),
                        (o.headers = Et.from(o.headers)),
                        o
                    );
                },
                function (o) {
                    return (
                        ap(o) ||
                            (La(t),
                            o &&
                                o.response &&
                                ((o.response.data = Oa.call(
                                    t,
                                    t.transformResponse,
                                    o.response
                                )),
                                (o.response.headers = Et.from(
                                    o.response.headers
                                )))),
                        Promise.reject(o)
                    );
                }
            )
    );
}
const mp = "1.7.9",
    bo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (t, r) => {
        bo[t] = function (o) {
            return typeof o === t || "a" + (r < 1 ? "n " : " ") + t;
        };
    }
);
const Jd = {};
bo.transitional = function (r, i, o) {
    function a(u, c) {
        return (
            "[Axios v" +
            mp +
            "] Transitional option '" +
            u +
            "'" +
            c +
            (o ? ". " + o : "")
        );
    }
    return (u, c, p) => {
        if (r === !1)
            throw new ve(
                a(c, " has been removed" + (i ? " in " + i : "")),
                ve.ERR_DEPRECATED
            );
        return (
            i &&
                !Jd[c] &&
                ((Jd[c] = !0),
                console.warn(
                    a(
                        c,
                        " has been deprecated since v" +
                            i +
                            " and will be removed in the near future"
                    )
                )),
            r ? r(u, c, p) : !0
        );
    };
};
bo.spelling = function (r) {
    return (i, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function Mx(t, r, i) {
    if (typeof t != "object")
        throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(t);
    let a = o.length;
    for (; a-- > 0; ) {
        const u = o[a],
            c = r[u];
        if (c) {
            const p = t[u],
                g = p === void 0 || c(p, u, t);
            if (g !== !0)
                throw new ve(
                    "option " + u + " must be " + g,
                    ve.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (i !== !0) throw new ve("Unknown option " + u, ve.ERR_BAD_OPTION);
    }
}
const wo = { assertOptions: Mx, validators: bo },
    nn = wo.validators;
let ur = class {
    constructor(r) {
        (this.defaults = r),
            (this.interceptors = { request: new Md(), response: new Md() });
    }
    async request(r, i) {
        try {
            return await this._request(r, i);
        } catch (o) {
            if (o instanceof Error) {
                let a = {};
                Error.captureStackTrace
                    ? Error.captureStackTrace(a)
                    : (a = new Error());
                const u = a.stack ? a.stack.replace(/^.+\n/, "") : "";
                try {
                    o.stack
                        ? u &&
                          !String(o.stack).endsWith(
                              u.replace(/^.+\n.+\n/, "")
                          ) &&
                          (o.stack +=
                              `
` + u)
                        : (o.stack = u);
                } catch {}
            }
            throw o;
        }
    }
    _request(r, i) {
        typeof r == "string" ? ((i = i || {}), (i.url = r)) : (i = r || {}),
            (i = cr(this.defaults, i));
        const { transitional: o, paramsSerializer: a, headers: u } = i;
        o !== void 0 &&
            wo.assertOptions(
                o,
                {
                    silentJSONParsing: nn.transitional(nn.boolean),
                    forcedJSONParsing: nn.transitional(nn.boolean),
                    clarifyTimeoutError: nn.transitional(nn.boolean),
                },
                !1
            ),
            a != null &&
                (b.isFunction(a)
                    ? (i.paramsSerializer = { serialize: a })
                    : wo.assertOptions(
                          a,
                          { encode: nn.function, serialize: nn.function },
                          !0
                      )),
            wo.assertOptions(
                i,
                {
                    baseUrl: nn.spelling("baseURL"),
                    withXsrfToken: nn.spelling("withXSRFToken"),
                },
                !0
            ),
            (i.method = (
                i.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase());
        let c = u && b.merge(u.common, u[i.method]);
        u &&
            b.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (j) => {
                    delete u[j];
                }
            ),
            (i.headers = Et.concat(c, u));
        const p = [];
        let g = !0;
        this.interceptors.request.forEach(function (T) {
            (typeof T.runWhen == "function" && T.runWhen(i) === !1) ||
                ((g = g && T.synchronous), p.unshift(T.fulfilled, T.rejected));
        });
        const m = [];
        this.interceptors.response.forEach(function (T) {
            m.push(T.fulfilled, T.rejected);
        });
        let y,
            x = 0,
            k;
        if (!g) {
            const j = [qd.bind(this), void 0];
            for (
                j.unshift.apply(j, p),
                    j.push.apply(j, m),
                    k = j.length,
                    y = Promise.resolve(i);
                x < k;

            )
                y = y.then(j[x++], j[x++]);
            return y;
        }
        k = p.length;
        let w = i;
        for (x = 0; x < k; ) {
            const j = p[x++],
                T = p[x++];
            try {
                w = j(w);
            } catch (R) {
                T.call(this, R);
                break;
            }
        }
        try {
            y = qd.call(this, w);
        } catch (j) {
            return Promise.reject(j);
        }
        for (x = 0, k = m.length; x < k; ) y = y.then(m[x++], m[x++]);
        return y;
    }
    getUri(r) {
        r = cr(this.defaults, r);
        const i = cp(r.baseURL, r.url);
        return lp(i, r.params, r.paramsSerializer);
    }
};
b.forEach(["delete", "get", "head", "options"], function (r) {
    ur.prototype[r] = function (i, o) {
        return this.request(
            cr(o || {}, { method: r, url: i, data: (o || {}).data })
        );
    };
});
b.forEach(["post", "put", "patch"], function (r) {
    function i(o) {
        return function (u, c, p) {
            return this.request(
                cr(p || {}, {
                    method: r,
                    headers: o ? { "Content-Type": "multipart/form-data" } : {},
                    url: u,
                    data: c,
                })
            );
        };
    }
    (ur.prototype[r] = i()), (ur.prototype[r + "Form"] = i(!0));
});
let Bx = class gp {
    constructor(r) {
        if (typeof r != "function")
            throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function (u) {
            i = u;
        });
        const o = this;
        this.promise.then((a) => {
            if (!o._listeners) return;
            let u = o._listeners.length;
            for (; u-- > 0; ) o._listeners[u](a);
            o._listeners = null;
        }),
            (this.promise.then = (a) => {
                let u;
                const c = new Promise((p) => {
                    o.subscribe(p), (u = p);
                }).then(a);
                return (
                    (c.cancel = function () {
                        o.unsubscribe(u);
                    }),
                    c
                );
            }),
            r(function (u, c, p) {
                o.reason || ((o.reason = new $r(u, c, p)), i(o.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(r) {
        if (this.reason) {
            r(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
    }
    unsubscribe(r) {
        if (!this._listeners) return;
        const i = this._listeners.indexOf(r);
        i !== -1 && this._listeners.splice(i, 1);
    }
    toAbortSignal() {
        const r = new AbortController(),
            i = (o) => {
                r.abort(o);
            };
        return (
            this.subscribe(i),
            (r.signal.unsubscribe = () => this.unsubscribe(i)),
            r.signal
        );
    }
    static source() {
        let r;
        return {
            token: new gp(function (a) {
                r = a;
            }),
            cancel: r,
        };
    }
};
function Vx(t) {
    return function (i) {
        return t.apply(null, i);
    };
}
function Hx(t) {
    return b.isObject(t) && t.isAxiosError === !0;
}
const tu = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(tu).forEach(([t, r]) => {
    tu[r] = t;
});
function yp(t) {
    const r = new ur(t),
        i = Yh(ur.prototype.request, r);
    return (
        b.extend(i, ur.prototype, r, { allOwnKeys: !0 }),
        b.extend(i, r, null, { allOwnKeys: !0 }),
        (i.create = function (a) {
            return yp(cr(t, a));
        }),
        i
    );
}
const Ve = yp(Ki);
Ve.Axios = ur;
Ve.CanceledError = $r;
Ve.CancelToken = Bx;
Ve.isCancel = ap;
Ve.VERSION = mp;
Ve.toFormData = Lo;
Ve.AxiosError = ve;
Ve.Cancel = Ve.CanceledError;
Ve.all = function (r) {
    return Promise.all(r);
};
Ve.spread = Vx;
Ve.isAxiosError = Hx;
Ve.mergeConfig = cr;
Ve.AxiosHeaders = Et;
Ve.formToJSON = (t) => sp(b.isHTMLForm(t) ? new FormData(t) : t);
Ve.getAdapter = pp.getAdapter;
Ve.HttpStatusCode = tu;
Ve.default = Ve;
const {
        Axios: IS,
        AxiosError: OS,
        CanceledError: LS,
        isCancel: zS,
        CancelToken: bS,
        VERSION: _S,
        all: DS,
        Cancel: FS,
        isAxiosError: US,
        spread: MS,
        toFormData: BS,
        AxiosHeaders: VS,
        HttpStatusCode: HS,
        formToJSON: WS,
        getAdapter: XS,
        mergeConfig: QS,
    } = Ve,
    yu =
        "patXdHwln9TEQzrBl.5e78c1b18d02d6bbf82621fa24cc97376bb347fc40f23b7c9e32895b3d730c4c",
    vu = "appKDcbRP09tSx7o5",
    Wx = "tblYgSZutSew6jOcT",
    xu = async () => {
        const t = `https://api.airtable.com/v0/${vu}/${Wx}`,
            r = { Authorization: `Bearer ${yu}` };
        try {
            return (await Ve.get(t, { headers: r })).data.records.map((o) => ({
                week: o.fields.Week,
                start: o.fields.CohortOutput1,
                end: o.fields.CohortOutput2,
                name1: o.fields.Name1,
                rich1: o.fields.RichText1,
                date1: o.fields.DateOutput1,
                watchStart1: o.fields.WatchStart1,
                watchEnd1: o.fields.WatchEnd1,
                coachStart1: o.fields.CoachStart1,
                coachEnd1: o.fields.CoachEnd1,
                name2: o.fields.Name2,
                rich2: o.fields.RichText2,
                date2: o.fields.DateOutput2,
                watchStart2: o.fields.WatchStart2,
                watchEnd2: o.fields.WatchEnd2,
                coachStart2: o.fields.CoachStart2,
                coachEnd2: o.fields.CoachEnd2,
            }));
        } catch (i) {
            return console.error("Error fetching data from Airtable", i), [];
        }
    },
    Xx = "tbl3FpA1sLlu0vGEQ",
    wu = async () => {
        const t = `https://api.airtable.com/v0/${vu}/${Xx}`,
            r = { Authorization: `Bearer ${yu}` };
        try {
            return (await Ve.get(t, { headers: r })).data.records.map((o) => ({
                week: o.fields.Week,
                start: o.fields.CohortOutput1,
                end: o.fields.CohortOutput2,
                name1: o.fields.Name1,
                rich1: o.fields.RichText1,
                date1: o.fields.DateOutput1,
                watchStart1: o.fields.WatchStart1,
                watchEnd1: o.fields.WatchEnd1,
                coachStart1: o.fields.CoachStart1,
                coachEnd1: o.fields.CoachEnd1,
                name2: o.fields.Name2,
                rich2: o.fields.RichText2,
                date2: o.fields.DateOutput2,
                watchStart2: o.fields.WatchStart2,
                watchEnd2: o.fields.WatchEnd2,
                coachStart2: o.fields.CoachStart2,
                coachEnd2: o.fields.CoachEnd2,
            }));
        } catch (i) {
            return console.error("Error fetching data from Airtable", i), [];
        }
    },
    Qx = "tblxPgptk13IWNYbl",
    Yx = async () => {
        const t = `https://api.airtable.com/v0/${vu}/${Qx}`,
            r = { Authorization: `Bearer ${yu}` };
        try {
            return (await Ve.get(t, { headers: r })).data.records.map((o) => ({
                week: o.fields.Week,
                start: o.fields.CohortOutput1,
                end: o.fields.CohortOutput2,
                topicName1: o.fields.TopicName1,
                topicName2: o.fields.TopicName2,
                name1: o.fields.Name1,
                rich1: o.fields.RichText1,
                date1: o.fields.DateOutput1,
                watchStart1: o.fields.WatchStart1,
                watchEnd1: o.fields.WatchEnd1,
                coachStart1: o.fields.CoachStart1,
                coachEnd1: o.fields.CoachEnd1,
                name2: o.fields.Name2,
                rich2: o.fields.RichText2,
                date2: o.fields.DateOutput2,
                watchStart2: o.fields.WatchStart2,
                watchEnd2: o.fields.WatchEnd2,
                coachStart2: o.fields.CoachStart2,
                coachEnd2: o.fields.CoachEnd2,
            }));
        } catch (i) {
            return console.error("Error fetching data from Airtable", i), [];
        }
    },
    ut = (t, r = !0, i = null) => {
        if (!t) return "N/A";
        const o = new Date(t);
        if (isNaN(o.getTime())) return "Invalid date";
        const a =
            i || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
        let u = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: !0,
            timeZone: a,
            timeZoneName: r ? "short" : void 0,
        }).format(o);
        return (
            (u = u.replace(/ (\wM)/, (c) => c.toLowerCase().trim())),
            (u = u.replace(/(:00)/, "")),
            u
        );
    },
    qx = [
        "UTC",
        "Atlantic/Azores",
        "Atlantic/South_Georgia",
        "America/Buenos_Aires",
        "America/St_Johns",
        "America/Caracas",
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "America/Anchorage",
        "Pacific/Honolulu",
        "Pacific/Midway",
        "Pacific/Kiritimati",
        "Pacific/Apia",
        "Pacific/Chatham",
        "Pacific/Auckland",
        "Pacific/Fiji",
        "Pacific/Noumea",
        "Australia/Sydney",
        "Australia/Darwin",
        "Asia/Tokyo",
        "Asia/Seoul",
        "Asia/Shanghai",
        "Asia/Taipei",
        "Asia/Bangkok",
        "Asia/Yangon",
        "Asia/Dhaka",
        "Asia/Kathmandu",
        "Asia/Karachi",
        "Asia/Kolkata",
        "Asia/Kabul",
        "Asia/Dubai",
        "Asia/Yerevan",
        "Asia/Tehran",
        "Africa/Nairobi",
        "Europe/Moscow",
        "Europe/Istanbul",
        "Africa/Johannesburg",
        "Africa/Cairo",
        "Europe/Athens",
        "Europe/Berlin",
        "Europe/Paris",
        "Europe/London",
    ],
    Jx = (t) => {
        const r = new Date(),
            o = new Intl.DateTimeFormat("en-US", {
                timeZone: t,
                timeZoneName: "short",
            })
                .formatToParts(r)
                .find((a) => a.type === "timeZoneName");
        return o ? o.value : "";
    },
    vp = (t, r) =>
        h.jsx("select", {
            value: t,
            onChange: (i) => r(i.target.value),
            children: qx.map((i) => {
                const o = Jx(i);
                return h.jsx(
                    "option",
                    { value: i, children: `${i} (${o})` },
                    i
                );
            }),
        });
function Xr() {
    var a, u, c, p;
    const [t, r] = W.useState([]),
        [i, o] = W.useState([]);
    return (
        W.useEffect(() => {
            (async () => {
                const m = await wu(),
                    y = await xu(),
                    x = m.sort((w, j) => w.week - j.week),
                    k = y.sort((w, j) => w.week - j.week);
                r(x), o(k);
            })();
        }, []),
        h.jsxs("div", {
            className: "verticalCohortSelector",
            children: [
                h.jsx("img", {
                    src: "/images/UXresearchImg.png",
                    alt: "Advanced Strategic UX Research",
                    className: "cohortSelector-image",
                }),
                h.jsx("span", { children: "Next Cohorts:" }),
                h.jsxs("div", {
                    children: [
                        h.jsxs("div", {
                            className: "cohort-a",
                            children: [
                                h.jsxs("div", {
                                    className: "cohort-paragraphs",
                                    children: [
                                        t[0]
                                            ? h.jsx("p", {
                                                  children: h.jsxs("b", {
                                                      children: [
                                                          (a = t[0]) == null
                                                              ? void 0
                                                              : a.start,
                                                          " – ",
                                                          (u = t[3]) == null
                                                              ? void 0
                                                              : u.end,
                                                      ],
                                                  }),
                                              })
                                            : h.jsx("p", {
                                                  children: "Loading...",
                                              }),
                                        h.jsx(ct, {
                                            to: "/CohortB-schedule",
                                            children: "See Schedule",
                                        }),
                                    ],
                                }),
                                h.jsxs("button", {
                                    className: "btn-shadow",
                                    children: [
                                        " ",
                                        h.jsx(ct, {
                                            to: "/CohortB",
                                            className:
                                                "cohortSelector-button-link",
                                            children: "Join Cohort",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "cohort-a",
                            children: [
                                h.jsxs("div", {
                                    className: "cohort-paragraphs",
                                    children: [
                                        i[0]
                                            ? h.jsx("p", {
                                                  children: h.jsxs("b", {
                                                      children: [
                                                          (c = i[0]) == null
                                                              ? void 0
                                                              : c.start,
                                                          " – ",
                                                          (p = i[3]) == null
                                                              ? void 0
                                                              : p.end,
                                                      ],
                                                  }),
                                              })
                                            : h.jsx("p", {
                                                  children: "Loading...",
                                              }),
                                        h.jsx(ct, {
                                            to: "/CohortC-schedule",
                                            children: "See Schedule",
                                        }),
                                    ],
                                }),
                                h.jsxs("button", {
                                    className: "btn-shadow",
                                    children: [
                                        " ",
                                        h.jsx(ct, {
                                            to: "/CohortC",
                                            className:
                                                "cohortSelector-button-link",
                                            children: "Join Cohort",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                h.jsx("span", {
                    className: "mt-2",
                    children: "8 or more team members?",
                }),
                h.jsx("br", {}),
                h.jsx(ct, {
                    to: "/teams",
                    children: "Explore private team courses",
                }),
            ],
        })
    );
}
function $x() {
    return h.jsx("section", {
        children: h.jsx("section", {
            className: "courseSchedule",
            children: h.jsxs("div", {
                className: "courseSchedule-content-test",
                children: [
                    h.jsx("div", {
                        className: "left-scroll-content",
                        children: h.jsxs("div", {
                            className: "courseSchedule-pretext",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Strategic UX Research: Your Online Course Schedule",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Strategic UX Research sets the business’ direction, determines where to invest, and focuses the entire organization’s long-term and short-term objectives on prioritizing improved experiences.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Join our online workshop to make UX a valuable part of the organization’s strategy. During each of this course’s four weeks, you’ll cover two of the eight Strategic UX Research topics. For each topic, you’ll watch a pre-recorded lecture and join Jared in a live small-group coaching session.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "The lectures are already recorded, so you can watch them in advance or join an optional “Live Watch” session with your fellow cohort members.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "In each coaching session, you’ll work directly with Jared and your fellow cohort members to create a strategic UX Research plan and work through challenges that are specific to your current situation. You’ll hear how others are working through their challenges, and you’ll share what’s worked best for you.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "We keep the cohorts small, so you’ll have plenty of time to be coached on how you’ll implement your strategic UX Research.",
                                }),
                            ],
                        }),
                    }),
                    h.jsx("div", {
                        className: "right-scroll-content hidden",
                        children: h.jsx(Xr, {}),
                    }),
                ],
            }),
        }),
    });
}
function xp({ children: t }) {
    return h.jsx("section", {
        className: "testimonials-container",
        children: h.jsx("div", {
            className: "testimonials-content",
            children: h.jsxs("div", {
                className: "testimonials-test",
                children: [
                    h.jsx("img", {
                        src: "images/star.png",
                        alt: "star",
                        className: "testimonials-star",
                    }),
                    t,
                ],
            }),
        }),
    });
}
function Kx() {
    return h.jsx("section", {
        className: "jaredSpool",
        children: h.jsxs("div", {
            className: "jaredSpool-container",
            children: [
                h.jsxs("div", {
                    className: "",
                    children: [
                        h.jsxs("h2", {
                            children: [
                                "Led by Jared Spool, ",
                                h.jsx("br", {}),
                                " Maker of Awesomeness",
                            ],
                        }),
                        h.jsx("p", {
                            children:
                                "Everything you learn in this Intensive comes directly from Jared’s years of working across industries, discovering the best practices for organizations to deliver well-designed products and services.",
                        }),
                        h.jsx("p", {
                            children:
                                "His experience working with design leaders of organizations like IBM, NASA, GE, Fidelity Investments, SAP, GM, Exxon Mobil, and the Obama White House has taught him exactly what teams need to mount strategic, influential UX research initiatives.",
                        }),
                        h.jsx("p", {
                            children:
                                "You’ll love his stories, his ability to demonstrate every point with a simple, concrete example, and his comically adorable attempts to draw out his ideas. (You can’t fault him for trying, though.)",
                        }),
                        h.jsxs("p", {
                            children: [
                                " ",
                                "Most importantly, you’ll love how smarter you’ll feel after spending a few minutes absorbing his experience-informed wisdom. Don’t pass up this opportunity to glean everything you can from Jared.",
                            ],
                        }),
                    ],
                }),
                h.jsx("div", {
                    children: h.jsx("img", {
                        src: "/images/Jared_Spool 2.png",
                        alt: "Jared",
                        className: "jaredSpool-image",
                    }),
                }),
            ],
        }),
    });
}
function wp({ children: t }) {
    return h.jsx("section", {
        className: "container video-series",
        children: t,
    });
}
function Xn() {
    const t = new Date().getFullYear();
    return h.jsx("section", {
        className: "footer-background",
        children: h.jsx("section", {
            className: "dark-footer",
            children: h.jsx("div", {
                className: "footer-row links container-cc-footer",
                children: h.jsxs("footer", {
                    className: "footer-column",
                    children: [
                        h.jsxs("div", {
                            className:
                                "footer-row ft-mk emulated-flex-gap first-row",
                            children: [
                                h.jsx("div", {
                                    children: h.jsx("a", {
                                        href: "https://www.centercentre.com",
                                        children: h.jsx("img", {
                                            src: "https://asset.uie.com/img/logo/center_centre_white.png",
                                            className: "ft-logo white-logo",
                                            alt: "Center Centre UIE Logo",
                                        }),
                                    }),
                                }),
                                h.jsx("div", {
                                    className: "footer-row links",
                                    children: h.jsxs("p", {
                                        className: "dark-footer",
                                        children: [
                                            "791 Turnpike Street, Unit 4",
                                            h.jsx("br", {}),
                                            "North Andover, MA 01845",
                                            h.jsx("br", {}),
                                            " ",
                                            h.jsx("a", {
                                                href: "tel:19783275561",
                                                className: "phone-link",
                                                children: "+1 978-327-5561",
                                            }),
                                        ],
                                    }),
                                }),
                                h.jsx("div", {
                                    className: "footer-row footer-row links",
                                    children: h.jsx("p", {
                                        className: "dark-footer",
                                        children:
                                            "Center Centre is proud to provide the expertise you need to deliver better products and services.",
                                    }),
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "footer-row links",
                            children: [
                                h.jsxs("div", {
                                    className: "footer-column",
                                    children: [
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://centercentre.com/programs/",
                                                children:
                                                    "All Center Centre Programs",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://leaders.centercentre.com/",
                                                children:
                                                    "Leaders of Awesomeness",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://essentials.centercentre.com/",
                                                children:
                                                    "UX Strategy Essentials",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://agile.centercentre.com/",
                                                children:
                                                    "Taking Control of Agile UX",
                                            }),
                                        }),
                                    ],
                                }),
                                h.jsxs("div", {
                                    className: "footer-column",
                                    children: [
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://winstakeholders.com/",
                                                children:
                                                    "Win Stakeholders & Influence Decisions",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://articles.centercentre.com/",
                                                children:
                                                    "UX Strategy Articles",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://metrics.centercentre.com/",
                                                children:
                                                    "UX Metrics to Drive Your Organization",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://essentials.centercentre.com/your-next-ux-job",
                                                children:
                                                    "Essentials of Finding Your Next UX Job",
                                            }),
                                        }),
                                    ],
                                }),
                                h.jsxs("div", {
                                    className: "footer-column ",
                                    children: [
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://centercentre.com/jared-live/",
                                                children:
                                                    "Private Talks, Workshops, & Coaching",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://aycl.uie.com/",
                                                children: "All You Can Learn",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://research.centercentre.com/",
                                                children:
                                                    "Strategic Approaches to UX Research",
                                            }),
                                        }),
                                        h.jsx("p", {
                                            className: "dark-footer",
                                            children: h.jsx("a", {
                                                href: "https://visions.centercentre.com/",
                                                children:
                                                    "Craft + Lead A Strategic UX Vision",
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "footer-row ",
                            children: [
                                h.jsxs("div", {
                                    className: "footer-column",
                                    children: [
                                        h.jsxs("p", {
                                            className:
                                                "copyright-text first-one",
                                            children: ["© ", t, " "],
                                        }),
                                        h.jsx("p", {
                                            className: "copyright-text",
                                            children: "Center Centre Inc.",
                                        }),
                                        h.jsx("p", {
                                            className: "copyright-text",
                                            children: "All rights reserved.",
                                        }),
                                    ],
                                }),
                                h.jsx("div", {
                                    className: "footer-column",
                                    children: h.jsxs("p", {
                                        children: [
                                            "Questions or comments?",
                                            " ",
                                            h.jsx("a", {
                                                href: "https://centercentre.com/contact",
                                                children: "Contact Us",
                                            }),
                                            ".",
                                        ],
                                    }),
                                }),
                                h.jsx("div", {
                                    className: "footer-column",
                                    children: h.jsx("p", {
                                        children: h.jsx("a", {
                                            href: "https://centercentre.com/privacy-notice/",
                                            children: "Privacy Notice",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
function dt({ children: t }) {
    return h.jsx("section", {
        className: "container inner-column",
        children: t,
    });
}
function Gx({ src: t, text: r, price: i, buttonText: o }) {
    return h.jsxs("div", {
        className: "purchase-box",
        children: [
            h.jsx("img", { src: t, alt: "computer" }),
            h.jsx("p", {
                className: "purchase-box-text",
                children: h.jsx("b", { children: r }),
            }),
            h.jsx("p", {
                className: "purchase-box-price",
                children: h.jsx("b", { children: i }),
            }),
            h.jsx("button", {
                className: "btn-shadow btn purchase-box-button",
                children: h.jsx("a", {
                    className: "purchase-box-button-white",
                    href: "https://essentials.centercentre.com/research",
                    children: o,
                }),
            }),
        ],
    });
}
function Gi() {
    var c, p, g, m;
    const [t, r] = W.useState(window.innerWidth < 768),
        [i, o] = W.useState([]),
        [a, u] = W.useState([]);
    return (
        W.useEffect(() => {
            const y = () => {
                r(window.innerWidth < 768);
            };
            return (
                window.addEventListener("resize", y),
                () => window.removeEventListener("resize", y)
            );
        }, []),
        W.useEffect(() => {
            (async () => {
                const x = await wu(),
                    k = await xu(),
                    w = x.sort((T, R) => T.week - R.week),
                    j = k.sort((T, R) => T.week - R.week);
                o(w), u(j), console.log(x), console.log(k);
            })();
        }, []),
        h.jsx("div", {
            className: "horizontalCohortSelector",
            children: h.jsxs("div", {
                className: "horizontalCohortSelector-container",
                children: [
                    h.jsx("span", {
                        children: h.jsxs("b", {
                            children: [
                                t
                                    ? "Next Cohorts"
                                    : "Check Out Our Upcoming Cohorts",
                                ":",
                            ],
                        }),
                    }),
                    h.jsxs("div", {
                        className: "cohort-1-container",
                        children: [
                            h.jsxs("div", {
                                className: "horizontal-cohort-1",
                                children: [
                                    h.jsxs("div", {
                                        className:
                                            "horizontal-cohort-paragraphs",
                                        children: [
                                            i[0]
                                                ? h.jsx("p", {
                                                      children: h.jsxs("b", {
                                                          children: [
                                                              (c = i[0]) == null
                                                                  ? void 0
                                                                  : c.start,
                                                              " – ",
                                                              (p = i[3]) == null
                                                                  ? void 0
                                                                  : p.end,
                                                          ],
                                                      }),
                                                  })
                                                : h.jsx("p", {
                                                      children: "Loading...",
                                                  }),
                                            h.jsx(ct, {
                                                to: "/CohortB-schedule",
                                                children: "See Schedule",
                                            }),
                                        ],
                                    }),
                                    h.jsx("button", {
                                        className: "btn-shadow",
                                        children: h.jsx(ct, {
                                            to: "/CohortB",
                                            className:
                                                "cohortSelector-button-link",
                                            children: "Join Cohort",
                                        }),
                                    }),
                                ],
                            }),
                            h.jsxs("div", {
                                className: "horizontal-cohort-1",
                                children: [
                                    h.jsxs("div", {
                                        className:
                                            "horizontal-cohort-paragraphs",
                                        children: [
                                            a[0]
                                                ? h.jsx("p", {
                                                      children: h.jsxs("b", {
                                                          children: [
                                                              (g = a[0]) == null
                                                                  ? void 0
                                                                  : g.start,
                                                              " – ",
                                                              (m = a[3]) == null
                                                                  ? void 0
                                                                  : m.end,
                                                          ],
                                                      }),
                                                  })
                                                : h.jsx("p", {
                                                      children: "Loading...",
                                                  }),
                                            h.jsx(ct, {
                                                to: "/CohortC-schedule",
                                                children: "See Schedule",
                                            }),
                                        ],
                                    }),
                                    h.jsx("button", {
                                        className: "btn-shadow",
                                        children: h.jsx(ct, {
                                            to: "/CohortC",
                                            className:
                                                "cohortSelector-button-link",
                                            children: "Join Cohort",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Qn() {
    const [t, r] = W.useState(!1),
        i = () => {
            r(!t);
        };
    return h.jsx("section", {
        className: "header",
        children: h.jsx("div", {
            className: "new-nav-test",
            children: h.jsxs("nav", {
                className: "header-nav",
                children: [
                    h.jsx("a", {
                        href: "https://www.centercentre.com",
                        children: h.jsx("img", {
                            className: "header-logo",
                            src: "/images/Center_Centre_Logo.png",
                            alt: "center centre logo",
                        }),
                    }),
                    h.jsx("div", {
                        className: "hamburger",
                        onClick: i,
                        children: h.jsx("img", {
                            src: "/images/Menu.png",
                            alt: "Menu",
                            className: "hamburger-image",
                        }),
                    }),
                    h.jsxs("div", {
                        className: `header-links ${t ? "open" : ""}`,
                        children: [
                            h.jsx(ct, { to: "/", children: "Home" }),
                            h.jsx(ct, {
                                to: "/topics",
                                children: "Course Topics",
                            }),
                            h.jsx(ct, {
                                to: "/research",
                                children: "Why UX Research?",
                            }),
                            h.jsx(ct, {
                                to: "/teams",
                                children: "Team Pricing",
                            }),
                            h.jsx(ct, {
                                to: "/CohortB",
                                children: "Join Next Cohort",
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function Zx() {
    return h.jsx("section", {
        className: "HomeContent",
        children: h.jsxs("div", {
            className: "HomeContent-content",
            children: [
                h.jsx("div", {
                    className: "left-scroll-content",
                    children: h.jsxs("div", {
                        className: "article-content",
                        children: [
                            h.jsx("h2", {
                                children:
                                    "Strategic UX Research is the Next Big Thing.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Get ready to connect your organization’s long-term direction and strategy directly to your customers’ and users’ deepest needs.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Awaken your top executives to the value that great user experiences bring to your organization and the people you serve.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Give your senior stakeholders and executives a detailed, shared understanding of your customers’ and users’ experiences. They’ll use your Strategic UX Research to set the business’ direction, determine where to invest, and focus the entire organization’s long-term and short-term objectives on prioritizing improved experiences.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Your new Strategic UX Research efforts will change the relationships your senior executives and stakeholders will have with everyone who will benefit from your products and services. It’s a profound transformation that restructures how your organization makes essential decisions.",
                            }),
                            h.jsx("h3", {
                                children:
                                    "How Strategic UX Research is different from what’s practiced today.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Most teams today practice Tactical UX Research. Their work rarely affects more than a specific feature or product.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Their research results only describe immediate recommendations or changes that will improve the product slightly.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Tactical UX Research rarely improves our understanding of users or what they need in the long term. This understanding never reaches the organization’s upper levels. The most critical decisions, like budgets, staffing, and priorities, don’t consider the users’ experiences. Yet these decisions affect whether the team will have what it needs to deliver a great user experience.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Conversely, Strategic UX Research is about attaining a deeper understanding of all the different users and their individual experiences. Everyone, including the executive team, learns more about what makes an excellent experience for users, employees, and customers and how to improve their current experiences.",
                            }),
                            h.jsx("p", {
                                children:
                                    "These experiences go beyond using the organization’s products or services. They include what happens before, during, and after someone has interacted with the product. Strategic UX Research uncovers the entirety of people's experiences.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Research teams orchestrate deep-hanging-out sessions with customers and users. They collect observations and insights that show what a day in the life of users could be like. They combine different experiences with the product or service across the user’s lifetime and connect this all together to show a detailed journey.",
                            }),
                            h.jsx("h3", {
                                children:
                                    "Discover the basic principles of Strategic UX Research:",
                            }),
                            h.jsxs("ul", {
                                children: [
                                    h.jsx("li", {
                                        children:
                                            "Build deep expertise about users and their needs.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "Focus the organization on improving the daily lives of customers, users, and employees.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "Combine UX and CX practices to collect knowledge from every touch point.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "Study holistic experiences instead of small slices of a product’s features.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "Feed the research results into every outcome and decision.",
                                    }),
                                ],
                            }),
                            h.jsx("p", {
                                children:
                                    "Strategic UX research transforms your organization into an industry leader who delivers, hands down, the most innovative experiences.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Your senior executives will champion even more research because they now see how the entire organization treasures it. They'll no longer stop your UX research efforts from being undervalued and the first to be cut.",
                            }),
                            h.jsx("p", {
                                children: h.jsx("strong", {
                                    children:
                                        "Shape the way your organization makes strategic decisions. Deliver better-designed products and services. Our Advanced Strategic UX Research essentials will guide you every step of the way.",
                                }),
                            }),
                        ],
                    }),
                }),
                h.jsx("div", {
                    className: "right-scroll-content",
                    children: h.jsx(Xr, {}),
                }),
            ],
        }),
    });
}
function ew(t, r) {
    const i = {};
    return (t[t.length - 1] === "" ? [...t, ""] : t)
        .join((i.padRight ? " " : "") + "," + (i.padLeft === !1 ? "" : " "))
        .trim();
}
const tw = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    nw = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    rw = {};
function $d(t, r) {
    return (rw.jsx ? nw : tw).test(t);
}
const iw = /[ \t\n\f\r]/g;
function lw(t) {
    return typeof t == "object"
        ? t.type === "text"
            ? Kd(t.value)
            : !1
        : Kd(t);
}
function Kd(t) {
    return t.replace(iw, "") === "";
}
class Zi {
    constructor(r, i, o) {
        (this.property = r), (this.normal = i), o && (this.space = o);
    }
}
Zi.prototype.property = {};
Zi.prototype.normal = {};
Zi.prototype.space = null;
function kp(t, r) {
    const i = {},
        o = {};
    let a = -1;
    for (; ++a < t.length; )
        Object.assign(i, t[a].property), Object.assign(o, t[a].normal);
    return new Zi(i, o, r);
}
function nu(t) {
    return t.toLowerCase();
}
class Bt {
    constructor(r, i) {
        (this.property = r), (this.attribute = i);
    }
}
Bt.prototype.space = null;
Bt.prototype.boolean = !1;
Bt.prototype.booleanish = !1;
Bt.prototype.overloadedBoolean = !1;
Bt.prototype.number = !1;
Bt.prototype.commaSeparated = !1;
Bt.prototype.spaceSeparated = !1;
Bt.prototype.commaOrSpaceSeparated = !1;
Bt.prototype.mustUseProperty = !1;
Bt.prototype.defined = !1;
let ow = 0;
const ye = hr(),
    qe = hr(),
    Sp = hr(),
    X = hr(),
    be = hr(),
    Hr = hr(),
    Pt = hr();
function hr() {
    return 2 ** ++ow;
}
const ru = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                boolean: ye,
                booleanish: qe,
                commaOrSpaceSeparated: Pt,
                commaSeparated: Hr,
                number: X,
                overloadedBoolean: Sp,
                spaceSeparated: be,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    za = Object.keys(ru);
class ku extends Bt {
    constructor(r, i, o, a) {
        let u = -1;
        if ((super(r, i), Gd(this, "space", a), typeof o == "number"))
            for (; ++u < za.length; ) {
                const c = za[u];
                Gd(this, za[u], (o & ru[c]) === ru[c]);
            }
    }
}
ku.prototype.defined = !0;
function Gd(t, r, i) {
    i && (t[r] = i);
}
const sw = {}.hasOwnProperty;
function Kr(t) {
    const r = {},
        i = {};
    let o;
    for (o in t.properties)
        if (sw.call(t.properties, o)) {
            const a = t.properties[o],
                u = new ku(o, t.transform(t.attributes || {}, o), a, t.space);
            t.mustUseProperty &&
                t.mustUseProperty.includes(o) &&
                (u.mustUseProperty = !0),
                (r[o] = u),
                (i[nu(o)] = o),
                (i[nu(u.attribute)] = o);
        }
    return new Zi(r, i, t.space);
}
const Ep = Kr({
        space: "xlink",
        transform(t, r) {
            return "xlink:" + r.slice(5).toLowerCase();
        },
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
        },
    }),
    Cp = Kr({
        space: "xml",
        transform(t, r) {
            return "xml:" + r.slice(3).toLowerCase();
        },
        properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
    });
function jp(t, r) {
    return r in t ? t[r] : r;
}
function Ap(t, r) {
    return jp(t, r.toLowerCase());
}
const Tp = Kr({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: Ap,
        properties: { xmlns: null, xmlnsXLink: null },
    }),
    Np = Kr({
        transform(t, r) {
            return r === "role" ? r : "aria-" + r.slice(4).toLowerCase();
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: qe,
            ariaAutoComplete: null,
            ariaBusy: qe,
            ariaChecked: qe,
            ariaColCount: X,
            ariaColIndex: X,
            ariaColSpan: X,
            ariaControls: be,
            ariaCurrent: null,
            ariaDescribedBy: be,
            ariaDetails: null,
            ariaDisabled: qe,
            ariaDropEffect: be,
            ariaErrorMessage: null,
            ariaExpanded: qe,
            ariaFlowTo: be,
            ariaGrabbed: qe,
            ariaHasPopup: null,
            ariaHidden: qe,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: be,
            ariaLevel: X,
            ariaLive: null,
            ariaModal: qe,
            ariaMultiLine: qe,
            ariaMultiSelectable: qe,
            ariaOrientation: null,
            ariaOwns: be,
            ariaPlaceholder: null,
            ariaPosInSet: X,
            ariaPressed: qe,
            ariaReadOnly: qe,
            ariaRelevant: null,
            ariaRequired: qe,
            ariaRoleDescription: be,
            ariaRowCount: X,
            ariaRowIndex: X,
            ariaRowSpan: X,
            ariaSelected: qe,
            ariaSetSize: X,
            ariaSort: null,
            ariaValueMax: X,
            ariaValueMin: X,
            ariaValueNow: X,
            ariaValueText: null,
            role: null,
        },
    }),
    aw = Kr({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
        },
        transform: Ap,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: Hr,
            acceptCharset: be,
            accessKey: be,
            action: null,
            allow: null,
            allowFullScreen: ye,
            allowPaymentRequest: ye,
            allowUserMedia: ye,
            alt: null,
            as: null,
            async: ye,
            autoCapitalize: null,
            autoComplete: be,
            autoFocus: ye,
            autoPlay: ye,
            blocking: be,
            capture: null,
            charSet: null,
            checked: ye,
            cite: null,
            className: be,
            cols: X,
            colSpan: null,
            content: null,
            contentEditable: qe,
            controls: ye,
            controlsList: be,
            coords: X | Hr,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: ye,
            defer: ye,
            dir: null,
            dirName: null,
            disabled: ye,
            download: Sp,
            draggable: qe,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: ye,
            formTarget: null,
            headers: be,
            height: X,
            hidden: ye,
            high: X,
            href: null,
            hrefLang: null,
            htmlFor: be,
            httpEquiv: be,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: ye,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: ye,
            itemId: null,
            itemProp: be,
            itemRef: be,
            itemScope: ye,
            itemType: be,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: ye,
            low: X,
            manifest: null,
            max: null,
            maxLength: X,
            media: null,
            method: null,
            min: null,
            minLength: X,
            multiple: ye,
            muted: ye,
            name: null,
            nonce: null,
            noModule: ye,
            noValidate: ye,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: ye,
            optimum: X,
            pattern: null,
            ping: be,
            placeholder: null,
            playsInline: ye,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: ye,
            referrerPolicy: null,
            rel: be,
            required: ye,
            reversed: ye,
            rows: X,
            rowSpan: X,
            sandbox: be,
            scope: null,
            scoped: ye,
            seamless: ye,
            selected: ye,
            shadowRootClonable: ye,
            shadowRootDelegatesFocus: ye,
            shadowRootMode: null,
            shape: null,
            size: X,
            sizes: null,
            slot: null,
            span: X,
            spellCheck: qe,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: X,
            step: null,
            style: null,
            tabIndex: X,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: ye,
            useMap: null,
            value: qe,
            width: X,
            wrap: null,
            writingSuggestions: null,
            align: null,
            aLink: null,
            archive: be,
            axis: null,
            background: null,
            bgColor: null,
            border: X,
            borderColor: null,
            bottomMargin: X,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: ye,
            declare: ye,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: X,
            leftMargin: X,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: X,
            marginWidth: X,
            noResize: ye,
            noHref: ye,
            noShade: ye,
            noWrap: ye,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: X,
            rules: null,
            scheme: null,
            scrolling: qe,
            standby: null,
            summary: null,
            text: null,
            topMargin: X,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: X,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: ye,
            disableRemotePlayback: ye,
            prefix: null,
            property: null,
            results: X,
            security: null,
            unselectable: null,
        },
    }),
    uw = Kr({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
        },
        transform: jp,
        properties: {
            about: Pt,
            accentHeight: X,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: X,
            amplitude: X,
            arabicForm: null,
            ascent: X,
            attributeName: null,
            attributeType: null,
            azimuth: X,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: X,
            by: null,
            calcMode: null,
            capHeight: X,
            className: be,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: X,
            diffuseConstant: X,
            direction: null,
            display: null,
            dur: null,
            divisor: X,
            dominantBaseline: null,
            download: ye,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: X,
            enableBackground: null,
            end: null,
            event: null,
            exponent: X,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: X,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: Hr,
            g2: Hr,
            glyphName: Hr,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: X,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: X,
            horizOriginX: X,
            horizOriginY: X,
            id: null,
            ideographic: X,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: X,
            k: X,
            k1: X,
            k2: X,
            k3: X,
            k4: X,
            kernelMatrix: Pt,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: X,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: X,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: X,
            overlineThickness: X,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: X,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: be,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: X,
            pointsAtY: X,
            pointsAtZ: X,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Pt,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Pt,
            rev: Pt,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Pt,
            requiredFeatures: Pt,
            requiredFonts: Pt,
            requiredFormats: Pt,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: X,
            specularExponent: X,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: X,
            strikethroughThickness: X,
            string: null,
            stroke: null,
            strokeDashArray: Pt,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: X,
            strokeOpacity: X,
            strokeWidth: null,
            style: null,
            surfaceScale: X,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Pt,
            tabIndex: X,
            tableValues: null,
            target: null,
            targetX: X,
            targetY: X,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Pt,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: X,
            underlineThickness: X,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: X,
            values: null,
            vAlphabetic: X,
            vMathematical: X,
            vectorEffect: null,
            vHanging: X,
            vIdeographic: X,
            version: null,
            vertAdvY: X,
            vertOriginX: X,
            vertOriginY: X,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: X,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
        },
    }),
    cw = /^data[-\w.:]+$/i,
    Zd = /-[a-z]/g,
    fw = /[A-Z]/g;
function dw(t, r) {
    const i = nu(r);
    let o = r,
        a = Bt;
    if (i in t.normal) return t.property[t.normal[i]];
    if (i.length > 4 && i.slice(0, 4) === "data" && cw.test(r)) {
        if (r.charAt(4) === "-") {
            const u = r.slice(5).replace(Zd, pw);
            o = "data" + u.charAt(0).toUpperCase() + u.slice(1);
        } else {
            const u = r.slice(4);
            if (!Zd.test(u)) {
                let c = u.replace(fw, hw);
                c.charAt(0) !== "-" && (c = "-" + c), (r = "data" + c);
            }
        }
        a = ku;
    }
    return new a(o, r);
}
function hw(t) {
    return "-" + t.toLowerCase();
}
function pw(t) {
    return t.charAt(1).toUpperCase();
}
const mw = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
    },
    gw = kp([Cp, Ep, Tp, Np, aw], "html"),
    Su = kp([Cp, Ep, Tp, Np, uw], "svg");
function yw(t) {
    return t.join(" ").trim();
}
var Br = {},
    ba,
    eh;
function vw() {
    if (eh) return ba;
    eh = 1;
    var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        r = /\n/g,
        i = /^\s*/,
        o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        a = /^:\s*/,
        u = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        c = /^[;\s]*/,
        p = /^\s+|\s+$/g,
        g = `
`,
        m = "/",
        y = "*",
        x = "",
        k = "comment",
        w = "declaration";
    ba = function (T, R) {
        if (typeof T != "string")
            throw new TypeError("First argument must be a string");
        if (!T) return [];
        R = R || {};
        var L = 1,
            D = 1;
        function U(Z) {
            var G = Z.match(r);
            G && (L += G.length);
            var ae = Z.lastIndexOf(g);
            D = ~ae ? Z.length - ae : D + Z.length;
        }
        function J() {
            var Z = { line: L, column: D };
            return function (G) {
                return (G.position = new $(Z)), xe(), G;
            };
        }
        function $(Z) {
            (this.start = Z),
                (this.end = { line: L, column: D }),
                (this.source = R.source);
        }
        $.prototype.content = T;
        function _(Z) {
            var G = new Error(R.source + ":" + L + ":" + D + ": " + Z);
            if (
                ((G.reason = Z),
                (G.filename = R.source),
                (G.line = L),
                (G.column = D),
                (G.source = T),
                !R.silent)
            )
                throw G;
        }
        function ie(Z) {
            var G = Z.exec(T);
            if (G) {
                var ae = G[0];
                return U(ae), (T = T.slice(ae.length)), G;
            }
        }
        function xe() {
            ie(i);
        }
        function ge(Z) {
            var G;
            for (Z = Z || []; (G = Se()); ) G !== !1 && Z.push(G);
            return Z;
        }
        function Se() {
            var Z = J();
            if (!(m != T.charAt(0) || y != T.charAt(1))) {
                for (
                    var G = 2;
                    x != T.charAt(G) &&
                    (y != T.charAt(G) || m != T.charAt(G + 1));

                )
                    ++G;
                if (((G += 2), x === T.charAt(G - 1)))
                    return _("End of comment missing");
                var ae = T.slice(2, G - 2);
                return (
                    (D += 2),
                    U(ae),
                    (T = T.slice(G)),
                    (D += 2),
                    Z({ type: k, comment: ae })
                );
            }
        }
        function oe() {
            var Z = J(),
                G = ie(o);
            if (G) {
                if ((Se(), !ie(a))) return _("property missing ':'");
                var ae = ie(u),
                    Ae = Z({
                        type: w,
                        property: j(G[0].replace(t, x)),
                        value: ae ? j(ae[0].replace(t, x)) : x,
                    });
                return ie(c), Ae;
            }
        }
        function te() {
            var Z = [];
            ge(Z);
            for (var G; (G = oe()); ) G !== !1 && (Z.push(G), ge(Z));
            return Z;
        }
        return xe(), te();
    };
    function j(T) {
        return T ? T.replace(p, x) : x;
    }
    return ba;
}
var th;
function xw() {
    if (th) return Br;
    th = 1;
    var t =
        (Br && Br.__importDefault) ||
        function (o) {
            return o && o.__esModule ? o : { default: o };
        };
    Object.defineProperty(Br, "__esModule", { value: !0 }), (Br.default = i);
    var r = t(vw());
    function i(o, a) {
        var u = null;
        if (!o || typeof o != "string") return u;
        var c = (0, r.default)(o),
            p = typeof a == "function";
        return (
            c.forEach(function (g) {
                if (g.type === "declaration") {
                    var m = g.property,
                        y = g.value;
                    p ? a(m, y, g) : y && ((u = u || {}), (u[m] = y));
                }
            }),
            u
        );
    }
    return Br;
}
var ww = xw();
const nh = No(ww),
    kw = nh.default || nh,
    Rp = Pp("end"),
    Eu = Pp("start");
function Pp(t) {
    return r;
    function r(i) {
        const o = (i && i.position && i.position[t]) || {};
        if (
            typeof o.line == "number" &&
            o.line > 0 &&
            typeof o.column == "number" &&
            o.column > 0
        )
            return {
                line: o.line,
                column: o.column,
                offset:
                    typeof o.offset == "number" && o.offset > -1
                        ? o.offset
                        : void 0,
            };
    }
}
function Sw(t) {
    const r = Eu(t),
        i = Rp(t);
    if (r && i) return { start: r, end: i };
}
function Hi(t) {
    return !t || typeof t != "object"
        ? ""
        : "position" in t || "type" in t
        ? rh(t.position)
        : "start" in t || "end" in t
        ? rh(t)
        : "line" in t || "column" in t
        ? iu(t)
        : "";
}
function iu(t) {
    return ih(t && t.line) + ":" + ih(t && t.column);
}
function rh(t) {
    return iu(t && t.start) + "-" + iu(t && t.end);
}
function ih(t) {
    return t && typeof t == "number" ? t : 1;
}
class ht extends Error {
    constructor(r, i, o) {
        super(), typeof i == "string" && ((o = i), (i = void 0));
        let a = "",
            u = {},
            c = !1;
        if (
            (i &&
                ("line" in i && "column" in i
                    ? (u = { place: i })
                    : "start" in i && "end" in i
                    ? (u = { place: i })
                    : "type" in i
                    ? (u = { ancestors: [i], place: i.position })
                    : (u = { ...i })),
            typeof r == "string"
                ? (a = r)
                : !u.cause && r && ((c = !0), (a = r.message), (u.cause = r)),
            !u.ruleId && !u.source && typeof o == "string")
        ) {
            const g = o.indexOf(":");
            g === -1
                ? (u.ruleId = o)
                : ((u.source = o.slice(0, g)), (u.ruleId = o.slice(g + 1)));
        }
        if (!u.place && u.ancestors && u.ancestors) {
            const g = u.ancestors[u.ancestors.length - 1];
            g && (u.place = g.position);
        }
        const p = u.place && "start" in u.place ? u.place.start : u.place;
        (this.ancestors = u.ancestors || void 0),
            (this.cause = u.cause || void 0),
            (this.column = p ? p.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = a),
            (this.line = p ? p.line : void 0),
            (this.name = Hi(u.place) || "1:1"),
            (this.place = u.place || void 0),
            (this.reason = this.message),
            (this.ruleId = u.ruleId || void 0),
            (this.source = u.source || void 0),
            (this.stack =
                c && u.cause && typeof u.cause.stack == "string"
                    ? u.cause.stack
                    : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
    }
}
ht.prototype.file = "";
ht.prototype.name = "";
ht.prototype.reason = "";
ht.prototype.message = "";
ht.prototype.stack = "";
ht.prototype.column = void 0;
ht.prototype.line = void 0;
ht.prototype.ancestors = void 0;
ht.prototype.cause = void 0;
ht.prototype.fatal = void 0;
ht.prototype.place = void 0;
ht.prototype.ruleId = void 0;
ht.prototype.source = void 0;
const Cu = {}.hasOwnProperty,
    Ew = new Map(),
    Cw = /[A-Z]/g,
    jw = /-([a-z])/g,
    Aw = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    Tw = new Set(["td", "th"]),
    Ip = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Nw(t, r) {
    if (!r || r.Fragment === void 0)
        throw new TypeError("Expected `Fragment` in options");
    const i = r.filePath || void 0;
    let o;
    if (r.development) {
        if (typeof r.jsxDEV != "function")
            throw new TypeError(
                "Expected `jsxDEV` in options when `development: true`"
            );
        o = _w(i, r.jsxDEV);
    } else {
        if (typeof r.jsx != "function")
            throw new TypeError("Expected `jsx` in production options");
        if (typeof r.jsxs != "function")
            throw new TypeError("Expected `jsxs` in production options");
        o = bw(i, r.jsx, r.jsxs);
    }
    const a = {
            Fragment: r.Fragment,
            ancestors: [],
            components: r.components || {},
            create: o,
            elementAttributeNameCase: r.elementAttributeNameCase || "react",
            evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
            filePath: i,
            ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
            passKeys: r.passKeys !== !1,
            passNode: r.passNode || !1,
            schema: r.space === "svg" ? Su : gw,
            stylePropertyNameCase: r.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: r.tableCellAlignToStyle !== !1,
        },
        u = Op(a, t, void 0);
    return u && typeof u != "string"
        ? u
        : a.create(t, a.Fragment, { children: u || void 0 }, void 0);
}
function Op(t, r, i) {
    if (r.type === "element") return Rw(t, r, i);
    if (r.type === "mdxFlowExpression" || r.type === "mdxTextExpression")
        return Pw(t, r);
    if (r.type === "mdxJsxFlowElement" || r.type === "mdxJsxTextElement")
        return Ow(t, r, i);
    if (r.type === "mdxjsEsm") return Iw(t, r);
    if (r.type === "root") return Lw(t, r, i);
    if (r.type === "text") return zw(t, r);
}
function Rw(t, r, i) {
    const o = t.schema;
    let a = o;
    r.tagName.toLowerCase() === "svg" &&
        o.space === "html" &&
        ((a = Su), (t.schema = a)),
        t.ancestors.push(r);
    const u = zp(t, r.tagName, !1),
        c = Dw(t, r);
    let p = Au(t, r);
    return (
        Aw.has(r.tagName) &&
            (p = p.filter(function (g) {
                return typeof g == "string" ? !lw(g) : !0;
            })),
        Lp(t, c, u, r),
        ju(c, p),
        t.ancestors.pop(),
        (t.schema = o),
        t.create(r, u, c, i)
    );
}
function Pw(t, r) {
    if (r.data && r.data.estree && t.evaluater) {
        const o = r.data.estree.body[0];
        return o.type, t.evaluater.evaluateExpression(o.expression);
    }
    qi(t, r.position);
}
function Iw(t, r) {
    if (r.data && r.data.estree && t.evaluater)
        return t.evaluater.evaluateProgram(r.data.estree);
    qi(t, r.position);
}
function Ow(t, r, i) {
    const o = t.schema;
    let a = o;
    r.name === "svg" && o.space === "html" && ((a = Su), (t.schema = a)),
        t.ancestors.push(r);
    const u = r.name === null ? t.Fragment : zp(t, r.name, !0),
        c = Fw(t, r),
        p = Au(t, r);
    return (
        Lp(t, c, u, r),
        ju(c, p),
        t.ancestors.pop(),
        (t.schema = o),
        t.create(r, u, c, i)
    );
}
function Lw(t, r, i) {
    const o = {};
    return ju(o, Au(t, r)), t.create(r, t.Fragment, o, i);
}
function zw(t, r) {
    return r.value;
}
function Lp(t, r, i, o) {
    typeof i != "string" && i !== t.Fragment && t.passNode && (r.node = o);
}
function ju(t, r) {
    if (r.length > 0) {
        const i = r.length > 1 ? r : r[0];
        i && (t.children = i);
    }
}
function bw(t, r, i) {
    return o;
    function o(a, u, c, p) {
        const m = Array.isArray(c.children) ? i : r;
        return p ? m(u, c, p) : m(u, c);
    }
}
function _w(t, r) {
    return i;
    function i(o, a, u, c) {
        const p = Array.isArray(u.children),
            g = Eu(o);
        return r(
            a,
            u,
            c,
            p,
            {
                columnNumber: g ? g.column - 1 : void 0,
                fileName: t,
                lineNumber: g ? g.line : void 0,
            },
            void 0
        );
    }
}
function Dw(t, r) {
    const i = {};
    let o, a;
    for (a in r.properties)
        if (a !== "children" && Cu.call(r.properties, a)) {
            const u = Uw(t, a, r.properties[a]);
            if (u) {
                const [c, p] = u;
                t.tableCellAlignToStyle &&
                c === "align" &&
                typeof p == "string" &&
                Tw.has(r.tagName)
                    ? (o = p)
                    : (i[c] = p);
            }
        }
    if (o) {
        const u = i.style || (i.style = {});
        u[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = o;
    }
    return i;
}
function Fw(t, r) {
    const i = {};
    for (const o of r.attributes)
        if (o.type === "mdxJsxExpressionAttribute")
            if (o.data && o.data.estree && t.evaluater) {
                const u = o.data.estree.body[0];
                u.type;
                const c = u.expression;
                c.type;
                const p = c.properties[0];
                p.type,
                    Object.assign(
                        i,
                        t.evaluater.evaluateExpression(p.argument)
                    );
            } else qi(t, r.position);
        else {
            const a = o.name;
            let u;
            if (o.value && typeof o.value == "object")
                if (o.value.data && o.value.data.estree && t.evaluater) {
                    const p = o.value.data.estree.body[0];
                    p.type, (u = t.evaluater.evaluateExpression(p.expression));
                } else qi(t, r.position);
            else u = o.value === null ? !0 : o.value;
            i[a] = u;
        }
    return i;
}
function Au(t, r) {
    const i = [];
    let o = -1;
    const a = t.passKeys ? new Map() : Ew;
    for (; ++o < r.children.length; ) {
        const u = r.children[o];
        let c;
        if (t.passKeys) {
            const g =
                u.type === "element"
                    ? u.tagName
                    : u.type === "mdxJsxFlowElement" ||
                      u.type === "mdxJsxTextElement"
                    ? u.name
                    : void 0;
            if (g) {
                const m = a.get(g) || 0;
                (c = g + "-" + m), a.set(g, m + 1);
            }
        }
        const p = Op(t, u, c);
        p !== void 0 && i.push(p);
    }
    return i;
}
function Uw(t, r, i) {
    const o = dw(t.schema, r);
    if (!(i == null || (typeof i == "number" && Number.isNaN(i)))) {
        if (
            (Array.isArray(i) && (i = o.commaSeparated ? ew(i) : yw(i)),
            o.property === "style")
        ) {
            let a = typeof i == "object" ? i : Mw(t, String(i));
            return (
                t.stylePropertyNameCase === "css" && (a = Bw(a)), ["style", a]
            );
        }
        return [
            t.elementAttributeNameCase === "react" && o.space
                ? mw[o.property] || o.property
                : o.attribute,
            i,
        ];
    }
}
function Mw(t, r) {
    const i = {};
    try {
        kw(r, o);
    } catch (a) {
        if (!t.ignoreInvalidStyle) {
            const u = a,
                c = new ht("Cannot parse `style` attribute", {
                    ancestors: t.ancestors,
                    cause: u,
                    ruleId: "style",
                    source: "hast-util-to-jsx-runtime",
                });
            throw (
                ((c.file = t.filePath || void 0),
                (c.url = Ip + "#cannot-parse-style-attribute"),
                c)
            );
        }
    }
    return i;
    function o(a, u) {
        let c = a;
        c.slice(0, 2) !== "--" &&
            (c.slice(0, 4) === "-ms-" && (c = "ms-" + c.slice(4)),
            (c = c.replace(jw, Hw))),
            (i[c] = u);
    }
}
function zp(t, r, i) {
    let o;
    if (!i) o = { type: "Literal", value: r };
    else if (r.includes(".")) {
        const a = r.split(".");
        let u = -1,
            c;
        for (; ++u < a.length; ) {
            const p = $d(a[u])
                ? { type: "Identifier", name: a[u] }
                : { type: "Literal", value: a[u] };
            c = c
                ? {
                      type: "MemberExpression",
                      object: c,
                      property: p,
                      computed: !!(u && p.type === "Literal"),
                      optional: !1,
                  }
                : p;
        }
        o = c;
    } else
        o =
            $d(r) && !/^[a-z]/.test(r)
                ? { type: "Identifier", name: r }
                : { type: "Literal", value: r };
    if (o.type === "Literal") {
        const a = o.value;
        return Cu.call(t.components, a) ? t.components[a] : a;
    }
    if (t.evaluater) return t.evaluater.evaluateExpression(o);
    qi(t);
}
function qi(t, r) {
    const i = new ht("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: t.ancestors,
        place: r,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime",
    });
    throw (
        ((i.file = t.filePath || void 0),
        (i.url = Ip + "#cannot-handle-mdx-estrees-without-createevaluater"),
        i)
    );
}
function Bw(t) {
    const r = {};
    let i;
    for (i in t) Cu.call(t, i) && (r[Vw(i)] = t[i]);
    return r;
}
function Vw(t) {
    let r = t.replace(Cw, Ww);
    return r.slice(0, 3) === "ms-" && (r = "-" + r), r;
}
function Hw(t, r) {
    return r.toUpperCase();
}
function Ww(t) {
    return "-" + t.toLowerCase();
}
const _a = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: [
            "audio",
            "embed",
            "iframe",
            "img",
            "input",
            "script",
            "source",
            "track",
            "video",
        ],
    },
    Xw = {};
function Qw(t, r) {
    const i = Xw,
        o = typeof i.includeImageAlt == "boolean" ? i.includeImageAlt : !0,
        a = typeof i.includeHtml == "boolean" ? i.includeHtml : !0;
    return bp(t, o, a);
}
function bp(t, r, i) {
    if (Yw(t)) {
        if ("value" in t) return t.type === "html" && !i ? "" : t.value;
        if (r && "alt" in t && t.alt) return t.alt;
        if ("children" in t) return lh(t.children, r, i);
    }
    return Array.isArray(t) ? lh(t, r, i) : "";
}
function lh(t, r, i) {
    const o = [];
    let a = -1;
    for (; ++a < t.length; ) o[a] = bp(t[a], r, i);
    return o.join("");
}
function Yw(t) {
    return !!(t && typeof t == "object");
}
const oh = document.createElement("i");
function Tu(t) {
    const r = "&" + t + ";";
    oh.innerHTML = r;
    const i = oh.textContent;
    return (i.charCodeAt(i.length - 1) === 59 && t !== "semi") || i === r
        ? !1
        : i;
}
function on(t, r, i, o) {
    const a = t.length;
    let u = 0,
        c;
    if (
        (r < 0 ? (r = -r > a ? 0 : a + r) : (r = r > a ? a : r),
        (i = i > 0 ? i : 0),
        o.length < 1e4)
    )
        (c = Array.from(o)), c.unshift(r, i), t.splice(...c);
    else
        for (i && t.splice(r, i); u < o.length; )
            (c = o.slice(u, u + 1e4)),
                c.unshift(r, 0),
                t.splice(...c),
                (u += 1e4),
                (r += 1e4);
}
function Mt(t, r) {
    return t.length > 0 ? (on(t, t.length, 0, r), t) : r;
}
const sh = {}.hasOwnProperty;
function qw(t) {
    const r = {};
    let i = -1;
    for (; ++i < t.length; ) Jw(r, t[i]);
    return r;
}
function Jw(t, r) {
    let i;
    for (i in r) {
        const a = (sh.call(t, i) ? t[i] : void 0) || (t[i] = {}),
            u = r[i];
        let c;
        if (u)
            for (c in u) {
                sh.call(a, c) || (a[c] = []);
                const p = u[c];
                $w(a[c], Array.isArray(p) ? p : p ? [p] : []);
            }
    }
}
function $w(t, r) {
    let i = -1;
    const o = [];
    for (; ++i < r.length; ) (r[i].add === "after" ? t : o).push(r[i]);
    on(t, 0, 0, o);
}
function _p(t, r) {
    const i = Number.parseInt(t, r);
    return i < 9 ||
        i === 11 ||
        (i > 13 && i < 32) ||
        (i > 126 && i < 160) ||
        (i > 55295 && i < 57344) ||
        (i > 64975 && i < 65008) ||
        (i & 65535) === 65535 ||
        (i & 65535) === 65534 ||
        i > 1114111
        ? "�"
        : String.fromCodePoint(i);
}
function Wr(t) {
    return t
        .replace(/[\t\n\r ]+/g, " ")
        .replace(/^ | $/g, "")
        .toLowerCase()
        .toUpperCase();
}
const ln = Yn(/[A-Za-z]/),
    It = Yn(/[\dA-Za-z]/),
    Kw = Yn(/[#-'*+\--9=?A-Z^-~]/);
function lu(t) {
    return t !== null && (t < 32 || t === 127);
}
const ou = Yn(/\d/),
    Gw = Yn(/[\dA-Fa-f]/),
    Zw = Yn(/[!-/:-@[-`{-~]/);
function me(t) {
    return t !== null && t < -2;
}
function Ct(t) {
    return t !== null && (t < 0 || t === 32);
}
function Oe(t) {
    return t === -2 || t === -1 || t === 32;
}
const e1 = Yn(new RegExp("\\p{P}|\\p{S}", "u")),
    t1 = Yn(/\s/);
function Yn(t) {
    return r;
    function r(i) {
        return i !== null && i > -1 && t.test(String.fromCharCode(i));
    }
}
function Gr(t) {
    const r = [];
    let i = -1,
        o = 0,
        a = 0;
    for (; ++i < t.length; ) {
        const u = t.charCodeAt(i);
        let c = "";
        if (u === 37 && It(t.charCodeAt(i + 1)) && It(t.charCodeAt(i + 2)))
            a = 2;
        else if (u < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) ||
                (c = String.fromCharCode(u));
        else if (u > 55295 && u < 57344) {
            const p = t.charCodeAt(i + 1);
            u < 56320 && p > 56319 && p < 57344
                ? ((c = String.fromCharCode(u, p)), (a = 1))
                : (c = "�");
        } else c = String.fromCharCode(u);
        c &&
            (r.push(t.slice(o, i), encodeURIComponent(c)),
            (o = i + a + 1),
            (c = "")),
            a && ((i += a), (a = 0));
    }
    return r.join("") + t.slice(o);
}
function _e(t, r, i, o) {
    const a = o ? o - 1 : Number.POSITIVE_INFINITY;
    let u = 0;
    return c;
    function c(g) {
        return Oe(g) ? (t.enter(i), p(g)) : r(g);
    }
    function p(g) {
        return Oe(g) && u++ < a ? (t.consume(g), p) : (t.exit(i), r(g));
    }
}
const n1 = { tokenize: r1 };
function r1(t) {
    const r = t.attempt(this.parser.constructs.contentInitial, o, a);
    let i;
    return r;
    function o(p) {
        if (p === null) {
            t.consume(p);
            return;
        }
        return (
            t.enter("lineEnding"),
            t.consume(p),
            t.exit("lineEnding"),
            _e(t, r, "linePrefix")
        );
    }
    function a(p) {
        return t.enter("paragraph"), u(p);
    }
    function u(p) {
        const g = t.enter("chunkText", { contentType: "text", previous: i });
        return i && (i.next = g), (i = g), c(p);
    }
    function c(p) {
        if (p === null) {
            t.exit("chunkText"), t.exit("paragraph"), t.consume(p);
            return;
        }
        return me(p)
            ? (t.consume(p), t.exit("chunkText"), u)
            : (t.consume(p), c);
    }
}
const i1 = { tokenize: l1 },
    ah = { tokenize: o1 };
function l1(t) {
    const r = this,
        i = [];
    let o = 0,
        a,
        u,
        c;
    return p;
    function p(U) {
        if (o < i.length) {
            const J = i[o];
            return (
                (r.containerState = J[1]), t.attempt(J[0].continuation, g, m)(U)
            );
        }
        return m(U);
    }
    function g(U) {
        if ((o++, r.containerState._closeFlow)) {
            (r.containerState._closeFlow = void 0), a && D();
            const J = r.events.length;
            let $ = J,
                _;
            for (; $--; )
                if (
                    r.events[$][0] === "exit" &&
                    r.events[$][1].type === "chunkFlow"
                ) {
                    _ = r.events[$][1].end;
                    break;
                }
            L(o);
            let ie = J;
            for (; ie < r.events.length; )
                (r.events[ie][1].end = { ..._ }), ie++;
            return (
                on(r.events, $ + 1, 0, r.events.slice(J)),
                (r.events.length = ie),
                m(U)
            );
        }
        return p(U);
    }
    function m(U) {
        if (o === i.length) {
            if (!a) return k(U);
            if (a.currentConstruct && a.currentConstruct.concrete) return j(U);
            r.interrupt = !!(
                a.currentConstruct && !a._gfmTableDynamicInterruptHack
            );
        }
        return (r.containerState = {}), t.check(ah, y, x)(U);
    }
    function y(U) {
        return a && D(), L(o), k(U);
    }
    function x(U) {
        return (
            (r.parser.lazy[r.now().line] = o !== i.length),
            (c = r.now().offset),
            j(U)
        );
    }
    function k(U) {
        return (r.containerState = {}), t.attempt(ah, w, j)(U);
    }
    function w(U) {
        return o++, i.push([r.currentConstruct, r.containerState]), k(U);
    }
    function j(U) {
        if (U === null) {
            a && D(), L(0), t.consume(U);
            return;
        }
        return (
            (a = a || r.parser.flow(r.now())),
            t.enter("chunkFlow", {
                _tokenizer: a,
                contentType: "flow",
                previous: u,
            }),
            T(U)
        );
    }
    function T(U) {
        if (U === null) {
            R(t.exit("chunkFlow"), !0), L(0), t.consume(U);
            return;
        }
        return me(U)
            ? (t.consume(U),
              R(t.exit("chunkFlow")),
              (o = 0),
              (r.interrupt = void 0),
              p)
            : (t.consume(U), T);
    }
    function R(U, J) {
        const $ = r.sliceStream(U);
        if (
            (J && $.push(null),
            (U.previous = u),
            u && (u.next = U),
            (u = U),
            a.defineSkip(U.start),
            a.write($),
            r.parser.lazy[U.start.line])
        ) {
            let _ = a.events.length;
            for (; _--; )
                if (
                    a.events[_][1].start.offset < c &&
                    (!a.events[_][1].end || a.events[_][1].end.offset > c)
                )
                    return;
            const ie = r.events.length;
            let xe = ie,
                ge,
                Se;
            for (; xe--; )
                if (
                    r.events[xe][0] === "exit" &&
                    r.events[xe][1].type === "chunkFlow"
                ) {
                    if (ge) {
                        Se = r.events[xe][1].end;
                        break;
                    }
                    ge = !0;
                }
            for (L(o), _ = ie; _ < r.events.length; )
                (r.events[_][1].end = { ...Se }), _++;
            on(r.events, xe + 1, 0, r.events.slice(ie)), (r.events.length = _);
        }
    }
    function L(U) {
        let J = i.length;
        for (; J-- > U; ) {
            const $ = i[J];
            (r.containerState = $[1]), $[0].exit.call(r, t);
        }
        i.length = U;
    }
    function D() {
        a.write([null]),
            (u = void 0),
            (a = void 0),
            (r.containerState._closeFlow = void 0);
    }
}
function o1(t, r, i) {
    return _e(
        t,
        t.attempt(this.parser.constructs.document, r, i),
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented")
            ? void 0
            : 4
    );
}
function uh(t) {
    if (t === null || Ct(t) || t1(t)) return 1;
    if (e1(t)) return 2;
}
function Nu(t, r, i) {
    const o = [];
    let a = -1;
    for (; ++a < t.length; ) {
        const u = t[a].resolveAll;
        u && !o.includes(u) && ((r = u(r, i)), o.push(u));
    }
    return r;
}
const su = { name: "attention", resolveAll: s1, tokenize: a1 };
function s1(t, r) {
    let i = -1,
        o,
        a,
        u,
        c,
        p,
        g,
        m,
        y;
    for (; ++i < t.length; )
        if (
            t[i][0] === "enter" &&
            t[i][1].type === "attentionSequence" &&
            t[i][1]._close
        ) {
            for (o = i; o--; )
                if (
                    t[o][0] === "exit" &&
                    t[o][1].type === "attentionSequence" &&
                    t[o][1]._open &&
                    r.sliceSerialize(t[o][1]).charCodeAt(0) ===
                        r.sliceSerialize(t[i][1]).charCodeAt(0)
                ) {
                    if (
                        (t[o][1]._close || t[i][1]._open) &&
                        (t[i][1].end.offset - t[i][1].start.offset) % 3 &&
                        !(
                            (t[o][1].end.offset -
                                t[o][1].start.offset +
                                t[i][1].end.offset -
                                t[i][1].start.offset) %
                            3
                        )
                    )
                        continue;
                    g =
                        t[o][1].end.offset - t[o][1].start.offset > 1 &&
                        t[i][1].end.offset - t[i][1].start.offset > 1
                            ? 2
                            : 1;
                    const x = { ...t[o][1].end },
                        k = { ...t[i][1].start };
                    ch(x, -g),
                        ch(k, g),
                        (c = {
                            type: g > 1 ? "strongSequence" : "emphasisSequence",
                            start: x,
                            end: { ...t[o][1].end },
                        }),
                        (p = {
                            type: g > 1 ? "strongSequence" : "emphasisSequence",
                            start: { ...t[i][1].start },
                            end: k,
                        }),
                        (u = {
                            type: g > 1 ? "strongText" : "emphasisText",
                            start: { ...t[o][1].end },
                            end: { ...t[i][1].start },
                        }),
                        (a = {
                            type: g > 1 ? "strong" : "emphasis",
                            start: { ...c.start },
                            end: { ...p.end },
                        }),
                        (t[o][1].end = { ...c.start }),
                        (t[i][1].start = { ...p.end }),
                        (m = []),
                        t[o][1].end.offset - t[o][1].start.offset &&
                            (m = Mt(m, [
                                ["enter", t[o][1], r],
                                ["exit", t[o][1], r],
                            ])),
                        (m = Mt(m, [
                            ["enter", a, r],
                            ["enter", c, r],
                            ["exit", c, r],
                            ["enter", u, r],
                        ])),
                        (m = Mt(
                            m,
                            Nu(
                                r.parser.constructs.insideSpan.null,
                                t.slice(o + 1, i),
                                r
                            )
                        )),
                        (m = Mt(m, [
                            ["exit", u, r],
                            ["enter", p, r],
                            ["exit", p, r],
                            ["exit", a, r],
                        ])),
                        t[i][1].end.offset - t[i][1].start.offset
                            ? ((y = 2),
                              (m = Mt(m, [
                                  ["enter", t[i][1], r],
                                  ["exit", t[i][1], r],
                              ])))
                            : (y = 0),
                        on(t, o - 1, i - o + 3, m),
                        (i = o + m.length - y - 2);
                    break;
                }
        }
    for (i = -1; ++i < t.length; )
        t[i][1].type === "attentionSequence" && (t[i][1].type = "data");
    return t;
}
function a1(t, r) {
    const i = this.parser.constructs.attentionMarkers.null,
        o = this.previous,
        a = uh(o);
    let u;
    return c;
    function c(g) {
        return (u = g), t.enter("attentionSequence"), p(g);
    }
    function p(g) {
        if (g === u) return t.consume(g), p;
        const m = t.exit("attentionSequence"),
            y = uh(g),
            x = !y || (y === 2 && a) || i.includes(g),
            k = !a || (a === 2 && y) || i.includes(o);
        return (
            (m._open = !!(u === 42 ? x : x && (a || !k))),
            (m._close = !!(u === 42 ? k : k && (y || !x))),
            r(g)
        );
    }
}
function ch(t, r) {
    (t.column += r), (t.offset += r), (t._bufferIndex += r);
}
const u1 = { name: "autolink", tokenize: c1 };
function c1(t, r, i) {
    let o = 0;
    return a;
    function a(w) {
        return (
            t.enter("autolink"),
            t.enter("autolinkMarker"),
            t.consume(w),
            t.exit("autolinkMarker"),
            t.enter("autolinkProtocol"),
            u
        );
    }
    function u(w) {
        return ln(w) ? (t.consume(w), c) : w === 64 ? i(w) : m(w);
    }
    function c(w) {
        return w === 43 || w === 45 || w === 46 || It(w)
            ? ((o = 1), p(w))
            : m(w);
    }
    function p(w) {
        return w === 58
            ? (t.consume(w), (o = 0), g)
            : (w === 43 || w === 45 || w === 46 || It(w)) && o++ < 32
            ? (t.consume(w), p)
            : ((o = 0), m(w));
    }
    function g(w) {
        return w === 62
            ? (t.exit("autolinkProtocol"),
              t.enter("autolinkMarker"),
              t.consume(w),
              t.exit("autolinkMarker"),
              t.exit("autolink"),
              r)
            : w === null || w === 32 || w === 60 || lu(w)
            ? i(w)
            : (t.consume(w), g);
    }
    function m(w) {
        return w === 64 ? (t.consume(w), y) : Kw(w) ? (t.consume(w), m) : i(w);
    }
    function y(w) {
        return It(w) ? x(w) : i(w);
    }
    function x(w) {
        return w === 46
            ? (t.consume(w), (o = 0), y)
            : w === 62
            ? ((t.exit("autolinkProtocol").type = "autolinkEmail"),
              t.enter("autolinkMarker"),
              t.consume(w),
              t.exit("autolinkMarker"),
              t.exit("autolink"),
              r)
            : k(w);
    }
    function k(w) {
        if ((w === 45 || It(w)) && o++ < 63) {
            const j = w === 45 ? k : x;
            return t.consume(w), j;
        }
        return i(w);
    }
}
const _o = { partial: !0, tokenize: f1 };
function f1(t, r, i) {
    return o;
    function o(u) {
        return Oe(u) ? _e(t, a, "linePrefix")(u) : a(u);
    }
    function a(u) {
        return u === null || me(u) ? r(u) : i(u);
    }
}
const Dp = {
    continuation: { tokenize: h1 },
    exit: p1,
    name: "blockQuote",
    tokenize: d1,
};
function d1(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        if (c === 62) {
            const p = o.containerState;
            return (
                p.open ||
                    (t.enter("blockQuote", { _container: !0 }), (p.open = !0)),
                t.enter("blockQuotePrefix"),
                t.enter("blockQuoteMarker"),
                t.consume(c),
                t.exit("blockQuoteMarker"),
                u
            );
        }
        return i(c);
    }
    function u(c) {
        return Oe(c)
            ? (t.enter("blockQuotePrefixWhitespace"),
              t.consume(c),
              t.exit("blockQuotePrefixWhitespace"),
              t.exit("blockQuotePrefix"),
              r)
            : (t.exit("blockQuotePrefix"), r(c));
    }
}
function h1(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        return Oe(c)
            ? _e(
                  t,
                  u,
                  "linePrefix",
                  o.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
              )(c)
            : u(c);
    }
    function u(c) {
        return t.attempt(Dp, r, i)(c);
    }
}
function p1(t) {
    t.exit("blockQuote");
}
const Fp = { name: "characterEscape", tokenize: m1 };
function m1(t, r, i) {
    return o;
    function o(u) {
        return (
            t.enter("characterEscape"),
            t.enter("escapeMarker"),
            t.consume(u),
            t.exit("escapeMarker"),
            a
        );
    }
    function a(u) {
        return Zw(u)
            ? (t.enter("characterEscapeValue"),
              t.consume(u),
              t.exit("characterEscapeValue"),
              t.exit("characterEscape"),
              r)
            : i(u);
    }
}
const Up = { name: "characterReference", tokenize: g1 };
function g1(t, r, i) {
    const o = this;
    let a = 0,
        u,
        c;
    return p;
    function p(x) {
        return (
            t.enter("characterReference"),
            t.enter("characterReferenceMarker"),
            t.consume(x),
            t.exit("characterReferenceMarker"),
            g
        );
    }
    function g(x) {
        return x === 35
            ? (t.enter("characterReferenceMarkerNumeric"),
              t.consume(x),
              t.exit("characterReferenceMarkerNumeric"),
              m)
            : (t.enter("characterReferenceValue"), (u = 31), (c = It), y(x));
    }
    function m(x) {
        return x === 88 || x === 120
            ? (t.enter("characterReferenceMarkerHexadecimal"),
              t.consume(x),
              t.exit("characterReferenceMarkerHexadecimal"),
              t.enter("characterReferenceValue"),
              (u = 6),
              (c = Gw),
              y)
            : (t.enter("characterReferenceValue"), (u = 7), (c = ou), y(x));
    }
    function y(x) {
        if (x === 59 && a) {
            const k = t.exit("characterReferenceValue");
            return c === It && !Tu(o.sliceSerialize(k))
                ? i(x)
                : (t.enter("characterReferenceMarker"),
                  t.consume(x),
                  t.exit("characterReferenceMarker"),
                  t.exit("characterReference"),
                  r);
        }
        return c(x) && a++ < u ? (t.consume(x), y) : i(x);
    }
}
const fh = { partial: !0, tokenize: v1 },
    dh = { concrete: !0, name: "codeFenced", tokenize: y1 };
function y1(t, r, i) {
    const o = this,
        a = { partial: !0, tokenize: $ };
    let u = 0,
        c = 0,
        p;
    return g;
    function g(_) {
        return m(_);
    }
    function m(_) {
        const ie = o.events[o.events.length - 1];
        return (
            (u =
                ie && ie[1].type === "linePrefix"
                    ? ie[2].sliceSerialize(ie[1], !0).length
                    : 0),
            (p = _),
            t.enter("codeFenced"),
            t.enter("codeFencedFence"),
            t.enter("codeFencedFenceSequence"),
            y(_)
        );
    }
    function y(_) {
        return _ === p
            ? (c++, t.consume(_), y)
            : c < 3
            ? i(_)
            : (t.exit("codeFencedFenceSequence"),
              Oe(_) ? _e(t, x, "whitespace")(_) : x(_));
    }
    function x(_) {
        return _ === null || me(_)
            ? (t.exit("codeFencedFence"),
              o.interrupt ? r(_) : t.check(fh, T, J)(_))
            : (t.enter("codeFencedFenceInfo"),
              t.enter("chunkString", { contentType: "string" }),
              k(_));
    }
    function k(_) {
        return _ === null || me(_)
            ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), x(_))
            : Oe(_)
            ? (t.exit("chunkString"),
              t.exit("codeFencedFenceInfo"),
              _e(t, w, "whitespace")(_))
            : _ === 96 && _ === p
            ? i(_)
            : (t.consume(_), k);
    }
    function w(_) {
        return _ === null || me(_)
            ? x(_)
            : (t.enter("codeFencedFenceMeta"),
              t.enter("chunkString", { contentType: "string" }),
              j(_));
    }
    function j(_) {
        return _ === null || me(_)
            ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), x(_))
            : _ === 96 && _ === p
            ? i(_)
            : (t.consume(_), j);
    }
    function T(_) {
        return t.attempt(a, J, R)(_);
    }
    function R(_) {
        return t.enter("lineEnding"), t.consume(_), t.exit("lineEnding"), L;
    }
    function L(_) {
        return u > 0 && Oe(_) ? _e(t, D, "linePrefix", u + 1)(_) : D(_);
    }
    function D(_) {
        return _ === null || me(_)
            ? t.check(fh, T, J)(_)
            : (t.enter("codeFlowValue"), U(_));
    }
    function U(_) {
        return _ === null || me(_)
            ? (t.exit("codeFlowValue"), D(_))
            : (t.consume(_), U);
    }
    function J(_) {
        return t.exit("codeFenced"), r(_);
    }
    function $(_, ie, xe) {
        let ge = 0;
        return Se;
        function Se(ae) {
            return (
                _.enter("lineEnding"), _.consume(ae), _.exit("lineEnding"), oe
            );
        }
        function oe(ae) {
            return (
                _.enter("codeFencedFence"),
                Oe(ae)
                    ? _e(
                          _,
                          te,
                          "linePrefix",
                          o.parser.constructs.disable.null.includes(
                              "codeIndented"
                          )
                              ? void 0
                              : 4
                      )(ae)
                    : te(ae)
            );
        }
        function te(ae) {
            return ae === p
                ? (_.enter("codeFencedFenceSequence"), Z(ae))
                : xe(ae);
        }
        function Z(ae) {
            return ae === p
                ? (ge++, _.consume(ae), Z)
                : ge >= c
                ? (_.exit("codeFencedFenceSequence"),
                  Oe(ae) ? _e(_, G, "whitespace")(ae) : G(ae))
                : xe(ae);
        }
        function G(ae) {
            return ae === null || me(ae)
                ? (_.exit("codeFencedFence"), ie(ae))
                : xe(ae);
        }
    }
}
function v1(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        return c === null
            ? i(c)
            : (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), u);
    }
    function u(c) {
        return o.parser.lazy[o.now().line] ? i(c) : r(c);
    }
}
const Da = { name: "codeIndented", tokenize: w1 },
    x1 = { partial: !0, tokenize: k1 };
function w1(t, r, i) {
    const o = this;
    return a;
    function a(m) {
        return t.enter("codeIndented"), _e(t, u, "linePrefix", 5)(m);
    }
    function u(m) {
        const y = o.events[o.events.length - 1];
        return y &&
            y[1].type === "linePrefix" &&
            y[2].sliceSerialize(y[1], !0).length >= 4
            ? c(m)
            : i(m);
    }
    function c(m) {
        return m === null
            ? g(m)
            : me(m)
            ? t.attempt(x1, c, g)(m)
            : (t.enter("codeFlowValue"), p(m));
    }
    function p(m) {
        return m === null || me(m)
            ? (t.exit("codeFlowValue"), c(m))
            : (t.consume(m), p);
    }
    function g(m) {
        return t.exit("codeIndented"), r(m);
    }
}
function k1(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        return o.parser.lazy[o.now().line]
            ? i(c)
            : me(c)
            ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), a)
            : _e(t, u, "linePrefix", 5)(c);
    }
    function u(c) {
        const p = o.events[o.events.length - 1];
        return p &&
            p[1].type === "linePrefix" &&
            p[2].sliceSerialize(p[1], !0).length >= 4
            ? r(c)
            : me(c)
            ? a(c)
            : i(c);
    }
}
const S1 = { name: "codeText", previous: C1, resolve: E1, tokenize: j1 };
function E1(t) {
    let r = t.length - 4,
        i = 3,
        o,
        a;
    if (
        (t[i][1].type === "lineEnding" || t[i][1].type === "space") &&
        (t[r][1].type === "lineEnding" || t[r][1].type === "space")
    ) {
        for (o = i; ++o < r; )
            if (t[o][1].type === "codeTextData") {
                (t[i][1].type = "codeTextPadding"),
                    (t[r][1].type = "codeTextPadding"),
                    (i += 2),
                    (r -= 2);
                break;
            }
    }
    for (o = i - 1, r++; ++o <= r; )
        a === void 0
            ? o !== r && t[o][1].type !== "lineEnding" && (a = o)
            : (o === r || t[o][1].type === "lineEnding") &&
              ((t[a][1].type = "codeTextData"),
              o !== a + 2 &&
                  ((t[a][1].end = t[o - 1][1].end),
                  t.splice(a + 2, o - a - 2),
                  (r -= o - a - 2),
                  (o = a + 2)),
              (a = void 0));
    return t;
}
function C1(t) {
    return (
        t !== 96 ||
        this.events[this.events.length - 1][1].type === "characterEscape"
    );
}
function j1(t, r, i) {
    let o = 0,
        a,
        u;
    return c;
    function c(x) {
        return t.enter("codeText"), t.enter("codeTextSequence"), p(x);
    }
    function p(x) {
        return x === 96
            ? (t.consume(x), o++, p)
            : (t.exit("codeTextSequence"), g(x));
    }
    function g(x) {
        return x === null
            ? i(x)
            : x === 32
            ? (t.enter("space"), t.consume(x), t.exit("space"), g)
            : x === 96
            ? ((u = t.enter("codeTextSequence")), (a = 0), y(x))
            : me(x)
            ? (t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), g)
            : (t.enter("codeTextData"), m(x));
    }
    function m(x) {
        return x === null || x === 32 || x === 96 || me(x)
            ? (t.exit("codeTextData"), g(x))
            : (t.consume(x), m);
    }
    function y(x) {
        return x === 96
            ? (t.consume(x), a++, y)
            : a === o
            ? (t.exit("codeTextSequence"), t.exit("codeText"), r(x))
            : ((u.type = "codeTextData"), m(x));
    }
}
class A1 {
    constructor(r) {
        (this.left = r ? [...r] : []), (this.right = []);
    }
    get(r) {
        if (r < 0 || r >= this.left.length + this.right.length)
            throw new RangeError(
                "Cannot access index `" +
                    r +
                    "` in a splice buffer of size `" +
                    (this.left.length + this.right.length) +
                    "`"
            );
        return r < this.left.length
            ? this.left[r]
            : this.right[this.right.length - r + this.left.length - 1];
    }
    get length() {
        return this.left.length + this.right.length;
    }
    shift() {
        return this.setCursor(0), this.right.pop();
    }
    slice(r, i) {
        const o = i ?? Number.POSITIVE_INFINITY;
        return o < this.left.length
            ? this.left.slice(r, o)
            : r > this.left.length
            ? this.right
                  .slice(
                      this.right.length - o + this.left.length,
                      this.right.length - r + this.left.length
                  )
                  .reverse()
            : this.left
                  .slice(r)
                  .concat(
                      this.right
                          .slice(this.right.length - o + this.left.length)
                          .reverse()
                  );
    }
    splice(r, i, o) {
        const a = i || 0;
        this.setCursor(Math.trunc(r));
        const u = this.right.splice(
            this.right.length - a,
            Number.POSITIVE_INFINITY
        );
        return o && Bi(this.left, o), u.reverse();
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(r) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r);
    }
    pushMany(r) {
        this.setCursor(Number.POSITIVE_INFINITY), Bi(this.left, r);
    }
    unshift(r) {
        this.setCursor(0), this.right.push(r);
    }
    unshiftMany(r) {
        this.setCursor(0), Bi(this.right, r.reverse());
    }
    setCursor(r) {
        if (
            !(
                r === this.left.length ||
                (r > this.left.length && this.right.length === 0) ||
                (r < 0 && this.left.length === 0)
            )
        )
            if (r < this.left.length) {
                const i = this.left.splice(r, Number.POSITIVE_INFINITY);
                Bi(this.right, i.reverse());
            } else {
                const i = this.right.splice(
                    this.left.length + this.right.length - r,
                    Number.POSITIVE_INFINITY
                );
                Bi(this.left, i.reverse());
            }
    }
}
function Bi(t, r) {
    let i = 0;
    if (r.length < 1e4) t.push(...r);
    else for (; i < r.length; ) t.push(...r.slice(i, i + 1e4)), (i += 1e4);
}
function Mp(t) {
    const r = {};
    let i = -1,
        o,
        a,
        u,
        c,
        p,
        g,
        m;
    const y = new A1(t);
    for (; ++i < y.length; ) {
        for (; i in r; ) i = r[i];
        if (
            ((o = y.get(i)),
            i &&
                o[1].type === "chunkFlow" &&
                y.get(i - 1)[1].type === "listItemPrefix" &&
                ((g = o[1]._tokenizer.events),
                (u = 0),
                u < g.length && g[u][1].type === "lineEndingBlank" && (u += 2),
                u < g.length && g[u][1].type === "content"))
        )
            for (; ++u < g.length && g[u][1].type !== "content"; )
                g[u][1].type === "chunkText" &&
                    ((g[u][1]._isInFirstContentOfListItem = !0), u++);
        if (o[0] === "enter")
            o[1].contentType &&
                (Object.assign(r, T1(y, i)), (i = r[i]), (m = !0));
        else if (o[1]._container) {
            for (
                u = i, a = void 0;
                u-- &&
                ((c = y.get(u)),
                c[1].type === "lineEnding" || c[1].type === "lineEndingBlank");

            )
                c[0] === "enter" &&
                    (a && (y.get(a)[1].type = "lineEndingBlank"),
                    (c[1].type = "lineEnding"),
                    (a = u));
            a &&
                ((o[1].end = { ...y.get(a)[1].start }),
                (p = y.slice(a, i)),
                p.unshift(o),
                y.splice(a, i - a + 1, p));
        }
    }
    return on(t, 0, Number.POSITIVE_INFINITY, y.slice(0)), !m;
}
function T1(t, r) {
    const i = t.get(r)[1],
        o = t.get(r)[2];
    let a = r - 1;
    const u = [],
        c = i._tokenizer || o.parser[i.contentType](i.start),
        p = c.events,
        g = [],
        m = {};
    let y,
        x,
        k = -1,
        w = i,
        j = 0,
        T = 0;
    const R = [T];
    for (; w; ) {
        for (; t.get(++a)[1] !== w; );
        u.push(a),
            w._tokenizer ||
                ((y = o.sliceStream(w)),
                w.next || y.push(null),
                x && c.defineSkip(w.start),
                w._isInFirstContentOfListItem &&
                    (c._gfmTasklistFirstContentOfListItem = !0),
                c.write(y),
                w._isInFirstContentOfListItem &&
                    (c._gfmTasklistFirstContentOfListItem = void 0)),
            (x = w),
            (w = w.next);
    }
    for (w = i; ++k < p.length; )
        p[k][0] === "exit" &&
            p[k - 1][0] === "enter" &&
            p[k][1].type === p[k - 1][1].type &&
            p[k][1].start.line !== p[k][1].end.line &&
            ((T = k + 1),
            R.push(T),
            (w._tokenizer = void 0),
            (w.previous = void 0),
            (w = w.next));
    for (
        c.events = [],
            w ? ((w._tokenizer = void 0), (w.previous = void 0)) : R.pop(),
            k = R.length;
        k--;

    ) {
        const L = p.slice(R[k], R[k + 1]),
            D = u.pop();
        g.push([D, D + L.length - 1]), t.splice(D, 2, L);
    }
    for (g.reverse(), k = -1; ++k < g.length; )
        (m[j + g[k][0]] = j + g[k][1]), (j += g[k][1] - g[k][0] - 1);
    return m;
}
const N1 = { resolve: P1, tokenize: I1 },
    R1 = { partial: !0, tokenize: O1 };
function P1(t) {
    return Mp(t), t;
}
function I1(t, r) {
    let i;
    return o;
    function o(p) {
        return (
            t.enter("content"),
            (i = t.enter("chunkContent", { contentType: "content" })),
            a(p)
        );
    }
    function a(p) {
        return p === null
            ? u(p)
            : me(p)
            ? t.check(R1, c, u)(p)
            : (t.consume(p), a);
    }
    function u(p) {
        return t.exit("chunkContent"), t.exit("content"), r(p);
    }
    function c(p) {
        return (
            t.consume(p),
            t.exit("chunkContent"),
            (i.next = t.enter("chunkContent", {
                contentType: "content",
                previous: i,
            })),
            (i = i.next),
            a
        );
    }
}
function O1(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        return (
            t.exit("chunkContent"),
            t.enter("lineEnding"),
            t.consume(c),
            t.exit("lineEnding"),
            _e(t, u, "linePrefix")
        );
    }
    function u(c) {
        if (c === null || me(c)) return i(c);
        const p = o.events[o.events.length - 1];
        return !o.parser.constructs.disable.null.includes("codeIndented") &&
            p &&
            p[1].type === "linePrefix" &&
            p[2].sliceSerialize(p[1], !0).length >= 4
            ? r(c)
            : t.interrupt(o.parser.constructs.flow, i, r)(c);
    }
}
function Bp(t, r, i, o, a, u, c, p, g) {
    const m = g || Number.POSITIVE_INFINITY;
    let y = 0;
    return x;
    function x(L) {
        return L === 60
            ? (t.enter(o), t.enter(a), t.enter(u), t.consume(L), t.exit(u), k)
            : L === null || L === 32 || L === 41 || lu(L)
            ? i(L)
            : (t.enter(o),
              t.enter(c),
              t.enter(p),
              t.enter("chunkString", { contentType: "string" }),
              T(L));
    }
    function k(L) {
        return L === 62
            ? (t.enter(u), t.consume(L), t.exit(u), t.exit(a), t.exit(o), r)
            : (t.enter(p),
              t.enter("chunkString", { contentType: "string" }),
              w(L));
    }
    function w(L) {
        return L === 62
            ? (t.exit("chunkString"), t.exit(p), k(L))
            : L === null || L === 60 || me(L)
            ? i(L)
            : (t.consume(L), L === 92 ? j : w);
    }
    function j(L) {
        return L === 60 || L === 62 || L === 92 ? (t.consume(L), w) : w(L);
    }
    function T(L) {
        return !y && (L === null || L === 41 || Ct(L))
            ? (t.exit("chunkString"), t.exit(p), t.exit(c), t.exit(o), r(L))
            : y < m && L === 40
            ? (t.consume(L), y++, T)
            : L === 41
            ? (t.consume(L), y--, T)
            : L === null || L === 32 || L === 40 || lu(L)
            ? i(L)
            : (t.consume(L), L === 92 ? R : T);
    }
    function R(L) {
        return L === 40 || L === 41 || L === 92 ? (t.consume(L), T) : T(L);
    }
}
function Vp(t, r, i, o, a, u) {
    const c = this;
    let p = 0,
        g;
    return m;
    function m(w) {
        return t.enter(o), t.enter(a), t.consume(w), t.exit(a), t.enter(u), y;
    }
    function y(w) {
        return p > 999 ||
            w === null ||
            w === 91 ||
            (w === 93 && !g) ||
            (w === 94 && !p && "_hiddenFootnoteSupport" in c.parser.constructs)
            ? i(w)
            : w === 93
            ? (t.exit(u), t.enter(a), t.consume(w), t.exit(a), t.exit(o), r)
            : me(w)
            ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), y)
            : (t.enter("chunkString", { contentType: "string" }), x(w));
    }
    function x(w) {
        return w === null || w === 91 || w === 93 || me(w) || p++ > 999
            ? (t.exit("chunkString"), y(w))
            : (t.consume(w), g || (g = !Oe(w)), w === 92 ? k : x);
    }
    function k(w) {
        return w === 91 || w === 92 || w === 93 ? (t.consume(w), p++, x) : x(w);
    }
}
function Hp(t, r, i, o, a, u) {
    let c;
    return p;
    function p(k) {
        return k === 34 || k === 39 || k === 40
            ? (t.enter(o),
              t.enter(a),
              t.consume(k),
              t.exit(a),
              (c = k === 40 ? 41 : k),
              g)
            : i(k);
    }
    function g(k) {
        return k === c
            ? (t.enter(a), t.consume(k), t.exit(a), t.exit(o), r)
            : (t.enter(u), m(k));
    }
    function m(k) {
        return k === c
            ? (t.exit(u), g(c))
            : k === null
            ? i(k)
            : me(k)
            ? (t.enter("lineEnding"),
              t.consume(k),
              t.exit("lineEnding"),
              _e(t, m, "linePrefix"))
            : (t.enter("chunkString", { contentType: "string" }), y(k));
    }
    function y(k) {
        return k === c || k === null || me(k)
            ? (t.exit("chunkString"), m(k))
            : (t.consume(k), k === 92 ? x : y);
    }
    function x(k) {
        return k === c || k === 92 ? (t.consume(k), y) : y(k);
    }
}
function Wi(t, r) {
    let i;
    return o;
    function o(a) {
        return me(a)
            ? (t.enter("lineEnding"),
              t.consume(a),
              t.exit("lineEnding"),
              (i = !0),
              o)
            : Oe(a)
            ? _e(t, o, i ? "linePrefix" : "lineSuffix")(a)
            : r(a);
    }
}
const L1 = { name: "definition", tokenize: b1 },
    z1 = { partial: !0, tokenize: _1 };
function b1(t, r, i) {
    const o = this;
    let a;
    return u;
    function u(w) {
        return t.enter("definition"), c(w);
    }
    function c(w) {
        return Vp.call(
            o,
            t,
            p,
            i,
            "definitionLabel",
            "definitionLabelMarker",
            "definitionLabelString"
        )(w);
    }
    function p(w) {
        return (
            (a = Wr(
                o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)
            )),
            w === 58
                ? (t.enter("definitionMarker"),
                  t.consume(w),
                  t.exit("definitionMarker"),
                  g)
                : i(w)
        );
    }
    function g(w) {
        return Ct(w) ? Wi(t, m)(w) : m(w);
    }
    function m(w) {
        return Bp(
            t,
            y,
            i,
            "definitionDestination",
            "definitionDestinationLiteral",
            "definitionDestinationLiteralMarker",
            "definitionDestinationRaw",
            "definitionDestinationString"
        )(w);
    }
    function y(w) {
        return t.attempt(z1, x, x)(w);
    }
    function x(w) {
        return Oe(w) ? _e(t, k, "whitespace")(w) : k(w);
    }
    function k(w) {
        return w === null || me(w)
            ? (t.exit("definition"), o.parser.defined.push(a), r(w))
            : i(w);
    }
}
function _1(t, r, i) {
    return o;
    function o(p) {
        return Ct(p) ? Wi(t, a)(p) : i(p);
    }
    function a(p) {
        return Hp(
            t,
            u,
            i,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
        )(p);
    }
    function u(p) {
        return Oe(p) ? _e(t, c, "whitespace")(p) : c(p);
    }
    function c(p) {
        return p === null || me(p) ? r(p) : i(p);
    }
}
const D1 = { name: "hardBreakEscape", tokenize: F1 };
function F1(t, r, i) {
    return o;
    function o(u) {
        return t.enter("hardBreakEscape"), t.consume(u), a;
    }
    function a(u) {
        return me(u) ? (t.exit("hardBreakEscape"), r(u)) : i(u);
    }
}
const U1 = { name: "headingAtx", resolve: M1, tokenize: B1 };
function M1(t, r) {
    let i = t.length - 2,
        o = 3,
        a,
        u;
    return (
        t[o][1].type === "whitespace" && (o += 2),
        i - 2 > o && t[i][1].type === "whitespace" && (i -= 2),
        t[i][1].type === "atxHeadingSequence" &&
            (o === i - 1 || (i - 4 > o && t[i - 2][1].type === "whitespace")) &&
            (i -= o + 1 === i ? 2 : 4),
        i > o &&
            ((a = {
                type: "atxHeadingText",
                start: t[o][1].start,
                end: t[i][1].end,
            }),
            (u = {
                type: "chunkText",
                start: t[o][1].start,
                end: t[i][1].end,
                contentType: "text",
            }),
            on(t, o, i - o + 1, [
                ["enter", a, r],
                ["enter", u, r],
                ["exit", u, r],
                ["exit", a, r],
            ])),
        t
    );
}
function B1(t, r, i) {
    let o = 0;
    return a;
    function a(y) {
        return t.enter("atxHeading"), u(y);
    }
    function u(y) {
        return t.enter("atxHeadingSequence"), c(y);
    }
    function c(y) {
        return y === 35 && o++ < 6
            ? (t.consume(y), c)
            : y === null || Ct(y)
            ? (t.exit("atxHeadingSequence"), p(y))
            : i(y);
    }
    function p(y) {
        return y === 35
            ? (t.enter("atxHeadingSequence"), g(y))
            : y === null || me(y)
            ? (t.exit("atxHeading"), r(y))
            : Oe(y)
            ? _e(t, p, "whitespace")(y)
            : (t.enter("atxHeadingText"), m(y));
    }
    function g(y) {
        return y === 35
            ? (t.consume(y), g)
            : (t.exit("atxHeadingSequence"), p(y));
    }
    function m(y) {
        return y === null || y === 35 || Ct(y)
            ? (t.exit("atxHeadingText"), p(y))
            : (t.consume(y), m);
    }
}
const V1 = [
        "address",
        "article",
        "aside",
        "base",
        "basefont",
        "blockquote",
        "body",
        "caption",
        "center",
        "col",
        "colgroup",
        "dd",
        "details",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "html",
        "iframe",
        "legend",
        "li",
        "link",
        "main",
        "menu",
        "menuitem",
        "nav",
        "noframes",
        "ol",
        "optgroup",
        "option",
        "p",
        "param",
        "search",
        "section",
        "summary",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "title",
        "tr",
        "track",
        "ul",
    ],
    hh = ["pre", "script", "style", "textarea"],
    H1 = { concrete: !0, name: "htmlFlow", resolveTo: Q1, tokenize: Y1 },
    W1 = { partial: !0, tokenize: J1 },
    X1 = { partial: !0, tokenize: q1 };
function Q1(t) {
    let r = t.length;
    for (; r-- && !(t[r][0] === "enter" && t[r][1].type === "htmlFlow"); );
    return (
        r > 1 &&
            t[r - 2][1].type === "linePrefix" &&
            ((t[r][1].start = t[r - 2][1].start),
            (t[r + 1][1].start = t[r - 2][1].start),
            t.splice(r - 2, 2)),
        t
    );
}
function Y1(t, r, i) {
    const o = this;
    let a, u, c, p, g;
    return m;
    function m(C) {
        return y(C);
    }
    function y(C) {
        return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(C), x;
    }
    function x(C) {
        return C === 33
            ? (t.consume(C), k)
            : C === 47
            ? (t.consume(C), (u = !0), T)
            : C === 63
            ? (t.consume(C), (a = 3), o.interrupt ? r : S)
            : ln(C)
            ? (t.consume(C), (c = String.fromCharCode(C)), R)
            : i(C);
    }
    function k(C) {
        return C === 45
            ? (t.consume(C), (a = 2), w)
            : C === 91
            ? (t.consume(C), (a = 5), (p = 0), j)
            : ln(C)
            ? (t.consume(C), (a = 4), o.interrupt ? r : S)
            : i(C);
    }
    function w(C) {
        return C === 45 ? (t.consume(C), o.interrupt ? r : S) : i(C);
    }
    function j(C) {
        const de = "CDATA[";
        return C === de.charCodeAt(p++)
            ? (t.consume(C), p === de.length ? (o.interrupt ? r : te) : j)
            : i(C);
    }
    function T(C) {
        return ln(C) ? (t.consume(C), (c = String.fromCharCode(C)), R) : i(C);
    }
    function R(C) {
        if (C === null || C === 47 || C === 62 || Ct(C)) {
            const de = C === 47,
                ke = c.toLowerCase();
            return !de && !u && hh.includes(ke)
                ? ((a = 1), o.interrupt ? r(C) : te(C))
                : V1.includes(c.toLowerCase())
                ? ((a = 6), de ? (t.consume(C), L) : o.interrupt ? r(C) : te(C))
                : ((a = 7),
                  o.interrupt && !o.parser.lazy[o.now().line]
                      ? i(C)
                      : u
                      ? D(C)
                      : U(C));
        }
        return C === 45 || It(C)
            ? (t.consume(C), (c += String.fromCharCode(C)), R)
            : i(C);
    }
    function L(C) {
        return C === 62 ? (t.consume(C), o.interrupt ? r : te) : i(C);
    }
    function D(C) {
        return Oe(C) ? (t.consume(C), D) : Se(C);
    }
    function U(C) {
        return C === 47
            ? (t.consume(C), Se)
            : C === 58 || C === 95 || ln(C)
            ? (t.consume(C), J)
            : Oe(C)
            ? (t.consume(C), U)
            : Se(C);
    }
    function J(C) {
        return C === 45 || C === 46 || C === 58 || C === 95 || It(C)
            ? (t.consume(C), J)
            : $(C);
    }
    function $(C) {
        return C === 61 ? (t.consume(C), _) : Oe(C) ? (t.consume(C), $) : U(C);
    }
    function _(C) {
        return C === null || C === 60 || C === 61 || C === 62 || C === 96
            ? i(C)
            : C === 34 || C === 39
            ? (t.consume(C), (g = C), ie)
            : Oe(C)
            ? (t.consume(C), _)
            : xe(C);
    }
    function ie(C) {
        return C === g
            ? (t.consume(C), (g = null), ge)
            : C === null || me(C)
            ? i(C)
            : (t.consume(C), ie);
    }
    function xe(C) {
        return C === null ||
            C === 34 ||
            C === 39 ||
            C === 47 ||
            C === 60 ||
            C === 61 ||
            C === 62 ||
            C === 96 ||
            Ct(C)
            ? $(C)
            : (t.consume(C), xe);
    }
    function ge(C) {
        return C === 47 || C === 62 || Oe(C) ? U(C) : i(C);
    }
    function Se(C) {
        return C === 62 ? (t.consume(C), oe) : i(C);
    }
    function oe(C) {
        return C === null || me(C) ? te(C) : Oe(C) ? (t.consume(C), oe) : i(C);
    }
    function te(C) {
        return C === 45 && a === 2
            ? (t.consume(C), Ae)
            : C === 60 && a === 1
            ? (t.consume(C), we)
            : C === 62 && a === 4
            ? (t.consume(C), P)
            : C === 63 && a === 3
            ? (t.consume(C), S)
            : C === 93 && a === 5
            ? (t.consume(C), se)
            : me(C) && (a === 6 || a === 7)
            ? (t.exit("htmlFlowData"), t.check(W1, M, Z)(C))
            : C === null || me(C)
            ? (t.exit("htmlFlowData"), Z(C))
            : (t.consume(C), te);
    }
    function Z(C) {
        return t.check(X1, G, M)(C);
    }
    function G(C) {
        return t.enter("lineEnding"), t.consume(C), t.exit("lineEnding"), ae;
    }
    function ae(C) {
        return C === null || me(C) ? Z(C) : (t.enter("htmlFlowData"), te(C));
    }
    function Ae(C) {
        return C === 45 ? (t.consume(C), S) : te(C);
    }
    function we(C) {
        return C === 47 ? (t.consume(C), (c = ""), Y) : te(C);
    }
    function Y(C) {
        if (C === 62) {
            const de = c.toLowerCase();
            return hh.includes(de) ? (t.consume(C), P) : te(C);
        }
        return ln(C) && c.length < 8
            ? (t.consume(C), (c += String.fromCharCode(C)), Y)
            : te(C);
    }
    function se(C) {
        return C === 93 ? (t.consume(C), S) : te(C);
    }
    function S(C) {
        return C === 62
            ? (t.consume(C), P)
            : C === 45 && a === 2
            ? (t.consume(C), S)
            : te(C);
    }
    function P(C) {
        return C === null || me(C)
            ? (t.exit("htmlFlowData"), M(C))
            : (t.consume(C), P);
    }
    function M(C) {
        return t.exit("htmlFlow"), r(C);
    }
}
function q1(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        return me(c)
            ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), u)
            : i(c);
    }
    function u(c) {
        return o.parser.lazy[o.now().line] ? i(c) : r(c);
    }
}
function J1(t, r, i) {
    return o;
    function o(a) {
        return (
            t.enter("lineEnding"),
            t.consume(a),
            t.exit("lineEnding"),
            t.attempt(_o, r, i)
        );
    }
}
const $1 = { name: "htmlText", tokenize: K1 };
function K1(t, r, i) {
    const o = this;
    let a, u, c;
    return p;
    function p(S) {
        return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(S), g;
    }
    function g(S) {
        return S === 33
            ? (t.consume(S), m)
            : S === 47
            ? (t.consume(S), $)
            : S === 63
            ? (t.consume(S), U)
            : ln(S)
            ? (t.consume(S), xe)
            : i(S);
    }
    function m(S) {
        return S === 45
            ? (t.consume(S), y)
            : S === 91
            ? (t.consume(S), (u = 0), j)
            : ln(S)
            ? (t.consume(S), D)
            : i(S);
    }
    function y(S) {
        return S === 45 ? (t.consume(S), w) : i(S);
    }
    function x(S) {
        return S === null
            ? i(S)
            : S === 45
            ? (t.consume(S), k)
            : me(S)
            ? ((c = x), we(S))
            : (t.consume(S), x);
    }
    function k(S) {
        return S === 45 ? (t.consume(S), w) : x(S);
    }
    function w(S) {
        return S === 62 ? Ae(S) : S === 45 ? k(S) : x(S);
    }
    function j(S) {
        const P = "CDATA[";
        return S === P.charCodeAt(u++)
            ? (t.consume(S), u === P.length ? T : j)
            : i(S);
    }
    function T(S) {
        return S === null
            ? i(S)
            : S === 93
            ? (t.consume(S), R)
            : me(S)
            ? ((c = T), we(S))
            : (t.consume(S), T);
    }
    function R(S) {
        return S === 93 ? (t.consume(S), L) : T(S);
    }
    function L(S) {
        return S === 62 ? Ae(S) : S === 93 ? (t.consume(S), L) : T(S);
    }
    function D(S) {
        return S === null || S === 62
            ? Ae(S)
            : me(S)
            ? ((c = D), we(S))
            : (t.consume(S), D);
    }
    function U(S) {
        return S === null
            ? i(S)
            : S === 63
            ? (t.consume(S), J)
            : me(S)
            ? ((c = U), we(S))
            : (t.consume(S), U);
    }
    function J(S) {
        return S === 62 ? Ae(S) : U(S);
    }
    function $(S) {
        return ln(S) ? (t.consume(S), _) : i(S);
    }
    function _(S) {
        return S === 45 || It(S) ? (t.consume(S), _) : ie(S);
    }
    function ie(S) {
        return me(S) ? ((c = ie), we(S)) : Oe(S) ? (t.consume(S), ie) : Ae(S);
    }
    function xe(S) {
        return S === 45 || It(S)
            ? (t.consume(S), xe)
            : S === 47 || S === 62 || Ct(S)
            ? ge(S)
            : i(S);
    }
    function ge(S) {
        return S === 47
            ? (t.consume(S), Ae)
            : S === 58 || S === 95 || ln(S)
            ? (t.consume(S), Se)
            : me(S)
            ? ((c = ge), we(S))
            : Oe(S)
            ? (t.consume(S), ge)
            : Ae(S);
    }
    function Se(S) {
        return S === 45 || S === 46 || S === 58 || S === 95 || It(S)
            ? (t.consume(S), Se)
            : oe(S);
    }
    function oe(S) {
        return S === 61
            ? (t.consume(S), te)
            : me(S)
            ? ((c = oe), we(S))
            : Oe(S)
            ? (t.consume(S), oe)
            : ge(S);
    }
    function te(S) {
        return S === null || S === 60 || S === 61 || S === 62 || S === 96
            ? i(S)
            : S === 34 || S === 39
            ? (t.consume(S), (a = S), Z)
            : me(S)
            ? ((c = te), we(S))
            : Oe(S)
            ? (t.consume(S), te)
            : (t.consume(S), G);
    }
    function Z(S) {
        return S === a
            ? (t.consume(S), (a = void 0), ae)
            : S === null
            ? i(S)
            : me(S)
            ? ((c = Z), we(S))
            : (t.consume(S), Z);
    }
    function G(S) {
        return S === null ||
            S === 34 ||
            S === 39 ||
            S === 60 ||
            S === 61 ||
            S === 96
            ? i(S)
            : S === 47 || S === 62 || Ct(S)
            ? ge(S)
            : (t.consume(S), G);
    }
    function ae(S) {
        return S === 47 || S === 62 || Ct(S) ? ge(S) : i(S);
    }
    function Ae(S) {
        return S === 62
            ? (t.consume(S), t.exit("htmlTextData"), t.exit("htmlText"), r)
            : i(S);
    }
    function we(S) {
        return (
            t.exit("htmlTextData"),
            t.enter("lineEnding"),
            t.consume(S),
            t.exit("lineEnding"),
            Y
        );
    }
    function Y(S) {
        return Oe(S)
            ? _e(
                  t,
                  se,
                  "linePrefix",
                  o.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4
              )(S)
            : se(S);
    }
    function se(S) {
        return t.enter("htmlTextData"), c(S);
    }
}
const Ru = { name: "labelEnd", resolveAll: t0, resolveTo: n0, tokenize: r0 },
    G1 = { tokenize: i0 },
    Z1 = { tokenize: l0 },
    e0 = { tokenize: o0 };
function t0(t) {
    let r = -1;
    const i = [];
    for (; ++r < t.length; ) {
        const o = t[r][1];
        if (
            (i.push(t[r]),
            o.type === "labelImage" ||
                o.type === "labelLink" ||
                o.type === "labelEnd")
        ) {
            const a = o.type === "labelImage" ? 4 : 2;
            (o.type = "data"), (r += a);
        }
    }
    return t.length !== i.length && on(t, 0, t.length, i), t;
}
function n0(t, r) {
    let i = t.length,
        o = 0,
        a,
        u,
        c,
        p;
    for (; i--; )
        if (((a = t[i][1]), u)) {
            if (a.type === "link" || (a.type === "labelLink" && a._inactive))
                break;
            t[i][0] === "enter" && a.type === "labelLink" && (a._inactive = !0);
        } else if (c) {
            if (
                t[i][0] === "enter" &&
                (a.type === "labelImage" || a.type === "labelLink") &&
                !a._balanced &&
                ((u = i), a.type !== "labelLink")
            ) {
                o = 2;
                break;
            }
        } else a.type === "labelEnd" && (c = i);
    const g = {
            type: t[u][1].type === "labelLink" ? "link" : "image",
            start: { ...t[u][1].start },
            end: { ...t[t.length - 1][1].end },
        },
        m = {
            type: "label",
            start: { ...t[u][1].start },
            end: { ...t[c][1].end },
        },
        y = {
            type: "labelText",
            start: { ...t[u + o + 2][1].end },
            end: { ...t[c - 2][1].start },
        };
    return (
        (p = [
            ["enter", g, r],
            ["enter", m, r],
        ]),
        (p = Mt(p, t.slice(u + 1, u + o + 3))),
        (p = Mt(p, [["enter", y, r]])),
        (p = Mt(
            p,
            Nu(
                r.parser.constructs.insideSpan.null,
                t.slice(u + o + 4, c - 3),
                r
            )
        )),
        (p = Mt(p, [["exit", y, r], t[c - 2], t[c - 1], ["exit", m, r]])),
        (p = Mt(p, t.slice(c + 1))),
        (p = Mt(p, [["exit", g, r]])),
        on(t, u, t.length, p),
        t
    );
}
function r0(t, r, i) {
    const o = this;
    let a = o.events.length,
        u,
        c;
    for (; a--; )
        if (
            (o.events[a][1].type === "labelImage" ||
                o.events[a][1].type === "labelLink") &&
            !o.events[a][1]._balanced
        ) {
            u = o.events[a][1];
            break;
        }
    return p;
    function p(k) {
        return u
            ? u._inactive
                ? x(k)
                : ((c = o.parser.defined.includes(
                      Wr(o.sliceSerialize({ start: u.end, end: o.now() }))
                  )),
                  t.enter("labelEnd"),
                  t.enter("labelMarker"),
                  t.consume(k),
                  t.exit("labelMarker"),
                  t.exit("labelEnd"),
                  g)
            : i(k);
    }
    function g(k) {
        return k === 40
            ? t.attempt(G1, y, c ? y : x)(k)
            : k === 91
            ? t.attempt(Z1, y, c ? m : x)(k)
            : c
            ? y(k)
            : x(k);
    }
    function m(k) {
        return t.attempt(e0, y, x)(k);
    }
    function y(k) {
        return r(k);
    }
    function x(k) {
        return (u._balanced = !0), i(k);
    }
}
function i0(t, r, i) {
    return o;
    function o(x) {
        return (
            t.enter("resource"),
            t.enter("resourceMarker"),
            t.consume(x),
            t.exit("resourceMarker"),
            a
        );
    }
    function a(x) {
        return Ct(x) ? Wi(t, u)(x) : u(x);
    }
    function u(x) {
        return x === 41
            ? y(x)
            : Bp(
                  t,
                  c,
                  p,
                  "resourceDestination",
                  "resourceDestinationLiteral",
                  "resourceDestinationLiteralMarker",
                  "resourceDestinationRaw",
                  "resourceDestinationString",
                  32
              )(x);
    }
    function c(x) {
        return Ct(x) ? Wi(t, g)(x) : y(x);
    }
    function p(x) {
        return i(x);
    }
    function g(x) {
        return x === 34 || x === 39 || x === 40
            ? Hp(
                  t,
                  m,
                  i,
                  "resourceTitle",
                  "resourceTitleMarker",
                  "resourceTitleString"
              )(x)
            : y(x);
    }
    function m(x) {
        return Ct(x) ? Wi(t, y)(x) : y(x);
    }
    function y(x) {
        return x === 41
            ? (t.enter("resourceMarker"),
              t.consume(x),
              t.exit("resourceMarker"),
              t.exit("resource"),
              r)
            : i(x);
    }
}
function l0(t, r, i) {
    const o = this;
    return a;
    function a(p) {
        return Vp.call(
            o,
            t,
            u,
            c,
            "reference",
            "referenceMarker",
            "referenceString"
        )(p);
    }
    function u(p) {
        return o.parser.defined.includes(
            Wr(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))
        )
            ? r(p)
            : i(p);
    }
    function c(p) {
        return i(p);
    }
}
function o0(t, r, i) {
    return o;
    function o(u) {
        return (
            t.enter("reference"),
            t.enter("referenceMarker"),
            t.consume(u),
            t.exit("referenceMarker"),
            a
        );
    }
    function a(u) {
        return u === 93
            ? (t.enter("referenceMarker"),
              t.consume(u),
              t.exit("referenceMarker"),
              t.exit("reference"),
              r)
            : i(u);
    }
}
const s0 = { name: "labelStartImage", resolveAll: Ru.resolveAll, tokenize: a0 };
function a0(t, r, i) {
    const o = this;
    return a;
    function a(p) {
        return (
            t.enter("labelImage"),
            t.enter("labelImageMarker"),
            t.consume(p),
            t.exit("labelImageMarker"),
            u
        );
    }
    function u(p) {
        return p === 91
            ? (t.enter("labelMarker"),
              t.consume(p),
              t.exit("labelMarker"),
              t.exit("labelImage"),
              c)
            : i(p);
    }
    function c(p) {
        return p === 94 && "_hiddenFootnoteSupport" in o.parser.constructs
            ? i(p)
            : r(p);
    }
}
const u0 = { name: "labelStartLink", resolveAll: Ru.resolveAll, tokenize: c0 };
function c0(t, r, i) {
    const o = this;
    return a;
    function a(c) {
        return (
            t.enter("labelLink"),
            t.enter("labelMarker"),
            t.consume(c),
            t.exit("labelMarker"),
            t.exit("labelLink"),
            u
        );
    }
    function u(c) {
        return c === 94 && "_hiddenFootnoteSupport" in o.parser.constructs
            ? i(c)
            : r(c);
    }
}
const Fa = { name: "lineEnding", tokenize: f0 };
function f0(t, r) {
    return i;
    function i(o) {
        return (
            t.enter("lineEnding"),
            t.consume(o),
            t.exit("lineEnding"),
            _e(t, r, "linePrefix")
        );
    }
}
const ko = { name: "thematicBreak", tokenize: d0 };
function d0(t, r, i) {
    let o = 0,
        a;
    return u;
    function u(m) {
        return t.enter("thematicBreak"), c(m);
    }
    function c(m) {
        return (a = m), p(m);
    }
    function p(m) {
        return m === a
            ? (t.enter("thematicBreakSequence"), g(m))
            : o >= 3 && (m === null || me(m))
            ? (t.exit("thematicBreak"), r(m))
            : i(m);
    }
    function g(m) {
        return m === a
            ? (t.consume(m), o++, g)
            : (t.exit("thematicBreakSequence"),
              Oe(m) ? _e(t, p, "whitespace")(m) : p(m));
    }
}
const St = {
        continuation: { tokenize: g0 },
        exit: v0,
        name: "list",
        tokenize: m0,
    },
    h0 = { partial: !0, tokenize: x0 },
    p0 = { partial: !0, tokenize: y0 };
function m0(t, r, i) {
    const o = this,
        a = o.events[o.events.length - 1];
    let u =
            a && a[1].type === "linePrefix"
                ? a[2].sliceSerialize(a[1], !0).length
                : 0,
        c = 0;
    return p;
    function p(w) {
        const j =
            o.containerState.type ||
            (w === 42 || w === 43 || w === 45
                ? "listUnordered"
                : "listOrdered");
        if (
            j === "listUnordered"
                ? !o.containerState.marker || w === o.containerState.marker
                : ou(w)
        ) {
            if (
                (o.containerState.type ||
                    ((o.containerState.type = j),
                    t.enter(j, { _container: !0 })),
                j === "listUnordered")
            )
                return (
                    t.enter("listItemPrefix"),
                    w === 42 || w === 45 ? t.check(ko, i, m)(w) : m(w)
                );
            if (!o.interrupt || w === 49)
                return (
                    t.enter("listItemPrefix"), t.enter("listItemValue"), g(w)
                );
        }
        return i(w);
    }
    function g(w) {
        return ou(w) && ++c < 10
            ? (t.consume(w), g)
            : (!o.interrupt || c < 2) &&
              (o.containerState.marker
                  ? w === o.containerState.marker
                  : w === 41 || w === 46)
            ? (t.exit("listItemValue"), m(w))
            : i(w);
    }
    function m(w) {
        return (
            t.enter("listItemMarker"),
            t.consume(w),
            t.exit("listItemMarker"),
            (o.containerState.marker = o.containerState.marker || w),
            t.check(_o, o.interrupt ? i : y, t.attempt(h0, k, x))
        );
    }
    function y(w) {
        return (o.containerState.initialBlankLine = !0), u++, k(w);
    }
    function x(w) {
        return Oe(w)
            ? (t.enter("listItemPrefixWhitespace"),
              t.consume(w),
              t.exit("listItemPrefixWhitespace"),
              k)
            : i(w);
    }
    function k(w) {
        return (
            (o.containerState.size =
                u + o.sliceSerialize(t.exit("listItemPrefix"), !0).length),
            r(w)
        );
    }
}
function g0(t, r, i) {
    const o = this;
    return (o.containerState._closeFlow = void 0), t.check(_o, a, u);
    function a(p) {
        return (
            (o.containerState.furtherBlankLines =
                o.containerState.furtherBlankLines ||
                o.containerState.initialBlankLine),
            _e(t, r, "listItemIndent", o.containerState.size + 1)(p)
        );
    }
    function u(p) {
        return o.containerState.furtherBlankLines || !Oe(p)
            ? ((o.containerState.furtherBlankLines = void 0),
              (o.containerState.initialBlankLine = void 0),
              c(p))
            : ((o.containerState.furtherBlankLines = void 0),
              (o.containerState.initialBlankLine = void 0),
              t.attempt(p0, r, c)(p));
    }
    function c(p) {
        return (
            (o.containerState._closeFlow = !0),
            (o.interrupt = void 0),
            _e(
                t,
                t.attempt(St, r, i),
                "linePrefix",
                o.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4
            )(p)
        );
    }
}
function y0(t, r, i) {
    const o = this;
    return _e(t, a, "listItemIndent", o.containerState.size + 1);
    function a(u) {
        const c = o.events[o.events.length - 1];
        return c &&
            c[1].type === "listItemIndent" &&
            c[2].sliceSerialize(c[1], !0).length === o.containerState.size
            ? r(u)
            : i(u);
    }
}
function v0(t) {
    t.exit(this.containerState.type);
}
function x0(t, r, i) {
    const o = this;
    return _e(
        t,
        a,
        "listItemPrefixWhitespace",
        o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
    );
    function a(u) {
        const c = o.events[o.events.length - 1];
        return !Oe(u) && c && c[1].type === "listItemPrefixWhitespace"
            ? r(u)
            : i(u);
    }
}
const ph = { name: "setextUnderline", resolveTo: w0, tokenize: k0 };
function w0(t, r) {
    let i = t.length,
        o,
        a,
        u;
    for (; i--; )
        if (t[i][0] === "enter") {
            if (t[i][1].type === "content") {
                o = i;
                break;
            }
            t[i][1].type === "paragraph" && (a = i);
        } else
            t[i][1].type === "content" && t.splice(i, 1),
                !u && t[i][1].type === "definition" && (u = i);
    const c = {
        type: "setextHeading",
        start: { ...t[a][1].start },
        end: { ...t[t.length - 1][1].end },
    };
    return (
        (t[a][1].type = "setextHeadingText"),
        u
            ? (t.splice(a, 0, ["enter", c, r]),
              t.splice(u + 1, 0, ["exit", t[o][1], r]),
              (t[o][1].end = { ...t[u][1].end }))
            : (t[o][1] = c),
        t.push(["exit", c, r]),
        t
    );
}
function k0(t, r, i) {
    const o = this;
    let a;
    return u;
    function u(m) {
        let y = o.events.length,
            x;
        for (; y--; )
            if (
                o.events[y][1].type !== "lineEnding" &&
                o.events[y][1].type !== "linePrefix" &&
                o.events[y][1].type !== "content"
            ) {
                x = o.events[y][1].type === "paragraph";
                break;
            }
        return !o.parser.lazy[o.now().line] && (o.interrupt || x)
            ? (t.enter("setextHeadingLine"), (a = m), c(m))
            : i(m);
    }
    function c(m) {
        return t.enter("setextHeadingLineSequence"), p(m);
    }
    function p(m) {
        return m === a
            ? (t.consume(m), p)
            : (t.exit("setextHeadingLineSequence"),
              Oe(m) ? _e(t, g, "lineSuffix")(m) : g(m));
    }
    function g(m) {
        return m === null || me(m) ? (t.exit("setextHeadingLine"), r(m)) : i(m);
    }
}
const S0 = { tokenize: E0 };
function E0(t) {
    const r = this,
        i = t.attempt(
            _o,
            o,
            t.attempt(
                this.parser.constructs.flowInitial,
                a,
                _e(
                    t,
                    t.attempt(this.parser.constructs.flow, a, t.attempt(N1, a)),
                    "linePrefix"
                )
            )
        );
    return i;
    function o(u) {
        if (u === null) {
            t.consume(u);
            return;
        }
        return (
            t.enter("lineEndingBlank"),
            t.consume(u),
            t.exit("lineEndingBlank"),
            (r.currentConstruct = void 0),
            i
        );
    }
    function a(u) {
        if (u === null) {
            t.consume(u);
            return;
        }
        return (
            t.enter("lineEnding"),
            t.consume(u),
            t.exit("lineEnding"),
            (r.currentConstruct = void 0),
            i
        );
    }
}
const C0 = { resolveAll: Xp() },
    j0 = Wp("string"),
    A0 = Wp("text");
function Wp(t) {
    return { resolveAll: Xp(t === "text" ? T0 : void 0), tokenize: r };
    function r(i) {
        const o = this,
            a = this.parser.constructs[t],
            u = i.attempt(a, c, p);
        return c;
        function c(y) {
            return m(y) ? u(y) : p(y);
        }
        function p(y) {
            if (y === null) {
                i.consume(y);
                return;
            }
            return i.enter("data"), i.consume(y), g;
        }
        function g(y) {
            return m(y) ? (i.exit("data"), u(y)) : (i.consume(y), g);
        }
        function m(y) {
            if (y === null) return !0;
            const x = a[y];
            let k = -1;
            if (x)
                for (; ++k < x.length; ) {
                    const w = x[k];
                    if (!w.previous || w.previous.call(o, o.previous))
                        return !0;
                }
            return !1;
        }
    }
}
function Xp(t) {
    return r;
    function r(i, o) {
        let a = -1,
            u;
        for (; ++a <= i.length; )
            u === void 0
                ? i[a] && i[a][1].type === "data" && ((u = a), a++)
                : (!i[a] || i[a][1].type !== "data") &&
                  (a !== u + 2 &&
                      ((i[u][1].end = i[a - 1][1].end),
                      i.splice(u + 2, a - u - 2),
                      (a = u + 2)),
                  (u = void 0));
        return t ? t(i, o) : i;
    }
}
function T0(t, r) {
    let i = 0;
    for (; ++i <= t.length; )
        if (
            (i === t.length || t[i][1].type === "lineEnding") &&
            t[i - 1][1].type === "data"
        ) {
            const o = t[i - 1][1],
                a = r.sliceStream(o);
            let u = a.length,
                c = -1,
                p = 0,
                g;
            for (; u--; ) {
                const m = a[u];
                if (typeof m == "string") {
                    for (c = m.length; m.charCodeAt(c - 1) === 32; ) p++, c--;
                    if (c) break;
                    c = -1;
                } else if (m === -2) (g = !0), p++;
                else if (m !== -1) {
                    u++;
                    break;
                }
            }
            if (p) {
                const m = {
                    type:
                        i === t.length || g || p < 2
                            ? "lineSuffix"
                            : "hardBreakTrailing",
                    start: {
                        _bufferIndex: u ? c : o.start._bufferIndex + c,
                        _index: o.start._index + u,
                        line: o.end.line,
                        column: o.end.column - p,
                        offset: o.end.offset - p,
                    },
                    end: { ...o.end },
                };
                (o.end = { ...m.start }),
                    o.start.offset === o.end.offset
                        ? Object.assign(o, m)
                        : (t.splice(i, 0, ["enter", m, r], ["exit", m, r]),
                          (i += 2));
            }
            i++;
        }
    return t;
}
const N0 = {
        42: St,
        43: St,
        45: St,
        48: St,
        49: St,
        50: St,
        51: St,
        52: St,
        53: St,
        54: St,
        55: St,
        56: St,
        57: St,
        62: Dp,
    },
    R0 = { 91: L1 },
    P0 = { [-2]: Da, [-1]: Da, 32: Da },
    I0 = {
        35: U1,
        42: ko,
        45: [ph, ko],
        60: H1,
        61: ph,
        95: ko,
        96: dh,
        126: dh,
    },
    O0 = { 38: Up, 92: Fp },
    L0 = {
        [-5]: Fa,
        [-4]: Fa,
        [-3]: Fa,
        33: s0,
        38: Up,
        42: su,
        60: [u1, $1],
        91: u0,
        92: [D1, Fp],
        93: Ru,
        95: su,
        96: S1,
    },
    z0 = { null: [su, C0] },
    b0 = { null: [42, 95] },
    _0 = { null: [] },
    D0 = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                attentionMarkers: b0,
                contentInitial: R0,
                disable: _0,
                document: N0,
                flow: I0,
                flowInitial: P0,
                insideSpan: z0,
                string: O0,
                text: L0,
            },
            Symbol.toStringTag,
            { value: "Module" }
        )
    );
function F0(t, r, i) {
    let o = {
        _bufferIndex: -1,
        _index: 0,
        line: (i && i.line) || 1,
        column: (i && i.column) || 1,
        offset: (i && i.offset) || 0,
    };
    const a = {},
        u = [];
    let c = [],
        p = [];
    const g = {
            attempt: ie($),
            check: ie(_),
            consume: D,
            enter: U,
            exit: J,
            interrupt: ie(_, { interrupt: !0 }),
        },
        m = {
            code: null,
            containerState: {},
            defineSkip: T,
            events: [],
            now: j,
            parser: t,
            previous: null,
            sliceSerialize: k,
            sliceStream: w,
            write: x,
        };
    let y = r.tokenize.call(m, g);
    return r.resolveAll && u.push(r), m;
    function x(oe) {
        return (
            (c = Mt(c, oe)),
            R(),
            c[c.length - 1] !== null
                ? []
                : (xe(r, 0), (m.events = Nu(u, m.events, m)), m.events)
        );
    }
    function k(oe, te) {
        return M0(w(oe), te);
    }
    function w(oe) {
        return U0(c, oe);
    }
    function j() {
        const {
            _bufferIndex: oe,
            _index: te,
            line: Z,
            column: G,
            offset: ae,
        } = o;
        return { _bufferIndex: oe, _index: te, line: Z, column: G, offset: ae };
    }
    function T(oe) {
        (a[oe.line] = oe.column), Se();
    }
    function R() {
        let oe;
        for (; o._index < c.length; ) {
            const te = c[o._index];
            if (typeof te == "string")
                for (
                    oe = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0);
                    o._index === oe && o._bufferIndex < te.length;

                )
                    L(te.charCodeAt(o._bufferIndex));
            else L(te);
        }
    }
    function L(oe) {
        y = y(oe);
    }
    function D(oe) {
        me(oe)
            ? (o.line++, (o.column = 1), (o.offset += oe === -3 ? 2 : 1), Se())
            : oe !== -1 && (o.column++, o.offset++),
            o._bufferIndex < 0
                ? o._index++
                : (o._bufferIndex++,
                  o._bufferIndex === c[o._index].length &&
                      ((o._bufferIndex = -1), o._index++)),
            (m.previous = oe);
    }
    function U(oe, te) {
        const Z = te || {};
        return (
            (Z.type = oe),
            (Z.start = j()),
            m.events.push(["enter", Z, m]),
            p.push(Z),
            Z
        );
    }
    function J(oe) {
        const te = p.pop();
        return (te.end = j()), m.events.push(["exit", te, m]), te;
    }
    function $(oe, te) {
        xe(oe, te.from);
    }
    function _(oe, te) {
        te.restore();
    }
    function ie(oe, te) {
        return Z;
        function Z(G, ae, Ae) {
            let we, Y, se, S;
            return Array.isArray(G) ? M(G) : "tokenize" in G ? M([G]) : P(G);
            function P(fe) {
                return Re;
                function Re(Ee) {
                    const Ie = Ee !== null && fe[Ee],
                        Qe = Ee !== null && fe.null,
                        sn = [
                            ...(Array.isArray(Ie) ? Ie : Ie ? [Ie] : []),
                            ...(Array.isArray(Qe) ? Qe : Qe ? [Qe] : []),
                        ];
                    return M(sn)(Ee);
                }
            }
            function M(fe) {
                return (we = fe), (Y = 0), fe.length === 0 ? Ae : C(fe[Y]);
            }
            function C(fe) {
                return Re;
                function Re(Ee) {
                    return (
                        (S = ge()),
                        (se = fe),
                        fe.partial || (m.currentConstruct = fe),
                        fe.name &&
                        m.parser.constructs.disable.null.includes(fe.name)
                            ? ke()
                            : fe.tokenize.call(
                                  te ? Object.assign(Object.create(m), te) : m,
                                  g,
                                  de,
                                  ke
                              )(Ee)
                    );
                }
            }
            function de(fe) {
                return oe(se, S), ae;
            }
            function ke(fe) {
                return S.restore(), ++Y < we.length ? C(we[Y]) : Ae;
            }
        }
    }
    function xe(oe, te) {
        oe.resolveAll && !u.includes(oe) && u.push(oe),
            oe.resolve &&
                on(
                    m.events,
                    te,
                    m.events.length - te,
                    oe.resolve(m.events.slice(te), m)
                ),
            oe.resolveTo && (m.events = oe.resolveTo(m.events, m));
    }
    function ge() {
        const oe = j(),
            te = m.previous,
            Z = m.currentConstruct,
            G = m.events.length,
            ae = Array.from(p);
        return { from: G, restore: Ae };
        function Ae() {
            (o = oe),
                (m.previous = te),
                (m.currentConstruct = Z),
                (m.events.length = G),
                (p = ae),
                Se();
        }
    }
    function Se() {
        o.line in a &&
            o.column < 2 &&
            ((o.column = a[o.line]), (o.offset += a[o.line] - 1));
    }
}
function U0(t, r) {
    const i = r.start._index,
        o = r.start._bufferIndex,
        a = r.end._index,
        u = r.end._bufferIndex;
    let c;
    if (i === a) c = [t[i].slice(o, u)];
    else {
        if (((c = t.slice(i, a)), o > -1)) {
            const p = c[0];
            typeof p == "string" ? (c[0] = p.slice(o)) : c.shift();
        }
        u > 0 && c.push(t[a].slice(0, u));
    }
    return c;
}
function M0(t, r) {
    let i = -1;
    const o = [];
    let a;
    for (; ++i < t.length; ) {
        const u = t[i];
        let c;
        if (typeof u == "string") c = u;
        else
            switch (u) {
                case -5: {
                    c = "\r";
                    break;
                }
                case -4: {
                    c = `
`;
                    break;
                }
                case -3: {
                    c = `\r
`;
                    break;
                }
                case -2: {
                    c = r ? " " : "	";
                    break;
                }
                case -1: {
                    if (!r && a) continue;
                    c = " ";
                    break;
                }
                default:
                    c = String.fromCharCode(u);
            }
        (a = u === -2), o.push(c);
    }
    return o.join("");
}
function B0(t) {
    const o = {
        constructs: qw([D0, ...((t || {}).extensions || [])]),
        content: a(n1),
        defined: [],
        document: a(i1),
        flow: a(S0),
        lazy: {},
        string: a(j0),
        text: a(A0),
    };
    return o;
    function a(u) {
        return c;
        function c(p) {
            return F0(o, u, p);
        }
    }
}
function V0(t) {
    for (; !Mp(t); );
    return t;
}
const mh = /[\0\t\n\r]/g;
function H0() {
    let t = 1,
        r = "",
        i = !0,
        o;
    return a;
    function a(u, c, p) {
        const g = [];
        let m, y, x, k, w;
        for (
            u =
                r +
                (typeof u == "string"
                    ? u.toString()
                    : new TextDecoder(c || void 0).decode(u)),
                x = 0,
                r = "",
                i && (u.charCodeAt(0) === 65279 && x++, (i = void 0));
            x < u.length;

        ) {
            if (
                ((mh.lastIndex = x),
                (m = mh.exec(u)),
                (k = m && m.index !== void 0 ? m.index : u.length),
                (w = u.charCodeAt(k)),
                !m)
            ) {
                r = u.slice(x);
                break;
            }
            if (w === 10 && x === k && o) g.push(-3), (o = void 0);
            else
                switch (
                    (o && (g.push(-5), (o = void 0)),
                    x < k && (g.push(u.slice(x, k)), (t += k - x)),
                    w)
                ) {
                    case 0: {
                        g.push(65533), t++;
                        break;
                    }
                    case 9: {
                        for (y = Math.ceil(t / 4) * 4, g.push(-2); t++ < y; )
                            g.push(-1);
                        break;
                    }
                    case 10: {
                        g.push(-4), (t = 1);
                        break;
                    }
                    default:
                        (o = !0), (t = 1);
                }
            x = k + 1;
        }
        return p && (o && g.push(-5), r && g.push(r), g.push(null)), g;
    }
}
const W0 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function X0(t) {
    return t.replace(W0, Q0);
}
function Q0(t, r, i) {
    if (r) return r;
    if (i.charCodeAt(0) === 35) {
        const a = i.charCodeAt(1),
            u = a === 120 || a === 88;
        return _p(i.slice(u ? 2 : 1), u ? 16 : 10);
    }
    return Tu(i) || t;
}
const Qp = {}.hasOwnProperty;
function Y0(t, r, i) {
    return (
        typeof r != "string" && ((i = r), (r = void 0)),
        q0(i)(V0(B0(i).document().write(H0()(t, r, !0))))
    );
}
function q0(t) {
    const r = {
        transforms: [],
        canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong",
        ],
        enter: {
            autolink: u(gr),
            autolinkProtocol: ge,
            autolinkEmail: ge,
            atxHeading: u(ei),
            blockQuote: u(Qe),
            characterEscape: ge,
            characterReference: ge,
            codeFenced: u(sn),
            codeFencedFenceInfo: c,
            codeFencedFenceMeta: c,
            codeIndented: u(sn, c),
            codeText: u(tl, c),
            codeTextData: ge,
            data: ge,
            codeFlowValue: ge,
            definition: u(pr),
            definitionDestinationString: c,
            definitionLabelString: c,
            definitionTitleString: c,
            emphasis: u(Zr),
            hardBreakEscape: u(ti),
            hardBreakTrailing: u(ti),
            htmlFlow: u(mr, c),
            htmlFlowData: ge,
            htmlText: u(mr, c),
            htmlTextData: ge,
            image: u(nl),
            label: c,
            link: u(gr),
            listItem: u(xn),
            listItemValue: k,
            listOrdered: u(vn, x),
            listUnordered: u(vn),
            paragraph: u(ni),
            reference: C,
            referenceString: c,
            resourceDestinationString: c,
            resourceTitleString: c,
            setextHeading: u(ei),
            strong: u(rl),
            thematicBreak: u(ll),
        },
        exit: {
            atxHeading: g(),
            atxHeadingSequence: $,
            autolink: g(),
            autolinkEmail: Ie,
            autolinkProtocol: Ee,
            blockQuote: g(),
            characterEscapeValue: Se,
            characterReferenceMarkerHexadecimal: ke,
            characterReferenceMarkerNumeric: ke,
            characterReferenceValue: fe,
            characterReference: Re,
            codeFenced: g(R),
            codeFencedFence: T,
            codeFencedFenceInfo: w,
            codeFencedFenceMeta: j,
            codeFlowValue: Se,
            codeIndented: g(L),
            codeText: g(ae),
            codeTextData: Se,
            data: Se,
            definition: g(),
            definitionDestinationString: J,
            definitionLabelString: D,
            definitionTitleString: U,
            emphasis: g(),
            hardBreakEscape: g(te),
            hardBreakTrailing: g(te),
            htmlFlow: g(Z),
            htmlFlowData: Se,
            htmlText: g(G),
            htmlTextData: Se,
            image: g(we),
            label: se,
            labelText: Y,
            lineEnding: oe,
            link: g(Ae),
            listItem: g(),
            listOrdered: g(),
            listUnordered: g(),
            paragraph: g(),
            referenceString: de,
            resourceDestinationString: S,
            resourceTitleString: P,
            resource: M,
            setextHeading: g(xe),
            setextHeadingLineSequence: ie,
            setextHeadingText: _,
            strong: g(),
            thematicBreak: g(),
        },
    };
    Yp(r, (t || {}).mdastExtensions || []);
    const i = {};
    return o;
    function o(F) {
        let q = { type: "root", children: [] };
        const he = {
                stack: [q],
                tokenStack: [],
                config: r,
                enter: p,
                exit: m,
                buffer: c,
                resume: y,
                data: i,
            },
            Ce = [];
        let Te = -1;
        for (; ++Te < F.length; )
            if (
                F[Te][1].type === "listOrdered" ||
                F[Te][1].type === "listUnordered"
            )
                if (F[Te][0] === "enter") Ce.push(Te);
                else {
                    const tt = Ce.pop();
                    Te = a(F, tt, Te);
                }
        for (Te = -1; ++Te < F.length; ) {
            const tt = r[F[Te][0]];
            Qp.call(tt, F[Te][1].type) &&
                tt[F[Te][1].type].call(
                    Object.assign(
                        { sliceSerialize: F[Te][2].sliceSerialize },
                        he
                    ),
                    F[Te][1]
                );
        }
        if (he.tokenStack.length > 0) {
            const tt = he.tokenStack[he.tokenStack.length - 1];
            (tt[1] || gh).call(he, void 0, tt[0]);
        }
        for (
            q.position = {
                start: Mn(
                    F.length > 0
                        ? F[0][1].start
                        : { line: 1, column: 1, offset: 0 }
                ),
                end: Mn(
                    F.length > 0
                        ? F[F.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 }
                ),
            },
                Te = -1;
            ++Te < r.transforms.length;

        )
            q = r.transforms[Te](q) || q;
        return q;
    }
    function a(F, q, he) {
        let Ce = q - 1,
            Te = -1,
            tt = !1,
            an,
            Lt,
            wn,
            qn;
        for (; ++Ce <= he; ) {
            const nt = F[Ce];
            switch (nt[1].type) {
                case "listUnordered":
                case "listOrdered":
                case "blockQuote": {
                    nt[0] === "enter" ? Te++ : Te--, (qn = void 0);
                    break;
                }
                case "lineEndingBlank": {
                    nt[0] === "enter" &&
                        (an && !qn && !Te && !wn && (wn = Ce), (qn = void 0));
                    break;
                }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    qn = void 0;
            }
            if (
                (!Te && nt[0] === "enter" && nt[1].type === "listItemPrefix") ||
                (Te === -1 &&
                    nt[0] === "exit" &&
                    (nt[1].type === "listUnordered" ||
                        nt[1].type === "listOrdered"))
            ) {
                if (an) {
                    let $t = Ce;
                    for (Lt = void 0; $t--; ) {
                        const jt = F[$t];
                        if (
                            jt[1].type === "lineEnding" ||
                            jt[1].type === "lineEndingBlank"
                        ) {
                            if (jt[0] === "exit") continue;
                            Lt &&
                                ((F[Lt][1].type = "lineEndingBlank"),
                                (tt = !0)),
                                (jt[1].type = "lineEnding"),
                                (Lt = $t);
                        } else if (
                            !(
                                jt[1].type === "linePrefix" ||
                                jt[1].type === "blockQuotePrefix" ||
                                jt[1].type === "blockQuotePrefixWhitespace" ||
                                jt[1].type === "blockQuoteMarker" ||
                                jt[1].type === "listItemIndent"
                            )
                        )
                            break;
                    }
                    wn && (!Lt || wn < Lt) && (an._spread = !0),
                        (an.end = Object.assign(
                            {},
                            Lt ? F[Lt][1].start : nt[1].end
                        )),
                        F.splice(Lt || Ce, 0, ["exit", an, nt[2]]),
                        Ce++,
                        he++;
                }
                if (nt[1].type === "listItemPrefix") {
                    const $t = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, nt[1].start),
                        end: void 0,
                    };
                    (an = $t),
                        F.splice(Ce, 0, ["enter", $t, nt[2]]),
                        Ce++,
                        he++,
                        (wn = void 0),
                        (qn = !0);
                }
            }
        }
        return (F[q][1]._spread = tt), he;
    }
    function u(F, q) {
        return he;
        function he(Ce) {
            p.call(this, F(Ce), Ce), q && q.call(this, Ce);
        }
    }
    function c() {
        this.stack.push({ type: "fragment", children: [] });
    }
    function p(F, q, he) {
        this.stack[this.stack.length - 1].children.push(F),
            this.stack.push(F),
            this.tokenStack.push([q, he || void 0]),
            (F.position = { start: Mn(q.start), end: void 0 });
    }
    function g(F) {
        return q;
        function q(he) {
            F && F.call(this, he), m.call(this, he);
        }
    }
    function m(F, q) {
        const he = this.stack.pop(),
            Ce = this.tokenStack.pop();
        if (Ce)
            Ce[0].type !== F.type &&
                (q
                    ? q.call(this, F, Ce[0])
                    : (Ce[1] || gh).call(this, F, Ce[0]));
        else
            throw new Error(
                "Cannot close `" +
                    F.type +
                    "` (" +
                    Hi({ start: F.start, end: F.end }) +
                    "): it’s not open"
            );
        he.position.end = Mn(F.end);
    }
    function y() {
        return Qw(this.stack.pop());
    }
    function x() {
        this.data.expectingFirstListItemValue = !0;
    }
    function k(F) {
        if (this.data.expectingFirstListItemValue) {
            const q = this.stack[this.stack.length - 2];
            (q.start = Number.parseInt(this.sliceSerialize(F), 10)),
                (this.data.expectingFirstListItemValue = void 0);
        }
    }
    function w() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.lang = F;
    }
    function j() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.meta = F;
    }
    function T() {
        this.data.flowCodeInside ||
            (this.buffer(), (this.data.flowCodeInside = !0));
    }
    function R() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        (q.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
            (this.data.flowCodeInside = void 0);
    }
    function L() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.value = F.replace(/(\r?\n|\r)$/g, "");
    }
    function D(F) {
        const q = this.resume(),
            he = this.stack[this.stack.length - 1];
        (he.label = q),
            (he.identifier = Wr(this.sliceSerialize(F)).toLowerCase());
    }
    function U() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.title = F;
    }
    function J() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.url = F;
    }
    function $(F) {
        const q = this.stack[this.stack.length - 1];
        if (!q.depth) {
            const he = this.sliceSerialize(F).length;
            q.depth = he;
        }
    }
    function _() {
        this.data.setextHeadingSlurpLineEnding = !0;
    }
    function ie(F) {
        const q = this.stack[this.stack.length - 1];
        q.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
    }
    function xe() {
        this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function ge(F) {
        const he = this.stack[this.stack.length - 1].children;
        let Ce = he[he.length - 1];
        (!Ce || Ce.type !== "text") &&
            ((Ce = il()),
            (Ce.position = { start: Mn(F.start), end: void 0 }),
            he.push(Ce)),
            this.stack.push(Ce);
    }
    function Se(F) {
        const q = this.stack.pop();
        (q.value += this.sliceSerialize(F)), (q.position.end = Mn(F.end));
    }
    function oe(F) {
        const q = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const he = q.children[q.children.length - 1];
            (he.position.end = Mn(F.end)), (this.data.atHardBreak = void 0);
            return;
        }
        !this.data.setextHeadingSlurpLineEnding &&
            r.canContainEols.includes(q.type) &&
            (ge.call(this, F), Se.call(this, F));
    }
    function te() {
        this.data.atHardBreak = !0;
    }
    function Z() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.value = F;
    }
    function G() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.value = F;
    }
    function ae() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.value = F;
    }
    function Ae() {
        const F = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const q = this.data.referenceType || "shortcut";
            (F.type += "Reference"),
                (F.referenceType = q),
                delete F.url,
                delete F.title;
        } else delete F.identifier, delete F.label;
        this.data.referenceType = void 0;
    }
    function we() {
        const F = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const q = this.data.referenceType || "shortcut";
            (F.type += "Reference"),
                (F.referenceType = q),
                delete F.url,
                delete F.title;
        } else delete F.identifier, delete F.label;
        this.data.referenceType = void 0;
    }
    function Y(F) {
        const q = this.sliceSerialize(F),
            he = this.stack[this.stack.length - 2];
        (he.label = X0(q)), (he.identifier = Wr(q).toLowerCase());
    }
    function se() {
        const F = this.stack[this.stack.length - 1],
            q = this.resume(),
            he = this.stack[this.stack.length - 1];
        if (((this.data.inReference = !0), he.type === "link")) {
            const Ce = F.children;
            he.children = Ce;
        } else he.alt = q;
    }
    function S() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.url = F;
    }
    function P() {
        const F = this.resume(),
            q = this.stack[this.stack.length - 1];
        q.title = F;
    }
    function M() {
        this.data.inReference = void 0;
    }
    function C() {
        this.data.referenceType = "collapsed";
    }
    function de(F) {
        const q = this.resume(),
            he = this.stack[this.stack.length - 1];
        (he.label = q),
            (he.identifier = Wr(this.sliceSerialize(F)).toLowerCase()),
            (this.data.referenceType = "full");
    }
    function ke(F) {
        this.data.characterReferenceType = F.type;
    }
    function fe(F) {
        const q = this.sliceSerialize(F),
            he = this.data.characterReferenceType;
        let Ce;
        he
            ? ((Ce = _p(q, he === "characterReferenceMarkerNumeric" ? 10 : 16)),
              (this.data.characterReferenceType = void 0))
            : (Ce = Tu(q));
        const Te = this.stack[this.stack.length - 1];
        Te.value += Ce;
    }
    function Re(F) {
        const q = this.stack.pop();
        q.position.end = Mn(F.end);
    }
    function Ee(F) {
        Se.call(this, F);
        const q = this.stack[this.stack.length - 1];
        q.url = this.sliceSerialize(F);
    }
    function Ie(F) {
        Se.call(this, F);
        const q = this.stack[this.stack.length - 1];
        q.url = "mailto:" + this.sliceSerialize(F);
    }
    function Qe() {
        return { type: "blockquote", children: [] };
    }
    function sn() {
        return { type: "code", lang: null, meta: null, value: "" };
    }
    function tl() {
        return { type: "inlineCode", value: "" };
    }
    function pr() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: "",
        };
    }
    function Zr() {
        return { type: "emphasis", children: [] };
    }
    function ei() {
        return { type: "heading", depth: 0, children: [] };
    }
    function ti() {
        return { type: "break" };
    }
    function mr() {
        return { type: "html", value: "" };
    }
    function nl() {
        return { type: "image", title: null, url: "", alt: null };
    }
    function gr() {
        return { type: "link", title: null, url: "", children: [] };
    }
    function vn(F) {
        return {
            type: "list",
            ordered: F.type === "listOrdered",
            start: null,
            spread: F._spread,
            children: [],
        };
    }
    function xn(F) {
        return {
            type: "listItem",
            spread: F._spread,
            checked: null,
            children: [],
        };
    }
    function ni() {
        return { type: "paragraph", children: [] };
    }
    function rl() {
        return { type: "strong", children: [] };
    }
    function il() {
        return { type: "text", value: "" };
    }
    function ll() {
        return { type: "thematicBreak" };
    }
}
function Mn(t) {
    return { line: t.line, column: t.column, offset: t.offset };
}
function Yp(t, r) {
    let i = -1;
    for (; ++i < r.length; ) {
        const o = r[i];
        Array.isArray(o) ? Yp(t, o) : J0(t, o);
    }
}
function J0(t, r) {
    let i;
    for (i in r)
        if (Qp.call(r, i))
            switch (i) {
                case "canContainEols": {
                    const o = r[i];
                    o && t[i].push(...o);
                    break;
                }
                case "transforms": {
                    const o = r[i];
                    o && t[i].push(...o);
                    break;
                }
                case "enter":
                case "exit": {
                    const o = r[i];
                    o && Object.assign(t[i], o);
                    break;
                }
            }
}
function gh(t, r) {
    throw t
        ? new Error(
              "Cannot close `" +
                  t.type +
                  "` (" +
                  Hi({ start: t.start, end: t.end }) +
                  "): a different token (`" +
                  r.type +
                  "`, " +
                  Hi({ start: r.start, end: r.end }) +
                  ") is open"
          )
        : new Error(
              "Cannot close document, a token (`" +
                  r.type +
                  "`, " +
                  Hi({ start: r.start, end: r.end }) +
                  ") is still open"
          );
}
function $0(t) {
    const r = this;
    r.parser = i;
    function i(o) {
        return Y0(o, {
            ...r.data("settings"),
            ...t,
            extensions: r.data("micromarkExtensions") || [],
            mdastExtensions: r.data("fromMarkdownExtensions") || [],
        });
    }
}
function K0(t, r) {
    const i = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: t.wrap(t.all(r), !0),
    };
    return t.patch(r, i), t.applyData(r, i);
}
function G0(t, r) {
    const i = { type: "element", tagName: "br", properties: {}, children: [] };
    return (
        t.patch(r, i),
        [
            t.applyData(r, i),
            {
                type: "text",
                value: `
`,
            },
        ]
    );
}
function Z0(t, r) {
    const i = r.value
            ? r.value +
              `
`
            : "",
        o = {};
    r.lang && (o.className = ["language-" + r.lang]);
    let a = {
        type: "element",
        tagName: "code",
        properties: o,
        children: [{ type: "text", value: i }],
    };
    return (
        r.meta && (a.data = { meta: r.meta }),
        t.patch(r, a),
        (a = t.applyData(r, a)),
        (a = {
            type: "element",
            tagName: "pre",
            properties: {},
            children: [a],
        }),
        t.patch(r, a),
        a
    );
}
function ek(t, r) {
    const i = {
        type: "element",
        tagName: "del",
        properties: {},
        children: t.all(r),
    };
    return t.patch(r, i), t.applyData(r, i);
}
function tk(t, r) {
    const i = {
        type: "element",
        tagName: "em",
        properties: {},
        children: t.all(r),
    };
    return t.patch(r, i), t.applyData(r, i);
}
function nk(t, r) {
    const i =
            typeof t.options.clobberPrefix == "string"
                ? t.options.clobberPrefix
                : "user-content-",
        o = String(r.identifier).toUpperCase(),
        a = Gr(o.toLowerCase()),
        u = t.footnoteOrder.indexOf(o);
    let c,
        p = t.footnoteCounts.get(o);
    p === void 0
        ? ((p = 0), t.footnoteOrder.push(o), (c = t.footnoteOrder.length))
        : (c = u + 1),
        (p += 1),
        t.footnoteCounts.set(o, p);
    const g = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + i + "fn-" + a,
            id: i + "fnref-" + a + (p > 1 ? "-" + p : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"],
        },
        children: [{ type: "text", value: String(c) }],
    };
    t.patch(r, g);
    const m = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [g],
    };
    return t.patch(r, m), t.applyData(r, m);
}
function rk(t, r) {
    const i = {
        type: "element",
        tagName: "h" + r.depth,
        properties: {},
        children: t.all(r),
    };
    return t.patch(r, i), t.applyData(r, i);
}
function ik(t, r) {
    if (t.options.allowDangerousHtml) {
        const i = { type: "raw", value: r.value };
        return t.patch(r, i), t.applyData(r, i);
    }
}
function qp(t, r) {
    const i = r.referenceType;
    let o = "]";
    if (
        (i === "collapsed"
            ? (o += "[]")
            : i === "full" && (o += "[" + (r.label || r.identifier) + "]"),
        r.type === "imageReference")
    )
        return [{ type: "text", value: "![" + r.alt + o }];
    const a = t.all(r),
        u = a[0];
    u && u.type === "text"
        ? (u.value = "[" + u.value)
        : a.unshift({ type: "text", value: "[" });
    const c = a[a.length - 1];
    return (
        c && c.type === "text"
            ? (c.value += o)
            : a.push({ type: "text", value: o }),
        a
    );
}
function lk(t, r) {
    const i = String(r.identifier).toUpperCase(),
        o = t.definitionById.get(i);
    if (!o) return qp(t, r);
    const a = { src: Gr(o.url || ""), alt: r.alt };
    o.title !== null && o.title !== void 0 && (a.title = o.title);
    const u = { type: "element", tagName: "img", properties: a, children: [] };
    return t.patch(r, u), t.applyData(r, u);
}
function ok(t, r) {
    const i = { src: Gr(r.url) };
    r.alt !== null && r.alt !== void 0 && (i.alt = r.alt),
        r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = { type: "element", tagName: "img", properties: i, children: [] };
    return t.patch(r, o), t.applyData(r, o);
}
function sk(t, r) {
    const i = { type: "text", value: r.value.replace(/\r?\n|\r/g, " ") };
    t.patch(r, i);
    const o = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [i],
    };
    return t.patch(r, o), t.applyData(r, o);
}
function ak(t, r) {
    const i = String(r.identifier).toUpperCase(),
        o = t.definitionById.get(i);
    if (!o) return qp(t, r);
    const a = { href: Gr(o.url || "") };
    o.title !== null && o.title !== void 0 && (a.title = o.title);
    const u = {
        type: "element",
        tagName: "a",
        properties: a,
        children: t.all(r),
    };
    return t.patch(r, u), t.applyData(r, u);
}
function uk(t, r) {
    const i = { href: Gr(r.url) };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
        type: "element",
        tagName: "a",
        properties: i,
        children: t.all(r),
    };
    return t.patch(r, o), t.applyData(r, o);
}
function ck(t, r, i) {
    const o = t.all(r),
        a = i ? fk(i) : Jp(r),
        u = {},
        c = [];
    if (typeof r.checked == "boolean") {
        const y = o[0];
        let x;
        y && y.type === "element" && y.tagName === "p"
            ? (x = y)
            : ((x = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
              }),
              o.unshift(x)),
            x.children.length > 0 &&
                x.children.unshift({ type: "text", value: " " }),
            x.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                    type: "checkbox",
                    checked: r.checked,
                    disabled: !0,
                },
                children: [],
            }),
            (u.className = ["task-list-item"]);
    }
    let p = -1;
    for (; ++p < o.length; ) {
        const y = o[p];
        (a || p !== 0 || y.type !== "element" || y.tagName !== "p") &&
            c.push({
                type: "text",
                value: `
`,
            }),
            y.type === "element" && y.tagName === "p" && !a
                ? c.push(...y.children)
                : c.push(y);
    }
    const g = o[o.length - 1];
    g &&
        (a || g.type !== "element" || g.tagName !== "p") &&
        c.push({
            type: "text",
            value: `
`,
        });
    const m = { type: "element", tagName: "li", properties: u, children: c };
    return t.patch(r, m), t.applyData(r, m);
}
function fk(t) {
    let r = !1;
    if (t.type === "list") {
        r = t.spread || !1;
        const i = t.children;
        let o = -1;
        for (; !r && ++o < i.length; ) r = Jp(i[o]);
    }
    return r;
}
function Jp(t) {
    const r = t.spread;
    return r ?? t.children.length > 1;
}
function dk(t, r) {
    const i = {},
        o = t.all(r);
    let a = -1;
    for (
        typeof r.start == "number" && r.start !== 1 && (i.start = r.start);
        ++a < o.length;

    ) {
        const c = o[a];
        if (
            c.type === "element" &&
            c.tagName === "li" &&
            c.properties &&
            Array.isArray(c.properties.className) &&
            c.properties.className.includes("task-list-item")
        ) {
            i.className = ["contains-task-list"];
            break;
        }
    }
    const u = {
        type: "element",
        tagName: r.ordered ? "ol" : "ul",
        properties: i,
        children: t.wrap(o, !0),
    };
    return t.patch(r, u), t.applyData(r, u);
}
function hk(t, r) {
    const i = {
        type: "element",
        tagName: "p",
        properties: {},
        children: t.all(r),
    };
    return t.patch(r, i), t.applyData(r, i);
}
function pk(t, r) {
    const i = { type: "root", children: t.wrap(t.all(r)) };
    return t.patch(r, i), t.applyData(r, i);
}
function mk(t, r) {
    const i = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: t.all(r),
    };
    return t.patch(r, i), t.applyData(r, i);
}
function gk(t, r) {
    const i = t.all(r),
        o = i.shift(),
        a = [];
    if (o) {
        const c = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: t.wrap([o], !0),
        };
        t.patch(r.children[0], c), a.push(c);
    }
    if (i.length > 0) {
        const c = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: t.wrap(i, !0),
            },
            p = Eu(r.children[1]),
            g = Rp(r.children[r.children.length - 1]);
        p && g && (c.position = { start: p, end: g }), a.push(c);
    }
    const u = {
        type: "element",
        tagName: "table",
        properties: {},
        children: t.wrap(a, !0),
    };
    return t.patch(r, u), t.applyData(r, u);
}
function yk(t, r, i) {
    const o = i ? i.children : void 0,
        u = (o ? o.indexOf(r) : 1) === 0 ? "th" : "td",
        c = i && i.type === "table" ? i.align : void 0,
        p = c ? c.length : r.children.length;
    let g = -1;
    const m = [];
    for (; ++g < p; ) {
        const x = r.children[g],
            k = {},
            w = c ? c[g] : void 0;
        w && (k.align = w);
        let j = { type: "element", tagName: u, properties: k, children: [] };
        x && ((j.children = t.all(x)), t.patch(x, j), (j = t.applyData(x, j))),
            m.push(j);
    }
    const y = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: t.wrap(m, !0),
    };
    return t.patch(r, y), t.applyData(r, y);
}
function vk(t, r) {
    const i = {
        type: "element",
        tagName: "td",
        properties: {},
        children: t.all(r),
    };
    return t.patch(r, i), t.applyData(r, i);
}
const yh = 9,
    vh = 32;
function xk(t) {
    const r = String(t),
        i = /\r?\n|\r/g;
    let o = i.exec(r),
        a = 0;
    const u = [];
    for (; o; )
        u.push(xh(r.slice(a, o.index), a > 0, !0), o[0]),
            (a = o.index + o[0].length),
            (o = i.exec(r));
    return u.push(xh(r.slice(a), a > 0, !1)), u.join("");
}
function xh(t, r, i) {
    let o = 0,
        a = t.length;
    if (r) {
        let u = t.codePointAt(o);
        for (; u === yh || u === vh; ) o++, (u = t.codePointAt(o));
    }
    if (i) {
        let u = t.codePointAt(a - 1);
        for (; u === yh || u === vh; ) a--, (u = t.codePointAt(a - 1));
    }
    return a > o ? t.slice(o, a) : "";
}
function wk(t, r) {
    const i = { type: "text", value: xk(String(r.value)) };
    return t.patch(r, i), t.applyData(r, i);
}
function kk(t, r) {
    const i = { type: "element", tagName: "hr", properties: {}, children: [] };
    return t.patch(r, i), t.applyData(r, i);
}
const Sk = {
    blockquote: K0,
    break: G0,
    code: Z0,
    delete: ek,
    emphasis: tk,
    footnoteReference: nk,
    heading: rk,
    html: ik,
    imageReference: lk,
    image: ok,
    inlineCode: sk,
    linkReference: ak,
    link: uk,
    listItem: ck,
    list: dk,
    paragraph: hk,
    root: pk,
    strong: mk,
    table: gk,
    tableCell: vk,
    tableRow: yk,
    text: wk,
    thematicBreak: kk,
    toml: mo,
    yaml: mo,
    definition: mo,
    footnoteDefinition: mo,
};
function mo() {}
const $p = -1,
    Do = 0,
    jo = 1,
    Ao = 2,
    Pu = 3,
    Iu = 4,
    Ou = 5,
    Lu = 6,
    Kp = 7,
    Gp = 8,
    wh = typeof self == "object" ? self : globalThis,
    Ek = (t, r) => {
        const i = (a, u) => (t.set(u, a), a),
            o = (a) => {
                if (t.has(a)) return t.get(a);
                const [u, c] = r[a];
                switch (u) {
                    case Do:
                    case $p:
                        return i(c, a);
                    case jo: {
                        const p = i([], a);
                        for (const g of c) p.push(o(g));
                        return p;
                    }
                    case Ao: {
                        const p = i({}, a);
                        for (const [g, m] of c) p[o(g)] = o(m);
                        return p;
                    }
                    case Pu:
                        return i(new Date(c), a);
                    case Iu: {
                        const { source: p, flags: g } = c;
                        return i(new RegExp(p, g), a);
                    }
                    case Ou: {
                        const p = i(new Map(), a);
                        for (const [g, m] of c) p.set(o(g), o(m));
                        return p;
                    }
                    case Lu: {
                        const p = i(new Set(), a);
                        for (const g of c) p.add(o(g));
                        return p;
                    }
                    case Kp: {
                        const { name: p, message: g } = c;
                        return i(new wh[p](g), a);
                    }
                    case Gp:
                        return i(BigInt(c), a);
                    case "BigInt":
                        return i(Object(BigInt(c)), a);
                }
                return i(new wh[u](c), a);
            };
        return o;
    },
    kh = (t) => Ek(new Map(), t)(0),
    Vr = "",
    { toString: Ck } = {},
    { keys: jk } = Object,
    Vi = (t) => {
        const r = typeof t;
        if (r !== "object" || !t) return [Do, r];
        const i = Ck.call(t).slice(8, -1);
        switch (i) {
            case "Array":
                return [jo, Vr];
            case "Object":
                return [Ao, Vr];
            case "Date":
                return [Pu, Vr];
            case "RegExp":
                return [Iu, Vr];
            case "Map":
                return [Ou, Vr];
            case "Set":
                return [Lu, Vr];
        }
        return i.includes("Array")
            ? [jo, i]
            : i.includes("Error")
            ? [Kp, i]
            : [Ao, i];
    },
    go = ([t, r]) => t === Do && (r === "function" || r === "symbol"),
    Ak = (t, r, i, o) => {
        const a = (c, p) => {
                const g = o.push(c) - 1;
                return i.set(p, g), g;
            },
            u = (c) => {
                if (i.has(c)) return i.get(c);
                let [p, g] = Vi(c);
                switch (p) {
                    case Do: {
                        let y = c;
                        switch (g) {
                            case "bigint":
                                (p = Gp), (y = c.toString());
                                break;
                            case "function":
                            case "symbol":
                                if (t)
                                    throw new TypeError(
                                        "unable to serialize " + g
                                    );
                                y = null;
                                break;
                            case "undefined":
                                return a([$p], c);
                        }
                        return a([p, y], c);
                    }
                    case jo: {
                        if (g) return a([g, [...c]], c);
                        const y = [],
                            x = a([p, y], c);
                        for (const k of c) y.push(u(k));
                        return x;
                    }
                    case Ao: {
                        if (g)
                            switch (g) {
                                case "BigInt":
                                    return a([g, c.toString()], c);
                                case "Boolean":
                                case "Number":
                                case "String":
                                    return a([g, c.valueOf()], c);
                            }
                        if (r && "toJSON" in c) return u(c.toJSON());
                        const y = [],
                            x = a([p, y], c);
                        for (const k of jk(c))
                            (t || !go(Vi(c[k]))) && y.push([u(k), u(c[k])]);
                        return x;
                    }
                    case Pu:
                        return a([p, c.toISOString()], c);
                    case Iu: {
                        const { source: y, flags: x } = c;
                        return a([p, { source: y, flags: x }], c);
                    }
                    case Ou: {
                        const y = [],
                            x = a([p, y], c);
                        for (const [k, w] of c)
                            (t || !(go(Vi(k)) || go(Vi(w)))) &&
                                y.push([u(k), u(w)]);
                        return x;
                    }
                    case Lu: {
                        const y = [],
                            x = a([p, y], c);
                        for (const k of c) (t || !go(Vi(k))) && y.push(u(k));
                        return x;
                    }
                }
                const { message: m } = c;
                return a([p, { name: g, message: m }], c);
            };
        return u;
    },
    Sh = (t, { json: r, lossy: i } = {}) => {
        const o = [];
        return Ak(!(r || i), !!r, new Map(), o)(t), o;
    },
    To =
        typeof structuredClone == "function"
            ? (t, r) =>
                  r && ("json" in r || "lossy" in r)
                      ? kh(Sh(t, r))
                      : structuredClone(t)
            : (t, r) => kh(Sh(t, r));
function Tk(t, r) {
    const i = [{ type: "text", value: "↩" }];
    return (
        r > 1 &&
            i.push({
                type: "element",
                tagName: "sup",
                properties: {},
                children: [{ type: "text", value: String(r) }],
            }),
        i
    );
}
function Nk(t, r) {
    return "Back to reference " + (t + 1) + (r > 1 ? "-" + r : "");
}
function Rk(t) {
    const r =
            typeof t.options.clobberPrefix == "string"
                ? t.options.clobberPrefix
                : "user-content-",
        i = t.options.footnoteBackContent || Tk,
        o = t.options.footnoteBackLabel || Nk,
        a = t.options.footnoteLabel || "Footnotes",
        u = t.options.footnoteLabelTagName || "h2",
        c = t.options.footnoteLabelProperties || { className: ["sr-only"] },
        p = [];
    let g = -1;
    for (; ++g < t.footnoteOrder.length; ) {
        const m = t.footnoteById.get(t.footnoteOrder[g]);
        if (!m) continue;
        const y = t.all(m),
            x = String(m.identifier).toUpperCase(),
            k = Gr(x.toLowerCase());
        let w = 0;
        const j = [],
            T = t.footnoteCounts.get(x);
        for (; T !== void 0 && ++w <= T; ) {
            j.length > 0 && j.push({ type: "text", value: " " });
            let D = typeof i == "string" ? i : i(g, w);
            typeof D == "string" && (D = { type: "text", value: D }),
                j.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                        href: "#" + r + "fnref-" + k + (w > 1 ? "-" + w : ""),
                        dataFootnoteBackref: "",
                        ariaLabel: typeof o == "string" ? o : o(g, w),
                        className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(D) ? D : [D],
                });
        }
        const R = y[y.length - 1];
        if (R && R.type === "element" && R.tagName === "p") {
            const D = R.children[R.children.length - 1];
            D && D.type === "text"
                ? (D.value += " ")
                : R.children.push({ type: "text", value: " " }),
                R.children.push(...j);
        } else y.push(...j);
        const L = {
            type: "element",
            tagName: "li",
            properties: { id: r + "fn-" + k },
            children: t.wrap(y, !0),
        };
        t.patch(m, L), p.push(L);
    }
    if (p.length !== 0)
        return {
            type: "element",
            tagName: "section",
            properties: { dataFootnotes: !0, className: ["footnotes"] },
            children: [
                {
                    type: "element",
                    tagName: u,
                    properties: { ...To(c), id: "footnote-label" },
                    children: [{ type: "text", value: a }],
                },
                {
                    type: "text",
                    value: `
`,
                },
                {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: t.wrap(p, !0),
                },
                {
                    type: "text",
                    value: `
`,
                },
            ],
        };
}
const Zp = function (t) {
    if (t == null) return Lk;
    if (typeof t == "function") return Fo(t);
    if (typeof t == "object") return Array.isArray(t) ? Pk(t) : Ik(t);
    if (typeof t == "string") return Ok(t);
    throw new Error("Expected function, string, or object as test");
};
function Pk(t) {
    const r = [];
    let i = -1;
    for (; ++i < t.length; ) r[i] = Zp(t[i]);
    return Fo(o);
    function o(...a) {
        let u = -1;
        for (; ++u < r.length; ) if (r[u].apply(this, a)) return !0;
        return !1;
    }
}
function Ik(t) {
    const r = t;
    return Fo(i);
    function i(o) {
        const a = o;
        let u;
        for (u in t) if (a[u] !== r[u]) return !1;
        return !0;
    }
}
function Ok(t) {
    return Fo(r);
    function r(i) {
        return i && i.type === t;
    }
}
function Fo(t) {
    return r;
    function r(i, o, a) {
        return !!(
            zk(i) &&
            t.call(this, i, typeof o == "number" ? o : void 0, a || void 0)
        );
    }
}
function Lk() {
    return !0;
}
function zk(t) {
    return t !== null && typeof t == "object" && "type" in t;
}
const em = [],
    bk = !0,
    Eh = !1,
    _k = "skip";
function Dk(t, r, i, o) {
    let a;
    typeof r == "function" && typeof i != "function"
        ? ((o = i), (i = r))
        : (a = r);
    const u = Zp(a),
        c = o ? -1 : 1;
    p(t, void 0, [])();
    function p(g, m, y) {
        const x = g && typeof g == "object" ? g : {};
        if (typeof x.type == "string") {
            const w =
                typeof x.tagName == "string"
                    ? x.tagName
                    : typeof x.name == "string"
                    ? x.name
                    : void 0;
            Object.defineProperty(k, "name", {
                value: "node (" + (g.type + (w ? "<" + w + ">" : "")) + ")",
            });
        }
        return k;
        function k() {
            let w = em,
                j,
                T,
                R;
            if (
                (!r || u(g, m, y[y.length - 1] || void 0)) &&
                ((w = Fk(i(g, y))), w[0] === Eh)
            )
                return w;
            if ("children" in g && g.children) {
                const L = g;
                if (L.children && w[0] !== _k)
                    for (
                        T = (o ? L.children.length : -1) + c, R = y.concat(L);
                        T > -1 && T < L.children.length;

                    ) {
                        const D = L.children[T];
                        if (((j = p(D, T, R)()), j[0] === Eh)) return j;
                        T = typeof j[1] == "number" ? j[1] : T + c;
                    }
            }
            return w;
        }
    }
}
function Fk(t) {
    return Array.isArray(t)
        ? t
        : typeof t == "number"
        ? [bk, t]
        : t == null
        ? em
        : [t];
}
function tm(t, r, i, o) {
    let a, u, c;
    typeof r == "function"
        ? ((u = void 0), (c = r), (a = i))
        : ((u = r), (c = i), (a = o)),
        Dk(t, u, p, a);
    function p(g, m) {
        const y = m[m.length - 1],
            x = y ? y.children.indexOf(g) : void 0;
        return c(g, x, y);
    }
}
const au = {}.hasOwnProperty,
    Uk = {};
function Mk(t, r) {
    const i = r || Uk,
        o = new Map(),
        a = new Map(),
        u = new Map(),
        c = { ...Sk, ...i.handlers },
        p = {
            all: m,
            applyData: Vk,
            definitionById: o,
            footnoteById: a,
            footnoteCounts: u,
            footnoteOrder: [],
            handlers: c,
            one: g,
            options: i,
            patch: Bk,
            wrap: Wk,
        };
    return (
        tm(t, function (y) {
            if (y.type === "definition" || y.type === "footnoteDefinition") {
                const x = y.type === "definition" ? o : a,
                    k = String(y.identifier).toUpperCase();
                x.has(k) || x.set(k, y);
            }
        }),
        p
    );
    function g(y, x) {
        const k = y.type,
            w = p.handlers[k];
        if (au.call(p.handlers, k) && w) return w(p, y, x);
        if (p.options.passThrough && p.options.passThrough.includes(k)) {
            if ("children" in y) {
                const { children: T, ...R } = y,
                    L = To(R);
                return (L.children = p.all(y)), L;
            }
            return To(y);
        }
        return (p.options.unknownHandler || Hk)(p, y, x);
    }
    function m(y) {
        const x = [];
        if ("children" in y) {
            const k = y.children;
            let w = -1;
            for (; ++w < k.length; ) {
                const j = p.one(k[w], y);
                if (j) {
                    if (
                        w &&
                        k[w - 1].type === "break" &&
                        (!Array.isArray(j) &&
                            j.type === "text" &&
                            (j.value = Ch(j.value)),
                        !Array.isArray(j) && j.type === "element")
                    ) {
                        const T = j.children[0];
                        T && T.type === "text" && (T.value = Ch(T.value));
                    }
                    Array.isArray(j) ? x.push(...j) : x.push(j);
                }
            }
        }
        return x;
    }
}
function Bk(t, r) {
    t.position && (r.position = Sw(t));
}
function Vk(t, r) {
    let i = r;
    if (t && t.data) {
        const o = t.data.hName,
            a = t.data.hChildren,
            u = t.data.hProperties;
        if (typeof o == "string")
            if (i.type === "element") i.tagName = o;
            else {
                const c = "children" in i ? i.children : [i];
                i = {
                    type: "element",
                    tagName: o,
                    properties: {},
                    children: c,
                };
            }
        i.type === "element" && u && Object.assign(i.properties, To(u)),
            "children" in i &&
                i.children &&
                a !== null &&
                a !== void 0 &&
                (i.children = a);
    }
    return i;
}
function Hk(t, r) {
    const i = r.data || {},
        o =
            "value" in r &&
            !(au.call(i, "hProperties") || au.call(i, "hChildren"))
                ? { type: "text", value: r.value }
                : {
                      type: "element",
                      tagName: "div",
                      properties: {},
                      children: t.all(r),
                  };
    return t.patch(r, o), t.applyData(r, o);
}
function Wk(t, r) {
    const i = [];
    let o = -1;
    for (
        r &&
        i.push({
            type: "text",
            value: `
`,
        });
        ++o < t.length;

    )
        o &&
            i.push({
                type: "text",
                value: `
`,
            }),
            i.push(t[o]);
    return (
        r &&
            t.length > 0 &&
            i.push({
                type: "text",
                value: `
`,
            }),
        i
    );
}
function Ch(t) {
    let r = 0,
        i = t.charCodeAt(r);
    for (; i === 9 || i === 32; ) r++, (i = t.charCodeAt(r));
    return t.slice(r);
}
function jh(t, r) {
    const i = Mk(t, r),
        o = i.one(t, void 0),
        a = Rk(i),
        u = Array.isArray(o)
            ? { type: "root", children: o }
            : o || { type: "root", children: [] };
    return (
        a &&
            u.children.push(
                {
                    type: "text",
                    value: `
`,
                },
                a
            ),
        u
    );
}
function Xk(t, r) {
    return t && "run" in t
        ? async function (i, o) {
              const a = jh(i, { file: o, ...r });
              await t.run(a, o);
          }
        : function (i, o) {
              return jh(i, { file: o, ...(t || r) });
          };
}
function Ah(t) {
    if (t) throw t;
}
var Ua, Th;
function Qk() {
    if (Th) return Ua;
    Th = 1;
    var t = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString,
        i = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        a = function (m) {
            return typeof Array.isArray == "function"
                ? Array.isArray(m)
                : r.call(m) === "[object Array]";
        },
        u = function (m) {
            if (!m || r.call(m) !== "[object Object]") return !1;
            var y = t.call(m, "constructor"),
                x =
                    m.constructor &&
                    m.constructor.prototype &&
                    t.call(m.constructor.prototype, "isPrototypeOf");
            if (m.constructor && !y && !x) return !1;
            var k;
            for (k in m);
            return typeof k > "u" || t.call(m, k);
        },
        c = function (m, y) {
            i && y.name === "__proto__"
                ? i(m, y.name, {
                      enumerable: !0,
                      configurable: !0,
                      value: y.newValue,
                      writable: !0,
                  })
                : (m[y.name] = y.newValue);
        },
        p = function (m, y) {
            if (y === "__proto__")
                if (t.call(m, y)) {
                    if (o) return o(m, y).value;
                } else return;
            return m[y];
        };
    return (
        (Ua = function g() {
            var m,
                y,
                x,
                k,
                w,
                j,
                T = arguments[0],
                R = 1,
                L = arguments.length,
                D = !1;
            for (
                typeof T == "boolean" &&
                    ((D = T), (T = arguments[1] || {}), (R = 2)),
                    (T == null ||
                        (typeof T != "object" && typeof T != "function")) &&
                        (T = {});
                R < L;
                ++R
            )
                if (((m = arguments[R]), m != null))
                    for (y in m)
                        (x = p(T, y)),
                            (k = p(m, y)),
                            T !== k &&
                                (D && k && (u(k) || (w = a(k)))
                                    ? (w
                                          ? ((w = !1), (j = x && a(x) ? x : []))
                                          : (j = x && u(x) ? x : {}),
                                      c(T, { name: y, newValue: g(D, j, k) }))
                                    : typeof k < "u" &&
                                      c(T, { name: y, newValue: k }));
            return T;
        }),
        Ua
    );
}
var Yk = Qk();
const Ma = No(Yk);
function uu(t) {
    if (typeof t != "object" || t === null) return !1;
    const r = Object.getPrototypeOf(t);
    return (
        (r === null ||
            r === Object.prototype ||
            Object.getPrototypeOf(r) === null) &&
        !(Symbol.toStringTag in t) &&
        !(Symbol.iterator in t)
    );
}
function qk() {
    const t = [],
        r = { run: i, use: o };
    return r;
    function i(...a) {
        let u = -1;
        const c = a.pop();
        if (typeof c != "function")
            throw new TypeError("Expected function as last argument, not " + c);
        p(null, ...a);
        function p(g, ...m) {
            const y = t[++u];
            let x = -1;
            if (g) {
                c(g);
                return;
            }
            for (; ++x < a.length; )
                (m[x] === null || m[x] === void 0) && (m[x] = a[x]);
            (a = m), y ? Jk(y, p)(...m) : c(null, ...m);
        }
    }
    function o(a) {
        if (typeof a != "function")
            throw new TypeError(
                "Expected `middelware` to be a function, not " + a
            );
        return t.push(a), r;
    }
}
function Jk(t, r) {
    let i;
    return o;
    function o(...c) {
        const p = t.length > c.length;
        let g;
        p && c.push(a);
        try {
            g = t.apply(this, c);
        } catch (m) {
            const y = m;
            if (p && i) throw y;
            return a(y);
        }
        p ||
            (g && g.then && typeof g.then == "function"
                ? g.then(u, a)
                : g instanceof Error
                ? a(g)
                : u(g));
    }
    function a(c, ...p) {
        i || ((i = !0), r(c, ...p));
    }
    function u(c) {
        a(null, c);
    }
}
const rn = { basename: $k, dirname: Kk, extname: Gk, join: Zk, sep: "/" };
function $k(t, r) {
    if (r !== void 0 && typeof r != "string")
        throw new TypeError('"ext" argument must be a string');
    el(t);
    let i = 0,
        o = -1,
        a = t.length,
        u;
    if (r === void 0 || r.length === 0 || r.length > t.length) {
        for (; a--; )
            if (t.codePointAt(a) === 47) {
                if (u) {
                    i = a + 1;
                    break;
                }
            } else o < 0 && ((u = !0), (o = a + 1));
        return o < 0 ? "" : t.slice(i, o);
    }
    if (r === t) return "";
    let c = -1,
        p = r.length - 1;
    for (; a--; )
        if (t.codePointAt(a) === 47) {
            if (u) {
                i = a + 1;
                break;
            }
        } else
            c < 0 && ((u = !0), (c = a + 1)),
                p > -1 &&
                    (t.codePointAt(a) === r.codePointAt(p--)
                        ? p < 0 && (o = a)
                        : ((p = -1), (o = c)));
    return i === o ? (o = c) : o < 0 && (o = t.length), t.slice(i, o);
}
function Kk(t) {
    if ((el(t), t.length === 0)) return ".";
    let r = -1,
        i = t.length,
        o;
    for (; --i; )
        if (t.codePointAt(i) === 47) {
            if (o) {
                r = i;
                break;
            }
        } else o || (o = !0);
    return r < 0
        ? t.codePointAt(0) === 47
            ? "/"
            : "."
        : r === 1 && t.codePointAt(0) === 47
        ? "//"
        : t.slice(0, r);
}
function Gk(t) {
    el(t);
    let r = t.length,
        i = -1,
        o = 0,
        a = -1,
        u = 0,
        c;
    for (; r--; ) {
        const p = t.codePointAt(r);
        if (p === 47) {
            if (c) {
                o = r + 1;
                break;
            }
            continue;
        }
        i < 0 && ((c = !0), (i = r + 1)),
            p === 46
                ? a < 0
                    ? (a = r)
                    : u !== 1 && (u = 1)
                : a > -1 && (u = -1);
    }
    return a < 0 || i < 0 || u === 0 || (u === 1 && a === i - 1 && a === o + 1)
        ? ""
        : t.slice(a, i);
}
function Zk(...t) {
    let r = -1,
        i;
    for (; ++r < t.length; )
        el(t[r]), t[r] && (i = i === void 0 ? t[r] : i + "/" + t[r]);
    return i === void 0 ? "." : eS(i);
}
function eS(t) {
    el(t);
    const r = t.codePointAt(0) === 47;
    let i = tS(t, !r);
    return (
        i.length === 0 && !r && (i = "."),
        i.length > 0 && t.codePointAt(t.length - 1) === 47 && (i += "/"),
        r ? "/" + i : i
    );
}
function tS(t, r) {
    let i = "",
        o = 0,
        a = -1,
        u = 0,
        c = -1,
        p,
        g;
    for (; ++c <= t.length; ) {
        if (c < t.length) p = t.codePointAt(c);
        else {
            if (p === 47) break;
            p = 47;
        }
        if (p === 47) {
            if (!(a === c - 1 || u === 1))
                if (a !== c - 1 && u === 2) {
                    if (
                        i.length < 2 ||
                        o !== 2 ||
                        i.codePointAt(i.length - 1) !== 46 ||
                        i.codePointAt(i.length - 2) !== 46
                    ) {
                        if (i.length > 2) {
                            if (
                                ((g = i.lastIndexOf("/")), g !== i.length - 1)
                            ) {
                                g < 0
                                    ? ((i = ""), (o = 0))
                                    : ((i = i.slice(0, g)),
                                      (o = i.length - 1 - i.lastIndexOf("/"))),
                                    (a = c),
                                    (u = 0);
                                continue;
                            }
                        } else if (i.length > 0) {
                            (i = ""), (o = 0), (a = c), (u = 0);
                            continue;
                        }
                    }
                    r && ((i = i.length > 0 ? i + "/.." : ".."), (o = 2));
                } else
                    i.length > 0
                        ? (i += "/" + t.slice(a + 1, c))
                        : (i = t.slice(a + 1, c)),
                        (o = c - a - 1);
            (a = c), (u = 0);
        } else p === 46 && u > -1 ? u++ : (u = -1);
    }
    return i;
}
function el(t) {
    if (typeof t != "string")
        throw new TypeError(
            "Path must be a string. Received " + JSON.stringify(t)
        );
}
const nS = { cwd: rS };
function rS() {
    return "/";
}
function cu(t) {
    return !!(
        t !== null &&
        typeof t == "object" &&
        "href" in t &&
        t.href &&
        "protocol" in t &&
        t.protocol &&
        t.auth === void 0
    );
}
function iS(t) {
    if (typeof t == "string") t = new URL(t);
    else if (!cu(t)) {
        const r = new TypeError(
            'The "path" argument must be of type string or an instance of URL. Received `' +
                t +
                "`"
        );
        throw ((r.code = "ERR_INVALID_ARG_TYPE"), r);
    }
    if (t.protocol !== "file:") {
        const r = new TypeError("The URL must be of scheme file");
        throw ((r.code = "ERR_INVALID_URL_SCHEME"), r);
    }
    return lS(t);
}
function lS(t) {
    if (t.hostname !== "") {
        const o = new TypeError(
            'File URL host must be "localhost" or empty on darwin'
        );
        throw ((o.code = "ERR_INVALID_FILE_URL_HOST"), o);
    }
    const r = t.pathname;
    let i = -1;
    for (; ++i < r.length; )
        if (r.codePointAt(i) === 37 && r.codePointAt(i + 1) === 50) {
            const o = r.codePointAt(i + 2);
            if (o === 70 || o === 102) {
                const a = new TypeError(
                    "File URL path must not include encoded / characters"
                );
                throw ((a.code = "ERR_INVALID_FILE_URL_PATH"), a);
            }
        }
    return decodeURIComponent(r);
}
const Ba = ["history", "path", "basename", "stem", "extname", "dirname"];
class nm {
    constructor(r) {
        let i;
        r
            ? cu(r)
                ? (i = { path: r })
                : typeof r == "string" || oS(r)
                ? (i = { value: r })
                : (i = r)
            : (i = {}),
            (this.cwd = "cwd" in i ? "" : nS.cwd()),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
        let o = -1;
        for (; ++o < Ba.length; ) {
            const u = Ba[o];
            u in i &&
                i[u] !== void 0 &&
                i[u] !== null &&
                (this[u] = u === "history" ? [...i[u]] : i[u]);
        }
        let a;
        for (a in i) Ba.includes(a) || (this[a] = i[a]);
    }
    get basename() {
        return typeof this.path == "string" ? rn.basename(this.path) : void 0;
    }
    set basename(r) {
        Ha(r, "basename"),
            Va(r, "basename"),
            (this.path = rn.join(this.dirname || "", r));
    }
    get dirname() {
        return typeof this.path == "string" ? rn.dirname(this.path) : void 0;
    }
    set dirname(r) {
        Nh(this.basename, "dirname"),
            (this.path = rn.join(r || "", this.basename));
    }
    get extname() {
        return typeof this.path == "string" ? rn.extname(this.path) : void 0;
    }
    set extname(r) {
        if ((Va(r, "extname"), Nh(this.dirname, "extname"), r)) {
            if (r.codePointAt(0) !== 46)
                throw new Error("`extname` must start with `.`");
            if (r.includes(".", 1))
                throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = rn.join(this.dirname, this.stem + (r || ""));
    }
    get path() {
        return this.history[this.history.length - 1];
    }
    set path(r) {
        cu(r) && (r = iS(r)),
            Ha(r, "path"),
            this.path !== r && this.history.push(r);
    }
    get stem() {
        return typeof this.path == "string"
            ? rn.basename(this.path, this.extname)
            : void 0;
    }
    set stem(r) {
        Ha(r, "stem"),
            Va(r, "stem"),
            (this.path = rn.join(this.dirname || "", r + (this.extname || "")));
    }
    fail(r, i, o) {
        const a = this.message(r, i, o);
        throw ((a.fatal = !0), a);
    }
    info(r, i, o) {
        const a = this.message(r, i, o);
        return (a.fatal = void 0), a;
    }
    message(r, i, o) {
        const a = new ht(r, i, o);
        return (
            this.path &&
                ((a.name = this.path + ":" + a.name), (a.file = this.path)),
            (a.fatal = !1),
            this.messages.push(a),
            a
        );
    }
    toString(r) {
        return this.value === void 0
            ? ""
            : typeof this.value == "string"
            ? this.value
            : new TextDecoder(r || void 0).decode(this.value);
    }
}
function Va(t, r) {
    if (t && t.includes(rn.sep))
        throw new Error(
            "`" + r + "` cannot be a path: did not expect `" + rn.sep + "`"
        );
}
function Ha(t, r) {
    if (!t) throw new Error("`" + r + "` cannot be empty");
}
function Nh(t, r) {
    if (!t)
        throw new Error("Setting `" + r + "` requires `path` to be set too");
}
function oS(t) {
    return !!(
        t &&
        typeof t == "object" &&
        "byteLength" in t &&
        "byteOffset" in t
    );
}
const sS = function (t) {
        const o = this.constructor.prototype,
            a = o[t],
            u = function () {
                return a.apply(u, arguments);
            };
        return Object.setPrototypeOf(u, o), u;
    },
    aS = {}.hasOwnProperty;
class zu extends sS {
    constructor() {
        super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = qk());
    }
    copy() {
        const r = new zu();
        let i = -1;
        for (; ++i < this.attachers.length; ) {
            const o = this.attachers[i];
            r.use(...o);
        }
        return r.data(Ma(!0, {}, this.namespace)), r;
    }
    data(r, i) {
        return typeof r == "string"
            ? arguments.length === 2
                ? (Qa("data", this.frozen), (this.namespace[r] = i), this)
                : (aS.call(this.namespace, r) && this.namespace[r]) || void 0
            : r
            ? (Qa("data", this.frozen), (this.namespace = r), this)
            : this.namespace;
    }
    freeze() {
        if (this.frozen) return this;
        const r = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
            const [i, ...o] = this.attachers[this.freezeIndex];
            if (o[0] === !1) continue;
            o[0] === !0 && (o[0] = void 0);
            const a = i.call(r, ...o);
            typeof a == "function" && this.transformers.use(a);
        }
        return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
        );
    }
    parse(r) {
        this.freeze();
        const i = yo(r),
            o = this.parser || this.Parser;
        return Wa("parse", o), o(String(i), i);
    }
    process(r, i) {
        const o = this;
        return (
            this.freeze(),
            Wa("process", this.parser || this.Parser),
            Xa("process", this.compiler || this.Compiler),
            i ? a(void 0, i) : new Promise(a)
        );
        function a(u, c) {
            const p = yo(r),
                g = o.parse(p);
            o.run(g, p, function (y, x, k) {
                if (y || !x || !k) return m(y);
                const w = x,
                    j = o.stringify(w, k);
                fS(j) ? (k.value = j) : (k.result = j), m(y, k);
            });
            function m(y, x) {
                y || !x ? c(y) : u ? u(x) : i(void 0, x);
            }
        }
    }
    processSync(r) {
        let i = !1,
            o;
        return (
            this.freeze(),
            Wa("processSync", this.parser || this.Parser),
            Xa("processSync", this.compiler || this.Compiler),
            this.process(r, a),
            Ph("processSync", "process", i),
            o
        );
        function a(u, c) {
            (i = !0), Ah(u), (o = c);
        }
    }
    run(r, i, o) {
        Rh(r), this.freeze();
        const a = this.transformers;
        return (
            !o && typeof i == "function" && ((o = i), (i = void 0)),
            o ? u(void 0, o) : new Promise(u)
        );
        function u(c, p) {
            const g = yo(i);
            a.run(r, g, m);
            function m(y, x, k) {
                const w = x || r;
                y ? p(y) : c ? c(w) : o(void 0, w, k);
            }
        }
    }
    runSync(r, i) {
        let o = !1,
            a;
        return this.run(r, i, u), Ph("runSync", "run", o), a;
        function u(c, p) {
            Ah(c), (a = p), (o = !0);
        }
    }
    stringify(r, i) {
        this.freeze();
        const o = yo(i),
            a = this.compiler || this.Compiler;
        return Xa("stringify", a), Rh(r), a(r, o);
    }
    use(r, ...i) {
        const o = this.attachers,
            a = this.namespace;
        if ((Qa("use", this.frozen), r != null))
            if (typeof r == "function") g(r, i);
            else if (typeof r == "object") Array.isArray(r) ? p(r) : c(r);
            else throw new TypeError("Expected usable value, not `" + r + "`");
        return this;
        function u(m) {
            if (typeof m == "function") g(m, []);
            else if (typeof m == "object")
                if (Array.isArray(m)) {
                    const [y, ...x] = m;
                    g(y, x);
                } else c(m);
            else throw new TypeError("Expected usable value, not `" + m + "`");
        }
        function c(m) {
            if (!("plugins" in m) && !("settings" in m))
                throw new Error(
                    "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
                );
            p(m.plugins),
                m.settings && (a.settings = Ma(!0, a.settings, m.settings));
        }
        function p(m) {
            let y = -1;
            if (m != null)
                if (Array.isArray(m))
                    for (; ++y < m.length; ) {
                        const x = m[y];
                        u(x);
                    }
                else
                    throw new TypeError(
                        "Expected a list of plugins, not `" + m + "`"
                    );
        }
        function g(m, y) {
            let x = -1,
                k = -1;
            for (; ++x < o.length; )
                if (o[x][0] === m) {
                    k = x;
                    break;
                }
            if (k === -1) o.push([m, ...y]);
            else if (y.length > 0) {
                let [w, ...j] = y;
                const T = o[k][1];
                uu(T) && uu(w) && (w = Ma(!0, T, w)), (o[k] = [m, w, ...j]);
            }
        }
    }
}
const uS = new zu().freeze();
function Wa(t, r) {
    if (typeof r != "function")
        throw new TypeError("Cannot `" + t + "` without `parser`");
}
function Xa(t, r) {
    if (typeof r != "function")
        throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Qa(t, r) {
    if (r)
        throw new Error(
            "Cannot call `" +
                t +
                "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
        );
}
function Rh(t) {
    if (!uu(t) || typeof t.type != "string")
        throw new TypeError("Expected node, got `" + t + "`");
}
function Ph(t, r, i) {
    if (!i)
        throw new Error("`" + t + "` finished async. Use `" + r + "` instead");
}
function yo(t) {
    return cS(t) ? t : new nm(t);
}
function cS(t) {
    return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function fS(t) {
    return typeof t == "string" || dS(t);
}
function dS(t) {
    return !!(
        t &&
        typeof t == "object" &&
        "byteLength" in t &&
        "byteOffset" in t
    );
}
const hS = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    Ih = [],
    Oh = { allowDangerousHtml: !0 },
    pS = /^(https?|ircs?|mailto|xmpp)$/i,
    mS = [
        { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
        {
            from: "allowDangerousHtml",
            id: "remove-buggy-html-in-markdown-parser",
        },
        {
            from: "allowNode",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowElement",
        },
        {
            from: "allowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "allowedElements",
        },
        {
            from: "disallowedTypes",
            id: "replace-allownode-allowedtypes-and-disallowedtypes",
            to: "disallowedElements",
        },
        { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
        { from: "includeElementIndex", id: "#remove-includeelementindex" },
        {
            from: "includeNodeIndex",
            id: "change-includenodeindex-to-includeelementindex",
        },
        { from: "linkTarget", id: "remove-linktarget" },
        {
            from: "plugins",
            id: "change-plugins-to-remarkplugins",
            to: "remarkPlugins",
        },
        { from: "rawSourcePos", id: "#remove-rawsourcepos" },
        {
            from: "renderers",
            id: "change-renderers-to-components",
            to: "components",
        },
        { from: "source", id: "change-source-to-children", to: "children" },
        { from: "sourcePos", id: "#remove-sourcepos" },
        {
            from: "transformImageUri",
            id: "#add-urltransform",
            to: "urlTransform",
        },
        {
            from: "transformLinkUri",
            id: "#add-urltransform",
            to: "urlTransform",
        },
    ];
function Qr(t) {
    const r = t.allowedElements,
        i = t.allowElement,
        o = t.children || "",
        a = t.className,
        u = t.components,
        c = t.disallowedElements,
        p = t.rehypePlugins || Ih,
        g = t.remarkPlugins || Ih,
        m = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...Oh } : Oh,
        y = t.skipHtml,
        x = t.unwrapDisallowed,
        k = t.urlTransform || gS,
        w = uS().use($0).use(g).use(Xk, m).use(p),
        j = new nm();
    typeof o == "string" && (j.value = o);
    for (const D of mS)
        Object.hasOwn(t, D.from) &&
            ("" +
                D.from +
                (D.to ? "use `" + D.to + "` instead" : "remove it") +
                hS +
                D.id,
            void 0);
    const T = w.parse(j);
    let R = w.runSync(T, j);
    return (
        a &&
            (R = {
                type: "element",
                tagName: "div",
                properties: { className: a },
                children: R.type === "root" ? R.children : [R],
            }),
        tm(R, L),
        Nw(R, {
            Fragment: h.Fragment,
            components: u,
            ignoreInvalidStyle: !0,
            jsx: h.jsx,
            jsxs: h.jsxs,
            passKeys: !0,
            passNode: !0,
        })
    );
    function L(D, U, J) {
        if (D.type === "raw" && J && typeof U == "number")
            return (
                y
                    ? J.children.splice(U, 1)
                    : (J.children[U] = { type: "text", value: D.value }),
                U
            );
        if (D.type === "element") {
            let $;
            for ($ in _a)
                if (Object.hasOwn(_a, $) && Object.hasOwn(D.properties, $)) {
                    const _ = D.properties[$],
                        ie = _a[$];
                    (ie === null || ie.includes(D.tagName)) &&
                        (D.properties[$] = k(String(_ || ""), $, D));
                }
        }
        if (D.type === "element") {
            let $ = r ? !r.includes(D.tagName) : c ? c.includes(D.tagName) : !1;
            if (
                (!$ && i && typeof U == "number" && ($ = !i(D, U, J)),
                $ && J && typeof U == "number")
            )
                return (
                    x && D.children
                        ? J.children.splice(U, 1, ...D.children)
                        : J.children.splice(U, 1),
                    U
                );
        }
    }
}
function gS(t) {
    const r = t.indexOf(":"),
        i = t.indexOf("?"),
        o = t.indexOf("#"),
        a = t.indexOf("/");
    return r === -1 ||
        (a !== -1 && r > a) ||
        (i !== -1 && r > i) ||
        (o !== -1 && r > o) ||
        pS.test(t.slice(0, r))
        ? t
        : "";
}
const rm =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAABWWlDQ1BJQ0MgUHJvZmlsZQAAKJFtkL1Lw1AUxU+0UqxFRF0EhxQXrbGUWFAniUWK6BCqUnUyTWuipPWRxC8E/wI3wdml7oLQRcTRvaAiuDnoLGTREu9r1bbqg8P9cTjvvcsB2gIaY1YAQKHo2unUjLiyuiYGXxBGCJ2IYlTTHaao6gJF8D1bj3cHgc/KGH+r17lIPe8+vQ5clcxKbHr9b77lhHJ5R6f5QYrqzHYBYZhY3XMZ533ifpuWIj7mbNT5jHO2zpe1zFI6SXxL3KObWo74gVjKNvlGExesHf1rB759OF9cXqTZTRrEPBTImCCJmKVu/s8matkktsFwABubMGDCpTsKOQwW8sRzKEJHDBKxjDgpwTv+3V3Dcw6BqSP6aqvhZYaAUgToO2l40iQQoX6v40yztZ9GBS/gbIzLde4qAx2nvv+WAYIjQPXe99/Lvl89B9ofgRvvE98FYPZqUzX1AAAAYmVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADkoYABwAAABIAAABQoAIABAAAAAEAAABUoAMABAAAAAEAAABUAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdCgu46cAAAI7aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44NjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj44OTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqQLJXmAAAF8klEQVR4Ae2dX2gcRRzHf9lc/t3ln8kZi4jni4FUtDUgiJr2pVUfakuqUFraUhQRpLUULByV+mAIBFpUJNqHYFHU1CJarWjA2IemtAgqVSHF9kFMDSptk156l7szuVzc7+Kse3t3e7u5nbvZP/Oy839nPvvb3/1mZmeuZll2ZNKlJyco9ePXlP5pgrIzN0yWcl62mmATNXSvocbejdTY00e1XfeY7kSNGaAAGf/8DVq4Mmm6YjdlbHpkI7X1HzQF1hDo0rXfaXbkgGdB6oWi5ak91PrMIX10TrgoUEjl7PA+Wk6mcgp4PRC4K0Lh/SNFpbUg0PmzH1Ds+IDX2RXtv9TZSV3REwWhSvpSPkw9kfxwdmaGrg1tJ6hEvcuRUGT4++Dj+jx+uAgBRVIHxqg21K7mUCU0Ox+Tqe9QE3xPaQKQ1FufDuVkVIHGx95xtW2Z02sbA8kzn1H60lm1RgUoXvXEl++pkb7HGoH4qTfVAgrQuVNH1AjfY50ABjxMShWg/1y+aL0Wv0QOASalEgx4N4/Lc3rNMQApXZJ/2CVMdvjOHgILk+dIyvxx2Z7a/Foo/et5CixO/8YdBabDQhu2UXPfDmW4tjj1MyV/+Irmvz3pqrmC7MyfVDO9+17T86ErIQ+Yt0ffp7rI2rziMNdgYaQujOelOTGiTp44UQ17Xh1o3vJ8QZi4HyZuO154m1Yd+YYCnWFeTahYvUupBH+god5NJTsEsHe8foHanz3seLDcJdTK8kFo/S4KR0epefOekg9B1AzcgVrtOB5A29OHFDWApQenOeGAMoBMv3bsPeooNSAsUAa26aHNin5t3f6SI8AKD5SBbXlyr6JfRVcDjgEKsEwNwMyCzSeicxRQBhBguwbHhTSzHAmUgYWZBftVJDPL0UAZWJHMLFcABVimX7te+6Rq1kCgcxX/oSeTokpd6yJrqjqMdY2E6h8YG8YGN2zVJ3ENuxYoqEEN3LZrqKLDWK5A8WWFCI7p10rMZnEFKgJMbRu0Zhav+VdPAWVwYWZhmpDHMNaTQAGWqQG7Vws8C5RJK8Cy1QKsf5XrPA+UAYR+7dj3Fguu+OoD1aBrXL2eGtc+rImx7vWB6pg19Jb3wbEPVAe03KAPVEdwORnTxVgL+kA1vPBZfGJ8VBNj3esD/Y8ZYMY+fKXsTzsD1p+B+0rgG9mb70bLhgkyngaKj9Xs3nrpSaB4vePydpiEvIPDbuc5oPGxYYqfHuH2XapngNqpJ42k2vVAeehJTwJVbEp5d2C8whvaXCmhvPWkZyQUenJudIAy01NGfeaa5goJrbSeNHoijgbK9GTijDjbcxwLtJp60lUSCj0p8pFHjpFQ6MnYR6/Kh3B9ZyQgVU8THqiIetLoqQkNFCf0zH18lNu42wjMStOEBCq6njSCzRXocippdO+8NOhJp2+m5QtUPuYNZ3FgvdvIOU1PGvWFK1DcGGdxGAFNfX+aYieGbFl+MOpopdK4L9LhLI7rg/15x5pBTyJ+dvhl18DEQ+N+AIFWMuq77yMp2EKZG39VdQJD2yY7/egf91de22AvHOjK/ZXXAnW7vzZ8J0mSC46mEOVBBe7uIamh+0FR2uP4dtRHHiCpLtLj+I6I0oHG1etICq3bSXZ8Ci1Kp6rVDrYBQpLk01lxZrvvyiMQ7NumVKD8yoeeeK682jxeOiBvcMPrDqcAxdCQiazH2ayo+81bXlTLqXZo+85BX5eqWMx7IIjYQcKcChS61I5tJaxiL1zxquMvLbROBYpIvPo4zsd3pQkAZrjAnwPkAEU1OM5HpDM8Snet8jkAs2P/MWV7o/7uOX8MoE3EPOXN44cdtZ6jbT8vfzHJZPcrChQZnLJ0yzrD+4rTIdq2RuXR0P//rKC/pyFQlhmrj4kvjlHGxX9Kxfpa6Ip5zpb+A6qtWSgPizMFlGVOX5qg5LmTlLl6hRar+IUbaw/PK2bhgo9uooaex0yBZG2xBJQVwhULawtTv1Dm+lVtdFE/dqhl528VTRchQQq1UiAcofrI/QV/cMy08V+ytiAMUz9B2QAAAABJRU5ErkJggg==",
    im =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABVCAYAAADXN8NkAAABWWlDQ1BJQ0MgUHJvZmlsZQAAKJFtkL1Lw1AUxU+0UqxFRF0EhxQXrbGUWFAniUWK6BCqUnUyTWuipPWRxC8E/wI3wdml7oLQRcTRvaAiuDnoLGTREu9r1bbqg8P9cTjvvcsB2gIaY1YAQKHo2unUjLiyuiYGXxBGCJ2IYlTTHaao6gJF8D1bj3cHgc/KGH+r17lIPe8+vQ5clcxKbHr9b77lhHJ5R6f5QYrqzHYBYZhY3XMZ533ifpuWIj7mbNT5jHO2zpe1zFI6SXxL3KObWo74gVjKNvlGExesHf1rB759OF9cXqTZTRrEPBTImCCJmKVu/s8matkktsFwABubMGDCpTsKOQwW8sRzKEJHDBKxjDgpwTv+3V3Dcw6BqSP6aqvhZYaAUgToO2l40iQQoX6v40yztZ9GBS/gbIzLde4qAx2nvv+WAYIjQPXe99/Lvl89B9ofgRvvE98FYPZqUzX1AAAAYmVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADkoYABwAAABIAAABQoAIABAAAAAEAAABUoAMABAAAAAEAAABVAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdLNdCXMAAAI7aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44ODwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlVzZXJDb21tZW50PlNjcmVlbnNob3Q8L2V4aWY6VXNlckNvbW1lbnQ+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj44ODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgryDrgUAAAGB0lEQVR4Ae2de2wURRzHf73wD1CVVPsIjbVtFDRW8QExEANVyx9qLfqHxRarMSooNCgpxohig0WoRG0a+ggliKm9NhTRehQTwkNoYgwpxECqoUraWnOkDyEEWvun7nd1Nnt7u3e3tzd3+5j5Z2fnufu53353Zm5mNu0fyZFJN3XtBv01epmGLwzSxOgYTQbHTJZAlJmbYzoP7wxZeTmUmTef8u9fSOnzboqrullmcg30naVDn++nP38fopmpv81kdVza3DsLKO/uQirf/CplFeTGfP1psVhob5Ofelo7XA/RiNqCB4vo5W0bKX/RQqMkSnhEoBPDQWrdtIN++3lAyeBlz9LSJ6JarCHQk18FqLO+1bNWaWQ4GdmZtPVAo6EM6AI9sKONAnv8RmV6Pnz23Ln0QVeDrgT4tHQETC2R8POZ6WnaXrGJRs4PhkWGAMVbXFhmGCPdAAYV7xm1U4AiYs/menWc8EchAKh4aaudArT70310dXxSHSf8MRBAC6i3uVNJKQOFdf7Ue0IJFB5zBHqaOwi9RzgZKKxTuPgJ4NE/5T8sFyADHey/EH9pIqdM4NyxH/8Dije70E7rVgEtHf8jSL7+709bL02UIBPo7z1NvtGLQ0nDMTt9DmXkZCatvmRXNPLrJZp15fI493oxFPZSbTUVLV8s1zUhPRqn/EfoO5d1b68ExymtMm+56QFmM78AYO468aVuFoDt3rXPNU02DJxwB9rQ10lZd0QeoB2S+sQNa9+nq2PO7lgAqNJT0jUhi4EYmI0GE1UUSgO3u898Ta9tr3G8xnIFavb3eKyqjLZ2N1JJRZnZrLZJbyugoAKLfqW+hiAVGCF3mrMdUAYQYKubP3ScDNgWKAMLGYC+rlq3xhH6anugDGz5lrWyvtpdBhwDFGCZDEBf7drj4gr01txsZmAJPQKsXZtZXIEmlKJOYdDXnUe/kPVVJzolQY4GCmLp824m6KtdmlmOB8rMkOnrxqbalOqra4AysI8883hK9dV1QBlY1o1NdjPLtUABlskA9BUDNclwrgbKAAJsbU9zUrqxngDKwKq7sSws0UdPAWXweDazPAkUYJm+1gXaEtrM8ixQZq3s34KKd9axIEtHzwNl9EqrKykRUAVQRlQ6AirmDlhxAqiG3gPFSzUh5k4FUHO8oqYWQDWIMPvDihNAVfTOHD5peU2WAPo/0JHzF6mjrkWFNz6vqbWe8VVh71yYyn2wvo2OdwUScqGeBspjDasngWLWNpYQ8Zi57SmgyVgM7AmgidZJI7G9bX42uR4oD500Aopw1wKFTrZva6LgpeFI95/wONcBTYZORvoVXAMUOnmkpSvlq6ldATTZOulaC4VOYpceO+2J4kgLTbVOusZCmU4e839r281lHGOhP0i79PgdsEuP7YHaUScd+chDJ7ExgtN2mrCdhTpBJ1NmoTM3piLVHRYHnfxmdzuXYbWwyjgFcLXQwbMD8uYm0baOdJpORvotuP6nhM1NDn7SZlg/Hu+mDR/RzqoaWzXODS84hgiuFor6j3cGaPr6dMiuhk7XyUhcua+XV1fOFms5fV28+p7UfsyS5m6h6grdClJ9jz6rk6PUhXndj5WDvowcPssHvQgXG3X77llynxfvncs93/voQ+Rb8uQKLoV7sVBso+TLX7TA8iRTL8LT3jNbYObD4tOVa57TxotzkwSKVz8l55B7Sk+vf0FYqUmA6uRoX7Nd02SgwkrVeMz7a/Z+rGRS+vKwUtaTUWKFJyqBkspV8rdDWEIFKKwUm1CJhj5DE/0IA3z+3ddDEipAEYrVZW+31IUkECf6BAATBqgdmgwBiqxFKxbTe+2fCUvV5yiHMpgwQK3T/XQFEmEryrrytxy/Y6L2hq2eY0TpzcYt8tOsV5YhUCSeunZdmn++N2Hzz/UuwClheLc8u76KSjdURrzkiEBZTrdtnMruK5YjQC4rW0mlb6w2tEp1OTEBZRkA9pe+c9R36Kirv/oFiLffVUgPlyyj4hfLwl48jIfe0RRQbQH4K2NE+i5dvG5S+q6dndycW9KpQPoend7LJtbr/BeytTXU6cqbRgAAAABJRU5ErkJggg==";
function lm() {
    var k, w;
    const [t, r] = W.useState({}),
        [i, o] = W.useState("America/New_York"),
        [a, u] = W.useState(!0),
        [c, p] = W.useState(null),
        g = qr(),
        m = (j) => {
            r((T) => ({ ...T, [j]: !T[j] }));
        };
    g.pathname;
    const [y, x] = W.useState([]);
    return (
        W.useEffect(() => {
            (async () => {
                try {
                    u(!0);
                    const R = (await wu()).sort((L, D) => L.week - D.week);
                    x(R);
                } catch {
                    p("Error loading data");
                } finally {
                    u(!1);
                }
            })();
        }, []),
        h.jsx("div", {
            className: "container inner-column",
            children: h.jsxs("div", {
                className: "calendarV2",
                children: [
                    h.jsxs("div", {
                        className: "scheduleTitle",
                        children: [
                            h.jsxs("div", {
                                className: "courseSchedule-container",
                                children: [
                                    h.jsx("h1", {
                                        children: "Course Schedule",
                                    }),
                                    a
                                        ? h.jsx("p", {
                                              className: "loading-text",
                                              children: "Loading...",
                                          })
                                        : c
                                        ? h.jsx("p", {
                                              children: "Error retrieving data",
                                          })
                                        : h.jsxs("h2", {
                                              children: [
                                                  "Cohort: ",
                                                  (k = y[0]) == null
                                                      ? void 0
                                                      : k.start,
                                                  " – ",
                                                  (w = y[3]) == null
                                                      ? void 0
                                                      : w.end,
                                              ],
                                          }),
                                ],
                            }),
                            h.jsxs("div", {
                                className: "timezone-container",
                                children: [
                                    h.jsxs("div", {
                                        className: "timezoneText",
                                        children: [
                                            h.jsx("p", {
                                                children:
                                                    "All times are currently listed in East Time Zone.",
                                            }),
                                            h.jsx("p", {
                                                children:
                                                    "We welcome folks from other time zones to join us.",
                                            }),
                                            h.jsx("p", {
                                                children:
                                                    "Translate times to your time zone with the drop down below.",
                                            }),
                                        ],
                                    }),
                                    vp(i, o),
                                ],
                            }),
                        ],
                    }),
                    y.map((j, T) =>
                        h.jsx(
                            "div",
                            {
                                className: "test123",
                                children: h.jsx("div", {
                                    id: "scheduleCard",
                                    children: h.jsxs("div", {
                                        id: "WeekNUM",
                                        children: [
                                            h.jsxs("div", {
                                                className: "weekInfo",
                                                children: [
                                                    "Week ",
                                                    j.week,
                                                    " of 4",
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "oddTopicNumber",
                                                className: "headerTitle",
                                                onClick: () => m(T),
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "mobile-row",
                                                        children: [
                                                            h.jsx("img", {
                                                                src: rm,
                                                                className: `scheduleIconImg ${
                                                                    t[T]
                                                                        ? "rotated"
                                                                        : ""
                                                                }`,
                                                                alt: "playButton1",
                                                            }),
                                                            h.jsx("div", {
                                                                className:
                                                                    "classTitle",
                                                                children:
                                                                    j.name1,
                                                            }),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        children: h.jsx("div", {
                                                            className:
                                                                "clickDetails",
                                                            children:
                                                                "Topic Details",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            t[T] &&
                                                h.jsx(h.Fragment, {
                                                    children: h.jsx("div", {
                                                        className:
                                                            "topicDetails",
                                                        children: h.jsx(Qr, {
                                                            children: j.rich1,
                                                        }),
                                                    }),
                                                }),
                                            h.jsxs("div", {
                                                id: "optionalTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date1,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.watchStart1,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.watchEnd1,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Watch the Lecture*",
                                                    }),
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "liveTopicTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date1,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.coachStart1,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.coachEnd1,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Live Coaching with Jared",
                                                    }),
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "oddTopicNumber",
                                                className: "headerTitle",
                                                onClick: () => m(T + 0.1),
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "mobile-row",
                                                        children: [
                                                            h.jsx("img", {
                                                                src: im,
                                                                className: `scheduleIconImg ${
                                                                    t[T + 0.1]
                                                                        ? "rotated"
                                                                        : ""
                                                                }`,
                                                                alt: "playButton2",
                                                            }),
                                                            h.jsx("div", {
                                                                className:
                                                                    "classTitle",
                                                                children:
                                                                    j.name2,
                                                            }),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        children: h.jsx("div", {
                                                            className:
                                                                "clickDetails",
                                                            children:
                                                                "Topic Details",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            t[T + 0.1] &&
                                                h.jsx(h.Fragment, {
                                                    children: h.jsx("div", {
                                                        className:
                                                            "topicDetails",
                                                        children: h.jsx(Qr, {
                                                            children: j.rich2,
                                                        }),
                                                    }),
                                                }),
                                            h.jsxs("div", {
                                                id: "optionalTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date2,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.watchStart2,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.watchEnd2,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Watch the Lecture*",
                                                    }),
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "liveTopicTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date2,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.coachStart2,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.coachEnd2,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Live Coaching with Jared",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            },
                            T
                        )
                    ),
                ],
            }),
        })
    );
}
function yS() {
    return h.jsxs("div", {
        className: "App",
        children: [
            h.jsx(Qn, {}),
            h.jsx(Hn, {}),
            h.jsxs(Wn, {
                children: [
                    h.jsx("p", {
                        children:
                            "Strategic UX Research is changing organizations. Get ready to change yours, too.",
                    }),
                    h.jsx("p", {
                        children:
                            "Lead your organization to become the foremost expert in your users and customers.",
                    }),
                ],
            }),
            h.jsx(dt, { children: h.jsx(Zx, {}) }),
            h.jsxs(xp, {
                children: [
                    h.jsx("p", {
                        children:
                            "“Each day’s takeaways are built upon the next to thread the story and explain a mature way of looking at human-centric design and user experience to the product team. I connected with new friends and members, which was an unexpected bonus!”",
                    }),
                    h.jsx("strong", { children: "T.H., Design Consultant:" }),
                ],
            }),
            h.jsx($x, {}),
            h.jsx(lm, {}),
            h.jsx(Gi, {}),
            h.jsx(Kx, {}),
            h.jsxs(dt, {
                children: [
                    h.jsxs("div", {
                        className: "pricing-content",
                        children: [
                            h.jsx("h2", {
                                children:
                                    "Sign up for the Adv. Strategic UX Research Course",
                            }),
                            h.jsx("p", {
                                children:
                                    "Ready to dive in deep and absorb everything there is to know about Advanced Strategic UX Research?",
                            }),
                            h.jsxs("ul", {
                                children: [
                                    h.jsxs("li", {
                                        children: [
                                            "Individual price per person ",
                                            h.jsx("br", {}),
                                            " $499",
                                        ],
                                    }),
                                    h.jsxs("li", {
                                        children: [
                                            "Team price per person ($100 off each person)",
                                            h.jsx("br", {}),
                                            " $399",
                                        ],
                                    }),
                                    h.jsxs("li", {
                                        children: [
                                            "Unemployed UXer per person ",
                                            h.jsx("br", {}),
                                            " $199",
                                        ],
                                    }),
                                ],
                            }),
                            h.jsxs("div", {
                                children: [
                                    h.jsx("p", {
                                        children: h.jsx("b", {
                                            children: "What’s included:",
                                        }),
                                    }),
                                    h.jsxs("ul", {
                                        children: [
                                            h.jsxs("li", {
                                                children: [
                                                    h.jsx("img", {
                                                        src: "./images/8.png",
                                                        alt: "8",
                                                        className:
                                                            "pricing-list-image",
                                                    }),
                                                    "Eight 1-hour live coaching sessions with Jared Spool.",
                                                ],
                                            }),
                                            h.jsxs("li", {
                                                children: [
                                                    h.jsx("img", {
                                                        src: "./images/8.png",
                                                        alt: "8",
                                                        className:
                                                            "pricing-list-image",
                                                    }),
                                                    "Eight 50-minute recorded lectures (to watch on your own time or together during a scheduled session for each topic).",
                                                ],
                                            }),
                                            h.jsxs("li", {
                                                children: [
                                                    h.jsx("img", {
                                                        src: "./images/5-2.png",
                                                        alt: "book",
                                                        className:
                                                            "pricing-list-image",
                                                    }),
                                                    "Access a library of resources for developing your UX metrics strategy.",
                                                ],
                                            }),
                                            h.jsxs("li", {
                                                children: [
                                                    h.jsx("img", {
                                                        src: "./images/7.png",
                                                        alt: "person with glasses",
                                                        className:
                                                            "pricing-list-image",
                                                    }),
                                                    "A private community to get your questions answered by Jared and other members.",
                                                ],
                                            }),
                                            h.jsxs("li", {
                                                children: [
                                                    h.jsx("img", {
                                                        src: "./images/comp.png",
                                                        alt: "computer",
                                                        className:
                                                            "pricing-list-image",
                                                    }),
                                                    "6 Weeks of access to all session recordings, Q&As, and notes.",
                                                ],
                                            }),
                                            h.jsxs("li", {
                                                children: [
                                                    h.jsx("img", {
                                                        src: "./images/10.png",
                                                        alt: "certificate",
                                                        className:
                                                            "pricing-list-image",
                                                    }),
                                                    "A personalized Certificate of Completion for the Outcome-driven UX Metrics program.",
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    h.jsx(Xr, {}),
                ],
            }),
            h.jsx("div", {
                className: "bg-grey",
                children: h.jsxs(wp, {
                    children: [
                        h.jsxs("div", {
                            children: [
                                h.jsxs("h3", {
                                    children: [
                                        "Can’t attend the course live? ",
                                        h.jsx("br", {}),
                                        "Purchase the Recorded Adv. Strategic UX Research Video Series.",
                                    ],
                                }),
                                h.jsx("p", {
                                    children:
                                        "We know that not everyone has the resources to join us live. That’s ok. You can purchase the Adv. Strategic UX Research video series.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "You can watch all eight sessions of the Adv. Strategic UX Research Course broken up into two parts in our UX Strategy Essentials Library.",
                                }),
                                h.jsx("span", {
                                    children: h.jsx("b", {
                                        children: "What’s included for $227:",
                                    }),
                                }),
                                h.jsxs("ul", {
                                    children: [
                                        h.jsx("li", {
                                            children:
                                                "The lectures and notes from all eight topics.",
                                        }),
                                        h.jsx("li", {
                                            children:
                                                "Catch the lectures on your own schedule.",
                                        }),
                                    ],
                                }),
                                h.jsx("span", {
                                    children: "Access is for 90 days.",
                                }),
                            ],
                        }),
                        h.jsx(Gx, {
                            src: "./images/laptopResearch.png",
                            text: "Adv. Strategic UX Research Video Series",
                            price: "$227",
                            buttonText: "PURCHASE VIDEO SERIES",
                        }),
                    ],
                }),
            }),
            h.jsx(Xn, {}),
        ],
    });
}
function vS() {
    const [t, r] = W.useState(window.innerWidth < 768);
    return (
        W.useEffect(() => {
            const i = () => {
                r(window.innerWidth < 768);
            };
            return (
                window.addEventListener("resize", i),
                () => window.removeEventListener("resize", i)
            );
        }, []),
        h.jsxs("div", {
            className: "outcomes",
            children: [
                h.jsx(Qn, {}),
                h.jsx(Hn, {}),
                h.jsx(Wn, {
                    children: h.jsx("h1", {
                        children: t
                            ? "Why UX Research?"
                            : "Why use Adv. Strategic UX Research?",
                    }),
                }),
                h.jsxs(dt, {
                    children: [
                        h.jsxs("div", {
                            className: "inner-column-spacing",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "The right research makes your team more strategic, influential, and innovative.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "There’s a technical term for the absence of UX research: guessing.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "When stakeholders and teams lack the knowledge they need to make critical decisions, they guess. They might call it a hunch, bet, experiment, or even an educated guess. It’s still guessing.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Guessing is expensive and time-consuming for your product team. It forces near-endless debates about the “correct” approach. You have to validate your designs, or worse, just build something and put it into the world only to learn that it’s not what users and customers want or need. When you guess wrong (which is too often the case), all that work is a waste, and you learn very little about what would’ve worked.",
                                }),
                                h.jsx("h3", {
                                    children:
                                        "Strategic UX Research changes all that.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Your team stops guessing because they’ve built expertise in who your users and customers are, what they need, what their current experiences are, and what their future experiences could be.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "When your team has all that knowledge about users and customers at their fingertips, you no longer have to guess. Your deep understanding answers any questions just as you realize you have them.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Most importantly, you get the right products and services into the market quickly because having confidence in what you need to deliver is a production accelerator. Plus, you have solid outcome-driven UX metrics demonstrating how every new release improves your customers’ and users’ lives. Improving people’s lives increases their love and loyalty to your brand and products.",
                                }),
                                h.jsx("h3", {
                                    children:
                                        "Build your Strategic UX Research practice today.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Turn your organization into the world’s foremost experts on what your customers and users need and want. Accelerate your strategic decision-making capabilities with increased confidence from a shared understanding of your users' experiences. No more guessing.",
                                }),
                            ],
                        }),
                        h.jsx("div", { children: h.jsx(Xr, {}) }),
                    ],
                }),
                h.jsx("div", {
                    className:
                        "horizontal-VerticalCohortSelector-grey-container",
                    children: h.jsx(Gi, {}),
                }),
                h.jsx(Xn, {}),
            ],
        })
    );
}
function xS() {
    return h.jsxs("div", {
        className: "teams",
        children: [
            h.jsx(Qn, {}),
            h.jsx(Hn, {}),
            h.jsx(Wn, {
                children: h.jsx("h1", { children: "Sign Up Your Team" }),
            }),
            h.jsx(dt, {
                children: h.jsxs("div", {
                    className: "article-teams",
                    children: [
                        h.jsx("h2", {
                            children:
                                "Strategic UX Research to change your organization.",
                        }),
                        h.jsx("p", {
                            children:
                                "Change your senior executives’ and stakeholders’ relationships with everyone who benefits from your products and services. Strategic UX Research restructures how your organization makes essential decisions.",
                        }),
                        h.jsx("p", {
                            children:
                                "Get much more out of implementing your Strategic UX Research by involving your larger team.",
                        }),
                        h.jsxs("ul", {
                            className: "article-team-list",
                            children: [
                                h.jsxs("li", {
                                    className: "article-team-list-item",
                                    children: [
                                        h.jsx("img", {
                                            src: "./images/bubble.png",
                                            alt: "speech bubble",
                                        }),
                                        " ",
                                        "For Less than 8 Team Members: Join a Public Course",
                                    ],
                                }),
                                h.jsxs("li", {
                                    className: "article-team-list-item",
                                    children: [
                                        h.jsx("img", {
                                            src: "./images/bubble-star.png",
                                            alt: "speech bubble with a star",
                                        }),
                                        " ",
                                        "For More than 8 Team Members: Plan a Private Workshop",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            h.jsxs(xp, {
                children: [
                    h.jsx("p", {
                        children:
                            "“This session came at a perfect time. My team and I looked at the course through the lens of our org’s current state and will leverage the framework to leapfrog ahead together (on behalf of our customers, of course).”",
                    }),
                    h.jsx("strong", {
                        children: "C.B., Manager, UX Researcher",
                    }),
                ],
            }),
            h.jsxs(dt, {
                children: [
                    h.jsxs("div", {
                        children: [
                            h.jsx("h3", {
                                children:
                                    "For Less than 8 Team Members: Join a Public Course",
                            }),
                            h.jsx("p", {
                                children:
                                    "As a team, you’ll develop your UX Research strategy as a team and alongside a small group of teams facing similar challenges. Together, you’ll start drafting the blueprints for what change will look like across your organization. You’ll come away with your own custom approach to UX Metrics that your entire team can use.",
                            }),
                            h.jsx("p", {
                                children:
                                    "When you sign up for a public course cohort:",
                            }),
                            h.jsxs("ul", {
                                children: [
                                    h.jsx("li", {
                                        children:
                                            "Sign up each team member at the Team Member Price and save $100 off each registration.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "Each team member purchases their registration separately or contact us for an invoice.",
                                    }),
                                ],
                            }),
                            h.jsx("p", {
                                children:
                                    "Pick the next cohort that works best for your team members. If you need to move your team to another cohort date after your team signs up, no worries; we can take care of moving your team.",
                            }),
                        ],
                    }),
                    h.jsx("div", {
                        children: h.jsx("img", {
                            src: "/images/public-teams.png",
                            alt: "Jared",
                            className: "left-content-image",
                        }),
                    }),
                ],
            }),
            h.jsx(Gi, {}),
            h.jsxs(dt, {
                children: [
                    h.jsx("div", {
                        children: h.jsx("img", {
                            src: "/images/private-teams.png",
                            alt: "Jared",
                            className: "left-content-image",
                        }),
                    }),
                    h.jsxs("div", {
                        children: [
                            h.jsx("h3", {
                                children:
                                    "For More than 8 Team Members: Plan a Private Workshop",
                            }),
                            h.jsx("p", {
                                children:
                                    "Our private workshops work one-on-one with Jared and are ideal for teams who are:",
                            }),
                            h.jsxs("ul", {
                                children: [
                                    h.jsx("li", {
                                        children:
                                            "larger than eight team members (you’ll save on the cost of the workshop).",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "scaling their design capabilities.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "growing their organization's UX maturity.",
                                    }),
                                    h.jsx("li", {
                                        children:
                                            "tackling new or complex projects.",
                                    }),
                                ],
                            }),
                            h.jsx("h3", {
                                children: "Next Steps for a Private Workshop:",
                            }),
                            h.jsx("p", {
                                children:
                                    "Reach out to us, and we’ll send you a link to jump on a one-on-one call with Jared. Jared will work with you to determine if this course is best for your team.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Jared will work with you to pick dates and times that work best for your team members.",
                            }),
                        ],
                    }),
                ],
            }),
            h.jsxs(wp, {
                children: [
                    h.jsx("div", {
                        className: "width-test-team pl-2 width-50",
                        children: h.jsx("p", {
                            children:
                                "If you think a tailored, private Adv. Strategic UX Research course would be critical for your entire team, contact Jared to discuss the benefits and costs.",
                        }),
                    }),
                    h.jsxs("div", {
                        children: [
                            h.jsx("h3", {
                                children: "Talk to Jared Over a Call",
                            }),
                            h.jsx("button", {
                                className: " btn btn-shadow green-team-button",
                                children: h.jsx("a", {
                                    className: "purchase-box-button-white",
                                    href: "https://jmspool-mentoring.youcanbook.me/",
                                    children: "Contact Us and Talk to Jared",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            h.jsx(Xn, {}),
        ],
    });
}
function wS({ children: t }) {
    return h.jsx("section", {
        className: "left-content",
        children: h.jsx("div", {
            className: "left-content-container",
            children: t,
        }),
    });
}
function kS({ children: t }) {
    return h.jsx("section", {
        className: "right-content",
        children: h.jsx("div", {
            className: "right-content-container",
            children: t,
        }),
    });
}
function SS() {
    const [t, r] = W.useState([]);
    W.useEffect(() => {
        (async () => {
            const u = await Yx();
            r(u.sort((c, p) => c.week - p.week));
        })();
    }, []);
    function i(a) {
        return a * 2 + 1;
    }
    function o(a) {
        return a * 2 + 2;
    }
    return h.jsxs("div", {
        className: "topics",
        children: [
            h.jsx(Qn, {}),
            h.jsx(Hn, {}),
            h.jsx(Wn, { children: h.jsx("h1", { children: "Course Topics" }) }),
            h.jsxs(dt, {
                children: [
                    h.jsxs("div", {
                        className: "inner-column-spacing",
                        children: [
                            h.jsx("h2", {
                                children:
                                    "Strategic UX Research sets the business’ direction, determines where to invest, and focuses the entire organization’s long-term and short-term objectives on prioritizing improved experiences.",
                            }),
                            h.jsx("p", {
                                children:
                                    "Join our online workshop to make UX a valuable part of the organization’s strategy. During each of this course’s four weeks, you’ll cover two of the eight Strategic UX Research topics. For each topic, you’ll watch a pre-recorded lecture and join Jared in a live small-group coaching session.",
                            }),
                            h.jsx("p", {
                                children:
                                    "The lectures are already recorded, so you can watch them in advance or join an optional “Live Watch” session with your fellow cohort members.",
                            }),
                            h.jsx("p", {
                                children:
                                    "In each coaching session, you’ll work directly with Jared and your fellow cohort members to create a strategic UX Research plan and work through challenges that are specific to your current situation. You’ll hear how others are working through their challenges, and you’ll share what’s worked best for you.",
                            }),
                            h.jsx("p", {
                                children:
                                    "We keep the cohorts small, so you’ll have plenty of time to be coached on how you’ll implement your strategic UX Research.",
                            }),
                        ],
                    }),
                    h.jsx(Xr, {}),
                ],
            }),
            t.map((a, u) =>
                h.jsxs(
                    "div",
                    {
                        children: [
                            h.jsxs(wS, {
                                children: [
                                    h.jsxs("div", {
                                        className: "",
                                        children: [
                                            h.jsx("h3", {
                                                children: a.topicName1,
                                            }),
                                            h.jsx(Qr, { children: a.rich1 }),
                                        ],
                                    }),
                                    h.jsx("div", {
                                        children: h.jsx("img", {
                                            src: `/images/topic-${i(u)}.png`,
                                            alt: `Topic ${i(u) - a.week}`,
                                            className: "left-content-image",
                                        }),
                                    }),
                                ],
                            }),
                            h.jsxs(kS, {
                                children: [
                                    h.jsx("div", {
                                        children: h.jsx("img", {
                                            src: `/images/topic-${o(u)}.png`,
                                            alt: `Topic ${o(u) - a.week}`,
                                            className: "left-content-image",
                                        }),
                                    }),
                                    h.jsxs("div", {
                                        className: "",
                                        children: [
                                            h.jsx("h3", {
                                                children: a.topicName2,
                                            }),
                                            h.jsx(Qr, { children: a.rich2 }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    `topic-pair-${u}`
                )
            ),
            h.jsxs(dt, {
                children: [
                    h.jsxs("div", {
                        children: [
                            h.jsx("h2", {
                                children:
                                    "Ready to sign up for the Adv. Strategic UX Research Online Course?",
                            }),
                            h.jsx("p", {
                                children:
                                    "Join one of our upcoming cohorts to dive into these eight influential topics. Jared Spool will walk with you every step of the way.",
                            }),
                        ],
                    }),
                    h.jsx(Xr, {}),
                ],
            }),
            h.jsx(Xn, {}),
        ],
    });
}
function om({ children: t }) {
    return h.jsx("div", { className: "spiffyCheckout-box", children: t });
}
function ES() {
    const [t, r] = W.useState(!0),
        [i, o] = W.useState("Loading Checkout..."),
        a = W.useRef(null);
    return (
        W.useEffect(() => {
            const u = new MutationObserver(() => {
                a.current &&
                    a.current.querySelector("spiffy-checkout") &&
                    (r(!1), u.disconnect());
            });
            a.current && u.observe(a.current, { childList: !0, subtree: !0 });
            const c = setTimeout(() => {
                o("Loading timed out. Please refresh the page.");
            }, 4e3);
            return () => {
                u.disconnect(), clearTimeout(c);
            };
        }, []),
        h.jsxs("div", {
            id: "CohortB",
            children: [
                h.jsx(Qn, {}),
                h.jsx(Hn, {}),
                h.jsx(Wn, {
                    children: h.jsx("h1", {
                        children: "Join the March Cohort",
                    }),
                }),
                h.jsxs(dt, {
                    children: [
                        h.jsxs("div", {
                            className: "width-500",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Develop your own organization’s advanced UX Research strategy.",
                                }),
                                h.jsx("p", {
                                    children: h.jsx("strong", {
                                        children:
                                            "Awaken your top executives to the value that great user experiences bring to your organization and the people you serve.",
                                    }),
                                }),
                                h.jsx("p", {
                                    children:
                                        "Give your senior stakeholders and executives a detailed, shared understanding of your customers’ and users’ experiences. They’ll use your Strategic UX Research to set the business’ direction, determine where to invest, and focus the entire organization’s long-term and short-term objectives on prioritizing improved experiences.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Your new Strategic UX Research efforts will change the relationships your senior executives and stakeholders will have with everyone who will benefit from your products and services. It’s a profound transformation that restructures how your organization makes essential decisions.",
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "inner-column-content-container",
                            children: [
                                h.jsx("img", {
                                    src: "./images/UXresearchImg.png",
                                    alt: "Advanced Strategic UX Research",
                                }),
                                h.jsx("button", {
                                    className:
                                        "btn btn-shadow inner-column-purchase button cohortSelector-button-link",
                                    children: h.jsx(ct, {
                                        to: "/CohortB-schedule",
                                        className: "cohortSelector-button-link",
                                        children: "March Schedule",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                h.jsxs(dt, {
                    children: [
                        h.jsxs("div", {
                            className: "width-50",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Choose to sign up as an Individual or a Team Member",
                                }),
                                h.jsx("p", {
                                    children:
                                        "You’ll get the most out of your course if you come with your team.",
                                }),
                                h.jsxs("p", {
                                    children: [
                                        h.jsx("strong", {
                                            children:
                                                "As a team, you’ll develop your advanced UX Research strategy together.",
                                        }),
                                        "You’ll restructure how your organization makes essential decisions with advanced UX Research. You’ll come away from the course with a plan to connect your organization’s long-term direction and strategy directly to your customers’ and users’ deepest needs.",
                                    ],
                                }),
                                h.jsx("p", {
                                    children: h.jsx("strong", {
                                        children:
                                            "Each team member saves $100 on their registration when they sign up as a team member.",
                                    }),
                                }),
                                h.jsx("p", {
                                    children:
                                        "Each team member must purchase their registration separately. Whichever you choose, team or individual, we’ll give you our full support.",
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "width-40",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Currently out of work? We’ve got you.",
                                }),
                                h.jsx("p", {
                                    children: h.jsx("strong", {
                                        children:
                                            "We’re offering $199 registrations for our out-of-work colleagues.",
                                    }),
                                }),
                                h.jsx("p", {
                                    children:
                                        "We recognize that there are UX Leaders dedicated to learning and growing who are unfortunately in between jobs right now—we get it. So, if you’re an unemployed, dedicated learner, this special price is for you.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "(If you’re fortunate enough to be employed right now, please leave these spots for those who are not currently employed. Don’t be that person. Don’t take the seat of someone who really needs this price.)",
                                }),
                            ],
                        }),
                    ],
                }),
                h.jsx("div", {
                    ref: a,
                    children: h.jsxs(om, {
                        children: [
                            h.jsx("h2", {
                                children: "Join the March UX Research Cohort",
                            }),
                            t && h.jsx("p", { children: i }),
                            h.jsx("spiffy-checkout", {
                                url: "https://centercentre.spiffy.co/checkout/advanced-strategic-ux-research-CohortB",
                            }),
                        ],
                    }),
                }),
                h.jsx(Xn, {}),
            ],
        })
    );
}
function CS() {
    return h.jsxs("div", {
        id: "CohortBSchedule",
        children: [
            h.jsx(Qn, {}),
            h.jsx(Hn, {}),
            h.jsx(Wn, {
                children: h.jsx("h1", { children: "March Schedule" }),
            }),
            h.jsx(dt, {
                children: h.jsxs("div", {
                    children: [
                        h.jsx("h2", {
                            children:
                                "Develop your own organization’s advanced UX Research strategy.",
                        }),
                        h.jsxs("p", {
                            children: [
                                "Join us to complete your journey with metrics that will",
                                " ",
                                h.jsx("strong", {
                                    children:
                                        "drive your organization to deliver better-designed products and services.",
                                }),
                            ],
                        }),
                        h.jsx("p", {
                            children:
                                "You won’t make up imaginary, over-simplified metrics for fake companies and products in this intensive. Instead, you (and your team, if you bring them along) will roll up your sleeves and identify the critical metrics for your products and services.",
                        }),
                    ],
                }),
            }),
            h.jsx(lm, {}),
            h.jsx(dt, {}),
            h.jsx(Gi, {}),
            h.jsx(Xn, {}),
        ],
    });
}
function jS() {
    const [t, r] = W.useState(!0),
        [i, o] = W.useState("Loading Checkout..."),
        a = W.useRef(null);
    return (
        W.useEffect(() => {
            const u = new MutationObserver(() => {
                a.current &&
                    a.current.querySelector("spiffy-checkout") &&
                    (r(!1), u.disconnect());
            });
            a.current && u.observe(a.current, { childList: !0, subtree: !0 });
            const c = setTimeout(() => {
                o("Loading timed out. Please refresh the page.");
            }, 4e3);
            return () => {
                u.disconnect(), clearTimeout(c);
            };
        }, []),
        h.jsxs("div", {
            id: "CohortC",
            children: [
                h.jsx(Qn, {}),
                h.jsx(Hn, {}),
                h.jsx(Wn, {
                    children: h.jsx("h1", { children: "Join the June Cohort" }),
                }),
                h.jsxs(dt, {
                    children: [
                        h.jsxs("div", {
                            className: "width-500",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Develop your own organization’s advanced UX Research strategy.",
                                }),
                                h.jsx("p", {
                                    children: h.jsx("strong", {
                                        children:
                                            "Awaken your top executives to the value that great user experiences bring to your organization and the people you serve.",
                                    }),
                                }),
                                h.jsx("p", {
                                    children:
                                        "Give your senior stakeholders and executives a detailed, shared understanding of your customers’ and users’ experiences. They’ll use your Strategic UX Research to set the business’ direction, determine where to invest, and focus the entire organization’s long-term and short-term objectives on prioritizing improved experiences.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "Your new Strategic UX Research efforts will change the relationships your senior executives and stakeholders will have with everyone who will benefit from your products and services. It’s a profound transformation that restructures how your organization makes essential decisions.",
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "inner-column-content-container",
                            children: [
                                h.jsx("img", {
                                    src: "./images/UXresearchImg.png",
                                    alt: "Advanced Strategic UX Research",
                                }),
                                h.jsx("button", {
                                    className:
                                        "btn btn-shadow inner-column-purchase button cohortSelector-button-link",
                                    children: h.jsx(ct, {
                                        to: "/CohortC-schedule",
                                        className: "cohortSelector-button-link",
                                        children: "June Schedule",
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                h.jsxs(dt, {
                    children: [
                        h.jsxs("div", {
                            className: "width-50",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Choose to sign up as an Individual or a Team Member",
                                }),
                                h.jsx("p", {
                                    children:
                                        "You’ll get the most out of your course if you come with your team.",
                                }),
                                h.jsxs("p", {
                                    children: [
                                        h.jsx("strong", {
                                            children:
                                                "As a team, you’ll develop your advanced UX Research strategy together.",
                                        }),
                                        "You’ll restructure how your organization makes essential decisions with advanced UX Research. You’ll come away from the course with a plan to connect your organization’s long-term direction and strategy directly to your customers’ and users’ deepest needs.",
                                    ],
                                }),
                                h.jsx("p", {
                                    children: h.jsx("strong", {
                                        children:
                                            "Each team member saves $100 on their registration when they sign up as a team member.",
                                    }),
                                }),
                                h.jsx("p", {
                                    children:
                                        "Each team member must purchase their registration separately. Whichever you choose, team or individual, we’ll give you our full support.",
                                }),
                            ],
                        }),
                        h.jsxs("div", {
                            className: "width-40",
                            children: [
                                h.jsx("h2", {
                                    children:
                                        "Currently out of work? We’ve got you.",
                                }),
                                h.jsx("p", {
                                    children: h.jsx("strong", {
                                        children:
                                            "We’re offering $199 registrations for our out-of-work colleagues.",
                                    }),
                                }),
                                h.jsx("p", {
                                    children:
                                        "We recognize that there are UX Leaders dedicated to learning and growing who are unfortunately in between jobs right now—we get it. So, if you’re an unemployed, dedicated learner, this special price is for you.",
                                }),
                                h.jsx("p", {
                                    children:
                                        "(If you’re fortunate enough to be employed right now, please leave these spots for those who are not currently employed. Don’t be that person. Don’t take the seat of someone who really needs this price.)",
                                }),
                            ],
                        }),
                    ],
                }),
                h.jsx("div", {
                    ref: a,
                    children: h.jsxs(om, {
                        children: [
                            h.jsx("h2", {
                                children: "Join the June UX Research Cohort",
                            }),
                            t && h.jsx("p", { children: i }),
                            h.jsx("spiffy-checkout", {
                                url: "https://centercentre.spiffy.co/checkout/advanced-strategic-ux-research-CohortC",
                            }),
                        ],
                    }),
                }),
                h.jsx(Xn, {}),
            ],
        })
    );
}
function AS() {
    var k, w;
    const [t, r] = W.useState({}),
        [i, o] = W.useState("America/New_York"),
        [a, u] = W.useState(!0),
        [c, p] = W.useState(null),
        g = qr(),
        m = (j) => {
            r((T) => ({ ...T, [j]: !T[j] }));
        };
    g.pathname;
    const [y, x] = W.useState([]);
    return (
        W.useEffect(() => {
            (async () => {
                try {
                    u(!0);
                    const R = (await xu()).sort((L, D) => L.week - D.week);
                    x(R);
                } catch {
                    p("Failed to load data");
                } finally {
                    u(!1);
                }
            })();
        }, []),
        h.jsx("div", {
            className: "container inner-column",
            children: h.jsxs("div", {
                className: "calendarV2",
                children: [
                    h.jsxs("div", {
                        className: "scheduleTitle",
                        children: [
                            h.jsxs("div", {
                                className: "courseSchedule-container",
                                children: [
                                    h.jsx("h1", {
                                        children: "Course Schedule",
                                    }),
                                    a
                                        ? h.jsx("p", {
                                              className: "loading-text",
                                              children: "Loading...",
                                          })
                                        : c
                                        ? h.jsx("p", {
                                              children: "Error loading data",
                                          })
                                        : h.jsxs("h2", {
                                              children: [
                                                  "Cohort: ",
                                                  (k = y[0]) == null
                                                      ? void 0
                                                      : k.start,
                                                  " – ",
                                                  (w = y[3]) == null
                                                      ? void 0
                                                      : w.end,
                                              ],
                                          }),
                                ],
                            }),
                            h.jsxs("div", {
                                className: "timezone-container",
                                children: [
                                    h.jsxs("div", {
                                        className: "timezoneText",
                                        children: [
                                            h.jsx("p", {
                                                children:
                                                    "All times are currently listed in East Time Zone.",
                                            }),
                                            h.jsx("p", {
                                                children:
                                                    "We welcome folks from other time zones to join us.",
                                            }),
                                            h.jsx("p", {
                                                children:
                                                    "Translate times to your time zone with the drop down below.",
                                            }),
                                        ],
                                    }),
                                    vp(i, o),
                                ],
                            }),
                        ],
                    }),
                    y.map((j, T) =>
                        h.jsx(
                            "div",
                            {
                                className: "test123",
                                children: h.jsx("div", {
                                    id: "scheduleCard",
                                    children: h.jsxs("div", {
                                        id: "WeekNUM",
                                        children: [
                                            h.jsxs("div", {
                                                className: "weekInfo",
                                                children: [
                                                    "Week ",
                                                    j.week,
                                                    " of 4",
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "oddTopicNumber",
                                                className: "headerTitle",
                                                onClick: () => m(T),
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "mobile-row",
                                                        children: [
                                                            h.jsx("img", {
                                                                src: rm,
                                                                className: `scheduleIconImg ${
                                                                    t[T]
                                                                        ? "rotated"
                                                                        : ""
                                                                }`,
                                                                alt: "playButton1",
                                                            }),
                                                            h.jsx("div", {
                                                                className:
                                                                    "classTitle",
                                                                children:
                                                                    j.name1,
                                                            }),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        children: h.jsx("div", {
                                                            className:
                                                                "clickDetails",
                                                            children:
                                                                "Topic Details",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            t[T] &&
                                                h.jsx(h.Fragment, {
                                                    children: h.jsx("div", {
                                                        className:
                                                            "topicDetails",
                                                        children: h.jsx(Qr, {
                                                            children: j.rich1,
                                                        }),
                                                    }),
                                                }),
                                            h.jsxs("div", {
                                                id: "optionalTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date1,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.watchStart1,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.watchEnd1,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Watch the Lecture*",
                                                    }),
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "liveTopicTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date1,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.coachStart1,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.coachEnd1,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Live Coaching with Jared",
                                                    }),
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "oddTopicNumber",
                                                className: "headerTitle",
                                                onClick: () => m(T + 0.1),
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "mobile-row",
                                                        children: [
                                                            h.jsx("img", {
                                                                src: im,
                                                                className: `scheduleIconImg ${
                                                                    t[T + 0.1]
                                                                        ? "rotated"
                                                                        : ""
                                                                }`,
                                                                alt: "playButton2",
                                                            }),
                                                            h.jsx("div", {
                                                                className:
                                                                    "classTitle",
                                                                children:
                                                                    j.name2,
                                                            }),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        children: h.jsx("div", {
                                                            className:
                                                                "clickDetails",
                                                            children:
                                                                "Topic Details",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            t[T + 0.1] &&
                                                h.jsx(h.Fragment, {
                                                    children: h.jsx("div", {
                                                        className:
                                                            "topicDetails",
                                                        children: h.jsx(Qr, {
                                                            children: j.rich2,
                                                        }),
                                                    }),
                                                }),
                                            h.jsxs("div", {
                                                id: "optionalTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date2,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.watchStart2,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.watchEnd2,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Watch the Lecture*",
                                                    }),
                                                ],
                                            }),
                                            h.jsxs("div", {
                                                id: "liveTopicTitle",
                                                className: "subTitle",
                                                children: [
                                                    h.jsxs("div", {
                                                        className: "optionTime",
                                                        children: [
                                                            j.date2,
                                                            ",",
                                                            " ",
                                                            ut(
                                                                j.coachStart2,
                                                                !1,
                                                                i
                                                            ),
                                                            " ",
                                                            "-",
                                                            " ",
                                                            ut(
                                                                j.coachEnd2,
                                                                !0,
                                                                i
                                                            ),
                                                        ],
                                                    }),
                                                    h.jsx("div", {
                                                        className:
                                                            "optionTitle",
                                                        children:
                                                            "Live Coaching with Jared",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            },
                            T
                        )
                    ),
                ],
            }),
        })
    );
}
function TS() {
    return h.jsxs("div", {
        id: "CohortCSchedule",
        children: [
            h.jsx(Qn, {}),
            h.jsx(Hn, {}),
            h.jsx(Wn, { children: h.jsx("h1", { children: "June Schedule" }) }),
            h.jsx(dt, {
                children: h.jsxs("div", {
                    children: [
                        h.jsx("h2", {
                            children:
                                "Develop your own organization’s advanced UX Research strategy.",
                        }),
                        h.jsxs("p", {
                            children: [
                                "Join us to complete your journey with metrics that will",
                                " ",
                                h.jsx("strong", {
                                    children:
                                        "drive your organization to deliver better-designed products and services.",
                                }),
                            ],
                        }),
                        h.jsx("p", {
                            children:
                                "You won’t make up imaginary, over-simplified metrics for fake companies and products in this intensive. Instead, you (and your team, if you bring them along) will roll up your sleeves and identify the critical metrics for your products and services.",
                        }),
                    ],
                }),
            }),
            h.jsx(AS, {}),
            " ",
            h.jsx(dt, {}),
            h.jsx(Gi, {}),
            h.jsx(Xn, {}),
        ],
    });
}
function NS() {
    return h.jsx(uv, {
        children: h.jsxs(nv, {
            children: [
                h.jsx(yn, { path: "/", element: h.jsx(yS, {}) }),
                h.jsx(yn, { path: "/research", element: h.jsx(vS, {}) }),
                h.jsx(yn, { path: "/teams", element: h.jsx(xS, {}) }),
                h.jsx(yn, { path: "/topics", element: h.jsx(SS, {}) }),
                h.jsx(yn, { path: "/CohortB", element: h.jsx(ES, {}) }),
                h.jsx(yn, {
                    path: "/CohortB-schedule",
                    element: h.jsx(CS, {}),
                }),
                h.jsx(yn, { path: "/CohortC", element: h.jsx(jS, {}) }),
                h.jsx(yn, {
                    path: "/CohortC-schedule",
                    element: h.jsx(TS, {}),
                }),
            ],
        }),
    });
}
fy.createRoot(document.getElementById("root")).render(
    h.jsx(Lh.StrictMode, { children: h.jsx(NS, {}) })
);
