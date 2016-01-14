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
		$(".darker").show();
		$("#signup-popup").show();
		$(".sign-in-close").show();
	});
	$(".signin").on("click",function() {
		$(".darker").show();
		$("#signin-popup").show();
		$(".sign-in-close").show();
	});
	$(".sign-in-close").on("click",function() {
		$(".darker").hide();
		$("#signin-popup").hide();
		$("#signup-popup").hide();
		$(".sign-in-close").hide();
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

