/*! For license information please see cfpb-design-system.js.LICENSE.txt */
!function(){"use strict";var t={523:function(t){function e(t){this.listenerMap=[{},{}],t&&this.root(t),this.handle=e.prototype.handle.bind(this),this._removedListeners=[]}t.exports=e,e.prototype.root=function(t){var e,n=this.listenerMap;if(this.rootElement){for(e in n[1])n[1].hasOwnProperty(e)&&this.rootElement.removeEventListener(e,this.handle,!0);for(e in n[0])n[0].hasOwnProperty(e)&&this.rootElement.removeEventListener(e,this.handle,!1)}if(!t||!t.addEventListener)return this.rootElement&&delete this.rootElement,this;for(e in this.rootElement=t,n[1])n[1].hasOwnProperty(e)&&this.rootElement.addEventListener(e,this.handle,!0);for(e in n[0])n[0].hasOwnProperty(e)&&this.rootElement.addEventListener(e,this.handle,!1);return this},e.prototype.captureForType=function(t){return-1!==["blur","error","focus","load","resize","scroll"].indexOf(t)},e.prototype.on=function(t,e,o,a){var h,l,c,d;if(!t)throw new TypeError("Invalid event type: "+t);if("function"==typeof e&&(a=o,o=e,e=null),void 0===a&&(a=this.captureForType(t)),"function"!=typeof o)throw new TypeError("Handler must be a type of Function");return h=this.rootElement,(l=this.listenerMap[a?1:0])[t]||(h&&h.addEventListener(t,this.handle,a),l[t]=[]),e?/^[a-z]+$/i.test(e)?(d=e,c=i):/^#[a-z0-9\-_]+$/i.test(e)?(d=e.slice(1),c=r):(d=e,c=n):(d=null,c=s.bind(this)),l[t].push({selector:e,handler:o,matcher:c,matcherParam:d}),this},e.prototype.off=function(t,e,n,i){var s,r,o,a,h;if("function"==typeof e&&(i=n,n=e,e=null),void 0===i)return this.off(t,e,n,!0),this.off(t,e,n,!1),this;if(o=this.listenerMap[i?1:0],!t){for(h in o)o.hasOwnProperty(h)&&this.off(h,e,n);return this}if(!(a=o[t])||!a.length)return this;for(s=a.length-1;s>=0;s--)r=a[s],e&&e!==r.selector||n&&n!==r.handler||(this._removedListeners.push(r),a.splice(s,1));return a.length||(delete o[t],this.rootElement&&this.rootElement.removeEventListener(t,this.handle,i)),this},e.prototype.handle=function(t){var e,n,i,s,r,o=t.type,a=[],h="ftLabsDelegateIgnore";if(!0!==t[h]){switch(3===(r=t.target).nodeType&&(r=r.parentNode),r.correspondingUseElement&&(r=r.correspondingUseElement),i=this.rootElement,t.eventPhase||(t.target!==t.currentTarget?3:2)){case 1:a=this.listenerMap[1][o];break;case 2:this.listenerMap[0]&&this.listenerMap[0][o]&&(a=a.concat(this.listenerMap[0][o])),this.listenerMap[1]&&this.listenerMap[1][o]&&(a=a.concat(this.listenerMap[1][o]));break;case 3:a=this.listenerMap[0][o]}var l,c=[];for(n=a.length;r&&n;){for(e=0;e<n&&(s=a[e]);e++)r.tagName&&["button","input","select","textarea"].indexOf(r.tagName.toLowerCase())>-1&&r.hasAttribute("disabled")?c=[]:s.matcher.call(r,s.matcherParam,r)&&c.push([t,r,s]);if(r===i)break;if(n=a.length,(r=r.parentElement||r.parentNode)instanceof HTMLDocument)break}for(e=0;e<c.length;e++)if(!(this._removedListeners.indexOf(c[e][2])>-1)&&!1===this.fire.apply(this,c[e])){c[e][0][h]=!0,c[e][0].preventDefault(),l=!1;break}return l}},e.prototype.fire=function(t,e,n){return n.handler.call(e,t,e)};var n=function(t){if(t){var e=t.prototype;return e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector}}(Element);function i(t,e){return t.toLowerCase()===e.tagName.toLowerCase()}function s(t,e){return this.rootElement===window?e===document||e===document.documentElement||e===window:this.rootElement===e}function r(t,e){return t===e.id}e.prototype.destroy=function(){this.off(),this.root()}},494:function(t,e,n){var i=n(523);t.exports=function(t){return new i(t)},t.exports.Delegate=i}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}!function(){const t="data-js-hook";function e(e,n){if(!e)return!1;let i=e.getAttribute(t);return!!i&&(i=i.split(" "),i.indexOf(n)>-1)}const i="state_atomic_init";function s(n){return!e(n,i)&&(function(e,n){if(-1!==n.indexOf(" "))throw new Error(t+" values cannot contain spaces!");const i=e.getAttribute(t);null!==i&&(n=i+" "+n),e.setAttribute(t,n)}(n,i),!0)}var r=n(494);var o=function(){const t={};return this.addEventListener=function(e,n){return!{}.hasOwnProperty.call(t,e)?t[e]=[n]:t[e].push(n),this},this.removeEventListener=function(e,n){if(!{}.hasOwnProperty.call(t,e))return this;const i=t[e].indexOf(n);return-1!==i&&t[e].splice(i,1),this},this.dispatchEvent=function(e,n){if(!{}.hasOwnProperty.call(t,e))return this;n=n||{};const i=t[e];for(let t=0,e=i.length;t<e;t++)i[t].call(this,n);return this},this.getRegisteredEvents=function(){return t},this};const a=Object.prototype.toString;Array.isArray;function h(t){return"[object Function]"===a.call(t)}function l(t,e){this.element=t,this.initializers=[],this.uId=this.uniqueId("ac"),Object.assign(this,e),this.processModifiers(),this.ensureElement(),this.setCachedElements(),this.initializers.push(this.initialize)}Object.assign(l.prototype,new o,{init:function(){return this.initializers.forEach((function(t){h(t)&&t.apply(this,arguments)}),this),this.dispatchEvent("component:initialized"),this},processModifiers:function(){this.modifiers&&this.modifiers.forEach((function(t){const e=t.ui.base.substring(1);this.element.classList.contains(e)&&(t.initialize&&this.initializers.push(t.initialize),Object.assign(this,t))}),this)},render:function(){return this},ensureElement:function(){if(this.element)this.setElement(this.element);else{const t={...this.attributes};t.id=this.id||this.u_id,this.className&&(t.class=this.className),this.setElement(document.createElement("div")),this.setElementAttributes(t)}s(this.element)},setElement:function(t){return this.element&&this.undelegateEvents(),this.element=t,this.delegateEvents(),this},setCachedElements:function(){const t={...this.ui};let e,n;for(e in t)({}).hasOwnProperty.call(t,e)&&(n=this.element.querySelectorAll(t[e]),1===n.length?t[e]=n[0]:n.length>1?t[e]=n:t[e]=null);return this.ui=t,t},destroy:function(){return this.element&&(this.element.parentNode.removeChild(this.element),this.element.view&&delete this.element.view,delete this.element),this.undelegateEvents(),this.dispatchEvent("component:destroyed"),!0},setElementAttributes:function(t){let e;for(e in t)({}).hasOwnProperty.call(t,e)&&this.element.setAttribute(e,t[e])},delegateEvents:function(t){const e=/^(\S+)\s*(.*)$/;let n,i,s;if(!(t=t||(t=this.events)))return this;for(n in this.undelegateEvents(),this._delegate=new r(this.element),t)({}).hasOwnProperty.call(t,n)&&(i=t[n],h(this[i])&&(i=this[i]),i&&(s=n.match(e),this.delegate(s[1],s[2],i.bind(this))));return this.dispatchEvent("component:bound"),this},delegate:function(t,e,n){return this._delegate.on(t,e,n),this},undelegateEvents:function(){return this._delegate&&this._delegate.destroy(),this.element.removeAttribute("data-js-hook"),this},uniqueId:function(t){return t+"_"+Math.random().toString(36).substr(2,9)}}),l.init=function(t){return function(t,n,s){const r=(s||document).querySelectorAll(t),o=[];let a,h;for(let t=0,s=r.length;t<s;t++)h=r[t],!1===e(h,i)&&(a=new n(h),a.init(),o.push(a));return o}(this.selector,this,t)},l.extend=function(t){function e(){return this._super=l.prototype,l.apply(this,arguments)}return e.prototype=Object.create(l.prototype),Object.assign(e.prototype,t),Object.assign(e,l),{}.hasOwnProperty.call(t,"ui")&&{}.hasOwnProperty.call(t.ui,"base")&&(e.selector=t.ui.base),e.constants={},e};var c=l;function d(t,e){const n=e;let i,s,r,a,h,l=!1,c=!1;if(void 0===n.CSS_PROPERTY||void 0===n.BASE_CLASS)throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function u(){i.classList.add(d.ANIMATING_CLASS),l=!0,r&&!i.classList.contains(d.NO_ANIMATION_CLASS)?(i.addEventListener(r,a),this.dispatchEvent(d.BEGIN_EVENT,{target:this})):(this.dispatchEvent(d.BEGIN_EVENT,{target:this}),a())}function p(){i.removeEventListener(r,a)}function E(t){return(!t||t.propertyName===n.CSS_PROPERTY)&&(p(),i.classList.remove(d.ANIMATING_CLASS),this.dispatchEvent(d.END_EVENT,{target:this}),l=!1,!0)}function f(){let t;for(t in n)({}).hasOwnProperty.call(n,t)&&n[t]!==n.BASE_CLASS&&i.classList.contains(n[t])&&i.classList.remove(n[t])}function m(){l&&(i.style.webkitTransitionDuration="0",i.style.mozTransitionDuration="0",i.style.oTransitionDuration="0",i.style.transitionDuration="0",i.removeEventListener(r,a),a(),i.style.webkitTransitionDuration="",i.style.mozTransitionDuration="",i.style.oTransitionDuration="",i.style.transitionDuration="")}function v(){return!!i&&(m(),i.classList.remove(n.BASE_CLASS),f(),!0)}function g(){return i?(i.classList.remove(d.NO_ANIMATION_CLASS),this):this}function L(t){i&&(v(),g()),i=t,i.classList.add(n.BASE_CLASS),r=function(t){if(!t)throw new Error("Element does not have TransitionEnd event. It may be null!");let e;const n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};let i;for(i in n)if({}.hasOwnProperty.call(n,i)&&void 0!==t.style[i]){e=n[i];break}return e}(i)}const A=new o;return this.addEventListener=A.addEventListener,this.dispatchEvent=A.dispatchEvent,this.removeEventListener=A.removeEventListener,this.animateOff=function(){return i?(i.classList.add(d.NO_ANIMATION_CLASS),this):this},this.animateOn=g,this.applyClass=function(t){return!!i&&(c||(f(),c=!0),!i.classList.contains(t)&&(p(),i.classList.remove(s),s=t,h(),i.classList.add(s),!0))},this.halt=m,this.init=function(){return a=E.bind(this),h=u.bind(this),L(t),this},this.isAnimated=function(){return!!i&&!i.classList.contains(d.NO_ANIMATION_CLASS)},this.remove=v,this.setElement=L,this.proxyEvents=function(t,e){return this.addEventListener(d.BEGIN_EVENT,(()=>{t.dispatchEvent(d.BEGIN_EVENT,{target:t})})),this.addEventListener(d.END_EVENT,e),this},this}d.BEGIN_EVENT="transitionBegin",d.END_EVENT="transitionEnd",d.NO_ANIMATION_CLASS="u-no-animation",d.ANIMATING_CLASS="u-is-animating";var u=d;const p={CSS_PROPERTY:"max-height",BASE_CLASS:"o-expandable_content__transition",EXPANDED:"o-expandable_content__expanded",COLLAPSED:"o-expandable_content__collapsed",OPEN_DEFAULT:"o-expandable_content__onload-open"};function E(t){const e=new u(t,p);let n;function i(){t.classList.contains(p.EXPANDED)?(this.dispatchEvent("expandEnd",{target:this}),t.scrollHeight>n&&(t.style.maxHeight=t.scrollHeight+"px")):t.classList.contains(p.COLLAPSED)&&this.dispatchEvent("collapseEnd",{target:this})}const s=new o;return this.addEventListener=s.addEventListener,this.dispatchEvent=s.dispatchEvent,this.removeEventListener=s.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.setElement=e.setElement,this.remove=e.remove,this.init=function(){return e.init(),e.addEventListener(u.END_EVENT,i.bind(this)),t.classList.contains(p.OPEN_DEFAULT)?this.expand():this.collapse(),this},this.toggleExpandable=function(){return t.classList.contains(p.COLLAPSED)?this.expand():this.collapse(),this},this.collapse=function(){return this.dispatchEvent("collapseBegin",{target:this}),n=t.scrollHeight,t.style.maxHeight="0",e.applyClass(p.COLLAPSED),this},this.expand=function(){return this.dispatchEvent("expandBegin",{target:this}),(!n||t.scrollHeight>n)&&(n=t.scrollHeight),t.style.maxHeight=n+"px",e.applyClass(p.EXPANDED),this},this}E.CLASSES=p;var f=E;const m=new o;function v(){this.ui.content.classList.remove("u-hidden")}function g(){this.ui.content.classList.add("u-hidden")}function L(){this.activeAccordion&&(this.transition.toggleExpandable(),this.toggleTargetState(this.ui.target),this.activeAccordion=!1)}c.extend({ui:{base:".o-expandable",target:".o-expandable_target",content:".o-expandable_content",header:".o-expandable_header",label:".o-expandable_label"},classes:{targetExpanded:"o-expandable_target__expanded",targetCollapsed:"o-expandable_target__collapsed",group:"o-expandable-group",groupAccordion:"o-expandable-group__accordion"},events:{"click .o-expandable_target":"expandableClickHandler"},transition:null,isAccordionGroup:!1,activeAccordion:!1,initialize:function(){const t=new f(this.ui.content);this.transition=t.init(),this.transition.addEventListener("expandBegin",v.bind(this)),this.transition.addEventListener("collapseEnd",g.bind(this)),this.ui.content.classList.contains(f.CLASSES.EXPANDED)?this.ui.target.classList.add(this.classes.targetExpanded):(this.ui.target.classList.add(this.classes.targetCollapsed),this.ui.content.classList.add("u-hidden"));const e=this.ui.target.closest("."+this.classes.group);this.isAccordionGroup=null!==e&&e.classList.contains(this.classes.groupAccordion),this.isAccordionGroup&&m.addEventListener("accordionActivated",L.bind(this))},expandableClickHandler:function(){this.transition.toggleExpandable(),this.toggleTargetState(this.ui.target),this.isAccordionGroup&&(this.activeAccordion?this.activeAccordion=!1:(m.dispatchEvent("accordionActivated",{target:this}),this.activeAccordion=!0))},toggleTargetState:function(t){t.classList.contains(this.classes.targetExpanded)?(this.ui.target.classList.add(this.classes.targetCollapsed),this.ui.target.classList.remove(this.classes.targetExpanded)):(this.ui.target.classList.add(this.classes.targetExpanded),this.ui.target.classList.remove(this.classes.targetCollapsed))},getLabelText:function(){return this.ui.label.textContent.trim()}}).init()}()}();