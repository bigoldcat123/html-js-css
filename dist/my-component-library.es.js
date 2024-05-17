import { defineComponent as D, ref as n, openBlock as v, createElementBlock as d, createElementVNode as e, normalizeStyle as b, withDirectives as L, vShow as S, useCssVars as te, onMounted as oe, Fragment as H, renderList as P, createVNode as se, toDisplayString as B, renderSlot as A, pushScopeId as le, popScopeId as ne } from "vue";
const ae = "/nicevideo/kaishi.png", ie = { class: "progress" }, re = { class: "progressHead" }, ce = /* @__PURE__ */ D({
  __name: "Progress",
  props: {
    total: {},
    current: {}
  },
  emits: ["jumpTo"],
  setup(a, { emit: _ }) {
    const c = a, y = _, p = n(), m = n(!1), I = n();
    n("");
    function o(r) {
      r.offsetX, m.value = !0;
    }
    function u(r) {
      m.value = !1;
    }
    function i(r) {
      const f = r.offsetX, h = I.value.clientWidth;
      console.log(f / h, f / h * c.total), y("jumpTo", f / h * c.total);
    }
    return (r, f) => (v(), d("div", {
      ref_key: "progress",
      ref: I,
      onMouseleave: u,
      onMouseenter: o,
      onClick: i,
      class: "progress-container"
    }, [
      e("div", ie, [
        e("div", {
          ref_key: "progressline",
          ref: p,
          class: "progressline",
          style: b({ width: r.current / r.total * 100 + "%" })
        }, null, 4),
        L(e("div", re, null, 512), [
          [S, m.value]
        ])
      ])
    ], 544));
  }
});
const X = (a, _) => {
  const c = a.__vccOpts || a;
  for (const [y, p] of _)
    c[y] = p;
  return c;
}, ue = /* @__PURE__ */ X(ce, [["__scopeId", "data-v-87fc5601"]]), V = (a) => (le("data-v-bde65ef7"), a = a(), ne(), a), ve = ["poster", "src"], de = ["src"], pe = { class: "videoControlComponentArea" }, fe = { class: "control-side" }, he = {
  key: 0,
  t: "1715781479214",
  class: "video-control-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4459",
  width: "200",
  height: "200"
}, ge = /* @__PURE__ */ V(() => /* @__PURE__ */ e("path", {
  d: "M161.2 839.9v-654c0-56.1 60.7-91.1 109.3-63.1l566.3 327c48.6 28 48.6 98.1 0 126.2L270.4 903c-48.5 28-109.2-7.1-109.2-63.1z",
  fill: "#cdcdcd",
  "p-id": "4460"
}, null, -1)), _e = [
  ge
], ye = {
  key: 1,
  t: "1715781525064",
  class: "video-control-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5548",
  width: "200",
  height: "200"
}, me = /* @__PURE__ */ V(() => /* @__PURE__ */ e("path", {
  d: "M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z",
  fill: "#bfbfbf",
  "p-id": "5549"
}, null, -1)), we = [
  me
], Ce = { class: "control-side" }, ke = { style: { "margin-right": "20px", position: "relative" } }, Te = ["onClick"], xe = { style: { "margin-right": "20px", position: "relative" } }, Me = ["onClick"], be = /* @__PURE__ */ V(() => /* @__PURE__ */ e("svg", {
  t: "1715780085335",
  class: "video-control-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3087",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ e("path", {
    d: "M460.8 940.8h-320l262.4-262.4c12.8-12.8 12.8-38.4 0-51.2-12.8-19.2-38.4-19.2-57.6 0l-262.4 262.4v-345.6c0-19.2-19.2-38.4-38.4-38.4s-38.4 19.2-38.4 38.4v364.8c0 51.2 38.4 115.2 96 115.2h358.4c19.2 0 38.4-19.2 38.4-38.4 0-25.6-19.2-44.8-38.4-44.8zM940.8 6.4h-377.6c-19.2 0-38.4 19.2-38.4 38.4s19.2 38.4 38.4 38.4h320l-268.8 262.4c-12.8 12.8-12.8 38.4 0 57.6 19.2 12.8 44.8 12.8 57.6 0l262.4-262.4v320c0 19.2 19.2 38.4 38.4 38.4s38.4-19.2 38.4-38.4v-352c6.4-64-25.6-102.4-70.4-102.4z",
    fill: "#cdcdcd",
    "p-id": "3088"
  })
], -1)), Le = [
  be
], Se = /* @__PURE__ */ V(() => /* @__PURE__ */ e("img", {
  src: ae,
  style: { height: "100%", width: "100%" },
  alt: ""
}, null, -1)), Ve = [
  Se
], Ie = /* @__PURE__ */ V(() => /* @__PURE__ */ e("svg", {
  t: "1715774477506",
  class: "loading-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1573",
  width: "50%",
  height: "50%"
}, [
  /* @__PURE__ */ e("path", {
    d: "M510.5 958.7c-60.4 0-119-11.8-174.2-35.2-53.3-22.5-101.1-54.8-142.2-95.9s-73.3-88.9-95.9-142.2C74.9 630.2 63 571.6 63 511.2s11.8-119 35.2-174.2c22.5-53.3 54.8-101.1 95.9-142.2S283 121.5 336.3 99c55.2-23.3 113.8-35.2 174.2-35.2 49.3 0 97.8 8 144.1 23.7 26.1 8.9 40.1 37.3 31.2 63.4-7.1 20.8-26.5 33.9-47.3 33.9-5.3 0-10.8-0.9-16.1-2.7-35.9-12.2-73.6-18.4-111.9-18.4-92.8 0-180 36.1-245.7 101.8C199.2 331.1 163 418.4 163 511.2c0 92.8 36.1 180 101.8 245.7 65.6 65.6 152.9 101.8 245.7 101.8s180-36.1 245.7-101.8C821.8 691.3 858 604 858 511.2c0-58.6-14.9-116.6-43-167.6-13.3-24.2-4.6-54.6 19.6-67.9 24.2-13.3 54.6-4.6 67.9 19.6 36.3 65.7 55.4 140.4 55.4 215.9 0 60.4-11.8 119-35.2 174.2-22.5 53.3-54.8 101.1-95.9 142.2-41.1 41.1-88.9 73.3-142.2 95.9-55.1 23.3-113.7 35.2-174.1 35.2z",
    "p-id": "1574",
    fill: "#cdcdcd"
  })
], -1)), Ee = [
  Ie
], $e = "/api/heigh", Be = /* @__PURE__ */ D({
  __name: "index",
  props: {
    height: {
      type: Number,
      default: 540
    },
    width: {
      type: Number,
      default: 960
    },
    poster: {
      type: String,
      required: !0
    },
    source: {
      type: Array,
      required: !0
    },
    traker: {
      type: Array,
      requierd: !0
    }
  },
  setup(a) {
    te((t) => ({
      "3533d944": _.height + "px",
      "5fd3676f": _.width + "px"
    }));
    const _ = a, c = n([
      {
        rate: 2,
        using: !1
      },
      {
        rate: 1.75,
        using: !1
      },
      {
        rate: 1.5,
        using: !1
      },
      {
        rate: 1,
        using: !0
      },
      {
        rate: 0.75,
        using: !1
      },
      {
        rate: 0.5,
        using: !1
      }
    ]);
    let y = 3;
    const p = n([
      {
        title: "4K",
        src: "/api/heigh",
        using: !0
      },
      {
        title: "1080",
        src: "/api/low",
        using: !1
      }
    ]);
    let m = 1;
    const I = n($e), o = n(), u = n(), i = n(), r = n(), f = n(0), w = n(0), h = n(!1), g = n(!0);
    n(0);
    const E = n(!1), R = n(!1);
    let x = -1;
    function W() {
      x != -1 && (clearTimeout(x), x = -1);
    }
    function F() {
      x = setTimeout(() => {
        R.value = !1, x = -1;
      }, 1e3);
    }
    function G(t) {
      var s, l;
      p.value[t].using = !0, p.value[m].using = !1, m = t, o.value.src = p.value[t].src, console.log((s = o.value) == null ? void 0 : s.src), o.value.currentTime = w.value, (l = o.value) == null || l.play();
    }
    function J(t) {
      E.value = !1, c.value[t].using = !0, c.value[y].using = !1, y = t, o.value.playbackRate = c.value[t].rate;
    }
    let M = -1;
    function K() {
      M != -1 && (clearTimeout(M), M = -1);
    }
    function N() {
      M = setTimeout(() => {
        E.value = !1, M = -1;
      }, 1e3);
    }
    function U(t) {
      var s;
      w.value = t, o.value.currentTime = t, (s = o.value) != null && s.paused && (o.value.play(), g.value = !1, Q());
    }
    let z = [], C = -1;
    function Y() {
      console.log("finished"), g.value = !0;
    }
    function Q() {
      C == -1 && (C = setInterval(() => {
        var t, s, l, T;
        f.value = Math.floor((t = o.value) == null ? void 0 : t.duration), w.value = Math.floor((s = o.value) == null ? void 0 : s.currentTime), ((l = o.value) == null ? void 0 : l.currentTime) == ((T = o.value) == null ? void 0 : T.duration) && (Y(), clearInterval(C), C = -1);
      }, 1e3));
    }
    function $() {
      Q(), z.push(setTimeout(() => {
        o.value.paused ? (o.value.play(), g.value = !1) : (clearInterval(C), C = -1, o.value.pause(), g.value = !0, h.value = !1);
      }, 340));
    }
    let k = -1, q;
    function Z(t) {
      t.target != q && (clearTimeout(k), k = -1), q = t.target, i.value.style.opacity = "70%", r.value.style.opacity = "70%", i.value.style.opacity == "0.7" && k == -1 && (k = setTimeout(() => {
        var s;
        (s = i.value) != null && s.contains(t.target) ? (i.value.style.opacity = "70%", r.value.style.opacity = "70%", k = -1) : (i.value.style.opacity = "0%", r.value.style.opacity = "0%", k = -1);
      }, 2500));
    }
    function O() {
      return document.fullscreenElement != null;
    }
    function j() {
      for (let t = 0; t < z.length; t++)
        clearTimeout(z.pop());
      O() ? document.exitFullscreen() : u.value.requestFullscreen();
    }
    return oe(() => {
      var t, s, l;
      o.value.playbackRate = 2, f.value = (t = o.value) == null ? void 0 : t.duration, console.log((s = o.value) == null ? void 0 : s.duration), g.value = o.value.paused, u.value.addEventListener("fullscreenchange", () => {
        O() ? (u.value.classList.remove("video-container-normal-screen"), u.value.classList.add("video-container-full-screen"), i.value.classList.remove("video-controls-normal-screen"), i.value.classList.add("video-controls-full-screen")) : (u.value.classList.remove("video-container-full-screen"), u.value.classList.add("video-container-normal-screen"), i.value.classList.remove("video-controls-full-screen"), i.value.classList.add("video-controls-normal-screen"));
      }), o.value.addEventListener("playing", () => {
        console.log("Video is no longer paused"), h.value = !1;
      }), o.value.addEventListener("seeked", () => {
        console.log("Video is seeked"), h.value = !1;
      }), (l = o.value) == null || l.addEventListener("waiting", () => {
        console.log("waitting"), h.value = !0;
      }), u.value.addEventListener("mouseenter", () => {
        i.value.style.opacity = "0.7", r.value.style.opacity = "0.7";
      }), u.value.addEventListener("mouseleave", () => {
      });
    }), (t, s) => (v(), d("div", {
      onMousemove: Z,
      onDblclick: j,
      ref_key: "videoContainer",
      ref: u,
      class: "video-container video-container-normal-screen"
    }, [
      e("video", {
        onClick: $,
        ref_key: "vdo",
        ref: o,
        poster: a.poster,
        src: I.value
      }, [
        (v(!0), d(H, null, P(a.traker, (l) => (v(), d("track", {
          default: "",
          kind: "subtitles",
          src: l,
          srclang: "es",
          label: "Spanish"
        }, null, 8, de))), 256))
      ], 8, ve),
      e("div", {
        ref_key: "videoControl",
        ref: i,
        class: "video-controls video-controls-normal-screen"
      }, [
        se(ue, {
          onJumpTo: U,
          total: f.value,
          current: w.value
        }, null, 8, ["total", "current"]),
        e("div", pe, [
          e("div", fe, [
            e("div", {
              onClick: $,
              class: "control-btn"
            }, [
              g.value ? (v(), d("svg", he, _e)) : (v(), d("svg", ye, we))
            ]),
            e("div", null, [
              e("span", null, B(Math.floor(w.value)) + " / " + B(Math.floor(f.value)), 1)
            ])
          ]),
          e("div", Ce, [
            e("div", ke, [
              L(e("div", {
                onMouseenter: W,
                onMouseleave: F,
                class: "rate-control",
                style: b({ top: -p.value.length * 33 - 20 + "px" })
              }, [
                (v(!0), d(H, null, P(p.value, (l, T) => (v(), d("div", {
                  onClick: (ee) => G(T),
                  class: "rate-control-option",
                  style: b(l.using ? { backgroundColor: "rgb(43, 43, 43)" } : {})
                }, B(l.title), 13, Te))), 256))
              ], 36), [
                [S, R.value]
              ]),
              e("div", {
                onMouseenter: s[0] || (s[0] = (l) => R.value = !0),
                onMouseleave: F,
                style: { cursor: "pointer" }
              }, "清晰度", 32)
            ]),
            e("div", xe, [
              L(e("div", {
                onMouseenter: K,
                onMouseleave: N,
                class: "rate-control",
                style: b({ top: -c.value.length * 33 - 20 + "px" })
              }, [
                (v(!0), d(H, null, P(c.value, (l, T) => (v(), d("div", {
                  onClick: (ee) => J(T),
                  class: "rate-control-option",
                  style: b(l.using ? { backgroundColor: "rgb(43, 43, 43)" } : {})
                }, B(l.rate + " X"), 13, Me))), 256))
              ], 36), [
                [S, E.value]
              ]),
              e("div", {
                onMouseenter: s[1] || (s[1] = (l) => E.value = !0),
                onMouseleave: N,
                style: { cursor: "pointer" }
              }, "倍速", 32)
            ]),
            e("div", {
              onClick: j,
              class: "control-btn"
            }, Le)
          ])
        ]),
        A(t.$slots, "control", {}, void 0, !0)
      ], 512),
      e("div", {
        ref_key: "videoHead",
        ref: r,
        class: "video-head"
      }, [
        A(t.$slots, "head", { height: a.height }, void 0, !0)
      ], 512),
      L(e("div", {
        onClick: $,
        class: "Banner"
      }, Ve, 512), [
        [S, g.value]
      ]),
      L(e("div", {
        onClick: $,
        class: "Banner"
      }, Ee, 512), [
        [S, h.value]
      ])
    ], 544));
  }
});
const ze = /* @__PURE__ */ X(Be, [["__scopeId", "data-v-bde65ef7"]]);
export {
  ze as NiceVideo
};
