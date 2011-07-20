function N_(){}
function I_(){}
function vtb(){}
function ztb(){}
function Dtb(){}
function Ltb(){}
function wtb(b){this.a=b}
function Atb(b){this.a=b}
function Etb(b){this.a=b}
function Mtb(b,c){this.a=b;this.b=c}
function Itb(b){_bb(b.b,ptb(b.a))}
function qZb(b,c){jZb(b,c);b.M.remove(c)}
function TNb(){var b;if(!QNb||VNb()){b=new soc;UNb(b);QNb=b}return QNb}
function M_(){var b;while(J_){b=J_;J_=J_.b;!J_&&(K_=null);Itb(b.a)}}
function VNb(){var b=$doc.cookie;if(b!=RNb){RNb=b;return true}else{return false}}
function WNb(b){b=encodeURIComponent(b);$doc.cookie=b+'=;expires=Fri, 02-Jan-1970 00:00:00 GMT'}
function P_(){L_=new N_;ci((ai(),_h),23);!!$stats&&$stats(Ji(dBc,Prc,-1,-1));L_.Dd();!!$stats&&$stats(Ji(dBc,Uwc,-1,-1))}
function rtb(b){var c,d,e,f;if(b.c.M.options.length<1){k_b(b.a,Lrc);k_b(b.b,Lrc);return}e=b.c.M.selectedIndex;c=mZb(b.c,e);d=(f=TNb(),YC(f._c(c),1));k_b(b.a,c);k_b(b.b,d)}
function qtb(b,c){var d,e,f,g,i,j;b.c.M.options.length=0;g=0;f=iz(TNb());for(e=(i=f.b.Mb(),new wlc(i));e.a.ld();){d=YC((j=YC(e.a.md(),20),j.od()),1);nZb(b.c,d);Mgc(d,c)&&(g=b.c.M.options.length-1)}gOb(new Mtb(b,g))}
function UNb(c){var d=$doc.cookie;if(d&&d!=Lrc){var e=d.split('; ');for(var f=0;f<e.length;++f){var g,i;var j=e[f].indexOf(xsc);if(j==-1){g=e[f];i=Lrc}else{g=e[f].substring(0,j);i=e[f].substring(j+1)}if(SNb){try{g=decodeURIComponent(g)}catch(b){}try{i=decodeURIComponent(i)}catch(b){}}c.bd(g,i)}}}
function ptb(b){var c,d,e,f,g,i,j,k,n;d=new wXb(3,3);b.c=new sZb;c=new bRb('Supprimer');Ud(c.M,cBc,true);d.nf(0,0);f=(g=d.j.a.i.rows[0].cells[0],KWb(d,g,false),g);f.innerHTML='<b><b>Cookies existants:<\/b><\/b>';QWb(d,0,1,b.c);QWb(d,0,2,c);b.a=new u_b;d.nf(1,0);i=(j=d.j.a.i.rows[1].cells[0],KWb(d,j,false),j);i.innerHTML='<b><b>Nom:<\/b><\/b>';QWb(d,1,1,b.a);b.b=new u_b;e=new bRb('Sauvegarder Cookie');Ud(e.M,cBc,true);d.nf(2,0);k=(n=d.j.a.i.rows[2].cells[0],KWb(d,n,false),n);k.innerHTML='<b><b>Valeur:<\/b><\/b>';QWb(d,2,1,b.b);QWb(d,2,2,e);$d(e,new wtb(b),(ro(),ro(),qo));$d(b.c,new Atb(b),(eo(),eo(),co));$d(c,new Etb(b),qo);qtb(b,null);return d}
var dBc='runCallbacks23';_=N_.prototype=I_.prototype=new Z;_.gC=function O_(){return oH};_.Dd=function S_(){M_()};_.cM={};_=wtb.prototype=vtb.prototype=new Z;_.gC=function xtb(){return wM};_.jc=function ytb(b){var c,d,e;d=ak(this.a.a.M,kxc);e=ak(this.a.b.M,kxc);c=new yA(jW(mW((new wA).p.getTime()),nrc));if(d.length<1){$wnd.alert('Vous devez indiquer un nom de cookie');return}XNb(d,e,c);qtb(this.a,d)};_.cM={25:1,140:1};_.a=null;_=Atb.prototype=ztb.prototype=new Z;_.gC=function Btb(){return xM};_.ic=function Ctb(b){rtb(this.a)};_.cM={24:1,140:1};_.a=null;_=Etb.prototype=Dtb.prototype=new Z;_.gC=function Ftb(){return yM};_.jc=function Gtb(b){var c,d;d=this.a.c.M.selectedIndex;if(d>-1&&d<this.a.c.M.options.length){c=mZb(this.a.c,d);WNb(c);qZb(this.a.c,d);rtb(this.a)}};_.cM={25:1,140:1};_.a=null;_=Mtb.prototype=Ltb.prototype=new Z;_.$b=function Ntb(){this.b<this.a.c.M.options.length&&(this.a.c.M.selectedIndex=this.b,undefined);rtb(this.a)};_.gC=function Otb(){return AM};_.cM={113:1};_.a=null;_.b=0;var QNb=null,RNb=null,SNb=true;var oH=Efc(vwc,'AsyncLoader23'),wM=Efc(Dwc,'CwCookies$1'),xM=Efc(Dwc,'CwCookies$2'),yM=Efc(Dwc,'CwCookies$3'),AM=Efc(Dwc,'CwCookies$5');Drc(P_)();