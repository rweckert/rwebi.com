// rwebiModule-GoogleMapping.js Created:12/22/2021 Updated:01/18/2026
// rwebi.com | rwebi.org | rwebi.net | (d) 2026 v:0125A

// Module Start: -----------------------
function mStart(){
rFlex('cc');mDefault();
gish=window.innerHeight-147;
document.getElementById("vTools").style.height=gish-0+"px";
nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";tStat('cv','1');}

// Module Resize: ----------------------
function mResize(){
rFlex('cc');gish=window.innerHeight-147;
document.getElementById("vTools").style.height=gish-0+"px";
nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";tStat('cv','1');}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}
if (ei=='vTools'){eToggle('vTools');eHid('hView');eHid('oView');}}

// Select Options: ---------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='cdetails'){mCopy();}
if (gmo=='new'){mDefault();}
if (gmo=='details'){mDetails();}
if (gmo=='default'){mDefault();}
if (gmo=='google'){gMap();}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function mOpt(){
gmo=document.getElementById('o2').value;
if (gmo=='mAddress'){eToggle('mAddress');lToggle('h','mCoordinates,mCity,mCounty,mPostal');}
if (gmo=='mCoordinates'){eToggle('mCoordinates');lToggle('h','mAddress,mCity,mCounty,mPostal');}
if (gmo=='mCity'){eToggle('mCity');lToggle('h','mCoordinates,mAddress,mCounty,mPostal');}
if (gmo=='mCounty'){eToggle('mCounty');lToggle('h','mCoordinates,mCity,mAddress,mPostal');}
if (gmo=='mPostal'){eToggle('mPostal');lToggle('h','mCoordinates,mCity,mCounty,mAddress');}
oReset('o2');}

function onEnter(mc){
if (event.keyCode==13){mc();}}

// Map Details: -----------------------
function mDetails(){
gmp=document.getElementById('tt').value;
if (!gmp){gmp="Mapping details are populated as you plot on the Google map, showing details of the last plot created. At this time there are no details to show.";}
document.getElementById('details').innerText=gmp;
eToggle('mDetails');}

// Map Default: -----------------------
function mDefault(){
gpt="https://maps.google.com/maps?f=q&q=+&t=h&z=2&output=embed";
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Open Google Maps: ------------------
function gMap(){
gml="https://www.google.com/maps";
window.open(gml, '_blank').focus();}

// Load Google Maps: -------------------
function LoadgMap(){
ggl=document.getElementById('gl').innerText;
if (!ggl){alert("No location mapped. First map a location and use this button to open Google with all mapping features.");return false;}
//gml="https://www.google.com/maps";
window.open(ggl, '_blank').focus();}

// Open Google Maps: -------------------
function OpengMap(ml){
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+ml+'"');
eHid('vLinks');}

// Map Details Copy: ------------------
function mCopy(){
gmp=document.getElementById('tt').value;
if (!gmp){alert("The mapping copy cache is empty. Find a location first to then copy mapped details.");}
if (gmp){eCopy('v','tt');}}

// Map Latitude & Longitude: ----------
function mLatLon(){
glat=document.getElementById('clat').value;
glon=document.getElementById('clon').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
// Example:
// https://maps.google.com/maps?f=q&q=33.148220961272486%20-117.07880516477253+&t=h&z=14&output=embed
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
// https://maps.google.com/maps?f=q&q=
gp2=unescape('%2b%26%74%3D');
// +&t
gp3=unescape('%26%7a%3D');
// &z=
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
// &output=embed
gpt=gp1+glat+"%20"+glon+gp2+gtype+gp3+gzoom+gp4;
cDetail="Latitude: "+glat+"\nLongitude: "+glon+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Map Coordinates: -------------------
function mCoords(){
gcd=document.getElementById('coord').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
gte=gcd.includes(" ");
if(gte==true){gcd=gcd.replace(/ +/g, "%20");}
gte=gcd.includes(",");
if(gte==true){gcd=gcd.replace(/,/g,'%20');}
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
document.getElementById('coord').value=clon+" "+clat;
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
gp2=unescape('%2b%26%74%3D');
gp3=unescape('%26%7a%3D');
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
gpt=gp1+clat+"%20"+clon+gp2+gtype+gp3+gzoom+gp4;
cDetail="Latitude: "+clat+"\nLongitude: "+clon+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
gl.innerHTML=gpt;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Map Address Detail: ----------------
function mAddressDetail(){
gasn=document.getElementById('aStreetNum').value;
gast=document.getElementById('aStreet').value;
gacn=document.getElementById('aCity').value;
gapn=document.getElementById('aState').value;
gapz=document.getElementById('aPostal').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
gte=gast.includes(" ");
if(gte==true){gast=gast.replace(/ +/g, "+");}
gte=gacn.includes(" ");
if(gte==true){gacn=gacn.replace(/ +/g, "+");}
gte=gapn.includes(" ");
if(gte==true){gapn=gapn.replace(/ +/g, "+");}
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
gp2=unescape('%2b%26%74%3D');
gp3=unescape('%26%7a%3D');
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
gpt=gp1+gasn+"%20"+gast+"+"+gacn+"+"+gapn+"+"+gapz+gp2+gtype+gp3+gzoom+gp4;
cDetail="Street Number: "+gasn+"\nStreet Name: "+gast+"\nCity: "+gacn+"\nZip Postal: "+gapz+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
gl.innerHTML=gpt;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Map Location Search: ---------------
function mLocationSearch(){
gaca=document.getElementById('aComplete').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
gte=gaca.includes(" ");
if(gte==true){gaca=gaca.replace(/ +/g, "+");}
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
gp2=unescape('%2b%26%74%3D');
gp3=unescape('%26%7a%3D');
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
gpt=gp1+gaca+gp2+gtype+gp3+gzoom+gp4;
cDetail="Location Search: "+gaca+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
gl.innerHTML=gpt;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Map City / Town: -------------------
function mCity(){
gact=document.getElementById('pCity').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
gte=gact.includes(" ");
if(gte==true){gapc=gact.replace(/ +/g, "+");}
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
gp2=unescape('%2b%26%74%3D');
gp3=unescape('%26%7a%3D');
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
gpt=gp1+gact+gp2+gtype+gp3+gzoom+gp4;
cDetail="City / Town: "+gact+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
gl.innerHTML=gpt;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Map Postal / Zip: -------------------
function mPostal(){
gazp=document.getElementById('pPostal').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
gte=gazp.includes(" ");
if(gte==true){gazp=gazp.replace(/ +/g, "+");}
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
gp2=unescape('%2b%26%74%3D');
gp3=unescape('%26%7a%3D');
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
gpt=gp1+gazp+gp2+gtype+gp3+gzoom+gp4;
cDetail="Postal / Zip: "+gazp+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
gl.innerHTML=gpt;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

// Map County / Province: -------------------
function mCounty(){
gacp=document.getElementById('pCounty').value;
gtype=document.getElementById('o3').value;
gzoom=document.getElementById('o4').value;
gte=gacp.includes(" ");
if(gte==true){gacp=gacp.replace(/ +/g, "+");}
gp1=unescape('%68%74%74%70%73%3A%2f%2f%6da%70%73%2e%67%6f%6f%67%6ce%2ec%6f%6d%2f%6da%70%73%3Ff%3D%71%26%71%3D');
gp2=unescape('%2b%26%74%3D');
gp3=unescape('%26%7a%3D');
gp4=unescape('%26%6f%75%74%70%75%74%3De%6dbed');
gpt=gp1+gacp+gp2+gtype+gp3+gzoom+gp4;
cDetail="County / Province: "+gacp+"\nGoogle Map Link: "+gpt;
document.getElementById('tt').value=cDetail;
gl.innerHTML=gpt;
ggm=document.getElementById('gMap');
ggm.outerHTML=ggm.outerHTML.replace(/data="(.+?)"/,'data="'+gpt+'"');}

function SaveLink(){
ggl=document.getElementById('gl').innerText;
if (!ggl){alert("No location mapped. First map a location and use this button to open Google with all mapping features.");return false;}
gts=tStamp('r','');
csl="<span class='em11 fb' onclick='OpengMap(\""+ggl+"\")'>"+ggl+"</span>";
gtc=document.getElementById('sLinks');
row=gtc.insertRow(),
cell0=row.insertCell(0);
cell1=row.insertCell(1);
cell0.innerHTML=csl;
cell1.innerHTML=gts;
alert('Mapped link has been saved successfully.');}

function LinkDownload(){
gcc=document.getElementById('sLinks').innerText;
brt=unescape('%3Cb%72%3E');
res=gcc.replace(/\t/g,',');
res=res.replace(/\r\n/g,brt);
document.getElementById('lc').innerText=res;
eVis('sView');}

function LinkExport(){
gcc=document.getElementById('sLinks').innerText;
brt=unescape('%3Cb%72%3E');
res=gcc.replace(/\t/g,',');
res=res.replace(/\r\n/g,brt);
document.getElementById('lc').innerText=res;
eTab('v','lc');}

function LinkClear(){
tb=document.getElementById('sLinks');
while (tb.rows.length>1){
tb.deleteRow(1);}
alert("All saved links have been removed.");}

// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('cc').style.cssText="width:auto;height:auto;overflow-x:none;overflow-y:none;";
sFlex('f','cc','0','0','0');dHid('mHeader');
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
eHid('mMenu');eVis('fvButton');}

function FullViewClose(){
sFlex('d','cc','0','0','0');dVis('mHeader');
document.getElementById('ow').innerText="18";
document.getElementById('oh').innerText="108";
document.getElementById('cc').style.cssText="width:100%;z-index:1;margin-top:6px;";
eHid('fvButton');eHid('fvBar');
rFlex('cc');}
