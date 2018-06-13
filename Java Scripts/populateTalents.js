// This will populate the talents with current player talents from the automated input results.


function populateTalents() {
    var j;
    for (j=0; j<45; j++){
        var eleID = cruData.talents[j].talentID;
        var eleVal = cruData.talents[j].talentCurrentLevel;
        document.getElementById(eleID).innerHTML = eleVal;
    }
    
}