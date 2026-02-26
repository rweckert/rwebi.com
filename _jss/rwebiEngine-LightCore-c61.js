// rwebiEngine-LightCore-c61.js  Created:12/22/2021  Updated:01/08/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

function optTheme(){
gmo=document.getElementById('osTheme').value;
if (gmo=="l"){gua=window.location.href;
if (gua.includes("index")) {cp="";} else {cp="../";}
gcsl=document.getElementById('csl');gcsl.href = cp+"_css/rwebiStyle-Light-c61.css";
gcsl=document.getElementById('csd');gcsl.href = cp+"_css/rwebiStyle-Light-c61.css";}
if (gmo=="d"){gua=window.location.href;
if (gua.includes("index")) {cp="";} else {cp="../";}
gcsd=document.getElementById('csd');gcsd.href = cp+"_css/rwebiStyle-Dark-c61.css";
gcsl=document.getElementById('csl');gcsl.href = cp+"_css/rwebiStyle-Dark-c61.css";}
oReset('osTheme');eHid('oView');}

function selTheme(tt){
if (tt=="l"){gua=window.location.href;
if (gua.includes("index")) {cp="";} else {cp="../";}
gcsl=document.getElementById('csl');gcsl.href = cp+"_css/rwebiStyle-Light-c61.css";
gcsl=document.getElementById('csd');gcsl.href = cp+"_css/rwebiStyle-Light-c61.css";}
if (tt=="d"){gua=window.location.href;
if (gua.includes("index")) {cp="";} else {cp="../";}
gcsd=document.getElementById('csd');gcsd.href = cp+"_css/rwebiStyle-Dark-c61.css";
gcsl=document.getElementById('csl');gcsl.href = cp+"_css/rwebiStyle-Dark-c61.css";}
dHid('oView');}

function LoadTheme(){
mode=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
themeLink = document.getElementById('theme');
gua=window.location.href;
if (gua.includes("Index")) {cp="";
} else {cp="../";}
if (mode) {themeLink.setAttribute('href', cp+'_css/rwebiStyle-Dark-c61.css');
} else {
themeLink.setAttribute('href', cp+'_css/rwebiStyle-Light-c61.css');}}

function LinkModule(){
gml=location.pathname;
navigator.clipboard.writeText('https://www.rwebi.com'+gml);
alert("Link to this module at 'https://www.rwebi.com"+gml+"' has been copied to your clipboard successfully.\n\nThank you for using and sharing tools and applications from rwebi.com.");}

// Non-Responsive Flex: ----------------
function nFlex(){
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;
cih=window.innerHeight-goh;
miw.innerHTML=ciw;
mih.innerHTML=cih;
mhv=window.innerHeight/1.5;
document.getElementById('hView').style.height=mhv+"px";}

function xFlex(){
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;
cih=window.innerHeight-goh;
miw.innerHTML=ciw;
mih.innerHTML=cih;}

function qFlex(ei){
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;
cih=window.innerHeight-goh;
document.getElementById(ei).style.width=ciw+"px";
document.getElementById(ei).style.height=cih+"px";}

function lFlex(ei){
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;
cih=window.innerHeight-goh;
document.getElementById(ei).style.width=ciw+"px";
document.getElementById(ei).style.height=cih+"px";
miw.innerHTML=ciw;
mih.innerHTML=cih;}

// Non-Responsive Flex: ---------------
function rFlex(ei){
gow=document.getElementById('ow').textContent;
goh=document.getElementById('oh').textContent;
ciw=window.innerWidth-gow;
cih=window.innerHeight-goh;
document.getElementById(ei).style.width=ciw+"px";
document.getElementById(ei).style.height=cih+"px";
document.getElementById("miw").textContent=ciw;
document.getElementById("mih").textContent=cih;
mvh=window.innerHeight/1.5;
document.getElementById('hView').style.height=mvh+"px";}

// Screen Flex: ------------------------
// so  screen orientation
// ci  content id
// ow  offset width
// oh  offset height
// ft  from top
function sFlex(so,ci,ow,oh,ft){
fw=window.innerWidth-ow;fh=window.innerHeight-oh;
if (so=="f"){document.getElementById(ci).style.cssText="position:absolute;top:"+ft+"px;left:0px;width:"+fw+"px;height:"+fh+"px;z-index:10;";}
if (so=="d"){document.getElementById(ci).style.cssText="position:relative;top:"+ft+"px;left:0px;width:"+fw+"px;height:"+fh+"px;z-index:10;";rFlex(ci);}}

// Move Code: --------------------------
function mCode(mt,oe,de){
if (mt=='m'){
goe=document.getElementById(oe).innerHTML;
gde=document.getElementById(de).innerHTML;
document.getElementById(de).innerHTML='';
document.getElementById(oe).innerHTML='';
document.getElementById(de).innerHTML=goe;}
if (mt=='c'){
document.getElementById(de).innerHTML='';}}

// Copy Code: --------------------------
function cCode(oe,de){
goe=document.getElementById(oe).innerHTML;
document.getElementById(de).innerHTML=goe;}

// Copy All Text: ----------------------
function eCopy(et,ei){
if (et=='i'){gt=document.getElementById(ei).innerText;}
if (et=='h'){gt=document.getElementById(ei).innerHTML;}
if (et=='v'){gt=document.getElementById(ei).value;}
if (!gt){alert("No text found. Nothing to copy.");return false;}
el=document.createElement('textarea');
el.value=gt;
el.setAttribute('readonly', '');
el.style.position='absolute';
el.style.left='-9999px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
alert("Text copied to clipboard successfully.");}

// Copy Value: -------------------------
function vCopy(ei){
gt=document.getElementById(ei).value;
if (!gt){alert("No text found. Nothing to copy.");return false;}
el=document.createElement('textarea');
el.value=gt;
el.setAttribute('readonly', '');
el.style.position='absolute';
el.style.left='-9999px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
alert("Value copied to clipboard successfully.");}

// Paste Text: ------------------------
async function ePaste(ei){
cb=await navigator.clipboard.readText();
var startPos=document.getElementById(ei).selectionStart;
var endPos=document.getElementById(ei).selectionEnd;
document.getElementById(ei).value = document.getElementById(ei).value.substring(0, startPos) + cb + document.getElementById(ei).value.substring(endPos, document.getElementById(ei).value.length);}

// Cut Text: --------------------------
async function eCut(ei){
selectedText = window.getSelection().toString();
navigator.clipboard.writeText(selectedText);
document.execCommand('delete');}

// Copy Selected Text -----------------
function sCopy(et,ei){
if (et=='i'){gt=document.getElementById(ei).innerText;}
if (et=='h'){gt=document.getElementById(ei).innerHTML;}
if (et=='v'){gt=document.getElementById(ei).value;}
if (!gt){alert("No text found. Nothing to copy.");return false;}
selectedText = window.getSelection().toString();
document.execCommand('copy');
alert("Selected text copied to clipboard successfully.");}

// Element New: ------------------------
function eNew(et,ei){
if (confirm("Are you sure you want to create a new document?")){
if (et=='t'){document.getElementById(ei).innerText="";}
if (et=='h'){document.getElementById(ei).innerHTML="";}
if (et=='v'){document.getElementById(ei).value="";}
if (et=='s'){document.getElementById(ei).src="";}
} else {alert("New file creation cancelled.");}}

// Element Clear: ----------------------
function eClear(et,ei){
if (confirm("Are you sure you want to clear all text of this document?")){
if (et=='t'){document.getElementById(ei).innerText="";}
if (et=='h'){document.getElementById(ei).innerHTML="";}
if (et=='v'){document.getElementById(ei).value="";}
if (et=='s'){document.getElementById(ei).src="";}
} else {return false;}}

// Instant Clear: ----------------------
function iClear(et,ei){
if (et=='t'){document.getElementById(ei).innerText="";}
if (et=='h'){document.getElementById(ei).innerHTML="";}
if (et=='v'){document.getElementById(ei).value="";}
if (et=='s'){document.getElementById(ei).src="";}}

// Local Storage Save: -----------------
function lSave(et,ei){
if (et=='i'){gt=document.getElementById(ei).innerText;}
if (et=='h'){gt=document.getElementById(ei).innerHTML;}
if (et=='v'){gt=document.getElementById(ei).value;}
if (!gt){alert("No text found. Nothing to save.");return false;}
localStorage.setItem('rwebiText',gt);
alert("Text saved to local storage successfully.\n\nYou can restore using a different rwebi module or tool to make further changes.");}

// Local Storage Restore: --------------
function lRestore(et,ei){
rt=localStorage['rwebiText'];
if (!et){et="v";}
if (!rt){alert("No text found. Nothing to restore.");return false;}
if (et=="v"){document.getElementById(ei).value=rt;}
if (et=="h"){document.getElementById(ei).innerHTML=rt;}
if (et=="t"){document.getElementById(ei).innerText=rt;}}

// Export Tab: -------------------------
function eTab(et,ei){
if (et=='i'){gt=document.getElementById(ei).innerText;}
if (et=='h'){gt=document.getElementById(ei).innerHTML;}
if (et=='v'){gt=document.getElementById(ei).value;}
v1=unescape('%3C%74e%78%74a%72ea%20%73%74%79%6ce%3D%22%77%69d%74%68%3A98%2e5%25%3B%68e%69%67%68%74%3A100%25%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A%23ffffff%3Bc%6f%6c%6f%72%3A%23000000%3Bf%6f%6e%74%2d%73%69%7ae%3A12%70%78%3Bb%6f%72de%72%2d%77%69d%74%68%3A1%70%78%3Bb%6f%72de%72%2d%73%74%79%6ce%3A%73%6f%6c%69d%3Bb%6f%72de%72%2dc%6f%6c%6f%72%3A%2300bfff%3B%22%3E');
v2=unescape('%3C%2f%74e%78%74a%72ea%3E');
tt=v1+gt+v2;
nt=window.open();
nt.document.write(tt);}

// Module Top Load: --------------------
function mLoad(){
location.href="#mt";}

// Page New: ---------------------------
function pNew(et,ei){
if (confirm("Are you sure you want to create a new document? All existing text will be removed.")){
if (et=='t'){document.getElementById(ei).innerText="";}
if (et=='h'){document.getElementById(ei).innerHTML="";}
if (et=='v'){document.getElementById(ei).value="";}
if (et=='s'){document.getElementById(ei).src="";}
} else {
alert("New file creation cancelled.");}}

// Page Load: --------------------------
function pLoad(at){
location.href=at;}

// Page Tab Confirm: -------------------
function pConfirm(ta){
pa=unescape('%2e%2e%2fA%70%70%73%2f%72%77eb%69A%70%70%2d%50a%67e%50a%6ee%6c%2dc61%2e%68%74%6d%6c%3Fda%74a%3D');
pt=pa+ta;
if (confirm("Would you like to open this page in a new tab?")){
window.open(pt,'_blank');
} else {window.parent.location.href=ta;}}

// Application Refresh: ----------------
function appRefresh(){
if (confirm("Are you sure you want to reload this application? All existing information will be lost.")){
location.href="";
} else {return false;}}

// Module Refresh: ---------------------
function modRefresh(){
if (confirm("Are you sure you want to reload this module? All existing information will be lost.")){
location.href="";
} else {return false;}}

// Page Parent: ------------------------
function pParent(at){
window.parent.location.href=at;}

// Object Load:
function obLoad(tu,ei){
gco=document.getElementById(tu);
gco.outerHTML=gco.outerHTML.replace(/data="(.+?)"/,'data="'+ei+'"');}

// GIF Icon Swap: ----------------------
function gSwap(ei,ii,fc){
if (document.getElementById(ei).src.endsWith('off.gif')){
document.getElementById(ei).src="../_ict/"+ii+"on.gif";} 
else if (document.getElementById(ei).src.endsWith('on.gif')){
document.getElementById(ei).src="../_ict/"+ii+"off.gif";}
if (!fc){fn='';}else if (fc){fn=fc+'\(\)';eval(fn);}}

// PNG Icon Swap: ----------------------
function pSwap(ei,ii,fc){
if (document.getElementById(ei).src.endsWith('off.png')){
document.getElementById(ei).src="../_ico/"+ii+"on.png";} 
else if (document.getElementById(ei).src.endsWith('on.png')){
document.getElementById(ei).src="../_ico/"+ii+"off.png";}
if (!fc){fn='';}else if (fc){fn=fc+'\(\)';eval(fn);}}

// Icon Swap: ----------------------
function iSwap(ei,ii){
document.getElementById(ei).src="../_ico/"+ii;}

// Increase Font Size: -----------------
function iFont(ei){
gfs=document.getElementById(ei);
fs=window.getComputedStyle(gfs).getPropertyValue("font-size");
pfs=parseFloat(fs);nfs=pfs+1;
document.getElementById(ei).style.fontSize=nfs+"px";}

// Decrease Font Size: -----------------
function dFont(ei){
gfs=document.getElementById(ei);
fs=window.getComputedStyle(gfs).getPropertyValue("font-size");
pfs=parseFloat(fs);nfs=pfs-1;
document.getElementById(ei).style.fontSize=nfs+"px";}

// Cursor Input Focus: -----------------
function cFocus(ei){
gfn=document.getElementById(ei);
gfn.focus();}

// Module Reset: -----------------------
function mReset(){
window.location.reload(true);}

// Option Reset: ----------------------
function oReset(ei){
os=document.getElementById(ei);
os.selectedIndex=0;}

// Element Hidden: ---------------------
function eHid(ei){
document.getElementById(ei).style.visibility="hidden";
return false;}

// Element Visible: ------------------------
function eVis(ei){
document.getElementById(ei).style.visibility="visible";
return false;}

// Element Toggle: ---------------------
function eToggle(ei){
ec=document.getElementById(ei);
if (window.getComputedStyle(ec).visibility==="visible"){
document.getElementById(ei).style.visibility="hidden";
return false;}
if (window.getComputedStyle(ec).visibility==="hidden"){
document.getElementById(ei).style.visibility="visible";
return false;}}

// Div Display Visible: ----------------
function dVis(ei){
document.getElementById(ei).style.display="block";}

// Div Display hidden: -----------------
function dHid(ei){
document.getElementById(ei).style.display="none";}

// Div Display Toggle: -----------------
function dToggle(ei){
elem=document.getElementById(''+ei+'');
eIdent=(elem != null) ? ('#'+ei) : ('.'+ei);
elem=document.querySelector(''+eIdent+'');
elem.style.display=(elem.style.display != 'none') ? 'none' : 'block';}

// List Toggle: ------------------------
function lToggle(ed,el){
if (ed=="h"){gec=el.split(',').length-1;
for (var i=0;i <= gec;i++){ec=el.split(',')[i];
document.getElementById(ec).style.visibility="hidden";}}
if (ed=="v"){gec=el.split(',').length-1;
for (var i=0;i <= gec;i++){ec=el.split(',')[i];
document.getElementById(ec).style.visibility="visible";}}}

// Toggle Spellcheck: -------------------
function togSpell(wi,ei){
gte=document.getElementById(ei);
gsc=gte.spellcheck;
if (gsc==false){gte.setAttribute('spellcheck', 'true');
document.getElementById(wi).src='../_ico/spellcheck-on.png';sc.innerText="on";}
if (gsc==true){gte.setAttribute('spellcheck', 'false');
document.getElementById(wi).src='../_ico/spellcheck-off.png';sc.innerText="off";}}

// Toggle Word Wrap: -------------------
function togWrap(wi,ei,et){
gww=document.getElementById(wi).innerText;
if (gww=='on'){document.getElementById(ei).src='../_ico/wrap-off.png';
document.getElementById(et).style.whiteSpace='pre';
ww.innerText="off";}
if (gww=='off'){document.getElementById(ei).src='../_ico/wrap-on.png';
document.getElementById(et).style.whiteSpace='pre-line';
ww.innerText="on";}}

// Toggle Textarea Lock: ---------------
function togLock(li,ei,et){
gdl=document.getElementById(li).innerText;
if (gdl=='on'){document.getElementById(ei).src='../_ico/lock-off.png';
document.getElementById(et).readOnly='';
ld.innerText="off";
alert('Document has been unlocked.');}
if (gdl=='off'){document.getElementById(ei).src='../_ico/lock-on.png';
document.getElementById(et).readOnly='true';
ld.innerText="on";
alert('Document has been locked. No further changes can occur until unlocked.');}}

// Date Standard Format: ---------------
function iDate(et,ei){
d=new Date();
dt=d.getDate();
mo=d.getMonth()+1;
yr=d.getFullYear();
rv=mo+"/"+dt+"/"+yr;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Full Standard Format: ---------------
function fDate(et,ei){
mn=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
dn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
d=new Date();
dy=dn[d.getDay()];
dt=d.getDate();
mo=mn[d.getMonth()];
yr=d.getFullYear();
rv=dy+" "+mo+" "+dt+" "+yr;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Number Standard Format: -------------
function nDate(et,ei){
d=new Date();
dt=d.getDate();
mo=d.getMonth()+1;
yr=d.getFullYear();
if (dt<10){dt="0"+dt;}
if (mo<10){mo="0"+mo;}
if (yr<10){yr="0"+yr;}
rv=mo+"/"+dt+"/"+yr;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Engine: Short Standard Format:
function sDate(et,ei){
mn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
dn=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
d=new Date();
dy=dn[d.getDay()];
dt=d.getDate();
mo=mn[d.getMonth()];
yr=d.getFullYear();
rv=dy+" "+mo+" "+dt+" "+yr;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Abbreviated Date: -------------------
function aDate(et,ei){
months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
d=new Date();
month=months[d.getMonth()];
year=d.getFullYear();
rv=month+" "+year;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Time Stamp: -------------------------
function tStamp(et,ei){
d=new Date();
th=d.getHours();
if(th<10){th="0"+th;}
tm=d.getMinutes();
if(tm<10){tm="0"+tm;}
ts=d.getSeconds();
if(ts<10){ts="0"+ts;}
dt=d.getDate();
if(dt<10){dt="0"+dt;}
mo=d.getMonth()+1;
if(mo<10){mo="0"+mo;}
yr=d.getFullYear();
rv=mo+"-"+dt+"-"+yr+"-"+th+":"+tm+":"+ts;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// File Stamp: -------------------------
function fStamp(et,ei){
d=new Date();
th=d.getHours();
if(th<10){th="0"+th;}
tm=d.getMinutes();
if(tm<10){tm="0"+tm;}
ts=d.getSeconds();
if(ts<10){ts="0"+ts;}
dt=d.getDate();
if(dt<10){dt="0"+dt;}
mo=d.getMonth()+1;
if(mo<10){mo="0"+mo;}
yr=d.getFullYear();
rv=mo+"-"+dt+"-"+yr+"-"+th+tm+ts;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

function mTime(et,ei){
d=new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
if (h<10){h="0"+h;}
if (m<10){m="0"+m;}
if (s<10){s="0"+s;}
rv=h+":"+m+":"+s;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Standard Time Format: ---------------
function sTime(et,ei){
d=new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();
if (m<10){m="0"+m;}
if (s<10){s="0"+s;}
t="am";if(h>12){h-=12;t="pm";}
rv=h+":"+m+":"+s+" "+t;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Time Format No Seconds: -------------
function nsTime(et,ei){
d=new Date();
h=d.getHours();
m=d.getMinutes();
if (m<10){m="0"+m;}
t="am";if(h>12){h-=12;t="pm";}
rv=h+":"+m+" "+t;
if (et=='v'){document.getElementById(ei).value=rv;}
if (et=='i'){document.getElementById(ei).innerText=rv;}
if (et=='r'){return rv;}}

// Text Counting: ----------------------
function tWords(ei,tn){
gt=document.getElementById(ei).value;
count=0;
res=gt.split(' ');
twc="rwc"+tn;
for (i=0;i<res.length;i++){
if (res[i] !=""){count+=1;}}
document.getElementById(twc).innerText=count;}

function tChars(ei,tn){
tcc="rcc"+tn;
gt=document.getElementById(ei).value.length;
document.getElementById(tcc).innerText=gt;}

function tLines(ei,tn){
tlc="rlc"+tn;
gt=document.getElementById(ei).value;
document.getElementById(tlc).innerText=gt.split('\n').length;}

function tText(ei,tn){
ttc="rtc"+tn;
gt=document.getElementById(ei).value;
lc=gt.split('\n').length;
cc=document.getElementById(ei).value.length;
tc=cc-lc;
if (tc<0){document.getElementById(ttc).innerText="1";}
if (tc>0){document.getElementById(ttc).innerText=tc;}}

function tStat(ei,tn){
tWords(ei,tn);tChars(ei,tn);tLines(ei,tn);tText(ei,tn);}

// Open File: --------------------------
function oFile(et,ei,ge){
var file=document.getElementById(ge).files[0];
cf=document.getElementById(ge).value;
var reader=new FileReader();
reader.onload=function(e){
var textArea=document.getElementById(ei);
textArea.value=e.target.result;}
reader.readAsText(file);
if (et=='i'){setTimeout(iLoad(ei), 450);}
if (et=='h'){setTimeout(hLoad(ei), 450);}
if (et=='t'){setTimeout(tLoad(ei), 450);}
if (et=='v'){setTimeout(vLoad(ei), 450);}}

// Open File Text Target: --------------
function tLoad(ei){
gts=document.getElementById('tt').value;
document.getElementById('cv').innerText=gts;}
// Open File Value Target: -------------
function vLoad(ei){
gts=document.getElementById('tt').value;
document.getElementById(ei).value=gts;}
// Open File Inner HTML Target: --------
function hLoad(ei){
gts=document.getElementById('tt').value;
br=unescape('%3Cb%72%3E'); //<br>
gts=gts.replace(/\n/g, br);
document.getElementById(ei).innerHTML=gts;}
// Open File Inner Text Target: --------
function iLoad(ei){
gts=document.getElementById('tt').value;
br=unescape('%3Cb%72%3E'); //<br>
gts=gts.replace(/\n/g, br);
document.getElementById(ei).innerText=gts;}

// Save Download with Stamp: --------------------------
function DateSave(sfn){
cts=fStamp('r');
fn=sfn+cts+".txt";
document.getElementById('sf').value=fn;
eVis('sView');}

// Download File ----------------------
function dFile(et,ei,fn){
if (et=='i'){dt=document.getElementById(ei).innerText;}
if (et=='h'){dt=document.getElementById(ei).innerHTML;}
if (et=='v'){dt=document.getElementById(ei).value;}
dSet(fn,dt);}

// Save File: --------------------------
function sFile(et,ei,sf){
gfn=document.getElementById(sf).value;
if (et=='i'){dt=document.getElementById(ei).innerText;}
if (et=='h'){dt=document.getElementById(ei).innerHTML;}
if (et=='v'){dt=document.getElementById(ei).value;}
dSet(gfn,dt);}

// Download Setup: ---------------------
function dSet(fn,dt){
element=document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dt));
element.setAttribute('download',fn);
element.style.display = 'none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);}

// Result Option: ----------------------
function ResultOpt(rid){
gse=document.getElementById(rid);
gmo=gse.value;
lid="l"+rid;
did="d"+rid;
glid=document.getElementById(lid).innerText;
gdid=document.getElementById(did).innerText;
if (gmo=='nt'){window.open(glid, "_blank");}
if (gmo=='ca'){
navigator.clipboard.writeText(glid).then(() => {
alert("Copied address to clipboard: " + glid);
}).catch(err => {alert("Could not copy address: ", err);});}
if (gmo=='cs'){
navigator.clipboard.writeText(gdid).then(() => {
alert("Copied description to clipboard: " + gdid);
}).catch(err => {alert("Could not copy description: ", err);});}}

// ScreenShot: -------------------------
function sShotDiv(ei){
element = document.getElementById(ei);
html2canvas(element).then(canvas => {
const base64Image = canvas.toDataURL("image/png");
document.getElementById('ssimg').src = base64Image;
eVis('ssView');});}

// Scroll Bottom of Page: --------------
function ScrollBottom(ei){
gei=document.getElementById(ei);
if (gei) {gei.scrollTop=gei.scrollHeight;}}

// Get File Path: ----------------------
function getFile(path){
const url=new URL(path,'https://dummy.com');
const pathname=url.pathname;
return pathname.substring(pathname.lastIndexOf('/') + 1);}

// Target Frame: -------------------------
function TargetFrame(ta,tf){
var target = parent.document.getElementById(ta);
if (target) {target.src = tf;} else {
console.error("Frame ID " + ta + " not found.");}}

// Page Parameter: ---------------------
function pParam(tp,ta) {
const encodedValue=encodeURIComponent(ta);
window.location.href=`${tp}.html?data=${encodedValue}`;}
