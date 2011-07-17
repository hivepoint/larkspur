function eC(){}
function _B(){}
function T4(){}
function O4(){}
function Mwb(){}
function Qwb(){}
function e_b(){}
function dC(){dC=krc;cC=new eC}
function Nwb(b,c){this.b=b;this.a=c}
function Rwb(b,c){this.b=b;this.a=c}
function Fwb(b,c){DUb(c.a,'S\xE9lectionn\xE9: '+b.pf()+wsc+b.qf(),false)}
function V4(){R4=new T4;ci((ai(),_h),38);!!$stats&&$stats(Ji(TBc,Prc,-1,-1));R4.Dd();!!$stats&&$stats(Ji(TBc,Uwc,-1,-1))}
function s9b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;return d.text.length}catch(b){return 0}}
function r9b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;return -d.move(UBc,-65535)}catch(b){return 0}}
function w_b(){var b;s_b();l_b.call(this,(b=$doc.createElement(cvc),b.type='password',b),(!pzb&&(pzb=new qzb),!lzb&&(lzb=new mzb)));this.M[Frc]='gwt-PasswordTextBox'}
function Ewb(b,c){var d,e,f,g;d=new sYb;d.e[yvc]=4;f=qYb(d);d.b.appendChild(f);fe(b);m8b(d.j,b);f.appendChild(b.M);he(b,d);if(c){e=new mUb('S\xE9lectionn\xE9: 0, 0');$d(b,new Nwb(b,e),(kp(),kp(),jp));$d(b,new Rwb(b,e),(ro(),ro(),qo));g=qYb(d);d.b.appendChild(g);fe(e);m8b(d.j,e);g.appendChild(e.M);he(e,d)}return d}
function u9b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(UBc,-1);var i=g.text.length;while(i==e&&g.parentElement()==c&&d.compareEndPoints('StartToEnd',g)<=0){f+=2;g.moveEnd(UBc,-1);i=g.text.length}return e+f}catch(b){return 0}}
function t9b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;var e=d.duplicate();e.moveToElementText(c);e.setEndPoint('EndToStart',d);var f=e.text.length;var g=0;var i=e.duplicate();i.moveEnd(UBc,-1);var j=i.text.length;while(j==f&&i.parentElement()==c){g+=2;i.moveEnd(UBc,-1);j=i.text.length}return f+g}catch(b){return 0}}
function S4(){var b,c,d,e,f,g,i;while(P4){b=P4;P4=P4.b;!P4&&(Q4=null);_bb(b.a.a,(i=new h8b,i.e[yvc]=5,f=new u_b,G7b(f.M,Lrc,'cwBasicText-textbox'),gt(f.a,(dC(),dC(),cC)),d=new u_b,G7b(d.M,Lrc,'cwBasicText-textbox-disabled'),d.M[kxc]=SBc,ft(d.a),d.M[gxc]=true,f8b(i,new rUb('<b>Zone de texte normale:<\/b>')),f8b(i,Ewb(f,true)),f8b(i,Ewb(d,false)),e=new w_b,G7b(e.M,Lrc,'cwBasicText-password'),c=new w_b,G7b(c.M,Lrc,'cwBasicText-password-disabled'),c.M[kxc]=SBc,ft(c.a),c.M[gxc]=true,f8b(i,new rUb('<br><br><b>Zone de texte &laquo;mot de passe&raquo;:<\/b>')),f8b(i,Ewb(e,true)),f8b(i,Ewb(c,false)),g=new O5b,G7b(g.M,Lrc,'cwBasicText-textarea'),g.M.rows=5,f8b(i,new rUb('<br><br><b>Zone de texte:<\/b>')),f8b(i,Ewb(g,true)),i))}}
var UBc='character',SBc='lecture seulement',TBc='runCallbacks38';_=eC.prototype=_B.prototype=new aC;_.Cd=function fC(b){return qC.test((zC(),b))?(lw(),kw):(lw(),jw)};_.gC=function gC(){return rG};_.cM={};var cC;_=T4.prototype=O4.prototype=new Z;_.gC=function U4(){return gI};_.Dd=function Y4(){S4()};_.cM={};_=Nwb.prototype=Mwb.prototype=new Z;_.gC=function Owb(){return lN};_.lc=function Pwb(b){Fwb(this.b,this.a)};_.cM={30:1,140:1};_.a=null;_.b=null;_=Rwb.prototype=Qwb.prototype=new Z;_.gC=function Swb(){return mN};_.jc=function Twb(b){Fwb(this.b,this.a)};_.cM={25:1,140:1};_.a=null;_.b=null;_=h_b.prototype;_.pf=function n_b(){return r9b(this.M)};_.qf=function o_b(){return s9b(this.M)};_=w_b.prototype=e_b.prototype=new f_b;_.gC=function x_b(){return nR};_.cM={13:1,14:1,15:1,16:1,69:1,71:1};_=N5b.prototype;_.pf=function Q5b(){return t9b(this.M)};_.qf=function R5b(){return u9b(this.M)};var rG=Efc(uwc,'AnyRtlDirectionEstimator'),gI=Efc(vwc,'AsyncLoader38'),lN=Efc(Hwc,'CwBasicText$2'),mN=Efc(Hwc,'CwBasicText$3'),nR=Efc(ewc,'PasswordTextBox');Drc(V4)();