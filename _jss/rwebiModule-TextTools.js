// rwebiModule-TextTools.js Created:12/22/2021  Updated:12/02/2025
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('editor');aceCount('editor');
nth=window.innerHeight-90;nhw=window.innerWidth-15;
document.getElementById("vTools").style.height=nth+"px";
document.getElementById("vSettings").style.height=nth+"px";
document.getElementById("mHeader").style.width=nhw+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){dToggle('oView');eHid('hView');eHid('vTools');aceSearchHide('editor');}
if (ei=='vTools'){eToggle('vTools');eHid('hView');dHid('oView');aceSearchHide('editor');}
if (ei=='eMenu'){eToggle('eMenu');eHid('pMenu');}
if (ei=='pMenu'){eToggle('pMenu');eHid('eMenu');}
if (ei=='aSearch'){eHid('vTools');dHid('oView');aceSearchToggle('editor');}}

// Tree Toggle: ------------------------
function tToggle(){
gtm=document.getElementById('tm').textContent;
if (gtm=="false"){
dVis('tm1');iSwap('ti1','arrow-on.png','');
dVis('tm2');iSwap('ti2','arrow-on.png','');
dVis('tm3');iSwap('ti3','arrow-on.png','');
dVis('tm4');iSwap('ti4','arrow-on.png','');
dVis('tm5');iSwap('ti5','arrow-on.png','');
dVis('tm6');iSwap('ti6','arrow-on.png','');
document.getElementById('tm').innerHTML='true';}
if (gtm=="true"){
dHid('tm1');iSwap('ti1','arrow-off.png','');
dHid('tm2');iSwap('ti2','arrow-off.png','');
dHid('tm3');iSwap('ti3','arrow-off.png','');
dHid('tm4');iSwap('ti4','arrow-off.png','');
dHid('tm5');iSwap('ti5','arrow-off.png','');
dHid('tm6');iSwap('ti6','arrow-off.png','');
document.getElementById('tm').innerHTML='false';}}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='new'){aceNew('editor');aceCount('editor');}
if (gmo=='copy'){aceCopyAll('editor');}
if (gmo=='clear'){aceClear('editor');aceCount('editor');}
if (gmo=='save'){aceLocalSave('editor');}
if (gmo=='restore'){aceLocalRestore('editor');}
if (gmo=='saveas'){aceSave('rwebi-TextTools-');}
if (gmo=='export'){aceTabText('editor');}
if (gmo=='eView'){aceTabView('editor');}
if (gmo=='set'){eVis('vSettings');eHid('vTools');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');}

function EditOpt(){
gmo=document.getElementById('soEdit').value;
if (gmo=='ccp'){eToggle('mp1');}
if (gmo=='bdoc'){bDoc('cv');}
if (gmo=='mdoc'){mDoc('cv');}
if (gmo=='tdoc'){tDoc('cv');}
if (gmo=='copy'){eCopy('v','cv');}
if (gmo=='clear'){eClear('v','cv');tStat('cv','1');}
oReset('soEdit');}

// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('editor').style.cssText="width:auto;height:auto;min-height:50px;margin-top:3px;overflow-x:none;overflow-y:none;font-size:1.3em;";
sFlex('f','editor','0','0','0');dHid('mHeader');
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
document.getElementById('pMenu').style.left="2px";
document.getElementById('eMenu').style.left="2px";
eVis('fvButton');}

function FullViewClose(){
sFlex('d','editor','0','0','3');dVis('mHeader');
document.getElementById('ow').innerText="18";
document.getElementById('oh').innerText="121";
document.getElementById('editor').style.cssText="width:auto;height:auto;overflow-x:none;overflow-y:none;min-width:320px;font-size:1.3em;margin-bottom:3px;";
document.getElementById('pMenu').style.left="11px";
document.getElementById('eMenu').style.left="11px";
eHid('fvButton');eHid('fvBar');rFlex('editor');}
