(()=>{var mt=Object.defineProperty;var dt=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var ct=(a,e,t)=>e in a?mt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,ve=(a,e)=>{for(var t in e||(e={}))Et.call(e,t)&&ct(a,t,e[t]);if(dt)for(var t of dt(e))Dt.call(e,t)&&ct(a,t,e[t]);return a};var g=(a,e)=>{for(var t in e)mt(a,t,{get:e[t],enumerable:!0})};var we={};g(we,{default:()=>Lt});var Lt={};var ke={};g(ke,{default:()=>Tt});var Tt={};var Se={};g(Se,{default:()=>Ot});var Ot={};var Ee={};g(Ee,{default:()=>Bt});var Bt={};var De={};g(De,{default:()=>Nt});var Nt={};var Ae={};g(Ae,{default:()=>Ct});var Ct={};var Le={};g(Le,{default:()=>Ht});var Ht={};var je={};g(je,{default:()=>Gt});var Gt={};var Te={};g(Te,{default:()=>Ut});var Ut={};var ze={};g(ze,{default:()=>Xt});var Xt={};var re={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};function ne(){let a=getComputedStyle(document.body).fontSize;return a=a===""?-1:a,parseFloat(a)}function Kt(a,e){let t=a.min,r=a.max;ne()>0&&ne()!==16&&(t=t/16*ne(),r=r/16*ne());let o=t||0,s=r||Number.POSITIVE_INFINITY;return o<=e&&e<=s}function Jt(a){let e={};a=a||window.innerWidth;let t;for(t in re)e[t]=Kt(re[t],a);return e}var se="mobile",Yt="tablet",Wt="desktop";function Oe(a){let e=!1,t=Jt();return(a===se&&t.bpXS||a===Yt&&t.bpSM||a===Wt&&(t.bpMED||t.bpLG||t.bpXL))&&(e=!0),e}var B="data-js-hook",le="behavior_",Ie="state_";function A(){let a={};function e(i,o){return{}.hasOwnProperty.call(a,i)?a[i].push(o):a[i]=[o],this}function t(i,o){if(!{}.hasOwnProperty.call(a,i))return this;let s=a[i].indexOf(o);return s!==-1&&a[i].splice(s,1),this}function r(i,o){if(!{}.hasOwnProperty.call(a,i))return this;o=o||{};let s=a[i];for(let d=0,c=s.length;d<c;d++)s[d].call(this,o);return this}return this.addEventListener=e,this.removeEventListener=t,this.dispatchEvent=r,this.getRegisteredEvents=()=>a,this}function W(a,e){if(!a)return!1;let t=a.getAttribute(B);return t?(t=t.split(" "),t.indexOf(e)>-1):!1}function L(a,e){if(W(a,e))return e;if(e.indexOf(" ")!==-1){let r=B+" values cannot contain spaces!";throw new Error(r)}let t=a.getAttribute(B);return t!==null&&(e=t+" "+e),a.setAttribute(B,e),e}var Be=Ie+"atomic_init";function $t(a,e){if(!a||!a.classList){let t=a+' is not valid. Check that element is a DOM node with class "'+e+'"';throw new Error(t)}return a}function Zt(a,e){let t=a.classList.contains(e)?a:a.querySelector("."+e);if(!t){let r=e+" not found on or in passed DOM node.";throw new Error(r)}return t}function q(a,e){return $t(a,e),Zt(a,e)}function M(a){return W(a,Be)?!1:(L(a,Be),!0)}function C(a,e,t,r={}){let o=(t||document).querySelectorAll(a),s=[],d,c;for(let p=0,m=o.length;p<m;p++)c=o[p],W(c,Be)===!1&&(d=new e(c),d.init(r),s.push(d));return s}var Me={};g(Me,{default:()=>ea});var ea={};var Ne={};g(Ne,{default:()=>aa});var aa={};var qe={};g(qe,{default:()=>ia});var ia={};var Ce={};g(Ce,{default:()=>na});var na={};var Fe={};g(Fe,{default:()=>la});var la={};var He={};g(He,{default:()=>ca});var ca={};var Z="o-expandable";function X(a){let e=q(a,Z),t,r,i,o,s;function d(){if(!M(e))return this;t=e.querySelector(`.${Z}__header`),r=e.querySelector(`.${Z}__content`),i=e.querySelector(`.${Z}__label`);let m=e.classList.contains(`${Z}--onload-open`);L(e,"behavior_flyout-menu"),L(t,"behavior_flyout-menu_trigger"),L(r,"behavior_flyout-menu_content");let f=m?I.CLASSES.MH_DEFAULT:I.CLASSES.MH_ZERO;return o=new I(r).init(f),s=new K(e),s.setTransition(o,o.maxHeightZero,o.maxHeightDefault),s.init(m),s.addEventListener("expandbegin",()=>{r.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),s.addEventListener("collapseend",()=>{r.classList.add("u-hidden")}),this}function c(){return i.textContent.trim()}this.init=d,this.expand=()=>s.expand(),this.collapse=()=>s.collapse(),this.isExpanded=()=>s.isExpanded(),this.refresh=()=>s.getTransition().refresh(),this.getLabelText=c;let p=new A;return this.addEventListener=p.addEventListener,this.removeEventListener=p.removeEventListener,this.dispatchEvent=p.dispatchEvent,this}X.BASE_CLASS=Z;X.init=a=>C(`.${X.BASE_CLASS}`,X,a);var de="o-expandable-group";function ce(a){let e=q(a,de),t=e.classList.contains(`${de}--accordion`),r,i;function o(d){let c=d.target;i&&i!==c&&i.collapse(),i=c}function s(d){return M(e)?(t&&(r=d,r.forEach(c=>{c.addEventListener("expandbegin",o)})),this):this}return this.init=s,this}ce.BASE_CLASS=de;ce.init=a=>{(a||document).querySelectorAll(`.${de}`).forEach(r=>{let i=C(`.${X.BASE_CLASS}`,X,r);new ce(r).init(i)})};var Q="o-summary";function me(a){let e=q(a,Q),t=e.classList.contains(`${Q}--mobile`),r=e.querySelector(`.${Q}__content`),i=e.querySelector(`.${Q}__btn`),o,s,d;function c(){return M(e)?(window.addEventListener("load",p),this):this}function p(){window.removeEventListener("load",p),d=!x(),L(e,"behavior_flyout-menu"),L(r,"behavior_flyout-menu_content"),L(i,"behavior_flyout-menu_trigger"),s=new K(e,!1),o=new I(r),o.init(d?I.CLASSES.MH_SUMMARY:I.CLASSES.MH_DEFAULT),s.setTransition(o,o.maxHeightSummary,o.maxHeightDefault),s.addEventListener("triggerclick",j),s.init(),_(),window.addEventListener("resize",_),"onorientationchange"in window&&window.addEventListener("orientationchange",_),e.addEventListener("focusin",m),r.addEventListener("click",f)}function m(b){!d&&b.target!==i&&(i.click(),e.removeEventListener("focusin",m))}function f(b){b.target.tagName!=="A"&&s.isExpanded()&&o.refresh()}function _(){x()?R():V()}function x(){return t&&!Oe(se)||r.scrollHeight<=88}function j(){s.addEventListener("expandend",S)}function S(){T(),window.removeEventListener("resize",_),window.removeEventListener("orientationchange",_),s.removeEventListener("expandend",S),s.suspend(),o.remove()}function E(){i.classList.remove("u-hidden")}function T(){i.classList.add("u-hidden")}function V(){return d&&(s.collapse(),o.animateOn(),E(),d=!1),!d}function R(){return d||(o.animateOff(),s.expand(),T(),d=!0),d}let O=new A;return this.addEventListener=O.addEventListener,this.removeEventListener=O.removeEventListener,this.dispatchEvent=O.dispatchEvent,this.init=c,this}me.BASE_CLASS=Q;me.init=a=>C(`.${Q}`,me,a);var ee="o-summary-minimal";function he(a){let e=q(a,ee),t=e.querySelector(`.${ee}__content`),r=e.querySelector(`.${ee}__btn`),i,o;function s(){return M(e)?(L(e,"behavior_flyout-menu"),L(t,"behavior_flyout-menu_content"),L(r,"behavior_flyout-menu_trigger"),window.addEventListener("load",d),this):this}function d(){window.removeEventListener("load",d),o=new K(e,!1),i=new I(t),i.init(I.CLASSES.MH_SUMMARY),o.setTransition(i,i.maxHeightSummary,i.maxHeightDefault),o.init(),e.addEventListener("focusin",c),t.addEventListener("click",p),o.collapse(),i.animateOn()}function c(f){f.target!==r&&(r.click(),e.removeEventListener("focusin",c))}function p(f){f.target.tagName!=="A"&&o.isExpanded()&&i.refresh()}let m=new A;return this.addEventListener=m.addEventListener,this.removeEventListener=m.removeEventListener,this.dispatchEvent=m.dispatchEvent,this.init=s,this}he.BASE_CLASS=ee;he.init=a=>C(`.${ee}`,he,a);var Ve={};g(Ve,{default:()=>pa});var pa={};var Ge={};g(Ge,{default:()=>ba});var ba={};var Re={};g(Re,{default:()=>fa});var fa={};var Ue={};g(Ue,{default:()=>ya});var ya={};var Pe={};g(Pe,{default:()=>va});var va={};var Xe={};g(Xe,{default:()=>ka});var ka={};var Ke={};g(Ke,{default:()=>Ea});var Ea={};var Je={};g(Je,{default:()=>Aa});var Aa={};var Ye={};g(Ye,{default:()=>ja});var ja={};var We={};g(We,{default:()=>za});var za={};var $e={};g($e,{default:()=>Ia});var Ia={};var Ze={};g(Ze,{default:()=>Ma});var Ma={};var Qe={};g(Qe,{default:()=>qa});var qa={};var et={};g(et,{default:()=>Fa});var Fa={};var tt={};g(tt,{default:()=>Va});var Va={};var at={};g(at,{default:()=>Ra});var Ra={};var ot={};g(ot,{default:()=>Pa});var Pa={};var it={};g(it,{default:()=>Ka});var Ka={};var rt={};g(rt,{default:()=>Ya});var Ya={};var nt={};g(nt,{default:()=>$a});var $a={};function pe(a,e){let t;if(W(a,e))return t=a,t;if(a){let r="["+B+"="+e+"]";t=a.querySelector(r)}if(!t){let r=e+" behavior not found on passed DOM node!";throw new Error(r)}return t}var Za=Object.prototype.toString;var Qa=Array.isArray||function(e){return Za.call(e)==="[object Array]"};function st(){return!!new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent)}var te=le+"flyout-menu",eo="["+B+"="+te;function K(a,e=!0){let t=pe(a,te),r=V(a),i=pe(a,te+"_content"),o=0,s=0,d=1,c=2,p=3,m,f,_,x=$.bind(this),j=U.bind(this),S,E=!0,T=!1;function V(n){let l=[],h=n.querySelectorAll(`${eo}_trigger]`),u,k,P;for(let G=h.length>>>0;G--;){for(P=!1,u=h[G],k=u.parentElement;k!==n;)k.getAttribute(B)&&k.getAttribute(B).split(" ").indexOf(te)!==-1?(P=!0,k=n):k=k.parentElement;P||l.unshift(h[G])}return l}function R(n=!1){return o=n?p:s,r.forEach(l=>{O("expanded",l,n),l.addEventListener("click",y.bind(this)),l.addEventListener("touchstart",b,{passive:!0}),l.addEventListener("mouseover",w.bind(this)),l.addEventListener("mouseout",D.bind(this))}),i.setAttribute("data-open",n?"true":"false"),e&&!n&&i.setAttribute("hidden",""),ie(),this}function O(n,l,h){let u=String(h);return l.setAttribute("aria-"+n,u),u}function b(){T=!0}function w(n){E||(T||this.dispatchEvent("triggerover",{target:this,trigger:n.target,type:"triggerover"}),T=!1)}function D(n){E||this.dispatchEvent("triggerout",{target:this,trigger:n.target,type:"triggerout"})}function y(n){if(!E)switch(this.dispatchEvent("triggerclick",{target:this,trigger:n.target,type:"triggerclick"}),n.preventDefault(),o){case s:case d:this.expand();break;case c:case p:this.collapse();break}}function z(){if(m==null||m.halt(),o===c||o===p)return this;if(o=c,e&&i.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!f||!_)return j(),this;let n=m==null?void 0:m.isAnimated();return n&&m.addEventListener(v.END_EVENT,j),f(),n||j(),this}function N(){if(m==null||m.halt(),o===d||o===s)return this;for(let l=0,h=r.length;l<h;l++)O("expanded",r[l],!1);if(i.setAttribute("data-open","false"),o=d,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!_||!f)return x(),this;let n=m==null?void 0:m.isAnimated();return n&&m.addEventListener(v.END_EVENT,x),_(),n||x(),this}function U(){o=p,i.setAttribute("data-open","true"),m&&m.removeEventListener(v.END_EVENT,j),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let n=0,l=r.length;n<l;n++)O("expanded",r[n],!0)}function $(){o=s,e&&i.setAttribute("hidden",""),m&&m.removeEventListener(v.END_EVENT,x),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function oe(n,l,h){m=n,l&&l!==_&&(_=l),h&&h!==f&&(f=h)}function fe(){m&&m.remove();let n;m=n,f=n,_=n}function _e(){return{container:t,content:i,trigger:r}}function ie(){return E&&(E=!1),!E}function ye(){return E||(E=!0),E}function xe(n){return S=n,this}let Y=new A;return this.addEventListener=Y.addEventListener,this.removeEventListener=Y.removeEventListener,this.dispatchEvent=Y.dispatchEvent,this.init=R,this.expand=z,this.collapse=N,this.setTransition=oe,this.clearTransition=fe,this.getData=()=>S,this.getTransition=()=>m,this.getDom=_e,this.isAnimating=()=>o===c||o===d,this.isExpanded=()=>o===p,this.resume=ie,this.setData=xe,this.suspend=ye,K.BASE_CLASS=te,this}var ue={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function bt(a){let e=new A,t=new v(a,ue,this);function r(s){return t.init(s),this}function i(){return t.applyClass(ue.ALPHA_100),this}function o(){return t.applyClass(ue.ALPHA_0),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.remove=t.remove,this.setElement=t.setElement,this.fadeIn=i,this.fadeOut=o,this.init=r,this}bt.CLASSES=ue;function v(a,e,t){let r=e,i=a;if(!t)throw new Error("Child transition argument must be defined!");let o=t,s,d,c,p=!1,m=!1,f=!1;if(typeof r.CSS_PROPERTY=="undefined"||typeof r.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function _(){d&&p?(i.addEventListener(d,c),o.dispatchEvent(v.BEGIN_EVENT,{target:o,type:v.BEGIN_EVENT}),i.classList.add(v.ANIMATING_CLASS),m=!0):(o.dispatchEvent(v.BEGIN_EVENT,{target:o,type:v.BEGIN_EVENT}),c())}function x(){i.removeEventListener(d,c)}function j(y){return y&&y.propertyName!==r.CSS_PROPERTY?!1:(x(),i.classList.remove(v.ANIMATING_CLASS),o.dispatchEvent(v.END_EVENT,{target:o,type:v.END_EVENT}),m=!1,!0)}function S(){let y;for(y in r)({}).hasOwnProperty.call(r,y)&&r[y]!==r.BASE_CLASS&&i.classList.contains(r[y])&&i.classList.remove(r[y])}function E(){m&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(d,c),c(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function T(){E(),S(),i.classList.remove(r.BASE_CLASS)}function V(){i.classList.remove(v.NO_ANIMATION_CLASS),p=!0}function R(){i.classList.add(v.NO_ANIMATION_CLASS),p=!1}function O(y){if(!y){let $="Element does not have TransitionEnd event. It may be null!";throw new Error($)}let z,N={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},U;for(U in N)if({}.hasOwnProperty.call(N,U)&&typeof y.style[U]!="undefined"){z=N[U];break}return z}function b(y){T(),V(),i=y,i.classList.add(r.BASE_CLASS),d=O(i)}function w(y){if(p=!i.classList.contains(v.NO_ANIMATION_CLASS),c=j.bind(this),b(i),!y)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return i.classList.add(y),this}function D(y){return f||(S(),f=!0),i.classList.contains(y)?!1:(x(),i.classList.remove(s),s=y,_(),i.classList.add(s),!0)}return this.animateOff=R,this.animateOn=V,this.applyClass=D,this.halt=E,this.init=w,this.isAnimated=()=>p,this.remove=T,this.setElement=b,this}v.BEGIN_EVENT="transitionbegin";v.END_EVENT="transitionend";v.NO_ANIMATION_CLASS="u-no-animation";v.ANIMATING_CLASS="u-is-animating";var ae={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function I(a){let e=new A,t=new v(a,ae,this),r=0;function i(){let _=a.scrollHeight+"px";a.style.maxHeight=_}function o(){window.removeEventListener("load",o),i()}function s(f){return t.init(f),window.addEventListener("load",o),window.addEventListener("resize",()=>{i()}),this}function d(){return i(),t.applyClass(ae.MH_DEFAULT),(!r||a.scrollHeight>r)&&(r=a.scrollHeight),this}function c(){return t.applyClass(ae.MH_SUMMARY),r=a.scrollHeight,this}function p(){return t.applyClass(ae.MH_ZERO),r=a.scrollHeight,this}function m(){return a.style.maxHeight="",t.remove()}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.refresh=i,this.remove=m,this.init=s,this.maxHeightDefault=d,this.maxHeightSummary=c,this.maxHeightZero=p,this}I.CLASSES=ae;var J={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function gt(a){let e=new A,t=new v(a,J,this);function r(c){return t.init(c),this}function i(){return t.applyClass(J.MOVE_TO_ORIGIN),this}function o(c){c=c||1;let p=[J.MOVE_LEFT,J.MOVE_LEFT_2X,J.MOVE_LEFT_3X];return t.applyClass(p[c-1]),this}function s(){return t.applyClass(J.MOVE_RIGHT),this}function d(){return t.applyClass(J.MOVE_UP),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.remove=t.remove,this.init=r,this.moveLeft=()=>o(1),this.moveLeft2=()=>o(2),this.moveLeft3=()=>o(3),this.moveRight=s,this.moveToOrigin=i,this.moveUp=d,this}gt.CLASSES=J;var ao;function oo(a){return a.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function io(a,e){return RegExp(oo(e.trim()),"i").test(a)}function ro(a,e,t){let r=a,i=e,o=(t==null?void 0:t.maxSelections)||5,s=[],d=[],c=[],p=[],m=-1;function f(b){return i+"-"+b.value.trim().replace(/\s+/g,"-").toLowerCase()}function _(){return d.length>=o}function x(b){let w,D=[],y=!1;for(let z=0,N=b.length;z<N;z++)w=b[z],y=_()?!1:w.defaultSelected,D.push({id:f(w),value:w.value,text:w.text,checked:y}),y&&d.push(z);return D}function j(){return s=x(r),this}function S(b){return s[b].checked=!s[b].checked,d.length<o&&s[b].checked?(d.push(b),d.sort(),!0):(s[b].checked=!1,d=d.filter(function(w){return w!==b}),!1)}function E(b,w,D,y){return io(w.text,y)&&b.push(D),b}function T(b){return Object.prototype.toString.call(b)!=="[object String]"&&(b=""),p=c,s.length>0&&(c=s.reduce(function(w,D,y){return E(w,D,y,b)},[])),m=-1,c}function V(b){return s[b]}function R(b){let w=c.length,D=w===0?s.length:w;b<0?m=-1:b>=D?m=D-1:m=b}function O(){return m}return this.init=j,this.toggleOption=S,this.getSelectedIndices=function(){return d},this.isAtMaxSelections=_,this.filterIndices=T,this.clearFilter=function(){return c=p=[],ao},this.getFilterIndices=function(){return c},this.getLastFilterIndices=function(){return p},this.getIndex=O,this.setIndex=R,this.resetIndex=function(){return m=-1,m},this.getOption=V,this}var ft=ro;function F(a,e,t){let r=document.createElement(a);return Object.keys(t).forEach(i=>{let o=t[i];i in r?r[i]=o:r.setAttribute(i,o)}),e&&e.appendChild(r),r}var _t='<svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg--error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';var mo=_t,H="o-multiselect",ho="a-checkbox",po="a-text-input",yt="prev",be="next",lt="Enter",uo=" ",xt="Escape",bo="ArrowUp",vt="ArrowDown",wt="Tab",kt={renderTags:!0,maxSelections:5};function ge(a){a.classList.add(H);let e=q(a,H),t=!1,r,i,o,s,d,c,p,m,f,_,x,j=[],S;function E(){x.classList.remove("u-no-results"),x.classList.add("u-filtered");let n=o.getLastFilterIndices();for(let l=0,h=n.length;l<h;l++)j[n[l]].classList.remove("u-filter-match");n=o.getFilterIndices();for(let l=0,h=n.length;l<h;l++)j[n[l]].classList.add("u-filter-match")}function T(){x.classList.remove("u-filtered","u-no-results");for(let n=0,l=x.children.length;n<l;n++)x.children[n].classList.remove("u-filter-match");o.clearFilter()}function V(){x.classList.add("u-no-results"),x.classList.remove("u-filtered")}function R(n){return n.length>0?(E(),!0):(V(),!1)}function O(n){T(),o.resetIndex();let l=o.filterIndices(n);R(l)}function b(){return c.classList.add("u-active"),_.classList.remove("u-invisible"),_.setAttribute("aria-hidden",!1),S.dispatchEvent("expandbegin",{target:S}),S}function w(){return c.classList.remove("u-active"),_.classList.add("u-invisible"),_.setAttribute("aria-hidden",!0),o.resetIndex(),S.dispatchEvent("collapsebegin",{target:S}),S}function D(n){n===be?o.setIndex(o.getIndex()+1):n===yt&&o.setIndex(o.getIndex()-1);let l=o.getIndex();if(l>-1){let h=l,u=o.getFilterIndices();u.length>0&&(h=u[l]);let P=o.getOption(h).value,St=x.querySelector('[data-option="'+P+'"]').querySelector("input");t=!0,St.focus()}else t=!1,f.focus()}function y(){f.value="",T()}function z(n){let l=n.target;l.tagName==="BUTTON"&&(n.preventDefault(),l.removeEventListener("click",z),l.querySelector("label").click())}function N(n){if(n.key===uo||n.key===lt){let l=n.target.querySelector("label");x.querySelector("#"+l.getAttribute("for")).click()}}function U(n){return r+"-"+n.value.trim().replace(/[^\w]/g,"-").toLowerCase()}function $(n,l){let h=U(l),u=F("li",null,{"data-option":l.value}),k=F("button",u,{type:"button",class:"a-tag-filter",innerHTML:"<label for="+h+">"+l.text+mo+"</label>"});n.appendChild(u),k.addEventListener("click",z),k.addEventListener("keydown",N)}function oe(n){let l=o.getOption(n)||o.getOption(o.getIndex());if(l){if(l.checked){x.classList.contains("u-max-selections")&&x.classList.remove("u-max-selections");let h='[data-option="'+l.value+'"]',u=p.querySelector(h);typeof u!="undefined"&&u&&(p==null||p.removeChild(u))}else d!=null&&d.renderTags&&p&&$(p,l);o.toggleOption(n),o.isAtMaxSelections()&&x.classList.add("u-max-selections"),S.dispatchEvent("selectionsupdated",{target:S})}o.resetIndex(),t=!1,_.getAttribute("aria-hidden")==="false"&&f.focus()}function fe(n){oe(Number(n.target.getAttribute("data-index"))),y()}function _e(){m.addEventListener("mousemove",function(h){let u=h.target;h.offsetX>u.offsetWidth-35?u.style.cursor="pointer":u.style.cursor="auto"}),m.addEventListener("mouseup",function(h){let u=h.target;h.offsetX>u.offsetWidth-35&&_.offsetHeight===140&&f.blur()}),f.addEventListener("input",function(){O(this.value)}),f.addEventListener("focus",function(){_.getAttribute("aria-hidden")==="true"&&b()}),f.addEventListener("blur",function(){!t&&_.getAttribute("aria-hidden")==="false"&&w()}),f.addEventListener("keydown",function(h){let u=h.key;_.getAttribute("aria-hidden")==="true"&&u!==wt&&b(),u===lt?(h.preventDefault(),D(be)):u===xt?(y(),w()):u===vt?D(be):u===wt&&!h.shiftKey&&_.getAttribute("aria-hidden")==="false"&&w()}),x.addEventListener("mousedown",function(){t=!0}),x.addEventListener("keydown",function(h){let u=h.key,k=h.target,P=k.checked;if(u===lt){h.preventDefault(),k.checked=!P;let G=new Event("change",{bubbles:!1,cancelable:!0});k.dispatchEvent(G)}else u===xt?(f.focus(),w()):u===bo?D(yt):u===vt&&D(be)}),_.addEventListener("mousedown",function(h){h.target.tagName==="LABEL"&&(t=!0)});let n=x.querySelectorAll("input");for(let h=0,u=n.length;h<u;h++)n[h].addEventListener("change",fe);let l=p.querySelectorAll("button");for(let h=0,u=l.length;h<u;h++)l[h].addEventListener("click",z),l[h].addEventListener("keydown",N)}function ie(){c=document.createElement("div"),c.className=H,p=F("ul",null,{className:"m-tag-group"}),m=F("header",c,{className:H+"__header"}),f=F("input",m,{className:H+"__search "+po,type:"text",placeholder:i||"Select up to five",id:e.id,autocomplete:"off"}),_=F("fieldset",c,{className:H+"__fieldset u-invisible","aria-hidden":"true"});let n=H+"__options";o.isAtMaxSelections()&&(n+=" u-max-selections"),x=F("ul",_,{className:n});let l,h,u;for(let k=0,P=s.length;k<P;k++){l=s[k],h=U(l),u=o.getOption(k).checked;let G=F("li",x,{"data-option":l.value,"data-cy":"multiselect-option",class:"m-form-field m-form-field--checkbox"});F("input",G,{id:h,type:"checkbox",value:l.value,name:r,class:ho+" "+H+"__checkbox",checked:u,"data-index":k}),F("label",G,{for:h,textContent:l.text,className:H+"__label a-label"}),j.push(G),u&&(d!=null&&d.renderTags)&&$(p,l)}return c.insertBefore(p,m),e.parentNode.insertBefore(c,e),c.appendChild(e),c}function ye(n=kt){if(!M(e))return this;if(st())return this;if(S=this,r=e.name||e.id,i=e.getAttribute("placeholder"),s=e.options||[],d=ve(ve({},kt),n),s.length>0){o=new ft(s,r,d).init();let l=ie();e.parentNode.removeChild(e),e=l,M(e),_e()}return this}function xe(){return o}this.init=ye,this.expand=b,this.collapse=w;let Y=new A;return this.addEventListener=Y.addEventListener,this.removeEventListener=Y.removeEventListener,this.dispatchEvent=Y.dispatchEvent,this.getModel=xe,this.updateSelections=oe,this.selectionClickHandler=z,this.selectionKeyDownHandler=N,this}ge.BASE_CLASS=H;ge.init=a=>C(`.${H}`,ge,void 0,a);})();
//# sourceMappingURL=index.js.map
