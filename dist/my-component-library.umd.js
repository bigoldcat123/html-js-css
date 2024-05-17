(function(v,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(v=typeof globalThis<"u"?globalThis:v||self,e(v.myComponentLib={},v.vue))})(this,function(v,e){"use strict";const P="/nicevideo/kaishi.png",F={class:"progress"},O={class:"progressHead"},R=e.defineComponent({__name:"Progress",props:{total:{},current:{}},emits:["jumpTo"],setup(d,{emit:a}){const i=d,_=a,f=e.ref(),u=e.ref(!1),m=e.ref();e.ref("");function t(c){c.offsetX,u.value=!0}function l(c){u.value=!1}function s(c){const p=c.offsetX,h=m.value.clientWidth;console.log(p/h,p/h*i.total),_("jumpTo",p/h*i.total)}return(c,p)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"progress",ref:m,onMouseleave:l,onMouseenter:t,onClick:s,class:"progress-container"},[e.createElementVNode("div",F,[e.createElementVNode("div",{ref_key:"progressline",ref:f,class:"progressline",style:e.normalizeStyle({width:c.current/c.total*100+"%"})},null,4),e.withDirectives(e.createElementVNode("div",O,null,512),[[e.vShow,u.value]])])],544))}}),ke="",b=(d,a)=>{const i=d.__vccOpts||d;for(const[_,f]of a)i[_]=f;return i},X=b(R,[["__scopeId","data-v-87fc5601"]]),S=d=>(e.pushScopeId("data-v-fefc6d42"),d=d(),e.popScopeId(),d),j=["poster","src"],q=["src"],Q={class:"videoControlComponentArea"},A={class:"control-side"},W={key:0,t:"1715781479214",class:"video-control-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4459",width:"200",height:"200"},Y=[S(()=>e.createElementVNode("path",{d:"M161.2 839.9v-654c0-56.1 60.7-91.1 109.3-63.1l566.3 327c48.6 28 48.6 98.1 0 126.2L270.4 903c-48.5 28-109.2-7.1-109.2-63.1z",fill:"#cdcdcd","p-id":"4460"},null,-1))],G={key:1,t:"1715781525064",class:"video-control-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5548",width:"200",height:"200"},J=[S(()=>e.createElementVNode("path",{d:"M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z",fill:"#bfbfbf","p-id":"5549"},null,-1))],K={class:"control-side"},U={style:{"margin-right":"20px",position:"relative"}},Z=["onClick"],ee={style:{"margin-right":"20px",position:"relative"}},te=["onClick"],oe=[S(()=>e.createElementVNode("svg",{t:"1715780085335",class:"video-control-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3087",width:"200",height:"200"},[e.createElementVNode("path",{d:"M460.8 940.8h-320l262.4-262.4c12.8-12.8 12.8-38.4 0-51.2-12.8-19.2-38.4-19.2-57.6 0l-262.4 262.4v-345.6c0-19.2-19.2-38.4-38.4-38.4s-38.4 19.2-38.4 38.4v364.8c0 51.2 38.4 115.2 96 115.2h358.4c19.2 0 38.4-19.2 38.4-38.4 0-25.6-19.2-44.8-38.4-44.8zM940.8 6.4h-377.6c-19.2 0-38.4 19.2-38.4 38.4s19.2 38.4 38.4 38.4h320l-268.8 262.4c-12.8 12.8-12.8 38.4 0 57.6 19.2 12.8 44.8 12.8 57.6 0l262.4-262.4v320c0 19.2 19.2 38.4 38.4 38.4s38.4-19.2 38.4-38.4v-352c6.4-64-25.6-102.4-70.4-102.4z",fill:"#cdcdcd","p-id":"3088"})],-1))],ne=[S(()=>e.createElementVNode("img",{src:P,style:{height:"100%",width:"100%"},alt:""},null,-1))],le=[S(()=>e.createElementVNode("svg",{t:"1715774477506",class:"loading-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1573",width:"50%",height:"50%"},[e.createElementVNode("path",{d:"M510.5 958.7c-60.4 0-119-11.8-174.2-35.2-53.3-22.5-101.1-54.8-142.2-95.9s-73.3-88.9-95.9-142.2C74.9 630.2 63 571.6 63 511.2s11.8-119 35.2-174.2c22.5-53.3 54.8-101.1 95.9-142.2S283 121.5 336.3 99c55.2-23.3 113.8-35.2 174.2-35.2 49.3 0 97.8 8 144.1 23.7 26.1 8.9 40.1 37.3 31.2 63.4-7.1 20.8-26.5 33.9-47.3 33.9-5.3 0-10.8-0.9-16.1-2.7-35.9-12.2-73.6-18.4-111.9-18.4-92.8 0-180 36.1-245.7 101.8C199.2 331.1 163 418.4 163 511.2c0 92.8 36.1 180 101.8 245.7 65.6 65.6 152.9 101.8 245.7 101.8s180-36.1 245.7-101.8C821.8 691.3 858 604 858 511.2c0-58.6-14.9-116.6-43-167.6-13.3-24.2-4.6-54.6 19.6-67.9 24.2-13.3 54.6-4.6 67.9 19.6 36.3 65.7 55.4 140.4 55.4 215.9 0 60.4-11.8 119-35.2 174.2-22.5 53.3-54.8 101.1-95.9 142.2-41.1 41.1-88.9 73.3-142.2 95.9-55.1 23.3-113.7 35.2-174.1 35.2z","p-id":"1574",fill:"#cdcdcd"})],-1))],se="/api/heigh",re=e.defineComponent({__name:"index",props:{height:{type:Number,default:540},width:{type:Number,default:960},poster:{type:String,required:!0},source:{type:Array,required:!0},traker:{type:Array,requierd:!0}},setup(d){e.useCssVars(o=>({"649ccf4a":a.height+"px","2a1f7e03":a.width+"px"}));const a=d,i=e.ref([{rate:2,using:!1},{rate:1.75,using:!1},{rate:1.5,using:!1},{rate:1,using:!0},{rate:.75,using:!1},{rate:.5,using:!1}]);let _=3;const f=e.ref([{title:"4K",src:"/api/heigh",using:!0},{title:"1080",src:"/api/low",using:!1}]);let u=1;const m=e.ref(se),t=e.ref(),l=e.ref(),s=e.ref(),c=e.ref(),p=e.ref(0),y=e.ref(0),h=e.ref(!1),g=e.ref(!0);e.ref(0);const V=e.ref(!1),C=e.ref(!1);let k=-1;function w(){k!=-1&&(clearTimeout(k),k=-1)}function E(){k=setTimeout(()=>{C.value=!1,k=-1},1e3)}function me(o){var n,r;f.value[o].using=!0,f.value[u].using=!1,u=o,t.value.src=f.value[o].src,console.log((n=t.value)==null?void 0:n.src),t.value.currentTime=y.value,(r=t.value)==null||r.play()}function pe(o){V.value=!1,i.value[o].using=!0,i.value[_].using=!1,_=o,t.value.playbackRate=i.value[o].rate}let B=-1;function he(){B!=-1&&(clearTimeout(B),B=-1)}function $(){B=setTimeout(()=>{V.value=!1,B=-1},1e3)}function ge(o){var n;y.value=o,t.value.currentTime=o,(n=t.value)!=null&&n.paused&&(t.value.play(),g.value=!1,I())}let L=[],N=-1;function ve(){console.log("finished"),g.value=!0}function I(){N==-1&&(N=setInterval(()=>{var o,n,r,T;p.value=Math.floor((o=t.value)==null?void 0:o.duration),y.value=Math.floor((n=t.value)==null?void 0:n.currentTime),((r=t.value)==null?void 0:r.currentTime)==((T=t.value)==null?void 0:T.duration)&&(ve(),clearInterval(N),N=-1)},1e3))}function M(){I(),L.push(setTimeout(()=>{t.value.paused?(t.value.play(),g.value=!1):(clearInterval(N),N=-1,t.value.pause(),g.value=!0,h.value=!1)},340))}let x=-1,z;function _e(o){o.target!=z&&(clearTimeout(x),x=-1),z=o.target,s.value.style.opacity="70%",c.value.style.opacity="70%",s.value.style.opacity=="0.7"&&x==-1&&(x=setTimeout(()=>{var n;(n=s.value)!=null&&n.contains(o.target)?(s.value.style.opacity="70%",c.value.style.opacity="70%",x=-1):(s.value.style.opacity="0%",c.value.style.opacity="0%",x=-1)},2500))}function D(){return document.fullscreenElement!=null}function H(){for(let o=0;o<L.length;o++)clearTimeout(L.pop());D()?document.exitFullscreen():l.value.requestFullscreen()}return e.onMounted(()=>{var o,n,r;t.value.playbackRate=2,p.value=(o=t.value)==null?void 0:o.duration,console.log((n=t.value)==null?void 0:n.duration),g.value=t.value.paused,l.value.addEventListener("fullscreenchange",()=>{D()?(l.value.classList.remove("video-container-normal-screen"),l.value.classList.add("video-container-full-screen"),s.value.classList.remove("video-controls-normal-screen"),s.value.classList.add("video-controls-full-screen")):(l.value.classList.remove("video-container-full-screen"),l.value.classList.add("video-container-normal-screen"),s.value.classList.remove("video-controls-full-screen"),s.value.classList.add("video-controls-normal-screen"))}),t.value.addEventListener("playing",()=>{console.log("Video is no longer paused"),h.value=!1}),t.value.addEventListener("seeked",()=>{console.log("Video is seeked"),h.value=!1}),(r=t.value)==null||r.addEventListener("waiting",()=>{console.log("waitting"),h.value=!0}),l.value.addEventListener("mouseenter",()=>{s.value.style.opacity="0.7",c.value.style.opacity="0.7"}),l.value.addEventListener("mouseleave",()=>{})}),(o,n)=>(e.openBlock(),e.createElementBlock("div",{onMousemove:_e,onDblclick:H,ref_key:"videoContainer",ref:l,class:"video-container video-container-normal-screen"},[e.createElementVNode("video",{onClick:M,ref_key:"vdo",ref:t,poster:d.poster,src:m.value},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(d.traker,r=>(e.openBlock(),e.createElementBlock("track",{default:"",kind:"subtitles",src:r,srclang:"es",label:"Spanish"},null,8,q))),256))],8,j),e.createElementVNode("div",{ref_key:"videoControl",ref:s,class:"video-controls video-controls-normal-screen"},[e.createVNode(X,{onJumpTo:ge,total:p.value,current:y.value},null,8,["total","current"]),e.createElementVNode("div",Q,[e.createElementVNode("div",A,[e.createElementVNode("div",{onClick:M,class:"control-btn"},[g.value?(e.openBlock(),e.createElementBlock("svg",W,Y)):(e.openBlock(),e.createElementBlock("svg",G,J))]),e.createElementVNode("div",null,[e.createElementVNode("span",null,e.toDisplayString(Math.floor(y.value))+" / "+e.toDisplayString(Math.floor(p.value)),1)])]),e.createElementVNode("div",K,[e.createElementVNode("div",U,[e.withDirectives(e.createElementVNode("div",{onMouseenter:w,onMouseleave:E,class:"rate-control",style:e.normalizeStyle({top:-f.value.length*33-20+"px"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(f.value,(r,T)=>(e.openBlock(),e.createElementBlock("div",{onClick:ye=>me(T),class:"rate-control-option",style:e.normalizeStyle(r.using?{backgroundColor:"rgb(43, 43, 43)"}:{})},e.toDisplayString(r.title),13,Z))),256))],36),[[e.vShow,C.value]]),e.createElementVNode("div",{onMouseenter:n[0]||(n[0]=r=>C.value=!0),onMouseleave:E,style:{cursor:"pointer"}},"清晰度",32)]),e.createElementVNode("div",ee,[e.withDirectives(e.createElementVNode("div",{onMouseenter:he,onMouseleave:$,class:"rate-control",style:e.normalizeStyle({top:-i.value.length*33-20+"px"})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(i.value,(r,T)=>(e.openBlock(),e.createElementBlock("div",{onClick:ye=>pe(T),class:"rate-control-option",style:e.normalizeStyle(r.using?{backgroundColor:"rgb(43, 43, 43)"}:{})},e.toDisplayString(r.rate+" X"),13,te))),256))],36),[[e.vShow,V.value]]),e.createElementVNode("div",{onMouseenter:n[1]||(n[1]=r=>V.value=!0),onMouseleave:$,style:{cursor:"pointer"}},"倍速",32)]),e.createElementVNode("div",{onClick:H,class:"control-btn"},oe)])]),e.renderSlot(o.$slots,"control",{},void 0,!0)],512),e.createElementVNode("div",{ref_key:"videoHead",ref:c,class:"video-head"},[e.renderSlot(o.$slots,"head",{height:d.height},void 0,!0)],512),e.withDirectives(e.createElementVNode("div",{onClick:M,class:"Banner"},ne,512),[[e.vShow,g.value]]),e.withDirectives(e.createElementVNode("div",{onClick:M,class:"Banner"},le,512),[[e.vShow,h.value]])],544))}}),xe="",ae=b(re,[["__scopeId","data-v-fefc6d42"]]),ie={class:"container_imagepicker"},ce=["src"],de={class:"btns_imagepicker"},ue=e.defineComponent({__name:"index",props:{imageSrc:{}},setup(d){const a=e.ref(),i=e.ref(),_=e.ref(),f=e.ref(0);return e.watch(f,(u,m)=>{var s;console.log(u);const t=u-m;let l=(s=a.value)==null?void 0:s.clientHeight;l=l+t*3,console.log(l),a.value.style.height=`${l}px`}),e.onMounted(()=>{a.value.addEventListener("mousedown",u=>{const m=a.value.style.transform,t=m.substring(m.indexOf("(")+1,m.indexOf(")")).split(","),l=t[0]?Number.parseInt(t[0].replace("px","")):0,s=t[1]?Number.parseInt(t[1].replace("px","")):0,c=u.clientX,p=u.clientY,y=a.value.clientHeight,h=a.value.clientWidth,g=i.value.clientHeight,V=i.value.clientWidth,C=k=>{let w=l+k.clientX-c,E=s+k.clientY-p;w=Math.max(w,V-h),w=Math.min(w,0),E=Math.min(0,E),E=Math.max(E,g-y),a.value.style.transform=`translate(${w}px,${E}px)`};document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",C)}),document.addEventListener("mousemove",C)})}),(u,m)=>(e.openBlock(),e.createElementBlock("div",ie,[e.createElementVNode("div",{ref_key:"imgfather",ref:i,class:"imagecontent_imagepicker"},[e.createElementVNode("img",{draggable:"false",ref_key:"img",ref:a,class:"img_imagepicker",src:u.imageSrc},null,8,ce)],512),e.createElementVNode("div",de,[e.createElementVNode("div",null,[e.withDirectives(e.createElementVNode("input",{ref_key:"ipt",ref:_,"onUpdate:modelValue":m[0]||(m[0]=t=>f.value=t),type:"range"},null,512),[[e.vModelText,f.value]])])])]))}}),Te="",fe=b(ue,[["__scopeId","data-v-dd3501aa"]]);v.ImagePicker=fe,v.NiceVideo=ae,Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});
