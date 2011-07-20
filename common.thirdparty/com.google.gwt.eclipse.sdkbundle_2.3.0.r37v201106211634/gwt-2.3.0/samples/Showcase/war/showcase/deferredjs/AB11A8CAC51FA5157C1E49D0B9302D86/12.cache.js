function $v(){}
function $Y(){}
function dZ(){}
function aw(){aw=dsc;_v=new lpc}
function bw(e,b){var c=e.b;for(var d in c){c.hasOwnProperty(d)&&b.kd(d)}}
function cZ(){var b;while(_Y){b=_Y;_Y=_Y.c;!_Y&&(aZ=null);mdb(b.b.b,aqb())}}
function gw(){aw();var b;b=jE(_v.ed(Bzc),83);if(!b){b=new ew;_v.gd(Bzc,b)}return b}
function cw(d,c){try{typeof $wnd[c]!='object'&&iw(c);d.b=$wnd[c]}catch(b){iw(c)}}
function iw(b){throw new qqc(auc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function dw(e,b){b=String(b);var c=e.b;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Nc(b);return String(d)}
function fZ(){bZ=new dZ;ci((ai(),_h),12);!!$stats&&$stats(Ji(Czc,Hsc,-1,-1));bZ.Pd();!!$stats&&$stats(Ji(Czc,Txc,-1,-1))}
function ew(){this.c='Dictionary userInfo';cw(this,Bzc);if(!this.b){throw new qqc("Cannot find JavaScript object with the name 'userInfo'")}}
function aqb(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new j9b;i=new lVb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.N.dir=ntc;i.N.style['textAlign']=Mtc;h9b(g,new lVb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));h9b(g,i);k=new XXb;c=k.k;j=gw();f=(o=new spc,bw(j,o),o);b=0;for(e=(p=mz(f.b).c.Nb(),new pmc(p));e.b.qd();){d=jE((q=jE(e.b.rd(),20),q.td()),1);n=dw(j,d);k.zf(0,b);r=(s=k.k.b.j.rows[0].cells[b],KXb(k,s,d==null),s);d!=null&&(r.innerHTML=d||Dsc,undefined);c.b.zf(0,b);t=c.b.j.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.zf(1,b);u=(v=k.k.b.j.rows[1].cells[b],KXb(k,v,n==null),v);n!=null&&(u.innerHTML=n||Dsc,undefined);c.b.zf(1,b);w=c.b.j.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}h9b(g,new lVb('<br><br>'));h9b(g,k);return g}
var Czc='runCallbacks12',Bzc='userInfo';_=ew.prototype=$v.prototype=new Z;_.gC=function fw(){return kH};_.Nc=function hw(b){var c;c="Cannot find '"+b+"' in "+this;throw new qqc(c)};_.tS=function jw(){return this.c};_.cM={83:1};_.b=null;_.c=null;var _v;_=dZ.prototype=$Y.prototype=new Z;_.gC=function eZ(){return $H};_.Pd=function iZ(){cZ()};_.cM={};var kH=ygc(oxc,'Dictionary'),$H=ygc(uxc,'AsyncLoader12');wsc(fZ)();