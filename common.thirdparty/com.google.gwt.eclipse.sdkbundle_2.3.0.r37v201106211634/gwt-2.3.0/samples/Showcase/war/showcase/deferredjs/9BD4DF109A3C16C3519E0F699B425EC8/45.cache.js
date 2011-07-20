function ihb(){}
function dhb(){}
function FIb(b){Dlb(b.c,AIb(b.b))}
function hhb(){var b;while(ehb){b=ehb;ehb=ehb.c;!ehb&&(fhb=null);FIb(b.b)}}
function khb(){ghb=new ihb;ci((ai(),_h),45);!!$stats&&$stats(Ji(iMc,ZAc,-1,-1));ghb.Fd();!!$stats&&$stats(Ji(iMc,zGc,-1,-1))}
function $mb(b){var c,d;c=SL(b.b.Tc(jMc),49);if(c==null){d=KL(u3,{17:1,49:1},1,[yHc,zHc,UHc,VHc]);b.b.Vc(jMc,d);return d}else{return c}}
function _mb(b){var c,d;c=SL(b.b.Tc(kMc),49);if(c==null){d=KL(u3,{17:1,49:1},1,[JIc,KIc,LIc,MIc,NIc,OIc]);b.b.Vc(kMc,d);return d}else{return c}}
function AIb(b){var c,d,e,f,g,i,j;j=new Bhc;zhc(j,new D1b('<b>Select your favorite color:<\/b>'));d=$mb(b.b);for(e=0;e<d.length;++e){c=d[e];f=new eac(oDc,c);x$b(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+ADc,true));zhc(j,f)}zhc(j,new D1b('<br><b>Select your favorite sport:<\/b>'));i=_mb(b.b);for(e=0;e<i.length;++e){g=i[e];f=new eac('sport',g);x$b(f,'cwRadioButton-sport-'+bqc(g,dBc,VAc));e==2&&y$b(f,(voc(),voc(),uoc));zhc(j,f)}return j}
var jMc='cwRadioButtonColors',kMc='cwRadioButtonSports',iMc='runCallbacks45';_=ihb.prototype=dhb.prototype=new Z;_.gC=function jhb(){return nS};_.Fd=function nhb(){hhb()};_.cM={};var nS=Qoc(aGc,'AsyncLoader45');OAc(khb)();