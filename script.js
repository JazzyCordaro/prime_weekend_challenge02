console.log('script.js source');


var searchPerson = [];
$(document).ready(function() {
  console.log('work work work work work');

  $('#searchButton').on('click', function(){
    console.log('in searchButton on click');
    if($('#nameIn').val()== ''){
      alert('no leave blank');
    }else {
        var studentName = $( '#nameIn' ).val();
        console.log('searching for:', studentName);
      }
  })
});


    var searchURL = 'https://github.com/devjanaprime/2.4-jQueryAjaxJSON/blob/master/scripts/getJsonExample.js';
    console.log( 'searchURL:', searchURL );

    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function(data){
        console.log('ajax successs data:', data.Search);
      searchPerson = data.Search;
        console.log('searchPerson:', searchPerson);
      for (var i = 0; i < searchPerson.length; i++) {
        $('#outputDiv').append('<p>' + searchPerson[i].firstName + '' + searchName[i].lastName + '' + searchName[i].info + '</p>');
        document.getElementById('nameIn').value = '';
        searchPerson[i]
        }
      }
    });
