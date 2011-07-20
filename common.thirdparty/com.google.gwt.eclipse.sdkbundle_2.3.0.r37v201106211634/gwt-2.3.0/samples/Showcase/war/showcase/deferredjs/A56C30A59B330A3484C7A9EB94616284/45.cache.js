function U3(){}
function P3(){}
function uvb(b){s8(b.b,pvb(b.a))}
function T3(){var b;while(Q3){b=Q3;Q3=Q3.b;!Q3&&(R3=null);uvb(b.a)}}
function W3(){S3=new U3;ci((ai(),_h),45);!!$stats&&$stats(Ji(Cyc,Znc,-1,-1));S3.nd();!!$stats&&$stats(Ji(Cyc,Ysc,-1,-1))}
function P9(b){var c,d;c=Gz(b.a.Sc(Dyc),49);if(c==null){d=yz(eS,{17:1,49:1},1,[$tc,_tc,uuc,vuc]);b.a.Uc(Dyc,d);return d}else{return c}}
function Q9(b){var c,d;c=Gz(b.a.Sc(Eyc),49);if(c==null){d=yz(eS,{17:1,49:1},1,[dvc,evc,fvc,gvc,hvc,ivc]);b.a.Uc(Eyc,d);return d}else{return c}}
function pvb(b){var c,d,e,f,g,i,j;j=new u4b;s4b(j,new AQb('<b>Select your favorite color:<\/b>'));d=P9(b.a);for(e=0;e<d.length;++e){c=d[e];f=new XYb(Npc,c);uNb(f,'cwRadioButton-color-'+c);e==2&&(f.c.disabled=true,Kd(f,Qd(f.M)+Zpc,true));s4b(j,f)}s4b(j,new AQb('<br><b>Select your favorite sport:<\/b>'));i=Q9(b.a);for(e=0;e<i.length;++e){g=i[e];f=new XYb('sport',g);uNb(f,'cwRadioButton-sport-'+adc(g,foc,Vnc));e==2&&vNb(f,(ubc(),ubc(),tbc));s4b(j,f)}return j}
var Dyc='cwRadioButtonColors',Eyc='cwRadioButtonSports',Cyc='runCallbacks45';_=U3.prototype=P3.prototype=new Z;_.gC=function V3(){return WE};_.nd=function Z3(){T3()};_.cM={};var WE=Pbc(zsc,'AsyncLoader45');Onc(W3)();