// rwebiModule-Calculator-Basic.js Created:01/09/2021  Updated:01/25/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');
gisw=window.innerWidth-35;nhw=window.innerWidth-30;
document.getElementById("cd").style.width=gisw+"px";
document.getElementById("mHeader").style.width=nhw+"px";}

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
if (v=="0"){document.getElementById('cd').value=n;}
else {document.getElementById('cd').value=v+n;}}

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
gpt=cv+"="+st+"\n"+gcp;
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
gm=document.getElementById('mp').value;
cv=document.getElementById('cd').value;
ms=eval(Number(gm)+Number(cv));
document.getElementById('cd').value=ms;}

function dSize(){
b1w=document.getElementById('bt1').clientWidth;
gcw=b1w*4+40;ncdw=b1w*5+30;
document.getElementById('cd').style.width=ncdw+"px";}
