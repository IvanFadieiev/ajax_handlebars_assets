// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require handlebars.runtime
//= require_tree ./templates

// $(document).ready(function(){
// 	  $( "#new_user" ).submit(function( event ) {
// 	  console.log('ads');
// 	  alert( "Handler for .submit() called." );
// 	  event.preventDefault();
// 	});

// 	$( "#user_name" ).change(function() {
// 	  alert( "Handler for .change() called." );
// 	});
// });

// $(document).ready(function(){
// 	$("#new_user").submit(function(event){
// 		event.preventDefault();
// 		var name = $("#user_name").val();
// 		console.log(name);
// 		$.ajax({
// 			url: $(this).attr('action')
//       		method: 'POST',
//       		data: $(this).serialize(),
//       		success: function(data){
//       			console.log('asd');
//       		};
// 		});
// 	});
// });


$(document).ready(function () {
  $('#new_user').submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      success: function (data) {

      	console.log(data.user);
			var template = function(value) {
			  return HandlebarsTemplates['users/show'](
			    {
			      data: value,
			      name: value.user.name,
			      show_delete:  '/users/' + value.user.id,
			      edit:  '/users/' + value.user.id + 'edit'
			    }
			  );
			};
			$("#user_name").val("");
			console.log(template(data));
		$("tbody").append(template(data));	
      },
      error: function (data) {
        console.log(data);
      }
    });
  });
});





