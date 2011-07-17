function w7(){}
function r7(){}
function Yyb(b){Wbb(b.b,Tyb(b.a))}
function v7(){var b;while(s7){b=s7;s7=s7.b;!s7&&(t7=null);Yyb(b.a)}}
function y7(){u7=new w7;ci((ai(),_h),45);!!$stats&&$stats(Ji(oCc,Brc,-1,-1));u7.Dd();!!$stats&&$stats(Ji(oCc,Dwc,-1,-1))}
function sdb(b){var c,d;c=SC(b.a._c(qCc),49);if(c==null){d=KC(IV,{17:1,49:1},1,[Gyc,Hyc,Iyc,Jyc,Kyc,Lyc]);b.a.bd(qCc,d);return d}else{return c}}
function rdb(b){var c,d;c=SC(b.a._c(pCc),49);if(c==null){d=KC(IV,{17:1,49:1},1,['bleu','rouge','jaune','vert']);b.a.bd(pCc,d);return d}else{return c}}
function Tyb(b){var c,d,e,f,g,i,j;j=new Y7b;W7b(j,new cUb('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));d=rdb(b.a);for(e=0;e<d.length;++e){c=d[e];f=new z0b(xtc,c);YQb(f,'cwRadioButton-color-'+c);e==2&&(f.c.disabled=true,Kd(f,Qd(f.M)+Gtc,true));W7b(j,f)}W7b(j,new cUb('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));i=sdb(b.a);for(e=0;e<i.length;++e){g=i[e];f=new z0b('sport',g);YQb(f,'cwRadioButton-sport-'+Egc(g,Jrc,xrc));e==2&&ZQb(f,(Yec(),Yec(),Xec));W7b(j,f)}return j}
var pCc='cwRadioButtonColors',qCc='cwRadioButtonSports',oCc='runCallbacks45';_=w7.prototype=r7.prototype=new Z;_.gC=function x7(){return yI};_.Dd=function B7(){v7()};_.cM={};var yI=rfc(ewc,'AsyncLoader45');qrc(y7)();