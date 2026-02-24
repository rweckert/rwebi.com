// rwebiMod-InfoParse.js  Created:12/22/2021 Updated:01/16/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('pv');
nvw=window.innerWidth-22;nhw=window.innerWidth-15;
document.getElementById("cc").style.width=nvw-0+"px";
document.getElementById("mHeader").style.width=nhw-0+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Select Options: --------------------
function FileOpt(){
gmo=document.getElementById('soFile').value;
if (gmo=='open'){document.getElementById('fb').click();}
if (gmo=='new'){pNew('v','cv');tStat('cv','1');}
if (gmo=='copy'){eCopy('v','cv');}
if (gmo=='clear'){eClear('v','cv');tStat('cv','1');}
if (gmo=='save'){lSave('v','cv');}
if (gmo=='restore'){lRestore('v','cv');tStat('cv','1');}
if (gmo=='saveas'){eVis('sView');cFocus('sf');}
if (gmo=='export'){eTab('v','cv');}
if (gmo=='info'){eVis('hView');}
if (gmo=='exit'){pLoad('rwebiMenu-Modules.html')}
oReset('soFile');eHid('mMenu');}

function rOpt(){
gmo=document.getElementById('o2').value;
if (gmo=='rfirst'){rFirst('cv');}
if (gmo=='rlast'){rLast('cv');}
if (gmo=='rblank'){rBlankLines('cv');}
if (gmo=='rspecial'){rSpecial('cv');}
oReset('o2');}

function pOpt(){
gmo=document.getElementById('o3').value;
if (gmo=='pspace'){pSpace();}
if (gmo=='pbreak'){pBreak();}
if (gmo=='pdashes'){pDashes();}
if (gmo=='pcomma'){pComma();}
if (gmo=='ptab'){pTab();}
if (gmo=='pperiod'){pPeriod();}
if (gmo=='example'){pExample();}
if (gmo=='clear'){eClear('h','pv');}
oReset('o3');}

function cLoop(fn){
fn=fn+"\(i\)";
gcd=document.getElementById('tt').value;
glc=gcd.split('\n').length-1;
	for (var i = 0; i <= glc; i++){
	pList(i+1);
	gRow();}}

function pList(i){
gtt=document.getElementById('tt').value;
gtt=gtt.split('\n').shift();
gcr=document.getElementById("pv").innerHTML;
f1=unescape('%3C%73%70a%6e%20c%6ca%73%73%3D%27%6cb70%27%20%73%74%79%6ce%3D%22%70add%69%6e%67%2d%74%6f%70%3A6%70%78%3B%22%3E%26%6eb%73%70%3BF%69e%6cd%20');
f2=unescape('%20%3C%2f%73%70a%6e%3E%3C%69%6e%70%75%74%20%69d%3D%22f');
f3=unescape('%22%20%6ea%6de%3D%22f');
f4=unescape('%22%20%74%79%70e%3D%22%74e%78%74%22%20%76a%6c%75e%3D%22');
f5=unescape('%22%20%73%74%79%6ce%3D%22%77%69d%74%68%3A40%25%3B%68e%69%67%68%74%3A28%70%78%3B%6da%72%67%69%6e%2d%74%6f%70%3A3%70%78%3B%22%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2fc%6f%70%79%2e%70%6e%67%22%20c%6ca%73%73%3D%22%69b%74%6e%22%20%74%69%74%6ce%3D%22C%6f%70%79%20%74%6f%20C%6c%69%70b%6fa%72d%22%20%6f%6ec%6c%69c%6b%3D%22eC%6f%70%79%28%27%76%27%2C%27f');
f6=unescape('%27%29%22%3E');
f7=unescape('%3Cb%72%3E');
ft=f1+i+f2+i+f3+i+f4+gtt+f5+i+f6+f7;
sr="Field "+i+" "+gtt+"\n";
gsr=document.getElementById('sr').innerHTML;
document.getElementById('sr').innerHTML=gsr+sr;
document.getElementById('pv').innerHTML=gcr+ft;}

function gRow(){
gtt=document.getElementById('tt').value;
g=gtt.split('\n');
g.splice(0,1);
gt=g.join('\n');
document.getElementById('tt').value=gt;}

function pSpace(){
gcd=document.getElementById('cv').value;
if (!gcd){alert("No text found. Nothing to split.");return false;}
document.getElementById("pv").innerHTML="";	
document.getElementById('tt').value=gcd;
gcv=document.getElementById('tt').value;
res=gcv.replace(/ /g,'\n');
document.getElementById('tt').value=res;
cLoop();}

function pComma(){
gcd=document.getElementById('cv').value;
if (!gcd){alert("No text found. Nothing to split.");return false;}
document.getElementById("pv").innerHTML="";	
document.getElementById('tt').value=gcd;
gcv=document.getElementById('tt').value;
res=gcv.replace(/\,/g,'\n');
res=res.replace(/\"/g,'');
document.getElementById('tt').value=res;
cLoop();}

function pDashes(){
gcd=document.getElementById('cv').value;
if (!gcd){alert("No text found. Nothing to split.");return false;}
document.getElementById("pv").innerHTML="";	
document.getElementById('tt').value=gcd;
gcv=document.getElementById('tt').value;
res=gcv.replace(/\-/g,'\n');
document.getElementById('tt').value=res;
cLoop();}

function pPeriod(){
gcd=document.getElementById('cv').value;
if (!gcd){alert("No text found. Nothing to split.");return false;}
document.getElementById("pv").innerHTML="";	
document.getElementById('tt').value=gcd;
gcv=document.getElementById('tt').value;
res=gcv.replace(/\./g,'\n');
res=res.replace(/\n\n/g,'\n');
document.getElementById('tt').value=res;
cLoop();}

function pTab(){
gcd=document.getElementById('cv').value;
if (!gcd){alert("No text found. Nothing to split.");return false;}
document.getElementById("pv").innerHTML="";	
document.getElementById('tt').value=gcd;
gcv=document.getElementById('tt').value;
res=gcv.replace(/\t/g,'\n');
document.getElementById('tt').value=res;
cLoop();}

function pBreak(){
gcd=document.getElementById('cv').value;
if (!gcd){alert("No text found. Nothing to split.");return false;}
document.getElementById("pv").innerHTML="";	
document.getElementById('tt').value=gcd;
gcv=document.getElementById('tt').value;
res=gcv.replace(/\"/g,'');
document.getElementById('tt').value=res;
cLoop();}

function rFirst(ei){
gcv=document.getElementById(ei).value;
if (!gcv){alert("No text found. Nothing to remove.");return false;}
res=gcv.slice(gcv.indexOf('\n') + 1);
document.getElementById(ei).value=res;
tStat('cv','1');}

function rLast(ei){
gcv=document.getElementById(ei).value;
if (!gcv){alert("No text found. Nothing to remove.");return false;}
res=gcv.replace(/\r?\n?[^\r\n]*$/, "");
document.getElementById(ei).value=res;
tStat('cv','1');}

function rBlankLines(ei){
gcv=document.getElementById(ei).value;
if (!gcv){alert("No text found. Nothing to remove.");return false;}
res=gcv.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;
tStat('cv','1');}

function rSpecial(ei){
gcv=document.getElementById(ei).value;
if (!gcv){alert("No text found. Nothing to remove.");return false;}
res=gcv.replace(/\(/g,'');
res=res.replace(/\)/g,'');
res=res.replace(/\[/g,'');
res=res.replace(/\]/g,'');
res=res.replace(/\!/g,'');
res=res.replace(/\$/g,'');
res=res.replace(/\%/g,'');
res=res.replace(/\^/g,'');
res=res.replace(/\*/g,'');
res=res.replace(/\"/g,'');
res=res.replace(/\_/g,'');
res=res.replace(/\|/g,'');
res=res.replace(/\=/g,'');
res=res.replace(/\</g,'');
res=res.replace(/\>/g,'');
res=res.replace(/\?/g,'');
res=res.replace(/\=/g,'');
res=res.replace(/\;/g,'');
res=res.replace(/\:/g,'');
res=res.replace(/\`/g,'');
res=res.replace(/\~/g,'');
document.getElementById(ei).value=res;
tStat('cv','1');}

function pExport(){
gpv=document.getElementById('sr').innerText;
alert(gpv);}

// Split Clear: ----------------------
function SplitClear(){
if (confirm("Are you sure you want to clear the split results?")){
document.getElementById('pv').innerHTML="";}}

function pExample(){
td=unescape('%4ea%6de%20F%69%72%73%74%20%4ca%73%74%0A%53%74%72ee%74%4ea%6de%201005%20D%72%69%76e%0AC%69%74%79%4ea%6de%2C%2092027%20CA%0Ae%6da%69%6cadd%72e%73%73%40e%6da%69%6c%2ec%6f%6d%0A760%2d234%2d5567%0A%77%77%77%2e%73%69%74e%6ea%6deadd%72e%73%73%2ec%6f%6d');document.getElementById('cv').value=td;}
