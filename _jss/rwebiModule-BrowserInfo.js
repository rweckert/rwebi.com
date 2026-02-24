// rwebiModule-BrowserInfo.js  Created:12/22/2021  Updated:12/31/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('editor');BrowserInfo();
nhw=window.innerWidth-30;
document.getElementById("mHeader").style.width=nhw+"px";
document.getElementById("cc").style.width=nhw+"px";
aceCount('editor');}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: --------------------
function FileOpt(){
gmo=window.document.forminput.soFile.value;
if (gmo=='refresh'){BrowserInfo();}
if (gmo=='copy'){InfoCopy();}
if (gmo=='save'){SaveLocal();}
if (gmo=='saveas'){SaveDownload();}
if (gmo=='export'){InfoExport();}
if (gmo=='storage'){location.hash='lsMenu';}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');eHid('mMenu');}

function StorageOpt(){
gmo=window.document.forminput.soStorage.value;
if (gmo=='refresh'){StorageRefresh();}
if (gmo=='copy'){InfoCopy();}
if (gmo=='clear'){StorageClear();}
if (gmo=='saveas'){eVis('sView');cFocus('sf');}
if (gmo=='export'){InfoExport();}
oReset('soStorage');}

function BrowserInfo(){
c=new Date();
th=c.getHours();tm=c.getMinutes();
if(tm<10){tm="0"+tm;}ts=c.getSeconds();
if(ts<10){ts="0"+ts;}dd=c.getDate();
if(dd<10){dd="0"+dd;}dm=c.getMonth();
if(dm<10){dm="0"+dm;}dy=c.getFullYear();
tts=dm+"-"+dd+"-"+dy+"."+th+":"+tm+":"+ts;
document.all.ts.innerHTML=tts;
gfn="rwebiModule-BrowserInfo.html";
gan="Browser Info";
document.all.an.innerHTML=gfn;
document.all.fn.innerHTML=gan;
gul=document.URL;document.all.ul.innerHTML=gul;
glp=location.pathname;document.all.lp.innerHTML=glp;
glo=location.origin;document.all.lo.innerHTML=glo;
gpt=location.protocol;document.all.pt.innerHTML=gpt;
gdm=document.domain;document.all.dm.innerHTML=gdm;
gbn=navigator.appName;document.all.bn.innerHTML=gbn;
abv=navigator.appVersion;gbv=abv.slice(0,3);document.all.bv.innerHTML=gbv;
gbp=navigator.platform;document.all.bp.innerHTML=gbp;
gpd=screen.pixelDepth;document.all.pd.innerHTML=gpd;
gcd=screen.colorDepth;document.all.cd.innerHTML=gcd;
gbw=window.screen.width;document.all.bw.innerHTML=gbw+"px";
gbh=window.screen.height;document.all.bh.innerHTML=gbh+"px";
giw=window.innerWidth;document.all.iw.innerHTML=giw+"px";
gih=window.innerHeight;document.all.ih.innerHTML=gih+"px";
gow=window.outerWidth;document.all.bow.innerHTML=gow+"px";
goh=window.outerHeight;document.all.boh.innerHTML=goh+"px";
gaw=screen.availHeight;document.all.aw.innerHTML=gaw+"px";
gah=screen.availWidth;document.all.ah.innerHTML=gah+"px";
gpw=document.parent;document.all.pw.innerHTML=gpw;
gop=document.opener;document.all.op.innerHTML=gop;
gsx=window.screenX;document.all.sx.innerHTML=gsx+"px";
gsy=window.screenY;document.all.sy.innerHTML=gsy+"px";
gst=window.screenTop;document.all.st.innerHTML=gst+"px";
gsl=window.screenLeft;document.all.sl.innerHTML=gsl+"px";
if (window.matchMedia) {
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
document.all.cs.innerHTML="Dark Mode";
} else {document.all.cs.innerHTML="Light Mode";}
} else {document.all.cs.innerHTML="Default";}
gls=localStorage['rwebiText'];
if (!gls){editor=ace.edit('editor');editor.session.setValue('No data found in local storage area named rwebiText.');return false;}
if (gls){editor=ace.edit('editor');editor.session.setValue(gls);}}

function InfoCopy(){
gcs=document.getElementById('tData').innerText;
gls=localStorage['rwebiText'];
document.getElementById('tt').value=gcs+gls;
eCopy('v','tt');}

function StorageClear(){
localStorage.setItem('rwebiText','');
alert('Local storage for rwebi successfully cleared.');
document.getElementById('tt').value="";
StorageRefresh();}

function InfoExport(){
gcs=document.getElementById('tData').innerText;
gls=localStorage['rwebiText'];
document.getElementById('tt').value=gcs+gls;
eTab('v','tt');}

function StorageRefresh(){
gls=localStorage['rwebiText'];
editor=ace.edit('editor');editor.session.setValue(gls);}

function SaveDownload(){
gcs=document.getElementById('tData').innerText;
gls=localStorage['rwebiText'];
document.getElementById('tt').value=gcs+gls;
cts=tStamp('r');
fn="rwebi-BrowserInfo-"+cts+".txt";
document.getElementById('sf').value=fn;
eVis('sView');cFocus('sf');}

function SaveLocal(){
gcs=document.getElementById('tData').innerText;
gls=localStorage['rwebiText'];
document.getElementById('tt').value=gcs+gls;
lSave('v','tt');}
