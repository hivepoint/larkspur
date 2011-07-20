function Wv(){}
function NX(){}
function IX(){}
function Yv(){Yv=krc;Xv=new soc}
function Zv(e,b){var c=e.a;for(var d in c){c.hasOwnProperty(d)&&b.ed(d)}}
function _v(e,b){b=String(b);var c=e.a;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Ic(b);return String(d)}
function cw(){Yv();var b;b=YC(Xv._c(Fyc),83);if(!b){b=new aw;Xv.bd(Fyc,b)}return b}
function MX(){var b;while(JX){b=JX;JX=JX.b;!JX&&(KX=null);_bb(b.a.a,Pob())}}
function $v(d,c){try{typeof $wnd[c]!='object'&&ew(c);d.a=$wnd[c]}catch(b){ew(c)}}
function ew(b){throw new xpc(gtc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function PX(){LX=new NX;ci((ai(),_h),12);!!$stats&&$stats(Ji(Gyc,Prc,-1,-1));LX.Dd();!!$stats&&$stats(Ji(Gyc,Uwc,-1,-1))}
function aw(){this.b='Dictionary userInfo';$v(this,Fyc);if(!this.a){throw new xpc("Cannot find JavaScript object with the name 'userInfo'")}}
function Pob(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new h8b;i=new rUb('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.M.dir=usc;i.M.style['textAlign']=Tsc;f8b(g,new rUb('<b>Cet exemple interagit avec le JavaScript variable suivant:<\/b>'));f8b(g,i);k=new XWb;c=k.j;j=cw();f=(o=new zoc,Zv(j,o),o);b=0;for(e=(p=iz(f.a).b.Mb(),new wlc(p));e.a.ld();){d=YC((q=YC(e.a.md(),20),q.od()),1);n=_v(j,d);k.nf(0,b);r=(s=k.j.a.i.rows[0].cells[b],KWb(k,s,d==null),s);d!=null&&(r.innerHTML=d||Lrc,undefined);c.a.nf(0,b);t=c.a.i.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.nf(1,b);u=(v=k.j.a.i.rows[1].cells[b],KWb(k,v,n==null),v);n!=null&&(u.innerHTML=n||Lrc,undefined);c.a.nf(1,b);w=c.a.i.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}f8b(g,new rUb('<br><br>'));f8b(g,k);return g}
var Gyc='runCallbacks12',Fyc='userInfo';_=aw.prototype=Wv.prototype=new Z;_.gC=function bw(){return UF};_.Ic=function dw(b){var c;c="Cannot find '"+b+"' in "+this;throw new xpc(c)};_.tS=function fw(){return this.b};_.cM={83:1};_.a=null;_.b=null;var Xv;_=NX.prototype=IX.prototype=new Z;_.gC=function OX(){return GG};_.Dd=function SX(){MX()};_.cM={};var UF=Efc(pwc,'Dictionary'),GG=Efc(vwc,'AsyncLoader12');Drc(PX)();