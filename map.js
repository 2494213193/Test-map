var map;

function initialize() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(33.462873,132.423387), 11);

    GEvent.addListener(map, "click", clickAction);
  }
}

function clickAction(overlay, latlng, overlaylatlng){
  map.addOverlay(new GMarker(latlng));
}
