// rwebiModule-infoTrace.js Created:12/22/2023 Updated:01/17/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');
nhw=window.innerWidth-30;
document.getElementById("mHeader").style.width=nhw+"px";tStat('cv','1');}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: ---------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='copy'){eCopy('v','cv');}
if (gmo=='clear'){iClear();}
if (gmo=='testa'){dSampleA();}
if (gmo=='testb'){dSampleB();}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function ExportOpt(){
gmo=document.getElementById('soExport').value;
if (gmo=='dcsv'){csvDownload('dload');}
if (gmo=='dtsv'){tblDownload();}
if (gmo=='csave'){csvDownload('slocal');}
if (gmo=='etable'){tblExport();}
oReset('soExport');}

function ResultOpt(){
gmo=document.getElementById('soResult').value;
if (gmo=='lsave'){lSave('v','cv');}
if (gmo=='eraw'){eTab('v','cv');}
if (gmo=='draw'){dFile('v','cv','rwebi-infoTrace-raw.txt');}
if (gmo=='clear'){eClear('h','cv');}
oReset('soResult');}

function iAPI(){
pt=document.getElementById('ipa').value;
gAPI(pt);}

function gAPI(pt){
$.ajax({
url:pt,
type:'GET',
dataType:'html',
success:function(data,status,xhr)
{$("#json").html(data);},
error:function(xhr,status,error)
{$("#json").html("Error: The api server request did not return in a timely manner. Request returned in error from: "+pt+" Status: "+status+" Error: "+error+".");
}});
gtm=document.getElementById('tm').value;
setTimeout(wAPI,gtm);}

function wAPI(){
x=document.getElementById("json").innerText;
document.getElementById("tt").innerHTML=x;
document.getElementById("cv").innerHTML=x;
ipInfo();}

function ipInfo(){
//iClear();
gjs=document.getElementById("tt").innerHTML;
gsp=gjs.split('\n');
// fl info:
gll=gsp[0];
res=gll.replace(/fl/g,'');
rfl=res.replace(/\=/g,'');
document.all.fl.innerHTML=rfl;
// h info:
gll=gsp[1];
res=gll.replace(/h/g,'');
rsource=res.replace(/\=/g,'');
document.all.source.innerHTML=rsource;
// ip info:
gll=gsp[2];
res=gll.replace(/ip/g,'');
rip=res.replace(/\=/g,'');
document.all.ip.innerHTML=rip;
// ts info:
gll=gsp[3];
res=gll.replace(/ts/g,'');
rtspeak=res.replace(/\=/g,'');
document.all.tspeak.innerHTML=rtspeak;
// visit scheme:
gll=gsp[4];
res=gll.replace(/visit_scheme/g,'');
rvscheme=res.replace(/\=/g,'');
document.all.vscheme.innerHTML=rvscheme;
// visit scheme:
gll=gsp[5];
res=gll.replace(/usg/g,'');
rusg=res.replace(/\=/g,'');
document.all.using.innerHTML=rusg;
// colo info:
gll=gsp[6];
res=gll.replace(/colo/g,'');
rcolo=res.replace(/\=/g,'');
document.all.colo.innerHTML=rcolo;
// sliver info:
gll=gsp[7];
res=gll.replace(/sliver/g,'');
rsliver=res.replace(/\=/g,'');
document.all.sliver.innerHTML=rsliver;
// http info:
gll=gsp[8];
rhttp=gll.replace(/http\=/g,'');
document.all.http.innerHTML=rhttp;
// loc info:
gll=gsp[9];
res=gll.replace(/loc/g,'');
rloc=res.replace(/\=/g,'');
document.all.loc.innerHTML=rloc;
// tls info:
gll=gsp[10];
res=gll.replace(/tls/g,'');
rtls=res.replace(/\=/g,'');
document.all.tls.innerHTML=rtls;
// sni info:
gll=gsp[11];
res=gll.replace(/sni/g,'');
rsni=res.replace(/\=/g,'');
document.all.sni.innerHTML=rsni;
// warp info:
gll=gsp[12];
res=gll.replace(/warp/g,'');
rwarp=res.replace(/\=/g,'');
document.all.warp.innerHTML=rwarp;
// gateway info:
gll=gsp[13];
res=gll.replace(/gateway/g,'');
rgateway=res.replace(/\=/g,'');
document.all.gateway.innerHTML=rgateway;
// rbi info:
gll=gsp[14];
res=gll.replace(/rbi/g,'');
rrbi=res.replace(/\=/g,'');
document.all.rbi.innerHTML=rrbi;
// kex info:
gll=gsp[15];
res=gll.replace(/kex/g,'');
rkex=res.replace(/\=/g,'');
document.all.kex.innerHTML=rkex;
iDate('i','dstamp');
mTime('i','tstamp');}

function tblExport(){
gtd=document.all.rView.innerText;
document.getElementById('ut').value=gtd;
eTab('v','ut');}

function tblDownload(){
gtd=document.all.rView.innerHTML;
document.getElementById('ut').value=gtd;
dFile('v','ut','rwebi-itrace-table.txt');}

function csvDownload(us){
gfl=document.all.fl.innerHTML;
gsource=document.all.source.innerHTML;
gip=document.all.ip.innerHTML;
gtspeak=document.all.tspeak.innerHTML;
gvscheme=document.all.vscheme.innerHTML;
gusing=document.all.using.innerHTML;
gcolo=document.all.colo.innerHTML;
gsliver=document.all.sliver.innerHTML;
ghttp=document.all.http.innerHTML;
gloc=document.all.loc.innerHTML;
gtls=document.all.tls.innerHTML;
gsni=document.all.sni.innerHTML;
gwarp=document.all.warp.innerHTML;
ggateway=document.all.gateway.innerHTML;
grbi=document.all.rbi.innerHTML;
gkex=document.all.kex.innerHTML;
gdstamp=document.all.dstamp.innerHTML;
gtstamp=document.all.tstamp.innerHTML;
tt=gfl+","+gsource+","+gip+","+gtspeak+","+gvscheme+","+gusing+","+gcolo+","+gsliver+","+ghttp+","+gloc+","+gtls+","+gsni+","+gwarp+","+ggateway+","+grbi+","+gkex+","+gdstamp+","+gtstamp;
document.getElementById('ut').value=tt;
if (us=="slocal"){lSave('v','ut');}
if (us=="dload"){dFile('v','ut','rwebi-infoTrace-csv.txt');}}

function iClear(){
document.all.fl.innerHTML="";
document.all.source.innerHTML="";
document.all.ip.innerHTML="";
document.all.tspeak.innerHTML="";
document.all.vscheme.innerHTML="";
document.all.using.innerHTML="";
document.all.colo.innerHTML="";
document.all.sliver.innerHTML="";
document.all.http.innerHTML="";
document.all.loc.innerHTML="";
document.all.tls.innerHTML="";
document.all.sni.innerHTML="";
document.all.warp.innerHTML="";
document.all.gateway.innerHTML="";
document.all.rbi.innerHTML="";
document.all.kex.innerHTML="";
document.all.dstamp.innerHTML="";
document.all.tstamp.innerHTML="";}

function dSampleA(){
dt=unescape('f%6c%3D162f94%0A%68%3D1%2e1%2e1%2e1%0A%69%70%3D73%2e136%2e95%2e107%0A%74%73%3D1736316509%2e855%0A%76%69%73%69%74%5f%73c%68e%6de%3D%68%74%74%70%73%0A%75a%67%3D%4d%6f%7a%69%6c%6ca%2f5%2e0%20%28%57%69%6ed%6f%77%73%20%4e%54%2010%2e0%3B%20%57%69%6e64%3B%20%7864%29%20A%70%70%6ce%57eb%4b%69%74%2f537%2e36%20%28%4b%48%54%4d%4c%2C%20%6c%69%6be%20%47ec%6b%6f%29%20C%68%72%6f%6de%2f131%2e0%2e0%2e0%20%53afa%72%69%2f537%2e36%0Ac%6f%6c%6f%3D%49A%48%0A%73%6c%69%76e%72%3D%6e%6f%6ee%0A%68%74%74%70%3D%68%74%74%70%2f2%0A%6c%6fc%3D%55%53%0A%74%6c%73%3D%54%4c%53%761%2e3%0A%73%6e%69%3D%6fff%0A%77a%72%70%3D%6fff%0A%67a%74e%77a%79%3D%6fff%0A%72b%69%3D%6fff%0A%6be%78%3D%5825519%4d%4c%4bE%4d768%0A');
document.getElementById("tt").innerHTML=dt;
document.getElementById("cv").innerHTML=dt;
ipInfo();}

function dSampleB(){
dt=unescape('f%6c%3D447f197%0A%68%3D1%2e1%2e1%2e1%0A%69%70%3D75%2e51%2e51%2e186%0A%74%73%3D1770758278%2e636%0A%76%69%73%69%74%5f%73c%68e%6de%3D%68%74%74%70%73%0A%75a%67%3D%4d%6f%7a%69%6c%6ca%2f5%2e0%20%28%5811%3B%20%4c%69%6e%75%78%20%7886%5f64%29%20A%70%70%6ce%57eb%4b%69%74%2f537%2e36%20%28%4b%48%54%4d%4c%2C%20%6c%69%6be%20%47ec%6b%6f%29%20C%68%72%6f%6de%2f143%2e0%2e0%2e0%20%53afa%72%69%2f537%2e36%0Ac%6f%6c%6f%3D%4cA%58%0A%73%6c%69%76e%72%3D%6e%6f%6ee%0A%68%74%74%70%3D%68%74%74%70%2f2%0A%6c%6fc%3D%55%53%0A%74%6c%73%3D%54%4c%53%761%2e3%0A%73%6e%69%3D%6fff%0A%77a%72%70%3D%6fff%0A%67a%74e%77a%79%3D%6fff%0A%72b%69%3D%6fff%0A%6be%78%3D%5825519%4d%4c%4bE%4d768');
document.getElementById("tt").innerHTML=dt;
document.getElementById("cv").innerHTML=dt;
ipInfo();}
