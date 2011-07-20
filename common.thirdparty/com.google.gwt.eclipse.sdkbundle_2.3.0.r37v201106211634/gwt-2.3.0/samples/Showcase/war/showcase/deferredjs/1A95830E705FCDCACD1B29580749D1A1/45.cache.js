function Z3(){}
function U3(){}
function zvb(b){x8(b.b,uvb(b.a))}
function Y3(){var b;while(V3){b=V3;V3=V3.b;!V3&&(W3=null);zvb(b.a)}}
function _3(){X3=new Z3;ci((ai(),_h),45);!!$stats&&$stats(Ji(Ryc,loc,-1,-1));X3.nd();!!$stats&&$stats(Ji(Ryc,mtc,-1,-1))}
function U9(b){var c,d;c=Mz(b.a.Sc(Syc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,[ouc,puc,Kuc,Luc]);b.a.Uc(Syc,d);return d}else{return c}}
function V9(b){var c,d;c=Mz(b.a.Sc(Tyc),49);if(c==null){d=Ez(jS,{17:1,49:1},1,[tvc,uvc,vvc,wvc,xvc,yvc]);b.a.Uc(Tyc,d);return d}else{return c}}
function uvb(b){var c,d,e,f,g,i,j;j=new F4b;D4b(j,new PQb('<b>Select your favorite color:<\/b>'));d=U9(b.a);for(e=0;e<d.length;++e){c=d[e];f=new kZb(aqc,c);JNb(f,'cwRadioButton-color-'+c);e==2&&(f.c.disabled=true,Kd(f,Qd(f.M)+mqc,true));D4b(j,f)}D4b(j,new PQb('<br><b>Select your favorite sport:<\/b>'));i=V9(b.a);for(e=0;e<i.length;++e){g=i[e];f=new kZb('sport',g);JNb(f,'cwRadioButton-sport-'+ndc(g,toc,hoc));e==2&&KNb(f,(Hbc(),Hbc(),Gbc));D4b(j,f)}return j}
var Syc='cwRadioButtonColors',Tyc='cwRadioButtonSports',Ryc='runCallbacks45';_=Z3.prototype=U3.prototype=new Z;_.gC=function $3(){return aF};_.nd=function c4(){Y3()};_.cM={};var aF=acc(Psc,'AsyncLoader45');_nc(_3)();