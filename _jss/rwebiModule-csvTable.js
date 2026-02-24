// rwebiModule-csvTable.js Created:12/22/2021  Updated:12/02/2025
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
nFlex('tView');
nhw=window.innerWidth-30;
document.getElementById("mHeader").style.width=nhw+"px";
document.getElementById("editor").style.width=nhw+"px";
document.getElementById("tView").style.width=nhw+"px";
document.getElementById("vHeader").style.width=nhw-5+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='new'){aceNew('editor');aceCount('editor');}
if (gmo=='copy'){aceCopyAll('editor');}
if (gmo=='clear'){aceClear('editor');aceCount('editor');}
if (gmo=='save'){aceLocalSave('editor');}
if (gmo=='restore'){aceLocalRestore('editor');}
if (gmo=='saveas'){aceSave('rwebi-DataTable-');}
if (gmo=='export'){aceTabText('editor');}
if (gmo=='eView'){aceTabView('editor');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function HeaderOpt(){
gmo=document.getElementById('soHeader').value;
if (gmo=='ch'){eCopy('v','vHeader');}
if (gmo=='xh'){iClear('v','vHeader');}
if (gmo=='et'){eTab('v','vHeader');}
oReset('soHeader');}

function DelimOpt(){
gmo=document.getElementById('soDelim').value;
document.getElementById('dc').value=gmo;
oReset('soDelim');}

function TableOpt(){
gmo=document.getElementById('soTable').value;
if (gmo=='ct'){eCopy('h','tViewer');}
if (gmo=='xt'){iClear('h','tViewer');}
if (gmo=='dt'){}
if (gmo=='et'){eTab('h','tViewer');}
if (gmo=='tt'){eTab('i','tViewer');}
oReset('soTable');}

// Header Remove: ----------------------
function HeaderRemove(){
editor=ace.edit('editor');
gcv=editor.getSession().getValue();
rv=gcv.split('\n');
rv.splice(0,1);
nv=rv.join('\n');
editor.session.setValue(nv);
ConvertTable();aceCount('editor');}

// Header Edit: ------------------------
function HeaderEdit(){
editor=ace.edit('editor');
gcv=editor.getSession().getValue();
rv=gcv.split('\n').shift();
document.getElementById('vHeader').value=rv;}

// Header Add: -------------------------
function HeaderAdd(){
ghv=document.getElementById('hView').value;
if(!ghv){ConvertTable();aceCount('editor');
} else {ghv=ghv+"\n";
editor=ace.edit('editor');
gcv=editor.getSession().getValue();
gdt=ghv+gcv;
editor.session.setValue(gdt);
ConvertTable();aceCount('editor');}}

// Clear Table: ------------------------
function ClearTable(){
document.getElementById('tViewer').innerHTML="";
TableCount();}

// Convert Table: ----------------------
function ConvertTable(){
rs=unescape('%3C%74%72%3E%3C%74d%3E'); // <tr><td>
re=unescape('%3C%2f%74d%3E%3C%2f%74%72%3E'); // </td></tr>
cs=unescape('%3C%2f%74d%3E%3C%74d%3E'); // </td><td>
gds=document.getElementById('dc').value;
if (!gds){alert('Must provide a delimeter character.');return('false');}
if (gds === "\\t") gds="\t";
if (gds === "\\n") gds="\n";
ghv=document.getElementById('vHeader').value;
hdf=ghv.replace(/\n/g,re+'\n'+rs);
rex=new RegExp(gds,'g');
htf=hdf.replace(rex,cs);
editor=ace.edit('editor');
gdd=editor.getSession().getValue();
start=unescape('%3C%74ab%6ce%20%69d%3D%22%74Da%74a%22%20%6ea%6de%3D%22%74Da%74a%22%20%73%74%6ce%3D%22%77%69d%74%68%3A100%25%3B%68e%69%67%68%74%3A100%25%3B%22%20b%6f%72de%72%3D%221%22%20ce%6c%6c%70add%69%6e%67%3D%221%22%20ce%6c%6c%73%70ac%69%6e%67%3D%221%22%3E%3C%74%68ead%3E%3C%74%72%3E%3C%2f%74%72%3E%3C%2f%74%68ead%3E%3C%74b%6fd%79%20b%6f%72de%72%3D1%3E%3C%74%72%3E%3C%74d%3E');
// <table id="tData" name="tData" class="" border="1" cellpadding="1" cellspacing="1"><thead><tr></tr></thead><tbody border=1><tr><td>
rows=gdd.replace(/\n/g,re+'\n'+rs);
rex=new RegExp(gds,'g');
columns=rows.replace(rex,cs);
end=unescape('%3C%2f%74d%3E%3C%2f%74%72%3E%3C%2f%74b%6fd%79%3E%3C%2f%74ab%6ce%3E');
if (ghv){total=start+htf+re+rs+columns+end;}
if (!ghv){total=start+htf+columns+end;}
document.getElementById('tViewer').innerHTML=total;
TableCount();}

// Full View Functions: ---------------
function FullViewOpen(){
sFlex('f','tView','0','0','0');
document.getElementById('tViewer').style.cssText="width:100%;height:100%;background-color:#ffffff;overflow:scroll;";
eVis('fvButton');}

function FullViewClose(){
sFlex('d','tView','0','0','0');
document.getElementById('tView').style.cssText="width:100%;height:400px;overflow:scroll;";
document.getElementById('tViewer').style.cssText="width:100%;height:auto;border-radius:3px;";
nhw=window.innerWidth-30;
document.getElementById("tViewer").style.width=nhw+"px";
eHid('fvButton');eHid('fvBar');}

// Table Format: -----------------------
function FormatOpt(){
gtc=document.getElementById('soFormat').value;
document.getElementById("tData").className=gtc;
oReset('soFormat');}

// Table Counting Functions: -----------
function TableCount(){
rCount();cCount();}

function rCount(){
gct=document.getElementById('tData').innerText;
grc=gct.split('\n').length;grc=eval(grc-1);
//grc=grc/2;
document.getElementById('tr').innerHTML=grc;}

function cCount(){
const table = document.getElementById('tData');
const firstDataRow = table.getElementsByTagName('tbody')[0].rows[0];
const columnCount = firstDataRow.cells.length;
document.getElementById('tc').innerText = columnCount;}
