// rwebiModule-TMCEdit.js Created:12/22/2021  Updated:12/09/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('editor');
ntw=window.innerWidth-30;nhw=window.innerWidth-30;
document.getElementById("mHeader").style.width=nhw+"px";
document.getElementById("tc").style.width=ntw+"px";
SourceUpdate();cCode('mMenu','mSwap');aceCount('editor');}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='new'){pNew('v','cv');tStat('cv','1');}
if (gmo=='copy'){aceCopyAll('editor');}
if (gmo=='clear'){aceClear('editor');}
if (gmo=='save'){aceLocalSave('editor');}
if (gmo=='restore'){aceLocalRestore('editor');}
if (gmo=='saveas'){aceSave('rwebi-tmcedit-');cFocus('sf');}
if (gmo=='source'){SourceTab();}
if (gmo=='view'){ViewTab();}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function SourceOpt(){
gmo=document.getElementById('soSource').value;
if (gmo=='copy'){aceCopyAll('editor');}
if (gmo=='source'){SourceTab();}
if (gmo=='view'){ViewTab();}
if (gmo=='save'){aceLocalSave('editor');}
if (gmo=='restore'){aceLocalRestore('editor');}
if (gmo=='saveas'){aceSave('editor');cFocus('sf');}
if (gmo=='clear'){aceClear('editor');}
oReset('soSource');}


function SourceUpdate(){
gct=tinymce.activeEditor.getContent();
gce=ace.edit('editor');
gce.session.setValue(gct);}


function EditUpdate(){
editor=ace.edit('editor');
gcv=editor.getSession().getValue();
tmce=tinymce.get('tv');
tmce.setContent(gcv);}


function ViewTab(){
editor=ace.edit('editor');
gcv=editor.getSession().getValue();
nt=window.open();
nt.document.write(gcv);}


function SourceTab(){
editor=ace.edit('editor');
gcv=editor.getSession().getValue();
document.getElementById('tt').value=gcv;
eTab('v','tt');}


// TMC Editor Responsive Flex: ---------
function tmceFlex(ei){
gow=window.document.forminput.ow.value;
goh=window.document.forminput.oh.value;
gov=window.document.forminput.ov.value;
viw=window.innerWidth-gow;
vih=window.innerHeight-goh;
document.getElementById(ei).style.height=viw+"px";
document.getElementById(ei).style.height=vih+"px";}


// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('editor').style.cssText="width:100%;height:100%;min-height:50px;margin-top:3px;overflow-x:none;overflow-y:none;font-size:1.3em;";
sFlex('f','editor','0','0','0');dHid('mHeader');
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
dHid('tc');dHid('mBar');eVis('fvButton');}


function FullViewClose(){
sFlex('d','editor','0','0','3');dVis('mHeader');
document.getElementById('ow').innerText="30";
document.getElementById('oh').innerText="300";
document.getElementById('editor').style.cssText="width:auto;height:200px;min-height:100%;margin-top:0px;margin-bottom:6px;overflow-x:none;overflow-y:none;min-width:320px;font-size:1.3em;";
eHid('fvButton');eHid('fvBar');dVis('mBar');dVis('tc');rFlex('editor');}
