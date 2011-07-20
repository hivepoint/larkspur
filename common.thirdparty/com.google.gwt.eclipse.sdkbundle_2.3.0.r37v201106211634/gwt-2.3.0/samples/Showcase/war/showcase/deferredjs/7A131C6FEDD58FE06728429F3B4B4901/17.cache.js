function iZ(){}
function dZ(){}
function gqb(){}
function c$b(){}
function lqb(b){Jbb(b.c,cqb(b.b))}
function bZb(b,c){return iZb(b,c,b.b.c)}
function hqb(b){this.d=b;this.c=cdb(this.d.b)}
function ZZb(b,c){_Zb.call(this,b,false);this.c=c}
function $Zb(b,c){_Zb.call(this,b,false);XZb(this,c)}
function YZb(b){_Zb.call(this,'GWT',true);XZb(this,b)}
function hZ(){var b;while(eZ){b=eZ;eZ=eZ.c;!eZ&&(fZ=null);lqb(b.b)}}
function xZb(){this.b=new nlc;this.g=new nlc;gZb(this,false,NPb((UZb(),TZb)))}
function iZb(b,c,d){if(d<0||d>b.b.c){throw new sfc}b.p&&(c.N[oxc]=2,undefined);aZb(b,d,c.N);elc(b.b,d,c);return c}
function XZb(b,c){b.e=c;!!b.d&&wZb(b.d,b);if(c){c.N.tabIndex=-1;b.N.setAttribute(Eyc,vtc)}else{b.N.setAttribute(Eyc,Uuc)}}
function kZ(){gZ=new iZ;ci((ai(),_h),17);!!$stats&&$stats(Ji(tyc,drc,-1,-1));gZ.Dd();!!$stats&&$stats(Ji(tyc,iwc,-1,-1))}
function d$b(){var b;this.N=$doc.createElement(Muc);this.N[Wqc]='gwt-MenuItemSeparator';b=$doc.createElement(Zqc);this.N.appendChild(b);b[Wqc]='menuSeparatorInner'}
function Zcb(b){var c,d;c=LC(b.b._c(uyc),49);if(c==null){d=DC(AV,{17:1,49:1},1,[vyc,'R\xE9tablir','Couper','Copier','Coller']);b.b.bd(uyc,d);return d}else{return c}}
function $cb(b){var c,d;c=LC(b.b._c(wyc),49);if(c==null){d=DC(AV,{17:1,49:1},1,['Nouveau','Ouvrir',xyc,'R\xE9cent','Quitter']);b.b.bd(wyc,d);return d}else{return c}}
function bdb(b){var c,d;c=LC(b.b._c(Ayc),49);if(c==null){d=DC(AV,{17:1,49:1},1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);b.b.bd(Ayc,d);return d}else{return c}}
function adb(b){var c,d;c=LC(b.b._c(zyc),49);if(c==null){d=DC(AV,{17:1,49:1},1,['T\xE9l\xE9charger','Exemples',htc,'GWiTtez avec le programme']);b.b.bd(zyc,d);return d}else{return c}}
function _cb(b){var c,d;c=LC(b.b._c(yyc),49);if(c==null){d=DC(AV,{17:1,49:1},1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);b.b.bd(yyc,d);return d}else{return c}}
function cdb(b){var c,d;c=LC(b.b._c(Byc),49);if(c==null){d=DC(AV,{17:1,49:1},1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);b.b.bd(Byc,d);return d}else{return c}}
function cqb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new hqb(b);o=new xZb;o.c=true;o.N.style[qsc]=Cyc;o.f=true;r=new yZb(true);q=_cb(b.b);for(n=0;n<q.length;++n){_Yb(r,new ZZb(q[n],p))}e=new yZb(true);e.f=true;_Yb(o,new $Zb('Fichier',e));f=$cb(b.b);for(n=0;n<f.length;++n){if(n==3){bZb(e,new d$b);_Yb(e,new $Zb(f[3],r));bZb(e,new d$b)}else{_Yb(e,new ZZb(f[n],p))}}c=new yZb(true);_Yb(o,new $Zb('\xC9dition',c));d=Zcb(b.b);for(n=0;n<d.length;++n){_Yb(c,new ZZb(d[n],p))}g=new yZb(true);_Yb(o,new YZb(g));i=adb(b.b);for(n=0;n<i.length;++n){_Yb(g,new ZZb(i[n],p))}j=new yZb(true);bZb(o,new d$b);_Yb(o,new $Zb('Aide',j));k=bdb(b.b);for(n=0;n<k.length;++n){_Yb(j,new ZZb(k[n],p))}e7b(o.N,_qc,Dyc);vZb(o,Dyc);return o}
var Eyc='aria-haspopup',Dyc='cwMenuBar',uyc='cwMenuBarEditOptions',wyc='cwMenuBarFileOptions',yyc='cwMenuBarFileRecents',zyc='cwMenuBarGWTOptions',Ayc='cwMenuBarHelpOptions',Byc='cwMenuBarPrompts',tyc='runCallbacks17';_=iZ.prototype=dZ.prototype=new Z;_.gC=function jZ(){return KG};_.Dd=function nZ(){hZ()};_.cM={};_=hqb.prototype=gqb.prototype=new Z;_._b=function iqb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function jqb(){return RL};_.cM={113:1};_.b=0;_.d=null;_=xZb.prototype=$Yb.prototype;_=$Zb.prototype=ZZb.prototype=YZb.prototype=VZb.prototype;_=d$b.prototype=c$b.prototype=new Ed;_.gC=function e$b(){return WQ};_.cM={69:1,121:1};var KG=Wec(Lvc,'AsyncLoader17'),RL=Wec(Svc,'CwMenuBar$1'),WQ=Wec(uvc,'MenuItemSeparator');Uqc(kZ)();