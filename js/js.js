
var Switches = document.getElementsByClassName("switch");   // Get switches in an array like object

for (var i = 0; i < Switches.length; i++) {

    Switches[i].addEventListener('click', logInfo);     // Add an event listener to each one that calls log info function
}


function logInfo() {
    
    // TO DO: Check ID of parent TR and store as variable X
    
    // TO DO: Check new status of switch and store as variable Y
        //If checked status = ON , Else OFF


    // Log Info to console
    console.log('Row ' + 'X' + ' has been switched to ' + 'Y' + '.');    //Log Info to Console
    
};


// The final plan may change from the comment guide I have typed