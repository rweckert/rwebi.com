<?php
//                 _   _  
//   ___ _ _ _ ___| |_|_| Script: rwebiModule-QuickSearch.php
//  |  _| | | | -_| . | | Created: 01/13/2022 Updated: 02/21/2026
//  |_| |_____|___|___|_| rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61

// SQL String & Query: -----------------
$sqlS=htmlspecialchars($_POST['qs']);
$sqlQ="select * from table where field like '%" . $sqlS . "%'";

// Hosting Connection Variables: -------
$hostName='';
$hostData='';
$userName='';
$acctPass='';
$conn=new mysqli($hostName,$userName,$acctPass,$hostData);

// Check Connection: -------------------
if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);}

// Execute Query: ----------------------
$result = $conn->query($sqlQ);
$rowcount = mysqli_num_rows($result);

// View Results: -----------------------
$css = "../_css/rwebiStyle-Light-c61.css";
echo "<!doctype html><html lang='en'><head>";
echo "<link rel='stylesheet' href='" . $css . "'>";
echo "</head><body><form name='forminput'>";

echo "<div style='margin:6px;'>";
echo "<b>Returned Results: </b> " . ($rowcount) . "<br><b>Search Phrase: </b>" . $sqlS . "<br><br>";

foreach($result as $row) {
echo "<span class='tcw'><img src='https://www.google.com/s2/favicons?domain=$row[urlAddress]' width='16px' height='16px'>&nbsp;<b>".$row["urlName"]."</b></span>
<a href='".$row["urlAddress"]."' id='".$row["urlRID"]."' class='lrl' target='_parent'>".$row["urlAddress"]."</a>
<a href='".$row["urlAddress"]."' id='".$row["urlRID"]."' class='lrl' target='_parent'>".$row["urlAddress"]."</a>
<a href=# onclick='eCopy(\"v\",\"".$row["urlRID"]."\");' title='Copy Address'><img src='../_ict/expand.png'></a>
<a href='".$row["urlAddress"]."' target='_blank' title='View in new tab'><img src='../_ict/cog.png'></a>
<span class='tyl'>".$row["urlTitle"]."</span>&nbsp;
<span class='tam'>".$row["urlDescription"]."</span>&nbsp;
<span class='twd'>".$row["urlKeywords"]."</span><div style='font-size:9px'>
<span class='tcl'><b>Type:</b></span><span class='tsl'>&nbsp;".$row["urlType"]."</span>&nbsp;
<span class='tcd'><b>Category:</b></span><span class='tlm'>&nbsp;".$row["urlCategory"]."</span>&nbsp;
<span class='tgl'><b>Created:</b>&nbsp;</span><span class='tym'> ".$row["urlCreated"]."</span>&nbsp;
<span class='tcl'><b>Updated:</b>&nbsp;</span><span class='tbm'&nbsp;> ".$row["urlUpdated"]."</span>&nbsp;
<span class='tol'><b>rid:</b></span>&nbsp;<span class='trl'>&nbsp;".$row["urlRID"]."</span></div><br>";}

echo "</div></body></html>
<!-- rwebi.com | rwebi.org | rwebi.net | 2026 Calyptus-61 -->";

// Cleanup & Close: --------------------
mysqli_free_result($result);
mysqli_close($conn);
?>
