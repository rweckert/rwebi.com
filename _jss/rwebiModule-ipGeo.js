// rwebiModule-ipGeo.js Created:12/22/2023 Updated:01/17/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');mLoad();iMap();
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;cih=window.innerHeight-goh;
nwv=window.innerWidth-15;
document.getElementById("mHeader").style.width=nwv+"px";
document.getElementById("mc").style.width=nwv-12+"px";
//document.getElementById("cc").style.width=nwv+"px";
tStat('cv','1');}

// Module Resize: ----------------------
function mResize(){
rFlex('cc');
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;cih=window.innerHeight-goh;
nwv=window.innerWidth-15;
document.getElementById("mHeader").style.width=nwv+"px";
document.getElementById("mc").style.width=nwv-12+"px";
//document.getElementById("cc").style.width=nwv+"px";
tStat('cv','1');}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: ---------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='csave'){csvDownload('slocal');}
if (gmo=='cdload'){csvDownload('dload');}
if (gmo=='tdload'){tblDownload();}
if (gmo=='texport'){tblExport();}
if (gmo=='reset'){mReset();}
if (gmo=='tclear'){iClear();}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function ResultOpt(){
gmo=document.getElementById('soResult').value;
if (gmo=='save'){lSave('v','cv');}
if (gmo=='export'){eTab('v','cv');}
if (gmo=='csvsave'){csvDownload('slocal');}
if (gmo=='csvsaveas'){csvDownload('dload');}
if (gmo=='tdload'){tblDownload();}
if (gmo=='texport'){tblExport();}
if (gmo=='reset'){mReset();}
if (gmo=='clear'){iClear();}
oReset('o1');}

function oOpt(){
gmo=document.getElementById('o2').value;
if (gmo=='lsave'){lSave('v','cv');}
if (gmo=='rexport'){eTab('v','cv');}
if (gmo=='rdownload'){dFile('v','cv','rwebi-ipgeo.txt');}
if (gmo=='cdata'){eClear('h','cv');}
oReset('o2');}

function iAPI(){
p1=unescape('%68%74%74%70%73%3A%2f%2f%69%70%69%6ef%6f%2e%69%6f%2f');
p2=document.getElementById('ipa').value;
p3=unescape('%2f%67e%6f');
pt=p1+p2+p3;
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
//alert(gtm);
setTimeout(wAPI,'1000');}

function wAPI(){
x=document.getElementById("json").innerText;
document.getElementById("tt").innerHTML=x;
document.getElementById("cv").innerHTML=x;
aFigure();}

function aFigure(){
gjs=document.getElementById("tt").innerHTML;
gsp=gjs.split('\n');
gll=gsp[2];
gsq=gll.split('\:');
gsr=(gsq[0]);
res=gsr.replace(/\"/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
if (res=="city"){jpInfoA();}
if (res=="hostname"){jpInfoB();}}

function jpInfoA(){
iClear();
gjs=document.getElementById("tt").innerHTML;
// Longitude Latitude:
gsp=gjs.split('\n');
gll=gsp[5]; 
res=gll.replace(/\"/g,'');
res=res.replace(/loc/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/,\n/g,'\n');
loc=res.split(',');res="";
rlat=(loc[0]);rlat=rlat.replace(/ /g,'');
rlon=(loc[1]);rlon=rlon.replace(/ /g,'');
document.all.lat.innerHTML=rlat;
document.all.lon.innerHTML=rlon;
// ip address
gll=gsp[1];
res=gll.replace(/\"/g,'');
res=res.replace(/ip/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/ /g,'');
rip=res.replace(/,/g,'');
document.all.ip.innerHTML=rip;
// city
gll=gsp[2];
res=gll.replace(/\"/g,'');
res=res.replace(/city/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
rcity=res.replace(/,/g,'');
document.all.city.innerHTML=rcity;
// state
gll=gsp[3];
res=gll.replace(/\"/g,'');
res=res.replace(/region/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
rstate=res.replace(/,/g,'');
document.all.state.innerHTML=rstate;
// postal
gll=gsp[7];
res=gll.replace(/\"/g,'');
res=res.replace(/postal/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
rpostal=res.replace(/,/g,'');
document.all.postal.innerHTML=rpostal;
// timezone
gll=gsp[8];
res=gll.replace(/\"/g,'');
res=res.replace(/timezone/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\_/g,' ');
res=res.replace(/\s\s+/g,'\n').trim();
rtzone=res.replace(/,/g,'');
document.all.tzone.innerHTML=rtzone;
// systemid
gll=gsp[6];
res=gll.replace(/\"/g,'');
res=res.replace(/org/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
res=res.replace(/,/g,'');
res=res.split(' ');
rsysid=(res[0]);
document.all.sysid.innerHTML=rsysid;
// organization
gll=gsp[6];
res=gll.replace(/\"/g,'');
res=res.replace(/org/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
res=res.replace(/,/g,'');
rorg=res.split(" ").slice(1).join(" ");
document.all.org.innerHTML=rorg;
iDate('i','dstamp');
mTime('i','tstamp');
document.all.host.innerHTML="n/a";
pMark();}

function jpInfoB(){
iClear();
gjs=document.getElementById("tt").innerHTML;
// Host Name
gsp=gjs.split('\n');
gll=gsp[2];
res=gll.replace(/\"/g,'');
res=res.replace(/loc/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/,\n/g,'\n');
rhost=res.replace(/\s\s+/g,'\n').trim();
document.all.host.innerHTML=rhost;
// Longitude Latitude:
gsp=gjs.split('\n');
gll=gsp[6]; 
res=gll.replace(/\"/g,'');
res=res.replace(/loc/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/,\n/g,'\n');
loc=res.split(',');res="";
rlat=(loc[0]);rlat=rlat.replace(/ /g,'');
rlon=(loc[1]);rlon=rlon.replace(/ /g,'');
document.all.lat.innerHTML=rlat;
document.all.lon.innerHTML=rlon;
// ip address
gll=gsp[1];
res=gll.replace(/\"/g,'');
res=res.replace(/ip/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/ /g,'');
rip=res.replace(/,/g,'');
document.all.ip.innerHTML=rip;
// city
gll=gsp[3];
res=gll.replace(/\"/g,'');
res=res.replace(/city/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
rcity=res.replace(/,/g,'');
document.all.city.innerHTML=rcity;
// state
gll=gsp[4];
res=gll.replace(/\"/g,'');
res=res.replace(/region/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
rstate=res.replace(/,/g,'');
document.all.state.innerHTML=rstate;
// postal
gll=gsp[8];
res=gll.replace(/\"/g,'');
res=res.replace(/postal/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
rpostal=res.replace(/,/g,'');
document.all.postal.innerHTML=rpostal;
// timezone
gll=gsp[9];
res=gll.replace(/\"/g,'');
res=res.replace(/timezone/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\_/g,' ');
res=res.replace(/\s\s+/g,'\n').trim();
rtzone=res.replace(/,/g,'');
document.all.tzone.innerHTML=rtzone;
// systemid
gll=gsp[7];
res=gll.replace(/\"/g,'');
res=res.replace(/org/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
res=res.replace(/,/g,'');
res=res.split(' ');
rsysid=(res[0]);
document.all.sysid.innerHTML=rsysid;
// organization
gll=gsp[7];
res=gll.replace(/\"/g,'');
res=res.replace(/org/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\s\s+/g,'\n').trim();
res=res.replace(/,/g,'');
rorg=res.split(" ").slice(1).join(" ");
document.all.org.innerHTML=rorg;
iDate('i','dstamp');
mTime('i','tstamp');
pMark();}

function iMap(){ // initial map
// Creating map options
var mapOptions = {center: [37.09024, -95.712891],zoom: 2}
// Creating a map object
var map = new L.map('map', mapOptions);
// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// Adding layer to the map
map.addLayer(layer);}

function pMark(){ // plot mark
glat=document.all.lon.innerHTML;
glon=document.all.lat.innerHTML;
document.getElementById('mv').innerHTML="<div id='map' style='width: 100%; height: 100%;'></div>";
osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution='Map data Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer=new L.TileLayer(osmUrl, {maxZoom: 45, attribution: osmAttribution});
map=new L.Map('map');
map.setView(new L.LatLng(glon,glat), 9 );
map.addLayer(osmLayer);
// Creating a marker
var marker = L.marker([glon, glat]);
// Adding marker to the map
marker.addTo(map);}

function tblExport(){
gtd=document.getElementById('rView').innerText;
document.getElementById('ut').value=gtd;
eTab('v','ut');}

function tblDownload(){
gtd=document.getElementById('rView').innerText;
document.getElementById('ut').value=gtd;
dFile('v','ut','rwebi-ipGeo.txt');}

function csvDownload(us){
ghost=document.all.host.innerHTML;
gip=document.all.ip.innerHTML;
glat=document.all.lat.innerHTML;
glon=document.all.lon.innerHTML;
gcity=document.all.city.innerHTML;
gstate=document.all.state.innerHTML;
gpostal=document.all.postal.innerHTML;
gsysid=document.all.sysid.innerHTML;
gorg=document.all.org.innerHTML;
gdstamp=document.all.dstamp.innerHTML;
gtstamp=document.all.tstamp.innerHTML;
gtzone=document.all.tzone.innerHTML;
tt=ghost+","+gip+","+glat+","+glon+","+gcity+","+gstate+","+gpostal+","+gsysid+","+gpostal+","+gsysid+","+gorg+","+gtzone+","+gdstamp+","+gtstamp;
document.getElementById('ut').value=tt;
if (us=="slocal"){lSave('v','ut');}
if (us=="dload"){dFile('v','ut','rwebi-ipGeo-csv.txt');}}

function iClear(){
document.all.host.innerHTML="";
document.all.ip.innerHTML="";
document.all.lat.innerHTML="";
document.all.lon.innerHTML="";
document.all.city.innerHTML="";
document.all.state.innerHTML="";
document.all.postal.innerHTML="";
document.all.sysid.innerHTML="";
document.all.org.innerHTML="";
document.all.dstamp.innerHTML="";
document.all.tstamp.innerHTML="";
document.all.tzone.innerHTML="";}

function dSampleA(){
dt=unescape('%7B%0A%20%20%22%69%70%22%3A%20%22161%2e185%2e160%2e93%22%2C%0A%20%20%22c%69%74%79%22%3A%20%22%4ee%77%20%59%6f%72%6b%20C%69%74%79%22%2C%0A%20%20%22%72e%67%69%6f%6e%22%3A%20%22%4ee%77%20%59%6f%72%6b%22%2C%0A%20%20%22c%6f%75%6e%74%72%79%22%3A%20%22%55%53%22%2C%0A%20%20%22%6c%6fc%22%3A%20%2240%2e7143%2C%2d74%2e0060%22%2C%0A%20%20%22%6f%72%67%22%3A%20%22A%5322252%20%54%68e%20C%69%74%79%20%6ff%20%4ee%77%20%59%6f%72%6b%22%2C%0A%20%20%22%70%6f%73%74a%6c%22%3A%20%2210001%22%2C%0A%20%20%22%74%69%6de%7a%6f%6ee%22%3A%20%22A%6de%72%69ca%2f%4ee%77%5f%59%6f%72%6b%22%2C%0A%20%20%22%72ead%6de%22%3A%20%22%68%74%74%70%73%3A%2f%2f%69%70%69%6ef%6f%2e%69%6f%2f%6d%69%73%73%69%6e%67a%75%74%68%22%0A%7D');
document.getElementById("tt").innerHTML=dt;
document.getElementById("cv").innerHTML=dt;tStat('cv','1');
aFigure();}

function dSampleB(){
dt=unescape('%7B%0A%20%20%22%69%70%22%3A%20%2223%2e52%2e117%2e147%22%2C%0A%20%20%22%68%6f%73%74%6ea%6de%22%3A%20%22a23%2d52%2d117%2d147%2ede%70%6c%6f%79%2e%73%74a%74%69c%2ea%6ba%6da%69%74ec%68%6e%6f%6c%6f%67%69e%73%2ec%6f%6d%22%2C%0A%20%20%22c%69%74%79%22%3A%20%22Da%6c%6ca%73%22%2C%0A%20%20%22%72e%67%69%6f%6e%22%3A%20%22%54e%78a%73%22%2C%0A%20%20%22c%6f%75%6e%74%72%79%22%3A%20%22%55%53%22%2C%0A%20%20%22%6c%6fc%22%3A%20%2232%2e7831%2C%2d96%2e8067%22%2C%0A%20%20%22%6f%72%67%22%3A%20%22A%5316625%20A%6ba%6da%69%20%54ec%68%6e%6f%6c%6f%67%69e%73%2C%20%49%6ec%2e%22%2C%0A%20%20%22%70%6f%73%74a%6c%22%3A%20%2275201%22%2C%0A%20%20%22%74%69%6de%7a%6f%6ee%22%3A%20%22A%6de%72%69ca%2fC%68%69ca%67%6f%22%2C%0A%20%20%22%72ead%6de%22%3A%20%22%68%74%74%70%73%3A%2f%2f%69%70%69%6ef%6f%2e%69%6f%2f%6d%69%73%73%69%6e%67a%75%74%68%22%0A%7D');
document.getElementById("tt").innerHTML=dt;
document.getElementById("cv").innerHTML=dt;tStat('cv','1');
aFigure();}

function dSampleC(){
dt=unescape('%7B%0A%20%20%22%69%70%22%3A%20%2223%2e33%2e205%2e200%22%2C%0A%20%20%22%68%6f%73%74%6ea%6de%22%3A%20%22a23%2d33%2d205%2d200%2ede%70%6c%6f%79%2e%73%74a%74%69c%2ea%6ba%6da%69%74ec%68%6e%6f%6c%6f%67%69e%73%2ec%6f%6d%22%2C%0A%20%20%22c%69%74%79%22%3A%20%22A%73%68b%75%72%6e%22%2C%0A%20%20%22%72e%67%69%6f%6e%22%3A%20%22%56%69%72%67%69%6e%69a%22%2C%0A%20%20%22c%6f%75%6e%74%72%79%22%3A%20%22%55%53%22%2C%0A%20%20%22%6c%6fc%22%3A%20%2239%2e0437%2C%2d77%2e4875%22%2C%0A%20%20%22%6f%72%67%22%3A%20%22A%5316625%20A%6ba%6da%69%20%54ec%68%6e%6f%6c%6f%67%69e%73%2C%20%49%6ec%2e%22%2C%0A%20%20%22%70%6f%73%74a%6c%22%3A%20%2220147%22%2C%0A%20%20%22%74%69%6de%7a%6f%6ee%22%3A%20%22A%6de%72%69ca%2f%4ee%77%5f%59%6f%72%6b%22%2C%0A%20%20%22%72ead%6de%22%3A%20%22%68%74%74%70%73%3A%2f%2f%69%70%69%6ef%6f%2e%69%6f%2f%6d%69%73%73%69%6e%67a%75%74%68%22%0A%7D');
document.getElementById("tt").innerHTML=dt;
document.getElementById("cv").innerHTML=dt;tStat('cv','1');
aFigure();}
