var app = app || {};

app.init = function () {

	app.sample();

}

app.sample = function() {

	return true;

}


$(function() {

	app.init();

});

// ===== HEAD SLIDER =====
$(function() {
    $(".rslides").responsiveSlides();
  });

  $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

// ===== GOOGLE MAP =====
var myCenter=new google.maps.LatLng(10.895465, 106.634862);

function initialize()
{
var mapProp = {
  center: myCenter,
  zoom:15,
  mapTypeId: google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap1"),mapProp);
var map = new google.maps.Map(document.getElementById("googleMap2"),mapProp);

var marker = new google.maps.Marker({
  position: myCenter,
  title:'Click to zoom',
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
var infowindow = new google.maps.InfoWindow({
  content:"FASTCODING"
  });

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
  });

// Zoom to 9 when clicking on marker
google.maps.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

///////////////////////////////////////////////////////////////////

//=============== SLIDER =================

