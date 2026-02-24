// rwebiModule-Calculator-Scientific.js Created:01/09/2021  Updated:01/15/2025
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');
gisw=window.innerWidth-35;nhw=window.innerWidth-30;
document.getElementById("cd").style.width=gisw-0+"px";
document.getElementById("mHeader").style.width=nhw-0+"px";
cCode('mMenu','mSwap');aceCount('editor');}

// Module Resize: ----------------------
function mResize(){
mStart();}

function fOpt(){
go1=document.getElementById('o1').value;
if (go1=='copy'){eCopy('v','cp');}
if (go1=='save'){lSave('v','cp');}
if (go1=='restore'){lRestore('v','cp');}
if (go1=='download'){dFile('v','cp','rwebi-calcpad.txt');}
if (go1=='export'){eTab('v','cp');}
if (go1=='clear'){eClear('v','cp')}
oReset('o1');}

function cInserts(){
gci=document.getElementById('o2').value;
gcd=document.getElementById('cd').value;
acd=gcd+gci;
document.getElementById('cd').value=acd;
oReset('o2');}

// Calculate on Enter: --------------------
function onEnter(){
if (event.keyCode==13){fValue();}}

function iValue(n){
v=document.getElementById('cd').value;
if (v=='0'){document.getElementById('cd').value=v+n;}
else {document.getElementById('cd').value=v+n;}
cv=document.getElementById('cd').value;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"Input: "+cv;
document.getElementById('cp').value=gpt;}

function cValue(){
document.getElementById('cd').value="0";}

function bValue(ei){
gv=document.getElementById(ei).value;
bs=gv.substr(0,gv.length-1);
document.getElementById(ei).value=bs;}

function fValue(){
cv=document.getElementById('cd').value;
cv=cv.replaceAll('%', '/100');
st=eval(cv);
document.getElementById('cd').value=st;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"Resolved: "+cv+"="+st;
document.getElementById('cp').value=gpt;}

function vToggle() {
gcd = document.getElementById('cd').value;
if (gcd.charAt(0)==="-"){
gcd = gcd.substring(1);pcd="+"+gcd;document.getElementById('cd').value=pcd;}
if (gcd.charAt(0)==="+"){
gcd = gcd.substring(1);pcd="-"+gcd;document.getElementById('cd').value=pcd;}}

function sDRF(sw){
if (sw=="rad"){rl=document.getElementById('rad');rl.style.color="#ff0000";
dl=document.getElementById('deg');dl.style.color="#000000";
window.document.forminput.rd.value="rad";}
if (sw=="deg"){dl=document.getElementById('deg');dl.style.color="#ff0000";
rl=document.getElementById('rad');rl.style.color="#000000";
window.document.forminput.rd.value="deg";}}

function fSIN(){
var text = document.getElementById('cd').value
var grd = document.getElementById('r').value;
if (grd == "rad"){
document.getElementById('cd').value = Math.sin(text);
} else if (grd == "deg"){
document.getElementById('cd').value = Math.sin(text * (Math.PI / 180));}
cv=document.getElementById('cd').value;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"SIN: "+cv;
gpt=gpt.replace(/^\s*[\r\n]/gm,'');
document.getElementById('cp').value=gpt;}

function fCOS(){
var text = document.getElementById('cd').value;
var grd = document.getElementById('rd').value;
if (grd == "rad"){
document.getElementById('cd').value = Math.cos(text);
} else if (grd == "deg"){
document.getElementById('cd').value = Math.cos(text * (Math.PI / 180));}
cv=document.getElementById('cd').value;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"COS: "+cv;
gpt=gpt.replace(/^\s*[\r\n]/gm,'');
document.getElementById('cp').value=gpt;}

function fTAN(){
var text = document.getElementById('cd').value;
var grd = document.getElementById('rd').value;
if (grd == "rad"){
document.getElementById('cd').value = Math.tan(text);
} else if (grd == "deg"){
document.getElementById('cd').value = Math.tan(text * (Math.PI / 180));}
cv=document.getElementById('cd').value;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"TAN: "+cv;
gpt=gpt.replace(/^\s*[\r\n]/gm,'');
document.getElementById('cp').value=gpt;}

function fSQRT(){
var text = document.getElementById('cd').value;
window.document.forminput.cd.value = Math.sqrt(text);
cv=document.getElementById('cd').value;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"SQRT: "+cv;
gpt=gpt.replace(/^\s*[\r\n]/gm,'');
document.getElementById('cp').value=gpt;}

function fLOG(){
var text = document.getElementById('cd').value;
document.getElementById('cd').value = Math.log(text);}
 
function fEXP(){
var text = document.getElementById('cd').value;
document.getElementById('cd').value= Math.exp(text);
cv=document.getElementById('cd').value;
gcp=document.getElementById('cp').value;
gpt=gcp+"\n"+"EXP: "+cv;
gpt=gpt.replace(/^\s*[\r\n]/gm,'');
document.getElementById('cp').value=gpt;}

function mClear(){
document.getElementById('mp').value="";
alert('Memory cleared');}

function mRecall(){
gm=document.getElementById('mp').value;
if (gm.length === 0) {
alert('No memory saved to recall.');}
if (gm.length > 0) {
document.getElementById('cd').value=gm;}}

function mStore(){
cv=document.getElementById('cd').value;
document.getElementById('mp').value=cv;
alert('Memory stored');}

function mPlus(){
gm=document.getElementById('cd').value;
cv=document.getElementById('cd').value;
ms=eval(Number(gm)+Number(cv));
document.getElementById('cd').value=ms;}

function cSize(){
giw=window.innerWidth;
gih=window.innerHeight;
bw=giw/10;
bh=gih/9.5;
fs=gih/2.5;
fs2=gih/3.5;
ls=gih/9;
ls2=gih/8;

elements=document.getElementsByClassName('cbo');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbe');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbv');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cba');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbg');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbr');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbr');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbt');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cby');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbb');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}

elements=document.getElementsByClassName('cbc');
for (i=0;i<elements.length;i++){
element=elements[i];
element.style.width=bw+"px";
element.style.height=bh+"px";
element.style.fontSize=fs+"%";
element.style.lineHeight=ls+"px"}
dSize();}

function dSize(){
b1w=document.getElementById('bt1').clientWidth;
gcw=b1w*7+55;ncdw=b1w*7+30;
document.getElementById('cd').style.width=ncdw+"px";
document.getElementById('cp').style.width=gcw+"px";}
