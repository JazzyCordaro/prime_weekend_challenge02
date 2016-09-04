console.log('script.js source');

var studentInfo=[];

$( document ).on( 'click', '#addStudent', function(){
  console.log( 'addStudent on click' );

studentInfo.push( addStudent );
showStudent();
});

$.ajax({
  url: 'http://devjana.net/pi/pi_students.json',
  dataType: 'json',
  success: function( data ){
     console.log( 'YAS!:', data.students );
     displayStudents(data.students);
       }
  });

  var displayStudents = function (studentInfo){
    console.log('in displayStudents:', studentInfo);
    var outputDiv=$('#outputDiv');
    outputDiv.empty();
    for (var i = 0; i < studentInfo.length; i++) {
      outputDiv.append('<p>' + studentInfo[i].first_name + ' ' + studentInfo[i].last_name + ' ' + studentInfo[i].info + '</p>');

 // $('#outputDiv').empty('students');
    }
  };

  $(document).ready(function() {
  	$("#outputDiv").hide();
  	$(".btn").click(function(){
  		console.log("button clicked");
  	$("#outputDiv").show();
    $( "#outputDiv" ).data();

  	});
  });

























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
