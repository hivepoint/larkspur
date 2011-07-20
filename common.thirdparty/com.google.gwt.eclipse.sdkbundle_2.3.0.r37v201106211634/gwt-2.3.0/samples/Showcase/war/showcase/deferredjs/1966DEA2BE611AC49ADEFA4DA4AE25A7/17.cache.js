function jW(){}
function eW(){}
function hnb(){}
function dXb(){}
function mnb(b){K8(b.c,dnb(b.b))}
function cWb(b,c){return jWb(b,c,b.b.c)}
function inb(b){this.d=b;this.c=dab(this.d.b)}
function $Wb(b,c){aXb.call(this,b,false);this.c=c}
function _Wb(b,c){aXb.call(this,b,false);YWb(this,c)}
function ZWb(b){aXb.call(this,'GWT',true);YWb(this,b)}
function iW(){var b;while(fW){b=fW;fW=fW.c;!fW&&(gW=null);mnb(b.b)}}
function yWb(){this.b=new Gic;this.g=new Gic;hWb(this,false,QMb((VWb(),UWb)))}
function jWb(b,c,d){if(d<0||d>b.b.c){throw new Lcc}b.p&&(c.N[Luc]=2,undefined);bWb(b,d,c.N);xic(b.b,d,c);return c}
function YWb(b,c){b.e=c;!!b.d&&xWb(b.d,b);if(c){(OTb(),c.N).tabIndex=-1;b.N.setAttribute(_vc,Nqc)}else{b.N.setAttribute(_vc,ksc)}}
function lW(){hW=new jW;ci((ai(),_h),17);!!$stats&&$stats(Ji(Qvc,woc,-1,-1));hW.rd();!!$stats&&$stats(Ji(Qvc,Btc,-1,-1))}
function _9(b){var c,d;c=Yz(b.b.Wc(Svc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,['New','Open',Tvc,Uvc,'Exit']);b.b.Yc(Svc,d);return d}else{return c}}
function $9(b){var c,d;c=Yz(b.b.Wc(Rvc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.b.Yc(Rvc,d);return d}else{return c}}
function cab(b){var c,d;c=Yz(b.b.Wc(Xvc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.b.Yc(Xvc,d);return d}else{return c}}
function bab(b){var c,d;c=Yz(b.b.Wc(Wvc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,['Download','Examples',vqc,"GWT wit' the program"]);b.b.Yc(Wvc,d);return d}else{return c}}
function aab(b){var c,d;c=Yz(b.b.Wc(Vvc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.b.Yc(Vvc,d);return d}else{return c}}
function eXb(){var b;this.N=$doc.createElement(csc);this.N[noc]='gwt-MenuItemSeparator';b=$doc.createElement(qoc);this.N.appendChild(b);b[noc]='menuSeparatorInner'}
function dab(b){var c,d;c=Yz(b.b.Wc(Yvc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.b.Yc(Yvc,d);return d}else{return c}}
function dnb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new inb(b);o=new yWb;o.c=true;o.N.style[Lpc]=Zvc;o.f=true;r=new zWb(true);q=aab(b.b);for(n=0;n<q.length;++n){aWb(r,new $Wb(q[n],p))}e=new zWb(true);e.f=true;aWb(o,new _Wb('File',e));f=_9(b.b);for(n=0;n<f.length;++n){if(n==3){cWb(e,new eXb);aWb(e,new _Wb(f[3],r));cWb(e,new eXb)}else{aWb(e,new $Wb(f[n],p))}}c=new zWb(true);aWb(o,new _Wb('Edit',c));d=$9(b.b);for(n=0;n<d.length;++n){aWb(c,new $Wb(d[n],p))}g=new zWb(true);aWb(o,new ZWb(g));i=bab(b.b);for(n=0;n<i.length;++n){aWb(g,new $Wb(i[n],p))}j=new zWb(true);cWb(o,new eXb);aWb(o,new _Wb('Help',j));k=cab(b.b);for(n=0;n<k.length;++n){aWb(j,new $Wb(k[n],p))}f4b(o.N,soc,$vc);wWb(o,$vc);return o}
var _vc='aria-haspopup',$vc='cwMenuBar',Rvc='cwMenuBarEditOptions',Svc='cwMenuBarFileOptions',Vvc='cwMenuBarFileRecents',Wvc='cwMenuBarGWTOptions',Xvc='cwMenuBarHelpOptions',Yvc='cwMenuBarPrompts',Qvc='runCallbacks17';_=jW.prototype=eW.prototype=new Z;_.gC=function kW(){return ID};_.rd=function oW(){iW()};_.cM={};_=inb.prototype=hnb.prototype=new Z;_._b=function jnb(){$wnd.alert(this.c[this.b]);this.b=(this.b+1)%this.c.length};_.gC=function knb(){return PI};_.cM={112:1};_.b=0;_.d=null;_=yWb.prototype=_Vb.prototype;_=_Wb.prototype=$Wb.prototype=ZWb.prototype=WWb.prototype;_=eXb.prototype=dXb.prototype=new Ed;_.gC=function fXb(){return UN};_.cM={81:1,120:1};var ID=ncc(ctc,'AsyncLoader17'),PI=ncc(jtc,'CwMenuBar$1'),UN=ncc(Nsc,'MenuItemSeparator');loc(lW)();