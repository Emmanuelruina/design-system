(()=>{var S="data-js-hook",F="behavior_",tt="state_";function v(){let t={};function n(i,s){return{}.hasOwnProperty.call(t,i)?t[i].push(s):t[i]=[s],this}function e(i,s){if(!{}.hasOwnProperty.call(t,i))return this;let o=t[i].indexOf(s);return o!==-1&&t[i].splice(o,1),this}function r(i,s){if(!{}.hasOwnProperty.call(t,i))return this;s=s||{};let o=t[i];for(let a=0,u=o.length;a<u;a++)o[a].call(this,s);return this}return this.addEventListener=n,this.removeEventListener=e,this.dispatchEvent=r,this.getRegisteredEvents=()=>t,this}function N(t,n){if(!t)return!1;let e=t.getAttribute(S);return e?(e=e.split(" "),e.indexOf(n)>-1):!1}function _(t,n){if(N(t,n))return n;if(n.indexOf(" ")!==-1){let r=S+" values cannot contain spaces!";throw new Error(r)}let e=t.getAttribute(S);return e!==null&&(n=e+" "+n),t.setAttribute(S,n),n}var dt=tt+"atomic_init";function Rt(t,n){if(!t||!t.classList){let e=t+' is not valid. Check that element is a DOM node with class "'+n+'"';throw new Error(e)}return t}function Ft(t,n){let e=t.classList.contains(n)?t:t.querySelector("."+n);if(!e){let r=n+" not found on or in passed DOM node.";throw new Error(r)}return e}function O(t,n){return Rt(t,n),Ft(t,n)}function T(t){return N(t,dt)?!1:(_(t,dt),!0)}function b(t,n,e,r={}){let s=(e||document).querySelectorAll(t),o=[],a,u;for(let l=0,c=s.length;l<c;l++)u=s[l],N(u,dt)===!1&&(a=new n(u),a.init(r),o.push(a));return o}function gt(t,n){n=n||document;let e=[];try{e=n.querySelectorAll(t)}catch(r){let i=`${t} not found in DOM! ${r}`;throw new Error(i)}return e.length===0&&t.indexOf(F)===-1&&(e=lt(t,n)),e}function St(t,n,e,r){let i=[];t instanceof NodeList?i=t:t instanceof Node?i=[t]:typeof t=="string"&&(i=gt(t,r));for(let s=0,o=i.length;s<o;s++)i[s].addEventListener(n,e,!1);return i}function q(t,n){let e;if(N(t,n))return e=t,e;if(t){let r="["+S+"="+n+"]";e=t.querySelector(r)}if(!e){let r=n+" behavior not found on passed DOM node!";throw new Error(r)}return e}function lt(t,n){return t=S+"*="+F+t,t="["+t+"]",gt(t,n)}function Lt(t,n,e){t.removeEventListener(n,e)}var z=Object.prototype.toString;function ft(t){return typeof t=="undefined"}function At(t){return typeof t!="undefined"}function xt(t){return t!==null&&typeof t=="object"}function ht(t){return z.call(t)==="[object String]"}function Ot(t){return z.call(t)==="[object Number]"}function Tt(t){return z.call(t)==="[object Date]"}var bt=Array.isArray||function(n){return z.call(n)==="[object Array]"};function yt(t){return z.call(t)==="[object Function]"}function wt(t){return ft(t)||t===null||ht(t)&&t.length<=0||/^\s*$/.test(t)}function Mt(){return!!new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent)}var j=F+"flyout-menu",Pt="["+S+"="+j;function M(t,n=!0){let e=q(t,j),r=P(t),i=q(t,j+"_content"),s=0,o=0,a=1,u=2,l=3,c,E,p,x=ot.bind(this),C=k.bind(this),D,g=!0,y=!1;function P(d){let m=[],A=d.querySelectorAll(`${Pt}_trigger]`),$,R,ct;for(let ut=A.length>>>0;ut--;){for(ct=!1,$=A[ut],R=$.parentElement;R!==d;)R.getAttribute(S)&&R.getAttribute(S).split(" ").indexOf(j)!==-1?(ct=!0,R=d):R=R.parentElement;ct||m.unshift(A[ut])}return m}function X(d=!1){return s=d?l:o,r.forEach(m=>{w("expanded",m,d),m.addEventListener("click",h.bind(this)),m.addEventListener("touchstart",H,{passive:!0}),m.addEventListener("mouseover",st.bind(this)),m.addEventListener("mouseout",rt.bind(this))}),i.setAttribute("data-open",d?"true":"false"),n&&!d&&i.setAttribute("hidden",""),_t(),this}function w(d,m,A){let $=String(A);return m.setAttribute("aria-"+d,$),$}function H(){y=!0}function st(d){g||(y||this.dispatchEvent("triggerover",{target:this,trigger:d.target,type:"triggerover"}),y=!1)}function rt(d){g||this.dispatchEvent("triggerout",{target:this,trigger:d.target,type:"triggerout"})}function h(d){if(!g)switch(this.dispatchEvent("triggerclick",{target:this,trigger:d.target,type:"triggerclick"}),d.preventDefault(),s){case o:case a:this.expand();break;case u:case l:this.collapse();break}}function Q(){if(c==null||c.halt(),s===u||s===l)return this;if(s=u,n&&i.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!E||!p)return C(),this;let d=c==null?void 0:c.isAnimated();return d&&c.addEventListener(f.END_EVENT,C),E(),d||C(),this}function U(){if(c==null||c.halt(),s===a||s===o)return this;for(let m=0,A=r.length;m<A;m++)w("expanded",r[m],!1);if(i.setAttribute("data-open","false"),s=a,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!p||!E)return x(),this;let d=c==null?void 0:c.isAnimated();return d&&c.addEventListener(f.END_EVENT,x),p(),d||x(),this}function k(){s=l,i.setAttribute("data-open","true"),c&&c.removeEventListener(f.END_EVENT,C),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let d=0,m=r.length;d<m;d++)w("expanded",r[d],!0)}function ot(){s=o,n&&i.setAttribute("hidden",""),c&&c.removeEventListener(f.END_EVENT,x),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function Ct(d,m,A){c=d,m&&m!==p&&(p=m),A&&A!==E&&(E=A)}function Dt(){c&&c.remove();let d;c=d,E=d,p=d}function Ht(){return{container:e,content:i,trigger:r}}function _t(){return g&&(g=!1),!g}function Nt(){return g||(g=!0),g}function Bt(d){return D=d,this}let at=new v;return this.addEventListener=at.addEventListener,this.removeEventListener=at.removeEventListener,this.dispatchEvent=at.dispatchEvent,this.init=X,this.expand=Q,this.collapse=U,this.setTransition=Ct,this.clearTransition=Dt,this.getData=()=>D,this.getTransition=()=>c,this.getDom=Ht,this.isAnimating=()=>s===u||s===a,this.isExpanded=()=>s===l,this.resume=_t,this.setData=Bt,this.suspend=Nt,M.BASE_CLASS=j,this}var et={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function Et(t){let n=new v,e=new f(t,et,this);function r(o){return e.init(o),this}function i(){return e.applyClass(et.ALPHA_100),this}function s(){return e.applyClass(et.ALPHA_0),this}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.remove=e.remove,this.setElement=e.setElement,this.fadeIn=i,this.fadeOut=s,this.init=r,this}Et.CLASSES=et;function f(t,n,e){let r=n,i=t;if(!e)throw new Error("Child transition argument must be defined!");let s=e,o,a,u,l=!1,c=!1,E=!1;if(typeof r.CSS_PROPERTY=="undefined"||typeof r.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function p(){a&&l?(i.addEventListener(a,u),s.dispatchEvent(f.BEGIN_EVENT,{target:s,type:f.BEGIN_EVENT}),i.classList.add(f.ANIMATING_CLASS),c=!0):(s.dispatchEvent(f.BEGIN_EVENT,{target:s,type:f.BEGIN_EVENT}),u())}function x(){i.removeEventListener(a,u)}function C(h){return h&&h.propertyName!==r.CSS_PROPERTY?!1:(x(),i.classList.remove(f.ANIMATING_CLASS),s.dispatchEvent(f.END_EVENT,{target:s,type:f.END_EVENT}),c=!1,!0)}function D(){let h;for(h in r)({}).hasOwnProperty.call(r,h)&&r[h]!==r.BASE_CLASS&&i.classList.contains(r[h])&&i.classList.remove(r[h])}function g(){c&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(a,u),u(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function y(){g(),D(),i.classList.remove(r.BASE_CLASS)}function P(){i.classList.remove(f.NO_ANIMATION_CLASS),l=!0}function X(){i.classList.add(f.NO_ANIMATION_CLASS),l=!1}function w(h){if(!h){let ot="Element does not have TransitionEnd event. It may be null!";throw new Error(ot)}let Q,U={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},k;for(k in U)if({}.hasOwnProperty.call(U,k)&&typeof h.style[k]!="undefined"){Q=U[k];break}return Q}function H(h){y(),P(),i=h,i.classList.add(r.BASE_CLASS),a=w(i)}function st(h){if(l=!i.classList.contains(f.NO_ANIMATION_CLASS),u=C.bind(this),H(i),!h)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return i.classList.add(h),this}function rt(h){return E||(D(),E=!0),i.classList.contains(h)?!1:(x(),i.classList.remove(o),o=h,p(),i.classList.add(o),!0)}return this.animateOff=X,this.animateOn=P,this.applyClass=rt,this.halt=g,this.init=st,this.isAnimated=()=>l,this.remove=y,this.setElement=H,this}f.BEGIN_EVENT="transitionbegin";f.END_EVENT="transitionend";f.NO_ANIMATION_CLASS="u-no-animation";f.ANIMATING_CLASS="u-is-animating";var Y={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function L(t){let n=new v,e=new f(t,Y,this),r=0;function i(){let p=t.scrollHeight+"px";t.style.maxHeight=p}function s(){window.removeEventListener("load",s),i()}function o(E){return e.init(E),window.addEventListener("load",s),window.addEventListener("resize",()=>{i()}),this}function a(){return i(),e.applyClass(Y.MH_DEFAULT),(!r||t.scrollHeight>r)&&(r=t.scrollHeight),this}function u(){return e.applyClass(Y.MH_SUMMARY),r=t.scrollHeight,this}function l(){return e.applyClass(Y.MH_ZERO),r=t.scrollHeight,this}function c(){return t.style.maxHeight="",e.remove()}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.setElement=e.setElement,this.refresh=i,this.remove=c,this.init=o,this.maxHeightDefault=a,this.maxHeightSummary=u,this.maxHeightZero=l,this}L.CLASSES=Y;var B={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function mt(t){let n=new v,e=new f(t,B,this);function r(u){return e.init(u),this}function i(){return e.applyClass(B.MOVE_TO_ORIGIN),this}function s(u){u=u||1;let l=[B.MOVE_LEFT,B.MOVE_LEFT_2X,B.MOVE_LEFT_3X];return e.applyClass(l[u-1]),this}function o(){return e.applyClass(B.MOVE_RIGHT),this}function a(){return e.applyClass(B.MOVE_UP),this}return this.addEventListener=n.addEventListener,this.dispatchEvent=n.dispatchEvent,this.removeEventListener=n.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.setElement=e.setElement,this.remove=e.remove,this.init=r,this.moveLeft=()=>s(1),this.moveLeft2=()=>s(2),this.moveLeft3=()=>s(3),this.moveRight=o,this.moveToOrigin=i,this.moveUp=a,this}mt.CLASSES=B;var V="o-expandable";function I(t){let n=O(t,V),e,r,i,s,o;function a(){if(!T(n))return this;e=n.querySelector(`.${V}__header`),r=n.querySelector(`.${V}__content`),i=n.querySelector(`.${V}__label`);let c=n.classList.contains(`${V}--onload-open`);_(n,"behavior_flyout-menu"),_(e,"behavior_flyout-menu_trigger"),_(r,"behavior_flyout-menu_content");let E=c?L.CLASSES.MH_DEFAULT:L.CLASSES.MH_ZERO;return s=new L(r).init(E),o=new M(n),o.setTransition(s,s.maxHeightZero,s.maxHeightDefault),o.init(c),o.addEventListener("expandbegin",()=>{r.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),o.addEventListener("collapseend",()=>{r.classList.add("u-hidden")}),this}function u(){return i.textContent.trim()}this.init=a,this.expand=()=>o.expand(),this.collapse=()=>o.collapse(),this.isExpanded=()=>o.isExpanded(),this.refresh=()=>o.getTransition().refresh(),this.getLabelText=u;let l=new v;return this.addEventListener=l.addEventListener,this.removeEventListener=l.removeEventListener,this.dispatchEvent=l.dispatchEvent,this}I.BASE_CLASS=V;I.init=t=>b(`.${I.BASE_CLASS}`,I,t);var nt="o-expandable-group";function K(t){let n=O(t,nt),e=n.classList.contains(`${nt}__accordion`),r,i;function s(a){let u=a.target;i&&i!==u&&i.collapse(),i=u}function o(a){return T(n)?(e&&(r=a,r.forEach(u=>{u.addEventListener("expandbegin",s)})),this):this}return this.init=o,this}K.BASE_CLASS=nt;K.init=t=>{(t||document).querySelectorAll(`.${nt}`).forEach(r=>{let i=b(`.${I.BASE_CLASS}`,I,r);new K(r).init(i)})};var pt={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};function it(){let t=getComputedStyle(document.body).fontSize;return t=t===""?-1:t,parseFloat(t)}function kt(t,n){let e=t.min,r=t.max;it()>0&&it()!==16&&(e=e/16*it(),r=r/16*it());let s=e||0,o=r||Number.POSITIVE_INFINITY;return s<=n&&n<=o}function Vt(t){let n={};t=t||window.innerWidth;let e;for(e in pt)n[e]=kt(pt[e],t);return n}var vt="mobile",Gt="tablet",Xt="desktop";function It(t){let n=!1,e=Vt();return(t===vt&&e.bpXS||t===Gt&&e.bpSM||t===Xt&&(e.bpMED||e.bpLG||e.bpXL))&&(n=!0),n}var G="o-summary";function J(t){let n=O(t,G),e=n.classList.contains(`${G}--mobile`),r=n.querySelector(`.${G}__content`),i=n.querySelector(`.${G}__btn`),s,o,a;function u(){return T(n)?(window.addEventListener("load",l),this):this}function l(){window.removeEventListener("load",l),a=!x(),_(n,"behavior_flyout-menu"),_(r,"behavior_flyout-menu_content"),_(i,"behavior_flyout-menu_trigger"),o=new M(n,!1),s=new L(r),s.init(a?L.CLASSES.MH_SUMMARY:L.CLASSES.MH_DEFAULT),o.setTransition(s,s.maxHeightSummary,s.maxHeightDefault),o.addEventListener("triggerclick",C),o.init(),p(),window.addEventListener("resize",p),"onorientationchange"in window&&window.addEventListener("orientationchange",p),n.addEventListener("focusin",c),r.addEventListener("click",E)}function c(H){!a&&H.target!==i&&(i.click(),n.removeEventListener("focusin",c))}function E(H){H.target.tagName!=="A"&&o.isExpanded()&&s.refresh()}function p(){x()?X():P()}function x(){return e&&!It(vt)||r.scrollHeight<=88}function C(){o.addEventListener("expandend",D)}function D(){y(),window.removeEventListener("resize",p),window.removeEventListener("orientationchange",p),o.removeEventListener("expandend",D),o.suspend(),s.remove()}function g(){i.classList.remove("u-hidden")}function y(){i.classList.add("u-hidden")}function P(){return a&&(o.collapse(),s.animateOn(),g(),a=!1),!a}function X(){return a||(s.animateOff(),o.expand(),y(),a=!0),a}let w=new v;return this.addEventListener=w.addEventListener,this.removeEventListener=w.removeEventListener,this.dispatchEvent=w.dispatchEvent,this.init=u,this}J.BASE_CLASS=G;J.init=t=>b(`.${G}`,J,t);var Z="o-summary-minimal";function W(t){let n=O(t,Z),e=n.querySelector(`.${Z}__content`),r=n.querySelector(`.${Z}__btn`),i,s;function o(){return T(n)?(_(n,"behavior_flyout-menu"),_(e,"behavior_flyout-menu_content"),_(r,"behavior_flyout-menu_trigger"),window.addEventListener("load",a),this):this}function a(){window.removeEventListener("load",a),s=new M(n,!1),i=new L(e),i.init(L.CLASSES.MH_SUMMARY),s.setTransition(i,i.maxHeightSummary,i.maxHeightDefault),s.init(),n.addEventListener("focusin",u),e.addEventListener("click",l),s.collapse(),i.animateOn()}function u(E){E.target!==r&&(r.click(),n.removeEventListener("focusin",u))}function l(E){E.target.tagName!=="A"&&s.isExpanded()&&i.refresh()}let c=new v;return this.addEventListener=c.addEventListener,this.removeEventListener=c.removeEventListener,this.dispatchEvent=c.dispatchEvent,this.init=o,this}W.BASE_CLASS=Z;W.init=t=>b(`.${Z}`,W,t);})();
//# sourceMappingURL=index.js.map
