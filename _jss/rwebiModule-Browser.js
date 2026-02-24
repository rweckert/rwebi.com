// rwebiModule-Browse.js Created:12/22/2021  Updated:01/14/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');
gfv=document.getElementById('fv').textContent;
if(gfv=="false"){
nhw=window.innerWidth-15;nqw=window.innerWidth-175;
document.getElementById("mHeader").style.width=nhw+"px";
document.getElementById('ba').style.width=nqw+"px";}
if(gfv=="true"){
nhw=window.innerWidth-15;nqw=window.innerWidth-220;
document.getElementById("mHeader").style.width=nhw+"px";
document.getElementById('ba').style.width=nqw+"px";}}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: ---------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='acopy'){eCopy('v','ba');}
if (gmo=='linksv'){ViewLinks();}
if (gmo=='atab'){BrowserTab();}
if (gmo=='caddress'){AddressClear();AddressFocus();}
if (gmo=='cviewer'){BrowserClear();AddressFocus();}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function AddressOpt(){
gat=document.getElementById('soAddress').value;
if (gat=="od"){document.getElementById('ba').value='http://www.';}
if (gat=="www"){document.getElementById('ba').value='www.';}
if (gat=="ttp"){document.getElementById('ba').value='http://';}
if (gat=="ttps"){document.getElementById('ba').value='https://';}
if (gat=="ttpsw"){document.getElementById('ba').value='https://www.';}
if (gat=="ftp"){document.getElementById('ba').value='ftp://';}
if (gat=="sftp"){document.getElementById('ba').value='sftp://';}
if (gat=="file"){document.getElementById('ba').value='file:///';}
if (gat=="local"){document.getElementById('ba').value='127.0.0.1';}
oReset('soAddress');}

function AddressFocus(){
guf=document.getElementById('ba');
guf.focus();}

// Calculate on Enter: --------------------
function onEnter(){
if (event.keyCode==13){BrowserView();}}

function ViewAddress(au){
document.getElementById('ba').value=au;
document.getElementById('bv').src=au;}

function AllClear(){
BrowserClear();AddressClear();}

function BrowserClear(){
document.getElementById('ba').value="";
document.getElementById('bv').src="rwebiModule-Blank.html";}

function AddressClear(){
window.document.forminput.ba.value="";}

function BrowserRefresh(){
gba=document.getElementById('pba').value;
if (gba){document.getElementById('cv').src=gba;}
if (!gba){document.getElementById('cv').src="";}}

function BrowserTab(){
gba=document.getElementById('ba').value;
if (!gba){alert("No address found to view in tab.");return false;}
window.open(gba,'_blank').focus();}

function BrowserView(){
gba=document.getElementById('ba').value;
if (!gba){alert("No address found. Nothing to browse.");return false;}
document.getElementById('bv').src=gba;}

function ViewLinks(){
document.getElementById('bv').src="../Resources/rwebiResources-Links.html";}

function LinkAdd(){
gba=document.getElementById("ba").value;
if (!gba){alert("No address found. Nothing to save.");return false;}
gts=tStamp('r','');
hl1=unescape('%3Ca%20%68%72ef%3D%22');
hl2=unescape('%22%20c%6ca%73%73%3D%22%6c%79c%22%20%74a%72%67e%74%3D%22b%76%22%20%6f%6ec%6c%69c%6b%3D%22%76Add%72e%73%73%28%27');
hl3=unescape('%27%29%3B%22%20%74a%72%67e%74%3D%27b%76%27%3E');
hl4=unescape('%3C%2fa%3E');
hlt=hl1+gba+hl2+gba+hl3+gba+hl4;
gtc=document.getElementById('lData');
row=gtc.insertRow(),
cell0=row.insertCell(0);
cell1=row.insertCell(1);
cell0.innerHTML="<div style='width:100%;height:13px;cursor:pointer;' onclick='ViewAddress(\""+gba+"\");'>"+gba+"</div>";
cell1.innerHTML="<div style='width:100%;height:13px;cursor:pointer;' onclick='ViewAddress(\""+gba+"\");'>"+gts+"</div>";
alert("Link saved successfully.");}

function LinkSave(){
gcc=document.getElementById('lData').innerText;
brt=unescape('%3Cb%72%3E');
res=gcc.replace(/\t/g,',');
res=res.replace(/\r\n/g,brt);
document.getElementById('tt').innerText=res;
eVis('sView');}

function LinkExport(){
gcc=document.getElementById('lData').innerText;
brt=unescape('%3Cb%72%3E');
res=gcc.replace(/\t/g,',');
res=res.replace(/\r\n/g,brt);
document.getElementById('tt').innerText=res;
eTab('v','tt');}

function LinkClear(){
tb=document.getElementById('lData');
while (tb.rows.length>1){
tb.deleteRow(1);}
alert("All saved links have been removed.");}

// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('cc').style.cssText="width:auto;height:auto;min-height:50px;margin-top:3px;overflow-x:none;overflow-y:none;border:1px solid #FF8C00;";
sFlex('f','cc','0','0','0');
nqw=window.innerWidth-220;
document.getElementById('ba').style.width=nqw+"px";
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
document.getElementById('fv').textContent="true";
mCode('m','aBar','fvBar');
eVis('fvButton');}

function FullViewClose(){
sFlex('d','cc','0','0','3');
document.getElementById('ow').innerText="20";
document.getElementById('oh').innerText="153";
document.getElementById('cc').style.cssText="width:auto;height:auto;min-height:50px;margin-top:6px;overflow-x:none;overflow-y:none;border:1px solid #d9d9d9;border-radius:3px;min-width:320px;";
mCode('m','fvBar','aBar');
nqw=window.innerWidth-175;
document.getElementById('ba').style.width=nqw+"px";
document.getElementById('fv').textContent="false";
eHid('fvButton');eHid('fvMenu');eHid('fvBar');rFlex('cc');}
