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
    target: 'map',
    controls: []
})

var zoomControl = new ol.control.Zoom({
    zoomInTipLabel: 'Zoom in',
    zoomOutTipLabel: 'Zoom out',
    className: 'ol-zoom custom-zoom-control'
});

var attributionControl = new ol.control.Attribution({
    collapsible: false,
    collapsed: false
});

var rotateControl = new ol.control.Rotate({
    autoHide: false
})

map.addControl(zoomControl)
map.addControl(attributionControl)
map.addControl(rotateControl)

$("#controls").on('change',(e) =>{
    var target = $(e.target)
    var control = target.val()
    if(target.prop('checked')){
        map.addControl(window[control])
    }else{
        map.removeControl(window[control])
    }
})