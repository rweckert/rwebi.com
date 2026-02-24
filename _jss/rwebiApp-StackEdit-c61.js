// rwebiApp-StackEdit-c61.js Created:12/22/2021 Updated:12/02/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Module Start: -----------------------
function mStart(){
xFlex();vSplit();nww=window.innerWidth-0;nwh=window.innerHeight-110;
document.getElementById("mHeader").style.width=nww+"px";
document.getElementById("ViewStack").style.height=nwh+"px";
SourceCount();

}

// Module Resize: ----------------------
function mResize(){
mStart();}

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
if (gmo=='sd'){aceTargetSave('hSave','hf','.html','rwebi-StackEdit-');}
if (gmo=='xs'){aceClear('editor1');}
oReset('hFile');}

function cssFile(){
gmo=document.getElementById('cFile').value;
if (gmo=='of'){document.getElementById('fb2').click();}
if (gmo=='ch'){aceCopyAll('editor2');}
if (gmo=='et'){aceTabExport('editor2');}
if (gmo=='ls'){aceLocalSave('editor2');}
if (gmo=='lr'){aceLocalRestore('editor2');}
if (gmo=='sd'){aceTargetSave('cSave','cf','.css','rwebi-StackEdit-');}
if (gmo=='xs'){aceClear('editor2');}
oReset('cFile');}

function jsFile(){
gmo=document.getElementById('jFile').value;
if (gmo=='of'){document.getElementById('fb3').click();}
if (gmo=='ch'){aceCopyAll('editor3');}
if (gmo=='et'){aceTabExport('editor3');}
if (gmo=='ls'){aceLocalSave('editor3');}
if (gmo=='lr'){aceLocalRestore('editor3');}
if (gmo=='sd'){aceTargetSave('jSave','jf','.js','rwebi-StackEdit-');}
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
//document.getElementById('oi').innerHTML="";
}
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
nww=window.innerWidth-15;
nwh=window.innerHeight-160;
document.getElementById("hbox").style.width=nww+"px";
document.getElementById("hheader").style.width=nww+"px";
document.getElementById("editor1").style.width=nww+"px";
document.getElementById("editor1").style.height=nwh+"px";
dVis('hbox');dHid('cbox');dHid('jbox');}

// CSS Wide View: ----------------------
function cWide(){
nww=window.innerWidth-15;
document.getElementById("cbox").style.width=nww+"px";
document.getElementById("cbox").style.marginLeft="0px";
document.getElementById("cheader").style.width=nww+"px";
document.getElementById("editor2").style.width=nww+"px";
dVis('cbox');dHid('hbox');dHid('jbox');}

// CSS Full View: ----------------------
function cFull(){
nww=window.innerWidth-15;
nwh=window.innerHeight-160;
document.getElementById("cbox").style.width=nww+"px";
document.getElementById("cheader").style.width=nww+"px";
document.getElementById("editor2").style.width=nww+"px";
document.getElementById("editor2").style.height=nwh+"px";
dVis('cbox');dHid('hbox');dHid('jbox');}

// JS Wide View: -----------------------
function jWide(){
nww=window.innerWidth-15;
document.getElementById("jbox").style.width=nww+"px";
document.getElementById("jbox").style.marginLeft="0px";
document.getElementById("jheader").style.width=nww+"px";
document.getElementById("editor3").style.width=nww+"px";
dVis('jbox');dHid('hbox');dHid('cbox');}

// JS Full View: -----------------------
function jFull(){
nww=window.innerWidth-15;
nwh=window.innerHeight-160;
document.getElementById("jbox").style.width=nww+"px";
document.getElementById("jheader").style.width=nww+"px";
document.getElementById("editor3").style.width=nww+"px";
document.getElementById("editor3").style.height=nwh+"px";
dVis('jbox');dHid('hbox');dHid('cbox');}

// View Split: -------------------------
function vSplit(){
giw=window.innerWidth;
gih=window.innerHeight;
ow=3;pw=(giw-ow)/3.1;
oh=160;ph=(gih-oh);
document.getElementById("hbox").style.width=pw+"px";
document.getElementById("hheader").style.width="auto";
document.getElementById("editor1").style.height=ph+"px";
document.getElementById("editor1").style.width=pw+"px";
document.getElementById("cbox").style.width=pw+"px";
document.getElementById("cbox").style.marginLeft="3px";
document.getElementById("cheader").style.width="auto";
document.getElementById("editor2").style.height=ph+"px";
document.getElementById("editor2").style.width=pw+"px";
document.getElementById("jbox").style.width=pw+"px";
document.getElementById("jbox").style.marginLeft="3px";
document.getElementById("jheader").style.width="auto";
document.getElementById("editor3").style.height=ph+"px";
document.getElementById("editor3").style.width=pw+"px";
dVis('jbox');dVis('hbox');dVis('cbox');}

// View Stack: --------------------------
function ViewStack(sw){
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
if (sw=='sv'){document.getElementById('sv').innerHTML=gpt;}
if (sw=='ts'){document.getElementById('vt').value=gpt;eTab('v','vt');}
if (sw=='tv'){nt=window.open();nt.document.write(gpt);}
if (sw=='cv'){document.getElementById('vt').value=gpt;eCopy('v','vt');}
if (sw=='ls'){document.getElementById('vt').value=gpt;lSave('v','vt');}
if (sw=='lr'){document.getElementById('vt').value=gpt;aceLocalRestore('editor1');}
if (sw=='sd'){document.getElementById('vt').value=gpt;
aceTargetSave('sSave','sf','.html','rwebi-GridStack-');}}

function SourceCount(){
BoxCount('editor1','h');
BoxCount('editor2','c');
BoxCount('editor3','j');}

function BoxCount(ei,et){
editor = ace.edit(ei);
var editorContent = editor.getSession().getValue();
var characterCount = editorContent.length;
rowCount = editor.session.getLength();

tcc=et+"cc";
tlc=et+"lc";

document.getElementById(tcc).value=characterCount;
document.getElementById(tlc).value=rowCount;}
