// rwebiModule-SourceExplore.js Created:12/22/2021 Updated:01/16/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Module Start: -----------------------
function mStart(){
mFlex('cc');
gish=window.innerHeight-144;}

// Module Resize: ----------------------
function mResize(){
mStart();}

function mFlex(ei){
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
ciw=window.innerWidth-gow;
cih=window.innerHeight-goh;
document.getElementById(ei).style.width=ciw+"px";
document.getElementById(ei).style.height=cih+"px";
miw.innerHTML=ciw;
mih.innerHTML=cih;
mvh=window.innerHeight/1.5;
document.getElementById('hView').style.height=mvh+"px";
vw=window.innerWidth-gow;vh=window.innerHeight-goh;
hFlex();}

function vFolder(){
gfv=document.getElementById('fv').textContent;
if (gfv==="true"){
gfi=document.getElementById('psf');
//gfi.src="../Source/rwebiSource-Modules.html";
document.getElementsByName('psf')[0].src = "../Source/rwebiSource-Modules.html";
document.getElementById('fv').textContent="false";}
if (gfv==="false"){
gfi=document.getElementById('psf');
//gfi.src="rwebiModule-Source-Split.html";
document.getElementsByName('psf')[0].src = "rwebiModule-Source-Split.html";
document.getElementById('fv').textContent="true";}}

function tFrame(ta){
gfi=document.getElementById('psf');
gfi.src=ta;}

function tFlex(){
document.getElementById("ps").style.display="inline-block";
document.getElementById("ps").style.height="25%";
document.getElementById("pv").style.height="75%";
document.getElementById("ps").style.paddingTop ="10px";
document.getElementById("pv").style.paddingTop ="0px";}

function bFlex(){
document.getElementById("ps").style.display="inline-block";
document.getElementById("ps").style.height="75%";
document.getElementById("pv").style.height="25%";
document.getElementById("ps").style.paddingTop ="10px";
document.getElementById("pv").style.paddingTop ="0px";}

function hFlex(){
document.getElementById("ps").style.display="inline-block";
document.getElementById("ps").style.height="50%";
document.getElementById("pv").style.height="50%";
document.getElementById("ps").style.paddingTop ="10px";
document.getElementById("pv").style.paddingTop ="0px";}

function fFlex(){
document.getElementById("ps").style.display="none";
document.getElementById("pv").style.height="100%";
document.getElementById("pv").style.paddingTop ="10px";}

