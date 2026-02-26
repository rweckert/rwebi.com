// rwebiModule-Gemini-Model.js Created:12/22/2021  Updated:02/03/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');NewPrompt();nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw-0+"px";}

function mResize(){
rFlex('cc');nhw=window.innerWidth-15;
document.getElementById("mHeader").style.width=nhw-0+"px";}

// Select Options: --------------------
function FileOpt(){
gmo=window.document.forminput.soFile.value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='new'){mReset();}
if (gmo=='copy'){eCopy('v','uPrompt');}
if (gmo=='clear'){eClear('v','uPrompt');}
if (gmo=='save'){lSave('v','uPrompt');}
if (gmo=='restore'){lRestore('v','uPrompt');}
if (gmo=='saveas'){eVis('sView');cFocus('sf');}
if (gmo=='export'){eTab('v','uPrompt');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function ResultOpt(){
gmo=window.document.forminput.soResult.value;
if (gmo=='copy'){eCopy('i','hPrompt');}
if (gmo=='clear'){ClearPrompt();}
if (gmo=='save'){lSave('i','hPrompt');}
if (gmo=='saveas'){DateSave('rwebi-ai-model-');cFocus('sf');}
if (gmo=='export'){eTab('i','hPrompt');}
oReset('soResult');}

function FormatOpt(){
gmo=window.document.forminput.soFormat.value;
if (gmo=='txt'){ResultsText();}
oReset('soFormat');}

// Clear Prompt: -----------------------
function ClearPrompt(){
if (confirm("Are you sure you want to delete the session?")){
NewPrompt();} else {return false;}}

// Clear Key: --------------------------
function ClearKey(){
iClear('v','uk');
document.getElementById("ks").innerText="Not Applied";}

// Apply Key: --------------------------
function ApplyKey(){
guk=document.getElementById('uk').value;
if (!guk){alert("No API key found. Nothing to apply.");return false;
} else {alert('Personal Google API key applied and ready for use.');}
document.getElementById("ks").innerText="Applied";eHid('uKey');}

// Prompt Open File: -------------------
function PromptFile(et,ei,ge){
var file=document.getElementById(ge).files[0];
if (!file) return;
var reader=new FileReader();
reader.onload=function(e) {
var fileText=e.target.result;
var promptInput=document.getElementById('uPrompt');
var currentMsg=promptInput.value;
promptInput.value=currentMsg + "\n\n--- FILE ATTACHMENT ---\n" + fileText;};
reader.readAsText(file);}

// New Prompt: -------------------------
function NewPrompt(){
gcd=tStamp('r','');
document.getElementById('hPrompt').innerHTML=`<span class='em12'>Please bring your own <span style='font-weight:bold;'><a href='https://aistudio.google.com/app/api-keys' target='_blank'>Google API key</a></span> in order to use the Gemini Model durring the beta phase. Apply your Google API key <span style='font-weight:bold;' onclick="eVis('uKey');"> here.</span></span><br><span class='em12 oc'>`+gcd+`</span><span class='em12'> Welcome to the rwebi Gemini Model. How can I assist you today?</span>`;}

// Gemini Prompt: ----------------------
async function PromptGemini() {
const msg = document.getElementById('uPrompt').value;
if (!msg) { alert("Please apply a prompt. Nothing to ask."); return; }
const guk = document.getElementById('uk').value;
if (!guk) { alert('Please apply a Google API Key.'); return; }
gmn=document.getElementById('soModel').value;
if (gmn=='g25f'){mn="gemini-2.5-flash";}
if (gmn=='g25fl'){mn="gemini-2.5-flash-lite";}
if (gmn=='g3fp'){mn="gemini-3-flash-preview";}
if (gmn=='g3pp'){mn="gemini-3-pro-preview";}
const out = document.getElementById('hPrompt');
const gts = tStamp('r', '');
gcr=document.getElementById("hPrompt").innerHTML;
document.getElementById('hPrompt').innerHTML=gcr+"<br><span class='em12 oc'>"+gts+"</span><span class='em12'> Prompt:> "+msg+"</span>";
gpn=document.getElementById("pn").innerText*1;
if (gpn=="0"){document.getElementById("pn").innerText="1";}
gpn=gpn+1;gid="r"+gpn;
document.getElementById("pn").innerText=gpn;
gcd=tStamp('r','');
gcr=document.getElementById("hPrompt").innerHTML;
ScrollBottom('hPrompt');
document.getElementById('hPrompt').innerHTML=gcr+`<br><span class='em12 oc'>`+gcd+`</span><span class='em12'> Gemini is processing this prompt request.</span><img id="i`+gid+`" src='../_img/waiting.gif' style='height:18px;width:80px;vertical-align:bottom;'>`;
ScrollBottom('hPrompt');
try {
const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${mn}:generateContent?key=${guk}`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ contents: [{ parts: [{ text: msg }] }] })
});
const data = await response.json();
if (data.candidates && data.candidates[0].content) {
const aiText = data.candidates[0].content.parts[0].text;
const formatted = formatToHTML(aiText);
gpn=document.getElementById("pn").innerText*1;
gpd="i"+gid;gid="r"+gpn;
gpi=document.getElementById(gpd);
gpi.src="../_img/space.png";
gcd=tStamp('r','');
gcr=document.getElementById("hPrompt").innerHTML;
document.getElementById('hPrompt').innerHTML=gcr+`<div id=`+gid+` style='margin-top:0px;height:auto;' ><span class='em12 oc'>`+gcd+`</span><span class='em12'> Gemini Response: `+gpn+`<br>${formatted}</span></div><br><span class='gbtn' onclick=\"eCopy('i','`+gid+`');\" title='Copy Response'>Copy</span>&nbsp;<span class='wbtn' onclick=\"dFile('i','`+gid+`','rwebi-ai-model-response.txt');\">Download</span>&nbsp;<span class='abtn' onclick=\"eTab('i','`+gid+`');\" title='Export Response in New Tab'>Export</span><br>`;
} else if (data.error) {
out.innerHTML += `<p style="color:red"><b>API Error:</b> ${data.error.message}</p>`;
} else {out.innerHTML += `<p style="color:orange">Unexpected response format. Check console.</p>`;
console.log("Unexpected API Data:", data);}
} catch (error) {
gcd=tStamp('r','');
gcr=document.getElementById("hPrompt").innerHTML;
document.getElementById('hPrompt').innerHTML=gcr+"<br><span class='em12 br'>"+gcd+"</span><span class='em12'>&nbsp;<img src='../_ico/dialog-warning.png' style='width:12px;height:12px;vertical-align: middle;'> Connection Error:<br>Failed to connect to API.</span>"
console.error("Fetch Error:", error);}
out.scrollTop = out.scrollHeight;}

// Format Response HTML: ---------------
function formatToHTML(str) {
return str
.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
.replace(/\n/g, '<br>');}

// Format Response Text: ---------------
function formatToRaw(str) {
return str
.replace(/\*\*/g, '')
.replace(/\r?\n/g, '\n');}

// Resutls to Text: --------------------
function ResultsText() {
gpn=document.getElementById("pn").innerText*1;
gid="r"+gpn;
gcd=tStamp('r','');
gcr=document.getElementById("hPrompt").innerHTML;
document.getElementById('hPrompt').innerHTML=gcr+`<div id=`+gid+` style='margin-top:0px;height:auto;' ><span class='em12 oc'>`+gcd+`</span><span class='em12'> Converted Session: `+gpn+`<br>${formatted}</span></div><br><span class='gbtn' onclick=\"eCopy('i','`+gid+`');\" title='Copy Response'>Copy</span>&nbsp;<span class='wbtn' onclick=\"dFile('i','`+gid+`','rwebi-ai-model-response.txt');\">Download</span>&nbsp;<span class='abtn' onclick=\"eTab('i','`+gid+`');\" title='Export Response in New Tab'>Export</span><br>`;
const out = document.getElementById("hPrompt");
const plainText = out.innerText;
out.textContent = plainText;
out.style.whiteSpace = "pre-wrap"; 
out.style.fontFamily = "monospace";}
