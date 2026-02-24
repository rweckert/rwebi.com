// rwebiApp-GridStack.js Created:12/22/2021 Updated:12/02/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Module Start: -----------------------
function mStart(){
vSplit();nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";
ghw=document.getElementById("mHeader").clientWidth-45;
document.getElementById('gv').style.width=ghw+"px";
document.getElementById('gv').style.height="800px";}

// Module Resize: ----------------------
function mResize(){
nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";
vSplit();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='new'){sClear();}
if (gmo=='copy'){ViewGrid('cv');}
if (gmo=='clear'){sClear();}
if (gmo=='save'){ViewGrid('ls');}
if (gmo=='restore'){ViewGrid('lr');}
if (gmo=='saveas'){ViewGrid('sd');}
if (gmo=='export'){ViewGrid('ts');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('../index.html')}
oReset('soFile');eHid('mMenu');}

function htmlFile(){
gmo=document.getElementById('hFile').value;
if (gmo=='of'){document.getElementById('fb1').click();}
if (gmo=='ch'){aceCopyAll('editor1');}
if (gmo=='et'){aceTabExport('editor1');}
if (gmo=='ls'){aceLocalSave('editor1');}
if (gmo=='lr'){aceLocalRestore('editor1');}
if (gmo=='sd'){aceTargetSave('hSave','hf','.html','rwebi-GridStack-');}
if (gmo=='xs'){aceClear('editor1');}
oReset('hFile');}

function cssFile(){
gmo=document.getElementById('cFile').value;
if (gmo=='of'){document.getElementById('fb2').click();}
if (gmo=='ch'){aceCopyAll('editor2');}
if (gmo=='et'){aceTabExport('editor2');}
if (gmo=='ls'){aceLocalSave('editor2');}
if (gmo=='lr'){aceLocalRestore('editor2');}
if (gmo=='sd'){aceTargetSave('cSave','cf','.css','rwebi-GridStack-');}
if (gmo=='xs'){aceClear('editor2');}
oReset('cFile');}

function jsFile(){
gmo=document.getElementById('jFile').value;
if (gmo=='of'){document.getElementById('fb3').click();}
if (gmo=='ch'){aceCopyAll('editor3');}
if (gmo=='et'){aceTabExport('editor3');}
if (gmo=='ls'){aceLocalSave('editor3');}
if (gmo=='lr'){aceLocalRestore('editor3');}
if (gmo=='sd'){aceTargetSave('jSave','jf','.js','rwebi-GridStack-');}
if (gmo=='xs'){aceClear('editor3');}
oReset('jFile');}

// Source Select: ----------------------
function sSelect(ss){
if (ss=='h'){
document.getElementById('hbox').style.backgroundColor="#f2f251";
document.getElementById('cbox').style.backgroundColor="#ccebff";
document.getElementById('jbox').style.backgroundColor="#ffddb3";}
if (ss=='c'){
document.getElementById('hbox').style.backgroundColor="#ffffb3";
document.getElementById('cbox').style.backgroundColor="#00bfff";
document.getElementById('jbox').style.backgroundColor="#ffddb3";}
if (ss=='j'){
document.getElementById('hbox').style.backgroundColor="#ffffb3";
document.getElementById('cbox').style.backgroundColor="#ccebff";
document.getElementById('jbox').style.backgroundColor="#FF8C00";}}

// Source Clear: -----------------------
function sClear(){
if (confirm("This will clear all html, css, and js text. Do you wish to continue?")) {
aceClearResults('editor1');
aceClearResults('editor2');
aceClearResults('editor3');
document.getElementById('oi').innerHTML="";}
oReset('soFile');}

// HTML Wide View: ---------------------
function hWide(){
nww=window.innerWidth-30;
document.getElementById("hbox").style.width=nww+"px";
document.getElementById("hheader").style.width=nww+"px";
document.getElementById("editor1").style.width=nww+"px";
dVis('hbox');dHid('cbox');dHid('jbox');}

// HTML Full View: ---------------------
function hFull(){
nww=window.innerWidth-30;
nwh=window.innerHeight-120;
document.getElementById("hbox").style.width=nww+"px";
document.getElementById("hheader").style.width=nww+"px";
document.getElementById("editor1").style.width=nww+"px";
document.getElementById("editor1").style.height=nwh+"px";
dVis('hbox');dHid('cbox');dHid('jbox');}

// CSS Wide View: ----------------------
function cWide(){
nww=window.innerWidth-30;
document.getElementById("cbox").style.width=nww+"px";
document.getElementById("cbox").style.marginLeft="0px";
document.getElementById("cheader").style.width=nww+"px";
document.getElementById("editor2").style.width=nww+"px";
dVis('cbox');dHid('hbox');dHid('jbox');}

// CSS Full View: ----------------------
function cFull(){
nww=window.innerWidth-30;
nwh=window.innerHeight-120;
document.getElementById("cbox").style.width=nww+"px";
document.getElementById("cheader").style.width=nww+"px";
document.getElementById("editor2").style.width=nww+"px";
document.getElementById("editor2").style.height=nwh+"px";
dVis('cbox');dHid('hbox');dHid('jbox');}

// JS Wide View: -----------------------
function jWide(){
nww=window.innerWidth-30;
document.getElementById("jbox").style.width=nww+"px";
document.getElementById("jbox").style.marginLeft="0px";
document.getElementById("jheader").style.width=nww+"px";
document.getElementById("editor3").style.width=nww+"px";
dVis('jbox');dHid('hbox');dHid('cbox');}

// JS Full View: -----------------------
function jFull(){
nww=window.innerWidth-30;
nwh=window.innerHeight-120;
document.getElementById("jbox").style.width=nww+"px";
document.getElementById("jheader").style.width=nww+"px";
document.getElementById("editor3").style.width=nww+"px";
document.getElementById("editor3").style.height=nwh+"px";
dVis('jbox');dHid('hbox');dHid('cbox');}

// View Split: -------------------------
function vSplit(){
const tw=window.innerWidth;
const ps=36;
const pw=(tw-ps)/3;
//if (pw<= 360){return;}
document.getElementById("hbox").style.width=pw+"px";
document.getElementById("hheader").style.width="auto";
document.getElementById("editor1").style.height="170px";
document.getElementById("editor1").style.width=pw+"px";
document.getElementById("cbox").style.width=pw+"px";
document.getElementById("cbox").style.marginLeft="3px";
document.getElementById("cheader").style.width="auto";
document.getElementById("editor2").style.height="170px";
document.getElementById("editor2").style.width=pw+"px";
document.getElementById("jbox").style.width=pw+"px";
document.getElementById("jbox").style.marginLeft="3px";
document.getElementById("jheader").style.width="auto";
document.getElementById("editor3").style.height="170px";
document.getElementById("editor3").style.width=pw+"px";
dVis('jbox');dVis('hbox');dVis('cbox');}

// Grid Optacity: ----------------------
function GridOpacity(){
gto=document.getElementById('soOpacity').value;
if (gto=="10"){document.getElementById('oi').style.opacity="1.0";}
if (gto>"10"){document.getElementById('oi').style.opacity="0."+gto;}}

// Grid Size: --------------------------
function GridSize(){
ggs=document.getElementById('soGridSize').value;
ggc=document.getElementById('soGridColor').value;
ggo=document.getElementById('soGrid').value;
if (ggo=='off'){
document.getElementById('gv').style.backgroundImage="url(../_img/GraphPaper/"+ggc+ggs+".gif)";}
if (ggo=='Grid'){
document.getElementById('gv').style.backgroundImage="url(../_img/GraphPaper/"+ggc+ggs+".gif)";}
if (ggo=='on'){
document.getElementById('gv').style.backgroundImage="url(../_img/GraphPaper/"+ggc+"p"+ggs+".gif)";}}

// View Grid: --------------------------
function ViewGrid(sw){
vhtml=ace.edit('editor1');
ghtml=vhtml.session.getValue();
vcss=ace.edit('editor2');
gcss=vcss.session.getValue();
vjs=ace.edit('editor3');
gjs=vjs.session.getValue();
//<!DOCTYPE html>
//<html><head><script>
gp1=unescape('%3C%21D%4fC%54%59%50E%20%68%74%6d%6c%3E%0A%3C%68%74%6d%6c%3E%3C%68ead%3E%3C%73c%72%69%70%74%3E');
//</script><style>
gp2=unescape('%3C%2f%73c%72%69%70%74%3E%3C%73%74%79%6ce%3E');
//</style></head><body>
gp3=unescape('%3C%2f%73%74%79%6ce%3E%3C%2f%68ead%3E%3Cb%6fd%79%3E');
//</body></html>
gp4=unescape('%3C%2fb%6fd%79%3E%3C%2f%68%74%6d%6c%3E');
gpt=gp1+gjs+gp2+gcss+gp3+ghtml+gp4;
if (sw=='gv'){document.getElementById('oi').innerHTML=gpt;}
if (sw=='ts'){document.getElementById('vt').value=gpt;eTab('v','vt');}
if (sw=='tv'){nt=window.open();nt.document.write(gpt);}
if (sw=='cv'){document.getElementById('vt').value=gpt;eCopy('v','vt');}
if (sw=='ls'){document.getElementById('vt').value=gpt;lSave('v','vt');}
if (sw=='lr'){document.getElementById('vt').value=gpt;aceLocalRestore('editor1');}
if (sw=='sd'){document.getElementById('vt').value=gpt;
aceTargetSave('sSave','sf','.html','rwebi-GridStack-');}}

// Make Graph: -------------------------
function mGraph(){
element = document.getElementById('gv');
gow=document.getElementById('ox').value*1;
goy=document.getElementById('oy').value*1;
rect=element.getBoundingClientRect();
gmx=event.clientX-rect.left;-gow;
gmy=event.clientY-rect.top;-goy;
gmx=parseFloat(gmx).toFixed(0);
gmy=parseFloat(gmy).toFixed(0);
document.all.mx.innerHTML=gmx;
document.all.my.innerHTML=gmy;
rmx=gmx- 2;rmy=eval(gmy- -.1);
if (rmx < 0){rmx=0;document.all.mx.innerHTML="0";}
if (rmy < 0){rmy=0;document.all.my.innerHTML="0";}
document.getElementById('rmv').style.left=rmx+"px";
document.getElementById('rmh').style.top=rmy-11+"px";}

// Grid Options: -----------------------
function GridOpt(){
ggo=document.getElementById('soGrid').value;
ggs=document.getElementById('soGridSize').value;
ggc=document.getElementById('soGridColor').value;
if (ggo=='off' & ggs=='off'){
gI="url(../_img/grp/gpdoff.png)";
document.getElementById('gv').style.backgroundImage=gI;
document.getElementById('gv').style.backgroundRepeat='repeat';}
if (ggs=='on' & ggo=='off'){
gI="url(../_img/grp/gp"+ggs+".png)";
document.getElementById('gv').style.backgroundImage=gI;
document.getElementById('gv').style.backgroundRepeat='repeat';}
if (ggs=='on' & ggo=='on'){
gI="url(../_img/grp/gpd"+ggs+".png)";
document.getElementById('gv').style.backgroundImage=gI;
document.getElementById('gv').style.backgroundRepeat='repeat';}}

// Diplsay Size: -----------------------
function DisplaySize(w,h){
document.getElementById('oi').style.width=w+"px";
document.getElementById('oi').style.height=h+"px";
document.getElementById('gv').style.width=w+"px";
document.getElementById('gv').style.height=h+"px";
document.all.gw.innerText=w;document.all.gh.innerText=h;}

// Grid Background: --------------------
function GridBkgColor(){
gnc=document.getElementById('gbColor').value;
nc=document.getElementById('gv');
nc.style.backgroundColor=gnc;}

// Grid Background: --------------------
function GridBkgUrl(){
gnb=document.getElementById('gbUrl').value;
document.getElementById("gv").style.backgroundImage='url('+gnb+')';
document.getElementById('gv').style.backgroundRepeat='repeat';
document.getElementById('gv').style.backgroundPosition='left';}

// Grid Background: --------------------
function GridBkgImage(){
var filesSelected=document.getElementById("fbg").files;
if (filesSelected.length>0){
var fileToLoad=filesSelected[0];
var fileReader=new FileReader();
fileReader.onload=function(fileLoadedEvent){
var srcData=fileLoadedEvent.target.result;
var newImage=document.createElement('img');
newImage.src=srcData;
gmo=document.getElementById('tt').value=srcData;}
fileReader.readAsDataURL(fileToLoad);
var file=document.getElementById("fbg").files[0];}setTimeout(BkgImage, 350);}

// Grid Background: --------------------
function BkgImage(){
goi=document.getElementById('tt').value;
var newImage=document.createElement('img');
newImage.src=goi;img=goi;
document.getElementById("gv").style.backgroundImage='url('+img+')';
document.getElementById('gv').style.backgroundRepeat='repeat';
document.getElementById('gv').style.backgroundPosition='left';}

// Query on Enter: ---------------------
function onEnter(){
if (event.keyCode==13){lSearch();}}

// Clear Query: ------------------------
function ClearQuery(){
document.getElementById('ts').value="";
lSearch();}

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
tr[i].style.display='none';}}}

// Add Dislay: -------------------------
function AddDisplay(){
gName=document.getElementById('dName').value;
gType=document.getElementById('dType').value;
gdWidth=document.getElementById('dWidth').value;
if (!gdWidth){alert("Please provide a display width.");}
gdtWidth=document.getElementById('dtWidth').value;
if (gdtWidth=="o"){gdtWidth="";}
gdHeight=document.getElementById('dHeight').value;
if (!gdHeight){alert("Please provide a display height.");}
gdtHeight=document.getElementById('dtHeight').value;
if (gdtHeight=="o"){gdtHeight="";}
gtc=document.getElementById('cData');
row=gtc.insertRow(),
cell0=row.insertCell(0);
cell1=row.insertCell(1);
cell2=row.insertCell(2);
cell0.innerHTML = "<div style='width:100%;height:13px;color:#ffffff;cursor:pointer;' class='bc' onclick='DisplayCustom(\"" + gdWidth + gdtWidth + "\", \"" + gdHeight + gdtHeight + "\");'>" + gType + gName + "</div>";
cell1.innerHTML = "<div style='width:100%;height:13px;color:#ffffff;cursor:pointer;' class='bc' onclick='DisplayCustom(\"" + gdWidth + gdtWidth + "\", \"" + gdHeight + gdtHeight + "\");'>" + gdWidth + gdtWidth + "</div>";
cell2.innerHTML = "<div style='width:100%;height:13px;color:#ffffff;cursor:pointer;' class='bc' onclick='DisplayCustom(\"" + gdWidth + gdtWidth + "\", \"" + gdHeight + gdtHeight + "\");'>" + gdHeight + gdtHeight + "</div>";
eHid('aDisplay');}

// Display Custom: ---------------------
function DisplayCustom(w,h){
document.getElementById('oi').style.width=w;
document.getElementById('oi').style.height=h;
document.getElementById('gv').style.width=w;
document.getElementById('gv').style.height=h;
document.all.gw.innerText=w;document.all.gh.innerText=h;
eHid('aDisplay');}
