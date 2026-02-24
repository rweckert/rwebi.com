// rwebiModule-StringEscape.js  Created:12/22/2021  Updated:01/08/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('editor');
nhw=window.innerWidth-33;
document.getElementById("mHeader").style.width=nhw+"px";
document.getElementById("cc1").style.width=nhw+"px";
tStat('cv1','1');aceCount('editor');}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Menu Toggle: ------------------------
function mToggle(ei){
if (ei=='oView'){eToggle('oView');eHid('hView');}}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='copy'){eCopy('v','cv1');}
if (gmo=='save'){lSave('v','cv1');}
if (gmo=='restore'){lRestore('v','cv1');tStat('cv1','1');}
if (gmo=='export'){eTab('v','cv1');}
if (gmo=='clear'){eClear('v','cv1');tStat('cv1','1');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');eHid('mMenu');}

function ResultOpt(){
gmo=document.getElementById('soResult').value;
if (gmo=='evar'){encVar();}
if (gmo=='eval'){encEval();}
if (gmo=='save'){aceLocalSave('editor');}
if (gmo=='restore'){aceLocalRestore('editor');}
if (gmo=='saveas'){aceSave('rwebi-StringEscape-');cFocus('sf');}
if (gmo=='export'){tabTab('editor');}
if (gmo=='copy'){aceCopy('editor');}
if (gmo=='clear'){aceClearResults('editor');}
oReset('soResult');eHid('mMenu');}

function encString(){
s=escape(document.getElementById('cv1').value);s=s.replace(/\*/g,'%2a');s=s.replace(/\+/g,'%2b');s=s.replace(/-/g,'%2d');s=s.replace(/\./g,'%2e');s=s.replace(/\//g,'%2f');s=s.replace(/@/g,'%40');s=s.replace(/G/g,'%47');s=s.replace(/H/g,'%48');s=s.replace(/I/g,'%49');s=s.replace(/J/g,'%4a');s=s.replace(/K/g,'%4b');s=s.replace(/L/g,'%4c');s=s.replace(/M/g,'%4d');s=s.replace(/N/g,'%4e');s=s.replace(/O/g,'%4f');s=s.replace(/P/g,'%50');s=s.replace(/Q/g,'%51');s=s.replace(/R/g,'%52');s=s.replace(/S/g,'%53');s=s.replace(/T/g,'%54');s=s.replace(/U/g,'%55');s=s.replace(/V/g,'%56');s=s.replace(/W/g,'%57');s=s.replace(/X/g,'%58');s=s.replace(/Y/g,'%59');s=s.replace(/Z/g,'%5a');s=s.replace(/_/g,'%5f');s=s.replace(/g/g,'%67');s=s.replace(/h/g,'%68');s=s.replace(/i/g,'%69');s=s.replace(/j/g,'%6a');s=s.replace(/k/g,'%6b');s=s.replace(/l/g,'%6c');s=s.replace(/m/g,'%6d');s=s.replace(/n/g,'%6e');s=s.replace(/o/g,'%6f');s=s.replace(/p/g,'%70');s=s.replace(/q/g,'%71');s=s.replace(/r/g,'%72');s=s.replace(/s/g,'%73');s=s.replace(/t/g,'%74');s=s.replace(/u/g,'%75');s=s.replace(/v/g,'%76');s=s.replace(/w/g,'%77');s=s.replace(/x/g,'%78');s=s.replace(/y/g,'%79');s=s.replace(/z/g,'%7a');
editor=ace.edit('editor');editor.session.setValue(s);}

function decString(){
editor=ace.edit('editor');
gcv=editor.session.getValue();
s=unescape(gcv);
document.getElementById('cv1').value=s;}

function encEval(){
s=escape(document.getElementById('cv1').value);
s=s.replace(/\*/g,'%2a');s=s.replace(/\+/g,'%2b');s=s.replace(/-/g,'%2d');s=s.replace(/\./g,'%2e');s=s.replace(/\//g,'%2f');s=s.replace(/@/g,'%40');s=s.replace(/G/g,'%47');s=s.replace(/H/g,'%48');s=s.replace(/I/g,'%49');s=s.replace(/J/g,'%4a');s=s.replace(/K/g,'%4b');s=s.replace(/L/g,'%4c');s=s.replace(/M/g,'%4d');s=s.replace(/N/g,'%4e');s=s.replace(/O/g,'%4f');s=s.replace(/P/g,'%50');s=s.replace(/Q/g,'%51');s=s.replace(/R/g,'%52');s=s.replace(/S/g,'%53');s=s.replace(/T/g,'%54');s=s.replace(/U/g,'%55');s=s.replace(/V/g,'%56');s=s.replace(/W/g,'%57');s=s.replace(/X/g,'%58');s=s.replace(/Y/g,'%59');s=s.replace(/Z/g,'%5a');s=s.replace(/_/g,'%5f');s=s.replace(/g/g,'%67');s=s.replace(/h/g,'%68');s=s.replace(/i/g,'%69');s=s.replace(/j/g,'%6a');s=s.replace(/k/g,'%6b');s=s.replace(/l/g,'%6c');s=s.replace(/m/g,'%6d');s=s.replace(/n/g,'%6e');s=s.replace(/o/g,'%6f');s=s.replace(/p/g,'%70');s=s.replace(/q/g,'%71');s=s.replace(/r/g,'%72');s=s.replace(/s/g,'%73');s=s.replace(/t/g,'%74');s=s.replace(/u/g,'%75');s=s.replace(/v/g,'%76');s=s.replace(/w/g,'%77');s=s.replace(/x/g,'%78');s=s.replace(/y/g,'%79');s=s.replace(/z/g,'%7a');s = 'eval(unescape(\'' + s + '\');';editor=ace.edit('editor');editor.session.setValue(s);}

function encVar(){
s=escape(document.getElementById('cv1').value);
s=s.replace(/\*/g,'%2a');s=s.replace(/\+/g,'%2b');s=s.replace(/-/g,'%2d');s=s.replace(/\./g,'%2e');s=s.replace(/\//g,'%2f');s=s.replace(/@/g,'%40');s=s.replace(/G/g,'%47');s=s.replace(/H/g,'%48');s=s.replace(/I/g,'%49');s=s.replace(/J/g,'%4a');s=s.replace(/K/g,'%4b');s=s.replace(/L/g,'%4c');s=s.replace(/M/g,'%4d');s=s.replace(/N/g,'%4e');s=s.replace(/O/g,'%4f');s=s.replace(/P/g,'%50');s=s.replace(/Q/g,'%51');s=s.replace(/R/g,'%52');s=s.replace(/S/g,'%53');s=s.replace(/T/g,'%54');s=s.replace(/U/g,'%55');s=s.replace(/V/g,'%56');s=s.replace(/W/g,'%57');s=s.replace(/X/g,'%58');s=s.replace(/Y/g,'%59');s=s.replace(/Z/g,'%5a');s=s.replace(/_/g,'%5f');s=s.replace(/g/g,'%67');s=s.replace(/h/g,'%68');s=s.replace(/i/g,'%69');s=s.replace(/j/g,'%6a');s=s.replace(/k/g,'%6b');s=s.replace(/l/g,'%6c');s=s.replace(/m/g,'%6d');s=s.replace(/n/g,'%6e');s=s.replace(/o/g,'%6f');s=s.replace(/p/g,'%70');s=s.replace(/q/g,'%71');s=s.replace(/r/g,'%72');s=s.replace(/s/g,'%73');s=s.replace(/t/g,'%74');s=s.replace(/u/g,'%75');s=s.replace(/v/g,'%76');s=s.replace(/w/g,'%77');s=s.replace(/x/g,'%78');s=s.replace(/y/g,'%79');s=s.replace(/z/g,'%7a');s = 'var name=unescape(\'' + s + '\');';
editor=ace.edit('editor');
editor.session.setValue(s);}
