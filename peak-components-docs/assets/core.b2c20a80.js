import{e as Q}from"./index.bec5aa92.js";import{a as dn}from"./markup.163deed3.js";import{a as pn}from"./css.5abb000b.js";import{a as gn}from"./clike.80af6837.js";import{a as mn}from"./javascript.338a1954.js";function vn(e,n){for(var r=0;r<n.length;r++){const a=n[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const u=Object.getOwnPropertyDescriptor(a,s);u&&Object.defineProperty(e,s,u.get?u:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var _e={exports:{}},hn=bn,yn=Object.prototype.hasOwnProperty;function bn(){for(var e={},n=0;n<arguments.length;n++){var r=arguments[n];for(var a in r)yn.call(r,a)&&(e[a]=r[a])}return e}var Be=Fe,fe=Fe.prototype;fe.space=null;fe.normal={};fe.property={};function Fe(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}var Pe=hn,xn=Be,wn=Sn;function Sn(e){for(var n=e.length,r=[],a=[],s=-1,u,o;++s<n;)u=e[s],r.push(u.property),a.push(u.normal),o=u.space;return new xn(Pe.apply(null,r),Pe.apply(null,a),o)}var de=Cn;function Cn(e){return e.toLowerCase()}var We=Ge,U=Ge.prototype;U.space=null;U.attribute=null;U.property=null;U.boolean=!1;U.booleanish=!1;U.overloadedBoolean=!1;U.number=!1;U.commaSeparated=!1;U.spaceSeparated=!1;U.commaOrSpaceSeparated=!1;U.mustUseProperty=!1;U.defined=!1;function Ge(e,n){this.property=e,this.attribute=n}var H={},An=0;H.boolean=K();H.booleanish=K();H.overloadedBoolean=K();H.number=K();H.spaceSeparated=K();H.commaSeparated=K();H.commaOrSpaceSeparated=K();function K(){return Math.pow(2,++An)}var Ve=We,Oe=H,Ke=pe;pe.prototype=new Ve;pe.prototype.defined=!0;var Ye=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Pn=Ye.length;function pe(e,n,r,a){var s=-1,u;for(ke(this,"space",a),Ve.call(this,e,n);++s<Pn;)u=Ye[s],ke(this,u,(r&Oe[u])===Oe[u])}function ke(e,n,r){r&&(e[n]=r)}var $e=de,On=Be,kn=Ke,re=$n;function $n(e){var n=e.space,r=e.mustUseProperty||[],a=e.attributes||{},s=e.properties,u=e.transform,o={},v={},p,t;for(p in s)t=new kn(p,u(a,p),s[p],n),r.indexOf(p)!==-1&&(t.mustUseProperty=!0),o[p]=t,v[$e(p)]=p,v[$e(t.attribute)]=p;return new On(o,v,n)}var En=re,Tn=En({space:"xlink",transform:Ln,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Ln(e,n){return"xlink:"+n.slice(5).toLowerCase()}var Nn=re,Mn=Nn({space:"xml",transform:In,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function In(e,n){return"xml:"+n.slice(3).toLowerCase()}var jn=Dn;function Dn(e,n){return n in e?e[n]:n}var Un=jn,Xe=Rn;function Rn(e,n){return Un(e,n.toLowerCase())}var qn=re,zn=Xe,Hn=qn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:zn,properties:{xmlns:null,xmlnsXLink:null}}),ge=H,_n=re,L=ge.booleanish,D=ge.number,V=ge.spaceSeparated,Bn=_n({transform:Fn,properties:{ariaActiveDescendant:null,ariaAtomic:L,ariaAutoComplete:null,ariaBusy:L,ariaChecked:L,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:V,ariaCurrent:null,ariaDescribedBy:V,ariaDetails:null,ariaDisabled:L,ariaDropEffect:V,ariaErrorMessage:null,ariaExpanded:L,ariaFlowTo:V,ariaGrabbed:L,ariaHasPopup:null,ariaHidden:L,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:V,ariaLevel:D,ariaLive:null,ariaModal:L,ariaMultiLine:L,ariaMultiSelectable:L,ariaOrientation:null,ariaOwns:V,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:L,ariaReadOnly:L,ariaRelevant:null,ariaRequired:L,ariaRoleDescription:V,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:L,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null}});function Fn(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var Z=H,Wn=re,Gn=Xe,g=Z.boolean,Vn=Z.overloadedBoolean,ee=Z.booleanish,x=Z.number,$=Z.spaceSeparated,te=Z.commaSeparated,Kn=Wn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Gn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:te,acceptCharset:$,accessKey:$,action:null,allow:null,allowFullScreen:g,allowPaymentRequest:g,allowUserMedia:g,alt:null,as:null,async:g,autoCapitalize:null,autoComplete:$,autoFocus:g,autoPlay:g,capture:g,charSet:null,checked:g,cite:null,className:$,cols:x,colSpan:null,content:null,contentEditable:ee,controls:g,controlsList:$,coords:x|te,crossOrigin:null,data:null,dateTime:null,decoding:null,default:g,defer:g,dir:null,dirName:null,disabled:g,download:Vn,draggable:ee,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:g,formTarget:null,headers:$,height:x,hidden:g,high:x,href:null,hrefLang:null,htmlFor:$,httpEquiv:$,id:null,imageSizes:null,imageSrcSet:te,inputMode:null,integrity:null,is:null,isMap:g,itemId:null,itemProp:$,itemRef:$,itemScope:g,itemType:$,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:g,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:g,muted:g,name:null,nonce:null,noModule:g,noValidate:g,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:g,optimum:x,pattern:null,ping:$,placeholder:null,playsInline:g,poster:null,preload:null,readOnly:g,referrerPolicy:null,rel:$,required:g,reversed:g,rows:x,rowSpan:x,sandbox:$,scope:null,scoped:g,seamless:g,selected:g,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:ee,src:null,srcDoc:null,srcLang:null,srcSet:te,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:g,useMap:null,value:ee,width:x,wrap:null,align:null,aLink:null,archive:$,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:g,declare:g,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:g,noHref:g,noShade:g,noWrap:g,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:ee,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:g,disableRemotePlayback:g,prefix:null,property:null,results:x,security:null,unselectable:null}}),Yn=wn,Xn=Tn,Jn=Mn,Qn=Hn,Zn=Bn,er=Kn,nr=Yn([Jn,Xn,Qn,Zn,er]),rr=de,ar=Ke,tr=We,me="data",lr=sr,or=/^data[-\w.:]+$/i,Je=/-[a-z]/g,ir=/[A-Z]/g;function sr(e,n){var r=rr(n),a=n,s=tr;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===me&&or.test(n)&&(n.charAt(4)==="-"?a=cr(n):n=ur(n),s=ar),new s(a,n))}function cr(e){var n=e.slice(5).replace(Je,dr);return me+n.charAt(0).toUpperCase()+n.slice(1)}function ur(e){var n=e.slice(4);return Je.test(n)?e:(n=n.replace(ir,fr),n.charAt(0)!=="-"&&(n="-"+n),me+n)}function fr(e){return"-"+e.toLowerCase()}function dr(e){return e.charAt(1).toUpperCase()}var pr=gr,Ee=/[#.]/g;function gr(e,n){for(var r=e||"",a=n||"div",s={},u=0,o,v,p;u<r.length;)Ee.lastIndex=u,p=Ee.exec(r),o=r.slice(u,p?p.index:r.length),o&&(v?v==="#"?s.id=o:s.className?s.className.push(o):s.className=[o]:a=o,u+=o.length),p&&(v=p[0],u++);return{type:"element",tagName:a,properties:s,children:[]}}var ve={};ve.parse=hr;ve.stringify=yr;var Te="",mr=" ",vr=/[ \t\n\r\f]+/g;function hr(e){var n=String(e||Te).trim();return n===Te?[]:n.split(vr)}function yr(e){return e.join(mr).trim()}var he={};he.parse=br;he.stringify=xr;var ce=",",Le=" ",ne="";function br(e){for(var n=[],r=String(e||ne),a=r.indexOf(ce),s=0,u=!1,o;!u;)a===-1&&(a=r.length,u=!0),o=r.slice(s,a).trim(),(o||!u)&&n.push(o),s=a+1,a=r.indexOf(ce,s);return n}function xr(e,n){var r=n||{},a=r.padLeft===!1?ne:Le,s=r.padRight?Le:ne;return e[e.length-1]===ne&&(e=e.concat(ne)),e.join(s+ce+a).trim()}var wr=lr,Ne=de,Sr=pr,Me=ve.parse,Ie=he.parse,Cr=Pr,Ar={}.hasOwnProperty;function Pr(e,n,r){var a=r?Tr(r):null;return s;function s(o,v){var p=Sr(o,n),t=Array.prototype.slice.call(arguments,2),i=p.tagName.toLowerCase(),l;if(p.tagName=a&&Ar.call(a,i)?a[i]:i,v&&Or(v,p)&&(t.unshift(v),v=null),v)for(l in v)u(p.properties,l,v[l]);return Qe(p.children,t),p.tagName==="template"&&(p.content={type:"root",children:p.children},p.children=[]),p}function u(o,v,p){var t,i,l;p==null||p!==p||(t=wr(e,v),i=t.property,l=p,typeof l=="string"&&(t.spaceSeparated?l=Me(l):t.commaSeparated?l=Ie(l):t.commaOrSpaceSeparated&&(l=Me(Ie(l).join(" ")))),i==="style"&&typeof p!="string"&&(l=Er(l)),i==="className"&&o.className&&(l=o.className.concat(l)),o[i]=$r(t,i,l))}}function Or(e,n){return typeof e=="string"||"length"in e||kr(n.tagName,e)}function kr(e,n){var r=n.type;return e==="input"||!r||typeof r!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in n)}function Qe(e,n){var r,a;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(r=-1,a=n.length;++r<a;)Qe(e,n[r]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function $r(e,n,r){var a,s,u;if(typeof r!="object"||!("length"in r))return je(e,n,r);for(s=r.length,a=-1,u=[];++a<s;)u[a]=je(e,n,r[a]);return u}function je(e,n,r){var a=r;return e.number||e.positiveNumber?!isNaN(a)&&a!==""&&(a=Number(a)):(e.boolean||e.overloadedBoolean)&&typeof a=="string"&&(a===""||Ne(r)===Ne(n))&&(a=!0),a}function Er(e){var n=[],r;for(r in e)n.push([r,e[r]].join(": "));return n.join("; ")}function Tr(e){for(var n=e.length,r=-1,a={},s;++r<n;)s=e[r],a[s.toLowerCase()]=s;return a}var Lr=nr,Nr=Cr,Ze=Nr(Lr,"div");Ze.displayName="html";var Mr=Ze;(function(e){e.exports=Mr})(_e);const Ir="\xC6",jr="&",Dr="\xC1",Ur="\xC2",Rr="\xC0",qr="\xC5",zr="\xC3",Hr="\xC4",_r="\xA9",Br="\xC7",Fr="\xD0",Wr="\xC9",Gr="\xCA",Vr="\xC8",Kr="\xCB",Yr=">",Xr="\xCD",Jr="\xCE",Qr="\xCC",Zr="\xCF",ea="<",na="\xD1",ra="\xD3",aa="\xD4",ta="\xD2",la="\xD8",oa="\xD5",ia="\xD6",sa='"',ca="\xAE",ua="\xDE",fa="\xDA",da="\xDB",pa="\xD9",ga="\xDC",ma="\xDD",va="\xE1",ha="\xE2",ya="\xB4",ba="\xE6",xa="\xE0",wa="&",Sa="\xE5",Ca="\xE3",Aa="\xE4",Pa="\xA6",Oa="\xE7",ka="\xB8",$a="\xA2",Ea="\xA9",Ta="\xA4",La="\xB0",Na="\xF7",Ma="\xE9",Ia="\xEA",ja="\xE8",Da="\xF0",Ua="\xEB",Ra="\xBD",qa="\xBC",za="\xBE",Ha=">",_a="\xED",Ba="\xEE",Fa="\xA1",Wa="\xEC",Ga="\xBF",Va="\xEF",Ka="\xAB",Ya="<",Xa="\xAF",Ja="\xB5",Qa="\xB7",Za="\xA0",et="\xAC",nt="\xF1",rt="\xF3",at="\xF4",tt="\xF2",lt="\xAA",ot="\xBA",it="\xF8",st="\xF5",ct="\xF6",ut="\xB6",ft="\xB1",dt="\xA3",pt='"',gt="\xBB",mt="\xAE",vt="\xA7",ht="\xAD",yt="\xB9",bt="\xB2",xt="\xB3",wt="\xDF",St="\xFE",Ct="\xD7",At="\xFA",Pt="\xFB",Ot="\xF9",kt="\xA8",$t="\xFC",Et="\xFD",Tt="\xA5",Lt="\xFF",Nt={AElig:Ir,AMP:jr,Aacute:Dr,Acirc:Ur,Agrave:Rr,Aring:qr,Atilde:zr,Auml:Hr,COPY:_r,Ccedil:Br,ETH:Fr,Eacute:Wr,Ecirc:Gr,Egrave:Vr,Euml:Kr,GT:Yr,Iacute:Xr,Icirc:Jr,Igrave:Qr,Iuml:Zr,LT:ea,Ntilde:na,Oacute:ra,Ocirc:aa,Ograve:ta,Oslash:la,Otilde:oa,Ouml:ia,QUOT:sa,REG:ca,THORN:ua,Uacute:fa,Ucirc:da,Ugrave:pa,Uuml:ga,Yacute:ma,aacute:va,acirc:ha,acute:ya,aelig:ba,agrave:xa,amp:wa,aring:Sa,atilde:Ca,auml:Aa,brvbar:Pa,ccedil:Oa,cedil:ka,cent:$a,copy:Ea,curren:Ta,deg:La,divide:Na,eacute:Ma,ecirc:Ia,egrave:ja,eth:Da,euml:Ua,frac12:Ra,frac14:qa,frac34:za,gt:Ha,iacute:_a,icirc:Ba,iexcl:Fa,igrave:Wa,iquest:Ga,iuml:Va,laquo:Ka,lt:Ya,macr:Xa,micro:Ja,middot:Qa,nbsp:Za,not:et,ntilde:nt,oacute:rt,ocirc:at,ograve:tt,ordf:lt,ordm:ot,oslash:it,otilde:st,ouml:ct,para:ut,plusmn:ft,pound:dt,quot:pt,raquo:gt,reg:mt,sect:vt,shy:ht,sup1:yt,sup2:bt,sup3:xt,szlig:wt,thorn:St,times:Ct,uacute:At,ucirc:Pt,ugrave:Ot,uml:kt,uuml:$t,yacute:Et,yen:Tt,yuml:Lt},Mt={0:"\uFFFD",128:"\u20AC",130:"\u201A",131:"\u0192",132:"\u201E",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02C6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017D",145:"\u2018",146:"\u2019",147:"\u201C",148:"\u201D",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02DC",153:"\u2122",154:"\u0161",155:"\u203A",156:"\u0153",158:"\u017E",159:"\u0178"};var en=It;function It(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var jt=Dt;function Dt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Ut=Rt;function Rt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var qt=Ut,zt=en,Ht=_t;function _t(e){return qt(e)||zt(e)}var le,Bt=59,Ft=Wt;function Wt(e){var n="&"+e+";",r;return le=le||document.createElement("i"),le.innerHTML=n,r=le.textContent,r.charCodeAt(r.length-1)===Bt&&e!=="semi"||r===n?!1:r}var De=Nt,Ue=Mt,Gt=en,Vt=jt,nn=Ht,Kt=Ft,Yt=sl,Xt={}.hasOwnProperty,X=String.fromCharCode,Jt=Function.prototype,Re={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Qt=9,qe=10,Zt=12,el=32,ze=38,nl=59,rl=60,al=61,tl=35,ll=88,ol=120,il=65533,J="named",ye="hexadecimal",be="decimal",xe={};xe[ye]=16;xe[be]=10;var oe={};oe[J]=nn;oe[be]=Gt;oe[ye]=Vt;var rn=1,an=2,tn=3,ln=4,on=5,ue=6,sn=7,W={};W[rn]="Named character references must be terminated by a semicolon";W[an]="Numeric character references must be terminated by a semicolon";W[tn]="Named character references cannot be empty";W[ln]="Numeric character references cannot be empty";W[on]="Named character references must be known";W[ue]="Numeric character references cannot be disallowed";W[sn]="Numeric character references cannot be outside the permissible Unicode range";function sl(e,n){var r={},a,s;n||(n={});for(s in Re)a=n[s],r[s]=a==null?Re[s]:a;return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),cl(e,r)}function cl(e,n){var r=n.additional,a=n.nonTerminated,s=n.text,u=n.reference,o=n.warning,v=n.textContext,p=n.referenceContext,t=n.warningContext,i=n.position,l=n.indent||[],c=e.length,f=0,m=-1,h=i.column||1,d=i.line||1,b="",N=[],y,Y,q,k,j,P,C,w,M,_,E,R,B,I,G,S,F,T,A;for(typeof r=="string"&&(r=r.charCodeAt(0)),S=z(),w=o?ie:Jt,f--,c++;++f<c;)if(j===qe&&(h=l[m]||1),j=e.charCodeAt(f),j===ze){if(C=e.charCodeAt(f+1),C===Qt||C===qe||C===Zt||C===el||C===ze||C===rl||C!==C||r&&C===r){b+=X(j),h++;continue}for(B=f+1,R=B,A=B,C===tl?(A=++R,C=e.charCodeAt(A),C===ll||C===ol?(I=ye,A=++R):I=be):I=J,y="",E="",k="",G=oe[I],A--;++A<c&&(C=e.charCodeAt(A),!!G(C));)k+=X(C),I===J&&Xt.call(De,k)&&(y=k,E=De[k]);q=e.charCodeAt(A)===nl,q&&(A++,Y=I===J?Kt(k):!1,Y&&(y=k,E=Y)),T=1+A-B,!q&&!a||(k?I===J?(q&&!E?w(on,1):(y!==k&&(A=R+y.length,T=1+A-R,q=!1),q||(M=y?rn:tn,n.attribute?(C=e.charCodeAt(A),C===al?(w(M,T),E=null):nn(C)?E=null:w(M,T)):w(M,T))),P=E):(q||w(an,T),P=parseInt(k,xe[I]),ul(P)?(w(sn,T),P=X(il)):P in Ue?(w(ue,T),P=Ue[P]):(_="",fl(P)&&w(ue,T),P>65535&&(P-=65536,_+=X(P>>>10|55296),P=56320|P&1023),P=_+X(P))):I!==J&&w(ln,T)),P?(Se(),S=z(),f=A-1,h+=A-B+1,N.push(P),F=z(),F.offset++,u&&u.call(p,P,{start:S,end:F},e.slice(B-1,A)),S=F):(k=e.slice(B-1,A),b+=k,h+=k.length,f=A-1)}else j===10&&(d++,m++,h=0),j===j?(b+=X(j),h++):Se();return N.join("");function z(){return{line:d,column:h,offset:f+(i.offset||0)}}function ie(Ce,Ae){var se=z();se.column+=Ae,se.offset+=Ae,o.call(t,W[Ce],se,Ce)}function Se(){b&&(N.push(b),s&&s.call(v,b,{start:S,end:z()}),b="")}}function ul(e){return e>=55296&&e<=57343||e>1114111}function fl(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var cn={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},r=function(a){var s=/\blang(?:uage)?-([\w-]+)\b/i,u=0,o={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(t){return t instanceof v?new v(t.type,o.util.encode(t.content),t.alias):Array.isArray(t)?t.map(o.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++u}),t.__id},clone:function t(i,l){var c,f,m=o.util.type(i);switch(l=l||{},m){case"Object":if(f=o.util.objId(i),l[f])return l[f];c={},l[f]=c;for(var h in i)i.hasOwnProperty(h)&&(c[h]=t(i[h],l));return c;case"Array":return f=o.util.objId(i),l[f]?l[f]:(c=[],l[f]=c,i.forEach(function(d,b){c[b]=t(d,l)}),c);default:return i}}},languages:{extend:function(t,i){var l=o.util.clone(o.languages[t]);for(var c in i)l[c]=i[c];return l},insertBefore:function(t,i,l,c){c=c||o.languages;var f=c[t],m={};for(var h in f)if(f.hasOwnProperty(h)){if(h==i)for(var d in l)l.hasOwnProperty(d)&&(m[d]=l[d]);l.hasOwnProperty(h)||(m[h]=f[h])}var b=c[t];return c[t]=m,o.languages.DFS(o.languages,function(N,y){y===b&&N!=t&&(this[N]=m)}),m},DFS:function t(i,l,c,f){f=f||{};var m=o.util.objId;for(var h in i)if(i.hasOwnProperty(h)){l.call(i,h,i[h],c||h);var d=i[h],b=o.util.type(d);b==="Object"&&!f[m(d)]?(f[m(d)]=!0,t(d,l,null,f)):b==="Array"&&!f[m(d)]&&(f[m(d)]=!0,t(d,l,h,f))}}},plugins:{},highlightAll:function(t,i){o.highlightAllUnder(document,t,i)},highlightAllUnder:function(t,i,l){var c={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",c);for(var f=t.querySelectorAll(c.selector),m=0,h;h=f[m++];)o.highlightElement(h,i===!0,c.callback)},highlightElement:function(t,i,l){for(var c="none",f,m=t;m&&!s.test(m.className);)m=m.parentNode;m&&(c=(m.className.match(s)||[,"none"])[1].toLowerCase(),f=o.languages[c]),t.className=t.className.replace(s,"").replace(/\s+/g," ")+" language-"+c,t.parentNode&&(m=t.parentNode,/pre/i.test(m.nodeName)&&(m.className=m.className.replace(s,"").replace(/\s+/g," ")+" language-"+c));var h=t.textContent,d={element:t,language:c,grammar:f,code:h},b=function(y){d.highlightedCode=y,o.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,o.hooks.run("after-highlight",d),o.hooks.run("complete",d),l&&l.call(d.element)};if(o.hooks.run("before-sanity-check",d),!d.code){o.hooks.run("complete",d);return}if(o.hooks.run("before-highlight",d),!d.grammar){b(o.util.encode(d.code));return}if(i&&a.Worker){var N=new Worker(o.filename);N.onmessage=function(y){b(y.data)},N.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else b(o.highlight(d.code,d.grammar,d.language))},highlight:function(t,i,l){var c={code:t,grammar:i,language:l};return o.hooks.run("before-tokenize",c),c.tokens=o.tokenize(c.code,c.grammar),o.hooks.run("after-tokenize",c),v.stringify(o.util.encode(c.tokens),c.language)},matchGrammar:function(t,i,l,c,f,m,h){for(var d in l)if(!(!l.hasOwnProperty(d)||!l[d])){if(d==h)return;var b=l[d];b=o.util.type(b)==="Array"?b:[b];for(var N=0;N<b.length;++N){var y=b[N],Y=y.inside,q=!!y.lookbehind,k=!!y.greedy,j=0,P=y.alias;if(k&&!y.pattern.global){var C=y.pattern.toString().match(/[imuy]*$/)[0];y.pattern=RegExp(y.pattern.source,C+"g")}y=y.pattern||y;for(var w=c,M=f;w<i.length;M+=i[w].length,++w){var _=i[w];if(i.length>t.length)return;if(!(_ instanceof v)){if(k&&w!=i.length-1){y.lastIndex=M;var S=y.exec(t);if(!S)break;for(var G=S.index+(q?S[1].length:0),F=S.index+S[0].length,E=w,R=M,B=i.length;E<B&&(R<F||!i[E].type&&!i[E-1].greedy);++E)R+=i[E].length,G>=R&&(++w,M=R);if(i[w]instanceof v)continue;I=E-w,_=t.slice(M,R),S.index-=M}else{y.lastIndex=0;var S=y.exec(_),I=1}if(!S){if(m)break;continue}q&&(j=S[1]?S[1].length:0);var G=S.index+j,S=S[0].slice(j),F=G+S.length,T=_.slice(0,G),A=_.slice(F),z=[w,I];T&&(++w,M+=T.length,z.push(T));var ie=new v(d,Y?o.tokenize(S,Y):S,P,S,k);if(z.push(ie),A&&z.push(A),Array.prototype.splice.apply(i,z),I!=1&&o.matchGrammar(t,i,l,w,M,!0,d),m)break}}}}},tokenize:function(t,i){var l=[t],c=i.rest;if(c){for(var f in c)i[f]=c[f];delete i.rest}return o.matchGrammar(t,l,i,0,0,!1),l},hooks:{all:{},add:function(t,i){var l=o.hooks.all;l[t]=l[t]||[],l[t].push(i)},run:function(t,i){var l=o.hooks.all[t];if(!(!l||!l.length))for(var c=0,f;f=l[c++];)f(i)}},Token:v};a.Prism=o;function v(t,i,l,c,f){this.type=t,this.content=i,this.alias=l,this.length=(c||"").length|0,this.greedy=!!f}if(v.stringify=function(t,i){if(typeof t=="string")return t;if(Array.isArray(t))return t.map(function(m){return v.stringify(m,i)}).join("");var l={type:t.type,content:v.stringify(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i};if(t.alias){var c=Array.isArray(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(l.classes,c)}o.hooks.run("wrap",l);var f=Object.keys(l.attributes).map(function(m){return m+'="'+(l.attributes[m]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(f?" "+f:"")+">"+l.content+"</"+l.tag+">"},!a.document)return a.addEventListener&&(o.disableWorkerMessageHandler||a.addEventListener("message",function(t){var i=JSON.parse(t.data),l=i.language,c=i.code,f=i.immediateClose;a.postMessage(o.highlight(c,o.languages[l],l)),f&&a.close()},!1)),o;var p=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return p&&(o.filename=p.src,!o.manual&&!p.hasAttribute("data-manual")&&(document.readyState!=="loading"?window.requestAnimationFrame?window.requestAnimationFrame(o.highlightAll):window.setTimeout(o.highlightAll,16):document.addEventListener("DOMContentLoaded",o.highlightAll))),o}(n);e.exports&&(e.exports=r),typeof Q<"u"&&(Q.Prism=r)})(cn);var dl=$l(),pl=typeof window>"u"?typeof self>"u"?{}:self:window;pl.Prism={manual:!0,disableWorkerMessageHandler:!0};var gl=_e.exports,ml=Yt,un=cn.exports,vl=dn,hl=pn,yl=gn,bl=mn;dl();var we={}.hasOwnProperty;function fn(){}fn.prototype=un;var O=new fn,He=O;O.highlight=wl;O.register=ae;O.alias=xl;O.registered=Sl;O.listLanguages=Cl;ae(vl);ae(hl);ae(yl);ae(bl);O.util.encode=Ol;O.Token.stringify=Al;function ae(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");O.languages[e.displayName]===void 0&&e(O)}function xl(e,n){var r=O.languages,a=e,s,u,o,v;n&&(a={},a[e]=n);for(s in a)for(u=a[s],u=typeof u=="string"?[u]:u,o=u.length,v=-1;++v<o;)r[u[v]]=r[s]}function wl(e,n){var r=un.highlight,a;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(O.util.type(n)==="Object")a=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(we.call(O.languages,n))a=O.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return r.call(this,e,a,n)}function Sl(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return we.call(O.languages,e)}function Cl(){var e=O.languages,n=[],r;for(r in e)we.call(e,r)&&typeof e[r]=="object"&&n.push(r);return n}function Al(e,n,r){var a;return typeof e=="string"?{type:"text",value:e}:O.util.type(e)==="Array"?Pl(e,n):(a={type:e.type,content:O.Token.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r},e.alias&&(a.classes=a.classes.concat(e.alias)),O.hooks.run("wrap",a),gl(a.tag+"."+a.classes.join("."),kl(a.attributes),a.content))}function Pl(e,n){for(var r=[],a=e.length,s=-1,u;++s<a;)u=e[s],u!==""&&u!==null&&u!==void 0&&r.push(u);for(s=-1,a=r.length;++s<a;)u=r[s],r[s]=O.Token.stringify(u,n,r);return r}function Ol(e){return e}function kl(e){var n;for(n in e)e[n]=ml(e[n]);return e}function $l(){var e="Prism"in Q,n=e?Q.Prism:void 0;return r;function r(){e?Q.Prism=n:delete Q.Prism,e=void 0,n=void 0}}const Il=vn({__proto__:null,default:He},[He]);export{Il as c};
