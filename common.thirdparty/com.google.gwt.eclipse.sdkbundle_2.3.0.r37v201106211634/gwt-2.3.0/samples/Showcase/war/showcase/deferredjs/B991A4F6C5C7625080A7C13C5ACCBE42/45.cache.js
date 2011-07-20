function xhb(){}
function shb(){}
function UIb(b){Slb(b.c,PIb(b.b))}
function whb(){var b;while(thb){b=thb;thb=thb.c;!thb&&(uhb=null);UIb(b.b)}}
function zhb(){vhb=new xhb;di((bi(),ai),45);!!$stats&&$stats(Ki(QMc,CBc,-1,-1));vhb.Fd();!!$stats&&$stats(Ki(QMc,fHc,-1,-1))}
function nnb(b){var c,d;c=eM(b.b.Tc(RMc),49);if(c==null){d=YL(J3,{17:1,49:1},1,[eIc,fIc,AIc,BIc]);b.b.Vc(RMc,d);return d}else{return c}}
function onb(b){var c,d;c=eM(b.b.Tc(SMc),49);if(c==null){d=YL(J3,{17:1,49:1},1,[pJc,qJc,rJc,sJc,tJc,uJc]);b.b.Vc(SMc,d);return d}else{return c}}
function PIb(b){var c,d,e,f,g,i,j;j=new Shc;Qhc(j,new X1b('<b>Select your favorite color:<\/b>'));d=nnb(b.b);for(e=0;e<d.length;++e){c=d[e];f=new sac(SDc,c);R$b(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+cEc,true));Qhc(j,f)}Qhc(j,new X1b('<br><b>Select your favorite sport:<\/b>'));i=onb(b.b);for(e=0;e<i.length;++e){g=i[e];f=new sac('sport',g);R$b(f,'cwRadioButton-sport-'+Gqc(g,JBc,yBc));e==2&&S$b(f,($oc(),$oc(),Zoc));Qhc(j,f)}return j}
var RMc='cwRadioButtonColors',SMc='cwRadioButtonSports',QMc='runCallbacks45';_=xhb.prototype=shb.prototype=new Z;_.gC=function yhb(){return BS};_.Fd=function Chb(){whb()};_.cM={};var BS=tpc(IGc,'AsyncLoader45');rBc(zhb)();