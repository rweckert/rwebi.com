// rwebEngine-Modules-c61.js  Created:12/22/2021  Updated:12/02/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Module Start: -----------------------
function mStart(sb){
let gcc = document.getElementById("cc");
if (gcc) {rFlex('cc');} else {xFlex();}
let ghv = document.getElementById("hView");
if (ghv) {mhv=window.innerHeight/1.5;
document.getElementById('hView').style.height=mhv+"px";}
if (sb=="sb"){mhw="30";} else {mhw="15";}
nhw=window.innerWidth-mhw;
document.getElementById("mHeader").style.width=nhw+"px";}

// Module Resize: ----------------------
function mResize(sb){
mStart(sb);}

// Query on Enter: ---------------------
function onEnter(){
if (event.keyCode==13){qOpt();}}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Navigation Options: --------------------
function ModuleNav(){
gmo=document.getElementById('navModule').value;
if (gmo=='d'){oReset('navModule');}
if (gmo=='s'){pLoad('rwebiMenu-Modules-Search.html');}
if (gmo=='l'){pLoad('rwebiMenu-Modules-Listing.html');}
if (gmo=='i'){pLoad('rwebiMenu-Modules.html');}
if (gmo=='a'){pLoad('rwebiMenu-Applications.html');}
oReset('navModule');}

// Navigation Options: --------------------
function SiteNav(){
gmo=document.getElementById('navSite').value;
if (gmo=='d'){oReset('navSite');}
if (gmo=='p'){pParent('../Apps/rwebiApp-ToolPanel-c61.html');}
if (gmo=='s'){pParent('../index.html');}
if (gmo=='d'){pParent('../Apps/rwebiApp-Desktop-c61.html');}
if (gmo=='c'){pLoad('../Forms/rwebiForm-Contact.html');}
if (gmo=='h'){pLoad('../Modules/rwebiMenu-Help-Listing.html');}
if (gmo=='l'){pLoad('../Modules/rwebiMenu-Source-Listing.html');}
if (gmo=='q'){pLoad('../Documents/rwebiDocument-Privacy.html');}
if (gmo=='i'){pLoad('../Forms/rwebiForm-ReportIssue.html');}
oReset('navSite');}

// Export Options: ---------------------
function qOpt(){
gqo=document.getElementById('qo').value;
gst=document.getElementById('ts').value;
if (gst=="lab"){rLab();return false;}
if (gst=="vault"){rVault();return false;}
if (gst=="source"){rSource();return false;}
if (gst=="templates"){rTemplates();return false;}
if (gqo=="et"){tSearch();}}

function eOpt(){
gmo=document.getElementById('eo').value;
if (gmo=='cquery'){clearQuery();}
if (gmo=='dcopy'){eCopy('i','cc');}
if (gmo=='ddata'){eVis('mSave');cFocus('sf');}
if (gmo=='edata'){eTab('i','cc');}
if (gmo=='esource'){eTab('h','cc');}
if (gmo=='lsave'){lSave('i','cc');}
oReset('eo');}

function soOpt(){
gqo=document.getElementById('qo').value;
gst=document.getElementById('ts').value;
if (gst=="lab"){rLab();return false;}
if (gst=="vault"){rVault();return false;}
if (gst=="source"){rSource();return false;}
if (gst=="templates"){rTemplates();return false;}
if (gso=="et"){tSearch();}
tcSearch(gso);}

// Query Option: -----------------------
function tcSearch(cn){
var input,filter,found,table,th,tr,td,i,j;
input=document.getElementById('ts');
filter=input.value.toUpperCase();
table=document.getElementById('tData');
tr=table.getElementsByTagName('tr');
for (i=1; i < tr.length; i++){
td=tr[i].getElementsByTagName('td');
for (j=0; j < td.length; j++){
if (td[cn].innerHTML.toUpperCase().indexOf(filter) > -1){
found=true;}}
if (found){
tr[i].style.display='';
found=false;
} else {
tr[i].style.display='none';}}}

// Query Generic: ----------------------
function tSearch(){
var input,filter,found,table,th,tr,td,i,j;
input=document.getElementById('ts');
filter=input.value.toUpperCase();
table=document.getElementById('tData');
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

// Clear Query: ------------------------
function clearQuery(){
gst=document.getElementById('ts').value="";
gqs=document.getElementById("qo");
gqs.value="et";
tSearch();}
