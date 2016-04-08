var extent = ol.proj.transformExtent(
    [113.5,22.3,114.5,22.8],
    'EPSG:4326',
    'EPSG:3857'
)

var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            extent: extent
        })
    ],
    target: 'map',
    view: new ol.View({
        zoom: 6,
        minZoom: 5,
        center: ol.proj.fromLonLat([114.05,22.55]),
        extent: extent
    })
})