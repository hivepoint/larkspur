function lw(){}
function lZ(){}
function qZ(){}
function nw(){nw=Osc;mw=new Wpc}
function ow(e,b){var c=e.a;for(var d in c){c.hasOwnProperty(d)&&b.kd(d)}}
function qw(e,b){b=String(b);var c=e.a;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Nc(b);return String(d)}
function tw(){nw();var b;b=wE(mw.ed(lAc),83);if(!b){b=new rw;mw.gd(lAc,b)}return b}
function pZ(){var b;while(mZ){b=mZ;mZ=mZ.b;!mZ&&(nZ=null);Edb(b.a.a,sqb())}}
function pw(d,c){try{typeof $wnd[c]!='object'&&vw(c);d.a=$wnd[c]}catch(b){vw(c)}}
function vw(b){throw new _qc(Kuc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function sZ(){oZ=new qZ;ci((ai(),_h),12);!!$stats&&$stats(Ji(mAc,rtc,-1,-1));oZ.Pd();!!$stats&&$stats(Ji(mAc,Dyc,-1,-1))}
function rw(){this.b='Dictionary userInfo';pw(this,lAc);if(!this.a){throw new _qc("Cannot find JavaScript object with the name 'userInfo'")}}
function sqb(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new L9b;i=new VVb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.M.dir=Ytc;i.M.style['textAlign']=vuc;J9b(g,new VVb('<b>\u8FD9\u4E2A\u4F8B\u5B50\u4F7F\u7528\u4E0B\u5217Javascript\u7684\u53D8\u91CF\uFF1A <\/b>'));J9b(g,i);k=new zYb;c=k.j;j=tw();f=(o=new bqc,ow(j,o),o);b=0;for(e=(p=zz(f.a).b.Mb(),new $mc(p));e.a.qd();){d=wE((q=wE(e.a.rd(),20),q.td()),1);n=qw(j,d);k.zf(0,b);r=(s=k.j.a.i.rows[0].cells[b],mYb(k,s,d==null),s);d!=null&&(r.innerHTML=d||ntc,undefined);c.a.zf(0,b);t=c.a.i.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.zf(1,b);u=(v=k.j.a.i.rows[1].cells[b],mYb(k,v,n==null),v);n!=null&&(u.innerHTML=n||ntc,undefined);c.a.zf(1,b);w=c.a.i.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}J9b(g,new VVb('<br><br>'));J9b(g,k);return g}
var mAc='runCallbacks12',lAc='userInfo';_=rw.prototype=lw.prototype=new Z;_.gC=function sw(){return vH};_.Nc=function uw(b){var c;c="Cannot find '"+b+"' in "+this;throw new _qc(c)};_.tS=function ww(){return this.b};_.cM={83:1};_.a=null;_.b=null;var mw;_=qZ.prototype=lZ.prototype=new Z;_.gC=function rZ(){return jI};_.Pd=function vZ(){pZ()};_.cM={};var vH=ghc($xc,'Dictionary'),jI=ghc(eyc,'AsyncLoader12');ftc(sZ)();