function j1(){}
function e1(){}
function $Vb(){}
function tWb(){}
function sWb(){}
function vWb(){}
function zWb(){}
function yWb(){}
function mWb(b){if(b==cWb){return true}rw();return b==fWb}
function nWb(b){if(b==bWb){return true}rw();return b==aWb}
function wWb(b){this.b=(bYb(),YXb).a;this.d=(kYb(),jYb).a;this.a=b}
function oWb(){gWb();hRb.call(this);this.b=(bYb(),YXb);this.c=(kYb(),jYb);this.e[yvc]=0;this.e[zvc]=0}
function kWb(b,c){var d;d=YC(b.K,119);d.b=c.a;!!d.c&&(d.c[wvc]=c.a,undefined)}
function lWb(b,c){var d;d=YC(b.K,119);d.d=c.a;!!d.c&&(d.c.style[xvc]=c.a,undefined)}
function gWb(){gWb=krc;_Vb=new tWb;cWb=new tWb;bWb=new tWb;aWb=new tWb;dWb=new tWb;eWb=new tWb;fWb=new tWb}
function l1(){h1=new j1;ci((ai(),_h),28);!!$stats&&$stats(Ji(zBc,Prc,-1,-1));h1.Dd();!!$stats&&$stats(Ji(zBc,Uwc,-1,-1))}
function hWb(b,c,d){var e;if(d==_Vb){if(c==b.a){return}else if(b.a){throw new Vfc('Only one CENTER widget may be added')}}fe(c);m8b(b.j,c);d==_Vb&&(b.a=c);e=new wWb(d);c.K=e;kWb(c,b.b);lWb(c,b.c);jWb(b);he(c,b)}
function iWb(b,c){var d,e,f,g,i,j,k,n;G7b(b.M,Lrc,c);j=new soc;k=new x8b(b.j);while(k.a<k.b.c-1){d=w8b(k);i=YC(d.K,119).a;f=YC(j._c(i),10);e=!f?1:f.a;g=i==dWb?'north'+e:i==eWb?'south'+e:i==fWb?'west'+e:i==aWb?'east'+e:i==cWb?'linestart'+e:i==bWb?'lineend'+e:fvc;G7b((n=d.M.parentNode,(!n||n.nodeType!=1)&&(n=null),n),c,g);j.bd(i,pgc(e+1))}}
function jWb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u;c=b.d;while(c.children.length>0){c.removeChild(c.children[0])}r=1;f=1;for(j=new x8b(b.j);j.a<j.b.c-1;){e=w8b(j);g=YC(e.K,119).a;g==dWb||g==eWb?++r:(g==aWb||g==fWb||g==cWb||g==bWb)&&++f}s=PC(EV,{17:1},67,r,0);for(i=0;i<r;++i){s[i]=new zWb;s[i].b=jk($doc,uvc);c.appendChild(s[i].b)}n=0;o=f-1;p=0;t=r-1;d=null;for(j=new x8b(b.j);j.a<j.b.c-1;){e=w8b(j);k=YC(e.K,119);u=jk($doc,vvc);k.c=u;k.c[wvc]=k.b;k.c.style[xvc]=k.d;k.c[Zsc]=Lrc;k.c[$sc]=Lrc;if(k.a==dWb){pPb(s[p].b,u,s[p].a);u.appendChild(e.M);u[$xc]=o-n+1;++p}else if(k.a==eWb){pPb(s[t].b,u,s[t].a);u.appendChild(e.M);u[$xc]=o-n+1;--t}else if(k.a==_Vb){d=u}else if(mWb(k.a)){q=s[p];pPb(q.b,u,q.a++);u.appendChild(e.M);u[ABc]=t-p+1;++n}else if(nWb(k.a)){q=s[p];pPb(q.b,u,q.a);u.appendChild(e.M);u[ABc]=t-p+1;--o}}if(b.a){q=s[p];pPb(q.b,d,q.a);d.appendChild(b.a.M)}}
function i1(){var b,c,d,e;while(f1){b=f1;f1=f1.b;!f1&&(g1=null);_bb(b.a.a,(d=new oWb,d.M[Frc]='cw-DockPanel',d.e[yvc]=4,d.b=(bYb(),XXb),hWb(d,new rUb(tBc),(gWb(),dWb)),hWb(d,new rUb(uBc),eWb),hWb(d,new rUb(vBc),aWb),hWb(d,new rUb(wBc),fWb),hWb(d,new rUb(xBc),dWb),hWb(d,new rUb(yBc),eWb),c=new rUb("Voici un <code>panneau de d\xE9filement<\/code> situ\xE9 au centre d'un <code>panneau d'ancrage<\/code>. Si des contenus relativement volumineux sont ins\xE9r\xE9s au milieu de ce panneau \xE0 d\xE9filement et si sa taille est d\xE9finie, il prend la forme d'une zone dot\xE9e d'une fonction de d\xE9filement \xE0 l'int\xE9rieur de la page, sans l'utilisation d'un IFRAME.<br><br>Voici un texte encore plus obscur qui va surtout servir \xE0 faire d\xE9filer cet \xE9l\xE9ment jusqu'en bas de sa zone visible. Sinon, il vous faudra r\xE9duire ce panneau \xE0 une taille minuscule pour pouvoir afficher ces formidables barres de d\xE9filement!"),e=new F2b(c),e.M.style[Zsc]=Xzc,e.M.style[$sc]='100px',hWb(d,e,_Vb),iWb(d,'cwDockPanel'),d))}}
var zBc='runCallbacks28';_=j1.prototype=e1.prototype=new Z;_.gC=function k1(){return BH};_.Dd=function o1(){i1()};_.cM={};_=oWb.prototype=$Vb.prototype=new eRb;_.gC=function pWb(){return yQ};_.tb=function qWb(b){iWb(this,b)};_.Jb=function rWb(b){var c;c=cQb(this,b);if(c){b==this.a&&(this.a=null);jWb(this)}return c};_.cM={13:1,14:1,15:1,16:1,69:1,71:1,131:1};_.a=null;var _Vb,aWb,bWb,cWb,dWb,eWb,fWb;_=tWb.prototype=sWb.prototype=new Z;_.gC=function uWb(){return vQ};_.cM={};_=wWb.prototype=vWb.prototype=new Z;_.gC=function xWb(){return wQ};_.cM={119:1};_.a=null;_.c=null;_=zWb.prototype=yWb.prototype=new Z;_.gC=function AWb(){return xQ};_.cM={67:1};_.a=0;_.b=null;var BH=Efc(vwc,'AsyncLoader28'),yQ=Efc(ewc,'DockPanel'),xQ=Efc(ewc,'DockPanel$TmpRow'),EV=Dfc(Owc,'DockPanel$TmpRow;',xQ),vQ=Efc(ewc,'DockPanel$DockLayoutConstant'),wQ=Efc(ewc,'DockPanel$LayoutData');Drc(l1)();