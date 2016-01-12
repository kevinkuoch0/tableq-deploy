// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require faye


$(document).ready(function() {
	$("#flash").fadeOut(1800);
	$(".signup").on("click",function() {
		$("#signup-popup").show();
	});
	$(".signin").on("click",function() {
		$("#signin-popup").show();
	});

	$(".table").on("click",function() {
    var isSelected = $(this).hasClass("selected");

    // Reset to empty state
    $("#reservation_table").val("");
    $(".table").removeClass("selected");

    // Select this if it was not selected before
    if(!isSelected){
      $(this).addClass("selected");
      $("#reservation_table").val($(this).data('table'))
    }
	});

});

$( document ).ajaxComplete(function() {
	if ($(".top-right-booth").show() == true){
		$(".top-right-booth-saved").show();
	};
});


function renderRestaurantInfo(restaurant){
  return (
    "<h2>"+restaurant.title+"</h2>" +
    "<a href='/reservations/index'>Make a Reservation</a>"
  );  
}

function addMarkerToMap(restaurant,map){
  var marker = new google.maps.Marker({
    position: {lat: restaurant.lat, lng: restaurant.lng},
    map: map,
    title: restaurant.title
  }); 

  var infowindow = new google.maps.InfoWindow({
    content: renderRestaurantInfo(restaurant)
  }); 

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  }); 
}

function initMap(){
	var initialLocation = {lat: 39.9522334, lng: -75.1694917 };

	var map = new google.maps.Map(document.getElementById('map'), {
		center: initialLocation,
		zoom: 15
	}); 

	var restaurant = { 
		title: 'My Restaurant',
		lat: 39.9522334,
		lng: -75.1694917
	}
	addMarkerToMap(restaurant,map);
};

