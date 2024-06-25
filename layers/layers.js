var wms_layers = [];

var format_indiast_0 = new ol.format.GeoJSON();
var features_indiast_0 = format_indiast_0.readFeatures(json_indiast_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indiast_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indiast_0.addFeatures(features_indiast_0);
var lyr_indiast_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indiast_0, 
                style: style_indiast_0,
                popuplayertitle: "india st",
                interactive: true,
                title: '<img src="styles/legend/indiast_0.png" /> india st'
            });

lyr_indiast_0.setVisible(true);
var layersList = [lyr_indiast_0];
lyr_indiast_0.set('fieldAliases', {'STATE': 'STATE', });
lyr_indiast_0.set('fieldImages', {'STATE': '', });
lyr_indiast_0.set('fieldLabels', {'STATE': 'no label', });
lyr_indiast_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});