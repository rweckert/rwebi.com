// rwebiApp-ToolPanel-c61.js Created:12/22/2021 Updated:02/15/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Panel Start: ------------------------
function pStart(){
PanelStats();
psh=window.innerHeight-300;
document.getElementById("PanelStats").style.height=psh+"px";}

// Panel Resize: ------------------------
function pResize(){
pStart();}

// Panel Layout: -----------------------
function PanelLayout(pd){
p1.classList.remove('hidden');
p2.classList.remove('hidden');
container.className=`container ${pd}`;
if (pd=="vertical"){
document.getElementById("p1mx").style.display="block";
document.getElementById("p1mn").style.display="none";
document.getElementById("p2mx").style.display="block";
document.getElementById("p2mn").style.display="none";
document.getElementById("p1v").style.display="none";
document.getElementById("p2v").style.display="none";
document.getElementById("p1h").style.display="block";
document.getElementById("p2h").style.display="block";}
if (pd=="horizontal"){
document.getElementById("p1mx").style.display="block";
document.getElementById("p1mn").style.display="none";
document.getElementById("p2mx").style.display="block";
document.getElementById("p2mn").style.display="none";
document.getElementById("p1v").style.display="block";
document.getElementById("p2v").style.display="block";
document.getElementById("p1h").style.display="none";
document.getElementById("p2h").style.display="none";}}

// Pannel Maximize: --------------------
function PanelFull(pn){
document.all.ps.innerHTML="Maximized";
document.all.po.innerHTML="Single";
if (pn===1){
p1.classList.remove('hidden');
p2.classList.add('hidden');
document.all.cp.innerHTML="p1";
document.getElementById("p1mx").style.display="none";
document.getElementById("p1mn").style.display="block";
document.getElementById("p2mx").style.display="block";
document.getElementById("p2mn").style.display="none";
document.getElementById("p1v").style.display="block";
document.getElementById("p2v").style.display="block";
document.getElementById("p1h").style.display="none";
document.getElementById("p2h").style.display="none";
PanelSelect('1');
} else {
p2.classList.remove('hidden');
p1.classList.add('hidden');
document.all.cp.innerHTML="p2";
document.getElementById("p2mx").style.display="none";
document.getElementById("p2mn").style.display="block";
document.getElementById("p1mx").style.display="block";
document.getElementById("p1mn").style.display="none";}
document.getElementById("p1v").style.display="block";
document.getElementById("p2v").style.display="block";
document.getElementById("p1h").style.display="none";
document.getElementById("p2h").style.display="none";
PanelSelect('2');PanelStats();}

// Panel 1 Options: --------------------
function Panel1Opt(){
dHid('po2');eHid('oView');
gmx=event.clientX;gmy=event.clientY;gmx=gmx-170;
document.getElementById('po1').style.top=gmy+"px";
document.getElementById('po1').style.left=gmx+"px";
dToggle('po1');}

// Panel 2 Options: --------------------
function Panel2Opt(){
dHid('po1');eHid('oView');
gmx=event.clientX;gmy=event.clientY;gmx=gmx-170;
document.getElementById('po2').style.top=gmy+"px";
document.getElementById('po2').style.left=gmx+"px";
dToggle('po2');}

// Panel Stats Update: -----------------
function PanelStats(){
gisw=document.getElementById('PanelContainer').clientWidth;isw.innerHTML=gisw;
gish=document.getElementById('PanelContainer').clientHeight;ish.innerHTML=gish;
gp1w=document.getElementById('pc1').clientWidth;p1w.innerHTML=gp1w;
gp1h=document.getElementById('pc1').clientHeight;p1h.innerHTML=gp1h;
gp2w=document.getElementById('pc2').clientWidth;p2w.innerHTML=gp2w;
gp2h=document.getElementById('pc2').clientHeight;p2h.innerHTML=gp2h;}

// Panel Select: -----------------------
function PanelSelect(pn){
if (pn=='1'){
document.all.cp.innerHTML="p1";
document.getElementById('pc1').style.borderColor="#00bfff";
document.getElementById('ph1').style.backgroundColor="#00bfff";
document.getElementById('pc2').style.borderColor="#d9d9d9";
document.getElementById('ph2').style.backgroundColor="#ffddb3";
PanelStats();}
if (pn=='2'){
document.all.cp.innerHTML="p2";
document.getElementById('pc2').style.borderColor="#ffb900";
document.getElementById('ph2').style.backgroundColor="#ffb900";
document.getElementById('pc1').style.borderColor="#d9d9d9";
document.getElementById('ph1').style.backgroundColor="#ccebff";
PanelStats();}}

// Load Frame: -------------------------
function LoadFrame(pn,ta){
if (pn=='p1'){document.getElementById('pf1').src=ta;}
if (pn=='p2'){document.getElementById('pf2').src=ta;}}

// Element Details: --------------------
function ElementDetails(ei){
if (!ei){ei=document.getElementById('soElement').value;}
if (ei=='copy'){DetailCopy();}
if (ei=='left'){DetailLeft();}
if (ei=='right'){DetailRight();}
go=document.getElementById(ei).getBoundingClientRect();
pt=go.top;pt=pt.toFixed(0);et.innerHTML="<span class='rp'>"+pt+"</span>";
pl=go.left;pl=pl.toFixed(0);el.innerHTML="<span class='bc'>"+pl+"</span>";
pw=go.width;pw=pw.toFixed(0);ew.innerHTML="<span class='oc'>"+pw+"</span>";
ph=go.height;ph=ph.toFixed(0);eh.innerHTML="<span class='gl'>"+ph+"</span>";
eid.innerHTML="<span class='yc'>"+ei+"</span>";
ep=document.getElementById(ei).getAttribute('style');
ep=ep.replace(/^\s*[\r\n]/gm,'');
ep=ep.substring(0,ep.length-1)
st="<span class='wc lb80' style='margin-left:3px;'>Property:</span>&nbsp;<span class='wc lb80'>Value:</span><br>";
re="</span><br><span class='wc lb80' style='margin-left:3px;'>";
cs="</span><span class='ac'>";
ep=ep.replace(/\:/g,cs);
ep=ep.replace(/\;/g,re);
ep=ep.replace(/background/g,'bkg');
res=st+"<span class='wc lb80' style='margin-left:3px;'>"+ep+"</span>";
ElementList.innerHTML=res+"<br><br>";}

// Element Detail Copy: ----------------
function DetailCopy(){
gpd=document.getElementById("PanelStats").innerText;
ged=document.getElementById("ElementList").innerText;
gtt=gpd+ged;
el=document.createElement('textarea');
el.value=gtt;
el.setAttribute('readonly', '');
el.style.position='absolute';
el.style.left='-9999px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
alert("Details copied to clipboard successfully.");}

// Element Detail Right View: ----------
function DetailRight(){
gcw=document.getElementById("PanelContainer").clientWidth;
npp=gcw-230;
document.getElementById('PanelStats').style.left=npp+"px";}

// Element Detail Left View: -----------
function DetailLeft(){
gcw=document.getElementById("PanelContainer").clientWidth;
document.getElementById('PanelStats').style.left="6px";}
