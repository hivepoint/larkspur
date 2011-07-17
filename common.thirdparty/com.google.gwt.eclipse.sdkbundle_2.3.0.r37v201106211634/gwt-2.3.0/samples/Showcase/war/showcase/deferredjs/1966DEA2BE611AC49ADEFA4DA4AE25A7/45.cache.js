function p4(){}
function k4(){}
function Mvb(b){K8(b.c,Hvb(b.b))}
function o4(){var b;while(l4){b=l4;l4=l4.c;!l4&&(m4=null);Mvb(b.b)}}
function r4(){n4=new p4;ci((ai(),_h),45);!!$stats&&$stats(Ji(hzc,woc,-1,-1));n4.rd();!!$stats&&$stats(Ji(hzc,Btc,-1,-1))}
function fab(b){var c,d;c=Yz(b.b.Wc(izc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,[Duc,Euc,Zuc,$uc]);b.b.Yc(izc,d);return d}else{return c}}
function gab(b){var c,d;c=Yz(b.b.Wc(jzc),49);if(c==null){d=Qz(BS,{17:1,49:1},1,[Ivc,Jvc,Kvc,Lvc,Mvc,Nvc]);b.b.Yc(jzc,d);return d}else{return c}}
function Hvb(b){var c,d,e,f,g,i,j;j=new I4b;G4b(j,new OQb('<b>Select your favorite color:<\/b>'));d=fab(b.b);for(e=0;e<d.length;++e){c=d[e];f=new lZb(qqc,c);INb(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+Cqc,true));G4b(j,f)}G4b(j,new OQb('<br><b>Select your favorite sport:<\/b>'));i=gab(b.b);for(e=0;e<i.length;++e){g=i[e];f=new lZb('sport',g);INb(f,'cwRadioButton-sport-'+Adc(g,Goc,soc));e==2&&JNb(f,(Ubc(),Ubc(),Tbc));G4b(j,f)}return j}
var izc='cwRadioButtonColors',jzc='cwRadioButtonSports',hzc='runCallbacks45';_=p4.prototype=k4.prototype=new Z;_.gC=function q4(){return rF};_.rd=function u4(){o4()};_.cM={};var rF=ncc(ctc,'AsyncLoader45');loc(r4)();