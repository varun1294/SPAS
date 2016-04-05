(function(n){"use strict";function i(n,t){var r;if(typeof n=="object"&&typeof t==
"object")for(r in t)t.hasOwnProperty(r)&&(n[r]?i(n[r],t[r]):n[r]=t[r]);return n}
function r(n,t,r){n[t]=n[t]||{};i(n[t],r)}var t={},u;i(n,{Resources:{getResources:
function(){}}});u=n.Resources.getResources;n.Resources.getResources=function(n){
return u(n)||t[n]},function(n){function i(n){var i=n.Resources.getResources("Microsoft.MetaAnalytics.Web.ClientResources")||
DataLab.LocalizedResources;r(t,"fx",i)}i(n)}(n),function(){function n(){r(t,"fx.regions",
{EC:"Ecuador",EE:"Estonia",EG:"Egypt",ES:"Spain",FI:"Finland",FR:"France",AD:"Andorra",
AE:"United Arab Emirates",AG:"Antigua and Barbuda",AL:"Albania",AM:"Armenia",AO:
"Angola",AT:"Austria",AU:"Australia",AR:"Argentina",AZ:"Azerbaijan",DE:"Germany",
DK:"Denmark",DO:"Dominican Republic",DZ:"Algeria",GB:"United Kingdom",GG:"Guernsey",
GR:"Greece",GT:"Guatemala",BG:"Bulgaria",BE:"Belgium",BB:"Barbados",BO:"Bolivia",
BH:"Bahrain",BS:"Bahamas",BR:"Brazil",BY:"Belarus",MK:"Macedonia, FYRO",MA:"Morocco",
ME:"Montenegro",MG:"Madagascar",MX:"Mexico",MY:"Malaysia",MT:"Malta",CA:"Canada",
CN:"China",CO:"Colombia",CL:"Chile",CH:"Switzerland",CU:"Cuba",CR:"Costa Rica",CZ:
"Czech Republic",CY:"Cyprus",NO:"Norway",NL:"Netherlands",NG:"Nigeria",NZ:"New Zealand",
IL:"Israel",IM:"Isle of Man",IN:"India",ID:"Indonesia",IE:"Ireland",IT:"Italy",IS:
"Iceland",LI:"Liechtenstein",LK:"Sri Lanka",LA:"Laos",LB:"Lebanon",LR:"Liberia",
LU:"Luxembourg",LT:"Lithuania",LV:"Latvia",OM:"Oman",JO:"Jordan",JM:"Jamaica",JE:
"Jersey",JP:"Japan",US:"United States",UY:"Uruguay",UA:"Ukraine",HK:"Hong Kong SAR",
HU:"Hungary",HT:"Haiti",HR:"Croatia",KE:"Kenya",KZ:"Kazakhstan",KW:"Kuwait",KR:"Korea",
VE:"Venezuela",QA:"Qatar",TR:"Turkey",TT:"Trinidad & Tobago",TW:"Taiwan",TD:"Chad",
TH:"Thailand",TN:"Tunisia",RW:"Rwanda",RU:"Russia",RS:"Serbia",RO:"Romania",PT:"Portugal",
PR:"Puerto Rico",PY:"Paraguay",PE:"Peru",PA:"Panama",PL:"Poland",PH:"Philippines",
PK:"Pakistan",SV:"El Salvador",SG:"Singapore",SE:"Sweden",SA:"Saudi Arabia",SK:"Slovakia",
SI:"Slovenia",YE:"Yemen",ZA:"South Africa"})}n()}(),function(){function n(){r(t,
"fx.links",{privacyUrl:"//go.microsoft.com/fwLink/?LinkID=131004&clcid=0x409",legalUrl:
"//go.microsoft.com/fwLink/?LinkID=251506&clcid=0x409",windowsAzurePreviewTermsOfUse:
"//go.microsoft.com/fwLink/?LinkID=247638&clcid=0x409"})}n()}()})(this),function(
n,t,i){"use strict";var r=n("<div><\/div>").addClass("fx-exceptionholder").hide(
).appendTo("body"),u=function(t){var i=n("<div><\/div>").text(t+"\\r\\n");r.append(
i)},e=function(n){return n!==i&&r.text(n),r.text()},o=t.onerror||n.noop,f=n.Callbacks(
"On Error");t.onerror=function(){try{for(var n in arguments)arguments.hasOwnProperty(
n)&&u(arguments[n]);u("--------")}catch(i){}o.apply(arguments);try{f.fireWith(t,
arguments)}catch(i){}return!0};n.extend(!0,t,{fx:{diagnostics:{text:e,onError:f}}})}
(jQuery,this),function(n,t){"use strict";var i=function(i,r){var o=Array.prototype.
slice.call(arguments,2),e=0,s=o.length,f,u;for(i=i||{};e<s;e++)for(f in o[e])u=o[
e][f],o[e].hasOwnProperty(f)&&u!==t&&(r[f]=i[f]?u:n.isPlainObject(u)?n.extend(!0,
r[f]||{},u):n.isArray(u)?n.extend(!0,[],u):u);return r},r=function(){return n("<p />").
uniqueId().attr("id").substr(6)},u=function(t,u){if(n.ui.version!=="1.10.4")throw new
Error("This function must match the definition of $.Widget.prototype._createWidget,                              so it must be updated on every jQuery UI update. The only difference is .extend()                              is changed to copyReference(), and uuid is retrieved with getUUID()");
u=n(u||this.defaultElement||this)[0];this.element=n(u);this.uuid=r();this.eventNamespace=
"."+this.widgetName+this.uuid;this.options=i(this._references,{},this.options,this.
_getCreateOptions(),t);this.bindings=n();this.hoverable=n();this.focusable=n();u!==
this&&(n.data(u,this.widgetFullName,this),this._on(!0,this.element,{remove:function(
n){n.target===u&&this.destroy()}}),this.document=n(u.style?u.ownerDocument:u.document||
u),this.window=n(this.document[0].defaultView||this.document[0].parentWindow));this.
_create();this._trigger("create",null,this._getCreateEventData());this._init()};
n.widgetReference=function(t){var i=t.split(".")[0],r=t.split(".")[1];n.widget.apply(
this,arguments);n[i][r].prototype._createWidget=u}}(jQuery);var ZeroClipboard={version:
"1.0.8",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(n){return typeof
n=="string"&&(n=document.getElementById(n)),n.addClass||(n.hide=function(){this.
style.display="none"},n.show=function(){this.style.display=""},n.addClass=function(
n){this.removeClass(n);this.className+=" "+n},n.removeClass=function(n){for(var t=
this.className.split(/\s+/),r=-1,i=0;i<t.length;i++)t[i]==n&&(r=i,i=t.length);return r>
-1&&(t.splice(r,1),this.className=t.join(" ")),this},n.hasClass=function(n){return!!this.
className.match(new RegExp("\\s*"+n+"\\s*"))}),n},setMoviePath:function(n){this.
moviePath=n},newClient:function(){return new ZeroClipboard.Client},dispatch:function(
n,t,i){var r=this.clients[n];r&&r.receiveEvent(t,i)},register:function(n,t){this.
clients[n]=t},getDOMObjectPosition:function(n,t){for(var i={left:0,top:0,width:n.
width?n.width:n.offsetWidth,height:n.height?n.height:n.offsetHeight};n&&n!=t;)i.
left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;return i},Client:function(
n){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+
this.id;ZeroClipboard.register(this.id,this);n&&this.glue(n)}};ZeroClipboard.Client.
prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:
!0,handlers:null,zIndex:99,glue:function(n,t,i){var u,r,f;if(this.domElement=ZeroClipboard.
$(n),this.domElement.style.zIndex&&(this.zIndex=parseInt(this.domElement.style.zIndex,
10)+1),typeof t=="string"?t=ZeroClipboard.$(t):typeof t=="undefined"&&(t=document.
getElementsByTagName("body")[0]),u=ZeroClipboard.getDOMObjectPosition(this.domElement,
t),this.div=document.createElement("div"),r=this.div.style,r.position="absolute",
r.left=""+u.left+"px",r.top=""+u.top+"px",r.width=""+u.width+"px",r.height=""+u.
height+"px",r.zIndex=this.zIndex,typeof i=="object")for(f in i)r[f]=i[f];t.appendChild(
this.div);this.div.innerHTML=this.getHTML(u.width,u.height)},getHTML:function(n,
t){var i="",r="id="+this.id+"&width="+n+"&height="+t,u;return navigator.userAgent.
match(/MSIE/)?(u=location.href.match(/^https/i)?"https://":"http://",i+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+
u+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+
n+'" height="'+t+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+
ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+
r+'"/><param name="wmode" value="transparent"/><\/object>'):i+='<embed id="'+this.
movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+
n+'" height="'+t+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+
r+'" wmode="transparent" />',i},hide:function(){this.div&&(this.div.style.left="-2000px")
},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.
div){this.hide();this.div.innerHTML="";var n=document.getElementsByTagName("body")[
0];try{n.removeChild(this.div)}catch(t){}this.domElement=null;this.div=null}},reposition:
function(n){if(n&&(this.domElement=ZeroClipboard.$(n),this.domElement||this.hide(
)),this.domElement&&this.div){var t=ZeroClipboard.getDOMObjectPosition(this.domElement),
i=this.div.style;i.left=""+t.left+"px";i.top=""+t.top+"px"}},setText:function(n)
{this.clipText=n;this.ready&&this.movie.setText(n)},addEventListener:function(n,
t){n=n.toString().toLowerCase().replace(/^on/,"");this.handlers[n]||(this.handlers[
n]=[]);this.handlers[n].push(t)},setHandCursor:function(n){this.handCursorEnabled=
n;this.ready&&this.movie.setHandCursor(n)},setCSSEffects:function(n){this.cssEffects=
!!n},receiveEvent:function(n,t){var r,u,f,i;n=n.toString().toLowerCase().replace(
/^on/,"");switch(n){case"load":if(this.movie=document.getElementById(this.movieId),
!this.movie){r=this;setTimeout(function(){r.receiveEvent("load",null)},1);return}
if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(
/Windows/)){r=this;setTimeout(function(){r.receiveEvent("load",null)},100);this.
ready=!0;return}this.ready=!0;this.movie.setText(this.clipText);this.movie.setHandCursor(
this.handCursorEnabled);break;case"mouseover":this.domElement&&this.cssEffects&&
(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass(
"active"));break;case"mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=
!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.
recoverActive=!0),this.domElement.removeClass("hover"));break;case"mousedown":this.
domElement&&this.cssEffects&&this.domElement.addClass("active");break;case"mouseup":
this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=
!1)}if(this.handlers[n])for(u=0,f=this.handlers[n].length;u<f;u++)i=this.handlers[
n][u],typeof i=="function"?i(this,t):typeof i=="object"&&i.length==2?i[0][i[1]](
this,t):typeof i=="string"&&window[i](this,t)}};typeof module!="undefined"&&(module.
exports=ZeroClipboard);
/*! jsObservable: http://github.com/BorisMoore/jsviews */
(function(n,t){function r(n){return this._data=n,this}function e(n,t){if(n&&t){var
i=t.split(".");for(t=i.pop();n&&i.length;)n=n[i.shift()];return[n,t]}return[]}function u(
n){return this._data=n,this}function i(n){if(typeof n!="number")throw"Invalid index.";
}n.observable=function(t){return n.isArray(t)?new u(t):new r(t)};var f=[].splice;
n.observable.Object=r;r.prototype={_data:null,data:function(){return this._data}
,setProperty:function(t,i){var u=this,f,h,o,s,c,r;if(n.isArray(t))for(f=0,h=t.length;
f<h;f++)o=t[f],u.setProperty(o.name,o.value);else if(typeof t=="object")for(s in
t)u.setProperty(s,t[s]);else c=u._data,r=e(c,t),t=r[1],r=r[0],r&&u._setProperty(
r,t,i);return u},_setProperty:function(t,i,r){var f,u=t[i];n.isFunction(u)&&(f=u,
u=u.call(t));u!=r&&(!(u instanceof Date)||u>r||u<r)&&(f?(f.call(t,r),r=f.call(t)):
t[i]=r,this._trigger(t,{path:i,value:r,oldValue:u}))},_trigger:function(t,i){n(t).
triggerHandler("propertyChange",i)}};n.observable.Array=u;u.prototype={_data:null,
data:function(){return this._data},insert:function(t,r){return i(t),arguments.length>
1&&(r=n.isArray(r)?r:[r],r.length>0&&this._insert(t,r)),this},_insert:function(n,
t){f.apply(this._data,[n,0].concat(t));this._trigger({change:"insert",index:n,items:
t})},remove:function(n,r){if(i(n),r=r===t||r===null?1:r,r&&n>-1){var u=this._data.
slice(n,n+r);r=u.length;r&&this._remove(n,r,u)}return this},_remove:function(n,t,
i){this._data.splice(n,t);this._trigger({change:"remove",index:n,items:i})},move:
function(n,r,u){if(i(n),i(r),u=u===t||u===null?1:u,u){var f=this._data.slice(n,n+
u);this._move(n,r,u,f)}return this},_move:function(n,t,i,r){this._data.splice(n,
i);this._data.splice.apply(this._data,[t,0].concat(r));this._trigger({change:"move",
oldIndex:n,index:t,items:r})},refresh:function(n){var t=this._data.slice(0);return this.
_refresh(t,n),this},_refresh:function(n,t){f.apply(this._data,[0,this._data.length].
concat(t));this._trigger({change:"refresh",oldItems:n})},_trigger:function(t){n(
[this._data]).triggerHandler("arrayChange",t)}}})(jQuery);
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
this.jsviews||this.jQuery&&jQuery.views||function(n,t){function it(n){this.name=
"JsRender Error";this.message=n||"JsRender error"}function lt(n,t,i){return(!f.rTag||
arguments.length)&&(l=n?"\\"+n.charAt(0):l,a=n?"\\"+n.charAt(1):a,o=t?"\\"+t.charAt(
0):o,c=t?"\\"+t.charAt(0):c,i=i?"\\"+i:st,f.rTag=w="(\\w*"+i+")?(?:(?:(\\w+(?=[\\/\\s"+
o+"]))|(?:(\\w+)?(:)|(>)|(\\*)))\\s*((?:[^"+o+"]|"+o+"(?!"+c+"))*?)",w=new RegExp(
l+a+w+"(\\/)?|(?:\\/(\\w+)))"+o+c,"g"),ot=new RegExp("<.*>|([^\\\\]|^)[{}]|"+l+a+
".*"+o+c)),[l,a,o,c,st]}function ei(n){var i=this,r=i.tmpl.helpers||{};return n=
(i.dynCtx&&i.dynCtx[n]!==t?i.dynCtx:i.ctx[n]!==t?i.ctx:r[n]!==t?r:y[n]!==t?y:{})
[n],typeof n!="function"?n:function(){return n.apply(i,arguments)}}function oi(n,
i,r,u){var e=!r.markup&&r||t,f=i.tmpl.converters;return f=f&&f[n]||g[n],f?f.call(
i,u,e):(h("Unknown converter: {{"+n+":"),u)}function si(n,i,r,u,f){var c,l=!r.markup&&
r,a=l?l.view.tmpl:r,y=a.tags,p=a.templates,w=f.props=f.props||{},o=w.tmpl,v=arguments.
length>5?fi.call(arguments,5):[],s=y&&y[n]||d[n];return s?(u=u&&a.tmpls[u-1],o=o||
u||s.template||t,f.view=i,o=f.tmpl=""+o===o?p&&p[o]||e[o]||e(o):o,f.attr=r.attr=
r.attr||s.attr,f.tagName=n,f.renderContent=rt,l&&(l.tagCtx={args:v,props:w,path:
f.path,tag:s}),s.render&&(c=s.render.apply(f,v)),c||(c==t?o?f.renderContent(v[0],
t,i):"":c.toString())):(h("Unknown tag: {{"+n+"}}"),"")}function b(n,i,r,u,f,e,o,
s){var c,h={data:u,tmpl:f,views:s?[]:{},parent:r,ctx:n,path:i,_useKey:s?0:1,_onRender:
o,_hlp:ei,renderLink:function(t){var i=this.tmpl.tmpls[t];return i.render(u,n,this)}
};return r&&(c=r.views,r._useKey?(c[h.key="_"+r._useKey++]=h,h.index=r.index):c.
splice(h.key=h.index=e!==t?e:c.length,0,h)),h}function k(n,i,r,u,f){var o,e;if(r&&
typeof r=="object"&&!r.nodeType){for(o in r)i(o,r[o]);return n}return u===t&&(u=
r,r=t),(e=nt.onBeforeStoreItem)&&(f=e(i,r,u,f)||f),r?""+r===r&&(u===null?delete i[
r]:i[r]=f?u=f(u,r):u):u=f?f(u):u,(e=nt.onStoreItem)&&e(i,r,u,f),u}function at(n,
t){return n=typeof n=="function"?{render:n}:n,n.tagName=t,n}function e(n,t){return k(
this,e,n,t,ft)}function d(n,t){return k(this,d,n,t,at)}function y(n,t){return k(
this,y,n,t)}function g(n,t){return k(this,g,n,t)}function rt(n,o,c,l,a,v,p){var nt,
ht,ft,g,et,d,w,tt,ot,it,rt,st,k=this,ut="";if(l===i&&(ot=i,l=0),k.tagName?(w=k.tmpl,
(o||k.ctx)&&(it={},k.ctx&&r(it,k.ctx),o&&r(it,o)),o=it,tt=k.props,tt&&tt.link===
s&&(o=o||{},o.link=s),c=c||k.view,v=v||k.path,l=l||k.key,p=c&&c._onRender):(w=k.
jquery&&(k[0]||h('Unknown template: "'+k.selector+'"'))||k,p=p||c&&c._onRender),
w&&(c?(d=c.ctx,rt=c.dynCtx,n===c&&(n=c.data,a=i)):d=y,st=o&&o!==d,(rt||st)&&(d=r(
{},d),st&&r(d,o),rt&&r(d,rt)),o=d,w.fn||(w=e[w]||e(w)),w)){if(p=o.link!==s&&p,u.
isArray(n)&&!a)for(g=ot?c:l!==t&&c||b(o,v,c,n,w,l,p,i),nt=0,ht=n.length;nt<ht;nt++)
ft=n[nt],et=w.fn(ft,b(o,v,g,ft,w,(l||0)+nt,p),f),ut+=p?p(et,w,tt):et;else g=ot?c:
b(o,v,c,n,w,l,p),g._onRender=p,ut+=w.fn(n,g,f,hi);return p?p(ut,w,tt,g.key,v):ut}
return h("No template found"),""}function hi(n){return n}function h(n){if(f.debugMode)
throw new f.Error(n);}function p(n){h("Syntax error\n"+n)}function vt(n,t,r){function l(
t){t-=o;t&&e.push(n.substr(o,t).replace(kt,"\\n"))}function c(t){t&&p('Unmatched or missing tag: "{{/'+
t+'}}" in template:\n'+n)}function v(t,h,v,y,p,w,b,k,d,g,nt){w&&(p=":",y="html");
var tt,it="",rt="",ut=!d&&!p&&!r;v=v||p;l(nt);o=nt+t.length;b?a&&e.push(["*",k.replace(
dt,"$1")]):v?(v==="else"?(u[5]=n.substring(u[5],nt),u=f.pop(),e=u[3],ut=i):h&&(f.
push(u),u=["!",,,[],,nt],e.push(u),e=u[3]),k=k?ci(k,r,h).replace(ni,function(n,t,
i){return t?rt+=i+",":it+=i+",",""}):"",it=it.slice(0,-1),k=k.slice(0,-1),s=[v,y||
"",k,ut&&[],"{"+(it?"props:{"+it+"},":"")+"data: data"+(rt?",ctx:{"+rt.slice(0,-1)+
"}":"")+"}"],e.push(s),ut?(f.push(u),u=s,u[5]=o):h&&(u[5]=n.substring(u[5],o),u=
f.pop())):g&&(tt=u[0],c(g!==tt&&!(g==="if"&&tt==="else")&&tt),u[5]=n.substring(u[
5],nt),tt==="!"&&(u[5]=n.substring(u[5],o),u=f.pop()),u=f.pop());c(!u&&g);e=u[3]}
var s,a=t&&t.allowCode,h=[],o=0,f=[],e=h,u=[,,,h];return n=n.replace(gt,"\\$1"),
c(f[0]&&f[0][3].pop()[0]),n.replace(w,v),l(n.length),ut(h,t)}function ut(n,t){var
u,f,a,r,k,d,g,nt,tt,c,v,o,y,e,w,l,it,b=t?{allowCode:w=t.allowCode,debug:t.debug}:
{},s=t&&t.tmpls;for(a=n.length,r=a?"":'"";',f=0;f<a;f++)u=n[f],""+u===u?r+='"'+u+
'"+':(c=u[0],c==="*"?r=r.slice(0,f?-1:-3)+";"+u[1]+(f+1<a?"ret+=":""):(v=u[1],o=
u[2],l=u[3],y=u[4],markup=u[5],c.slice(-1)==="!"?(e=et(markup,b,t,s.length),ut(l,
e),(it=/\s+[\w-]*\s*\=\s*\\['"]$/.exec(n[f-1]))&&h("'{{!' in attribute:\n..."+n[
f-1]+"{{!...\nUse data-link"),r+="view.renderLink("+s.length+")+",e.bound=i,e.fn.
attr=it||"leaf",s.push(e)):(l&&(e=et(markup,b,t,s.length),ut(l,e),s.push(e)),tt=
tt||y.indexOf("view")>-1,r+=(c===":"?v==="html"?(d=i,"h("+o):v?(nt=i,'c("'+v+'",view,this,'+
o):(g=i,"((v="+o+')!=u?v:""'):(k=i,'t("'+c+'",view,this,'+(l?s.length:'""')+","+
y+(o?",":"")+o))+")+")));r=ui+(g?"v,":"")+(k?"t=j._tag,":"")+(nt?"c=j._convert,":
"")+(d?"h=j.converters.html,":"")+"ret; try{\n\n"+(b.debug?"debugger;":"")+(w?"ret=":
"return ")+r.slice(0,-1)+";\n\n"+(w?"return ret;":"")+"}catch(e){return j._err(e);}";
try{r=new Function("data, view, j, b, u",r)}catch(rt){p("Compiled template code:\n\n"+
r,rt)}return t&&(t.fn=r),r}function ci(n,t,r){function c(c,l,a,v,y,w,b,k,d,g,nt,
tt,it,rt,ut,ft){function ot(n,t,i,r,u,f,e){if(t){var s,o=(i?'view._hlp("'+i+'")':
r?"view":"data")+(e?(u?"."+u:i?"":r?"":"."+t)+(f||""):(e=i?"":r?u||"":t,""));return s=
e?"."+e:"",et||(o=o+s),o=o.slice(0,9)==="view.data"?o.slice(5):o,et&&(o="b("+o+',"'+
e+'")'+s),o}return n}y=y||"";a=a||l||nt;v=v||k;d=d||ut||"";y=y||"";var et=(t||r)
&&d!=="(";if(w)p(n);else return o?(o=!tt,o?c:'"'):e?(e=!it,e?c:'"'):(a?(u++,a):"")
+(ft?u?"":h?(h=s,"\b"):",":b?(u&&p(n),h=i,"\b"+v+":"):v?v.replace(wt,ot)+(d?(f[++u]=
i,d):y):y?y:rt?(f[u--]=s,rt)+(d?(f[++u]=i,d):""):g?(f[u]||p(n),","):l?"":(o=tt,e=
it,'"'))}var h,f={},u=0,e=s,o=s;return n=(n+" ").replace(bt,c)}function yt(n,t,i)
{var r,u;if(n)for(r in n)u=n[r],u.name!==r&&(n[r]=t(u,r,i))}function ft(n,i,u,f)
{function h(n){if(""+n===n||n.nodeType>0){try{s=n.nodeType>0?n:!ot.test(n)&&v&&v(
n)[0]}catch(t){}return s&&(n=e[s.getAttribute(ct)],n||(i=i||"_"+ti++,s.setAttribute(
ct,i),n=ft(s.innerHTML,i,u,f),e[i]=n)),n}}var o,s;return n=n||"",o=h(n),f=f||(n.
markup?n:{}),f.name=i,!o&&n.markup&&(o=h(n.markup))&&o.fn&&(o.debug!==n.debug||o.
allowCode!==n.allowCode)&&(o=o.markup),o!==t?(i&&!u&&(tt[i]=function(){return n.
render.apply(n,arguments)}),o.fn||n.fn?o.fn&&(n=i&&i!==o.name?r(r({},o),f):o):(n=
et(o,f,u,0),vt(o,n)),yt(f.templates,ft,n),yt(f.tags,at),n):void 0}function et(n,
t,i,u){function e(n){i[n]&&(f[n]=r(r({},i[n]),t[n]))}t=t||{};var f={markup:n,tmpls:
[],links:[],render:rt};return i&&(i.templates&&(f.templates=r(r({},i.templates),
t.templates)),f.parent=i,f.name=i.name+"["+u+"]",f.key=u),r(f,t),i&&(e("templates"),
e("tags"),e("helpers"),e("converters")),f}function pt(n){return ht[n]||(ht[n]="&#"+
n.charCodeAt(0)+";")}var u,w,ot,r,l="{",a="{",o="}",c="}",st="!",nt={},s=!1,i=!0,
v=n.jQuery,wt=/^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.]*?)(?:[.[]([\w$]+)\]?)?|(['"]).*\8)$/g,
bt=/(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g,
kt=/\r?\n/g,dt=/\\(['"])/g,gt=/\\?(['"])/g,ni=/\x08(~)?([^\x08]+)\x08/g,ti=0,ht=
{"&":"&amp;","<":"&lt;",">":"&gt;"},ii=/[&<"']/g,ri=/[\x00"&'<>]/g,ct="data-jsv-tmpl",
ui="var j=j||"+(v?"jQuery.":"js")+"views,",fi=Array.prototype.slice,tt={},f={jsviews:
"v1.0pre",sub:nt,debugMode:i,render:tt,templates:e,tags:d,helpers:y,converters:g,
delimiters:lt,View:b,_convert:oi,_err:function(n){return f.debugMode?"Error: "+(n.
message||n)+". ":""},_tmplFn:vt,_tag:si,error:h,Error:it};(it.prototype=new Error)
.constructor=it;v?(u=v,u.templates=e,u.render=tt,u.views=f,u.fn.render=rt):(u=n.
jsviews=f,u.extend=function(n,t){var i;n=n||{};for(i in t)n[i]=t[i];return n},u.
isArray=Array&&Array.isArray||function(n){return Object.prototype.toString.call(
n)==="[object Array]"});r=u.extend;d({"if":function(){var i=this,n=i.view;n.onElse=
function(i,r){for(var u=0,f=r.length;f&&!r[u++];)if(u===f)return"";return n.onElse=
t,i.path="",i.renderContent(n)};return n.onElse(this,arguments)},"else":function(
){var n=this.view;return n.onElse?n.onElse(this,arguments):""},"for":function(){
var n,u=this,i="",r=arguments,t=r.length;for(t===0&&(t=1),n=0;n<t;n++)i+=u.renderContent(
r[n]);return i},"*":function(n){return n}});g({html:function(n){return n!=t?String(
n).replace(ri,pt):""},attr:function(n){return n!=t?String(n).replace(ii,pt):""},
url:function(n){return n!=t?encodeURI(String(n)):""}});lt()}(this);
/*! JsViews v1.0pre: http://github.com/BorisMoore/jsviews */
this.jQuery&&jQuery.link||function(n,t){function dt(n){var p,d,c,w,f,l,a,b,v,y,k,
h=n.target,u=e(h);(u=u&&u.to)&&(b=i(h),v=o(h),y=v.ctx,k=y.onBeforeChange,c=rt(h),
p=yt[c],f=i.isFunction(c)?c(h):p?b[p]():b.attr(c),k&&(d=k.call(v,n)===s)||f===t||
(l=r.converters[u[2]],a=u[0],u=u[1],w={src:h,tgt:a,cnvtBack:l,path:u},l&&(f=l.call(
v,f,w)),f!==t&&a&&(nt(a).setProperty(u,f),y.onAfterChange&&y.onAfterChange.call(
w,n)),n.stopPropagation()),d&&n.stopImmediatePropagation())}function ai(t){var i,
r=n.getComputedStyle,f=t.currentStyle||r(t,"");return f.display==="none"&&(i=u.createElement(
t.nodeName),u.body.appendChild(i),f=(r?r(i,""):i.currentStyle).display,u.body.removeChild(
i)),f}function vi(n,e,o,h){var l,k,d,c,tt,g,w,v=this,it=v.src,a=v.tgt,y=i(a),b=v.
view,ut=b.ctx,ft=ut.onBeforeChange,et=e,nt,p;if(e=!h&&e,(!ft||!(e&&ft.call(v,n,e)===
s))&&!(e&&n.data!==e.path)){if(c=o.call(v,it,b,r,h||pi),l=v.attr||rt(a,f),w=v.tagCtx,
i.isFunction(c)&&(c=c.call(it)),l==="visible"&&(l="css-display",c=c?ai(a):"none"),
g=l==="none",e&&w&&w.tag.onUpdate&&(g=w.tag.onUpdate.call(w,n,e,v)===s||g),g)return;
if(tt=l.lastIndexOf("css-",0)===0&&l.substr(4))(d=i.style(a,tt)!==c)&&i.style(a,
tt,c);else{if(l==="value"){if(a.type==="radio")if(a.value===""+c)c=l="checked";else
return;a.type===st&&(l="checked",c=c?l:t)}else b._leafBnd&&b._nextNode&&(nt=a.parentNode,
p=a.nextSibling,p.nodeType===3?p.nodeValue!==c&&(nt.insertBefore(u.createTextNode(
c),p),nt.removeChild(p)):nt.insertBefore(u.createTextNode(c),p));k=yt[l];k?(d=y[
k]()!==c)&&(l==="html"?(gt(y,c),et&&b.link(it,t,a)):y[k](c),a.nodeName.toLowerCase(
)==="input"&&y.blur()):(d=y.attr(l)!=c)&&y.attr(l,c===t||c===""?null:c)}e&&d&&ut.
onAfterChange&&ut.onAfterChange.call(v,n,e)}}function gt(n,t){var r,u,f=n[0],o=e(
f,a);if(r=o.length)for(view=i.view(f);r--;)u=o[r],u.parent===view&&view.removeViews(
u.key);n.empty().append(t)}function yi(n,t){var i=this.ctx,r=i.onBeforeChange;r&&
r.call(this,n,t)===s||(this._onDataChanged(t),i.onAfterChange&&i.onAfterChange.call(
this,n,t))}function it(n){var u,r=n.data,f=n._onArrayChange,e=n._leafBnd;if(!n._useKey&&
(f&&(i([f[1]]).off(y,f[0]),n._onArrayChange=t),r)){u=function(){n.data!==t&&yi.apply(
n,arguments)};i([r]).on(y,u);n._onArrayChange=[u,r]}e&&!r&&p(e)}function rt(n,t)
{var i=r.merge[n.nodeName.toLowerCase()];return i?t?i.to.toAttr:i.from.fromAttr:
t?"text":""}function pi(n){return n}function ni(n,t,i,r,u,f,e){return ut(this,n,
t,i,r,u,f,e)}function ut(n,r,e,c,l,a,v,y){if(n){if(r=r.jquery?r:i(r),!h){h=u.body;
i(h).on(vt,dt)}var w,b,p,k=fi;return i.each(r,function(){if(p=this,""+n===n)return ui(
n,p,o(p),e,c,f);if(l=l||o(p),n.markup!==t)l.link===s&&(c=c||{},c.link=k=s),c&&c.
target==="replace"&&(b=p.parentNode,c.target=t),w=n.render(e,c,l,t,t,t,k),b?(a=p.
previousSibling,v=p.nextSibling,i(p).replaceWith(w),p=b):(a=v=t,gt(i(p),w));else
if(n!==f)return;l.link(e,c,p,a,v,y)}),r}}function ti(n,r,u,f,e,o){function a(u,f)
{if(l!==t&&(r.to=[u,f,l]),c=ht(u),p(n,u,f),n.push([u,f,h]),c)i([u]).on(y,h);else
if(typeof u=="object")i(u).on(at,g,f,h);return u}var c,s,l=e.to,h=function(i,r,o)
{f.dynCtx=u.ctx;vi.call(u,i,r,e,o);!r&&(s=u.tagCtx)&&(s.tag.onBeforeLink&&s.tag.
onBeforeLink.call(s,u),n.linkCtx=u);f.dynCtx=t};h(t,o,a)}function ii(n,r,o){arguments.
length||(h&&(i(h).off(vt,dt),h=t),n=f,r=u.body);r&&(r=r.jquery?r:i(r),n===f?i.each(
r,function(){w(this);for(var n=this.getElementsByTagName("*"),t=n.length;t--;)w(
n[t])}):n===t?i.each(r,function(){w(this)}):""+n===n&&i.each(r,function(){var r,
c,u,i,l,f,a,s=this,h=s&&e(s);if(h)for(a=h.link,n=ri(n,s);r=k.exec(n);)f=r[1],u=r[
2],r[6]&&!f&&(i=/^.*:([\w$]*)$/.exec(r[9]))&&(i=i[1],(l=i.length)&&(u=u.slice(0,
-l-1)+v)),(c=a[f+u])&&p(c,o)&&i!==t&&(f||i===t||(h.to=t))}))}function p(n,r,u){for(
var f,o=0,e=n.length;e-->0;)f=n[e],r!==t&&r!==f[0]||u!==t&&u!==f[1]||(ht(f[0])?i(
[f[0]]).off(y,f[2]):i(f[0]).off(at,f[2]),n.splice(e,1),o++);return o}function ri(
n,t){return n=i.trim(n),n.charAt(n.length-1)!=="}"?n=d+":"+n+(rt(t)?":":"")+v:n}
function ui(n,i,u,o,s,h){var nt,d,y,p,it,w,tt,c,rt,b,a,l;if(n&&i){if(tt=u._lnk++,
nt=u.links||u.tmpl.links,d=ft(i,ci),it=e(i),!(y=nt[tt]))for(y=nt[tt]={},n=ri(n,i);
p=k.exec(n);)w=p[1],b=p[2],c=t,p[6]&&(!w&&(c=/^.*:([\w$]*)$/.exec(p[9]))&&(c=c[1],
(rt=c.length)&&(b=b.slice(0,-rt-1)+v)),c===g&&(c=t)),l=w+b,y[l]=a=r._tmplFn(et+b+
ot,t,f),w||c===t||(a.to=c),a.attr=w;for(l in y)a=y[l],ti(binding=d[l]=d[l]||[],it,
{linkTag:l,src:o||u.data,tgt:i,view:u,ctx:s,attr:a.attr},u,a,h);return d}}function fi(
n,t,r,u){var e,f=t.tag,o="i",s="/i";return(f||(f=kt.exec(t.markup),f=t.tag=(f||(f=
kt.exec(n)))&&f[1]),u&&(o=(t.bound?"!"+t.key:"")+":"+u,s="/t"),/^(option|optgroup|li|tr|td)$/.
test(f))?(e="<"+f+' jsvtmpl="',e+o+'"/>'+i.trim(n)+e+s+'"/>'):"<!--jsv"+o+"-->"+
n+"<!--jsv"+s+"-->"}function ei(n,t,r,u,f,e,o){var v,a,h,l,y,p=!n._prevNode,c=n.
parentElem;if(t&&""+t!==t){if(a=u[t-1],!a)return;h=p?a._after:o?a._nextNode:n._prevNode}
else h=p?n._preceding||n.parent._preceding:n._prevNode;if(h&&h.parentNode!==c)return s;
v=r.render(f,e,n,!o||t,n._useKey&&!o);h?(l=h.nextSibling,i(h).after(v),h=h.nextSibling):
(l=c.firstChild,i(c).prepend(v),h=c.firstChild);y=h&&h.previousSibling;c.removeChild(
h);c.removeChild(l?l.previousSibling:c.lastChild);n.link(f,e,c,y,l,t)}function wi(
n,r,e,o,s,h){function y(i,o,s,p){var w,k,tt,ct,yt,et,d,pt,rt,wt,at,ut,vt,ot,st,bt,
ht,nt;for(p||(wt=ui(i.getAttribute(lt),i,l,n,r)),k=o&&o.nextSibling||i.firstChild;
k&&k!==s;){if(ct=k.nodeType,tt=ct===1&&k,d=k.nextSibling,tt&&(nt=k.getAttribute(
"jsvtmpl"))||ct===8&&(nt=k.nodeValue.split("jsv")[1]))if(rt=nt.charAt(0)!=="/"&&
nt,tt&&(tt=k.tagName,i.removeChild(k),k=g),rt)(bind=nt.charAt(0)==="!")?(nt=nt.split(
":"),rt=nt[1],ot=l.tmpl.tmpls[parseInt(nt[0].slice(1))],ut=v[rt],at=ut._leafBnd=
ut._leafBnd||[],ti(at,at,{linkTag:ot.markup,src:ut.data||n,tgt:k,view:ut,ctx:r,attr:
ot.fn.attr},ut,ot.fn,f)):rt=rt.slice(1),yt=rt||h++,et=et||ft(i,a),w=v[yt],w.link||
(w.parentElem=i,c(w,b),et&&et.push(w),w.parent&&(w._useKey&&(w.nodes=[],w._lnk=0),
it(w)),w._prevNode=k,w.tmpl.presenter&&(w.presenter=new w.tmpl.presenter(w.ctx,w))),
tt&&rt&&(w._preceding=d.previousSibling,et.elLinked=!!tt),d=w.link(t,t,i,d.previousSibling)
else return l._nextNode=k,tt&&nt==="/i"&&e.insertBefore(l._after=u.createTextNode(
""),d),tt&&nt==="/t"&&d&&d.tagName&&d.getAttribute("jsvtmpl")&&e.insertBefore(u.
createTextNode(""),d),(pt=l.ctx.onAfterCreate)&&pt.call(l,l),d;else if(p&&l.parent&&
l.nodes&&l.nodes.push(k),tt){vt=y(tt);for(st in vt)st=vt[st],(ht=st.linkCtx)&&(bt=
ht.tagCtx.tag.onAfterLink)&&bt.call(ht.tagCtx,ht)}k=d}return wt}var l=this,v=l.views,
p=u.body;return h=h||0,e=""+e===e?i(e)[0]:e.jquery?e[0]:e||l.parentElem||p,y(e,o,
s,f)}function e(n,t){var u,r=i.cache[n[i.expando]];return r=r&&r.data,u=r&&r[tt],
t?u&&u[t]||[]:u}function ft(n,t){return(e(n)||i.data(n,tt,{view:[],link:{}}))[t]}
function bi(n){return n.type===st?n.checked:i(n).val()}function oi(n){if(""+n===
n){var t=n.split("[");for(n=ct[t.shift()];n&&t.length;)n=n.tmpls[t.shift().slice(
0,-1)]}return n}function w(n){var u,l,s,h,r,c=e(n);if(c){r=c.link;for(l in r)p(r[
l]);if(r=c.view,u=r.length)for(s=o(n);u--;)h=r[u],h.parent===s&&s.removeViews(h.
key,t,f);i.removeData(n,tt)}}var b,h,o,k,et,d,v,ot,si,u=n.document,i=n.jQuery,r=
i.views,c=i.extend,hi=r.sub,s=!1,f=!0,g=null,st="checkbox",l=r.View(r.helpers),ht=
i.isArray,ct=r.templates,nt=i.observable,lt="data-link",tt="_jsvData",ci="link",
a="view",at="propertyChange",y="arrayChange",vt="change.jsv",yt={value:"val",input:
"val",html:"html",text:"text"},pt={from:{fromAttr:"value"},to:{toAttr:"value"}},
li=i.cleanData,wt=r.delimiters,ki=r.error,bt=/^jsvi|^jsv:/,kt=/^\s*<(\w+)[>\s]/;
if(!i)throw"requires jQuery";if(!r)throw"requires JsRender";hi.onStoreItem=function(
n,t,r){r&&n===ct&&(r.link=ni,t&&(i.link[t]=function(){return ni.apply(r,arguments)}
))};b={refresh:function(n){var u,t=this,r=t.parent,f=t.tmpl=oi(t.tmpl);return r&&
(u=!r._useKey&&t.index,i(t.nodes).remove(),t.removeViews(),t.nodes=[],ei(t,u,t.tmpl,
r.views,t.data,n),it(t)),t},addViews:function(n,t,i){var e,r=this,u=r.views;if(!r.
_useKey&&t.length&&(i=oi(i||r.tmpl))&&(e=u.length+t.length,ei(r,n,i,u,t,r.ctx,f)!==
s))while(++n<e)nt(u[n]).setProperty("index",n);return r},removeViews:function(n,
r,u){function h(n,r){var h,s,l,c,o=f[n];if(o){for(s=o._prevNode,l=o._nextNode,c=
s?[s]:o.nodes,r=r||e(o.parentElem,a),h=r.length,h&&o.removeViews(t,t,u);h--;)if(
r[h]===o){r.splice(h,1);break}if(!u){while(s&&s.parentNode&&s!==l)s=s.nextSibling,
c.push(s);o._after&&c.push(o._after);i(c).remove()}o.data=t;it(o)}}var o,c,v,s=this,
l=!s._useKey,f=s.views;if(l&&(c=f.length,v=e(s.parentElem,a)),n===t)if(l){for(o=
c;o--;)h(o,v);s.views=[]}else{for(n in f)h(n);s.views={}}else if(r===t&&(l?r=1:(
h(n),delete f[n])),l&&r){for(o=n+r;o-->n;)h(o,v);if(f.splice(n,r),c=f.length)while(
n<c)nt(f[n]).setProperty("index",n++)}return this},content:function(n){return n?
i(n,this.nodes):i(this.nodes)},link:wi,_onDataChanged:function(n){if(n){var t=this,
u=n.change,i=n.index,r=n.items;switch(u){case"insert":t.addViews(i,r);break;case"remove":
t.removeViews(i,r.length);break;case"move":t.refresh();break;case"refresh":t.refresh(
)}}return f},_onRender:fi};c(r,{linkAttr:lt,merge:{input:{from:{fromAttr:bi},to:
{toAttr:"value"}},textarea:pt,select:pt,optgroup:{from:{fromAttr:"label"},to:{toAttr:
"label"}}},delimiters:function(){var n=wt.apply(wt,arguments);return et=n[0],d=n[
1],v=n[2],ot=n[3],si=n[4],k=new RegExp("(?:^|\\s*)([\\w-]*)("+d+r.rTag+")"+v+")",
"g"),this}});c(i,{view:o=function(n,t){var r,s,f,v,h,y,c=u.body;if(!n||n===c||l.
_useKey<2)return l;if(y=n=""+n===n?i(n)[0]:n.jquery?n[0]:n,t){for(h=n.nextSibling||
n.parentNode;h!==(n=n.firstChild||n.nextSibling||n.parentNode.nextSibling);)if(n.
nodeType===8&&bt.test(n.nodeValue)&&(r=o(n),r._prevNode===n))return r;return}while(
!(s=e(h=n.parentNode||c,a)).length){if(!h||n===c)return ft(c,a).push(l),l;n=h}if(
s.elLinked){for(f=s.length;f--;)for(r=s[f],v=r.nodes&&r.nodes.length;v--;)if(r.nodes[
v]===n)return r}else while(n){if(n===h)return r;if(n.nodeType===8)if(/^jsv\/[it]$/.
test(n.nodeValue)){for(f=s.length;f--;)if(r=s[f],r._nextNode===n){if(n===y)return r;
n=r._prevNode;break}}else if(bt.test(n.nodeValue))for(f=s.length;f--;)if(r=s[f],
r._prevNode===n)return r;n=n.previousSibling}return o(h)},link:ut,unlink:ii,cleanData:
function(n){for(var t=n.length;t--;)w(n[t]);li.call(i,n)}});c(i.fn,{link:function(
n,t,i,r,u,f,e){return ut(n,this,t,i,r,u,f,e)},unlink:function(n,t){return ii(n,this,
t)},view:function(){return o(this[0])}});r.delimiters();c(l,{tmpl:{},_lnk:0,links:
[]});c(l,b)}(this),function(n){"function"==typeof require&&"object"==typeof exports&&
"object"==typeof module?n(require("knockout"),exports):"function"==typeof define&&
define.amd?define(["knockout","exports"],n):n(ko,ko.mapping={})}(function(n,t){function w(
i,r){var o=t.getType,u,h={include:!0,ignore:!0,copy:!0},f,e,s=1,c=arguments.length;
for("object"!==o(i)&&(i={});s<c;s++)for(u in r=arguments[s],"object"!==o(r)&&(r=
{}),r){if(f=i[u],e=r[u],"constructor"!==u&&h[u]&&"array"!==o(e)){if("string"!==o(
e))throw Error("ko.mapping.defaultOptions()."+u+" should be an array or string.");
e=[e]}switch(o(e)){case"object":f="object"===o(f)?f:{};i[u]=w(f,e);break;case"array":
f="array"===o(f)?f:[];i[u]=n.utils.arrayGetDistinctValues(n.utils.arrayPushAll(f,
e));break;default:i[u]=e}}return i}function u(){var t=n.utils.arrayPushAll([{},l],
arguments);return w.apply(this,t)}function nt(t,i){var u=n.dependentObservable,r;
return n.dependentObservable=function(i,r,u){u=u||{};i&&"object"==typeof i&&(u=i)
;var e=u.deferEvaluation,f=!1,o=function(i){return y({read:function(){return f||
(n.utils.arrayRemoveItem(t,i),f=!0),i.apply(i,arguments)},write:function(n){return i(
n)},deferEvaluation:!0})};return u.deferEvaluation=!0,i=new y(i,r,u),e||(i=o(i),
t.push(i)),i},n.dependentObservable.fn=y.fn,n.computed=n.dependentObservable,r=i(
),n.dependentObservable=u,n.computed=n.dependentObservable,r}function e(u,c,l,v,
y,p){var ht=n.utils.unwrapObservable(c)instanceof Array,w,k,ot,ft,g,tt,st,vt;void
0!==v&&t.isMapped(u)&&(l=n.utils.unwrapObservable(u)[i],p=v="");var v=v||"",p=p||
"",rt=function(n){var t;return v===""?t=l[n]:(t=l[v])&&(t=t[n]),t},ct=function()
{return rt("create")instanceof Function},at=function(n){return nt(h,function(){return rt(
"create")({data:n||c,parent:y})})},ut=function(){return rt("update")instanceof Function}
,it=function(t,i){var r={data:i||c,parent:y,target:n.utils.unwrapObservable(t)};
return n.isWriteableObservable(t)&&(r.observable=t),rt("update")(r)},et=r.get(c);
if(et)return et;if(ht){ht=[];w=(et=rt("key")instanceof Function)?rt("key"):function(
n){return n};n.isObservable(u)||(u=n.observableArray([]),u.mappedRemove=function(
n){var t=typeof n=="function"?n:function(t){return t===w(n)};return u.remove(function(
n){return t(w(n))})},u.mappedRemoveAll=function(t){var i=f(t,w);return u.remove(
function(t){return n.utils.arrayIndexOf(i,w(t))!=-1})},u.mappedDestroy=function(
n){var t=typeof n=="function"?n:function(t){return t===w(n)};return u.destroy(function(
n){return t(w(n))})},u.mappedDestroyAll=function(t){var i=f(t,w);return u.destroy(
function(t){return n.utils.arrayIndexOf(i,w(t))!=-1})},u.mappedIndexOf=function(
t){var i=f(u(),w),t=w(t);return n.utils.arrayIndexOf(i,t)},u.mappedCreate=function(
t){if(u.mappedIndexOf(t)!==-1)throw Error("There already is an object with the key that you specified.");
var i=ct()?at(t):t;return ut()&&(t=it(i,t),n.isWriteableObservable(i)?i(t):i=t),
u.push(i),i});k=f(n.utils.unwrapObservable(u),w).sort();ot=f(c,w);et&&ot.sort();
for(var et=n.utils.compareArrays(k,ot),k={},ot=[],lt=0,yt=et.length;lt<yt;lt++){
ft=et[lt];tt=s(p,c,lt);switch(ft.status){case"added":st=o(n.utils.unwrapObservable(
c),ft.value,w);g=e(void 0,st,l,v,u,tt);ct()||(g=n.utils.unwrapObservable(g));tt=
b(n.utils.unwrapObservable(c),st,k);ot[tt]=g;k[tt]=!0;break;case"retained":st=o(
n.utils.unwrapObservable(c),ft.value,w);g=o(u,ft.value,w);e(g,st,l,v,u,tt);tt=b(
n.utils.unwrapObservable(c),st,k);ot[tt]=g;k[tt]=!0;break;case"deleted":g=o(u,ft.
value,w)}ht.push({event:ft.status,item:g})}u(ot);vt=rt("arrayChanged");vt instanceof
Function&&n.utils.arrayForEach(ht,function(n){vt(n.event,n.item)})}else if(a(c))
{if(u=n.utils.unwrapObservable(u),!u){if(ct())return k=at(),ut()&&(k=it(k)),k;if(
ut())return it(k);u={}}ut()&&(u=it(u));r.save(c,u);d(c,function(t){var i=s(p,c,t),
f;n.utils.arrayIndexOf(l.ignore,i)==-1&&(n.utils.arrayIndexOf(l.copy,i)!=-1?u[t]=
c[t]:(f=r.get(c[t])||e(u[t],c[t],l,t,u,i),n.isWriteableObservable(u[t])?u[t](n.utils.
unwrapObservable(f)):u[t]=f,l.mappedProperties[i]=!0))})}else switch(t.getType(c))
{case"function":ut()?n.isWriteableObservable(c)?(c(it(c)),u=c):u=it(c):u=c;break
default:n.isWriteableObservable(u)?ut()?u(it(u)):u(n.utils.unwrapObservable(c)):
(u=ct()?at():n.observable(n.utils.unwrapObservable(c)),ut()&&u(it(u)))}return u}
function b(n,t,i){for(var r=0,u=n.length;r<u;r++)if(!0!==i[r]&&n[r]===t)return r;
return null}function k(i,r){var u;return r&&(u=r(i)),"undefined"===t.getType(u)&&
(u=i),n.utils.unwrapObservable(u)}function o(t,i,r){if(t=n.utils.arrayFilter(n.utils.
unwrapObservable(t),function(n){return k(n,r)===i}),0==t.length)throw Error("When calling ko.update*, the key '"+
i+"' was not found!");if(1<t.length&&a(t[0]))throw Error("When calling ko.update*, the key '"+
i+"' was not unique!");return t[0]}function f(t,i){return n.utils.arrayMap(n.utils.
unwrapObservable(t),function(n){return i?k(n,i):n})}function d(n,t){if(n instanceof
Array)for(var i=0;i<n.length;i++)t(i);else for(i in n)t(i)}function a(n){var i=t.
getType(n);return("object"===i||"array"===i)&&null!==n&&"undefined"!==i}function s(
n,t,i){var r=n||"";return t instanceof Array?n&&(r+="["+i+"]"):(n&&(r+="."),r+=i)
,r}function v(f,e,o,h,c){var h,y,l,p;return(void 0!==h&&t.isMapped(f)&&(o=u(n.utils.
unwrapObservable(f)[i],o),h=""),void 0===h&&(r=new g),h=h||"",l=n.utils.unwrapObservable(
f),!a(l))?e(f,c):(e(f,c),y=l instanceof Array?[]:{},r.save(f,y),p=c,d(l,function(
i){var u,f,a;if(!(o.ignore&&n.utils.arrayIndexOf(o.ignore,i)!=-1)&&(u=l[i],f=s(h,
l,i),!(n.utils.arrayIndexOf(o.copy,i)===-1&&n.utils.arrayIndexOf(o.include,i)===
-1&&o.mappedProperties&&!o.mappedProperties[f]&&!(l instanceof Array)))){c=s(p,l,
i);switch(t.getType(n.utils.unwrapObservable(u))){case"object":case"array":case"undefined":
a=r.get(u);y[i]=t.getType(a)!=="undefined"?a:v(u,e,o,f,c);break;default:y[i]=e(u,
c)}}}),y)}function g(){var t=[],i=[];this.save=function(r,u){var f=n.utils.arrayIndexOf(
t,r);0<=f?i[f]=u:(t.push(r),i.push(u))};this.get=function(r){return r=n.utils.arrayIndexOf(
t,r),0<=r?i[r]:void 0}}var i="__ko_mapping__",y=n.dependentObservable,p=0,h,r,c=
{include:["_destroy"],ignore:[],copy:[]},l=c;t.isMapped=function(t){return(t=n.utils.
unwrapObservable(t))&&t[i]};t.fromJS=function(n){var t,f,o;if(0==arguments.length)
throw Error("When calling ko.fromJS, pass the object you want to convert.");return window.
setTimeout(function(){p=0},0),p++||(h=[],r=new g),2==arguments.length&&(arguments[
1][i]?f=arguments[1]:t=arguments[1]),3==arguments.length&&(t=arguments[1],f=arguments[
2]),t=f?u(f[i],t):u(t),t.mappedProperties=t.mappedProperties||{},o=e(f,n,t),f&&(o=
f),--p||window.setTimeout(function(){for(;h.length;){var n=h.pop();n&&n()}},0),o[
i]=u(o[i],t),o};t.fromJSON=function(i){var r=n.utils.parseJson(i);return arguments[
0]=r,t.fromJS.apply(this,arguments)};t.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");
};t.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
};t.toJS=function(t,r){if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");
return r=u(t[i],r),v(t,function(t){return n.utils.unwrapObservable(t)},r)};t.toJSON=
function(i,r){var u=t.toJS(i,r);return n.utils.stringifyJson(u)};t.visitModel=function(
n,t,r){if(0==arguments.length)throw Error("When calling ko.mapping.visitModel, pass the object you want to visit.");
return r=u(n[i],r),v(n,t,r)};t.defaultOptions=function(){if(0<arguments.length)l=
arguments[0];else return l};t.resetDefaultOptions=function(){l={include:c.include.
slice(0),ignore:c.ignore.slice(0),copy:c.copy.slice(0)}};t.getType=function(n){if(
n&&"object"==typeof n){if(n.constructor==(new Date).constructor)return"date";if(
n.constructor==[].constructor)return"array"}return typeof n}}),function(n){"use strict";
var t={init:function(){return this},show:function(t){var i=n.extend({speed:400,displayType:
"inherit"},t);return this.css("display",i.displayType).animate({opacity:1},i.speed)}
,hide:function(t){var i=n.extend({speed:400,displayType:"none"},t);return this.animate(
{opacity:0},i.speed,function(){n(this).css("display",i.displayType)})}};n.fn.fade=
function(i){if(t[i])return t[i].apply(this,Array.prototype.slice.call(arguments,
1));if(typeof i!="object"&&i)n.error("Method "+i+" does not exist on jQuery.fade")
else return t.init.apply(this,arguments)}}(jQuery),function(){"use strict";var t=
Object.prototype.toString,n="[object Function]";Array.prototype.forEach||(Array.
prototype.forEach=function(i,r){var u=0,f,e;if(t.call(i)!==n)throw new TypeError(
"The first argument to forEach needs to be a function.");for(f=Object(this),e=f.
length>>>0;u<e;)u in f&&i.call(r,f[u],u,f),u++});Array.prototype.filter||(Array.
prototype.filter=function(i,r){var u=0,f,s,e,o;if(t.call(i)!==n)throw new TypeError(
"The first argument to filter needs to be a function.");for(f=Object(this),s=f.length>>>
0,o=[];u<s;)u in f&&(e=f[u],i.call(r,e,u,f)&&o.push(e)),u++;return o});Array.prototype.
indexOf||(Array.prototype.indexOf=function(n,t){if(this===null)throw new TypeError;
var f=Object(this),u=f.length>>>0,i=Number(t),r;if(u===0||(i!==i?i=0:i!==0&&i!==
Infinity&&i!==-Infinity&&(i=(i>0||-1)*Math.floor(Math.abs(i))),i>=u))return-1;for(
r=i>=0?i:Math.max(u-Math.abs(i),0);r<u;r++)if(r in f&&f[r]===n)return r;return-1}
);Array.prototype.map||(Array.prototype.map=function(t,i){var o,f,r,u,e,s,h;if(this==
null)throw new TypeError(" this is null or not defined");if(u=Object(this),e=u.length>>>
0,{}.toString.call(t)!=n)throw new TypeError(t+" is not a function");for(i&&(o=i),
f=new Array(e),r=0;r<e;)r in u&&(s=u[r],h=t.call(o,s,r,u),f[r]=h),r++;return f});
Array.prototype.stableSort=function(n){var t=this.map(function(n,t){return{i:t,v:
n}});return t.sort(function(t,i){var r=n(t.v,i.v);return r===0?t.i-i.i:r}),t.map(
function(n){return n.v})}}(),function(n){"use strict";var h=n.Date.prototype.toString,
c=n.Date.parse,i={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday",
"Saturday"],daysAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January",
"February","March","April","May","June","July","August","September","October","November",
"December"],monthsAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct",
"Nov","Dec"],ampm:["AM","PM"],dateSeparator:"/",timeSeparator:":",standard:{d:"M/d/yyyy",
D:"dddd, MMMM dd, yyyy",F:"dddd, MMMM dd, yyyy h:mm:ss tt",m:"MMMM dd",M:"MMMM dd",
r:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",R:"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",t:"h:mm tt",T:"h:mm:ss tt",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
y:"MMMM, yyyy",Y:"MMMM, yyyy"}},f=function(n,t,i){return i=i?i:"0",n=n+"",t+1>=n.
length&&(n=Array(t+1-n.length).join(i)+n),n},r=function(n,t){return n=n+"",n.substr(
n.length-t)},u=function(n,t){return r(f(n,t,"0"),t)},s=function(n){return n=n%12,
n===0?12:n},o=function(n){return n.split("").reverse().join("")},e=function(n){return"\\"+
n.split("").join("\\")},t,l=function(n){var o=n.length,h,c,l,a;switch(n[0]){case"y":
switch(o){case 3:return f(t.getFullYear(),o);case 1:return+r(t.getFullYear(),2)+
"";default:return u(t.getFullYear(),o)}case"M":switch(o){case 4:return e(i.months[
t.getMonth()]);case 3:return e(i.monthsAbbr[t.getMonth()]);case 2:return u(t.getMonth(
)+1,2);default:return r(t.getMonth()+1,2)}case"d":switch(o){case 4:return e(i.days[
t.getDay()]);case 3:return e(i.daysAbbr[t.getDay()]);case 2:return u(t.getDate(),
2);default:return r(t.getDate(),2)}case"h":return o===2?u(s(t.getHours()),2):r(s(
t.getHours()),2);case"H":return o===2?u(t.getHours(),2):r(t.getHours(),2);case"m":
return o===2?u(t.getMinutes(),2):r(t.getMinutes(),2);case"s":return o===2?u(t.getSeconds(
),2):r(t.getSeconds(),2);case"t":return o===2?i.ampm[t.getHours()<12?0:1]:i.ampmAbbr[
t.getHours()<12?0:1];case"z":return(h=-t.getTimezoneOffset()/60,c=h<0,c&&(h=-h),
l=parseInt(h,10),a=(h-l)*60,o===3)?(c?"-":"+")+f(l,2)+":"+f(a,2):(c?"-":"+")+f(l,
o);case"/":return i.dateSeparator;case":":return i.timeSeparator}return""},a=function(
n){return o(l(n))};n.Date.getLocaleValues=function(){return i};n.Date.setLocaleValues=
function(n){var t;i=n;i.ampmAbbr=[i.ampm[0][0],i.ampm[1][0]];t=i.standard;t.f=t.
D+" "+t.t;t.g=t.d+" "+t.t;t.G=t.d+" "+t.T};n.Date.prototype.toString=function(){
if(arguments.length){var n=arguments[0];return n=i.standard[n]||n,n=n.replace(/'([^']*)'/g,
function(n,t){return e(t)}),t=this,o(o(n).replace(/(y{1,5}|M{1,4}|d{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|t{1,2}|z{1,3}|\/|:)(?!\\)/g,
a).replace(/\\(?!\\)/g,""))}return h.apply(this,arguments)};n.Date.parse=function(
n){return(n+"").substr(0,6)==="/Date("?parseInt(n.substr(6),10):c.apply(this,arguments)}
;n.Date.setLocaleValues(i);n.Date.now||(n.Date.now=function(){return+new n.Date}
)}(this),function(n,t){"use strict";n.String.prototype.format=function(){var i,n=
arguments;return n&&n.length===1&&n[0]&&typeof n[0]=="object"?(n=n[0],this.replace(
/\{[_a-zA-Z\d]+\}/g,function(t){return i=t.substring(1,t.length-1),n.hasOwnProperty(
i)?n[i]:t})):this.replace(/\{(\d+)\}/g,function(i,r){return n[r]!==t?n[r]:i})}}(
this),function(n){"use strict";function i(n){var t=[];for(var i in n)n.hasOwnProperty(
i)&&t.push(i);return t}function t(n,t){for(var f=i(t),e=f.length,u,r=0;r<e;r++)u=
f[r],n[u]=t[u]}function r(n,t,i){if(!n||!t)return i;for(var r=n,f=t.split("."),o=
f.length,e,u=0;u<o;u++)if(e=f[u],r=r[e],!r)return i;return r}(function(i){function f(
n,i,r){for(var u=n,o=i.split("."),e,f=0,s=o.length;f<s;f++)e=o[f],u[e]||(u[e]={}),
u=u[e];return r&&t(u,r),u}function e(t,i){return f(n,t,i)}function o(n,t){return r(
u,n,t)}n[i]||(n[i]={});var u=n[i];u.Namespace||(u.Namespace={});t(u,{exists:o});
t(u.Namespace,{defineWithParent:f,define:e})})("Shell"),function(n){function i(n,
i,r){return n=n||function(){},i&&t(n.prototype,i),r&&t(n,r),n}function r(n,r,u,f)
{if(n){r=r||function(){};var e=n.prototype,o=function(){};return o.prototype=e,r.
prototype=new o,r.prototype._super=e,r.prototype.constructor=r,u&&t(r.prototype,
u),f&&t(r,f),r}return i(r,u,f)}function u(n){n=n||function(){};for(var i=0,r=arguments.
length;i<r;i++)t(n.prototype,arguments[i]);return n}n.Namespace.define("Shell.Class",
{define:i,derive:r,mix:u})}(Shell)}(this),function(n,t,i,r){"use strict";(function(
){function b(n,i,r){var f=t.Utilities.repeatString("&nbsp;",i*4),o,e="",u,s;if(n===
null)return f+"[null]";if(typeof n=="undefined")return f+"[undefined]";if(i>r)return f+
"[...]";for(o in n)u=n[o],e+=f+o+": ",s=typeof u,e+=s==="function"?" [function]":
u===null?" [null]":s==="object"?"<br/>"+b(u,i+1,r):" "+t.Utilities.htmlEncode(u.
toString()),e+="<br/>";return e}function n(t){if(!t)return Math.floor(Math.random(
)*16).toString(16);for(var r="",i=0;i<t;i++)r+=n();return r}var u,f,e,o,s,h,c,l,
a,v,y,p,w;u=t.Class.define(function(n,t,i){this.detail=t;this.target=i;this.timeStamp=
Date.now();this.type=n},{bubbles:!1,cancelable:!1,target:null,timeStamp:null,type:
null,isDefaultPrevented:function(){return this._preventDefaultCalled},preventDefault:
function(){this._preventDefaultCalled=!0},stopImmediatePropagation:function(){this.
_stopImmediatePropagationCalled=!0},stopPropagation:function(){}});f={_listeners:
null,addEventListener:function(n,t,i){i=i||!1;this._listeners=this._listeners||{
};for(var u=this._listeners[n]=this._listeners[n]||[],f,r=0,e=u.length;r<e;r++)if(
f=u[r],f.useCapture===i&&f.listener===t)return;u.push({listener:t,useCapture:i})}
,dispatchEvent:function(n,t){var f=new u(n,t,this),i=this._listeners&&this._listeners[
n],r,e;if(i)for(i=i.slice(0,i.length),r=0,e=i.length;r<e&&!f._stopImmediatePropagationCalled;
r++)i[r].listener(f);return f.defaultPrevented||!1},removeEventListener:function(
n,t,i){i=i||!1;var r=this._listeners&&this._listeners[n],u,e,f;if(r)for(u=0,e=r.
length;u<e;u++)if(f=r[u],f.listener===t&&f.useCapture===i){r.splice(u,1);r.length===
0&&delete this._listeners[n];break}}};e=function(n){if(n===r||n===null)return"";
var t=i("<div />");return t.text(n).html()};o=function(n){return n.replace(/[^a-zA-Z0-9\.:\-\/]/g,
"").replace(/\//g,"&#x2F;")};s=function(n,t){return new Array(t).join(n)};h=function(
n){if(n===null)return"[null]";switch(typeof n){case"undefined":return"[undefined]"
case"object":return b(n,0,5);case"function":return"[function]";default:return i(
"<div/>").text(n).html()}};c=function(n){return i("<div/>").html(n).text()};l=function(
){var t,n=new Date,i;try{return(t=window.localStorage).setItem(n,n),i=t.getItem(
n)==n,t.removeItem(n),i}catch(r){return!1}};a=function(n){for(var t in n)if(!t.match(
/^jQuery\d+$/))return!1;return!0};v=function(){var t=128+Math.floor(Math.random(
)*64).toString(16);return n(8)+"-"+n(4)+"-4"+n(3)+"-"+t+n(2)+"-"+n(12)};y=function(
n){return typeof n!="string"||n===null?"":n.split("?",1)[0]};p=function(n,t){return n===
null?t===null?0:-1:t===null?1:n>t?1:n<t?-1:0};w=function(n){return Array.isArray?
Array.isArray(n):Object.prototype.toString.call(n)==="[object Array]"};t.Namespace.
defineWithParent(t,"Utilities",{eventMixin:f,htmlEncode:e,attributeEncode:o,htmlEncodeVariable:
h,htmlDecode:c,isLocalStorageAvailable:l,isEmptyObject:a,newGuid:v,repeatString:
s,stringCompare:p,removeQueryString:y,isArray:w})})(),function(){function e(n){var
t=[];for(var i in n)n.hasOwnProperty(i)&&t.push(i);return t}function l(n){return typeof
n=="object"&&n&&typeof n.then=="function"}function g(n,t,i){for(var f,u,e,r=0,o=
t.length;r<o;r++){f=t[r];u=f.promise;e=f.onComplete;try{e?u._complete(e(i)):u._complete(
i)}catch(s){Shell.Diagnostics.Log.writeEntry("Shell.Utilities.promise._exception",
s.toString(),Shell.Diagnostics.LogEntryLevel.error);u._exception(s)}}}function nt(
n,t,i){for(var f,u,e,r=0,o=t.length;r<o;r++){f=t[r];u=f.promise;e=f.onError;try{
e?u._handledError(i,n,e):u._chainedError(i,n)}catch(s){u._exception(s)}}}function a(
n){return function(i,f){if(this._state===u){if(this._value=i,this._state=s,r._listeners&&
r._listeners[o]){var e=n(this,i,f);t.Promise.dispatchEvent(o,e)}this._notify();this.
_cleanup()}}}function tt(n,t,i){var r=i._isException,u=i._errorId;return n._isException=
r||!1,n._errorId=u,{exception:r?t:null,error:r?null:t,promise:n,id:u,parent:i}}function it(
n,t){return n._isException=!1,n._errorId=++v,{error:t,promise:n,id:n._errorId}}function rt(
n,t){return n._isException=!0,n._errorId=++v,{exception:t,promise:n,id:n._errorId}}
var d=t.Class.mix(t.Class.define(null),t.Utilities.eventMixin),r=new d,o="error",
v=0,u=0,y=1,p=2,s=3,h=4,w=s,f,b,c,k,i;f=t.Class.define(null,{_listeners:null,_state:
u,_value:null,_cancel:function(){switch(this._state){case s:case h:case p:return
case u:this._error(new Error("Canceled"));break;case y:this._state=p;typeof this.
_value.cancel=="function"&&this._value.cancel()}this._cleanup()},_complete:function(
n){if(this._state===u){if(this._value=n,l(n)){this._state=y;var t=this;n.then(function(
n){t._state=u;t._complete(n)},function(i){t._state=u;n instanceof f?t._chainedError(
i,n):t._error(i)},function(n){t._progress(n)})}else this._state=h,this._notify();
this._cleanup()}},_handledError:function(n,i,u){r._listeners&&r._listeners[o]&&t.
Promise.dispatchEvent(o,{exception:i._isException?n:null,error:i._isException?null:
n,promise:this,handler:u,id:i._errorId,parent:i});this._complete(u(n))},_chainedError:
a(tt),_error:a(it),_exception:a(rt),_notify:function(){var n=this._listeners;if(
this._listeners=null,n)switch(this._state){case h:g(this,n,this._value);break;case
s:nt(this,n,this._value)}},_progress:function(n){if(!(this._state>=w)&&this._listeners)
for(var t,r,i=0,u=this._listeners.length;i<u;i++){t=this._listeners[i];r=t.onProgress;
try{r&&r(n)}catch(f){}t.onComplete||t.onError||t.promise._progress(n)}},then:function(
n,t,i){this._listeners=this._listeners||[];var r=new b(this);return this._listeners.
push({promise:r,onComplete:n,onError:t,onProgress:i}),this._state>=w&&this._notify(
),r}});b=t.Class.derive(f,function(n){this._creator=n},{_cleanup:function(){this.
_creator=null},cancel:function(){this._creator&&this._creator.cancel();this._cancel(
)}});c=t.Class.derive(f,function(n){this._complete(n)},{_cleanup:function(){},cancel:
function(){}});k=t.Class.derive(f,function(n){this._error(n)},{_cleanup:function(
){},cancel:function(){}});i=t.Class.derive(f,function(n,t){this._onCancel=t;try{
var i=this;n(function(n){i._complete(n)},function(n){i._error(n)},function(n){i.
_progress(n)})}catch(r){this._exception(r)}},{_cleanup:function(){this._onCancel=
null},cancel:function(){this._onCancel&&this._onCancel();this._cancel()}},{addEventListener:
function(n,t,i){r.addEventListener(n,t,i)},any:function(n){return new i(function(
t,r){var u=e(n);u.length===0&&t();u.forEach(function(u){i.as(n[u]).then(function(
){t({key:u,value:n[u]})},function(){r({key:u,value:n[u]})})})},function(){var t=
e(n);t.forEach(function(t){var r=i.as(n[t]);typeof r.cancel=="function"&&r.cancel(
)})})},as:function(n){return l(n)?n:new c(n)},dispatchEvent:function(n,t){return r.
dispatchEvent(n,t)},is:function(n){return l(n)},join:function(n){return new i(function(
t,r,u){var o=e(n),f=Array.isArray(n)?[]:{},s=Array.isArray(n)?[]:{},c=o.length,h=
function(n){--c==0?e(f).length===0?t(s):r(f):u({Key:n,Done:!0})};o.forEach(function(
t){i.then(n[t],function(n){s[t]=n;h(t)},function(n){f[t]=n;h(t)})})},function(){
e(n).forEach(function(t){var r=i.as(n[t]);typeof r.cancel=="function"&&r.cancel(
)})})},removeEventListener:function(n,t,i){r.removeEventListener(n,t,i)},then:function(
n,t,r,u){return i.as(n).then(t,r,u)},thenEach:function(n,t,r,u){var f=Array.isArray(
n)?[]:{};return e(n).forEach(function(e){f[e]=i.as(n[e]).then(t,r,u)}),i.join(f)}
,timeout:function(i){i||(i=5);var r=0;return new t.Promise(function(t){r=n.setTimeout(
t,i)},function(){r&&n.clearTimeout(r)})},wrap:function(n){return new c(n)},wrapError:
function(n){return new k(n)}});t.Namespace.define("Shell",{Promise:i})}(),function(
){function u(n){var t=typeof n;return t==="object"&&n instanceof Array&&(t="array"),
t}function r(n,t){var i,f=[],e=[];if(n===t)return!0;switch(u(n)){case"array":if(
u(t)!=="array"||n.length!==t.length)return!1;for(i=0;i<n.length;i++)if(!r(n[i],t[
i]))return!1;return!0;case"object":if(u(t)!=="object")return!1;for(i in n)f.push(
i);for(i in t)e.push(i);if(!r(f.sort(),e.sort()))return!1;for(i in n)if(!r(n[i],
t[i]))return!1;return!0}return!1}function f(t){if(!t||typeof t!="string")throw"uri must be valid";
n=n||i("<div><\/div>").hide().appendTo("body");n.empty();return i("<iframe><\/iframe>").
appendTo(n).attr({src:t})}var n;t.Namespace.define("Shell.Utilities",{deepEquals:
r,download:f})}(),function(){function n(t){if(!t)return Math.floor(Math.random()*
16).toString(16);for(var r="",i=0;i<t;i++)r+=n();return r}function i(){var t=(128+
Math.floor(Math.random()*64)).toString(16);return n(8)+"-"+n(4)+"-4"+n(3)+"-"+t+
n(2)+"-"+n(12)}t.Namespace.define("Shell.Utilities",{newGuid:i})}(),function(){function r(
){return n}var n=i("input[name=__RequestVerificationToken]").val();n&&i.ajaxPrefilter(
function(t,i,r){r.setRequestHeader("x-ms-client-antiforgery-id",n)});t.Namespace.
define("Shell.Utilities",{getAntiForgeryId:r})}()}(this,Shell,jQuery),function(n,
t,i,r){"use strict";var u;u=t.Class.define(function(n){this._parse(n)},{_parameters:
null,_parse:function(t){var i,r,f,u;if(this._parameters=[],t&&t.replace(/\s/g,"").
length&&(t[0]==="?"&&(t=t.substr(1)),t))for(u=t.split("&"),r=0,f=u.length;r<f;r++)
i=u[r].split("="),this._parameters.push({key:n.decodeURIComponent(i[0]),value:i.
length>1?n.decodeURIComponent(i[1]):""})},_findParameterIndex:function(t){var i,
r;for(t=n.decodeURIComponent(t).toLowerCase(),i=0,r=this._parameters.length;i<r;
i++)if(this._parameters[i].key.toLowerCase()===t)return i;return-1},_setValue:function(
t,i){var u;if(!t)throw"Key cannot be null nor empty.";if(i===null||i===r)throw"Value cannot be null. To remove a key use remove method.";
u=this._findParameterIndex(t);u>=0?this._parameters[u].value=n.decodeURIComponent(
i):this._parameters.push({key:n.decodeURIComponent(t),value:n.decodeURIComponent(
i)})},getParameters:function(){return i.merge([],this._parameters)},getValue:function(
n,t){var i=this._findParameterIndex(n);return i>=0?this._parameters[i].value:t},
set:function(n){for(var t in n)this._setValue(t,n[t]);return this},remove:function(
){var t=this,n;return i.each(i.makeArray(arguments),function(){n=t._findParameterIndex(
this);n>=0&&t._parameters.splice(n,1)}),this},containsKey:function(n){return this.
_findParameterIndex(n)>=0},toString:function(t){var r=t?"?":"",u="{0}={1}";return r+
i.map(this._parameters,function(t){return u.format(n.encodeURIComponent(t.key),n.
encodeURIComponent(t.value))}).join("&")}});t.Namespace.define("Shell.Utilities",
{QueryStringBuilder:u})}(this,Shell,jQuery),function(n,t){"use strict";var i,v,c,
l,y,p,u,f,e,r,o,s,h,a;i=n.Class.define(function(){},{_children:[],getLinkIdPrefix:
function(){return i._linkIdPrefix},setChildren:function(n){this._children=n},parse:
function(n){return this._parseInternal(n,!1)},parseTextOnly:function(n){return this.
_parseInternal(n,!0)},_parseInternal:function(i,r){for(var e=[],h="",o=i||"",f,c,
u,s,l;;){for(u=0;u<this._children.length;u++)e[u]===t&&(e[u]=this._children[u]._match(
o)),e[u]&&(!f||e[u].index<f.index)&&(f=e[u],c=this._children[u]);if(l=f?f.index:
o.length,h+=r?o.substring(0,l):n.Utilities.htmlEncode(o.substring(0,l)),!f)break;
for(h+=r?c._getTextOutput(f):c._getOutput(f),s=f.index+f[0].length,o=o.substring(
s),u=0;u<this._children.length;u++)e[u]&&(e[u].index<s?e[u]=t:e[u].index-=s);f=t}
return h},_match:function(){return null},_getOutput:function(){},_getTextOutput:
function(){}},{_linkIdPrefix:"__fxshell-link-id-"});v=n.Class.derive(i,function(
){},{_match:function(n){var t=new RegExp("\\[([^|\\[\\]]+?(?:\\|[^|\\[\\]]+?){1,3})\\]");
return t.exec(n)},_getOutput:function(t){var r=t[1].split("|"),f,u;return u='<a id="'+
n.Utilities.attributeEncode(i._linkIdPrefix+r[0]),f=r.length>=3?n.Utilities.attributeEncode(
encodeURI(r[2])):"#",u+='" href="'+f+'"',u+=r.length>=4?' target="'+n.Utilities.
attributeEncode(r[3])+'">':">",u+=this.parse(r[1]),u+"<\/a>"},_getTextOutput:function(
n){var t=n[1].split("|");return this.parseTextOnly(t[1])}});c=n.Class.derive(i,function(
){},{_match:function(n){var t=new RegExp("__(([^_]+)|([^_]*_[^_]*)*?)__");return t.
exec(n)},_getOutput:function(n){var t="<strong>";return t+=this.parse(n[1]),t+"<\/strong>"}
,_getTextOutput:function(n){return this.parseTextOnly(n[1])}});l=n.Class.derive(
i,function(){},{_match:function(n){var t=new RegExp("\\'\\'(([^\\']+)|([^\\']*\\'[^\\']*)*?)\\'\\'");
return t.exec(n)},_getOutput:function(n){var t="<em>";return t+=this.parse(n[1]),
t+"<\/em>"},_getTextOutput:function(n){return this.parseTextOnly(n[1])}});y=n.Class.
derive(i,function(){},{_match:function(n){return/%%%/.exec(n)},_getOutput:function(
){return"<br />"},_getTextOutput:function(){return"\n"}});u=new c;f=new l;e=new v;
r=new y;o=new i;e.setChildren([u,f]);u.setChildren([r,e,f]);f.setChildren([r,e,u]);
o.setChildren([u,f,e,r]);s=new c;h=new l;a=new i;s.setChildren([r,h]);h.setChildren(
[r,s]);a.setChildren([s,h,r]);p={create:function(n,t){return t?a.parse(n):o.parse(
n)},getLinkIdPrefix:function(){return o.getLinkIdPrefix()},getText:function(n){return o.
parseTextOnly(n)}};n.Namespace.define("Shell.Utilities.SafeMarkup",p)}(Shell),function(
n,t,i){"use strict";t.bindingHandlers.activateWidget={init:function(t,i,r){var u=
i(),f=r()["fxcontrol-options"]||{};n(t)[u](f)},update:function(){}};t.bindingHandlers.
safeMarkup={init:function(r,u,f){var e=t.utils.unwrapObservable(u()),o=f()["safeMarkup-options"]||
{};n(r).html(i.Shell.Utilities.SafeMarkup.create(e,o.disableLinks))},update:function(
r,u,f){var e=t.utils.unwrapObservable(u()),o=f()["safeMarkup-options"]||{};n(r).
html(i.Shell.Utilities.SafeMarkup.create(e,o.disableLinks))}};t.extenders.validateEnum=
function(n,i){var r,u;for(r in i)if(i.hasOwnProperty(r))break;return u=t.computed(
{read:n,write:function(t){var f=n(),u=t in i?t:r;u!==f&&n(u)}}),u(n()),u}}(jQuery,
ko,this),function(n,t){"use strict";function e(){return i.accountUrl}function o(
){return i.applicationRoot}function s(){return i.developmentMode}function h(){return i.
isOnPremMode}function c(){return i.isAdminMode}function l(){return i.navigationLinks}
function a(){return i.portalVersion}function v(){return i.userEmailAddress}function y(
){return i.userAccountType}function p(){return i.userFirstName}function w(){return!!i.
userIsFisma}function b(){return i.branding}function k(){return i.enableHelpDrawer}
function d(){return i.signOutLink}function g(){return i.feedbackLink}function nt(
){return i.isTelemetryEventDisabled}function tt(){if(!r&&(r={},i.betaFeatures))for(
var n=0;n<i.betaFeatures.length;n++)r[i.betaFeatures[n].extensionName]=i.betaFeatures[
n].featureName;return r}function it(){return i.betaSignUpUrl}function rt(){return i.
productionPortalUrl}function ut(){return i.pageRequestId}function ft(){return u||
(u=new t.Utilities.QueryStringBuilder(i.queryString)),u}function et(){return i.enableCustomerSupport}
function ot(){return i.customerSupportLanguages||[]}function st(){return f||(f=n.
JSON.parse(i.extensionSettings)),f}var i={},u,r,f;n.environment&&(i=n.environment);
t.Namespace.define("Shell.Environment",{getCustomParameters:ft,getApplicationRoot:
o,getDevelopmentMode:s,getIsOnPremMode:h,getIsAdminMode:c,getNavigationLinks:l,getPortalVersion:
a,getUserEmailAddress:v,getUserAccountType:y,getUserFirstName:p,getUserIsFisma:w,
getEnableHelpDrawer:k,getBranding:b,getSignOutLink:d,getFeedbackLink:g,getIsTelemetryEventDisabled:
nt,getBetaFeatures:tt,getBetaSignUpUrl:it,getAccountUrl:e,getProductionPortalUrl:
rt,getPageRequestId:ut,getCustomerSupportEnabled:et,getCustomerSupportLanguages:
ot,getExtensionSettings:st})}(this,Shell),function(n,t,i){"use strict";var e,f,o,
u,s={},r={},v=function(n){var t,r,e,u,f,i;s={};for(t in n)if(n.hasOwnProperty(t))
{for(r=t.split("_"),e=r.length,i=s,f=0;f<e-1;f++){if(u=r[f],!u)throw"resource key '"+
t+"' is not in the correct format";i=i[u]=i[u]||{}}i[r[e-1]]=n[t]}},c=function(n,
r){var s,h,c;for(n||(n=(t.fx||{}).environment||{}),e=n.contentUrlBasePath,f=n.contentVersionToken,
o=n.uxFxImageRoot,u=n.versionedContentRoots,e||(e="/"),u||(u=[]),f||(f=""),o||(o=
"/Content/Images"),h=0;h<u.length;h++)s=u[h].toLowerCase(),s.charAt(0)==="/"&&(s=
s.substr(1)),u[h]=s;i&&(r=r||i.getResources("fx"),c=i.getResources("fx.culture")||
{},c.formats&&t.Date.setLocaleValues&&t.Date.setLocaleValues(c.formats));r=r||{};
v(r)},y=function(t){if(!t)throw"Control must be specified";for(var u=t.split("."),
f,i=s,r=0;r<u.length;r++)if(f=u[r],i=i[f],!i)throw"Control "+t+" is not recognized";
return n.extend(!0,{},i)},l=function(n){return n.indexOf("://")!==-1||n.charAt(0)===
"/"&&n.charAt(1)==="/"},h=function(){for(var r=arguments.length,n,t="",i=0;i<r;i++)
n=arguments[i],n&&(t!==""&&(n.charAt(0)==="/"&&(n=n.substr(1)),t+="/"),i!==r-1&&
n.charAt(n.length-1)==="/"&&(n=n.substr(0,n.length-1)),t+=n);return l(t)||t.charAt(
0)==="/"||(t="/"+t),t},w=function(n){return h(o,n)},a=function(n){var i,r,t,o;if(
n=n||"",!l(n)){if(f!==""){for(n.charAt(0)==="/"&&(n=n.substr(1)),i=n.toLowerCase(
),r=0;r<u.length;r++)if(t=u[r],i.indexOf(t)===0&&(i.length===t.length||i.charAt(
t.length)==="/")){o=t;break}o&&(n=h(n.substr(0,o.length),f,n.substr(o.length)))}
n=h(e,n)}return n},p=function(n){if(!n)throw"Control must be specified";var t=r[
n];if(!t)throw"Control "+n+" is not recognized";return t()};c();r["fx.fxBalloonIcon"]=
function(){return{icon:"dlwux-icon-help",iconHover:"dlwux-icon-help-hvr"}};r["fx.fxCheckBox"]=
function(){return{checked:"dlwux-icon-checkbox-checked-16",unchecked:"dlwux-icon-checkbox-unchecked-16",
checkedDisabled:"dlwux-icon-checkbox-checked-disabled-16",uncheckedDisabled:"dlwux-icon-checkbox-unchecked-disabled-16",
editedChecked:"dlwux-icon-checkbox-edited-checked-16",editedUnchecked:"dlwux-icon-checkbox-edited-unchecked-16",
editedCheckedDisabled:"dlwux-icon-checkbox-edited-checked-disabled-16",editedUncheckedDisabled:
"dlwux-icon-checkbox-edited-unchecked-disabled-16"}};r["fx.fxDialog"]=function()
{return{close:"dlwux-fx-dialog-close",closeHover:"dlwux-fx-dialog-close-hover",ok:
"dlwux-fx-dialog-ok",okHover:"dlwux-fx-dialog-ok-hover"}};r["fx.fxDropdown"]=function(
){return{arrow:"dlwux-fx-dropdown-arrow",arrowHover:"dlwux-fx-dropdown-arrow-hover"}}
;r["fx.fxGrid"]=function(){return{expanded:"dlwux-sprite-triangle-expanded",collapsed:
"dlwux-sprite-triangle-collapsed",ascending:"dlwux-icon-sort-up",descending:"dlwux-icon-sort-down",
filter:"dlwux-icon-search"}};r["fx.fxUpload"]=function(){return{icon:"dlwux-fx-upload-icon",
iconHover:"dlwux-fx-upload-icon-hover"}};r["fx.fxCopyButton"]=function(){return{
swf:a("Content/_oss/ZeroClipboard10.swf")}};r["fx.fxPager"]=function(){return{previous:
"dlwux-pager-arrow-left",next:"dlwux-pager-arrow-right"}};r["fx.fxTreeView"]=function(
){return{expanded:"dlwux-icon-chevron-expanded",collapsed:"dlwux-icon-chevron-collapsed"}}
;r["fx.fxTristateCheckBox"]=function(){return{checked:"dlwux-icon-checkbox-checked-16",
indeterminate:"dlwux-icon-checkbox-indeterminate-16",unchecked:"dlwux-icon-checkbox-unchecked-16",
checkedDisabled:"dlwux-icon-checkbox-checked-disabled-16",indeterminateDisabled:
"dlwux-icon-checkbox-indeterminate-disabled-16",uncheckedDisabled:"dlwux-icon-checkbox-unchecked-disabled-16",
editedChecked:"dlwux-icon-checkbox-edited-checked-16",editedIndeterminate:"dlwux-icon-checkbox-edited-indeterminate-16",
editedUnchecked:"dlwux-icon-checkbox-edited-unchecked-16",editedCheckedDisabled:
"dlwux-icon-checkbox-edited-checked-disabled-16",editedIndeterminateDisabled:"dlwux-icon-checkbox-edited-indeterminate-disabled-16",
editedUncheckedDisabled:"dlwux-icon-checkbox-edited-unchecked-disabled-16"}};r["fx.fxUpload"]=
function(){return{icon:"dlwux-fx-upload-icon",iconHover:"dlwux-fx-upload-icon-hover"}}
;r["fxs.fxsDialog"]=function(){return{complete:"dlwux-button-complete",close:"dlwux-icon-closex-10-g-idl"}}
;r["fxs.fxsDrawerProgress"]=function(){return{collapse:"dlwux-icon-drawer-chevron-collapse",
dismiss:"dlwux-icon-drawer-dismissall"}};r["fxs.fxsHeaderBar"]=function(){return{
expanderExpandImageUrl:"dlwux-fxs-headerbar-chevron-down",expanderCollapseImageUrl:
"dlwux-fxs-headerbar-chevron-up"}};r["fxs.fxsNotification"]=function(){return{back:
"dlwux-icon-progress-back-arrow",information:"dlwux-icon-drawer-information",warning:
"dlwux-icon-drawer-warning",error:"dlwux-icon-drawer-error",details:"dlwux-icon-behavior-details"}}
;r["fxs.fxsProgressBox"]=function(){return{back:"dlwux-icon-progress-back-arrow",
active:"dlwux-icon-drawer-processing-active",success:"dlwux-icon-progress-complete",
warning:"dlwux-icon-drawer-warning",error:"dlwux-icon-drawer-error",stepActive:"dlwux-icon-progress-inprogress",
stepSuccess:"dlwux-icon-progress-complete",stepWarning:"dlwux-icon-progress-warning",
stepError:"dlwux-icon-progress-error",stepDetails:"dlwux-icon-progress-forward-arrow",
details:"dlwux-icon-behavior-details"}};r["fxs.fxsWizard"]=function(){return{previous:
"dlwux-button-previous",next:"dlwux-button-next",complete:"dlwux-button-complete",
close:"dlwux-icon-closex-10-g-idl"}};r["fxs.fxsCopyButton"]=function(){return{initial:
"dlwux-icon-copy",hover:"dlwux-icon-copy-hover",active:"dlwux-icon-copy-hover"}}
;r["fxs.fxsDrawer"]=function(){return{taskBar:r["fxs.fxsDrawerTaskbar"](),menu:r[
"fxs.fxsDrawerMenu"](),progress:r["fxs.fxsDrawerProgress"](),drawerHelp:r["fxs.fxsDrawerHelp"](
)}};r["fxs.fxsDrawerHelp"]=function(){return{closeButton:"dlwux-icons-action-32-sprites"}}
;r["fxs.fxsMenu"]=function(){return{popOutIcon:"dlwux-popout-icon"}};r["fxs.fxsDrawerMenu"]=
function(){return{closeButton:"dlwux-icons-action-32-sprites",okButton:"dlwux-icons-action-32-sprites"}}
;r["fxs.fxsDrawerTaskbar"]=function(){return{newButton:"dlwux-icon-drawer-add",help:
"dlwux-icon-drawer-help",tray:r["fxs.fxsDrawerTray"]()}};r["fxs.fxsDrawerTray"]=
function(){return{information:"dlwux-icon-drawer-information",warning:"dlwux-icon-drawer-warning",
error:"dlwux-icon-drawer-error",progress_active:"dlwux-icon-drawer-processing-active",
progress_error:"dlwux-icon-drawer-processing-error",progress_completed:"dlwux-icon-drawer-processing",
progress_activeWithError:"dlwux-icon-drawer-processing-active-error"}};r["fxs.fxsSubscriptionPicker"]=
function(){return{checkbox:{checked:"dlwux-icon-white-checkbox-checked-14",indeterminate:
"dlwux-icon-white-checkbox-indeterminate-14",unchecked:"dlwux-icon-white-checkbox-unchecked-14",
editedChecked:"dlwux-icon-white-checkbox-checked-14",editedIndeterminate:"dlwux-icon-white-checkbox-indeterminate-14",
editedUnchecked:"dlwux-icon-white-checkbox-unchecked-14"},filter_off:"dlwux-fxs.subscriptionpicker.filter-off",
filter_on:"dlwux-fxs.subscriptionpicker.filter-on",search_off:"dlwux-fxs.subscriptionpicker.search-off",
applySpinner:"dlwux-fxs.subscriptionpicker.apply-spinner"}};n.extend(!0,t,{fx:{resources:
{getContentUrl:a,getStrings:y,getClasses:p,initialize:c,oneTransparentPixel:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="}}})}
(jQuery,this,this.Resources),function(n,t,i){"use strict";var u=function(n){var t=
(n||"").toUpperCase();return t==="TRUE"?!0:t==="FALSE"?!1:/^-?\d*\.?\d*?$/.test(
n)?+n:n},f=/-([a-z]|[0-9])/ig,e=function(n,t){return(t+"").toUpperCase()},o=function(
n){return n.replace(f,e)},s=function(t){if(t===i||t===null)return"";var r=n("<div />");
return r.text(t).html()},h=function(n,t,r,f){for(var h={},v=new RegExp("^"+t.replace(
"-","\\-")+"\\-(.+)$"),c=n.attributes||[],s,l,e=0,a=c.length;e<a;e++)s=c[e].nodeName.
match(v),s&&(l=u(c[e].nodeValue),(r===i||r)&&(h[o(s[1])]=l),f&&(h[s[1]]=l));return h}
,r=2e3,c=function(n){return parseInt(n,10)===r?n:r+=3},l=function(n,t,i){n=n||"";
var f=new RegExp("([?&])"+t+"=.*?(&|$)","i"),u=n.indexOf("#"),r=u>=0?n.substr(0,
u):n,o=u>=0?n.substr(u):"",e;return(r.split("/").length===3&&(r+="/"),t=encodeURIComponent(
t),i=encodeURIComponent(i),r)?(e=r.indexOf("?")!==-1?"&":"?",r=r.match(f)?r.replace(
f,"$1"+t+"="+i+"$2"):r+e+t+"="+i,r+o):null},a=function(n,i){var e=n.tagName,r,u,
f;switch(e){case"TABLE":r="tr";break;case"TR":r="td";break;case"UL":r="li";break
default:r="span"}i&&(f=n.getAttribute("aria-live"),n.setAttribute("aria-live","assertive"));
u=t.document.createElement(r);n.appendChild(u);n.removeChild(u);i&&(f?n.setAttribute(
"aria-live",f):n.removeAttribute("aria-live"))};n.extend(!0,t,{fx:{utilities:{attributesToObject:
h,getNextZIndex:c,getUrlWithQueryStringParameter:l,htmlEncode:s,forceRead:a}}})}
(jQuery,this),function(n){"use strict";function t(){return n.Utilities.newGuid().
replace(/-/g,"_")}n.Namespace.define("Shell.Internal",{Rpc:{OperationType:{OneWay:
1,AsyncRequestResponse:2,AsyncDuplex:3,AsyncDuplexEnd:4},PromiseOperationType:{Complete:
1,Error:2,Progress:3},generateID:t}})}(Shell),function(n){"use strict";function u(
n,t){if(typeof n=="string"){var r=n.split("."),i,u,f;if(r.length>=1&&r[0].length>
0){for(i=t,u=1;u<r.length;u++)if(f=r[u],i!==null&&typeof i=="object"&&f in i)i=i[
f];else return null;if(typeof i=="function")return i}}return null}function f(i){
try{var r=JSON.parse(i);switch(r.verb){case n.Internal.Rpc.OperationType.OneWay:
e(r);break;case n.Internal.Rpc.OperationType.AsyncRequestResponse:o(r);break;case
n.Internal.Rpc.OperationType.AsyncDuplex:s(r);break;default:throw"RpcServer: Unknown Rpc method";
}}catch(u){t(u)}}function i(t){n.Internal.Rpc.RpcClient.rpcClientReceiveFromPostMessageTransport(
JSON.stringify(t))}function e(n){var i=u(n.funcName,r);if(i)try{i.apply(this,n.args)}
catch(f){t(f)}}function o(n){var f=u(n.funcName,r),e,i;if(f)try{e=h(n.callbackRef);
i=n.args;i.unshift(e);f.apply(this,i)}catch(o){t(o)}}function s(n){var f=u(n.funcName,
r),e,i;if(f)try{e=c(n.callbackRef);i=n.args;i.unshift(e);f.apply(this,i)}catch(o)
{t(o)}}function h(t){var r=t.indexOf("rpc_otc_prom")!==-1;return r?function(){function r(
r,u){var f={verb:n.Internal.Rpc.OperationType.AsyncRequestResponse,callbackRef:t,
result:{type:r,data:u}};i(f)}return{complete:function(t){r(n.Internal.Rpc.PromiseOperationType.
Complete,t)},error:function(t){r(n.Internal.Rpc.PromiseOperationType.Error,t)},progress:
function(t){r(n.Internal.Rpc.PromiseOperationType.Progress,t)}}}():function(r){var
u={verb:n.Internal.Rpc.OperationType.AsyncRequestResponse,callbackRef:t,result:r};
i(u)}}function c(t){return{invokeCallback:function(r){var u={verb:n.Internal.Rpc.
OperationType.AsyncDuplex,callbackRef:t,result:r};i(u)},releaseCallback:function(
){var r={verb:n.Internal.Rpc.OperationType.AsyncDuplexEnd,callbackRef:t};i(r)}}}
var t=function(){var t=n.exists("Diagnostics.Log.writeEntry");return t?function(
i){var r=i&&i.toString();try{t("Shell.Internal.RpcServer",r,n.Diagnostics.LogEntryLevel.
error)}catch(u){}}:function(){}}(),r=n.Namespace.define("Impl");n.Namespace.defineWithParent(
n,"Internal.Rpc",{RpcServer:{rpcServerReceiveFromPostMessageTransport:f}})}(Shell),
function(n){"use strict";function r(t){n.Internal.Rpc.RpcServer.rpcServerReceiveFromPostMessageTransport(
JSON.stringify(t))}function f(t){try{var i=JSON.parse(t);switch(i.verb){case n.Internal.
Rpc.OperationType.AsyncRequestResponse:case n.Internal.Rpc.OperationType.AsyncDuplex:
e(i);break;case n.Internal.Rpc.OperationType.AsyncDuplexEnd:o(i);break;default:throw"RpcClient: Unknown Rpc method";
}}catch(r){n.Diagnostics.Log.writeEntry("Shell.Internal.RpcClient",r.toString(),
n.Diagnostics.LogEntryLevel.error);throw r;}}function e(r){switch(r.verb){case n.
Internal.Rpc.OperationType.AsyncRequestResponse:i.invokeCallbackByIdAndRelease(r.
callbackRef,r.result);break;case n.Internal.Rpc.OperationType.AsyncDuplex:t.invokeCallbackById(
r.callbackRef,r.result)}}function o(n){t.releaseCallbackById(n.callbackRef)}function u(
t,u,f,e){var o=i.registerCallback(u,f),s={verb:n.Internal.Rpc.OperationType.AsyncRequestResponse,
funcName:t,args:e,callbackRef:o};r(s)}function s(t){var i=[].slice.call(arguments),
u;i.splice(0,1);u={verb:n.Internal.Rpc.OperationType.OneWay,funcName:t,args:i};r(
u)}function h(n,t){var i=[].slice.call(arguments);i.splice(0,1);u(n,t,!1,i)}function c(
t){var i=[].slice.call(arguments);return i.splice(0,1),new n.Promise(function(r,
f,e){var o=function(t){switch(t.type){case n.Internal.Rpc.PromiseOperationType.Complete:
r(t.data);break;case n.Internal.Rpc.PromiseOperationType.Error:f(t.data);break;case
n.Internal.Rpc.PromiseOperationType.Progress:e(t.data)}};u(t,o,!0,i)})}function l(
i,u){var o=t.registerCallback(u),f=[].slice.call(arguments),e;f.splice(0,2);e={verb:
n.Internal.Rpc.OperationType.AsyncDuplex,funcName:i,args:f,callbackRef:o};r(e)}var
i,t;i=function(){function i(i,r){if(typeof i!="function")throw"userCallback must be a function";
if(typeof r!="boolean")throw"isPromiseProxy must be a boolean";var u="rpc_otc_"+
(r?"prom":"cb")+"_"+n.Internal.Rpc.generateID();return t[u]=i,u}function r(n,i){
if(n in t){var r=t[n];delete t[n];r.call(this,i)}else throw"Callback callbackId could not be found";
}var t={};return{registerCallback:i,invokeCallbackByIdAndRelease:r}}();t=function(
){function i(i){if(typeof i!="function")throw"userCallback must be a function";var
r="rpc_lsc_"+n.Internal.Rpc.generateID();return t[r]=i,r}function r(n,i){if(n in
t){var r=t[n];r.call(this,i)}else throw"Callback callbackId could not be found";
}function u(n){n in t&&delete t[n]}var t={};return{registerCallback:i,invokeCallbackById:
r,releaseCallbackById:u}}();n.Namespace.defineWithParent(n,"Internal.Rpc",{RpcClient:
{rpcInvokeOneWay:s,rpcInvokeRequestResponse:h,rpcInvokeRequestResponseWithPromise:
c,rpcInvokeDuplex:l,rpcClientReceiveFromPostMessageTransport:f}})}(Shell),function(
n,t,i){"use strict";function s(n,t){if(typeof n!="string"||!/^([A-Za-z0-9_-])*$/.
test(n))throw t+" must be a string containing letters, numbers, underscore or dash.";
}function c(n,t,i){var r=u[n.source];r&&(r.lastMessage=t,r.timeStamp=i.timeStamp,
r.messageEvent=i)}var o="__FXCOMMUNICATION__",u={},h=function(n,t){return t.source===
i.parent?!0:u[n.source]&&u[n.source].origin===t.origin?!0:!1},r=null,f,e;f=function(
t){var r={data:n.Callbacks(),error:n.Callbacks(),relay:n.Callbacks()},f=this,u={
},s=function(n){var u=n.data,s,i,e;if(typeof u=="string"&&u.substr(0,o.length)===
o)u=u.substr(o.length);else return;s=u.indexOf("}")+1;i=JSON.parse(u.substr(0,s));
e=u.substr(s);i.destination!==""&&i.destination!==t?r.relay.fireWith(f,[i,e,n]):
h(i,n)?r.data.fireWith(f,[i,e,n]):i.protocol==="REGISTER"?r.data.fireWith(f,[i,e,
n]):r.error.fireWith(f,[i,e,n])},c=!1;this.destroy=function(){i.removeEventListener?
i.removeEventListener("message",s,!1):i.detachEvent("onmessage",s)};this.on=function(
n,t){if(!r[n])throw"This event name is not supported";r[n].add(t)};this.off=function(
n,t){if(!r[n])throw"This event name is not supported";r[n].remove(t)};this.bind=
function(t,i){var r=u[t]=u[t]||n.Callbacks();r.add(i)};this.unbind=function(n,t)
{u[n]&&u[n].remove(t)};this.getChannelName=function(){return t};this.register=function(
){if(!c){c=!0;var n=new e("");n._setHandle(i);n.send("REGISTER");i.parent!=i&&(n=
new e(""),n.send("REGISTER"))}};this.isRegistered=function(){return c};this.on("data",
function(n){u[n.protocol]&&u[n.protocol].fireWith(this,[].slice.call(arguments))}
);i.addEventListener?i.addEventListener("message",s,!1):i.attachEvent("onmessage",
s)};f.create=function(n,t){if(r)throw"You can create only one server listener.";
s(n,"channelName");r=new f(n,t);r.on("relay",function(n,t,r){var f;if(i.parent==
i&&!u[n.destination])throw"The destination is not found.";f=new e(n.destination);
f._setSource(n.source);f._sendRaw(r.data)});r.bind("REGISTER",function(n,t,i){var
r;n.source in u&&!h(n,i)||(r=u[n.source]={},r.handle=i.source,r.origin=i.origin)}
);r.bind("REGISTER",function(n,t,r){var u;i.parent!=i&&r.source!=i&&(u=new e(n.destination),
u._setSource(n.source),u._sendRaw(r.data))});r.on("data",function(n,t,i){c(t,i)}
);return r};f.destroy=function(){r&&(u={},r.destroy(),r=null)};f.getReceiver=function(
){return r};e=function(n){var t=i.parent,f;if(s(n,"destination"),!r||!r.isRegistered(
))throw"You must setup a server listener to talk with someone.";f=r.getChannelName(
);u[n]&&(t=u[n].handle);this.send=function(t,i){var u={source:f,destination:n,protocol:
t},r;s(t,"protocol");i=i||"";r=JSON.stringify(u)+i;this._sendRaw(o+r)};this._setSource=
function(n){f=n};this._setHandle=function(n){t=n};this._sendRaw=function(n){try{
t.postMessage(n,"*")}catch(r){if(r&&typeof r.message=="string"&&r.message.trim()===
"Operation aborted")i.console&&i.console.error&&i.console.error("An error occurred when using postMessage. This is most likely due to an IE10 bug. Please refer to the documentation how to fix this.")
else throw r;}}};t.Namespace.defineWithParent(Shell,"Communication",{Receiver:f,
Sender:e})}(jQuery,Shell,this),function(n,t,i){"use strict";function l(){this.canHandleReplacer=
function(){return!1};this.canHandleReviver=function(){return!1};this.handleReplacer=
function(n){return n};this.handleReviver=function(n){return n}}function o(n,t){for(
var u=r.length,i=0;i<u;i++)if(r[i][n](t))return r[i];return null}function s(n){var
t,i;for(t in n)n.hasOwnProperty(t)&&(i=o("canHandleReplacer",n[t]),i?n[t]=i.handleReplacer(
n[t]):typeof n[t]=="object"&&s(n[t]))}function h(t){return s(t),function(t,i){var
r;return typeof i=="function"?(r=f(),i.__guid=r,n.Communication.Receiver.getReceiver(
).addMethod(r,i,{hidden:!0}),{"##rpc_function##":r}):i}}function a(t,i){return function(
r,u){var e=o("canHandleReviver",u),f;return e?e.handleReviver(u):u&&u["##rpc_function##"]?
(f=function(){var i=new n.Communication.Sender(t),r=i.getMethod(u["##rpc_function##"]),
f=r.apply(null,[].slice.call(arguments));return i.close(),f},f.__guid=u["##rpc_function##"],
i[u["##rpc_function##"]]={release:!0,destination:t,temp:f},f):u}}function c(t){i.
clearTimeout(e);e=i.setTimeout(function(){var r={},i,u;for(i in t._releaseArguments)
t._releaseArguments.hasOwnProperty(i)&&t._releaseArguments[i].release&&(r[t._releaseArguments[
i].destination]||(r[t._releaseArguments[i].destination]=[]),r[t._releaseArguments[
i].destination].push(i),delete t._releaseArguments[i].temp.__guid,delete t._releaseArguments[
i]);for(i in r)r.hasOwnProperty(i)&&(u=new n.Communication.Sender(i),u.send("RPC_RELEASE",
JSON.stringify(r[i])),u.close())},1)}function v(t,i){var r=JSON.parse(i,a(t.source,
this._releaseArguments)),e=this._listeningMethods[r.method],u,f;if(!e)throw"Callback not found - "+
r.method;try{f={status:"done",value:e.callback.apply({receiver:this,channel:null},
r.args)}}catch(o){this.releaseArgument(r.args);f={status:"throw",exception:o}}r.
handle&&(u=new n.Communication.Sender(t.source),u.getMethod(r.handle).invokeAsync(
f),u.close());c(this)}function y(n,t){for(var r=JSON.parse(t),i=0;i<r.length;i++)
this.removeMethod(r[i]),delete r[i].__guid}function p(n,i,r){var u=t.Deferred();
i[r].done(function(n){i[r]=n;u.resolve()});n.push(u.promise())}function w(n,i){for(
var u=[],r=n.args.length-1;r>=0;r--)n.args[r]&&n.args[r]["##rpc_handle##"]&&u.push(
n.args[r]);return t.when.apply(this,u).done(function(){for(var u=[],r=n.args.length-
1;r>=0;r--)n.args[r]&&n.args[r]["##rpc_handle##"]&&p(u,n.args,r);t.when.apply(this,
u).done(function(){i.send("RPC",JSON.stringify(n,h(n)))})})}function b(i,r){var o=
f(),e=n.Communication.Receiver.getReceiver(),u=t.Deferred(),s=u.promise(),h=function(
){r._latestDeferred=u;e.addMethod(o,function(n){e.removeMethod(o);switch(n.status)
{case"done":u.resolveWith(this,[n.value]);break;case"throw":u.rejectWith(this,[n])}
},{hidden:!0});i.handle=o;w(i,r).fail(function(){u.rejectWith(this,[{status:"dependent"}])}
)};return s["##rpc_handle##"]=o,r._syncQueue=r._syncQueue.then(function(){return h(
),u},function(n){return n.status==="abort"?u.rejectWith(this,[{status:"abort"}]):
(h(),u)}),s.fail(function(){var n=function(i){for(var r in i)typeof i[r]=="object"?
n(i[r]):typeof i[r]=="function"&&i[r].__guid&&e.getMethodNames("hidden").indexOf(
i[r].__guid)>=0&&(e.removeMethod(i[r].__guid),e.addMethod(i[r].__guid,t.noop,{hidden:
!0}))};n(i.args)}),s}function u(n,t){if(typeof n=="function")n.__guid&&(this._releaseArguments[
n.__guid].release=t),n.__extra&&u.call(this,n.__extra,t);else for(var i in n)(typeof
n[i]=="object"||typeof n[i]=="function")&&u.call(this,n[i],t)}var f=function(){return n.
Utilities.newGuid().replace(/-/g,"_")},r=[],e=null;n.Communication.Receiver.prototype.
holdArgument=function(n){u.call(this,n,!1)};n.Communication.Receiver.prototype.releaseArgument=
function(n){u.call(this,n,!0);c(this)};n.Communication.Receiver.prototype.addMethod=
function(n,i,r){if(!n)throw"methodName must be defined.";if(!i)throw"Callback must be defined.";
this._listeningMethods||(this._releaseArguments=this._releaseArguments||[],this.
_listeningMethods={},this.bind("RPC",v),this.bind("RPC_RELEASE",y));this._listeningMethods[
n]={callback:i,options:t.extend({hidden:!1},r)}};n.Communication.Receiver.prototype.
removeMethod=function(n){delete this._listeningMethods[n]};n.Communication.Receiver.
prototype.getMethodNames=function(n){return n=n||"public",t.map(this._listeningMethods||
{},function(t,i){return n==="all"||n==="public"&&!t.options.hidden||n==="hidden"&&
t.options.hidden?i:null})};n.Communication.Sender.prototype.getMethod=function(n)
{var i=this,r={method:n},u;if(typeof n!="string"||!n)throw"You must provide a method name as a string.";
return u=function(){return i._latestDeferred=i._latestDeferred||t.Deferred(),i._syncQueue=
i._syncQueue||i._latestDeferred.resolve(),r.args=[].slice.call(arguments),b(r,i)}
,u.invokeAsync=function(){r.args=[].slice.call(arguments);i.send("RPC",JSON.stringify(
r,h(r)))},u};n.Communication.Sender.prototype.abort=function(){this._syncQueue&&
this._latestDeferred&&this._latestDeferred.rejectWith(this,[{status:"abort"}])};
n.Communication.Sender.prototype.close=function(){this._syncQueue=null;this._latestDeferred=
null};n.Namespace.defineWithParent(n,"Communication.Rpc",{JsonProcessor:l,addJsonProcessor:
function(n){r.push(n)},removeJsonProcessor:function(n){for(var t=0;t<r.length;t++)
if(r[t]===n){r.splice(t,1);break}}})}(Shell,jQuery,this),function(n,t,i){"use strict";
var f=new t.Communication.Rpc.JsonProcessor,e=new t.Communication.Rpc.JsonProcessor,
r=new t.Communication.Rpc.JsonProcessor,o=new t.Communication.Rpc.JsonProcessor,
u=new t.Communication.Rpc.JsonProcessor,s=new t.Communication.Rpc.JsonProcessor,
h=new t.Communication.Rpc.JsonProcessor,c=null;f.canHandleReplacer=function(n){return n&&
typeof n.toJSON=="function"};f.handleReplacer=function(n){return n};e.canHandleReplacer=
function(n){return n instanceof jQuery.Event};e.handleReplacer=function(){return"jQuery Event"}
;r.canHandleReplacer=function(n){return n instanceof Date};r.handleReplacer=function(
n){return{"##rpc_date##":n}};r.canHandleReviver=function(n){return n&&n["##rpc_date##"]}
;r.handleReviver=function(n){return new Date(n["##rpc_date##"])};o.canHandleReplacer=
function(n){return n&&typeof n.promise=="function"&&typeof n.done=="function"};o.
handleReplacer=function(n){if(!n["##rpc_processed"]){var r=n.fail,u=n.done,i=t.Communication.
Receiver.getReceiver();i&&(["always","done","fail","progress","then"].forEach(function(
t){var f=n[t];n[t]=function(){var n=arguments,t;return i.holdArgument(arguments),
t=f.apply(this,arguments),r(function(){i.releaseArgument(n)}),u(function(){i.releaseArgument(
n)}),t}}),n["##rpc_processed"]=!0)}return n};u.canHandleReplacer=function(n){return n
instanceof Error};u.handleReplacer=function(n){var t={"##rpc_error##":{}},i=t["##rpc_error##"];
return["name","message","stack","number","description"].forEach(function(t){i[t]=
n[t]}),i.type=n instanceof EvalError?"EvalError":n instanceof RangeError?"RangeError":
n instanceof ReferenceError?"ReferenceError":n instanceof SyntaxError?"SyntaxError":
n instanceof TypeError?"TypeError":n instanceof URIError?"URIError":"Error",t};u.
canHandleReviver=function(n){return n&&n["##rpc_error##"]};u.handleReviver=function(
n){var t=n["##rpc_error##"],r=t.type?new i[t.type](t.message):new Error(t.message);
return["name","stack","number","description"].forEach(function(n){r[n]=t[n]}),r}
;s.canHandleReviver=function(n){return n&&typeof n["##window_open_url##"]=="string"}
;s.handleReviver=function(n){var u=n["##window_open_url##"],f=n["##window_open_target##"]||
"_blank",e=n["##window_open_features##"]||"",t=n["##window_open_extra##"]||null,
r=function(){c=i.open(u,f,e);t&&t()};return r.__extra=t,r};h.canHandleReviver=function(
n){return n&&n["##chromeWebStoreInstall_url##"]};h.handleReviver=function(t){var
e=t["##chromeWebStoreInstall_url##"],r=t["##chromeWebStoreInstall_onSuccess##"]||
null,u=t["##chromeWebStoreInstall_onFailure##"]||null,f=t["##chromeWebStoreInstall_extra##"]||
null,o=function(){var o=n("<link />").attr({href:e,rel:"chrome-webstore-item"}).
appendTo("head"),t=function(){o.remove()};i.chrome.webstore.install(e,function()
{t();r&&r.apply(null,arguments)},function(){t();u&&u.apply(null,arguments)});f&&
f()};return o.__extra=[r,u,f],o};t.Namespace.define("Shell.Communication.Rpc.Functions",
{windowOpen:function(n,t,i,r){return typeof t=="function"?(r=t,t=null):typeof i==
"function"&&(r=i,i=null),{"##window_open_url##":n,"##window_open_target##":t||null,
"##window_open_features##":i||"","##window_open_extra##":r||null}},chromeWebStoreInstall:
function(n,t,i,r){return{"##chromeWebStoreInstall_url##":n,"##chromeWebStoreInstall_onSuccess##":
t,"##chromeWebStoreInstall_onFailure##":i,"##chromeWebStoreInstall_extra##":r}},
takeLastWindowOpened:function(){var n=c;return c=null,n}});t.Communication.Rpc.addJsonProcessor(
r);t.Communication.Rpc.addJsonProcessor(f);t.Communication.Rpc.addJsonProcessor(
e);t.Communication.Rpc.addJsonProcessor(o);t.Communication.Rpc.addJsonProcessor(
u);t.Communication.Rpc.addJsonProcessor(s);t.Communication.Rpc.addJsonProcessor(
h)}(jQuery,Shell,this),function(n,t){"use strict";function o(){return r?r:r=new t.
Communication.Sender("fx")}function i(t){return function(){var i=n.Deferred(),u=
[].slice.call(arguments),r=o();return r.getMethod(t).apply(r,[{complete:function(
n){i.resolve(n)},error:function(n){i.reject(n)}}].concat(u)),i.promise()}}function s(
n,t,r){return i("Impl.Configuration.getUserSettings")(n,t,r)}function u(n,t){return i(
"Impl.Configuration.updateUserSettings")(n,t)}function h(n){return i("Impl.Configuration.deleteUserSettings")(
n)}function c(n){return i("Impl.Configuration.deleteUserSettingsByPrefix")(n)}function l(
n){return i("Impl.Configuration.getLoadedUserSettings")(n)}function a(n,t){return i(
"Impl.Configuration.updateLoadedUserSettings")(n,t)}function v(n){return i("Impl.Configuration.deleteLoadedUserSettings")(
n)}function y(){return i("Impl.Configuration.initialize")()}function p(n,t){return n.
settings[0].value=t,u(n)}function f(n,t,i,r){return{store:n,type:t,subscriptionId:
i,settings:r}}function w(n,t,i,r,u,o){return f(n,t,i,[e(r,u,o)])}function e(n,t,
i){return{path:n,name:t,value:i}}var r;t.Namespace.define("Shell.Configuration",
{getUserSettings:s,updateUserSettings:u,deleteUserSettings:h,deleteUserSettingsByPrefix:
c,getLoadedUserSettings:l,updateLoadedUserSettings:a,deleteLoadedUserSettings:v,
initialize:y,updateUserSetting:p,createSingleUserSetting:w,createFullUserSettings:
f,createUserSetting:e})}(jQuery,Shell),function(n,t,i){"use strict";function f()
{return r?r:r=new i.Communication.Sender("fx")}function u(n){return function(){var
i=t.Deferred(),u=[].slice.call(arguments),r=f();return r.getMethod(n).apply(r,[{
complete:function(n){i.resolve(n)},error:function(n){i.reject(n)}}].concat(u)),i.
promise()}}var r;i.Namespace.define("Shell.Configuration.ViewSettings",{getViewSettings:
function(n,t){return u("Impl.Configuration.ViewSettings.getViewSettings")(n,t)},
updateViewSetting:function(n,t,i,r){return u("Impl.Configuration.ViewSettings.updateViewSetting")(
n,t,i,r)},Path:{perType:"###PER_TYPE###",perInstance:"###PER_INSTANCE###"}})}(this,
jQuery,Shell),function(n,t){"use strict";var r=["refreshStart","refreshSuccess",
"refreshError"],i={paging:"setPaging",sort:"setSort",filter:"setFilter"},u=function(
t){this._paging={skip:0};this._sort=null;this._filter=null;this.refreshError=null;
this.partialRefreshErrors=[];this.refreshPromise=null;this.isReset=!0;this.items=
[];this.filteredTotalCount=null;this.totalCount=null;var u=this;t&&(n.each(r,function(
i,r){if(t[r])n(u).on(r,t[r])}),n.each(i,function(n){t[n]&&u[i[n]](t[n])}))},f=t.
Class.define(u,{refreshError:null,partialRefreshErrors:null,refreshPromise:null,
isReset:!0,items:null,filteredTotalCount:null,totalCount:null,dataSetName:null,isQueryable:
!0,dispose:function(){this.items&&(this._dispose(),this.items=null)},refresh:function(
t){var i=this._startRefresh(!0),r=this.refreshPromise;return this._refresh(t).then(
n.proxy(i.resolve,i),n.proxy(i.reject,i)),r},reset:function(){n.observable(this).
setProperty({isReset:!0,refreshError:null,filteredTotalCount:null,totalCount:null});
n.observable(this.items).refresh([])},setSort:function(t){return this._verifyQueryable(
),t?(this._sort=n.isArray(t)?t:[t],n.each(this._sort,function(t){n.isFunction(t)||
n.extend({direction:"ascending"},t)})):this._sort=null,this},setPaging:function(
n){return this._verifyQueryable(),this._paging=n||{},this._paging.skip=this._paging.
skip||this._paging.skip===0?this._paging.skip:0,this},setFilter:function(n){return this.
_verifyQueryable(),this._filter=n?this._setFilter(this._normalizeFilter(n)):null,
this},_dispose:function(){},_isDisposed:function(){return this.items===null},_setFilter:
function(n){return n},_refresh:function(){throw"Not reachable";},_startRefresh:function(
t){var r=n.Deferred(),i=n.Deferred(),u=i.promise();return r.then(n.proxy(this._onRefreshSucceeded,
this,i),n.proxy(this._onRefreshFailed,this,i)),n.observable(this).setProperty("refreshPromise",
u),n(this).triggerHandler("refreshStart",{promise:u,isClientInitiated:t}),r},_onRefreshSucceeded:
function(t,i,r,u,f){this._isDisposed()||(t.promise()===this.refreshPromise&&n.observable(
this).setProperty("refreshPromise",null),this._establishNewSuccessState(i,r,u,f),
t.resolve(this.items,this.filteredTotalCount,this.totalCount,this.partialRefreshErrors),
n(this).triggerHandler("refreshSuccess"))},_onRefreshFailed:function(t,i,r,u){this.
_isDisposed()||(t.promise()===this.refreshPromise&&n.observable(this).setProperty(
"refreshPromise",null),n.observable(this).setProperty("refreshError",{jqXHR:i,statusText:
r,error:u}),t.reject(i,r,u),n(this).triggerHandler("refreshError"))},_establishNewSuccessState:
function(t,i,r,u){n.observable(this).setProperty({refreshError:null,isReset:!1});
t&&(n.observable(this.items).refresh(t),n.observable(this.partialRefreshErrors).
refresh(u||[]),n.observable(this).setProperty({filteredTotalCount:i,totalCount:r}))}
,_normalizeFilter:function(t){t=n.isArray(t)?t:[t];for(var u=[],i,r=0;r<t.length;
r++)i=t[r],i&&(n.isFunction(i)||(i.operator=i.operator||"=="),u.push(i));return u}
,_haveItem:function(t){return n.inArray(t,this.items)>=0},_verifyQueryable:function(
){if(!this.isQueryable)throw"This data source is not queryable.";}});t.Namespace.
define("Shell.Data",{DataSource:f})}(jQuery,Shell),function(n,t,i){"use strict";
function r(r,u,f){var e,s;if(typeof u=="function"?(e=u,u="[function]"):(e=r,i.each(
u.split("."),function(){return e=(e||n)[this],e?void 0:!1})),typeof e!="function")
{t.Diagnostics.Log.writeEntry("cdm.PartnerScriptNotFound","callPartnerScript: '{0}' for extension '{1}' not found.".
format(u,r.name),t.Diagnostics.LogEntryLevel.error);return}s=Array.prototype.slice.
call(arguments,null);s.splice(0,3);t.Diagnostics.Log.writeEntry("cdm.CallingPartnerScript",
"callPartnerScript: Calling '{0}' for extension '{1}'".format(u,r.name),t.Diagnostics.
LogEntryLevel.verbose);try{return e.apply(f||r||null,s)}catch(o){t.Diagnostics.Log.
writeEntry("cdm.ErrorExecutingPartnerScript","Error executing partner script '{0}' for extension '{1}': {2}".
format(u,r.name,o.message||o.Message||o),t.Diagnostics.LogEntryLevel.error);throw o;
}}t.Namespace.define("Shell.Internal",{callPartnerScript:r,initialize:function(i)
{return t.Diagnostics.Telemetry.timerStart("cdm.initializeStart"),t.Internal.ExtensionProviders.
load(!!i&&i.extensionProviders).then(function(){n.cdm._initialize()})},start:function(
n){var u,f,i;for(t.UI.Spinner.hide(),t.Diagnostics.Telemetry.timerStopAndLog("cdm.initializeStart",
"cdm.initialize total:"),u=0,f=t.extensions.length;u<f;u++)i=t.extensions[u],i.onApplicationStart&&
(t.Diagnostics.Telemetry.timerStart("cdm.initialize.onApplicationStart"),r(i,i.onApplicationStart,
i),t.Diagnostics.Telemetry.timerStopAndLog("cdm.initialize.onApplicationStart",i.
name+".onApplicationStart returned after"));n()}})}(this,Shell,jQuery),function(
n,t,i,r,u){"use strict";function l(){var n,t=f.data("config");t.no&&(n=t.no(o()));
(n===u||n)&&i.UI.Dialog.cancel()}function o(){var n={};return t("#aux-yesNoDialog input").
each(function(){n[this.name||this.id]=this.value||t(this).text()}),t("#aux-yesNoDialog select").
each(function(){var i=[];t(this).children("option").each(function(){this.selected&&
i.push(this.value)});n[this.name||this.id]=i}),n}function s(){t("#aux-yesNoDialogTemplate").
empty();var i=f.data("config");i&&!i.dataPolling&&n.Exp.Data.resumePolling();f.hideAlert(
);n.cdm.dialogActive=!1;f.dialog("close");e&&e.focus()}var f,h={dialogClass:"aux-dialog aux-yesNoDialog",
modal:!0,show:"fade",hide:"fade",resizable:!1},c=i.exists("Diagnostics.Telemetry.traceEvent",
t.noop),e;t(function(){f=t("#aux-yesNoDialog");f.on("keydown.dialog",function(n)
{if(n.which===t.ui.keyCode.ESCAPE)return l(),!1});t("#aux-yesNoDialog-yesButton").
bind("click.dialog",function(){var n,t=f.data("config");t.yes&&(n=t.yes(o()));(n===
u||n)&&i.UI.Dialog.ok()});t("#aux-yesNoDialog-noButton, #aux-yesNoDialog-close").
bind("click.dialog",function(){var n,t=f.data("config");t.no&&(n=t.no(o()));(n===
u||n)&&i.UI.Dialog.cancel()});t("#aux-messageDialog-okButton").bind("click.dialog",
function(){t("#aux-messageDialog").dialog("close")});t(".aux-messageDialog-close",
"#aux-messageDialog").bind("click.dialog",function(){t("#aux-messageDialog").dialog(
"close")});f.showAlert=function(n,t,r){if(typeof n!="string"){i.Diagnostics.Log.
writeEntry("Shell.UI.Dialog.TitleIsNotStringError","title is not a string",i.Diagnostics.
LogEntryLevel.error);return}if(typeof t!="string"){i.Diagnostics.Log.writeEntry(
"Shell.UI.Dialog.ContentIsNotStringError","content is not a string",i.Diagnostics.
LogEntryLevel.error);return}if(r){if(r.constructor!==Array){i.Diagnostics.Log.writeEntry(
"Shell.UI.Dialog.ActionsIsNotArrayError","actions is not an array",i.Diagnostics.
LogEntryLevel.error);return}if(r.length>3){i.Diagnostics.Log.writeEntry("Shell.UI.Dialog.ThreeActionsMaxError",
"actions can only contain 3 items",i.Diagnostics.LogEntryLevel.error);return}}var
u=f.dialog("widget");u?u.dialogalertbox({title:n,content:t,actions:r}).dialogalertbox(
"open"):i.Diagnostics.Log.writeEntry("Shell.UI.Dialog.NoDialogElementToShowAlert",
"Unable to find dialog to show the alert",i.Diagnostics.LogEntryLevel.error)};f.
hideAlert=function(){var n=f.dialog("widget");if(n){n.dialogalertbox("close");n.
on("dialogalertboxclose",function(){n.dialogalertbox("destroy")})}else i.Diagnostics.
Log.writeEntry("Shell.UI.Dialog.NoDialogElementToHideAlert","Unable to find dialog to hide the alert",
i.Diagnostics.LogEntryLevel.error)}});i.Namespace.define("Shell.UI",{Dialog:{open:
function(o){var l,s,a,v;if(o===u)throw"yesNoDialog: No paramerters supplied.";if(
!o.extension)throw"yesNoDialog: Required parameter config.extension wsa not supplied.";
if(!o.template)throw"yesNoDialog: Required parameter config.template was not supplied.";
return l=o.data||{},f.data("config",o),s=o.extension,typeof s=="string"&&(s=i.extensionIndex[
s]),o.dataPolling||n.Exp.Data.pausePolling(),e=n.document.activeElement,a=s.templates[
o.template],a?(i.Diagnostics.Log.writeEntry("Shell.UI.Dialog.RenderedYesNoDialog",
"Rendering yesNo dialog template '"+o.template+"' for extension '"+s.name+"'",i.
Diagnostics.LogEntryLevel.information),n.cdm._renderTemplate(t("#aux-yesNoDialogTemplate"),
a,l,s.templateHelpers)):(i.Diagnostics.Log.writeEntry("Shell.UI.Dialog.ErrorRenderingYesNoDialog",
"Error rendering yesNo dialog template '"+o.template+"' for extension '"+s.name+
"', the template has not been not loaded.",i.Diagnostics.LogEntryLevel.error),n.
cdm._renderTemplate(t("#aux-yesNoDialogTemplate"),"",l)),o.init&&o.init(l),v=t.extend(
{},h,o,{title:"",zIndex:r.getNextZIndex(),closeOnEscape:!1}),v.hideYes?t("#aux-yesNoDialog-yesButton").
hide():t("#aux-yesNoDialog-yesButton").show(),n.cdm.dialogActive=!0,f.dialog(v),
c("dialog",s.name,o.name),f},ok:function(){var r=f.data("config"),t=r.extension;
typeof t=="string"&&(t=i.extensionIndex[t]);t.navigationalViewModel&&n.Exp.Data.
expireData(t.navigationalViewModel.uri);s()},cancel:function(){s()}}})}(this,jQuery,
Shell,this.fx.utilities),function(n,t,i,r){"use strict";function w(){return y}function b(
n){if(!n)throw"message must be provided";l(n)}function k(){l(null)}function c(n)
{var t,i;if(typeof n=="string"?i=n:typeof n=="object"&&"name"in n&&(i=n.name),typeof
i!="string")throw"extension must be an extension name or an extension object";for(
t=0;t<u.length;t++)if(u[t].name===i)return $.observable(u[t]);return null}function d(
n){var i,f,r=c(n);if(r&&!r.data().isSelected)for(i=0;i<u.length;i++)f=u[i].name===
r.data().name,$.observable(u[i]).setProperty(t.UI.Navigation.WellKnownPropertyNames.
isSelected,f)}function l(t){t?(n.onbeforeunload=function(){return t},e=t,f=n.location.
hash):(n.onbeforeunload=null,e=null,f=null)}function g(){return v()}function nt(
n){var i=n;return typeof n=="object"&&(i=s(n)),new t.Promise(function(n,t){var r=
null;try{o(i)}catch(u){r=u}try{r?t(r):n()}catch(u){}})}function s(i){var r=i.extension,
f=i.type,a=i.name,u=i.view,h=i.dataContext,l=i.expandPath?!0:!1,o,c,s,e=null;if(
typeof r=="string"&&(r=t.extensionIndex[r]),o="#Workspaces/"+r.name+"/",n.Impl.UI.
Pivots.ensureExtensionPivotsInitialized(r),f){if(!u&&(l&&(u=n.Impl.UI.Pivots.getFirstPivotId(
r.id,f)),e=n.Exp.TypeRegistry.getDependencies(r.name,f),e&&h))for(s in e)h[e[s]]&&
(o+=s+"/"+h[e[s]]+"/");return!u&&l&&(u=r.getDefaultView&&typeof r.getDefaultView==
"function"?r.getDefaultView(f):"list"),c=o+f+"/"+a,u&&(c+="/"+u),c}return u||(u=
n.Impl.UI.Pivots.getFirstPivotId(r.id,f),u||(u=r.getDefaultView&&typeof r.getDefaultView==
"function"?r.getDefaultView(f):"list")),o+u}function a(n){return n?JSON.parse(JSON.
stringify(n)):r}function v(){var e=n.location.hash,t,h,o,c,f=[],i,s,u;if(!e||e===
"")return{};if(t=e.split("/"),h=t[1],t[2])if(t[2]==="list")o="list";else for(o="tab",
u=2;u<t.length;u+=2)t[u+1]?f.push({type:t[u],name:t[u+1]}):c=t[u];for(f.reverse(
);f.length>=1;)s=f.pop(),i={name:s.name,type:s.type,parent:a(i)||r};return{extension:
h,view:o,viewName:c,item:i,itemName:i?i.name:r,itemType:i?i.type:r}}function tt(
n,t,i,r){var u=v(),f=n?u.extension===n:!0,e=t?u.viewName===t:!0,o=i?u.itemName===
i:!0,s=r?u.itemType===r:!0;return f&&e&&o&&s}function it(t){var i,h,u,f,o,s,c,e=
[];if(t=t||n.location.hash,!t)return{};if(i=t.split("/"),h=i.length>=1?i[1]:null,
i[2])if(i[2]==="list")s="list";else for(s="tab",u=2;u<i.length;u+=2)i[u+1]?e.push(
{type:i[u],name:i[u+1]}):c=i[u];for(e.reverse();e.length>=1;)o=e.pop(),f={name:o.
name,type:o.type,parent:a(f)||r};return{hash:t,extension:h,view:s,viewName:c,item:
f,itemName:f?f.name:r,itemType:f?f.type:r}}function rt(n){var i=t.Utilities.removeQueryString(
n).split("/"),u=null,r;return i.length>2&&(r=i[i.length-3],r.charAt(0)!=="#"&&(u=
r)),u}function ut(t,i){var r=i.split("/"),u,f=null;return r.length%2==1?i:(n.Impl.
UI.Pivots.ensureExtensionPivotsInitialized(t),r.length===2?u=n.Impl.UI.Pivots.getFirstPivotId(
t.id):r.length>2&&(f=r[r.length-2],u=n.Impl.UI.Pivots.getFirstPivotId(t.id,f)),u||
(u=t.getDefaultView&&typeof t.getDefaultView=="function"?t.getDefaultView(f):"list"),
r.push(u),r.join("/"))}function ft(i,r,u,f){var c,v,tt,b,d,y=null,g=null,l=null,
a=null,w=null,e=null,h=null,it=null,k=null,rt=null,nt=null,o=r.split("/");if(o.length>
2)if(y=o[o.length-1],g=o[o.length-2],l=o[o.length-3],a=null,l.charAt(0)!=="#"&&i.
dataIsLoaded){if(w=n.Exp.TypeRegistry.getDataFunction(i.name,l),typeof w=="function")
{for(b=[],c=0;c<o.length-1;c++)c%2==0&&(b[o[c++]]=o[c]);if(b.requestedItem=l,e=w(
b,o.slice(0,o.length-1).join("/"),u),typeof e=="object"&&(e.backNavigation&&(k=e.
backNavigation,k.extension||(k.extension=n.cdm.currentExtension),it={label:e.label?
e.label:null,backNavigationPath:s(k)}),e.selectedData&&(h=e.selectedData,a=h.displayName),
e=e.data),!!e&&$.isArray(e)&&!h)for(v=0,tt=e.length;v<tt;v++)if(e[v].name===g){h=
e[v];a=h.displayName;break}}}else a=i.displayName,e=f,h=u,u&&(typeof w=="function"?
h=w({extension:i,data:u}):i.navigationalViewModelPath&&(h={data:n.Exp.Utilities.
getChildProperty(u.data,i.navigationalViewModelPath)}));($("#fxshell-navpane").navigation(
"updateLeftNavigationBarView",o,{data:e,extensionBadges:f},it),i.dataIsLoaded)&&
(n.Impl.Configuration.ViewSettings.setCurrentExtension(n.cdm.currentExtension),$(
n.cdm).unbind("activeItemChanged.fxshell-commandBar").bind("activeItemChanged.fxshell-commandBar",
function(r,u){rt=u.activeItem&&u.activeItem["aux-extension-name"]?u.activeItem["aux-extension-name"]:
i.name;nt=t.extensionIndex[rt];nt.setCommands&&nt.setCommands(n.cdm.currentActiveItem,
n.cdm.currentContext)}),i.excludeFromViewInitialization||(y!=="list"?(d=l.charAt(
0)==="#"?null:l,n.Impl.Configuration.ViewSettings.setBuiltInPaths(y,d?g:null),n.
cdm.updateTabsView(i,d,h,{title:a,selected:y})):(n.Impl.Configuration.ViewSettings.
setBuiltInPaths(y,null),n.cdm.updateCollectionView(i,h,a))),p=n.location.hash)}function et(
n){for(var r=t.UI.Navigation.crackNavigationPath(n),i=r.item,u=[],e=r.extension,
f="",o=r.view==="list"&&!r.viewName?"list":r.viewName;i&&i.type;)u.push(i.name),
u.push(i.type),i=i.parent;return u.length>=1&&(f="."+u.reverse().join(".")),e+f+
"."+o}function o(r){var a,y,c,l,s,p,w,v=null;if(u!==null){if(r=n.Impl.UI.Navigation.
normalizePath(r),e){if(f&&r===f)return;if(n.confirm(e))e=null,f=null,n.window.onbeforeunload=
null;else return f}if(n.cdm.currentWizard&&n.cdm.currentWizard.close(),n.cdm.dialogActive&&
t.UI.Dialog.cancel(),Impl.UI.Notifications.DataLoad.onNavigateAway(),a=(r||"").indexOf(
"/"),a===-1){if(r!==h){o(h);return}return}if(l=r.substring(a+1),s=l?t.extensionIndex[
l.split("/")[0]]:null,s){if(c=t.UI.Navigation.expandDefaultHashPath(s,r),s&&s.onNavigating&&
(y={current:t.UI.Navigation.crackNavigationPath(n.window.location.hash),destination:
t.UI.Navigation.crackNavigationPath(r),expandedDestination:t.UI.Navigation.crackNavigationPath(
c),redirect:function(n){v=n}},t.Internal.callPartnerScript(s,"onNavigating",s,y),
!!v)){n.window.setTimeout(function(){o(v)},10);return}if(c!==n.window.location.hash)
{n.window.location.hash=c;return}r=c;n.cdm.currentExtension&&n.cdm.currentExtension.
onNavigateAway&&t.Internal.callPartnerScript(n.cdm.currentExtension,"onNavigateAway");
n.cdm.currentExtension=s;n.cdm.currentContext={dataPath:l,hashPath:r,viewPath:c.
substr(c.lastIndexOf("/")+1),extension:n.cdm.currentExtension};t.UI.Drawer.setHelpUrl(
"/HelpContent/GetContent?ExtensionContext="+et(n.cdm.currentContext.hashPath)+"&Locale="+
i.environment.locale);n.Impl.UI.Pivots.setCurrentExtension(s,t.UI.Navigation.getHashPathType(
r));n.window.document.title=s.name!=="All"&&s.displayName?s.displayName+" - "+t.
Environment.getBranding():t.Environment.getBranding();$(n.cdm).unbind("activeItemChanged");
n.cdm.setActiveItem(null);s.dataIsLoaded?t.UI.Spinner.hide():t.UI.Spinner.show();
p=s.navigationalViewModel?n.Exp.Data.getLocalDataSet(s.navigationalViewModel.uri):
null;w=u;t.UI.Navigation.navigateInternal(s,c,p,w);n.cdm.currentExtension.onNavigateTo&&
t.Internal.callPartnerScript(s,"onNavigateTo",s,n.cdm.currentContext)}}}function ot(
){var o=[],r,e,n,f,s,h=i.resources.oneTransparentPixel;for(f=t.extensions.slice(
0).sort(function(n,i){var r=n.displayOrderHint-i.displayOrderHint;return r===0&&
(r=t.Utilities.stringCompare(n.displayName,i.displayName)),r}),r=0,e=f.length;r<
e;r++)(n=f[r],n.navItem=null,n.excludeFromNavigation)||(s=!!n.navigationalViewModel||
n.viewModels.length!==0,n.navItem={name:n.name,namePropertyName:"id",displayName:
n.displayName,displayNamePropertyName:"displayName",tooltip:n.tooltip||n.displayName,
iconUri:n.iconUri||h,iconShowCount:!!n.iconShowCount,iconInvertTextColor:!!n.iconInvertTextColor,
showSpinner:s,isVisible:typeof n.isVisible=="undefined"?!0:n.isVisible,isSelected:
!1,count:-1,displayError:"",displayWarning:""},o.push(n.navItem));for(u=o,r=0,e=
f.length;r<e;r++)n=f[r],$.isFunction(n.activate)&&n.activate()}var u=null,y="#Workspace",
p=n.location.hash,h=t.Utilities.isLocalStorageAvailable()&&localStorage.getItem(
"welcomeSkipOption")==="true"||n.environment&&n.environment.integrationPoints.EnableFrictionFreeUserExperience.
Enabled?"#Workspace/Experiments/ListExperiments":"#Workspace/Home/",e=null,f=null;
t.Namespace.define("Shell.UI",{Navigation:{WellKnownPropertyNames:{count:"count",
showSpinner:"showSpinner",displayError:"displayError",displayWarning:"displayWarning",
name:"name",displayName:"displayName",tooltip:"tooltip",icon:"iconUri",collection:
"navItems",isSelected:"isSelected"},getBasePath:w,getObservableExtensionBadge:c,
selectExtension:d,currentLocation:g,navigate:nt,calculateNavigationPath:s,crackNavigationPath:
it,isNavigatedTo:tt,expandDefaultHashPath:ut,getHashPathType:rt,navigateInternal:
ft,cdmNavigateTo:o,initializeNav:ot,setConfirmNavigateAway:b,removeConfirmNavigateAway:
k}})}(this,Shell,this.fx),function(n,t,i,r){"use strict";function o(){return u?u:
u=new i.Communication.Sender("fx")}function s(n){return function(){var i=t.Deferred(
),u=[].slice.call(arguments),r=o();return r.getMethod(n).apply(r,[{complete:function(
n){i.resolve(n)},error:function(n){i.reject(n)}}].concat(u)),i.promise()}}function f(
r,u){var h=n.Exp.Data.getLocalDataSet(u),f=h.partialErrors,o=i.UI.Navigation.getObservableExtensionBadge(
r);o&&o.setProperty(i.UI.Navigation.WellKnownPropertyNames.displayWarning,t.isArray(
f)&&f.length>0?e.extensionDataLoadWarnings:"");s("Impl.UI.Notifications.DataLoad.handleExtensionDataLoadSuccess")(
u,f)}function h(t,i){f(t,i);n.Exp.Data.addFetchStartListener(i,function(n,i){i.promise.
then(function(n){f(t,n)})})}var u,e=r.getStrings("Shell.Data.Loader");i.Namespace.
define("Exp.Data");t(n.Exp.Data).on("navigationalViewModelDataSetLoad",function(
n,t){h(t.extension,t.dataSetName)})}(this,jQuery,Shell,this.fx.resources),function(
n,t,i,r){"use strict";function u(n,t){if(n.length!==t.length)return!1;for(var i=
0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0}function f(n){return n===null||
n===r}function e(n){return n===null||n===r||typeof n=="object"?"":n.toString()}function o(
n,t){var i=n[t];return f(i)?"":i}var h=0,s=function(n){var r=n.descending?-1:1,u=
-r,f=n.property,t="cachedSortProperty"+Math.floor(Math.random()*1e4).toString(),
i=function(n,i){var f=n[t],e=i[t];return f==e||f instanceof Date&&e instanceof Date&&
!(f<e||f>e)?0:f>e?r:u};return i.preSort=function(n){for(var u,i,r=0,e=n.length;r<
e;r++)u=n[r],i=o(u,f),typeof i=="string"&&(i=i.toLowerCase()),u[t]=i},i.postSort=
function(n){for(var i=0,r=n.length;i<r;i++)delete n[i][t]},i},c=function(n){if(this.
_refresh===r)return new i.Data.LocalDataSource(n);this._id="LocalDataSource"+(h++)
.toString();var f=this,u;if(n&&n.input){if(t.isArray(n.input))this._inputDataSource=
null,this._input=n.input;else{u=this._inputDataSource=n.input;this._input=u.items;
this.dataSetName=u.dataSetName;t(u).on("refreshStart."+this._id,function(n,t){f.
_onInputDataSourceRefreshStart(t.promise)})}t([this._input]).on("arrayChange."+this.
_id,function(n,t){f._onArrayChanged(n,t)})}else throw"Supply the 'input' option when instantiating a LocalDataSource";
this._manualRefresh=n&&!!n.manualRefresh;this._inputDataSourceRefreshInProgress=
!1;this._inputArrayChanges=[];this._super.constructor.call(this,n);this._managePropertyChangeListeners(
this._input);this._setNeedRefresh()},l={_dispose:function(){t([this._input]).off(
"arrayChange."+this._id);this._managePropertyChangeListeners(null,this.items);this.
_inputDataSource&&t(this._inputDataSource).off("refreshStart."+this._id)},_setFilter:
function(n){return n&&this._createFilterFunction(n)},_refresh:function(n){var i=
this,r=t.Deferred(),u=function(){i._refreshItems();r.resolve()};return n&&!!n.all&&
this._inputDataSource?(this._inputDataSourceRefreshInProgress=!0,this._inputDataSource.
refresh({all:!0}).always(function(){i._inputDataSourceRefreshInProgress=!1}).then(
function(){i._isDisposed()||u()},function(n,t,u){i._isDisposed()||r.reject(n,t,u)}
)):u(),r.promise()},_setNeedRefresh:function(n){if(this._inputArrayChanges.push(
n),this._manualRefresh)this._needRefresh=!0;else{var t=this._startRefresh();this.
_refreshItems();t.resolve()}},_createFilterFunction:function(n){if(t.isFunction(
n))return n;for(var f=this._normalizeFilter(n),r=[],i,e,u=0;u<f.length;u++)i=f[u],
t.isFunction(i)?r.push(i):(e=this._createFilterPartFunction(i.property,i.operator,
i.value),r.push(e));return function(n){for(var t=0;t<r.length;t++)if(!r[t](n))return!1;
return!0}},_createFilterPartFunction:function(n,i,r){var h=this,u,s,f;switch(i){
case"<":u=function(n){return function(t){return t<n}}(r);break;case"<=":u=function(
n){return function(t){return t<=n}}(r);break;case"==":u=function(n){return function(
t){return t==n}}(r);break;case"!=":u=function(n){return function(t){return t!=n}
}(r);break;case">=":u=function(n){return function(t){return t>=n}}(r);break;case">":
u=function(n){return function(t){return t>n}}(r);break;case"Contains":u=function(
n){return function(t){return e(t).toLowerCase().indexOf(n)>=0}}(e(r).toLowerCase(
));break;case"||":return s=t.map(r,function(n){return h._createFilterFunction(n)}
),function(n){return function(t){for(f=0;f<n.length;f++)if(n[f](t))return!0;return!1}
}(s);default:throw"Unrecognized filter operator.";}return function(n){return function(
t){var i=o(t,n);return u(i)}}(n)},_getSortFunction:function(){var n;return this.
_sort?t.isFunction(this._sort)?this._sort:t.isArray(this._sort)?(t.each(this._sort,
function(i,r){var u=t.isFunction(r)?r:s(r);n=n?function(n,i){var r=function(t,r)
{var u=n(t,r);return u===0?i(t,r):u};return(t.isFunction(n.preSort)||t.isFunction(
i.preSort))&&(r.preSort=function(r){t.isFunction(n.preSort)&&n.preSort(r);t.isFunction(
i.preSort)&&i.preSort(r)}),(t.isFunction(n.postSort)||t.isFunction(i.postSort))&&
(r.postSort=function(r){t.isFunction(n.postSort)&&n.postSort(r);t.isFunction(i.postSort)&&
i.postSort(r)}),r}(n,u):u}),n):s(this._sort):null},_applyQuery:function(){var u=
this._input,o=this,n,i=this._getSortFunction(),r,e,f;return n=this._filter?t.grep(
u,function(n){return o._filter(n)}):u,i?(n===u&&(n=n.slice(0)),t.isFunction(i.preSort)&&
i.preSort(n),r=(n.stableSort||n.sort).call(n,i),t.isFunction(i.postSort)&&i.postSort(
r)):r=n,e=this._paging.skip||0,f=e>0?r.slice(e):r,this._paging.take&&(f=f.slice(
0,this._paging.take)),{items:f,filteredTotalCount:r.length,totalCount:u.length}}
,_onArrayChanged:function(n,t){if(!this._inputDataSourceRefreshInProgress){var i;
if(this._shouldDetermineNeedRefresh()){switch(t.change){case"insert":this._managePropertyChangeListeners(
t.items);i=this._onArrayInsert(t.items);break;case"remove":this._managePropertyChangeListeners(
null,t.items);i=this._onArrayRemove(t.items);break;case"refresh":this._managePropertyChangeListeners(
this.items,t.oldItems);i=this._onArrayRefresh();break;default:throw"Unknown array operation '"+
t.change+"'.";}i&&this._setNeedRefresh(t)}}},_onArrayInsert:function(n){var i,u=
this,r;return n.length>0&&(r=!this._filter||t.grep(n,function(n){return u._filter(
n)}).length>0,r&&(i=!0)),i},_onArrayRemove:function(n){var i,u=this,r;return this.
_paging.take>0||this._paging.skip>0?i=!0:(r=t.grep(n,function(n){return u._haveItem(
n)}).length>0,r&&(i=!0)),i},_onArrayRefresh:function(){var n=this._applyQuery();
return this.totalCount!==n.totalCount?!0:!u(this.items,n.items)},_onPropertyChanged:
function(n,i){if(!this._inputDataSourceRefreshInProgress){var r;this._shouldDetermineNeedRefresh(
)&&(this._haveItem(n)?this._filter&&!this._filter(n)?r=!0:this._sort&&(r=t.isFunction(
this._sort)?!0:t.isArray(this._sort)?t.grep(this._sort,function(n){return n.property===
i}).length>0:this._sort.property===i):this._filter&&this._filter(n)&&(r=!0),r&&this.
_setNeedRefresh())}},_shouldDetermineNeedRefresh:function(){return!this._needRefresh||
this._canApplyPassThroughOptimization()},_canApplyPassThroughOptimization:function(
){return t.grep(this._inputArrayChanges,function(n){return n&&(n.change==="insert"||
n.change==="remove")}).length===this._inputArrayChanges.length},_refreshItems:function(
){var r,n=this,i;this._inputArrayChanges.length&&(this.isReset||this._haveQuery(
)||!this._canApplyPassThroughOptimization()||(t.each(this._inputArrayChanges,function(
i,r){r.change==="insert"?(t.observable(n.items).insert(r.index,r.items),t.observable(
n).setProperty({filteredTotalCount:n.filteredTotalCount+r.items.length,totalCount:
n.totalCount+r.items.length})):(t.observable(n.items).remove(r.index,r.items.length),
t.observable(n).setProperty({filteredTotalCount:n.filteredTotalCount-r.numToRemove,
totalCount:n.totalCount-r.numToRemove}))}),this._inputDataSource&&t.observable(this.
partialRefreshErrors).refresh(this._inputDataSource.partialRefreshErrors),r=!0),
this._inputArrayChanges.length=0);r||(i=this._applyQuery(),u(this.items,i.items)||
t.observable(this.items).refresh(i.items),t.observable(this).setProperty({filteredTotalCount:
i.filteredTotalCount,totalCount:i.totalCount}),this._inputDataSource&&t.observable(
this.partialRefreshErrors).refresh(this._inputDataSource.partialRefreshErrors));
this._needRefresh=!1},_haveQuery:function(){return!!this._filter||!!this._sort||
this._paging.skip>0||!f(this._paging.take)},_managePropertyChangeListeners:function(
n,i){var r="propertyChange."+this._id,u=this;t(i).off(r);t(n).on(r,function(n,t)
{u._onPropertyChanged(n.target,t.path,t.value)})},_onInputDataSourceRefreshStart:
function(n){if(this._manualRefresh)this._setNeedRefresh();else{this._inputDataSourceRefreshInProgress=
!0;var t=this,i=this._startRefresh();n.always(function(){t._inputDataSourceRefreshInProgress=
!1}).then(function(){t._isDisposed()||(t._refreshItems(),i.resolve())},function(
n,r,u){t._isDisposed()||i.reject(n,r,u)})}}};i.Namespace.define("Shell.Data",{LocalDataSource:
Shell.Class.derive(Shell.Data.DataSource,c,l)})}(this,jQuery,Shell),function(n){
"use strict";function t(){return r?r:r=new n.Communication.Sender("fx")}function h(
){return"[object]"}function e(n,t,r){i(n,t,Shell.Diagnostics.LogEntryLevel.error,
r)}function c(n,t,r){i(n,t,Shell.Diagnostics.LogEntryLevel.warning,r)}function l(
n,t,r){i(n,t,Shell.Diagnostics.LogEntryLevel.information,r)}function a(n,t,r){i(
n,t,Shell.Diagnostics.LogEntryLevel.verbose,r)}function i(n,i,r,u){var f="";f=typeof
i=="object"?h(i,4):typeof i=="undefined"?"[undefined]":typeof i=="function"?"[function]":
i!==null?i.toString():"[null]";t().getMethod("Impl.Diagnostics.Log.writeEntry")(
n,f,r,u)}function v(n,i,r,u,f){t().getMethod("Impl.Diagnostics.Log.exception")(n,
i,r,u,f)}function y(n,i,r,u,f,e){t().getMethod("Impl.Diagnostics.Log.startup")(n,
i,r,u,f,e)}function p(n,i,r,u){t().getMethod("Impl.Diagnostics.Log.viewSwitch")(
n,i,r,u)}function w(n,i,r,u){t().getMethod("Impl.Diagnostics.Log.clientAction")(
n,i,r,u)}function b(n,i,r){window.location.hostname!==""&&t().getMethod("Impl.Diagnostics.Log.customEvent")(
n,i,r)}function k(n,i,r,u,f,e,o){t().getMethod("Impl.Diagnostics.Log.clientScenario")(
n,i,r,u,f,e,o)}function f(n,i,r,u){u&&u.toJSON&&delete u.toJSON;t().getMethod("Impl.Diagnostics.Log.performance")(
n,i,r,u)}function d(n,i,r,u){t().getMethod("Impl.Diagnostics.Log.traceEvent")(n,
i,r,u)}function g(){t().getMethod("Impl.Diagnostics.Log.traceNavigation")()}function nt(
n,i){t().getMethod("Impl.Diagnostics.Log.feedbackInfo")(n,i)}function tt(n,t,i,r,
u,f){var e=DataLab.Constants.FeatureId[n],s=DataLab.Constants.FeatureId[t];o(n,e,
t,s,i,r,u,f)}function o(n,i,r,u,f,e,o,s){window.location.hostname!==""&&t().getMethod(
"Impl.Diagnostics.Log.featureUsage")(n,i,r,u,f,e,o,s)}function it(n){if(typeof n!=
"string"||n.length===0)throw"Performance marker key must be a non empty string";
u[n]=new Date}function rt(n,t,i){var s=new Date,r=null,o;if(typeof n!="string"||
n.length===0)throw"Performance marker key must be a non empty string";n in u&&(r=
u[n],delete u[n]);r!==null?(o=(s.getTime()-r.getTime())/1e3,f(n,o,t,i)):e(n,"Shell.Diagnostics.Telemetry.timerStopAndLog() - marker name '"+
n+"' cannot be found.",i)}function s(n){this.key=n;this.start=new Date}function ut(
n){return new s(n)}var r,u={};s.prototype={start:function(){this.start=new Date}
,end:function(n,t){f(this.key,(new Date-this.start)/1e3,n,t)}};n.Namespace.define(
"Shell.Diagnostics",{LogEntryLevel:{error:"error",warning:"warning",information:
"information",verbose:"verbose"},Log:{error:e,warning:c,info:l,verbose:a,writeEntry:
i,exception:v},Telemetry:{performance:f,timerStart:it,timerStopAndLog:rt,startup:
y,viewSwitch:p,clientAction:w,customEvent:b,clientScenario:k,traceEvent:d,traceNavigation:
g,getNewTimer:ut,feedbackInfo:nt,featureUsage:tt,featureUsageEx:o}})}(Shell),function(
n,t){"use strict";function i(i){t.Internal.Rpc.RpcClient.rpcInvokeRequestResponseWithPromise(
"Impl.Extensions.add",i).then(function(i){var f,r,u;for(t.Utilities.isArray(i)||
(i=[i]),f=i.length,r=0;r<f;r++)u=n[i[r].name],typeof u!="undefined"&&typeof u.init==
"function"&&u.init.call(i[r])})}function r(n){return t.Internal.Rpc.RpcClient.rpcInvokeOneWay(
"Impl.Extensions.activate",n),t.extensionIndex[n.name]=n,t.extensions.push(n),n}
function u(n,i){t.Internal.Rpc.RpcClient.rpcInvokeOneWay("Impl.Extensions.Current.showCategory",
n,i)}t.Namespace.define("Shell.Extensions",{add:i,activate:r,Current:{showCategory:
u}})}(this,Shell),function(n){"use strict";n.Namespace.define("Shell.UI.Icons");
["add","previous","close","blank","clock","copy","forward","download","edit","help",
"info","link","next","power","redo","connect","reimage","repair","undo","save","message",
"play","stop","confirm","swap","delete","unlink","upload","tools","downloadpackage",
"capture","key","metric","offline","online","orderedlist","group","webmatrix","visualstudio",
"remoteconfig","pause","manageexternal","dashboard","connectioninfo","additem","publish",
"unpublish","encode","upgrade","contactsettings","sync","select","dataset","browse",
"register","truncate","publishToCommunity","rename","notebook","submitCompetition",
"deployWebService"].forEach(function(t){n.UI.Icons[t]={sprite:t}})}(Shell),function(
n,t,i,r){"use strict";var o=0,s=-99999,h=-99999,c=2e3,l=2e3,a="__fx-balloon",f="fx-balloon-hidden",
v=n.templates("<div class='fx-balloon-pointer'><\/div><div class='fx-balloon-content'>{{:html}}<\/div>"),
e=[],u={_documentClickHandler:null,_targetBalloon:null,_targetClicked:!1,_timeoutHandler:
null,_delayLength:1e3,_targetActive:!1,_locked:!1,setLocked:function(){u._locked=
!0},setUnlocked:function(){u._locked=!1},_hideBalloon:function(n){u._locked||u._targetBalloon&&
u._targetBalloon!==n&&(u._targetBalloon.hide(),u._targetBalloon=null,u._targetClicked=
!1,u._targetActive=!1)},_cancelHandler:function(){u._locked||(u._timeoutHandler&&
i.clearTimeout(u._timeoutHandler),u._timeoutHandler=null)},reset:function(){u._locked=
!1;u._targetBalloon=null;u._targetClicked=!1;u._cancelHandler();u._targetActive=
!1},setActive:function(){u._locked||(u._targetActive=!0)},setInactive:function()
{u._locked||(u._targetActive=!1)},cancelHideTimeout:function(){u._locked||u._cancelHandler(
)},targetClicked:function(n){u._locked||(u.hideVisibleImmediately(n),u._targetClicked=
!0)},hideVisibleImmediately:function(n){u._locked||(u._cancelHandler(),u._hideBalloon(
n))},setupHideTarget:function(n){u._locked||(u._targetBalloon&&u._targetBalloon!==
n&&u.hideVisibleImmediately(),u._targetBalloon=n)},setupHideTimeout:function(n){
u._locked||(u._targetBalloon&&u._targetBalloon!==n?u.hideVisibleImmediately():u.
cancelHideTimeout(),u._targetBalloon=n,u._timeoutHandler=i.setTimeout(function()
{u._hideBalloon();u._timeoutHandler=null},u._delayLength))}};n.widget("fx.fxBalloon",
{options:{html:"",position:"right",appendTo:"body",hideAfter:0,closeOtherBalloons:
!1,delayHide:null,triggerHide:null},_originalParent:null,_balloonMeasurer:null,_previousBox:
null,_id:null,_mouseUpHandler:null,_mouseEnterHandler:null,_mouseLeaveHandler:null,
_create:function(){if(this.options.html||(this.options.html=this.element.html()),
!/^(top|right|bottom|left)$/.test(this.options.position))throw"Balloon position has to be either: top, right, bottom, or left";
if(this.options.hideAfter){if(this.options.delayHide=!0,this.options.hideAfter=parseInt(
this.options.hideAfter,10),isNaN(this.options.hideAfter))throw"Balloon hideAfter must be a number if specified";
u._delayLength=this.options.hideAfter}this.options.triggerHide&&(this.options.delayHide=
!0);typeof this.options.horizontalOffset=="number"&&(this.options.horizontalOffset=
{preferred:this.options.horizontalOffset,alternate:this.options.horizontalOffset});
typeof this.options.verticalOffset=="number"&&(this.options.verticalOffset={preferred:
this.options.verticalOffset,alternate:this.options.verticalOffset});this.options.
appendTo&&(this._originalParent=this.element.parent(),this.element.appendTo(this.
options.appendTo));this._balloonMeasurer=n("<div/>").css({position:"absolute",left:
s,top:h,width:c,height:l});this.element.attr({"aria-hidden":"true","aria-live":"assertive",
"aria-atomic":"true",role:"alert",id:this.getElementId()}).addClass("fx-balloon").
css("z-index",r.getNextZIndex()).html(v.render(this.options));t._create.call(this)}
,_destroy:function(){this.element.removeAttr("role aria-hidden aria-live aria-atomic").
removeClass("fx-balloon").removeClass(f).html(this.options.html);this._removePointerClass(
);this._originalParent&&(this.element.appendTo(this._originalParent),this._originalParent=
null);this._cleanupDelayEvents();this._super()},_documentClick:function(t){var i=
n(t.target).closest(".fx-balloon");u._targetClicked?u._targetClicked=!1:i.length===
0&&u.hideVisibleImmediately()},setActive:function(){u.setActive(this)},setInactive:
function(){u.setInactive()},hideVisibleImmediately:function(){u.hideVisibleImmediately(
this)},cancelDelayHide:function(){u.cancelHideTimeout()},setupTarget:function(){
u.setupHideTarget(this)},targetClicked:function(){u.targetClicked(this)},setupDelay:
function(){u.setupHideTimeout(this)},setLocked:function(){u.setLocked()},setUnlocked:
function(){u.setUnlocked()},show:function(t){var b,h={},c,k,a,s,d,v,y,p,g,w="preferred",
o,l,tt,nt=this;if(!this.options.delayHide||!u._locked){if(t=t||this._previousBox,
this._previousBox=t,this._cleanupDelayEvents(),this.options.closeOtherBalloons)while(
e.length>0)b=e.splice(0,1)[0],b!==this&&b.hide();if(this._removePointerClass(),t)
do{a=this.element.offsetParent();s=this.options.position;d=this._getAlternatePosition(
s);v=this._getSidePositionKey(s);y=this._getOtherSidePositionKey(s);p=this._getSizeKey(
s);g=this._getOtherSizeKey(s);a[0].tagName==="BODY"&&(a=n(i));c=this._getBalloonBox(
t,s,l);k=this._getBalloonBox(t,d,l);o=c;switch(s){case"right":case"bottom":t[v]+
t[p]+c.preferred[v]+c[p]>a[p]()&&(o=k);break;case"left":case"top":t[v]+c.preferred[
v]<0&&(o=k)}t[y]+o.preferred[y]+o[g]>a[g]()&&t[y]+o.alternate[y]>0&&(w="alternate");
h={left:t.left+o[w].left,top:t.top+o[w].top};h.top=Math.max(0,h.top);h.left=Math.
max(0,h.left);o===c?this.element.addClass("fx-balloon-box-"+s):this.element.addClass(
"fx-balloon-box-"+d);w==="preferred"?this.element.addClass("fx-balloon-box-position-preferred"):
this.element.addClass("fx-balloon-box-position-alternate");this.element.css(h);tt=
l;l=parseInt(this.element.css("width"),10)}while(l!==tt&&l!==o.width);if(this.options.
delayHide){this.element.on("mouseup",this._mouseUpHandler=function(){u.cancelHideTimeout(
)}).on("mouseenter",this._mouseEnterHandler=function(){u.cancelHideTimeout()}).on(
"mouseleave",this._mouseLeaveHandler=function(){u._targetActive||u.setupHideTimeout(
nt)});if(!u._documentClickHandler)n("html").on("click",u._documentClickHandler=function(
){return nt._documentClick.apply(nt,arguments)})}e.splice(0,0,this);this.element.
attr("aria-hidden","false").removeClass(f);this.options.triggerHide&&(u._targetClicked=
!0,this._mouseLeaveHandler());r.forceRead(this.element[0])}},hide:function(n){(n&&
u.reset(),this.element!==u._targetActive)&&(this._cleanupDelayEvents(),this.element.
attr("aria-hidden","true").addClass(f))},getElementId:function(){return this.element[
0].id||this._id||(this._id=a+o++)},_cleanupDelayEvents:function(){this._mouseUpHandler&&
(this.element.off("mouseup",this._mouseUpHandler),this._mouseUpHandler=null);this.
_mouseEnterHandler&&(this.element.off("mouseenter",this._mouseEnterHandler),this.
_mouseEnterHandler=null);this._mouseLeaveHandler&&(this.element.off("mouseleave",
this._mouseLeaveHandler),this._mouseLeaveHandler=null);u._documentClickHandler&&
(n("html").off("click",u._documentClickHandler),u._documentClickHandler=null)},_getAlternatePosition:
function(n){switch(n){case"top":return"bottom";case"right":return"left";case"bottom":
return"top";case"left":return"right"}},_getSidePositionKey:function(n){switch(n)
{case"top":case"bottom":return"top";case"left":case"right":return"left"}},_getOtherSidePositionKey:
function(n){switch(n){case"top":case"bottom":return"left";case"left":case"right":
return"top"}},_getSizeKey:function(n){switch(n){case"left":case"right":return"width"
case"top":case"bottom":return"height"}},_getOtherSizeKey:function(n){switch(n){case"left":
case"right":return"height";case"top":case"bottom":return"width"}},_removePointerClass:
function(){this.element.removeClass("fx-balloon-box-top fx-balloon-box-right fx-balloon-box-bottom fx-balloon-box-left fx-balloon-box-position-preferred fx-balloon-box-position-alternate")}
,_readCssAndSetBaseline:function(n,t,i){var r={left:parseInt(this.element.css("left"),
10),top:parseInt(this.element.css("top"),10),alignment:this.element.css("vertical-align")},
f=this._getOtherSidePositionKey(i),u=this._getOtherSizeKey(i);switch(i){case"right":
r.left+=t.width;break;case"left":r.left-=n.width;break;case"top":r.top-=n.height;
break;case"bottom":r.top+=t.height}switch(r.alignment){case"bottom":r[f]-=n[u]-t[
u];break;case"super":r[f]-=n[u];break;case"baseline":r[f]+=t[u];break;case"middle":
r[f]-=(n[u]-t[u])/2}return r},_getBalloonBox:function(t,r,u){var h=this.element.
parent(),e="fx-balloon-box-"+r,f,o,s;return this._balloonMeasurer.appendTo(i.document.
body),u=u||"",this.element.css({left:"",top:"",bottom:"",right:"",width:u}).addClass(
e),this.element.appendTo(this._balloonMeasurer),f={width:this.element.width(),height:
this.element.height()},this.element.removeClass("fx-balloon-position-alternate").
addClass("fx-balloon-position-preferred"),o=this._readCssAndSetBaseline(f,t,r),this.
element.removeClass("fx-balloon-position-preferred").addClass("fx-balloon-position-alternate"),
s=this._readCssAndSetBaseline(f,t,r),this.element.removeClass("fx-balloon-position-alternate"),
n.extend(f,{preferred:o,alternate:s}),this.element.removeClass(e).appendTo(h),this.
_balloonMeasurer.detach(),f},_setOption:function(n,i){switch(n){case"html":this.
element.find(".fx-balloon-content").html(i);break;case"position":this.element.attr(
"aria-hidden")==="false"&&(this.options.position=i,this.show(this._previousBox))}
return t._setOption.apply(this,arguments)}})}(jQuery,jQuery.Widget.prototype,this,
this.fx.utilities),function(n,t){"use strict";var r=t.prototype,i="fx-businessballoon-expanded";
n.widget("fx.fxBusinessBalloon",t,{options:{targetFocusElement:null},_focusHandler:
null,_blurHandler:null,_focusCount:0,_create:function(){this.element.addClass("business");
this._setOption("targetFocusElement",this.options.targetFocusElement);r._create.
call(this)},_destroy:function(){this.element.removeClass("business").removeClass(
i);this._clearFocusElementHandlers();this._super()},_setOption:function(n,t){return n===
"targetFocusElement"&&(t?this._setTargetFocusElement(t):this._clearFocusElementHandlers(
)),r._setOption.apply(this,arguments)},_setTargetFocusElement:function(t){var r=
this,u=n(t);this._clearFocusElementHandlers();u.on("focusin",this._focusHandler=
function(){r._focusCount++;r.element.addClass(i)}).on("focusout",this._blurHandler=
function(){r._focusCount--;r.element.removeClass(i)})},_clearFocusElementHandlers:
function(){var t=n(this.options.targetFocusElement);this._focusHandler&&(t.off("focusin",
this._focusHandler),this._focusHandler=null);this._blurHandler&&(t.off("focusout",
this._blurHandler),this._blurHandler=null)}})}(jQuery,jQuery.fx.fxBalloon,this),
function(n,t,i){"use strict";var v={validation:t.templates("{{if links}}<div class='validation'><div class='fx-balloon-validation-content'>{{:content}}<\/div><ul class='fx-balloon-validation-links'>{{for links}}<li>{{if icon}}<img src='{{url:icon}}' alt='' />{{/if}}<a href='{{url:url}}' target='_blank'>{{>text}}<\/a><\/li>{{/for}}<\/ul><\/div>{{else}}<div class='validation fx-balloon-validation-content'>{{:content}}<\/div>{{/if}}"),
help:t.templates("<div class='help'>{{if title}}<div class='fx-balloon-help-title'>{{>title}}<\/div>{{/if}}<div class='fx-balloon-help-content'>{{:content}}<\/div>{{if links && links.length > 0}}<ul class='fx-balloon-help-links'>{{for links}}<li>{{if icon}}<img src='{{url:icon}}' alt='' />{{/if}}<a href='{{url:url}}' target='_blank'>{{>text}}<\/a><\/li>{{/for}}<\/ul>{{/if}}<\/div>"),
business:t.templates("<div>{{:content}}<\/div>")},y=function(i,u,f){var e;if(!(i
in v))throw"No template found";return u=u||{},u.position=u.position||"right",u.content=
n.Utilities.htmlEncode(u.content||"").replace(/\r\n/g,"<br />").replace(/\n/g,"<br />"),
e=i==="business"?t(v[i].render(u)).fxBusinessBalloon(u):t(v[i].render(u)).fxBalloon(
u),f||(r[e]={handle:e,title:u.title,content:u.content,links:u.links}),e},st=function(
n){f(n,"setActive")},ht=function(n){f(n,"setInactive")},ct=function(n){f(n,"hideVisibleImmediately")}
,lt=function(n){f(n,"setupTarget")},at=function(n){f(n,"targetClicked")},vt=function(
n){f(n,"setupDelay")},yt=function(n){f(n,"setLocked")},pt=function(n){f(n,"setUnlocked")}
,g=function(n,t){f(n,"hide",t)},s=function(n){f(n,"destroy");n&&n.remove()},p=function(
n,t){f(n,"show",t)},wt=function(n){var i=t(n),r=i.offset();return t.extend(r,{width:
i.outerWidth(),height:i.outerHeight()})},nt={position:"top"},tt={position:"right"},
it=function(n,t){var r=!0,i;if(n===t)r=!0;else if(n&&t&&n.length===t.length){for(
i=0;i<n.length;i++)if(!(r=n[i]===t[i]))break}else r=!1;return r},r={},rt=function(
n,t){return!t||r[n]&&r[n].title===t.title&&r[n].content===t.content&&it(r[n].links,
t.links)||(r[n]&&s(r[n].handle),r[n]={handle:y("help",t,!0),title:t.title,content:
t.content,links:t.links},r[n].handle.attr("data-balloon-for",n)),r[n]?r[n].handle:
null},ut=function(n,t){return!t||r[n]&&r[n].content===t.content&&it(r[n].links,t.
links)||(r[n]&&s(r[n].handle),r[n]={handle:y("validation",t,!0),content:t.content,
links:t.links},r[n].handle.attr("data-balloon-for",n)),u(n)},u=function(n){return r[
n]?r[n].handle:null},ft=function(n){s(u(n));delete r[n]},h=function(n){st(u(n))}
,e=function(n){ct(u(n))},c=function(n){ht(u(n))},w=function(n){at(u(n))},b=function(
n){vt(u(n))},bt=function(n){yt(u(n))},l=function(n){pt(u(n))},o=function(n){lt(u(
n))},a=function(n){g(u(n))},et=function(n,i,r,u,f,e){u&&rt(n,t.extend({},tt,{title:
r,content:u,links:f,delayHide:e}))},k=function(n,i,r,u,f){r=r||[];r.length>0&&ut(
n,t.extend({},nt,{content:r.join("\n"),links:u,delayHide:f}))},ot=function(n,i,r,
u,f,e){u&&p(rt(n,t.extend({},tt,{title:r,content:u,links:f,delayHide:e})),i)},d=
function(n,i,r,u,f){r=r||[];r.length>0&&p(ut(n,t.extend({},nt,{content:r.join("\n"),
links:u,delayHide:f})),i)},kt=function(n){switch(n.eventType){case"show":et(n.id,
n.box,n.title,n.content,n.links,n.delayHide);e(n.id);ot(n.id,n.box,n.title,n.content,
n.links,n.delayHide);o(n.id);h(n.id);break;case"leaveButton":c(n.id);b(n.id);break
case"hide":c(n.id);e(n.id);a(n.id);break;case"clickOn":et(n.id,n.box,n.title,n.content,
n.links,n.delayHide);l(n.id);e(n.id);ot(n.id,n.box,n.title,n.content,n.links,n.delayHide);
o(n.id);h(n.id);w(n.id);bt(n.id);break;case"clickOff":l(n.id);c(n.id);e(n.id);a(
n.id);break;case"setUnlocked":l(n.id);break;case"destroy":l(n.id);ft(n.id)}},dt=
function(n){switch(n.eventType){case"immediate":n.message.length===0?(e(n.id),a(
n.id)):n.hasFocus&&(k(n.id,n.box,n.message,n.links,!0),e(n.id),d(n.id,n.box,n.message,
n.links,!0),o(n.id),h(n.id),w(n.id));break;case"mouseover":k(n.id,n.box,n.message,
n.links,!0);e(n.id);d(n.id,n.box,n.message,n.links,!0);o(n.id);break;case"focus":
k(n.id,n.box,n.message,n.links,!0);e(n.id);d(n.id,n.box,n.message,n.links,!0);o(
n.id);h(n.id);break;case"mouseout":if(n.hasFocus){o(n.id);break}b(n.id);break;case"blur":
c(n.id);b(n.id);break;case"click":w(n.id);break;case"destroy":ft(n.id)}},gt=function(
){for(var n in r)r.hasOwnProperty(n)&&a(n)},ni=function(n,t){t=t||{};switch(t.balloonType)
{case"validation":dt(t);break;case"balloonIcon":kt(t)}},f=function(n){var t=Array.
prototype.slice.apply(arguments);if(t.length<2)throw"not enough arguments to callWidgetFunction";
t=t.slice(1);n&&(n.is(":data(fx-fxBusinessBalloon)")?n.fxBusinessBalloon.apply(n,
t):n.is(":data(fx-fxBalloon)")&&n.fxBalloon.apply(n,t))};n.Namespace.define("Shell.UI",
{Balloon:{create:y,destroy:s,hide:g,show:p,getBoundaries:wt,hideBalloons:gt}});t(
function(){t(i.document).on("balloon",function(){ni.apply(this,arguments)})})}(Shell,
jQuery,this),function(n,t){"use strict";function i(){return u?u:u=new t.Communication.
Sender("fx")}function s(n){var i=new t.Communication.Sender("fx");n._sender=i;n.
sync()}function h(n){n._sender&&(n._sender.getMethod("Impl.UI.Drawer.removeMenuItem")(
n._handle),n._handle=null)}function c(n){return i().getMethod("Impl.UI.Drawer.addDrawerOpenedCallback")(
n)}function l(n){i().getMethod("Impl.UI.Drawer.removeDrawerOpenedCallback")(n)}function a(
n){i().getMethod("Impl.UI.Drawer.selectMenuPath")(n)}function v(n){i().getMethod(
"Impl.UI.Drawer.setHelpUrl")(n)}function y(){i().getMethod("Impl.UI.Drawer.open")(
)}function p(n){i().getMethod("Impl.UI.Drawer.openHelp")(n)}function w(){i().getMethod(
"Impl.UI.Drawer.close")()}function b(n){return i().getMethod("Impl.UI.Drawer.Menu.exists")(
n)}function k(n){return i().getMethod("Impl.UI.Drawer.Menu.getChildren")(n)}var r,
e,f,o,u;r=t.Class.define(function(n,t,i,r,u,f){this._extension=n;this._parentPath=
t;this._id=i;this._text=r;this._image=u;this._description=f;this.path=t&&t!==""?
t+"/"+i:i},{_sender:null,_handle:null,_type:"",_id:null,_parentPath:null,_extension:
null,_text:null,_image:null,_description:null,_displayOrder:0,_disabled:!1,_isPreviewFeature:
!1,path:null,setDisplayOrder:function(n){this._displayOrder=n},setDisabled:function(
n){this._disabled=n;this._checkSync()},setText:function(n){this._text=n;this._checkSync(
)},setImage:function(n){this._image=n;this._checkSync()},setDescription:function(
n){this._description=n;this._checkSync()},setIsPreviewFeature:function(n){this._isPreviewFeature=
n;this._checkSync()},sync:function(){var n=this;this._handle=Impl.UI.Drawer.syncMenuItem(
this._handle,this,this._handle===null?function(){n._sender=null;n._handle=null}:
null)},_checkSync:function(){this._handle&&this.sync()}});e=t.Class.derive(r,function(
n,t,i,u,f,e){r.prototype.constructor.call(this,n,t,i,u,f,e);this._type="container"}
,{});f=t.Class.derive(r,function(n,t,i,u,f,e,o){r.prototype.constructor.call(this,
n,t,i,u,f,e);this._type="action";this._execute=o},{_execute:null});o=t.Class.derive(
f,function(n,t,i,u,f,e,o,s,h,c,l,a,v){r.prototype.constructor.call(this,n,t,i,u,
f,e);this._type="quickAdd";this._template=o;this._label=s;this._data=h;this._opening=
c;this._open=l;this._ok=a;this._close=v},{_extension:null,_template:null,_label:
null,_data:null,_opening:null,_open:null,_ok:null,_close:null,setExtension:function(
n){this._extension=n;this._checkSync()},setTemplate:function(n){this._template=n;
this._checkSync()},setLabel:function(n){this._label=n;this._checkSync()},setData:
function(n){this._data=n;this._checkSync()}});t.Namespace.define("Shell.UI.Drawer.Menu",
{ActionMenuItem:f,ContainerMenuItem:e,QuickAddMenuItem:o,add:s,exists:b,getChildren:
k,remove:h,selectPath:a});t.Namespace.define("Shell.UI.Drawer",{addDrawerOpenedCallback:
c,open:y,openHelp:p,close:w,removeDrawerOpenedCallback:l,setHelpUrl:v})}(this,Shell),
function(n,t){"use strict";function u(n){for(var i=r.length,t=0;t<i;t++)if(r[t].
canHandleNotification(n))return r[t];return null}function f(n){var t=u(n);t&&t.handleNotificationAdd(
n)}function e(n){var t=u(n);t&&t.handleNotificationRemove(n)}function o(){this.canHandleNotification=
function(){return!1};this.handleNotificationAdd=function(){};this.handleNotificationRemove=
function(){}}var r=[],i=t.getStrings("notifications.buttons");n.Namespace.define(
"Shell.UI",{Notifications:{add:f,remove:e,NotificationProcessor:o,addNotificationProcessor:
function(n){r.push(n)},removeNotificationProcessor:function(n){for(var t=0;t<r.length;
t++)if(r[t]===n){r.splice(t,1);break}}}});n.Namespace.define("Shell.UI.Notifications.Severity",
{information:"information",warning:"warning",error:"error"});n.Namespace.define(
"Shell.UI.Notifications.Buttons",{ok:function(n){return{text:i.ok,class_:"dlwux-icon-behavior-ok",
click:n}},close:function(n){return{text:i.close,class_:"dlwux-icon-behavior-close",
click:n}},retry:function(n){return{text:i.retry,class_:"dlwux-icon-behavior-retry",
click:n}},yes:function(n){return{text:i.yes,class_:"dlwux-icon-behavior-yes",click:
n}},no:function(n){return{text:i.no,class_:"dlwux-icon-behavior-no",click:n}},cancel:
function(n){return{text:i.cancel,class_:"dlwux-icon-behavior-cancel",click:n}},escalate:
function(n){return{text:i.escalate,class_:"dlwux-icon-behavior-escalate",click:n}}
,details:function(n){return{text:i.details,class_:"dlwux-icon-behavior-details",
click:n}},copy:function(n){return{text:i.copy,class_:"dlwux-icon-behavior-copy",
click:n}},save:function(n){return{text:i.save,class_:"dlwux-icon-behavior-save",
click:n}},scale:function(n){return{text:i.scale,class_:"dlwux-icon-behavior-scale",
click:n}},pause:function(n){return{text:i.pause,class_:"dlwux-icon-behavior-pause",
click:n}},stop:function(n){return{text:i.stop,class_:"dlwux-icon-behavior-stop",
click:n}}});n.Namespace.define("Shell.UI.Notifications.ButtonSets",{yesNo:function(
t,i){return[n.UI.Notifications.Buttons.yes(t),n.UI.Notifications.Buttons.no(i)]}
,yesNoCancel:function(t,i,r){return[n.UI.Notifications.Buttons.yes(t),n.UI.Notifications.
Buttons.no(i),n.UI.Notifications.Buttons.cancel(r)]}})}(Shell,this.fx.resources),
function(n,t){"use strict";function u(t){var i=new n.Communication.Sender("fx");
t._sender=i;t.sync()}function r(n){n._sender&&(n._sender.getMethod("Impl.UI.Notifications.Confirmation.remove")(
n._handle),n._handle=null)}var i;i=n.Class.define(function(n){this._widgetOptions=
{title:n,detailsText:"",detailsUrl:"",detailsUseHtml:!1,actions:[],focus:-1}},{_sender:
null,_handle:null,_widgetOptions:null,setTitle:function(n){this._update("title",
n)},setDetailsText:function(n){this._widgetOptions.detailsUrl="";this._update("detailsText",
n||"")},setDetailsUseHtml:function(n){this._update("detailsUseHtml",!!n)},setDetailsUrl:
function(n){this._widgetOptions.detailsText=null;this._update("detailsUrl",n||"")}
,setActions:function(n,i){var u=this;n&&n.forEach(function(n){var t=n.click;t&&typeof
t!="function"||(n.click=function(){t&&t()===!1||r(u)})});this._update("actions",
n);this._update("focus",i===null||i===t?-1:i)},sync:function(){var n=this;this._sender&&
(this._handle=this._sender.getMethod("Impl.UI.Notifications.Confirmation.sync")(
this._handle,this,this._handle===null?function(){n._sender=null;n._handle=null}:
null))},toJSON:function(){return this._widgetOptions},_checkSync:function(){this.
_handle&&this.sync()},_update:function(n,t){this._widgetOptions[n]=t;this._checkSync(
)}}),function(){var t=new n.UI.Notifications.NotificationProcessor;t.canHandleNotification=
function(n){return n instanceof i?!0:!1};t.handleNotificationAdd=function(n){u(n)}
;t.handleNotificationRemove=function(n){r(n)};n.UI.Notifications.addNotificationProcessor(
t)}();n.Namespace.define("Shell.UI.Notifications",{Confirmation:i})}(Shell),function(
n,t,i){"use strict";function f(){return r?r:r=new i.Communication.Sender("fx")}function u(
n){return function(){var i=t.Deferred(),u=[].slice.call(arguments),r=f();return r.
getMethod(n).apply(r,[{complete:function(n){i.resolve(n)},error:function(n){i.reject(
n)}}].concat(u)),i.promise()}}function e(n,t){u("Impl.UI.Notifications.DataLoad.handleViewDataLoadSuccess")(
n,t)}function o(n,t){u("Impl.UI.Notifications.DataLoad.handleViewDataLoadFailure")(
n,t)}var r;i.Namespace.define("Shell.UI.Notifications.DataLoad",{handleDataLoadSuccess:
e,handleDataLoadFailure:o})}(this,jQuery,Shell),function(n){"use strict";function r(
t){var i=new n.Communication.Sender("fx");t._sender=i;t.sync()}function i(n){n._sender&&
(n._sender.getMethod("Impl.UI.Notifications.Notification.remove")(n._handle),n._handle=
null)}var t;t=n.Class.define(function(n,t){this._widgetOptions={title:n,status:t,
details:"",actions:[]}},{_sender:null,_handle:null,_widgetOptions:null,setTitle:
function(n){this._update("title",n)},setStatus:function(n){this._update("status",
n)},setDetailsText:function(n){this._update("detailsText",n)},setDetailsUseHtml:
function(n){this._update("detailsUseHtml",!!n)},setDetailsUrl:function(n){this._widgetOptions.
detailsText=null;this._update("detailsUrl",n||"")},setActions:function(n){var t=
this;n&&n.forEach(function(n){var r=n.click;r&&typeof r!="function"||(n.click=function(
){r&&r()===!1||i(t)})});this._update("actions",n)},sync:function(){var n=this;this.
_sender&&(this._handle=this._sender.getMethod("Impl.UI.Notifications.Notification.sync")(
this._handle,this,this._handle===null?function(){n._sender=null;n._handle=null}:
null))},toJSON:function(){return this._widgetOptions},_checkSync:function(){this.
_handle&&this.sync()},_update:function(n,t){this._widgetOptions[n]=t;this._checkSync(
)}}),function(){var u=new n.UI.Notifications.NotificationProcessor;u.canHandleNotification=
function(n){return n instanceof t?!0:!1};u.handleNotificationAdd=function(n){r(n)}
;u.handleNotificationRemove=function(n){i(n)};n.UI.Notifications.addNotificationProcessor(
u)}();n.Namespace.define("Shell.UI.Notifications",{Notification:t})}(Shell),function(
n){"use strict";function e(t){var i=new n.Communication.Sender("fx");t._sender=i;
t.sync()}function i(n){n._sender&&(n._sender.getMethod("Impl.UI.Notifications.Progress.remove")(
n._handle),n._handle=null)}var r,t,u=0,f="__progressbox";r=n.Class.define(function(
n,t,i,r){this._widgetOptions={code:f+u++,title:n,status:t};this._parent=r},{_parent:
null,_widgetOptions:null,setTitle:function(n){this._update("title",n)},setStatus:
function(n){this._update("status",n)},setDetailsText:function(n){this._update("detailsText",
n)},setDetailsUrl:function(n){this._widgetOptions.detailsText=null;this._update(
"detailsUrl",n||"")},toJSON:function(){return this._widgetOptions},_update:function(
n,t){this._widgetOptions[n]=t;this._parent._checkSync()}});t=n.Class.define(function(
n,t,i){this._widgetOptions={title:n,status:t,value:0,details:null,actions:[],indeterminate:
i};this._steps=[];this.setDismiss()},{_sender:null,_handle:null,_widgetOptions:null,
_steps:null,addStep:function(n,t,i){var u;return typeof arguments[0]!="number"&&
(i=t,t=n,n=null),u=new r(t,i,n,this),this._steps.push(u),this._checkSync(),u},removeStep:
function(n){for(var t=0;t<this._steps.length;t++)if(this._steps[t]===n){this._steps.
splice(t,1);break}this._checkSync()},removeAllSteps:function(){this._steps=[];this.
_checkSync()},setClick:function(n){this._update("click",n)},setDismiss:function(
n){var t=this;this._update("dismiss",function(){if(!n||typeof n=="function"){if(
n&&n()===!1)return;i(t)}})},setDismissable:function(n){this._update("dismissable",
n)},setTitle:function(n){this._update("title",n)},setStatus:function(n){/^error|warning|success$/.
test(n)&&this._widgetOptions.indeterminate&&(this._widgetOptions.value=100,this.
_widgetOptions.dismissable=!0,this._widgetOptions.indeterminate=!1);this._update(
"status",n)},setValue:function(n){n===100&&(this._widgetOptions.dismissable=!0);
this._update("value",n)},setDetailsText:function(n){this._update("detailsText",n)}
,setDetailsUrl:function(n){this._widgetOptions.detailsText=null;this._update("detailsUrl",
n||"")},setActions:function(n){var t=this;n&&n.forEach(function(n){var r=n.click;
r&&typeof r!="function"||(n.click=function(){r&&r()===!1||i(t)})});this._update(
"actions",n)},sync:function(){var n=this;this._sender&&(this._handle=this._sender.
getMethod("Impl.UI.Notifications.Progress.sync")(this._handle,this,this._handle===
null?function(){n._sender=null;n._handle=null}:null))},toJSON:function(){return{
widgetOptions:this._widgetOptions,steps:this._steps}},_checkSync:function(){this.
_handle&&this.sync()},_update:function(n,t){this._widgetOptions[n]=t;this._checkSync(
)}}),function(){var r=new n.UI.Notifications.NotificationProcessor;r.canHandleNotification=
function(n){return n instanceof t?!0:!1};r.handleNotificationAdd=function(n){e(n)}
;r.handleNotificationRemove=function(n){i(n)};n.UI.Notifications.addNotificationProcessor(
r)}();n.Namespace.define("Shell.UI.Notifications",{Progress:t})}(Shell),function(
n,t,i,r){"use strict";var u={},e="fxValidatorData",f="fxContainerValidatorData",
s="fxValidationElements",y={delayed:!0,order:0},h={escapeAttributeValue:function(
n){var t=new RegExp("([!\"#$%&'()*+,./:;<=>?@\\[\\\\\\]^`{|}~])","g");return n.replace(
t,"\\$1")},checkable:function(n){return/radio|checkbox/i.test(n.type)},getLength:
function(n,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",
i).length;case"input":if(this.checkable(i))return t("[name='"+this.escapeAttributeValue(
i.name)+"']:checked").length}return n.length},getDependency:function(n){var i={};
return t.each(t(n).data(e),function(){i[this.validator]=this.valid}),i},getModelPrefix:
function(n){return n.substr(0,n.lastIndexOf(".")+1)},appendModelPrefix:function(
n,t){return n.indexOf("*.")===0&&(n=n.replace("*.",t)),n},splitAndTrim:function(
n){return n.replace(/^\s+|\s+$/g,"").split(/\s*,\s*/g)},format:function(){var t=
arguments[0],r=arguments[1],n,i,u;switch(typeof r){case"object":for(n in r)r.hasOwnProperty(
n)&&(i=new RegExp("\\{:"+n+":\\}","gm"),t=t.replace(i,arguments[1][n]));break;default:
for(n=0,u=arguments.length-1;n<u;n++)i=new RegExp("\\{"+n+"\\}","gm"),t=t.replace(
i,arguments[n+1])}return t}},o=function(n,i,r){return t.fn[i]?t(n)[i](r):t(n)},p=
function(n,i,r,f){(r||f)&&typeof r=="function"||(f=r,r=i,i=[]);var e=u[n]||(u[n]=
[]);return e.push({name:n,params:i,validate:r,options:t.extend({},y,f)}),this},w=
function(n){var i=t(n),e=[],f,o=function(){var n="data-val-"+this.name,f=i.attr(
n),u={};f!==r&&(n+="-",t.each(this.params,function(){u[this]=i.attr(n+this)}),e.
push({validator:this.name,message:h.format(f,u),params:u,validate:this.validate,
valid:null,options:this.options}))};if(i.data("val")===!0)for(f in u)u.hasOwnProperty(
f)&&t.each(u[f],o);return e},b=function(n,i){var r=t(n),u=this.parse(r,{container:
r,validateOnSubmit:!0});return t.data(r[0],s,u),c(u),l(u,i)},k=function(n){var i=
t(n),r=this.parse(n,{container:null});return t.removeData(i[0],s),c(r)},l=function(
n,i,r){return i&&t(n).each(function(){var n,u;u=t(this);n=u.data(f);n||(n=[],u.data(
f,n));n.push({validator:"group",message:"",params:{},validate:i||t.noop,valid:null,
options:t.extend({group:!0,delayed:!0},r)})}),this},c=function(n,i){return t(n).
each(function(){var u=t(this),n=u.data(f)||[],r=n.length-1;if(u.fxEditableControl(
"triggerMethod","resetValidation"),i)for(;r>=0;r--)n[r].validate===i&&n.splice(r,
1);!n||i&&n.length||u.removeData(f)}),this},d=function(n){var c=this,u=t.Event("submit.fxContainerValidate"),
f=t(n),e=!1,i,o,r,h;return(f.triggerHandler(u),u.isPropagationStopped())?(i=f.data(
s),i&&(i.each(function(){if(o=c.getValidationData(this),r=a(o),(r&1)==1)return t(
this).fxEditableControl("triggerMethod","showValidationBalloon"),e=!0,!1;(r&2)==
2&&(h=this)}),e||t(h).fxEditableControl("triggerMethod","showValidationBalloon")),
!1):!0},g=function(n){switch(n){case"pending":return 2;case"resolved":return 4;case"rejected":
return 1;default:return 0}},nt=function(n){return g(n.state())},tt=function(n){return n.
valid!==!0&&n.valid!==!1&&n.valid!==null&&n.valid!==r},a=function(n){var i=0,t,r;
if(n)for(r=0;r<n.length;r++)t=n[r],t.valid===!0?i|=4:t.valid===!1?i|=1:tt(t)&&(i|=
8|nt(t.valid));return i},it=function(n){return!n||typeof n!="number"?"":(n&1)==1?
"invalid":(n&2)==2?"pending":"valid"},rt=function(n,i){var u=t(n),r=!i&&u.data(e),
o=u.data(f);return r||(r=this.extractValidation(u),u.data(e,r)),o&&(r=r.concat(o)),
r.sort(function(n,t){return n.options.order>t.options.order?1:n.options.order<t.
options.order?-1:0}),r},ut=function(n,t){var u=[],i,r;if(!t||t==="all")return n;
for(r=0;r<n.length;r++)i=n[r],(i.options.delayed&&t==="delayed"||!i.options.delayed&&
t==="immediate")&&u.push(i);return u},ft=function(n){t(n).removeData(e)},v=function(
n,r){var u=t(),f=t(n),e="input[data-val=true], select[data-val=true], textarea[data-val=true]",
s=f.find(e).add(f.filter(e));return s.each(function(){var e=i.fx.utilities.attributesToObject(
this,"data-fxcontrol"),f=t.extend({},e,r),n;switch(this.tagName.toUpperCase()){case"TEXTAREA":
u=u.add(o(this,"fxValidation",f));break;case"SELECT":n=t(this).data("fxcontroltype")===
"fxDropdown"?"fxDropdown":"fxSelectBox";u=u.add(o(this,n,f));break;case"INPUT":switch(
this.type.toUpperCase()){case"TEXT":case"SEARCH":case"TEL":case"URL":case"EMAIL":
case"PASSWORD":case"DATETIME":case"DATE":case"MONTH":case"WEEK":case"TIME":case"DATETIME-LOCAL":
case"NUMBER":case"RANGE":case"COLOR":u=u.add(o(this,"fxTextBox",f));break;case"FILE":
n=t(this).data("fxcontroltype");n&&t.fn[n]||(n="fxFileBrowse");u=u.add(o(this,n,
f))}}}),u},et=function(n,t){if(t){if(u[n]){for(var i=u[n].length-1;i>=0;i--)u[n][
i].validate===t&&u[n].splice(i,1);u[n].length===0&&delete u[n]}}else delete u[n];
return this},ot=function(n,t,i){for(var u,f,o=i||n.value,e=0;e<t.length;e++)f=t[
e],u=f.validate.call(h,o,n,f.params),u&&u.message!==r?(f.links=u.links,f.message=
u.message,f.valid=u.valid):f.valid=u;return this},st=function(n){var t=this.getValidationData(
n,!1);return this.runValidation(n,t),t};n.Namespace.define("Shell.UI",{Validation:
{addValidator:p,removeValidator:et,extractValidation:w,filterValidationData:ut,getValidationData:
rt,getValidationStateFlags:a,getValidationStateName:it,helpers:h,invalidateCache:
ft,parse:v,setValidationContainer:b,removeValidationContainer:k,addValidationCallback:
l,removeValidationCallback:c,runValidation:ot,validateContainer:d,validate:st}});
t(function(){v(i.document)})}(Shell,jQuery,this),function(n){"use strict";function u(
i){var r=[];t=t||new n.Communication.Sender("fx");n.Utilities.isArray(i)||(i=[i]);
i.forEach(function(n){n._sender=t;n.sync();r.push(n._handle)});t.getMethod("Impl.UI.Commands.add").
apply(this,r)}function f(t){var i,r=[];n.Utilities.isArray(t)||(t=[t]);i=t[0]._sender;
i&&(t.forEach(function(n){r.push(n._handle);n._handle=null}),i.getMethod("Impl.UI.Commands.remove").
apply(this,r))}function e(i){(t||new n.Communication.Sender("fx")).getMethod("Impl.UI.Commands.clear")(
i)}var i,r,t;i=n.Class.define(function(n,t,i,r,u){this._widgetOptions={text:n,click:
t,disabled:i};this._parent=u},{_parent:null,_widgetOptions:null,setText:function(
n){this._update("text",n)},setClick:function(n){this._update("click",n)},setDisabled:
function(n){this._update("disabled",n)},toJSON:function(){return this._widgetOptions}
,_update:function(n,t){this._widgetOptions[n]=t;this._parent._checkSync()}});r=n.
Class.define(function(n,t,i,r,u){t=t||"";this._widgetOptions={action:t.sprite||null,
text:n,click:i,url:t.sprite?null:t,group:r||"global",disabled:u||!1};this._subCommands=
[]},{_sender:null,_handle:null,_widgetOptions:null,_subCommands:null,addSubCommand:
function(n,t,r,u,f){var e;return typeof arguments[0]!="number"&&(u=r,r=t,t=n,n=null),
e=new i(t,r,u,n,this),this._subCommands.push(e),f||this._checkSync(),e},removeSubCommand:
function(n,t){for(var i=0;i<this._subCommands.length;i++)if(this._subCommands[i]===
n){this._subCommands.splice(i,1);break}t||this._checkSync()},addSubCommands:function(
n,t){var r=[],i;return typeof arguments[0]!="number"?(t=n,n=null,i=[]):i=[n],t.forEach(
function(n,u){r.push(this.addSubCommand.apply(this,i.concat([n.text,n.click,n.disabled,
u!==t.length-1])))},this),r},removeSubCommands:function(n){for(var t=0;t<n.length;
t++)this.removeSubCommand(n[t],t!==n.length-1)},setText:function(n){this._update(
"text",n)},setIcon:function(n){n=n||{};this._update("action",n.sprite||null);this.
_update("url",n.sprite?null:n)},setClick:function(n){this._update("click",n)},setDisabled:
function(n){this._update("disabled",n)},sync:function(){var n=this;this._sender&&
(this._handle=this._sender.getMethod("Impl.UI.Commands.sync")(this._handle,this,
this._handle===null?function(){n._sender=null;n._handle=null}:null))},toJSON:function(
){return{widgetOptions:this._widgetOptions,subCommands:this._subCommands}},_checkSync:
function(){this._handle&&this.sync()},_update:function(n,t){this._widgetOptions[
n]=t;this._checkSync()}});n.Namespace.define("Shell.UI.Commands",{Command:r,add:
u,remove:f,clear:e})}(Shell,this.fx.resources),function(n,t){"use strict";function u(
n){i=i||new t.Communication.Sender("fx");i.getMethod("Impl.UI.CustomerSupport.initialize")(
n,function(n){r=n})}var i=null,r=[];t.Namespace.define("Shell.UI.CustomerSupport",
{initialize:u,getDebugInfo:function(){return r}})}(this,Shell),function(n,t,i,r,
u){"use strict";function f(n){return e[n]||(e[n]=[]),e[n]}function y(n,t){var i=
n.indexOf(t);i>-1&&n.splice(i,1)}function p(n,t){y(f(n),t)}function c(n,t){var e,
r,u;if(i.Utilities.isArray(t)||(t=[t]),t)for(e=f(n),u=0;u<t.length;u++)r=t[u],!r||
r instanceof i.UI.Pivot||(r=new i.UI.Pivot(r.id,r.displayName,r.template,r.activated,
r.icon,r.visible,r.navFilter)),e.push(r)}function w(n,t){l(n);c(n,t);o(n)}function b(
n,t,i){var r=f(n);if(i<0||i>r.length)throw"position is invalid";r.splice(i,0,t);
o(n)}function l(n){var t=f(n);t.splice(0,t.length)}function o(n){g();i.Internal.
Rpc.RpcClient.rpcInvokeOneWay("Impl.UI.Pivots.updatePivotList",n,f(n))}function k(
t,i,r){var f,u;t.template&&(u=i.templates[t.template],u&&(f=s(),n.cdm._renderTemplate(
f,u,r||{},i.templateHelpers)))}function s(){return t("#tabcontainer .tabcontent")}
function d(n){var l=n.extensionId,a=n.pivotId,e=n.navFilter,v=n.renderData,o=t.grep(
f(l),function(n){return a===n.id&&(e===n.navFilter||(e===null||e===u)&&(n.navFilter===
null||n.navFilter===u))}),r,h,c,y;if(o.length===1)r=o[0],c=t.grep(i.extensions,function(
n){return n.id===l}),c.length===1&&(h=c[0],k(r,h,v),r.activated&&r.activated(h,s(
),v));else{y=o===0?"There where no pivots with the id: ":"There are more than 1 pivots with the id: ";
throw y+a;}}function g(){h||(i.Internal.Rpc.RpcClient.rpcInvokeDuplex("Impl.UI.Pivots.setupPivotActivatedListener",
d),h=!0)}function nt(n,t){var r=n.id;if(typeof t!="function")throw"Need an initialize function to call.";
i.Internal.Rpc.RpcClient.rpcInvokeDuplex("Impl.UI.Pivots.setupPivotInitializedListener",
function(){t.call(n)},r)}var h=!1,e={},a=i.Class.define(function(n,t,i,r,u,f,e){
this.id=n;this.displayName=t;this.template=i;this.activated=r;this.image=u;this.
visible=f;this.navFilter=e},{id:null,displayName:null,template:null,visible:!0,image:
null,navFilter:null,activated:function(){}}),v=i.Class.define(function(n,t,i){this.
url=n;this.urlHover=t;this.altText=i},{url:null,altText:"",urlHover:null},{getQuickStartIcon:
function(){return new i.UI.PivotImageDescriptor(r.resources.getContentUrl("Content/Images/QuickStart_Cloud.png"),
r.resources.getContentUrl("Content/Images/QuickStart_Cloud_HOVER.png"),"")}});i.
Namespace.define("Shell.UI",{PivotImageDescriptor:v,Pivot:a,Pivots:{add:c,remove:
p,update:o,clear:l,set:w,insert:b,getPivotContentArea:s,registerExtension:nt}})}
(this,jQuery,this.Shell,this.fx),function(n,t,i,r){"use strict";var o=i.prototype,
e="fx-passwordcomplexity",u="fx-passwordcomplexity-weak",f="fx-passwordcomplexity-strong";
t.widget("fx.fxPasswordComplexity",i,{options:{baseScore:8,requireNonAlphanumeric:
!0},_onKeyupHandler:null,_create:function(){this.element.addClass(e);this._attachEvents(
);o._create.call(this)},_destroy:function(){this._detachEvents();this.element.removeClass(
e).removeClass(f).removeClass(u);this._super()},_attachEvents:function(){var n=this;
n.element.on("keyup.fxPasswordComplexity",n._onKeyupHandler=function(){n._keyup(
)})},_detachEvents:function(){var n=this;n._onKeyupHandler&&(n.element.off("keyup.fxPasswordComplexity",
n._onKeyupHandler),n._onKeyupHandler=null)},_keyup:function(){var n=this._calcStringScore(
this.element.val());this._setElementStyle(n)},_calcStringScore:function(n){return n===
r?0:this.options.requireNonAlphanumeric&&!n.match("^(?=.*[\\W]).*$")?this.options.
baseScore-1:n.length},_setElementStyle:function(n){var t=this.element;t.removeClass(
u).removeClass(f);n>=this.options.baseScore?t.addClass(f):n>0&&n<this.options.baseScore&&
t.addClass(u)}})}(this,jQuery,jQuery.Widget),function(n,t,i){"use strict";function u(
n){n=n?n:r;t("input[type='password'][data-enforce-complexity='true']",n).each(function(
){t(this).fxPasswordComplexity()})}var r=i.document;n.Namespace.define("Shell.UI",
{PasswordComplexity:{parse:u}});t(function(){u(r)})}(Shell,jQuery,this),function(
n,t){"use strict";var i,r,u;i=t.Class.define(function(i,r){var u=this,f={title:i,
dataUrl:r,completeButtonEnabled:!0,showProgress:!1,size:[800,640]};typeof i=="object"&&
i!==null?(this._sender=i.sender,this._handle=i.handle):(this._sender=new t.Communication.
Sender("fx"),this._handle=this._sender.getMethod("Impl.UI.Dialogs.Dialog.create")(
f,function(){u._sender.close();u._sender=null;u._handle=null}),this.error(function(
t){n.setTimeout(function(){throw t.exception?t.exception:t;},0)}))},{_sender:null,
_handle:null,open:function(){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.open")(
this._handle)},activate:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.setActivate")(
this._handle,n)},deactivate:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.setDeactivate")(
this._handle,n)},closing:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.setClosing")(
this._handle,n)},error:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.setError")(
this._handle,n)},setTitle:function(n){this._update("title",n)},setSize:function(
n,t){this._update("size",[n,t])},showProgress:function(n){this._update("showProgress",
n)},setCompleteButtonEnabled:function(n){this._update("completeButtonEnabled",n)}
,setData:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.setDialogData")(
this._handle,n)},ready:function(){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.ready")(
this._handle)},_update:function(n,t){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Dialog.update")(
this._handle,n,t)}});r=function(){var n,r=u("dialogId");return n=t.Communication.
Receiver.getReceiver(),n||(n=t.Communication.Receiver.create(r),n.register()),new
i({sender:new t.Communication.Sender("fx"),handle:r,doNotAdd:!0})};u=function(t)
{var r=new RegExp("[?&]"+t+"=([^&#]*)"),i=r.exec(n.location.search);return i?decodeURIComponent(
i[1].replace(/\+/g," ")):""};t.Namespace.define("Shell.UI.Dialogs",{Dialog:i,getThisDialog:
r})}(this,Shell),function(n,t,i){"use strict";var u,r,e,f;r=i.Class.define(function(
n,t,i,r){var u={title:n,url:t,locked:!0};this._sender=r.sender;this._parentHandle=
r.parentHandle;this._handle=r.handle;this._wizard=null;r.doNotAdd||(this._handle=
this._sender.getMethod("Impl.UI.Dialogs.Wizard.addStep")(this._parentHandle,u,i))}
,{_sender:null,_parentHandle:null,_handle:null,setTitle:function(n){this._update(
"title",n)},setUrl:function(n){this._update("url",n)},setLocked:function(n){this.
_update("locked",n)},activate:function(n){this._sender.getMethod("Impl.UI.Dialogs.Wizard.setStepActivate")(
this._parentHandle,this._handle,n)},deactivate:function(n){this._sender.getMethod(
"Impl.UI.Dialogs.Wizard.setStepDeactivate")(this._parentHandle,this._handle,n)},
movePrevious:function(n){this._sender.getMethod("Impl.UI.Dialogs.Wizard.setStepMovePrevious")(
this._parentHandle,this._handle,n)},moveNext:function(n){this._sender.getMethod(
"Impl.UI.Dialogs.Wizard.setStepMoveNext")(this._parentHandle,this._handle,n)},ready:
function(){this._sender.getMethod("Impl.UI.Dialogs.Wizard.stepReady")(this._parentHandle,
this._handle)},enableNextButton:function(){this._sender.getMethod("Impl.UI.Dialogs.Wizard.enableNextButton")(
this._parentHandle)},disableNextButton:function(){this._sender.getMethod("Impl.UI.Dialogs.Wizard.disableNextButton")(
this._parentHandle)},getWizard:function(){return this._wizard||(this._wizard=new
u({sender:this._sender,handle:this._parentHandle,doNotAdd:!0})),this._wizard},setWizardData:
function(n){this._sender.getMethod("Impl.UI.Dialogs.Wizard.setWizardData")(this.
_parentHandle,n)},_update:function(n,t){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.updateStep")(
this._parentHandle,this._handle,n,t)}});u=i.Class.define(function(n){var r=this,
u={title:n,autoLock:!0,completeButtonEnabled:!1,completeButtonDisplayed:!0,showProgress:
!1,size:[800,640]};typeof n=="object"&&n!==null?(this._sender=n.sender,this._handle=
n.handle):(this._sender=new i.Communication.Sender("fx"),this._handle=this._sender.
getMethod("Impl.UI.Dialogs.Wizard.create")(u,function(){r._sender.close();r._sender=
null;r._handle=null}),this.error(function(n){t.setTimeout(function(){throw n.exception?
n.exception:n;},0)}))},{_sender:null,_handle:null,open:function(){this._sender&&
this._sender.getMethod("Impl.UI.Dialogs.Wizard.open")(this._handle)},closing:function(
n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.setClosing")(this.
_handle,n)},error:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.setError")(
this._handle,n)},setTitle:function(n){this._update("title",n)},setAutoLock:function(
n){this._update("autoLock",n)},setSize:function(n,t){this._update("size",[n,t])}
,showProgress:function(n){this._update("showProgress",n)},setCompleteButtonEnabled:
function(n){this._update("completeButtonEnabled",n)},setCompleteButtonDisplayed:
function(n){this._update("completeButtonDisplayed",n)},setData:function(n){this.
_sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.setWizardData")(this._handle,
n)},addStep:function(n,t,i){return typeof arguments[0]!="number"&&(i=t,t=n,n=null),
new r(t,i,n,{sender:this._sender,parentHandle:this._handle})},removeStep:function(
n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.removeStep")(this.
_handle,n._handle)},getSteps:function(){var i=this,t;if(this._sender)return t=n.
Deferred(),this._sender.getMethod("Impl.UI.Dialogs.Wizard.getSteps")(this._handle).
done(function(u){var f=[],e;n.each(u,function(n,t){e=new r(null,null,-1,{sender:
i._sender,parentHandle:i._handle,handle:t,doNotAdd:!0});f.push(e)});t.resolve(f)}
),t.promise()},_update:function(n,t){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.update")(
this._handle,n,t)}});e=function(){var n,t=f("wizardId"),u=f("stepId");return n=i.
Communication.Receiver.getReceiver(),n||(n=i.Communication.Receiver.create(t+u),
n.register()),new r("","",-1,{sender:new i.Communication.Sender("fx"),parentHandle:
t,handle:u,doNotAdd:!0})};f=function(n){var r=new RegExp("[?&]"+n+"=([^&#]*)"),i=
r.exec(t.location.search);return i?decodeURIComponent(i[1].replace(/\+/g," ")):""}
;i.Namespace.define("Shell.UI.Dialogs",{Wizard:u,getThisWizardStep:e})}(jQuery,this,
Shell),function(n,t,i){"use strict";function u(n){try{return n()}catch(t){}}function f(
t){return new r(t,u(function(){return n.localStorage}))}function e(t){return new
r(t,u(function(){return n.sessionStorage}))}var r;r=Shell.Class.define(function(
n,t){if(!n)throw"Cache name is required";this.cacheName=n;t&&(this.storage=t);this.
cacheEntry=i},{getEntry:function(){var t,r;if(t=this.cacheEntry,t===i&&this.storage)
{try{r=this.storage.getItem(this.cacheName)}catch(u){this.storage=null}r&&(t=n.JSON.
parse(r),this.cacheEntry=t)}return t},setEntry:function(t){if(t===i)throw"entry must be defined";
var r=n.JSON.stringify(t);if(this.cacheEntry=t,this.storage)try{this.storage.setItem(
this.cacheName,r)}catch(u){this.storage=null}},removeEntry:function(){delete this.
cacheEntry;this.storage&&this.storage.removeItem(this.cacheName)}});t.Namespace.
define("Shell.Storage",{getLocalCache:f,getSessionCache:e})}(this,Shell),function(
n,t){"use strict";function u(n,r,u){i[n]=t.setTimeout(r,u)}function f(n){var r=i[
n];return r?(t.clearTimeout(r),delete i[n],!0):!1}function s(t,i){r++;var s=o+r,
h=function(){e(s)&&t()},c=function(){f(s)&&u(s,h,i)};u(s,h,i);n("body").on("click."+
s,c).on("keyup."+s,c);return s}function e(t){var i=f(t);return i&&n("body").off(
"click."+t).off("keyup."+t),i}var o="shellTimer",r=0,i={};Shell.Namespace.define(
"Shell.Timers",{Idle:{set:s,clear:e}})}(jQuery,this),function(n,t,i,r){"use strict";
var f,u=[],o=(new Date).getTimezoneOffset()*6e4,e=i.getStrings("Shell.Net");r.Namespace.
define("Shell.Net",{ajaxPost:function(n,i){typeof n=="object"?(i=n,n=i.url):i=i||
{};var u=i.data;return t.extend(i,{type:"POST",dataType:"json",cache:!1,traditional:
!0,contentType:"application/json",data:typeof u=="string"?u:JSON.stringify(u)}),
r.Net.ajax(n,i)},ajax:function(i,s){typeof i=="object"?(s=i,i=s.url):s=s||{};var
c=t.extend({},s),y,h,l,p,a,v=function(t,i){f||(f=new r.UI.Notifications.Confirmation(
t),f.setActions([r.UI.Notifications.Buttons.ok(function(){i?n.location.href=r.Environment.
getSignOutLink():n.location.reload(!0)})]),r.UI.Notifications.add(f))};return l=
s.logFunction?s.logFunction:r.Diagnostics.Log.writeEntry,a=function(t,u){var f=((
new Date).getTime()-y)/1e3,o=u==="success"?"Complete":"Failure",s=u==="success"?
"completed":"failed",c=o+": Ajax call to: "+i+". "+s+" with status: "+u+" ("+t.status+
") in "+f+" seconds. x-ms-client-request-id was: "+h,e={message:c,dateTime:new Date,
durationSeconds:f,url:i,status:t.status,textStatus:u,clientRequestId:h,pageRequestId:
r.Context.getPageRequestId(),referrer:n.location.href,host:n.location.host};return u!==
"success"&&(e.response=t.responseText),e},c.error=function(n,t,i){var f=a(n,t),o=
f.message+". Response: "+(n.responseText||""),u;return n.status===401&&(n.getResponseHeader(
"x-ms-force-login")||"").toLowerCase()==="true"&&v(e.loggedOut),l("Shell.Net.FailedAjaxCall",
o,r.Diagnostics.LogEntryLevel.error),s.error&&(u=s.error(n,t,i)),u},c.complete=function(
n,t){var u=n.getResponseHeader("x-build-version"),i,h=n.getResponseHeader("x-force-user-logout"),
f,o;return h&&v(e.anotherSession,!0),t!=="success"||s.suppressSuccessLogging||(o=
a(n,t),l("Shell.Net.SuccessfulAjaxCall",o.message,r.Diagnostics.LogEntryLevel.verbose)),
u&&(i=r.Environment.getPortalVersion(),i&&i!==u&&v(e.versionMismatchError)),s.complete&&
(f=s.complete(n,t)),f},p=new Date((new Date).getTime()+o),h=r.Utilities.newGuid(
)+"-"+p.toString("u"),c.beforeSend=function(n){var t;for(n.setRequestHeader("x-ms-client-session-id",
r.Context.getPageRequestId()),n.setRequestHeader("x-ms-client-request-id",h),s.beforeSend&&
s.beforeSend(n),t=0;t<u.length;t++)u[t](n)},y=(new Date).getTime(),l("Shell.Net.PlacingAjaxCall",
"Placing ajax call to: "+i+". x-ms-client-request-id is: "+h,r.Diagnostics.LogEntryLevel.
verbose),t.ajax(i,c)},get:function(n,i,u,f){return t.isFunction(i)&&(f=f||u,u=i,
i=null),r.Net.ajax({url:n,data:i,success:u,dataType:f})},getJSON:function(n,i,u)
{return t.isFunction(i)&&(u=i,i=null),r.Net.ajaxPost({url:n,data:i,success:u})},
post:function(n,t,i,u){return r.Net.ajaxPost({url:n,data:t,success:i,dataType:u})}
,addGlobalBeforeSend:function(n){if(!n)throw"A function is required. The function can perform customization before the ajax request is sent.";
u.splice(0,0,n)},removeGlobalBeforeSend:function(n){var t;if(!n)throw"A function is required. The function can perform customization before the ajax request is sent.";
for(t=0;t<u.length;t++)u[t]===n&&u.splice(t,1)}})}(this,jQuery,this.fx.resources,
Shell),function(n,t){"use strict";var i=function(){return t.Utilities.getAntiForgeryId(
)},r=function(){return t.Environment.getPageRequestId()};t.Namespace.define("Shell.Context",
{getPageRequestId:r,getAntiForgeryId:i})}(this,Shell),function(n,t,i,r,u){"use strict";
var e="fxshell.avatarbar",f=u.getStrings(e),o=n.Resources.getResources("fx.links"),
s="<div class='fxshell-avatarbar-large'><img class='fxshell-avatarbar-logo' /><div class='fxshell-avatarbar-links-container'><nav class='fxshell-avatarbar-navbar'><ul class='fxshell-avatarbar-links-list'><\/ul><\/nav><\/div><div class='fxshell-avatarbar-login-container'><img class='fxshell-avatarbar-userpicture' /><div class='fxshell-avatarbar-actions'><a href='#' class='fxshell-avatarbar-legal'><\/a><span class='fxshell-avatarbar-separator'> | <\/span><a href='#' class='fxshell-avatarbar-privacycookies'><\/a><span class='fxshell-avatarbar-separator'> | <\/span><a href='#' class='fxshell-avatarbar-prominentaction fxshell-avatarbar-customersupport'><\/a><span class='fxshell-avatarbar-separator'> | <\/span><a href='#' class='fxshell-avatarbar-prominentaction fxshell-avatarbar-signout'><\/a><\/div><span class='fxshell-avatarbar-username'><\/span><\/div><\/div><div class='fxshell-avatarbar-small'><img class='fxshell-avatarbar-logo' /><div class='fxshell-avatarbar-login-container'><img class='fxshell-avatarbar-userpicture' /><span class='fxshell-avatarbar-username'><\/span><img class='fxshell-avatarbar-arrow' /><\/div><a href='#' class='fxshell-avatarbar-feedback'><img class='fxshell-avatarbar-feedbackicon' /><\/a><\/div>",
h="<li class='fxshell-avatarbar-links-listitem'><a class='fxshell-avatarbar-links-link'><\/a><\/li>";
t.widget(e,{options:{allowExpansion:!0,enableSignOut:!0,brandingLogoUrl:"",brandingLogoTitle:
"",signOutLabel:"",avatarUrl:"",privacyLabel:f.privacyLabel,privacyUrl:o.privacyUrl,
legalLabel:f.legalLabel,legalUrl:o.legalUrl,expansionArrowImg:u.getContentUrl("Content/Images/fxshell.avatarbar.arrow.png"),
expansionArrowAlt:f.expansionArrowAlt,feedbackImg:u.getContentUrl("Content/Images/fxshell.feedback.icon.png"),
feedbackLabel:"",feedbackTooltip:f.feedbackTooltip,enableSupport:!0,userName:"",
links:[]},_linksList:null,_create:function(){this.widgetEventPrefix="";this.element.
html(s).addClass("fxshell-avatarbar-container");this._linksList=this.element.find(
".fxshell-avatarbar-links-list");this._setupBranding();this._setupIdentity();this.
_enableDisableExpansion();this.options.allowExpansion&&(this._setupExpansion(),this.
_setupFeedbackAndSignout(),this._setupCustomerSupport(),this._setupLegalAndPrivacy(
),this._setupLinks());this._attachEvents()},_destroy:function(){this._detachEvents(
);this._linksList=null;this.element.removeClass("fxshell-avatarbar-container").empty(
);this._super()},_setupBranding:function(){this.element.find(".fxshell-avatarbar-logo").
attr("src",this.options.brandingLogoUrl).attr("alt",this.options.brandingLogoTitle)}
,_setupIdentity:function(){this.options.userName===null||this.options.userName===
""?this.element.find(".fxshell-avatarbar-username").hide():this.element.find(".fxshell-avatarbar-username").
text(this.options.userName).attr("alt",this.options.userName);this.options.avatarUrl===
null||this.options.avatarUrl===""?this.element.find(".fxshell-avatarbar-userpicture").
hide():this.element.find(".fxshell-avatarbar-userpicture").attr("src",this.options.
avatarUrl).attr("alt",this.options.userName)},_setupExpansion:function(){this.element.
find(".fxshell-avatarbar-arrow").attr("src",this.options.expansionArrowImg).attr(
"alt",this.options.expansionArrowAlt)},_setupCustomerSupport:function(){this.options.
enableSupport?this.element.find(".fxshell-avatarbar-customersupport").fxsCustomerSupport(
{subscriptionListProvider:function(){return n.Exp.Rdfe.getSubscriptionList()}}):
this.element.find(".fxshell-avatarbar-customersupport").hide()},_setupFeedbackAndSignout:
function(){var n=!(this.options.feedbackLabel===null||this.options.feedbackLabel===
"");n?(this.element.find(".fxshell-avatarbar-feedback").attr("alt",this.options.
feedbackLabel).attr("title",this.options.feedbackTooltip),this.element.find(".fxshell-avatarbar-feedbackicon").
attr("src",this.options.feedbackImg).attr("alt",this.options.feedbackLabel)):this.
element.find(".fxshell-avatarbar-feedback").hide();this.options.enableSignOut?this.
element.find(".fxshell-avatarbar-signout").text(this.options.signOutLabel):this.
element.find(".fxshell-avatarbar-signout").hide();n&&this.options.enableSignOut||
this.element.find(".fxshell-avatarbar-separator").hide()},_setupLegalAndPrivacy:
function(){var n=!(this.options.legalUrl===null||this.options.legalLabel===""),t=
!(this.options.privacyUrl===null||this.options.privacyLabel==="");n?this.element.
find(".fxshell-avatarbar-legal").text(this.options.legalLabel).attr("href",this.
options.legalUrl):this.element.find(".fxshell-avatarbar-legal").hide();t?this.element.
find(".fxshell-avatarbar-privacycookies").text(this.options.privacyLabel).attr("href",
this.options.privacyUrl):this.element.find(".fxshell-avatarbar-privacycookies").
hide()},_enableDisableExpansion:function(){this.options.allowExpansion?this.element.
addClass("fxshell-avatarbar-container-expandable"):this.element.removeClass("fxshell-avatarbar-container-expandable")}
,_setupLinks:function(){var i,n,r,u;if(this._detachLinkEvents(),this._linksList.
empty(),this.options.links){for(i=0;i<this.options.links.length;i++)n=this.options.
links[i],n&&(r=t(h),u=r.find("a"),u.attr("href",n.url).text(n.label),n.selected&&
u.addClass("fxshell-avatarbar-links-selectedlink"),this._linksList.append(r));this.
_attachLinkEvents()}},_attachEvents:function(){this.options.allowExpansion&&(this.
_attachExpandCollapseEvents(),this._attachSignoutAndFeedbackEvents())},_detachEvents:
function(){this._detachLinkEvents();this._detachSignoutAndFeedbackEvents();this.
_detachExpandCollapseEvents();this._detachCustomerSupport()},_attachSignoutAndFeedbackEvents:
function(){var n=this;if(this.options.enableSignOut)this.element.find(".fxshell-avatarbar-signout").
on("click",function(t){t.stopPropagation();t.preventDefault();n._trigger("signout",
null,null)});if(!(this.options.feedbackLabel===null||this.options.feedbackLabel===
""))this.element.find(".fxshell-avatarbar-feedback").on("click",function(t){t.stopPropagation(
);t.preventDefault();n._trigger("feedback",null,null)})},_detachCustomerSupport:
function(){this.options.enableSupport&&this.element.find(".fxshell-avatarbar-customersupport").
fxsCustomerSupport("destroy")},_detachSignoutAndFeedbackEvents:function(){this.options.
enableSignOut&&this.element.find(".fxshell-avatarbar-signout").off("click");this.
options.feedbackLabel===null||this.options.feedbackLabel===""||this.element.find(
".fxshell-avatarbar-feedback").off("click")},_attachExpandCollapseEvents:function(
){var i=this,t;this.element.on("click",function(){var n;i.element.toggleClass("fxshell-avatarbar-expanded");
n=i.element.hasClass("fxshell-avatarbar-expanded");i.element.attr("aria-selected",
n.toString())});this.element.on("mouseenter",function(){t&&(n.clearTimeout(t),t=
null)});this.element.on("mouseleave",function(){t&&(n.clearTimeout(t),t=null);t=
n.setTimeout(function(){t=null;i.element.removeClass("fxshell-avatarbar-expanded").
attr("aria-selected","false")},1e3)})},_detachExpandCollapseEvents:function(){this.
element.off("click");this.element.off("mouseenter");this.element.off("mouseleave")}
,_attachLinkEvents:function(){var n=this;this._linksList.on("click","a",function(
t){var i=t.target.href;t.stopPropagation();t.preventDefault();n._trigger("linkselect",
null,{item:i})})},_detachLinkEvents:function(){this._linksList.off("click","a")}
})}(this,jQuery,this.Shell,this.fx,this.fx.resources),function(n,t,i,r){"use strict";
var u=function(){var n=i.Class.define(function(){},{_children:[],getLinkIdPrefix:
function(){return n._linkIdPrefix},setChildren:function(n){this._children=n},parse:
function(n){for(var u=[],o="",f=n,i,s,t,e,h;;){for(t=0;t<this._children.length;t++)
u[t]===r&&(u[t]=this._children[t]._match(f)),u[t]&&(!i||u[t].index<i.index)&&(i=
u[t],s=this._children[t]);if(h=i?i.index:f.length,o+=f.substring(0,h),!i)break;for(
o+=s._getOutput(i),e=i.index+i[0].length,f=f.substring(e),t=0;t<this._children.length;
t++)u[t]&&(u[t].index<e?u[t]=r:u[t].index-=e);i=r}return o},_match:function(){return null}
,_getOutput:function(){}},{_linkIdPrefix:"__fxshell-link-id-"}),s=i.Class.derive(
n,function(){},{_match:function(n){var t=new RegExp("\\[([^|\\[\\]]+?(?:\\|[^|\\[\\]]+?){1,2})\\]");
return t.exec(n)},_getOutput:function(t){var i=t[1].split("|"),u=i.length===3?i[
2]:"#",r="<a id='"+n._linkIdPrefix+i[0]+"' href='"+u+"'>";return r+=this.parse(i[
1]),r+"<\/a>"}}),h=i.Class.derive(n,function(){},{_match:function(n){var t=new RegExp(
"__(([^_]+)|([^_]*_[^_]*)*?)__");return t.exec(n)},_getOutput:function(n){var t=
"<strong>";return t+=this.parse(n[1]),t+"<\/strong>"}}),c=i.Class.derive(n,function(
){},{_match:function(n){var t=new RegExp("\\'\\'(([^\\']+)|([^\\']*\\'[^\\']*)*?)\\'\\'");
return t.exec(n)},_getOutput:function(n){var t="<em>";return t+=this.parse(n[1]),
t+"<\/em>"}}),l=i.Class.derive(n,function(){},{_match:function(n){return/%%%/.exec(
n)},_getOutput:function(){return"<br />"}}),t=new h,u=new c,f=new s,e=new l,o=new
n;return f.setChildren([t,u]),t.setChildren([e,f,u]),u.setChildren([e,f,t]),o.setChildren(
[t,u,f,e]),o}();n.widget("fxshell.encodedlinkinjector",{options:{text:"",click:n.
noop},_originalHtml:null,_create:function(){var n=u.parse(i.Utilities.htmlEncode(
this.options.text));this._originalHtml=this.element.html();this.element.html(n);
this._attachLinkHandler()},_destroy:function(){this.element.html(this._originalHtml).
off("click","a");this._super()},_attachLinkHandler:function(){var t=this;this.element.
on("click","a",function(i){var r=n(this),f=r.attr("id").substring(u.getLinkIdPrefix(
).length),e=r.attr("href"),o={id:f,href:e};t._trigger("click",i,o)})}})}(jQuery,
jQuery.Widget.prototype,Shell),function(n,t,i,r,u){"use strict";var f="fxshell.toastbox",
e="<div class='fxshell-toastbox' role='alertdialog' aria-atomic='true'><div class='fxshell-toastbox-container'><div class='fxshell-toastbox-controls'><\/div><div class='fxshell-toastbox-contentContainer'><\/div><\/div><\/div>",
o="<button class='fxshell-toastbox-close'><\/button>",s=0,h="__fxshell-toastbox",
c=function(){return h+s++};t.widget(f,{options:{maxHeight:u,openDuration:200,closeDuration:
100,openedOpacity:1,closedOpacity:.6,text:i.getStrings(f)},_isLocked:!1,_isOpen:
!1,_isOpening:!1,_isClosing:!1,_isAwaitingRefresh:!1,_chromeHeight:null,_openClassName:
null,_anchor:null,_toastBox:null,_controls:null,_content:null,_closeButton:null,
_create:function(){var n=this.element,r=this.options,i=c();this._openClassName=this.
widgetFullName+"-open";this._anchor=t(e).addClass(this.widgetFullName).prependTo(
n).width(n.outerWidth()).attr("aria-describedby",i);this._controls=this._anchor.
find(".fxshell-toastbox-controls");this._content=this._anchor.find(".fxshell-toastbox-contentContainer").
attr("id",i);this._toastBox=this._anchor.find(".fxshell-toastbox-container").css(
"opacity",0).append(this._controls).append(this._content).width(n.outerWidth());
this._initializeControls();this._chromeHeight=this._toastBox.outerHeight()-this.
_content.outerHeight();this._chromeHeight<0&&(this._chromeHeight=0);this._toastBox.
height(0).css("opacity",r.closedOpacity);this._initializeListeners()},_destroy:function(
){this._destroyListeners();this._closeButton!==null&&this._closeButton.off(".toastbox");
this._toastBox!==null&&this._toastBox.remove();this._anchorElement=null;this._super(
)},_initializeControls:function(){var n=this.options;this._closeButton=t(o).text(
n.text.close).on("click.toastbox",t.proxy(this.close,this));this._controls.append(
this._closeButton)},open:function(){var n=this,u=this.options,o=this.element,i=t.
Deferred(),f,s,h,e;return this._isLocked?(i.reject(),i.promise()):this._isOpen||
this._isOpening?(i.resolve(),this._trigger("open"),i.promise()):(this._isClosing=
!(this._isOpening=!0),f=this._chromeHeight+this._content.outerHeight(),s=parseInt(
o.css("border-left-width"),10),h=parseInt(o.css("border-top-width"),10),this._toastBox.
css("left",-s).css("bottom",h),e=f>u.maxHeight&&u.maxHeight>0?u.maxHeight:f,this.
_trigger("opening"),this._toastBox.stop().animate({height:e,opacity:u.openedOpacity},
u.openDuration,function(){n._anchor.addClass(n._openClassName);n._anchor.attr({height:
e});n._isOpening=!(n._isOpen=!0);i.resolve();n._trigger("open");r.forceRead(n._toastBox[
0],!0)}),i.promise())},close:function(){var n=this,r=this.options,i=t.Deferred();
return!this._isOpen&&!this._isOpening||this._isClosing?(i.resolve(),this._trigger(
"close"),i.promise()):(this._isOpening=!(this._isClosing=!0),this._anchor.removeClass(
this._openClassName),this._trigger("closing"),this._toastBox.stop().animate({height:
0,opacity:r.closedOpacity},r.closeDuration,function(){n._anchor.attr({height:0,opacity:
r.closedOpacity});n._isClosing=n._isOpen=!1;i.resolve();n._trigger("close")}),i.
promise())},lock:function(){this._isLocked=!0},unlock:function(){this._isLocked=
!1},getContentContainer:function(){return this._content},_getContentWidth:function(
n){var t=0,i=n.children(),r,u;return i.length>0?(t=n.wrapInner("<span />").find(
">span").width(),i.unwrap()):(r=n.text(),u=n.html(),t=n.html("<span>"+u+"<\/span>").
find(">span").width(),n.text(r)),t},_initializeListeners:function(){var i=this;this.
element.on(this.widgetEventPrefix+"contentchange",function(){i._refresh()});t(n).
on("resize."+this.widgetEventPrefix,function(){i._anchor.width(i.element.outerWidth(
));i._toastBox.width(i.element.outerWidth());i._refresh()})},_destroyListeners:function(
){t(n).off("resize."+this.widgetEventPrefix);this.element.off(this.widgetEventPrefix+
"contentchange")},_refresh:function(){var r=this,n=this.options,i=t.Deferred(),u=
this._chromeHeight+this._content.height(),f;return this._isOpen?(this._isAwaitingRefresh=
!0,f=u>n.maxHeight&&n.maxHeight>0?n.maxHeight:u,this._toastBox.stop().animate({height:
u>n.maxHeight&&n.maxHeight>0?n.maxHeight:u,opacity:n.openedOpacity},n.openDuration,
function(){r._anchor.attr({height:f});r._isAwaitingRefresh=!1;i.resolve();r._trigger(
"refresh")}),i.promise()):(this._isOpening&&!this._isAwaitingRefresh?(this._isAwaitingRefresh=
!0,this.open().then(function(){r._refresh().then(function(){i.resolve()})})):i.reject(
),i.promise())}})}(this,jQuery,this.fx.resources,this.fx.utilities),function(n,t,
i){"use strict";var u="fxshell.logviewer",r=i.getStrings(u),f="<div class='fxshell-logviewer-configurationbar'><div><fieldset><legend>Severity<\/legend><label><input type='checkbox' checked='checked' class='fxshell-errors-checkbox' />"+
r.errors+"<\/label><label><input type='checkbox' checked='checked' class='fxshell-warnings-checkbox' />"+
r.warnings+"<\/label><label><input type='checkbox' checked='checked' class='fxshell-performance-checkbox' />"+
r.performance+"<\/label><label><input type='checkbox' checked='checked' class='fxshell-information-checkbox' />"+
r.information+"<\/label><label><input type='checkbox' class='fxshell-verbose-checkbox' />"+
r.verbose+"<\/label><\/fieldset><\/div><div><label>"+r.regExFilter+"<input type='text' class='fxshell-logviewer-regexpfilter-text' /><\/label><input type='button' value='"+
r.copyLogToClipboard+"' class='fxshell-logviewer-copytoclip-button' /><input type='button' value='"+
r.clearLog+"' class='fxshell-logviewer-clearlog-button' /><\/div><\/div><div class='fxshell-logviewer-logcontainer'><\/div>";
t.widget(u,t.ui.dialog,{options:{title:r.title,maxEntries:1e3,showLogOnError:!0},
_logMessageCount:0,_errorsCheckbox:null,_warningsCheckbox:null,_performanceCheckbox:
null,_informationCheckbox:null,_verboseCheckbox:null,_clearLogButton:null,_copyToClipButton:
null,_regExpTextbox:null,_logEntriesContainer:null,_create:function(){(typeof this.
options.maxEntries!="number"||this.options.maxEntries<=0)&&(this.options.maxEntries=
1e3);t.ui.dialog.prototype._create.call(this);this.element.attr("title",this.options.
title);this.element.addClass("fxshell-logviewer-widget");this.element.empty().html(
f);this._logEntriesContainer=this.element.find(".fxshell-logviewer-logcontainer");
this._attachEvents()},_destroy:function(){this._detachEvents();this.element.removeAttr(
"title");this.element.removeClass("fxshell-logviewer-widget");this.element.empty(
);this._logEntriesContainer=null;this._super()},addEntry:function(n,i){if(i!=="error"&&
i!=="warning"&&i!=="information"&&i!=="performance"&&i!=="verbose")throw"Unknown severity.";
this._logMessageCount+1>this.options.maxEntries&&this._logEntriesContainer.children(
).filter(":last").remove();var u=t("<div/>").text(n).html(),r=t("<p class='fxshell-logentry'><span class='fxshell-logentry-header'>"+
(new Date).toLocaleTimeString()+":<\/span>&nbsp;<span class='fxshell-logentry-body'>"+
u+"<\/span><\/p>"),f="fxshell-logentry-"+i;r.addClass(f);this._logMessageCount=this.
_logMessageCount+1;this._logEntriesContainer.prepend(r);this._applyFiltersOnRow(
r,this._getCurrentFilter())&&this.options.showLogOnError&&i==="error"&&this.open(
)},clear:function(){this._logEntriesContainer.empty();this._logMessageCount=0},_attachEvents:
function(){var i=this,n=function(){i._applyFiltersOnLog()};this._errorsCheckbox=
this.element.find(".fxshell-errors-checkbox");this._errorsCheckbox.on("click",n);
this._warningsCheckbox=this.element.find(".fxshell-warnings-checkbox");this._warningsCheckbox.
on("click",n);this._performanceCheckbox=this.element.find(".fxshell-performance-checkbox");
this._performanceCheckbox.on("click",n);this._informationCheckbox=this.element.find(
".fxshell-information-checkbox");this._informationCheckbox.on("click",n);this._verboseCheckbox=
this.element.find(".fxshell-verbose-checkbox");this._verboseCheckbox.on("click",
n);this._clearLogButton=this.element.find(".fxshell-logviewer-clearlog-button");
this._clearLogButton.on("click",function(){i.clear()});this._copyToClipButton=this.
element.find(".fxshell-logviewer-copytoclip-button");this._copyToClipButton.on("click",
function(){var n="";i._logEntriesContainer.children().not(".fxshell-logentry-filtered-out").
each(function(){n+=t(this).text()+"\r\n"});i._copyToClipboard(n)});this._regExpTextbox=
this.element.find(".fxshell-logviewer-regexpfilter-text");this._regExpTextbox.on(
"keypress",function(n){n.which===13&&n.preventDefault()});this._regExpTextbox.on(
"keyup",function(){n()})},_detachEvents:function(){this._errorsCheckbox.off("click");
this._errorsCheckbox=null;this._warningsCheckbox.off("click");this._warningsCheckbox=
null;this._performanceCheckbox.off("click");this._performanceCheckbox=null;this.
_informationCheckbox.off("click");this._informationCheckbox=null;this._verboseCheckbox.
off("click");this._verboseCheckbox=null;this._clearLogButton.off("click");this._clearLogButton=
null;this._copyToClipButton.off("click");this._copyToClipButton=null;this._regExpTextbox.
off("keypress keyup");this._regExpTextbox=null},_copyToClipboard:function(t){n.clipboardData?
n.clipboardData.setData("Text",t):n.prompt("Copy to clipboard (Ctrl+C) then press enter to continue",
t)},_getCurrentFilter:function(){var n=0,t,i;if(n=this._errorsCheckbox.is(":checked")?
n|1:n,n=this._warningsCheckbox.is(":checked")?n|2:n,n=this._performanceCheckbox.
is(":checked")?n|4:n,n=this._informationCheckbox.is(":checked")?n|8:n,n=this._verboseCheckbox.
is(":checked")?n|16:n,t=this._regExpTextbox.val(),i=null,!(t===""||t===null))try{
i=new RegExp(t,"i")}catch(r){i=null}return{severityMask:n,regExp:i}},_applyFiltersOnLog:
function(){var i=this,r=this._getCurrentFilter(),n=this._logEntriesContainer.children(
);n.removeClass("fxshell-logentry-filtered-out");n.each(function(){i._applyFiltersOnRow(
t(this),r)})},_applyFiltersOnRow:function(n,t){var i=this._matchesSeverityFilter(
n,t.severityMask)&&(t.regExp===null||t.regExp.test(n.text()));return i||n.addClass(
"fxshell-logentry-filtered-out"),i},_matchesSeverityFilter:function(n,t){return((t&
1)==1?n.hasClass("fxshell-logentry-error"):!1)||((t&2)==2?n.hasClass("fxshell-logentry-warning"):
!1)||((t&4)==4?n.hasClass("fxshell-logentry-performance"):!1)||((t&8)==8?n.hasClass(
"fxshell-logentry-information"):!1)||((t&16)==16?n.hasClass("fxshell-logentry-verbose"):
!1)}})}(this,jQuery,this.fx.resources),function(n,t,i){"use strict";n.widget("fx.fxScrollbar",
{options:{autorefresh:0,overlay:!1,animated:!1,isStaticContainerSize:!1},_scrollableTemplate:
"<div class='fx-scrollbar'><div class='fx-scrollbar-area'><\/div><\/div>",_widget:
null,_scrollableArea:null,_scrollbarSize:16,_trackOverlap:10,_pushScrollbarBy:40,
_savedProperties:null,_resizeHandler:null,_autoRefreshInterval:null,_autoRefreshWidth:
-1,_autoRefreshHeight:-1,_minimumScrollbarSize:15,_resizeTimerHandle:null,_track:
null,_ratio:null,_isResizing:!1,_isRefreshing:!1,_readyForTrackClick:!1,_calls:{
vertical:{scrollPosition:"scrollTop",scrollSize:"scrollHeight",clientSize:"clientHeight",
page:"pageY",position:"top",size:"height"},horizontal:{scrollPosition:"scrollLeft",
scrollSize:"scrollWidth",clientSize:"clientWidth",page:"pageX",position:"left",size:
"width"}},_create:function(){if(typeof this.options.autorefresh!="number")throw"AutoRefresh must be a number in milliseconds";
this._portScroll(n.proxy(function(){return this._createTrack(),this._attachScrollable(
)},this));var i=this;this._resizeHandler=function(){i._resize.apply(i,arguments)}
;n(t).on("resize",this._resizeHandler);this.options.autorefresh>0&&(this._autoRefreshWidth=
this.element[0].scrollWidth,this._autoRefreshHeight=this.element[0].scrollHeight,
this._autoRefreshInterval=t.setInterval(n.proxy(this._autoRefresh,this),this.options.
autorefresh))},widget:function(){return this._widget||this.element},_destroy:function(
){this._autoRefreshInterval&&(t.clearInterval(this._autoRefreshInterval),this._autoRefreshInterval=
null);this._portScroll(n.proxy(function(){return this._resetStyle(),null},this));
this._resizeHandler!==null&&(n(t).off("resize",this._resizeHandler),this._resizeHandler=
null);this.element.off(".fxScrollbar");this._super()},refresh:function(t){this._isRefreshing||
(this._isRefreshing=!0,this._portScroll(n.proxy(function(){var n;return this.options.
isStaticContainerSize&&!t?(n=this._getScrollingObjectFromFixedSize(),this._positionTrack(
this._widget.width(),this._widget.height(),n),n):(this._resetStyle(),this._attachScrollable(
))},this)),this._isRefreshing=!1)},scrollTop:function(n){if(this._scrollableArea)
{if(n===i)return this._scrollableArea.scrollTop();this._scrollableArea.scrollTop(
n)}},scrollLeft:function(n){if(this._scrollableArea){if(n===i)return this._scrollableArea.
scrollLeft();this._scrollableArea.scrollLeft(n)}},_portScroll:function(i){var r=
this._scrollableArea||this.element,f=r.scrollLeft(),e=r.scrollTop(),o=t.document.
activeElement,u=i(f,e);n.contains(this.element[0],o)&&o.focus();r=this._scrollableArea||
this.element;r.scrollLeft(f).scrollTop(e).scroll();u&&(u.isHorizontalScrolling&&
this._track.x.show(),u.isVerticalScrolling&&this._track.y.show())},_createTrack:
function(){var t=this;this._track={};this._track.x=n("<div class='fx-scrollbar-track fx-scrollbar-track-x'><div class='fx-scrollbar-handle'><\/div><\/div>").
find(".fx-scrollbar-handle").click(!1).mousedown(this._getHandleHandler(this,this.
_calls.horizontal)).end().mousedown(function(){t._readyForTrackClick=!0}).mouseup(
this._getTrackHandler(this,this._calls.horizontal));this._track.y=n("<div class='fx-scrollbar-track fx-scrollbar-track-y'><div class='fx-scrollbar-handle'><\/div><\/div>").
find(".fx-scrollbar-handle").click(!1).mousedown(this._getHandleHandler(this,this.
_calls.vertical)).end().mousedown(function(){t._readyForTrackClick=!0}).mouseup(
this._getTrackHandler(this,this._calls.vertical))},_autoRefresh:function(){(this.
element[0].scrollWidth!==this._autoRefreshWidth||this.element[0].scrollHeight!==
this._autoRefreshHeight)&&(this._autoRefreshWidth=this.element[0].scrollWidth,this.
_autoRefreshHeight=this.element[0].scrollHeight,this.refresh())},_resetStyle:function(
){this._savedProperties&&(this._transferOverflowProperties(this.element,this._savedProperties),
this._transferGlobalProperties(this.element,this._savedProperties),this.element.
css({width:this._savedProperties.fluidW?"":this._savedProperties.cssWidth,height:
this._savedProperties.fluidH?"":this._savedProperties.cssHeight}));this._detachTrack(
);this.element.unwrap().unwrap();this._widget=null;this._scrollableArea=null},_attachScrollable:
function(){var t=this.element.width(),i=this.element.height(),r=this._getScrollingObject(
this.element);return this.element.wrap(this._scrollableTemplate),this._scrollableArea=
this.element.parent(),this._widget=this._scrollableArea.parent(),this._savedProperties=
this._getProperties(this.element),n.extend(this._savedProperties,this._eraseGlobalProperties(
this.element)),this.options.animated&&this._widget.addClass("fx-scrollbar-animated"),
n.extend(this._savedProperties,this._eraseOverflowProperties(this.element)),this.
_transferOverflowProperties(this._scrollableArea,this._savedProperties),this._widget.
width(t).height(i),this._transferGlobalProperties(this._widget,this._savedProperties),
this._savedProperties.position==="static"&&this._widget.css("position",""),this.
_positionTrack(t,i,r),this._attachScrollEvent(this._scrollableArea),this._preventScrollingWhenDragging(
this.element),r},_preventScrollingWhenDragging:function(t){var i=this,r=["SELECT",
"OPTION","INPUT"];t.off("mousedown.fxScrollbar").on("mousedown.fxScrollbar",function(
t){n.inArray(t.target.tagName,r)===-1&&i._scrollableArea.css({overflowX:"hidden",
overflowY:"hidden"})}).off("mouseup.fxScrollbar").on("mouseup.fxScrollbar",function(
){i._scrollableArea.css({overflowX:i._savedProperties.overflowX,overflowY:i._savedProperties.
overflowY})})},_positionTrack:function(n,t,i){this._track.x.hide();this._track.y.
hide();this._attachTrack();var r=0,u=0,f=this._track.y.width(),e=this._track.x.height(
);this.element.width(Math.max(n)-(!this.options.overlay&&i.isVerticalScrolling&&
!i.isHorizontalScrolling?f:0)).height(Math.max(t)-(!this.options.overlay&&i.isHorizontalScrolling&&
!i.isVerticalScrolling?e:0));i.isHorizontalScrolling&&(u=this._pushScrollbarBy,this.
element.width(this.element[0].scrollWidth));i.isVerticalScrolling&&(r=this._pushScrollbarBy,
this.element.height("auto"));i.isVerticalScrolling&&i.isHorizontalScrolling&&(this.
element.width(this.element.width()+f+r-this._scrollbarSize),this.element.height(
this.element.height()+e+u-this._scrollbarSize));this._scrollableArea.width(n+r).
height(t+u);this._ratio={};this._setHandleSize(this._track.x.find(".fx-scrollbar-handle"),
i.isVerticalScrolling?f:0,this._calls.horizontal);this._setHandleSize(this._track.
y.find(".fx-scrollbar-handle"),i.isHorizontalScrolling?e:0,this._calls.vertical)}
,_getProperties:function(n){return{cssWidth:n[0].style.width,cssHeight:n[0].style.
height,fluidW:n[0].style.width==="",fluidH:n[0].style.height===""}},_eraseOverflowProperties:
function(n){var t={overflowX:n.css("overflowX"),overflowY:n.css("overflowY")};return n.
css({overflowX:"hidden",overflowY:"hidden"}),t},_transferOverflowProperties:function(
n,t){n.css({overflowX:t.overflowX,overflowY:t.overflowY})},_eraseGlobalProperties:
function(n){var t=n.css("max-height"),i={marginTop:n.css("marginTop"),marginRight:
n.css("marginRight"),marginBottom:n.css("marginBottom"),marginLeft:n.css("marginLeft"),
borderTopWidth:n.css("borderTopWidth"),borderTopColor:n.css("borderTopColor"),borderTopStyle:
n.css("borderTopStyle"),borderRightWidth:n.css("borderRightWidth"),borderRightColor:
n.css("borderRightColor"),borderRightStyle:n.css("borderRightStyle"),borderBottomWidth:
n.css("borderBottomWidth"),borderBottomColor:n.css("borderBottomColor"),borderBottomStyle:
n.css("borderBottomStyle"),borderLeftWidth:n.css("borderLeftWidth"),borderLeftColor:
n.css("borderLeftColor"),borderLeftStyle:n.css("borderLeftStyle"),position:n.css(
"position"),top:n.css("top"),right:n.css("right"),bottom:n.css("bottom"),left:n.
css("left"),float:n.css("float"),maxHeight:t==="0px"?"none":t};return n.css({margin:
0,borderTopWidth:"0",borderTopColor:"",borderTopStyle:"",borderRightWidth:"0",borderRightColor:
"",borderRightStyle:"",borderBottomWidth:"0",borderBottomColor:"",borderBottomStyle:
"",borderLeftWidth:"0",borderLeftColor:"",borderLeftStyle:"",position:"static",top:
"",right:"",bottom:"",left:"",float:"","max-height":"none"}),i},_transferGlobalProperties:
function(n,t){n.css({marginTop:t.marginTop,marginRight:t.marginRight,marginBottom:
t.marginBottom,marginLeft:t.marginLeft,borderTopWidth:t.borderTopWidth,borderTopColor:
t.borderTopColor,borderTopStyle:t.borderTopStyle,borderRightWidth:t.borderRightWidth,
borderRightColor:t.borderRightColor,borderRightStyle:t.borderRightStyle,borderBottomWidth:
t.borderBottomWidth,borderBottomColor:t.borderBottomColor,borderBottomStyle:t.borderBottomStyle,
borderLeftWidth:t.borderLeftWidth,borderLeftColor:t.borderLeftColor,borderLeftStyle:
t.borderLeftStyle,position:t.position,top:t.top,right:t.right,bottom:t.bottom,left:
t.left,float:t.float,maxHeight:t.maxHeight})},_getScrollingObjectFromFixedSize:function(
){var i=this._scrollableArea.css("overflowX"),r=this._scrollableArea.css("overflowY"),
t,n={isHorizontalScrolling:!1,isVerticalScrolling:!1};return i==="scroll"?n.isHorizontalScrolling=
!0:i==="auto"&&(t=this.element.width(),this.element.width("auto"),n.isHorizontalScrolling=
this.element[0].scrollWidth>this._scrollableArea[0].clientWidth,this.element.width(
t)),r==="scroll"?n.isVerticalScrolling=!0:r==="auto"&&(t=this.element.height(),this.
element.height("auto"),n.isVerticalScrolling=this.element[0].clientHeight>this._scrollableArea[
0].clientHeight,this.element.height(t)),n},_getScrollingObject:function(n){return{
isHorizontalScrolling:this._isHorizontalScrolling(n.css("overflowX"),n),isVerticalScrolling:
this._isVerticalScrolling(n.css("overflowY"),n)}},_isVerticalScrolling:function(
n,t){return this._isScrolling(n,t,this._calls.vertical)},_isHorizontalScrolling:
function(n,t){return this._isScrolling(n,t,this._calls.horizontal)},_isScrolling:
function(n,t,i){return n==="scroll"?!0:n==="hidden"?!1:t[0][i.clientSize]<t[0][i.
scrollSize]},_attachScrollEvent:function(i){var r=this;i.off("scroll.fxScrollbar").
on("scroll.fxScrollbar",function(){var i=r._track.x.find(".fx-scrollbar-handle"),
u=r._track.y.find(".fx-scrollbar-handle");i.css("left",n(this).scrollLeft()/r._ratio.
width);u.css("top",n(this).scrollTop()/r._ratio.height);r._isResizing||r._isRefreshing||
(i.addClass("fx-scrollbar-onmousewheel"),u.addClass("fx-scrollbar-onmousewheel"),
t.setTimeout(function(){i.removeClass("fx-scrollbar-onmousewheel");u.removeClass(
"fx-scrollbar-onmousewheel")},0))})},_resize:function(){var n=this;this._resizeTimerHandle&&
t.clearTimeout(this._resizeTimerHandle);this._isResizing=!0;this.refresh();this.
_resizeTimerHandle=t.setTimeout(function(){n._isResizing=!1},10)},_detachTrack:function(
){this._track.x.detach();this._track.y.detach()},_attachTrack:function(){(this._track.
x.parent().length===0||this._track.y.parent().length===0)&&this._widget.append(this.
_track.x).append(this._track.y)},_setHandleSize:function(n,t,i){var u=this.element[
0][i.scrollSize],r=this._widget[0][i.clientSize],f=Math.max(this._minimumScrollbarSize,
r/u*(r-t));this._ratio[i.size]=(u-r)/Math.max(1,r-f-t-4);n.css(i.size,f).css(i.position,
this.element[i.scrollPosition]()*this._ratio[i.size])},_getHandleHandler:function(
i,r){return function(u){var f=n(this),e=u[r.page],o=f.position()[r.position];n(t.
document).on("mousemove.fxScrollbar",function(n){return i._scrollableArea[r.scrollPosition](
i._ratio[r.size]*(n[r.page]-e+o)),!1}).one("mouseup.fxScrollbar",function(){return n(
t.document).off("mousemove.fxScrollbar"),f.removeClass("fx-scrollbar-active"),!1}
);return f.addClass("fx-scrollbar-active"),!1}},_getTrackHandler:function(t,r){return function(
u){if(t._readyForTrackClick){if(t._readyForTrackClick=!1,u[r.page]===i)throw"The event doesn't have a proper position";
var f=n(this),e=t._widget[0][r.clientSize],h=f.find(".fx-scrollbar-handle"),c=u[
r.page]-f.offset()[r.position],o=t.element.parent()[r.scrollPosition](),s;s=c<h.
position()[r.position]?o-e:o+e;t.element.parent()[r.scrollPosition](s)}}}});n(function(
){n(".fx-scrollbar").each(function(){var i=t.fx.utilities.attributesToObject(this,
"data-fxcontrol");n(this).fxScrollbar(i)})})}(jQuery,this),function(n,t,i,r,u){"use strict";
var f=r.prototype,e="fxshell.dialogalertbox",o="<div class='fxshell-dialogalertbox-expandContainer'><div class='fxshell-dialogalertbox-contentContainer'><\/div><div class='fxshell-dialogalertbox-actionsContainer'><\/div><\/div>",
s="<button class='fxshell-dialogalertbox-expand'><\/button>",h="<button class='fxshell-dialogalertbox-collapse'><\/button>",
c=t.templates("<ul>{{for links}}<li tabindex='-1'><a href='{{url:url}}' target='_blank'>{{>text}}<\/a><\/li>{{/for}}<\/ul>");
t.widget(e,r,{options:{title:null,content:null,actions:[],maxExpansionHeight:200,
expandDuration:150,collapseDuration:300,text:u.getStrings(e),severity:"warning"},
_isExpanded:!1,_isExpanding:!1,_isCollapsing:!1,_dialogAlertBox:null,_expandedContainer:
null,_actionsContainer:null,_expandButton:null,_collapseButton:null,_create:function(
){var n=this,i=n.element;f._create.call(n);n._dialogAlertBox=t(o).width(i.outerWidth(
));n._expandedContainer=n._dialogAlertBox.find(".fxshell-dialogalertbox-contentContainer");
n._actionsContainer=n._dialogAlertBox.find(".fxshell-dialogalertbox-actionsContainer");
n._dialogAlertBox.append(n._expandedContainer);n._dialogAlertBox.append(n._actionsContainer);
n._anchor.append(n._dialogAlertBox);n._dialogAlertBox.height(0);n.element.addClass(
"fxshell-dialogalertbox-element")},_init:function(){var n=this,e=n.options.title,
o=n.options.content,r=n.options.actions,h=n.options.severity,s,f,u;if(typeof e!=
"string"){i.Diagnostics.Log.writeEntry("fxshell.dialogalertbox.TitleNotString","title is not a string",
i.Diagnostics.LogEntryLevel.error);return}if(typeof o!="string"){i.Diagnostics.Log.
writeEntry("fxshell.dialogalertbox.ContentNotString","content is not a string",i.
Diagnostics.LogEntryLevel.error);return}if(r){if(r.constructor!==Array){i.Diagnostics.
Log.writeEntry("fxshell.dialogalertbox.ActionsNotArray","actions is not an array",
i.Diagnostics.LogEntryLevel.error);return}if(r.length>3){i.Diagnostics.Log.writeEntry(
"fxshell.dialogalertbox.ThreeActionItemsMax","actions can only contain 3 items",
i.Diagnostics.LogEntryLevel.error);return}}u=n.getContentContainer();u.text(e);switch(
h){case"information":u.addClass("fxshell-dialogalertbox-info");break;case"warning":
u.addClass("fxshell-dialogalertbox-warning");break;case"error":u.addClass("fxshell-dialogalertbox-error")}
s={links:r};r&&r.length>0&&(n._actionsContainer.html(c.render(s)),f=n._actionsContainer.
find("li"),t(f[f.length-1]).addClass("last-child"));n._expandedContainer.text(o)}
,_destroy:function(){var n=this;n._expandButton.off(".dialogalertbox");n._collapseButton.
off(".dialogalertbox");n._dialogAlertBox.remove();n.element.removeClass("fxshell-dialogalertbox-element");
this._super()},_initializeControls:function(){var n=this,i=n.options;n._expandButton=
t(s).text(i.text.expand).on("click.dialogalertbox",t.proxy(n.expand,n));n._collapseButton=
t(h).text(i.text.collapse).hide().on("click.dialogalertbox",t.proxy(n.collapse,n));
n._controls.append(n._expandButton).append(n._collapseButton)},open:function(){var
n=this,t=parseInt(n.element.css("border-left-width"),10),i=parseInt(n.element.css(
"border-top-width"),10);return n._dialogAlertBox.css("left",-t).css("top",-i),f.
open.call(n)},expand:function(){var n=this,i=n.options,u=t.Deferred(),r,f,e;return(
n._isCollapsing=!1,n._isExpanded||n._isExpanding||!n._isOpen)?(u.resolve(),n._trigger(
"expand"),u.promise()):(n._isCollapsing=!(n._isExpanding=!0),r=n._dialogAlertBox.
outerHeight()+n._actionsContainer.outerHeight()+n._expandedContainer.outerHeight(
),r>i.maxExpansionHeight&&(r=i.maxExpansionHeight,f=n._expandedContainer.outerHeight(
)-n._expandedContainer.height(),e=r-n._actionsContainer.outerHeight()-f,n._expandedContainer.
height(e)),n._dialogAlertBox.stop().animate({height:r>i.maxExpansionHeight&&i.maxExpansionHeight>
0?i.maxExpansionHeight:r,opacity:i.openedOpacity},i.expandDuration,function(){n.
_isExpanded=!0;n._isExpanding=!1;u.resolve();n._trigger("expand")}),n._expandButton.
toggle(),n._collapseButton.toggle(),n._collapseButton.focus(),n._expandedContainer.
fxScrollbar(),u.promise())},collapse:function(){var n=this,r=n.options,i=t.Deferred(
);return!n._isExpanding&&(n._isCollapsing||!n._isExpanded)?(i.resolve(),n._trigger(
"collapse"),i.promise()):(n._isExpanding=!(n._isCollapsing=!0),n._dialogAlertBox.
stop().animate({height:0,opacity:r.closedOpacity},r.collapseDuration,function(){
n._isCollapsing=n._isExpanded=n._isExpanding=!1;i.resolve();n._trigger("expand")}
),n._collapseButton.toggle(),n._expandButton.toggle(),n._expandButton.focus(),i.
promise())},close:function(){var n=this,t=n.options.collapseDuration;return n.options.
collapseDuration=n.options.closeDuration,n.collapse(),n.options.collapseDuration=
t,f.close.call(n)}})}(this,jQuery,Shell,jQuery.fxshell.toastbox,this.fx.resources),
function(n,t,i,r,u){"use strict";var f=r.resources.getStrings("fxshell.navigation"),
e="<div id='fxshell-nav1'><div id='fxshell-nav1-scroll'><div id='fxshell-nav1-items'><nav><ul class='fxshell-navigation-nav1-container'><\/ul><\/nav><\/div><\/div><\/div><div id='fxshell-nav2'><a id='fxshell-nav2-back'><span class='sprite'><\/span><\/a><div id='fxshell-nav2-scroll'><div id='fxshell-nav2-items'><nav><ul class='fxshell-navigation-nav2-container'><\/ul><\/nav><\/div><\/div><\/div>",
o="<li data-link='class{>~getClasses(isSelected)} aria-selected{>~getAria(isSelected)} title{>~getTitle(displayError, displayWarning)} data-name{>name} data-state{>~getState(#view, isVisible, displayError, showSpinner, count)} data-warning-state{>~getWarningState(displayWarning)}'><a data-link=\"href{:~getLink(showSpinner, name)}\"><div class='fxshell-nav1-icon'><img data-link='src{url:iconUri} title{:tooltip}' /><\/div><div class='fxshell-nav1-count' data-link='{>count} data-showcount{>iconShowCount} data-invertcolor{>iconInvertTextColor}'><\/div><div class='fxshell-nav1-label' data-link='{:displayName:} title{:tooltip}'><\/div><div class='fxshell-nav1-erroricon'><span class='dlwux-left-nav-alert sprite'><\/span><\/div><div class='fxshell-nav1-errortext'><\/div><div class='fxshell-nav1-warningicon'><span class='dlwux-left-nav-warning sprite'><\/span><\/div><div class='fxshell-nav1-warningtext'><\/div><div class='fxshell-nav1-dots'><div class='fxshell-nav1-dot1'><\/div><div class='fxshell-nav1-dot2'><\/div><div class='fxshell-nav1-dot3'><\/div><\/div><\/a><\/li>",
s="<li data-link='class{>~getClasses(name, canNavigate)} aria-selected{>~getAria(name)}'><a data-link='href{:~calculateNavigationPath(canNavigate, navigationPath, name)}' title='{{attr:displayName||DisplayName}}'><span>{{>displayName||DisplayName}}<\/span><\/a><\/li>";
n.widget("fxShell.navigation",{_navWidthInPixels:200,_expandedNav1WidthInPixels:
200,_collapsedNav1WidthInPixels:60,_nav2WidthInPixels:150,_navErrorIcon:r.resources.
getContentUrl("Content/Images/left-nav-alert.png"),_navWarningIcon:r.resources.getContentUrl(
"Content/Images/left-nav-warning.png"),_extensionBadgeCompiledTemplate:null,_navigationItemCompiledTemplate:
null,_navpane:null,_nav1:null,_nav1items:null,_nav1scroll:null,_nav2:null,_nav2back:
null,_nav2items:null,_nav2scroll:null,_extensionBadgesLinked:!1,_create:function(
){this.widgetEventPrefix="";this.element.html(e);this.element.find("#fxshell-nav2-back").
attr("title",f.backImgAlt).find(">span").addClass("sprite dlwux-sprite-fxshell-nav2-back").
attr("title",f.backImgAlt);this._compileTemplates();this._cacheElementReferences(
)},_destroy:function(){this._releaseTemplates();this._releaseElementReferences();
this.element.empty();this._super()},updateLeftNavigationBarView:function(r,f,e){
var o=this,s=f.data,y=f.extensionBadges,c=r[r.length-2],p=r.length>=2?r[1]:"",v,
l,h,a;if(i.UI.Navigation.selectExtension(p),this._ensureExtensionBadges(i.UI.Navigation.
getBasePath(),y),s&&s.length>0&&s[0].showSpinner!==u)h=this._expandedNav1WidthInPixels+
"px",a=n("#aux-body"),a.hasClass("navpane-collapsed")&&a.removeClass("navpane-collapsed"),
this._nav1.stop().delay(500).animate({width:h},300,function(){o._nav1.removeClass(
"fxshell-navigation-badge-collapsed");o._navpane.removeClass("fxshell-navpane-collapsed");
o._navpane.addClass("fxshell-navpane-expanded");o._nav1scroll.trigger("resize")}
),this._nav2.stop().delay(500).animate({left:this._expandedNav1WidthInPixels+"px"},
300,function(){o._nav2.removeClass("fxshell-navigation-level2-docked");o._nav2.hide(
)}),this._nav1.delay(300).css("width",h),this._nav1scroll.delay(300).trigger("resize")
else{this._nav2items.off("click","a");this._navigationItemCompiledTemplate.link(
this._nav2items,s?s:[],{getClasses:function(n,t){var r=n===c,i="fxshell-nav2-item";
return i=i+" "+(r?"selected":""),i+" "+(t?"fxshell-nav2-item-unlocked":"fxshell-nav2-item-locked")
},getAria:function(n){return n===c?"true":"false"},calculateNavigationPath:function(
n,t,f){var s=r.slice(0,r.length-2).join("/"),e=null;return n===u||n?t?(e=t,e.extension=
r[1],o._navigationUrlEncoder(i.UI.Navigation.calculateNavigationPath(e))):o._navigationUrlEncoder(
s+"/"+f):""}});this._nav2items.on("click","a",function(t){var e,u,r,h=!0,s=n(t.currentTarget),
c=i.UI.Navigation.crackNavigationPath(s.attr("href")),f=i.UI.Navigation.currentLocation(
);if(s.attr("href")!==""){if(o._shouldPreserveCurrentTab(f,c)){u=f.item;r=c.item;
do if(h?(e=u.type+"/"+r.name,h=!1):e=r.type+"/"+r.name+"/"+e,u.parent||r.parent)
u=u.parent,r=r.parent;else break;while(1);s.attr("href",i.UI.Navigation.getBasePath(
)+"/"+f.extension+"/"+e+(f.viewName?"/"+f.viewName:""))}}else t.preventDefault(),
t.stopPropagation()});h=this._navWidthInPixels-this._collapsedNav1WidthInPixels+
"px";this._nav1.stop().delay(500).animate({width:this._collapsedNav1WidthInPixels+
"px"},300,function(){o._nav1.addClass("fxshell-navigation-badge-collapsed");o._navpane.
removeClass("fxshell-navpane-expanded");o._navpane.addClass("fxshell-navpane-collapsed");
var t=n("#aux-body");t.addClass("navpane-collapsed")})}t.cdm.currentExtension&&t.
cdm.currentExtension.name!==c&&(v=t.cdm.currentExtension.displayName,l=i.UI.Navigation.
calculateNavigationPath({extension:t.cdm.currentExtension}),e&&(e.label&&(v=e.label),
e.backNavigationPath&&(l=e.backNavigationPath)),this._nav2back.attr("href",l))},
_shouldPreserveCurrentTab:function(n,t){var i,r,e,o,u,f,s=!0,h=!1;if(n.extension===
t.extension){i=n.item||null;r=t.item||null;do{if(!i||!r)break;if(s){if(u=i.type||
null,f=r.type||null,!u||!f||u!==f)break;s=!1}else if(u=i.type||null,f=r.type||null,
e=i.name||null,o=r.name||null,!u||!f||!e||!o||u!==f||e!==o)break;if(i.parent||r.
parent)i=i.parent||null,r=r.parent||null;else{h=!0;break}}while(1)}return h},_cacheElementReferences:
function(){this._navpane=this.element;this._nav1=this._navpane.find("#fxshell-nav1");
this._nav1items=this._nav1.find(".fxshell-navigation-nav1-container");this._nav1scroll=
this._nav1.find("#fxshell-nav1-scroll").fxScrollbar({overlay:!0,animated:!0});this.
_nav2=this._navpane.find("#fxshell-nav2");this._nav2back=this._nav2.find("#fxshell-nav2-back");
this._nav2items=this._nav2.find(".fxshell-navigation-nav2-container");this._nav2scroll=
this._nav2.find("#fxshell-nav2-scroll");this._nav2scroll.find("#fxshell-nav2-items").
fxScrollbar({overlay:!0,animated:!0})},_ensureExtensionBadges:function(n,t){var i=
this;t&&t.length>0&&(this._extensionBadgesLinked||(this._extensionBadgeCompiledTemplate.
link(this._nav1items,t,{getClasses:function(n){var t="fxshell-nav1-item";return n?
t+" selected":t},getAria:function(n){return n?"true":"false"},getErrorIcon:function(
){return i._navErrorIcon},getWarningIcon:function(){return i._navWarningIcon},getTitle:
function(n,t){return n||t},getState:function(n,t,r,u,f){return t?r?(i._stopExtensionBadgeSpinner(
n.nodes[0]),"error"):u?(i._startExtensionBadgeSpinner(n.nodes[0]),"loading"):(i.
_stopExtensionBadgeSpinner(n.nodes[0]),f<100)?"2digit":"3digit":"notavailable"},
getWarningState:function(n){return n?"warning":""},getLink:function(t,r){return t?
"":i._navigationUrlEncoder(n+"/"+r)},offset:function(n){return n?"top: "+n+"px;":
""}}),this._nav2.find(".fxshell-nav1-errortext").text(f.error),this._nav2.find(".fxshell-nav1-warningtext").
text(f.warning)),this._extensionBadgesLinked=!0)},_startExtensionBadgeSpinner:function(
i){var r=n(i),u=0,o=r.find(".fxshell-nav1-dot1"),s=r.find(".fxshell-nav1-dot2"),
h=r.find(".fxshell-nav1-dot3"),f=r.data("interval"),e;f||(e=function(){var n;u+=
15;u=u%720;n=u>720?0:u;o.css("opacity",Math.cos((+n)/360*Math.PI)+1);s.css("opacity",
Math.cos((n-80)/360*Math.PI)+1);h.css("opacity",Math.cos((n-160)/360*Math.PI)+1)}
,f=t.window.setInterval(e,10),r.data("interval",f))},_stopExtensionBadgeSpinner:
function(i){var r=n(i),f=r.find(".fxshell-nav1-dots > *"),u=r.data("interval");u&&
(f.animate({opacity:0},300),t.window.clearInterval(u),r.data("interval",null))},
_navigationUrlEncoder:function(n){return n?encodeURI(n).replace(/'/g,"%27").replace(
/"/g,"%22"):n},_releaseElementReferences:function(){this._navpane=null;this._nav1=
null;this._nav1items=null;this._nav1scroll=null;this._nav2=null;this._nav2back=null;
this._nav2items=null;this._nav2scroll=null},_compileTemplates:function(){this._extensionBadgeCompiledTemplate=
n.templates(o);this._navigationItemCompiledTemplate=n.templates(s)},_releaseTemplates:
function(){this._extensionBadgeCompiledTemplate=null;this._navigationItemCompiledTemplate=
null}})}(jQuery,this,this.Shell,this.fx),function(n,t,i,r,u){"use strict";var e=
t.extend({},u.getStrings("fxshell.previewbadge")),f=t.each(e,function(n,t){e[n]=
r.htmlEncode(t)}),h=n.Resources.getResources("fx.links"),c="<div class='preview-badge'>"+
f.previewButtonText+"<\/div>",o="!productionPortalLinkPlaceholder!",s="!termsLinkPlaceholder!",
l="<div class='preview-positioner'><div class='preview-content'><h3>"+f.contentHeader+
"<\/h3><p>"+f.contentPara+"<\/p><ul><li><a href='"+o+"'>"+f.productionPortalLinkText+
"<\/a><\/li><li><a href='"+s+"'>"+f.termsLinkText+"<\/a><\/li><\/ul><a href='#' class='link-tail preview-content-feedback'>"+
f.feedbackLinkText+"<\/a><\/div><\/div>",a="<div class='preview-positioner'><div class='preview-content'><h3>"+
f.onPremContentHeader+"<\/h3><p>"+f.onPremContentPara+"<\/p><p>Product version: "+
Shell.Environment.getPortalVersion()+"<\/p><\/div><\/div>";t.widget("fxshell.previewbadge",
{options:{isOnPrem:!1},_previewButton:null,_previewTemplate:null,_create:function(
){this.widgetEventPrefix="";var r=this,u,n=this.options.isOnPrem?a:l;n=n.replace(
o,i.Environment.getProductionPortalUrl());n=n.replace(s,h.windowsAzurePreviewTermsOfUse);
this._previewButton=t(c);this._previewTemplate=t(n);t(".fxshell-avatarbar-small").
append(this._previewButton);t(".fxshell-avatarbar").after(this._previewTemplate);
t(".preview-content-feedback").on("click",function(n){n.stopPropagation();n.preventDefault(
);r._trigger("feedback",null,null)});u={mouseenter:function(){return r._previewTemplate.
find(".preview-content").stop(!0,!1).fade("show",{speed:200}),!1},mouseleave:function(
){return r._previewTemplate.find(".preview-content").stop(!0,!1).fade("hide",{speed:
200}),!1},click:function(n){n.stopPropagation()}};this._previewButton.on(u);this.
_previewTemplate.on(u)},_destroy:function(){this._previewButton.off();this._previewTemplate.
off();this._super()}})}(this,jQuery,Shell,this.fx.utilities,this.fx.resources),function(
n,t,i,r,u,f){"use strict";var e=t.prototype,o=n.templates("<div class='fx-dialog-template'><\/div><a href='#' class='fx-dialog-ok' title='{{attr:text.ok}}'><span class='sprite {{attr:class_.ok}}'><\/span><\/a><a href='#' class='fx-dialog-close' title='{{attr:text.close}}'><span class='sprite {{attr:class_.close}}'><\/span><\/a>");
n.widget("fx.fxDialog",{options:{extension:null,template:null,size:null,class_:u.
getClasses("fx.fxDialog"),text:u.getStrings("fx.fxDialog")},_buttonOkClickHandler:
null,_escapeHandler:null,_buttonOkMouseEnterHandler:null,_buttonOkMouseLeaveHandler:
null,_keydownHandler:null,_savedElementForFocus:null,_create:function(){var i,t=
this;this.element.addClass("fx-dialog").attr("role","dialog").html(o.render(this.
options)).on("click.fxdropdown","a[href].fx-dialog-ok",this._buttonOkClickHandler=
n.proxy(this.ok,this)).on("keydown.fxdropdown",this._escapeHandler=function(i){i.
which===n.ui.keyCode.ESCAPE&&t.close(i)}).on("mouseenter.fxdropdown mouseup.fxdropdown focus.fxdropdown",
"a[href].fx-dialog-ok span.sprite",this._buttonOkMouseEnterHandler=function(){n(
this).removeClass(t.options.class_.ok).addClass(t.options.class_.okHover)}).on("mouseleave.fxdropdown mousedown.fxdropdown blur.fxdropdown",
"a[href].fx-dialog-ok span.sprite",this._buttonOkMouseLeaveHandler=function(){n(
this).removeClass(t.options.class_.okHover).addClass(t.options.class_.ok)});this.
options.size&&this.element.css({width:this.options.size[0],height:this.options.size[
1],minHeight:0});this.element.find(".fx-dialog-close").on("click",n.proxy(this.close,
this)).find("span.sprite").addClass(this.options.class_.close).on("mouseenter mouseup focus",
function(){n(this).removeClass(t.options.class_.close).addClass(t.options.class_.
closeHover)}).on("mouseleave mousedown blur",function(){n(this).removeClass(t.options.
class_.closeHover).addClass(t.options.class_.close)});if(typeof this.options.template==
"string"){if(!this.options.extension||typeof this.options.extension!="string")throw"DialogPresenter: Required parameter options.extension was not supplied, or it is not a string.";
i=r.extensionIndex[this.options.extension].templates[this.options.template]}else
i=this.options.template;i.link(".fx-dialog-template",this.options.data||{});this.
options.init&&this.options.init.call(this,this.options.data);this._setupTrapFocus(
);this._focusFirstElement();e._create.call(this)},_destroy:function(){this.element.
removeClass("fx-dialog").off("click.fxdropdown","a[href].fx-dialog-ok",this._buttonOkClickHandler).
off("keydown.fxdropdown",this._escapeHandler).off("mouseenter.fxdropdown mouseup.fxdropdown focus.fxdropdown",
"a[href].fx-dialog-ok",this._buttonOkMouseEnterHandler).off("mouseleave.fxdropdown mousedown.fxdropdown blur.fxdropdown",
"a[href].fx-dialog-ok",this._buttonOkMouseLeaveHandler);this._super()},close:function(
n){n.preventDefault();this.options.okOrClose&&this.options.okOrClose.call(this,this.
options.data);this.options.closeCallback&&this.options.closeCallback();this._removeTrapFocus(
);this._restoreFocusElement()},ok:function(n){var u,t;n.preventDefault();this.options.
ok&&(u=this.options.ok(this._gatherFields()));(u===f||u)&&(t=r.extensionIndex[this.
options.extension],t&&t.navigationalViewModel&&i.Exp.Data.expireData(t.navigationalViewModel.
uri),this.close(n))},_gatherFields:function(){var t={};return this.element.find(
"input").each(function(){t[this.name||this.id]=this.value||n(this).text()}),this.
element.find("select").each(function(){var i=[];n(this).children("option").each(
function(){this.selected&&i.push(this.value)});t[this.name||this.id]=i}),t},enableOkButton:
function(){this.element.find(".fx-dialog-ok").attr("href","#")},disableOkButton:
function(){this.element.find(".fx-dialog-ok").removeAttr("href")},_setupTrapFocus:
function(){var i=this,t=this.widget();this._removeTrapFocus();t.on("keydown",this.
_keydownHandler=function(r){var u,f,e;if(r.which===n.ui.keyCode.TAB)if(u=n(i._getAllTabbableElements(
t)),f=u.filter(":first"),e=u.filter(":last"),r.target!==e[0]||r.shiftKey){if(r.target===
f[0]&&r.shiftKey)return e.focus(),!1}else return f.focus(),!1})},_removeTrapFocus:
function(){this._keydownHandler&&(this.widget().off("keydown",this._keydownHandler),
this._keydownHandler=null)},_focusFirstElement:function(){this._savedElementForFocus=
i.document.activeElement;this.widget().find(":tabbable").first().focus()},_restoreFocusElement:
function(){var n=this._savedElementForFocus;n&&i.setTimeout(function(){n.focus()}
,200)},_getAllTabbableElements:function(n){var t=n.find(":tabbable").toArray();return t.
stableSort?t.stableSort(function(n,t){return n.tabIndex>t.tabIndex?t.tabIndex===
0?-1:1:n.tabIndex<t.tabIndex?n.tabIndex===0?1:-1:0}):t}})}(jQuery,jQuery.Widget,
this,Shell,this.fx.resources),function(n,t,i){"use strict";function e(e){function s(
){if(!r){var f;r=n("<div />").appendTo(u);n.extend(e,{closeCallback:o});u.show();
r.fxDialog(e);u.css({"z-index":e.zIndex?e.zIndex+1:t.fx.utilities.getNextZIndex(
u.css("z-index")),"margin-left":r.outerWidth()/-2,"margin-top":r.outerHeight()/-2});
f=e.extension;f&&(f=f.name||f);i.Diagnostics.Telemetry.traceEvent("dialog",f,e.name)}
}r||(f.css("z-index",e.zIndex?e.zIndex:t.fx.utilities.getNextZIndex(f.css("z-index"))).
show().animate({opacity:.75},500),t.setTimeout(s,100))}function o(){f.animate({opacity:
0},250,function(){f.hide()});u.hide();r.remove();r=null}var f,u,r;i.Namespace.define(
"Shell.UI",{DialogPresenter:{show:e}});n(function(){var t=n("body");f=n("<div />",
{"class":"fx-dialogpresenter-shield"}).appendTo(t);u=n("<div />",{"class":"fx-dialogpresenter"}).
appendTo(t)})}(jQuery,this,Shell),function(n,t,i){"use strict";var r=i.getStrings(
"fxshell.feedback"),u=function(n){return t.htmlEncode(r[n])},f="<div class='fxshell-feedback'><h2>"+
u("title")+"<\/h2><textarea class='fxshell-feedback-textarea' id='fxshell-feedback-textarea' rows='9' maxlength='1800'><\/textarea><\/div>",
e=$.templates(f)}(Shell,this.fx.utilities,this.fx.resources),function(n,t){"use strict";
n.Namespace.define("Shell",{extensions:[],extensionIndex:{},extension:function(i)
{return this.extensionIndex[i.name]=i,this.extensions.push(i),i.pageRequestId=n.
Environment.getPageRequestId(),i.templates={},i.templateUris={},i.dataIsLoaded=!1,
i.navigationalViewModelPath===t&&(i.navigationalViewModelPath=""),i.viewModels===
t&&(i.viewModels=[]),i.displayOrderHint===t&&(i.displayOrderHint=9999),i.loadOrderHint===
t&&(i.loadOrderHint=9999),i.includeInAllView===t&&(i.includeInAllView=!0),i.excludeFromViewInitialization===
t&&(i.excludeFromViewInitialization=!1),i.excludeFromNavigation===t&&(i.excludeFromNavigation=
!1),i.id=n.Utilities.newGuid(),i},controls:{}})}(Shell),function(n,t,i){"use strict";
function u(n){return new i.Promise(function(r){var s=0,f,u,h=function(n){o(n);++s===
u&&(r(),DataLab.Performance.ResourceTimings.isEnabled&&setTimeout(function(){DataLab.
Performance.ResourceTimings.doClearResourceTimingsOnIntervalStart=!0;DataLab.Performance.
ResourceTimings.send({intervalNumber:1},5,2e3)},0))},c=function(){++s===u&&r()};
if(e(),i.Utilities.isArray(n)||(n=typeof n=="string"?[n]:[]),u=n.length,u===0){r(
);return}for(f=0;f<u;f++)t.getJSON(n[f]).done(h).fail(c)})}function f(n){i.Utilities.
isArray(n)||(n=[n]);[].push.apply(r,n)}function e(){i.Utilities.isArray(r)&&(r.forEach(
function(n){i.Extensions.add(n)}),r=[])}function o(n){var t;if(!!n)for(t in n)n.
hasOwnProperty(t)&&i.Extensions.add(n[t])}var r=[];i.Namespace.define("Shell.Internal.ExtensionProviders",
{load:u,addLocal:f})}(this,jQuery,Shell),function(n,t,i){"use strict";function u(
){var r,u,t,i,o,s,e;for(Shell.Diagnostics.Telemetry.timerStart("cdm.compileTemplates"),
r=0,u=window.templates.length;r<u;r++)if(t=window.templates[r],i=Shell.extensionIndex[
t.extensionName],i){i.templateUris[t.templateName]=t.src;try{o=DataLab.ApplyLocalizationToHTMLResource(
t.content);s=n.templates(null,{markup:o,helpers:{extensionName:t.extensionName}});
i.templates[t.templateName]=s}catch(f){e=Shell.Utilities.htmlEncode("Compilation error for template '"+
t.src+"' referenced by extension '"+t.extensionName+"' as '"+t.templateName+"'. The error message was: "+
f.message||f.Message||f);Shell.Diagnostics.Log.writeEntry("cdm.CompilationError",
e,Shell.Diagnostics.LogEntryLevel.error);i.templates[t.templateName]=n.templates(
"<div>"+e+"<\/div>")}}else continue;Shell.Diagnostics.Telemetry.timerStopAndLog(
"cdm.compileTemplates","Compile extension templates ("+u+"):")}function f(){function t(
t,i){var e=this.view.tmpl.helpers,o=e?Shell.extensionIndex[e.extensionName]:null,
s=o&&i(o),u=this.props._encode||"html",f,r;if(r=s&&s[t]||t,r=r.format(this.props),
u!=="none"){if(f=u==="html"?Shell.Utilities.SafeMarkup.create:n.views.converters[
u],!f)throw'Unknown resource encoder: "'+u+'"';r=f(r)}return r}n.views.tags("res",
function(n){return t.call(this,n,function(n){return n.getResources?n.getResources(
):null})});n.views.tags("link",function(n){return t.call(this,n,function(n){return n.
getLinks?n.getLinks():null})});n.views.tags("url",function(n){return i.getContentUrl(
n)})}function e(n,t,i){var r=typeof i=="number",u=t[t.collectionPropertyName||"data"],
f=r?u[i]:{};cdm.setActiveItem(f)}var r;window.cdm={currentContext:{},currentActiveItem:
null,currentExtension:null,sessionId:null,currentWizard:null,dialogActive:!1,setActiveItem:
function(t){n(cdm.currentActiveItem).unbind("propertyChange.aux-activeItem");n.observable(
cdm).setProperty("currentActiveItem",t);n(cdm.currentActiveItem).bind("propertyChange.aux-activeItem",
function(t,i){n(cdm).trigger("activeItemChanged",{activeItem:cdm.currentActiveItem,
changeType:"Property",originalEventData:i})});n(cdm).trigger("activeItemChanged",
{activeItem:cdm.currentActiveItem,changeType:"Replaced",originalEventData:null})}
,getActiveItem:function(){return cdm.currentActiveItem},extensionShowCategory:function(
t,i){var r=null;i in Shell.extensionIndex&&(r=Shell.extensionIndex[i],n.observable(
r.navItem).setProperty("isVisible",t))},showPreviewLabel:function(n,t){var u="isBeta"in
t&&t.isBeta,i,r;u&&(i=Resources&&Resources.getResources?Resources.getResources("fx"):
null,r=i&&i.fxshell_previewbadge_previewButtonText?i.fxshell_previewbadge_previewButtonText:
"Preview",n.find(".preview-badge-ontitle").remove(),n.append("<span class='preview-badge-ontitle'>"+
r+"<\/span>"))},updateCollectionView:function(t,i,u){var a=n("#tabcontainer"),y=
a.tabs(),c;y.refresh();a.hide();n("#aux-pane-grid").show();n("#aux-GridHeader").
text(u||"Items");this.showPreviewLabel(n(".itemtitle"),t);i||(i={});var s=i[i.collectionPropertyName||
"data"]||[],o=n("#aux-pane-grid"),h=o.clone();h.find("div.aux-gridview").remove(
);c=o.find("div.aux-gridview");c&&cdm._disposeElement(c);o.after(h);o.remove();var
l=h.find("#aux-collectionView"),v=[],f=t&&t.gridView;f&&f.columns&&(v=n.map(f.columns,
function(t){return n.extend(!0,{},t)}));l.wazDataGrid({columns:v,data:s,selectFirstRowByDefault:
!0,selectable:!0,rowSelect:function(r,u){e(t,i,u.selected&&n.inArray(u.selected.
dataItem,s))}});f&&typeof f.activated=="function"&&f.activated(t,l,s);r=l},selectCollectionViewRow:
function(t,i){var u,f,e,h;if(r){if(f=r.wazDataGrid("option","data"),typeof t=="number")
u=f[t];else for(e=0,h=f.length;e<h;e++)if(f[e][t]===i){u=f[e];break}if(u){var s=
r.wazDataGrid("option","rowMetadata"),c=r.wazDataGrid("getSelectedRows"),o=n.grep(
s,function(n){return n.dataItem===u})[0];n.each(c,function(){n.observable(this).
setProperty("selected",!1)});o||(o={dataItem:u},n.observable(s).insert(s.length,
o));n.observable(o).setProperty("selected",!0);r.wazDataGrid("option","rowSelect")(
null,{selected:o})}}},updateTabsView:function(t,i,r,u){var f,e;r||(r={});t&&(n("#aux-pane-grid").
hide(),e=n("#tabcontainer"),e.show(),f=e.find(".itemtitle"),f.text(u.title),this.
showPreviewLabel(f,t),Impl.UI.Pivots.selectPivot(t.id,u.selected,i,r))},renderGridView:
function(i){var f=i.root,e=i.data,o=i.dataSource,s=n.map(i.columns,function(t){return n.
extend(!0,{},t)}),h=i.rowMetadata,u=i.gridContainer||n(f).find("div.gridContainer"),
c=typeof i.id=="undefined"?"id":i.id,l=i.dataLoad,r;if(u.wazDataGrid("destroy").
wazDataGrid({id:c,columns:s,data:e,dataSource:o,rowMetadata:h,selectFirstRowByDefault:
!0,selectable:!0,rowSelect:function(n,t){cdm.setActiveItem(t.selected&&t.selected.
dataItem||null)},dataLoad:l}),i.enableStatusHelp)u.on("mouseenter","tbody .status",
function(){var i=n(this).closest("tr").view().data.rowMetadata.dataItem,u=n(this).
find(".waz-grid-status");i&&typeof i.StateHelpText=="string"&&(r=t.Shell.UI.Balloon.
create("help",{content:Shell.Utilities.htmlEncode(i.StateHelpText),position:"top"}),
r&&t.Shell.UI.Balloon.show(r,t.Shell.UI.Balloon.getBoundaries(u)))}).on("mouseleave",
".status",function(){r&&(t.Shell.UI.Balloon.hide(r),t.Shell.UI.Balloon.destroy(r))}
);return u},_disposeElement:function(n){n.find("[data-hasdispose]").add(n).each(
function(){this.dispose&&this.dispose()})},_renderTemplate:function(n,t,i,r){cdm.
_disposeElement(n.children());try{t.link(n,i,r)}catch(u){var f=Shell.Utilities.htmlEncodeVariable(
u.message||u.Message||u);Shell.Diagnostics.Log.writeEntry("cdm.ErrorRenderingTemplate",
f,Shell.Diagnostics.LogEntryLevel.error);n.append("<h2>Error<\/h2><p>"+f+"<\/p>")}
},_initialize:function(){u();f();Shell.UI.Navigation.initializeNav()}}}(jQuery,this,
this.fx.resources),function(n,t,i,r){"use strict";function u(){var i=t("<div><\/div>").
css({background:"url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)",
height:0,width:0}).appendTo(n.document.body);i.css("background-image")==="none"&&
t("html").addClass("highcontrastmode");i.remove()}function f(){r.diagnostics.onError.
add(function(n,t,r,u,f){var s,h,e,o;i.Communication.Receiver.getReceiver()!==null&&
(h="exception",e={url:"<unknown script>",line:r,column:u},f&&(f.stack&&(s=f.stack,
o=/.*:\d+:\d+.*/.exec(s),o&&o[0]&&(e.url=o[0].trim())),f.name&&(h=f.name),f.message&&
n!==f.message&&(e.exceptionMessage=f.message),f.description&&n!==f.description&&
e.exceptionMessage!==f.description&&(e.exceptionDescription=f.description),f.lineNumber&&
f.lineNumber!==e.line&&(e.line=f.lineNumber),f.columnNumber&&f.columnNumber!==e.
column&&(e.column=f.columnNumber),f.number&&(e.exceptionNumber=f.number&65535,e.
exceptionFacilityCode=f.number>>16&8191),f.fileName&&(e.exceptionFileName=f.fileName)),
i.Diagnostics.Log.exception(!1,h,s,n,e))});u()}t(function(){f()})}(this,jQuery,Shell,
this.fx,this.fx.resources),function(n){"use strict";function t(){n("#fxshell-tabshield").
show();n("#fxshell-tabspinner").show()}function i(){n("#fxshell-tabshield").hide(
);n("#fxshell-tabspinner").hide()}Shell.Namespace.define("Shell.UI",{Spinner:{show:
t,hide:i}})}(jQuery),function(n,t,i){"use strict";var u,r,e,f;r=i.Class.define(function(
n,t,i,r){var u={title:n,url:t,locked:!0};this._sender=r.sender;this._parentHandle=
r.parentHandle;this._handle=r.handle;this._wizard=null;r.doNotAdd||(this._handle=
this._sender.getMethod("Impl.UI.Dialogs.Wizard.addStep")(this._parentHandle,u,i))}
,{_sender:null,_parentHandle:null,_handle:null,setTitle:function(n){this._update(
"title",n)},setUrl:function(n){this._update("url",n)},setLocked:function(n){this.
_update("locked",n)},activate:function(n){this._sender.getMethod("Impl.UI.Dialogs.Wizard.setStepActivate")(
this._parentHandle,this._handle,n)},deactivate:function(n){this._sender.getMethod(
"Impl.UI.Dialogs.Wizard.setStepDeactivate")(this._parentHandle,this._handle,n)},
movePrevious:function(n){this._sender.getMethod("Impl.UI.Dialogs.Wizard.setStepMovePrevious")(
this._parentHandle,this._handle,n)},moveNext:function(n){this._sender.getMethod(
"Impl.UI.Dialogs.Wizard.setStepMoveNext")(this._parentHandle,this._handle,n)},ready:
function(){this._sender.getMethod("Impl.UI.Dialogs.Wizard.stepReady")(this._parentHandle,
this._handle)},enableNextButton:function(){this._sender.getMethod("Impl.UI.Dialogs.Wizard.enableNextButton")(
this._parentHandle)},disableNextButton:function(){this._sender.getMethod("Impl.UI.Dialogs.Wizard.disableNextButton")(
this._parentHandle)},getWizard:function(){return this._wizard||(this._wizard=new
u({sender:this._sender,handle:this._parentHandle,doNotAdd:!0})),this._wizard},setWizardData:
function(n){this._sender.getMethod("Impl.UI.Dialogs.Wizard.setWizardData")(this.
_parentHandle,n)},_update:function(n,t){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.updateStep")(
this._parentHandle,this._handle,n,t)}});u=i.Class.define(function(n){var r=this,
u={title:n,autoLock:!0,completeButtonEnabled:!1,completeButtonDisplayed:!0,showProgress:
!1,size:[800,640]};typeof n=="object"&&n!==null?(this._sender=n.sender,this._handle=
n.handle):(this._sender=new i.Communication.Sender("fx"),this._handle=this._sender.
getMethod("Impl.UI.Dialogs.Wizard.create")(u,function(){r._sender.close();r._sender=
null;r._handle=null}),this.error(function(n){t.setTimeout(function(){throw n.exception?
n.exception:n;},0)}))},{_sender:null,_handle:null,open:function(){this._sender&&
this._sender.getMethod("Impl.UI.Dialogs.Wizard.open")(this._handle)},closing:function(
n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.setClosing")(this.
_handle,n)},error:function(n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.setError")(
this._handle,n)},setTitle:function(n){this._update("title",n)},setAutoLock:function(
n){this._update("autoLock",n)},setSize:function(n,t){this._update("size",[n,t])}
,showProgress:function(n){this._update("showProgress",n)},setCompleteButtonEnabled:
function(n){this._update("completeButtonEnabled",n)},setCompleteButtonDisplayed:
function(n){this._update("completeButtonDisplayed",n)},setData:function(n){this.
_sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.setWizardData")(this._handle,
n)},addStep:function(n,t,i){return typeof arguments[0]!="number"&&(i=t,t=n,n=null),
new r(t,i,n,{sender:this._sender,parentHandle:this._handle})},removeStep:function(
n){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.removeStep")(this.
_handle,n._handle)},getSteps:function(){var i=this,t;if(this._sender)return t=n.
Deferred(),this._sender.getMethod("Impl.UI.Dialogs.Wizard.getSteps")(this._handle).
done(function(u){var f=[],e;n.each(u,function(n,t){e=new r(null,null,-1,{sender:
i._sender,parentHandle:i._handle,handle:t,doNotAdd:!0});f.push(e)});t.resolve(f)}
),t.promise()},_update:function(n,t){this._sender&&this._sender.getMethod("Impl.UI.Dialogs.Wizard.update")(
this._handle,n,t)}});e=function(){var n,t=f("wizardId"),u=f("stepId");return n=i.
Communication.Receiver.getReceiver(),n||(n=i.Communication.Receiver.create(t+u),
n.register()),new r("","",-1,{sender:new i.Communication.Sender("fx"),parentHandle:
t,handle:u,doNotAdd:!0})};f=function(n){var r=new RegExp("[?&]"+n+"=([^&#]*)"),i=
r.exec(t.location.search);return i?decodeURIComponent(i[1].replace(/\+/g," ")):""}
;i.Namespace.define("Shell.UI.Dialogs",{Wizard:u,getThisWizardStep:e})}(jQuery,this,
Shell),function(n,t){"use strict";function u(t,i){var e=n(".aux-tabcontent"),o,r,
u,s;e.hide();i&&(o=i.tabs,r=i.selectedTab,u=t.root.find("ul.fsxshell-tablist"),u.
empty(),s=n.map(o,function(t,u){var e=typeof r=="number"&&u===r||r===t.name,o=t.
visible!==!1,f=n("<li/>",{"class":"tabitem"+(e?" selected":""),css:{display:o?"":
"none"},data:{tab:t,index:u}});return n("<a/>",{text:t.displayName,href:"#"+(i.navigationPath?
i.navigationPath+"/":"")+t.name}).appendTo(f),f[0]}),u.append(n(s)));f(!0);e.show(
)}function o(n,t){var i=n.root;i.find(".itemtitle").text(t.title);c(n,t);u(n,t)}
function s(i){var u=i.root,e=i.data,o=n.map(i.columns,function(t){return n.extend(
!0,{},t)}),s=n(".aux-tabcontent"),h=typeof i.id=="undefined"?"id":i.id,r;f(!0);r=
i.gridContainer||n(u).find("div.gridContainer");r.wazDataGrid("destroy").wazDataGrid(
{id:h,columns:o,data:e,selectable:!0,rowSelect:function(n,i){t.cdm.setActiveItem(
i.selected&&i.selected.dataItem||null)}});s.show()}function i(n,r){r=r||0;var u=
n.current,e,s,o,c,l,a,h;if(typeof r=="number")e=u.tabs[r];else if(typeof r=="string")
{for(s=n.current.tabs,o=0,c=s.length;o<c;o++)if(s[o].name===r){i(n,o);return}return}
n.root.find(".tabitem").removeClass("selected");l=n.root.find(".fsxshell-tablist");
l.children().removeClass("selected").slice(r,r+1).addClass("selected");a=u.extension.
templates[e.template];h=n.root.find(".tabcontent");f(!(n.current.tabs!==null&&n.
current.tabs.length===1));t.cdm._renderTemplate(h,a,u.data||{},u.extension.templateHelpers);
u.selectedTab=e.name;e.opened&&e.opened({root:h,data:u.data,extension:u.extension})}
function f(t){var i=n(".fxshell-tabcontainer"),r=n(".aux-tabcontent");r.css("top",
"");r.css("height","");t?i.removeClass("fxshell-tabcontainer-collapsed"):i.addClass(
"fxshell-tabcontainer-collapsed")}function h(t,i){n([i.tabs]).unbind("arrayChange.tabs")}
function c(t,r){var f=t.settings;f&&h(t,f);t.current=r;n([r.tabs]).bind("arrayChange.tabs",
function(){u(t,r);var n=!!t.root.find(".fsxshell-tablist .selected").length;n||i(
t,0)})}var e={},r;n.fn.jQueryUITabs=n.fn.tabs;n.fn.tabs=function(t){var i=this.data(
"tabs");return t==="get"?i||null:(t=n.extend({},e,t||{}),i=i||new r(this),i.root=
this,i.options=t,this.data("tabs",i),i)};r=function(t){var i=this;t.find(".fsxshell-tablist").
delegate("li a","click",function(){var r=i.current.tabSelected,t;r&&(t=n(this).parent(
),t.hasClass("selected")||r(t.data("tab"),t.data("index")))})};r.prototype={navigate:
function(n){if(!n)throw"Tabs.navigate: The settings parameter is not optional.";
if(!n.extension)throw"Tabs.navigate: Expected settings.extension.";this.current&&
n.data&&n.data===this.current.data||o(this,n);this.current=n;i(this,n.selectedTab)}
,setTab:function(n){i(this,n)},refresh:function(){u(this,this.current)}};t.window.
azureTabs={renderGridView:s}}(jQuery,this),function(n,t,i,r){"use strict";function nt(
){var t=f;t.on("keydown",function(i){var r,u,f;if(i.which===n.ui.keyCode.TAB)if(
r=n(w(t)),u=r.filter(":first"),f=r.filter(":last"),i.target!==f[0]||i.shiftKey){
if(i.target===u[0]&&i.shiftKey)return f.focus(),!1}else return u.focus(),!1})}function tt(
){v=t.document.activeElement;n(w(f)).first().focus()}function it(){v&&v.focus()}
function w(n){var t=n.find(":tabbable").toArray();return t.stableSort?t.stableSort(
function(n,t){return n.tabIndex>t.tabIndex?t.tabIndex===0?-1:1:n.tabIndex<t.tabIndex?
n.tabIndex===0?1:-1:0}):t}function b(t){var u=i.Utilities.attributeEncode,r=u(h.
cancel);n.templates("wizard_layout","<div class='wizard aux-dialog fxshell-wiz' style='display:block;' role='dialog'><div class='wizard-bladescolor' style='display:none'><\/div><div class='wizard-anchorleft'><div class='wizard-bargroup-complete'><\/div><\/div><div class='wizard-content'><div class='wizard-stepgroup'><\/div><div class='wizard-buttons'><a href='#' class='wizard-button wizard-button-navigation wizard-button-next'><span class='wizard-button-next-label'><\/span><div><img src='"+
t+"/button-next.png' /><\/div><\/a><a href='#' class='wizard-button wizard-button-navigation wizard-button-back'><div><img src='"+
t+"/button-back.png' /><\/div><span class='wizard-button-back-label'><\/span><\/a><\/div><a href='#' class='wizard-button wizard-button-cancel' title='"+
r+"'><img src='"+t+"/button-cancel.png' alt='"+r+"'/><\/a><\/div><div class='wizard-anchorright'><div class='wizard-bargroup-incomplete'><\/div><\/div><\/div>")}
function rt(t){var i=u.imagesPath;n.extend(u,t);c=u.stepWidth;l=c*2;i!==u.imagesPath&&
b(u.imagesPath)}function k(n,t){if(window.Shell&&t){var i,e,r,u,f,o=Shell.extensionIndex[
t];if(!o)throw"Error: extension "+t+" not found.";for(i=0,e=n.length;i<e;i++)if(
r=n[i],typeof r.template=="string"){if(f=r.template,u=o.templates[f],!u)throw"Error: template "+
f+" not found in extension "+t+".";r.template=u}}}function y(n,t,i){var r=n.paneContent,
u=n.completeBar,f=n.incompleteBar;if(t!==n.state){switch(t){case"complete":r.animate(
{left:"0"},0).animate({left:-c+"px",opacity:"hide"},i/2);f.animate({width:0},i).
hide();u.show().animate({width:l+"px"},i);break;case"active":r.animate({left:(n.
state==="complete"?-c:c)+"px"},0).delay(i/2).animate({left:"0",opacity:"show"},i/
2);u.animate({width:0},i).hide();f.animate({width:0},i).hide();break;default:r.animate(
{left:"0"},0).animate({left:c+"px",opacity:"hide"},i/2);u.animate({width:0},i).hide(
);f.show().animate({width:l+"px"},i)}n.state=t}}function ut(n,t){var e,g,o,k,nt=
t*l,f=n.view,i=n.steps,a=n.stepIndex,s=i[a],v=a===-1?0:u.animationSpeed,d,p,c,w,
b;if(!(t<0)&&(a===-1||t!==a+1||!s.onNextStep||s.onNextStep.call(n,t)!==!1)&&(!n.
handlers.onStepChanging||n.handlers.onStepChanging.call(n,t)!==!1)){if(s&&s.onStepDeactivated&&
s.onStepDeactivated.call(n),n.prevIndex=a,t>=i.length){if(t=i.length-1,n.stepIndex=
t,s.onComplete?k=s.onComplete.call(n):n.handlers.onComplete&&(k=n.handlers.onComplete.
call(n)),k!==!1&&!n.isClosed){n.close();return}}else{for(Shell.UI.Balloon.hideBalloons(
),e=0;e<i.length;e++)e<t?y(i[e],"complete",v):e===t?y(i[e],"active",v):e>t&&y(i[
e],"incomplete",v);n.stepIndex=t;f.content(".wizard-button-back").toggle(t!==0);
i[t].previousLabel?(b=i[t].previousLabel,w=i[t].previousLabel):b=i[t].previousLabel;
w?f.content(".wizard-button-back-label").removeClass("wizard-button-label-invisible"):
f.content(".wizard-button-back-label").addClass("wizard-button-label-invisible");
f.content(".wizard-button-back-label").text(w);f.content(".wizard-button-back").
attr("title",b||(w?"":h.back));f.content(".wizard-button-back").find("img").attr(
"alt",b||(w?"":h.back));t===i.length-1?(d=u.imagesPath+"/button-complete.png",i[
t].completeLabel?(p=i[t].completeLabel,c=i[t].completeLabel):p=h.complete):(d=u.
imagesPath+"/button-next.png",i[t].nextLabel?(p=i[t].nextLabel,c=i[t].nextLabel):
p=h.next);c?f.content(".wizard-button-next-label").removeClass("wizard-button-label-invisible"):
f.content(".wizard-button-next-label").addClass("wizard-button-label-invisible");
f.content(".wizard-button-next-label").text(c);f.content(".wizard-button-next").
attr("title",p||(c?"":h.next));f.content(".wizard-button-next").find("img").attr(
"src",d).attr("alt",p||(c?"":h.next));o=i[t];o.onStepActivate&&o.onStepActivate.
call(n)}nt=t*l;g=(i.length-t-1)*l;f.content(".wizard-bargroup-complete").animate(
{width:nt+"px"},v);f.content(".wizard-bargroup-incomplete").animate({width:g+"px"},
v);f.content(".wizard-content").animate({width:n.width+"px"},v,function(){var i;
o&&window.setTimeout(function(){o.onStepActivated&&a!==t&&o.onStepActivated.call(
n);i=o.doNotFocusFirstItem===r||o.doNotFocusFirstItem!==r&&!o.doNotFocusFirstItem;
i&&tt()},200)});f.content(".wizard-button-next-label").text(c);f.content(".wizard-button-back-label").
text(w)}}function ft(t,i,u){var e=t.steps,f=t.stepIndex;u instanceof Array||(u=[
u]);n.each(u,function(){this.state=r});k(u,t.extension);i>e.length&&(i=e.length);
f+=i+u.length<=f?i+u.length-f:0;t.stepIndex=f;n.observable(t.steps).insert(i,u);
n.observable(t).setProperty("stepCount",e.length);t.resize();t.setStep(t.stepIndex)}
function et(t,i){var u,o,f,s=0,e=t.steps,r=t.stepIndex;if(i instanceof Array||(i=
[i]),i.length>=e.length)throw"Removing too many steps. There should be at least 1 step left.";
for(i.sort(),u=0,o=i.length;u<o;u++)f=i[u]-s,n.observable(t.steps).remove(f),r+=
f<r?-1:f===r?1:0,s++;r>=e.length&&(r=e.length-1);t.stepIndex=r;n.observable(t).setProperty(
"stepCount",e.length);t.resize();t.setStep(t.stepIndex)}function ot(){var t,r,i;
e&&i||(t=n(".wizard .wizard-bladescolor"),r=t.css("color"),i=t.css("background-color"),
e=g(r),a=g(i))}function d(n,t){var r=t-1,u=n.index,i=u/r;return ot(),"#"+Math.round(
e[0]+(a[0]-e[0])*i).toString(16)+Math.round(e[1]+(a[1]-e[1])*i).toString(16)+Math.
round(e[2]+(a[2]-e[2])*i).toString(16)}function g(n){var r=0,t,i=[0,0,0];if(n&&n.
length>1)if(n[0]==="#")n.length===4?(t=n.substring(1,2),t=t+t,i[0]=parseInt(t,16),
t=n.substring(2,3),t=t+t,i[1]=parseInt(t,16),t=n.substring(3,4),t=t+t,i[2]=parseInt(
t,16)):(i[0]=parseInt(n.substring(1,3),16),i[1]=parseInt(n.substring(3,5),16),i[
2]=parseInt(n.substring(5,7),16));else for(n=n.match(/\d+(\.\d+)?%?/g);r<3;)t=n[
r],t.indexOf("%")!==-1&&(t=Math.round(parseFloat(t)*2.55)),i[r]=parseInt(t,10),r++;
return i}var p,o,s,f,e=[83,184,225],a=[30,131,174],v,h=t.fx.resources.getStrings(
"notifications.buttons");n.extend(n.views,{presenters:{},registerPresenters:p=function(
i,u){var h,e,c;if(typeof i=="object")for(h in i)p(h,i[h]);else u.allowModal&&(u.
modal=function(i,r){r=r||{};s||(s=n("<div />",{id:"fxshell-wiz-shield"}),f=n("<div />",
{id:"fxshell-wiz-container"}),n("body").append(s).append(f),nt());s.css("z-index",
t.fx.utilities.getNextZIndex(s.css("z-index")));f.css("z-index",t.fx.utilities.getNextZIndex(
f.css("z-index")));n.templates[u.tmpl].link(f,i,r);c=f[0];s.show();f.show();var e=
n.view(c.firstChild),o=e.presenter=new u.presenter(r,e);return o.onAfterCreate(),
o}),e=(e=u.tag)===r?i:e,e&&(u.tag=e,n.views.tags[e]=u),o=(o=u.plugin)===r?i:o,o&&
(n.fn[o]=n.fn[o]||function(n,t){return u.link(this,n,t||{})},u.plugin=o),n.views.
presenters[i]=u;return this}});var u={imagesPath:fx.resources.getContentUrl("Content/wizard/images"),
animationSpeed:350,size:"medium",stepWidth:15},c=u.stepWidth,l=c*2;n.extend(!0,Shell,
{controls:{wizard:function(t,i){var r=this,f=i.data;r.view=i;r.stepIndex=-1;r.isClosed=
!1;r.steps=f.steps;r.extension=f.extension;r.handlers={onInit:f.onInit,onStepChanging:
f.onStepChanging,onComplete:f.onComplete,onDispose:f.onDispose};t=n.extend({stepIndex:
0},t);k(r.steps,r.extension);r.options=t;r.stepCount=r.steps.length;r.size=t.size||
u.size;r.width=t.width;r.height=t.height;r.handlers.onInit&&r.handlers.onInit.call(
this)}}});Shell.controls.wizard.prototype={onAfterCreate:function(){var i=this,r=
i.view;i.element=r.content();n.link.wizard_completeSteps(r.content(".wizard-bargroup-complete"),
i.steps,{onAfterCreate:function(n){var t=n.data.completeBar=n.content();t.click(
function(){i.setStep(n.index)})},wizard:i,getColor:d});n.link.wizard_incompleteSteps(
r.content(".wizard-bargroup-incomplete"),i.steps,{onAfterCreate:function(n){n.data.
incompleteBar=n.content()},wizard:i,getColor:d});n.link.wizard_step(r.content(".wizard-stepgroup"),
i.steps,{onAfterCreate:function(n){var t;n.tmpl.name==="wizard_step"&&(n.isArray?
i.stepViews=n.views:(t=n.data,t.paneContent=n.content(),t.onStepCreated&&t.onStepCreated.
call(n.parent.parent.presenter,n)))}});r.content(".wizard-button-next").click(function(
){return n(this).attr("href")==="#"&&i.goNext(),!1});r.content(".wizard-button-back").
click(function(){return n(this).attr("href")==="#"&&i.goPrevious(),!1});r.content(
".wizard-button-cancel").click(function(){return i.close(),!1});i.resize();i.setStep(
i.options.stepIndex);n(t).on("resize scroll",i.resizeHandler=function(){i.resize(
)});i.element.on("keydown",function(t){t.which===n.ui.keyCode.ESCAPE&&(i.close(),
t.preventDefault())})},onDispose:function(){this.handlers.onDispose&&this.handlers.
onDispose.call(this)===!1||this.clearStepState()},setStep:function(n){ut(this,n)}
,goNext:function(){this.setStep(this.stepIndex+1)},goPrevious:function(){this.setStep(
this.stepIndex-1)},disableBackButton:function(){this.stepIndex!==0&&n(".wizard-button-back:not(.disabled)").
removeAttr("href").fadeTo(350,.4).addClass("disabled")},disableNextButton:function(
){n(".wizard-button-next:not(.disabled)").removeAttr("href").fadeTo(350,.4).addClass(
"disabled")},clearStepState:function(){for(var t=this.steps,i=t.length,n=0;n<i;n++)
t[n].state=""},enableBackButton:function(){this.stepIndex!==0&&n(".wizard-button-back.disabled").
attr("href","#").fadeTo(350,1).removeClass("disabled")},enableNextButton:function(
){n(".wizard-button-next.disabled").attr("href","#").fadeTo(350,1).removeClass("disabled")}
,showProgress:function(){n(".wizard-step:visible").append("<div class='wizard-progress'><\/div>");
var t=n(".wizard-content").width();n(".wizard-progress").css({height:this.height,
width:t})},hideProgress:function(){n("div").remove(".wizard-progress")},complete:
function(){this.setStep(this.steps.length)},close:function(){this.stepIndex&&this.
steps[this.stepIndex].onStepDeactivated&&this.steps[this.stepIndex].onStepDeactivated.
call(this);this.resizeHandler&&(n(t).off("resize scroll",this.resizeHandler),this.
resizeHandler=null);this.element.off("keydown");this.isClosed=!0;cdm.currentWizard=
null;var i=this.view;i.parent.removeViews(i.key);this.onDispose&&this.onDispose(
);s.hide();f.hide();it()},insertSteps:function(n,t){ft(this,n,t)},removeSteps:function(
n){et(this,n)},resize:function(){var i,t,u=this.view,r=n(window);switch(this.size)
{case"large":i=918;t=640;break;case"large-temp":i=800;t=640;break;case"mediumplus":
i=650;t=560;break;case"medium":i=600;t=450;break;case"small":i=549;t=375;break;case"tiny":
i=400;t=275}i=this.width||i;t=this.height||t;this.width=i;this.height=t;this.element.
css({height:t,width:i,top:Math.max(0,(r.height()-t)/2),left:Math.max(0,(r.width(
)-i)/2)});u.content(".wizard-bar").css({height:t})},gatherFields:function(t){var
i={},u=t!==r&&this.stepViews?this.stepViews[t]:this.view;return u&&(u.content("input").
each(function(){var t=n(this);i[this.name||this.id]=t.is(":checkbox")?t.is(":checked")?
"on":"off":t.val()||t.text()}),u.content("select").each(function(){i[this.name||
this.id]=n(this).val()})),i},showAlert:function(n,t,i,r){if(typeof n!="string"){
Shell.Diagnostics.Log.writeEntry("wizard.TitleIsNotAString","title is not a string",
Shell.Diagnostics.LogEntryLevel.error);return}if(typeof t!="string"){Shell.Diagnostics.
Log.writeEntry("wizard.ContentIsNotAString","content is not a string",Shell.Diagnostics.
LogEntryLevel.error);return}if(i){if(i.constructor!==Array){Shell.Diagnostics.Log.
writeEntry("wizard.ActionsIsNotAnArray","actions is not an array",Shell.Diagnostics.
LogEntryLevel.error);return}if(i.length>3){Shell.Diagnostics.Log.writeEntry("wizard.ThreeActionsMax",
"actions can only contain 3 items",Shell.Diagnostics.LogEntryLevel.error);return}
}if(r&&!(r==="information"||r==="warning"||r==="error")){Shell.Diagnostics.Log.writeEntry(
"wizard.SeverityValueIsNotValid","severity can be only information, warning, or error",
Shell.Diagnostics.LogEntryLevel.error);return}var u=this.element;u?(u.dialogalertbox(
{title:n,content:t,actions:i,severity:r}),u.dialogalertbox("open")):Shell.Diagnostics.
Log.writeEntry("wizard.UnableToDisplayAlert","Unable to find wizard to display alert on",
Shell.Diagnostics.LogEntryLevel.error)},hideAlert:function(){var n=this.element;
if(n){n.dialogalertbox("close");n.on("dialogalertboxclose",function(){n.dialogalertbox(
"destroy")})}else Shell.Diagnostics.Log.writeEntry("wizard.UnableToHideAlert","Unable to find wizard to hide the alert",
Shell.Diagnostics.LogEntryLevel.error)}};n.views.registerPresenters({wizard:{presenter:
Shell.controls.wizard,tmpl:"wizard_layout",allowModal:!0,setOptions:rt}});n.each(
{step:"<div class='wizard-step'>{{for #data tmpl=template/}}<\/div>",completeSteps:
"<span class='wizard-bar' data-link='css-background-color{:~getColor(#view,~wizard.stepCount)}'><span class='wizard-num' data-link='{:#index+1}'><\/span><\/span>",
incompleteSteps:"<span class='wizard-bar' data-link='css-background-color{:~getColor(#view,~wizard.stepCount)}'><span class='wizard-num' data-link='{:#index+1}'><\/span><\/span>"},
function(t,i){n.templates("wizard_"+t,i)});b(u.imagesPath);window.cdm&&(cdm.stepWizard=
function(t,r){var u=n.views.presenters.wizard.modal(t,r);return cdm.currentWizard=
u,i.Diagnostics.Telemetry.traceEvent("wizard",t.extension,t.name),u})}(jQuery,this,
Shell),function(n,t,i){"use strict";var r=t.prototype;n.widget("fx.fxButton",t,{
options:{submit:!1,selector:null,toggle:!1,pressed:!1,state:"initial",click:n.noop,
class_:{},text:{},tabindex:0},_img:null,_clickHandler:null,_mouseDownHandler:null,
_mouseEnterHandler:null,_mouseLeaveHandler:null,_keyDownHandler:null,_keyUpHandler:
null,_correctKeyPressed:!1,_create:function(){this.widgetFullName="fx-button";this.
element.addClass("fx-button").attr({role:"button",tabindex:this.options.tabindex}).
on("click",this._clickHandler=n.proxy(this._click,this)).on("mousedown",this._mouseDownHandler=
n.proxy(this._mouseDown,this)).on("mouseenter",this._mouseEnterHandler=n.proxy(this.
_mouseEnter,this)).on("mouseleave",this._mouseLeaveHandler=n.proxy(this._mouseLeave,
this));this.options.selector&&(this._img=this.element.find(this.options.selector));
this.element.is("button")||this._attachKeyEvent();this._setOption("pressed",this.
options.pressed);r._create.call(this)},_destroy:function(){this.element.removeAttr(
"role tabindex aria-pressed").removeClass("fx-button fx-button-state-hover");this.
_mouseLeaveHandler&&(this.element.off("mouseleave",this._mouseLeaveHandler),this.
_mouseLeaveHandler=null);this._mouseEnterHandler&&(this.element.off("mouseenter",
this._mouseEnterHandler),this._mouseEnterHandler=null);this._mouseDownHandler&&(
this.element.off("mousedown",this._mouseDownHandler),this._mouseDownHandler=null);
this._keyUpHandler&&(this.element.off("keyup",this._keyUpHandler),this._keyUpHandler=
null);this._keyDownHandler&&(this.element.off("keydown",this._keyDownHandler),this.
_keyDownHandler=null);this._clickHandler&&(this.element.off("click",this._clickHandler),
this._clickHandler=null);this._super()},_attachKeyEvent:function(){var t=this;this.
_correctKeyPressed=!1;this.element.on("keydown",this._keyDownHandler=function(i)
{var r=function(){t.element.trigger("click",i)};i.which===n.ui.keyCode.ENTER&&r(
);t._correctKeyPressed=!1;i.which===n.ui.keyCode.SPACE&&(t._correctKeyPressed=!0)}
).on("keyup",this._keyUpHandler=function(i){t._correctKeyPressed&&i.which===n.ui.
keyCode.SPACE&&(t._correctKeyPressed=!1,t.element.trigger("click",i))})},_click:
function(n){if(this.options.disabled)return!1;this._setOption("pressed",!this.options.
pressed);this.options.click&&this.options.click.call(this.element,n);this.options.
submit&&this.element.submit()},_mouseDown:function(){var t=this;this.element.addClass(
"fx-button-state-active");this.options.state="active";this._changeImage();n(i.document).
one("mouseup",function(){t.element.removeClass("fx-button-state-active");t.options.
state="";t.element.hasClass("fx-button-state-hover")?t._mouseEnter():t._mouseLeave(
)})},_mouseEnter:function(){this.element.addClass("fx-button-state-hover");this.
options.state!=="active"&&(this.options.state="hover",this._changeImage())},_mouseLeave:
function(){this.element.removeClass("fx-button-state-hover");this.options.state!==
"active"&&(this.options.state="initial",this._changeImage())},_changeImage:function(
){var n;this._img&&(n=this._getClass(),n&&this._img.attr("class","sprite "+n))},
_getObject:function(n){return this.options.toggle&&n.normal&&n.pressed&&(n=this.
options.pressed?n.pressed:n.normal),n.enabled&&n.disabled&&(n=this.options.disabled?
n.disabled:n.enabled),n},_getClass:function(){return typeof this.options.class_==
"string"?this.options.class_:this._getObject(this.options.class_)[this.options.state]||
null},_getAlt:function(){return typeof this.options.text=="string"?this.options.
text:this._getObject(this.options.text)[this.options.state]||null},_setPressed:function(
){this.options.toggle?this.element.attr("aria-pressed",this.options.pressed):this.
element.removeAttr("aria-pressed")},_setOption:function(n,t){var i=r._setOption.
apply(this,arguments);switch(n){case"disabled":t?this.element.attr("tabindex",-1):
this.element.attr("tabindex",this.options.tabindex);this._changeImage();break;case"tabindex":
this.element.attr("tabindex",t);break;case"toggle":case"pressed":this._setPressed(
this.options.pressed);this._changeImage();break;case"state":case"class_":case"text":
this._changeImage()}return i}})}(jQuery,jQuery.Widget,this),function(n,t,i,r,u,f)
{"use strict";var o=t.prototype,s=r.getClasses("fx.fxCopyButton"),h=r.getStrings(
"fx.fxCopyButton"),e;ZeroClipboard.setMoviePath(s.swf);n.widget("fx.fxCopyButton",
t,{options:{getClipboardText:null,flashNotInstalled:function(){this.hide()},complete:
null},_clipClient:null,_mouseEnterHandler:null,_create:function(){var t=this;if(
this.element.addClass("fx-copybutton").attr("aria-label",h.label),e===f&&(e=this.
_checkForFlash()),i.clipboardData||e){this.element.on("mouseenter",this._mouseEnterHandler=
function(){if(!i.clipboardData&&!t._clipClient){t._clipClient=new ZeroClipboard.
Client;t._clipClient.addEventListener("onMouseDown",function(n){n.setText(t.options.
getClipboardText())});t._clipClient.addEventListener("onComplete",function(){t._trigger(
"complete")});var r=n(this);r.append(t._clipClient.getHTML(r.outerWidth(),r.outerHeight(
)))}});this._setOption("click",this._click);this._setOption("tabindex",-1);o._create.
call(this)}else this.element.addClass("fx-copybutton-no-flash"),this.options.flashNotInstalled&&
this.options.flashNotInstalled.call(this.element)},_destroy:function(){this.element.
removeClass("fx-copybutton fx-copybutton-no-flash").removeAttr("aria-label");(i.
clipboardData||e)&&(this.element.find("embed").remove(),this._clipClient&&(this.
_clipClient.destroy.call(this),this._clipClient=null),this._mouseEnterHandler&&(
this.element.off("mouseenter",this._mouseEnterHandler),this._mouseEnterHandler=null));
this._super()},_click:function(){i.clipboardData&&(i.clipboardData.setData("Text",
this.options.getClipboardText()),this.options.complete&&this.options.complete())}
,_checkForFlash:function(){var n=!1,t;if(u.plugins&&u.plugins["Shockwave Flash"])
n=!0;else if(i.ActiveXObject)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
t&&(n=!0)}catch(r){}return n}})}(jQuery,jQuery.fx.fxButton,this,this.fx.resources,
navigator),function(n,t,i){"use strict";var r=function(n){var u,r=n.selectionStart,
f=n.selectionEnd,o=n.selectionDirection||"forward",e;return(r===i||f===i)&&(t.document.
selection?(u=t.document.selection.createRange(),e=u.text.length,u.moveStart("character",
-n.value.length),r=u.text.length-e,f=r+e):r=f=n.value.length),{start:r,end:f,direction:
o}},u=function(n,r){try{if(n.selectionStart!==i)n.selectionStart=r.start,n.selectionEnd=
r.end,n.selectionDirection=r.direction;else if(t.document.selection){n.focus();var
u=t.document.selection.createRange();u.moveStart("character",-n.value.length);u.
moveEnd("character",-n.value.length-1);u.moveStart("character",r.start);u.moveEnd(
"character",r.end-r.start);u.select()}}catch(f){}},f=function(i){var r=null;return i=
n.event.fix(i).originalEvent,i&&i.clipboardData&&i.clipboardData.getData?(/text\/html/.
test(i.clipboardData.types)&&(r=i.clipboardData.getData("text/html")),!r&&/text\/plain/.
test(i.clipboardData.types)&&(r=i.clipboardData.getData("text/plain")),r&&r.length===
0&&(r=null)):t.clipboardData&&(r=t.clipboardData.getData("text")),r};t.fx||(t.fx=
{});t.fx.utilities||(t.fx.utilities={});t.fx.utilities.text={getCaretPosition:r,
setCaretPosition:u,getClipboardTextFromPasteEvent:f}}(jQuery,this),function(n,t,
i,r){"use strict";var f="fxLastRemotelyValidatedData",e="fxLastRemotelyValidatedResult",
u={};n.UI.Validation.addValidator("required",function(n,i){switch(i.nodeName.toLowerCase(
)){case"select":var r=t(i).val();return!!r&&r.length>0;case"input":if(this.checkable(
i))return this.getLength(n,i)>0;default:return t.trim(n).length>0}},{delayed:!1});
n.UI.Validation.addValidator("range",["min","max"],function(n,t,i){var u=i.min!==
r?n>=parseInt(i.min,10):!0,f=i.max!==r?n<=parseInt(i.max,10):!0;return n.length===
0?!0:u&&f});n.UI.Validation.addValidator("length",["min","max"],function(n,t,i){
var u=n.length,f=i.min!==r?u>=parseInt(i.min,10):!0,e=i.max!==r?u<=parseInt(i.max,
10):!0;return f&&e});n.UI.Validation.addValidator("number",function(n){return n.
length===0?!0:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(n)},{delayed:!1});
n.UI.Validation.addValidator("digits",function(n){return n.length===0?!0:/^\d+$/.
test(n)},{delayed:!1});n.UI.Validation.addValidator("regex",["pattern","flags"],
function(n,t,i){var r=new RegExp(i.pattern,i.flags||"").exec(n);return!!(r&&r.index===
0&&r[0].length===n.length)});n.UI.Validation.addValidator("equalto",["other"],function(
n,i,r){var f=this.getModelPrefix(i.name),e=r.other,o=this.appendModelPrefix(e,f),
u=t(":input[name='"+this.escapeAttributeValue(o)+"']")[0];return u?n===u.value:null}
);n.UI.Validation.addValidator("notequalto",["other"],function(n,i,r){var f=this.
getModelPrefix(i.name),e=r.other,o=this.appendModelPrefix(e,f),u=t(":input[name='"+
this.escapeAttributeValue(o)+"']")[0];return u?n!==u.value:null});n.UI.Validation.
addValidator("ip",["v4","v6"],function(n,t,i){var u=i.v4===r?!0:i.v4==="true",f=
i.v6===r?!1:i.v6==="true";return n.length===0?!0:u&&/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.
test(n)||f&&!0});t.ajaxPrefilter(function(n,t,i){var r=n.port;n.mode==="fxValidatorAbort"&&
(u[r]&&u[r].abort(),u[r]=i)});n.UI.Validation.addValidator("remote",["url","additionalfields"],
function(r,o,s){var p=this,c=t.Deferred(),l={},v,y=this.getDependency(o),b=this.
getModelPrefix(o.name),a,w=t.data(o,f),h;for(a in y)if(y.hasOwnProperty(a)){if(a===
"remote")continue;if(y[a]===!1)return null}if(!o.name)throw"Element with remote validation must have a name attribute";
return(t.each(this.splitAndTrim(s.additionalfields||o.name),function(n,r){var u=
p.appendModelPrefix(r,b);l[u]=t(i.document).find(":input[name='"+p.escapeAttributeValue(
u)+"']").val()}),w&&n.Utilities.deepEquals(w,l)&&(h=t.data(o,e),h))?h:(v=t.ajax(
{url:s.url,async:!0,dataType:"json",mode:"fxValidatorAbort",port:"__fx-ValidatorRemote-"+
o.name,type:"POST",cache:!1,contentType:"application/json",data:JSON.stringify(l)}),
h=t.extend(c.promise(),{abort:v.abort}),v.done(function(n){var r=n===!0,i;t.data(
o,f,l);t.data(o,e,h);r?c.resolveWith(o):(i=n||t(o).data("val-remote"),t(o).data(
"val-remote",i),c.rejectWith(o,[i]))}).fail(function(n,t,i){i!=="abort"&&c.rejectWith(
o,arguments)}).always(function(){delete u["__fx-ValidatorRemote-"+o.name]}),h)},
{order:1e3})}(Shell,jQuery,this),function(n,t,i){"use strict";var u="fx-editablecontrol",
f="fx-editablecontrol-edited",r="fx-childcontrol";n.widget("fx.editablecontrol",
{options:{value:i,trackedit:!0,edit:n.noop,noedit:n.noop,change:n.noop},_controlClassName:
u,_controlEditedClassName:f,_originalValue:i,_editedFlag:!1,_creating:!0,_create:
function(){this.widgetEventPrefix="";typeof this.options.value=="number"&&(this.
options.value+="");this.setOriginalValue();this._set(this.options.value);this.element.
addClass(this._controlClassName);var t=this;this.element.on("method.editablecontrol",
function(){var i=arguments[1],r=Array.prototype.slice.call(arguments,2);return n.
isFunction(t[i])&&i.charAt(0)!=="_"?t[i].apply(t,r):!1});this._creating=!1},_destroy:
function(){this.element.removeClass(this._controlClassName).removeClass(this._controlEditedClassName).
off("method.editablecontrol");delete this._originalValue;this._super()},revert:function(
){this._set(this._originalValue)},setOriginalValue:function(){this._originalValue=
this.options.value;this._editedFlag=!1;this.element.removeClass(this._controlEditedClassName)}
,value:function(){return this.options.value},_set:function(n){this._checkEdited(
n);this.options.value=n},_valueComparer:function(n,t){return n==t},_checkEdited:
function(n){if(!this._creating){var t=!this._valueComparer(n,this.options.value);
t&&(this.options.trackedit&&(this._valueComparer(n,this._originalValue)?this._editedFlag&&
(this.element.removeClass(this._controlEditedClassName),this._trigger("noedit",null,
{value:n}),this._editedFlag=!1):this._editedFlag||(this.element.addClass(this._controlEditedClassName),
this._trigger("edit",null,{value:n,originalValue:this._originalValue}),this._editedFlag=
!0)),this._trigger("change.fxcontrol",null,{value:n}))}},_trigger:function(t,i,r)
{var u,f,o=t.replace(/\..*/gi,""),e=this.options[o];if(r=r||{},i=n.Event(i),i.type=
t,i.target=this.element[0],f=i.originalEvent,f)for(u in f)u in i||(i[u]=f[u]);return this.
element.trigger(i,r),!(n.isFunction(e)&&e.call(this.element[0],i,r)===!1||i.isDefaultPrevented(
))},_setChildControl:function(n){n?this.element.addClass(r):this.element.removeClass(
r)},_setOption:function(n,i){switch(n){case"value":typeof i=="number"&&(i+="");this.
_set(i);break;case"trackedit":i=!!i;i?this._checkEdited(this.options.value):this.
element.removeClass(this._controlEditedClassName)}return t._setOption.apply(this,
arguments)}});n.fn.fxEditableControl=function(t){function o(n){return n.hasClass(
u)||n.hasClass("waz-control")}function s(n){return n.hasClass(f)||n.hasClass("waz-control-edited")}
function i(n){return o(n)?n.not("."+r):n.find("."+u).add(n.find(".waz-control")).
not("."+r)}var e={triggerMethod:function(){var t,r=arguments;return this.each(function(
){var u=Array.prototype.slice.call(r,0);i(n(this)).each(function(){t=n(this).triggerHandler(
"method.editablecontrol",u)})}),t},hasEditedControls:function(){var t=!1;return this.
each(function(){i(n(this)).each(function(){if(s(n(this)))return t=!0,!1})}),t}};
return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):this}}(jQuery,
jQuery.Widget.prototype),function(n,t,i,r,u){"use strict";var e="fx.fxValidation",
f=i.prototype,o=0,s="__fx-validation",h=r.getStrings(e);t.widget(e,i,{options:{container:
null,validateOnSubmit:!0,withBalloon:!0,withErrorPlacement:!0},_container:null,_submitHandler:
null,_errorMessage:[],_errorLinks:[],_hasFocus:!1,_id:null,_delayedTimer:null,_destroying:
!1,_create:function(){this.widget().addClass("fx-validation");this._attachContainer(
this.options.container);this._attachBubbleEvents();f._create.call(this)},_destroy:
function(){this._destroying=!0;this._triggerValidationChanged("destroy");this.resetValidation(
);this._detachContainer();this._detachBubbleEvents();this.widget().removeClass("fx-validation");
this._super()},revert:function(){f.revert.call(this);this.resetValidation()},resetValidation:
function(){this._errorMessage=[];this._errorLinks=[];this._resetGlobalValidation(
);var n=u.UI.Validation.getValidationData(this.element[0],!1);this._resetValidators(
n);this._hideBalloon();u.UI.Validation.invalidateCache(this.element[0])},getState:
function(){var n=this._getValidatorsState();return u.UI.Validation.getValidationStateName(
n)},validate:function(n,t,i){if(this.element.is(":disabled")||this.element.is(":hidden")&&
!this.element.is(".fx-shadow"))return"";n=n!==!1;t=t!==!1;this._validating=!0;var
s=this.element[0],f=u.UI.Validation.getValidationData(this.element),r=f,e,o=0;return t?
this._cancelDelayedValidators():r=u.UI.Validation.filterValidationData(f,"immediate"),
this._errorMessage=[],this._errorLinks=[],u.UI.Validation.runValidation(s,r,i),this.
_handleValidatorResults(r,n),o=u.UI.Validation.getValidationStateFlags(r),t||(e=
u.UI.Validation.filterValidationData(f,"delayed"),e.length>0&&(this._resetValidators(
e),o|=2,this._runDelayedValidationTimer())),this._setGlobalValidation(),this._validating=
!1,this._triggerValidationChanged("immediate"),u.UI.Validation.getValidationStateName(
o)},showValidationBalloon:function(){var n=this._errorMessage,t=this._errorLinks;
this.options.withBalloon&&(this._errorMessage.length===0&&this.getState()==="pending"&&
(n=[h.pending],t=[]),this._showBalloon(n,t))},getElementId:function(){return this.
widget()[0].id||this._id||(this._id=s+o++)},_handleValidatorResults:function(n,t)
{var i,r,f;for(t=t!==!1,f=0;f<n.length;f++)(i=n[f],r=u.UI.Validation.getValidationStateFlags(
[i]),this._resetValidatorValidationClasses(i.validator),t||i.validator!=="required")&&
((r&4)==4?this.widget().addClass("fx-validation-"+i.validator+"-valid"):(r&8)==8?
(r&1)==1?(this.widget().addClass("fx-validation-"+i.validator+"-invalid"),this._addErrorMessage(
this.widget().data("val-"+i.validator)||i.message),this._addErrorLinks(i.links)):
(r&2)==2&&(this.widget().addClass("fx-validation-"+i.validator+"-pending"),this.
_handlePendingDeferred(i)):(r&1)==1&&(this.widget().addClass("fx-validation-"+i.
validator+"-invalid"),this._addErrorMessage(i.message),this._addErrorLinks(i.links)))}
,_addErrorMessage:function(n){for(var i=!1,t=0;t<this._errorMessage.length;t++)if(
this._errorMessage[t]===n){i=!0;break}i||this._errorMessage.push(n)},_addErrorLinks:
function(n){var r=!1,i,t;if(n)for(t=0;t<n.length;t++){for(r=!1,i=0;i<this._errorLinks.
length;i++)if(this._errorLinks[i]===n[t]){r=!0;break}r||this._errorLinks.push(n[
t])}},_handlePendingDeferred:function(n){var t=this;(function(i){n.valid.always(
function(){n.valid===i&&(t._handleValidatorResults([n]),t._validating||(t.options.
withBalloon&&t._hideBalloon(),t._setGlobalValidation(),t._triggerValidationChanged(
"immediate")))})})(n.valid)},_runDelayedValidationTimer:function(){var t=this;this.
_delayedTimer!==null&&n.clearTimeout(this._delayedTimer);this._delayedTimer=n.setTimeout(
function(){t._delayedTimer=null;t._runDelayedValidation()},this.options.delayedTimerValidation)}
,_runDelayedValidation:function(){var n=this.element[0],i=u.UI.Validation.getValidationData(
n),t=u.UI.Validation.filterValidationData(i,"delayed");u.UI.Validation.runValidation(
n,t);this._handleValidatorResults(t);this._setGlobalValidation();this._triggerValidationChanged(
"immediate")},_detachContainer:function(){this._container&&this._submitHandler!==
null&&(this._container.off("submit.fxContainerValidate",this._submitHandler),this.
_submitHandler=null)},_attachContainer:function(n){var i=this;if(this._detachContainer(
),n=n?t(n):this.widget().closest("form"),n.length){this._submitHandler=function(
){return i._containerValidate.apply(i,arguments)};n.on("submit.fxContainerValidate",
this._submitHandler);this._container=n}else this._container=null},_cancelDelayedValidators:
function(){this._delayedTimer!==null&&(n.clearTimeout(this._delayedTimer),this._delayedTimer=
null);var t=u.UI.Validation.getValidationData(this.element[0],!1),i=u.UI.Validation.
filterValidationData(t,"delayed");this._resetValidators(i)&&!this._validating&&(
this._setGlobalValidation(),this._triggerValidationChanged("immediate"))},_resetValidators:
function(n){for(var f=!1,t,r,i=n.length-1;i>=0;i--)f=!0,t=n[i],r=u.UI.Validation.
getValidationStateFlags([t]),(r&8)==8&&(r&2)==2&&t.valid.abort&&t.valid.abort(),
t.valid=null,this._resetValidatorValidationClasses(t.validator);return f},_getValidatorsState:
function(){var n=u.UI.Validation.getValidationData(this.element[0],!1);return u.
UI.Validation.getValidationStateFlags(n)},_resetGlobalValidation:function(){this.
widget().removeClass("fx-validation-invalid fx-validation-valid fx-validation-pending fx-validation-deferred-pending fx-validation-deferred-valid fx-validation-deferred-invalid")}
,_resetValidatorValidationClasses:function(n){this.widget().removeClass("fx-validation-"+
n+"-invalid").removeClass("fx-validation-"+n+"-valid").removeClass("fx-validation-"+
n+"-pending")},_setGlobalValidation:function(){this._resetGlobalValidation();var
t=this._getValidatorsState(),n=u.UI.Validation.getValidationStateName(t);n&&(this.
widget().addClass("fx-validation-"+n),(t&8)==8&&this.widget().addClass("fx-validation-deferred-"+
n))},_containerValidate:function(){return this.element.is(":disabled")||this.element.
is(":hidden")&&!this.element.is(".fx-shadow")?null:this.options.validateOnSubmit?
this.validate()==="valid":null},_attachBubbleEvents:function(){var n=this;this.widget(
).on("mouseover.fxValidation",function(){n._triggerValidationChanged.call(n,"mouseover")}
).on("mouseout.fxValidation",function(){n._triggerValidationChanged.call(n,"mouseout")}
).on("click.fxValidation",function(){n._click()}).on("focus.fxValidation",function(
){n._focus()}).on("blur.fxValidation",function(){n._blur()})},_detachBubbleEvents:
function(){this.widget().off(".fxValidation")},_click:function(){this._hasFocus=
!0;this._triggerValidationChanged("click")},_focus:function(){this._hasFocus=!0;
this._triggerValidationChanged("focus")},_blur:function(){this._hasFocus=!1;this.
_triggerValidationChanged("blur")},_triggerValidationChanged:function(n){this.options.
withBalloon&&this._updateBalloon(n)},_updateBalloon:function(n,i,r){var u={top:0,
left:0},f=0,e=0;i=i||this._errorMessage;r=r||this._errorLinks;this._destroying||
(u=this.widget().offset(),f=this.widget().width(),e=this.widget().height());t.extend(
u,{width:f,height:e});this.element.trigger("balloon",{balloonType:"validation",eventType:
n,id:this.getElementId(),message:i,links:r,hasFocus:this._hasFocus,box:u})},_hideBalloon:
function(){this._updateBalloon("mouseout")},_showBalloon:function(n,t){this._updateBalloon(
"focus",n,t)},_setOption:function(n,t){switch(n){case"container":this._attachContainer(
t);break;case"disabled":this.resetValidation()}return f._setOption.apply(this,arguments)}
})}(this,jQuery,jQuery.fx.editablecontrol,this.fx.resources,Shell),function(n,t,
i,r,u){"use strict";var f=t.prototype;n.widget("fx.fxTextBox",t,{options:{validateOnKeyPress:
!0,validateOnBlur:!0,delayedTimerValidation:500},_keyDownHandler:null,_keyUpHandler:
null,_keyPressHandler:null,_pasteHandler:null,_previousValue:null,_justValidated:
!1,_downKeyCode:null,_create:function(){var n=this;this.options.value===u&&(this.
options.value=this.element.val());this._keyDownHandler=function(){return n._keyDown.
apply(n,arguments)};this._keyUpHandler=function(){return n._keyUp.apply(n,arguments)}
;this._keyPressHandler=function(){return n._keyPress.apply(n,arguments)};this._pasteHandler=
function(){return n._paste.apply(n,arguments)};this.element.addClass("fx-textbox").
on("keydown.fxTextBox",this._keyDownHandler).on("keyup.fxTextBox",this._keyUpHandler).
on("keypress.fxTextBox",this._keyPressHandler).on("paste.fxTextBox",this._pasteHandler);
this._downKeyCode={length:0};f._create.call(this)},_destroy:function(){this._keyDownHandler&&
this._keyUpHandler&&this._keyPressHandler&&this._pasteHandler&&(this.element.off(
"paste.fxTextBox",this._pasteHandler).off("keypress.fxTextBox",this._keyPressHandler).
off("keyup.fxTextBox",this._keyUpHandler).off("keydown.fxTextBox",this._keyDownHandler),
this._pasteHandler=null,this._keyPressHandler=null,this._keyUpHandler=null,this.
_keyDownHandler=null);this.element.removeClass("fx-textbox");this._downKeyCode=null;
this._super()},validate:function(){return this._justValidated=!0,f.validate.apply(
this,arguments)},_set:function(n){this.element.val(n);f._set.call(this,n)},_keyDown:
function(n){this._downKeyCode[n.which]||(this._downKeyCode[n.which]=!0,this._downKeyCode.
length++)},_keyUp:function(n){(this._downKeyCode[n.which]&&(delete this._downKeyCode[
n.which],this._downKeyCode.length--),n.which>=16&&n.which<=18||n.which===9)||(this.
options.validateOnKeyPress&&(n.which===8||n.which===46)&&this.validate(!1,!1),f.
_set.call(this,this.element[0].value),this._tentativeResetValidation())},_keyPress:
function(n){var t;this.options.validateOnKeyPress&&(n.which===0||n.which===8||n.
ctrlKey||n.altKey||n.metaKey||(t=this._getNewElementValue(String.fromCharCode(n.
which)),this.validate(!1,!1,t)))},_paste:function(n){var t,i;this.options.validateOnKeyPress&&
(t=r.text.getClipboardTextFromPasteEvent(n),t&&(i=this._getNewElementValue(t),this.
validate(!1,!1,i)))},_getNewElementValue:function(n){var t=this.element[0],i=t.value,
u=r.text.getCaretPosition(t),f=i.substr(0,u.start);return f+=n,f+i.substr(u.end)}
,_blur:function(n){this._hasFocus=!1;this.element[0].value!==this.options.value&&
this._set(this.element[0].value);this._downKeyCode={length:0};this._tentativeResetValidation(
);this.options.validateOnBlur&&this.validate();f._blur.call(this,n)},_tentativeResetValidation:
function(){this._justValidated?this._downKeyCode.length||(this._justValidated=!1):
this.resetValidation()},_setOption:function(n,t){var i=f._setOption.apply(this,arguments);
return n==="disabled"&&this.element.prop("disabled",t),i}})}(jQuery,jQuery.fx.fxValidation,
this,this.fx.utilities),function(n,t,i){"use strict";var r="fx.fxPager",u=n.templates(
"<ul>{{if longPager}}<li class='fx-pager-page'><a href='#'>1<\/a><\/li><li class='fx-pager-input'><input type='text' data-val='true' data-val-range='' data-val-range-min='1' data-val-digits='' value='{{attr:currentPage}}' /><\/li><li class='fx-pager-page'><a href='#'>{{>numberOfPages}}<\/a><\/li>{{else}}{{for pages}}<li class='fx-pager-page'><a href='#'>{{>#data}}<\/a><\/li>{{/for}}{{/if}}{{if showArrows}}<li class='fx-pager-arrow fx-pager-arrow-previous'><a href='#' title='{{attr:text.previous}}'><span class='dlwux-pager-arrow-left sprite' title='{{attr:text.previous}}'><\/span><\/a><\/li><li class='fx-pager-arrow fx-pager-arrow-next'><a href='#' title='{{attr:text.next}}'><span class='dlwux-pager-arrow-right sprite' title='{{attr:text.next}}'><\/span><\/a><\/li>{{/if}}<\/ul>");
n.widget(r,{options:{currentPage:1,numberOfPages:1,maxPages:20,change:n.noop,numberOfPagesChange:
n.noop,class_:i.getClasses(r),text:i.getStrings(r)},_create:function(){this.element.
addClass("fx-pager");this.options.numberOfPages=Math.max(1,this._normalizeToNumber(
this.options.numberOfPages));this.options.currentPage=Math.max(1,Math.min(this.options.
numberOfPages,this._normalizeToNumber(this.options.currentPage)));this.options.maxPages=
Math.max(1,this._normalizeToNumber(this.options.maxPages));this._attachEvents();
this._render();this._activateBehaviors()},_destroy:function(){this.element.off("click.fxPager",
"ul li.fx-pager-page a[href]").off("click.fxPager","ul li.fx-pager-arrow-previous a[href]").
off("click.fxPager","ul li.fx-pager-arrow-next a[href]").off("keypress.fxPager focusin.fxPager focusout.fxPager mouseup.fxPager",
"ul li.fx-pager-input input").empty().removeClass("fx-pager");this._super()},_setOption:
function(t,i){var u=!1,r=!1,f,e,o;switch(t){case"numberOfPages":u=!0;r=!0;i=Math.
max(1,this._normalizeToNumber(i));o=i!==this.options.numberOfPages;e=this.options.
currentPage;this.options.currentPage=Math.min(i,this.options.currentPage);this.options.
currentPage!==e&&this._trigger("change",null,{value:this.options.currentPage});break
case"currentPage":r=!0;i=Math.max(1,Math.min(this._normalizeToNumber(i),this.options.
numberOfPages));this._trigger("change",null,{value:i});break;case"maxPages":i=Math.
max(1,this._normalizeToNumber(i));u=!0;r=!0}return f=n.Widget.prototype._setOption.
call(this,t,i),u&&this._render(),r&&this._activateBehaviors(),o&&this._trigger("numberOfPagesChange",
null,{numberOfPages:this.options.numberOfPages}),f},_attachEvents:function(){var
i=this;this.element.on("click.fxPager","ul li.fx-pager-page a[href]",function(){
return i._setOption("currentPage",n(this).text()),!1}).on("click.fxPager","ul li.fx-pager-arrow-previous a[href]",
function(){return i._setOption("currentPage",i.options.currentPage-1),!1}).on("click.fxPager",
"ul li.fx-pager-arrow-next a[href]",function(){return i._setOption("currentPage",
i.options.currentPage+1),!1}).on("keypress.fxPager focusin.fxPager focusout.fxPager mouseup.fxPager",
"ul li.fx-pager-input input",function(r){var u=n(this);switch(r.type){case"keypress":
r.which===13&&u.fxTextBox("validate")==="valid"&&i._setOption("currentPage",u.val(
));break;case"focusin":t.setTimeout(function(){u.select()},0);break;case"focusout":
u.val(i.options.currentPage).fxTextBox("validate");break;case"mouseup":r.preventDefault(
)}})},_getPages:function(){for(var t=[],n=1,i=Math.min(this.options.numberOfPages,
this.options.maxPages);n<=i;n++)t.push(n);return t},_activateElements:function(t)
{t.each(function(){var t=n(this);t.is("[aria-disabled=true],[aria-selected=true]")&&
t.removeAttr("aria-disabled aria-selected").find("a").attr("href","#")})},_disableElement:
function(n){n.attr("aria-disabled","true").find("a").removeAttr("href")},_render:
function(){var i=this.options.numberOfPages>this.options.maxPages,r=i?[]:this._getPages(
),f=this.options.numberOfPages>1,t;this.element.html(u.render(n.extend({},this.options,
{longPager:i,pages:r,showArrows:f})));t=this.element.find(".fx-pager-input input").
attr("data-val-range-max",this.options.numberOfPages).fxTextBox({withBalloon:!1,
withErrorPlacement:!1});t.length&&t.data("fx-fxTextBox")._setChildControl(!0)},_activateBehaviors:
function(){var t=this;this._activateElements(this.element.find("li"));this.element.
find("li.fx-pager-page").filter(function(){return t._normalizeToNumber(n(this).text(
))===t.options.currentPage}).attr("aria-selected","true").find("a").removeAttr("href");
this.element.find(".fx-pager-input input").val(this.options.currentPage);this.options.
currentPage===1?this._disableElement(this.element.find(".fx-pager-arrow.fx-pager-arrow-previous")):
this.options.currentPage===this.options.numberOfPages&&this._disableElement(this.
element.find(".fx-pager-arrow.fx-pager-arrow-next"))},_normalizeToNumber:function(
n){return n===null||typeof n=="undefined"?0:parseInt(n,10)}})}(jQuery,this,this.
fx.resources),function(n,t,i){"use strict";var r=i.prototype;n.widget("fx.fxDataPager",
i,{options:{dataSource:null,pageSize:20},_refreshHandler:null,_create:function()
{var t=this;this.widgetEventPrefix=i.prototype.widgetEventPrefix;this.options.numberOfPages=
Math.max(1,this._normalizeToNumber(this.options.currentPage));r._create.call(this);
n(this.options.dataSource).on("refreshSuccess",this._refreshHandler=function(){return t.
_adjustNumberOfPages(t.options.dataSource.filteredTotalCount)});this._refreshDataSource(
)},_destroy:function(){this._refreshHandler&&(n(this.options.dataSource).off("refreshSuccess",
this._refreshHandler),this._refreshHandler=null,this.options.dataSource.setPaging(
null));this._super()},_setOption:function(n,t){var u=this.options.dataSource,f=this.
options.currentPage,e=this.options.pageSize,i;return n==="pageSize"&&(t=Math.max(
1,this._normalizeToNumber(t))),i=r._setOption.apply(this,arguments),(u!==this.options.
dataSource||f!==this.options.currentPage||e!==this.options.pageSize)&&this._refreshDataSource(
),i},_refreshDataSource:function(){var n={skip:this.options.pageSize*(this.options.
currentPage-1),take:this.options.pageSize};this.options.dataSource.setPaging(n).
refresh()},_adjustNumberOfPages:function(n){var i=Math.max(1,parseInt(this.options.
pageSize,10)),t=Math.floor(n/i);n%i&&t++;t=t||1;t!==this.options.numberOfPages&&
this._setOption("numberOfPages",t)}})}(jQuery,this,jQuery.fx.fxPager),function(n,
t,i,r){"use strict";var u=[],f={tableNoScroll:"<div class='fx-grid-container'><table aria-readonly='true' class='fx-grid-full'><caption>{{:text.summary}}<\/caption>{{for #data tmpl=~templates.header/}}{{for #data tmpl=~templates.body/}}<\/table><\/div>",
tableWithScroll:"<div class='fx-grid-container'><div class='fx-grid-container-header'><table class='fx-grid-header'><caption>{{:text.summary}}<\/caption>{{for #data tmpl=~templates.header/}}<tbody><\/tbody><\/table><\/div><div class='fx-grid-container-data'><table class='fx-grid-data'><caption>{{:text.summary}}<\/caption><colgroup>{{for columns tmpl=~templates.headerColumn/}}<\/colgroup>{{for #data tmpl=~templates.body/}}<\/table><\/div><\/div>",
header:"<colgroup>{{for columns tmpl=~templates.headerColumn/}}<\/colgroup><thead><tr>{{for columns tmpl=~templates.headerCell/}}<\/tr><\/thead>",
body:"{{for groups tmpl=~templates.bodyGroups ~gridViewModel=#data/}}{{for data tmpl=~templates.bodyNoGroups ~bodyNoGroupData=data ~gridViewModel=#data/}}{{for noData tmpl=~templates.bodyNoRows ~gridViewModel=#data/}}",
bodyNoGroups:"{{if !~groups.length&&~func.isFirstInArray(#data, ~data)}}<tbody class='fx-grid-groupdata' role='rowgroup' aria-expanded='true'>{{for ~bodyNoGroupData tmpl=~templates.bodyRows/}}<\/tbody>{{/if}}",
bodyNoRows:"{{if !~groups.length&&~func.undefinedOrEmpty(~data)}}<tbody class='fx-grid-empty'><tr><td data-link='colspan{:~gridViewModel.numColumns} html{:~gridViewModel.noRows}'><\/td><\/tr><\/tbody>{{/if}}",
headerColumn:"<col class='col{{attr:#index+1}}' />",headerCell:"<th role='columnheader' data-link='css-width{:width} class{:~func.combineCssClasses(\"fx-grid-unsortablecolumnheader\", #data.cssClass, #parent.index === ~columns.length - 1 ? \"last-child\" : null)}'><a><span class='fx-grid-headerlabel'>{{:name}}<\/span><\/a><\/th>",
bodyGroups:"<tbody class='fx-grid-groupheader'><tr><td data-link='id{:~func.getGroupId(key)} colspan{:~gridViewModel.numColumns}'><a href='#'><span class='fx-grid-grouptext'>{{:text}}<\/span><span class='fx-grid-grouparrow'><span data-link='class{:~func.yesNo(expanded, ~class_.expanded, ~class_.collapsed) + \" sprite\"}'><\/span><\/span><\/a><\/td><\/tr><\/tbody><tbody class='fx-grid-groupdata' role='rowgroup' data-link='aria-expanded{:expanded} aria-labelledby{:~func.getGroupId(key)}'>{{for ~func.getItemsForGroup(key, expanded) tmpl=~templates.bodyRows/}}<\/tbody>",
bodyRows:"{{for [~func.getEnhancedRowMetadata(#data)] tmpl=~templates.bodyRowsCore ~bodyRowsView=#view ~bodyRowsIndex=#index/}}",
bodyRowsCore:"<tr role='row' data-link='class{:~func.getRowClassNames(~bodyRowsIndex, rowMetadata.cssClass)}'>{{for ~columns tmpl=~templates.bodyCell ~enhancedRowMetadata=#data/}}<\/tr>",
bodyCell:"<td role='gridcell' data-link='{cellFormat rowNumber=~bodyRowsIndex columnNumber=#index enhancedRowMetadata=~enhancedRowMetadata columnDefinition=#data} class{:cssClass}'><\/td>"},
o={},h=function(n){return n===null},c=function(n){return n===r},s=function(n){return h(
n)||c(n)},l=function(t){if(t===r||t===null)return"";var i=n("<div />");return i.
text(t).html()},y=function(n){return n.replace(/[^a-zA-Z0-9\.:\-\/]/g,"").replace(
/\//g,"&#x2F;")},p=function(n,t,i){return n.apply(this,[t].concat(i))},w=function(
n){return s(n)?"":n+""},b=function(n){return s(n)?"":l(n+"")},k=0,a="__fx-grid",
v={expandable:!1,group:"",cssClass:""},e=function(n){this.dataItem=n};n.extend(e.
prototype,v);n.widgetReference("fx.fxGrid",{options:{columns:null,data:null,rowMetadata:
null,groups:null,retainRowMetadata:!1,maxHeight:null,noRows:"",class_:i.getClasses(
"fx.fxGrid"),text:i.getStrings("fx.fxGrid")},_references:{columns:!0,data:!0,rowMetadata:
!0,groups:!0},_resizeHandler:null,_scrollHandler:null,_dataChangedHandler:null,_rowMetadataChangedHandler:
null,_columnsChangedHandler:null,_groupsChangedHandler:null,_eventGroupHeaderClick:
null,_gridId:0,_creating:!1,_data:null,_allRowMetadata:null,_templateBodyCell:null,
_formatterExtensions:null,_create:function(){var t=this;n.fx.fxGrid.trigger("beforeCreate",
this);this._creating=!0;this.element.addClass("fx-grid");this._gridId=++k;this._templateBodyCell=
this._compileBodyCellTemplate(f.bodyCell);this._allRowMetadata=[];this._addAllRowMetadataListener(
);n.each(this.options,function(n,i){t._setOption(n,i)});this._renderGrid();this.
_attachEvents();this._creating=!1;n.fx.fxGrid.trigger("afterCreate",this)},_destroy:
function(){n.fx.fxGrid.trigger("beforeDestroy",this);this._detachEvents();this.element.
empty().removeClass("fx-grid");this._removeResizeHandler();this._scrollHandler!==
null&&(this.element.find(".fx-grid-container-data").off("scroll.fxGrid",this._scrollHandler),
this._scrollHandler=null);this._removeListeners();this.element.unlink();this._super(
);n.fx.fxGrid.trigger("afterDestroy",this)},refresh:function(){this._resizeHeader(
)},getRowMetadata:function(t){if(!this.options.retainRowMetadata&&n.inArray(t,this.
options.data)<0)throw"Row metadata is available only for data items rendered in grid. Use the 'retainRowMetadata' option to allow for row metadata for off-screen data.";
return n.grep(this._allRowMetadata,function(n){return n.dataItem===t})[0]||null}
,getAllRowMetadata:function(){return this._allRowMetadata},_isDisposed:function(
){return!this._dataChangedHandler},_addFormatterExtension:function(n,t){this._formatterExtensions=
this._formatterExtensions||{};this._formatterExtensions[n]=t},_removeFormatterExtension:
function(n){delete this._formatterExtensions[n]},_getRowMetadata:function(t){var
i=n.grep(this._allRowMetadata,function(n){return n.dataItem===t})[0];return i||(
i=n.grep(this.options.rowMetadata,function(n){return n.dataItem===t})[0],i||(i=new
e(t),this._manageRowMetadataListeners([i])),this._allRowMetadata.push(i)),i},_renderRow:
function(t){var r=this.element.find("tr[role='row']"),i=n.map(r,function(i){var r=
n.view(i);return r.data.rowMetadata.dataItem===t?r:null})[0];i&&i.ctx.bodyRowsView&&
i.ctx.bodyRowsView.refresh()},_removeDataListener:function(){this._dataChangedHandler&&
(n([this.options.data]).off("arrayChange",this._dataChangedHandler),this._dataChangedHandler=
null,this._manageDataItemListeners(null,this.options.data))},_removeRowMetadataListener:
function(){this._rowMetadataChangedHandler&&(n([this.options.rowMetadata]).off("arrayChange",
this._rowMetadataChangedHandler),this._rowMetadataChangedHandler=null,this._manageRowMetadataListeners(
null,this.options.rowMetadata))},_removeColumnsListener:function(){this._columnsChangedHandler&&
(n([this.options.columns]).off("arrayChange",this._columnsChangedHandler),this._columnsChangedHandler=
null,this._manageColumns(null,this.options.columns))},_removeGroupsListener:function(
){this._groupsChangedHandler&&(n([this.options.groups]).off("arrayChange",this._groupsChangedHandler),
this._groupsChangedHandler=null)},_onDataArrayChange:function(t,i){n.fx.fxGrid.trigger(
"beforeOnDataArrayChange",this,[t,i]);this._manageDataItemListeners(t,i);for(var
r=0,u,f=[];r<this._allRowMetadata.length;)u=this._allRowMetadata[r],this._shouldRetainRowMetadata(
u)?r++:(f.push(u),this._evictRowMetadata(u,r));n.fx.fxGrid.trigger("afterOnDataArrayChange",
this,[t,i,f])},_shouldRetainRowMetadata:function(t){var i,r=!1;return this.options.
retainRowMetadata&&!this._isDefaultValuedRowMetadata(t)||n.inArray(t.dataItem,this.
options.data)>=0?!0:(i=n.fx.fxGrid.trigger("shouldRetainRowMetadata",this,[t]),i.
forEach(function(n){r|=!!n}),r)},_evictRowMetadata:function(n,t){this._manageRowMetadataListeners(
null,[n]);this._allRowMetadata.splice(t,1)},_manageDataItemListeners:function(t,
i){var r=this;if(i&&n(i).off("propertyChange.fxGrid"+this._gridId),t)n(t).on("propertyChange.fxGrid"+
this._gridId,function(n,t){for(var i=0;i<r.options.columns.length;i++)if(t.path===
r.options.columns[i].field){r._renderRow(n.target);break}})},_manageRowMetadataListeners:
function(t,i){var r=this;if(i&&n(i).off("propertyChange.grid"+this._gridId),t)n(
t).on("propertyChange.grid"+this._gridId,function(t,i){n.fx.fxGrid.trigger("onRowMetadataChange",
r,[t.target,i.path])})},_isDefaultValuedRowMetadata:function(n){for(var t in e.prototype)
if(n.hasOwnProperty(t)&&n[t]!==e.prototype[t])return!1;return!0},_manageColumns:
function(t,i){var r=this;if(i&&n(i).off("propertyChange.fxGrid"+this._gridId),t)
{this._normalizeColumns(t);n(t).on("propertyChange.fxGrid"+this._gridId,function(
n,t){r._onColumnChange(n,t)})}},_onColumnChange:function(t,i){n.fx.fxGrid.trigger(
"onColumnChange",this,[t,i])},_onColumnsChange:function(t,i){n.fx.fxGrid.trigger(
"beforeOnColumnsChange",this,[t,i]);this._manageColumns(t,i);n.fx.fxGrid.trigger(
"afterOnColumnsChange",this,[t,i])},_addAllRowMetadataListener:function(){var t=
this;n([this._allRowMetadata]).on("arrayChange.fxGrid",function(n,i){if(i.change!==
"remove")throw"Only removes are allowed to array returned by 'getAllRowMetadata'.  Use the 'rowMetadata' option to supply new or different row metadata.";
t._onRowMetadataChange(!1,null,i.items)})},_removeAllRowMetadataListener:function(
){n([this._allRowMetadata]).off("arrayChange.fxGrid")},_removeListeners:function(
){this._removeDataListener();this._removeRowMetadataListener();this._removeColumnsListener(
);this._removeGroupsListener();this._removeAllRowMetadataListener()},_attachEvents:
function(){n.fx.fxGrid.trigger("beforeAttachEvents",this);var t=this;this.element.
on("click.fxGrid","tbody.fx-grid-groupheader a",this._eventGroupHeaderClick=function(
){var u,e=n(this).closest("tbody"),i=e.view().data,r=n.view(this).views;for(var f
in r)if(r.hasOwnProperty(f)){u=r[f].data;break}return n.observable(i).setProperty(
"expanded",!i.expanded),n.observable(u).refresh(t._getItemsForGroup(i.key,i.expanded)),
!1});n.fx.fxGrid.trigger("afterAttachEvents",this)},_detachEvents:function(){n.fx.
fxGrid.trigger("beforeDetachEvents",this);this._eventGroupHeaderClick&&(this.element.
off("click.fxGrid",this._eventGroupHeaderClick),this._eventGroupHeaderClick=null);
n.fx.fxGrid.trigger("afterDetachEvents",this)},_refreshScrollbar:function(){var n=
this.element.find(".fx-grid-container");this.element.fxScrollbar&&n.data("fx-fxScrollbar")&&
n.fxScrollbar("refresh")},_compileBodyCellTemplate:function(t){var i=this;return n.
templates(null,{markup:t,tags:{cellFormat:{attr:"html",render:function(){var t=this.
props,u=t.enhancedRowMetadata.rowMetadata,r=t.columnDefinition;return(r.formatter||
n.fxGridFormatter.text)(u.dataItem[r.field],{dataItem:u.dataItem,rowNumber:t.rowNumber,
columnNumber:t.columnNumber,rowMetadata:u,column:r,filter:!t.enhancedRowMetadata.
isChildRow&&r.filterable?i._currentFilter:""})},onAfterLink:function(t){var u=this.
props,f=u.enhancedRowMetadata.rowMetadata,r=this.props.columnDefinition;r&&n.isFunction(
r.afterRender)&&r.afterRender(n(t.tgt),f.dataItem[r.field],{dataItem:f.dataItem,
rowNumber:u.rowNumber,columnNumber:u.columnNumber,rowMetadata:f,column:r,filter:
!u.enhancedRowMetadata.isChildRow&&r.filterable?i._currentFilter:""})}}}})},_getRenderContext:
function(){var t=this,i={columns:this.options.columns,groups:this.options.groups,
data:this.options.data,text:this.options.text,class_:this.options.class_,func:{testType:
function(n,t){return typeof n===t},undefinedOrEmpty:function(n){return!n||!n.length}
,isFirstInArray:function(t,i){return n.inArray(t,i)===0},getRowClassNames:function(
n,t){var i=n%2?"odd":"even";return this.combineCssClasses(i,t)},combineCssClasses:
function(){for(var t="",i=arguments.length,n=0;n<i;n++)arguments[n]&&(t+=arguments[
n]+" ");return t},getItemsForGroup:function(n,i){return t._getItemsForGroup(n,i)}
,getEnhancedRowMetadata:function(n){return{rowMetadata:t._getRowMetadata(n)}},getGroupId:
function(n){return a+t._gridId+"-group-"+n},yesNo:function(n,t,i){return n?t:i}},
templates:n.extend({},o,{bodyCell:this._templateBodyCell})},r=n.fx.fxGrid.trigger(
"renderContext",this);return r.forEach(function(t){n.extend(!0,i,t)}),i},_scrollHeader:
function(){this.element.find(".fx-grid-container-header").scrollLeft(this.element.
find(".fx-grid-container-data").scrollLeft())},_resizeHeader:function(){this.element.
find(".fx-grid-header").width(this.element.find(".fx-grid-data").width())},_renderGrid:
function(){var u=this,r=o.tableNoScroll,i;if(this._data=n.extend({},{columns:this.
options.columns,data:this.options.data,noData:this._getNoDataArray(),groups:this.
options.groups,noRows:this.options.noRows,class_:this.options.class_,text:this.options.
text,numColumns:this.options.columns.length}),this.options.maxHeight&&(r=o.tableWithScroll),
this._data.columns.length&&(n.fx.fxGrid.trigger("beforeLink",this),this.element.
link(r,this._data,this._getRenderContext()).find(".fx-grid-container > table").attr(
"id",a+this._gridId),n.fx.fxGrid.trigger("afterLink",this),this.options.maxHeight&&
(this.element.find(".fx-grid-container-data").css({height:this.options.maxHeight}),
this._resizeHeader())),this._removeResizeHandler(),this.options.maxHeight){this.
_resizeHandler=function(){u._resizeHeader()};this._scrollHandler=n.proxy(this._scrollHeader,
this);n(t).on("resize",this._resizeHandler);i=this.element.find(".fx-grid-container-data").
on("scroll.fxGrid",this._scrollHandler);i.fxScrollbar&&i.fxScrollbar({overlay:!0,
autorefresh:200,isStaticContainerSize:!0})}},_getNoDataArray:function(){return s(
this.options.data)||!this.options.data.length?[!0]:[]},_removeResizeHandler:function(
){this._resizeHandler!==null&&(n(t).off("resize",this._resizeHandler),this._resizeHandler=
null)},_getItemsForGroup:function(n,t){var u=[],i,f,r=this.options.data;if(n){if(
t)for(i=0,f=r.length;i<f;i++)this._getRowMetadata(r[i]).group===n&&u.push(r[i]);
return u}return r},_normalizeRowMetadata:function(n){for(var t=n.length;t--;)this.
_setDefaultValues(n[t],v)},_onRowMetadataChange:function(t,i,r){i&&this._normalizeRowMetadata(
i);this._manageRowMetadataListeners(i,r);i=i||[];r=r||[];var e=n.grep(i,function(
t){return n.inArray(t,r)<0}),o=n.grep(r,function(t){return n.inArray(t,i)<0}),u,
h=function(t){var i=n.inArray(t,o)>=0,r=n.grep(e,function(n){return n.dataItem===
t.dataItem}).length>0;return i||r},s,c=this,f;if(t)for(u=0;u<this._allRowMetadata.
length;)f=this._allRowMetadata[u],h(f)?this._evictRowMetadata(f,u):u++;this._creating||
(this.options.groups.length?this._rerenderGroups():(s=n.map(e.concat(o),function(
n){return n.dataItem}),n.each(s,function(){c._renderRow(this)})))},_rerenderGroups:
function(){n.each(this.element.find(".fx-grid-groupdata"),function(){n.view(this).
refresh()})},_normalizeColumns:function(t){var i={name:"",field:"",formatter:n.fxGridFormatter.
text,cssClass:""},u=n.fx.fxGrid.trigger("getDefaultColumnProperties",this),r=t.length;
for(u.forEach(function(t){n.extend(!0,i,t)});r--;)this._setDefaultValues(t[r],i)}
,_normalizeGroups:function(n){for(var t=n.length;t--;)this._setDefaultValues(n[t],
{key:"",text:"",expanded:!0,showIfEmpty:!0})},_setDefaultValues:function(n,t){for(
var i in t)t.hasOwnProperty(i)&&n[i]===r&&(n[i]=t[i])},_setOption:function(i,r){
var u=this,e,f,o,s;switch(i){case"data":r=r||[];this._removeDataListener();n([r]).
on("arrayChange",this._dataChangedHandler=function(i,r){u.options.groups.length?
u._rerenderGroups():(r.change==="insert"&&u.options.data.length===r.items.length||
r.change==="remove"&&r.items.length>0&&u.options.data.length===0||r.change==="refresh"&&
r.oldItems.length===0^u.options.data.length===0)&&n.observable(u._data.noData).refresh(
u._getNoDataArray());switch(r.change){case"insert":u._onDataArrayChange(r.items);
break;case"remove":u._onDataArrayChange(null,r.items);break;case"refresh":u._onDataArrayChange(
u.options.data,r.oldItems)}t.setTimeout(function(){u._isDisposed()||u._refreshScrollbar(
)},0)});this._onDataArrayChange(r,this.options.data);f=!0;break;case"rowMetadata":
r=r||[];this._removeRowMetadataListener();n([r]).on("arrayChange",this._rowMetadataChangedHandler=
function(n,t){switch(t.change){case"insert":u._onRowMetadataChange(!0,t.items);break
case"remove":u._onRowMetadataChange(!0,null,t.items);break;case"refresh":u._onRowMetadataChange(
!0,u.options.rowMetadata,t.oldItems)}});this._onRowMetadataChange(!0,r,this.options.
rowMetadata);break;case"columns":r=r||[];this._removeColumnsListener();n([r]).on(
"arrayChange",this._columnsChangedHandler=function(t,i){switch(i.change){case"insert":
u._onColumnsChange(i.items);break;case"remove":u._onColumnsChange(null,i.items);
break;case"refresh":u._onColumnsChange(u.options.columns,i.oldItems)}u._data!==null&&
n.observable(u._data).setProperty("numColumns",this.length)});this._manageColumns(
r,this.options.columns);f=!0;break;case"groups":r=r||[];this._removeGroupsListener(
);n([r]).on("arrayChange",this._groupsChangedHandler=function(n,t){switch(t.change)
{case"insert":u._normalizeGroups(t.items);break;case"refresh":u._normalizeGroups(
u.options.groups)}});this._normalizeGroups(r);f=!0;break;case"maxHeight":f=!0}return o=
n.fx.fxGrid.trigger("beforeSetOption",this,[i,r]),e=n.Widget.prototype._setOption.
call(this,i,r),s=n.fx.fxGrid.trigger("afterSetOption",this,[i,r]),o.concat(s).forEach(
function(n){n=n||{};f|=n.reRender}),f&&!this._creating&&this._renderGrid(),e}});
n.extend(n.fx.fxGrid,{trigger:function(n,t,i){var r=[];return u[n]&&u[n].forEach(
function(n){r.push(n.apply(t,i||[]))}),r},subscribe:function(t,i){var r;return typeof
t=="object"?(r={},n.each(t,function(t,i){r[t]=n.fx.fxGrid.subscribe(t,i)}),r):(u[
t]||(u[t]=[]),u[t].push(i),[t,i])},unsubscribe:function(t){if(n.isArray(t)){var i=
t[0];u[i]&&u[i].forEach(function(n){n===t[1]&&u[i].splice(n,1)})}else n.each(t,function(
t,i){n.fx.fxGrid.unsubscribe(i)})},getTemplate:function(n){return f[n]},setTemplate:
function(t,i){f[t]=i;o[t]=n.templates(f[t])},synthesizedRowMetadata:e}),function(
){for(var t in f)f.hasOwnProperty(t)&&n.fx.fxGrid.setTemplate(t,f[t])}();n.fxGridFormatter=
{code:w,text:b,helpers:{isNull:h,isUndefined:c,isNullOrUndefined:s,htmlEncode:l,
attributeEncode:y,callFormatter:p}}}(jQuery,this,this.fx.resources),function(n,t)
{"use strict";var i=function(){var t=n.fx.fxGrid.getTemplate("headerCell");n.fx.
fxGrid.setTemplate("headerCell","{{if sortable}}<th role='columnheader' data-link='css-width{:width} aria-sort{:sorted} class{:~func.combineCssClasses(\"fx-grid-sortablecolumnheader\", #data.cssClass, #parent.index === ~columns.length - 1 ? \"last-child\" : null)}'><a href='#' data-link='title{:~func.columnHeaderText(sorted, ~text.ascending, ~text.descending)}'><span class='fx-grid-headerlabel'>{{:name}}<\/span><span data-link='class{:~func.columnHeaderImage(sorted, ~class_.ascending, ~class_.descending) + \" fx-grid-columnsortimage sprite\"} style{:~func.yesNo(sorted, \"display:\", \"display: none\")} title{:~func.columnHeaderText(sorted, ~text.ascending, ~text.descending)}'><\/span><\/a><\/th>{{else}}"+
t+"{{/if}}")},r={_eventSortingClick:null,getSortedColumn:function(){var n=this.element.
find("th[aria-sort=ascending], th[aria-sort=descending]");return n.length?n.view(
).data:null},_refreshSorting:function(){this.element.find("thead").view().refresh(
)},_onSort:function(n,t,i){this._trigger("columnSort",n,{column:t,sort:i})}},u={
afterAttachEvents:function(){var t=this;this.element.on("click.fxGrid","thead[class!=fx-grid-empty] th a",
this._eventSortingClick=function(i){var r=n.view(this).parent.data,f="ascending",
u;return r.sortable?(u=t.getSortedColumn(),u!==null&&u!==r&&n.observable(u).setProperty(
"sorted",null),r.sorted==="ascending"&&(f="descending"),n.observable(r).setProperty(
"sorted",f),t._onSort(i,r,f),!1):!1})},afterDetachEvents:function(){this._eventSortingClick&&
(this.element.off("click.fxGrid",this._eventSortingClick),this._eventSortingClick=
null)},renderContext:function(){return{func:{columnHeaderImage:function(n,t,i){return n===
"descending"?i:t},columnHeaderText:function(n,t,i){return n==="ascending"?t:n===
"descending"?i:""}}}},getDefaultColumnProperties:function(){return{sortable:!1,sorted:
null}},onColumnChange:function(n,t){t.path==="sortable"&&this._refreshSorting()}
,afterOnColumnsChange:function(){this._refreshSorting()}};n.extend(!0,t.prototype,
r);i();t.subscribe(u)}(jQuery,jQuery.fx.fxGrid),function(n,t,i){"use strict";var
r=20,u=function(){var n=t.fx.fxGrid.getTemplate("headerCell");t.fx.fxGrid.setTemplate(
"headerCell",n.replace(/<\/a>/g,"{{if ~resizable}}<span class='fx-grid-resize-handle fx-grid-resize-handle-left'><\/span><span class='fx-grid-resize-handle fx-grid-resize-handle-right'><\/span>{{/if}}<\/a>"))}
,f={options:{resizable:!1},_mouseMoveHandler:null,_mouseUpHandler:null,_resizingColumn:
null,_filterWidth:0,_originalDataWidth:0,_eventResizeRightMouseDown:null,_eventResizeClick:
null,_eventResizeLeftMouseDown:null,_settleColumnSize:function(){var n=this;this.
element.find("thead th:not(:last)").each(function(){var i=t.view(this).data,r=t(
this).width();i.width!==r&&(t.observable(i).setProperty("width",t(this).width()),
n._trigger("columnResize",null,{column:i}))})},_settleDataColumnSize:function(){
if(this.options.maxHeight){var n=this.element.find(".fx-grid-container"),r=n.find(
".fx-grid-container-header table"),i=n.find(".fx-grid-container-data"),u=n.find(
"thead th");i.fxScrollbar&&i.fxScrollbar("destroy");this.element.find(".fx-grid-container-data col:not(:last)").
each(function(n){var i=t(this);i.outerWidth(t(u[n]).width())});this._refreshScrollbar(
);n.fxScrollbar?i.fxScrollbar({overlay:!0,autorefresh:200,isStaticContainerSize:
!0}):i.width(Math.max(r.width(),this._originalDataWidth))}},_startResizing:function(
i){var r=this;if(i.length){this._filterWidth=this.element.find(".fx-grid-filter").
width()||0;this._settleColumnSize();this._resizingColumn=i;i.addClass("fx-grid-resizing-column");
t(n.document).on("mousemove",this._mouseMoveHandler=function(){r._moveResizing.apply(
r,arguments)}).one("mouseup",this._mouseUpHandler=function(n){r._mouseUpHandler=
null;var t=r._resizingColumn.view().data;r._stopResizing();r._checkLastColumnSize(
);r._refreshScrollbar();r._trigger("columnResize",n,{column:t});r._settleDataColumnSize(
)})}},_stopResizing:function(){this._resizingColumn&&(this._resizingColumn.removeClass(
"fx-grid-resizing-column"),this._resizingColumn=null);this._mouseMoveHandler&&(t(
n.document).off("mousemove",this._mouseMoveHandler),this._mouseMoveHandler=null);
this._mouseUpHandler&&(t(n.document).off("mouseup",this._mouseUpHandler),this._mouseUpHandler=
null)},_moveResizing:function(n){if(this._resizingColumn){var i=this._resizingColumn.
offset(),u=Math.max(r,n.pageX-i.left);t.observable(this._resizingColumn.view().data).
setProperty("width",u);this._checkLastColumnSize();n.preventDefault()}},_checkLastColumnSize:
function(){var n=this.element.find("th:last");t.observable(n.view().data).setProperty(
"width","");n[0].offsetWidth<r+this._filterWidth&&t.observable(n.view().data).setProperty(
"width",r+this._filterWidth)}},e={beforeDestroy:function(){this._stopResizing()}
,afterAttachEvents:function(){var n=this;this.element.on("mousedown.fxGrid",".fx-grid-resize-handle.fx-grid-resize-handle-right",
this._eventResizeRightMouseDown=function(i){n._startResizing(t(this).closest("th"));
i.preventDefault()}).on("click.fxGrid",".fx-grid-resize-handle",this._eventResizeClick=
function(n){n.preventDefault();n.stopPropagation()}).on("mousedown.fxGrid",".fx-grid-resize-handle.fx-grid-resize-handle-left",
this._eventResizeLeftMouseDown=function(i){n._startResizing(t(this).closest("th").
prev());i.preventDefault()})},afterDetachEvents:function(){this._eventResizeRightMouseDown&&
(this.element.off("mousedown.fxGrid",this._eventResizeRightMouseDown),this._eventResizeRightMouseDown=
null);this._eventResizeClick&&(this.element.off("click.fxGrid",this._eventResizeClick),
this._eventResizeClick=null);this._eventResizeLeftMouseDown&&(this.element.off("mousedown.fxGrid",
this._eventResizeLeftMouseDown),this._eventResizeLeftMouseDown=null)},renderContext:
function(){return{resizable:this.options.resizable}},beforeSetOption:function(n)
{if(n==="resizable")return{reRender:!0}},afterLink:function(){if(this.element.fxScrollbar)
{var n=this.element.find(".fx-grid-container");this.options.resizable?(n.fxScrollbar(
{overlay:!0,autorefresh:200}),this._refreshScrollbar()):n.data("fx-fxScrollbar")&&
n.fxScrollbar("destroy")}}};t.extend(!0,i.prototype,f);u();i.subscribe(e)}(this,
jQuery,jQuery.fx.fxGrid),function(n,t,i){"use strict";var r="<div class='fx-grid-filter'><a href='#'><span class='sprite'><\/span><\/a><\/div>",
u="<div class='fx-grid-searchcontainer'><div class='fx-grid-searchbox'><input type='text' /><\/div><\/div>",
f=function(n,i){if(i){i=t.fxGridFormatter.helpers.htmlEncode(i).replace(/([.?*+\^$\[\]\\(){}|-])/g,
"\\$1");var r=new RegExp("("+i+")","gi");return n.replace(r,"<em>$1<\/em>")}return n}
,e={_searchContainer:null,_currentFilter:"",getCurrentFilter:function(){return this.
_currentFilter},_setCurrentFilter:function(n){this._currentFilter=n;this._addFormatterExtension(
"filter",this._currentFilter)},_setupFilter:function(){var i=this,f=t.grep(this.
options.columns,function(n){return n.filterable}).length;this._searchContainer&&
(this._searchContainer.remove(),this._searchContainer=null);this.element.find(".fx-grid-filter").
remove();f?(t(r).find("span.sprite").attr({"class":"sprite dlwux-icon-search",title:
this.options.text.filter}).end().find("a").attr("title",this.options.text.filter).
on("click",function(){return i._onFilterClick()}).end().appendTo(this.element.find(
"thead th:last")),this._searchContainer=t(u).find("input").on("focusin",function(
){t(this).closest(".fx-grid-searchbox").addClass("focus")}).on("focusout",function(
){t(this).closest(".fx-grid-searchbox").removeClass("focus")}).fxTextBox({value:
this.getCurrentFilter(),validateOnKeyPress:!1,change:function(n,t){i._onFilter(t.
value)}}).on("keydown",function(r){r.which===t.ui.keyCode.ESCAPE&&(r.preventDefault(
),i._toggleFilter(),n.setTimeout(function(){i.element.find(".fx-grid-filter a").
focus()},0))}).end(),this.element.addClass("fx-grid-filterable").prepend(this._searchContainer)):
(this._setCurrentFilter(""),this.element.removeClass("fx-grid-filterable fx-grid-filter-visible"))}
,_toggleFilter:function(){var n=this.element.toggleClass("fx-grid-filter-visible").
find(".fx-grid-searchcontainer"),t=n.find("input"),i;this.element.hasClass("fx-grid-filter-visible")?
(i=n.zIndex(),n.css("z-index",i+2),t.focus(),this._onFilter(t.val())):this._onFilter(
"")},_onFilterClick:function(){return this._toggleFilter(),!1},_onFilter:function(
n){n!==this.getCurrentFilter()&&(this._trigger("filterChange",null,{filter:n}),this.
_setCurrentFilter(n),this._refreshCells())},_refreshFiltering:function(){this._setupFilter(
);this.getCurrentFilter()!==""&&this._refreshCells()},_refreshCells:function(){t(
"td[role=gridcell]",this.element).each(function(){t.view(this).refresh()})}},o={
beforeDestroy:function(){this.element.removeClass("fx-grid-filterable fx-grid-filter-visible")}
,beforeLink:function(){this._setCurrentFilter(this.getCurrentFilter()||"")},afterLink:
function(){this._setupFilter()},onColumnChange:function(n,t){t.path==="filterable"&&
this._refreshFiltering()},afterOnColumnsChange:function(){this._refreshFiltering(
)}};t.extend(!0,i.prototype,e);i.subscribe(o);t.fxGridFormatter.text=function(n,
i){return t.fxGridFormatter.helpers.isNullOrUndefined(n)?"":f(t.fxGridFormatter.
helpers.htmlEncode(n+""),i&&i.filter)}}(this,jQuery,jQuery.fx.fxGrid),function(n,
t){"use strict";var i=function(){var i=n.fx.fxGrid.getTemplate("tableNoScroll"),
r=n.fx.fxGrid.getTemplate("tableWithScroll"),t="<div class='fx-grid-container-pager'><\/div>";
n.fx.fxGrid.setTemplate("tableNoScroll",i+t);n.fx.fxGrid.setTemplate("tableWithScroll",
r+t)},r={options:{pager:null,pagerOptions:{}},_pagerNumberOfPagesChangeHandler:null,
_pagerChangeHandler:null,_pagerWidget:null,_oldPagerOptions:null,_destroyPager:function(
){var t,n;return this._pagerNumberOfPagesChangeHandler&&(this.element.off("fxpagernumberofpageschange",
this._pagerNumberOfPagesChangeHandler),this._pagerNumberOfPagesChangeHandler=null),
this._pagerChangeHandler&&(this.element.off("fxpagerchange",this._pagerChangeHandler),
this._pagerChangeHandler=null),this._pagerWidget&&(n=this.element.find(".fx-grid-container-pager"),
t=this._pagerWidget.call(n,"option"),this._pagerWidget.call(n,"destroy"),this._pagerWidget=
null),t},_setupPager:function(t){if(this.options.pager){var i=this,r,u,e,f;this.
_pagerWidget=n.isFunction(this.options.pager)?this.options.pager:n.fn[this.options.
pager];this._pagerNumberOfPagesChangeHandler=function(n,t){i._togglePager(t.numberOfPages)}
;this._pagerChangeHandler=function(){i.options.maxHeight?(f=i.element.find(".fx-grid-container-data").
scrollTop(0),f.fxScrollbar&&f.fxScrollbar("scrollTop",0)):i.element[0].scrollIntoView(
)};this.element.on("fxpagernumberofpageschange",this._pagerNumberOfPagesChangeHandler).
on("fxpagerchange",this._pagerChangeHandler);e=n.extend({},this.options.pagerOptions,
t?{currentPage:t.currentPage,numberOfPages:t.numberOfPages}:null);r=this.element.
find(".fx-grid-container-pager");this._pagerWidget.call(r,e);u=this._pagerWidget.
call(r,"option","numberOfPages");typeof u=="number"&&this._togglePager(u)}},_togglePager:
function(n){this.element.find(".fx-grid-container-pager").toggleClass("fx-grid-pager-hidden",
n<=1)}},u={beforeDestroy:function(){this._destroyPager()},beforeLink:function(){
this._oldPagerOptions=this._destroyPager()},afterLink:function(){this._setupPager(
this._oldPagerOptions);this._oldPagerOptions=null},afterSetOption:function(n){var
t;switch(n){case"pager":case"pagerOptions":this._creating||(t=this._destroyPager(
),this._setupPager(t))}}};n.extend(!0,t.prototype,r);i();t.subscribe(u)}(jQuery,
jQuery.fx.fxGrid),function(n,t,i){"use strict";var e=function(){var t=n.fx.fxGrid.
getTemplate("bodyRowsCore");n.fx.fxGrid.setTemplate("bodyRowsCore",t.replace(/data-link='/,
"data-link='aria-disabled{:notSelectable||rowMetadata.disabled} aria-selected{:rowMetadata.selected} ").
replace(/class\{:/,"class{:~func.getSelectedRowClassName(rowMetadata.selected)+"))}
,r=function(t){n(t).attr("tabindex",0).focus().removeAttr("tabindex")},o=function(
t){return function(){t.element.addClass("fx-grid-mousedown");n("body").one("mouseup",
function(){t.element.removeClass("fx-grid-mousedown")})}},u=function(t){var h=".fx-grid",
e="tr[role='row']",o=":not([aria-disabled=true])",f=n(t.target),c=f.closest(h),l=
f.is(h),s=l?null:f.closest(e),u;if(!f.is("input")){switch(t.which){case n.ui.keyCode.
UP:u=s&&s.prevAll(o).eq(0);u&&u.length||(u=c.find(e+o).last());t.preventDefault(
);break;case n.ui.keyCode.DOWN:u=s&&s.nextAll(o).eq(0);u&&u.length||(u=c.find(e+
o).first());t.preventDefault();break;case n.ui.keyCode.SPACE:f.is(e)&&t.target===
i.document.activeElement&&(f.click(),t.preventDefault())}u&&r(u)}},s=function(){
this.element.attr("tabindex",0).on("keydown",u).on("mousedown",this._mouseDownHandler=
o(this))},f=function(){this.element.removeAttr("tabindex").off("keydown",u);this.
_mouseDownHandler&&(this.element.off("mousedown",this._mouseDownHandler),this._mouseDownHandler=
null)},h={options:{selectable:!1,multiselect:!1},_oldSelectedRows:null,_eventSelectingClick:
null,_mouseDownHandler:null,getSelectedRows:function(){return n.grep(this._allRowMetadata,
function(n){return n.selected})},unselectAllRows:function(){n.each(this.getSelectedRows(
),function(){n.observable(this).setProperty("selected",!1)})}},c={beforeDestroy:
function(){f.apply(this,arguments)},afterAttachEvents:function(){var t=this;this.
element.on("click.fxGrid","tbody[class!=fx-grid-empty] tr:not([aria-disabled=true])",
this._eventSelectingClick=function(u){var f=n.view(this).data.rowMetadata,o=null,
e=[];if(t.options.selectable){if(n.contains(this,i.document.activeElement)||r(this),
!t.options.multiselect){if(e=t.getSelectedRows(),e.length===1&&e[0]===f)return;n.
each(e,function(){n.observable(this).setProperty("selected",!1)})}f.selected?e.push(
f):o=f;n.observable(f).setProperty("selected",!f.selected);t._trigger("rowSelect",
u,{selected:o,unselected:e})}})},afterDetachEvents:function(){this._eventSelectingClick&&
(this.element.off("click.fxGrid",this._eventSelectingClick),this._eventSelectingClick=
null)},afterLink:function(){this.options.multiselect&&this.element.find(".fx-grid-container > table").
addClass("fx-grid-multiselectable")},renderContext:function(){return{func:{getSelectedRowClassName:
function(n){return n?"fx-grid-selected ":""}}}},beforeSetOption:function(n,t){n===
"multiselect"?(t=!!t,this.element.find(".fx-grid-container > table").toggleClass(
"fx-grid-multiselectable",t)):n==="selectable"&&(t?s.apply(this,arguments):f.apply(
this,arguments))},beforeOnDataArrayChange:function(){this._oldSelectedRows=this.
getSelectedRows()},afterOnDataArrayChange:function(t,i,r){var u=[],f=this;r.forEach(
function(t){n.inArray(t,f._oldSelectedRows)>=0&&u.push(t)});u.length&&this._trigger(
"rowSelect",null,{selected:null,unselected:u})}};n.extend(!0,t.prototype,h);n.extend(
!0,t.synthesizedRowMetadata.prototype,{selected:!1,disabled:!1});e();t.subscribe(
c)}(jQuery,jQuery.fx.fxGrid,this),function(n,t,i){"use strict";var r=function(){
var t=n.fx.fxGrid.getTemplate("bodyNoGroups"),i=n.fx.fxGrid.getTemplate("bodyRowsCore"),
r=n.fx.fxGrid.getTemplate("bodyCell");n.fx.fxGrid.setTemplate("bodyNoGroups",t.replace(
"}}","}}{{if ~expandable}}{{for ~bodyNoGroupData tmpl=~templates.bodyExpandableRows/}}{{else}}").
replace("{{/if}}","{{/if}}{{/if}}"));n.fx.fxGrid.setTemplate("bodyCell","{{if #index===0&&~enhancedRowMetadata.isExpandableParentRow}}<td role='gridcell' data-link='class{:cssClass}'><a href='#' class='fx-grid-rowexpander'><span class='fx-grid-grouparrow'><span data-link='class{:~func.yesNo(~enhancedRowMetadata.rowMetadata.expanded, ~class_.expanded, ~class_.collapsed) + \" sprite\"}><\/span><\/span><\/a><span data-link='{cellFormat rowNumber=~bodyRowsIndex columnNumber=#index enhancedRowMetadata=~enhancedRowMetadata columnDefinition=#data}'><\/span><\/td>{{else}}"+
r+"{{/if}}");n.fx.fxGrid.setTemplate("bodyRowsCore",i.replace(/class\{:/,"class{:~func.getExpandableRowClassName(isChildRow)+"));
n.fx.fxGrid.setTemplate("bodyExpandableRows","{{for [~func.getEnhancedExpandableRowMetadata(#data, true)] tmpl=~templates.bodyExpandableRowsCore ~bodyRowsView=#view ~bodyRowsIndex=#index/}}");
n.fx.fxGrid.setTemplate("bodyExpandableRowsCore","<tbody class='fx-grid-parentrowheader' data-link='aria-disabled{:notSelectable||rowMetadata.disabled} aria-selected{:rowMetadata.selected}' class{:~func.getSelectedRowClassName(rowMetadata.selected)}>{{for [#data] tmpl=~templates.bodyRowsCore/}}<\/tbody><tbody class='fx-grid-childrows' role='rowgroup' data-link='aria-expanded{:rowMetadata.expanded}' >{{for [~func.getChildItems(#data.rowMetadata, rowMetadata.expanded)] tmpl=~templates.bodyChildRows/}}<\/tbody>");
n.fx.fxGrid.setTemplate("bodyChildRows","{{for expanded tmpl=~templates.bodyExpandedChildRows ~childItems=#data/}}");
n.fx.fxGrid.setTemplate("bodyExpandedChildRows","{{for ~childItems.loading tmpl=~templates.bodyLoadingChildRows/}}{{for ~childItems.loaded tmpl=~templates.bodyLoadedChildRows/}}{{for ~childItems.loadError tmpl=~templates.bodyLoadErrorChildRows/}}");
n.fx.fxGrid.setTemplate("bodyLoadingChildRows","<tr aria-disabled='true' class='fx-grid-childrow'><td data-link='colspan{:~gridViewModel.numColumns} html{:~text.loading}'><\/td><\/tr>");
n.fx.fxGrid.setTemplate("bodyLoadErrorChildRows","<tr aria-disabled='true' class='fx-grid-childrow fx-grid-parentexpanderror'><td data-link='colspan{:~gridViewModel.numColumns} html{:~func.getExpandErrorHtml(~bodyRowsIndex)}'><\/td><\/tr>");
n.fx.fxGrid.setTemplate("bodyLoadedChildRows","{{for ~childItems.childItems tmpl=~templates.bodyChildRow/}}");
n.fx.fxGrid.setTemplate("bodyChildRow","{{for [~func.getEnhancedExpandableRowMetadata(#data, false, true)] tmpl=~templates.bodyRowsCore ~bodyRowsView=#view ~bodyRowsIndex=#index/}}")}
,u={options:{getChildItems:null},_eventExpandingClick:null,_eventRetryExpandClick:
null,_handlingExpandRow:!1,_findExpandableRowViewData:function(t){var u=n(t).closest(
"tbody").view(),o=u.data.rowMetadata,i=u.views,r,f=0,e;for(r in i)if(i.hasOwnProperty(
r)&&f===1){e=i[r].data[0];break}else f++;return{parentRowMetadata:o,childItems:e}}
,_findRowForItem:function(t){var i=this.element.find("tr[role='row']");return n.
map(i,function(i){var r=n.view(i);return r.data.rowMetadata.dataItem===t?i:null}
)[0]},_onRowExpand:function(t,i){if(!this._handlingRowExpand){var f=this._findExpandableRowViewData(
t),r=f.parentRowMetadata,u=f.childItems,e=this;if(i){this._handlingRowExpand=!0;
try{n.observable(r).setProperty("expanded",!r.expanded)}finally{this._handlingRowExpand=
!1}}this._getChildItems(r.dataItem,r.expanded,u);!r.expanded&&u.childItems&&n.each(
u.childItems,function(t,i){n.each(e._allRowMetadata,function(n,t){if(t.dataItem===
i)return e._evictRowMetadata(t,n),!1})});i&&this._triggerRowExpand(r)}},_onRetryRowExpand:
function(n){var t=this._findExpandableRowViewData(n),i=t.parentRowMetadata,r=t.childItems;
this._getChildItems(i.dataItem,!0,r)},_triggerRowExpand:function(n){this._trigger(
"rowExpand",null,{rowMetadata:n})},_isExpandable:function(){return n.isFunction(
this.options.getChildItems)},_getChildItems:function(n,t,i){var r=this,u;return i||
(i={expanded:[],loading:[],loaded:[42],loadError:[]}),t&&(this.options.getChildItems(
n).then(function(n){r._isDisposed()||(i.childItems=n,r._setChildItemsLoading(i,!1,
!1))},function(){r._isDisposed()||(i.childItems=[],r._setChildItemsLoading(i,!1,
!0))}).always(function(){r._isDisposed()||(u=!0)}),u||this._setChildItemsLoading(
i,!0)),this._setChildItemsExpanded(i,t),i},_setChildItemsExpanded:function(t,i){
t.expanded.length>0^i&&(i?n.observable(t.expanded).insert(0,42):n.observable(t.expanded).
refresh([]))},_setChildItemsLoading:function(t,i,r){t.loading.length>0^i&&(i?(n.
observable(t.loading).insert(0,42),n.observable(t.loaded).refresh([]),n.observable(
t.loadError).refresh([])):(n.observable(t.loading).refresh([]),r?(n.observable(t.
loaded).refresh([]),n.observable(t.loadError).insert(0,42)):(n.observable(t.loaded).
insert(0,42),n.observable(t.loadError).refresh([]))))}},f={afterAttachEvents:function(
){var n=this;this.element.on("click.fxGrid","a.fx-grid-rowexpander",this._eventExpandingClick=
function(){return n._onRowExpand(this,!0),!1}).on("click.fxGrid",".fx-grid-parentexpanderror a",
this._eventRetryExpandClick=function(){return n._onRetryRowExpand(this),!1})},afterDetachEvents:
function(){this._eventExpandingClick&&(this.element.off("click.fxGrid",this._eventExpandingClick),
this._eventExpandingClick=null);this._eventRetryExpandClick&&(this.element.off("click.fxGrid",
this._eventRetryExpandClick),this._eventRetryExpandClick=null)},shouldRetainRowMetadata:
function(t){var i,r=this;return this._isExpandable()&&n.each(this.options.data,function(
u,f){var o=r._findRowForItem(f),e=o&&r._findExpandableRowViewData(o);if(e&&e.childItems.
expanded.length>0&&n.grep(e.childItems.childItems,function(n){return t.dataItem===
n}).length>0)return i=!0,!1}),i},renderContext:function(){var t=this;return{expandable:
this._isExpandable(),func:{getExpandableRowClassName:function(n){return n?"fx-grid-childrow ":
""},getChildItems:function(n,i){return t._getChildItems(n.dataItem,i)},getEnhancedExpandableRowMetadata:
function(t,i,r){return n.extend(this.getEnhancedRowMetadata(t),{isExpandableParentRow:
i,isChildRow:!!r,notSelectable:r})},getExpandErrorHtml:function(n){return i.Utilities.
SafeMarkup.create(t.options.text.expandError.format([n.toString()]))}}}},beforeSetOption:
function(n){if(n==="getChildItems")return{reRender:!0}},onRowMetadataChange:function(
t,i){if(i==="expanded"&&this._isExpandable()){var r=this._findRowForItem(t.dataItem);
r&&!n(r).is(".fx-grid-childrow")&&this._onRowExpand(r)}}};n.extend(!0,t.prototype,
u);r();t.subscribe(f)}(jQuery,jQuery.fx.fxGrid,Shell),function(n){"use strict";var
t=Array.prototype.slice,i=function(t){return function(i){return n.fxGridFormatter.
helpers.isNullOrUndefined(t[i])?t["##DEFAULT##"]?t["##DEFAULT##"]:i:t[i]}},e=function(
i){var r=t.call(arguments,1),u=n.fxGridFormatter.helpers.callFormatter(n.fxGridFormatter.
text,i,r),f=n.fxGridFormatter.helpers.htmlEncode(i);return n.fxGridFormatter.helpers.
isNullOrUndefined(i)?"":"<span class='fx-grid-tooltip' title='"+f+"'>"+u+"<\/span>"}
,o=function(i){var r=t.call(arguments,1);return i&&!n.fxGridFormatter.helpers.isUndefined(
i.text)&&!n.fxGridFormatter.helpers.isUndefined(i.url)?"<a href='"+n.fxGridFormatter.
helpers.attributeEncode(n.fxGridFormatter.helpers.callFormatter(n.fxGridFormatter.
code,i.url,r))+"'"+(i.target?" target='"+n.fxGridFormatter.helpers.attributeEncode(
n.fxGridFormatter.helpers.callFormatter(n.fxGridFormatter.code,i.target,r))+"'":
"")+">"+n.fxGridFormatter.helpers.callFormatter(n.fxGridFormatter.text,i.text,r)+
"<\/a>":"<a href='"+n.fxGridFormatter.helpers.attributeEncode(n.fxGridFormatter.
helpers.callFormatter(n.fxGridFormatter.code,i,r))+"'>"+n.fxGridFormatter.helpers.
callFormatter(n.fxGridFormatter.text,i,r)+"<\/a>"},f=function(n){var t,i;switch(
typeof n){case"number":t=new Date(n);break;case"string":i=Date.parse(n);isNaN(i)||
(t=new Date(i));break;case"object":n!==null&&n.constructor===Date&&(t=n)}return t}
,s=function(i){var r=function(r){var u=f(r),e=t.call(arguments,1);return u?n.fxGridFormatter.
helpers.callFormatter(n.fxGridFormatter.text,u.toString(i),e):""};return u(r,f,r)}
,h=function(n){return"<input type='checkbox'"+(n?" checked='checked'":"")+" />"}
,r=function(i){var r=t.call(arguments,1);return i&&!n.fxGridFormatter.helpers.isUndefined(
i.text)&&!n.fxGridFormatter.helpers.isUndefined(i.url)?"<img class='fx-grid-icon' src='"+
n.fxGridFormatter.helpers.attributeEncode(n.fxGridFormatter.helpers.callFormatter(
n.fxGridFormatter.code,i.url,r))+"' alt='' />"+n.fxGridFormatter.helpers.callFormatter(
n.fxGridFormatter.text,i.text,r):"<img class='fx-grid-icon' src='"+n.fxGridFormatter.
helpers.attributeEncode(n.fxGridFormatter.helpers.callFormatter(n.fxGridFormatter.
code,i,r))+"' alt='' />"},c=function(i){return function(u){var f=t.call(arguments,
1);if(n.fxGridFormatter.helpers.isNullOrUndefined(i[u])){if(i["##DEFAULT##"])return u=
n.fxGridFormatter.text(u),n.fxGridFormatter.helpers.callFormatter(r,i["##DEFAULT##"].
text?{url:i["##DEFAULT##"].url,text:i["##DEFAULT##"].text.replace(/##DEFAULT##/g,
u)}:i["##DEFAULT##"],f)}else return n.fxGridFormatter.helpers.callFormatter(r,i[
u],f);return""}},l=function(r){var u=i(r);return function(i){var r=t.call(arguments,
1);return n.fxGridFormatter.helpers.callFormatter(n.fxGridFormatter.text,u(i),r)}
},a=function(i,r){return function(u){var f=t.call(arguments,1),e=n.fxGridFormatter.
helpers.isNullOrUndefined(i[u]),o=e?"":n.fxGridFormatter.helpers.attributeEncode(
n.fxGridFormatter.code(i[u].attribute)).replace(" ","_"),s=e?"":n.fxGridFormatter.
helpers.callFormatter(n.fxGridFormatter.text,i[u].text,f);return"<div class='fx-grid-sprite "+
o+"'><img src='"+n.fxGridFormatter.helpers.attributeEncode(n.fxGridFormatter.helpers.
callFormatter(n.fxGridFormatter.code,r,f))+"' alt='' /><\/div>"+s}},u=function(t,
r,u){if(!t)throw"Display formatter has to be provided to create any formatters bundle.";
var f=function(){return t.apply(this,arguments)};return r&&(f.sortFormatter=n.isFunction(
r)?r:i(r)),u&&(f.filterFormatter=n.isFunction(u)?u:i(u)),f},v=function(n){return u(
n,n,n)};n.extend(n.fxGridFormatter,{tooltip:e,url:o,date:s,checkbox:h,icon:r,iconLookup:
c,dictionaryLookup:l,spriteLookup:a,bundle:u,defaultAll:v})}(jQuery,this,this.fx.
resources),function(n,t,i,r){"use strict";function o(){throw"Supply a non-null value for either the 'dataSource' or 'data' option.";
}function s(n){return n===null||n===undefined?"":n}var f=n.Widget.prototype,u=i.
prototype,h=function(){var t=n.extend({},u.options,{data:null,dataSource:null,filterQueryDelay:
null});return delete t.pager,t},c="cachedSortProperty"+Math.floor(Math.random()*
1e4).toString(),l=function(n,t){var u=t.sorted==="descending"?-1:1,f=-u,i=c,r=function(
n,t){var r=n[i],e=t[i];return r==e||r instanceof Date&&e instanceof Date&&!(r<e||
r>e)?0:r>e?u:f},e=t.field;return r.preSort=function(r){for(var o,u,f=0,h=r.length;
f<h;f++)o=r[f],u=s(n(o[e],{dataItem:o,column:t})),typeof u=="string"&&(u=u.toLowerCase(
)),o[i]=u},r.postSort=function(n){for(var t=0,r=n.length;t<r;t++)delete n[t][i]}
,r},a=n.extend(function(n,t,r){this._dataGrid=r;i.call(this,n,t)},{prototype:n.extend(
{},u,{_dataGrid:null,_normalizeColumns:function(n){return this._dataGrid._normalizeColumns(
n),u._normalizeColumns.apply(this,arguments)},_onSort:function(n,t){var i=u._onSort.
apply(this,arguments);return this._dataGrid._onSort(t),i},_onFilter:function(n){
var t=u._onFilter.apply(this,arguments);return this._dataGrid._onFilter(n),t},_triggerRowExpand:
function(n){this._dataGrid._triggerRowExpand(n)},_refreshSorting:function(){var n=
u._refreshSorting.apply(this,arguments);return this._dataGrid._refreshSortingAndFiltering(
),n},_refreshFiltering:function(){var n=u._refreshFiltering.apply(this,arguments);
return this._dataGrid._refreshSortingAndFiltering(),n}})}),e={options:h(),_references:
u._references,_grid:null,_createdDataSource:null,_currentFilterSpec:null,_currentSortSpec:
null,_filterTimeoutId:null,_childItemsDataSources:null,_create:function(){this.options.
columns||(this.options.columns=[]);this.options.rowMetadata||(this.options.rowMetadata=
[]);this._childItemsDataSources=[];var t=n.extend({},u.options,this.options,{pager:
!this.options.noPager?r:null,getChildItems:this._isExpandable()?n.proxy(this._getChildItems,
this):null});return delete t.dataSource,this._normalizeColumns(this.options.columns),
!this.options.dataSource^!this.options.data||o(),this._establishNewDataSource(this.
options.data,this.options.dataSource,t),this._grid=new a(t,this.element,this),f.
_create.call(this)},_destroy:function(){this._grid&&(this._grid.destroy(),this._grid=
null,this._detachFromGridDataSource(),this._disposeCreatedDataSource());this._super(
)},getDataSource:function(){return this._gridDataSource},_isExpandable:function(
){return n.isFunction(this.options.getChildItems)},_detachFromGridDataSource:function(
){n.isFunction(this.options.dataSourceRefreshStart)&&n(this._gridDataSource).off(
"refreshStart",this.options.dataSourceRefreshStart);this._itemsArrayChangeHandler&&
n(this._gridDataSource).off("refreshSuccess",this._itemsArrayChangeHandler)},_getChildItems:
function(t){var i=this._getCachedChildItemsDataSource(t),r=n.Deferred(),u,f=this;
return i||(i=this.options.getChildItems(t),this._childItemsDataSources.push({parentItem:
t,dataSource:i})),u=i.refreshPromise,u||(i.isReset||i.refreshError||i.partialRefreshErrors.
length>0?u=i.refresh():r.resolve(i.items)),u&&u.then(function(){f._isDisposed()||
r.resolve(i.items)},function(){f._isDisposed()||r.reject.apply(r,arguments)}),r.
promise()},_getCachedChildItemsDataSource:function(t){return(n.grep(this._childItemsDataSources,
function(n){return n.parentItem===t})[0]||{}).dataSource},_isDisposed:function()
{return this._grid===null},_setOption:function(t,i){var e,s=this.options[t],h,u;
t!=="data"&&t!=="dataSource"||i===this.options[t]||i||o();e=f._setOption.apply(this,
arguments);switch(t){case"data":s!==this.options.data&&this._establishNewDataSource(
this.options.data);break;case"dataSource":s!==this.options.dataSource&&(this._establishNewDataSource(
null,this.options.dataSource),this.options.data&&(this.options.data=null));break
case"noPager":h=this._grid.option("pager");u=!this.options.noPager?r:null;h!==u&&
(this._gridDataSource.reset(),this._setGridOption("pager",u),u||this._gridDataSource.
refresh());break;case"pager":throw"Use the 'noPager' option to turn off the pager.";
case"pagerOptions":this._configureGridPager();break;case"getChildItems":n.each(this.
_childItemsDataSources,function(){this.dataSource.dispose()});this._childItemsDataSources.
splice(0,this._childItemsDataSources.length);this._setGridOption("getChildItems",
i?n.proxy(this._getChildItems,this):null);break;default:this._setGridOption(t,i)}
return e},_normalizeColumns:function(t){n.each(t,function(n,t){(t.sortable===undefined||
t.sortable===null)&&(t.sortable=!0);(t.filterable===undefined||t.filterable===null)&&
(t.filterable=!0)})},_establishNewDataSource:function(t,i,r){var f,u,e=this;if(this.
_detachFromGridDataSource(),f=this._disposeCreatedDataSource(!0),u=i&&i.isQueryable?
i:this._createdDataSource=Shell.Data.LocalDataSource({input:t||i}),this._gridDataSource=
u,n.isFunction(this.options.dataSourceRefreshStart))n(u).on("refreshStart",this.
options.dataSourceRefreshStart);if(this._isExpandable())n([u.items]).on("arrayChange",
this._itemsArrayChangeHandler=function(n,t){switch(t.change){case"insert":e._onItemsArrayChange(
t.items);break;case"remove":e._onItemsArrayChange(null,t.items);break;case"refresh":
e._onItemsArrayChange(this,t.oldItems)}});this._initializeDataSource(!0);this._configureGridPager(
r);this._setGridOption("data",u.items,r);f&&f.dispose()},_onItemsArrayChange:function(
t,i){t=t||[];i=i||[];var u=n.grep(i,function(i){return n.inArray(i,t)<0}),r=this;
n.each(u,function(t,i){n.each(r._childItemsDataSources,function(n,t){if(t.parentItem===
i)return t.dataSource.dispose(),r._childItemsDataSources.splice(n,1),!1})})},_configureGridPager:
function(t){var i=n.extend({},this.options.pagerOptions,{dataSource:this._gridDataSource});
this._setGridOption("pagerOptions",i,t)},_setGridOption:function(n,t,i){i?i[n]=t:
this._grid.option(n,t)},_initializeDataSource:function(t,i){var u=!this.options.
noPager,f,r,e;t&&u&&this._gridDataSource.reset();r=this._gridDataSource.isReset;
f=n.grep(this.options.columns,function(n){return n.sortable&&n.sorted})[0];r=this.
_setSort(f)||r;this._grid&&(r=this._setFilter()||r);e=t&&u;e||i&&!r||this._gridDataSource.
refresh()},_setSort:function(n){var t=n?{property:n.field,descending:n.sorted===
"descending"}:null,i;if(!this._matchesCurrentSortSpec(t))return this._currentSortSpec=
t,n&&(i=n.sortFormatter||n.formatter&&n.formatter.sortFormatter,i&&(t=l(i,n))),this.
_gridDataSource.setSort(t),!0},_setFilter:function(){var t=this._grid.getCurrentFilter(
),i=n.grep(this.options.columns,function(n){return n.filterable}),r=!t||t===""||
!i.length?null:{operator:"||",value:n.map(i,function(n){return{property:n.field,
operator:"Contains",value:t}})},u;if(!this._matchesCurrentFilterSpec(r))return this.
_currentFilterSpec=r,u=n.grep(i,function(n){return n.filterFormatter||n.formatter&&
n.formatter.filterFormatter}).length>0,u&&(r=function(r){return n.grep(i,function(
n){var i=r[n.field]||"",u=n.filterFormatter||n.formatter&&n.formatter.filterFormatter,
f=u?u(i,{dataItem:r,column:n}):i;return f.toString().toLowerCase().indexOf(t.toLowerCase(
))>=0}).length>0}),this._gridDataSource.setFilter(r),!0},_matchesCurrentSortSpec:
function(n){return!n&&!this._currentSortSpec||n&&this._currentSortSpec&&n.property===
this._currentSortSpec.property&&n.descending===this._currentSortSpec.descending}
,_matchesCurrentFilterSpec:function(t){var i=this;return!t&&!this._currentFilterSpec||
t&&this._currentFilterSpec&&t.value.length===this._currentFilterSpec.value.length&&
t.value[0].value===this._currentFilterSpec.value[0].value&&n.grep(n.map(t.value,
function(n){return n.property}),function(t){return n.inArray(t,n.map(i._currentFilterSpec.
value,function(n){return n.property}))<0}).length===0},_disposeCreatedDataSource:
function(n){if(this._createdDataSource){var t=this._createdDataSource;if(this._createdDataSource=
null,n)return t;t.dispose()}},_onSort:function(n){this._setSort(n)&&this._gridDataSource.
refresh()},_onFilter:function(){if(this.options.filterQueryDelay){this._filterTimeoutId&&
t.clearTimeout(this._filterTimeoutId);var n=this;this._filterTimeoutId=t.setTimeout(
function(){n._isDisposed()||(n._filterTimeoutId=null,n._applyFilter())},this.options.
filterQueryDelay)}else this._applyFilter()},_applyFilter:function(){this._setFilter(
)&&this._gridDataSource.refresh()},_refreshSortingAndFiltering:function(){this._initializeDataSource(
!1,!0)},_triggerRowExpand:function(n){this._trigger("rowExpand",null,{rowMetadata:
n,childItems:this._getCachedChildItemsDataSource(n.dataItem)})},_getRowMetadata:
function(n){return this._grid._getRowMetadata(n)}};n.each(u,function(t,i){t.charAt(
0)==="_"||!n.isFunction(i)||e.hasOwnProperty(t)||f.hasOwnProperty(t)||(e[t]=function(
){return i.apply(this._grid,arguments)})});n.widgetReference("fx.fxDataGrid",e)}
(jQuery,this,jQuery.fx.fxGrid,jQuery.fn.fxDataPager),function(n,t,i,r){"use strict";
var u=t.prototype,f=n.templates("<ul role='{{attr:ariaCompositeRole}}' aria-labelledby='{{attr:ariaLabelledBy}}'>{{for values}}<li tabindex='-1' role='{{>#parent.parent.data.ariaElementRole}}' {{>#parent.parent.data.ariaAttribute}}='false'>{{:#parent.parent.data.valueHtml(text)}}<\/li>{{/for}}<\/ul>");
n.widget("fx.fxItemList",t,{options:{name:"",ariaLabelledBy:null,values:[],disabledValues:
[]},_ariaAttribute:"aria-selected",_selectedClass:"fx-itemlist-selected",_ariaCompositeRole:
"",_ariaElementRole:"itemlist",_create:function(){var t=this,i={ariaCompositeRole:
this._ariaCompositeRole,ariaElementRole:this._ariaElementRole,ariaAttribute:this.
_ariaAttribute,valueHtml:function(n){return t._valueHtml(n)}};this._validateValues(
this.options);this.element.addClass("fx-itemlist").html(f.render(n.extend({},this.
options,i)));this._attachControl();this._setOption("disabledValues",this.options.
disabledValues);this._unselectedTabIndex();this._attachClassNames();this._attachEvents(
);u._create.call(this)},_destroy:function(){this.element.off("keydown.fxItemList",
"li").off("focusout.fxItemList","li").off("focusin.fxItemList","li").off("click.fxItemList",
"li").empty().removeClass("fx-itemlist");this._super()},_valueHtml:function(n){return i.
htmlEncode(n)},_validateValues:function(t){var i=t.values;if(n.isArray(i))n.each(
i,function(n,t){if(t.value===r||t.text===r)throw"Each values in options.values must have a value and a text property";
});else throw"options.values is not an array";},_getSelectedIndex:function(n){for(
var i=!1,t=0;t<this.options.values.length;t++)if(this._valueComparer(this.options.
values[t],n)){i=!0;break}return i?t:-1},_attachClassNames:function(){this.element.
find("li:first").addClass("first-child");this.element.find("li:last").addClass("last-child")}
,_attachEvents:function(){var t=this;this.element.on("click.fxItemList","li",function(
){var i=n(this),r,u;i.attr(t._ariaAttribute)==="true"||t.options.disabled||t._isItemDisabled(
i)||(r=n(this).index(),u=t.options.values[r],t._clicked(u))}).on("focusin.fxItemList",
"li",function(){t.element.find("["+t._ariaAttribute+"=true]").length===0&&t.element.
find("li").not(this).attr("tabindex",-1)}).on("focusout.fxItemList","li",function(
){t._unselectedTabIndex()}).on("keydown.fxItemList","li",function(i){var f=n(this),
r,u,e=f.parent().find("li");switch(i.which){case 32:f.click();break;case 37:case
38:for(r=f.index()-1;r>=0;r--)if(u=e.eq(r),!t._isItemDisabled(u))return u.focus(
).click(),!1;break;case 39:case 40:for(r=f.index()+1;r<=t.options.values.length;
r++)if(u=e.eq(r),!t._isItemDisabled(u))return u.focus().click(),!1}})},_clicked:
function(n){this._trigger("click",null,{value:n});this._set(n);this.element.find(
"[tabindex=0]").focus()},_set:function(n){var f=this.element.find("li").attr(this.
_ariaAttribute,!1).removeClass(this._selectedClass).attr("tabindex",-1),t,i;if(n!==
r&&n!==null){if(t=this._getSelectedIndex(n),t===-1)throw"The value is not found";
if(i=f.eq(t),this._isItemDisabled(i))throw"The value "+n+" is disabled";this._setSelectedLine(
i)}else this._unselectedTabIndex();u._set.call(this,n)},_valueComparer:function(
n,t){return n===t||n!==r&&n!==null&&t!==r&&t!==null&&n.text===t.text&&n.value===
t.value},_attachControl:function(){},_setSelectedLine:function(n){n.attr(this._ariaAttribute,
!0).addClass(this._selectedClass).attr("tabindex",0)},_unselectedTabIndex:function(
){this.element.find("["+this._ariaAttribute+"=true]").length===0&&this.element.find(
"li:not([aria-disabled=true])").first().attr("tabindex",0).end().last().attr("tabindex",
0)},_disableValues:function(t){var r=this,u=this.element.find("li"),i;u.removeAttr(
"disabled").removeAttr("aria-disabled");t&&n.each(t,function(){if(i=r._getSelectedIndex(
this),i===-1)throw"Value "+this+" not found";r._setItemDisabled(u.eq(i))})},_setItemDisabled:
function(n){n.attr("disabled","disabled").attr("aria-disabled","true")},_isItemDisabled:
function(n){return n.attr("aria-disabled")==="true"},_setOption:function(n,t){var
i=u._setOption.apply(this,arguments);return n==="disabled"?t?this.element.find("li").
attr("tabindex",-1):(this._unselectedTabIndex(),this.element.find("li["+this._ariaAttribute+
"=true]").attr("tabindex",0)):n==="disabledValues"&&this._disableValues(t),i}})}
(jQuery,jQuery.fx.editablecontrol,this.fx.utilities),function(n,t){"use strict";
var i=t.prototype,r=0,u="__fx-radio";n.widget("fx.fxRadio",t,{_ariaCompositeRole:
"radiogroup",_ariaElementRole:"radio",_ariaAttribute:"aria-checked",_attachedControl:
"<input type='radio' name='' value='' tabindex='-1' />",_create:function(){this.
options.name||(this.options.name=u+r++);this.element.addClass("fx-radio");i._create.
call(this)},_destroy:function(){this.element.empty().removeClass("fx-radio");this.
_super()},_setSelectedLine:function(n){i._setSelectedLine.call(this,n);n.find("input").
prop("checked",!0);this._fixControl()},_fixControl:function(){var n;this.element[
0].currentStyle&&this.element[0].currentStyle.hasLayout&&(n=this.element[0].style.
display,this.element[0].style.display="none",this.element[0].style.display=n)},_setItemDisabled:
function(n){n.find("input").attr("disabled","disabled");i._setItemDisabled.call(
this,n)},_disableValues:function(){return this.element.find("input").removeAttr(
"disabled"),i._disableValues.apply(this,arguments)},_attachControl:function(){var
t=this;this.element.find("li").each(function(i){n(t._attachedControl).attr("name",
t.options.name).attr("value",t.options.values[i].value).prependTo(this)})}})}(jQuery,
jQuery.fx.fxItemList),function(n,t,i){"use strict";var r=t.prototype,u=0,f="__fx-tablist";
n.widget("fx.fxTabList",t,{options:{panels:[],trackedit:!1},_ariaCompositeRole:"tablist",
_ariaElementRole:"tab",_ariaAttribute:"aria-selected",_create:function(){if(this.
options.value===i&&(this.options.value=this.options.values[0]),this.options.panels.
length!==this.options.values.length)throw"You must provide the same amount of tab panels";
this.element.addClass("fx-tablist");r._create.call(this);this._setupAria()},_destroy:
function(){this.element.empty().removeClass("fx-tablist");n.each(this.options.panels,
function(t,i){n(i).removeAttr("aria-labelledby aria-hidden role")});this._super(
)},_set:function(t){var i=this._getSelectedIndex(t);i!==-1&&(n.each(this.options.
panels,function(t,i){n(i).attr("aria-hidden",!0)}),n(this.options.panels[i]).attr(
"aria-hidden",!1));r._set.call(this,t)},_setupAria:function(){var t=u;this.element.
find("li").each(function(){n(this).attr("id",f+u++)});n.each(this.options.panels,
function(i,r){n(r).attr({"aria-labelledby":f+t++,role:"tabpanel"})})}})}(jQuery,
jQuery.fx.fxItemList),function(n,t,i){"use strict";var r=t.prototype;n.widget("fx.fxSelectBox",
t,{options:{validateOnChange:!0},_changeHandler:null,_create:function(){var n=this;
this.options.value===i&&(this.options.value=this.element.val());this._changeHandler=
function(){return n._change.apply(n,arguments)};this.element.addClass("fx-selectbox").
on("change.fxSelectBox",this._changeHandler);r._create.call(this)},_destroy:function(
){this._changeHandler&&(this.element.off("change.fxSelectBox",this._changeHandler),
this._changeHandler=null);this.element.removeClass("fx-selectbox");this._super()}
,_set:function(t){var u=!1;if(this.element.find("option").each(function(){if(n(this).
val()===t)return u=!0,!1}),!u&&t!==i&&t!==null)throw"The value is not found";this.
element.val(t);r._set.call(this,t)},_change:function(){this.resetValidation();r.
_set.call(this,this.element[0].value);this.options.validateOnChange&&this.validate(
)},_setOption:function(n,t){var i=r._setOption.apply(this,arguments);return n===
"disabled"&&this.element.prop("disabled",t),i}})}(jQuery,jQuery.fx.fxValidation),
function(n,t,i){"use strict";var r=t.prototype;n.widget("fx.fxFileBrowse",t,{options:
{validateOnChange:!0},_changeHandler:null,_create:function(){var n=this;this.options.
value===i&&(this.options.value=this.element.val());this._changeHandler=function(
){return n._change.apply(n,arguments)};this.element.addClass("fx-filebrowse").on(
"change.fxFileBrowse",this._changeHandler);r._create.call(this)},_destroy:function(
){this._changeHandler&&(this.element.off("change.fxFileBrowse",this._changeHandler),
this._changeHandler=null);this.element.removeClass("fx-filebrowse");this._super(
)},_change:function(){this.resetValidation();r._set.call(this,this.element[0].value);
this.options.validateOnChange&&this.validate()},_setOption:function(n,t){var i=r.
_setOption.apply(this,arguments);return n==="disabled"&&this.element.prop("disabled",
t),i}})}(jQuery,jQuery.fx.fxValidation),function(n,t,i){"use strict";var r=t.prototype,
u=0,f="__fx-checkbox",e="on",o="<input type='checkbox' name='' value='' tabindex='-1' /><span class='sprite'><\/span>";
n.widget("fx.fxCheckBox",t,{options:{name:"",inputValue:"",inputId:null,class_:i.
getClasses("fx.fxCheckBox")},_attributes:[{name:"role",value:"checkbox"},{name:"tabindex",
value:"0"}],_input:null,_image:null,_clickHandler:null,_keyDownHandler:null,_keyUpHandler:
null,_create:function(){this.options.value=!!this.options.value;this.element.empty(
).addClass("fx-checkbox").append(o);this._input=this.element.find("input").attr(
"name",this.options.name||f+u++).val(this.options.inputValue||e).hide();this._image=
this.element.find("span.sprite");this.options.inputId&&this._input.attr("id",this.
options.inputId);this._addAttributes();this._attachEvents();r._create.call(this);
this._setImage()},_destroy:function(){this.element.empty().removeClass("fx-checkbox");
this._removeAttributes();this._detachEvents();this._input=null;this._image=null;
this._super()},toggle:function(){this._set(!this.options.value)},_set:function(n)
{n=!!n;this._input.prop("checked",n);this.element.attr("aria-checked",n);r._set.
call(this,n);this._setImage()},_addAttributes:function(){var t=this;n.each(this.
_attributes,function(){t.element.attr(this.name,this.value)})},_removeAttributes:
function(){var t=this;n.each(this._attributes,function(){t.element.removeAttr(this.
name)})},_attachEvents:function(){var t=this;this._clickHandler=function(){t.toggle(
)};this._keyDownHandler=function(t){t.which===n.ui.keyCode.SPACE&&t.preventDefault(
)};this._keyUpHandler=function(i){i.which===n.ui.keyCode.SPACE&&t.toggle()};this.
element.on("click",this._clickHandler).on("keyup",this._keyUpHandler).on("keydown",
this._keyDownHandler)},_detachEvents:function(){this.element.off("click",this._clickHandler).
off("keyup",this._keyUpHandler).off("keydown",this._keyDownHandler);this._clickHandler=
null;this._keyHandler=null;this._keyDownHandler=null},_setImage:function(){var t=
"",r=this.options.value,i=this._editedFlag,n=!this.options.disabled;t=r?i?n?this.
options.class_.editedChecked:this.options.class_.editedCheckedDisabled:n?this.options.
class_.checked:this.options.class_.checkedDisabled:i?n?this.options.class_.editedUnchecked:
this.options.class_.editedUncheckedDisabled:n?this.options.class_.unchecked:this.
options.class_.uncheckedDisabled;this._image.attr("class",t+" sprite")},_setOption:
function(n,t){var i=r._setOption.apply(this,arguments);return n==="disabled"&&(this.
element.attr("aria-disabled",t),this._input.prop("disabled",t),this._detachEvents(
),t||this._attachEvents(),this._setImage()),i}})}(jQuery,jQuery.fx.editablecontrol,
this.fx.resources),function(n,t,i,r,u){"use strict";var s=t.prototype,o="fx.fxBalloonIcon",
h=0,c="__fx-balloonicon",l=n.templates("<button class='fx-balloonicon-button' type='button' aria-label='{{attr:altText}}'><span class='sprite {{attr:class_.icon}}'><\/span><\/button>"),
f=null,e=u.getStrings("fx.fxBalloonIcon");n.widget(o,t,{options:{trace:null,skipFocus:
!1,class_:u.getClasses(o),altText:e.help,balloonOptions:{title:e.title,content:e.
content,links:[]}},_showing:!1,_id:null,_clickHandler:null,_balloonCreated:!1,_create:
function(){var t=this;this.element.addClass("fx-balloonicon").html(l.render(this.
options)).find(".fx-balloonicon-button").one("click",function(){n("html").on("click",
this._clickHandler=function(){return t._documentClick.apply(t,arguments)})}).click(
function(){f!==t.element[0]?(t._balloonClickOn(),f=t.element[0]):(t._balloonClickOff(
),f=null)}).on("mouseover",function(){n(this).find("span.sprite").removeClass(t.
options.class_.icon).addClass(t.options.class_.iconHover);f||t._showBalloon()}).
on("mouseleave blur",function(){n(this).find("span.sprite").removeClass(t.options.
class_.iconHover).addClass(t.options.class_.icon);f||t._updateBalloon("leaveButton")}
);this._setOption("skipFocus",this.options.skipFocus);this.element.attr("id",this.
getElementId())},_updateBalloon:function(n,t,i,u){var f;u=u||[];f=r.UI.Balloon.getBoundaries(
this.element.find(".fx-balloonicon-button"));this.element.trigger("balloon",{balloonType:
"balloonIcon",eventType:n,id:this.getElementId(),title:t,content:i,links:u,box:f,
delayHide:!0})},_destroy:function(){this._removeBalloon();this.element.empty().removeClass(
"fx-balloonicon");this._clickHandler!==null&&(n("html").off("click",this._clickHandler),
this._clickHandler=null);this._super()},getElementId:function(){return this.element[
0].id||this._id||(this._id=c+h++)},_balloonClickOff:function(){this._updateBalloon(
"clickOff");this._showing=!1},_balloonClickOn:function(){this._updateBalloon("clickOn",
this.options.balloonOptions.title,this.options.balloonOptions.content,this.options.
balloonOptions.links);this._balloonCreated=!0;this._showing=!0;this.options.trace&&
this.options.trace()},_showBalloon:function(){this._updateBalloon("show",this.options.
balloonOptions.title,this.options.balloonOptions.content,this.options.balloonOptions.
links);this._balloonCreated=!0;this._showing=!0;this.options.trace&&this.options.
trace()},_hideBalloon:function(){this._updateBalloon("hide");this._showing=!1},_toggleBalloon:
function(){this._showing?this._hideBalloon():this._showBalloon()},_documentClick:
function(t){n(t.target).closest(".fx-balloonicon")[0]!==this.element[0]&&f===this.
element[0]&&(this._updateBalloon("setUnlocked"),f=null)},_removeBalloon:function(
){this._balloonCreated&&(this._hideBalloon(),this._updateBalloon("destroy"),this.
_balloonCreated=!1)},_setOption:function(n,t){var i=s._setOption.apply(this,arguments);
return n==="skipFocus"&&(t?this.element.find("button").attr("tabindex",-1):this.
element.find("button").removeAttr("tabindex")),i}})}(jQuery,jQuery.Widget,this,Shell,
this.fx.resources),function(n){"use strict";var t=n.templates("<ul class='fx-legend-list'>{{for items}}<li class='fx-legend-item{{attr:#index+1}} {{attr:cssClass}}'><span class='fx-legend-label' title='{{attr:text}}'><span class='fx-legend-indicator'><\/span>{{>text}}<\/span><\/li>{{/for}}<\/ul>");
n.widget("fx.fxLegend",{options:{items:[]},_create:function(){this._render()},_destroy:
function(){this.element.empty().removeClass("fx-legend");this._super()},_render:
function(){var i=this,r=n.map(this.options.items,function(n){return i._getObject(
n)});this.element.html(t.render({items:r})).addClass("fx-legend").find("li:last").
addClass("last-child")},_getObject:function(n){var t=n;return typeof t!="object"&&
(t={cssClass:"",text:t}),t},_setOption:function(t,i){var r=n.Widget.prototype._setOption.
call(this,t,i);return t==="items"&&this._render(),r}})}(jQuery),function(n,t,i){
"use strict";var r=t.prototype,u="<div class='fx-slider-slider'><\/div><div class='fx-slider-input'><input type='text' data-val='true' /><\/div>",
f="<div class='fx-slider-legend'><\/div>";n.widget("fx.fxSlider",t,{options:{min:
0,max:10,slidableMin:null,slidableMax:null,step:1,legendOptions:null,inputId:null},
_slider:null,_input:null,_changing:!1,_create:function(){this.options.value||(this.
options.value=this._getValidValue(this.options.min));var t=this;this.element.addClass(
"fx-slider").append(n(u));this.options.legendOptions&&i&&i.call(n(f).appendTo(this.
element),this.options.legendOptions);this._input=this.element.find("input").fxTextBox(
{withBalloon:!1,withErrorPlacement:!1}).on("blur",function(){t._setToTextBoxValue(
n(this),!0)}).on("keypress",function(i){i.which===13&&t._setToTextBoxValue(n(this))}
);this._input.data("fx-fxTextBox")._setChildControl(!0);this.options.inputId&&this.
_input.attr("id",this.options.inputId);this._slider=this.element.find(".fx-slider-slider").
slider(n.extend({},this.options,{slide:n.proxy(t._sliderMoved,t),change:n.proxy(
t._sliderChanged,t),range:"min"}));this._setOption("step",this.options.step);this.
_setInputValue(this._input,this.options.value);r._create.call(this)},_destroy:function(
){this.element.empty().removeClass("fx-slider");this._super()},_setInputValue:function(
n,t){n.val(t)},_getInputValue:function(n){return n.val()},_setToTextBoxValue:function(
n,t){if(n.fxTextBox("validate")==="valid"){var i=this._getInputValue(n);this._set(
i)}else t&&(this._setInputValue(n,this._slider.slider("option","value")),n.fxTextBox(
"validate"))},_set:function(n){n=this._getValidValue(n);this._slider.slider("option",
"value")!==n&&(this._changing=!0,this._slider.slider("value",n),this._changing=!1);
this._input.fxTextBox("resetValidation");this._setInputValue(this._input,n);r._set.
call(this,n)},_getValidValue:function(n){var t=this.options.slidableMin===null?this.
options.min:Math.max(this.options.min,this.options.slidableMin),i=this.options.slidableMax===
null?this.options.max:Math.min(this.options.max,this.options.slidableMax);return Math.
max(t,Math.min(i,n))},_sliderMoved:function(n,t){if(this.options.slidableMin!==null&&
t.value<this.options.slidableMin||this.options.slidableMax!==null&&t.value>this.
options.slidableMax)return!1;this._setInputValue(this._input,t.value)},_sliderChanged:
function(n,t){this._changing||this._set(t.value)},_setOption:function(n,t){var i=
r._setOption.apply(this,arguments);switch(n){case"disabled":this._input.prop("disabled",
t);t?this._slider.slider("disable"):this._slider.slider("enable");break;case"step":
this._input.removeAttr("data-val-regex").removeAttr("data-val-regex-pattern").removeAttr(
"data-val-number");/^\d+$/.test(t)?this._input.attr({"data-val-regex":"","data-val-regex-pattern":
"^-?\\d+$"}):this._input.attr("data-val-number","");this._input.fxTextBox("resetValidation")}
return i}})}(jQuery,jQuery.fx.editablecontrol,jQuery.fn.fxLegend),function(n,t,i)
{"use strict";var r=t.prototype;n.widget("fx.fxSliderQuota",t,{options:{multiplier:
1,group:null,groupValueNotDisplayed:0},_eventName:"sliderchange.fxSliderQuota",_dataName:
"fx.fxSliderQuota",_totalBar:null,_globalSliderChangedProxy:null,_originalStep:null,
_create:function(){if(this.options.group===null&&this.options.group!=="_length")
throw"You must provide a group name if you are using a group slider.";this.options.
multiplier<=0&&(this.options.multiplier=1);this.options.value||(this.options.value=
this.options.min);this._addToDocument();this.options.value=this._getValidValue(this.
options.value);r._create.call(this);this._setOption("step",this.options.step);this.
element.addClass("fx-sliderquota");this._totalBar=n("<div class='fx-slider-groupbar'><\/div>").
insertAfter(this.element.find(".ui-slider-handle"));var t=this;this._globalSliderChangedProxy=
function(){t._globalSliderChanged.apply(t,arguments)};n(i.document).on(this._eventName,
this._globalSliderChangedProxy);this._globalTriggerSliderChange(this.options.value)}
,_destroy:function(){this._totalBar.remove();this._removeFromDocument();this.element.
removeClass("fx-sliderquota");n(i.document).off(this._eventName,this._globalSliderChangedProxy);
this._super()},_addToDocument:function(){var t=n.data(i.document,this._dataName)||
{_length:0};t[this.options.group]||(t[this.options.group]=[],t._length++);t[this.
options.group].push(this);n.data(i.document,this._dataName,t)},_removeFromDocument:
function(){for(var t=n.data(i.document,this._dataName),r=0;r<t[this.options.group].
length;r++){t[this.options.group].splice(r,1);break}t[this.options.group].length===
0&&(delete t[this.options.group],t._length--);t._length===0&&n.removeData(i.document,
this._dataName)},_updateTotalBar:function(n,t){if(this._totalBar){var r=n-this.options.
min+t,i=this.options.max-this.options.min,u=Math.min(i!==0?r/i*100:0,100);this._totalBar.
css({width:u+"%"});this.options.slidableMax=this.options.max-(n-this.options.value)}
},_globalSliderChanged:function(t,r){if(r.groupName===this.options.group){for(var
f=n.data(i.document,this._dataName)[r.groupName],e=r.groupValue,u=0;u<f.length;u++)
e+=f[u].options.value;this._updateTotalBar(e,r.tempAdditionalValue)}},_globalTriggerSliderChange:
function(n){this.element.trigger(this._eventName,{groupName:this.options.group,groupValue:
this.options.groupValueNotDisplayed,tempAdditionalValue:n-this.options.value})},
_set:function(n){n=this._getValidValue(n);r._set.call(this,n);this._globalTriggerSliderChange(
this.options.value)},_getValidValue:function(t){var f=n.data(i.document,this._dataName)[
this.options.group],o=this.options.groupValueNotDisplayed,u,e;for(t=r._getValidValue.
call(this,t),u=0;u<f.length;u++)f[u]!==this&&(o+=f[u].options.value);return t=Math.
max(Math.min(this.options.max-o,t),0),t=this._getNearestLowerDivisible(t,this.options.
multiplier),e=this.options.slidableMin===null?this.options.min:Math.max(this.options.
min,this.options.slidableMin),t<e&&(t=this._getNearestUpperDivisible(e,this.options.
multiplier)),t},_getNearestLowerDivisible:function(n,t){return Math.floor(n/t)*t}
,_getNearestUpperDivisible:function(n,t){return Math.ceil(n/t)*t},_setInputValue:
function(n,t){r._setInputValue.call(this,n,t/this.options.multiplier)},_getInputValue:
function(n){return r._getInputValue.call(this,n)*this.options.multiplier},_sliderMoved:
function(n,t){if(r._sliderMoved.call(this,n,t)===!1)return!1;this._globalTriggerSliderChange(
t.value)},_setOption:function(n,t){var i;switch(n){case"multiplier":if(t>this.options.
slidableMax)throw"The multiplier cannot be greater than the slidableMax";return i=
r._setOption.call(this,n,t),this._setOption("step",this.options.step),this._set(
this.options.value),i;case"step":return i=r._setOption.call(this,n,t*this.options.
multiplier),this._slider&&this._slider.slider("option","step",this.options.step),
i}return r._setOption.apply(this,arguments)}})}(jQuery,jQuery.fx.fxSlider,this),
function(n,t,i,r,u,f){"use strict";var o=t.prototype,e="fx.fxUsageBars",s=u.getStrings(
e),h=s.xofyunits.format("<span class='fx-usagebars-label-percent'><\/span>","{{>totalQuotaToDisplay}} <span class='fx-usagebars-label-unit'>{{>unitLabelLong}}<\/span>"),
c="<div class='fx-usagebars-legend'><\/div><ul>{{for quotas}}<li class='fx-usagebars-quota'><div class='fx-usagebars-callout'><div class='fx-usagebars-callout-body'><\/div><div class='fx-usagebars-callout-pointer'><\/div><\/div><div class='fx-usagebars-calloutbar-container'><div class='fx-usagebars-calloutbar fx-usagebars-calloutbar-max'><\/div><div class='fx-usagebars-calloutbar fx-usagebars-calloutbar-other'><\/div><div class='fx-usagebars-calloutbar fx-usagebars-calloutbar-this'><\/div><\/div><div class='fx-usagebars-label-container'><div class='fx-usagebars-label-name'>{{>name}}<\/div><div class='fx-usagebars-label-description'>"+
h+"<\/div><\/div><\/li>{{/for}}<\/ul>",l=n.templates(c),a=.55;n.widget(e,t,{options:
{thisEntityName:null,otherEntityName:null,totalEntityName:null,atCapacityName:null,
overCapacityName:null,text:u.getStrings(e),quotas:[]},_defaultRoundingDecimals:2,
_resizeHandler:null,_init:function(){var t=this;this._normalizeInput();this.element.
addClass("fx-usagebars");this.element.html(l.render(this.options));this._setBarAndText(
);this._setCalloutPosition();n(r).on("resize",this._resizeHandler=function(){return t.
_setCalloutPosition.apply(t,arguments)});o._create.call(this)},_destroy:function(
){this._resizeHandler!==null&&(n(r).off("resize",this._resizeHandler),this._resizeHandler=
null);this.element.empty().removeClass("fx-usagebars fx-usagebars-legend-withother");
this._super()},_setBarAndText:function(){var t=this,i=!1,r=!1;n.each(this.element.
find(".fx-usagebars-quota"),function(u){var e=n(this),s=e.find(".fx-usagebars-calloutbar-this"),
h=e.find(".fx-usagebars-calloutbar-other"),y=e.find(".fx-usagebars-label-percent"),
c=e.find(".fx-usagebars-callout"),a=c.find(".fx-usagebars-callout-body"),f=t.options.
quotas[u],v=typeof f.usedByThis=="number"?f.usedByThis:0,l=f.totalQuota===0?0:100*
v/f.totalQuota,o=f.totalQuota===0?0:100*f.usedByAll/f.totalQuota,p=f.usedByThis===
Math.round(v)?0:f.roundingDecimals||t._defaultRoundingDecimals;s.css("width",Math.
round(Math.min(100,l))+"%");h.css("width",Math.round(Math.min(100,o))+"%");t.options.
atCapacityName!==null&&l===100?(s.addClass("fx-usagebars-atcapacity"),c.addClass(
"fx-usagebars-atcapacity"),i=!0):t.options.overCapacityName!==null&&l>100&&(s.addClass(
"fx-usagebars-overcapacity"),c.addClass("fx-usagebars-overcapacity"),r=!0);t.options.
atCapacityName!==null&&o===100?(h.addClass("fx-usagebars-atcapacity"),i=!0):t.options.
overCapacityName!==null&&o>100&&(h.addClass("fx-usagebars-overcapacity"),r=!0);y.
html(Math.round(o)+"%");typeof f.usedByThis=="number"?a.html(parseFloat(f.usedByThis.
toFixed(p))+" "+f.unitLabel):a.html(f.usedByThis)});this._createLegend(i,r)},_normalizeInput:
function(){for(var i=this.options.quotas.length,n,t=0;t<i;t++)n=this.options.quotas[
t],(n.usedByAll===f||n.usedByAll===null)&&(n.usedByAll=n.usedByThis),n.totalQuotaToDisplay=
n.totalQuota!==Math.round(n.totalQuota)?n.totalQuota.toFixed(n.roundingDecimals||
this._defaultRoundingDecimals):n.totalQuota,n.totalQuotaToDisplay=parseFloat(n.totalQuotaToDisplay)}
,_createLegend:function(n,t){var r=[];this.element.removeClass("fx-usagebars-legend-other");
i&&(r.push({cssClass:"fx-usagebars-legend-this",text:this.options.thisEntityName}),
this.options.otherEntityName!==null&&(this.element.addClass("fx-usagebars-legend-withother"),
r.push({cssClass:"fx-usagebars-legend-other",text:this.options.otherEntityName})),
r.push({cssClass:"fx-usagebars-legend-total",text:this.options.totalEntityName}),
this.options.atCapacityName!==null&&n&&r.push({cssClass:"fx-usagebars-legend-atcapacity",
text:this.options.atCapacityName}),this.options.overCapacityName!==null&&t&&r.push(
{cssClass:"fx-usagebars-legend-overcapacity",text:this.options.overCapacityName}),
i.call(this.element.find(".fx-usagebars-legend"),{items:r}))},_setCalloutPosition:
function(){var t=this.element.width();n.each(this.element.find(".fx-usagebars-quota"),
function(){var u=n(this),f=u.find(".fx-usagebars-calloutbar-this"),r=u.find(".fx-usagebars-callout"),
i=f.width();i=Math.min(t-1,i);i/t>a&&(r.addClass("fx-usagebars-callout-reversed"),
i-=r.width());r.css("left",i)})}})}(jQuery,jQuery.Widget,jQuery.fn.fxLegend,this,
this.fx.resources),function(n,t,i,r,u){"use strict";var f=t.prototype,e=n.templates(
"<a href='javascript:;' class='fx-dropdown' aria-haspopup='true' role='button' aria-labelledby='{{attr:ariaLabeledBy}}'><div class='fx-dropdown-current'><\/div><span class='fx-dropdown-arrow sprite' title='{{attr:altTextArrow}}'><\/span><div class='fx-dropdown-anchor' aria-hidden='true'><ul class='fx-dropdown-list' role='listbox'><\/ul><\/div><\/a>");
n.widget("fx.fxDropdown",t,{options:{validateOnChange:!0,class_:r.getClasses("fx.fxDropdown"),
altTextArrow:"Expand/Collapse",maxFlyoutHeight:300,ariaLabeledBy:null},_widget:null,
_current:null,_arrow:null,_anchor:null,_flyOut:null,_activateHandler:null,_deactivateHandler:
null,_overHandler:null,_outHandler:null,_create:function(){this.element.data=this.
options.data;this._widget=n(e.render(this.options)).on("mouseenter mouseup focus",
this._overHandler=n.proxy(this._mouseOver,this)).on("mouseleave mousedown blur",
this._outHandler=n.proxy(this._mouseOut,this)).on("keydown",n.proxy(this._keyDown,
this)).on("click",function(n){n.preventDefault()}).insertAfter(this.element).append(
this.element);this._current=this._widget.find(".fx-dropdown-current");this._arrow=
this._widget.find(".fx-dropdown-arrow").addClass(this.options.class_.arrow);this.
_anchor=this._widget.find(".fx-dropdown-anchor");this._flyOut=this._widget.find(
"ul").on("click.fxdropdown","li",n.proxy(this._select,this));this.element.addClass(
"fx-shadow");f._create.call(this);this._deactivate()},_init:function(){function i(
t,i){var r=n("<li />",{"aria-selected":"false"});t.disabled&&r.attr("aria-disabled",
!0);r.html(t.text).appendTo(i)}var t=this;this.options.value===u&&(this.options.
value=this.element.val());this._current.html(this.element.find("option:selected").
html());this._flyOut.empty();this.element.children("option, optgroup").each(function(
r,u){var f;u.tagName==="OPTION"?i(u,t._flyOut):u.tagName==="OPTGROUP"&&(n("<li />").
addClass("fx-dropdown-title").html(u.label).appendTo(t._flyOut),f=n("<ul />").appendTo(
t._flyOut),n(u).children("option").each(function(n,t){i(t,f)}))});this._updateSelectionIndicator(
)},_destroy:function(){this.element.removeClass("fx-shadow").insertAfter(this._widget);
this._deactivateHandler!==null&&(n(i.document).off("click.fxdropdown",this._deactivateHandler),
this._deactivateHandler=null);this._super();this._widget.remove();this._widget=null;
this._current=null;this._arrow=null;this._anchor=null;this._flyOut=null},widget:
function(){return this._widget||this.element},enable:function(){this._widget.attr(
"href","javascript:;").one("click.fxdropdown",this._activateHandler=n.proxy(this.
_activate,this)).on("mouseenter mouseup focus",this._overHandler=n.proxy(this._mouseOver,
this)).on("mouseleave mousedown blur",this._outHandler=n.proxy(this._mouseOut,this));
return this.element.removeAttr("disabled"),f.enable.call(this)},disable:function(
){return this._widget.removeAttr("href").off("click.fxdropdown"),this._overHandler!==
null&&(this._widget.off("mouseenter mouseup focus",this._overHandler),this._overHandler=
null),this._outHandler!==null&&(this._widget.off("mouseleave mousedown blur",this.
_outHandler),this._outHandler=null),this.element.attr("disabled","disabled"),f.disable.
call(this)},_mouseOver:function(){this._arrow.removeClass(this.options.class_.arrow).
addClass(this.options.class_.arrowHover)},_mouseOut:function(){this._arrow._arrow.
removeClass(this.options.class_.arrowHover).addClass(this.options.class_.arrow)}
,_keyDown:function(n){if(n.altKey)switch(n.keyCode){case 38:this._deactivate();n.
preventDefault();return;case 40:this._activate(n);n.preventDefault();return}var t=
this.element.find("option:selected")[0];switch(n.keyCode){case 38:this._selectAtIndex(
this._getIndexOfOption(t)-1);n.preventDefault();break;case 40:this._selectAtIndex(
this._getIndexOfOption(t)+1);n.preventDefault()}},_activate:function(t){if(!this.
_widget.hasClass("fx-dropdown-active")){t.preventDefault();var o=n(i),s=25,u=this.
_widget.offset().top-o.scrollTop(),e=o.height()-(u+this._widget.outerHeight()),r,
f=null,h=this;u-=s;e-=s;this._anchor.addClass("fx-dropdown-active");r=Math.min(this.
_flyOut.outerHeight(),this.options.maxFlyoutHeight);this._anchor.removeClass("fx-dropdown-active");
e>=r?f="fx-dropdown-flybelow":u>=r?f="fx-dropdown-flyabove":u>e?(f="fx-dropdown-flyabove",
r=u):(f="fx-dropdown-flybelow",r=e);this._anchor.addClass("fx-dropdown-active "+
f).attr("aria-hidden","false");this._flyOut.css("max-height",r);i.setTimeout(function(
){var t=h;n(i.document).one("click.fxdropdown",h._deactivateHandler=function(){t.
_deactivate()})},0)}},_deactivate:function(){this._deactivateHandler=null;this._anchor.
removeClass("fx-dropdown-active fx-dropdown-flybelow fx-dropdown-flyabove").attr(
"aria-hidden","true");this._flyOut.css("max-height","");this._activateHandler!==
null&&(this._widget.off("click.fxdropdown",this._activateHandler),this._activateHandler=
null);this._widget.one("click.fxdropdown",this._activateHandler=n.proxy(this._activate,
this))},_select:function(t){if(t.preventDefault(),n(t.target).attr("aria-disabled")===
"true"||n(t.target).hasClass("fx-dropdown-title")){t.stopPropagation();return}this.
_selectAtIndex(this._getIndexOfListItem(t.target))},_selectAtIndex:function(n){var
i=this.element.find("option"),t;n<0||n>=i.length||(t=i.prop("selected",!1).attr(
"aria-selected","false").eq(n).prop("selected",!0).attr("aria-selected","true"),
this._current.html(t.html()),this.element.trigger("change"),f._set.call(this,t.val(
)),this.options.validateOnChange&&this.validate(),this._updateSelectionIndicator(
))},_escapeAttributeValue:function(n){return n.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]\^`{|}~])/g,
"\\$1")},_set:function(n){if(typeof n!="undefined"&&n!==null){var i=this._escapeAttributeValue(
n),t=this.element.find("option[value='"+i+"']");if(!t.length)throw"The value is not found";
this._selectAtIndex(this._getIndexOfOption(t[0]))}},_getIndexOfListItem:function(
n){for(var i=this._flyOut.find("li:not(.fx-dropdown-title)"),t=0;t<i.length;t++)
if(i[t]===n)return t;return-1},_getIndexOfOption:function(n){for(var i=this.element.
find("option"),t=0;t<i.length;t++)if(i[t]===n)return t;return-1},_updateSelectionIndicator:
function(){var n=this.element[0].selectedIndex;n!==-1&&this._flyOut.find("li:not(.fx-dropdown-title)").
removeClass("fx-dropdown-selected").eq(n).addClass("fx-dropdown-selected")}})}(jQuery,
jQuery.fx.fxValidation,this,this.fx.resources),function(n,t,i,r,u){"use strict";
var e=t.prototype,f="fx.fxUpload",o=n.templates("<div class='fx-upload' tabindex='0'><span class='fx-upload-button sprite {{attr:class_.icon}}'><\/span><div class='fx-upload-label'><\/div><\/div>");
n.widget(f,t,{options:{validateOnChange:!0,class_:r.getClasses(f),acceptedMimeTypes:
[],text:r.getStrings(f)},_widget:null,_widgetLabel:null,_mouseEnterHandler:null,
_mouseLeaveHandler:null,_changeHandler:null,_clickHandler:null,_oldTabIndex:null,
_create:function(){var t=this;this._widget=n(o.render(this.options));this._widgetLabel=
this._widget.find(".fx-upload-label");this._widget.on("mousemove",n.proxy(this._mouseMove,
this)).on("focusin",n.proxy(this._focus,this)).on("focusout",n.proxy(this._focusEnd,
this)).on("keypress",function(n){n.which===13&&t.element.trigger("click")}).insertAfter(
this.element);this._oldTabIndex=this.element.attr("tabindex");this.element.attr(
"tabindex","-1");this.element.addClass("fx-upload-native").on("mouseenter",this.
_mouseEnterHandler=n.proxy(this._mouseEnter,this)).on("mouseleave",this._mouseLeaveHandler=
n.proxy(this._mouseLeave,this)).on("change",this._changeHandler=n.proxy(this._change,
this)).on("click",this._clickHandler=n.proxy(this._click,this)).appendTo(this._widget).
attr("accept",this.options.acceptedMimeTypes.toString());this._change();e._create.
call(this)},_destroy:function(){this.element.removeClass("fx-upload-native fx-upload-hover fx-upload-tabactive").
off("mouseenter",this._mouseEnterHandler).off("mouseleave",this._mouseLeaveHandler).
off("change",this._changeHandler).off("click",this._clickHandler).css({left:"",top:
""}).insertAfter(this._widget);this._widget.remove();this._oldTabIndex!==u&&this.
element.attr("tabindex",this._oldTabIndex);this._super()},widget:function(){return this.
_widget||this.element},_focus:function(){this._widget.addClass("fx-upload-tabactive")}
,_focusEnd:function(){this._widget.removeClass("fx-upload-tabactive")},_mouseEnter:
function(){this._widget.addClass("fx-upload-hover")},_mouseLeave:function(){this.
_widget.removeClass("fx-upload-hover")},_mouseMove:function(n){var t=this._widget.
offset();this.element.css({left:n.pageX-t.left-(this.element.outerWidth()-20),top:
n.pageY-t.top-8})},_click:function(){var n=this;this.element.data("fx-upload-value",
this.element.val());i.setTimeout(function(){n.element.val()&&n.element.val()!==n.
element.data("fx-upload-value")&&n.element.trigger("change")},100)},_change:function(
){var n=this.element.val();n===""?this._widgetLabel.text(this.options.text.label).
removeClass("fx-upload-chosen"):(n=n.split(/\\/).pop(),this._widgetLabel.text(n).
addClass("fx-upload-chosen"));e._set.call(this,n);this.options.validateOnChange&&
!this._creating&&this.validate()}})}(jQuery,jQuery.fx.fxValidation,this,this.fx.
resources),function(n,t,i){"use strict";var r=0,u="__fx-tree",f=t.prototype;n.widget(
"fx.fxTree",t,{options:{},_currentNode:null,_selectedNode:null,_clickHandler:null,
_focusInHandler:null,_focusOutHandler:null,_keyDownHandler:null,_create:function(
){var t=this,n=this._getContainer(this.element);this.element.addClass("fx-tree").
attr("role","tree");this._addHandlers();n||(n=this.element.append("<ul />"));n.children(
"li").each(function(){t._createNode(this)});f._create.call(this)},_destroy:function(
){this.element.removeClass("fx-tree").removeAttr("role").empty();this._removeHandlers(
);this._super()},addNode:function(t,i){var u=this._getNode(i),r,f;return u||n.error(
"unable to find tree node with path '"+i+"'"),r=this._createNode(t),this._addNodeToParent(
u,r),f=i?i+"\\":"",f+this._getNodeId(r)},removeNode:function(t){t||n.error("path is required");
var f=t.split("\\"),e=f.slice(-1)[0],r=this._getNode(f.slice(0,-1).join("\\")),i,
u;r||n.error("node to remove does not exist");i=this._getContainer(r);i||n.error(
"node to remove does not exist");u=i.children("li[data-tree-id="+e+"]");u.length===
0&&n.error("node to remove does not exist");u.remove();i.children("li").length===
0&&this._convertParentNodeToLeafNode(r)},getSelectedNode:function(){return this.
_selectedNode?this._getNodePath(this._selectedNode):null},selectNode:function(t)
{t||n.error("path is required");var i=this._getNode(t);i||n.error("node to select does not exist");
this._selectNode(i)},deselectNode:function(t){t||n.error("path is required");var
i=this._getNode(t);i||n.error("node to deselect does not exist");this._deselectNode(
i)},expandNode:function(t){t||n.error("path is required");var i=this._getNode(t);
i||n.error("node to expand does not exist");this._isExpanded(i)||this._toggleNode(
i)},collapseNode:function(t){t||n.error("path is required");var i=this._getNode(
t);i||n.error("node to collapse does not exist");this._isExpanded(i)&&this._toggleNode(
i)},_addHandlers:function(){var n=this;this._clickHandler=function(){return n._click.
apply(n,arguments)};this._focusInHandler=function(){return n._focusIn.apply(n,arguments)}
;this._focusOutHandler=function(){return n._focusOut.apply(n,arguments)};this._keyDownHandler=
function(){return n._keyDown.apply(n,arguments)};this.element.on("click",this._clickHandler).
on("focusin",this._focusInHandler).on("focusout",this._focusOutHandler).on("keydown",
this._keyDownHandler)},_removeHandlers:function(){this.element.off("click",this.
_clickHandler).off("focusin",this._focusInHandler).off("focusout",this._focusOutHandler).
off("keydown",this._keyDownHandler)},_getNode:function(t){if(t==="")return this.
element;for(var e=t.split("\\"),r=this.element,o,f,s=function(){return(f=n(this).
data("tree-id"),f!==i&&(f+="",f===e[u]))?!0:!1},u=0;u<e.length&&r&&r.length>0;u++)
o=this._getContainer(r),r=null,o&&(r=o.find("li").filter(s));return u!==e.length||
r.length===0?null:r},_getNodeListItem:function(t){if(!t)return null;var i=n(t).closest(
"li");return i.length?i:null},_getNextNode:function(n){var t=this._getNodeListItem(
n),i=[];return t?(i=t.attr("aria-expanded")==="true"?t.find("li").eq(0):t.next("li"),
i.length===0?this._getNextVisibleDescendant(t):i):null},_getNextVisibleDescendant:
function(n){var t,i;return!n||n.length===0?null:(t=this._getParentNode(n),t?(i=t.
next("li"),i.length>0?i:this._getNextVisibleDescendant(t)):null)},_getPreviousNode:
function(n){var t=this._getNodeListItem(n),i=[];return t?(i=t.prev("li"),i.length===
0?this._getParentNode(t):this._getLastVisibleDescendant(i)):null},_getLastVisibleDescendant:
function(n){return!n||n.length===0?null:this._isExpanded(n)?this._getLastVisibleDescendant(
this._getContainer(n).children("li").last()):n},_click:function(t){var i=this._getNodeListItem(
t.target),r=n(t.target);return i||n.error("Could not find node to select"),r.closest(
".fx-tree-expandable").length>0&&this._toggleNode(i),r.closest(".fx-tree-selectable").
length>0&&this._selectNode(i),!0},_focusIn:function(t){var i=this._getNodeListItem(
t.target);return i||n.error("Could not find node to select"),this._addFocus(i),!0}
,_focusOut:function(t){var i=this._getNodeListItem(t.target);return i||n.error("Could not find node to select"),
this._removeFocus(i),!0},_keyDown:function(t){var i=this._getNodeListItem(t.target),
r=!0;i||n.error("Could not find node for keydown event");switch(t.which){case n.
ui.keyCode.SPACE:case n.ui.keyCode.ENTER:this._selectNode(i);r=!1;break;case n.ui.
keyCode.UP:this._setFocus(this._getPreviousNode(i));r=!1;break;case n.ui.keyCode.
DOWN:this._setFocus(this._getNextNode(i));r=!1;break;case n.ui.keyCode.LEFT:this.
_leftKeyDown(i);r=!1;break;case n.ui.keyCode.RIGHT:this._rightKeyDown(i);r=!1}return r}
,_leftKeyDown:function(n){this._currentNode&&this._isExpanded(n)?this._toggleNode(
n):this._setFocus(this._getParentNode(n))},_rightKeyDown:function(n){!this._currentNode||
this._isLeaf(n)||this._isExpanded(n)?this._setFocus(this._getFirstChildNode(n)):
this._toggleNode(n)},_getContainer:function(n){var t;return n||(n=this.element),
t=n.children("ul").eq(0),t.length===0?null:t},_addNodeToParent:function(n,t){var
i=this._getContainer(n);i===null&&(this._convertLeafNodeToParentNode(n),i=this._getContainer(
n));i.append(t)},_convertLeafNodeToParentNode:function(n){n.append("<ul />").removeClass(
"fx-tree-leaf").attr("aria-expanded",!1).find(".fx-tree-expandable").addClass("fx-tree-expand-active")}
,_convertParentNodeToLeafNode:function(n){n.removeClass("fx-tree-expanded").removeAttr(
"aria-expanded").addClass("fx-tree-leaf").find("ul").remove().end().find(".fx-tree-exandable").
removeClass("fx-tree-expand-active")},_createNode:function(t){var u=this,r;return t=
n(t),r=this._getContainer(t),t.addClass("fx-tree-node"),this._disableNodeTabIndices(
t),this._currentNode||(t.attr("tabindex",0),this._currentNode=t),this._getNodeId(
t)===i&&t.data("tree-id",this._generateNodeId()),r!==null?(t.attr("aria-expanded",
!1),r.children("li").each(function(){u._createNode(this)})):t.addClass("fx-tree-leaf"),
t},_generateNodeId:function(){return u+r++},_getNodeId:function(n){return n.data(
"tree-id")},_getParentNode:function(n){var t=n.parent().closest("li.fx-tree-node");
return t.length===0?null:t},_getFirstChildNode:function(n){var t=n.find("li").eq(
0);return t.length===0?null:t},_getNodePath:function(n){var t=this._getParentNode(
n);return t?this._getNodePath(t)+"\\"+this._getNodeId(n):this._getNodeId(n)},_toggleNode:
function(n){if(!n.hasClass("fx-tree-leaf")){var t=!this._isExpanded(n);n.attr("aria-expanded",
t);n.toggleClass("fx-tree-expanded");this._setNodeExpandedState(n,t)}},_isLeaf:function(
n){return n.hasClass("fx-tree-leaf")?!0:!1},_isExpanded:function(n){var t=n.attr(
"aria-expanded");return t==="true"},_setNodeExpandedState:function(){},_deselectNode:
function(t){t.attr("aria-selected")==="true"&&(this._selectedNode[0]!==t[0]&&n.error(
"trying to deselect a node that is not the currently selected node"),this._selectedNode=
null,t.attr("aria-selected",!1))},_selectNode:function(n){this.element.find("li").
attr("aria-selected",!1);this._selectedNode=n;n.attr("aria-selected",!0)},_disableNodeTabIndices:
function(t){var r=t.find("a"),i;for(t.attr("tabindex",-1),i=0;i<r.length;i++)n(r[
i]).attr("tabindex",-1)},_setFocus:function(n){n&&n.focus()},_addFocus:function(
n){this._currentNode&&this._currentNode.attr("tabindex",-1);n.attr("tabindex",0);
n.addClass("focus");this._currentNode=n},_removeFocus:function(n){n.removeClass(
"focus")}})}(jQuery,jQuery.fx.editablecontrol),function(n,t,i){"use strict";var r=
t.prototype,u="fx.fxTreeView",f="<img class='fx-treeview-expand-image' />",e="<li data-tree-id='{{attr:id}}'><span class='fx-tree-expandable'><\/span><span class='fx-tree-selectable'><span class='fx-treeview-item-text'>{{>text}}<\/span><\/span><\/li>",
o="<li data-tree-id='{{attr:id}}'><span class='fx-tree-expandable'><\/span><img class='fx-treeview-item-icon' src='{{url:icon}}' alt='{{attr:alt}}'/><span class='fx-tree-selectable'><span class='fx-treeview-item-text'>{{>text}}<\/span><\/span><\/li>";
n.widget(u,t,{options:{class_:i.getClasses(u),text:i.getStrings(u)},_nodeTemplate:
null,_create:function(){this.element.addClass("fx-treeview");this.setTemplate(n.
fx.fxTreeView.Template.Text);r._create.call(this)},_destroy:function(){this.element.
removeClass("fx-treeview");this._super()},addNode:function(t,i){var u;return t.id||
(t=n.extend({},{id:this._generateNodeId()},t)),t.alt||(t=n.extend({},{alt:t.text},
t)),u=n(this._nodeTemplate.render(t)),r.addNode.call(this,u.filter("li"),i)},setTemplate:
function(t,i){switch(t){case n.fx.fxTreeView.Template.Custom:this._nodeTemplate=
n.templates(i);break;case n.fx.fxTreeView.Template.Text:this._nodeTemplate=n.templates(
e);break;case n.fx.fxTreeView.Template.ImageAndText:this._nodeTemplate=n.templates(
o)}},_convertLeafNodeToParentNode:function(t){t.find(".fx-tree-expandable").append(
n(f).attr({src:this.options.url.collapsed,alt:this.options.text.collapsed}));r._convertLeafNodeToParentNode.
call(this,t)},_convertParentNodeToLeafNode:function(n){n.find("img.fx-treeview-expand-image").
remove();r._convertParentNodeToLeafNode.call(this,n)},_setNodeExpandedState:function(
n,t){t?n.children(".fx-tree-expandable").children("img.fx-treeview-expand-image").
attr({src:this.options.url.expanded,alt:this.options.text.expanded}):n.children(
".fx-tree-expandable").children("img.fx-treeview-expand-image").attr({src:this.options.
url.collapsed,alt:this.options.url.collapsed})}});n.fx.fxTreeView.Template={Custom:
0,Text:1,ImageAndText:2}}(jQuery,jQuery.fx.fxTree,this.fx.resources),function(n,
t,i){"use strict";var r=t.prototype,u=0,f="__fx-tristatecheckbox",e="<input type='checkbox' name='' value='' tabindex='-1' /><span class='sprite><\/span>";
n.widget("fx.fxTristateCheckBox",t,{options:{name:"",inputId:null,inputCheckedValue:
"checked",inputIndeterminateValue:"indeterminate",class_:i.getClasses("fx.fxTristateCheckBox")},
_attributes:[{name:"role",value:"checkbox"},{name:"tabindex",value:"0"}],_input:
null,_image:null,_clickHandler:null,_keyUpHandler:null,_keyDownHandler:null,_create:
function(){r._create.call(this);this.options.value!==n.fx.fxTristateCheckBox.Values.
checked&&this.options.value!==n.fx.fxTristateCheckBox.Values.indeterminate&&this.
options.value!==n.fx.fxTristateCheckBox.Values.unchecked&&(this.options.value=n.
fx.fxTristateCheckBox.Values.unchecked);this.element.empty().addClass("fx-tristatecheckbox").
attr("name",f+u++).append(e);this._input=this.element.find("input").attr("name",
this.options.name||f+u++).hide();this.options.inputId&&this._input.attr("id",this.
options.inputId);this._image=this.element.find("span.sprite");this._addAttributes(
);this._attachEvents();this._set(this.options.value)},_destroy:function(){this._super(
);this.element.empty().removeClass("fx-tristatecheckbox");this._removeAttributes(
);this._detachEvents();this._input=null;this._image=null},toggle:function(){var t;
t=this.options.value===n.fx.fxTristateCheckBox.Values.checked?n.fx.fxTristateCheckBox.
Values.unchecked:n.fx.fxTristateCheckBox.Values.checked;this._set(t)},_set:function(
t){var i=t!==n.fx.fxTristateCheckBox.Values.unchecked;r._set.call(this,t);this._input&&
(t===n.fx.fxTristateCheckBox.Values.checked?this._input.val(this.options.inputCheckedValue):
t===n.fx.fxTristateCheckBox.Values.indeterminate&&this._input.val(this.options.inputIndeterminateValue),
this._input.prop("checked",i),this.element.attr("aria-checked",i),this._setImage(
))},_addAttributes:function(){var t=this;n.each(this._attributes,function(){t.element.
attr(this.name,this.value)})},_removeAttributes:function(){var t=this;n.each(this.
_attributes,function(){t.element.removeAttr(this.name)})},_attachEvents:function(
){var t=this;this._clickHandler=function(){t.toggle()};this._keyUpHandler=function(
i){i.which===n.ui.keyCode.SPACE&&t.toggle()};this._keyDownHandler=function(t){t.
which===n.ui.keyCode.SPACE&&t.preventDefault()};this.element.on("click",this._clickHandler).
on("keyup",this._keyUpHandler).on("keydown",this._keyDownHandler)},_detachEvents:
function(){this.element.off("click",this._clickHandler).off("keyup",this._keyUpHandler).
off("keydown",this._keyDownHandler);this._clickHandler=null;this._keyHandler=null}
,_setImage:function(){var i="",r=this.options.value,u=this._editedFlag,t=!this.options.
disabled;r===n.fx.fxTristateCheckBox.Values.checked?i=u?t?this.options.class_.editedChecked:
this.options.class_.editedCheckedDisabled:t?this.options.class_.checked:this.options.
class_.checkedDisabled:r===n.fx.fxTristateCheckBox.Values.indeterminate?i=u?t?this.
options.class_.editedIndeterminate:this.options.class_.editedIndeterminateDisabled:
t?this.options.class_.indeterminate:this.options.class_.indeterminateDisabled:r===
n.fx.fxTristateCheckBox.Values.unchecked&&(i=u?t?this.options.class_.editedUnchecked:
this.options.class_.editedUncheckedDisabled:t?this.options.class_.unchecked:this.
options.class_.uncheckedDisabled);this._image.attr("class","sprite "+i)},_setOption:
function(n,t){var i=r._setOption.apply(this,arguments);return n==="disabled"&&(this.
element.attr("aria-disabled",t),this._input.prop("disabled",t),this._detachEvents(
),t||this._attachEvents(),this._setImage()),i}});n.fx.fxTristateCheckBox.Values=
{checked:"checked",indeterminate:"indeterminate",unchecked:"unchecked"}}(jQuery,
jQuery.fx.editablecontrol,this.fx.resources),function(n,t,i){"use strict";var f=
t.prototype,e=i.getClasses("fxs.fxsCopyButton"),r=i.getStrings("fxs.fxsCopyButton"),
u=n.templates("<div class='fxs-copybutton-value'><input aria-labelledby='{{attr:ariaLabelledBy}}' type='text' readonly='readonly' /><\/div><span class='fxs-copybutton-button'><span class='sprite'><\/span><\/span><div class='fxs-copybutton-copied'>{{html:copySuccess}}<\/div>");
n.widget("fxs.fxsCopyButton",t,{options:{ariaLabelledBy:null,text:null,labelElement:
!1,getClipboardText:null},_create:function(){var t=this;this.element.addClass("fxs-copybutton");
t.options.labelElement?(this.element.html(u.render(n.extend({},this.options,r))).
find(".fxs-copybutton-value").addClass("fxs-copybutton-value-withoutdefaultlabel"),
t.options.labelElement.addClass("fxs-copybutton-value").prependTo(this.element)):
(this.element.html(u.render(n.extend({},this.options,r))),this.element.find("input").
val(this.options.text||"").click(function(){n(this).select()}));this.element.find(
".fxs-copybutton-button").fxCopyButton({class_:e,selector:"span.sprite",getClipboardText:
function(){var n,i;if(t.options.getClipboardText)n=t.options.getClipboardText();
else if(i=t.element.find(".fxs-copybutton-value"),i.hasClass("fxs-copybutton-value-withoutdefaultlabel"))
throw"getClipboardText has not been provided.";else n=i.find("input").val();return n}
,complete:function(){t.element.find(".fxs-copybutton-copied").show().delay(1200).
fadeOut(600)},flashNotInstalled:function(){t.element.addClass("fxs-copybutton-no-flash");
this.hide()}});f._create.call(this)},_destroy:function(){this.element.removeClass(
"fxs-copybutton fxs-copybutton-no-flash").find(".fxs-copybutton-button").fxCopyButton(
"destroy").end().empty();this._super()}})}(jQuery,jQuery.Widget,this.fx.resources),
function(n,t,i,r,u){"use strict";var f=t.prototype,o=0,e=i&&i.getResources?i.getResources(
"fx"):null,s=e&&e.fxshell_previewbadge_previewButtonText?e.fxshell_previewbadge_previewButtonText:
"Preview",h="__fxshell-pivotlist";n.widgetReference("fxshell.fxshellPivotList",t,
{options:{panel:null,trackedit:!1,click:n.noop},_references:{values:!0},_id:null,
_ariaCompositeRole:"pivotlist",_ariaElementRole:"tab",_ariaAttribute:"aria-selected",
_attachedControl:"<img/>",_create:function(){if(this.options.panel===u)throw"options.panel must be defined";
this.element.addClass("fxshell-pivotlist");n(this.options.panel).addClass("fxshell-pivotlist-panel");
f._create.call(this);this._setupAria()},_destroy:function(){this.element.empty().
removeClass("fxshell-pivotlist");this.options&&this.options.panel&&n(this.options.
panel).removeAttr("aria-labelledby aria-hidden role");this._super()},_valueHtml:
function(n){return typeof n!="string"&&n.isPreview?r.htmlEncode(n.string)+"<span class='fxshell-pivotlist-preview'>"+
s+"<\/span>":f._valueHtml.call(this,n)},_clicked:function(n){this._trigger("click",
null,{value:n})},_set:function(t){var i=this._getSelectedIndex(t),r=n(this.options.
panel);i!==-1?r.attr({"aria-hidden":!1,"aria-labelledby":this._getUniqueItemId(i),
role:"tabpanel"}):r.attr("aria-hidden",!0).removeAttr("aria-labelledby");f._set.
call(this,t)},_getElementId:function(){return this.element[0].id||this._id||(this.
_id=h+o++)},_getUniqueItemId:function(n){return this._getElementId()+"-"+n},_setupAria:
function(){var t=this;this.element.find("li").each(function(i){n(this).attr("id",
t._getUniqueItemId(i))})},_attachControl:function(){var i=this,t;this.element.find(
"li").each(function(r){var u=i.options.values[r].image;u&&u.url&&(t=n(i._attachedControl).
attr("alt",u.altText||"").attr("src",u.url).prependTo(this),n(this).addClass("fxshell-pivotlist-withicon"),
u.urlHover&&n(this).mouseover(function(){t.attr("src",u.urlHover)}).mouseleave(function(
){t.attr("src",u.url)}))})}})}(jQuery,jQuery.fx.fxItemList,this.resources,this.fx.
utilities),function(n,t,i,r,u){"use strict";function h(t){var i={};return t&&n.each(
["columnWidths","pageNumber","selection","sort"],function(){var r=this,u=n.grep(
t,function(n){return n.Name==r})[0];u&&(i[r]=u.Value)}),i}function e(n){return n===
null||n===u}function c(i){if(i){var r=[],u=[];n.each(i,function(i,f){f.hasOwnProperty(
"id")?(n.grep(r,function(n){return n===f.id}).length>0&&t.Diagnostics.Log.writeEntry(
"shell.datagrid","Grid column definitions contain duplicate 'id' properties.",t.
Diagnostics.LogEntryLevel.information),r.push(f.id)):(n.grep(u,function(n){return n===
f.field}).length>0&&t.Diagnostics.Log.writeEntry("shell.datagrid","Grid column definitions contain duplicate 'field' properties. Add 'id' properties to disambiguate.",
t.Diagnostics.LogEntryLevel.information),u.push(f.field))})}}function l(n){var t=
n.getBoundingClientRect().width;return t-=parseFloat(jQuery.css(n,"paddingLeft"))||
0,t-=parseFloat(jQuery.css(n,"paddingRight"))||0,t-=parseFloat(jQuery.css(n,"borderLeftWidth"))||
0,t-(parseFloat(jQuery.css(n,"borderRightWidth"))||0)}var s=n.Widget.prototype,f=
i.prototype,o={options:n.extend({settingsOptions:{subViewName:"Grid0"},settings:
{columnWidths:{path:t.Configuration.ViewSettings.Path.perType},pageNumber:{path:
t.Configuration.ViewSettings.Path.perInstance},selection:{path:t.Configuration.ViewSettings.
Path.perInstance},sort:{path:t.Configuration.ViewSettings.Path.perType}},id:null},
f.options),_initializedGrid:!1,_disposed:!1,_columnResizeHandler:null,_columnSortHandler:
null,_rowSelectHandler:null,_destroy:function(){this._disposed||(this.element.off(
"fxgridcolumnresize",this._columnResizeHandler).off("fxgridcolumnsort",this._columnSortHandler),
this._rowSelectHandler&&this.element.off("fxgridrowselect",this._rowSelectHandler),
this._initializedGrid?f.destroy.call(this):this._super(),this._disposed=!0)},_isDisposed:
function(){return this._disposed},_create:function(){var t=this,i=[];n.each(this.
options.settings,function(n,t){t&&!e(t.path)&&i.push({path:t.path,name:n})});c(this.
options.columns);i.length?this._callSettingsManager("getViewSettings",i).then(function(
n){t._isDisposed()||t._renderGrid(n)},function(){t._isDisposed()||t._renderGrid(
)}):this._renderGrid()},_setOption:function(){return(this._initializedGrid?f:s).
_setOption.apply(this,arguments)},_triggerRowExpand:function(n){f._triggerRowExpand.
apply(this,arguments);this.options.id&&this._updateRowExpand(n.dataItem,n.expanded)}
,_renderGrid:function(t){t=t||[];t=h(t);var o=t.columnWidths,r=t.sort,s=t.pageNumber,
u=t.selection,i=this,c;o&&n.each(this.options.columns,function(t,i){var r=n.grep(
o,function(n){return n.hasOwnProperty("id")?n.id===i.id:e(i.id)&&n.field===i.field}
)[0];i.width=r?r.width:null});r&&n.each(this.options.columns,function(n,t){var i=
r.hasOwnProperty("id")?r.id===t.id:e(t.id)&&r.field===t.field;t.sorted=i?r.sorted:
null});s&&(this.options.pagerOptions=this.options.pagerOptions||{},this.options.
pagerOptions.currentPage=s);u&&this.options.rowMetadata&&n.each(this.options.rowMetadata,
function(){this.selected&&(this.selected=!1)});this.options.dataSourceRefreshStart=
this.refreshStartHandler=function(n,t){i._handleDataSourceRefreshStart(t.promise,
t.isClientInitiated)};this._initializedGrid=!0;f._create.apply(this);this.element.
on("fxgridcolumnresize",this._columnResizeHandler=function(){i._updateColumnWidths(
)}).on("fxgridcolumnsort",this._columnSortHandler=function(n,t){i._updateSort(t.
column,t.sort)}).find(".fx-grid-container-pager").on("fxpagerchange",function(n,
t){i._updatePageNumber(t.value)});if(this.options.id)this.element.on("fxgridrowselect",
this._rowSelectHandler=function(){i._updateSelection()});if(this.getDataSource().
refreshPromise)n(this.getDataSource()).on("refreshSuccess",c=function(){n(i.getDataSource(
)).off("refreshSuccess",c);i._isDisposed()||i._onInitialRender(u)});else this._onInitialRender(
u)},_handleDataSourceRefreshStart:function(i,r){var u=this.getDataSource(),e=u.dataSetName||
"grid"+this._gridId,f=this;i.then(function(i,r,o,s){f._isDisposed()||(!u.dataSetName&&
n.isArray(s)&&s.length>0&&t.Diagnostics.Log.writeEntry("shell.datagrid","Data sources sharing the same underlying data set should have a 'dataSetName' to avoid duplicate notification details",
t.Diagnostics.LogEntryLevel.information),t.UI.Notifications.DataLoad.handleDataLoadSuccess(
e,s),f._trigger("dataLoad",null,{noItems:o===0&&(!s||s.length===0)}))},function(
){f._isDisposed()||(t.UI.Notifications.DataLoad.handleDataLoadFailure(e,r),r&&u.
reset())})},_updateColumnWidths:function(){if(this._gridUsesSetting("columnWidths"))
{var t=[];n.each(this.element.find("thead th"),function(){var i=n(this).view().data,
r={width:l(this)};i.hasOwnProperty("id")?r.id=i.id:r.field=i.field;t.push(r)});this.
_updateSetting("columnWidths",t)}},_updateSort:function(n,t){if(this._gridUsesSetting(
"sort")){var i={sorted:t};n.hasOwnProperty("id")?i.id=n.id:i.field=n.field;this.
_updateSetting("sort",i)}},_updatePageNumber:function(n){this._gridUsesSetting("pageNumber")&&
this._updateSetting("pageNumber",n)},_updateSelection:function(){if(this._gridUsesSetting(
"selection")){var t=this.getSelectedRows(),i=this,r=n.map(t,function(n){return i.
_getItemId(n.dataItem)});this._updateSetting("selection",r)}},_updateRowExpand:function(
n,i){var r=this._getExpandedViewSettingName(n);r&&this._callSettingsManager("updateViewSetting",
t.Configuration.ViewSettings.Path.perInstance,r,i)},_getExpandedViewSettingName:
function(t){var r=this._getItemId(t),i;return r===null?null:(i=[],n.each(r,function(
n,t){i.push(n);i.push(t)}),"expanded-"+i.join("+"))},_getItemId:function(i){var r=
this.options.id,u={},f;if(!r)throw"Supply the 'id' option to save selection / row-expanded settings";
return n.each(n.isArray(r)?r:[r],function(){var n=i[this];if(e(n))return f=!0,!1;
u[this]=n}),f?(t.Diagnostics.Log.writeEntry("shell.datagrid","Identity property missing on data item for grid row.",
t.Diagnostics.LogEntryLevel.information),null):u},_onItemsArrayChange:function(i,
r){if(f._onItemsArrayChange.apply(this,arguments),!this._isExpandable()){this._onRowMetadataConfiguredAfterDataChange(
);return}var o=n.grep(i,function(t){return n.inArray(t,r)<0}),u=this,e=[];n.each(
o,function(n,t){var i=u._getExpandedViewSettingName(t);e.push({name:i,item:t})});
e.length>0&&this._callSettingsManager("getViewSettings",n.map(e,function(n){return{
path:t.Configuration.ViewSettings.Path.perInstance,name:n.name}})).then(function(
t){u._isDisposed()||(n.each(e,function(i,r){var f=n.grep(t,function(n){return r.
name===n.Name})[0],e;f&&(e=u._getRowMetadata(r.item),n.observable(e).setProperty(
"expanded",f.Value))}),u._onRowMetadataConfiguredAfterDataChange())})},_onRowMetadataConfiguredAfterDataChange:
function(){},_onInitialRender:function(t){var i,r,u=this;t&&n.each(this.getDataSource(
).items,function(r,u){var f=n.grep(t,function(n){for(var t in n)if(u[t]!==n[t])return!1;
return!0}).length>0;f&&(i=i||[],i.push(u))});i&&n.each(i,function(){r=u.getRowMetadata(
this);n.observable(r).setProperty("selected",!0);u._grid._trigger("rowSelect",null,
{selected:r})});this._trigger("initialRender")},_callSettingsManager:function(n)
{var i=[this.options.settingsOptions].concat([].slice.call(arguments,1));return t.
Configuration.ViewSettings[n].apply(t.Configuration.ViewSettings,i)},_gridUsesSetting:
function(n){return this.options.settings&&this.options.settings[n]},_updateSetting:
function(n,t){return this._callSettingsManager("updateViewSetting",this.options.
settings[n].path,n,t)}};n.each(f,function(t,i){t.charAt(0)==="_"||!n.isFunction(
i)||o.hasOwnProperty(t)||s.hasOwnProperty(t)||(o[t]=function(){if(!this._initializedGrid)
throw"Grid has not been initialized.";return i.apply(this,arguments)})});n.widgetReference(
"shell.shellDataGrid",i,o)}(jQuery,Shell,jQuery.fx.fxDataGrid,this.Impl)