(window.webpackJsonp = window.webpackJsonp || []).push([["71Ve"], {
    "/QyA": function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.drawingAreaColors = void 0;
        var s = n(r("Pwnf"))
          , a = r("6OHE");
        const o = [s.default.offBlack, (0,
        a.domainColors)("partner-content").domain1, (0,
        a.domainColors)("humanities").domain1, (0,
        a.domainColors)("computing").domain2, (0,
        a.domainColors)("math").domain1, (0,
        a.domainColors)("economics-finance-domain").domain2, (0,
        a.domainColors)("science").domain1, (0,
        a.domainColors)("test-prep").domain1];
        t.drawingAreaColors = o
    },
    "3iX/": function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n);
            return n
        }(r("q1tI"))
          , a = n(r("Pwnf"))
          , o = r("g8Be")
          , i = r("JimW")
          , l = r("yhei")
          , c = r("mR6N");
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        t.default = ({state: e, style: t})=>{
            const [r,n] = s.useState(!1);
            (0,
            o.useInterval)((()=>n(!r)), 500, "reading" === e);
            const u = t=>"reading" === e ? t ? .5 : 1 : "idle" === e || "editing" === e ? 1 : .3;
            let p = "#2764FC";
            return "editing" === e && (p = a.default.offBlack),
            s.createElement(i.View, {
                style: [d.readAloudIconContainer, t]
            }, "loading" === e && s.createElement(l.CircularSpinner, {
                size: "xsmall",
                style: d.layeredIcons
            }), s.createElement("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 330 277",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                className: (0,
                c.css)(d.layeredIcons)
            }, s.createElement("path", {
                d: "M165 17H181.82C181.82 10.47 178.04 4.54 172.13 1.77C166.22 -1.00 159.25 -0.10 154.23 4.08L165 17ZM84.27 84.27V101.09C88.21 101.09 92.02 99.71 95.04 97.19L84.27 84.27ZM165 259.18L154.23 272.10C159.25 276.28 166.22 277.18 172.13 274.41C178.04 271.64 181.82 265.71 181.82 259.18H165ZM84.27 191.91L95.04 178.99C92.02 176.47 88.21 175.09 84.27 175.09V191.91ZM17 191.91H0.18C0.18 201.20 7.71 208.73 17 208.73L17 191.91ZM17 84.27L17 67.45C12.54 67.45 8.26 69.23 5.11 72.38C1.95 75.53 0.18 79.81 0.18 84.27H17ZM154.23 4.08L73.51 71.35L95.04 97.19L175.77 29.92L154.23 4.08ZM181.82 259.18V17H148.18V259.18H181.82ZM73.51 204.83L154.23 272.10L175.77 246.26L95.04 178.99L73.51 204.83ZM84.27 175.09L17 175.09L17 208.73L84.27 208.73L84.27 175.09ZM33.82 191.91V84.27H0.18V191.91H33.82ZM17 101.09L84.27 101.09V67.45L17 67.45L17 101.09Z",
                fill: p,
                fillOpacity: "disabled" === e || "loading" === e ? .3 : 1
            }), s.createElement("path", {
                d: "M245.73 259.18C285.94 235.01 313 189.83 313 138.09C313 86.35 285.94 41.17 245.73 17",
                stroke: p,
                strokeOpacity: u(r),
                strokeWidth: "33.6364",
                strokeLinecap: "round"
            }), s.createElement("path", {
                d: "M239 97.73V185.18",
                stroke: p,
                strokeOpacity: u(!r),
                strokeWidth: "33.6364",
                strokeLinecap: "round"
            })))
        }
        ;
        const d = c.StyleSheet.create({
            readAloudIconContainer: {
                color: a.default.blue,
                display: "grid",
                gridTemplateColumns: "24px",
                gridTemplateRows: "24px",
                justifyItems: "center",
                alignItems: "center"
            },
            layeredIcons: {
                gridColumn: 1,
                gridRow: 1
            }
        })
    },
    "6Os4": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.EndOfTaskCard = void 0;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = i(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n);
            return n
        }(r("q1tI"))
          , s = r("55Ip")
          , a = r("tTzI")
          , o = r("k/UM");
        function i(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (i = function(e) {
                return e ? r : t
            }
            )(e)
        }
        t.EndOfTaskCard = e=>{
            const {masteryEnabled: t, quizOrUnitTestLessonRecommendations: r, taskId: i, taskType: l, unitId: c} = e
              , u = (0,
            s.useHistory)();
            if (["topic_quiz", "topic_unit_test"].includes(l)) {
                if (t) {
                    var d;
                    const e = "topic_quiz" === l ? o.EndOfTaskMasteryQuizCard : o.EndOfTaskMasteryUnitTestCard;
                    return n.createElement(e, {
                        taskId: i,
                        topicId: c,
                        onNavigate: e=>{
                            u.push(e)
                        }
                        ,
                        recommendedTutorials: null != (d = null == r ? void 0 : r.map((e=>({
                            slug: e.relativeUrl,
                            title: e.translatedTitle
                        })))) ? d : []
                    })
                }
                return "topic_quiz" === l ? n.createElement(o.EndOfTaskNonMasteryQuizCard, {
                    taskId: i,
                    topicId: c
                }) : n.createElement(o.EndOfTaskNonMasteryTestCard, {
                    taskId: i,
                    topicId: c
                })
            }
            return t ? n.createElement(a.EndOfTaskMasteryExerciseCard, {
                taskId: i
            }) : n.createElement(a.EndOfTaskNonMasteryExerciseCard, {
                taskId: i
            })
        }
    },
    "7B8t": function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CONTENT_GET_ASSESSMENT_ITEMS = void 0;
        var s = n(r("lTCR"));
        let a;
        const o = (0,
        r("8r+/").gqlOp)((0,
        s.default)(a || (a = (e=>e)`
    query Content_GetRelatedAssessmentItems($exerciseId: String) {
        exerciseById(id: $exerciseId) {
            id
            assessmentItems {
                id
                itemShapeType
                itemData
            }
        }
    }
`)));
        t.CONTENT_GET_ASSESSMENT_ITEMS = o
    },
    "7HSn": function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ErrorCode = void 0;
        var s = n(r("Pwnf"))
          , a = r("JimW")
          , o = h(r("8jAt"))
          , i = n(r("SGU3"))
          , l = r("mR6N")
          , c = h(r("q1tI"))
          , u = n(r("Hy2Q"))
          , d = h(r("whzC"))
          , p = r("Y8R6")
          , m = h(r("6OHE"))
          , f = h(r("cIi+"));
        function g(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (g = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function h(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = g(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        t.ErrorCode = e=>{
            const t = d.safeLinkTo("https://www.khanacademy.org/reportissue?type=Defect")
              , r = c.createElement(i.default, {
                href: t,
                light: !0,
                style: y.errorLink
            }, f.default.errorTellUs)
              , n = c.createElement(i.default, {
                href: "#",
                onClick: ()=>(0,
                p.reload)(),
                light: !0,
                style: y.errorLink
            }, f.default.errorRefresh)
              , s = o.$_("Uh oh, it looks like we ran into an error. You need to %(refresh)s. If this problem persists, %(tellUs)s.", {
                refresh: n,
                tellUs: r
            });
            return c.createElement(a.View, {
                style: y.errorContainer
            }, s, (0,
            f.errorCode)(e.code))
        }
        ;
        const y = l.StyleSheet.create({
            errorContainer: {
                display: "block",
                width: u.default.wrapperWidth,
                [m.queries.small]: {
                    width: "auto"
                },
                height: "fit-content",
                padding: 16,
                margin: "0 auto",
                backgroundColor: s.default.red,
                borderRadius: 4,
                color: s.default.white,
                textAlign: "center",
                fontSize: 15,
                zIndex: 2
            },
            errorLink: {
                textDecoration: "underline"
            }
        })
    },
    BdjN: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(r("Pwnf"))
          , a = d(r("8jAt"))
          , o = r("mR6N")
          , i = d(r("q1tI"))
          , l = r("Borw")
          , c = n(r("gY26"));
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function d(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const p = [a._("Nice work!"), a._("Good work!"), a._("Great work!")]
          , m = [a._("Way to go!"), a._("There you go!"), a._("You improved your answer!"), a._("You got it!"), a._("Nice work!")]
          , f = [a._("That's the right answer. Keep practicing!"), a._("Great that you stuck with it. Onward!"), a._("You got it; keep up the great persistence."), a._("Keep up the great persistence!")]
          , g = [a._("Not quite!"), a._("Give it another shot!"), a._("Not quite yet...")]
          , h = [a._("skip for now"), a._("move on")]
          , y = e=>{
            const t = i.useRef(-1);
            return -1 === t.current && (t.current = Math.floor(e.length * Math.random())),
            e[t.current]
        }
          , E = o.StyleSheet.create({
            linkButton: {
                color: s.default.blue,
                cursor: "pointer",
                textDecoration: "none",
                ":hover": {
                    textDecoration: "underline"
                }
            }
        });
        var v = e=>{
            const t = y(p)
              , r = y(g)
              , n = y(m)
              , s = y(h)
              , u = y(f)
              , d = i.useMemo((()=>[i.createElement("span", null, a._("Keep going."), e.totalHints > 0 && i.createElement(i.Fragment, null, " ", i.createElement("a", {
                className: (0,
                o.css)(E.linkButton),
                href: "javascript:void(0)",
                onClick: e.onShowAllHints
            }, a._("Or see how we answered this question.")))), a._("You got it. Onward!")]), [e.onShowAllHints, e.totalHints])
              , v = y(d)
              , b = ()=>{
                let t;
                const r = i.createElement("a", {
                    className: (0,
                    o.css)(E.linkButton),
                    href: "javascript:void(0)",
                    onClick: e.onShowAllHints
                }, a._("Get help"))
                  , n = i.createElement("a", {
                    className: (0,
                    o.css)(E.linkButton),
                    href: "javascript:void(0)",
                    onClick: e.onSkipQuestion,
                    "data-test-id": "exercise-feedback-popover-skip-link"
                }, s);
                return t = e.totalHints > 0 || e.hasRelatedContents ? a.$_("Try again, %(getHelp)s, or %(skipQuestion)s.", {
                    getHelp: r,
                    skipQuestion: n
                }) : a.$_("Try again or %(skipQuestion)s.", {
                    skipQuestion: n
                }),
                t
            }
              , {bodyText: k, secondaryBodyText: w, heading: I, iconSrc: C} = (()=>{
                const {criterion: s, answerStatus: c, attemptHistory: p, attemptMessage: m} = e;
                if ("num_problems" === s.type)
                    return (()=>{
                        const {answerStatus: s, attemptHistory: o, attemptMessage: i, suppressAlmostThere: l} = e;
                        let c, p, m, f;
                        if (i)
                            f = null,
                            m = l ? a._("Please check your answer") : a._("You're almost there"),
                            c = i,
                            p = b();
                        else if ("correct" === s) {
                            f = "/images/exercise-correct.svg";
                            const r = o[o.length - 1];
                            if (r && !r.correct)
                                m = n,
                                c = e.totalHints > 0 ? u : a._("Keep it up!");
                            else {
                                const r = o.length
                                  , n = e.criterion.numRequired - r;
                                n > 0 && (d.push(a.ngettext("%(num)s question done, keep going!", "%(num)s questions done, keep going!", r)),
                                d.push(a.ngettext("Keep it up for %(num)s more.", "Keep it up for %(num)s more.", n)),
                                d.push(a.ngettext("You got it. %(num)s more!", "You got it. %(num)s more!", n))),
                                m = t,
                                c = v
                            }
                        } else
                            "incorrect" === s && (c = b(),
                            m = r,
                            f = "/images/exercise-try-again.svg");
                        return {
                            bodyText: c,
                            secondaryBodyText: p,
                            heading: m,
                            iconSrc: f
                        }
                    }
                    )();
                let f;
                let g, h;
                if (m)
                    h = null,
                    g = a._("You're almost there"),
                    f = m;
                else if ("correct" === c) {
                    h = "/images/exercise-correct.svg";
                    let t = i.createElement("a", {
                        className: (0,
                        o.css)(E.linkButton),
                        href: "javascript:void(0)",
                        onClick: e.onShowAllHints
                    }, a._("See how we answered this question."));
                    0 === e.totalHints && (t = a._("Keep it up!"));
                    const r = p[p.length - 1];
                    e.isExerciseComplete ? (g = a._("Nice job!"),
                    f = a._("Looks like you know this pretty well!")) : 1 === p.length ? (g = a._("Correct!"),
                    f = (0,
                    l.format)(e.criterion, p)) : r && !r.correct ? (g = a._("Great grit!"),
                    f = t) : (g = a._("Correct!"),
                    f = t)
                } else
                    "incorrect" === c && (h = "/images/exercise-try-again.svg",
                    g = a._("Keep trying!"),
                    f = !e.relatedContentsVisible && e.hasRelatedContents ? i.createElement("span", null, a._("Stuck?"), " ", i.createElement("a", {
                        className: (0,
                        o.css)(E.linkButton),
                        href: "javascript:void(0)",
                        onClick: e.onShowRelatedContents
                    }, a._("Watch a video or use a hint"))) : e.hasHintsRemaining ? i.createElement("span", null, a._("Still stuck?"), " ", i.createElement("a", {
                        className: (0,
                        o.css)(E.linkButton),
                        href: "javascript:void(0)",
                        onClick: e.onShowHint
                    }, a._("Get a hint"))) : null);
                return {
                    bodyText: f,
                    secondaryBodyText: undefined,
                    heading: g,
                    iconSrc: h
                }
            }
            )();
            return i.createElement(c.default, {
                iconSrc: C,
                heading: I || null,
                body: k,
                secondaryBody: w,
                onClose: e.onClose
            })
        }
        ;
        t.default = v
    },
    "EJ/c": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.reportProps = void 0;
        t.reportProps = e=>{}
    },
    EjKr: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pathIsMathDomain = void 0;
        t.pathIsMathDomain = e=>e.startsWith("/math")
    },
    GKb9: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sanitizeKaTeX = void 0;
        t.sanitizeKaTeX = e=>e = (e = e.replace(/(?:(^|[^\\])\$\$)([\s\S]*?)(?:([^\\])\$\$)/gm, "$1\\[$2$3\\]")).replace(/(?:(^|[^\\])\$)([\s\S]*?)(?:([^\\])\$)/gm, "$1\\($2$3\\)")
    },
    "JD+g": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getStartOverVisibility = void 0;
        t.getStartOverVisibility = (e,t,r,n)=>{
            var s;
            const a = (null != (s = null == t ? void 0 : t.length) ? s : 0) >= n;
            return {
                showStartOver: e && (!a || a && "unanswered" === r),
                startOverEnabled: "incorrect" === r || (null == t ? void 0 : t.some((({correct: e})=>!e)))
            }
        }
    },
    LE1t: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.footerHeightWithPadding = t.footerHeight = t.default = void 0;
        var s = r("DGHZ")
          , a = n(r("wa3X"))
          , o = n(r("Pwnf"))
          , i = r("JimW")
          , l = j(r("8jAt"))
          , c = n(r("+6Ef"))
          , u = r("JasB")
          , d = r("yhei")
          , p = r("mR6N")
          , m = r("0UwG")
          , f = j(r("q1tI"))
          , g = r("/MKj")
          , h = n(r("mBR6"))
          , y = n(r("Nw73"))
          , E = n(r("BMCp"))
          , v = n(r("Q8Wn"))
          , b = r("Mc2w")
          , k = r("ZtlQ")
          , w = n(r("2DK5"))
          , I = n(r("Hy2Q"))
          , C = n(r("slgN"))
          , O = n(r("Elft"))
          , P = n(r("avHJ"))
          , x = j(r("6OHE"))
          , T = n(r("uEGL"))
          , S = r("a3Kr")
          , A = n(r("cIi+"))
          , _ = n(r("BdjN"))
          , D = r("EjKr")
          , N = n(r("sE/O"))
          , M = r("JD+g");
        function R(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (R = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function j(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = R(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        t.footerHeight = 40;
        t.footerHeightWithPadding = 60;
        var L = e=>{
            const t = (0,
            h.default)()
              , r = f.useRef(null)
              , n = f.useRef(null)
              , I = f.useRef(null)
              , x = f.useRef(null)
              , T = (0,
            g.useSelector)((e=>e))
              , {taskInfo: R, taskProgress: j, problemProgress: L} = T
              , {answerStatus: W, attemptMessage: z, suppressAlmostThere: U, totalHints: K, hintsVisible: F, numberOfAttempts: V, problemComplete: G, answerable: Q, keypadHeight: $, feedbackPopoverVisible: J} = L
              , X = K - F
              , {attemptHistory: Y, promotionCriteriaSatisfied: Z, taskComplete: ee, completionCriteriaSatisfied: te, movingToNextProblem: re} = j
              , {completionCriteria: ne} = R
              , {loading: se, flag: ae} = (0,
            b.useFeatureFlag)("ai_read_aloud")
              , {pathname: oe} = (0,
            k.useLocation)()
              , ie = (0,
            D.pathIsMathDomain)(oe) && !se && ae
              , [le,ce] = f.useState(!1)
              , [ue,de] = f.useState(!1);
            f.useEffect((()=>{
                if (x.current && G) {
                    const r = x.current;
                    if (r.focus(),
                    t)
                        return;
                    let s = I.current;
                    if (!s) {
                        const e = r.getBoundingClientRect();
                        e && (s = {
                            x: e.width / 2 + e.left,
                            y: e.height / 2 + e.top
                        })
                    }
                    var e;
                    if (s)
                        null == (e = n.current) || e.startConfetti(s.x, s.y)
                }
            }
            ), [t, G]);
            const pe = ()=>{
                if (ee || te && re)
                    return null;
                if (G) {
                    const t = te ? l._("Show summary") : l._("Next question");
                    return f.createElement(y.default, {
                        ref: x,
                        color: o.default.blue,
                        disabled: !1,
                        width: 140,
                        testId: "exercise-next-question",
                        onClick: ()=>{
                            e.onClearDrawingArea(),
                            "incorrect" === W ? e.onSkipQuestion() : e.onGotoNextProblem(),
                            (v.default.isMobile || v.default.isTablet) && (()=>{
                                const e = document.querySelector(".bibliotron-exercise")
                                  , {body: t} = document;
                                if (e && null != t) {
                                    const r = 1;
                                    t.scrollTop = e.getBoundingClientRect().top + t.scrollTop + r
                                }
                            }
                            )()
                        }
                    }, t)
                }
                const t = Q
                  , r = O.default.getSubmitLabel(!!J, W, V);
                return f.createElement(a.default, {
                    disabled: !t,
                    style: q.button,
                    testId: "exercise-check-answer",
                    onClick: t=>{
                        I.current = {
                            x: t.clientX,
                            y: t.clientY
                        },
                        J ? e.onHideFeedbackPopover() : e.onCheckAnswer()
                    }
                }, r)
            }
              , me = ()=>{
                ce(!le)
            }
              , fe = ()=>{
                e.onHideFeedbackPopover()
            }
              , ge = ()=>{
                ke(),
                e.onHideFeedbackPopover()
            }
              , he = ()=>{
                e.onClearDrawingArea(),
                e.onSkipQuestion && e.onSkipQuestion()
            }
              , ye = ()=>{
                if (!J)
                    return null;
                const {relatedContents: t} = e
                  , r = t && t.length > 0
                  , n = e.relatedContentsVisible || v.default.isTablet
                  , s = `exercise-feedback-popover-${W || ""}`;
                return f.createElement("div", {
                    className: (0,
                    p.css)(q.feedbackPopover),
                    "data-test-id": s
                }, f.createElement(_.default, {
                    answerStatus: null != W ? W : "",
                    attemptMessage: z,
                    suppressAlmostThere: U,
                    attemptHistory: Y,
                    criterion: ne,
                    promotionCriteriaSatisfied: Z,
                    totalHints: K,
                    hasHintsRemaining: X > 0,
                    hasRelatedContents: null != r && r,
                    isExerciseComplete: null != te && te,
                    onClose: fe,
                    onShowAllHints: Ee,
                    onShowHint: ve,
                    onShowRelatedContents: ge,
                    onSkipQuestion: he,
                    relatedContentsVisible: n
                }))
            }
              , Ee = ()=>{
                ke(),
                e.onHideFeedbackPopover();
                for (let t = 0; t < X; t++)
                    e.onShowHint();
                setTimeout((()=>{
                    const e = document.querySelector(".perseus-hint-renderer");
                    e && be(e)
                }
                ))
            }
              , ve = ()=>{
                ke(),
                e.onHideFeedbackPopover(),
                e.onShowHint(),
                setTimeout((()=>{
                    const e = document.querySelector(".perseus-hint-renderer.last-hint");
                    e && be(e)
                }
                ))
            }
              , be = e=>{
                var t, r;
                const n = e.getBoundingClientRect().top
                  , s = null != (t = null == (r = document.body) ? void 0 : r.scrollTop) ? t : 0;
                setTimeout((()=>{
                    document.body.scrollTop = s + n - 16
                }
                ))
            }
              , ke = ()=>{
                e.onShowRelatedContents()
            }
            ;
            return f.createElement("div", {
                className: (0,
                p.css)(q.footerWrapper),
                ref: r
            }, (()=>{
                const {onStartOver: t} = e
                  , r = !ee
                  , n = f.createElement(w.default, {
                    attempts: null != Y ? Y : [],
                    answerStatus: null != W ? W : "",
                    criterion: ne,
                    endOfTask: ee,
                    style: [q.progressContainer],
                    expanded: le,
                    masteryEnabled: !1,
                    onToggle: me
                })
                  , o = [q.footer]
                  , {showStartOver: l, startOverEnabled: g} = (0,
                M.getStartOverVisibility)(!!t, null != Y ? Y : [], W, ne.numRequired);
                return f.createElement(i.View, {
                    style: o,
                    testId: "content-library-footer"
                }, f.createElement(i.View, {
                    style: [q.keypadContainer, {
                        height: $ || void 0
                    }]
                }, f.createElement(m.KeypadContext.Consumer, null, (({setKeypadElement: e, renderer: t})=>f.createElement(s.Keypad, {
                    onElementMounted: e,
                    onDismiss: ()=>t && t.blur(),
                    style: q.keypad
                })))), f.createElement(i.View, {
                    style: q.toolbar
                }, !ee && le ? n : f.createElement(f.Fragment, null, r && f.createElement("button", {
                    "aria-hidden": "true",
                    "data-test-id": "toggle-drawing-area",
                    className: (0,
                    p.css)(q.scratchpadToggleButton),
                    onClick: e.onToggleDrawingArea
                }, f.createElement("span", {
                    className: (0,
                    p.css)(q.scratchpadActivateContainer)
                }, f.createElement(P.default, null))), ie && f.createElement(f.Fragment, null, r && f.createElement(u.Strut, {
                    style: q.iconButtonPadding,
                    size: 20
                }), f.createElement(N.default, null), f.createElement(C.default, null)), l && f.createElement(f.Fragment, null, (r || ie) && f.createElement(u.Strut, {
                    style: q.iconButtonPadding,
                    size: 20
                }), ue ? f.createElement(d.CircularSpinner, {
                    style: q.startOverIconButton,
                    size: "small"
                }) : f.createElement(c.default, {
                    icon: S.startOverIcon,
                    style: q.startOverIconButton,
                    "aria-label": A.default.startOver,
                    disabled: !g,
                    onClick: ()=>{
                        de(!0),
                        null == t || t()
                    }
                })), f.createElement("div", {
                    className: (0,
                    p.css)(q.desktopTabletSpring)
                }), l && f.createElement(a.default, {
                    style: q.startOverLabelButton,
                    kind: "tertiary",
                    spinner: ue,
                    disabled: !g,
                    onClick: ()=>{
                        de(!0),
                        null == t || t()
                    }
                }, A.default.startOver), f.createElement(u.Strut, {
                    size: 16
                }), !ee && n, f.createElement("div", {
                    className: (0,
                    p.css)(q.phoneSpring)
                }), f.createElement(u.Strut, {
                    style: q.desktopStrut,
                    size: 16
                }), pe(), ye())))
            }
            )(), t ? null : f.createElement("div", {
                className: (0,
                p.css)(q.overFooter)
            }, f.createElement("div", {
                className: (0,
                p.css)(q.confettiContainer)
            }, f.createElement(E.default, {
                ref: n,
                height: B,
                width: H,
                minScale: .5,
                maxScale: .5
            }))))
        }
        ;
        t.default = L;
        const H = 500
          , B = 500
          , q = p.StyleSheet.create({
            progressContainer: {
                flexGrow: 0,
                flexBasis: "auto",
                [x.queries.small]: {
                    flexGrow: 1
                }
            },
            footerWrapper: {
                position: "relative",
                [x.queries.small]: {
                    width: "100%"
                }
            },
            footer: {
                height: x.chromeSizes.exercisePhoneFooterHeight,
                backgroundColor: x.colors.white
            },
            toolbar: {
                flexDirection: "row",
                alignItems: "center",
                height: x.chromeSizes.exercisePhoneFooterHeight,
                paddingLeft: 16,
                paddingRight: 16,
                borderLeft: `1px solid ${x.colors.gray85}`,
                borderTop: `1px solid ${x.colors.gray85}`,
                boxShadow: "0 1px 4px 0 rgba(0,0,0,0.1)"
            },
            scratchpadToggleButton: {
                background: "unset",
                border: "none",
                lineHeight: 0,
                [x.queries.small]: {
                    display: "none"
                },
                ":hover": {
                    cursor: "pointer"
                }
            },
            scratchpadActivateContainer: {
                color: o.default.blue
            },
            overFooter: {
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: 768,
                position: "relative"
            },
            confettiContainer: {
                right: -(H / 2 - 20 - 94),
                bottom: B / -2,
                position: "absolute",
                zIndex: I.default.zIndexes.footer + 1,
                pointerEvents: "none",
                filter: "Alpha(opacity=0)"
            },
            feedbackPopover: {
                position: "absolute",
                right: 80,
                bottom: 61,
                maxWidth: "calc(100% - 32px)"
            },
            keypad: {
                position: "absolute",
                pointerEvents: "all"
            },
            keypadContainer: {
                position: "absolute",
                width: "100%",
                bottom: x.chromeSizes.exercisePhoneFooterHeight,
                overflow: "hidden",
                pointerEvents: "none"
            },
            phoneSpring: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                display: "none",
                [T.default.smOrSmaller]: {
                    display: "block"
                }
            },
            desktopTabletSpring: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 0,
                display: "block",
                [T.default.smOrSmaller]: {
                    display: "none"
                }
            },
            desktopStrut: {
                [T.default.smOrSmaller]: {
                    display: "none"
                }
            },
            button: {
                minWidth: 140
            },
            startOverLabelButton: {
                flexShrink: 0,
                [T.default.mdOrSmaller]: {
                    display: "none"
                }
            },
            startOverIconButton: {
                flexShrink: 0,
                [T.default.lgOrLarger]: {
                    display: "none"
                }
            },
            iconButtonPadding: {
                [x.queries.small]: {
                    display: "none"
                }
            }
        })
    },
    M2au: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useExerciseGuideContext = void 0;
        var s = r("q1tI")
          , a = r("/MKj")
          , o = r("NXn8")
          , i = r("ZtlQ")
          , l = n(r("EF8l"))
          , c = r("wg99")
          , u = r("8KlG")
          , d = r("GKb9")
          , p = n(r("L583"))
          , m = n(r("V7qd"))
          , f = r("7B8t");
        t.useExerciseGuideContext = ()=>{
            var e, t;
            const {pathname: r} = (0,
            i.useLocation)()
              , n = (0,
            l.default)()
              , {gqlClient: h} = (0,
            o.useApolloGqlClient)()
              , y = (0,
            s.useRef)(null)
              , {state: E} = (0,
            m.default)()
              , v = (0,
            a.useSelector)((e=>e))
              , {taskInfo: b, taskProgress: k} = v
              , {setPromptVariable: w, setContextualLinks: I, sendEvent: C, resetConversation: O} = (0,
            p.default)()
              , P = null == (e = n.profile) ? void 0 : e.get("isAIGuideEnabled")
              , x = null == k || null == (t = k.itemData) ? void 0 : t.hints;
            (0,
            s.useEffect)((()=>{
                if (P && null != b && b.exerciseDescriptors && null != b && b.infoByExercise) {
                    if (x && x.length) {
                        const e = x.map((e=>"hint: " + (0,
                        c.injectWidgets)(e.content, e.widgets))).join("\n");
                        w("hints", (0,
                        d.sanitizeKaTeX)(e))
                    }
                    for (const e of b.exerciseDescriptors) {
                        const t = b.infoByExercise[e].id
                          , r = b.infoByExercise[e].initialFpmLevel;
                        w("fpm_level", r);
                        const n = E.learnableContentById[t];
                        if ("Exercise" === (null == n ? void 0 : n.contentKind)) {
                            const e = n.standards.map((e=>`- ${e.setId}: ${e.standardId} (${e.description})`));
                            w("standards", e.join("\n"))
                        }
                        h.query(f.CONTENT_GET_ASSESSMENT_ITEMS, {
                            variables: {
                                exerciseId: t
                            },
                            fetchPolicy: "network-only"
                        }).then((e=>{
                            var t, r;
                            if (null == (t = e.data) || null == (r = t.exerciseById) || !r.assessmentItems)
                                return;
                            const n = e.data.exerciseById.assessmentItems.filter(Boolean).filter((({itemShapeType: e, id: t})=>!g(b, t) && "item" === e)).map((({itemData: e})=>e)).filter(Boolean).map((e=>{
                                var t;
                                return null == (t = JSON.parse(e)) ? void 0 : t.question
                            }
                            )).filter(Boolean).slice(0, 5).map((({content: e, widgets: t})=>[(0,
                            c.injectWidgets)(e, t), (0,
                            c.getAnswersFromWidgets)(t).join(", ")])).map((([e,t])=>`${e}\nAnswer: ${t}`)).join("\n\n");
                            n.length && w("relatedquestions", (0,
                            d.sanitizeKaTeX)(n))
                        }
                        ))
                    }
                }
            }
            ), [h, P, w, b, x, E.learnableContentById]),
            (0,
            s.useEffect)((()=>{
                P && I((0,
                u.findLinksInLessonPage)())
            }
            ), [r, P, I]),
            (0,
            s.useEffect)((()=>{
                if (!P)
                    return;
                const e = k.itemData.question.content;
                if (!(y.current !== e))
                    return;
                const t = (0,
                c.injectWidgets)(k.itemData.question.content, k.itemData.question.widgets)
                  , r = (0,
                c.getAnswersFromWidgets)(k.itemData.question.widgets);
                w("context", (0,
                d.sanitizeKaTeX)(t)),
                w("correctanswer", (0,
                d.sanitizeKaTeX)(r.join(", "))),
                y.current && O(),
                y.current = e
            }
            ), [P, k, w, C, n.profile, O])
        }
        ;
        const g = (e,t)=>{
            var r;
            return (null != (r = e.taskReservedItems) ? r : []).map((e=>e.split("|")[1])).includes(t)
        }
    },
    OSiA: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useFastlyExerciseStoreDeps = void 0;
        var s = n(r("8OQS"))
          , a = r("tVXy")
          , o = r("VwlT")
          , i = r("0bMH")
          , l = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n);
            return n
        }(r("4PhQ"));
        const c = ["__typename"];
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function d(e) {
            return (0,
            s.default)(e, c)
        }
        t.useFastlyExerciseStoreDeps = e=>{
            var t, r, n;
            const {skip: s, exercise: c} = e
              , u = null != (t = null == c ? void 0 : c.id) ? t : ""
              , p = (0,
            a.useFastlyQuery)(o.GET_INITIAL_DATA_FOR_PRE_PHANTOM_USER_QUERY, {
                skip: s,
                variables: {
                    exerciseId: u,
                    input: {
                        exerciseId: u,
                        problemNumber: 1
                    }
                }
            });
            if (s)
                return {
                    status: "loading"
                };
            if ("loading" === p.status)
                return {
                    status: "loading"
                };
            if ("error" === p.status || "aborted" === p.status)
                return {
                    status: "error",
                    error: new l.KAError("Failed to load AssessmentItem",l.Errors.Internal,{
                        cause: p.error
                    })
                };
            const m = null == (r = p.data.assessmentItem) ? void 0 : r.item
              , f = null == (n = p.data.getDummyPracticeTaskForPrePhantomUser) ? void 0 : n.userTask;
            return m && f ? {
                status: "success",
                taskData: (0,
                i.transformUserTask)(d(f)),
                assessmentItem: d(m)
            } : (l.default.error("getOrCreatePracticeTask failed: GRAPHQL_ERROR", l.Errors.Internal, {
                sentryData: {
                    fingerprint: ["getOrCreatePracticeTask", "GRAPHQL_ERROR"]
                }
            }),
            {
                status: "error",
                error: new l.KAError("No data was returned from GraphQL.",l.Errors.Internal)
            })
        }
    },
    QTCh: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.StartOfTaskCard = void 0;
        var n = r("sExA")
          , s = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n);
            return n
        }(r("q1tI"))
          , a = r("FaXx")
          , o = r("nuHm")
          , i = r("nA/X");
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        t.StartOfTaskCard = e=>{
            const {analyticsPageName: t, masteryEnabled: r, taskInfo: l, taskProgress: c, quizOrUnitTestTimeEstimate: u} = e;
            if (["topic_quiz", "topic_unit_test"].includes(l.taskType)) {
                var d, p;
                const e = l.exerciseNames.length
                  , a = null != (d = null == u ? void 0 : u.upperBound) ? d : 0
                  , m = null != (p = null == u ? void 0 : u.lowerBound) ? p : 0;
                if (r) {
                    const r = (0,
                    n.values)(c.progressByExercise).reduce(((e,{currentFpmLevel: t})=>[].concat(e, [t])), []);
                    return "topic_quiz" === l.taskType ? s.createElement(o.StartOfTaskMasteryQuizCard, {
                        analyticsPageName: t,
                        totalQuestions: e,
                        currentMasteryLevel: (0,
                        i.getMinimumMasteryLevel)(r),
                        highTimeEstimateMinutes: a,
                        lowTimeEstimateMinutes: m
                    }) : s.createElement(o.StartOfTaskMasteryTestCard, {
                        analyticsPageName: t,
                        totalQuestions: e,
                        currentMasteryLevel: (0,
                        i.getMinimumMasteryLevel)(r),
                        highTimeEstimateMinutes: a,
                        lowTimeEstimateMinutes: m
                    })
                }
                return "topic_quiz" === l.taskType ? s.createElement(o.StartOfTaskNonMasteryQuizCard, {
                    analyticsPageName: t,
                    totalQuestions: e,
                    highTimeEstimateMinutes: a,
                    lowTimeEstimateMinutes: m
                }) : s.createElement(o.StartOfTaskNonMasteryTestCard, {
                    analyticsPageName: t,
                    totalQuestions: e,
                    highTimeEstimateMinutes: a,
                    lowTimeEstimateMinutes: m
                })
            }
            if (r) {
                const e = l.exerciseDescriptors[c.exerciseDescriptorIndex]
                  , r = c.progressByExercise[e]
                  , n = (null == r ? void 0 : r.currentFpmLevel) || "unfamiliar";
                return s.createElement(a.StartOfTaskMasteryPracticeCard, {
                    analyticsPageName: t,
                    currentMasteryLevel: n,
                    totalQuestions: l.taskLength
                })
            }
            return s.createElement(a.StartOfTaskNonMasteryPracticeCard, {
                analyticsPageName: t,
                totalQuestions: l.taskLength
            })
        }
    },
    TUyF: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createTaskProgress = t.createTaskInfo = t.createProblemProgress = t.createEnvironmentState = t.create = void 0,
        t.getCurrentExerciseData = A,
        t.getIncompleteReservedItems = t.getFpmPromotionUpdates = t.getCurrentReservedItem = void 0,
        t.getNextExerciseData = M,
        t.getNextProblemData = function(e) {
            const {taskProgress: t, problemProgress: r} = e
              , {exerciseName: n} = A(e)
              , {id: s, exerciseName: a, totalDone: o, isQuiz: i, assessmentItemCount: l} = M(e);
            let c;
            c = n === a ? o + (r && r.problemComplete ? 1 : 2) : o + 1;
            let u = null;
            if (i) {
                const e = (t && t.attemptHistory || []).length;
                u = e % l
            }
            return {
                exerciseId: s,
                problemNumber: c,
                quizProblemNumber: u
            }
        }
        ,
        t.getNextReservedItem = void 0,
        t.getRelatedContents = function(e) {
            const {taskProgress: t} = e
              , r = t.assessmentItemMetadata.problemType
              , {relatedContents: n, problemTypes: s} = A(e);
            if (null == s)
                return [];
            const a = s.filter((e=>e.name !== r));
            return n.filter((e=>a.every((t=>!(t.relatedVideos || []).map((e=>"" + e)).includes("" + e.id)))))
        }
        ,
        t.taskInfo = t.problemProgress = t.parseReservedItem = void 0,
        t.taskProgressReducer = C;
        var s = n(r("pVnL"))
          , a = m(r("8jAt"))
          , o = r("sExA")
          , i = r("ANjH")
          , l = (n(r("BQ0V")),
        n(r("TdMD")))
          , c = m(r("Borw"))
          , u = m(r("4PhQ"))
          , d = r("nA/X");
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (p = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function m(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = p(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const f = (0,
        r("0zMT").createCompose)({
            reduxDevtoolsOptions: {
                name: "Exercises"
            }
        })
          , g = e=>({
            calculator: !!e.answerArea.calculator,
            chi2Table: !!e.answerArea.chi2Table,
            periodicTable: !!e.answerArea.periodicTable,
            tTable: !!e.answerArea.tTable,
            zTable: !!e.answerArea.zTable
        })
          , h = e=>e.hints.length
          , y = e=>!!e.requiresScreenOrMouse
          , E = e=>"practice" === e.taskType
          , v = e=>"topic_quiz" === e.taskType || "topic_unit_test" === e.taskType || "subject_challenge" === e.taskType || "mastery_challenge" === e.taskType
          , b = e=>{
            var t, r, n;
            const a = e.cards.map((e=>e.exerciseName))
              , {userExercises: o} = e;
            if (!o)
                throw new u.KAError("userExercises is missing on taskData",u.Errors.Internal);
            const i = o.reduce(((e,t)=>{
                const r = t.exerciseModel
                  , n = r.relatedVideos || []
                  , a = r.relatedContent || [];
                return e[t.exercise] = {
                    id: r.id,
                    title: r.translatedDisplayName,
                    relatedVideos: n.map((e=>({
                        contentId: e.contentId,
                        duration: e.duration,
                        translatedTitle: e.translatedTitle,
                        translatedDescription: e.translatedDescription,
                        kaUrl: e.kaUrl,
                        imageUrl: e.imageUrl,
                        relativeUrl: e.relativeUrl,
                        id: e.id,
                        progressKey: e.progressKey,
                        nodeSlug: e.nodeSlug,
                        youtubeId: e.translatedYoutubeId,
                        __video: e
                    }))),
                    relatedContents: a.filter((e=>null !== e)).map((e=>"Video" === e.contentKind ? (0,
                    s.default)({}, e, {
                        slug: e.nodeSlug.replace("v/", ""),
                        youtubeId: e.translatedYoutubeId,
                        __video: e
                    }) : "Article" === e.contentKind ? (0,
                    s.default)({}, e, {
                        imageUrl: e.thumbnailUrl,
                        nodeUrl: e.relativeUrl,
                        slug: e.nodeSlug.replace("a/", "")
                    }) : "Exercise" === e.contentKind ? (0,
                    s.default)({}, e, {
                        slug: e.nodeSlug.replace("e/", "")
                    }) : e)),
                    problemTypes: r.problemTypes,
                    translatedProblemTypes: r.translatedProblemTypes,
                    assessmentItemCount: r.assessmentItemCount,
                    isQuiz: r.isQuiz,
                    isSkillCheck: r.isSkillCheck,
                    initialFpmLevel: t.fpmMasteryLevel,
                    maximumExerciseProgressDt: t.maximumExerciseProgressDt,
                    nodeSlug: r.nodeSlug
                },
                e
            }
            ), {})
              , l = e.taskJson;
            if (!l)
                throw new u.KAError("taskJson is missing on taskData",u.Errors.Internal);
            return {
                completionCriteria: c.parse(l.completionCriteria.name),
                content: E(l) ? l.content : null,
                exerciseDescriptors: a,
                exerciseNames: o.map((e=>e.exercise)),
                infoByExercise: i,
                promotionCriteria: E(l) ? l.promotionCriteria : null,
                pointBounty: l.pointBounty,
                requireAttemptBeforeHints: "topic_quiz" === l.taskType || "topic_unit_test" === l.taskType || "subject_challenge" === l.taskType || "mastery_challenge" === l.taskType,
                showSkipButton: e.includeSkipButton,
                taskContentKey: v(l) || E(l) ? l.contentKey : null,
                taskId: l.id,
                taskKey: l.key,
                taskLength: null != (t = null != (r = null == (n = l.reservedItems) ? void 0 : n.length) ? r : l.exerciseLength) ? t : 0,
                taskReservedItems: l.reservedItems,
                taskSlug: E(l) ? l.slug : null,
                taskType: l.taskType
            }
        }
        ;
        t.createTaskInfo = b;
        const k = (e,t,r=0)=>{
            const n = e.taskJson;
            if (!n)
                throw new u.KAError("taskJson is missing on taskData",u.Errors.Internal);
            const a = n.taskAttemptHistory.map((e=>({
                correct: e.correct,
                seenHint: e.seenHint
            })))
              , {cards: o} = e;
            if (!o)
                throw new u.KAError("cards is missing on taskData",u.Errors.Internal);
            const {userExercises: i} = e;
            if (!i)
                throw new u.KAError("userExercises is missing on taskData",u.Errors.Internal);
            if (o.length > 0) {
                const e = i.find((e=>e.exercise === o[0].exerciseName));
                if (!e)
                    throw new u.KAError("couldn't find first userExercise",u.Errors.Internal);
                0 === e.lastAttemptNumber && 0 === e.lastCountHints && r > 0 && a.push({
                    correct: !1,
                    seenHint: !0
                })
            }
            const l = i.reduce(((e,t)=>(e[t.exercise] = {
                currentFpmLevel: t.fpmMasteryLevel,
                totalDone: t.totalDone,
                initialHintsVisible: t.lastCountHints,
                initialNumberOfAttempts: t.lastAttemptNumber
            },
            e)), {})
              , d = i.reduce(((e,t)=>(e[t.exerciseModel.progressKey] = t.exercise,
            e)), {});
            if (!t.itemData)
                throw new u.KAError("expected itemData to be present",u.Errors.Internal);
            const p = JSON.parse(t.itemData)
              , m = c.parse(n.completionCriteria.name)
              , f = n.reservedItemsCompleted
              , h = {
                exerciseDescriptorIndex: 0,
                exerciseProgressKeyToName: d,
                progressByExercise: l,
                attemptHistory: a,
                completedAssessmentItems: [],
                completionCriteriaText: c.format(c.parse(n.completionCriteria.name), a),
                completionCriteriaSatisfied: !1,
                taskComplete: !1,
                movingToNextProblem: !1,
                reservedItemsCompleted: f,
                itemData: p,
                assessmentItemMetadata: {
                    sha: t.sha,
                    id: t.id,
                    problemType: t.problemType,
                    sidebarItems: g(p)
                },
                pointsEarned: n.pointsEarned,
                attemptPromises: [],
                assignmentContext: null,
                promotionCriteriaSatisfied: !1,
                readAloud: {
                    state: null,
                    serializedState: null,
                    exerciseID: null,
                    text: null
                },
                contentPath: {
                    domainId: "",
                    courseId: "",
                    unitId: "",
                    lessonId: "",
                    learnableContentId: "",
                    learnableContentKind: "Exercise"
                }
            }
              , y = c.isSatisfied(m, {
                taskProgress: h
            })
              , E = b(e);
            return (0,
            s.default)({}, h, {
                completionCriteriaSatisfied: y,
                promotionCriteriaSatisfied: c.isPromoted(m, {
                    taskProgress: h,
                    taskInfo: E
                }),
                taskComplete: y
            })
        }
        ;
        t.createTaskProgress = k;
        const w = (e,t,r=0)=>{
            const {cards: n} = e;
            if (!n)
                throw new u.KAError("cards is missing on taskData",u.Errors.Internal);
            if (0 === n.length)
                return {
                    hintsVisible: 0,
                    totalHints: 0,
                    requiresScreenOrMouse: !1,
                    attemptMessage: null,
                    answerStatus: "unanswered",
                    numberOfAttempts: 0,
                    hintsAreFree: !1,
                    problemComplete: !1,
                    interacted: !1,
                    updatedAnswer: !1,
                    answerable: !1,
                    relatedContentsVisible: !1,
                    recentlyCheckedAnswer: !1,
                    guessLog: [],
                    drawingAreaAvailable: !1,
                    keypadHeight: null,
                    readOnly: !1,
                    showRationales: !1,
                    feedbackPopoverVisible: !1
                };
            const {userExercises: s} = e;
            if (!s)
                throw new u.KAError("userExercises is missing on taskData",u.Errors.Internal);
            const a = s.find((e=>e.exercise === n[0].exerciseName));
            if (!a)
                throw new u.KAError("can't find first userExercise",u.Errors.Internal);
            const o = a.lastAttemptNumber
              , i = JSON.parse(t.itemData)
              , l = Math.max(a.lastCountHints, r || 0);
            return {
                hintsVisible: l,
                totalHints: h(i),
                requiresScreenOrMouse: y(i),
                relatedContentsVisible: !1,
                attemptMessage: null,
                answerStatus: l > 0 || o > 0 ? "incorrect" : "unanswered",
                numberOfAttempts: o,
                hintsAreFree: o > 0,
                problemComplete: !1,
                interacted: !1,
                updatedAnswer: !1,
                answerable: !1,
                recentlyCheckedAnswer: !1,
                guessLog: [],
                drawingAreaAvailable: !0,
                keypadHeight: null,
                lastAttemptOrHintTime: Date.now(),
                lastGuess: null,
                readOnly: !1,
                showRationales: !1
            }
        }
        ;
        function I(e, t) {
            const {taskInfo: r} = e;
            switch (t.type) {
            case "LOADED_EXERCISE":
            case "UPDATE_TASK":
                return b(t.taskData);
            default:
                return r
            }
        }
        function C(e, t) {
            const {taskInfo: r, taskProgress: n, problemProgress: a} = e;
            switch (t.type) {
            case "SET_CONTENT_PATH":
                return (0,
                s.default)({}, n, {
                    contentPath: t.contentPath
                });
            case "UPDATE_READ_ALOUD":
                return (0,
                s.default)({}, n, {
                    readAloud: (0,
                    s.default)({}, n.readAloud, {
                        serializedState: t.serializedState
                    })
                });
            case "READ_ALOUD_EXERCISE_TEXT":
                return (0,
                s.default)({}, n, {
                    readAloud: (0,
                    s.default)({}, n.readAloud, {
                        text: t.text
                    })
                });
            case "READ_ALOUD_EXERCISE_ID":
                return (0,
                s.default)({}, n, {
                    readAloud: (0,
                    s.default)({}, n.readAloud, {
                        exerciseID: t.exerciseID
                    })
                });
            case "READ_ALOUD_STATE":
                return (0,
                s.default)({}, n, {
                    readAloud: (0,
                    s.default)({}, n.readAloud, {
                        state: t.state
                    })
                });
            case "LOADED_EXERCISE":
                return k(t.taskData, t.assessmentItem, t.offlineHintsCount);
            case "CHECK_ANSWER":
                {
                    const {correct: e, empty: o} = t.score
                      , i = t.skipped;
                    if (!i && o)
                        return n;
                    const l = 0 === a.numberOfAttempts && 0 === a.hintsVisible ? [].concat(n.attemptHistory, [{
                        correct: !i && e,
                        seenHint: !1
                    }]) : n.attemptHistory
                      , {exerciseDescriptorIndex: u, progressByExercise: d} = n
                      , p = r.exerciseDescriptors[u]
                      , m = d[p].totalDone
                      , f = (0,
                    s.default)({}, d, {
                        [p]: (0,
                        s.default)({}, d[p], {
                            totalDone: m + (i || e ? 1 : 0)
                        })
                    })
                      , g = (0,
                    s.default)({}, n, {
                        attemptHistory: l,
                        progressByExercise: f
                    })
                      , h = {
                        taskInfo: r,
                        taskProgress: g,
                        problemProgress: a
                    };
                    return (0,
                    s.default)({}, g, {
                        completionCriteriaSatisfied: c.isSatisfied(r.completionCriteria, h),
                        completionCriteriaText: c.format(r.completionCriteria, g.attemptHistory),
                        promotionCriteriaSatisfied: c.isPromoted(r.completionCriteria, h)
                    })
                }
            case "SHOW_HINT":
                if (0 === a.numberOfAttempts && 0 === a.hintsVisible) {
                    const e = (0,
                    s.default)({}, n, {
                        attemptHistory: [].concat(n.attemptHistory, [{
                            correct: !1,
                            seenHint: !0
                        }])
                    })
                      , t = {
                        taskInfo: r,
                        taskProgress: e,
                        problemProgress: a
                    };
                    return (0,
                    s.default)({}, e, {
                        completionCriteriaSatisfied: c.isSatisfied(r.completionCriteria, t),
                        completionCriteriaText: c.format(r.completionCriteria, e.attemptHistory),
                        promotionCriteriaSatisfied: c.isPromoted(r.completionCriteria, t)
                    })
                }
                return n;
            case "MOVING_TO_NEXT_PROBLEM":
                return (0,
                s.default)({}, n, {
                    movingToNextProblem: !0
                });
            case "GOTO_NEXT_PROBLEM":
                {
                    var o, i, l, d;
                    const {assessmentItem: e} = t
                      , p = r.exerciseDescriptors[n.exerciseDescriptorIndex]
                      , m = [].concat(n.completedAssessmentItems, [{
                        metadata: (0,
                        s.default)({}, n.assessmentItemMetadata),
                        exerciseName: p
                    }]);
                    let f;
                    if (n.reservedItemsCompleted) {
                        f = [].concat(n.reservedItemsCompleted);
                        const {taskReservedItems: e} = r;
                        if (!e)
                            throw new u.KAError("taskReservedItem is undefined",u.Errors.Internal);
                        const t = D(e, n.assessmentItemMetadata.id);
                        t && f.push(t)
                    }
                    if (n.completionCriteriaSatisfied || !e) {
                        n.completionCriteriaSatisfied || u.default.error("Setting task complete while completion criteria is unsatisfied", u.Errors.Internal, {
                            sentryData: {
                                contexts: {
                                    extras: {
                                        taskInfo: JSON.stringify(r),
                                        taskProgress: JSON.stringify(n)
                                    }
                                }
                            }
                        });
                        const e = (0,
                        s.default)({}, n, {
                            completedAssessmentItems: m,
                            movingToNextProblem: !1,
                            taskComplete: !0
                        })
                          , t = {
                            taskInfo: r,
                            taskProgress: e,
                            problemProgress: a
                        };
                        return (0,
                        s.default)({}, e, {
                            promotionCriteriaSatisfied: c.isPromoted(r.completionCriteria, t)
                        })
                    }
                    const h = n.progressByExercise
                      , y = (0,
                    s.default)({}, h, {
                        [p]: (0,
                        s.default)({}, h[p], {
                            initialHintsVisible: 0,
                            initialNumberOfAttempts: 0
                        })
                    })
                      , E = JSON.parse(e.itemData)
                      , v = null != (o = null == (i = n.readAloud) ? void 0 : i.exerciseID) ? o : null
                      , b = null != (l = null == (d = n.readAloud) ? void 0 : d.serializedState) ? l : null;
                    return (0,
                    s.default)({}, n, {
                        completedAssessmentItems: m,
                        exerciseDescriptorIndex: (n.exerciseDescriptorIndex + 1) % r.exerciseDescriptors.length,
                        progressByExercise: y,
                        itemData: E,
                        reservedItemsCompleted: f,
                        assessmentItemMetadata: {
                            sha: e.sha,
                            id: e.id,
                            problemType: e.problemType,
                            sidebarItems: g(E)
                        },
                        movingToNextProblem: !1,
                        readAloud: {
                            text: null,
                            state: "idle",
                            serializedState: b,
                            exerciseID: v
                        }
                    })
                }
            case "ADD_POINTS":
                return (0,
                s.default)({}, n, {
                    pointsEarned: n.pointsEarned + t.points
                });
            case "ADD_ATTEMPT_PROMISE":
                return (0,
                s.default)({}, n, {
                    attemptPromises: [].concat(n.attemptPromises, [t.promise])
                });
            case "UPDATE_USER_EXERCISE":
                {
                    const {userExercise: e} = t;
                    return (0,
                    s.default)({}, n, {
                        progressByExercise: (0,
                        s.default)({}, n.progressByExercise, {
                            [e.exercise]: (0,
                            s.default)({}, n.progressByExercise[e.exercise], {
                                currentFpmLevel: e.fpmMasteryLevel
                            })
                        })
                    })
                }
            case "ON_FPM_PROMOTIONS":
                {
                    const {promotions: e} = t
                      , r = R(n, e || {});
                    return (0,
                    s.default)({}, n, {
                        progressByExercise: (0,
                        s.default)({}, n.progressByExercise, r)
                    })
                }
            case "ADD_ASSIGNMENT_COMPLETED_CONTEXT":
                {
                    const {firstCompletion: e, pastDue: r, perfectScore: a, studentListName: o, improvedScore: i} = t.context
                      , l = {
                        firstCompletion: e,
                        pastDue: r,
                        perfectScore: a,
                        studentListName: o,
                        improvedScore: i
                    };
                    return (0,
                    s.default)({}, n, {
                        assignmentContext: l
                    })
                }
            default:
                return n
            }
        }
        function O(e, t) {
            const {taskInfo: r, taskProgress: n, problemProgress: o} = e;
            switch (t.type) {
            case "LOADED_EXERCISE":
                return w(t.taskData, t.assessmentItem, t.offlineHintsCount);
            case "REFRESH_LIVE_UPDATES":
                {
                    if ("practice" !== r.taskType)
                        return o;
                    const e = r.exerciseDescriptors[n.exerciseDescriptorIndex]
                      , {currentFpmLevel: t} = n.progressByExercise[e]
                      , a = (0,
                    d.getLiveMasteryDetails)(n.attemptHistory, r.completionCriteria, t);
                    return (0,
                    s.default)({}, o, {
                        liveUpdateDetails: a
                    })
                }
            case "SHOW_RELATED_CONTENTS":
                return (0,
                s.default)({}, o, {
                    relatedContentsVisible: !0
                });
            case "CHECK_ANSWER":
                {
                    const {empty: e, correct: r, message: n, guess: i, suppressAlmostThere: l} = t.score
                      , {skipped: c} = t
                      , u = (0,
                    s.default)({}, o, {
                        updatedAnswer: !1,
                        recentlyCheckedAnswer: !c,
                        lastAttemptOrHintTime: Date.now(),
                        lastGuess: JSON.stringify(i)
                    });
                    return c || !e && !r ? (0,
                    s.default)({}, u, {
                        attemptMessage: null,
                        answerStatus: "incorrect",
                        hintsAreFree: !0,
                        numberOfAttempts: o.numberOfAttempts + 1,
                        problemComplete: !1,
                        guessLog: o.guessLog.concat(JSON.stringify(i)),
                        feedbackPopoverVisible: !c
                    }) : r ? (0,
                    s.default)({}, u, {
                        attemptMessage: null,
                        answerStatus: "correct",
                        hintsAreFree: !0,
                        problemComplete: !0,
                        numberOfAttempts: o.numberOfAttempts + 1,
                        guessLog: o.guessLog.concat(JSON.stringify(i)),
                        readOnly: !0,
                        showRationales: !0,
                        feedbackPopoverVisible: !0
                    }) : (0,
                    s.default)({}, u, {
                        suppressAlmostThere: l,
                        attemptMessage: n || a._("There are still more parts of this question to answer."),
                        feedbackPopoverVisible: !0
                    })
                }
            case "GOTO_NEXT_PROBLEM":
                {
                    if (n.completionCriteriaSatisfied || !t.assessmentItem)
                        return (0,
                        s.default)({}, o, {
                            feedbackPopoverVisible: !1
                        });
                    const e = JSON.parse(t.assessmentItem.itemData)
                      , a = h(e)
                      , i = r.exerciseDescriptors[n.exerciseDescriptorIndex]
                      , l = r.exerciseDescriptors[(n.exerciseDescriptorIndex + 1) % r.exerciseDescriptors.length];
                    let {initialHintsVisible: c, initialNumberOfAttempts: u} = n.progressByExercise[l];
                    return i === l && (c = 0,
                    u = 0),
                    (0,
                    s.default)({}, o, {
                        hintsVisible: c,
                        totalHints: a,
                        attemptMessage: null,
                        answerStatus: c > 0 || u > 0 ? "incorrect" : "unanswered",
                        numberOfAttempts: u,
                        hintsAreFree: !1,
                        problemComplete: !1,
                        interacted: !1,
                        updatedAnswer: !1,
                        answerable: !1,
                        recentlyCheckedAnswer: !1,
                        relatedContentsVisible: !1,
                        guessLog: [],
                        drawingAreaAvailable: !0,
                        readOnly: !1,
                        showRationales: !1,
                        feedbackPopoverVisible: !1,
                        lastAttemptOrHintTime: Date.now()
                    })
                }
            case "SHOW_HINT":
                return (0,
                s.default)({}, o, {
                    answerStatus: "correct" === o.answerStatus ? o.answerStatus : "incorrect",
                    hintsVisible: o.hintsVisible + 1,
                    lastAttemptOrHintTime: Date.now()
                });
            case "ANSWERABLE_CHANGED":
                return (0,
                s.default)({}, o, {
                    answerable: t.answerable
                });
            case "INTERACTED":
                return (0,
                s.default)({}, o, {
                    interacted: !0,
                    updatedAnswer: !0
                });
            case "KEYPAD_LAYOUT_CHANGED":
                return (0,
                s.default)({}, o, {
                    keypadHeight: t.height
                });
            case "CHECK_ANSWER_TIMEOUT":
                return (0,
                s.default)({}, o, {
                    recentlyCheckedAnswer: !1
                });
            case "SET_DRAWING_AREA_AVAILABILITY":
                return (0,
                s.default)({}, o, {
                    drawingAreaAvailable: t.available
                });
            case "HIDE_FEEDBACK_POPOVER":
                return (0,
                s.default)({}, o, {
                    feedbackPopoverVisible: !1
                });
            default:
                return o
            }
        }
        t.createProblemProgress = w;
        const P = ({isLoaded: e, inModal: t=!1, inPractice: r=!1, nextItem: n, nextTaskKind: s, topic: a, topicId: o, onShowRelatedContent: i})=>({
            isLoaded: e,
            inModal: t,
            inPractice: r,
            nextItem: n,
            nextTaskKind: s,
            topic: a,
            topicId: o,
            movingToNextTask: !1,
            error: null,
            onShowRelatedContent: i
        });
        t.createEnvironmentState = P;
        const x = (e,t)=>{
            const {environmentState: r} = e;
            switch (t.type) {
            case "LOADED_EXERCISE":
                return (0,
                s.default)({}, r, {
                    isLoaded: !0
                });
            case "MOVING_TO_NEXT_TASK":
                return (0,
                s.default)({}, r, {
                    movingToNextTask: !0,
                    isLoaded: !1
                });
            case "REPORT_ERROR":
                return (0,
                s.default)({}, r, {
                    error: t.error
                });
            default:
                return r
            }
        }
        ;
        function T(e, t) {
            return {
                taskInfo: I(e, t),
                taskProgress: C(e, t),
                problemProgress: O(e, t),
                environmentState: x(e, t)
            }
        }
        const S = [l.default];
        function A(e) {
            const {taskInfo: t, taskProgress: r} = e
              , n = t.exerciseDescriptors[r.exerciseDescriptorIndex];
            return (0,
            s.default)({
                exerciseName: n
            }, r.progressByExercise[n], t.infoByExercise[n])
        }
        t.create = ({nextItem: e, nextTaskKind: t, topic: r, topicId: n, inModal: s, inPractice: a, onShowRelatedContent: o},l,c,u)=>(e=>{
            return f(i.applyMiddleware.apply(void 0, [(t = e,
            e=>r=>n=>{
                const s = r(n);
                return t(n, e.getState()),
                s
            }
            )].concat(S)))(i.createStore);
            var t
        }
        )(l)(T, {
            taskInfo: b(c),
            taskProgress: k(c, u),
            problemProgress: w(c, u),
            environmentState: P({
                isLoaded: !1,
                nextItem: e,
                nextTaskKind: t,
                topic: r,
                topicId: n,
                inModal: s,
                inPractice: a,
                onShowRelatedContent: o
            })
        });
        const _ = e=>{
            const t = e.split("|");
            return 2 !== t.length ? null : {
                exerciseId: t[0],
                itemId: t[1]
            }
        }
        ;
        t.parseReservedItem = _;
        const D = (e,t)=>{
            for (const r of e) {
                const e = _(r);
                if (e && e.itemId === t)
                    return r
            }
            return null
        }
          , N = (e,t)=>{
            const r = t.reduce(((e,t)=>(e[t] = e[t] ? e[t] + 1 : 1,
            e)), {});
            return e.filter((e=>0 === (r[e] || 0) || (r[e] -= 1,
            !1))).map(_).filter((e=>!!e))
        }
        ;
        t.getIncompleteReservedItems = N;
        t.getCurrentReservedItem = e=>{
            const {taskInfo: t, taskProgress: r} = e;
            if (!t.taskReservedItems)
                return {};
            const {reservedItemsCompleted: n} = r;
            if (!n)
                throw new u.KAError("reservedItemsCompleted is undefined",u.Errors.Internal);
            const s = N(t.taskReservedItems, n);
            return s.length > 0 ? s[0] : {}
        }
        ;
        function M(e) {
            const {taskInfo: t, taskProgress: r} = e
              , n = t.exerciseDescriptors[(r.exerciseDescriptorIndex + 1) % t.exerciseDescriptors.length];
            return (0,
            s.default)({
                exerciseName: n
            }, r.progressByExercise[n], t.infoByExercise[n])
        }
        t.getNextReservedItem = e=>{
            const {taskInfo: t, taskProgress: r} = e;
            if (!t.taskReservedItems)
                return {};
            const {reservedItemsCompleted: n} = r;
            if (!n)
                throw new u.KAError("reservedItemsCompleted is undefined",u.Errors.Internal);
            const s = N(t.taskReservedItems, n);
            return s.length > 1 ? s[1] : {}
        }
        ;
        const R = (e,t)=>{
            if (!t)
                return {};
            return (0,
            o.entries)(t).reduce(((t,[r,n])=>{
                const a = e.exerciseProgressKeyToName[r];
                return a ? (t[a] = (0,
                s.default)({}, e.progressByExercise[a], {
                    currentFpmLevel: n
                }),
                t) : t
            }
            ), {})
        }
        ;
        t.getFpmPromotionUpdates = R;
        const j = I;
        t.taskInfo = j;
        const L = O;
        t.problemProgress = L
    },
    Ub0W: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(r("Pwnf"))
          , a = d(r("8jAt"))
          , o = r("mR6N")
          , i = d(r("q1tI"))
          , l = d(r("whzC"))
          , c = r("Y8R6");
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function d(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var p = ({error: e})=>{
            const t = "string" == typeof e.uuid ? e.uuid : null
              , r = l.safeLinkTo("https://www.khanacademy.org/reportissue?type=Defect")
              , n = i.createElement("a", {
                href: r,
                className: (0,
                o.css)(m.errorLink),
                target: "_blank"
            }, a._("tell us"))
              , s = i.createElement("a", {
                href: "javascript:void(0)",
                onClick: ()=>(0,
                c.reload)(),
                className: (0,
                o.css)(m.errorLink)
            }, a._("refresh"));
            let u = ""
              , {code: d} = e;
            switch (d) {
            case "CLIENT_AHEAD":
                u = a.$_("Uh oh, it looks like we didn't get some of your previous answers.  You'll need to %(refresh)s to continue. If you think this is a mistake %(tellUs)s.", {
                    refresh: s,
                    tellUs: n
                });
                break;
            case "RECENT_LOGOUT":
                u = a.$_("Uh oh, it looks like you recently logged out. To continue: copy your answer, log in, and enter your answer again. If you think this is a mistake, %(tellUs)s.", {
                    refresh: s,
                    tellUs: n
                });
                break;
            case "STATE_MISMATCH":
                u = a.$_("We’ve run into an error. This may be due to accessing this content from multiple locations. Please close other locations, then return here and %(refresh)s. If this problem persists, %(tellUs)s.", {
                    refresh: s,
                    tellUs: n
                });
                break;
            case "TIMEOUT":
                u = a.$_("Uh oh, it looks like a network request timed out! You'll need to %(refresh)s to continue. If you think this is a mistake, %(tellUs)s.", {
                    refresh: s,
                    tellUs: n
                });
                break;
            default:
                u = a.$_("Uh oh, it looks like we ran into an error. You need to %(refresh)s. If this problem persists, %(tellUs)s.", {
                    refresh: s,
                    tellUs: n
                }),
                d = d || "UNKNOWN_ERROR"
            }
            return i.createElement("div", {
                className: (0,
                o.css)(m.errorBar)
            }, u, i.createElement("span", {
                className: (0,
                o.css)(m.errorCode)
            }, a.$_(" [Error code: %(errorCode)s]", {
                errorCode: `${d}${t ? ":" + t : ""}`
            })))
        }
        ;
        t.default = p;
        const m = o.StyleSheet.create({
            errorBar: {
                backgroundColor: s.default.red,
                borderRadius: 4,
                color: s.default.white,
                textAlign: "center",
                fontSize: 15,
                padding: 10,
                zIndex: 2,
                width: "100%",
                display: "block"
            },
            errorLink: {
                color: "inherit"
            },
            errorCode: {
                fontSize: 15
            }
        })
    },
    "UiF/": function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(r("pVnL"))
          , a = n(r("Pwnf"))
          , o = r("JimW")
          , i = F(r("8jAt"))
          , l = r("JasB")
          , c = n(r("gE8/"))
          , u = r("sExA")
          , d = r("mR6N")
          , p = F(r("0UwG"))
          , m = F(r("q1tI"))
          , f = r("/MKj")
          , g = r("YkLl")
          , h = r("NXn8")
          , y = n(r("xKbm"))
          , E = r("M7TR")
          , v = r("C/Im")
          , b = r("4PhQ")
          , k = r("8SBg")
          , w = n(r("7e7+"))
          , I = n(r("uEGL"))
          , C = n(r("Q8Wn"))
          , O = n(r("Hy2Q"))
          , P = n(r("WcVm"))
          , x = n(r("poJv"))
          , T = n(r("3y2U"))
          , S = n(r("wmGg"))
          , A = F(r("6OHE"))
          , _ = n(r("UP+7"))
          , D = r("UNGa")
          , N = F(r("a7t1"))
          , M = r("JMjv")
          , R = r("sPai")
          , j = r("6Os4")
          , L = n(r("Ub0W"))
          , H = n(r("LE1t"))
          , B = n(r("cuGt"))
          , q = n(r("nwlX"))
          , W = r("QTCh")
          , z = r("TUyF")
          , U = r("M2au");
        function K(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (K = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function F(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = K(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        class V extends m.Component {
            componentDidMount() {
                "ResizeObserver"in window && (this.resizeObserver = new window.ResizeObserver((()=>{
                    window.dispatchEvent(M.libraryExerciseResizeEvent)
                }
                )),
                this.resizeContainer && this.resizeObserver.observe(this.resizeContainer))
            }
            componentWillUnmount() {
                var e;
                "ResizeObserver"in window && (null == (e = this.resizeObserver) || e.disconnect())
            }
            render() {
                return m.createElement("div", {
                    className: (0,
                    d.css)(G.container),
                    ref: e=>this.resizeContainer = e
                }, this.props.children)
            }
        }
        const G = d.StyleSheet.create({
            footerAndContentWrapper: {
                position: "relative"
            },
            wrapperOuter: {
                overflowX: "auto"
            },
            wrapperInner: {
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                flexGrow: 1,
                minHeight: 350,
                paddingLeft: O.default.wrapperPadding,
                paddingRight: O.default.wrapperPadding,
                width: "100%",
                maxWidth: O.default.wrapperWidth,
                margin: "auto",
                [A.queries.large]: {
                    minHeight: 500
                }
            },
            fullBleed: {
                paddingLeft: 0,
                paddingRight: 0,
                margin: 0,
                height: "100%",
                width: "100%",
                maxWidth: "100%"
            },
            withTopBorder: {
                borderTop: `1px solid ${A.colors.gray85}`
            },
            phoneHelpBarContainer: {
                display: "none",
                [A.queries.small]: {
                    display: "block",
                    marginTop: c.default.xxLarge_48
                }
            },
            helpBarContainer: {
                display: "block",
                [A.queries.small]: {
                    display: "none"
                }
            },
            toolToggleButtons: {
                flexDirection: "row",
                margin: -c.default.xSmall_8
            },
            container: {
                height: "100%"
            },
            cheatContainer: {
                flexDirection: "row"
            },
            cheatButton: {
                flexGrow: 1
            },
            keypad: {
                [I.default.lgOrSmaller]: {
                    zIndex: O.default.zIndexes.footer - 1,
                    bottom: A.chromeSizes.exercisePhoneFooterHeight
                }
            }
        })
          , Q = e=>e && C.default.isTablet ? d.StyleSheet.create({
            style: {
                [A.queries.large]: {
                    paddingBottom: e
                }
            }
        }).style : null;
        var $ = e=>{
            var t;
            const r = (0,
            v.useIsMounted)()
              , n = (0,
            g.useMarkConversion)()
              , {gqlClient: I} = (0,
            h.useApolloGqlClient)()
              , O = (0,
            f.useDispatch)()
              , A = ()=>O(N.showRelatedContents())
              , M = (0,
            f.useSelector)((e=>e))
              , {taskInfo: K, taskProgress: F, problemProgress: $} = M
              , J = K.requireAttemptBeforeHints && "unanswered" === $.answerStatus
              , X = F.taskComplete || F.completionCriteriaSatisfied && F.movingToNextProblem
              , {title: Y} = (0,
            z.getCurrentExerciseData)(M)
              , Z = F.assessmentItemMetadata.id
              , ee = (0,
            z.getRelatedContents)(M)
              , te = $.relatedContentsVisible
              , re = F.assessmentItemMetadata.sidebarItems || {};
            (null == (t = e.contentPath) ? void 0 : t.learnableContentId) !== F.contentPath.learnableContentId && O(N.setContentPath(e.contentPath));
            const ne = m.useRef(null)
              , se = m.useRef(null)
              , ae = m.useRef(null)
              , oe = m.useRef(null)
              , [ie,le] = m.useState(!1)
              , [ce,ue] = m.useState([])
              , [de,pe] = m.useState(null)
              , [me,fe] = m.useState(null)
              , [ge,he] = m.useState(null)
              , [ye,Ee] = m.useState(!1)
              , [ve,be] = m.useState(!1)
              , [ke,we] = m.useState(!1);
            (0,
            U.useExerciseGuideContext)(),
            m.useEffect((()=>{
                Ie();
                const e = ()=>we(!0)
                  , t = ()=>we(!1);
                return window.addEventListener("offline", e),
                window.addEventListener("online", t),
                ()=>{
                    window.removeEventListener("offline", e),
                    window.removeEventListener("online", t)
                }
            }
            ), []),
            m.useEffect((()=>{
                ne.current && (ne.current.scrollTop = 0,
                Ie()),
                function(e, t) {
                    if (e.current) {
                        let n = null;
                        try {
                            var r;
                            n = JSON.stringify(null == e || null == (r = e.current) ? void 0 : r.getSerializedState())
                        } catch (e) {}
                        "null" !== n && "undefined" !== n || (n = null),
                        t(N.updateReadAloudContext(n))
                    }
                }(oe, O)
            }
            ), [Z, X, O]);
            const Ie = ()=>{
                ae.current && ae.current.focus()
            }
              , Ce = ()=>{
                le((e=>!e)),
                n({
                    id: "drawing_area_toggle"
                })
            }
              , Oe = ()=>{
                var e;
                return null == (e = se.current) ? void 0 : e.clear()
            }
              , Pe = ()=>{
                r() && Ee(!ye)
            }
              , xe = ()=>{
                r() && be(!ve)
            }
              , Te = ()=>{
                O(N.showHintAndSendHintLog(I))
            }
              , Se = e=>{
                $.answerable !== e && O(N.answerableChanged(e))
            }
              , Ae = e=>{
                O(N.setDrawingAreaAvailability(e))
            }
              , _e = ()=>{
                oe.current && $.keypadHeight && oe.current.blur()
            }
              , De = ()=>{
                O(N.hideFeedbackPopover()),
                oe.current && "unanswered" !== $.answerStatus && oe.current.deselectIncorrectSelectedChoices()
            }
              , Ne = ()=>{
                $.feedbackPopoverVisible && De(),
                O(N.interacted())
            }
              , Me = ()=>{
                e.onGotoNextProblem(),
                O(N.gotoNextProblem(I)),
                le(!1)
            }
              , Re = (e,t)=>{
                O(N.checkAnswerAndMaybeSendProblemLog(I, e, t, null, He))
            }
              , je = ()=>{
                const e = oe.current;
                if (null == e)
                    throw new b.KAError("cannot check answer on null item renderer",b.Errors.Internal);
                const t = e.scoreInput();
                Re(t, !1),
                n({
                    id: "click_check_answer"
                }),
                t.empty || e.showRationalesForCurrentlySelectedChoices()
            }
              , Le = e=>{
                "Enter" === e.key && ["INPUT", "SELECT", "TEXTAREA"].includes(e.target.nodeName) && (e.preventDefault(),
                $.problemComplete ? Me() : je())
            }
              , He = t=>{
                const {quiz: r, quizPositionKey: n, unitTest: s} = e;
                if (!r && !s)
                    return;
                const a = (null == r ? void 0 : r.coveredLessons) || (null == s ? void 0 : s.coveredLessons);
                if (!a)
                    return void ue([]);
                if (!t || 0 === t.length)
                    return;
                const o = r ? t.filter((e=>e.sourceId === n)) : t
                  , i = a.filter((e=>{
                    const t = e.learnableContent.map((e=>e.id));
                    return o.some((e=>t.includes(e.contentId)))
                }
                ));
                ue(i.map((e=>({
                    relativeUrl: e.relativeUrl,
                    translatedTitle: e.translatedTitle
                }))))
            }
              , Be = ()=>{
                var t;
                const {isStartOfTask: r} = e;
                if (r)
                    return (()=>{
                        var t;
                        const {analyticsPageName: r, masteryEnabled: n, quiz: s, unitTest: a} = e;
                        return m.createElement(W.StartOfTaskCard, {
                            analyticsPageName: r,
                            masteryEnabled: n,
                            taskInfo: K,
                            taskProgress: F,
                            quizOrUnitTestTimeEstimate: null == (t = s || a) ? void 0 : t.timeEstimate
                        })
                    }
                    )();
                if (F.taskComplete)
                    return (()=>{
                        const {masteryEnabled: t, unitId: r} = e
                          , {taskId: n, taskType: s, taskSlug: a} = K;
                        if (!n)
                            throw new b.KAError("Unable to render EoT without a taskId",b.Errors.Internal,{
                                sentryData: {
                                    contexts: {
                                        Data: {
                                            taskSlug: a
                                        }
                                    }
                                }
                            });
                        return m.createElement(j.EndOfTaskCard, {
                            taskId: n,
                            masteryEnabled: t,
                            unitId: r,
                            taskType: s,
                            quizOrUnitTestLessonRecommendations: ce
                        })
                    }
                    )();
                if (F.completionCriteriaSatisfied && F.movingToNextProblem) {
                    const e = K ? {
                        taskId: K.taskId,
                        taskKey: K.taskKey,
                        taskType: K.taskType,
                        taskSlug: K.taskSlug
                    } : void 0;
                    return m.createElement(w.default, {
                        sentryId: "library_exercise_eot_load",
                        description: "Waiting for attempts before end-of-task card",
                        sentryTeam: "learning-platform",
                        sentryExtras: e
                    })
                }
                const n = !!C.default.isMobile
                  , l = "en" === C.default.kaLocale && $.showRationales
                  , c = (e,t,r,n)=>{
                    const s = r ? r.offsetHeight : null;
                    var a;
                    null != (a = s) && O(N.keypadLayoutChanged(a)),
                    (0,
                    k.scrollElementIntoViewWithKeypad)(n, ge, r, E.KEYPAD_ANIMATION_DURATION)
                }
                  , u = m.createElement(p.KeypadContext.Consumer, null, (({keypadElement: e, setRenderer: t, scrollableElement: r})=>m.createElement(p.ServerItemRenderer, {
                    ref: e=>{
                        oe.current = e,
                        t(e)
                    }
                    ,
                    item: F.itemData,
                    apiOptions: (0,
                    s.default)({}, p.ApiOptions.defaults, {
                        hintProgressColor: a.default.blue,
                        isMobile: n,
                        customKeypad: n,
                        getAnotherHint: Te,
                        answerableCallback: Se,
                        interactionCallback: Ne,
                        setDrawingAreaAvailable: Ae,
                        readOnly: $.readOnly || !1,
                        onFocusChange: c
                    }),
                    reviewMode: l,
                    problemNum: (0,
                    E.getShuffleSeed)(K, F, $),
                    hintsVisible: $.hintsVisible,
                    keypadStyle: G.keypad,
                    keypadElement: e
                })))
                  , d = null != (t = e.error) && t.code ? m.createElement(L.default, {
                    error: e.error
                }) : null;
                return m.createElement(m.Fragment, null, C.default.IS_DEV_SERVER && m.createElement(o.View, {
                    style: G.cheatContainer
                }, m.createElement(o.View, {
                    style: G.cheatButton
                }, m.createElement(y.default, {
                    getRenderer: ()=>oe.current,
                    correct: !0,
                    onCheckAnswer: je
                })), m.createElement(o.View, {
                    style: G.cheatButton
                }, m.createElement(y.default, {
                    getRenderer: ()=>oe.current,
                    correct: !1,
                    onCheckAnswer: je
                }))), m.createElement("div", null, d, !d && m.createElement("div", {
                    className: "framework-perseus" + (n ? " perseus-mobile" : "")
                }, m.createElement("h2", {
                    className: "sr-only"
                }, i._("Problem")), m.createElement("form", {
                    name: "answerform",
                    onKeyDown: Le
                }, u))))
            }
            ;
            return m.createElement(o.View, {
                style: G.container
            }, m.createElement(V, null, m.createElement(p.KeypadContext.Provider, {
                value: {
                    setKeypadElement: pe,
                    keypadElement: de,
                    setRenderer: fe,
                    renderer: me,
                    setScrollableElement: he,
                    scrollableElement: ge
                }
            }, m.createElement("div", {
                key: Z,
                className: (0,
                d.css)(G.fullBleed, G.footerAndContentWrapper)
            }, m.createElement("div", {
                className: (0,
                d.css)(G.fullBleed),
                tabIndex: "0",
                ref: e=>{
                    ae.current = e,
                    he(e)
                }
            }, (()=>{
                const {screenReaderMessage: t, isStartOfTask: r} = e
                  , s = !r && !X;
                return m.createElement("div", {
                    className: (0,
                    d.css)(G.fullBleed, G.wrapperOuter)
                }, m.createElement("div", {
                    ref: e=>ne.current = e,
                    className: (0,
                    d.css)(G.wrapperInner, G.withTopBorder, Q($.keypadHeight), r || X ? G.fullBleed : D.sharedStyles.horizontalPadding)
                }, s && m.createElement(P.default, {
                    tools: (0,
                    u.keys)(re).filter((e=>!!re[e]))
                }), ke && m.createElement(S.default, null), t, Be(), !r && !X && m.createElement(o.View, {
                    style: G.toolToggleButtons
                }, !re.calculator || C.default.isMobile ? null : m.createElement(x.default, {
                    isVisible: ye,
                    onToggle: Pe
                }), !re.periodicTable || C.default.isMobile ? null : m.createElement(T.default, {
                    isVisible: ve,
                    onToggle: xe
                })), e.isStartOfTask || X ? null : m.createElement("div", {
                    className: (0,
                    d.css)(G.helpBarContainer)
                }, m.createElement(B.default, {
                    key: "help-area",
                    isOffline: ke,
                    itemId: Z
                })), m.createElement(R.DrawingArea, {
                    key: Y,
                    visible: ie,
                    onStroke: ()=>n({
                        id: "drawing_area_stroke"
                    }),
                    ref: se
                }), e.isStartOfTask || X || J ? null : m.createElement("div", {
                    className: (0,
                    d.css)(G.phoneHelpBarContainer)
                }, m.createElement(q.default, null)), !X && !r && m.createElement(l.Strut, {
                    size: c.default.xxxLarge_64
                })))
            }
            )()), (()=>{
                const {isStartOfTask: t, onStartOver: r} = e
                  , {taskKey: n, exerciseNames: s} = K
                  , a = r ? ()=>{
                    _e(),
                    r(n, s.length)
                }
                : void 0;
                return m.createElement(_.default, null, !X && !t && m.createElement(H.default, {
                    relatedContents: ee,
                    relatedContentsVisible: te,
                    onCheckAnswer: ()=>{
                        _e(),
                        je()
                    }
                    ,
                    onClearDrawingArea: Oe,
                    onGotoNextProblem: ()=>{
                        _e(),
                        Me()
                    }
                    ,
                    onHideFeedbackPopover: De,
                    onShowHint: Te,
                    onShowRelatedContents: A,
                    onSkipQuestion: ()=>{
                        _e(),
                        (()=>{
                            const e = oe.current;
                            if (null == e)
                                throw new b.KAError("cannot skip question on null item renderer",b.Errors.Internal);
                            Re(e.scoreInput(), !0),
                            Me()
                        }
                        )()
                    }
                    ,
                    onToggleDrawingArea: Ce,
                    onStartOver: a
                }))
            }
            )()))))
        }
        ;
        t.default = $
    },
    Yhzj: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.StatefulExerciseManager = void 0;
        var s = n(r("pVnL"))
          , a = w(r("8jAt"))
          , o = r("mR6N")
          , i = r("0UwG")
          , l = w(r("q1tI"))
          , c = r("/MKj")
          , u = r("NXn8")
          , d = n(r("EF8l"))
          , p = w(r("bHum"))
          , m = r("WJtd")
          , f = r("vttG")
          , g = r("sbZd")
          , h = n(r("7e7+"))
          , y = r("7HSn")
          , E = n(r("UiF/"))
          , v = r("EJ/c")
          , b = r("nMCW");
        function k(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (k = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function w(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = k(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const I = e=>{
            const {profile: t} = (0,
            d.default)()
              , r = (0,
            c.useSelector)((e=>e))
              , {problemProgress: n, taskInfo: u, taskProgress: m, environmentState: f} = r
              , [b,k] = l.useState(!0);
            l.useEffect((()=>{
                const {onRendered: t} = e;
                null == t || t(u, m)
            }
            ), []);
            const {onComponentUsable: w} = e;
            l.useEffect((()=>{
                b && (null == w || w())
            }
            ), [b, w]);
            const {exercise: I, onTaskComplete: O} = e
              , {isLoaded: P} = f
              , x = l.useRef(!1);
            l.useEffect((()=>{
                if (P && !x.current && m.taskComplete) {
                    var e;
                    x.current = !0;
                    const t = I && (null == (e = m.progressByExercise[I.slug]) ? void 0 : e.currentFpmLevel);
                    null == O || O(m.attemptHistory, u, I, m.pointsEarned, t)
                }
            }
            ), [I, P, O, u, m]);
            const T = e=>t=>{
                k(t),
                e({
                    id: "started_problem"
                })
            }
              , S = (t,r)=>{
                const n = m.assessmentItemMetadata.id;
                null == e.onStartOver || e.onStartOver(t, n, r)
            }
              , A = ()=>{
                k(!1)
            }
            ;
            (0,
            v.reportProps)({
                taskInfo: u,
                taskProgress: m,
                problemProgress: n,
                environmentState: f
            });
            const _ = !f.isLoaded && f.error;
            if (!f.isLoaded && !_)
                return l.createElement("div", {
                    className: (0,
                    o.css)(C.loadingWrapper)
                }, l.createElement(h.default, {
                    sentryId: "exercise_manager_load",
                    sentryTeam: "learning-platform",
                    description: "Loading exercises"
                }));
            var D;
            if (_)
                return l.createElement(y.ErrorCode, {
                    code: null == (D = f.error) ? void 0 : D.code
                });
            const {analyticsPageName: N, masteryEnabled: M, isStartOfTask: R, quiz: j, quizPositionKey: L, unitId: H, unitTest: B, onStartOver: q, contentPath: W} = e
              , z = l.createElement("a", {
                href: "/settings#hidevisual"
            }, a._("your account settings"))
              , U = null == t ? void 0 : t.get("hideVisual")
              , K = n.requiresScreenOrMouse && !U && l.createElement("div", {
                className: "sr-only screen-reader-escape"
            }, a.$_('This exercise contains content you may be unable to access without the use of a visual display" or mouse. Once logged in, please navigate to %(accountSettingsLink)s to opt-out of future questions like these.', {
                accountSettingsLink: z
            }))
              , F = I && I.id;
            let V = F;
            if (!F) {
                const {id: e} = (0,
                g.getCurrentExerciseData)({
                    taskInfo: u,
                    taskProgress: m
                });
                V = e
            }
            const G = I && I.contentKind
              , Q = I && I.title
              , $ = (0,
            s.default)({}, F ? {
                contentId: F
            } : null, G ? {
                kind: G
            } : null, Q ? {
                contentTitle: Q
            } : null, V ? {
                exerciseId: V
            } : null, {
                assessmentItemId: m.assessmentItemMetadata.id
            });
            return l.createElement(p.default, {
                learningTimeInfo: (0,
                s.default)({
                    activity: p.enums.Activity.PRACTICING,
                    content: $
                }, u.taskKey ? {
                    task: {
                        taskKey: u.taskKey
                    }
                } : null)
            }, (e=>l.createElement(i.LoadingContext.Provider, {
                value: {
                    onRendered: T(e)
                }
            }, l.createElement(E.default, {
                error: f.error,
                analyticsPageName: N,
                screenReaderMessage: K,
                isStartOfTask: R,
                masteryEnabled: M,
                onGotoNextProblem: A,
                onStartOver: q ? S : void 0,
                quiz: j,
                quizPositionKey: L,
                unitTest: B,
                unitId: H,
                contentPath: W
            }))))
        }
        ;
        t.StatefulExerciseManager = I;
        const C = o.StyleSheet.create({
            loadingWrapper: {
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        })
          , O = e=>{
            const {exercise: t, lessonId: r, lessonSlug: n, unitId: s, unitSlug: a, taskData: i} = e
              , {gqlClient: c} = (0,
            u.useApolloGqlClient)()
              , d = (0,
            b.useExerciseStore)({
                exercise: t,
                taskData: i,
                topic: n || a,
                topicId: r || s
            });
            if (l.useEffect((()=>{
                (0,
                f.initialize)(c)
            }
            ), [c]),
            "loading" === d.status)
                return l.createElement("div", {
                    className: (0,
                    o.css)(C.loadingWrapper)
                }, l.createElement(h.default, {
                    sentryId: "exercise_manager_load",
                    sentryTeam: "learning-platform",
                    description: "Loading exercises"
                }));
            if ("error" === d.status)
                return l.createElement(y.ErrorCode, {
                    code: d.error.kind
                });
            const {analyticsPageName: p, isStartOfTask: g, masteryEnabled: E, onComponentUsable: v, onRendered: k, onTaskComplete: w, quiz: O, quizPositionKey: P, unitTest: x, onStartOver: T, contentPath: S} = e;
            return l.createElement(m.Provider, {
                store: d.store
            }, l.createElement(I, {
                analyticsPageName: p,
                exercise: t,
                quiz: O,
                quizPositionKey: P,
                isStartOfTask: g,
                masteryEnabled: E,
                taskData: i,
                onComponentUsable: v,
                onRendered: k,
                onTaskComplete: w,
                unitId: s,
                unitTest: x,
                onStartOver: T,
                contentPath: S
            }))
        }
        ;
        O.defaultProps = {
            masteryEnabled: !1
        };
        var P = O;
        t.default = P
    },
    a7t1: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.addPoints = L,
        t.answerableChanged = function(e) {
            return {
                type: "ANSWERABLE_CHANGED",
                answerable: e
            }
        }
        ,
        t.checkAnswerAndMaybeSendProblemLog = function(e, t, r, n, s) {
            return (a,l)=>{
                if (!t.empty || r) {
                    const c = l();
                    if (!c.problemProgress || !c.taskProgress)
                        return null;
                    const {taskProgress: u, problemProgress: d} = c
                      , m = JSON.stringify(t.guess)
                      , {lastAttemptOrHintTime: f, lastGuess: h} = d
                      , y = f ? Date.now() - f : 0;
                    if (r || m !== h || y > 1e3) {
                        const d = S(c)
                          , m = u.attemptPromises
                          , f = (m[m.length - 1] || Promise.resolve()).then((()=>k(function(e, t, r, n, s, a, l) {
                            const {totalDone: c} = (0,
                            g.getCurrentExerciseData)(s);
                            if (!s.taskProgress)
                                return Promise.reject(new p.KAError("No taskProgress in state!",p.Errors.NotAllowed));
                            const {assessmentItemMetadata: u} = s.taskProgress
                              , d = (0,
                            g.getCurrentReservedItem)(s).itemId ? null : c + 1;
                            return o.default.getGAReferrer().then((o=>{
                                const c = T(d, t.correct, r, n, JSON.stringify(t.guess), s, o, a, JSON.stringify(t.state));
                                return e.mutate(i.ATTEMPT_PROBLEM_MUTATION, {
                                    variables: c || void 0,
                                    module: l ? "multithreaded" : void 0
                                }).then((e=>(b(u.id),
                                e)))
                            }
                            ))
                        }(e, t, r, d, c, n, function(e, t) {
                            if (!e.correct)
                                return !0;
                            if (t.taskProgress && !t.taskProgress.completionCriteriaSatisfied)
                                return !0;
                            return !1
                        }(t, l())), 3e4, "sendProblemLog").then((e=>{
                            var t;
                            const r = null == e || null == (t = e.data) ? void 0 : t.attemptProblem.result;
                            return null == s || s(null == r ? void 0 : r.updatedRecommendations),
                            e
                        }
                        )).then(M(a, l)).catch((e=>{
                            var t;
                            null != (t = e.message) && t.startsWith("timeout") && a(D({
                                code: "TIMEOUT"
                            })),
                            p.default.error("Error sending problem attempt:", p.Errors.Internal, e)
                        }
                        ))));
                        a(_(f))
                    }
                }
                a(function(e, t) {
                    return r=>{
                        r({
                            type: "CHECK_ANSWER",
                            score: e,
                            skipped: t
                        }),
                        r({
                            type: "REFRESH_LIVE_UPDATES"
                        })
                    }
                }(t, r)),
                setTimeout((()=>{
                    a({
                        type: "CHECK_ANSWER_TIMEOUT"
                    })
                }
                ), 1e3)
            }
        }
        ,
        t.fetchAssessmentItemFromTaskData = function(e, t) {
            if (0 === t.cards.length || !t.userExercises || 0 === t.userExercises.length)
                return Promise.resolve(null);
            const r = t.cards[0].exerciseName
              , n = t.userExercises.find((e=>e.exercise === r));
            if (!n)
                return Promise.resolve(null);
            const s = n.exerciseModel
              , a = n.totalDone + 1;
            if (t.taskJson && t.taskJson.reservedItems && t.taskJson.reservedItems.length > 0 && t.taskJson.reservedItemsCompleted) {
                const r = (0,
                g.getIncompleteReservedItems)(t.taskJson.reservedItems, t.taskJson.reservedItemsCompleted);
                if (r.length > 0) {
                    const {exerciseId: t, itemId: n} = r[0];
                    return C(e, t, n, !1)
                }
            }
            const o = s.id;
            if (s.isQuiz) {
                const r = (t.taskJson && t.taskJson.taskAttemptHistory || []).length
                  , n = s.assessmentItemCount;
                return I(e, {
                    exerciseId: o,
                    problemNumber: a,
                    quizProblemNumber: r % n
                }, !1)
            }
            return I(e, {
                exerciseId: o,
                problemNumber: a
            }, !1)
        }
        ,
        t.fetchNextAssessmentItem = O,
        t.fetchTaskData = void 0,
        t.gotoNextProblem = function(e) {
            return (t,r)=>{
                t({
                    type: "MOVING_TO_NEXT_PROBLEM"
                });
                const n = r()
                  , s = n.taskProgress && n.taskProgress.assessmentItemMetadata.id;
                if (!n.taskProgress || !n.taskProgress.completionCriteriaSatisfied)
                    return O(e, n).then((n=>{
                        t(R(n)),
                        s && b(s),
                        O(e, r())
                    }
                    ), (e=>x(t, r, e)));
                Promise.all(n.taskProgress.attemptPromises).then((()=>{
                    t(R(null))
                }
                ))
            }
        }
        ,
        t.handleActionResults = N,
        t.handleItemNotFound = t.handleAttemptResponse = void 0,
        t.hideFeedbackPopover = function() {
            return {
                type: "HIDE_FEEDBACK_POPOVER"
            }
        }
        ,
        t.interacted = function() {
            return {
                type: "INTERACTED"
            }
        }
        ,
        t.keypadLayoutChanged = function(e) {
            return {
                type: "KEYPAD_LAYOUT_CHANGED",
                height: e
            }
        }
        ,
        t.loadedExerciseAndItemWithOfflineHints = function(e, t, r) {
            const n = r && E(r.id);
            return (s,a)=>{
                if (s(function(e, t, r) {
                    return n=>{
                        n({
                            type: "LOADED_EXERCISE",
                            taskData: e,
                            assessmentItem: t,
                            offlineHintsCount: r || 0
                        }),
                        n({
                            type: "REFRESH_LIVE_UPDATES"
                        })
                    }
                }(t, r, n)),
                null != n && n > 0 && r) {
                    const t = a()
                      , n = S(t);
                    A(e, t, n).then((()=>b(r.id)))
                }
            }
        }
        ,
        t.setContentPath = t.readAloudText = t.readAloudState = void 0,
        t.setDrawingAreaAvailability = function(e) {
            return {
                type: "SET_DRAWING_AREA_AVAILABILITY",
                available: e
            }
        }
        ,
        t.showAllHintsAndSendHintLogs = function(e) {
            return (t,r)=>{
                const n = ()=>{
                    const {problemProgress: e} = r();
                    return !!e && e.hintsVisible < e.totalHints
                }
                ;
                for (; n(); )
                    t(j(e))
            }
        }
        ,
        t.showHintAndSendHintLog = j,
        t.showRelatedContents = function() {
            return {
                type: "SHOW_RELATED_CONTENTS"
            }
        }
        ,
        t.updateReadAloudContext = void 0;
        var s = n(r("pVnL"))
          , a = y(r("8jAt"))
          , o = n(r("x+rD"))
          , i = r("VwlT")
          , l = n(r("xyLj"))
          , c = n(r("/F0Z"))
          , u = n(r("xoFN"))
          , d = r("0bMH")
          , p = y(r("4PhQ"))
          , m = n(r("nSHN"))
          , f = n(r("/eLw"))
          , g = r("TUyF");
        function h(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (h = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function y(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = h(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const {getOfflineHintsCount: E, trackHintsOffline: v, clearOfflineHintsCount: b} = u.default;
        function k(e, t, r) {
            const n = new p.KAError(`timeout: ${r}`,p.Errors.Internal);
            return new Promise(((r,s)=>{
                setTimeout((()=>s(n)), t),
                e.then(r).catch(s)
            }
            ))
        }
        t.fetchTaskData = (e,t,r=!1)=>{
            const {assignment: n} = (0,
            f.default)(window.location.search)
              , a = (0,
            s.default)({}, n ? {
                assignmentKey: n
            } : null, {
                exerciseId: t,
                stopCardPersist: r,
                canReserveItems: !0
            });
            return e.mutate(i.GET_OR_CREATE_PRACTICE_TASK_MUTATION, {
                variables: {
                    input: a
                }
            }).then((e=>{
                var t, r;
                const n = null == (t = e.data) || null == (r = t.getOrCreatePracticeTask) ? void 0 : r.result;
                if (null != n && n.error) {
                    const e = n.error;
                    return "NO_ACCESSIBLE_ITEMS" === e.code && alert(w),
                    P("getOrCreatePracticeTask", e),
                    null
                }
                if (null == n || !n.userTask) {
                    return P("getOrCreatePracticeTask", {
                        code: "GRAPHQL_ERROR",
                        debugMessage: "No data was returned from GraphQL."
                    }),
                    null
                }
                return (0,
                d.transformUserTask)(n.userTask)
            }
            ))
        }
        ;
        const w = a._('You indicated in settings that you want to "hide visually-dependent content", but all of the problems in this exercise depend on visuals. If you want to complete it, please go to the settings page and de-select that option.')
          , I = (e=>{
            let t = null
              , r = null;
            return (n,s,a)=>{
                const o = JSON.stringify(s);
                return t === o && null != r ? Promise.resolve(r) : (t = o,
                r = e(n, s, a),
                r)
            }
        }
        )(((e,t,r)=>{
            const n = JSON.stringify(t);
            return e.query(i.ASSESSMENT_ITEM_QUERY, {
                variables: {
                    input: t
                },
                fetchPolicy: "cache-first",
                module: r ? "multithreaded" : void 0
            }).then((e=>{
                if (e.data && e.data.assessmentItem) {
                    const {item: t, error: r} = e.data.assessmentItem;
                    return r ? ("NO_ACCESSIBLE_ITEMS" === r.code && alert(w),
                    Promise.reject(new l.default(r.code,n,r.code))) : Promise.resolve(t)
                }
                return Promise.reject(new l.default("No data in GraphQL response.",n,"GRAPHQL_ERROR"))
            }
            )).catch((e=>{
                const t = `GraphQL errors fetching item: ${e.message}`;
                return Promise.reject(new l.default(t,n,"GRAPHQL_ERROR"))
            }
            ))
        }
        ))
          , C = (e,t,r,n=!1)=>I(e, {
            exerciseId: t,
            itemId: r
        }, n);
        function O(e, t) {
            if (t.taskProgress && t.taskProgress.taskComplete)
                return Promise.resolve(null);
            const {exerciseId: r, problemNumber: n, quizProblemNumber: s} = (0,
            g.getNextProblemData)(t);
            if (t.taskInfo && t.taskInfo.taskReservedItems) {
                const r = (0,
                g.getNextReservedItem)(t);
                return "string" != typeof r.itemId || "string" != typeof r.exerciseId ? Promise.resolve(null) : C(e, r.exerciseId, r.itemId, !0)
            }
            const a = t.taskProgress && t.taskProgress.assessmentItemMetadata.sha;
            return I(e, {
                exerciseId: r,
                problemNumber: n,
                quizProblemNumber: s,
                lastSeenProblemSha: a
            }, !0)
        }
        const P = (e,t,r={})=>{
            const {code: n, debugMessage: a} = t
              , o = a ? (0,
            s.default)({}, r, {
                debugMessage: a
            }) : r;
            p.default.error(`${e} failed: ${n}`, p.Errors.Internal, {
                sentryData: {
                    contexts: {
                        extras: o
                    },
                    fingerprint: [e, n]
                }
            })
        }
          , x = (e,t,r,n)=>{
            const {taskInfo: s} = t()
              , a = {
                inputJson: r.inputJson,
                taskKey: n || (null == s ? void 0 : s.taskKey)
            }
              , o = {
                code: "GRAPHQL_ERROR",
                debugMessage: r.message
            };
            return P("getAssessmentItem", o, a),
            e(D(o)),
            Promise.reject(new c.default(r,a.taskKey))
        }
        ;
        function T(e, t, r, n, s, a, o, i, l) {
            if (!a.taskProgress || !a.problemProgress || !a.taskInfo)
                return null;
            const {assessmentItemMetadata: c} = a.taskProgress
              , {numberOfAttempts: u, hintsVisible: d} = a.problemProgress
              , p = "hint" === s ? d + 1 : d
              , {taskContentKey: m, taskKey: f} = a.taskInfo
              , {id: h} = (0,
            g.getCurrentExerciseData)(a)
              , {topicId: y} = a.environmentState;
            return {
                input: {
                    problemNumber: e,
                    assessmentItemSha: c.sha,
                    assessmentItemId: c.id,
                    completed: t || r,
                    exerciseId: h,
                    topicId: y,
                    problemType: c.problemType,
                    countHints: p,
                    timeTaken: n,
                    attemptNumber: u + 1,
                    attemptContent: s,
                    attemptState: l || "",
                    taskContentKey: m,
                    taskKey: f,
                    skipped: r,
                    clientDt: (new Date).toJSON(),
                    localTimezoneOffsetSeconds: -1 * (new Date).getTimezoneOffset() * 60,
                    context: i,
                    gaReferrer: o
                }
            }
        }
        function S(e) {
            if (!e.problemProgress)
                return null;
            const {lastAttemptOrHintTime: t} = e.problemProgress;
            if (!t)
                return null;
            const r = Date.now() - t;
            return Math.round(r / 1e3)
        }
        function A(e, t, r) {
            const n = (0,
            g.getCurrentExerciseData)(t)
              , {totalDone: s} = n;
            if (!t.taskProgress || !t.problemProgress)
                return Promise.reject(new p.KAError("No taskProgress or problemProgress in state!",p.Errors.NotAllowed));
            const a = t.problemProgress.hintsVisible
              , {assessmentItemMetadata: l} = t.taskProgress
              , c = (0,
            g.getCurrentReservedItem)(t).itemId ? null : s + 1;
            return o.default.getGAReferrer().then((n=>{
                const s = T(c, !1, !1, r, "hint", t, n);
                return e.mutate(i.ATTEMPT_PROBLEM_MUTATION, {
                    variables: s || void 0,
                    module: "multithreaded"
                }).catch((e=>{
                    throw v(l.id, a),
                    e
                }
                ))
            }
            ))
        }
        function _(e) {
            return {
                type: "ADD_ATTEMPT_PROMISE",
                promise: e
            }
        }
        function D(e) {
            return {
                type: "REPORT_ERROR",
                error: e
            }
        }
        function N(e, t) {
            if (!e.actionResults)
                return;
            const {newTask: r} = e
              , {pointsEarned: n} = e.actionResults
              , s = m.default.fromGraphQL(e.actionResults)
              , a = s.notificationsAdded;
            var o;
            n && t(L(n.points)),
            r && t((o = (0,
            d.transformUserTask)(r),
            e=>{
                e({
                    type: "UPDATE_TASK",
                    taskData: o
                })
            }
            )),
            a && a.toast.forEach((e=>{
                e.class_.includes("AssignmentCompletedNotification") && t({
                    type: "ADD_ASSIGNMENT_COMPLETED_CONTEXT",
                    context: e
                })
            }
            )),
            m.default.respondToAction(s)
        }
        t.handleItemNotFound = x;
        const M = (e,t)=>r=>{
            var n;
            const a = null == r || null == (n = r.data) ? void 0 : n.attemptProblem.result;
            if (null != a && a.error) {
                var o;
                const {error: r} = a
                  , n = t()
                  , {problemProgress: s, taskProgress: i, taskInfo: l} = n
                  , {id: c, totalDone: u} = (0,
                g.getCurrentExerciseData)(n)
                  , d = {
                    exerciseId: c,
                    totalDone: u,
                    itemId: i && i.assessmentItemMetadata.id,
                    hintsVisible: s && s.hintsVisible,
                    taskKey: l && l.taskKey
                };
                return P("attemptProblem", r, d),
                e(D(r)),
                Promise.reject(new p.KAError(null != (o = r.debugMessage) ? o : r.code,p.Errors.GraphqlResponse))
            }
            var i;
            if (null != a && a.userExercise && e({
                type: "UPDATE_USER_EXERCISE",
                userExercise: a.userExercise
            }),
            N(a, e),
            null != a && a.attemptPromotions) {
                const {fpmPromotions: t} = a.attemptPromotions;
                e((i = (e=>e.reduce(((e,{progressKey: t, level: r})=>(0,
                s.default)({}, e, {
                    [t]: r
                })), {}))(t),
                {
                    type: "ON_FPM_PROMOTIONS",
                    promotions: i
                }))
            }
            null != a && a.updatedRecommendations && e({
                type: "ON_UPDATE_RECOMMENDATIONS",
                recommendations: a.updatedRecommendations
            })
        }
        ;
        function R(e) {
            return t=>{
                t({
                    type: "GOTO_NEXT_PROBLEM",
                    assessmentItem: e
                }),
                t({
                    type: "REFRESH_LIVE_UPDATES"
                })
            }
        }
        function j(e) {
            return (t,r)=>{
                const n = r();
                if (n.problemProgress && n.taskProgress && !n.problemProgress.problemComplete) {
                    const {taskProgress: s} = n
                      , a = S(n)
                      , o = s.attemptPromises
                      , i = (o[o.length - 1] || Promise.resolve()).then((()=>k(A(e, n, a), 3e4, "sendHintLog"))).then(M(t, r)).catch((e=>{
                        "timeout" === e.message && t(D({
                            code: "TIMEOUT"
                        }));
                        const r = {
                            code: "GRAPHQL_ERROR",
                            debugMessage: e.message
                        };
                        P("attemptProblem", r),
                        t(D(r))
                    }
                    ));
                    t(_(i))
                }
                t({
                    type: "SHOW_HINT"
                })
            }
        }
        function L(e) {
            return {
                type: "ADD_POINTS",
                points: e
            }
        }
        t.handleAttemptResponse = M;
        t.readAloudText = e=>({
            type: "READ_ALOUD_EXERCISE_TEXT",
            text: e
        });
        t.readAloudState = e=>({
            type: "READ_ALOUD_STATE",
            state: e
        });
        t.updateReadAloudContext = e=>({
            type: "UPDATE_READ_ALOUD",
            serializedState: e
        });
        t.setContentPath = e=>({
            type: "SET_CONTENT_PATH",
            contentPath: e
        })
    },
    cuGt: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(r("pVnL"))
          , a = n(r("wa3X"))
          , o = n(r("Pwnf"))
          , i = r("JimW")
          , l = C(r("8jAt"))
          , c = n(r("gE8/"))
          , u = r("mR6N")
          , d = C(r("q1tI"))
          , p = r("/MKj")
          , m = r("YkLl")
          , f = n(r("dnds"))
          , g = r("NXn8")
          , h = n(r("U4In"))
          , y = n(r("lbSg"))
          , E = C(r("8SBg"))
          , v = C(r("6OHE"))
          , b = C(r("a7t1"))
          , k = r("kmCq")
          , w = r("TUyF");
        function I(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (I = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function C(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = I(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const O = `1px solid ${v.colors.gray85}`
          , P = u.StyleSheet.create({
            relatedContent: {
                background: v.colors.white,
                padding: "11px 0",
                position: "relative",
                zIndex: v.zIndexes.aboveDrawingArea,
                marginBottom: 8
            },
            helpArea: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 32,
                borderTop: O,
                paddingTop: 24
            },
            relatedContents: {
                flex: 1,
                marginRight: 32
            },
            hintArea: {
                flex: 1,
                zIndex: v.zIndexes.aboveDrawingArea
            },
            spacer: {
                flex: 1
            },
            helpHeader: {
                color: v.colors.gray41,
                fontWeight: "bold",
                marginBottom: 8
            },
            hintWarning: {
                color: o.default.offBlack64
            },
            hintButton: {
                margin: "16px 0",
                width: "100%"
            },
            stuckTitle: {
                marginRight: 5,
                fontWeight: "bold"
            },
            reportAProblemTitle: {
                color: o.default.offBlack64,
                fontWeight: "normal",
                float: "right",
                ":hover": {
                    color: o.default.blue
                },
                textDecoration: "underline"
            },
            reportAProblemContainer: {
                borderTop: O,
                paddingTop: 24,
                marginTop: 24
            },
            linkButton: {
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: o.default.blue,
                padding: 0,
                textDecoration: "none",
                ":hover": {
                    textDecoration: "underline"
                }
            },
            offlineLink: {
                color: v.colors.gray76
            },
            issueFormContainer: {
                background: o.default.offWhite,
                padding: c.default.large_24,
                borderRadius: c.default.xxxSmall_4,
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: o.default.offBlack16,
                maxWidth: 450
            }
        });
        var x = e=>{
            const t = d.useRef(null)
              , r = (0,
            m.useMarkConversion)()
              , {gqlClient: n} = (0,
            g.useApolloGqlClient)()
              , o = (0,
            p.useDispatch)()
              , c = ()=>o(b.showRelatedContents())
              , v = ()=>o(b.showHintAndSendHintLog(n))
              , I = (0,
            p.useSelector)((e=>e))
              , {taskInfo: C, problemProgress: O} = I
              , {answerStatus: x, hintsVisible: T, numberOfAttempts: S, relatedContentsVisible: A, totalHints: _} = O
              , {requireAttemptBeforeHints: D} = C
              , N = 1 === S && "correct" === x
              , M = D && "unanswered" === x
              , R = "unanswered" !== x
              , j = (0,
            w.getRelatedContents)(I)
              , [L,H] = d.useState(!1);
            d.useEffect((()=>H(!1)), [e.itemId]);
            const B = ()=>{
                H(!L)
            }
              , q = ()=>L ? d.createElement(i.View, {
                style: P.issueFormContainer
            }, d.createElement(h.default, {
                onCancel: B
            })) : d.createElement("button", {
                type: "button",
                className: (0,
                u.css)(P.linkButton, P.reportAProblemTitle, e.isOffline && P.offlineLink),
                disabled: e.isOffline,
                onClick: B
            }, l._("Report a problem"))
              , W = ()=>{
                r({
                    id: "web_phone_take_a_hint"
                }),
                v()
            }
              , z = ()=>{
                c();
                const e = _ - T;
                for (let t = 0; t < e; t++)
                    v();
                const t = document.querySelector(".perseus-hint-renderer");
                t && E.scrollToElement(t, 200)
            }
              , U = ()=>j.length ? d.createElement("div", {
                className: (0,
                u.css)(P.relatedContents),
                ref: t
            }, d.createElement("div", {
                className: (0,
                u.css)(P.helpHeader)
            }, l._("Related content")), d.createElement(y.default, null, (e=>e.map((e=>{
                const t = (0,
                s.default)({}, e, {
                    goToContent: !0,
                    kind: e.contentKind,
                    linkToContent: !1,
                    nodeUrl: e.relativeUrl,
                    showPreviousNext: !0,
                    status: "unstarted",
                    thumbnailUrl: e.imageUrl || e.thumbnailUrl,
                    title: e.translatedTitle
                });
                return d.createElement("div", {
                    key: `related-content-${e.id}`
                }, d.createElement(f.default, {
                    bigBingoLinkConversions: (0,
                    k.getRelatedContentConversions)(t),
                    contentItem: t,
                    forceSmall: !0,
                    practiceButtonStyle: "hidden",
                    wrapperStyles: [P.relatedContent],
                    target: "_blank"
                }))
            }
            )))(j))) : d.createElement("div", {
                className: (0,
                u.css)(P.spacer),
                ref: t
            });
            return d.createElement("div", null, d.createElement("div", {
                className: (0,
                u.css)(P.helpArea),
                key: "bottom-help"
            }, (()=>{
                if (A)
                    return d.createElement(d.Fragment, null, U(), !T && _ > 0 ? d.createElement("div", {
                        className: (0,
                        u.css)(P.hintArea)
                    }, d.createElement("div", {
                        className: (0,
                        u.css)(P.helpHeader)
                    }, l._("Still stuck?")), d.createElement(i.UniqueIDProvider, {
                        mockOnFirstRender: !1
                    }, (e=>{
                        const t = !R
                          , r = e.get("hint-button-description");
                        return d.createElement(d.Fragment, null, d.createElement(a.default, {
                            "aria-describedby": t ? r : void 0,
                            kind: "secondary",
                            style: P.hintButton,
                            onClick: W
                        }, l._("Get a hint")), t && d.createElement("div", {
                            className: (0,
                            u.css)(P.hintWarning),
                            id: r
                        }, l._("If you use a hint, this problem won't count towards your progress.")))
                    }
                    ))) : d.createElement("div", {
                        className: (0,
                        u.css)(P.spacer)
                    }));
                const t = 0 === j.length && 0 === _ ? null : N && _ > 0 ? {
                    copy: l._("See a step-by-step solution."),
                    action: z
                } : 0 === _ ? {
                    copy: l._("Review related articles/videos."),
                    action: c
                } : 0 === j.length ? {
                    copy: l._("Use a hint."),
                    action: v
                } : {
                    copy: l._("Review related articles/videos or use a hint."),
                    action: c
                };
                return d.createElement(d.Fragment, null, (0,
                k.showHelp)(_, T, M, null == t ? void 0 : t.copy) ? d.createElement("div", null, d.createElement("span", {
                    className: (0,
                    u.css)(P.stuckTitle)
                }, N ? l._("Way to go!") : l._("Stuck?")), d.createElement("button", {
                    type: "button",
                    className: (0,
                    u.css)(P.linkButton, e.isOffline && P.offlineLink),
                    onClick: null == t ? void 0 : t.action
                }, null == t ? void 0 : t.copy)) : d.createElement("div", null), d.createElement("div", null, q()))
            }
            )()), A && d.createElement("div", {
                className: (0,
                u.css)(P.reportAProblemContainer)
            }, q()))
        }
        ;
        t.default = x
    },
    e0s5: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useShowStartOver = void 0;
        var s = r("ZtlQ")
          , a = n(r("/eLw"));
        t.useShowStartOver = ()=>{
            const e = (0,
            s.useLocation)()
              , {assignment: t} = (0,
            a.default)(e.search);
            return !t
        }
    },
    gY26: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.arrowOffsetFromRight = void 0;
        var s = n(r("pVnL"))
          , a = r("JimW")
          , o = r("mR6N")
          , i = f(r("q1tI"))
          , l = n(r("Dg7G"))
          , c = n(r("x0Jh"))
          , u = n(r("wINb"))
          , d = f(r("hDgO"))
          , p = f(r("6OHE"));
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (m = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function f(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = m(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        t.arrowOffsetFromRight = 70;
        const g = o.StyleSheet.create({
            container: {
                position: "relative",
                bottom: 12
            },
            popover: {
                background: d.white,
                borderRadius: d.borderRadiusLarge,
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.1)",
                display: "flex",
                padding: 16,
                position: "relative",
                zIndex: p.zIndexes.interactiveComponent
            },
            icon: {
                alignSelf: "center",
                marginRight: 16
            },
            popoverText: {
                flexGrow: 1
            },
            closeButton: {
                color: d.grayExtraLight,
                cursor: "pointer",
                display: "block",
                height: 20,
                width: 20,
                lineHeight: 1,
                position: "absolute",
                right: 11,
                textDecoration: "none",
                top: 11
            },
            heading: (0,
            s.default)({}, p.typography.bodySmall, {
                fontWeight: "bold",
                marginBottom: 6,
                paddingRight: 30
            }),
            bodyText: (0,
            s.default)({}, p.typography.bodyXsmall),
            downArrow: {
                position: "absolute",
                bottom: -12,
                right: 60
            }
        });
        var h = e=>i.createElement(a.UniqueIDProvider, {
            mockOnFirstRender: !1,
            scope: "feedback-popover"
        }, (t=>(t=>{
            const {iconSrc: r} = e;
            return i.createElement("div", {
                className: (0,
                o.css)(g.container)
            }, i.createElement("div", {
                className: (0,
                o.css)(g.popover),
                role: "alert"
            }, r && i.createElement("img", {
                alt: "",
                "aria-hidden": !0,
                className: (0,
                o.css)(g.icon),
                width: "64",
                height: "64",
                src: (0,
                u.default)(r)
            }), i.createElement("div", {
                className: (0,
                o.css)(g.popoverText)
            }, i.createElement("div", {
                className: (0,
                o.css)(g.heading)
            }, e.heading), i.createElement("div", {
                className: (0,
                o.css)(g.bodyText)
            }, e.body), i.createElement("div", {
                className: (0,
                o.css)(g.bodyText)
            }, e.secondaryBody)), i.createElement("div", {
                className: (0,
                o.css)(g.closeButton)
            }, i.createElement(l.default, {
                onClick: e.onClose,
                testId: "close-feedback-popover"
            }, i.createElement(c.default, {
                size: 20,
                iconSize: 10
            }))), i.createElement("svg", {
                className: (0,
                o.css)(g.downArrow),
                width: 20,
                height: 12
            }, i.createElement("filter", {
                id: t.get("dropshadow"),
                height: "150%"
            }, i.createElement("feOffset", {
                dx: 0,
                dy: 1,
                result: "offsetblur"
            }), i.createElement("feGaussianBlur", {
                in: "SourceAlpha",
                stdDeviation: 2
            }), i.createElement("feComponentTransfer", null, i.createElement("feFuncA", {
                type: "linear",
                slope: .1
            })), i.createElement("feMerge", null, i.createElement("feMergeNode", null), i.createElement("feMergeNode", {
                in: "SourceGraphic"
            }))), i.createElement("polyline", {
                fill: "white",
                points: "0,0 10,12 20,0",
                stroke: "rgba(0, 0, 0, 0.1)",
                filter: `url(#${t.get("dropshadow")}`
            }))))
        }
        )(t)));
        t.default = h
    },
    kmCq: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.showHelp = t.getRelatedVideoConversions = t.getRelatedContentConversions = void 0;
        var n = r("Mcr6");
        t.showHelp = (e,t,r,n)=>!(r || 0 !== e && e === t || !n);
        const s = e=>{
            if (!e.topicPaths || !e.topicPaths.length)
                return [];
            return [{
                id: "click_related_video",
                extra: {
                    video: (0,
                    n.getDCULFromContentTopicPath)(e.topicPaths[0])
                }
            }]
        }
        ;
        t.getRelatedVideoConversions = s;
        t.getRelatedContentConversions = e=>"Video" === e.kind ? s(e) : []
    },
    nMCW: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useExerciseStore = void 0;
        var s = r("q1tI")
          , a = r("NXn8")
          , o = n(r("mXPZ"))
          , i = r("vttG")
          , l = (r("4PhQ"),
        r("a7t1"))
          , c = r("s58u")
          , u = r("OSiA")
          , d = r("TUyF");
        t.useExerciseStore = e=>{
            const {topic: t, topicId: r, exercise: n, taskData: p} = e
              , m = Boolean(!o.default.hasProfile && n)
              , f = (0,
            u.useFastlyExerciseStoreDeps)({
                skip: !m,
                exercise: n
            })
              , g = (0,
            c.useApolloExerciseStoreDeps)({
                skip: m,
                exercise: n,
                taskData: p
            })
              , {gqlClient: h} = (0,
            a.useApolloGqlClient)()
              , [y,E] = (0,
            s.useState)(null);
            if ((0,
            s.useEffect)((()=>{
                y && (0,
                l.fetchNextAssessmentItem)(h, y.getState())
                window.l = l;
                window.h = h;
                window.y = y;
            }
            )),
            y)
                return {
                    status: "success",
                    store: y
                };
            const v = m ? f : g;
            if ("success" === v.status) {
                const {taskData: e, assessmentItem: n} = v
                  , s = (0,
                d.create)({
                    topic: t,
                    topicId: r,
                    nextItem: null,
                    nextTaskKind: null
                }, (0,
                i.handleSideEffects)({}), e, n);
                E(s);
                const a = ()=>s.getState()
                  , o = e=>{
                    "function" == typeof e ? e(o, a) : s.dispatch(e)
                }
                ;
                return o((0,
                l.loadedExerciseAndItemWithOfflineHints)(h, e, n)),
                {
                    status: "success",
                    store: s
                }
            }
            return v
        }
    },
    nwlX: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var s = n(r("pVnL"))
          , a = n(r("Pwnf"))
          , o = r("JimW")
          , i = b(r("8jAt"))
          , l = r("mR6N")
          , c = b(r("q1tI"))
          , u = r("/MKj")
          , d = r("YkLl")
          , p = n(r("dnds"))
          , m = r("NXn8")
          , f = b(r("ZpD3"))
          , g = n(r("6cSF"))
          , h = b(r("6OHE"))
          , y = b(r("a7t1"))
          , E = r("TUyF");
        function v(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (v = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function b(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = v(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const k = (e,t)=>{
            const r = e.getBoundingClientRect();
            if (r.top < 0) {
                var n, s;
                const e = (null != (n = null == (s = document.body) ? void 0 : s.scrollTop) ? n : 0) + r.top - 20;
                setTimeout((()=>{
                    document.body.scrollTop = e
                }
                ), 0)
            } else if (r.bottom > window.innerHeight) {
                var a, o;
                const e = (null != (a = null == (o = document.body) ? void 0 : o.scrollTop) ? a : 0) + (r.bottom - window.innerHeight) + 20;
                setTimeout((()=>{
                    document.body.scrollTop = e
                }
                ), 0)
            }
        }
          , w = l.StyleSheet.create({
            interactable: {
                zIndex: h.zIndexes.interactiveComponent
            },
            stuckTitle: {
                marginRight: 5
            },
            linkButton: {
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "inherit",
                fontFamily: "inherit",
                color: a.default.blue,
                padding: 0,
                textDecoration: "none",
                ":hover": {
                    textDecoration: "underline"
                }
            },
            boldLinkButton: (0,
            s.default)({}, h.typography.labelMedium),
            showAllContents: {
                marginTop: 5
            },
            relatedContent: {
                padding: "7px 0"
            },
            relatedContentsEnter: {
                opacity: .01
            },
            relatedContentsEnterActive: {
                opacity: 1,
                transition: "opacity 0.3s"
            },
            stillStuckTitle: (0,
            s.default)({
                marginRight: 5
            }, h.typography.labelMedium),
            relatedTitle: (0,
            s.default)({}, h.typography.labelMedium, {
                marginBottom: 7
            }),
            section: {
                padding: "0 16px"
            },
            topDivider: {
                height: 1,
                backgroundColor: "#ccc",
                marginBottom: 16
            },
            middleDivider: {
                height: 1,
                backgroundColor: "#ccc",
                marginBottom: 16,
                marginTop: 16
            },
            caveat: (0,
            s.default)({}, h.typography.labelSmall, {
                color: a.default.offBlack64,
                marginTop: 5
            })
        });
        var I = e=>{
            const t = (0,
            d.useMarkConversion)()
              , {gqlClient: r} = (0,
            m.useApolloGqlClient)()
              , n = (0,
            u.useDispatch)()
              , a = (0,
            u.useSelector)((e=>e))
              , {problemProgress: h} = a
              , {answerStatus: v, hintsVisible: b, numberOfAttempts: I, relatedContentsVisible: C, totalHints: O} = h
              , P = 1 === I && "correct" === v
              , x = (0,
            E.getRelatedContents)(a)
              , T = c.useRef(null);
            c.useEffect((()=>{
                T.current && k(T.current)
            }
            ), [C]),
            c.useEffect((()=>{
                1 === b && setTimeout((()=>{
                    const e = document.querySelector(".perseus-hint-renderer.last-rendered");
                    e && k(e)
                }
                ))
            }
            ), [b]);
            const S = ()=>c.createElement(g.default, {
                key: "videos-wrapper",
                transitionStyle: {
                    enter: w.relatedContentsEnter,
                    enterActive: w.relatedContentsEnterActive
                },
                transitionEnterTimeout: 300
            }, C ? A() : null)
              , A = ()=>{
                const e = x.map((e=>{
                    const t = (0,
                    s.default)({}, e, {
                        goToContent: !0,
                        kind: e.contentKind,
                        linkToContent: !1,
                        nodeUrl: e.relativeUrl,
                        showPreviousNext: !0,
                        status: "unstarted",
                        thumbnailUrl: e.imageUrl || e.thumbnailUrl,
                        title: e.translatedTitle
                    });
                    return c.createElement(p.default, {
                        key: `related-content-${e.id}`,
                        contentItem: t,
                        forceSmall: !0,
                        customOnClick: ()=>{
                            "video" === e.contentKind.toLowerCase() && f.markMinorConversions([{
                                id: "web_phone_click_related_video"
                            }])
                        }
                        ,
                        target: "_blank",
                        wrapperStyles: [w.relatedContent]
                    })
                }
                ));
                return c.createElement("div", {
                    key: "related-content",
                    className: (0,
                    l.css)(w.section)
                }, x.length > 0 && c.createElement("div", {
                    className: (0,
                    l.css)(w.relatedTitle)
                }, i._("Related content")), c.createElement("div", null, e))
            }
              , _ = ()=>{
                let e;
                return e = 0 === O ? i._("Review related articles/videos.") : i._("Review related articles/videos or use a hint."),
                c.createElement("div", {
                    className: (0,
                    l.css)(w.section)
                }, c.createElement("span", {
                    className: (0,
                    l.css)(w.stuckTitle)
                }, P ? i._("Way to go!") : i._("Stuck?")), c.createElement("button", {
                    role: "button",
                    className: (0,
                    l.css)(w.linkButton),
                    onClick: ()=>{
                        n(y.showRelatedContents()),
                        f.markMinorConversions([{
                            id: "web_phone_show_related_videos"
                        }])
                    }
                }, e))
            }
              , D = ()=>{
                t({
                    id: "web_phone_take_a_hint"
                }),
                n(y.showHintAndSendHintLog(r))
            }
              , N = b > 0
              , M = x.length > 0
              , R = O > 0
              , j = (0,
            l.css)(w.interactable);
            return M || R ? !C && M ? c.createElement("div", {
                key: "root",
                ref: T,
                className: j
            }, S(), _()) : N ? c.createElement("div", {
                key: "root",
                ref: T,
                className: j
            }, M && c.createElement("div", {
                className: (0,
                l.css)(w.topDivider)
            }), S()) : c.createElement("div", {
                key: "root",
                ref: T,
                className: j
            }, S(), M && c.createElement("div", {
                className: (0,
                l.css)(w.middleDivider)
            }), (()=>{
                if (0 === O)
                    return null;
                const e = x.length > 0;
                let t;
                return t = e ? c.createElement("span", {
                    className: (0,
                    l.css)(w.stillStuckTitle)
                }, i._("Still stuck?")) : c.createElement("span", {
                    className: (0,
                    l.css)(w.stuckTitle)
                }, i._("Stuck?")),
                c.createElement("div", {
                    className: (0,
                    l.css)(w.section)
                }, t, c.createElement(o.UniqueIDProvider, {
                    mockOnFirstRender: !1
                }, (t=>{
                    const r = t.get("hint-button-description");
                    return c.createElement(c.Fragment, null, c.createElement("button", {
                        "aria-describedby": r,
                        className: (0,
                        l.css)(w.linkButton, e && w.boldLinkButton),
                        onClick: D,
                        role: "button"
                    }, i._("Get a hint for this problem.")), c.createElement("div", {
                        className: (0,
                        l.css)(w.caveat),
                        id: r
                    }, i._("If you use a hint, this problem won't count towards your progress.")))
                }
                )))
            }
            )()) : null
        }
        ;
        t.default = I
    },
    s58u: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useApolloExerciseStoreDeps = void 0;
        var n = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = l(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            n.default = e,
            r && r.set(e, n);
            return n
        }(r("q1tI"))
          , s = r("NXn8")
          , a = r("C/Im")
          , o = r("4PhQ")
          , i = r("a7t1");
        function l(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (l = function(e) {
                return e ? r : t
            }
            )(e)
        }
        t.useApolloExerciseStoreDeps = e=>{
            const {skip: t, exercise: r, taskData: l} = e
              , {gqlClient: c} = (0,
            s.useApolloGqlClient)()
              , [u,d] = n.useState({
                status: "loading"
            })
              , p = (0,
            a.useIsMounted)();
            return n.useEffect((()=>{
                t || (async()=>{
                    try {
                        if (r) {
                            const e = await (0,
                            i.fetchTaskData)(c, r.id);
                            if (!e)
                                throw new o.KAError("Unable to load exercise data",o.Errors.Internal);
                            if (!p())
                                return;
                            const t = await (0,
                            i.fetchAssessmentItemFromTaskData)(c, e);
                            if (!t)
                                throw new o.KAError("Failed to load assessmentItem data",o.Errors.Internal);
                            if (!p())
                                return;
                            d({
                                status: "success",
                                taskData: e,
                                assessmentItem: t
                            })
                        } else {
                            if (!l)
                                throw new o.KAError("Can't load data",o.Errors.Internal);
                            {
                                const e = await (0,
                                i.fetchAssessmentItemFromTaskData)(c, l);
                                if (!e)
                                    throw new o.KAError("Failed to load assessmentItem data",o.Errors.Internal);
                                if (!p())
                                    return;
                                d({
                                    status: "success",
                                    taskData: l,
                                    assessmentItem: e
                                })
                            }
                        }
                    } catch (e) {
                        d({
                            status: "error",
                            error: e
                        })
                    }
                }
                )()
            }
            ), []),
            u
        }
    },
    "sE/O": function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.parseQuestionParagraph = t.parseQuestion = t.default = void 0;
        var s = n(r("pVnL"))
          , a = n(r("6RhW"))
          , o = r("mR6N")
          , i = n(r("lTCR"))
          , l = v(r("q1tI"))
          , c = r("/MKj")
          , u = r("VrWj")
          , d = r("uGDD")
          , p = r("8r+/")
          , m = r("NXn8")
          , f = n(r("3iX/"))
          , g = v(r("6OHE"))
          , h = r("a7t1");
        let y;
        function E(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (E = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function v(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = E(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        t.parseQuestion = e=>e.split("\n").flatMap(b);
        const b = e=>{
            const t = []
              , r = /\$(.*?)\$/g;
            let n = !0
              , s = e;
            for (; e && s && n; ) {
                const a = r.exec(e);
                if (null != a && a[1]) {
                    const r = a[1]
                      , n = s.indexOf(a[0])
                      , o = s.substr(0, n);
                    t.push({
                        text: o
                    }),
                    t.push({
                        expression: r,
                        context: e
                    });
                    const i = s.indexOf(a[0]) + a[0].length;
                    s = s.substring(i)
                } else
                    n = !1
            }
            return s && t.push({
                text: s
            }),
            t
        }
        ;
        t.parseQuestionParagraph = b;
        const k = e=>{
            switch (e) {
            case "disabled":
                return "Read Aloud is not available for this question";
            case "loading":
                return "Loading Read Aloud...";
            case "reading":
                return "Stop reading";
            default:
                return "Read this question to me"
            }
        }
          , w = (0,
        p.gqlOp)((0,
        i.default)(y || (y = (e=>e)`
    mutation GetOrCreateReadAloud(
        $assessmentItemID: ID!
        $exerciseID: ID!
        $perseusSerializedState: String
    ) {
        getOrCreateReadAloud(
            assessmentItemID: $assessmentItemID
            exerciseID: $exerciseID
            perseusSerializedState: $perseusSerializedState
        ) {
            readAloud
            error {
                code
                message
            }
        }
    }
`)))
          , I = o.StyleSheet.create({
            readAloudButton: {
                background: "unset",
                border: "none",
                lineHeight: 0,
                [g.queries.small]: {
                    display: "none"
                },
                ":hover": {
                    cursor: "pointer",
                    outline: "5px auto Highlight",
                    outline: "5px auto -webkit-focus-ring-color"
                },
                height: "40px",
                width: "40px"
            }
        });
        var C = ()=>{
            const e = (0,
            c.useDispatch)()
              , {gqlClient: t} = (0,
            m.useApolloGqlClient)()
              , r = (0,
            u.usePublishAnalyticsEvent)()
              , n = (0,
            c.useSelector)((e=>{
                var t;
                return null != (t = e.taskProgress.readAloud.state) ? t : "idle"
            }
            ))
              , {contentPath: i, readAloud: p, assessmentItemMetadata: g} = (0,
            c.useSelector)((e=>e.taskProgress), c.shallowEqual);
            let y = null == p ? void 0 : p.text;
            const E = t=>{
                let r;
                switch (t || e((0,
                h.readAloudState)("disabled")),
                n) {
                case "reading":
                    speechSynthesis.cancel(),
                    e((0,
                    h.readAloudState)("idle"));
                    break;
                case "idle":
                    e((0,
                    h.readAloudState)("reading")),
                    r = new SpeechSynthesisUtterance(t || ""),
                    r.onend = ()=>{
                        e((0,
                        h.readAloudState)("idle"))
                    }
                    ,
                    speechSynthesis.speak(r)
                }
            }
              , v = ()=>{
                const r = null == g ? void 0 : g.id
                  , n = null == p ? void 0 : p.serializedState
                  , s = null == i ? void 0 : i.learnableContentId;
                s ? (async(e,t,r,n)=>{
                    var s, a, o, i;
                    const l = await r.mutate(w, {
                        variables: {
                            assessmentItemID: e,
                            exerciseID: t,
                            perseusSerializedState: n
                        }
                    });
                    return null != (s = l.data) && null != (a = s.getOrCreateReadAloud) && a.readAloud ? l.data.getOrCreateReadAloud.readAloud : Promise.reject(new Error(null == (o = l.data) || null == (i = o.getOrCreateReadAloud) ? void 0 : i.error))
                }
                )(r, s, t, n).then((t=>{
                    e((0,
                    h.readAloudState)("idle")),
                    y = t,
                    E(y),
                    e((0,
                    h.readAloudText)(y))
                }
                )).catch((()=>{
                    e((0,
                    h.readAloudState)("disabled"))
                }
                )) : e((0,
                h.readAloudState)("disabled"))
            }
            ;
            return l.createElement(a.default, {
                content: k(n)
            }, l.createElement("button", {
                onClick: ()=>{
                    var t;
                    r((0,
                    s.default)({
                        eventType: "ExerciseReadAloudStart",
                        eventSchemaVersion: 1,
                        item: null != (t = null == g ? void 0 : g.id) ? t : ""
                    }, (0,
                    d.getContentPathFields)(i))),
                    y && E(y),
                    null == y && "disabled" !== n && (e((0,
                    h.readAloudState)("loading")),
                    v())
                }
                ,
                role: "switch",
                "aria-checked": "reading" === n,
                "data-test-id": "read-aloud",
                "aria-disabled": "disabled" === n || "loading" === n,
                className: (0,
                o.css)(I.readAloudButton)
            }, l.createElement(f.default, {
                state: n
            })))
        }
        ;
        t.default = C
    },
    sPai: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DrawingArea = void 0;
        var s = n(r("Pwnf"))
          , a = n(r("gE8/"))
          , o = r("mR6N")
          , i = n(r("hKI/"))
          , l = g(r("q1tI"))
          , c = g(r("6OHE"))
          , u = r("JMjv")
          , d = r("/QyA")
          , p = r("tja7")
          , m = r("LE1t");
        function f(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (f = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function g(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = f(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const h = l.createElement("svg", {
            width: "100%",
            height: "100%",
            opacity: "0.1",
            xmlns: "http://www.w3.org/2000/svg"
        }, l.createElement("defs", null, l.createElement("pattern", {
            id: "smallGrid",
            width: "18",
            height: "18",
            patternUnits: "userSpaceOnUse"
        }, l.createElement("path", {
            d: "M 0 8.5 L 18 8.5 M 8.5 0 L 8.5 18",
            strokeDasharray: "1, 1",
            fill: "none",
            stroke: "#000",
            opacity: "0.5",
            strokeWidth: "1"
        })), l.createElement("pattern", {
            id: "grid",
            width: "18",
            height: "18",
            patternUnits: "userSpaceOnUse"
        }, l.createElement("rect", {
            width: "18",
            height: "18",
            fill: "url(#smallGrid)"
        }), l.createElement("path", {
            d: "M 6 8.5 L 11 8.5 M 8.5 6 L 8.5 11",
            fill: "none",
            stroke: "#000",
            strokeWidth: "1"
        }))), l.createElement("rect", {
            width: "100%",
            height: "100%",
            fill: "url(#grid)"
        }))
          , y = l.forwardRef(((e,t)=>{
            const [n,s] = l.useState(null)
              , [a,c] = l.useState(0)
              , [m,f] = l.useState(!1)
              , g = (0,
            i.default)((()=>null == n ? void 0 : n.resize()), 1e3);
            l.useEffect((()=>(window.addEventListener("resize", g),
            "ResizeObserver"in window && window.addEventListener(u.libraryExerciseResizeEvent.type, g),
            ()=>{
                window.removeEventListener("resize", g),
                "ResizeObserver"in window && window.removeEventListener(u.libraryExerciseResizeEvent.type, g)
            }
            )));
            const y = l.useRef(null);
            return l.useEffect((()=>{
                const n = y.current;
                if (n) {
                    const {initialContent: o, onStroke: i} = e;
                    Promise.all([r.e("HRmd"), r.e("5OGZ")]).then(r.t.bind(null, "aVwm", 7)).then((({default: e})=>{
                        const r = new e(n,d.drawingAreaColors[a],i);
                        o && r.setContent(o),
                        s(r),
                        "function" == typeof t ? t(r) : t.current = r
                    }
                    ))
                }
            }
            ), []),
            l.useEffect((()=>null == n ? void 0 : n.resize()), [n, e.visible]),
            l.createElement("div", {
                "data-test-id": "drawing-area",
                style: {
                    display: e.visible ? "block" : "none"
                }
            }, l.createElement("div", {
                className: (0,
                o.css)(E.drawingAreaControlsContainer)
            }, l.createElement(p.DrawingAreaControls, {
                color: a,
                erasing: m,
                setColor: e=>{
                    c(e),
                    f(!1),
                    null == n || n.setColor(d.drawingAreaColors[e])
                }
                ,
                setErase: ()=>{
                    f(!0),
                    null == n || n.setErase()
                }
                ,
                undo: ()=>null == n ? void 0 : n.undo()
            })), l.createElement("div", {
                className: (0,
                o.css)(E.drawingAreaWrapper),
                ref: y
            }, l.createElement("div", {
                className: (0,
                o.css)(E.drawingBackground)
            }, h)))
        }
        ));
        t.DrawingArea = y;
        const E = o.StyleSheet.create({
            controls: {
                display: "flex",
                justifyContent: "space-between",
                marginLeft: 18
            },
            controlsVertical: {
                flexDirection: "column-reverse",
                width: 40
            },
            colorControls: {
                display: "flex",
                flexWrap: "wrap",
                maxWidth: 132
            },
            controlButton: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                cursor: "pointer",
                height: 24,
                marginTop: 12,
                position: "relative",
                width: 24,
                verticalAlign: "top",
                zIndex: c.zIndexes.aboveDrawingArea,
                paddingBottom: 2
            },
            whiteButton: {
                backgroundColor: s.default.white,
                height: 24,
                marginTop: 12,
                width: 24
            },
            drawingBackground: {
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                touchAction: "none"
            },
            drawingAreaControlsContainer: {
                position: "fixed",
                bottom: m.footerHeightWithPadding,
                right: 5,
                paddingBottom: a.default.small_12,
                maxHeight: "90%",
                overflowY: "auto",
                zIndex: c.zIndexes.aboveDrawingArea
            },
            drawingAreaWrapper: {
                height: "100%",
                left: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                width: "100%",
                zIndex: c.zIndexes.drawingArea
            }
        })
    },
    slgN: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.FETCH_READABLE_NOTATION_FOR_ITEM = t.EDIT_READABLE_NOTATION_FOR_ITEM = void 0;
        var s = w(r("q1tI"))
          , a = r("/MKj")
          , o = n(r("lTCR"))
          , i = r("mR6N")
          , l = w(r("8jAt"))
          , c = n(r("Pwnf"))
          , u = r("JimW")
          , d = n(r("wa3X"))
          , p = r("JasB")
          , m = r("Uafs")
          , f = n(r("3iX/"))
          , g = r("8r+/")
          , h = r("NXn8")
          , y = r("Vxy9");
        let E, v, b = e=>e;
        function k(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (k = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function w(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = k(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const I = e=>{
            const {gqlClient: t} = (0,
            h.useApolloGqlClient)()
              , {contentPath: r, assessmentItemMetadata: n} = (0,
            a.useSelector)((e=>e.taskProgress), a.shallowEqual)
              , [o,c] = (0,
            s.useState)("inactive")
              , [g,E] = (0,
            s.useState)({
                exerciseID: null,
                assessmentItemID: null
            })
              , [v,b] = (0,
            s.useState)([])
              , k = (0,
            s.useCallback)((()=>{
                c("loading");
                const e = null == n ? void 0 : n.id
                  , s = null == r ? void 0 : r.learnableContentId;
                E({
                    exerciseID: s,
                    assessmentItemID: e
                }),
                s && (async(e,t,r)=>{
                    var n, s, a, o;
                    const i = await r.query(C, {
                        variables: {
                            assessmentItemID: e,
                            exerciseID: t
                        },
                        fetchPolicy: "network-only"
                    });
                    return null != (n = i.data) && null != (s = n.getNotationReadAloudsForAssessmentItem) && s.notationReadAlouds ? i.data.getNotationReadAloudsForAssessmentItem.notationReadAlouds : Promise.reject(new Error(null == (a = i.data) || null == (o = a.getNotationReadAloudsForAssessmentItem) ? void 0 : o.error))
                }
                )(e, s, t).then((e=>{
                    const t = w(e);
                    b(t),
                    c("active")
                }
                ))
            }
            ), [null == n ? void 0 : n.id, null == r ? void 0 : r.learnableContentId, t]);
            (0,
            s.useEffect)((()=>{
                k()
            }
            ), [k]);
            const w = e=>e.filter(Boolean)
              , I = (e,t)=>s.createElement(u.View, {
                className: (0,
                i.css)(P.notation),
                key: e.id
            }, s.createElement(u.View, {
                className: (0,
                i.css)(P.notationText)
            }, e.original), s.createElement(u.View, {
                className: (0,
                i.css)(P.notationArea)
            }, s.createElement("textarea", {
                className: (0,
                i.css)([P.textareaField]),
                onChange: e=>((e,t)=>{
                    const r = e.target.value;
                    b((e=>{
                        const n = [].concat(e);
                        return n[t] && (n[t].readable = r),
                        n
                    }
                    ))
                }
                )(e, t),
                value: v[t].readable
            }), s.createElement("button", {
                onClick: ()=>(e=>{
                    const t = new SpeechSynthesisUtterance(e || "");
                    speechSynthesis.speak(t)
                }
                )(e.readable),
                className: (0,
                i.css)(P.readAloudButton)
            }, s.createElement(f.default, {
                state: "idle"
            }))));
            return s.createElement(m.OnePaneDialog, {
                title: "Edit Read Aloud Notations",
                subtitle: l._("A blank input will cause the notation to be regenerated."),
                content: s.createElement(u.View, null, v.length > 0 && s.createElement(u.View, null, v.map(((e,t)=>{
                    if (e)
                        return I(e, t)
                }
                ))), 0 === v.length && "loading" !== o && s.createElement(u.View, {
                    className: (0,
                    i.css)(P.emptyMessage)
                }, s.createElement(y.Caption, null, l._("No notations found.")), l._("If you expected to see notations for this assignment item, please click the blue speaker icon in the footer to re-generate the notations.")), "updated" === o && s.createElement(y.Caption, {
                    style: P.updatedMessage,
                    "aria-live": "polite"
                }, l._("Notations successfully updated."))),
                footer: s.createElement(u.View, {
                    className: (0,
                    i.css)(P.buttonContainer)
                }, s.createElement(d.default, {
                    "aria-label": l._("Save"),
                    onClick: ()=>{
                        const {exerciseID: e, assessmentItemID: r} = g;
                        c("loading"),
                        e && r && (async(e,t,r,n)=>{
                            var s, a, o, i;
                            const l = {};
                            for (const e of r)
                                l[e.original] = e.readable;
                            const c = await n.mutate(O, {
                                variables: {
                                    assessmentItemID: e,
                                    exerciseID: t,
                                    notationMap: JSON.stringify(l)
                                }
                            });
                            return null != (s = c.data) && null != (a = s.editNotationReadAloudsForAssessmentItem) && a.updatedNotations ? c.data.editNotationReadAloudsForAssessmentItem : Promise.reject(new Error(null == (o = c.data) || null == (i = o.editNotationReadAloudsForAssessmentItem) ? void 0 : i.error))
                        }
                        )(r, e, v, t).then((e=>{
                            const t = w(e.updatedNotations);
                            b((r=>{
                                const n = r.filter((t=>{
                                    var r;
                                    return !(null != (r = e.deletedNotations) && r.includes(t.original))
                                }
                                ));
                                for (let e = 0; e < t.length; e++) {
                                    const r = n.indexOf((r=>t[e].id));
                                    r > 0 && (n[r].readable = t[e].readable)
                                }
                                return [].concat(n)
                            }
                            )),
                            c("updated")
                        }
                        ))
                    }
                    ,
                    className: (0,
                    i.css)(P.button),
                    spinner: "loading" === o
                }, l._("Save")), s.createElement(p.Strut, {
                    size: 16
                }), s.createElement(d.default, {
                    "aria-label": l._("Cancel"),
                    className: (0,
                    i.css)(P.button),
                    onClick: e.onClose,
                    color: "destructive"
                }, l._("Cancel")))
            })
        }
          , C = (0,
        g.gqlOp)((0,
        o.default)(E || (E = b`
    query GetNotationReadAloudsForAssessmentItem(
        $assessmentItemID: ID!
        $exerciseID: ID!
    ) {
        getNotationReadAloudsForAssessmentItem(
            assessmentItemID: $assessmentItemID
            exerciseID: $exerciseID
        ) {
            notationReadAlouds {
                assessmentItemId
                domainId
                exerciseId
                exerciseUrl
                id
                readable
                original
            }
            error {
                code
                message
            }
        }
    }
`)));
        t.FETCH_READABLE_NOTATION_FOR_ITEM = C;
        const O = (0,
        g.gqlOp)((0,
        o.default)(v || (v = b`
    mutation EditNotationReadAloudsForAssessmentItem(
        $assessmentItemID: ID!
        $exerciseID: ID!
        $notationMap: String!
    ) {
        editNotationReadAloudsForAssessmentItem(
            assessmentItemID: $assessmentItemID
            exerciseID: $exerciseID
            notationMap: $notationMap
        ) {
            updatedNotations {
                assessmentItemId
                domainId
                exerciseId
                exerciseUrl
                id
                original
                readable
            }
            deletedNotations
            error {
                code
                message
            }
        }
    }
`)));
        t.EDIT_READABLE_NOTATION_FOR_ITEM = O;
        const P = i.StyleSheet.create({
            readAloudButton: {
                background: "unset",
                border: "none",
                lineHeight: 0,
                height: "40px",
                width: "40px"
            },
            notationArea: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            },
            textareaField: {
                border: `1px solid ${c.default.offBlack16}`,
                borderRadius: 4,
                boxSizing: "border-box",
                resize: "vertical",
                fontSize: 16,
                lineHeight: 1.38,
                overflow: "auto",
                padding: "8px 12px",
                margin: "4px 0px 0px 0px",
                flexGrow: 2,
                ":focus": {
                    outline: "auto"
                }
            },
            emptyMessage: {
                padding: 40,
                textAlign: "center"
            },
            notation: {
                paddingBottom: 20
            },
            notationText: {
                fontSize: 14,
                color: c.default.offBlack50,
                textAlign: "left"
            },
            buttonContainer: {
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                padding: 20
            },
            button: {
                flex: 1
            },
            updatedMessage: {
                textAlign: "center",
                color: "red"
            }
        });
        var x = ()=>s.createElement(u.Text, null, s.createElement(m.ModalLauncher, {
            modal: ({closeModal: e})=>s.createElement(I, {
                onClose: e
            })
        }, (({openModal: e})=>s.createElement("button", {
            onClick: e,
            title: "Edit Read Aloud for this content",
            className: (0,
            i.css)(P.readAloudButton)
        }, s.createElement(f.default, {
            state: "editing"
        })))));
        t.default = x
    },
    tja7: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DrawingAreaControls = void 0;
        var s = n(r("Pwnf"))
          , a = r("mR6N")
          , o = d(r("q1tI"))
          , i = d(r("6OHE"))
          , l = n(r("6wxr"))
          , c = r("/QyA");
        function u(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (u = function(e) {
                return e ? r : t
            }
            )(e)
        }
        function d(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var r = u(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , s = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        const p = {
            path: "M12.586 1.586a2 2 0 0 1 2.828 0l7 7a2 2 0 0 1 0 2.828l-9 9\n        A2 2 0 0 1 12 21H8a2 2 0 0 1-1.414-.586l-5-5a2 2 0 0 1 0-2.828l11-11z\n        M3 14l5 5h4l9-9-7-7L3 14zm4-4l7-7 7 7-7 7-7-7z",
            width: 24,
            height: 24
        };
        t.DrawingAreaControls = e=>{
            const t = e.erasing;
            return o.createElement("div", {
                className: (0,
                a.css)(m.controls, m.controlsVertical)
            }, o.createElement("div", {
                className: (0,
                a.css)(m.colorControls)
            }, c.drawingAreaColors.map(((r,n)=>o.createElement("div", {
                className: (0,
                a.css)(m.controlButton),
                key: n,
                style: {
                    backgroundColor: r
                },
                onClick: ()=>{
                    e.setColor(n)
                }
            }, !t && e.color === n && o.createElement(l.default, {
                color: "#fff",
                icon: "M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10\n    S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4\n    l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1\n    -0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,\n    10,3.8z",
                size: 10
            }))))), o.createElement("div", null, o.createElement("div", {
                className: (0,
                a.css)(m.controlButton, m.whiteButton),
                onClick: e.undo
            }, o.createElement("svg", {
                width: "24",
                height: "24"
            }, o.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, o.createElement("path", {
                fill: s.default.offBlack64,
                d: "M3.515 20.485c4.686 4.687 12.284 4.687 16.97 0 4.687-4.686 4.687-12.284\n    0-16.97-4.686-4.687-12.284-4.687-16.97 0-.482.482-.914.994-1.297 1.531L4.38\n    7.208a9 9 0 1 1 1.257 11.156 1.5 1.5 0 0 0-2.122 2.121z"
            }), o.createElement("path", {
                fill: s.default.offBlack64,
                stroke: s.default.offBlack64,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M1 3l6 6H1z"
            })))), o.createElement("div", {
                className: (0,
                a.css)(m.controlButton, m.whiteButton),
                onClick: e.setErase
            }, o.createElement(l.default, {
                color: t ? s.default.blue : s.default.offBlack64,
                size: 24,
                icon: p
            }))))
        }
        ;
        const m = a.StyleSheet.create({
            controls: {
                display: "flex",
                justifyContent: "space-between",
                marginLeft: 18
            },
            controlsVertical: {
                flexDirection: "column-reverse",
                width: 40
            },
            colorControls: {
                display: "flex",
                flexWrap: "wrap",
                maxWidth: 132
            },
            controlButton: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                cursor: "pointer",
                height: 24,
                marginTop: 12,
                position: "relative",
                width: 24,
                verticalAlign: "top",
                zIndex: i.zIndexes.aboveDrawingArea,
                paddingBottom: 2
            },
            whiteButton: {
                backgroundColor: s.default.white,
                height: 24,
                marginTop: 12,
                width: 24
            }
        })
    },
    uMpt: function(e, t, r) {
        "use strict";
        var n = r("TqRt");
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.stripModalFromRoute = t.getModalUrlForTestOrQuiz = t.getModalUrlForContent = void 0;
        var s = n(r("pVnL"))
          , a = n(r("gXb0"));
        t.getModalUrlForContent = (e,t)=>e.nodeUrl;
        t.stripModalFromRoute = (e,t)=>{
            let r = e.replace(/\/[^/]*\/(v|e|a)\/.+/gi, "");
            r = r.replace(/\/(quiz|test)\/.+/gi, "");
            const n = (0,
            s.default)({}, t);
            delete n.modal;
            return r + (0,
            a.default)(n, !0)
        }
        ;
        t.getModalUrlForTestOrQuiz = ({type: e, slug: t},r,n)=>{
            const o = (e=>{
                const t = /\/[^/]+\/(v|e|a)\/.+/gi
                  , r = /\/(test|quiz)\/.+/gi;
                return e.match(t) ? e = e.replace(t, "") : e.match(r) && (e = e.replace(r, "")),
                "/" === e[e.length - 1] && (e = e.slice(0, e.length - 1)),
                e
            }
            )(r.pathname)
              , i = (0,
            s.default)({}, r.queryParams, n ? {
                referrer: n
            } : null);
            "subject-challenge" === e ? (e = "test",
            t = "subject-challenge",
            i.modal = "1") : "mastery-challenge" === e && (e = "test",
            t = "mastery-challenge",
            i.modal = "1");
            return `${o}/${e}/${t}${(0,
            a.default)(i, !0)}`
        }
    }
}]);
//# sourceMappingURL=../../sourcemaps/en/71Ve.730ec3509bb744724504.js.map
