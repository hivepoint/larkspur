function _3(){}
function W3(){}
function wvb(b){u8(b.c,rvb(b.b))}
function $3(){var b;while(X3){b=X3;X3=X3.c;!X3&&(Y3=null);wvb(b.b)}}
function b4(){Z3=new _3;di((bi(),ai),45);!!$stats&&$stats(Ki(Ryc,eoc,-1,-1));Z3.nd();!!$stats&&$stats(Ki(Ryc,jtc,-1,-1))}
function R9(b){var c,d;c=Nz(b.b.Sc(Syc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,[luc,muc,Huc,Iuc]);b.b.Uc(Syc,d);return d}else{return c}}
function S9(b){var c,d;c=Nz(b.b.Sc(Tyc),49);if(c==null){d=Fz(lS,{17:1,49:1},1,[qvc,rvc,svc,tvc,uvc,vvc]);b.b.Uc(Tyc,d);return d}else{return c}}
function rvb(b){var c,d,e,f,g,i,j;j=new u4b;s4b(j,new zQb('<b>Select your favorite color:<\/b>'));d=R9(b.b);for(e=0;e<d.length;++e){c=d[e];f=new WYb(Wpc,c);tNb(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+gqc,true));s4b(j,f)}s4b(j,new zQb('<br><b>Select your favorite sport:<\/b>'));i=S9(b.b);for(e=0;e<i.length;++e){g=i[e];f=new WYb('sport',g);tNb(f,'cwRadioButton-sport-'+idc(g,loc,aoc));e==2&&uNb(f,(Cbc(),Cbc(),Bbc));s4b(j,f)}return j}
var Syc='cwRadioButtonColors',Tyc='cwRadioButtonSports',Ryc='runCallbacks45';_=_3.prototype=W3.prototype=new Z;_.gC=function a4(){return dF};_.nd=function e4(){$3()};_.cM={};var dF=Xbc(Msc,'AsyncLoader45');Vnc(b4)();