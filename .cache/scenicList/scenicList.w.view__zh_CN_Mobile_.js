window.__justep.__ResourceEngine.loadCss([{url: '/v_0faa76a39fc94f7a9979861bc4dd8001l_zh_CNs_d_/system/components/comp.min.css', include: '$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/form/css/form,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/accordion/css/accordion,$model/system/components/justep/common/css/scrollable,$model/system/components/bootstrap/pager/css/pager,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/input/css/datePickerPC,$model/system/components/bootstrap/navs/css/navs,$model/system/components/justep/contents/css/contents,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/bootstrap/navbar/css/navbar,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/bootstrap/dialog/css/dialog,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/menu/css/menu,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/common/css/forms,$model/system/components/justep/bar/css/bar,$model/system/components/bootstrap/tabs/css/tabs,$model/system/components/bootstrap/pagination/css/pagination'},{url: '/v_8b175a5a3e784d57b7d5b3cf09e61749l_zh_CNs_d_/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/v_c61a08a7b2464238b6fdcaf5ef7c763fl_zh_CNs_d_/system/components/comp.min.js','/v_bd3411997bd044d9be0161c1031c12ddl_zh_CNs_d_/system/common.min.js','/v_a05d30e56ea74bfab5c1e2fdb5177435l_zh_CNs_d_/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/button');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/MFyouli/scenicList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this.__cid='cMVjqQn';
	this._flag_='30b67a50d66f4277c5b0af54f478a8ea';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fBelongJingqu":{"define":"fBelongJingqu","label":"景点所属景区","name":"fBelongJingqu","relation":"fBelongJingqu","type":"String"},"fCoordinate":{"define":"fCoordinate","label":"景点坐标","name":"fCoordinate","relation":"fCoordinate","type":"String"},"fID":{"define":"fID","label":"景点ID","name":"fID","relation":"fID","type":"String"},"fImage":{"define":"fImage","label":"景点图片","name":"fImage","relation":"fImage","type":"String"},"fIntroduce":{"define":"fIntroduce","label":"景点介绍","name":"fIntroduce","relation":"fIntroduce","type":"String"},"fName":{"define":"fName","label":"景点名称","name":"fName","relation":"fName","type":"String"},"fSound":{"define":"fSound","label":"景点语音","name":"fSound","relation":"fSound","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"jingdianDataCustomRefresh"},"idColumn":"fID","limit":20,"xid":"jingdianData"});
}}); 
return __result;});
