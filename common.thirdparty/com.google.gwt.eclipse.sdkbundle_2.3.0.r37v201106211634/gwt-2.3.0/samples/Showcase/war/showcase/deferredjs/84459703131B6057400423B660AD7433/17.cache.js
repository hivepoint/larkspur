function p7(){}
function k7(){}
function sAb(){}
function A8b(){}
function xAb(b){Vlb(b.b,oAb(b.a))}
function z7b(b,c){return G7b(b,c,b.a.b)}
function tAb(b){this.c=b;this.b=onb(this.c.a)}
function v8b(b,c){x8b.call(this,b,false);this.b=c}
function w8b(b,c){x8b.call(this,b,false);t8b(this,c)}
function u8b(b){x8b.call(this,'GWT',true);t8b(this,b)}
function o7(){var b;while(l7){b=l7;l7=l7.b;!l7&&(m7=null);xAb(b.a)}}
function V7b(){this.a=new Svc;this.f=new Svc;E7b(this,false,p$b((q8b(),p8b)))}
function G7b(b,c,d){if(d<0||d>b.a.b){throw new Wpc}b.o&&(c.M[qIc]=2,undefined);y7b(b,d,c.M);Jvc(b.a,d,c);return c}
function t8b(b,c){b.d=c;!!b.c&&U7b(b.c,b);if(c){c.M.tabIndex=-1;b.M.setAttribute(MJc,wEc)}else{b.M.setAttribute(MJc,TFc)}}
function r7(){n7=new p7;ci((ai(),_h),17);!!$stats&&$stats(Ji(BJc,JBc,-1,-1));n7.Fd();!!$stats&&$stats(Ji(BJc,jHc,-1,-1))}
function B8b(){var b;this.M=jk($doc,LFc);this.M[zBc]='gwt-MenuItemSeparator';b=jk($doc,DBc);this.M.appendChild(b);b[zBc]='menuSeparatorInner'}
function knb(b){var c,d;c=dM(b.a.Tc(DJc),49);if(c==null){d=XL(H3,{17:1,49:1},1,['New','Open',EJc,FJc,'Exit']);b.a.Vc(DJc,d);return d}else{return c}}
function jnb(b){var c,d;c=dM(b.a.Tc(CJc),49);if(c==null){d=XL(H3,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.a.Vc(CJc,d);return d}else{return c}}
function nnb(b){var c,d;c=dM(b.a.Tc(IJc),49);if(c==null){d=XL(H3,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.a.Vc(IJc,d);return d}else{return c}}
function mnb(b){var c,d;c=dM(b.a.Tc(HJc),49);if(c==null){d=XL(H3,{17:1,49:1},1,['Download','Examples',bEc,"GWT wit' the program"]);b.a.Vc(HJc,d);return d}else{return c}}
function lnb(b){var c,d;c=dM(b.a.Tc(GJc),49);if(c==null){d=XL(H3,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.a.Vc(GJc,d);return d}else{return c}}
function onb(b){var c,d;c=dM(b.a.Tc(JJc),49);if(c==null){d=XL(H3,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.a.Vc(JJc,d);return d}else{return c}}
function oAb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new tAb(b);o=new V7b;o.b=true;o.M.style[TCc]=KJc;o.e=true;r=new W7b(true);q=lnb(b.a);for(n=0;n<q.length;++n){x7b(r,new v8b(q[n],p))}e=new W7b(true);e.e=true;x7b(o,new w8b('File',e));f=knb(b.a);for(n=0;n<f.length;++n){if(n==3){z7b(e,new B8b);x7b(e,new w8b(f[3],r));z7b(e,new B8b)}else{x7b(e,new v8b(f[n],p))}}c=new W7b(true);x7b(o,new w8b('Edit',c));d=jnb(b.a);for(n=0;n<d.length;++n){x7b(c,new v8b(d[n],p))}g=new W7b(true);x7b(o,new u8b(g));i=mnb(b.a);for(n=0;n<i.length;++n){x7b(g,new v8b(i[n],p))}j=new W7b(true);z7b(o,new B8b);x7b(o,new w8b('Help',j));k=nnb(b.a);for(n=0;n<k.length;++n){x7b(j,new v8b(k[n],p))}Ahc(o.M,FBc,LJc);T7b(o,LJc);return o}
var MJc='aria-haspopup',LJc='cwMenuBar',CJc='cwMenuBarEditOptions',DJc='cwMenuBarFileOptions',GJc='cwMenuBarFileRecents',HJc='cwMenuBarGWTOptions',IJc='cwMenuBarHelpOptions',JJc='cwMenuBarPrompts',BJc='runCallbacks17';_=p7.prototype=k7.prototype=new Z;_.gC=function q7(){return PQ};_.Fd=function u7(){o7()};_.cM={};_=tAb.prototype=sAb.prototype=new Z;_.$b=function uAb(){$wnd.alert(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.gC=function vAb(){return XV};_.cM={113:1};_.a=0;_.c=null;_=V7b.prototype=w7b.prototype;_=w8b.prototype=v8b.prototype=u8b.prototype=r8b.prototype;_=B8b.prototype=A8b.prototype=new Ed;_.gC=function C8b(){return b_};_.cM={69:1,121:1};var PQ=ypc(MGc,'AsyncLoader17'),XV=ypc(TGc,'CwMenuBar$1'),b_=ypc(vGc,'MenuItemSeparator');xBc(r7)();