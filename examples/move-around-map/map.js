var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.Stamen({
                layer: 'watercolor'
            })
        })
    ],
    target: 'map',
    view: new ol.View({
        zoom: 6,
        center: ol.proj.fromLonLat([12.5,41.9])
    })
})

var city = document.getElementById("city")
var zoom = document.getElementById("zoom")
var rotate = document.getElementById("rotate")
var lon = document.getElementById("lon")
var lat = document.getElementById("lat")


var updateMap = (e) => {
    let view = e && e.currentTarget || map.getView()
    zoom.value = view.getZoom()
    rotate.value = view.getRotation()
    let center = ol.proj.toLonLat(view.getCenter())
    lon.value = center[0].toFixed(3)
    lat.value = center[1].toFixed(3)
}

updateMap()

map.getView().on([
    'change:center',
    'change:resolution',
    'change:rotation'
],updateMap)

var setCenter = function(lon,lat){
    map.getView()
    .setCenter(
        ol.proj.fromLonLat(
            [
                parseFloat(lon),
                parseFloat(lat)
            ]
        )
    )
}

city.addEventListener('change', function(){
    map.beforeRender(ol.animation.pan({
        source: map.getView().getCenter(),
        duration: 500
    }))
    setCenter.apply(null,this.value.split(','))
})

window.addEventListener('keyup',function(e){
    switch(e.target.id){
        case 'zoom':
            map.beforeRender(ol.animation.zoom({
                resolution: map.getView().getResolution(),
                duration: 500
            }))
            map.getView().setZoom(parseInt(e.target.value))
            break
        case 'rotate':
            map.beforeRender(ol.animation.rotate({
                rotation: map.getView().getRotation(),
                duration: 200
            }))
            map.getView().setRotation(parseFloat(e.target.value||0))
            break
        case 'lon':
            setCenter(e.target.value,lat.value)
            break
        case 'lat':
            setCenter(lon.value,e.target.value)
            break
    }
})
