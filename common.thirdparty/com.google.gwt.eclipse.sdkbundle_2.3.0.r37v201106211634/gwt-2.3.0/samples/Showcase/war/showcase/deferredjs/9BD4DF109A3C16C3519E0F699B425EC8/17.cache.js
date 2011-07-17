function c7(){}
function Z6(){}
function aAb(){}
function Y7b(){}
function fAb(b){Dlb(b.c,Yzb(b.b))}
function X6b(b,c){return c7b(b,c,b.b.c)}
function bAb(b){this.d=b;this.c=Ymb(this.d.b)}
function T7b(b,c){V7b.call(this,b,false);this.c=c}
function U7b(b,c){V7b.call(this,b,false);R7b(this,c)}
function S7b(b){V7b.call(this,'GWT',true);R7b(this,b)}
function b7(){var b;while($6){b=$6;$6=$6.c;!$6&&(_6=null);fAb(b.b)}}
function r7b(){this.b=new hvc;this.g=new hvc;a7b(this,false,HZb((O7b(),N7b)))}
function c7b(b,c,d){if(d<0||d>b.b.c){throw new mpc}b.p&&(c.N[GHc]=2,undefined);W6b(b,d,c.N);$uc(b.b,d,c);return c}
function R7b(b,c){b.e=c;!!b.d&&q7b(b.d,b);if(c){c.N.tabIndex=-1;b.N.setAttribute(aJc,LDc)}else{b.N.setAttribute(aJc,iFc)}}
function e7(){a7=new c7;ci((ai(),_h),17);!!$stats&&$stats(Ji(RIc,ZAc,-1,-1));a7.Fd();!!$stats&&$stats(Ji(RIc,zGc,-1,-1))}
function Umb(b){var c,d;c=SL(b.b.Tc(TIc),49);if(c==null){d=KL(u3,{17:1,49:1},1,['New','Open',UIc,VIc,'Exit']);b.b.Vc(TIc,d);return d}else{return c}}
function Tmb(b){var c,d;c=SL(b.b.Tc(SIc),49);if(c==null){d=KL(u3,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.b.Vc(SIc,d);return d}else{return c}}
function Xmb(b){var c,d;c=SL(b.b.Tc(YIc),49);if(c==null){d=KL(u3,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.b.Vc(YIc,d);return d}else{return c}}
function Wmb(b){var c,d;c=SL(b.b.Tc(XIc),49);if(c==null){d=KL(u3,{17:1,49:1},1,['Download','Examples',tDc,"GWT wit' the program"]);b.b.Vc(XIc,d);return d}else{return c}}
function Vmb(b){var c,d;c=SL(b.b.Tc(WIc),49);if(c==null){d=KL(u3,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.b.Vc(WIc,d);return d}else{return c}}
function Z7b(){var b;this.N=$doc.createElement(aFc);this.N[QAc]='gwt-MenuItemSeparator';b=$doc.createElement(TAc);this.N.appendChild(b);b[QAc]='menuSeparatorInner'}
function Ymb(b){var c,d;c=SL(b.b.Tc(ZIc),49);if(c==null){d=KL(u3,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.b.Vc(ZIc,d);return d}else{return c}}
function Yzb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new bAb(b);o=new r7b;o.c=true;o.N.style[kCc]=$Ic;o.f=true;r=new s7b(true);q=Vmb(b.b);for(n=0;n<q.length;++n){V6b(r,new T7b(q[n],p))}e=new s7b(true);e.f=true;V6b(o,new U7b('File',e));f=Umb(b.b);for(n=0;n<f.length;++n){if(n==3){X6b(e,new Z7b);V6b(e,new U7b(f[3],r));X6b(e,new Z7b)}else{V6b(e,new T7b(f[n],p))}}c=new s7b(true);V6b(o,new U7b('Edit',c));d=Tmb(b.b);for(n=0;n<d.length;++n){V6b(c,new T7b(d[n],p))}g=new s7b(true);V6b(o,new S7b(g));i=Wmb(b.b);for(n=0;n<i.length;++n){V6b(g,new T7b(i[n],p))}j=new s7b(true);X6b(o,new Z7b);V6b(o,new U7b('Help',j));k=Xmb(b.b);for(n=0;n<k.length;++n){V6b(j,new T7b(k[n],p))}$gc(o.N,VAc,_Ic);p7b(o,_Ic);return o}
var aJc='aria-haspopup',_Ic='cwMenuBar',SIc='cwMenuBarEditOptions',TIc='cwMenuBarFileOptions',WIc='cwMenuBarFileRecents',XIc='cwMenuBarGWTOptions',YIc='cwMenuBarHelpOptions',ZIc='cwMenuBarPrompts',RIc='runCallbacks17';_=c7.prototype=Z6.prototype=new Z;_.gC=function d7(){return EQ};_.Fd=function h7(){b7()};_.cM={};_=bAb.prototype=aAb.prototype=new Z;_._b=function cAb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function dAb(){return LV};_.cM={113:1};_.b=0;_.d=null;_=r7b.prototype=U6b.prototype;_=U7b.prototype=T7b.prototype=S7b.prototype=P7b.prototype;_=Z7b.prototype=Y7b.prototype=new Ed;_.gC=function $7b(){return Q$};_.cM={69:1,121:1};var EQ=Qoc(aGc,'AsyncLoader17'),LV=Qoc(hGc,'CwMenuBar$1'),Q$=Qoc(LFc,'MenuItemSeparator');OAc(e7)();