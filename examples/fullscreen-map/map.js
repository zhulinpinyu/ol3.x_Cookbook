var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        zoom: 6,
        center: ol.proj.fromLonLat([106.1,35.0])
    }),
    controls: ol.control.defaults().extend([
        new ol.control.FullScreen()
    ]),
    target: 'map'
})