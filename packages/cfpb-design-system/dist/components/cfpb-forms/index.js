(()=>{var ht=Object.defineProperty;var dt=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,Dt=Object.prototype.propertyIsEnumerable;var ct=(a,e,t)=>e in a?ht(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,_e=(a,e)=>{for(var t in e||(e={}))Et.call(e,t)&&ct(a,t,e[t]);if(dt)for(var t of dt(e))Dt.call(e,t)&&ct(a,t,e[t]);return a};var g=(a,e)=>{for(var t in e)ht(a,t,{get:e[t],enumerable:!0})};var we={};g(we,{default:()=>Lt});var Lt={};var ke={};g(ke,{default:()=>jt});var jt={};var Se={};g(Se,{default:()=>Ot});var Ot={};var Ee={};g(Ee,{default:()=>Bt});var Bt={};var De={};g(De,{default:()=>Nt});var Nt={};var Ae={};g(Ae,{default:()=>qt});var qt={};var Le={};g(Le,{default:()=>Ht});var Ht={};var Te={};g(Te,{default:()=>Gt});var Gt={};var je={};g(je,{default:()=>Ut});var Ut={};var ze={};g(ze,{default:()=>Xt});var Xt={};var re={bpXS:{min:0,max:600},bpSM:{min:601,max:900},bpMED:{min:901,max:1020},bpLG:{min:1021,max:1200},bpXL:{min:1201}};function ne(){let a=getComputedStyle(document.body).fontSize;return a=a===""?-1:a,parseFloat(a)}function Kt(a,e){let t=a.min,r=a.max;ne()>0&&ne()!==16&&(t=t/16*ne(),r=r/16*ne());let i=t||0,l=r||Number.POSITIVE_INFINITY;return i<=e&&e<=l}function Jt(a){let e={};a=a||window.innerWidth;let t;for(t in re)e[t]=Kt(re[t],a);return e}var le="mobile",Yt="tablet",Wt="desktop";function Oe(a){let e=!1,t=Jt();return(a===le&&t.bpXS||a===Yt&&t.bpSM||a===Wt&&(t.bpMED||t.bpLG||t.bpXL))&&(e=!0),e}var B="data-js-hook",se="behavior_",Ie="state_";function A(){let a={};function e(o,i){return{}.hasOwnProperty.call(a,o)?a[o].push(i):a[o]=[i],this}function t(o,i){if(!{}.hasOwnProperty.call(a,o))return this;let l=a[o].indexOf(i);return l!==-1&&a[o].splice(l,1),this}function r(o,i){if(!{}.hasOwnProperty.call(a,o))return this;i=i||{};let l=a[o];for(let d=0,c=l.length;d<c;d++)l[d].call(this,i);return this}return this.addEventListener=e,this.removeEventListener=t,this.dispatchEvent=r,this.getRegisteredEvents=()=>a,this}function W(a,e){if(!a)return!1;let t=a.getAttribute(B);return t?(t=t.split(" "),t.indexOf(e)>-1):!1}function L(a,e){if(W(a,e))return e;if(e.indexOf(" ")!==-1){let r=B+" values cannot contain spaces!";throw new Error(r)}let t=a.getAttribute(B);return t!==null&&(e=t+" "+e),a.setAttribute(B,e),e}var Be=Ie+"atomic_init";function $t(a,e){if(!a||!a.classList){let t=a+' is not valid. Check that element is a DOM node with class "'+e+'"';throw new Error(t)}return a}function Zt(a,e){let t=a.classList.contains(e)?a:a.querySelector("."+e);if(!t){let r=e+" not found on or in passed DOM node.";throw new Error(r)}return t}function q(a,e){return $t(a,e),Zt(a,e)}function M(a){return W(a,Be)?!1:(L(a,Be),!0)}function F(a,e,t,r={}){let i=(t||document).querySelectorAll(a),l=[],d,c;for(let p=0,h=i.length;p<h;p++)c=i[p],W(c,Be)===!1&&(d=new e(c),d.init(r),l.push(d));return l}var Me={};g(Me,{default:()=>ea});var ea={};var Ne={};g(Ne,{default:()=>aa});var aa={};var Ce={};g(Ce,{default:()=>oa});var oa={};var qe={};g(qe,{default:()=>na});var na={};var Fe={};g(Fe,{default:()=>sa});var sa={};var He={};g(He,{default:()=>ca});var ca={};var Z="o-expandable";function X(a){let e=q(a,Z),t,r,o,i,l;function d(){if(!M(e))return this;t=e.querySelector(`.${Z}__header`),r=e.querySelector(`.${Z}__content`),o=e.querySelector(`.${Z}__label`);let h=e.classList.contains(`${Z}--onload-open`);L(e,"behavior_flyout-menu"),L(t,"behavior_flyout-menu_trigger"),L(r,"behavior_flyout-menu_content");let f=h?I.CLASSES.MH_DEFAULT:I.CLASSES.MH_ZERO;return i=new I(r).init(f),l=new K(e),l.setTransition(i,i.maxHeightZero,i.maxHeightDefault),l.init(h),l.addEventListener("expandbegin",()=>{r.classList.remove("u-hidden"),this.dispatchEvent("expandbegin",{target:this})}),l.addEventListener("collapseend",()=>{r.classList.add("u-hidden")}),this}function c(){return o.textContent.trim()}this.init=d,this.expand=()=>l.expand(),this.collapse=()=>l.collapse(),this.isExpanded=()=>l.isExpanded(),this.refresh=()=>l.getTransition().refresh(),this.getLabelText=c;let p=new A;return this.addEventListener=p.addEventListener,this.removeEventListener=p.removeEventListener,this.dispatchEvent=p.dispatchEvent,this}X.BASE_CLASS=Z;X.init=a=>F(`.${X.BASE_CLASS}`,X,a);var de="o-expandable-group";function ce(a){let e=q(a,de),t=e.classList.contains(`${de}--accordion`),r,o;function i(d){let c=d.target;o&&o!==c&&o.collapse(),o=c}function l(d){return M(e)?(t&&(r=d,r.forEach(c=>{c.addEventListener("expandbegin",i)})),this):this}return this.init=l,this}ce.BASE_CLASS=de;ce.init=a=>{(a||document).querySelectorAll(`.${de}`).forEach(r=>{let o=F(`.${X.BASE_CLASS}`,X,r);new ce(r).init(o)})};var Q="o-summary";function he(a){let e=q(a,Q),t=e.classList.contains(`${Q}--mobile`),r=e.querySelector(`.${Q}__content`),o=e.querySelector(`.${Q}__btn`),i,l,d;function c(){return M(e)?(window.addEventListener("load",p),this):this}function p(){window.removeEventListener("load",p),d=!v(),L(e,"behavior_flyout-menu"),L(r,"behavior_flyout-menu_content"),L(o,"behavior_flyout-menu_trigger"),l=new K(e,!1),i=new I(r),i.init(d?I.CLASSES.MH_SUMMARY:I.CLASSES.MH_DEFAULT),l.setTransition(i,i.maxHeightSummary,i.maxHeightDefault),l.addEventListener("triggerclick",T),l.init(),y(),window.addEventListener("resize",y),"onorientationchange"in window&&window.addEventListener("orientationchange",y),e.addEventListener("focusin",h),r.addEventListener("click",f)}function h(u){!d&&u.target!==o&&(o.click(),e.removeEventListener("focusin",h))}function f(u){u.target.tagName!=="A"&&l.isExpanded()&&i.refresh()}function y(){v()?R():V()}function v(){return t&&!Oe(le)||r.scrollHeight<=88}function T(){l.addEventListener("expandend",S)}function S(){j(),window.removeEventListener("resize",y),window.removeEventListener("orientationchange",y),l.removeEventListener("expandend",S),l.suspend(),i.remove()}function E(){o.classList.remove("u-hidden")}function j(){o.classList.add("u-hidden")}function V(){return d&&(l.collapse(),i.animateOn(),E(),d=!1),!d}function R(){return d||(i.animateOff(),l.expand(),j(),d=!0),d}let O=new A;return this.addEventListener=O.addEventListener,this.removeEventListener=O.removeEventListener,this.dispatchEvent=O.dispatchEvent,this.init=c,this}he.BASE_CLASS=Q;he.init=a=>F(`.${Q}`,he,a);var ee="o-summary-minimal";function me(a){let e=q(a,ee),t=e.querySelector(`.${ee}__content`),r=e.querySelector(`.${ee}__btn`),o,i;function l(){return M(e)?(L(e,"behavior_flyout-menu"),L(t,"behavior_flyout-menu_content"),L(r,"behavior_flyout-menu_trigger"),window.addEventListener("load",d),this):this}function d(){window.removeEventListener("load",d),i=new K(e,!1),o=new I(t),o.init(I.CLASSES.MH_SUMMARY),i.setTransition(o,o.maxHeightSummary,o.maxHeightDefault),i.init(),e.addEventListener("focusin",c),t.addEventListener("click",p),i.collapse(),o.animateOn()}function c(f){f.target!==r&&(r.click(),e.removeEventListener("focusin",c))}function p(f){f.target.tagName!=="A"&&i.isExpanded()&&o.refresh()}let h=new A;return this.addEventListener=h.addEventListener,this.removeEventListener=h.removeEventListener,this.dispatchEvent=h.dispatchEvent,this.init=l,this}me.BASE_CLASS=ee;me.init=a=>F(`.${ee}`,me,a);var Ve={};g(Ve,{default:()=>pa});var pa={};var Ge={};g(Ge,{default:()=>ua});var ua={};var Re={};g(Re,{default:()=>fa});var fa={};var Ue={};g(Ue,{default:()=>xa});var xa={};var Pe={};g(Pe,{default:()=>_a});var _a={};var Xe={};g(Xe,{default:()=>ka});var ka={};var Ke={};g(Ke,{default:()=>Ea});var Ea={};var Je={};g(Je,{default:()=>Aa});var Aa={};var Ye={};g(Ye,{default:()=>Ta});var Ta={};var We={};g(We,{default:()=>za});var za={};var $e={};g($e,{default:()=>Ia});var Ia={};var Ze={};g(Ze,{default:()=>Ma});var Ma={};var Qe={};g(Qe,{default:()=>Ca});var Ca={};var et={};g(et,{default:()=>Fa});var Fa={};var tt={};g(tt,{default:()=>Va});var Va={};var at={};g(at,{default:()=>Ra});var Ra={};var it={};g(it,{default:()=>Pa});var Pa={};var ot={};g(ot,{default:()=>Ka});var Ka={};var rt={};g(rt,{default:()=>Ya});var Ya={};var nt={};g(nt,{default:()=>$a});var $a={};function pe(a,e){let t;if(W(a,e))return t=a,t;if(a){let r="["+B+"="+e+"]";t=a.querySelector(r)}if(!t){let r=e+" behavior not found on passed DOM node!";throw new Error(r)}return t}var Za=Object.prototype.toString;var Qa=Array.isArray||function(e){return Za.call(e)==="[object Array]"};function lt(){return!!new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent)}var te=se+"flyout-menu",ei="["+B+"="+te;function K(a,e=!0){let t=pe(a,te),r=V(a),o=pe(a,te+"_content"),i=0,l=0,d=1,c=2,p=3,h,f,y,v=$.bind(this),T=U.bind(this),S,E=!0,j=!1;function V(n){let s=[],m=n.querySelectorAll(`${ei}_trigger]`),b,k,P;for(let G=m.length>>>0;G--;){for(P=!1,b=m[G],k=b.parentElement;k!==n;)k.getAttribute(B)&&k.getAttribute(B).split(" ").indexOf(te)!==-1?(P=!0,k=n):k=k.parentElement;P||s.unshift(m[G])}return s}function R(n=!1){return i=n?p:l,r.forEach(s=>{O("expanded",s,n),s.addEventListener("click",x.bind(this)),s.addEventListener("touchstart",u,{passive:!0}),s.addEventListener("mouseover",w.bind(this)),s.addEventListener("mouseout",D.bind(this))}),o.setAttribute("data-open",n?"true":"false"),e&&!n&&o.setAttribute("hidden",""),oe(),this}function O(n,s,m){let b=String(m);return s.setAttribute("aria-"+n,b),b}function u(){j=!0}function w(n){E||(j||this.dispatchEvent("triggerover",{target:this,trigger:n.target,type:"triggerover"}),j=!1)}function D(n){E||this.dispatchEvent("triggerout",{target:this,trigger:n.target,type:"triggerout"})}function x(n){if(!E)switch(this.dispatchEvent("triggerclick",{target:this,trigger:n.target,type:"triggerclick"}),n.preventDefault(),i){case l:case d:this.expand();break;case c:case p:this.collapse();break}}function z(){if(h==null||h.halt(),i===c||i===p)return this;if(i=c,e&&o.removeAttribute("hidden"),this.dispatchEvent("expandbegin",{target:this,type:"expandbegin"}),!f||!y)return T(),this;let n=h==null?void 0:h.isAnimated();return n&&h.addEventListener(_.END_EVENT,T),f(),n||T(),this}function C(){if(h==null||h.halt(),i===d||i===l)return this;for(let s=0,m=r.length;s<m;s++)O("expanded",r[s],!1);if(o.setAttribute("data-open","false"),i=d,this.dispatchEvent("collapsebegin",{target:this,type:"collapsebegin"}),!y||!f)return v(),this;let n=h==null?void 0:h.isAnimated();return n&&h.addEventListener(_.END_EVENT,v),y(),n||v(),this}function U(){i=p,o.setAttribute("data-open","true"),h&&h.removeEventListener(_.END_EVENT,T),this.dispatchEvent("expandend",{target:this,type:"expandend"});for(let n=0,s=r.length;n<s;n++)O("expanded",r[n],!0)}function $(){i=l,e&&o.setAttribute("hidden",""),h&&h.removeEventListener(_.END_EVENT,v),this.dispatchEvent("collapseend",{target:this,type:"collapseend"})}function ie(n,s,m){h=n,s&&s!==y&&(y=s),m&&m!==f&&(f=m)}function fe(){h&&h.remove();let n;h=n,f=n,y=n}function ye(){return{container:t,content:o,trigger:r}}function oe(){return E&&(E=!1),!E}function xe(){return E||(E=!0),E}function ve(n){return S=n,this}let Y=new A;return this.addEventListener=Y.addEventListener,this.removeEventListener=Y.removeEventListener,this.dispatchEvent=Y.dispatchEvent,this.init=R,this.expand=z,this.collapse=C,this.setTransition=ie,this.clearTransition=fe,this.getData=()=>S,this.getTransition=()=>h,this.getDom=ye,this.isAnimating=()=>i===c||i===d,this.isExpanded=()=>i===p,this.resume=oe,this.setData=ve,this.suspend=xe,K.BASE_CLASS=te,this}var be={CSS_PROPERTY:"opacity",BASE_CLASS:"u-alpha-transition",ALPHA_100:"u-alpha-100",ALPHA_0:"u-alpha-0"};function ut(a){let e=new A,t=new _(a,be,this);function r(l){return t.init(l),this}function o(){return t.applyClass(be.ALPHA_100),this}function i(){return t.applyClass(be.ALPHA_0),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.remove=t.remove,this.setElement=t.setElement,this.fadeIn=o,this.fadeOut=i,this.init=r,this}ut.CLASSES=be;function _(a,e,t){let r=e,o=a;if(!t)throw new Error("Child transition argument must be defined!");let i=t,l,d,c,p=!1,h=!1,f=!1;if(typeof r.CSS_PROPERTY=="undefined"||typeof r.BASE_CLASS=="undefined")throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function y(){d&&p?(o.addEventListener(d,c),i.dispatchEvent(_.BEGIN_EVENT,{target:i,type:_.BEGIN_EVENT}),o.classList.add(_.ANIMATING_CLASS),h=!0):(i.dispatchEvent(_.BEGIN_EVENT,{target:i,type:_.BEGIN_EVENT}),c())}function v(){o.removeEventListener(d,c)}function T(x){return x&&x.propertyName!==r.CSS_PROPERTY?!1:(v(),o.classList.remove(_.ANIMATING_CLASS),i.dispatchEvent(_.END_EVENT,{target:i,type:_.END_EVENT}),h=!1,!0)}function S(){let x;for(x in r)({}).hasOwnProperty.call(r,x)&&r[x]!==r.BASE_CLASS&&o.classList.contains(r[x])&&o.classList.remove(r[x])}function E(){h&&(o.style.webkitTransitionDuration="0",o.style.mozTransitionDuration="0",o.style.oTransitionDuration="0",o.style.transitionDuration="0",o.removeEventListener(d,c),c(),o.style.webkitTransitionDuration="",o.style.mozTransitionDuration="",o.style.oTransitionDuration="",o.style.transitionDuration="")}function j(){E(),S(),o.classList.remove(r.BASE_CLASS)}function V(){o.classList.remove(_.NO_ANIMATION_CLASS),p=!0}function R(){o.classList.add(_.NO_ANIMATION_CLASS),p=!1}function O(x){if(!x){let $="Element does not have TransitionEnd event. It may be null!";throw new Error($)}let z,C={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},U;for(U in C)if({}.hasOwnProperty.call(C,U)&&typeof x.style[U]!="undefined"){z=C[U];break}return z}function u(x){j(),V(),o=x,o.classList.add(r.BASE_CLASS),d=O(o)}function w(x){if(p=!o.classList.contains(_.NO_ANIMATION_CLASS),c=T.bind(this),u(o),!x)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return o.classList.add(x),this}function D(x){return f||(S(),f=!0),o.classList.contains(x)?!1:(v(),o.classList.remove(l),l=x,y(),o.classList.add(l),!0)}return this.animateOff=R,this.animateOn=V,this.applyClass=D,this.halt=E,this.init=w,this.isAnimated=()=>p,this.remove=j,this.setElement=u,this}_.BEGIN_EVENT="transitionbegin";_.END_EVENT="transitionend";_.NO_ANIMATION_CLASS="u-no-animation";_.ANIMATING_CLASS="u-is-animating";var ae={CSS_PROPERTY:"max-height",BASE_CLASS:"u-max-height-transition",MH_DEFAULT:"u-max-height-default",MH_SUMMARY:"u-max-height-summary",MH_ZERO:"u-max-height-zero"};function I(a){let e=new A,t=new _(a,ae,this),r=0;function o(){let y=a.scrollHeight+"px";a.style.maxHeight=y}function i(){window.removeEventListener("load",i),o()}function l(f){return t.init(f),window.addEventListener("load",i),window.addEventListener("resize",()=>{o()}),this}function d(){return o(),t.applyClass(ae.MH_DEFAULT),(!r||a.scrollHeight>r)&&(r=a.scrollHeight),this}function c(){return t.applyClass(ae.MH_SUMMARY),r=a.scrollHeight,this}function p(){return t.applyClass(ae.MH_ZERO),r=a.scrollHeight,this}function h(){return a.style.maxHeight="",t.remove()}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.refresh=o,this.remove=h,this.init=l,this.maxHeightDefault=d,this.maxHeightSummary=c,this.maxHeightZero=p,this}I.CLASSES=ae;var J={CSS_PROPERTY:"transform",BASE_CLASS:"u-move-transition",MOVE_TO_ORIGIN:"u-move-to-origin",MOVE_LEFT:"u-move-left",MOVE_LEFT_2X:"u-move-left-2x",MOVE_LEFT_3X:"u-move-left-3x",MOVE_RIGHT:"u-move-right",MOVE_UP:"u-move-up"};function gt(a){let e=new A,t=new _(a,J,this);function r(c){return t.init(c),this}function o(){return t.applyClass(J.MOVE_TO_ORIGIN),this}function i(c){c=c||1;let p=[J.MOVE_LEFT,J.MOVE_LEFT_2X,J.MOVE_LEFT_3X];return t.applyClass(p[c-1]),this}function l(){return t.applyClass(J.MOVE_RIGHT),this}function d(){return t.applyClass(J.MOVE_UP),this}return this.addEventListener=e.addEventListener,this.dispatchEvent=e.dispatchEvent,this.removeEventListener=e.removeEventListener,this.animateOff=t.animateOff,this.animateOn=t.animateOn,this.halt=t.halt,this.isAnimated=t.isAnimated,this.setElement=t.setElement,this.remove=t.remove,this.init=r,this.moveLeft=()=>i(1),this.moveLeft2=()=>i(2),this.moveLeft3=()=>i(3),this.moveRight=l,this.moveToOrigin=o,this.moveUp=d,this}gt.CLASSES=J;var ai;function ii(a){return a.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")}function oi(a,e){return RegExp(ii(e.trim()),"i").test(a)}function ri(a,e,t){let r=a,o=e,i=(t==null?void 0:t.maxSelections)||5,l=[],d=[],c=[],p=[],h=-1;function f(u){return o+"-"+u.value.trim().replace(/\s+/g,"-").toLowerCase()}function y(){return d.length>=i}function v(u){let w,D=[],x=!1;for(let z=0,C=u.length;z<C;z++)w=u[z],x=y()?!1:w.defaultSelected,D.push({id:f(w),value:w.value,text:w.text,checked:x}),x&&d.push(z);return D}function T(){return l=v(r),this}function S(u){return l[u].checked=!l[u].checked,d.length<i&&l[u].checked?(d.push(u),d.sort(),!0):(l[u].checked=!1,d=d.filter(function(w){return w!==u}),!1)}function E(u,w,D,x){return oi(w.text,x)&&u.push(D),u}function j(u){return Object.prototype.toString.call(u)!=="[object String]"&&(u=""),p=c,l.length>0&&(c=l.reduce(function(w,D,x){return E(w,D,x,u)},[])),h=-1,c}function V(u){return l[u]}function R(u){let w=c.length,D=w===0?l.length:w;u<0?h=-1:u>=D?h=D-1:h=u}function O(){return h}return this.init=T,this.toggleOption=S,this.getSelectedIndices=function(){return d},this.isAtMaxSelections=y,this.filterIndices=j,this.clearFilter=function(){return c=p=[],ai},this.getFilterIndices=function(){return c},this.getLastFilterIndices=function(){return p},this.getIndex=O,this.setIndex=R,this.resetIndex=function(){return h=-1,h},this.getOption=V,this}var ft=ri;function H(a,e,t){let r=document.createElement(a);return Object.keys(t).forEach(o=>{let i=t[o];o in r?r[o]=i:r.setAttribute(o,i)}),e&&e.appendChild(r),r}var yt='<svg xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg cf-icon-svg--error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>';var ci=yt,N="o-multiselect",hi="a-checkbox",mi="a-text-input",xt="prev",ue="next",st="Enter",pi=" ",vt="Escape",bi="ArrowUp",_t="ArrowDown",wt="Tab",kt={renderTags:!0,maxSelections:5};function ge(a){a.classList.add(N);let e=q(a,N),t=!1,r,o,i,l,d,c,p,h,f,y,v,T=[],S;function E(){v.classList.remove("u-no-results"),v.classList.add("u-filtered");let n=i.getLastFilterIndices();for(let s=0,m=n.length;s<m;s++)T[n[s]].classList.remove("u-filter-match");n=i.getFilterIndices();for(let s=0,m=n.length;s<m;s++)T[n[s]].classList.add("u-filter-match")}function j(){v.classList.remove("u-filtered","u-no-results");for(let n=0,s=v.children.length;n<s;n++)v.children[n].classList.remove("u-filter-match");i.clearFilter()}function V(){v.classList.add("u-no-results"),v.classList.remove("u-filtered")}function R(n){return n.length>0?(E(),!0):(V(),!1)}function O(n){j(),i.resetIndex();let s=i.filterIndices(n);R(s)}function u(){return c.classList.add("u-active"),y.classList.remove("u-invisible"),y.setAttribute("aria-hidden",!1),S.dispatchEvent("expandbegin",{target:S}),S}function w(){return c.classList.remove("u-active"),y.classList.add("u-invisible"),y.setAttribute("aria-hidden",!0),i.resetIndex(),S.dispatchEvent("collapsebegin",{target:S}),S}function D(n){n===ue?i.setIndex(i.getIndex()+1):n===xt&&i.setIndex(i.getIndex()-1);let s=i.getIndex();if(s>-1){let m=s,b=i.getFilterIndices();b.length>0&&(m=b[s]);let P=i.getOption(m).value,St=v.querySelector('[data-option="'+P+'"]').querySelector("input");t=!0,St.focus()}else t=!1,f.focus()}function x(){f.value="",j()}function z(n){let s=n.target;s.tagName==="BUTTON"&&(n.preventDefault(),s.removeEventListener("click",z),s.querySelector("label").click())}function C(n){if(n.key===pi||n.key===st){let s=n.target.querySelector("label");v.querySelector("#"+s.getAttribute("for")).click()}}function U(n){return r+"-"+n.value.trim().replace(/[^\w]/g,"-").toLowerCase()}function $(n,s){let m=U(s),b=H("li",null,{"data-option":s.value}),k=H("button",b,{type:"button",innerHTML:"<label for="+m+">"+s.text+ci+"</label>"});n.appendChild(b),k.addEventListener("click",z),k.addEventListener("keydown",C)}function ie(n){let s=i.getOption(n)||i.getOption(i.getIndex());if(s){if(s.checked){v.classList.contains("u-max-selections")&&v.classList.remove("u-max-selections");let m='[data-option="'+s.value+'"]',b=p.querySelector(m);typeof b!="undefined"&&b&&(p==null||p.removeChild(b))}else d!=null&&d.renderTags&&p&&$(p,s);i.toggleOption(n),i.isAtMaxSelections()&&v.classList.add("u-max-selections"),S.dispatchEvent("selectionsupdated",{target:S})}i.resetIndex(),t=!1,y.getAttribute("aria-hidden")==="false"&&f.focus()}function fe(n){ie(Number(n.target.getAttribute("data-index"))),x()}function ye(){h.addEventListener("mousemove",function(m){let b=m.target;m.offsetX>b.offsetWidth-35?b.style.cursor="pointer":b.style.cursor="auto"}),h.addEventListener("mouseup",function(m){let b=m.target;m.offsetX>b.offsetWidth-35&&y.offsetHeight===140&&f.blur()}),f.addEventListener("input",function(){O(this.value)}),f.addEventListener("focus",function(){y.getAttribute("aria-hidden")==="true"&&u()}),f.addEventListener("blur",function(){!t&&y.getAttribute("aria-hidden")==="false"&&w()}),f.addEventListener("keydown",function(m){let b=m.key;y.getAttribute("aria-hidden")==="true"&&b!==wt&&u(),b===st?(m.preventDefault(),D(ue)):b===vt?(x(),w()):b===_t?D(ue):b===wt&&!m.shiftKey&&y.getAttribute("aria-hidden")==="false"&&w()}),v.addEventListener("mousedown",function(){t=!0}),v.addEventListener("keydown",function(m){let b=m.key,k=m.target,P=k.checked;if(b===st){m.preventDefault(),k.checked=!P;let G=new Event("change",{bubbles:!1,cancelable:!0});k.dispatchEvent(G)}else b===vt?(f.focus(),w()):b===bi?D(xt):b===_t&&D(ue)}),y.addEventListener("mousedown",function(m){m.target.tagName==="LABEL"&&(t=!0)});let n=v.querySelectorAll("input");for(let m=0,b=n.length;m<b;m++)n[m].addEventListener("change",fe);let s=p.querySelectorAll("button");for(let m=0,b=s.length;m<b;m++)s[m].addEventListener("click",z),s[m].addEventListener("keydown",C)}function oe(){c=document.createElement("div"),c.className=N,p=H("ul",null,{className:N+"__choices"}),h=H("header",c,{className:N+"__header"}),f=H("input",h,{className:N+"__search "+mi,type:"text",placeholder:o||"Select up to five",id:e.id,autocomplete:"off"}),y=H("fieldset",c,{className:N+"__fieldset u-invisible","aria-hidden":"true"});let n=N+"__options";i.isAtMaxSelections()&&(n+=" u-max-selections"),v=H("ul",y,{className:n});let s,m,b;for(let k=0,P=l.length;k<P;k++){s=l[k],m=U(s),b=i.getOption(k).checked;let G=H("li",v,{"data-option":s.value,"data-cy":"multiselect-option",class:"m-form-field m-form-field--checkbox"});H("input",G,{id:m,type:"checkbox",value:s.value,name:r,class:hi+" "+N+"__checkbox",checked:b,"data-index":k}),H("label",G,{for:m,textContent:s.text,className:N+"__label a-label"}),T.push(G),b&&(d!=null&&d.renderTags)&&$(p,s)}return c.insertBefore(p,h),e.parentNode.insertBefore(c,e),c.appendChild(e),c}function xe(n=kt){if(!M(e))return this;if(lt())return this;if(S=this,r=e.name||e.id,o=e.getAttribute("placeholder"),l=e.options||[],d=_e(_e({},kt),n),l.length>0){i=new ft(l,r,d).init();let s=oe();e.parentNode.removeChild(e),e=s,M(e),ye()}return this}function ve(){return i}this.init=xe,this.expand=u,this.collapse=w;let Y=new A;return this.addEventListener=Y.addEventListener,this.removeEventListener=Y.removeEventListener,this.dispatchEvent=Y.dispatchEvent,this.getModel=ve,this.updateSelections=ie,this.selectionClickHandler=z,this.selectionKeyDownHandler=C,this}ge.BASE_CLASS=N;ge.init=a=>F(`.${N}`,ge,void 0,a);})();
//# sourceMappingURL=index.js.map
