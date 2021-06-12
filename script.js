let rightNow = moment().format("MMMM Do, YYYY");
console.log(rightNow);

let todayDate = document.querySelector("#currentDay");
todayDate.innerHTML = rightNow

$(document).ready(function(){
    $(".submit").click(function(){
      var value = $(this).siblings(".taskInfo").val()
      var hour = $(this).parent().attr('id')
      localStorage.setItem(hour,value)
      
    });





function hourUpdater () {
    var currentHour = moment().hour();


// each loop jquery class that is shared by all the time blocks
// within the loop you need get the block hour turn it into a data type number
// add or remove a class for THIS

$(".row").each( function( i, val ) {
    console.log(val.children[1])
    var rowHour = parseInt(val.id) 
    if (rowHour < currentHour) {
        $(val.children[1]).addClass("past")
    }
    else if ( rowHour == currentHour) {
        $(val.children[1]).addClass("present")
    }
    else {
        $(val.children[1]).addClass("future")
    }
    
 //   moment(currentHour).toNow('8', 'hour')
 //   moment(currentHour).isBefore('17', 'hour'); // false;
 //  if {

//   }
    // Will stop running after "three"
 //   return ( val !== "17" );
  });
   
//$.each( obj, function( i, val ) {
 //   $( "#" + i ).append( document.style.property( " - " + val ) );
//  });

}

hourUpdater();
(function($){
    
})(jQuery)


$("#8 .taskInfo").val(localStorage.getItem("8"))
$("#9 .taskInfo").val(localStorage.getItem("9"))
$("#10 .taskInfo").val(localStorage.getItem("10"))
$("#11 .taskInfo").val(localStorage.getItem("11"))
$("#12 .taskInfo").val(localStorage.getItem("12"))
$("#13 .taskInfo").val(localStorage.getItem("13"))
$("#14 .taskInfo").val(localStorage.getItem("14"))
$("#15 .taskInfo").val(localStorage.getItem("15"))
$("#16 .taskInfo").val(localStorage.getItem("16"))
$("#17 .taskInfo").val(localStorage.getItem("17"))






  });