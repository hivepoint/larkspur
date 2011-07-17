function r7(){}
function m7(){}
function pAb(){}
function k8b(){}
function uAb(b){Slb(b.c,lAb(b.b))}
function j7b(b,c){return q7b(b,c,b.b.c)}
function qAb(b){this.d=b;this.c=lnb(this.d.b)}
function f8b(b,c){h8b.call(this,b,false);this.c=c}
function g8b(b,c){h8b.call(this,b,false);d8b(this,c)}
function e8b(b){h8b.call(this,'GWT',true);d8b(this,b)}
function q7(){var b;while(n7){b=n7;n7=n7.c;!n7&&(o7=null);uAb(b.b)}}
function F7b(){this.b=new Mvc;this.g=new Mvc;o7b(this,false,_Zb((a8b(),_7b)))}
function q7b(b,c,d){if(d<0||d>b.b.c){throw new Rpc}b.p&&(c.N[mIc]=2,undefined);i7b(b,d,c.N);Dvc(b.b,d,c);return c}
function d8b(b,c){b.e=c;!!b.d&&E7b(b.d,b);if(c){c.N.tabIndex=-1;b.N.setAttribute(IJc,nEc)}else{b.N.setAttribute(IJc,QFc)}}
function t7(){p7=new r7;di((bi(),ai),17);!!$stats&&$stats(Ki(xJc,CBc,-1,-1));p7.Fd();!!$stats&&$stats(Ki(xJc,fHc,-1,-1))}
function hnb(b){var c,d;c=eM(b.b.Tc(zJc),49);if(c==null){d=YL(J3,{17:1,49:1},1,['New','Open',AJc,BJc,'Exit']);b.b.Vc(zJc,d);return d}else{return c}}
function gnb(b){var c,d;c=eM(b.b.Tc(yJc),49);if(c==null){d=YL(J3,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.b.Vc(yJc,d);return d}else{return c}}
function knb(b){var c,d;c=eM(b.b.Tc(EJc),49);if(c==null){d=YL(J3,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.b.Vc(EJc,d);return d}else{return c}}
function jnb(b){var c,d;c=eM(b.b.Tc(DJc),49);if(c==null){d=YL(J3,{17:1,49:1},1,['Download','Examples',XDc,"GWT wit' the program"]);b.b.Vc(DJc,d);return d}else{return c}}
function inb(b){var c,d;c=eM(b.b.Tc(CJc),49);if(c==null){d=YL(J3,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.b.Vc(CJc,d);return d}else{return c}}
function l8b(){var b;this.N=$doc.createElement(IFc);this.N[tBc]='gwt-MenuItemSeparator';b=$doc.createElement(wBc);this.N.appendChild(b);b[tBc]='menuSeparatorInner'}
function lnb(b){var c,d;c=eM(b.b.Tc(FJc),49);if(c==null){d=YL(J3,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.b.Vc(FJc,d);return d}else{return c}}
function lAb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new qAb(b);o=new F7b;o.c=true;o.N.style[OCc]=GJc;o.f=true;r=new G7b(true);q=inb(b.b);for(n=0;n<q.length;++n){h7b(r,new f8b(q[n],p))}e=new G7b(true);e.f=true;h7b(o,new g8b('File',e));f=hnb(b.b);for(n=0;n<f.length;++n){if(n==3){j7b(e,new l8b);h7b(e,new g8b(f[3],r));j7b(e,new l8b)}else{h7b(e,new f8b(f[n],p))}}c=new G7b(true);h7b(o,new g8b('Edit',c));d=gnb(b.b);for(n=0;n<d.length;++n){h7b(c,new f8b(d[n],p))}g=new G7b(true);h7b(o,new e8b(g));i=jnb(b.b);for(n=0;n<i.length;++n){h7b(g,new f8b(i[n],p))}j=new G7b(true);j7b(o,new l8b);h7b(o,new g8b('Help',j));k=knb(b.b);for(n=0;n<k.length;++n){h7b(j,new f8b(k[n],p))}phc(o.N,yBc,HJc);D7b(o,HJc);return o}
var IJc='aria-haspopup',HJc='cwMenuBar',yJc='cwMenuBarEditOptions',zJc='cwMenuBarFileOptions',CJc='cwMenuBarFileRecents',DJc='cwMenuBarGWTOptions',EJc='cwMenuBarHelpOptions',FJc='cwMenuBarPrompts',xJc='runCallbacks17';_=r7.prototype=m7.prototype=new Z;_.gC=function s7(){return SQ};_.Fd=function w7(){q7()};_.cM={};_=qAb.prototype=pAb.prototype=new Z;_._b=function rAb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function sAb(){return ZV};_.cM={113:1};_.b=0;_.d=null;_=F7b.prototype=g7b.prototype;_=g8b.prototype=f8b.prototype=e8b.prototype=b8b.prototype;_=l8b.prototype=k8b.prototype=new Ed;_.gC=function m8b(){return b_};_.cM={69:1,121:1};var SQ=tpc(IGc,'AsyncLoader17'),ZV=tpc(PGc,'CwMenuBar$1'),b_=tpc(rGc,'MenuItemSeparator');rBc(t7)();