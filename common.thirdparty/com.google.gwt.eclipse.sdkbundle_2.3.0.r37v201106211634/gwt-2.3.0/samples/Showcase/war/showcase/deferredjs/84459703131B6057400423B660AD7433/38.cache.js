function lL(){}
function gL(){}
function Neb(){}
function Ieb(){}
function GGb(){}
function KGb(){}
function $8b(){}
function kL(){kL=eBc;jL=new lL}
function HGb(b,c){this.b=b;this.a=c}
function LGb(b,c){this.b=b;this.a=c}
function zGb(b,c){x2b(c.a,'Selected: '+b.rf()+qCc+b.sf(),false)}
function Peb(){Leb=new Neb;ci((ai(),_h),38);!!$stats&&$stats(Ji(hMc,JBc,-1,-1));Leb.Fd();!!$stats&&$stats(Ji(hMc,jHc,-1,-1))}
function mjc(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;return d.text.length}catch(b){return 0}}
function ljc(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;return -d.move(iMc,-65535)}catch(b){return 0}}
function q9b(){var b;m9b();f9b.call(this,(b=$doc.createElement(sFc),b.type='password',b),(!jJb&&(jJb=new kJb),!fJb&&(fJb=new gJb)));this.M[zBc]='gwt-PasswordTextBox'}
function yGb(b,c){var d,e,f,g;d=new m6b;d.e[OFc]=4;f=k6b(d);d.b.appendChild(f);fe(b);gic(d.j,b);f.appendChild(b.M);he(b,d);if(c){e=new g2b('Selected: 0, 0');$d(b,new HGb(b,e),(kp(),kp(),jp));$d(b,new LGb(b,e),(ro(),ro(),qo));g=k6b(d);d.b.appendChild(g);fe(e);gic(d.j,e);g.appendChild(e.M);he(e,d)}return d}
function ojc(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return 0;var e=d.text.length;var f=0;var g=d.duplicate();g.moveEnd(iMc,-1);var i=g.text.length;while(i==e&&g.parentElement()==c&&d.compareEndPoints('StartToEnd',g)<=0){f+=2;g.moveEnd(iMc,-1);i=g.text.length}return e+f}catch(b){return 0}}
function njc(c){try{var d=c.document.selection.createRange();if(d.parentElement()!==c)return -1;var e=d.duplicate();e.moveToElementText(c);e.setEndPoint('EndToStart',d);var f=e.text.length;var g=0;var i=e.duplicate();i.moveEnd(iMc,-1);var j=i.text.length;while(j==f&&i.parentElement()==c){g+=2;i.moveEnd(iMc,-1);j=i.text.length}return f+g}catch(b){return 0}}
function Meb(){var b,c,d,e,f,g,i;while(Jeb){b=Jeb;Jeb=Jeb.b;!Jeb&&(Keb=null);Vlb(b.a.a,(i=new bic,i.e[OFc]=5,f=new o9b,Ahc(f.M,FBc,'cwBasicText-textbox'),gt(f.a,(kL(),kL(),jL)),d=new o9b,Ahc(d.M,FBc,'cwBasicText-textbox-disabled'),d.M[BHc]=gMc,ft(d.a),d.M[xHc]=true,_hc(i,new l2b('<b>Normal text box:<\/b>')),_hc(i,yGb(f,true)),_hc(i,yGb(d,false)),e=new q9b,Ahc(e.M,FBc,'cwBasicText-password'),c=new q9b,Ahc(c.M,FBc,'cwBasicText-password-disabled'),c.M[BHc]=gMc,ft(c.a),c.M[xHc]=true,_hc(i,new l2b('<br><br><b>Password text box:<\/b>')),_hc(i,yGb(e,true)),_hc(i,yGb(c,false)),g=new Ifc,Ahc(g.M,FBc,'cwBasicText-textarea'),g.M.rows=5,_hc(i,new l2b('<br><br><b>Text area:<\/b>')),_hc(i,yGb(g,true)),i))}}
var iMc='character',gMc='read only',hMc='runCallbacks38';_=lL.prototype=gL.prototype=new hL;_.Ed=function mL(b){return xL.test((GL(),b))?(ux(),tx):(ux(),sx)};_.gC=function nL(){return lQ};_.cM={};var jL;_=Neb.prototype=Ieb.prototype=new Z;_.gC=function Oeb(){return aS};_.Fd=function Seb(){Meb()};_.cM={};_=HGb.prototype=GGb.prototype=new Z;_.gC=function IGb(){return fX};_.lc=function JGb(b){zGb(this.b,this.a)};_.cM={30:1,140:1};_.a=null;_.b=null;_=LGb.prototype=KGb.prototype=new Z;_.gC=function MGb(){return gX};_.jc=function NGb(b){zGb(this.b,this.a)};_.cM={25:1,140:1};_.a=null;_.b=null;_=b9b.prototype;_.rf=function h9b(){return ljc(this.M)};_.sf=function i9b(){return mjc(this.M)};_=q9b.prototype=$8b.prototype=new _8b;_.gC=function r9b(){return h_};_.cM={13:1,14:1,15:1,16:1,69:1,71:1};_=Hfc.prototype;_.rf=function Kfc(){return njc(this.M)};_.sf=function Lfc(){return ojc(this.M)};var lQ=ypc(LGc,'AnyRtlDirectionEstimator'),aS=ypc(MGc,'AsyncLoader38'),fX=ypc(YGc,'CwBasicText$2'),gX=ypc(YGc,'CwBasicText$3'),h_=ypc(vGc,'PasswordTextBox');xBc(Peb)();