// rwebiGeneral-Document.js Created:12/22/2021 Updated:01/17/2026
// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Module Start: -----------------------
function mStart(){
rFlex('cc');
nww=window.innerWidth-3;
document.getElementById("mHeader").style.width=nww+"px";}

// Module Resize: ----------------------
function mResize(){
mStart();}

// Navigation Options: --------------------
function SiteNav(){
gmo=document.getElementById('navSite').value;
if (gmo=='d'){oReset('navSite');}
if (gmo=='p'){pParent('../Apps/rwebiApp-ToolPanel-c61.html');}
if (gmo=='s'){pParent('../index.html');}
if (gmo=='d'){pParent('../Apps/rwebiApp-Desktop-c61.html');}
if (gmo=='c'){pLoad('../Forms/rwebiForm-Contact.html');}
if (gmo=='h'){pLoad('../Modules/rwebiMenu-Help-Listing.html');}
if (gmo=='e'){pLoad('../Modules/rwebiModule-SourceExplore.html');}
if (gmo=='q'){pLoad('../Documents/rwebiDocument-Privacy.html');}
if (gmo=='i'){pLoad('../Forms/rwebiForm-ReportIssue.html');}
oReset('navSite');}
