function OV(){}
function JV(){}
function Rmb(){}
function PWb(){}
function Wmb(b){s8(b.b,Nmb(b.a))}
function OVb(b,c){return VVb(b,c,b.a.b)}
function Smb(b){this.c=b;this.b=N9(this.c.a)}
function KWb(b,c){MWb.call(this,b,false);this.b=c}
function LWb(b,c){MWb.call(this,b,false);IWb(this,c)}
function JWb(b){MWb.call(this,'GWT',true);IWb(this,b)}
function NV(){var b;while(KV){b=KV;KV=KV.b;!KV&&(LV=null);Wmb(b.a)}}
function iWb(){this.a=new hic;this.f=new hic;TVb(this,false,EMb((FWb(),EWb)))}
function VVb(b,c,d){if(d<0||d>b.a.b){throw new lcc}b.o&&(c.M[guc]=2,undefined);NVb(b,d,c.M);$hc(b.a,d,c);return c}
function IWb(b,c){b.d=c;!!b.c&&hWb(b.c,b);if(c){c.M.tabIndex=-1;b.M.setAttribute(wvc,iqc)}else{b.M.setAttribute(wvc,Hrc)}}
function QV(){MV=new OV;ci((ai(),_h),17);!!$stats&&$stats(Ji(lvc,Znc,-1,-1));MV.nd();!!$stats&&$stats(Ji(lvc,Ysc,-1,-1))}
function J9(b){var c,d;c=Gz(b.a.Sc(nvc),49);if(c==null){d=yz(eS,{17:1,49:1},1,['New','Open',ovc,pvc,'Exit']);b.a.Uc(nvc,d);return d}else{return c}}
function I9(b){var c,d;c=Gz(b.a.Sc(mvc),49);if(c==null){d=yz(eS,{17:1,49:1},1,['Undo','Redo','Cut','Copy','Paste']);b.a.Uc(mvc,d);return d}else{return c}}
function M9(b){var c,d;c=Gz(b.a.Sc(svc),49);if(c==null){d=yz(eS,{17:1,49:1},1,['Contents','Fortune Cookie','About GWT']);b.a.Uc(svc,d);return d}else{return c}}
function L9(b){var c,d;c=Gz(b.a.Sc(rvc),49);if(c==null){d=yz(eS,{17:1,49:1},1,['Download','Examples',Spc,"GWT wit' the program"]);b.a.Uc(rvc,d);return d}else{return c}}
function K9(b){var c,d;c=Gz(b.a.Sc(qvc),49);if(c==null){d=yz(eS,{17:1,49:1},1,['Fishing in the desert.txt','How to tame a wild parrot','Idiots Guide to Emu Farms']);b.a.Uc(qvc,d);return d}else{return c}}
function QWb(){var b;this.M=$doc.createElement(zrc);this.M[Qnc]='gwt-MenuItemSeparator';b=$doc.createElement(Tnc);this.M.appendChild(b);b[Qnc]='menuSeparatorInner'}
function N9(b){var c,d;c=Gz(b.a.Sc(tvc),49);if(c==null){d=yz(eS,{17:1,49:1},1,['Thank you for selecting a menu item','A fine selection indeed',"Don't you have anything better to do than select menu items?",'Try something else','this is just a menu!','Another wasted click']);b.a.Uc(tvc,d);return d}else{return c}}
function Nmb(b){var c,d,e,f,g,i,j,k,n,o,p,q,r;p=new Smb(b);o=new iWb;o.b=true;o.M.style[epc]=uvc;o.e=true;r=new jWb(true);q=K9(b.a);for(n=0;n<q.length;++n){MVb(r,new KWb(q[n],p))}e=new jWb(true);e.e=true;MVb(o,new LWb('File',e));f=J9(b.a);for(n=0;n<f.length;++n){if(n==3){OVb(e,new QWb);MVb(e,new LWb(f[3],r));OVb(e,new QWb)}else{MVb(e,new KWb(f[n],p))}}c=new jWb(true);MVb(o,new LWb('Edit',c));d=I9(b.a);for(n=0;n<d.length;++n){MVb(c,new KWb(d[n],p))}g=new jWb(true);MVb(o,new JWb(g));i=L9(b.a);for(n=0;n<i.length;++n){MVb(g,new KWb(i[n],p))}j=new jWb(true);OVb(o,new QWb);MVb(o,new LWb('Help',j));k=M9(b.a);for(n=0;n<k.length;++n){MVb(j,new KWb(k[n],p))}T3b(o.M,Vnc,vvc);gWb(o,vvc);return o}
var wvc='aria-haspopup',vvc='cwMenuBar',mvc='cwMenuBarEditOptions',nvc='cwMenuBarFileOptions',qvc='cwMenuBarFileRecents',rvc='cwMenuBarGWTOptions',svc='cwMenuBarHelpOptions',tvc='cwMenuBarPrompts',lvc='runCallbacks17';_=OV.prototype=JV.prototype=new Z;_.gC=function PV(){return lD};_.nd=function TV(){NV()};_.cM={};_=Smb.prototype=Rmb.prototype=new Z;_.$b=function Tmb(){$wnd.alert(this.b[this.a]);this.a=(this.a+1)%this.b.length};_.gC=function Umb(){return tI};_.cM={112:1};_.a=0;_.c=null;_=iWb.prototype=LVb.prototype;_=LWb.prototype=KWb.prototype=JWb.prototype=GWb.prototype;_=QWb.prototype=PWb.prototype=new Ed;_.gC=function RWb(){return zN};_.cM={81:1,120:1};var lD=Pbc(zsc,'AsyncLoader17'),tI=Pbc(Gsc,'CwMenuBar$1'),zN=Pbc(isc,'MenuItemSeparator');Onc(QV)();