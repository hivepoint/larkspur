function Uy(){}
function Py(){}
function p1(){}
function k1(){}
function itb(){}
function mtb(){}
function CXb(){}
function Ty(){Ty=Inc;Sy=new Uy}
function jtb(b,c){this.b=b;this.a=c}
function ntb(b,c){this.b=b;this.a=c}
function btb(b,c){_Qb(c.a,'Selected: '+b.$e()+Uoc+b._e(),false)}
function r1(){n1=new p1;ci((ai(),_h),38);!!$stats&&$stats(Ji(hyc,loc,-1,-1));n1.nd();!!$stats&&$stats(Ji(hyc,mtc,-1,-1))}
function Q5b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;return d.text.length}catch(b){return 0}}
function P5b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;return -d.move(iyc,-65535)}catch(b){return 0}}
function UXb(){var b;QXb();JXb.call(this,(b=$doc.createElement(wrc),b.type='password',b),(!Nvb&&(Nvb=new Ovb),!Jvb&&(Jvb=new Kvb)));this.M[boc]='gwt-PasswordTextBox'}
function atb(b,c){var d,e,f,g;d=new QUb;d.e[Src]=4;f=OUb(d);d.b.appendChild(f);fe(b);K4b(d.j,b);f.appendChild(b.M);he(b,d);if(c){e=new KQb('Selected: 0, 0');$d(b,new jtb(b,e),(kp(),kp(),jp));$d(b,new ntb(b,e),(ro(),ro(),qo));g=OUb(d);d.b.appendChild(g);fe(e);K4b(d.j,e);g.appendChild(e.M);he(e,d)}return d}
function S5b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(iyc,-1);var i=g.text.length;while(i==e&&g.parentElement()==c&&d.compareEndPoints('StartToEnd',g)<=0){f+=2;g.moveEnd(iyc,-1);i=g.text.length}return e+f}catch(b){return 0}}
function R5b(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;var e=d.duplicate();e.moveToElementText(c);e.setEndPoint('EndToStart',d);var f=e.text.length;var g=0;var i=e.duplicate();i.moveEnd(iyc,-1);var j=i.text.length;while(j==f&&i.parentElement()==c){g+=2;i.moveEnd(iyc,-1);j=i.text.length}return f+g}catch(b){return 0}}
function o1(){var b,c,d,e,f,g,i;while(l1){b=l1;l1=l1.b;!l1&&(m1=null);x8(b.a.a,(i=new F4b,i.e[Src]=5,f=new SXb,c4b(f.M,hoc,'cwBasicText-textbox'),gt(f.a,(Ty(),Ty(),Sy)),d=new SXb,c4b(d.M,hoc,'cwBasicText-textbox-disabled'),d.M[Etc]=gyc,ft(d.a),d.M[Atc]=true,D4b(i,new PQb('<b>Normal text box:<\/b>')),D4b(i,atb(f,true)),D4b(i,atb(d,false)),e=new UXb,c4b(e.M,hoc,'cwBasicText-password'),c=new UXb,c4b(c.M,hoc,'cwBasicText-password-disabled'),c.M[Etc]=gyc,ft(c.a),c.M[Atc]=true,D4b(i,new PQb('<br><br><b>Password text box:<\/b>')),D4b(i,atb(e,true)),D4b(i,atb(c,false)),g=new k2b,c4b(g.M,hoc,'cwBasicText-textarea'),g.M.rows=5,D4b(i,new PQb('<br><br><b>Text area:<\/b>')),D4b(i,atb(g,true)),i))}}
var iyc='character',gyc='read only',hyc='runCallbacks38';_=Uy.prototype=Py.prototype=new Qy;_.md=function Vy(b){return ez.test((nz(),b))?(Av(),zv):(Av(),yv)};_.gC=function Wy(){return PC};_.cM={};var Sy;_=p1.prototype=k1.prototype=new Z;_.gC=function q1(){return EE};_.nd=function u1(){o1()};_.cM={};_=jtb.prototype=itb.prototype=new Z;_.gC=function ktb(){return JJ};_.lc=function ltb(b){btb(this.b,this.a)};_.cM={30:1,139:1};_.a=null;_.b=null;_=ntb.prototype=mtb.prototype=new Z;_.gC=function otb(){return KJ};_.jc=function ptb(b){btb(this.b,this.a)};_.cM={25:1,139:1};_.a=null;_.b=null;_=FXb.prototype;_.$e=function LXb(){return P5b(this.M)};_._e=function MXb(){return Q5b(this.M)};_=UXb.prototype=CXb.prototype=new DXb;_.gC=function VXb(){return LN};_.cM={13:1,14:1,15:1,16:1,81:1,83:1};_=j2b.prototype;_.$e=function m2b(){return R5b(this.M)};_._e=function n2b(){return S5b(this.M)};var PC=acc(Osc,'AnyRtlDirectionEstimator'),EE=acc(Psc,'AsyncLoader38'),JJ=acc(_sc,'CwBasicText$2'),KJ=acc(_sc,'CwBasicText$3'),LN=acc(ysc,'PasswordTextBox');_nc(r1)();