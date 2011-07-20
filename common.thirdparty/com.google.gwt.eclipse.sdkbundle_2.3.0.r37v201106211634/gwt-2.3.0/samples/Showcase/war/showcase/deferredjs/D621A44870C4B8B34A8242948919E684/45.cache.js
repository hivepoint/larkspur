function D7(){}
function y7(){}
function $yb(b){Ybb(b.c,Vyb(b.b))}
function C7(){var b;while(z7){b=z7;z7=z7.c;!z7&&(A7=null);$yb(b.b)}}
function F7(){B7=new D7;di((bi(),ai),45);!!$stats&&$stats(Ki(DCc,Irc,-1,-1));B7.Dd();!!$stats&&$stats(Ki(DCc,Qwc,-1,-1))}
function udb(b){var c,d;c=ZC(b.b._c(FCc),49);if(c==null){d=RC(PV,{17:1,49:1},1,[Tyc,Uyc,Vyc,Wyc,Xyc,Yyc]);b.b.bd(FCc,d);return d}else{return c}}
function tdb(b){var c,d;c=ZC(b.b._c(ECc),49);if(c==null){d=RC(PV,{17:1,49:1},1,['bleu','rouge','jaune','vert']);b.b.bd(ECc,d);return d}else{return c}}
function Vyb(b){var c,d,e,f,g,i,j;j=new Y7b;W7b(j,new bUb('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));d=tdb(b.b);for(e=0;e<d.length;++e){c=d[e];f=new y0b(Gtc,c);XQb(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+Ptc,true));W7b(j,f)}W7b(j,new bUb('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));i=udb(b.b);for(e=0;e<i.length;++e){g=i[e];f=new y0b('sport',g);XQb(f,'cwRadioButton-sport-'+Mgc(g,Prc,Erc));e==2&&YQb(f,(efc(),efc(),dfc));W7b(j,f)}return j}
var ECc='cwRadioButtonColors',FCc='cwRadioButtonSports',DCc='runCallbacks45';_=D7.prototype=y7.prototype=new Z;_.gC=function E7(){return HI};_.Dd=function I7(){C7()};_.cM={};var HI=zfc(rwc,'AsyncLoader45');xrc(F7)();