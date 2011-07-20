function kv(){}
function lU(){}
function gU(){}
function mv(){mv=Cnc;lv=new Kkc}
function nv(e,b){var c=e.b;for(var d in c){c.hasOwnProperty(d)&&b.Xc(d)}}
function kU(){var b;while(hU){b=hU;hU=hU.c;!hU&&(iU=null);u8(b.b.b,ilb())}}
function sv(){mv();var b;b=Nz(lv.Sc(cvc),53);if(!b){b=new qv;lv.Uc(cvc,b)}return b}
function ov(d,c){try{typeof $wnd[c]!='object'&&uv(c);d.b=$wnd[c]}catch(b){uv(c)}}
function uv(b){throw new Plc(xpc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function pv(e,b){b=String(b);var c=e.b;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Oc(b);return String(d)}
function nU(){jU=new lU;di((bi(),ai),12);!!$stats&&$stats(Ki(dvc,eoc,-1,-1));jU.nd();!!$stats&&$stats(Ki(dvc,jtc,-1,-1))}
function qv(){this.c='Dictionary userInfo';ov(this,cvc);if(!this.b){throw new Plc("Cannot find JavaScript object with the name 'userInfo'")}}
function ilb(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new u4b;i=new zQb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.N.dir=Loc;i.N.style['textAlign']=hpc;s4b(g,new zQb('<b>This example interacts with the following JavaScript variable:<\/b>'));s4b(g,i);k=new dTb;c=k.k;j=sv();f=(o=new Rkc,nv(j,o),o);b=0;for(e=(p=yw(f.b).c.Nb(),new Ohc(p));e.b.bd();){d=Nz((q=Nz(e.b.cd(),20),q.ed()),1);n=pv(j,d);k.Ye(0,b);r=(s=k.k.b.j.rows[0].cells[b],SSb(k,s,d==null),s);d!=null&&(r.innerHTML=d||aoc,undefined);c.b.Ye(0,b);t=c.b.j.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.Ye(1,b);u=(v=k.k.b.j.rows[1].cells[b],SSb(k,v,n==null),v);n!=null&&(u.innerHTML=n||aoc,undefined);c.b.Ye(1,b);w=c.b.j.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}s4b(g,new zQb('<br><br>'));s4b(g,k);return g}
var dvc='runCallbacks12',cvc='userInfo';_=qv.prototype=kv.prototype=new Z;_.gC=function rv(){return CC};_.Oc=function tv(b){var c;c="Cannot find '"+b+"' in "+this;throw new Plc(c)};_.tS=function vv(){return this.c};_.cM={53:1};_.b=null;_.c=null;var lv;_=lU.prototype=gU.prototype=new Z;_.gC=function mU(){return fD};_.nd=function qU(){kU()};_.cM={};var CC=Xbc(Gsc,cqc),fD=Xbc(Msc,'AsyncLoader12');Vnc(nU)();