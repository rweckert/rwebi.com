<?php
//                 _   _  
//   ___ _ _ _ ___| |_|_| Script: rwebiForm-Contact.php
//  |  _| | | | -_| . | | Created: 01/13/2022 Updated: 02/21/2026
//  |_| |_____|___|___|_| rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Message Variables: ------------------
$mmn = $_POST['mn'];
$mmc = $_POST['mc'];
$mme = $_POST['me'];
$mms = $_POST['ms'];
$mmt = $_POST['cv'];

// Message Date/Time: ------------------
date_default_timezone_set('America/Los_Angeles');
$mmd = date('m-d-Y.H:i:s');

// Hosting Connection Variables: -------
$hostName='';
$hostData='';
$userName='';
$acctPass='';
$conn=new mysqli($hostName,$userName,$acctPass,$hostData);

// Check Connection: -------------------
if ($conn->connect_error) {die("Database connection has failed: " . $conn->connect_error);}

// SQL String: -------------------------
$sqlS = "insert into table (Name, Company, Email, Subject, Message, Date) VALUES
('$mmn', '$mmc', '$mme', '$mms', '$mmt', '$mmd')";

// Execute String: ---------------------
if(mysqli_query($conn, $sqlS)){

// View Results: -----------------------
$css = "../_css/rwebiStyle-Light-c61.css";
$jss = "../_jss/rwebiEngine-LightCore-c61.js";
echo "<html lang='en'><head></head><body>";
echo "<link id='csl' rel='stylesheet' href='../_css/rwebiStyle-Light-c61.css' media='(prefers-color-scheme: light)'>";
echo "<link id='csd' rel='stylesheet' href='../_css/rwebiStyle-Dark-c61.css' media='(prefers-color-scheme: dark)'>";
echo "<script src='" . $jss . "'></script>";
echo "</head><body onload='nFlex();'>";

echo "<!-- Module Header: -->";
echo "<div id='mHeader' class='sh0' style='width:97vw;min-width:320px;'><span onclick='mReset();' title='Reload Module'><img src='../_ico/favicon.png' class='ibtn'></span>&nbsp;<div class='mTitle'>Contact</div></div>";

echo "<!-- Content Container / Content View: -->";
echo "<div id='cc' class='sh9 em13' style='width:93vw;min-width:320px;'><p>Thank you for contacting rwebi!</p><p>We have received your message and truly appreciate you taking the time to connect with us during our beta phase. User contributions and comments are the heartbeat of our development process. Your feedback helps us identify what’s working and what we can do better to serve you.</p><p>I will be in touch shortly! - <span class='em11 bc'><a href='mailto:rweckert@gmail.com'>Robert W. Eckert</a></span></p>";

echo "<!-- Applications List -->";
echo "<div id='mListing' onclick='eHid('oView');' style='width:98%;text-align:center;min-width:240px;'>";

echo "<div class='api'><a href='../Apps/rwebiApp-SearchPanel-c61.html' class='abs' title='Search Panel style='margin-bottom:3px;'><img src='../_ica/app-search-panel.png' width='70px'></a><br><a href='../Apps/rwebiApp-SearchPanel-c61.html' class='apn'>Search<br>Panel</a></div>";

echo "<div class='api'><a href='../Apps/rwebiApp-Desktop-c61.html' class='abs' title='rwebi Desktop' style='margin-bottom:3px;'><img src='../_ica/app-desktop.png' width='70px'></a><br><a href='../Apps/rwebiApp-Desktop-c61.html' class='apn'>rwebi<br>Desktop</a></div>";

echo "<div class='api'><a href='../Apps/rwebiApp-ToolPanel-c61.html' class='abs' title='Tool Panel' style='margin-bottom:3px;'><img src='../_ica/app-tool-panel.png' width='70px'></a><br><a href='../Apps/rwebiApp-ToolPanel-c61.html' class='apn'>Tool<br>Panel</a></div>";

echo "<div class='api'><a href='../Apps/rwebiApp-GridStack-c61.html' class='abs' title='Grid Stack' style='margin-bottom:3px;'><img src='../_ica/app-grid-stack.png' width='70px'></a><br><a href='../Apps/rwebiApp-GridStack-c61.html' class='apn'>Grid<br>Stack</a></div></div></div>";

echo "<!-- Variables -->";
echo "<span id='ow' class='hf'>20</span>";
echo "<span id='oh' class='hf'>267</span>";
echo "<span id='ob' class='hf'>0</span>";

echo "<!-- Footer -->";
echo "<div id='mFooter' class='mFooter' style='float:left;margin-top:6px;'><img src='../_ico/favicon.png' style='height:12px;margin-right:3px;margin-top:2px;vertical-align:bottom;'></span>w:<span id='miw' class='oc'></span>&nbsp;h:<span id='mih' class='bc'></span></div></body></html>";
echo "<!-- rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61 -->";}

// rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61
?>
