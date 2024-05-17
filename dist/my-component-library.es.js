import { defineComponent as X, ref as s, openBlock as _, createElementBlock as m, createElementVNode as t, normalizeStyle as V, withDirectives as S, vShow as H, useCssVars as oe, onMounted as D, Fragment as z, renderList as O, createVNode as se, toDisplayString as P, renderSlot as Y, pushScopeId as le, popScopeId as ne, watch as ae, vModelText as ie } from "vue";
const re = "/nicevideo/kaishi.png", ce = { class: "progress" }, ue = { class: "progressHead" }, de = /* @__PURE__ */ X({
  __name: "Progress",
  props: {
    total: {},
    current: {}
  },
  emits: ["jumpTo"],
  setup(d, { emit: r }) {
    const c = d, w = r, p = s(), v = s(!1), f = s();
    s("");
    function e(u) {
      u.offsetX, v.value = !0;
    }
    function n(u) {
      v.value = !1;
    }
    function a(u) {
      const g = u.offsetX, h = f.value.clientWidth;
      console.log(g / h, g / h * c.total), w("jumpTo", g / h * c.total);
    }
    return (u, g) => (_(), m("div", {
      ref_key: "progress",
      ref: f,
      onMouseleave: n,
      onMouseenter: e,
      onClick: a,
      class: "progress-container"
    }, [
      t("div", ce, [
        t("div", {
          ref_key: "progressline",
          ref: p,
          class: "progressline",
          style: V({ width: u.current / u.total * 100 + "%" })
        }, null, 4),
        S(t("div", ue, null, 512), [
          [H, v.value]
        ])
      ])
    ], 544));
  }
});
const F = (d, r) => {
  const c = d.__vccOpts || d;
  for (const [w, p] of r)
    c[w] = p;
  return c;
}, ve = /* @__PURE__ */ F(de, [["__scopeId", "data-v-87fc5601"]]), B = (d) => (le("data-v-fefc6d42"), d = d(), ne(), d), pe = ["poster", "src"], fe = ["src"], ge = { class: "videoControlComponentArea" }, he = { class: "control-side" }, _e = {
  key: 0,
  t: "1715781479214",
  class: "video-control-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4459",
  width: "200",
  height: "200"
}, me = /* @__PURE__ */ B(() => /* @__PURE__ */ t("path", {
  d: "M161.2 839.9v-654c0-56.1 60.7-91.1 109.3-63.1l566.3 327c48.6 28 48.6 98.1 0 126.2L270.4 903c-48.5 28-109.2-7.1-109.2-63.1z",
  fill: "#cdcdcd",
  "p-id": "4460"
}, null, -1)), ye = [
  me
], we = {
  key: 1,
  t: "1715781525064",
  class: "video-control-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5548",
  width: "200",
  height: "200"
}, ke = /* @__PURE__ */ B(() => /* @__PURE__ */ t("path", {
  d: "M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z",
  fill: "#bfbfbf",
  "p-id": "5549"
}, null, -1)), xe = [
  ke
], Ce = { class: "control-side" }, Te = { style: { "margin-right": "20px", position: "relative" } }, Me = ["onClick"], be = { style: { "margin-right": "20px", position: "relative" } }, Le = ["onClick"], $e = /* @__PURE__ */ B(() => /* @__PURE__ */ t("svg", {
  t: "1715780085335",
  class: "video-control-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3087",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ t("path", {
    d: "M460.8 940.8h-320l262.4-262.4c12.8-12.8 12.8-38.4 0-51.2-12.8-19.2-38.4-19.2-57.6 0l-262.4 262.4v-345.6c0-19.2-19.2-38.4-38.4-38.4s-38.4 19.2-38.4 38.4v364.8c0 51.2 38.4 115.2 96 115.2h358.4c19.2 0 38.4-19.2 38.4-38.4 0-25.6-19.2-44.8-38.4-44.8zM940.8 6.4h-377.6c-19.2 0-38.4 19.2-38.4 38.4s19.2 38.4 38.4 38.4h320l-268.8 262.4c-12.8 12.8-12.8 38.4 0 57.6 19.2 12.8 44.8 12.8 57.6 0l262.4-262.4v320c0 19.2 19.2 38.4 38.4 38.4s38.4-19.2 38.4-38.4v-352c6.4-64-25.6-102.4-70.4-102.4z",
    fill: "#cdcdcd",
    "p-id": "3088"
  })
], -1)), Ie = [
  $e
], Se = /* @__PURE__ */ B(() => /* @__PURE__ */ t("img", {
  src: re,
  style: { height: "100%", width: "100%" },
  alt: ""
}, null, -1)), Ee = [
  Se
], Ve = /* @__PURE__ */ B(() => /* @__PURE__ */ t("svg", {
  t: "1715774477506",
  class: "loading-icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "1573",
  width: "50%",
  height: "50%"
}, [
  /* @__PURE__ */ t("path", {
    d: "M510.5 958.7c-60.4 0-119-11.8-174.2-35.2-53.3-22.5-101.1-54.8-142.2-95.9s-73.3-88.9-95.9-142.2C74.9 630.2 63 571.6 63 511.2s11.8-119 35.2-174.2c22.5-53.3 54.8-101.1 95.9-142.2S283 121.5 336.3 99c55.2-23.3 113.8-35.2 174.2-35.2 49.3 0 97.8 8 144.1 23.7 26.1 8.9 40.1 37.3 31.2 63.4-7.1 20.8-26.5 33.9-47.3 33.9-5.3 0-10.8-0.9-16.1-2.7-35.9-12.2-73.6-18.4-111.9-18.4-92.8 0-180 36.1-245.7 101.8C199.2 331.1 163 418.4 163 511.2c0 92.8 36.1 180 101.8 245.7 65.6 65.6 152.9 101.8 245.7 101.8s180-36.1 245.7-101.8C821.8 691.3 858 604 858 511.2c0-58.6-14.9-116.6-43-167.6-13.3-24.2-4.6-54.6 19.6-67.9 24.2-13.3 54.6-4.6 67.9 19.6 36.3 65.7 55.4 140.4 55.4 215.9 0 60.4-11.8 119-35.2 174.2-22.5 53.3-54.8 101.1-95.9 142.2-41.1 41.1-88.9 73.3-142.2 95.9-55.1 23.3-113.7 35.2-174.1 35.2z",
    "p-id": "1574",
    fill: "#cdcdcd"
  })
], -1)), He = [
  Ve
], Be = "/api/heigh", Ne = /* @__PURE__ */ X({
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
  setup(d) {
    oe((o) => ({
      "649ccf4a": r.height + "px",
      "2a1f7e03": r.width + "px"
    }));
    const r = d, c = s([
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
    let w = 3;
    const p = s([
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
    let v = 1;
    const f = s(Be), e = s(), n = s(), a = s(), u = s(), g = s(0), k = s(0), h = s(!1), y = s(!0);
    s(0);
    const M = s(!1), b = s(!1);
    let x = -1;
    function T() {
      x != -1 && (clearTimeout(x), x = -1);
    }
    function C() {
      x = setTimeout(() => {
        b.value = !1, x = -1;
      }, 1e3);
    }
    function G(o) {
      var l, i;
      p.value[o].using = !0, p.value[v].using = !1, v = o, e.value.src = p.value[o].src, console.log((l = e.value) == null ? void 0 : l.src), e.value.currentTime = k.value, (i = e.value) == null || i.play();
    }
    function J(o) {
      M.value = !1, c.value[o].using = !0, c.value[w].using = !1, w = o, e.value.playbackRate = c.value[o].rate;
    }
    let E = -1;
    function K() {
      E != -1 && (clearTimeout(E), E = -1);
    }
    function Q() {
      E = setTimeout(() => {
        M.value = !1, E = -1;
      }, 1e3);
    }
    function U(o) {
      var l;
      k.value = o, e.value.currentTime = o, (l = e.value) != null && l.paused && (e.value.play(), y.value = !1, q());
    }
    let R = [], L = -1;
    function Z() {
      console.log("finished"), y.value = !0;
    }
    function q() {
      L == -1 && (L = setInterval(() => {
        var o, l, i, I;
        g.value = Math.floor((o = e.value) == null ? void 0 : o.duration), k.value = Math.floor((l = e.value) == null ? void 0 : l.currentTime), ((i = e.value) == null ? void 0 : i.currentTime) == ((I = e.value) == null ? void 0 : I.duration) && (Z(), clearInterval(L), L = -1);
      }, 1e3));
    }
    function N() {
      q(), R.push(setTimeout(() => {
        e.value.paused ? (e.value.play(), y.value = !1) : (clearInterval(L), L = -1, e.value.pause(), y.value = !0, h.value = !1);
      }, 340));
    }
    let $ = -1, j;
    function ee(o) {
      o.target != j && (clearTimeout($), $ = -1), j = o.target, a.value.style.opacity = "70%", u.value.style.opacity = "70%", a.value.style.opacity == "0.7" && $ == -1 && ($ = setTimeout(() => {
        var l;
        (l = a.value) != null && l.contains(o.target) ? (a.value.style.opacity = "70%", u.value.style.opacity = "70%", $ = -1) : (a.value.style.opacity = "0%", u.value.style.opacity = "0%", $ = -1);
      }, 2500));
    }
    function A() {
      return document.fullscreenElement != null;
    }
    function W() {
      for (let o = 0; o < R.length; o++)
        clearTimeout(R.pop());
      A() ? document.exitFullscreen() : n.value.requestFullscreen();
    }
    return D(() => {
      var o, l, i;
      e.value.playbackRate = 2, g.value = (o = e.value) == null ? void 0 : o.duration, console.log((l = e.value) == null ? void 0 : l.duration), y.value = e.value.paused, n.value.addEventListener("fullscreenchange", () => {
        A() ? (n.value.classList.remove("video-container-normal-screen"), n.value.classList.add("video-container-full-screen"), a.value.classList.remove("video-controls-normal-screen"), a.value.classList.add("video-controls-full-screen")) : (n.value.classList.remove("video-container-full-screen"), n.value.classList.add("video-container-normal-screen"), a.value.classList.remove("video-controls-full-screen"), a.value.classList.add("video-controls-normal-screen"));
      }), e.value.addEventListener("playing", () => {
        console.log("Video is no longer paused"), h.value = !1;
      }), e.value.addEventListener("seeked", () => {
        console.log("Video is seeked"), h.value = !1;
      }), (i = e.value) == null || i.addEventListener("waiting", () => {
        console.log("waitting"), h.value = !0;
      }), n.value.addEventListener("mouseenter", () => {
        a.value.style.opacity = "0.7", u.value.style.opacity = "0.7";
      }), n.value.addEventListener("mouseleave", () => {
      });
    }), (o, l) => (_(), m("div", {
      onMousemove: ee,
      onDblclick: W,
      ref_key: "videoContainer",
      ref: n,
      class: "video-container video-container-normal-screen"
    }, [
      t("video", {
        onClick: N,
        ref_key: "vdo",
        ref: e,
        poster: d.poster,
        src: f.value
      }, [
        (_(!0), m(z, null, O(d.traker, (i) => (_(), m("track", {
          default: "",
          kind: "subtitles",
          src: i,
          srclang: "es",
          label: "Spanish"
        }, null, 8, fe))), 256))
      ], 8, pe),
      t("div", {
        ref_key: "videoControl",
        ref: a,
        class: "video-controls video-controls-normal-screen"
      }, [
        se(ve, {
          onJumpTo: U,
          total: g.value,
          current: k.value
        }, null, 8, ["total", "current"]),
        t("div", ge, [
          t("div", he, [
            t("div", {
              onClick: N,
              class: "control-btn"
            }, [
              y.value ? (_(), m("svg", _e, ye)) : (_(), m("svg", we, xe))
            ]),
            t("div", null, [
              t("span", null, P(Math.floor(k.value)) + " / " + P(Math.floor(g.value)), 1)
            ])
          ]),
          t("div", Ce, [
            t("div", Te, [
              S(t("div", {
                onMouseenter: T,
                onMouseleave: C,
                class: "rate-control",
                style: V({ top: -p.value.length * 33 - 20 + "px" })
              }, [
                (_(!0), m(z, null, O(p.value, (i, I) => (_(), m("div", {
                  onClick: (te) => G(I),
                  class: "rate-control-option",
                  style: V(i.using ? { backgroundColor: "rgb(43, 43, 43)" } : {})
                }, P(i.title), 13, Me))), 256))
              ], 36), [
                [H, b.value]
              ]),
              t("div", {
                onMouseenter: l[0] || (l[0] = (i) => b.value = !0),
                onMouseleave: C,
                style: { cursor: "pointer" }
              }, "清晰度", 32)
            ]),
            t("div", be, [
              S(t("div", {
                onMouseenter: K,
                onMouseleave: Q,
                class: "rate-control",
                style: V({ top: -c.value.length * 33 - 20 + "px" })
              }, [
                (_(!0), m(z, null, O(c.value, (i, I) => (_(), m("div", {
                  onClick: (te) => J(I),
                  class: "rate-control-option",
                  style: V(i.using ? { backgroundColor: "rgb(43, 43, 43)" } : {})
                }, P(i.rate + " X"), 13, Le))), 256))
              ], 36), [
                [H, M.value]
              ]),
              t("div", {
                onMouseenter: l[1] || (l[1] = (i) => M.value = !0),
                onMouseleave: Q,
                style: { cursor: "pointer" }
              }, "倍速", 32)
            ]),
            t("div", {
              onClick: W,
              class: "control-btn"
            }, Ie)
          ])
        ]),
        Y(o.$slots, "control", {}, void 0, !0)
      ], 512),
      t("div", {
        ref_key: "videoHead",
        ref: u,
        class: "video-head"
      }, [
        Y(o.$slots, "head", { height: d.height }, void 0, !0)
      ], 512),
      S(t("div", {
        onClick: N,
        class: "Banner"
      }, Ee, 512), [
        [H, y.value]
      ]),
      S(t("div", {
        onClick: N,
        class: "Banner"
      }, He, 512), [
        [H, h.value]
      ])
    ], 544));
  }
});
const Fe = /* @__PURE__ */ F(Ne, [["__scopeId", "data-v-fefc6d42"]]), Pe = { class: "container_imagepicker" }, Re = ["src"], ze = { class: "btns_imagepicker" }, Oe = /* @__PURE__ */ X({
  __name: "index",
  props: {
    imageSrc: {}
  },
  setup(d) {
    const r = s(), c = s(), w = s(), p = s(0);
    return ae(p, (v, f) => {
      var a;
      console.log(v);
      const e = v - f;
      let n = (a = r.value) == null ? void 0 : a.clientHeight;
      n = n + e * 3, console.log(n), r.value.style.height = `${n}px`;
    }), D(() => {
      r.value.addEventListener("mousedown", (v) => {
        const f = r.value.style.transform, e = f.substring(f.indexOf("(") + 1, f.indexOf(")")).split(","), n = e[0] ? Number.parseInt(e[0].replace("px", "")) : 0, a = e[1] ? Number.parseInt(e[1].replace("px", "")) : 0, u = v.clientX, g = v.clientY, k = r.value.clientHeight, h = r.value.clientWidth, y = c.value.clientHeight, M = c.value.clientWidth, b = (x) => {
          let T = n + x.clientX - u, C = a + x.clientY - g;
          T = Math.max(T, M - h), T = Math.min(T, 0), C = Math.min(0, C), C = Math.max(C, y - k), r.value.style.transform = `translate(${T}px,${C}px)`;
        };
        document.addEventListener("mouseup", () => {
          document.removeEventListener("mousemove", b);
        }), document.addEventListener("mousemove", b);
      });
    }), (v, f) => (_(), m("div", Pe, [
      t("div", {
        ref_key: "imgfather",
        ref: c,
        class: "imagecontent_imagepicker"
      }, [
        t("img", {
          draggable: "false",
          ref_key: "img",
          ref: r,
          class: "img_imagepicker",
          src: v.imageSrc
        }, null, 8, Re)
      ], 512),
      t("div", ze, [
        t("div", null, [
          S(t("input", {
            ref_key: "ipt",
            ref: w,
            "onUpdate:modelValue": f[0] || (f[0] = (e) => p.value = e),
            type: "range"
          }, null, 512), [
            [ie, p.value]
          ])
        ])
      ])
    ]));
  }
});
const Qe = /* @__PURE__ */ F(Oe, [["__scopeId", "data-v-dd3501aa"]]);
export {
  Qe as ImagePicker,
  Fe as NiceVideo
};
