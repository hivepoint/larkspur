function TV(){}
function OV(){}
function Wmb(){}
function cXb(){}
function _mb(b){x8(b.b,Smb(b.a))}
function bWb(b,c){return iWb(b,c,b.a.b)}
function Xmb(b){this.c=b;this.b=S9(this.c.a)}
function ZWb(b,c){_Wb.call(this,b,false);this.b=c}
function $Wb(b,c){_Wb.call(this,b,false);XWb(this,c)}
function YWb(b){_Wb.call(this,'GWT',true);XWb(this,b)}
function xWb(){this.a=new uic;this.f=new uic;gWb(this,false,TMb((UWb(),TWb)))}
function SV(){var b;while(PV){b=PV;PV=PV.b;!PV&&(QV=null);_mb(b.a)}}
function iWb(b,c,d){if(d<0||d>b.a.b){throw new ycc}b.o&&(c.M[wuc]=2,undefined);aWb(b,d,c.M);lic(b.a,d,c);return c}
function XWb(b,c){b.d=c;!!b.c&&wWb(b.c,b);if(c){c.M.tabIndex=-1;b.M.setAttribute(Mvc,Aqc)}else{b.M.setAttribute(Mvc,Xrc)}}
function VV(){RV=new TV;ci((ai(),_h),17);!!$stats&&$stats(Ji(Bvc,loc,-1,-1));RV.nd();!!$stats&&$stats(Ji(Bvc,mtc,-1,-1))}
function dXb(){var b;this.M=jk($doc,Prc);this.M[boc]='gwt-MenuItemSeparator';b=jk($doc,foc);this.M.appendChild(b);b[boc]='menuSeparatorInner'}
function O9(b){var c,d;c=Mz(b.a.Sc(Dvc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,['New','Open',Evc,Fvc,'Exit']);b.a.Uc(Dvc,d);return d}else{return c}}
function N9(b){var c,d;c=Mz(b.a.Sc(Cvc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.a.Uc(Cvc,d);return d}else{return c}}
function R9(b){var c,d;c=Mz(b.a.Sc(Ivc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.a.Uc(Ivc,d);return d}else{return c}}
function Q9(b){var c,d;c=Mz(b.a.Sc(Hvc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,['Download','Examples',fqc,"GWT wit' the program"]);b.a.Uc(Hvc,d);return d}else{return c}}
function P9(b){var c,d;c=Mz(b.a.Sc(Gvc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.a.Uc(Gvc,d);return d}else{return c}}
function S9(b){var c,d;c=Mz(b.a.Sc(Jvc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.a.Uc(Jvc,d);return d}else{return c}}
function Smb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new Xmb(b);o=new xWb;o.b=true;o.M.style[upc]=Kvc;o.e=true;r=new yWb(true);q=P9(b.a);for(n=0;n<q.length;++n){_Vb(r,new ZWb(q[n],p))}e=new yWb(true);e.e=true;_Vb(o,new $Wb('File',e));f=O9(b.a);for(n=0;n<f.length;++n){if(n==3){bWb(e,new dXb);_Vb(e,new $Wb(f[3],r));bWb(e,new dXb)}else{_Vb(e,new ZWb(f[n],p))}}c=new yWb(true);_Vb(o,new $Wb('Edit',c));d=N9(b.a);for(n=0;n<d.length;++n){_Vb(c,new ZWb(d[n],p))}g=new yWb(true);_Vb(o,new YWb(g));i=Q9(b.a);for(n=0;n<i.length;++n){_Vb(g,new ZWb(i[n],p))}j=new yWb(true);bWb(o,new dXb);_Vb(o,new $Wb('Help',j));k=R9(b.a);for(n=0;n<k.length;++n){_Vb(j,new ZWb(k[n],p))}c4b(o.M,hoc,Lvc);vWb(o,Lvc);return o}
var Mvc='aria-haspopup',Lvc='cwMenuBar',Cvc='cwMenuBarEditOptions',Dvc='cwMenuBarFileOptions',Gvc='cwMenuBarFileRecents',Hvc='cwMenuBarGWTOptions',Ivc='cwMenuBarHelpOptions',Jvc='cwMenuBarPrompts',Bvc='runCallbacks17';_=TV.prototype=OV.prototype=new Z;_.gC=function UV(){return rD};_.nd=function YV(){SV()};_.cM={};_=Xmb.prototype=Wmb.prototype=new Z;_.$b=function Ymb(){$wnd.alert(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.gC=function Zmb(){return zI};_.cM={112:1};_.a=0;_.c=null;_=xWb.prototype=$Vb.prototype;_=$Wb.prototype=ZWb.prototype=YWb.prototype=VWb.prototype;_=dXb.prototype=cXb.prototype=new Ed;_.gC=function eXb(){return FN};_.cM={81:1,120:1};var rD=acc(Psc,'AsyncLoader17'),zI=acc(Wsc,'CwMenuBar$1'),FN=acc(ysc,'MenuItemSeparator');_nc(VV)();