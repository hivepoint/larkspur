function VV(){}
function QV(){}
function Tmb(){}
function OWb(){}
function Ymb(b){u8(b.c,Pmb(b.b))}
function NVb(b,c){return UVb(b,c,b.b.c)}
function Umb(b){this.d=b;this.c=P9(this.d.b)}
function JWb(b,c){LWb.call(this,b,false);this.c=c}
function KWb(b,c){LWb.call(this,b,false);HWb(this,c)}
function IWb(b){LWb.call(this,'GWT',true);HWb(this,b)}
function UV(){var b;while(RV){b=RV;RV=RV.c;!RV&&(SV=null);Ymb(b.b)}}
function hWb(){this.b=new oic;this.g=new oic;SVb(this,false,DMb((EWb(),DWb)))}
function UVb(b,c,d){if(d<0||d>b.b.c){throw new tcc}b.p&&(c.N[tuc]=2,undefined);MVb(b,d,c.N);fic(b.b,d,c);return c}
function HWb(b,c){b.e=c;!!b.d&&gWb(b.d,b);if(c){c.N.tabIndex=-1;b.N.setAttribute(Jvc,rqc)}else{b.N.setAttribute(Jvc,Urc)}}
function XV(){TV=new VV;di((bi(),ai),17);!!$stats&&$stats(Ki(yvc,eoc,-1,-1));TV.nd();!!$stats&&$stats(Ki(yvc,jtc,-1,-1))}
function L9(b){var c,d;c=Nz(b.b.Sc(Avc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,['New','Open',Bvc,Cvc,'Exit']);b.b.Uc(Avc,d);return d}else{return c}}
function K9(b){var c,d;c=Nz(b.b.Sc(zvc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.b.Uc(zvc,d);return d}else{return c}}
function O9(b){var c,d;c=Nz(b.b.Sc(Fvc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.b.Uc(Fvc,d);return d}else{return c}}
function N9(b){var c,d;c=Nz(b.b.Sc(Evc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,['Download','Examples',_pc,"GWT wit' the program"]);b.b.Uc(Evc,d);return d}else{return c}}
function M9(b){var c,d;c=Nz(b.b.Sc(Dvc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.b.Uc(Dvc,d);return d}else{return c}}
function PWb(){var b;this.N=$doc.createElement(Mrc);this.N[Xnc]='gwt-MenuItemSeparator';b=$doc.createElement($nc);this.N.appendChild(b);b[Xnc]='menuSeparatorInner'}
function P9(b){var c,d;c=Nz(b.b.Sc(Gvc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.b.Uc(Gvc,d);return d}else{return c}}
function Pmb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new Umb(b);o=new hWb;o.c=true;o.N.style[ppc]=Hvc;o.f=true;r=new iWb(true);q=M9(b.b);for(n=0;n<q.length;++n){LVb(r,new JWb(q[n],p))}e=new iWb(true);e.f=true;LVb(o,new KWb('File',e));f=L9(b.b);for(n=0;n<f.length;++n){if(n==3){NVb(e,new PWb);LVb(e,new KWb(f[3],r));NVb(e,new PWb)}else{LVb(e,new JWb(f[n],p))}}c=new iWb(true);LVb(o,new KWb('Edit',c));d=K9(b.b);for(n=0;n<d.length;++n){LVb(c,new JWb(d[n],p))}g=new iWb(true);LVb(o,new IWb(g));i=N9(b.b);for(n=0;n<i.length;++n){LVb(g,new JWb(i[n],p))}j=new iWb(true);NVb(o,new PWb);LVb(o,new KWb('Help',j));k=O9(b.b);for(n=0;n<k.length;++n){LVb(j,new JWb(k[n],p))}T3b(o.N,aoc,Ivc);fWb(o,Ivc);return o}
var Jvc='aria-haspopup',Ivc='cwMenuBar',zvc='cwMenuBarEditOptions',Avc='cwMenuBarFileOptions',Dvc='cwMenuBarFileRecents',Evc='cwMenuBarGWTOptions',Fvc='cwMenuBarHelpOptions',Gvc='cwMenuBarPrompts',yvc='runCallbacks17';_=VV.prototype=QV.prototype=new Z;_.gC=function WV(){return uD};_.nd=function $V(){UV()};_.cM={};_=Umb.prototype=Tmb.prototype=new Z;_._b=function Vmb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function Wmb(){return BI};_.cM={112:1};_.b=0;_.d=null;_=hWb.prototype=KVb.prototype;_=KWb.prototype=JWb.prototype=IWb.prototype=FWb.prototype;_=PWb.prototype=OWb.prototype=new Ed;_.gC=function QWb(){return FN};_.cM={81:1,120:1};var uD=Xbc(Msc,'AsyncLoader17'),BI=Xbc(Tsc,'CwMenuBar$1'),FN=Xbc(vsc,'MenuItemSeparator');Vnc(XV)();