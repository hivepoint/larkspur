function mw(){}
function sZ(){}
function nZ(){}
function ow(){ow=Isc;nw=new Qpc}
function pw(e,b){var c=e.b;for(var d in c){c.hasOwnProperty(d)&&b.kd(d)}}
function rZ(){var b;while(oZ){b=oZ;oZ=oZ.c;!oZ&&(pZ=null);Bdb(b.b.b,pqb())}}
function qw(d,c){try{typeof $wnd[c]!='object'&&ww(c);d.b=$wnd[c]}catch(b){ww(c)}}
function uw(){ow();var b;b=xE(nw.ed(hAc),83);if(!b){b=new sw;nw.gd(hAc,b)}return b}
function rw(e,b){b=String(b);var c=e.b;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Nc(b);return String(d)}
function ww(b){throw new Vqc(Euc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function uZ(){qZ=new sZ;di((bi(),ai),12);!!$stats&&$stats(Ki(iAc,ktc,-1,-1));qZ.Pd();!!$stats&&$stats(Ki(iAc,zyc,-1,-1))}
function sw(){this.c='Dictionary userInfo';qw(this,hAc);if(!this.b){throw new Vqc("Cannot find JavaScript object with the name 'userInfo'")}}
function pqb(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new A9b;i=new FVb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.N.dir=Rtc;i.N.style['textAlign']=ouc;y9b(g,new FVb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));y9b(g,i);k=new jYb;c=k.k;j=uw();f=(o=new Xpc,pw(j,o),o);b=0;for(e=(p=Az(f.b).c.Nb(),new Umc(p));e.b.qd();){d=xE((q=xE(e.b.rd(),20),q.td()),1);n=rw(j,d);k.zf(0,b);r=(s=k.k.b.j.rows[0].cells[b],YXb(k,s,d==null),s);d!=null&&(r.innerHTML=d||gtc,undefined);c.b.zf(0,b);t=c.b.j.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.zf(1,b);u=(v=k.k.b.j.rows[1].cells[b],YXb(k,v,n==null),v);n!=null&&(u.innerHTML=n||gtc,undefined);c.b.zf(1,b);w=c.b.j.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}y9b(g,new FVb('<br><br>'));y9b(g,k);return g}
var iAc='runCallbacks12',hAc='userInfo';_=sw.prototype=mw.prototype=new Z;_.gC=function tw(){return yH};_.Nc=function vw(b){var c;c="Cannot find '"+b+"' in "+this;throw new Vqc(c)};_.tS=function xw(){return this.c};_.cM={83:1};_.b=null;_.c=null;var nw;_=sZ.prototype=nZ.prototype=new Z;_.gC=function tZ(){return mI};_.Pd=function xZ(){rZ()};_.cM={};var yH=bhc(Wxc,'Dictionary'),mI=bhc(ayc,'AsyncLoader12');_sc(uZ)();