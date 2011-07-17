function M3(){}
function H3(){}
function hvb(b){f8(b.c,cvb(b.b))}
function L3(){var b;while(I3){b=I3;I3=I3.c;!I3&&(J3=null);hvb(b.b)}}
function O3(){K3=new M3;ci((ai(),_h),45);!!$stats&&$stats(Ji(jyc,Bnc,-1,-1));K3.nd();!!$stats&&$stats(Ji(jyc,Dsc,-1,-1))}
function C9(b){var c,d;c=zz(b.b.Sc(kyc),49);if(c==null){d=rz(YR,{17:1,49:1},1,[Ftc,Gtc,_tc,auc]);b.b.Uc(kyc,d);return d}else{return c}}
function D9(b){var c,d;c=zz(b.b.Sc(lyc),49);if(c==null){d=rz(YR,{17:1,49:1},1,[Kuc,Luc,Muc,Nuc,Ouc,Puc]);b.b.Uc(lyc,d);return d}else{return c}}
function cvb(b){var c,d,e,f,g,i,j;j=new d4b;b4b(j,new fQb('<b>Select your favorite color:<\/b>'));d=C9(b.b);for(e=0;e<d.length;++e){c=d[e];f=new IYb(spc,c);_Mb(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+Epc,true));b4b(j,f)}b4b(j,new fQb('<br><b>Select your favorite sport:<\/b>'));i=D9(b.b);for(e=0;e<i.length;++e){g=i[e];f=new IYb('sport',g);_Mb(f,'cwRadioButton-sport-'+Fcc(g,Hnc,xnc));e==2&&aNb(f,(Zac(),Zac(),Yac));b4b(j,f)}return j}
var kyc='cwRadioButtonColors',lyc='cwRadioButtonSports',jyc='runCallbacks45';_=M3.prototype=H3.prototype=new Z;_.gC=function N3(){return RE};_.nd=function R3(){L3()};_.cM={};var RE=sbc(esc,'AsyncLoader45');qnc(O3)();