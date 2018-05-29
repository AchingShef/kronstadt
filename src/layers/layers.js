import L from "leaflet";

export default [
    {
        name: 'topp',
        opacity: 1,
        enabled: true,
        layer: L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/topp/wms?service=WMS&request=GetMap', {
            version: '1.1.1',
            layers: 'topp:states',
            opacity: 1
        })
    },
    {
        name: 'tracts',
        opacity: 1,
        enabled: true,
        layer: L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/opengeo/wms?service=WMS&request=GetMap', {
            version: '1.1.1',
            layers: 'opengeo:tracts',
            opacity: 1
        })
    },
    {
        name: 'usa',
        opacity: 1,
        enabled: true,
        layer: L.tileLayer.wms('https://demo.boundlessgeo.com/geoserver/usa/wms?service=WMS&request=GetMap', {
            version: '1.1.1',
            layers: 'usa:states',
            opacity: 1
        })
    }
];