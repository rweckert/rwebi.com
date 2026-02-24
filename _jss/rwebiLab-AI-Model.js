// rwebiLab-AI-Model.js Created:12/22/2021  Updated:02/03/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw+"px";}

function mResize(){
rFlex('cc');}

async function PromptGemini() {
const apik=unescape('A%49%7aa%53%79B%51%67%6f%4f%68%57%47%53%55%78%55a%4fb%5af9d%51%53%726%4c5F0%2d%54%54%783%77');
const mn=unescape('%67e%6d%69%6e%69%2d2%2e5%2df%6ca%73%68%2d%6c%69%74e');
const out=document.getElementById('hPrompt');
const msg=document.getElementById('uPrompt').value;
gsf=document.getElementById("soFormat").value;
const rawEl=document.getElementById('rawMode');
const isRaw=rawEl ? rawEl.checked : false;
if (!msg) return;
out.innerHTML += `<p><b>You:</b> ${msg}</p>`;
const tempId="loading-" + Date.now();
out.innerHTML += `<p id="${tempId}"><i>Gemini is thinking...</i></p>`;
try {
const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mn}:generateContent?key=${apik}`, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({ contents: [{ parts: [{ text: msg }] }] })
});
const data=await response.json();
document.getElementById(tempId).remove();
if (data.candidates && data.candidates[0].content) {
const aiText=data.candidates[0].content.parts[0].text;
if (gsf=="raw"){
out.innerHTML += `<div style="padding:10px; font-family:monospace; white-space:pre-wrap;"><b>Gemini (Raw):</b>\n${aiText}</div>`;
} else {
const formatted=formatToHTML(aiText);
out.innerHTML += `<p><b>Gemini:</b> ${formatted}</p>`;}
} else {
out.innerHTML += `<p style="color:red;"><b>Error:</b> ${data.error ? data.error.message : "No response."}</p>`;}
} catch (e) {
out.innerHTML += `<p style="color:red;"><b>System Error:</b> Failed to connect.</p>`;}}


function formatToHTML(str) {
return str
.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
.replace(/\n/g, '<br>');}


function formatToRaw(str) {
return str
.replace(/\*\*/g, '')
.replace(/\r?\n/g, '\n');}


function PromptFile(et,ei,ge){
var file=document.getElementById(ge).files[0];
if (!file) return; // Safety check if no file selected
var reader=new FileReader();
reader.onload=function(e) {
var fileText=e.target.result;
var promptInput=document.getElementById('uPrompt');
var currentMsg=promptInput.value;
promptInput.value=currentMsg + "\n\n--- FILE ATTACHMENT ---\n" + fileText;
console.log("File loaded successfully into prompt.");};
reader.readAsText(file);}
