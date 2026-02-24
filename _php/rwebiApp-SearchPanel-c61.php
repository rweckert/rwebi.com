<?php
//                 _   _  
//   ___ _ _ _ ___| |_|_| Script: rwebiApp-SearchPanel.php
//  |  _| | | | -_| . | | Created: 01/13/2022 Updated: 02/14/2026
//  |_| |_____|___|___|_| rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// Errors - Console Network Tab: -------
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Hosting Connection Variables: -------
$hostName='';
$hostData='';
$userName='';
$acctPass='';
$conn=new mysqli($hostName,$userName,$acctPass,$hostData);

// Check Connection: -------------------
if ($conn->connect_error) {die("Database connection has failed: " . $conn->connect_error);}

// Receive Get via Url: ----------------
$gqs = isset($_GET['qs']) ? $conn->real_escape_string($_GET['qs']) : '';
// SQL String & Query: -----------------
if ($gqs == '') {echo "No data provided for search.";} else {$Tsql = "select * from table where field like '%$gqs%'";
// Execute Query: ----------------------
$result = $conn->query($Tsql);
$rowcount = $result->num_rows;
// View Results: -----------------------
$css = "../_css/rwebiStyle-Light-c61.css";
$jss = "../_jss/rwebiEngine-LightCore-c61.js";
echo "<html lang='en'><head></head><body>";
echo "<link id='csl' rel='stylesheet' href='../_css/rwebiStyle-Light-c61.css' media='(prefers-color-scheme: light)'>";
echo "<link id='csd' rel='stylesheet' href='../_css/rwebiStyle-Dark-c61.css' media='(prefers-color-scheme: dark)'>";
echo "<script src='" . $jss . "'></script>";
echo "</head><body>";
echo "<!--            _   _  ";
echo "  ___ _ _ _ ___| |_|_| Aplha Preview: rwebiApp-SearchPanel-c61.html";
echo " |  _| | | | -_| . | | rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61";
echo " |_| |_____|___|___|_| -->";

echo "<div style='width:100%;max-width:100%;box-sizing:border-box;padding:6px;font-size:1.11em;'>";
echo "<b>Returned Results: </b>" . ($rowcount) . "<br>";

while($row = $result->fetch_assoc()) {
echo "<table style='border-color:#d9d9d9;width:90vw;float:left; border='0' cellspacing='0' cellpadding='0'><tbody><tr><td style='width:34px;text-align:center;vertical-align:middle;'>
<img src='https://www.google.com/s2/favicons?domain=$row[urlAddress]' width='28px' height='28px' style='padding:2px;margin-right:3px;'></td><td><a href='".$row["urlAddress"]."'><b>".$row["urlName"]."</b></a><br><span class='em8' id='l" . $row["urlRID"] . "' name='l" . $row["urlRID"] . "'><a href='" . $row["urlAddress"] . "' class='lbl em11' target='_parent'>" . $row["urlAddress"] . "</a></span></td><td style='width: 40px; text-align: center; vertical-align: middle;'><select id='" . $row["urlRID"] . "' name='" . $row["urlRID"] . "' class='bopt' onchange=\"ResultOpt('" . $row["urlRID"] . "')\" title='Result Options' style='width:18px;height:30px;padding-left:2px;'>
<option value='do'>Result Options</option>
<option value='nt'>Open in New Tab</option>
<option value='ca'>Copy Link Address</option>
<option value='cs'>Copy Search Description&nbsp;&nbsp;</option></select>
</td></tr></tbody></table>
<div style='width:90vw;margin-top:3px;margin-bottom:12px;font-size:1.08em;'>
<span>".$row["urlTitle"]."</span>&nbsp;
<span id='d" . $row["urlRID"] . "' name='d" . $row["urlRID"] . "'>" . $row["urlDescription"] . "</span><br><span>".$row["urlKeywords"]."</span>
<span class='em8 ac'><b>rid:</b></span><span class='em8 oc'>".$row["urlRID"]."</span>&nbsp;
<span class='em8 ac'><b>Type:</b></span><span class='em8 bc'>".$row["urlType"]."</span>&nbsp;
<span class='em8 ac'><b>Category:</b></span><span class='em8 gc'>".$row["urlCategory"]."</span><br></div>";
}}
echo "</div>";
echo "</body></html>";

// Cleanup & Close: --------------------
$conn->close();;
?>
