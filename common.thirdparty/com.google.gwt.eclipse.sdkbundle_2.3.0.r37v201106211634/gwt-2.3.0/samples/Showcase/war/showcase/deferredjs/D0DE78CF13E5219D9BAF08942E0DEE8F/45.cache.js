function qhb(){}
function lhb(){}
function SIb(b){Qlb(b.b,NIb(b.a))}
function phb(){var b;while(mhb){b=mhb;mhb=mhb.b;!mhb&&(nhb=null);SIb(b.a)}}
function shb(){ohb=new qhb;ci((ai(),_h),45);!!$stats&&$stats(Ji(BMc,vBc,-1,-1));ohb.Fd();!!$stats&&$stats(Ji(BMc,UGc,-1,-1))}
function lnb(b){var c,d;c=ZL(b.a.Tc(CMc),49);if(c==null){d=RL(C3,{17:1,49:1},1,[THc,UHc,nIc,oIc]);b.a.Vc(CMc,d);return d}else{return c}}
function mnb(b){var c,d;c=ZL(b.a.Tc(DMc),49);if(c==null){d=RL(C3,{17:1,49:1},1,[cJc,dJc,eJc,fJc,gJc,hJc]);b.a.Vc(DMc,d);return d}else{return c}}
function NIb(b){var c,d,e,f,g,i,j;j=new Shc;Qhc(j,new Y1b('<b>Select your favorite color:<\/b>'));d=lnb(b.a);for(e=0;e<d.length;++e){c=d[e];f=new tac(JDc,c);S$b(f,'cwRadioButton-color-'+c);e==2&&(f.c.disabled=true,Kd(f,Qd(f.M)+VDc,true));Qhc(j,f)}Qhc(j,new Y1b('<br><b>Select your favorite sport:<\/b>'));i=mnb(b.a);for(e=0;e<i.length;++e){g=i[e];f=new tac('sport',g);S$b(f,'cwRadioButton-sport-'+yqc(g,DBc,rBc));e==2&&T$b(f,(Soc(),Soc(),Roc));Qhc(j,f)}return j}
var CMc='cwRadioButtonColors',DMc='cwRadioButtonSports',BMc='runCallbacks45';_=qhb.prototype=lhb.prototype=new Z;_.gC=function rhb(){return sS};_.Fd=function vhb(){phb()};_.cM={};var sS=lpc(vGc,'AsyncLoader45');kBc(shb)();