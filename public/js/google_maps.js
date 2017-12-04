function initMap() {
   var slt = {lat: 28.5594186, lng: -81.5425058};
   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 10,
     center: slt
   });
   var marker = new google.maps.Marker({
     position: slt,  
      animation: google.maps.Animation.DROP,
     map: map
   });
   var contentString = '<div id="content">'+
 '<div id="siteNotice">'+
 '</div>'+
 '<h1 id="firstHeading" class="firstHeading">Southern Leather & Trim</h1>'+
 '<div id="bodyContent">'+
 '<p><b>Southern Leather & Trim</b> is the leading installer of <b>Katzkin</b>, leather ' +
 'in central Florida. Come see us at our location.</p>'+
 '<p><b>Address</b>: 67 E Geneva Street Ocoee, FL 34761</p>'+
 '<p><b>Phone</b>: (407)-701-4410</p>'+
 '<p>last edited: December 2, 2017.</p>'+
 '</div>'+
 '</div>';

var infowindow = new google.maps.InfoWindow({
content: contentString
});

marker.addListener('click', function() {
infowindow.open(map, marker);
});




   



 }