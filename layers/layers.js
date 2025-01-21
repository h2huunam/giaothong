var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BGD2025_1 = new ol.format.GeoJSON();
var features_BGD2025_1 = format_BGD2025_1.readFeatures(json_BGD2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BGD2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BGD2025_1.addFeatures(features_BGD2025_1);
var lyr_BGD2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BGD2025_1, 
                style: style_BGD2025_1,
                popuplayertitle: 'BGD2025',
                interactive: true,
                title: '<img src="styles/legend/BGD2025_1.png" /> BGD2025'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_BGD2025_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BGD2025_1];
lyr_BGD2025_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BGD_2023': 'BGD_2023', 'TenDuong': 'TenDuong', 'Huyen': 'Huyen', 'LoaiDuong': 'LoaiDuong', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Code': 'Code', 'TenDuong_B': 'TenDuong_B', 'DiemDau': 'DiemDau', 'DiemCuoi': 'DiemCuoi', 'STTDoan': 'STTDoan', });
lyr_BGD2025_1.set('fieldImages', {'OBJECTID': 'Range', 'BGD_2023': 'Range', 'TenDuong': 'TextEdit', 'Huyen': 'TextEdit', 'LoaiDuong': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Code': 'TextEdit', 'TenDuong_B': 'TextEdit', 'DiemDau': 'TextEdit', 'DiemCuoi': 'TextEdit', 'STTDoan': 'TextEdit', });
lyr_BGD2025_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'BGD_2023': 'hidden field', 'TenDuong': 'inline label - always visible', 'Huyen': 'inline label - always visible', 'LoaiDuong': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Code': 'hidden field', 'TenDuong_B': 'inline label - always visible', 'DiemDau': 'inline label - always visible', 'DiemCuoi': 'inline label - always visible', 'STTDoan': 'hidden field', });
lyr_BGD2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});