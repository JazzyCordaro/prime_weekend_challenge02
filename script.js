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
  console.log('in displayStudents:',  studentInformation);
  var outputDiv=$('#outputDiv');
 for(var i = 0; i < studentInformation.length; i++) {
 outputDiv.html('<p>' + studentInformation[i].first_name +
 // ' ' + studentInformation[i].last_name + ' ' + studentInformation[i].info +
  '</p>');
console.log('displayStudents');
  }
}











































// console.log('script.js source');
//
//
// window.onload = function() {
//     // all of your code goes in here
//     // it runs after the DOM is built
//
// var studentInfo=[];
//
// $( document ).on( 'click', '#addStudent', function(){
//   console.log( 'addStudent on click' );
//
// studentInfo.push( addStudent );
// showStudent();
// });
//
//
// $(document).ready(function() {
//   $("#outputDiv").hide();
//   $(".btn").click(function(){
//     console.log("button clicked");
//   $("#outputDiv").show();
//   $( "#outputDiv" ).data();
//
//   $.ajax({
//     url: 'http://devjana.net/pi/pi_students.json',
//     dataType: 'json',
//     success: function( data ){
//        console.log( 'YAS!:', data.students );
//     displayStudents(data.students);
//       }
//     });
//   });
// });
//
//
//   var displayStudents = function (studentInfo){
//     console.log('in displayStudents:', studentInfo);
//     var outputDiv= $('#outputDiv');
//     outputDiv.empty();
//     for (var i = 0; i < studentInfo.length; i++) {
//       outputDiv.append('<p>' + studentInfo[i].first_name + ' ' + studentInfo[i].last_name + ' ' + studentInfo[i].info + '</p>');
//
//   document.getElementById("outputDiv").innerHTML;
//  // $('#outputDiv').empty('students');
//     }
//   };
// }



  // $(document).ready(function() {
  // 	$("#outputDiv").hide();
  // 	$(".btn").click(function(){
  // 		console.log("button clicked");
  // 	$("#outputDiv").show();
  //   $( "#outputDiv" ).data();
  //
  // 	});
  // });

























// console.log('script.js source');
//
// var displayStudents=function(){
//   console.log('work plz');
// }
//
// displayStudents();
//
// var searchPerson = [];
// $(document).ready(function() {
//   console.log('work work work work work');
//
//   $('#searchButton').on('click', function(){
//     console.log('in searchButton on click');
//     if($('#nameIn').val()== ''){
//       alert('no leave blank');
//     }else {
//         var studentName = $( '#nameIn' ).val();
//         console.log('searching for:', studentName);
//       }
//   })
// });
//
//
//     var searchURL = 'http://devjana.net/pi/pi_students.json';
//     console.log( 'searchURL:', searchURL );
//
//
//
//     $.ajax({
//       url: searchURL,
//       dataType: 'JSON',
//       success: function(data){
//         console.log('ajax successs data:', data.Search);
//         displayStudents(data.search);
//
//       searchPerson = data.Search;
//         console.log('searchPerson:', searchPerson);
//       for (var i = 0; i < searchPerson.length; i++) {
//         $('#outputDiv').append('<p>' + searchPerson[i].firstName + '' + searchName[i].lastName + '' + searchName[i].info + '</p>');
//         document.getElementById('nameIn').value('');
//         console.log('nameIn');
//         // searchPerson[i]
//         $( ".searchPerson" ).append( "<p>Test</p>" );
//
//         }
//       }
//     });
