function xZ(){}
function sZ(){}
function vqb(){}
function q$b(){}
function Aqb(b){Ybb(b.c,rqb(b.b))}
function pZb(b,c){return wZb(b,c,b.b.c)}
function wqb(b){this.d=b;this.c=rdb(this.d.b)}
function l$b(b,c){n$b.call(this,b,false);this.c=c}
function m$b(b,c){n$b.call(this,b,false);j$b(this,c)}
function k$b(b){n$b.call(this,'GWT',true);j$b(this,b)}
function wZ(){var b;while(tZ){b=tZ;tZ=tZ.c;!tZ&&(uZ=null);Aqb(b.b)}}
function LZb(){this.b=new Slc;this.g=new Slc;uZb(this,false,fQb((g$b(),f$b)))}
function wZb(b,c,d){if(d<0||d>b.b.c){throw new Xfc}b.p&&(c.N[Wxc]=2,undefined);oZb(b,d,c.N);Jlc(b.b,d,c);return c}
function j$b(b,c){b.e=c;!!b.d&&KZb(b.d,b);if(c){c.N.tabIndex=-1;b.N.setAttribute(kzc,Ztc)}else{b.N.setAttribute(kzc,Avc)}}
function zZ(){vZ=new xZ;di((bi(),ai),17);!!$stats&&$stats(Ki(_yc,Irc,-1,-1));vZ.Dd();!!$stats&&$stats(Ki(_yc,Qwc,-1,-1))}
function r$b(){var b;this.N=$doc.createElement(svc);this.N[zrc]='gwt-MenuItemSeparator';b=$doc.createElement(Crc);this.N.appendChild(b);b[zrc]='menuSeparatorInner'}
function mdb(b){var c,d;c=ZC(b.b._c(azc),49);if(c==null){d=RC(PV,{17:1,49:1},1,[bzc,'R\xE9tablir','Couper','Copier','Coller']);b.b.bd(azc,d);return d}else{return c}}
function ndb(b){var c,d;c=ZC(b.b._c(czc),49);if(c==null){d=RC(PV,{17:1,49:1},1,['Nouveau','Ouvrir',dzc,'R\xE9cent','Quitter']);b.b.bd(czc,d);return d}else{return c}}
function qdb(b){var c,d;c=ZC(b.b._c(gzc),49);if(c==null){d=RC(PV,{17:1,49:1},1,['Contenu','Biscuit de fortune','\xC0 propos de GWT']);b.b.bd(gzc,d);return d}else{return c}}
function pdb(b){var c,d;c=ZC(b.b._c(fzc),49);if(c==null){d=RC(PV,{17:1,49:1},1,['T\xE9l\xE9charger','Exemples',Ltc,'GWiTtez avec le programme']);b.b.bd(fzc,d);return d}else{return c}}
function odb(b){var c,d;c=ZC(b.b._c(ezc),49);if(c==null){d=RC(PV,{17:1,49:1},1,['P\xEAcher dans le d\xE9sert.txt','Comment apprivoiser un perroquet sauvage',"L'\xE9levage des \xE9meus pour les nuls"]);b.b.bd(ezc,d);return d}else{return c}}
function rdb(b){var c,d;c=ZC(b.b._c(hzc),49);if(c==null){d=RC(PV,{17:1,49:1},1,["Merci d'avoir s\xE9lectionn\xE9 une option de menu",'Une s\xE9lection vraiment pertinente',"N'avez-vous rien de mieux \xE0 faire que de s\xE9lectionner des options de menu?","Essayez quelque chose d'autre","ceci n'est qu'un menu!",'Un autre clic gaspill\xE9']);b.b.bd(hzc,d);return d}else{return c}}
function rqb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new wqb(b);o=new LZb;o.c=true;o.N.style[Usc]=izc;o.f=true;r=new MZb(true);q=odb(b.b);for(n=0;n<q.length;++n){nZb(r,new l$b(q[n],p))}e=new MZb(true);e.f=true;nZb(o,new m$b('Fichier',e));f=ndb(b.b);for(n=0;n<f.length;++n){if(n==3){pZb(e,new r$b);nZb(e,new m$b(f[3],r));pZb(e,new r$b)}else{nZb(e,new l$b(f[n],p))}}c=new MZb(true);nZb(o,new m$b('\xC9dition',c));d=mdb(b.b);for(n=0;n<d.length;++n){nZb(c,new l$b(d[n],p))}g=new MZb(true);nZb(o,new k$b(g));i=pdb(b.b);for(n=0;n<i.length;++n){nZb(g,new l$b(i[n],p))}j=new MZb(true);pZb(o,new r$b);nZb(o,new m$b('Aide',j));k=qdb(b.b);for(n=0;n<k.length;++n){nZb(j,new l$b(k[n],p))}v7b(o.N,Erc,jzc);JZb(o,jzc);return o}
var kzc='aria-haspopup',jzc='cwMenuBar',azc='cwMenuBarEditOptions',czc='cwMenuBarFileOptions',ezc='cwMenuBarFileRecents',fzc='cwMenuBarGWTOptions',gzc='cwMenuBarHelpOptions',hzc='cwMenuBarPrompts',_yc='runCallbacks17';_=xZ.prototype=sZ.prototype=new Z;_.gC=function yZ(){return YG};_.Dd=function CZ(){wZ()};_.cM={};_=wqb.prototype=vqb.prototype=new Z;_._b=function xqb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function yqb(){return dM};_.cM={113:1};_.b=0;_.d=null;_=LZb.prototype=mZb.prototype;_=m$b.prototype=l$b.prototype=k$b.prototype=h$b.prototype;_=r$b.prototype=q$b.prototype=new Ed;_.gC=function s$b(){return hR};_.cM={69:1,121:1};var YG=zfc(rwc,'AsyncLoader17'),dM=zfc(ywc,'CwMenuBar$1'),hR=zfc(awc,'MenuItemSeparator');xrc(zZ)();