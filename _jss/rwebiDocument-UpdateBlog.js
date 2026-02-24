// rwebiDocument-UpdateBlog.js Created:01/09/2021 Updated:01/25/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";
RowCount();}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Navigation Options: --------------------
function SiteNav(){
gmo=document.getElementById('navSite').value;
if (gmo=='d'){oReset('navSite');}
if (gmo=='p'){pParent('../Apps/rwebiApp-ToolPanel-c61.html');}
if (gmo=='s'){pParent('../index.html');}
if (gmo=='d'){pParent('../Apps/rwebiApp-Desktop-c61.html');}
if (gmo=='c'){pLoad('../Forms/rwebiForm-Contact.html');}
if (gmo=='h'){pLoad('../Modules/rwebiMenu-Help-Listing.html');}
if (gmo=='e'){pLoad('../Modules/rwebiModule-SourceExplore.html');}
if (gmo=='q'){pLoad('../Documents/rwebiDocument-Privacy.html');}
if (gmo=='i'){pLoad('../Forms/rwebiForm-ReportIssue.html');}
oReset('navSite');}

// Query on Enter: ---------------------
function onEnter(){
if (event.keyCode==13){Query();}}

// Query Table: ------------------------
function Query(){
gco=document.getElementById("soColumn").value;
if (gco=="et"){TableSearch();} else {ColumnSearch(gco);}}

// Column Search: ----------------------
function ColumnSearch(gco){
var input,filter,found,table,th,tr,td,i,j;
input=document.getElementById('qs');
if (!input){alert("No search input. Nothing to query.");return false;}
filter=input.value.toUpperCase();
table=document.getElementById('tData');
tr=table.getElementsByTagName('tr');
for (i=1; i < tr.length; i++){
td=tr[i].getElementsByTagName('td');
for (j=0; j < td.length; j++){
if (td[gco].innerHTML.toUpperCase().indexOf(filter) > -1){
found=true;}}
if (found){
tr[i].style.display='';
found=false;
} else {
tr[i].style.display='none';}}
RowCount();}

// Table Search: -----------------------
function TableSearch(){
var input,filter,found,table,th,tr,td,i,j;
input=document.getElementById('qs');
if (!input){alert("No search input. Nothing to query.");return false;}
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
tr[i].style.display='none';}}
RowCount();}

// Table Count: ------------------------
function TableCount(){
RowCount();}

// Table Row Count: --------------------
function RowCount(){
gct=document.getElementById('tData').innerText;
grc=gct.split('\n').length;grc=eval(grc-1);
document.getElementById('rc').innerHTML=grc;}

// Clear Query: ------------------------
function ClearQuery(){
document.getElementById("qs").value="";
gqs=document.getElementById("soColumn");
gqs.value="et";
TableSearch();}
