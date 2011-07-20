function o7(){}
function j7(){}
function Lyb(b){Jbb(b.c,Gyb(b.b))}
function n7(){var b;while(k7){b=k7;k7=k7.c;!k7&&(l7=null);Lyb(b.b)}}
function q7(){m7=new o7;ci((ai(),_h),45);!!$stats&&$stats(Ji(XBc,drc,-1,-1));m7.Dd();!!$stats&&$stats(Ji(XBc,iwc,-1,-1))}
function fdb(b){var c,d;c=LC(b.b._c(ZBc),49);if(c==null){d=DC(AV,{17:1,49:1},1,[lyc,myc,nyc,oyc,pyc,qyc]);b.b.bd(ZBc,d);return d}else{return c}}
function edb(b){var c,d;c=LC(b.b._c(YBc),49);if(c==null){d=DC(AV,{17:1,49:1},1,['bleu','rouge','jaune','vert']);b.b.bd(YBc,d);return d}else{return c}}
function Gyb(b){var c,d,e,f,g,i,j;j=new H7b;F7b(j,new JTb('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));d=edb(b.b);for(e=0;e<d.length;++e){c=d[e];f=new k0b(ctc,c);DQb(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+ltc,true));F7b(j,f)}F7b(j,new JTb('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));i=fdb(b.b);for(e=0;e<i.length;++e){g=i[e];f=new k0b('sport',g);DQb(f,'cwRadioButton-sport-'+hgc(g,jrc,_qc));e==2&&EQb(f,(Bec(),Bec(),Aec));F7b(j,f)}return j}
var YBc='cwRadioButtonColors',ZBc='cwRadioButtonSports',XBc='runCallbacks45';_=o7.prototype=j7.prototype=new Z;_.gC=function p7(){return tI};_.Dd=function t7(){n7()};_.cM={};var tI=Wec(Lvc,'AsyncLoader45');Uqc(q7)();