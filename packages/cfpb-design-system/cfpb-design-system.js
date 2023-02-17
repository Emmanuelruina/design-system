/*! For license information please see cfpb-design-system.js.LICENSE.txt */
!function(){"use strict";var t={523:function(t){function e(t){this.listenerMap=[{},{}],t&&this.root(t),this.handle=e.prototype.handle.bind(this),this._removedListeners=[]}t.exports=e,e.prototype.root=function(t){var e,n=this.listenerMap;if(this.rootElement){for(e in n[1])n[1].hasOwnProperty(e)&&this.rootElement.removeEventListener(e,this.handle,!0);for(e in n[0])n[0].hasOwnProperty(e)&&this.rootElement.removeEventListener(e,this.handle,!1)}if(!t||!t.addEventListener)return this.rootElement&&delete this.rootElement,this;for(e in this.rootElement=t,n[1])n[1].hasOwnProperty(e)&&this.rootElement.addEventListener(e,this.handle,!0);for(e in n[0])n[0].hasOwnProperty(e)&&this.rootElement.addEventListener(e,this.handle,!1);return this},e.prototype.captureForType=function(t){return-1!==["blur","error","focus","load","resize","scroll"].indexOf(t)},e.prototype.on=function(t,e,o,a){var l,h,c,d;if(!t)throw new TypeError("Invalid event type: "+t);if("function"==typeof e&&(a=o,o=e,e=null),void 0===a&&(a=this.captureForType(t)),"function"!=typeof o)throw new TypeError("Handler must be a type of Function");return l=this.rootElement,(h=this.listenerMap[a?1:0])[t]||(l&&l.addEventListener(t,this.handle,a),h[t]=[]),e?/^[a-z]+$/i.test(e)?(d=e,c=i):/^#[a-z0-9\-_]+$/i.test(e)?(d=e.slice(1),c=r):(d=e,c=n):(d=null,c=s.bind(this)),h[t].push({selector:e,handler:o,matcher:c,matcherParam:d}),this},e.prototype.off=function(t,e,n,i){var s,r,o,a,l;if("function"==typeof e&&(i=n,n=e,e=null),void 0===i)return this.off(t,e,n,!0),this.off(t,e,n,!1),this;if(o=this.listenerMap[i?1:0],!t){for(l in o)o.hasOwnProperty(l)&&this.off(l,e,n);return this}if(!(a=o[t])||!a.length)return this;for(s=a.length-1;s>=0;s--)r=a[s],e&&e!==r.selector||n&&n!==r.handler||(this._removedListeners.push(r),a.splice(s,1));return a.length||(delete o[t],this.rootElement&&this.rootElement.removeEventListener(t,this.handle,i)),this},e.prototype.handle=function(t){var e,n,i,s,r,o=t.type,a=[],l="ftLabsDelegateIgnore";if(!0!==t[l]){switch(3===(r=t.target).nodeType&&(r=r.parentNode),r.correspondingUseElement&&(r=r.correspondingUseElement),i=this.rootElement,t.eventPhase||(t.target!==t.currentTarget?3:2)){case 1:a=this.listenerMap[1][o];break;case 2:this.listenerMap[0]&&this.listenerMap[0][o]&&(a=a.concat(this.listenerMap[0][o])),this.listenerMap[1]&&this.listenerMap[1][o]&&(a=a.concat(this.listenerMap[1][o]));break;case 3:a=this.listenerMap[0][o]}var h,c=[];for(n=a.length;r&&n;){for(e=0;e<n&&(s=a[e]);e++)r.tagName&&["button","input","select","textarea"].indexOf(r.tagName.toLowerCase())>-1&&r.hasAttribute("disabled")?c=[]:s.matcher.call(r,s.matcherParam,r)&&c.push([t,r,s]);if(r===i)break;if(n=a.length,(r=r.parentElement||r.parentNode)instanceof HTMLDocument)break}for(e=0;e<c.length;e++)if(!(this._removedListeners.indexOf(c[e][2])>-1)&&!1===this.fire.apply(this,c[e])){c[e][0][l]=!0,c[e][0].preventDefault(),h=!1;break}return h}},e.prototype.fire=function(t,e,n){return n.handler.call(e,t,e)};var n=function(t){if(t){var e=t.prototype;return e.matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector}}(Element);function i(t,e){return t.toLowerCase()===e.tagName.toLowerCase()}function s(t,e){return this.rootElement===window?e===document||e===document.documentElement||e===window:this.rootElement===e}function r(t,e){return t===e.id}e.prototype.destroy=function(){this.off(),this.root()}},494:function(t,e,n){var i=n(523);t.exports=function(t){return new i(t)},t.exports.Delegate=i}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}!function(){const t="data-js-hook";function e(e,n){if(!e)return!1;let i=e.getAttribute(t);return!!i&&(i=i.split(" "),i.indexOf(n)>-1)}const i="state_atomic_init";function s(n){return!e(n,i)&&(function(n,i){if(e(n,i))return i;if(-1!==i.indexOf(" "))throw new Error(t+" values cannot contain spaces!");const s=n.getAttribute(t);null!==s&&(i=s+" "+i),n.setAttribute(t,i)}(n,i),!0)}var r=n(494);var o=function(){const t={};return this.addEventListener=function(e,n){return!{}.hasOwnProperty.call(t,e)?t[e]=[n]:t[e].push(n),this},this.removeEventListener=function(e,n){if(!{}.hasOwnProperty.call(t,e))return this;const i=t[e].indexOf(n);return-1!==i&&t[e].splice(i,1),this},this.dispatchEvent=function(e,n){if(!{}.hasOwnProperty.call(t,e))return this;n=n||{};const i=t[e];for(let t=0,e=i.length;t<e;t++)i[t].call(this,n);return this},this.getRegisteredEvents=()=>t,this};const a=Object.prototype.toString;Array.isArray;function l(t){return"[object Function]"===a.call(t)}function h(t,e){this.element=t,this.initializers=[],this.uId=this.uniqueId("ac"),Object.assign(this,e),this.processModifiers(),this.ensureElement(),this.setCachedElements(),this.initializers.push(this.initialize)}Object.assign(h.prototype,new o,{init:function(){return this.initializers.forEach((function(t){l(t)&&t.apply(this,arguments)}),this),this.dispatchEvent("component:initialized"),this},processModifiers:function(){this.modifiers&&this.modifiers.forEach((function(t){const e=t.ui.base.substring(1);this.element.classList.contains(e)&&(t.initialize&&this.initializers.push(t.initialize),Object.assign(this,t))}),this)},render:function(){return this},ensureElement:function(){if(this.element)this.setElement(this.element);else{const t={...this.attributes};t.id=this.id||this.u_id,this.className&&(t.class=this.className),this.setElement(document.createElement("div")),this.setElementAttributes(t)}s(this.element)},setElement:function(t){return this.element&&this.undelegateEvents(),this.element=t,this.delegateEvents(),this},setCachedElements:function(){const t={...this.ui};let e,n;for(e in t)({}).hasOwnProperty.call(t,e)&&(n=this.element.querySelectorAll(t[e]),1===n.length?t[e]=n[0]:n.length>1?t[e]=n:t[e]=null);return this.ui=t,t},destroy:function(){return this.element&&(this.element.parentNode.removeChild(this.element),this.element.view&&delete this.element.view,delete this.element),this.undelegateEvents(),this.dispatchEvent("component:destroyed"),!0},setElementAttributes:function(t){let e;for(e in t)({}).hasOwnProperty.call(t,e)&&this.element.setAttribute(e,t[e])},delegateEvents:function(t){const e=/^(\S+)\s*(.*)$/;let n,i,s;if(!(t=t||(t=this.events)))return this;for(n in this.undelegateEvents(),this._delegate=new r(this.element),t)({}).hasOwnProperty.call(t,n)&&(i=t[n],l(this[i])&&(i=this[i]),i&&(s=n.match(e),this.delegate(s[1],s[2],i.bind(this))));return this.dispatchEvent("component:bound"),this},delegate:function(t,e,n){return this._delegate.on(t,e,n),this},undelegateEvents:function(){return this._delegate&&this._delegate.destroy(),this.element.removeAttribute("data-js-hook"),this},uniqueId:function(t){return t+"_"+Math.random().toString(36).substr(2,9)}}),h.init=function(t){return function(t,n,s){const r=(s||document).querySelectorAll(t),o=[];let a,l;for(let t=0,s=r.length;t<s;t++)l=r[t],!1===e(l,i)&&(a=new n(l),a.init(),o.push(a));return o}(this.selector,this,t)},h.extend=function(t){function e(){return this._super=h.prototype,h.apply(this,arguments)}return e.prototype=Object.create(h.prototype),Object.assign(e.prototype,t),Object.assign(e,h),{}.hasOwnProperty.call(t,"ui")&&{}.hasOwnProperty.call(t.ui,"base")&&(e.selector=t.ui.base),e.constants={},e};var c=h;function d(t,e,n){const i=e;let s=t;if(!n)throw new Error("Child transition argument must be defined!");const r=n;let o,a,l,h=!1,c=!1,u=!1;if(void 0===i.CSS_PROPERTY||void 0===i.BASE_CLASS)throw new Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");function p(){s.removeEventListener(a,l)}function f(t){return(!t||t.propertyName===i.CSS_PROPERTY)&&(p(),s.classList.remove(d.ANIMATING_CLASS),r.dispatchEvent(d.END_EVENT,{target:r,type:d.END_EVENT}),c=!1,!0)}function E(){let t;for(t in i)({}).hasOwnProperty.call(i,t)&&i[t]!==i.BASE_CLASS&&s.classList.contains(i[t])&&s.classList.remove(i[t])}function m(){c&&(s.style.webkitTransitionDuration="0",s.style.mozTransitionDuration="0",s.style.oTransitionDuration="0",s.style.transitionDuration="0",s.removeEventListener(a,l),l(),s.style.webkitTransitionDuration="",s.style.mozTransitionDuration="",s.style.oTransitionDuration="",s.style.transitionDuration="")}function g(){m(),E(),s.classList.remove(i.BASE_CLASS)}function v(){s.classList.remove(d.NO_ANIMATION_CLASS),h=!0}function L(t){g(),v(),s=t,s.classList.add(i.BASE_CLASS),a=function(t){if(!t)throw new Error("Element does not have TransitionEnd event. It may be null!");let e;const n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};let i;for(i in n)if({}.hasOwnProperty.call(n,i)&&void 0!==t.style[i]){e=n[i];break}return e}(s)}return this.animateOff=function(){s.classList.add(d.NO_ANIMATION_CLASS),h=!1},this.animateOn=v,this.applyClass=function(t){return u||(E(),u=!0),!s.classList.contains(t)&&(p(),s.classList.remove(o),o=t,a&&h?(s.addEventListener(a,l),r.dispatchEvent(d.BEGIN_EVENT,{target:r,type:d.BEGIN_EVENT}),s.classList.add(d.ANIMATING_CLASS),c=!0):(r.dispatchEvent(d.BEGIN_EVENT,{target:r,type:d.BEGIN_EVENT}),l()),s.classList.add(o),!0)},this.halt=m,this.init=function(t){if(h=!s.classList.contains(d.NO_ANIMATION_CLASS),l=f.bind(this),L(s),!t)throw new Error("Transition needs to be passed an initial CSS class on initialization!");return s.classList.add(t),this},this.isAnimated=()=>h,this.remove=g,this.setElement=L,this}d.BEGIN_EVENT="transitionbegin",d.END_EVENT="transitionend",d.NO_ANIMATION_CLASS="u-no-animation",d.ANIMATING_CLASS="u-is-animating";var u=d;const p={CSS_PROPERTY:"max-height",BASE_CLASS:"o-expandable_content__transition",EXPANDED:"o-expandable_content__expanded",COLLAPSED:"o-expandable_content__collapsed",OPEN_DEFAULT:"o-expandable_content__onload-open"};function f(t){const e=new u(t,p,this);let n;function i(){t.classList.contains(p.EXPANDED)?(this.dispatchEvent("expandend",{target:this}),t.scrollHeight>n&&(t.style.maxHeight=t.scrollHeight+"px")):t.classList.contains(p.COLLAPSED)&&this.dispatchEvent("collapseend",{target:this})}const s=new o;return this.addEventListener=s.addEventListener,this.dispatchEvent=s.dispatchEvent,this.removeEventListener=s.removeEventListener,this.animateOff=e.animateOff,this.animateOn=e.animateOn,this.halt=e.halt,this.isAnimated=e.isAnimated,this.setElement=e.setElement,this.remove=e.remove,this.init=function(){const n=t.classList.contains(p.OPEN_DEFAULT),s=n?p.EXPANDED:p.COLLAPSED;return e.init(s),this.addEventListener(u.END_EVENT,i.bind(this)),n?this.expand():this.collapse(),this},this.toggleExpandable=function(){return t.classList.contains(p.COLLAPSED)?this.expand():this.collapse(),this},this.collapse=function(){return this.dispatchEvent("collapsebegin",{target:this}),n=t.scrollHeight,t.style.maxHeight="0",e.applyClass(p.COLLAPSED),this},this.expand=function(){return this.dispatchEvent("expandbegin",{target:this}),(!n||t.scrollHeight>n)&&(n=t.scrollHeight),t.style.maxHeight=n+"px",e.applyClass(p.EXPANDED),this},this}f.CLASSES=p;var E=f;const m=new o;function g(){this.ui.content.classList.remove("u-hidden")}function v(){this.ui.content.classList.add("u-hidden")}function L(){this.activeAccordion&&(this.transition.toggleExpandable(),this.toggleTargetState(this.ui.target),this.activeAccordion=!1)}c.extend({ui:{base:".o-expandable",target:".o-expandable_target",content:".o-expandable_content",header:".o-expandable_header",label:".o-expandable_label"},classes:{targetExpanded:"o-expandable_target__expanded",targetCollapsed:"o-expandable_target__collapsed",group:"o-expandable-group",groupAccordion:"o-expandable-group__accordion"},events:{"click .o-expandable_target":"expandableClickHandler"},transition:null,isAccordionGroup:!1,activeAccordion:!1,initialize:function(){const t=new E(this.ui.content);this.transition=t.init(),this.transition.addEventListener("expandbegin",g.bind(this)),this.transition.addEventListener("collapseend",v.bind(this)),this.ui.content.classList.contains(E.CLASSES.EXPANDED)?this.ui.target.classList.add(this.classes.targetExpanded):(this.ui.target.classList.add(this.classes.targetCollapsed),this.ui.content.classList.add("u-hidden"));const e=this.ui.target.closest("."+this.classes.group);this.isAccordionGroup=null!==e&&e.classList.contains(this.classes.groupAccordion),this.isAccordionGroup&&m.addEventListener("accordionActivated",L.bind(this))},expandableClickHandler:function(){this.transition.toggleExpandable(),this.toggleTargetState(this.ui.target),this.isAccordionGroup&&(this.activeAccordion?this.activeAccordion=!1:(m.dispatchEvent("accordionActivated",{target:this}),this.activeAccordion=!0))},toggleTargetState:function(t){t.classList.contains(this.classes.targetExpanded)?(this.ui.target.classList.add(this.classes.targetCollapsed),this.ui.target.classList.remove(this.classes.targetExpanded)):(this.ui.target.classList.add(this.classes.targetExpanded),this.ui.target.classList.remove(this.classes.targetCollapsed))},getLabelText:function(){return this.ui.label.textContent.trim()}}).init()}()}();