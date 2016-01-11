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

	$(".top-right-booth-empty").on("click",function() {
		$(".top-right-booth").show();
		$(".top-right-booth").on("click",function() {
			$(".top-right-booth").hide();
		});
	});


	$(".top-left-booth-empty").on("click",function() {
		$(".top-left-booth").show();
		$(".top-left-booth").on("click",function() {
			$(".top-left-booth").hide();
		});
	});

	$(".diagonal-upper-left-booth-empty").on("click",function() {
		$(".diagonal-upper-left-booth").show();
		$(".diagonal-upper-left-booth").on("click",function() {
			$(".diagonal-upper-left-booth").hide();
		});
	});		

	$(".left-booth-empty").on("click",function() {
		$(".left-booth").show();
		$(".left-booth").on("click",function() {
			$(".left-booth").hide();
		});
	});

	$(".diagonal-bottom-left-booth-empty").on("click",function() {
		$(".diagonal-bottom-left-booth").show();
		$(".diagonal-bottom-left-booth").on("click",function() {
			$(".diagonal-bottom-left-booth").hide();
		});
	});

	$(".bottom-left-booth-empty").on("click",function() {
		$(".bottom-left-booth").show();
		$(".bottom-left-booth").on("click",function() {
			$(".bottom-left-booth").hide();
		});
	});

	$(".bottom-right-booth-empty").on("click",function() {
		$(".bottom-right-booth").show();
		$(".bottom-right-booth").on("click",function() {
			$(".bottom-right-booth").hide();
		});
	});

	$(".round-table-left-bottom-empty").on("click",function() {
		$(".round-table-left-bottom").show();
		$(".round-table-left-bottom").on("click",function() {
			$(".round-table-left-bottom").hide();
		});	
	});

	$(".round-table-left-top-empty").on("click",function() {
		$(".round-table-left-top").show();
		$(".round-table-left-top").on("click",function() {
			$(".round-table-left-top").hide();
		});	
	});

	$(".round-table-middle-top-left-empty").on("click",function() {
		$(".round-table-middle-top-left").show();
		$(".round-table-middle-top-left").on("click",function() {
			$(".round-table-middle-top-left").hide();
		});	
	});

	$(".round-table-middle-top-middle-empty").on("click",function() {
		$(".round-table-middle-top-middle").show();
		$(".round-table-middle-top-middle").on("click",function() {
			$(".round-table-middle-top-middle").hide();
		});	
	});

	$(".round-table-middle-top-right-empty").on("click",function() {
		$(".round-table-middle-top-right").show();
		$(".round-table-middle-top-right").on("click",function() {
			$(".round-table-middle-top-right").hide();
		});	
	});

	$(".round-table-middle-bottom-left-empty").on("click",function() {
		$(".round-table-middle-bottom-left").show();
		$(".round-table-middle-bottom-left").on("click",function() {
			$(".round-table-middle-bottom-left").hide();
		});	
	});	

	$(".round-table-middle-bottom-middle-empty").on("click",function() {
		$(".round-table-middle-bottom-middle").show();
		$(".round-table-middle-bottom-middle").on("click",function() {
			$(".round-table-middle-bottom-middle").hide();
		});	
	});

	$(".round-table-middle-bottom-right-empty").on("click",function() {
		$(".round-table-middle-bottom-right").show();
		$(".round-table-middle-bottom-right").on("click",function() {
			$(".round-table-middle-bottom-right").hide();
		});			
	});

	$(".top-right-booth-empty").on("click",function() {
		$("#reservation_table").val("A1");	
	});

	$(".top-left-booth-empty").on("click",function() {
		$("#reservation_table").val("A2");	
	});

	$(".diagonal-upper-left-booth-empty").on("click",function() {
		$("#reservation_table").val("A3");	
	});

	$(".left-booth-empty").on("click",function() {
		$("#reservation_table").val("A4");	
	});

	$(".diagonal-bottom-left-booth-empty").on("click",function() {
		$("#reservation_table").val("A5");	
	});

	$(".bottom-left-booth-empty").on("click",function() {
		$("#reservation_table").val("A6");	
	});

	$(".bottom-right-booth-empty").on("click",function() {
		$("#reservation_table").val("A7");	
	});

	$(".round-table-left-bottom-empty").on("click",function() {
		$("#reservation_table").val("B1");	
	});

	$(".round-table-left-top-empty").on("click",function() {
		$("#reservation_table").val("B2");	
	});	

	$(".round-table-middle-top-left-empty").on("click",function() {
		$("#reservation_table").val("B3");	
	});	

	$(".round-table-middle-top-middle-empty").on("click",function() {
		$("#reservation_table").val("B4");	
	});	

	$(".round-table-middle-top-right-empty").on("click",function() {
		$("#reservation_table").val("B5");	
	});	

	$(".round-table-middle-bottom-left-empty").on("click",function() {
		$("#reservation_table").val("B6");	
	});	

	$(".round-table-middle-bottom-middle-empty").on("click",function() {
		$("#reservation_table").val("B7");	
	});	

	$(".round-table-middle-bottom-right-empty").on("click",function() {
		$("#reservation_table").val("B8");	
	});		
	
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