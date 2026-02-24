// rwebiEngine-StringTools-112025.js  Created:12/22/2021  Updated:11/28/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// General Text: ----------------------
// aSort(ei)            alpha sort
// aReverse(ei)         alpha reverse sort
// nSort(ei)            numeric sort
// nReverse(ei)         numeric reverse sort
// eAlpha(ei)           extract alpha
// eNumber(ei)          extract number
// cLower(ei)           convert lower-case
// cUpper(ei)           convert upper-case
// cTitle(ei)           convert title-case
// cInvert(ei)          convert invert-case
// Remove Functions: ------------------
// remTrim(ei)          trim spaces
// remSpaces(ei)        remove spaces
// remBlankLines(ei)    remove blank lines
// remLines(ei)         remove lines
// remCommas(ei)        remove commas
// remTabs(ei)          remove tabs
// remTabSpaces(ei)     remove tabs as spaces
// remHBrackets(ei)     remove hard brackets
// remCBrackets(ei)     remove curly brackets
// remSQuotes(ei)       remove single quotes
// remDQuotes(ei)       remove double quotes
// remBackslashes(ei)   remove black slashes
// remPipe(ei)          remove pipe
// remSemiColons(ei)    remove semi colon
// remColons(ei)        remove colon
// remSmallWords(ei)    remove small words
// srcc(ei)             small words srcc
// Replace Functions: -----------------
// repCommaWLine(ei)    replace comma with line
// repLineWComma(ei)    replace line with comma
// repLineWSpace(ei)    replace line with space
// repLineWTab(ei)      replace line with tab
// repBlankWComma(ei)   replace blank lines with comma
// repSpaceWLine(ei)    replace space with line
// repSpaceWComma(ei)   replace space with comma
// repCommaWSpace(ei)   replace comma with space
// repCommaWLine(ei)    replace comma with line
// repTabWComma(ei)     replace tab with comma
// repTabWLine(ei)      replace tab with line
// repRCBwB(ei)         replace right curly brackets with breaks
// repLCBwB(ei)         replace left curly brackets with breaks
// repRHBwB(ei)         replace right hard brackets with breaks
// repLHBwB(ei)         replace left hard brackets with breaks
// repCwB(ei)           replace colons with breaks
// repSCwB(ei)          replace semi-colons with breaks
// Specialty Functions: ---------------
// fixCommas(ri)        fix commas
// remDupes(ei)         remove duplicates
// listDupes(ei)        list duplicates
// woOpt()		

// Selection Options: -----------------
function txtOpt(){
gmo=window.document.forminput.txt.value;
mOpt(gmo);}

function repOpt(){
gmo=window.document.forminput.rep.value;
mOpt(gmo);oReset('rep');}

function remOpt(){
gmo=window.document.forminput.rem.value;
mOpt(gmo);oReset('rem');}

// Menu Options: ----------------------
function mOpt(fn){
ucv=unescape('%28%27c%76%27%29%3B'); // ('cv');
eval(fn+ucv);}

// General Text: ----------------------
function OLDaSort(ei){ // alpha sort
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.split('\n').sort().join('\n');
res=res.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;}

function aSort(et,ei){ // alpha sort

if (et=='t'){gcv=document.getElementById(ei).value;}
if (et=='a'){editor=ace.edit(ei);gcv=editor.session.getValue();}

res=gcv.split('\n').sort().join('\n');
res=res.replace(/^\s*[\r\n]/gm,'');

if (et=='t'){document.getElementById(ei).value=res;}
if (et=='a'){editor.session.setValue(res);}

}

function aReverse(ei){ // alpha reverse sort
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.split('\n').reverse().join('\n');
res=res.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;}

function nSort(ei){ // numeric sort
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.split('\n');
res=res.sort(function (a,b){return a-b;});
res=res.join(',').replace(/,/g,'\n').split();
document.getElementById(ei).value=res;}

function nReverse(ei){ // numeric reverse sort
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.split('\n');
res=res.sort(function (a,b){return b-a;});
res=res.join(',').replace(/,/g,'\n').split();
document.getElementById(ei).value=res;}

function eAlpha(ei){ // extract alpha
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/[^a-zA-Z ]/g,'\n');
res=res.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;}

function eNumbers(ei){ // extract number
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/[^0-9 ]/g,'\n');
res=res.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;}

function cLower(ei){ // convert lower-case
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.toLowerCase();
document.getElementById(ei).value=res;}

function cUpper(ei){ // convert upper-case
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.toUpperCase();
document.getElementById(ei).value=res;}

function cTitle(ei){ // convert title-case
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.toLowerCase().replace(/./, (x) => x.toUpperCase()).replace(/[^']\b\w/g, (y) => y.toUpperCase());
document.getElementById(ei).value=res;}

function cInvert(ei){ // convert invert-case
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res='';
for (i=0;i<gcv.length;i++){
ch=gcv.charAt(i);
if (ch==ch.toUpperCase()){
res += ch.toLowerCase();
}else{res+=ch.toUpperCase();}}
document.getElementById(ei).value=res;}

function srSQuotes(ei){ // wrap with single quotes
sUndo('v',ei);
gcv=document.getElementById(ei).value;
sq=unescape('%27');
res=gcv.replace(/\n/g,sq+'\n'+sq);
document.getElementById(ei).value=sq+res;}

function srDQuotes(ei){ // wrap with double quotes
sUndo('v',ei);
gcv=document.getElementById(ei).value;
dq=unescape('%22');
res=gcv.replace(/\n/g,dq+'\n'+dq);
document.getElementById(ei).value=dq+res;}

function addDSpaces(ei){ // add double spaces
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\n/g,'\n\n');
document.getElementById(ei).value=res;}

function delDSpaces(ei){ // delete double spaces
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\n\n/g,'\n');
document.getElementById(ei).value=res;}

function addCommaStart(ei){ // add commas at start of line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\n/g,'\n,');
document.getElementById(ei).value=res;}

function addCommaEnd(ei){ // add commas at end of line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\n/g,',\n');
document.getElementById(ei).value=res;}

// Removal Text: ----------------------
function remTrim(ei){ // trim spaces
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\s\s+/g,'\n').trim();
//res=res.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;}

function remSpaces(ei){ // remove spaces
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/ /g,'');
document.getElementById(ei).value=res;}

function remBlankLines(ei){ // remove blank lines
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/^\s*[\r\n]/gm,'');
document.getElementById(ei).value=res;}

function remLines(ei){ // remove lines
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\n/g,'');
document.getElementById(ei).value=res;}

function remCommas(ei){ // remove commas
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/,/g,'');
document.getElementById(ei).value=res;}

function remTabs(ei){ // remove tabs
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\t/g,'');
document.getElementById(ei).value=res;}

function remTabSpaces(ei){ // remove tabs as spaces
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/    /g,'');
document.getElementById(ei).value=res;}

function remHBrackets(ei){ // remove hard brackets
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\[/g,'');
res=res.replace(/\]/g,'');
document.getElementById(ei).value=res;}

function remCBrackets(ei){ // remove curly brackets
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/{/g,'');
res=res.replace(/}/g,'');
document.getElementById(ei).value=res;}

function remSQuotes(ei){ // remove single quotes
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\'/g,'');
document.getElementById(ei).value=res;}

function remDQuotes(ei){ // remove double quotes
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\"/g,'');
document.getElementById(ei).value=res;}

function remBackslashes(ei){ // remove black slashes
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\\/g,'');
document.getElementById(ei).value=res;}

function remPipe(ei){ // remove pipe
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\|/g,'');
document.getElementById(ei).value=res;}

function remSemiColons(ei){ // remove semi colon
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\;/g,'');
document.getElementById(ei).value=res;}

function remColons(ei){ // remove colon
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\:/g,'');
document.getElementById(ei).value=res;}

function remSmallWords(ei){ // remove small words
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/(\b(\w{1,4})\b(\s|$))/g,'').split(' ');
document.getElementById(ei).value=res;
setTimeout(srcc, 300);}

function srcc(ei){ // small words srcc
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/,/g,'');
document.getElementById(ei).value=res;}

function remParentheses(ei){ // replace comma with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\(/g,'');
res=res.replace(/\)/g,'');
document.getElementById(ei).value=res;}

function remCBrackets(ei){ // replace comma with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\{/g,'');
res=res.replace(/\}/g,'');
document.getElementById(ei).value=res;}

function remHBrackets(ei){ // replace comma with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\[/g,'');
res=res.replace(/\]/g,'');
document.getElementById(ei).value=res;}

function remFirst(ei){ // remove first line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.slice(gcv.indexOf('\n') + 1);
document.getElementById(ei).value=res;}

function remLast(ei){ // remove last line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\r?\n?[^\r\n]*$/, "");
document.getElementById(ei).value=res;}

// Replacement Text: ------------------
function repCommaWLine(ei){ // replace comma with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/,/g,'\n');
document.getElementById(ei).value=res;}

function repLineWComma(ei){ // replace line with comma
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\n/g,',');
document.getElementById(ei).value=res;}

function repLineWSpace(ei){ // replace line with space
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.value.replace(/\n/g,' ');
document.getElementById(ei).value=res;}

function repLineWTab(ei){ // replace line with tab
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.value.replace(/\n/g,'\t');
document.getElementById(ei).value=res;}

function repBlankWComma(ei){ // replace blank lines with comma
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/^\s*[\r\n]/gm,',');
document.getElementById(ei).value=res;}

function repSpaceWLine(ei){ // replace space with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/ /g,'\r\n');
document.getElementById(ei).value=res;}

function repSpaceWComma(ei){ // replace space with comma
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/ /g,',');
document.getElementById(ei).value=res;}

function repCommaWSpace(ei){ // replace comma with space
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/,/g,' ');
document.getElementById(ei).value=res;}

function repCommaWLine(ei){ // replace comma with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/,/g,'\n');
document.getElementById(ei).value=res;}

function repTabWComma(ei){ // replace tab with comma
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\t/g,',');
document.getElementById(ei).value=res;}

function repTabWLine(ei){ // replace tab with line
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\t/g,'\n');
document.getElementById(ei).value=res;}

function repRCBwB(ei){ // replace right curly brackets with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/{/g,'\n');
document.getElementById(ei).value=res;}

function repLCBwB(ei){ // replace left curly brackets with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/}/g,'\n');
document.getElementById(ei).value=res;}

function repRHBwB(ei){ // replace right hard brackets with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\[/g,'\n');
document.getElementById(ei).value=res;}

function repLHBwB(ei){ // replace left hard brackets with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\]/g,'\n');
document.getElementById(ei).value=res;}

function repLPwB(ei){ // replace right parentheses with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\(/g,'\n');
document.getElementById(ei).value=res;}

function repRPwB(ei){ // replace left parentheses with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\)/g,'\n');
document.getElementById(ei).value=res;}

function repCwB(ei){ // replace colons with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\:/g,'\n');
document.getElementById(ei).value=res;}

function repSCwB(ei){ // replace semi-colons with breaks
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/\;/g,'\n');
document.getElementById(ei).value=res;}

function fixCommas(ri){ // fix commas
sUndo('v',ei);
gcv=document.getElementById(ei).value;
res=gcv.replace(/,,,,,/g,'');
res=res.replace(/,,,,/g,'');
res=res.replace(/,,,/g,'');
res=res.replace(/,,/g,'');
document.getElementById(ei).value=res;}

function remDupes(ei){ // remove duplicates
sUndo('v',ei);
txt=document.getElementById(ei).value.split('\n');
res=[...new Set(txt)];
res=res.join(',').replace(/,/g,'\n').split();
document.getElementById(ei).value=res;}

function listDupes(ei){ // list duplicates
sUndo('v',ei);
txt=document.getElementById(ei).value.split('\n');
lst=txt.reduce(function(acc, el, i,arr) {
if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
},[]);
res=lst.join(',').replace(/,/g,'\n').split();
document.getElementById(ei).value=res;}

function goToLine(textarea, lineNumber) {
  const lines = textarea.value.split('\n');
  if (lineNumber < 1 || lineNumber > lines.length) {
    return; // Invalid line number
  }

  let charIndex = 0;
  for (let i = 0; i < lineNumber - 1; i++) {
    charIndex += lines[i].length + 1; // +1 for the newline character
  }

  textarea.setSelectionRange(charIndex, charIndex);
  textarea.focus();}
  
