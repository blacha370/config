(self.webpackChunk=self.webpackChunk||[]).push([[1570],{101:(t,e,n)=>{n.d(e,{l:()=>r});var r,o=n(59312),i=n(27378),u=n(95300),s=n(60797),c=n(66310),a=n(24209),f=n(85089),h=n(49708),d=n(85985),p=n(76974),l=n(98403),v=n(17343),b=n(93508),m=n(77176),_=n(2844),y=n(41398),g=n(19751),w=n(18625),E=n(5114),O=n(19962),M=n(18208),C=n(81531);!function(t){var e;!function(t){t.nextLevel=function(t,e){return{rect:t,level:e+1}}}(t.State||(t.State={})),function(t){t.empty={top:0,bottom:0}}(t.Padding||(t.Padding={})),function(t){t.root="root",t.inherit="inherit"}(e=t.ContainerType||(t.ContainerType={})),t.withViewportContainer=function(n,r){return function(_){function y(){var t=null!==_&&_.apply(this,arguments)||this;return t._viewportEl=new u.X(E.none),t._onMount=function(e){t._viewportEl.next(E.fromNullable(e)),t.props.onMount&&e&&t.props.onMount(e)},t}return(0,o.ZT)(y,_),y.prototype.render=function(){var u=this.props,_=u.name,y=u.children,g=this._viewportEl.pipe(s.oA,c.w((function(t){return a.T(f.Qr,h.R(t,"transitionend").pipe(d.h((function(e){return e.target===t}))),p.of(!0).pipe(c.w(l.b2.rafScheduler))).pipe(v.h(t),b.O(t),m.U(O.UL.fromEl))}))),w=r.type===e.root?t.RootVirtualContainer:t.InheritVirtualContainer;return i.createElement(n,(0,o.pi)({},this.props,{onMount:this._onMount,name:_}),i.createElement(w,{viewport:g,name:_},y))},y}(i.Component)},t.RootVirtualContainer=function(e){var n=e.viewport,r=e.viewportPadding,o=void 0===r?p.of(t.Padding.empty):r,u=e.name,s=e.children,c=i.useContext(t.Context);return i.createElement(t.Context.Provider,{key:A(u),value:_.aj(n,o,x).pipe(y.M(c.pipe(m.U((function(t){return t.level}))),t.State.nextLevel),g.shareReplay({bufferSize:1,refCount:!0}))},s)},t.InheritVirtualContainer=function(e){var n=e.viewport,r=e.viewportPadding,o=void 0===r?p.of(O.UL.empty):r,u=e.name,s=e.children,c=i.useContext(t.Context);return i.createElement(t.Context.Provider,{key:A(u),value:_.aj(c.pipe(m.U((function(t){return t.rect}))),_.aj(n||c.pipe(m.U((function(t){return t.rect}))),o,x),O.UL.intersection).pipe(m.U(E.getOrElse((function(){return C.C8.Logging.getLogger("InheritVirtualContainer").warn("Got an empty rect for inherit viewport",{name:u}),O.UL.empty}))),y.M(c.pipe(m.U((function(t){return t.level}))),t.State.nextLevel),g.shareReplay({bufferSize:1,refCount:!0}))},s)};var n=w.P((function(){return f.Qr.pipe(v.h(document.body),b.O(document.body),m.U(O.UL.fromEl),m.U((function(t){return{rect:t,level:0}})))})).pipe(g.shareReplay({bufferSize:1,refCount:!0}));t.Context=i.createContext(n)}(r||(r={}));var x=function(t,e){return{top:t.top+e.top,bottom:t.bottom-e.bottom,height:t.height-e.top-e.bottom,left:t.left,right:t.right,width:t.width}},A=function(t){return"viewportProvider".concat(M._A(t))}},90845:(t,e,n)=>{n.d(e,{P:()=>r});var r,o=n(27378),i=n(71249),u=n(26328),s=n(40327),c=n(38983),a=n(66310),f=n(76974),h=n(85089),d=n(93508),p=n(77176),l=n(60797),v=n(24209),b=n(80900),m=n(2834),_=n(49708),y=n(85985),g=n(22232),w=n(5114),E=n(19962);!function(t){function e(t){o.useEffect((function(){var e=t.subscribe();return function(){return e.unsubscribe()}}),[t])}t.useSubscriptionTo=e;var n=new Set;function r(){return o.useMemo((function(){var t=c.h.create(w.none);return{ref:t,onMount:function(e){return t.set(w.fromNullable(e))}}}),[])}t.useSingleton=function(t){o.useEffect((function(){return(0,g.kG)(!n.has(t),"Component ".concat(t," can be mounted only once!")),n.add(t),function(){n.delete(t)}}),[])},t.useElWatcher=r,t.useRectWatcher=function(){var t=r(),e=t.ref,n=t.onMount;return{rect:e.pipe(a.w(w.fold((function(){return f.of(w.none)}),(function(t){return h.YC(t).pipe(d.O(E.UL.fromEl(t)),p.U(w.some))})))),onMount:n}},t.useEffectOnDidMount=function(t){o.useEffect(t,[])},t.useEffectOnWillUnmount=function(t){o.useEffect((function(){return t}),[])},t.useMemoOnDidMount=function(t){return o.useMemo(t,[])},t.useAtomOf=function(e){var n=t.useMemoOnDidMount((function(){return c.h.create(e)}));return o.useEffect((function(){n.set(e)}),[e,n]),n};var O=function(t){try{t.focus({preventScroll:!0})}catch(t){return!1}return document.activeElement===t};t.useFocusTrap=function(t){e(t.pipe(p.U(w.chain((function(t){return(0,s.pipe)(t.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]'),Array.from,i.hX(O),u.nI)}))),l.oA,a.w((function(t){return v.T(b.H(0).pipe(m.b((function(){return u.YM(t).focus()}))),_.R(u.Z$(t),"keydown").pipe(y.h((function(t){return("Tab"===t.key||9===t.keyCode)&&!t.shiftKey})),m.b((function(e){return u.YM(t).focus(),e.preventDefault()}))),_.R(u.YM(t),"keydown").pipe(y.h((function(t){return("Tab"===t.key||9===t.keyCode)&&t.shiftKey})),m.b((function(e){return u.Z$(t).focus(),e.preventDefault()}))))}))))}}(r||(r={}))},85089:(t,e,n)=>{n.d(e,{YC:()=>E,n:()=>O,rl:()=>M,Qr:()=>C,Lw:()=>x});var r,o,i=n(97329),u=n(19962),s=n(8125),c=n(81531),a=n(44586),f=n(2834),h=n(18625),d=n(49708),p=n(38194),l=n(76974),v=n(66310),b=n(8175),m=n(93508),_=n(77176);function y(){return o||(o=c.C8.Logging.getLogger("denaliplatform.utils.rxdom"))}var g=null!==(r=i.default)&&void 0!==r?r:i,w=function(t){return a.y.create((function(e){var n=null;try{n=t((function(t){return e.next(t)}))}catch(t){e.error(t)}return function(){n&&n()}}))};function E(t){return w((function(e){var n=new g((function(t){self.requestAnimationFrame((function(){t.length>0?e(u.UL.fromRectLike(t[0].contentRect)):y().warn("ResizeObserver was fired but the callback didn't have any entries")}))}));return n.observe(t),function(){return n.disconnect()}})).pipe(f.b(s.Q1,(function(t){return y().error("Failed to instantiate ResizeObservable.",t)})))}function O(t,e){return w((function(n){var r=new IntersectionObserver(n,e);return r.observe(t),function(){return r.disconnect()}}))}function M(t,e){return w((function(n){var r=new MutationObserver(n);return r.observe(t,e),function(){return r.disconnect()}}))}var C=h.P((function(){return d.R(self,"resize")})).pipe(p.B());function x(t){return l.of((function(){return self.matchMedia(t)})).pipe(v.w((function(t){var e=t();return b.R((function(t){return e.addListener(t)}),(function(t){return e.removeListener(t)})).pipe(m.O(e))})),_.U((function(t){return t.matches})))}},60797:(t,e,n)=>{n.d(e,{cp:()=>c,oA:()=>a});var r=n(5114),o=n(66310),i=n(40151),u=n(76974),s=n(28043);function c(t){return o.w(r.fold((function(){return i.E}),t))}var a=c(u.of);s.x((function(t,e){return r.isNone(t)&&r.isNone(e)||r.isSome(t)&&r.isSome(e)}))},88056:(t,e,n)=>{var r;n.d(e,{Y:()=>r}),function(t){t.invariantContent=function(t){return"function"==typeof Proxy?new Proxy({},{get:function(e,n){if(null==e[n])throw new Error("Please provide context using ".concat(t,".Context.Provider"));return e[n]}}):void 0}}(r||(r={}))},97329:(t,e,n)=>{n.r(e),n.d(e,{default:()=>M});var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),o="undefined"!=typeof self&&"undefined"!=typeof document&&self.document===document,i=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math||"undefined"!=typeof self&&self.Math===Math?self:Function("return this")(),u="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var s=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,a=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&c()}function s(){u(i)}function c(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);o=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),self.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),self.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;s.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},h=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||i},d=_(0,0,0,0);function p(t){return parseFloat(t)||0}function l(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+p(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var r=h(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=p(i)}return e}(r),i=o.left+o.right,u=o.top+o.bottom,s=p(r.width),c=p(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==e&&(s-=l(r,"left","right")+i),Math.round(c+u)!==n&&(c-=l(r,"top","bottom")+u)),!function(t){return t===h(t).document.documentElement}(t)){var a=Math.round(s+i)-e,f=Math.round(c+u)-n;1!==Math.abs(a)&&(s-=a),1!==Math.abs(f)&&(c-=f)}return _(o.left,o.top,s,c)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof h(t).SVGGraphicsElement}:function(t){return t instanceof h(t).SVGElement&&"function"==typeof t.getBBox};function m(t){return o?b(t)?function(t){var e=t.getBBox();return _(0,0,e.width,e.height)}(t):v(t):d}function _(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),g=function(t,e){var n,r,o,i,u,s,c,a=(r=(n=e).x,o=n.y,i=n.width,u=n.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(s.prototype),f(c,{x:r,y:o,width:i,height:u,top:o,right:r+i,bottom:u+o,left:r}),c);f(this,{target:t,contentRect:a})},w=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof h(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new g(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=a.getInstance(),r=new w(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){O.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));const M=void 0!==i.ResizeObserver?i.ResizeObserver:O}}]);