/*Add google map into contactUs page*/
function initMap() {
  var senecaMap = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 43.795892, lng: -79.348653 },
    zoom: 15
  });
}
