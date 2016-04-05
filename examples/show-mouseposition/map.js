var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
})

var mousePosition = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(2),
    projection: 'EPSG:4326'
})

map.addControl(mousePosition)

var view = new ol.View({
    zoom: 6,
    projection: 'EPSG:3857',
    center: ol.proj.transform([106.1,35.0],'EPSG:4326','EPSG:3857')
})

map.setView(view);
map.setTarget('map')