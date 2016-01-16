define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/MFyouli/scenicMap'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cYZjIRn';
	this._flag_='ae62a369e46168b4d3330d803e0a964b';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fBelongJingqu":{"define":"fBelongJingqu","label":"景点所属景区","name":"fBelongJingqu","relation":"fBelongJingqu","type":"String"},"fCoordinate":{"define":"fCoordinate","label":"景点坐标","name":"fCoordinate","relation":"fCoordinate","type":"String"},"fID":{"define":"fID","label":"景点ID","name":"fID","relation":"fID","type":"String"},"fImage":{"define":"fImage","label":"景点图片","name":"fImage","relation":"fImage","type":"String"},"fIntroduce":{"define":"fIntroduce","label":"景点介绍","name":"fIntroduce","relation":"fIntroduce","type":"String"},"fName":{"define":"fName","label":"景点名称","name":"fName","relation":"fName","type":"String"},"fSound":{"define":"fSound","label":"景点语音","name":"fSound","relation":"fSound","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"jingdianDataCustomRefresh"},"idColumn":"fID","limit":20,"xid":"jingdianData"});
}}); 
return __result;});