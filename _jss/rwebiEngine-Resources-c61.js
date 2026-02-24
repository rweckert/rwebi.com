// rwebiEngine-Resources-c61.js Created:12/22/2021 Updated:01/17/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
RowCount();rFlex('cc');nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Select Options: ---------------------
function OptionsOpt(){
gmo=document.getElementById("soOptions").value;
if (gmo=='clear'){ClearQuery();}
if (gmo=='copy'){eCopy('i','cc');}
if (gmo=='download'){eVis('sView');cFocus('sf');}
if (gmo=='edata'){eTab('i','cc');}
if (gmo=='esource'){eTab('h','cc');}
if (gmo=='lsave'){lSave('i','cc');}
oReset('soOptions');}

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
RowCount();ColumnCount();}

// Table Row Count: --------------------
function RowCount(){
gct=document.getElementById('tData').innerText;
grc=gct.split('\n').length;grc=eval(grc-1);
//grc=grc/2;
document.getElementById('rc').innerHTML=grc;}

// Table Column Count: -----------------
function ColumnCount(){
gcc=document.getElementById('tData').rows[1].cells.length;
document.getElementById('tbc').innerHTML=gcc;}

// Clear Query: ------------------------
function ClearQuery(){
document.getElementById("qs").value="";
gqs=document.getElementById("soColumn");
gqs.value="et";
TableSearch();}
