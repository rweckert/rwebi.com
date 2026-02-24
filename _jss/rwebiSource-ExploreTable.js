// rwebiSource-ExploreTable.js Created:12/22/2021 Updated:01/16/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
ghw=document.getElementById('sBar').clientWidth;
qsnw=ghw-310;document.getElementById('qs').style.width=qsnw+"px";
RowCount();}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Select Options: ---------------------
function OptionsOpt(){
gmo=document.getElementById('soOptions').value;
if (gmo=='clear'){ClearQuery();}
if (gmo=='copy'){eCopy('i','tData');}
if (gmo=='download'){eVis('sView');cFocus('sf');}
if (gmo=='edata'){eTab('h','vListing');}
if (gmo=='esource'){eTab('i','tData');}
if (gmo=='lsave'){lSave('i','tData');}
oReset('soOptions');}

// Query on Enter: ---------------------
function onEnter(){
if (event.keyCode==13){Query();}}

// Query Table: ------------------------
function Query(){
gco=document.getElementById('soColumn').value;
if (gco=="et"){TableSearch();} else {ColumnSearch(gco);}}

// Clear Query: ------------------------
function ClearQuery(){
document.getElementById('qs').value="";
gqs=document.getElementById("soColumn");
gqs.value="et";TableSearch();}

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

function RowCount(){
gct=document.getElementById('tData').innerText;
grc=gct.split('\n').length;grc=eval(grc-1);
document.getElementById('rc').innerHTML=grc;}


