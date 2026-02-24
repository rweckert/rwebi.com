// rwebiModule-Speculus.js Created:12/22/2021  Updated:12/02/2025
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');LoadEntry();
nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Record Next: ------------------------
function EntryNext(){
gri=document.getElementById('ri').value*1;
gri=gri+1;
document.getElementById('ri').value=gri;
LoadEntry();}

// Record Back: ------------------------
function EntryBack(){
gri=document.getElementById('ri').value*1;
gri=gri-1;
document.getElementById('ri').value=gri;
LoadEntry();}

function LoadEntry(){
let gri = document.getElementById('ri').value;
tno = /^\d+$/.test(gri);
if (!tno) {
alert("Error: Please enter a numeric ID only (no letters or spaces).");
return;}
fetch(`../_php/rwebiModule-Speculus.php?ri=${gri}`)
.then(response => {
if(!response.ok) throw new Error("404: PHP file not found at path");
return response.text();
})
.then(data => {
document.getElementById('cc').innerHTML = data;
})
.catch(err => {
document.getElementById('cc').innerHTML = "Error: " + err.message;
});}

function EntryExport(){
const container = document.getElementById('cc');
const inputs = container.querySelectorAll('input');
let exportString = "--- Speculus Record Export ---\n";
inputs.forEach(input => {
const label = container.querySelector(`label[for="${input.id}"]`);
const labelText = label ? label.innerText : input.name;
exportString += `${labelText}: ${input.value}\n`;
});document.getElementById('tt').value=exportString;}

function EntryCopy(){
EntryExport();
eCopy('v','tt');}

function EntryTab(){
EntryExport();
eTab('v','tt');}

function EntrySave(){
DateSave('rwebi-Speculus-');}
