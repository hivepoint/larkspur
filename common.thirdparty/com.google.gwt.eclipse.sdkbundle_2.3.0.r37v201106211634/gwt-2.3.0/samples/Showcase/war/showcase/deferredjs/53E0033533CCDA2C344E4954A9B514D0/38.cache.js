function ED(){}
function zD(){}
function w6(){}
function r6(){}
function oyb(){}
function syb(){}
function I0b(){}
function DD(){DD=Osc;CD=new ED}
function pyb(b,c){this.b=b;this.a=c}
function tyb(b,c){this.b=b;this.a=c}
function hyb(b,c){fWb(c.a,'\u5DF2\u9009\u62E9: '+b.Bf()+$tc+b.Cf(),false)}
function y6(){u6=new w6;ci((ai(),_h),38);!!$stats&&$stats(Ji(uDc,rtc,-1,-1));u6.Pd();!!$stats&&$stats(Ji(uDc,Dyc,-1,-1))}
function Wac(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;return d.text.length}catch(b){return 0}}
function Vac(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;return -d.move(vDc,-65535)}catch(b){return 0}}
function $0b(){var b;W0b();P0b.call(this,(b=$doc.createElement(Nwc),b.type='password',b),(!TAb&&(TAb=new UAb),!PAb&&(PAb=new QAb)));this.M[htc]='gwt-PasswordTextBox'}
function gyb(b,c){var d,e,f,g;d=new WZb;d.e[hxc]=4;f=UZb(d);d.b.appendChild(f);fe(b);Q9b(d.j,b);f.appendChild(b.M);he(b,d);if(c){e=new QVb('\u5DF2\u9009\u62E9: 0, 0');$d(b,new pyb(b,e),(kp(),kp(),jp));$d(b,new tyb(b,e),(ro(),ro(),qo));g=UZb(d);d.b.appendChild(g);fe(e);Q9b(d.j,e);g.appendChild(e.M);he(e,d)}return d}
function Yac(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(vDc,-1);var i=g.text.length;while(i==e&&g.parentElement()==c&&d.compareEndPoints('StartToEnd',g)<=0){f+=2;g.moveEnd(vDc,-1);i=g.text.length}return e+f}catch(b){return 0}}
function Xac(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;var e=d.duplicate();e.moveToElementText(c);e.setEndPoint('EndToStart',d);var f=e.text.length;var g=0;var i=e.duplicate();i.moveEnd(vDc,-1);var j=i.text.length;while(j==f&&i.parentElement()==c){g+=2;i.moveEnd(vDc,-1);j=i.text.length}return f+g}catch(b){return 0}}
function v6(){var b,c,d,e,f,g,i;while(s6){b=s6;s6=s6.b;!s6&&(t6=null);Edb(b.a.a,(i=new L9b,i.e[hxc]=5,f=new Y0b,i9b(f.M,ntc,'cwBasicText-textbox'),gt(f.a,(DD(),DD(),CD)),d=new Y0b,i9b(d.M,ntc,'cwBasicText-textbox-disabled'),d.M[Vyc]=tDc,ft(d.a),d.M[Ryc]=true,J9b(i,new VVb('<b>\u5E38\u89C4\u6587\u672C\u6846:<\/b>')),J9b(i,gyb(f,true)),J9b(i,gyb(d,false)),e=new $0b,i9b(e.M,ntc,'cwBasicText-password'),c=new $0b,i9b(c.M,ntc,'cwBasicText-password-disabled'),c.M[Vyc]=tDc,ft(c.a),c.M[Ryc]=true,J9b(i,new VVb('<br><br><b>\u5BC6\u7801\u6587\u672C\u6846:<\/b>')),J9b(i,gyb(e,true)),J9b(i,gyb(c,false)),g=new q7b,i9b(g.M,ntc,'cwBasicText-textarea'),g.M.rows=5,J9b(i,new VVb('<br><br><b>\u6587\u672C\u533A\u57DF:<\/b>')),J9b(i,gyb(g,true)),i))}}
var vDc='character',uDc='runCallbacks38',tDc='\u53EA\u8BFB';_=ED.prototype=zD.prototype=new AD;_.Od=function FD(b){return QD.test((ZD(),b))?(Cw(),Bw):(Cw(),Aw)};_.gC=function GD(){return WH};_.cM={};var CD;_=w6.prototype=r6.prototype=new Z;_.gC=function x6(){return LJ};_.Pd=function B6(){v6()};_.cM={};_=pyb.prototype=oyb.prototype=new Z;_.gC=function qyb(){return QO};_.lc=function ryb(b){hyb(this.b,this.a)};_.cM={30:1,140:1};_.a=null;_.b=null;_=tyb.prototype=syb.prototype=new Z;_.gC=function uyb(){return RO};_.jc=function vyb(b){hyb(this.b,this.a)};_.cM={25:1,140:1};_.a=null;_.b=null;_=L0b.prototype;_.Bf=function R0b(){return Vac(this.M)};_.Cf=function S0b(){return Wac(this.M)};_=$0b.prototype=I0b.prototype=new J0b;_.gC=function _0b(){return SS};_.cM={13:1,14:1,15:1,16:1,69:1,71:1};_=p7b.prototype;_.Bf=function s7b(){return Xac(this.M)};_.Cf=function t7b(){return Yac(this.M)};var WH=ghc(dyc,'AnyRtlDirectionEstimator'),LJ=ghc(eyc,'AsyncLoader38'),QO=ghc(qyc,'CwBasicText$2'),RO=ghc(qyc,'CwBasicText$3'),SS=ghc(Pxc,'PasswordTextBox');ftc(y6)();