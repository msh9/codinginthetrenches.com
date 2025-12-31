(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ve=globalThis,qe=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),We=new WeakMap;let at=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(qe&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=We.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&We.set(t,e))}return e}toString(){return this.cssText}};const Mt=r=>new at(typeof r=="string"?r:r+"",void 0,ze),Rt=(r,...e)=>{const t=r.length===1?r[0]:e.reduce(((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1]),r[0]);return new at(t,r,ze)},Pt=(r,e)=>{if(qe)r.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const n=document.createElement("style"),i=ve.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},je=qe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Mt(t)})(r):r;const{is:Tt,defineProperty:Ut,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:kt,getOwnPropertySymbols:Ft,getPrototypeOf:Lt}=Object,De=globalThis,Ke=De.trustedTypes,xt=Ke?Ke.emptyScript:"",qt=De.reactiveElementPolyfillSupport,le=(r,e)=>r,Oe={toAttribute(r,e){switch(e){case Boolean:r=r?xt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},lt=(r,e)=>!Tt(r,e),Ge={attribute:!0,type:String,converter:Oe,reflect:!1,useDefault:!1,hasChanged:lt};Symbol.metadata??=Symbol("metadata"),De.litPropertyMetadata??=new WeakMap;let ee=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Ut(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:s}=Ot(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const a=i?.call(this);s?.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ge}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;const e=Lt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){const t=this.properties,n=[...kt(t),...Ft(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(je(i))}else e!==void 0&&t.push(je(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:Oe).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Oe;this._$Em=i;const a=o.fromAttribute(t,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){const i=this.constructor,s=this[e];if(n??=i.getPropertyOptions(e),!((n.hasChanged??lt)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:s},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((n=>n.hostUpdate?.())),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ee.elementStyles=[],ee.shadowRootOptions={mode:"open"},ee[le("elementProperties")]=new Map,ee[le("finalized")]=new Map,qt?.({ReactiveElement:ee}),(De.reactiveElementVersions??=[]).push("2.1.1");const Ve=globalThis,_e=Ve.trustedTypes,Xe=_e?_e.createPolicy("lit-html",{createHTML:r=>r}):void 0,ut="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+Y,zt=`<${ct}>`,J=document,ce=()=>J.createComment(""),de=r=>r===null||typeof r!="object"&&typeof r!="function",He=Array.isArray,Vt=r=>He(r)||typeof r?.[Symbol.iterator]=="function",Ue=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Je=/-->/g,Qe=/>/g,K=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,dt=/^(?:script|style|textarea|title)$/i,Ht=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),z=Ht(1),re=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),rt=new WeakMap,G=J.createTreeWalker(J,129);function ht(r,e){if(!He(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}const Bt=(r,e)=>{const t=r.length-1,n=[];let i,s=e===2?"<svg>":e===3?"<math>":"",o=ae;for(let a=0;a<t;a++){const u=r[a];let l,c,d=-1,h=0;for(;h<u.length&&(o.lastIndex=h,c=o.exec(u),c!==null);)h=o.lastIndex,o===ae?c[1]==="!--"?o=Je:c[1]!==void 0?o=Qe:c[2]!==void 0?(dt.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=K):c[3]!==void 0&&(o=K):o===K?c[0]===">"?(o=i??ae,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,l=c[1],o=c[3]===void 0?K:c[3]==='"'?tt:et):o===tt||o===et?o=K:o===Je||o===Qe?o=ae:(o=K,i=void 0);const f=o===K&&r[a+1].startsWith("/>")?" ":"";s+=o===ae?u+zt:d>=0?(n.push(l),u.slice(0,d)+ut+u.slice(d)+Y+f):u+Y+(d===-2?a:f)}return[ht(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class he{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let s=0,o=0;const a=e.length-1,u=this.parts,[l,c]=Bt(e,t);if(this.el=he.createElement(l,n),G.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=G.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(ut)){const h=c[o++],f=i.getAttribute(d).split(Y),y=/([.?@])?(.*)/.exec(h);u.push({type:1,index:s,name:y[2],strings:f,ctor:y[1]==="."?Zt:y[1]==="?"?Wt:y[1]==="@"?jt:Se}),i.removeAttribute(d)}else d.startsWith(Y)&&(u.push({type:6,index:s}),i.removeAttribute(d));if(dt.test(i.tagName)){const d=i.textContent.split(Y),h=d.length-1;if(h>0){i.textContent=_e?_e.emptyScript:"";for(let f=0;f<h;f++)i.append(d[f],ce()),G.nextNode(),u.push({type:2,index:++s});i.append(d[h],ce())}}}else if(i.nodeType===8)if(i.data===ct)u.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(Y,d+1))!==-1;)u.push({type:7,index:s}),d+=Y.length-1}s++}}static createElement(e,t){const n=J.createElement("template");return n.innerHTML=e,n}}function ne(r,e,t=r,n){if(e===re)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl;const s=de(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=ne(r,i._$AS(r,e.values),i,n)),e}class Yt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??J).importNode(t,!0);G.currentNode=i;let s=G.nextNode(),o=0,a=0,u=n[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new fe(s,s.nextSibling,this,e):u.type===1?l=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(l=new Kt(s,this,e)),this._$AV.push(l),u=n[++a]}o!==u?.index&&(s=G.nextNode(),o++)}return G.currentNode=J,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class fe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),de(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&de(this._$AH)?this._$AA.nextSibling.data=e:this.T(J.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(ht(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const s=new Yt(i,this),o=s.u(this.options);s.p(t),this.T(o),this._$AH=s}}_$AC(e){let t=rt.get(e.strings);return t===void 0&&rt.set(e.strings,t=new he(e)),t}k(e){He(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const s of e)i===t.length?t.push(n=new fe(this.O(ce()),this.O(ce()),this,this.options)):n=t[i],n._$AI(s),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}_$AI(e,t=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=ne(this,e,t,0),o=!de(e)||e!==this._$AH&&e!==re,o&&(this._$AH=e);else{const a=e;let u,l;for(e=s[0],u=0;u<s.length-1;u++)l=ne(this,a[n+u],t,u),l===re&&(l=this._$AH[u]),o||=!de(l)||l!==this._$AH[u],l===D?e=D:e!==D&&(e+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Zt extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}}class Wt extends Se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==D)}}class jt extends Se{constructor(e,t,n,i,s){super(e,t,n,i,s),this.type=5}_$AI(e,t=this){if((e=ne(this,e,t,0)??D)===re)return;const n=this._$AH,i=e===D&&n!==D||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==D&&(n===D||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Kt{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const Gt=Ve.litHtmlPolyfillSupport;Gt?.(he,fe),(Ve.litHtmlVersions??=[]).push("3.3.1");const Xt=(r,e,t)=>{const n=t?.renderBefore??e;let i=n._$litPart$;if(i===void 0){const s=t?.renderBefore??null;n._$litPart$=i=new fe(e.insertBefore(ce(),s),s,void 0,t??{})}return i._$AI(r),i};const Be=globalThis;class X extends ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return re}}X._$litElement$=!0,X.finalized=!0,Be.litElementHydrateSupport?.({LitElement:X});const Jt=Be.litElementPolyfillSupport;Jt?.({LitElement:X});(Be.litElementVersions??=[]).push("4.2.1");const pt=1440*60*1e3;function H(r){const e=Qt(r);return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()))}function Qt(r){if(r instanceof Date){if(Number.isNaN(r.getTime()))throw new Error("Invalid date value");return r}if(typeof r=="string"){const e=r.trim(),t=new Date(e);if(Number.isNaN(t.getTime()))throw new Error("Invalid date value");return t}if(typeof r=="number"){const e=new Date(r);if(Number.isNaN(e.getTime()))throw new Error("Invalid date value");return e}throw new Error("Date input must be a Date, ISO string, or timestamp")}function er(r,e){if(!Number.isInteger(e))throw new Error("Days must be an integer");const t=H(r);return new Date(t.getTime()+e*pt)}function tr(r,e){const t=H(r),n=H(e);return t.getUTCFullYear()===n.getUTCFullYear()&&t.getUTCMonth()===n.getUTCMonth()&&t.getUTCDate()===n.getUTCDate()}function ft(r){const e=H(r);return new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth()+1,0))}function rr(r,e){if(!Number.isInteger(e))throw new Error("Months to add must be an integer");const t=H(r),n=t.getUTCMonth()+e,i=new Date(Date.UTC(t.getUTCFullYear(),n,1)),s=ft(i).getUTCDate(),o=t.getUTCDate(),a=Math.min(o,s);return new Date(Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),a))}function nr(r,e){const t=H(r),i=H(e).getTime()-t.getTime();return Math.round(i/pt)}const ie={daysInYear:365,daysInMonth:31,monthsInYear:12};var te=9e15,j=1e9,ke="0123456789abcdef",$e="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",Ee="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Fe={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-te,maxE:te,crypto:!1},mt,V,b=!0,Ce="[DecimalError] ",W=Ce+"Invalid argument: ",gt=Ce+"Precision limit exceeded",wt=Ce+"crypto unavailable",bt="[object Decimal]",R=Math.floor,A=Math.pow,ir=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,sr=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,or=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,vt=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,O=1e7,g=7,ar=9007199254740991,lr=$e.length-1,Le=Ee.length-1,p={toStringTag:bt};p.absoluteValue=p.abs=function(){var r=new this.constructor(this);return r.s<0&&(r.s=1),m(r)};p.ceil=function(){return m(new this.constructor(this),this.e+1,2)};p.clampedTo=p.clamp=function(r,e){var t,n=this,i=n.constructor;if(r=new i(r),e=new i(e),!r.s||!e.s)return new i(NaN);if(r.gt(e))throw Error(W+e);return t=n.cmp(r),t<0?r:n.cmp(e)>0?e:new i(n)};p.comparedTo=p.cmp=function(r){var e,t,n,i,s=this,o=s.d,a=(r=new s.constructor(r)).d,u=s.s,l=r.s;if(!o||!a)return!u||!l?NaN:u!==l?u:o===a?0:!o^u<0?1:-1;if(!o[0]||!a[0])return o[0]?u:a[0]?-l:0;if(u!==l)return u;if(s.e!==r.e)return s.e>r.e^u<0?1:-1;for(n=o.length,i=a.length,e=0,t=n<i?n:i;e<t;++e)if(o[e]!==a[e])return o[e]>a[e]^u<0?1:-1;return n===i?0:n>i^u<0?1:-1};p.cosine=p.cos=function(){var r,e,t=this,n=t.constructor;return t.d?t.d[0]?(r=n.precision,e=n.rounding,n.precision=r+Math.max(t.e,t.sd())+g,n.rounding=1,t=ur(n,Et(n,t)),n.precision=r,n.rounding=e,m(V==2||V==3?t.neg():t,r,e,!0)):new n(1):new n(NaN)};p.cubeRoot=p.cbrt=function(){var r,e,t,n,i,s,o,a,u,l,c=this,d=c.constructor;if(!c.isFinite()||c.isZero())return new d(c);for(b=!1,s=c.s*A(c.s*c,1/3),!s||Math.abs(s)==1/0?(t=C(c.d),r=c.e,(s=(r-t.length+1)%3)&&(t+=s==1||s==-2?"0":"00"),s=A(t,1/3),r=R((r+1)/3)-(r%3==(r<0?-1:2)),s==1/0?t="5e"+r:(t=s.toExponential(),t=t.slice(0,t.indexOf("e")+1)+r),n=new d(t),n.s=c.s):n=new d(s.toString()),o=(r=d.precision)+3;;)if(a=n,u=a.times(a).times(a),l=u.plus(c),n=_(l.plus(c).times(a),l.plus(u),o+2,1),C(a.d).slice(0,o)===(t=C(n.d)).slice(0,o))if(t=t.slice(o-3,o+1),t=="9999"||!i&&t=="4999"){if(!i&&(m(a,r+1,0),a.times(a).times(a).eq(c))){n=a;break}o+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(m(n,r+1,1),e=!n.times(n).times(n).eq(c));break}return b=!0,m(n,r,d.rounding,e)};p.decimalPlaces=p.dp=function(){var r,e=this.d,t=NaN;if(e){if(r=e.length-1,t=(r-R(this.e/g))*g,r=e[r],r)for(;r%10==0;r/=10)t--;t<0&&(t=0)}return t};p.dividedBy=p.div=function(r){return _(this,new this.constructor(r))};p.dividedToIntegerBy=p.divToInt=function(r){var e=this,t=e.constructor;return m(_(e,new t(r),0,1,1),t.precision,t.rounding)};p.equals=p.eq=function(r){return this.cmp(r)===0};p.floor=function(){return m(new this.constructor(this),this.e+1,3)};p.greaterThan=p.gt=function(r){return this.cmp(r)>0};p.greaterThanOrEqualTo=p.gte=function(r){var e=this.cmp(r);return e==1||e===0};p.hyperbolicCosine=p.cosh=function(){var r,e,t,n,i,s=this,o=s.constructor,a=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return a;t=o.precision,n=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,i=s.d.length,i<32?(r=Math.ceil(i/3),e=(1/Me(4,r)).toString()):(r=16,e="2.3283064365386962890625e-10"),s=se(o,1,s.times(e),new o(1),!0);for(var u,l=r,c=new o(8);l--;)u=s.times(s),s=a.minus(u.times(c.minus(u.times(c))));return m(s,o.precision=t,o.rounding=n,!0)};p.hyperbolicSine=p.sinh=function(){var r,e,t,n,i=this,s=i.constructor;if(!i.isFinite()||i.isZero())return new s(i);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(i.e,i.sd())+4,s.rounding=1,n=i.d.length,n<3)i=se(s,2,i,i,!0);else{r=1.4*Math.sqrt(n),r=r>16?16:r|0,i=i.times(1/Me(5,r)),i=se(s,2,i,i,!0);for(var o,a=new s(5),u=new s(16),l=new s(20);r--;)o=i.times(i),i=i.times(a.plus(o.times(u.times(o).plus(l))))}return s.precision=e,s.rounding=t,m(i,e,t,!0)};p.hyperbolicTangent=p.tanh=function(){var r,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+7,n.rounding=1,_(t.sinh(),t.cosh(),n.precision=r,n.rounding=e)):new n(t.s)};p.inverseCosine=p.acos=function(){var r=this,e=r.constructor,t=r.abs().cmp(1),n=e.precision,i=e.rounding;return t!==-1?t===0?r.isNeg()?k(e,n,i):new e(0):new e(NaN):r.isZero()?k(e,n+4,i).times(.5):(e.precision=n+6,e.rounding=1,r=new e(1).minus(r).div(r.plus(1)).sqrt().atan(),e.precision=n,e.rounding=i,r.times(2))};p.inverseHyperbolicCosine=p.acosh=function(){var r,e,t=this,n=t.constructor;return t.lte(1)?new n(t.eq(1)?0:NaN):t.isFinite()?(r=n.precision,e=n.rounding,n.precision=r+Math.max(Math.abs(t.e),t.sd())+4,n.rounding=1,b=!1,t=t.times(t).minus(1).sqrt().plus(t),b=!0,n.precision=r,n.rounding=e,t.ln()):new n(t)};p.inverseHyperbolicSine=p.asinh=function(){var r,e,t=this,n=t.constructor;return!t.isFinite()||t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+2*Math.max(Math.abs(t.e),t.sd())+6,n.rounding=1,b=!1,t=t.times(t).plus(1).sqrt().plus(t),b=!0,n.precision=r,n.rounding=e,t.ln())};p.inverseHyperbolicTangent=p.atanh=function(){var r,e,t,n,i=this,s=i.constructor;return i.isFinite()?i.e>=0?new s(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(r=s.precision,e=s.rounding,n=i.sd(),Math.max(n,r)<2*-i.e-1?m(new s(i),r,e,!0):(s.precision=t=n-i.e,i=_(i.plus(1),new s(1).minus(i),t+r,1),s.precision=r+4,s.rounding=1,i=i.ln(),s.precision=r,s.rounding=e,i.times(.5))):new s(NaN)};p.inverseSine=p.asin=function(){var r,e,t,n,i=this,s=i.constructor;return i.isZero()?new s(i):(e=i.abs().cmp(1),t=s.precision,n=s.rounding,e!==-1?e===0?(r=k(s,t+4,n).times(.5),r.s=i.s,r):new s(NaN):(s.precision=t+6,s.rounding=1,i=i.div(new s(1).minus(i.times(i)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=n,i.times(2)))};p.inverseTangent=p.atan=function(){var r,e,t,n,i,s,o,a,u,l=this,c=l.constructor,d=c.precision,h=c.rounding;if(l.isFinite()){if(l.isZero())return new c(l);if(l.abs().eq(1)&&d+4<=Le)return o=k(c,d+4,h).times(.25),o.s=l.s,o}else{if(!l.s)return new c(NaN);if(d+4<=Le)return o=k(c,d+4,h).times(.5),o.s=l.s,o}for(c.precision=a=d+10,c.rounding=1,t=Math.min(28,a/g+2|0),r=t;r;--r)l=l.div(l.times(l).plus(1).sqrt().plus(1));for(b=!1,e=Math.ceil(a/g),n=1,u=l.times(l),o=new c(l),i=l;r!==-1;)if(i=i.times(u),s=o.minus(i.div(n+=2)),i=i.times(u),o=s.plus(i.div(n+=2)),o.d[e]!==void 0)for(r=e;o.d[r]===s.d[r]&&r--;);return t&&(o=o.times(2<<t-1)),b=!0,m(o,c.precision=d,c.rounding=h,!0)};p.isFinite=function(){return!!this.d};p.isInteger=p.isInt=function(){return!!this.d&&R(this.e/g)>this.d.length-2};p.isNaN=function(){return!this.s};p.isNegative=p.isNeg=function(){return this.s<0};p.isPositive=p.isPos=function(){return this.s>0};p.isZero=function(){return!!this.d&&this.d[0]===0};p.lessThan=p.lt=function(r){return this.cmp(r)<0};p.lessThanOrEqualTo=p.lte=function(r){return this.cmp(r)<1};p.logarithm=p.log=function(r){var e,t,n,i,s,o,a,u,l=this,c=l.constructor,d=c.precision,h=c.rounding,f=5;if(r==null)r=new c(10),e=!0;else{if(r=new c(r),t=r.d,r.s<0||!t||!t[0]||r.eq(1))return new c(NaN);e=r.eq(10)}if(t=l.d,l.s<0||!t||!t[0]||l.eq(1))return new c(t&&!t[0]?-1/0:l.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)s=!0;else{for(i=t[0];i%10===0;)i/=10;s=i!==1}if(b=!1,a=d+f,o=Z(l,a),n=e?Ae(c,a+10):Z(r,a),u=_(o,n,a,1),pe(u.d,i=d,h))do if(a+=10,o=Z(l,a),n=e?Ae(c,a+10):Z(r,a),u=_(o,n,a,1),!s){+C(u.d).slice(i+1,i+15)+1==1e14&&(u=m(u,d+1,0));break}while(pe(u.d,i+=10,h));return b=!0,m(u,d,h)};p.minus=p.sub=function(r){var e,t,n,i,s,o,a,u,l,c,d,h,f=this,y=f.constructor;if(r=new y(r),!f.d||!r.d)return!f.s||!r.s?r=new y(NaN):f.d?r.s=-r.s:r=new y(r.d||f.s!==r.s?f:NaN),r;if(f.s!=r.s)return r.s=-r.s,f.plus(r);if(l=f.d,h=r.d,a=y.precision,u=y.rounding,!l[0]||!h[0]){if(h[0])r.s=-r.s;else if(l[0])r=new y(f);else return new y(u===3?-0:0);return b?m(r,a,u):r}if(t=R(r.e/g),c=R(f.e/g),l=l.slice(),s=c-t,s){for(d=s<0,d?(e=l,s=-s,o=h.length):(e=h,t=c,o=l.length),n=Math.max(Math.ceil(a/g),o)+2,s>n&&(s=n,e.length=1),e.reverse(),n=s;n--;)e.push(0);e.reverse()}else{for(n=l.length,o=h.length,d=n<o,d&&(o=n),n=0;n<o;n++)if(l[n]!=h[n]){d=l[n]<h[n];break}s=0}for(d&&(e=l,l=h,h=e,r.s=-r.s),o=l.length,n=h.length-o;n>0;--n)l[o++]=0;for(n=h.length;n>s;){if(l[--n]<h[n]){for(i=n;i&&l[--i]===0;)l[i]=O-1;--l[i],l[n]+=O}l[n]-=h[n]}for(;l[--o]===0;)l.pop();for(;l[0]===0;l.shift())--t;return l[0]?(r.d=l,r.e=Ie(l,t),b?m(r,a,u):r):new y(u===3?-0:0)};p.modulo=p.mod=function(r){var e,t=this,n=t.constructor;return r=new n(r),!t.d||!r.s||r.d&&!r.d[0]?new n(NaN):!r.d||t.d&&!t.d[0]?m(new n(t),n.precision,n.rounding):(b=!1,n.modulo==9?(e=_(t,r.abs(),0,3,1),e.s*=r.s):e=_(t,r,0,n.modulo,1),e=e.times(r),b=!0,t.minus(e))};p.naturalExponential=p.exp=function(){return xe(this)};p.naturalLogarithm=p.ln=function(){return Z(this)};p.negated=p.neg=function(){var r=new this.constructor(this);return r.s=-r.s,m(r)};p.plus=p.add=function(r){var e,t,n,i,s,o,a,u,l,c,d=this,h=d.constructor;if(r=new h(r),!d.d||!r.d)return!d.s||!r.s?r=new h(NaN):d.d||(r=new h(r.d||d.s===r.s?d:NaN)),r;if(d.s!=r.s)return r.s=-r.s,d.minus(r);if(l=d.d,c=r.d,a=h.precision,u=h.rounding,!l[0]||!c[0])return c[0]||(r=new h(d)),b?m(r,a,u):r;if(s=R(d.e/g),n=R(r.e/g),l=l.slice(),i=s-n,i){for(i<0?(t=l,i=-i,o=c.length):(t=c,n=s,o=l.length),s=Math.ceil(a/g),o=s>o?s+1:o+1,i>o&&(i=o,t.length=1),t.reverse();i--;)t.push(0);t.reverse()}for(o=l.length,i=c.length,o-i<0&&(i=o,t=c,c=l,l=t),e=0;i;)e=(l[--i]=l[i]+c[i]+e)/O|0,l[i]%=O;for(e&&(l.unshift(e),++n),o=l.length;l[--o]==0;)l.pop();return r.d=l,r.e=Ie(l,n),b?m(r,a,u):r};p.precision=p.sd=function(r){var e,t=this;if(r!==void 0&&r!==!!r&&r!==1&&r!==0)throw Error(W+r);return t.d?(e=yt(t.d),r&&t.e+1>e&&(e=t.e+1)):e=NaN,e};p.round=function(){var r=this,e=r.constructor;return m(new e(r),r.e+1,e.rounding)};p.sine=p.sin=function(){var r,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+Math.max(t.e,t.sd())+g,n.rounding=1,t=dr(n,Et(n,t)),n.precision=r,n.rounding=e,m(V>2?t.neg():t,r,e,!0)):new n(NaN)};p.squareRoot=p.sqrt=function(){var r,e,t,n,i,s,o=this,a=o.d,u=o.e,l=o.s,c=o.constructor;if(l!==1||!a||!a[0])return new c(!l||l<0&&(!a||a[0])?NaN:a?o:1/0);for(b=!1,l=Math.sqrt(+o),l==0||l==1/0?(e=C(a),(e.length+u)%2==0&&(e+="0"),l=Math.sqrt(e),u=R((u+1)/2)-(u<0||u%2),l==1/0?e="5e"+u:(e=l.toExponential(),e=e.slice(0,e.indexOf("e")+1)+u),n=new c(e)):n=new c(l.toString()),t=(u=c.precision)+3;;)if(s=n,n=s.plus(_(o,s,t+2,1)).times(.5),C(s.d).slice(0,t)===(e=C(n.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!i&&e=="4999"){if(!i&&(m(s,u+1,0),s.times(s).eq(o))){n=s;break}t+=4,i=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(m(n,u+1,1),r=!n.times(n).eq(o));break}return b=!0,m(n,u,c.rounding,r)};p.tangent=p.tan=function(){var r,e,t=this,n=t.constructor;return t.isFinite()?t.isZero()?new n(t):(r=n.precision,e=n.rounding,n.precision=r+10,n.rounding=1,t=t.sin(),t.s=1,t=_(t,new n(1).minus(t.times(t)).sqrt(),r+10,0),n.precision=r,n.rounding=e,m(V==2||V==4?t.neg():t,r,e,!0)):new n(NaN)};p.times=p.mul=function(r){var e,t,n,i,s,o,a,u,l,c=this,d=c.constructor,h=c.d,f=(r=new d(r)).d;if(r.s*=c.s,!h||!h[0]||!f||!f[0])return new d(!r.s||h&&!h[0]&&!f||f&&!f[0]&&!h?NaN:!h||!f?r.s/0:r.s*0);for(t=R(c.e/g)+R(r.e/g),u=h.length,l=f.length,u<l&&(s=h,h=f,f=s,o=u,u=l,l=o),s=[],o=u+l,n=o;n--;)s.push(0);for(n=l;--n>=0;){for(e=0,i=u+n;i>n;)a=s[i]+f[n]*h[i-n-1]+e,s[i--]=a%O|0,e=a/O|0;s[i]=(s[i]+e)%O|0}for(;!s[--o];)s.pop();return e?++t:s.shift(),r.d=s,r.e=Ie(s,t),b?m(r,d.precision,d.rounding):r};p.toBinary=function(r,e){return Ye(this,2,r,e)};p.toDecimalPlaces=p.toDP=function(r,e){var t=this,n=t.constructor;return t=new n(t),r===void 0?t:(P(r,0,j),e===void 0?e=n.rounding:P(e,0,8),m(t,r+t.e+1,e))};p.toExponential=function(r,e){var t,n=this,i=n.constructor;return r===void 0?t=x(n,!0):(P(r,0,j),e===void 0?e=i.rounding:P(e,0,8),n=m(new i(n),r+1,e),t=x(n,!0,r+1)),n.isNeg()&&!n.isZero()?"-"+t:t};p.toFixed=function(r,e){var t,n,i=this,s=i.constructor;return r===void 0?t=x(i):(P(r,0,j),e===void 0?e=s.rounding:P(e,0,8),n=m(new s(i),r+i.e+1,e),t=x(n,!1,r+n.e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};p.toFraction=function(r){var e,t,n,i,s,o,a,u,l,c,d,h,f=this,y=f.d,w=f.constructor;if(!y)return new w(f);if(l=t=new w(1),n=u=new w(0),e=new w(n),s=e.e=yt(y)-f.e-1,o=s%g,e.d[0]=A(10,o<0?g+o:o),r==null)r=s>0?e:l;else{if(a=new w(r),!a.isInt()||a.lt(l))throw Error(W+a);r=a.gt(e)?s>0?e:l:a}for(b=!1,a=new w(C(y)),c=w.precision,w.precision=s=y.length*g*2;d=_(a,e,0,1,1),i=t.plus(d.times(n)),i.cmp(r)!=1;)t=n,n=i,i=l,l=u.plus(d.times(i)),u=i,i=e,e=a.minus(d.times(i)),a=i;return i=_(r.minus(t),n,0,1,1),u=u.plus(i.times(l)),t=t.plus(i.times(n)),u.s=l.s=f.s,h=_(l,n,s,1).minus(f).abs().cmp(_(u,t,s,1).minus(f).abs())<1?[l,n]:[u,t],w.precision=c,b=!0,h};p.toHexadecimal=p.toHex=function(r,e){return Ye(this,16,r,e)};p.toNearest=function(r,e){var t=this,n=t.constructor;if(t=new n(t),r==null){if(!t.d)return t;r=new n(1),e=n.rounding}else{if(r=new n(r),e===void 0?e=n.rounding:P(e,0,8),!t.d)return r.s?t:r;if(!r.d)return r.s&&(r.s=t.s),r}return r.d[0]?(b=!1,t=_(t,r,0,e,1).times(r),b=!0,m(t)):(r.s=t.s,t=r),t};p.toNumber=function(){return+this};p.toOctal=function(r,e){return Ye(this,8,r,e)};p.toPower=p.pow=function(r){var e,t,n,i,s,o,a=this,u=a.constructor,l=+(r=new u(r));if(!a.d||!r.d||!a.d[0]||!r.d[0])return new u(A(+a,l));if(a=new u(a),a.eq(1))return a;if(n=u.precision,s=u.rounding,r.eq(1))return m(a,n,s);if(e=R(r.e/g),e>=r.d.length-1&&(t=l<0?-l:l)<=ar)return i=Nt(u,a,t,n),r.s<0?new u(1).div(i):m(i,n,s);if(o=a.s,o<0){if(e<r.d.length-1)return new u(NaN);if((r.d[e]&1)==0&&(o=1),a.e==0&&a.d[0]==1&&a.d.length==1)return a.s=o,a}return t=A(+a,l),e=t==0||!isFinite(t)?R(l*(Math.log("0."+C(a.d))/Math.LN10+a.e+1)):new u(t+"").e,e>u.maxE+1||e<u.minE-1?new u(e>0?o/0:0):(b=!1,u.rounding=a.s=1,t=Math.min(12,(e+"").length),i=xe(r.times(Z(a,n+t)),n),i.d&&(i=m(i,n+5,1),pe(i.d,n,s)&&(e=n+10,i=m(xe(r.times(Z(a,e+t)),e),e+5,1),+C(i.d).slice(n+1,n+15)+1==1e14&&(i=m(i,n+1,0)))),i.s=o,b=!0,u.rounding=s,m(i,n,s))};p.toPrecision=function(r,e){var t,n=this,i=n.constructor;return r===void 0?t=x(n,n.e<=i.toExpNeg||n.e>=i.toExpPos):(P(r,1,j),e===void 0?e=i.rounding:P(e,0,8),n=m(new i(n),r,e),t=x(n,r<=n.e||n.e<=i.toExpNeg,r)),n.isNeg()&&!n.isZero()?"-"+t:t};p.toSignificantDigits=p.toSD=function(r,e){var t=this,n=t.constructor;return r===void 0?(r=n.precision,e=n.rounding):(P(r,1,j),e===void 0?e=n.rounding:P(e,0,8)),m(new n(t),r,e)};p.toString=function(){var r=this,e=r.constructor,t=x(r,r.e<=e.toExpNeg||r.e>=e.toExpPos);return r.isNeg()&&!r.isZero()?"-"+t:t};p.truncated=p.trunc=function(){return m(new this.constructor(this),this.e+1,1)};p.valueOf=p.toJSON=function(){var r=this,e=r.constructor,t=x(r,r.e<=e.toExpNeg||r.e>=e.toExpPos);return r.isNeg()?"-"+t:t};function C(r){var e,t,n,i=r.length-1,s="",o=r[0];if(i>0){for(s+=o,e=1;e<i;e++)n=r[e]+"",t=g-n.length,t&&(s+=B(t)),s+=n;o=r[e],n=o+"",t=g-n.length,t&&(s+=B(t))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function P(r,e,t){if(r!==~~r||r<e||r>t)throw Error(W+r)}function pe(r,e,t,n){var i,s,o,a;for(s=r[0];s>=10;s/=10)--e;return--e<0?(e+=g,i=0):(i=Math.ceil((e+1)/g),e%=g),s=A(10,g-e),a=r[i]%s|0,n==null?e<3?(e==0?a=a/100|0:e==1&&(a=a/10|0),o=t<4&&a==99999||t>3&&a==49999||a==5e4||a==0):o=(t<4&&a+1==s||t>3&&a+1==s/2)&&(r[i+1]/s/100|0)==A(10,e-2)-1||(a==s/2||a==0)&&(r[i+1]/s/100|0)==0:e<4?(e==0?a=a/1e3|0:e==1?a=a/100|0:e==2&&(a=a/10|0),o=(n||t<4)&&a==9999||!n&&t>3&&a==4999):o=((n||t<4)&&a+1==s||!n&&t>3&&a+1==s/2)&&(r[i+1]/s/1e3|0)==A(10,e-3)-1,o}function ye(r,e,t){for(var n,i=[0],s,o=0,a=r.length;o<a;){for(s=i.length;s--;)i[s]*=e;for(i[0]+=ke.indexOf(r.charAt(o++)),n=0;n<i.length;n++)i[n]>t-1&&(i[n+1]===void 0&&(i[n+1]=0),i[n+1]+=i[n]/t|0,i[n]%=t)}return i.reverse()}function ur(r,e){var t,n,i;if(e.isZero())return e;n=e.d.length,n<32?(t=Math.ceil(n/3),i=(1/Me(4,t)).toString()):(t=16,i="2.3283064365386962890625e-10"),r.precision+=t,e=se(r,1,e.times(i),new r(1));for(var s=t;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return r.precision-=t,e}var _=(function(){function r(n,i,s){var o,a=0,u=n.length;for(n=n.slice();u--;)o=n[u]*i+a,n[u]=o%s|0,a=o/s|0;return a&&n.unshift(a),n}function e(n,i,s,o){var a,u;if(s!=o)u=s>o?1:-1;else for(a=u=0;a<s;a++)if(n[a]!=i[a]){u=n[a]>i[a]?1:-1;break}return u}function t(n,i,s,o){for(var a=0;s--;)n[s]-=a,a=n[s]<i[s]?1:0,n[s]=a*o+n[s]-i[s];for(;!n[0]&&n.length>1;)n.shift()}return function(n,i,s,o,a,u){var l,c,d,h,f,y,w,S,E,T,N,I,me,q,Re,ge,oe,Pe,U,we,be=n.constructor,Te=n.s==i.s?1:-1,M=n.d,$=i.d;if(!M||!M[0]||!$||!$[0])return new be(!n.s||!i.s||(M?$&&M[0]==$[0]:!$)?NaN:M&&M[0]==0||!$?Te*0:Te/0);for(u?(f=1,c=n.e-i.e):(u=O,f=g,c=R(n.e/f)-R(i.e/f)),U=$.length,oe=M.length,E=new be(Te),T=E.d=[],d=0;$[d]==(M[d]||0);d++);if($[d]>(M[d]||0)&&c--,s==null?(q=s=be.precision,o=be.rounding):a?q=s+(n.e-i.e)+1:q=s,q<0)T.push(1),y=!0;else{if(q=q/f+2|0,d=0,U==1){for(h=0,$=$[0],q++;(d<oe||h)&&q--;d++)Re=h*u+(M[d]||0),T[d]=Re/$|0,h=Re%$|0;y=h||d<oe}else{for(h=u/($[0]+1)|0,h>1&&($=r($,h,u),M=r(M,h,u),U=$.length,oe=M.length),ge=U,N=M.slice(0,U),I=N.length;I<U;)N[I++]=0;we=$.slice(),we.unshift(0),Pe=$[0],$[1]>=u/2&&++Pe;do h=0,l=e($,N,U,I),l<0?(me=N[0],U!=I&&(me=me*u+(N[1]||0)),h=me/Pe|0,h>1?(h>=u&&(h=u-1),w=r($,h,u),S=w.length,I=N.length,l=e(w,N,S,I),l==1&&(h--,t(w,U<S?we:$,S,u))):(h==0&&(l=h=1),w=$.slice()),S=w.length,S<I&&w.unshift(0),t(N,w,I,u),l==-1&&(I=N.length,l=e($,N,U,I),l<1&&(h++,t(N,U<I?we:$,I,u))),I=N.length):l===0&&(h++,N=[0]),T[d++]=h,l&&N[0]?N[I++]=M[ge]||0:(N=[M[ge]],I=1);while((ge++<oe||N[0]!==void 0)&&q--);y=N[0]!==void 0}T[0]||T.shift()}if(f==1)E.e=c,mt=y;else{for(d=1,h=T[0];h>=10;h/=10)d++;E.e=d+c*f-1,m(E,a?s+E.e+1:s,o,y)}return E}})();function m(r,e,t,n){var i,s,o,a,u,l,c,d,h,f=r.constructor;e:if(e!=null){if(d=r.d,!d)return r;for(i=1,a=d[0];a>=10;a/=10)i++;if(s=e-i,s<0)s+=g,o=e,c=d[h=0],u=c/A(10,i-o-1)%10|0;else if(h=Math.ceil((s+1)/g),a=d.length,h>=a)if(n){for(;a++<=h;)d.push(0);c=u=0,i=1,s%=g,o=s-g+1}else break e;else{for(c=a=d[h],i=1;a>=10;a/=10)i++;s%=g,o=s-g+i,u=o<0?0:c/A(10,i-o-1)%10|0}if(n=n||e<0||d[h+1]!==void 0||(o<0?c:c%A(10,i-o-1)),l=t<4?(u||n)&&(t==0||t==(r.s<0?3:2)):u>5||u==5&&(t==4||n||t==6&&(s>0?o>0?c/A(10,i-o):0:d[h-1])%10&1||t==(r.s<0?8:7)),e<1||!d[0])return d.length=0,l?(e-=r.e+1,d[0]=A(10,(g-e%g)%g),r.e=-e||0):d[0]=r.e=0,r;if(s==0?(d.length=h,a=1,h--):(d.length=h+1,a=A(10,g-s),d[h]=o>0?(c/A(10,i-o)%A(10,o)|0)*a:0),l)for(;;)if(h==0){for(s=1,o=d[0];o>=10;o/=10)s++;for(o=d[0]+=a,a=1;o>=10;o/=10)a++;s!=a&&(r.e++,d[0]==O&&(d[0]=1));break}else{if(d[h]+=a,d[h]!=O)break;d[h--]=0,a=1}for(s=d.length;d[--s]===0;)d.pop()}return b&&(r.e>f.maxE?(r.d=null,r.e=NaN):r.e<f.minE&&(r.e=0,r.d=[0])),r}function x(r,e,t){if(!r.isFinite())return $t(r);var n,i=r.e,s=C(r.d),o=s.length;return e?(t&&(n=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+B(n):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(r.e<0?"e":"e+")+r.e):i<0?(s="0."+B(-i-1)+s,t&&(n=t-o)>0&&(s+=B(n))):i>=o?(s+=B(i+1-o),t&&(n=t-i-1)>0&&(s=s+"."+B(n))):((n=i+1)<o&&(s=s.slice(0,n)+"."+s.slice(n)),t&&(n=t-o)>0&&(i+1===o&&(s+="."),s+=B(n))),s}function Ie(r,e){var t=r[0];for(e*=g;t>=10;t/=10)e++;return e}function Ae(r,e,t){if(e>lr)throw b=!0,t&&(r.precision=t),Error(gt);return m(new r($e),e,1,!0)}function k(r,e,t){if(e>Le)throw Error(gt);return m(new r(Ee),e,t,!0)}function yt(r){var e=r.length-1,t=e*g+1;if(e=r[e],e){for(;e%10==0;e/=10)t--;for(e=r[0];e>=10;e/=10)t++}return t}function B(r){for(var e="";r--;)e+="0";return e}function Nt(r,e,t,n){var i,s=new r(1),o=Math.ceil(n/g+4);for(b=!1;;){if(t%2&&(s=s.times(e),it(s.d,o)&&(i=!0)),t=R(t/2),t===0){t=s.d.length-1,i&&s.d[t]===0&&++s.d[t];break}e=e.times(e),it(e.d,o)}return b=!0,s}function nt(r){return r.d[r.d.length-1]&1}function _t(r,e,t){for(var n,i,s=new r(e[0]),o=0;++o<e.length;){if(i=new r(e[o]),!i.s){s=i;break}n=s.cmp(i),(n===t||n===0&&s.s===t)&&(s=i)}return s}function xe(r,e){var t,n,i,s,o,a,u,l=0,c=0,d=0,h=r.constructor,f=h.rounding,y=h.precision;if(!r.d||!r.d[0]||r.e>17)return new h(r.d?r.d[0]?r.s<0?0:1/0:1:r.s?r.s<0?0:r:NaN);for(e==null?(b=!1,u=y):u=e,a=new h(.03125);r.e>-2;)r=r.times(a),d+=5;for(n=Math.log(A(2,d))/Math.LN10*2+5|0,u+=n,t=s=o=new h(1),h.precision=u;;){if(s=m(s.times(r),u,1),t=t.times(++c),a=o.plus(_(s,t,u,1)),C(a.d).slice(0,u)===C(o.d).slice(0,u)){for(i=d;i--;)o=m(o.times(o),u,1);if(e==null)if(l<3&&pe(o.d,u-n,f,l))h.precision=u+=10,t=s=a=new h(1),c=0,l++;else return m(o,h.precision=y,f,b=!0);else return h.precision=y,o}o=a}}function Z(r,e){var t,n,i,s,o,a,u,l,c,d,h,f=1,y=10,w=r,S=w.d,E=w.constructor,T=E.rounding,N=E.precision;if(w.s<0||!S||!S[0]||!w.e&&S[0]==1&&S.length==1)return new E(S&&!S[0]?-1/0:w.s!=1?NaN:S?0:w);if(e==null?(b=!1,c=N):c=e,E.precision=c+=y,t=C(S),n=t.charAt(0),Math.abs(s=w.e)<15e14){for(;n<7&&n!=1||n==1&&t.charAt(1)>3;)w=w.times(r),t=C(w.d),n=t.charAt(0),f++;s=w.e,n>1?(w=new E("0."+t),s++):w=new E(n+"."+t.slice(1))}else return l=Ae(E,c+2,N).times(s+""),w=Z(new E(n+"."+t.slice(1)),c-y).plus(l),E.precision=N,e==null?m(w,N,T,b=!0):w;for(d=w,u=o=w=_(w.minus(1),w.plus(1),c,1),h=m(w.times(w),c,1),i=3;;){if(o=m(o.times(h),c,1),l=u.plus(_(o,new E(i),c,1)),C(l.d).slice(0,c)===C(u.d).slice(0,c))if(u=u.times(2),s!==0&&(u=u.plus(Ae(E,c+2,N).times(s+""))),u=_(u,new E(f),c,1),e==null)if(pe(u.d,c-y,T,a))E.precision=c+=y,l=o=w=_(d.minus(1),d.plus(1),c,1),h=m(w.times(w),c,1),i=a=1;else return m(u,E.precision=N,T,b=!0);else return E.precision=N,u;u=l,i+=2}}function $t(r){return String(r.s*r.s/0)}function Ne(r,e){var t,n,i;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(n=e.search(/e/i))>0?(t<0&&(t=n),t+=+e.slice(n+1),e=e.substring(0,n)):t<0&&(t=e.length),n=0;e.charCodeAt(n)===48;n++);for(i=e.length;e.charCodeAt(i-1)===48;--i);if(e=e.slice(n,i),e){if(i-=n,r.e=t=t-n-1,r.d=[],n=(t+1)%g,t<0&&(n+=g),n<i){for(n&&r.d.push(+e.slice(0,n)),i-=g;n<i;)r.d.push(+e.slice(n,n+=g));e=e.slice(n),n=g-e.length}else n-=i;for(;n--;)e+="0";r.d.push(+e),b&&(r.e>r.constructor.maxE?(r.d=null,r.e=NaN):r.e<r.constructor.minE&&(r.e=0,r.d=[0]))}else r.e=0,r.d=[0];return r}function cr(r,e){var t,n,i,s,o,a,u,l,c;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),vt.test(e))return Ne(r,e)}else if(e==="Infinity"||e==="NaN")return+e||(r.s=NaN),r.e=NaN,r.d=null,r;if(sr.test(e))t=16,e=e.toLowerCase();else if(ir.test(e))t=2;else if(or.test(e))t=8;else throw Error(W+e);for(s=e.search(/p/i),s>0?(u=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),s=e.indexOf("."),o=s>=0,n=r.constructor,o&&(e=e.replace(".",""),a=e.length,s=a-s,i=Nt(n,new n(t),s,s*2)),l=ye(e,t,O),c=l.length-1,s=c;l[s]===0;--s)l.pop();return s<0?new n(r.s*0):(r.e=Ie(l,c),r.d=l,b=!1,o&&(r=_(r,i,a*4)),u&&(r=r.times(Math.abs(u)<54?A(2,u):L.pow(2,u))),b=!0,r)}function dr(r,e){var t,n=e.d.length;if(n<3)return e.isZero()?e:se(r,2,e,e);t=1.4*Math.sqrt(n),t=t>16?16:t|0,e=e.times(1/Me(5,t)),e=se(r,2,e,e);for(var i,s=new r(5),o=new r(16),a=new r(20);t--;)i=e.times(e),e=e.times(s.plus(i.times(o.times(i).minus(a))));return e}function se(r,e,t,n,i){var s,o,a,u,l=r.precision,c=Math.ceil(l/g);for(b=!1,u=t.times(t),a=new r(n);;){if(o=_(a.times(u),new r(e++*e++),l,1),a=i?n.plus(o):n.minus(o),n=_(o.times(u),new r(e++*e++),l,1),o=a.plus(n),o.d[c]!==void 0){for(s=c;o.d[s]===a.d[s]&&s--;);if(s==-1)break}s=a,a=n,n=o,o=s}return b=!0,o.d.length=c+1,o}function Me(r,e){for(var t=r;--e;)t*=r;return t}function Et(r,e){var t,n=e.s<0,i=k(r,r.precision,1),s=i.times(.5);if(e=e.abs(),e.lte(s))return V=n?4:1,e;if(t=e.divToInt(i),t.isZero())V=n?3:2;else{if(e=e.minus(t.times(i)),e.lte(s))return V=nt(t)?n?2:3:n?4:1,e;V=nt(t)?n?1:4:n?3:2}return e.minus(i).abs()}function Ye(r,e,t,n){var i,s,o,a,u,l,c,d,h,f=r.constructor,y=t!==void 0;if(y?(P(t,1,j),n===void 0?n=f.rounding:P(n,0,8)):(t=f.precision,n=f.rounding),!r.isFinite())c=$t(r);else{for(c=x(r),o=c.indexOf("."),y?(i=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):i=e,o>=0&&(c=c.replace(".",""),h=new f(1),h.e=c.length-o,h.d=ye(x(h),10,i),h.e=h.d.length),d=ye(c,10,i),s=u=d.length;d[--u]==0;)d.pop();if(!d[0])c=y?"0p+0":"0";else{if(o<0?s--:(r=new f(r),r.d=d,r.e=s,r=_(r,h,t,n,0,i),d=r.d,s=r.e,l=mt),o=d[t],a=i/2,l=l||d[t+1]!==void 0,l=n<4?(o!==void 0||l)&&(n===0||n===(r.s<0?3:2)):o>a||o===a&&(n===4||l||n===6&&d[t-1]&1||n===(r.s<0?8:7)),d.length=t,l)for(;++d[--t]>i-1;)d[t]=0,t||(++s,d.unshift(1));for(u=d.length;!d[u-1];--u);for(o=0,c="";o<u;o++)c+=ke.charAt(d[o]);if(y){if(u>1)if(e==16||e==8){for(o=e==16?4:3,--u;u%o;u++)c+="0";for(d=ye(c,i,e),u=d.length;!d[u-1];--u);for(o=1,c="1.";o<u;o++)c+=ke.charAt(d[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)c="0"+c;c="0."+c}else if(++s>u)for(s-=u;s--;)c+="0";else s<u&&(c=c.slice(0,s)+"."+c.slice(s))}c=(e==16?"0x":e==2?"0b":e==8?"0o":"")+c}return r.s<0?"-"+c:c}function it(r,e){if(r.length>e)return r.length=e,!0}function hr(r){return new this(r).abs()}function pr(r){return new this(r).acos()}function fr(r){return new this(r).acosh()}function mr(r,e){return new this(r).plus(e)}function gr(r){return new this(r).asin()}function wr(r){return new this(r).asinh()}function br(r){return new this(r).atan()}function vr(r){return new this(r).atanh()}function yr(r,e){r=new this(r),e=new this(e);var t,n=this.precision,i=this.rounding,s=n+4;return!r.s||!e.s?t=new this(NaN):!r.d&&!e.d?(t=k(this,s,1).times(e.s>0?.25:.75),t.s=r.s):!e.d||r.isZero()?(t=e.s<0?k(this,n,i):new this(0),t.s=r.s):!r.d||e.isZero()?(t=k(this,s,1).times(.5),t.s=r.s):e.s<0?(this.precision=s,this.rounding=1,t=this.atan(_(r,e,s,1)),e=k(this,s,1),this.precision=n,this.rounding=i,t=r.s<0?t.minus(e):t.plus(e)):t=this.atan(_(r,e,s,1)),t}function Nr(r){return new this(r).cbrt()}function _r(r){return m(r=new this(r),r.e+1,2)}function $r(r,e,t){return new this(r).clamp(e,t)}function Er(r){if(!r||typeof r!="object")throw Error(Ce+"Object expected");var e,t,n,i=r.defaults===!0,s=["precision",1,j,"rounding",0,8,"toExpNeg",-te,0,"toExpPos",0,te,"maxE",0,te,"minE",-te,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],i&&(this[t]=Fe[t]),(n=r[t])!==void 0)if(R(n)===n&&n>=s[e+1]&&n<=s[e+2])this[t]=n;else throw Error(W+t+": "+n);if(t="crypto",i&&(this[t]=Fe[t]),(n=r[t])!==void 0)if(n===!0||n===!1||n===0||n===1)if(n)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(wt);else this[t]=!1;else throw Error(W+t+": "+n);return this}function Ar(r){return new this(r).cos()}function Dr(r){return new this(r).cosh()}function At(r){var e,t,n;function i(s){var o,a,u,l=this;if(!(l instanceof i))return new i(s);if(l.constructor=i,st(s)){l.s=s.s,b?!s.d||s.e>i.maxE?(l.e=NaN,l.d=null):s.e<i.minE?(l.e=0,l.d=[0]):(l.e=s.e,l.d=s.d.slice()):(l.e=s.e,l.d=s.d?s.d.slice():s.d);return}if(u=typeof s,u==="number"){if(s===0){l.s=1/s<0?-1:1,l.e=0,l.d=[0];return}if(s<0?(s=-s,l.s=-1):l.s=1,s===~~s&&s<1e7){for(o=0,a=s;a>=10;a/=10)o++;b?o>i.maxE?(l.e=NaN,l.d=null):o<i.minE?(l.e=0,l.d=[0]):(l.e=o,l.d=[s]):(l.e=o,l.d=[s]);return}if(s*0!==0){s||(l.s=NaN),l.e=NaN,l.d=null;return}return Ne(l,s.toString())}if(u==="string")return(a=s.charCodeAt(0))===45?(s=s.slice(1),l.s=-1):(a===43&&(s=s.slice(1)),l.s=1),vt.test(s)?Ne(l,s):cr(l,s);if(u==="bigint")return s<0?(s=-s,l.s=-1):l.s=1,Ne(l,s.toString());throw Error(W+s)}if(i.prototype=p,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=Er,i.clone=At,i.isDecimal=st,i.abs=hr,i.acos=pr,i.acosh=fr,i.add=mr,i.asin=gr,i.asinh=wr,i.atan=br,i.atanh=vr,i.atan2=yr,i.cbrt=Nr,i.ceil=_r,i.clamp=$r,i.cos=Ar,i.cosh=Dr,i.div=Sr,i.exp=Cr,i.floor=Ir,i.hypot=Mr,i.ln=Rr,i.log=Pr,i.log10=Ur,i.log2=Tr,i.max=Or,i.min=kr,i.mod=Fr,i.mul=Lr,i.pow=xr,i.random=qr,i.round=zr,i.sign=Vr,i.sin=Hr,i.sinh=Br,i.sqrt=Yr,i.sub=Zr,i.sum=Wr,i.tan=jr,i.tanh=Kr,i.trunc=Gr,r===void 0&&(r={}),r&&r.defaults!==!0)for(n=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<n.length;)r.hasOwnProperty(t=n[e++])||(r[t]=this[t]);return i.config(r),i}function Sr(r,e){return new this(r).div(e)}function Cr(r){return new this(r).exp()}function Ir(r){return m(r=new this(r),r.e+1,3)}function Mr(){var r,e,t=new this(0);for(b=!1,r=0;r<arguments.length;)if(e=new this(arguments[r++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return b=!0,new this(1/0);t=e}return b=!0,t.sqrt()}function st(r){return r instanceof L||r&&r.toStringTag===bt||!1}function Rr(r){return new this(r).ln()}function Pr(r,e){return new this(r).log(e)}function Tr(r){return new this(r).log(2)}function Ur(r){return new this(r).log(10)}function Or(){return _t(this,arguments,-1)}function kr(){return _t(this,arguments,1)}function Fr(r,e){return new this(r).mod(e)}function Lr(r,e){return new this(r).mul(e)}function xr(r,e){return new this(r).pow(e)}function qr(r){var e,t,n,i,s=0,o=new this(1),a=[];if(r===void 0?r=this.precision:P(r,1,j),n=Math.ceil(r/g),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(n));s<n;)i=e[s],i>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:a[s++]=i%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(n*=4);s<n;)i=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((e[s+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(e,s):(a.push(i%1e7),s+=4);s=n/4}else throw Error(wt);else for(;s<n;)a[s++]=Math.random()*1e7|0;for(n=a[--s],r%=g,n&&r&&(i=A(10,g-r),a[s]=(n/i|0)*i);a[s]===0;s--)a.pop();if(s<0)t=0,a=[0];else{for(t=-1;a[0]===0;t-=g)a.shift();for(n=1,i=a[0];i>=10;i/=10)n++;n<g&&(t-=g-n)}return o.e=t,o.d=a,o}function zr(r){return m(r=new this(r),r.e+1,this.rounding)}function Vr(r){return r=new this(r),r.d?r.d[0]?r.s:0*r.s:r.s||NaN}function Hr(r){return new this(r).sin()}function Br(r){return new this(r).sinh()}function Yr(r){return new this(r).sqrt()}function Zr(r,e){return new this(r).sub(e)}function Wr(){var r=0,e=arguments,t=new this(e[r]);for(b=!1;t.s&&++r<e.length;)t=t.plus(e[r]);return b=!0,m(t,this.precision,this.rounding)}function jr(r){return new this(r).tan()}function Kr(r){return new this(r).tanh()}function Gr(r){return m(r=new this(r),r.e+1,1)}p[Symbol.for("nodejs.util.inspect.custom")]=p.toString;p[Symbol.toStringTag]="Decimal";var L=p.constructor=At(Fe);$e=new L($e);Ee=new L(Ee);const Xr=20,Dt={bankers:L.ROUND_HALF_EVEN,conventional:L.ROUND_HALF_UP,none:null};L.set({precision:40});function Q(r){if(!(r instanceof v))throw new Error("other must be an Amount")}function Jr(r={}){const{roundingMode:e="none",decimalPlaces:t}=r;if(!Object.prototype.hasOwnProperty.call(Dt,e))throw new Error("roundingMode must be one of bankers, conventional, or none");if(t!==void 0&&(!Number.isInteger(t)||t<0))throw new Error("decimalPlaces must be a non-negative integer when provided");return{roundingMode:e,decimalPlaces:t??(e==="none"?void 0:2)}}function Qr(r,e){const{roundingMode:t,decimalPlaces:n}=Jr(e);return t==="none"?r:r.toDecimalPlaces(n,Dt[t])}class v{#e;constructor(e){if(e instanceof v){this.#e=e.#e;return}if(e instanceof L){this.#e=e;return}if(typeof e=="string"||typeof e=="number"){if(Number.isNaN(Number(e))||!Number.isFinite(Number(e)))throw new Error("Value must be a finite number");this.#e=new L(e);return}throw new Error("Value must be a number, string, Amount, or Decimal")}static#t(e,t){const n=Qr(e,t),i=new v(0);return i.#e=n,i}addTo(e,t){Q(e);const n=this.#e.add(e.#e);return v.#t(n,t)}subtractFrom(e,t){Q(e);const n=this.#e.sub(e.#e);return v.#t(n,t)}multiplyBy(e,t){Q(e);const n=this.#e.mul(e.#e);return v.#t(n,t)}divideBy(e,t){if(Q(e),e.#e.isZero())throw new Error("Cannot divide by zero");const n=this.#e.div(e.#e);return v.#t(n,t)}toDecimal(){return this.#e.toNumber()}toPreciseString(){return this.#e.toFixed(Xr)}nthRoot(e,t){if(!Number.isInteger(e)||e<=0)throw new Error("Exponent must be a positive integer");if(this.#e.isNegative())throw new Error("Cannot take nthRoot of a negative amount");if(e===1)return this;if(this.#e.isZero())return new v(0);const n=new L(1).div(e),i=this.#e.pow(n);return v.#t(i,t)}pow(e,t){if(!Number.isInteger(e)||e<0)throw new Error("Exponent must be a non-negative integer");if(e===0)return new v(1);const n=this.#e.pow(e);return v.#t(n,t)}equals(e){return Q(e),this.#e.equals(e.#e)}lessThan(e){return Q(e),this.#e.lessThan(e.#e)}}let St=class{#e;#t;#n;#r;#i;constructor(e=0,t=0){this.#t=new v(e),this.#e=new v(t),this.#r=new v(0),this.#i=new v(0);const n=new v(1);this.#n=n.addTo(this.#e).nthRoot(ie.daysInYear).subtractFrom(n)}get apy(){return this.#e}get balance(){return this.#t}get interestAccrued(){return this.#i}set balance(e){this.#t=e instanceof v?e:new v(e)}withdraw(e){const t=new v(e),n=new v(0);if(t.lessThan(n))throw new Error("Withdrawal must be zero or greater");return this.#t=this.#t.subtractFrom(t),this}accrueForDays(e){if(!Number.isInteger(e))throw new Error("Days must be an integer number");if(e<0)throw new Error("Days must be zero or greater");if(e===0)return this;let t=new v(0);for(let s=0;s<e;s++)t=t.addTo(this.#t.addTo(t).multiplyBy(this.#n));const n=this.#t.addTo(t,{roundingMode:"bankers",decimalPlaces:2}),i=n.subtractFrom(this.#t);return this.#t=n,this.#i=this.#i.addTo(i),this}accrueForDaysWithMonthlyPosting(e,t){if(!Number.isInteger(e))throw new Error("Days must be an integer number");if(e<0)throw new Error("Days must be zero or greater");if(e===0)return this;let n=H(t);for(let i=0;i<e;i+=1){const s=this.#t.addTo(this.#r).multiplyBy(this.#n);if(this.#r=this.#r.addTo(s),tr(n,ft(n))){const o=this.#r.addTo(new v(0),{roundingMode:"bankers",decimalPlaces:2});this.#t=this.#t.addTo(o),this.#i=this.#i.addTo(o),this.#r=this.#r.subtractFrom(o)}n=er(n,1)}return this}};const en=ie.monthsInYear,tn=new v(en);let Ct=class{#e;#t=void 0;constructor(e,t,n,i){if(!Number.isInteger(e)||e<=0)throw new Error("Period count must be a positive integer");if(i<0)throw new Error("Principal must be zero or greater");const s=typeof t=="string"?t.toUpperCase():"";if(s!=="MONTH")throw new Error("Unsupported period type");if(typeof n!="number"||Number.isNaN(n)||!Number.isFinite(n)||n<0)throw new Error("Rate must be a non-negative finite number");this.nominalAnnualRate=new v(n),this.periodCount=e,this.periodType=s,this.principal=new v(i),this.#e=this.nominalAnnualRate.divideBy(tn),this.#t=void 0}payment(){return this.#n()}totalInterest(){const e=new v(0);if(this.#e.equals(e))return e;const i=this.#n().multiplyBy(new v(this.periodCount)).subtractFrom(this.principal);return i.lessThan(e)||i.equals(e)?e:i.addTo(new v(0),{roundingMode:"bankers",decimalPlaces:2})}#n(){return this.#t===void 0&&(this.#t=this.#r()),this.#t}#r(){const e=new v(0);if(this.principal.equals(e))return e;if(this.#e.equals(e))return this.principal.divideBy(new v(this.periodCount)).divideBy(new v(1),{roundingMode:"bankers",decimalPlaces:2});const n=this.#e.addTo(new v(1)).pow(this.periodCount),i=this.principal.multiplyBy(this.#e).multiplyBy(n),s=n.subtractFrom(new v(1));return i.divideBy(s,{roundingMode:"bankers",decimalPlaces:2})}};class It{#e;#t;constructor({apr:e=0,rewardsRate:t=0}={}){this.#e=new v(e),this.#t=new v(t);const n=new v(0);if(this.#e.lessThan(n))throw new Error("APR must be zero or greater");if(this.#t.lessThan(n))throw new Error("Rewards rate must be zero or greater");this._dailyRate=this.#e.divideBy(new v(ie.daysInYear))}calculateRewards(e){if(e<0)throw new Error("Purchase amount must be zero or greater");return new v(e).multiplyBy(this.#t,{roundingMode:"bankers",decimalPlaces:2})}interestForDays(e,t=ie.daysInMonth){if(!Number.isInteger(t)||t<0)throw new Error("Days must be a non-negative integer");const n=new v(e),i=new v(0);if(n.lessThan(i))throw new Error("Balance must be zero or greater");if(n.equals(i)||t===0||this._dailyRate.equals(i))return new v(0);let s=n;for(let a=0;a<t;a+=1)s=s.addTo(s.multiplyBy(this._dailyRate));return s.subtractFrom(n).addTo(new v(0),{roundingMode:"bankers",decimalPlaces:2})}}class ot{constructor({periodDays:e=31}={}){this.periodDays=e}simulateScenario({principal:e,periodCount:t,loanRate:n=0,depositApy:i,ccRewardsRate:s=0,ccRate:o=0,mode:a="idealized",startDate:u}){const l=typeof a=="string"?a.toLowerCase():"idealized",c=l==="real"||l==="real-world",d=new Ct(t,"MONTH",n,e),h=new St(e,i),f=new It({apr:o,rewardsRate:s}),y=f.calculateRewards(e),w=Number.isInteger(this.periodDays)?this.periodDays:ie.daysInMonth,S=f.interestForDays(e,w),E=c?this.#t({depositAccount:h,loanAccount:d,periodCount:t,startDate:u}):this.#e({depositAccount:h,loanAccount:d,periodCount:t});return{loanAccount:d,depositAccount:h,creditCardAccount:f,creditCardRewards:y,creditCardInterest:S,depositInterest:h.interestAccrued,net:E}}#e({depositAccount:e,loanAccount:t,periodCount:n}){const i=Number.isInteger(this.periodDays)?this.periodDays:ie.daysInMonth,s=t.payment();for(let o=0;o<n;o+=1)e.accrueForDays(i),e.withdraw(s);return e.balance}#t({depositAccount:e,loanAccount:t,periodCount:n,startDate:i}){if(!i)throw new Error("startDate is required for real world mode");const s=H(i),o=t.payment(),a=this.#n(s,n);let u=s;for(const l of a){const c=nr(u,l);if(c<0)throw new Error("Payment schedule produced an invalid date ordering");e.accrueForDaysWithMonthlyPosting(c,u),e.withdraw(o),u=l}return e.balance}#n(e,t){const n=[];for(let i=1;i<=t;i+=1)n.push(rr(e,i));return n}}function F(r,e="USD"){if(!Number.isFinite(r))return"—";let t;try{t=new Intl.NumberFormat("en-US",{style:"currency",currency:e}).format(r)}catch(n){console.error("Formatting error",n),t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(r)}return t}function ue(r){if(r===""||r===void 0||r===null)return null;const e=Number.parseFloat(String(r).trim());return Number.isFinite(e)?e:null}const Ze=Rt`
  :host {
    display: inherit;
    gap: inherit;
    flex-flow: inherit;
    flex: inherit;
    --base04: #002b36;
    --base02: #073642;
    --base01: #586e75;
    --base00: #657b83;
    --base0: #839496;
    --base1: #93a1a1;
    --base2: #eee8d5;
    --base3: #fdf6e3;
    --yellow: #b58900;
    --orange: #cb4b16;
    --red: #dc322f;
    --magenta: #d33682;
    --violet: #6c71c4;
    --blue: #268bd2;
    --cyan: #2aa198;
    --green: #859900;
  }

  .tradeoff-shell {
    display: grid;
    gap: 18px;
    color: var(--base0);
    background: var(--base03);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--base02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  }

  .intro h1 {
    margin: 4px 0;
    font-size: 2rem;
    color: var(--base1);
  }

  .eyebrow {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.75rem;
    color: var(--base00);
  }

  .solar-card {
    background: var(--base02);
    border: 1px solid var(--base01);
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .global-card {
    display: grid;
    gap: 12px;
  }

  .timing-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    align-items: end;
  }

  .cards-wrapper {
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
    flex: 1 1 0;
  }

  .loan-savings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .option-card {
    background: var(--base02);
    border: 1px solid var(--base01);
    border-radius: 0.5rem;
    padding: 1rem;
    display: grid;
    align-items: start;
    align-content: start;
    gap: 0.5rem;
    flex: 1 1 0;
  }

  .loan-card {
    border-top: 4px solid var(--orange);
  }

  .savings-card {
    border-top: 4px solid var(--green);
  }

  .card-card {
    border-top: 4px solid var(--violet);
  }

  .pill-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .strategy-pill {
    background: linear-gradient(
      90deg,
      var(--orange) 0%,
      var(--orange) 50%,
      var(--green) 50%,
      var(--green) 100%
    );
    color: var(--base3);
    padding: 6px 10px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.1px;
    text-align: center;
    flex: 1 1 auto;
  }

  .card-card .strategy-pill {
    background: var(--violet);
  }

  .card-heading h2 {
    margin: 0;
    color: var(--base1);
    font-size: 1.5rem;
  }

  .subtitle {
    margin: 2px 0 0 0;
    color: var(--base0);
    font-size: 0.8rem;
  }

  .field {
    display: grid;
    gap: 4px;
  }

  .field.compact {
    gap: 2px;
  }

  .field.inline-field {
    grid-template-columns: 1fr;
  }

  .field-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
  }

  label {
    font-weight: 700;
    font-size: 1rem;
    color: var(--base1);
  }

  .helper {
    margin: 0;
    color: var(--base0);
    font-size: 0.8rem;
  }

  input,
  select {
    background: var(--base03);
    border: 1px solid var(--base01);
    border-radius: 6px;
    padding: 10px;
    color: var(--base1);
    font-size: 1rem;
  }

  input:focus,
  select:focus {
    outline: 2px solid var(--blue);
    box-shadow: 0 0 0 2px rgba(38, 139, 210, 0.25);
  }

  .field-group {
    border: 1px dashed var(--base01);
    border-radius: 10px;
    padding: 10px;
    display: grid;
    gap: 8px;
    background: rgba(255, 255, 255, 0.02);
  }

  .group-label {
    margin: 0;
    font-weight: 700;
    color: var(--base0);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .mini-results {
    background: rgba(255, 255, 255, 0.02);
    border-radius: 0.5rem;
    padding: 1rem;
    display: grid;
    gap: 6px;
    border: 1px solid var(--base01);
  }

  .mini-results p {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
    color: var(--base1);
    font-size: 0.9rem;
  }

  .mini-results .label {
    color: var(--base0);
    font-weight: 600;
  }

  .summary-card {
    display: grid;
    gap: 10px;
  }

  .bullets {
    display: grid;
    gap: 4px;
    color: var(--base0);
  }

  .bullet-label {
    font-weight: 700;
    color: var(--base1);
    margin-right: 6px;
  }

  .muted {
    color: var(--base00);
  }

  .error {
    color: var(--red);
    min-height: 18px;
    margin: 0;
    font-size: 0.8rem;
  }

  @media (max-width: 960px) {
    .loan-savings-grid {
      grid-template-columns: 1fr;
    }

    .connector {
      display: none;
    }

    .mobile-connector {
      display: block;
    }
  }

  @media (prefers-color-scheme: light) {
    .tradeoff-shell {
      background: var(--base3);
      color: var(--base00);
      border-color: var(--base2);
    }

    .solar-card,
    .option-card {
      background: var(--base2);
      border-color: var(--base1);
    }

    input,
    select {
      background: var(--base3);
      color: var(--base00);
      border-color: var(--base1);
    }

    .mini-results {
      background: rgba(0, 0, 0, 0.03);
    }
  }
`;class rn extends X{static properties={principal:{type:Number},mode:{type:String},startDate:{type:String,attribute:"start-date"},periodDays:{type:Number,attribute:"period-days"},currency:{type:String},results:{type:Object},loanRateInput:{state:!0},termMonthsInput:{state:!0},apyInput:{state:!0},paymentValue:{state:!0},interestValue:{state:!0}};constructor(){super(),this.principal=void 0,this.mode="idealized",this.startDate="",this.periodDays=void 0,this.currency="USD",this.results={},this.loanRateInput="",this.termMonthsInput="",this.apyInput="",this.paymentValue=Number.NaN,this.interestValue=Number.NaN,this._calculator=new ot,this._loanData=null,this._depositData=null}updated(e){if(e.has("periodDays")){const t=Number.isInteger(this.periodDays)?this.periodDays:void 0;this._calculator=new ot({periodDays:t})}(e.has("principal")||e.has("mode")||e.has("startDate")||e.has("periodDays"))&&(this._calculateLoan(),this._calculateDeposit(),this._calculateCombined())}render(){const e=F(this.paymentValue,this.currency),t=F(this.interestValue,this.currency),n=F(this.results?.depositInterest,this.currency),i=F(this.results?.loanSavingsCost,this.currency);return z`
      <div class="option-card loan-card">
        <div class="pill-link">
          <span class="strategy-pill">Loan + Savings Strategy</span>
        </div>
        <div class="card-heading">
          <h2>Loan</h2>
          <p class="subtitle">Spread payments over time.</p>
        </div>

        <div class="field-group">
          <p class="group-label">Term Loan Information</p>
          <div class="field">
            <label for="loanRate">Loan Nominal Annual Rate*</label>
            <p class="helper">Enter 0% for promotional offers.</p>
            <input
              id="loanRate"
              name="loanRate"
              type="number"
              step="0.01"
              inputmode="decimal"
              min="0"
              placeholder="e.g. 5.5"
              .value=${this.loanRateInput}
              @input=${this._onLoanInput}
            />
          </div>

          <div class="field">
            <label for="termMonths">How long will you take to pay? (months)*</label>
            <p class="helper">Used for loan payment calculations.</p>
            <input
              id="termMonths"
              name="termMonths"
              type="number"
              step="1"
              inputmode="numeric"
              min="1"
              placeholder="e.g. 12"
              .value=${this.termMonthsInput}
              @input=${this._onLoanInput}
              required
            />
          </div>
        </div>

        <div class="mini-results">
          <p>
            <span class="label">Monthly payment:</span>
            <span data-role="loan-payment">${e}</span>
          </p>
          <p>
            <span class="label">Total interest paid:</span>
            <span data-role="loan-interest">${t}</span>
          </p>
        </div>
      </div>

      <div class="option-card savings-card">
        <div class="pill-link">
          <span class="strategy-pill">Loan + Savings Strategy</span>
        </div>
        <div class="card-heading">
          <h2>Savings while you carry the loan</h2>
          <p class="subtitle">Where would-be loan payments sit and earn interest.</p>
        </div>

        <div class="field-group">
          <p class="group-label">Deposit Information</p>
          <div class="field">
            <label for="apy">Savings or deposit APY*</label>
            <p class="helper">APY on the account holding future payments.</p>
            <input
              id="apy"
              name="apy"
              type="number"
              step="0.01"
              inputmode="decimal"
              min="0"
              placeholder="e.g. 4.5"
              .value=${this.apyInput}
              @input=${this._onDepositInput}
              required
            />
          </div>
        </div>

        <div class="mini-results">
          <p>
            <span class="label">Interest earned on parked payments:</span>
            <span data-role="deposit-interest">${n}</span>
          </p>
          <p>
            <span class="label">Deposit Interest Yield - Loan Interest Charges:</span>
            <span data-role="loan-savings-cost">${i}</span>
          </p>
          ${Number.isFinite(this.results?.loanInterest)?null:z`
                <p class="muted helper">
                  We'll calculate savings on your loan payments once you enter a loan rate on the
                  left.
                </p>
              `}
        </div>
      </div>
    `}get loan(){return this._buildLoanAccount()?.loanAccount??null}get deposit(){return this._buildDepositAccount()?.depositAccount??null}_onLoanInput(e){const{name:t,value:n}=e.target,i=`${t}Input`;i in this&&(this[i]=n),this._calculateLoan()}_onDepositInput(e){const{name:t,value:n}=e.target,i=`${t}Input`;i in this&&(this[i]=n),this._calculateDeposit()}_calculateLoan(){const{loanAccount:e,monthlyPayment:t,totalInterest:n}=this._buildLoanAccount()||{};e?(this.paymentValue=t,this.interestValue=n,this._loanData={valid:!0,principal:this.principal,mode:this.mode,startDate:this.startDate,termMonths:e.periodCount,loanRate:e.nominalAnnualRate.toDecimal(),loanAccount:e,monthlyPayment:t,totalInterest:n}):(this.paymentValue=Number.NaN,this.interestValue=Number.NaN,this._loanData=null),this._calculateCombined()}_calculateDeposit(){const e=ue(this.apyInput);if(e!==null&&e<0){this._depositData=null,this._emitLoanSavingsChange({valid:!1,errorMessage:"APY must be zero or greater."}),this._updateResults(null);return}const t=this._buildDepositAccount(e);t?this._depositData={valid:!0,principal:this.principal,mode:this.mode,startDate:this.startDate,depositApy:t.depositApy,depositAccount:t.depositAccount}:this._depositData=null,this._calculateCombined()}_buildLoanAccount(){if(!Number.isFinite(this.principal)||this.principal<0)return null;const e=this._parseInteger(this.termMonthsInput),t=ue(this.loanRateInput);if(e===null||t===null||e<=0||t<0)return null;const n=t/100;try{const i=new Ct(e,"MONTH",n,this.principal),s=i.payment().toDecimal(),o=i.totalInterest().toDecimal();return{loanAccount:i,monthlyPayment:s,totalInterest:o}}catch{return null}}_buildDepositAccount(e=ue(this.apyInput)){if(!Number.isFinite(this.principal)||this.principal<0||e===null||e<0)return null;const t=e/100;try{return{depositAccount:new St(this.principal,t),depositApy:t}}catch{return null}}_calculateCombined(){const e=(this.mode||"idealized").toLowerCase(),t=e==="real"||e==="real-world";if(!this._loanData?.valid||!this._depositData?.valid){this._updateResults(null),this._emitLoanSavingsChange({valid:!1});return}if(!Number.isFinite(this.principal)||this.principal<0){this._updateResults(null),this._emitLoanSavingsChange({valid:!1,errorMessage:"Enter a positive value for the amount."});return}let n;if(t&&(n=this._validateStartDate(this.startDate),!n)){this._updateResults(null),this._emitLoanSavingsChange({valid:!1,errorMessage:"Select a start date for real world mode."});return}try{const i=this._calculator.simulateScenario({principal:this.principal,periodCount:this._loanData.termMonths,loanRate:this._loanData.loanRate,depositApy:this._depositData.depositApy,mode:e,startDate:n}),s=i?.net?.toDecimal?i.net.toDecimal():Number.NaN,o=i?.loanAccount?.payment?.(),a=o?.toDecimal?o.toDecimal():Number.NaN,u=i?.loanAccount?.totalInterest?.(),l=u?.toDecimal?u.toDecimal():Number.NaN,c=i?.depositAccount?.balance,d=c?.toDecimal?c.toDecimal():Number.NaN,h=i?.depositInterest??i?.depositAccount?.interestAccrued,f=h?.toDecimal?h.toDecimal():Number.NaN,y=Number.isFinite(f)&&Number.isFinite(l)?f-l:Number.NaN,w={loanPayment:a,loanInterest:l,depositInterest:f,savingsEndBalance:d,loanSavingsCost:y,netValue:s};this._updateResults(w),this._emitLoanSavingsChange({valid:!0,termMonths:this._loanData.termMonths,loanRate:this._loanData.loanRate,depositApy:this._depositData.depositApy,...w,loanAccount:i.loanAccount,depositAccount:i.depositAccount})}catch(i){this._updateResults(null),this._emitLoanSavingsChange({valid:!1,errorMessage:i?.message})}}_updateResults(e){if(!e){this.results={depositInterest:Number.NaN,savingsEndBalance:Number.NaN,loanSavingsCost:Number.NaN,loanInterest:Number.NaN};return}this.results=e}_emitLoanSavingsChange(e){this.dispatchEvent(new CustomEvent("loan-savings-change",{detail:e,bubbles:!0,composed:!0}))}_parseInteger(e){if(e===""||e===void 0||e===null)return null;const t=Number.parseInt(String(e).trim(),10);return Number.isFinite(t)?t:null}_validateStartDate(e){if(!e)return null;const t=String(e).trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return null;const n=new Date(t);return Number.isNaN(n.getTime())?null:t}static styles=Ze}customElements.define("loan-savings-card",rn);const nn=28.99;class sn extends X{static properties={principal:{type:Number},currency:{type:String},periodDays:{type:Number,attribute:"period-days"},ccRateInput:{state:!0},ccRewardsRateInput:{state:!0},rewardsValue:{state:!0},interestValue:{state:!0}};constructor(){super(),this.principal=void 0,this.currency="USD",this.periodDays=void 0,this.ccRateInput="",this.ccRewardsRateInput="",this.rewardsValue=Number.NaN,this.interestValue=Number.NaN}updated(e){(e.has("principal")||e.has("periodDays"))&&this._calculate()}render(){const e=F(this.rewardsValue,this.currency),t=F(this.interestValue,this.currency);return z`
      <div class="option-card card-card">
        <div class="pill-link">
          <span class="strategy-pill">Credit Card Strategy</span>
        </div>
        <div class="card-heading">
          <h2>Credit card</h2>
          <p class="subtitle">Use your credit card.</p>
        </div>

        <div class="field-group">
          <p class="group-label">Credit Card Information</p>
          <div class="field">
            <label for="ccRate">Credit card APR</label>
            <input
              id="ccRate"
              name="ccRate"
              type="number"
              step="0.01"
              inputmode="decimal"
              min="0"
              placeholder="Defaults to 28.99%"
              .value=${this.ccRateInput}
              @input=${this._onInput}
            />
          </div>
          <div class="field">
            <label for="ccRewardsRate">Rewards rate</label>
            <p class="helper">For this purchase (cash back, points, miles).</p>
            <input
              id="ccRewardsRate"
              name="ccRewardsRate"
              type="number"
              step="0.01"
              inputmode="decimal"
              min="0"
              placeholder="e.g. 2"
              .value=${this.ccRewardsRateInput}
              @input=${this._onInput}
            />
          </div>
        </div>

        <div class="mini-results">
          <p>
            <span class="label">Rewards earned:</span>
            <span data-role="cc-rewards">${e}</span>
          </p>
          <p>
            <span class="label">Example One Statement Cycle Interest:</span>
            <span data-role="cc-interest">${t}</span>
          </p>
        </div>
      </div>
    `}_onInput(e){const{name:t,value:n}=e.target,i=`${t}Input`;i in this&&(this[i]=n),this._calculate()}_calculate(){const e=this._buildAccount();if(!e){this.rewardsValue=Number.NaN,this.interestValue=Number.NaN,this._emitChange({valid:!1});return}this.rewardsValue=e.rewardsValue,this.interestValue=e.interestValue,this._emitChange({valid:!0,principal:this.principal,ccRewardsRate:e.ccRewardsRate,ccRate:e.ccRate,ccAccount:e.ccAccount,rewardsValue:e.rewardsValue,interestValue:e.interestValue})}_buildAccount(){if(!Number.isFinite(this.principal)||this.principal<0)return null;const e=ue(this.ccRewardsRateInput),t=ue(this.ccRateInput);if(e!==null&&e<0||t!==null&&t<0)return null;const n=(e===null?0:e)/100,i=(t===null?nn:t)/100;try{const s=new It({apr:i,rewardsRate:n}),o=s.calculateRewards(this.principal).toDecimal(),a=Number.isInteger(this.periodDays)?this.periodDays:void 0,u=(a===void 0?s.interestForDays(this.principal):s.interestForDays(this.principal,a)).toDecimal();return{ccAccount:s,ccRewardsRate:n,ccRate:i,rewardsValue:o,interestValue:u}}catch{return null}}_emitChange(e){this.dispatchEvent(new CustomEvent("cc-change",{detail:e,bubbles:!0,composed:!0}))}static styles=Ze}customElements.define("credit-card-card",sn);const on=Object.freeze({loanPayment:Number.NaN,loanInterest:Number.NaN,depositInterest:Number.NaN,savingsEndBalance:Number.NaN,loanSavingsCost:Number.NaN,cardRewards:Number.NaN,cardInterest:Number.NaN,cardNetCost:Number.NaN});class an extends X{static properties={principalInput:{state:!0},startDateInput:{state:!0},modeInput:{state:!0},errorMessage:{state:!0},metrics:{state:!0},currency:{type:String},periodDays:{type:Number,attribute:"period-days"}};constructor(){super(),this.principalInput="",this.startDateInput="",this.modeInput="idealized",this.errorMessage="",this.metrics=null,this._currency="USD",this.periodDays=void 0,this._loanSavingsData=null,this._ccData=null}get currency(){return this._currency}set currency(e){const t=e||"USD",n=this._currency;this._currency=t,this.requestUpdate("currency",n)}render(){const e=this.metrics||on;return z`
      <article class="tradeoff-shell">
        ${this._renderIntro()} ${this._renderGlobalInputs()} ${this._renderCards()}
        ${this._renderSummary(e)}
        <p class="error" data-role="error" role="alert">${this.errorMessage}</p>
      </article>
    `}_onSubmit(e){e.preventDefault()}_onInput(e){const{name:t,value:n}=e.target,i=`${t}Input`;if(i in this&&(this[i]=n),this.errorMessage="",n===""&&this._clearResult(),t==="principal"){const s=this._parseMoney(n);if(s===null)return;if(s<0){this._setError("Enter a positive value for the amount.");return}this.errorMessage="";return}if(t==="startDate"||t==="mode"){if((this.modeInput==="real"||this.modeInput==="real-world")&&this._parseDate(this.startDateInput)===null)return;this.errorMessage=""}}_onCcChange(e){const t=e.detail||{};if(!t.valid){this._ccData=null,this._updateMetrics();return}this._ccData=t,this._updateMetrics()}_onLoanSavingsChange(e){const t=e.detail||{};if(!t.valid){this._loanSavingsData=null,t.errorMessage&&this._setError(t.errorMessage),this._updateMetrics();return}this.errorMessage="",this._loanSavingsData=t,this._updateMetrics()}_updateMetrics(){const e=this._loanSavingsData?.valid?this._loanSavingsData:null,t=this._ccData?.valid?this._ccData:null,n=t?.rewardsValue??Number.NaN,i=t?.interestValue??Number.NaN,s=Number.isFinite(i)&&Number.isFinite(n)?i-n:Number.NaN;this.metrics={loanPayment:e?.loanPayment??Number.NaN,loanInterest:e?.loanInterest??Number.NaN,depositInterest:e?.depositInterest??Number.NaN,savingsEndBalance:e?.savingsEndBalance??Number.NaN,loanSavingsCost:e?.loanSavingsCost??Number.NaN,cardRewards:n,cardInterest:i,cardNetCost:s},this._emitChange({principal:e?.principal??null,depositApy:e?.depositApy,mode:e?.mode??this.modeInput,startDate:e?.startDate,netValue:e?.netValue,creditCardRewards:n,creditCardInterest:i})}_emitChange(e){this.dispatchEvent(new CustomEvent("tradeoff-change",{detail:e,bubbles:!0,composed:!0}))}_renderIntro(){return z`
      <header class="intro">
        <h1>Comparing a loan, loan + savings account, and a credit card</h1>
      </header>
    `}_renderGlobalInputs(){return z`
      <section class="solar-card global-card">
        <div class="field">
          <label for="principal">Purchase amount*</label>
          <p class="helper">Total price</p>
          <input
            id="principal"
            name="principal"
            type="number"
            step="0.01"
            inputmode="decimal"
            min="0"
            placeholder="e.g. 1200"
            .value=${this.principalInput}
            @input=${this._onInput}
            required
          />
        </div>

        <div class="timing-row">
          <div class="field compact">
            <label for="mode">Calculation mode</label>
            <p class="helper">
              Real world is slightly more accurate when you know your loan start date.
            </p>
            <select id="mode" name="mode" .value=${this.modeInput} @input=${this._onInput}>
              <option value="idealized">Idealized (31-day months)</option>
              <option value="real">Real world calendar</option>
            </select>
          </div>

          ${this.modeInput==="real"?z`
                <div class="field compact">
                  <label for="startDate">Start date</label>
                  <p class="helper">Needed only for the real-world calendar option.</p>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    placeholder="Starting date for schedule"
                    .value=${this.startDateInput}
                    @input=${this._onInput}
                    ?required=${this.modeInput==="real"}
                  />
                </div>
              `:null}
        </div>
      </section>
    `}_renderCards(){return z`
      <section class="cards-wrapper">
        <loan-savings-card
          .principal=${this._principalValue()}
          .mode=${this.modeInput}
          .startDate=${this.startDateInput}
          .currency=${this.currency}
          .periodDays=${this.periodDays}
          @loan-savings-change=${this._onLoanSavingsChange}
        ></loan-savings-card>

        <credit-card-card
          .principal=${this._principalValue()}
          .currency=${this.currency}
          .periodDays=${this.periodDays}
          @cc-change=${this._onCcChange}
        ></credit-card-card>
      </section>
    `}_renderSummary(e){const t=F(e.loanInterest,this.currency),n=F(e.loanSavingsCost,this.currency),i=F(e.cardRewards,this.currency),s=F(e.cardInterest,this.currency);return z`
      <section class="solar-card summary-card">
        <div class="bullets">
          <p>
            <span class="bullet-label">Deposit Interest Yield - Loan Interest Charges:</span>
            <span data-role="loan-savings-cost">${n}</span>
          </p>
          <p><span class="bullet-label">Plain loan cost:</span> ${t}</p>
          <p><span class="bullet-label">Credit reward:</span> <span>${i}</span></p>
          <p>
            <span class="bullet-label">One cycle credit card cost if not paid:</span>
            <span>${s}</span>
          </p>
        </div>
      </section>
    `}_setError(e){this.errorMessage=e,this._clearResult()}_clearResult(){this._loanSavingsData=null,this._ccData=null,this.metrics=null}_principalValue(){const e=Number.parseFloat(String(this.principalInput).trim());return Number.isFinite(e)?e:null}_parseMoney(e){if(e===""||e===void 0||e===null)return null;const t=String(e).trim();if(!/^-?\d+(\.\d+)?$/.test(t))return this._setError("Enter a numeric value."),null;const n=Number.parseFloat(t);return Number.isFinite(n)?n:(this._setError("Enter a numeric value."),null)}_parseDate(e){if(!e)return this._setError("Select a start date for real world mode."),null;const t=String(e).trim();if(!/^\d{4}-\d{2}-\d{2}$/.test(t))return this._setError("Enter a valid calendar date (YYYY-MM-DD)."),null;const n=new Date(t);return Number.isNaN(n.getTime())?(this._setError("Enter a valid calendar date (YYYY-MM-DD)."),null):t}static styles=Ze}customElements.define("tradeoff-widget",an);
