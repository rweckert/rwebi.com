// rwebiApp-SearchPanel-c61.js Created:12/22/2021 Updated:02/07/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Panel Start: ------------------------
function pStart(){
document.getElementById('cp').textContent="p1";PanelStats();
gihw=document.getElementById('PanelBar').clientWidth;
qsnw=gihw-210;psh=window.innerHeight-300;
document.getElementById('qs').style.width=qsnw+"px";
document.getElementById("PanelStats").style.height=psh+"px";}

// Panel Resize: ------------------------
function pResize(){
gihw=document.getElementById('PanelBar').clientWidth;
qsnw=gihw-210;psh=window.innerHeight-300;
document.getElementById('qs').style.width=qsnw+"px";
document.getElementById("PanelStats").style.height=psh+"px";}

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
document.all.cp.textContent="p1";
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
document.all.cp.textContent="p2";
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
gmx=event.clientX;gmy=event.clientY;gmx=gmx-170;
document.getElementById('po1').style.top=gmy+"px";
document.getElementById('po1').style.left=gmx+"px";
dHid('ps1');dHid('ps2');dHid('po2');eHid('oView');dToggle('po1');}

// Panel 2 Options: --------------------
function Panel2Opt(){
gmx=event.clientX;gmy=event.clientY;gmx=gmx-170;
document.getElementById('po2').style.top=gmy+"px";
document.getElementById('po2').style.left=gmx+"px";
dHid('ps1');dHid('ps2');dHid('po1');eHid('oView');dToggle('po2');}

// Panel 1 Search Options: -------------
function P1Search(){
gmx=event.clientX;gmy=event.clientY;
document.getElementById('ps1').style.top=gmy+"px";
document.getElementById('ps1').style.left=gmx+"px";
dHid('po1');dHid('po2');dHid('ps2');eHid('oView');dToggle('ps1');}

// Panel 2 Search Options: -------------
function P2Search(){
gmx=event.clientX;gmy=event.clientY;
document.getElementById('ps2').style.top=gmy+"px";
document.getElementById('ps2').style.left=gmx+"px";
dHid('po1');dHid('po2');dHid('ps1');eHid('oView');dToggle('ps2');}

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
document.all.cp.textContent="p1";
document.getElementById('pc1').style.borderColor="#00bfff";
document.getElementById('ph1').style.backgroundColor="#00bfff";
document.getElementById('pc2').style.borderColor="#d9d9d9";
document.getElementById('ph2').style.backgroundColor="#ffddb3";
PanelStats();}
if (pn=='2'){
document.all.cp.textContent="p2";
document.getElementById('pc2').style.borderColor="#ffb900";
document.getElementById('ph2').style.backgroundColor="#ffb900";
document.getElementById('pc1').style.borderColor="#d9d9d9";
document.getElementById('ph1').style.backgroundColor="#ccebff";
PanelStats();}}

// Clear Panel: ------------------------
function PanelClear(){
gcp = document.getElementById("cp").textContent.trim();
if (gcp=='p1'){document.getElementById('pf1').src="../Modules/rwebiModule-Blank.html";}
if (gcp=='p2'){document.getElementById('pf2').src="../Modules/rwebiModule-Blank.html";}}

// Target Frame: -------------------------
function TargetFrame(ta){
gcp=document.getElementById('cp').textContent;
if (gcp=='p1'){
document.getElementById('f1').src=ta;}
if (gcp=='p2'){
document.getElementById('f2').src=ta;}}

// Load Frame: -------------------------
function LoadFrame(pn,ta){
if (pn=='p1'){
document.getElementById('pf1').src=ta;}
if (pn=='p2'){
document.getElementById('pf2').src=ta;}}

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

// Search on Enter: --------------------
function onEnter(){
if (event.keyCode==13){SearchValid();}}

// Validate Search: --------------------
function SearchValid(){
gqs=document.getElementById('qs').value;
qql=gqs.length;
if (qql=="1") {alert("Please enter a search phrase or word.");
return false;} else if (qql=="2"){
alert("Please enter a meaningful search phrase or word.");
return false;} else if (gqs==""){
alert("Please enter a search phrase or word.");
return false;} else SearchQuery();}

// Invoke Query: -----------------------
function SearchQuery(){
let gqs=document.getElementById('qs').value;
let gcp=document.getElementById("cp").textContent.trim();
let phpUrl=`../_php/rwebiApp-SearchPanel-c61.php?qs=${encodeURIComponent(gqs)}`;
if (gcp==='p1') {
document.getElementById('pf1').src="../Pages/rwebi-Loading.html";
document.getElementById('pf1').src=phpUrl;
} else if (gcp==='p2') {
document.getElementById('pf2').src="../Pages/rwebi-Loading.html";
document.getElementById('pf2').src=phpUrl;}
setTimeout(PanelStats, 500);}

// View Results as Text: ---------------
function ResultFormat(){
gcp=document.getElementById("cp").textContent;
gcp=gcp.replace(/p/g,'pf');
iframe = document.getElementById(gcp);
sourceAddress = iframe.src;
if (sourceAddress.includes('.html')) {
alert('You will need to perform a search first in order to export.');return false;} else {
if (gcp=='pf1'){
gsr=document.getElementById('pf1').contentWindow.document.body.innerText;
let iframe = document.getElementById('pf1');
let doc = iframe.contentWindow.document;
gsr=gsr.replace(/\t/g,'');
gsr=gsr.replace(/Result Options\n/g,'');
gsr=gsr.replace(/Open in New Tab\n/g,'');
gsr=gsr.replace(/Copy Link Address\n/g,'');
gsr=gsr.replace(/Copy Search Description\n/g,'');
doc.write(gsr.replace(/\n/g, "<br>"));}
if (gcp=='pf2'){
gsr=document.getElementById('pf2').contentWindow.document.body.innerText;
let iframe = document.getElementById('pf2');
let doc = iframe.contentWindow.document;
gsr=gsr.replace(/\t/g,'');
gsr=gsr.replace(/Result Options\n/g,'');
gsr=gsr.replace(/Open in New Tab\n/g,'');
gsr=gsr.replace(/Copy Link Address\n/g,'');
gsr=gsr.replace(/Copy Search Description\n/g,'');
doc.write(gsr.replace(/\n/g, "<br>"));}}}

// Results Save : ----------------------
function ResultSave(){
gcp=document.getElementById("cp").textContent;
gcp=gcp.replace(/p/g,'pf');
iframe = document.getElementById(gcp);
sourceAddress = iframe.src;
if (sourceAddress.includes('.html')) {
alert('You will need to perform a search first in order to export.');return false;} else {
if (gcp=='pf1'){gsr=document.getElementById('pf1').contentWindow.document.body.innerText;}
if (gcp=='pf2'){gsr=document.getElementById('pf2').contentWindow.document.body.innerText;}
localStorage.setItem('rwebiText',gsr);
alert("Search results saved to local storage successfully.");}}

// Results Export: ---------------------
function ResultExport(){
gcp=document.getElementById("cp").textContent;
gcp=gcp.replace(/p/g,'pf');
iframe = document.getElementById(gcp);
sourceAddress = iframe.src;
if (sourceAddress.includes('.html')) {
alert('You will need to perform a search first in order to export search results.');return false;} else {
if (gcp=='pf1'){gsr=document.getElementById('pf1').contentWindow.document.body.innerText;}
if (gcp=='pf2'){gsr=document.getElementById('pf2').contentWindow.document.body.innerText;}
v1=unescape('%3C%74e%78%74a%72ea%20%73%74%79%6ce%3D%22%77%69d%74%68%3A98%2e5%25%3B%68e%69%67%68%74%3A100%25%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A%23ffffff%3Bc%6f%6c%6f%72%3A%23000000%3Bf%6f%6e%74%2d%73%69%7ae%3A12%70%78%3Bb%6f%72de%72%2d%77%69d%74%68%3A1%70%78%3Bb%6f%72de%72%2d%73%74%79%6ce%3A%73%6f%6c%69d%3Bb%6f%72de%72%2dc%6f%6c%6f%72%3A%2300bfff%3B%22%3E');
v2=unescape('%3C%2f%74e%78%74a%72ea%3E');
tt=v1+gsr+v2;
nt=window.open();
nt.document.write(tt);}}

// Results Download: -------------------
function ResultDownload(){
gcp=document.getElementById("cp").textContent;
gcp=gcp.replace(/p/g,'pf');
iframe = document.getElementById(gcp);
sourceAddress = iframe.src;
if (sourceAddress.includes('.html')) {
alert('You will need to perform a search first in order to download search results.');return false;} else {
if (gcp=='pf1'){gsr=document.getElementById('pf1').contentWindow.document.body.innerText;}
if (gcp=='pf2'){gsr=document.getElementById('pf2').contentWindow.document.body.innerText;}
document.getElementById('tt').value=gcp;
DateSave('rwebi-Search-');}}

// Results Copy: -----------------------
function ResultCopy(){
gcp=document.getElementById("cp").textContent;
gcp=gcp.replace(/p/g,'pf');
iframe = document.getElementById(gcp);
sourceAddress = iframe.src;
if (sourceAddress.includes('.html')) {
alert('You will need to perform a search first in order to copy search results.');return false;} else {
if (gcp=='pf1'){gsr=document.getElementById('pf1').contentWindow.document.body.innerText;}
if (gcp=='pf2'){gsr=document.getElementById('pf2').contentWindow.document.body.innerText;}
el=document.createElement('textarea');
el.value=gsr;
el.setAttribute('readonly', '');
el.style.position='absolute';
el.style.left='-9999px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
alert("Text copied to clipboard successfully.");}}
