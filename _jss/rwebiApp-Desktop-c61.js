// rwebiApp-Desktop-c61.js Created:12/22/2021 Updated:01/25/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Engine: Desktop & Element Positioning: --------
function dStart(){
// dStart: Position Desktop Container Shell:
gow=document.getElementById('ow').innerText;
goh=document.getElementById('oh').innerText;
gsw=window.innerWidth-gow;
gsh=window.innerHeight-goh;
document.getElementById('dContainer').style.width=gsw+"px";
document.getElementById('dContainer').style.height=gsh+"px";
dcw=document.getElementById('dContainer').clientWidth;
dch=document.getElementById('dContainer').clientHeight;
// dStart: osition Windows Bar:
wbfw=gsw+5;wbft=gsh-29;
document.getElementById('TaskBar').style.top=wbft+"px";
document.getElementById('TaskBar').style.width=wbfw+"px";
// dStart: Position Session Panel:
spft=gsh-243;
document.getElementById('SessionPanel').style.top=spft+"px";
// dStart: Shell and Engine Startup:
document.getElementById("dContainer").style.transitionDuration="1.3s";
zIndex();
ShellStart();
ClockStart('st');
DateStart('sd');
eDetails('dContainer');}

// Shell: Startup Functions: ---------------------
function ShellStart(){
gbi=window.document.forminput.bgUrl.value;
gmo=window.document.forminput.bgOpt.value;
document.getElementById("dContainer").style.backgroundImage='url('+'../_bkg/Desktop/dbkg_YellowCanvas.jpg'+')';
document.getElementById('dContainer').style.backgroundSize='cover';
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';
document.getElementById('dContainer').style.backgroundPosition='left center';
document.getElementById('dContainer').style.backgroundPosition='center';}

// Shell: Reset
function ShellReset(){
if (confirm('Are you sure you want to reset this rwebiDesk session? All items will be lost and removed.')) {location.reload();} else {return false;}}

// Shell: Logout
function ShellLogOut(){
lToggle('h','dMenu,dNew');
eHid('dStart');
eVis('LoginScreen');
gnb=window.document.forminput.bgUrl.value;
document.getElementById("LoginScreen").style.backgroundImage='url('+gnb+')';
document.getElementById('LoginScreen').style.backgroundSize='100%';}

// Shell: Session Exit
function SessionExit(){
gdc=confirm("Are you sure you want to close this session?");
if (gdc) {pLoad('../index.html');;
} else {return false;}}

// Shell: Session Destroy
function SessionDestroy(){
gdc=confirm("Are you sure you want to destroy this session?");
if (gdc) {document.write('');
} else {alert("Session destruction cancelled.");eHid('SessionPanel');return false;}}

// Shell: Session Reset
function SessionReset(){
gdc=confirm("Are you sure you want to reset this session? All items will be removed and lost and a new desktop session will be created.");
if (gdc) {window.location.reload(true);
} else {alert("Session destruction cancelled.");eHid('SessionPanel');return false;}}

// Shell: Session Lock
function SessionLock(){
lwi=document.getElementById('eid');
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){
lwi=document.getElementById('locked');lwi.id='eid';
document.getElementById("sl").innerHTML="false";
document.getElementById("oslock").innerHTML="Lock Session";
pSwap('islock','session-lock-','');
alert('Window movement and resizing have been enabled. Session unlocked.');}
if (gsl=="false"){
lwi=document.getElementById('eid');lwi.id='locked';
document.getElementById("sl").innerHTML="true";
document.getElementById("oslock").innerHTML="Session Locked";
pSwap('islock','session-lock-','');
alert('Window movement and resizing have been disabled. Session locked.');}}

// Interface: Session Start Button
function SessionStart(sw){
if(sw=="start"){cCode('SessionStart','SessionPanel');
document.getElementById("SessionPanel").style.overflowY="hidden";}
if(sw=="manage"){cCode('SessionManage','SessionPanel');
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){
document.getElementById("oslock").innerHTML="Session Locked";
pSwap('islock','session-lock-','');}
if (gsl=="false"){
document.getElementById("oslock").innerHTML="Lock Session";}}
if(sw=="options"){cCode('SessionOptions','SessionPanel');}
if(sw=="listing"){cCode('SessionListing','SessionPanel');
document.getElementById("SessionPanel").style.overflowY="scroll";}}

// Interface: CLock Functions: -------------------
var cf;
function ClockStart(ct){
if(ct=="st"){sClock();cf=setInterval(stClock,1000);cf;}
if(ct=="ns"){sClock();cf=setInterval(nsClock,1000);cf;}
if(ct=="mt"){sClock();cf=setInterval(mtClock,1000);cf;}
if(ct=="ts"){sClock();cf=setInterval(tsClock,1000);cf;}}
function sClock(){if(cf){clearTimeout(cf);}}
function mtClock(){mTime('i','ViewTime');}
function stClock(){sTime('i','ViewTime');}
function nsClock(){nsTime('i','ViewTime');}
function tsClock(){tStamp('i','ViewTime');}

// Interface: Date Functions: --------------------
var df;
function DateStart(dt){
if(dt=="sd"){sDate();df=setInterval(sdDate,1000);df;}
if(dt=="nz"){sDate();df=setInterval(nzDate,1000);df;}
if(dt=="ad"){sDate();df=setInterval(adDate,1000);df;}
if(dt=="ff"){sDate();df=setInterval(ffDate,1000);df;}}
function sDate(){if(df){clearTimeout(df);}}
function sdDate(){nDate('i','ViewDate');}
function nzDate(){iDate('i','ViewDate');}
function adDate(){aDate('i','ViewDate');}
function ffDate(){fDate('i','ViewDate');}

// Desktop Properties: Desktop Background Image Select
function bkgSelect(si){
gsi="../_bkg/Desktop/"+si;
window.document.forminput.bgUrl.value=gsi;
document.getElementById("dContainer").style.backgroundImage='url('+gsi+')';
document.getElementById('dContainer').style.backgroundSize='200%';}

// Desktop Properties: Desktop Background Image
function bkgImage(){
gnb=window.document.forminput.bgUrl.value;
document.getElementById("dContainer").style.backgroundImage='url('+gnb+')';
document.getElementById('dContainer').style.backgroundSize='100%';
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';
document.getElementById('dContainer').style.backgroundPosition='left center';
document.getElementById('dContainer').style.backgroundPosition='center';}

// Desktop Properties: Desktop Background Color
function bkgColor(){
gnc=window.document.forminput.bgColor.value;
nc=document.getElementById('dContainer'); 
nc.style.backgroundColor=gnc;}

// Desktop Properties: Desktop Color Image Options
function bkgOption(){
gmo=window.document.forminput.bgOpt.value;
if (gmo=='image'){bkgImage();}
if (gmo=='color'){document.getElementById("dContainer").style.backgroundImage="";}
if (gmo=='both'){return false;}
window.document.forminput.bgUrl.value="";}

// Desktop Properties: Open Background Image
function bkgOpen(){
var filesSelected=document.getElementById("fb").files;
if (filesSelected.length>0){
var fileToLoad=filesSelected[0];
var fileReader=new FileReader();
fileReader.onload=function(fileLoadedEvent){
var srcData=fileLoadedEvent.target.result;
var newImage=document.createElement('img');
newImage.src=srcData;
window.document.forminput.tt.value=srcData;}
fileReader.readAsDataURL(fileToLoad);
var file=document.getElementById("fb").files[0];}setTimeout(bkgView, 350);}

// Desktop Properties: Open Background View
function bkgView(){
goi=window.document.forminput.tt.value;
var newImage=document.createElement('img');
newImage.src=goi;img=goi;
document.getElementById("dContainer").style.backgroundImage='url('+img+')';
document.getElementById('dContainer').style.backgroundSize='100%';
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';
document.getElementById('dContainer').style.backgroundPosition='left center';}

// Desktop Properties: Background Position
function bkgPosition(){
gmo=window.document.forminput.bgPosition.value;
if (gmo=='fill'){bkgFill();}
if (gmo=='fillh'){bkgFillHeight();}
if (gmo=='stretch'){bkgStretch();}
if (gmo=='center'){bkgCenter();}
if (gmo=='repeat'){bkgRepeat();}
if (gmo=='original'){bkgOriginal();}
oReset('bgPosition');}

// Desktop Properties: Background Fill
function bkgFill(){
window.document.forminput.bgRatio.value="0";
dcw=document.getElementById('dContainer').clientWidth;
dbi=document.getElementById('dContainer');
dbi.style.backgroundSize=dcw+"px";}

// Desktop Properties: Background Stretch
function bkgStretch() {
window.document.forminput.bgRatio.value="0";
document.getElementById('dContainer').style.backgroundSize="120%";
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';}

// Desktop Properties: Background Center
function bkgCenter(){
window.document.forminput.bgRatio.value="0";
document.getElementById('dContainer').style.backgroundSize='80%';
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';
document.getElementById('dContainer').style.backgroundPosition='left center';
document.getElementById('dContainer').style.backgroundPosition='center';}

// Desktop Properties: Background Repeat
function bkgRepeat(){
window.document.forminput.bgRatio.value="0";
document.getElementById('dContainer').style.backgroundRepeat='repeat-x';}

// Desktop Properties: Background Original Size
function bkgOriginal(){
gnb=window.document.forminput.bgUrl.value;
newImage=document.createElement('img');
newImage.src=gnb;
giw=newImage.naturalWidth;
gih=newImage.naturalHeight;
document.getElementById('dContainer').style.backgroundSize=giw+"px";
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';}

// Desktop Properties: Background Fill Height
function bkgFillHeight(){
window.document.forminput.bgRatio.value="0";
document.getElementById('dContainer').style.backgroundSize="contain";
document.getElementById('dContainer').style.backgroundRepeat='no-repeat';}

// Desktop Properties: Background Size Ratio
function bkgRatio(){
gns=window.document.forminput.bgRatio.value;
document.getElementById('dContainer').style.backgroundSize=gns+'%';}

// Desktop Properties: Border Color
function DesktopBorderColor(){
gdb=document.getElementById("dContainer");
gnc=window.document.forminput.dbColor.value;
gdb.style.borderColor=gnc;}

// Desktop Properties: Border Toggle
function DesktopBorderView(){
gdb=document.getElementById("dContainer");
gmo=window.document.forminput.vDesktopBorder.value;
if (gmo=='on'){DesktopBorderColor();}
if (gmo=='off'){gdb.style.borderColor="#2e2e2e";}}

// Desktop Properties: Taskbar Viewable
function TaskBarView(){
gtb=document.getElementById("TaskBar");
gmo=window.document.forminput.vTaskBar.value;
if (gmo=='on'){gtb.style.display="block";}
if (gmo=='off'){gtb.style.display="none";}}

// Desktop Properties: Taskbar Color
function TaskBarColor(){
gtb=document.getElementById("TaskBar");
gnc=window.document.forminput.cTaskBar.value;
gtb.style.backgroundColor=gnc;}

// Desktop Properties: Taskbar Opacity
function TaskBarOpacity(){
gtb=document.getElementById("TaskBar");
gol=window.document.forminput.oTaskBar.value;
gtb.style.opacity=gol;}

// Desktop Properties: Taskbar Opacity Buttons
function tboSum(ei,op){
oar=0.1;
goa=window.document.forminput[ei].value*1;
if (op=="i"){not=eval(goa+oar);not=not.toFixed(1);}
if (op=="d"){not=eval(goa-oar);not=not.toFixed(1);}
if (not==-0.0){alert('Minimum is 0.');window.document.forminput[ei].value='.0';return false;}
if (not==1.1){alert('Maximum is 1.0');window.document.forminput[ei].value='1.0';return false;}
if (not>-0.0){window.document.forminput[ei].value=not;}
TaskBarOpacity();}

// Desktop Properties: Taskbar Clock Options
function ClockOptions(){
gcv=document.getElementById("ViewTime");
gmo=window.document.forminput.optClock.value;
if (gmo=='on'){gcv.style.display="block";}
if (gmo=='off'){gcv.style.display="none";}
if (gmo=='st'){ClockStart('st');}
if (gmo=='ns'){ClockStart('ns');}
if (gmo=='mt'){ClockStart('mt');}
if (gmo=='ts'){ClockStart('ts');}}

// Desktop Properties: Taskbar Clock Color
function ClockColor(){
gtb=document.getElementById("ViewTime");
gnc=window.document.forminput.cColor.value;
gtb.style.color=gnc;}

// Desktop Properties: Taskbar Date Options
function DateOptions(){
gcv=document.getElementById("ViewDate");
gmo=window.document.forminput.optDate.value;
if (gmo=='on'){gcv.style.display="block";}
if (gmo=='off'){gcv.style.display="none";}
if (gmo=='sd'){DateStart('sd');}
if (gmo=='nz'){DateStart('nz');}
if (gmo=='ad'){DateStart('ad');}
if (gmo=='ff'){DateStart('ff');}}

// Desktop Properties: Taskbar Date Color
function DateColor(){
gtb=document.getElementById("ViewDate");
gnc=window.document.forminput.dColor.value;
gtb.style.color=gnc;}

// Window Properties: Window Title
function WindowTitle(){
//gei=window.document.forminput.mi.value;
gei=document.getElementById('mi').innerText;
gti="t"+gei;gmi="mn"+gei;
gnt=window.document.forminput.wTitle.value;
document.getElementById(gmi).innerHTML=gnt;
document.getElementById(gti).innerHTML=gnt;}

// Window Properties: Inactive Window Color
function InactiveWindowColor(){
gei=document.getElementById('mi').innerText;
gti="tb"+gei;gmi="mt"+gei;
gnc=window.document.forminput.iwColor.value;
document.getElementById(gmi).innerHTML=gnc;
nc=document.getElementById(gti);
nc.style.backgroundColor=gnc;}

// Window Properties: Inactive Window Color
function ActiveWindowColor(){
gei=document.getElementById('mi').innerText;
gti="tb"+gei;gmi="mt"+gei;
gnc=window.document.forminput.iwColor.value;
document.getElementById(gmi).innerHTML=gnc;
nc=document.getElementById(gti);
nc.style.backgroundColor=gnc;}

// Window Properties: Window Opacity
function WindowOpacity(){
gei=document.getElementById('mi').innerText;
gmi="mo"+gei;
gno=window.document.forminput.oWindow.value;
document.getElementById(gmi).innerHTML=gno;
cvs=document.getElementById(gei);cvs.style.opacity=gno;}

// Window Properties: Window Opacity Buttons
function woSum(ei,op){
oar=0.1;
goa=window.document.forminput[ei].value*1;
if (op=="i"){not=eval(goa+oar);not=not.toFixed(1);}
if (op=="d"){not=eval(goa-oar);not=not.toFixed(1);}
if (not==-0.0){alert('Minimum is 0.');window.document.forminput[ei].value='.0';return false;}
if (not==1.1){alert('Maximum is 1.0');window.document.forminput[ei].value='1.0';return false;}
if (not>-0.0){window.document.forminput[ei].value=not;}
WindowOpacity();}

// Interface: Window Width Adjust
function wPosWidth(){
gnw=window.document.forminput.wpw.value;
gei=document.getElementById('mi').innerText;
document.getElementById(gei).style.width=gnw+"px";}

// Interface: Window Height Adjust
function wPosHeight(){
gnh=window.document.forminput.wph.value;
gei=document.getElementById('mi').innerText;
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Top Left: ------------------ 
function wPosTL(){
gei=document.getElementById('mi').innerText;
gdw=document.getElementById('dContainer').clientWidth;
gdh=document.getElementById('dContainer').clientHeight;
gnw=eval(gdw/2-10);gnh=eval(gdh/2-35);
document.getElementById(gei).style.top="10px";
document.getElementById(gei).style.left="10px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Top Right: -----------------
function wPosTR(){
gei=document.getElementById('mi').innerText;
gdw=document.getElementById('dContainer').clientWidth;
gdh=document.getElementById('dContainer').clientHeight;
gww=document.getElementById(gei).clientWidth;
gnw=eval(gdw/2);gnh=eval(gdh/2-35);gnl=eval(gdw/2+3);
document.getElementById(gei).style.top="10px";
document.getElementById(gei).style.left=gnl+"px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Bottom Left: ---------------
function wPosBL(){
gei=document.getElementById('mi').innerText;
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw/2-10);gnh=eval(gih/2);gnt=eval(gih/2-35);gnl=eval(giw/2);
document.getElementById(gei).style.top=gnt+"px";
document.getElementById(gei).style.left="10px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Bottom Right: --------------
function wPosBR(){
gei=document.getElementById('mi').innerText;
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw/2-15);gnh=eval(gih/2);gnt=eval(gih/2-35);gnl=eval(giw/2);
document.getElementById(gei).style.top=gnt+"px";
document.getElementById(gei).style.left=gnl+"px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Top Horizontal: ------------
function wPosTH(){
gei=document.getElementById('mi').innerText;
gei=document.getElementById('mi').innerText;
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw-24);gnh=eval(gih/2);gnt=eval(gih/2-35);gnl=eval(giw/2);
document.getElementById(gei).style.top="10px";
document.getElementById(gei).style.left="10px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Bottom Horizontal: ---------
function wPosBH(){
gei=document.getElementById('mi').innerText;
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw-24);gnh=eval(gih/2);gnt=eval(gih/2-35);gnl=eval(giw/2);
document.getElementById(gei).style.top=gnt+"px";
document.getElementById(gei).style.left="10px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Top Vertical Right: --------
function wPosTVR(){
gei=document.getElementById('mi').innerText;
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw/2-12);gnh=eval(gih-45);gnt=eval(gih/2-37);gnl=eval(giw/2);
document.getElementById(gei).style.top="10px";
document.getElementById(gei).style.left=gnl+"px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Top Vertical Left: ---------
function wPosTVL(){
gei=document.getElementById('mi').innerText;
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw/2-12);gnh=eval(gih-45);gnt=eval(gih/2-37);gnl=eval(giw/2);
document.getElementById(gei).style.top="10px";
document.getElementById(gei).style.left="10px";
document.getElementById(gei).style.width=gnw+"px";
document.getElementById(gei).style.height=gnh+"px";}

// Interface: Window Control Functions: ----------
function wMax(ei){
// Check Session Lock:
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){alert('Window movement and resizing have been enabled. Session is locked.');return false;}
gih=window.innerHeight;giw=window.innerWidth;
gnw=eval(giw-24);gnh=eval(gih-47);
document.getElementById(ei).style.top="10px";
document.getElementById(ei).style.left="10px";
document.getElementById(ei).style.width=gnw+"px";
document.getElementById(ei).style.height=gnh+"px";}

// Interface: Window Medium
function wMed(ei){
// Check Session Lock:
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){alert('Window movement and resizing have been disabled. Session is locked.');return false;}
wiw=window.innerWidth/2-10;
wih=window.innerHeight/2-35;
document.getElementById(ei).style.width=wiw+"px";
document.getElementById(ei).style.height=wih+"px";
document.getElementById(ei).style.left="11px"}

// Interface: Window Minimum
function wMin(ei){
// Check Session Lock:
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){alert('Window movement and resizing have been disabled. Session is locked.');return false;}
eHid(ei);}

// Interface: Window Close
function wClose(ei){
// Check Session Lock:
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){alert('Window movement and resizing have been disabled. Session is locked.');return false;}
eHid(ei);
tbi="tbm"+ei;
wmi="wm"+ei;
rWin(wmi);
dHid(tbi);
eHid('wProperties');}

// Interface: Window New
function wNew(wn,wp,ww,wh,wl,wt){
// Check Session Lock:
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){alert('Window creation, movement and resizing have been disabled. Session is locked.');return false;}
wp=unescape(wp);
gwi=document.getElementById('wi').innerText;
document.getElementById('dwi').innerText=gwi;
cwn=Number(gwi)+1;
cwn="00"+cwn;
document.getElementById('wi').innerText=cwn;
document.getElementById('dwi').innerText=cwn;
// wn	window name
// wp	window url path
// ww	window width px
// wh	window height px
// wl	window from left px
// wt	window from top px
vwc="w"+cwn;// window container
vwh="hw"+cwn;// window header
vwt="tw"+cwn;// window title
vtb="tb"+vwc;// window title background
vwb="wb"+cwn;// window bottom
vwf="wf"+cwn;// window frame
wManager(vwc,wn);
if(wn){tbManager(vwc,wn)};
wiw=window.innerWidth-10;
wih=window.innerHeight-35;
rww=ww.replace(/[a-z]/gi, '');
rwh=wh.replace(/[a-z]/gi, '');
if (rww>wiw) {
wl="11px";
ww="320px";
wt="10px";
wh="70%";}
//wl="11px"
// Window Container Section:
wc1=unescape('<div id="');
wc2=unescape('" name="');
wc3=unescape('" class="wctrl" style="position:absolute;z-index:9;top:');
wc4=unescape(';left:');
wc5=unescape(';width:');
wc6=unescape(';height:');
wc7=unescape(';min-width:300px;min-height:280px;user-select:none;background-color:#f1f1f1;border:1px solid #d3d3d3;border-radius:9px;opacity:0.9;resize:both;overflow-x:none;overflow-y:hidden;visibility:visible;"%20%6f%6ec%6c%69c%6b%3D%22%73e%74D%72a%67%28%27');
wc8=unescape('%27%29%3B%77F%72%6f%6e%74%28%27');
wc9=unescape('%27%29%3B%22%20%6f%6e%6d%6f%75%73e%6f%76e%72%3D%22eDe%74a%69%6c%73%28%27');
wc10=unescape('%27%29%3B%22%20%6f%6e%6d%6f%75%73e%6f%75%74%3D%22eDe%74a%69%6c%73%28%27');
wc11=unescape('%27%29%3B%77Bac%6b%28%27');
wc12=unescape('%27%29%3B%22%3E');
wct=wc1+vwc+wc2+wn+wc3+wt+wc4+wl+wc5+ww+wc6+wh+wc7+vwc+wc8+vwc+wc9+vwc+wc10+vwc+wc11+vwc+wc12;
// Window Header Section:
wh1=unescape('%3Cd%69%76%20%69d%3D%22');
wh2=unescape('%22%20%73%74%79%6ce%3D%22c%75%72%73%6f%72%3A%6d%6f%76e%3B%7a%2d%69%6ede%78%3A10%3Bc%6f%6c%6f%72%3A%23ffffff%3B%22%3E%3Cd%69%76%20%69d%3D%22');
//wh3=unescape('%22%20%73%74%79%6ce%3D%22%68e%69%67%68%74%3A30%70%78%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A%23404040%3B%22%3E%0A%3C%73%70a%6e%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2f%73e%6cec%74%2e%70%6e%67%22%20c%6ca%73%73%3D%22db%79d%22%20%74%69%74%6ce%3D%22%57%69%6ed%6f%77%20%50%72%6f%70e%72%74%69e%73%22%20%73%74%79%6ce%3D%22%68e%69%67%68%74%3A10%70%78%3Bf%6c%6fa%74%3A%6cef%74%3B%6da%72%67%69%6e%2d%6cef%74%3A4%70%78%3Bc%75%72%73%6f%72%3Adefa%75%6c%74%3B%22%20%6f%6ec%6c%69c%6b%3D%22%77%50%72%6f%70e%72%74%69e%73%28%27');
wh3a=unescape('%22%20%73%74%79%6ce%3D%22%68e%69%67%68%74%3A30%70%78%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A');
gbb=window.document.forminput.iwColor.value;
wh3b=unescape('%3B%22%3E%3C%73%70a%6e%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2fe%6ce%6de%6e%74%2e%70%6e%67%22%20c%6ca%73%73%3D%22%69b%74%6e%22%20%74%69%74%6ce%3D%22%57%69%6ed%6f%77%20%50%72%6f%70e%72%74%69e%73%22%20%73%74%79%6ce%3D%22%77%69d%74%68%3A12%70%78%3B%68e%69%67%68%74%3A12%70%78%3Bf%6c%6fa%74%3A%6cef%74%3B%6da%72%67%69%6e%2d%6cef%74%3A4%70%78%3Bc%75%72%73%6f%72%3Adefa%75%6c%74%3B%22%20%6f%6ec%6c%69c%6b%3D%22%77%50%72%6f%70e%72%74%69e%73%28%27');
wh3=wh3a+gbb+wh3b;
wh4=unescape('%27%29%3B%22%3E%3C%2f%73%70a%6e%3E%3C%73%70a%6e%20%69d%3D%22');
wh5=unescape('%22%20%73%74%79%6ce%3D%22f%6f%6e%74%2d%73%69%7ae%3A1%2e2e%6d%3Bf%6f%6e%74%2d%77e%69%67%68%74%3Ab%6f%6cd%3B%70add%69%6e%67%2d%6cef%74%3A3%70%78%3B%6c%69%6ee%2d%68e%69%67%68%74%3A30%70%78%3B%76e%72%74%69ca%6c%2da%6c%69%67%6e%3Ab%6f%74%74%6f%6d%3B%22%3E');
wh6=unescape('%3C%2f%73%70a%6e%3E');
wht=wh1+vwh+wh2+vtb+wh3+vwc+wh4+vwt+wh5+wn+wh6;
// Window Options Section:
wo1=unescape('%3C%73%70a%6e%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2f%6dc%6c%6f%73e%2e%70%6e%67%22%20c%6ca%73%73%3D%22%69b%74%6e%22%20%74%69%74%6ce%3D%22C%6c%6f%73e%22%20%73%74%79%6ce%3D%22%77%69d%74%68%3A12%70%78%3B%68e%69%67%68%74%3A12%70%78%3Bf%6c%6fa%74%3A%72%69%67%68%74%3B%6da%72%67%69%6e%2d%72%69%67%68%74%3A4%70%78%3Bc%75%72%73%6f%72%3Adefa%75%6c%74%3B%22%20%6f%6ec%6c%69c%6b%3D%22%77C%6c%6f%73e%28%27');
wo2=unescape('%27%29%3B%22%3E%3C%2f%73%70a%6e%3E%3C%73%70a%6e%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2f%77%70%6f%73%6d%2e%70%6e%67%22%20c%6ca%73%73%3D%22%69b%74%6e%22%20%74%69%74%6ce%3D%22%4da%78%69%6d%69%7ae%22%20%73%74%79%6ce%3D%22%77%69d%74%68%3A12%70%78%3B%68e%69%67%68%74%3A12%70%78%3Bf%6c%6fa%74%3A%72%69%67%68%74%3B%6da%72%67%69%6e%2d%72%69%67%68%74%3A4%70%78%3Bc%75%72%73%6f%72%3Adefa%75%6c%74%3B%22%20%6f%6ec%6c%69c%6b%3D%22%77%4da%78%28%27');
wo3=unescape('%27%29%3B%22%3E%3C%2f%73%70a%6e%3E%3C%73%70a%6e%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2f%77%70%6f%73%72%2e%70%6e%67%22%20c%6ca%73%73%3D%22%69b%74%6e%22%20%74%69%74%6ce%3D%22%4ded%69%75%6d%22%20%73%74%79%6ce%3D%22%77%69d%74%68%3A12%70%78%3B%68e%69%67%68%74%3A12%70%78%3Bf%6c%6fa%74%3A%72%69%67%68%74%3B%6da%72%67%69%6e%2d%72%69%67%68%74%3A4%70%78%3Bc%75%72%73%6f%72%3Adefa%75%6c%74%3B%22%20%6f%6ec%6c%69c%6b%3D%22%77%4ded%28%27');
wo4=unescape('%27%29%3B%22%3E%3C%2f%73%70a%6e%3E%3C%73%70a%6e%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%6f%2f%77%70%6f%73b%68%2e%70%6e%67%22%20c%6ca%73%73%3D%22%69b%74%6e%22%20%74%69%74%6ce%3D%22%4d%69%6e%69%6d%69%7ae%22%20%73%74%79%6ce%3D%22%77%69d%74%68%3A12%70%78%3B%68e%69%67%68%74%3A12%70%78%3Bf%6c%6fa%74%3A%72%69%67%68%74%3B%6da%72%67%69%6e%2d%72%69%67%68%74%3A4%70%78%3Bc%75%72%73%6f%72%3Adefa%75%6c%74%3B%22%20%6f%6ec%6c%69c%6b%3D%22%77%4d%69%6e%28%27');
wo5=unescape('%27%29%3B%22%3E%3C%2f%73%70a%6e%3E%3C%2fd%69%76%3E%3C%2fd%69%76%3E');
wot=wo1+vwc+wo2+vwc+wo3+vwc+wo4+vwc+wo5;
// Window Bottom Section:
wb1=unescape('<div id="');
wb2=unescape('" style="overflow-y:none;height:100%;width:100%;background-color:#ffffff;border:none;%22%3E');
wbt=wb1+vwb+wb2;
// Window Frame Section:
wf1=unescape('<object type="text/html" id="');
wf2=unescape('" data="');
wf3=unescape('" style="height:95%;width:99%;overflow:none;border:0px;"%3E%3C%2f%6fb%6aec%74%3E%3C%2fd%69%76%3E%3C%2fd%69%76%3E');
wft=wf1+vwf+wf2+wp+wf3;
// Create & Display Window Object:
wot=wct+wht+wot+wbt+wft;
document.getElementById('winCode').innerText=wot;
document.getElementById('dContainer').insertAdjacentHTML('afterend',wot);
wFront(vwc);dProperties();}

// Shell: Window Manager: ----------------------
function wManager(ei,wn){
gtc=document.getElementById('dt4');
gct=document.getElementById('dt4').innerText;
grc=gct.split('\n').length;grc=eval(grc);
wmuid="wm"+ei;
row=gtc.insertRow(grc),
cell0=row.insertCell(0);
cell1=row.insertCell(1);
cell2=row.insertCell(2);
cell3=row.insertCell(3);
cell4=row.insertCell(4);
cell5=row.insertCell(5);
cell6=row.insertCell(6);
muid="m"+ei;
mn="mn"+ei;
mt="mt"+ei;
mb="mb"+ei;
mc="mc"+ei;
mo="mo"+ei;
wm1=unescape('%3C%73%70a%6e%20%6f%6ec%6c%69c%6b%3D%22%77%50%72%6f%70e%72%74%69e%73%28%27');
wm2=unescape('%27%29%3B%22%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%74%2f%77%70%72%6f%70%2e%70%6e%67%22%3E%3C%2f%73%70a%6e%3E');
//<span onclick="wProperties('ei');"><img src="../_ico/cog.png" height="10px"></span>
wml=wm1+ei+wm2;
wo1=unescape('%3C%73%70a%6e%20%6f%6ec%6c%69c%6b%3D%22e%54%6f%67%67%6ce%28%27');
wo2=unescape('%27%29%3B%77F%72%6f%6e%74%28%27');
wo3=unescape('%27%29%3B%22%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%74%2f%77c%75e%2e%70%6e%67%22%3E%3C%2f%73%70a%6e%3E');
//<span onclick="eToggle('wFront('ei');"><img src="../_ico/wreg.png" height="10px"></span>
wot=wo1+ei+wo2+ei+wo3;
wr1=unescape('%3C%73%70a%6e%20%6f%6ec%6c%69c%6b%3D%22%77C%6c%6f%73e%28%27');
wr2=unescape('%27%29%3B%22%3E%3C%69%6d%67%20%73%72c%3D%22%2e%2e%2f%5f%69c%74%2f%77c%6c%6f%73e%2e%70%6e%67%22%3E%3C%2f%73%70a%6e%3E');
//<span onclick="wClose('ei');rWin('wmuid');"><img src="../_ico/wclose.png" height="10px"></span>
wrt=wr1+ei+wr2;
row.id = wmuid;
cell0.innerHTML="<span class='tod'>"+wml+"&nbsp;"+wot+"&nbsp;"+wrt+"</span>";
cell1.innerHTML="<span class='tml' id=\""+muid+"\">"+muid+"</span>";
cell2.innerHTML="<span class='tol' id='"+mn+"'>"+wn+"</span>";
cell3.innerHTML="<span class='trl' id='"+mt+"'>#3d4246</span>";
cell4.innerHTML="<span class='tbl' id='"+mb+"'>#404040</span>";
cell5.innerHTML="<span class='tgl' id='"+mc+"'>9</span>";
cell6.innerHTML="<span class='tcl' id='"+mo+"'>0.9</span>";}

// Shell: Toggle Window Manager
function ToggleManager(){
const el = document.getElementById('wmt');
el.style.position = "absolute";
gtm=document.getElementById('tm').innerText;
gwc=document.querySelectorAll('.wctrl');
gwn=gwc.length;mwc.innerText=gwn;
if (gtm=="false"){el.style.left = "12px";document.getElementById('tm').innerText="true";}
if (gtm=="true"){el.style.left = "-9999px";document.getElementById('tm').innerText="false";}}

// Shell: Toggle Element Details
function ToggleDetails(){
gtm=document.getElementById('td').innerText;
document.getElementById('eDetails').style.width="2px";
document.getElementById('soDetails').style.width="2px";
document.getElementById('eList').style.width="2px";
dFront('eDetails');}

// Shell: Remove Window and Window Manger Row: --
function rWin(rid){
gei=rid.replace(/wm/g,'');
row=document.getElementById(rid);
row.parentNode.removeChild(row);
xw=document.getElementById(gei);
const parentElement = xw.parentNode;
parentElement.removeChild(xw);}

// Shell: Taskbar Manager: ---------------------
function tbManager(ei,wn){
tbmuid="tbm"+ei;
rc=Math.floor(Math.random()*128)+128;
gc=Math.floor(Math.random()*128)+128;
bc=Math.floor(Math.random()*128)+128;
tic="#"+((1<<24)+(rc<<16)+(gc<<8)+bc).toString(16).slice(1);
tm1=unescape('%3C%73%70a%6e%20%69d%3D%22');
tm2=unescape('%22%20%73%74%79%6ce%3D%22f%6c%6fa%74%3A%72%69%67%68%74%3B%68e%69%67%68%74%3A22%70%78%3B%77%69d%74%68%3Aa%75%74%6f%3B%6da%72%67%69%6e%2d%74%6f%70%3A3%70%78%3B%6da%72%67%69%6e%2d%72%69%67%68%74%3A2%70%78%3B%70add%69%6e%67%2d%6cef%74%3A2%70%78%3B%70add%69%6e%67%2d%72%69%67%68%74%3A3%70%78%3B%70add%69%6e%67%2d%74%6f%70%3A7%70%78%3B%6da%72%67%69%6e%2d%74%6f%70%3A2%70%78%3Bb%6f%72de%72%2d%72ad%69%75%73%3A3%70%78%3Bf%6f%6e%74%2d%73%69%7ae%3A1%2e05e%6d%3Bc%6f%6c%6f%72%3A%23000000%3Bbac%6b%67%72%6f%75%6ed%2dc%6f%6c%6f%72%3A');
tm3=unescape('%3Bb%6f%72de%72%3A1%70%78%20%73%6f%6c%69d%20%23cccccc%3Bd%69%73%70%6ca%79%3Ab%6c%6fc%6b%3B%22%20%6f%6ec%6c%69c%6b%3D%22e%54%6f%67%67%6ce%28%27');
tm4=unescape('%27%29%3B%77F%72%6f%6e%74%28%27');
tm5=unescape('%27%29%3B%22%3E');
tm6=unescape('%3C%2f%73%70a%6e%3E');
//<span id="+tbmuid+" style="height:22px;width:auto;margin-top:3px;margin-right:2px;padding-left:2px;padding-right:3px;padding-top:2px;margin-top:4px;float:right;font-size:0.93em;color:#000000;background-color:+randomcolor+;border:1px solid #cccccc;display:block;" onclick="eToggle('+ei+');wFront('+ei+');">+wn+</span>
tmt=tm1+tbmuid+tm2+tic+tm3+ei+tm4+ei+tm5+wn+tm6;
gtb=document.getElementById('TaskView').innerHTML;
document.getElementById('TaskView').innerHTML=gtb+tmt;}

// Shell: Open Window Properties
function wProperties(ei){
// Check Session Lock:
gsl=document.getElementById('sl').innerText;
if (gsl=="true"){alert('Window creation, movement and resizing have been disabled. Session is locked.');return false;}
eHid('dProperties');
document.getElementById('mi').innerText=ei;
gwt="mn"+ei;
gwn=document.getElementById(gwt).innerText;
window.document.forminput.wTitle.value=gwn;
lToggle('v','wProperties');dDelay('wProperties');
gmx=event.clientX;gmy=event.clientY;
document.getElementById('wProperties').style.top=gmy+"px";
document.getElementById('wProperties').style.left=gmx+"px";}

// Shell: Open Desktop Properties
function dProperties(ei){
eHid('wProperties');}

// Engine: Element Details:
function eDetails(ei){
if (!ei){ei=window.document.forminput.soDetails.value;}
if (ei=='copy'){edCopy();}
if (ei=='left'){edLeft();}
if (ei=='right'){edRight();}
if (ei=='close'){edClose();}
ec=document.querySelectorAll('div');
en=ec.length;ne.innerText=en;
wc=document.querySelectorAll('.wctrl');
wn=wc.length;nw.innerText=wn;mwc.innerText=wn;
go=document.getElementById(ei).getBoundingClientRect();
pt=go.top;pt=pt.toFixed(0);et.innerHTML="<span class='rp'>"+pt+"</span>";
pl=go.left;pl=pl.toFixed(0);el.innerHTML="<span class='bc'>"+pl+"</span>";
pw=go.width;pw=pw.toFixed(0);ew.innerHTML="<span class='oc'>"+pw+"</span>";
ph=go.height;ph=ph.toFixed(0);eh.innerHTML="<span class='yc'>"+ph+"</span>";
eid.innerHTML=ei;deid.innerHTML=ei;
ep=document.getElementById(ei).getAttribute('style');
ep=ep.replace(/^\s*[\r\n]/gm,'');
ep=ep.substring(0,ep.length-1)
st="<span class='wc lb80' style=''>Property:</span>&nbsp;<span class='wc lb80'>Value:</span><br>";
re="</span><br><span class='wc lb80' style=''>";
cs="</span><span class='ac'>";
ep=ep.replace(/\:/g,cs);
ep=ep.replace(/\;/g,re);
ep=ep.replace(/background/g,'bkg');
res=st+"<span class='wc lb80' style=''>"+ep+"</span>";
eList.innerHTML=res;}

// Engine: Mouse Position
function mPosition(){
mx=event.clientX;
my=event.clientY;
cmx.innerHTML="<span class='cy'>"+mx+"</span>";
cmy.innerHTML="<span class='bs'>"+my+"</span>";}

// Engine: Z-Index Management
function zIndex(){
document.getElementById("zi").innerHTML="100";
document.getElementById("wzi").innerHTML="100";}

// Engine: Destop Object Front
function dFront(ei){
gzi=document.getElementById('zi').innerText;
nzi=Number(gzi)+1;
document.all.zi.innerHTML=nzi;
document.getElementById(ei).style.zIndex=nzi;}

// Engine: View Destop Object Font
function vFront(ei){
gzi=document.getElementById('zi').innerText;
nzi=Number(gzi)+1;
eVis(ei);
document.all.zi.innerHTML=nzi;
document.getElementById(ei).style.zIndex=nzi;}

// Engine: Desktop Object Front Delay
function dDelay(ei){
setTimeout(dFront,100,ei);}

// Engine: Window Position Front
function wFront(ei){
gzi=document.getElementById('zi').innerText;
nzi=Number(gzi)+1;
document.all.zi.innerHTML=nzi;
document.getElementById(ei).style.zIndex=nzi;
document.all.wzi.innerHTML=nzi;
document.getElementById('dwi').innerText=nzi;
gmb="mb"+ei;gmt="mt"+ei;
gbc=window.document.forminput.awColor.value;
nc=document.getElementById(ei);
nc.style.backgroundColor=gmb;
nc=document.getElementById(ei); 
nc.style.borderColor=gbc;}

// Engine: Window Position Back
function wBack(ei){
gwi=document.getElementById('eid').innerText;
gcb="tb"+ei;gmb="mb"+ei;gmt="mt"+ei;
gtb=document.getElementById(gmb).innerText;
gtt=document.getElementById(gmt).innerText;
gbc=window.document.forminput.iwColor.value;
nc=document.getElementById(gcb); 
nc.style.backgroundColor=gbc;
nc=document.getElementById(ei); 
nc.style.borderColor=gtb;}

// Engine: Drag & Resize Controls
function setDrag(ei){
gtb="tb"+ei;
nc=document.getElementById(gtb);
bgc=window.document.forminput.awColor.value;
nc.style.backgroundColor=bgc;
dragElement(document.getElementById(ei));}

// Engine: Drag Element Header
function dragElement(elmnt){
pos1=0,pos2=0,pos3=0,pos4=0;
if (document.getElementById("h"+elmnt.id)){
document.getElementById("h"+elmnt.id).onmousedown=dragMouseDown;
} else {elmnt.onmousedown=dragMouseDown;}

// Engine: Drag Mouse Down
function dragMouseDown(e){
e=e || window.event;
e.preventDefault();
pos3=e.clientX;
pos4=e.clientY;
document.onmouseup=closeDragElement;
document.onmousemove=elementDrag;}

// Engine: Drag Element 
function elementDrag(e){
e=e || window.event;
e.preventDefault();
pos1=pos3-e.clientX;
pos2=pos4-e.clientY;
pos3=e.clientX;
pos4=e.clientY;
dcw=document.getElementById('dContainer').clientWidth;
dch=document.getElementById('dContainer').clientHeight;
gwn=document.getElementById('eid').innerText;
bgc=window.document.forminput.iwColor.value;
nc=document.getElementById(gwn);
nc.style.borderColor=bgc;
go=document.getElementById(gwn).getBoundingClientRect();
pt=go.top+5;pl=go.left+20;pr=go.right-20;pb=go.bottom-50;
if(pt<0){fixDragElement(e);}
if(pl<0){fixDragElement(e);}
if(pr>dcw){fixDragElement(e);}
if(pb>dch){fixDragElement(e);}
elmnt.style.top=(elmnt.offsetTop-pos2)+"px";
elmnt.style.left=(elmnt.offsetLeft-pos1)+"px";}

// Engine: Close Drag Element
function closeDragElement(e){
document.onmouseup=null;
document.onmousemove=null;}

// Engine: Exit Drag Element
function xDragElement(e){
document.onmouseup=null;
document.onmousemove=null;}

// Engine: Fix Drag Element
function fixDragElement(e){
elmnt.style.left="25px"; 
elmnt.style.top="50px"; 
document.onmouseup=null;
document.onmousemove=null;
gwn=document.getElementById('eid').innerText;
gtb="tb"+gwn;
nc=document.getElementById(gtb); 
nc.style.backgroundColor="#2e2e2e";}}

// File Functions --------------------------------
// File: Open Text File
function openText(event) {
wNew('','','530px','350px','40px','60px');
gwi=document.getElementById('wi').innerText;
cwn=Number(gwi);
gfn="wb00"+cwn;
tfc=unescape('%3C%74e%78%74a%72ea%20%69d%3D%27%69c%27%20%73%74%79%6ce%3D%27%77%69d%74%68%3A98%25%3B%68e%69%67%68%74%3A90%25%3B%72e%73%69%7ae%3A%6e%6f%6ee%3B%77%68%69%74e%2d%73%70ace%3A%70%72e%2d%77%72a%70%3B%77%6f%72d%2d%77%72a%70%3Ab%72ea%6b%2d%77%6f%72d%3B%77%6f%72d%2db%72ea%6b%3Ab%72ea%6b%2d%77%6f%72d%3B%27%20c%6ca%73%73%3D%27c%76%74%27%3E%3C%2f%74e%78%74a%72ea%3E');
document.getElementById(gfn).innerHTML = tfc;
var file=document.getElementById('itxt').files[0];
nfile=document.getElementById('itxt').value;
var reader=new FileReader();
reader.onload=function(e){
var textArea=document.getElementById('ic');
textArea.value=e.target.result;}
reader.readAsText(file);
gtb="tw00"+cwn;
gtf=document.getElementById(gtb);
gtf.style.fontSize="0.83em";
var name = document.getElementById('itxt');
fn=name.files.item(0).name;
gmi="mnw00"+cwn;
vwc="w00"+cwn;
document.getElementById(gmi).innerHTML=fn;
document.getElementById(gtb).innerHTML=fn;
tbManager(vwc,fn);
window.document.forminput.itxt.value="";}

// File: Open HTML File
async function openHTML(event) {
const file=event.target.files.item(0);
const text=await file.text();
var name=document.getElementById('ihtm');
nfile=name.files.item(0).name;
wNew(nfile,'','530px','350px','40px','60px');
gwi=document.getElementById('wi').innerText;
cwn=Number(gwi);
gfn="wb00"+cwn;
tfc="<div id='ci' style='height:100%'></div>";
document.getElementById(gfn).innerHTML = tfc;
gtb="tw00"+cwn;
gtf=document.getElementById(gtb);
gtf.style.fontSize="0.83em";
gmi="mnw00"+cwn;
vwc="w00"+cwn;
document.getElementById(gmi).innerHTML=nfile;
//document.getElementById('ci').src=text;
document.getElementById('ci').innerHTML=text;
window.document.forminput.ihtm.value="";}

// View Functions --------------------------------
// View: Text url
function urlViewer(sw){
if(sw=="p"){
gmx=event.clientX;
gmy=event.clientY;
document.getElementById('ViewURL').style.top=gmy+"px";
document.getElementById('ViewURL').style.left=gmx+"px";
eVis('ViewURL');dDelay('ViewURL');} else {
url= new URL(window.document.forminput.urlLink.value);
hn=url.hostname;
hn=hn.replace(/www./g,'');
wNew(hn,'','530px','350px','40px','60px');
gwi=document.getElementById('wi').innerText;
cwn=Number(gwi);
gfn="wf00"+cwn;
gco=document.getElementById(gfn);
gco.outerHTML=gco.outerHTML.replace(/data="(.+?)"/,'data="'+url+'"');
document.getElementById(gfn).style.cssText="height:88%;width:98%;overflow:none;border:0px;"}}

// View: Image url
function imgViewer(sw){
if(sw=="p"){
gmx=event.clientX;
gmy=event.clientY;
document.getElementById('ViewIMG').style.top=gmy+"px";
document.getElementById('ViewIMG').style.left=gmx+"px";
eVis('ViewIMG');dDelay('ViewIMG');eDetails('ViewIMG');} else {
url= new URL(window.document.forminput.imgLink.value);
hn=url.hostname;
hn=hn.replace(/www./g,'');
wNew(hn,'','530px','350px','40px','60px');
gwi=document.getElementById('wi').innerText;
cwn=Number(gwi);
gfn="wf00"+cwn;
gco=document.getElementById(gfn);
gco.outerHTML=gco.outerHTML.replace(/data="(.+?)"/,'data="'+url+'"');
document.getElementById(gfn).style.cssText="height:88%;width:98%;overflow:none;border:0px;"}}

// View: PDF url
function pdfViewer(sw){
if(sw=="p"){
gmx=event.clientX;
gmy=event.clientY;
document.getElementById('ViewPDF').style.top=gmy+"px";
document.getElementById('ViewPDF').style.left=gmx+"px";
eVis('ViewPDF');dDelay('ViewPDF');} else {
url= new URL(window.document.forminput.pdfLink.value);
hn=url.hostname;
hn=hn.replace(/www./g,'');
wNew(hn,'','530px','350px','40px','60px');
gwi=document.getElementById('wi').innerText;
cwn=Number(gwi);
gfn="wf00"+cwn;
gco=document.getElementById(gfn);
gco.outerHTML=gco.outerHTML.replace(/data="(.+?)"/,'data="'+url+'"');
document.getElementById(gfn).style.cssText="height:88%;width:98%;overflow:none;border:0px;"}}
