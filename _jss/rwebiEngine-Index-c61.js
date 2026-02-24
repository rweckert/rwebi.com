// rwebiEngine-Index-c61.js Created:12/22/2021 Updated:02/11/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('sBar');
gish=window.innerHeight;
gisw=window.innerWidth;
mft=gish-20;
document.getElementById('iFooter').style.top=mft+"px";
ift=gish-32;
document.getElementById('iBar').style.top=ift+"px";
ict=gish-55;
document.getElementById('lOptions').style.top=ict+"px";

if(gisw<400){
fxh=gisw/4;
grl=document.getElementById("apps");
grl.style.width="220px";}

if(gisw>400){
grl=document.getElementById("apps");
grl.style.width="400px";}

eHid('oView');
fDate('i','tStamp');}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Search on Enter: --------------------
function onEnter(){
if (event.keyCode==13){SearchValid();}}

function iFlex(){
giw=window.innerWidth;
gih=window.innerHeight;
document.all.miw.innerText=giw;
document.all.mih.innerText=gih;
mft=gih-23;mbt=gih-70;
document.getElementById('iFooter').style.top=mft+"px";
document.getElementById('iBar').style.top=mbt+"px";}

// Search Validate: --------------------
function SearchValid(){
qs=document.getElementById('rq').value;
ql=qs.length;
if (ql=="1") {alert("Please enter a search phrase or word.");return false;
} else if (ql=="2"){alert("Please enter a meaningful search phrase or word.");return false;}
else if (qs==""){alert("Please enter a search phrase or word.");return false;
} else RetrieveSearch();}

// Retrieve Search: --------------------
function RetrieveSearch(){
const inputValue = document.getElementById('rq').value;
const encodedValue = encodeURIComponent(inputValue);
window.location.href = `Apps/rwebiApp-ResultPanel-c61.html?data=${encodedValue}`;}
