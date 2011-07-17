function Nhb(){}
function Ihb(){}
function iJb(b){gmb(b.c,dJb(b.b))}
function Mhb(){var b;while(Jhb){b=Jhb;Jhb=Jhb.c;!Jhb&&(Khb=null);iJb(b.b)}}
function Phb(){Lhb=new Nhb;ci((ai(),_h),45);!!$stats&&$stats(Ji(gNc,UBc,-1,-1));Lhb.Jd();!!$stats&&$stats(Ji(gNc,xHc,-1,-1))}
function Dnb(b){var c,d;c=pM(b.b.Xc(hNc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,[wIc,xIc,SIc,TIc]);b.b.Zc(hNc,d);return d}else{return c}}
function Enb(b){var c,d;c=pM(b.b.Xc(iNc),49);if(c==null){d=hM(Z3,{17:1,49:1},1,[HJc,IJc,JJc,KJc,LJc,MJc]);b.b.Zc(iNc,d);return d}else{return c}}
function dJb(b){var c,d,e,f,g,i,j;j=new eic;cic(j,new k2b('<b>Select your favorite color:<\/b>'));d=Dnb(b.b);for(e=0;e<d.length;++e){c=d[e];f=new Jac(mEc,c);e_b(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+yEc,true));cic(j,f)}cic(j,new k2b('<br><b>Select your favorite sport:<\/b>'));i=Enb(b.b);for(e=0;e<i.length;++e){g=i[e];f=new Jac('sport',g);e_b(f,'cwRadioButton-sport-'+Yqc(g,cCc,QBc));e==2&&f_b(f,(qpc(),qpc(),ppc));cic(j,f)}return j}
var hNc='cwRadioButtonColors',iNc='cwRadioButtonSports',gNc='runCallbacks45';_=Nhb.prototype=Ihb.prototype=new Z;_.gC=function Ohb(){return PS};_.Jd=function Shb(){Mhb()};_.cM={};var PS=Lpc($Gc,'AsyncLoader45');JBc(Phb)();