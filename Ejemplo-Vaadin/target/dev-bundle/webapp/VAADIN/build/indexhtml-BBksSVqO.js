function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./vaadin-big-decimal-field-e51def24-C6079CW6.js","./vaadin-text-field-0b3db014-CAzqWn4A.js","./vaadin-button-2511ad84-CZwrWp2y.js","./vaadin-checkbox-group-a7c65bf2-ry_MtHk_.js","./vaadin-checkbox-4e68df64-CS_Voa7D.js","./vaadin-combo-box-96451ddd-Dq7PxKyR.js","./vaadin-confirm-dialog-4d718829-ixOW0lcn.js","./vaadin-custom-field-42c85b9e-6R53Qh-6.js","./vaadin-date-picker-f2001167-B4F-isDm.js","./vaadin-date-time-picker-c8c047a7-DmuowW7f.js","./vaadin-email-field-d7a35f04-CtKlGkE5.js","./vaadin-grid-pro-ff415555-D7AIT80N.js","./vaadin-grid-0a4791c2-BL9UZF3n.js","./vaadin-integer-field-85078932-DIQwAf0J.js","./vaadin-login-form-638996c6-BBrWI09i.js","./vaadin-login-overlay-f8a5db8a-DS2L3YqZ.js","./vaadin-message-input-996ac37c-DiWvtwVV.js","./vaadin-multi-select-combo-box-a3373557-BFldoZfY.js","./vaadin-number-field-cb3ee8b2-BPhLWcA_.js","./vaadin-password-field-d289cb18-BPmSrYGh.js","./vaadin-radio-group-88b5afd8-mi7uWhlN.js","./vaadin-select-df6e9947-DI1ra99C.js","./vaadin-text-area-83627ebc-BLC7OfZa.js","./vaadin-time-picker-715ec415-epU6xcWs.js","./vaadin-upload-d3c162ed-DrWm242N.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.reactRouter=!1;const Li="modulepreload",Mi=function(t,e){return new URL(t,e).href},Bo={},g=function(e,o,n){let i=Promise.resolve();if(o&&o.length>0){const s=document.getElementsByTagName("link");i=Promise.all(o.map(r=>{if(r=Mi(r,n),r in Bo)return;Bo[r]=!0;const l=r.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!n)for(let p=s.length-1;p>=0;p--){const h=s[p];if(h.href===r&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Li,l||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),l)return new Promise((p,h)=>{c.addEventListener("load",p),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}return i.then(()=>e()).catch(s=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s})};function _t(t){return t=t||[],Array.isArray(t)?t:[t]}function te(t){return`[Vaadin.Router] ${t}`}function Vi(t){if(typeof t!="object")return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(t)}`:e}const wt="module",Et="nomodule",co=[wt,Et];function Ho(t){if(!t.match(/.+\.[m]?js$/))throw new Error(te(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function Yn(t){if(!t||!Z(t.path))throw new Error(te('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,o=["component","redirect","bundle"];if(!we(t.action)&&!Array.isArray(t.children)&&!we(t.children)&&!xt(e)&&!o.some(n=>Z(t[n])))throw new Error(te(`Expected route config "${t.path}" to include either "${o.join('", "')}" or "action" function but none found.`));if(e)if(Z(e))Ho(e);else if(co.some(n=>n in e))co.forEach(n=>n in e&&Ho(e[n]));else throw new Error(te('Expected route bundle to include either "'+Et+'" or "'+wt+'" keys, or both'));t.redirect&&["bundle","component"].forEach(n=>{n in t&&console.warn(te(`Route config "${t.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function Wo(t){_t(t).forEach(e=>Yn(e))}function qo(t,e){let o=document.head.querySelector('script[src="'+t+'"][async]');return o||(o=document.createElement("script"),o.setAttribute("src",t),e===wt?o.setAttribute("type",wt):e===Et&&o.setAttribute(Et,""),o.async=!0),new Promise((n,i)=>{o.onreadystatechange=o.onload=s=>{o.__dynamicImportLoaded=!0,n(s)},o.onerror=s=>{o.parentNode&&o.parentNode.removeChild(o),i(s)},o.parentNode===null?document.head.appendChild(o):o.__dynamicImportLoaded&&n()})}function Di(t){return Z(t)?qo(t):Promise.race(co.filter(e=>e in t).map(e=>qo(t[e],e)))}function Be(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:t==="go",detail:e}))}function xt(t){return typeof t=="object"&&!!t}function we(t){return typeof t=="function"}function Z(t){return typeof t=="string"}function Xn(t){const e=new Error(te(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const Ie=new class{};function zi(t){const e=t.port,o=t.protocol,s=o==="http:"&&e==="80"||o==="https:"&&e==="443"?t.hostname:t.host;return`${o}//${s}`}function Go(t){if(t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const o=t.composedPath?t.composedPath():t.path||[];for(let l=0;l<o.length;l++){const a=o[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||zi(e))!==window.location.origin)return;const{pathname:i,search:s,hash:r}=e;Be("go",{pathname:i,search:s,hash:r})&&(t.preventDefault(),t&&t.type==="click"&&window.scrollTo(0,0))}const Ui={activate(){window.document.addEventListener("click",Go)},inactivate(){window.document.removeEventListener("click",Go)}},ji=/Trident/.test(navigator.userAgent);ji&&!we(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var o=document.createEvent("Event");return o.initEvent(t,!!e.bubbles,!!e.cancelable),o.state=e.state||null,o},window.PopStateEvent.prototype=window.Event.prototype);function Ko(t){if(t.state==="vaadin-router-ignore")return;const{pathname:e,search:o,hash:n}=window.location;Be("go",{pathname:e,search:o,hash:n})}const Fi={activate(){window.addEventListener("popstate",Ko)},inactivate(){window.removeEventListener("popstate",Ko)}};var Ue=ni,Bi=_o,Hi=Ki,Wi=ei,qi=oi,Qn="/",Zn="./",Gi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function _o(t,e){for(var o=[],n=0,i=0,s="",r=e&&e.delimiter||Qn,l=e&&e.delimiters||Zn,a=!1,d;(d=Gi.exec(t))!==null;){var c=d[0],p=d[1],h=d.index;if(s+=t.slice(i,h),i=h+c.length,p){s+=p[1],a=!0;continue}var b="",se=t[i],G=d[2],nt=d[3],jt=d[4],W=d[5];if(!a&&s.length){var ne=s.length-1;l.indexOf(s[ne])>-1&&(b=s[ne],s=s.slice(0,ne))}s&&(o.push(s),s="",a=!1);var Ce=b!==""&&se!==void 0&&se!==b,Te=W==="+"||W==="*",Ft=W==="?"||W==="*",re=b||r,it=nt||jt;o.push({name:G||n++,prefix:b,delimiter:re,optional:Ft,repeat:Te,partial:Ce,pattern:it?Ji(it):"[^"+ue(re)+"]+?"})}return(s||i<t.length)&&o.push(s+t.substr(i)),o}function Ki(t,e){return ei(_o(t,e))}function ei(t){for(var e=new Array(t.length),o=0;o<t.length;o++)typeof t[o]=="object"&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$"));return function(n,i){for(var s="",r=i&&i.encode||encodeURIComponent,l=0;l<t.length;l++){var a=t[l];if(typeof a=="string"){s+=a;continue}var d=n?n[a.name]:void 0,c;if(Array.isArray(d)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(d.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(c=r(d[p],a),!e[l].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(p===0?a.prefix:a.delimiter)+c}continue}if(typeof d=="string"||typeof d=="number"||typeof d=="boolean"){if(c=r(String(d),a),!e[l].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');s+=a.prefix+c;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function ue(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ji(t){return t.replace(/([=!:$/()])/g,"\\$1")}function ti(t){return t&&t.sensitive?"":"i"}function Yi(t,e){if(!e)return t;var o=t.source.match(/\((?!\?)/g);if(o)for(var n=0;n<o.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}function Xi(t,e,o){for(var n=[],i=0;i<t.length;i++)n.push(ni(t[i],e,o).source);return new RegExp("(?:"+n.join("|")+")",ti(o))}function Qi(t,e,o){return oi(_o(t,o),e,o)}function oi(t,e,o){o=o||{};for(var n=o.strict,i=o.start!==!1,s=o.end!==!1,r=ue(o.delimiter||Qn),l=o.delimiters||Zn,a=[].concat(o.endsWith||[]).map(ue).concat("$").join("|"),d=i?"^":"",c=t.length===0,p=0;p<t.length;p++){var h=t[p];if(typeof h=="string")d+=ue(h),c=p===t.length-1&&l.indexOf(h[h.length-1])>-1;else{var b=h.repeat?"(?:"+h.pattern+")(?:"+ue(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?d+=ue(h.prefix)+"("+b+")?":d+="(?:"+ue(h.prefix)+"("+b+"))?":d+=ue(h.prefix)+"("+b+")"}}return s?(n||(d+="(?:"+r+")?"),d+=a==="$"?"$":"(?="+a+")"):(n||(d+="(?:"+r+"(?="+a+"))?"),c||(d+="(?="+r+"|"+a+")")),new RegExp(d,ti(o))}function ni(t,e,o){return t instanceof RegExp?Yi(t,e):Array.isArray(t)?Xi(t,e,o):Qi(t,e,o)}Ue.parse=Bi;Ue.compile=Hi;Ue.tokensToFunction=Wi;Ue.tokensToRegExp=qi;const{hasOwnProperty:Zi}=Object.prototype,ho=new Map;ho.set("|false",{keys:[],pattern:/(?:)/});function Jo(t){try{return decodeURIComponent(t)}catch{return t}}function es(t,e,o,n,i){o=!!o;const s=`${t}|${o}`;let r=ho.get(s);if(!r){const d=[];r={keys:d,pattern:Ue(t,d,{end:o,strict:t===""})},ho.set(s,r)}const l=r.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let d=1;d<l.length;d++){const c=r.keys[d-1],p=c.name,h=l[d];(h!==void 0||!Zi.call(a,p))&&(c.repeat?a[p]=h?h.split(c.delimiter).map(Jo):[]:a[p]=h&&Jo(h))}return{path:l[0],keys:(n||[]).concat(r.keys),params:a}}function ii(t,e,o,n,i){let s,r,l=0,a=t.path||"";return a.charAt(0)==="/"&&(o&&(a=a.substr(1)),o=!0),{next(d){if(t===d)return{done:!0};const c=t.__children=t.__children||t.children;if(!s&&(s=es(a,e,!c,n,i),s))return{done:!1,value:{route:t,keys:s.keys,params:s.params,path:s.path}};if(s&&c)for(;l<c.length;){if(!r){const h=c[l];h.parent=t;let b=s.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),r=ii(h,e.substr(b),o,s.keys,s.params)}const p=r.next(d);if(!p.done)return{done:!1,value:p.value};r=null,l++}return{done:!0}}}}function ts(t){if(we(t.route.action))return t.route.action(t)}function os(t,e){let o=e;for(;o;)if(o=o.parent,o===t)return!0;return!1}function ns(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const o=(t.route||{}).path;return o&&(e+=` Resolution had failed on route: '${o}'`),e}function is(t,e){const{route:o,path:n}=e;if(o&&!o.__synthetic){const i={path:n,route:o};if(!t.chain)t.chain=[];else if(o.parent){let s=t.chain.length;for(;s--&&t.chain[s].route&&t.chain[s].route!==o.parent;)t.chain.pop()}t.chain.push(i)}}class We{constructor(e,o={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=o.baseUrl||"",this.errorHandler=o.errorHandler,this.resolveRoute=o.resolveRoute||ts,this.context=Object.assign({resolver:this},o.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Wo(e);const o=[..._t(e)];this.root.__children=o}addRoutes(e){return Wo(e),this.root.__children.push(..._t(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const o=Object.assign({},this.context,Z(e)?{pathname:e}:e),n=ii(this.root,this.__normalizePathname(o.pathname),this.baseUrl),i=this.resolveRoute;let s=null,r=null,l=o;function a(d,c=s.value.route,p){const h=p===null&&s.value.route;return s=r||n.next(h),r=null,!d&&(s.done||!os(c,s.value.route))?(r=s,Promise.resolve(Ie)):s.done?Promise.reject(Xn(o)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},o,s.value),is(l,s.value),Promise.resolve(i(l)).then(b=>b!=null&&b!==Ie?(l.result=b.result||b,l):a(d,c,b)))}return o.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(d=>{const c=ns(l);if(d?console.warn(c):d=new Error(c),d.context=d.context||l,d instanceof DOMException||(d.code=d.code||500),this.errorHandler)return l.result=this.errorHandler(d),l;throw d})}static __createUrl(e,o){return new URL(e,o)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const o=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,o).href;if(n.slice(0,o.length)===o)return n.slice(o.length)}}We.pathToRegexp=Ue;const{pathToRegexp:Yo}=We,Xo=new Map;function si(t,e,o){const n=e.name||e.component;if(n&&(t.has(n)?t.get(n).push(e):t.set(n,[e])),Array.isArray(o))for(let i=0;i<o.length;i++){const s=o[i];s.parent=e,si(t,s,s.__children||s.children)}}function Qo(t,e){const o=t.get(e);if(o&&o.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return o&&o[0]}function Zo(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function ss(t,e={}){if(!(t instanceof We))throw new TypeError("An instance of Resolver is expected");const o=new Map;return(n,i)=>{let s=Qo(o,n);if(!s&&(o.clear(),si(o,t.root,t.root.__children),s=Qo(o,n),!s))throw new Error(`Route "${n}" not found`);let r=Xo.get(s.fullPath);if(!r){let a=Zo(s),d=s.parent;for(;d;){const b=Zo(d);b&&(a=b.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),d=d.parent}const c=Yo.parse(a),p=Yo.tokensToFunction(c),h=Object.create(null);for(let b=0;b<c.length;b++)Z(c[b])||(h[c[b].name]=!0);r={toPath:p,keys:h},Xo.set(a,r),s.fullPath=a}let l=r.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},d=Object.keys(i);for(let p=0;p<d.length;p++){const h=d[p];r.keys[h]||(a[h]=i[h])}const c=e.stringifyQueryParams(a);c&&(l+=c.charAt(0)==="?"?c:`?${c}`)}return l}}let en=[];function rs(t){en.forEach(e=>e.inactivate()),t.forEach(e=>e.activate()),en=t}const as=t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&e!=="none"},ls=(t,e)=>{const o=()=>{t.removeEventListener("animationend",o),e()};t.addEventListener("animationend",o)};function tn(t,e){return t.classList.add(e),new Promise(o=>{if(as(t)){const n=t.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${i}`),ls(t,()=>{t.classList.remove(e),t.removeAttribute("style"),o()})}else t.classList.remove(e),o()})}const ds=256;function qt(t){return t!=null}function cs(t){const e=Object.assign({},t);return delete e.next,e}function K({pathname:t="",search:e="",hash:o="",chain:n=[],params:i={},redirectFrom:s,resolver:r},l){const a=n.map(d=>d.route);return{baseUrl:r&&r.baseUrl||"",pathname:t,search:e,hash:o,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(d={})=>ft(pe.pathToRegexp.compile(ri(a))(Object.assign({},i,d)),r)}}function on(t,e){const o=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:o}}}function hs(t,e){e.location=K(t);const o=t.chain.map(n=>n.route).indexOf(t.route);return t.chain[o].element=e,e}function mt(t,e,o){if(we(t))return t.apply(o,e)}function nn(t,e,o){return n=>{if(n&&(n.cancel||n.redirect))return n;if(o)return mt(o[t],e,o)}}function us(t,e){if(!Array.isArray(t)&&!xt(t))throw new Error(te(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const o=_t(t);for(let n=0;n<o.length;n++)Yn(o[n]),e.__children.push(o[n])}function dt(t){if(t&&t.length){const e=t[0].parentNode;for(let o=0;o<t.length;o++)e.removeChild(t[o])}}function ft(t,e){const o=e.__effectiveBaseUrl;return o?e.constructor.__createUrl(t.replace(/^\//,""),o).pathname:t}function ri(t){return t.map(e=>e.path).reduce((e,o)=>o.length?e.replace(/\/$/,"")+"/"+o.replace(/^\//,""):e,"")}class pe extends We{constructor(e,o){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&We.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},o)),this.resolveRoute=r=>this.__resolveRoute(r);const s=pe.NavigationTrigger;pe.setTriggers.apply(pe,Object.keys(s).map(r=>s[r])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=K({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const o=e.route;let n=Promise.resolve();we(o.children)&&(n=n.then(()=>o.children(cs(e))).then(s=>{!qt(s)&&!we(o.children)&&(s=o.children),us(s,o)}));const i={redirect:s=>on(e,s),component:s=>{const r=document.createElement(s);return this.__createdByRouter.set(r,!0),r}};return n.then(()=>{if(this.__isLatestRender(e))return mt(o.action,[e,i],o)}).then(s=>{if(qt(s)&&(s instanceof HTMLElement||s.redirect||s===Ie))return s;if(Z(o.redirect))return i.redirect(o.redirect);if(o.bundle)return Di(o.bundle).then(()=>{},()=>{throw new Error(te(`Bundle not found: ${o.bundle}. Check if the file name is correct`))})}).then(s=>{if(qt(s))return s;if(Z(o.component))return i.component(o.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,o=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),o||this.__onNavigationEvent(),this.ready}render(e,o){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},Z(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const r=this.__previousContext;if(s===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=K(s),o&&this.__updateBrowserHistory(s,n===1),Be("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,r),this.__previousContext=s,this.location;this.__addAppearingContent(s,r);const l=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,r),l.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(n===this.__lastStartedRenderId)throw o&&this.__updateBrowserHistory(i),dt(this.__outlet&&this.__outlet.children),this.location=K(Object.assign(i,{resolver:this})),Be("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(e,o=e){return this.__findComponentContextAfterAllRedirects(o).then(n=>{const s=n!==o?n:e,l=ft(ri(n.chain),n.resolver)===n.pathname,a=(d,c=d.route,p)=>d.next(void 0,c,p).then(h=>h===null||h===Ie?l?d:c.parent!==null?a(d,c.parent,h):h:h);return a(n).then(d=>{if(d===null||d===Ie)throw Xn(s);return d&&d!==Ie&&d!==n?this.__fullyResolveChain(s,d):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(e){const o=e.result;return o instanceof HTMLElement?(hs(e,o),Promise.resolve(e)):o.redirect?this.__redirect(o.redirect,e.__redirectCount,e.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):o instanceof Error?Promise.reject(o):Promise.reject(new Error(te(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${Vi(o)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(o=>o===this.__previousContext||o===e?o:this.__fullyResolveChain(o))}__runOnBeforeCallbacks(e){const o=this.__previousContext||{},n=o.chain||[],i=e.chain;let s=Promise.resolve();const r=()=>({cancel:!0}),l=a=>on(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===n.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,o.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:r},n[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:r,redirect:l},i[a]),n[a].element.location=K(e,n[a].route)}else for(let a=n.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:r},n[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=K(e,n[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:r,redirect:l},i[a]),i[a].element&&(i[a].element.location=K(e,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,o,n,i){const s=K(o);return e.then(r=>{if(this.__isLatestRender(o))return nn("onBeforeLeave",[s,n,this],i.element)(r)}).then(r=>{if(!(r||{}).redirect)return r})}__runOnBeforeEnterCallbacks(e,o,n,i){const s=K(o,i.route);return e.then(r=>{if(this.__isLatestRender(o))return nn("onBeforeEnter",[s,n,this],i.element)(r)})}__isReusableElement(e,o){return e&&o?this.__createdByRouter.get(e)&&this.__createdByRouter.get(o)?e.localName===o.localName:e===o:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,o,n){if(o>ds)throw new Error(te(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(o||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(te(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:o="",hash:n=""},i){if(window.location.pathname!==e||window.location.search!==o||window.location.hash!==n){const s=i?"replaceState":"pushState";window.history[s](null,document.title,e+o+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,o){let n=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const s=o&&o.chain[i].element;if(s)if(s.parentNode===n)e.chain[i].element=s,n=s;else break}return n}__addAppearingContent(e,o){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,o);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let i=n;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const r=e.chain[s].element;r&&(i.appendChild(r),this.__addedByRouter.set(r,!0),i===n&&this.__appearingContent.push(r),i=r)}}__removeDisappearingContent(){this.__disappearingContent&&dt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(dt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,o){if(o)for(let n=o.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const i=o.chain[n].element;if(i)try{const s=K(e);mt(i.onAfterLeave,[s,{},o.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&dt(i.children)}}}__runOnAfterEnterCallbacks(e){for(let o=e.__divergedChainIndex;o<e.chain.length&&this.__isLatestRender(e);o++){const n=e.chain[o].element||{},i=K(e,e.chain[o].route);mt(n.onAfterEnter,[i,{},e.resolver],n)}}__animateIfNeeded(e){const o=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],s=e.chain;let r;for(let l=s.length;l>0;l--)if(s[l-1].route.animate){r=s[l-1].route.animate;break}if(o&&n&&r){const l=xt(r)&&r.leave||"leaving",a=xt(r)&&r.enter||"entering";i.push(tn(o,l)),i.push(tn(n,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:o,search:n,hash:i}=e?e.detail:window.location;Z(this.__normalizePathname(o))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:o,search:n,hash:i},!0))}static setTriggers(...e){rs(e)}urlForName(e,o){return this.__urlForName||(this.__urlForName=ss(this)),ft(this.__urlForName(e,o),this)}urlForPath(e,o){return ft(pe.pathToRegexp.compile(e)(o),this)}static go(e){const{pathname:o,search:n,hash:i}=Z(e)?this.__createUrl(e,"http://a"):e;return Be("go",{pathname:o,search:n,hash:i})}}const ps=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,vt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ms(){function t(){return!0}return ai(t)}function fs(){try{return vs()?!0:gs()?vt?!ys():!ms():!1}catch{return!1}}function vs(){return localStorage.getItem("vaadin.developmentmode.force")}function gs(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ys(){return!!(vt&&Object.keys(vt).map(e=>vt[e]).filter(e=>e.productionMode).length>0)}function ai(t,e){if(typeof t!="function")return;const o=ps.exec(t.toString());if(o)try{t=new Function(o[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return t(e)}window.Vaadin=window.Vaadin||{};const sn=function(t,e){if(window.Vaadin.developmentMode)return ai(t,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=fs());function bs(){}const _s=function(){if(typeof sn=="function")return sn(bs)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});_s();pe.NavigationTrigger={POPSTATE:Fi,CLICK:Ui};var Gt,A;(function(t){t.CONNECTED="connected",t.LOADING="loading",t.RECONNECTING="reconnecting",t.CONNECTION_LOST="connection-lost"})(A||(A={}));class ws{constructor(e){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=e,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(o=>{var n;(n=o.active)===null||n===void 0||n.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(e){this.stateChangeListeners.add(e)}removeStateChangeListener(e){this.stateChangeListeners.delete(e)}loadingStarted(){this.state=A.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(A.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(A.CONNECTION_LOST)}decreaseLoadingCount(e){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=e))}get state(){return this.connectionState}set state(e){if(e!==this.connectionState){const o=this.connectionState;this.connectionState=e,this.loadingCount=0;for(const n of this.stateChangeListeners)n(o,this.connectionState)}}get online(){return this.connectionState===A.CONNECTED||this.connectionState===A.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(e){typeof e.data=="object"&&e.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(e.data.result===!0&&(this.state=A.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const Es=t=>!!(t==="localhost"||t==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(t)),ct=window;if(!(!((Gt=ct.Vaadin)===null||Gt===void 0)&&Gt.connectionState)){let t;Es(window.location.hostname)?t=!0:t=navigator.onLine,ct.Vaadin||(ct.Vaadin={}),ct.Vaadin.connectionState=new ws(t?A.CONNECTED:A.CONNECTION_LOST)}function H(t,e,o,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=!1,gt=globalThis,wo=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Eo=Symbol(),rn=new WeakMap;class xo{constructor(e,o,n){if(this._$cssResult$=!0,n!==Eo)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=o}get styleSheet(){let e=this._styleSheet;const o=this._strings;if(wo&&e===void 0){const n=o!==void 0&&o.length===1;n&&(e=rn.get(o)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),n&&rn.set(o,e))}return e}toString(){return this.cssText}}const Ss=t=>{if(t._$cssResult$===!0)return t.cssText;if(typeof t=="number")return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},li=t=>new xo(typeof t=="string"?t:String(t),void 0,Eo),k=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((n,i,s)=>n+Ss(i)+t[s+1],t[0]);return new xo(o,t,Eo)},Cs=(t,e)=>{if(wo)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const n=document.createElement("style"),i=gt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=o.cssText,t.appendChild(n)}},Ts=t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return li(e)},an=wo||xs?t=>t:t=>t instanceof CSSStyleSheet?Ts(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ks,defineProperty:$s,getOwnPropertyDescriptor:ln,getOwnPropertyNames:As,getOwnPropertySymbols:Rs,getPrototypeOf:dn}=Object,j=globalThis;let Q;const cn=j.trustedTypes,Ns=cn?cn.emptyScript:"",yt=j.reactiveElementPolyfillSupportDevMode;var qn;{const t=j.litIssuedWarnings??(j.litIssuedWarnings=new Set);Q=(e,o)=>{o+=` See https://lit.dev/msg/${e} for more information.`,t.has(o)||(console.warn(o),t.add(o))},Q("dev-mode","Lit is in dev mode. Not recommended for production!"),(qn=j.ShadyDOM)!=null&&qn.inUse&&yt===void 0&&Q("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const Kt=t=>{j.emitLitDebugLogEvents&&j.dispatchEvent(new CustomEvent("lit-debug",{detail:t}))},Pe=(t,e)=>t,St={toAttribute(t,e){switch(e){case Boolean:t=t?Ns:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t);break}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}break}return o}},So=(t,e)=>!ks(t,e),hn={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:So};Symbol.metadata??(Symbol.metadata=Symbol("metadata"));j.litPropertyMetadata??(j.litPropertyMetadata=new WeakMap);class de extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??(this._initializers=[])).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,o=hn){if(o.state&&(o.attribute=!1),this.__prepare(),this.elementProperties.set(e,o),!o.noAccessor){const n=Symbol.for(`${String(e)} (@property() cache)`),i=this.getPropertyDescriptor(e,n,o);i!==void 0&&$s(this.prototype,e,i)}}static getPropertyDescriptor(e,o,n){const{get:i,set:s}=ln(this.prototype,e)??{get(){return this[o]},set(r){this[o]=r}};if(i==null){if("value"in(ln(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);Q("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return i==null?void 0:i.call(this)},set(r){const l=i==null?void 0:i.call(this);s.call(this,r),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??hn}static __prepare(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=dn(this);e.finalize(),e._initializers!==void 0&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(Pe("properties"))){const o=this.properties,n=[...As(o),...Rs(o)];for(const i of n)this.createProperty(i,o[i])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[n,i]of o)this.elementProperties.set(n,i)}this.__attributeToPropertyMap=new Map;for(const[o,n]of this.elementProperties){const i=this.__attributeNameForProperty(o,n);i!==void 0&&this.__attributeToPropertyMap.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&Q("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&Q("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)o.unshift(an(i))}else e!==void 0&&o.push(an(e));return o}static __attributeNameForProperty(e,o){const n=o.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){var e;this.__updatePromise=new Promise(o=>this.enableUpdating=o),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)==null||e.forEach(o=>o(this))}addController(e){var o;(this.__controllers??(this.__controllers=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this.__controllers)==null||o.delete(e)}__saveInstanceProperties(){const e=new Map,o=this.constructor.elementProperties;for(const n of o.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)==null||e.forEach(o=>{var n;return(n=o.hostConnected)==null?void 0:n.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)==null||e.forEach(o=>{var n;return(n=o.hostDisconnected)==null?void 0:n.call(o)})}attributeChangedCallback(e,o,n){this._$attributeToProperty(e,n)}__propertyToAttribute(e,o){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor.__attributeNameForProperty(e,i);if(s!==void 0&&i.reflect===!0){const a=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:St).toAttribute(o,i.type);this.constructor.enabledWarnings.includes("migration")&&a===void 0&&Q("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this.__reflectingProperty=null}}_$attributeToProperty(e,o){var s;const n=this.constructor,i=n.__attributeToPropertyMap.get(e);if(i!==void 0&&this.__reflectingProperty!==i){const r=n.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)==null?void 0:s.fromAttribute)!==void 0?r.converter:St;this.__reflectingProperty=i,this[i]=l.fromAttribute(o,r.type),this.__reflectingProperty=null}}requestUpdate(e,o,n){if(e!==void 0){e instanceof Event&&Q("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),n??(n=this.constructor.getPropertyOptions(e));const i=n.hasChanged??So,s=this[e];if(i(s,o))this._$changeProperty(e,o,n);else return}this.isUpdatePending===!1&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,o,n){this._$changedProperties.has(e)||this._$changedProperties.set(e,o),n.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties??(this.__reflectingProperties=new Set)).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&typeof(e==null?void 0:e.then)=="function"&&Q("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){var n;if(!this.isUpdatePending)return;if(Kt==null||Kt({kind:"update"}),!this.hasUpdated){this.renderRoot??(this.renderRoot=this.createRenderRoot());{const r=[...this.constructor.elementProperties.keys()].filter(l=>this.hasOwnProperty(l)&&l in dn(this));if(r.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${r.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[s,r]of this.__instanceProperties)this[s]=r;this.__instanceProperties=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i)r.wrapped===!0&&!this._$changedProperties.has(s)&&this[s]!==void 0&&this._$changeProperty(s,this[s],r)}let e=!1;const o=this._$changedProperties;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(n=this.__controllers)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(o)):this.__markUpdated()}catch(i){throw e=!1,this.__markUpdated(),i}e&&this._$didUpdate(o)}willUpdate(e){}_$didUpdate(e){var o;(o=this.__controllers)==null||o.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&Q("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&(this.__reflectingProperties=this.__reflectingProperties.forEach(o=>this.__propertyToAttribute(o,this[o]))),this.__markUpdated()}updated(e){}firstUpdated(e){}}de.elementStyles=[];de.shadowRootOptions={mode:"open"};de[Pe("elementProperties")]=new Map;de[Pe("finalized")]=new Map;yt==null||yt({ReactiveElement:de});{de.enabledWarnings=["change-in-update","async-perform-update"];const t=function(e){e.hasOwnProperty(Pe("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};de.enableWarning=function(e){t(this),this.enabledWarnings.includes(e)||this.enabledWarnings.push(e)},de.disableWarning=function(e){t(this);const o=this.enabledWarnings.indexOf(e);o>=0&&this.enabledWarnings.splice(o,1)}}(j.reactiveElementVersions??(j.reactiveElementVersions=[])).push("2.0.4");j.reactiveElementVersions.length>1&&Q("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,E=t=>{D.emitLitDebugLogEvents&&D.dispatchEvent(new CustomEvent("lit-debug",{detail:t}))};let Is=0,qe;D.litIssuedWarnings??(D.litIssuedWarnings=new Set),qe=(t,e)=>{e+=t?` See https://lit.dev/msg/${t} for more information.`:"",D.litIssuedWarnings.has(e)||(console.warn(e),D.litIssuedWarnings.add(e))},qe("dev-mode","Lit is in dev mode. Not recommended for production!");var Gn,Kn;const X=(Gn=D.ShadyDOM)!=null&&Gn.inUse&&((Kn=D.ShadyDOM)==null?void 0:Kn.noPatch)===!0?D.ShadyDOM.wrap:t=>t,Ct=D.trustedTypes,un=Ct?Ct.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ps=t=>t,zt=(t,e,o)=>Ps,Os=t=>{if(Se!==zt)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");Se=t},Ls=()=>{Se=zt},uo=(t,e,o)=>Se(t,e,o),di="$lit$",ae=`lit$${Math.random().toFixed(9).slice(2)}$`,ci="?"+ae,Ms=`<${ci}>`,Ee=document,Ge=()=>Ee.createComment(""),Ke=t=>t===null||typeof t!="object"&&typeof t!="function",hi=Array.isArray,Vs=t=>hi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Jt=`[ 	
\f\r]`,Ds=`[^ 	
\f\r"'\`<>=]`,zs=`[^\\s"'>=/]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pn=1,Yt=2,Us=3,mn=/-->/g,fn=/>/g,ve=new RegExp(`>|${Jt}(?:(${zs}+)(${Jt}*=${Jt}*(?:${Ds}|("|')|))|$)`,"g"),js=0,vn=1,Fs=2,gn=3,Xt=/'/g,Qt=/"/g,ui=/^(?:script|style|textarea|title)$/i,Bs=1,Tt=2,Co=1,kt=2,Hs=3,Ws=4,qs=5,To=6,Gs=7,pi=t=>(e,...o)=>(e.some(n=>n===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),o.some(n=>n==null?void 0:n._$litStatic$)&&qe("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`),{_$litType$:t,strings:e,values:o}),y=pi(Bs),Ne=pi(Tt),xe=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),yn=new WeakMap,be=Ee.createTreeWalker(Ee,129);let Se=zt;function mi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw")){let o="invalid template strings array";throw o=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(o)}return un!==void 0?un.createHTML(e):e}const Ks=(t,e)=>{const o=t.length-1,n=[];let i=e===Tt?"<svg>":"",s,r=je;for(let a=0;a<o;a++){const d=t[a];let c=-1,p,h=0,b;for(;h<d.length&&(r.lastIndex=h,b=r.exec(d),b!==null);)if(h=r.lastIndex,r===je){if(b[pn]==="!--")r=mn;else if(b[pn]!==void 0)r=fn;else if(b[Yt]!==void 0)ui.test(b[Yt])&&(s=new RegExp(`</${b[Yt]}`,"g")),r=ve;else if(b[Us]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else r===ve?b[js]===">"?(r=s??je,c=-1):b[vn]===void 0?c=-2:(c=r.lastIndex-b[Fs].length,p=b[vn],r=b[gn]===void 0?ve:b[gn]==='"'?Qt:Xt):r===Qt||r===Xt?r=ve:r===mn||r===fn?r=je:(r=ve,s=void 0);console.assert(c===-1||r===ve||r===Xt||r===Qt,"unexpected parse state B");const se=r===ve&&t[a+1].startsWith("/>")?" ":"";i+=r===je?d+Ms:c>=0?(n.push(p),d.slice(0,c)+di+d.slice(c)+ae+se):d+ae+(c===-2?a:se)}const l=i+(t[o]||"<?>")+(e===Tt?"</svg>":"");return[mi(t,l),n]};class Je{constructor({strings:e,["_$litType$"]:o},n){this.parts=[];let i,s=0,r=0;const l=e.length-1,a=this.parts,[d,c]=Ks(e,o);if(this.el=Je.createElement(d,n),be.currentNode=this.el.content,o===Tt){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=be.nextNode())!==null&&a.length<l;){if(i.nodeType===1){{const p=i.localName;if(/^(?:textarea|template)$/i.test(p)&&i.innerHTML.includes(ae)){const h=`Expressions are not supported inside \`${p}\` elements. See https://lit.dev/msg/expression-in-${p} for more information.`;if(p==="template")throw new Error(h);qe("",h)}}if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(di)){const h=c[r++],se=i.getAttribute(p).split(ae),G=/([.?@])?(.*)/.exec(h);a.push({type:Co,index:s,name:G[2],strings:se,ctor:G[1]==="."?Ys:G[1]==="?"?Xs:G[1]==="@"?Qs:Ut}),i.removeAttribute(p)}else p.startsWith(ae)&&(a.push({type:To,index:s}),i.removeAttribute(p));if(ui.test(i.tagName)){const p=i.textContent.split(ae),h=p.length-1;if(h>0){i.textContent=Ct?Ct.emptyScript:"";for(let b=0;b<h;b++)i.append(p[b],Ge()),be.nextNode(),a.push({type:kt,index:++s});i.append(p[h],Ge())}}}else if(i.nodeType===8)if(i.data===ci)a.push({type:kt,index:s});else{let h=-1;for(;(h=i.data.indexOf(ae,h+1))!==-1;)a.push({type:Gs,index:s}),h+=ae.length-1}s++}if(c.length!==r)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");E&&E({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,o){const n=Ee.createElement("template");return n.innerHTML=e,n}}function Le(t,e,o=t,n){var r,l;if(e===xe)return e;let i=n!==void 0?(r=o.__directives)==null?void 0:r[n]:o.__directive;const s=Ke(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$notifyDirectiveConnectionChanged)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$initialize(t,o,n)),n!==void 0?(o.__directives??(o.__directives=[]))[n]=i:o.__directive=i),i!==void 0&&(e=Le(t,i._$resolve(t,e.values),i,n)),e}class Js{constructor(e,o){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=o}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:o},parts:n}=this._$template,i=((e==null?void 0:e.creationScope)??Ee).importNode(o,!0);be.currentNode=i;let s=be.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===kt?d=new et(s,s.nextSibling,this,e):a.type===Co?d=new a.ctor(s,a.name,a.strings,this,e):a.type===To&&(d=new Zs(s,this,e)),this._$parts.push(d),a=n[++l]}r!==(a==null?void 0:a.index)&&(s=be.nextNode(),r++)}return be.currentNode=Ee,i}_update(e){let o=0;for(const n of this._$parts)n!==void 0&&(E&&E({kind:"set part",part:n,value:e[o],valueIndex:o,values:e,templateInstance:this}),n.strings!==void 0?(n._$setValue(e,n,o),o+=n.strings.length-2):n._$setValue(e[o])),o++}}class et{get _$isConnected(){var e;return((e=this._$parent)==null?void 0:e._$isConnected)??this.__isConnected}constructor(e,o,n,i){this.type=kt,this._$committedValue=$,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=o,this._$parent=n,this.options=i,this.__isConnected=(i==null?void 0:i.isConnected)??!0,this._textSanitizer=void 0}get parentNode(){let e=X(this._$startNode).parentNode;const o=this._$parent;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,o=this){var n;if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=Le(this,e,o),Ke(e))e===$||e==null||e===""?(this._$committedValue!==$&&(E&&E({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=$):e!==this._$committedValue&&e!==xe&&this._commitText(e);else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(((n=this.options)==null?void 0:n.host)===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else Vs(e)?this._commitIterable(e):this._commitText(e)}_insert(e){return X(X(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){var o;if(this._$committedValue!==e){if(this._$clear(),Se!==zt){const n=(o=this._$startNode.parentNode)==null?void 0:o.nodeName;if(n==="STYLE"||n==="SCRIPT"){let i="Forbidden";throw n==="STYLE"?i="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":i="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(i)}}E&&E({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==$&&Ke(this._$committedValue)){const o=X(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=uo(o,"data","property")),e=this._textSanitizer(e),E&&E({kind:"commit text",node:o,value:e,options:this.options}),o.data=e}else{const o=Ee.createTextNode("");this._commitNode(o),this._textSanitizer===void 0&&(this._textSanitizer=uo(o,"data","property")),e=this._textSanitizer(e),E&&E({kind:"commit text",node:o,value:e,options:this.options}),o.data=e}this._$committedValue=e}_commitTemplateResult(e){var s;const{values:o,["_$litType$"]:n}=e,i=typeof n=="number"?this._$getTemplate(e):(n.el===void 0&&(n.el=Je.createElement(mi(n.h,n.h[0]),this.options)),n);if(((s=this._$committedValue)==null?void 0:s._$template)===i)E&&E({kind:"template updating",template:i,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:o}),this._$committedValue._update(o);else{const r=new Js(i,this),l=r._clone(this.options);E&&E({kind:"template instantiated",template:i,instance:r,parts:r._$parts,options:this.options,fragment:l,values:o}),r._update(o),E&&E({kind:"template instantiated and updated",template:i,instance:r,parts:r._$parts,options:this.options,fragment:l,values:o}),this._commitNode(l),this._$committedValue=r}}_$getTemplate(e){let o=yn.get(e.strings);return o===void 0&&yn.set(e.strings,o=new Je(e)),o}_commitIterable(e){hi(this._$committedValue)||(this._$committedValue=[],this._$clear());const o=this._$committedValue;let n=0,i;for(const s of e)n===o.length?o.push(i=new et(this._insert(Ge()),this._insert(Ge()),this,this.options)):i=o[n],i._$setValue(s),n++;n<o.length&&(this._$clear(i&&X(i._$endNode).nextSibling,n),o.length=n)}_$clear(e=X(this._$startNode).nextSibling,o){var n;for((n=this._$notifyConnectionChanged)==null||n.call(this,!1,!0,o);e&&e!==this._$endNode;){const i=X(e).nextSibling;X(e).remove(),e=i}}setConnected(e){var o;if(this._$parent===void 0)this.__isConnected=e,(o=this._$notifyConnectionChanged)==null||o.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}}class Ut{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,o,n,i,s){this.type=Co,this._$committedValue=$,this._$disconnectableChildren=void 0,this.element=e,this.name=o,this._$parent=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$committedValue=new Array(n.length-1).fill(new String),this.strings=n):this._$committedValue=$,this._sanitizer=void 0}_$setValue(e,o=this,n,i){const s=this.strings;let r=!1;if(s===void 0)e=Le(this,e,o,0),r=!Ke(e)||e!==this._$committedValue&&e!==xe,r&&(this._$committedValue=e);else{const l=e;e=s[0];let a,d;for(a=0;a<s.length-1;a++)d=Le(this,l[n+a],o,a),d===xe&&(d=this._$committedValue[a]),r||(r=!Ke(d)||d!==this._$committedValue[a]),d===$?e=$:e!==$&&(e+=(d??"")+s[a+1]),this._$committedValue[a]=d}r&&!i&&this._commitValue(e)}_commitValue(e){e===$?X(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=Se(this.element,this.name,"attribute")),e=this._sanitizer(e??""),E&&E({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),X(this.element).setAttribute(this.name,e??""))}}class Ys extends Ut{constructor(){super(...arguments),this.type=Hs}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=Se(this.element,this.name,"property")),e=this._sanitizer(e),E&&E({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===$?void 0:e}}class Xs extends Ut{constructor(){super(...arguments),this.type=Ws}_commitValue(e){E&&E({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==$),options:this.options}),X(this.element).toggleAttribute(this.name,!!e&&e!==$)}}class Qs extends Ut{constructor(e,o,n,i,s){if(super(e,o,n,i,s),this.type=qs,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${o}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,o=this){if(e=Le(this,e,o,0)??$,e===xe)return;const n=this._$committedValue,i=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==$&&(n===$||i);E&&E({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:i,addListener:s,oldListener:n}),i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var o;typeof this._$committedValue=="function"?this._$committedValue.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$committedValue.handleEvent(e)}}class Zs{constructor(e,o,n){this.element=e,this.type=To,this._$disconnectableChildren=void 0,this._$parent=o,this.options=n}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){E&&E({kind:"commit to element binding",element:this.element,value:e,options:this.options}),Le(this,e)}}const Zt=D.litHtmlPolyfillSupportDevMode;Zt==null||Zt(Je,et);(D.litHtmlVersions??(D.litHtmlVersions=[])).push("3.1.3");D.litHtmlVersions.length>1&&qe("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const _e=(t,e,o)=>{if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const n=Is++,i=(o==null?void 0:o.renderBefore)??e;let s=i._$litPart$;if(E&&E({kind:"begin render",id:n,value:t,container:e,options:o,part:s}),s===void 0){const r=(o==null?void 0:o.renderBefore)??null;i._$litPart$=s=new et(e.insertBefore(Ge(),r),r,void 0,o??{})}return s._$setValue(t),E&&E({kind:"end render",id:n,value:t,container:e,options:o,part:s}),s};_e.setSanitizer=Os,_e.createSanitizer=uo,_e._testOnlyClearSanitizerFactoryDoNotCallOrElse=Ls;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const er=(t,e)=>t;let fi;{const t=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);fi=(e,o)=>{o+=` See https://lit.dev/msg/${e} for more information.`,t.has(o)||(console.warn(o),t.add(o))}}class N extends de{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=_e(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)==null||e.setConnected(!1)}render(){return xe}}N._$litElement$=!0;N[er("finalized")]=!0;var Jn;(Jn=globalThis.litElementHydrateSupport)==null||Jn.call(globalThis,{LitElement:N});const eo=globalThis.litElementPolyfillSupportDevMode;eo==null||eo({LitElement:N});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");globalThis.litElementVersions.length>1&&fi("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vi;{const t=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);vi=(e,o)=>{o+=` See https://lit.dev/msg/${e} for more information.`,t.has(o)||(console.warn(o),t.add(o))}}const tr=(t,e,o)=>{const n=e.hasOwnProperty(o);return e.constructor.createProperty(o,n?{...t,wrapped:!0}:t),n?Object.getOwnPropertyDescriptor(e,o):void 0},or={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:So},nr=(t=or,e,o)=>{const{kind:n,metadata:i}=o;i==null&&vi("missing-class-metadata",`The class ${e} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(o.name,t),n==="accessor"){const{name:r}=o;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,t)},init(l){return l!==void 0&&this._$changeProperty(r,void 0,t),l}}}else if(n==="setter"){const{name:r}=o;return function(l){const a=this[r];e.call(this,l),this.requestUpdate(r,a,t)}}throw new Error(`Unsupported decorator location: ${n}`)};function _(t){return(e,o)=>typeof o=="object"?nr(t,e,o):tr(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(t){return _({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ir=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let gi;{const t=globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);gi=(e,o)=>{o+=e?` See https://lit.dev/msg/${e} for more information.`:"",t.has(o)||(console.warn(o),t.add(o))}}function tt(t,e){return(o,n,i)=>{const s=r=>{var a;const l=((a=r.renderRoot)==null?void 0:a.querySelector(t))??null;if(l===null&&e&&!r.hasUpdated){const d=typeof n=="object"?n.name:n;gi("",`@query'd field ${JSON.stringify(String(d))} with the 'cache' flag set for selector '${t}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return l};return ir(o,n,{get(){return s(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rr=t=>(...e)=>({_$litDirective$:t,values:e});class ar{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,o,n){this.__part=e,this._$parent=o,this.__attributeIndex=n}_$resolve(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lr extends ar{constructor(e){var o;if(super(e),e.type!==sr.ATTRIBUTE||e.name!=="class"||((o=e.strings)==null?void 0:o.length)>2)throw new Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(o=>e[o]).join(" ")+" "}update(e,[o]){var i,s;if(this._previousClasses===void 0){this._previousClasses=new Set,e.strings!==void 0&&(this._staticClasses=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in o)o[r]&&!((i=this._staticClasses)!=null&&i.has(r))&&this._previousClasses.add(r);return this.render(o)}const n=e.element.classList;for(const r of this._previousClasses)r in o||(n.remove(r),this._previousClasses.delete(r));for(const r in o){const l=!!o[r];l!==this._previousClasses.has(r)&&!((s=this._staticClasses)!=null&&s.has(r))&&(l?(n.add(r),this._previousClasses.add(r)):(n.remove(r),this._previousClasses.delete(r)))}return xe}}const ko=rr(lr),to="css-loading-indicator";var J;(function(t){t.IDLE="",t.FIRST="first",t.SECOND="second",t.THIRD="third"})(J||(J={}));class O extends N{static create(){var e,o;const n=window;return!((e=n.Vaadin)===null||e===void 0)&&e.connectionIndicator||(n.Vaadin||(n.Vaadin={}),n.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(n.Vaadin.connectionIndicator)),(o=n.Vaadin)===null||o===void 0?void 0:o.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=J.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=A.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return y`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${ko({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var e;super.connectedCallback();const o=window;!((e=o.Vaadin)===null||e===void 0)&&e.connectionState&&(this.connectionStateStore=o.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(e){e!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=e,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var e;const o=(e=this.connectionStateStore)===null||e===void 0?void 0:e.state;return this.offline=o===A.CONNECTION_LOST,this.reconnecting=o===A.RECONNECTING,this.updateLoading(o===A.LOADING),this.loading?!1:o!==this.lastMessageState?(this.lastMessageState=o,!0):!1}updateLoading(e){this.loading=e,this.loadingBarState=J.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,e,()=>{this.loadingBarState=J.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,e,()=>{this.loadingBarState=J.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,e,()=>{this.loadingBarState=J.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(to)){const e=document.createElement("style");e.id=to,e.textContent=this.getDefaultStyle(),document.head.appendChild(e)}}else{const e=document.getElementById(to);e&&document.head.removeChild(e)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case J.IDLE:return"display: none";case J.FIRST:case J.SECOND:case J.THIRD:return"display: block";default:return""}}timeoutFor(e,o,n,i){return e!==0&&window.clearTimeout(e),o?window.setTimeout(n,i):0}static get instance(){return O.create()}}H([_({type:Number})],O.prototype,"firstDelay",void 0);H([_({type:Number})],O.prototype,"secondDelay",void 0);H([_({type:Number})],O.prototype,"thirdDelay",void 0);H([_({type:Number})],O.prototype,"expandedDuration",void 0);H([_({type:String})],O.prototype,"onlineText",void 0);H([_({type:String})],O.prototype,"offlineText",void 0);H([_({type:String})],O.prototype,"reconnectingText",void 0);H([_({type:Boolean,reflect:!0})],O.prototype,"offline",void 0);H([_({type:Boolean,reflect:!0})],O.prototype,"reconnecting",void 0);H([_({type:Boolean,reflect:!0})],O.prototype,"expanded",void 0);H([_({type:Boolean,reflect:!0})],O.prototype,"loading",void 0);H([_({type:String})],O.prototype,"loadingBarState",void 0);H([_({type:Boolean})],O.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",O);O.instance;var bn;const $t=window;$t.Vaadin||($t.Vaadin={});(bn=$t.Vaadin).registrations||(bn.registrations=[]);$t.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class _n extends Error{}const Fe=window.document.body,C=window;class dr{constructor(e){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",Fe.$=Fe.$||[],this.config=e||{},C.Vaadin=C.Vaadin||{},C.Vaadin.Flow=C.Vaadin.Flow||{},C.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const o=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||o&&o.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,C.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,C.Vaadin.connectionState.loadingFinished(),!C.Vaadin.listener&&(C.Vaadin.listener={},document.addEventListener("click",e=>{e.target&&(e.target.hasAttribute("router-link")?this.navigation="link":e.composedPath().some(o=>o.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async e=>{if(this.pathname=e.pathname,C.Vaadin.connectionState.online)try{await this.flowInit()}catch(o){if(o instanceof _n)return C.Vaadin.connectionState.state=A.CONNECTION_LOST,this.offlineStubAction();throw o}else return this.offlineStubAction();return this.container.onBeforeEnter=(o,n)=>this.flowNavigate(o,n),this.container.onBeforeLeave=(o,n)=>this.flowLeave(o,n),this.container}}async flowLeave(e,o){const{connectionState:n}=C.Vaadin;return this.pathname===e.pathname||!this.isFlowClientLoaded()||n.offline?Promise.resolve({}):new Promise(i=>{this.loadingStarted(),this.container.serverConnected=s=>{i(o&&s?o.prevent():{}),this.loadingFinished()},Fe.$server.leaveNavigation(this.getFlowRoutePath(e),this.getFlowRouteQuery(e))})}async flowNavigate(e,o){return this.response?new Promise(n=>{this.loadingStarted(),this.container.serverConnected=(i,s)=>{o&&i?n(o.prevent()):o&&o.redirect&&s?n(o.redirect(s.pathname)):(this.container.style.display="",n(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},Fe.$server.connectClient(this.getFlowRoutePath(e),this.getFlowRouteQuery(e),this.appShellTitle,history.state,this.navigation),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(e){return decodeURIComponent(e.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(e){return e.search&&e.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:e,appConfig:o}=this.response;typeof e=="string"&&await this.loadScript(e);const{appId:n}=o;await(await g(()=>import("./FlowBootstrap-CHUuW4WK.js"),__vite__mapDeps([]),import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(n),await this.config.imports());const s=`flow-container-${n.toLowerCase()}`,r=document.querySelector(s);r?this.container=r:(this.container=document.createElement(s),this.container.id=n),Fe.$[n]=this.container;const l=await g(()=>import("./FlowClient-BZ2ixoyw.js"),__vite__mapDeps([]),import.meta.url);await this.flowInitClient(l),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(e){return new Promise((o,n)=>{const i=document.createElement("script");i.onload=()=>o(),i.onerror=n,i.src=e,document.body.appendChild(i)})}injectAppIdScript(e){const o=e.substring(0,e.lastIndexOf("-")),n=document.createElement("script");n.type="module",n.setAttribute("data-app-id",o),document.body.append(n)}async flowInitClient(e){return e.init(),new Promise(o=>{const n=setInterval(()=>{Object.keys(C.Vaadin.Flow.clients).filter(s=>s!=="TypeScript").reduce((s,r)=>s||C.Vaadin.Flow.clients[r].isActive(),!1)||(clearInterval(n),o())},5)})}async flowInitUi(){const e=C.Vaadin&&C.Vaadin.TypeScript&&C.Vaadin.TypeScript.initial;return e?(C.Vaadin.TypeScript.initial=void 0,Promise.resolve(e)):new Promise((o,n)=>{const s=new XMLHttpRequest,r=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;s.open("GET",r),s.onerror=()=>n(new _n(`Invalid server response when initializing Flow UI.
        ${s.status}
        ${s.responseText}`)),s.onload=()=>{const l=s.getResponseHeader("content-type");l&&l.indexOf("application/json")!==-1?o(JSON.parse(s.responseText)):s.onerror()},s.send()})}addConnectionIndicator(){O.create(),C.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){C.Vaadin.connectionState.state=A.RECONNECTING;const e=new XMLHttpRequest;e.open("HEAD","sw.js"),e.onload=()=>{C.Vaadin.connectionState.state=A.CONNECTED},e.onerror=()=>{C.Vaadin.connectionState.state=A.CONNECTION_LOST},setTimeout(()=>e.send(),50)}}),C.addEventListener("offline",()=>{this.isFlowClientLoaded()||(C.Vaadin.connectionState.state=A.CONNECTION_LOST)})}async offlineStubAction(){const e=document.createElement("iframe");e.setAttribute("src","./offline-stub.html"),e.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let n;const i=()=>{n!==void 0&&(C.Vaadin.connectionState.removeStateChangeListener(n),n=void 0)};return e.onBeforeEnter=(s,r,l)=>{n=()=>{C.Vaadin.connectionState.online&&(i(),l.render(s,!1))},C.Vaadin.connectionState.addStateChangeListener(n)},e.onBeforeLeave=(s,r,l)=>{i()},e}isFlowClientLoaded(){return this.response!==void 0}}const{serverSideRoutes:cr}=new dr({imports:()=>g(()=>import("./generated-flow-imports-YPO5SPNL.js"),__vite__mapDeps([]),import.meta.url)}),hr=[...cr],ur=new pe(document.querySelector("#outlet"));ur.setRoutes(hr);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var t="ShadyCSS"in window&&!ShadyCSS.nativeShadow,e=document.implementation.createHTMLDocument(""),o=new WeakMap,n=typeof DOMException=="object"?Error:DOMException,i=Object.defineProperty,s=Array.prototype.forEach,r=/@import.+?;?$/gm;function l(u){var m=u.replace(r,"");return m!==u&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),m.trim()}function a(u){return"isConnected"in u?u.isConnected:document.contains(u)}function d(u){return u.filter(function(m,w){return u.indexOf(m)===w})}function c(u,m){return u.filter(function(w){return m.indexOf(w)===-1})}function p(u){u.parentNode.removeChild(u)}function h(u){return u.shadowRoot||o.get(u)}var b=["addRule","deleteRule","insertRule","removeRule"],se=CSSStyleSheet,G=se.prototype;G.replace=function(){return Promise.reject(new n("Can't call replace on non-constructed CSSStyleSheets."))},G.replaceSync=function(){throw new n("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function nt(u){return typeof u=="object"?ke.isPrototypeOf(u)||G.isPrototypeOf(u):!1}function jt(u){return typeof u=="object"?G.isPrototypeOf(u):!1}var W=new WeakMap,ne=new WeakMap,Ce=new WeakMap,Te=new WeakMap;function Ft(u,m){var w=document.createElement("style");return Ce.get(u).set(m,w),ne.get(u).push(m),w}function re(u,m){return Ce.get(u).get(m)}function it(u,m){Ce.get(u).delete(m),ne.set(u,ne.get(u).filter(function(w){return w!==m}))}function Mo(u,m){requestAnimationFrame(function(){m.textContent=W.get(u).textContent,Te.get(u).forEach(function(w){return m.sheet[w.method].apply(m.sheet,w.args)})})}function st(u){if(!W.has(u))throw new TypeError("Illegal invocation")}function Bt(){var u=this,m=document.createElement("style");e.body.appendChild(m),W.set(u,m),ne.set(u,[]),Ce.set(u,new WeakMap),Te.set(u,[])}var ke=Bt.prototype;ke.replace=function(m){try{return this.replaceSync(m),Promise.resolve(this)}catch(w){return Promise.reject(w)}},ke.replaceSync=function(m){if(st(this),typeof m=="string"){var w=this;W.get(w).textContent=l(m),Te.set(w,[]),ne.get(w).forEach(function(U){U.isConnected()&&Mo(w,re(w,U))})}},i(ke,"cssRules",{configurable:!0,enumerable:!0,get:function(){return st(this),W.get(this).sheet.cssRules}}),i(ke,"media",{configurable:!0,enumerable:!0,get:function(){return st(this),W.get(this).sheet.media}}),b.forEach(function(u){ke[u]=function(){var m=this;st(m);var w=arguments;Te.get(m).push({method:u,args:w}),ne.get(m).forEach(function(B){if(B.isConnected()){var L=re(m,B).sheet;L[u].apply(L,w)}});var U=W.get(m).sheet;return U[u].apply(U,w)}}),i(Bt,Symbol.hasInstance,{configurable:!0,value:nt});var Vo={childList:!0,subtree:!0},Do=new WeakMap;function $e(u){var m=Do.get(u);return m||(m=new jo(u),Do.set(u,m)),m}function zo(u){i(u.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return $e(this).sheets},set:function(m){$e(this).update(m)}})}function Ht(u,m){for(var w=document.createNodeIterator(u,NodeFilter.SHOW_ELEMENT,function(B){return h(B)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),U=void 0;U=w.nextNode();)m(h(U))}var rt=new WeakMap,Ae=new WeakMap,at=new WeakMap;function Pi(u,m){return m instanceof HTMLStyleElement&&Ae.get(u).some(function(w){return re(w,u)})}function Uo(u){var m=rt.get(u);return m instanceof Document?m.body:m}function Wt(u){var m=document.createDocumentFragment(),w=Ae.get(u),U=at.get(u),B=Uo(u);U.disconnect(),w.forEach(function(L){m.appendChild(re(L,u)||Ft(L,u))}),B.insertBefore(m,null),U.observe(B,Vo),w.forEach(function(L){Mo(L,re(L,u))})}function jo(u){var m=this;m.sheets=[],rt.set(m,u),Ae.set(m,[]),at.set(m,new MutationObserver(function(w,U){if(!document){U.disconnect();return}w.forEach(function(B){t||s.call(B.addedNodes,function(L){L instanceof Element&&Ht(L,function(Re){$e(Re).connect()})}),s.call(B.removedNodes,function(L){L instanceof Element&&(Pi(m,L)&&Wt(m),t||Ht(L,function(Re){$e(Re).disconnect()}))})})}))}if(jo.prototype={isConnected:function(){var u=rt.get(this);return u instanceof Document?u.readyState!=="loading":a(u.host)},connect:function(){var u=Uo(this);at.get(this).observe(u,Vo),Ae.get(this).length>0&&Wt(this),Ht(u,function(m){$e(m).connect()})},disconnect:function(){at.get(this).disconnect()},update:function(u){var m=this,w=rt.get(m)===document?"Document":"ShadowRoot";if(!Array.isArray(u))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+w+": Iterator getter is not callable.");if(!u.every(nt))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+w+": Failed to convert value to 'CSSStyleSheet'");if(u.some(jt))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+w+": Can't adopt non-constructed stylesheets");m.sheets=u;var U=Ae.get(m),B=d(u),L=c(U,B);L.forEach(function(Re){p(re(Re,m)),it(Re,m)}),Ae.set(m,B),m.isConnected()&&B.length>0&&Wt(m)}},window.CSSStyleSheet=Bt,zo(Document),"ShadowRoot"in window){zo(ShadowRoot);var Fo=Element.prototype,Oi=Fo.attachShadow;Fo.attachShadow=function(m){var w=Oi.call(this,m);return m.mode==="closed"&&o.set(this,w),w}}var lt=$e(document);lt.isConnected()?lt.connect():document.addEventListener("DOMContentLoaded",lt.connect.bind(lt))})();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=Symbol.for(""),pr=t=>{if((t==null?void 0:t.r)===yi)return t==null?void 0:t._$litStatic$},mr=t=>{if(t._$litStatic$!==void 0)return t._$litStatic$;throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},ht=(t,...e)=>({_$litStatic$:e.reduce((o,n,i)=>o+mr(n)+t[i+1],t[0]),r:yi}),wn=new Map,fr=t=>(e,...o)=>{const n=o.length;let i,s;const r=[],l=[];let a=0,d=!1,c;for(;a<n;){for(c=e[a];a<n&&(s=o[a],(i=pr(s))!==void 0);)c+=i+e[++a],d=!0;a!==n&&l.push(s),r.push(c),a++}if(a===n&&r.push(e[n]),d){const p=r.join("$$lit$$");e=wn.get(p),e===void 0&&(r.raw=r,wn.set(p,e=r)),o=l}return t(e,...o)},vr=fr(y),gr="modulepreload",yr=function(t){return"/"+t},En={},v=function(t,e,o){return!e||e.length===0?t():(document.getElementsByTagName("link"),Promise.all(e.map(n=>{if(n=yr(n),n in En)return;En[n]=!0;const i=n.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":gr,i||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),i)return new Promise((l,a)=>{r.addEventListener("load",l),r.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}))};function f(t,e,o,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s}const $o=1e3,Ao=(t,e)=>{const o=Array.from(t.querySelectorAll(e.join(", "))),n=Array.from(t.querySelectorAll("*")).filter(i=>i.shadowRoot).flatMap(i=>Ao(i.shadowRoot,e));return[...o,...n]};let xn=!1;const Ye=(t,e)=>{xn||(window.addEventListener("message",i=>{i.data==="validate-license"&&window.location.reload()},!1),xn=!0);const o=t._overlayElement;if(o){if(o.shadowRoot){const i=o.shadowRoot.querySelector("slot:not([name])");if(i&&i.assignedElements().length>0){Ye(i.assignedElements()[0],e);return}}Ye(o,e);return}const n=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");t.isConnected&&(t.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${n}</div></no-license>`)},He={},Sn={},Me={},bi={},ie=t=>`${t.name}_${t.version}`,Cn=t=>{const{cvdlName:e,version:o}=t.constructor,n={name:e,version:o},i=t.tagName.toLowerCase();He[e]=He[e]??[],He[e].push(i);const s=Me[ie(n)];s&&setTimeout(()=>Ye(t,s),$o),Me[ie(n)]||bi[ie(n)]||Sn[ie(n)]||(Sn[ie(n)]=!0,window.Vaadin.devTools.checkLicense(n))},br=t=>{bi[ie(t)]=!0,console.debug("License check ok for",t)},_i=t=>{const e=t.product.name;Me[ie(t.product)]=t,console.error("License check failed for",e);const o=He[e];(o==null?void 0:o.length)>0&&Ao(document,o).forEach(n=>{setTimeout(()=>Ye(n,Me[ie(t.product)]),$o)})},_r=t=>{const e=t.message,o=t.product.name;t.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,Me[ie(t.product)]=t,console.error("No license found when checking",o);const n=He[o];(n==null?void 0:n.length)>0&&Ao(document,n).forEach(i=>{setTimeout(()=>Ye(i,Me[ie(t.product)]),$o)})},wr=t=>t.command==="license-check-ok"?(br(t.data),!0):t.command==="license-check-failed"?(_i(t.data),!0):t.command==="license-check-nokey"?(_r(t.data),!0):!1,Er=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(t=>{Cn(t)}),window.Vaadin.devTools.createdCvdlElements={push:t=>{Cn(t)}}};function xr(t){var e;const o=[];for(;t&&t.parentNode;){const n=po(t);if(n.nodeId!==-1){if((e=n.element)!=null&&e.tagName.startsWith("FLOW-CONTAINER-"))break;o.push(n)}t=t.parentElement?t.parentElement:t.parentNode.host}return o.reverse()}function po(t){const e=window.Vaadin;if(e&&e.Flow){const{clients:o}=e.Flow,n=Object.keys(o);for(const i of n){const s=o[i];if(s.getNodeId){const r=s.getNodeId(t);if(r>=0)return{nodeId:r,uiId:s.getUIId(),element:t}}}}return{nodeId:-1,uiId:-1,element:void 0}}function Sr(t,e){if(t.contains(e))return!0;let o=e;const n=e.ownerDocument;for(;o&&o!==n&&o!==t;)o=o.parentNode||(o instanceof ShadowRoot?o.host:null);return o===t}var x;(function(t){t.ACTIVE="active",t.INACTIVE="inactive",t.UNAVAILABLE="unavailable",t.ERROR="error"})(x||(x={}));class At{constructor(){this.status=x.UNAVAILABLE}onHandshake(){}onConnectionError(e){}onStatusChange(e){}setActive(e){!e&&this.status===x.ACTIVE?this.setStatus(x.INACTIVE):e&&this.status===x.INACTIVE&&this.setStatus(x.ACTIVE)}setStatus(e){this.status!==e&&(this.status=e,this.onStatusChange(e))}}At.HEARTBEAT_INTERVAL=18e4;class Cr extends At{constructor(e){super(),this.webSocket=new WebSocket(e),this.webSocket.onmessage=o=>this.handleMessage(o),this.webSocket.onerror=o=>this.handleError(o),this.webSocket.onclose=o=>{this.status!==x.ERROR&&this.setStatus(x.UNAVAILABLE),this.webSocket=void 0},setInterval(()=>{this.webSocket&&self.status!==x.ERROR&&this.status!==x.UNAVAILABLE&&this.webSocket.send("")},At.HEARTBEAT_INTERVAL)}onReload(){}handleMessage(e){let o;try{o=JSON.parse(e.data)}catch(n){this.handleError(`[${n.name}: ${n.message}`);return}o.command==="hello"?(this.setStatus(x.ACTIVE),this.onHandshake()):o.command==="reload"?this.status===x.ACTIVE&&this.onReload():this.handleError(`Unknown message from the livereload server: ${e}`)}handleError(e){console.error(e),this.setStatus(x.ERROR),e instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(e)}}const wi=k`
  .popup {
    width: auto;
    position: fixed;
    background-color: var(--dev-tools-background-color-active-blurred);
    color: var(--dev-tools-text-color-primary);
    padding: 0.1875rem 0.75rem 0.1875rem 1rem;
    background-clip: padding-box;
    border-radius: var(--dev-tools-border-radius);
    overflow: hidden;
    margin: 0.5rem;
    width: 30rem;
    max-width: calc(100% - 1rem);
    max-height: calc(100vh - 1rem);
    flex-shrink: 1;
    background-color: var(--dev-tools-background-color-active);
    color: var(--dev-tools-text-color);
    transition: var(--dev-tools-transition-duration);
    transform-origin: bottom right;
    display: flex;
    flex-direction: column;
    box-shadow: var(--dev-tools-box-shadow);
    outline: none;
  }
`,Tr=(t,e)=>{const o=t[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((n,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+e)))})};var R;(function(t){t.text="text",t.checkbox="checkbox",t.range="range",t.color="color"})(R||(R={}));const oe={lumoSize:["--lumo-size-xs","--lumo-size-s","--lumo-size-m","--lumo-size-l","--lumo-size-xl"],lumoSpace:["--lumo-space-xs","--lumo-space-s","--lumo-space-m","--lumo-space-l","--lumo-space-xl"],lumoBorderRadius:["0","--lumo-border-radius-m","--lumo-border-radius-l"],lumoFontSize:["--lumo-font-size-xxs","--lumo-font-size-xs","--lumo-font-size-s","--lumo-font-size-m","--lumo-font-size-l","--lumo-font-size-xl","--lumo-font-size-xxl","--lumo-font-size-xxxl"],lumoTextColor:["--lumo-header-text-color","--lumo-body-text-color","--lumo-secondary-text-color","--lumo-tertiary-text-color","--lumo-disabled-text-color","--lumo-primary-text-color","--lumo-error-text-color","--lumo-success-text-color"],basicBorderSize:["0px","1px","2px","3px"]},kr=Object.freeze(Object.defineProperty({__proto__:null,presets:oe},Symbol.toStringTag,{value:"Module"})),le={textColor:{propertyName:"color",displayName:"Text color",editorType:R.color,presets:oe.lumoTextColor},fontSize:{propertyName:"font-size",displayName:"Font size",editorType:R.range,presets:oe.lumoFontSize,icon:"font"},fontWeight:{propertyName:"font-weight",displayName:"Bold",editorType:R.checkbox,checkedValue:"bold"},fontStyle:{propertyName:"font-style",displayName:"Italic",editorType:R.checkbox,checkedValue:"italic"}},ee={backgroundColor:{propertyName:"background-color",displayName:"Background color",editorType:R.color},borderColor:{propertyName:"border-color",displayName:"Border color",editorType:R.color},borderWidth:{propertyName:"border-width",displayName:"Border width",editorType:R.range,presets:oe.basicBorderSize,icon:"square"},borderRadius:{propertyName:"border-radius",displayName:"Border radius",editorType:R.range,presets:oe.lumoBorderRadius,icon:"square"},padding:{propertyName:"padding",displayName:"Padding",editorType:R.range,presets:oe.lumoSpace,icon:"square"},gap:{propertyName:"gap",displayName:"Spacing",editorType:R.range,presets:oe.lumoSpace,icon:"square"}},$r={height:{propertyName:"height",displayName:"Size",editorType:R.range,presets:oe.lumoSize,icon:"square"},paddingInline:{propertyName:"padding-inline",displayName:"Padding",editorType:R.range,presets:oe.lumoSpace,icon:"square"}},mo={iconColor:{propertyName:"color",displayName:"Icon color",editorType:R.color,presets:oe.lumoTextColor},iconSize:{propertyName:"font-size",displayName:"Icon size",editorType:R.range,presets:oe.lumoFontSize,icon:"font"}},Ar=[ee.backgroundColor,ee.borderColor,ee.borderWidth,ee.borderRadius,ee.padding],Rr=[le.textColor,le.fontSize,le.fontWeight,le.fontStyle],Nr=[mo.iconColor,mo.iconSize],Ir=Object.freeze(Object.defineProperty({__proto__:null,fieldProperties:$r,iconProperties:mo,shapeProperties:ee,standardIconProperties:Nr,standardShapeProperties:Ar,standardTextProperties:Rr,textProperties:le},Symbol.toStringTag,{value:"Module"}));function Ei(t){const e=t.charAt(0).toUpperCase()+t.slice(1);return{tagName:t,displayName:e,elements:[{selector:t,displayName:"Element",properties:[ee.backgroundColor,ee.borderColor,ee.borderWidth,ee.borderRadius,ee.padding,le.textColor,le.fontSize,le.fontWeight,le.fontStyle]}]}}const Pr=Object.freeze(Object.defineProperty({__proto__:null,createGenericMetadata:Ei},Symbol.toStringTag,{value:"Module"})),Or=t=>Tr(Object.assign({"./components/defaults.ts":()=>v(()=>Promise.resolve().then(()=>Ir),void 0),"./components/generic.ts":()=>v(()=>Promise.resolve().then(()=>Pr),void 0),"./components/presets.ts":()=>v(()=>Promise.resolve().then(()=>kr),void 0),"./components/vaadin-accordion-heading.ts":()=>v(()=>g(()=>import("./vaadin-accordion-heading-c0acdd6d-B7O5PIzt.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-accordion-panel.ts":()=>v(()=>g(()=>import("./vaadin-accordion-panel-616e55d6-a6SN0Y6Q.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-accordion.ts":()=>v(()=>g(()=>import("./vaadin-accordion-eed3b794-C92CO8dT.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-app-layout.ts":()=>v(()=>g(()=>import("./vaadin-app-layout-e56de2e9-DWtE7e88.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-avatar.ts":()=>v(()=>g(()=>import("./vaadin-avatar-7599297d-DNbRaOw1.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-big-decimal-field.ts":()=>v(()=>g(()=>import("./vaadin-big-decimal-field-e51def24-C6079CW6.js"),__vite__mapDeps([0,1,2]),import.meta.url),["assets/vaadin-big-decimal-field-e51def24.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-board-row.ts":()=>v(()=>g(()=>import("./vaadin-board-row-c70d0c55-_AVg3dTa.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-board.ts":()=>v(()=>g(()=>import("./vaadin-board-828ebdea-Dj43BRGM.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-button.ts":()=>v(()=>g(()=>import("./vaadin-button-2511ad84-CZwrWp2y.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-chart.ts":()=>v(()=>g(()=>import("./vaadin-chart-5192dc15-Y0Z9lTv4.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-checkbox-group.ts":()=>v(()=>g(()=>import("./vaadin-checkbox-group-a7c65bf2-ry_MtHk_.js"),__vite__mapDeps([3,1,4]),import.meta.url),["assets/vaadin-checkbox-group-a7c65bf2.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-checkbox-4e68df64.js"]),"./components/vaadin-checkbox.ts":()=>v(()=>g(()=>import("./vaadin-checkbox-4e68df64-CS_Voa7D.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-combo-box.ts":()=>v(()=>g(()=>import("./vaadin-combo-box-96451ddd-Dq7PxKyR.js"),__vite__mapDeps([5,1]),import.meta.url),["assets/vaadin-combo-box-96451ddd.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-confirm-dialog.ts":()=>v(()=>g(()=>import("./vaadin-confirm-dialog-4d718829-ixOW0lcn.js"),__vite__mapDeps([6,2]),import.meta.url),["assets/vaadin-confirm-dialog-4d718829.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-cookie-consent.ts":()=>v(()=>g(()=>import("./vaadin-cookie-consent-46c09f8b-Ck5aSXKq.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-crud.ts":()=>v(()=>g(()=>import("./vaadin-crud-8d161a22-BIFX6sBl.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-custom-field.ts":()=>v(()=>g(()=>import("./vaadin-custom-field-42c85b9e-6R53Qh-6.js"),__vite__mapDeps([7,1]),import.meta.url),["assets/vaadin-custom-field-42c85b9e.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-date-picker.ts":()=>v(()=>g(()=>import("./vaadin-date-picker-f2001167-B4F-isDm.js"),__vite__mapDeps([8,1]),import.meta.url),["assets/vaadin-date-picker-f2001167.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-date-time-picker.ts":()=>v(()=>g(()=>import("./vaadin-date-time-picker-c8c047a7-DmuowW7f.js"),__vite__mapDeps([9,1]),import.meta.url),["assets/vaadin-date-time-picker-c8c047a7.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-details-summary.ts":()=>v(()=>g(()=>import("./vaadin-details-summary-351a1448-Dlklncgn.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-details.ts":()=>v(()=>g(()=>import("./vaadin-details-bf336660-dime5Zon.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-dialog.ts":()=>v(()=>g(()=>import("./vaadin-dialog-53253a08-BWsJzfhF.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-email-field.ts":()=>v(()=>g(()=>import("./vaadin-email-field-d7a35f04-CtKlGkE5.js"),__vite__mapDeps([10,1,2]),import.meta.url),["assets/vaadin-email-field-d7a35f04.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-form-layout.ts":()=>v(()=>g(()=>import("./vaadin-form-layout-47744b1d-mxE7DZsG.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-grid-pro.ts":()=>v(()=>g(()=>import("./vaadin-grid-pro-ff415555-D7AIT80N.js"),__vite__mapDeps([11,4,12,1]),import.meta.url),["assets/vaadin-grid-pro-ff415555.js","assets/vaadin-checkbox-4e68df64.js","assets/vaadin-grid-0a4791c2.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-grid.ts":()=>v(()=>g(()=>import("./vaadin-grid-0a4791c2-BL9UZF3n.js"),__vite__mapDeps([12,4]),import.meta.url),["assets/vaadin-grid-0a4791c2.js","assets/vaadin-checkbox-4e68df64.js"]),"./components/vaadin-horizontal-layout.ts":()=>v(()=>g(()=>import("./vaadin-horizontal-layout-3193943f-wl9nacp6.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-icon.ts":()=>v(()=>g(()=>import("./vaadin-icon-601f36ed-D9u_SeZL.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-integer-field.ts":()=>v(()=>g(()=>import("./vaadin-integer-field-85078932-DIQwAf0J.js"),__vite__mapDeps([13,1,2]),import.meta.url),["assets/vaadin-integer-field-85078932.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-list-box.ts":()=>v(()=>g(()=>import("./vaadin-list-box-d7a8433b-BNcZe9Wa.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-login-form.ts":()=>v(()=>g(()=>import("./vaadin-login-form-638996c6-BBrWI09i.js"),__vite__mapDeps([14,1,2]),import.meta.url),["assets/vaadin-login-form-638996c6.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-login-overlay.ts":()=>v(()=>g(()=>import("./vaadin-login-overlay-f8a5db8a-DS2L3YqZ.js"),__vite__mapDeps([15,1,2]),import.meta.url),["assets/vaadin-login-overlay-f8a5db8a.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-map.ts":()=>v(()=>g(()=>import("./vaadin-map-d40a0116-CXoI1kzp.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-menu-bar.ts":()=>v(()=>g(()=>import("./vaadin-menu-bar-3f5ab096-DldN5Eut.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-message-input.ts":()=>v(()=>g(()=>import("./vaadin-message-input-996ac37c-DiWvtwVV.js"),__vite__mapDeps([16,1]),import.meta.url),["assets/vaadin-message-input-996ac37c.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-message-list.ts":()=>v(()=>g(()=>import("./vaadin-message-list-70a435ba-OEpoglSq.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-multi-select-combo-box.ts":()=>v(()=>g(()=>import("./vaadin-multi-select-combo-box-a3373557-BFldoZfY.js"),__vite__mapDeps([17,1]),import.meta.url),["assets/vaadin-multi-select-combo-box-a3373557.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-notification.ts":()=>v(()=>g(()=>import("./vaadin-notification-bd6eb776-B--1WmAy.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-number-field.ts":()=>v(()=>g(()=>import("./vaadin-number-field-cb3ee8b2-BPhLWcA_.js"),__vite__mapDeps([18,1,2]),import.meta.url),["assets/vaadin-number-field-cb3ee8b2.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-password-field.ts":()=>v(()=>g(()=>import("./vaadin-password-field-d289cb18-BPmSrYGh.js"),__vite__mapDeps([19,1,2]),import.meta.url),["assets/vaadin-password-field-d289cb18.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-progress-bar.ts":()=>v(()=>g(()=>import("./vaadin-progress-bar-309ecf1f-C_u0aXwZ.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-radio-group.ts":()=>v(()=>g(()=>import("./vaadin-radio-group-88b5afd8-mi7uWhlN.js"),__vite__mapDeps([20,1]),import.meta.url),["assets/vaadin-radio-group-88b5afd8.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-rich-text-editor.ts":()=>v(()=>g(()=>import("./vaadin-rich-text-editor-8cd892f2-BaW-Z9uv.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-scroller.ts":()=>v(()=>g(()=>import("./vaadin-scroller-35e68818-CbmZD-Hf.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-select.ts":()=>v(()=>g(()=>import("./vaadin-select-df6e9947-DI1ra99C.js"),__vite__mapDeps([21,1]),import.meta.url),["assets/vaadin-select-df6e9947.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-side-nav-item.ts":()=>v(()=>g(()=>import("./vaadin-side-nav-item-34918f92-D1mHIyIr.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-side-nav.ts":()=>v(()=>g(()=>import("./vaadin-side-nav-ba80d91d-DW-aUVTq.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-split-layout.ts":()=>v(()=>g(()=>import("./vaadin-split-layout-80c92131-CyJDI2__.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-spreadsheet.ts":()=>v(()=>g(()=>import("./vaadin-spreadsheet-59d8c5ef-B1I6VVXU.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-tab.ts":()=>v(()=>g(()=>import("./vaadin-tab-aaf32809-Bj319AUb.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-tabs.ts":()=>v(()=>g(()=>import("./vaadin-tabs-d9a5e24e-Dy2E5pK4.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-tabsheet.ts":()=>v(()=>g(()=>import("./vaadin-tabsheet-dd99ed9a-CUyiSFhx.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-text-area.ts":()=>v(()=>g(()=>import("./vaadin-text-area-83627ebc-BLC7OfZa.js"),__vite__mapDeps([22,1,2]),import.meta.url),["assets/vaadin-text-area-83627ebc.js","assets/vaadin-text-field-0b3db014.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-text-field.ts":()=>v(()=>g(()=>import("./vaadin-text-field-0b3db014-CAzqWn4A.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-time-picker.ts":()=>v(()=>g(()=>import("./vaadin-time-picker-715ec415-epU6xcWs.js"),__vite__mapDeps([23,1]),import.meta.url),["assets/vaadin-time-picker-715ec415.js","assets/vaadin-text-field-0b3db014.js"]),"./components/vaadin-upload.ts":()=>v(()=>g(()=>import("./vaadin-upload-d3c162ed-DrWm242N.js"),__vite__mapDeps([24,2]),import.meta.url),["assets/vaadin-upload-d3c162ed.js","assets/vaadin-button-2511ad84.js"]),"./components/vaadin-vertical-layout.ts":()=>v(()=>g(()=>import("./vaadin-vertical-layout-ad4174c4-aJjnhgPm.js"),__vite__mapDeps([]),import.meta.url),[]),"./components/vaadin-virtual-list.ts":()=>v(()=>g(()=>import("./vaadin-virtual-list-96896203-DpXhKiP7.js"),__vite__mapDeps([]),import.meta.url),[])}),`./components/${t}.ts`);class Lr{constructor(e=Or){this.loader=e,this.metadata={}}async getMetadata(e){var o;const n=(o=e.element)==null?void 0:o.localName;if(!n)return null;if(!n.startsWith("vaadin-"))return Ei(n);let i=this.metadata[n];if(i)return i;try{i=(await this.loader(n)).default,this.metadata[n]=i}catch{console.warn(`Failed to load metadata for component: ${n}`)}return i||null}}const Mr=new Lr,bt={crosshair:Ne`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
   <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
   <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
   <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
   <path d="M9 12l6 0"></path>
   <path d="M12 9l0 6"></path>
</svg>`,square:Ne`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
</svg>`,font:Ne`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 20l3 0"></path>
   <path d="M14 20l7 0"></path>
   <path d="M6.9 15l6.9 0"></path>
   <path d="M10.2 6.3l5.8 13.7"></path>
   <path d="M5 20l6 -16l2 0l7 16"></path>
</svg>`,undo:Ne`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg>`,redo:Ne`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1"></path>
</svg>`,cross:Ne`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M18 6l-12 12"></path>
   <path d="M6 6l12 12"></path>
</svg>`};var Ve;(function(t){t.disabled="disabled",t.enabled="enabled",t.missing_theme="missing_theme"})(Ve||(Ve={}));var P;(function(t){t.local="local",t.global="global"})(P||(P={}));function oo(t,e){return`${t}|${e}`}class me{constructor(e){this._properties={},this._metadata=e}get metadata(){return this._metadata}get properties(){return Object.values(this._properties)}getPropertyValue(e,o){return this._properties[oo(e,o)]||null}updatePropertyValue(e,o,n,i){if(!n){delete this._properties[oo(e,o)];return}let s=this.getPropertyValue(e,o);s?(s.value=n,s.modified=i||!1):(s={elementSelector:e,propertyName:o,value:n,modified:i||!1},this._properties[oo(e,o)]=s)}addPropertyValues(e){e.forEach(o=>{this.updatePropertyValue(o.elementSelector,o.propertyName,o.value,o.modified)})}getPropertyValuesForElement(e){return this.properties.filter(o=>o.elementSelector===e)}static combine(...e){if(e.length<2)throw new Error("Must provide at least two themes");const o=new me(e[0].metadata);return e.forEach(n=>o.addPropertyValues(n.properties)),o}static fromServerRules(e,o,n){const i=new me(e);return e.elements.forEach(s=>{const r=De(s,o),l=n.find(a=>a.selector===r.replace(/ > /g,">"));l&&s.properties.forEach(a=>{const d=l.properties[a.propertyName];d&&i.updatePropertyValue(s.selector,a.propertyName,d,!0)})}),i}}function De(t,e){const o=t.selector;if(e.themeScope===P.global)return o;if(!e.localClassName)throw new Error("Can not build local scoped selector without instance class name");const n=o.match(/^[\w\d-_]+/),i=n&&n[0];if(!i)throw new Error(`Selector does not start with a tag name: ${o}`);return`${i}.${e.localClassName}${o.substring(i.length,o.length)}`}function Vr(t,e,o,n){const i=De(t,e),s={[o]:n};return o==="border-width"&&(parseInt(n)>0?s["border-style"]="solid":s["border-style"]=""),{selector:i,properties:s}}function Dr(t){const e=Object.entries(t.properties).map(([o,n])=>`${o}: ${n};`).join(" ");return`${t.selector} { ${e} }`}let ut,Tn="";function Ro(t){ut||(ut=new CSSStyleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets,ut]),Tn+=t.cssText,ut.replaceSync(Tn)}const xi=k`
  .editor-row {
    display: flex;
    align-items: baseline;
    padding: var(--theme-editor-section-horizontal-padding);
    gap: 10px;
  }

  .editor-row > .label {
    flex: 0 0 auto;
    width: 120px;
  }

  .editor-row > .editor {
    flex: 1 1 0;
  }
`,kn="__vaadin-theme-editor-measure-element",$n=/((::before)|(::after))$/,An=/::part\(([\w\d_-]+)\)$/;Ro(k`
  .__vaadin-theme-editor-measure-element {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }
`);async function zr(t){const e=new me(t),o=document.createElement(t.tagName);o.classList.add(kn),document.body.append(o),t.setupElement&&await t.setupElement(o);const n={themeScope:P.local,localClassName:kn};try{t.elements.forEach(i=>{Rn(o,i,n,!0);let s=De(i,n);const r=s.match($n);s=s.replace($n,"");const l=s.match(An),a=s.replace(An,"");let d=document.querySelector(a);if(d&&l){const h=`[part~="${l[1]}"]`;d=d.shadowRoot.querySelector(h)}if(!d)return;d.style.transition="none";const c=r?r[1]:null,p=getComputedStyle(d,c);i.properties.forEach(h=>{const b=p.getPropertyValue(h.propertyName)||h.defaultValue||"";e.updatePropertyValue(i.selector,h.propertyName,b)}),Rn(o,i,n,!1)})}finally{try{t.cleanupElement&&await t.cleanupElement(o)}finally{o.remove()}}return e}function Rn(t,e,o,n){if(e.stateAttribute){if(e.stateElementSelector){const i=De({...e,selector:e.stateElementSelector},o);t=document.querySelector(i)}t&&(n?t.setAttribute(e.stateAttribute,""):t.removeAttribute(e.stateAttribute))}}function Nn(t){return t.trim()}function Ur(t){const e=t.element;if(!e)return null;const o=e.querySelector("label");if(o&&o.textContent)return Nn(o.textContent);const n=e.textContent;return n?Nn(n):null}class jr{constructor(){this._localClassNameMap=new Map}get stylesheet(){return this.ensureStylesheet(),this._stylesheet}add(e){this.ensureStylesheet(),this._stylesheet.replaceSync(e)}clear(){this.ensureStylesheet(),this._stylesheet.replaceSync("")}previewLocalClassName(e,o){if(!e)return;const n=this._localClassNameMap.get(e);n&&(e.classList.remove(n),e.overlayClass=null),o?(e.classList.add(o),e.overlayClass=o,this._localClassNameMap.set(e,o)):this._localClassNameMap.delete(e)}ensureStylesheet(){this._stylesheet||(this._stylesheet=new CSSStyleSheet,this._stylesheet.replaceSync(""),document.adoptedStyleSheets=[...document.adoptedStyleSheets,this._stylesheet])}}const ge=new jr;var Y;(function(t){t.response="themeEditorResponse",t.loadComponentMetadata="themeEditorComponentMetadata",t.setLocalClassName="themeEditorLocalClassName",t.setCssRules="themeEditorRules",t.loadRules="themeEditorLoadRules",t.history="themeEditorHistory",t.openCss="themeEditorOpenCss",t.markAsUsed="themeEditorMarkAsUsed"})(Y||(Y={}));var fo;(function(t){t.ok="ok",t.error="error"})(fo||(fo={}));class Fr{constructor(e){this.pendingRequests={},this.requestCounter=0,this.wrappedConnection=e;const o=this.wrappedConnection.onMessage;this.wrappedConnection.onMessage=n=>{n.command===Y.response?this.handleResponse(n.data):o.call(this.wrappedConnection,n)}}sendRequest(e,o){const n=(this.requestCounter++).toString(),i=o.uiId??this.getGlobalUiId();return new Promise((s,r)=>{this.wrappedConnection.send(e,{...o,requestId:n,uiId:i}),this.pendingRequests[n]={resolve:s,reject:r}})}handleResponse(e){const o=this.pendingRequests[e.requestId];if(!o){console.warn("Received response for unknown request");return}delete this.pendingRequests[e.requestId],e.code===fo.ok?o.resolve(e):o.reject(e)}loadComponentMetadata(e){return this.sendRequest(Y.loadComponentMetadata,{nodeId:e.nodeId})}setLocalClassName(e,o){return this.sendRequest(Y.setLocalClassName,{nodeId:e.nodeId,className:o})}setCssRules(e){return this.sendRequest(Y.setCssRules,{rules:e})}loadRules(e){return this.sendRequest(Y.loadRules,{selectors:e})}markAsUsed(){return this.sendRequest(Y.markAsUsed,{})}undo(e){return this.sendRequest(Y.history,{undo:e})}redo(e){return this.sendRequest(Y.history,{redo:e})}openCss(e){return this.sendRequest(Y.openCss,{selector:e})}getGlobalUiId(){if(this.globalUiId===void 0){const e=window.Vaadin;if(e&&e.Flow){const{clients:o}=e.Flow,n=Object.keys(o);for(const i of n){const s=o[i];if(s.getNodeId){this.globalUiId=s.getUIId();break}}}}return this.globalUiId??-1}}const M={index:-1,entries:[]};class Br{constructor(e){this.api=e}get allowUndo(){return M.index>=0}get allowRedo(){return M.index<M.entries.length-1}get allowedActions(){return{allowUndo:this.allowUndo,allowRedo:this.allowRedo}}push(e,o,n){const i={requestId:e,execute:o,rollback:n};if(M.index++,M.entries=M.entries.slice(0,M.index),M.entries.push(i),o)try{o()}catch(s){console.error("Execute history entry failed",s)}return this.allowedActions}async undo(){if(!this.allowUndo)return this.allowedActions;const e=M.entries[M.index];M.index--;try{await this.api.undo(e.requestId),e.rollback&&e.rollback()}catch(o){console.error("Undo failed",o)}return this.allowedActions}async redo(){if(!this.allowRedo)return this.allowedActions;M.index++;const e=M.entries[M.index];try{await this.api.redo(e.requestId),e.execute&&e.execute()}catch(o){console.error("Redo failed",o)}return this.allowedActions}static clear(){M.entries=[],M.index=-1}}class Hr extends CustomEvent{constructor(e,o,n){super("theme-property-value-change",{bubbles:!0,composed:!0,detail:{element:e,property:o,value:n}})}}class q extends N{constructor(){super(...arguments),this.value=""}static get styles(){return[xi,k`
        :host {
          display: block;
        }

        .editor-row .label .modified {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: orange;
          border-radius: 3px;
          margin-left: 3px;
        }
      `]}update(e){super.update(e),(e.has("propertyMetadata")||e.has("theme"))&&this.updateValueFromTheme()}render(){var e;return y`
      <div class="editor-row">
        <div class="label">
          ${this.propertyMetadata.displayName}
          ${(e=this.propertyValue)!=null&&e.modified?y`<span class="modified"></span>`:null}
        </div>
        <div class="editor">${this.renderEditor()}</div>
      </div>
    `}updateValueFromTheme(){var e;this.propertyValue=this.theme.getPropertyValue(this.elementMetadata.selector,this.propertyMetadata.propertyName),this.value=((e=this.propertyValue)==null?void 0:e.value)||""}dispatchChange(e){this.dispatchEvent(new Hr(this.elementMetadata,this.propertyMetadata,e))}}f([_({})],q.prototype,"elementMetadata",void 0);f([_({})],q.prototype,"propertyMetadata",void 0);f([_({})],q.prototype,"theme",void 0);f([I()],q.prototype,"propertyValue",void 0);f([I()],q.prototype,"value",void 0);class Rt{get values(){return this._values}get rawValues(){return this._rawValues}constructor(e){if(this._values=[],this._rawValues={},e){const o=e.propertyName,n=e.presets??[];this._values=(n||[]).map(s=>s.startsWith("--")?`var(${s})`:s);const i=document.createElement("div");i.style.borderStyle="solid",i.style.visibility="hidden",document.body.append(i);try{this._values.forEach(s=>{i.style.setProperty(o,s);const r=getComputedStyle(i);this._rawValues[s]=r.getPropertyValue(o).trim()})}finally{i.remove()}}}tryMapToRawValue(e){return this._rawValues[e]??e}tryMapToPreset(e){return this.findPreset(e)??e}findPreset(e){const o=e&&e.trim();return this.values.find(n=>this._rawValues[n]===o)}}class In extends CustomEvent{constructor(e){super("change",{detail:{value:e}})}}let Nt=class extends N{constructor(){super(...arguments),this.value="",this.showClearButton=!1}static get styles(){return k`
      :host {
        display: inline-block;
        width: 100%;
        position: relative;
      }

      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0.25rem 0.375rem;
        color: inherit;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        border: none;
      }

      button {
        display: none;
        position: absolute;
        right: 4px;
        top: 4px;
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      button svg {
        width: 16px;
        height: 16px;
      }

      button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      :host(.show-clear-button) input {
        padding-right: 20px;
      }

      :host(.show-clear-button) button {
        display: block;
      }
    `}update(t){super.update(t),t.has("showClearButton")&&(this.showClearButton?this.classList.add("show-clear-button"):this.classList.remove("show-clear-button"))}render(){return y`
      <input class="input" .value=${this.value} @change=${this.handleInputChange} />
      <button @click=${this.handleClearClick}>${bt.cross}</button>
    `}handleInputChange(t){const e=t.target;this.dispatchEvent(new In(e.value))}handleClearClick(){this.dispatchEvent(new In(""))}};f([_({})],Nt.prototype,"value",void 0);f([_({})],Nt.prototype,"showClearButton",void 0);Nt=f([z("vaadin-dev-tools-theme-text-input")],Nt);class Wr extends CustomEvent{constructor(e){super("class-name-change",{detail:{value:e}})}}let Xe=class extends N{constructor(){super(...arguments),this.editedClassName="",this.invalid=!1}static get styles(){return[xi,k`
        .editor-row {
          padding-top: 0;
        }

        .editor-row .editor .error {
          display: inline-block;
          color: var(--dev-tools-red-color);
          margin-top: 4px;
        }
      `]}update(t){super.update(t),t.has("className")&&(this.editedClassName=this.className,this.invalid=!1)}render(){return y` <div class="editor-row local-class-name">
      <div class="label">CSS class name</div>
      <div class="editor">
        <vaadin-dev-tools-theme-text-input
          type="text"
          .value=${this.editedClassName}
          @change=${this.handleInputChange}
        ></vaadin-dev-tools-theme-text-input>
        ${this.invalid?y`<br /><span class="error">Please enter a valid CSS class name</span>`:null}
      </div>
    </div>`}handleInputChange(t){this.editedClassName=t.detail.value;const e=/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;this.invalid=!this.editedClassName.match(e),!this.invalid&&this.editedClassName!==this.className&&this.dispatchEvent(new Wr(this.editedClassName))}};f([_({})],Xe.prototype,"className",void 0);f([I()],Xe.prototype,"editedClassName",void 0);f([I()],Xe.prototype,"invalid",void 0);Xe=f([z("vaadin-dev-tools-theme-class-name-editor")],Xe);class qr extends CustomEvent{constructor(e){super("scope-change",{detail:{value:e}})}}Ro(k`
  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] {
    --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
    z-index: 100000 !important;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector']::part(overlay) {
    background: #333;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item {
    color: rgba(255, 255, 255, 0.8);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(content) {
    font-size: 13px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item .title {
    color: rgba(255, 255, 255, 0.95);
    font-weight: bold;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark) {
    margin: 6px;
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item::part(checkmark)::before {
    color: rgba(255, 255, 255, 0.95);
  }

  vaadin-select-overlay[theme~='vaadin-dev-tools-theme-scope-selector'] vaadin-item:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`);let Qe=class extends N{constructor(){super(...arguments),this.value=P.local}static get styles(){return k`
      vaadin-select {
        --lumo-primary-color-50pct: rgba(255, 255, 255, 0.5);
        width: 100px;
      }

      vaadin-select::part(input-field) {
        background: rgba(0, 0, 0, 0.2);
      }

      vaadin-select vaadin-select-value-button,
      vaadin-select::part(toggle-button) {
        color: var(--dev-tools-text-color);
      }

      vaadin-select:hover vaadin-select-value-button,
      vaadin-select:hover::part(toggle-button) {
        color: var(--dev-tools-text-color-emphasis);
      }

      vaadin-select vaadin-select-item {
        font-size: 13px;
      }
    `}update(t){var e;super.update(t),t.has("metadata")&&((e=this.select)==null||e.requestContentUpdate())}render(){return y` <vaadin-select
      theme="small vaadin-dev-tools-theme-scope-selector"
      .value=${this.value}
      .renderer=${this.selectRenderer.bind(this)}
      @value-changed=${this.handleValueChange}
    ></vaadin-select>`}selectRenderer(t){var e;const o=((e=this.metadata)==null?void 0:e.displayName)||"Component",n=`${o}s`;_e(y`
        <vaadin-list-box>
          <vaadin-item value=${P.local} label="Local">
            <span class="title">Local</span>
            <br />
            <span>Edit styles for this ${o}</span>
          </vaadin-item>
          <vaadin-item value=${P.global} label="Global">
            <span class="title">Global</span>
            <br />
            <span>Edit styles for all ${n}</span>
          </vaadin-item>
        </vaadin-list-box>
      `,t)}handleValueChange(t){const e=t.detail.value;e!==this.value&&this.dispatchEvent(new qr(e))}};f([_({})],Qe.prototype,"value",void 0);f([_({})],Qe.prototype,"metadata",void 0);f([tt("vaadin-select")],Qe.prototype,"select",void 0);Qe=f([z("vaadin-dev-tools-theme-scope-selector")],Qe);let Pn=class extends q{static get styles(){return[q.styles,k`
        .editor-row {
          align-items: center;
        }
      `]}handleInputChange(t){const e=t.target.checked?this.propertyMetadata.checkedValue:"";this.dispatchChange(e||"")}renderEditor(){const t=this.value===this.propertyMetadata.checkedValue;return y` <input type="checkbox" .checked=${t} @change=${this.handleInputChange} /> `}};Pn=f([z("vaadin-dev-tools-theme-checkbox-property-editor")],Pn);let On=class extends q{handleInputChange(t){this.dispatchChange(t.detail.value)}renderEditor(){var t;return y`
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}};On=f([z("vaadin-dev-tools-theme-text-property-editor")],On);let It=class extends q{constructor(){super(...arguments),this.selectedPresetIndex=-1,this.presets=new Rt}static get styles(){return[q.styles,k`
        :host {
          --preset-count: 3;
          --slider-bg: #fff;
          --slider-border: #333;
        }

        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .editor-row .input {
          flex: 0 0 auto;
          width: 80px;
        }

        .slider-wrapper {
          flex: 1 1 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #aaa;
        }

        .icon.prefix > svg {
          transform: scale(0.75);
        }

        .slider {
          flex: 1 1 0;
          -webkit-appearance: none;
          background: linear-gradient(to right, #666, #666 2px, transparent 2px);
          background-size: calc((100% - 13px) / (var(--preset-count) - 1)) 8px;
          background-position: 5px 50%;
          background-repeat: repeat-x;
        }

        .slider::-webkit-slider-runnable-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-moz-range-track {
          width: 100%;
          box-sizing: border-box;
          height: 16px;
          background-image: linear-gradient(#666, #666);
          background-size: calc(100% - 12px) 2px;
          background-repeat: no-repeat;
          background-position: 6px 50%;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border: 2px solid var(--slider-border);
          border-radius: 50%;
          background: var(--slider-bg);
          cursor: pointer;
        }

        .custom-value {
          opacity: 0.5;
        }

        .custom-value:hover,
        .custom-value:focus-within {
          opacity: 1;
        }

        .custom-value:not(:hover, :focus-within) {
          --slider-bg: #333;
          --slider-border: #666;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new Rt(this.propertyMetadata)),super.update(t)}renderEditor(){var t;const e={"slider-wrapper":!0,"custom-value":this.selectedPresetIndex<0},o=this.presets.values.length;return y`
      <div class=${ko(e)}>
        ${null}
        <input
          type="range"
          class="slider"
          style="--preset-count: ${o}"
          step="1"
          min="0"
          .max=${(o-1).toString()}
          .value=${this.selectedPresetIndex}
          @input=${this.handleSliderInput}
          @change=${this.handleSliderChange}
        />
        ${null}
      </div>
      <vaadin-dev-tools-theme-text-input
        class="input"
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleValueChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleSliderInput(t){const e=t.target,o=parseInt(e.value),n=this.presets.values[o];this.selectedPresetIndex=o,this.value=this.presets.rawValues[n]}handleSliderChange(){this.dispatchChange(this.value)}handleValueChange(t){this.value=t.detail.value,this.updateSliderValue(),this.dispatchChange(this.value)}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||""),this.updateSliderValue()}updateSliderValue(){const t=this.presets.findPreset(this.value);this.selectedPresetIndex=t?this.presets.values.indexOf(t):-1}};f([I()],It.prototype,"selectedPresetIndex",void 0);f([I()],It.prototype,"presets",void 0);It=f([z("vaadin-dev-tools-theme-range-property-editor")],It);const ze=(t,e=0,o=1)=>t>o?o:t<e?e:t,F=(t,e=0,o=Math.pow(10,e))=>Math.round(o*t)/o,Si=({h:t,s:e,v:o,a:n})=>{const i=(200-e)*o/100;return{h:F(t),s:F(i>0&&i<200?e*o/100/(i<=100?i:200-i)*100:0),l:F(i/2),a:F(n,2)}},vo=t=>{const{h:e,s:o,l:n}=Si(t);return`hsl(${e}, ${o}%, ${n}%)`},no=t=>{const{h:e,s:o,l:n,a:i}=Si(t);return`hsla(${e}, ${o}%, ${n}%, ${i})`},Gr=({h:t,s:e,v:o,a:n})=>{t=t/360*6,e=e/100,o=o/100;const i=Math.floor(t),s=o*(1-e),r=o*(1-(t-i)*e),l=o*(1-(1-t+i)*e),a=i%6;return{r:F([o,r,s,s,l,o][a]*255),g:F([l,o,o,r,s,s][a]*255),b:F([s,s,l,o,o,r][a]*255),a:F(n,2)}},Kr=t=>{const{r:e,g:o,b:n,a:i}=Gr(t);return`rgba(${e}, ${o}, ${n}, ${i})`},Jr=t=>{const e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return e?Yr({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},Yr=({r:t,g:e,b:o,a:n})=>{const i=Math.max(t,e,o),s=i-Math.min(t,e,o),r=s?i===t?(e-o)/s:i===e?2+(o-t)/s:4+(t-e)/s:0;return{h:F(60*(r<0?r+6:r)),s:F(i?s/i*100:0),v:F(i/255*100),a:n}},Xr=(t,e)=>{if(t===e)return!0;for(const o in t)if(t[o]!==e[o])return!1;return!0},Qr=(t,e)=>t.replace(/\s/g,"")===e.replace(/\s/g,""),Ln={},Ci=t=>{let e=Ln[t];return e||(e=document.createElement("template"),e.innerHTML=t,Ln[t]=e),e},No=(t,e,o)=>{t.dispatchEvent(new CustomEvent(e,{bubbles:!0,detail:o}))};let Oe=!1;const go=t=>"touches"in t,Zr=t=>Oe&&!go(t)?!1:(Oe||(Oe=go(t)),!0),Mn=(t,e)=>{const o=go(e)?e.touches[0]:e,n=t.el.getBoundingClientRect();No(t.el,"move",t.getMove({x:ze((o.pageX-(n.left+window.pageXOffset))/n.width),y:ze((o.pageY-(n.top+window.pageYOffset))/n.height)}))},ea=(t,e)=>{const o=e.keyCode;o>40||t.xy&&o<37||o<33||(e.preventDefault(),No(t.el,"move",t.getMove({x:o===39?.01:o===37?-.01:o===34?.05:o===33?-.05:o===35?1:o===36?-1:0,y:o===40?.01:o===38?-.01:0},!0)))};class Io{constructor(e,o,n,i){const s=Ci(`<div role="slider" tabindex="0" part="${o}" ${n}><div part="${o}-pointer"></div></div>`);e.appendChild(s.content.cloneNode(!0));const r=e.querySelector(`[part=${o}]`);r.addEventListener("mousedown",this),r.addEventListener("touchstart",this),r.addEventListener("keydown",this),this.el=r,this.xy=i,this.nodes=[r.firstChild,r]}set dragging(e){const o=e?document.addEventListener:document.removeEventListener;o(Oe?"touchmove":"mousemove",this),o(Oe?"touchend":"mouseup",this)}handleEvent(e){switch(e.type){case"mousedown":case"touchstart":if(e.preventDefault(),!Zr(e)||!Oe&&e.button!=0)return;this.el.focus(),Mn(this,e),this.dragging=!0;break;case"mousemove":case"touchmove":e.preventDefault(),Mn(this,e);break;case"mouseup":case"touchend":this.dragging=!1;break;case"keydown":ea(this,e);break}}style(e){e.forEach((o,n)=>{for(const i in o)this.nodes[n].style.setProperty(i,o[i])})}}class ta extends Io{constructor(e){super(e,"hue",'aria-label="Hue" aria-valuemin="0" aria-valuemax="360"',!1)}update({h:e}){this.h=e,this.style([{left:`${e/360*100}%`,color:vo({h:e,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuenow",`${F(e)}`)}getMove(e,o){return{h:o?ze(this.h+e.x*360,0,360):360*e.x}}}class oa extends Io{constructor(e){super(e,"saturation",'aria-label="Color"',!0)}update(e){this.hsva=e,this.style([{top:`${100-e.v}%`,left:`${e.s}%`,color:vo(e)},{"background-color":vo({h:e.h,s:100,v:100,a:1})}]),this.el.setAttribute("aria-valuetext",`Saturation ${F(e.s)}%, Brightness ${F(e.v)}%`)}getMove(e,o){return{s:o?ze(this.hsva.s+e.x*100,0,100):e.x*100,v:o?ze(this.hsva.v-e.y*100,0,100):Math.round(100-e.y*100)}}}const na=':host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none!important}[role=slider]{position:relative;touch-action:none;user-select:none;-webkit-user-select:none;outline:0}[role=slider]:last-child{border-radius:0 0 8px 8px}[part$=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;display:flex;place-content:center center;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part$=pointer]::after{content:"";width:100%;height:100%;border-radius:inherit;background-color:currentColor}[role=slider]:focus [part$=pointer]{transform:translate(-50%,-50%) scale(1.1)}',ia="[part=hue]{flex:0 0 24px;background:linear-gradient(to right,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red 100%)}[part=hue-pointer]{top:50%;z-index:2}",sa="[part=saturation]{flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,rgba(255,255,255,0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=saturation-pointer]{z-index:3}",pt=Symbol("same"),io=Symbol("color"),Vn=Symbol("hsva"),so=Symbol("update"),Dn=Symbol("parts"),Pt=Symbol("css"),Ot=Symbol("sliders");let ra=class extends HTMLElement{static get observedAttributes(){return["color"]}get[Pt](){return[na,ia,sa]}get[Ot](){return[oa,ta]}get color(){return this[io]}set color(t){if(!this[pt](t)){const e=this.colorModel.toHsva(t);this[so](e),this[io]=t}}constructor(){super();const t=Ci(`<style>${this[Pt].join("")}</style>`),e=this.attachShadow({mode:"open"});e.appendChild(t.content.cloneNode(!0)),e.addEventListener("move",this),this[Dn]=this[Ot].map(o=>new o(e))}connectedCallback(){if(this.hasOwnProperty("color")){const t=this.color;delete this.color,this.color=t}else this.color||(this.color=this.colorModel.defaultColor)}attributeChangedCallback(t,e,o){const n=this.colorModel.fromAttr(o);this[pt](n)||(this.color=n)}handleEvent(t){const e=this[Vn],o={...e,...t.detail};this[so](o);let n;!Xr(o,e)&&!this[pt](n=this.colorModel.fromHsva(o))&&(this[io]=n,No(this,"color-changed",{value:n}))}[pt](t){return this.color&&this.colorModel.equal(t,this.color)}[so](t){this[Vn]=t,this[Dn].forEach(e=>e.update(t))}};class aa extends Io{constructor(e){super(e,"alpha",'aria-label="Alpha" aria-valuemin="0" aria-valuemax="1"',!1)}update(e){this.hsva=e;const o=no({...e,a:0}),n=no({...e,a:1}),i=e.a*100;this.style([{left:`${i}%`,color:no(e)},{"--gradient":`linear-gradient(90deg, ${o}, ${n}`}]);const s=F(i);this.el.setAttribute("aria-valuenow",`${s}`),this.el.setAttribute("aria-valuetext",`${s}%`)}getMove(e,o){return{a:o?ze(this.hsva.a+e.x):e.x}}}const la=`[part=alpha]{flex:0 0 24px}[part=alpha]::after{display:block;content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;background-image:var(--gradient);box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part^=alpha]{background-color:#fff;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><rect x="8" width="8" height="8"/><rect y="8" width="8" height="8"/></svg>')}[part=alpha-pointer]{top:50%}`;class da extends ra{get[Pt](){return[...super[Pt],la]}get[Ot](){return[...super[Ot],aa]}}const ca={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Jr,fromHsva:Kr,equal:Qr,fromAttr:t=>t};class ha extends da{get colorModel(){return ca}}/**
* @license
* Copyright (c) 2017 - 2023 Vaadin Ltd.
* This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/function ua(t){const e=[];for(;t;){if(t.nodeType===Node.DOCUMENT_NODE){e.push(t);break}if(t.nodeType===Node.DOCUMENT_FRAGMENT_NODE){e.push(t),t=t.host;continue}if(t.assignedSlot){t=t.assignedSlot;continue}t=t.parentNode}return e}const ro={start:"top",end:"bottom"},ao={start:"left",end:"right"},zn=new ResizeObserver(t=>{setTimeout(()=>{t.forEach(e=>{e.target.__overlay&&e.target.__overlay._updatePosition()})})}),pa=t=>class extends t{static get properties(){return{positionTarget:{type:Object,value:null},horizontalAlign:{type:String,value:"start"},verticalAlign:{type:String,value:"top"},noHorizontalOverlap:{type:Boolean,value:!1},noVerticalOverlap:{type:Boolean,value:!1},requiredVerticalSpace:{type:Number,value:0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.addEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes=ua(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.removeEventListener("resize",this._updatePosition),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,o){if(this.__removeUpdatePositionEventListeners(),o&&(o.__overlay=null,zn.unobserve(o),e&&(this.__addUpdatePositionEventListeners(),o.__overlay=this,zn.observe(o))),e){const n=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(i=>{this.__margins[i]=parseInt(n[i],10)})),this.setAttribute("dir",n.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),o=this.__shouldAlignStartVertically(e);this.style.justifyContent=o?"flex-start":"flex-end";const n=this.__isRTL,i=this.__shouldAlignStartHorizontally(e,n),s=!n&&i||n&&!i;this.style.alignItems=s?"flex-start":"flex-end";const r=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,r,this.noVerticalOverlap,ro,this,o),a=this.__calculatePositionInOneDimension(e,r,this.noHorizontalOverlap,ao,this,i);Object.assign(this.style,l,a),this.toggleAttribute("bottom-aligned",!o),this.toggleAttribute("top-aligned",o),this.toggleAttribute("end-aligned",!s),this.toggleAttribute("start-aligned",s)}__shouldAlignStartHorizontally(e,o){const n=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const i=Math.min(window.innerWidth,document.documentElement.clientWidth),s=!o&&this.horizontalAlign==="start"||o&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,n,i,this.__margins,s,this.noHorizontalOverlap,ao)}__shouldAlignStartVertically(e){const o=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const n=Math.min(window.innerHeight,document.documentElement.clientHeight),i=this.verticalAlign==="top";return this.__shouldAlignStart(e,o,n,this.__margins,i,this.noVerticalOverlap,ro)}__shouldAlignStart(e,o,n,i,s,r,l){const a=n-e[r?l.end:l.start]-i[l.end],d=e[r?l.start:l.end]-i[l.start],c=s?a:d,p=c>(s?d:a)||c>o;return s===p}__adjustBottomProperty(e,o,n){let i;if(e===o.end){if(o.end===ro.end){const s=Math.min(window.innerHeight,document.documentElement.clientHeight);if(n>s&&this.__oldViewportHeight){const r=this.__oldViewportHeight-s;i=n-r}this.__oldViewportHeight=s}if(o.end===ao.end){const s=Math.min(window.innerWidth,document.documentElement.clientWidth);if(n>s&&this.__oldViewportWidth){const r=this.__oldViewportWidth-s;i=n-r}this.__oldViewportWidth=s}}return i}__calculatePositionInOneDimension(e,o,n,i,s,r){const l=r?i.start:i.end,a=r?i.end:i.start,d=parseFloat(s.style[l]||getComputedStyle(s)[l]),c=this.__adjustBottomProperty(l,i,d),p=o[r?i.start:i.end]-e[n===r?i.end:i.start],h=c?`${c}px`:`${d+p*(r?-1:1)}px`;return{[l]:h,[a]:""}}};class ma extends CustomEvent{constructor(e){super("color-picker-change",{detail:{value:e}})}}const Ti=k`
  :host {
    --preview-size: 24px;
    --preview-color: rgba(0, 0, 0, 0);
  }

  .preview {
    --preview-bg-size: calc(var(--preview-size) / 2);
    --preview-bg-pos: calc(var(--preview-size) / 4);

    width: var(--preview-size);
    height: var(--preview-size);
    padding: 0;
    position: relative;
    overflow: hidden;
    background: none;
    border: solid 2px #888;
    border-radius: 4px;
    box-sizing: content-box;
  }

  .preview::before,
  .preview::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .preview::before {
    content: '';
    background: white;
    background-image: linear-gradient(45deg, #666 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #666 75%), linear-gradient(45deg, transparent 75%, #666 75%),
      linear-gradient(45deg, #666 25%, transparent 25%);
    background-size: var(--preview-bg-size) var(--preview-bg-size);
    background-position: 0 0, 0 0, calc(var(--preview-bg-pos) * -1) calc(var(--preview-bg-pos) * -1),
      var(--preview-bg-pos) var(--preview-bg-pos);
  }

  .preview::after {
    content: '';
    background-color: var(--preview-color);
  }
`;let Ze=class extends N{constructor(){super(...arguments),this.commitValue=!1}static get styles(){return[Ti,k`
        #toggle {
          display: block;
        }
      `]}update(t){super.update(t),t.has("value")&&this.overlay&&this.overlay.requestContentUpdate()}firstUpdated(){this.overlay=document.createElement("vaadin-dev-tools-color-picker-overlay"),this.overlay.renderer=this.renderOverlayContent.bind(this),this.overlay.owner=this,this.overlay.positionTarget=this.toggle,this.overlay.noVerticalOverlap=!0,this.overlay.addEventListener("vaadin-overlay-escape-press",this.handleOverlayEscape.bind(this)),this.overlay.addEventListener("vaadin-overlay-close",this.handleOverlayClose.bind(this)),this.append(this.overlay)}render(){const t=this.value||"rgba(0, 0, 0, 0)";return y` <button
      id="toggle"
      class="preview"
      style="--preview-color: ${t}"
      @click=${this.open}
    ></button>`}open(){this.commitValue=!1,this.overlay.opened=!0,this.overlay.style.zIndex="1000000";const t=this.overlay.shadowRoot.querySelector('[part="overlay"]');t.style.background="#333"}renderOverlayContent(t){const e=getComputedStyle(this.toggle,"::after").getPropertyValue("background-color");_e(y` <div>
        <vaadin-dev-tools-color-picker-overlay-content
          .value=${e}
          .presets=${this.presets}
          @color-changed=${this.handleColorChange.bind(this)}
        ></vaadin-dev-tools-color-picker-overlay-content>
      </div>`,t)}handleColorChange(t){this.commitValue=!0,this.dispatchEvent(new ma(t.detail.value)),t.detail.close&&(this.overlay.opened=!1,this.handleOverlayClose())}handleOverlayEscape(){this.commitValue=!1}handleOverlayClose(){const t=this.commitValue?"color-picker-commit":"color-picker-cancel";this.dispatchEvent(new CustomEvent(t))}};f([_({})],Ze.prototype,"value",void 0);f([_({})],Ze.prototype,"presets",void 0);f([tt("#toggle")],Ze.prototype,"toggle",void 0);Ze=f([z("vaadin-dev-tools-color-picker")],Ze);let Lt=class extends N{static get styles(){return[Ti,k`
        :host {
          display: block;
          padding: 12px;
        }

        .picker::part(saturation),
        .picker::part(hue) {
          margin-bottom: 10px;
        }

        .picker::part(hue),
        .picker::part(alpha) {
          flex: 0 0 20px;
        }

        .picker::part(saturation),
        .picker::part(hue),
        .picker::part(alpha) {
          border-radius: 3px;
        }

        .picker::part(saturation-pointer),
        .picker::part(hue-pointer),
        .picker::part(alpha-pointer) {
          width: 20px;
          height: 20px;
        }

        .swatches {
          display: grid;
          grid-template-columns: repeat(6, var(--preview-size));
          grid-column-gap: 10px;
          grid-row-gap: 6px;
          margin-top: 16px;
        }
      `]}render(){return y` <div>
      <vaadin-dev-tools-rgba-string-color-picker
        class="picker"
        .color=${this.value}
        @color-changed=${this.handlePickerChange}
      ></vaadin-dev-tools-rgba-string-color-picker>
      ${this.renderSwatches()}
    </div>`}renderSwatches(){if(!this.presets||this.presets.length===0)return;const t=this.presets.map(e=>y` <button
        class="preview"
        style="--preview-color: ${e}"
        @click=${()=>this.selectPreset(e)}
      ></button>`);return y` <div class="swatches">${t}</div>`}handlePickerChange(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t.detail.value}}))}selectPreset(t){this.dispatchEvent(new CustomEvent("color-changed",{detail:{value:t,close:!0}}))}};f([_({})],Lt.prototype,"value",void 0);f([_({})],Lt.prototype,"presets",void 0);Lt=f([z("vaadin-dev-tools-color-picker-overlay-content")],Lt);customElements.whenDefined("vaadin-overlay").then(()=>{const t=customElements.get("vaadin-overlay");class e extends pa(t){}customElements.define("vaadin-dev-tools-color-picker-overlay",e)});customElements.define("vaadin-dev-tools-rgba-string-color-picker",ha);let Un=class extends q{constructor(){super(...arguments),this.presets=new Rt}static get styles(){return[q.styles,k`
        .editor-row {
          align-items: center;
        }

        .editor-row > .editor {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `]}update(t){t.has("propertyMetadata")&&(this.presets=new Rt(this.propertyMetadata)),super.update(t)}renderEditor(){var t;return y`
      <vaadin-dev-tools-color-picker
        .value=${this.value}
        .presets=${this.presets.values}
        @color-picker-change=${this.handleColorPickerChange}
        @color-picker-commit=${this.handleColorPickerCommit}
        @color-picker-cancel=${this.handleColorPickerCancel}
      ></vaadin-dev-tools-color-picker>
      <vaadin-dev-tools-theme-text-input
        .value=${this.value}
        .showClearButton=${((t=this.propertyValue)==null?void 0:t.modified)||!1}
        @change=${this.handleInputChange}
      ></vaadin-dev-tools-theme-text-input>
    `}handleInputChange(t){this.value=t.detail.value,this.dispatchChange(this.value)}handleColorPickerChange(t){this.value=t.detail.value}handleColorPickerCommit(){this.dispatchChange(this.value)}handleColorPickerCancel(){this.updateValueFromTheme()}dispatchChange(t){const e=this.presets.tryMapToPreset(t);super.dispatchChange(e)}updateValueFromTheme(){var t;super.updateValueFromTheme(),this.value=this.presets.tryMapToRawValue(((t=this.propertyValue)==null?void 0:t.value)||"")}};Un=f([z("vaadin-dev-tools-theme-color-property-editor")],Un);class fa extends CustomEvent{constructor(e){super("open-css",{detail:{element:e}})}}let Mt=class extends N{static get styles(){return k`
      .section .header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding: 0.4rem var(--theme-editor-section-horizontal-padding);
        color: var(--dev-tools-text-color-emphasis);
        background-color: rgba(0, 0, 0, 0.2);
      }

      .section .property-list .property-editor:not(:last-child) {
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .section .header .open-css {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        background-color: rgba(255, 255, 255, 0.12);
        color: var(--dev-tools-text-color);
        font-weight: 600;
        padding: 0.25rem 0.375rem;
        border-radius: 0.25rem;
      }

      .section .header .open-css:hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}render(){const t=this.metadata.elements.map(e=>this.renderSection(e));return y` <div>${t}</div> `}renderSection(t){const e=t.properties.map(o=>this.renderPropertyEditor(t,o));return y`
      <div class="section" data-testid=${t==null?void 0:t.displayName}>
        <div class="header">
          <span> ${t.displayName} </span>
          <button class="open-css" @click=${()=>this.handleOpenCss(t)}>Edit CSS</button>
        </div>
        <div class="property-list">${e}</div>
      </div>
    `}handleOpenCss(t){this.dispatchEvent(new fa(t))}renderPropertyEditor(t,e){let o;switch(e.editorType){case R.checkbox:o=ht`vaadin-dev-tools-theme-checkbox-property-editor`;break;case R.range:o=ht`vaadin-dev-tools-theme-range-property-editor`;break;case R.color:o=ht`vaadin-dev-tools-theme-color-property-editor`;break;default:o=ht`vaadin-dev-tools-theme-text-property-editor`}return vr` <${o}
          class="property-editor"
          .elementMetadata=${t}
          .propertyMetadata=${e}
          .theme=${this.theme}
          data-testid=${e.propertyName}
        >
        </${o}>`}};f([_({})],Mt.prototype,"metadata",void 0);f([_({})],Mt.prototype,"theme",void 0);Mt=f([z("vaadin-dev-tools-theme-property-list")],Mt);let Vt=class extends N{render(){return y`<div
      tabindex="-1"
      @mousemove=${this.onMouseMove}
      @click=${this.onClick}
      @keydown=${this.onKeyDown}
    ></div>`}onClick(t){const e=this.getTargetElement(t);this.dispatchEvent(new CustomEvent("shim-click",{detail:{target:e}}))}onMouseMove(t){const e=this.getTargetElement(t);this.dispatchEvent(new CustomEvent("shim-mousemove",{detail:{target:e}}))}onKeyDown(t){this.dispatchEvent(new CustomEvent("shim-keydown",{detail:{originalEvent:t}}))}getTargetElement(t){this.style.display="none";const e=document.elementFromPoint(t.clientX,t.clientY);return this.style.display="",e}};Vt.shadowRootOptions={...N.shadowRootOptions,delegatesFocus:!0};Vt.styles=[k`
      div {
        pointer-events: auto;
        background: rgba(255, 255, 255, 0);
        position: fixed;
        inset: 0px;
        z-index: 1000000;
      }
    `];Vt=f([z("vaadin-dev-tools-shim")],Vt);const va={resolve:t=>he(e=>e.classList.contains("cc-banner"),t)?document.querySelector("vaadin-cookie-consent"):void 0},ga={resolve:t=>{const e=he(o=>o.localName==="vaadin-login-overlay-wrapper",t);return e?e.__dataHost:void 0}},ya={resolve:t=>t.localName==="vaadin-dialog-overlay"?t.__dataHost:void 0},ba={resolve:t=>{const e=he(o=>o.localName==="vaadin-confirm-dialog-overlay",t);return e?e.__dataHost:void 0}},_a={resolve:t=>{const e=he(o=>o.localName==="vaadin-notification-card",t);return e?e.__dataHost:void 0}},wa={resolve:t=>t.localName!=="vaadin-menu-bar-item"?void 0:he(e=>e.localName==="vaadin-menu-bar",t)},jn=[va,ga,ya,ba,_a,wa],Ea={resolve:t=>he(e=>e.classList.contains("cc-banner"),t)},xa={resolve:t=>{var e;const o=he(n=>{var i;return((i=n.shadowRoot)==null?void 0:i.querySelector("[part=overlay]"))!=null},t);return(e=o==null?void 0:o.shadowRoot)==null?void 0:e.querySelector("[part=overlay]")}},Sa={resolve:t=>{var e;const o=he(n=>n.localName==="vaadin-login-overlay-wrapper",t);return(e=o==null?void 0:o.shadowRoot)==null?void 0:e.querySelector("[part=card]")}},Fn=[Sa,Ea,xa],he=function(t,e){return t(e)?e:e.parentNode&&e.parentNode instanceof HTMLElement?he(t,e.parentNode):void 0};class Ca{resolveElement(e){for(const o in jn){let n=e;if((n=jn[o].resolve(e))!==void 0)return n}return e}}class Ta{resolveElement(e){for(const o in Fn){let n=e;if((n=Fn[o].resolve(e))!==void 0)return n}return e}}const ka=new Ca,$a=new Ta;let fe=class extends N{constructor(){super(),this.active=!1,this.components=[],this.selected=0,this.mouseMoveEvent=this.mouseMoveEvent.bind(this)}connectedCallback(){super.connectedCallback();const t=new CSSStyleSheet;t.replaceSync(`
    .vaadin-dev-tools-highlight-overlay {
      pointer-events: none;
      position: absolute;
      z-index: 10000;
      background: rgba(158,44,198,0.25);
    }`),document.adoptedStyleSheets=[...document.adoptedStyleSheets,t],this.overlayElement=document.createElement("div"),this.overlayElement.classList.add("vaadin-dev-tools-highlight-overlay"),this.addEventListener("mousemove",this.mouseMoveEvent)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousemove",this.mouseMoveEvent)}render(){var t;return this.active?(this.style.display="block",y`
      <vaadin-dev-tools-shim
        @shim-click=${this.shimClick}
        @shim-mousemove=${this.shimMove}
        @shim-keydown=${this.shimKeydown}
      ></vaadin-dev-tools-shim>
      <div class="window popup component-picker-info">${(t=this.options)==null?void 0:t.infoTemplate}</div>
      <div class="window popup component-picker-components-info">
        <div>
          ${this.components.map((e,o)=>y`<div class=${o===this.selected?"selected":""}>
                ${e.element.tagName.toLowerCase()}
              </div>`)}
        </div>
      </div>
    `):(this.style.display="none",null)}open(t){this.options=t,this.active=!0,this.dispatchEvent(new CustomEvent("component-picker-opened",{}))}close(){this.active=!1,this.dispatchEvent(new CustomEvent("component-picker-closed",{}))}update(t){if(super.update(t),(t.has("selected")||t.has("components"))&&this.highlight(this.components[this.selected]),t.has("active")){const e=t.get("active"),o=this.active;!e&&o?requestAnimationFrame(()=>this.shim.focus()):e&&!o&&this.highlight(void 0)}}mouseMoveEvent(t){var e;if(!this.active){this.style.display="none";return}const o=(e=this.shadowRoot)==null?void 0:e.querySelector(".component-picker-info");if(o){const n=o.getBoundingClientRect();t.x>n.x&&t.x<n.x+n.width&&t.y>n.y&&t.y<=n.y+n.height?o.style.opacity="0.05":o.style.opacity="1.0"}}shimKeydown(t){const e=t.detail.originalEvent;if(e.key==="Escape")this.close(),t.stopPropagation(),t.preventDefault();else if(e.key==="ArrowUp"){let o=this.selected-1;o<0&&(o=this.components.length-1),this.selected=o}else e.key==="ArrowDown"?this.selected=(this.selected+1)%this.components.length:e.key==="Enter"&&(this.pickSelectedComponent(),t.stopPropagation(),t.preventDefault())}shimMove(t){const e=ka.resolveElement(t.detail.target);this.components=xr(e),this.selected=this.components.length-1,this.components[this.selected].highlightElement=$a.resolveElement(t.detail.target)}shimClick(t){this.pickSelectedComponent()}pickSelectedComponent(){const t=this.components[this.selected];if(t&&this.options)try{this.options.pickCallback(t)}catch(e){console.error("Pick callback failed",e)}this.close()}highlight(t){let e=(t==null?void 0:t.highlightElement)??(t==null?void 0:t.element);if(this.highlighted!==e)if(e){const o=e.getBoundingClientRect(),n=getComputedStyle(e);this.overlayElement.style.top=`${o.top}px`,this.overlayElement.style.left=`${o.left}px`,this.overlayElement.style.width=`${o.width}px`,this.overlayElement.style.height=`${o.height}px`,this.overlayElement.style.borderRadius=n.borderRadius,document.body.append(this.overlayElement)}else this.overlayElement.remove();this.highlighted=e}};fe.styles=[wi,k`
      .component-picker-info {
        left: 1em;
        bottom: 1em;
      }

      .component-picker-components-info {
        right: 3em;
        bottom: 1em;
      }

      .component-picker-components-info .selected {
        font-weight: bold;
      }
    `];f([I()],fe.prototype,"active",void 0);f([I()],fe.prototype,"components",void 0);f([I()],fe.prototype,"selected",void 0);f([tt("vaadin-dev-tools-shim")],fe.prototype,"shim",void 0);fe=f([z("vaadin-dev-tools-component-picker")],fe);const Aa=Object.freeze(Object.defineProperty({__proto__:null,get ComponentPicker(){return fe}},Symbol.toStringTag,{value:"Module"}));class Ra{constructor(){this.currentActiveComponent=null,this.currentActiveComponentMetaData=null,this.componentPicked=async(e,o)=>{await this.hideOverlay(),this.currentActiveComponent=e,this.currentActiveComponentMetaData=o},this.showOverlay=()=>{!this.currentActiveComponent||!this.currentActiveComponentMetaData||this.currentActiveComponentMetaData.openOverlay&&this.currentActiveComponentMetaData.openOverlay(this.currentActiveComponent)},this.hideOverlay=()=>{!this.currentActiveComponent||!this.currentActiveComponentMetaData||this.currentActiveComponentMetaData.hideOverlay&&this.currentActiveComponentMetaData.hideOverlay(this.currentActiveComponent)},this.reset=()=>{this.currentActiveComponent=null,this.currentActiveComponentMetaData=null}}}const ye=new Ra,hl=t=>{const e=t.element.$.comboBox,o=e.$.overlay;Na(t.element,e,o)},ul=t=>{const e=t.element,o=e.$.comboBox,n=o.$.overlay;Ia(e,o,n)},Na=(t,e,o)=>{t.opened=!0,o._storedModeless=o.modeless,o.modeless=!0,document._themeEditorDocClickListener=Pa(t,e),document.addEventListener("click",document._themeEditorDocClickListener),e.removeEventListener("focusout",e._boundOnFocusout)},Ia=(t,e,o)=>{t.opened=!1,!(!e||!o)&&(o.modeless=o._storedModeless,delete o._storedModeless,e.addEventListener("focusout",e._boundOnFocusout),document.removeEventListener("click",document._themeEditorDocClickListener),delete document._themeEditorDocClickListener)},Pa=(t,e)=>o=>{const n=o.target;n!=null&&(e.opened=!Oa(n,t))};function Oa(t,e){if(!t||!t.tagName)return!0;if(t.tagName.startsWith("VAADIN-DEV"))return!1;let o=t,n={nodeId:-1,uiId:-1,element:void 0};for(;o&&o.parentNode&&(n=po(o),n.nodeId===-1);)o=o.parentElement?o.parentElement:o.parentNode.host;const i=po(e);return!(n.nodeId!==-1&&i.nodeId===n.nodeId)}Ro(k`
  .vaadin-theme-editor-highlight {
    outline: solid 2px #9e2cc6;
    outline-offset: 3px;
  }
`);let ce=class extends N{constructor(){super(...arguments),this.expanded=!1,this.themeEditorState=Ve.enabled,this.context=null,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null,this.markedAsUsed=!1}static get styles(){return k`
      :host {
        animation: fade-in var(--dev-tools-transition-duration) ease-in;
        --theme-editor-section-horizontal-padding: 0.75rem;
        display: flex;
        flex-direction: column;
        max-height: 400px;
      }

      .notice {
        padding: var(--theme-editor-section-horizontal-padding);
      }

      .notice a {
        color: var(--dev-tools-text-color-emphasis);
      }

      .hint vaadin-icon {
        color: var(--dev-tools-green-color);
        font-size: var(--lumo-icon-size-m);
      }

      .hint {
        display: flex;
        align-items: center;
        gap: var(--theme-editor-section-horizontal-padding);
      }

      .header {
        flex: 0 0 auto;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
      }

      .header .picker-row {
        padding: var(--theme-editor-section-horizontal-padding);
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;
      }

      .picker {
        flex: 1 1 0;
        min-width: 0;
        display: flex;
        align-items: center;
      }

      .picker button {
        min-width: 0;
        display: inline-flex;
        align-items: center;
        padding: 0;
        line-height: 20px;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .picker button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .picker svg,
      .picker .component-type {
        flex: 0 0 auto;
        margin-right: 4px;
      }

      .picker .instance-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #e5a2fce5;
      }

      .picker .instance-name-quote {
        color: #e5a2fce5;
      }

      .picker .no-selection {
        font-style: italic;
      }

      .actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .property-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }

      .link-button {
        all: initial;
        font-family: inherit;
        font-size: var(--dev-tools-font-size-small);
        line-height: 1;
        white-space: nowrap;
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
      }

      .link-button:focus,
      .link-button:hover {
        color: var(--dev-tools-text-color-emphasis);
      }

      .icon-button {
        padding: 0;
        line-height: 0;
        border: none;
        background: none;
        color: var(--dev-tools-text-color);
      }

      .icon-button:disabled {
        opacity: 0.5;
      }

      .icon-button:not(:disabled):hover {
        color: var(--dev-tools-text-color-emphasis);
      }
    `}firstUpdated(){this.api=new Fr(this.connection),this.history=new Br(this.api),this.historyActions=this.history.allowedActions,this.undoRedoListener=t=>{var e,o;const n=t.key==="Z"||t.key==="z";n&&(t.ctrlKey||t.metaKey)&&t.shiftKey?(e=this.historyActions)!=null&&e.allowRedo&&this.handleRedo():n&&(t.ctrlKey||t.metaKey)&&(o=this.historyActions)!=null&&o.allowUndo&&this.handleUndo()},document.addEventListener("vaadin-theme-updated",()=>{ge.clear(),this.refreshTheme()}),document.addEventListener("keydown",this.undoRedoListener)}activate(){this.dispatchEvent(new CustomEvent("before-open"))}deactivate(){this.dispatchEvent(new CustomEvent("after-close"))}update(t){var e,o;super.update(t),t.has("expanded")&&(this.expanded?(this.highlightElement((e=this.context)==null?void 0:e.component.element),ye.showOverlay()):(ye.hideOverlay(),this.removeElementHighlight((o=this.context)==null?void 0:o.component.element)))}disconnectedCallback(){var t;super.disconnectedCallback(),this.removeElementHighlight((t=this.context)==null?void 0:t.component.element),ye.hideOverlay(),ye.reset(),document.removeEventListener("keydown",this.undoRedoListener)}render(){var t,e,o;return this.themeEditorState===Ve.missing_theme?this.renderMissingThemeNotice():y`
      <div class="header">
        <div class="picker-row">
          ${this.renderPicker()}
          <div class="actions">
            ${(t=this.context)!=null&&t.metadata?y` <vaadin-dev-tools-theme-scope-selector
                  .value=${this.context.scope}
                  .metadata=${this.context.metadata}
                  @scope-change=${this.handleScopeChange}
                ></vaadin-dev-tools-theme-scope-selector>`:null}
            <button
              class="icon-button"
              data-testid="undo"
              ?disabled=${!((e=this.historyActions)!=null&&e.allowUndo)}
              @click=${this.handleUndo}
            >
              ${bt.undo}
            </button>
            <button
              class="icon-button"
              data-testid="redo"
              ?disabled=${!((o=this.historyActions)!=null&&o.allowRedo)}
              @click=${this.handleRedo}
            >
              ${bt.redo}
            </button>
          </div>
        </div>
        ${this.renderLocalClassNameEditor()}
      </div>
      ${this.renderPropertyList()}
    `}renderMissingThemeNotice(){return y`
      <div class="notice">
        It looks like you have not set up an application theme yet. Theme editor requires an existing theme to work
        with. Please check our
        <a href="https://vaadin.com/docs/latest/styling/application-theme" target="_blank">documentation</a>
        on how to set up an application theme.
      </div>
    `}renderPropertyList(){if(!this.context)return null;if(!this.context.metadata){const t=this.context.component.element.localName;return y`
        <div class="notice">Styling <code>&lt;${t}&gt;</code> components is not supported at the moment.</div>
      `}if(this.context.scope===P.local&&!this.context.accessible){const t=this.context.metadata.displayName;return y`
        ${this.context.metadata.notAccessibleDescription&&this.context.scope===P.local?y`<div class="notice hint" style="padding-bottom: 0;">
              <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
              <div>${this.context.metadata.notAccessibleDescription}</div>
            </div>`:""}
        <div class="notice">
          The selected ${t} cannot be styled locally. Currently, Theme Editor only supports styling
          instances that are assigned to a local variable, like so:
          <pre><code>Button saveButton = new Button("Save");</code></pre>
          If you want to modify the code so that it satisfies this requirement,
          <button class="link-button" @click=${this.handleShowComponent}>click here</button>
          to open it in your IDE. Alternatively you can choose to style all ${t}s by selecting "Global" from
          the scope dropdown above.
        </div>
      `}return y` ${this.context.metadata.description&&this.context.scope===P.local?y`<div class="notice hint">
            <vaadin-icon icon="vaadin:lightbulb"></vaadin-icon>
            <div>${this.context.metadata.description}</div>
          </div>`:""}
      <vaadin-dev-tools-theme-property-list
        class="property-list"
        .metadata=${this.context.metadata}
        .theme=${this.effectiveTheme}
        @theme-property-value-change=${this.handlePropertyChange}
        @open-css=${this.handleOpenCss}
      ></vaadin-dev-tools-theme-property-list>`}handleShowComponent(){if(!this.context)return;const t=this.context.component,e={nodeId:t.nodeId,uiId:t.uiId};this.connection.sendShowComponentCreateLocation(e)}async handleOpenCss(t){if(!this.context)return;await this.ensureLocalClassName();const e={themeScope:this.context.scope,localClassName:this.context.localClassName},o=De(t.detail.element,e);await this.api.openCss(o)}renderPicker(){var t;let e;if((t=this.context)!=null&&t.metadata){const o=this.context.scope===P.local?this.context.metadata.displayName:`All ${this.context.metadata.displayName}s`,n=y`<span class="component-type">${o}</span>`,i=this.context.scope===P.local?Ur(this.context.component):null,s=i?y` <span class="instance-name-quote">"</span><span class="instance-name">${i}</span
            ><span class="instance-name-quote">"</span>`:null;e=y`${n} ${s}`}else e=y`<span class="no-selection">Pick an element to get started</span>`;return y`
      <div class="picker">
        <button @click=${this.pickComponent}>${bt.crosshair} ${e}</button>
      </div>
    `}renderLocalClassNameEditor(){var t;const e=((t=this.context)==null?void 0:t.scope)===P.local&&this.context.accessible;if(!this.context||!e)return null;const o=this.context.localClassName||this.context.suggestedClassName;return y` <vaadin-dev-tools-theme-class-name-editor
      .className=${o}
      @class-name-change=${this.handleClassNameChange}
    >
    </vaadin-dev-tools-theme-class-name-editor>`}async handleClassNameChange(t){if(!this.context)return;const e=this.context.localClassName,o=t.detail.value;if(e){const n=this.context.component.element;this.context.localClassName=o;const i=await this.api.setLocalClassName(this.context.component,o);this.historyActions=this.history.push(i.requestId,()=>ge.previewLocalClassName(n,o),()=>ge.previewLocalClassName(n,e))}else this.context={...this.context,suggestedClassName:o}}async pickComponent(){var t;ye.hideOverlay(),this.removeElementHighlight((t=this.context)==null?void 0:t.component.element),this.pickerProvider().open({infoTemplate:y`
        <div>
          <h3>Locate the component to style</h3>
          <p>Use the mouse cursor to highlight components in the UI.</p>
          <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
          <p>Click the primary mouse button to select the component.</p>
        </div>
      `,pickCallback:async e=>{var o;const n=await Mr.getMetadata(e);if(!n){this.context={component:e,scope:((o=this.context)==null?void 0:o.scope)||P.local},this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}await ye.componentPicked(e,n),this.highlightElement(e.element),this.refreshComponentAndTheme(e,n),ye.showOverlay()}})}handleScopeChange(t){this.context&&this.refreshTheme({...this.context,scope:t.detail.value})}async handlePropertyChange(t){if(!this.context||!this.baseTheme||!this.editedTheme)return;const{element:e,property:o,value:n}=t.detail;this.editedTheme.updatePropertyValue(e.selector,o.propertyName,n,!0),this.effectiveTheme=me.combine(this.baseTheme,this.editedTheme),await this.ensureLocalClassName();const i={themeScope:this.context.scope,localClassName:this.context.localClassName},s=Vr(e,i,o.propertyName,n);try{const r=await this.api.setCssRules([s]);this.historyActions=this.history.push(r.requestId);const l=Dr(s);ge.add(l)}catch(r){console.error("Failed to update property value",r)}}async handleUndo(){this.historyActions=await this.history.undo(),await this.refreshComponentAndTheme()}async handleRedo(){this.historyActions=await this.history.redo(),await this.refreshComponentAndTheme()}async ensureLocalClassName(){if(!this.context||this.context.scope===P.global||this.context.localClassName)return;if(!this.context.localClassName&&!this.context.suggestedClassName)throw new Error("Cannot assign local class name for the component because it does not have a suggested class name");const t=this.context.component.element,e=this.context.suggestedClassName;this.context.localClassName=e;const o=await this.api.setLocalClassName(this.context.component,e);this.historyActions=this.history.push(o.requestId,()=>ge.previewLocalClassName(t,e),()=>ge.previewLocalClassName(t))}async refreshComponentAndTheme(t,e){var o,n,i;if(t=t||((o=this.context)==null?void 0:o.component),e=e||((n=this.context)==null?void 0:n.metadata),!t||!e)return;const s=await this.api.loadComponentMetadata(t);this.markedAsUsed||this.api.markAsUsed().then(()=>{this.markedAsUsed=!0}),ge.previewLocalClassName(t.element,s.className),await this.refreshTheme({scope:((i=this.context)==null?void 0:i.scope)||P.local,metadata:e,component:t,localClassName:s.className,suggestedClassName:s.suggestedClassName,accessible:s.accessible})}async refreshTheme(t){const e=t||this.context;if(!e||!e.metadata)return;if(e.scope===P.local&&!e.accessible){this.context=e,this.baseTheme=null,this.editedTheme=null,this.effectiveTheme=null;return}let o=new me(e.metadata);if(!(e.scope===P.local&&!e.localClassName)){const i={themeScope:e.scope,localClassName:e.localClassName},s=e.metadata.elements.map(l=>De(l,i)),r=await this.api.loadRules(s);o=me.fromServerRules(e.metadata,i,r.rules)}const n=await zr(e.metadata);this.context=e,this.baseTheme=n,this.editedTheme=o,this.effectiveTheme=me.combine(n,this.editedTheme)}highlightElement(t){t&&t.classList.add("vaadin-theme-editor-highlight")}removeElementHighlight(t){t&&t.classList.remove("vaadin-theme-editor-highlight")}};f([_({})],ce.prototype,"expanded",void 0);f([_({})],ce.prototype,"themeEditorState",void 0);f([_({})],ce.prototype,"pickerProvider",void 0);f([_({})],ce.prototype,"connection",void 0);f([I()],ce.prototype,"historyActions",void 0);f([I()],ce.prototype,"context",void 0);f([I()],ce.prototype,"effectiveTheme",void 0);ce=f([z("vaadin-dev-tools-theme-editor")],ce);var La=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],n=0;n<t.rangeCount;n++)o.push(t.getRangeAt(n));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||o.forEach(function(i){t.addRange(i)}),e&&e.focus()}},Bn={"text/plain":"Text","text/html":"Url",default:"Text"},Ma="Copy to clipboard: #{key}, Enter";function Va(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Da(t,e){var o,n,i,s,r,l,a=!1;e||(e={}),o=e.debug||!1;try{i=La(),s=document.createRange(),r=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(c){if(c.stopPropagation(),e.format)if(c.preventDefault(),typeof c.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var p=Bn[e.format]||Bn.default;window.clipboardData.setData(p,t)}else c.clipboardData.clearData(),c.clipboardData.setData(e.format,t);e.onCopy&&(c.preventDefault(),e.onCopy(c.clipboardData))}),document.body.appendChild(l),s.selectNodeContents(l),r.addRange(s);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");a=!0}catch(c){o&&console.error("unable to copy using execCommand: ",c),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),a=!0}catch(p){o&&console.error("unable to copy using clipboardData: ",p),o&&console.error("falling back to prompt"),n=Va("message"in e?e.message:Ma),window.prompt(n,t)}}finally{r&&(typeof r.removeRange=="function"?r.removeRange(s):r.removeAllRanges()),l&&document.body.removeChild(l),i()}return a}let Dt=class extends N{constructor(){super(...arguments),this.serverInfo={versions:[]}}createRenderRoot(){return this}render(){return y` <div class="info-tray">
      <button class="button copy" @click=${this.copyInfoToClipboard}>Copy</button>
      <dl>
        ${this.serverInfo.versions.map(t=>y`
            <dt>${t.name}</dt>
            <dd>${t.version}</dd>
          `)}
        <dt>Browser</dt>
        <dd>${navigator.userAgent}</dd>
        <dt>
          Live reload
          <label class="switch">
            <input
              id="toggle"
              type="checkbox"
              ?disabled=${!this._devTools.conf.enable||(this._devTools.frontendStatus===x.UNAVAILABLE||this._devTools.frontendStatus===x.ERROR)&&(this._devTools.javaStatus===x.UNAVAILABLE||this._devTools.javaStatus===x.ERROR)}
              ?checked="${this._devTools.frontendStatus===x.ACTIVE||this._devTools.javaStatus===x.ACTIVE}"
              @change=${t=>this._devTools.setActive(t.target.checked)}
            />
            <span class="slider"></span>
          </label>
        </dt>
        <dd
          class="live-reload-status"
          style="--status-color: ${this._devTools.getStatusColor(this._devTools.conf.backend===S.HOTSWAP_AGENT||this._devTools.conf.backend===S.JREBEL?this._devTools.frontendStatus:this._devTools.javaStatus)}"
        >
          Java ${this._devTools.conf.backend===S.HOTSWAP_AGENT||this._devTools.conf.backend===S.JREBEL?this._devTools.frontendStatus:this._devTools.javaStatus}
          ${this._devTools.conf.backend?`(${S.BACKEND_DISPLAY_NAME[this._devTools.conf.backend]})`:""}
        </dd>
        <dd
          class="live-reload-status"
          style="--status-color: ${this._devTools.getStatusColor(this._devTools.frontendStatus)}"
        >
          Front end ${this._devTools.frontendStatus}
        </dd>
      </dl>
    </div>`}handleMessage(t){return(t==null?void 0:t.command)==="serverInfo"?(this.serverInfo=t.data,!0):!1}copyInfoToClipboard(){const t=this.renderRoot.querySelectorAll(".info-tray dt, .info-tray dd"),e=Array.from(t).map(o=>(o.localName==="dd"?": ":`
`)+o.textContent.trim()).join("").replace(/^\n/,"");Da(e),this._devTools.showNotification(V.INFORMATION,"Environment information copied to clipboard",void 0,void 0,"versionInfoCopied")}};f([_({type:Object})],Dt.prototype,"_devTools",void 0);f([I()],Dt.prototype,"serverInfo",void 0);Dt=f([z("vaadin-dev-tools-info")],Dt);let yo=class extends N{createRenderRoot(){return this}activate(){this._devTools.unreadErrors=!1,this.updateComplete.then(()=>{const t=this.renderRoot.querySelector(".message-tray .message:last-child");t&&t.scrollIntoView()})}render(){return y`<div class="message-tray">
      ${this._devTools.messages.map(t=>this._devTools.renderMessage(t))}
    </div>`}};f([_({type:Object})],yo.prototype,"_devTools",void 0);yo=f([z("vaadin-dev-tools-log")],yo);const Hn=16384;class ki extends At{constructor(e){if(super(),!e)return;const o={transport:"websocket",fallbackTransport:"websocket",url:e,contentType:"application/json; charset=UTF-8",reconnectInterval:5e3,timeout:-1,maxReconnectOnClose:1e7,trackMessageLength:!0,enableProtocol:!0,handleOnlineOffline:!1,executeCallbackBeforeReconnect:!0,messageDelimiter:"|",onMessage:n=>{const i={data:n.responseBody};this.handleMessage(i)},onError:n=>{this.handleError(n)}};za().then(n=>{this.socket=n.subscribe(o)})}onReload(){}onUpdate(e,o){}onMessage(e){}handleMessage(e){let o;try{o=JSON.parse(e.data)}catch(n){this.handleError(`[${n.name}: ${n.message}`);return}o.command==="hello"?(this.setStatus(x.ACTIVE),this.onHandshake()):o.command==="reload"?this.status===x.ACTIVE&&this.onReload():o.command==="update"?this.status===x.ACTIVE&&this.onUpdate(o.path,o.content):this.onMessage(o)}handleError(e){console.error(e),this.setStatus(x.ERROR),this.onConnectionError(e)}send(e,o){if(!this.socket){Po(()=>this.socket,s=>this.send(e,o));return}const n=JSON.stringify({command:e,data:o});let i=n.length+"|"+n;for(;i.length;)this.socket.push(i.substring(0,Hn)),i=i.substring(Hn)}}ki.HEARTBEAT_INTERVAL=18e4;function Po(t,e){const o=t();o?e(o):setTimeout(()=>Po(t,e),50)}function za(){return new Promise((t,e)=>{Po(()=>{var o;return(o=window==null?void 0:window.vaadinPush)==null?void 0:o.atmosphere},t)})}var T,V;(function(t){t.LOG="log",t.INFORMATION="information",t.WARNING="warning",t.ERROR="error"})(V||(V={}));let S=T=class extends N{static get styles(){return[k`
        :host {
          --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
          --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;

          --dev-tools-font-size: 0.8125rem;
          --dev-tools-font-size-small: 0.75rem;

          --dev-tools-text-color: rgba(255, 255, 255, 0.8);
          --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
          --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
          --dev-tools-text-color-active: rgba(255, 255, 255, 1);

          --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
          --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
          --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

          --dev-tools-border-radius: 0.5rem;
          --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

          --dev-tools-blue-hsl: 206, 100%, 70%;
          --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
          --dev-tools-green-hsl: 145, 80%, 42%;
          --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
          --dev-tools-grey-hsl: 0, 0%, 50%;
          --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
          --dev-tools-yellow-hsl: 38, 98%, 64%;
          --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
          --dev-tools-red-hsl: 355, 100%, 68%;
          --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

          /* Needs to be in ms, used in JavaScript as well */
          --dev-tools-transition-duration: 180ms;

          all: initial;

          direction: ltr;
          cursor: default;
          font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
          color: var(--dev-tools-text-color);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          color-scheme: dark;

          position: fixed;
          z-index: 20000;
          pointer-events: none;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }

        .dev-tools {
          pointer-events: auto;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: inherit;
          right: 0.5rem;
          bottom: 0.5rem;
          min-width: 1.75rem;
          height: 1.75rem;
          max-width: 1.75rem;
          border-radius: 0.5rem;
          padding: 0.375rem;
          box-sizing: border-box;
          background-color: var(--dev-tools-background-color-inactive);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          white-space: nowrap;
          line-height: 1rem;
        }

        .dev-tools:hover,
        .dev-tools.active {
          background-color: var(--dev-tools-background-color-active);
          box-shadow: var(--dev-tools-box-shadow);
        }

        .dev-tools.active {
          max-width: calc(100% - 1rem);
        }

        .dev-tools .dev-tools-icon {
          flex: none;
          pointer-events: none;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          fill: #fff;
          transition: var(--dev-tools-transition-duration);
          margin: 0;
        }

        .dev-tools.active .dev-tools-icon {
          opacity: 0;
          position: absolute;
          transform: scale(0.5);
        }

        .dev-tools .status-blip {
          flex: none;
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          z-index: 20001;
          background: var(--dev-tools-grey-color);
          position: absolute;
          top: -1px;
          right: -1px;
        }

        .dev-tools .status-description {
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 0.25rem;
        }

        .dev-tools.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.15);
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        .switch {
          display: inline-flex;
          align-items: center;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
          position: absolute;
        }

        .switch .slider {
          display: block;
          flex: none;
          width: 28px;
          height: 18px;
          border-radius: 9px;
          background-color: rgba(255, 255, 255, 0.3);
          transition: var(--dev-tools-transition-duration);
          margin-right: 0.5rem;
        }

        .switch:focus-within .slider,
        .switch .slider:hover {
          background-color: rgba(255, 255, 255, 0.35);
          transition: none;
        }

        .switch input:focus-visible ~ .slider {
          box-shadow: 0 0 0 2px var(--dev-tools-background-color-active), 0 0 0 4px var(--dev-tools-blue-color);
        }

        .switch .slider::before {
          content: '';
          display: block;
          margin: 2px;
          width: 14px;
          height: 14px;
          background-color: #fff;
          transition: var(--dev-tools-transition-duration);
          border-radius: 50%;
        }

        .switch input:checked + .slider {
          background-color: var(--dev-tools-green-color);
        }

        .switch input:checked + .slider::before {
          transform: translateX(10px);
        }

        .switch input:disabled + .slider::before {
          background-color: var(--dev-tools-grey-color);
        }

        .window.hidden {
          opacity: 0;
          transform: scale(0);
          position: absolute;
        }

        .window.visible {
          transform: none;
          opacity: 1;
          pointer-events: auto;
        }

        .window.visible ~ .dev-tools {
          opacity: 0;
          pointer-events: none;
        }

        .window.visible ~ .dev-tools .dev-tools-icon,
        .window.visible ~ .dev-tools .status-blip {
          transition: none;
          opacity: 0;
        }

        .window {
          border-radius: var(--dev-tools-border-radius);
          overflow: auto;
          margin: 0.5rem;
          min-width: 30rem;
          max-width: calc(100% - 1rem);
          max-height: calc(100vh - 1rem);
          flex-shrink: 1;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          display: flex;
          flex-direction: column;
          box-shadow: var(--dev-tools-box-shadow);
          outline: none;
        }

        .window-toolbar {
          display: flex;
          flex: none;
          align-items: center;
          padding: 0.375rem;
          white-space: nowrap;
          order: 1;
          background-color: rgba(0, 0, 0, 0.2);
          gap: 0.5rem;
        }

        .tab {
          color: var(--dev-tools-text-color-secondary);
          font: inherit;
          font-size: var(--dev-tools-font-size-small);
          font-weight: 500;
          line-height: 1;
          padding: 0.25rem 0.375rem;
          background: none;
          border: none;
          margin: 0;
          border-radius: 0.25rem;
          transition: var(--dev-tools-transition-duration);
        }

        .tab:hover,
        .tab.active {
          color: var(--dev-tools-text-color-active);
        }

        .tab.active {
          background-color: rgba(255, 255, 255, 0.12);
        }

        .tab.unreadErrors::after {
          content: '•';
          color: hsl(var(--dev-tools-red-hsl));
          font-size: 1.5rem;
          position: absolute;
          transform: translate(0, -50%);
        }

        .ahreflike {
          font-weight: 500;
          color: var(--dev-tools-text-color-secondary);
          text-decoration: underline;
          cursor: pointer;
        }

        .ahreflike:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .button {
          all: initial;
          font-family: inherit;
          font-size: var(--dev-tools-font-size-small);
          line-height: 1;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-weight: 600;
          padding: 0.25rem 0.375rem;
          border-radius: 0.25rem;
        }

        .button:focus,
        .button:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .minimize-button {
          flex: none;
          width: 1rem;
          height: 1rem;
          color: inherit;
          background-color: transparent;
          border: 0;
          padding: 0;
          margin: 0 0 0 auto;
          opacity: 0.8;
        }

        .minimize-button:hover {
          opacity: 1;
        }

        .minimize-button svg {
          max-width: 100%;
        }

        .message.information {
          --dev-tools-notification-color: var(--dev-tools-blue-color);
        }

        .message.warning {
          --dev-tools-notification-color: var(--dev-tools-yellow-color);
        }

        .message.error {
          --dev-tools-notification-color: var(--dev-tools-red-color);
        }

        .message {
          display: flex;
          padding: 0.1875rem 0.75rem 0.1875rem 2rem;
          background-clip: padding-box;
        }

        .message.log {
          padding-left: 0.75rem;
        }

        .message-content {
          margin-right: 0.5rem;
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
        }

        .message-heading {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0.125rem 0;
        }

        .message.log {
          color: var(--dev-tools-text-color-secondary);
        }

        .message:not(.log) .message-heading {
          font-weight: 500;
        }

        .message.has-details .message-heading {
          color: var(--dev-tools-text-color-emphasis);
          font-weight: 600;
        }

        .message-heading::before {
          position: absolute;
          margin-left: -1.5rem;
          display: inline-block;
          text-align: center;
          font-size: 0.875em;
          font-weight: 600;
          line-height: calc(1.25em - 2px);
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 50%;
        }

        .message.information .message-heading::before {
          content: 'i';
          border-color: currentColor;
          color: var(--dev-tools-notification-color);
        }

        .message.warning .message-heading::before,
        .message.error .message-heading::before {
          content: '!';
          color: var(--dev-tools-background-color-active);
          background-color: var(--dev-tools-notification-color);
        }

        .features-tray {
          padding: 0.75rem;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .features-tray p {
          margin-top: 0;
          color: var(--dev-tools-text-color-secondary);
        }

        .features-tray .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.5em;
        }

        .message .message-details {
          font-weight: 400;
          color: var(--dev-tools-text-color-secondary);
          margin: 0.25rem 0;
        }

        .message .message-details[hidden] {
          display: none;
        }

        .message .message-details p {
          display: inline;
          margin: 0;
          margin-right: 0.375em;
          word-break: break-word;
        }

        .message .persist {
          color: var(--dev-tools-text-color-secondary);
          white-space: nowrap;
          margin: 0.375rem 0;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .message .persist::before {
          content: '';
          width: 1em;
          height: 1em;
          border-radius: 0.2em;
          margin-right: 0.375em;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .message .persist:hover::before {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .message .persist.on::before {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message .persist.on::after {
          content: '';
          order: -1;
          position: absolute;
          width: 0.75em;
          height: 0.25em;
          border: 2px solid var(--dev-tools-background-color-active);
          border-width: 0 0 2px 2px;
          transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
        }

        .message .dismiss-message {
          font-weight: 600;
          align-self: stretch;
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          margin-left: 0.5rem;
          color: var(--dev-tools-text-color-secondary);
        }

        .message .dismiss-message:hover {
          color: var(--dev-tools-text-color);
        }

        .notification-tray {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0.5rem;
          flex: none;
        }

        .window.hidden + .notification-tray {
          margin-bottom: 3rem;
        }

        .notification-tray .message {
          pointer-events: auto;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          max-width: 30rem;
          box-sizing: border-box;
          border-radius: var(--dev-tools-border-radius);
          margin-top: 0.5rem;
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          animation: slideIn var(--dev-tools-transition-duration);
          box-shadow: var(--dev-tools-box-shadow);
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .notification-tray .message.animate-out {
          animation: slideOut forwards var(--dev-tools-transition-duration);
        }

        .notification-tray .message .message-details {
          max-height: 10em;
          overflow: hidden;
        }

        .message-tray {
          flex: auto;
          overflow: auto;
          max-height: 20rem;
          user-select: text;
        }

        .message-tray .message {
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          padding-left: 2.25rem;
        }

        .message-tray .message.warning {
          background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
        }

        .message-tray .message.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.09);
        }

        .message-tray .message.error .message-heading {
          color: hsl(var(--dev-tools-red-hsl));
        }

        .message-tray .message.warning .message-heading {
          color: hsl(var(--dev-tools-yellow-hsl));
        }

        .message-tray .message + .message {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .message-tray .dismiss-message,
        .message-tray .persist {
          display: none;
        }

        .info-tray {
          padding: 0.75rem;
          position: relative;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .info-tray dl {
          margin: 0;
          display: grid;
          grid-template-columns: max-content 1fr;
          column-gap: 0.75rem;
          position: relative;
        }

        .info-tray dt {
          grid-column: 1;
          color: var(--dev-tools-text-color-emphasis);
        }

        .info-tray dt:not(:first-child)::before {
          content: '';
          width: 100%;
          position: absolute;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-top: -0.375rem;
        }

        .info-tray dd {
          grid-column: 2;
          margin: 0;
        }

        .info-tray :is(dt, dd):not(:last-child) {
          margin-bottom: 0.75rem;
        }

        .info-tray dd + dd {
          margin-top: -0.5rem;
        }

        .info-tray .live-reload-status::before {
          content: '•';
          color: var(--status-color);
          width: 0.75rem;
          display: inline-block;
          font-size: 1rem;
          line-height: 0.5rem;
        }

        .info-tray .copy {
          position: fixed;
          z-index: 1;
          top: 0.5rem;
          right: 0.5rem;
        }

        .info-tray .switch {
          vertical-align: -4px;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
            background-color: hsla(var(--dev-tools-red-hsl), 1);
          }
          100% {
            transform: scale(1);
          }
        }

        @supports (backdrop-filter: blur(1px)) {
          .dev-tools,
          .window,
          .notification-tray .message {
            backdrop-filter: blur(8px);
          }
          .dev-tools:hover,
          .dev-tools.active,
          .window,
          .notification-tray .message {
            background-color: var(--dev-tools-background-color-active-blurred);
          }
        }
      `,wi]}static get isActive(){const t=window.sessionStorage.getItem(T.ACTIVE_KEY_IN_SESSION_STORAGE);return t===null||t!=="false"}static notificationDismissed(t){const e=window.localStorage.getItem(T.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);return e!==null&&e.includes(t)}elementTelemetry(){let t={};try{const e=localStorage.getItem("vaadin.statistics.basket");if(!e)return;t=JSON.parse(e)}catch{return}this.frontendConnection&&this.frontendConnection.send("reportTelemetry",{browserData:t})}openWebSocketConnection(){if(this.frontendStatus=x.UNAVAILABLE,this.javaStatus=x.UNAVAILABLE,!this.conf.token){console.error("Dev tools functionality denied for this host."),this.log(V.LOG,"See Vaadin documentation on how to configure devmode.hostsAllowed property.",void 0,"https://vaadin.com/docs/latest/configuration/properties#properties",void 0);return}const t=i=>this.log(V.ERROR,i),e=()=>{this.showSplashMessage("Reloading…");const i=window.sessionStorage.getItem(T.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),s=i?parseInt(i,10)+1:1;window.sessionStorage.setItem(T.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,s.toString()),window.sessionStorage.setItem(T.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()},o=(i,s)=>{let r=document.head.querySelector(`style[data-file-path='${i}']`);r?(this.log(V.INFORMATION,"Hot update of "+i),r.textContent=s,document.dispatchEvent(new CustomEvent("vaadin-theme-updated"))):e()},n=new ki(this.getDedicatedWebSocketUrl());n.onHandshake=()=>{this.log(V.LOG,"Vaadin development mode initialized"),T.isActive||n.setActive(!1),this.elementTelemetry()},n.onConnectionError=t,n.onReload=e,n.onUpdate=o,n.onStatusChange=i=>{this.frontendStatus=i},n.onMessage=i=>this.handleFrontendMessage(i),this.frontendConnection=n,this.conf.backend===T.SPRING_BOOT_DEVTOOLS?(this.javaConnection=new Cr(this.getSpringBootWebSocketUrl(window.location)),this.javaConnection.onHandshake=()=>{T.isActive||this.javaConnection.setActive(!1)},this.javaConnection.onReload=e,this.javaConnection.onConnectionError=t,this.javaConnection.onStatusChange=i=>{this.javaStatus=i},this.javaConnection.onHandshake=()=>{this.conf.backend&&this.log(V.INFORMATION,`Java live reload available: ${T.BACKEND_DISPLAY_NAME[this.conf.backend]}`)}):(this.conf.backend===T.HOTSWAP_AGENT||this.conf.backend===T.JREBEL)&&(this.frontendConnection.onHandshake=()=>{this.conf.backend&&this.log(V.INFORMATION,`Java live reload available: ${T.BACKEND_DISPLAY_NAME[this.conf.backend]}`)}),this.conf.backend||this.showNotification(V.WARNING,"Java live reload unavailable","Live reload for Java changes is currently not set up. Find out how to make use of this functionality to boost your workflow.","https://vaadin.com/docs/latest/flow/configuration/live-reload","liveReloadUnavailable")}tabHandleMessage(t,e){const o=t;return o.handleMessage&&o.handleMessage.call(t,e)}handleFrontendMessage(t){for(const e of this.tabs)if(e.element&&this.tabHandleMessage(e.element,t))return;if(t.command==="featureFlags")this.features=t.data.features;else if(t.command==="themeEditorState"){const e=!!window.Vaadin.Flow;this.themeEditorState=t.data,e&&this.themeEditorState!==Ve.disabled&&(this.tabs.push({id:"theme-editor",title:"Theme Editor (Preview)",render:()=>this.renderThemeEditor()}),this.requestUpdate())}else wr(t)||this.unhandledMessages.push(t)}getDedicatedWebSocketUrl(){function t(o){const n=document.createElement("div");return n.innerHTML=`<a href="${o}"/>`,n.firstChild.href}if(this.conf.url===void 0)return;const e=t(this.conf.url);if(!e.startsWith("http://")&&!e.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${e}?v-r=push&debug_window&token=${this.conf.token}`}getSpringBootWebSocketUrl(t){const{hostname:e}=t,o=t.protocol==="https:"?"wss":"ws";if(e.endsWith("gitpod.io")){const n=e.replace(/.*?-/,"");return`${o}://${this.conf.liveReloadPort}-${n}`}else return`${o}://${e}:${this.conf.liveReloadPort}`}constructor(){super(),this.unhandledMessages=[],this.conf={enable:!1,url:"",liveReloadPort:-1},this.expanded=!1,this.messages=[],this.notifications=[],this.frontendStatus=x.UNAVAILABLE,this.javaStatus=x.UNAVAILABLE,this.tabs=[{id:"log",title:"Log",render:"vaadin-dev-tools-log"},{id:"info",title:"Info",render:"vaadin-dev-tools-info"},{id:"features",title:"Feature Flags",render:()=>this.renderFeatures()}],this.activeTab="log",this.features=[],this.unreadErrors=!1,this.componentPickActive=!1,this.themeEditorState=Ve.disabled,this.nextMessageId=1,this.transitionDuration=0,window.Vaadin.Flow&&this.tabs.push({id:"code",title:"Code",render:()=>this.renderCode()})}connectedCallback(){if(super.connectedCallback(),this.catchErrors(),this.conf=window.Vaadin.devToolsConf||this.conf,this.disableEventListener=o=>this.demoteSplashMessage(),document.body.addEventListener("focus",this.disableEventListener),document.body.addEventListener("click",this.disableEventListener),window.sessionStorage.getItem(T.TRIGGERED_KEY_IN_SESSION_STORAGE)){const o=new Date,n=`${`0${o.getHours()}`.slice(-2)}:${`0${o.getMinutes()}`.slice(-2)}:${`0${o.getSeconds()}`.slice(-2)}`;this.showSplashMessage(`Page reloaded at ${n}`),window.sessionStorage.removeItem(T.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const t=window;t.Vaadin=t.Vaadin||{},t.Vaadin.devTools=Object.assign(this,t.Vaadin.devTools),document.documentElement.addEventListener("vaadin-overlay-outside-click",o=>{const n=o,i=n.target.owner;i&&Sr(this,i)||n.detail.sourceEvent.composedPath().includes(this)&&o.preventDefault()});const e=window.Vaadin;e.devToolsPlugins&&(Array.from(e.devToolsPlugins).forEach(o=>this.initPlugin(o)),e.devToolsPlugins={push:o=>this.initPlugin(o)}),this.openWebSocketConnection(),Er()}async initPlugin(t){const e=this;t.init({addTab:(o,n)=>{e.tabs.push({id:o,title:o,render:n})},send:function(o,n){e.frontendConnection.send(o,n)}})}format(t){return t.toString()}catchErrors(){const t=window.Vaadin.ConsoleErrors;t&&t.forEach(e=>{this.log(V.ERROR,e.map(o=>this.format(o)).join(" "))}),window.Vaadin.ConsoleErrors={push:e=>{this.log(V.ERROR,e.map(o=>this.format(o)).join(" "))}}}disconnectedCallback(){this.disableEventListener&&(document.body.removeEventListener("focus",this.disableEventListener),document.body.removeEventListener("click",this.disableEventListener)),super.disconnectedCallback()}toggleExpanded(){this.notifications.slice().forEach(t=>this.dismissNotification(t.id)),this.expanded=!this.expanded,this.expanded&&this.root.focus()}showSplashMessage(t){this.splashMessage=t,this.splashMessage&&(this.expanded?this.demoteSplashMessage():setTimeout(()=>{this.demoteSplashMessage()},T.AUTO_DEMOTE_NOTIFICATION_DELAY))}demoteSplashMessage(){this.splashMessage&&this.log(V.LOG,this.splashMessage),this.showSplashMessage(void 0)}checkLicense(t){this.frontendConnection?this.frontendConnection.send("checkLicense",t):_i({message:"Internal error: no connection",product:t})}log(t,e,o,n,i){const s=this.nextMessageId;for(this.nextMessageId+=1,this.messages.push({id:s,type:t,message:e,details:o,link:n,dontShowAgain:!1,dontShowAgainMessage:i,deleted:!1});this.messages.length>T.MAX_LOG_ROWS;)this.messages.shift();this.requestUpdate(),this.updateComplete.then(()=>{const r=this.renderRoot.querySelector(".message-tray .message:last-child");this.expanded&&r?(setTimeout(()=>r.scrollIntoView({behavior:"smooth"}),this.transitionDuration),this.unreadErrors=!1):t===V.ERROR&&(this.unreadErrors=!0)})}showNotification(t,e,o,n,i,s){if(i===void 0||!T.notificationDismissed(i)){if(this.notifications.filter(l=>l.persistentId===i).filter(l=>!l.deleted).length>0)return;const r=this.nextMessageId;this.nextMessageId+=1,this.notifications.push({id:r,type:t,message:e,details:o,link:n,persistentId:i,dontShowAgain:!1,dontShowAgainMessage:s,deleted:!1}),n===void 0&&setTimeout(()=>{this.dismissNotification(r)},T.AUTO_DEMOTE_NOTIFICATION_DELAY),this.requestUpdate()}else this.log(t,e,o,n)}dismissNotification(t){const e=this.findNotificationIndex(t);if(e!==-1&&!this.notifications[e].deleted){const o=this.notifications[e];if(o.dontShowAgain&&o.persistentId&&!T.notificationDismissed(o.persistentId)){let n=window.localStorage.getItem(T.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE);n=n===null?o.persistentId:`${n},${o.persistentId}`,window.localStorage.setItem(T.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE,n)}o.deleted=!0,this.log(o.type,o.message,o.details,o.link),setTimeout(()=>{const n=this.findNotificationIndex(t);n!==-1&&(this.notifications.splice(n,1),this.requestUpdate())},this.transitionDuration)}}findNotificationIndex(t){let e=-1;return this.notifications.some((o,n)=>o.id===t?(e=n,!0):!1),e}toggleDontShowAgain(t){const e=this.findNotificationIndex(t);if(e!==-1&&!this.notifications[e].deleted){const o=this.notifications[e];o.dontShowAgain=!o.dontShowAgain,this.requestUpdate()}}setActive(t){var e,o;(e=this.frontendConnection)==null||e.setActive(t),(o=this.javaConnection)==null||o.setActive(t),window.sessionStorage.setItem(T.ACTIVE_KEY_IN_SESSION_STORAGE,t?"true":"false")}getStatusColor(t){return t===x.ACTIVE?"var(--dev-tools-green-color)":t===x.INACTIVE?"var(--dev-tools-grey-color)":t===x.UNAVAILABLE?"var(--dev-tools-yellow-color)":t===x.ERROR?"var(--dev-tools-red-color)":"none"}renderMessage(t){return y`
      <div
        class="message ${t.type} ${t.deleted?"animate-out":""} ${t.details||t.link?"has-details":""}"
      >
        <div class="message-content">
          <div class="message-heading">${t.message}</div>
          <div class="message-details" ?hidden="${!t.details&&!t.link}">
            ${t.details?y`<p>${t.details}</p>`:""}
            ${t.link?y`<a class="ahreflike" href="${t.link}" target="_blank">Learn more</a>`:""}
          </div>
          ${t.persistentId?y`<div
                class="persist ${t.dontShowAgain?"on":"off"}"
                @click=${()=>this.toggleDontShowAgain(t.id)}
              >
                ${t.dontShowAgainMessage||"Don’t show again"}
              </div>`:""}
        </div>
        <div class="dismiss-message" @click=${()=>this.dismissNotification(t.id)}>Dismiss</div>
      </div>
    `}render(){return y` <div
        class="window ${this.expanded&&!this.componentPickActive?"visible":"hidden"}"
        tabindex="0"
        @keydown=${t=>t.key==="Escape"&&this.expanded&&this.toggleExpanded()}
      >
        <div class="window-toolbar">
          ${this.tabs.map(t=>y`<button
                class=${ko({tab:!0,active:this.activeTab===t.id,unreadErrors:t.id==="log"&&this.unreadErrors})}
                id="${t.id}"
                @click=${()=>{const e=this.tabs.find(i=>i.id===this.activeTab);if(e&&e.element){const i=typeof e.render=="function"?e.element.firstElementChild:e.element,s=i==null?void 0:i.deactivate;s&&s.call(i)}this.activeTab=t.id;const o=typeof t.render=="function"?t.element.firstElementChild:t.element,n=o.activate;n&&n.call(o)}}
              >
                ${t.title}
              </button> `)}
          <button class="minimize-button" title="Minimize" @click=${()=>this.toggleExpanded()}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="#fff" opacity=".8">
                <path
                  d="m7.25 1.75c0-.41421.33579-.75.75-.75h3.25c2.0711 0 3.75 1.67893 3.75 3.75v6.5c0 2.0711-1.6789 3.75-3.75 3.75h-6.5c-2.07107 0-3.75-1.6789-3.75-3.75v-3.25c0-.41421.33579-.75.75-.75s.75.33579.75.75v3.25c0 1.2426 1.00736 2.25 2.25 2.25h6.5c1.2426 0 2.25-1.0074 2.25-2.25v-6.5c0-1.24264-1.0074-2.25-2.25-2.25h-3.25c-.41421 0-.75-.33579-.75-.75z"
                />
                <path
                  d="m2.96967 2.96967c.29289-.29289.76777-.29289 1.06066 0l5.46967 5.46967v-2.68934c0-.41421.33579-.75.75-.75.4142 0 .75.33579.75.75v4.5c0 .4142-.3358.75-.75.75h-4.5c-.41421 0-.75-.3358-.75-.75 0-.41421.33579-.75.75-.75h2.68934l-5.46967-5.46967c-.29289-.29289-.29289-.76777 0-1.06066z"
                />
              </g>
            </svg>
          </button>
        </div>
        <div id="tabContainer"></div>
      </div>

      <div class="notification-tray">${this.notifications.map(t=>this.renderMessage(t))}</div>
      <vaadin-dev-tools-component-picker
        .active=${this.componentPickActive}
        @component-picker-opened=${()=>{this.componentPickActive=!0}}
        @component-picker-closed=${()=>{this.componentPickActive=!1}}
      ></vaadin-dev-tools-component-picker>
      <div
        style="display: var(--dev-tools-button-display, 'block')"
        class="dev-tools ${this.splashMessage?"active":""}${this.unreadErrors?" error":""}"
        @click=${()=>this.toggleExpanded()}
      >
        ${this.unreadErrors?y`<svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="dev-tools-icon error"
            >
              <clipPath id="a"><path d="m0 0h16v16h-16z" /></clipPath>
              <g clip-path="url(#a)">
                <path
                  d="m6.25685 2.09894c.76461-1.359306 2.72169-1.359308 3.4863 0l5.58035 9.92056c.7499 1.3332-.2135 2.9805-1.7432 2.9805h-11.1606c-1.529658 0-2.4930857-1.6473-1.743156-2.9805z"
                  fill="#ff5c69"
                />
                <path
                  d="m7.99699 4c-.45693 0-.82368.37726-.81077.834l.09533 3.37352c.01094.38726.32803.69551.71544.69551.38741 0 .70449-.30825.71544-.69551l.09533-3.37352c.0129-.45674-.35384-.834-.81077-.834zm.00301 8c.60843 0 1-.3879 1-.979 0-.5972-.39157-.9851-1-.9851s-1 .3879-1 .9851c0 .5911.39157.979 1 .979z"
                  fill="#fff"
                />
              </g>
            </svg>`:y`<svg
              fill="none"
              height="17"
              viewBox="0 0 16 17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              class="dev-tools-icon logo"
            >
              <g fill="#fff">
                <path
                  d="m8.88273 5.97926c0 .04401-.0032.08898-.00801.12913-.02467.42848-.37813.76767-.8117.76767-.43358 0-.78704-.34112-.81171-.76928-.00481-.04015-.00801-.08351-.00801-.12752 0-.42784-.10255-.87656-1.14434-.87656h-3.48364c-1.57118 0-2.315271-.72849-2.315271-2.21758v-1.26683c0-.42431.324618-.768314.748261-.768314.42331 0 .74441.344004.74441.768314v.42784c0 .47924.39576.81265 1.11293.81265h3.41538c1.5542 0 1.67373 1.156 1.725 1.7679h.03429c.05095-.6119.17048-1.7679 1.72468-1.7679h3.4154c.7172 0 1.0145-.32924 1.0145-.80847l-.0067-.43202c0-.42431.3227-.768314.7463-.768314.4234 0 .7255.344004.7255.768314v1.26683c0 1.48909-.6181 2.21758-2.1893 2.21758h-3.4836c-1.04182 0-1.14437.44872-1.14437.87656z"
                />
                <path
                  d="m8.82577 15.1648c-.14311.3144-.4588.5335-.82635.5335-.37268 0-.69252-.2249-.83244-.5466-.00206-.0037-.00412-.0073-.00617-.0108-.00275-.0047-.00549-.0094-.00824-.0145l-3.16998-5.87318c-.08773-.15366-.13383-.32816-.13383-.50395 0-.56168.45592-1.01879 1.01621-1.01879.45048 0 .75656.22069.96595.6993l2.16882 4.05042 2.17166-4.05524c.2069-.47379.513-.69448.9634-.69448.5603 0 1.0166.45711 1.0166 1.01879 0 .17579-.0465.35029-.1348.50523l-3.1697 5.8725c-.00503.0096-.01006.0184-.01509.0272-.00201.0036-.00402.0071-.00604.0106z"
                />
              </g>
            </svg>`}

        <span
          class="status-blip"
          style="background: linear-gradient(to right, ${this.getStatusColor(this.frontendStatus)} 50%, ${this.getStatusColor(this.conf.backend===T.HOTSWAP_AGENT||this.conf.backend===T.JREBEL?this.frontendStatus:this.javaStatus)} 50%)"
        ></span>
        ${this.splashMessage?y`<span class="status-description">${this.splashMessage}</span></div>`:$}
      </div>`}updated(t){var e;super.updated(t);const o=this.renderRoot.querySelector("#tabContainer"),n=[];if(this.tabs.forEach(s=>{s.element||(typeof s.render=="function"?s.element=document.createElement("div"):(s.element=document.createElement(s.render),s.element._devTools=this),n.push(s.element))}),(o==null?void 0:o.childElementCount)!==this.tabs.length){for(let s=0;s<this.tabs.length;s++){const r=this.tabs[s];o.childElementCount>s&&o.children[s]===r.element||o.insertBefore(r.element,o.children[s])}for(;(o==null?void 0:o.childElementCount)>this.tabs.length;)(e=o.lastElementChild)==null||e.remove()}for(const s of this.tabs){typeof s.render=="function"?_e(s.render(),s.element):s.element.requestUpdate&&s.element.requestUpdate();const r=s.id===this.activeTab;s.element.hidden=!r}for(const s of n)for(var i=0;i<this.unhandledMessages.length;i++)this.tabHandleMessage(s,this.unhandledMessages[i])&&(this.unhandledMessages.splice(i,1),i--)}renderCode(){return y`<div class="info-tray">
      <div>
        <select id="locationType">
          <option value="create" selected>Create</option>
          <option value="attach">Attach</option>
        </select>
        <button
          class="button pick"
          @click=${async()=>{await v(()=>Promise.resolve().then(()=>Aa),void 0),this.componentPicker.open({infoTemplate:y`
                <div>
                  <h3>Locate a component in source code</h3>
                  <p>Use the mouse cursor to highlight components in the UI.</p>
                  <p>Use arrow down/up to cycle through and highlight specific components under the cursor.</p>
                  <p>
                    Click the primary mouse button to open the corresponding source code line of the highlighted
                    component in your IDE.
                  </p>
                </div>
              `,pickCallback:t=>{const e={nodeId:t.nodeId,uiId:t.uiId};this.renderRoot.querySelector("#locationType").value==="create"?this.frontendConnection.send("showComponentCreateLocation",e):this.frontendConnection.send("showComponentAttachLocation",e)}})}}
        >
          Find component in code
        </button>
      </div>
      </div>
    </div>`}renderFeatures(){return y`<div class="features-tray">
      ${this.features.map(t=>y`<div class="feature">
          <label class="switch">
            <input
              class="feature-toggle"
              id="feature-toggle-${t.id}"
              type="checkbox"
              ?checked=${t.enabled}
              @change=${e=>this.toggleFeatureFlag(e,t)}
            />
            <span class="slider"></span>
            ${t.title}
          </label>
          <a class="ahreflike" href="${t.moreInfoLink}" target="_blank">Learn more</a>
        </div>`)}
    </div>`}setJavaLiveReloadActive(t){var e;this.javaConnection?this.javaConnection.setActive(t):(e=this.frontendConnection)==null||e.setActive(t)}renderThemeEditor(){return y` <vaadin-dev-tools-theme-editor
      .expanded=${this.expanded}
      .themeEditorState=${this.themeEditorState}
      .pickerProvider=${()=>this.componentPicker}
      .connection=${this.frontendConnection}
      @before-open=${()=>this.setJavaLiveReloadActive(!1)}
      @after-close=${()=>this.setJavaLiveReloadActive(!0)}
    ></vaadin-dev-tools-theme-editor>`}toggleFeatureFlag(t,e){const o=t.target.checked;this.frontendConnection?(this.frontendConnection.send("setFeature",{featureId:e.id,enabled:o}),this.showNotification(V.INFORMATION,`“${e.title}” ${o?"enabled":"disabled"}`,e.requiresServerRestart?"This feature requires a server restart":void 0,void 0,`feature${e.id}${o?"Enabled":"Disabled"}`)):this.log(V.ERROR,`Unable to toggle feature ${e.title}: No server connection available`)}};S.MAX_LOG_ROWS=1e3;S.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";S.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";S.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";S.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";S.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;S.HOTSWAP_AGENT="HOTSWAP_AGENT";S.JREBEL="JREBEL";S.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";S.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};f([_({type:Boolean,attribute:!1})],S.prototype,"expanded",void 0);f([_({type:Array,attribute:!1})],S.prototype,"messages",void 0);f([_({type:String,attribute:!1})],S.prototype,"splashMessage",void 0);f([_({type:Array,attribute:!1})],S.prototype,"notifications",void 0);f([_({type:String,attribute:!1})],S.prototype,"frontendStatus",void 0);f([_({type:String,attribute:!1})],S.prototype,"javaStatus",void 0);f([I()],S.prototype,"tabs",void 0);f([I()],S.prototype,"activeTab",void 0);f([I()],S.prototype,"features",void 0);f([I()],S.prototype,"unreadErrors",void 0);f([tt(".window")],S.prototype,"root",void 0);f([tt("vaadin-dev-tools-component-picker")],S.prototype,"componentPicker",void 0);f([I()],S.prototype,"componentPickActive",void 0);f([I()],S.prototype,"themeEditorState",void 0);S=T=f([z("vaadin-dev-tools")],S);const{toString:Ua}=Object.prototype;function ja(t){return Ua.call(t)==="[object RegExp]"}function Fa(t,{preserve:e=!0,whitespace:o=!0,all:n}={}){if(n)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let i=e,s;typeof e=="function"?(i=!1,s=e):ja(e)&&(i=!1,s=c=>e.test(c));let r=!1,l="",a="",d="";for(let c=0;c<t.length;c++){if(l=t[c],t[c-1]!=="\\"&&(l==='"'||l==="'")&&(r===l?r=!1:r||(r=l)),!r&&l==="/"&&t[c+1]==="*"){const p=t[c+2]==="!";let h=c+2;for(;h<t.length;h++){if(t[h]==="*"&&t[h+1]==="/"){i&&p||s&&s(a)?d+=`/*${a}*/`:o||(t[h+2]===`
`?h++:t[h+2]+t[h+3]===`\r
`&&(h+=2)),a="";break}a+=t[h]}c=h+1;continue}d+=l}return d}const Ba=CSSStyleSheet.toString().includes("document.createElement"),Ha=(t,e)=>{const o=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(t)!=null&&(t=Fa(t));for(var n,i=t;(n=o.exec(t))!==null;){i=i.replace(n[0],"");const s=document.createElement("link");s.rel="stylesheet",s.href=n[2]||n[4];const r=n[1]||n[5];r&&(s.media=r),e===document?document.head.appendChild(s):e.appendChild(s)}return i},Wa=(t,e,o)=>(e.adoptedStyleSheets=[t,...e.adoptedStyleSheets],()=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(n=>n!==t)}),qa=(t,e,o)=>{const n=new CSSStyleSheet;return n.replaceSync(t),Ba?Wa(n,e):(e.adoptedStyleSheets.splice(0,0,n),()=>{e.adoptedStyleSheets.splice(e.adoptedStyleSheets.indexOf(n),1)})},Ga=(t,e)=>{const o=document.createElement("style");return o.type="text/css",o.textContent=t,document.head.insertBefore(o,void 0),()=>{o.remove()}},lo=(t,e,o,n)=>{if(o===document){const s=Ka(t);if(window.Vaadin.theme.injectedGlobalCss.indexOf(s)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(s)}const i=Ha(t,o);return o===document?Ga(i):qa(i,o)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Wn(t){let e,o,n=2166136261;for(e=0,o=t.length;e<o;e++)n^=t.charCodeAt(e),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return("0000000"+(n>>>0).toString(16)).substr(-8)}function Ka(t){let e=Wn(t);return e+Wn(e+t)}document["_vaadintheme_my-theme_componentCss"]||(document["_vaadintheme_my-theme_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ja(t){const e=customElements.get(t.is);if(!e)Object.defineProperty(t,"version",{get(){return"24.3.11"}}),customElements.define(t.is,t);else{const o=e.version;o&&t.version&&o===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${e.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ya extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Ja(Ya);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xa=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(o,n,i){super.attributeChangedCallback(o,n,i),o==="theme"&&this._set_theme(i)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $i=[];function Ai(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function Qa(t){return Ai(customElements.get(t))}function Za(t=[]){return[t].flat(1/0).filter(e=>e instanceof xo?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Ri(t,e,o={}){t&&Qa(t)&&console.warn(`The custom element definition for "${t}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),e=Za(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,o):$i.push({themeFor:t,styles:e,include:o.include,moduleId:o.moduleId})}function bo(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():$i}function el(t,e){return(t||"").split(" ").some(o=>new RegExp(`^${o.split("*").join(".*")}$`,"u").test(e))}function tl(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function Ni(t){const e=[];return t.include&&[].concat(t.include).forEach(o=>{const n=bo().find(i=>i.moduleId===o);n?e.push(...Ni(n),...n.styles):console.warn(`Included moduleId ${o} not found in style registry`)},t.styles),e}function ol(t,e){const o=document.createElement("style");o.innerHTML=t.map(n=>n.cssText).join(`
`),e.content.appendChild(o)}function nl(t){const e=`${t}-default-theme`,o=bo().filter(n=>n.moduleId!==e&&el(n.themeFor,t)).map(n=>({...n,styles:[...Ni(n),...n.styles],includePriority:tl(n.moduleId)})).sort((n,i)=>i.includePriority-n.includePriority);return o.length>0?o:bo().filter(n=>n.moduleId===e)}const ml=t=>class extends Xa(t){static finalize(){if(super.finalize(),this.elementStyles)return;const o=this.prototype._template;!o||Ai(this)||ol(this.getStylesForThis(),o)}static finalizeStyles(o){const n=this.getStylesForThis();return o?[...super.finalizeStyles(o),...n]:n}static getStylesForThis(){const o=Object.getPrototypeOf(this.prototype),n=(o?o.constructor.__themes:[])||[];this.__themes=[...n,...nl(this.is)];const i=this.__themes.flatMap(s=>s.styles);return i.filter((s,r)=>r===i.lastIndexOf(s))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const il=(t,...e)=>{const o=document.createElement("style");o.id=t,o.textContent=e.map(n=>n.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",o)},ot=(t,...e)=>{il(`lumo-${t}`,e)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sl=k`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;ot("color-props",sl);const Oo=k`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;Ri("",Oo,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ot("color",Oo);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rl=k`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Lo=k`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Ri("",Lo,{moduleId:"lumo-typography"});ot("typography-props",rl);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const al=k`
  ${li(Lo.cssText.replace(/,\s*:host/su,""))}
`;ot("typography",al);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ii=k`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;ot("spacing-props",Ii);const ll=t=>{const e=[];t!==document&&(e.push(lo(Oo.cssText,"",t)),e.push(lo(Lo.cssText,"",t)),e.push(lo(Ii.cssText,"",t)))},dl=ll;dl(document);export{Nr as A,$r as C,ar as D,ee as I,N as L,oe as N,le as O,sr as P,Na as R,Ar as S,ml as T,mo as _,ot as a,Xa as b,k as c,Ja as d,_e as e,rr as f,xe as g,y as h,Oo as i,Lo as j,R as k,Ia as l,Rr as m,$ as n,Pa as o,hl as p,ul as q,Ri as r,Ne as s,$i as t,li as u};
