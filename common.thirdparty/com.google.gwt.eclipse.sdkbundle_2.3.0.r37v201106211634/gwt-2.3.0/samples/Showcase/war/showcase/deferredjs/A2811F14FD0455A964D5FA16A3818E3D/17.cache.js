function GV(){}
function BV(){}
function Emb(){}
function AWb(){}
function Jmb(b){f8(b.c,Amb(b.b))}
function zVb(b,c){return GVb(b,c,b.b.c)}
function Fmb(b){this.d=b;this.c=A9(this.d.b)}
function vWb(b,c){xWb.call(this,b,false);this.c=c}
function wWb(b,c){xWb.call(this,b,false);tWb(this,c)}
function uWb(b){xWb.call(this,'GWT',true);tWb(this,b)}
function FV(){var b;while(CV){b=CV;CV=CV.c;!CV&&(DV=null);Jmb(b.b)}}
function VVb(){this.b=new Lhc;this.g=new Lhc;EVb(this,false,jMb((qWb(),pWb)))}
function GVb(b,c,d){if(d<0||d>b.b.c){throw new Qbc}b.p&&(c.N[Ntc]=2,undefined);yVb(b,d,c.N);Chc(b.b,d,c);return c}
function tWb(b,c){b.e=c;!!b.d&&UVb(b.d,b);if(c){c.N.tabIndex=-1;b.N.setAttribute(bvc,Ppc)}else{b.N.setAttribute(bvc,mrc)}}
function IV(){EV=new GV;ci((ai(),_h),17);!!$stats&&$stats(Ji(Suc,Bnc,-1,-1));EV.nd();!!$stats&&$stats(Ji(Suc,Dsc,-1,-1))}
function w9(b){var c,d;c=zz(b.b.Sc(Uuc),49);if(c==null){d=rz(YR,{17:1,49:1},1,['New','Open',Vuc,Wuc,'Exit']);b.b.Uc(Uuc,d);return d}else{return c}}
function v9(b){var c,d;c=zz(b.b.Sc(Tuc),49);if(c==null){d=rz(YR,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.b.Uc(Tuc,d);return d}else{return c}}
function z9(b){var c,d;c=zz(b.b.Sc(Zuc),49);if(c==null){d=rz(YR,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.b.Uc(Zuc,d);return d}else{return c}}
function y9(b){var c,d;c=zz(b.b.Sc(Yuc),49);if(c==null){d=rz(YR,{17:1,49:1},1,['Download','Examples',xpc,"GWT wit' the program"]);b.b.Uc(Yuc,d);return d}else{return c}}
function x9(b){var c,d;c=zz(b.b.Sc(Xuc),49);if(c==null){d=rz(YR,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.b.Uc(Xuc,d);return d}else{return c}}
function BWb(){var b;this.N=$doc.createElement(erc);this.N[snc]='gwt-MenuItemSeparator';b=$doc.createElement(vnc);this.N.appendChild(b);b[snc]='menuSeparatorInner'}
function A9(b){var c,d;c=zz(b.b.Sc($uc),49);if(c==null){d=rz(YR,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.b.Uc($uc,d);return d}else{return c}}
function Amb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new Fmb(b);o=new VVb;o.c=true;o.N.style[Noc]=_uc;o.f=true;r=new WVb(true);q=x9(b.b);for(n=0;n<q.length;++n){xVb(r,new vWb(q[n],p))}e=new WVb(true);e.f=true;xVb(o,new wWb('File',e));f=w9(b.b);for(n=0;n<f.length;++n){if(n==3){zVb(e,new BWb);xVb(e,new wWb(f[3],r));zVb(e,new BWb)}else{xVb(e,new vWb(f[n],p))}}c=new WVb(true);xVb(o,new wWb('Edit',c));d=v9(b.b);for(n=0;n<d.length;++n){xVb(c,new vWb(d[n],p))}g=new WVb(true);xVb(o,new uWb(g));i=y9(b.b);for(n=0;n<i.length;++n){xVb(g,new vWb(i[n],p))}j=new WVb(true);zVb(o,new BWb);xVb(o,new wWb('Help',j));k=z9(b.b);for(n=0;n<k.length;++n){xVb(j,new vWb(k[n],p))}C3b(o.N,xnc,avc);TVb(o,avc);return o}
var bvc='aria-haspopup',avc='cwMenuBar',Tuc='cwMenuBarEditOptions',Uuc='cwMenuBarFileOptions',Xuc='cwMenuBarFileRecents',Yuc='cwMenuBarGWTOptions',Zuc='cwMenuBarHelpOptions',$uc='cwMenuBarPrompts',Suc='runCallbacks17';_=GV.prototype=BV.prototype=new Z;_.gC=function HV(){return gD};_.nd=function LV(){FV()};_.cM={};_=Fmb.prototype=Emb.prototype=new Z;_._b=function Gmb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function Hmb(){return nI};_.cM={112:1};_.b=0;_.d=null;_=VVb.prototype=wVb.prototype;_=wWb.prototype=vWb.prototype=uWb.prototype=rWb.prototype;_=BWb.prototype=AWb.prototype=new Ed;_.gC=function CWb(){return sN};_.cM={81:1,120:1};var gD=sbc(esc,'AsyncLoader17'),nI=sbc(lsc,'CwMenuBar$1'),sN=sbc(Prc,'MenuItemSeparator');qnc(IV)();