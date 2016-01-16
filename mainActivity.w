<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onLoad="modelLoad"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents1"> 
        <div class="x-contents-content" xid="mapContent"> 
          <div xid="baiduMap" style="width:100%;height:100%;" class="x-scroll-view"/>  
          <div xid="head" class="head"> 
            <div class="head-city" id="city"/>  
            <div id="weather" class="head-weather"/> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="listContent"> 
          <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
            xid="listPanel"> 
            <div class="x-panel-top" xid="listPanelTop"> 
              <div component="$UI/system/components/justep/titleBar/titleBar"
                class="x-titlebar" style="background-color:#3ba030;" xid="listTitleBar"> 
                <div class="x-titlebar-left" xid="div1"/>  
                <div class="x-titlebar-title" id="listTitleName"/>  
                <div class="x-titlebar-right reverse" xid="div3"/> 
              </div> 
            </div>  
            <div class="x-panel-content" xid="listPanelContent" id="listPanelContent"/> 
          </div> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="bottom1"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group x-card btn-group-justified"
        tabbed="true" xid="buttonGroup1"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-left"
          label="景区地图" xid="mapBtn" icon="icon-earth" target="mapContent"> 
          <i xid="i1" class="icon-earth"/>  
          <span xid="span1">景区地图</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-icon-left"
          label="景区列表" xid="listBtn" icon="icon-navicon" target="listContent"> 
          <i xid="i2" class="icon-navicon"/>  
          <span xid="span2">景区列表</span> 
        </a> 
      </div> 
    </div> 
  </div> 
</div>
