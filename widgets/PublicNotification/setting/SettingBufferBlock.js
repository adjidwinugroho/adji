// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang ./settingComponents ./SettingInputWithDropdownLabeled ./SettingObject ./SettingOptionsTable ./SettingStaticText".split(" "),function(c,d,f,g,e,h,k){return c(e,{_inputControlDistance:null,_inputControlTable:null,_defaultConfig:{bufferDistance:100,bufferUnits:"FEET",bufferUnitsMenu:"10100 FEET YARDS METERS KILOMETERS MILES".split(" ")},constructor:function(a,b,c,d,e,l,m,n,p){a=[];this._defaultConfig=l;this._inputControlDistance=new g(null,!0,"full-width",d,
e,m,n,p,null,"","",this._createLargeDistanceUnitsDropdownItemsList(),{min:0});a.push(this._inputControlDistance.div());this._inputControlTable=new h("bufferUnitsMenu","details-value","",b.propertyLabels.units,null,b.hints.selectionListOfOptionsToDisplay);a.push(f.container("full-width flexbox","minorTrailingHorizGap",[(new k(null,"details-label static-text",b.propertyLabels.bufferUnits)).div(),this._inputControlTable.div()]));this._mainDiv=f.container(c||"","majorTrailingVertGap",a)},setValue:function(a){this._inputControl&&
this._inputControl.set("value",a)},setConfig:function(){d.mixin({},this._defaultConfig,this._config);this._inputControlDistance&&this._inputControlTable&&(this._inputControlDistance.setValue(this._config.bufferDistance),this._inputControlDistance.setModifier(this._config.bufferUnits),this._inputControlTable.setConfig(this._config))},getConfig:function(a,b){this._inputControlDistance&&this._inputControlTable&&(this._config.bufferDistance=this._inputControlDistance.getValue(),this._config.bufferUnits=
this._inputControlDistance.getModifier(),this._inputControlTable.getConfig(this._config))},_createLargeDistanceUnitsDropdownItemsList:function(){return[{label:jimuNls.units.feet,value:"FEET"},{label:jimuNls.units.yards,value:"YARDS"},{label:jimuNls.units.meters,value:"METERS"},{label:jimuNls.units.kilometers,value:"KILOMETERS"},{label:jimuNls.units.miles,value:"MILES"}]}})});