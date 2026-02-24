<?php
//                 _   _  
//   ___ _ _ _ ___| |_|_| Script: rwebiModule-Speculus.php
//  |  _| | | | -_| . | | Created: 01/13/2022 Updated: 02/21/2026
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
$gri = isset($_GET['ri']) ? $_GET['ri'] : '';
// SQL String & Query: -----------------
if ($gri == '') {echo "No ID provided.";} else {$Tsql = "select field,field,field,field,field,field,field,field,field,field,field from table where rid = '" . $conn->real_escape_string($gri) . "' LIMIT 1";
// Execute Query: ----------------------
$result = $conn->query($Tsql);
// View Results: -----------------------
if ($result && $row = $result->fetch_assoc()) {
echo "<div style='width:98%'><div class='sh3' style='margin-top:12px;margin-left:3px;'><label for='uAddress' class='em12 lb90'>Address</label><input type='text' id='uAddress' name='uAddress' style='width:80%;font-size:1.13em;height:27px;margin-left:3px;' onfocus='this.select();' value='".$row["urlAddress"]."' placeholder='https://www.examplesite.com'></div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uTitle' class='em12 lb90'>Title</label><textarea id='uName' name='uName' style='height:40px;width:80%;vertical-align:top;margin-left:3px;' placeholder='Name of website.' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='on'>" . $row["urlName"] . "</textarea>
</div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uType' class='em12 lb90'>Type</label><input type='text' id='uType' name='uType' style='width:80%;font-size:1.13em;height:27px;margin-left:3px;' onfocus='this.select();' value='" . $row["urlType"] . "' placeholder='Genre or designation type.'></div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uCategory' class='em12 lb90'>Category</label><input type='text' id='uCategory' name='uCategory' style='width:80%;font-size:1.13em;height:27px;margin-left:3px;' onfocus='this.select();' value='" . $row["urlCategory"] . "' placeholder='Specification of type.'></div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uDescription' class='em12 lb90'>Description</label><textarea id='uDescription' name='uDescription' style='height:60px;width:80%;vertical-align:top;margin-left:3px;' placeholder='Descriptions are one to three short sentences.' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='on'>" . $row["urlDescription"] . "</textarea>
</div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uKeywords' class='em12 lb90'>Keywords</label><textarea id='uKeywords' name='uKeywords' style='height:40px;width:80%;vertical-align:top;margin-left:3px;' placeholder='All keywords are seperated by a comma.' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='on'>" . $row["urlKeywords"] . "</textarea>
</div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uNotes' class='em12 lb90'>Notes</label><textarea id='uNotes' name='uNotes' style='height:40px;width:80%;vertical-align:top;margin-left:3px;' placeholder='Comments pertaining to the site.' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='on'>" . $row["urlNotes"] . "</textarea>
</div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uCreated' class='em12 lb90'>Created</label><input type='text' id='uCreated' name='uCreated' style='width:180px;font-size:1.13em;height:27px;margin-left:3px;' onfocus='this.select();' value='" . $row["urlCreated"] . "' placeholder='00/00/0000'></div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uUpdated' class='em12 lb90'>Updated</label><input type='text' id='uUpdated' name='uUpdated' style='width:180px;font-size:1.13em;height:27px;margin-left:3px;' onfocus='this.select();' value='" . $row["urlUpdated"] . "' placeholder='00/00/0000'></div>";

echo "<div class='sh0' style='margin-top:6px;margin-left:3px;'><label for='uStatus' class='em12 lb90'>Status</label><input type='text' id='uStatus' name='uStatus' style='width:50%;font-size:1.13em;height:27px;margin-left:3px;' onfocus='this.select();' value='" . $row["urlStatus"] . "' placeholder='Classification status of record.'></div><br><br>";

} else {echo "<div class='sh0' style='margin-top:6px;margin-left:9px;width:80%;font-size:1.13em;'><p>
<img src='../_ico/dialog-warning.png' style='width:12px;'> No search entry found for RID# " . $gri . ".<p>Please double check the RID number of the search entry to view and try again. At times newer entries that have been added within the last 24 hours but do not meet the status requirements are deleted.</div></div>";}}

$conn->close();
?>
