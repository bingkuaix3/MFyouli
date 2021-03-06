define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/MFyouli/scenic'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cNFZnaq';
	this._flag_='93512209787b653109f5d7109bb5f597';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"好吃地址","name":"fAddress","relation":"fAddress","type":"String"},"fBelongJingqu":{"define":"fBelongJingqu","label":"好吃所属景区","name":"fBelongJingqu","relation":"fBelongJingqu","type":"String"},"fCoordinate":{"define":"fCoordinate","label":"好吃坐标","name":"fCoordinate","relation":"fCoordinate","type":"String"},"fID":{"define":"fID","label":"好吃ID","name":"fID","relation":"fID","type":"String"},"fIntroduce":{"define":"fIntroduce","label":"好吃介绍","name":"fIntroduce","relation":"fIntroduce","type":"String"},"fName":{"define":"fName","label":"好吃店名","name":"fName","relation":"fName","type":"String"},"fPictrue1":{"define":"fPictrue1","label":"好吃图片1","name":"fPictrue1","relation":"fPictrue1","type":"String"},"fPictrue2":{"define":"fPictrue2","label":"好吃图片2","name":"fPictrue2","relation":"fPictrue2","type":"String"},"fPictrue3":{"define":"fPictrue3","label":"好吃图片3","name":"fPictrue3","relation":"fPictrue3","type":"String"},"fPictrue4":{"define":"fPictrue4","label":"好吃图片4","name":"fPictrue4","relation":"fPictrue4","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"haochiDataCustomRefresh"},"idColumn":"fID","limit":20,"xid":"haochiData"});
}}); 
return __result;});