function T7(){}
function O7(){}
function ozb(b){mcb(b.c,jzb(b.b))}
function S7(){var b;while(P7){b=P7;P7=P7.c;!P7&&(Q7=null);ozb(b.b)}}
function V7(){R7=new T7;ci((ai(),_h),45);!!$stats&&$stats(Ji(VCc,$rc,-1,-1));R7.Hd();!!$stats&&$stats(Ji(VCc,gxc,-1,-1))}
function Kdb(b){var c,d;c=iD(b.b.dd(XCc),49);if(c==null){d=aD(dW,{17:1,49:1},1,[jzc,kzc,lzc,mzc,nzc,ozc]);b.b.fd(XCc,d);return d}else{return c}}
function Jdb(b){var c,d;c=iD(b.b.dd(WCc),49);if(c==null){d=aD(dW,{17:1,49:1},1,['bleu','rouge','jaune','vert']);b.b.fd(WCc,d);return d}else{return c}}
function jzb(b){var c,d,e,f,g,i,j;j=new k8b;i8b(j,new qUb('<b>S\xE9lectionnez votre couleur pr\xE9f\xE9r\xE9e:<\/b>'));d=Jdb(b.b);for(e=0;e<d.length;++e){c=d[e];f=new P0b(auc,c);kRb(f,'cwRadioButton-color-'+c);e==2&&(f.d.disabled=true,Kd(f,Qd(f.N)+juc,true));i8b(j,f)}i8b(j,new qUb('<br><b>S\xE9lectionnez votre sport pr\xE9f\xE9r\xE9:<\/b>'));i=Kdb(b.b);for(e=0;e<i.length;++e){g=i[e];f=new P0b('sport',g);kRb(f,'cwRadioButton-sport-'+chc(g,isc,Wrc));e==2&&lRb(f,(wfc(),wfc(),vfc));i8b(j,f)}return j}
var WCc='cwRadioButtonColors',XCc='cwRadioButtonSports',VCc='runCallbacks45';_=T7.prototype=O7.prototype=new Z;_.gC=function U7(){return VI};_.Hd=function Y7(){S7()};_.cM={};var VI=Rfc(Jwc,'AsyncLoader45');Prc(V7)();