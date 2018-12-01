// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Stateful dojo/Deferred esri/geometry/Point esri/SpatialReference esri/geometry/webMercatorUtils jimu/dijit/Message ./util ./dialogConfirm ./ConfirmNotation".split(" "),function(u,x,g,y,z,v,w,A,B,C,D,E){return u([y],{formatPrefix:!1,_formatPrefixSetter:function(a){this.formatPrefix=a},inputString:null,_inputStringSetter:function(a){this.inputString=a},formatString:"YN XE",_formatStringSetter:function(a){this.formatString=a},inputType:"UNKNOWN",
formatType:"DD",_formatTypeSetter:function(a){this.formatType=a;this.getFormattedValue()},outputString:"",coordinateEsriGeometry:null,_coordinateEsriGeometrySetter:function(a){null!==a&&(this.coordinateEsriGeometry=a=4326!==a.spatialReference.wkid?A.webMercatorToGeographic(a):a,this.getFormattedValue())},constructor:function(a){u.safeMixin(this,a);this.util=new C(a)},getInputType:function(){this.inputTypeDef=new z;var a=this.util.getCleanInput(this.inputString);this.util.getCoordinateType(a).then(g.hitch(this,
function(c){if(c)if(1===c.length){var e=this.processCoordTextInput(a,c[0],!1);this.util.getXYNotation(e,c[0].conversionType).then(g.hitch(this,function(a){0>=a.length||!a[0][0]&&0!==a[0][0]?(this.hasError=!0,this.valid=!1):(this.valid=this.isManual=!0,this.formatType=c[0].conversionType,this.inputType=c[0].conversionType,this.coordinateEsriGeometry=new v(a[0][0],a[0][1],new w({wkid:4326})));this.message="Invalid Coordinate";this.inputTypeDef.resolve(this)}));g.hitch(this,function(){this.hasError=
!0;this.valid=!1;this.inputType="UNKNOWN";this.message="Invalid Coordinate";this.inputTypeDef.resolve(this)})}else{var b=new D({nls:this.nls,title:this.nls.comfirmInputNotation,content:new E(c,{nls:this.nls}),style:"width: 400px",hasSkipCheckBox:!1});b.show().then(g.hitch(this,function(){var d=x.filter(c,function(a){return a.name===b.content.comboOptions.get("value")}),e=this.processCoordTextInput(a,d[0],!1);this.util.getXYNotation(e,d[0].conversionType).then(g.hitch(this,function(a){0>=a.length||
!a[0][0]&&0!==a[0][0]?(this.hasError=!0,this.valid=!1,this.message="Invalid Coordinate"):(this.valid=this.isManual=!0,this.inputType=c[0].conversionType,this.formatType=c[0].conversionType,this.coordinateEsriGeometry=new v(a[0][0],a[0][1],new w({wkid:4326})),this.message="");this.inputTypeDef.resolve(this)}));g.hitch(this,function(){this.hasError=!0;this.valid=!1;this.inputType="UNKNOWN";this.message="Invalid Coordinate";this.inputTypeDef.resolve(this)})},function(){this.inputTypeDef.reject()}))}else this.hasError=
!0,this.valid=!1,this.inputType="UNKNOWN",this.message="Invalid Coordinate",this.inputTypeDef.resolve(this)}));return this.inputTypeDef},processCoordTextInput:function(a,c,e){var b=c.pattern.exec(a),d,h,f,k,l,m,g,p,q,r,t=!1,n=c.name;switch(c.name){case "DD":d=b[2];h=b[7];f=b[10];k=b[16];l=b[3].replace(/[,:]/,".");m=b[11].replace(/[,:]/,".");n="DD";break;case "DDrev":d=b[11];h=b[16];f=b[2];k=b[8];l=b[12].replace(/[,:]/,".");m=b[3].replace(/[,:]/,".");n="DD";break;case "DDM":d=b[2];h=b[7];f=b[10];k=
b[15];l=b[3];g=b[4].replace(/[,:]/,".");m=b[11];p=b[12].replace(/[,:]/,".");n="DDM";break;case "DDMrev":d=b[10];h=b[15];f=b[2];k=b[7];l=b[11];g=b[12].replace(/[,:]/,".");m=b[3];p=b[4].replace(/[,:]/,".");n="DDM";break;case "DMS":d=b[2];h=b[8];f=b[11];k=b[17];l=b[3];g=b[4];q=b[5].replace(/[,:]/,".");m=b[12];p=b[13];r=b[14].replace(/[,:]/,".");n="DMS";break;case "DMSrev":d=b[11],h=b[17],f=b[2],k=b[8],l=b[12],g=b[13],q=b[14].replace(/[,:]/,"."),m=b[3],p=b[4],r=b[5].replace(/[,:]/,"."),n="DMS"}d&&h?(t=
!0,d=(new RegExp(/[Ss-]/)).test(d)?"-":"+"):d=d&&(new RegExp(/[Ss-]/)).test(d)?"-":h&&(new RegExp(/[Ss-]/)).test(h)?"-":"+";f&&k?(t=!0,f=(new RegExp(/[Ww-]/)).test(f)?"-":"+"):f=f&&(new RegExp(/[Ww-]/)).test(f)?"-":k&&(new RegExp(/[Ww-]/)).test(k)?"-":"+";t&&(e||new B({message:this.nls.prefixSuffixError}));switch(n){case "DD":a=d+l+","+f+m;break;case "DDM":a=d+l+" "+g+","+f+m+" "+p;break;case "DMS":a=d+l+" "+g+" "+q+","+f+m+" "+p+" "+r}return a},getInputTypeSync:function(){return null!==this.util.getCoordinateType(this.inputString)},
getFormattedValue:function(){this.coordinateEsriGeometry&&this.util.getCoordValues({x:this.coordinateEsriGeometry.x,y:this.coordinateEsriGeometry.y},this.formatType,6).then(g.hitch(this,function(a){this.set("outputString",this.getCoordUI(a))}))},getCoordUI:function(a){var c=this.get("formatPrefix"),e;switch(this.formatType){case "DD":a=this.util.getFormattedDDStr(a,this.formatString,c);e=a.formatResult;break;case "DDM":a=this.util.getFormattedDDMStr(a,this.formatString,c);e=a.formatResult;break;case "DMS":a=
this.util.getFormattedDMSStr(a,this.formatString,c);e=a.formatResult;break;case "USNG":a=this.util.getFormattedUSNGStr(a,this.formatString,c);e=a.formatResult;break;case "MGRS":a=this.util.getFormattedMGRSStr(a,this.formatString,c);e=a.formatResult;break;case "GARS":a=this.util.getFormattedGARSStr(a,this.formatString,c);e=a.formatResult;break;case "GEOREF":a=this.util.getFormattedGEOREFStr(a,this.formatString,c);e=a.formatResult;break;case "UTM":a=this.util.getFormattedUTMStr(a,this.formatString,
c);e=a.formatResult;break;case "UTM (H)":a=this.util.getFormattedUTMHStr(a,this.formatString,c),e=a.formatResult}return e}})});