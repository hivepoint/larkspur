function vhb(){}
function qhb(){}
function XIb(b){Vlb(b.b,SIb(b.a))}
function uhb(){var b;while(rhb){b=rhb;rhb=rhb.b;!rhb&&(shb=null);XIb(b.a)}}
function xhb(){thb=new vhb;ci((ai(),_h),45);!!$stats&&$stats(Ji(RMc,JBc,-1,-1));thb.Fd();!!$stats&&$stats(Ji(RMc,jHc,-1,-1))}
function qnb(b){var c,d;c=dM(b.a.Tc(SMc),49);if(c==null){d=XL(H3,{17:1,49:1},1,[iIc,jIc,EIc,FIc]);b.a.Vc(SMc,d);return d}else{return c}}
function rnb(b){var c,d;c=dM(b.a.Tc(TMc),49);if(c==null){d=XL(H3,{17:1,49:1},1,[tJc,uJc,vJc,wJc,xJc,yJc]);b.a.Vc(TMc,d);return d}else{return c}}
function SIb(b){var c,d,e,f,g,i,j;j=new bic;_hc(j,new l2b('<b>Select your favorite color:<\/b>'));d=qnb(b.a);for(e=0;e<d.length;++e){c=d[e];f=new Iac(YDc,c);f_b(f,'cwRadioButton-color-'+c);e==2&&(f.c.disabled=true,Kd(f,Qd(f.M)+iEc,true));_hc(j,f)}_hc(j,new l2b('<br><b>Select your favorite sport:<\/b>'));i=rnb(b.a);for(e=0;e<i.length;++e){g=i[e];f=new Iac('sport',g);f_b(f,'cwRadioButton-sport-'+Lqc(g,RBc,FBc));e==2&&g_b(f,(dpc(),dpc(),cpc));_hc(j,f)}return j}
var SMc='cwRadioButtonColors',TMc='cwRadioButtonSports',RMc='runCallbacks45';_=vhb.prototype=qhb.prototype=new Z;_.gC=function whb(){return yS};_.Fd=function Ahb(){uhb()};_.cM={};var yS=ypc(MGc,'AsyncLoader45');xBc(xhb)();