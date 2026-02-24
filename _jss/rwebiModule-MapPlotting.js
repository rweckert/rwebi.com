// rwebiModule-MapPlotting.js Created:12/22/2021 Updated:01/17/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');iMap();MapReset();
gish=window.innerHeight-65;nhw=window.innerWidth-15;
document.getElementById("lMenu").style.height=gish+"px";
document.getElementById("mHeader").style.width=nhw+"px";tStat('cv','1');}

// Module Resize: ----------------------
function mResize(){
rFlex('cc');
gish=window.innerHeight-65;nhw=window.innerWidth-15;
document.getElementById("lMenu").style.height=gish+"px";
document.getElementById("mHeader").style.width=nhw+"px";tStat('cv','1');}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: --------------------
function OptionsOpt(){
gmo=window.document.forminput.soOptions.value;
if (gmo=='new'){NewMap();}
if (gmo=='paste'){eVis('PasteCoords');}
if (gmo=='copy'){CoordCopy();}
if (gmo=='import'){eVis('vImport');}
if (gmo=='cgroup'){ClearGroup('');}

if (gmo=='search'){dVis('lMenu');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soOptions');}

function NewMap(){
if (confirm("Are you sure you want to create a new map? This will remove any currently plotted locations.")) {
MapReset();} else {alert("New map creation cancelled.");}}

// Initial Map: ------------------------
function iMap(){
gzl=document.getElementById('zl').value;
// Creating map options
var mapOptions = {center: [0, 0],zoom: 1}
// Creating a map object
var map = new L.map('map', mapOptions);
// Creating a Layer object
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// Adding layer to the map
map.addLayer(layer);}

function ViewNewLocation(){
glat=document.getElementById("clat").value;
glon=document.getElementById("clon").value;
gzl=document.getElementById('zl').value;
document.getElementById('cv').innerHTML="<div id='map' style='width: 100%; height: 100%;'></div>";
osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution='Map data Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer=new L.TileLayer(osmUrl, {maxZoom: 19, attribution: osmAttribution});
map=new L.Map('map');
map.setView(new L.LatLng(glat,glon),gzl);
map.addLayer(osmLayer);}

function PlotNewLocation(){
glat=document.getElementById("clat").value;
glon=document.getElementById("clon").value;
gzl=document.getElementById('zl').value;
document.getElementById('cv').innerHTML="<div id='map' style='width: 100%; height: 100%;'></div>";
osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution='Map data Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer=new L.TileLayer(osmUrl, {maxZoom: 45, attribution: osmAttribution});
map=new L.Map('map');
map.setView(new L.LatLng(glat,glon),gzl);
map.addLayer(osmLayer);
// Creating a marker
var marker = L.marker([glat,glon]);
// Adding marker to the map
marker.addTo(map);}



function LinkAdd(lat,lon){
document.getElementById('clat').value=lat;
document.getElementById('clon').value=lon;
PlotLink();}

// Plot Map Link: ----------------------
function PlotLink(lat,lon){
document.getElementById('clat').value=lat;
document.getElementById('clon').value=lon;
gzl=document.getElementById('zl').value;
//PlotSave('lat','lon');
document.getElementById('cv').innerHTML="<div id='map' style='width: 100%; height: 100%;'></div>";
osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution='Map data Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer=new L.TileLayer(osmUrl, {maxZoom: 45, attribution: osmAttribution});
map=new L.Map('map');
map.setView(new L.LatLng(lat,lon), gzl);
map.addLayer(osmLayer);
// Creating a marker
var marker = L.marker([lat, lon]);
// Adding marker to the map
marker.addTo(map);}

// Map Geo Location: -------------------
function GeoLocation(){
if (navigator.geolocation){
navigator.geolocation.getCurrentPosition(MapGeoLocation);} else {alert("Geolocation is not supported by this browser or this feature has been disabled in your browser settings.");}}

// Map Geo Location: ----------------------
function MapGeoLocation(position){
PlotLink(position.coords.latitude,position.coords.longitude);}

// Map Reset: --------------------------
function MapReset(){
ClearMap();
document.getElementById('zl').value="1"
document.getElementById('clat').value="41.40338";
document.getElementById('clon').value="2.17403";
ViewNewLocation();}

// Map Clear & Reset: ------------------
function ClearMap(){ // map clear
document.getElementById('clat').value="";
document.getElementById('clon').value="";
document.getElementById('cv').innerHTML="<div id='map' style='width: 100%; height: 100%;'></div>";
iMap();}

// Add Map Plot: -----------------------
function AddLink(lat,lon){
document.getElementById('clat').value=lat;
document.getElementById('clon').value=lon;
gzl=document.getElementById('zl').value;
//PlotSave(lat,lon);
var marker = L.marker([lat,lon]).addTo(map);}

function AddPlot(){
glat=document.getElementById("clat").value;
glon=document.getElementById("clon").value;
if (!glat){alert("No Latitude found. Nothing to map.");return false;}
if (!glon){alert("No Longitude found. Nothing to map.");return false;}
PlotSave(glat,glon);
var marker = L.marker([glat,glon]).addTo(map);}

function CoordCopy(){
glat=document.getElementById("clat").value;
glon=document.getElementById("clon").value;
document.getElementById('dc').innerHTML=glat+","+glon;
eCopy('i','dc');}

function CoordCleanup(){
gcd=document.getElementById('pCoord').value;
if (gcd.includes(',')){
if (!gcd.includes(' ')){alert("Coordinates appear properly set."); return false;}}
gcd = gcd.replace(/[^0-9.-]/g, '%20').replace(/\s+/g, ' ').trim();
gcd = gcd.replace(/[a-zA-Z]/g, "%20");
gte=gcd.includes(" ");
if(gte==true){gcd=gcd.replace(/ +/g, "%20");}
gte=gcd.includes(",");
if(gte==true){gcd=gcd.replace(/,/g,'%20');}
gte=gcd.includes(",,");
if(gte==true){gcd=gcd.replace(/,/g,'%20%20');}
gte=gcd.includes("\t");
if(gte==true){gcd=gcd.replace(/\t+/g,'%20');}
gte=gcd.includes("%20%20");
if(gte==true){gcd=gcd.replace(/%20%20/g,'%20');}
gte=gcd.includes("%20%20%20");
if(gte==true){gcd=gcd.replace(/%20%20%20/g,'%20');}
gte=gcd.includes("%20%20%20%20");
if(gte==true){gcd=gcd.replace(/%20%20%20%20/g,'%20');}
esc=unescape('%2520');
gte=gcd.split(esc);
clat=(gte[0]);
clon=(gte[1]);
document.getElementById('pCoord').value=clat+","+clon;}



// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('map').style.cssText="width:100%;height:100%;min-height:50px;margin-top:3px;overflow-x:none;overflow-y:none;border:1px solid #FF8C00;";
sFlex('f','map','0','0','0');
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
//mCode('m','aBar','fvBar');
//eVis('fvButton');
}

function FullViewClose(){
sFlex('d','map','0','0','3');
document.getElementById('ow').innerText="20";
document.getElementById('oh').innerText="171";
document.getElementById('map').style.cssText="width:auto;height:auto;min-height:100%;margin-top:3px;overflow-x:none;overflow-y:none;border:1px solid #FF8C00;min-width:320px;";
mCode('m','fvBar','aBar');
eHid('fvButton');eHid('fvMenu');eHid('fvBar');rFlex('cc');}

// Query Generic: ----------------------
function lSearch(){
var input,filter,found,table,th,tr,td,i,j;
input=document.getElementById('ts');
filter=input.value.toUpperCase();
table=document.getElementById('cData');
if (!table){alert("No search text provided. Nothing to search.");return false;}
tr=table.getElementsByTagName('tr');
for (i=1; i < tr.length; i++){
td=tr[i].getElementsByTagName('td');
for (j=0; j < td.length; j++){
if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1){
found=true;}}
if (found){
tr[i].style.display='';
found=false;
} else {
tr[i].style.display='none';}}
rCount();}

// Query on Enter: ---------------------
function onEnter(){
if (event.keyCode==13){tSearch();}}

// Clear Query: ------------------------
function ClearQuery(){
window.document.forminput.ts.value="";
lSearch();}

// Table Row Count: --------------------
function rCount(){
gct=document.getElementById('cData').innerText;
grc=gct.split('\n').length;grc=eval(grc-1);
grc=grc/2;
document.getElementById('tbr').innerHTML=grc;}

function ClearGroup(){
if (confirm("Are you sure you want to clear the group import? This will remove all items listed in the import window.")) {
window.document.forminput.gll.value="";
alert('Import group has been cleared.');
} else {alert("Clear import group cancelled.");}}


function PlotGroup(){
ggl=window.document.forminput.gll.value;
lines=ggl.split("\n");
firstline=lines.shift();
str=firstline.substring(firstline.indexOf(",") + 1);
vl1=str.split(',');
pl1=(vl1[0]);
window.document.forminput.clon.value=pl1;
vl2=str.split(',');
pl2=eval(vl2[1]);
window.document.forminput.clat.value=pl2;
bs=unescape('%5B');
be=unescape('%5D');
lr=be+','+'\n'+bs;
pl1=ggl.replace(/\n/gm,lr);
pl2=bs+pl1;
pl3=pl2+be;
planes=eval(bs+"\n"+pl3+"\n"+be);
glat=document.getElementById("clat").value;
glon=document.getElementById("clon").value;
document.getElementById('cv').innerHTML="<div id='map' style='width: 100%; height: 100%;'></div>";
osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
osmAttribution='Map data Â© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,'+' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
osmLayer=new L.TileLayer(osmUrl, {maxZoom: 19, attribution: osmAttribution});
map=new L.Map('map');
map.setView(new L.LatLng(glon,glat), 8 );
map.addLayer(osmLayer);
for (var i = 0; i < planes.length; i++) {
marker = new L.marker([planes[i][1],planes[i][2]])
.bindPopup(planes[i][0])
.addTo(map);}}

















function PlotSave(glat,glon){
ts=tStamp('r','');
p1=unescape("<span class='lyc'");
p2=unescape("' onclick='AddLink('");
p3=unescape("');'>");
p4=unescape("</span>");

pt=p1+p2+glat+","+glon+p3+glat+"-"+glon+p4;
gtc=document.getElementById('pData');
row=gtc.insertRow(),
cell0=row.insertCell(0);
cell1=row.insertCell(1);
cell0.innerHTML="<span class='tyl'>"+pt+"</span>";
cell1.innerHTML="<span class='tol'>"+ts+"</span>";}


