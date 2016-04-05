var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'sat'
            }),
            opacity: 0.5,
            zIndex: 1
        })
    ],
    view: new ol.View({
        zoom: 4,
        center: ol.proj.fromLonLat([106.1,35.0])
    }),
    target: 'map'
})

var layerGroup = new ol.layer.Group({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'osm'
            }),
            title: 'MapQuest OSM'
        }),
        new ol.layer.Tile({
            source: new ol.source.MapQuest({
                layer: 'hyb'
            }),
            title: 'HyBird',
            visible: false
        }),
        new ol.layer.Tile({
            source: new ol.source.OSM(),
            title: 'OSM',
            visible: false
        }),
    ],
    zIndex: 0
});

map.addLayer(layerGroup)

var $layersList = $('#layers')
layerGroup.getLayers().forEach( (ele) => {
    let $li = $('<li/>')
    $li.text(ele.get('title'))
    $layersList.append($li);
})

$layersList.sortable({
    update: () => {
        let topLayer = $layersList.find('li:first-child').text();
        layerGroup.getLayers().forEach((ele) => {
            ele.setVisible(ele.get('title') === topLayer)
        })
    }
})
