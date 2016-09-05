console.log('work work work work work ');

var studentInformation=[];

var jsonURl = 'http://devjana.net/pi/pi_students.json';

$(document).ready(function(){
  console.log('plz');
  $.ajax({
    url: jsonURl,
    dataType: 'JSON',
    success: function(data){
    console.log('plz be successful:', data.students);
  displayStudents(data.students);
  }
  });

	$("#outputDiv").hide();
	$("#buttons").click(function(){
		console.log("button clicked");
	$("#outputDiv").show();
	});
});


var displayStudents=function(studentInformation){
  console.log('in displayStudents:', displayStudents);
  var outputDiv=$('#outputDiv');
 for(var i = 0; i < studentInformation.length; i++) {
 outputDiv.html('<p>' + studentInformation[i].first_name +
 ' ' + studentInformation[i].last_name + ' ' + studentInformation[i].info +
  '</p>');
console.log('displayStudents');
  }
}
