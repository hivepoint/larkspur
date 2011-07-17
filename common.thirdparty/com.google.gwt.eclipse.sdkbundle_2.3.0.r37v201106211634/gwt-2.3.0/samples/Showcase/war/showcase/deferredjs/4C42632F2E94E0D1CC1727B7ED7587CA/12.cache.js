function Qv(){}
function IX(){}
function DX(){}
function Sv(){Sv=Zqc;Rv=new foc}
function Tv(e,b){var c=e.a;for(var d in c){c.hasOwnProperty(d)&&b.ed(d)}}
function Vv(e,b){b=String(b);var c=e.a;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Ic(b);return String(d)}
function Yv(){Sv();var b;b=SC(Rv._c(oyc),83);if(!b){b=new Wv;Rv.bd(oyc,b)}return b}
function HX(){var b;while(EX){b=EX;EX=EX.b;!EX&&(FX=null);Wbb(b.a.a,Kob())}}
function Uv(d,c){try{typeof $wnd[c]!='object'&&$v(c);d.a=$wnd[c]}catch(b){$v(c)}}
function $v(b){throw new kpc(Tsc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function KX(){GX=new IX;ci((ai(),_h),12);!!$stats&&$stats(Ji(pyc,Brc,-1,-1));GX.Dd();!!$stats&&$stats(Ji(pyc,Dwc,-1,-1))}
function Wv(){this.b='Dictionary userInfo';Uv(this,oyc);if(!this.a){throw new kpc("Cannot find JavaScript object with the name 'userInfo'")}}
function Kob(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new Y7b;i=new cUb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.M.dir=esc;i.M.style['textAlign']=Dsc;W7b(g,new cUb('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));W7b(g,i);k=new IWb;c=k.j;j=Yv();f=(o=new moc,Tv(j,o),o);b=0;for(e=(p=cz(f.a).b.Mb(),new jlc(p));e.a.ld();){d=SC((q=SC(e.a.md(),20),q.od()),1);n=Vv(j,d);k.nf(0,b);r=(s=k.j.a.i.rows[0].cells[b],vWb(k,s,d==null),s);d!=null&&(r.innerHTML=d||xrc,undefined);c.a.nf(0,b);t=c.a.i.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.nf(1,b);u=(v=k.j.a.i.rows[1].cells[b],vWb(k,v,n==null),v);n!=null&&(u.innerHTML=n||xrc,undefined);c.a.nf(1,b);w=c.a.i.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}W7b(g,new cUb('<br><br>'));W7b(g,k);return g}
var pyc='runCallbacks12',oyc='userInfo';_=Wv.prototype=Qv.prototype=new Z;_.gC=function Xv(){return OF};_.Ic=function Zv(b){var c;c="Cannot find '"+b+"' in "+this;throw new kpc(c)};_.tS=function _v(){return this.b};_.cM={83:1};_.a=null;_.b=null;var Rv;_=IX.prototype=DX.prototype=new Z;_.gC=function JX(){return AG};_.Dd=function NX(){HX()};_.cM={};var OF=rfc($vc,'Dictionary'),AG=rfc(ewc,'AsyncLoader12');qrc(KX)();