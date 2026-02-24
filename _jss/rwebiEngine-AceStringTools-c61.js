// rwebiEngine-AceStringTools-c61.js  Created:12/02/2021  Updated:02/18/2025
// rwebi.com | rwebi.org | rwebi.net | 2025 Calyptus-61

// Alpha & Text: =======================
// Aplha: Sort -------------------------
function AlphaSort(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.split('\n').sort().join('\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.split('\n').sort().join('\n');
editor.session.setValue(res);}}

// Aplha: Reverse ----------------------
function AlphaReverse(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.split('\n').reverse().join('\n');
	res=res.replace(/^\s*[\r\n]/gm,'');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.split('\n').reverse().join('\n');
	res=res.replace(/^\s*[\r\n]/gm,'');
editor.session.setValue(res);}}

// Alpha Extract: ----------------------
function AlphaExtract(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/[^a-zA-Z ]/g,'\n');
	res=res.replace(/^\s*[\r\n]/gm,'');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/[^a-zA-Z ]/g,'\n');
	res=res.replace(/^\s*[\r\n]/gm,'');
editor.session.setValue(res);}}

// Numeric: Sort -----------------------
function NumericSort(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	const matches = gst.match(/\d+/g);
if (matches) {
	const sorted = matches
	.map(Number)
	.sort((a, b) => a - b);
	res = sorted.join('\n');} else {
	alert("No numbers found to sort!");}
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	const matches = gcv.match(/\d+/g);
if (matches) {
	const sorted = matches
	.map(Number)
	.sort((a, b) => a - b);
	res = sorted.join('\n');} else {
	alert("No numbers found to sort!");}
editor.session.setValue(res);}}

// Numeric: Reverse --------------------
function NumericReverse(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	const matches = gst.match(/\d+/g);
if (matches) {
	const sorted = matches
	.map(Number)
	.sort((a, b) => b - a);
	res = sorted.join('\n');} else {
	alert("No numbers found to sort!");}
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	const matches = gcv.match(/\d+/g);
if (matches) {
	const sorted = matches
	.map(Number)
	.sort((a, b) => b - a);
	res = sorted.join('\n');} else {
	alert("No numbers found to sort!");}
editor.session.setValue(res);}}

// Numeric: Extract --------------------
function NumericExtract(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.match(/\d+/g);
	res=res.join('\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.match(/\d+/g);
	res=res.join('\n');
editor.session.setValue(res);}}

// Case: Lower --------------------------
function CaseLower(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.toLowerCase();
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.toLowerCase();
editor.session.setValue(res);}}

// Case: Upper --------------------------
function CaseUpper(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.toUpperCase();
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.toUpperCase();
editor.session.setValue(res);}}

// Case: Title -------------------------
function CaseTitle(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.toLowerCase().replace(/./, (x) => x.toUpperCase()).replace(/[^']\b\w/g, (y) => y.toUpperCase());
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.toLowerCase().replace(/./, (x) => x.toUpperCase()).replace(/[^']\b\w/g, (y) => y.toUpperCase());
editor.session.setValue(res);}}

// Case: Invert ------------------------
function CaseInvert(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
  	res='';
	for (i=0;i<gst.length;i++){
	ch=gcv.charAt(i);
	if (ch==ch.toUpperCase()){
	res += ch.toLowerCase();
} else {res+=ch.toUpperCase();}}
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res='';
	for (i=0;i<gcv.length;i++){
	ch=gcv.charAt(i);
	if (ch==ch.toUpperCase()){
	res += ch.toLowerCase();
} else {res+=ch.toUpperCase();}}
editor.session.setValue(res);}}

// Remove All Trim: --------------------
function RemoveTrimAll(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\s\s+/g,'\n').trim();
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\s\s+/g,'\n').trim();
editor.session.setValue(res);}}

// Remove Trim End: --------------------
function RemoveTrimEnd(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/[ \t]+$/gm, '');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/[ \t]+$/gm, '');
editor.session.setValue(res);}}

// Remove Trim Start: ------------------
function RemoveTrimStart(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/^[ \t]+/gm, '');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/^[ \t]+/gm, '');
editor.session.setValue(res);}}

// Add Double Spaces: ------------------
function AddDoubleSpaces(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,'\n\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,'\n\n');
editor.session.setValue(res);}}

// Delete Double Space: ----------------
function DeleteDoubleSpace(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n\n/g,'\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n\n/g,'\n');
editor.session.setValue(res);}}

// Remove Functions: ===================
// Global Remove: ----------------------
function GlobalRemove(ei,rt){
rte=unescape(rt);
rex=new RegExp(rte, 'g');
rtc="";
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(rex, rtc);
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(rex, rtc);
editor.session.setValue(res);}}

// Remove Tabs: ------------------------
function RemoveTabs(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\t/g,'');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\t/g,'');
editor.session.setValue(res);}}

// Remove Blank Lines: -----------------
function RemoveBlankLines(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/^\s*[\r\n]/gm,''); 
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/^\s*[\r\n]/gm,'');
editor.session.setValue(res);}}

// Remove First Character: -------------
function RemoveFirstCharacter(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.split('\n').map(s => s.slice(1)).join('\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.split('\n').map(s => s.slice(1)).join('\n');
editor.session.setValue(res);}}

// Remove Last Character: -------------
function RemoveLastCharacter(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	gld=gst.split('\n');
	pld=gld.map(ln => {
	return ln.slice(0,-1);
	});
	res=pld.join('\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	gld=gcv.split('\n');
	pld=gld.map(ln => {
	return ln.slice(0,-1);
	});
	res=pld.join('\n');
editor.session.setValue(res);}}

// Remove First Line: ------------------
function RemoveFirstLine(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.slice(gcv.indexOf('\n') + 1); 
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.slice(gcv.indexOf('\n') + 1);
editor.session.setValue(res);}}

// Remove Last Line: -------------------
function RemoveLastLine(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\r?\n?[^\r\n]*$/, "");
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\r?\n?[^\r\n]*$/, "");
editor.session.setValue(res);}}

// Utility Functions: ==================
// Remove Small Words: -----------------
function RemoveSmallWords(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\b\w{1,3}\b\s?/g, '').trim();
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\b\w{1,3}\b\s?/g, '').trim();
editor.session.setValue(res);}}

// Replace Functions: ==================
// Global Replace: ---------------------
function GlobalReplace(ei,rt,wt){
rte=unescape(rt);
wte=unescape(wt);
rex=new RegExp(rte, 'g');
rtc="";
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(rex, wte);
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(rex, wte);
editor.session.setValue(res);}}

// Replace Blank Lines With Commas: ----
function ReplaceBlankLinesCommas(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/^\s*[\r\n]/gm,',');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/^\s*[\r\n]/gm,',');
editor.session.setValue(res);}}

//Replace Tabs with Commas
function ReplaceTabswCommas(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	softTab="    ";rep=new RegExp("\\t|"+softTab,'g');
	res=gst.replace(rep, ",");
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	softTab="    ";rep=new RegExp("\\t|"+softTab,'g');
	res=gcv.replace(rep, ",");
editor.session.setValue(res);}}

//Replace Tabs with Breaks
function ReplaceTabswBreaks(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	rep=new RegExp(softTab, 'g');
	res=gst.replace(rep, "\n");
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	rep=new RegExp(softTab, 'g');
	res=gcv.replace(rep, "\n");
editor.session.setValue(res);}}

// Wrapping Functions: =================
// Global Wrapping: --------------------
function GlobalWrapping(ei,wt){
wte=unescape(wt);
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,wte+'\n'+wte);
	res=wte+res+wte;
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,wte+'\n'+wte);
	res=wte+res+wte;
editor.session.setValue(res);}}

// Global Add Wrap: --------------------
function GlobalAddWrap(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
gsw=document.getElementById('iSWrap').value;
if (!gsw){alert("No starting text found to add.");return false;}
gew=document.getElementById('iEWrap').value;
if (!gew){alert("No ending text found to add.");return false;}
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
    res=gst.replace(/\n/g,gsw+' '); // start
	res=gst.replace(/\n/g,gew+'\n'); // end
	res=gsw+res+gew;
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
    res=gcv.replace(/\n/g,gsw+' '); // start
	res=gcv.replace(/\n/g,gew+'\n'); // end
	res=gsw+res+gew;
editor.session.setValue(res);}}

// Global Start End: -------------------
function GlobalStartEnd(ei,st,et){
ste=unescape(st);
ete=unescape(et);
ete=ete+"\n";ste="\n"+ste;
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,ste); // start
	res=res.replace(/\n/g,ete); // end
	res=ste+res+ete;
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,ste); // start
	res=res.replace(/\n/g,ete); // end
	res=ste+res+ete;
editor.session.setValue(res);}}

// Global Add Start: -------------------
function GlobalAddStart(ei){
gbt=document.getElementById('iStart').value;
ste="\n"+gbt;
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,ste); // start
	res=ste+res;
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,ste); // start
	res=ste+res;
editor.session.setValue(res);}eHid('vInput');}

// Global Add End: ---------------------
function GlobalAddEnd(ei){
get=document.getElementById('iEnd').value;
ete=get+"\n";
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,ete); // end
	res=res+ete;
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,ete); // end
	res=res+ete;
editor.session.setValue(res);}eHid('vInput');}

// Add Commas at Start: ----------------
function AddCommasStart(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,'\n,');
	res=","+res;	
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,'\n,');
	res=","+res;
editor.session.setValue(res);}}

// Add Commas at End: ------------------
function AddCommasEnd(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/\n/g,',\n');
	res=res+",";
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/\n/g,',\n');
	res=res+",";
editor.session.setValue(res);}}

// Utility Functions: ==================
// View Options: ------------------------
function ViewInput(ei,cc){
cCode(ei,cc);
eToggle('vInput');}

// Line Numbering: ---------------------
function LineNumbering(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst
	.split(/\r?\n/)
	.map((line, index) => `${index + 1}. ${line}`)
	.join('\n');
} else { // Entire Document:
	res=gcv
	.split(/\r?\n/)
	.map((line, index) => `${index + 1}. ${line}`)
	.join('\n');
editor.session.setValue(res);}}

// Fix Commas: -------------------------
function FixCommas(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.replace(/,,,,,/g,'');
	res=res.replace(/,,,,/g,'');
	res=res.replace(/,,,/g,'');
	res=res.replace(/,,/g,'');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.replace(/,,,,,/g,'');
	res=res.replace(/,,,,/g,'');
	res=res.replace(/,,,/g,'');
	res=res.replace(/,,/g,'');
editor.session.setValue(res);}}

// Remove Duplicates: ------------------
function RemoveDuplicates(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	res=gst.split(/\r?\n/);
	res=[...new Set(res)].join('\n');
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	res=gcv.split(/\r?\n/);
	res=[...new Set(res)].join('\n');
editor.session.setValue(res);}}

// List Duplicates: --------------------
function ListDuplicates(ei){
editor=ace.edit(ei);
gcv=editor.getSession().getValue();
if (!gcv){alert("No text found to manipulate or change.");return false;}
	document.getElementById('ut').value=gcv;
	gst=editor.getSelectedText();
	gsv=!!gst;
if (gsv) { // Selected Text:
	const lines = gst.split(/\r?\n/);
	const seen = new Set();
	const duplicates = new Set();
	lines.forEach(line => {
	const trimmed = line.trim();
	if (trimmed !== "") {
	if (seen.has(trimmed)) {
	duplicates.add(trimmed);
	} else {seen.add(trimmed);}}});
	const gsr = [...duplicates].join('\n');
	if (gsr === ""){alert("No duplicates found!");return;}
	gsr=editor.selection.getRange();
	editor.session.replace(gsr,res);
	editor.selection.setRange(gsr);
} else { // Entire Document:
	const lines = gcv.split(/\r?\n/);
	const seen = new Set();
	const duplicates = new Set();
	lines.forEach(line => {
	const trimmed = line.trim();
	if (trimmed !== "") {
	if (seen.has(trimmed)) {
	duplicates.add(trimmed);
	} else {seen.add(trimmed);}}});
	const res = [...duplicates].join('\n');
	if (res === ""){alert("No duplicates found!");return;}
editor.session.setValue(res);}}
