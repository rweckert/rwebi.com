// rwebiModule-ScratchPad.js Created:12/22/2021 Updated:01/16/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');tStat('cv','1');}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='new'){eHid('mMenu');pNew('v','cv');tStat('cv','1');}
if (gmo=='copy'){eCopy('v','cv');}
if (gmo=='clear'){eClear('v','cv');tStat('cv','1');}
if (gmo=='save'){lSave('v','cv');}
if (gmo=='restore'){lRestore('v','cv');tStat('cv','1');}
if (gmo=='saveas'){eVis('sView');cFocus('sf');}
if (gmo=='export'){eTab('v','cv');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');eHid('mMenu');}

// Full View Functions: ---------------
function FullViewOpen(){
document.getElementById('cc').style.cssText="width:100%;height:100%;min-height:100%;margin-top:3px;overflow-x:none;overflow-y:none;font-size:1.3em;";
sFlex('f','cc','0','0','0');dHid('mHeader');
document.getElementById('ow').innerText="0";
document.getElementById('oh').innerText="0";
eHid('mMenu');eVis('fvButton');}

function FullViewClose(){
sFlex('d','cc','0','0','3');dVis('mHeader');
document.getElementById('cc').style.cssText="width:auto;height:auto;margin-top:3px;overflow-x:none;overflow-y:none;min-width:320px;font-size:1.3em;";
document.getElementById('ow').innerText="18";
document.getElementById('oh').innerText="127";
rFlex('cc');eHid('fvButton');eHid('fvBar');}
