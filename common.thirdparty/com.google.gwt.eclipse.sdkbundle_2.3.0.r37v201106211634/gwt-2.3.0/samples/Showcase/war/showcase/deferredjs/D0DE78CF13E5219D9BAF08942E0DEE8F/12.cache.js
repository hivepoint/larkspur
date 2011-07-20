function Zw(){}
function C5(){}
function x5(){}
function _w(){_w=TAc;$w=new _xc}
function ax(e,b){var c=e.a;for(var d in c){c.hasOwnProperty(d)&&b.Yc(d)}}
function cx(e,b){b=String(b);var c=e.a;var d=c[b];(d==null||!c.hasOwnProperty(b))&&e.Ac(b);return String(d)}
function fx(){_w();var b;b=ZL($w.Tc(KIc),83);if(!b){b=new dx;$w.Vc(KIc,b)}return b}
function B5(){var b;while(y5){b=y5;y5=y5.b;!y5&&(z5=null);Qlb(b.a.a,Eyb())}}
function bx(d,c){try{typeof $wnd[c]!='object'&&hx(c);d.a=$wnd[c]}catch(b){hx(c)}}
function hx(b){throw new ezc(NCc+b+"' is not a JavaScript object and cannot be used as a Dictionary")}
function E5(){A5=new C5;ci((ai(),_h),12);!!$stats&&$stats(Ji(LIc,vBc,-1,-1));A5.Fd();!!$stats&&$stats(Ji(LIc,UGc,-1,-1))}
function dx(){this.b='Dictionary userInfo';bx(this,KIc);if(!this.a){throw new ezc("Cannot find JavaScript object with the name 'userInfo'")}}
function Eyb(){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w;g=new Shc;i=new Y1b('<pre>var userInfo = {\n&nbsp;&nbsp;name: "Amelie Crutcher",\n&nbsp;&nbsp;timeZone: "EST",\n&nbsp;&nbsp;userID: "123",\n&nbsp;&nbsp;lastLogOn: "2/2/2006"\n};<\/pre>\n');i.M.dir=$Bc;i.M.style['textAlign']=xCc;Qhc(g,new Y1b('<b>This example interacts with the following JavaScript variable:<\/b>'));Qhc(g,i);k=new C4b;c=k.j;j=fx();f=(o=new gyc,ax(j,o),o);b=0;for(e=(p=VE(f.a).b.Mb(),new dvc(p));e.a.cd();){d=ZL((q=ZL(e.a.dd(),20),q.fd()),1);n=cx(j,d);k.pf(0,b);r=(s=k.j.a.i.rows[0].cells[b],p4b(k,s,d==null),s);d!=null&&(r.innerHTML=d||rBc,undefined);c.a.pf(0,b);t=c.a.i.rows[0].cells[b];Ud(t,'cw-DictionaryExample-header',true);k.pf(1,b);u=(v=k.j.a.i.rows[1].cells[b],p4b(k,v,n==null),v);n!=null&&(u.innerHTML=n||rBc,undefined);c.a.pf(1,b);w=c.a.i.rows[1].cells[b];Ud(w,'cw-DictionaryExample-data',true);++b}Qhc(g,new Y1b('<br><br>'));Qhc(g,k);return g}
var LIc='runCallbacks12',KIc='userInfo';_=dx.prototype=Zw.prototype=new Z;_.gC=function ex(){return hP};_.Ac=function gx(b){var c;c="Cannot find '"+b+"' in "+this;throw new ezc(c)};_.tS=function ix(){return this.b};_.cM={83:1};_.a=null;_.b=null;var $w;_=C5.prototype=x5.prototype=new Z;_.gC=function D5(){return uQ};_.Fd=function H5(){B5()};_.cM={};var hP=lpc(pGc,RDc),uQ=lpc(vGc,'AsyncLoader12');kBc(E5)();