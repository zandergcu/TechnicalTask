$(document).on("click",".switch", function () {     //For all switches apply this on click function
    
   var switchStatus = $(this).is(":checked");       // Set switch status as a conditional
    
	if (switchStatus == true) {
       status="ON";                 //If checkbox is checked then switch is on / vice versa
    } else {
       status="OFF";
    }   
    

    var rowID;  
    var rowID = $(this).attr("id"); //Set Row ID as selected switch ID
    

    
    console.log('Row ' + rowID + ' has been switched to ' + status + '.'); // Log Results
	
});
