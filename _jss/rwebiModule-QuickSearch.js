// rwebiModule-QuickSearch.js Created:12/22/2021  Updated:01/29/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');eHid('vTools');aceSearchHide('editor');}}

// Module Frame Check: -----------------
function mCheck(){
if (window.top === window.self) {
window.location.href = "../Modules/rwebiMenu-Modules.html";}}

// Select Options: --------------------
function FileOpt(){
gmo=window.document.forminput.soFile.value;
if (gmo=='copy'){sCopy();}
if (gmo=='vtext'){sText();}
if (gmo=='save'){sSave();}
if (gmo=='download'){sDownload();}
if (gmo=='export'){sExport();}
if (gmo=='refresh'){sValid();}
if (gmo=='clear'){aClear();}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

// Search on Enter: --------------------
function onEnter(){
if (event.keyCode==13){sValid();}}

// Search Functions: -------------------
function sValid(){
gqs=window.document.forminput.qs.value;
gql=gqs.length;
if (gql=="1"){alert("Please enter a search phrase or word.");
return false;} else if (gql=="2"){
alert("Please enter a meaningful search phrase or word.");
return false;} else if (gqs==""){
alert("Please enter a search phrase or word.");
return false;} else sQuery();}

function sQuery(){
sClear();lFrame('../Pages/rwebi-Loading.html');
gqs=window.document.forminput.qs.value;
document.forms['forminput'].submit();
setTimeout(sResult, 600);}

function sResult(){
gsr=document.getElementById('fsr').contentWindow.document.body.innerHTML;
document.getElementById("cc").innerHTML="<div style='height:99%;overflow-y:scroll;'>"+gsr+"<br><br></div>";}

function TextView(){
grf=document.getElementById('rf').innerText;
if (grf==false){document.getElementById('rf').innerText="true";sClear();sText();}
if (grf==true){document.getElementById('rf').innerText="false";sClear();sResult();}
pSwap('rt','text-','');}

function sClear(){
cs=unescape('%3C%69f%72a%6de%20%6ea%6de%3D%22%76%72%22%20%69d%3D%22%76%72%22%20f%72a%6deb%6f%72de%72%3D%220%22%20%73c%72%6f%6c%6c%69%6e%67%3D%22%79e%73%22%20%73%72c%3D%22%72%77eb%69%4d%6fd%75%6ce%2dB%6ca%6e%6b%2e%68%74%6d%6c%22%20%77%69d%74%68%3D%22100%25%22%20%73%74%79%6ce%3D%22%68e%69%67%68%74%3A88%25%3B%22%3E%3C%2f%69f%72a%6de%3E');
// <iframe name="vr" id="vr" frameborder="0" scrolling="yes" src="rwebiModule-Blank.html" width="100%" style="height:88%;"></iframe>
document.getElementById("cc").innerHTML=cs;}

function aClear(){
cs=unescape('%3C%69f%72a%6de%20%6ea%6de%3D%22%76%72%22%20%69d%3D%22%76%72%22%20f%72a%6deb%6f%72de%72%3D%220%22%20%73c%72%6f%6c%6c%69%6e%67%3D%22%79e%73%22%20%73%72c%3D%22%72%77eb%69%4d%6fd%75%6ce%2dB%6ca%6e%6b%2e%68%74%6d%6c%22%20%77%69d%74%68%3D%22100%25%22%20%73%74%79%6ce%3D%22%68e%69%67%68%74%3A88%25%3B%22%3E%3C%2f%69f%72a%6de%3E');
// <iframe name="vr" id="vr" frameborder="0" scrolling="yes" src="rwebiModule-Blank.html" width="100%" style="height:88%;"></iframe>
window.document.forminput.qs.value="";
document.getElementById("cc").innerHTML=cs;}

function sCopy(){
gsr=document.getElementById('cc').innerText;
el=document.createElement('textarea');
el.value=gsr;
el.setAttribute('readonly','');
el.style.position='absolute';
el.style.left='-9999px';
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);
alert('Search results copied to clipboard.');}

function sSave(){
gsr=document.getElementById('cc').innerText;
localStorage.setItem('rwebiText',gsr);
alert("Search results saved to local storage successfully.");}

function sDownload(){
gsr=document.getElementById('cc').innerText;
element=document.createElement('a');
element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(gsr));
element.setAttribute('download','rwebi-minisearch.txt');
element.style.display='none';
document.body.appendChild(element);
element.click();
document.body.removeChild(element);}

function sExport(){
gsr=document.getElementById('cc').innerText;
v1=unescape('%3C%74e%78%74a%72ea%20%73%74%79%6ce%3D%22%77%69d%74%68%3A98%2e5%25%3B%68e%69%67%68%74%3A100%25%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A%23ffffff%3Bc%6f%6c%6f%72%3A%23000000%3Bf%6f%6e%74%2d%73%69%7ae%3A12%70%78%3Bb%6f%72de%72%2d%77%69d%74%68%3A1%70%78%3Bb%6f%72de%72%2d%73%74%79%6ce%3A%73%6f%6c%69d%3Bb%6f%72de%72%2dc%6f%6c%6f%72%3A%2300bfff%3B%22%3E');
v2=unescape('%3C%2f%74e%78%74a%72ea%3E');
tt=v1+gsr+v2;
nt=window.open();
nt.document.write(tt);}

function sText(){
gsr=document.getElementById('cc').innerText;
gsr=gsr.replace(/(?:\r\n|\r|\n)/g,'<br>');
document.getElementById('cc').innerHTML="<div style='padding:6px;height:99%;overflow-y:scroll;'>"+gsr+"</div>";}

function lFrame(ta){
document.getElementById('vr').src=ta;}

// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('cc').style.cssText="width:99%;height:99%;min-height:50px;overflow-x:none;overflow-y:none;";
sFlex('f','cc','0','0','0');dHid('mHeader');
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
eHid('mHeader');eHid('mBar');eHid('mMenu');eHid('sBar');eHid('mFooter');
eVis('fvButton');}

function FullViewClose(){
sFlex('d','cc','0','0','0');dVis('mHeader');
document.getElementById('ow').innerText="20";
document.getElementById('oh').innerText="150";
document.getElementById('cc').style.cssText="width:100%;height:200px;margin-top:6px;border-width:1px;border-style:solid;border-color:#d9d9d9;border-radius:3px;";
eVis('mHeader');eVis('mBar');eVis('sBar');eVis('mFooter');
eHid('fvButton');eHid('fvBar');rFlex('cc');}
