// rwebiEngine-AceEditor-c61.js  Created:12/22/2021  Updated:12/31/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Ace Page Navagiation: --------------
// pgFirst
// pgMiddle
// pgLast
// pgUp
// pgDown

// Ace Row Controls: ------------------
// aceRowGoto
// aceRowCopy
// aceRowDelete

// Ace Find & Replace: ----------------
// aceFind
// aceReplace

// Ace Clear Options: -----------------
// aceClear
// aceClearResults

// Ace Tab Exports: -------------------
// aceTabView
// aceTabText

// Ace Text Copy Controls: ------------
// aceCopySelected
// aceCopyAll
// aceCutSelected
// acePaste
// aceInCode
// aceInText

// Ace Setting Options: ---------------
// aceWrap
// aceLock
// aceNumbering
// aceScanning
// aceLanguage
// aceTheme

// Ace Text Counting: -----------------
// aceCount
// aceCountText
// aceCountAll
// aceCountWords
// aceCountRows

// Ace Session and File Functions: ----
// aceUndo
// aceRedo
// aceSessionRestore
// aceSessionClear
// aceSessionUndo
// aceSessionDestroy
// aceLocalSave
// aceLocalRestore
// aceOpen
// aceLoad
// aceSave
// aceDownload

// ------------------------------------

// Ace Navigation - First Page: -------
function pgFirst(){
row=1;
column=Infinity;
editor.gotoLine(row,column);}

// Ace Navigation - Middle Page: ------
function pgMiddle(){
row=editor.session.getLength()/2;
column=Infinity;
editor.gotoLine(row,column);}

// Ace Navigation - Last Page: --------
function pgLast(){
row=editor.session.getLength();
column=Infinity;
editor.gotoLine(row,column);}

// Ace Navigation - Page Up: ----------
function pgUp(ei){
gcv=ace.edit(ei);
gcv.execCommand("gotopageup");}

// Ace Navigation - Page Down: --------
function pgDown(ei){
gce=ace.edit(ei);
gce.execCommand("gotopagedown");}

// Ace Navigation - Goto Row: ----------
function aceRowGoto(ei){
gln=prompt("Go to the following line number:");
//gcv=ace.edit(ei);
editor.gotoLine(gln);}

// Ace Navigation - Down Row: ----------
function aceRowDown(ei){
gcv=ace.edit(ei);
editor.navigateDown();}

// Ace Navigation - Up Row: ------------
function aceRowUp(ei){
editor=ace.edit(ei);
editor.execCommand("navigateLineUp");}

// Ace Row Current Copy: --------------
function aceRowCopy(ei){
gcv=ace.edit(ei);
gcr=gcv.getSelectionRange().start.row;
crv=gcv.session.getLine(gcr);
if (!gcv){alert("No text found. Nothing to copy.");return false;}
if (navigator.clipboard && navigator.clipboard.writeText) {
navigator.clipboard.writeText(crv).then(() => {
alert('All text ccopied to clipboard successfully.');
}).catch(err => {
alert('Failed to copy text.');
});
} else {
try {
editor.selectAll();
editor.focus();
document.execCommand('copy');
alert('All text ccopied to clipboard successfully using fallback method.');
} catch (err) {
alert('Fallback copy method failed: ', err);}}}

// Ace Row Current Delete: ------------
function aceRowDelete(ei){
gcv=ace.edit(ei);
gcv.removeLines();
// Not Complete
}

// Ace Find Feature: ------------------
function aceFind(ei){
editor = ace.edit(ei);
editor.execCommand('find');}

// Ace Replace Feature: ---------------
function aceReplace(ei){
editor = ace.edit(ei);
editor.execCommand('replace');}

// Ace Search Hide: --------------------
function aceSearchHide(ei){
var editor = ace.edit(ei);
if (editor.searchBox) {editor.searchBox.hide();
st.innerHTML="false";}}

// Ace Search Toggle: ------------------
function aceSearchToggle(ei){
var editor=ace.edit(ei);
gst=document.getElementById('st').innerText;
if (gst=='false'){aceFind('editor');st.innerHTML="true";}
if (gst=='true'){editor.searchBox.hide();st.innerHTML="false";}}

// Ace New: ----------------------------
function aceNew(ei){
if (confirm("Are you sure you want to create a new document?")) {
var editor = ace.edit(ei);
cv="";editor.session.setValue(cv);
} else {alert("Document creation cancelled.");}}

// Ace Clear: -------------------------
function aceClear(ei){
if (confirm("Are you sure you want to clear the document?")) {
var editor = ace.edit(ei);
cv="";editor.session.setValue(cv);
} else {alert("Clear document cancelled.");}}

// Ace Clear Results: -----------------
function aceClearResults(ei){
editor=ace.edit(ei);
cv="";editor.session.setValue(cv);}

// Ace Export View Tab: ---------------
function aceTabView(){
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found. Nothing to export.");return false;}
nt=window.open();
nt.document.write(gcv);}

// Ace Export Text Tab: --------------
function aceTabText(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
if (!gcv){alert("No text found. Nothing to export.");return false;}
br=unescape('%3Cb%72%3E'); //<br>
gcv=gcv.replace(/\n/g, br);
nt=window.open();
nt.document.write(gcv);}

// Ace Export Text Tab: --------------
function aceTabExport(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
v1=unescape('%3C%74e%78%74a%72ea%20%73%74%79%6ce%3D%22%77%69d%74%68%3A98%2e5%25%3B%68e%69%67%68%74%3A100%25%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A%23ffffff%3Bc%6f%6c%6f%72%3A%23000000%3Bf%6f%6e%74%2d%73%69%7ae%3A12%70%78%3Bb%6f%72de%72%2d%77%69d%74%68%3A1%70%78%3Bb%6f%72de%72%2d%73%74%79%6ce%3A%73%6f%6c%69d%3Bb%6f%72de%72%2dc%6f%6c%6f%72%3A%2300bfff%3B%22%3E');
v2=unescape('%3C%2f%74e%78%74a%72ea%3E');
tt=v1+gcv+v2;
nt=window.open();
nt.document.write(tt);}


// Ace Copy Selected Text: ------------
function aceCopySelected(ei){
  var selectedText = editor.getSelectedText();

  if (selectedText) {
    navigator.clipboard.writeText(selectedText).then(function() {
      alert('Selected text copied to clipboard!');
      // Optional: Provide user feedback (e.g., a "Copied!" message)
    }).catch(function(err) {
     alert('Could not copy text: ', err);
      // Fallback for cases where the Clipboard API is not available or permission denied
      fallbackCopyTextToClipboard(selectedText);
    });
  } else {
  alert('Fallback copy method failed: ', err);
  }
// Not Complete
}

// Ace Copy All Text: -----------------
function aceCopyAll(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
if (!gcv){alert("No text found. Nothing to copy.");return false;}
if (navigator.clipboard && navigator.clipboard.writeText) {
navigator.clipboard.writeText(gcv).then(() => {
alert('All text ccopied to clipboard successfully.');
}).catch(err => {
alert('Failed to copy text.');
});
} else {
try {
editor.selectAll();
editor.focus();
document.execCommand('copy');
alert('All text ccopied to clipboard successfully using fallback method.');
} catch (err) {
alert('Fallback copy method failed: ', err);}}}

// Ace Text Cut: ----------------------
function aceCutSelected(ei){
editor = ace.edit("editor");
textToCut = editor.getCopyText();
if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCut).then(function() {
        editor.insert(""); 
        alert('Text successfully cut to clipboard');
    }).catch(function(err) {
        alert('Could not cut text: ', err);
    });
} else {
    editor.execCommand("cut");
    alert('Using fallback cut command');
}}

// Ace Select All Text: ----------------
function aceSelectAll(ei){
gce=ace.edit(ei);
gce.selectAll();}

// Ace Deselect All Text: ----------------
function aceDeselect(ei){
gce=ace.edit(ei);
gce.selection.clearSelection();}

// Ace Text Paste: ---------------------
async function acePaste(ei){
cb=await navigator.clipboard.readText();
var session = editor.session;
var position = editor.getCursorPosition();
session.insert(position,cb);}

// Ace Insert Code: -------------------
function aceInCode(ei,cs){
cs=unescape(cs);
gcs=editor.session;
gcp=editor.getCursorPosition();
gcs.insert(gcp,cs);}

// Ace Insert Text: -------------------
function aceInText(ei,ts){
gcs=editor.session;
gcp=editor.getCursorPosition();
gcs.insert(gcp,ts);}

// Ace Word Wrap: ---------------------
function aceWrap(ei){
editor = ace.edit(ei);
isWordWrapEnabled = editor.session.getUseWrapMode();
if (isWordWrapEnabled) {
editor.session.setUseWrapMode(false);
}else{editor.session.setUseWrapMode(true);}}

// Ace Editor Lock: -------------------
function aceLock(ei){
var editor=ace.edit(ei);
var isReadOnly=editor.getReadOnly();
if (isReadOnly === false) {
editor.setReadOnly(true);
} else {
editor.setReadOnly(false);}}

// Ace Line NumberingL ----------------
function aceNumbering(ei){
editor=ace.edit(ei);
gao=document.getElementById('ln').innerText;
if (gao=='true'){editor.renderer.setOption('showLineNumbers', false);editor.renderer.setShowGutter(false);
ln.innerText="false";}
if (gao=='false'){editor.renderer.setOption('showLineNumbers', true);editor.renderer.setShowGutter(true);
ln.innerText="true";}}

// Ace Text Scanning: -----------------
function aceScanning(ei){
editor=ace.edit(ei);
gao=document.getElementById('sc').innerText;
if (gao=='true'){editor.getSession().setOption("useWorker", false);
sc.innerText="false";}
if (gao=='false'){editor.getSession().setOption("useWorker", true);
sc.innerText="true";}}

// Ace Script Language: ---------------
function aceLanguage(ei,sl){
gce=ace.edit(ei);
gce.session.setMode("ace/mode/'+sl+'");}

// Ace Script Language: ---------------
function aceSetLanguage(ei){
gce=ace.edit(ei);
//gcs=editor.session;
gss=document.getElementById('soSyntax').value;
gce.session.setMode("ace/mode/"+gss);}

// Ace Editor Theme: ------------------
function aceSetTheme(ei){
gce=ace.edit(ei);
gts=document.getElementById('soAceTheme').value;
gce.setTheme("ace/theme/"+gts);}

// Ace Counting: ----------------------
function aceCount(ei){
aceCountText(ei);aceCountRows(ei);aceCountWords(ei);aceCountAll(ei);}

// Ace Counting Text: -----------------
function aceCountText(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
cc=gcv.length;
lc=gcv.split('\n').length;
tc=cc-lc;
if (tc<0){act.innerHTML="1";}
if (tc>0){act.innerHTML=tc;}}

// Ace Count All: ---------------------
function aceCountAll(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
cc=gcv.length;
aca.innerHTML=cc;}

// Ace Count Words: -------------------
function aceCountWords(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
wc=0;
res=gcv.split(' ');
for (i=0;i<res.length;i++){
if (res[i] !=""){wc+=1;}}
acw.innerHTML=wc;}

// Ace Count Words: --------------------
function aceCountRows(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
rc=editor.session.getLength();
acr.innerHTML=rc;}

// Ace Undo Opration: ------------------
function aceUndo(ei){
editor.getSession().getUndoManager().undo();}

// Ace Redo Opration: ------------------
function aceRedo(ei){
editor.getSession().getUndoManager().redo();}

// Ace Session Save: -------------------
function aceSessionSave(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
document.getElementById('ut').value=gcv;
alert('Session has been saved to session undo area successfully.');}

// Ace Session Restore: ---------------
function aceSessionRestore(ei){
gut=document.getElementById('ut').innerText;
editor=ace.edit(ei);
editor.session.setValue(gut);}

// Ace Session Clear: -----------------
function aceSessionClear(ei){
editor=ace.edit(ei);cs="";
editor.session.setValue(cs);}

// Ace Session Undo: ------------------
function aceSessionUndo(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
gru=document.getElementById('ut').value;
if (!gru){alert("No session found to restore. Nothing to undo.");return false;}
gru=document.getElementById('ut').value;
editor.session.setValue(gru);}

// Ace Session Destroy: ---------------
function aceSessionDestroy(ei){
if (confirm("Are you sure you want to destroy this session?")) {
gcs=ace.edit(ei);
gcs.destroy();
gcs.container.remove();
} else {
alert("Session destroy cancelled.");}}

// Ace Local Storage Save: ------------
function aceLocalSave(ei){
editor=ace.edit(ei);
gcv=editor.session.getValue();
if (!gcv){alert("No text found. Nothing to save.");return false;}
localStorage.setItem('rwebiText',gcv);
alert("Text saved to local storage successfully.\n\nYou can restore using a different rwebi module or tool to make further changes.");}

// Ace Local Storage Restore: ---------
function aceLocalRestore(ei){
rt=localStorage['rwebiText'];
if (!rt){alert("No text found. Nothing to restore.");return false;}
editor=ace.edit(ei);
editor.session.setValue(rt);}

// Ace Open File: ---------------------
function aceOpen(ei,et){
if(!et){et="fb";}
var file=document.getElementById(et).files[0];
cf=document.getElementById(et).value;
var reader=new FileReader();
reader.onload=function(e){
var textArea=document.getElementById("tt");
textArea.value=e.target.result;}
reader.readAsText(file);
setTimeout(aceLoad, 450,ei);}

// Ace Open File: ---------------------
function aceTargetOpen(fb,ei){
var file=document.getElementById(fb).files[0];
cf=document.getElementById(fb).value;
var reader=new FileReader();
reader.onload=function(e){
var textArea=document.getElementById("tt");
textArea.value=e.target.result;}
reader.readAsText(file);
setTimeout(aceLoad, 450,ei);}

// Ace Load: --------------------------
function aceLoad(ei){
gts=document.getElementById('tt').value;
var editor = ace.edit(ei);
editor.session.setValue(gts);}

// Ace Save: --------------------------
function aceSave(sfn){
cts=fStamp('r');
fn=sfn+cts+".txt";
document.getElementById('sf').value=fn;
eVis('sView');}

function aceTargetSave(td,tf,sfe,sfn){
cts=fStamp('r');
fn=sfn+cts+sfe;
document.getElementById(tf).value=fn;
eVis(td);}

// Ace Download: ----------------------
function aceDownload(ei,et){
if(!et){et="sf";}
gfn=document.getElementById(et).value;
editor = ace.edit(ei);
content = editor.session.getValue();
element=document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
element.setAttribute('download',gfn);
element.style.display = 'none';
document.body.appendChild(element);
element.click();document.body.removeChild(element);}

// Ace Editor Print: -------------------
function acePrint() {
const printContents = editor.getSession().getValue();
const printWindow = window.open('', '_blank', 'height=600,width=800');
printWindow.document.write('<html><head><title>Ace Editor Document</title>');
printWindow.document.write('<style>body { font-family: sans-serif; padding: 20px; }</style>');
printWindow.document.write('</head><body>');
printWindow.document.write(printContents);
printWindow.document.write('</body></html>');
printWindow.document.close();
printWindow.focus();
printWindow.print();
printWindow.close();}

// Ace Cursor Change: ------------------
function aceCursor(ei){
gco=document.getElementById('soCursor').value;
editor=ace.edit(ei);
editor.setOption("cursorStyle", gco);}

// Ace Settings: ----------------------
function aceSettings(ei){

// Current Editor Details:
gce=ace.edit("editor");              // current editor
gcs=gce.getSession();                // current session
gen=ei;                              // editor name
gsi=gcs.getMode().$id;               // session id

gst=gce.getTheme();                  // session theme
gsl=gce.session.$modeId;              // session language

gfs=gce.getFontSize();               // font size

gcl=gce.selection.getCursor().row+1; // current line-row
gcp=gcs.selection.getCursor();       // cursor position
gcc=gcp.column;                      // cursor column
//gsr=gcs.renderer.$getVisibleRowCount();

gtp=gce.getSession().getLength();    // total pages
gln=""; // line numbering
gel=""; // editor lock
ges=""; // editor scanning

//aen.innerText=gen;
//asi.innerText=gsi;
//asl.innerText=gsl;
//ast.innerText=gst;

//afs.innerText=gfs;
//acl.innerText=gcl;

//acp.innerText=gcp;
//acc.innerText=gcc;
//atp.innerText=gtp;
//asr.innerText=gsr;
}

