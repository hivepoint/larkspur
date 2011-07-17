function Jv(){}
function AX(){}
function vX(){}
function Lv(){Lv=Bqc;Kv=new Jnc}
function Mv(e,b){var c=e.b;for(var d in c){c.hasOwnProperty(d)&&b.ed(d)}}
function zX(){var b;while(wX){b=wX;wX=wX.c;!wX&&(xX=null);Jbb(b.b.b,xob())}}
function Rv(){Lv();var b;b=LC(Kv._c(Vxc),83);if(!b){b=new Pv;Kv.bd(Vxc,b)}return b}
function Nv(d,c){try{typeof $wnd[c]!='object'&&Tv(c);d.b=$wnd[c]}catch(b){Tv(c)}}
function Tv(b){throw new Ooc(ysc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function Ov(e,b){b=String(b);var c=e.b;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Ic(b);return String(d)}
function CX(){yX=new AX;ci((ai(),_h),12);!!$stats&&$stats(Ji(Wxc,drc,-1,-1));yX.Dd();!!$stats&&$stats(Ji(Wxc,iwc,-1,-1))}
function Pv(){this.c='Dictionary userInfo';Nv(this,Vxc);if(!this.b){throw new Ooc("Cannot find JavaScript object with the name 'userInfo'")}}
function xob(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new H7b;i=new JTb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.N.dir=Lrc;i.N.style['textAlign']=isc;F7b(g,new JTb('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));F7b(g,i);k=new tWb;c=k.k;j=Rv();f=(o=new Qnc,Mv(j,o),o);b=0;for(e=(p=Xy(f.b).c.Nb(),new Nkc(p));e.b.ld();){d=LC((q=LC(e.b.md(),20),q.od()),1);n=Ov(j,d);k.nf(0,b);r=(s=k.k.b.j.rows[0].cells[b],gWb(k,s,d==null),s);d!=null&&(r.innerHTML=d||_qc,undefined);c.b.nf(0,b);t=c.b.j.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.nf(1,b);u=(v=k.k.b.j.rows[1].cells[b],gWb(k,v,n==null),v);n!=null&&(u.innerHTML=n||_qc,undefined);c.b.nf(1,b);w=c.b.j.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}F7b(g,new JTb('<br><br>'));F7b(g,k);return g}
var Wxc='runCallbacks12',Vxc='userInfo';_=Pv.prototype=Jv.prototype=new Z;_.gC=function Qv(){return JF};_.Ic=function Sv(b){var c;c="Cannot find '"+b+"' in "+this;throw new Ooc(c)};_.tS=function Uv(){return this.c};_.cM={83:1};_.b=null;_.c=null;var Kv;_=AX.prototype=vX.prototype=new Z;_.gC=function BX(){return vG};_.Dd=function FX(){zX()};_.cM={};var JF=Wec(Fvc,'Dictionary'),vG=Wec(Lvc,'AsyncLoader12');Uqc(CX)();