function H7(){}
function C7(){}
function FAb(){}
function B8b(){}
function KAb(b){gmb(b.c,BAb(b.b))}
function A7b(b,c){return H7b(b,c,b.b.c)}
function GAb(b){this.d=b;this.c=Bnb(this.d.b)}
function w8b(b,c){y8b.call(this,b,false);this.c=c}
function x8b(b,c){y8b.call(this,b,false);u8b(this,c)}
function v8b(b){y8b.call(this,'GWT',true);u8b(this,b)}
function G7(){var b;while(D7){b=D7;D7=D7.c;!D7&&(E7=null);KAb(b.b)}}
function W7b(){this.b=new cwc;this.g=new cwc;F7b(this,false,m$b((r8b(),q8b)))}
function H7b(b,c,d){if(d<0||d>b.b.c){throw new hqc}b.p&&(c.N[EIc]=2,undefined);z7b(b,d,c.N);Vvc(b.b,d,c);return c}
function u8b(b,c){b.e=c;!!b.d&&V7b(b.d,b);if(c){(k5b(),c.N).tabIndex=-1;b.N.setAttribute($Jc,JEc)}else{b.N.setAttribute($Jc,gGc)}}
function J7(){F7=new H7;ci((ai(),_h),17);!!$stats&&$stats(Ji(PJc,UBc,-1,-1));F7.Jd();!!$stats&&$stats(Ji(PJc,xHc,-1,-1))}
function xnb(b){var c,d;c=pM(b.b.Xc(RJc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,['New','Open',SJc,TJc,'Exit']);b.b.Zc(RJc,d);return d}else{return c}}
function wnb(b){var c,d;c=pM(b.b.Xc(QJc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.b.Zc(QJc,d);return d}else{return c}}
function Anb(b){var c,d;c=pM(b.b.Xc(WJc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.b.Zc(WJc,d);return d}else{return c}}
function znb(b){var c,d;c=pM(b.b.Xc(VJc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,['Download','Examples',rEc,"GWT wit' the program"]);b.b.Zc(VJc,d);return d}else{return c}}
function ynb(b){var c,d;c=pM(b.b.Xc(UJc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.b.Zc(UJc,d);return d}else{return c}}
function C8b(){var b;this.N=$doc.createElement($Fc);this.N[LBc]='gwt-MenuItemSeparator';b=$doc.createElement(OBc);this.N.appendChild(b);b[LBc]='menuSeparatorInner'}
function Bnb(b){var c,d;c=pM(b.b.Xc(XJc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.b.Zc(XJc,d);return d}else{return c}}
function BAb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new GAb(b);o=new W7b;o.c=true;o.N.style[iDc]=YJc;o.f=true;r=new X7b(true);q=ynb(b.b);for(n=0;n<q.length;++n){y7b(r,new w8b(q[n],p))}e=new X7b(true);e.f=true;y7b(o,new x8b('File',e));f=xnb(b.b);for(n=0;n<f.length;++n){if(n==3){A7b(e,new C8b);y7b(e,new x8b(f[3],r));A7b(e,new C8b)}else{y7b(e,new w8b(f[n],p))}}c=new X7b(true);y7b(o,new x8b('Edit',c));d=wnb(b.b);for(n=0;n<d.length;++n){y7b(c,new w8b(d[n],p))}g=new X7b(true);y7b(o,new v8b(g));i=znb(b.b);for(n=0;n<i.length;++n){y7b(g,new w8b(i[n],p))}j=new X7b(true);A7b(o,new C8b);y7b(o,new x8b('Help',j));k=Anb(b.b);for(n=0;n<k.length;++n){y7b(j,new w8b(k[n],p))}Dhc(o.N,QBc,ZJc);U7b(o,ZJc);return o}
var $Jc='aria-haspopup',ZJc='cwMenuBar',QJc='cwMenuBarEditOptions',RJc='cwMenuBarFileOptions',UJc='cwMenuBarFileRecents',VJc='cwMenuBarGWTOptions',WJc='cwMenuBarHelpOptions',XJc='cwMenuBarPrompts',PJc='runCallbacks17';_=H7.prototype=C7.prototype=new Z;_.gC=function I7(){return eR};_.Jd=function M7(){G7()};_.cM={};_=GAb.prototype=FAb.prototype=new Z;_._b=function HAb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function IAb(){return lW};_.cM={113:1};_.b=0;_.d=null;_=W7b.prototype=x7b.prototype;_=x8b.prototype=w8b.prototype=v8b.prototype=s8b.prototype;_=C8b.prototype=B8b.prototype=new Ed;_.gC=function D8b(){return q_};_.cM={69:1,121:1};var eR=Lpc($Gc,'AsyncLoader17'),lW=Lpc(fHc,'CwMenuBar$1'),q_=Lpc(JGc,'MenuItemSeparator');JBc(J7)();