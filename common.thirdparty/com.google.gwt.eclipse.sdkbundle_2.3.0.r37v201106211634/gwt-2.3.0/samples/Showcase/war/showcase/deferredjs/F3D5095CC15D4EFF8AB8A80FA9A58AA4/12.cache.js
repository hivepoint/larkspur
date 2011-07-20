function fw(){}
function lZ(){}
function gZ(){}
function hw(){hw=Bsc;gw=new Jpc}
function iw(e,b){var c=e.a;for(var d in c){c.hasOwnProperty(d)&&b.kd(d)}}
function kw(e,b){b=String(b);var c=e.a;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Nc(b);return String(d)}
function nw(){hw();var b;b=qE(gw.ed(Wzc),83);if(!b){b=new lw;gw.gd(Wzc,b)}return b}
function kZ(){var b;while(hZ){b=hZ;hZ=hZ.b;!hZ&&(iZ=null);zdb(b.a.a,nqb())}}
function jw(d,c){try{typeof $wnd[c]!='object'&&pw(c);d.a=$wnd[c]}catch(b){pw(c)}}
function pw(b){throw new Oqc(vuc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function nZ(){jZ=new lZ;ci((ai(),_h),12);!!$stats&&$stats(Ji(Xzc,dtc,-1,-1));jZ.Pd();!!$stats&&$stats(Ji(Xzc,myc,-1,-1))}
function lw(){this.b='Dictionary userInfo';jw(this,Wzc);if(!this.a){throw new Oqc("Cannot find JavaScript object with the name 'userInfo'")}}
function nqb(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new A9b;i=new GVb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.M.dir=Itc;i.M.style['textAlign']=fuc;y9b(g,new GVb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));y9b(g,i);k=new kYb;c=k.j;j=nw();f=(o=new Qpc,iw(j,o),o);b=0;for(e=(p=tz(f.a).b.Mb(),new Nmc(p));e.a.qd();){d=qE((q=qE(e.a.rd(),20),q.td()),1);n=kw(j,d);k.zf(0,b);r=(s=k.j.a.i.rows[0].cells[b],ZXb(k,s,d==null),s);d!=null&&(r.innerHTML=d||_sc,undefined);c.a.zf(0,b);t=c.a.i.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.zf(1,b);u=(v=k.j.a.i.rows[1].cells[b],ZXb(k,v,n==null),v);n!=null&&(u.innerHTML=n||_sc,undefined);c.a.zf(1,b);w=c.a.i.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}y9b(g,new GVb('<br><br>'));y9b(g,k);return g}
var Xzc='runCallbacks12',Wzc='userInfo';_=lw.prototype=fw.prototype=new Z;_.gC=function mw(){return pH};_.Nc=function ow(b){var c;c="Cannot find '"+b+"' in "+this;throw new Oqc(c)};_.tS=function qw(){return this.b};_.cM={83:1};_.a=null;_.b=null;var gw;_=lZ.prototype=gZ.prototype=new Z;_.gC=function mZ(){return dI};_.Pd=function qZ(){kZ()};_.cM={};var pH=Vgc(Jxc,'Dictionary'),dI=Vgc(Pxc,'AsyncLoader12');Usc(nZ)();