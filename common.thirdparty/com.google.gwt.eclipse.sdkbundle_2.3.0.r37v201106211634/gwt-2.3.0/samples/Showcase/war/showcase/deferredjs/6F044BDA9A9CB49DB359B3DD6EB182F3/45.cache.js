function B7(){}
function w7(){}
function bzb(b){_bb(b.b,Yyb(b.a))}
function A7(){var b;while(x7){b=x7;x7=x7.b;!x7&&(y7=null);bzb(b.a)}}
function D7(){z7=new B7;ci((ai(),_h),45);!!$stats&&$stats(Ji(ECc,Prc,-1,-1));z7.Dd();!!$stats&&$stats(Ji(ECc,Uwc,-1,-1))}
function xdb(b){var c,d;c=YC(b.a._c(GCc),49);if(c==null){d=QC(NV,{17:1,49:1},1,[Xyc,Yyc,Zyc,$yc,_yc,azc]);b.a.bd(GCc,d);return d}else{return c}}
function wdb(b){var c,d;c=YC(b.a._c(FCc),49);if(c==null){d=QC(NV,{17:1,49:1},1,['bleu','rouge','jaune','vert']);b.a.bd(FCc,d);return d}else{return c}}
function Yyb(b){var c,d,e,f,g,i,j;j=new h8b;f8b(j,new rUb('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));d=wdb(b.a);for(e=0;e<d.length;++e){c=d[e];f=new O0b(Mtc,c);lRb(f,'cwRadioButton-color-'+c);e==2&&(f.c.disabled=true,Kd(f,Qd(f.M)+Vtc,true));f8b(j,f)}f8b(j,new rUb('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));i=xdb(b.a);for(e=0;e<i.length;++e){g=i[e];f=new O0b('sport',g);lRb(f,'cwRadioButton-sport-'+Rgc(g,Xrc,Lrc));e==2&&mRb(f,(jfc(),jfc(),ifc));f8b(j,f)}return j}
var FCc='cwRadioButtonColors',GCc='cwRadioButtonSports',ECc='runCallbacks45';_=B7.prototype=w7.prototype=new Z;_.gC=function C7(){return EI};_.Dd=function G7(){A7()};_.cM={};var EI=Efc(vwc,'AsyncLoader45');Drc(D7)();