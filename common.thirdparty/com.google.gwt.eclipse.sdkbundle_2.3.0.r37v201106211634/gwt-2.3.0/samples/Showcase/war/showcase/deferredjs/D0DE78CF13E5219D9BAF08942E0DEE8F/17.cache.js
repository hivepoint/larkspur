function k7(){}
function f7(){}
function nAb(){}
function l8b(){}
function sAb(b){Qlb(b.b,jAb(b.a))}
function k7b(b,c){return r7b(b,c,b.a.b)}
function oAb(b){this.c=b;this.b=jnb(this.c.a)}
function g8b(b,c){i8b.call(this,b,false);this.b=c}
function h8b(b,c){i8b.call(this,b,false);e8b(this,c)}
function f8b(b){i8b.call(this,'GWT',true);e8b(this,b)}
function j7(){var b;while(g7){b=g7;g7=g7.b;!g7&&(h7=null);sAb(b.a)}}
function G7b(){this.a=new Fvc;this.f=new Fvc;p7b(this,false,a$b((b8b(),a8b)))}
function r7b(b,c,d){if(d<0||d>b.a.b){throw new Jpc}b.o&&(c.M[_Hc]=2,undefined);j7b(b,d,c.M);wvc(b.a,d,c);return c}
function e8b(b,c){b.d=c;!!b.c&&F7b(b.c,b);if(c){c.M.tabIndex=-1;b.M.setAttribute(vJc,eEc)}else{b.M.setAttribute(vJc,DFc)}}
function m7(){i7=new k7;ci((ai(),_h),17);!!$stats&&$stats(Ji(kJc,vBc,-1,-1));i7.Fd();!!$stats&&$stats(Ji(kJc,UGc,-1,-1))}
function fnb(b){var c,d;c=ZL(b.a.Tc(mJc),49);if(c==null){d=RL(C3,{17:1,49:1},1,['New','Open',nJc,oJc,'Exit']);b.a.Vc(mJc,d);return d}else{return c}}
function enb(b){var c,d;c=ZL(b.a.Tc(lJc),49);if(c==null){d=RL(C3,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.a.Vc(lJc,d);return d}else{return c}}
function inb(b){var c,d;c=ZL(b.a.Tc(rJc),49);if(c==null){d=RL(C3,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.a.Vc(rJc,d);return d}else{return c}}
function hnb(b){var c,d;c=ZL(b.a.Tc(qJc),49);if(c==null){d=RL(C3,{17:1,49:1},1,['Download','Examples',ODc,"GWT wit' the program"]);b.a.Vc(qJc,d);return d}else{return c}}
function gnb(b){var c,d;c=ZL(b.a.Tc(pJc),49);if(c==null){d=RL(C3,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.a.Vc(pJc,d);return d}else{return c}}
function m8b(){var b;this.M=$doc.createElement(vFc);this.M[mBc]='gwt-MenuItemSeparator';b=$doc.createElement(pBc);this.M.appendChild(b);b[mBc]='menuSeparatorInner'}
function jnb(b){var c,d;c=ZL(b.a.Tc(sJc),49);if(c==null){d=RL(C3,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.a.Vc(sJc,d);return d}else{return c}}
function jAb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new oAb(b);o=new G7b;o.b=true;o.M.style[DCc]=tJc;o.e=true;r=new H7b(true);q=gnb(b.a);for(n=0;n<q.length;++n){i7b(r,new g8b(q[n],p))}e=new H7b(true);e.e=true;i7b(o,new h8b('File',e));f=fnb(b.a);for(n=0;n<f.length;++n){if(n==3){k7b(e,new m8b);i7b(e,new h8b(f[3],r));k7b(e,new m8b)}else{i7b(e,new g8b(f[n],p))}}c=new H7b(true);i7b(o,new h8b('Edit',c));d=enb(b.a);for(n=0;n<d.length;++n){i7b(c,new g8b(d[n],p))}g=new H7b(true);i7b(o,new f8b(g));i=hnb(b.a);for(n=0;n<i.length;++n){i7b(g,new g8b(i[n],p))}j=new H7b(true);k7b(o,new m8b);i7b(o,new h8b('Help',j));k=inb(b.a);for(n=0;n<k.length;++n){i7b(j,new g8b(k[n],p))}phc(o.M,rBc,uJc);E7b(o,uJc);return o}
var vJc='aria-haspopup',uJc='cwMenuBar',lJc='cwMenuBarEditOptions',mJc='cwMenuBarFileOptions',pJc='cwMenuBarFileRecents',qJc='cwMenuBarGWTOptions',rJc='cwMenuBarHelpOptions',sJc='cwMenuBarPrompts',kJc='runCallbacks17';_=k7.prototype=f7.prototype=new Z;_.gC=function l7(){return JQ};_.Fd=function p7(){j7()};_.cM={};_=oAb.prototype=nAb.prototype=new Z;_.$b=function pAb(){$wnd.alert(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.gC=function qAb(){return RV};_.cM={113:1};_.a=0;_.c=null;_=G7b.prototype=h7b.prototype;_=h8b.prototype=g8b.prototype=f8b.prototype=c8b.prototype;_=m8b.prototype=l8b.prototype=new Ed;_.gC=function n8b(){return X$};_.cM={69:1,121:1};var JQ=lpc(vGc,'AsyncLoader17'),RV=lpc(CGc,'CwMenuBar$1'),X$=lpc(eGc,'MenuItemSeparator');kBc(m7)();