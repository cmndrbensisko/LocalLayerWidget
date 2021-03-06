//
// Transformer functions within this file should return a valid Feature Collection Object
// as specified in https://developers.arcgis.com/javascript/3/jsapi/featurelayer.html#featurelayer2
//  {
//    "layerDefinition": {
//      "geometryType": geomType,
//      "fields": defFields
//    },
//    "featureSet": featureSet
//  }
//
// Additionally, popups will need to be manually specified for these layers in the LocalLayer Configuration file under /configs
// using a syntax smilar to the following (https://developers.arcgis.com/javascript/3/jshelp/intro_popuptemplate.html):
//  "popup": {
//    "title": "{street}",
//    "fieldInfos": [
//        {
//          "fieldName": "comments",
//          "label": "comments",
//          "visible": true
//        },
//        {
//          "fieldName": "street",
//          "label": "street",
//          "visible": true
//        }
//      ],
//      "description": "{comments}",
//      "showAttachments": false,
//      "tr": null
//    }
//
define(['dojo/_base/declare',
  'dojo/Deferred',
  'dojo/request/xhr'
], function(
  declare, Deferred, xhr) {
    return declare(null, {
      // Ottawa Functions	
	  startup: function(config, lOptions){
        var deferred = new Deferred();
        xhr("widgets/LocalLayer/transformerData/climateStations.json",{
          handleAs: "json"
        }).then(function(data){
          deferred.resolve(new esri.layers.FeatureLayer({layerDefinition: { 
            "objectIdField": data.objectIdFieldName,
            "geometryType":data.geometryType,
            "fields": data.fields
          },
          featureSet:data}))
        })
        return deferred
	  }
    })
})